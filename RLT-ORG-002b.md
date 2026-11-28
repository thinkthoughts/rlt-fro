# RLT-ORG-002b — TI and QEC milestone reconciliation

2026-11-28. Repository records inspected; no new proof replay or experimental measurement.

## TI-001

Pinned main: [31dd6a8ace16f895f4889d4754a3abc9e51ab1e0](https://github.com/thinkthoughts/rlt-ti/tree/31dd6a8ace16f895f4889d4754a3abc9e51ab1e0). Pinned repository records source hash/size and finite exact checks for TI-02,03,04,05,09,12,13,14. Candidate Lean infrastructure present; checked execution evidence requires reconciliation. No physical validation. The README explicitly limits the bootstrap claim; LEAN-SETUP.md describes candidate infrastructure. The separately reported VPS axiom checks are not promoted here without pinned execution records. Collaboration status unchanged.

## QEC

RLT main inspected at [58f1d40b3e07fb0e2681e5208da319a1f388a7ce](https://github.com/thinkthoughts/rlt/tree/58f1d40b3e07fb0e2681e5208da319a1f388a7ce). The accepted 002a and 002b documents record merge gates and independent execution audits. Accepted and merged RLT-QEC-001/002a/002b records: 46 cycles below weight 8 and 46 boundary witnesses, ranks 41 and 41, homology dimension 8, and 8 ≤ d_X ≤ 10 in the 90-qubit base X sector. Lower bound reviewed completeness (R); upper bound checked certificate (V). Exact minimum and full Bravyi360 independent verification remain open.

The current bb-distance-lean fork head [5725a2328a41248294d3e6e84250770db7daf51b](https://github.com/thinkthoughts/bb-distance-lean/tree/5725a2328a41248294d3e6e84250770db7daf51b) describes Gross and Bravyi360 proofs; its upstream proof claims are distinct from our independent base-complex evidence. The original source pin is retained in the register, not replaced with this current fork head.

## Next

Reconcile RH and RLT milestones, then CI and acceptance evidence. No new collaboration or release acceptance asserted.
