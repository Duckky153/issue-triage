# Project brief

## Problem

Public issue queues mix bugs, feature requests, documentation work, closed records, missing information, and uncertain ownership. A reviewer needs the source and the reason for a suggested lane without treating a rule as a decision.

## User and decision

The intended user is a technical operations analyst preparing issues for human review. The decision is whether the retained metadata supports a review lane or should remain `Needs Review`.

## Scope

- Public issue metadata from n8n, Grafana, and Kubernetes
- Equal record counts per repository
- Separate issue type, review area, and review state
- Title, number, label, repository, and review-state filters
- Source-linked evidence and a three-step review checklist
- CSV and JSON handoff
- Fixed reviewed benchmark and rollback-safe refresh

## Acceptance criteria

- Every record opens its exact GitHub issue.
- The totals reconcile across suggested, needs-review, and closed records.
- A search with no matches shows a clear empty state and no stale issue details.
- No pull request, duplicate, username, body, assignee, comment text, or credential is retained.
- Repository labels outrank title phrases.
- Conflicting or weak evidence returns `Needs Review`.
- The benchmark includes at least ten real records per repository and permits zero incompatible automatic suggestions on unambiguous native-label records.
- A failed refresh leaves the prior verified release unchanged.
- The browser creates no executable markup from public titles or labels.
- The static release contains every asset and both downloads under relative paths.

## Limits

The project has no organizational deployment, affiliation, private data, employee feedback, adoption measurement, time-saved measurement, or production outcome.
