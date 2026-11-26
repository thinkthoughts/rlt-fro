---
title: "RLT-GEO-001 — Surface Intersections and Singularities"
subtitle: "Verification specification: self-intersections and the interior cross-cap of the orthogonal-circle ruled surface (Hayami, article v5 and verification companion v0.04)"
date: "2026-11-26"
---

**Status.** Revision 1.1, preliminary investigation (publication preparation). Read-only: every repository and deposit was read at a pinned revision and left unmodified. No Lean build was run. Prepared for RLT FRO (Daniel Thomas Hawkley); drafted with Claude.

**Scope.** One mathematical object, the map $S$ below on its closed parameter rectangle, and four groups of claims about it: the exact self-intersection set, the maximum number of labels per image point, the fibres at the interior endpoints of the double-label locus, and the local type of the interior rank-singular labels. Proof validity, source fidelity and correspondence between documents are reported separately, following RLT practice.

# 1. Summary

**Headline findings.**

1. **The object is pinned exactly.** The article, the proof note and Lean use the same surface
   $$S(t,u)=\bigl(c+2u(1-c),\ (1-u)\sin t,\ u\,Q(t)\bigr),\qquad c=\cos t,\quad Q(t)=\sqrt{c(2-c)},$$
   on $D=[-\pi/2,\pi/2]\times[0,1]$. Lean: `StokesV5.ruledSurface` and `RuledV5.closedLabels`. On $D$, $0\le c\le1$, so the radicand is nonnegative and Lean's `Real.sqrt` agrees with the article's $Q$. The seam is $\{u=1\}$, where $S(t,1)=S(-t,1)$. The two **mirror double arcs** are given by an explicit rational family in a parameter $v\in[0,\sqrt5-2]$ (§2.3).

2. **The classification lies beyond the published article.** Article v5 lists "the global identifications among regular image branches" as an open question. Companion v0.04 answers it in `notes/SELF_INTERSECTION.md` (Theorem 1). The source excerpt for every self-intersection claim (link T0) therefore comes from the companion's proof note and `COVERAGE.md`, and the article supplies only the object, the five rank-singular labels and the seam remark.

3. **The Lean coverage boundary is sharp and small.** The 22 self-intersection theorems (9 in `SelfIntersection.lean`, 7 in `DoubleFamily.lean`, 6 in `DoubleNormalization.lean`) prove: sufficiency of the whole explicit family for $0\le v<\sqrt5-2$ in both halves; universal signed elimination over the closed rectangle; separation of the two open halves when the positive label has $u<1$; the seam criterion; and the unique-parameter converse when **both angles lie in the same open half** $(0,\pi/2)$ or $(-\pi/2,0)$, with conclusion $v\in(0,\sqrt5-2)$. Lean therefore leaves exactly these cases to the written proof: labels with $t=0$; labels on the angular edges $t=\pm\pi/2$, which include the necessity half of the $v=0$ boundary pair; the reflected form of half separation when the positive label lies on the seam; equal cosines; and the final assembly with uniqueness of $\varepsilon$ and $v$.

4. **Each remaining written-only obligation reduces to elementary lemmas.** Completeness over the closed rectangle, the two-label bound and the singleton fibres at the interior endpoints $P_\pm$ decompose into about ten lemmas (§5, targets L1–L11). Each compares one image coordinate, or uses strict monotonicity of $L(v)$ on $[0,\sqrt5-2]$, and combines existing Lean theorems. The quotient homeomorphism follows from Theorem 1, continuity of $S$, and Mathlib's compact-to-Hausdorff lemma (L12).

5. **The interior rank-singular labels satisfy Whitney's cross-cap criterion.** At $P_\pm=(\pm t_0,u_0)$, $\cos t_0=c_0=(3-\sqrt5)/2$, $u_0=(\sqrt5-1)/4$, this investigation computes exactly: rank $dS=1$; kernel $\eta=\partial_t+\lambda\partial_u$ with $\lambda=5^{1/4}(3-\sqrt5)/4$; and, because $S_{uu}\equiv0$, Whitney's determinant equals
   $$\det(S_u,S_{tu},S_{tt})(P_+)=T'(t_0)=P'(c_0)\,\frac{s_0^2}{Q_0}=-5\sqrt{\sqrt5-2}\approx-2.42934\neq0,$$
   where $T=\det(S_t,S_u,S_{tu})=-P(c)\sin t/Q$ is the article's triple product (eq. *triple*) and $P(c)=c^2-3c+1$. In adapted coordinates the 2-jet of $S$ at $P_+$ equals $(x,xy,y^2)$ after a linear change of target coordinates. Under Whitney's criterion (external assumption H1), the map germ of $S$ at $P_\pm$ is $\mathcal A$-equivalent to the cross-cap $(x,y)\mapsto(x,xy,y^2)$, whose image is the Whitney umbrella without its handle. Evidence: independent exact computation (R) plus a written derivation. Lean coverage: none yet.

6. **The global image-germ statement needs the singleton fibre.** Map-germ equivalence describes the image of a small neighbourhood of $P_+$. The germ of the whole image $S(D)$ at $S(P_+)$ is that umbrella exactly when $S^{-1}(S(P_+))\cap D=\{P_+\}$, the written-only claim of objective 3. Obligation E2 is therefore a prerequisite for the global form U8 of the umbrella claim.

7. **New observation at the polar label.** The analytic extension of $S$ past $u=1$ also satisfies the criterion at $(0,1)$: rank 1, kernel $\partial_t$, and $\det(S_u,S_{tu},S_{tt})(0,1)=T'(0)=1$. The extended cross-cap's double curve is the line $u=1$, with involution $t\mapsto-t$. That involution is exactly the seam identification. The polar label is thus a boundary point of $D$ located at the pinch point of a cross-cap whose double curve is the seam. How to classify this half-germ is posed as a question for the researcher (Q3).

8. **Replays.** The author's exact verifier `verify_self_intersection.py` reports `PASS self-intersection: 48 exact identities and sign certificates` here, under Python 3.13.18 and SymPy 1.14.0. An independent numerical collision search, kept as an illustration, refined 600 sampled near-collisions; every one converged onto the seam, onto a family arc (checked by $F\approx0$, $H<0$), or onto a single label. The Lean rebuild is UNVERIFIED by this investigation, pending approval of a Mathlib build.

9. **Pins hold.** The deposit ZIP's SHA-256 equals the value in the Zenodo description and the receipt. The manifest SHA-256 equals the receipt's `manifest_sha256`. Every file hashed for this report matches `SHA256SUMS.txt`. The GitHub release tag resolves to seal commit `52c8a6e…`, whose parent `8a6f914…` is the source commit named in the README.

