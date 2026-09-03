window.GITHUB_TRIAGE_DATA = {
  "summary": {
    "totalRecords": 90,
    "needsReview": 54,
    "suggested": 25,
    "closedSource": 11
  },
  "results": [
    {
      "id": "grafana/grafana#131949",
      "repository": "grafana/grafana",
      "project": "Grafana",
      "issueNumber": 131949,
      "title": "Azure Monitor: Add Health Models to the Azure Monitor data source",
      "sourceUrl": "https://github.com/grafana/grafana/issues/131949",
      "sourceState": "open",
      "sourceStateReason": null,
      "issueType": "feature-request",
      "reviewArea": "integrations",
      "reviewState": "suggested",
      "suggestedReviewLane": "Integration review",
      "rationale": "Repository labels or a specific title phrase support a Feature Request issue in the Integrations review area.",
      "evidence": [
        {
          "field": "issueType",
          "source": "repository label",
          "value": "type/feature-request"
        },
        {
          "field": "reviewArea",
          "source": "repository label",
          "value": "datasource/Azure"
        }
      ],
      "nextStepChecklist": [
        "Identify the external system and the failing boundary.",
        "Record the trigger, input, expected output, and observed output.",
        "Ask the integration owner to reproduce the issue before assignment."
      ],
      "labels": [
        "automated-triage",
        "datasource/Azure",
        "type/feature-request"
      ]
    },
    {
      "id": "grafana/grafana#112165",
      "repository": "grafana/grafana",
      "project": "Grafana",
      "issueNumber": 112165,
      "title": "Dependency Dashboard",
      "sourceUrl": "https://github.com/grafana/grafana/issues/112165",
      "sourceState": "open",
      "sourceStateReason": null,
      "issueType": "needs-review",
      "reviewArea": "observability",
      "reviewState": "needs-review",
      "suggestedReviewLane": "Needs Review",
      "rationale": "The public metadata is incomplete or sends conflicting signals, so a person must choose the review lane.",
      "evidence": [
        {
          "field": "reviewArea",
          "source": "specific title phrase",
          "value": "Dependency Dashboard"
        }
      ],
      "nextStepChecklist": [
        "Confirm the issue type and affected product area.",
        "Collect the missing reproduction, version, and impact details.",
        "Assign a review lane only after the evidence is clear."
      ],
      "labels": [
        "dependencies"
      ]
    },
    {
      "id": "grafana/grafana#131863",
      "repository": "grafana/grafana",
      "project": "Grafana",
      "issueNumber": 131863,
      "title": "13.2.0 RPM bundles catalog plugin binaries built with older Go stdlib (grafana-server itself is clean on go1.26.6)",
      "sourceUrl": "https://github.com/grafana/grafana/issues/131863",
      "sourceState": "open",
      "sourceStateReason": null,
      "issueType": "bug",
      "reviewArea": "security-access",
      "reviewState": "suggested",
      "suggestedReviewLane": "Security and access review",
      "rationale": "Repository labels or a specific title phrase support a Bug issue in the Security Access review area.",
      "evidence": [
        {
          "field": "issueType",
          "source": "repository label",
          "value": "type/bug"
        },
        {
          "field": "reviewArea",
          "source": "repository label",
          "value": "area/security"
        }
      ],
      "nextStepChecklist": [
        "Confirm that no credentials or private identifiers enter the review record.",
        "Record the affected authentication or permission boundary.",
        "Ask an authorized security or identity owner to assess the linked source."
      ],
      "labels": [
        "area/plugins-catalog",
        "area/security",
        "automated-triage",
        "type/bug",
        "type/build-packaging"
      ]
    },
    {
      "id": "grafana/grafana#131944",
      "repository": "grafana/grafana",
      "project": "Grafana",
      "issueNumber": 131944,
      "title": "Explore shows \"No data\" with no error when the query response is too large for the browser to parse",
      "sourceUrl": "https://github.com/grafana/grafana/issues/131944",
      "sourceState": "open",
      "sourceStateReason": null,
      "issueType": "bug",
      "reviewArea": "observability",
      "reviewState": "suggested",
      "suggestedReviewLane": "Observability review",
      "rationale": "Repository labels or a specific title phrase support a Bug issue in the Observability review area.",
      "evidence": [
        {
          "field": "issueType",
          "source": "repository label",
          "value": "type/bug"
        },
        {
          "field": "reviewArea",
          "source": "repository label",
          "value": "area/explore"
        }
      ],
      "nextStepChecklist": [
        "Identify the dashboard, alert, metric, or visualization surface involved.",
        "Confirm expected behavior and the smallest reproducible example.",
        "Ask the relevant observability owner to review the linked evidence."
      ],
      "labels": [
        "area/explore",
        "automated-triage",
        "issue/auto-triaged",
        "team/grafana-datapro",
        "type/bug"
      ]
    },
    {
      "id": "grafana/grafana#116074",
      "repository": "grafana/grafana",
      "project": "Grafana",
      "issueNumber": 116074,
      "title": "Alerting: Manually Set labels are not present in namespace when notification message is interpolated",
      "sourceUrl": "https://github.com/grafana/grafana/issues/116074",
      "sourceState": "open",
      "sourceStateReason": null,
      "issueType": "bug",
      "reviewArea": "reliability",
      "reviewState": "suggested",
      "suggestedReviewLane": "Reliability review",
      "rationale": "Repository labels or a specific title phrase support a Bug issue in the Reliability review area.",
      "evidence": [
        {
          "field": "issueType",
          "source": "repository label",
          "value": "type/bug"
        },
        {
          "field": "reviewArea",
          "source": "repository label",
          "value": "area/alerting"
        }
      ],
      "nextStepChecklist": [
        "Record the affected version, environment, recurrence, and visible impact.",
        "Check the source for reproduction details and related reports.",
        "Ask the responsible reliability owner to set priority."
      ],
      "labels": [
        "area/alerting",
        "area/backend",
        "automated-triage",
        "good first issue",
        "type/bug"
      ]
    },
    {
      "id": "grafana/grafana#131937",
      "repository": "grafana/grafana",
      "project": "Grafana",
      "issueNumber": 131937,
      "title": "Canvas panel: connector rounded-corner (radius) renders as a corrupted zigzag for certain bend directions",
      "sourceUrl": "https://github.com/grafana/grafana/issues/131937",
      "sourceState": "open",
      "sourceStateReason": null,
      "issueType": "bug",
      "reviewArea": "observability",
      "reviewState": "suggested",
      "suggestedReviewLane": "Observability review",
      "rationale": "Repository labels or a specific title phrase support a Bug issue in the Observability review area.",
      "evidence": [
        {
          "field": "issueType",
          "source": "repository label",
          "value": "type/bug"
        },
        {
          "field": "reviewArea",
          "source": "repository label",
          "value": "area/panel/canvas"
        }
      ],
      "nextStepChecklist": [
        "Identify the dashboard, alert, metric, or visualization surface involved.",
        "Confirm expected behavior and the smallest reproducible example.",
        "Ask the relevant observability owner to review the linked evidence."
      ],
      "labels": [
        "area/panel/canvas",
        "automated-triage",
        "type/bug"
      ]
    },
    {
      "id": "grafana/grafana#131930",
      "repository": "grafana/grafana",
      "project": "Grafana",
      "issueNumber": 131930,
      "title": "Auth: token rotate endpoint returns 401 without clearing session cookies when the token no longer exists, causing an infinite page reload loop (auth proxy + enable_login_token)",
      "sourceUrl": "https://github.com/grafana/grafana/issues/131930",
      "sourceState": "open",
      "sourceStateReason": null,
      "issueType": "bug",
      "reviewArea": "security-access",
      "reviewState": "suggested",
      "suggestedReviewLane": "Security and access review",
      "rationale": "Repository labels or a specific title phrase support a Bug issue in the Security Access review area.",
      "evidence": [
        {
          "field": "issueType",
          "source": "repository label",
          "value": "type/bug"
        },
        {
          "field": "reviewArea",
          "source": "repository label",
          "value": "area/auth"
        }
      ],
      "nextStepChecklist": [
        "Confirm that no credentials or private identifiers enter the review record.",
        "Record the affected authentication or permission boundary.",
        "Ask an authorized security or identity owner to assess the linked source."
      ],
      "labels": [
        "area/auth",
        "automated-triage",
        "type/bug"
      ]
    },
    {
      "id": "grafana/grafana#131927",
      "repository": "grafana/grafana",
      "project": "Grafana",
      "issueNumber": 131927,
      "title": "Dashboards: \"RangeError: Maximum call stack size exceeded\" when browsing dashboards",
      "sourceUrl": "https://github.com/grafana/grafana/issues/131927",
      "sourceState": "open",
      "sourceStateReason": null,
      "issueType": "bug",
      "reviewArea": "observability",
      "reviewState": "suggested",
      "suggestedReviewLane": "Observability review",
      "rationale": "Repository labels or a specific title phrase support a Bug issue in the Observability review area.",
      "evidence": [
        {
          "field": "issueType",
          "source": "repository label",
          "value": "type/bug"
        },
        {
          "field": "reviewArea",
          "source": "repository label",
          "value": "area/dashboard/folders"
        }
      ],
      "nextStepChecklist": [
        "Identify the dashboard, alert, metric, or visualization surface involved.",
        "Confirm expected behavior and the smallest reproducible example.",
        "Ask the relevant observability owner to review the linked evidence."
      ],
      "labels": [
        "area/dashboard/folders",
        "area/gitsync",
        "automated-triage",
        "type/bug"
      ]
    },
    {
      "id": "grafana/grafana#128985",
      "repository": "grafana/grafana",
      "project": "Grafana",
      "issueNumber": 128985,
      "title": "Grafana 13.1 Unified storage migration: CountValidator off-by-one false positive on PostgreSQL (GetStats) blocks startup though all rows migrated",
      "sourceUrl": "https://github.com/grafana/grafana/issues/128985",
      "sourceState": "open",
      "sourceStateReason": null,
      "issueType": "bug",
      "reviewArea": "infrastructure",
      "reviewState": "suggested",
      "suggestedReviewLane": "Infrastructure review",
      "rationale": "Repository labels or a specific title phrase support a Bug issue in the Infrastructure review area.",
      "evidence": [
        {
          "field": "issueType",
          "source": "repository label",
          "value": "type/bug"
        },
        {
          "field": "issueType",
          "source": "repository label",
          "value": "type/regression"
        },
        {
          "field": "reviewArea",
          "source": "specific title phrase",
          "value": "Grafana 13.1 Unified storage migration: CountValidator off-by-one false positive on PostgreSQL (GetStats) blocks startup though all rows migrated"
        }
      ],
      "nextStepChecklist": [
        "Record the component, version, environment, and visible impact.",
        "Confirm whether the source includes reproduction or validation evidence.",
        "Ask the responsible infrastructure owner to review the issue."
      ],
      "labels": [
        "area/backend/db/migration",
        "area/backend/db/postgres",
        "automated-triage",
        "type/bug",
        "type/regression"
      ]
    },
    {
      "id": "grafana/grafana#131921",
      "repository": "grafana/grafana",
      "project": "Grafana",
      "issueNumber": 131921,
      "title": "13.1.5 links `apache/thrift` and `grpc-go` below their fixed versions; `main` already has thrift 0.24.0",
      "sourceUrl": "https://github.com/grafana/grafana/issues/131921",
      "sourceState": "open",
      "sourceStateReason": null,
      "issueType": "bug",
      "reviewArea": "security-access",
      "reviewState": "suggested",
      "suggestedReviewLane": "Security and access review",
      "rationale": "Repository labels or a specific title phrase support a Bug issue in the Security Access review area.",
      "evidence": [
        {
          "field": "issueType",
          "source": "repository label",
          "value": "type/bug"
        },
        {
          "field": "reviewArea",
          "source": "repository label",
          "value": "area/security"
        }
      ],
      "nextStepChecklist": [
        "Confirm that no credentials or private identifiers enter the review record.",
        "Record the affected authentication or permission boundary.",
        "Ask an authorized security or identity owner to assess the linked source."
      ],
      "labels": [
        "area/backend",
        "area/security",
        "automated-triage",
        "type/bug",
        "type/build-packaging"
      ]
    },
    {
      "id": "grafana/grafana#127164",
      "repository": "grafana/grafana",
      "project": "Grafana",
      "issueNumber": 127164,
      "title": "debian package: Install fails for 13.1.0 with pre-existing /var/lib/grafana",
      "sourceUrl": "https://github.com/grafana/grafana/issues/127164",
      "sourceState": "closed",
      "sourceStateReason": "completed",
      "issueType": "bug",
      "reviewArea": "general",
      "reviewState": "closed-source",
      "suggestedReviewLane": "Closed source record review",
      "rationale": "The source issue is closed, so the dashboard preserves that state and does not infer why it closed.",
      "evidence": [
        {
          "field": "issueType",
          "source": "repository label",
          "value": "type/bug"
        },
        {
          "field": "issueType",
          "source": "repository label",
          "value": "type/regression"
        },
        {
          "field": "reviewState",
          "source": "source state",
          "value": "completed"
        }
      ],
      "nextStepChecklist": [
        "Confirm the issue type and affected product area.",
        "Collect the missing reproduction, version, and impact details.",
        "Assign a review lane only after the evidence is clear."
      ],
      "labels": [
        "area/plugins",
        "automated-triage",
        "type/bug",
        "type/build-packaging",
        "type/regression"
      ]
    },
    {
      "id": "grafana/grafana#131924",
      "repository": "grafana/grafana",
      "project": "Grafana",
      "issueNumber": 131924,
      "title": "\"Label values\" query type variable does not use the row/tab-repeat-scoped datasource; \"Classic query\" with identical syntax does",
      "sourceUrl": "https://github.com/grafana/grafana/issues/131924",
      "sourceState": "open",
      "sourceStateReason": null,
      "issueType": "bug",
      "reviewArea": "observability",
      "reviewState": "suggested",
      "suggestedReviewLane": "Observability review",
      "rationale": "Repository labels or a specific title phrase support a Bug issue in the Observability review area.",
      "evidence": [
        {
          "field": "issueType",
          "source": "repository label",
          "value": "type/bug"
        },
        {
          "field": "reviewArea",
          "source": "repository label",
          "value": "area/dashboard/templating"
        },
        {
          "field": "reviewArea",
          "source": "repository label",
          "value": "area/dashboard/variable"
        }
      ],
      "nextStepChecklist": [
        "Identify the dashboard, alert, metric, or visualization surface involved.",
        "Confirm expected behavior and the smallest reproducible example.",
        "Ask the relevant observability owner to review the linked evidence."
      ],
      "labels": [
        "area/dashboard/templating",
        "area/dashboard/variable",
        "area/templating/repeating",
        "automated-triage",
        "type/bug"
      ]
    },
    {
      "id": "grafana/grafana#131922",
      "repository": "grafana/grafana",
      "project": "Grafana",
      "issueNumber": 131922,
      "title": "NetworkError when switching organization",
      "sourceUrl": "https://github.com/grafana/grafana/issues/131922",
      "sourceState": "open",
      "sourceStateReason": null,
      "issueType": "bug",
      "reviewArea": "general",
      "reviewState": "needs-review",
      "suggestedReviewLane": "Needs Review",
      "rationale": "The public metadata is incomplete or sends conflicting signals, so a person must choose the review lane.",
      "evidence": [
        {
          "field": "issueType",
          "source": "repository label",
          "value": "type/bug"
        }
      ],
      "nextStepChecklist": [
        "Confirm the issue type and affected product area.",
        "Collect the missing reproduction, version, and impact details.",
        "Assign a review lane only after the evidence is clear."
      ],
      "labels": [
        "area/navigation",
        "automated-triage",
        "issue/auto-triaged",
        "type/browser-compatibility",
        "type/bug"
      ]
    },
    {
      "id": "grafana/grafana#127031",
      "repository": "grafana/grafana",
      "project": "Grafana",
      "issueNumber": 127031,
      "title": "Phase 2.1 (@grafana/alerting-frontend): Migrate to async DataSource APIs",
      "sourceUrl": "https://github.com/grafana/grafana/issues/127031",
      "sourceState": "open",
      "sourceStateReason": null,
      "issueType": "needs-review",
      "reviewArea": "observability",
      "reviewState": "needs-review",
      "suggestedReviewLane": "Needs Review",
      "rationale": "The public metadata is incomplete or sends conflicting signals, so a person must choose the review lane.",
      "evidence": [
        {
          "field": "reviewArea",
          "source": "specific title phrase",
          "value": "Phase 2.1 (@grafana/alerting-frontend): Migrate to async DataSource APIs"
        }
      ],
      "nextStepChecklist": [
        "Confirm the issue type and affected product area.",
        "Collect the missing reproduction, version, and impact details.",
        "Assign a review lane only after the evidence is clear."
      ],
      "labels": [
        "internal"
      ]
    },
    {
      "id": "grafana/grafana#131843",
      "repository": "grafana/grafana",
      "project": "Grafana",
      "issueNumber": 131843,
      "title": "Number formatting: a decimals count above 20 renders the scaling factor's exponent as data, and above 100 throws",
      "sourceUrl": "https://github.com/grafana/grafana/issues/131843",
      "sourceState": "open",
      "sourceStateReason": null,
      "issueType": "bug",
      "reviewArea": "observability",
      "reviewState": "suggested",
      "suggestedReviewLane": "Observability review",
      "rationale": "Repository labels or a specific title phrase support a Bug issue in the Observability review area.",
      "evidence": [
        {
          "field": "issueType",
          "source": "repository label",
          "value": "type/bug"
        },
        {
          "field": "reviewArea",
          "source": "repository label",
          "value": "area/dashboards/panel"
        }
      ],
      "nextStepChecklist": [
        "Identify the dashboard, alert, metric, or visualization surface involved.",
        "Confirm expected behavior and the smallest reproducible example.",
        "Ask the relevant observability owner to review the linked evidence."
      ],
      "labels": [
        "area/dashboards/panel",
        "area/field/overrides",
        "automated-triage",
        "type/bug"
      ]
    },
    {
      "id": "grafana/grafana#125823",
      "repository": "grafana/grafana",
      "project": "Grafana",
      "issueNumber": 125823,
      "title": "Dashboards: RangeError: Maximum call stack size exceeded",
      "sourceUrl": "https://github.com/grafana/grafana/issues/125823",
      "sourceState": "open",
      "sourceStateReason": null,
      "issueType": "bug",
      "reviewArea": "observability",
      "reviewState": "suggested",
      "suggestedReviewLane": "Observability review",
      "rationale": "Repository labels or a specific title phrase support a Bug issue in the Observability review area.",
      "evidence": [
        {
          "field": "issueType",
          "source": "repository label",
          "value": "type/bug"
        },
        {
          "field": "issueType",
          "source": "repository label",
          "value": "type/regression"
        },
        {
          "field": "reviewArea",
          "source": "repository label",
          "value": "area/dashboard/scenes"
        }
      ],
      "nextStepChecklist": [
        "Identify the dashboard, alert, metric, or visualization surface involved.",
        "Confirm expected behavior and the smallest reproducible example.",
        "Ask the relevant observability owner to review the linked evidence."
      ],
      "labels": [
        "area/dashboard/scenes",
        "automated-triage",
        "type/bug",
        "type/regression"
      ]
    },
    {
      "id": "grafana/grafana#129089",
      "repository": "grafana/grafana",
      "project": "Grafana",
      "issueNumber": 129089,
      "title": "Unified storage migration: a failed validator records no progress checkpoint, causing a permanent crash-loop on every restart",
      "sourceUrl": "https://github.com/grafana/grafana/issues/129089",
      "sourceState": "open",
      "sourceStateReason": null,
      "issueType": "bug",
      "reviewArea": "general",
      "reviewState": "needs-review",
      "suggestedReviewLane": "Needs Review",
      "rationale": "The public metadata is incomplete or sends conflicting signals, so a person must choose the review lane.",
      "evidence": [
        {
          "field": "issueType",
          "source": "repository label",
          "value": "type/bug"
        },
        {
          "field": "issueType",
          "source": "repository label",
          "value": "type/regression"
        },
        {
          "field": "reviewArea",
          "source": "conflicting title phrases",
          "value": "Unified storage migration: a failed validator records no progress checkpoint, causing a permanent crash-loop on every restart"
        }
      ],
      "nextStepChecklist": [
        "Confirm the issue type and affected product area.",
        "Collect the missing reproduction, version, and impact details.",
        "Assign a review lane only after the evidence is clear."
      ],
      "labels": [
        "area/backend/db/migration",
        "area/backend/db/postgres",
        "automated-triage",
        "type/bug",
        "type/regression"
      ]
    },
    {
      "id": "grafana/grafana#74502",
      "repository": "grafana/grafana",
      "project": "Grafana",
      "issueNumber": 74502,
      "title": "BarChart: Not display value text when the values are close",
      "sourceUrl": "https://github.com/grafana/grafana/issues/74502",
      "sourceState": "open",
      "sourceStateReason": null,
      "issueType": "needs-review",
      "reviewArea": "observability",
      "reviewState": "needs-review",
      "suggestedReviewLane": "Needs Review",
      "rationale": "The public metadata is incomplete or sends conflicting signals, so a person must choose the review lane.",
      "evidence": [
        {
          "field": "reviewArea",
          "source": "repository label",
          "value": "area/panel/barchart"
        }
      ],
      "nextStepChecklist": [
        "Confirm the issue type and affected product area.",
        "Collect the missing reproduction, version, and impact details.",
        "Assign a review lane only after the evidence is clear."
      ],
      "labels": [
        "area/panel/barchart",
        "stale"
      ]
    },
    {
      "id": "grafana/grafana#94966",
      "repository": "grafana/grafana",
      "project": "Grafana",
      "issueNumber": 94966,
      "title": "Modal/Drawer: Prevent being able to scroll the underlying page",
      "sourceUrl": "https://github.com/grafana/grafana/issues/94966",
      "sourceState": "open",
      "sourceStateReason": null,
      "issueType": "bug",
      "reviewArea": "general",
      "reviewState": "needs-review",
      "suggestedReviewLane": "Needs Review",
      "rationale": "The public metadata is incomplete or sends conflicting signals, so a person must choose the review lane.",
      "evidence": [
        {
          "field": "issueType",
          "source": "repository label",
          "value": "type/bug"
        }
      ],
      "nextStepChecklist": [
        "Confirm the issue type and affected product area.",
        "Collect the missing reproduction, version, and impact details.",
        "Assign a review lane only after the evidence is clear."
      ],
      "labels": [
        "effort/medium",
        "internal",
        "prio/medium",
        "stale",
        "type/accessibility",
        "type/bug"
      ]
    },
    {
      "id": "grafana/grafana#131920",
      "repository": "grafana/grafana",
      "project": "Grafana",
      "issueNumber": 131920,
      "title": "Git Sync: no-op interval sync never refreshes status.sync.Finished, so the controller polls the git provider every reconcile instead of every intervalSeconds",
      "sourceUrl": "https://github.com/grafana/grafana/issues/131920",
      "sourceState": "open",
      "sourceStateReason": null,
      "issueType": "bug",
      "reviewArea": "reliability",
      "reviewState": "suggested",
      "suggestedReviewLane": "Reliability review",
      "rationale": "Repository labels or a specific title phrase support a Bug issue in the Reliability review area.",
      "evidence": [
        {
          "field": "issueType",
          "source": "repository label",
          "value": "type/bug"
        },
        {
          "field": "reviewArea",
          "source": "repository label",
          "value": "type/performance"
        }
      ],
      "nextStepChecklist": [
        "Record the affected version, environment, recurrence, and visible impact.",
        "Check the source for reproduction details and related reports.",
        "Ask the responsible reliability owner to set priority."
      ],
      "labels": [
        "area/gitsync",
        "area/provisioning",
        "automated-triage",
        "type/bug",
        "type/performance"
      ]
    },
    {
      "id": "grafana/grafana#110483",
      "repository": "grafana/grafana",
      "project": "Grafana",
      "issueNumber": 110483,
      "title": "Table: Add second footer row for filtered+sorted data",
      "sourceUrl": "https://github.com/grafana/grafana/issues/110483",
      "sourceState": "open",
      "sourceStateReason": null,
      "issueType": "needs-review",
      "reviewArea": "observability",
      "reviewState": "needs-review",
      "suggestedReviewLane": "Needs Review",
      "rationale": "The public metadata is incomplete or sends conflicting signals, so a person must choose the review lane.",
      "evidence": [
        {
          "field": "reviewArea",
          "source": "repository label",
          "value": "area/panel/table"
        }
      ],
      "nextStepChecklist": [
        "Confirm the issue type and affected product area.",
        "Collect the missing reproduction, version, and impact details.",
        "Assign a review lane only after the evidence is clear."
      ],
      "labels": [
        "area/panel/table",
        "internal",
        "stale"
      ]
    },
    {
      "id": "grafana/grafana#109000",
      "repository": "grafana/grafana",
      "project": "Grafana",
      "issueNumber": 109000,
      "title": "Dashboard: Disconnect values Threshold in Visualization show no  values after update from 12.0.3 to 12.1.0",
      "sourceUrl": "https://github.com/grafana/grafana/issues/109000",
      "sourceState": "open",
      "sourceStateReason": null,
      "issueType": "needs-review",
      "reviewArea": "observability",
      "reviewState": "needs-review",
      "suggestedReviewLane": "Needs Review",
      "rationale": "The public metadata is incomplete or sends conflicting signals, so a person must choose the review lane.",
      "evidence": [
        {
          "field": "reviewArea",
          "source": "repository label",
          "value": "area/panel/timeseries"
        }
      ],
      "nextStepChecklist": [
        "Confirm the issue type and affected product area.",
        "Collect the missing reproduction, version, and impact details.",
        "Assign a review lane only after the evidence is clear."
      ],
      "labels": [
        "area/panel/timeseries",
        "stale"
      ]
    },
    {
      "id": "grafana/grafana#98732",
      "repository": "grafana/grafana",
      "project": "Grafana",
      "issueNumber": 98732,
      "title": "Correlations: Add documentation to remove noted gaps",
      "sourceUrl": "https://github.com/grafana/grafana/issues/98732",
      "sourceState": "open",
      "sourceStateReason": null,
      "issueType": "needs-review",
      "reviewArea": "observability",
      "reviewState": "needs-review",
      "suggestedReviewLane": "Needs Review",
      "rationale": "The public metadata is incomplete or sends conflicting signals, so a person must choose the review lane.",
      "evidence": [
        {
          "field": "reviewArea",
          "source": "repository label",
          "value": "area/explore"
        }
      ],
      "nextStepChecklist": [
        "Confirm the issue type and affected product area.",
        "Collect the missing reproduction, version, and impact details.",
        "Assign a review lane only after the evidence is clear."
      ],
      "labels": [
        "area/correlations",
        "area/explore",
        "stale",
        "team/grafana-datapro"
      ]
    },
    {
      "id": "grafana/grafana#131918",
      "repository": "grafana/grafana",
      "project": "Grafana",
      "issueNumber": 131918,
      "title": "Unit symbols displayed in English on graph even with Russian localization selected",
      "sourceUrl": "https://github.com/grafana/grafana/issues/131918",
      "sourceState": "open",
      "sourceStateReason": null,
      "issueType": "bug",
      "reviewArea": "observability",
      "reviewState": "suggested",
      "suggestedReviewLane": "Observability review",
      "rationale": "Repository labels or a specific title phrase support a Bug issue in the Observability review area.",
      "evidence": [
        {
          "field": "issueType",
          "source": "repository label",
          "value": "type/bug"
        },
        {
          "field": "reviewArea",
          "source": "repository label",
          "value": "area/panel/timeseries"
        }
      ],
      "nextStepChecklist": [
        "Identify the dashboard, alert, metric, or visualization surface involved.",
        "Confirm expected behavior and the smallest reproducible example.",
        "Ask the relevant observability owner to review the linked evidence."
      ],
      "labels": [
        "area/field/overrides",
        "area/internationalization",
        "area/panel/timeseries",
        "automated-triage",
        "issue/auto-triaged",
        "type/bug"
      ]
    },
    {
      "id": "grafana/grafana#131913",
      "repository": "grafana/grafana",
      "project": "Grafana",
      "issueNumber": 131913,
      "title": "ALLOW ME TO COPY THE ERRORS FROM THE UI",
      "sourceUrl": "https://github.com/grafana/grafana/issues/131913",
      "sourceState": "open",
      "sourceStateReason": null,
      "issueType": "feature-request",
      "reviewArea": "general",
      "reviewState": "needs-review",
      "suggestedReviewLane": "Needs Review",
      "rationale": "The public metadata is incomplete or sends conflicting signals, so a person must choose the review lane.",
      "evidence": [
        {
          "field": "issueType",
          "source": "repository label",
          "value": "type/feature-request"
        }
      ],
      "nextStepChecklist": [
        "Confirm the issue type and affected product area.",
        "Collect the missing reproduction, version, and impact details.",
        "Assign a review lane only after the evidence is clear."
      ],
      "labels": [
        "area/tooltip",
        "automated-triage",
        "type/feature-request",
        "type/ux"
      ]
    },
    {
      "id": "grafana/grafana#131911",
      "repository": "grafana/grafana",
      "project": "Grafana",
      "issueNumber": 131911,
      "title": "Goroutine and memory leak: HEAD requests with `Accept-Encoding: gzip` leak a `pgzip.Writer` per request",
      "sourceUrl": "https://github.com/grafana/grafana/issues/131911",
      "sourceState": "open",
      "sourceStateReason": null,
      "issueType": "bug",
      "reviewArea": "reliability",
      "reviewState": "suggested",
      "suggestedReviewLane": "Reliability review",
      "rationale": "Repository labels or a specific title phrase support a Bug issue in the Reliability review area.",
      "evidence": [
        {
          "field": "issueType",
          "source": "repository label",
          "value": "type/bug"
        },
        {
          "field": "reviewArea",
          "source": "repository label",
          "value": "type/performance"
        }
      ],
      "nextStepChecklist": [
        "Record the affected version, environment, recurrence, and visible impact.",
        "Check the source for reproduction details and related reports.",
        "Ask the responsible reliability owner to set priority."
      ],
      "labels": [
        "area/backend",
        "automated-triage",
        "type/bug",
        "type/performance"
      ]
    },
    {
      "id": "grafana/grafana#131856",
      "repository": "grafana/grafana",
      "project": "Grafana",
      "issueNumber": 131856,
      "title": "Dashboard tab not sticky when scroll down",
      "sourceUrl": "https://github.com/grafana/grafana/issues/131856",
      "sourceState": "closed",
      "sourceStateReason": "not_planned",
      "issueType": "bug",
      "reviewArea": "observability",
      "reviewState": "closed-source",
      "suggestedReviewLane": "Closed source record review",
      "rationale": "The source issue is closed, so the dashboard preserves that state and does not infer why it closed.",
      "evidence": [
        {
          "field": "issueType",
          "source": "repository label",
          "value": "type/bug"
        },
        {
          "field": "reviewArea",
          "source": "repository label",
          "value": "area/dashboard/scenes"
        },
        {
          "field": "reviewState",
          "source": "source state",
          "value": "not_planned"
        }
      ],
      "nextStepChecklist": [
        "Confirm the issue type and affected product area.",
        "Collect the missing reproduction, version, and impact details.",
        "Assign a review lane only after the evidence is clear."
      ],
      "labels": [
        "area/dashboard/scenes",
        "automated-triage",
        "type/bug"
      ]
    },
    {
      "id": "grafana/grafana#131910",
      "repository": "grafana/grafana",
      "project": "Grafana",
      "issueNumber": 131910,
      "title": "Dashboards: repeated panels shrink after v1→v2 migration when repeatDirection is not set (Grafana 13)",
      "sourceUrl": "https://github.com/grafana/grafana/issues/131910",
      "sourceState": "open",
      "sourceStateReason": null,
      "issueType": "bug",
      "reviewArea": "observability",
      "reviewState": "suggested",
      "suggestedReviewLane": "Observability review",
      "rationale": "Repository labels or a specific title phrase support a Bug issue in the Observability review area.",
      "evidence": [
        {
          "field": "issueType",
          "source": "repository label",
          "value": "type/bug"
        },
        {
          "field": "issueType",
          "source": "repository label",
          "value": "type/regression"
        },
        {
          "field": "reviewArea",
          "source": "repository label",
          "value": "area/dashboard/scenes"
        },
        {
          "field": "reviewArea",
          "source": "repository label",
          "value": "area/panel/repeat"
        }
      ],
      "nextStepChecklist": [
        "Identify the dashboard, alert, metric, or visualization surface involved.",
        "Confirm expected behavior and the smallest reproducible example.",
        "Ask the relevant observability owner to review the linked evidence."
      ],
      "labels": [
        "area/dashboard/scenes",
        "area/panel/repeat",
        "area/templating/repeating",
        "automated-triage",
        "type/bug",
        "type/regression"
      ]
    },
    {
      "id": "grafana/grafana#131861",
      "repository": "grafana/grafana",
      "project": "Grafana",
      "issueNumber": 131861,
      "title": "Dashboard: Filters with Dashborad data source make the source panel loose all data",
      "sourceUrl": "https://github.com/grafana/grafana/issues/131861",
      "sourceState": "open",
      "sourceStateReason": null,
      "issueType": "bug",
      "reviewArea": "observability",
      "reviewState": "suggested",
      "suggestedReviewLane": "Observability review",
      "rationale": "Repository labels or a specific title phrase support a Bug issue in the Observability review area.",
      "evidence": [
        {
          "field": "issueType",
          "source": "repository label",
          "value": "type/bug"
        },
        {
          "field": "reviewArea",
          "source": "repository label",
          "value": "area/dashboard/variable"
        },
        {
          "field": "reviewArea",
          "source": "repository label",
          "value": "area/dashboards/panel"
        }
      ],
      "nextStepChecklist": [
        "Identify the dashboard, alert, metric, or visualization surface involved.",
        "Confirm expected behavior and the smallest reproducible example.",
        "Ask the relevant observability owner to review the linked evidence."
      ],
      "labels": [
        "area/dashboard/variable",
        "area/dashboards/panel",
        "automated-triage",
        "type/bug"
      ]
    },
    {
      "id": "grafana/grafana#131682",
      "repository": "grafana/grafana",
      "project": "Grafana",
      "issueNumber": 131682,
      "title": "Variables: Repeating Rows show variable value instead of variable text",
      "sourceUrl": "https://github.com/grafana/grafana/issues/131682",
      "sourceState": "open",
      "sourceStateReason": null,
      "issueType": "bug",
      "reviewArea": "observability",
      "reviewState": "suggested",
      "suggestedReviewLane": "Observability review",
      "rationale": "Repository labels or a specific title phrase support a Bug issue in the Observability review area.",
      "evidence": [
        {
          "field": "issueType",
          "source": "repository label",
          "value": "type/bug"
        },
        {
          "field": "reviewArea",
          "source": "repository label",
          "value": "area/dashboard/rows"
        },
        {
          "field": "reviewArea",
          "source": "repository label",
          "value": "area/dashboard/templating"
        },
        {
          "field": "reviewArea",
          "source": "repository label",
          "value": "area/dashboard/variable"
        }
      ],
      "nextStepChecklist": [
        "Identify the dashboard, alert, metric, or visualization surface involved.",
        "Confirm expected behavior and the smallest reproducible example.",
        "Ask the relevant observability owner to review the linked evidence."
      ],
      "labels": [
        "area/dashboard/rows",
        "area/dashboard/templating",
        "area/dashboard/variable",
        "area/templating/repeating",
        "automated-triage",
        "type/bug"
      ]
    },
    {
      "id": "kubernetes/kubernetes#141506",
      "repository": "kubernetes/kubernetes",
      "project": "Kubernetes",
      "issueNumber": 141506,
      "title": "Support numeric enums in +enum / +k8s:enum",
      "sourceUrl": "https://github.com/kubernetes/kubernetes/issues/141506",
      "sourceState": "open",
      "sourceStateReason": null,
      "issueType": "needs-review",
      "reviewArea": "infrastructure",
      "reviewState": "needs-review",
      "suggestedReviewLane": "Needs Review",
      "rationale": "The public metadata is incomplete or sends conflicting signals, so a person must choose the review lane.",
      "evidence": [
        {
          "field": "reviewArea",
          "source": "repository label",
          "value": "sig/api-machinery"
        }
      ],
      "nextStepChecklist": [
        "Confirm the issue type and affected product area.",
        "Collect the missing reproduction, version, and impact details.",
        "Assign a review lane only after the evidence is clear."
      ],
      "labels": [
        "sig/api-machinery",
        "triage/accepted"
      ]
    },
    {
      "id": "kubernetes/kubernetes#141422",
      "repository": "kubernetes/kubernetes",
      "project": "Kubernetes",
      "issueNumber": 141422,
      "title": "Empty DeviceTaintRule selector evicts every pod in the cluster, across namespaces and priorities, until the rule is removed",
      "sourceUrl": "https://github.com/kubernetes/kubernetes/issues/141422",
      "sourceState": "open",
      "sourceStateReason": null,
      "issueType": "feature-request",
      "reviewArea": "infrastructure",
      "reviewState": "needs-review",
      "suggestedReviewLane": "Needs Review",
      "rationale": "The public metadata is incomplete or sends conflicting signals, so a person must choose the review lane.",
      "evidence": [
        {
          "field": "issueType",
          "source": "repository label",
          "value": "kind/feature"
        },
        {
          "field": "reviewArea",
          "source": "repository label",
          "value": "sig/node"
        },
        {
          "field": "reviewArea",
          "source": "repository label",
          "value": "sig/scheduling"
        },
        {
          "field": "reviewState",
          "source": "repository label",
          "value": "needs-triage"
        }
      ],
      "nextStepChecklist": [
        "Confirm the issue type and affected product area.",
        "Collect the missing reproduction, version, and impact details.",
        "Assign a review lane only after the evidence is clear."
      ],
      "labels": [
        "kind/feature",
        "needs-triage",
        "sig/node",
        "sig/scheduling",
        "wg/device-management"
      ]
    },
    {
      "id": "kubernetes/kubernetes#141798",
      "repository": "kubernetes/kubernetes",
      "project": "Kubernetes",
      "issueNumber": 141798,
      "title": "CVE-2026-84304 gRPC-Go: Heap Memory Exhaustion (OOM) via HTTP/2 DATA Frame Fragmentation",
      "sourceUrl": "https://github.com/kubernetes/kubernetes/issues/141798",
      "sourceState": "open",
      "sourceStateReason": null,
      "issueType": "bug",
      "reviewArea": "infrastructure",
      "reviewState": "needs-review",
      "suggestedReviewLane": "Needs Review",
      "rationale": "The public metadata is incomplete or sends conflicting signals, so a person must choose the review lane.",
      "evidence": [
        {
          "field": "issueType",
          "source": "repository label",
          "value": "kind/bug"
        },
        {
          "field": "reviewArea",
          "source": "repository label",
          "value": "sig/architecture"
        },
        {
          "field": "reviewState",
          "source": "repository label",
          "value": "needs-triage"
        }
      ],
      "nextStepChecklist": [
        "Confirm the issue type and affected product area.",
        "Collect the missing reproduction, version, and impact details.",
        "Assign a review lane only after the evidence is clear."
      ],
      "labels": [
        "kind/bug",
        "needs-triage",
        "sig/architecture",
        "sig/security"
      ]
    },
    {
      "id": "kubernetes/kubernetes#141829",
      "repository": "kubernetes/kubernetes",
      "project": "Kubernetes",
      "issueNumber": 141829,
      "title": "DRA: AllocationMode All errors for incomplete or invalid pools are not per-node failures",
      "sourceUrl": "https://github.com/kubernetes/kubernetes/issues/141829",
      "sourceState": "open",
      "sourceStateReason": null,
      "issueType": "bug",
      "reviewArea": "infrastructure",
      "reviewState": "needs-review",
      "suggestedReviewLane": "Needs Review",
      "rationale": "The public metadata is incomplete or sends conflicting signals, so a person must choose the review lane.",
      "evidence": [
        {
          "field": "issueType",
          "source": "repository label",
          "value": "kind/bug"
        },
        {
          "field": "reviewArea",
          "source": "repository label",
          "value": "sig/node"
        },
        {
          "field": "reviewState",
          "source": "repository label",
          "value": "needs-triage"
        }
      ],
      "nextStepChecklist": [
        "Confirm the issue type and affected product area.",
        "Collect the missing reproduction, version, and impact details.",
        "Assign a review lane only after the evidence is clear."
      ],
      "labels": [
        "kind/bug",
        "needs-triage",
        "sig/node",
        "wg/device-management"
      ]
    },
    {
      "id": "kubernetes/kubernetes#141214",
      "repository": "kubernetes/kubernetes",
      "project": "Kubernetes",
      "issueNumber": 141214,
      "title": "DRA: allocator should fail closed (per-node) on a malformed ResourceSlice nodeSelector term count",
      "sourceUrl": "https://github.com/kubernetes/kubernetes/issues/141214",
      "sourceState": "open",
      "sourceStateReason": null,
      "issueType": "bug",
      "reviewArea": "infrastructure",
      "reviewState": "suggested",
      "suggestedReviewLane": "Infrastructure review",
      "rationale": "Repository labels or a specific title phrase support a Bug issue in the Infrastructure review area.",
      "evidence": [
        {
          "field": "issueType",
          "source": "repository label",
          "value": "kind/bug"
        },
        {
          "field": "reviewArea",
          "source": "repository label",
          "value": "sig/node"
        }
      ],
      "nextStepChecklist": [
        "Record the component, version, environment, and visible impact.",
        "Confirm whether the source includes reproduction or validation evidence.",
        "Ask the responsible infrastructure owner to review the issue."
      ],
      "labels": [
        "kind/bug",
        "priority/backlog",
        "sig/node",
        "triage/accepted",
        "wg/device-management"
      ]
    },
    {
      "id": "kubernetes/kubernetes#137148",
      "repository": "kubernetes/kubernetes",
      "project": "Kubernetes",
      "issueNumber": 137148,
      "title": "Table format streaming tests may flake due to CreationTime to Age conversion",
      "sourceUrl": "https://github.com/kubernetes/kubernetes/issues/137148",
      "sourceState": "closed",
      "sourceStateReason": "completed",
      "issueType": "needs-review",
      "reviewArea": "infrastructure",
      "reviewState": "closed-source",
      "suggestedReviewLane": "Closed source record review",
      "rationale": "The source issue is closed, so the dashboard preserves that state and does not infer why it closed.",
      "evidence": [
        {
          "field": "reviewArea",
          "source": "repository label",
          "value": "sig/api-machinery"
        },
        {
          "field": "reviewState",
          "source": "repository label",
          "value": "needs-triage"
        },
        {
          "field": "reviewState",
          "source": "source state",
          "value": "completed"
        }
      ],
      "nextStepChecklist": [
        "Confirm the issue type and affected product area.",
        "Collect the missing reproduction, version, and impact details.",
        "Assign a review lane only after the evidence is clear."
      ],
      "labels": [
        "kind/flake",
        "needs-triage",
        "sig/api-machinery"
      ]
    },
    {
      "id": "kubernetes/kubernetes#141818",
      "repository": "kubernetes/kubernetes",
      "project": "Kubernetes",
      "issueNumber": 141818,
      "title": "apiserver_init_events_total counts events after watcher was already terminated",
      "sourceUrl": "https://github.com/kubernetes/kubernetes/issues/141818",
      "sourceState": "open",
      "sourceStateReason": null,
      "issueType": "bug",
      "reviewArea": "infrastructure",
      "reviewState": "needs-review",
      "suggestedReviewLane": "Needs Review",
      "rationale": "The public metadata is incomplete or sends conflicting signals, so a person must choose the review lane.",
      "evidence": [
        {
          "field": "issueType",
          "source": "repository label",
          "value": "kind/bug"
        },
        {
          "field": "reviewArea",
          "source": "repository label",
          "value": "sig/api-machinery"
        },
        {
          "field": "reviewState",
          "source": "repository label",
          "value": "needs-triage"
        }
      ],
      "nextStepChecklist": [
        "Confirm the issue type and affected product area.",
        "Collect the missing reproduction, version, and impact details.",
        "Assign a review lane only after the evidence is clear."
      ],
      "labels": [
        "kind/bug",
        "needs-triage",
        "sig/api-machinery"
      ]
    },
    {
      "id": "kubernetes/kubernetes#141803",
      "repository": "kubernetes/kubernetes",
      "project": "Kubernetes",
      "issueNumber": 141803,
      "title": "[Flaking tests] k8s.io/kubernetes/test/integration/scheduler/preemption/podgroup tests timing out",
      "sourceUrl": "https://github.com/kubernetes/kubernetes/issues/141803",
      "sourceState": "open",
      "sourceStateReason": null,
      "issueType": "needs-review",
      "reviewArea": "infrastructure",
      "reviewState": "needs-review",
      "suggestedReviewLane": "Needs Review",
      "rationale": "The public metadata is incomplete or sends conflicting signals, so a person must choose the review lane.",
      "evidence": [
        {
          "field": "reviewArea",
          "source": "repository label",
          "value": "sig/scheduling"
        },
        {
          "field": "reviewState",
          "source": "repository label",
          "value": "needs-triage"
        }
      ],
      "nextStepChecklist": [
        "Confirm the issue type and affected product area.",
        "Collect the missing reproduction, version, and impact details.",
        "Assign a review lane only after the evidence is clear."
      ],
      "labels": [
        "kind/flake",
        "needs-triage",
        "sig/scheduling"
      ]
    },
    {
      "id": "kubernetes/kubernetes#140797",
      "repository": "kubernetes/kubernetes",
      "project": "Kubernetes",
      "issueNumber": 140797,
      "title": "DRA: dedicated allocation can overlap a live persisted shared allocation after allowMultipleAllocations is disabled",
      "sourceUrl": "https://github.com/kubernetes/kubernetes/issues/140797",
      "sourceState": "closed",
      "sourceStateReason": "completed",
      "issueType": "bug",
      "reviewArea": "infrastructure",
      "reviewState": "closed-source",
      "suggestedReviewLane": "Closed source record review",
      "rationale": "The source issue is closed, so the dashboard preserves that state and does not infer why it closed.",
      "evidence": [
        {
          "field": "issueType",
          "source": "repository label",
          "value": "kind/bug"
        },
        {
          "field": "reviewArea",
          "source": "repository label",
          "value": "sig/node"
        },
        {
          "field": "reviewState",
          "source": "repository label",
          "value": "needs-triage"
        },
        {
          "field": "reviewState",
          "source": "source state",
          "value": "completed"
        }
      ],
      "nextStepChecklist": [
        "Confirm the issue type and affected product area.",
        "Collect the missing reproduction, version, and impact details.",
        "Assign a review lane only after the evidence is clear."
      ],
      "labels": [
        "kind/bug",
        "needs-triage",
        "sig/node",
        "wg/device-management"
      ]
    },
    {
      "id": "kubernetes/kubernetes#138411",
      "repository": "kubernetes/kubernetes",
      "project": "Kubernetes",
      "issueNumber": 138411,
      "title": "fsgroup does not work with Hostpath volume as non root user",
      "sourceUrl": "https://github.com/kubernetes/kubernetes/issues/138411",
      "sourceState": "open",
      "sourceStateReason": null,
      "issueType": "bug",
      "reviewArea": "infrastructure",
      "reviewState": "needs-review",
      "suggestedReviewLane": "Needs Review",
      "rationale": "The public metadata is incomplete or sends conflicting signals, so a person must choose the review lane.",
      "evidence": [
        {
          "field": "issueType",
          "source": "repository label",
          "value": "kind/bug"
        },
        {
          "field": "reviewArea",
          "source": "repository label",
          "value": "sig/storage"
        },
        {
          "field": "reviewState",
          "source": "repository label",
          "value": "needs-triage"
        }
      ],
      "nextStepChecklist": [
        "Confirm the issue type and affected product area.",
        "Collect the missing reproduction, version, and impact details.",
        "Assign a review lane only after the evidence is clear."
      ],
      "labels": [
        "kind/bug",
        "needs-triage",
        "sig/storage"
      ]
    },
    {
      "id": "kubernetes/kubernetes#141703",
      "repository": "kubernetes/kubernetes",
      "project": "Kubernetes",
      "issueNumber": 141703,
      "title": "kubectl kuberc set accepts an empty option name",
      "sourceUrl": "https://github.com/kubernetes/kubernetes/issues/141703",
      "sourceState": "closed",
      "sourceStateReason": "completed",
      "issueType": "bug",
      "reviewArea": "infrastructure",
      "reviewState": "closed-source",
      "suggestedReviewLane": "Closed source record review",
      "rationale": "The source issue is closed, so the dashboard preserves that state and does not infer why it closed.",
      "evidence": [
        {
          "field": "issueType",
          "source": "repository label",
          "value": "kind/bug"
        },
        {
          "field": "reviewArea",
          "source": "repository label",
          "value": "sig/cli"
        },
        {
          "field": "reviewState",
          "source": "source state",
          "value": "completed"
        }
      ],
      "nextStepChecklist": [
        "Confirm the issue type and affected product area.",
        "Collect the missing reproduction, version, and impact details.",
        "Assign a review lane only after the evidence is clear."
      ],
      "labels": [
        "kind/bug",
        "sig/cli",
        "triage/accepted"
      ]
    },
    {
      "id": "kubernetes/kubernetes#134671",
      "repository": "kubernetes/kubernetes",
      "project": "Kubernetes",
      "issueNumber": 134671,
      "title": "Tracking: Enable Kube-API-Linter rules",
      "sourceUrl": "https://github.com/kubernetes/kubernetes/issues/134671",
      "sourceState": "open",
      "sourceStateReason": null,
      "issueType": "needs-review",
      "reviewArea": "infrastructure",
      "reviewState": "needs-review",
      "suggestedReviewLane": "Needs Review",
      "rationale": "The public metadata is incomplete or sends conflicting signals, so a person must choose the review lane.",
      "evidence": [
        {
          "field": "reviewArea",
          "source": "repository label",
          "value": "sig/api-machinery"
        },
        {
          "field": "reviewArea",
          "source": "repository label",
          "value": "sig/architecture"
        }
      ],
      "nextStepChecklist": [
        "Confirm the issue type and affected product area.",
        "Collect the missing reproduction, version, and impact details.",
        "Assign a review lane only after the evidence is clear."
      ],
      "labels": [
        "help wanted",
        "sig/api-machinery",
        "sig/architecture",
        "triage/accepted"
      ]
    },
    {
      "id": "kubernetes/kubernetes#141620",
      "repository": "kubernetes/kubernetes",
      "project": "Kubernetes",
      "issueNumber": 141620,
      "title": "DeviceTaintRule with deviceSelector omitted blocks device allocation cluster-wide, including adminAccess claims, contradicting documented behavior",
      "sourceUrl": "https://github.com/kubernetes/kubernetes/issues/141620",
      "sourceState": "closed",
      "sourceStateReason": "completed",
      "issueType": "bug",
      "reviewArea": "infrastructure",
      "reviewState": "closed-source",
      "suggestedReviewLane": "Closed source record review",
      "rationale": "The source issue is closed, so the dashboard preserves that state and does not infer why it closed.",
      "evidence": [
        {
          "field": "issueType",
          "source": "repository label",
          "value": "kind/bug"
        },
        {
          "field": "reviewArea",
          "source": "repository label",
          "value": "sig/node"
        },
        {
          "field": "reviewArea",
          "source": "repository label",
          "value": "sig/scheduling"
        },
        {
          "field": "reviewState",
          "source": "source state",
          "value": "completed"
        }
      ],
      "nextStepChecklist": [
        "Confirm the issue type and affected product area.",
        "Collect the missing reproduction, version, and impact details.",
        "Assign a review lane only after the evidence is clear."
      ],
      "labels": [
        "kind/bug",
        "priority/important-longterm",
        "sig/node",
        "sig/scheduling",
        "triage/accepted",
        "wg/device-management"
      ]
    },
    {
      "id": "kubernetes/kubernetes#141814",
      "repository": "kubernetes/kubernetes",
      "project": "Kubernetes",
      "issueNumber": 141814,
      "title": "In-place Pod resize drops CPU/memory keys from PodStatus.Resources depending on resize dimension",
      "sourceUrl": "https://github.com/kubernetes/kubernetes/issues/141814",
      "sourceState": "open",
      "sourceStateReason": null,
      "issueType": "bug",
      "reviewArea": "infrastructure",
      "reviewState": "needs-review",
      "suggestedReviewLane": "Needs Review",
      "rationale": "The public metadata is incomplete or sends conflicting signals, so a person must choose the review lane.",
      "evidence": [
        {
          "field": "issueType",
          "source": "repository label",
          "value": "kind/bug"
        },
        {
          "field": "reviewArea",
          "source": "repository label",
          "value": "sig/node"
        },
        {
          "field": "reviewState",
          "source": "repository label",
          "value": "needs-triage"
        }
      ],
      "nextStepChecklist": [
        "Confirm the issue type and affected product area.",
        "Collect the missing reproduction, version, and impact details.",
        "Assign a review lane only after the evidence is clear."
      ],
      "labels": [
        "kind/bug",
        "needs-triage",
        "sig/node"
      ]
    },
    {
      "id": "kubernetes/kubernetes#141634",
      "repository": "kubernetes/kubernetes",
      "project": "Kubernetes",
      "issueNumber": 141634,
      "title": "Migrate ObjectMeta handwritten validations to DV",
      "sourceUrl": "https://github.com/kubernetes/kubernetes/issues/141634",
      "sourceState": "open",
      "sourceStateReason": null,
      "issueType": "cleanup",
      "reviewArea": "infrastructure",
      "reviewState": "suggested",
      "suggestedReviewLane": "Infrastructure review",
      "rationale": "Repository labels or a specific title phrase support a Cleanup issue in the Infrastructure review area.",
      "evidence": [
        {
          "field": "issueType",
          "source": "repository label",
          "value": "kind/cleanup"
        },
        {
          "field": "reviewArea",
          "source": "repository label",
          "value": "area/api-validation"
        },
        {
          "field": "reviewArea",
          "source": "repository label",
          "value": "area/code-generation"
        },
        {
          "field": "reviewArea",
          "source": "repository label",
          "value": "sig/api-machinery"
        }
      ],
      "nextStepChecklist": [
        "Record the component, version, environment, and visible impact.",
        "Confirm whether the source includes reproduction or validation evidence.",
        "Ask the responsible infrastructure owner to review the issue."
      ],
      "labels": [
        "area/api-validation",
        "area/code-generation",
        "kind/cleanup",
        "sig/api-machinery",
        "triage/accepted"
      ]
    },
    {
      "id": "kubernetes/kubernetes#141819",
      "repository": "kubernetes/kubernetes",
      "project": "Kubernetes",
      "issueNumber": 141819,
      "title": "E2E testing: check for goroutine leaks",
      "sourceUrl": "https://github.com/kubernetes/kubernetes/issues/141819",
      "sourceState": "open",
      "sourceStateReason": null,
      "issueType": "feature-request",
      "reviewArea": "general",
      "reviewState": "needs-review",
      "suggestedReviewLane": "Needs Review",
      "rationale": "The public metadata is incomplete or sends conflicting signals, so a person must choose the review lane.",
      "evidence": [
        {
          "field": "issueType",
          "source": "repository label",
          "value": "kind/feature"
        },
        {
          "field": "reviewState",
          "source": "repository label",
          "value": "needs-triage"
        }
      ],
      "nextStepChecklist": [
        "Confirm the issue type and affected product area.",
        "Collect the missing reproduction, version, and impact details.",
        "Assign a review lane only after the evidence is clear."
      ],
      "labels": [
        "help wanted",
        "kind/feature",
        "needs-triage",
        "sig/testing"
      ]
    },
    {
      "id": "kubernetes/kubernetes#135058",
      "repository": "kubernetes/kubernetes",
      "project": "Kubernetes",
      "issueNumber": 135058,
      "title": "DRA: measure and track performance of \"experimental\" allocator",
      "sourceUrl": "https://github.com/kubernetes/kubernetes/issues/135058",
      "sourceState": "open",
      "sourceStateReason": "reopened",
      "issueType": "feature-request",
      "reviewArea": "general",
      "reviewState": "needs-review",
      "suggestedReviewLane": "Needs Review",
      "rationale": "The public metadata is incomplete or sends conflicting signals, so a person must choose the review lane.",
      "evidence": [
        {
          "field": "issueType",
          "source": "repository label",
          "value": "kind/feature"
        },
        {
          "field": "reviewState",
          "source": "repository label",
          "value": "needs-triage"
        }
      ],
      "nextStepChecklist": [
        "Confirm the issue type and affected product area.",
        "Collect the missing reproduction, version, and impact details.",
        "Assign a review lane only after the evidence is clear."
      ],
      "labels": [
        "help wanted",
        "kind/feature",
        "needs-triage",
        "wg/device-management"
      ]
    },
    {
      "id": "kubernetes/kubernetes#141516",
      "repository": "kubernetes/kubernetes",
      "project": "Kubernetes",
      "issueNumber": 141516,
      "title": "[Umbrella issue] metrics API post-GA action item",
      "sourceUrl": "https://github.com/kubernetes/kubernetes/issues/141516",
      "sourceState": "open",
      "sourceStateReason": null,
      "issueType": "needs-review",
      "reviewArea": "observability",
      "reviewState": "needs-review",
      "suggestedReviewLane": "Needs Review",
      "rationale": "The public metadata is incomplete or sends conflicting signals, so a person must choose the review lane.",
      "evidence": [
        {
          "field": "reviewArea",
          "source": "specific title phrase",
          "value": "[Umbrella issue] metrics API post-GA action item"
        }
      ],
      "nextStepChecklist": [
        "Confirm the issue type and affected product area.",
        "Collect the missing reproduction, version, and impact details.",
        "Assign a review lane only after the evidence is clear."
      ],
      "labels": [
        "sig/instrumentation",
        "triage/accepted"
      ]
    },
    {
      "id": "kubernetes/kubernetes#141652",
      "repository": "kubernetes/kubernetes",
      "project": "Kubernetes",
      "issueNumber": 141652,
      "title": "Introduce model-based correctness and linearizability testing for k8s storage",
      "sourceUrl": "https://github.com/kubernetes/kubernetes/issues/141652",
      "sourceState": "open",
      "sourceStateReason": null,
      "issueType": "feature-request",
      "reviewArea": "infrastructure",
      "reviewState": "suggested",
      "suggestedReviewLane": "Infrastructure review",
      "rationale": "Repository labels or a specific title phrase support a Feature Request issue in the Infrastructure review area.",
      "evidence": [
        {
          "field": "issueType",
          "source": "repository label",
          "value": "kind/feature"
        },
        {
          "field": "reviewArea",
          "source": "repository label",
          "value": "sig/api-machinery"
        }
      ],
      "nextStepChecklist": [
        "Record the component, version, environment, and visible impact.",
        "Confirm whether the source includes reproduction or validation evidence.",
        "Ask the responsible infrastructure owner to review the issue."
      ],
      "labels": [
        "kind/feature",
        "sig/api-machinery",
        "triage/accepted"
      ]
    },
    {
      "id": "kubernetes/kubernetes#141806",
      "repository": "kubernetes/kubernetes",
      "project": "Kubernetes",
      "issueNumber": 141806,
      "title": "ImageGarbageCollect when ImageMaximumGCAge is set should not GC unused images prematurely consistently timing out",
      "sourceUrl": "https://github.com/kubernetes/kubernetes/issues/141806",
      "sourceState": "open",
      "sourceStateReason": null,
      "issueType": "failing-test",
      "reviewArea": "infrastructure",
      "reviewState": "suggested",
      "suggestedReviewLane": "Infrastructure review",
      "rationale": "Repository labels or a specific title phrase support a Failing Test issue in the Infrastructure review area.",
      "evidence": [
        {
          "field": "issueType",
          "source": "repository label",
          "value": "kind/failing-test"
        },
        {
          "field": "reviewArea",
          "source": "repository label",
          "value": "sig/node"
        }
      ],
      "nextStepChecklist": [
        "Record the component, version, environment, and visible impact.",
        "Confirm whether the source includes reproduction or validation evidence.",
        "Ask the responsible infrastructure owner to review the issue."
      ],
      "labels": [
        "kind/failing-test",
        "priority/important-longterm",
        "sig/node",
        "triage/accepted"
      ]
    },
    {
      "id": "kubernetes/kubernetes#141624",
      "repository": "kubernetes/kubernetes",
      "project": "Kubernetes",
      "issueNumber": 141624,
      "title": "e2e_node image configs use a negated character class instead of excluding the -cgroupsv1 suffix",
      "sourceUrl": "https://github.com/kubernetes/kubernetes/issues/141624",
      "sourceState": "open",
      "sourceStateReason": null,
      "issueType": "bug",
      "reviewArea": "infrastructure",
      "reviewState": "suggested",
      "suggestedReviewLane": "Infrastructure review",
      "rationale": "Repository labels or a specific title phrase support a Bug issue in the Infrastructure review area.",
      "evidence": [
        {
          "field": "issueType",
          "source": "repository label",
          "value": "kind/bug"
        },
        {
          "field": "reviewArea",
          "source": "repository label",
          "value": "sig/node"
        }
      ],
      "nextStepChecklist": [
        "Record the component, version, environment, and visible impact.",
        "Confirm whether the source includes reproduction or validation evidence.",
        "Ask the responsible infrastructure owner to review the issue."
      ],
      "labels": [
        "kind/bug",
        "priority/backlog",
        "sig/node",
        "triage/accepted"
      ]
    },
    {
      "id": "kubernetes/kubernetes#141635",
      "repository": "kubernetes/kubernetes",
      "project": "Kubernetes",
      "issueNumber": 141635,
      "title": "e2e_node/remote/gce: readiness polling drops terminal errors and shadows the ready instance",
      "sourceUrl": "https://github.com/kubernetes/kubernetes/issues/141635",
      "sourceState": "open",
      "sourceStateReason": null,
      "issueType": "bug",
      "reviewArea": "infrastructure",
      "reviewState": "needs-review",
      "suggestedReviewLane": "Needs Review",
      "rationale": "The public metadata is incomplete or sends conflicting signals, so a person must choose the review lane.",
      "evidence": [
        {
          "field": "issueType",
          "source": "repository label",
          "value": "kind/bug"
        },
        {
          "field": "reviewArea",
          "source": "repository label",
          "value": "sig/node"
        },
        {
          "field": "reviewState",
          "source": "repository label",
          "value": "triage/needs-information"
        }
      ],
      "nextStepChecklist": [
        "Confirm the issue type and affected product area.",
        "Collect the missing reproduction, version, and impact details.",
        "Assign a review lane only after the evidence is clear."
      ],
      "labels": [
        "kind/bug",
        "sig/node",
        "triage/needs-information"
      ]
    },
    {
      "id": "kubernetes/kubernetes#141514",
      "repository": "kubernetes/kubernetes",
      "project": "Kubernetes",
      "issueNumber": 141514,
      "title": "[Failing Tes] ci-kubernetes-e2e-capz-master-windows.Overall on main and 1.37",
      "sourceUrl": "https://github.com/kubernetes/kubernetes/issues/141514",
      "sourceState": "closed",
      "sourceStateReason": "completed",
      "issueType": "failing-test",
      "reviewArea": "general",
      "reviewState": "closed-source",
      "suggestedReviewLane": "Closed source record review",
      "rationale": "The source issue is closed, so the dashboard preserves that state and does not infer why it closed.",
      "evidence": [
        {
          "field": "issueType",
          "source": "repository label",
          "value": "kind/failing-test"
        },
        {
          "field": "reviewState",
          "source": "repository label",
          "value": "needs-triage"
        },
        {
          "field": "reviewState",
          "source": "source state",
          "value": "completed"
        }
      ],
      "nextStepChecklist": [
        "Confirm the issue type and affected product area.",
        "Collect the missing reproduction, version, and impact details.",
        "Assign a review lane only after the evidence is clear."
      ],
      "labels": [
        "kind/failing-test",
        "needs-triage",
        "sig/windows"
      ]
    },
    {
      "id": "kubernetes/kubernetes#137096",
      "repository": "kubernetes/kubernetes",
      "project": "Kubernetes",
      "issueNumber": 137096,
      "title": "[Failing Test] [SIG Node] pull-kubernetes-node-e2e-containerd-serial-ec2-canary not running e2e test suite",
      "sourceUrl": "https://github.com/kubernetes/kubernetes/issues/137096",
      "sourceState": "closed",
      "sourceStateReason": "completed",
      "issueType": "failing-test",
      "reviewArea": "infrastructure",
      "reviewState": "closed-source",
      "suggestedReviewLane": "Closed source record review",
      "rationale": "The source issue is closed, so the dashboard preserves that state and does not infer why it closed.",
      "evidence": [
        {
          "field": "issueType",
          "source": "repository label",
          "value": "kind/failing-test"
        },
        {
          "field": "reviewArea",
          "source": "repository label",
          "value": "sig/node"
        },
        {
          "field": "reviewState",
          "source": "source state",
          "value": "completed"
        }
      ],
      "nextStepChecklist": [
        "Confirm the issue type and affected product area.",
        "Collect the missing reproduction, version, and impact details.",
        "Assign a review lane only after the evidence is clear."
      ],
      "labels": [
        "kind/failing-test",
        "priority/backlog",
        "sig/node",
        "triage/accepted"
      ]
    },
    {
      "id": "kubernetes/kubernetes#141404",
      "repository": "kubernetes/kubernetes",
      "project": "Kubernetes",
      "issueNumber": 141404,
      "title": "DATA RACE: kubelet updateEmptyDirVolumeLimitsFromAllocation",
      "sourceUrl": "https://github.com/kubernetes/kubernetes/issues/141404",
      "sourceState": "open",
      "sourceStateReason": null,
      "issueType": "bug",
      "reviewArea": "infrastructure",
      "reviewState": "suggested",
      "suggestedReviewLane": "Infrastructure review",
      "rationale": "Repository labels or a specific title phrase support a Bug issue in the Infrastructure review area.",
      "evidence": [
        {
          "field": "issueType",
          "source": "repository label",
          "value": "kind/bug"
        },
        {
          "field": "reviewArea",
          "source": "repository label",
          "value": "sig/node"
        },
        {
          "field": "reviewArea",
          "source": "repository label",
          "value": "sig/storage"
        }
      ],
      "nextStepChecklist": [
        "Record the component, version, environment, and visible impact.",
        "Confirm whether the source includes reproduction or validation evidence.",
        "Ask the responsible infrastructure owner to review the issue."
      ],
      "labels": [
        "kind/bug",
        "priority/important-soon",
        "sig/node",
        "sig/storage",
        "triage/accepted"
      ]
    },
    {
      "id": "kubernetes/kubernetes#141433",
      "repository": "kubernetes/kubernetes",
      "project": "Kubernetes",
      "issueNumber": 141433,
      "title": "A pod using a Dynamic Resource Allocation claim got permanently stuck in CreateContainerError after its node rebooted, with no automatic recovery.",
      "sourceUrl": "https://github.com/kubernetes/kubernetes/issues/141433",
      "sourceState": "closed",
      "sourceStateReason": "completed",
      "issueType": "bug",
      "reviewArea": "infrastructure",
      "reviewState": "closed-source",
      "suggestedReviewLane": "Closed source record review",
      "rationale": "The source issue is closed, so the dashboard preserves that state and does not infer why it closed.",
      "evidence": [
        {
          "field": "issueType",
          "source": "repository label",
          "value": "kind/bug"
        },
        {
          "field": "reviewArea",
          "source": "repository label",
          "value": "sig/node"
        },
        {
          "field": "reviewState",
          "source": "repository label",
          "value": "needs-triage"
        },
        {
          "field": "reviewState",
          "source": "source state",
          "value": "completed"
        }
      ],
      "nextStepChecklist": [
        "Confirm the issue type and affected product area.",
        "Collect the missing reproduction, version, and impact details.",
        "Assign a review lane only after the evidence is clear."
      ],
      "labels": [
        "kind/bug",
        "needs-triage",
        "sig/node",
        "wg/device-management"
      ]
    },
    {
      "id": "kubernetes/kubernetes#141439",
      "repository": "kubernetes/kubernetes",
      "project": "Kubernetes",
      "issueNumber": 141439,
      "title": "kubelet: `dropCacheFor` does not invalidate name-keyed trust bundle cache entries when the ClusterTrustBundle has a `spec.signerName`",
      "sourceUrl": "https://github.com/kubernetes/kubernetes/issues/141439",
      "sourceState": "open",
      "sourceStateReason": null,
      "issueType": "bug",
      "reviewArea": "needs-review",
      "reviewState": "needs-review",
      "suggestedReviewLane": "Needs Review",
      "rationale": "The public metadata is incomplete or sends conflicting signals, so a person must choose the review lane.",
      "evidence": [
        {
          "field": "issueType",
          "source": "repository label",
          "value": "kind/bug"
        },
        {
          "field": "reviewArea",
          "source": "conflicting repository labels",
          "value": "area/kubelet"
        },
        {
          "field": "reviewArea",
          "source": "conflicting repository labels",
          "value": "sig/auth"
        },
        {
          "field": "reviewState",
          "source": "repository label",
          "value": "needs-triage"
        }
      ],
      "nextStepChecklist": [
        "Confirm the issue type and affected product area.",
        "Collect the missing reproduction, version, and impact details.",
        "Assign a review lane only after the evidence is clear."
      ],
      "labels": [
        "area/kubelet",
        "kind/bug",
        "needs-triage",
        "sig/auth"
      ]
    },
    {
      "id": "kubernetes/kubernetes#141606",
      "repository": "kubernetes/kubernetes",
      "project": "Kubernetes",
      "issueNumber": 141606,
      "title": "[InPlacePodLevelResourcesVerticalScaling] In-place pod resize events do not capture pod-level resources",
      "sourceUrl": "https://github.com/kubernetes/kubernetes/issues/141606",
      "sourceState": "open",
      "sourceStateReason": null,
      "issueType": "bug",
      "reviewArea": "infrastructure",
      "reviewState": "needs-review",
      "suggestedReviewLane": "Needs Review",
      "rationale": "The public metadata is incomplete or sends conflicting signals, so a person must choose the review lane.",
      "evidence": [
        {
          "field": "issueType",
          "source": "repository label",
          "value": "kind/bug"
        },
        {
          "field": "reviewArea",
          "source": "repository label",
          "value": "sig/node"
        },
        {
          "field": "reviewState",
          "source": "repository label",
          "value": "needs-triage"
        }
      ],
      "nextStepChecklist": [
        "Confirm the issue type and affected product area.",
        "Collect the missing reproduction, version, and impact details.",
        "Assign a review lane only after the evidence is clear."
      ],
      "labels": [
        "kind/bug",
        "needs-triage",
        "priority/important-longterm",
        "sig/node"
      ]
    },
    {
      "id": "kubernetes/kubernetes#141473",
      "repository": "kubernetes/kubernetes",
      "project": "Kubernetes",
      "issueNumber": 141473,
      "title": "Kubelet restart preserves stale readiness for a replaced container when the API server status is outdated",
      "sourceUrl": "https://github.com/kubernetes/kubernetes/issues/141473",
      "sourceState": "open",
      "sourceStateReason": null,
      "issueType": "bug",
      "reviewArea": "infrastructure",
      "reviewState": "suggested",
      "suggestedReviewLane": "Infrastructure review",
      "rationale": "Repository labels or a specific title phrase support a Bug issue in the Infrastructure review area.",
      "evidence": [
        {
          "field": "issueType",
          "source": "repository label",
          "value": "kind/bug"
        },
        {
          "field": "reviewArea",
          "source": "repository label",
          "value": "sig/node"
        }
      ],
      "nextStepChecklist": [
        "Record the component, version, environment, and visible impact.",
        "Confirm whether the source includes reproduction or validation evidence.",
        "Ask the responsible infrastructure owner to review the issue."
      ],
      "labels": [
        "kind/bug",
        "priority/backlog",
        "sig/node",
        "triage/accepted"
      ]
    },
    {
      "id": "kubernetes/kubernetes#141491",
      "repository": "kubernetes/kubernetes",
      "project": "Kubernetes",
      "issueNumber": 141491,
      "title": "After node scale-out, the anti-affinity pods between two pods are scheduled to the newly added node.",
      "sourceUrl": "https://github.com/kubernetes/kubernetes/issues/141491",
      "sourceState": "open",
      "sourceStateReason": null,
      "issueType": "bug",
      "reviewArea": "infrastructure",
      "reviewState": "needs-review",
      "suggestedReviewLane": "Needs Review",
      "rationale": "The public metadata is incomplete or sends conflicting signals, so a person must choose the review lane.",
      "evidence": [
        {
          "field": "issueType",
          "source": "repository label",
          "value": "kind/bug"
        },
        {
          "field": "reviewArea",
          "source": "repository label",
          "value": "sig/node"
        },
        {
          "field": "reviewArea",
          "source": "repository label",
          "value": "sig/scheduling"
        },
        {
          "field": "reviewState",
          "source": "repository label",
          "value": "triage/needs-information"
        }
      ],
      "nextStepChecklist": [
        "Confirm the issue type and affected product area.",
        "Collect the missing reproduction, version, and impact details.",
        "Assign a review lane only after the evidence is clear."
      ],
      "labels": [
        "kind/bug",
        "sig/node",
        "sig/scheduling",
        "triage/needs-information"
      ]
    },
    {
      "id": "n8n-io/n8n#33588",
      "repository": "n8n-io/n8n",
      "project": "n8n",
      "issueNumber": 33588,
      "title": "If/Filter/Switch nodes: \"Matches Regex\" silently never matches patterns containing uppercase characters when \"Ignore Case\" is enabled",
      "sourceUrl": "https://github.com/n8n-io/n8n/issues/33588",
      "sourceState": "open",
      "sourceStateReason": null,
      "issueType": "needs-review",
      "reviewArea": "integrations",
      "reviewState": "needs-review",
      "suggestedReviewLane": "Needs Review",
      "rationale": "The public metadata is incomplete or sends conflicting signals, so a person must choose the review lane.",
      "evidence": [
        {
          "field": "reviewArea",
          "source": "repository label",
          "value": "team:nodes"
        }
      ],
      "nextStepChecklist": [
        "Confirm the issue type and affected product area.",
        "Collect the missing reproduction, version, and impact details.",
        "Assign a review lane only after the evidence is clear."
      ],
      "labels": [
        "status:in-linear",
        "status:team-assigned",
        "team:cats",
        "team:nodes"
      ]
    },
    {
      "id": "n8n-io/n8n#37780",
      "repository": "n8n-io/n8n",
      "project": "n8n",
      "issueNumber": 37780,
      "title": "Msitral issue with the msitral node in model for ai agents",
      "sourceUrl": "https://github.com/n8n-io/n8n/issues/37780",
      "sourceState": "open",
      "sourceStateReason": null,
      "issueType": "needs-review",
      "reviewArea": "integrations",
      "reviewState": "needs-review",
      "suggestedReviewLane": "Needs Review",
      "rationale": "The public metadata is incomplete or sends conflicting signals, so a person must choose the review lane.",
      "evidence": [
        {
          "field": "reviewArea",
          "source": "repository label",
          "value": "team:ai"
        }
      ],
      "nextStepChecklist": [
        "Confirm the issue type and affected product area.",
        "Collect the missing reproduction, version, and impact details.",
        "Assign a review lane only after the evidence is clear."
      ],
      "labels": [
        "status:in-linear",
        "status:team-assigned",
        "team:ai"
      ]
    },
    {
      "id": "n8n-io/n8n#37779",
      "repository": "n8n-io/n8n",
      "project": "n8n",
      "issueNumber": 37779,
      "title": "AI Agent V3: retryOnFail silently wipes tool-call context on Max Iterations error, retry budget resets every cycle so it can loop indefinitely",
      "sourceUrl": "https://github.com/n8n-io/n8n/issues/37779",
      "sourceState": "open",
      "sourceStateReason": null,
      "issueType": "needs-review",
      "reviewArea": "general",
      "reviewState": "needs-review",
      "suggestedReviewLane": "Needs Review",
      "rationale": "The public metadata is incomplete or sends conflicting signals, so a person must choose the review lane.",
      "evidence": [],
      "nextStepChecklist": [
        "Confirm the issue type and affected product area.",
        "Collect the missing reproduction, version, and impact details.",
        "Assign a review lane only after the evidence is clear."
      ],
      "labels": [
        "status:in-linear",
        "status:team-assigned",
        "team:cats"
      ]
    },
    {
      "id": "n8n-io/n8n#37377",
      "repository": "n8n-io/n8n",
      "project": "n8n",
      "issueNumber": 37377,
      "title": "2.36.x MCP execute_workflow exposes pre-2.36 schema while runtime requires triggerNodeName",
      "sourceUrl": "https://github.com/n8n-io/n8n/issues/37377",
      "sourceState": "open",
      "sourceStateReason": null,
      "issueType": "needs-review",
      "reviewArea": "general",
      "reviewState": "needs-review",
      "suggestedReviewLane": "Needs Review",
      "rationale": "The public metadata is incomplete or sends conflicting signals, so a person must choose the review lane.",
      "evidence": [],
      "nextStepChecklist": [
        "Confirm the issue type and affected product area.",
        "Collect the missing reproduction, version, and impact details.",
        "Assign a review lane only after the evidence is clear."
      ],
      "labels": [
        "status:in-linear",
        "status:team-assigned",
        "team:adore"
      ]
    },
    {
      "id": "n8n-io/n8n#37690",
      "repository": "n8n-io/n8n",
      "project": "n8n",
      "issueNumber": 37690,
      "title": "Qdrant Vector Store returns fetch failed on n8n Cloud 2.37.7",
      "sourceUrl": "https://github.com/n8n-io/n8n/issues/37690",
      "sourceState": "open",
      "sourceStateReason": null,
      "issueType": "needs-review",
      "reviewArea": "integrations",
      "reviewState": "needs-review",
      "suggestedReviewLane": "Needs Review",
      "rationale": "The public metadata is incomplete or sends conflicting signals, so a person must choose the review lane.",
      "evidence": [
        {
          "field": "reviewArea",
          "source": "repository label",
          "value": "team:ai"
        }
      ],
      "nextStepChecklist": [
        "Confirm the issue type and affected product area.",
        "Collect the missing reproduction, version, and impact details.",
        "Assign a review lane only after the evidence is clear."
      ],
      "labels": [
        "status:in-linear",
        "status:team-assigned",
        "team:ai"
      ]
    },
    {
      "id": "n8n-io/n8n#37777",
      "repository": "n8n-io/n8n",
      "project": "n8n",
      "issueNumber": 37777,
      "title": "Mistral",
      "sourceUrl": "https://github.com/n8n-io/n8n/issues/37777",
      "sourceState": "closed",
      "sourceStateReason": "completed",
      "issueType": "needs-review",
      "reviewArea": "general",
      "reviewState": "closed-source",
      "suggestedReviewLane": "Closed source record review",
      "rationale": "The source issue is closed, so the dashboard preserves that state and does not infer why it closed.",
      "evidence": [
        {
          "field": "reviewState",
          "source": "repository label",
          "value": "closed:incomplete-template"
        },
        {
          "field": "reviewState",
          "source": "source state",
          "value": "completed"
        }
      ],
      "nextStepChecklist": [
        "Confirm the issue type and affected product area.",
        "Collect the missing reproduction, version, and impact details.",
        "Assign a review lane only after the evidence is clear."
      ],
      "labels": [
        "closed:incomplete-template"
      ]
    },
    {
      "id": "n8n-io/n8n#37773",
      "repository": "n8n-io/n8n",
      "project": "n8n",
      "issueNumber": 37773,
      "title": "Set-Cookie response headers are silently dropped from webhook responses (started 2026-09-03)",
      "sourceUrl": "https://github.com/n8n-io/n8n/issues/37773",
      "sourceState": "open",
      "sourceStateReason": null,
      "issueType": "needs-review",
      "reviewArea": "integrations",
      "reviewState": "needs-review",
      "suggestedReviewLane": "Needs Review",
      "rationale": "The public metadata is incomplete or sends conflicting signals, so a person must choose the review lane.",
      "evidence": [
        {
          "field": "reviewArea",
          "source": "specific title phrase",
          "value": "Set-Cookie response headers are silently dropped from webhook responses (started 2026-09-03)"
        }
      ],
      "nextStepChecklist": [
        "Confirm the issue type and affected product area.",
        "Collect the missing reproduction, version, and impact details.",
        "Assign a review lane only after the evidence is clear."
      ],
      "labels": [
        "status:in-linear",
        "status:team-assigned",
        "team:cats"
      ]
    },
    {
      "id": "n8n-io/n8n#37770",
      "repository": "n8n-io/n8n",
      "project": "n8n",
      "issueNumber": 37770,
      "title": "Published workflow updated trigger only triggering if a trigger node has been edited",
      "sourceUrl": "https://github.com/n8n-io/n8n/issues/37770",
      "sourceState": "open",
      "sourceStateReason": null,
      "issueType": "needs-review",
      "reviewArea": "general",
      "reviewState": "needs-review",
      "suggestedReviewLane": "Needs Review",
      "rationale": "The public metadata is incomplete or sends conflicting signals, so a person must choose the review lane.",
      "evidence": [],
      "nextStepChecklist": [
        "Confirm the issue type and affected product area.",
        "Collect the missing reproduction, version, and impact details.",
        "Assign a review lane only after the evidence is clear."
      ],
      "labels": [
        "status:in-linear",
        "status:team-assigned",
        "team:adore"
      ]
    },
    {
      "id": "n8n-io/n8n#36868",
      "repository": "n8n-io/n8n",
      "project": "n8n",
      "issueNumber": 36868,
      "title": "Gmail trigger doesnt poll every minute on published as configured in the node.",
      "sourceUrl": "https://github.com/n8n-io/n8n/issues/36868",
      "sourceState": "open",
      "sourceStateReason": null,
      "issueType": "needs-review",
      "reviewArea": "integrations",
      "reviewState": "needs-review",
      "suggestedReviewLane": "Needs Review",
      "rationale": "The public metadata is incomplete or sends conflicting signals, so a person must choose the review lane.",
      "evidence": [
        {
          "field": "reviewArea",
          "source": "repository label",
          "value": "team:nodes"
        },
        {
          "field": "reviewState",
          "source": "repository label",
          "value": "Needs Feedback"
        }
      ],
      "nextStepChecklist": [
        "Confirm the issue type and affected product area.",
        "Collect the missing reproduction, version, and impact details.",
        "Assign a review lane only after the evidence is clear."
      ],
      "labels": [
        "Needs Feedback",
        "status:in-linear",
        "status:team-assigned",
        "team:nodes"
      ]
    },
    {
      "id": "n8n-io/n8n#35393",
      "repository": "n8n-io/n8n",
      "project": "n8n",
      "issueNumber": 35393,
      "title": "Google Vertex Chat Model error when using gemini-3.5-flash with configured tool",
      "sourceUrl": "https://github.com/n8n-io/n8n/issues/35393",
      "sourceState": "open",
      "sourceStateReason": null,
      "issueType": "needs-review",
      "reviewArea": "integrations",
      "reviewState": "needs-review",
      "suggestedReviewLane": "Needs Review",
      "rationale": "The public metadata is incomplete or sends conflicting signals, so a person must choose the review lane.",
      "evidence": [
        {
          "field": "reviewArea",
          "source": "repository label",
          "value": "team:ai"
        }
      ],
      "nextStepChecklist": [
        "Confirm the issue type and affected product area.",
        "Collect the missing reproduction, version, and impact details.",
        "Assign a review lane only after the evidence is clear."
      ],
      "labels": [
        "status:in-linear",
        "status:team-assigned",
        "team:ai"
      ]
    },
    {
      "id": "n8n-io/n8n#37276",
      "repository": "n8n-io/n8n",
      "project": "n8n",
      "issueNumber": 37276,
      "title": "HTTP Request JSON Body editor does not persist changes to the workflow",
      "sourceUrl": "https://github.com/n8n-io/n8n/issues/37276",
      "sourceState": "open",
      "sourceStateReason": null,
      "issueType": "needs-review",
      "reviewArea": "general",
      "reviewState": "needs-review",
      "suggestedReviewLane": "Needs Review",
      "rationale": "The public metadata is incomplete or sends conflicting signals, so a person must choose the review lane.",
      "evidence": [],
      "nextStepChecklist": [
        "Confirm the issue type and affected product area.",
        "Collect the missing reproduction, version, and impact details.",
        "Assign a review lane only after the evidence is clear."
      ],
      "labels": [
        "status:in-linear",
        "status:team-assigned",
        "team:cats"
      ]
    },
    {
      "id": "n8n-io/n8n#37584",
      "repository": "n8n-io/n8n",
      "project": "n8n",
      "issueNumber": 37584,
      "title": "invalid JSON error using Datetime expression in Set node",
      "sourceUrl": "https://github.com/n8n-io/n8n/issues/37584",
      "sourceState": "open",
      "sourceStateReason": null,
      "issueType": "needs-review",
      "reviewArea": "general",
      "reviewState": "needs-review",
      "suggestedReviewLane": "Needs Review",
      "rationale": "The public metadata is incomplete or sends conflicting signals, so a person must choose the review lane.",
      "evidence": [],
      "nextStepChecklist": [
        "Confirm the issue type and affected product area.",
        "Collect the missing reproduction, version, and impact details.",
        "Assign a review lane only after the evidence is clear."
      ],
      "labels": [
        "status:in-linear",
        "status:team-assigned",
        "team:cats"
      ]
    },
    {
      "id": "n8n-io/n8n#36859",
      "repository": "n8n-io/n8n",
      "project": "n8n",
      "issueNumber": 36859,
      "title": "Schedule Trigger workflows stay active but produce zero trigger executions until durable scheduler migration",
      "sourceUrl": "https://github.com/n8n-io/n8n/issues/36859",
      "sourceState": "open",
      "sourceStateReason": null,
      "issueType": "needs-review",
      "reviewArea": "general",
      "reviewState": "needs-review",
      "suggestedReviewLane": "Needs Review",
      "rationale": "The public metadata is incomplete or sends conflicting signals, so a person must choose the review lane.",
      "evidence": [
        {
          "field": "reviewArea",
          "source": "conflicting title phrases",
          "value": "Schedule Trigger workflows stay active but produce zero trigger executions until durable scheduler migration"
        }
      ],
      "nextStepChecklist": [
        "Confirm the issue type and affected product area.",
        "Collect the missing reproduction, version, and impact details.",
        "Assign a review lane only after the evidence is clear."
      ],
      "labels": [
        "status:in-linear",
        "status:team-assigned",
        "team:cats"
      ]
    },
    {
      "id": "n8n-io/n8n#37354",
      "repository": "n8n-io/n8n",
      "project": "n8n",
      "issueNumber": 37354,
      "title": "AI Agent re-connects and re-fetches tools/list from every attached MCP Client Tool before every model call (~7s per MCP sub-node per iteration) — cache per execution",
      "sourceUrl": "https://github.com/n8n-io/n8n/issues/37354",
      "sourceState": "open",
      "sourceStateReason": null,
      "issueType": "needs-review",
      "reviewArea": "integrations",
      "reviewState": "needs-review",
      "suggestedReviewLane": "Needs Review",
      "rationale": "The public metadata is incomplete or sends conflicting signals, so a person must choose the review lane.",
      "evidence": [
        {
          "field": "reviewArea",
          "source": "repository label",
          "value": "team:nodes"
        }
      ],
      "nextStepChecklist": [
        "Confirm the issue type and affected product area.",
        "Collect the missing reproduction, version, and impact details.",
        "Assign a review lane only after the evidence is clear."
      ],
      "labels": [
        "status:in-linear",
        "status:team-assigned",
        "team:nodes"
      ]
    },
    {
      "id": "n8n-io/n8n#36847",
      "repository": "n8n-io/n8n",
      "project": "n8n",
      "issueNumber": 36847,
      "title": "Google Chat button clicks never reach n8n Cloud webhook (zero executions) — identical curl requests succeed",
      "sourceUrl": "https://github.com/n8n-io/n8n/issues/36847",
      "sourceState": "open",
      "sourceStateReason": null,
      "issueType": "needs-review",
      "reviewArea": "integrations",
      "reviewState": "needs-review",
      "suggestedReviewLane": "Needs Review",
      "rationale": "The public metadata is incomplete or sends conflicting signals, so a person must choose the review lane.",
      "evidence": [
        {
          "field": "reviewArea",
          "source": "specific title phrase",
          "value": "Google Chat button clicks never reach n8n Cloud webhook (zero executions) — identical curl requests succeed"
        }
      ],
      "nextStepChecklist": [
        "Confirm the issue type and affected product area.",
        "Collect the missing reproduction, version, and impact details.",
        "Assign a review lane only after the evidence is clear."
      ],
      "labels": [
        "status:in-linear",
        "status:team-assigned",
        "team:cats"
      ]
    },
    {
      "id": "n8n-io/n8n#37360",
      "repository": "n8n-io/n8n",
      "project": "n8n",
      "issueNumber": 37360,
      "title": "Personal Agent gets stuck indefinitely without error or workflow execution",
      "sourceUrl": "https://github.com/n8n-io/n8n/issues/37360",
      "sourceState": "open",
      "sourceStateReason": null,
      "issueType": "needs-review",
      "reviewArea": "general",
      "reviewState": "needs-review",
      "suggestedReviewLane": "Needs Review",
      "rationale": "The public metadata is incomplete or sends conflicting signals, so a person must choose the review lane.",
      "evidence": [],
      "nextStepChecklist": [
        "Confirm the issue type and affected product area.",
        "Collect the missing reproduction, version, and impact details.",
        "Assign a review lane only after the evidence is clear."
      ],
      "labels": [
        "status:in-linear",
        "status:team-assigned",
        "team:chat"
      ]
    },
    {
      "id": "n8n-io/n8n#37341",
      "repository": "n8n-io/n8n",
      "project": "n8n",
      "issueNumber": 37341,
      "title": "Workflow settings update fails with \"column distinctAlias.SharedWorkflow_projectId does not exist\" on workflows with sharing history",
      "sourceUrl": "https://github.com/n8n-io/n8n/issues/37341",
      "sourceState": "open",
      "sourceStateReason": null,
      "issueType": "needs-review",
      "reviewArea": "general",
      "reviewState": "needs-review",
      "suggestedReviewLane": "Needs Review",
      "rationale": "The public metadata is incomplete or sends conflicting signals, so a person must choose the review lane.",
      "evidence": [],
      "nextStepChecklist": [
        "Confirm the issue type and affected product area.",
        "Collect the missing reproduction, version, and impact details.",
        "Assign a review lane only after the evidence is clear."
      ],
      "labels": [
        "status:in-linear",
        "status:team-assigned",
        "team:lifecycle"
      ]
    },
    {
      "id": "n8n-io/n8n#36883",
      "repository": "n8n-io/n8n",
      "project": "n8n",
      "issueNumber": 36883,
      "title": "AI Agent silently drops model responses containing (parallel) tool calls to node-based tools",
      "sourceUrl": "https://github.com/n8n-io/n8n/issues/36883",
      "sourceState": "open",
      "sourceStateReason": null,
      "issueType": "needs-review",
      "reviewArea": "integrations",
      "reviewState": "needs-review",
      "suggestedReviewLane": "Needs Review",
      "rationale": "The public metadata is incomplete or sends conflicting signals, so a person must choose the review lane.",
      "evidence": [
        {
          "field": "reviewArea",
          "source": "repository label",
          "value": "team:ai"
        }
      ],
      "nextStepChecklist": [
        "Confirm the issue type and affected product area.",
        "Collect the missing reproduction, version, and impact details.",
        "Assign a review lane only after the evidence is clear."
      ],
      "labels": [
        "status:in-linear",
        "status:team-assigned",
        "team:ai"
      ]
    },
    {
      "id": "n8n-io/n8n#37281",
      "repository": "n8n-io/n8n",
      "project": "n8n",
      "issueNumber": 37281,
      "title": "Email Trigger (IMAP) leaves processed email attachments in binary_data",
      "sourceUrl": "https://github.com/n8n-io/n8n/issues/37281",
      "sourceState": "open",
      "sourceStateReason": null,
      "issueType": "needs-review",
      "reviewArea": "general",
      "reviewState": "needs-review",
      "suggestedReviewLane": "Needs Review",
      "rationale": "The public metadata is incomplete or sends conflicting signals, so a person must choose the review lane.",
      "evidence": [],
      "nextStepChecklist": [
        "Confirm the issue type and affected product area.",
        "Collect the missing reproduction, version, and impact details.",
        "Assign a review lane only after the evidence is clear."
      ],
      "labels": [
        "status:in-linear",
        "status:team-assigned",
        "team:cats"
      ]
    },
    {
      "id": "n8n-io/n8n#37282",
      "repository": "n8n-io/n8n",
      "project": "n8n",
      "issueNumber": 37282,
      "title": "export:entities fails when binary_data contains large files",
      "sourceUrl": "https://github.com/n8n-io/n8n/issues/37282",
      "sourceState": "open",
      "sourceStateReason": null,
      "issueType": "needs-review",
      "reviewArea": "general",
      "reviewState": "needs-review",
      "suggestedReviewLane": "Needs Review",
      "rationale": "The public metadata is incomplete or sends conflicting signals, so a person must choose the review lane.",
      "evidence": [],
      "nextStepChecklist": [
        "Confirm the issue type and affected product area.",
        "Collect the missing reproduction, version, and impact details.",
        "Assign a review lane only after the evidence is clear."
      ],
      "labels": [
        "status:in-linear",
        "status:team-assigned",
        "team:cats"
      ]
    },
    {
      "id": "n8n-io/n8n#36932",
      "repository": "n8n-io/n8n",
      "project": "n8n",
      "issueNumber": 36932,
      "title": "GPT 5 - Unsupported parameter",
      "sourceUrl": "https://github.com/n8n-io/n8n/issues/36932",
      "sourceState": "open",
      "sourceStateReason": null,
      "issueType": "needs-review",
      "reviewArea": "integrations",
      "reviewState": "needs-review",
      "suggestedReviewLane": "Needs Review",
      "rationale": "The public metadata is incomplete or sends conflicting signals, so a person must choose the review lane.",
      "evidence": [
        {
          "field": "reviewArea",
          "source": "repository label",
          "value": "team:nodes"
        }
      ],
      "nextStepChecklist": [
        "Confirm the issue type and affected product area.",
        "Collect the missing reproduction, version, and impact details.",
        "Assign a review lane only after the evidence is clear."
      ],
      "labels": [
        "status:in-linear",
        "status:team-assigned",
        "team:nodes"
      ]
    },
    {
      "id": "n8n-io/n8n#37433",
      "repository": "n8n-io/n8n",
      "project": "n8n",
      "issueNumber": 37433,
      "title": "MCP tool renames in 2.34+ break ChatGPT integration using old execution tool names",
      "sourceUrl": "https://github.com/n8n-io/n8n/issues/37433",
      "sourceState": "open",
      "sourceStateReason": null,
      "issueType": "needs-review",
      "reviewArea": "general",
      "reviewState": "needs-review",
      "suggestedReviewLane": "Needs Review",
      "rationale": "The public metadata is incomplete or sends conflicting signals, so a person must choose the review lane.",
      "evidence": [],
      "nextStepChecklist": [
        "Confirm the issue type and affected product area.",
        "Collect the missing reproduction, version, and impact details.",
        "Assign a review lane only after the evidence is clear."
      ],
      "labels": [
        "status:in-linear",
        "status:team-assigned",
        "team:adore"
      ]
    },
    {
      "id": "n8n-io/n8n#37577",
      "repository": "n8n-io/n8n",
      "project": "n8n",
      "issueNumber": 37577,
      "title": "Embeddings Google Gemini node: on-screen notice states 768 dimensions; current default model emits 3072 and outputDimensionality is never sent",
      "sourceUrl": "https://github.com/n8n-io/n8n/issues/37577",
      "sourceState": "open",
      "sourceStateReason": null,
      "issueType": "needs-review",
      "reviewArea": "integrations",
      "reviewState": "needs-review",
      "suggestedReviewLane": "Needs Review",
      "rationale": "The public metadata is incomplete or sends conflicting signals, so a person must choose the review lane.",
      "evidence": [
        {
          "field": "reviewArea",
          "source": "repository label",
          "value": "team:ai"
        }
      ],
      "nextStepChecklist": [
        "Confirm the issue type and affected product area.",
        "Collect the missing reproduction, version, and impact details.",
        "Assign a review lane only after the evidence is clear."
      ],
      "labels": [
        "status:in-linear",
        "status:team-assigned",
        "team:ai"
      ]
    },
    {
      "id": "n8n-io/n8n#36454",
      "repository": "n8n-io/n8n",
      "project": "n8n",
      "issueNumber": 36454,
      "title": "n8n Cloud 2.33.4 — BoundedUnzip ZIP64 false-positive persists despite fix #33039",
      "sourceUrl": "https://github.com/n8n-io/n8n/issues/36454",
      "sourceState": "open",
      "sourceStateReason": null,
      "issueType": "needs-review",
      "reviewArea": "integrations",
      "reviewState": "needs-review",
      "suggestedReviewLane": "Needs Review",
      "rationale": "The public metadata is incomplete or sends conflicting signals, so a person must choose the review lane.",
      "evidence": [
        {
          "field": "reviewArea",
          "source": "repository label",
          "value": "team:nodes"
        }
      ],
      "nextStepChecklist": [
        "Confirm the issue type and affected product area.",
        "Collect the missing reproduction, version, and impact details.",
        "Assign a review lane only after the evidence is clear."
      ],
      "labels": [
        "status:in-linear",
        "status:team-assigned",
        "team:nodes"
      ]
    },
    {
      "id": "n8n-io/n8n#37259",
      "repository": "n8n-io/n8n",
      "project": "n8n",
      "issueNumber": 37259,
      "title": "Cloud workspace — \"Execute step\" does nothing and creates no execution",
      "sourceUrl": "https://github.com/n8n-io/n8n/issues/37259",
      "sourceState": "open",
      "sourceStateReason": null,
      "issueType": "needs-review",
      "reviewArea": "general",
      "reviewState": "needs-review",
      "suggestedReviewLane": "Needs Review",
      "rationale": "The public metadata is incomplete or sends conflicting signals, so a person must choose the review lane.",
      "evidence": [],
      "nextStepChecklist": [
        "Confirm the issue type and affected product area.",
        "Collect the missing reproduction, version, and impact details.",
        "Assign a review lane only after the evidence is clear."
      ],
      "labels": [
        "status:in-linear",
        "status:team-assigned",
        "team:cats"
      ]
    },
    {
      "id": "n8n-io/n8n#37407",
      "repository": "n8n-io/n8n",
      "project": "n8n",
      "issueNumber": 37407,
      "title": "Error output never fires when $getPairedItem throws inside handleNodeErrorOutput — the failed node's input item leaks to the success output",
      "sourceUrl": "https://github.com/n8n-io/n8n/issues/37407",
      "sourceState": "open",
      "sourceStateReason": null,
      "issueType": "bug",
      "reviewArea": "general",
      "reviewState": "needs-review",
      "suggestedReviewLane": "Needs Review",
      "rationale": "The public metadata is incomplete or sends conflicting signals, so a person must choose the review lane.",
      "evidence": [
        {
          "field": "issueType",
          "source": "specific title phrase",
          "value": "Error output never fires when $getPairedItem throws inside handleNodeErrorOutput — the failed node's input item leaks to the success output"
        }
      ],
      "nextStepChecklist": [
        "Confirm the issue type and affected product area.",
        "Collect the missing reproduction, version, and impact details.",
        "Assign a review lane only after the evidence is clear."
      ],
      "labels": [
        "status:in-linear",
        "status:team-assigned",
        "team:cats"
      ]
    },
    {
      "id": "n8n-io/n8n#37581",
      "repository": "n8n-io/n8n",
      "project": "n8n",
      "issueNumber": 37581,
      "title": "Queue mode: workers permanently stop consuming jobs after a network interruption — half-open Redis connections are never detected, and consumers do not resume even after \"Recovered Redis connection\"",
      "sourceUrl": "https://github.com/n8n-io/n8n/issues/37581",
      "sourceState": "open",
      "sourceStateReason": null,
      "issueType": "needs-review",
      "reviewArea": "reliability",
      "reviewState": "needs-review",
      "suggestedReviewLane": "Needs Review",
      "rationale": "The public metadata is incomplete or sends conflicting signals, so a person must choose the review lane.",
      "evidence": [
        {
          "field": "reviewArea",
          "source": "specific title phrase",
          "value": "Queue mode: workers permanently stop consuming jobs after a network interruption — half-open Redis connections are never detected, and consumers do not resume even after \"Recovered Redis connection\""
        }
      ],
      "nextStepChecklist": [
        "Confirm the issue type and affected product area.",
        "Collect the missing reproduction, version, and impact details.",
        "Assign a review lane only after the evidence is clear."
      ],
      "labels": [
        "status:in-linear",
        "status:team-assigned",
        "team:cats"
      ]
    },
    {
      "id": "n8n-io/n8n#37342",
      "repository": "n8n-io/n8n",
      "project": "n8n",
      "issueNumber": 37342,
      "title": "Main process leaks off-heap memory until OOMKill in queue mode (~40 MiB/s), workers unaffected",
      "sourceUrl": "https://github.com/n8n-io/n8n/issues/37342",
      "sourceState": "open",
      "sourceStateReason": null,
      "issueType": "needs-review",
      "reviewArea": "general",
      "reviewState": "needs-review",
      "suggestedReviewLane": "Needs Review",
      "rationale": "The public metadata is incomplete or sends conflicting signals, so a person must choose the review lane.",
      "evidence": [],
      "nextStepChecklist": [
        "Confirm the issue type and affected product area.",
        "Collect the missing reproduction, version, and impact details.",
        "Assign a review lane only after the evidence is clear."
      ],
      "labels": [
        "status:in-linear",
        "status:team-assigned",
        "team:cats"
      ]
    },
    {
      "id": "n8n-io/n8n#37340",
      "repository": "n8n-io/n8n",
      "project": "n8n",
      "issueNumber": 37340,
      "title": "MCP OAuth access tokens omit the `iss` claim and use `typ: JWT` instead of `at+jwt` (RFC 9068)",
      "sourceUrl": "https://github.com/n8n-io/n8n/issues/37340",
      "sourceState": "open",
      "sourceStateReason": null,
      "issueType": "needs-review",
      "reviewArea": "security-access",
      "reviewState": "needs-review",
      "suggestedReviewLane": "Needs Review",
      "rationale": "The public metadata is incomplete or sends conflicting signals, so a person must choose the review lane.",
      "evidence": [
        {
          "field": "reviewArea",
          "source": "specific title phrase",
          "value": "MCP OAuth access tokens omit the `iss` claim and use `typ: JWT` instead of `at+jwt` (RFC 9068)"
        }
      ],
      "nextStepChecklist": [
        "Confirm the issue type and affected product area.",
        "Collect the missing reproduction, version, and impact details.",
        "Assign a review lane only after the evidence is clear."
      ],
      "labels": [
        "status:in-linear",
        "status:team-assigned",
        "team:adore"
      ]
    },
    {
      "id": "n8n-io/n8n#37355",
      "repository": "n8n-io/n8n",
      "project": "n8n",
      "issueNumber": 37355,
      "title": "Instance AI sandbox fails with \"missing X-Api-Key header\" despite valid N8N_INSTANCE_AI_SANDBOX_API_KEY",
      "sourceUrl": "https://github.com/n8n-io/n8n/issues/37355",
      "sourceState": "closed",
      "sourceStateReason": "completed",
      "issueType": "needs-review",
      "reviewArea": "general",
      "reviewState": "closed-source",
      "suggestedReviewLane": "Closed source record review",
      "rationale": "The source issue is closed, so the dashboard preserves that state and does not infer why it closed.",
      "evidence": [
        {
          "field": "reviewState",
          "source": "source state",
          "value": "completed"
        }
      ],
      "nextStepChecklist": [
        "Confirm the issue type and affected product area.",
        "Collect the missing reproduction, version, and impact details.",
        "Assign a review lane only after the evidence is clear."
      ],
      "labels": [
        "status:in-linear"
      ]
    }
  ]
};
