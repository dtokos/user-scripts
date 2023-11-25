function d(e) {
  const t = document.createElement("button");
  s(t), l(t);
  const n = {
    element() {
      return t;
    },
    setErrorState() {
      h(t);
    },
    setInitialState() {
      s(t);
    },
    setLoadingState() {
      m(t);
    },
    setSuccessState() {
      p(t);
    }
  };
  return t.addEventListener("click", () => e(n)), n;
}
function l(e) {
  e.dataset.toggle = "tooltip", e.dataset.placement = "bottom", e.dataset.container = "body", e.dataset.title = "Copy commit message as Daktela comment";
}
function s(e) {
  const t = document.createElement("img");
  t.src = "/uploads/-/system/project/avatar/10/256x256.png", t.classList.add("gl-mr-3"), t.style.width = "16px", t.style.height = "16px", t.style.transform = "scale(1.5)", e.innerHTML = "", e.appendChild(t), e.insertAdjacentText("beforeend", "Daktela comment"), e.classList.add("btn", "gl-button", "btn-default", "gl-ml-3"), e.disabled = !1;
}
function m(e) {
  const t = document.createElement("span");
  t.classList.add("gl-spinner", "gl-spinner-dark", "gl-spinner-sm", "gl-mr-3"), e.innerHTML = "", e.appendChild(t), e.insertAdjacentText("beforeend", "Loading..."), e.disabled = !0;
}
function p(e) {
  const t = document.createElementNS("http://www.w3.org/2000/svg", "use");
  t.setAttribute("href", "/assets/icons-7f1680a3670112fe4c8ef57b9dfb93f0f61b43a2a479d7abd6c83bcb724b9201.svg#status_success");
  const n = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  n.classList.add("s16"), n.appendChild(t);
  const a = document.createElement("span");
  a.classList.add("ci-status-icon-success", "gl-mr-3"), a.appendChild(n), e.innerHTML = "", e.appendChild(a), e.insertAdjacentText("beforeend", "Copied"), e.disabled = !1;
}
function h(e) {
  const t = document.createElementNS("http://www.w3.org/2000/svg", "use");
  t.setAttribute("href", "/assets/icons-7f1680a3670112fe4c8ef57b9dfb93f0f61b43a2a479d7abd6c83bcb724b9201.svg#status_failed");
  const n = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  n.classList.add("s16"), n.appendChild(t);
  const a = document.createElement("span");
  a.classList.add("ci-status-icon-failed", "gl-mr-3"), a.appendChild(n), e.innerHTML = "", e.appendChild(a), e.insertAdjacentText("beforeend", "Error"), e.disabled = !1;
}
function u(e) {
  return `<p>${e.title}</p>`;
}
function f(e) {
  return navigator.clipboard.writeText(e);
}
const g = "/api/v4", o = {
  searchForProject(e) {
    return r("projects", { search: e });
  },
  findCommitBySha(e, t) {
    return r(`projects/${e}/repository/commits/${t}`);
  }
};
function r(e, t = {}) {
  const n = new URL(`${g}/${e}`);
  return Object.entries(t).forEach(([a, i]) => n.searchParams.append(a, i)), fetch(n).then((a) => a.json());
}
function w() {
  return S().then((e) => C(e));
}
function S() {
  const e = location.pathname.match(/^\/?(.*)\/-\//);
  if (!e)
    return Promise.reject(`Could not parse project: ${location.pathname}`);
  const t = e[1], n = t.split("/");
  return Promise.resolve({ path: n[n.length - 1], path_with_namespace: t });
}
function C(e) {
  return o.searchForProject(e.path).then((t) => {
    const n = t.find(
      (a) => a.path_with_namespace === e.path_with_namespace
    );
    if (!n)
      throw new Error(`Could not find project: ${e.path_with_namespace}`);
    return n;
  });
}
const j = {
  loadCurrent: w
};
function E(e) {
  return L().then((t) => o.findCommitBySha(e.id, t));
}
function L() {
  const e = location.pathname.match(/\/-\/commit\/(\w+)/);
  return e ? Promise.resolve(e[1]) : Promise.reject(`Could not parse commit SHA: ${location.pathname}`);
}
const b = {
  loadCurrent: E
};
function v() {
  return j.loadCurrent().then((e) => y(e));
}
function y(e) {
  return b.loadCurrent(e).then((t) => ({
    title: "Foo bar",
    message: t.message,
    commits: []
  }));
}
const T = {
  assemble: v
}, c = 1500;
function _() {
  const e = document.querySelector(".page-content-header");
  e && e.appendChild(d(A).element());
}
function A(e) {
  e.setLoadingState(), T.assemble().then((t) => u(t)).then((t) => f(t)).then(() => {
    e.setSuccessState(), setTimeout(() => e.setInitialState(), c);
  }).catch((t) => {
    throw e.setErrorState(), setTimeout(() => e.setInitialState(), c), t;
  });
}
_();
