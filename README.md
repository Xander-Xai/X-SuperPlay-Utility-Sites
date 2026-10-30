# X-SuperPlay Utility Sites

**Private, evidence-gated overseas developer utility experiments** · Technical prototype only · **No public site or advertising approved**

> Positioning: privacy-first browser utilities with transparent methodology and reproducible tests. The first local sample is an **LLM VRAM Planner**; user demand, search distribution, live traffic, ad approval and income remain unverified. This repository is not an OPC business ledger, active offer, or production SaaS.

## Current gates (2026-10-30)

| Gate | State | Reason |
|---|---|---|
| Repository created | **VERIFIED** | Owner-created private GitHub repo, main exists |
| G0 public desk research | **DOCUMENTED** | [Evidence](docs/market-evidence.md); independent problem discussions and competitor alternatives |
| G1 unmet differentiated need | **NO-GO for public product** | 12 strong alternatives; no independent user tests/search impressions/buyer evidence |
| G2 commercial time / spend authorization | **NOT VERIFIED** | Technical local sample is reversible; no paid resources or public action |
| G3 public deployment | **NOT APPROVED / NOT RUN** | No domain, Pages project, live URL or legal/privacy review |
| G4 advertising/payment | **NOT APPROVED / NOT RUN** | No AdSense site/account approval or receipt data |

## Quick start — offline technical preview

**Prerequisites:** Node 20+ and Python 3 for the optional local preview. No npm package installation, login, external API, database or paid service is required.

```bash
npm run verify
npm run preview
# Open http://localhost:8000 on your own machine.
```

The first command runs deterministic math and static-link/no-network tests, a limited no-ad/static asset check and builds five **noindex** pages into `dist/`. This is not proof of production security, browser support or market fit. The preview command explicitly binds to **127.0.0.1 only** (not all network interfaces). Optional real Chromium DOM smoke test: `npm run browser:smoke` after installing Python Playwright and a local Chromium executable; this is not part of the zero-dependency CI and must not be called a passed browser check unless actually run.

### What the prototype computes

- Ideal weight memory from parameter count and declared precision, converted to GiB.
- A simplified **uniform full-attention GQA** KV cache estimate with context, KV heads, head dimension, precision and concurrent sequences.
- User-chosen runtime allowance, device reserve and single-GPU memory budget.
- Explicit invalid-input errors and **not-a-guarantee** warnings; no named-model or actual-device compatibility claims.

See the [spec](docs/mvp-spec.md) and live prototype's local [methodology page](public/methodology.html) for assumptions/exclusions (hybrid/sliding-window, real GGUF overhead, MoE, offload, parallelism, allocator effects).

## Source of truth and cross-repo index

- [OPC PD-OW-01](https://github.com/Xander-Xai/X-SuperPlay-OPC-Blueprint/pull/193): only business owner for opportunity, budget, approval, revenue and stage; that PR itself is not yet a merged commercial launch decision.
- [Opportunity OS](https://github.com/Xander-Xai/X-SuperPlay-Opportunity-OS): validated public evidence/market pattern study, not billing.
- [AI Engineering OS](https://github.com/Xander-Xai/X-SuperPlay-AI-Engineering-OS): project engineering standards; this repo owns **its** code and tests.
- [Strategy](https://github.com/Xander-Xai/X-SuperPlay-Strategy) / [X Growth](https://github.com/Xander-Xai/X-SuperPlay-X-Growth-OS): platform positioning/distribution only after approval.
- [Personal OS](https://github.com/Xander-Xai/X-SuperPlay-Personal-OS): portfolio navigation, not another business source of truth.

Read [cross-repo boundaries](docs/portfolio-links.md). No new `WS-xxx`, commercial Stage, Offer or paid experiment is granted by creating this repo.

## Documents and decisions

| File | Purpose |
|---|---|
| [AGENTS.md](AGENTS.md) | Safety/authority STOP boundaries for coding agents |
| [G0/G1 market evidence](docs/market-evidence.md) | 20 **candidate** search intents (not volume), 12 competitors, 6 independent user problem anecdotes, contrarian market NO-GO |
| [Prototype PRD](docs/mvp-spec.md) | Scope and acceptance criteria for offline math sample |
| [Prices and gates](docs/costs-and-gates.md) | Cloudflare, domain, ads, consent, spending and owner approval |
| [Release and rollback](docs/release-and-rollback.md) | Deployment is gated; no public release performed |
| [Portfolio role links](docs/portfolio-links.md) | References to existing systems without copied revenue state |
| [Local agent runbook](docs/agent-runbook.md) | Safe Codex/Claude Code follow-up prompt |

## Non-goals and honest status

No automated SEO content farm, customer file processing, account registration, backend, tracking pixels, advertisement tags, false conversion metrics, presumed search indexing or direct `main` edits for project development. Until public-domain branding, IP/license and release permissions are separately reviewed, there is **no declared open-source license**; treat source reuse according to the repository's current rights/permissions.

**Success today means a reviewed repository, offline testable prototype and actionable market counterevidence — not an active overseas business.**
