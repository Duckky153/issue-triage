# Public demo deployment

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

Recommended repository name: `issue-triage`. With the current GitHub account, the expected project URL would be `https://duckky153.github.io/issue-triage/`.

1. Create or select the repository that will own this project.
2. Push the verified project to its `main` branch.
3. In the repository's Pages settings, choose GitHub Actions as the source.
4. Run the `Deploy dashboard to GitHub Pages` workflow if the push did not start it automatically.
5. Open the reported Pages URL in a private browser window and test search, both filters, an original-issue link, and both downloads.

The workflow in `.github/workflows/pages.yml` runs the full verification suite before deployment. A failed gate stops the release.

## Updating the public snapshot

Refresh locally and review the result before pushing it. A live refresh changes which recently updated issues appear, so the checked-in release remains stable until the verified files are committed and deployed.

Publishing, changing repository settings, and pushing to the remote are external actions and require the owner's approval.
