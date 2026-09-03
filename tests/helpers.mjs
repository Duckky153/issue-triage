export const source = {
  repository: "example/project",
  project: "Example",
  context: "Test fixture",
  repositoryUrl: "https://github.com/example/project"
};

export function githubRecord(number, overrides = {}) {
  return {
    number,
    title: `Issue ${number}`,
    state: "open",
    state_reason: null,
    labels: [],
    comments: 2,
    created_at: "2026-08-01T00:00:00Z",
    updated_at: "2026-09-01T00:00:00Z",
    closed_at: null,
    html_url: `https://github.com/example/project/issues/${number}`,
    user: { login: "must-not-survive" },
    body: "must not survive",
    assignee: { login: "must-not-survive" },
    ...overrides
  };
}

export function issue(overrides = {}) {
  const number = overrides.number ?? 1;
  return {
    id: `example/project#${number}`,
    repository: "example/project",
    project: "Example",
    context: "Test fixture",
    number,
    title: "Unclear issue title",
    state: "open",
    stateReason: null,
    labels: [],
    comments: 0,
    createdAt: "2026-08-01T00:00:00Z",
    updatedAt: "2026-09-01T00:00:00Z",
    closedAt: null,
    sourceUrl: `https://github.com/example/project/issues/${number}`,
    ...overrides
  };
}

export function response(body, options = {}) {
  const headers = new Map([
    ["x-ratelimit-limit", options.limit ?? "60"],
    ["x-ratelimit-remaining", options.remaining ?? "59"],
    ["x-ratelimit-reset", options.reset ?? "0"]
  ]);
  return {
    ok: options.ok ?? true,
    status: options.status ?? 200,
    headers: { get: (name) => headers.get(name) ?? null },
    json: async () => {
      if (options.jsonError) throw new Error("invalid json");
      return body;
    }
  };
}
