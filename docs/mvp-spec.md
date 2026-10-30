# Engineering specification — one private, offline technical sample

**Status:** TECHNICAL_PROTOTYPE / UNRELEASED / NOT_MARKET_VALIDATED. This is a reversible local coding exercise, not proof G1 passed or that OPC's separate G2/G3 founder authority was granted.

## Problem and user story
As a local LLM developer, I want to estimate baseline theoretical model weight and KV cache memory, state my assumptions and see why a chosen GPU memory size may be insufficient, without uploading data or installing a model.

## The V1 scope

- One self-contained browser-based VRAM calculator, no backend or paid API, no personal data.
- Inputs: parameter billions; weight precision; layers; KV heads; head dimension; context tokens; concurrent sequences; KV element precision; runtime overhead %; GPU capacity and headroom reserve.
- Deterministic arithmetic in **GiB**, with clear formula, error validation, fit/non-fit capacity comparison, and warnings for architecture mismatch.
- Responsive, accessible-ish semantic HTML with explicit labels, keyboard input, focus markers and a live status message. This is **not a professional WCAG conformance audit**.
- Five noindex static pages (tool, About, Methodology, Privacy draft, Contact draft); disallowed crawlers by default, no public deployment or production contact info.
- Node built-in test runner, zero third-party npm packages, repeatable static build to `dist/`.

## Known technical limitations

- No real model metadata, exact GGUF sizes, vendor GPU detection, GPU tensor-parallel plan, visual output tests, live vLLM/llama.cpp memory measurement, real quant overhead, hybrid/recurrent/sliding-window/latent attention, MoE, paged KV, token allocator/fragmentation or CPU offload.
- User-provided fractional/ideal bits per weight is not a guarantee of actual storage format.
- `estimatedWithinCapacity` is a rough budget comparison **not a deployment success probability**, throughput estimate or advertised fit for a named GPU.
- 4-bit KV represents ideal storage only; some runtimes require per-block metadata or lack equivalent kernels.

## Acceptance tests

| Check | Evidence source | Expected state |
|---|---|---|
| Baseline FP16 weight and 8k KV calculations | tests/estimate.test.mjs | CI or local Node test passes |
| KV scales with context and concurrency; weights not affected | tests/estimate.test.mjs | CI or local Node test passes |
| Malformed, missing and out-of-range inputs fail closed | tests/estimate.test.mjs | CI or local Node test passes |
| Pure browser calculation without fetch, ads, remote JS | scripts/check.mjs | limited string/static scan passes; **not comprehensive** |
| Five pages are built and noindex by default | scripts/build.mjs | local static build passes |
| Real user validation | OPC-sourced consented evidence | **NOT RUN** |
| Public production/site health/HTTPS/CMP/ads | G3/G4 owner-controlled activities | **NOT APPROVED** |

## Commands

```bash
npm run verify
npm run preview
# Optional: open http://localhost:8000 from a browser.
```

Node 20+ and Python 3 are prerequisites. `npm run verify` uses no package downloads. `npm run preview` is a **local** server and does not authorize external publishing.
