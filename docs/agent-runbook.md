# Local Codex / Claude Code instructions for next authorized steps

```text
Repository: Xander-Xai/X-SuperPlay-Utility-Sites (already EXISTS, private, default main).
Do NOT create it again. Read AGENTS.md, README.md, docs/market-evidence.md, docs/mvp-spec.md,
docs/costs-and-gates.md, docs/release-and-rollback.md and OPC PD-OW-01 first.

Your task is to conduct a reproducible review of the existing zero-dependency, local-only
LLM VRAM Planner research prototype, not build a generalized SaaS or secretly deploy it.

1. Verify GitHub URL and read current main + open PR diff before editing.
2. Rerun npm run verify in a clean Node >=20 environment. Record exact runner/version and
   what was tested; lack of runner is NOT a pass.
3. Adversarially inspect weight and KV cache equations against known dense-attention cases;
   explicitly record models/quantization/runtime features where estimate is invalid.
4. Check that no source touches user files, credentials, network, ads or analytics.
5. Review real target-user evidence: docs/market-evidence.md lists 20 candidate intentions,
   12 substitutes, 6 independent problem anecdotes. These are NOT keyword volume, unique
   buyer validation or a real search campaign. G1 is not passed.
6. Make any improvements on a short-lived branch + PR; no direct main write.
7. Propose one independently testable differentiator, consented users, comparison protocol
   and stop-loss rule before asking OPC Founder to authorize a public release.
8. Before anything external, request separately scoped explicit approval for spend, domain,
   Cloudflare deployment, public distribution, monitoring and any advertising account use.
9. Record real receipts/metrics only in the authoritative OPC ledger or permitted links,
   never here as inferred revenue or synthetic user growth.
10. Output: scope, changed files, commands/logs, actual observed vs still UNKNOWN,
    privacy/compliance review and G1/G2/G3/G4 status. STOP if approval is missing.
```
