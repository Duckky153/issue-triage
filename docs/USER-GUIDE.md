# User guide

## Start

Run `npm ci`, `npm run verify`, and `npm run serve`, then open `http://127.0.0.1:4191`.
If that port is already in use, start the server with an explicit open port, such
as `PORT=4192 npm run serve`, and open the URL printed by the server.

## Review an issue

1. Search by title, issue number, or source label, or filter by repository and review state.
2. Select an issue.
3. Open the exact source before relying on the retained metadata.
4. Compare the displayed issue type and review area with the evidence list.
5. If the state is `Needs Review`, use the checklist to collect the missing evidence; do not assign the issue from the dashboard alone.
6. Download the CSV or JSON handoff for a portable review record.

## Read the states

- `Suggested`: labels or a narrow title phrase support both an issue type and a review area.
- `Needs Review`: the evidence is missing, weak, conflicting, or explicitly asks for more information.
- `Closed Source`: GitHub reports the issue closed. The dashboard does not infer why.

## Refresh

Use `npm run refresh-and-verify`. The current release changes only after the new candidate passes collection, data, benchmark, test, artifact, browser, syntax, and dependency gates.

## Public demo

Run `npm run build-static` and `npm run verify-static` before publication. The resulting `dist` folder is the deployable site. The public demo is `https://duckky153.github.io/issue-triage/`; future releases require the repository owner's approval and a passing workflow.
