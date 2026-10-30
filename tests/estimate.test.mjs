import {test} from 'node:test';
import assert from 'node:assert/strict';
import {DEFAULTS, calculate, formatGiB} from '../src/estimate.mjs';
const close = (a,b) => assert.ok(Math.abs(a-b) < 1e-10, `${a} ≠ ${b}`);
test('baseline dense GQA: weights and 8192-token KV are calculated in GiB',()=>{
  const x=calculate(DEFAULTS);
  close(x.weightsGiB, 8e9*2/2**30);
  close(x.kvGiB, 1);
  close(x.runtimeGiB, (x.weightsGiB+1)*.2);
  assert.equal(x.estimatedWithinCapacity, true);
});
test('context doubling exactly doubles full-attention KV',()=>{
  const base=calculate(DEFAULTS);
  close(calculate({...DEFAULTS,contextTokens:16384}).kvGiB, 2*base.kvGiB);
});
test('concurrency and quantization scale cache without changing weights',()=>{
  const a=calculate(DEFAULTS), b=calculate({...DEFAULTS,sequences:4,kvBits:8});
  close(b.kvGiB, a.kvGiB*2); close(b.weightsGiB,a.weightsGiB);
});
test('no hidden multi GPU aggregation or guaranteed fit',()=>{
  const x=calculate({...DEFAULTS,gpuGiB:16});
  assert.equal(x.estimatedWithinCapacity,false);
  assert.ok(x.note.includes('not'));
});
test('invalid ranges, missing fields, NaN, Infinity, fractions reject',()=>{
  for (const variant of [
    {sequences:0},{layers:-3},{contextTokens:1.5},{gpuGiB:Infinity},
    {headDim:'oops'},{parametersB:0},{overheadPercent:-1},{deviceReserveGiB:999}
  ]) assert.throws(()=>calculate({...DEFAULTS,...variant}),RangeError);
  const copy={...DEFAULTS};delete copy.kvHeads;
  assert.throws(()=>calculate(copy),RangeError);
});
test('zero overhead/reserve remains calculable and quant types change weights',()=>{
  const x=calculate({...DEFAULTS,overheadPercent:0,deviceReserveGiB:0,weightBits:4});
  close(x.runtimeGiB,0);close(x.neededGiB,x.weightsGiB+x.kvGiB);
  assert.ok(calculate({...DEFAULTS,weightBits:4.5}).weightsGiB>x.weightsGiB);
});
test('output formatting always labels GiB',()=>{
  assert.equal(formatGiB(1.1234),'1.12 GiB');
});

test('rejects whitespace-only, boolean, arrays and missing input object',()=>{
  for (const variant of [
    {overheadPercent:'  '},{deviceReserveGiB:false},
    {gpuGiB:[]},{kvBits:{}},{parametersB:true}
  ]) assert.throws(()=>calculate({...DEFAULTS,...variant}),RangeError);
  for (const bad of [undefined,null,false,1,''])
    assert.throws(()=>calculate(bad),RangeError);
});
test('boundary equality and reserve exhaustion are cautious not guarantees',()=>{
  const base=calculate(DEFAULTS);
  const atLimit=calculate({...DEFAULTS,gpuGiB:base.neededGiB});
  close(atLimit.headroomGiB,0);
  assert.equal(atLimit.estimatedWithinCapacity,true);
  const beyond=calculate({...DEFAULTS,deviceReserveGiB:200});
  assert.equal(beyond.estimatedWithinCapacity,false);
  assert.ok(beyond.note.includes('not'));
});
test('calculation does not mutate caller inputs and excludes key injection',()=>{
  const args={...DEFAULTS,customSecret:'ignored'};
  const before=JSON.stringify(args);
  const result=calculate(args);
  assert.equal(JSON.stringify(args),before);
  assert.equal(Object.hasOwn(result.inputs,'customSecret'),false);
});
