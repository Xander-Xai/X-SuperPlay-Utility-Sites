# Utility Sites — second-pass acceptance and repairs (2026-10-30)

> Status: **LOCAL_ENGINEERING_RECHECK_PASS / REMOTE_CI_NOT_VERIFIED / G1_MARKET_NO_GO / NO_PUBLIC_DEPLOYMENT**. This is an evidence snapshot, not Founder G2/G3/G4 authorization. Exact GitHub PR HEAD must be independently reviewed after this patch.

## Factual checks

- Verified via connected GitHub: private repository exists, main and PR #1 exist; only PR branch contains prototype, default main is not the product.
- Original unmodified `npm run verify`: **7/7 Node tests passed**, static check and 5-page noindex build passed.
- **Found real UI defect** using Chromium DOM: reset after invalid numeric input left result blank (`—`). Cause: a `queueMicrotask(render)` ran before native form reset default action. Fixed using `requestAnimationFrame(render)`.
- **Found local-preview exposure**: Python `http.server` without explicit bind listens on all interfaces on some systems. Changed preview command to bind `127.0.0.1`; local HTTP request returned 200 and `robots.txt` contained `Disallow: /`.
- **Found validation coercion gap**: empty whitespace string, boolean and array could be silently coerced to zero or a numeric value in optional zero-allowed fields. Now rejected as malformed input.
- **New local evidence (Node 22.16.0)**: `npm run verify` = **13/13** unit+static tests PASS, `npm run build` = five pages PASS. One optional Chromium DOM smoke (Python Playwright + installed Chromium) = PASS for default, input-change, invalid value, and reset with no JS exceptions. This is in-memory DOM smoke, **not a full live HTTP E2E, device matrix or accessibility certification**.
- Security boundary: no cloud deployment workflow; no login, paid API, ads or external analytics; site pages remain `noindex,nofollow`, robots disallow. Neither privacy nor security audits should be overstated.

## CI blocker — external to tested code

- Original PR head `7f7642711d8dd8a0ab30bf246add1b3e8bda7a80`: [run 41028051875](https://github.com/Xander-Xai/X-SuperPlay-Utility-Sites/actions/runs/41028051875) returned failure; GitHub job API reported `runner_id=0`, `steps=[]`. The workflow code did **not execute**. Its precise account/platform reason is **UNKNOWN** until GitHub Actions usage, repo settings and job annotations are reviewed.
- Do **not** delete checks or mark them green without a real execution. [Issue #3](https://github.com/Xander-Xai/X-SuperPlay-Utility-Sites/issues/3) owns the blocker. After this PR head changes, verify its latest workflow run separately.
- GitHub Actions was not treated as a substitute for the independent local checks above.

## Commercial/market blocker

- [Market evidence](market-evidence.md) contains **20 authored query candidates**, not measured Google searches; **12 alternative URLs**, not proved exhaustive competitors; **6 community complaints**, not buyer interviews. One live competitor example [wati](https://wati.dev/llm-vram-calculator/) already provides browser-local model/attention estimates; a [user discussion](https://www.reddit.com/r/LocalLLaMA/comments/1tym480/) expresses accuracy concerns. This corroborates a problem and mature substitutes, **not** willingness to pay or unique differentiation.
- [Issue #2](https://github.com/Xander-Xai/X-SuperPlay-Utility-Sites/issues/2) remains Open. No interview, peak-VRAM runtime benchmark, search telemetry, traffic, AdSense approval or revenue was produced by this task.
- Repository creation is already a fact, but **OPC PD-OW-01 remains PD0 / research reserve**; no new Offer, Stage, WS or Experiment ID was issued.
- Actual release or domain purchase requires explicit Founder-approved scope; G3 public launch and G4 ads remain prohibited.

## Exact next actions

1. Investigate no-runner failure against GitHub account Actions usage/permissions; rerun exact-head checks and capture executed steps.
2. Execute [the G1 user comparison protocol](G1-user-validation-protocol.md) with permission and real users; compare logs and alternatives, then submit a candid GO/NO-GO to OPC.
3. Review original formula for architectures outside uniform full-attention/GQA; do not extrapolate hybrid/MoE or exact GPU fit.
4. On green CI and signed PR review, merge only this private **technical** change if desired; this does **not** grant G3 public-release rights.
