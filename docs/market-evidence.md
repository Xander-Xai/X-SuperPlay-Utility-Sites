# G0/G1 demand and competition evidence — 2026-10-30

**Status: DESK_RESEARCH_COMPLETE / G1_MARKET_GATE_NOT_PASSED / NO_TRAFFIC_DATA.** This document reports independent public evidence and a cautious decision, not a paid audience, verified query volumes, a product-market fit claim, an approved development budget, or an authorized public deployment. Source pages can change. See OPC's `PD-OW-01` proposal for binding business authority.

## Hypotheses and potential payer

- **User**: English-speaking local/self-hosted LLM developers trying to understand the memory budget before downloading, renting or buying hardware. Also RAG developers trying to inspect chunk splitting.
- **Alternative**: manufacturer/runtime tools, Hugging Face model metadata, vendor calculators, existing community calculators, notebooks, and local trial runs.
- **Primary job to be done**: explain **why** the expected VRAM or chunk output differs from observation, not merely produce a total number.
- **Payer hypothesis**: future ad inventory buyer pays via advertising platform; free user not assumed to pay. A developer consulting lead is a **different** hypothetical business; neither observed.
- **Counterhypothesis**: calculators already saturate the niche, and developers use LM Studio/llama.cpp defaults rather than navigate to standalone sites. A tiny calculator with no accuracy or trust advantage earns neither visits nor revenue.

## Candidate search intents (20 queries, NOT verified keyword/search-volume data)

These are **researcher-authored phrasing** inferred from publicly documented tasks. They are not Search Console or paid keyword planner export. Sources listed are supporting *topic existence*, not proof that the exact query has demand or clicks.

