# Walkthrough

## Two-minute explanation

1. **Problem:** public issue queues contain mixed work and incomplete metadata. The dashboard prepares a review record without pretending to make a maintainer decision.
2. **Input:** public GitHub metadata from three repositories. Pull requests, duplicate records, usernames, bodies, assignees, and comment text are excluded.
3. **Decision logic:** repository type labels come first, area and team labels come next, and only narrow title phrases fill a missing signal. Conflicts and weak evidence become `Needs Review`.
4. **Interface:** search or filter the queue, select an issue, open the exact source, inspect the evidence, and follow the checklist.
5. **Handoff:** export CSV or JSON with the source URL, evidence, lane, and next steps.
6. **Quality:** a fixed real-issue benchmark checks rule agreement, while candidate validation, browser tests, static-release checks, and rollback tests protect the current release.
7. **Limit:** this is public-data portfolio work, not affiliation, private support work, production use, adoption, time saved, or a company outcome.

## Likely questions

**Why not infer more from the title?** Generic words create false positives. The tool abstains when the retained evidence is not enough.

**Why use a fixed benchmark?** A new live sample changes over time. The fixed reviewed set lets the same decisions be checked after rule changes.

**What happens when GitHub fails?** The candidate stays in a temporary directory. The prior verified release remains unchanged.

**What would come next inside a real company?** Interview reviewers, map their actual taxonomy and ownership rules, test the handoff in a sandbox, collect feedback, and measure adoption and review time. None of that has happened here.
