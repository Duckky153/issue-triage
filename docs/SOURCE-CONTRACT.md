# Source contract

## Sources

- `n8n-io/n8n`
- `grafana/grafana`
- `kubernetes/kubernetes`

The collector uses GitHub's public repository-issues endpoint, requests open and closed records ordered by latest update, paginates until the target is met, removes pull requests, removes duplicates, and keeps an equal number of issues per repository.

## Retained fields

Repository, project, context, issue number, title, state, state reason, labels, comment count, created timestamp, updated timestamp, closed timestamp, and exact source URL.

## Omitted fields

Usernames, avatars, assignees, issue bodies, comment text, emails, credentials, and private data.

## Candidate checks

The gate checks schema version, count, repository balance, unique IDs and URLs, exact GitHub URL form, allowed fields, timestamps, source manifest, and SHA-256 hash. A malformed response, exhausted rate limit, network failure, short sample, duplicate-only page, or unapproved field stops the candidate before promotion.

## Source boundary

These are public project issues, not private customer records. The selected sample can change whenever a refresh succeeds.
