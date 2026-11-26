---
title: 'RLT-QG-001 — Absolute Convergence of Transition Amplitudes'
subtitle: 'Independent mathematical analysis and verification specification'
author: 'Reading Level Test — Focused Research Organization'
date: 'November 26, 2026 · Revision 1.0'
geometry: margin=0.9in
fontsize: 11pt
colorlinks: true
---

# 1. Reading point and status

This investigation isolates the Hilbert-space argument in Venkatesa Chandrasekaran, *An algebraic quantization of gravity from the null cone*, arXiv:2611.34924v1 (submitted November 25, 2026), Section 4.4, equations (4.29)–(4.30), printed page 32 [1]. The objective is to specify independently checkable mathematical relationships and their correspondence with the proposed gravitational construction.

**Preliminary result.** The single-cut identity and absolute convergence follow from standard Hilbert-space theory. Bounded linear operators suffice for convergence; contractions suffice for the published norm bound. This is a generalization of the isolated estimate, not a claim of a new Hilbert-space theorem or a verification of quantum gravity.

**Evidence status.** Written mathematical derivation and source inspection only. No Lean build, RLT certificate, or gravitational model reproduction has been performed.

# 2. Source correspondence and assumptions

Write $U_1=U_{\mathcal M_1}$ and $U_2=U_{\mathcal M_2}$ for evolution across successive subregions. Let $H_0,H_1,H_2$ be complex Hilbert spaces, $\psi\in H_0$, $\phi\in H_2$, and $(e_i)_{i\in I}$ a complete orthonormal basis of $H_1$. Use the inner product convention linear in the second argument.

The source's equation (4.29), in this notation, is

$$\langle\phi,U_2U_1\psi\rangle=\sum_{i\in I}\langle\phi,U_2 e_i\rangle\langle e_i,U_1\psi\rangle.$$

Equation (4.30) bounds the absolute sum by $\|\phi\|\|\psi\|$. The preceding paragraph in the source invokes matching boundary fields (3.29), causal factorization (4.2e), and unitarity (4.18). The physical identification of glued evolution with $U_2U_1$ is a separate premise, not a consequence of the abstract estimate.

The independent theorem assumes complete Hilbert spaces, finite-norm external vectors, bounded linear maps of compatible types, and a complete orthonormal basis on the shared space. It does not assume separability, finite dimension, a Hamiltonian, or a particular gravitational coupling. For arbitrary index sets, sums are understood as limits over finite subsets directed by inclusion. For a countable basis, these agree with the usual absolutely convergent series.

# 3. Independent theorem and proof

**Theorem QG-T1 (bounded composition).** Let $A:H_0\to H_1$ and $B:H_1\to H_2$ be bounded linear maps under the hypotheses above. Define $x=B^*\phi$, $y=A\psi$, and $c_i=\langle x,e_i\rangle\langle e_i,y\rangle$. Then

$$\sum_{i\in I}|c_i|\leq\|B\|\|A\|\|\phi\|\|\psi\|,$$

and $\sum_{i\in I}c_i=\langle\phi,BA\psi\rangle$.

**Proof.** For a finite subset $F\subseteq I$, finite-dimensional Cauchy–Schwarz and Bessel's inequality give

$$\begin{aligned}\sum_{i\in F}|c_i|&\leq\left(\sum_{i\in F}|\langle e_i,x\rangle|^2\right)^{1/2}\\&\quad\cdot\left(\sum_{i\in F}|\langle e_i,y\rangle|^2\right)^{1/2}\\&\leq\|x\|\|y\|.\end{aligned}$$

Taking the supremum over finite subsets proves absolute summability. Completeness of the complex numbers then gives unconditional summability. More explicitly, the nonnegative finite-subset sums approach their finite supremum, so the absolute sum over any finite subset disjoint from a sufficiently large fixed finite subset is arbitrarily small. The complex partial sums are therefore Cauchy.

Define $P_F y=\sum_{i\in F}e_i\langle e_i,y\rangle$. Completeness of the orthonormal basis implies $P_F y\to y$ in norm. Continuity of the inner product and the adjoint identity yield

$$\sum_{i\in I}c_i=\langle x,y\rangle=\langle\phi,BA\psi\rangle.$$

Finally $\|B^*\phi\|\leq\|B\|\|\phi\|$ and $\|A\psi\|\leq\|A\|\|\psi\|$, completing the proof. $\square$

**Corollary QG-T2.** If $A$ and $B$ are contractions, the estimate reduces to (4.30). If they are unitary, their adjoints are inverse unitaries and both intermediate vector norms equal the corresponding external norms. This recovers (4.29)–(4.30) under the paper's hypotheses.

Completeness of the basis is needed for the identity, not the bound: with an incomplete orthonormal family, the same bound holds but the sum represents $\langle\phi,BPA\psi\rangle$, where $P$ projects onto its closed span. Thus convergence alone does not verify the identity insertion.

# 4. Truncation and multiple cuts

For a finite subset $F$, the omitted amplitude is bounded by

