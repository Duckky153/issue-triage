# Maintenance and rollback

## Standard refresh

Run `npm run refresh-and-verify`.

The command collects into a temporary candidate directory, validates the dataset and manifest, builds every generated artifact, runs the unit and benchmark gates, opens the candidate in a real browser, and only then begins promotion.

## Promotion

Each current release file is copied to a temporary backup. Candidate files replace the current set. The full local verifier runs against the promoted release before the backup is discarded.

## Failure behavior

- Network, HTTP, rate-limit, payload, count, schema, hash, benchmark, build, or candidate-browser failure: no current release file changes.
- Promotion or post-promotion verification failure: every replaced file is restored from the backup; files that did not previously exist are removed.
- The rollback behavior has controlled tests for a mid-promotion failure and a post-promotion verification failure.

## Manual recovery

Do not copy a failed candidate into `data`, `deliverables`, `evidence`, or `site`. Fix the cause and rerun the single refresh command. The previous verified snapshot remains the readable fallback.
