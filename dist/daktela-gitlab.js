const f = {
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
}, M = "/api/v4", a = {
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
  return Object.entries(e).forEach(([o, s]) => n.searchParams.append(o, s)), await (await fetch(n)).json();
}
const v = {
  async findRefs(t, e) {
    const n = await _(t, e);
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
async function _(t, e) {
  const n = await a.commits.comments(t, e);
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
    for (g(n), e.title = O(n), g(n); n.length; )
      U(e, n);
    return e.body = e.body.trim(), e;
  }
};
function O(t) {
  const e = t.shift();
  if (e === void 0)
    throw Error("Could not parse commit title");
  return e.replace(/\s*#\s*\d+\s*$/, "");
}
function U(t, e) {
  return D(e) || F(t, e) || I(t, e) || Y(t, e) || G(t, e);
}
function g(t) {
  return S(t, /^\s*$/);
}
function D(t) {
  return S(t, /\(.*cherry.*picked.*\)/i);
}
function S(t, e) {
  let n = !1;
  for (; t.length && t[0].match(e); )
    t.shift(), n = !0;
  return n;
}
function F(t, e) {
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
const b = {
  async assembleBase(t, e) {
    const n = await a.commits.findBySHA(t, e), [
      r,
      o,
      s
    ] = await Promise.all([
      a.commits.refs(t, n.id, "all"),
      v.findRefs(t, n.id),
      a.commits.mergeRequests(t, n.id)
    ]);
    return { commit: n, branches: r, cherryPicks: o, mergeRequests: s };
  },
  async assembleComment(t, e) {
    const [n, r] = await Promise.all([
      a.branches.findByName(t, e.branch.name),
      v.deRefAll(t, e.cherryPicks)
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
    return t.classList.add("gl-spinner", "gl-spinner-dark", "gl-spinner-sm", "rounded-circle"), t;
  },
  checkCircle() {
    const t = $("status_success");
    return t.classList.add("ci-status-icon-success"), t;
  },
  crossCircle() {
    const t = $("status_failed");
    return t.classList.add("ci-status-icon-failed"), t;
  },
  close() {
    const t = C("close");
    return t.classList.add("gl-button-icon"), t;
  },
  clipboard() {
    const t = C("copy-to-clipboard");
    return t.classList.add("gl-icon"), t;
  }
};
function $(t) {
  const e = document.createElement("span");
  return e.appendChild(C(t)), e;
}
function C(t) {
  const e = document.createElementNS("http://www.w3.org/2000/svg", "use");
  e.setAttribute("href", `/assets/icons-33d285b77c0f9173f577e26a550fb6463b9913e368ebfcdbb54022aff27051db.svg#${t}`);
  const n = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  return n.classList.add("s16"), n.appendChild(e), n;
}
const y = {
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
    return `gl-ml-${y[t]}`;
  },
  r(t) {
    return `gl-mr-${y[t]}`;
  },
  b(t) {
    return `gl-mb-${y[t]}`;
  }
}, j = {
  attach(t, e, n = "top") {
    t.dataset.toggle = "tooltip", t.dataset.title = e, t.dataset.placement = n, t.dataset.container = "body";
  }
}, V = {
  default: "btn-default"
}, h = {
  default(t = "") {
    return this.make(t, "default");
  },
  make(t = "", e = "default") {
    const n = document.createElement("button");
    return n.textContent = t, n.classList.add("btn", "gl-button", V[e]), n;
  },
  copy(t) {
    const e = document.createElement("button");
    return e.classList.add("btn", "btn-clipboard", "gl-button", "btn-default-tertiary", "btn-icon", "btn-sm"), e.dataset.clipboardText = t, j.attach(e, "Copy"), e.appendChild(u.clipboard()), e;
  },
  asyncButton(t, e, n) {
    const o = { icon: t, title: e, disabled: !1 }, s = u.spinner();
    s.classList.add(p.r(3));
    const T = { icon: s, title: "Loading...", disabled: !0 }, k = u.checkCircle();
    k.classList.add(p.r(3));
    const A = { icon: k, title: "Success", disabled: !0 }, x = u.crossCircle();
    x.classList.add(p.r(3));
    const P = { icon: x, title: "Error", disabled: !0 }, i = h.default();
    return l(i, o), i.addEventListener("click", async () => {
      l(i, T);
      try {
        await n(), l(i, A), setTimeout(() => l(i, o), 1500);
      } catch (q) {
        throw l(i, P), setTimeout(() => l(i, o), 1500), q;
      }
    }), i;
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
        return t.buttons.push(h.make(n, r)), this;
      },
      addCloseButton(n = "Close") {
        const r = h.default(n);
        return r.dataset.dismiss = "modal", t.buttons.push(r), this;
      },
      build() {
        return {
          open() {
            e === void 0 && (e = z(t), e.addEventListener("close", () => {
              e == null || e.remove(), e = void 0;
            }), document.body.appendChild(e)), e.showModal();
          },
          close() {
            e == null || e.close();
          }
        };
      }
    };
  }
};
function z(t) {
  const e = document.createElement("div");
  e.classList.add("modal-content"), e.appendChild(J(t)), e.appendChild(K(t)), e.appendChild(Q(t));
  const n = document.createElement("dialog");
  return n.classList.add("gl-dialog-modal"), n.appendChild(e), n.addEventListener("click", (r) => {
    r.target instanceof Element && (r.target === n || X(n, r.target)) && n.close();
  }), n;
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
function X(t, e) {
  const n = e.closest('[data-dismiss="modal"], dialog');
  return n !== null && n !== t;
}
const Z = {
  textArea(t = "", e = !1) {
    const n = document.createElement("textarea");
    return n.classList.add("gl-form-input", "gl-form-textarea", "form-control"), n.value = t, n.readOnly = e, n;
  }
}, tt = {
  justifyBetween(...t) {
    const e = document.createElement("div");
    return e.classList.add("gl-display-flex", "gl-justify-content-space-between"), t.forEach((n) => e.appendChild(n)), e;
  }
}, et = {
  external(t, e = void 0) {
    const n = document.createElement("a");
    return n.href = t, n.textContent = e ?? t, n.target = "_blank", n.rel = "noreferrer noopener", n;
  }
}, c = {
  margins: p,
  icons: u,
  tooltip: j,
  containers: tt,
  buttons: h,
  links: et,
  inputs: Z,
  modals: W
};
function nt(t, e = void 0) {
  const n = c.containers.justifyBetween(
    rt(e),
    c.buttons.copy(t)
  );
  n.classList.add(c.margins.b(2)), c.modals.make().setTitle("Copy").appendBody(n).appendBody(c.inputs.textArea(t, !0)).addCloseButton().build().open();
}
function rt(t) {
  const e = document.createElement("div");
  return t !== void 0 && e.appendChild(t), e;
}
const ot = [
  "Menlo",
  "'DejaVu Sans Mono'",
  "'Liberation Mono'",
  "Consolas",
  "'Ubuntu Mono'",
  "'Courier New'",
  "'andale mono'",
  "'lucida console'",
  "monospace"
].join(", "), st = [
  `font-family:${ot}`,
  "font-size:0.8125rem",
  "margin-top:8px",
  "margin-bottom:8px",
  "color:#999999",
  "padding:8px 0 8px 8px",
  "border-width:0 0 0 3px",
  "border-style:none none none solid",
  "border-color:#444444"
].join(";");
function ct(t) {
  return it(t) + at(t) + mt(t) + pt(t) + ft(t);
}
function it(t) {
  return `<p><strong>${t.title}</strong></p>`;
}
function at(t) {
  return w("Commits", dt([t].concat(t.cherryPicks)));
}
function dt(t) {
  return t.map((e) => `${lt(e.branch)} ${ut(e.commit)}`);
}
function lt(t) {
  return E(t.name, t.web_url);
}
function ut(t) {
  return E(t.web_url, t.web_url);
}
function mt(t) {
  return w("Merge requests", t.mergeRequests.map((e) => R(e.web_url)));
}
function pt(t) {
  return Object.entries(t.extra).reduce((e, [n, r]) => e + w(n, bt(r), !0), "");
}
function ft(t) {
  return t.body === "" ? "" : `<p>Notes (copied from commit message):</p><pre style="${st}">${t.body}</pre>`;
}
function w(t, e, n = !1) {
  return e.length ? e.length === 1 && n ? `<p>${t}: ${e[0]}</p>` : `<p>${t}:</p>` + ht(e) : "";
}
function ht(t) {
  return `<ul>${t.map((e) => `<li>${e}</li>`).join("")}</ul>`;
}
function E(t, e) {
  return `<a href="${e}" target="_blank" rel="noreferrer noopener">${t}</a>`;
}
function bt(t) {
  return t.map(R);
}
function R(t) {
  try {
    return E(t, new URL(t).toString());
  } catch {
    return t;
  }
}
async function yt(t, e) {
  const n = await b.assembleBase(t, e), r = b.resolveBaseUsingFirst(n);
  if (r !== null) {
    const o = await b.assembleComment(t, r);
    gt(o);
  } else
    throw Error("Comment could not be auto-resolved");
}
function gt(t) {
  const e = ct(t);
  console.log(e), nt(e, Ct(t));
}
function Ct(t) {
  if (!t.ticket)
    return;
  const e = document.createElement("span");
  return e.textContent = "Ticket: ", e.appendChild(c.links.external(t.ticket)), e;
}
function wt() {
  Et(), Lt(), kt();
}
function Et() {
  try {
    const t = document.querySelectorAll("#commits-list");
    if (!t)
      return;
    const e = f.projects.ref();
    B(e, t), t.forEach((n) => {
      new MutationObserver((o) => {
        o.filter((s) => s.type === "childList").forEach((s) => B(e, s.addedNodes));
      }).observe(n, { subtree: !0, childList: !0 });
    });
  } catch (t) {
    console.log(t);
  }
}
function B(t, e) {
  e.forEach((n) => {
    n instanceof HTMLElement && n.querySelectorAll(".commit .commit-sha-group").forEach((r) => {
      const o = r.querySelector("[data-clipboard-text]");
      if (!o || !(o instanceof HTMLElement))
        return;
      const s = o.dataset.clipboardText ?? "";
      r.appendChild(L(t, s));
    });
  });
}
function Lt() {
  try {
    const t = document.querySelector(".page-content-header");
    if (!t)
      return;
    const e = f.projects.ref(), n = f.commits.sha(), r = L(e, n);
    r.classList.add(c.margins.l(3)), t.appendChild(r);
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
    const n = f.projects.ref(), r = e.dataset.clipboardText ?? "";
    t.appendChild(L(n, r));
  } catch (t) {
    console.error(t);
  }
}
function L(t, e) {
  const n = c.icons.daktela();
  return n.classList.add(c.margins.r(3)), c.buttons.asyncButton(n, "Daktela comment", async () => {
    await yt(t, e);
  });
}
wt();
//# sourceMappingURL=daktela-gitlab.js.map
