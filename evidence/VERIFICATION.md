# Verification

Run `npm run verify` for the pinned release and `npm run refresh-and-verify` for a new live candidate.

The exact current result belongs in generated evidence, not prose:

- `current-verification.json`
- `browser-qa.json`
- `source-manifest.json`
- `../deliverables/data-quality-report.json`
- `../deliverables/benchmark-report.json`

The release is ready only when `current-verification.json` reports `verified`, the dataset report is valid, the benchmark reports zero incompatible automatic suggestions, every test and browser check passes, the static release serves every required file, syntax checks pass, and the dependency audit reports no blocking vulnerability.

This evidence proves a local public-data portfolio workflow. It does not prove affiliation, private access, production use, adoption, or an organizational outcome.
