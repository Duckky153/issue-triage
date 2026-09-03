(() => {
  "use strict";
  const data = window.GITHUB_TRIAGE_DATA;
  if (!data) throw new Error("Generated triage data is missing");

  const state = { id: data.results[0]?.id, repository: "all", review: "all", query: "" };
  const byId = new Map(data.results.map((result) => [result.id, result]));
  const $ = (selector) => document.querySelector(selector);
  const title = (value) => String(value ?? "Unknown")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replaceAll("-", " ")
    .replaceAll("_", " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());

  function reviewStateLabel(value) {
    return value === "closed-source" ? "Closed on GitHub" : title(value);
  }

  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function visibleResults() {
    const query = state.query.trim().toLowerCase();
    return data.results.filter((result) => {
      const searchable = [result.project, result.repository, result.issueNumber, result.title, ...result.labels].join(" ").toLowerCase();
      return (state.repository === "all" || result.project === state.repository)
        && (state.review === "all" || result.reviewState === state.review)
        && (!query || searchable.includes(query));
    });
  }

  function renderQueue() {
    const visible = visibleResults();
    $("#queue-count").textContent = `${visible.length} shown`;
    const rows = visible.map((result) => {
      const button = element("button", `issue-row${result.id === state.id ? " selected" : ""}`);
      button.type = "button";
      button.setAttribute("role", "listitem");
      button.dataset.id = result.id;
      const meta = element("span", "row-meta", `${result.project} #${result.issueNumber}`);
      const heading = element("strong", "row-title", result.title);
      const footText = result.reviewState === "suggested"
        ? `${title(result.issueType)} · ${title(result.reviewArea)}`
        : reviewStateLabel(result.reviewState);
      const foot = element("span", "row-foot", footText);
      button.append(meta, heading, foot);
      button.addEventListener("click", () => {
        state.id = result.id;
        render();
      });
      return button;
    });
    $("#issue-list").replaceChildren(...rows);
  }

  function renderEvidence(result) {
    const values = result.evidence.length
      ? result.evidence.map((item) => `${title(item.field)}: ${item.value} (${item.source})`)
      : ["No strong type or area signal was found in the retained metadata."];
    $("#evidence-list").replaceChildren(...values.map((value) => element("li", "", value)));
    const labels = result.labels.length ? result.labels : ["No source labels"];
    $("#label-list").replaceChildren(...labels.map((label) => element("span", "", label)));
  }

  function renderDetail() {
    const result = byId.get(state.id);
    const detail = $("#issue-detail");
    const empty = $("#empty-state");
    if (!result) {
      detail.classList.add("has-no-result");
      empty.hidden = false;
      return;
    }
    detail.classList.remove("has-no-result");
    empty.hidden = true;
    $("#issue-reference").textContent = `${result.repository} · #${result.issueNumber}`;
    $("#issue-title").textContent = result.title;
    const pill = $("#review-state");
    pill.textContent = reviewStateLabel(result.reviewState);
    pill.className = `state-pill ${result.reviewState}`;
    $("#source-state").textContent = result.sourceState === "closed" && result.sourceStateReason
      ? `Closed · ${title(result.sourceStateReason)}`
      : title(result.sourceState);
    $("#issue-type").textContent = title(result.issueType);
    $("#review-area").textContent = title(result.reviewArea);
    $("#source-link").href = result.sourceUrl;
    $("#lane-title").textContent = result.suggestedReviewLane;
    $("#rationale").textContent = result.rationale;
    renderEvidence(result);
    $("#checklist").replaceChildren(...result.nextStepChecklist.map((step) => element("li", "", step)));
  }

  function syncSelection() {
    const visible = visibleResults();
    if (!visible.some((result) => result.id === state.id)) state.id = visible[0]?.id;
    render();
  }

  function render() {
    renderQueue();
    renderDetail();
  }

  $("#repository-filter").addEventListener("change", (event) => {
    state.repository = event.target.value;
    syncSelection();
  });
  $("#review-filter").addEventListener("change", (event) => {
    state.review = event.target.value;
    syncSelection();
  });
  $("#search-filter").addEventListener("input", (event) => {
    state.query = event.target.value;
    syncSelection();
  });

  $("#metric-total").textContent = data.summary.totalRecords;
  $("#metric-suggested").textContent = data.summary.suggested;
  $("#metric-review").textContent = data.summary.needsReview;
  $("#metric-closed").textContent = data.summary.closedSource;
  render();
  document.documentElement.dataset.ready = "true";
})();
