const Hs = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Hs);
const zs = 1, Ys = 2, Gs = 16, Xs = 1, Zs = 2, ho = 4, Js = 8, Qs = 16, $s = 1, ta = 2, ea = 4, na = 1, ra = 2, ee = Symbol(), li = "http://www.w3.org/2000/svg", bo = !1;
var Gn = Array.isArray, ui = Array.from, ia = Object.defineProperty, pn = Object.getOwnPropertyDescriptor, po = Object.getOwnPropertyDescriptors, oa = Object.prototype, sa = Array.prototype, cr = Object.getPrototypeOf;
function aa(t) {
  return typeof t == "function";
}
const ie = () => {
};
function la(t) {
  return t();
}
function fr(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
const Oe = 2, yo = 4, Xn = 8, Cr = 16, ce = 32, Zn = 64, an = 128, dr = 256, Zt = 512, We = 1024, kn = 2048, Ce = 4096, Pn = 8192, _o = 16384, ln = 32768, ua = 65536, ca = 1 << 18, wo = 1 << 19, yn = Symbol("$state"), fa = Symbol("");
function Eo(t) {
  return t === this.v;
}
function To(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function ci(t) {
  return !To(t, this.v);
}
function da(t) {
  throw new Error("effect_in_teardown");
}
function va() {
  throw new Error("effect_in_unowned_derived");
}
function ga(t) {
  throw new Error("effect_orphan");
}
function ma() {
  throw new Error("effect_update_depth_exceeded");
}
function ha(t) {
  throw new Error("props_invalid_value");
}
function ba() {
  throw new Error("state_descriptors_fixed");
}
function pa() {
  throw new Error("state_prototype_fixed");
}
function ya() {
  throw new Error("state_unsafe_local_read");
}
function _a() {
  throw new Error("state_unsafe_mutation");
}
function te(t) {
  return {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: Eo,
    version: 0
  };
}
function xo(t) {
  return /* @__PURE__ */ Co(te(t));
}
// @__NO_SIDE_EFFECTS__
function Or(t, e = !1) {
  var r;
  const n = te(t);
  return e || (n.equals = ci), gt !== null && gt.l !== null && ((r = gt.l).s ?? (r.s = [])).push(n), n;
}
function Ae(t, e = !1) {
  return /* @__PURE__ */ Co(/* @__PURE__ */ Or(t, e));
}
// @__NO_SIDE_EFFECTS__
function Co(t) {
  return bt !== null && bt.f & Oe && (me === null ? ka([t]) : me.push(t)), t;
}
function Et(t, e) {
  return bt !== null && gi() && bt.f & (Oe | Cr) && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (me === null || !me.includes(t)) && _a(), Oo(t, e);
}
function Oo(t, e) {
  return t.equals(e) || (t.v = e, t.version = Vo(), Ao(t, We), gi() && at !== null && at.f & Zt && !(at.f & ce) && (Ht !== null && Ht.includes(t) ? (fe(at, We), Pr(at)) : Be === null ? Pa([t]) : Be.push(t))), e;
}
function Ao(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var r = gi(), i = n.length, o = 0; o < i; o++) {
      var s = n[o], a = s.f;
      a & We || !r && s === at || (fe(s, e), a & (Zt | an) && (a & Oe ? Ao(
        /** @type {Derived} */
        s,
        kn
      ) : Pr(
        /** @type {Effect} */
        s
      )));
    }
}
// @__NO_SIDE_EFFECTS__
function xn(t) {
  var e = Oe | We;
  at === null ? e |= an : at.f |= wo;
  const n = {
    children: null,
    deps: null,
    equals: Eo,
    f: e,
    fn: t,
    reactions: null,
    v: (
      /** @type {V} */
      null
    ),
    version: 0,
    parent: at
  };
  if (bt !== null && bt.f & Oe) {
    var r = (
      /** @type {Derived} */
      bt
    );
    (r.children ?? (r.children = [])).push(n);
  }
  return n;
}
// @__NO_SIDE_EFFECTS__
function wa(t) {
  const e = /* @__PURE__ */ xn(t);
  return e.equals = ci, e;
}
function ko(t) {
  var e = t.children;
  if (e !== null) {
    t.children = null;
    for (var n = 0; n < e.length; n += 1) {
      var r = e[n];
      r.f & Oe ? fi(
        /** @type {Derived} */
        r
      ) : ke(
        /** @type {Effect} */
        r
      );
    }
  }
}
function Po(t) {
  var e, n = at;
  he(t.parent);
  try {
    ko(t), e = Uo(t);
  } finally {
    he(n);
  }
  return e;
}
function So(t) {
  var e = Po(t), n = (bn || t.f & an) && t.deps !== null ? kn : Zt;
  fe(t, n), t.equals(e) || (t.v = e, t.version = Vo());
}
function fi(t) {
  ko(t), zn(t, 0), fe(t, Pn), t.v = t.children = t.deps = t.reactions = null;
}
function Ro(t) {
  at === null && bt === null && ga(), bt !== null && bt.f & an && va(), vi && da();
}
function Ea(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function Sn(t, e, n, r = !0) {
  var i = (t & Zn) !== 0, o = at, s = {
    ctx: gt,
    deps: null,
    deriveds: null,
    nodes_start: null,
    nodes_end: null,
    f: t | We,
    first: null,
    fn: e,
    last: null,
    next: null,
    parent: i ? null : o,
    prev: null,
    teardown: null,
    transitions: null,
    version: 0
  };
  if (n) {
    var a = _n;
    try {
      Di(!0), Qn(s), s.f |= _o;
    } catch (c) {
      throw ke(s), c;
    } finally {
      Di(a);
    }
  } else e !== null && Pr(s);
  var l = n && s.deps === null && s.first === null && s.nodes_start === null && s.teardown === null && (s.f & wo) === 0;
  if (!l && !i && r && (o !== null && Ea(s, o), bt !== null && bt.f & Oe)) {
    var u = (
      /** @type {Derived} */
      bt
    );
    (u.children ?? (u.children = [])).push(s);
  }
  return s;
}
function Do(t) {
  const e = Sn(Xn, null, !1);
  return fe(e, Zt), e.teardown = t, e;
}
function vr(t) {
  Ro();
  var e = at !== null && (at.f & ce) !== 0 && gt !== null && !gt.m;
  if (e) {
    var n = (
      /** @type {ComponentContext} */
      gt
    );
    (n.e ?? (n.e = [])).push({
      fn: t,
      effect: at,
      reaction: bt
    });
  } else {
    var r = z(t);
    return r;
  }
}
function Ta(t) {
  return Ro(), Ar(t);
}
function xa(t) {
  const e = Sn(Zn, t, !0);
  return () => {
    ke(e);
  };
}
function z(t) {
  return Sn(yo, t, !1);
}
function Q(t, e) {
  var n = (
    /** @type {ComponentContextLegacy} */
    gt
  ), r = { effect: null, ran: !1 };
  n.l.r1.push(r), r.effect = Ar(() => {
    t(), !r.ran && (r.ran = !0, Et(n.l.r2, !0), ze(e));
  });
}
function pe() {
  var t = (
    /** @type {ComponentContextLegacy} */
    gt
  );
  Ar(() => {
    if (x(t.l.r2)) {
      for (var e of t.l.r1) {
        var n = e.effect;
        n.f & Zt && fe(n, kn), Dn(n) && Qn(n), e.ran = !1;
      }
      t.l.r2.v = !1;
    }
  });
}
function Ar(t) {
  return Sn(Xn, t, !0);
}
function _t(t) {
  return Rn(t);
}
function Rn(t, e = 0) {
  return Sn(Xn | Cr | e, t, !0);
}
function Ke(t, e = !0) {
  return Sn(Xn | ce, t, !0, e);
}
function Fo(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = vi, r = bt;
    Fi(!0), je(null);
    try {
      e.call(null);
    } finally {
      Fi(n), je(r);
    }
  }
}
function No(t) {
  var e = t.deriveds;
  if (e !== null) {
    t.deriveds = null;
    for (var n = 0; n < e.length; n += 1)
      fi(e[n]);
  }
}
function Io(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    var r = n.next;
    ke(n, e), n = r;
  }
}
function Ca(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    e.f & ce || ke(e), e = n;
  }
}
function ke(t, e = !0) {
  var n = !1;
  if ((e || t.f & ca) && t.nodes_start !== null) {
    for (var r = t.nodes_start, i = t.nodes_end; r !== null; ) {
      var o = r === i ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Rr(r)
      );
      r.remove(), r = o;
    }
    n = !0;
  }
  No(t), Io(t, e && !n), zn(t, 0), fe(t, Pn);
  var s = t.transitions;
  if (s !== null)
    for (const l of s)
      l.stop();
  Fo(t);
  var a = t.parent;
  a !== null && a.first !== null && Mo(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.parent = t.fn = t.nodes_start = t.nodes_end = null;
}
function Mo(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function Un(t, e) {
  var n = [];
  di(t, n, !0), Lo(n, () => {
    ke(t), e && e();
  });
}
function Lo(t, e) {
  var n = t.length;
  if (n > 0) {
    var r = () => --n || e();
    for (var i of t)
      i.out(r);
  } else
    e();
}
function di(t, e, n) {
  if (!(t.f & Ce)) {
    if (t.f ^= Ce, t.transitions !== null)
      for (const s of t.transitions)
        (s.is_global || n) && e.push(s);
    for (var r = t.first; r !== null; ) {
      var i = r.next, o = (r.f & ln) !== 0 || (r.f & ce) !== 0;
      di(r, e, o ? n : !1), r = i;
    }
  }
}
function qn(t) {
  Bo(t, !0);
}
function Bo(t, e) {
  if (t.f & Ce) {
    t.f ^= Ce, Dn(t) && Qn(t);
    for (var n = t.first; n !== null; ) {
      var r = n.next, i = (n.f & ln) !== 0 || (n.f & ce) !== 0;
      Bo(n, i ? e : !1), n = r;
    }
    if (t.transitions !== null)
      for (const o of t.transitions)
        (o.is_global || e) && o.in();
  }
}
let gr = !1, Yr = [];
function Wo() {
  gr = !1;
  const t = Yr.slice();
  Yr = [], fr(t);
}
function Jn(t) {
  gr || (gr = !0, queueMicrotask(Wo)), Yr.push(t);
}
function Oa() {
  gr && Wo();
}
function kr(t) {
  throw new Error("lifecycle_outside_component");
}
const Ko = 0, Aa = 1;
let ur = Ko, Hn = !1, _n = !1, vi = !1;
function Di(t) {
  _n = t;
}
function Fi(t) {
  vi = t;
}
let $e = [], wn = 0;
let bt = null;
function je(t) {
  bt = t;
}
let at = null;
function he(t) {
  at = t;
}
let me = null;
function ka(t) {
  me = t;
}
let Ht = null, ne = 0, Be = null;
function Pa(t) {
  Be = t;
}
let jo = 0, bn = !1, gt = null;
function Vo() {
  return ++jo;
}
function gi() {
  return gt !== null && gt.l === null;
}
function Dn(t) {
  var s, a;
  var e = t.f;
  if (e & We)
    return !0;
  if (e & kn) {
    var n = t.deps, r = (e & an) !== 0;
    if (n !== null) {
      var i;
      if (e & dr) {
        for (i = 0; i < n.length; i++)
          ((s = n[i]).reactions ?? (s.reactions = [])).push(t);
        t.f ^= dr;
      }
      for (i = 0; i < n.length; i++) {
        var o = n[i];
        if (Dn(
          /** @type {Derived} */
          o
        ) && So(
          /** @type {Derived} */
          o
        ), r && at !== null && !bn && !((a = o == null ? void 0 : o.reactions) != null && a.includes(t)) && (o.reactions ?? (o.reactions = [])).push(t), o.version > t.version)
          return !0;
      }
    }
    r || fe(t, Zt);
  }
  return !1;
}
function Sa(t, e, n) {
  throw t;
}
function Uo(t) {
  var f;
  var e = Ht, n = ne, r = Be, i = bt, o = bn, s = me, a = t.f;
  Ht = /** @type {null | Value[]} */
  null, ne = 0, Be = null, bt = a & (ce | Zn) ? null : t, bn = !_n && (a & an) !== 0, me = null;
  try {
    var l = (
      /** @type {Function} */
      (0, t.fn)()
    ), u = t.deps;
    if (Ht !== null) {
      var c;
      if (zn(t, ne), u !== null && ne > 0)
        for (u.length = ne + Ht.length, c = 0; c < Ht.length; c++)
          u[ne + c] = Ht[c];
      else
        t.deps = u = Ht;
      if (!bn)
        for (c = ne; c < u.length; c++)
          ((f = u[c]).reactions ?? (f.reactions = [])).push(t);
    } else u !== null && ne < u.length && (zn(t, ne), u.length = ne);
    return l;
  } finally {
    Ht = e, ne = n, Be = r, bt = i, bn = o, me = s;
  }
}
function Ra(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var r = n.indexOf(t);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = e.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  n === null && e.f & Oe && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Ht === null || !Ht.includes(e)) && (fe(e, kn), e.f & (an | dr) || (e.f ^= dr), zn(
    /** @type {Derived} **/
    e,
    0
  ));
}
function zn(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var r = e; r < n.length; r++)
      Ra(t, n[r]);
}
function Qn(t) {
  var e = t.f;
  if (!(e & Pn)) {
    fe(t, Zt);
    var n = at, r = gt;
    at = t, gt = t.ctx;
    try {
      No(t), e & Cr ? Ca(t) : Io(t), Fo(t);
      var i = Uo(t);
      t.teardown = typeof i == "function" ? i : null, t.version = jo;
    } catch (o) {
      Sa(
        /** @type {Error} */
        o
      );
    } finally {
      at = n, gt = r;
    }
  }
}
function qo() {
  wn > 1e3 && (wn = 0, ma()), wn++;
}
function Ho(t) {
  var e = t.length;
  if (e !== 0) {
    qo();
    var n = _n;
    _n = !0;
    try {
      for (var r = 0; r < e; r++) {
        var i = t[r];
        i.f & Zt || (i.f ^= Zt);
        var o = [];
        zo(i, o), Da(o);
      }
    } finally {
      _n = n;
    }
  }
}
function Da(t) {
  var e = t.length;
  if (e !== 0)
    for (var n = 0; n < e; n++) {
      var r = t[n];
      !(r.f & (Pn | Ce)) && Dn(r) && (Qn(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null ? Mo(r) : r.fn = null));
    }
}
function Fa() {
  if (Hn = !1, wn > 1001)
    return;
  const t = $e;
  $e = [], Ho(t), Hn || (wn = 0);
}
function Pr(t) {
  ur === Ko && (Hn || (Hn = !0, queueMicrotask(Fa)));
  for (var e = t; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if (n & (Zn | ce)) {
      if (!(n & Zt)) return;
      e.f ^= Zt;
    }
  }
  $e.push(e);
}
function zo(t, e) {
  var n = t.first, r = [];
  t: for (; n !== null; ) {
    var i = n.f, o = (i & ce) !== 0, s = o && (i & Zt) !== 0;
    if (!s && !(i & Ce))
      if (i & Xn) {
        o ? n.f ^= Zt : Dn(n) && Qn(n);
        var a = n.first;
        if (a !== null) {
          n = a;
          continue;
        }
      } else i & yo && r.push(n);
    var l = n.next;
    if (l === null) {
      let f = n.parent;
      for (; f !== null; ) {
        if (t === f)
          break t;
        var u = f.next;
        if (u !== null) {
          n = u;
          continue t;
        }
        f = f.parent;
      }
    }
    n = l;
  }
  for (var c = 0; c < r.length; c++)
    a = r[c], e.push(a), zo(a, e);
}
function Yo(t) {
  var e = ur, n = $e;
  try {
    qo();
    const i = [];
    ur = Aa, $e = i, Hn = !1, Ho(n);
    var r = t == null ? void 0 : t();
    return Oa(), ($e.length > 0 || i.length > 0) && Yo(), wn = 0, r;
  } finally {
    ur = e, $e = n;
  }
}
async function tn() {
  await Promise.resolve(), Yo();
}
function x(t) {
  var a;
  var e = t.f, n = (e & Oe) !== 0;
  if (n && e & Pn) {
    var r = Po(
      /** @type {Derived} */
      t
    );
    return fi(
      /** @type {Derived} */
      t
    ), r;
  }
  if (bt !== null) {
    me !== null && me.includes(t) && ya();
    var i = bt.deps;
    Ht === null && i !== null && i[ne] === t ? ne++ : Ht === null ? Ht = [t] : Ht.push(t), Be !== null && at !== null && at.f & Zt && !(at.f & ce) && Be.includes(t) && (fe(at, We), Pr(at));
  } else if (n && /** @type {Derived} */
  t.deps === null) {
    var o = (
      /** @type {Derived} */
      t
    ), s = o.parent;
    s !== null && !((a = s.deriveds) != null && a.includes(o)) && (s.deriveds ?? (s.deriveds = [])).push(o);
  }
  return n && (o = /** @type {Derived} */
  t, Dn(o) && So(o)), t.v;
}
function ze(t) {
  const e = bt;
  try {
    return bt = null, t();
  } finally {
    bt = e;
  }
}
const Na = ~(We | kn | Zt);
function fe(t, e) {
  t.f = t.f & Na | e;
}
function Go(t) {
  return (
    /** @type {T} */
    Zo().get(t)
  );
}
function Xo(t, e) {
  return Zo().set(t, e), e;
}
function Zo(t) {
  return gt === null && kr(), gt.c ?? (gt.c = new Map(Ia(gt) || void 0));
}
function Ia(t) {
  let e = t.p;
  for (; e !== null; ) {
    const n = e.c;
    if (n !== null)
      return n;
    e = e.p;
  }
  return null;
}
function Ni(t, e = 1) {
  var n = +x(t);
  return Et(t, n + e), n;
}
function Ot(t, e = !1, n) {
  gt = {
    p: gt,
    c: null,
    e: null,
    m: !1,
    s: t,
    x: null,
    l: null
  }, e || (gt.l = {
    s: null,
    u: null,
    r1: [],
    r2: te(!1)
  });
}
function At(t) {
  const e = gt;
  if (e !== null) {
    const s = e.e;
    if (s !== null) {
      var n = at, r = bt;
      e.e = null;
      try {
        for (var i = 0; i < s.length; i++) {
          var o = s[i];
          he(o.effect), je(o.reaction), z(o.fn);
        }
      } finally {
        he(n), je(r);
      }
    }
    gt = e.p, e.m = !0;
  }
  return (
    /** @type {T} */
    {}
  );
}
function it(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if (yn in t)
      Gr(t);
    else if (!Array.isArray(t))
      for (let e in t) {
        const n = t[e];
        typeof n == "object" && n && yn in n && Gr(n);
      }
  }
}
function Gr(t, e = /* @__PURE__ */ new Set()) {
  if (typeof t == "object" && t !== null && // We don't want to traverse DOM elements
  !(t instanceof EventTarget) && !e.has(t)) {
    e.add(t), t instanceof Date && t.getTime();
    for (let r in t)
      try {
        Gr(t[r], e);
      } catch {
      }
    const n = cr(t);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = po(n);
      for (let i in r) {
        const o = r[i].get;
        if (o)
          try {
            o.call(t);
          } catch {
          }
      }
    }
  }
}
function ae(t, e = null, n) {
  if (typeof t != "object" || t === null || yn in t)
    return t;
  const r = cr(t);
  if (r !== oa && r !== sa)
    return t;
  var i = /* @__PURE__ */ new Map(), o = Gn(t), s = te(0);
  o && i.set("length", te(
    /** @type {any[]} */
    t.length
  ));
  var a;
  return new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(l, u, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && ba();
        var f = i.get(u);
        return f === void 0 ? (f = te(c.value), i.set(u, f)) : Et(f, ae(c.value, a)), !0;
      },
      deleteProperty(l, u) {
        var c = i.get(u);
        if (c === void 0)
          u in l && i.set(u, te(ee));
        else {
          if (o && typeof u == "string") {
            var f = (
              /** @type {Source<number>} */
              i.get("length")
            ), d = Number(u);
            Number.isInteger(d) && d < f.v && Et(f, d);
          }
          Et(c, ee), Ii(s);
        }
        return !0;
      },
      get(l, u, c) {
        var m;
        if (u === yn)
          return t;
        var f = i.get(u), d = u in l;
        if (f === void 0 && (!d || (m = pn(l, u)) != null && m.writable) && (f = te(ae(d ? l[u] : ee, a)), i.set(u, f)), f !== void 0) {
          var v = x(f);
          return v === ee ? void 0 : v;
        }
        return Reflect.get(l, u, c);
      },
      getOwnPropertyDescriptor(l, u) {
        var c = Reflect.getOwnPropertyDescriptor(l, u);
        if (c && "value" in c) {
          var f = i.get(u);
          f && (c.value = x(f));
        } else if (c === void 0) {
          var d = i.get(u), v = d == null ? void 0 : d.v;
          if (d !== void 0 && v !== ee)
            return {
              enumerable: !0,
              configurable: !0,
              value: v,
              writable: !0
            };
        }
        return c;
      },
      has(l, u) {
        var v;
        if (u === yn)
          return !0;
        var c = i.get(u), f = c !== void 0 && c.v !== ee || Reflect.has(l, u);
        if (c !== void 0 || at !== null && (!f || (v = pn(l, u)) != null && v.writable)) {
          c === void 0 && (c = te(f ? ae(l[u], a) : ee), i.set(u, c));
          var d = x(c);
          if (d === ee)
            return !1;
        }
        return f;
      },
      set(l, u, c, f) {
        var w;
        var d = i.get(u), v = u in l;
        if (o && u === "length")
          for (var m = c; m < /** @type {Source<number>} */
          d.v; m += 1) {
            var h = i.get(m + "");
            h !== void 0 ? Et(h, ee) : m in l && (h = te(ee), i.set(m + "", h));
          }
        d === void 0 ? (!v || (w = pn(l, u)) != null && w.writable) && (d = te(void 0), Et(d, ae(c, a)), i.set(u, d)) : (v = d.v !== ee, Et(d, ae(c, a)));
        var g = Reflect.getOwnPropertyDescriptor(l, u);
        if (g != null && g.set && g.set.call(f, c), !v) {
          if (o && typeof u == "string") {
            var y = (
              /** @type {Source<number>} */
              i.get("length")
            ), b = Number(u);
            Number.isInteger(b) && b >= y.v && Et(y, b + 1);
          }
          Ii(s);
        }
        return !0;
      },
      ownKeys(l) {
        x(s);
        var u = Reflect.ownKeys(l).filter((d) => {
          var v = i.get(d);
          return v === void 0 || v.v !== ee;
        });
        for (var [c, f] of i)
          f.v !== ee && !(c in l) && u.push(c);
        return u;
      },
      setPrototypeOf() {
        pa();
      }
    }
  );
}
function Ii(t, e = 1) {
  Et(t, t.v + e);
}
var Mi, Jo, Qo;
function Ma() {
  if (Mi === void 0) {
    Mi = window;
    var t = Element.prototype, e = Node.prototype;
    Jo = pn(e, "firstChild").get, Qo = pn(e, "nextSibling").get, t.__click = void 0, t.__className = "", t.__attributes = null, t.__e = void 0, Text.prototype.__t = void 0;
  }
}
function Sr(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function Cn(t) {
  return Jo.call(t);
}
// @__NO_SIDE_EFFECTS__
function Rr(t) {
  return Qo.call(t);
}
function ct(t) {
  return /* @__PURE__ */ Cn(t);
}
function V(t, e) {
  {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Cn(
        /** @type {Node} */
        t
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Rr(n) : n;
  }
}
function ve(t, e = 1, n = !1) {
  let r = t;
  for (; e--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ Rr(r);
  return r;
}
function La(t) {
  t.textContent = "";
}
let mi = !1;
const $o = /* @__PURE__ */ new Set(), Xr = /* @__PURE__ */ new Set();
function Zr(t, e, n, r) {
  function i(o) {
    if (r.capture || Kn.call(e, o), !o.cancelBubble) {
      var s = bt, a = at;
      je(null), he(null);
      try {
        return n.call(this, o);
      } finally {
        je(s), he(a);
      }
    }
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? Jn(() => {
    e.addEventListener(t, i, r);
  }) : e.addEventListener(t, i, r), i;
}
function q(t, e, n, r, i) {
  var o = { capture: r, passive: i }, s = Zr(t, e, n, o);
  (e === document.body || e === window || e === document) && Do(() => {
    e.removeEventListener(t, s, o);
  });
}
function ts(t) {
  for (var e = 0; e < t.length; e++)
    $o.add(t[e]);
  for (var n of Xr)
    n(t);
}
function Kn(t) {
  var b;
  var e = this, n = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, i = ((b = t.composedPath) == null ? void 0 : b.call(t)) || [], o = (
    /** @type {null | Element} */
    i[0] || t.target
  ), s = 0, a = t.__root;
  if (a) {
    var l = i.indexOf(a);
    if (l !== -1 && (e === document || e === /** @type {any} */
    window)) {
      t.__root = e;
      return;
    }
    var u = i.indexOf(e);
    if (u === -1)
      return;
    l <= u && (s = l);
  }
  if (o = /** @type {Element} */
  i[s] || t.target, o !== e) {
    ia(t, "currentTarget", {
      configurable: !0,
      get() {
        return o || n;
      }
    });
    var c = bt, f = at;
    je(null), he(null);
    try {
      for (var d, v = []; o !== null; ) {
        var m = o.assignedSlot || o.parentNode || /** @type {any} */
        o.host || null;
        try {
          var h = o["__" + r];
          if (h !== void 0 && !/** @type {any} */
          o.disabled)
            if (Gn(h)) {
              var [g, ...y] = h;
              g.apply(o, [t, ...y]);
            } else
              h.call(o, t);
        } catch (w) {
          d ? v.push(w) : d = w;
        }
        if (t.cancelBubble || m === e || m === null)
          break;
        o = m;
      }
      if (d) {
        for (let w of v)
          queueMicrotask(() => {
            throw w;
          });
        throw d;
      }
    } finally {
      t.__root = e, delete t.currentTarget, je(c), he(f);
    }
  }
}
function es(t) {
  var e = document.createElement("template");
  return e.innerHTML = t, e.content;
}
function On(t, e) {
  var n = (
    /** @type {Effect} */
    at
  );
  n.nodes_start === null && (n.nodes_start = t, n.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function lt(t, e) {
  var n = (e & na) !== 0, r = (e & ra) !== 0, i, o = !t.startsWith("<!>");
  return () => {
    i === void 0 && (i = es(o ? t : "<!>" + t), n || (i = /** @type {Node} */
    /* @__PURE__ */ Cn(i)));
    var s = (
      /** @type {TemplateNode} */
      r ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Cn(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      On(a, l);
    } else
      On(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function Ba(t, e, n = "svg") {
  var r = !t.startsWith("<!>"), i = `<${n}>${r ? t : "<!>" + t}</${n}>`, o;
  return () => {
    if (!o) {
      var s = (
        /** @type {DocumentFragment} */
        es(i)
      ), a = (
        /** @type {Element} */
        /* @__PURE__ */ Cn(s)
      );
      o = /** @type {Element} */
      /* @__PURE__ */ Cn(a);
    }
    var l = (
      /** @type {TemplateNode} */
      o.cloneNode(!0)
    );
    return On(l, l), l;
  };
}
function ns(t = "") {
  {
    var e = Sr(t + "");
    return On(e, e), e;
  }
}
function Y() {
  var t = document.createDocumentFragment(), e = document.createComment(""), n = Sr();
  return t.append(e, n), On(e, n), t;
}
function k(t, e) {
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
function Wa(t) {
  return t.endsWith("capture") && t !== "gotpointercapture" && t !== "lostpointercapture";
}
const Ka = [
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
function ja(t) {
  return Ka.includes(t);
}
const Va = {
  // no `class: 'className'` because we handle that separately
  formnovalidate: "formNoValidate",
  ismap: "isMap",
  nomodule: "noModule",
  playsinline: "playsInline",
  readonly: "readOnly"
};
function Ua(t) {
  return t = t.toLowerCase(), Va[t] ?? t;
}
const qa = ["touchstart", "touchmove"];
function Ha(t) {
  return qa.includes(t);
}
let mr = !0;
function Li(t) {
  mr = t;
}
function rs(t, e) {
  var n = e == null ? "" : typeof e == "object" ? e + "" : e;
  n !== (t.__t ?? (t.__t = t.nodeValue)) && (t.__t = n, t.nodeValue = n == null ? "" : n + "");
}
function hi(t, e) {
  return za(t, e);
}
const dn = /* @__PURE__ */ new Map();
function za(t, { target: e, anchor: n, props: r = {}, events: i, context: o, intro: s = !0 }) {
  Ma();
  var a = /* @__PURE__ */ new Set(), l = (f) => {
    for (var d = 0; d < f.length; d++) {
      var v = f[d];
      if (!a.has(v)) {
        a.add(v);
        var m = Ha(v);
        e.addEventListener(v, Kn, { passive: m });
        var h = dn.get(v);
        h === void 0 ? (document.addEventListener(v, Kn, { passive: m }), dn.set(v, 1)) : dn.set(v, h + 1);
      }
    }
  };
  l(ui($o)), Xr.add(l);
  var u = void 0, c = xa(() => {
    var f = n ?? e.appendChild(Sr());
    return Ke(() => {
      if (o) {
        Ot({});
        var d = (
          /** @type {ComponentContext} */
          gt
        );
        d.c = o;
      }
      i && (r.$$events = i), mr = s, u = t(f, r) || {}, mr = !0, o && At();
    }), () => {
      var m;
      for (var d of a) {
        e.removeEventListener(d, Kn);
        var v = (
          /** @type {number} */
          dn.get(d)
        );
        --v === 0 ? (document.removeEventListener(d, Kn), dn.delete(d)) : dn.set(d, v);
      }
      Xr.delete(l), Bi.delete(u), f !== n && ((m = f.parentNode) == null || m.removeChild(f));
    };
  });
  return Bi.set(u, c), u;
}
let Bi = /* @__PURE__ */ new WeakMap();
function yt(t, e, n, r = null, i = !1) {
  var o = t, s = null, a = null, l = null, u = i ? ln : 0;
  Rn(() => {
    l !== (l = !!e()) && (l ? (s ? qn(s) : s = Ke(() => n(o)), a && Un(a, () => {
      a = null;
    })) : (a ? qn(a) : r && (a = Ke(() => r(o))), s && Un(s, () => {
      s = null;
    })));
  }, u);
}
let En = null;
function Wi(t) {
  En = t;
}
function Ya(t, e, n, r) {
  for (var i = [], o = e.length, s = 0; s < o; s++)
    di(e[s].e, i, !0);
  var a = o > 0 && i.length === 0 && n !== null;
  if (a) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    La(l), l.append(
      /** @type {Element} */
      n
    ), r.clear(), Fe(t, e[0].prev, e[o - 1].next);
  }
  Lo(i, () => {
    for (var u = 0; u < o; u++) {
      var c = e[u];
      a || (r.delete(c.k), Fe(t, c.prev, c.next)), ke(c.e, !a);
    }
  });
}
function Ga(t, e, n, r, i, o = null) {
  var s = t, a = { flags: e, items: /* @__PURE__ */ new Map(), first: null }, l = null, u = !1;
  Rn(() => {
    var c = n(), f = Gn(c) ? c : c == null ? [] : ui(c), d = f.length;
    u && d === 0 || (u = d === 0, Xa(f, a, s, i, e, r), o !== null && (d === 0 ? l ? qn(l) : l = Ke(() => o(s)) : l !== null && Un(l, () => {
      l = null;
    })), n());
  });
}
function Xa(t, e, n, r, i, o) {
  var s = t.length, a = e.items, l = e.first, u = l, c, f = null, d = [], v = [], m, h, g, y;
  for (y = 0; y < s; y += 1) {
    if (m = t[y], h = o(m, y), g = a.get(h), g === void 0) {
      var b = u ? (
        /** @type {TemplateNode} */
        u.e.nodes_start
      ) : n;
      f = Ja(
        b,
        e,
        f,
        f === null ? e.first : f.next,
        m,
        h,
        y,
        r,
        i
      ), a.set(h, f), d = [], v = [], u = f.next;
      continue;
    }
    if (Za(g, m, y), g.e.f & Ce && qn(g.e), g !== u) {
      if (c !== void 0 && c.has(g)) {
        if (d.length < v.length) {
          var w = v[0], C;
          f = w.prev;
          var I = d[0], R = d[d.length - 1];
          for (C = 0; C < d.length; C += 1)
            Ki(d[C], w, n);
          for (C = 0; C < v.length; C += 1)
            c.delete(v[C]);
          Fe(e, I.prev, R.next), Fe(e, f, I), Fe(e, R, w), u = w, f = R, y -= 1, d = [], v = [];
        } else
          c.delete(g), Ki(g, u, n), Fe(e, g.prev, g.next), Fe(e, g, f === null ? e.first : f.next), Fe(e, f, g), f = g;
        continue;
      }
      for (d = [], v = []; u !== null && u.k !== h; )
        u.e.f & Ce || (c ?? (c = /* @__PURE__ */ new Set())).add(u), v.push(u), u = u.next;
      if (u === null)
        continue;
      g = u;
    }
    d.push(g), f = g, u = g.next;
  }
  if (u !== null || c !== void 0) {
    for (var B = c === void 0 ? [] : ui(c); u !== null; )
      u.e.f & Ce || B.push(u), u = u.next;
    var H = B.length;
    if (H > 0) {
      var G = null;
      Ya(e, B, G, a);
    }
  }
  at.first = e.first && e.first.e, at.last = f && f.e;
}
function Za(t, e, n, r) {
  Oo(t.v, e), t.i = n;
}
function Ja(t, e, n, r, i, o, s, a, l) {
  var u = En;
  try {
    var c = (l & zs) !== 0, f = (l & Gs) === 0, d = c ? f ? /* @__PURE__ */ Or(i) : te(i) : i, v = l & Ys ? te(s) : s, m = {
      i: v,
      v: d,
      k: o,
      a: null,
      // @ts-expect-error
      e: null,
      prev: n,
      next: r
    };
    return En = m, m.e = Ke(() => a(t, d, v), mi), m.e.prev = n && n.e, m.e.next = r && r.e, n === null ? e.first = m : (n.next = m, n.e.next = m.e), r !== null && (r.prev = m, r.e.prev = m.e), m;
  } finally {
    En = u;
  }
}
function Ki(t, e, n) {
  for (var r = t.next ? (
    /** @type {TemplateNode} */
    t.next.e.nodes_start
  ) : n, i = e ? (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ) : n, o = (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ); o !== r; ) {
    var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Rr(o)
    );
    i.before(o), o = s;
  }
}
function Fe(t, e, n) {
  e === null ? t.first = n : (e.next = n, e.e.next = n && n.e), n !== null && (n.prev = e, n.e.prev = e && e.e);
}
function xt(t, e, n, r, i) {
  var a;
  var o = (a = e.$$slots) == null ? void 0 : a[n], s = !1;
  o === !0 && (o = e.children, s = !0), o === void 0 || o(t, s ? () => r : r);
}
function Pe(t, e, ...n) {
  var r = t, i = ie, o;
  Rn(() => {
    i !== (i = e()) && (o && (ke(o), o = null), o = Ke(() => (
      /** @type {SnippetFn} */
      i(r, ...n)
    )));
  }, ln);
}
function Nt(t, e, n) {
  var r = t, i, o;
  Rn(() => {
    i !== (i = e()) && (o && (Un(o), o = null), i && (o = Ke(() => n(r, i))));
  }, ln);
}
function is(t, e, n, r, i, o) {
  var s, a, l = null, u = (
    /** @type {TemplateNode} */
    t
  ), c, f = En;
  Rn(() => {
    const d = e() || null;
    var v = d === "svg" ? li : null;
    if (d !== s) {
      var m = En;
      Wi(f), c && (d === null ? Un(c, () => {
        c = null, a = null;
      }) : d === a ? qn(c) : (ke(c), Li(!1))), d && d !== a && (c = Ke(() => {
        if (l = v ? document.createElementNS(v, d) : document.createElement(d), On(l, l), r) {
          var h = (
            /** @type {TemplateNode} */
            l.appendChild(Sr())
          );
          r(l, h);
        }
        at.nodes_end = l, u.before(l);
      })), s = d, s && (a = s), Li(!0), Wi(m);
    }
  }, ln);
}
function It(t, e, n) {
  z(() => {
    var r = ze(() => e(t, n == null ? void 0 : n()) || {});
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function Qa(t, e) {
  if (e) {
    const n = document.body;
    t.autofocus = !0, Jn(() => {
      document.activeElement === n && t.focus();
    });
  }
}
function $a(t, e) {
  var n = t.__attributes ?? (t.__attributes = {});
  n.value === (n.value = e) || t.value === e || (t.value = e);
}
function Dr(t, e, n, r) {
  var i = t.__attributes ?? (t.__attributes = {});
  i[e] !== (i[e] = n) && (e === "loading" && (t[fa] = n), n == null ? t.removeAttribute(e) : typeof n != "string" && os(t).includes(e) ? t[e] = n : t.setAttribute(e, n));
}
function Mt(t, e, n, r, i = !1, o = !1, s = !1) {
  var a = e || {}, l = t.tagName === "OPTION";
  for (var u in e)
    u in n || (n[u] = null);
  var c = os(t), f = (
    /** @type {Record<string, unknown>} **/
    t.__attributes ?? (t.__attributes = {})
  ), d = [];
  for (const b in n) {
    let w = n[b];
    if (l && b === "value" && w == null) {
      t.value = t.__value = "", a[b] = w;
      continue;
    }
    var v = a[b];
    if (w !== v) {
      a[b] = w;
      var m = b[0] + b[1];
      if (m !== "$$")
        if (m === "on") {
          const C = {}, I = "$$" + b;
          let R = b.slice(2);
          var h = ja(R);
          if (Wa(R) && (R = R.slice(0, -7), C.capture = !0), !h && v) {
            if (w != null) continue;
            t.removeEventListener(R, a[I], C), a[I] = null;
          }
          if (w != null)
            if (h)
              t[`__${R}`] = w, ts([R]);
            else {
              let B = function(H) {
                a[b].call(this, H);
              };
              var y = B;
              e ? a[I] = Zr(R, t, B, C) : d.push([
                b,
                w,
                () => a[I] = Zr(R, t, B, C)
              ]);
            }
        } else if (b === "style" && w != null)
          t.style.cssText = w + "";
        else if (b === "autofocus")
          Qa(
            /** @type {HTMLElement} */
            t,
            !!w
          );
        else if (b === "__value" || b === "value" && w != null)
          t.value = t[b] = t.__value = w;
        else {
          var g = b;
          i || (g = Ua(g)), w == null && !o ? (f[b] = null, t.removeAttribute(b)) : c.includes(g) && (o || typeof w != "string") ? t[g] = w : typeof w != "function" && Dr(t, g, w);
        }
    }
  }
  return e || Jn(() => {
    if (t.isConnected)
      for (const [b, w, C] of d)
        a[b] === w && C();
  }), a;
}
var ji = /* @__PURE__ */ new Map();
function os(t) {
  var e = ji.get(t.nodeName);
  if (e) return e;
  ji.set(t.nodeName, e = []);
  for (var n, r = cr(t), i = Element.prototype; i !== r; ) {
    n = po(r);
    for (var o in n)
      n[o].set && e.push(o);
    r = cr(r);
  }
  return e;
}
function tl(t, e) {
  var n = t.__className, r = ss(e);
  (n !== r || mi) && (r === "" ? t.removeAttribute("class") : t.setAttribute("class", r), t.__className = r);
}
function bi(t, e) {
  var n = t.__className, r = ss(e);
  (n !== r || mi) && (e == null ? t.removeAttribute("class") : t.className = r, t.__className = r);
}
function ss(t) {
  return t ?? "";
}
const el = requestAnimationFrame, nl = () => performance.now(), Me = {
  tick: (
    /** @param {any} _ */
    (t) => el(t)
  ),
  now: () => nl(),
  tasks: /* @__PURE__ */ new Set()
};
function as(t) {
  Me.tasks.forEach((e) => {
    e.c(t) || (Me.tasks.delete(e), e.f());
  }), Me.tasks.size !== 0 && Me.tick(as);
}
function rl(t) {
  let e;
  return Me.tasks.size === 0 && Me.tick(as), {
    promise: new Promise((n) => {
      Me.tasks.add(e = { c: t, f: n });
    }),
    abort() {
      Me.tasks.delete(e);
    }
  };
}
function nr(t, e) {
  t.dispatchEvent(new CustomEvent(e));
}
function il(t) {
  const e = t.split("-");
  return e.length === 1 ? e[0] : e[0] + e.slice(1).map(
    /** @param {any} word */
    (n) => n[0].toUpperCase() + n.slice(1)
  ).join("");
}
function Vi(t) {
  const e = {}, n = t.split(";");
  for (const r of n) {
    const [i, o] = r.split(":");
    if (!i || o === void 0) break;
    const s = il(i.trim());
    e[s] = o.trim();
  }
  return e;
}
const ol = (t) => t;
function Xt(t, e, n, r) {
  var i = (t & $s) !== 0, o = (t & ta) !== 0, s = i && o, a = (t & ea) !== 0, l = s ? "both" : i ? "in" : "out", u, c = e.inert, f, d;
  function v() {
    return u ?? (u = n()(e, (r == null ? void 0 : r()) ?? /** @type {P} */
    {}, {
      direction: l
    }));
  }
  var m = {
    is_global: a,
    in() {
      var b;
      if (e.inert = c, !i) {
        d == null || d.abort(), (b = d == null ? void 0 : d.reset) == null || b.call(d);
        return;
      }
      o || f == null || f.abort(), nr(e, "introstart"), f = Jr(e, v(), d, 1, () => {
        nr(e, "introend"), f == null || f.abort(), f = u = void 0;
      });
    },
    out(b) {
      if (!o) {
        b == null || b(), u = void 0;
        return;
      }
      e.inert = !0, nr(e, "outrostart"), d = Jr(e, v(), f, 0, () => {
        nr(e, "outroend"), b == null || b();
      });
    },
    stop: () => {
      f == null || f.abort(), d == null || d.abort();
    }
  }, h = (
    /** @type {Effect} */
    at
  );
  if ((h.transitions ?? (h.transitions = [])).push(m), i && mr) {
    var g = a;
    if (!g) {
      for (var y = (
        /** @type {Effect | null} */
        h.parent
      ); y && y.f & ln; )
        for (; (y = y.parent) && !(y.f & Cr); )
          ;
      g = !y || (y.f & _o) !== 0;
    }
    g && z(() => {
      ze(() => m.in());
    });
  }
}
function Jr(t, e, n, r, i) {
  var o = r === 1;
  if (aa(e)) {
    var s, a = !1;
    return Jn(() => {
      if (!a) {
        var g = e({ direction: o ? "in" : "out" });
        s = Jr(t, g, n, r, i);
      }
    }), {
      abort: () => {
        a = !0, s == null || s.abort();
      },
      deactivate: () => s.deactivate(),
      reset: () => s.reset(),
      t: () => s.t()
    };
  }
  if (n == null || n.deactivate(), !(e != null && e.duration))
    return i(), {
      abort: ie,
      deactivate: ie,
      reset: ie,
      t: () => r
    };
  const { delay: l = 0, css: u, tick: c, easing: f = ol } = e;
  var d = [];
  if (o && n === void 0 && (c && c(0, 1), u)) {
    var v = Vi(u(0, 1));
    d.push(v, v);
  }
  var m = () => 1 - r, h = t.animate(d, { duration: l });
  return h.onfinish = () => {
    var g = (n == null ? void 0 : n.t()) ?? 1 - r;
    n == null || n.abort();
    var y = r - g, b = (
      /** @type {number} */
      e.duration * Math.abs(y)
    ), w = [];
    if (b > 0) {
      if (u)
        for (var C = Math.ceil(b / 16.666666666666668), I = 0; I <= C; I += 1) {
          var R = g + y * f(I / C), B = u(R, 1 - R);
          w.push(Vi(B));
        }
      m = () => {
        var H = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          h.currentTime
        );
        return g + y * f(H / b);
      }, c && rl(() => {
        if (h.playState !== "running") return !1;
        var H = m();
        return c(H, 1 - H), !0;
      });
    }
    h = t.animate(w, { duration: b, fill: "forwards" }), h.onfinish = () => {
      m = () => r, c == null || c(r, 1 - r), i();
    };
  }, {
    abort: () => {
      h && (h.cancel(), h.effect = null);
    },
    deactivate: () => {
      i = ie;
    },
    reset: () => {
      r === 0 && (c == null || c(1, 0));
    },
    t: () => m()
  };
}
function Ui(t, e) {
  return t === e || (t == null ? void 0 : t[yn]) === e;
}
function Lt(t = {}, e, n, r) {
  return z(() => {
    var i, o;
    return Ar(() => {
      i = o, o = [], ze(() => {
        t !== n(...o) && (e(t, ...o), i && Ui(n(...i), t) && e(null, ...i));
      });
    }), () => {
      Jn(() => {
        o && Ui(n(...o), t) && e(null, ...o);
      });
    };
  }), t;
}
function ye(t = !1) {
  const e = (
    /** @type {ComponentContextLegacy} */
    gt
  ), n = e.l.u;
  if (!n) return;
  let r = () => it(e.s);
  if (t) {
    let i = 0, o = (
      /** @type {Record<string, any>} */
      {}
    );
    const s = /* @__PURE__ */ xn(() => {
      let a = !1;
      const l = e.s;
      for (const u in l)
        l[u] !== o[u] && (o[u] = l[u], a = !0);
      return a && i++, i;
    });
    r = () => x(s);
  }
  n.b.length && Ta(() => {
    qi(e, r), fr(n.b);
  }), vr(() => {
    const i = ze(() => n.m.map(la));
    return () => {
      for (const o of i)
        typeof o == "function" && o();
    };
  }), n.a.length && vr(() => {
    qi(e, r), fr(n.a);
  });
}
function qi(t, e) {
  if (t.l.s)
    for (const n of t.l.s) x(n);
  e();
}
function tt(t, e) {
  var o;
  var n = (
    /** @type {Record<string, Function[] | Function>} */
    (o = t.$$events) == null ? void 0 : o[e.type]
  ), r = Gn(n) ? n.slice() : n == null ? [] : [n];
  for (var i of r)
    i.call(this, e);
}
const sl = {
  get(t, e) {
    if (!t.exclude.includes(e))
      return x(t.version), e in t.special ? t.special[e]() : t.props[e];
  },
  set(t, e, n) {
    return e in t.special || (t.special[e] = P(
      {
        get [e]() {
          return t.props[e];
        }
      },
      /** @type {string} */
      e,
      ho
    )), t.special[e](n), Ni(t.version), !0;
  },
  getOwnPropertyDescriptor(t, e) {
    if (!t.exclude.includes(e) && e in t.props)
      return {
        enumerable: !0,
        configurable: !0,
        value: t.props[e]
      };
  },
  deleteProperty(t, e) {
    return t.exclude.includes(e) || (t.exclude.push(e), Ni(t.version)), !0;
  },
  has(t, e) {
    return t.exclude.includes(e) ? !1 : e in t.props;
  },
  ownKeys(t) {
    return Reflect.ownKeys(t.props).filter((e) => !t.exclude.includes(e));
  }
};
function Yt(t, e) {
  return new Proxy({ props: t, exclude: e, special: {}, version: te(0) }, sl);
}
function Hi(t) {
  for (var e = at, n = at; e !== null && !(e.f & (ce | Zn)); )
    e = e.parent;
  try {
    return he(e), t();
  } finally {
    he(n);
  }
}
function P(t, e, n, r) {
  var I;
  var i = (n & Xs) !== 0, o = (n & Zs) !== 0, s = (n & Js) !== 0, a = (n & Qs) !== 0, l = (
    /** @type {V} */
    t[e]
  ), u = (I = pn(t, e)) == null ? void 0 : I.set, c = (
    /** @type {V} */
    r
  ), f = !0, d = !1, v = () => (d = !0, f && (f = !1, a ? c = ze(
    /** @type {() => V} */
    r
  ) : c = /** @type {V} */
  r), c);
  l === void 0 && r !== void 0 && (u && o && ha(), l = v(), u && u(l));
  var m;
  if (o)
    m = () => {
      var R = (
        /** @type {V} */
        t[e]
      );
      return R === void 0 ? v() : (f = !0, d = !1, R);
    };
  else {
    var h = Hi(
      () => (i ? xn : wa)(() => (
        /** @type {V} */
        t[e]
      ))
    );
    h.f |= ua, m = () => {
      var R = x(h);
      return R !== void 0 && (c = /** @type {V} */
      void 0), R === void 0 ? c : R;
    };
  }
  if (!(n & ho))
    return m;
  if (u) {
    var g = t.$$legacy;
    return function(R, B) {
      return arguments.length > 0 ? ((!o || !B || g) && u(B ? m() : R), R) : m();
    };
  }
  var y = !1, b = !1, w = /* @__PURE__ */ Or(l), C = Hi(
    () => /* @__PURE__ */ xn(() => {
      var R = m(), B = x(w), H = (
        /** @type {Derived} */
        bt
      );
      return y || R === void 0 && H.f & Pn ? (y = !1, b = !0, B) : (b = !1, w.v = R);
    })
  );
  return i || (C.equals = ci), function(R, B) {
    var H = x(C);
    if (arguments.length > 0) {
      const G = B ? x(C) : o && s ? ae(R) : R;
      return C.equals(G) || (y = !0, Et(w, G), d && c !== void 0 && (c = G), x(C)), R;
    }
    return H;
  };
}
function pi(t, e, n) {
  if (t == null)
    return e(void 0), n && n(void 0), ie;
  const r = t.subscribe(
    e,
    // @ts-expect-error
    n
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
function se(t, e, n) {
  const r = n[e] ?? (n[e] = {
    store: null,
    source: /* @__PURE__ */ Or(void 0),
    unsubscribe: ie
  });
  if (r.store !== t)
    if (r.unsubscribe(), r.store = t ?? null, t == null)
      r.source.v = void 0, r.unsubscribe = ie;
    else {
      var i = !0;
      r.unsubscribe = pi(t, (o) => {
        i ? r.source.v = o : Et(r.source, o);
      }), i = !1;
    }
  return x(r.source);
}
function _e() {
  const t = {};
  return Do(() => {
    for (var e in t)
      t[e].unsubscribe();
  }), t;
}
function al(t) {
  return t[t.length - 1];
}
function ll(t, e) {
  return t.map((n, r) => t[(e + r) % t.length]);
}
function Ne(t) {
  return Object.keys(t).reduce((e, n) => t[n] === void 0 ? e : e + `${n}:${t[n]};`, "");
}
function jr(t) {
  return t ? !0 : void 0;
}
Ne({
  position: "absolute",
  opacity: 0,
  "pointer-events": "none",
  margin: 0,
  transform: "translateX(-100%)"
});
function ls(t) {
  if (t !== null)
    return "";
}
const vn = [];
function en(t, e) {
  return {
    subscribe: St(t, e).subscribe
  };
}
function St(t, e = ie) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function i(a) {
    if (To(t, a) && (t = a, n)) {
      const l = !vn.length;
      for (const u of r)
        u[1](), vn.push(u, t);
      if (l) {
        for (let u = 0; u < vn.length; u += 2)
          vn[u][0](vn[u + 1]);
        vn.length = 0;
      }
    }
  }
  function o(a) {
    i(a(
      /** @type {T} */
      t
    ));
  }
  function s(a, l = ie) {
    const u = [a, l];
    return r.add(u), r.size === 1 && (n = e(i, o) || ie), a(
      /** @type {T} */
      t
    ), () => {
      r.delete(u), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: o, subscribe: s };
}
function ge(t, e, n) {
  const r = !Array.isArray(t), i = r ? [t] : t;
  if (!i.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const o = e.length < 2;
  return en(n, (s, a) => {
    let l = !1;
    const u = [];
    let c = 0, f = ie;
    const d = () => {
      if (c)
        return;
      f();
      const m = e(r ? u[0] : u, s, a);
      o ? s(m) : f = typeof m == "function" ? m : ie;
    }, v = i.map(
      (m, h) => pi(
        m,
        (g) => {
          u[h] = g, c &= ~(1 << h), l && d();
        },
        () => {
          c |= 1 << h;
        }
      )
    );
    return l = !0, d(), function() {
      fr(v), f(), l = !1;
    };
  });
}
function zi(t) {
  return {
    // @ts-expect-error TODO i suspect the bind is unnecessary
    subscribe: t.subscribe.bind(t)
  };
}
function yi(t) {
  let e;
  return pi(t, (n) => e = n)(), e;
}
function Yi(t) {
  function e(n) {
    return n(t), () => {
    };
  }
  return { subscribe: e };
}
const rr = (t) => new Proxy(t, {
  get(e, n, r) {
    return Reflect.get(e, n, r);
  },
  ownKeys(e) {
    return Reflect.ownKeys(e).filter((n) => n !== "action");
  }
}), Gi = (t) => typeof t == "function";
Pt("empty");
function Pt(t, e) {
  const { stores: n, action: r, returned: i } = e ?? {}, o = (() => {
    if (n && i)
      return ge(n, (a) => {
        const l = i(a);
        if (Gi(l)) {
          const u = (...c) => rr({
            ...l(...c),
            [`data-melt-${t}`]: "",
            action: r ?? pt
          });
          return u.action = r ?? pt, u;
        }
        return rr({
          ...l,
          [`data-melt-${t}`]: "",
          action: r ?? pt
        });
      });
    {
      const a = i, l = a == null ? void 0 : a();
      if (Gi(l)) {
        const u = (...c) => rr({
          ...l(...c),
          [`data-melt-${t}`]: "",
          action: r ?? pt
        });
        return u.action = r ?? pt, Yi(u);
      }
      return Yi(rr({
        ...l,
        [`data-melt-${t}`]: "",
        action: r ?? pt
      }));
    }
  })(), s = r ?? (() => {
  });
  return s.subscribe = o.subscribe, s;
}
function us(t) {
  const e = (o) => o ? `${t}-${o}` : t, n = (o) => `data-melt-${t}${o ? `-${o}` : ""}`, r = (o) => `[data-melt-${t}${o ? `-${o}` : ""}]`;
  return {
    name: e,
    attribute: n,
    selector: r,
    getEl: (o) => document.querySelector(r(o))
  };
}
const Ie = typeof document < "u", cs = (t) => typeof t == "function";
function _i(t) {
  return t instanceof Element;
}
function j(t) {
  return t instanceof HTMLElement;
}
function Te(t) {
  const e = t.getAttribute("aria-disabled"), n = t.getAttribute("disabled"), r = t.hasAttribute("data-disabled");
  return !!(e === "true" || n !== null || r);
}
function ul(t) {
  return t !== null && typeof t == "object";
}
function cl(t) {
  return ul(t) && "subscribe" in t;
}
function qt(...t) {
  return (...e) => {
    for (const n of t)
      typeof n == "function" && n(...e);
  };
}
function pt() {
}
function zt(t, e, n, r) {
  const i = Array.isArray(e) ? e : [e];
  return i.forEach((o) => t.addEventListener(o, n, r)), () => {
    i.forEach((o) => t.removeEventListener(o, n, r));
  };
}
function rt(t, e, n, r) {
  const i = Array.isArray(e) ? e : [e];
  if (typeof n == "function") {
    const o = dl((s) => n(s));
    return i.forEach((s) => t.addEventListener(s, o, r)), () => {
      i.forEach((s) => t.removeEventListener(s, o, r));
    };
  }
  return () => void 0;
}
function fl(t) {
  const e = t.currentTarget;
  if (!j(e))
    return null;
  const n = new CustomEvent(`m-${t.type}`, {
    detail: {
      originalEvent: t
    },
    cancelable: !0
  });
  return e.dispatchEvent(n), n;
}
function dl(t) {
  return (e) => {
    const n = fl(e);
    if (!(n != null && n.defaultPrevented))
      return t(e);
  };
}
function vl(t) {
  t.setAttribute("data-highlighted", "");
}
function gn(t) {
  t.removeAttribute("data-highlighted");
}
function fs(t) {
  gt === null && kr(), gt.l !== null ? bl(gt).m.push(t) : vr(() => {
    const e = ze(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function gl(t) {
  gt === null && kr(), fs(() => () => ze(t));
}
function ml(t, e, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(t, { detail: e, bubbles: n, cancelable: r });
}
function hl() {
  const t = gt;
  return t === null && kr(), (e, n, r) => {
    var o;
    const i = (
      /** @type {Record<string, Function | Function[]>} */
      (o = t.s.$$events) == null ? void 0 : o[
        /** @type {any} */
        e
      ]
    );
    if (i) {
      const s = Gn(i) ? i.slice() : [i], a = ml(
        /** @type {string} */
        e,
        n,
        r
      );
      for (const l of s)
        l.call(t.x, a);
      return !a.defaultPrevented;
    }
    return !0;
  };
}
function bl(t) {
  var e = (
    /** @type {ComponentContextLegacy} */
    t.l
  );
  return e.u ?? (e.u = { a: [], b: [], m: [] });
}
const Xi = (t) => {
  try {
    fs(t);
  } catch {
    return t;
  }
}, pl = (t) => {
  try {
    gl(t);
  } catch {
    return t;
  }
};
function Fr(t, ...e) {
  const n = {};
  for (const r of Object.keys(t))
    e.includes(r) || (n[r] = t[r]);
  return n;
}
function Dt(t) {
  return {
    ...t,
    get: () => yi(t)
  };
}
Dt.writable = function(t) {
  const e = St(t);
  let n = t;
  return {
    subscribe: e.subscribe,
    set(r) {
      e.set(r), n = r;
    },
    update(r) {
      const i = r(n);
      e.set(i), n = i;
    },
    get() {
      return n;
    }
  };
};
Dt.derived = function(t, e) {
  const n = /* @__PURE__ */ new Map(), r = () => {
    const o = Array.isArray(t) ? t.map((s) => s.get()) : t.get();
    return e(o);
  };
  return {
    get: r,
    subscribe: (o) => {
      const s = [];
      return (Array.isArray(t) ? t : [t]).forEach((l) => {
        s.push(l.subscribe(() => {
          o(r());
        }));
      }), o(r()), n.set(o, s), () => {
        const l = n.get(o);
        if (l)
          for (const u of l)
            u();
        n.delete(o);
      };
    }
  };
};
const jn = (t, e) => {
  const n = Dt(t), r = (o, s) => {
    n.update((a) => {
      const l = o(a);
      let u = l;
      return e && (u = e({ curr: a, next: l })), s == null || s(u), u;
    });
  };
  return {
    ...n,
    update: r,
    set: (o) => {
      r(() => o);
    }
  };
};
function xe(t) {
  return new Promise((e) => setTimeout(e, t));
}
let yl = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", _l = (t = 21) => {
  let e = "", n = t;
  for (; n--; )
    e += yl[Math.random() * 64 | 0];
  return e;
};
function wl() {
  return _l(10);
}
function Qr(t) {
  return t.reduce((e, n) => (e[n] = wl(), e), {});
}
const ht = {
  ALT: "Alt",
  ARROW_DOWN: "ArrowDown",
  ARROW_LEFT: "ArrowLeft",
  ARROW_RIGHT: "ArrowRight",
  ARROW_UP: "ArrowUp",
  BACKSPACE: "Backspace",
  CAPS_LOCK: "CapsLock",
  CONTROL: "Control",
  DELETE: "Delete",
  END: "End",
  ENTER: "Enter",
  ESCAPE: "Escape",
  F1: "F1",
  F10: "F10",
  F11: "F11",
  F12: "F12",
  F2: "F2",
  F3: "F3",
  F4: "F4",
  F5: "F5",
  F6: "F6",
  F7: "F7",
  F8: "F8",
  F9: "F9",
  HOME: "Home",
  META: "Meta",
  PAGE_DOWN: "PageDown",
  PAGE_UP: "PageUp",
  SHIFT: "Shift",
  SPACE: " ",
  TAB: "Tab",
  CTRL: "Control",
  ASTERISK: "*",
  A: "a",
  P: "p"
}, El = [ht.ARROW_DOWN, ht.PAGE_UP, ht.HOME], Tl = [ht.ARROW_UP, ht.PAGE_DOWN, ht.END], Zi = [...El, ...Tl], hr = [ht.ENTER, ht.SPACE];
function xl(t, e = 500) {
  let n = null;
  return function(...r) {
    const i = () => {
      n = null, t(...r);
    };
    n && clearTimeout(n), n = setTimeout(i, e);
  };
}
const ds = () => typeof window < "u";
function Cl() {
  const t = navigator.userAgentData;
  return (t == null ? void 0 : t.platform) ?? navigator.platform;
}
const vs = (t) => ds() && t.test(Cl().toLowerCase()), Ol = () => ds() && !!navigator.maxTouchPoints, Al = () => vs(/^mac/) && !Ol(), kl = () => vs(/mac|iphone|ipad|ipod/i), Pl = () => kl() && !Al(), Vr = "data-melt-scroll-lock";
function Ji(t, e) {
  if (!t)
    return;
  const n = t.style.cssText;
  return Object.assign(t.style, e), () => {
    t.style.cssText = n;
  };
}
function Sl(t, e, n) {
  if (!t)
    return;
  const r = t.style.getPropertyValue(e);
  return t.style.setProperty(e, n), () => {
    r ? t.style.setProperty(e, r) : t.style.removeProperty(e);
  };
}
function Rl(t) {
  const e = t.getBoundingClientRect().left;
  return Math.round(e) + t.scrollLeft ? "paddingLeft" : "paddingRight";
}
function gs(t) {
  const e = document, n = e.defaultView ?? window, { documentElement: r, body: i } = e;
  if (i.hasAttribute(Vr))
    return pt;
  i.setAttribute(Vr, "");
  const s = n.innerWidth - r.clientWidth, a = () => Sl(r, "--scrollbar-width", `${s}px`), l = Rl(r), u = n.getComputedStyle(i)[l], c = () => Ji(i, {
    overflow: "hidden",
    [l]: `calc(${u} + ${s}px)`
  }), f = () => {
    const { scrollX: v, scrollY: m, visualViewport: h } = n, g = (h == null ? void 0 : h.offsetLeft) ?? 0, y = (h == null ? void 0 : h.offsetTop) ?? 0, b = Ji(i, {
      position: "fixed",
      overflow: "hidden",
      top: `${-(m - Math.floor(y))}px`,
      left: `${-(v - Math.floor(g))}px`,
      right: "0",
      [l]: `calc(${u} + ${s}px)`
    });
    return () => {
      b == null || b(), n.scrollTo(v, m);
    };
  }, d = [a(), Pl() ? f() : c()];
  return () => {
    d.forEach((v) => v == null ? void 0 : v()), i.removeAttribute(Vr);
  };
}
function Qi(t) {
  const { open: e, forceVisible: n, activeTrigger: r } = t;
  return ge([e, n, r], ([i, o, s]) => (i || o) && s !== null);
}
function Kt(t, e) {
  let n;
  const r = ge(t, (o) => {
    n == null || n(), n = e(o);
  }).subscribe(pt), i = () => {
    r(), n == null || n();
  };
  return pl(i), i;
}
function nn(t) {
  const e = {};
  return Object.keys(t).forEach((n) => {
    const r = n, i = t[r];
    e[r] = Dt(St(i));
  }), e;
}
function Ut(t) {
  Ie && xe(1).then(() => {
    const e = document.activeElement;
    !j(e) || e === t || (e.tabIndex = -1, t && (t.tabIndex = 0, t.focus()));
  });
}
function ms() {
  return Array.from(document.querySelectorAll('a[href]:not([tabindex="-1"]), button:not([disabled]):not([tabindex="-1"]), input:not([disabled]):not([tabindex="-1"]), select:not([disabled]):not([tabindex="-1"]), textarea:not([disabled]):not([tabindex="-1"]), [tabindex]:not([tabindex="-1"])'));
}
function Dl(t) {
  const e = ms(), r = e.indexOf(t) + 1, i = e[r];
  return r < e.length && j(i) ? i : null;
}
function Fl(t) {
  const e = ms(), r = e.indexOf(t) - 1, i = e[r];
  return r >= 0 && j(i) ? i : null;
}
const Nl = /* @__PURE__ */ new Set(["Shift", "Control", "Alt", "Meta", "CapsLock", "NumLock"]), Il = {
  onMatch: Ut,
  getCurrentItem: () => document.activeElement
};
function Ml(t = {}) {
  const e = { ...Il, ...t }, n = Dt(St([])), r = xl(() => {
    n.update(() => []);
  });
  return {
    typed: n,
    resetTyped: r,
    handleTypeaheadSearch: (o, s) => {
      if (Nl.has(o))
        return;
      const a = e.getCurrentItem(), l = yi(n);
      if (!Array.isArray(l))
        return;
      l.push(o.toLowerCase()), n.set(l);
      const u = s.filter((g) => !(g.getAttribute("disabled") === "true" || g.getAttribute("aria-disabled") === "true" || g.hasAttribute("data-disabled"))), f = l.length > 1 && l.every((g) => g === l[0]) ? l[0] : l.join(""), d = j(a) ? u.indexOf(a) : -1;
      let v = ll(u, Math.max(d, 0));
      f.length === 1 && (v = v.filter((g) => g !== a));
      const h = v.find((g) => (g == null ? void 0 : g.innerText) && g.innerText.toLowerCase().startsWith(f.toLowerCase()));
      j(h) && h !== a && e.onMatch(h), r();
    }
  };
}
function Ll(t) {
  let e = t.parentElement;
  for (; j(e) && !e.hasAttribute("data-portal"); )
    e = e.parentElement;
  return e || "body";
}
function $r(t, e) {
  return e !== void 0 ? e : Ll(t) === "body" ? document.body : null;
}
async function ti(t) {
  const { prop: e, defaultEl: n } = t;
  if (await Promise.all([xe(1), tn]), e === void 0) {
    n == null || n.focus();
    return;
  }
  const r = cs(e) ? e(n) : e;
  if (typeof r == "string") {
    const i = document.querySelector(r);
    if (!j(i))
      return;
    i.focus();
  } else j(r) && r.focus();
}
en(void 0, (t) => {
  function e(r) {
    t(r), t(void 0);
  }
  return zt(document, "pointerup", e, {
    passive: !1,
    capture: !0
  });
});
const Bl = en(void 0, (t) => {
  function e(r) {
    r && r.key === ht.ESCAPE && t(r), t(void 0);
  }
  return zt(document, "keydown", e, {
    passive: !1
  });
}), br = (t, e = {}) => {
  let n = pt;
  function r(i = {}) {
    n();
    const o = { enabled: !0, ...i }, s = cl(o.enabled) ? o.enabled : en(o.enabled);
    n = qt(
      // Handle escape keydowns
      Bl.subscribe((a) => {
        var u;
        if (!a || !yi(s))
          return;
        const l = a.target;
        if (!(!j(l) || l.closest("[data-escapee]") !== t)) {
          if (a.preventDefault(), o.ignore) {
            if (cs(o.ignore)) {
              if (o.ignore(a))
                return;
            } else if (Array.isArray(o.ignore) && o.ignore.length > 0 && o.ignore.some((c) => c && l === c))
              return;
          }
          (u = o.handler) == null || u.call(o, a);
        }
      }),
      Kt(s, (a) => {
        a ? t.dataset.escapee = "" : delete t.dataset.escapee;
      })
    );
  }
  return r(e), {
    update: r,
    destroy() {
      t.removeAttribute("data-escapee"), n();
    }
  };
}, Ve = Math.min, re = Math.max, pr = Math.round, ir = Math.floor, Ue = (t) => ({
  x: t,
  y: t
}), Wl = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Kl = {
  start: "end",
  end: "start"
};
function ei(t, e, n) {
  return re(t, Ve(e, n));
}
function Fn(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function qe(t) {
  return t.split("-")[0];
}
function Nn(t) {
  return t.split("-")[1];
}
function hs(t) {
  return t === "x" ? "y" : "x";
}
function wi(t) {
  return t === "y" ? "height" : "width";
}
function rn(t) {
  return ["top", "bottom"].includes(qe(t)) ? "y" : "x";
}
function Ei(t) {
  return hs(rn(t));
}
function jl(t, e, n) {
  n === void 0 && (n = !1);
  const r = Nn(t), i = Ei(t), o = wi(i);
  let s = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return e.reference[o] > e.floating[o] && (s = yr(s)), [s, yr(s)];
}
function Vl(t) {
  const e = yr(t);
  return [ni(t), e, ni(e)];
}
function ni(t) {
  return t.replace(/start|end/g, (e) => Kl[e]);
}
function Ul(t, e, n) {
  const r = ["left", "right"], i = ["right", "left"], o = ["top", "bottom"], s = ["bottom", "top"];
  switch (t) {
    case "top":
    case "bottom":
      return n ? e ? i : r : e ? r : i;
    case "left":
    case "right":
      return e ? o : s;
    default:
      return [];
  }
}
function ql(t, e, n, r) {
  const i = Nn(t);
  let o = Ul(qe(t), n === "start", r);
  return i && (o = o.map((s) => s + "-" + i), e && (o = o.concat(o.map(ni)))), o;
}
function yr(t) {
  return t.replace(/left|right|bottom|top/g, (e) => Wl[e]);
}
function Hl(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function bs(t) {
  return typeof t != "number" ? Hl(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function _r(t) {
  const {
    x: e,
    y: n,
    width: r,
    height: i
  } = t;
  return {
    width: r,
    height: i,
    top: n,
    left: e,
    right: e + r,
    bottom: n + i,
    x: e,
    y: n
  };
}
function $i(t, e, n) {
  let {
    reference: r,
    floating: i
  } = t;
  const o = rn(e), s = Ei(e), a = wi(s), l = qe(e), u = o === "y", c = r.x + r.width / 2 - i.width / 2, f = r.y + r.height / 2 - i.height / 2, d = r[a] / 2 - i[a] / 2;
  let v;
  switch (l) {
    case "top":
      v = {
        x: c,
        y: r.y - i.height
      };
      break;
    case "bottom":
      v = {
        x: c,
        y: r.y + r.height
      };
      break;
    case "right":
      v = {
        x: r.x + r.width,
        y: f
      };
      break;
    case "left":
      v = {
        x: r.x - i.width,
        y: f
      };
      break;
    default:
      v = {
        x: r.x,
        y: r.y
      };
  }
  switch (Nn(e)) {
    case "start":
      v[s] -= d * (n && u ? -1 : 1);
      break;
    case "end":
      v[s] += d * (n && u ? -1 : 1);
      break;
  }
  return v;
}
const zl = async (t, e, n) => {
  const {
    placement: r = "bottom",
    strategy: i = "absolute",
    middleware: o = [],
    platform: s
  } = n, a = o.filter(Boolean), l = await (s.isRTL == null ? void 0 : s.isRTL(e));
  let u = await s.getElementRects({
    reference: t,
    floating: e,
    strategy: i
  }), {
    x: c,
    y: f
  } = $i(u, r, l), d = r, v = {}, m = 0;
  for (let h = 0; h < a.length; h++) {
    const {
      name: g,
      fn: y
    } = a[h], {
      x: b,
      y: w,
      data: C,
      reset: I
    } = await y({
      x: c,
      y: f,
      initialPlacement: r,
      placement: d,
      strategy: i,
      middlewareData: v,
      rects: u,
      platform: s,
      elements: {
        reference: t,
        floating: e
      }
    });
    c = b ?? c, f = w ?? f, v = {
      ...v,
      [g]: {
        ...v[g],
        ...C
      }
    }, I && m <= 50 && (m++, typeof I == "object" && (I.placement && (d = I.placement), I.rects && (u = I.rects === !0 ? await s.getElementRects({
      reference: t,
      floating: e,
      strategy: i
    }) : I.rects), {
      x: c,
      y: f
    } = $i(u, d, l)), h = -1);
  }
  return {
    x: c,
    y: f,
    placement: d,
    strategy: i,
    middlewareData: v
  };
};
async function Ti(t, e) {
  var n;
  e === void 0 && (e = {});
  const {
    x: r,
    y: i,
    platform: o,
    rects: s,
    elements: a,
    strategy: l
  } = t, {
    boundary: u = "clippingAncestors",
    rootBoundary: c = "viewport",
    elementContext: f = "floating",
    altBoundary: d = !1,
    padding: v = 0
  } = Fn(e, t), m = bs(v), g = a[d ? f === "floating" ? "reference" : "floating" : f], y = _r(await o.getClippingRect({
    element: (n = await (o.isElement == null ? void 0 : o.isElement(g))) == null || n ? g : g.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(a.floating)),
    boundary: u,
    rootBoundary: c,
    strategy: l
  })), b = f === "floating" ? {
    x: r,
    y: i,
    width: s.floating.width,
    height: s.floating.height
  } : s.reference, w = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(a.floating)), C = await (o.isElement == null ? void 0 : o.isElement(w)) ? await (o.getScale == null ? void 0 : o.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, I = _r(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: b,
    offsetParent: w,
    strategy: l
  }) : b);
  return {
    top: (y.top - I.top + m.top) / C.y,
    bottom: (I.bottom - y.bottom + m.bottom) / C.y,
    left: (y.left - I.left + m.left) / C.x,
    right: (I.right - y.right + m.right) / C.x
  };
}
const Yl = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      x: n,
      y: r,
      placement: i,
      rects: o,
      platform: s,
      elements: a,
      middlewareData: l
    } = e, {
      element: u,
      padding: c = 0
    } = Fn(t, e) || {};
    if (u == null)
      return {};
    const f = bs(c), d = {
      x: n,
      y: r
    }, v = Ei(i), m = wi(v), h = await s.getDimensions(u), g = v === "y", y = g ? "top" : "left", b = g ? "bottom" : "right", w = g ? "clientHeight" : "clientWidth", C = o.reference[m] + o.reference[v] - d[v] - o.floating[m], I = d[v] - o.reference[v], R = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
    let B = R ? R[w] : 0;
    (!B || !await (s.isElement == null ? void 0 : s.isElement(R))) && (B = a.floating[w] || o.floating[m]);
    const H = C / 2 - I / 2, G = B / 2 - h[m] / 2 - 1, Z = Ve(f[y], G), S = Ve(f[b], G), A = Z, p = B - h[m] - S, _ = B / 2 - h[m] / 2 + H, E = ei(A, _, p), L = !l.arrow && Nn(i) != null && _ !== E && o.reference[m] / 2 - (_ < A ? Z : S) - h[m] / 2 < 0, W = L ? _ < A ? _ - A : _ - p : 0;
    return {
      [v]: d[v] + W,
      data: {
        [v]: E,
        centerOffset: _ - E - W,
        ...L && {
          alignmentOffset: W
        }
      },
      reset: L
    };
  }
}), Gl = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var n, r;
      const {
        placement: i,
        middlewareData: o,
        rects: s,
        initialPlacement: a,
        platform: l,
        elements: u
      } = e, {
        mainAxis: c = !0,
        crossAxis: f = !0,
        fallbackPlacements: d,
        fallbackStrategy: v = "bestFit",
        fallbackAxisSideDirection: m = "none",
        flipAlignment: h = !0,
        ...g
      } = Fn(t, e);
      if ((n = o.arrow) != null && n.alignmentOffset)
        return {};
      const y = qe(i), b = rn(a), w = qe(a) === a, C = await (l.isRTL == null ? void 0 : l.isRTL(u.floating)), I = d || (w || !h ? [yr(a)] : Vl(a)), R = m !== "none";
      !d && R && I.push(...ql(a, h, m, C));
      const B = [a, ...I], H = await Ti(e, g), G = [];
      let Z = ((r = o.flip) == null ? void 0 : r.overflows) || [];
      if (c && G.push(H[y]), f) {
        const _ = jl(i, s, C);
        G.push(H[_[0]], H[_[1]]);
      }
      if (Z = [...Z, {
        placement: i,
        overflows: G
      }], !G.every((_) => _ <= 0)) {
        var S, A;
        const _ = (((S = o.flip) == null ? void 0 : S.index) || 0) + 1, E = B[_];
        if (E)
          return {
            data: {
              index: _,
              overflows: Z
            },
            reset: {
              placement: E
            }
          };
        let L = (A = Z.filter((W) => W.overflows[0] <= 0).sort((W, O) => W.overflows[1] - O.overflows[1])[0]) == null ? void 0 : A.placement;
        if (!L)
          switch (v) {
            case "bestFit": {
              var p;
              const W = (p = Z.filter((O) => {
                if (R) {
                  const U = rn(O.placement);
                  return U === b || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  U === "y";
                }
                return !0;
              }).map((O) => [O.placement, O.overflows.filter((U) => U > 0).reduce((U, nt) => U + nt, 0)]).sort((O, U) => O[1] - U[1])[0]) == null ? void 0 : p[0];
              W && (L = W);
              break;
            }
            case "initialPlacement":
              L = a;
              break;
          }
        if (i !== L)
          return {
            reset: {
              placement: L
            }
          };
      }
      return {};
    }
  };
};
async function Xl(t, e) {
  const {
    placement: n,
    platform: r,
    elements: i
  } = t, o = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), s = qe(n), a = Nn(n), l = rn(n) === "y", u = ["left", "top"].includes(s) ? -1 : 1, c = o && l ? -1 : 1, f = Fn(e, t);
  let {
    mainAxis: d,
    crossAxis: v,
    alignmentAxis: m
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: f.mainAxis || 0,
    crossAxis: f.crossAxis || 0,
    alignmentAxis: f.alignmentAxis
  };
  return a && typeof m == "number" && (v = a === "end" ? m * -1 : m), l ? {
    x: v * c,
    y: d * u
  } : {
    x: d * u,
    y: v * c
  };
}
const Zl = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      var n, r;
      const {
        x: i,
        y: o,
        placement: s,
        middlewareData: a
      } = e, l = await Xl(e, t);
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
}, Jl = function(t) {
  return t === void 0 && (t = {}), {
    name: "shift",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: r,
        placement: i
      } = e, {
        mainAxis: o = !0,
        crossAxis: s = !1,
        limiter: a = {
          fn: (g) => {
            let {
              x: y,
              y: b
            } = g;
            return {
              x: y,
              y: b
            };
          }
        },
        ...l
      } = Fn(t, e), u = {
        x: n,
        y: r
      }, c = await Ti(e, l), f = rn(qe(i)), d = hs(f);
      let v = u[d], m = u[f];
      if (o) {
        const g = d === "y" ? "top" : "left", y = d === "y" ? "bottom" : "right", b = v + c[g], w = v - c[y];
        v = ei(b, v, w);
      }
      if (s) {
        const g = f === "y" ? "top" : "left", y = f === "y" ? "bottom" : "right", b = m + c[g], w = m - c[y];
        m = ei(b, m, w);
      }
      const h = a.fn({
        ...e,
        [d]: v,
        [f]: m
      });
      return {
        ...h,
        data: {
          x: h.x - n,
          y: h.y - r,
          enabled: {
            [d]: o,
            [f]: s
          }
        }
      };
    }
  };
}, Ql = function(t) {
  return t === void 0 && (t = {}), {
    name: "size",
    options: t,
    async fn(e) {
      var n, r;
      const {
        placement: i,
        rects: o,
        platform: s,
        elements: a
      } = e, {
        apply: l = () => {
        },
        ...u
      } = Fn(t, e), c = await Ti(e, u), f = qe(i), d = Nn(i), v = rn(i) === "y", {
        width: m,
        height: h
      } = o.floating;
      let g, y;
      f === "top" || f === "bottom" ? (g = f, y = d === (await (s.isRTL == null ? void 0 : s.isRTL(a.floating)) ? "start" : "end") ? "left" : "right") : (y = f, g = d === "end" ? "top" : "bottom");
      const b = h - c.top - c.bottom, w = m - c.left - c.right, C = Ve(h - c[g], b), I = Ve(m - c[y], w), R = !e.middlewareData.shift;
      let B = C, H = I;
      if ((n = e.middlewareData.shift) != null && n.enabled.x && (H = w), (r = e.middlewareData.shift) != null && r.enabled.y && (B = b), R && !d) {
        const Z = re(c.left, 0), S = re(c.right, 0), A = re(c.top, 0), p = re(c.bottom, 0);
        v ? H = m - 2 * (Z !== 0 || S !== 0 ? Z + S : re(c.left, c.right)) : B = h - 2 * (A !== 0 || p !== 0 ? A + p : re(c.top, c.bottom));
      }
      await l({
        ...e,
        availableWidth: H,
        availableHeight: B
      });
      const G = await s.getDimensions(a.floating);
      return m !== G.width || h !== G.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Nr() {
  return typeof window < "u";
}
function In(t) {
  return ps(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function oe(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function we(t) {
  var e;
  return (e = (ps(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function ps(t) {
  return Nr() ? t instanceof Node || t instanceof oe(t).Node : !1;
}
function le(t) {
  return Nr() ? t instanceof Element || t instanceof oe(t).Element : !1;
}
function be(t) {
  return Nr() ? t instanceof HTMLElement || t instanceof oe(t).HTMLElement : !1;
}
function to(t) {
  return !Nr() || typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof oe(t).ShadowRoot;
}
function $n(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: r,
    display: i
  } = ue(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + r + n) && !["inline", "contents"].includes(i);
}
function $l(t) {
  return ["table", "td", "th"].includes(In(t));
}
function Ir(t) {
  return [":popover-open", ":modal"].some((e) => {
    try {
      return t.matches(e);
    } catch {
      return !1;
    }
  });
}
function xi(t) {
  const e = Ci(), n = le(t) ? ue(t) : t;
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !e && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function tu(t) {
  let e = He(t);
  for (; be(e) && !An(e); ) {
    if (xi(e))
      return e;
    if (Ir(e))
      return null;
    e = He(e);
  }
  return null;
}
function Ci() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function An(t) {
  return ["html", "body", "#document"].includes(In(t));
}
function ue(t) {
  return oe(t).getComputedStyle(t);
}
function Mr(t) {
  return le(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.scrollX,
    scrollTop: t.scrollY
  };
}
function He(t) {
  if (In(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    to(t) && t.host || // Fallback.
    we(t)
  );
  return to(e) ? e.host : e;
}
function ys(t) {
  const e = He(t);
  return An(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : be(e) && $n(e) ? e : ys(e);
}
function Yn(t, e, n) {
  var r;
  e === void 0 && (e = []), n === void 0 && (n = !0);
  const i = ys(t), o = i === ((r = t.ownerDocument) == null ? void 0 : r.body), s = oe(i);
  if (o) {
    const a = ri(s);
    return e.concat(s, s.visualViewport || [], $n(i) ? i : [], a && n ? Yn(a) : []);
  }
  return e.concat(i, Yn(i, [], n));
}
function ri(t) {
  return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null;
}
function _s(t) {
  const e = ue(t);
  let n = parseFloat(e.width) || 0, r = parseFloat(e.height) || 0;
  const i = be(t), o = i ? t.offsetWidth : n, s = i ? t.offsetHeight : r, a = pr(n) !== o || pr(r) !== s;
  return a && (n = o, r = s), {
    width: n,
    height: r,
    $: a
  };
}
function Oi(t) {
  return le(t) ? t : t.contextElement;
}
function Tn(t) {
  const e = Oi(t);
  if (!be(e))
    return Ue(1);
  const n = e.getBoundingClientRect(), {
    width: r,
    height: i,
    $: o
  } = _s(e);
  let s = (o ? pr(n.width) : n.width) / r, a = (o ? pr(n.height) : n.height) / i;
  return (!s || !Number.isFinite(s)) && (s = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: s,
    y: a
  };
}
const eu = /* @__PURE__ */ Ue(0);
function ws(t) {
  const e = oe(t);
  return !Ci() || !e.visualViewport ? eu : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function nu(t, e, n) {
  return e === void 0 && (e = !1), !n || e && n !== oe(t) ? !1 : e;
}
function on(t, e, n, r) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const i = t.getBoundingClientRect(), o = Oi(t);
  let s = Ue(1);
  e && (r ? le(r) && (s = Tn(r)) : s = Tn(t));
  const a = nu(o, n, r) ? ws(o) : Ue(0);
  let l = (i.left + a.x) / s.x, u = (i.top + a.y) / s.y, c = i.width / s.x, f = i.height / s.y;
  if (o) {
    const d = oe(o), v = r && le(r) ? oe(r) : r;
    let m = d, h = ri(m);
    for (; h && r && v !== m; ) {
      const g = Tn(h), y = h.getBoundingClientRect(), b = ue(h), w = y.left + (h.clientLeft + parseFloat(b.paddingLeft)) * g.x, C = y.top + (h.clientTop + parseFloat(b.paddingTop)) * g.y;
      l *= g.x, u *= g.y, c *= g.x, f *= g.y, l += w, u += C, m = oe(h), h = ri(m);
    }
  }
  return _r({
    width: c,
    height: f,
    x: l,
    y: u
  });
}
function ru(t) {
  let {
    elements: e,
    rect: n,
    offsetParent: r,
    strategy: i
  } = t;
  const o = i === "fixed", s = we(r), a = e ? Ir(e.floating) : !1;
  if (r === s || a && o)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = Ue(1);
  const c = Ue(0), f = be(r);
  if ((f || !f && !o) && ((In(r) !== "body" || $n(s)) && (l = Mr(r)), be(r))) {
    const d = on(r);
    u = Tn(r), c.x = d.x + r.clientLeft, c.y = d.y + r.clientTop;
  }
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - l.scrollLeft * u.x + c.x,
    y: n.y * u.y - l.scrollTop * u.y + c.y
  };
}
function iu(t) {
  return Array.from(t.getClientRects());
}
function ii(t, e) {
  const n = Mr(t).scrollLeft;
  return e ? e.left + n : on(we(t)).left + n;
}
function ou(t) {
  const e = we(t), n = Mr(t), r = t.ownerDocument.body, i = re(e.scrollWidth, e.clientWidth, r.scrollWidth, r.clientWidth), o = re(e.scrollHeight, e.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + ii(t);
  const a = -n.scrollTop;
  return ue(r).direction === "rtl" && (s += re(e.clientWidth, r.clientWidth) - i), {
    width: i,
    height: o,
    x: s,
    y: a
  };
}
function su(t, e) {
  const n = oe(t), r = we(t), i = n.visualViewport;
  let o = r.clientWidth, s = r.clientHeight, a = 0, l = 0;
  if (i) {
    o = i.width, s = i.height;
    const u = Ci();
    (!u || u && e === "fixed") && (a = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: o,
    height: s,
    x: a,
    y: l
  };
}
function au(t, e) {
  const n = on(t, !0, e === "fixed"), r = n.top + t.clientTop, i = n.left + t.clientLeft, o = be(t) ? Tn(t) : Ue(1), s = t.clientWidth * o.x, a = t.clientHeight * o.y, l = i * o.x, u = r * o.y;
  return {
    width: s,
    height: a,
    x: l,
    y: u
  };
}
function eo(t, e, n) {
  let r;
  if (e === "viewport")
    r = su(t, n);
  else if (e === "document")
    r = ou(we(t));
  else if (le(e))
    r = au(e, n);
  else {
    const i = ws(t);
    r = {
      ...e,
      x: e.x - i.x,
      y: e.y - i.y
    };
  }
  return _r(r);
}
function Es(t, e) {
  const n = He(t);
  return n === e || !le(n) || An(n) ? !1 : ue(n).position === "fixed" || Es(n, e);
}
function lu(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let r = Yn(t, [], !1).filter((a) => le(a) && In(a) !== "body"), i = null;
  const o = ue(t).position === "fixed";
  let s = o ? He(t) : t;
  for (; le(s) && !An(s); ) {
    const a = ue(s), l = xi(s);
    !l && a.position === "fixed" && (i = null), (o ? !l && !i : !l && a.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || $n(s) && !l && Es(t, s)) ? r = r.filter((c) => c !== s) : i = a, s = He(s);
  }
  return e.set(t, r), r;
}
function uu(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: r,
    strategy: i
  } = t;
  const s = [...n === "clippingAncestors" ? Ir(e) ? [] : lu(e, this._c) : [].concat(n), r], a = s[0], l = s.reduce((u, c) => {
    const f = eo(e, c, i);
    return u.top = re(f.top, u.top), u.right = Ve(f.right, u.right), u.bottom = Ve(f.bottom, u.bottom), u.left = re(f.left, u.left), u;
  }, eo(e, a, i));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function cu(t) {
  const {
    width: e,
    height: n
  } = _s(t);
  return {
    width: e,
    height: n
  };
}
function fu(t, e, n) {
  const r = be(e), i = we(e), o = n === "fixed", s = on(t, !0, o, e);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Ue(0);
  if (r || !r && !o)
    if ((In(e) !== "body" || $n(i)) && (a = Mr(e)), r) {
      const v = on(e, !0, o, e);
      l.x = v.x + e.clientLeft, l.y = v.y + e.clientTop;
    } else i && (l.x = ii(i));
  let u = 0, c = 0;
  if (i && !r && !o) {
    const v = i.getBoundingClientRect();
    c = v.top + a.scrollTop, u = v.left + a.scrollLeft - // RTL <body> scrollbar.
    ii(i, v);
  }
  const f = s.left + a.scrollLeft - l.x - u, d = s.top + a.scrollTop - l.y - c;
  return {
    x: f,
    y: d,
    width: s.width,
    height: s.height
  };
}
function Ur(t) {
  return ue(t).position === "static";
}
function no(t, e) {
  if (!be(t) || ue(t).position === "fixed")
    return null;
  if (e)
    return e(t);
  let n = t.offsetParent;
  return we(t) === n && (n = n.ownerDocument.body), n;
}
function Ts(t, e) {
  const n = oe(t);
  if (Ir(t))
    return n;
  if (!be(t)) {
    let i = He(t);
    for (; i && !An(i); ) {
      if (le(i) && !Ur(i))
        return i;
      i = He(i);
    }
    return n;
  }
  let r = no(t, e);
  for (; r && $l(r) && Ur(r); )
    r = no(r, e);
  return r && An(r) && Ur(r) && !xi(r) ? n : r || tu(t) || n;
}
const du = async function(t) {
  const e = this.getOffsetParent || Ts, n = this.getDimensions, r = await n(t.floating);
  return {
    reference: fu(t.reference, await e(t.floating), t.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function vu(t) {
  return ue(t).direction === "rtl";
}
const gu = {
  convertOffsetParentRelativeRectToViewportRelativeRect: ru,
  getDocumentElement: we,
  getClippingRect: uu,
  getOffsetParent: Ts,
  getElementRects: du,
  getClientRects: iu,
  getDimensions: cu,
  getScale: Tn,
  isElement: le,
  isRTL: vu
};
function mu(t, e) {
  let n = null, r;
  const i = we(t);
  function o() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), n = null;
  }
  function s(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), o();
    const {
      left: u,
      top: c,
      width: f,
      height: d
    } = t.getBoundingClientRect();
    if (a || e(), !f || !d)
      return;
    const v = ir(c), m = ir(i.clientWidth - (u + f)), h = ir(i.clientHeight - (c + d)), g = ir(u), b = {
      rootMargin: -v + "px " + -m + "px " + -h + "px " + -g + "px",
      threshold: re(0, Ve(1, l)) || 1
    };
    let w = !0;
    function C(I) {
      const R = I[0].intersectionRatio;
      if (R !== l) {
        if (!w)
          return s();
        R ? s(!1, R) : r = setTimeout(() => {
          s(!1, 1e-7);
        }, 1e3);
      }
      w = !1;
    }
    try {
      n = new IntersectionObserver(C, {
        ...b,
        // Handle <iframe>s
        root: i.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(C, b);
    }
    n.observe(t);
  }
  return s(!0), o;
}
function hu(t, e, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: o = !0,
    elementResize: s = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, u = Oi(t), c = i || o ? [...u ? Yn(u) : [], ...Yn(e)] : [];
  c.forEach((y) => {
    i && y.addEventListener("scroll", n, {
      passive: !0
    }), o && y.addEventListener("resize", n);
  });
  const f = u && a ? mu(u, n) : null;
  let d = -1, v = null;
  s && (v = new ResizeObserver((y) => {
    let [b] = y;
    b && b.target === u && v && (v.unobserve(e), cancelAnimationFrame(d), d = requestAnimationFrame(() => {
      var w;
      (w = v) == null || w.observe(e);
    })), n();
  }), u && !l && v.observe(u), v.observe(e));
  let m, h = l ? on(t) : null;
  l && g();
  function g() {
    const y = on(t);
    h && (y.x !== h.x || y.y !== h.y || y.width !== h.width || y.height !== h.height) && n(), h = y, m = requestAnimationFrame(g);
  }
  return n(), () => {
    var y;
    c.forEach((b) => {
      i && b.removeEventListener("scroll", n), o && b.removeEventListener("resize", n);
    }), f == null || f(), (y = v) == null || y.disconnect(), v = null, l && cancelAnimationFrame(m);
  };
}
const bu = Zl, pu = Jl, yu = Gl, _u = Ql, wu = Yl, Eu = (t, e, n) => {
  const r = /* @__PURE__ */ new Map(), i = {
    platform: gu,
    ...n
  }, o = {
    ...i.platform,
    _c: r
  };
  return zl(t, e, {
    ...i,
    platform: o
  });
}, Tu = {
  strategy: "absolute",
  placement: "top",
  gutter: 5,
  flip: !0,
  sameWidth: !1,
  overflowPadding: 8
}, xu = {
  bottom: "rotate(45deg)",
  left: "rotate(135deg)",
  top: "rotate(225deg)",
  right: "rotate(315deg)"
};
function Cu(t, e, n = {}) {
  if (!e || !t || n === null)
    return {
      destroy: pt
    };
  const r = { ...Tu, ...n }, i = e.querySelector("[data-arrow=true]"), o = [];
  r.flip && o.push(yu({
    boundary: r.boundary,
    padding: r.overflowPadding
  }));
  const s = j(i) ? i.offsetHeight / 2 : 0;
  if (r.gutter || r.offset) {
    const l = r.gutter ? { mainAxis: r.gutter } : r.offset;
    (l == null ? void 0 : l.mainAxis) != null && (l.mainAxis += s), o.push(bu(l));
  }
  o.push(pu({
    boundary: r.boundary,
    crossAxis: r.overlap,
    padding: r.overflowPadding
  })), i && o.push(wu({ element: i, padding: 8 })), o.push(_u({
    padding: r.overflowPadding,
    apply({ rects: l, availableHeight: u, availableWidth: c }) {
      r.sameWidth && Object.assign(e.style, {
        width: `${Math.round(l.reference.width)}px`,
        minWidth: "unset"
      }), r.fitViewport && Object.assign(e.style, {
        maxWidth: `${c}px`,
        maxHeight: `${u}px`
      });
    }
  }));
  function a() {
    if (!t || !e || j(t) && !t.ownerDocument.documentElement.contains(t))
      return;
    const { placement: l, strategy: u } = r;
    Eu(t, e, {
      placement: l,
      middleware: o,
      strategy: u
    }).then((c) => {
      const f = Math.round(c.x), d = Math.round(c.y), [v, m] = Ou(c.placement);
      if (e.setAttribute("data-side", v), e.setAttribute("data-align", m), Object.assign(e.style, {
        position: r.strategy,
        top: `${d}px`,
        left: `${f}px`
      }), j(i) && c.middlewareData.arrow) {
        const { x: h, y: g } = c.middlewareData.arrow, y = c.placement.split("-")[0];
        i.setAttribute("data-side", y), Object.assign(i.style, {
          position: "absolute",
          left: h != null ? `${h}px` : "",
          top: g != null ? `${g}px` : "",
          [y]: `calc(100% - ${s}px)`,
          transform: xu[y],
          backgroundColor: "inherit",
          zIndex: "inherit"
        });
      }
      return c;
    });
  }
  return Object.assign(e.style, {
    position: r.strategy
  }), {
    destroy: hu(t, e, a)
  };
}
function Ou(t) {
  const [e, n = "center"] = t.split("-");
  return [e, n];
}
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var xs = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"], wr = /* @__PURE__ */ xs.join(","), Cs = typeof Element > "u", sn = Cs ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, Er = !Cs && Element.prototype.getRootNode ? function(t) {
  var e;
  return t == null || (e = t.getRootNode) === null || e === void 0 ? void 0 : e.call(t);
} : function(t) {
  return t == null ? void 0 : t.ownerDocument;
}, Tr = function t(e, n) {
  var r;
  n === void 0 && (n = !0);
  var i = e == null || (r = e.getAttribute) === null || r === void 0 ? void 0 : r.call(e, "inert"), o = i === "" || i === "true", s = o || n && e && t(e.parentNode);
  return s;
}, Au = function(e) {
  var n, r = e == null || (n = e.getAttribute) === null || n === void 0 ? void 0 : n.call(e, "contenteditable");
  return r === "" || r === "true";
}, Os = function(e, n, r) {
  if (Tr(e))
    return [];
  var i = Array.prototype.slice.apply(e.querySelectorAll(wr));
  return n && sn.call(e, wr) && i.unshift(e), i = i.filter(r), i;
}, As = function t(e, n, r) {
  for (var i = [], o = Array.from(e); o.length; ) {
    var s = o.shift();
    if (!Tr(s, !1))
      if (s.tagName === "SLOT") {
        var a = s.assignedElements(), l = a.length ? a : s.children, u = t(l, !0, r);
        r.flatten ? i.push.apply(i, u) : i.push({
          scopeParent: s,
          candidates: u
        });
      } else {
        var c = sn.call(s, wr);
        c && r.filter(s) && (n || !e.includes(s)) && i.push(s);
        var f = s.shadowRoot || // check for an undisclosed shadow
        typeof r.getShadowRoot == "function" && r.getShadowRoot(s), d = !Tr(f, !1) && (!r.shadowRootFilter || r.shadowRootFilter(s));
        if (f && d) {
          var v = t(f === !0 ? s.children : f.children, !0, r);
          r.flatten ? i.push.apply(i, v) : i.push({
            scopeParent: s,
            candidates: v
          });
        } else
          o.unshift.apply(o, s.children);
      }
  }
  return i;
}, ks = function(e) {
  return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
}, Qe = function(e) {
  if (!e)
    throw new Error("No node provided");
  return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || Au(e)) && !ks(e) ? 0 : e.tabIndex;
}, ku = function(e, n) {
  var r = Qe(e);
  return r < 0 && n && !ks(e) ? 0 : r;
}, Pu = function(e, n) {
  return e.tabIndex === n.tabIndex ? e.documentOrder - n.documentOrder : e.tabIndex - n.tabIndex;
}, Ps = function(e) {
  return e.tagName === "INPUT";
}, Su = function(e) {
  return Ps(e) && e.type === "hidden";
}, Ru = function(e) {
  var n = e.tagName === "DETAILS" && Array.prototype.slice.apply(e.children).some(function(r) {
    return r.tagName === "SUMMARY";
  });
  return n;
}, Du = function(e, n) {
  for (var r = 0; r < e.length; r++)
    if (e[r].checked && e[r].form === n)
      return e[r];
}, Fu = function(e) {
  if (!e.name)
    return !0;
  var n = e.form || Er(e), r = function(a) {
    return n.querySelectorAll('input[type="radio"][name="' + a + '"]');
  }, i;
  if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
    i = r(window.CSS.escape(e.name));
  else
    try {
      i = r(e.name);
    } catch (s) {
      return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", s.message), !1;
    }
  var o = Du(i, e.form);
  return !o || o === e;
}, Nu = function(e) {
  return Ps(e) && e.type === "radio";
}, Iu = function(e) {
  return Nu(e) && !Fu(e);
}, Mu = function(e) {
  var n, r = e && Er(e), i = (n = r) === null || n === void 0 ? void 0 : n.host, o = !1;
  if (r && r !== e) {
    var s, a, l;
    for (o = !!((s = i) !== null && s !== void 0 && (a = s.ownerDocument) !== null && a !== void 0 && a.contains(i) || e != null && (l = e.ownerDocument) !== null && l !== void 0 && l.contains(e)); !o && i; ) {
      var u, c, f;
      r = Er(i), i = (u = r) === null || u === void 0 ? void 0 : u.host, o = !!((c = i) !== null && c !== void 0 && (f = c.ownerDocument) !== null && f !== void 0 && f.contains(i));
    }
  }
  return o;
}, ro = function(e) {
  var n = e.getBoundingClientRect(), r = n.width, i = n.height;
  return r === 0 && i === 0;
}, Lu = function(e, n) {
  var r = n.displayCheck, i = n.getShadowRoot;
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  var o = sn.call(e, "details>summary:first-of-type"), s = o ? e.parentElement : e;
  if (sn.call(s, "details:not([open]) *"))
    return !0;
  if (!r || r === "full" || r === "legacy-full") {
    if (typeof i == "function") {
      for (var a = e; e; ) {
        var l = e.parentElement, u = Er(e);
        if (l && !l.shadowRoot && i(l) === !0)
          return ro(e);
        e.assignedSlot ? e = e.assignedSlot : !l && u !== e.ownerDocument ? e = u.host : e = l;
      }
      e = a;
    }
    if (Mu(e))
      return !e.getClientRects().length;
    if (r !== "legacy-full")
      return !0;
  } else if (r === "non-zero-area")
    return ro(e);
  return !1;
}, Bu = function(e) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
    for (var n = e.parentElement; n; ) {
      if (n.tagName === "FIELDSET" && n.disabled) {
        for (var r = 0; r < n.children.length; r++) {
          var i = n.children.item(r);
          if (i.tagName === "LEGEND")
            return sn.call(n, "fieldset[disabled] *") ? !0 : !i.contains(e);
        }
        return !0;
      }
      n = n.parentElement;
    }
  return !1;
}, xr = function(e, n) {
  return !(n.disabled || // we must do an inert look up to filter out any elements inside an inert ancestor
  //  because we're limited in the type of selectors we can use in JSDom (see related
  //  note related to `candidateSelectors`)
  Tr(n) || Su(n) || Lu(n, e) || // For a details element with a summary, the summary element gets the focus
  Ru(n) || Bu(n));
}, oi = function(e, n) {
  return !(Iu(n) || Qe(n) < 0 || !xr(e, n));
}, Wu = function(e) {
  var n = parseInt(e.getAttribute("tabindex"), 10);
  return !!(isNaN(n) || n >= 0);
}, Ku = function t(e) {
  var n = [], r = [];
  return e.forEach(function(i, o) {
    var s = !!i.scopeParent, a = s ? i.scopeParent : i, l = ku(a, s), u = s ? t(i.candidates) : a;
    l === 0 ? s ? n.push.apply(n, u) : n.push(a) : r.push({
      documentOrder: o,
      tabIndex: l,
      item: i,
      isScope: s,
      content: u
    });
  }), r.sort(Pu).reduce(function(i, o) {
    return o.isScope ? i.push.apply(i, o.content) : i.push(o.content), i;
  }, []).concat(n);
}, ju = function(e, n) {
  n = n || {};
  var r;
  return n.getShadowRoot ? r = As([e], n.includeContainer, {
    filter: oi.bind(null, n),
    flatten: !1,
    getShadowRoot: n.getShadowRoot,
    shadowRootFilter: Wu
  }) : r = Os(e, n.includeContainer, oi.bind(null, n)), Ku(r);
}, Vu = function(e, n) {
  n = n || {};
  var r;
  return n.getShadowRoot ? r = As([e], n.includeContainer, {
    filter: xr.bind(null, n),
    flatten: !0,
    getShadowRoot: n.getShadowRoot
  }) : r = Os(e, n.includeContainer, xr.bind(null, n)), r;
}, mn = function(e, n) {
  if (n = n || {}, !e)
    throw new Error("No node provided");
  return sn.call(e, wr) === !1 ? !1 : oi(n, e);
}, Uu = /* @__PURE__ */ xs.concat("iframe").join(","), qr = function(e, n) {
  if (n = n || {}, !e)
    throw new Error("No node provided");
  return sn.call(e, Uu) === !1 ? !1 : xr(n, e);
};
/*!
* focus-trap 7.6.0
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/
function qu(t, e, n) {
  return (e = zu(e)) in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
function io(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function oo(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? io(Object(n), !0).forEach(function(r) {
      qu(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : io(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function Hu(t, e) {
  if (typeof t != "object" || !t) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function zu(t) {
  var e = Hu(t, "string");
  return typeof e == "symbol" ? e : e + "";
}
var so = {
  activateTrap: function(e, n) {
    if (e.length > 0) {
      var r = e[e.length - 1];
      r !== n && r.pause();
    }
    var i = e.indexOf(n);
    i === -1 || e.splice(i, 1), e.push(n);
  },
  deactivateTrap: function(e, n) {
    var r = e.indexOf(n);
    r !== -1 && e.splice(r, 1), e.length > 0 && e[e.length - 1].unpause();
  }
}, Yu = function(e) {
  return e.tagName && e.tagName.toLowerCase() === "input" && typeof e.select == "function";
}, Gu = function(e) {
  return (e == null ? void 0 : e.key) === "Escape" || (e == null ? void 0 : e.key) === "Esc" || (e == null ? void 0 : e.keyCode) === 27;
}, Vn = function(e) {
  return (e == null ? void 0 : e.key) === "Tab" || (e == null ? void 0 : e.keyCode) === 9;
}, Xu = function(e) {
  return Vn(e) && !e.shiftKey;
}, Zu = function(e) {
  return Vn(e) && e.shiftKey;
}, ao = function(e) {
  return setTimeout(e, 0);
}, lo = function(e, n) {
  var r = -1;
  return e.every(function(i, o) {
    return n(i) ? (r = o, !1) : !0;
  }), r;
}, Mn = function(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++)
    r[i - 1] = arguments[i];
  return typeof e == "function" ? e.apply(void 0, r) : e;
}, or = function(e) {
  return e.target.shadowRoot && typeof e.composedPath == "function" ? e.composedPath()[0] : e.target;
}, Ju = [], Qu = function(e, n) {
  var r = (n == null ? void 0 : n.document) || document, i = (n == null ? void 0 : n.trapStack) || Ju, o = oo({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    isKeyForward: Xu,
    isKeyBackward: Zu
  }, n), s = {
    // containers given to createFocusTrap()
    // @type {Array<HTMLElement>}
    containers: [],
    // list of objects identifying tabbable nodes in `containers` in the trap
    // NOTE: it's possible that a group has no tabbable nodes if nodes get removed while the trap
    //  is active, but the trap should never get to a state where there isn't at least one group
    //  with at least one tabbable node in it (that would lead to an error condition that would
    //  result in an error being thrown)
    // @type {Array<{
    //   container: HTMLElement,
    //   tabbableNodes: Array<HTMLElement>, // empty if none
    //   focusableNodes: Array<HTMLElement>, // empty if none
    //   posTabIndexesFound: boolean,
    //   firstTabbableNode: HTMLElement|undefined,
    //   lastTabbableNode: HTMLElement|undefined,
    //   firstDomTabbableNode: HTMLElement|undefined,
    //   lastDomTabbableNode: HTMLElement|undefined,
    //   nextTabbableNode: (node: HTMLElement, forward: boolean) => HTMLElement|undefined
    // }>}
    containerGroups: [],
    // same order/length as `containers` list
    // references to objects in `containerGroups`, but only those that actually have
    //  tabbable nodes in them
    // NOTE: same order as `containers` and `containerGroups`, but __not necessarily__
    //  the same length
    tabbableGroups: [],
    nodeFocusedBeforeActivation: null,
    mostRecentlyFocusedNode: null,
    active: !1,
    paused: !1,
    // timer ID for when delayInitialFocus is true and initial focus in this trap
    //  has been delayed during activation
    delayInitialFocusTimer: void 0,
    // the most recent KeyboardEvent for the configured nav key (typically [SHIFT+]TAB), if any
    recentNavEvent: void 0
  }, a, l = function(p, _, E) {
    return p && p[_] !== void 0 ? p[_] : o[E || _];
  }, u = function(p, _) {
    var E = typeof (_ == null ? void 0 : _.composedPath) == "function" ? _.composedPath() : void 0;
    return s.containerGroups.findIndex(function(L) {
      var W = L.container, O = L.tabbableNodes;
      return W.contains(p) || // fall back to explicit tabbable search which will take into consideration any
      //  web components if the `tabbableOptions.getShadowRoot` option was used for
      //  the trap, enabling shadow DOM support in tabbable (`Node.contains()` doesn't
      //  look inside web components even if open)
      (E == null ? void 0 : E.includes(W)) || O.find(function(U) {
        return U === p;
      });
    });
  }, c = function(p) {
    var _ = o[p];
    if (typeof _ == "function") {
      for (var E = arguments.length, L = new Array(E > 1 ? E - 1 : 0), W = 1; W < E; W++)
        L[W - 1] = arguments[W];
      _ = _.apply(void 0, L);
    }
    if (_ === !0 && (_ = void 0), !_) {
      if (_ === void 0 || _ === !1)
        return _;
      throw new Error("`".concat(p, "` was specified but was not a node, or did not return a node"));
    }
    var O = _;
    if (typeof _ == "string" && (O = r.querySelector(_), !O))
      throw new Error("`".concat(p, "` as selector refers to no known node"));
    return O;
  }, f = function() {
    var p = c("initialFocus");
    if (p === !1)
      return !1;
    if (p === void 0 || !qr(p, o.tabbableOptions))
      if (u(r.activeElement) >= 0)
        p = r.activeElement;
      else {
        var _ = s.tabbableGroups[0], E = _ && _.firstTabbableNode;
        p = E || c("fallbackFocus");
      }
    if (!p)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return p;
  }, d = function() {
    if (s.containerGroups = s.containers.map(function(p) {
      var _ = ju(p, o.tabbableOptions), E = Vu(p, o.tabbableOptions), L = _.length > 0 ? _[0] : void 0, W = _.length > 0 ? _[_.length - 1] : void 0, O = E.find(function(D) {
        return mn(D);
      }), U = E.slice().reverse().find(function(D) {
        return mn(D);
      }), nt = !!_.find(function(D) {
        return Qe(D) > 0;
      });
      return {
        container: p,
        tabbableNodes: _,
        focusableNodes: E,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: nt,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: L,
        /** Last tabbable node in container, __tabindex__ order; `undefined` if none. */
        lastTabbableNode: W,
        // NOTE: DOM order is NOT NECESSARILY "document position" order, but figuring that out
        //  would require more than just https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
        //  because that API doesn't work with Shadow DOM as well as it should (@see
        //  https://github.com/whatwg/dom/issues/320) and since this first/last is only needed, so far,
        //  to address an edge case related to positive tabindex support, this seems like a much easier,
        //  "close enough most of the time" alternative for positive tabindexes which should generally
        //  be avoided anyway...
        /** First tabbable node in container, __DOM__ order; `undefined` if none. */
        firstDomTabbableNode: O,
        /** Last tabbable node in container, __DOM__ order; `undefined` if none. */
        lastDomTabbableNode: U,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function(vt) {
          var wt = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, M = _.indexOf(vt);
          return M < 0 ? wt ? E.slice(E.indexOf(vt) + 1).find(function(Rt) {
            return mn(Rt);
          }) : E.slice(0, E.indexOf(vt)).reverse().find(function(Rt) {
            return mn(Rt);
          }) : _[M + (wt ? 1 : -1)];
        }
      };
    }), s.tabbableGroups = s.containerGroups.filter(function(p) {
      return p.tabbableNodes.length > 0;
    }), s.tabbableGroups.length <= 0 && !c("fallbackFocus"))
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    if (s.containerGroups.find(function(p) {
      return p.posTabIndexesFound;
    }) && s.containerGroups.length > 1)
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
  }, v = function(p) {
    var _ = p.activeElement;
    if (_)
      return _.shadowRoot && _.shadowRoot.activeElement !== null ? v(_.shadowRoot) : _;
  }, m = function(p) {
    if (p !== !1 && p !== v(document)) {
      if (!p || !p.focus) {
        m(f());
        return;
      }
      p.focus({
        preventScroll: !!o.preventScroll
      }), s.mostRecentlyFocusedNode = p, Yu(p) && p.select();
    }
  }, h = function(p) {
    var _ = c("setReturnFocus", p);
    return _ || (_ === !1 ? !1 : p);
  }, g = function(p) {
    var _ = p.target, E = p.event, L = p.isBackward, W = L === void 0 ? !1 : L;
    _ = _ || or(E), d();
    var O = null;
    if (s.tabbableGroups.length > 0) {
      var U = u(_, E), nt = U >= 0 ? s.containerGroups[U] : void 0;
      if (U < 0)
        W ? O = s.tabbableGroups[s.tabbableGroups.length - 1].lastTabbableNode : O = s.tabbableGroups[0].firstTabbableNode;
      else if (W) {
        var D = lo(s.tabbableGroups, function($) {
          var Gt = $.firstTabbableNode;
          return _ === Gt;
        });
        if (D < 0 && (nt.container === _ || qr(_, o.tabbableOptions) && !mn(_, o.tabbableOptions) && !nt.nextTabbableNode(_, !1)) && (D = U), D >= 0) {
          var vt = D === 0 ? s.tabbableGroups.length - 1 : D - 1, wt = s.tabbableGroups[vt];
          O = Qe(_) >= 0 ? wt.lastTabbableNode : wt.lastDomTabbableNode;
        } else Vn(E) || (O = nt.nextTabbableNode(_, !1));
      } else {
        var M = lo(s.tabbableGroups, function($) {
          var Gt = $.lastTabbableNode;
          return _ === Gt;
        });
        if (M < 0 && (nt.container === _ || qr(_, o.tabbableOptions) && !mn(_, o.tabbableOptions) && !nt.nextTabbableNode(_)) && (M = U), M >= 0) {
          var Rt = M === s.tabbableGroups.length - 1 ? 0 : M + 1, jt = s.tabbableGroups[Rt];
          O = Qe(_) >= 0 ? jt.firstTabbableNode : jt.firstDomTabbableNode;
        } else Vn(E) || (O = nt.nextTabbableNode(_));
      }
    } else
      O = c("fallbackFocus");
    return O;
  }, y = function(p) {
    var _ = or(p);
    if (!(u(_, p) >= 0)) {
      if (Mn(o.clickOutsideDeactivates, p)) {
        a.deactivate({
          // NOTE: by setting `returnFocus: false`, deactivate() will do nothing,
          //  which will result in the outside click setting focus to the node
          //  that was clicked (and if not focusable, to "nothing"); by setting
          //  `returnFocus: true`, we'll attempt to re-focus the node originally-focused
          //  on activation (or the configured `setReturnFocus` node), whether the
          //  outside click was on a focusable node or not
          returnFocus: o.returnFocusOnDeactivate
        });
        return;
      }
      Mn(o.allowOutsideClick, p) || p.preventDefault();
    }
  }, b = function(p) {
    var _ = or(p), E = u(_, p) >= 0;
    if (E || _ instanceof Document)
      E && (s.mostRecentlyFocusedNode = _);
    else {
      p.stopImmediatePropagation();
      var L, W = !0;
      if (s.mostRecentlyFocusedNode)
        if (Qe(s.mostRecentlyFocusedNode) > 0) {
          var O = u(s.mostRecentlyFocusedNode), U = s.containerGroups[O].tabbableNodes;
          if (U.length > 0) {
            var nt = U.findIndex(function(D) {
              return D === s.mostRecentlyFocusedNode;
            });
            nt >= 0 && (o.isKeyForward(s.recentNavEvent) ? nt + 1 < U.length && (L = U[nt + 1], W = !1) : nt - 1 >= 0 && (L = U[nt - 1], W = !1));
          }
        } else
          s.containerGroups.some(function(D) {
            return D.tabbableNodes.some(function(vt) {
              return Qe(vt) > 0;
            });
          }) || (W = !1);
      else
        W = !1;
      W && (L = g({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: s.mostRecentlyFocusedNode,
        isBackward: o.isKeyBackward(s.recentNavEvent)
      })), m(L || s.mostRecentlyFocusedNode || f());
    }
    s.recentNavEvent = void 0;
  }, w = function(p) {
    var _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    s.recentNavEvent = p;
    var E = g({
      event: p,
      isBackward: _
    });
    E && (Vn(p) && p.preventDefault(), m(E));
  }, C = function(p) {
    (o.isKeyForward(p) || o.isKeyBackward(p)) && w(p, o.isKeyBackward(p));
  }, I = function(p) {
    Gu(p) && Mn(o.escapeDeactivates, p) !== !1 && (p.preventDefault(), a.deactivate());
  }, R = function(p) {
    var _ = or(p);
    u(_, p) >= 0 || Mn(o.clickOutsideDeactivates, p) || Mn(o.allowOutsideClick, p) || (p.preventDefault(), p.stopImmediatePropagation());
  }, B = function() {
    if (s.active)
      return so.activateTrap(i, a), s.delayInitialFocusTimer = o.delayInitialFocus ? ao(function() {
        m(f());
      }) : m(f()), r.addEventListener("focusin", b, !0), r.addEventListener("mousedown", y, {
        capture: !0,
        passive: !1
      }), r.addEventListener("touchstart", y, {
        capture: !0,
        passive: !1
      }), r.addEventListener("click", R, {
        capture: !0,
        passive: !1
      }), r.addEventListener("keydown", C, {
        capture: !0,
        passive: !1
      }), r.addEventListener("keydown", I), a;
  }, H = function() {
    if (s.active)
      return r.removeEventListener("focusin", b, !0), r.removeEventListener("mousedown", y, !0), r.removeEventListener("touchstart", y, !0), r.removeEventListener("click", R, !0), r.removeEventListener("keydown", C, !0), r.removeEventListener("keydown", I), a;
  }, G = function(p) {
    var _ = p.some(function(E) {
      var L = Array.from(E.removedNodes);
      return L.some(function(W) {
        return W === s.mostRecentlyFocusedNode;
      });
    });
    _ && m(f());
  }, Z = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(G) : void 0, S = function() {
    Z && (Z.disconnect(), s.active && !s.paused && s.containers.map(function(p) {
      Z.observe(p, {
        subtree: !0,
        childList: !0
      });
    }));
  };
  return a = {
    get active() {
      return s.active;
    },
    get paused() {
      return s.paused;
    },
    activate: function(p) {
      if (s.active)
        return this;
      var _ = l(p, "onActivate"), E = l(p, "onPostActivate"), L = l(p, "checkCanFocusTrap");
      L || d(), s.active = !0, s.paused = !1, s.nodeFocusedBeforeActivation = r.activeElement, _ == null || _();
      var W = function() {
        L && d(), B(), S(), E == null || E();
      };
      return L ? (L(s.containers.concat()).then(W, W), this) : (W(), this);
    },
    deactivate: function(p) {
      if (!s.active)
        return this;
      var _ = oo({
        onDeactivate: o.onDeactivate,
        onPostDeactivate: o.onPostDeactivate,
        checkCanReturnFocus: o.checkCanReturnFocus
      }, p);
      clearTimeout(s.delayInitialFocusTimer), s.delayInitialFocusTimer = void 0, H(), s.active = !1, s.paused = !1, S(), so.deactivateTrap(i, a);
      var E = l(_, "onDeactivate"), L = l(_, "onPostDeactivate"), W = l(_, "checkCanReturnFocus"), O = l(_, "returnFocus", "returnFocusOnDeactivate");
      E == null || E();
      var U = function() {
        ao(function() {
          O && m(h(s.nodeFocusedBeforeActivation)), L == null || L();
        });
      };
      return O && W ? (W(h(s.nodeFocusedBeforeActivation)).then(U, U), this) : (U(), this);
    },
    pause: function(p) {
      if (s.paused || !s.active)
        return this;
      var _ = l(p, "onPause"), E = l(p, "onPostPause");
      return s.paused = !0, _ == null || _(), H(), S(), E == null || E(), this;
    },
    unpause: function(p) {
      if (!s.paused || !s.active)
        return this;
      var _ = l(p, "onUnpause"), E = l(p, "onPostUnpause");
      return s.paused = !1, _ == null || _(), d(), B(), S(), E == null || E(), this;
    },
    updateContainerElements: function(p) {
      var _ = [].concat(p).filter(Boolean);
      return s.containers = _.map(function(E) {
        return typeof E == "string" ? r.querySelector(E) : E;
      }), s.active && d(), S(), this;
    }
  }, a.updateContainerElements(e), a;
};
function Ss(t = {}) {
  let e;
  const { immediate: n, ...r } = t, i = St(!1), o = St(!1), s = (f) => e == null ? void 0 : e.activate(f), a = (f) => {
    e == null || e.deactivate(f);
  }, l = () => {
    e && (e.pause(), o.set(!0));
  }, u = () => {
    e && (e.unpause(), o.set(!1));
  };
  return {
    useFocusTrap: (f) => (e = Qu(f, {
      ...r,
      onActivate() {
        var d;
        i.set(!0), (d = t.onActivate) == null || d.call(t);
      },
      onDeactivate() {
        var d;
        i.set(!1), (d = t.onDeactivate) == null || d.call(t);
      }
    }), n && s(), {
      destroy() {
        a(), e = void 0;
      }
    }),
    hasFocus: zi(i),
    isPaused: zi(o),
    activate: s,
    deactivate: a,
    pause: l,
    unpause: u
  };
}
const sr = [], Rs = (t, e) => {
  let n = pt;
  function r() {
    const o = sr.indexOf(t);
    o >= 0 && sr.splice(o, 1);
  }
  function i(o) {
    n();
    const { open: s, onClose: a, shouldCloseOnInteractOutside: l, closeOnInteractOutside: u } = o;
    xe(100).then(() => {
      s ? sr.push(t) : r();
    });
    function c() {
      return al(sr) === t;
    }
    function f() {
      c() && a && (a(), r());
    }
    function d(m) {
      const h = m.target;
      _i(h) && h && c() && (m.preventDefault(), m.stopPropagation(), m.stopImmediatePropagation());
    }
    function v(m) {
      l != null && l(m) && c() && (m.preventDefault(), m.stopPropagation(), m.stopImmediatePropagation(), f());
    }
    n = tc(t, {
      onInteractOutsideStart: d,
      onInteractOutside: u ? v : void 0,
      enabled: s
    }).destroy;
  }
  return i(e), {
    update: i,
    destroy() {
      r(), n();
    }
  };
}, $u = {
  floating: {},
  focusTrap: {},
  modal: {},
  escapeKeydown: {},
  portal: "body"
}, uo = (t, e) => {
  t.dataset.escapee = "";
  const { anchorElement: n, open: r, options: i } = e;
  if (!n || !r || !i)
    return { destroy: pt };
  const o = { ...$u, ...i }, s = [];
  if (o.portal !== null && s.push(Ai(t, o.portal).destroy), s.push(Cu(n, t, o.floating).destroy), o.focusTrap !== null) {
    const { useFocusTrap: l } = Ss({
      immediate: !0,
      escapeDeactivates: !1,
      allowOutsideClick: !0,
      returnFocusOnDeactivate: !1,
      fallbackFocus: t,
      ...o.focusTrap
    });
    s.push(l(t).destroy);
  }
  o.modal !== null && s.push(Rs(t, {
    onClose: () => {
      j(n) && (r.set(!1), n.focus());
    },
    shouldCloseOnInteractOutside: (l) => !(l.defaultPrevented || j(n) && n.contains(l.target)),
    ...o.modal
  }).destroy), o.escapeKeydown !== null && s.push(br(t, {
    enabled: r,
    handler: () => {
      r.set(!1);
    },
    ...o.escapeKeydown
  }).destroy);
  const a = qt(...s);
  return {
    destroy() {
      a();
    }
  };
}, Ai = (t, e = "body") => {
  let n;
  if (!j(e) && typeof e != "string")
    return {
      destroy: pt
    };
  async function r(o) {
    if (e = o, typeof e == "string") {
      if (n = document.querySelector(e), n === null && (await tn(), n = document.querySelector(e)), n === null)
        throw new Error(`No element found matching css selector: "${e}"`);
    } else if (e instanceof HTMLElement)
      n = e;
    else
      throw new TypeError(`Unknown portal target type: ${e === null ? "null" : typeof e}. Allowed types: string (CSS selector) or HTMLElement.`);
    t.dataset.portal = "", n.appendChild(t), t.hidden = !1;
  }
  function i() {
    t.remove();
  }
  return r(e), {
    update: r,
    destroy: i
  };
}, tc = (t, e) => {
  let n = pt, r = pt, i = !1, o = !1, s = !1;
  function a(c) {
    n(), r();
    const { onInteractOutside: f, onInteractOutsideStart: d, enabled: v } = c;
    if (!v)
      return;
    function m(y) {
      f && co(y, t) && (d == null || d(y));
      const b = y.target;
      _i(b) && Ds(t, b) && (o = !0), i = !0;
    }
    function h(y) {
      f == null || f(y);
    }
    const g = ec(t);
    if (typeof PointerEvent < "u") {
      const y = (b) => {
        r();
        const w = (C) => {
          l(C) && h(C), u();
        };
        if (b.pointerType === "touch") {
          r = zt(g, "click", w, {
            capture: !0,
            once: !0
          });
          return;
        }
        w(b);
      };
      n = qt(zt(g, "pointerdown", m, !0), zt(g, "pointerup", y, !0));
    } else {
      const y = (w) => {
        s ? s = !1 : l(w) && h(w), u();
      }, b = (w) => {
        s = !0, l(w) && h(w), u();
      };
      n = qt(zt(g, "mousedown", m, !0), zt(g, "mouseup", y, !0), zt(g, "touchstart", m, !0), zt(g, "touchend", b, !0));
    }
  }
  function l(c) {
    return !!(i && !o && co(c, t));
  }
  function u() {
    i = !1, o = !1;
  }
  return a(e), {
    update: a,
    destroy() {
      n(), r();
    }
  };
};
function co(t, e) {
  if ("button" in t && t.button > 0)
    return !1;
  const n = t.target;
  if (!_i(n))
    return !1;
  const r = n.ownerDocument;
  return !r || !r.documentElement.contains(n) ? !1 : e && !Ds(e, n);
}
function Ds(t, e) {
  return t === e || t.contains(e);
}
function ec(t) {
  return (t == null ? void 0 : t.ownerDocument) ?? document;
}
en(!1), en(!1), en(void 0);
const nc = {
  ltr: [...hr, ht.ARROW_RIGHT],
  rtl: [...hr, ht.ARROW_LEFT]
}, rc = {
  ltr: [ht.ARROW_LEFT],
  rtl: [ht.ARROW_RIGHT]
}, fo = ["menu", "trigger"], ic = {
  arrowSize: 8,
  positioning: {
    placement: "bottom"
  },
  preventScroll: !0,
  closeOnEscape: !0,
  closeOnOutsideClick: !0,
  portal: void 0,
  loop: !1,
  dir: "ltr",
  defaultOpen: !1,
  typeahead: !0,
  closeOnItemClick: !0,
  onOutsideClick: void 0
};
function oc(t) {
  const { name: e, selector: n } = us(t.selector), { preventScroll: r, arrowSize: i, positioning: o, closeOnEscape: s, closeOnOutsideClick: a, portal: l, forceVisible: u, typeahead: c, loop: f, closeFocus: d, disableFocusFirstItem: v, closeOnItemClick: m, onOutsideClick: h } = t.rootOptions, g = t.rootOpen, y = t.rootActiveTrigger, b = t.nextFocusable, w = t.prevFocusable, C = Dt.writable(!1), I = Dt(St(0)), R = Dt(St(null)), B = Dt(St("right")), H = Dt(St(null)), G = Dt(ge([B, R], ([T, F]) => (N) => T === (F == null ? void 0 : F.side) && sc(N, F == null ? void 0 : F.area))), { typed: Z, handleTypeaheadSearch: S } = Ml(), A = nn({ ...Qr(fo), ...t.ids }), p = Qi({
    open: g,
    forceVisible: u,
    activeTrigger: y
  }), _ = Pt(e(), {
    stores: [p, l, A.menu, A.trigger],
    returned: ([T, F, N, K]) => ({
      role: "menu",
      hidden: T ? void 0 : !0,
      style: Ne({
        display: T ? void 0 : "none"
      }),
      id: N,
      "aria-labelledby": K,
      "data-state": T ? "open" : "closed",
      "data-portal": ls(F),
      tabindex: -1
    }),
    action: (T) => {
      let F = pt;
      const N = Kt([p, y, o, a, l, s], ([J, Ct, Qt, Tt, ot, ft]) => {
        F(), !(!J || !Ct) && tn().then(() => {
          F(), Bn(T, n), F = uo(T, {
            anchorElement: Ct,
            open: g,
            options: {
              floating: Qt,
              modal: {
                closeOnInteractOutside: Tt,
                shouldCloseOnInteractOutside: (et) => {
                  var st;
                  return (st = h.get()) == null || st(et), !(et.defaultPrevented || j(Ct) && Ct.contains(et.target));
                },
                onClose: () => {
                  g.set(!1), Ct.focus();
                },
                open: J
              },
              portal: $r(T, ot),
              escapeKeydown: ft ? void 0 : null
            }
          }).destroy;
        });
      }), K = qt(rt(T, "keydown", (J) => {
        const Ct = J.target, Qt = J.currentTarget;
        if (!j(Ct) || !j(Qt) || !(Ct.closest('[role="menu"]') === Qt))
          return;
        if (Zi.includes(J.key) && go(J, f.get() ?? !1), J.key === ht.TAB) {
          J.preventDefault(), g.set(!1), vo(J, b, w);
          return;
        }
        const ot = J.key.length === 1;
        !(J.ctrlKey || J.altKey || J.metaKey) && ot && c.get() === !0 && S(J.key, Je(Qt));
      }));
      return {
        destroy() {
          N(), K(), F();
        }
      };
    }
  }), E = Pt(e("trigger"), {
    stores: [g, A.menu, A.trigger],
    returned: ([T, F, N]) => ({
      "aria-controls": F,
      "aria-expanded": T,
      "data-state": T ? "open" : "closed",
      id: N,
      tabindex: 0
    }),
    action: (T) => (ar(T), y.update((N) => N || T), {
      destroy: qt(rt(T, "click", (N) => {
        const K = g.get(), J = N.currentTarget;
        j(J) && ($(J), K || N.preventDefault());
      }), rt(T, "keydown", (N) => {
        const K = N.currentTarget;
        if (!j(K) || !(hr.includes(N.key) || N.key === ht.ARROW_DOWN))
          return;
        N.preventDefault(), $(K);
        const J = K.getAttribute("aria-controls");
        if (!J)
          return;
        const Ct = document.getElementById(J);
        if (!Ct)
          return;
        const Qt = Je(Ct);
        Qt.length && Ut(Qt[0]);
      }))
    })
  }), L = Pt(e("arrow"), {
    stores: i,
    returned: (T) => ({
      "data-arrow": !0,
      style: Ne({
        position: "absolute",
        width: `var(--arrow-size, ${T}px)`,
        height: `var(--arrow-size, ${T}px)`
      })
    })
  }), W = Pt(e("overlay"), {
    stores: [p],
    returned: ([T]) => ({
      hidden: T ? void 0 : !0,
      tabindex: -1,
      style: Ne({
        display: T ? void 0 : "none"
      }),
      "aria-hidden": "true",
      "data-state": uc(T)
    }),
    action: (T) => {
      let F = pt;
      if (s.get()) {
        const K = br(T, {
          handler: () => {
            g.set(!1);
            const J = y.get();
            J && J.focus();
          }
        });
        K && K.destroy && (F = K.destroy);
      }
      const N = Kt([l], ([K]) => {
        if (K === null)
          return pt;
        const J = $r(T, K);
        return J === null ? pt : Ai(T, J).destroy;
      });
      return {
        destroy() {
          F(), N();
        }
      };
    }
  }), O = Pt(e("item"), {
    returned: () => ({
      role: "menuitem",
      tabindex: -1,
      "data-orientation": "vertical"
    }),
    action: (T) => (Bn(T, n), ar(T), {
      destroy: qt(rt(T, "pointerdown", (N) => {
        const K = N.currentTarget;
        if (j(K) && Te(K)) {
          N.preventDefault();
          return;
        }
      }), rt(T, "click", (N) => {
        const K = N.currentTarget;
        if (j(K)) {
          if (Te(K)) {
            N.preventDefault();
            return;
          }
          if (N.defaultPrevented) {
            Ut(K);
            return;
          }
          m.get() && xe(1).then(() => {
            g.set(!1);
          });
        }
      }), rt(T, "keydown", (N) => {
        Jt(N);
      }), rt(T, "pointermove", (N) => {
        Re(N);
      }), rt(T, "pointerleave", (N) => {
        Ge(N);
      }), rt(T, "focusin", (N) => {
        Gt(N);
      }), rt(T, "focusout", (N) => {
        Ee(N);
      }))
    })
  }), U = Pt(e("group"), {
    returned: () => (T) => ({
      role: "group",
      "aria-labelledby": T
    })
  }), nt = Pt(e("group-label"), {
    returned: () => (T) => ({
      id: T
    })
  }), D = {
    defaultChecked: !1,
    disabled: !1
  }, vt = (T) => {
    const F = { ...D, ...T }, N = F.checked ?? St(F.defaultChecked ?? null), K = jn(N, F.onCheckedChange), J = St(F.disabled), Ct = Pt(e("checkbox-item"), {
      stores: [K, J],
      returned: ([ot, ft]) => ({
        role: "menuitemcheckbox",
        tabindex: -1,
        "data-orientation": "vertical",
        "aria-checked": un(ot) ? "mixed" : ot ? "true" : "false",
        "data-disabled": jr(ft),
        "data-state": Kr(ot)
      }),
      action: (ot) => (Bn(ot, n), ar(ot), {
        destroy: qt(rt(ot, "pointerdown", (et) => {
          const st = et.currentTarget;
          if (j(st) && Te(st)) {
            et.preventDefault();
            return;
          }
        }), rt(ot, "click", (et) => {
          const st = et.currentTarget;
          if (j(st)) {
            if (Te(st)) {
              et.preventDefault();
              return;
            }
            if (et.defaultPrevented) {
              Ut(st);
              return;
            }
            K.update((De) => un(De) ? !0 : !De), m.get() && tn().then(() => {
              g.set(!1);
            });
          }
        }), rt(ot, "keydown", (et) => {
          Jt(et);
        }), rt(ot, "pointermove", (et) => {
          const st = et.currentTarget;
          if (j(st)) {
            if (Te(st)) {
              Se(et);
              return;
            }
            Re(et, st);
          }
        }), rt(ot, "pointerleave", (et) => {
          Ge(et);
        }), rt(ot, "focusin", (et) => {
          Gt(et);
        }), rt(ot, "focusout", (et) => {
          Ee(et);
        }))
      })
    }), Qt = ge(K, (ot) => ot === !0), Tt = ge(K, (ot) => ot === "indeterminate");
    return {
      elements: {
        checkboxItem: Ct
      },
      states: {
        checked: K
      },
      helpers: {
        isChecked: Qt,
        isIndeterminate: Tt
      },
      options: {
        disabled: J
      }
    };
  }, wt = (T = {}) => {
    const F = T.value ?? St(T.defaultValue ?? null), N = jn(F, T.onValueChange), K = Pt(e("radio-group"), {
      returned: () => ({
        role: "group"
      })
    }), J = {
      disabled: !1
    }, Ct = Pt(e("radio-item"), {
      stores: [N],
      returned: ([Tt]) => (ot) => {
        const { value: ft, disabled: et } = { ...J, ...ot }, st = Tt === ft;
        return {
          disabled: et,
          role: "menuitemradio",
          "data-state": st ? "checked" : "unchecked",
          "aria-checked": st,
          "data-disabled": jr(et),
          "data-value": ft,
          "data-orientation": "vertical",
          tabindex: -1
        };
      },
      action: (Tt) => (Bn(Tt, n), {
        destroy: qt(rt(Tt, "pointerdown", (ft) => {
          const et = ft.currentTarget;
          if (!j(et))
            return;
          const st = Tt.dataset.value;
          if (Tt.dataset.disabled || st === void 0) {
            ft.preventDefault();
            return;
          }
        }), rt(Tt, "click", (ft) => {
          const et = ft.currentTarget;
          if (!j(et))
            return;
          const st = Tt.dataset.value;
          if (Tt.dataset.disabled || st === void 0) {
            ft.preventDefault();
            return;
          }
          if (ft.defaultPrevented) {
            if (!j(et))
              return;
            Ut(et);
            return;
          }
          N.set(st), m.get() && tn().then(() => {
            g.set(!1);
          });
        }), rt(Tt, "keydown", (ft) => {
          Jt(ft);
        }), rt(Tt, "pointermove", (ft) => {
          const et = ft.currentTarget;
          if (!j(et))
            return;
          const st = Tt.dataset.value;
          if (Tt.dataset.disabled || st === void 0) {
            Se(ft);
            return;
          }
          Re(ft, et);
        }), rt(Tt, "pointerleave", (ft) => {
          Ge(ft);
        }), rt(Tt, "focusin", (ft) => {
          Gt(ft);
        }), rt(Tt, "focusout", (ft) => {
          Ee(ft);
        }))
      })
    }), Qt = ge(N, (Tt) => (ot) => Tt === ot);
    return {
      elements: {
        radioGroup: K,
        radioItem: Ct
      },
      states: {
        value: N
      },
      helpers: {
        isChecked: Qt
      }
    };
  }, { elements: { root: M } } = bc({
    orientation: "horizontal"
  }), Rt = {
    ...ic,
    disabled: !1,
    positioning: {
      placement: "right-start",
      gutter: 8
    }
  }, jt = (T) => {
    const F = { ...Rt, ...T }, N = F.open ?? St(!1), K = jn(N, F == null ? void 0 : F.onOpenChange), J = nn(Fr(F, "ids")), { positioning: Ct, arrowSize: Qt, disabled: Tt } = J, ot = Dt(St(null)), ft = Dt(St(null)), et = Dt(St(0)), st = nn({ ...Qr(fo), ...F.ids });
    Xi(() => {
      const ut = document.getElementById(st.trigger.get());
      ut && ot.set(ut);
    });
    const De = Qi({
      open: K,
      forceVisible: u,
      activeTrigger: ot
    }), Vs = Pt(e("submenu"), {
      stores: [De, st.menu, st.trigger],
      returned: ([ut, Bt, $t]) => ({
        role: "menu",
        hidden: ut ? void 0 : !0,
        style: Ne({
          display: ut ? void 0 : "none"
        }),
        id: Bt,
        "aria-labelledby": $t,
        "data-state": ut ? "open" : "closed",
        // unit tests fail on `.closest` if the id starts with a number
        // so using a data attribute
        "data-id": Bt,
        tabindex: -1
      }),
      action: (ut) => {
        let Bt = pt;
        const $t = Kt([De, Ct], ([X, mt]) => {
          if (Bt(), !X)
            return;
          const kt = ot.get();
          kt && tn().then(() => {
            Bt();
            const Ft = Si(kt);
            Bt = uo(ut, {
              anchorElement: kt,
              open: K,
              options: {
                floating: mt,
                portal: j(Ft) ? Ft : void 0,
                modal: null,
                focusTrap: null,
                escapeKeydown: null
              }
            }).destroy;
          });
        }), dt = qt(rt(ut, "keydown", (X) => {
          if (X.key === ht.ESCAPE)
            return;
          const mt = X.target, kt = X.currentTarget;
          if (!j(mt) || !j(kt) || !(mt.closest('[role="menu"]') === kt))
            return;
          if (Zi.includes(X.key)) {
            X.stopImmediatePropagation(), go(X, f.get() ?? !1);
            return;
          }
          const cn = rc.ltr.includes(X.key), fn = X.ctrlKey || X.altKey || X.metaKey, er = X.key.length === 1;
          if (cn) {
            const Ri = ot.get();
            X.preventDefault(), K.update(() => (Ri && Ut(Ri), !1));
            return;
          }
          if (X.key === ht.TAB) {
            X.preventDefault(), g.set(!1), vo(X, b, w);
            return;
          }
          !fn && er && c.get() === !0 && S(X.key, Je(kt));
        }), rt(ut, "pointermove", (X) => {
          Vt(X);
        }), rt(ut, "focusout", (X) => {
          const mt = ot.get();
          if (C.get()) {
            const kt = X.target, Ft = document.getElementById(st.menu.get());
            if (!j(Ft) || !j(kt))
              return;
            !Ft.contains(kt) && kt !== mt && K.set(!1);
          } else {
            const kt = X.currentTarget, Ft = X.relatedTarget;
            if (!j(Ft) || !j(kt))
              return;
            !kt.contains(Ft) && Ft !== mt && K.set(!1);
          }
        }));
        return {
          destroy() {
            $t(), Bt(), dt();
          }
        };
      }
    }), Us = Pt(e("subtrigger"), {
      stores: [K, Tt, st.menu, st.trigger],
      returned: ([ut, Bt, $t, dt]) => ({
        role: "menuitem",
        id: dt,
        tabindex: -1,
        "aria-controls": $t,
        "aria-expanded": ut,
        "data-state": ut ? "open" : "closed",
        "data-disabled": jr(Bt),
        "aria-haspopop": "menu"
      }),
      action: (ut) => {
        Bn(ut, n), ar(ut), ot.update((dt) => dt || ut);
        const Bt = () => {
          Hr(ft), window.clearTimeout(et.get()), R.set(null);
        }, $t = qt(rt(ut, "click", (dt) => {
          if (dt.defaultPrevented)
            return;
          const X = dt.currentTarget;
          !j(X) || Te(X) || (Ut(X), K.get() || K.update((mt) => mt || (ot.set(X), !mt)));
        }), rt(ut, "keydown", (dt) => {
          const X = Z.get(), mt = dt.currentTarget;
          if (!(!j(mt) || Te(mt) || X.length > 0 && dt.key === ht.SPACE) && nc.ltr.includes(dt.key)) {
            if (!K.get()) {
              mt.click(), dt.preventDefault();
              return;
            }
            const Ft = mt.getAttribute("aria-controls");
            if (!Ft)
              return;
            const cn = document.getElementById(Ft);
            if (!j(cn))
              return;
            const fn = Je(cn)[0];
            Ut(fn);
          }
        }), rt(ut, "pointermove", (dt) => {
          if (!Ln(dt) || (Wt(dt), dt.defaultPrevented))
            return;
          const X = dt.currentTarget;
          if (!j(X))
            return;
          lc(st.menu.get()) || Ut(X);
          const mt = ft.get();
          !K.get() && !mt && !Te(X) && ft.set(window.setTimeout(() => {
            K.update(() => (ot.set(X), !0)), Hr(ft);
          }, 100));
        }), rt(ut, "pointerleave", (dt) => {
          if (!Ln(dt))
            return;
          Hr(ft);
          const X = document.getElementById(st.menu.get()), mt = X == null ? void 0 : X.getBoundingClientRect();
          if (mt) {
            const kt = X == null ? void 0 : X.dataset.side, Ft = kt === "right", cn = Ft ? -5 : 5, fn = mt[Ft ? "left" : "right"], er = mt[Ft ? "right" : "left"];
            R.set({
              area: [
                // Apply a bleed on clientX to ensure that our exit point is
                // consistently within polygon bounds
                { x: dt.clientX + cn, y: dt.clientY },
                { x: fn, y: mt.top },
                { x: er, y: mt.top },
                { x: er, y: mt.bottom },
                { x: fn, y: mt.bottom }
              ],
              side: kt
            }), window.clearTimeout(et.get()), et.set(window.setTimeout(() => {
              R.set(null);
            }, 300));
          } else {
            if (Ye(dt), dt.defaultPrevented)
              return;
            R.set(null);
          }
        }), rt(ut, "focusout", (dt) => {
          const X = dt.currentTarget;
          if (!j(X))
            return;
          gn(X);
          const mt = dt.relatedTarget;
          if (!j(mt))
            return;
          const kt = X.getAttribute("aria-controls");
          if (!kt)
            return;
          const Ft = document.getElementById(kt);
          Ft && !Ft.contains(mt) && K.set(!1);
        }), rt(ut, "focusin", (dt) => {
          Gt(dt);
        }));
        return {
          destroy() {
            Bt(), $t();
          }
        };
      }
    }), qs = Pt(e("subarrow"), {
      stores: Qt,
      returned: (ut) => ({
        "data-arrow": !0,
        style: Ne({
          position: "absolute",
          width: `var(--arrow-size, ${ut}px)`,
          height: `var(--arrow-size, ${ut}px)`
        })
      })
    });
    return Kt([g], ([ut]) => {
      ut || (ot.set(null), K.set(!1));
    }), Kt([R], ([ut]) => {
      !Ie || ut || window.clearTimeout(et.get());
    }), Kt([K], ([ut]) => {
      if (Ie && (ut && C.get() && xe(1).then(() => {
        const Bt = document.getElementById(st.menu.get());
        if (!Bt)
          return;
        const $t = Je(Bt);
        $t.length && Ut($t[0]);
      }), !ut)) {
        const Bt = H.get(), $t = document.getElementById(st.trigger.get());
        if (Bt && xe(1).then(() => {
          const dt = document.getElementById(st.menu.get());
          dt && dt.contains(Bt) && gn(Bt);
        }), !$t || document.activeElement === $t)
          return;
        gn($t);
      }
    }), {
      ids: st,
      elements: {
        subTrigger: Us,
        subMenu: Vs,
        subArrow: qs
      },
      states: {
        subOpen: K
      },
      options: J
    };
  };
  Xi(() => {
    const T = document.getElementById(A.trigger.get());
    j(T) && g.get() && y.set(T);
    const F = [], N = () => C.set(!1), K = () => {
      C.set(!0), F.push(qt(zt(document, "pointerdown", N, { capture: !0, once: !0 }), zt(document, "pointermove", N, { capture: !0, once: !0 })));
    }, J = (Ct) => {
      if (Ct.key === ht.ESCAPE && s.get()) {
        g.set(!1);
        return;
      }
    };
    return F.push(zt(document, "keydown", K, { capture: !0 })), F.push(zt(document, "keydown", J)), () => {
      F.forEach((Ct) => Ct());
    };
  }), Kt([g, H], ([T, F]) => {
    !T && F && gn(F);
  }), Kt([g], ([T]) => {
    if (Ie && !T) {
      const F = y.get();
      if (!F)
        return;
      const N = d.get();
      !T && F && ti({ prop: N, defaultEl: F });
    }
  }), Kt([g, r], ([T, F]) => {
    if (!Ie)
      return;
    const N = [];
    return T && F && N.push(gs()), xe(1).then(() => {
      const K = document.getElementById(A.menu.get());
      if (K && T && C.get()) {
        if (v.get()) {
          Ut(K);
          return;
        }
        const J = Je(K);
        if (!J.length)
          return;
        Ut(J[0]);
      }
    }), () => {
      N.forEach((K) => K());
    };
  }), Kt(g, (T) => {
    if (!Ie)
      return;
    const F = () => C.set(!1), N = (K) => {
      if (C.set(!0), K.key === ht.ESCAPE && T && s.get()) {
        g.set(!1);
        return;
      }
    };
    return qt(zt(document, "pointerdown", F, { capture: !0, once: !0 }), zt(document, "pointermove", F, { capture: !0, once: !0 }), zt(document, "keydown", N, { capture: !0 }));
  });
  function $(T) {
    g.update((F) => {
      const N = !F;
      return N && (b.set(Dl(T)), w.set(Fl(T)), y.set(T)), N;
    });
  }
  function Gt(T) {
    const F = T.currentTarget;
    if (!j(F))
      return;
    const N = H.get();
    N && gn(N), vl(F), H.set(F);
  }
  function Ee(T) {
    const F = T.currentTarget;
    j(F) && gn(F);
  }
  function Wt(T) {
    Xe(T) && T.preventDefault();
  }
  function Se(T) {
    if (Xe(T))
      return;
    const F = T.target;
    if (!j(F))
      return;
    const N = Si(F);
    N && Ut(N);
  }
  function Ye(T) {
    Xe(T) && T.preventDefault();
  }
  function Vt(T) {
    if (!Ln(T))
      return;
    const F = T.target, N = T.currentTarget;
    if (!j(N) || !j(F))
      return;
    const K = I.get(), J = K !== T.clientX;
    if (N.contains(F) && J) {
      const Ct = T.clientX > K ? "right" : "left";
      B.set(Ct), I.set(T.clientX);
    }
  }
  function Re(T, F = null) {
    if (!Ln(T) || (Wt(T), T.defaultPrevented))
      return;
    if (F) {
      Ut(F);
      return;
    }
    const N = T.currentTarget;
    j(N) && Ut(N);
  }
  function Ge(T) {
    Ln(T) && Se(T);
  }
  function Jt(T) {
    if (Z.get().length > 0 && T.key === ht.SPACE) {
      T.preventDefault();
      return;
    }
    if (hr.includes(T.key)) {
      T.preventDefault();
      const K = T.currentTarget;
      if (!j(K))
        return;
      K.click();
    }
  }
  function un(T) {
    return T === "indeterminate";
  }
  function Kr(T) {
    return un(T) ? "indeterminate" : T ? "checked" : "unchecked";
  }
  function Xe(T) {
    return G.get()(T);
  }
  function Si(T) {
    const F = T.closest('[role="menu"]');
    return j(F) ? F : null;
  }
  return {
    elements: {
      trigger: E,
      menu: _,
      overlay: W,
      item: O,
      group: U,
      groupLabel: nt,
      arrow: L,
      separator: M
    },
    builders: {
      createCheckboxItem: vt,
      createSubmenu: jt,
      createMenuRadioGroup: wt
    },
    states: {
      open: g
    },
    helpers: {
      handleTypeaheadSearch: S
    },
    ids: A,
    options: t.rootOptions
  };
}
function vo(t, e, n) {
  if (t.shiftKey) {
    const r = n.get();
    r && (t.preventDefault(), xe(1).then(() => r.focus()), n.set(null));
  } else {
    const r = e.get();
    r && (t.preventDefault(), xe(1).then(() => r.focus()), e.set(null));
  }
}
function Je(t) {
  return Array.from(t.querySelectorAll(`[data-melt-menu-id="${t.id}"]`)).filter((e) => j(e));
}
function ar(t) {
  !t || !Te(t) || (t.setAttribute("data-disabled", ""), t.setAttribute("aria-disabled", "true"));
}
function Hr(t) {
  if (!Ie)
    return;
  const e = t.get();
  e && (window.clearTimeout(e), t.set(null));
}
function Ln(t) {
  return t.pointerType === "mouse";
}
function Bn(t, e) {
  if (!t)
    return;
  const n = t.closest(`${e()}, ${e("submenu")}`);
  j(n) && t.setAttribute("data-melt-menu-id", n.id);
}
function go(t, e) {
  t.preventDefault();
  const n = document.activeElement, r = t.currentTarget;
  if (!j(n) || !j(r))
    return;
  const i = Je(r);
  if (!i.length)
    return;
  const o = i.filter((l) => !(l.hasAttribute("data-disabled") || l.getAttribute("disabled") === "true")), s = o.indexOf(n);
  let a;
  switch (t.key) {
    case ht.ARROW_DOWN:
      e ? a = s < o.length - 1 ? s + 1 : 0 : a = s < o.length - 1 ? s + 1 : s;
      break;
    case ht.ARROW_UP:
      e ? a = s > 0 ? s - 1 : o.length - 1 : a = s < 0 ? o.length - 1 : s > 0 ? s - 1 : 0;
      break;
    case ht.HOME:
      a = 0;
      break;
    case ht.END:
      a = o.length - 1;
      break;
    default:
      return;
  }
  Ut(o[a]);
}
function sc(t, e) {
  if (!e)
    return !1;
  const n = { x: t.clientX, y: t.clientY };
  return ac(n, e);
}
function ac(t, e) {
  const { x: n, y: r } = t;
  let i = !1;
  for (let o = 0, s = e.length - 1; o < e.length; s = o++) {
    const a = e[o].x, l = e[o].y, u = e[s].x, c = e[s].y;
    l > r != c > r && n < (u - a) * (r - l) / (c - l) + a && (i = !i);
  }
  return i;
}
function lc(t) {
  const e = document.activeElement;
  if (!j(e))
    return !1;
  const n = e.closest(`[data-id="${t}"]`);
  return j(n);
}
function uc(t) {
  return t ? "open" : "closed";
}
const cc = {
  isDateDisabled: void 0,
  isDateUnavailable: void 0,
  value: void 0,
  preventDeselect: !1,
  numberOfMonths: 1,
  pagedNavigation: !1,
  weekStartsOn: 0,
  fixedWeeks: !1,
  calendarLabel: "Event Date",
  locale: "en",
  minValue: void 0,
  maxValue: void 0,
  disabled: !1,
  readonly: !1,
  weekdayFormat: "narrow"
};
({
  ...Fr(cc, "isDateDisabled", "isDateUnavailable", "value", "locale", "disabled", "readonly", "minValue", "maxValue", "weekdayFormat")
});
const { name: Ze } = us("dialog"), fc = {
  preventScroll: !0,
  closeOnEscape: !0,
  closeOnOutsideClick: !0,
  role: "dialog",
  defaultOpen: !1,
  portal: void 0,
  forceVisible: !1,
  openFocus: void 0,
  closeFocus: void 0,
  onOutsideClick: void 0
}, dc = ["content", "title", "description"];
function vc(t) {
  const e = { ...fc, ...t }, n = nn(Fr(e, "ids")), { preventScroll: r, closeOnEscape: i, closeOnOutsideClick: o, role: s, portal: a, forceVisible: l, openFocus: u, closeFocus: c, onOutsideClick: f } = n, d = Dt.writable(null), v = nn({
    ...Qr(dc),
    ...e.ids
  }), m = e.open ?? St(e.defaultOpen), h = jn(m, e == null ? void 0 : e.onOpenChange), g = ge([h, l], ([S, A]) => S || A);
  let y = pt;
  function b(S) {
    const A = S.currentTarget, p = S.currentTarget;
    !j(A) || !j(p) || (h.set(!0), d.set(p));
  }
  function w() {
    h.set(!1), ti({
      prop: c.get(),
      defaultEl: d.get()
    });
  }
  const C = Pt(Ze("trigger"), {
    stores: [h],
    returned: ([S]) => ({
      "aria-haspopup": "dialog",
      "aria-expanded": S,
      type: "button"
    }),
    action: (S) => ({
      destroy: qt(rt(S, "click", (p) => {
        b(p);
      }), rt(S, "keydown", (p) => {
        p.key !== ht.ENTER && p.key !== ht.SPACE || (p.preventDefault(), b(p));
      }))
    })
  }), I = Pt(Ze("overlay"), {
    stores: [g, h],
    returned: ([S, A]) => ({
      hidden: S ? void 0 : !0,
      tabindex: -1,
      style: Ne({
        display: S ? void 0 : "none"
      }),
      "aria-hidden": !0,
      "data-state": A ? "open" : "closed"
    }),
    action: (S) => {
      let A = pt;
      if (i.get()) {
        const p = br(S, {
          handler: () => {
            w();
          }
        });
        p && p.destroy && (A = p.destroy);
      }
      return {
        destroy() {
          A();
        }
      };
    }
  }), R = Pt(Ze("content"), {
    stores: [g, v.content, v.description, v.title, h],
    returned: ([S, A, p, _, E]) => ({
      id: A,
      role: s.get(),
      "aria-describedby": p,
      "aria-labelledby": _,
      "aria-modal": S ? "true" : void 0,
      "data-state": E ? "open" : "closed",
      tabindex: -1,
      hidden: S ? void 0 : !0,
      style: Ne({
        display: S ? void 0 : "none"
      })
    }),
    action: (S) => {
      let A = pt, p = pt;
      const _ = qt(Kt([h, o, i], ([E, L, W]) => {
        if (!E)
          return;
        const O = Ss({
          immediate: !1,
          escapeDeactivates: W,
          clickOutsideDeactivates: L,
          allowOutsideClick: !0,
          returnFocusOnDeactivate: !1,
          fallbackFocus: S
        });
        A = O.activate, p = O.deactivate;
        const U = O.useFocusTrap(S);
        return U && U.destroy ? U.destroy : O.deactivate;
      }), Kt([o, h], ([E, L]) => Rs(S, {
        open: L,
        closeOnInteractOutside: E,
        onClose() {
          w();
        },
        shouldCloseOnInteractOutside(W) {
          var O;
          return (O = f.get()) == null || O(W), !W.defaultPrevented;
        }
      }).destroy), Kt([i], ([E]) => E ? br(S, { handler: w }).destroy : pt), Kt([g], ([E]) => {
        tn().then(() => {
          E ? A() : p();
        });
      }));
      return {
        destroy: () => {
          y(), _();
        }
      };
    }
  }), B = Pt(Ze("portalled"), {
    stores: a,
    returned: (S) => ({
      "data-portal": ls(S)
    }),
    action: (S) => {
      const A = Kt([a], ([p]) => {
        if (p === null)
          return pt;
        const _ = $r(S, p);
        return _ === null ? pt : Ai(S, _).destroy;
      });
      return {
        destroy() {
          A();
        }
      };
    }
  }), H = Pt(Ze("title"), {
    stores: [v.title],
    returned: ([S]) => ({
      id: S
    })
  }), G = Pt(Ze("description"), {
    stores: [v.description],
    returned: ([S]) => ({
      id: S
    })
  }), Z = Pt(Ze("close"), {
    returned: () => ({
      type: "button"
    }),
    action: (S) => ({
      destroy: qt(rt(S, "click", () => {
        w();
      }), rt(S, "keydown", (p) => {
        p.key !== ht.SPACE && p.key !== ht.ENTER || (p.preventDefault(), w());
      }))
    })
  });
  return Kt([h, r], ([S, A]) => {
    if (Ie) {
      if (A && S && (y = gs()), S) {
        const p = document.getElementById(v.content.get());
        ti({ prop: u.get(), defaultEl: p });
      }
      return () => {
        l.get() || y();
      };
    }
  }), {
    ids: v,
    elements: {
      content: R,
      trigger: C,
      title: H,
      description: G,
      overlay: I,
      close: Z,
      portalled: B
    },
    states: {
      open: h
    },
    options: n
  };
}
const gc = {
  arrowSize: 8,
  positioning: {
    placement: "bottom"
  },
  preventScroll: !0,
  closeOnEscape: !0,
  closeOnOutsideClick: !0,
  portal: void 0,
  loop: !1,
  dir: "ltr",
  defaultOpen: !1,
  forceVisible: !1,
  typeahead: !0,
  closeFocus: void 0,
  disableFocusFirstItem: !1,
  closeOnItemClick: !0,
  onOutsideClick: void 0
};
function mc(t) {
  const e = { ...gc, ...t }, n = nn(Fr(e, "ids")), r = e.open ?? St(e.defaultOpen), i = jn(r, e == null ? void 0 : e.onOpenChange), o = Dt(St(null)), s = Dt(St(null)), a = Dt(St(null)), { elements: l, builders: u, ids: c, states: f, options: d } = oc({
    rootOptions: n,
    rootOpen: i,
    rootActiveTrigger: Dt(o),
    nextFocusable: Dt(s),
    prevFocusable: Dt(a),
    selector: "dropdown-menu",
    removeScroll: !0,
    ids: e.ids
  });
  return {
    ids: c,
    elements: l,
    states: f,
    builders: u,
    options: d
  };
}
const hc = {
  orientation: "horizontal",
  decorative: !1
}, bc = (t) => {
  const e = { ...hc, ...t }, n = nn(e), { orientation: r, decorative: i } = n;
  return {
    elements: {
      root: Pt("separator", {
        stores: [r, i],
        returned: ([s, a]) => ({
          role: a ? "none" : "separator",
          "aria-orientation": s === "vertical" ? s : void 0,
          "aria-hidden": a,
          "data-orientation": s
        })
      })
    },
    options: n
  };
};
function Fs(t, e) {
  const n = {};
  return e.forEach((r) => {
    n[r] = {
      [`data-${t}-${r}`]: ""
    };
  }), (r) => n[r];
}
function pc(t) {
  return t ? { "aria-disabled": "true", "data-disabled": "" } : { "aria-disabled": void 0, "data-disabled": void 0 };
}
function Lr() {
  const t = hl();
  return (e) => {
    const { originalEvent: n } = e.detail, { cancelable: r } = e, i = n.type;
    t(i, { originalEvent: n, currentTarget: n.currentTarget }, { cancelable: r }) || e.preventDefault();
  };
}
function Ns(t) {
  const e = {};
  for (const n in t) {
    const r = t[n];
    r !== void 0 && (e[n] = r);
  }
  return e;
}
function Is(t) {
  return function(e, n) {
    if (n === void 0)
      return;
    const r = t[e];
    r && r.set(n);
  };
}
function yc(t) {
  return (e = {}) => _c(t, e);
}
function _c(t, e) {
  const r = { ...{
    side: "bottom",
    align: "center",
    sideOffset: 0,
    alignOffset: 0,
    sameWidth: !1,
    avoidCollisions: !0,
    collisionPadding: 8,
    fitViewport: !1,
    strategy: "absolute",
    overlap: !1
  }, ...e };
  t.update((i) => ({
    ...i,
    placement: wc(r.side, r.align),
    offset: {
      ...i.offset,
      mainAxis: r.sideOffset,
      crossAxis: r.alignOffset
    },
    gutter: 0,
    sameWidth: r.sameWidth,
    flip: r.avoidCollisions,
    overflowPadding: r.collisionPadding,
    boundary: r.collisionBoundary,
    fitViewport: r.fitViewport,
    strategy: r.strategy,
    overlap: r.overlap
  }));
}
function wc(t, e) {
  return e === "center" ? t : `${t}-${e}`;
}
function Ms() {
  return {
    NAME: "menu",
    SUB_NAME: "menu-submenu",
    RADIO_GROUP_NAME: "menu-radiogroup",
    CHECKBOX_ITEM_NAME: "menu-checkboxitem",
    RADIO_ITEM_NAME: "menu-radioitem",
    GROUP_NAME: "menu-group",
    PARTS: [
      "arrow",
      "checkbox-indicator",
      "checkbox-item",
      "content",
      "group",
      "item",
      "label",
      "radio-group",
      "radio-item",
      "radio-indicator",
      "separator",
      "sub-content",
      "sub-trigger",
      "trigger"
    ]
  };
}
function Br() {
  const { NAME: t } = Ms();
  return Go(t);
}
function Ec(t) {
  const { NAME: e, PARTS: n } = Ms(), r = Fs("menu", n), i = {
    ...mc({ ...Ns(t), forceVisible: !0 }),
    getAttrs: r
  };
  return Xo(e, i), {
    ...i,
    updateOption: Is(i.options)
  };
}
function Tc(t) {
  const n = { ...{
    side: "bottom",
    align: "center"
  }, ...t }, { options: { positioning: r } } = Br();
  yc(r)(n);
}
function xc(t, e) {
  const n = Yt(e, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]), r = Yt(n, ["href", "asChild", "disabled", "el"]);
  Ot(e, !1);
  const i = _e(), o = () => se(d, "$item", i), s = Ae(), a = Ae();
  let l = P(e, "href", 24, () => {
  }), u = P(e, "asChild", 8, !1), c = P(e, "disabled", 8, !1), f = P(e, "el", 28, () => {
  });
  const { elements: { item: d }, getAttrs: v } = Br(), m = Lr();
  Q(() => o(), () => {
    Et(s, o());
  }), Q(
    () => it(c()),
    () => {
      Et(a, {
        ...v("item"),
        ...pc(c())
      });
    }
  ), Q(() => (x(s), x(a)), () => {
    Object.assign(x(s), x(a));
  }), pe(), ye();
  var h = Y(), g = V(h);
  yt(
    g,
    u,
    (y) => {
      var b = Y(), w = V(b);
      xt(
        w,
        e,
        "default",
        {
          get builder() {
            return x(s);
          }
        }
      ), k(y, b);
    },
    (y) => {
      var b = Y(), w = V(b);
      is(w, () => l() ? "a" : "div", !1, (C, I) => {
        Lt(C, (G) => f(G), () => f());
        let R;
        _t(() => R = Mt(
          C,
          R,
          {
            href: l(),
            ...x(s),
            ...r
          },
          void 0,
          C.namespaceURI !== li,
          C.nodeName.includes("-")
        )), It(C, (G) => x(s).action(G)), q("m-click", C, m), q("m-focusin", C, m), q("m-focusout", C, m), q("m-keydown", C, m), q("m-pointerdown", C, m), q("m-pointerleave", C, m), q("m-pointermove", C, m), q("pointerenter", C, function(G) {
          tt.call(this, e, G);
        });
        var B = Y(), H = V(B);
        xt(
          H,
          e,
          "default",
          {
            get builder() {
              return x(s);
            }
          }
        ), k(I, B);
      }), k(y, b);
    }
  ), k(t, h), At();
}
function Ls() {
  return {
    NAME: "dialog",
    PARTS: [
      "close",
      "content",
      "description",
      "overlay",
      "portal",
      "title",
      "trigger"
    ]
  };
}
function Cc(t) {
  const { NAME: e, PARTS: n } = Ls(), r = Fs(e, n), i = {
    ...vc({ ...Ns(t), role: "dialog", forceVisible: !0 }),
    getAttrs: r
  };
  return Xo(e, i), {
    ...i,
    updateOption: Is(i.options)
  };
}
function tr() {
  const { NAME: t } = Ls();
  return Go(t);
}
function Oc(t, e) {
  Ot(e, !1);
  const n = _e(), r = () => se(g, "$idValues", n);
  let i = P(e, "preventScroll", 24, () => {
  }), o = P(e, "closeOnEscape", 24, () => {
  }), s = P(e, "closeOnOutsideClick", 24, () => {
  }), a = P(e, "portal", 24, () => {
  }), l = P(e, "open", 28, () => {
  }), u = P(e, "onOpenChange", 24, () => {
  }), c = P(e, "openFocus", 24, () => {
  }), f = P(e, "closeFocus", 24, () => {
  }), d = P(e, "onOutsideClick", 24, () => {
  });
  const {
    states: { open: v },
    updateOption: m,
    ids: h
  } = Cc({
    closeOnEscape: o(),
    preventScroll: i(),
    closeOnOutsideClick: s(),
    portal: a(),
    forceVisible: !0,
    defaultOpen: l(),
    openFocus: c(),
    closeFocus: f(),
    onOutsideClick: d(),
    onOpenChange: ({ next: w }) => {
      var C;
      return l() !== w && ((C = u()) == null || C(w), l(w)), w;
    }
  }), g = ge([h.content, h.description, h.title], ([w, C, I]) => ({
    content: w,
    description: C,
    title: I
  }));
  Q(() => it(l()), () => {
    l() !== void 0 && v.set(l());
  }), Q(() => it(i()), () => {
    m("preventScroll", i());
  }), Q(() => it(o()), () => {
    m("closeOnEscape", o());
  }), Q(
    () => it(s()),
    () => {
      m("closeOnOutsideClick", s());
    }
  ), Q(() => it(a()), () => {
    m("portal", a());
  }), Q(() => it(c()), () => {
    m("openFocus", c());
  }), Q(() => it(f()), () => {
    m("closeFocus", f());
  }), Q(() => it(d()), () => {
    m("onOutsideClick", d());
  }), pe(), ye();
  var y = Y(), b = V(y);
  xt(
    b,
    e,
    "default",
    {
      get ids() {
        return r();
      }
    }
  ), k(t, y), At();
}
function Ac(t, e) {
  const n = Yt(e, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]), r = Yt(n, ["level", "asChild", "id", "el"]);
  Ot(e, !1);
  const i = _e(), o = () => se(f, "$title", i), s = Ae();
  let a = P(e, "level", 8, "h2"), l = P(e, "asChild", 8, !1), u = P(e, "id", 24, () => {
  }), c = P(e, "el", 28, () => {
  });
  const { elements: { title: f }, ids: d, getAttrs: v } = tr(), m = v("title");
  Q(() => it(u()), () => {
    u() && d.title.set(u());
  }), Q(() => o(), () => {
    Et(s, o());
  }), Q(() => x(s), () => {
    Object.assign(x(s), m);
  }), pe(), ye();
  var h = Y(), g = V(h);
  yt(
    g,
    l,
    (y) => {
      var b = Y(), w = V(b);
      xt(
        w,
        e,
        "default",
        {
          get builder() {
            return x(s);
          }
        }
      ), k(y, b);
    },
    (y) => {
      var b = Y(), w = V(b);
      is(w, a, !1, (C, I) => {
        Lt(C, (G) => c(G), () => c());
        let R;
        _t(() => R = Mt(C, R, { ...x(s), ...r }, void 0, C.namespaceURI !== li, C.nodeName.includes("-"))), It(C, (G) => x(s).action(G));
        var B = Y(), H = V(B);
        xt(
          H,
          e,
          "default",
          {
            get builder() {
              return x(s);
            }
          }
        ), k(I, B);
      }), k(y, b);
    }
  ), k(t, h), At();
}
var kc = /* @__PURE__ */ lt("<button><!></button>");
function Bs(t, e) {
  const n = Yt(e, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]), r = Yt(n, ["asChild", "el"]);
  Ot(e, !1);
  const i = _e(), o = () => se(u, "$close", i), s = Ae();
  let a = P(e, "asChild", 8, !1), l = P(e, "el", 28, () => {
  });
  const { elements: { close: u }, getAttrs: c } = tr(), f = Lr(), d = c("close");
  Q(() => o(), () => {
    Et(s, o());
  }), Q(() => x(s), () => {
    Object.assign(x(s), d);
  }), pe(), ye();
  var v = Y(), m = V(v);
  yt(
    m,
    a,
    (h) => {
      var g = Y(), y = V(g);
      xt(
        y,
        e,
        "default",
        {
          get builder() {
            return x(s);
          }
        }
      ), k(h, g);
    },
    (h) => {
      var g = kc();
      Lt(g, (w) => l(w), () => l());
      let y;
      var b = ct(g);
      xt(
        b,
        e,
        "default",
        {
          get builder() {
            return x(s);
          }
        }
      ), _t(() => y = Mt(g, y, {
        ...x(s),
        type: "button",
        ...r
      })), It(g, (w) => x(s).action(w)), z(() => q("m-click", g, f)), z(() => q("m-keydown", g, f)), k(h, g);
    }
  ), k(t, v), At();
}
var Pc = /* @__PURE__ */ lt("<div><!></div>");
function Sc(t, e) {
  const n = Yt(e, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]), r = Yt(n, ["asChild", "el"]);
  Ot(e, !1);
  const i = _e(), o = () => se(u, "$portalled", i), s = Ae();
  let a = P(e, "asChild", 8, !1), l = P(e, "el", 28, () => {
  });
  const { elements: { portalled: u }, getAttrs: c } = tr(), f = c("portal");
  Q(() => o(), () => {
    Et(s, o());
  }), Q(() => x(s), () => {
    Object.assign(x(s), f);
  }), pe(), ye();
  var d = Y(), v = V(d);
  yt(
    v,
    a,
    (m) => {
      var h = Y(), g = V(h);
      xt(
        g,
        e,
        "default",
        {
          get builder() {
            return x(s);
          }
        }
      ), k(m, h);
    },
    (m) => {
      var h = Pc();
      Lt(h, (b) => l(b), () => l());
      let g;
      var y = ct(h);
      xt(
        y,
        e,
        "default",
        {
          get builder() {
            return x(s);
          }
        }
      ), _t(() => g = Mt(h, g, { ...x(s), ...r })), It(h, (b) => x(s).action(b)), k(m, h);
    }
  ), k(t, d), At();
}
var Rc = /* @__PURE__ */ lt("<div><!></div>"), Dc = /* @__PURE__ */ lt("<div><!></div>"), Fc = /* @__PURE__ */ lt("<div><!></div>"), Nc = /* @__PURE__ */ lt("<div><!></div>"), Ic = /* @__PURE__ */ lt("<div><!></div>");
function Mc(t, e) {
  const n = Yt(e, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]), r = Yt(n, [
    "transition",
    "transitionConfig",
    "inTransition",
    "inTransitionConfig",
    "outTransition",
    "outTransitionConfig",
    "asChild",
    "id",
    "el"
  ]);
  Ot(e, !1);
  const i = _e(), o = () => se(y, "$content", i), s = () => se(b, "$open", i), a = Ae();
  let l = P(e, "transition", 24, () => {
  }), u = P(e, "transitionConfig", 24, () => {
  }), c = P(e, "inTransition", 24, () => {
  }), f = P(e, "inTransitionConfig", 24, () => {
  }), d = P(e, "outTransition", 24, () => {
  }), v = P(e, "outTransitionConfig", 24, () => {
  }), m = P(e, "asChild", 8, !1), h = P(e, "id", 24, () => {
  }), g = P(e, "el", 28, () => {
  });
  const {
    elements: { content: y },
    states: { open: b },
    ids: w,
    getAttrs: C
  } = tr(), I = C("content");
  Q(() => it(h()), () => {
    h() && w.content.set(h());
  }), Q(() => o(), () => {
    Et(a, o());
  }), Q(() => x(a), () => {
    Object.assign(x(a), I);
  }), pe(), ye();
  var R = Y(), B = V(R);
  yt(
    B,
    () => m() && s(),
    (H) => {
      var G = Y(), Z = V(G);
      xt(
        Z,
        e,
        "default",
        {
          get builder() {
            return x(a);
          }
        }
      ), k(H, G);
    },
    (H) => {
      var G = Y(), Z = V(G);
      yt(
        Z,
        () => l() && s(),
        (S) => {
          var A = Rc();
          Lt(A, (E) => g(E), () => g());
          let p;
          var _ = ct(A);
          xt(
            _,
            e,
            "default",
            {
              get builder() {
                return x(a);
              }
            }
          ), _t(() => p = Mt(A, p, { ...x(a), ...r })), Xt(3, A, l, u), It(A, (E) => x(a).action(E)), z(() => q("pointerdown", A, function(E) {
            tt.call(this, e, E);
          })), z(() => q("pointermove", A, function(E) {
            tt.call(this, e, E);
          })), z(() => q("pointerup", A, function(E) {
            tt.call(this, e, E);
          })), z(() => q("touchcancel", A, function(E) {
            tt.call(this, e, E);
          })), z(() => q("touchend", A, function(E) {
            tt.call(this, e, E);
          })), z(() => q(
            "touchmove",
            A,
            function(E) {
              tt.call(this, e, E);
            },
            void 0,
            !1
          )), z(() => q(
            "touchstart",
            A,
            function(E) {
              tt.call(this, e, E);
            },
            void 0,
            !1
          )), k(S, A);
        },
        (S) => {
          var A = Y(), p = V(A);
          yt(
            p,
            () => c() && d() && s(),
            (_) => {
              var E = Dc();
              Lt(E, (O) => g(O), () => g());
              let L;
              var W = ct(E);
              xt(
                W,
                e,
                "default",
                {
                  get builder() {
                    return x(a);
                  }
                }
              ), _t(() => L = Mt(E, L, { ...x(a), ...r })), Xt(1, E, c, f), Xt(2, E, d, v), It(E, (O) => x(a).action(O)), z(() => q("pointerdown", E, function(O) {
                tt.call(this, e, O);
              })), z(() => q("pointermove", E, function(O) {
                tt.call(this, e, O);
              })), z(() => q("pointerup", E, function(O) {
                tt.call(this, e, O);
              })), z(() => q("touchcancel", E, function(O) {
                tt.call(this, e, O);
              })), z(() => q("touchend", E, function(O) {
                tt.call(this, e, O);
              })), z(() => q(
                "touchmove",
                E,
                function(O) {
                  tt.call(this, e, O);
                },
                void 0,
                !1
              )), z(() => q(
                "touchstart",
                E,
                function(O) {
                  tt.call(this, e, O);
                },
                void 0,
                !1
              )), k(_, E);
            },
            (_) => {
              var E = Y(), L = V(E);
              yt(
                L,
                () => c() && s(),
                (W) => {
                  var O = Fc();
                  Lt(O, (D) => g(D), () => g());
                  let U;
                  var nt = ct(O);
                  xt(
                    nt,
                    e,
                    "default",
                    {
                      get builder() {
                        return x(a);
                      }
                    }
                  ), _t(() => U = Mt(O, U, { ...x(a), ...r })), Xt(1, O, c, f), It(O, (D) => x(a).action(D)), z(() => q("pointerdown", O, function(D) {
                    tt.call(this, e, D);
                  })), z(() => q("pointermove", O, function(D) {
                    tt.call(this, e, D);
                  })), z(() => q("pointerup", O, function(D) {
                    tt.call(this, e, D);
                  })), z(() => q("touchcancel", O, function(D) {
                    tt.call(this, e, D);
                  })), z(() => q("touchend", O, function(D) {
                    tt.call(this, e, D);
                  })), z(() => q(
                    "touchmove",
                    O,
                    function(D) {
                      tt.call(this, e, D);
                    },
                    void 0,
                    !1
                  )), z(() => q(
                    "touchstart",
                    O,
                    function(D) {
                      tt.call(this, e, D);
                    },
                    void 0,
                    !1
                  )), k(W, O);
                },
                (W) => {
                  var O = Y(), U = V(O);
                  yt(
                    U,
                    () => d() && s(),
                    (nt) => {
                      var D = Nc();
                      Lt(D, (M) => g(M), () => g());
                      let vt;
                      var wt = ct(D);
                      xt(
                        wt,
                        e,
                        "default",
                        {
                          get builder() {
                            return x(a);
                          }
                        }
                      ), _t(() => vt = Mt(D, vt, { ...x(a), ...r })), Xt(2, D, d, v), It(D, (M) => x(a).action(M)), z(() => q("pointerdown", D, function(M) {
                        tt.call(this, e, M);
                      })), z(() => q("pointermove", D, function(M) {
                        tt.call(this, e, M);
                      })), z(() => q("pointerup", D, function(M) {
                        tt.call(this, e, M);
                      })), z(() => q("touchcancel", D, function(M) {
                        tt.call(this, e, M);
                      })), z(() => q("touchend", D, function(M) {
                        tt.call(this, e, M);
                      })), z(() => q(
                        "touchmove",
                        D,
                        function(M) {
                          tt.call(this, e, M);
                        },
                        void 0,
                        !1
                      )), z(() => q(
                        "touchstart",
                        D,
                        function(M) {
                          tt.call(this, e, M);
                        },
                        void 0,
                        !1
                      )), k(nt, D);
                    },
                    (nt) => {
                      var D = Y(), vt = V(D);
                      yt(
                        vt,
                        s,
                        (wt) => {
                          var M = Ic();
                          Lt(M, ($) => g($), () => g());
                          let Rt;
                          var jt = ct(M);
                          xt(
                            jt,
                            e,
                            "default",
                            {
                              get builder() {
                                return x(a);
                              }
                            }
                          ), _t(() => Rt = Mt(M, Rt, { ...x(a), ...r })), It(M, ($) => x(a).action($)), z(() => q("pointerdown", M, function($) {
                            tt.call(this, e, $);
                          })), z(() => q("pointermove", M, function($) {
                            tt.call(this, e, $);
                          })), z(() => q("pointerup", M, function($) {
                            tt.call(this, e, $);
                          })), z(() => q("touchcancel", M, function($) {
                            tt.call(this, e, $);
                          })), z(() => q("touchend", M, function($) {
                            tt.call(this, e, $);
                          })), z(() => q(
                            "touchmove",
                            M,
                            function($) {
                              tt.call(this, e, $);
                            },
                            void 0,
                            !1
                          )), z(() => q(
                            "touchstart",
                            M,
                            function($) {
                              tt.call(this, e, $);
                            },
                            void 0,
                            !1
                          )), k(wt, M);
                        },
                        null,
                        !0
                      ), k(nt, D);
                    },
                    !0
                  ), k(W, O);
                },
                !0
              ), k(_, E);
            },
            !0
          ), k(S, A);
        },
        !0
      ), k(H, G);
    }
  ), k(t, R), At();
}
var Lc = /* @__PURE__ */ lt("<div></div>"), Bc = /* @__PURE__ */ lt("<div></div>"), Wc = /* @__PURE__ */ lt("<div></div>"), Kc = /* @__PURE__ */ lt("<div></div>"), jc = /* @__PURE__ */ lt("<div></div>");
function Vc(t, e) {
  const n = Yt(e, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]), r = Yt(n, [
    "transition",
    "transitionConfig",
    "inTransition",
    "inTransitionConfig",
    "outTransition",
    "outTransitionConfig",
    "asChild",
    "el"
  ]);
  Ot(e, !1);
  const i = _e(), o = () => se(g, "$overlay", i), s = () => se(y, "$open", i), a = Ae();
  let l = P(e, "transition", 24, () => {
  }), u = P(e, "transitionConfig", 24, () => {
  }), c = P(e, "inTransition", 24, () => {
  }), f = P(e, "inTransitionConfig", 24, () => {
  }), d = P(e, "outTransition", 24, () => {
  }), v = P(e, "outTransitionConfig", 24, () => {
  }), m = P(e, "asChild", 8, !1), h = P(e, "el", 28, () => {
  });
  const {
    elements: { overlay: g },
    states: { open: y },
    getAttrs: b
  } = tr(), w = b("overlay");
  Q(() => o(), () => {
    Et(a, o());
  }), Q(() => x(a), () => {
    Object.assign(x(a), w);
  }), pe(), ye();
  var C = Y(), I = V(C);
  yt(
    I,
    () => m() && s(),
    (R) => {
      var B = Y(), H = V(B);
      xt(
        H,
        e,
        "default",
        {
          get builder() {
            return x(a);
          }
        }
      ), k(R, B);
    },
    (R) => {
      var B = Y(), H = V(B);
      yt(
        H,
        () => l() && s(),
        (G) => {
          var Z = Lc();
          Lt(Z, (A) => h(A), () => h());
          let S;
          _t(() => S = Mt(Z, S, { ...x(a), ...r })), z(() => q("mouseup", Z, function(A) {
            tt.call(this, e, A);
          })), Xt(3, Z, l, u), It(Z, (A) => x(a).action(A)), k(G, Z);
        },
        (G) => {
          var Z = Y(), S = V(Z);
          yt(
            S,
            () => c() && d() && s(),
            (A) => {
              var p = Bc();
              Lt(p, (E) => h(E), () => h());
              let _;
              _t(() => _ = Mt(p, _, { ...x(a), ...r })), Xt(1, p, c, f), Xt(2, p, d, v), It(p, (E) => x(a).action(E)), z(() => q("mouseup", p, function(E) {
                tt.call(this, e, E);
              })), k(A, p);
            },
            (A) => {
              var p = Y(), _ = V(p);
              yt(
                _,
                () => c() && s(),
                (E) => {
                  var L = Wc();
                  Lt(L, (O) => h(O), () => h());
                  let W;
                  _t(() => W = Mt(L, W, { ...x(a), ...r })), Xt(1, L, c, f), It(L, (O) => x(a).action(O)), z(() => q("mouseup", L, function(O) {
                    tt.call(this, e, O);
                  })), k(E, L);
                },
                (E) => {
                  var L = Y(), W = V(L);
                  yt(
                    W,
                    () => d() && s(),
                    (O) => {
                      var U = Kc();
                      Lt(U, (D) => h(D), () => h());
                      let nt;
                      _t(() => nt = Mt(U, nt, { ...x(a), ...r })), Xt(2, U, d, v), It(U, (D) => x(a).action(D)), z(() => q("mouseup", U, function(D) {
                        tt.call(this, e, D);
                      })), k(O, U);
                    },
                    (O) => {
                      var U = Y(), nt = V(U);
                      yt(
                        nt,
                        s,
                        (D) => {
                          var vt = jc();
                          Lt(vt, (M) => h(M), () => h());
                          let wt;
                          _t(() => wt = Mt(vt, wt, { ...x(a), ...r })), It(vt, (M) => x(a).action(M)), z(() => q("mouseup", vt, function(M) {
                            tt.call(this, e, M);
                          })), k(D, vt);
                        },
                        null,
                        !0
                      ), k(O, U);
                    },
                    !0
                  ), k(E, L);
                },
                !0
              ), k(A, p);
            },
            !0
          ), k(G, Z);
        },
        !0
      ), k(R, B);
    }
  ), k(t, C), At();
}
function Uc(t, e) {
  Ot(e, !1);
  const n = _e(), r = () => se(C, "$idValues", n);
  let i = P(e, "closeOnOutsideClick", 24, () => {
  }), o = P(e, "closeOnEscape", 24, () => {
  }), s = P(e, "portal", 24, () => {
  }), a = P(e, "open", 28, () => {
  }), l = P(e, "onOpenChange", 24, () => {
  }), u = P(e, "preventScroll", 24, () => {
  }), c = P(e, "loop", 24, () => {
  }), f = P(e, "dir", 24, () => {
  }), d = P(e, "typeahead", 24, () => {
  }), v = P(e, "closeFocus", 24, () => {
  }), m = P(e, "disableFocusFirstItem", 24, () => {
  }), h = P(e, "closeOnItemClick", 24, () => {
  }), g = P(e, "onOutsideClick", 24, () => {
  });
  const {
    states: { open: y },
    updateOption: b,
    ids: w
  } = Ec({
    closeOnOutsideClick: i(),
    closeOnEscape: o(),
    portal: s(),
    forceVisible: !0,
    defaultOpen: a(),
    preventScroll: u(),
    loop: c(),
    dir: f(),
    typeahead: d(),
    closeFocus: v(),
    disableFocusFirstItem: m(),
    closeOnItemClick: h(),
    onOutsideClick: g(),
    onOpenChange: ({ next: B }) => {
      var H;
      return a() !== B && ((H = l()) == null || H(B), a(B)), B;
    }
  }), C = ge([w.menu, w.trigger], ([B, H]) => ({ menu: B, trigger: H }));
  Q(() => it(a()), () => {
    a() !== void 0 && y.set(a());
  }), Q(
    () => it(i()),
    () => {
      b("closeOnOutsideClick", i());
    }
  ), Q(() => it(o()), () => {
    b("closeOnEscape", o());
  }), Q(() => it(s()), () => {
    b("portal", s());
  }), Q(() => it(u()), () => {
    b("preventScroll", u());
  }), Q(() => it(c()), () => {
    b("loop", c());
  }), Q(() => it(f()), () => {
    b("dir", f());
  }), Q(() => it(v()), () => {
    b("closeFocus", v());
  }), Q(
    () => it(m()),
    () => {
      b("disableFocusFirstItem", m());
    }
  ), Q(() => it(d()), () => {
    b("typeahead", d());
  }), Q(() => it(h()), () => {
    b("closeOnItemClick", h());
  }), Q(() => it(g()), () => {
    b("onOutsideClick", g());
  }), pe(), ye();
  var I = Y(), R = V(I);
  xt(
    R,
    e,
    "default",
    {
      get ids() {
        return r();
      }
    }
  ), k(t, I), At();
}
var qc = /* @__PURE__ */ lt("<div><!></div>"), Hc = /* @__PURE__ */ lt("<div><!></div>"), zc = /* @__PURE__ */ lt("<div><!></div>"), Yc = /* @__PURE__ */ lt("<div><!></div>"), Gc = /* @__PURE__ */ lt("<div><!></div>");
function Xc(t, e) {
  const n = Yt(e, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]), r = Yt(n, [
    "transition",
    "transitionConfig",
    "inTransition",
    "inTransitionConfig",
    "outTransition",
    "outTransitionConfig",
    "asChild",
    "id",
    "side",
    "align",
    "sideOffset",
    "alignOffset",
    "collisionPadding",
    "avoidCollisions",
    "collisionBoundary",
    "sameWidth",
    "fitViewport",
    "strategy",
    "overlap",
    "el"
  ]);
  Ot(e, !1);
  const i = _e(), o = () => se(A, "$menu", i), s = () => se(p, "$open", i), a = Ae();
  let l = P(e, "transition", 24, () => {
  }), u = P(e, "transitionConfig", 24, () => {
  }), c = P(e, "inTransition", 24, () => {
  }), f = P(e, "inTransitionConfig", 24, () => {
  }), d = P(e, "outTransition", 24, () => {
  }), v = P(e, "outTransitionConfig", 24, () => {
  }), m = P(e, "asChild", 8, !1), h = P(e, "id", 24, () => {
  }), g = P(e, "side", 8, "bottom"), y = P(e, "align", 8, "center"), b = P(e, "sideOffset", 8, 0), w = P(e, "alignOffset", 8, 0), C = P(e, "collisionPadding", 8, 8), I = P(e, "avoidCollisions", 8, !0), R = P(e, "collisionBoundary", 24, () => {
  }), B = P(e, "sameWidth", 8, !1), H = P(e, "fitViewport", 8, !1), G = P(e, "strategy", 8, "absolute"), Z = P(e, "overlap", 8, !1), S = P(e, "el", 28, () => {
  });
  const {
    elements: { menu: A },
    states: { open: p },
    ids: _,
    getAttrs: E
  } = Br(), L = Lr(), W = E("content");
  Q(() => it(h()), () => {
    h() && _.menu.set(h());
  }), Q(() => o(), () => {
    Et(a, o());
  }), Q(() => x(a), () => {
    Object.assign(x(a), W);
  }), Q(
    () => (s(), it(g()), it(y()), it(b()), it(w()), it(C()), it(I()), it(R()), it(B()), it(H()), it(G()), it(Z())),
    () => {
      s() && Tc({
        side: g(),
        align: y(),
        sideOffset: b(),
        alignOffset: w(),
        collisionPadding: C(),
        avoidCollisions: I(),
        collisionBoundary: R(),
        sameWidth: B(),
        fitViewport: H(),
        strategy: G(),
        overlap: Z()
      });
    }
  ), pe(), ye();
  var O = Y(), U = V(O);
  yt(
    U,
    () => m() && s(),
    (nt) => {
      var D = Y(), vt = V(D);
      xt(
        vt,
        e,
        "default",
        {
          get builder() {
            return x(a);
          }
        }
      ), k(nt, D);
    },
    (nt) => {
      var D = Y(), vt = V(D);
      yt(
        vt,
        () => l() && s(),
        (wt) => {
          var M = qc();
          Lt(M, ($) => S($), () => S());
          let Rt;
          var jt = ct(M);
          xt(
            jt,
            e,
            "default",
            {
              get builder() {
                return x(a);
              }
            }
          ), _t(() => Rt = Mt(M, Rt, { ...x(a), ...r })), Xt(3, M, l, u), It(M, ($) => x(a).action($)), z(() => q("m-keydown", M, L)), k(wt, M);
        },
        (wt) => {
          var M = Y(), Rt = V(M);
          yt(
            Rt,
            () => c() && d() && s(),
            (jt) => {
              var $ = Hc();
              Lt($, (Wt) => S(Wt), () => S());
              let Gt;
              var Ee = ct($);
              xt(
                Ee,
                e,
                "default",
                {
                  get builder() {
                    return x(a);
                  }
                }
              ), _t(() => Gt = Mt($, Gt, { ...x(a), ...r })), Xt(1, $, c, f), Xt(2, $, d, v), It($, (Wt) => x(a).action(Wt)), z(() => q("m-keydown", $, L)), k(jt, $);
            },
            (jt) => {
              var $ = Y(), Gt = V($);
              yt(
                Gt,
                () => c() && s(),
                (Ee) => {
                  var Wt = zc();
                  Lt(Wt, (Vt) => S(Vt), () => S());
                  let Se;
                  var Ye = ct(Wt);
                  xt(
                    Ye,
                    e,
                    "default",
                    {
                      get builder() {
                        return x(a);
                      }
                    }
                  ), _t(() => Se = Mt(Wt, Se, { ...x(a), ...r })), Xt(1, Wt, c, f), It(Wt, (Vt) => x(a).action(Vt)), z(() => q("m-keydown", Wt, L)), k(Ee, Wt);
                },
                (Ee) => {
                  var Wt = Y(), Se = V(Wt);
                  yt(
                    Se,
                    () => d() && s(),
                    (Ye) => {
                      var Vt = Yc();
                      Lt(Vt, (Jt) => S(Jt), () => S());
                      let Re;
                      var Ge = ct(Vt);
                      xt(
                        Ge,
                        e,
                        "default",
                        {
                          get builder() {
                            return x(a);
                          }
                        }
                      ), _t(() => Re = Mt(Vt, Re, { ...x(a), ...r })), Xt(2, Vt, d, v), It(Vt, (Jt) => x(a).action(Jt)), z(() => q("m-keydown", Vt, L)), k(Ye, Vt);
                    },
                    (Ye) => {
                      var Vt = Y(), Re = V(Vt);
                      yt(
                        Re,
                        s,
                        (Ge) => {
                          var Jt = Gc();
                          Lt(Jt, (Xe) => S(Xe), () => S());
                          let un;
                          var Kr = ct(Jt);
                          xt(
                            Kr,
                            e,
                            "default",
                            {
                              get builder() {
                                return x(a);
                              }
                            }
                          ), _t(() => un = Mt(Jt, un, { ...x(a), ...r })), It(Jt, (Xe) => x(a).action(Xe)), z(() => q("m-keydown", Jt, L)), k(Ge, Jt);
                        },
                        null,
                        !0
                      ), k(Ye, Vt);
                    },
                    !0
                  ), k(Ee, Wt);
                },
                !0
              ), k(jt, $);
            },
            !0
          ), k(wt, M);
        },
        !0
      ), k(nt, D);
    }
  ), k(t, O), At();
}
var Zc = /* @__PURE__ */ lt("<button><!></button>");
function Jc(t, e) {
  const n = Yt(e, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]), r = Yt(n, ["asChild", "id", "el"]);
  Ot(e, !1);
  const i = _e(), o = () => se(c, "$trigger", i), s = Ae();
  let a = P(e, "asChild", 8, !1), l = P(e, "id", 24, () => {
  }), u = P(e, "el", 28, () => {
  });
  const { elements: { trigger: c }, ids: f, getAttrs: d } = Br(), v = Lr(), m = d("trigger");
  Q(() => it(l()), () => {
    l() && f.trigger.set(l());
  }), Q(() => o(), () => {
    Et(s, o());
  }), Q(() => x(s), () => {
    Object.assign(x(s), m);
  }), pe(), ye();
  var h = Y(), g = V(h);
  yt(
    g,
    a,
    (y) => {
      var b = Y(), w = V(b);
      xt(
        w,
        e,
        "default",
        {
          get builder() {
            return x(s);
          }
        }
      ), k(y, b);
    },
    (y) => {
      var b = Zc();
      Lt(b, (I) => u(I), () => u());
      let w;
      var C = ct(b);
      xt(
        C,
        e,
        "default",
        {
          get builder() {
            return x(s);
          }
        }
      ), _t(() => w = Mt(b, w, {
        ...x(s),
        type: "button",
        ...r
      })), It(b, (I) => x(s).action(I)), z(() => q("m-keydown", b, v)), z(() => q("m-pointerdown", b, v)), k(y, b);
    }
  ), k(t, h), At();
}
const Qc = {
  "chevron-down": "chevron-down",
  "comment-lines": "comment-lines",
  close: "close",
  "copy-to-clipboard": "copy-to-clipboard"
};
var $c = /* @__PURE__ */ Ba('<svg role="img"><use></use></svg>');
function Wr(t, e) {
  const n = P(e, "class", 3, ""), r = P(e, "size", 3, 16);
  var i = $c(), o = ct(i);
  _t(() => {
    tl(i, `gl-icon s${r() ?? ""} ${n() ?? ""}`), Dr(o, "href", `/assets/icons-1563760c6022424ca5187159258484be0c106b044e5e5a1b4f0be7a10cd6c90f.svg#${Qc[e.name] ?? ""}`);
  }), k(t, i);
}
var tf = /* @__PURE__ */ lt('<span class="gl-button-text gl-w-full"><span class="gl-new-dropdown-button-text"><!></span> <!></span>'), ef = /* @__PURE__ */ lt("<div><!></div>");
function nf(t, e) {
  Ot(e, !0);
  const n = P(e, "class", 3, "");
  var r = ef(), i = ct(r);
  Nt(i, () => Jc, (o, s) => {
    s(o, {
      class: "btn btn-default btn-md gl-button gl-new-dropdown-toggle",
      children: (a, l) => {
        var u = tf(), c = ct(u), f = ct(c);
        Pe(f, () => e.children);
        var d = ve(c, 2);
        Wr(d, {
          name: "chevron-down",
          class: "gl-button-icon gl-new-dropdown-chevron"
        }), k(a, u);
      },
      $$slots: { default: !0 }
    });
  }), _t(() => bi(r, `gl-disclosure-dropdown gl-new-dropdown ${n() ?? ""}`)), k(t, r), At();
}
var rf = /* @__PURE__ */ lt('<div class="gl-new-dropdown-panel gl-display-block!"><div class="gl-new-dropdown-inner"><div class="gl-new-dropdown-contents"><!></div></div></div>');
function of(t, e) {
  Ot(e, !0);
  var n = Y(), r = V(n);
  Nt(r, () => Xc, (i, o) => {
    o(i, {
      class: "gl-new-dropdown",
      align: "start",
      sideOffset: 4,
      children: (s, a) => {
        var l = rf(), u = ct(l), c = ct(u), f = ct(c);
        Pe(f, () => e.children), k(s, l);
      },
      $$slots: { default: !0 }
    });
  }), k(t, n), At();
}
var sf = /* @__PURE__ */ lt('<div class="gl-new-dropdown-item-content"><span class="gl-new-dropdown-item-text-wrapper"><!></span></div>');
function af(t, e) {
  Ot(e, !0);
  var n = Y(), r = V(n);
  Nt(r, () => xc, (i, o) => {
    o(i, {
      class: "gl-new-dropdown-item",
      get onclick() {
        return e.onclick;
      },
      children: (s, a) => {
        var l = sf(), u = ct(l), c = ct(u);
        Pe(c, () => e.children), k(s, l);
      },
      $$slots: { default: !0 }
    });
  }), k(t, n), At();
}
const lr = {
  Root: Uc,
  Trigger: nf,
  Content: of,
  Item: af
};
var lf = /* @__PURE__ */ lt('<img src="/uploads/-/system/project/avatar/10/256x256.png" alt="Daktela logo">');
function uf(t, e) {
  const n = P(e, "class", 3, "");
  var r = lf();
  _t(() => {
    bi(r, n()), Dr(r, "style", e.style);
  }), k(t, r);
}
var cf = /* @__PURE__ */ lt("<!> ", 1), ff = /* @__PURE__ */ lt("<!> <!>", 1);
function Ws(t, e) {
  const n = P(e, "class", 3, "");
  var r = Y(), i = V(r);
  Nt(i, () => lr.Root, (o, s) => {
    s(o, {
      children: (a, l) => {
        var u = ff(), c = V(u);
        Nt(c, () => lr.Trigger, (d, v) => {
          v(d, {
            get class() {
              return n();
            },
            children: (m, h) => {
              uf(m, { class: "gl-icon s14", style: "scale: 1.5" });
            },
            $$slots: { default: !0 }
          });
        });
        var f = ve(c, 2);
        Nt(f, () => lr.Content, (d, v) => {
          v(d, {
            children: (m, h) => {
              var g = Y(), y = V(g);
              Ga(y, 17, () => e.features, (b) => b.title, (b, w) => {
                var C = Y(), I = V(C);
                Nt(I, () => lr.Item, (R, B) => {
                  B(R, {
                    get onclick() {
                      return x(w).onClick;
                    },
                    children: (H, G) => {
                      var Z = cf(), S = V(Z);
                      Wr(S, {
                        get name() {
                          return x(w).icon;
                        },
                        class: "gl-mr-2"
                      });
                      var A = ve(S);
                      _t(() => rs(A, ` ${x(w).title ?? ""}`)), k(H, Z);
                    },
                    $$slots: { default: !0 }
                  });
                }), k(b, C);
              }), k(m, g);
            },
            $$slots: { default: !0 }
          });
        }), k(a, u);
      },
      $$slots: { default: !0 }
    });
  }), k(t, r);
}
const si = {
  projects: {
    ref() {
      const t = location.pathname.match(/^\/?(.*?)(?:\/-\/|$)/);
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
function df(t) {
  Vc(t, { class: "modal-backdrop" });
}
var vf = /* @__PURE__ */ lt('<div class="modal fade show gl-modal" style="display: block;"><div><div class="modal-content"><!></div></div></div>');
function gf(t, e) {
  Ot(e, !0);
  const n = P(e, "size", 3, "md");
  var r = Y(), i = V(r);
  Nt(i, () => Mc, (o, s) => {
    s(o, {
      children: (a, l) => {
        var u = vf(), c = ct(u), f = ct(c), d = ct(f);
        Pe(d, () => e.children), _t(() => bi(c, `modal-dialog modal-${n() ?? ""}`)), k(a, u);
      },
      $$slots: { default: !0 }
    });
  }), k(t, r), At();
}
var mf = /* @__PURE__ */ lt('<header class="modal-header"><!></header>');
function hf(t, e) {
  Ot(e, !0);
  var n = mf(), r = ct(n);
  Pe(r, () => e.children), k(t, n), At();
}
function bf(t, e) {
  Ot(e, !0);
  var n = Y(), r = V(n);
  Nt(r, () => Ac, (i, o) => {
    o(i, {
      class: "modal-title",
      children: (s, a) => {
        var l = Y(), u = V(l);
        Pe(u, () => e.children), k(s, l);
      },
      $$slots: { default: !0 }
    });
  }), k(t, n), At();
}
var pf = /* @__PURE__ */ lt('<span class="gl-button-text"><!></span>');
function yf(t, e) {
  Ot(e, !0);
  var n = Y(), r = V(n);
  Nt(r, () => Bs, (i, o) => {
    o(i, {
      class: "btn btn-default btn-md gl-button",
      children: (s, a) => {
        var l = pf(), u = ct(l);
        yt(
          u,
          () => e.children,
          (c) => {
            var f = Y(), d = V(f);
            Pe(d, () => e.children), k(c, f);
          },
          (c) => {
            var f = ns("Close");
            k(c, f);
          }
        ), k(s, l);
      },
      $$slots: { default: !0 }
    });
  }), k(t, n), At();
}
function _f(t) {
  Bs(t, {
    class: "btn btn-default btn-sm gl-button btn-default-tertiary btn-icon",
    children: (e, n) => {
      Wr(e, { name: "close" });
    },
    $$slots: { default: !0 }
  });
}
var wf = /* @__PURE__ */ lt('<div class="modal-body"><!></div>');
function Ef(t, e) {
  Ot(e, !0);
  var n = wf(), r = ct(n);
  Pe(r, () => e.children), k(t, n), At();
}
var Tf = /* @__PURE__ */ lt('<footer class="modal-footer"><!></footer>');
function xf(t, e) {
  Ot(e, !0);
  var n = Tf(), r = ct(n);
  Pe(r, () => e.children), k(t, n), At();
}
const de = {
  Root: Oc,
  Portal: Sc,
  Overlay: df,
  Content: gf,
  Header: hf,
  Title: bf,
  Close: yf,
  CloseIcon: _f,
  Body: Ef,
  Footer: xf
};
var Cf = /* @__PURE__ */ lt('<div class="gl-p-7 gl-text-center"><div class="gl-spinner-container gl-pb-2"><span class="gl-vertical-align-text-bottom! gl-spinner gl-spinner-dark gl-spinner-lg"></span></div> Loading</div>');
function Of(t) {
  var e = Cf();
  k(t, e);
}
const Af = [
  "Menlo",
  "'DejaVu Sans Mono'",
  "'Liberation Mono'",
  "Consolas",
  "'Ubuntu Mono'",
  "'Courier New'",
  "'andale mono'",
  "'lucida console'",
  "monospace"
].join(", "), kf = [
  `font-family:${Af}`,
  "font-size:0.8125rem",
  "margin-top:8px",
  "margin-bottom:8px",
  "color:#999999",
  "padding:8px 0 8px 8px",
  "border-width:0 0 0 3px",
  "border-style:none none none solid",
  "border-color:#444444"
].join(";");
function Pf(t) {
  return Sf(t) + Rf(t) + If(t) + Mf(t) + Lf(t);
}
function Sf(t) {
  return `<p><strong>${t.title}</strong></p>`;
}
function Rf(t) {
  return ki("Commits", Df([t].concat(t.cherryPicks)));
}
function Df(t) {
  return t.map((e) => `${Ff(e.branch)} ${Nf(e.commit)}`);
}
function Ff(t) {
  return Pi(t.name, t.web_url);
}
function Nf(t) {
  return Pi(t.web_url, t.web_url);
}
function If(t) {
  return ki("Merge requests", t.mergeRequests.map((e) => Ks(e.web_url)));
}
function Mf(t) {
  return Object.entries(t.extra).reduce((e, [n, r]) => e + ki(n, Wf(r), !0), "");
}
function Lf(t) {
  return t.body === "" ? "" : `<p>Notes (copied from commit message):</p><pre style="${kf}">${t.body}</pre>`;
}
function ki(t, e, n = !1) {
  return e.length ? e.length === 1 && n ? `<p>${t}: ${e[0]}</p>` : `<p>${t}:</p>` + Bf(e) : "";
}
function Bf(t) {
  return `<ul>${t.map((e) => `<li>${e}</li>`).join("")}</ul>`;
}
function Pi(t, e) {
  return `<a href="${e}" target="_blank" rel="noreferrer noopener">${t}</a>`;
}
function Wf(t) {
  return t.map(Ks);
}
function Ks(t) {
  try {
    return Pi(t, new URL(t).toString());
  } catch {
    return t;
  }
}
async function Kf(t, e) {
  try {
    await navigator.clipboard.writeText(x(e));
  } catch (n) {
    console.error(n);
  }
}
var jf = /* @__PURE__ */ lt('<span>Ticket: <a target="_blank" rel="noreferrer noopener"> </a></span>'), Vf = /* @__PURE__ */ lt('<div class="gl-display-flex gl-justify-content-space-between gl-mb-2"><div><!></div> <button title="Copy message" class="btn input-group-text btn-default btn-md gl-button btn-default-secondary btn-icon"><!></button></div> <textarea readonly="" class="gl-form-input gl-form-textarea form-control"></textarea>', 1);
function Uf(t, e) {
  Ot(e, !0);
  const n = /* @__PURE__ */ xn(() => Pf(e.comment));
  var r = Vf(), i = V(r), o = ct(i), s = ct(o);
  yt(s, () => e.comment.ticket, (c) => {
    var f = jf(), d = ve(ct(f)), v = ct(d);
    _t(() => {
      Dr(d, "href", e.comment.ticket), rs(v, e.comment.ticket);
    }), k(c, f);
  });
  var a = ve(o, 2);
  a.__click = [Kf, n];
  var l = ct(a);
  Wr(l, {
    name: "copy-to-clipboard",
    class: "gl-button-icon"
  });
  var u = ve(i, 2);
  _t(() => $a(u, x(n))), k(t, r), At();
}
ts(["click"]);
const qf = "/api/v4", Le = {
  commits: {
    async findBySHA(t, e) {
      return Wn(`projects/${hn(t)}/repository/commits/${e}`);
    },
    async refs(t, e, n = "all") {
      return Wn(`projects/${hn(t)}/repository/commits/${e}/refs`, { type: n });
    },
    async comments(t, e) {
      return Wn(`projects/${hn(t)}/repository/commits/${e}/comments`);
    },
    async mergeRequests(t, e) {
      return Wn(`projects/${hn(t)}/repository/commits/${e}/merge_requests`);
    }
  },
  branches: {
    async findByName(t, e) {
      return Wn(`projects/${hn(t)}/repository/branches/${hn(e)}`);
    }
  }
};
function hn(t) {
  return encodeURIComponent(t);
}
async function Wn(t, e = {}) {
  const n = new URL(`${qf}/${t}`, location.origin);
  return Object.entries(e).forEach(([i, o]) => n.searchParams.append(i, o)), await (await fetch(n)).json();
}
const mo = {
  async findRefs(t, e) {
    const n = await Hf(t, e);
    return Promise.all(
      n.map((r) => this.findRef(t, r))
    );
  },
  async findRef(t, e) {
    const [n, r] = await Promise.all([
      Le.commits.findBySHA(t, e),
      Le.commits.refs(t, e, "branch")
    ]);
    return { commit: n, branches: r };
  },
  async deRefAll(t, e) {
    return await Promise.all(
      e.map((n) => this.deRef(t, n))
    );
  },
  async deRef(t, e) {
    const n = await Le.branches.findByName(t, e.branch.name);
    return { commit: e.commit, branch: n };
  }
};
async function Hf(t, e) {
  const n = await Le.commits.comments(t, e);
  return zf(n);
}
function zf(t) {
  return t.reduce((e, n) => {
    const r = n.note.match(/mentioned\s+in\s+commit\s+(\w+)/i);
    return r !== null && e.push(r[1]), e;
  }, []);
}
const Yf = {
  message(t) {
    const e = { title: "", body: "", ticket: void 0, extra: {} }, n = t.message.split(`
`).map((r) => r.trim());
    for (ai(n), e.title = Gf(n), ai(n); n.length; )
      Xf(e, n);
    return e.body = e.body.trim(), e;
  }
};
function Gf(t) {
  const e = t.shift();
  if (e === void 0)
    throw Error("Could not parse commit title");
  return e.replace(/\s*#\s*\d+\s*$/, "");
}
function Xf(t, e) {
  return Zf(e) || Jf(t, e) || Qf(t, e) || $f(t, e) || td(t, e);
}
function ai(t) {
  return js(t, /^\s*$/);
}
function Zf(t) {
  return js(t, /\(.*cherry.*picked.*\)/i);
}
function js(t, e) {
  let n = !1;
  for (; t.length && t[0].match(e); )
    t.shift(), n = !0;
  return n;
}
function Jf(t, e) {
  let n = !1;
  return e.length && e[0].match(/^\s*$/) && (t.body += `
`, n = !0, ai(e)), n;
}
function Qf(t, e) {
  if (e.length) {
    const n = e[0].match(/ticket\s*:\s*(http.*)/i);
    if (!n)
      return !1;
    t.ticket = n[1].trim(), e.shift();
  }
  return !0;
}
function $f(t, e) {
  if (e.length) {
    const n = e[0].match(/^([^:]+):\s*(http.*)/i);
    if (!n)
      return !1;
    const r = n[1].trim(), i = n[2].trim();
    t.extra[r] = t.extra[r] ?? [], t.extra[r].push(i), e.shift();
  }
  return !0;
}
function td(t, e) {
  const n = e.shift();
  return n !== void 0 && (t.body += `${n}
`), n !== void 0;
}
const zr = {
  async assembleBase(t, e) {
    const n = await Le.commits.findBySHA(t, e), [
      r,
      i,
      o
    ] = await Promise.all([
      Le.commits.refs(t, n.id, "all"),
      mo.findRefs(t, n.id),
      Le.commits.mergeRequests(t, n.id)
    ]);
    return { commit: n, branches: r, cherryPicks: i, mergeRequests: o };
  },
  async assembleComment(t, e) {
    const [n, r] = await Promise.all([
      Le.branches.findByName(t, e.branch.name),
      mo.deRefAll(t, e.cherryPicks)
    ]), i = Yf.message(e.commit);
    return {
      commit: e.commit,
      branch: n,
      cherryPicks: r,
      mergeRequests: e.mergeRequests,
      title: i.title,
      body: i.body,
      ticket: i.ticket,
      extra: i.extra
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
};
var ed = /* @__PURE__ */ lt("<!> <!>", 1), nd = /* @__PURE__ */ lt("<!> <!> <!>", 1), rd = /* @__PURE__ */ lt("<!> <!>", 1);
function id(t, e) {
  Ot(e, !0);
  let n = P(e, "args", 15), r = xo(ae({ type: "closed" }));
  async function i(d, v) {
    o(d, v);
    const m = await zr.assembleBase(d, v), h = zr.resolveBaseUsingFirst(m);
    if (h !== null) {
      const g = await zr.assembleComment(d, h);
      s(g);
    } else
      console.error("Comment could not be auto-resolved");
  }
  function o(d, v) {
    Et(r, ae({ type: "loading", project: d, commit: v }));
  }
  function s(d) {
    Et(r, ae({ type: "result", comment: d }));
  }
  vr(() => {
    n() !== void 0 && i(n().projectRef, n().sha);
  });
  function a(d) {
    d || l();
  }
  function l() {
    Et(r, ae({ type: "closed" })), n(void 0);
  }
  var u = Y(), c = V(u), f = /* @__PURE__ */ xn(() => x(r).type !== "closed");
  Nt(c, () => de.Root, (d, v) => {
    v(d, {
      get open() {
        return x(f);
      },
      onOpenChange: a,
      children: (m, h) => {
        var g = Y(), y = V(g);
        Nt(y, () => de.Portal, (b, w) => {
          w(b, {
            children: (C, I) => {
              var R = rd(), B = V(R);
              Nt(B, () => de.Overlay, (G, Z) => {
                Z(G, {});
              });
              var H = ve(B, 2);
              Nt(H, () => de.Content, (G, Z) => {
                Z(G, {
                  size: "sm",
                  children: (S, A) => {
                    var p = nd(), _ = V(p);
                    Nt(_, () => de.Header, (W, O) => {
                      O(W, {
                        children: (U, nt) => {
                          var D = ed(), vt = V(D);
                          Nt(vt, () => de.Title, (M, Rt) => {
                            Rt(M, {
                              children: (jt, $) => {
                                var Gt = ns("Generate ticket comment");
                                k(jt, Gt);
                              },
                              $$slots: { default: !0 }
                            });
                          });
                          var wt = ve(vt, 2);
                          Nt(wt, () => de.CloseIcon, (M, Rt) => {
                            Rt(M, {});
                          }), k(U, D);
                        },
                        $$slots: { default: !0 }
                      });
                    });
                    var E = ve(_, 2);
                    Nt(E, () => de.Body, (W, O) => {
                      O(W, {
                        children: (U, nt) => {
                          var D = Y(), vt = V(D);
                          yt(
                            vt,
                            () => x(r).type === "loading",
                            (wt) => {
                              Of(wt);
                            },
                            (wt) => {
                              var M = Y(), Rt = V(M);
                              yt(
                                Rt,
                                () => x(r).type === "result",
                                (jt) => {
                                  Uf(jt, {
                                    get comment() {
                                      return x(r).comment;
                                    }
                                  });
                                },
                                null,
                                !0
                              ), k(wt, M);
                            }
                          ), k(U, D);
                        },
                        $$slots: { default: !0 }
                      });
                    });
                    var L = ve(E, 2);
                    Nt(L, () => de.Footer, (W, O) => {
                      O(W, {
                        children: (U, nt) => {
                          var D = Y(), vt = V(D);
                          Nt(vt, () => de.Close, (wt, M) => {
                            M(wt, {});
                          }), k(U, D);
                        },
                        $$slots: { default: !0 }
                      });
                    }), k(S, p);
                  },
                  $$slots: { default: !0 }
                });
              }), k(C, R);
            },
            $$slots: { default: !0 }
          });
        }), k(m, g);
      },
      $$slots: { default: !0 }
    });
  }), k(t, u), At();
}
function od(t, e) {
  Ot(e, !0);
  let n = P(e, "controls", 7);
  id(t, {
    get args() {
      return n().generateTicketCommentModal.args;
    },
    set args(r) {
      n().generateTicketCommentModal.args = r;
    }
  }), At();
}
function sd() {
  let t = xo(void 0);
  function e(r) {
    Et(t, ae(r));
  }
  function n() {
    Et(t, void 0);
  }
  return {
    get args() {
      return x(t);
    },
    open: e,
    close: n
  };
}
function ad() {
  const t = ld();
  ud(t), cd(t), fd(t);
}
function ld() {
  return {
    generateTicketCommentModal: sd()
  };
}
function ud(t) {
  try {
    const e = document.querySelector(".page-content-header");
    if (!e)
      return;
    const n = si.projects.ref(), r = si.commits.sha();
    hi(Ws, {
      target: e,
      props: {
        class: "gl-ml-3",
        features: [
          {
            icon: "comment-lines",
            title: "Generate ticket comment",
            onClick() {
              t.generateTicketCommentModal.open({ projectRef: n, sha: r });
            }
          }
        ]
      }
    });
  } catch (e) {
    console.error(e);
  }
}
function cd(t) {
  try {
    const e = document.querySelector([
      ".project-last-commit .js-commit-sha-group",
      ".blob-commit-info .commit-sha-group"
    ].join(", "));
    if (!e)
      return;
    const n = e.querySelector("[data-clipboard-text]");
    if (!n || !(n instanceof HTMLElement))
      return;
    const r = si.projects.ref(), i = n.dataset.clipboardText ?? "";
    hi(Ws, {
      target: e,
      props: {
        features: [
          {
            icon: "comment-lines",
            title: "Generate ticket comment",
            onClick() {
              t.generateTicketCommentModal.open({ projectRef: r, sha: i });
            }
          }
        ]
      }
    });
  } catch (e) {
    console.error(e);
  }
}
function fd(t) {
  const e = document.createElement("div");
  e.id = "daktela-modals", document.body.appendChild(e), hi(od, {
    target: e,
    props: {
      controls: t
    }
  });
}
ad();
//# sourceMappingURL=daktela-gitlab.js.map
