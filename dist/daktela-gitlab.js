const b = {
  daktela() {
    const t = document.createElement("img");
    return t.src = "/uploads/-/system/project/avatar/10/256x256.png", t.style.width = "16px", t.style.height = "16px", t.style.transform = "scale(1.5)", t;
  },
  spinner() {
    const t = document.createElement("span");
    return t.classList.add("gl-spinner", "gl-spinner-dark", "gl-spinner-sm"), t;
  },
  checkCircle() {
    const t = C("/assets/icons-7f1680a3670112fe4c8ef57b9dfb93f0f61b43a2a479d7abd6c83bcb724b9201.svg#status_success");
    return t.classList.add("ci-status-icon-success"), t;
  },
  crossCircle() {
    const t = C("/assets/icons-7f1680a3670112fe4c8ef57b9dfb93f0f61b43a2a479d7abd6c83bcb724b9201.svg#status_failed");
    return t.classList.add("ci-status-icon-failed"), t;
  },
  close() {
    const t = p("/assets/icons-7f1680a3670112fe4c8ef57b9dfb93f0f61b43a2a479d7abd6c83bcb724b9201.svg#close");
    return t.classList.add("gl-button-icon"), t;
  },
  clipboard() {
    const t = p("/assets/icons-7f1680a3670112fe4c8ef57b9dfb93f0f61b43a2a479d7abd6c83bcb724b9201.svg#copy-to-clipboard");
    return t.classList.add("gl-icon"), t;
  }
};
function C(t) {
  const e = document.createElement("span");
  return e.appendChild(p(t)), e;
}
function p(t) {
  const e = document.createElementNS("http://www.w3.org/2000/svg", "use");
  e.setAttribute("href", t);
  const n = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  return n.classList.add("s16"), n.appendChild(e), n;
}
const l = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8"
}, B = {
  l(t) {
    return `gl-ml-${l[t]}`;
  },
  r(t) {
    return `gl-mr-${l[t]}`;
  },
  b(t) {
    return `gl-mb-${l[t]}`;
  }
}, v = {
  attach(t, e, n = "top") {
    t.dataset.toggle = "tooltip", t.dataset.title = e, t.dataset.placement = n, t.dataset.container = "body";
  }
}, R = {
  default: "btn-default"
}, f = {
  default(t = "") {
    return this.make(t, "default");
  },
  make(t = "", e = "default") {
    const n = document.createElement("button");
    return n.textContent = t, n.classList.add("btn", "gl-button", R[e]), n;
  },
  copy(t) {
    const e = document.createElement("button");
    return e.classList.add("btn", "btn-clipboard", "gl-button", "btn-default-tertiary", "btn-icon", "btn-sm"), e.dataset.clipboardText = t, v.attach(e, "Copy"), e.appendChild(b.clipboard()), e;
  }
}, S = {
  make() {
    const t = {
      title: "",
      body: [],
      buttons: []
    };
    let e;
    return {
      setTitle(n) {
        return t.title = n, this;
      },
      setBody(n) {
        return t.body = [n], this;
      },
      appendBody(n) {
        return t.body.push(n), this;
      },
      addButton(n, r = "default") {
        return t.buttons.push(f.make(n, r)), this;
      },
      addCloseButton(n = "Close") {
        const r = f.default(n);
        return r.dataset.dismiss = "modal", t.buttons.push(r), this;
      },
      build() {
        return {
          open() {
            e = A(t), $(e).on("hidden.bs.modal", (n) => n.target.remove()), document.body.appendChild(e), $(e).modal("show");
          },
          close() {
            e !== void 0 && $(e).modal("hide");
          }
        };
      }
    };
  }
};
function A(t) {
  const e = document.createElement("div");
  e.classList.add("modal-content"), e.appendChild(T(t)), e.appendChild(j(t)), e.appendChild(P(t));
  const n = document.createElement("div");
  n.classList.add("modal-dialog"), n.appendChild(e);
  const r = document.createElement("div");
  return r.classList.add("modal", "fade", "gl-modal"), r.appendChild(n), r;
}
function T(t) {
  const e = document.createElement("h4");
  e.classList.add("modal-title"), e.textContent = t.title;
  const n = document.createElement("button");
  n.classList.add("btn", "btn-default", "btn-sm", "gl-button", "btn-default-tertiary", "btn-icon"), n.dataset.dismiss = "modal", n.appendChild(b.close());
  const r = document.createElement("div");
  return r.classList.add("modal-header"), r.appendChild(e), r.appendChild(n), r;
}
function j(t) {
  const e = document.createElement("div");
  return e.classList.add("modal-body"), t.body.forEach((n) => e.appendChild(n)), e;
}
function P(t) {
  const e = document.createElement("div");
  return e.classList.add("modal-footer"), t.buttons.forEach((n) => e.appendChild(n)), e;
}
const M = {
  textArea(t = "", e = !1) {
    const n = document.createElement("textarea");
    return n.classList.add("gl-form-input", "gl-form-textarea", "form-control"), n.value = t, n.readOnly = e, n;
  }
}, q = {
  justifyBetween(...t) {
    const e = document.createElement("div");
    return e.classList.add("gl-display-flex", "gl-justify-content-space-between"), t.forEach((n) => e.appendChild(n)), e;
  }
}, H = {
  external(t, e = void 0) {
    const n = document.createElement("a");
    return n.href = t, n.textContent = e ?? t, n.target = "_blank", n.rel = "noreferrer noopener", n;
  }
}, s = {
  margins: B,
  icons: b,
  tooltip: v,
  containers: q,
  buttons: f,
  links: H,
  inputs: M,
  modals: S
}, w = 1500;
function _(t) {
  const e = s.buttons.default();
  return e.classList.add(s.margins.l(3)), s.tooltip.attach(e, "Copy commit message as Daktela comment", "bottom"), u(e), e.addEventListener("click", async () => {
    N(e);
    try {
      await t(), U(e), setTimeout(() => u(e), w);
    } catch (n) {
      throw D(e), setTimeout(() => u(e), w), n;
    }
  }), e;
}
function u(t) {
  const e = s.icons.daktela();
  e.classList.add(s.margins.r(3)), t.innerHTML = "", t.appendChild(e), t.insertAdjacentText("beforeend", "Daktela comment"), t.disabled = !1;
}
function N(t) {
  const e = s.icons.spinner();
  e.classList.add(s.margins.r(3)), t.innerHTML = "", t.appendChild(e), t.insertAdjacentText("beforeend", "Loading..."), t.disabled = !0;
}
function U(t) {
  const e = s.icons.checkCircle();
  e.classList.add(s.margins.r(3)), t.innerHTML = "", t.appendChild(e), t.insertAdjacentText("beforeend", "Success"), t.disabled = !1;
}
function D(t) {
  const e = s.icons.crossCircle();
  e.classList.add(s.margins.r(3)), t.innerHTML = "", t.appendChild(e), t.insertAdjacentText("beforeend", "Error"), t.disabled = !1;
}
const F = [
  "Menlo",
  "'DejaVu Sans Mono'",
  "'Liberation Mono'",
  "Consolas",
  "'Ubuntu Mono'",
  "'Courier New'",
  "'andale mono'",
  "'lucida console'",
  "monospace"
].join(", "), I = [
  `font-family:${F}`,
  "font-size:0.8125rem",
  "margin-top:8px",
  "margin-bottom:8px",
  "color:#999999",
  "padding:8px 0 8px 8px",
  "border-width:0 0 0 3px",
  "border-style:none none none solid",
  "border-color:#444444"
].join(";");
function O(t) {
  return Y(t) + G(t) + J(t) + K(t) + Q(t);
}
function Y(t) {
  return `<p><strong>${t.title}</strong></p>`;
}
function G(t) {
  return y("Commits", V([t].concat(t.cherryPicks)));
}
function V(t) {
  return t.map((e) => `${W(e.branch)} ${z(e.commit)}`);
}
function W(t) {
  return g(t.name, t.web_url);
}
function z(t) {
  return g(t.web_url, t.web_url);
}
function J(t) {
  return y("Merge requests", t.mergeRequests.map((e) => x(e.web_url)));
}
function K(t) {
  return Object.entries(t.extra).reduce((e, [n, r]) => e + y(n, Z(r), !0), "");
}
function Q(t) {
  return t.body === "" ? "" : `<p>Notes (copied from commit message):</p><pre style="${I}">${t.body}</pre>`;
}
function y(t, e, n = !1) {
  return e.length ? e.length === 1 && n ? `<p>${t}: ${e[0]}</p>` : `<p>${t}:</p>` + X(e) : "";
}
function X(t) {
  return `<ul>${t.map((e) => `<li>${e}</li>`).join("")}</ul>`;
}
function g(t, e) {
  return `<a href="${e}" target="_blank" rel="noreferrer noopener">${t}</a>`;
}
function Z(t) {
  return t.map(x);
}
function x(t) {
  try {
    return g(t, new URL(t).toString());
  } catch {
    return t;
  }
}
const tt = "/api/v4", a = {
  commits: {
    async findBySHA(t, e) {
      return i(`projects/${c(t)}/repository/commits/${e}`);
    },
    async refs(t, e, n = "all") {
      return i(`projects/${c(t)}/repository/commits/${e}/refs`, { type: n });
    },
    async comments(t, e) {
      return i(`projects/${c(t)}/repository/commits/${e}/comments`);
    },
    async mergeRequests(t, e) {
      return i(`projects/${c(t)}/repository/commits/${e}/merge_requests`);
    }
  },
  branches: {
    async findByName(t, e) {
      return i(`projects/${c(t)}/repository/branches/${c(e)}`);
    }
  }
};
function c(t) {
  return encodeURIComponent(t);
}
async function i(t, e = {}) {
  const n = new URL(`${tt}/${t}`, location.origin);
  return Object.entries(e).forEach(([o, d]) => n.searchParams.append(o, d)), await (await fetch(n)).json();
}
const L = {
  async findRefs(t, e) {
    const n = await et(t, e);
    return Promise.all(
      n.map((r) => this.findRef(t, r))
    );
  },
  async findRef(t, e) {
    const [n, r] = await Promise.all([
      a.commits.findBySHA(t, e),
      a.commits.refs(t, e, "branch")
    ]);
    return { commit: n, branches: r };
  },
  async deRefAll(t, e) {
    return await Promise.all(
      e.map((n) => this.deRef(t, n))
    );
  },
  async deRef(t, e) {
    const n = await a.branches.findByName(t, e.branch.name);
    return { commit: e.commit, branch: n };
  }
};
async function et(t, e) {
  const n = await a.commits.comments(t, e);
  return nt(n);
}
function nt(t) {
  return t.reduce((e, n) => {
    const r = n.note.match(/mentioned\s+in\s+commit\s+(\w+)/i);
    return r !== null && e.push(r[1]), e;
  }, []);
}
const rt = {
  message(t) {
    const e = { title: "", body: "", ticket: void 0, extra: {} }, n = t.message.split(`
`).map((r) => r.trim());
    for (h(n), e.title = st(n), h(n); n.length; )
      ot(e, n);
    return e.body = e.body.trim(), e;
  }
};
function st(t) {
  const e = t.shift();
  if (e === void 0)
    throw Error("Could not parse commit title");
  return e.replace(/\s*#\s*\d+\s*$/, "");
}
function ot(t, e) {
  return at(e) || ct(t, e) || it(t, e) || dt(t, e) || lt(t, e);
}
function h(t) {
  return E(t, /^\s*$/);
}
function at(t) {
  return E(t, /\(.*cherry.*picked.*\)/i);
}
function E(t, e) {
  let n = !1;
  for (; t.length && t[0].match(e); )
    t.shift(), n = !0;
  return n;
}
function ct(t, e) {
  let n = !1;
  return e.length && e[0].match(/^\s*$/) && (t.body += `
`, n = !0, h(e)), n;
}
function it(t, e) {
  if (e.length) {
    const n = e[0].match(/ticket\s*:\s*(http.*)/i);
    if (!n)
      return !1;
    t.ticket = n[1].trim(), e.shift();
  }
  return !0;
}
function dt(t, e) {
  if (e.length) {
    const n = e[0].match(/^([^:]+):\s*(http.*)/i);
    if (!n)
      return !1;
    const r = n[1].trim(), o = n[2].trim();
    t.extra[r] = t.extra[r] ?? [], t.extra[r].push(o), e.shift();
  }
  return !0;
}
function lt(t, e) {
  const n = e.shift();
  return n !== void 0 && (t.body += `${n}
`), n !== void 0;
}
const m = {
  async assembleBase(t, e) {
    const n = await a.commits.findBySHA(t, e), [
      r,
      o,
      d
    ] = await Promise.all([
      a.commits.refs(t, n.id, "all"),
      L.findRefs(t, n.id),
      a.commits.mergeRequests(t, n.id)
    ]);
    return { commit: n, branches: r, cherryPicks: o, mergeRequests: d };
  },
  async assembleComment(t, e) {
    const [n, r] = await Promise.all([
      a.branches.findByName(t, e.branch.name),
      L.deRefAll(t, e.cherryPicks)
    ]), o = rt.message(e.commit);
    return {
      commit: e.commit,
      branch: n,
      cherryPicks: r,
      mergeRequests: e.mergeRequests,
      title: o.title,
      body: o.body,
      ticket: o.ticket,
      extra: o.extra
    };
  },
  tryAutoResolveBase(t) {
    return t.branches.length > 1 || t.cherryPicks.some((e) => e.branches.length > 1) ? null : this.resolveBaseUsingFirst(t);
  },
  resolveBaseUsingFirst(t) {
    return {
      commit: t.commit,
      branch: t.branches[0],
      cherryPicks: t.cherryPicks.map((e) => ({
        commit: e.commit,
        branch: e.branches[0]
      })),
      mergeRequests: t.mergeRequests
    };
  }
}, k = {
  projects: {
    ref() {
      const t = location.pathname.match(/^\/?(.*)\/-\//);
      if (!t)
        throw Error(`Could not parse project ref: ${location.pathname}`);
      return t[1];
    }
  },
  commits: {
    sha() {
      const t = location.pathname.match(/\/-\/commit\/(\w+)/);
      if (!t)
        throw Error(`Could not parse commit SHA: ${location.pathname}`);
      return t[1];
    }
  }
};
function ut(t, e = void 0) {
  const n = s.containers.justifyBetween(
    mt(e),
    s.buttons.copy(t)
  );
  n.classList.add(s.margins.b(2)), s.modals.make().setTitle("Copy").appendBody(n).appendBody(s.inputs.textArea(t, !0)).addCloseButton().build().open();
}
function mt(t) {
  const e = document.createElement("div");
  return t !== void 0 && e.appendChild(t), e;
}
function pt() {
  const t = document.querySelector(".page-content-header");
  t && t.appendChild(_(ft));
}
async function ft() {
  const t = k.projects.ref(), e = k.commits.sha(), n = await m.assembleBase(t, e), r = m.resolveBaseUsingFirst(n);
  if (r !== null) {
    const o = await m.assembleComment(t, r);
    ht(o);
  } else
    throw Error("Comment could not be auto-resolved");
}
function ht(t) {
  ut(O(t), bt(t));
}
function bt(t) {
  if (!t.ticket)
    return;
  const e = document.createElement("span");
  return e.textContent = "Ticket: ", e.appendChild(s.links.external(t.ticket)), e;
}
pt();
//# sourceMappingURL=daktela-gitlab.js.map
