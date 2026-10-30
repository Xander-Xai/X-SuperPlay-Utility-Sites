import {DEFAULTS, calculate, formatGiB} from './estimate.mjs';
const form = document.querySelector('#estimate-form');
const values = document.querySelector('#readout');
const status = document.querySelector('#result-status');
const breakdown = document.querySelector('#memory-breakdown');
const parameters = document.querySelector('#parameter-summary');

const pairs = [
  ['Weight memory', 'weightsGiB'], ['KV cache', 'kvGiB'],
  ['Runtime allowance', 'runtimeGiB'], ['Reserved free GPU capacity', 'deviceReserveGiB']
];
function render() {
  const input = Object.fromEntries(Object.keys(DEFAULTS).map(k => [k, form.elements.namedItem(k)?.value]));
  try {
    const result = calculate(input);
    const {estimatedWithinCapacity, headroomGiB, neededGiB, inputs} = result;
    values.textContent = formatGiB(neededGiB);
    status.textContent = estimatedWithinCapacity
      ? `Within the stated ${inputs.gpuGiB} GiB capacity by ${formatGiB(headroomGiB)} — NOT a runtime guarantee.`
      : `Over the stated ${inputs.gpuGiB} GiB capacity by ${formatGiB(-headroomGiB)}. Try a different configuration.`;
    status.className = estimatedWithinCapacity ? 'result-status cautious' : 'result-status warning';
    breakdown.replaceChildren(...pairs.map(([label, key]) => {
      const li = document.createElement('li');
      const name = document.createElement('span'); name.textContent = label;
      const amount = document.createElement('strong'); amount.textContent = formatGiB(result[key]);
      li.append(name, amount); return li;
    }));
    parameters.textContent = `Parameters × weight bits ÷ 8 + 2 × layers × KV heads × head dim × tokens × concurrent sequences × KV bytes + ${inputs.overheadPercent}% runtime allowance + ${inputs.deviceReserveGiB} GiB reserve. Uniform full attention assumed.`;
  } catch(e) {
    values.textContent = '—';
    status.textContent = `Invalid inputs: ${e.message}`;
    status.className = 'result-status warning';
    breakdown.replaceChildren(); parameters.textContent = 'Correct highlighted input values before calculating.';
  }
}
form.addEventListener('input', render);
form.addEventListener('change', render);
form.addEventListener('reset', () => queueMicrotask(render));
render();
