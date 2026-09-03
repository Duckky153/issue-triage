# Claim ledger

| Claim | Evidence | Boundary |
|---|---|---|
| Uses real public issue metadata | `data/public-issues.json`, exact URLs, `evidence/source-manifest.json` | Public records only; not private support data |
| Keeps equal samples from three repositories | Generated data-quality report and source register | A snapshot, not a live demand estimate |
| Excludes pull requests and duplicate records | Collector tests and per-source manifest counts | Does not judge issue quality |
| Omits people, bodies, comment text, and credentials | Collector normalization test and data-quality gate | Public titles and labels remain |
| Separates issue type, review area, and review state | Engine output, unit tests, dashboard fields | These are portfolio rules, not company taxonomy |
| Returns `Needs Review` on weak or conflicting evidence | Conflict, missing-evidence, and needs-information tests | A human must decide the lane |
| Uses a fixed reviewed benchmark | `data/benchmark.json`, generated benchmark report | Measures rule agreement and coverage, not model accuracy |
| Preserves the prior release after refresh failure | Transaction tests and maintenance document | Local file rollback only |
| Exports a review handoff | Generated CSV and JSON files | No ticket-system write or assignment |
| Builds a self-contained static demo | `npm run build-static` and `npm run verify-static` | Public availability begins only after an approved deployment |
| Escapes hostile public titles | Browser test using an injected hostile title | Covers displayed public strings in this interface |

## Claims not supported

No affiliation, employment, endorsement, maintainer access, private support work, production deployment, organizational adoption, time saved, response improvement, resolution outcome, or business impact.
