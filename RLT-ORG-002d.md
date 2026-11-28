# RLT-ORG-002d — Ocean science CI evidence inventory

2026-11-28. Read-only GitHub Actions workflow/job metadata inspection. No fresh CI triggered, no full logs retrieved, no scientific acceptance inferred. Results are scoped to the following exact commits and run IDs; they are not blanket project verdicts.

## C-Star

Commit 7e2e938f937b275dafcfd8fb6975c162a25d4b0c. [Integration run](https://github.com/thinkthoughts/C-Star/actions/runs/45311065125): three successful jobs (end-to-end, Forge macOS, Forge Ubuntu), all Python 3.12. [Unit run](https://github.com/thinkthoughts/C-Star/actions/runs/45311065137): three successful Ubuntu jobs (3.12, 3.13, 3.14); macOS 3.14 cancelled during Running Tests. Overall unit workflow cancelled. Earlier CI-010 at a842c9cdeb71cb1a1d84de45d22822cdb453562d also returned integration success and unit cancellation; no earlier job details inspected.

## ROMS-Tools

| CI-011 branch | Commit | Run | Success | Failure |
|---|---|---|---:|---:|
| cdr-units | 899834a38b6bd8af25643aa47a0ecb81fd6b9955 | [45311055444](https://github.com/thinkthoughts/roms-tools/actions/runs/45311055444) | 6 | 2 |
| co2-scale | ffd7c31420bd95e76bd3f7869cc5804063d8d6a7 | [45311051508](https://github.com/thinkthoughts/roms-tools/actions/runs/45311051508) | 6 | 2 |
| stable-stretching | c79869779b9be7b2aff87a7e5f3f61c6c1f4eff3 | [45311060626](https://github.com/thinkthoughts/roms-tools/actions/runs/45311060626) | 6 | 2 |
| tiling | 4cd15129b679cb19d638af71ffd5e97bdbaeee96 | [45311049166](https://github.com/thinkthoughts/roms-tools/actions/runs/45311049166) | 6 | 2 |
| zero-theta | e8a9ad934fc743514acae182fdf849c4aed766d8 | [45311058344](https://github.com/thinkthoughts/roms-tools/actions/runs/45311058344) | 6 | 2 |

Each workflow concluded failure. All five share exactly the same failed job names: 3.13-build-with-streaming and 3.13-build-glorys-regional-invariance. Failed steps: Running Tests with Streaming and Running Tests (use_dask=True), respectively. The other six jobs succeeded in each run. The common pattern motivates baseline comparison but does not establish the cause, environmental failure, or absence of regressions. Counts represent jobs, not individual tests or independent experiments.

## UCLA-ROMS

[CI-010 containerized workflow](https://github.com/thinkthoughts/ucla-roms/actions/runs/45288508832) at c5ea8ee4046d74b5b89f1b3845fa353a4454d7cf concluded success. Prepare, compile_gnu, compile_ifx, pytest_gnu and pytest_ifx succeeded. build_gnu, build_ifx and cleanup skipped. No workflow runs returned for 79b85c8afb02a4abf078405efb22b38db10dc6d7 (base-SHA validation fix). No claim about exact output equality follows from workflow success alone.

## Remaining acceptance obligations

1. Compare ROMS-Tools failure logs and same-environment pinned baseline runs.
2. Complete C-Star macOS unit job and inspect correction-specific tests.
3. Verify UCLA-ROMS base-SHA fix and output-comparison artifacts.
4. Independently review mathematical/physical specifications and source diffs before upstream submission.

No collaboration or release acceptance status changed.
