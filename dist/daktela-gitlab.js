const y = {
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
}, M = "/api/v4", c = {
  commits: {
    async findBySHA(t, e) {
      return m(`projects/${d(t)}/repository/commits/${e}`);
    },
    async refs(t, e, n = "all") {
      return m(`projects/${d(t)}/repository/commits/${e}/refs`, { type: n });
    },
    async comments(t, e) {
      return m(`projects/${d(t)}/repository/commits/${e}/comments`);
    },
    async mergeRequests(t, e) {
      return m(`projects/${d(t)}/repository/commits/${e}/merge_requests`);
    }
  },
  branches: {
    async findByName(t, e) {
      return m(`projects/${d(t)}/repository/branches/${d(e)}`);
    }
  }
};
function d(t) {
  return encodeURIComponent(t);
}
async function m(t, e = {}) {
  const n = new URL(`${M}/${t}`, location.origin);
  return Object.entries(e).forEach(([o, i]) => n.searchParams.append(o, i)), await (await fetch(n)).json();
}
const E = {
  async findRefs(t, e) {
    const n = await _(t, e);
    return Promise.all(
      n.map((r) => this.findRef(t, r))
    );
  },
  async findRef(t, e) {
    const [n, r] = await Promise.all([
      c.commits.findBySHA(t, e),
      c.commits.refs(t, e, "branch")
    ]);
    return { commit: n, branches: r };
  },
  async deRefAll(t, e) {
    return await Promise.all(
      e.map((n) => this.deRef(t, n))
    );
  },
  async deRef(t, e) {
    const n = await c.branches.findByName(t, e.branch.name);
    return { commit: e.commit, branch: n };
  }
};
async function _(t, e) {
  const n = await c.commits.comments(t, e);
  return H(n);
}
function H(t) {
  return t.reduce((e, n) => {
    const r = n.note.match(/mentioned\s+in\s+commit\s+(\w+)/i);
    return r !== null && e.push(r[1]), e;
  }, []);
}
const N = {
  message(t) {
    const e = { title: "", body: "", ticket: void 0, extra: {} }, n = t.message.split(`
`).map((r) => r.trim());
    for (g(n), e.title = U(n), g(n); n.length; )
      D(e, n);
    return e.body = e.body.trim(), e;
  }
};
function U(t) {
  const e = t.shift();
  if (e === void 0)
    throw Error("Could not parse commit title");
  return e.replace(/\s*#\s*\d+\s*$/, "");
}
function D(t, e) {
  return F(e) || O(t, e) || I(t, e) || Y(t, e) || G(t, e);
}
function g(t) {
  return B(t, /^\s*$/);
}
function F(t) {
  return B(t, /\(.*cherry.*picked.*\)/i);
}
function B(t, e) {
  let n = !1;
  for (; t.length && t[0].match(e); )
    t.shift(), n = !0;
  return n;
}
function O(t, e) {
  let n = !1;
  return e.length && e[0].match(/^\s*$/) && (t.body += `
`, n = !0, g(e)), n;
}
function I(t, e) {
  if (e.length) {
    const n = e[0].match(/ticket\s*:\s*(http.*)/i);
    if (!n)
      return !1;
    t.ticket = n[1].trim(), e.shift();
  }
  return !0;
}
function Y(t, e) {
  if (e.length) {
    const n = e[0].match(/^([^:]+):\s*(http.*)/i);
    if (!n)
      return !1;
    const r = n[1].trim(), o = n[2].trim();
    t.extra[r] = t.extra[r] ?? [], t.extra[r].push(o), e.shift();
  }
  return !0;
}
function G(t, e) {
  const n = e.shift();
  return n !== void 0 && (t.body += `${n}
`), n !== void 0;
}
const h = {
  async assembleBase(t, e) {
    const n = await c.commits.findBySHA(t, e), [
      r,
      o,
      i
    ] = await Promise.all([
      c.commits.refs(t, n.id, "all"),
      E.findRefs(t, n.id),
      c.commits.mergeRequests(t, n.id)
    ]);
    return { commit: n, branches: r, cherryPicks: o, mergeRequests: i };
  },
  async assembleComment(t, e) {
    const [n, r] = await Promise.all([
      c.branches.findByName(t, e.branch.name),
      E.deRefAll(t, e.cherryPicks)
    ]), o = N.message(e.commit);
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
}, u = {
  daktela() {
    const t = document.createElement("img");
    return t.src = "/uploads/-/system/project/avatar/10/256x256.png", t.style.width = "16px", t.style.height = "16px", t.style.transform = "scale(1.5)", t;
  },
  spinner() {
    const t = document.createElement("span");
    return t.classList.add("gl-spinner", "gl-spinner-dark", "gl-spinner-sm"), t;
  },
  checkCircle() {
    const t = x("/assets/icons-7f1680a3670112fe4c8ef57b9dfb93f0f61b43a2a479d7abd6c83bcb724b9201.svg#status_success");
    return t.classList.add("ci-status-icon-success"), t;
  },
  crossCircle() {
    const t = x("/assets/icons-7f1680a3670112fe4c8ef57b9dfb93f0f61b43a2a479d7abd6c83bcb724b9201.svg#status_failed");
    return t.classList.add("ci-status-icon-failed"), t;
  },
  close() {
    const t = C("/assets/icons-7f1680a3670112fe4c8ef57b9dfb93f0f61b43a2a479d7abd6c83bcb724b9201.svg#close");
    return t.classList.add("gl-button-icon"), t;
  },
  clipboard() {
    const t = C("/assets/icons-7f1680a3670112fe4c8ef57b9dfb93f0f61b43a2a479d7abd6c83bcb724b9201.svg#copy-to-clipboard");
    return t.classList.add("gl-icon"), t;
  }
};
function x(t) {
  const e = document.createElement("span");
  return e.appendChild(C(t)), e;
}
function C(t) {
  const e = document.createElementNS("http://www.w3.org/2000/svg", "use");
  e.setAttribute("href", t);
  const n = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  return n.classList.add("s16"), n.appendChild(e), n;
}
const b = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8"
}, p = {
  l(t) {
    return `gl-ml-${b[t]}`;
  },
  r(t) {
    return `gl-mr-${b[t]}`;
  },
  b(t) {
    return `gl-mb-${b[t]}`;
  }
}, S = {
  attach(t, e, n = "top") {
    t.dataset.toggle = "tooltip", t.dataset.title = e, t.dataset.placement = n, t.dataset.container = "body";
  }
}, V = {
  default: "btn-default"
}, f = {
  default(t = "") {
    return this.make(t, "default");
  },
  make(t = "", e = "default") {
    const n = document.createElement("button");
    return n.textContent = t, n.classList.add("btn", "gl-button", V[e]), n;
  },
  copy(t) {
    const e = document.createElement("button");
    return e.classList.add("btn", "btn-clipboard", "gl-button", "btn-default-tertiary", "btn-icon", "btn-sm"), e.dataset.clipboardText = t, S.attach(e, "Copy"), e.appendChild(u.clipboard()), e;
  },
  asyncButton(t, e, n) {
    const o = { icon: t, title: e, disabled: !1 }, i = u.spinner();
    i.classList.add(p.r(3));
    const A = { icon: i, title: "Loading...", disabled: !0 }, L = u.checkCircle();
    L.classList.add(p.r(3));
    const P = { icon: L, title: "Success", disabled: !0 }, v = u.crossCircle();
    v.classList.add(p.r(3));
    const T = { icon: v, title: "Error", disabled: !0 }, a = f.default();
    return l(a, o), a.addEventListener("click", async () => {
      l(a, A);
      try {
        await n(), l(a, P), setTimeout(() => l(a, o), 1500);
      } catch (q) {
        throw l(a, T), setTimeout(() => l(a, o), 1500), q;
      }
    }), a;
  }
};
function l(t, e) {
  t.innerHTML = "", t.appendChild(e.icon), t.insertAdjacentText("beforeend", e.title), t.disabled = e.disabled;
}
const W = {
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
            e = z(t), $(e).on("hidden.bs.modal", (n) => n.target.remove()), document.body.appendChild(e), $(e).modal("show");
          },
          close() {
            e !== void 0 && $(e).modal("hide");
          }
        };
      }
    };
  }
};
function z(t) {
  const e = document.createElement("div");
  e.classList.add("modal-content"), e.appendChild(J(t)), e.appendChild(K(t)), e.appendChild(Q(t));
  const n = document.createElement("div");
  n.classList.add("modal-dialog"), n.appendChild(e);
  const r = document.createElement("div");
  return r.classList.add("modal", "fade", "gl-modal"), r.appendChild(n), r;
}
function J(t) {
  const e = document.createElement("h4");
  e.classList.add("modal-title"), e.textContent = t.title;
  const n = document.createElement("button");
  n.classList.add("btn", "btn-default", "btn-sm", "gl-button", "btn-default-tertiary", "btn-icon"), n.dataset.dismiss = "modal", n.appendChild(u.close());
  const r = document.createElement("div");
  return r.classList.add("modal-header"), r.appendChild(e), r.appendChild(n), r;
}
function K(t) {
  const e = document.createElement("div");
  return e.classList.add("modal-body"), t.body.forEach((n) => e.appendChild(n)), e;
}
function Q(t) {
  const e = document.createElement("div");
  return e.classList.add("modal-footer"), t.buttons.forEach((n) => e.appendChild(n)), e;
}
const X = {
  textArea(t = "", e = !1) {
    const n = document.createElement("textarea");
    return n.classList.add("gl-form-input", "gl-form-textarea", "form-control"), n.value = t, n.readOnly = e, n;
  }
}, Z = {
  justifyBetween(...t) {
    const e = document.createElement("div");
    return e.classList.add("gl-display-flex", "gl-justify-content-space-between"), t.forEach((n) => e.appendChild(n)), e;
  }
}, tt = {
  external(t, e = void 0) {
    const n = document.createElement("a");
    return n.href = t, n.textContent = e ?? t, n.target = "_blank", n.rel = "noreferrer noopener", n;
  }
}, s = {
  margins: p,
  icons: u,
  tooltip: S,
  containers: Z,
  buttons: f,
  links: tt,
  inputs: X,
  modals: W
};
function et(t, e = void 0) {
  const n = s.containers.justifyBetween(
    nt(e),
    s.buttons.copy(t)
  );
  n.classList.add(s.margins.b(2)), s.modals.make().setTitle("Copy").appendBody(n).appendBody(s.inputs.textArea(t, !0)).addCloseButton().build().open();
}
function nt(t) {
  const e = document.createElement("div");
  return t !== void 0 && e.appendChild(t), e;
}
const rt = [
  "Menlo",
  "'DejaVu Sans Mono'",
  "'Liberation Mono'",
  "Consolas",
  "'Ubuntu Mono'",
  "'Courier New'",
  "'andale mono'",
  "'lucida console'",
  "monospace"
].join(", "), ot = [
  `font-family:${rt}`,
  "font-size:0.8125rem",
  "margin-top:8px",
  "margin-bottom:8px",
  "color:#999999",
  "padding:8px 0 8px 8px",
  "border-width:0 0 0 3px",
  "border-style:none none none solid",
  "border-color:#444444"
].join(";");
function st(t) {
  return at(t) + ct(t) + ut(t) + mt(t) + pt(t);
}
function at(t) {
  return `<p><strong>${t.title}</strong></p>`;
}
function ct(t) {
  return w("Commits", it([t].concat(t.cherryPicks)));
}
function it(t) {
  return t.map((e) => `${dt(e.branch)} ${lt(e.commit)}`);
}
function dt(t) {
  return k(t.name, t.web_url);
}
function lt(t) {
  return k(t.web_url, t.web_url);
}
function ut(t) {
  return w("Merge requests", t.mergeRequests.map((e) => R(e.web_url)));
}
function mt(t) {
  return Object.entries(t.extra).reduce((e, [n, r]) => e + w(n, ht(r), !0), "");
}
function pt(t) {
  return t.body === "" ? "" : `<p>Notes (copied from commit message):</p><pre style="${ot}">${t.body}</pre>`;
}
function w(t, e, n = !1) {
  return e.length ? e.length === 1 && n ? `<p>${t}: ${e[0]}</p>` : `<p>${t}:</p>` + ft(e) : "";
}
function ft(t) {
  return `<ul>${t.map((e) => `<li>${e}</li>`).join("")}</ul>`;
}
function k(t, e) {
  return `<a href="${e}" target="_blank" rel="noreferrer noopener">${t}</a>`;
}
function ht(t) {
  return t.map(R);
}
function R(t) {
  try {
    return k(t, new URL(t).toString());
  } catch {
    return t;
  }
}
async function bt(t, e) {
  const n = await h.assembleBase(t, e), r = h.resolveBaseUsingFirst(n);
  if (r !== null) {
    const o = await h.assembleComment(t, r);
    yt(o);
  } else
    throw Error("Comment could not be auto-resolved");
}
function yt(t) {
  et(st(t), gt(t));
}
function gt(t) {
  if (!t.ticket)
    return;
  const e = document.createElement("span");
  return e.textContent = "Ticket: ", e.appendChild(s.links.external(t.ticket)), e;
}
function Ct() {
  wt(), kt();
}
function wt() {
  try {
    const t = document.querySelector(".page-content-header");
    if (!t)
      return;
    const e = y.projects.ref(), n = y.commits.sha(), r = j(e, n);
    r.classList.add(s.margins.l(3)), t.appendChild(r);
  } catch (t) {
    console.error(t);
  }
}
function kt() {
  try {
    const t = document.querySelector([
      ".project-last-commit .js-commit-sha-group",
      ".blob-commit-info .commit-sha-group"
    ].join(", "));
    if (!t)
      return;
    const e = t.querySelector("[data-clipboard-text]");
    if (!e || !(e instanceof HTMLElement))
      return;
    const n = y.projects.ref(), r = e.dataset.clipboardText ?? "";
    t.appendChild(j(n, r));
  } catch (t) {
    console.error(t);
  }
}
function j(t, e) {
  const n = s.icons.daktela();
  return n.classList.add(s.margins.r(3)), s.buttons.asyncButton(n, "Daktela comment", async () => {
    await bt(t, e);
  });
}
Ct();
//# sourceMappingURL=daktela-gitlab.js.map
