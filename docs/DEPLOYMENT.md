# Deployment

## Release gate

Run:

```bash
npm ci
npm run refresh-and-verify
npm run build-static
npm run verify-static
```

`dist` is the only folder that should be published. It contains the dashboard, current checked-in data, favicon, styles, scripts, and both handoff downloads. The dashboard does not call GitHub or another API in a visitor's browser.

## GitHub Pages

The public repository is `Duckky153/issue-triage`, and the deployed site is `https://duckky153.github.io/issue-triage/`.

1. Create or select the repository that will own this project.
2. Push the verified project to its `main` branch.
3. In the repository's Pages settings, choose GitHub Actions as the source.
4. Run the `Deploy dashboard to GitHub Pages` workflow if the push did not start it automatically.
5. Open the reported Pages URL in a private browser window and test search, both filters, an original-issue link, and both downloads.

The workflow in `.github/workflows/pages.yml` runs the full verification suite before deployment. A failed gate stops the release.

The first public release, commit `88fc7eb`, passed workflow run `33813274154` on September 3, 2026. The run predates a later history cleanup that changed commit hashes, so its page shows the earlier hash for this commit. A separate public-host browser check confirmed the totals, search, both filters, exact source links, CSV and JSON downloads, and mobile layout with no console or page errors.

## Updating the public data

Refresh locally and review the result before pushing it. A live refresh changes which recently updated issues appear, so the checked-in release remains stable until the verified files are committed and deployed. A change reaches the public site only after the workflow passes.