10. **RLT's role.** RLT's kernel works in first-order arithmetic over $\{0,S,+,\times\}$ on $\mathbb N$, with numerals up to 1000 (ROADMAP-001, L1 and L3). Every analytic obligation here is delegated to Lean. RLT can discharge source registration, statement and correspondence records, and verdict bookkeeping now. With a contained new development, it can also reach V-level checking of the finite rational certificates: the polynomial identities and the Bernstein sign tables.

# 2. The mathematical specification

## 2.1 Surface, domain and atlas

| Item | Specification | Article v5 | Lean (companion v0.04) |
|---|---|---|---|
| Surface | $S(t,u)=(c+2u(1-c),(1-u)s,uQ)$, $c=\cos t$, $s=\sin t$, $Q=\sqrt{c(2-c)}$ | Def. 1.1 (`def:surface`), eq. (`eq:surface`) | `StokesV5.ruledSurface` (PaperGeometry.lean:107) with `qChart`, `qSq` (ObservationMap.lean:18–20) |
| Ruled structure | $S=\gamma(t)+u\,\delta(t)$, $\gamma=(c,s,0)$ on circle $C_1$, $\delta=(2(1-c),-s,Q)$, endpoint on $C_2$ | §1 construction | implicit in `tangentU` (Surface.lean) |
| Closed label set | $D=[-\pi/2,\pi/2]\times[0,1]$ as a set | Def. 1.1 | `RuledV5.closedLabels` (SelfIntersection.lean:8) |
| Smooth structure | angular chart on $\lvert t\rvert<\pi/2$; endpoint charts $r=Q$ near $t=\pm\pi/2$; equivalently the paired-angle curve $\{\cos t+\cos\varphi=1\}\times[0,1]$ | Def. 1.1, Thm. `thm:atlas` | `Atlas.lean` (`boundarySurface`, `angularToBoundary`), `Global.lean` (`global_domain_isManifold`, `global_surface_contMDiff`) |
| Mirror | $S(-t,u)=JS(t,u)$, $J=\mathrm{diag}(1,-1,1)$ | — | `surface_mirror` |
| Seam | $\{u=1\}$; $S(t,1)=(2-c,0,Q)$ on $C_2$; $S(t,1)=S(-t,1)$ | Remark after Thm. `thm:regularity` (labels retained, not quotiented) | `seam_image_iff`, `paired_label_image_at_u_one` |
| Rank-singular labels | $(0,1)$, $(\pm t_0,u_0)$, $(\pm\pi/2,0)$, with $c_0=(3-\sqrt5)/2$, $u_0=(1-c_0)/2$ | Thm. `thm:regularity` | `singularParameters`, `completed_singular_parameters`, `singularParameters_card` (Atlas.lean) |

Correspondence note. Fibre statements are set-theoretic, so `closedLabels` is the correct carrier for them. Smoothness statements (source arcs, cross-cap charts) need the completed atlas or the global chart of `Global.lean`. Each obligation below states which carrier it uses.

## 2.2 The seam and the cross-cap labels

The interior cross-cap labels are $P_\varepsilon=(\varepsilon t_0,u_0)$ with $\cos t_0=1-\alpha$, $u_0=\alpha/2$ and $\alpha=(\sqrt5-1)/2$. These are the lateral labels `(±lateralAngle, lateralRuling)` of `Atlas.lean`, since $1-\alpha=(3-\sqrt5)/2=c_0$ and $\alpha/2=(\sqrt5-1)/4=u_0$.

## 2.3 The double-arc family (proof note §1; `DoubleFamily.lean`)

For $0\le v\le v_*:=\sqrt5-2$:
$$h=v^3+7v^2+3v+5,\quad x=\frac{2(1+v)(3+v^2)}{h},\quad y=\frac{(1+v)^2(1+3v^2)}{(1-v)h},\quad L=\frac{(1+v)(1+3v^2)}{h},$$
$$\Delta=x^2-4y,\quad a_\pm=\tfrac12(x\pm\sqrt\Delta),\quad u_\pm=\frac{a_\pm-L}{2a_\pm},\quad T_\pm=\arccos(1-a_\pm).$$
Lean: `doubleFamilyH/X/Y/L/Delta/A`, `doubleFamilyLabel v ε = (arccos(1-a_ε),(a_ε-L)/(2a_ε))`, `doubleFamilyImage`. The common image is
$$I_\varepsilon(v)=\Bigl(1-L,\ \varepsilon\frac{(3-v)\sqrt{(1+v)(1+v^2)(1+3v^2)}}{h\sqrt{1-v}},\ \frac{2\sqrt2\,v\sqrt{(1+v)(v^2+3)}}{h\sqrt{1-v}}\Bigr).$$
Endpoints: at $v=0$ the labels are $(\varepsilon\pi/2,2/5)$ (angular edge) and $(\varepsilon\arccos(4/5),0)$ (base), with image $(4/5,3\varepsilon/5,0)$. At $v=v_*$ they coalesce at $P_\varepsilon$.

The double locus in each open half has two branches: the $a_+$ branch from the edge label to $P_\varepsilon$, and the $a_-$ branch from the base label to $P_\varepsilon$. So $P_\varepsilon$ is the **interior endpoint** of each branch (objective 3c), and the closure of the double-label locus is one arc through $P_\varepsilon$.

## 2.4 Theorem 1 as stated in the source

> For distinct $p,p'\in D$, $S(p)=S(p')$ if and only if exactly one of these holds: (1) $\{p,p'\}=\{(t,1),(-t,1)\}$ for $0<t\le\pi/2$; (2) for a unique $\varepsilon\in\{1,-1\}$ and a unique $0\le v<v_*$, $\{p,p'\}=\{(\varepsilon T_+,u_+),(\varepsilon T_-,u_-)\}$. — `SELF_INTERSECTION.md` §1, written proof.

Companion statements recorded alongside it: every fibre has at most two labels; $P_\pm$ and $(0,1)$ have singleton fibres; each closed source arc is a smooth embedded arc in the completed atlas; and $D/{\sim}\cong S(D)$.

# 3. Inventory: Lean-checked versus written-only

## 3.1 Lean declarations for the self-intersection (author-reported K (Lean))

All 22 appear in `Status.lean` and `Audit.lean`, with axioms limited to `propext`, `Classical.choice` and `Quot.sound` according to the receipt. A rebuild here is UNVERIFIED.

