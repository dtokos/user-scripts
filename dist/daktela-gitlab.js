const Os = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Os);
const xs = 1, Cs = 2, si = 4, As = 8, Ps = 1, ks = 2, Ss = 4, Rs = 1, Ds = 2, De = Symbol(), Fs = [
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
], To = ["touchstart", "touchmove", "touchend"], Ns = {
  // no `class: 'className'` because we handle that separately
  formnovalidate: "formNoValidate",
  ismap: "isMap",
  nomodule: "noModule",
  playsinline: "playsInline",
  readonly: "readOnly"
}, ai = "http://www.w3.org/2000/svg";
function Is(e, t = "exclude-on") {
  return e.endsWith("capture") ? t == "exclude-on" ? e !== "gotpointercapture" && e !== "lostpointercapture" : e !== "ongotpointercapture" && e !== "onlostpointercapture" : !1;
}
let ui = !1;
var Fn = Array.isArray, Ms = Array.from, Ls = Object.isFrozen, kr = Object.defineProperty, Sr = Object.getOwnPropertyDescriptor, ci = Object.getOwnPropertyDescriptors, Bs = Object.prototype, js = Array.prototype, Jn = Object.getPrototypeOf, li = Map.prototype, Ks = li.set, Ws = li.get;
function Vs(e, t, n) {
  Ks.call(e, t, n);
}
function qs(e, t) {
  return Ws.call(e, t);
}
function Us(e) {
  return typeof e == "function";
}
const $e = 2, fi = 4, Nn = 8, Gr = 16, ve = 32, Xr = 64, Ve = 128, Qn = 256, me = 512, ge = 1024, tn = 2048, hn = 4096, bn = 8192, di = 16384, In = 32768, Hs = 65536, qt = Symbol("$state"), zs = Symbol("");
function vi(e) {
  return e === this.v;
}
function Ys(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Zr(e) {
  return !Ys(e, this.v);
}
function Gs(e) {
  throw new Error("effect_in_teardown");
}
function Xs() {
  throw new Error("effect_in_unowned_derived");
}
function Zs(e) {
  throw new Error("effect_orphan");
}
function Js() {
  throw new Error("effect_update_depth_exceeded");
}
function Qs(e) {
  throw new Error("props_invalid_value");
}
function $s() {
  throw new Error("state_unsafe_mutation");
}
// @__NO_SIDE_EFFECTS__
function Be(e) {
  return {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    reactions: null,
    equals: vi,
    v: e,
    version: 0
  };
}
// @__NO_SIDE_EFFECTS__
function ee(e) {
  var n;
  const t = /* @__PURE__ */ Be(e);
  return t.equals = Zr, ft !== null && ft.l !== null && ((n = ft.l).s ?? (n.s = [])).push(t), t;
}
function ht(e, t) {
  var n = e.v !== De;
  return !de && n && zt !== null && Dr() && zt.f & $e && $s(), e.equals(t) || (e.v = t, e.version++, Dr() && n && yt !== null && yt.f & me && !(yt.f & ve) && (Bt !== null && Bt.includes(e) ? (ae(yt, ge), hr(yt)) : Le === null ? sa([e]) : Le.push(e)), eo(e, ge, !0)), t;
}
function ce(e, t = !0, n = null) {
  if (typeof e == "object" && e != null && !Ls(e)) {
    if (qt in e) {
      const o = (
        /** @type {import('#client').ProxyMetadata<T>} */
        e[qt]
      );
      if (o.t === e || o.p === e)
        return o.p;
    }
    const r = Jn(e);
    if (r === Bs || r === js) {
      const o = new Proxy(e, ta);
      return kr(e, qt, {
        value: (
          /** @type {import('#client').ProxyMetadata} */
          {
            s: /* @__PURE__ */ new Map(),
            v: /* @__PURE__ */ Be(0),
            a: Fn(e),
            i: t,
            p: o,
            t: e
          }
        ),
        writable: !0,
        enumerable: !1
      }), o;
    }
  }
  return e;
}
function Oo(e, t = 1) {
  ht(e, e.v + t);
}
const ta = {
  defineProperty(e, t, n) {
    if (n.value) {
      const r = e[qt], o = r.s.get(t);
      o !== void 0 && ht(o, ce(n.value, r.i, r));
    }
    return Reflect.defineProperty(e, t, n);
  },
  deleteProperty(e, t) {
    const n = e[qt], r = n.s.get(t), o = n.a, s = delete e[t];
    if (o && s) {
      const i = n.s.get("length"), u = e.length - 1;
      i !== void 0 && i.v !== u && ht(i, u);
    }
    return r !== void 0 && ht(r, De), s && Oo(n.v), s;
  },
  get(e, t, n) {
    var s;
    if (t === qt)
      return Reflect.get(e, qt);
    const r = e[qt];
    let o = r.s.get(t);
    if (o === void 0 && (!(t in e) || (s = Sr(e, t)) != null && s.writable) && (o = (r.i ? Be : ee)(ce(e[t], r.i, r)), r.s.set(t, o)), o !== void 0) {
      const i = O(o);
      return i === De ? void 0 : i;
    }
    return Reflect.get(e, t, n);
  },
  getOwnPropertyDescriptor(e, t) {
    const n = Reflect.getOwnPropertyDescriptor(e, t);
    if (n && "value" in n) {
      const o = e[qt].s.get(t);
      o && (n.value = O(o));
    }
    return n;
  },
  has(e, t) {
    var s;
    if (t === qt)
      return !0;
    const n = e[qt], r = Reflect.has(e, t);
    let o = n.s.get(t);
    return (o !== void 0 || yt !== null && (!r || (s = Sr(e, t)) != null && s.writable)) && (o === void 0 && (o = (n.i ? Be : ee)(
      r ? ce(e[t], n.i, n) : De
    ), n.s.set(t, o)), O(o) === De) ? !1 : r;
  },
  set(e, t, n, r) {
    const o = e[qt];
    let s = o.s.get(t);
    s === void 0 && (se(() => r[t]), s = o.s.get(t)), s !== void 0 && ht(s, ce(n, o.i, o));
    const i = o.a, u = !(t in e);
    if (i && t === "length")
      for (let a = n; a < e.length; a += 1) {
        const c = o.s.get(a + "");
        c !== void 0 && ht(c, De);
      }
    if (e[t] = n, u) {
      if (i) {
        const a = o.s.get("length"), c = e.length;
        a !== void 0 && a.v !== c && ht(a, c);
      }
      Oo(o.v);
    }
    return !0;
  },
  ownKeys(e) {
    const t = e[qt];
    return O(t.v), Reflect.ownKeys(e);
  }
}, oe = () => {
};
function ea(e) {
  return e();
}
function $n(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
let tr = !1, Rr = [];
function mi() {
  tr = !1;
  const e = Rr.slice();
  Rr = [], $n(e);
}
function gi(e) {
  tr || (tr = !0, queueMicrotask(mi)), Rr.push(e);
}
function na() {
  tr && mi();
}
// @__NO_SIDE_EFFECTS__
function Sn(e) {
  let t = $e | ge;
  yt === null && (t |= Ve);
  const n = {
    deps: null,
    deriveds: null,
    equals: vi,
    f: t,
    first: null,
    fn: e,
    last: null,
    reactions: null,
    v: (
      /** @type {V} */
      null
    ),
    version: 0
  };
  if (zt !== null && zt.f & $e) {
    var r = (
      /** @type {import('#client').Derived<V>} */
      zt
    );
    r.deriveds === null ? r.deriveds = [n] : r.deriveds.push(n);
  }
  return n;
}
// @__NO_SIDE_EFFECTS__
function ra(e) {
  const t = /* @__PURE__ */ Sn(e);
  return t.equals = Zr, t;
}
function hi(e) {
  Qr(e);
  var t = e.deriveds;
  if (t !== null) {
    e.deriveds = null;
    for (var n = 0; n < t.length; n += 1)
      oa(t[n]);
  }
}
function pi(e, t) {
  hi(e);
  var n = _i(e), r = (fn || e.f & Ve) && e.deps !== null ? tn : me;
  ae(e, r);
  var o = e.equals(n);
  return o || (e.v = n, eo(e, ge, t)), o;
}
function oa(e) {
  hi(e), gr(e, 0), ae(e, bn), e.first = e.last = e.deps = e.reactions = // @ts-expect-error `signal.fn` cannot be `null` while the signal is alive
  e.fn = null;
}
function mr(e) {
  throw new Error("lifecycle_outside_component");
}
const bi = 0, ia = 1, yi = 2;
let Me = bi, er = !1, nr = !1, dn = !1, Jr = !1;
function xo(e) {
  dn = e;
}
function Co(e) {
  Jr = e;
}
function Ao(e) {
  de = e;
}
let Xe = [], vn = 0, zt = null, yt = null, Bt = null, Lt = 0, Le = null;
function sa(e) {
  Le = e;
}
let de = !1, fn = !1, ft = null;
function Dr() {
  return ft !== null && ft.l === null;
}
function yn(e) {
  var d;
  var t = e.f, n = (t & ge) !== 0, r = (t & Ve) !== 0;
  if (n && !r)
    return !0;
  var o = (t & Qn) !== 0;
  if (t & tn || n && r) {
    var s = e.deps;
    if (s !== null)
      for (var i = s.length, u, a, c = 0; c < i; c++) {
        var l = s[c];
        !n && yn(
          /** @type {import('#client').Derived} */
          l
        ) && (u = pi(
          /** @type {import('#client').Derived} **/
          l,
          !0
        ));
        var f = l.version;
        if (r) {
          if (f > /** @type {import('#client').Derived} */
          e.version)
            return e.version = f, !u;
          !fn && !((d = l == null ? void 0 : l.reactions) != null && d.includes(e)) && (a = l.reactions, a === null ? l.reactions = [e] : a.push(e));
        } else {
          if (e.f & ge)
            return !0;
          o && (f > /** @type {import('#client').Derived} */
          e.version && (e.version = f, n = !0), a = l.reactions, a === null ? l.reactions = [e] : a.includes(e) || a.push(e));
        }
      }
    r || ae(e, me), o && (e.f ^= Qn);
  }
  return n;
}
function aa(e, t, n) {
  throw e;
}
function _i(e) {
  const t = Bt, n = Lt, r = Le, o = zt, s = fn, i = de;
  Bt = /** @type {null | import('#client').Value[]} */
  null, Lt = 0, Le = null, zt = e, fn = !dn && (e.f & Ve) !== 0, de = !1;
  try {
    let u = (0, e.fn)(), a = (
      /** @type {import('#client').Value<unknown>[]} **/
      e.deps
    );
    if (Bt !== null) {
      let c;
      if (a !== null) {
        const l = a.length, f = Lt === 0 ? Bt : a.slice(0, Lt).concat(Bt), m = f.length > 16 && l - Lt > 1 ? new Set(f) : null;
        for (c = Lt; c < l; c++) {
          const h = a[c];
          (m !== null ? !m.has(h) : !f.includes(h)) && wi(e, h);
        }
      }
      if (a !== null && Lt > 0)
        for (a.length = Lt + Bt.length, c = 0; c < Bt.length; c++)
          a[Lt + c] = Bt[c];
      else
        e.deps = /** @type {import('#client').Value<V>[]} **/
        a = Bt;
      if (!fn)
        for (c = Lt; c < a.length; c++) {
          const l = a[c], f = l.reactions;
          f === null ? l.reactions = [e] : f[f.length - 1] !== e && f.push(e);
        }
    } else
      a !== null && Lt < a.length && (gr(e, Lt), a.length = Lt);
    return u;
  } finally {
    Bt = t, Lt = n, Le = r, zt = o, fn = s, de = i;
  }
}
function wi(e, t) {
  const n = t.reactions;
  let r = 0;
  if (n !== null) {
    r = n.length - 1;
    const o = n.indexOf(e);
    o !== -1 && (r === 0 ? t.reactions = null : (n[o] = n[r], n.pop()));
  }
  r === 0 && t.f & $e && (ae(t, tn), t.f & (Ve | Qn) || (t.f ^= Qn), gr(
    /** @type {import('#client').Derived} **/
    t,
    0
  ));
}
function gr(e, t) {
  const n = e.deps;
  if (n !== null) {
    const r = t === 0 ? null : n.slice(0, t);
    let o;
    for (o = t; o < n.length; o++) {
      const s = n[o];
      (r === null || !r.includes(s)) && wi(e, s);
    }
  }
}
function Qr(e) {
  let t = e.first;
  e.first = null, e.last = null;
  for (var n; t !== null; )
    n = t.next, Bn(t), t = n;
}
function Mn(e) {
  var t = e.f;
  if (!(t & bn)) {
    ae(e, me);
    var n = e.ctx, r = yt, o = ft;
    yt = e, ft = n;
    try {
      t & Gr || Qr(e), Ri(e);
      var s = _i(e);
      e.teardown = typeof s == "function" ? s : null;
    } catch (i) {
      aa(
        /** @type {Error} */
        i
      );
    } finally {
      yt = r, ft = o;
    }
  }
}
function Ei() {
  vn > 1e3 && (vn = 0, Js()), vn++;
}
function Ti(e) {
  const t = e.length;
  if (t !== 0) {
    Ei();
    var n = dn;
    dn = !0;
    try {
      for (var r = 0; r < t; r++) {
        var o = e[r];
        if (o.first === null && !(o.f & ve))
          Po([o]);
        else {
          var s = [];
          xi(o, s), Po(s);
        }
      }
    } finally {
      dn = n;
    }
  }
}
function Po(e) {
  var t = e.length;
  if (t !== 0)
    for (var n = 0; n < t; n++) {
      var r = e[n];
      !(r.f & (bn | hn)) && yn(r) && Mn(r);
    }
}
function ko() {
  if (er = !1, nr = !1, vn > 1001)
    return;
  const e = Xe;
  Xe = [], Ti(e), !er && !nr && (vn = 0);
}
async function Oi() {
  await new Promise((e) => {
    requestAnimationFrame(() => {
      setTimeout(e, 0);
    }), setTimeout(e, 100);
  });
}
function hr(e) {
  Me === bi ? er || (er = !0, queueMicrotask(ko)) : Me === yi && (nr || (nr = !0, Oi().then(ko)));
  for (var t = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (n & ve) {
      if (!(n & me))
        return;
      ae(t, tn);
    }
  }
  Xe.push(t);
}
function xi(e, t) {
  var n = e.first, r = [];
  t:
    for (; n !== null; ) {
      var o = n.f, s = (o & (bn | hn)) === 0, i = o & ve, u = (o & me) !== 0, a = n.first;
      if (s && (!i || !u)) {
        if (i && ae(n, me), o & Nn) {
          if (!i && yn(n) && (Mn(n), a = n.first), a !== null) {
            n = a;
            continue;
          }
        } else if (o & fi)
          if (i || u) {
            if (a !== null) {
              n = a;
              continue;
            }
          } else
            r.push(n);
      }
      var c = n.next;
      if (c === null) {
        let d = n.parent;
        for (; d !== null; ) {
          if (e === d)
            break t;
          var l = d.next;
          if (l !== null) {
            n = l;
            continue t;
          }
          d = d.parent;
        }
      }
      n = c;
    }
  for (var f = 0; f < r.length; f++)
    a = r[f], t.push(a), xi(a, t);
}
function $r(e) {
  const t = Me;
  try {
    return Me = yi, e();
  } finally {
    Me = t;
  }
}
function to(e, t = !0) {
  var n = Me, r = Xe;
  try {
    Ei();
    const s = [];
    Me = ia, Xe = s, t && Ti(r);
    var o = e == null ? void 0 : e();
    return na(), (Xe.length > 0 || s.length > 0) && to(), vn = 0, o;
  } finally {
    Me = n, Xe = r;
  }
}
async function Ze() {
  await Oi(), to();
}
function O(e) {
  const t = e.f;
  if (t & bn)
    return e.v;
  if (zt !== null && !(zt.f & (ve | Xr)) && !de) {
    const n = (zt.f & Ve) !== 0, r = zt.deps;
    Bt === null && r !== null && r[Lt] === e && !(n && yt !== null) ? Lt++ : (r === null || Lt === 0 || r[Lt - 1] !== e) && (Bt === null ? Bt = [e] : Bt[Bt.length - 1] !== e && Bt.push(e)), Le !== null && yt !== null && yt.f & me && !(yt.f & ve) && Le.includes(e) && (ae(yt, ge), hr(yt));
  }
  return t & $e && yn(
    /** @type {import('#client').Derived} */
    e
  ) && pi(
    /** @type {import('#client').Derived} **/
    e,
    !1
  ), e.v;
}
function eo(e, t, n) {
  var r = e.reactions;
  if (r !== null)
    for (var o = Dr(), s = r.length, i = 0; i < s; i++) {
      var u = r[i], a = u.f;
      if (!(a & ge || (!n || !o) && u === yt)) {
        ae(u, t);
        var c = (a & tn) !== 0, l = (a & Ve) !== 0;
        (a & me || c && l) && (u.f & $e ? eo(
          /** @type {import('#client').Derived} */
          u,
          tn,
          n
        ) : hr(
          /** @type {import('#client').Effect} */
          u
        ));
      }
    }
}
function se(e) {
  const t = de;
  try {
    return de = !0, e();
  } finally {
    de = t;
  }
}
const ua = ~(ge | tn | me);
function ae(e, t) {
  e.f = e.f & ua | t;
}
function Ci(e) {
  return (
    /** @type {T} */
    Pi().get(e)
  );
}
function Ai(e, t) {
  return Pi().set(e, t), t;
}
function Pi(e) {
  return ft === null && mr(), ft.c ?? (ft.c = new Map(
    ca(ft) || void 0
  ));
}
function ca(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
function la(e, t = 1) {
  var n = +O(e);
  return ht(e, n + t), n;
}
function At(e, t = !1, n) {
  ft = {
    p: ft,
    c: null,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  }, t || (ft.l = {
    s: null,
    u: null,
    r1: [],
    r2: /* @__PURE__ */ Be(!1)
  });
}
function Pt(e) {
  const t = ft;
  if (t !== null) {
    const r = t.e;
    if (r !== null) {
      t.e = null;
      for (var n = 0; n < r.length; n++)
        Ce(r[n]);
    }
    ft = t.p, t.m = !0;
  }
  return (
    /** @type {T} */
    {}
  );
}
function rt(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (qt in e)
      Fr(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && qt in n && Fr(n);
      }
  }
}
function Fr(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        Fr(e[r], t);
      } catch {
      }
    const n = Jn(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = ci(n);
      for (let o in r) {
        const s = r[o].get;
        if (s)
          try {
            s.call(e);
          } catch {
          }
      }
    }
  }
}
function fa(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function da(e) {
  if (Fn(e))
    for (var t = 0; t < e.length; t++) {
      var n = e[t];
      n.isConnected && n.remove();
    }
  else
    e.isConnected && e.remove();
}
function ki(e) {
  yt === null && zt === null && Zs(), Jr && Gs();
}
function So(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Ln(e, t, n) {
  var r = (e & Xr) !== 0, o = {
    ctx: ft,
    deps: null,
    dom: null,
    f: e | ge,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: r ? null : yt,
    prev: null,
    teardown: null,
    transitions: null
  };
  if (zt !== null && !r) {
    var s = zt.f;
    s & $e && (s & Ve && Xs(), yt !== null && So(o, yt)), So(o, zt);
  }
  if (n) {
    var i = dn;
    try {
      xo(!0), Mn(o), o.f |= di;
    } finally {
      xo(i);
    }
  } else
    hr(o);
  return o;
}
function rr(e) {
  ki();
  var t = yt !== null && (yt.f & Nn) !== 0 && // TODO do we actually need this? removing them changes nothing
  ft !== null && !ft.m;
  if (t) {
    var n = (
      /** @type {import('#client').ComponentContext} */
      ft
    );
    (n.e ?? (n.e = [])).push(e);
  } else {
    var r = Ce(e);
    return r;
  }
}
function va(e) {
  return ki(), _n(e);
}
function Si(e) {
  const t = Ln(Xr, e, !0);
  return () => {
    Bn(t);
  };
}
function Ce(e) {
  return Ln(fi, e, !1);
}
function X(e, t) {
  var n = (
    /** @type {import('#client').ComponentContextLegacy} */
    ft
  ), r = { effect: null, ran: !1 };
  n.l.r1.push(r), r.effect = _n(() => {
    e(), !r.ran && (r.ran = !0, ht(n.l.r2, !0), se(t));
  });
}
function be() {
  var e = (
    /** @type {import('#client').ComponentContextLegacy} */
    ft
  );
  _n(() => {
    if (O(e.l.r2)) {
      for (var t of e.l.r1) {
        var n = t.effect;
        yn(n) && Mn(n), t.ran = !1;
      }
      e.l.r2.v = !1;
    }
  });
}
function _n(e) {
  return Ln(Nn, e, !0);
}
function pt(e) {
  return _n(e);
}
function no(e, t = 0) {
  return Ln(Nn | Gr | t, e, !0);
}
function Rn(e) {
  return Ln(Nn | ve, e, !0);
}
function Ri(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Jr, r = de;
    Co(!0), Ao(!0);
    try {
      t.call(null);
    } finally {
      Co(n), Ao(r);
    }
  }
}
function Bn(e) {
  var t = e.dom;
  if (t !== null && da(t), Qr(e), gr(e, 0), ae(e, bn), e.transitions)
    for (const s of e.transitions)
      s.stop();
  Ri(e);
  var n = e.parent;
  if (n !== null && e.f & ve && n.first !== null) {
    var r = e.prev, o = e.next;
    r !== null ? o !== null ? (r.next = o, o.prev = r) : (r.next = null, n.last = r) : o !== null ? (o.prev = null, n.first = o) : (n.first = null, n.last = null);
  }
  e.next = e.prev = e.teardown = e.ctx = e.dom = e.deps = e.parent = // @ts-expect-error
  e.fn = null;
}
function Nr(e, t) {
  var n = [];
  Di(e, n, !0), ma(n, () => {
    Bn(e), t && t();
  });
}
function ma(e, t) {
  var n = e.length;
  if (n > 0) {
    var r = () => --n || t();
    for (var o of e)
      o.out(r);
  } else
    t();
}
function Di(e, t, n) {
  if (!(e.f & hn)) {
    if (e.f ^= hn, e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || n) && t.push(i);
    for (var r = e.first; r !== null; ) {
      var o = r.next, s = (r.f & In) !== 0 || (r.f & ve) !== 0;
      Di(r, t, s ? n : !1), r = o;
    }
  }
}
function Ir(e) {
  Fi(e, !0);
}
function Fi(e, t) {
  if (e.f & hn) {
    e.f ^= hn, yn(e) && Mn(e);
    for (var n = e.first; n !== null; ) {
      var r = n.next, o = (n.f & In) !== 0 || (n.f & ve) !== 0;
      Fi(n, o ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const s of e.transitions)
        (s.is_global || t) && s.in();
  }
}
var Ro;
function ga() {
  if (Ro === void 0) {
    Ro = window;
    var e = Element.prototype;
    e.__click = void 0, e.__className = "", e.__attributes = null, e.__e = void 0, Text.prototype.__nodeValue = " ";
  }
}
function ro() {
  return document.createTextNode("");
}
// @__NO_SIDE_EFFECTS__
function ut(e) {
  return e.firstChild;
}
// @__NO_SIDE_EFFECTS__
function N(e, t) {
  return (
    /** @type {DocumentFragment} */
    e.firstChild
  );
}
// @__NO_SIDE_EFFECTS__
function Nt(e, t = !1) {
  return e.nextSibling;
}
function Mr(e, t, n, r) {
  function o(s) {
    if (r.capture || Lr(t, s), !s.cancelBubble)
      return $r(() => n.call(this, s));
  }
  return e.startsWith("pointer") || e === "wheel" ? gi(() => {
    t.addEventListener(e, o, r);
  }) : t.addEventListener(e, o, r), o;
}
function W(e, t, n, r, o) {
  var s = { capture: r, passive: o }, i = Mr(e, t, n, s);
  (t === document.body || t === window || t === document) && _n(() => () => {
    t.removeEventListener(e, i, s);
  });
}
function Ni(e) {
  for (var t = 0; t < e.length; t++)
    Ii.add(e[t]);
  for (var n of Br)
    n(e);
}
function Lr(e, t) {
  var f;
  var n = e.ownerDocument, r = t.type, o = ((f = t.composedPath) == null ? void 0 : f.call(t)) || [], s = (
    /** @type {null | Element} */
    o[0] || t.target
  );
  t.target !== s && kr(t, "target", {
    configurable: !0,
    value: s
  });
  var i = 0, u = t.__root;
  if (u) {
    var a = o.indexOf(u);
    if (a !== -1 && (e === document || e === /** @type {any} */
    window)) {
      t.__root = e;
      return;
    }
    var c = o.indexOf(e);
    if (c === -1)
      return;
    a <= c && (i = a + 1);
  }
  s = /** @type {Element} */
  o[i] || t.target, kr(t, "currentTarget", {
    configurable: !0,
    get() {
      return s || n;
    }
  });
  function l(d) {
    s = d;
    var m = d.parentNode || /** @type {any} */
    d.host || null;
    try {
      var h = d["__" + r];
      if (h !== void 0 && !/** @type {any} */
      d.disabled)
        if (Fn(h)) {
          var [g, ...v] = h;
          g.apply(d, [t, ...v]);
        } else
          h.call(d, t);
    } finally {
      !t.cancelBubble && m !== e && m !== null && d !== e && l(m);
    }
  }
  try {
    $r(() => l(
      /** @type {Element} */
      s
    ));
  } finally {
    t.__root = e, s = e;
  }
}
const Ii = /* @__PURE__ */ new Set(), Br = /* @__PURE__ */ new Set();
let or = !0;
function Do(e) {
  or = e;
}
function ha(e, t) {
  const n = e.__nodeValue, r = mn(t);
  n !== r && (e.nodeValue = r, e.__nodeValue = r);
}
function _t(e, t, n, r) {
  t === void 0 || t(e, n);
}
function mn(e) {
  return typeof e == "string" ? e : e == null ? "" : e + "";
}
function oo(e, t) {
  const n = t.anchor ?? t.target.appendChild(ro());
  return to(() => pa(e, { ...t, anchor: n }), !1);
}
function pa(e, { target: t, anchor: n, props: r = {}, events: o, context: s, intro: i = !1 }) {
  ga();
  const u = /* @__PURE__ */ new Set(), a = Lr.bind(null, t), c = Lr.bind(null, document), l = (m) => {
    for (let h = 0; h < m.length; h++) {
      const g = m[h];
      u.has(g) || (u.add(g), t.addEventListener(
        g,
        a,
        To.includes(g) ? {
          passive: !0
        } : void 0
      ), document.addEventListener(
        g,
        c,
        To.includes(g) ? {
          passive: !0
        } : void 0
      ));
    }
  };
  l(Ms(Ii)), Br.add(l);
  let f;
  const d = Si(() => (Rn(() => {
    if (s) {
      At({});
      var m = (
        /** @type {import('#client').ComponentContext} */
        ft
      );
      m.c = s;
    }
    o && (r.$$events = o), or = i, f = e(n, r) || {}, or = !0, s && Pt();
  }), () => {
    for (const m of u)
      t.removeEventListener(m, a);
    Br.delete(l), Fo.delete(f);
  }));
  return Fo.set(f, d), f;
}
let Fo = /* @__PURE__ */ new WeakMap();
function mt(e, t, n, r = null, o = !1) {
  var s = null, i = null, u = null, a = o ? In : 0;
  no(() => {
    u !== (u = !!t()) && (u ? (s ? Ir(s) : s = Rn(() => n(e)), i && Nr(i, () => {
      i = null;
    })) : (i ? Ir(i) : r && (i = Rn(() => r(e))), s && Nr(s, () => {
      s = null;
    })));
  }, a);
}
function Ae(e, t, ...n) {
  var r, o;
  no(() => {
    r !== (r = e()) && (o && (Bn(o), o = null), r && (o = Rn(() => (
      /** @type {SnippetFn} */
      r(t, ...n)
    ))));
  }, In);
}
function Mi(e, t, n, r, o, s) {
  let i, u, a = null, c;
  no(() => {
    const l = t() || null, f = l === "svg" ? ai : null;
    l !== i && (c && (l === null ? Nr(c, () => {
      c = null, u = null, a == null || a.remove();
    }) : l === u ? Ir(c) : (Bn(c), Do(!1))), l && l !== u && (c = Rn(() => {
      if (a = f ? document.createElementNS(f, l) : document.createElement(l), r) {
        var d = a.appendChild(ro());
        r(a, d);
      }
      return e.before(a), () => {
        a == null || a.remove();
      };
    })), i = l, i && (u = i), Do(!0));
  });
}
function Dt(e, t, n) {
  Ce(() => {
    var r = se(() => t(e, n == null ? void 0 : n()) || {});
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function ba(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, Ce(() => {
      document.activeElement === n && e.focus();
    });
  }
}
function ya(e, t) {
  var n = e.__attributes ?? (e.__attributes = {});
  n.value !== (n.value = t) && (e.value = t);
}
function jn(e, t, n) {
  n = n == null ? null : n + "";
  var r = e.__attributes ?? (e.__attributes = {});
  r[t] !== (r[t] = n) && (t === "loading" && (e[zs] = n), n === null ? e.removeAttribute(t) : e.setAttribute(t, n));
}
function _a(e, t, n) {
  if (t in e) {
    var r = e[t], o = typeof r == "boolean" && n === "" ? !0 : n;
    (typeof r != "object" || r !== o) && (e[t] = o);
  } else
    jn(e, t, n);
}
function It(e, t, n, r, o) {
  var s = o.length !== 0;
  for (var i in t)
    i in n || (n[i] = null);
  s && !n.class && (n.class = "");
  var u = qs(No, e.nodeName);
  u || Vs(No, e.nodeName, u = Ea(e));
  var a = (
    /** @type {Record<string, unknown>} **/
    e.__attributes ?? (e.__attributes = {})
  ), c = [];
  for (const m in n) {
    let h = n[m];
    if (h !== (t == null ? void 0 : t[m])) {
      var l = m[0] + m[1];
      if (l !== "$$")
        if (l === "on") {
          const g = {};
          let v = m.slice(2);
          var f = Fs.includes(v);
          Is(v) && (v = v.slice(0, -7), g.capture = !0), !f && (t != null && t[m]) && e.removeEventListener(
            v,
            /** @type {any} */
            t[m],
            g
          ), h != null && (f ? (e[`__${v}`] = h, Ni([v])) : t ? n[m] = Mr(v, e, h, g) : c.push([
            m,
            h,
            () => n[m] = Mr(v, e, h, g)
          ]));
        } else if (h == null)
          a[m] = null, e.removeAttribute(m);
        else if (m === "style")
          e.style.cssText = h + "";
        else if (m === "autofocus")
          ba(
            /** @type {HTMLElement} */
            e,
            !!h
          );
        else if (m === "__value" || m === "value")
          e.value = e[m] = e.__value = h;
        else {
          var d = m;
          r && (d = d.toLowerCase(), d = Ns[d] || d), u.includes(d) ? e[d] = h : typeof h != "function" && (s && d === "class" && (h && (h += " "), h += o), jn(e, d, h));
        }
    }
  }
  if (!t) {
    const m = Si(() => {
      Ce(() => {
        if (e.isConnected) {
          for (const [h, g, v] of c)
            n[h] === g && v();
          m();
        }
      });
    });
  }
  return n;
}
function Li(e, t, n, r) {
  if (e.tagName.includes("-")) {
    for (var o in t)
      o in n || (n[o] = null);
    for (o in n)
      _a(e, o, n[o]);
    return n;
  }
  return It(
    /** @type {Element & ElementCSSInlineStyle} */
    e,
    t,
    n,
    e.namespaceURI !== ai,
    r
  );
}
var wa = ["width", "height"], No = /* @__PURE__ */ new Map();
function Ea(e) {
  for (var t = [], n, r = Jn(e); r.constructor.name !== "Element"; ) {
    n = ci(r);
    for (var o in n)
      n[o].set && !wa.includes(o) && t.push(o);
    r = Jn(r);
  }
  return t;
}
function Ta(e, t) {
  var n = e.__className, r = Bi(t);
  (n !== r || ui) && (r === "" ? e.removeAttribute("class") : e.setAttribute("class", r), e.__className = r);
}
function io(e, t) {
  var n = e.__className, r = Bi(t);
  (n !== r || ui) && (t == null ? e.removeAttribute("class") : e.className = r, e.__className = r);
}
function Bi(e) {
  return e ?? "";
}
const ji = typeof window < "u", Oa = ji ? requestAnimationFrame : oe, xa = ji ? () => performance.now() : () => Date.now(), Oe = {
  tick: (
    /** @param {any} _ */
    (e) => Oa(e)
  ),
  now: () => xa(),
  tasks: /* @__PURE__ */ new Set()
};
function Ki(e) {
  Oe.tasks.forEach((t) => {
    t.c(e) || (Oe.tasks.delete(t), t.f());
  }), Oe.tasks.size !== 0 && Oe.tick(Ki);
}
function Ca(e) {
  let t;
  return Oe.tasks.size === 0 && Oe.tick(Ki), {
    promise: new Promise((n) => {
      Oe.tasks.add(t = { c: e, f: n });
    }),
    abort() {
      Oe.tasks.delete(t);
    }
  };
}
function Un(e, t) {
  e.dispatchEvent(new CustomEvent(t));
}
function Aa(e) {
  const t = e.split("-");
  return t.length === 1 ? t[0] : t[0] + t.slice(1).map(
    /** @param {any} word */
    (n) => n[0].toUpperCase() + n.slice(1)
  ).join("");
}
function Pa(e) {
  const t = {}, n = e.split(";");
  for (const r of n) {
    const [o, s] = r.split(":");
    if (!o || s === void 0)
      break;
    const i = Aa(o.trim());
    t[i] = s.trim();
  }
  return t;
}
const ka = (e) => e;
function Gt(e, t, n, r) {
  var o = (e & Ps) !== 0, s = (e & ks) !== 0, i = (e & Ss) !== 0, u = o && s ? "both" : o ? "in" : "out", a, c = t.inert, l, f, d;
  function m() {
    return a ?? (a = n()(t, r == null ? void 0 : r(), { direction: u }));
  }
  var h = {
    is_global: i,
    in() {
      t.inert = c, o ? (Un(t, "introstart"), l = jr(t, m(), f, 1, () => {
        Un(t, "introend"), l = a = void 0;
      })) : (f == null || f.abort(), d == null || d());
    },
    out(_) {
      s ? (t.inert = !0, Un(t, "outrostart"), f = jr(t, m(), l, 0, () => {
        Un(t, "outroend"), f = a = void 0, _ == null || _();
      }), d = f.reset) : _ == null || _();
    },
    stop: () => {
      l == null || l.abort(), f == null || f.abort();
    }
  }, g = (
    /** @type {import('#client').Effect} */
    yt
  );
  if ((g.transitions ?? (g.transitions = [])).push(h), o && or) {
    let _ = i;
    if (!_) {
      for (var v = (
        /** @type {import('#client').Effect | null} */
        g.parent
      ); v && v.f & In; )
        for (; (v = v.parent) && !(v.f & Gr); )
          ;
      _ = !v || (v.f & di) !== 0;
    }
    _ && Ce(() => {
      se(() => h.in());
    });
  }
}
function jr(e, t, n, r, o) {
  if (Us(t)) {
    var s;
    return Ce(() => {
      var M = se(() => t({ direction: r === 1 ? "in" : "out" }));
      s = jr(e, M, n, r, o);
    }), {
      abort: () => s.abort(),
      deactivate: () => s.deactivate(),
      reset: () => s.reset(),
      t: (M) => s.t(M)
    };
  }
  if (n == null || n.deactivate(), !(t != null && t.duration))
    return o == null || o(), {
      abort: oe,
      deactivate: oe,
      reset: oe,
      t: () => r
    };
  var { delay: i = 0, duration: u, css: a, tick: c, easing: l = ka } = t, f = Oe.now() + i, d = (n == null ? void 0 : n.t(f)) ?? 1 - r, m = r - d;
  u *= Math.abs(m);
  var h = f + u, g, v;
  if (a) {
    for (var _ = [], y = Math.ceil(u / 16.666666666666668), C = 0; C <= y; C += 1) {
      var S = d + m * l(C / y), V = a(S, 1 - S);
      _.push(Pa(V));
    }
    g = e.animate(_, {
      delay: i,
      duration: u,
      easing: "linear",
      fill: "forwards"
    }), g.finished.then(() => {
      o == null || o(), r === 1 && g.cancel();
    }).catch((M) => {
      if (g.startTime !== null && g.currentTime !== null)
        throw M;
    });
  } else
    d === 0 && (c == null || c(0, 1)), v = Ca((M) => {
      if (M >= h)
        return c == null || c(r, 1 - r), o == null || o(), !1;
      if (M >= f) {
        var q = d + m * l((M - f) / u);
        c == null || c(q, 1 - q);
      }
      return !0;
    });
  return {
    abort: () => {
      g == null || g.cancel(), v == null || v.abort();
    },
    deactivate: () => {
      o = void 0;
    },
    reset: () => {
      r === 0 && (c == null || c(1, 0));
    },
    t: (M) => {
      var q = d + m * l((M - f) / u);
      return Math.min(1, Math.max(0, q));
    }
  };
}
function Io(e, t) {
  var r;
  var n = e && ((r = e[qt]) == null ? void 0 : r.t);
  return e === t || n === t;
}
function Ft(e, t, n, r) {
  Ce(() => {
    var o, s;
    return _n(() => {
      o = s, s = [], se(() => {
        e !== n(...s) && $r(() => {
          t(e, ...s), o && Io(n(...o), e) && t(null, ...o);
        });
      });
    }), () => {
      gi(() => {
        s && Io(n(...s), e) && t(null, ...s);
      });
    };
  });
}
function ye() {
  const e = (
    /** @type {import('#client').ComponentContextLegacy} */
    ft
  ), t = e.l.u;
  t && (t.b.length && va(() => {
    Mo(e), $n(t.b);
  }), rr(() => {
    const n = se(() => t.m.map(ea));
    return () => {
      for (const r of n)
        typeof r == "function" && r();
    };
  }), t.a.length && rr(() => {
    Mo(e), $n(t.a);
  }));
}
function Mo(e) {
  if (e.l.s)
    for (const t of e.l.s)
      O(t);
  rt(e.s);
}
function J(e, t) {
  var s;
  var n = (
    /** @type {Record<string, Function[] | Function>} */
    (s = e.$$events) == null ? void 0 : s[t.type]
  ), r = Fn(n) ? n.slice() : n == null ? [] : [n];
  for (var o of r)
    o.call(this, t);
}
function wt(e) {
  var n;
  var t = (n = e.$$slots) == null ? void 0 : n.default;
  return t === !0 ? e.children : t;
}
// @__NO_SIDE_EFFECTS__
function $(e, t) {
  var n = (t & Rs) !== 0, r = (t & Ds) !== 0, o;
  return () => (o || (o = fa(e), n || (o = /** @type {Node} */
  o.firstChild)), r ? document.importNode(o, !0) : o.cloneNode(!0));
}
// @__NO_SIDE_EFFECTS__
function Sa(e, t, n = "svg") {
  var r = /* @__PURE__ */ $(`<${n}>${e}</${n}>`, 0), o;
  return () => {
    if (!o) {
      var s = (
        /** @type {Element} */
        r()
      );
      o = /** @type {Element} */
      s.firstChild;
    }
    return o.cloneNode(!0);
  };
}
function j() {
  var e = document.createDocumentFragment(), t = ro();
  return e.append(t), e;
}
function x(e, t) {
  var n = (
    /** @type {import('#client').Effect} */
    yt
  );
  n.dom = t.nodeType === 11 ? (
    /** @type {import('#client').TemplateNode[]} */
    [...t.childNodes]
  ) : (
    /** @type {Element | Comment} */
    t
  ), e.before(
    /** @type {Node} */
    t
  );
}
const Ra = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return O(e.version), t in e.special ? e.special[t]() : e.props[t];
  },
  set(e, t, n) {
    return t in e.special || (e.special[t] = k(
      {
        get [t]() {
          return e.props[t];
        }
      },
      /** @type {string} */
      t,
      si
    )), e.special[t](n), la(e.version), !0;
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
function Yt(e, t) {
  return new Proxy({ props: e, exclude: t, special: {}, version: /* @__PURE__ */ Be(0) }, Ra);
}
function k(e, t, n, r) {
  var _;
  var o = (n & xs) !== 0, s = (n & Cs) !== 0, i = (n & As) !== 0, u = (
    /** @type {V} */
    e[t]
  ), a = (_ = Sr(e, t)) == null ? void 0 : _.set, c = (
    /** @type {V} */
    r
  ), l = !0, f = () => (i && l && (l = !1, c = se(
    /** @type {() => V} */
    r
  )), c);
  u === void 0 && r !== void 0 && (a && s && Qs(), u = f(), a && a(u));
  var d;
  if (s)
    d = () => {
      var y = (
        /** @type {V} */
        e[t]
      );
      return y === void 0 ? f() : (l = !0, y);
    };
  else {
    var m = (o ? Sn : ra)(
      () => (
        /** @type {V} */
        e[t]
      )
    );
    m.f |= Hs, d = () => {
      var y = O(m);
      return y !== void 0 && (c = /** @type {V} */
      void 0), y === void 0 ? c : y;
    };
  }
  if (!(n & si))
    return d;
  if (a)
    return function(y) {
      return arguments.length === 1 ? (a(y), y) : d();
    };
  var h = !1, g = /* @__PURE__ */ ee(u), v = /* @__PURE__ */ Sn(() => {
    var y = d(), C = O(g);
    return h ? (h = !1, C) : g.v = y;
  });
  return o || (v.equals = Zr), function(y) {
    var C = O(v);
    return arguments.length > 0 ? (v.equals(y) || (h = !0, ht(g, y), O(v), v.version++), y) : C;
  };
}
function so(e, t, n) {
  if (e == null)
    return t(void 0), n && n(void 0), oe;
  const r = e.subscribe(
    t,
    // @ts-expect-error
    n
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
function ne(e, t, n) {
  let r = n[t];
  const o = r === void 0;
  o && (r = {
    store: null,
    last_value: null,
    value: /* @__PURE__ */ ee(De),
    unsubscribe: oe
  }, n[t] = r), (o || r.store !== e) && (r.unsubscribe(), r.store = e ?? null, r.unsubscribe = Da(e, r.value));
  const s = O(r.value);
  return s === De ? r.last_value : s;
}
function Da(e, t) {
  return e == null ? (ht(t, void 0), oe) : so(e, (n) => ht(t, n));
}
function _e(e) {
  Fa(() => {
    let t;
    for (t in e)
      e[t].unsubscribe();
  });
}
function Fa(e) {
  Ce(() => () => se(e));
}
function Na(e) {
  return e[e.length - 1];
}
function Ia(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function Fe(e) {
  return Object.keys(e).reduce((t, n) => e[n] === void 0 ? t : t + `${n}:${e[n]};`, "");
}
function Tr(e) {
  return e ? !0 : void 0;
}
Fe({
  position: "absolute",
  opacity: 0,
  "pointer-events": "none",
  margin: 0,
  transform: "translateX(-100%)"
});
function Wi(e) {
  if (e !== null)
    return "";
}
const an = [];
function Je(e, t) {
  return {
    subscribe: Ct(e, t).subscribe
  };
}
function Ma(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function Ct(e, t = oe) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function o(u) {
    if (Ma(e, u) && (e = u, n)) {
      const a = !an.length;
      for (const c of r)
        c[1](), an.push(c, e);
      if (a) {
        for (let c = 0; c < an.length; c += 2)
          an[c][0](an[c + 1]);
        an.length = 0;
      }
    }
  }
  function s(u) {
    o(u(
      /** @type {T} */
      e
    ));
  }
  function i(u, a = oe) {
    const c = [u, a];
    return r.add(c), r.size === 1 && (n = t(o, s) || oe), u(
      /** @type {T} */
      e
    ), () => {
      r.delete(c), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: o, update: s, subscribe: i };
}
function le(e, t, n) {
  const r = !Array.isArray(e), o = r ? [e] : e;
  if (!o.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const s = t.length < 2;
  return Je(n, (i, u) => {
    let a = !1;
    const c = [];
    let l = 0, f = oe;
    const d = () => {
      if (l)
        return;
      f();
      const h = t(r ? c[0] : c, i, u);
      s ? i(h) : f = typeof h == "function" ? h : oe;
    }, m = o.map(
      (h, g) => so(
        h,
        (v) => {
          c[g] = v, l &= ~(1 << g), a && d();
        },
        () => {
          l |= 1 << g;
        }
      )
    );
    return a = !0, d(), function() {
      $n(m), f(), a = !1;
    };
  });
}
function Lo(e) {
  return {
    // @ts-expect-error TODO i suspect the bind is unnecessary
    subscribe: e.subscribe.bind(e)
  };
}
function ao(e) {
  let t;
  return so(e, (n) => t = n)(), t;
}
function Bo(e) {
  function t(n) {
    return n(e), () => {
    };
  }
  return { subscribe: t };
}
const Hn = (e) => new Proxy(e, {
  get(t, n, r) {
    return Reflect.get(t, n, r);
  },
  ownKeys(t) {
    return Reflect.ownKeys(t).filter((n) => n !== "action");
  }
}), jo = (e) => typeof e == "function";
xt("empty");
function xt(e, t) {
  const { stores: n, action: r, returned: o } = t ?? {}, s = (() => {
    if (n && o)
      return le(n, (u) => {
        const a = o(u);
        if (jo(a)) {
          const c = (...l) => Hn({
            ...a(...l),
            [`data-melt-${e}`]: "",
            action: r ?? gt
          });
          return c.action = r ?? gt, c;
        }
        return Hn({
          ...a,
          [`data-melt-${e}`]: "",
          action: r ?? gt
        });
      });
    {
      const u = o, a = u == null ? void 0 : u();
      if (jo(a)) {
        const c = (...l) => Hn({
          ...a(...l),
          [`data-melt-${e}`]: "",
          action: r ?? gt
        });
        return c.action = r ?? gt, Bo(c);
      }
      return Bo(Hn({
        ...a,
        [`data-melt-${e}`]: "",
        action: r ?? gt
      }));
    }
  })(), i = r ?? (() => {
  });
  return i.subscribe = s.subscribe, i;
}
function Vi(e) {
  const t = (s) => s ? `${e}-${s}` : e, n = (s) => `data-melt-${e}${s ? `-${s}` : ""}`, r = (s) => `[data-melt-${e}${s ? `-${s}` : ""}]`;
  return {
    name: t,
    attribute: n,
    selector: r,
    getEl: (s) => document.querySelector(r(s))
  };
}
const Ne = typeof document < "u", qi = (e) => typeof e == "function";
function uo(e) {
  return e instanceof Element;
}
function L(e) {
  return e instanceof HTMLElement;
}
function Te(e) {
  const t = e.getAttribute("aria-disabled"), n = e.getAttribute("disabled"), r = e.hasAttribute("data-disabled");
  return !!(t === "true" || n !== null || r);
}
function La(e) {
  return e !== null && typeof e == "object";
}
function Ba(e) {
  return La(e) && "subscribe" in e;
}
function Ut(...e) {
  return (...t) => {
    for (const n of e)
      typeof n == "function" && n(...t);
  };
}
function gt() {
}
function Ht(e, t, n, r) {
  const o = Array.isArray(t) ? t : [t];
  return o.forEach((s) => e.addEventListener(s, n, r)), () => {
    o.forEach((s) => e.removeEventListener(s, n, r));
  };
}
function nt(e, t, n, r) {
  const o = Array.isArray(t) ? t : [t];
  if (typeof n == "function") {
    const s = Ka((i) => n(i));
    return o.forEach((i) => e.addEventListener(i, s, r)), () => {
      o.forEach((i) => e.removeEventListener(i, s, r));
    };
  }
  return () => void 0;
}
function ja(e) {
  const t = e.currentTarget;
  if (!L(t))
    return null;
  const n = new CustomEvent(`m-${e.type}`, {
    detail: {
      originalEvent: e
    },
    cancelable: !0
  });
  return t.dispatchEvent(n), n;
}
function Ka(e) {
  return (t) => {
    const n = ja(t);
    if (!(n != null && n.defaultPrevented))
      return e(t);
  };
}
function Wa(e) {
  e.setAttribute("data-highlighted", "");
}
function un(e) {
  e.removeAttribute("data-highlighted");
}
function Ui(e) {
  ft === null && mr(), ft.l !== null ? Ha(ft).m.push(e) : rr(() => {
    const t = se(e);
    if (typeof t == "function")
      return (
        /** @type {() => void} */
        t
      );
  });
}
function Va(e) {
  ft === null && mr(), Ui(() => () => se(e));
}
function qa(e, t, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(e, { detail: t, bubbles: n, cancelable: r });
}
function Ua() {
  const e = ft;
  return e === null && mr(), (t, n, r) => {
    var s;
    const o = (
      /** @type {Record<string, Function | Function[]>} */
      (s = e.s.$$events) == null ? void 0 : s[
        /** @type {any} */
        t
      ]
    );
    if (o) {
      const i = Fn(o) ? o.slice() : [o], u = qa(
        /** @type {string} */
        t,
        n,
        r
      );
      for (const a of i)
        a.call(e.x, u);
      return !u.defaultPrevented;
    }
    return !0;
  };
}
function Ha(e) {
  var t = (
    /** @type {import('#client').ComponentContextLegacy} */
    e.l
  );
  return t.u ?? (t.u = { a: [], b: [], m: [] });
}
const Ko = (e) => {
  try {
    Ui(e);
  } catch {
    return e;
  }
}, za = (e) => {
  try {
    Va(e);
  } catch {
    return e;
  }
};
function pr(e, ...t) {
  const n = {};
  for (const r of Object.keys(e))
    t.includes(r) || (n[r] = e[r]);
  return n;
}
function St(e) {
  return {
    ...e,
    get: () => ao(e)
  };
}
St.writable = function(e) {
  const t = Ct(e);
  let n = e;
  return {
    subscribe: t.subscribe,
    set(r) {
      t.set(r), n = r;
    },
    update(r) {
      const o = r(n);
      t.set(o), n = o;
    },
    get() {
      return n;
    }
  };
};
St.derived = function(e, t) {
  const n = /* @__PURE__ */ new Map(), r = () => {
    const s = Array.isArray(e) ? e.map((i) => i.get()) : e.get();
    return t(s);
  };
  return {
    get: r,
    subscribe: (s) => {
      const i = [];
      return (Array.isArray(e) ? e : [e]).forEach((a) => {
        i.push(a.subscribe(() => {
          s(r());
        }));
      }), s(r()), n.set(s, i), () => {
        const a = n.get(s);
        if (a)
          for (const c of a)
            c();
        n.delete(s);
      };
    }
  };
};
const Pn = (e, t) => {
  const n = St(e), r = (s, i) => {
    n.update((u) => {
      const a = s(u);
      let c = a;
      return t && (c = t({ curr: u, next: a })), i == null || i(c), c;
    });
  };
  return {
    ...n,
    update: r,
    set: (s) => {
      r(() => s);
    }
  };
};
function xe(e) {
  return new Promise((t) => setTimeout(t, e));
}
let Ya = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", Ga = (e = 21) => {
  let t = "", n = e;
  for (; n--; )
    t += Ya[Math.random() * 64 | 0];
  return t;
};
function Xa() {
  return Ga(10);
}
function Kr(e) {
  return e.reduce((t, n) => (t[n] = Xa(), t), {});
}
const vt = {
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
}, Za = [vt.ARROW_DOWN, vt.PAGE_UP, vt.HOME], Ja = [vt.ARROW_UP, vt.PAGE_DOWN, vt.END], Wo = [...Za, ...Ja], ir = [vt.ENTER, vt.SPACE];
function Qa(e, t = 500) {
  let n = null;
  return function(...r) {
    const o = () => {
      n = null, e(...r);
    };
    n && clearTimeout(n), n = setTimeout(o, t);
  };
}
const Hi = () => typeof window < "u";
function $a() {
  const e = navigator.userAgentData;
  return (e == null ? void 0 : e.platform) ?? navigator.platform;
}
const zi = (e) => Hi() && e.test($a().toLowerCase()), tu = () => Hi() && !!navigator.maxTouchPoints, eu = () => zi(/^mac/) && !tu(), nu = () => zi(/mac|iphone|ipad|ipod/i), ru = () => nu() && !eu(), Or = "data-melt-scroll-lock";
function Vo(e, t) {
  if (!e)
    return;
  const n = e.style.cssText;
  return Object.assign(e.style, t), () => {
    e.style.cssText = n;
  };
}
function ou(e, t, n) {
  if (!e)
    return;
  const r = e.style.getPropertyValue(t);
  return e.style.setProperty(t, n), () => {
    r ? e.style.setProperty(t, r) : e.style.removeProperty(t);
  };
}
function iu(e) {
  const t = e.getBoundingClientRect().left;
  return Math.round(t) + e.scrollLeft ? "paddingLeft" : "paddingRight";
}
function Yi(e) {
  const t = document, n = t.defaultView ?? window, { documentElement: r, body: o } = t;
  if (o.hasAttribute(Or))
    return gt;
  o.setAttribute(Or, "");
  const i = n.innerWidth - r.clientWidth, u = () => ou(r, "--scrollbar-width", `${i}px`), a = iu(r), c = n.getComputedStyle(o)[a], l = () => Vo(o, {
    overflow: "hidden",
    [a]: `calc(${c} + ${i}px)`
  }), f = () => {
    const { scrollX: m, scrollY: h, visualViewport: g } = n, v = (g == null ? void 0 : g.offsetLeft) ?? 0, _ = (g == null ? void 0 : g.offsetTop) ?? 0, y = Vo(o, {
      position: "fixed",
      overflow: "hidden",
      top: `${-(h - Math.floor(_))}px`,
      left: `${-(m - Math.floor(v))}px`,
      right: "0",
      [a]: `calc(${c} + ${i}px)`
    });
    return () => {
      y == null || y(), n.scrollTo(m, h);
    };
  }, d = [u(), ru() ? f() : l()];
  return () => {
    d.forEach((m) => m == null ? void 0 : m()), o.removeAttribute(Or);
  };
}
function qo(e) {
  const { open: t, forceVisible: n, activeTrigger: r } = e;
  return le([t, n, r], ([o, s, i]) => (o || s) && i !== null);
}
function Kt(e, t) {
  let n;
  const r = le(e, (s) => {
    n == null || n(), n = t(s);
  }).subscribe(gt), o = () => {
    r(), n == null || n();
  };
  return za(o), o;
}
function Qe(e) {
  const t = {};
  return Object.keys(e).forEach((n) => {
    const r = n, o = e[r];
    t[r] = St(Ct(o));
  }), t;
}
function Vt(e) {
  Ne && xe(1).then(() => {
    const t = document.activeElement;
    !L(t) || t === e || (t.tabIndex = -1, e && (e.tabIndex = 0, e.focus()));
  });
}
function Gi() {
  return Array.from(document.querySelectorAll('a[href]:not([tabindex="-1"]), button:not([disabled]):not([tabindex="-1"]), input:not([disabled]):not([tabindex="-1"]), select:not([disabled]):not([tabindex="-1"]), textarea:not([disabled]):not([tabindex="-1"]), [tabindex]:not([tabindex="-1"])'));
}
function su(e) {
  const t = Gi(), r = t.indexOf(e) + 1, o = t[r];
  return r < t.length && L(o) ? o : null;
}
function au(e) {
  const t = Gi(), r = t.indexOf(e) - 1, o = t[r];
  return r >= 0 && L(o) ? o : null;
}
const uu = /* @__PURE__ */ new Set(["Shift", "Control", "Alt", "Meta", "CapsLock", "NumLock"]), cu = {
  onMatch: Vt,
  getCurrentItem: () => document.activeElement
};
function lu(e = {}) {
  const t = { ...cu, ...e }, n = St(Ct([])), r = Qa(() => {
    n.update(() => []);
  });
  return {
    typed: n,
    resetTyped: r,
    handleTypeaheadSearch: (s, i) => {
      if (uu.has(s))
        return;
      const u = t.getCurrentItem(), a = ao(n);
      if (!Array.isArray(a))
        return;
      a.push(s.toLowerCase()), n.set(a);
      const c = i.filter((v) => !(v.getAttribute("disabled") === "true" || v.getAttribute("aria-disabled") === "true" || v.hasAttribute("data-disabled"))), f = a.length > 1 && a.every((v) => v === a[0]) ? a[0] : a.join(""), d = L(u) ? c.indexOf(u) : -1;
      let m = Ia(c, Math.max(d, 0));
      f.length === 1 && (m = m.filter((v) => v !== u));
      const g = m.find((v) => (v == null ? void 0 : v.innerText) && v.innerText.toLowerCase().startsWith(f.toLowerCase()));
      L(g) && g !== u && t.onMatch(g), r();
    }
  };
}
function fu(e) {
  let t = e.parentElement;
  for (; L(t) && !t.hasAttribute("data-portal"); )
    t = t.parentElement;
  return t || "body";
}
function Wr(e, t) {
  return t !== void 0 ? t : fu(e) === "body" ? document.body : null;
}
async function Vr(e) {
  const { prop: t, defaultEl: n } = e;
  if (await Promise.all([xe(1), Ze]), t === void 0) {
    n == null || n.focus();
    return;
  }
  const r = qi(t) ? t(n) : t;
  if (typeof r == "string") {
    const o = document.querySelector(r);
    if (!L(o))
      return;
    o.focus();
  } else
    L(r) && r.focus();
}
Je(void 0, (e) => {
  function t(r) {
    e(r), e(void 0);
  }
  return Ht(document, "pointerup", t, {
    passive: !1,
    capture: !0
  });
});
const du = Je(void 0, (e) => {
  function t(r) {
    r && r.key === vt.ESCAPE && e(r), e(void 0);
  }
  return Ht(document, "keydown", t, {
    passive: !1
  });
}), sr = (e, t = {}) => {
  let n = gt;
  function r(o = {}) {
    n();
    const s = { enabled: !0, ...o }, i = Ba(s.enabled) ? s.enabled : Je(s.enabled);
    n = Ut(
      // Handle escape keydowns
      du.subscribe((u) => {
        var c;
        if (!u || !ao(i))
          return;
        const a = u.target;
        if (!(!L(a) || a.closest("[data-escapee]") !== e)) {
          if (u.preventDefault(), s.ignore) {
            if (qi(s.ignore)) {
              if (s.ignore(u))
                return;
            } else if (Array.isArray(s.ignore) && s.ignore.length > 0 && s.ignore.some((l) => l && a === l))
              return;
          }
          (c = s.handler) == null || c.call(s, u);
        }
      }),
      Kt(i, (u) => {
        u ? e.dataset.escapee = "" : delete e.dataset.escapee;
      })
    );
  }
  return r(t), {
    update: r,
    destroy() {
      e.removeAttribute("data-escapee"), n();
    }
  };
}, fe = Math.min, $t = Math.max, ar = Math.round, zn = Math.floor, je = (e) => ({
  x: e,
  y: e
}), vu = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, mu = {
  start: "end",
  end: "start"
};
function qr(e, t, n) {
  return $t(e, fe(t, n));
}
function wn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Ke(e) {
  return e.split("-")[0];
}
function En(e) {
  return e.split("-")[1];
}
function Xi(e) {
  return e === "x" ? "y" : "x";
}
function co(e) {
  return e === "y" ? "height" : "width";
}
function Kn(e) {
  return ["top", "bottom"].includes(Ke(e)) ? "y" : "x";
}
function lo(e) {
  return Xi(Kn(e));
}
function gu(e, t, n) {
  n === void 0 && (n = !1);
  const r = En(e), o = lo(e), s = co(o);
  let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[s] > t.floating[s] && (i = ur(i)), [i, ur(i)];
}
function hu(e) {
  const t = ur(e);
  return [Ur(e), t, Ur(t)];
}
function Ur(e) {
  return e.replace(/start|end/g, (t) => mu[t]);
}
function pu(e, t, n) {
  const r = ["left", "right"], o = ["right", "left"], s = ["top", "bottom"], i = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
      return t ? s : i;
    default:
      return [];
  }
}
function bu(e, t, n, r) {
  const o = En(e);
  let s = pu(Ke(e), n === "start", r);
  return o && (s = s.map((i) => i + "-" + o), t && (s = s.concat(s.map(Ur)))), s;
}
function ur(e) {
  return e.replace(/left|right|bottom|top/g, (t) => vu[t]);
}
function yu(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Zi(e) {
  return typeof e != "number" ? yu(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function cr(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: o
  } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n
  };
}
function Uo(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const s = Kn(t), i = lo(t), u = co(i), a = Ke(t), c = s === "y", l = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, d = r[u] / 2 - o[u] / 2;
  let m;
  switch (a) {
    case "top":
      m = {
        x: l,
        y: r.y - o.height
      };
      break;
    case "bottom":
      m = {
        x: l,
        y: r.y + r.height
      };
      break;
    case "right":
      m = {
        x: r.x + r.width,
        y: f
      };
      break;
    case "left":
      m = {
        x: r.x - o.width,
        y: f
      };
      break;
    default:
      m = {
        x: r.x,
        y: r.y
      };
  }
  switch (En(t)) {
    case "start":
      m[i] -= d * (n && c ? -1 : 1);
      break;
    case "end":
      m[i] += d * (n && c ? -1 : 1);
      break;
  }
  return m;
}
const _u = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: s = [],
    platform: i
  } = n, u = s.filter(Boolean), a = await (i.isRTL == null ? void 0 : i.isRTL(t));
  let c = await i.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: l,
    y: f
  } = Uo(c, r, a), d = r, m = {}, h = 0;
  for (let g = 0; g < u.length; g++) {
    const {
      name: v,
      fn: _
    } = u[g], {
      x: y,
      y: C,
      data: S,
      reset: V
    } = await _({
      x: l,
      y: f,
      initialPlacement: r,
      placement: d,
      strategy: o,
      middlewareData: m,
      rects: c,
      platform: i,
      elements: {
        reference: e,
        floating: t
      }
    });
    l = y ?? l, f = C ?? f, m = {
      ...m,
      [v]: {
        ...m[v],
        ...S
      }
    }, V && h <= 50 && (h++, typeof V == "object" && (V.placement && (d = V.placement), V.rects && (c = V.rects === !0 ? await i.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : V.rects), {
      x: l,
      y: f
    } = Uo(c, d, a)), g = -1);
  }
  return {
    x: l,
    y: f,
    placement: d,
    strategy: o,
    middlewareData: m
  };
};
async function fo(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: s,
    rects: i,
    elements: u,
    strategy: a
  } = e, {
    boundary: c = "clippingAncestors",
    rootBoundary: l = "viewport",
    elementContext: f = "floating",
    altBoundary: d = !1,
    padding: m = 0
  } = wn(t, e), h = Zi(m), v = u[d ? f === "floating" ? "reference" : "floating" : f], _ = cr(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(v))) == null || n ? v : v.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(u.floating)),
    boundary: c,
    rootBoundary: l,
    strategy: a
  })), y = f === "floating" ? {
    x: r,
    y: o,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, C = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u.floating)), S = await (s.isElement == null ? void 0 : s.isElement(C)) ? await (s.getScale == null ? void 0 : s.getScale(C)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, V = cr(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: u,
    rect: y,
    offsetParent: C,
    strategy: a
  }) : y);
  return {
    top: (_.top - V.top + h.top) / S.y,
    bottom: (V.bottom - _.bottom + h.bottom) / S.y,
    left: (_.left - V.left + h.left) / S.x,
    right: (V.right - _.right + h.right) / S.x
  };
}
const wu = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: s,
      platform: i,
      elements: u,
      middlewareData: a
    } = t, {
      element: c,
      padding: l = 0
    } = wn(e, t) || {};
    if (c == null)
      return {};
    const f = Zi(l), d = {
      x: n,
      y: r
    }, m = lo(o), h = co(m), g = await i.getDimensions(c), v = m === "y", _ = v ? "top" : "left", y = v ? "bottom" : "right", C = v ? "clientHeight" : "clientWidth", S = s.reference[h] + s.reference[m] - d[m] - s.floating[h], V = d[m] - s.reference[m], M = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(c));
    let q = M ? M[C] : 0;
    (!q || !await (i.isElement == null ? void 0 : i.isElement(M))) && (q = u.floating[C] || s.floating[h]);
    const z = S / 2 - V / 2, Y = q / 2 - g[h] / 2 - 1, et = fe(f[_], Y), T = fe(f[y], Y), p = et, b = q - g[h] - T, A = q / 2 - g[h] / 2 + z, E = qr(p, A, b), R = !a.arrow && En(o) != null && A !== E && s.reference[h] / 2 - (A < p ? et : T) - g[h] / 2 < 0, K = R ? A < p ? A - p : A - b : 0;
    return {
      [m]: d[m] + K,
      data: {
        [m]: E,
        centerOffset: A - E - K,
        ...R && {
          alignmentOffset: K
        }
      },
      reset: R
    };
  }
}), Eu = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: s,
        rects: i,
        initialPlacement: u,
        platform: a,
        elements: c
      } = t, {
        mainAxis: l = !0,
        crossAxis: f = !0,
        fallbackPlacements: d,
        fallbackStrategy: m = "bestFit",
        fallbackAxisSideDirection: h = "none",
        flipAlignment: g = !0,
        ...v
      } = wn(e, t);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const _ = Ke(o), y = Ke(u) === u, C = await (a.isRTL == null ? void 0 : a.isRTL(c.floating)), S = d || (y || !g ? [ur(u)] : hu(u));
      !d && h !== "none" && S.push(...bu(u, g, h, C));
      const V = [u, ...S], M = await fo(t, v), q = [];
      let z = ((r = s.flip) == null ? void 0 : r.overflows) || [];
      if (l && q.push(M[_]), f) {
        const p = gu(o, i, C);
        q.push(M[p[0]], M[p[1]]);
      }
      if (z = [...z, {
        placement: o,
        overflows: q
      }], !q.every((p) => p <= 0)) {
        var Y, et;
        const p = (((Y = s.flip) == null ? void 0 : Y.index) || 0) + 1, b = V[p];
        if (b)
          return {
            data: {
              index: p,
              overflows: z
            },
            reset: {
              placement: b
            }
          };
        let A = (et = z.filter((E) => E.overflows[0] <= 0).sort((E, R) => E.overflows[1] - R.overflows[1])[0]) == null ? void 0 : et.placement;
        if (!A)
          switch (m) {
            case "bestFit": {
              var T;
              const E = (T = z.map((R) => [R.placement, R.overflows.filter((K) => K > 0).reduce((K, P) => K + P, 0)]).sort((R, K) => R[1] - K[1])[0]) == null ? void 0 : T[0];
              E && (A = E);
              break;
            }
            case "initialPlacement":
              A = u;
              break;
          }
        if (o !== A)
          return {
            reset: {
              placement: A
            }
          };
      }
      return {};
    }
  };
};
async function Tu(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), i = Ke(n), u = En(n), a = Kn(n) === "y", c = ["left", "top"].includes(i) ? -1 : 1, l = s && a ? -1 : 1, f = wn(t, e);
  let {
    mainAxis: d,
    crossAxis: m,
    alignmentAxis: h
  } = typeof f == "number" ? {
    mainAxis: f,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...f
  };
  return u && typeof h == "number" && (m = u === "end" ? h * -1 : h), a ? {
    x: m * l,
    y: d * c
  } : {
    x: d * c,
    y: m * l
  };
}
const Ou = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: s,
        placement: i,
        middlewareData: u
      } = t, a = await Tu(t, e);
      return i === ((n = u.offset) == null ? void 0 : n.placement) && (r = u.arrow) != null && r.alignmentOffset ? {} : {
        x: o + a.x,
        y: s + a.y,
        data: {
          ...a,
          placement: i
        }
      };
    }
  };
}, xu = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: s = !0,
        crossAxis: i = !1,
        limiter: u = {
          fn: (v) => {
            let {
              x: _,
              y
            } = v;
            return {
              x: _,
              y
            };
          }
        },
        ...a
      } = wn(e, t), c = {
        x: n,
        y: r
      }, l = await fo(t, a), f = Kn(Ke(o)), d = Xi(f);
      let m = c[d], h = c[f];
      if (s) {
        const v = d === "y" ? "top" : "left", _ = d === "y" ? "bottom" : "right", y = m + l[v], C = m - l[_];
        m = qr(y, m, C);
      }
      if (i) {
        const v = f === "y" ? "top" : "left", _ = f === "y" ? "bottom" : "right", y = h + l[v], C = h - l[_];
        h = qr(y, h, C);
      }
      const g = u.fn({
        ...t,
        [d]: m,
        [f]: h
      });
      return {
        ...g,
        data: {
          x: g.x - n,
          y: g.y - r
        }
      };
    }
  };
}, Cu = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      const {
        placement: n,
        rects: r,
        platform: o,
        elements: s
      } = t, {
        apply: i = () => {
        },
        ...u
      } = wn(e, t), a = await fo(t, u), c = Ke(n), l = En(n), f = Kn(n) === "y", {
        width: d,
        height: m
      } = r.floating;
      let h, g;
      c === "top" || c === "bottom" ? (h = c, g = l === (await (o.isRTL == null ? void 0 : o.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (g = c, h = l === "end" ? "top" : "bottom");
      const v = m - a.top - a.bottom, _ = d - a.left - a.right, y = fe(m - a[h], v), C = fe(d - a[g], _), S = !t.middlewareData.shift;
      let V = y, M = C;
      if (f ? M = l || S ? fe(C, _) : _ : V = l || S ? fe(y, v) : v, S && !l) {
        const z = $t(a.left, 0), Y = $t(a.right, 0), et = $t(a.top, 0), T = $t(a.bottom, 0);
        f ? M = d - 2 * (z !== 0 || Y !== 0 ? z + Y : $t(a.left, a.right)) : V = m - 2 * (et !== 0 || T !== 0 ? et + T : $t(a.top, a.bottom));
      }
      await i({
        ...t,
        availableWidth: M,
        availableHeight: V
      });
      const q = await o.getDimensions(s.floating);
      return d !== q.width || m !== q.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Tn(e) {
  return Ji(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function te(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Pe(e) {
  var t;
  return (t = (Ji(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Ji(e) {
  return e instanceof Node || e instanceof te(e).Node;
}
function he(e) {
  return e instanceof Element || e instanceof te(e).Element;
}
function pe(e) {
  return e instanceof HTMLElement || e instanceof te(e).HTMLElement;
}
function Ho(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof te(e).ShadowRoot;
}
function Wn(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = ie(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function Au(e) {
  return ["table", "td", "th"].includes(Tn(e));
}
function vo(e) {
  const t = mo(), n = ie(e);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function Pu(e) {
  let t = We(e);
  for (; pe(t) && !pn(t); ) {
    if (vo(t))
      return t;
    t = We(t);
  }
  return null;
}
function mo() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function pn(e) {
  return ["html", "body", "#document"].includes(Tn(e));
}
function ie(e) {
  return te(e).getComputedStyle(e);
}
function br(e) {
  return he(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.pageXOffset,
    scrollTop: e.pageYOffset
  };
}
function We(e) {
  if (Tn(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Ho(e) && e.host || // Fallback.
    Pe(e)
  );
  return Ho(t) ? t.host : t;
}
function Qi(e) {
  const t = We(e);
  return pn(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : pe(t) && Wn(t) ? t : Qi(t);
}
function Dn(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Qi(e), s = o === ((r = e.ownerDocument) == null ? void 0 : r.body), i = te(o);
  return s ? t.concat(i, i.visualViewport || [], Wn(o) ? o : [], i.frameElement && n ? Dn(i.frameElement) : []) : t.concat(o, Dn(o, [], n));
}
function $i(e) {
  const t = ie(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = pe(e), s = o ? e.offsetWidth : n, i = o ? e.offsetHeight : r, u = ar(n) !== s || ar(r) !== i;
  return u && (n = s, r = i), {
    width: n,
    height: r,
    $: u
  };
}
function go(e) {
  return he(e) ? e : e.contextElement;
}
function gn(e) {
  const t = go(e);
  if (!pe(t))
    return je(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: s
  } = $i(t);
  let i = (s ? ar(n.width) : n.width) / r, u = (s ? ar(n.height) : n.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!u || !Number.isFinite(u)) && (u = 1), {
    x: i,
    y: u
  };
}
const ku = /* @__PURE__ */ je(0);
function ts(e) {
  const t = te(e);
  return !mo() || !t.visualViewport ? ku : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function Su(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== te(e) ? !1 : t;
}
function en(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), s = go(e);
  let i = je(1);
  t && (r ? he(r) && (i = gn(r)) : i = gn(e));
  const u = Su(s, n, r) ? ts(s) : je(0);
  let a = (o.left + u.x) / i.x, c = (o.top + u.y) / i.y, l = o.width / i.x, f = o.height / i.y;
  if (s) {
    const d = te(s), m = r && he(r) ? te(r) : r;
    let h = d, g = h.frameElement;
    for (; g && r && m !== h; ) {
      const v = gn(g), _ = g.getBoundingClientRect(), y = ie(g), C = _.left + (g.clientLeft + parseFloat(y.paddingLeft)) * v.x, S = _.top + (g.clientTop + parseFloat(y.paddingTop)) * v.y;
      a *= v.x, c *= v.y, l *= v.x, f *= v.y, a += C, c += S, h = te(g), g = h.frameElement;
    }
  }
  return cr({
    width: l,
    height: f,
    x: a,
    y: c
  });
}
const Ru = [":popover-open", ":modal"];
function ho(e) {
  return Ru.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Du(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const s = o === "fixed", i = Pe(r), u = t ? ho(t.floating) : !1;
  if (r === i || u && s)
    return n;
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = je(1);
  const l = je(0), f = pe(r);
  if ((f || !f && !s) && ((Tn(r) !== "body" || Wn(i)) && (a = br(r)), pe(r))) {
    const d = en(r);
    c = gn(r), l.x = d.x + r.clientLeft, l.y = d.y + r.clientTop;
  }
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - a.scrollLeft * c.x + l.x,
    y: n.y * c.y - a.scrollTop * c.y + l.y
  };
}
function Fu(e) {
  return Array.from(e.getClientRects());
}
function es(e) {
  return en(Pe(e)).left + br(e).scrollLeft;
}
function Nu(e) {
  const t = Pe(e), n = br(e), r = e.ownerDocument.body, o = $t(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), s = $t(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + es(e);
  const u = -n.scrollTop;
  return ie(r).direction === "rtl" && (i += $t(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: s,
    x: i,
    y: u
  };
}
function Iu(e, t) {
  const n = te(e), r = Pe(e), o = n.visualViewport;
  let s = r.clientWidth, i = r.clientHeight, u = 0, a = 0;
  if (o) {
    s = o.width, i = o.height;
    const c = mo();
    (!c || c && t === "fixed") && (u = o.offsetLeft, a = o.offsetTop);
  }
  return {
    width: s,
    height: i,
    x: u,
    y: a
  };
}
function Mu(e, t) {
  const n = en(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, s = pe(e) ? gn(e) : je(1), i = e.clientWidth * s.x, u = e.clientHeight * s.y, a = o * s.x, c = r * s.y;
  return {
    width: i,
    height: u,
    x: a,
    y: c
  };
}
function zo(e, t, n) {
  let r;
  if (t === "viewport")
    r = Iu(e, n);
  else if (t === "document")
    r = Nu(Pe(e));
  else if (he(t))
    r = Mu(t, n);
  else {
    const o = ts(e);
    r = {
      ...t,
      x: t.x - o.x,
      y: t.y - o.y
    };
  }
  return cr(r);
}
function ns(e, t) {
  const n = We(e);
  return n === t || !he(n) || pn(n) ? !1 : ie(n).position === "fixed" || ns(n, t);
}
function Lu(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Dn(e, [], !1).filter((u) => he(u) && Tn(u) !== "body"), o = null;
  const s = ie(e).position === "fixed";
  let i = s ? We(e) : e;
  for (; he(i) && !pn(i); ) {
    const u = ie(i), a = vo(i);
    !a && u.position === "fixed" && (o = null), (s ? !a && !o : !a && u.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Wn(i) && !a && ns(e, i)) ? r = r.filter((l) => l !== i) : o = u, i = We(i);
  }
  return t.set(e, r), r;
}
function Bu(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const i = [...n === "clippingAncestors" ? ho(t) ? [] : Lu(t, this._c) : [].concat(n), r], u = i[0], a = i.reduce((c, l) => {
    const f = zo(t, l, o);
    return c.top = $t(f.top, c.top), c.right = fe(f.right, c.right), c.bottom = fe(f.bottom, c.bottom), c.left = $t(f.left, c.left), c;
  }, zo(t, u, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top
  };
}
function ju(e) {
  const {
    width: t,
    height: n
  } = $i(e);
  return {
    width: t,
    height: n
  };
}
function Ku(e, t, n) {
  const r = pe(t), o = Pe(t), s = n === "fixed", i = en(e, !0, s, t);
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const a = je(0);
  if (r || !r && !s)
    if ((Tn(t) !== "body" || Wn(o)) && (u = br(t)), r) {
      const f = en(t, !0, s, t);
      a.x = f.x + t.clientLeft, a.y = f.y + t.clientTop;
    } else
      o && (a.x = es(o));
  const c = i.left + u.scrollLeft - a.x, l = i.top + u.scrollTop - a.y;
  return {
    x: c,
    y: l,
    width: i.width,
    height: i.height
  };
}
function xr(e) {
  return ie(e).position === "static";
}
function Yo(e, t) {
  return !pe(e) || ie(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function rs(e, t) {
  const n = te(e);
  if (ho(e))
    return n;
  if (!pe(e)) {
    let o = We(e);
    for (; o && !pn(o); ) {
      if (he(o) && !xr(o))
        return o;
      o = We(o);
    }
    return n;
  }
  let r = Yo(e, t);
  for (; r && Au(r) && xr(r); )
    r = Yo(r, t);
  return r && pn(r) && xr(r) && !vo(r) ? n : r || Pu(e) || n;
}
const Wu = async function(e) {
  const t = this.getOffsetParent || rs, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: Ku(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function Vu(e) {
  return ie(e).direction === "rtl";
}
const qu = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Du,
  getDocumentElement: Pe,
  getClippingRect: Bu,
  getOffsetParent: rs,
  getElementRects: Wu,
  getClientRects: Fu,
  getDimensions: ju,
  getScale: gn,
  isElement: he,
  isRTL: Vu
};
function Uu(e, t) {
  let n = null, r;
  const o = Pe(e);
  function s() {
    var u;
    clearTimeout(r), (u = n) == null || u.disconnect(), n = null;
  }
  function i(u, a) {
    u === void 0 && (u = !1), a === void 0 && (a = 1), s();
    const {
      left: c,
      top: l,
      width: f,
      height: d
    } = e.getBoundingClientRect();
    if (u || t(), !f || !d)
      return;
    const m = zn(l), h = zn(o.clientWidth - (c + f)), g = zn(o.clientHeight - (l + d)), v = zn(c), y = {
      rootMargin: -m + "px " + -h + "px " + -g + "px " + -v + "px",
      threshold: $t(0, fe(1, a)) || 1
    };
    let C = !0;
    function S(V) {
      const M = V[0].intersectionRatio;
      if (M !== a) {
        if (!C)
          return i();
        M ? i(!1, M) : r = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      C = !1;
    }
    try {
      n = new IntersectionObserver(S, {
        ...y,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(S, y);
    }
    n.observe(e);
  }
  return i(!0), s;
}
function Hu(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: u = typeof IntersectionObserver == "function",
    animationFrame: a = !1
  } = r, c = go(e), l = o || s ? [...c ? Dn(c) : [], ...Dn(t)] : [];
  l.forEach((_) => {
    o && _.addEventListener("scroll", n, {
      passive: !0
    }), s && _.addEventListener("resize", n);
  });
  const f = c && u ? Uu(c, n) : null;
  let d = -1, m = null;
  i && (m = new ResizeObserver((_) => {
    let [y] = _;
    y && y.target === c && m && (m.unobserve(t), cancelAnimationFrame(d), d = requestAnimationFrame(() => {
      var C;
      (C = m) == null || C.observe(t);
    })), n();
  }), c && !a && m.observe(c), m.observe(t));
  let h, g = a ? en(e) : null;
  a && v();
  function v() {
    const _ = en(e);
    g && (_.x !== g.x || _.y !== g.y || _.width !== g.width || _.height !== g.height) && n(), g = _, h = requestAnimationFrame(v);
  }
  return n(), () => {
    var _;
    l.forEach((y) => {
      o && y.removeEventListener("scroll", n), s && y.removeEventListener("resize", n);
    }), f == null || f(), (_ = m) == null || _.disconnect(), m = null, a && cancelAnimationFrame(h);
  };
}
const zu = Ou, Yu = xu, Gu = Eu, Xu = Cu, Zu = wu, Ju = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: qu,
    ...n
  }, s = {
    ...o.platform,
    _c: r
  };
  return _u(e, t, {
    ...o,
    platform: s
  });
}, Qu = {
  strategy: "absolute",
  placement: "top",
  gutter: 5,
  flip: !0,
  sameWidth: !1,
  overflowPadding: 8
}, $u = {
  bottom: "rotate(45deg)",
  left: "rotate(135deg)",
  top: "rotate(225deg)",
  right: "rotate(315deg)"
};
function tc(e, t, n = {}) {
  if (!t || !e || n === null)
    return {
      destroy: gt
    };
  const r = { ...Qu, ...n }, o = t.querySelector("[data-arrow=true]"), s = [];
  r.flip && s.push(Gu({
    boundary: r.boundary,
    padding: r.overflowPadding
  }));
  const i = L(o) ? o.offsetHeight / 2 : 0;
  if (r.gutter || r.offset) {
    const a = r.gutter ? { mainAxis: r.gutter } : r.offset;
    (a == null ? void 0 : a.mainAxis) != null && (a.mainAxis += i), s.push(zu(a));
  }
  s.push(Yu({
    boundary: r.boundary,
    crossAxis: r.overlap,
    padding: r.overflowPadding
  })), o && s.push(Zu({ element: o, padding: 8 })), s.push(Xu({
    padding: r.overflowPadding,
    apply({ rects: a, availableHeight: c, availableWidth: l }) {
      r.sameWidth && Object.assign(t.style, {
        width: `${Math.round(a.reference.width)}px`,
        minWidth: "unset"
      }), r.fitViewport && Object.assign(t.style, {
        maxWidth: `${l}px`,
        maxHeight: `${c}px`
      });
    }
  }));
  function u() {
    if (!e || !t || L(e) && !e.ownerDocument.documentElement.contains(e))
      return;
    const { placement: a, strategy: c } = r;
    Ju(e, t, {
      placement: a,
      middleware: s,
      strategy: c
    }).then((l) => {
      const f = Math.round(l.x), d = Math.round(l.y), [m, h] = ec(l.placement);
      if (t.setAttribute("data-side", m), t.setAttribute("data-align", h), Object.assign(t.style, {
        position: r.strategy,
        top: `${d}px`,
        left: `${f}px`
      }), L(o) && l.middlewareData.arrow) {
        const { x: g, y: v } = l.middlewareData.arrow, _ = l.placement.split("-")[0];
        o.setAttribute("data-side", _), Object.assign(o.style, {
          position: "absolute",
          left: g != null ? `${g}px` : "",
          top: v != null ? `${v}px` : "",
          [_]: `calc(100% - ${i}px)`,
          transform: $u[_],
          backgroundColor: "inherit",
          zIndex: "inherit"
        });
      }
      return l;
    });
  }
  return Object.assign(t.style, {
    position: r.strategy
  }), {
    destroy: Hu(e, t, u)
  };
}
function ec(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var os = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"], lr = /* @__PURE__ */ os.join(","), is = typeof Element > "u", nn = is ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, fr = !is && Element.prototype.getRootNode ? function(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
} : function(e) {
  return e == null ? void 0 : e.ownerDocument;
}, dr = function e(t, n) {
  var r;
  n === void 0 && (n = !0);
  var o = t == null || (r = t.getAttribute) === null || r === void 0 ? void 0 : r.call(t, "inert"), s = o === "" || o === "true", i = s || n && t && e(t.parentNode);
  return i;
}, nc = function(t) {
  var n, r = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, "contenteditable");
  return r === "" || r === "true";
}, ss = function(t, n, r) {
  if (dr(t))
    return [];
  var o = Array.prototype.slice.apply(t.querySelectorAll(lr));
  return n && nn.call(t, lr) && o.unshift(t), o = o.filter(r), o;
}, as = function e(t, n, r) {
  for (var o = [], s = Array.from(t); s.length; ) {
    var i = s.shift();
    if (!dr(i, !1))
      if (i.tagName === "SLOT") {
        var u = i.assignedElements(), a = u.length ? u : i.children, c = e(a, !0, r);
        r.flatten ? o.push.apply(o, c) : o.push({
          scopeParent: i,
          candidates: c
        });
      } else {
        var l = nn.call(i, lr);
        l && r.filter(i) && (n || !t.includes(i)) && o.push(i);
        var f = i.shadowRoot || // check for an undisclosed shadow
        typeof r.getShadowRoot == "function" && r.getShadowRoot(i), d = !dr(f, !1) && (!r.shadowRootFilter || r.shadowRootFilter(i));
        if (f && d) {
          var m = e(f === !0 ? i.children : f.children, !0, r);
          r.flatten ? o.push.apply(o, m) : o.push({
            scopeParent: i,
            candidates: m
          });
        } else
          s.unshift.apply(s, i.children);
      }
  }
  return o;
}, us = function(t) {
  return !isNaN(parseInt(t.getAttribute("tabindex"), 10));
}, Ge = function(t) {
  if (!t)
    throw new Error("No node provided");
  return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || nc(t)) && !us(t) ? 0 : t.tabIndex;
}, rc = function(t, n) {
  var r = Ge(t);
  return r < 0 && n && !us(t) ? 0 : r;
}, oc = function(t, n) {
  return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex;
}, cs = function(t) {
  return t.tagName === "INPUT";
}, ic = function(t) {
  return cs(t) && t.type === "hidden";
}, sc = function(t) {
  var n = t.tagName === "DETAILS" && Array.prototype.slice.apply(t.children).some(function(r) {
    return r.tagName === "SUMMARY";
  });
  return n;
}, ac = function(t, n) {
  for (var r = 0; r < t.length; r++)
    if (t[r].checked && t[r].form === n)
      return t[r];
}, uc = function(t) {
  if (!t.name)
    return !0;
  var n = t.form || fr(t), r = function(u) {
    return n.querySelectorAll('input[type="radio"][name="' + u + '"]');
  }, o;
  if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
    o = r(window.CSS.escape(t.name));
  else
    try {
      o = r(t.name);
    } catch (i) {
      return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", i.message), !1;
    }
  var s = ac(o, t.form);
  return !s || s === t;
}, cc = function(t) {
  return cs(t) && t.type === "radio";
}, lc = function(t) {
  return cc(t) && !uc(t);
}, fc = function(t) {
  var n, r = t && fr(t), o = (n = r) === null || n === void 0 ? void 0 : n.host, s = !1;
  if (r && r !== t) {
    var i, u, a;
    for (s = !!((i = o) !== null && i !== void 0 && (u = i.ownerDocument) !== null && u !== void 0 && u.contains(o) || t != null && (a = t.ownerDocument) !== null && a !== void 0 && a.contains(t)); !s && o; ) {
      var c, l, f;
      r = fr(o), o = (c = r) === null || c === void 0 ? void 0 : c.host, s = !!((l = o) !== null && l !== void 0 && (f = l.ownerDocument) !== null && f !== void 0 && f.contains(o));
    }
  }
  return s;
}, Go = function(t) {
  var n = t.getBoundingClientRect(), r = n.width, o = n.height;
  return r === 0 && o === 0;
}, dc = function(t, n) {
  var r = n.displayCheck, o = n.getShadowRoot;
  if (getComputedStyle(t).visibility === "hidden")
    return !0;
  var s = nn.call(t, "details>summary:first-of-type"), i = s ? t.parentElement : t;
  if (nn.call(i, "details:not([open]) *"))
    return !0;
  if (!r || r === "full" || r === "legacy-full") {
    if (typeof o == "function") {
      for (var u = t; t; ) {
        var a = t.parentElement, c = fr(t);
        if (a && !a.shadowRoot && o(a) === !0)
          return Go(t);
        t.assignedSlot ? t = t.assignedSlot : !a && c !== t.ownerDocument ? t = c.host : t = a;
      }
      t = u;
    }
    if (fc(t))
      return !t.getClientRects().length;
    if (r !== "legacy-full")
      return !0;
  } else if (r === "non-zero-area")
    return Go(t);
  return !1;
}, vc = function(t) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
    for (var n = t.parentElement; n; ) {
      if (n.tagName === "FIELDSET" && n.disabled) {
        for (var r = 0; r < n.children.length; r++) {
          var o = n.children.item(r);
          if (o.tagName === "LEGEND")
            return nn.call(n, "fieldset[disabled] *") ? !0 : !o.contains(t);
        }
        return !0;
      }
      n = n.parentElement;
    }
  return !1;
}, vr = function(t, n) {
  return !(n.disabled || // we must do an inert look up to filter out any elements inside an inert ancestor
  //  because we're limited in the type of selectors we can use in JSDom (see related
  //  note related to `candidateSelectors`)
  dr(n) || ic(n) || dc(n, t) || // For a details element with a summary, the summary element gets the focus
  sc(n) || vc(n));
}, Hr = function(t, n) {
  return !(lc(n) || Ge(n) < 0 || !vr(t, n));
}, mc = function(t) {
  var n = parseInt(t.getAttribute("tabindex"), 10);
  return !!(isNaN(n) || n >= 0);
}, gc = function e(t) {
  var n = [], r = [];
  return t.forEach(function(o, s) {
    var i = !!o.scopeParent, u = i ? o.scopeParent : o, a = rc(u, i), c = i ? e(o.candidates) : u;
    a === 0 ? i ? n.push.apply(n, c) : n.push(u) : r.push({
      documentOrder: s,
      tabIndex: a,
      item: o,
      isScope: i,
      content: c
    });
  }), r.sort(oc).reduce(function(o, s) {
    return s.isScope ? o.push.apply(o, s.content) : o.push(s.content), o;
  }, []).concat(n);
}, hc = function(t, n) {
  n = n || {};
  var r;
  return n.getShadowRoot ? r = as([t], n.includeContainer, {
    filter: Hr.bind(null, n),
    flatten: !1,
    getShadowRoot: n.getShadowRoot,
    shadowRootFilter: mc
  }) : r = ss(t, n.includeContainer, Hr.bind(null, n)), gc(r);
}, pc = function(t, n) {
  n = n || {};
  var r;
  return n.getShadowRoot ? r = as([t], n.includeContainer, {
    filter: vr.bind(null, n),
    flatten: !0,
    getShadowRoot: n.getShadowRoot
  }) : r = ss(t, n.includeContainer, vr.bind(null, n)), r;
}, cn = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return nn.call(t, lr) === !1 ? !1 : Hr(n, t);
}, bc = /* @__PURE__ */ os.concat("iframe").join(","), Cr = function(t, n) {
  if (n = n || {}, !t)
    throw new Error("No node provided");
  return nn.call(t, bc) === !1 ? !1 : vr(n, t);
};
/*!
* focus-trap 7.5.4
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/
function Xo(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Zo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Xo(Object(n), !0).forEach(function(r) {
      yc(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Xo(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function yc(e, t, n) {
  return t = wc(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function _c(e, t) {
  if (typeof e != "object" || e === null)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function wc(e) {
  var t = _c(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
var Jo = {
  activateTrap: function(t, n) {
    if (t.length > 0) {
      var r = t[t.length - 1];
      r !== n && r.pause();
    }
    var o = t.indexOf(n);
    o === -1 || t.splice(o, 1), t.push(n);
  },
  deactivateTrap: function(t, n) {
    var r = t.indexOf(n);
    r !== -1 && t.splice(r, 1), t.length > 0 && t[t.length - 1].unpause();
  }
}, Ec = function(t) {
  return t.tagName && t.tagName.toLowerCase() === "input" && typeof t.select == "function";
}, Tc = function(t) {
  return (t == null ? void 0 : t.key) === "Escape" || (t == null ? void 0 : t.key) === "Esc" || (t == null ? void 0 : t.keyCode) === 27;
}, kn = function(t) {
  return (t == null ? void 0 : t.key) === "Tab" || (t == null ? void 0 : t.keyCode) === 9;
}, Oc = function(t) {
  return kn(t) && !t.shiftKey;
}, xc = function(t) {
  return kn(t) && t.shiftKey;
}, Qo = function(t) {
  return setTimeout(t, 0);
}, $o = function(t, n) {
  var r = -1;
  return t.every(function(o, s) {
    return n(o) ? (r = s, !1) : !0;
  }), r;
}, On = function(t) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
    r[o - 1] = arguments[o];
  return typeof t == "function" ? t.apply(void 0, r) : t;
}, Yn = function(t) {
  return t.target.shadowRoot && typeof t.composedPath == "function" ? t.composedPath()[0] : t.target;
}, Cc = [], Ac = function(t, n) {
  var r = (n == null ? void 0 : n.document) || document, o = (n == null ? void 0 : n.trapStack) || Cc, s = Zo({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    isKeyForward: Oc,
    isKeyBackward: xc
  }, n), i = {
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
  }, u, a = function(p, b, A) {
    return p && p[b] !== void 0 ? p[b] : s[A || b];
  }, c = function(p, b) {
    var A = typeof (b == null ? void 0 : b.composedPath) == "function" ? b.composedPath() : void 0;
    return i.containerGroups.findIndex(function(E) {
      var R = E.container, K = E.tabbableNodes;
      return R.contains(p) || // fall back to explicit tabbable search which will take into consideration any
      //  web components if the `tabbableOptions.getShadowRoot` option was used for
      //  the trap, enabling shadow DOM support in tabbable (`Node.contains()` doesn't
      //  look inside web components even if open)
      (A == null ? void 0 : A.includes(R)) || K.find(function(P) {
        return P === p;
      });
    });
  }, l = function(p) {
    var b = s[p];
    if (typeof b == "function") {
      for (var A = arguments.length, E = new Array(A > 1 ? A - 1 : 0), R = 1; R < A; R++)
        E[R - 1] = arguments[R];
      b = b.apply(void 0, E);
    }
    if (b === !0 && (b = void 0), !b) {
      if (b === void 0 || b === !1)
        return b;
      throw new Error("`".concat(p, "` was specified but was not a node, or did not return a node"));
    }
    var K = b;
    if (typeof b == "string" && (K = r.querySelector(b), !K))
      throw new Error("`".concat(p, "` as selector refers to no known node"));
    return K;
  }, f = function() {
    var p = l("initialFocus");
    if (p === !1)
      return !1;
    if (p === void 0 || !Cr(p, s.tabbableOptions))
      if (c(r.activeElement) >= 0)
        p = r.activeElement;
      else {
        var b = i.tabbableGroups[0], A = b && b.firstTabbableNode;
        p = A || l("fallbackFocus");
      }
    if (!p)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return p;
  }, d = function() {
    if (i.containerGroups = i.containers.map(function(p) {
      var b = hc(p, s.tabbableOptions), A = pc(p, s.tabbableOptions), E = b.length > 0 ? b[0] : void 0, R = b.length > 0 ? b[b.length - 1] : void 0, K = A.find(function(st) {
        return cn(st);
      }), P = A.slice().reverse().find(function(st) {
        return cn(st);
      }), Z = !!b.find(function(st) {
        return Ge(st) > 0;
      });
      return {
        container: p,
        tabbableNodes: b,
        focusableNodes: A,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: Z,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: E,
        /** Last tabbable node in container, __tabindex__ order; `undefined` if none. */
        lastTabbableNode: R,
        // NOTE: DOM order is NOT NECESSARILY "document position" order, but figuring that out
        //  would require more than just https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
        //  because that API doesn't work with Shadow DOM as well as it should (@see
        //  https://github.com/whatwg/dom/issues/320) and since this first/last is only needed, so far,
        //  to address an edge case related to positive tabindex support, this seems like a much easier,
        //  "close enough most of the time" alternative for positive tabindexes which should generally
        //  be avoided anyway...
        /** First tabbable node in container, __DOM__ order; `undefined` if none. */
        firstDomTabbableNode: K,
        /** Last tabbable node in container, __DOM__ order; `undefined` if none. */
        lastDomTabbableNode: P,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function(B) {
          var Tt = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, kt = b.indexOf(B);
          return kt < 0 ? Tt ? A.slice(A.indexOf(B) + 1).find(function(U) {
            return cn(U);
          }) : A.slice(0, A.indexOf(B)).reverse().find(function(U) {
            return cn(U);
          }) : b[kt + (Tt ? 1 : -1)];
        }
      };
    }), i.tabbableGroups = i.containerGroups.filter(function(p) {
      return p.tabbableNodes.length > 0;
    }), i.tabbableGroups.length <= 0 && !l("fallbackFocus"))
      throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times");
    if (i.containerGroups.find(function(p) {
      return p.posTabIndexesFound;
    }) && i.containerGroups.length > 1)
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
  }, m = function T(p) {
    var b = p.activeElement;
    if (b)
      return b.shadowRoot && b.shadowRoot.activeElement !== null ? T(b.shadowRoot) : b;
  }, h = function T(p) {
    if (p !== !1 && p !== m(document)) {
      if (!p || !p.focus) {
        T(f());
        return;
      }
      p.focus({
        preventScroll: !!s.preventScroll
      }), i.mostRecentlyFocusedNode = p, Ec(p) && p.select();
    }
  }, g = function(p) {
    var b = l("setReturnFocus", p);
    return b || (b === !1 ? !1 : p);
  }, v = function(p) {
    var b = p.target, A = p.event, E = p.isBackward, R = E === void 0 ? !1 : E;
    b = b || Yn(A), d();
    var K = null;
    if (i.tabbableGroups.length > 0) {
      var P = c(b, A), Z = P >= 0 ? i.containerGroups[P] : void 0;
      if (P < 0)
        R ? K = i.tabbableGroups[i.tabbableGroups.length - 1].lastTabbableNode : K = i.tabbableGroups[0].firstTabbableNode;
      else if (R) {
        var st = $o(i.tabbableGroups, function(Qt) {
          var Q = Qt.firstTabbableNode;
          return b === Q;
        });
        if (st < 0 && (Z.container === b || Cr(b, s.tabbableOptions) && !cn(b, s.tabbableOptions) && !Z.nextTabbableNode(b, !1)) && (st = P), st >= 0) {
          var B = st === 0 ? i.tabbableGroups.length - 1 : st - 1, Tt = i.tabbableGroups[B];
          K = Ge(b) >= 0 ? Tt.lastTabbableNode : Tt.lastDomTabbableNode;
        } else
          kn(A) || (K = Z.nextTabbableNode(b, !1));
      } else {
        var kt = $o(i.tabbableGroups, function(Qt) {
          var Q = Qt.lastTabbableNode;
          return b === Q;
        });
        if (kt < 0 && (Z.container === b || Cr(b, s.tabbableOptions) && !cn(b, s.tabbableOptions) && !Z.nextTabbableNode(b)) && (kt = P), kt >= 0) {
          var U = kt === i.tabbableGroups.length - 1 ? 0 : kt + 1, re = i.tabbableGroups[U];
          K = Ge(b) >= 0 ? re.firstTabbableNode : re.firstDomTabbableNode;
        } else
          kn(A) || (K = Z.nextTabbableNode(b));
      }
    } else
      K = l("fallbackFocus");
    return K;
  }, _ = function(p) {
    var b = Yn(p);
    if (!(c(b, p) >= 0)) {
      if (On(s.clickOutsideDeactivates, p)) {
        u.deactivate({
          // NOTE: by setting `returnFocus: false`, deactivate() will do nothing,
          //  which will result in the outside click setting focus to the node
          //  that was clicked (and if not focusable, to "nothing"); by setting
          //  `returnFocus: true`, we'll attempt to re-focus the node originally-focused
          //  on activation (or the configured `setReturnFocus` node), whether the
          //  outside click was on a focusable node or not
          returnFocus: s.returnFocusOnDeactivate
        });
        return;
      }
      On(s.allowOutsideClick, p) || p.preventDefault();
    }
  }, y = function(p) {
    var b = Yn(p), A = c(b, p) >= 0;
    if (A || b instanceof Document)
      A && (i.mostRecentlyFocusedNode = b);
    else {
      p.stopImmediatePropagation();
      var E, R = !0;
      if (i.mostRecentlyFocusedNode)
        if (Ge(i.mostRecentlyFocusedNode) > 0) {
          var K = c(i.mostRecentlyFocusedNode), P = i.containerGroups[K].tabbableNodes;
          if (P.length > 0) {
            var Z = P.findIndex(function(st) {
              return st === i.mostRecentlyFocusedNode;
            });
            Z >= 0 && (s.isKeyForward(i.recentNavEvent) ? Z + 1 < P.length && (E = P[Z + 1], R = !1) : Z - 1 >= 0 && (E = P[Z - 1], R = !1));
          }
        } else
          i.containerGroups.some(function(st) {
            return st.tabbableNodes.some(function(B) {
              return Ge(B) > 0;
            });
          }) || (R = !1);
      else
        R = !1;
      R && (E = v({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: i.mostRecentlyFocusedNode,
        isBackward: s.isKeyBackward(i.recentNavEvent)
      })), h(E || i.mostRecentlyFocusedNode || f());
    }
    i.recentNavEvent = void 0;
  }, C = function(p) {
    var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    i.recentNavEvent = p;
    var A = v({
      event: p,
      isBackward: b
    });
    A && (kn(p) && p.preventDefault(), h(A));
  }, S = function(p) {
    if (Tc(p) && On(s.escapeDeactivates, p) !== !1) {
      p.preventDefault(), u.deactivate();
      return;
    }
    (s.isKeyForward(p) || s.isKeyBackward(p)) && C(p, s.isKeyBackward(p));
  }, V = function(p) {
    var b = Yn(p);
    c(b, p) >= 0 || On(s.clickOutsideDeactivates, p) || On(s.allowOutsideClick, p) || (p.preventDefault(), p.stopImmediatePropagation());
  }, M = function() {
    if (i.active)
      return Jo.activateTrap(o, u), i.delayInitialFocusTimer = s.delayInitialFocus ? Qo(function() {
        h(f());
      }) : h(f()), r.addEventListener("focusin", y, !0), r.addEventListener("mousedown", _, {
        capture: !0,
        passive: !1
      }), r.addEventListener("touchstart", _, {
        capture: !0,
        passive: !1
      }), r.addEventListener("click", V, {
        capture: !0,
        passive: !1
      }), r.addEventListener("keydown", S, {
        capture: !0,
        passive: !1
      }), u;
  }, q = function() {
    if (i.active)
      return r.removeEventListener("focusin", y, !0), r.removeEventListener("mousedown", _, !0), r.removeEventListener("touchstart", _, !0), r.removeEventListener("click", V, !0), r.removeEventListener("keydown", S, !0), u;
  }, z = function(p) {
    var b = p.some(function(A) {
      var E = Array.from(A.removedNodes);
      return E.some(function(R) {
        return R === i.mostRecentlyFocusedNode;
      });
    });
    b && h(f());
  }, Y = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(z) : void 0, et = function() {
    Y && (Y.disconnect(), i.active && !i.paused && i.containers.map(function(p) {
      Y.observe(p, {
        subtree: !0,
        childList: !0
      });
    }));
  };
  return u = {
    get active() {
      return i.active;
    },
    get paused() {
      return i.paused;
    },
    activate: function(p) {
      if (i.active)
        return this;
      var b = a(p, "onActivate"), A = a(p, "onPostActivate"), E = a(p, "checkCanFocusTrap");
      E || d(), i.active = !0, i.paused = !1, i.nodeFocusedBeforeActivation = r.activeElement, b == null || b();
      var R = function() {
        E && d(), M(), et(), A == null || A();
      };
      return E ? (E(i.containers.concat()).then(R, R), this) : (R(), this);
    },
    deactivate: function(p) {
      if (!i.active)
        return this;
      var b = Zo({
        onDeactivate: s.onDeactivate,
        onPostDeactivate: s.onPostDeactivate,
        checkCanReturnFocus: s.checkCanReturnFocus
      }, p);
      clearTimeout(i.delayInitialFocusTimer), i.delayInitialFocusTimer = void 0, q(), i.active = !1, i.paused = !1, et(), Jo.deactivateTrap(o, u);
      var A = a(b, "onDeactivate"), E = a(b, "onPostDeactivate"), R = a(b, "checkCanReturnFocus"), K = a(b, "returnFocus", "returnFocusOnDeactivate");
      A == null || A();
      var P = function() {
        Qo(function() {
          K && h(g(i.nodeFocusedBeforeActivation)), E == null || E();
        });
      };
      return K && R ? (R(g(i.nodeFocusedBeforeActivation)).then(P, P), this) : (P(), this);
    },
    pause: function(p) {
      if (i.paused || !i.active)
        return this;
      var b = a(p, "onPause"), A = a(p, "onPostPause");
      return i.paused = !0, b == null || b(), q(), et(), A == null || A(), this;
    },
    unpause: function(p) {
      if (!i.paused || !i.active)
        return this;
      var b = a(p, "onUnpause"), A = a(p, "onPostUnpause");
      return i.paused = !1, b == null || b(), d(), M(), et(), A == null || A(), this;
    },
    updateContainerElements: function(p) {
      var b = [].concat(p).filter(Boolean);
      return i.containers = b.map(function(A) {
        return typeof A == "string" ? r.querySelector(A) : A;
      }), i.active && d(), et(), this;
    }
  }, u.updateContainerElements(t), u;
};
function ls(e = {}) {
  let t;
  const { immediate: n, ...r } = e, o = Ct(!1), s = Ct(!1), i = (f) => t == null ? void 0 : t.activate(f), u = (f) => {
    t == null || t.deactivate(f);
  }, a = () => {
    t && (t.pause(), s.set(!0));
  }, c = () => {
    t && (t.unpause(), s.set(!1));
  };
  return {
    useFocusTrap: (f) => (t = Ac(f, {
      ...r,
      onActivate() {
        var d;
        o.set(!0), (d = e.onActivate) == null || d.call(e);
      },
      onDeactivate() {
        var d;
        o.set(!1), (d = e.onDeactivate) == null || d.call(e);
      }
    }), n && i(), {
      destroy() {
        u(), t = void 0;
      }
    }),
    hasFocus: Lo(o),
    isPaused: Lo(s),
    activate: i,
    deactivate: u,
    pause: a,
    unpause: c
  };
}
const Gn = [], fs = (e, t) => {
  let n = gt;
  function r() {
    const s = Gn.indexOf(e);
    s >= 0 && Gn.splice(s, 1);
  }
  function o(s) {
    n();
    const { open: i, onClose: u, shouldCloseOnInteractOutside: a, closeOnInteractOutside: c } = s;
    xe(100).then(() => {
      i ? Gn.push(e) : r();
    });
    function l() {
      return Na(Gn) === e;
    }
    function f() {
      l() && u && (u(), r());
    }
    function d(h) {
      const g = h.target;
      uo(g) && g && l() && (h.preventDefault(), h.stopPropagation(), h.stopImmediatePropagation());
    }
    function m(h) {
      a != null && a(h) && l() && (h.preventDefault(), h.stopPropagation(), h.stopImmediatePropagation(), f());
    }
    n = kc(e, {
      onInteractOutsideStart: d,
      onInteractOutside: c ? m : void 0,
      enabled: i
    }).destroy;
  }
  return o(t), {
    update: o,
    destroy() {
      r(), n();
    }
  };
}, Pc = {
  floating: {},
  focusTrap: {},
  modal: {},
  escapeKeydown: {},
  portal: "body"
}, ti = (e, t) => {
  e.dataset.escapee = "";
  const { anchorElement: n, open: r, options: o } = t;
  if (!n || !r || !o)
    return { destroy: gt };
  const s = { ...Pc, ...o }, i = [];
  if (s.portal !== null && i.push(po(e, s.portal).destroy), i.push(tc(n, e, s.floating).destroy), s.focusTrap !== null) {
    const { useFocusTrap: a } = ls({
      immediate: !0,
      escapeDeactivates: !1,
      allowOutsideClick: !0,
      returnFocusOnDeactivate: !1,
      fallbackFocus: e,
      ...s.focusTrap
    });
    i.push(a(e).destroy);
  }
  s.modal !== null && i.push(fs(e, {
    onClose: () => {
      L(n) && (r.set(!1), n.focus());
    },
    shouldCloseOnInteractOutside: (a) => !(a.defaultPrevented || L(n) && n.contains(a.target)),
    ...s.modal
  }).destroy), s.escapeKeydown !== null && i.push(sr(e, {
    enabled: r,
    handler: () => {
      r.set(!1);
    },
    ...s.escapeKeydown
  }).destroy);
  const u = Ut(...i);
  return {
    destroy() {
      u();
    }
  };
}, po = (e, t = "body") => {
  let n;
  if (!L(t) && typeof t != "string")
    return {
      destroy: gt
    };
  async function r(s) {
    if (t = s, typeof t == "string") {
      if (n = document.querySelector(t), n === null && (await Ze(), n = document.querySelector(t)), n === null)
        throw new Error(`No element found matching css selector: "${t}"`);
    } else if (t instanceof HTMLElement)
      n = t;
    else
      throw new TypeError(`Unknown portal target type: ${t === null ? "null" : typeof t}. Allowed types: string (CSS selector) or HTMLElement.`);
    e.dataset.portal = "", n.appendChild(e), e.hidden = !1;
  }
  function o() {
    e.remove();
  }
  return r(t), {
    update: r,
    destroy: o
  };
}, kc = (e, t) => {
  let n = gt, r = gt, o = !1, s = !1, i = !1;
  function u(l) {
    n(), r();
    const { onInteractOutside: f, onInteractOutsideStart: d, enabled: m } = l;
    if (!m)
      return;
    function h(_) {
      f && ei(_, e) && (d == null || d(_));
      const y = _.target;
      uo(y) && ds(e, y) && (s = !0), o = !0;
    }
    function g(_) {
      f == null || f(_);
    }
    const v = Sc(e);
    if (typeof PointerEvent < "u") {
      const _ = (y) => {
        r();
        const C = (S) => {
          a(S) && g(S), c();
        };
        if (y.pointerType === "touch") {
          r = Ht(v, "click", C, {
            capture: !0,
            once: !0
          });
          return;
        }
        C(y);
      };
      n = Ut(Ht(v, "pointerdown", h, !0), Ht(v, "pointerup", _, !0));
    } else {
      const _ = (C) => {
        i ? i = !1 : a(C) && g(C), c();
      }, y = (C) => {
        i = !0, a(C) && g(C), c();
      };
      n = Ut(Ht(v, "mousedown", h, !0), Ht(v, "mouseup", _, !0), Ht(v, "touchstart", h, !0), Ht(v, "touchend", y, !0));
    }
  }
  function a(l) {
    return !!(o && !s && ei(l, e));
  }
  function c() {
    o = !1, s = !1;
  }
  return u(t), {
    update: u,
    destroy() {
      n(), r();
    }
  };
};
function ei(e, t) {
  if ("button" in e && e.button > 0)
    return !1;
  const n = e.target;
  if (!uo(n))
    return !1;
  const r = n.ownerDocument;
  return !r || !r.documentElement.contains(n) ? !1 : t && !ds(t, n);
}
function ds(e, t) {
  return e === t || e.contains(t);
}
function Sc(e) {
  return (e == null ? void 0 : e.ownerDocument) ?? document;
}
Je(!1), Je(!1), Je(void 0);
const Rc = {
  ltr: [...ir, vt.ARROW_RIGHT],
  rtl: [...ir, vt.ARROW_LEFT]
}, Dc = {
  ltr: [vt.ARROW_LEFT],
  rtl: [vt.ARROW_RIGHT]
}, ni = ["menu", "trigger"], Fc = {
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
function Nc(e) {
  const { name: t, selector: n } = Vi(e.selector), { preventScroll: r, arrowSize: o, positioning: s, closeOnEscape: i, closeOnOutsideClick: u, portal: a, forceVisible: c, typeahead: l, loop: f, closeFocus: d, disableFocusFirstItem: m, closeOnItemClick: h, onOutsideClick: g } = e.rootOptions, v = e.rootOpen, _ = e.rootActiveTrigger, y = e.nextFocusable, C = e.prevFocusable, S = St.writable(!1), V = St(Ct(0)), M = St(Ct(null)), q = St(Ct("right")), z = St(Ct(null)), Y = St(le([q, M], ([w, D]) => (F) => w === (D == null ? void 0 : D.side) && Ic(F, D == null ? void 0 : D.area))), { typed: et, handleTypeaheadSearch: T } = lu(), p = Qe({ ...Kr(ni), ...e.ids }), b = qo({
    open: v,
    forceVisible: c,
    activeTrigger: _
  }), A = xt(t(), {
    stores: [b, a, p.menu, p.trigger],
    returned: ([w, D, F, I]) => ({
      role: "menu",
      hidden: w ? void 0 : !0,
      style: Fe({
        display: w ? void 0 : "none"
      }),
      id: F,
      "aria-labelledby": I,
      "data-state": w ? "open" : "closed",
      "data-portal": Wi(D),
      tabindex: -1
    }),
    action: (w) => {
      let D = gt;
      const F = Kt([b, _, s, u, a, i], ([G, Et, Zt, bt, ot, ct]) => {
        D(), !(!G || !Et) && Ze().then(() => {
          D(), Cn(w, n), D = ti(w, {
            anchorElement: Et,
            open: v,
            options: {
              floating: Zt,
              modal: {
                closeOnInteractOutside: bt,
                shouldCloseOnInteractOutside: (tt) => {
                  var it;
                  return (it = g.get()) == null || it(tt), !(tt.defaultPrevented || L(Et) && Et.contains(tt.target));
                },
                onClose: () => {
                  v.set(!1), Et.focus();
                },
                open: G
              },
              portal: Wr(w, ot),
              escapeKeydown: ct ? void 0 : null
            }
          }).destroy;
        });
      }), I = Ut(nt(w, "keydown", (G) => {
        const Et = G.target, Zt = G.currentTarget;
        if (!L(Et) || !L(Zt) || !(Et.closest('[role="menu"]') === Zt))
          return;
        if (Wo.includes(G.key) && oi(G, f.get() ?? !1), G.key === vt.TAB) {
          G.preventDefault(), v.set(!1), ri(G, y, C);
          return;
        }
        const ot = G.key.length === 1;
        !(G.ctrlKey || G.altKey || G.metaKey) && ot && l.get() === !0 && T(G.key, Ye(Zt));
      }));
      return {
        destroy() {
          F(), I(), D();
        }
      };
    }
  }), E = xt(t("trigger"), {
    stores: [v, p.menu, p.trigger],
    returned: ([w, D, F]) => ({
      "aria-controls": D,
      "aria-expanded": w,
      "data-state": w ? "open" : "closed",
      id: F,
      tabindex: 0
    }),
    action: (w) => (Xn(w), _.update((F) => F || w), {
      destroy: Ut(nt(w, "click", (F) => {
        const I = v.get(), G = F.currentTarget;
        L(G) && (Q(G), I || F.preventDefault());
      }), nt(w, "keydown", (F) => {
        const I = F.currentTarget;
        if (!L(I) || !(ir.includes(F.key) || F.key === vt.ARROW_DOWN))
          return;
        F.preventDefault(), Q(I);
        const G = I.getAttribute("aria-controls");
        if (!G)
          return;
        const Et = document.getElementById(G);
        if (!Et)
          return;
        const Zt = Ye(Et);
        Zt.length && Vt(Zt[0]);
      }))
    })
  }), R = xt(t("arrow"), {
    stores: o,
    returned: (w) => ({
      "data-arrow": !0,
      style: Fe({
        position: "absolute",
        width: `var(--arrow-size, ${w}px)`,
        height: `var(--arrow-size, ${w}px)`
      })
    })
  }), K = xt(t("overlay"), {
    stores: [b],
    returned: ([w]) => ({
      hidden: w ? void 0 : !0,
      tabindex: -1,
      style: Fe({
        display: w ? void 0 : "none"
      }),
      "aria-hidden": "true",
      "data-state": Bc(w)
    }),
    action: (w) => {
      let D = gt;
      if (i.get()) {
        const I = sr(w, {
          handler: () => {
            v.set(!1);
            const G = _.get();
            G && G.focus();
          }
        });
        I && I.destroy && (D = I.destroy);
      }
      const F = Kt([a], ([I]) => {
        if (I === null)
          return gt;
        const G = Wr(w, I);
        return G === null ? gt : po(w, G).destroy;
      });
      return {
        destroy() {
          D(), F();
        }
      };
    }
  }), P = xt(t("item"), {
    returned: () => ({
      role: "menuitem",
      tabindex: -1,
      "data-orientation": "vertical"
    }),
    action: (w) => (Cn(w, n), Xn(w), {
      destroy: Ut(nt(w, "pointerdown", (F) => {
        const I = F.currentTarget;
        if (L(I) && Te(I)) {
          F.preventDefault();
          return;
        }
      }), nt(w, "click", (F) => {
        const I = F.currentTarget;
        if (L(I)) {
          if (Te(I)) {
            F.preventDefault();
            return;
          }
          if (F.defaultPrevented) {
            Vt(I);
            return;
          }
          h.get() && xe(1).then(() => {
            v.set(!1);
          });
        }
      }), nt(w, "keydown", (F) => {
        Xt(F);
      }), nt(w, "pointermove", (F) => {
        Se(F);
      }), nt(w, "pointerleave", (F) => {
        Ue(F);
      }), nt(w, "focusin", (F) => {
        we(F);
      }), nt(w, "focusout", (F) => {
        Ee(F);
      }))
    })
  }), Z = xt(t("group"), {
    returned: () => (w) => ({
      role: "group",
      "aria-labelledby": w
    })
  }), st = xt(t("group-label"), {
    returned: () => (w) => ({
      id: w
    })
  }), B = {
    defaultChecked: !1,
    disabled: !1
  }, Tt = (w) => {
    const D = { ...B, ...w }, F = D.checked ?? Ct(D.defaultChecked ?? null), I = Pn(F, D.onCheckedChange), G = Ct(D.disabled), Et = xt(t("checkbox-item"), {
      stores: [I, G],
      returned: ([ot, ct]) => ({
        role: "menuitemcheckbox",
        tabindex: -1,
        "data-orientation": "vertical",
        "aria-checked": rn(ot) ? "mixed" : ot ? "true" : "false",
        "data-disabled": Tr(ct),
        "data-state": Er(ot)
      }),
      action: (ot) => (Cn(ot, n), Xn(ot), {
        destroy: Ut(nt(ot, "pointerdown", (tt) => {
          const it = tt.currentTarget;
          if (L(it) && Te(it)) {
            tt.preventDefault();
            return;
          }
        }), nt(ot, "click", (tt) => {
          const it = tt.currentTarget;
          if (L(it)) {
            if (Te(it)) {
              tt.preventDefault();
              return;
            }
            if (tt.defaultPrevented) {
              Vt(it);
              return;
            }
            I.update((Re) => rn(Re) ? !0 : !Re), h.get() && Ze().then(() => {
              v.set(!1);
            });
          }
        }), nt(ot, "keydown", (tt) => {
          Xt(tt);
        }), nt(ot, "pointermove", (tt) => {
          const it = tt.currentTarget;
          if (L(it)) {
            if (Te(it)) {
              ke(tt);
              return;
            }
            Se(tt, it);
          }
        }), nt(ot, "pointerleave", (tt) => {
          Ue(tt);
        }), nt(ot, "focusin", (tt) => {
          we(tt);
        }), nt(ot, "focusout", (tt) => {
          Ee(tt);
        }))
      })
    }), Zt = le(I, (ot) => ot === !0), bt = le(I, (ot) => ot === "indeterminate");
    return {
      elements: {
        checkboxItem: Et
      },
      states: {
        checked: I
      },
      helpers: {
        isChecked: Zt,
        isIndeterminate: bt
      },
      options: {
        disabled: G
      }
    };
  }, kt = (w = {}) => {
    const D = w.value ?? Ct(w.defaultValue ?? null), F = Pn(D, w.onValueChange), I = xt(t("radio-group"), {
      returned: () => ({
        role: "group"
      })
    }), G = {
      disabled: !1
    }, Et = xt(t("radio-item"), {
      stores: [F],
      returned: ([bt]) => (ot) => {
        const { value: ct, disabled: tt } = { ...G, ...ot }, it = bt === ct;
        return {
          disabled: tt,
          role: "menuitemradio",
          "data-state": it ? "checked" : "unchecked",
          "aria-checked": it,
          "data-disabled": Tr(tt),
          "data-value": ct,
          "data-orientation": "vertical",
          tabindex: -1
        };
      },
      action: (bt) => (Cn(bt, n), {
        destroy: Ut(nt(bt, "pointerdown", (ct) => {
          const tt = ct.currentTarget;
          if (!L(tt))
            return;
          const it = bt.dataset.value;
          if (bt.dataset.disabled || it === void 0) {
            ct.preventDefault();
            return;
          }
        }), nt(bt, "click", (ct) => {
          const tt = ct.currentTarget;
          if (!L(tt))
            return;
          const it = bt.dataset.value;
          if (bt.dataset.disabled || it === void 0) {
            ct.preventDefault();
            return;
          }
          if (ct.defaultPrevented) {
            if (!L(tt))
              return;
            Vt(tt);
            return;
          }
          F.set(it), h.get() && Ze().then(() => {
            v.set(!1);
          });
        }), nt(bt, "keydown", (ct) => {
          Xt(ct);
        }), nt(bt, "pointermove", (ct) => {
          const tt = ct.currentTarget;
          if (!L(tt))
            return;
          const it = bt.dataset.value;
          if (bt.dataset.disabled || it === void 0) {
            ke(ct);
            return;
          }
          Se(ct, tt);
        }), nt(bt, "pointerleave", (ct) => {
          Ue(ct);
        }), nt(bt, "focusin", (ct) => {
          we(ct);
        }), nt(bt, "focusout", (ct) => {
          Ee(ct);
        }))
      })
    }), Zt = le(F, (bt) => (ot) => bt === ot);
    return {
      elements: {
        radioGroup: I,
        radioItem: Et
      },
      states: {
        value: F
      },
      helpers: {
        isChecked: Zt
      }
    };
  }, { elements: { root: U } } = zc({
    orientation: "horizontal"
  }), re = {
    ...Fc,
    disabled: !1,
    positioning: {
      placement: "right-start",
      gutter: 8
    }
  }, Qt = (w) => {
    const D = { ...re, ...w }, F = D.open ?? Ct(!1), I = Pn(F, D == null ? void 0 : D.onOpenChange), G = Qe(pr(D, "ids")), { positioning: Et, arrowSize: Zt, disabled: bt } = G, ot = St(Ct(null)), ct = St(Ct(null)), tt = St(Ct(0)), it = Qe({ ...Kr(ni), ...D.ids });
    Ko(() => {
      const at = document.getElementById(it.trigger.get());
      at && ot.set(at);
    });
    const Re = qo({
      open: I,
      forceVisible: c,
      activeTrigger: ot
    }), ws = xt(t("submenu"), {
      stores: [Re, it.menu, it.trigger],
      returned: ([at, Mt, Jt]) => ({
        role: "menu",
        hidden: at ? void 0 : !0,
        style: Fe({
          display: at ? void 0 : "none"
        }),
        id: Mt,
        "aria-labelledby": Jt,
        "data-state": at ? "open" : "closed",
        // unit tests fail on `.closest` if the id starts with a number
        // so using a data attribute
        "data-id": Mt,
        tabindex: -1
      }),
      action: (at) => {
        let Mt = gt;
        const Jt = Kt([Re, Et], ([H, dt]) => {
          if (Mt(), !H)
            return;
          const Ot = ot.get();
          Ot && Ze().then(() => {
            Mt();
            const Rt = wo(Ot);
            Mt = ti(at, {
              anchorElement: Ot,
              open: I,
              options: {
                floating: dt,
                portal: L(Rt) ? Rt : void 0,
                modal: null,
                focusTrap: null,
                escapeKeydown: null
              }
            }).destroy;
          });
        }), lt = Ut(nt(at, "keydown", (H) => {
          if (H.key === vt.ESCAPE)
            return;
          const dt = H.target, Ot = H.currentTarget;
          if (!L(dt) || !L(Ot) || !(dt.closest('[role="menu"]') === Ot))
            return;
          if (Wo.includes(H.key)) {
            H.stopImmediatePropagation(), oi(H, f.get() ?? !1);
            return;
          }
          const on = Dc.ltr.includes(H.key), sn = H.ctrlKey || H.altKey || H.metaKey, qn = H.key.length === 1;
          if (on) {
            const Eo = ot.get();
            H.preventDefault(), I.update(() => (Eo && Vt(Eo), !1));
            return;
          }
          if (H.key === vt.TAB) {
            H.preventDefault(), v.set(!1), ri(H, y, C);
            return;
          }
          !sn && qn && l.get() === !0 && T(H.key, Ye(Ot));
        }), nt(at, "pointermove", (H) => {
          Wt(H);
        }), nt(at, "focusout", (H) => {
          const dt = ot.get();
          if (S.get()) {
            const Ot = H.target, Rt = document.getElementById(it.menu.get());
            if (!L(Rt) || !L(Ot))
              return;
            !Rt.contains(Ot) && Ot !== dt && I.set(!1);
          } else {
            const Ot = H.currentTarget, Rt = H.relatedTarget;
            if (!L(Rt) || !L(Ot))
              return;
            !Ot.contains(Rt) && Rt !== dt && I.set(!1);
          }
        }));
        return {
          destroy() {
            Jt(), Mt(), lt();
          }
        };
      }
    }), Es = xt(t("subtrigger"), {
      stores: [I, bt, it.menu, it.trigger],
      returned: ([at, Mt, Jt, lt]) => ({
        role: "menuitem",
        id: lt,
        tabindex: -1,
        "aria-controls": Jt,
        "aria-expanded": at,
        "data-state": at ? "open" : "closed",
        "data-disabled": Tr(Mt),
        "aria-haspopop": "menu"
      }),
      action: (at) => {
        Cn(at, n), Xn(at), ot.update((lt) => lt || at);
        const Mt = () => {
          Ar(ct), window.clearTimeout(tt.get()), M.set(null);
        }, Jt = Ut(nt(at, "click", (lt) => {
          if (lt.defaultPrevented)
            return;
          const H = lt.currentTarget;
          !L(H) || Te(H) || (Vt(H), I.get() || I.update((dt) => dt || (ot.set(H), !dt)));
        }), nt(at, "keydown", (lt) => {
          const H = et.get(), dt = lt.currentTarget;
          if (!(!L(dt) || Te(dt) || H.length > 0 && lt.key === vt.SPACE) && Rc.ltr.includes(lt.key)) {
            if (!I.get()) {
              dt.click(), lt.preventDefault();
              return;
            }
            const Rt = dt.getAttribute("aria-controls");
            if (!Rt)
              return;
            const on = document.getElementById(Rt);
            if (!L(on))
              return;
            const sn = Ye(on)[0];
            Vt(sn);
          }
        }), nt(at, "pointermove", (lt) => {
          if (!xn(lt) || (jt(lt), lt.defaultPrevented))
            return;
          const H = lt.currentTarget;
          if (!L(H))
            return;
          Lc(it.menu.get()) || Vt(H);
          const dt = ct.get();
          !I.get() && !dt && !Te(H) && ct.set(window.setTimeout(() => {
            I.update(() => (ot.set(H), !0)), Ar(ct);
          }, 100));
        }), nt(at, "pointerleave", (lt) => {
          if (!xn(lt))
            return;
          Ar(ct);
          const H = document.getElementById(it.menu.get()), dt = H == null ? void 0 : H.getBoundingClientRect();
          if (dt) {
            const Ot = H == null ? void 0 : H.dataset.side, Rt = Ot === "right", on = Rt ? -5 : 5, sn = dt[Rt ? "left" : "right"], qn = dt[Rt ? "right" : "left"];
            M.set({
              area: [
                // Apply a bleed on clientX to ensure that our exit point is
                // consistently within polygon bounds
                { x: lt.clientX + on, y: lt.clientY },
                { x: sn, y: dt.top },
                { x: qn, y: dt.top },
                { x: qn, y: dt.bottom },
                { x: sn, y: dt.bottom }
              ],
              side: Ot
            }), window.clearTimeout(tt.get()), tt.set(window.setTimeout(() => {
              M.set(null);
            }, 300));
          } else {
            if (qe(lt), lt.defaultPrevented)
              return;
            M.set(null);
          }
        }), nt(at, "focusout", (lt) => {
          const H = lt.currentTarget;
          if (!L(H))
            return;
          un(H);
          const dt = lt.relatedTarget;
          if (!L(dt))
            return;
          const Ot = H.getAttribute("aria-controls");
          if (!Ot)
            return;
          const Rt = document.getElementById(Ot);
          Rt && !Rt.contains(dt) && I.set(!1);
        }), nt(at, "focusin", (lt) => {
          we(lt);
        }));
        return {
          destroy() {
            Mt(), Jt();
          }
        };
      }
    }), Ts = xt(t("subarrow"), {
      stores: Zt,
      returned: (at) => ({
        "data-arrow": !0,
        style: Fe({
          position: "absolute",
          width: `var(--arrow-size, ${at}px)`,
          height: `var(--arrow-size, ${at}px)`
        })
      })
    });
    return Kt([v], ([at]) => {
      at || (ot.set(null), I.set(!1));
    }), Kt([M], ([at]) => {
      !Ne || at || window.clearTimeout(tt.get());
    }), Kt([I], ([at]) => {
      if (Ne && (at && S.get() && xe(1).then(() => {
        const Mt = document.getElementById(it.menu.get());
        if (!Mt)
          return;
        const Jt = Ye(Mt);
        Jt.length && Vt(Jt[0]);
      }), !at)) {
        const Mt = z.get(), Jt = document.getElementById(it.trigger.get());
        if (Mt && xe(1).then(() => {
          const lt = document.getElementById(it.menu.get());
          lt && lt.contains(Mt) && un(Mt);
        }), !Jt || document.activeElement === Jt)
          return;
        un(Jt);
      }
    }), {
      ids: it,
      elements: {
        subTrigger: Es,
        subMenu: ws,
        subArrow: Ts
      },
      states: {
        subOpen: I
      },
      options: G
    };
  };
  Ko(() => {
    const w = document.getElementById(p.trigger.get());
    L(w) && v.get() && _.set(w);
    const D = [], F = () => S.set(!1), I = () => {
      S.set(!0), D.push(Ut(Ht(document, "pointerdown", F, { capture: !0, once: !0 }), Ht(document, "pointermove", F, { capture: !0, once: !0 })));
    }, G = (Et) => {
      if (Et.key === vt.ESCAPE && i.get()) {
        v.set(!1);
        return;
      }
    };
    return D.push(Ht(document, "keydown", I, { capture: !0 })), D.push(Ht(document, "keydown", G)), () => {
      D.forEach((Et) => Et());
    };
  }), Kt([v, z], ([w, D]) => {
    !w && D && un(D);
  }), Kt([v], ([w]) => {
    if (Ne && !w) {
      const D = _.get();
      if (!D)
        return;
      const F = d.get();
      !w && D && Vr({ prop: F, defaultEl: D });
    }
  }), Kt([v, r], ([w, D]) => {
    if (!Ne)
      return;
    const F = [];
    return w && D && F.push(Yi()), xe(1).then(() => {
      const I = document.getElementById(p.menu.get());
      if (I && w && S.get()) {
        if (m.get()) {
          Vt(I);
          return;
        }
        const G = Ye(I);
        if (!G.length)
          return;
        Vt(G[0]);
      }
    }), () => {
      F.forEach((I) => I());
    };
  }), Kt(v, (w) => {
    if (!Ne)
      return;
    const D = () => S.set(!1), F = (I) => {
      if (S.set(!0), I.key === vt.ESCAPE && w && i.get()) {
        v.set(!1);
        return;
      }
    };
    return Ut(Ht(document, "pointerdown", D, { capture: !0, once: !0 }), Ht(document, "pointermove", D, { capture: !0, once: !0 }), Ht(document, "keydown", F, { capture: !0 }));
  });
  function Q(w) {
    v.update((D) => {
      const F = !D;
      return F && (y.set(su(w)), C.set(au(w)), _.set(w)), F;
    });
  }
  function we(w) {
    const D = w.currentTarget;
    if (!L(D))
      return;
    const F = z.get();
    F && un(F), Wa(D), z.set(D);
  }
  function Ee(w) {
    const D = w.currentTarget;
    L(D) && un(D);
  }
  function jt(w) {
    He(w) && w.preventDefault();
  }
  function ke(w) {
    if (He(w))
      return;
    const D = w.target;
    if (!L(D))
      return;
    const F = wo(D);
    F && Vt(F);
  }
  function qe(w) {
    He(w) && w.preventDefault();
  }
  function Wt(w) {
    if (!xn(w))
      return;
    const D = w.target, F = w.currentTarget;
    if (!L(F) || !L(D))
      return;
    const I = V.get(), G = I !== w.clientX;
    if (F.contains(D) && G) {
      const Et = w.clientX > I ? "right" : "left";
      q.set(Et), V.set(w.clientX);
    }
  }
  function Se(w, D = null) {
    if (!xn(w) || (jt(w), w.defaultPrevented))
      return;
    if (D) {
      Vt(D);
      return;
    }
    const F = w.currentTarget;
    L(F) && Vt(F);
  }
  function Ue(w) {
    xn(w) && ke(w);
  }
  function Xt(w) {
    if (et.get().length > 0 && w.key === vt.SPACE) {
      w.preventDefault();
      return;
    }
    if (ir.includes(w.key)) {
      w.preventDefault();
      const I = w.currentTarget;
      if (!L(I))
        return;
      I.click();
    }
  }
  function rn(w) {
    return w === "indeterminate";
  }
  function Er(w) {
    return rn(w) ? "indeterminate" : w ? "checked" : "unchecked";
  }
  function He(w) {
    return Y.get()(w);
  }
  function wo(w) {
    const D = w.closest('[role="menu"]');
    return L(D) ? D : null;
  }
  return {
    elements: {
      trigger: E,
      menu: A,
      overlay: K,
      item: P,
      group: Z,
      groupLabel: st,
      arrow: R,
      separator: U
    },
    builders: {
      createCheckboxItem: Tt,
      createSubmenu: Qt,
      createMenuRadioGroup: kt
    },
    states: {
      open: v
    },
    helpers: {
      handleTypeaheadSearch: T
    },
    ids: p,
    options: e.rootOptions
  };
}
function ri(e, t, n) {
  if (e.shiftKey) {
    const r = n.get();
    r && (e.preventDefault(), xe(1).then(() => r.focus()), n.set(null));
  } else {
    const r = t.get();
    r && (e.preventDefault(), xe(1).then(() => r.focus()), t.set(null));
  }
}
function Ye(e) {
  return Array.from(e.querySelectorAll(`[data-melt-menu-id="${e.id}"]`)).filter((t) => L(t));
}
function Xn(e) {
  !e || !Te(e) || (e.setAttribute("data-disabled", ""), e.setAttribute("aria-disabled", "true"));
}
function Ar(e) {
  if (!Ne)
    return;
  const t = e.get();
  t && (window.clearTimeout(t), e.set(null));
}
function xn(e) {
  return e.pointerType === "mouse";
}
function Cn(e, t) {
  if (!e)
    return;
  const n = e.closest(`${t()}, ${t("submenu")}`);
  L(n) && e.setAttribute("data-melt-menu-id", n.id);
}
function oi(e, t) {
  e.preventDefault();
  const n = document.activeElement, r = e.currentTarget;
  if (!L(n) || !L(r))
    return;
  const o = Ye(r);
  if (!o.length)
    return;
  const s = o.filter((a) => !(a.hasAttribute("data-disabled") || a.getAttribute("disabled") === "true")), i = s.indexOf(n);
  let u;
  switch (e.key) {
    case vt.ARROW_DOWN:
      t ? u = i < s.length - 1 ? i + 1 : 0 : u = i < s.length - 1 ? i + 1 : i;
      break;
    case vt.ARROW_UP:
      t ? u = i > 0 ? i - 1 : s.length - 1 : u = i < 0 ? s.length - 1 : i > 0 ? i - 1 : 0;
      break;
    case vt.HOME:
      u = 0;
      break;
    case vt.END:
      u = s.length - 1;
      break;
    default:
      return;
  }
  Vt(s[u]);
}
function Ic(e, t) {
  if (!t)
    return !1;
  const n = { x: e.clientX, y: e.clientY };
  return Mc(n, t);
}
function Mc(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let s = 0, i = t.length - 1; s < t.length; i = s++) {
    const u = t[s].x, a = t[s].y, c = t[i].x, l = t[i].y;
    a > r != l > r && n < (c - u) * (r - a) / (l - a) + u && (o = !o);
  }
  return o;
}
function Lc(e) {
  const t = document.activeElement;
  if (!L(t))
    return !1;
  const n = t.closest(`[data-id="${e}"]`);
  return L(n);
}
function Bc(e) {
  return e ? "open" : "closed";
}
const jc = {
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
  ...pr(jc, "isDateDisabled", "isDateUnavailable", "value", "locale", "disabled", "readonly", "minValue", "maxValue", "weekdayFormat")
});
const { name: ze } = Vi("dialog"), Kc = {
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
}, Wc = ["content", "title", "description"];
function Vc(e) {
  const t = { ...Kc, ...e }, n = Qe(pr(t, "ids")), { preventScroll: r, closeOnEscape: o, closeOnOutsideClick: s, role: i, portal: u, forceVisible: a, openFocus: c, closeFocus: l, onOutsideClick: f } = n, d = St.writable(null), m = Qe({
    ...Kr(Wc),
    ...t.ids
  }), h = t.open ?? Ct(t.defaultOpen), g = Pn(h, t == null ? void 0 : t.onOpenChange), v = le([g, a], ([T, p]) => T || p);
  let _ = gt;
  function y(T) {
    const p = T.currentTarget, b = T.currentTarget;
    !L(p) || !L(b) || (g.set(!0), d.set(b));
  }
  function C() {
    g.set(!1), Vr({
      prop: l.get(),
      defaultEl: d.get()
    });
  }
  const S = xt(ze("trigger"), {
    stores: [g],
    returned: ([T]) => ({
      "aria-haspopup": "dialog",
      "aria-expanded": T,
      type: "button"
    }),
    action: (T) => ({
      destroy: Ut(nt(T, "click", (b) => {
        y(b);
      }), nt(T, "keydown", (b) => {
        b.key !== vt.ENTER && b.key !== vt.SPACE || (b.preventDefault(), y(b));
      }))
    })
  }), V = xt(ze("overlay"), {
    stores: [v, g],
    returned: ([T, p]) => ({
      hidden: T ? void 0 : !0,
      tabindex: -1,
      style: Fe({
        display: T ? void 0 : "none"
      }),
      "aria-hidden": !0,
      "data-state": p ? "open" : "closed"
    }),
    action: (T) => {
      let p = gt;
      if (o.get()) {
        const b = sr(T, {
          handler: () => {
            C();
          }
        });
        b && b.destroy && (p = b.destroy);
      }
      return {
        destroy() {
          p();
        }
      };
    }
  }), M = xt(ze("content"), {
    stores: [v, m.content, m.description, m.title, g],
    returned: ([T, p, b, A, E]) => ({
      id: p,
      role: i.get(),
      "aria-describedby": b,
      "aria-labelledby": A,
      "aria-modal": T ? "true" : void 0,
      "data-state": E ? "open" : "closed",
      tabindex: -1,
      hidden: T ? void 0 : !0,
      style: Fe({
        display: T ? void 0 : "none"
      })
    }),
    action: (T) => {
      let p = gt, b = gt;
      const A = Ut(Kt([g, s, o], ([E, R, K]) => {
        if (!E)
          return;
        const P = ls({
          immediate: !1,
          escapeDeactivates: K,
          clickOutsideDeactivates: R,
          allowOutsideClick: !0,
          returnFocusOnDeactivate: !1,
          fallbackFocus: T
        });
        p = P.activate, b = P.deactivate;
        const Z = P.useFocusTrap(T);
        return Z && Z.destroy ? Z.destroy : P.deactivate;
      }), Kt([s, g], ([E, R]) => fs(T, {
        open: R,
        closeOnInteractOutside: E,
        onClose() {
          C();
        },
        shouldCloseOnInteractOutside(K) {
          var P;
          return (P = f.get()) == null || P(K), !K.defaultPrevented;
        }
      }).destroy), Kt([o], ([E]) => E ? sr(T, { handler: C }).destroy : gt), Kt([v], ([E]) => {
        Ze().then(() => {
          E ? p() : b();
        });
      }));
      return {
        destroy: () => {
          _(), A();
        }
      };
    }
  }), q = xt(ze("portalled"), {
    stores: u,
    returned: (T) => ({
      "data-portal": Wi(T)
    }),
    action: (T) => {
      const p = Kt([u], ([b]) => {
        if (b === null)
          return gt;
        const A = Wr(T, b);
        return A === null ? gt : po(T, A).destroy;
      });
      return {
        destroy() {
          p();
        }
      };
    }
  }), z = xt(ze("title"), {
    stores: [m.title],
    returned: ([T]) => ({
      id: T
    })
  }), Y = xt(ze("description"), {
    stores: [m.description],
    returned: ([T]) => ({
      id: T
    })
  }), et = xt(ze("close"), {
    returned: () => ({
      type: "button"
    }),
    action: (T) => ({
      destroy: Ut(nt(T, "click", () => {
        C();
      }), nt(T, "keydown", (b) => {
        b.key !== vt.SPACE && b.key !== vt.ENTER || (b.preventDefault(), C());
      }))
    })
  });
  return Kt([g, r], ([T, p]) => {
    if (Ne) {
      if (p && T && (_ = Yi()), T) {
        const b = document.getElementById(m.content.get());
        Vr({ prop: c.get(), defaultEl: b });
      }
      return () => {
        a.get() || _();
      };
    }
  }), {
    ids: m,
    elements: {
      content: M,
      trigger: S,
      title: z,
      description: Y,
      overlay: V,
      close: et,
      portalled: q
    },
    states: {
      open: g
    },
    options: n
  };
}
const qc = {
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
function Uc(e) {
  const t = { ...qc, ...e }, n = Qe(pr(t, "ids")), r = t.open ?? Ct(t.defaultOpen), o = Pn(r, t == null ? void 0 : t.onOpenChange), s = St(Ct(null)), i = St(Ct(null)), u = St(Ct(null)), { elements: a, builders: c, ids: l, states: f, options: d } = Nc({
    rootOptions: n,
    rootOpen: o,
    rootActiveTrigger: St(s),
    nextFocusable: St(i),
    prevFocusable: St(u),
    selector: "dropdown-menu",
    removeScroll: !0,
    ids: t.ids
  });
  return {
    ids: l,
    elements: a,
    states: f,
    builders: c,
    options: d
  };
}
const Hc = {
  orientation: "horizontal",
  decorative: !1
}, zc = (e) => {
  const t = { ...Hc, ...e }, n = Qe(t), { orientation: r, decorative: o } = n;
  return {
    elements: {
      root: xt("separator", {
        stores: [r, o],
        returned: ([i, u]) => ({
          role: u ? "none" : "separator",
          "aria-orientation": i === "vertical" ? i : void 0,
          "aria-hidden": u,
          "data-orientation": i
        })
      })
    },
    options: n
  };
};
function vs(e, t) {
  const n = {};
  return t.forEach((r) => {
    n[r] = {
      [`data-${e}-${r}`]: ""
    };
  }), (r) => n[r];
}
function Yc(e) {
  return e ? { "aria-disabled": "true", "data-disabled": "" } : { "aria-disabled": void 0, "data-disabled": void 0 };
}
function yr() {
  const e = Ua();
  return (t) => {
    const { originalEvent: n } = t.detail, { cancelable: r } = t, o = n.type;
    e(o, { originalEvent: n, currentTarget: n.currentTarget }, { cancelable: r }) || t.preventDefault();
  };
}
function ms(e) {
  const t = {};
  for (const n in e) {
    const r = e[n];
    r !== void 0 && (t[n] = r);
  }
  return t;
}
function gs(e) {
  return function(t, n) {
    if (n === void 0)
      return;
    const r = e[t];
    r && r.set(n);
  };
}
function Gc(e) {
  return (t = {}) => Xc(e, t);
}
function Xc(e, t) {
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
  }, ...t };
  e.update((o) => ({
    ...o,
    placement: Zc(r.side, r.align),
    offset: {
      ...o.offset,
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
function Zc(e, t) {
  return t === "center" ? e : `${e}-${t}`;
}
function hs() {
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
function _r() {
  const { NAME: e } = hs();
  return Ci(e);
}
function Jc(e) {
  const { NAME: t, PARTS: n } = hs(), r = vs("menu", n), o = {
    ...Uc({ ...ms(e), forceVisible: !0 }),
    getAttrs: r
  };
  return Ai(t, o), {
    ...o,
    updateOption: gs(o.options)
  };
}
function Qc(e) {
  const n = { ...{
    side: "bottom",
    align: "center"
  }, ...e }, { options: { positioning: r } } = _r();
  Gc(r)(n);
}
function $c(e, t) {
  const n = Yt(t, ["children", "$$slots", "$$events"]), r = Yt(n, ["href", "asChild", "disabled", "el"]);
  At(t, !1);
  const o = {};
  _e(o);
  const s = () => ne(d, "$item", o), i = /* @__PURE__ */ ee(), u = /* @__PURE__ */ ee();
  let a = k(t, "href", 8, () => {
  }), c = k(t, "asChild", 0, !1), l = k(t, "disabled", 0, !1), f = k(t, "el", 12, () => {
  });
  const { elements: { item: d }, getAttrs: m } = _r(), h = yr();
  X(() => s(), () => {
    ht(i, s());
  }), X(() => rt(l()), () => {
    ht(u, {
      ...m("item"),
      ...Yc(l())
    });
  }), X(() => (O(i), O(u)), () => {
    Object.assign(O(i), O(u));
  }), be(), ye();
  var g = j(), v = /* @__PURE__ */ N(g);
  mt(
    v,
    c,
    (_) => {
      var y = j(), C = /* @__PURE__ */ N(y);
      _t(
        C,
        wt(t),
        {
          get builder() {
            return O(i);
          }
        }
      ), x(_, y);
    },
    (_) => {
      var y = j(), C = /* @__PURE__ */ N(y);
      Mi(C, () => a() ? "a" : "div", !1, (S, V) => {
        Ft(S, (Y) => f(Y), () => f());
        let M;
        pt(() => M = Li(
          S,
          M,
          {
            href: a(),
            ...O(i),
            ...r
          },
          ""
        )), Dt(S, (Y) => O(i).action(Y)), W("m-click", S, h, !1), W("m-focusin", S, h, !1), W("m-focusout", S, h, !1), W("m-keydown", S, h, !1), W("m-pointerdown", S, h, !1), W("m-pointerleave", S, h, !1), W("m-pointermove", S, h, !1), W("pointerenter", S, function(Y) {
          J.call(this, t, Y);
        });
        var q = j(), z = /* @__PURE__ */ N(q);
        _t(
          z,
          wt(t),
          {
            get builder() {
              return O(i);
            }
          }
        ), x(V, q);
      }), x(_, y);
    }
  ), x(e, g), Pt();
}
function ps() {
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
function tl(e) {
  const { NAME: t, PARTS: n } = ps(), r = vs(t, n), o = {
    ...Vc({ ...ms(e), role: "dialog", forceVisible: !0 }),
    getAttrs: r
  };
  return Ai(t, o), {
    ...o,
    updateOption: gs(o.options)
  };
}
function Vn() {
  const { NAME: e } = ps();
  return Ci(e);
}
function el(e, t) {
  At(t, !1);
  const n = {};
  _e(n);
  const r = () => ne(v, "$idValues", n);
  let o = k(t, "preventScroll", 8, () => {
  }), s = k(t, "closeOnEscape", 8, () => {
  }), i = k(t, "closeOnOutsideClick", 8, () => {
  }), u = k(t, "portal", 8, () => {
  }), a = k(t, "open", 12, () => {
  }), c = k(t, "onOpenChange", 8, () => {
  }), l = k(t, "openFocus", 8, () => {
  }), f = k(t, "closeFocus", 8, () => {
  }), d = k(t, "onOutsideClick", 8, () => {
  });
  const {
    states: { open: m },
    updateOption: h,
    ids: g
  } = tl({
    closeOnEscape: s(),
    preventScroll: o(),
    closeOnOutsideClick: i(),
    portal: u(),
    forceVisible: !0,
    defaultOpen: a(),
    openFocus: l(),
    closeFocus: f(),
    onOutsideClick: d(),
    onOpenChange: ({ next: C }) => {
      var S;
      return a() !== C && ((S = c()) == null || S(C), a(C)), C;
    }
  }), v = le([g.content, g.description, g.title], ([C, S, V]) => ({
    content: C,
    description: S,
    title: V
  }));
  X(() => rt(a()), () => {
    a() !== void 0 && m.set(a());
  }), X(() => rt(o()), () => {
    h("preventScroll", o());
  }), X(() => rt(s()), () => {
    h("closeOnEscape", s());
  }), X(
    () => rt(i()),
    () => {
      h("closeOnOutsideClick", i());
    }
  ), X(() => rt(u()), () => {
    h("portal", u());
  }), X(() => rt(l()), () => {
    h("openFocus", l());
  }), X(() => rt(f()), () => {
    h("closeFocus", f());
  }), X(() => rt(d()), () => {
    h("onOutsideClick", d());
  }), be(), ye();
  var _ = j(), y = /* @__PURE__ */ N(_);
  _t(
    y,
    wt(t),
    {
      get ids() {
        return r();
      }
    }
  ), x(e, _), Pt();
}
function nl(e, t) {
  const n = Yt(t, ["children", "$$slots", "$$events"]), r = Yt(n, ["level", "asChild", "id", "el"]);
  At(t, !1);
  const o = {};
  _e(o);
  const s = () => ne(f, "$title", o), i = /* @__PURE__ */ ee();
  let u = k(t, "level", 0, "h2"), a = k(t, "asChild", 0, !1), c = k(t, "id", 8, () => {
  }), l = k(t, "el", 12, () => {
  });
  const { elements: { title: f }, ids: d, getAttrs: m } = Vn(), h = m("title");
  X(() => rt(c()), () => {
    c() && d.title.set(c());
  }), X(() => s(), () => {
    ht(i, s());
  }), X(() => O(i), () => {
    Object.assign(O(i), h);
  }), be(), ye();
  var g = j(), v = /* @__PURE__ */ N(g);
  mt(
    v,
    a,
    (_) => {
      var y = j(), C = /* @__PURE__ */ N(y);
      _t(
        C,
        wt(t),
        {
          get builder() {
            return O(i);
          }
        }
      ), x(_, y);
    },
    (_) => {
      var y = j(), C = /* @__PURE__ */ N(y);
      Mi(C, u, !1, (S, V) => {
        Ft(S, (Y) => l(Y), () => l());
        let M;
        pt(() => M = Li(S, M, { ...O(i), ...r }, "")), Dt(S, (Y) => O(i).action(Y));
        var q = j(), z = /* @__PURE__ */ N(q);
        _t(
          z,
          wt(t),
          {
            get builder() {
              return O(i);
            }
          }
        ), x(V, q);
      }), x(_, y);
    }
  ), x(e, g), Pt();
}
var rl = /* @__PURE__ */ $("<button><!></button>");
function bs(e, t) {
  const n = Yt(t, ["children", "$$slots", "$$events"]), r = Yt(n, ["asChild", "el"]);
  At(t, !1);
  const o = {};
  _e(o);
  const s = () => ne(c, "$close", o), i = /* @__PURE__ */ ee();
  let u = k(t, "asChild", 0, !1), a = k(t, "el", 12, () => {
  });
  const { elements: { close: c }, getAttrs: l } = Vn(), f = yr(), d = l("close");
  X(() => s(), () => {
    ht(i, s());
  }), X(() => O(i), () => {
    Object.assign(O(i), d);
  }), be(), ye();
  var m = j(), h = /* @__PURE__ */ N(m);
  mt(
    h,
    u,
    (g) => {
      var v = j(), _ = /* @__PURE__ */ N(v);
      _t(
        _,
        wt(t),
        {
          get builder() {
            return O(i);
          }
        }
      ), x(g, v);
    },
    (g) => {
      var v = rl();
      Ft(v, (C) => a(C), () => a());
      let _;
      var y = /* @__PURE__ */ ut(v);
      _t(
        y,
        wt(t),
        {
          get builder() {
            return O(i);
          }
        }
      ), pt(() => _ = It(
        v,
        _,
        {
          ...O(i),
          type: "button",
          ...r
        },
        !0,
        ""
      )), Dt(v, (C) => O(i).action(C)), W("m-click", v, f, !1), W("m-keydown", v, f, !1), x(g, v);
    }
  ), x(e, m), Pt();
}
var ol = /* @__PURE__ */ $("<div><!></div>");
function il(e, t) {
  const n = Yt(t, ["children", "$$slots", "$$events"]), r = Yt(n, ["asChild", "el"]);
  At(t, !1);
  const o = {};
  _e(o);
  const s = () => ne(c, "$portalled", o), i = /* @__PURE__ */ ee();
  let u = k(t, "asChild", 0, !1), a = k(t, "el", 12, () => {
  });
  const { elements: { portalled: c }, getAttrs: l } = Vn(), f = l("portal");
  X(() => s(), () => {
    ht(i, s());
  }), X(() => O(i), () => {
    Object.assign(O(i), f);
  }), be(), ye();
  var d = j(), m = /* @__PURE__ */ N(d);
  mt(
    m,
    u,
    (h) => {
      var g = j(), v = /* @__PURE__ */ N(g);
      _t(
        v,
        wt(t),
        {
          get builder() {
            return O(i);
          }
        }
      ), x(h, g);
    },
    (h) => {
      var g = ol();
      Ft(g, (y) => a(y), () => a());
      let v;
      var _ = /* @__PURE__ */ ut(g);
      _t(
        _,
        wt(t),
        {
          get builder() {
            return O(i);
          }
        }
      ), pt(() => v = It(g, v, { ...O(i), ...r }, !0, "")), Dt(g, (y) => O(i).action(y)), x(h, g);
    }
  ), x(e, d), Pt();
}
var sl = /* @__PURE__ */ $("<div><!></div>"), al = /* @__PURE__ */ $("<div><!></div>"), ul = /* @__PURE__ */ $("<div><!></div>"), cl = /* @__PURE__ */ $("<div><!></div>"), ll = /* @__PURE__ */ $("<div><!></div>");
function fl(e, t) {
  const n = Yt(t, ["children", "$$slots", "$$events"]), r = Yt(n, [
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
  At(t, !1);
  const o = {};
  _e(o);
  const s = () => ne(_, "$content", o), i = () => ne(y, "$open", o), u = /* @__PURE__ */ ee();
  let a = k(t, "transition", 8, () => {
  }), c = k(t, "transitionConfig", 8, () => {
  }), l = k(t, "inTransition", 8, () => {
  }), f = k(t, "inTransitionConfig", 8, () => {
  }), d = k(t, "outTransition", 8, () => {
  }), m = k(t, "outTransitionConfig", 8, () => {
  }), h = k(t, "asChild", 0, !1), g = k(t, "id", 8, () => {
  }), v = k(t, "el", 12, () => {
  });
  const {
    elements: { content: _ },
    states: { open: y },
    ids: C,
    getAttrs: S
  } = Vn(), V = S("content");
  X(() => rt(g()), () => {
    g() && C.content.set(g());
  }), X(() => s(), () => {
    ht(u, s());
  }), X(() => O(u), () => {
    Object.assign(O(u), V);
  }), be(), ye();
  var M = j(), q = /* @__PURE__ */ N(M);
  mt(
    q,
    () => h() && i(),
    (z) => {
      var Y = j(), et = /* @__PURE__ */ N(Y);
      _t(
        et,
        wt(t),
        {
          get builder() {
            return O(u);
          }
        }
      ), x(z, Y);
    },
    (z) => {
      var Y = j(), et = /* @__PURE__ */ N(Y);
      mt(
        et,
        () => a() && i(),
        (T) => {
          var p = sl();
          Ft(p, (E) => v(E), () => v()), Gt(3, p, a, c);
          let b;
          var A = /* @__PURE__ */ ut(p);
          _t(
            A,
            wt(t),
            {
              get builder() {
                return O(u);
              }
            }
          ), pt(() => b = It(p, b, { ...O(u), ...r }, !0, "")), Dt(p, (E) => O(u).action(E)), W("pointerdown", p, function(E) {
            J.call(this, t, E);
          }), W("pointermove", p, function(E) {
            J.call(this, t, E);
          }), W("pointerup", p, function(E) {
            J.call(this, t, E);
          }), W("touchend", p, function(E) {
            J.call(this, t, E);
          }), W("touchstart", p, function(E) {
            J.call(this, t, E);
          }), W("touchcancel", p, function(E) {
            J.call(this, t, E);
          }), W("touchmove", p, function(E) {
            J.call(this, t, E);
          }), x(T, p);
        },
        (T) => {
          var p = j(), b = /* @__PURE__ */ N(p);
          mt(
            b,
            () => l() && d() && i(),
            (A) => {
              var E = al();
              Ft(E, (P) => v(P), () => v()), Gt(1, E, l, f), Gt(2, E, d, m);
              let R;
              var K = /* @__PURE__ */ ut(E);
              _t(
                K,
                wt(t),
                {
                  get builder() {
                    return O(u);
                  }
                }
              ), pt(() => R = It(E, R, { ...O(u), ...r }, !0, "")), Dt(E, (P) => O(u).action(P)), W("pointerdown", E, function(P) {
                J.call(this, t, P);
              }), W("pointermove", E, function(P) {
                J.call(this, t, P);
              }), W("pointerup", E, function(P) {
                J.call(this, t, P);
              }), W("touchend", E, function(P) {
                J.call(this, t, P);
              }), W("touchstart", E, function(P) {
                J.call(this, t, P);
              }), W("touchcancel", E, function(P) {
                J.call(this, t, P);
              }), W("touchmove", E, function(P) {
                J.call(this, t, P);
              }), x(A, E);
            },
            (A) => {
              var E = j(), R = /* @__PURE__ */ N(E);
              mt(
                R,
                () => l() && i(),
                (K) => {
                  var P = ul();
                  Ft(P, (B) => v(B), () => v()), Gt(1, P, l, f);
                  let Z;
                  var st = /* @__PURE__ */ ut(P);
                  _t(
                    st,
                    wt(t),
                    {
                      get builder() {
                        return O(u);
                      }
                    }
                  ), pt(() => Z = It(P, Z, { ...O(u), ...r }, !0, "")), Dt(P, (B) => O(u).action(B)), W("pointerdown", P, function(B) {
                    J.call(this, t, B);
                  }), W("pointermove", P, function(B) {
                    J.call(this, t, B);
                  }), W("pointerup", P, function(B) {
                    J.call(this, t, B);
                  }), W("touchend", P, function(B) {
                    J.call(this, t, B);
                  }), W("touchstart", P, function(B) {
                    J.call(this, t, B);
                  }), W("touchcancel", P, function(B) {
                    J.call(this, t, B);
                  }), W("touchmove", P, function(B) {
                    J.call(this, t, B);
                  }), x(K, P);
                },
                (K) => {
                  var P = j(), Z = /* @__PURE__ */ N(P);
                  mt(
                    Z,
                    () => d() && i(),
                    (st) => {
                      var B = cl();
                      Ft(B, (U) => v(U), () => v()), Gt(2, B, d, m);
                      let Tt;
                      var kt = /* @__PURE__ */ ut(B);
                      _t(
                        kt,
                        wt(t),
                        {
                          get builder() {
                            return O(u);
                          }
                        }
                      ), pt(() => Tt = It(B, Tt, { ...O(u), ...r }, !0, "")), Dt(B, (U) => O(u).action(U)), W("pointerdown", B, function(U) {
                        J.call(this, t, U);
                      }), W("pointermove", B, function(U) {
                        J.call(this, t, U);
                      }), W("pointerup", B, function(U) {
                        J.call(this, t, U);
                      }), W("touchend", B, function(U) {
                        J.call(this, t, U);
                      }), W("touchstart", B, function(U) {
                        J.call(this, t, U);
                      }), W("touchcancel", B, function(U) {
                        J.call(this, t, U);
                      }), W("touchmove", B, function(U) {
                        J.call(this, t, U);
                      }), x(st, B);
                    },
                    (st) => {
                      var B = j(), Tt = /* @__PURE__ */ N(B);
                      mt(
                        Tt,
                        i,
                        (kt) => {
                          var U = ll();
                          Ft(U, (Q) => v(Q), () => v());
                          let re;
                          var Qt = /* @__PURE__ */ ut(U);
                          _t(
                            Qt,
                            wt(t),
                            {
                              get builder() {
                                return O(u);
                              }
                            }
                          ), pt(() => re = It(U, re, { ...O(u), ...r }, !0, "")), Dt(U, (Q) => O(u).action(Q)), W("pointerdown", U, function(Q) {
                            J.call(this, t, Q);
                          }), W("pointermove", U, function(Q) {
                            J.call(this, t, Q);
                          }), W("pointerup", U, function(Q) {
                            J.call(this, t, Q);
                          }), W("touchend", U, function(Q) {
                            J.call(this, t, Q);
                          }), W("touchstart", U, function(Q) {
                            J.call(this, t, Q);
                          }), W("touchcancel", U, function(Q) {
                            J.call(this, t, Q);
                          }), W("touchmove", U, function(Q) {
                            J.call(this, t, Q);
                          }), x(kt, U);
                        },
                        null,
                        !0
                      ), x(st, B);
                    },
                    !0
                  ), x(K, P);
                },
                !0
              ), x(A, E);
            },
            !0
          ), x(T, p);
        },
        !0
      ), x(z, Y);
    }
  ), x(e, M), Pt();
}
var dl = /* @__PURE__ */ $("<div></div>"), vl = /* @__PURE__ */ $("<div></div>"), ml = /* @__PURE__ */ $("<div></div>"), gl = /* @__PURE__ */ $("<div></div>"), hl = /* @__PURE__ */ $("<div></div>");
function pl(e, t) {
  const n = Yt(t, ["children", "$$slots", "$$events"]), r = Yt(n, [
    "transition",
    "transitionConfig",
    "inTransition",
    "inTransitionConfig",
    "outTransition",
    "outTransitionConfig",
    "asChild",
    "el"
  ]);
  At(t, !1);
  const o = {};
  _e(o);
  const s = () => ne(v, "$overlay", o), i = () => ne(_, "$open", o), u = /* @__PURE__ */ ee();
  let a = k(t, "transition", 8, () => {
  }), c = k(t, "transitionConfig", 8, () => {
  }), l = k(t, "inTransition", 8, () => {
  }), f = k(t, "inTransitionConfig", 8, () => {
  }), d = k(t, "outTransition", 8, () => {
  }), m = k(t, "outTransitionConfig", 8, () => {
  }), h = k(t, "asChild", 0, !1), g = k(t, "el", 12, () => {
  });
  const {
    elements: { overlay: v },
    states: { open: _ },
    getAttrs: y
  } = Vn(), C = y("overlay");
  X(() => s(), () => {
    ht(u, s());
  }), X(() => O(u), () => {
    Object.assign(O(u), C);
  }), be(), ye();
  var S = j(), V = /* @__PURE__ */ N(S);
  mt(
    V,
    () => h() && i(),
    (M) => {
      var q = j(), z = /* @__PURE__ */ N(q);
      _t(
        z,
        wt(t),
        {
          get builder() {
            return O(u);
          }
        }
      ), x(M, q);
    },
    (M) => {
      var q = j(), z = /* @__PURE__ */ N(q);
      mt(
        z,
        () => a() && i(),
        (Y) => {
          var et = dl();
          Ft(et, (p) => g(p), () => g()), Gt(3, et, a, c);
          let T;
          pt(() => T = It(et, T, { ...O(u), ...r }, !0, "")), W("mouseup", et, function(p) {
            J.call(this, t, p);
          }), Dt(et, (p) => O(u).action(p)), x(Y, et);
        },
        (Y) => {
          var et = j(), T = /* @__PURE__ */ N(et);
          mt(
            T,
            () => l() && d() && i(),
            (p) => {
              var b = vl();
              Ft(b, (E) => g(E), () => g()), Gt(1, b, l, f), Gt(2, b, d, m);
              let A;
              pt(() => A = It(b, A, { ...O(u), ...r }, !0, "")), Dt(b, (E) => O(u).action(E)), W("mouseup", b, function(E) {
                J.call(this, t, E);
              }), x(p, b);
            },
            (p) => {
              var b = j(), A = /* @__PURE__ */ N(b);
              mt(
                A,
                () => l() && i(),
                (E) => {
                  var R = ml();
                  Ft(R, (P) => g(P), () => g()), Gt(1, R, l, f);
                  let K;
                  pt(() => K = It(R, K, { ...O(u), ...r }, !0, "")), Dt(R, (P) => O(u).action(P)), W("mouseup", R, function(P) {
                    J.call(this, t, P);
                  }), x(E, R);
                },
                (E) => {
                  var R = j(), K = /* @__PURE__ */ N(R);
                  mt(
                    K,
                    () => d() && i(),
                    (P) => {
                      var Z = gl();
                      Ft(Z, (B) => g(B), () => g()), Gt(2, Z, d, m);
                      let st;
                      pt(() => st = It(Z, st, { ...O(u), ...r }, !0, "")), Dt(Z, (B) => O(u).action(B)), W("mouseup", Z, function(B) {
                        J.call(this, t, B);
                      }), x(P, Z);
                    },
                    (P) => {
                      var Z = j(), st = /* @__PURE__ */ N(Z);
                      mt(
                        st,
                        i,
                        (B) => {
                          var Tt = hl();
                          Ft(Tt, (U) => g(U), () => g());
                          let kt;
                          pt(() => kt = It(Tt, kt, { ...O(u), ...r }, !0, "")), Dt(Tt, (U) => O(u).action(U)), W("mouseup", Tt, function(U) {
                            J.call(this, t, U);
                          }), x(B, Tt);
                        },
                        null,
                        !0
                      ), x(P, Z);
                    },
                    !0
                  ), x(E, R);
                },
                !0
              ), x(p, b);
            },
            !0
          ), x(Y, et);
        },
        !0
      ), x(M, q);
    }
  ), x(e, S), Pt();
}
function bl(e, t) {
  At(t, !1);
  const n = {};
  _e(n);
  const r = () => ne(S, "$idValues", n);
  let o = k(t, "closeOnOutsideClick", 8, () => {
  }), s = k(t, "closeOnEscape", 8, () => {
  }), i = k(t, "portal", 8, () => {
  }), u = k(t, "open", 12, () => {
  }), a = k(t, "onOpenChange", 8, () => {
  }), c = k(t, "preventScroll", 8, () => {
  }), l = k(t, "loop", 8, () => {
  }), f = k(t, "dir", 8, () => {
  }), d = k(t, "typeahead", 8, () => {
  }), m = k(t, "closeFocus", 8, () => {
  }), h = k(t, "disableFocusFirstItem", 8, () => {
  }), g = k(t, "closeOnItemClick", 8, () => {
  }), v = k(t, "onOutsideClick", 8, () => {
  });
  const {
    states: { open: _ },
    updateOption: y,
    ids: C
  } = Jc({
    closeOnOutsideClick: o(),
    closeOnEscape: s(),
    portal: i(),
    forceVisible: !0,
    defaultOpen: u(),
    preventScroll: c(),
    loop: l(),
    dir: f(),
    typeahead: d(),
    closeFocus: m(),
    disableFocusFirstItem: h(),
    closeOnItemClick: g(),
    onOutsideClick: v(),
    onOpenChange: ({ next: q }) => {
      var z;
      return u() !== q && ((z = a()) == null || z(q), u(q)), q;
    }
  }), S = le([C.menu, C.trigger], ([q, z]) => ({ menu: q, trigger: z }));
  X(() => rt(u()), () => {
    u() !== void 0 && _.set(u());
  }), X(
    () => rt(o()),
    () => {
      y("closeOnOutsideClick", o());
    }
  ), X(() => rt(s()), () => {
    y("closeOnEscape", s());
  }), X(() => rt(i()), () => {
    y("portal", i());
  }), X(() => rt(c()), () => {
    y("preventScroll", c());
  }), X(() => rt(l()), () => {
    y("loop", l());
  }), X(() => rt(f()), () => {
    y("dir", f());
  }), X(() => rt(m()), () => {
    y("closeFocus", m());
  }), X(
    () => rt(h()),
    () => {
      y("disableFocusFirstItem", h());
    }
  ), X(() => rt(d()), () => {
    y("typeahead", d());
  }), X(() => rt(g()), () => {
    y("closeOnItemClick", g());
  }), X(() => rt(v()), () => {
    y("onOutsideClick", v());
  }), be(), ye();
  var V = j(), M = /* @__PURE__ */ N(V);
  _t(
    M,
    wt(t),
    {
      get ids() {
        return r();
      }
    }
  ), x(e, V), Pt();
}
var yl = /* @__PURE__ */ $("<div><!></div>"), _l = /* @__PURE__ */ $("<div><!></div>"), wl = /* @__PURE__ */ $("<div><!></div>"), El = /* @__PURE__ */ $("<div><!></div>"), Tl = /* @__PURE__ */ $("<div><!></div>");
function Ol(e, t) {
  const n = Yt(t, ["children", "$$slots", "$$events"]), r = Yt(n, [
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
  At(t, !1);
  const o = {};
  _e(o);
  const s = () => ne(p, "$menu", o), i = () => ne(b, "$open", o), u = /* @__PURE__ */ ee();
  let a = k(t, "transition", 8, () => {
  }), c = k(t, "transitionConfig", 8, () => {
  }), l = k(t, "inTransition", 8, () => {
  }), f = k(t, "inTransitionConfig", 8, () => {
  }), d = k(t, "outTransition", 8, () => {
  }), m = k(t, "outTransitionConfig", 8, () => {
  }), h = k(t, "asChild", 0, !1), g = k(t, "id", 8, () => {
  }), v = k(t, "side", 0, "bottom"), _ = k(t, "align", 0, "center"), y = k(t, "sideOffset", 0, 0), C = k(t, "alignOffset", 0, 0), S = k(t, "collisionPadding", 0, 8), V = k(t, "avoidCollisions", 0, !0), M = k(t, "collisionBoundary", 8, () => {
  }), q = k(t, "sameWidth", 0, !1), z = k(t, "fitViewport", 0, !1), Y = k(t, "strategy", 0, "absolute"), et = k(t, "overlap", 0, !1), T = k(t, "el", 12, () => {
  });
  const {
    elements: { menu: p },
    states: { open: b },
    ids: A,
    getAttrs: E
  } = _r(), R = yr(), K = E("content");
  X(() => rt(g()), () => {
    g() && A.menu.set(g());
  }), X(() => s(), () => {
    ht(u, s());
  }), X(() => O(u), () => {
    Object.assign(O(u), K);
  }), X(
    () => (i(), rt(v()), rt(_()), rt(y()), rt(C()), rt(S()), rt(V()), rt(M()), rt(q()), rt(z()), rt(Y()), rt(et())),
    () => {
      i() && Qc({
        side: v(),
        align: _(),
        sideOffset: y(),
        alignOffset: C(),
        collisionPadding: S(),
        avoidCollisions: V(),
        collisionBoundary: M(),
        sameWidth: q(),
        fitViewport: z(),
        strategy: Y(),
        overlap: et()
      });
    }
  ), be(), ye();
  var P = j(), Z = /* @__PURE__ */ N(P);
  mt(
    Z,
    () => h() && i(),
    (st) => {
      var B = j(), Tt = /* @__PURE__ */ N(B);
      _t(
        Tt,
        wt(t),
        {
          get builder() {
            return O(u);
          }
        }
      ), x(st, B);
    },
    (st) => {
      var B = j(), Tt = /* @__PURE__ */ N(B);
      mt(
        Tt,
        () => a() && i(),
        (kt) => {
          var U = yl();
          Ft(U, (Q) => T(Q), () => T()), Gt(3, U, a, c);
          let re;
          var Qt = /* @__PURE__ */ ut(U);
          _t(
            Qt,
            wt(t),
            {
              get builder() {
                return O(u);
              }
            }
          ), pt(() => re = It(U, re, { ...O(u), ...r }, !0, "")), Dt(U, (Q) => O(u).action(Q)), W("m-keydown", U, R, !1), x(kt, U);
        },
        (kt) => {
          var U = j(), re = /* @__PURE__ */ N(U);
          mt(
            re,
            () => l() && d() && i(),
            (Qt) => {
              var Q = _l();
              Ft(Q, (jt) => T(jt), () => T()), Gt(1, Q, l, f), Gt(2, Q, d, m);
              let we;
              var Ee = /* @__PURE__ */ ut(Q);
              _t(
                Ee,
                wt(t),
                {
                  get builder() {
                    return O(u);
                  }
                }
              ), pt(() => we = It(Q, we, { ...O(u), ...r }, !0, "")), Dt(Q, (jt) => O(u).action(jt)), W("m-keydown", Q, R, !1), x(Qt, Q);
            },
            (Qt) => {
              var Q = j(), we = /* @__PURE__ */ N(Q);
              mt(
                we,
                () => l() && i(),
                (Ee) => {
                  var jt = wl();
                  Ft(jt, (Wt) => T(Wt), () => T()), Gt(1, jt, l, f);
                  let ke;
                  var qe = /* @__PURE__ */ ut(jt);
                  _t(
                    qe,
                    wt(t),
                    {
                      get builder() {
                        return O(u);
                      }
                    }
                  ), pt(() => ke = It(jt, ke, { ...O(u), ...r }, !0, "")), Dt(jt, (Wt) => O(u).action(Wt)), W("m-keydown", jt, R, !1), x(Ee, jt);
                },
                (Ee) => {
                  var jt = j(), ke = /* @__PURE__ */ N(jt);
                  mt(
                    ke,
                    () => d() && i(),
                    (qe) => {
                      var Wt = El();
                      Ft(Wt, (Xt) => T(Xt), () => T()), Gt(2, Wt, d, m);
                      let Se;
                      var Ue = /* @__PURE__ */ ut(Wt);
                      _t(
                        Ue,
                        wt(t),
                        {
                          get builder() {
                            return O(u);
                          }
                        }
                      ), pt(() => Se = It(Wt, Se, { ...O(u), ...r }, !0, "")), Dt(Wt, (Xt) => O(u).action(Xt)), W("m-keydown", Wt, R, !1), x(qe, Wt);
                    },
                    (qe) => {
                      var Wt = j(), Se = /* @__PURE__ */ N(Wt);
                      mt(
                        Se,
                        i,
                        (Ue) => {
                          var Xt = Tl();
                          Ft(Xt, (He) => T(He), () => T());
                          let rn;
                          var Er = /* @__PURE__ */ ut(Xt);
                          _t(
                            Er,
                            wt(t),
                            {
                              get builder() {
                                return O(u);
                              }
                            }
                          ), pt(() => rn = It(Xt, rn, { ...O(u), ...r }, !0, "")), Dt(Xt, (He) => O(u).action(He)), W("m-keydown", Xt, R, !1), x(Ue, Xt);
                        },
                        null,
                        !0
                      ), x(qe, Wt);
                    },
                    !0
                  ), x(Ee, jt);
                },
                !0
              ), x(Qt, Q);
            },
            !0
          ), x(kt, U);
        },
        !0
      ), x(st, B);
    }
  ), x(e, P), Pt();
}
var xl = /* @__PURE__ */ $("<button><!></button>");
function Cl(e, t) {
  const n = Yt(t, ["children", "$$slots", "$$events"]), r = Yt(n, ["asChild", "id", "el"]);
  At(t, !1);
  const o = {};
  _e(o);
  const s = () => ne(l, "$trigger", o), i = /* @__PURE__ */ ee();
  let u = k(t, "asChild", 0, !1), a = k(t, "id", 8, () => {
  }), c = k(t, "el", 12, () => {
  });
  const { elements: { trigger: l }, ids: f, getAttrs: d } = _r(), m = yr(), h = d("trigger");
  X(() => rt(a()), () => {
    a() && f.trigger.set(a());
  }), X(() => s(), () => {
    ht(i, s());
  }), X(() => O(i), () => {
    Object.assign(O(i), h);
  }), be(), ye();
  var g = j(), v = /* @__PURE__ */ N(g);
  mt(
    v,
    u,
    (_) => {
      var y = j(), C = /* @__PURE__ */ N(y);
      _t(
        C,
        wt(t),
        {
          get builder() {
            return O(i);
          }
        }
      ), x(_, y);
    },
    (_) => {
      var y = xl();
      Ft(y, (V) => c(V), () => c());
      let C;
      var S = /* @__PURE__ */ ut(y);
      _t(
        S,
        wt(t),
        {
          get builder() {
            return O(i);
          }
        }
      ), pt(() => C = It(
        y,
        C,
        {
          ...O(i),
          type: "button",
          ...r
        },
        !0,
        ""
      )), Dt(y, (V) => O(i).action(V)), W("m-keydown", y, m, !1), W("m-pointerdown", y, m, !1), x(_, y);
    }
  ), x(e, g), Pt();
}
var Al = /* @__PURE__ */ Sa('<svg role="img"><use></use></svg>');
function wr(e, t) {
  const n = {
    "chevron-down": "chevron-down",
    "comment-lines": "comment-lines",
    close: "close",
    "copy-to-clipboard": "copy-to-clipboard"
  }, r = k(t, "class", 3, ""), o = k(t, "size", 3, 16);
  var s = Al(), i = /* @__PURE__ */ ut(s);
  pt(() => {
    Ta(s, `gl-icon s${mn(o())} ${mn(r())}`), jn(i, "href", `/assets/icons-1563760c6022424ca5187159258484be0c106b044e5e5a1b4f0be7a10cd6c90f.svg#${mn(n[t.name])}`);
  }), x(e, s);
}
var Pl = /* @__PURE__ */ $('<span class="gl-button-text gl-w-full"><span class="gl-new-dropdown-button-text"><!></span> <!></span>'), kl = /* @__PURE__ */ $("<div><!></div>");
function Sl(e, t) {
  At(t, !0);
  const n = k(t, "class", 3, "");
  var r = kl(), o = /* @__PURE__ */ ut(r);
  Cl(o, {
    class: "btn btn-default btn-md gl-button gl-new-dropdown-toggle",
    children: (s, i) => {
      var u = Pl(), a = /* @__PURE__ */ ut(u), c = /* @__PURE__ */ ut(a);
      Ae(() => t.children, c);
      var l = /* @__PURE__ */ Nt(/* @__PURE__ */ Nt(a, !0));
      wr(l, {
        name: "chevron-down",
        class: "gl-button-icon gl-new-dropdown-chevron"
      }), x(s, u);
    },
    $$slots: { default: !0 }
  }), pt(() => io(r, `gl-disclosure-dropdown gl-new-dropdown ${mn(n())}`)), x(e, r), Pt();
}
var Rl = /* @__PURE__ */ $('<div class="gl-new-dropdown-panel gl-display-block!"><div class="gl-new-dropdown-inner"><div class="gl-new-dropdown-contents"><!></div></div></div>');
function Dl(e, t) {
  At(t, !0);
  var n = j(), r = /* @__PURE__ */ N(n);
  Ol(r, {
    class: "gl-new-dropdown",
    align: "start",
    sideOffset: 4,
    children: (o, s) => {
      var i = Rl(), u = /* @__PURE__ */ ut(i), a = /* @__PURE__ */ ut(u), c = /* @__PURE__ */ ut(a);
      Ae(() => t.children, c), x(o, i);
    },
    $$slots: { default: !0 }
  }), x(e, n), Pt();
}
var Fl = /* @__PURE__ */ $('<div class="gl-new-dropdown-item-content"><span class="gl-new-dropdown-item-text-wrapper"><!></span></div>');
function Nl(e, t) {
  At(t, !0);
  var n = j(), r = /* @__PURE__ */ N(n);
  $c(r, {
    class: "gl-new-dropdown-item",
    get onclick() {
      return t.onclick;
    },
    children: (o, s) => {
      var i = Fl(), u = /* @__PURE__ */ ut(i), a = /* @__PURE__ */ ut(u);
      Ae(() => t.children, a), x(o, i);
    },
    $$slots: { default: !0 }
  }), x(e, n), Pt();
}
const Zn = {
  Root: bl,
  Trigger: Sl,
  Content: Dl,
  Item: Nl
};
var Il = /* @__PURE__ */ $('<img src="/uploads/-/system/project/avatar/10/256x256.png" alt="Daktela logo">');
function Ml(e, t) {
  const n = k(t, "class", 3, "");
  var r = Il();
  pt(() => {
    io(r, n()), jn(r, "style", t.style);
  }), x(e, r);
}
function Ll(e) {
  var t = j(), n = /* @__PURE__ */ N(t);
  pl(n, { class: "modal-backdrop" }), x(e, t);
}
var Bl = /* @__PURE__ */ $('<div class="modal fade show gl-modal" style="display: block;"><div><div class="modal-content"><!></div></div></div>');
function jl(e, t) {
  At(t, !0);
  const n = k(t, "size", 3, "md");
  var r = j(), o = /* @__PURE__ */ N(r);
  fl(o, {
    children: (s, i) => {
      var u = Bl(), a = /* @__PURE__ */ ut(u), c = /* @__PURE__ */ ut(a), l = /* @__PURE__ */ ut(c);
      Ae(() => t.children, l), pt(() => io(a, `modal-dialog modal-${mn(n())}`)), x(s, u);
    },
    $$slots: { default: !0 }
  }), x(e, r), Pt();
}
var Kl = /* @__PURE__ */ $('<header class="modal-header"><!></header>');
function Wl(e, t) {
  At(t, !0);
  var n = Kl(), r = /* @__PURE__ */ ut(n);
  Ae(() => t.children, r), x(e, n), Pt();
}
function Vl(e, t) {
  At(t, !0);
  var n = j(), r = /* @__PURE__ */ N(n);
  nl(r, {
    class: "modal-title",
    children: (o, s) => {
      var i = j(), u = /* @__PURE__ */ N(i);
      Ae(() => t.children, u), x(o, i);
    },
    $$slots: { default: !0 }
  }), x(e, n), Pt();
}
var ql = /* @__PURE__ */ $("Close", 1), Ul = /* @__PURE__ */ $('<span class="gl-button-text"><!></span>');
function Hl(e, t) {
  At(t, !0);
  var n = j(), r = /* @__PURE__ */ N(n);
  bs(r, {
    class: "btn btn-default btn-md gl-button",
    children: (o, s) => {
      var i = Ul(), u = /* @__PURE__ */ ut(i);
      mt(
        u,
        () => t.children,
        (a) => {
          var c = j(), l = /* @__PURE__ */ N(c);
          Ae(() => t.children, l), x(a, c);
        },
        (a) => {
          var c = ql();
          x(a, c);
        }
      ), x(o, i);
    },
    $$slots: { default: !0 }
  }), x(e, n), Pt();
}
function zl(e) {
  var t = j(), n = /* @__PURE__ */ N(t);
  bs(n, {
    class: "btn btn-default btn-sm gl-button btn-default-tertiary btn-icon",
    children: (r, o) => {
      var s = j(), i = /* @__PURE__ */ N(s);
      wr(i, { name: "close" }), x(r, s);
    },
    $$slots: { default: !0 }
  }), x(e, t);
}
var Yl = /* @__PURE__ */ $('<div class="modal-body"><!></div>');
function Gl(e, t) {
  At(t, !0);
  var n = Yl(), r = /* @__PURE__ */ ut(n);
  Ae(() => t.children, r), x(e, n), Pt();
}
var Xl = /* @__PURE__ */ $('<footer class="modal-footer"><!></footer>');
function Zl(e, t) {
  At(t, !0);
  var n = Xl(), r = /* @__PURE__ */ ut(n);
  Ae(() => t.children, r), x(e, n), Pt();
}
const ue = {
  Root: el,
  Portal: il,
  Overlay: Ll,
  Content: jl,
  Header: Wl,
  Title: Vl,
  Close: Hl,
  CloseIcon: zl,
  Body: Gl,
  Footer: Zl
};
var Jl = /* @__PURE__ */ $('<div class="gl-p-7 gl-text-center"><div class="gl-spinner-container gl-pb-2"><span class="gl-vertical-align-text-bottom! gl-spinner gl-spinner-dark gl-spinner-lg"></span></div> Loading</div>');
function Ql(e) {
  var t = Jl();
  x(e, t);
}
const $l = [
  "Menlo",
  "'DejaVu Sans Mono'",
  "'Liberation Mono'",
  "Consolas",
  "'Ubuntu Mono'",
  "'Courier New'",
  "'andale mono'",
  "'lucida console'",
  "monospace"
].join(", "), tf = [
  `font-family:${$l}`,
  "font-size:0.8125rem",
  "margin-top:8px",
  "margin-bottom:8px",
  "color:#999999",
  "padding:8px 0 8px 8px",
  "border-width:0 0 0 3px",
  "border-style:none none none solid",
  "border-color:#444444"
].join(";");
function ef(e) {
  return nf(e) + rf(e) + uf(e) + cf(e) + lf(e);
}
function nf(e) {
  return `<p><strong>${e.title}</strong></p>`;
}
function rf(e) {
  return bo("Commits", of([e].concat(e.cherryPicks)));
}
function of(e) {
  return e.map((t) => `${sf(t.branch)} ${af(t.commit)}`);
}
function sf(e) {
  return yo(e.name, e.web_url);
}
function af(e) {
  return yo(e.web_url, e.web_url);
}
function uf(e) {
  return bo("Merge requests", e.mergeRequests.map((t) => ys(t.web_url)));
}
function cf(e) {
  return Object.entries(e.extra).reduce((t, [n, r]) => t + bo(n, df(r), !0), "");
}
function lf(e) {
  return e.body === "" ? "" : `<p>Notes (copied from commit message):</p><pre style="${tf}">${e.body}</pre>`;
}
function bo(e, t, n = !1) {
  return t.length ? t.length === 1 && n ? `<p>${e}: ${t[0]}</p>` : `<p>${e}:</p>` + ff(t) : "";
}
function ff(e) {
  return `<ul>${e.map((t) => `<li>${t}</li>`).join("")}</ul>`;
}
function yo(e, t) {
  return `<a href="${t}" target="_blank" rel="noreferrer noopener">${e}</a>`;
}
function df(e) {
  return e.map(ys);
}
function ys(e) {
  try {
    return yo(e, new URL(e).toString());
  } catch {
    return e;
  }
}
async function vf(e, t) {
  try {
    await navigator.clipboard.writeText(O(t));
  } catch (n) {
    console.error(n);
  }
}
var mf = /* @__PURE__ */ $('<span>Ticket: <a target="_blank" rel="noreferrer noopener"> </a></span>'), gf = /* @__PURE__ */ $('<div class="gl-display-flex gl-justify-content-space-between gl-mb-2"><div><!></div> <button title="Copy message" class="btn input-group-text btn-default btn-md gl-button btn-default-secondary btn-icon"><!></button></div> <textarea readonly="" class="gl-form-input gl-form-textarea form-control"></textarea>', 1);
function hf(e, t) {
  At(t, !0);
  const n = /* @__PURE__ */ Sn(() => ef(t.comment));
  var r = gf(), o = /* @__PURE__ */ N(r), s = /* @__PURE__ */ ut(o), i = /* @__PURE__ */ ut(s);
  mt(i, () => t.comment.ticket, (l) => {
    var f = mf(), d = /* @__PURE__ */ Nt(/* @__PURE__ */ ut(f)), m = /* @__PURE__ */ ut(d);
    pt(() => {
      jn(d, "href", t.comment.ticket), ha(m, t.comment.ticket);
    }), x(l, f);
  });
  var u = /* @__PURE__ */ Nt(/* @__PURE__ */ Nt(s, !0));
  u.__click = [vf, n];
  var a = /* @__PURE__ */ ut(u);
  wr(a, {
    name: "copy-to-clipboard",
    class: "gl-button-icon"
  });
  var c = /* @__PURE__ */ Nt(/* @__PURE__ */ Nt(o, !0));
  pt(() => ya(c, O(n))), x(e, r), Pt();
}
Ni(["click"]);
const pf = "/api/v4", Ie = {
  commits: {
    async findBySHA(e, t) {
      return An(`projects/${ln(e)}/repository/commits/${t}`);
    },
    async refs(e, t, n = "all") {
      return An(`projects/${ln(e)}/repository/commits/${t}/refs`, { type: n });
    },
    async comments(e, t) {
      return An(`projects/${ln(e)}/repository/commits/${t}/comments`);
    },
    async mergeRequests(e, t) {
      return An(`projects/${ln(e)}/repository/commits/${t}/merge_requests`);
    }
  },
  branches: {
    async findByName(e, t) {
      return An(`projects/${ln(e)}/repository/branches/${ln(t)}`);
    }
  }
};
function ln(e) {
  return encodeURIComponent(e);
}
async function An(e, t = {}) {
  const n = new URL(`${pf}/${e}`, location.origin);
  return Object.entries(t).forEach(([o, s]) => n.searchParams.append(o, s)), await (await fetch(n)).json();
}
const ii = {
  async findRefs(e, t) {
    const n = await bf(e, t);
    return Promise.all(
      n.map((r) => this.findRef(e, r))
    );
  },
  async findRef(e, t) {
    const [n, r] = await Promise.all([
      Ie.commits.findBySHA(e, t),
      Ie.commits.refs(e, t, "branch")
    ]);
    return { commit: n, branches: r };
  },
  async deRefAll(e, t) {
    return await Promise.all(
      t.map((n) => this.deRef(e, n))
    );
  },
  async deRef(e, t) {
    const n = await Ie.branches.findByName(e, t.branch.name);
    return { commit: t.commit, branch: n };
  }
};
async function bf(e, t) {
  const n = await Ie.commits.comments(e, t);
  return yf(n);
}
function yf(e) {
  return e.reduce((t, n) => {
    const r = n.note.match(/mentioned\s+in\s+commit\s+(\w+)/i);
    return r !== null && t.push(r[1]), t;
  }, []);
}
const _f = {
  message(e) {
    const t = { title: "", body: "", ticket: void 0, extra: {} }, n = e.message.split(`
`).map((r) => r.trim());
    for (zr(n), t.title = wf(n), zr(n); n.length; )
      Ef(t, n);
    return t.body = t.body.trim(), t;
  }
};
function wf(e) {
  const t = e.shift();
  if (t === void 0)
    throw Error("Could not parse commit title");
  return t.replace(/\s*#\s*\d+\s*$/, "");
}
function Ef(e, t) {
  return Tf(t) || Of(e, t) || xf(e, t) || Cf(e, t) || Af(e, t);
}
function zr(e) {
  return _s(e, /^\s*$/);
}
function Tf(e) {
  return _s(e, /\(.*cherry.*picked.*\)/i);
}
function _s(e, t) {
  let n = !1;
  for (; e.length && e[0].match(t); )
    e.shift(), n = !0;
  return n;
}
function Of(e, t) {
  let n = !1;
  return t.length && t[0].match(/^\s*$/) && (e.body += `
`, n = !0, zr(t)), n;
}
function xf(e, t) {
  if (t.length) {
    const n = t[0].match(/ticket\s*:\s*(http.*)/i);
    if (!n)
      return !1;
    e.ticket = n[1].trim(), t.shift();
  }
  return !0;
}
function Cf(e, t) {
  if (t.length) {
    const n = t[0].match(/^([^:]+):\s*(http.*)/i);
    if (!n)
      return !1;
    const r = n[1].trim(), o = n[2].trim();
    e.extra[r] = e.extra[r] ?? [], e.extra[r].push(o), t.shift();
  }
  return !0;
}
function Af(e, t) {
  const n = t.shift();
  return n !== void 0 && (e.body += `${n}
`), n !== void 0;
}
const Pr = {
  async assembleBase(e, t) {
    const n = await Ie.commits.findBySHA(e, t), [
      r,
      o,
      s
    ] = await Promise.all([
      Ie.commits.refs(e, n.id, "all"),
      ii.findRefs(e, n.id),
      Ie.commits.mergeRequests(e, n.id)
    ]);
    return { commit: n, branches: r, cherryPicks: o, mergeRequests: s };
  },
  async assembleComment(e, t) {
    const [n, r] = await Promise.all([
      Ie.branches.findByName(e, t.branch.name),
      ii.deRefAll(e, t.cherryPicks)
    ]), o = _f.message(t.commit);
    return {
      commit: t.commit,
      branch: n,
      cherryPicks: r,
      mergeRequests: t.mergeRequests,
      title: o.title,
      body: o.body,
      ticket: o.ticket,
      extra: o.extra
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
var Pf = /* @__PURE__ */ $("Generate ticket comment", 1), kf = /* @__PURE__ */ $("<!> <!>", 1), Sf = /* @__PURE__ */ $("<!> <!> <!>", 1), Rf = /* @__PURE__ */ $("<!> <!>", 1);
function Df(e, t) {
  At(t, !0);
  let n = k(t, "args", 7), r = /* @__PURE__ */ Be(ce({ type: "closed" }));
  async function o(d, m) {
    s(d, m);
    const h = await Pr.assembleBase(d, m), g = Pr.resolveBaseUsingFirst(h);
    if (g !== null) {
      const v = await Pr.assembleComment(d, g);
      i(v);
    } else
      console.error("Comment could not be auto-resolved");
  }
  function s(d, m) {
    ht(r, ce({ type: "loading", project: d, commit: m }));
  }
  function i(d) {
    ht(r, ce({ type: "result", comment: d }));
  }
  rr(() => {
    n() !== void 0 && o(n().projectRef, n().sha);
  });
  function u(d) {
    d || a();
  }
  function a() {
    ht(r, ce({ type: "closed" })), n(void 0);
  }
  var c = j(), l = /* @__PURE__ */ N(c), f = /* @__PURE__ */ Sn(() => O(r).type !== "closed");
  ue.Root(l, {
    get open() {
      return O(f);
    },
    onOpenChange: u,
    children: (d, m) => {
      var h = j(), g = /* @__PURE__ */ N(h);
      ue.Portal(g, {
        children: (v, _) => {
          var y = Rf(), C = /* @__PURE__ */ N(y);
          ue.Overlay(C, {});
          var S = /* @__PURE__ */ Nt(/* @__PURE__ */ Nt(C, !0));
          ue.Content(S, {
            size: "sm",
            children: (V, M) => {
              var q = Sf(), z = /* @__PURE__ */ N(q);
              ue.Header(z, {
                children: (T, p) => {
                  var b = kf(), A = /* @__PURE__ */ N(b);
                  ue.Title(A, {
                    children: (R, K) => {
                      var P = Pf();
                      x(R, P);
                    },
                    $$slots: { default: !0 }
                  });
                  var E = /* @__PURE__ */ Nt(/* @__PURE__ */ Nt(A, !0));
                  ue.CloseIcon(E, {}), x(T, b);
                },
                $$slots: { default: !0 }
              });
              var Y = /* @__PURE__ */ Nt(/* @__PURE__ */ Nt(z, !0));
              ue.Body(Y, {
                children: (T, p) => {
                  var b = j(), A = /* @__PURE__ */ N(b);
                  mt(
                    A,
                    () => O(r).type === "loading",
                    (E) => {
                      var R = j(), K = /* @__PURE__ */ N(R);
                      Ql(K), x(E, R);
                    },
                    (E) => {
                      var R = j(), K = /* @__PURE__ */ N(R);
                      mt(
                        K,
                        () => O(r).type === "result",
                        (P) => {
                          var Z = j(), st = /* @__PURE__ */ N(Z);
                          hf(st, {
                            get comment() {
                              return O(r).comment;
                            }
                          }), x(P, Z);
                        },
                        null,
                        !0
                      ), x(E, R);
                    }
                  ), x(T, b);
                },
                $$slots: { default: !0 }
              });
              var et = /* @__PURE__ */ Nt(/* @__PURE__ */ Nt(Y, !0));
              ue.Footer(et, {
                children: (T, p) => {
                  var b = j(), A = /* @__PURE__ */ N(b);
                  ue.Close(A, {}), x(T, b);
                },
                $$slots: { default: !0 }
              }), x(V, q);
            },
            $$slots: { default: !0 }
          }), x(v, y);
        },
        $$slots: { default: !0 }
      }), x(d, h);
    },
    $$slots: { default: !0 }
  }), x(e, c), Pt();
}
var Ff = /* @__PURE__ */ $("<!> Generate ticket comment", 1), Nf = /* @__PURE__ */ $("<!> <!>", 1), If = /* @__PURE__ */ $("<!> <!>", 1);
function _o(e, t) {
  const n = k(t, "class", 3, "");
  let r = /* @__PURE__ */ Be(void 0);
  function o(a, c) {
    ht(r, ce({ projectRef: a, sha: c }));
  }
  var s = If(), i = /* @__PURE__ */ N(s);
  Zn.Root(i, {
    children: (a, c) => {
      var l = Nf(), f = /* @__PURE__ */ N(l);
      Zn.Trigger(f, {
        get class() {
          return n();
        },
        children: (m, h) => {
          var g = j(), v = /* @__PURE__ */ N(g);
          Ml(v, { class: "gl-icon s14", style: "scale: 1.5" }), x(m, g);
        },
        $$slots: { default: !0 }
      });
      var d = /* @__PURE__ */ Nt(/* @__PURE__ */ Nt(f, !0));
      Zn.Content(d, {
        children: (m, h) => {
          var g = j(), v = /* @__PURE__ */ N(g);
          mt(v, () => t.projectRef && t.sha, (_) => {
            var y = j(), C = /* @__PURE__ */ N(y);
            Zn.Item(C, {
              onclick: () => o(t.projectRef, t.sha),
              children: (S, V) => {
                var M = Ff(), q = /* @__PURE__ */ N(M);
                wr(q, { name: "comment-lines", class: "gl-mr-2" }), x(S, M);
              },
              $$slots: { default: !0 }
            }), x(_, y);
          }), x(m, g);
        },
        $$slots: { default: !0 }
      }), x(a, l);
    },
    $$slots: { default: !0 }
  });
  var u = /* @__PURE__ */ Nt(/* @__PURE__ */ Nt(i, !0));
  mt(u, () => t.projectRef && t.sha, (a) => {
    var c = j(), l = /* @__PURE__ */ N(c);
    Df(l, {
      get args() {
        return O(r);
      },
      set args(f) {
        ht(r, ce(f));
      }
    }), x(a, c);
  }), x(e, s);
}
const Yr = {
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
function Mf() {
  try {
    const e = document.querySelector(".page-content-header");
    if (!e)
      return;
    const t = Yr.projects.ref(), n = Yr.commits.sha();
    oo(_o, {
      target: e,
      props: {
        class: "gl-ml-3",
        projectRef: t,
        sha: n
      }
    });
  } catch (e) {
    console.error(e);
  }
}
function Lf() {
  try {
    const e = document.querySelector([
      ".project-last-commit .js-commit-sha-group",
      ".blob-commit-info .commit-sha-group"
    ].join(", "));
    if (!e)
      return;
    const t = e.querySelector("[data-clipboard-text]");
    if (!t || !(t instanceof HTMLElement))
      return;
    const n = Yr.projects.ref(), r = t.dataset.clipboardText ?? "";
    oo(_o, {
      target: e,
      props: {
        projectRef: n,
        sha: r
      }
    });
  } catch (e) {
    console.error(e);
  }
}
function Bf() {
  const e = document.querySelector(".home-panel-description-markdown.read-more-container");
  if (!e)
    return;
  const t = document.createElement("div");
  t.style.border = "1px solid #f00", t.style.paddingBlock = "1rem", e.appendChild(t), oo(_o, {
    target: t,
    props: {
      projectRef: "v5/pbx",
      sha: "10987e3c6f5d6fed0fd12379327859c930999e6e"
    }
  });
}
function jf() {
  Bf(), Mf(), Lf();
}
jf();
//# sourceMappingURL=daktela-gitlab.js.map
