# GitHub Issue Triage Dashboard

A dashboard that turns public GitHub issue metadata into a review queue. It keeps the exact source link, shows the evidence used, separates issue type from review area, and sends uncertain records to `Needs Review`.

The pinned release contains equal samples from n8n, Grafana, and Kubernetes. The live totals, exclusions, hashes, and review-state counts are generated; they are not copied into this document.

## Run it

```bash
npm ci
npm run verify
npm run serve
```

Open `http://127.0.0.1:4191`.

If another local project is already using port 4191, choose an open port without
stopping that project:

```bash
PORT=4192 npm run serve
```

To collect a new candidate and promote it only after every gate passes:

```bash
npm run refresh-and-verify
```

## Build the public demo

```bash
npm run build-static
npm run verify-static
npm run serve-static
```

The `dist` folder is a self-contained static site. It includes the dashboard data and both downloadable handoffs, uses relative paths so it works under a GitHub Pages project URL, and makes no API request when a visitor opens it.

The public demo is live at `https://duckky153.github.io/issue-triage/`, with source at `https://github.com/Duckky153/issue-triage`. The checked-in Pages workflow runs the full release gate, builds `dist`, and deploys that folder. See `docs/DEPLOYMENT.md`. Building the folder locally does not publish it.

## What the workflow does

1. Paginates the public GitHub repository-issues endpoint.
2. Removes pull requests, duplicate records, and fields that are not needed.
3. Checks the candidate record count, schema, URLs, timestamps, and SHA-256 hash.
4. Uses repository labels before narrow title phrases.
5. Marks conflicts, missing type evidence, missing review-area evidence, and needs-information labels as `Needs Review`.
6. Runs the fixed real-issue benchmark, artifact checks, browser checks, tests, syntax checks, and dependency audit.
7. Promotes the candidate as one release or restores the previous release.

The CSV and JSON handoff files contain the source URL, evidence, suggested review lane, and next-step checklist for every issue.

## Boundaries

This is an independent portfolio project. It does not prove affiliation, employment, maintainer access, private support work, production use, employee adoption, time saved, or a business outcome. A suggested review lane is an explainable prompt for human review, not an assignment, priority, resolution, or maintainer decision.

See `docs/USER-GUIDE.md` for the walkthrough, `docs/JOB-DESCRIPTION-MAPPING.md` for the CoreWeave role fit and evidence gaps, and `evidence/current-verification.json` for the current generated result.