| Module | Declaration | Statement (abridged, exact hypotheses kept) |
|---|---|---|
| SelfIntersection | `surface_mirror` | $S(-t,u)=JS(t,u)$ for all real $t,u$ |
| | `seam_image_iff` | $t,t'\in[-\pi/2,\pi/2]$: $S(t,1)=S(t',1)\iff t=t'\lor t=-t'$ |
| | `mirror_half_separation` | $t\in(0,\pi/2]$, $t'\in[-\pi/2,0)$, $u<1$, $u'\le1$ $\Rightarrow S(t,u)\ne S(t',u')$ |
| | `exact_boundary_double_point` | $S(\pi/2,2/5)=S(\arccos\frac45,0)=(4/5,3/5,0)$, plus the endpoint-chart value |
| | `exact_negative_boundary_double_point` | reflected values $(4/5,-3/5,0)$ |
| | `double_elimination_certificate` | four square identities and coplanarity $\Rightarrow a=b\lor(D=0\land H+2ABCE=0)$ |
| | `surface_double_signed_elimination` | closed labels, equal images $\Rightarrow$ equal cosines, or $D(\cos t,\cos t')=0$ with the sign equality kept |
| | `surface_double_elimination` | the same conclusion with the sign equality dropped |
| | `positive_double_sign` | both angles in $(0,\pi/2)$, unequal cosines, equal images $\Rightarrow D=0\land H<0$ |
| DoubleFamily | `double_family_cosine` | $0\le v\le v_*$: $\cos(\text{label})=1-a_\varepsilon$ |
| | `double_family_sum_product` | $a_++a_-=x$, $a_+a_-=y$ |
| | `double_family_physical` | $0\le v\le v_*$: labels are in `closedLabels` |
| | `double_family_image` | $0\le v\le v_*$: $S(\text{label})=I_+(v)$ |
| | `double_family_distinct` | $0\le v<v_*$: the two labels differ |
| | `double_family_sufficient` | the four statements above combined, positive half |
| | `double_family_mirror_sufficient` | the same for the reflected labels |
| DoubleNormalization | `double_family_parameter_unique` | equal $(x,y)$ on $[0,v_*]$ $\Rightarrow$ equal $v$ |
| | `double_family_roots` | sum and product determine the unordered roots |
| | `double_curve_normalization` | $a\ne b\in(0,1)$, $D=0$, $H<0\Rightarrow\exists v\in(0,v_*)$ with that sum and product |
| | `positive_double_normalization` | both angles in $(0,\pi/2)$, unequal cosines, equal images $\Rightarrow\exists!\,v\in(0,v_*)$ |
| | `positive_double_family` | **both angles in $(0,\pi/2)$**, $p\ne p'$, equal images $\Rightarrow\exists!\,v\in(0,v_*)$, $\{p,p'\}$ = family pair |
| | `negative_double_family` | the same for $(-\pi/2,0)$ with reflected labels |

## 3.2 Claims that are written proofs only (source: proof note §§2, 5–7; `COVERAGE.md`)

| Claim | Written location | Supporting exact replay |
|---|---|---|
| $t=0$ labels, seam versus segment, all zero-second-coordinate cases | §2 | — |
| Equal cosines force equal ruling parameters | §2 | — |
| Edge case $a=1$: $u(5u-2)=0$, giving exactly the $v=0$ pair | §2 | — |
| Assembly of Theorem 1 over the closed rectangle, exclusivity, uniqueness of $\varepsilon,v$ | §§1–5 | — |
| At most two labels per fibre | §5 | relies on (1): $(1-L)'<0$ |
| Singleton fibres at $P_\pm$ (coalescence) and at $(0,1)$ | §§5–6 | — |
| Smooth embedded source arcs in the completed atlas, fold involution $w\mapsto-w$ | §6 | Bernstein tables for $-N$, $T$ on $[0,1/4]$ (replayed PASS) |
| Quotient homeomorphism $D/{\sim}\to S(D)$ | §7 | — |
| Rational normalization, singularities of the quotient curve, genus 0 | §4 | Gröbner basis and discriminants (replayed PASS) |

## 3.3 Open in the source

- Full surface-germ equivalence to a Whitney umbrella (`SELF_INTERSECTION.md` header; `COVERAGE.md` last line).
- A further classification of the exceptional germ, and an invariant convention for boundary observation. These concern the **observation map** at $(t,u)=(0,0)$, a planar map germ treated in the Stokes companion v0.05. That germ is a different object from the cross-cap of $S$ and stays outside RLT-GEO-001.

# 4. Verification obligations and evidence status

**Evidence vocabulary.** K(Lean) = reported by the author as checked by Lean's kernel (rebuild status recorded separately as PASS / FAIL / UNVERIFIED). W = written proof by the author, read in this investigation. X = the author's exact symbolic verifier, replayed here. R = independent recomputation in this investigation (R-exact symbolic or R-num numerical illustration). RLT levels R < V < K apply only to RLT results; none exist yet for this object. A combined claim is as strong as its weakest component.

## 4.1 G — Specification fidelity

| ID | Obligation | Method | Status |
|---|---|---|---|
| G1 | Article eq. (surface), the note's $S$ and `ruledSurface` denote the same map on $D$ | source reading; radicand $\ge0$ on $D$ | PASS by source reading |
| G2 | `closedLabels` equals the article's closed $(t,u)$ rectangle as a set; smooth claims use the completed atlas | source reading | PASS by source reading (carrier recorded per obligation) |
| G3 | The family definitions in `DoubleFamily.lean` equal note §1 symbol by symbol, including `doubleFamilyImage` | source reading | PASS by source reading |
| G4 | The lateral labels $(\pm t_0,u_0)$ of `Atlas.lean` equal the coalescence point $(\varepsilon t_0,\alpha/2)$ of note §1 | algebra $1-\alpha=c_0$, $\alpha/2=u_0$ | PASS by source reading; Lean equality open (L2) |
| G5 | `doublePolynomial`, `doubleSign` equal note's $F(2-c-d,(1-c)(1-d))$ and $H$ | source reading | PASS by source reading |

## 4.2 C — Global completeness of the self-intersection (objective 3a)

