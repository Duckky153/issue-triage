# Test plan

## Routing rules

- Repository label priority
- Conflicting type signals
- Needs-information labels
- Closed source state
- Generic `node` and `API` false positives
- Narrow title fallback
- Separate issue type and review area
- Sensitive-field omission

## Collection

- Pagination
- Pull-request filtering
- Duplicate filtering
- Malformed payload and malformed JSON
- HTTP and rate-limit failure
- Fewer records than required
- Field minimization

## Benchmark and release

- At least ten source-linked records per repository
- Zero incompatible automatic suggestions on unambiguous native-label records
- Rule-agreement terminology
- Balanced current snapshot, exact URLs, hashes, handoff fields, and retired-field absence

## Rollback

- Successful complete promotion
- Mid-promotion failure restores all prior files
- Post-promotion verification failure restores all prior files

## Browser and security

- Desktop and mobile layout
- Search, repository, and state filters
- Reconciled summary totals and a clean no-results state
- Source, evidence, checklist, CSV, and JSON controls
- Hostile public title rendered as text without an element or event-handler execution
- No console errors, page errors, remote runtime requests, or horizontal overflow
- Self-contained static build with relative paths and working downloads
- Clean `npm ci`, syntax checks, and dependency audit