| # | Candidate English intent phrase | Topic evidence |
|---|---|---|
| 1 | llm vram calculator with kv cache | [wati](https://wati.dev/llm-vram-calculator/) |
| 2 | how much vram for 27b q8 long context | [real user](https://www.reddit.com/r/LocalLLaMA/comments/1tvluaj/) |
| 3 | qwen 27b gpu 48gb enough | [real user](https://www.reddit.com/r/LocalLLaMA/comments/1tvluaj/) |
| 4 | kv cache memory for 256k context | [real user](https://www.reddit.com/r/LocalLLaMA/comments/1s1iiw6/) |
| 5 | kv cache quantization vram saving | [real user](https://www.reddit.com/r/LocalLLaMA/comments/1txpqru/) |
| 6 | why is vram calculator inaccurate | [real user](https://www.reddit.com/r/LocalLLaMA/comments/1tym480/) |
| 7 | gguf actual file size vram estimate | [community discussion](https://www.reddit.com/r/LocalLLaMA/comments/1rkqny2/) |
| 8 | llm inference memory context batch size | [looot](https://looot.ai/free-tools/vram-calculator) |
| 9 | gqa kv cache memory estimate | [public developer example](https://www.reddit.com/r/LocalLLM/comments/1uiovwv/) |
| 10 | model quantization fp16 int8 q4 gpu fit | [canirunllm](https://canirunllm.dev/) |
| 11 | qwen gpu vram fp8 kv cache | [vdf calculator](https://vdf.ai/llm-vram-calculator/) |
| 12 | gpu vram vs model memory overhead | [Tensorust](https://tensorust.com/tools/llm-vram-calculator/) |
| 13 | multiple gpu llama model vram calculator | [Newegg-style calculator](https://llm-vram-calculator.newegg.org/) |
| 14 | local llm memory estimation safety reserve | [Salih Gencer](https://www.salihgencer.com/en/tools/vram/) |
| 15 | rag chunking visualizer overlap | [TipTinker](https://www.tiptinker.com/rag-chunking-visualizer/) |
| 16 | how to see rag text chunk boundaries | [TOEA](https://toea.com/text-chunker-visualizer) |
| 17 | compare token and character chunking rag | [CodingTool](https://codingtool.dev/rag-chunker) |
| 18 | langchain recursive character splitter visualizer | [Hysen Labs](https://hysenlabs.com/tools/rag-text-chunker) |
| 19 | rag overlap duplication visualization | [LLMGraph](https://llmgraph.ai/tools/rag-chunking-visualizer) |
| 20 | exact token counts for RAG document chunking | [CodingTool](https://codingtool.dev/rag-chunker) |

## Competitor/substitute observations (12 independent URLs, no ranking/traffic claims)

| Alternative | Actual observed positioning / capabilities | What it challenges |
|---|---|---|
| [looot VRAM](https://looot.ai/free-tools/vram-calculator) | Model, quantization, context, KV cache, GPU fit, browser-only | Simple offline VRAM arithmetic is already free |
| [CanIRunLLM](https://canirunllm.dev/) | Model/GPU fit, multi GPU, RAM offload, actual GGUF where possible | Hardware fit recommendations are not new |
| [wati VRAM](https://wati.dev/llm-vram-calculator/) | Architecture-aware KV and overhead, model presets | Formula transparency is already supplied |
| [vdf calculator](https://vdf.ai/llm-vram-calculator/) | Context, model config, concurrent workload | Context and concurrency analysis already exists |
| [Tensorust VRAM](https://tensorust.com/tools/llm-vram-calculator/) | Model architectures, quantization, KV, GPU comparison | Even nuanced estimates are available |
| [Salih Gencer VRAM](https://www.salihgencer.com/en/tools/vram/) | Multiple precision options, runtime reserve, GPU suggestions | Most V1 features already available |
| [Newegg LLM estimator](https://llm-vram-calculator.newegg.org/) | Model selection, GPU capacity and formula notes | Broad reach through existing electronics ecosystems |
| [TipTinker RAG](https://www.tiptinker.com/rag-chunking-visualizer/) | Local character chunks, overlap highlights | Simple RAG chunk visualization is commoditized |
| [TOEA RAG](https://toea.com/text-chunker-visualizer) | Browser-only overlap, token estimates | Local processing alone is insufficient differentiation |
| [CodingTool RAG](https://codingtool.dev/rag-chunker) | Multiple splitting strategies, exact tokenizer options | More complete RAG product already available |
| [Hysen Labs chunker](https://hysenlabs.com/tools/rag-text-chunker) | Recursive splitting and local processing | LangChain compatibility already offered |
| [LLMGraph RAG](https://llmgraph.ai/tools/rag-chunking-visualizer) | Chunk size, overlap, embedding cost visualization | Even cost feature is already competing |

Coverage notes: pages were checked publicly on 2026-10-30; content/vendor claims are not independently benchmarked; URLs are references, not endorsements. No evidence of ranking difficulty, impressions, organic click-through, revenue or actual site conversion was obtained.

## Independent end-user problem evidence (6 posts; not six paying customers)

| Public source | Real expressed problem / uncertainty | Key limitation |
|---|---|---|
| [Reddit 2026-06-03](https://www.reddit.com/r/LocalLLaMA/comments/1tvluaj/) | User asks if 48GB can accommodate long-context quantized model | Specific model, runtime and case; not a price willingness survey |
| [Reddit 2026-03-23](https://www.reddit.com/r/LocalLLaMA/comments/1s1iiw6/) | User asks how to reduce very large long-context KV cache footprint | Possible architecture-specific effects; ongoing advice not universal |
| [Reddit 2026-06-06](https://www.reddit.com/r/LocalLLaMA/comments/1tym480/) | User reports calculators contradict observed VRAM fit and asks for a better estimator | One anecdote; best solved with run logs, not just another formula |
| [Reddit 2024-09-19](https://www.reddit.com/r/LocalLLaMA/comments/1fkn21j) | User criticizes calculators requiring model page/config or failing architectures | Historical, may be fixed in newer tools |
| [Reddit 2026-04-03](https://www.reddit.com/r/LocalLLaMA/comments/1sbe40t/) | User reports unanticipated KV cache needs in Gemma 4 | Software bug later fixed; cannot generalize a fixed issue |
| [Reddit 2026-06-05](https://www.reddit.com/r/LocalLLaMA/comments/1txpqru/) | User describes RAM offload/quantization VRAM vs speed tradeoff | Shows operational choices absent from simple ideal estimators |

A separate developer [published another free memory calculator](https://www.reddit.com/r/LocalLLM/comments/1uiovwv/) in 2026-06, which is **competitor evidence**, not independent unmet demand. Avoid counting vendor marketing as customer validation.

## Contrarian comparison

| Decision dimension | LLM VRAM Planner | RAG Debug Lab |
|---|---|---|
| Real problem evidence | Multiple independent user hardware/VRAM frustrations | Verified free competitor pages; fewer independent user reports sampled this round |
| Free competition | **Very strong**; simple MVP parity is not compelling | **Very strong**; richer tokenizers/recursive splitter already exist |
| Lowest-cost safe engineering demonstration | High: pure arithmetic, no user files | Medium: tokenization and input text/privacy edge cases |
| Scope under 20 hours | Single idealized estimator likely feasible | Exact tokenizer+multiple splitters may exceed available scope |
| Real competitive differentiation today | **NOT DEMONSTRATED** | **NOT DEMONSTRATED** |
| Organic search ability today | UNKNOWN | UNKNOWN |
| Ad monetization ability today | UNKNOWN | UNKNOWN |

**G1 adversarial verdict: NO-GO for claiming market validation or authorizing public launch.** There are plenty of observed problems, but they may be served by many free mature calculators; search demand and a unique differentiator remain unproven. **Separate limited engineering exercise:** build a private offline V1 mathematical baseline with no cost/production claims, as a reversible prototype only. This technical act does NOT upgrade PD0 nor constitute founder approval of public launch, paid services or expansion.

## Next external validation required (not secretly completed)

1. Recruit 3–5 independent target developers through permissioned channels; have each complete a realistic task using their current tool, then a prototype. Record consent and whether the prototype uncovered a *specific* missing capability.
2. Collect 3–5 real runtime logs with clearly authorized non-sensitive configurations. Compare estimates to measured peak VRAM and document architectures that invalidate this formula.
3. Check Search Console (only after authorized publish) or a properly sourced keyword dataset for search intent/competition, avoiding fabricated search volumes.
4. Ask for repeat usage or tangible distribution/referral signal; optional interviews do not mean paid interest.
5. Refuse second tool, public SEO/ads, or new spend until OPC provides explicit gate approval.