| ID | Obligation | Method | Status |
|---|---|---|---|
| C1 | Universal necessary condition on $D$: equal cosines, or $D=0$ with the sign equality | `surface_double_signed_elimination` | K(Lean); rebuild UNVERIFIED |
| C2 | Sufficiency: every family pair, $0\le v<v_*$, both halves, distinct and with the displayed image | `double_family_sufficient`, `double_family_mirror_sufficient` | K(Lean); rebuild UNVERIFIED |
| C3 | Converse inside one open half: both angles in $(0,\pi/2)$ or both in $(-\pi/2,0)$ | `positive_double_family`, `negative_double_family` | K(Lean); rebuild UNVERIFIED |
| C4 | Opposite halves: positive $t\in(0,\pi/2]$, negative $t'\in[-\pi/2,0)$, equal images $\Rightarrow u=u'=1$, $t=-t'$ | `mirror_half_separation`, plus its reflection when $u=1>u'$, plus `seam_image_iff` | W; Lean by composition **ready** (L7) |
| C5 | Labels with $t=0$: singleton fibres, since $S(0,u)=(1,0,u)$ and the only other labels with $y=0$ lie on the seam | note §2 | W; Lean target L4 |
| C6 | Edge labels $t=\pm\pi/2$ against the rest: $S(\pm\pi/2,u)=(2u,\pm(1-u),0)$; $z=0$ forces $u'=0$ or the same edge; base circle gives $u(5u-2)=0$ | note §2 | W; Lean target L5 |
| C7 | Equal cosines, same closed half $\Rightarrow p=p'$ or seam pair | note §2 | W; Lean target L6 |
| C8 | Assembly: Theorem 1 as an iff with exclusivity, $\exists!\,\varepsilon$, $\exists!\,v\in[0,v_*)$ | case split C3–C7, with $u_\pm<1/2$ separating (1) from (2) | W; Lean target L8 |

## 4.3 M — Maximum label multiplicity two (objective 3b)

| ID | Obligation | Method | Status |
|---|---|---|---|
| M1 | $L$ is strictly increasing on $[0,v_*]$, so $1-L$ is strictly decreasing (note eq. (1)) | rational derivative $-2(9v^4+8v^3+22v^2+8v+1)/h^2$; in Lean, prefer the difference form $L(v)-L(w)=(v-w)\cdot(\text{positive})/(h(v)h(w))$ | W, X; Lean target L1 |
| M2 | Family ruling parameters satisfy $0\le u_\pm<1/2$ | note §5 ($a_\pm\ge L$) | W; Lean target L3 (part of `family_root_bounds` internals) |
| M3 | No three pairwise distinct labels share an image | C8 + M1 + M2: seam pairs and family pairs cannot mix; same image $\Rightarrow$ same $\varepsilon$ (sign of $y$) and same $v$ (M1) | W; Lean target L9 |

## 4.4 E — Uniqueness of the label at each interior endpoint (objective 3c)

| ID | Obligation | Method | Status |
|---|---|---|---|
| E1 | Coalescence: `doubleFamilyLabel v_* (±1) = (lateralAngle, lateralRuling)` | $\Delta(v_*)=0$, $a=\alpha$, $u=(\alpha-L)/(2\alpha)=\alpha/2$ | W; Lean target L2 |
| E2 | $S^{-1}(S(P_\varepsilon))\cap D=\{P_\varepsilon\}$ | Other half: C4 ($u_0<1$). $t'=0$: C5. Edge: C6 ($z(P)>0$). Same open half, unequal cosine: C3 gives $v<v_*$ with first coordinate $1-L(v)=1-L(v_*)$, contradicting M1. Equal cosine: C7 | W; Lean target L10 |
| E3 | Polar label $(0,1)$ has a singleton fibre | C5 | W; Lean target L11 |
| E4 | Exterior endpoints: fibre of $(4/5,\pm3/5,0)$ is exactly the $v=0$ pair | `exact_boundary_double_point` (existence) + C6 (necessity) | existence K(Lean); necessity W |

## 4.5 X — Arcs and quotient topology

