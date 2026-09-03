# Routing policy

## Order of evidence

1. Preserve the GitHub source state.
2. Read repository-native type labels.
3. Read repository-native area or team labels.
4. Use only narrow title phrases when a native label is absent.
5. Return `Needs Review` when signals conflict or either decision lacks enough evidence.

Words such as `node` and `API` do not determine an issue type or review area by themselves.

## Separate fields

- `issueType`: bug, feature request, documentation, cleanup, failing test, question, or needs review
- `reviewArea`: security and access, reliability, observability, integrations, infrastructure, documentation, general, or needs review
- `reviewState`: suggested, needs review, or closed source
- `suggestedReviewLane`: a human-readable review destination or `Needs Review`

## Human boundary

The rules do not assign ownership, severity, priority, validity, acceptance, resolution, or roadmap status. A person must open the source, inspect the missing context, and make those decisions.

## Benchmark rule

The fixed benchmark measures deterministic rule agreement and suggestion coverage. The release gate requires zero incompatible automatic suggestions on benchmark records with unambiguous native labels. `Needs Review` is a safe abstention, not an error hidden from the report.
