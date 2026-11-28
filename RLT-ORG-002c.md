# RLT-ORG-002c — RH and RLT milestone reconciliation

2026-11-28. Read-only repository inspection; no new proof replay or CI execution.

## RLT

Current main inspected at [58f1d40b3e07fb0e2681e5208da319a1f388a7ce](https://github.com/thinkthoughts/rlt/tree/58f1d40b3e07fb0e2681e5208da319a1f388a7ce). RLT-PROVER-002 release audit records 387 tests, 126 accepted discovery theorems and seven unconditional ROBINSON-Q certificates, with selected Lean correspondence and fresh kernel replay. RLT-DEF-001a audit records independent PASS WITH NON-BLOCKING NOTES, with H1 repaired and follow-ups documented. Counts apply to audited milestones, not a fresh test of current main.

The prover audit distinguishes independent retests from final self-review. Final release commit e2bb7e3 was merged at 67cfed2; audit documentation records 17 theorems and two definitions compared in Lean. The kernel has 20 inference rules and documented unary numeral limit 1000; these limits matter for DSC. Registry audit head 24089a30b7ff20dba9a503b6dc700634ae226c08, H1 repair fca6da9. The README milestone summary is older than the audit records; do not infer current release status solely from it.

## RH

Current fork main [8c828edadfd659acdec2107f13ecf010284f919a](https://github.com/thinkthoughts/riemann-hypothesis-rlt/tree/8c828edadfd659acdec2107f13ecf010284f919a). Current fork README describes a condensed community edition based on grh-lean 72fead102f663d5c7a407964a13dc0cf9d977207, five RH/Dirichlet-L theorem statements, and comparator checks for statement identity, standard axioms, Lean and nanoda. No independent comparator run or proof acceptance performed here.

The README says original and alpoge branches preserve earlier editions in the community repository; only main was observed in our fork. Do not assume earlier branches exist locally. Upstream contribution guidance excludes personal build claims and unrelated files. Keep independent RLT verification artifacts separate. Our structural invariance/projection research is a distinct mathematical project, not an established equivalent formulation or proof of RH.

## Next

Reconcile detailed CI and acceptance records; retain exact version and evidence class for each claim.