| ID | Obligation | Method | Status |
|---|---|---|---|
| X1 | $S$ is continuous on $D$ | `ruledSurface` is a composition of continuous functions, with `Real.sqrt` continuous | Lean one-liner (`fun_prop`/`continuity`); a named theorem has not been located |
| X2 | $D/{\sim}\to S(D)$ is a homeomorphism, $\sim$ the explicit relation of Theorem 1 | C8 + X1 + `Continuous.homeoOfEquivCompactToT2` | W; Lean target L12 |
| X3 | Each closed source arc is a smooth embedded arc in the completed atlas, with the fold involution $w\mapsto-w$ and sole fixed point $P_\varepsilon$ | note §6, eq. (6); edge endpoint via $Q=\sqrt6\,v+O(v^2)$; Bernstein certificates for $\Delta'<0$ and $(\Delta')^2-4\Delta(x')^2>0$ | W, X; Lean target L13 |

## 4.6 U — The Whitney umbrella question (objective 4)

| ID | Obligation | Method | Status |
|---|---|---|---|
| U1 | $S$ is real-analytic near $P_\pm$ | $c_0\in(0,1)$, so $Q^2=c(2-c)>0$; `surface_contDiffAt` gives $C^\infty$ | $C^\infty$: K(Lean) (`surface_contDiffAt`); analyticity W |
| U2 | rank $dS(P_\pm)=1$ (corank exactly one) | $S_u(P)=(\sqrt5-1,\,-\tfrac12\sqrt{6\sqrt5-10},\,\tfrac12\sqrt{2\sqrt5-2})\ne0$; $S_t\times S_u=0$ | rank $<2$: K(Lean) (`completed_singular_parameters`); rank $\ge1$: R-exact |
| U3 | Kernel $\eta=\partial_t+\lambda\partial_u$, $\lambda=5^{1/4}(3-\sqrt5)/4\approx0.285586$ | solve $S_t+\lambda S_u=0$ | R-exact |
| U4 | Whitney determinant $\det(f_x,f_{xy},f_{yy})(0)\ne0$ in coordinates $t=t_0+y$, $u=u_0+x+\lambda y$ (where $f_y(0)=0$) | exact evaluation; minimal polynomial $w^4+100w^2-625$; value $-5\sqrt{\sqrt5-2}$ | R-exact |
| U5 | Ruled-surface identity: when $S=\gamma+u\delta$ and $S_t=-\lambda S_u$ at $P$, then $\det(S_u,S_{tu},S_{tt}+2\lambda S_{tu})=\det(\delta,\delta',\gamma''+u\delta'')=\tfrac{d}{dt}\det(\gamma',\delta,\delta')=T'(t_0)$ | derivation in §6.2; numerically equal to 300 digits | W (this report), R-exact |
| U6 | 2-jet normal form: with $A=[S_u\mid S_{tu}\mid\tfrac12(S_{tt}+2\lambda S_{tu})]$ at $P$, $A^{-1}(S(t_0+y,u_0+x+\lambda y)-S(P))=(x,\,xy,\,y^2)+O(\lvert(x,y)\rvert^3)$ | $f_{xx}=S_{uu}=0$; $A$ invertible by U4 | R-exact (40-digit check of all 2-jet coefficients) |
| U7 | Whitney's criterion: a smooth germ $f:(\mathbb R^2,0)\to\mathbb R^3$ with $f_y(0)=0$ is a cross-cap iff $\det(f_x,f_{xy},f_{yy})(0)\ne0$ | external theorem (Whitney 1944), or a formalization (L15) | H1 (external); Lean: new development |
| U8 | Global image germ: germ of $S(D)$ at $S(P_\pm)$ equals germ of $S(U)$ for a neighbourhood $U$ of $P_\pm$ | E2 + compactness of $D\setminus U$ | depends on E2 (W) |
| U9 | Refutation conditions recorded: the classification would fail if U2 (rank 0), U4 ($\det=0$, giving a degenerate $S_k$, $B_k$, $H_k$… germ in Mond's list), or E2 (a further sheet) failed | — | none observed; U2, U4 pass at R-exact |
| U10 | Consistency: the double-point curve through $P$ is a smooth arc folded by an involution fixing $P$ (note §6), as required for a cross-cap | note §6 | W, X |
| U11 | Polar label $(0,1)$: the extended map satisfies the criterion with determinant $1$; the domain is the half $u\le1$, whose edge is the extended double curve | §6.3 | R-exact; classification open (Q3) |

## 4.7 H — Assumptions outside the Lean axiom list

| ID | Assumption | Where it enters |
|---|---|---|
| H1 | Whitney's cross-cap criterion (H. Whitney, *Ann. of Math.* 45 (1944)); equivalently 2-determinacy of the cross-cap | U7, U8 |
| H2 | Trust in Lean 4.33.1, Mathlib `0df444a3…`, and the author's audit scripts | every K(Lean) row |
| H3 | SymPy results are R or X evidence only; none is a Lean premise (author's statement in the note; consistent with source reading) | X rows, R rows |
| H4 | Meaning of "Whitney umbrella": (a) $\mathcal A$-equivalence of map germs to $(x,xy,y^2)$, smooth or analytic; or (b) diffeomorphism of image set germs to $\{X^2=Y^2Z\}$ minus the handle $\{X=Y=0,Z<0\}$. (a) implies (b) locally; (b) for $S(D)$ also needs U8 | U7, U8, Q2 |

## 4.8 T — Traceability links (claim to declaration)

| Link | Content | Discharged by | Machine-checkable |
|---|---|---|---|
| T0 | Claim sentence registered verbatim from the pinned ZIP member (path, SHA-256) | RLT source registry | yes |
| T1 | The cited Lean declaration resolves to one constant (namespace `RuledV5`) | export lookup | yes (after build) |
| T2 | Elaborated type and its hash | export | yes (after build) |
| T3 | Correspondence grade: exact / weaker formal / stronger formal / different object | reviewer, with reasons | no (judgment) |
| T4 | Axiom report limited to `propext`, `Classical.choice`, `Quot.sound` | `#print axioms` (Audit.lean) | yes (after build) |
| T5 | Written-only remainder named in `COVERAGE.md` | source reading | partly |

Preliminary T3 grades. `positive_double_family` against Theorem 1 is **weaker formal**: strict-half hypotheses, and $v>0$ in the conclusion. `double_family_sufficient` against the sufficiency half of Theorem 1(2) is **exact** for the positive half. `seam_image_iff` against Theorem 1(1) is **exact** on the seam and **weaker formal** for Theorem 1 overall.

# 5. Proposed Lean formalization targets

These are suggested names and statements. They would live in a separate project that pins the companion, or in a research fork; the upstream stays untouched. Every target keeps the audit regime of the companion: no `sorry`, axioms limited to the three standard ones, and every external theorem passed as an explicit hypothesis, never as an `axiom`.

| Target | Suggested statement | Discharges | Expected difficulty |
|---|---|---|---|
| L1 | `doubleFamilyL_strictMonoOn : StrictMonoOn doubleFamilyL (Icc 0 (√5-2))` | M1 | low (field algebra + `positivity`) |
| L2 | `doubleFamilyLabel_coalesce : doubleFamilyLabel (√5-2) ε = (lateralAngle, lateralRuling)` for $\varepsilon=\pm1$ | E1, G4 | low |
| L3 | `doubleFamily_ruling_lt_half : (doubleFamilyLabel v ε).2 < 1/2` on $[0,v_*]$ | M2 | low |
| L4 | `zero_angle_fiber : closedLabels p → closedLabels p' → p.1 = 0 → S p = S p' → p = p'` | C5, E3 | low |
| L5 | `edge_fiber : p.1 = π/2 → … → p = p' ∨ (seam pair) ∨ {p,p'} = {(π/2,2/5),(arccos(4/5),0)}`, and its mirror | C6, E4 | low–medium |
| L6 | `equal_cos_fiber : cos p.1 = cos p'.1 → … → p = p' ∨ (u = u' = 1 ∧ p.1 = -p'.1)` | C7 | low |
| L7 | `opposite_half_fiber : p.1 ∈ Ioc 0 (π/2) → p'.1 ∈ Ico (-(π/2)) 0 → S p = S p' → p.2 = 1 ∧ p'.2 = 1 ∧ p.1 = -p'.1` | C4 | low (composition) |
| L8 | `fiber_classification` (Theorem 1 as iff, with `∃! ε` and `∃! v ∈ Ico 0 (√5-2)`) | C8 | medium (case assembly) |
| L9 | `fiber_le_two : ¬ ∃ p q r, pairwise distinct, all closedLabels, S p = S q ∧ S q = S r` | M3 | low given L8 |
| L10 | `lateral_fiber_singleton : closedLabels p → S p = S (ε·lateralAngle, lateralRuling) → p = (ε·lateralAngle, lateralRuling)` | E2 | low given L1, L4–L7 and C3 |
| L11 | `polar_fiber_singleton` | E3 | low (L4) |
| L12 | `image_homeomorph : Quot (fiberRel) ≃ₜ S '' D` with `fiberRel` given explicitly | X2 | medium (Mathlib quotient API) |
| L13 | smooth embedded source arcs in the global chart of `Global.lean`, fold involution | X3 | medium–high |
| L14 | `crossCap_whitney_det : det(S_u, S_tu, S_tt)(P_ε) = -√5·s₀²/Q₀ ∧ ≠ 0`, with `fderiv (S) P (1, λ) = 0` | U2–U5 | medium (second derivatives; the companion already has first derivatives) |
| L15 | `HasCrossCapNormalFormAt ruledSurface P_ε`: local diffeomorphisms φ, ψ with ψ ∘ S ∘ φ = (x, xy, y²) near 0 | U7 (internal proof) | high (see §6.4) |
| L15′ | L15 stated under an explicit hypothesis `WhitneyCriterion` (a `Prop` argument) | U7 relative to H1 | low given L14 |

# 6. The Whitney umbrella question in detail

## 6.1 Applicable criteria

- **Whitney's criterion (H1).** Let $f:(U;x,y)\to\mathbb R^3$ be smooth with $f_y(p)=0$. Then $f$ has a cross-cap at $p$ (germ $\mathcal A$-equivalent to $(x,xy,y^2)$) iff $\det(f_x,f_{xy},f_{yy})(p)\ne0$. This is the standard statement used in the literature, for example Honda–Naokawa–Saji–Umehara–Yamada, *Symmetries of cross caps* (arXiv 2105.01967), and Fujimori–Saji–Umehara–Yamada, *Singularities of maximal surfaces* (arXiv math/0510366). Nonvanishing is independent of the transversal $\xi$ and of the extension of the kernel field.
- **Mond's classification** of corank-one germs $\mathbb R^2\to\mathbb R^3$ (S, B, C, H series) supplies the alternatives if the determinant vanished. The cross-cap is $S_0$, which is 2-determined.
- **Double-point test.** A cross-cap has a double-point curve that is a smooth arc through $p$, folded 2-to-1 by an involution fixing $p$. The note's §6 establishes this for $S$ (U10), a necessary condition that is consistent with the classification.

## 6.2 Derivation of U5 (ruled surfaces)

Write $S=\gamma(t)+u\,\delta(t)$, so $S_u=\delta$, $S_{uu}=0$, $S_t=\gamma'+u\delta'$, $S_{tu}=\delta'$ and $S_{tt}=\gamma''+u\delta''$. At a rank-one point, $S_t=-\lambda\delta$. Take $\xi=\partial_u$ and $\eta=\partial_t+\lambda\partial_u$. Then $f_{\xi\eta}=\delta'$, $f_{\eta\eta}=\gamma''+u\delta''+2\lambda\delta'$, and
$$\det(f_\xi,f_{\xi\eta},f_{\eta\eta})=\det(\delta,\delta',\gamma''+u\delta'').$$
For the triple product $T(t)=\det(S_t,S_u,S_{tu})=\det(\gamma',\delta,\delta')$, which is independent of $u$:
$$T'=\det(\gamma'',\delta,\delta')+\det(\gamma',\delta,\delta'').$$
At the singular point, $\gamma'=-u\delta'-\lambda\delta$, so $\det(\gamma',\delta,\delta'')=u\det(\delta,\delta',\delta'')$. This gives $T'=\det(\delta,\delta',\gamma''+u\delta'')$, the Whitney determinant. Consequently:

> **At a rank-one point of a ruled surface, Whitney's determinant equals the derivative of the torsal invariant $\det(\gamma',\delta,\delta')$.** A rank-one point is a cross-cap exactly when its ruling is a simple zero of the article's $T$.

With $T=-P(c)\sin t/Q$ and $P(c_0)=0$: $T'(t_0)=P'(c_0)\,s_0^2/Q_0=-\sqrt5\,s_0^2/Q_0$, with $s_0^2=(3\sqrt5-5)/2$ and $Q_0^2=(\sqrt5-1)/2$. Hence $T'(t_0)^2=25(\sqrt5-2)$, so $T'(t_0)=-5\sqrt{\sqrt5-2}$. This matches the direct computation (U4) to 40 digits, and the two are equal symbolically through the minimal polynomial. The identity in this form is derived here; a classical source for it has not been pinned, so it is presented as W (this report) with R-exact support.

## 6.3 The polar label

At $(0,1)$: $S_t(0,1)=0$, $S_u(0,1)=(0,0,1)$, kernel $\partial_t$ ($\lambda=0$), and $\det(S_u,S_{tu},S_{tt})(0,1)=1=T'(0)$. The formula for $S$ extends analytically to $u>1$. For the extension, $S(t,u)=S(t',u')$ near $(0,1)$ with $t'=-t$ forces $(1-u)\sin t=0$, so the extended double curve is $u=1$, with involution $t\mapsto-t$. The physical domain $u\le1$ is the half-neighbourhood bounded by that double curve, and the seam identification is the cross-cap's fold involution. Whether the researcher intends a classification of this boundary half-germ is Q3.

## 6.4 Candidate routes to an internal Lean proof (L15)

1. **Exploit the ruled structure.** Choose a linear functional $\ell$ with $\ell(\delta(t_0))=1$ and take $w=\ell(S)$ as a source coordinate (a local diffeomorphism, since $\ell\delta\ne0$). In coordinates $(t,w)$ the map becomes $(w,\ g_1(t)+w h_1(t),\ g_2(t)+w h_2(t))$, **affine in $w$**. A one-variable Morse change makes the $w^0$ part of the third component a square. The remaining reduction then needs only the **one-variable** even/odd decomposition $g(y)=E(y^2)+yO(y^2)$, applied to four single-variable functions, rather than Whitney's two-variable lemma with parameters.
2. **Analytic route.** $S$ is real-analytic at $P_\pm$, so the even/odd decomposition is a power-series manipulation. This needs one-variable analytic composition with $y^2$ in Mathlib; its availability is unconfirmed.
3. **Precedent.** The author's Stokes companion v0.05 already constructs actual smooth source and target charts with two-sided inverses for planar normal forms (`exceptional_hasFoldOfFoldNormalFormAt`, `HasWhitneyNormalFormAt`). A `HasCrossCapNormalFormAt` predicate in the same style fits the existing conventions.
4. **Fallback.** L15′ with Whitney's criterion as an explicit hypothesis. This keeps the axiom audit clean and records H1 visibly in the statement.

# 7. What RLT can discharge today, and what needs development

Basis: RLT `main` at `0ecc148`; kernel limits in `docs/RLT-ROADMAP-001.md` (L1: single-sorted $\{0,S,+,\times\}$, so integers, rationals and reals have no representation; L3: induction outside every registered axiom set; numerals up to 1000).

| Obligation family | RLT mechanism | Readiness |
|---|---|---|
| T0 excerpts (Theorem 1, `COVERAGE.md` remainder, article Def. 1.1, Thm. `thm:regularity`, seam remark, Discussion open question) | `sources/registry.yaml`, transcriptions with SHA-256 against the pinned ZIP and article TeX | ready to register |
| Statement records for C, M, E, X, U with kernel layer `lean-delegated` | `statements/*.yaml` pattern | ready |
| T3 correspondence records (grades in §4.8) | `correspondence/` | ready as a reporting pattern |
| T1, T2, T4 (constant resolution, type hashes, axiom reports) | external Lean run, RLT records verdicts (RLT-RH-001 pattern) | delegated (needs approved build) |
| X-row exact identities (48) and Bernstein sign tables | a small independent rational-arithmetic checker outside the kernel, as in the QEC V-level checkers | new development (V level) |
| G rows | source reading recorded in correspondence | ready |
| C, M, E, X, U mathematical content | Lean (§5) | delegated |
| K-level RLT proofs of any row | requires reals and analysis | not-applicable |

# 8. Staged roadmap

| Stage | Content | Output | Gate |
|---|---|---|---|
| RLT-GEO-001 | this specification | Markdown + PDF | review by RLT FRO |
| RLT-GEO-001a | register T0 excerpts and pins; statement and correspondence records with `lean-delegated` | RLT records only, upstream unmodified | review, then independent audit |
| RLT-GEO-001b | approved Lean rebuild of the pinned companion (`python3 -B verify.py`, Mathlib cache); export T1, T2, T4 for the 22 declarations | verdict records | explicit approval for the build |
| RLT-GEO-001c | L1–L11 in a separate pinned Lean project (closed-rectangle completeness, two-label bound, singleton fibres) | Lean theorems + audit | review of statements before implementation |
| RLT-GEO-001d | L12 quotient homeomorphism; L13 source arcs | Lean theorems | after 001c |
| RLT-GEO-001e | L14 Whitney determinant in Lean; L15′ under explicit H1; research on L15 | Lean theorems; design note for L15 | researcher's answer to Q2 |
| RLT-GEO-001f (optional) | V-level rational certificate checker for the 48 identities and Bernstein tables | RLT checker + tests | architecture review |

# 9. Open questions for the original researcher (Akari Hayami)

1. **Theorem 1 form.** Is the intended statement the iff with "exactly one", $\exists!\,\varepsilon$ and $\exists!\,v\in[0,v_*)$, as in note §1? Confirmation fixes the target L8.
2. **Meaning of "Whitney umbrella".** $\mathcal A$-equivalence of the map germ at $P_\pm$ (smooth or analytic), or equivalence of the image set germ of $S(D)$ at $S(P_\pm)$ (which also uses the singleton fibre)? Would Whitney's criterion be acceptable as a cited external result, in the way Kabata and Mather–Gaffney are cited in the Stokes companion?
3. **Polar label.** Is the boundary half-germ at $(0,1)$, the pinch point of an extended cross-cap whose double curve is the seam, part of the intended classification?
4. **Corners.** The corners $(\pm\pi/2,0)$ carry the corner obstruction. Is a germ classification at the corners in scope?
5. **Source-arc smoothness.** Should the "smooth embedded arc" be stated in the global chart of `Global.lean` or in the completed endpoint atlas?
6. **Lean converse hypotheses.** Were the strict-half hypotheses of `positive_double_family` chosen so that the $v=0$ pair and edge cases are handled separately by the edge argument of note §2?
7. **Release status.** The receipt reads "LOCAL RELEASE CANDIDATE; publication is recorded separately", and the Zenodo record 23422777 is published (2026-10-17). Is the Zenodo deposit the authoritative v0.04?
8. **The identity of §6.2.** Do you know a classical reference for "Whitney determinant = derivative of the torsal invariant" on ruled surfaces? Its classical origin is unconfirmed here.

# 10. Sources and reproduction

## 10.1 Pinned sources

| Source | Identifier | Pin |
|---|---|---|
| Article v5 | Hayami (Huang), *The Orthogonal-Circle Ruled Surface: A Boundary Atlas, Five Rank Singularities, and Conditional Fold-Signal Recurrence*, doi:10.5281/zenodo.23073642 (2026-10-01) | PDF md5 `bdeaef7b6cec6b6829c26a986cc27754`, SHA-256 `579e7e0409dc36f70fcc9294be09be4de461561d6cbcf93677c23d398ca04960`; TeX md5 `b5a49b3907f83d858e29e364b2e43123`, SHA-256 `7623464b3d27f7a2c7385f030f0aef67d5fed3b6386aba11c75f2ba1f6f14632` |
| Verification companion v0.04 | doi:10.5281/zenodo.23422777 (2026-10-17); concept doi:10.5281/zenodo.23073653 | ZIP SHA-256 `7c738d9b1bdb9e2073dea6ffafee7b2b0d0909d7aa2e48a0c7240a13f1a6508d` (186,729 bytes, 77 members); manifest `SHA256SUMS.txt` SHA-256 `1dbdf0c1458dbf908b7b5cfbe8eb1700387ee03fb3d9eaa292adfc34e1322113`; receipt md5 `cd1872046c75d39fcfd40c4c8834f8da` |
| Author repository | github.com/Akari-H-111/hayami-mathematical-research | tag `ruled-surface-v5-companion-v0.04` → commit `52c8a6ecf74abdea0ce1064de6238de33602bc06` (seal), parent `8a6f9140fdc0731a071d7c4a2c1fbd67162e7ae3` (source commit in README) |
| Lean toolchain | `leanprover/lean4:v4.33.1` | Mathlib `0df444a360eaa60ab8c11dca51a86af692955474` (lake-manifest.json) |
| RLT | github.com/thinkthoughts/rlt | `main` at `0ecc148e80b8f3f5086d25fabc297ffc228346f4` (2026-11-25); `kernel/src/check.rs` SHA-256 `51633a9c…7b65` |
| Structural template | RLT-RH-001 | rlt-fro.now/RLT-RH-001/RLT-RH-001.pdf |

Files inside the ZIP (SHA-256, all matching `SHA256SUMS.txt`):

| Path | SHA-256 |
|---|---|
| `companions/lean/ruled-surface-v5/RuledV5/SelfIntersection.lean` | `1848056c19d15dc8626da634b73aa503e7c404f1fd26bcc33818c3716997c93e` |
| `companions/lean/ruled-surface-v5/RuledV5/DoubleFamily.lean` | `efc5fa31ef793c03259d3607e1812766dbd8835e720c50df8e4ed05c8c0555b4` |
| `companions/lean/ruled-surface-v5/RuledV5/DoubleNormalization.lean` | `35cace25dd86bac9154e54bfabbd659955d465f4f633f21d617582fc3ddc4de1` |
| `companions/lean/ruled-surface-v5/RuledV5/Atlas.lean` | `8841d6285df9bcb1e985a83554560ad8ef5d6c08a1e1be1923f27c8ef3589a1e` |
| `companions/lean/ruled-surface-v5/RuledV5/Surface.lean` | `d7d53c832332f3695329be9c8c110e0e86322c45e60e57303aea5b7e957160ef` |
| `companions/lean/stokes-caustic-v5/StokesV5/PaperGeometry.lean` | `20f095c8e9fc95a366f566dc2aae923261b5437430deab45c8f8be03a81c983b` |
| `companions/lean/stokes-caustic-v5/StokesV5/ObservationMap.lean` | `5a284d61cb43ab9430dc18c4430aa6c75468d237e55636c9a728d3a26e52e89d` |
| `companions/lean/ruled-surface-v5/COVERAGE.md` | `556998fb946413bab52fc354b2fa715f42b0537d3d8dec1d8851a490e3536555` |
| `papers/legacy-geometry/orthogonal-circle-ruled-surface/notes/SELF_INTERSECTION.md` | `bfdb25ebaa4c9f94230dc3af87eca713e841adbbef52ab3597f1176ce4776973` |
| `papers/legacy-geometry/orthogonal-circle-ruled-surface/verification/verify_self_intersection.py` | `e0bfc3eb7907923368e87382477245f53e5f8a98fee542c9620272f4698ad117` |

Scripts written for this report (`scripts/`): `crosscap.py` (`e9290c29…b9e2`), `crosscap2.py` (`3528938e…fe3b290`), `collide.py` (`d1d70eba…fe707`).

Licences: companion code Apache-2.0; documentation, notes and figures CC-BY-4.0. Registered excerpts carry attribution.

## 10.2 Reproduction (no Lean build)

```sh
# 1. Fetch and pin (each download in its own empty directory)
mkdir -p untrusted/zen && cd untrusted/zen
curl -sS -o companion.zip https://zenodo.org/api/records/23422777/files/ruled-surface-v5-companion-v0.04.zip/content
curl -sS -o receipt.json  https://zenodo.org/api/records/23422777/files/ruled-surface-v5-companion-v0.04-receipt.json/content
curl -sS -o article.tex   https://zenodo.org/api/records/23073642/files/Orthogonal_Circle_Ruled_Surface_v5.tex/content
curl -sS -o article.pdf   https://zenodo.org/api/records/23073642/files/Orthogonal_Circle_Ruled_Surface_v5.pdf/content
sha256sum companion.zip            # expect 7c738d9b…a6508d
mkdir ex && (cd ex && unzip -q ../companion.zip)
cd ex/ruled-surface-v5-companion-v0.04 && sha256sum -c SHA256SUMS.txt

# 2. Author's exact verifier (SymPy 1.14.0; run from a neutral directory, isolated mode)
cd /tmp && python3 -I -B <path>/papers/legacy-geometry/orthogonal-circle-ruled-surface/verification/verify_self_intersection.py
# expect: PASS self-intersection: 48 exact identities and sign certificates

# 3. This report's computations
python3 -I scripts/crosscap.py    # rank, kernel, Whitney determinant; minimal polynomial w^4+100w^2-625
python3 -I scripts/crosscap2.py   # T formula, W = T'(t0), polar label, normalized 2-jet (x, xy, y^2)
python3 -I scripts/collide.py     # numerical illustration: near-collision search and refinement

# 4. Optional, requires approval (expensive): Lean rebuild
# cd ruled-surface-v5-companion-v0.04 && python3 -B verify.py   (Lean 4.33.1; never `lake update`)
```

## 10.3 Continuation record (for another research agent)

```yaml
record: RLT-GEO-001-continuation/1
date: 2026-11-26
state: specification drafted (Revision 1); read-only; no repository modified; no Lean build
object:
  surface: "S(t,u) = (c + 2u(1-c), (1-u) sin t, u sqrt(c(2-c))), c = cos t"
  domain: "[-pi/2, pi/2] x [0,1]  (Lean: RuledV5.closedLabels)"
  lean_surface: StokesV5.ruledSurface
pins:
  companion_zip_sha256: 7c738d9b1bdb9e2073dea6ffafee7b2b0d0909d7aa2e48a0c7240a13f1a6508d
  companion_doi: 10.5281/zenodo.23422777
  article_doi: 10.5281/zenodo.23073642
  author_repo_tag_commit: 52c8a6ecf74abdea0ce1064de6238de33602bc06
  author_source_commit: 8a6f9140fdc0731a071d7c4a2c1fbd67162e7ae3
  lean: leanprover/lean4:v4.33.1
  mathlib: 0df444a360eaa60ab8c11dca51a86af692955474
  rlt_main: 0ecc148e80b8f3f5086d25fabc297ffc228346f4
evidence_so_far:
  lean_self_intersection_theorems: 22   # author-reported K(Lean); rebuild UNVERIFIED
  author_verifier_replay: PASS (48 identities; Python 3.13.18, SymPy 1.14.0)
  whitney_determinant_at_P: "-5*sqrt(sqrt(5)-2)  (R-exact; minimal polynomial w^4+100w^2-625)"
  whitney_det_equals_Tprime: "R-exact + written derivation (section 6.2)"
  polar_label_det: "1 (R-exact), half-germ classification open"
  numerical_collision_search: "consistent with Theorem 1 (illustration only)"
written_only_gaps: [C4, C5, C6, C7, C8, M1, M3, E1, E2, E3, E4-necessity, X2, X3]
open_research: [U7-internal-proof (L15), U11 polar half-germ, Q1-Q8]
next_actions:
  - await RLT FRO review of this specification
  - on approval, RLT-GEO-001a: register T0 excerpts and statement records (lean-delegated)
  - request approval before any Lean build (RLT-GEO-001b)
  - send Q1-Q8 to the original researcher before fixing L8 and L15 statements
constraints:
  - upstream repositories and deposits stay unmodified; work in separate pinned projects or forks
  - report proof validity, source fidelity and correspondence separately
  - external theorems enter Lean as explicit hypotheses, never as axioms
uncertainties:
  - the Lean rebuild has not been run here
  - the classical source for the identity of section 6.2 is unpinned
  - availability in Mathlib of one-variable even/odd decomposition (route 1 or 2 of section 6.4) is unconfirmed
  - "Whitney umbrella" meaning (H4) awaits Q2
```


# 11. Independent continuation and publication notes

ChatGPT independently differentiated the supplied surface formula with SymPy. Exact simplification confirms the proposed kernel direction at the positive interior label, the negative sign of the Whitney determinant by the displayed radical formula, its squared value $25(\sqrt5-2)$, and the polar determinant $1$. The numerical interior value is $-2.42934135878322839$. The included `check_crosscap.py` reproduces the independent calculation. This is symbolic evidence, not a Lean proof or an independent replay of the upstream deposit. The original draft's three computation scripts were not supplied; their reproduction commands in §10 are retained as historical references and are not executable from this package alone.

Editorial review notes (before implementation): in M1 the displayed negative derivative is that of $1-L$, not $L$; L2 needs separate notation for the root sign and the mirror sign; L7 requires both labels in the closed rectangle; L10 and L14 require $\varepsilon\in\{-1,1\}$. For L14 the kernel direction at the negative label uses the reflected sign of $\lambda$. The exact cross-cap conclusion uses the external Whitney criterion (H1); the global image-germ conclusion additionally uses the singleton fibre proof E2. The quoted source claims, pins and author-verifier replay remain the original investigator's reports, not independently re-fetched results. No priority or novelty claim is made. The proposed polar half-germ classification remains open.
