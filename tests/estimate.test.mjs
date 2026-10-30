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
