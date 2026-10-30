# G1 differentiated-need validation — real-world protocol

**State: NOT_RUN / NO USER DATA COLLECTED / G1 NOT_PASSED.** This is a future operational protocol, not invented interviews or market proof. Owner: OPC PD-OW-01; technical comparison owner: Utility Sites. Issues: [#2](https://github.com/Xander-Xai/X-SuperPlay-Utility-Sites/issues/2).

## Target and problem

Target self-hosted LLM practitioners who size local GPUs or debug deviations between predicted and actual inference VRAM. Ask for **voluntary, informed consent** before interviewing or analyzing their configurations. Do not store names, accounts, raw customer prompts or internal model files in Git. An anonymous sample ID and sanitized settings/measurement are sufficient.

## 3–5 independent user comparisons (future; do not pre-fill)

For each consenting user, test one real permitted task twice: (A) their current tool/manual workflow; (B) this research prototype. Randomize order when feasible. Keep workload/model/runtime identical for comparisons. Record anonymized:
- participant id, date, authorization status and source reference kept outside Git;
- task, chosen current alternative, whether user could solve the actual problem, time to a correct **explanation**, numerical discrepancy and qualitative confusion;
- whether our tool reveals a *missing* fact, not merely more UI; whether the person would voluntarily recommend or revisit it;
- negative feedback, limitations and competing explanations.

Blank record template (copy into private research notes with no PII):

```yaml
participant_id: UNASSIGNED
date: NOT_RUN
consent_evidence_ref: OUTSIDE_GIT
problem_statement: NOT_COLLECTED
baseline_alternative: NOT_TESTED
baseline_result: NOT_TESTED
prototype_result: NOT_TESTED
differentiating_outcome: NOT_VERIFIED
contradicting_evidence: NOT_COLLECTED
requested_followup: NONE
```

## 3–5 authorized runtime measurements (future; not manufactured)

Capture sanitized model architecture (`parameters`, `num_hidden_layers`, `num_key_value_heads`, `head_dim`, token occupancy), real storage format including quant metadata, GPU memory used by driver/framework, runtime version and settings, loaded/unloaded baseline and a measurement of **peak used VRAM** under known context and concurrency. Keep confidential model weights, prompts, paths, hostnames, credentials, IPs and private client configuration off Git. Compare predicted component totals and real usage; list conditions causing error (quant block, paging, fragmentation, MoE/MLA, GQA, sliding-window, speculative decoding). For every comparison report formula configuration and measurement method.

## Market decision criteria

A real G1 GO requires **specific repeated unmet task evidence**, a viable legal distribution channel, reproducible measurable superiority on that task, nontrivial repeat interest and affordable maintenance. A number of interviews or quotes **alone** never authorizes launch. If existing free competitors solve the task equally, mark **NO_GO / STOP** and keep the prototype as a learning artifact. Do not create fake search volume, users, site stats or payment evidence. Only OPC Founder can approve G1 promotion and subsequent paid/G3/G4 actions.