$$|\langle x,y\rangle-\langle x,P_Fy\rangle|\leq\|x\|\|(1-P_F)y\|.$$

This gives convergence but no universal numerical rate without further information about the state. For a fixed finite number $m$ of unitary evolutions and orthogonal projections $P_j$ at internal cuts, telescoping gives the source's estimate (4.31), printed page 33:

$$\begin{aligned}&|\langle\phi,(U_m\cdots U_1-U_mP_{m-1}U_{m-1}\cdots P_1U_1)\psi\rangle|\\&\qquad\leq\|\phi\|\sum_{j=1}^{m-1}\|(1-P_j)U_j\cdots U_1\psi\|.\end{aligned}$$

Indeed, restore projections from the incoming end in order; each difference inserts $1-P_j$ after the untruncated prefix, followed by operators of norm at most one. Apply the triangle inequality. For fixed $m$, each tail vanishes as the corresponding projection approaches the identity strongly. This proves convergence of projected compositions, not absolute summability of an unrestricted joint multi-index expansion, nor uniform convergence as $m$ grows.

# 5. Appendix E dependency audit

The five numbered conditions in Appendix E.1 (printed pages 76–77) have distinct roles:

1. Diffeomorphism invariance: physical compatibility of cuts and gluing; not a hypothesis of QG-T1.
2. Reality and positivity (E.1a–c): support a positive semidefinite preparation pairing. A quotient by null vectors and completion, with well-defined induced operations, must be established to obtain a Hilbert space. Appendix E.2 describes a construction for two matching boundaries; its identification with the Section 4.4 state spaces remains a correspondence obligation.
3. Factorization (E.2): concerns disjoint closed configurations, not the same as the causal composition rule (4.2e). It is not required by QG-T1.
4. Continuous unitary evolution (E.3): supplies the unitary hypothesis when instantiated on the relevant state spaces. Continuity of the group is not needed for a single-cut estimate.
5. Spectrum and finiteness (E.4–E.5): sets the admissible smeared preparation domain and finite closed-amplitude requirements. These are additional assumptions, not consequences of QG-T1.

Appendix E.3 proposes a gravitational realization; this specification does not verify it. The abstract theorem applies only after the state spaces, inner products and maps have been identified and their hypotheses discharged.

# 6. Verification obligations

| ID | Target | Proposed evidence |
|:---|:---|:---|
| QG-01 | Finite coefficient bound | Lean |
| QG-02 | Bessel bound and absolute summability | Lean |
| QG-03 | Complete basis expansion and adjoint identity | Lean |
| QG-04 | Bounded-map norm estimate | Lean |
| QG-05 | Contraction and unitary specializations | Lean |
| QG-06 | Finite projection truncation and (4.31) | Lean |
| QG-07 | Source equation and premise correspondence | RLT record and independent review |
| QG-08 | Appendix E dependency correspondence | RLT record and independent review |
| QG-09 | Gravitational realization of hypotheses | Separate investigation |

All machine-checking obligations are pending. Lean should express the theorem for arbitrary basis index types if supported by the pinned library, or explicitly register countability in a first implementation. The latter would be a restricted theorem, not full generality. The proof must include summability, rather than merely an equality involving a totalized infinite sum.

RLT should register source version, equation locators, definitions, assumptions, dependencies and evidence status. Any kernel-checked RLT subclaim must be expressed within its supported logic. Do not equate a source record, a Lean proof, and an independently kernel-checked RLT proof. No kernel extension is proposed for this milestone.

# 7. Verification boundary and acceptance criteria

On $\ell^2(\mathbb N)$ the identity is unitary and satisfies QG-T2, yet the sum of its diagonal entries in the standard basis diverges. Thus the single-cut result cannot establish unrestricted trace finiteness or finite dimensionality. Nor does it independently establish ultraviolet finiteness of all observables, convergence of an unlimited subdivision process, or empirical adequacy of the gravitational theory.

A future implementation should pin the source version, Lean toolchain and Mathlib revision; provide theorem statements and reproducible build commands; audit axioms and placeholders; record exact assumption correspondence; and report separate verdicts for the mathematical theorem, source mapping and physical realization. Negative tests should distinguish an incomplete basis from a complete one, an operator of norm greater than one from a contraction, and a finite transition amplitude from a finite trace.

**Current verdict:** QG-T1 and QG-T2 have written proofs. Equation (4.31) has a written derivation. Machine verification and physical correspondence remain open. No claim of originality for the standard functional analysis is made.

# References

[1] V. Chandrasekaran, *An algebraic quantization of gravity from the null cone*, arXiv:2611.34924v1, November 2026. [Versioned source](https://arxiv.org/abs/2611.34924v1); [PDF](https://arxiv.org/pdf/2611.34924v1). Section 4.4, pp. 32–33; Appendix E, pp. 76–79 and following.

[2] [Reading Level Test (RLT), source repository](https://github.com/thinkthoughts/rlt).

[3] [RLT-FRO](https://rlt-fro.now/).
