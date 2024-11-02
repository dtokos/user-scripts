var Du = Object.defineProperty;
var Nu = Object.getPrototypeOf;
var Fu = Reflect.get;
var Os = (e) => {
  throw TypeError(e);
};
var ku = (e, t, n) => t in e ? Du(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var F = (e, t, n) => ku(e, typeof t != "symbol" ? t + "" : t, n), Oo = (e, t, n) => t.has(e) || Os("Cannot " + n);
var u = (e, t, n) => (Oo(e, t, "read from private field"), n ? n.call(e) : t.get(e)), y = (e, t, n) => t.has(e) ? Os("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), R = (e, t, n, r) => (Oo(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), St = (e, t, n) => (Oo(e, t, "access private method"), n);
var Ao = (e, t, n, r) => ({
  set _(i) {
    R(e, t, i, n);
  },
  get _() {
    return u(e, t, r);
  }
}), As = (e, t, n) => Fu(Nu(e), n, t);
const Lu = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Lu);
const Bu = 1, Ku = 2, Wu = 16, Uu = 1, Hu = 2, Vu = 4, ju = 8, zu = 16, qu = 1, Gu = 2, vt = Symbol(), la = !1;
var Go = Array.isArray, Yo = Array.from, Yu = Object.defineProperty, ce = Object.getOwnPropertyDescriptor, Xu = Object.getOwnPropertyDescriptors, Zu = Object.prototype, Ju = Array.prototype, Io = Object.getPrototypeOf;
function fn(e) {
  return typeof e == "function";
}
const Q = () => {
};
function Qu(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const qt = 2, fa = 4, co = 8, Xo = 16, Tt = 32, Dr = 64, Me = 128, Yr = 256, xt = 512, de = 1024, Nr = 2048, kt = 4096, Fr = 8192, $u = 16384, kr = 32768, tc = 65536, ec = 1 << 18, da = 1 << 19, Co = Symbol("$state"), nc = Symbol("");
function ha(e) {
  return e === this.v;
}
function ga(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Zo(e) {
  return !ga(e, this.v);
}
function rc(e) {
  throw new Error("effect_in_teardown");
}
function ic() {
  throw new Error("effect_in_unowned_derived");
}
function oc(e) {
  throw new Error("effect_orphan");
}
function sc() {
  throw new Error("effect_update_depth_exceeded");
}
function ac(e) {
  throw new Error("props_invalid_value");
}
function uc() {
  throw new Error("state_descriptors_fixed");
}
function cc() {
  throw new Error("state_prototype_fixed");
}
function lc() {
  throw new Error("state_unsafe_local_read");
}
function fc() {
  throw new Error("state_unsafe_mutation");
}
function at(e) {
  return {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: ha,
    version: 0
  };
}
function L(e) {
  return /* @__PURE__ */ dc(at(e));
}
// @__NO_SIDE_EFFECTS__
function va(e, t = !1) {
  var r;
  const n = at(e);
  return t || (n.equals = Zo), Z !== null && Z.l !== null && ((r = Z.l).s ?? (r.s = [])).push(n), n;
}
// @__NO_SIDE_EFFECTS__
function dc(e) {
  return Y !== null && Y.f & qt && (Lt === null ? _c([e]) : Lt.push(e)), e;
}
function A(e, t) {
  return Y !== null && ns() && Y.f & (qt | Xo) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (Lt === null || !Lt.includes(e)) && fc(), ma(e, t);
}
function ma(e, t) {
  return e.equals(t) || (e.v = t, e.version = Da(), pa(e, de), ns() && j !== null && j.f & xt && !(j.f & Tt) && (lt !== null && lt.includes(e) ? (Jt(j, de), ho(j)) : le === null ? bc([e]) : le.push(e))), t;
}
function pa(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = ns(), i = n.length, o = 0; o < i; o++) {
      var s = n[o], a = s.f;
      a & de || !r && s === j || (Jt(s, t), a & (xt | Me) && (a & qt ? pa(
        /** @type {Derived} */
        s,
        Nr
      ) : ho(
        /** @type {Effect} */
        s
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function C(e) {
  var t = qt | de;
  j === null ? t |= Me : j.f |= da;
  const n = {
    children: null,
    ctx: Z,
    deps: null,
    equals: ha,
    f: t,
    fn: e,
    reactions: null,
    v: (
      /** @type {V} */
      null
    ),
    version: 0,
    parent: j
  };
  if (Y !== null && Y.f & qt) {
    var r = (
      /** @type {Derived} */
      Y
    );
    (r.children ?? (r.children = [])).push(n);
  }
  return n;
}
// @__NO_SIDE_EFFECTS__
function lo(e) {
  const t = /* @__PURE__ */ C(e);
  return t.equals = Zo, t;
}
function ya(e) {
  var t = e.children;
  if (t !== null) {
    e.children = null;
    for (var n = 0; n < t.length; n += 1) {
      var r = t[n];
      r.f & qt ? Jo(
        /** @type {Derived} */
        r
      ) : we(
        /** @type {Effect} */
        r
      );
    }
  }
}
function wa(e) {
  var t, n = j;
  Kt(e.parent);
  try {
    ya(e), t = Na(e);
  } finally {
    Kt(n);
  }
  return t;
}
function _a(e) {
  var t = wa(e), n = (Se || e.f & Me) && e.deps !== null ? Nr : xt;
  Jt(e, n), e.equals(t) || (e.v = t, e.version = Da());
}
function Jo(e) {
  ya(e), _n(e, 0), Jt(e, Fr), e.v = e.children = e.deps = e.ctx = e.reactions = null;
}
function ba(e) {
  j === null && Y === null && oc(), Y !== null && Y.f & Me && ic(), es && rc();
}
function hc(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Lr(e, t, n, r = !0) {
  var i = (e & Dr) !== 0, o = j, s = {
    ctx: Z,
    deps: null,
    deriveds: null,
    nodes_start: null,
    nodes_end: null,
    f: e | de,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: i ? null : o,
    prev: null,
    teardown: null,
    transitions: null,
    version: 0
  };
  if (n) {
    var a = De;
    try {
      Cs(!0), fo(s), s.f |= $u;
    } catch (c) {
      throw we(s), c;
    } finally {
      Cs(a);
    }
  } else t !== null && ho(s);
  var l = n && s.deps === null && s.first === null && s.nodes_start === null && s.teardown === null && (s.f & da) === 0;
  if (!l && !i && r && (o !== null && hc(s, o), Y !== null && Y.f & qt)) {
    var f = (
      /** @type {Derived} */
      Y
    );
    (f.children ?? (f.children = [])).push(s);
  }
  return s;
}
function gc() {
  return Y === null ? !1 : !Se;
}
function U(e) {
  ba();
  var t = j !== null && (j.f & Tt) !== 0 && Z !== null && !Z.m;
  if (t) {
    var n = (
      /** @type {ComponentContext} */
      Z
    );
    (n.e ?? (n.e = [])).push({
      fn: e,
      effect: j,
      reaction: Y
    });
  } else {
    var r = xa(e);
    return r;
  }
}
function vc(e) {
  return ba(), mc(e);
}
function Qo(e) {
  const t = Lr(Dr, e, !0);
  return () => {
    we(t);
  };
}
function xa(e) {
  return Lr(fa, e, !1);
}
function mc(e) {
  return Lr(co, e, !0);
}
function dt(e) {
  return an(e);
}
function an(e, t = 0) {
  return Lr(co | Xo | t, e, !0);
}
function he(e, t = !0) {
  return Lr(co | Tt, e, !0, t);
}
function Ea(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = es, r = Y;
    Ts(!0), ge(null);
    try {
      t.call(null);
    } finally {
      Ts(n), ge(r);
    }
  }
}
function Sa(e) {
  var t = e.deriveds;
  if (t !== null) {
    e.deriveds = null;
    for (var n = 0; n < t.length; n += 1)
      Jo(t[n]);
  }
}
function Pa(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    var r = n.next;
    we(n, t), n = r;
  }
}
function pc(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    t.f & Tt || we(t), t = n;
  }
}
function we(e, t = !0) {
  var n = !1;
  if ((t || e.f & ec) && e.nodes_start !== null) {
    for (var r = e.nodes_start, i = e.nodes_end; r !== null; ) {
      var o = r === i ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ vo(r)
      );
      r.remove(), r = o;
    }
    n = !0;
  }
  Pa(e, t && !n), Sa(e), _n(e, 0), Jt(e, Fr);
  var s = e.transitions;
  if (s !== null)
    for (const l of s)
      l.stop();
  Ea(e);
  var a = e.parent;
  a !== null && a.first !== null && Oa(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.parent = e.fn = e.nodes_start = e.nodes_end = null;
}
function Oa(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function yn(e, t) {
  var n = [];
  $o(e, n, !0), Aa(n, () => {
    we(e), t && t();
  });
}
function Aa(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var i of e)
      i.out(r);
  } else
    t();
}
function $o(e, t, n) {
  if (!(e.f & kt)) {
    if (e.f ^= kt, e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || n) && t.push(s);
    for (var r = e.first; r !== null; ) {
      var i = r.next, o = (r.f & kr) !== 0 || (r.f & Tt) !== 0;
      $o(r, t, o ? n : !1), r = i;
    }
  }
}
function Xr(e) {
  Ca(e, !0);
}
function Ca(e, t) {
  if (e.f & kt) {
    Br(e) && fo(e), e.f ^= kt;
    for (var n = e.first; n !== null; ) {
      var r = n.next, i = (n.f & kr) !== 0 || (n.f & Tt) !== 0;
      Ca(n, i ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const o of e.transitions)
        (o.is_global || t) && o.in();
  }
}
let Zr = !1, Do = [];
function Ta() {
  Zr = !1;
  const e = Do.slice();
  Do = [], Qu(e);
}
function ts(e) {
  Zr || (Zr = !0, queueMicrotask(Ta)), Do.push(e);
}
function yc() {
  Zr && Ta();
}
function Ma(e) {
  throw new Error("lifecycle_outside_component");
}
const Ra = 0, wc = 1;
let zr = Ra, wn = !1, De = !1, es = !1;
function Cs(e) {
  De = e;
}
function Ts(e) {
  es = e;
}
let Ee = [], Ne = 0;
let Y = null;
function ge(e) {
  Y = e;
}
let j = null;
function Kt(e) {
  j = e;
}
let Lt = null;
function _c(e) {
  Lt = e;
}
let lt = null, yt = 0, le = null;
function bc(e) {
  le = e;
}
let Ia = 0, Se = !1, Z = null;
function Da() {
  return ++Ia;
}
function ns() {
  return Z !== null && Z.l === null;
}
function Br(e) {
  var s, a;
  var t = e.f;
  if (t & de)
    return !0;
  if (t & Nr) {
    var n = e.deps, r = (t & Me) !== 0;
    if (n !== null) {
      var i;
      if (t & Yr) {
        for (i = 0; i < n.length; i++)
          ((s = n[i]).reactions ?? (s.reactions = [])).push(e);
        e.f ^= Yr;
      }
      for (i = 0; i < n.length; i++) {
        var o = n[i];
        if (Br(
          /** @type {Derived} */
          o
        ) && _a(
          /** @type {Derived} */
          o
        ), r && j !== null && !Se && !((a = o == null ? void 0 : o.reactions) != null && a.includes(e)) && (o.reactions ?? (o.reactions = [])).push(e), o.version > e.version)
          return !0;
      }
    }
    r || Jt(e, xt);
  }
  return !1;
}
function xc(e, t, n) {
  throw e;
}
function Na(e) {
  var h;
  var t = lt, n = yt, r = le, i = Y, o = Se, s = Lt, a = Z, l = e.f;
  lt = /** @type {null | Value[]} */
  null, yt = 0, le = null, Y = l & (Tt | Dr) ? null : e, Se = !De && (l & Me) !== 0, Lt = null, Z = e.ctx;
  try {
    var f = (
      /** @type {Function} */
      (0, e.fn)()
    ), c = e.deps;
    if (lt !== null) {
      var d;
      if (_n(e, yt), c !== null && yt > 0)
        for (c.length = yt + lt.length, d = 0; d < lt.length; d++)
          c[yt + d] = lt[d];
      else
        e.deps = c = lt;
      if (!Se)
        for (d = yt; d < c.length; d++)
          ((h = c[d]).reactions ?? (h.reactions = [])).push(e);
    } else c !== null && yt < c.length && (_n(e, yt), c.length = yt);
    return f;
  } finally {
    lt = t, yt = n, le = r, Y = i, Se = o, Lt = s, Z = a;
  }
}
function Ec(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = n.indexOf(e);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = t.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  n === null && t.f & qt && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (lt === null || !lt.includes(t)) && (Jt(t, Nr), t.f & (Me | Yr) || (t.f ^= Yr), _n(
    /** @type {Derived} **/
    t,
    0
  ));
}
function _n(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      Ec(e, n[r]);
}
function fo(e) {
  var t = e.f;
  if (!(t & Fr)) {
    Jt(e, xt);
    var n = j;
    j = e;
    try {
      t & Xo ? pc(e) : Pa(e), Sa(e), Ea(e);
      var r = Na(e);
      e.teardown = typeof r == "function" ? r : null, e.version = Ia;
    } catch (i) {
      xc(
        /** @type {Error} */
        i
      );
    } finally {
      j = n;
    }
  }
}
function Fa() {
  Ne > 1e3 && (Ne = 0, sc()), Ne++;
}
function ka(e) {
  var t = e.length;
  if (t !== 0) {
    Fa();
    var n = De;
    De = !0;
    try {
      for (var r = 0; r < t; r++) {
        var i = e[r];
        i.f & xt || (i.f ^= xt);
        var o = [];
        La(i, o), Sc(o);
      }
    } finally {
      De = n;
    }
  }
}
function Sc(e) {
  var t = e.length;
  if (t !== 0)
    for (var n = 0; n < t; n++) {
      var r = e[n];
      !(r.f & (Fr | kt)) && Br(r) && (fo(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? Oa(r) : r.fn = null));
    }
}
function Pc() {
  if (wn = !1, Ne > 1001)
    return;
  const e = Ee;
  Ee = [], ka(e), wn || (Ne = 0);
}
function ho(e) {
  zr === Ra && (wn || (wn = !0, queueMicrotask(Pc)));
  for (var t = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (n & (Dr | Tt)) {
      if (!(n & xt)) return;
      t.f ^= xt;
    }
  }
  Ee.push(t);
}
function La(e, t) {
  var n = e.first, r = [];
  t: for (; n !== null; ) {
    var i = n.f, o = (i & Tt) !== 0, s = o && (i & xt) !== 0;
    if (!s && !(i & kt))
      if (i & co) {
        o ? n.f ^= xt : Br(n) && fo(n);
        var a = n.first;
        if (a !== null) {
          n = a;
          continue;
        }
      } else i & fa && r.push(n);
    var l = n.next;
    if (l === null) {
      let d = n.parent;
      for (; d !== null; ) {
        if (e === d)
          break t;
        var f = d.next;
        if (f !== null) {
          n = f;
          continue t;
        }
        d = d.parent;
      }
    }
    n = l;
  }
  for (var c = 0; c < r.length; c++)
    a = r[c], t.push(a), La(a, t);
}
function Ba(e) {
  var t = zr, n = Ee;
  try {
    Fa();
    const i = [];
    zr = wc, Ee = i, wn = !1, ka(n);
    var r = e == null ? void 0 : e();
    return yc(), (Ee.length > 0 || i.length > 0) && Ba(), Ne = 0, r;
  } finally {
    zr = t, Ee = n;
  }
}
async function rs() {
  await Promise.resolve(), Ba();
}
function v(e) {
  var a;
  var t = e.f, n = (t & qt) !== 0;
  if (n && t & Fr) {
    var r = wa(
      /** @type {Derived} */
      e
    );
    return Jo(
      /** @type {Derived} */
      e
    ), r;
  }
  if (Y !== null) {
    Lt !== null && Lt.includes(e) && lc();
    var i = Y.deps;
    lt === null && i !== null && i[yt] === e ? yt++ : lt === null ? lt = [e] : lt.push(e), le !== null && j !== null && j.f & xt && !(j.f & Tt) && le.includes(e) && (Jt(j, de), ho(j));
  } else if (n && /** @type {Derived} */
  e.deps === null) {
    var o = (
      /** @type {Derived} */
      e
    ), s = o.parent;
    s !== null && !((a = s.deriveds) != null && a.includes(o)) && (s.deriveds ?? (s.deriveds = [])).push(o);
  }
  return n && (o = /** @type {Derived} */
  e, Br(o) && _a(o)), e.v;
}
function ut(e) {
  const t = Y;
  try {
    return Y = null, e();
  } finally {
    Y = t;
  }
}
const Oc = ~(de | Nr | xt);
function Jt(e, t) {
  e.f = e.f & Oc | t;
}
function Ac(e) {
  return (
    /** @type {T} */
    go().get(e)
  );
}
function Cc(e, t) {
  return go().set(e, t), t;
}
function Tc(e) {
  return go().has(e);
}
function Mc() {
  return go();
}
function go(e) {
  return Z === null && Ma(), Z.c ?? (Z.c = new Map(Rc(Z) || void 0));
}
function Rc(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
function H(e, t = !1, n) {
  Z = {
    p: Z,
    c: null,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  }, t || (Z.l = {
    s: null,
    u: null,
    r1: [],
    r2: at(!1)
  });
}
function V(e) {
  const t = Z;
  if (t !== null) {
    const s = t.e;
    if (s !== null) {
      var n = j, r = Y;
      t.e = null;
      try {
        for (var i = 0; i < s.length; i++) {
          var o = s[i];
          Kt(o.effect), ge(o.reaction), xa(o.fn);
        }
      } finally {
        Kt(n), ge(r);
      }
    }
    Z = t.p, t.m = !0;
  }
  return (
    /** @type {T} */
    {}
  );
}
function T(e, t = null, n) {
  if (typeof e != "object" || e === null || Co in e)
    return e;
  const r = Io(e);
  if (r !== Zu && r !== Ju)
    return e;
  var i = /* @__PURE__ */ new Map(), o = Go(e), s = at(0);
  o && i.set("length", at(
    /** @type {any[]} */
    e.length
  ));
  var a;
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(l, f, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && uc();
        var d = i.get(f);
        return d === void 0 ? (d = at(c.value), i.set(f, d)) : A(d, T(c.value, a)), !0;
      },
      deleteProperty(l, f) {
        var c = i.get(f);
        if (c === void 0)
          f in l && i.set(f, at(vt));
        else {
          if (o && typeof f == "string") {
            var d = (
              /** @type {Source<number>} */
              i.get("length")
            ), h = Number(f);
            Number.isInteger(h) && h < d.v && A(d, h);
          }
          A(c, vt), Ms(s);
        }
        return !0;
      },
      get(l, f, c) {
        var g;
        if (f === Co)
          return e;
        var d = i.get(f), h = f in l;
        if (d === void 0 && (!h || (g = ce(l, f)) != null && g.writable) && (d = at(T(h ? l[f] : vt, a)), i.set(f, d)), d !== void 0) {
          var m = v(d);
          return m === vt ? void 0 : m;
        }
        return Reflect.get(l, f, c);
      },
      getOwnPropertyDescriptor(l, f) {
        var c = Reflect.getOwnPropertyDescriptor(l, f);
        if (c && "value" in c) {
          var d = i.get(f);
          d && (c.value = v(d));
        } else if (c === void 0) {
          var h = i.get(f), m = h == null ? void 0 : h.v;
          if (h !== void 0 && m !== vt)
            return {
              enumerable: !0,
              configurable: !0,
              value: m,
              writable: !0
            };
        }
        return c;
      },
      has(l, f) {
        var m;
        if (f === Co)
          return !0;
        var c = i.get(f), d = c !== void 0 && c.v !== vt || Reflect.has(l, f);
        if (c !== void 0 || j !== null && (!d || (m = ce(l, f)) != null && m.writable)) {
          c === void 0 && (c = at(d ? T(l[f], a) : vt), i.set(f, c));
          var h = v(c);
          if (h === vt)
            return !1;
        }
        return d;
      },
      set(l, f, c, d) {
        var E;
        var h = i.get(f), m = f in l;
        if (o && f === "length")
          for (var g = c; g < /** @type {Source<number>} */
          h.v; g += 1) {
            var p = i.get(g + "");
            p !== void 0 ? A(p, vt) : g in l && (p = at(vt), i.set(g + "", p));
          }
        h === void 0 ? (!m || (E = ce(l, f)) != null && E.writable) && (h = at(void 0), A(h, T(c, a)), i.set(f, h)) : (m = h.v !== vt, A(h, T(c, a)));
        var w = Reflect.getOwnPropertyDescriptor(l, f);
        if (w != null && w.set && w.set.call(d, c), !m) {
          if (o && typeof f == "string") {
            var b = (
              /** @type {Source<number>} */
              i.get("length")
            ), _ = Number(f);
            Number.isInteger(_) && _ >= b.v && A(b, _ + 1);
          }
          Ms(s);
        }
        return !0;
      },
      ownKeys(l) {
        v(s);
        var f = Reflect.ownKeys(l).filter((h) => {
          var m = i.get(h);
          return m === void 0 || m.v !== vt;
        });
        for (var [c, d] of i)
          d.v !== vt && !(c in l) && f.push(c);
        return f;
      },
      setPrototypeOf() {
        cc();
      }
    }
  );
}
function Ms(e, t = 1) {
  A(e, e.v + t);
}
var Rs, Ka, Wa;
function Ic() {
  if (Rs === void 0) {
    Rs = window;
    var e = Element.prototype, t = Node.prototype;
    Ka = ce(t, "firstChild").get, Wa = ce(t, "nextSibling").get, e.__click = void 0, e.__className = "", e.__attributes = null, e.__styles = null, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function is(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function rn(e) {
  return Ka.call(e);
}
// @__NO_SIDE_EFFECTS__
function vo(e) {
  return Wa.call(e);
}
function G(e, t) {
  return /* @__PURE__ */ rn(e);
}
function I(e, t) {
  {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ rn(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ vo(n) : n;
  }
}
function gt(e, t = 1, n = !1) {
  let r = e;
  for (; t--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ vo(r);
  return r;
}
function Dc(e) {
  e.textContent = "";
}
let os = !1;
const Ua = /* @__PURE__ */ new Set(), No = /* @__PURE__ */ new Set();
function Is(e, t, n, r) {
  function i(o) {
    if (r.capture || vn.call(t, o), !o.cancelBubble) {
      var s = Y, a = j;
      ge(null), Kt(null);
      try {
        return n.call(this, o);
      } finally {
        ge(s), Kt(a);
      }
    }
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? ts(() => {
    t.addEventListener(e, i, r);
  }) : t.addEventListener(e, i, r), i;
}
function Ha(e) {
  for (var t = 0; t < e.length; t++)
    Ua.add(e[t]);
  for (var n of No)
    n(e);
}
function vn(e) {
  var _;
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, i = ((_ = e.composedPath) == null ? void 0 : _.call(e)) || [], o = (
    /** @type {null | Element} */
    i[0] || e.target
  ), s = 0, a = e.__root;
  if (a) {
    var l = i.indexOf(a);
    if (l !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var f = i.indexOf(t);
    if (f === -1)
      return;
    l <= f && (s = l);
  }
  if (o = /** @type {Element} */
  i[s] || e.target, o !== t) {
    Yu(e, "currentTarget", {
      configurable: !0,
      get() {
        return o || n;
      }
    });
    var c = Y, d = j;
    ge(null), Kt(null);
    try {
      for (var h, m = []; o !== null; ) {
        var g = o.assignedSlot || o.parentNode || /** @type {any} */
        o.host || null;
        try {
          var p = o["__" + r];
          if (p !== void 0 && !/** @type {any} */
          o.disabled)
            if (Go(p)) {
              var [w, ...b] = p;
              w.apply(o, [e, ...b]);
            } else
              p.call(o, e);
        } catch (E) {
          h ? m.push(E) : h = E;
        }
        if (e.cancelBubble || g === t || g === null)
          break;
        o = g;
      }
      if (h) {
        for (let E of m)
          queueMicrotask(() => {
            throw E;
          });
        throw h;
      }
    } finally {
      e.__root = t, delete e.currentTarget, ge(c), Kt(d);
    }
  }
}
function Va(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function bn(e, t) {
  var n = (
    /** @type {Effect} */
    j
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function q(e, t) {
  var n = (t & qu) !== 0, r = (t & Gu) !== 0, i, o = !e.startsWith("<!>");
  return () => {
    i === void 0 && (i = Va(o ? e : "<!>" + e), n || (i = /** @type {Node} */
    /* @__PURE__ */ rn(i)));
    var s = (
      /** @type {TemplateNode} */
      r ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ rn(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      bn(a, l);
    } else
      bn(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function Nc(e, t, n = "svg") {
  var r = !e.startsWith("<!>"), i = `<${n}>${r ? e : "<!>" + e}</${n}>`, o;
  return () => {
    if (!o) {
      var s = (
        /** @type {DocumentFragment} */
        Va(i)
      ), a = (
        /** @type {Element} */
        /* @__PURE__ */ rn(s)
      );
      o = /** @type {Element} */
      /* @__PURE__ */ rn(a);
    }
    var l = (
      /** @type {TemplateNode} */
      o.cloneNode(!0)
    );
    return bn(l, l), l;
  };
}
function ja(e = "") {
  {
    var t = is(e + "");
    return bn(t, t), t;
  }
}
function k() {
  var e = document.createDocumentFragment(), t = document.createComment(""), n = is();
  return e.append(t, n), bn(t, n), e;
}
function O(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function Fc(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const kc = [
  "beforeinput",
  "click",
  "change",
  "dblclick",
  "contextmenu",
  "focusin",
  "focusout",
  "input",
  "keydown",
  "keyup",
  "mousedown",
  "mousemove",
  "mouseout",
  "mouseover",
  "mouseup",
  "pointerdown",
  "pointermove",
  "pointerout",
  "pointerover",
  "pointerup",
  "touchend",
  "touchmove",
  "touchstart"
];
function Lc(e) {
  return kc.includes(e);
}
const Bc = {
  // no `class: 'className'` because we handle that separately
  formnovalidate: "formNoValidate",
  ismap: "isMap",
  nomodule: "noModule",
  playsinline: "playsInline",
  readonly: "readOnly"
};
function Kc(e) {
  return e = e.toLowerCase(), Bc[e] ?? e;
}
const Wc = ["touchstart", "touchmove"];
function Uc(e) {
  return Wc.includes(e);
}
function za(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = n == null ? "" : n + "");
}
function mo(e, t) {
  return Hc(e, t);
}
const Re = /* @__PURE__ */ new Map();
function Hc(e, { target: t, anchor: n, props: r = {}, events: i, context: o, intro: s = !0 }) {
  Ic();
  var a = /* @__PURE__ */ new Set(), l = (d) => {
    for (var h = 0; h < d.length; h++) {
      var m = d[h];
      if (!a.has(m)) {
        a.add(m);
        var g = Uc(m);
        t.addEventListener(m, vn, { passive: g });
        var p = Re.get(m);
        p === void 0 ? (document.addEventListener(m, vn, { passive: g }), Re.set(m, 1)) : Re.set(m, p + 1);
      }
    }
  };
  l(Yo(Ua)), No.add(l);
  var f = void 0, c = Qo(() => {
    var d = n ?? t.appendChild(is());
    return he(() => {
      if (o) {
        H({});
        var h = (
          /** @type {ComponentContext} */
          Z
        );
        h.c = o;
      }
      i && (r.$$events = i), f = e(d, r) || {}, o && V();
    }), () => {
      var g;
      for (var h of a) {
        t.removeEventListener(h, vn);
        var m = (
          /** @type {number} */
          Re.get(h)
        );
        --m === 0 ? (document.removeEventListener(h, vn), Re.delete(h)) : Re.set(h, m);
      }
      No.delete(l), Fo.delete(f), d !== n && ((g = d.parentNode) == null || g.removeChild(d));
    };
  });
  return Fo.set(f, c), f;
}
let Fo = /* @__PURE__ */ new WeakMap();
function Ds(e) {
  const t = Fo.get(e);
  t && t();
}
function ot(e, t, n, r = null, i = !1) {
  var o = e, s = null, a = null, l = null, f = i ? kr : 0;
  an(() => {
    l !== (l = !!t()) && (l ? (s ? Xr(s) : s = he(() => n(o)), a && yn(a, () => {
      a = null;
    })) : (a ? Xr(a) : r && (a = he(() => r(o))), s && yn(s, () => {
      s = null;
    })));
  }, f);
}
function Vc(e, t, n) {
  var r = e, i = vt, o;
  an(() => {
    ga(i, i = t()) && (o && yn(o), o = he(() => n(r)));
  });
}
let To = null;
function jc(e, t, n, r) {
  for (var i = [], o = t.length, s = 0; s < o; s++)
    $o(t[s].e, i, !0);
  var a = o > 0 && i.length === 0 && n !== null;
  if (a) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    Dc(l), l.append(
      /** @type {Element} */
      n
    ), r.clear(), ne(e, t[0].prev, t[o - 1].next);
  }
  Aa(i, () => {
    for (var f = 0; f < o; f++) {
      var c = t[f];
      a || (r.delete(c.k), ne(e, c.prev, c.next)), we(c.e, !a);
    }
  });
}
function zc(e, t, n, r, i, o = null) {
  var s = e, a = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, l = null, f = !1;
  an(() => {
    var c = n(), d = Go(c) ? c : c == null ? [] : Yo(c), h = d.length;
    if (!(f && h === 0)) {
      f = h === 0;
      {
        var m = (
          /** @type {Effect} */
          Y
        );
        qc(d, a, s, i, t, (m.f & kt) !== 0, r);
      }
      o !== null && (h === 0 ? l ? Xr(l) : l = he(() => o(s)) : l !== null && yn(l, () => {
        l = null;
      })), n();
    }
  });
}
function qc(e, t, n, r, i, o, s) {
  var a = e.length, l = t.items, f = t.first, c = f, d, h = null, m = [], g = [], p, w, b, _;
  for (_ = 0; _ < a; _ += 1) {
    if (p = e[_], w = s(p, _), b = l.get(w), b === void 0) {
      var E = c ? (
        /** @type {TemplateNode} */
        c.e.nodes_start
      ) : n;
      h = Yc(
        E,
        t,
        h,
        h === null ? t.first : h.next,
        p,
        w,
        _,
        r,
        i
      ), l.set(w, h), m = [], g = [], c = h.next;
      continue;
    }
    if (Gc(b, p, _), b.e.f & kt && Xr(b.e), b !== c) {
      if (d !== void 0 && d.has(b)) {
        if (m.length < g.length) {
          var M = g[0], P;
          h = M.prev;
          var D = m[0], N = m[m.length - 1];
          for (P = 0; P < m.length; P += 1)
            Ns(m[P], M, n);
          for (P = 0; P < g.length; P += 1)
            d.delete(g[P]);
          ne(t, D.prev, N.next), ne(t, h, D), ne(t, N, M), c = M, h = N, _ -= 1, m = [], g = [];
        } else
          d.delete(b), Ns(b, c, n), ne(t, b.prev, b.next), ne(t, b, h === null ? t.first : h.next), ne(t, h, b), h = b;
        continue;
      }
      for (m = [], g = []; c !== null && c.k !== w; )
        (o || !(c.e.f & kt)) && (d ?? (d = /* @__PURE__ */ new Set())).add(c), g.push(c), c = c.next;
      if (c === null)
        continue;
      b = c;
    }
    m.push(b), h = b, c = b.next;
  }
  if (c !== null || d !== void 0) {
    for (var B = d === void 0 ? [] : Yo(d); c !== null; )
      (o || !(c.e.f & kt)) && B.push(c), c = c.next;
    var z = B.length;
    if (z > 0) {
      var W = null;
      jc(t, B, W, l);
    }
  }
  j.first = t.first && t.first.e, j.last = h && h.e;
}
function Gc(e, t, n, r) {
  ma(e.v, t), e.i = n;
}
function Yc(e, t, n, r, i, o, s, a, l) {
  var f = To;
  try {
    var c = (l & Bu) !== 0, d = (l & Wu) === 0, h = c ? d ? /* @__PURE__ */ va(i) : at(i) : i, m = l & Ku ? at(s) : s, g = {
      i: m,
      v: h,
      k: o,
      a: null,
      // @ts-expect-error
      e: null,
      prev: n,
      next: r
    };
    return To = g, g.e = he(() => a(e, h, m), os), g.e.prev = n && n.e, g.e.next = r && r.e, n === null ? t.first = g : (n.next = g, n.e.next = g.e), r !== null && (r.prev = g, r.e.prev = g.e), g;
  } finally {
    To = f;
  }
}
function Ns(e, t, n) {
  for (var r = e.next ? (
    /** @type {TemplateNode} */
    e.next.e.nodes_start
  ) : n, i = t ? (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ) : n, o = (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ); o !== r; ) {
    var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ vo(o)
    );
    i.before(o), o = s;
  }
}
function ne(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function K(e, t, ...n) {
  var r = e, i = Q, o;
  an(() => {
    i !== (i = t()) && (o && (we(o), o = null), o = he(() => (
      /** @type {SnippetFn} */
      i(r, ...n)
    )));
  }, kr);
}
function it(e, t, n) {
  var r = e, i, o;
  an(() => {
    i !== (i = t()) && (o && (yn(o), o = null), i && (o = he(() => n(r, i))));
  }, kr);
}
function Xc(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, ts(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function Zc(e, t) {
  var n = e.__attributes ?? (e.__attributes = {});
  n.value === (n.value = t) || // @ts-expect-error
  // `progress` elements always need their value set when its `0`
  e.value === t && (t !== 0 || e.nodeName !== "PROGRESS") || (e.value = t);
}
function po(e, t, n, r) {
  var i = e.__attributes ?? (e.__attributes = {});
  i[t] !== (i[t] = n) && (t === "style" && "__styles" in e && (e.__styles = {}), t === "loading" && (e[nc] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && qa(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Gt(e, t, n, r, i = !1, o = !1, s = !1) {
  var a = t || {}, l = e.tagName === "OPTION";
  for (var f in t)
    f in n || (n[f] = null);
  var c = qa(e), d = (
    /** @type {Record<string, unknown>} **/
    e.__attributes ?? (e.__attributes = {})
  ), h = [];
  for (const _ in n) {
    let E = n[_];
    if (l && _ === "value" && E == null) {
      e.value = e.__value = "", a[_] = E;
      continue;
    }
    var m = a[_];
    if (E !== m) {
      a[_] = E;
      var g = _[0] + _[1];
      if (g !== "$$") {
        if (g === "on") {
          const M = {}, P = "$$" + _;
          let D = _.slice(2);
          var p = Lc(D);
          if (Fc(D) && (D = D.slice(0, -7), M.capture = !0), !p && m) {
            if (E != null) continue;
            e.removeEventListener(D, a[P], M), a[P] = null;
          }
          if (E != null)
            if (p)
              e[`__${D}`] = E, Ha([D]);
            else {
              let N = function(B) {
                a[_].call(this, B);
              };
              var b = N;
              t ? a[P] = Is(D, e, N, M) : h.push([
                _,
                E,
                () => a[P] = Is(D, e, N, M)
              ]);
            }
        } else if (_ === "style" && E != null)
          e.style.cssText = E + "";
        else if (_ === "autofocus")
          Xc(
            /** @type {HTMLElement} */
            e,
            !!E
          );
        else if (_ === "__value" || _ === "value" && E != null)
          e.value = e[_] = e.__value = E;
        else {
          var w = _;
          i || (w = Kc(w)), E == null && !o ? (d[_] = null, e.removeAttribute(_)) : c.includes(w) && (o || typeof E != "string") ? e[w] = E : typeof E != "function" && po(e, w, E);
        }
        _ === "style" && "__styles" in e && (e.__styles = {});
      }
    }
  }
  return t || ts(() => {
    if (e.isConnected)
      for (const [_, E, M] of h)
        a[_] === E && M();
  }), a;
}
var Fs = /* @__PURE__ */ new Map();
function qa(e) {
  var t = Fs.get(e.nodeName);
  if (t) return t;
  Fs.set(e.nodeName, t = []);
  for (var n, r = Io(e), i = Element.prototype; i !== r; ) {
    n = Xu(r);
    for (var o in n)
      n[o].set && t.push(o);
    r = Io(r);
  }
  return t;
}
function Jc(e, t) {
  var n = e.__className, r = Ga(t);
  (n !== r || os) && (r === "" ? e.removeAttribute("class") : e.setAttribute("class", r), e.__className = r);
}
function ss(e, t) {
  var n = e.__className, r = Ga(t);
  (n !== r || os) && (t == null ? e.removeAttribute("class") : e.className = r, e.__className = r);
}
function Ga(e) {
  return e ?? "";
}
function Qc(e) {
  Z === null && Ma(), Z.l !== null ? $c(Z).m.push(e) : U(() => {
    const t = ut(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function $c(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ?? (t.u = { a: [], b: [], m: [] });
}
let Wr = !1;
function tl(e) {
  var t = Wr;
  try {
    return Wr = !1, [e(), Wr];
  } finally {
    Wr = t;
  }
}
const el = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return e.props[t];
  },
  set(e, t) {
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    if (!e.exclude.includes(t) && t in e.props)
      return {
        enumerable: !0,
        configurable: !0,
        value: e.props[t]
      };
  },
  has(e, t) {
    return e.exclude.includes(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
  }
};
// @__NO_SIDE_EFFECTS__
function Mt(e, t, n) {
  return new Proxy(
    { props: e, exclude: t },
    el
  );
}
const nl = {
  get(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (fn(r) && (r = r()), typeof r == "object" && r !== null && t in r) return r[t];
    }
  },
  set(e, t, n) {
    let r = e.props.length;
    for (; r--; ) {
      let i = e.props[r];
      fn(i) && (i = i());
      const o = ce(i, t);
      if (o && o.set)
        return o.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (fn(r) && (r = r()), typeof r == "object" && r !== null && t in r) {
        const i = ce(r, t);
        return i && !i.configurable && (i.configurable = !0), i;
      }
    }
  },
  has(e, t) {
    for (let n of e.props)
      if (fn(n) && (n = n()), n != null && t in n) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let n of e.props) {
      fn(n) && (n = n());
      for (const r in n)
        t.includes(r) || t.push(r);
    }
    return t;
  }
};
function Ot(...e) {
  return new Proxy({ props: e }, nl);
}
function ks(e) {
  for (var t = j, n = j; t !== null && !(t.f & (Tt | Dr)); )
    t = t.parent;
  try {
    return Kt(t), e();
  } finally {
    Kt(n);
  }
}
function S(e, t, n, r) {
  var D;
  var i = (n & Uu) !== 0, o = (n & Hu) !== 0, s = (n & ju) !== 0, a = (n & zu) !== 0, l = !1, f;
  s ? [f, l] = tl(() => (
    /** @type {V} */
    e[t]
  )) : f = /** @type {V} */
  e[t];
  var c = (D = ce(e, t)) == null ? void 0 : D.set, d = (
    /** @type {V} */
    r
  ), h = !0, m = !1, g = () => (m = !0, h && (h = !1, a ? d = ut(
    /** @type {() => V} */
    r
  ) : d = /** @type {V} */
  r), d);
  f === void 0 && r !== void 0 && (c && o && ac(), f = g(), c && c(f));
  var p;
  if (o)
    p = () => {
      var N = (
        /** @type {V} */
        e[t]
      );
      return N === void 0 ? g() : (h = !0, m = !1, N);
    };
  else {
    var w = ks(
      () => (i ? C : lo)(() => (
        /** @type {V} */
        e[t]
      ))
    );
    w.f |= tc, p = () => {
      var N = v(w);
      return N !== void 0 && (d = /** @type {V} */
      void 0), N === void 0 ? d : N;
    };
  }
  if (!(n & Vu))
    return p;
  if (c) {
    var b = e.$$legacy;
    return function(N, B) {
      return arguments.length > 0 ? ((!o || !B || b || l) && c(B ? p() : N), N) : p();
    };
  }
  var _ = !1, E = !1, M = /* @__PURE__ */ va(f), P = ks(
    () => /* @__PURE__ */ C(() => {
      var N = p(), B = v(M);
      return _ ? (_ = !1, E = !0, B) : (E = !1, M.v = N);
    })
  );
  return i || (P.equals = Zo), function(N, B) {
    if (arguments.length > 0) {
      const z = B ? v(P) : o && s ? T(N) : N;
      return P.equals(z) || (_ = !0, A(M, z), m && d !== void 0 && (d = z), ut(() => v(P))), N;
    }
    return v(P);
  };
}
function rl(e) {
  return typeof e == "function";
}
function il(e) {
  return e !== null && typeof e == "object";
}
const xn = Symbol("box"), as = Symbol("is-writable");
function ol(e) {
  return il(e) && xn in e;
}
function sl(e) {
  return x.isBox(e) && as in e;
}
function x(e) {
  let t = L(T(e));
  return {
    [xn]: !0,
    [as]: !0,
    get current() {
      return v(t);
    },
    set current(n) {
      A(t, T(n));
    }
  };
}
function al(e, t) {
  const n = /* @__PURE__ */ C(e);
  return t ? {
    [xn]: !0,
    [as]: !0,
    get current() {
      return v(n);
    },
    set current(r) {
      t(r);
    }
  } : {
    [xn]: !0,
    get current() {
      return e();
    }
  };
}
function ul(e) {
  return x.isBox(e) ? e : rl(e) ? x.with(e) : x(e);
}
function cl(e) {
  return Object.entries(e).reduce(
    (t, [n, r]) => x.isBox(r) ? (x.isWritableBox(r) ? Object.defineProperty(t, n, {
      get() {
        return r.current;
      },
      set(i) {
        r.current = i;
      }
    }) : Object.defineProperty(t, n, {
      get() {
        return r.current;
      }
    }), t) : Object.assign(t, { [n]: r }),
    {}
  );
}
function ll(e) {
  return x.isWritableBox(e) ? {
    [xn]: !0,
    get current() {
      return e.current;
    }
  } : e;
}
x.from = ul;
x.with = al;
x.flatten = cl;
x.readonly = ll;
x.isBox = ol;
x.isWritableBox = sl;
function Ya(...e) {
  return function(t) {
    var n;
    for (const r of e)
      if (r) {
        if (t.defaultPrevented)
          return;
        typeof r == "function" ? r.call(this, t) : (n = r.current) == null || n.call(this, t);
      }
  };
}
var Ls = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Xa = {}, Bs = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, fl = /\n/g, dl = /^\s*/, hl = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, gl = /^:\s*/, vl = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, ml = /^[;\s]*/, pl = /^\s+|\s+$/g, yl = `
`, Ks = "/", Ws = "*", xe = "", wl = "comment", _l = "declaration", bl = function(e, t) {
  if (typeof e != "string")
    throw new TypeError("First argument must be a string");
  if (!e) return [];
  t = t || {};
  var n = 1, r = 1;
  function i(g) {
    var p = g.match(fl);
    p && (n += p.length);
    var w = g.lastIndexOf(yl);
    r = ~w ? g.length - w : r + g.length;
  }
  function o() {
    var g = { line: n, column: r };
    return function(p) {
      return p.position = new s(g), f(), p;
    };
  }
  function s(g) {
    this.start = g, this.end = { line: n, column: r }, this.source = t.source;
  }
  s.prototype.content = e;
  function a(g) {
    var p = new Error(
      t.source + ":" + n + ":" + r + ": " + g
    );
    if (p.reason = g, p.filename = t.source, p.line = n, p.column = r, p.source = e, !t.silent) throw p;
  }
  function l(g) {
    var p = g.exec(e);
    if (p) {
      var w = p[0];
      return i(w), e = e.slice(w.length), p;
    }
  }
  function f() {
    l(dl);
  }
  function c(g) {
    var p;
    for (g = g || []; p = d(); )
      p !== !1 && g.push(p);
    return g;
  }
  function d() {
    var g = o();
    if (!(Ks != e.charAt(0) || Ws != e.charAt(1))) {
      for (var p = 2; xe != e.charAt(p) && (Ws != e.charAt(p) || Ks != e.charAt(p + 1)); )
        ++p;
      if (p += 2, xe === e.charAt(p - 1))
        return a("End of comment missing");
      var w = e.slice(2, p - 2);
      return r += 2, i(w), e = e.slice(p), r += 2, g({
        type: wl,
        comment: w
      });
    }
  }
  function h() {
    var g = o(), p = l(hl);
    if (p) {
      if (d(), !l(gl)) return a("property missing ':'");
      var w = l(vl), b = g({
        type: _l,
        property: Us(p[0].replace(Bs, xe)),
        value: w ? Us(w[0].replace(Bs, xe)) : xe
      });
      return l(ml), b;
    }
  }
  function m() {
    var g = [];
    c(g);
    for (var p; p = h(); )
      p !== !1 && (g.push(p), c(g));
    return g;
  }
  return f(), m();
};
function Us(e) {
  return e ? e.replace(pl, xe) : xe;
}
var xl = Ls && Ls.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Xa, "__esModule", { value: !0 });
var Hs = Xa.default = Sl, El = xl(bl);
function Sl(e, t) {
  var n = null;
  if (!e || typeof e != "string")
    return n;
  var r = (0, El.default)(e), i = typeof t == "function";
  return r.forEach(function(o) {
    if (o.type === "declaration") {
      var s = o.property, a = o.value;
      i ? t(s, a, o) : a && (n = n || {}, n[s] = a);
    }
  }), n;
}
const Pl = Hs.default || Hs, Ol = /\d/, Al = ["-", "_", "/", "."];
function Cl(e = "") {
  if (!Ol.test(e))
    return e !== e.toLowerCase();
}
function Tl(e) {
  const t = [];
  let n = "", r, i;
  for (const o of e) {
    const s = Al.includes(o);
    if (s === !0) {
      t.push(n), n = "", r = void 0;
      continue;
    }
    const a = Cl(o);
    if (i === !1) {
      if (r === !1 && a === !0) {
        t.push(n), n = o, r = a;
        continue;
      }
      if (r === !0 && a === !1 && n.length > 1) {
        const l = n.at(-1);
        t.push(n.slice(0, Math.max(0, n.length - 1))), n = l + o, r = a;
        continue;
      }
    }
    n += o, r = a, i = s;
  }
  return t.push(n), t;
}
function Za(e) {
  return e ? Tl(e).map((t) => Rl(t)).join("") : "";
}
function Ml(e) {
  return Il(Za(e || ""));
}
function Rl(e) {
  return e ? e[0].toUpperCase() + e.slice(1) : "";
}
function Il(e) {
  return e ? e[0].toLowerCase() + e.slice(1) : "";
}
function mn(e) {
  if (!e)
    return {};
  const t = {};
  function n(r, i) {
    if (r.startsWith("-moz-") || r.startsWith("-webkit-") || r.startsWith("-ms-") || r.startsWith("-o-")) {
      t[Za(r)] = i;
      return;
    }
    if (r.startsWith("--")) {
      t[r] = i;
      return;
    }
    t[Ml(r)] = i;
  }
  return Pl(e, n), t;
}
function Fe(...e) {
  return (...t) => {
    for (const n of e)
      typeof n == "function" && n(...t);
  };
}
function Ja(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (n = Ja(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Dl() {
  for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = Ja(e)) && (r && (r += " "), r += t);
  return r;
}
function Nl(e, t) {
  const n = RegExp(e, "g");
  return (r) => {
    if (typeof r != "string")
      throw new TypeError(`expected an argument of type string, but got ${typeof r}`);
    return r.match(n) ? r.replace(n, t) : r;
  };
}
const Fl = Nl(/[A-Z]/, (e) => `-${e.toLowerCase()}`);
function kl(e) {
  if (!e || typeof e != "object" || Array.isArray(e))
    throw new TypeError(`expected an argument of type object, but got ${typeof e}`);
  return Object.keys(e).map((t) => `${Fl(t)}: ${e[t]};`).join(`
`);
}
function us(e = {}) {
  return kl(e).replace(`
`, " ");
}
const Ll = {
  position: "absolute",
  width: "1px",
  height: "1px",
  padding: "0",
  margin: "-1px",
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  borderWidth: "0",
  transform: "translateX(-100%)"
};
us(Ll);
function Bl(e) {
  var t;
  return e.length > 2 && e.startsWith("on") && e[2] === ((t = e[2]) == null ? void 0 : t.toLowerCase());
}
function ft(...e) {
  const t = { ...e[0] };
  for (let n = 1; n < e.length; n++) {
    const r = e[n];
    for (const i in r) {
      const o = t[i], s = r[i], a = typeof o == "function", l = typeof s == "function";
      if (a && Bl(i)) {
        const f = o, c = s;
        t[i] = Ya(f, c);
      } else if (a && l)
        t[i] = Fe(o, s);
      else if (i === "class" && typeof o == "string" && typeof s == "string")
        t[i] = Dl(o, s);
      else if (i === "style") {
        const f = typeof o == "object", c = typeof s == "object", d = typeof o == "string", h = typeof s == "string";
        if (f && c)
          t[i] = { ...o, ...s };
        else if (f && h) {
          const m = mn(s);
          t[i] = { ...o, ...m };
        } else if (d && c) {
          const m = mn(o);
          t[i] = { ...m, ...s };
        } else if (d && h) {
          const m = mn(o), g = mn(s);
          t[i] = { ...m, ...g };
        } else f ? t[i] = o : c && (t[i] = s);
      } else
        t[i] = s !== void 0 ? s : o;
    }
  }
  return typeof t.style == "object" && (t.style = us(t.style).replaceAll(`
`, " ")), t.hidden !== !0 && (t.hidden = void 0), t.disabled !== !0 && (t.disabled = void 0), t;
}
function Et({
  id: e,
  ref: t,
  deps: n = () => !0,
  onRefChange: r = () => {
  },
  getRootNode: i = () => typeof document < "u" ? document : void 0
}) {
  const o = /* @__PURE__ */ C(() => n()), s = /* @__PURE__ */ C(() => i());
  U(() => (e.current, v(o), v(s), ut(() => {
    var l;
    const a = (l = v(s)) == null ? void 0 : l.getElementById(e.current);
    a ? t.current = a : t.current = null, r(t.current);
  }))), U(() => () => {
    t.current = null, r(null);
  });
}
function Qa(e) {
  U(() => () => {
    e();
  });
}
function $a(e, t) {
  setTimeout(t, e);
}
function fe(e) {
  rs().then(e);
}
function cs(e) {
  return e ? "open" : "closed";
}
function Kl(e) {
  return e ? "true" : "false";
}
function Wl(e) {
  return e ? "true" : "false";
}
function tu(e) {
  return e ? "" : void 0;
}
const En = "ArrowDown", ls = "ArrowLeft", fs = "ArrowRight", Jr = "ArrowUp", eu = "End", ds = "Enter", Ul = "Escape", nu = "Home", Hl = "PageDown", Vl = "PageUp", yo = " ", ru = "Tab";
function jl(e) {
  return window.getComputedStyle(e).getPropertyValue("direction");
}
function zl(e = "ltr", t = "horizontal") {
  return {
    horizontal: e === "rtl" ? ls : fs,
    vertical: En
  }[t];
}
function ql(e = "ltr", t = "horizontal") {
  return {
    horizontal: e === "rtl" ? fs : ls,
    vertical: Jr
  }[t];
}
function Gl(e = "ltr", t = "horizontal") {
  return ["ltr", "rtl"].includes(e) || (e = "ltr"), ["horizontal", "vertical"].includes(t) || (t = "horizontal"), {
    nextKey: zl(e, t),
    prevKey: ql(e, t)
  };
}
const wo = typeof document < "u", Vs = Yl();
function Yl() {
  var e, t;
  return wo && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && // eslint-disable-next-line regexp/no-unused-capturing-group
  (/iP(ad|hone|od)/.test(window.navigator.userAgent) || // The new iPad Pro Gen3 does not identify itself as iPad, but as Macintosh.
  ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function Yt(e) {
  return e instanceof HTMLElement;
}
function pn(e) {
  return e instanceof Element;
}
function Xl(e) {
  return e instanceof Element || e instanceof SVGElement;
}
function Zl(e) {
  return e !== null;
}
function Jl(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Ql(e, t) {
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  for (; e; ) {
    if (t !== void 0 && e === t)
      return !1;
    if (getComputedStyle(e).display === "none")
      return !0;
    e = e.parentElement;
  }
  return !1;
}
function $l(e) {
  const t = e.currentTabStopId ? e.currentTabStopId : x(null);
  function n() {
    if (!wo) return [];
    const s = document.getElementById(e.rootNodeId.current);
    return s ? e.candidateSelector ? Array.from(s.querySelectorAll(e.candidateSelector)) : Array.from(s.querySelectorAll(`[${e.candidateAttr}]:not([data-disabled])`)) : [];
  }
  function r() {
    var a;
    const s = n();
    s.length && ((a = s[0]) == null || a.focus());
  }
  function i(s, a, l = !1) {
    var E;
    const f = document.getElementById(e.rootNodeId.current);
    if (!f || !s) return;
    const c = n();
    if (!c.length) return;
    const d = c.indexOf(s), h = jl(f), { nextKey: m, prevKey: g } = Gl(h, e.orientation.current), p = e.loop.current, w = {
      [m]: d + 1,
      [g]: d - 1,
      [nu]: 0,
      [eu]: c.length - 1
    };
    if (l) {
      const M = m === En ? fs : En, P = g === Jr ? ls : Jr;
      w[M] = d + 1, w[P] = d - 1;
    }
    let b = w[a.key];
    if (b === void 0) return;
    a.preventDefault(), b < 0 && p ? b = c.length - 1 : b === c.length && p && (b = 0);
    const _ = c[b];
    if (_)
      return _.focus(), t.current = _.id, (E = e.onCandidateFocus) == null || E.call(e, _), _;
  }
  function o(s) {
    const a = n(), l = t.current !== null;
    return s && !l && a[0] === s ? (t.current = s.id, 0) : (s == null ? void 0 : s.id) === t.current ? 0 : -1;
  }
  return {
    setCurrentTabStopId(s) {
      t.current = s;
    },
    getTabIndex: o,
    handleKeydown: i,
    focusFirstCandidate: r,
    currentTabStopId: t
  };
}
function js(e, t) {
  return Cc(e, t);
}
function tf(e, t) {
  const n = e, r = typeof e == "symbol" ? e.description : e;
  if (!Tc(n)) {
    if (t === void 0)
      throw new Error(`Missing context dependency: ${r} and no fallback was provided.`);
    return t;
  }
  return Ac(e);
}
function ef(e, t) {
  return t !== void 0 ? t : typeof e == "string" && t === void 0 ? `${e}Context` : Array.isArray(e) && t === void 0 ? `${e[0]}Context` : t !== void 0 ? t : `${e}Context`;
}
function _e(e, t, n = !0) {
  const r = ef(e, t), i = Symbol.for(`bits-ui.${r}`), o = r;
  function s(l) {
    const f = tf(n ? i : o, l);
    if (f === void 0)
      throw new Error(`Context \`${r}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(", ")}` : `\`${e}\``}`);
    return f;
  }
  function a(l) {
    return js(n ? i : o, l);
  }
  return [a, s];
}
let zs = 0;
function Rt(e = "bits") {
  return zs++, `${e}-${zs}`;
}
function et() {
}
function nf(e, t) {
  const n = x(e);
  function r(o) {
    return t[n.current][o] ?? n.current;
  }
  return { state: n, dispatch: (o) => {
    n.current = r(o);
  } };
}
function qs(e, t, n = {}) {
  let r = L(T(e.current)), i = !1;
  return Qo(() => {
    vc(() => {
      v(r) === e.current || !n.immediate || n.once && i || (t(e.current, ut(() => v(r))), ut(() => A(r, T(e.current))), i = !0);
    }), U(() => {
      v(r) === e.current || n.immediate || n.once && i || (t(e.current, ut(() => v(r))), ut(() => A(r, T(e.current))), i = !0);
    });
  });
}
function rf(e, t) {
  let n = L(T({})), r = L("none");
  const i = e.current ? "mounted" : "unmounted";
  let o = L(null);
  U(() => {
    t.current && e.current && fe(() => {
      A(o, T(document.getElementById(t.current)));
    });
  });
  const { state: s, dispatch: a } = nf(i, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
    unmounted: { MOUNT: "mounted" }
  });
  qs(e, (d, h) => {
    if (v(o) || A(o, T(document.getElementById(t.current))), !v(o) || !(d !== h)) return;
    const g = v(r), p = Ur(v(o));
    d ? a("MOUNT") : p === "none" || v(n).display === "none" ? a("UNMOUNT") : a(h && g !== p ? "ANIMATION_OUT" : "UNMOUNT");
  });
  function l(d) {
    if (v(o) || A(o, T(document.getElementById(t.current))), !v(o)) return;
    const h = Ur(v(o)), m = h.includes(d.animationName) || h === "none";
    d.target === v(o) && m && a("ANIMATION_END");
  }
  function f(d) {
    v(o) || A(o, T(document.getElementById(t.current))), v(o) && d.target === v(o) && A(r, T(Ur(v(o))));
  }
  qs(s, () => {
    if (v(o) || A(o, T(document.getElementById(t.current))), !v(o)) return;
    const d = Ur(v(o));
    A(r, T(s.current === "mounted" ? d : "none"));
  }), U(() => {
    if (v(o))
      return A(n, T(getComputedStyle(v(o)))), v(o).addEventListener("animationstart", f), v(o).addEventListener("animationcancel", l), v(o).addEventListener("animationend", l), () => {
        var d, h, m;
        (d = v(o)) == null || d.removeEventListener("animationstart", f), (h = v(o)) == null || h.removeEventListener("animationcancel", l), (m = v(o)) == null || m.removeEventListener("animationend", l);
      };
  });
  const c = /* @__PURE__ */ C(() => ["mounted", "unmountSuspended"].includes(s.current));
  return {
    get current() {
      return v(c);
    }
  };
}
function Ur(e) {
  return e && getComputedStyle(e).animationName || "none";
}
function hs(e, t) {
  H(t, !0);
  const n = rf(x.with(() => t.present), x.with(() => t.id));
  var r = k(), i = I(r);
  ot(i, () => t.forceMount || t.present || n.current, (o) => {
    var s = k(), a = I(s);
    K(a, () => t.presence ?? Q, () => ({ present: n })), O(o, s);
  }), O(e, r), V();
}
function of(e) {
  return {
    content: `data-${e}-content`,
    trigger: `data-${e}-trigger`,
    overlay: `data-${e}-overlay`,
    title: `data-${e}-title`,
    description: `data-${e}-description`,
    close: `data-${e}-close`,
    cancel: `data-${e}-cancel`,
    action: `data-${e}-action`
  };
}
var On, An, Cn, Tn, Mn, Rn, In, Dn, Nn, ni, ri;
class sf {
  constructor(t) {
    F(this, "open");
    F(this, "variant");
    y(this, On, L(null));
    y(this, An, L(null));
    y(this, Cn, L(null));
    y(this, Tn, L(null));
    y(this, Mn, L(void 0));
    y(this, Rn, L(void 0));
    y(this, In, L(void 0));
    y(this, Dn, L(void 0));
    y(this, Nn, L(null));
    y(this, ni, /* @__PURE__ */ C(() => of(this.variant.current)));
    F(this, "handleOpen", () => {
      this.open.current || (this.open.current = !0);
    });
    F(this, "handleClose", () => {
      this.open.current && (this.open.current = !1);
    });
    y(this, ri, /* @__PURE__ */ C(() => ({
      "data-state": cs(this.open.current)
    })));
    this.open = t.open, this.variant = t.variant;
  }
  get triggerNode() {
    return v(u(this, On));
  }
  set triggerNode(t) {
    A(u(this, On), T(t));
  }
  get titleNode() {
    return v(u(this, An));
  }
  set titleNode(t) {
    A(u(this, An), T(t));
  }
  get contentNode() {
    return v(u(this, Cn));
  }
  set contentNode(t) {
    A(u(this, Cn), T(t));
  }
  get descriptionNode() {
    return v(u(this, Tn));
  }
  set descriptionNode(t) {
    A(u(this, Tn), T(t));
  }
  get contentId() {
    return v(u(this, Mn));
  }
  set contentId(t) {
    A(u(this, Mn), T(t));
  }
  get titleId() {
    return v(u(this, Rn));
  }
  set titleId(t) {
    A(u(this, Rn), T(t));
  }
  get triggerId() {
    return v(u(this, In));
  }
  set triggerId(t) {
    A(u(this, In), T(t));
  }
  get descriptionId() {
    return v(u(this, Dn));
  }
  set descriptionId(t) {
    A(u(this, Dn), T(t));
  }
  get cancelNode() {
    return v(u(this, Nn));
  }
  set cancelNode(t) {
    A(u(this, Nn), T(t));
  }
  get attrs() {
    return v(u(this, ni));
  }
  get sharedProps() {
    return v(u(this, ri));
  }
}
On = new WeakMap(), An = new WeakMap(), Cn = new WeakMap(), Tn = new WeakMap(), Mn = new WeakMap(), Rn = new WeakMap(), In = new WeakMap(), Dn = new WeakMap(), Nn = new WeakMap(), ni = new WeakMap(), ri = new WeakMap();
var Le, Fn, Dt, kn, Pe, ii, oi, si, ai, ui;
class af {
  constructor(t, n) {
    y(this, Le);
    y(this, Fn);
    y(this, Dt);
    y(this, kn);
    y(this, Pe);
    y(this, ii, /* @__PURE__ */ C(() => u(this, Dt).attrs[u(this, kn).current]));
    y(this, oi, (t) => {
      if (!u(this, Pe).current) {
        if (t.pointerType === "touch") return t.preventDefault();
        t.button > 0 || u(this, Dt).handleClose();
      }
    });
    y(this, si, (t) => {
      u(this, Pe).current || t.pointerType === "touch" && (t.preventDefault(), u(this, Dt).handleClose());
    });
    y(this, ai, (t) => {
      u(this, Pe).current || (t.key === yo || t.key === ds) && (t.preventDefault(), u(this, Dt).handleClose());
    });
    y(this, ui, /* @__PURE__ */ C(() => ({
      id: u(this, Le).current,
      [v(u(this, ii))]: "",
      onpointerdown: u(this, oi),
      onpointerup: u(this, si),
      onkeydown: u(this, ai),
      ...u(this, Dt).sharedProps
    })));
    R(this, Dt, n), R(this, Fn, t.ref), R(this, Le, t.id), R(this, kn, t.variant), R(this, Pe, t.disabled), Et({
      id: u(this, Le),
      ref: u(this, Fn),
      deps: () => u(this, Dt).open.current
    });
  }
  get props() {
    return v(u(this, ui));
  }
}
Le = new WeakMap(), Fn = new WeakMap(), Dt = new WeakMap(), kn = new WeakMap(), Pe = new WeakMap(), ii = new WeakMap(), oi = new WeakMap(), si = new WeakMap(), ai = new WeakMap(), ui = new WeakMap();
var Be, Ln, Ht, Bn, ci;
class uf {
  constructor(t, n) {
    y(this, Be);
    y(this, Ln);
    y(this, Ht);
    y(this, Bn);
    y(this, ci, /* @__PURE__ */ C(() => ({
      id: u(this, Be).current,
      role: "heading",
      "aria-level": u(this, Bn).current,
      [u(this, Ht).attrs.title]: "",
      ...u(this, Ht).sharedProps
    })));
    R(this, Be, t.id), R(this, Ht, n), R(this, Ln, t.ref), R(this, Bn, t.level), Et({
      id: u(this, Be),
      ref: u(this, Ln),
      onRefChange: (r) => {
        u(this, Ht).titleNode = r, u(this, Ht).titleId = r == null ? void 0 : r.id;
      },
      deps: () => u(this, Ht).open.current
    });
  }
  get props() {
    return v(u(this, ci));
  }
}
Be = new WeakMap(), Ln = new WeakMap(), Ht = new WeakMap(), Bn = new WeakMap(), ci = new WeakMap();
var Ke, Kn, li, fi;
class cf {
  constructor(t, n) {
    y(this, Ke);
    y(this, Kn);
    F(this, "root");
    y(this, li, /* @__PURE__ */ C(() => ({ open: this.root.open.current })));
    y(this, fi, /* @__PURE__ */ C(() => ({
      id: u(this, Ke).current,
      role: this.root.variant.current === "alert-dialog" ? "alertdialog" : "dialog",
      "aria-describedby": this.root.descriptionId,
      "aria-labelledby": this.root.titleId,
      [this.root.attrs.content]: "",
      style: { pointerEvents: "auto" },
      ...this.root.sharedProps
    })));
    R(this, Ke, t.id), this.root = n, R(this, Kn, t.ref), Et({
      id: u(this, Ke),
      ref: u(this, Kn),
      deps: () => this.root.open.current,
      onRefChange: (r) => {
        this.root.contentNode = r, this.root.contentId = r == null ? void 0 : r.id;
      }
    });
  }
  get snippetProps() {
    return v(u(this, li));
  }
  get props() {
    return v(u(this, fi));
  }
}
Ke = new WeakMap(), Kn = new WeakMap(), li = new WeakMap(), fi = new WeakMap();
var We, Wn, di, hi;
class lf {
  constructor(t, n) {
    y(this, We);
    y(this, Wn);
    F(this, "root");
    y(this, di, /* @__PURE__ */ C(() => ({ open: this.root.open.current })));
    y(this, hi, /* @__PURE__ */ C(() => ({
      id: u(this, We).current,
      [this.root.attrs.overlay]: "",
      style: { pointerEvents: "auto" },
      ...this.root.sharedProps
    })));
    R(this, We, t.id), R(this, Wn, t.ref), this.root = n, Et({
      id: u(this, We),
      ref: u(this, Wn),
      deps: () => this.root.open.current
    });
  }
  get snippetProps() {
    return v(u(this, di));
  }
  get props() {
    return v(u(this, hi));
  }
}
We = new WeakMap(), Wn = new WeakMap(), di = new WeakMap(), hi = new WeakMap();
const [ff, _o] = _e("Dialog.Root");
function df(e) {
  return ff(new sf(e));
}
function hf(e) {
  return new uf(e, _o());
}
function gf(e) {
  return new cf(e, _o());
}
function vf(e) {
  return new lf(e, _o());
}
function mf(e) {
  return new af(e, _o());
}
var pf = /* @__PURE__ */ q("<div><!></div>");
function yf(e, t) {
  H(t, !0);
  let n = S(t, "id", 19, Rt), r = S(t, "ref", 15, null), i = S(t, "level", 3, 2), o = /* @__PURE__ */ Mt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "id",
    "ref",
    "child",
    "children",
    "level"
  ]);
  const s = hf({
    id: x.with(() => n()),
    level: x.with(() => i()),
    ref: x.with(() => r(), (c) => r(c))
  }), a = /* @__PURE__ */ C(() => ft(o, s.props));
  var l = k(), f = I(l);
  ot(
    f,
    () => t.child,
    (c) => {
      var d = k(), h = I(d);
      K(h, () => t.child, () => ({ props: v(a) })), O(c, d);
    },
    (c) => {
      var d = pf();
      let h;
      var m = G(d);
      K(m, () => t.children ?? Q), dt(() => h = Gt(d, h, { ...v(a) })), O(c, d);
    }
  ), O(e, l), V();
}
function wf(e, t) {
  H(t, !0);
  var n = k(), r = I(n);
  Vc(r, () => t.children, (i) => {
    var o = k(), s = I(o);
    K(s, () => t.children ?? Q), O(i, o);
  }), O(e, n), V();
}
function _f(e, t) {
  H(t, !0);
  let n = S(t, "to", 3, "body");
  const r = Mc();
  let i = /* @__PURE__ */ C(o);
  function o() {
    if (!wo || t.disabled) return null;
    let f = null;
    return typeof n() == "string" ? f = document.querySelector(n()) : (n() instanceof HTMLElement || n() instanceof DocumentFragment) && (f = n()), f;
  }
  let s;
  U(() => {
    if (!v(i) || t.disabled) {
      s && (Ds(s), s = null);
      return;
    }
    return ut(() => s = mo(wf, {
      target: v(i),
      props: { children: t.children },
      context: r
    })), () => {
      s && (Ds(s), s = null);
    };
  });
  var a = k(), l = I(a);
  ot(l, () => t.disabled, (f) => {
    var c = k(), d = I(c);
    K(d, () => t.children ?? Q), O(f, c);
  }), O(e, a), V();
}
function _t(e, t, n, r) {
  const i = Array.isArray(t) ? t : [t];
  return i.forEach((o) => e.addEventListener(o, n, r)), () => {
    i.forEach((o) => e.removeEventListener(o, n, r));
  };
}
function Gs(e, t = 500) {
  let n = null;
  const r = (...i) => {
    n !== null && clearTimeout(n), n = setTimeout(() => {
      e(...i);
    }, t);
  };
  return r.destroy = () => {
    n !== null && (clearTimeout(n), n = null);
  }, r;
}
function gs(e, t) {
  return e === t || e.contains(t);
}
function iu(e) {
  return (e == null ? void 0 : e.ownerDocument) ?? document;
}
const qr = /* @__PURE__ */ new Map();
var Ue, Oe, re, He, ie, Ve, je, Un, Hn, Vn, Vt, gi, sn, ou, vi, ze, mi, pi, yi, wi, jn, su, _i, bi;
class bf {
  constructor(t) {
    y(this, sn);
    y(this, Ue);
    y(this, Oe);
    y(this, re, { pointerdown: !1 });
    y(this, He, !1);
    F(this, "node", x(null));
    y(this, ie);
    y(this, Ve);
    y(this, je, L(!1));
    y(this, Un);
    y(this, Hn, L(null));
    y(this, Vn);
    y(this, Vt, et);
    y(this, gi, (t) => {
      t.defaultPrevented || this.currNode && fe(() => {
        var n, r;
        !this.currNode || u(this, wi).call(this, t.target) || t.target && !v(u(this, je)) && ((r = (n = u(this, Un)).current) == null || r.call(n, t));
      });
    });
    y(this, vi, (t) => {
      let n = t;
      n.defaultPrevented && (n = Ys(t)), u(this, Ue).current(t);
    });
    y(this, ze, Gs(
      (t) => {
        if (!this.currNode) {
          u(this, Vt).call(this);
          return;
        }
        const n = u(this, Vn).current(t, this.currNode) || Pf(t, this.currNode);
        if (!u(this, He) || St(this, sn, su).call(this) || !n) {
          u(this, Vt).call(this);
          return;
        }
        let r = t;
        if (r.defaultPrevented && (r = Ys(r)), u(this, Oe).current !== "close" && u(this, Oe).current !== "defer-otherwise-close") {
          u(this, Vt).call(this);
          return;
        }
        t.pointerType === "touch" ? (u(this, Vt).call(this), R(this, Vt, _t(u(this, ie), "click", u(this, vi), { once: !0 }))) : u(this, Ue).current(r);
      },
      10
    ));
    y(this, mi, (t) => {
      u(this, re)[t.type] = !0;
    });
    y(this, pi, (t) => {
      u(this, re)[t.type] = !1;
    });
    y(this, yi, () => {
      this.node.current && R(this, He, Sf(this.node.current));
    });
    y(this, wi, (t) => this.node.current ? gs(this.node.current, t) : !1);
    y(this, jn, Gs(
      () => {
        for (const t in u(this, re))
          u(this, re)[t] = !1;
        R(this, He, !1);
      },
      20
    ));
    y(this, _i, () => {
      A(u(this, je), !0);
    });
    y(this, bi, () => {
      A(u(this, je), !1);
    });
    F(this, "props", {
      onfocuscapture: u(this, _i),
      onblurcapture: u(this, bi)
    });
    R(this, Ve, t.enabled), R(this, Vn, t.isValidEvent), Et({
      id: t.id,
      ref: this.node,
      deps: () => u(this, Ve).current,
      onRefChange: (i) => {
        this.currNode = i;
      }
    }), R(this, Oe, t.interactOutsideBehavior), R(this, Ue, t.onInteractOutside), R(this, Un, t.onFocusOutside), U(() => {
      R(this, ie, iu(this.currNode));
    });
    let n = et;
    const r = () => {
      u(this, jn).call(this), qr.delete(this), u(this, ze).destroy(), n();
    };
    U(() => (u(this, Ve).current && this.currNode && $a(1, () => {
      qr.set(this, ut(() => u(this, Oe))), n(), n = St(this, sn, ou).call(this);
    }), () => {
      r();
    })), Qa(() => {
      u(this, jn).destroy(), qr.delete(this), u(this, ze).destroy(), u(this, Vt).call(this), n();
    });
  }
  get currNode() {
    return v(u(this, Hn));
  }
  set currNode(t) {
    A(u(this, Hn), T(t));
  }
}
Ue = new WeakMap(), Oe = new WeakMap(), re = new WeakMap(), He = new WeakMap(), ie = new WeakMap(), Ve = new WeakMap(), je = new WeakMap(), Un = new WeakMap(), Hn = new WeakMap(), Vn = new WeakMap(), Vt = new WeakMap(), gi = new WeakMap(), sn = new WeakSet(), ou = function() {
  return Fe(
    /**
    * CAPTURE INTERACTION START
    * mark interaction-start event as intercepted.
    * mark responsible layer during interaction start
    * to avoid checking if is responsible layer during interaction end
    * when a new floating element may have been opened.
    */
    _t(u(this, ie), "pointerdown", Fe(u(this, mi), u(this, yi)), !0),
    /**
    * BUBBLE INTERACTION START
    * Mark interaction-start event as non-intercepted. Debounce `onInteractOutsideStart`
    * to avoid prematurely checking if other events were intercepted.
    */
    _t(u(this, ie), "pointerdown", Fe(u(this, pi), u(this, ze))),
    /**
    * HANDLE FOCUS OUTSIDE
    */
    _t(u(this, ie), "focusin", u(this, gi))
  );
}, vi = new WeakMap(), ze = new WeakMap(), mi = new WeakMap(), pi = new WeakMap(), yi = new WeakMap(), wi = new WeakMap(), jn = new WeakMap(), su = function() {
  return Object.values(u(this, re)).some(Boolean);
}, _i = new WeakMap(), bi = new WeakMap();
function xf(e) {
  return new bf(e);
}
function Ef(e) {
  return e.findLast(([t, { current: n }]) => n === "close" || n === "ignore");
}
function Sf(e) {
  const t = [...qr], n = Ef(t);
  if (n) return n[0].node.current === e;
  const [r] = t[0];
  return r.node.current === e;
}
function Pf(e, t) {
  if ("button" in e && e.button > 0) return !1;
  const n = e.target;
  return pn(n) ? iu(n).documentElement.contains(n) && !gs(t, n) : !1;
}
function Ys(e) {
  const t = e.currentTarget, n = e.target;
  let r;
  e instanceof PointerEvent ? r = new PointerEvent(e.type, e) : r = new PointerEvent("pointerdown", e);
  let i = !1;
  return new Proxy(r, {
    get: (s, a) => a === "currentTarget" ? t : a === "target" ? n : a === "preventDefault" ? () => {
      i = !0, typeof s.preventDefault == "function" && s.preventDefault();
    } : a === "defaultPrevented" ? i : a in s ? s[a] : e[a]
  });
}
function au(e, t) {
  H(t, !0);
  let n = S(t, "interactOutsideBehavior", 3, "close"), r = S(t, "onInteractOutside", 3, et), i = S(t, "onFocusOutside", 3, et), o = S(t, "isValidEvent", 3, () => !1);
  const s = xf({
    id: x.with(() => t.id),
    interactOutsideBehavior: x.with(() => n()),
    onInteractOutside: x.with(() => r()),
    enabled: x.with(() => t.enabled),
    onFocusOutside: x.with(() => i()),
    isValidEvent: x.with(() => o())
  });
  var a = k(), l = I(a);
  K(l, () => t.children ?? Q, () => ({ props: s.props })), O(e, a), V();
}
const ko = /* @__PURE__ */ new Map();
var zn, qe, qn, xi, Ei;
class Of {
  constructor(t) {
    y(this, zn);
    y(this, qe);
    y(this, qn);
    y(this, xi, () => _t(document, "keydown", u(this, Ei), { passive: !1 }));
    y(this, Ei, (t) => {
      if (t.key !== Ul || !Cf(this)) return;
      const n = new KeyboardEvent(t.type, t);
      t.preventDefault();
      const r = u(this, qe).current;
      r !== "close" && r !== "defer-otherwise-close" || u(this, zn).current(n);
    });
    R(this, qe, t.escapeKeydownBehavior), R(this, zn, t.onEscapeKeydown), R(this, qn, t.enabled);
    let n = et;
    U(() => (u(this, qn).current && (ko.set(this, ut(() => u(this, qe))), n = u(this, xi).call(this)), () => {
      n(), ko.delete(this);
    }));
  }
}
zn = new WeakMap(), qe = new WeakMap(), qn = new WeakMap(), xi = new WeakMap(), Ei = new WeakMap();
function Af(e) {
  return new Of(e);
}
function Cf(e) {
  const t = [...ko], n = t.findLast(([i, { current: o }]) => o === "close" || o === "ignore");
  if (n) return n[0] === e;
  const [r] = t[0];
  return r === e;
}
function uu(e, t) {
  H(t, !0);
  let n = S(t, "escapeKeydownBehavior", 3, "close"), r = S(t, "onEscapeKeydown", 3, et);
  Af({
    escapeKeydownBehavior: x.with(() => n()),
    onEscapeKeydown: x.with(() => r()),
    enabled: x.with(() => t.enabled)
  });
  var i = k(), o = I(i);
  K(o, () => t.children ?? Q), O(e, i), V();
}
const Tf = x([]);
function Mf() {
  const e = Tf;
  return {
    add(t) {
      const n = e.current[0];
      t.id !== (n == null ? void 0 : n.id) && (n == null || n.pause()), e.current = Xs(e.current, t), e.current.unshift(t);
    },
    remove(t) {
      var n;
      e.current = Xs(e.current, t), (n = e.current[0]) == null || n.resume();
    }
  };
}
function Rf() {
  let e = L(!1);
  return {
    id: Rt(),
    get paused() {
      return v(e);
    },
    pause() {
      A(e, !0);
    },
    resume() {
      A(e, !1);
    }
  };
}
function Xs(e, t) {
  return [...e].filter((n) => n.id !== t.id);
}
function If(e) {
  return e.filter((t) => t.tagName !== "A");
}
function ee(e, { select: t = !1 } = {}) {
  if (!(e && e.focus))
    return;
  const n = document.activeElement;
  e.focus({ preventScroll: !0 }), e !== n && Jl(e) && t && e.select();
}
function cu(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (ee(r, { select: t }), document.activeElement !== n)
      return !0;
}
function Zs(e, t) {
  for (const n of e)
    if (!Ql(n, t))
      return n;
}
function lu(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    // eslint-disable-next-line ts/no-explicit-any
    acceptNode: (r) => {
      const i = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || i ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}
function Df(e) {
  const t = lu(e), n = Zs(t, e), r = Zs(t.reverse(), e);
  return [n, r];
}
const Nf = "focusScope.autoFocusOnMount", Ff = "focusScope.autoFocusOnDestroy", Js = { bubbles: !1, cancelable: !0 };
function kf({
  id: e,
  loop: t,
  enabled: n,
  onOpenAutoFocus: r,
  onCloseAutoFocus: i,
  forceMount: o
}) {
  const s = Mf(), a = Rf(), l = x(null);
  Et({ id: e, ref: l, deps: () => n.current });
  let f = L(null);
  U(() => {
    const g = l.current;
    if (!g || !n.current) return;
    function p(M) {
      if (a.paused || !g) return;
      const P = M.target;
      Yt(P) && (g.contains(P) ? A(f, T(P)) : ee(v(f), { select: !0 }));
    }
    function w(M) {
      if (a.paused || !g) return;
      const P = M.relatedTarget;
      Yt(P) && P !== null && (g.contains(P) || ee(v(f), { select: !0 }));
    }
    function b(M) {
      (g == null ? void 0 : g.contains(v(f))) || ee(g);
    }
    const _ = Fe(_t(document, "focusin", p), _t(document, "focusout", w)), E = new MutationObserver(b);
    return g && E.observe(g, { childList: !0, subtree: !0 }), () => {
      _(), E.disconnect();
    };
  }), U(() => {
    if (o.current) return;
    let g = l.current;
    const p = document.activeElement;
    return ut(() => {
      c(g, p);
    }), () => {
      g && d(p);
    };
  }), U(() => {
    if (!o.current) return;
    let g = l.current;
    n.current;
    const p = document.activeElement;
    return ut(() => {
      c(g, p);
    }), () => {
      g && d(p);
    };
  });
  function c(g, p) {
    if (g || (g = document.getElementById(e.current)), !g) return;
    if (s.add(a), !g.contains(p)) {
      const b = new CustomEvent(Nf, Js);
      r.current(b), b.defaultPrevented || fe(() => {
        g && (cu(If(lu(g)), { select: !0 }), document.activeElement === p && ee(g));
      });
    }
  }
  function d(g) {
    const p = new CustomEvent(Ff, Js);
    i.current(p), setTimeout(
      () => {
        !p.defaultPrevented && g && ee(g ?? document.body, { select: !0 }), s.remove(a);
      },
      0
    );
  }
  function h(g) {
    if (!n.current || !t.current && !n.current || a.paused) return;
    const p = g.key === ru && !g.ctrlKey && !g.altKey && !g.metaKey, w = document.activeElement;
    if (!(p && w)) return;
    const b = l.current;
    if (!b) return;
    const [_, E] = Df(b);
    _ && E ? !g.shiftKey && w === E ? (g.preventDefault(), t.current && ee(_, { select: !0 })) : g.shiftKey && w === _ && (g.preventDefault(), t.current && ee(E, { select: !0 })) : w === b && g.preventDefault();
  }
  const m = /* @__PURE__ */ C(() => ({
    id: e.current,
    tabindex: -1,
    onkeydown: h
  }));
  return {
    get props() {
      return v(m);
    }
  };
}
function fu(e, t) {
  H(t, !0);
  let n = S(t, "trapFocus", 3, !1), r = S(t, "loop", 3, !1), i = S(t, "onCloseAutoFocus", 3, et), o = S(t, "onOpenAutoFocus", 3, et), s = S(t, "forceMount", 3, !1);
  const a = kf({
    enabled: x.with(() => n()),
    loop: x.with(() => r()),
    onCloseAutoFocus: x.with(() => i()),
    onOpenAutoFocus: x.with(() => o()),
    id: x.with(() => t.id),
    forceMount: x.with(() => s())
  });
  var l = k(), f = I(l);
  K(f, () => t.focusScope ?? Q, () => ({ props: a.props })), O(e, l), V();
}
const Lo = /* @__PURE__ */ new Map();
var Gn, Yn, Xn, oe, Ge, Zn, Si, du, Pi, Jn;
class Lf {
  constructor(t) {
    y(this, Si);
    y(this, Gn);
    y(this, Yn);
    y(this, Xn);
    y(this, oe);
    y(this, Ge, et);
    y(this, Zn, x(null));
    y(this, Pi, (t) => {
      const n = u(this, Zn).current, r = t.target;
      !Yt(n) || !Yt(r) || !u(this, oe).current || !Wf(this) || !gs(n, r) || (u(this, Yn).current(t), !t.defaultPrevented && R(this, Ge, Kf(n)));
    });
    y(this, Jn, () => {
      u(this, Ge).call(this), R(this, Ge, et);
    });
    R(this, Gn, t.id), R(this, oe, t.preventOverflowTextSelection), R(this, Yn, t.onPointerDown), R(this, Xn, t.onPointerUp), Et({
      id: u(this, Gn),
      ref: u(this, Zn),
      deps: () => u(this, oe).current
    });
    let n = et;
    U(() => (u(this, oe).current && (Lo.set(this, ut(() => u(this, oe))), n = St(this, Si, du).call(this)), () => {
      n(), u(this, Jn).call(this), Lo.delete(this);
    }));
  }
}
Gn = new WeakMap(), Yn = new WeakMap(), Xn = new WeakMap(), oe = new WeakMap(), Ge = new WeakMap(), Zn = new WeakMap(), Si = new WeakSet(), du = function() {
  return Fe(_t(document, "pointerdown", u(this, Pi)), _t(document, "pointerup", Ya(u(this, Jn), u(this, Xn))));
}, Pi = new WeakMap(), Jn = new WeakMap();
function Bf(e) {
  return new Lf(e);
}
const Qs = (e) => e.style.userSelect || e.style.webkitUserSelect;
function Kf(e) {
  const t = document.body, n = Qs(t), r = Qs(e);
  return Hr(t, "none"), Hr(e, "text"), () => {
    Hr(t, n), Hr(e, r);
  };
}
function Hr(e, t) {
  e.style.userSelect = t, e.style.webkitUserSelect = t;
}
function Wf(e) {
  const t = [...Lo];
  if (!t.length) return !1;
  const n = t.at(-1);
  return n ? n[0] === e : !1;
}
function hu(e, t) {
  H(t, !0);
  let n = S(t, "preventOverflowTextSelection", 3, !0), r = S(t, "onPointerDown", 3, et), i = S(t, "onPointerUp", 3, et);
  Bf({
    id: x.with(() => t.id),
    preventOverflowTextSelection: x.with(() => n()),
    onPointerDown: x.with(() => r()),
    onPointerUp: x.with(() => i()),
    enabled: x.with(() => t.enabled)
  });
  var o = k(), s = I(o);
  K(s, () => t.children ?? Q), O(e, o), V();
}
function dn(e) {
  A(e, e.v + 1);
}
var Nt, Ft, jt, Ye, Gr;
const Ps = class Ps extends Map {
  /**
   * @param {Iterable<readonly [K, V]> | null | undefined} [value]
   */
  constructor(n) {
    super();
    y(this, Ye);
    /** @type {Map<K, Source<number>>} */
    y(this, Nt, /* @__PURE__ */ new Map());
    y(this, Ft, at(0));
    y(this, jt, at(0));
    if (n) {
      for (var [r, i] of n)
        super.set(r, i);
      u(this, jt).v = super.size;
    }
  }
  /** @param {K} key */
  has(n) {
    var r = u(this, Nt), i = r.get(n);
    if (i === void 0) {
      var o = super.get(n);
      if (o !== void 0)
        i = at(0), r.set(n, i);
      else
        return v(u(this, Ft)), !1;
    }
    return v(i), !0;
  }
  /**
   * @param {(value: V, key: K, map: Map<K, V>) => void} callbackfn
   * @param {any} [this_arg]
   */
  forEach(n, r) {
    St(this, Ye, Gr).call(this), super.forEach(n, r);
  }
  /** @param {K} key */
  get(n) {
    var r = u(this, Nt), i = r.get(n);
    if (i === void 0) {
      var o = super.get(n);
      if (o !== void 0)
        i = at(0), r.set(n, i);
      else {
        v(u(this, Ft));
        return;
      }
    }
    return v(i), super.get(n);
  }
  /**
   * @param {K} key
   * @param {V} value
   * */
  set(n, r) {
    var d;
    var i = u(this, Nt), o = i.get(n), s = super.get(n), a = super.set(n, r), l = u(this, Ft);
    if (o === void 0)
      i.set(n, at(0)), A(u(this, jt), super.size), dn(l);
    else if (s !== r) {
      dn(o);
      var f = l.reactions === null ? null : new Set(l.reactions), c = f === null || !((d = o.reactions) != null && d.every(
        (h) => (
          /** @type {NonNullable<typeof v_reactions>} */
          f.has(h)
        )
      ));
      c && dn(l);
    }
    return a;
  }
  /** @param {K} key */
  delete(n) {
    var r = u(this, Nt), i = r.get(n), o = super.delete(n);
    return i !== void 0 && (r.delete(n), A(u(this, jt), super.size), A(i, -1), dn(u(this, Ft))), o;
  }
  clear() {
    if (super.size !== 0) {
      super.clear();
      var n = u(this, Nt);
      A(u(this, jt), 0);
      for (var r of n.values())
        A(r, -1);
      dn(u(this, Ft)), n.clear();
    }
  }
  keys() {
    return v(u(this, Ft)), super.keys();
  }
  values() {
    return St(this, Ye, Gr).call(this), super.values();
  }
  entries() {
    return St(this, Ye, Gr).call(this), super.entries();
  }
  [Symbol.iterator]() {
    return this.entries();
  }
  get size() {
    return v(u(this, jt)), super.size;
  }
};
Nt = new WeakMap(), Ft = new WeakMap(), jt = new WeakMap(), Ye = new WeakSet(), Gr = function() {
  v(u(this, Ft));
  var n = u(this, Nt);
  if (u(this, jt).v !== n.size)
    for (var r of As(Ps.prototype, this, "keys").call(this))
      n.has(r) || n.set(r, at(0));
  for (var [, i] of u(this, Nt))
    v(i);
};
let Bo = Ps;
var Xe, Qn, se, Ae, ye, Ko, Wo;
class Uf {
  constructor(t, n) {
    y(this, ye);
    y(this, Xe, L());
    y(this, Qn);
    y(this, se, 0);
    y(this, Ae, null);
    u(this, Xe).v = T(t), R(this, Qn, n);
  }
  get current() {
    return gc() ? U(() => (Ao(this, se)._++, u(this, se) === 1 && St(this, ye, Ko).call(this, !0), () => {
      rs().then(() => {
        Ao(this, se)._--, u(this, se) === 0 && St(this, ye, Wo).call(this);
      });
    })) : u(this, se) === 0 && (St(this, ye, Ko).call(this, !1), St(this, ye, Wo).call(this)), v(u(this, Xe));
  }
}
Xe = new WeakMap(), Qn = new WeakMap(), se = new WeakMap(), Ae = new WeakMap(), ye = new WeakSet(), Ko = function(t) {
  R(this, Ae, u(this, Qn).call(this, (n) => {
    A(u(this, Xe), T(n));
  }, t) ?? null);
}, Wo = function() {
  u(this, Ae) !== null && (u(this, Ae).call(this), R(this, Ae, null));
};
const $s = new Uf(null, (e, t) => {
  function n() {
    e(document.activeElement);
  }
  if (n(), !!t)
    return document.addEventListener("focusin", n), document.addEventListener("focusout", n), () => {
      document.removeEventListener("focusin", n), document.removeEventListener("focusout", n);
    };
});
function gu(e) {
  return typeof e == "function";
}
function Hf(e) {
  return gu(e) ? e() : e;
}
var ae;
class Vf {
  constructor(t, n = { box: "border-box" }) {
    y(this, ae, L(T({ width: 0, height: 0 })));
    var r, i;
    u(this, ae).v = T({
      width: ((r = n.initialSize) == null ? void 0 : r.width) ?? 0,
      height: ((i = n.initialSize) == null ? void 0 : i.height) ?? 0
    }), U(() => {
      const o = Hf(t);
      if (!o) return;
      const s = new ResizeObserver((a) => {
        for (const l of a) {
          const f = n.box === "content-box" ? l.contentBoxSize : l.borderBoxSize, c = Array.isArray(f) ? f : [f];
          v(u(this, ae)).width = c.reduce((d, h) => Math.max(d, h.inlineSize), 0), v(u(this, ae)).height = c.reduce((d, h) => Math.max(d, h.blockSize), 0);
        }
      });
      return s.observe(o), () => {
        s.disconnect();
      };
    });
  }
  get width() {
    return v(u(this, ae)).width;
  }
  get height() {
    return v(u(this, ae)).height;
  }
}
ae = new WeakMap();
function jf(e, t) {
  if (gu(e)) {
    const n = e;
    return n() ?? t ?? n();
  }
  return e ?? t ?? e;
}
var $n, tr;
class zf {
  constructor(t) {
    y(this, $n, L());
    y(this, tr);
    U(() => {
      A(u(this, $n), T(u(this, tr))), R(this, tr, t());
    });
  }
  get current() {
    return v(u(this, $n));
  }
}
$n = new WeakMap(), tr = new WeakMap();
var er, nr, Oi;
class qf {
  constructor(t) {
    y(this, er);
    y(this, nr, /* @__PURE__ */ C(() => jf(u(this, er))));
    y(this, Oi, /* @__PURE__ */ C(() => !v(u(this, nr)) || !$s.current ? !1 : v(u(this, nr)).contains($s.current)));
    R(this, er, t);
  }
  get current() {
    return v(u(this, Oi));
  }
}
er = new WeakMap(), nr = new WeakMap(), Oi = new WeakMap();
function Gf(e) {
  let t = 0, n = L(void 0), r;
  function i() {
    t -= 1, r && t <= 0 && (r(), A(n, void 0), r = void 0);
  }
  return (...o) => (t += 1, v(n) === void 0 && (r = Qo(() => {
    A(n, T(e(...o)));
  })), U(() => () => {
    i();
  }), v(n));
}
const Yf = Gf(() => {
  const e = new Bo(), t = /* @__PURE__ */ C(() => {
    for (const o of e.values())
      if (o)
        return !0;
    return !1;
  });
  new zf(() => v(t));
  let n = T({}), r = null;
  function i() {
    wo && (document.body.style.paddingRight = n.paddingRight ?? "", document.body.style.marginRight = n.marginRight ?? "", document.body.style.pointerEvents = n.pointerEvents ?? "", document.body.style.removeProperty("--scrollbar-width"), document.body.style.overflow = n.overflow ?? "", Vs && (r == null || r()));
  }
  return U(() => {
    const o = v(t);
    return ut(() => {
      if (!o)
        return;
      const s = getComputedStyle(document.body);
      n.overflow = s.overflow, n.paddingRight = s.paddingRight, n.marginRight = s.marginRight, n.pointerEvents = s.pointerEvents;
      const a = window.innerWidth - document.documentElement.clientWidth, f = {
        padding: Number.parseInt(n.paddingRight ?? "0", 10) + a,
        margin: Number.parseInt(n.marginRight ?? "0", 10)
      };
      a > 0 && (document.body.style.paddingRight = `${f.padding}px`, document.body.style.marginRight = `${f.margin}px`, document.body.style.setProperty("--scrollbar-width", `${a}px`), document.body.style.overflow = "hidden"), Vs && (r = _t(
        document,
        "touchmove",
        (c) => {
          c.target === document.documentElement && (c.touches.length > 1 || c.preventDefault());
        },
        { passive: !1 }
      )), fe(() => {
        document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden";
      });
    });
  }), U(() => () => {
    r == null || r();
  }), {
    get map() {
      return e;
    },
    resetBodyStyle: i
  };
});
function Xf(e, t = () => null) {
  const n = Rt(), r = Yf(), i = /* @__PURE__ */ C(t);
  r.map.set(n, e ?? !1);
  const o = x.with(() => r.map.get(n) ?? !1, (s) => r.map.set(n, s));
  return U(() => () => {
    r.map.delete(n), Array.from(r.map.values()).length === 0 && (v(i) === null ? r.resetBodyStyle() : $a(v(i), () => r.resetBodyStyle()));
  }), o;
}
function Qr(e, t) {
  H(t, !0);
  let n = S(t, "preventScroll", 3, !0), r = S(t, "restoreScrollDelay", 3, null);
  Xf(n(), () => r()), V();
}
function Zf({ forceMount: e, present: t, trapFocus: n, open: r }) {
  return e ? r && n : t && n;
}
var Jf = /* @__PURE__ */ q("<div><!></div>");
function Qf(e, t) {
  H(t, !0);
  let n = S(t, "id", 19, Rt), r = S(t, "forceMount", 3, !1), i = S(t, "ref", 15, null), o = /* @__PURE__ */ Mt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "id",
    "forceMount",
    "child",
    "children",
    "ref"
  ]);
  const s = vf({
    id: x.with(() => n()),
    ref: x.with(() => i(), (f) => i(f))
  }), a = /* @__PURE__ */ C(() => ft(o, s.props));
  var l = /* @__PURE__ */ C(() => s.root.open.current || r());
  hs(e, {
    get id() {
      return n();
    },
    get present() {
      return v(l);
    },
    presence: (c) => {
      var d = k(), h = I(d);
      ot(
        h,
        () => t.child,
        (m) => {
          var g = k(), p = I(g), w = /* @__PURE__ */ lo(() => ({
            props: ft(v(a)),
            ...s.snippetProps
          }));
          K(p, () => t.child, () => v(w)), O(m, g);
        },
        (m) => {
          var g = Jf();
          const p = /* @__PURE__ */ C(() => ft(v(a)));
          let w;
          var b = G(g);
          K(b, () => t.children ?? Q, () => s.snippetProps), dt(() => w = Gt(g, w, { ...v(p) })), O(m, g);
        }
      ), O(c, d);
    },
    $$slots: { presence: !0 }
  }), V();
}
function $f(e, t, n) {
  const i = t.length > 1 && Array.from(t).every((f) => f === t[0]) ? t[0] : t, o = n ? e.indexOf(n) : -1;
  let s = td(e, Math.max(o, 0));
  i.length === 1 && (s = s.filter((f) => f !== n));
  const l = s.find((f) => f == null ? void 0 : f.toLowerCase().startsWith(i.toLowerCase()));
  return l !== n ? l : void 0;
}
function td(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
const ed = ["top", "right", "bottom", "left"], ve = Math.min, wt = Math.max, $r = Math.round, Vr = Math.floor, Bt = (e) => ({
  x: e,
  y: e
}), nd = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, rd = {
  start: "end",
  end: "start"
};
function Uo(e, t, n) {
  return wt(e, ve(t, n));
}
function Xt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Zt(e) {
  return e.split("-")[0];
}
function un(e) {
  return e.split("-")[1];
}
function vs(e) {
  return e === "x" ? "y" : "x";
}
function ms(e) {
  return e === "y" ? "height" : "width";
}
function me(e) {
  return ["top", "bottom"].includes(Zt(e)) ? "y" : "x";
}
function ps(e) {
  return vs(me(e));
}
function id(e, t, n) {
  n === void 0 && (n = !1);
  const r = un(e), i = ps(e), o = ms(i);
  let s = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[o] > t.floating[o] && (s = ti(s)), [s, ti(s)];
}
function od(e) {
  const t = ti(e);
  return [Ho(e), t, Ho(t)];
}
function Ho(e) {
  return e.replace(/start|end/g, (t) => rd[t]);
}
function sd(e, t, n) {
  const r = ["left", "right"], i = ["right", "left"], o = ["top", "bottom"], s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? i : r : t ? r : i;
    case "left":
    case "right":
      return t ? o : s;
    default:
      return [];
  }
}
function ad(e, t, n, r) {
  const i = un(e);
  let o = sd(Zt(e), n === "start", r);
  return i && (o = o.map((s) => s + "-" + i), t && (o = o.concat(o.map(Ho)))), o;
}
function ti(e) {
  return e.replace(/left|right|bottom|top/g, (t) => nd[t]);
}
function ud(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function vu(e) {
  return typeof e != "number" ? ud(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function ei(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: i
  } = e;
  return {
    width: r,
    height: i,
    top: n,
    left: t,
    right: t + r,
    bottom: n + i,
    x: t,
    y: n
  };
}
function ta(e, t, n) {
  let {
    reference: r,
    floating: i
  } = e;
  const o = me(t), s = ps(t), a = ms(s), l = Zt(t), f = o === "y", c = r.x + r.width / 2 - i.width / 2, d = r.y + r.height / 2 - i.height / 2, h = r[a] / 2 - i[a] / 2;
  let m;
  switch (l) {
    case "top":
      m = {
        x: c,
        y: r.y - i.height
      };
      break;
    case "bottom":
      m = {
        x: c,
        y: r.y + r.height
      };
      break;
    case "right":
      m = {
        x: r.x + r.width,
        y: d
      };
      break;
    case "left":
      m = {
        x: r.x - i.width,
        y: d
      };
      break;
    default:
      m = {
        x: r.x,
        y: r.y
      };
  }
  switch (un(t)) {
    case "start":
      m[s] -= h * (n && f ? -1 : 1);
      break;
    case "end":
      m[s] += h * (n && f ? -1 : 1);
      break;
  }
  return m;
}
const cd = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: i = "absolute",
    middleware: o = [],
    platform: s
  } = n, a = o.filter(Boolean), l = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let f = await s.getElementRects({
    reference: e,
    floating: t,
    strategy: i
  }), {
    x: c,
    y: d
  } = ta(f, r, l), h = r, m = {}, g = 0;
  for (let p = 0; p < a.length; p++) {
    const {
      name: w,
      fn: b
    } = a[p], {
      x: _,
      y: E,
      data: M,
      reset: P
    } = await b({
      x: c,
      y: d,
      initialPlacement: r,
      placement: h,
      strategy: i,
      middlewareData: m,
      rects: f,
      platform: s,
      elements: {
        reference: e,
        floating: t
      }
    });
    c = _ ?? c, d = E ?? d, m = {
      ...m,
      [w]: {
        ...m[w],
        ...M
      }
    }, P && g <= 50 && (g++, typeof P == "object" && (P.placement && (h = P.placement), P.rects && (f = P.rects === !0 ? await s.getElementRects({
      reference: e,
      floating: t,
      strategy: i
    }) : P.rects), {
      x: c,
      y: d
    } = ta(f, h, l)), p = -1);
  }
  return {
    x: c,
    y: d,
    placement: h,
    strategy: i,
    middlewareData: m
  };
};
async function Sn(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: i,
    platform: o,
    rects: s,
    elements: a,
    strategy: l
  } = e, {
    boundary: f = "clippingAncestors",
    rootBoundary: c = "viewport",
    elementContext: d = "floating",
    altBoundary: h = !1,
    padding: m = 0
  } = Xt(t, e), g = vu(m), w = a[h ? d === "floating" ? "reference" : "floating" : d], b = ei(await o.getClippingRect({
    element: (n = await (o.isElement == null ? void 0 : o.isElement(w))) == null || n ? w : w.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(a.floating)),
    boundary: f,
    rootBoundary: c,
    strategy: l
  })), _ = d === "floating" ? {
    x: r,
    y: i,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, E = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(a.floating)), M = await (o.isElement == null ? void 0 : o.isElement(E)) ? await (o.getScale == null ? void 0 : o.getScale(E)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, P = ei(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: _,
    offsetParent: E,
    strategy: l
  }) : _);
  return {
    top: (b.top - P.top + g.top) / M.y,
    bottom: (P.bottom - b.bottom + g.bottom) / M.y,
    left: (b.left - P.left + g.left) / M.x,
    right: (P.right - b.right + g.right) / M.x
  };
}
const ld = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: i,
      rects: o,
      platform: s,
      elements: a,
      middlewareData: l
    } = t, {
      element: f,
      padding: c = 0
    } = Xt(e, t) || {};
    if (f == null)
      return {};
    const d = vu(c), h = {
      x: n,
      y: r
    }, m = ps(i), g = ms(m), p = await s.getDimensions(f), w = m === "y", b = w ? "top" : "left", _ = w ? "bottom" : "right", E = w ? "clientHeight" : "clientWidth", M = o.reference[g] + o.reference[m] - h[m] - o.floating[g], P = h[m] - o.reference[m], D = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(f));
    let N = D ? D[E] : 0;
    (!N || !await (s.isElement == null ? void 0 : s.isElement(D))) && (N = a.floating[E] || o.floating[g]);
    const B = M / 2 - P / 2, z = N / 2 - p[g] / 2 - 1, W = ve(d[b], z), $ = ve(d[_], z), J = W, nt = N - p[g] - $, X = N / 2 - p[g] / 2 + B, mt = Uo(J, X, nt), ht = !l.arrow && un(i) != null && X !== mt && o.reference[g] / 2 - (X < J ? W : $) - p[g] / 2 < 0, tt = ht ? X < J ? X - J : X - nt : 0;
    return {
      [m]: h[m] + tt,
      data: {
        [m]: mt,
        centerOffset: X - mt - tt,
        ...ht && {
          alignmentOffset: tt
        }
      },
      reset: ht
    };
  }
}), fd = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: i,
        middlewareData: o,
        rects: s,
        initialPlacement: a,
        platform: l,
        elements: f
      } = t, {
        mainAxis: c = !0,
        crossAxis: d = !0,
        fallbackPlacements: h,
        fallbackStrategy: m = "bestFit",
        fallbackAxisSideDirection: g = "none",
        flipAlignment: p = !0,
        ...w
      } = Xt(e, t);
      if ((n = o.arrow) != null && n.alignmentOffset)
        return {};
      const b = Zt(i), _ = me(a), E = Zt(a) === a, M = await (l.isRTL == null ? void 0 : l.isRTL(f.floating)), P = h || (E || !p ? [ti(a)] : od(a)), D = g !== "none";
      !h && D && P.push(...ad(a, p, g, M));
      const N = [a, ...P], B = await Sn(t, w), z = [];
      let W = ((r = o.flip) == null ? void 0 : r.overflows) || [];
      if (c && z.push(B[b]), d) {
        const X = id(i, s, M);
        z.push(B[X[0]], B[X[1]]);
      }
      if (W = [...W, {
        placement: i,
        overflows: z
      }], !z.every((X) => X <= 0)) {
        var $, J;
        const X = ((($ = o.flip) == null ? void 0 : $.index) || 0) + 1, mt = N[X];
        if (mt)
          return {
            data: {
              index: X,
              overflows: W
            },
            reset: {
              placement: mt
            }
          };
        let ht = (J = W.filter((tt) => tt.overflows[0] <= 0).sort((tt, rt) => tt.overflows[1] - rt.overflows[1])[0]) == null ? void 0 : J.placement;
        if (!ht)
          switch (m) {
            case "bestFit": {
              var nt;
              const tt = (nt = W.filter((rt) => {
                if (D) {
                  const st = me(rt.placement);
                  return st === _ || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  st === "y";
                }
                return !0;
              }).map((rt) => [rt.placement, rt.overflows.filter((st) => st > 0).reduce((st, Qt) => st + Qt, 0)]).sort((rt, st) => rt[1] - st[1])[0]) == null ? void 0 : nt[0];
              tt && (ht = tt);
              break;
            }
            case "initialPlacement":
              ht = a;
              break;
          }
        if (i !== ht)
          return {
            reset: {
              placement: ht
            }
          };
      }
      return {};
    }
  };
};
function ea(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function na(e) {
  return ed.some((t) => e[t] >= 0);
}
const dd = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...i
      } = Xt(e, t);
      switch (r) {
        case "referenceHidden": {
          const o = await Sn(t, {
            ...i,
            elementContext: "reference"
          }), s = ea(o, n.reference);
          return {
            data: {
              referenceHiddenOffsets: s,
              referenceHidden: na(s)
            }
          };
        }
        case "escaped": {
          const o = await Sn(t, {
            ...i,
            altBoundary: !0
          }), s = ea(o, n.floating);
          return {
            data: {
              escapedOffsets: s,
              escaped: na(s)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function hd(e, t) {
  const {
    placement: n,
    platform: r,
    elements: i
  } = e, o = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), s = Zt(n), a = un(n), l = me(n) === "y", f = ["left", "top"].includes(s) ? -1 : 1, c = o && l ? -1 : 1, d = Xt(t, e);
  let {
    mainAxis: h,
    crossAxis: m,
    alignmentAxis: g
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: d.mainAxis || 0,
    crossAxis: d.crossAxis || 0,
    alignmentAxis: d.alignmentAxis
  };
  return a && typeof g == "number" && (m = a === "end" ? g * -1 : g), l ? {
    x: m * c,
    y: h * f
  } : {
    x: h * f,
    y: m * c
  };
}
const gd = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: i,
        y: o,
        placement: s,
        middlewareData: a
      } = t, l = await hd(t, e);
      return s === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
        x: i + l.x,
        y: o + l.y,
        data: {
          ...l,
          placement: s
        }
      };
    }
  };
}, vd = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: i
      } = t, {
        mainAxis: o = !0,
        crossAxis: s = !1,
        limiter: a = {
          fn: (w) => {
            let {
              x: b,
              y: _
            } = w;
            return {
              x: b,
              y: _
            };
          }
        },
        ...l
      } = Xt(e, t), f = {
        x: n,
        y: r
      }, c = await Sn(t, l), d = me(Zt(i)), h = vs(d);
      let m = f[h], g = f[d];
      if (o) {
        const w = h === "y" ? "top" : "left", b = h === "y" ? "bottom" : "right", _ = m + c[w], E = m - c[b];
        m = Uo(_, m, E);
      }
      if (s) {
        const w = d === "y" ? "top" : "left", b = d === "y" ? "bottom" : "right", _ = g + c[w], E = g - c[b];
        g = Uo(_, g, E);
      }
      const p = a.fn({
        ...t,
        [h]: m,
        [d]: g
      });
      return {
        ...p,
        data: {
          x: p.x - n,
          y: p.y - r,
          enabled: {
            [h]: o,
            [d]: s
          }
        }
      };
    }
  };
}, md = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: i,
        rects: o,
        middlewareData: s
      } = t, {
        offset: a = 0,
        mainAxis: l = !0,
        crossAxis: f = !0
      } = Xt(e, t), c = {
        x: n,
        y: r
      }, d = me(i), h = vs(d);
      let m = c[h], g = c[d];
      const p = Xt(a, t), w = typeof p == "number" ? {
        mainAxis: p,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...p
      };
      if (l) {
        const E = h === "y" ? "height" : "width", M = o.reference[h] - o.floating[E] + w.mainAxis, P = o.reference[h] + o.reference[E] - w.mainAxis;
        m < M ? m = M : m > P && (m = P);
      }
      if (f) {
        var b, _;
        const E = h === "y" ? "width" : "height", M = ["top", "left"].includes(Zt(i)), P = o.reference[d] - o.floating[E] + (M && ((b = s.offset) == null ? void 0 : b[d]) || 0) + (M ? 0 : w.crossAxis), D = o.reference[d] + o.reference[E] + (M ? 0 : ((_ = s.offset) == null ? void 0 : _[d]) || 0) - (M ? w.crossAxis : 0);
        g < P ? g = P : g > D && (g = D);
      }
      return {
        [h]: m,
        [d]: g
      };
    }
  };
}, pd = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: i,
        rects: o,
        platform: s,
        elements: a
      } = t, {
        apply: l = () => {
        },
        ...f
      } = Xt(e, t), c = await Sn(t, f), d = Zt(i), h = un(i), m = me(i) === "y", {
        width: g,
        height: p
      } = o.floating;
      let w, b;
      d === "top" || d === "bottom" ? (w = d, b = h === (await (s.isRTL == null ? void 0 : s.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (b = d, w = h === "end" ? "top" : "bottom");
      const _ = p - c.top - c.bottom, E = g - c.left - c.right, M = ve(p - c[w], _), P = ve(g - c[b], E), D = !t.middlewareData.shift;
      let N = M, B = P;
      if ((n = t.middlewareData.shift) != null && n.enabled.x && (B = E), (r = t.middlewareData.shift) != null && r.enabled.y && (N = _), D && !h) {
        const W = wt(c.left, 0), $ = wt(c.right, 0), J = wt(c.top, 0), nt = wt(c.bottom, 0);
        m ? B = g - 2 * (W !== 0 || $ !== 0 ? W + $ : wt(c.left, c.right)) : N = p - 2 * (J !== 0 || nt !== 0 ? J + nt : wt(c.top, c.bottom));
      }
      await l({
        ...t,
        availableWidth: B,
        availableHeight: N
      });
      const z = await s.getDimensions(a.floating);
      return g !== z.width || p !== z.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function bo() {
  return typeof window < "u";
}
function cn(e) {
  return mu(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function bt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Ut(e) {
  var t;
  return (t = (mu(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function mu(e) {
  return bo() ? e instanceof Node || e instanceof bt(e).Node : !1;
}
function At(e) {
  return bo() ? e instanceof Element || e instanceof bt(e).Element : !1;
}
function Wt(e) {
  return bo() ? e instanceof HTMLElement || e instanceof bt(e).HTMLElement : !1;
}
function ra(e) {
  return !bo() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof bt(e).ShadowRoot;
}
function Kr(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: i
  } = Ct(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(i);
}
function yd(e) {
  return ["table", "td", "th"].includes(cn(e));
}
function xo(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function ys(e) {
  const t = ws(), n = At(e) ? Ct(e) : e;
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function wd(e) {
  let t = pe(e);
  for (; Wt(t) && !on(t); ) {
    if (ys(t))
      return t;
    if (xo(t))
      return null;
    t = pe(t);
  }
  return null;
}
function ws() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function on(e) {
  return ["html", "body", "#document"].includes(cn(e));
}
function Ct(e) {
  return bt(e).getComputedStyle(e);
}
function Eo(e) {
  return At(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function pe(e) {
  if (cn(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    ra(e) && e.host || // Fallback.
    Ut(e)
  );
  return ra(t) ? t.host : t;
}
function pu(e) {
  const t = pe(e);
  return on(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Wt(t) && Kr(t) ? t : pu(t);
}
function Pn(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const i = pu(e), o = i === ((r = e.ownerDocument) == null ? void 0 : r.body), s = bt(i);
  if (o) {
    const a = Vo(s);
    return t.concat(s, s.visualViewport || [], Kr(i) ? i : [], a && n ? Pn(a) : []);
  }
  return t.concat(i, Pn(i, [], n));
}
function Vo(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function yu(e) {
  const t = Ct(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const i = Wt(e), o = i ? e.offsetWidth : n, s = i ? e.offsetHeight : r, a = $r(n) !== o || $r(r) !== s;
  return a && (n = o, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function _s(e) {
  return At(e) ? e : e.contextElement;
}
function ke(e) {
  const t = _s(e);
  if (!Wt(t))
    return Bt(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: i,
    $: o
  } = yu(t);
  let s = (o ? $r(n.width) : n.width) / r, a = (o ? $r(n.height) : n.height) / i;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const _d = /* @__PURE__ */ Bt(0);
function wu(e) {
  const t = bt(e);
  return !ws() || !t.visualViewport ? _d : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function bd(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== bt(e) ? !1 : t;
}
function Te(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const i = e.getBoundingClientRect(), o = _s(e);
  let s = Bt(1);
  t && (r ? At(r) && (s = ke(r)) : s = ke(e));
  const a = bd(o, n, r) ? wu(o) : Bt(0);
  let l = (i.left + a.x) / s.x, f = (i.top + a.y) / s.y, c = i.width / s.x, d = i.height / s.y;
  if (o) {
    const h = bt(o), m = r && At(r) ? bt(r) : r;
    let g = h, p = Vo(g);
    for (; p && r && m !== g; ) {
      const w = ke(p), b = p.getBoundingClientRect(), _ = Ct(p), E = b.left + (p.clientLeft + parseFloat(_.paddingLeft)) * w.x, M = b.top + (p.clientTop + parseFloat(_.paddingTop)) * w.y;
      l *= w.x, f *= w.y, c *= w.x, d *= w.y, l += E, f += M, g = bt(p), p = Vo(g);
    }
  }
  return ei({
    width: c,
    height: d,
    x: l,
    y: f
  });
}
function bs(e, t) {
  const n = Eo(e).scrollLeft;
  return t ? t.left + n : Te(Ut(e)).left + n;
}
function _u(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(), i = r.left + t.scrollLeft - (n ? 0 : (
    // RTL <body> scrollbar.
    bs(e, r)
  )), o = r.top + t.scrollTop;
  return {
    x: i,
    y: o
  };
}
function xd(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: i
  } = e;
  const o = i === "fixed", s = Ut(r), a = t ? xo(t.floating) : !1;
  if (r === s || a && o)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, f = Bt(1);
  const c = Bt(0), d = Wt(r);
  if ((d || !d && !o) && ((cn(r) !== "body" || Kr(s)) && (l = Eo(r)), Wt(r))) {
    const m = Te(r);
    f = ke(r), c.x = m.x + r.clientLeft, c.y = m.y + r.clientTop;
  }
  const h = s && !d && !o ? _u(s, l, !0) : Bt(0);
  return {
    width: n.width * f.x,
    height: n.height * f.y,
    x: n.x * f.x - l.scrollLeft * f.x + c.x + h.x,
    y: n.y * f.y - l.scrollTop * f.y + c.y + h.y
  };
}
function Ed(e) {
  return Array.from(e.getClientRects());
}
function Sd(e) {
  const t = Ut(e), n = Eo(e), r = e.ownerDocument.body, i = wt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), o = wt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + bs(e);
  const a = -n.scrollTop;
  return Ct(r).direction === "rtl" && (s += wt(t.clientWidth, r.clientWidth) - i), {
    width: i,
    height: o,
    x: s,
    y: a
  };
}
function Pd(e, t) {
  const n = bt(e), r = Ut(e), i = n.visualViewport;
  let o = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (i) {
    o = i.width, s = i.height;
    const f = ws();
    (!f || f && t === "fixed") && (a = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: o,
    height: s,
    x: a,
    y: l
  };
}
function Od(e, t) {
  const n = Te(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, o = Wt(e) ? ke(e) : Bt(1), s = e.clientWidth * o.x, a = e.clientHeight * o.y, l = i * o.x, f = r * o.y;
  return {
    width: s,
    height: a,
    x: l,
    y: f
  };
}
function ia(e, t, n) {
  let r;
  if (t === "viewport")
    r = Pd(e, n);
  else if (t === "document")
    r = Sd(Ut(e));
  else if (At(t))
    r = Od(t, n);
  else {
    const i = wu(e);
    r = {
      x: t.x - i.x,
      y: t.y - i.y,
      width: t.width,
      height: t.height
    };
  }
  return ei(r);
}
function bu(e, t) {
  const n = pe(e);
  return n === t || !At(n) || on(n) ? !1 : Ct(n).position === "fixed" || bu(n, t);
}
function Ad(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Pn(e, [], !1).filter((a) => At(a) && cn(a) !== "body"), i = null;
  const o = Ct(e).position === "fixed";
  let s = o ? pe(e) : e;
  for (; At(s) && !on(s); ) {
    const a = Ct(s), l = ys(s);
    !l && a.position === "fixed" && (i = null), (o ? !l && !i : !l && a.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || Kr(s) && !l && bu(e, s)) ? r = r.filter((c) => c !== s) : i = a, s = pe(s);
  }
  return t.set(e, r), r;
}
function Cd(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: i
  } = e;
  const s = [...n === "clippingAncestors" ? xo(t) ? [] : Ad(t, this._c) : [].concat(n), r], a = s[0], l = s.reduce((f, c) => {
    const d = ia(t, c, i);
    return f.top = wt(d.top, f.top), f.right = ve(d.right, f.right), f.bottom = ve(d.bottom, f.bottom), f.left = wt(d.left, f.left), f;
  }, ia(t, a, i));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function Td(e) {
  const {
    width: t,
    height: n
  } = yu(e);
  return {
    width: t,
    height: n
  };
}
function Md(e, t, n) {
  const r = Wt(t), i = Ut(t), o = n === "fixed", s = Te(e, !0, o, t);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Bt(0);
  if (r || !r && !o)
    if ((cn(t) !== "body" || Kr(i)) && (a = Eo(t)), r) {
      const h = Te(t, !0, o, t);
      l.x = h.x + t.clientLeft, l.y = h.y + t.clientTop;
    } else i && (l.x = bs(i));
  const f = i && !r && !o ? _u(i, a) : Bt(0), c = s.left + a.scrollLeft - l.x - f.x, d = s.top + a.scrollTop - l.y - f.y;
  return {
    x: c,
    y: d,
    width: s.width,
    height: s.height
  };
}
function Mo(e) {
  return Ct(e).position === "static";
}
function oa(e, t) {
  if (!Wt(e) || Ct(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let n = e.offsetParent;
  return Ut(e) === n && (n = n.ownerDocument.body), n;
}
function xu(e, t) {
  const n = bt(e);
  if (xo(e))
    return n;
  if (!Wt(e)) {
    let i = pe(e);
    for (; i && !on(i); ) {
      if (At(i) && !Mo(i))
        return i;
      i = pe(i);
    }
    return n;
  }
  let r = oa(e, t);
  for (; r && yd(r) && Mo(r); )
    r = oa(r, t);
  return r && on(r) && Mo(r) && !ys(r) ? n : r || wd(e) || n;
}
const Rd = async function(e) {
  const t = this.getOffsetParent || xu, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Md(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Id(e) {
  return Ct(e).direction === "rtl";
}
const Dd = {
  convertOffsetParentRelativeRectToViewportRelativeRect: xd,
  getDocumentElement: Ut,
  getClippingRect: Cd,
  getOffsetParent: xu,
  getElementRects: Rd,
  getClientRects: Ed,
  getDimensions: Td,
  getScale: ke,
  isElement: At,
  isRTL: Id
};
function Nd(e, t) {
  let n = null, r;
  const i = Ut(e);
  function o() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), n = null;
  }
  function s(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), o();
    const {
      left: f,
      top: c,
      width: d,
      height: h
    } = e.getBoundingClientRect();
    if (a || t(), !d || !h)
      return;
    const m = Vr(c), g = Vr(i.clientWidth - (f + d)), p = Vr(i.clientHeight - (c + h)), w = Vr(f), _ = {
      rootMargin: -m + "px " + -g + "px " + -p + "px " + -w + "px",
      threshold: wt(0, ve(1, l)) || 1
    };
    let E = !0;
    function M(P) {
      const D = P[0].intersectionRatio;
      if (D !== l) {
        if (!E)
          return s();
        D ? s(!1, D) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      E = !1;
    }
    try {
      n = new IntersectionObserver(M, {
        ..._,
        // Handle <iframe>s
        root: i.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(M, _);
    }
    n.observe(e);
  }
  return s(!0), o;
}
function Fd(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: o = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, f = _s(e), c = i || o ? [...f ? Pn(f) : [], ...Pn(t)] : [];
  c.forEach((b) => {
    i && b.addEventListener("scroll", n, {
      passive: !0
    }), o && b.addEventListener("resize", n);
  });
  const d = f && a ? Nd(f, n) : null;
  let h = -1, m = null;
  s && (m = new ResizeObserver((b) => {
    let [_] = b;
    _ && _.target === f && m && (m.unobserve(t), cancelAnimationFrame(h), h = requestAnimationFrame(() => {
      var E;
      (E = m) == null || E.observe(t);
    })), n();
  }), f && !l && m.observe(f), m.observe(t));
  let g, p = l ? Te(e) : null;
  l && w();
  function w() {
    const b = Te(e);
    p && (b.x !== p.x || b.y !== p.y || b.width !== p.width || b.height !== p.height) && n(), p = b, g = requestAnimationFrame(w);
  }
  return n(), () => {
    var b;
    c.forEach((_) => {
      i && _.removeEventListener("scroll", n), o && _.removeEventListener("resize", n);
    }), d == null || d(), (b = m) == null || b.disconnect(), m = null, l && cancelAnimationFrame(g);
  };
}
const kd = gd, Ld = vd, Bd = fd, Kd = pd, Wd = dd, Ud = ld, Hd = md, Vd = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), i = {
    platform: Dd,
    ...n
  }, o = {
    ...i.platform,
    _c: r
  };
  return cd(e, t, {
    ...i,
    platform: o
  });
};
function hn(e) {
  return typeof e == "function" ? e() : e;
}
function Eu(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function sa(e, t) {
  const n = Eu(e);
  return Math.round(t * n) / n;
}
function aa(e) {
  return {
    [`--bits-${e}-content-transform-origin`]: "var(--bits-floating-transform-origin)",
    [`--bits-${e}-content-available-width`]: "var(--bits-floating-available-width)",
    [`--bits-${e}-content-available-height`]: "var(--bits-floating-available-height)",
    [`--bits-${e}-anchor-width`]: "var(--bits-floating-anchor-width)",
    [`--bits-${e}-anchor-height`]: "var(--bits-floating-anchor-height)"
  };
}
function jd(e) {
  const t = e.whileElementsMounted, n = /* @__PURE__ */ C(() => hn(e.open) ?? !0), r = /* @__PURE__ */ C(() => hn(e.middleware)), i = /* @__PURE__ */ C(() => hn(e.transform) ?? !0), o = /* @__PURE__ */ C(() => hn(e.placement) ?? "bottom"), s = /* @__PURE__ */ C(() => hn(e.strategy) ?? "absolute"), a = e.reference;
  let l = L(0), f = L(0);
  const c = x(null);
  let d = L(T(v(s))), h = L(T(v(o))), m = L(T({})), g = L(!1);
  const p = /* @__PURE__ */ C(() => {
    const P = {
      position: v(d),
      left: "0",
      top: "0"
    };
    if (!c.current)
      return P;
    const D = sa(c.current, v(l)), N = sa(c.current, v(f));
    return v(i) ? {
      ...P,
      transform: `translate(${D}px, ${N}px)`,
      ...Eu(c.current) >= 1.5 && { willChange: "transform" }
    } : {
      position: v(d),
      left: `${D}px`,
      top: `${N}px`
    };
  });
  let w;
  function b() {
    a.current === null || c.current === null || Vd(a.current, c.current, {
      middleware: v(r),
      placement: v(o),
      strategy: v(s)
    }).then((P) => {
      A(l, T(P.x)), A(f, T(P.y)), A(d, T(P.strategy)), A(h, T(P.placement)), A(m, T(P.middlewareData)), A(g, !0);
    });
  }
  function _() {
    typeof w == "function" && (w(), w = void 0);
  }
  function E() {
    if (_(), t === void 0) {
      b();
      return;
    }
    a.current === null || c.current === null || (w = t(a.current, c.current, b));
  }
  function M() {
    v(n) || A(g, !1);
  }
  return U(b), U(E), U(M), U(() => _), {
    floating: c,
    reference: a,
    get strategy() {
      return v(d);
    },
    get placement() {
      return v(h);
    },
    get middlewareData() {
      return v(m);
    },
    get isPositioned() {
      return v(g);
    },
    get floatingStyles() {
      return v(p);
    },
    get update() {
      return b;
    }
  };
}
const zd = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
};
class qd {
  constructor() {
    F(this, "anchorNode", x(null));
    F(this, "customAnchorNode", x(null));
    F(this, "triggerNode", x(null));
    U(() => {
      this.customAnchorNode.current ? typeof this.customAnchorNode.current == "string" ? this.anchorNode.current = document.querySelector(this.customAnchorNode.current) : this.anchorNode.current = this.customAnchorNode.current : this.anchorNode.current = this.triggerNode.current;
    });
  }
}
var rr, ir, or, sr, Ze, ar, ur, Je, Ce, cr, lr, fr, dr, hr, gr, Ai, vr, Ci, mr, Ti, Mi, pr, yr, wr, _r, Ri, Ii, Di, Ni, Fi, ki, br, Li, Bi, Ki, Wi;
class Gd {
  constructor(t, n) {
    // state
    F(this, "root");
    // nodes
    F(this, "contentRef", x(null));
    F(this, "wrapperRef", x(null));
    F(this, "arrowRef", x(null));
    // ids
    F(this, "arrowId", x(Rt()));
    F(this, "id");
    F(this, "wrapperId");
    F(this, "style");
    y(this, rr, /* @__PURE__ */ C(() => {
      if (typeof this.style == "string") return mn(this.style);
      if (!this.style) return {};
    }));
    y(this, ir);
    y(this, or);
    y(this, sr);
    y(this, Ze);
    y(this, ar);
    y(this, ur);
    y(this, Je);
    y(this, Ce);
    y(this, cr);
    y(this, lr);
    y(this, fr);
    y(this, dr);
    y(this, hr);
    F(this, "onPlaced");
    F(this, "enabled");
    y(this, gr, new Vf(() => this.arrowRef.current ?? void 0));
    y(this, Ai, /* @__PURE__ */ C(() => {
      var t;
      return ((t = u(this, gr)) == null ? void 0 : t.width) ?? 0;
    }));
    y(this, vr, /* @__PURE__ */ C(() => {
      var t;
      return ((t = u(this, gr)) == null ? void 0 : t.height) ?? 0;
    }));
    y(this, Ci, /* @__PURE__ */ C(() => {
      var t;
      return ((t = u(this, or)) == null ? void 0 : t.current) + (u(this, Ze).current !== "center" ? `-${u(this, Ze).current}` : "");
    }));
    y(this, mr, /* @__PURE__ */ C(() => Array.isArray(u(this, Ce).current) ? u(this, Ce).current : [u(this, Ce).current]));
    y(this, Ti, /* @__PURE__ */ C(() => v(u(this, mr)).length > 0));
    y(this, Mi, /* @__PURE__ */ C(() => ({
      padding: u(this, cr).current,
      boundary: v(u(this, mr)).filter(Zl),
      altBoundary: this.hasExplicitBoundaries
    })));
    y(this, pr, L(void 0));
    y(this, yr, L(void 0));
    y(this, wr, L(void 0));
    y(this, _r, L(void 0));
    y(this, Ri, /* @__PURE__ */ C(() => [
      kd({
        mainAxis: u(this, sr).current + v(u(this, vr)),
        alignmentAxis: u(this, ar).current
      }),
      u(this, Je) && Ld({
        mainAxis: !0,
        crossAxis: !1,
        limiter: u(this, lr).current === "partial" ? Hd() : void 0,
        ...this.detectOverflowOptions
      }),
      u(this, Je) && Bd({ ...this.detectOverflowOptions }),
      Kd({
        ...this.detectOverflowOptions,
        apply: ({ rects: t, availableWidth: n, availableHeight: r }) => {
          const { width: i, height: o } = t.reference;
          A(u(this, pr), T(n)), A(u(this, yr), T(r)), A(u(this, wr), T(i)), A(u(this, _r), T(o));
        }
      }),
      this.arrowRef.current && Ud({
        element: this.arrowRef.current,
        padding: u(this, ur).current
      }),
      th({
        arrowWidth: v(u(this, Ai)),
        arrowHeight: v(u(this, vr))
      }),
      u(this, fr).current && Wd({
        strategy: "referenceHidden",
        ...this.detectOverflowOptions
      })
    ].filter(Boolean)));
    F(this, "floating");
    y(this, Ii, /* @__PURE__ */ C(() => eh(this.floating.placement)));
    y(this, Di, /* @__PURE__ */ C(() => nh(this.floating.placement)));
    y(this, Ni, /* @__PURE__ */ C(() => {
      var t;
      return ((t = this.floating.middlewareData.arrow) == null ? void 0 : t.x) ?? 0;
    }));
    y(this, Fi, /* @__PURE__ */ C(() => {
      var t;
      return ((t = this.floating.middlewareData.arrow) == null ? void 0 : t.y) ?? 0;
    }));
    y(this, ki, /* @__PURE__ */ C(() => {
      var t;
      return ((t = this.floating.middlewareData.arrow) == null ? void 0 : t.centerOffset) !== 0;
    }));
    y(this, br, L());
    y(this, Li, /* @__PURE__ */ C(() => zd[this.placedSide]));
    y(this, Bi, /* @__PURE__ */ C(() => {
      var t, n, r;
      return {
        id: this.wrapperId.current,
        "data-bits-floating-content-wrapper": "",
        style: {
          ...this.floating.floatingStyles,
          // keep off page when measuring
          transform: this.floating.isPositioned ? this.floating.floatingStyles.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: this.contentZIndex,
          "--bits-floating-transform-origin": `${(t = this.floating.middlewareData.transformOrigin) == null ? void 0 : t.x} ${(n = this.floating.middlewareData.transformOrigin) == null ? void 0 : n.y}`,
          "--bits-floating-available-width": `${v(u(this, pr))}px`,
          "--bits-floating-available-height": `${v(u(this, yr))}px`,
          "--bits-floating-anchor-width": `${v(u(this, wr))}px`,
          "--bits-floating-anchor-height": `${v(u(this, _r))}px`,
          // hide the content if using the hide middleware and should be hidden
          ...((r = this.floating.middlewareData.hide) == null ? void 0 : r.referenceHidden) && {
            visibility: "hidden",
            "pointer-events": "none"
          },
          ...v(u(this, rr))
        },
        // Floating UI calculates logical alignment based the `dir` attribute
        dir: u(this, ir).current
      };
    }));
    y(this, Ki, /* @__PURE__ */ C(() => ({
      "data-side": this.placedSide,
      "data-align": this.placedAlign,
      style: us({
        ...v(u(this, rr))
        // if the FloatingContent hasn't been placed yet (not all measurements done)
      })
    })));
    y(this, Wi, /* @__PURE__ */ C(() => ({
      position: "absolute",
      left: this.arrowX ? `${this.arrowX}px` : void 0,
      top: this.arrowY ? `${this.arrowY}px` : void 0,
      [this.arrowBaseSide]: 0,
      "transform-origin": {
        top: "",
        right: "0 0",
        bottom: "center 0",
        left: "100% 0"
      }[this.placedSide],
      transform: {
        top: "translateY(100%)",
        right: "translateY(50%) rotate(90deg) translateX(-50%)",
        bottom: "rotate(180deg)",
        left: "translateY(50%) rotate(-90deg) translateX(50%)"
      }[this.placedSide],
      visibility: this.cannotCenterArrow ? "hidden" : void 0
    })));
    this.id = t.id, R(this, or, t.side), R(this, sr, t.sideOffset), R(this, Ze, t.align), R(this, ar, t.alignOffset), R(this, ur, t.arrowPadding), R(this, Je, t.avoidCollisions), R(this, Ce, t.collisionBoundary), R(this, cr, t.collisionPadding), R(this, lr, t.sticky), R(this, fr, t.hideWhenDetached), R(this, hr, t.updatePositionStrategy), this.onPlaced = t.onPlaced, R(this, dr, t.strategy), R(this, ir, t.dir), this.style = t.style, this.root = n, this.enabled = t.enabled, this.wrapperId = t.wrapperId, t.customAnchor && (this.root.customAnchorNode.current = t.customAnchor.current), U(() => {
      t.customAnchor.current, ut(() => {
        this.root.customAnchorNode.current = t.customAnchor.current;
      });
    }), Et({
      id: this.wrapperId,
      ref: this.wrapperRef,
      deps: () => this.enabled.current
    }), Et({
      id: this.id,
      ref: this.contentRef,
      deps: () => this.enabled.current
    }), this.floating = jd({
      strategy: () => u(this, dr).current,
      placement: () => v(u(this, Ci)),
      middleware: () => this.middleware,
      reference: this.root.anchorNode,
      whileElementsMounted: (...r) => {
        var o;
        return Fd(...r, {
          animationFrame: ((o = u(this, hr)) == null ? void 0 : o.current) === "always"
        });
      },
      open: () => this.enabled.current
    }), U(() => {
      var r;
      this.floating.isPositioned && ((r = this.onPlaced) == null || r.current());
    }), U(() => {
      const r = this.contentRef.current;
      r && ut(() => {
        this.contentZIndex = window.getComputedStyle(r).zIndex;
      });
    }), U(() => {
      this.floating.floating.current = this.wrapperRef.current;
    });
  }
  get hasExplicitBoundaries() {
    return v(u(this, Ti));
  }
  get detectOverflowOptions() {
    return v(u(this, Mi));
  }
  get middleware() {
    return v(u(this, Ri));
  }
  get placedSide() {
    return v(u(this, Ii));
  }
  get placedAlign() {
    return v(u(this, Di));
  }
  get arrowX() {
    return v(u(this, Ni));
  }
  get arrowY() {
    return v(u(this, Fi));
  }
  get cannotCenterArrow() {
    return v(u(this, ki));
  }
  get contentZIndex() {
    return v(u(this, br));
  }
  set contentZIndex(t) {
    A(u(this, br), T(t));
  }
  get arrowBaseSide() {
    return v(u(this, Li));
  }
  get wrapperProps() {
    return v(u(this, Bi));
  }
  get props() {
    return v(u(this, Ki));
  }
  get arrowStyle() {
    return v(u(this, Wi));
  }
}
rr = new WeakMap(), ir = new WeakMap(), or = new WeakMap(), sr = new WeakMap(), Ze = new WeakMap(), ar = new WeakMap(), ur = new WeakMap(), Je = new WeakMap(), Ce = new WeakMap(), cr = new WeakMap(), lr = new WeakMap(), fr = new WeakMap(), dr = new WeakMap(), hr = new WeakMap(), gr = new WeakMap(), Ai = new WeakMap(), vr = new WeakMap(), Ci = new WeakMap(), mr = new WeakMap(), Ti = new WeakMap(), Mi = new WeakMap(), pr = new WeakMap(), yr = new WeakMap(), wr = new WeakMap(), _r = new WeakMap(), Ri = new WeakMap(), Ii = new WeakMap(), Di = new WeakMap(), Ni = new WeakMap(), Fi = new WeakMap(), ki = new WeakMap(), br = new WeakMap(), Li = new WeakMap(), Bi = new WeakMap(), Ki = new WeakMap(), Wi = new WeakMap();
class Yd {
  constructor(t, n) {
    F(this, "ref", x(null));
    t.virtualEl && t.virtualEl.current ? n.triggerNode = x.from(t.virtualEl.current) : Et({
      id: t.id,
      ref: this.ref,
      onRefChange: (r) => {
        n.triggerNode.current = r;
      }
    });
  }
}
const [
  Xd,
  Su
] = _e("Floating.Root"), [
  Zd,
  lv
] = _e("Floating.Content");
function Jd() {
  return Xd(new qd());
}
function Qd(e) {
  return Zd(new Gd(e, Su()));
}
function $d(e) {
  return new Yd(e, Su());
}
function th(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      var w, b, _;
      const { placement: n, rects: r, middlewareData: i } = t, s = ((w = i.arrow) == null ? void 0 : w.centerOffset) !== 0, a = s ? 0 : e.arrowWidth, l = s ? 0 : e.arrowHeight, [f, c] = xs(n), d = { start: "0%", center: "50%", end: "100%" }[c], h = (((b = i.arrow) == null ? void 0 : b.x) ?? 0) + a / 2, m = (((_ = i.arrow) == null ? void 0 : _.y) ?? 0) + l / 2;
      let g = "", p = "";
      return f === "bottom" ? (g = s ? d : `${h}px`, p = `${-l}px`) : f === "top" ? (g = s ? d : `${h}px`, p = `${r.floating.height + l}px`) : f === "right" ? (g = `${-l}px`, p = s ? d : `${m}px`) : f === "left" && (g = `${r.floating.width + l}px`, p = s ? d : `${m}px`), { data: { x: g, y: p } };
    }
  };
}
function xs(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
function eh(e) {
  return xs(e)[0];
}
function nh(e) {
  return xs(e)[1];
}
function rh(e, t) {
  H(t, !0), Jd();
  var n = k(), r = I(n);
  K(r, () => t.children ?? Q), O(e, n), V();
}
function ih(e, t = 1e4) {
  let n = null, r = L(T(e));
  function i() {
    return setTimeout(
      () => {
        A(r, T(e));
      },
      t
    );
  }
  return U(() => () => {
    n && clearTimeout(n);
  }), x.with(() => v(r), (o) => {
    A(r, T(o)), n && clearTimeout(n), n = i();
  });
}
function oh(e) {
  const t = ih("", 1e3), n = (s) => s.focus(), r = () => document.activeElement;
  function i(s, a) {
    var m, g;
    if (!a.length) return;
    t.current = t.current + s;
    const l = r(), f = ((g = (m = a.find((p) => p === l)) == null ? void 0 : m.textContent) == null ? void 0 : g.trim()) ?? "", c = a.map((p) => {
      var w;
      return ((w = p.textContent) == null ? void 0 : w.trim()) ?? "";
    }), d = $f(c, t.current, f), h = a.find((p) => {
      var w;
      return ((w = p.textContent) == null ? void 0 : w.trim()) === d;
    });
    return h && n(h), h;
  }
  function o() {
    t.current = "";
  }
  return {
    search: t,
    handleTypeaheadSearch: i,
    resetTypeahead: o
  };
}
function sh(e, t) {
  H(t, !0), $d({
    id: x.with(() => t.id),
    virtualEl: x.with(() => t.virtualEl)
  });
  var n = k(), r = I(n);
  K(r, () => t.children ?? Q), O(e, n), V();
}
var ah = /* @__PURE__ */ q("<div><!></div>");
function uh(e, t) {
  H(t, !0);
  let n = S(t, "side", 3, "bottom"), r = S(t, "sideOffset", 3, 0), i = S(t, "align", 3, "center"), o = S(t, "alignOffset", 3, 0), s = S(t, "arrowPadding", 3, 0), a = S(t, "avoidCollisions", 3, !0), l = S(t, "collisionBoundary", 19, () => []), f = S(t, "collisionPadding", 3, 0), c = S(t, "hideWhenDetached", 3, !1), d = S(t, "onPlaced", 3, () => {
  }), h = S(t, "sticky", 3, "partial"), m = S(t, "updatePositionStrategy", 3, "optimized"), g = S(t, "strategy", 3, "fixed"), p = S(t, "dir", 3, "ltr"), w = S(t, "style", 19, () => ({})), b = S(t, "wrapperId", 19, Rt), _ = S(t, "customAnchor", 3, null);
  const E = Qd({
    side: x.with(() => n()),
    sideOffset: x.with(() => r()),
    align: x.with(() => i()),
    alignOffset: x.with(() => o()),
    id: x.with(() => t.id),
    arrowPadding: x.with(() => s()),
    avoidCollisions: x.with(() => a()),
    collisionBoundary: x.with(() => l()),
    collisionPadding: x.with(() => f()),
    hideWhenDetached: x.with(() => c()),
    onPlaced: x.with(() => d()),
    sticky: x.with(() => h()),
    updatePositionStrategy: x.with(() => m()),
    strategy: x.with(() => g()),
    dir: x.with(() => p()),
    style: x.with(() => w()),
    enabled: x.with(() => !1),
    wrapperId: x.with(() => b()),
    customAnchor: x.with(() => _())
  }), M = /* @__PURE__ */ C(() => ft(E.wrapperProps, { style: { pointerEvents: "auto" } }));
  var P = ah();
  let D;
  var N = G(P);
  K(N, () => t.content ?? Q, () => ({ props: E.props })), dt(() => D = Gt(P, D, { ...v(M) })), O(e, P), V();
}
function ch(e, t) {
  H(t, !0), Qc(() => {
    var i;
    (i = t.onPlaced) == null || i.call(t);
  });
  var n = k(), r = I(n);
  K(r, () => t.content ?? Q, () => ({ props: {} })), O(e, n), V();
}
function lh(e, t) {
  let n = S(t, "isStatic", 3, !1), r = /* @__PURE__ */ Mt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "content",
    "isStatic",
    "onPlaced"
  ]);
  var i = k(), o = I(i);
  ot(
    o,
    n,
    (s) => {
      ch(s, {
        get content() {
          return t.content;
        },
        get onPlaced() {
          return t.onPlaced;
        }
      });
    },
    (s) => {
      uh(s, Ot(
        {
          get content() {
            return t.content;
          },
          get onPlaced() {
            return t.onPlaced;
          }
        },
        () => r
      ));
    }
  ), O(e, i);
}
var fh = /* @__PURE__ */ q("<!> <!>", 1);
function Pu(e, t) {
  H(t, !0);
  let n = S(t, "interactOutsideBehavior", 3, "close"), r = S(t, "trapFocus", 3, !0), i = S(t, "isValidEvent", 3, () => !1), o = S(t, "customAnchor", 3, null), s = S(t, "isStatic", 3, !1), a = /* @__PURE__ */ Mt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "popper",
    "onEscapeKeydown",
    "escapeKeydownBehavior",
    "preventOverflowTextSelection",
    "id",
    "onPointerDown",
    "onPointerUp",
    "side",
    "sideOffset",
    "align",
    "alignOffset",
    "arrowPadding",
    "avoidCollisions",
    "collisionBoundary",
    "collisionPadding",
    "sticky",
    "hideWhenDetached",
    "updatePositionStrategy",
    "strategy",
    "dir",
    "preventScroll",
    "wrapperId",
    "style",
    "onPlaced",
    "onInteractOutside",
    "onCloseAutoFocus",
    "onOpenAutoFocus",
    "onFocusOutside",
    "interactOutsideBehavior",
    "loop",
    "trapFocus",
    "isValidEvent",
    "customAnchor",
    "isStatic",
    "enabled"
  ]);
  lh(e, {
    get isStatic() {
      return s();
    },
    get id() {
      return t.id;
    },
    get side() {
      return t.side;
    },
    get sideOffset() {
      return t.sideOffset;
    },
    get align() {
      return t.align;
    },
    get alignOffset() {
      return t.alignOffset;
    },
    get arrowPadding() {
      return t.arrowPadding;
    },
    get avoidCollisions() {
      return t.avoidCollisions;
    },
    get collisionBoundary() {
      return t.collisionBoundary;
    },
    get collisionPadding() {
      return t.collisionPadding;
    },
    get sticky() {
      return t.sticky;
    },
    get hideWhenDetached() {
      return t.hideWhenDetached;
    },
    get updatePositionStrategy() {
      return t.updatePositionStrategy;
    },
    get strategy() {
      return t.strategy;
    },
    get dir() {
      return t.dir;
    },
    get wrapperId() {
      return t.wrapperId;
    },
    get style() {
      return t.style;
    },
    get onPlaced() {
      return t.onPlaced;
    },
    get customAnchor() {
      return o();
    },
    content: (f, c) => {
      let d = () => c == null ? void 0 : c().props;
      var h = fh(), m = I(h);
      ot(
        m,
        () => t.forceMount && t.enabled,
        (w) => {
          Qr(w, {
            get preventScroll() {
              return t.preventScroll;
            }
          });
        },
        (w) => {
          var b = k(), _ = I(b);
          ot(
            _,
            () => !t.forceMount,
            (E) => {
              Qr(E, {
                get preventScroll() {
                  return t.preventScroll;
                }
              });
            },
            null,
            !0
          ), O(w, b);
        }
      );
      var g = gt(m, 2), p = /* @__PURE__ */ C(() => t.enabled && r());
      fu(g, {
        get id() {
          return t.id;
        },
        get onOpenAutoFocus() {
          return t.onOpenAutoFocus;
        },
        get onCloseAutoFocus() {
          return t.onCloseAutoFocus;
        },
        get loop() {
          return t.loop;
        },
        get trapFocus() {
          return v(p);
        },
        get forceMount() {
          return t.forceMount;
        },
        focusScope: (b, _) => {
          let E = () => _ == null ? void 0 : _().props;
          uu(b, {
            get onEscapeKeydown() {
              return t.onEscapeKeydown;
            },
            get escapeKeydownBehavior() {
              return t.escapeKeydownBehavior;
            },
            get enabled() {
              return t.enabled;
            },
            children: (M, P) => {
              au(M, {
                get id() {
                  return t.id;
                },
                get onInteractOutside() {
                  return t.onInteractOutside;
                },
                get onFocusOutside() {
                  return t.onFocusOutside;
                },
                get interactOutsideBehavior() {
                  return n();
                },
                get isValidEvent() {
                  return i();
                },
                get enabled() {
                  return t.enabled;
                },
                children: (N, B) => {
                  let z = () => B == null ? void 0 : B().props;
                  hu(N, {
                    get id() {
                      return t.id;
                    },
                    get preventOverflowTextSelection() {
                      return t.preventOverflowTextSelection;
                    },
                    get onPointerDown() {
                      return t.onPointerDown;
                    },
                    get onPointerUp() {
                      return t.onPointerUp;
                    },
                    get enabled() {
                      return t.enabled;
                    },
                    children: (W, $) => {
                      var J = k(), nt = I(J), X = /* @__PURE__ */ lo(() => ({
                        props: ft(a, d(), z(), E(), { style: { pointerEvents: "auto" } })
                      }));
                      K(nt, () => t.popper ?? Q, () => v(X)), O(W, J);
                    },
                    $$slots: { default: !0 }
                  });
                },
                $$slots: { default: !0 }
              });
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { focusScope: !0 }
      }), O(f, h);
    },
    $$slots: { content: !0 }
  }), V();
}
function dh(e, t) {
  let n = S(t, "interactOutsideBehavior", 3, "close"), r = S(t, "trapFocus", 3, !0), i = S(t, "isValidEvent", 3, () => !1), o = S(t, "customAnchor", 3, null), s = S(t, "isStatic", 3, !1), a = /* @__PURE__ */ Mt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "popper",
    "present",
    "onEscapeKeydown",
    "escapeKeydownBehavior",
    "preventOverflowTextSelection",
    "id",
    "onPointerDown",
    "onPointerUp",
    "side",
    "sideOffset",
    "align",
    "alignOffset",
    "arrowPadding",
    "avoidCollisions",
    "collisionBoundary",
    "collisionPadding",
    "sticky",
    "hideWhenDetached",
    "updatePositionStrategy",
    "strategy",
    "dir",
    "preventScroll",
    "wrapperId",
    "style",
    "onPlaced",
    "onInteractOutside",
    "onCloseAutoFocus",
    "onOpenAutoFocus",
    "onFocusOutside",
    "interactOutsideBehavior",
    "loop",
    "trapFocus",
    "isValidEvent",
    "customAnchor",
    "isStatic"
  ]);
  hs(e, Ot(
    {
      get id() {
        return t.id;
      },
      get present() {
        return t.present;
      }
    },
    () => a,
    { presence: (f, c) => {
      let d = () => c == null ? void 0 : c().present;
      Pu(f, Ot(
        {
          get popper() {
            return t.popper;
          },
          get onEscapeKeydown() {
            return t.onEscapeKeydown;
          },
          get escapeKeydownBehavior() {
            return t.escapeKeydownBehavior;
          },
          get preventOverflowTextSelection() {
            return t.preventOverflowTextSelection;
          },
          get id() {
            return t.id;
          },
          get onPointerDown() {
            return t.onPointerDown;
          },
          get onPointerUp() {
            return t.onPointerUp;
          },
          get side() {
            return t.side;
          },
          get sideOffset() {
            return t.sideOffset;
          },
          get align() {
            return t.align;
          },
          get alignOffset() {
            return t.alignOffset;
          },
          get arrowPadding() {
            return t.arrowPadding;
          },
          get avoidCollisions() {
            return t.avoidCollisions;
          },
          get collisionBoundary() {
            return t.collisionBoundary;
          },
          get collisionPadding() {
            return t.collisionPadding;
          },
          get sticky() {
            return t.sticky;
          },
          get hideWhenDetached() {
            return t.hideWhenDetached;
          },
          get updatePositionStrategy() {
            return t.updatePositionStrategy;
          },
          get strategy() {
            return t.strategy;
          },
          get dir() {
            return t.dir;
          },
          get preventScroll() {
            return t.preventScroll;
          },
          get wrapperId() {
            return t.wrapperId;
          },
          get style() {
            return t.style;
          },
          get onPlaced() {
            return t.onPlaced;
          },
          get customAnchor() {
            return o();
          },
          get isStatic() {
            return s();
          },
          get enabled() {
            return d().current;
          },
          get onInteractOutside() {
            return t.onInteractOutside;
          },
          get onCloseAutoFocus() {
            return t.onCloseAutoFocus;
          },
          get onOpenAutoFocus() {
            return t.onOpenAutoFocus;
          },
          get interactOutsideBehavior() {
            return n();
          },
          get loop() {
            return t.loop;
          },
          get trapFocus() {
            return r();
          },
          get isValidEvent() {
            return i();
          },
          get onFocusOutside() {
            return t.onFocusOutside;
          },
          forceMount: !1
        },
        () => a
      ));
    }, $$slots: { presence: !0 } }
  ));
}
function hh(e, t) {
  let n = S(t, "interactOutsideBehavior", 3, "close"), r = S(t, "trapFocus", 3, !0), i = S(t, "isValidEvent", 3, () => !1), o = S(t, "customAnchor", 3, null), s = S(t, "isStatic", 3, !1), a = /* @__PURE__ */ Mt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "popper",
    "onEscapeKeydown",
    "escapeKeydownBehavior",
    "preventOverflowTextSelection",
    "id",
    "onPointerDown",
    "onPointerUp",
    "side",
    "sideOffset",
    "align",
    "alignOffset",
    "arrowPadding",
    "avoidCollisions",
    "collisionBoundary",
    "collisionPadding",
    "sticky",
    "hideWhenDetached",
    "updatePositionStrategy",
    "strategy",
    "dir",
    "preventScroll",
    "wrapperId",
    "style",
    "onPlaced",
    "onInteractOutside",
    "onCloseAutoFocus",
    "onOpenAutoFocus",
    "onFocusOutside",
    "interactOutsideBehavior",
    "loop",
    "trapFocus",
    "isValidEvent",
    "customAnchor",
    "isStatic",
    "enabled"
  ]);
  Pu(e, Ot(
    {
      get popper() {
        return t.popper;
      },
      get onEscapeKeydown() {
        return t.onEscapeKeydown;
      },
      get escapeKeydownBehavior() {
        return t.escapeKeydownBehavior;
      },
      get preventOverflowTextSelection() {
        return t.preventOverflowTextSelection;
      },
      get id() {
        return t.id;
      },
      get onPointerDown() {
        return t.onPointerDown;
      },
      get onPointerUp() {
        return t.onPointerUp;
      },
      get side() {
        return t.side;
      },
      get sideOffset() {
        return t.sideOffset;
      },
      get align() {
        return t.align;
      },
      get alignOffset() {
        return t.alignOffset;
      },
      get arrowPadding() {
        return t.arrowPadding;
      },
      get avoidCollisions() {
        return t.avoidCollisions;
      },
      get collisionBoundary() {
        return t.collisionBoundary;
      },
      get collisionPadding() {
        return t.collisionPadding;
      },
      get sticky() {
        return t.sticky;
      },
      get hideWhenDetached() {
        return t.hideWhenDetached;
      },
      get updatePositionStrategy() {
        return t.updatePositionStrategy;
      },
      get strategy() {
        return t.strategy;
      },
      get dir() {
        return t.dir;
      },
      get preventScroll() {
        return t.preventScroll;
      },
      get wrapperId() {
        return t.wrapperId;
      },
      get style() {
        return t.style;
      },
      get onPlaced() {
        return t.onPlaced;
      },
      get customAnchor() {
        return o();
      },
      get isStatic() {
        return s();
      },
      get enabled() {
        return t.enabled;
      },
      get onInteractOutside() {
        return t.onInteractOutside;
      },
      get onCloseAutoFocus() {
        return t.onCloseAutoFocus;
      },
      get onOpenAutoFocus() {
        return t.onOpenAutoFocus;
      },
      get interactOutsideBehavior() {
        return n();
      },
      get loop() {
        return t.loop;
      },
      get trapFocus() {
        return r();
      },
      get isValidEvent() {
        return i();
      },
      get onFocusOutside() {
        return t.onFocusOutside;
      }
    },
    () => a,
    { forceMount: !0 }
  ));
}
function ua(e, t) {
  H(t, !0);
  let n = S(t, "isMounted", 15, !1), r = S(t, "onMountedChange", 3, et);
  U(() => (ut(() => {
    n(!0), r()(!0);
  }), () => {
    n(!1), r()(!1);
  })), V();
}
const gh = [ds, yo], vh = [En, Vl, nu], Ou = [Jr, Hl, eu], mh = [...vh, ...Ou];
function jo(e) {
  return e.pointerType === "mouse";
}
function ph(e, t) {
  let n = !1;
  for (let r = 0, i = t.length - 1; r < t.length; i = r++) {
    const o = t[r].x, s = t[r].y, a = t[i].x, l = t[i].y;
    s > e.y != l > e.y && e.x < (a - o) * (e.y - s) / (l - s) + o && (n = !n);
  }
  return n;
}
function yh(e, t) {
  return t ? ph({ x: e.clientX, y: e.clientY }, t) : !1;
}
const [wh, fv] = _e("Menu.Root"), [_h, Au] = _e(["Menu.Root", "Menu.Sub"], "MenuContext"), [bh, xh] = _e("Menu.Content");
_e("Menu.Group");
_e("Menu.RadioGroup");
class Eh {
  constructor(t) {
    F(this, "onClose");
    F(this, "variant");
    F(this, "isUsingKeyboard", x(!1));
    F(this, "dir");
    F(this, "getAttr", (t) => `data-${this.variant.current}-${t}`);
    this.onClose = t.onClose, this.dir = t.dir, this.variant = t.variant, U(() => {
      const n = [], r = (s) => {
        this.isUsingKeyboard.current = !1;
      }, o = _t(document, "keydown", (s) => {
        this.isUsingKeyboard.current = !0;
        const a = _t(document, "pointerdown", r, { capture: !0, once: !0 }), l = _t(document, "pointermove", r, { capture: !0, once: !0 });
        n.push(a, l);
      }, { capture: !0 });
      return n.push(o), () => {
      };
    });
  }
}
var xr, Er;
class Sh {
  constructor(t, n, r) {
    F(this, "root");
    F(this, "open");
    F(this, "contentId", x.with(() => ""));
    y(this, xr, L(null));
    y(this, Er, L(null));
    F(this, "parentMenu");
    F(this, "toggleOpen", () => {
      this.open.current = !this.open.current;
    });
    F(this, "onOpen", () => {
      this.open.current = !0;
    });
    F(this, "onClose", () => {
      this.open.current = !1;
    });
    this.root = n, this.open = t.open, this.parentMenu = r, r && U(() => {
      r.open, ut(() => {
        var i;
        (i = this.parentMenu) != null && i.open || (this.open.current = !1);
      });
    });
  }
  get contentNode() {
    return v(u(this, xr));
  }
  set contentNode(t) {
    A(u(this, xr), T(t));
  }
  get triggerNode() {
    return v(u(this, Er));
  }
  set triggerNode(t) {
    A(u(this, Er), T(t));
  }
}
xr = new WeakMap(), Er = new WeakMap();
var Qe, Sr, Pr, Or, Ar, $e, Cr, tn, Tr, Ui, Hi, Vi, ji, zi, qi;
class Ph {
  constructor(t, n) {
    y(this, Qe);
    F(this, "contentRef");
    F(this, "parentMenu");
    y(this, Sr, L(""));
    y(this, Pr);
    y(this, Or, L(0));
    y(this, Ar, L(0));
    y(this, $e, L(null));
    y(this, Cr, L("right"));
    y(this, tn, L(0));
    y(this, Tr);
    F(this, "rovingFocusGroup");
    F(this, "isMounted");
    F(this, "isFocusWithin", new qf(() => this.parentMenu.contentNode ?? void 0));
    F(this, "getCandidateNodes", () => {
      const t = this.parentMenu.contentNode;
      return t ? Array.from(t.querySelectorAll(`[${this.parentMenu.root.getAttr("item")}]:not([data-disabled])`)) : [];
    });
    F(this, "isPointerMovingToSubmenu", (t) => {
      var r, i;
      return v(u(this, Cr)) === ((r = v(u(this, $e))) == null ? void 0 : r.side) && yh(t, (i = v(u(this, $e))) == null ? void 0 : i.area);
    });
    F(this, "onPointerGraceIntentChange", (t) => {
      A(u(this, $e), T(t));
    });
    y(this, Ui, (t) => {
      var f, c;
      if (t.defaultPrevented) return;
      const n = t.target, r = t.currentTarget;
      if (!Yt(n) || !Yt(r)) return;
      const i = ((f = n.closest(`[${this.parentMenu.root.getAttr("content")}]`)) == null ? void 0 : f.id) === this.parentMenu.contentId.current, o = t.ctrlKey || t.altKey || t.metaKey, s = t.key.length === 1;
      if (this.rovingFocusGroup.handleKeydown(n, t) || t.code === "Space") return;
      const l = this.getCandidateNodes();
      i && (t.key === ru && t.preventDefault(), !o && s && u(this, Tr).call(this, t.key, l)), ((c = t.target) == null ? void 0 : c.id) === this.parentMenu.contentId.current && mh.includes(t.key) && (t.preventDefault(), Ou.includes(t.key) && l.reverse(), cu(l));
    });
    y(this, Hi, (t) => {
      var n, r;
      pn(t.currentTarget) && pn(t.target) && ((r = (n = t.currentTarget).contains) != null && r.call(n, t.target) || (window.clearTimeout(v(u(this, Or))), this.search = ""));
    });
    y(this, Vi, () => {
      this.parentMenu.root.isUsingKeyboard.current && fe(() => this.rovingFocusGroup.focusFirstCandidate());
    });
    y(this, ji, (t) => {
      if (!jo(t)) return;
      const n = t.target;
      if (!pn(n)) return;
      const r = v(u(this, tn)) !== t.clientX, i = t.currentTarget;
      if (pn(i) && i.contains(n) && r) {
        const o = t.clientX > v(u(this, tn)) ? "right" : "left";
        A(u(this, Cr), T(o)), A(u(this, tn), T(t.clientX));
      }
    });
    F(this, "onItemEnter", (t) => !!this.isPointerMovingToSubmenu(t));
    F(this, "onItemLeave", (t) => {
      if (this.isPointerMovingToSubmenu(t)) return;
      const n = this.parentMenu.contentNode;
      n == null || n.focus(), this.rovingFocusGroup.setCurrentTabStopId("");
    });
    F(this, "onTriggerLeave", (t) => !!this.isPointerMovingToSubmenu(t));
    F(this, "onOpenAutoFocus", (t) => {
      if (t.defaultPrevented) return;
      t.preventDefault();
      const n = this.parentMenu.contentNode;
      n == null || n.focus();
    });
    F(this, "handleInteractOutside", (t) => {
      var r;
      if (!Xl(t.target)) return;
      const n = (r = this.parentMenu.triggerNode) == null ? void 0 : r.id;
      if (t.target.id === n) {
        t.preventDefault();
        return;
      }
      t.target.closest(`#${n}`) && t.preventDefault();
    });
    y(this, zi, /* @__PURE__ */ C(() => ({ open: this.parentMenu.open.current })));
    y(this, qi, /* @__PURE__ */ C(() => ({
      id: u(this, Qe).current,
      role: "menu",
      "aria-orientation": "vertical",
      [this.parentMenu.root.getAttr("content")]: "",
      "data-state": cs(this.parentMenu.open.current),
      onkeydown: u(this, Ui),
      onblur: u(this, Hi),
      onpointermove: u(this, ji),
      onfocus: u(this, Vi),
      dir: this.parentMenu.root.dir.current,
      style: { pointerEvents: "auto" }
    })));
    R(this, Qe, t.id), R(this, Pr, t.loop), this.parentMenu = n, this.parentMenu.contentId = t.id, this.contentRef = t.ref, this.isMounted = t.isMounted, Et({
      id: u(this, Qe),
      ref: this.contentRef,
      deps: () => this.parentMenu.open.current,
      onRefChange: (r) => {
        this.parentMenu.contentNode !== r && (this.parentMenu.contentNode = r);
      }
    }), Qa(() => {
      window.clearTimeout(v(u(this, Or)));
    }), R(this, Tr, oh().handleTypeaheadSearch), this.rovingFocusGroup = $l({
      rootNodeId: this.parentMenu.contentId,
      candidateAttr: this.parentMenu.root.getAttr("item"),
      loop: u(this, Pr),
      orientation: x.with(() => "vertical")
    });
  }
  get search() {
    return v(u(this, Sr));
  }
  set search(t) {
    A(u(this, Sr), T(t));
  }
  get pointerGraceTimer() {
    return v(u(this, Ar));
  }
  set pointerGraceTimer(t) {
    A(u(this, Ar), T(t));
  }
  get snippetProps() {
    return v(u(this, zi));
  }
  get props() {
    return v(u(this, qi));
  }
}
Qe = new WeakMap(), Sr = new WeakMap(), Pr = new WeakMap(), Or = new WeakMap(), Ar = new WeakMap(), $e = new WeakMap(), Cr = new WeakMap(), tn = new WeakMap(), Tr = new WeakMap(), Ui = new WeakMap(), Hi = new WeakMap(), Vi = new WeakMap(), ji = new WeakMap(), zi = new WeakMap(), qi = new WeakMap();
var en, Gi, Yi, Xi, Zi, Ji;
class Oh {
  constructor(t, n) {
    F(this, "content");
    F(this, "ref");
    F(this, "id");
    F(this, "disabled");
    y(this, en, L(!1));
    y(this, Gi, (t) => {
      if (!t.defaultPrevented && jo(t))
        if (this.disabled.current)
          this.content.onItemLeave(t);
        else {
          if (this.content.onItemEnter(t)) return;
          const r = t.currentTarget;
          if (!Yt(r)) return;
          r.focus();
        }
    });
    y(this, Yi, async (t) => {
      fe(() => {
        t.defaultPrevented || jo(t) && this.content.onItemLeave(t);
      });
    });
    y(this, Xi, async (t) => {
      fe(() => {
        t.defaultPrevented || this.disabled.current || A(u(this, en), !0);
      });
    });
    y(this, Zi, async (t) => {
      fe(() => {
        t.defaultPrevented || A(u(this, en), !1);
      });
    });
    y(this, Ji, /* @__PURE__ */ C(() => ({
      id: this.id.current,
      tabindex: -1,
      role: "menuitem",
      "aria-disabled": Kl(this.disabled.current),
      "data-disabled": tu(this.disabled.current),
      "data-highlighted": v(u(this, en)) ? "" : void 0,
      [this.content.parentMenu.root.getAttr("item")]: "",
      //
      onpointermove: u(this, Gi),
      onpointerleave: u(this, Yi),
      onfocus: u(this, Xi),
      onblur: u(this, Zi)
    })));
    this.content = n, this.id = t.id, this.disabled = t.disabled, this.ref = t.ref, Et({
      id: this.id,
      ref: this.ref,
      deps: () => this.content.isMounted.current
    });
  }
  get props() {
    return v(u(this, Ji));
  }
}
en = new WeakMap(), Gi = new WeakMap(), Yi = new WeakMap(), Xi = new WeakMap(), Zi = new WeakMap(), Ji = new WeakMap();
var Pt, Mr, Rr, Qi, $i, to, eo, no, ro;
class Ah {
  constructor(t, n) {
    y(this, Pt);
    y(this, Mr);
    y(this, Rr, L(!1));
    F(this, "root");
    y(this, Qi, (t) => {
      const n = u(this, Pt).content.search !== "";
      if (!(u(this, Pt).disabled.current || n && t.key === yo) && gh.includes(t.key)) {
        if (!Yt(t.currentTarget)) return;
        t.currentTarget.click(), t.preventDefault();
      }
    });
    y(this, $i, async () => {
      if (u(this, Pt).disabled.current) return;
      const t = new CustomEvent("menuitemselect", { bubbles: !0, cancelable: !0 });
      u(this, Mr).current(t), await rs(), t.defaultPrevented ? u(this, Pt).content.parentMenu.root.isUsingKeyboard.current = !1 : u(this, Pt).content.parentMenu.root.onClose();
    });
    y(this, to, () => {
      u(this, Pt).disabled.current || u(this, $i).call(this);
    });
    y(this, eo, async (t) => {
      var n;
      if (!t.defaultPrevented && !v(u(this, Rr))) {
        if (!Yt(t.currentTarget)) return;
        (n = t.currentTarget) == null || n.click();
      }
    });
    y(this, no, () => {
      A(u(this, Rr), !0);
    });
    y(this, ro, /* @__PURE__ */ C(() => ft(u(this, Pt).props, {
      onclick: u(this, to),
      onpointerdown: u(this, no),
      onpointerup: u(this, eo),
      onkeydown: u(this, Qi)
    })));
    R(this, Pt, n), this.root = n.content.parentMenu.root, R(this, Mr, t.onSelect);
  }
  get props() {
    return v(u(this, ro));
  }
}
Pt = new WeakMap(), Mr = new WeakMap(), Rr = new WeakMap(), Qi = new WeakMap(), $i = new WeakMap(), to = new WeakMap(), eo = new WeakMap(), no = new WeakMap(), ro = new WeakMap();
var nn, Ir, ct, zt, io, oo, so, ao, uo;
class Ch {
  constructor(t, n) {
    y(this, nn);
    y(this, Ir);
    y(this, ct);
    y(this, zt);
    y(this, io, (t) => {
      if (!u(this, zt).current) {
        if (t.pointerType === "touch") return t.preventDefault();
        t.button === 0 && t.ctrlKey === !1 && (u(this, ct).toggleOpen(), u(this, ct).open.current || t.preventDefault());
      }
    });
    y(this, oo, (t) => {
      u(this, zt).current || t.pointerType === "touch" && (t.preventDefault(), u(this, ct).toggleOpen());
    });
    y(this, so, (t) => {
      if (!u(this, zt).current) {
        if (t.key === yo || t.key === ds) {
          u(this, ct).toggleOpen(), t.preventDefault();
          return;
        }
        t.key === En && (u(this, ct).onOpen(), t.preventDefault());
      }
    });
    y(this, ao, /* @__PURE__ */ C(() => {
      if (u(this, ct).open.current && u(this, ct).contentId.current) return u(this, ct).contentId.current;
    }));
    y(this, uo, /* @__PURE__ */ C(() => ({
      id: u(this, nn).current,
      disabled: u(this, zt).current,
      "aria-haspopup": "menu",
      "aria-expanded": Wl(u(this, ct).open.current),
      "aria-controls": v(u(this, ao)),
      "data-disabled": tu(u(this, zt).current),
      "data-state": cs(u(this, ct).open.current),
      [u(this, ct).root.getAttr("trigger")]: "",
      //
      onpointerdown: u(this, io),
      onpointerup: u(this, oo),
      onkeydown: u(this, so)
    })));
    R(this, Ir, t.ref), R(this, nn, t.id), R(this, ct, n), R(this, zt, t.disabled), Et({
      id: u(this, nn),
      ref: u(this, Ir),
      onRefChange: (r) => {
        u(this, ct).triggerNode = r;
      }
    });
  }
  get props() {
    return v(u(this, uo));
  }
}
nn = new WeakMap(), Ir = new WeakMap(), ct = new WeakMap(), zt = new WeakMap(), io = new WeakMap(), oo = new WeakMap(), so = new WeakMap(), ao = new WeakMap(), uo = new WeakMap();
function Th(e) {
  return wh(new Eh(e));
}
function Mh(e, t) {
  const n = new Sh(t, e);
  return _h(n);
}
function Rh(e) {
  const t = Au();
  return new Ch(e, t);
}
function Ih(e) {
  const t = Au();
  return bh(new Ph(e, t));
}
function Dh(e) {
  const t = xh(), n = new Oh(e, t);
  return new Ah(e, n);
}
var Nh = /* @__PURE__ */ q("<div><!></div>");
function Fh(e, t) {
  H(t, !0);
  let n = S(t, "ref", 15, null), r = S(t, "id", 19, Rt), i = S(t, "disabled", 3, !1), o = S(t, "onSelect", 3, et), s = /* @__PURE__ */ Mt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "child",
    "children",
    "ref",
    "id",
    "disabled",
    "onSelect"
  ]);
  const a = Dh({
    id: x.with(() => r()),
    disabled: x.with(() => i()),
    onSelect: x.with(() => o()),
    ref: x.with(() => n(), (d) => n(d))
  }), l = /* @__PURE__ */ C(() => ft(s, a.props));
  var f = k(), c = I(f);
  ot(
    c,
    () => t.child,
    (d) => {
      var h = k(), m = I(h);
      K(m, () => t.child, () => ({ props: v(l) })), O(d, h);
    },
    (d) => {
      var h = Nh();
      let m;
      var g = G(h);
      K(g, () => t.children ?? Q), dt(() => m = Gt(h, m, { ...v(l) })), O(d, h);
    }
  ), O(e, f), V();
}
function kh(e, t) {
  H(t, !0);
  let n = S(t, "open", 15, !1), r = S(t, "onOpenChange", 3, et), i = S(t, "controlledOpen", 3, !1);
  df({
    variant: x.with(() => "dialog"),
    open: x.with(() => n(), (a) => {
      i() || n(a), r()(a);
    })
  });
  var o = k(), s = I(o);
  K(s, () => t.children ?? Q), O(e, o), V();
}
var Lh = /* @__PURE__ */ q("<button><!></button>");
function Cu(e, t) {
  H(t, !0);
  let n = S(t, "id", 19, Rt), r = S(t, "ref", 15, null), i = S(t, "disabled", 3, !1), o = /* @__PURE__ */ Mt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "children",
    "child",
    "id",
    "ref",
    "disabled"
  ]);
  const s = mf({
    variant: x.with(() => "close"),
    id: x.with(() => n()),
    ref: x.with(() => r(), (c) => r(c)),
    disabled: x.with(() => !!i())
  }), a = /* @__PURE__ */ C(() => ft(o, s.props));
  var l = k(), f = I(l);
  ot(
    f,
    () => t.child,
    (c) => {
      var d = k(), h = I(d);
      K(h, () => t.child, () => ({ props: v(a) })), O(c, d);
    },
    (c) => {
      var d = Lh();
      let h;
      var m = G(d);
      K(m, () => t.children ?? Q), dt(() => h = Gt(d, h, { ...v(a) })), O(c, d);
    }
  ), O(e, l), V();
}
var Bh = /* @__PURE__ */ q("<!> <!>", 1), Kh = /* @__PURE__ */ q("<!> <div><!></div>", 1);
function Wh(e, t) {
  H(t, !0);
  let n = S(t, "id", 19, Rt), r = S(t, "ref", 15, null), i = S(t, "forceMount", 3, !1), o = S(t, "onCloseAutoFocus", 3, et), s = S(t, "onEscapeKeydown", 3, et), a = S(t, "onInteractOutside", 3, et), l = S(t, "trapFocus", 3, !0), f = S(t, "preventScroll", 3, !0), c = S(t, "restoreScrollDelay", 3, null), d = /* @__PURE__ */ Mt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "id",
    "children",
    "child",
    "ref",
    "forceMount",
    "onCloseAutoFocus",
    "onEscapeKeydown",
    "onInteractOutside",
    "trapFocus",
    "preventScroll",
    "restoreScrollDelay"
  ]);
  const h = gf({
    id: x.with(() => n()),
    ref: x.with(() => r(), (p) => r(p))
  }), m = /* @__PURE__ */ C(() => ft(d, h.props));
  var g = /* @__PURE__ */ C(() => h.root.open.current || i());
  hs(e, Ot(() => v(m), {
    get forceMount() {
      return i();
    },
    get present() {
      return v(g);
    },
    presence: (w, b) => {
      let _ = () => b == null ? void 0 : b().present;
      var E = /* @__PURE__ */ C(() => Zf({
        forceMount: i(),
        present: _().current,
        trapFocus: l(),
        open: h.root.open.current
      }));
      fu(w, Ot(
        {
          loop: !0,
          get trapFocus() {
            return v(E);
          }
        },
        () => v(m),
        {
          onCloseAutoFocus: (P) => {
            var D;
            o()(P), !P.defaultPrevented && ((D = h.root.triggerNode) == null || D.focus());
          },
          focusScope: (P, D) => {
            let N = () => D == null ? void 0 : D().props;
            uu(P, Ot(() => v(m), {
              get enabled() {
                return _().current;
              },
              onEscapeKeydown: (B) => {
                s()(B), !B.defaultPrevented && h.root.handleClose();
              },
              children: (B, z) => {
                au(B, Ot(() => v(m), {
                  get enabled() {
                    return _().current;
                  },
                  onInteractOutside: (W) => {
                    a()(W), !W.defaultPrevented && h.root.handleClose();
                  },
                  children: (W, $) => {
                    hu(W, Ot(() => v(m), {
                      get enabled() {
                        return _().current;
                      },
                      children: (J, nt) => {
                        var X = k(), mt = I(X);
                        ot(
                          mt,
                          () => t.child,
                          (ht) => {
                            var tt = Bh(), rt = I(tt);
                            ot(rt, () => h.root.open.current, (pt) => {
                              Qr(pt, {
                                get preventScroll() {
                                  return f();
                                },
                                get restoreScrollDelay() {
                                  return c();
                                }
                              });
                            });
                            var st = gt(rt, 2), Qt = /* @__PURE__ */ lo(() => ({
                              props: ft(v(m), N()),
                              ...h.snippetProps
                            }));
                            K(st, () => t.child, () => v(Qt)), O(ht, tt);
                          },
                          (ht) => {
                            var tt = Kh(), rt = I(tt);
                            Qr(rt, {
                              get preventScroll() {
                                return f();
                              }
                            });
                            var st = gt(rt, 2);
                            const Qt = /* @__PURE__ */ C(() => ft(v(m), N()));
                            let pt;
                            var $t = G(st);
                            K($t, () => t.children ?? Q), dt(() => pt = Gt(st, pt, { ...v(Qt) })), O(ht, tt);
                          }
                        ), O(J, X);
                      },
                      $$slots: { default: !0 }
                    }));
                  },
                  $$slots: { default: !0 }
                }));
              },
              $$slots: { default: !0 }
            }));
          },
          $$slots: { focusScope: !0 }
        }
      ));
    },
    $$slots: { presence: !0 }
  })), V();
}
function Uh(e, t) {
  H(t, !0);
  let n = S(t, "open", 15, !1), r = S(t, "dir", 3, "ltr"), i = S(t, "onOpenChange", 3, et), o = S(t, "controlledOpen", 3, !1), s = S(t, "_internal_variant", 3, "dropdown-menu");
  const a = Th({
    variant: x.with(() => s()),
    dir: x.with(() => r()),
    onClose: () => {
      var l;
      o() ? i()(!1) : (n(!1), (l = i()) == null || l(!1));
    }
  });
  Mh(a, {
    open: x.with(() => n(), (l) => {
      o() || n(l), i()(l);
    })
  }), rh(e, {
    children: (l, f) => {
      var c = k(), d = I(c);
      K(d, () => t.children ?? Q), O(l, c);
    },
    $$slots: { default: !0 }
  }), V();
}
var Hh = /* @__PURE__ */ q("<div><!></div>"), Vh = /* @__PURE__ */ q("<!> <!>", 1), jh = /* @__PURE__ */ q("<div><!></div>"), zh = /* @__PURE__ */ q("<!> <!>", 1);
function qh(e, t) {
  H(t, !0);
  let n = S(t, "id", 19, Rt), r = S(t, "ref", 15, null), i = S(t, "loop", 3, !0), o = S(t, "onInteractOutside", 3, et), s = S(t, "onEscapeKeydown", 3, et), a = S(t, "forceMount", 3, !1), l = /* @__PURE__ */ Mt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "id",
    "child",
    "children",
    "ref",
    "loop",
    "onInteractOutside",
    "onEscapeKeydown",
    "forceMount"
  ]), f = L(!1);
  const c = Ih({
    id: x.with(() => n()),
    loop: x.with(() => i()),
    ref: x.with(() => r(), (w) => r(w)),
    isMounted: x.with(() => v(f))
  }), d = /* @__PURE__ */ C(() => ft(l, c.props));
  function h(w) {
    c.handleInteractOutside(w), !w.defaultPrevented && (o()(w), !w.defaultPrevented && c.parentMenu.onClose());
  }
  function m(w) {
    s()(w), !w.defaultPrevented && c.parentMenu.onClose();
  }
  var g = k(), p = I(g);
  ot(
    p,
    a,
    (w) => {
      hh(w, Ot(() => v(d), {
        get enabled() {
          return c.parentMenu.open.current;
        },
        onInteractOutside: h,
        onEscapeKeydown: m,
        trapFocus: !0,
        get loop() {
          return i();
        },
        forceMount: !0,
        get id() {
          return n();
        },
        popper: (_, E) => {
          let M = () => E == null ? void 0 : E().props;
          var P = Vh();
          const D = /* @__PURE__ */ C(() => ft(M(), {
            style: aa("dropdown-menu")
          }));
          var N = I(P);
          ot(
            N,
            () => t.child,
            (z) => {
              var W = k(), $ = I(W);
              K($, () => t.child, () => ({
                props: v(D),
                ...c.snippetProps
              })), O(z, W);
            },
            (z) => {
              var W = Hh();
              let $;
              var J = G(W);
              K(J, () => t.children ?? Q), dt(() => $ = Gt(W, $, { ...v(D) })), O(z, W);
            }
          );
          var B = gt(N, 2);
          ua(B, {
            get isMounted() {
              return v(f);
            },
            set isMounted(z) {
              A(f, T(z));
            }
          }), O(_, P);
        },
        $$slots: { popper: !0 }
      }));
    },
    (w) => {
      var b = k(), _ = I(b);
      ot(
        _,
        () => !a(),
        (E) => {
          dh(E, Ot(() => v(d), {
            get present() {
              return c.parentMenu.open.current;
            },
            onInteractOutside: h,
            onEscapeKeydown: m,
            trapFocus: !0,
            get loop() {
              return i();
            },
            forceMount: !1,
            get id() {
              return n();
            },
            popper: (P, D) => {
              let N = () => D == null ? void 0 : D().props;
              var B = zh();
              const z = /* @__PURE__ */ C(() => ft(N(), {
                style: aa("dropdown-menu")
              }));
              var W = I(B);
              ot(
                W,
                () => t.child,
                (J) => {
                  var nt = k(), X = I(nt);
                  K(X, () => t.child, () => ({
                    props: v(z),
                    ...c.snippetProps
                  })), O(J, nt);
                },
                (J) => {
                  var nt = jh();
                  let X;
                  var mt = G(nt);
                  K(mt, () => t.children ?? Q), dt(() => X = Gt(nt, X, { ...v(z) })), O(J, nt);
                }
              );
              var $ = gt(W, 2);
              ua($, {
                get isMounted() {
                  return v(f);
                },
                set isMounted(J) {
                  A(f, T(J));
                }
              }), O(P, B);
            },
            $$slots: { popper: !0 }
          }));
        },
        null,
        !0
      ), O(w, b);
    }
  ), O(e, g), V();
}
var Gh = /* @__PURE__ */ q("<button><!></button>");
function Yh(e, t) {
  H(t, !0);
  let n = S(t, "id", 19, Rt), r = S(t, "ref", 15, null), i = S(t, "disabled", 3, !1), o = /* @__PURE__ */ Mt(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "id",
    "ref",
    "child",
    "children",
    "disabled"
  ]);
  const s = Rh({
    id: x.with(() => n()),
    disabled: x.with(() => i() ?? !1),
    ref: x.with(() => r(), (l) => r(l))
  }), a = /* @__PURE__ */ C(() => ft(o, s.props));
  sh(e, {
    get id() {
      return n();
    },
    children: (l, f) => {
      var c = k(), d = I(c);
      ot(
        d,
        () => t.child,
        (h) => {
          var m = k(), g = I(m);
          K(g, () => t.child, () => ({ props: v(a) })), O(h, m);
        },
        (h) => {
          var m = Gh();
          let g;
          var p = G(m);
          K(p, () => t.children ?? Q), dt(() => g = Gt(m, g, { ...v(a) })), O(h, m);
        }
      ), O(l, c);
    },
    $$slots: { default: !0 }
  }), V();
}
const Xh = {
  "chevron-down": "chevron-down",
  "comment-lines": "comment-lines",
  close: "close",
  "copy-to-clipboard": "copy-to-clipboard"
};
var Zh = /* @__PURE__ */ Nc('<svg role="img"><use></use></svg>');
function So(e, t) {
  const n = S(t, "class", 3, ""), r = S(t, "size", 3, 16);
  var i = Zh(), o = G(i);
  dt(() => {
    Jc(i, `gl-icon s${r() ?? ""} ${n() ?? ""}`), po(o, "href", `/assets/icons-1563760c6022424ca5187159258484be0c106b044e5e5a1b4f0be7a10cd6c90f.svg#${Xh[t.name] ?? ""}`);
  }), O(e, i);
}
var Jh = /* @__PURE__ */ q('<span class="gl-button-text gl-w-full"><span class="gl-new-dropdown-button-text"><!></span> <!></span>'), Qh = /* @__PURE__ */ q("<div><!></div>");
function $h(e, t) {
  H(t, !0);
  const n = S(t, "class", 3, "");
  var r = Qh(), i = G(r);
  it(i, () => Yh, (o, s) => {
    s(o, {
      class: "btn btn-default btn-md gl-button gl-new-dropdown-toggle",
      children: (a, l) => {
        var f = Jh(), c = G(f), d = G(c);
        K(d, () => t.children);
        var h = gt(c, 2);
        So(h, {
          name: "chevron-down",
          class: "gl-button-icon gl-new-dropdown-chevron"
        }), O(a, f);
      },
      $$slots: { default: !0 }
    });
  }), dt(() => ss(r, `gl-disclosure-dropdown gl-new-dropdown ${n() ?? ""}`)), O(e, r), V();
}
var tg = /* @__PURE__ */ q('<div class="gl-new-dropdown-panel gl-display-block!"><div class="gl-new-dropdown-inner"><div class="gl-new-dropdown-contents"><!></div></div></div>');
function eg(e, t) {
  H(t, !0);
  var n = k(), r = I(n);
  it(r, () => qh, (i, o) => {
    o(i, {
      class: "gl-new-dropdown",
      align: "start",
      sideOffset: 4,
      children: (s, a) => {
        var l = tg(), f = G(l), c = G(f), d = G(c);
        K(d, () => t.children), O(s, l);
      },
      $$slots: { default: !0 }
    });
  }), O(e, n), V();
}
var ng = /* @__PURE__ */ q('<div class="gl-new-dropdown-item-content"><span class="gl-new-dropdown-item-text-wrapper"><!></span></div>');
function rg(e, t) {
  H(t, !0);
  var n = k(), r = I(n);
  it(r, () => Fh, (i, o) => {
    o(i, {
      class: "gl-new-dropdown-item",
      get onclick() {
        return t.onclick;
      },
      children: (s, a) => {
        var l = ng(), f = G(l), c = G(f);
        K(c, () => t.children), O(s, l);
      },
      $$slots: { default: !0 }
    });
  }), O(e, n), V();
}
const jr = {
  Root: Uh,
  Trigger: $h,
  Content: eg,
  Item: rg
};
var ig = /* @__PURE__ */ q('<img src="/uploads/-/system/project/avatar/10/256x256.png" alt="Daktela logo">');
function og(e, t) {
  const n = S(t, "class", 3, "");
  var r = ig();
  dt(() => {
    ss(r, n()), po(r, "style", t.style);
  }), O(e, r);
}
var sg = /* @__PURE__ */ q("<!> ", 1), ag = /* @__PURE__ */ q("<!> <!>", 1);
function Tu(e, t) {
  const n = S(t, "class", 3, "");
  var r = k(), i = I(r);
  it(i, () => jr.Root, (o, s) => {
    s(o, {
      children: (a, l) => {
        var f = ag(), c = I(f);
        it(c, () => jr.Trigger, (h, m) => {
          m(h, {
            get class() {
              return n();
            },
            children: (g, p) => {
              og(g, { class: "gl-icon s14", style: "scale: 1.5" });
            },
            $$slots: { default: !0 }
          });
        });
        var d = gt(c, 2);
        it(d, () => jr.Content, (h, m) => {
          m(h, {
            children: (g, p) => {
              var w = k(), b = I(w);
              zc(b, 17, () => t.features, (_) => _.title, (_, E) => {
                var M = k(), P = I(M);
                it(P, () => jr.Item, (D, N) => {
                  N(D, {
                    get onclick() {
                      return v(E).onClick;
                    },
                    children: (B, z) => {
                      var W = sg(), $ = I(W);
                      So($, {
                        get name() {
                          return v(E).icon;
                        },
                        class: "gl-mr-2"
                      });
                      var J = gt($);
                      dt(() => za(J, ` ${v(E).title ?? ""}`)), O(B, W);
                    },
                    $$slots: { default: !0 }
                  });
                }), O(_, M);
              }), O(g, w);
            },
            $$slots: { default: !0 }
          });
        }), O(a, f);
      },
      $$slots: { default: !0 }
    });
  }), O(e, r);
}
const zo = {
  projects: {
    ref() {
      const e = location.pathname.match(/^\/?(.*?)(?:\/-\/|$)/);
      if (!e)
        throw Error(`Could not parse project ref: ${location.pathname}`);
      return e[1];
    }
  },
  commits: {
    sha() {
      const e = location.pathname.match(/\/-\/commit\/(\w+)/);
      if (!e)
        throw Error(`Could not parse commit SHA: ${location.pathname}`);
      return e[1];
    }
  }
};
function ug(e) {
  Qf(e, { class: "modal-backdrop" });
}
var cg = /* @__PURE__ */ q('<div class="modal fade show gl-modal" style="display: block;"><div><div class="modal-content"><!></div></div></div>');
function lg(e, t) {
  H(t, !0);
  const n = S(t, "size", 3, "md");
  var r = k(), i = I(r);
  it(i, () => Wh, (o, s) => {
    s(o, {
      children: (a, l) => {
        var f = cg(), c = G(f), d = G(c), h = G(d);
        K(h, () => t.children), dt(() => ss(c, `modal-dialog modal-${n() ?? ""}`)), O(a, f);
      },
      $$slots: { default: !0 }
    });
  }), O(e, r), V();
}
var fg = /* @__PURE__ */ q('<header class="modal-header"><!></header>');
function dg(e, t) {
  H(t, !0);
  var n = fg(), r = G(n);
  K(r, () => t.children), O(e, n), V();
}
function hg(e, t) {
  H(t, !0);
  var n = k(), r = I(n);
  it(r, () => yf, (i, o) => {
    o(i, {
      class: "modal-title",
      children: (s, a) => {
        var l = k(), f = I(l);
        K(f, () => t.children), O(s, l);
      },
      $$slots: { default: !0 }
    });
  }), O(e, n), V();
}
var gg = /* @__PURE__ */ q('<span class="gl-button-text"><!></span>');
function vg(e, t) {
  H(t, !0);
  var n = k(), r = I(n);
  it(r, () => Cu, (i, o) => {
    o(i, {
      class: "btn btn-default btn-md gl-button",
      children: (s, a) => {
        var l = gg(), f = G(l);
        ot(
          f,
          () => t.children,
          (c) => {
            var d = k(), h = I(d);
            K(h, () => t.children), O(c, d);
          },
          (c) => {
            var d = ja("Close");
            O(c, d);
          }
        ), O(s, l);
      },
      $$slots: { default: !0 }
    });
  }), O(e, n), V();
}
function mg(e) {
  Cu(e, {
    class: "btn btn-default btn-sm gl-button btn-default-tertiary btn-icon",
    children: (t, n) => {
      So(t, { name: "close" });
    },
    $$slots: { default: !0 }
  });
}
var pg = /* @__PURE__ */ q('<div class="modal-body"><!></div>');
function yg(e, t) {
  H(t, !0);
  var n = pg(), r = G(n);
  K(r, () => t.children), O(e, n), V();
}
var wg = /* @__PURE__ */ q('<footer class="modal-footer"><!></footer>');
function _g(e, t) {
  H(t, !0);
  var n = wg(), r = G(n);
  K(r, () => t.children), O(e, n), V();
}
const It = {
  Root: kh,
  Portal: _f,
  Overlay: ug,
  Content: lg,
  Header: dg,
  Title: hg,
  Close: vg,
  CloseIcon: mg,
  Body: yg,
  Footer: _g
};
var bg = /* @__PURE__ */ q('<div class="gl-p-7 gl-text-center"><div class="gl-spinner-container gl-pb-2"><span class="gl-vertical-align-text-bottom! gl-spinner gl-spinner-dark gl-spinner-lg"></span></div> Loading</div>');
function xg(e) {
  var t = bg();
  O(e, t);
}
const Eg = [
  "Menlo",
  "'DejaVu Sans Mono'",
  "'Liberation Mono'",
  "Consolas",
  "'Ubuntu Mono'",
  "'Courier New'",
  "'andale mono'",
  "'lucida console'",
  "monospace"
].join(", "), Sg = [
  `font-family:${Eg}`,
  "font-size:0.8125rem",
  "margin-top:8px",
  "margin-bottom:8px",
  "color:#999999",
  "padding:8px 0 8px 8px",
  "border-width:0 0 0 3px",
  "border-style:none none none solid",
  "border-color:#444444"
].join(";");
function Pg(e) {
  return Og(e) + Ag(e) + Rg(e) + Ig(e) + Dg(e);
}
function Og(e) {
  return `<p><strong>${e.title}</strong></p>`;
}
function Ag(e) {
  return Es("Commits", Cg([e].concat(e.cherryPicks)));
}
function Cg(e) {
  return e.map((t) => `${Tg(t.branch)} ${Mg(t.commit)}`);
}
function Tg(e) {
  return Ss(e.name, e.web_url);
}
function Mg(e) {
  return Ss(e.web_url, e.web_url);
}
function Rg(e) {
  return Es("Merge requests", e.mergeRequests.map((t) => Mu(t.web_url)));
}
function Ig(e) {
  return Object.entries(e.extra).reduce((t, [n, r]) => t + Es(n, Fg(r), !0), "");
}
function Dg(e) {
  return e.body === "" ? "" : `<p>Notes (copied from commit message):</p><pre style="${Sg}">${e.body}</pre>`;
}
function Es(e, t, n = !1) {
  return t.length ? t.length === 1 && n ? `<p>${e}: ${t[0]}</p>` : `<p>${e}:</p>` + Ng(t) : "";
}
function Ng(e) {
  return `<ul>${e.map((t) => `<li>${t}</li>`).join("")}</ul>`;
}
function Ss(e, t) {
  return `<a href="${t}" target="_blank" rel="noreferrer noopener">${e}</a>`;
}
function Fg(e) {
  return e.map(Mu);
}
function Mu(e) {
  try {
    return Ss(e, new URL(e).toString());
  } catch {
    return e;
  }
}
async function kg(e, t) {
  try {
    await navigator.clipboard.writeText(v(t));
  } catch (n) {
    console.error(n);
  }
}
var Lg = /* @__PURE__ */ q('<span>Ticket: <a target="_blank" rel="noreferrer noopener"> </a></span>'), Bg = /* @__PURE__ */ q('<div class="gl-display-flex gl-justify-content-space-between gl-mb-2"><div><!></div> <button title="Copy message" class="btn input-group-text btn-default btn-md gl-button btn-default-secondary btn-icon"><!></button></div> <textarea readonly="" class="gl-form-input gl-form-textarea form-control"></textarea>', 1);
function Kg(e, t) {
  H(t, !0);
  const n = /* @__PURE__ */ C(() => Pg(t.comment));
  var r = Bg(), i = I(r), o = G(i), s = G(o);
  ot(s, () => t.comment.ticket, (c) => {
    var d = Lg(), h = gt(G(d)), m = G(h);
    dt(() => {
      po(h, "href", t.comment.ticket), za(m, t.comment.ticket);
    }), O(c, d);
  });
  var a = gt(o, 2);
  a.__click = [kg, n];
  var l = G(a);
  So(l, {
    name: "copy-to-clipboard",
    class: "gl-button-icon"
  });
  var f = gt(i, 2);
  dt(() => Zc(f, v(n))), O(e, r), V();
}
Ha(["click"]);
const Wg = "/api/v4", ue = {
  commits: {
    async findBySHA(e, t) {
      return gn(`projects/${Ie(e)}/repository/commits/${t}`);
    },
    async refs(e, t, n = "all") {
      return gn(`projects/${Ie(e)}/repository/commits/${t}/refs`, { type: n });
    },
    async comments(e, t) {
      return gn(`projects/${Ie(e)}/repository/commits/${t}/comments`);
    },
    async mergeRequests(e, t) {
      return gn(`projects/${Ie(e)}/repository/commits/${t}/merge_requests`);
    }
  },
  branches: {
    async findByName(e, t) {
      return gn(`projects/${Ie(e)}/repository/branches/${Ie(t)}`);
    }
  }
};
function Ie(e) {
  return encodeURIComponent(e);
}
async function gn(e, t = {}) {
  const n = new URL(`${Wg}/${e}`, location.origin);
  return Object.entries(t).forEach(([i, o]) => n.searchParams.append(i, o)), await (await fetch(n)).json();
}
const ca = {
  async findRefs(e, t) {
    const n = await Ug(e, t);
    return Promise.all(
      n.map((r) => this.findRef(e, r))
    );
  },
  async findRef(e, t) {
    const [n, r] = await Promise.all([
      ue.commits.findBySHA(e, t),
      ue.commits.refs(e, t, "branch")
    ]);
    return { commit: n, branches: r };
  },
  async deRefAll(e, t) {
    return await Promise.all(
      t.map((n) => this.deRef(e, n))
    );
  },
  async deRef(e, t) {
    const n = await ue.branches.findByName(e, t.branch.name);
    return { commit: t.commit, branch: n };
  }
};
async function Ug(e, t) {
  const n = await ue.commits.comments(e, t);
  return Hg(n);
}
function Hg(e) {
  return e.reduce((t, n) => {
    const r = n.note.match(/mentioned\s+in\s+commit\s+(\w+)/i);
    return r !== null && t.push(r[1]), t;
  }, []);
}
const Vg = {
  message(e) {
    const t = { title: "", body: "", ticket: void 0, extra: {} }, n = e.message.split(`
`).map((r) => r.trim());
    for (qo(n), t.title = jg(n), qo(n); n.length; )
      zg(t, n);
    return t.body = t.body.trim(), t;
  }
};
function jg(e) {
  const t = e.shift();
  if (t === void 0)
    throw Error("Could not parse commit title");
  return t.replace(/\s*#\s*\d+\s*$/, "");
}
function zg(e, t) {
  return qg(t) || Gg(e, t) || Yg(e, t) || Xg(e, t) || Zg(e, t);
}
function qo(e) {
  return Ru(e, /^\s*$/);
}
function qg(e) {
  return Ru(e, /\(.*cherry.*picked.*\)/i);
}
function Ru(e, t) {
  let n = !1;
  for (; e.length && e[0].match(t); )
    e.shift(), n = !0;
  return n;
}
function Gg(e, t) {
  let n = !1;
  return t.length && t[0].match(/^\s*$/) && (e.body += `
`, n = !0, qo(t)), n;
}
function Yg(e, t) {
  if (t.length) {
    const n = t[0].match(/ticket\s*:\s*(http.*)/i);
    if (!n)
      return !1;
    e.ticket = n[1].trim(), t.shift();
  }
  return !0;
}
function Xg(e, t) {
  if (t.length) {
    const n = t[0].match(/^([^:]+):\s*(http.*)/i);
    if (!n)
      return !1;
    const r = n[1].trim(), i = n[2].trim();
    e.extra[r] = e.extra[r] ?? [], e.extra[r].push(i), t.shift();
  }
  return !0;
}
function Zg(e, t) {
  const n = t.shift();
  return n !== void 0 && (e.body += `${n}
`), n !== void 0;
}
const Ro = {
  async assembleBase(e, t) {
    const n = await ue.commits.findBySHA(e, t), [
      r,
      i,
      o
    ] = await Promise.all([
      ue.commits.refs(e, n.id, "all"),
      ca.findRefs(e, n.id),
      ue.commits.mergeRequests(e, n.id)
    ]);
    return { commit: n, branches: r, cherryPicks: i, mergeRequests: o };
  },
  async assembleComment(e, t) {
    const [n, r] = await Promise.all([
      ue.branches.findByName(e, t.branch.name),
      ca.deRefAll(e, t.cherryPicks)
    ]), i = Vg.message(t.commit);
    return {
      commit: t.commit,
      branch: n,
      cherryPicks: r,
      mergeRequests: t.mergeRequests,
      title: i.title,
      body: i.body,
      ticket: i.ticket,
      extra: i.extra
    };
  },
  tryAutoResolveBase(e) {
    return e.branches.length > 1 || e.cherryPicks.some((t) => t.branches.length > 1) ? null : this.resolveBaseUsingFirst(e);
  },
  resolveBaseUsingFirst(e) {
    return {
      commit: e.commit,
      branch: e.branches[0],
      cherryPicks: e.cherryPicks.map((t) => ({
        commit: t.commit,
        branch: t.branches[0]
      })),
      mergeRequests: e.mergeRequests
    };
  }
};
var Jg = /* @__PURE__ */ q("<!> <!>", 1), Qg = /* @__PURE__ */ q("<!> <!> <!>", 1), $g = /* @__PURE__ */ q("<!> <!>", 1);
function tv(e, t) {
  H(t, !0);
  let n = S(t, "args", 15), r = L(T({ type: "closed" }));
  async function i(h, m) {
    o(h, m);
    const g = await Ro.assembleBase(h, m), p = Ro.resolveBaseUsingFirst(g);
    if (p !== null) {
      const w = await Ro.assembleComment(h, p);
      s(w);
    } else
      console.error("Comment could not be auto-resolved");
  }
  function o(h, m) {
    A(r, T({ type: "loading", project: h, commit: m }));
  }
  function s(h) {
    A(r, T({ type: "result", comment: h }));
  }
  U(() => {
    n() !== void 0 && i(n().projectRef, n().sha);
  });
  function a(h) {
    h || l();
  }
  function l() {
    A(r, T({ type: "closed" })), n(void 0);
  }
  var f = k(), c = I(f), d = /* @__PURE__ */ C(() => v(r).type !== "closed");
  it(c, () => It.Root, (h, m) => {
    m(h, {
      get open() {
        return v(d);
      },
      onOpenChange: a,
      children: (g, p) => {
        var w = k(), b = I(w);
        it(b, () => It.Portal, (_, E) => {
          E(_, {
            children: (M, P) => {
              var D = $g(), N = I(D);
              it(N, () => It.Overlay, (z, W) => {
                W(z, {});
              });
              var B = gt(N, 2);
              it(B, () => It.Content, (z, W) => {
                W(z, {
                  size: "sm",
                  children: ($, J) => {
                    var nt = Qg(), X = I(nt);
                    it(X, () => It.Header, (tt, rt) => {
                      rt(tt, {
                        children: (st, Qt) => {
                          var pt = Jg(), $t = I(pt);
                          it($t, () => It.Title, (te, ln) => {
                            ln(te, {
                              children: (Po, uv) => {
                                var Iu = ja("Generate ticket comment");
                                O(Po, Iu);
                              },
                              $$slots: { default: !0 }
                            });
                          });
                          var be = gt($t, 2);
                          it(be, () => It.CloseIcon, (te, ln) => {
                            ln(te, {});
                          }), O(st, pt);
                        },
                        $$slots: { default: !0 }
                      });
                    });
                    var mt = gt(X, 2);
                    it(mt, () => It.Body, (tt, rt) => {
                      rt(tt, {
                        children: (st, Qt) => {
                          var pt = k(), $t = I(pt);
                          ot(
                            $t,
                            () => v(r).type === "loading",
                            (be) => {
                              xg(be);
                            },
                            (be) => {
                              var te = k(), ln = I(te);
                              ot(
                                ln,
                                () => v(r).type === "result",
                                (Po) => {
                                  Kg(Po, {
                                    get comment() {
                                      return v(r).comment;
                                    }
                                  });
                                },
                                null,
                                !0
                              ), O(be, te);
                            }
                          ), O(st, pt);
                        },
                        $$slots: { default: !0 }
                      });
                    });
                    var ht = gt(mt, 2);
                    it(ht, () => It.Footer, (tt, rt) => {
                      rt(tt, {
                        children: (st, Qt) => {
                          var pt = k(), $t = I(pt);
                          it($t, () => It.Close, (be, te) => {
                            te(be, {});
                          }), O(st, pt);
                        },
                        $$slots: { default: !0 }
                      });
                    }), O($, nt);
                  },
                  $$slots: { default: !0 }
                });
              }), O(M, D);
            },
            $$slots: { default: !0 }
          });
        }), O(g, w);
      },
      $$slots: { default: !0 }
    });
  }), O(e, f), V();
}
function ev(e, t) {
  H(t, !0);
  let n = S(t, "controls", 7);
  tv(e, {
    get args() {
      return n().generateTicketCommentModal.args;
    },
    set args(r) {
      n().generateTicketCommentModal.args = r;
    }
  }), V();
}
function nv() {
  let e = L(void 0);
  function t(r) {
    A(e, T(r));
  }
  function n() {
    A(e, void 0);
  }
  return {
    get args() {
      return v(e);
    },
    open: t,
    close: n
  };
}
function rv() {
  const e = iv();
  ov(e), sv(e), av(e);
}
function iv() {
  return {
    generateTicketCommentModal: nv()
  };
}
function ov(e) {
  try {
    const t = document.querySelector(".page-content-header");
    if (!t)
      return;
    const n = zo.projects.ref(), r = zo.commits.sha();
    mo(Tu, {
      target: t,
      props: {
        class: "gl-ml-3",
        features: [
          {
            icon: "comment-lines",
            title: "Generate ticket comment",
            onClick() {
              e.generateTicketCommentModal.open({ projectRef: n, sha: r });
            }
          }
        ]
      }
    });
  } catch (t) {
    console.error(t);
  }
}
function sv(e) {
  try {
    const t = document.querySelector([
      ".project-last-commit .js-commit-sha-group",
      ".blob-commit-info .commit-sha-group"
    ].join(", "));
    if (!t)
      return;
    const n = t.querySelector("[data-clipboard-text]");
    if (!n || !(n instanceof HTMLElement))
      return;
    const r = zo.projects.ref(), i = n.dataset.clipboardText ?? "";
    mo(Tu, {
      target: t,
      props: {
        features: [
          {
            icon: "comment-lines",
            title: "Generate ticket comment",
            onClick() {
              e.generateTicketCommentModal.open({ projectRef: r, sha: i });
            }
          }
        ]
      }
    });
  } catch (t) {
    console.error(t);
  }
}
function av(e) {
  const t = document.createElement("div");
  t.id = "daktela-modals", document.body.appendChild(t), mo(ev, {
    target: t,
    props: {
      controls: e
    }
  });
}
rv();
//# sourceMappingURL=daktela-gitlab.js.map
