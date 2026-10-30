/**
 * Simple FULL-ATTENTION dense / GQA inference VRAM approximation, not a deployment fit guarantee.
 * One weight copy and uniform K/V cache per layer. No MoE active/total distinction, hybrid
 * layers, sparse/window/recurrent attention, allocator/KV fragmentation or tensor parallelism.
 * GB and GiB are different; user-facing results consistently use GiB.
 */
export const DEFAULTS = Object.freeze({
  parametersB: 8, weightBits: 16, layers: 32, kvHeads: 8, headDim: 128,
  contextTokens: 8192, sequences: 1, kvBits: 16, overheadPercent: 20,
  gpuGiB: 24, deviceReserveGiB: 2
});

const RANGES = Object.freeze({
  parametersB: [0.001, 1000], weightBits: [1, 64], layers: [1, 512],
  kvHeads: [1, 1024], headDim: [1, 1024], contextTokens: [1, 1048576],
  sequences: [1, 256], kvBits: [1, 32], overheadPercent: [0, 200],
  gpuGiB: [1, 2000], deviceReserveGiB: [0, 200]
});
const INTEGERS = new Set(['layers','kvHeads','headDim','contextTokens','sequences']);
const GIB = 1024 ** 3;
export function calculate(raw) {
  const x = {};
  for (const [key, [min, max]] of Object.entries(RANGES)) {
    if (raw === null || typeof raw !== 'object') throw new RangeError('inputs must be an object');
    const original = raw[key];
    const value = Number(original);
    if ((typeof original !== 'number' && typeof original !== 'string') ||
        (typeof original === 'string' && !original.trim()) ||
        original === null || original === undefined ||
        !Number.isFinite(value) || value < min || value > max ||
        (INTEGERS.has(key) && !Number.isInteger(value))) {
      throw new RangeError(`${key} must be ${INTEGERS.has(key) ? 'an integer ' : ''}between ${min} and ${max}`);
    }
    x[key] = value;
  }
  // B=10^9 parameters, not 2^30. Quantization packing/mixed precision is NOT modelled.
  const weightsGiB = x.parametersB * 1e9 * (x.weightBits / 8) / GIB;
  // Simplified full-attention GQA KV calculation: K and V, each layer and active sequence.
  const kvGiB = 2 * x.layers * x.kvHeads * x.headDim * x.contextTokens * x.sequences * (x.kvBits / 8) / GIB;
  const runtimeGiB = (weightsGiB + kvGiB) * x.overheadPercent / 100;
  const neededGiB = weightsGiB + kvGiB + runtimeGiB + x.deviceReserveGiB;
  for (const [key, val] of Object.entries({weightsGiB, kvGiB, runtimeGiB, neededGiB})) {
    if (!Number.isFinite(val) || val < 0) throw new RangeError(`unrepresentable ${key}`);
  }
  const headroomGiB = x.gpuGiB - neededGiB;
  return {
    inputs: x, weightsGiB, kvGiB, runtimeGiB, deviceReserveGiB: x.deviceReserveGiB,
    neededGiB, headroomGiB, estimatedWithinCapacity: headroomGiB >= 0,
    note: 'A rough capacity calculation, not measured usage or a promise that a GPU/runtime will work.'
  };
}
export function formatGiB(n) { return `${n.toFixed(2)} GiB`; }
