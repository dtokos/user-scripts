const Ds = "5";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Ds);
const Nn = 1, no = 2, Fs = 4, Ns = 8, Is = 16, Br = 64, Ms = 1, Ls = 2, mi = 4, Bs = 8, Ks = 1, js = 2, Ws = 4, Vs = 1, qs = 2, Ne = Symbol(), Us = [
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
], So = ["touchstart", "touchmove", "touchend"], Hs = {
  // no `class: 'className'` because we handle that separately
  formnovalidate: "formNoValidate",
  ismap: "isMap",
  nomodule: "noModule",
  playsinline: "playsInline",
  readonly: "readOnly"
}, gi = "http://www.w3.org/2000/svg";
function zs(t, e = "exclude-on") {
  return t.endsWith("capture") ? e == "exclude-on" ? t !== "gotpointercapture" && t !== "lostpointercapture" : t !== "ongotpointercapture" && t !== "onlostpointercapture" : !1;
}
let hi = !1;
var de = Array.isArray, Ys = Array.from, pi = Object.isFrozen, rr = Object.defineProperty, Kr = Object.getOwnPropertyDescriptor, ro = Object.getOwnPropertyDescriptors, Gs = Object.prototype, Xs = Array.prototype, or = Object.getPrototypeOf, bi = Map.prototype, Zs = bi.set, Qs = bi.get;
function Js(t, e, n) {
  Zs.call(t, e, n);
}
function $s(t, e) {
  return Qs.call(t, e);
}
function ta(t) {
  return typeof t == "function";
}
const en = 2, yi = 4, Kn = 8, oo = 16, ve = 32, io = 64, Ve = 128, ir = 256, me = 512, ge = 1024, nn = 2048, rn = 4096, wn = 8192, _i = 16384, jn = 32768, ea = 65536, Nt = Symbol("$state"), na = Symbol("$state.frozen"), ra = Symbol("");
function wi(t) {
  return t === this.v;
}
function oa(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function so(t) {
  return !oa(t, this.v);
}
function ia(t) {
  throw new Error("effect_in_teardown");
}
function sa() {
  throw new Error("effect_in_unowned_derived");
}
function aa(t) {
  throw new Error("effect_orphan");
}
function ua() {
  throw new Error("effect_update_depth_exceeded");
}
function ca(t) {
  throw new Error("props_invalid_value");
}
function la() {
  throw new Error("state_unsafe_mutation");
}
// @__NO_SIDE_EFFECTS__
function he(t) {
  return {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    reactions: null,
    equals: wi,
    v: t,
    version: 0
  };
}
// @__NO_SIDE_EFFECTS__
function Jt(t) {
  var n;
  const e = /* @__PURE__ */ he(t);
  return e.equals = so, ft !== null && ft.l !== null && ((n = ft.l).s ?? (n.s = [])).push(e), e;
}
function mt(t, e) {
  var n = t.v !== Ne;
  return !fe && n && zt !== null && Vr() && zt.f & en && la(), t.equals(e) || (t.v = e, t.version++, Vr() && n && bt !== null && bt.f & me && !(bt.f & ve) && (Bt !== null && Bt.includes(t) ? (ae(bt, ge), Er(bt)) : Be === null ? ba([t]) : Be.push(t)), lo(t, ge, !0)), e;
}
function Oe(t, e = !0, n = null, r) {
  if (typeof t == "object" && t != null) {
    let o = t;
    if ((pi(o) || na in o) && (o = fa(o)), Nt in o) {
      const i = (
        /** @type {import('#client').ProxyMetadata<T>} */
        o[Nt]
      );
      if (i.t === o || i.p === o)
        return i.p;
    }
    const s = or(o);
    if (s === Gs || s === Xs) {
      const i = new Proxy(o, da);
      return rr(o, Nt, {
        value: (
          /** @type {import('#client').ProxyMetadata} */
          {
            s: /* @__PURE__ */ new Map(),
            v: /* @__PURE__ */ he(0),
            a: de(o),
            i: e,
            p: i,
            t: o
          }
        ),
        writable: !0,
        enumerable: !1
      }), i;
    }
  }
  return t;
}
function jr(t, e) {
  if (typeof t == "object" && t != null && Nt in t) {
    const n = e.get(t);
    if (n !== void 0)
      return n;
    if (de(t)) {
      const r = [];
      e.set(t, r);
      for (const o of t)
        r.push(jr(o, e));
      return r;
    } else {
      const r = {}, o = Reflect.ownKeys(t), s = ro(t);
      e.set(t, r);
      for (const i of o)
        if (i !== Nt)
          if (s[i].get)
            rr(r, i, s[i]);
          else {
            const a = t[i];
            r[i] = jr(a, e);
          }
      return r;
    }
  }
  return t;
}
function fa(t) {
  return (
    /** @type {T} */
    jr(
      /** @type {import('#client').ProxyStateObject} */
      t,
      /* @__PURE__ */ new Map()
    )
  );
}
function Ro(t, e = 1) {
  mt(t, t.v + e);
}
const da = {
  defineProperty(t, e, n) {
    if (n.value) {
      const r = t[Nt], o = r.s.get(e);
      o !== void 0 && mt(o, Oe(n.value, r.i, r));
    }
    return Reflect.defineProperty(t, e, n);
  },
  deleteProperty(t, e) {
    const n = t[Nt], r = n.s.get(e), o = n.a, s = delete t[e];
    if (o && s) {
      const i = n.s.get("length"), a = t.length - 1;
      i !== void 0 && i.v !== a && mt(i, a);
    }
    return r !== void 0 && mt(r, Ne), s && Ro(n.v), s;
  },
  get(t, e, n) {
    var s;
    if (e === Nt)
      return Reflect.get(t, Nt);
    const r = t[Nt];
    let o = r.s.get(e);
    if (o === void 0 && (!(e in t) || (s = Kr(t, e)) != null && s.writable) && (o = (r.i ? he : Jt)(Oe(t[e], r.i, r)), r.s.set(e, o)), o !== void 0) {
      const i = C(o);
      return i === Ne ? void 0 : i;
    }
    return Reflect.get(t, e, n);
  },
  getOwnPropertyDescriptor(t, e) {
    const n = Reflect.getOwnPropertyDescriptor(t, e);
    if (n && "value" in n) {
      const o = t[Nt].s.get(e);
      o && (n.value = C(o));
    }
    return n;
  },
  has(t, e) {
    var s;
    if (e === Nt)
      return !0;
    const n = t[Nt], r = Reflect.has(t, e);
    let o = n.s.get(e);
    return (o !== void 0 || bt !== null && (!r || (s = Kr(t, e)) != null && s.writable)) && (o === void 0 && (o = (n.i ? he : Jt)(
      r ? Oe(t[e], n.i, n) : Ne
    ), n.s.set(e, o)), C(o) === Ne) ? !1 : r;
  },
  set(t, e, n, r) {
    const o = t[Nt];
    let s = o.s.get(e);
    s === void 0 && (ie(() => r[e]), s = o.s.get(e)), s !== void 0 && mt(s, Oe(n, o.i, o));
    const i = o.a, a = !(e in t);
    if (i && e === "length")
      for (let u = n; u < t.length; u += 1) {
        const c = o.s.get(u + "");
        c !== void 0 && mt(c, Ne);
      }
    if (t[e] = n, a) {
      if (i) {
        const u = o.s.get("length"), c = t.length;
        u !== void 0 && u.v !== c && mt(u, c);
      }
      Ro(o.v);
    }
    return !0;
  },
  ownKeys(t) {
    const e = t[Nt];
    return C(e.v), Reflect.ownKeys(t);
  }
}, oe = () => {
};
function va(t) {
  return t();
}
function sr(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
let ar = !1, Wr = [];
function Ei() {
  ar = !1;
  const t = Wr.slice();
  Wr = [], sr(t);
}
function Ti(t) {
  ar || (ar = !0, queueMicrotask(Ei)), Wr.push(t);
}
function ma() {
  ar && Ei();
}
// @__NO_SIDE_EFFECTS__
function In(t) {
  let e = en | ge;
  bt === null && (e |= Ve);
  const n = {
    deps: null,
    deriveds: null,
    equals: wi,
    f: e,
    first: null,
    fn: t,
    last: null,
    reactions: null,
    v: (
      /** @type {V} */
      null
    ),
    version: 0
  };
  if (zt !== null && zt.f & en) {
    var r = (
      /** @type {import('#client').Derived<V>} */
      zt
    );
    r.deriveds === null ? r.deriveds = [n] : r.deriveds.push(n);
  }
  return n;
}
// @__NO_SIDE_EFFECTS__
function ga(t) {
  const e = /* @__PURE__ */ In(t);
  return e.equals = so, e;
}
function xi(t) {
  uo(t);
  var e = t.deriveds;
  if (e !== null) {
    t.deriveds = null;
    for (var n = 0; n < e.length; n += 1)
      ha(e[n]);
  }
}
function Ci(t, e) {
  xi(t);
  var n = Ai(t), r = (gn || t.f & Ve) && t.deps !== null ? nn : me;
  ae(t, r);
  var o = t.equals(n);
  return o || (t.v = n, lo(t, ge, e)), o;
}
function ha(t) {
  xi(t), wr(t, 0), ae(t, wn), t.first = t.last = t.deps = t.reactions = // @ts-expect-error `signal.fn` cannot be `null` while the signal is alive
  t.fn = null;
}
function _r(t) {
  throw new Error("lifecycle_outside_component");
}
const Oi = 0, pa = 1;
let nr = Oi, Mn = !1, hn = !1, ao = !1;
function Do(t) {
  hn = t;
}
function Fo(t) {
  ao = t;
}
function No(t) {
  fe = t;
}
let Ze = [], pn = 0, zt = null, bt = null, Bt = null, Lt = 0, Be = null;
function ba(t) {
  Be = t;
}
let fe = !1, gn = !1, ft = null;
function Vr() {
  return ft !== null && ft.l === null;
}
function En(t) {
  var v;
  var e = t.f, n = (e & ge) !== 0, r = (e & Ve) !== 0;
  if (n && !r)
    return !0;
  var o = (e & ir) !== 0;
  if (e & nn || n && r) {
    var s = t.deps;
    if (s !== null)
      for (var i = s.length, a, u, c = 0; c < i; c++) {
        var l = s[c];
        !n && En(
          /** @type {import('#client').Derived} */
          l
        ) && (a = Ci(
          /** @type {import('#client').Derived} **/
          l,
          !0
        ));
        var f = l.version;
        if (r) {
          if (f > /** @type {import('#client').Derived} */
          t.version)
            return t.version = f, !a;
          !gn && !((v = l == null ? void 0 : l.reactions) != null && v.includes(t)) && (u = l.reactions, u === null ? l.reactions = [t] : u.push(t));
        } else {
          if (t.f & ge)
            return !0;
          o && (f > /** @type {import('#client').Derived} */
          t.version && (t.version = f, n = !0), u = l.reactions, u === null ? l.reactions = [t] : u.includes(t) || u.push(t));
        }
      }
    r || ae(t, me), o && (t.f ^= ir);
  }
  return n;
}
function ya(t, e, n) {
  throw t;
}
function Ai(t) {
  const e = Bt, n = Lt, r = Be, o = zt, s = gn, i = fe;
  Bt = /** @type {null | import('#client').Value[]} */
  null, Lt = 0, Be = null, zt = t, gn = !hn && (t.f & Ve) !== 0, fe = !1;
  try {
    let a = (0, t.fn)(), u = (
      /** @type {import('#client').Value<unknown>[]} **/
      t.deps
    );
    if (Bt !== null) {
      let c;
      if (u !== null) {
        const l = u.length, f = Lt === 0 ? Bt : u.slice(0, Lt).concat(Bt), d = f.length > 16 && l - Lt > 1 ? new Set(f) : null;
        for (c = Lt; c < l; c++) {
          const h = u[c];
          (d !== null ? !d.has(h) : !f.includes(h)) && ki(t, h);
        }
      }
      if (u !== null && Lt > 0)
        for (u.length = Lt + Bt.length, c = 0; c < Bt.length; c++)
          u[Lt + c] = Bt[c];
      else
        t.deps = /** @type {import('#client').Value<V>[]} **/
        u = Bt;
      if (!gn)
        for (c = Lt; c < u.length; c++) {
          const l = u[c], f = l.reactions;
          f === null ? l.reactions = [t] : f[f.length - 1] !== t && f.push(t);
        }
    } else
      u !== null && Lt < u.length && (wr(t, Lt), u.length = Lt);
    return a;
  } finally {
    Bt = e, Lt = n, Be = r, zt = o, gn = s, fe = i;
  }
}
function ki(t, e) {
  const n = e.reactions;
  let r = 0;
  if (n !== null) {
    r = n.length - 1;
    const o = n.indexOf(t);
    o !== -1 && (r === 0 ? e.reactions = null : (n[o] = n[r], n.pop()));
  }
  r === 0 && e.f & en && (ae(e, nn), e.f & (Ve | ir) || (e.f ^= ir), wr(
    /** @type {import('#client').Derived} **/
    e,
    0
  ));
}
function wr(t, e) {
  const n = t.deps;
  if (n !== null) {
    const r = e === 0 ? null : n.slice(0, e);
    let o;
    for (o = e; o < n.length; o++) {
      const s = n[o];
      (r === null || !r.includes(s)) && ki(t, s);
    }
  }
}
function uo(t, e = !0) {
  let n = t.first;
  t.first = null, t.last = null;
  for (var r; n !== null; )
    r = n.next, xn(n, e), n = r;
}
function Wn(t) {
  var e = t.f;
  if (!(e & wn)) {
    ae(t, me);
    var n = t.ctx, r = bt, o = ft;
    bt = t, ft = n;
    try {
      e & oo || uo(t), Li(t);
      var s = Ai(t);
      t.teardown = typeof s == "function" ? s : null;
    } catch (i) {
      ya(
        /** @type {Error} */
        i
      );
    } finally {
      bt = r, ft = o;
    }
  }
}
function Pi() {
  pn > 1e3 && (pn = 0, ua()), pn++;
}
function Si(t) {
  const e = t.length;
  if (e !== 0) {
    Pi();
    var n = hn;
    hn = !0;
    try {
      for (var r = 0; r < e; r++) {
        var o = t[r];
        if (o.first === null && !(o.f & ve))
          Io([o]);
        else {
          var s = [];
          Ri(o, s), Io(s);
        }
      }
    } finally {
      hn = n;
    }
  }
}
function Io(t) {
  var e = t.length;
  if (e !== 0)
    for (var n = 0; n < e; n++) {
      var r = t[n];
      !(r.f & (wn | rn)) && En(r) && Wn(r);
    }
}
function _a() {
  if (Mn = !1, pn > 1001)
    return;
  const t = Ze;
  Ze = [], Si(t), Mn || (pn = 0);
}
function Er(t) {
  nr === Oi && (Mn || (Mn = !0, queueMicrotask(_a)));
  for (var e = t; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if (n & ve) {
      if (!(n & me))
        return;
      ae(e, nn);
    }
  }
  Ze.push(e);
}
function Ri(t, e) {
  var n = t.first, r = [];
  t:
    for (; n !== null; ) {
      var o = n.f, s = (o & (wn | rn)) === 0, i = o & ve, a = (o & me) !== 0, u = n.first;
      if (s && (!i || !a)) {
        if (i && ae(n, me), o & Kn) {
          if (!i && En(n) && (Wn(n), u = n.first), u !== null) {
            n = u;
            continue;
          }
        } else if (o & yi)
          if (i || a) {
            if (u !== null) {
              n = u;
              continue;
            }
          } else
            r.push(n);
      }
      var c = n.next;
      if (c === null) {
        let v = n.parent;
        for (; v !== null; ) {
          if (t === v)
            break t;
          var l = v.next;
          if (l !== null) {
            n = l;
            continue t;
          }
          v = v.parent;
        }
      }
      n = c;
    }
  for (var f = 0; f < r.length; f++)
    u = r[f], e.push(u), Ri(u, e);
}
function co(t, e = !0) {
  var n = nr, r = Ze;
  try {
    Pi();
    const s = [];
    nr = pa, Ze = s, Mn = !1, e && Si(r);
    var o = t == null ? void 0 : t();
    return ma(), (Ze.length > 0 || s.length > 0) && co(), pn = 0, o;
  } finally {
    nr = n, Ze = r;
  }
}
async function Qe() {
  await Promise.resolve(), co();
}
function C(t) {
  const e = t.f;
  if (e & wn)
    return t.v;
  if (zt !== null && !(zt.f & (ve | io)) && !fe) {
    const n = (zt.f & Ve) !== 0, r = zt.deps;
    Bt === null && r !== null && r[Lt] === t && !(n && bt !== null) ? Lt++ : (r === null || Lt === 0 || r[Lt - 1] !== t) && (Bt === null ? Bt = [t] : Bt[Bt.length - 1] !== t && Bt.push(t)), Be !== null && bt !== null && bt.f & me && !(bt.f & ve) && Be.includes(t) && (ae(bt, ge), Er(bt));
  }
  return e & en && En(
    /** @type {import('#client').Derived} */
    t
  ) && Ci(
    /** @type {import('#client').Derived} **/
    t,
    !1
  ), t.v;
}
function lo(t, e, n) {
  var r = t.reactions;
  if (r !== null)
    for (var o = Vr(), s = r.length, i = 0; i < s; i++) {
      var a = r[i], u = a.f;
      if (!(u & ge || (!n || !o) && a === bt)) {
        ae(a, e);
        var c = (u & nn) !== 0, l = (u & Ve) !== 0;
        (u & me || c && l) && (a.f & en ? lo(
          /** @type {import('#client').Derived} */
          a,
          nn,
          n
        ) : Er(
          /** @type {import('#client').Effect} */
          a
        ));
      }
    }
}
function ie(t) {
  const e = fe;
  try {
    return fe = !0, t();
  } finally {
    fe = e;
  }
}
const wa = ~(ge | nn | me);
function ae(t, e) {
  t.f = t.f & wa | e;
}
function Ea(t) {
  return typeof t == "object" && t !== null && typeof /** @type {import('#client').Value<V>} */
  t.f == "number";
}
function Di(t) {
  return (
    /** @type {T} */
    Ni().get(t)
  );
}
function Fi(t, e) {
  return Ni().set(t, e), e;
}
function Ni(t) {
  return ft === null && _r(), ft.c ?? (ft.c = new Map(
    Ta(ft) || void 0
  ));
}
function Ta(t) {
  let e = t.p;
  for (; e !== null; ) {
    const n = e.c;
    if (n !== null)
      return n;
    e = e.p;
  }
  return null;
}
function xa(t, e = 1) {
  var n = +C(t);
  return mt(t, n + e), n;
}
function Tt(t, e = !1, n) {
  ft = {
    p: ft,
    c: null,
    e: null,
    m: !1,
    s: t,
    x: null,
    l: null
  }, e || (ft.l = {
    s: null,
    u: null,
    r1: [],
    r2: /* @__PURE__ */ he(!1)
  });
}
function xt(t) {
  const e = ft;
  if (e !== null) {
    const r = e.e;
    if (r !== null) {
      e.e = null;
      for (var n = 0; n < r.length; n++)
        ye(r[n]);
    }
    ft = e.p, e.m = !0;
  }
  return (
    /** @type {T} */
    {}
  );
}
function rt(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if (Nt in t)
      qr(t);
    else if (!Array.isArray(t))
      for (let e in t) {
        const n = t[e];
        typeof n == "object" && n && Nt in n && qr(n);
      }
  }
}
function qr(t, e = /* @__PURE__ */ new Set()) {
  if (typeof t == "object" && t !== null && // We don't want to traverse DOM elements
  !(t instanceof EventTarget) && !e.has(t)) {
    e.add(t), t instanceof Date && t.getTime();
    for (let r in t)
      try {
        qr(t[r], e);
      } catch {
      }
    const n = or(t);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = ro(n);
      for (let o in r) {
        const s = r[o].get;
        if (s)
          try {
            s.call(t);
          } catch {
          }
      }
    }
  }
}
function Gn(t) {
  return Ea(t) ? C(t) : t;
}
function Ca(t) {
  var e = document.createElement("template");
  return e.innerHTML = t, e.content;
}
function Oa(t) {
  if (de(t))
    for (var e = 0; e < t.length; e++) {
      var n = t[e];
      n.isConnected && n.remove();
    }
  else
    t.isConnected && t.remove();
}
function Ii(t) {
  bt === null && zt === null && aa(), ao && ia();
}
function Mo(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function Vn(t, e, n) {
  var r = (t & io) !== 0, o = {
    ctx: ft,
    deps: null,
    dom: null,
    f: t | ge,
    first: null,
    fn: e,
    last: null,
    next: null,
    parent: r ? null : bt,
    prev: null,
    teardown: null,
    transitions: null
  };
  if (zt !== null && !r) {
    var s = zt.f;
    s & en && (s & Ve && sa(), bt !== null && Mo(o, bt)), Mo(o, zt);
  }
  if (n) {
    var i = hn;
    try {
      Do(!0), Wn(o), o.f |= _i;
    } finally {
      Do(i);
    }
  } else
    Er(o);
  return o;
}
function ur(t) {
  Ii();
  var e = bt !== null && (bt.f & Kn) !== 0 && // TODO do we actually need this? removing them changes nothing
  ft !== null && !ft.m;
  if (e) {
    var n = (
      /** @type {import('#client').ComponentContext} */
      ft
    );
    (n.e ?? (n.e = [])).push(t);
  } else {
    var r = ye(t);
    return r;
  }
}
function Aa(t) {
  return Ii(), Tn(t);
}
function Mi(t) {
  const e = Vn(io, t, !0);
  return () => {
    xn(e);
  };
}
function ye(t) {
  return Vn(yi, t, !1);
}
function Z(t, e) {
  var n = (
    /** @type {import('#client').ComponentContextLegacy} */
    ft
  ), r = { effect: null, ran: !1 };
  n.l.r1.push(r), r.effect = Tn(() => {
    t(), !r.ran && (r.ran = !0, mt(n.l.r2, !0), ie(e));
  });
}
function _e() {
  var t = (
    /** @type {import('#client').ComponentContextLegacy} */
    ft
  );
  Tn(() => {
    if (C(t.l.r2)) {
      for (var e of t.l.r1) {
        var n = e.effect;
        En(n) && Wn(n), e.ran = !1;
      }
      t.l.r2.v = !1;
    }
  });
}
function Tn(t) {
  return Vn(Kn, t, !0);
}
function pt(t) {
  return Tn(t);
}
function Tr(t, e = 0) {
  return Vn(Kn | oo | e, t, !0);
}
function on(t) {
  return Vn(Kn | ve, t, !0);
}
function Li(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = ao, r = fe;
    Fo(!0), No(!0);
    try {
      e.call(null);
    } finally {
      Fo(n), No(r);
    }
  }
}
function xn(t, e = !0) {
  var n = t.dom;
  if (n !== null && e && Oa(n), uo(t, e), wr(t, 0), ae(t, wn), t.transitions)
    for (const i of t.transitions)
      i.stop();
  Li(t);
  var r = t.parent;
  if (r !== null && t.f & ve && r.first !== null) {
    var o = t.prev, s = t.next;
    o !== null ? s !== null ? (o.next = s, s.prev = o) : (o.next = null, r.last = o) : s !== null ? (s.prev = null, r.first = s) : (r.first = null, r.last = null);
  }
  t.next = t.prev = t.teardown = t.ctx = t.dom = t.deps = t.parent = // @ts-expect-error
  t.fn = null;
}
function cr(t, e) {
  var n = [];
  fo(t, n, !0), Bi(n, () => {
    xn(t), e && e();
  });
}
function Bi(t, e) {
  var n = t.length;
  if (n > 0) {
    var r = () => --n || e();
    for (var o of t)
      o.out(r);
  } else
    e();
}
function fo(t, e, n) {
  if (!(t.f & rn)) {
    if (t.f ^= rn, t.transitions !== null)
      for (const i of t.transitions)
        (i.is_global || n) && e.push(i);
    for (var r = t.first; r !== null; ) {
      var o = r.next, s = (r.f & jn) !== 0 || (r.f & ve) !== 0;
      fo(r, e, s ? n : !1), r = o;
    }
  }
}
function Ln(t) {
  Ki(t, !0);
}
function Ki(t, e) {
  if (t.f & rn) {
    t.f ^= rn, En(t) && Wn(t);
    for (var n = t.first; n !== null; ) {
      var r = n.next, o = (n.f & jn) !== 0 || (n.f & ve) !== 0;
      Ki(n, o ? e : !1), n = r;
    }
    if (t.transitions !== null)
      for (const s of t.transitions)
        (s.is_global || e) && s.in();
  }
}
var Lo;
function ka() {
  if (Lo === void 0) {
    Lo = window;
    var t = Element.prototype;
    t.__click = void 0, t.__className = "", t.__attributes = null, t.__e = void 0, Text.prototype.__nodeValue = " ";
  }
}
function xr() {
  return document.createTextNode("");
}
// @__NO_SIDE_EFFECTS__
function ut(t) {
  return t.firstChild;
}
// @__NO_SIDE_EFFECTS__
function N(t, e) {
  return (
    /** @type {DocumentFragment} */
    t.firstChild
  );
}
// @__NO_SIDE_EFFECTS__
function Kt(t, e = !1) {
  return t.nextSibling;
}
function Pa(t) {
  t.textContent = "";
}
function Ur(t, e, n, r) {
  function o(s) {
    if (r.capture || Hr(e, s), !s.cancelBubble)
      return n.call(this, s);
  }
  return t.startsWith("pointer") || t === "wheel" ? Ti(() => {
    e.addEventListener(t, o, r);
  }) : e.addEventListener(t, o, r), o;
}
function q(t, e, n, r, o) {
  var s = { capture: r, passive: o }, i = Ur(t, e, n, s);
  (e === document.body || e === window || e === document) && Tn(() => () => {
    e.removeEventListener(t, i, s);
  });
}
function ji(t) {
  for (var e = 0; e < t.length; e++)
    Wi.add(t[e]);
  for (var n of zr)
    n(t);
}
function Hr(t, e) {
  var g;
  var n = t.ownerDocument, r = e.type, o = ((g = e.composedPath) == null ? void 0 : g.call(e)) || [], s = (
    /** @type {null | Element} */
    o[0] || e.target
  );
  e.target !== s && rr(e, "target", {
    configurable: !0,
    value: s
  });
  var i = 0, a = e.__root;
  if (a) {
    var u = o.indexOf(a);
    if (u !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var c = o.indexOf(t);
    if (c === -1)
      return;
    u <= c && (i = u + 1);
  }
  s = /** @type {Element} */
  o[i] || e.target, rr(e, "currentTarget", {
    configurable: !0,
    get() {
      return s || n;
    }
  });
  try {
    for (var l, f = []; s !== null; ) {
      var v = s.parentNode || /** @type {any} */
      s.host || null;
      try {
        var d = s["__" + r];
        if (d !== void 0 && !/** @type {any} */
        s.disabled)
          if (de(d)) {
            var [h, ...m] = d;
            h.apply(s, [e, ...m]);
          } else
            d.call(s, e);
      } catch (y) {
        l ? f.push(y) : l = y;
      }
      if (e.cancelBubble || v === t || v === null || s === t)
        break;
      s = v;
    }
    if (l) {
      for (let y of f)
        queueMicrotask(() => {
          throw y;
        });
      throw l;
    }
  } finally {
    e.__root = t, s = t;
  }
}
const Wi = /* @__PURE__ */ new Set(), zr = /* @__PURE__ */ new Set();
let lr = !0;
function Bo(t) {
  lr = t;
}
function Vi(t, e) {
  const n = t.__nodeValue, r = Je(e);
  n !== r && (t.nodeValue = r, t.__nodeValue = r);
}
function _t(t, e, n, r) {
  e === void 0 || e(t, n);
}
function Je(t) {
  return typeof t == "string" ? t : t == null ? "" : t + "";
}
function vo(t, e) {
  const n = e.anchor ?? e.target.appendChild(xr());
  return co(() => Sa(t, { ...e, anchor: n }), !1);
}
function Sa(t, { target: e, anchor: n, props: r = {}, events: o, context: s, intro: i = !1 }) {
  ka();
  const a = /* @__PURE__ */ new Set(), u = Hr.bind(null, e), c = Hr.bind(null, document), l = (d) => {
    for (let h = 0; h < d.length; h++) {
      const m = d[h];
      a.has(m) || (a.add(m), e.addEventListener(
        m,
        u,
        So.includes(m) ? {
          passive: !0
        } : void 0
      ), document.addEventListener(
        m,
        c,
        So.includes(m) ? {
          passive: !0
        } : void 0
      ));
    }
  };
  l(Ys(Wi)), zr.add(l);
  let f;
  const v = Mi(() => (on(() => {
    if (s) {
      Tt({});
      var d = (
        /** @type {import('#client').ComponentContext} */
        ft
      );
      d.c = s;
    }
    o && (r.$$events = o), lr = i, f = t(n, r) || {}, lr = !0, s && xt();
  }), () => {
    for (const d of a)
      e.removeEventListener(d, u);
    zr.delete(l), Ko.delete(f);
  }));
  return Ko.set(f, v), f;
}
let Ko = /* @__PURE__ */ new WeakMap();
function ht(t, e, n, r = null, o = !1) {
  var s = null, i = null, a = null, u = o ? jn : 0;
  Tr(() => {
    a !== (a = !!e()) && (a ? (s ? Ln(s) : s = on(() => n(t)), i && cr(i, () => {
      i = null;
    })) : (i ? Ln(i) : r && (i = on(() => r(t))), s && cr(s, () => {
      s = null;
    })));
  }, u);
}
let bn = null;
function jo(t) {
  bn = t;
}
function Ra(t, e, n) {
  for (var r = [], o = t.length, s = 0; s < o; s++)
    fo(t[s].e, r, !0);
  var i = o > 0 && r.length === 0 && e !== null;
  if (i) {
    var a = (
      /** @type {Element} */
      /** @type {Element} */
      e.parentNode
    );
    Pa(a), a.append(
      /** @type {Element} */
      e
    );
  }
  Bi(r, () => {
    for (var u = 0; u < o; u++)
      xn(t[u].e, !i);
    n !== void 0 && n();
  });
}
function Da(t, e, n, r, o, s = null) {
  var i = { flags: e, items: /* @__PURE__ */ new Map(), next: null }, a = null;
  Tr(() => {
    var u = n(), c = de(u) ? u : u == null ? [] : Array.from(u), l = c.length, f = i.flags;
    f & Br && !pi(c) && !(Nt in c) && (f ^= Br, f & Fs && !(f & Nn) && (f ^= Nn)), Fa(c, i, t, o, f, r), s !== null && (l === 0 ? a ? Ln(a) : a = on(() => s(t)) : a !== null && cr(a, () => {
      a = null;
    }));
  });
}
function Fa(t, e, n, r, o, s) {
  var b, O, x, R;
  var i = (o & Is) !== 0, a = (o & (Nn | no)) !== 0, u = t.length, c = e.items, l = e.next, f = l, v = /* @__PURE__ */ new Set(), d = e, h = /* @__PURE__ */ new Set(), m = [], g = [], y, _, w, k;
  if (i)
    for (k = 0; k < u; k += 1)
      y = t[k], _ = s(y, k), w = c.get(_), w !== void 0 && ((b = w.a) == null || b.measure(), h.add(w));
  for (k = 0; k < u; k += 1) {
    if (y = t[k], _ = s(y, k), w = c.get(_), w === void 0) {
      var B = xr(), I = f ? f.o : n;
      I.before(B), d = Ia(
        B,
        I,
        d,
        d.next,
        y,
        _,
        k,
        r,
        o
      ), c.set(_, d), m = [], g = [], f = d.next;
      continue;
    }
    if (a && Na(w, y, k, o), w.e.f & rn && (Ln(w.e), i && ((O = w.a) == null || O.unfix(), h.delete(w))), w !== f) {
      if (v.has(w)) {
        if (m.length < g.length) {
          var K = g[0], H;
          d = K.prev;
          var Y = m[0], G = m[m.length - 1];
          for (H = 0; H < m.length; H += 1)
            Wo(m[H], K, n);
          for (H = 0; H < g.length; H += 1)
            v.delete(g[H]);
          ze(Y.prev, G.next), ze(d, Y), ze(G, K), f = K, d = G, k -= 1, m = [], g = [];
        } else
          v.delete(w), Wo(w, f, n), ze(w.prev, w.next), ze(w, d.next), ze(d, w), d = w;
        continue;
      }
      for (m = [], g = []; f !== null && f.k !== _; )
        v.add(f), g.push(f), f = f.next;
      if (f === null)
        continue;
      w = f;
    }
    m.push(w), d = w, f = w.next;
  }
  const E = Array.from(v);
  for (; f; )
    E.push(f), f = f.next;
  var p = o & Ns && u === 0 ? n : null;
  if (i) {
    for (k = 0; k < E.length; k += 1)
      (x = E[k].a) == null || x.measure();
    for (k = 0; k < E.length; k += 1)
      (R = E[k].a) == null || R.fix();
  }
  Ra(E, p, () => {
    for (var M = 0; M < E.length; M += 1) {
      var P = E[M];
      c.delete(P.k), P.o.remove(), ze(P.prev, P.next);
    }
  }), i && ye(() => {
    ie(() => {
      var M;
      for (w of h)
        (M = w.a) == null || M.apply();
    });
  });
}
function Na(t, e, n, r) {
  r & Nn && mt(t.v, e), r & no ? mt(
    /** @type {import('#client').Value<number>} */
    t.i,
    n
  ) : t.i = n;
}
function Ia(t, e, n, r, o, s, i, a, u) {
  var c = bn;
  try {
    var l = (u & Nn) !== 0, f = (u & Br) === 0, v = l ? f ? /* @__PURE__ */ Jt(o) : /* @__PURE__ */ he(o) : o, d = u & no ? /* @__PURE__ */ he(i) : i, h = {
      i: d,
      v,
      k: s,
      a: null,
      // @ts-expect-error
      e: null,
      o: t,
      prev: n,
      next: r
    };
    return n.next = h, r !== null && (r.prev = h), bn = h, h.e = on(() => a(e, v, d)), h;
  } finally {
    bn = c;
  }
}
function Wo(t, e, n) {
  for (var r = t.next ? t.next.o : n, o = e ? e.o : n, s = (
    /** @type {import('#client').TemplateNode} */
    t.o
  ); s !== r; ) {
    var i = (
      /** @type {import('#client').TemplateNode} */
      s.nextSibling
    );
    o.before(s), s = i;
  }
}
function ze(t, e) {
  t.next = e, e !== null && (e.prev = t);
}
function Cr(t, e = (
  /** @type {import('#client').Effect} */
  bt
)) {
  var n = e.dom;
  return n === null ? e.dom = t : (de(n) || (n = e.dom = [n]), de(t) ? n.push(...t) : n.push(t)), t;
}
// @__NO_SIDE_EFFECTS__
function et(t, e) {
  var n = (e & Vs) !== 0, r = (e & qs) !== 0, o;
  return () => {
    o || (o = Ca(t), n || (o = /** @type {Node} */
    o.firstChild));
    var s = r ? document.importNode(o, !0) : o.cloneNode(!0);
    return Cr(
      n ? (
        /** @type {import('#client').TemplateNode[]} */
        [...s.childNodes]
      ) : (
        /** @type {import('#client').TemplateNode} */
        s
      )
    ), s;
  };
}
// @__NO_SIDE_EFFECTS__
function Ma(t, e, n = "svg") {
  var r = /* @__PURE__ */ et(`<${n}>${t}</${n}>`, 0), o;
  return () => {
    if (!o) {
      var s = (
        /** @type {Element} */
        r()
      );
      o = /** @type {Element} */
      s.firstChild;
    }
    var i = o.cloneNode(!0);
    return Cr(
      /** @type {import('#client').TemplateNode} */
      i
    ), i;
  };
}
function W() {
  var t = document.createDocumentFragment(), e = xr();
  return t.append(e), Cr([e]), t;
}
function A(t, e) {
  t.before(
    /** @type {Node} */
    e
  );
}
function Pe(t, e, ...n) {
  var r, o;
  Tr(() => {
    r !== (r = t()) && (o && (xn(o), o = null), r && (o = on(() => (
      /** @type {SnippetFn} */
      r(e, ...n)
    ))));
  }, jn);
}
function La(t, e, n) {
  const r = t.dom;
  if (de(r)) {
    for (let o = 0; o < r.length; o++)
      if (r[o] === e) {
        r[o] = n;
        break;
      }
  } else
    r === e && (t.dom = n);
}
function qi(t, e, n, r, o, s) {
  const i = (
    /** @type {import('#client').Effect} */
    bt
  );
  let a, u, c = null, l, f = bn;
  Tr(() => {
    const v = e() || null, d = v === "svg" ? gi : null;
    if (v !== a) {
      var h = bn;
      jo(f), l && (v === null ? cr(l, () => {
        l = null, u = null, c == null || c.remove();
      }) : v === u ? Ln(l) : (xn(l), Bo(!1))), v && v !== u && (l = on(() => {
        const m = c;
        if (c = d ? document.createElementNS(d, v) : document.createElement(v), r) {
          var g = c.appendChild(xr());
          r(c, g);
        }
        t.before(c), m ? (La(i, m, c), m.remove()) : Cr(c, i);
      })), a = v, a && (u = a), Bo(!0), jo(h);
    }
  });
}
function Dt(t, e, n) {
  ye(() => {
    var r = ie(() => e(t, n == null ? void 0 : n()) || {});
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function Ba(t, e) {
  if (e) {
    const n = document.body;
    t.autofocus = !0, ye(() => {
      document.activeElement === n && t.focus();
    });
  }
}
function Ka(t, e) {
  var n = t.__attributes ?? (t.__attributes = {});
  n.value !== (n.value = e) && (t.value = e);
}
function qn(t, e, n) {
  n = n == null ? null : n + "";
  var r = t.__attributes ?? (t.__attributes = {});
  r[e] !== (r[e] = n) && (e === "loading" && (t[ra] = n), n === null ? t.removeAttribute(e) : t.setAttribute(e, n));
}
function ja(t, e, n) {
  if (e in t) {
    var r = t[e], o = typeof r == "boolean" && n === "" ? !0 : n;
    (typeof r != "object" || r !== o) && (t[e] = o);
  } else
    qn(t, e, n);
}
function It(t, e, n, r, o) {
  var s = o.length !== 0;
  for (var i in e)
    i in n || (n[i] = null);
  s && !n.class && (n.class = "");
  var a = $s(Vo, t.nodeName);
  a || Js(Vo, t.nodeName, a = Va(t));
  var u = (
    /** @type {Record<string, unknown>} **/
    t.__attributes ?? (t.__attributes = {})
  ), c = [];
  for (const d in n) {
    let h = n[d];
    if (h !== (e == null ? void 0 : e[d])) {
      var l = d[0] + d[1];
      if (l !== "$$")
        if (l === "on") {
          const m = {};
          let g = d.slice(2);
          var f = Us.includes(g);
          zs(g) && (g = g.slice(0, -7), m.capture = !0), !f && (e != null && e[d]) && t.removeEventListener(
            g,
            /** @type {any} */
            e[d],
            m
          ), h != null && (f ? (t[`__${g}`] = h, ji([g])) : e ? n[d] = Ur(g, t, h, m) : c.push([
            d,
            h,
            () => n[d] = Ur(g, t, h, m)
          ]));
        } else if (h == null)
          u[d] = null, t.removeAttribute(d);
        else if (d === "style")
          t.style.cssText = h + "";
        else if (d === "autofocus")
          Ba(
            /** @type {HTMLElement} */
            t,
            !!h
          );
        else if (d === "__value" || d === "value")
          t.value = t[d] = t.__value = h;
        else {
          var v = d;
          r && (v = v.toLowerCase(), v = Hs[v] || v), a.includes(v) ? t[v] = h : typeof h != "function" && (s && v === "class" && (h && (h += " "), h += o), qn(t, v, h));
        }
    }
  }
  if (!e) {
    const d = Mi(() => {
      ye(() => {
        if (t.isConnected) {
          for (const [h, m, g] of c)
            n[h] === m && g();
          d();
        }
      });
    });
  }
  return n;
}
function Ui(t, e, n, r) {
  if (t.tagName.includes("-")) {
    for (var o in e)
      o in n || (n[o] = null);
    for (o in n)
      ja(t, o, n[o]);
    return n;
  }
  return It(
    /** @type {Element & ElementCSSInlineStyle} */
    t,
    e,
    n,
    t.namespaceURI !== gi,
    r
  );
}
var Wa = ["width", "height"], Vo = /* @__PURE__ */ new Map();
function Va(t) {
  for (var e = [], n, r = or(t); r.constructor.name !== "Element"; ) {
    n = ro(r);
    for (var o in n)
      n[o].set && !Wa.includes(o) && e.push(o);
    r = or(r);
  }
  return e;
}
function qa(t, e) {
  var n = t.__className, r = Hi(e);
  (n !== r || hi) && (r === "" ? t.removeAttribute("class") : t.setAttribute("class", r), t.__className = r);
}
function mo(t, e) {
  var n = t.__className, r = Hi(e);
  (n !== r || hi) && (e == null ? t.removeAttribute("class") : t.className = r, t.__className = r);
}
function Hi(t) {
  return t ?? "";
}
const zi = typeof window < "u", Ua = zi ? requestAnimationFrame : oe, Ha = zi ? () => performance.now() : () => Date.now(), Ae = {
  tick: (
    /** @param {any} _ */
    (t) => Ua(t)
  ),
  now: () => Ha(),
  tasks: /* @__PURE__ */ new Set()
};
function Yi(t) {
  Ae.tasks.forEach((e) => {
    e.c(t) || (Ae.tasks.delete(e), e.f());
  }), Ae.tasks.size !== 0 && Ae.tick(Yi);
}
function za(t) {
  let e;
  return Ae.tasks.size === 0 && Ae.tick(Yi), {
    promise: new Promise((n) => {
      Ae.tasks.add(e = { c: t, f: n });
    }),
    abort() {
      Ae.tasks.delete(e);
    }
  };
}
function Xn(t, e) {
  t.dispatchEvent(new CustomEvent(e));
}
function Ya(t) {
  const e = t.split("-");
  return e.length === 1 ? e[0] : e[0] + e.slice(1).map(
    /** @param {any} word */
    (n) => n[0].toUpperCase() + n.slice(1)
  ).join("");
}
function Ga(t) {
  const e = {}, n = t.split(";");
  for (const r of n) {
    const [o, s] = r.split(":");
    if (!o || s === void 0)
      break;
    const i = Ya(o.trim());
    e[i] = s.trim();
  }
  return e;
}
const Xa = (t) => t;
function Gt(t, e, n, r) {
  var o = (t & Ks) !== 0, s = (t & js) !== 0, i = (t & Ws) !== 0, a = o && s ? "both" : o ? "in" : "out", u, c = e.inert, l, f, v;
  function d() {
    return u ?? (u = n()(e, r == null ? void 0 : r(), { direction: a }));
  }
  var h = {
    is_global: i,
    in() {
      e.inert = c, o ? (Xn(e, "introstart"), l = Yr(e, d(), f, 1, () => {
        Xn(e, "introend"), l = u = void 0;
      })) : (f == null || f.abort(), v == null || v());
    },
    out(y) {
      s ? (e.inert = !0, Xn(e, "outrostart"), f = Yr(e, d(), l, 0, () => {
        Xn(e, "outroend"), f = u = void 0, y == null || y();
      }), v = f.reset) : y == null || y();
    },
    stop: () => {
      l == null || l.abort(), f == null || f.abort();
    }
  }, m = (
    /** @type {import('#client').Effect} */
    bt
  );
  if ((m.transitions ?? (m.transitions = [])).push(h), o && lr) {
    let y = i;
    if (!y) {
      for (var g = (
        /** @type {import('#client').Effect | null} */
        m.parent
      ); g && g.f & jn; )
        for (; (g = g.parent) && !(g.f & oo); )
          ;
      y = !g || (g.f & _i) !== 0;
    }
    y && ye(() => {
      ie(() => h.in());
    });
  }
}
function Yr(t, e, n, r, o) {
  if (ta(e)) {
    var s;
    return ye(() => {
      var I = ie(() => e({ direction: r === 1 ? "in" : "out" }));
      s = Yr(t, I, n, r, o);
    }), {
      abort: () => s.abort(),
      deactivate: () => s.deactivate(),
      reset: () => s.reset(),
      t: (I) => s.t(I)
    };
  }
  if (n == null || n.deactivate(), !(e != null && e.duration))
    return o == null || o(), {
      abort: oe,
      deactivate: oe,
      reset: oe,
      t: () => r
    };
  var { delay: i = 0, duration: a, css: u, tick: c, easing: l = Xa } = e, f = Ae.now() + i, v = (n == null ? void 0 : n.t(f)) ?? 1 - r, d = r - v;
  a *= Math.abs(d);
  var h = f + a, m, g;
  if (u) {
    for (var y = [], _ = Math.ceil(a / 16.666666666666668), w = 0; w <= _; w += 1) {
      var k = v + d * l(w / _), B = u(k, 1 - k);
      y.push(Ga(B));
    }
    m = t.animate(y, {
      delay: i,
      duration: a,
      easing: "linear",
      fill: "forwards"
    }), m.finished.then(() => {
      o == null || o(), r === 1 && m.cancel();
    }).catch((I) => {
      if (m.startTime !== null && m.currentTime !== null)
        throw I;
    });
  } else
    v === 0 && (c == null || c(0, 1)), g = za((I) => {
      if (I >= h)
        return c == null || c(r, 1 - r), o == null || o(), !1;
      if (I >= f) {
        var K = v + d * l((I - f) / a);
        c == null || c(K, 1 - K);
      }
      return !0;
    });
  return {
    abort: () => {
      m == null || m.cancel(), g == null || g.abort();
    },
    deactivate: () => {
      o = void 0;
    },
    reset: () => {
      r === 0 && (c == null || c(1, 0));
    },
    t: (I) => {
      var K = v + d * l((I - f) / a);
      return Math.min(1, Math.max(0, K));
    }
  };
}
function qo(t, e) {
  var r;
  var n = t && ((r = t[Nt]) == null ? void 0 : r.t);
  return t === e || n === e;
}
function Ft(t, e, n, r) {
  ye(() => {
    var o, s;
    return Tn(() => {
      o = s, s = [], ie(() => {
        t !== n(...s) && (e(t, ...s), o && qo(n(...o), t) && e(null, ...o));
      });
    }), () => {
      Ti(() => {
        s && qo(n(...s), t) && e(null, ...s);
      });
    };
  });
}
function we() {
  const t = (
    /** @type {import('#client').ComponentContextLegacy} */
    ft
  ), e = t.l.u;
  e && (e.b.length && Aa(() => {
    Uo(t), sr(e.b);
  }), ur(() => {
    const n = ie(() => e.m.map(va));
    return () => {
      for (const r of n)
        typeof r == "function" && r();
    };
  }), e.a.length && ur(() => {
    Uo(t), sr(e.a);
  }));
}
function Uo(t) {
  if (t.l.s)
    for (const e of t.l.s)
      C(e);
  rt(t.s);
}
function J(t, e) {
  var s;
  var n = (
    /** @type {Record<string, Function[] | Function>} */
    (s = t.$$events) == null ? void 0 : s[e.type]
  ), r = de(n) ? n.slice() : n == null ? [] : [n];
  for (var o of r)
    o.call(this, e);
}
function wt(t) {
  var n;
  var e = (n = t.$$slots) == null ? void 0 : n.default;
  return e === !0 ? t.children : e;
}
const Za = {
  get(t, e) {
    if (!t.exclude.includes(e))
      return C(t.version), e in t.special ? t.special[e]() : t.props[e];
  },
  set(t, e, n) {
    return e in t.special || (t.special[e] = S(
      {
        get [e]() {
          return t.props[e];
        }
      },
      /** @type {string} */
      e,
      mi
    )), t.special[e](n), xa(t.version), !0;
  },
  getOwnPropertyDescriptor(t, e) {
    if (!t.exclude.includes(e) && e in t.props)
      return {
        enumerable: !0,
        configurable: !0,
        value: t.props[e]
      };
  },
  has(t, e) {
    return t.exclude.includes(e) ? !1 : e in t.props;
  },
  ownKeys(t) {
    return Reflect.ownKeys(t.props).filter((e) => !t.exclude.includes(e));
  }
};
function Yt(t, e) {
  return new Proxy({ props: t, exclude: e, special: {}, version: /* @__PURE__ */ he(0) }, Za);
}
function S(t, e, n, r) {
  var y;
  var o = (n & Ms) !== 0, s = (n & Ls) !== 0, i = (n & Bs) !== 0, a = (
    /** @type {V} */
    t[e]
  ), u = (y = Kr(t, e)) == null ? void 0 : y.set, c = (
    /** @type {V} */
    r
  ), l = !0, f = () => (i && l && (l = !1, c = ie(
    /** @type {() => V} */
    r
  )), c);
  a === void 0 && r !== void 0 && (u && s && ca(), a = f(), u && u(a));
  var v;
  if (s)
    v = () => {
      var _ = (
        /** @type {V} */
        t[e]
      );
      return _ === void 0 ? f() : (l = !0, _);
    };
  else {
    var d = (o ? In : ga)(
      () => (
        /** @type {V} */
        t[e]
      )
    );
    d.f |= ea, v = () => {
      var _ = C(d);
      return _ !== void 0 && (c = /** @type {V} */
      void 0), _ === void 0 ? c : _;
    };
  }
  if (!(n & mi))
    return v;
  if (u)
    return function(_) {
      return arguments.length === 1 ? (u(_), _) : v();
    };
  var h = !1, m = /* @__PURE__ */ Jt(a), g = /* @__PURE__ */ In(() => {
    var _ = v(), w = C(m);
    return h ? (h = !1, w) : m.v = _;
  });
  return o || (g.equals = so), function(_) {
    var w = C(g);
    return arguments.length > 0 ? (g.equals(_) || (h = !0, mt(m, _), C(g), g.version++), _) : w;
  };
}
function go(t, e, n) {
  if (t == null)
    return e(void 0), n && n(void 0), oe;
  const r = t.subscribe(
    e,
    // @ts-expect-error
    n
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
function ne(t, e, n) {
  let r = n[e];
  const o = r === void 0;
  o && (r = {
    store: null,
    last_value: null,
    value: /* @__PURE__ */ Jt(Ne),
    unsubscribe: oe
  }, n[e] = r), (o || r.store !== t) && (r.unsubscribe(), r.store = t ?? null, r.unsubscribe = Qa(t, r.value));
  const s = C(r.value);
  return s === Ne ? r.last_value : s;
}
function Qa(t, e) {
  return t == null ? (mt(e, void 0), oe) : go(t, (n) => mt(e, n));
}
function Ee(t) {
  Ja(() => {
    let e;
    for (e in t)
      t[e].unsubscribe();
  });
}
function Ja(t) {
  ye(() => () => ie(t));
}
function $a(t) {
  return t[t.length - 1];
}
function tu(t, e) {
  return t.map((n, r) => t[(e + r) % t.length]);
}
function Ie(t) {
  return Object.keys(t).reduce((e, n) => t[n] === void 0 ? e : e + `${n}:${t[n]};`, "");
}
function Dr(t) {
  return t ? !0 : void 0;
}
Ie({
  position: "absolute",
  opacity: 0,
  "pointer-events": "none",
  margin: 0,
  transform: "translateX(-100%)"
});
function Gi(t) {
  if (t !== null)
    return "";
}
const fn = [];
function $e(t, e) {
  return {
    subscribe: kt(t, e).subscribe
  };
}
function eu(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function kt(t, e = oe) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function o(a) {
    if (eu(t, a) && (t = a, n)) {
      const u = !fn.length;
      for (const c of r)
        c[1](), fn.push(c, t);
      if (u) {
        for (let c = 0; c < fn.length; c += 2)
          fn[c][0](fn[c + 1]);
        fn.length = 0;
      }
    }
  }
  function s(a) {
    o(a(
      /** @type {T} */
      t
    ));
  }
  function i(a, u = oe) {
    const c = [a, u];
    return r.add(c), r.size === 1 && (n = e(o, s) || oe), a(
      /** @type {T} */
      t
    ), () => {
      r.delete(c), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: o, update: s, subscribe: i };
}
function ce(t, e, n) {
  const r = !Array.isArray(t), o = r ? [t] : t;
  if (!o.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const s = e.length < 2;
  return $e(n, (i, a) => {
    let u = !1;
    const c = [];
    let l = 0, f = oe;
    const v = () => {
      if (l)
        return;
      f();
      const h = e(r ? c[0] : c, i, a);
      s ? i(h) : f = typeof h == "function" ? h : oe;
    }, d = o.map(
      (h, m) => go(
        h,
        (g) => {
          c[m] = g, l &= ~(1 << m), u && v();
        },
        () => {
          l |= 1 << m;
        }
      )
    );
    return u = !0, v(), function() {
      sr(d), f(), u = !1;
    };
  });
}
function Ho(t) {
  return {
    // @ts-expect-error TODO i suspect the bind is unnecessary
    subscribe: t.subscribe.bind(t)
  };
}
function ho(t) {
  let e;
  return go(t, (n) => e = n)(), e;
}
function zo(t) {
  function e(n) {
    return n(t), () => {
    };
  }
  return { subscribe: e };
}
const Zn = (t) => new Proxy(t, {
  get(e, n, r) {
    return Reflect.get(e, n, r);
  },
  ownKeys(e) {
    return Reflect.ownKeys(e).filter((n) => n !== "action");
  }
}), Yo = (t) => typeof t == "function";
At("empty");
function At(t, e) {
  const { stores: n, action: r, returned: o } = e ?? {}, s = (() => {
    if (n && o)
      return ce(n, (a) => {
        const u = o(a);
        if (Yo(u)) {
          const c = (...l) => Zn({
            ...u(...l),
            [`data-melt-${t}`]: "",
            action: r ?? gt
          });
          return c.action = r ?? gt, c;
        }
        return Zn({
          ...u,
          [`data-melt-${t}`]: "",
          action: r ?? gt
        });
      });
    {
      const a = o, u = a == null ? void 0 : a();
      if (Yo(u)) {
        const c = (...l) => Zn({
          ...u(...l),
          [`data-melt-${t}`]: "",
          action: r ?? gt
        });
        return c.action = r ?? gt, zo(c);
      }
      return zo(Zn({
        ...u,
        [`data-melt-${t}`]: "",
        action: r ?? gt
      }));
    }
  })(), i = r ?? (() => {
  });
  return i.subscribe = s.subscribe, i;
}
function Xi(t) {
  const e = (s) => s ? `${t}-${s}` : t, n = (s) => `data-melt-${t}${s ? `-${s}` : ""}`, r = (s) => `[data-melt-${t}${s ? `-${s}` : ""}]`;
  return {
    name: e,
    attribute: n,
    selector: r,
    getEl: (s) => document.querySelector(r(s))
  };
}
const Me = typeof document < "u", Zi = (t) => typeof t == "function";
function po(t) {
  return t instanceof Element;
}
function j(t) {
  return t instanceof HTMLElement;
}
function Ce(t) {
  const e = t.getAttribute("aria-disabled"), n = t.getAttribute("disabled"), r = t.hasAttribute("data-disabled");
  return !!(e === "true" || n !== null || r);
}
function nu(t) {
  return t !== null && typeof t == "object";
}
function ru(t) {
  return nu(t) && "subscribe" in t;
}
function Ut(...t) {
  return (...e) => {
    for (const n of t)
      typeof n == "function" && n(...e);
  };
}
function gt() {
}
function Ht(t, e, n, r) {
  const o = Array.isArray(e) ? e : [e];
  return o.forEach((s) => t.addEventListener(s, n, r)), () => {
    o.forEach((s) => t.removeEventListener(s, n, r));
  };
}
function nt(t, e, n, r) {
  const o = Array.isArray(e) ? e : [e];
  if (typeof n == "function") {
    const s = iu((i) => n(i));
    return o.forEach((i) => t.addEventListener(i, s, r)), () => {
      o.forEach((i) => t.removeEventListener(i, s, r));
    };
  }
  return () => void 0;
}
function ou(t) {
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
function iu(t) {
  return (e) => {
    const n = ou(e);
    if (!(n != null && n.defaultPrevented))
      return t(e);
  };
}
function su(t) {
  t.setAttribute("data-highlighted", "");
}
function dn(t) {
  t.removeAttribute("data-highlighted");
}
function Qi(t) {
  ft === null && _r(), ft.l !== null ? lu(ft).m.push(t) : ur(() => {
    const e = ie(t);
    if (typeof e == "function")
      return (
        /** @type {() => void} */
        e
      );
  });
}
function au(t) {
  ft === null && _r(), Qi(() => () => ie(t));
}
function uu(t, e, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(t, { detail: e, bubbles: n, cancelable: r });
}
function cu() {
  const t = ft;
  return t === null && _r(), (e, n, r) => {
    var s;
    const o = (
      /** @type {Record<string, Function | Function[]>} */
      (s = t.s.$$events) == null ? void 0 : s[
        /** @type {any} */
        e
      ]
    );
    if (o) {
      const i = de(o) ? o.slice() : [o], a = uu(
        /** @type {string} */
        e,
        n,
        r
      );
      for (const u of i)
        u.call(t.x, a);
      return !a.defaultPrevented;
    }
    return !0;
  };
}
function lu(t) {
  var e = (
    /** @type {import('#client').ComponentContextLegacy} */
    t.l
  );
  return e.u ?? (e.u = { a: [], b: [], m: [] });
}
const Go = (t) => {
  try {
    Qi(t);
  } catch {
    return t;
  }
}, fu = (t) => {
  try {
    au(t);
  } catch {
    return t;
  }
};
function Or(t, ...e) {
  const n = {};
  for (const r of Object.keys(t))
    e.includes(r) || (n[r] = t[r]);
  return n;
}
function St(t) {
  return {
    ...t,
    get: () => ho(t)
  };
}
St.writable = function(t) {
  const e = kt(t);
  let n = t;
  return {
    subscribe: e.subscribe,
    set(r) {
      e.set(r), n = r;
    },
    update(r) {
      const o = r(n);
      e.set(o), n = o;
    },
    get() {
      return n;
    }
  };
};
St.derived = function(t, e) {
  const n = /* @__PURE__ */ new Map(), r = () => {
    const s = Array.isArray(t) ? t.map((i) => i.get()) : t.get();
    return e(s);
  };
  return {
    get: r,
    subscribe: (s) => {
      const i = [];
      return (Array.isArray(t) ? t : [t]).forEach((u) => {
        i.push(u.subscribe(() => {
          s(r());
        }));
      }), s(r()), n.set(s, i), () => {
        const u = n.get(s);
        if (u)
          for (const c of u)
            c();
        n.delete(s);
      };
    }
  };
};
const Dn = (t, e) => {
  const n = St(t), r = (s, i) => {
    n.update((a) => {
      const u = s(a);
      let c = u;
      return e && (c = e({ curr: a, next: u })), i == null || i(c), c;
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
function ke(t) {
  return new Promise((e) => setTimeout(e, t));
}
let du = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", vu = (t = 21) => {
  let e = "", n = t;
  for (; n--; )
    e += du[Math.random() * 64 | 0];
  return e;
};
function mu() {
  return vu(10);
}
function Gr(t) {
  return t.reduce((e, n) => (e[n] = mu(), e), {});
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
}, gu = [vt.ARROW_DOWN, vt.PAGE_UP, vt.HOME], hu = [vt.ARROW_UP, vt.PAGE_DOWN, vt.END], Xo = [...gu, ...hu], fr = [vt.ENTER, vt.SPACE];
function pu(t, e = 500) {
  let n = null;
  return function(...r) {
    const o = () => {
      n = null, t(...r);
    };
    n && clearTimeout(n), n = setTimeout(o, e);
  };
}
const Ji = () => typeof window < "u";
function bu() {
  const t = navigator.userAgentData;
  return (t == null ? void 0 : t.platform) ?? navigator.platform;
}
const $i = (t) => Ji() && t.test(bu().toLowerCase()), yu = () => Ji() && !!navigator.maxTouchPoints, _u = () => $i(/^mac/) && !yu(), wu = () => $i(/mac|iphone|ipad|ipod/i), Eu = () => wu() && !_u(), Fr = "data-melt-scroll-lock";
function Zo(t, e) {
  if (!t)
    return;
  const n = t.style.cssText;
  return Object.assign(t.style, e), () => {
    t.style.cssText = n;
  };
}
function Tu(t, e, n) {
  if (!t)
    return;
  const r = t.style.getPropertyValue(e);
  return t.style.setProperty(e, n), () => {
    r ? t.style.setProperty(e, r) : t.style.removeProperty(e);
  };
}
function xu(t) {
  const e = t.getBoundingClientRect().left;
  return Math.round(e) + t.scrollLeft ? "paddingLeft" : "paddingRight";
}
function ts(t) {
  const e = document, n = e.defaultView ?? window, { documentElement: r, body: o } = e;
  if (o.hasAttribute(Fr))
    return gt;
  o.setAttribute(Fr, "");
  const i = n.innerWidth - r.clientWidth, a = () => Tu(r, "--scrollbar-width", `${i}px`), u = xu(r), c = n.getComputedStyle(o)[u], l = () => Zo(o, {
    overflow: "hidden",
    [u]: `calc(${c} + ${i}px)`
  }), f = () => {
    const { scrollX: d, scrollY: h, visualViewport: m } = n, g = (m == null ? void 0 : m.offsetLeft) ?? 0, y = (m == null ? void 0 : m.offsetTop) ?? 0, _ = Zo(o, {
      position: "fixed",
      overflow: "hidden",
      top: `${-(h - Math.floor(y))}px`,
      left: `${-(d - Math.floor(g))}px`,
      right: "0",
      [u]: `calc(${c} + ${i}px)`
    });
    return () => {
      _ == null || _(), n.scrollTo(d, h);
    };
  }, v = [a(), Eu() ? f() : l()];
  return () => {
    v.forEach((d) => d == null ? void 0 : d()), o.removeAttribute(Fr);
  };
}
function Qo(t) {
  const { open: e, forceVisible: n, activeTrigger: r } = t;
  return ce([e, n, r], ([o, s, i]) => (o || s) && i !== null);
}
function Wt(t, e) {
  let n;
  const r = ce(t, (s) => {
    n == null || n(), n = e(s);
  }).subscribe(gt), o = () => {
    r(), n == null || n();
  };
  return fu(o), o;
}
function tn(t) {
  const e = {};
  return Object.keys(t).forEach((n) => {
    const r = n, o = t[r];
    e[r] = St(kt(o));
  }), e;
}
function qt(t) {
  Me && ke(1).then(() => {
    const e = document.activeElement;
    !j(e) || e === t || (e.tabIndex = -1, t && (t.tabIndex = 0, t.focus()));
  });
}
function es() {
  return Array.from(document.querySelectorAll('a[href]:not([tabindex="-1"]), button:not([disabled]):not([tabindex="-1"]), input:not([disabled]):not([tabindex="-1"]), select:not([disabled]):not([tabindex="-1"]), textarea:not([disabled]):not([tabindex="-1"]), [tabindex]:not([tabindex="-1"])'));
}
function Cu(t) {
  const e = es(), r = e.indexOf(t) + 1, o = e[r];
  return r < e.length && j(o) ? o : null;
}
function Ou(t) {
  const e = es(), r = e.indexOf(t) - 1, o = e[r];
  return r >= 0 && j(o) ? o : null;
}
const Au = /* @__PURE__ */ new Set(["Shift", "Control", "Alt", "Meta", "CapsLock", "NumLock"]), ku = {
  onMatch: qt,
  getCurrentItem: () => document.activeElement
};
function Pu(t = {}) {
  const e = { ...ku, ...t }, n = St(kt([])), r = pu(() => {
    n.update(() => []);
  });
  return {
    typed: n,
    resetTyped: r,
    handleTypeaheadSearch: (s, i) => {
      if (Au.has(s))
        return;
      const a = e.getCurrentItem(), u = ho(n);
      if (!Array.isArray(u))
        return;
      u.push(s.toLowerCase()), n.set(u);
      const c = i.filter((g) => !(g.getAttribute("disabled") === "true" || g.getAttribute("aria-disabled") === "true" || g.hasAttribute("data-disabled"))), f = u.length > 1 && u.every((g) => g === u[0]) ? u[0] : u.join(""), v = j(a) ? c.indexOf(a) : -1;
      let d = tu(c, Math.max(v, 0));
      f.length === 1 && (d = d.filter((g) => g !== a));
      const m = d.find((g) => (g == null ? void 0 : g.innerText) && g.innerText.toLowerCase().startsWith(f.toLowerCase()));
      j(m) && m !== a && e.onMatch(m), r();
    }
  };
}
function Su(t) {
  let e = t.parentElement;
  for (; j(e) && !e.hasAttribute("data-portal"); )
    e = e.parentElement;
  return e || "body";
}
function Xr(t, e) {
  return e !== void 0 ? e : Su(t) === "body" ? document.body : null;
}
async function Zr(t) {
  const { prop: e, defaultEl: n } = t;
  if (await Promise.all([ke(1), Qe]), e === void 0) {
    n == null || n.focus();
    return;
  }
  const r = Zi(e) ? e(n) : e;
  if (typeof r == "string") {
    const o = document.querySelector(r);
    if (!j(o))
      return;
    o.focus();
  } else
    j(r) && r.focus();
}
$e(void 0, (t) => {
  function e(r) {
    t(r), t(void 0);
  }
  return Ht(document, "pointerup", e, {
    passive: !1,
    capture: !0
  });
});
const Ru = $e(void 0, (t) => {
  function e(r) {
    r && r.key === vt.ESCAPE && t(r), t(void 0);
  }
  return Ht(document, "keydown", e, {
    passive: !1
  });
}), dr = (t, e = {}) => {
  let n = gt;
  function r(o = {}) {
    n();
    const s = { enabled: !0, ...o }, i = ru(s.enabled) ? s.enabled : $e(s.enabled);
    n = Ut(
      // Handle escape keydowns
      Ru.subscribe((a) => {
        var c;
        if (!a || !ho(i))
          return;
        const u = a.target;
        if (!(!j(u) || u.closest("[data-escapee]") !== t)) {
          if (a.preventDefault(), s.ignore) {
            if (Zi(s.ignore)) {
              if (s.ignore(a))
                return;
            } else if (Array.isArray(s.ignore) && s.ignore.length > 0 && s.ignore.some((l) => l && u === l))
              return;
          }
          (c = s.handler) == null || c.call(s, a);
        }
      }),
      Wt(i, (a) => {
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
}, le = Math.min, te = Math.max, vr = Math.round, Qn = Math.floor, Ke = (t) => ({
  x: t,
  y: t
}), Du = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, Fu = {
  start: "end",
  end: "start"
};
function Qr(t, e, n) {
  return te(t, le(e, n));
}
function Cn(t, e) {
  return typeof t == "function" ? t(e) : t;
}
function je(t) {
  return t.split("-")[0];
}
function On(t) {
  return t.split("-")[1];
}
function ns(t) {
  return t === "x" ? "y" : "x";
}
function bo(t) {
  return t === "y" ? "height" : "width";
}
function Un(t) {
  return ["top", "bottom"].includes(je(t)) ? "y" : "x";
}
function yo(t) {
  return ns(Un(t));
}
function Nu(t, e, n) {
  n === void 0 && (n = !1);
  const r = On(t), o = yo(t), s = bo(o);
  let i = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return e.reference[s] > e.floating[s] && (i = mr(i)), [i, mr(i)];
}
function Iu(t) {
  const e = mr(t);
  return [Jr(t), e, Jr(e)];
}
function Jr(t) {
  return t.replace(/start|end/g, (e) => Fu[e]);
}
function Mu(t, e, n) {
  const r = ["left", "right"], o = ["right", "left"], s = ["top", "bottom"], i = ["bottom", "top"];
  switch (t) {
    case "top":
    case "bottom":
      return n ? e ? o : r : e ? r : o;
    case "left":
    case "right":
      return e ? s : i;
    default:
      return [];
  }
}
function Lu(t, e, n, r) {
  const o = On(t);
  let s = Mu(je(t), n === "start", r);
  return o && (s = s.map((i) => i + "-" + o), e && (s = s.concat(s.map(Jr)))), s;
}
function mr(t) {
  return t.replace(/left|right|bottom|top/g, (e) => Du[e]);
}
function Bu(t) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...t
  };
}
function rs(t) {
  return typeof t != "number" ? Bu(t) : {
    top: t,
    right: t,
    bottom: t,
    left: t
  };
}
function gr(t) {
  const {
    x: e,
    y: n,
    width: r,
    height: o
  } = t;
  return {
    width: r,
    height: o,
    top: n,
    left: e,
    right: e + r,
    bottom: n + o,
    x: e,
    y: n
  };
}
function Jo(t, e, n) {
  let {
    reference: r,
    floating: o
  } = t;
  const s = Un(e), i = yo(e), a = bo(i), u = je(e), c = s === "y", l = r.x + r.width / 2 - o.width / 2, f = r.y + r.height / 2 - o.height / 2, v = r[a] / 2 - o[a] / 2;
  let d;
  switch (u) {
    case "top":
      d = {
        x: l,
        y: r.y - o.height
      };
      break;
    case "bottom":
      d = {
        x: l,
        y: r.y + r.height
      };
      break;
    case "right":
      d = {
        x: r.x + r.width,
        y: f
      };
      break;
    case "left":
      d = {
        x: r.x - o.width,
        y: f
      };
      break;
    default:
      d = {
        x: r.x,
        y: r.y
      };
  }
  switch (On(e)) {
    case "start":
      d[i] -= v * (n && c ? -1 : 1);
      break;
    case "end":
      d[i] += v * (n && c ? -1 : 1);
      break;
  }
  return d;
}
const Ku = async (t, e, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: s = [],
    platform: i
  } = n, a = s.filter(Boolean), u = await (i.isRTL == null ? void 0 : i.isRTL(e));
  let c = await i.getElementRects({
    reference: t,
    floating: e,
    strategy: o
  }), {
    x: l,
    y: f
  } = Jo(c, r, u), v = r, d = {}, h = 0;
  for (let m = 0; m < a.length; m++) {
    const {
      name: g,
      fn: y
    } = a[m], {
      x: _,
      y: w,
      data: k,
      reset: B
    } = await y({
      x: l,
      y: f,
      initialPlacement: r,
      placement: v,
      strategy: o,
      middlewareData: d,
      rects: c,
      platform: i,
      elements: {
        reference: t,
        floating: e
      }
    });
    l = _ ?? l, f = w ?? f, d = {
      ...d,
      [g]: {
        ...d[g],
        ...k
      }
    }, B && h <= 50 && (h++, typeof B == "object" && (B.placement && (v = B.placement), B.rects && (c = B.rects === !0 ? await i.getElementRects({
      reference: t,
      floating: e,
      strategy: o
    }) : B.rects), {
      x: l,
      y: f
    } = Jo(c, v, u)), m = -1);
  }
  return {
    x: l,
    y: f,
    placement: v,
    strategy: o,
    middlewareData: d
  };
};
async function _o(t, e) {
  var n;
  e === void 0 && (e = {});
  const {
    x: r,
    y: o,
    platform: s,
    rects: i,
    elements: a,
    strategy: u
  } = t, {
    boundary: c = "clippingAncestors",
    rootBoundary: l = "viewport",
    elementContext: f = "floating",
    altBoundary: v = !1,
    padding: d = 0
  } = Cn(e, t), h = rs(d), g = a[v ? f === "floating" ? "reference" : "floating" : f], y = gr(await s.getClippingRect({
    element: (n = await (s.isElement == null ? void 0 : s.isElement(g))) == null || n ? g : g.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(a.floating)),
    boundary: c,
    rootBoundary: l,
    strategy: u
  })), _ = f === "floating" ? {
    x: r,
    y: o,
    width: i.floating.width,
    height: i.floating.height
  } : i.reference, w = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(a.floating)), k = await (s.isElement == null ? void 0 : s.isElement(w)) ? await (s.getScale == null ? void 0 : s.getScale(w)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, B = gr(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: a,
    rect: _,
    offsetParent: w,
    strategy: u
  }) : _);
  return {
    top: (y.top - B.top + h.top) / k.y,
    bottom: (B.bottom - y.bottom + h.bottom) / k.y,
    left: (y.left - B.left + h.left) / k.x,
    right: (B.right - y.right + h.right) / k.x
  };
}
const ju = (t) => ({
  name: "arrow",
  options: t,
  async fn(e) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: s,
      platform: i,
      elements: a,
      middlewareData: u
    } = e, {
      element: c,
      padding: l = 0
    } = Cn(t, e) || {};
    if (c == null)
      return {};
    const f = rs(l), v = {
      x: n,
      y: r
    }, d = yo(o), h = bo(d), m = await i.getDimensions(c), g = d === "y", y = g ? "top" : "left", _ = g ? "bottom" : "right", w = g ? "clientHeight" : "clientWidth", k = s.reference[h] + s.reference[d] - v[d] - s.floating[h], B = v[d] - s.reference[d], I = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(c));
    let K = I ? I[w] : 0;
    (!K || !await (i.isElement == null ? void 0 : i.isElement(I))) && (K = a.floating[w] || s.floating[h]);
    const H = k / 2 - B / 2, Y = K / 2 - m[h] / 2 - 1, G = le(f[y], Y), E = le(f[_], Y), p = G, b = K - m[h] - E, O = K / 2 - m[h] / 2 + H, x = Qr(p, O, b), R = !u.arrow && On(o) != null && O !== x && s.reference[h] / 2 - (O < p ? G : E) - m[h] / 2 < 0, M = R ? O < p ? O - p : O - b : 0;
    return {
      [d]: v[d] + M,
      data: {
        [d]: x,
        centerOffset: O - x - M,
        ...R && {
          alignmentOffset: M
        }
      },
      reset: R
    };
  }
}), Wu = function(t) {
  return t === void 0 && (t = {}), {
    name: "flip",
    options: t,
    async fn(e) {
      var n, r;
      const {
        placement: o,
        middlewareData: s,
        rects: i,
        initialPlacement: a,
        platform: u,
        elements: c
      } = e, {
        mainAxis: l = !0,
        crossAxis: f = !0,
        fallbackPlacements: v,
        fallbackStrategy: d = "bestFit",
        fallbackAxisSideDirection: h = "none",
        flipAlignment: m = !0,
        ...g
      } = Cn(t, e);
      if ((n = s.arrow) != null && n.alignmentOffset)
        return {};
      const y = je(o), _ = je(a) === a, w = await (u.isRTL == null ? void 0 : u.isRTL(c.floating)), k = v || (_ || !m ? [mr(a)] : Iu(a));
      !v && h !== "none" && k.push(...Lu(a, m, h, w));
      const B = [a, ...k], I = await _o(e, g), K = [];
      let H = ((r = s.flip) == null ? void 0 : r.overflows) || [];
      if (l && K.push(I[y]), f) {
        const p = Nu(o, i, w);
        K.push(I[p[0]], I[p[1]]);
      }
      if (H = [...H, {
        placement: o,
        overflows: K
      }], !K.every((p) => p <= 0)) {
        var Y, G;
        const p = (((Y = s.flip) == null ? void 0 : Y.index) || 0) + 1, b = B[p];
        if (b)
          return {
            data: {
              index: p,
              overflows: H
            },
            reset: {
              placement: b
            }
          };
        let O = (G = H.filter((x) => x.overflows[0] <= 0).sort((x, R) => x.overflows[1] - R.overflows[1])[0]) == null ? void 0 : G.placement;
        if (!O)
          switch (d) {
            case "bestFit": {
              var E;
              const x = (E = H.map((R) => [R.placement, R.overflows.filter((M) => M > 0).reduce((M, P) => M + P, 0)]).sort((R, M) => R[1] - M[1])[0]) == null ? void 0 : E[0];
              x && (O = x);
              break;
            }
            case "initialPlacement":
              O = a;
              break;
          }
        if (o !== O)
          return {
            reset: {
              placement: O
            }
          };
      }
      return {};
    }
  };
};
async function Vu(t, e) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = t, s = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), i = je(n), a = On(n), u = Un(n) === "y", c = ["left", "top"].includes(i) ? -1 : 1, l = s && u ? -1 : 1, f = Cn(e, t);
  let {
    mainAxis: v,
    crossAxis: d,
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
  return a && typeof h == "number" && (d = a === "end" ? h * -1 : h), u ? {
    x: d * l,
    y: v * c
  } : {
    x: v * c,
    y: d * l
  };
}
const qu = function(t) {
  return t === void 0 && (t = 0), {
    name: "offset",
    options: t,
    async fn(e) {
      var n, r;
      const {
        x: o,
        y: s,
        placement: i,
        middlewareData: a
      } = e, u = await Vu(e, t);
      return i === ((n = a.offset) == null ? void 0 : n.placement) && (r = a.arrow) != null && r.alignmentOffset ? {} : {
        x: o + u.x,
        y: s + u.y,
        data: {
          ...u,
          placement: i
        }
      };
    }
  };
}, Uu = function(t) {
  return t === void 0 && (t = {}), {
    name: "shift",
    options: t,
    async fn(e) {
      const {
        x: n,
        y: r,
        placement: o
      } = e, {
        mainAxis: s = !0,
        crossAxis: i = !1,
        limiter: a = {
          fn: (g) => {
            let {
              x: y,
              y: _
            } = g;
            return {
              x: y,
              y: _
            };
          }
        },
        ...u
      } = Cn(t, e), c = {
        x: n,
        y: r
      }, l = await _o(e, u), f = Un(je(o)), v = ns(f);
      let d = c[v], h = c[f];
      if (s) {
        const g = v === "y" ? "top" : "left", y = v === "y" ? "bottom" : "right", _ = d + l[g], w = d - l[y];
        d = Qr(_, d, w);
      }
      if (i) {
        const g = f === "y" ? "top" : "left", y = f === "y" ? "bottom" : "right", _ = h + l[g], w = h - l[y];
        h = Qr(_, h, w);
      }
      const m = a.fn({
        ...e,
        [v]: d,
        [f]: h
      });
      return {
        ...m,
        data: {
          x: m.x - n,
          y: m.y - r
        }
      };
    }
  };
}, Hu = function(t) {
  return t === void 0 && (t = {}), {
    name: "size",
    options: t,
    async fn(e) {
      const {
        placement: n,
        rects: r,
        platform: o,
        elements: s
      } = e, {
        apply: i = () => {
        },
        ...a
      } = Cn(t, e), u = await _o(e, a), c = je(n), l = On(n), f = Un(n) === "y", {
        width: v,
        height: d
      } = r.floating;
      let h, m;
      c === "top" || c === "bottom" ? (h = c, m = l === (await (o.isRTL == null ? void 0 : o.isRTL(s.floating)) ? "start" : "end") ? "left" : "right") : (m = c, h = l === "end" ? "top" : "bottom");
      const g = d - u.top - u.bottom, y = v - u.left - u.right, _ = le(d - u[h], g), w = le(v - u[m], y), k = !e.middlewareData.shift;
      let B = _, I = w;
      if (f ? I = l || k ? le(w, y) : y : B = l || k ? le(_, g) : g, k && !l) {
        const H = te(u.left, 0), Y = te(u.right, 0), G = te(u.top, 0), E = te(u.bottom, 0);
        f ? I = v - 2 * (H !== 0 || Y !== 0 ? H + Y : te(u.left, u.right)) : B = d - 2 * (G !== 0 || E !== 0 ? G + E : te(u.top, u.bottom));
      }
      await i({
        ...e,
        availableWidth: I,
        availableHeight: B
      });
      const K = await o.getDimensions(s.floating);
      return v !== K.width || d !== K.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function An(t) {
  return os(t) ? (t.nodeName || "").toLowerCase() : "#document";
}
function ee(t) {
  var e;
  return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window;
}
function Se(t) {
  var e;
  return (e = (os(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement;
}
function os(t) {
  return t instanceof Node || t instanceof ee(t).Node;
}
function pe(t) {
  return t instanceof Element || t instanceof ee(t).Element;
}
function be(t) {
  return t instanceof HTMLElement || t instanceof ee(t).HTMLElement;
}
function $o(t) {
  return typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof ee(t).ShadowRoot;
}
function Hn(t) {
  const {
    overflow: e,
    overflowX: n,
    overflowY: r,
    display: o
  } = se(t);
  return /auto|scroll|overlay|hidden|clip/.test(e + r + n) && !["inline", "contents"].includes(o);
}
function zu(t) {
  return ["table", "td", "th"].includes(An(t));
}
function wo(t) {
  const e = Eo(), n = se(t);
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !e && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !e && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function Yu(t) {
  let e = We(t);
  for (; be(e) && !_n(e); ) {
    if (wo(e))
      return e;
    e = We(e);
  }
  return null;
}
function Eo() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function _n(t) {
  return ["html", "body", "#document"].includes(An(t));
}
function se(t) {
  return ee(t).getComputedStyle(t);
}
function Ar(t) {
  return pe(t) ? {
    scrollLeft: t.scrollLeft,
    scrollTop: t.scrollTop
  } : {
    scrollLeft: t.pageXOffset,
    scrollTop: t.pageYOffset
  };
}
function We(t) {
  if (An(t) === "html")
    return t;
  const e = (
    // Step into the shadow DOM of the parent of a slotted node.
    t.assignedSlot || // DOM Element detected.
    t.parentNode || // ShadowRoot detected.
    $o(t) && t.host || // Fallback.
    Se(t)
  );
  return $o(e) ? e.host : e;
}
function is(t) {
  const e = We(t);
  return _n(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : be(e) && Hn(e) ? e : is(e);
}
function Bn(t, e, n) {
  var r;
  e === void 0 && (e = []), n === void 0 && (n = !0);
  const o = is(t), s = o === ((r = t.ownerDocument) == null ? void 0 : r.body), i = ee(o);
  return s ? e.concat(i, i.visualViewport || [], Hn(o) ? o : [], i.frameElement && n ? Bn(i.frameElement) : []) : e.concat(o, Bn(o, [], n));
}
function ss(t) {
  const e = se(t);
  let n = parseFloat(e.width) || 0, r = parseFloat(e.height) || 0;
  const o = be(t), s = o ? t.offsetWidth : n, i = o ? t.offsetHeight : r, a = vr(n) !== s || vr(r) !== i;
  return a && (n = s, r = i), {
    width: n,
    height: r,
    $: a
  };
}
function To(t) {
  return pe(t) ? t : t.contextElement;
}
function yn(t) {
  const e = To(t);
  if (!be(e))
    return Ke(1);
  const n = e.getBoundingClientRect(), {
    width: r,
    height: o,
    $: s
  } = ss(e);
  let i = (s ? vr(n.width) : n.width) / r, a = (s ? vr(n.height) : n.height) / o;
  return (!i || !Number.isFinite(i)) && (i = 1), (!a || !Number.isFinite(a)) && (a = 1), {
    x: i,
    y: a
  };
}
const Gu = /* @__PURE__ */ Ke(0);
function as(t) {
  const e = ee(t);
  return !Eo() || !e.visualViewport ? Gu : {
    x: e.visualViewport.offsetLeft,
    y: e.visualViewport.offsetTop
  };
}
function Xu(t, e, n) {
  return e === void 0 && (e = !1), !n || e && n !== ee(t) ? !1 : e;
}
function sn(t, e, n, r) {
  e === void 0 && (e = !1), n === void 0 && (n = !1);
  const o = t.getBoundingClientRect(), s = To(t);
  let i = Ke(1);
  e && (r ? pe(r) && (i = yn(r)) : i = yn(t));
  const a = Xu(s, n, r) ? as(s) : Ke(0);
  let u = (o.left + a.x) / i.x, c = (o.top + a.y) / i.y, l = o.width / i.x, f = o.height / i.y;
  if (s) {
    const v = ee(s), d = r && pe(r) ? ee(r) : r;
    let h = v, m = h.frameElement;
    for (; m && r && d !== h; ) {
      const g = yn(m), y = m.getBoundingClientRect(), _ = se(m), w = y.left + (m.clientLeft + parseFloat(_.paddingLeft)) * g.x, k = y.top + (m.clientTop + parseFloat(_.paddingTop)) * g.y;
      u *= g.x, c *= g.y, l *= g.x, f *= g.y, u += w, c += k, h = ee(m), m = h.frameElement;
    }
  }
  return gr({
    width: l,
    height: f,
    x: u,
    y: c
  });
}
const Zu = [":popover-open", ":modal"];
function xo(t) {
  return Zu.some((e) => {
    try {
      return t.matches(e);
    } catch {
      return !1;
    }
  });
}
function Qu(t) {
  let {
    elements: e,
    rect: n,
    offsetParent: r,
    strategy: o
  } = t;
  const s = o === "fixed", i = Se(r), a = e ? xo(e.floating) : !1;
  if (r === i || a && s)
    return n;
  let u = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = Ke(1);
  const l = Ke(0), f = be(r);
  if ((f || !f && !s) && ((An(r) !== "body" || Hn(i)) && (u = Ar(r)), be(r))) {
    const v = sn(r);
    c = yn(r), l.x = v.x + r.clientLeft, l.y = v.y + r.clientTop;
  }
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - u.scrollLeft * c.x + l.x,
    y: n.y * c.y - u.scrollTop * c.y + l.y
  };
}
function Ju(t) {
  return Array.from(t.getClientRects());
}
function us(t) {
  return sn(Se(t)).left + Ar(t).scrollLeft;
}
function $u(t) {
  const e = Se(t), n = Ar(t), r = t.ownerDocument.body, o = te(e.scrollWidth, e.clientWidth, r.scrollWidth, r.clientWidth), s = te(e.scrollHeight, e.clientHeight, r.scrollHeight, r.clientHeight);
  let i = -n.scrollLeft + us(t);
  const a = -n.scrollTop;
  return se(r).direction === "rtl" && (i += te(e.clientWidth, r.clientWidth) - o), {
    width: o,
    height: s,
    x: i,
    y: a
  };
}
function tc(t, e) {
  const n = ee(t), r = Se(t), o = n.visualViewport;
  let s = r.clientWidth, i = r.clientHeight, a = 0, u = 0;
  if (o) {
    s = o.width, i = o.height;
    const c = Eo();
    (!c || c && e === "fixed") && (a = o.offsetLeft, u = o.offsetTop);
  }
  return {
    width: s,
    height: i,
    x: a,
    y: u
  };
}
function ec(t, e) {
  const n = sn(t, !0, e === "fixed"), r = n.top + t.clientTop, o = n.left + t.clientLeft, s = be(t) ? yn(t) : Ke(1), i = t.clientWidth * s.x, a = t.clientHeight * s.y, u = o * s.x, c = r * s.y;
  return {
    width: i,
    height: a,
    x: u,
    y: c
  };
}
function ti(t, e, n) {
  let r;
  if (e === "viewport")
    r = tc(t, n);
  else if (e === "document")
    r = $u(Se(t));
  else if (pe(e))
    r = ec(e, n);
  else {
    const o = as(t);
    r = {
      ...e,
      x: e.x - o.x,
      y: e.y - o.y
    };
  }
  return gr(r);
}
function cs(t, e) {
  const n = We(t);
  return n === e || !pe(n) || _n(n) ? !1 : se(n).position === "fixed" || cs(n, e);
}
function nc(t, e) {
  const n = e.get(t);
  if (n)
    return n;
  let r = Bn(t, [], !1).filter((a) => pe(a) && An(a) !== "body"), o = null;
  const s = se(t).position === "fixed";
  let i = s ? We(t) : t;
  for (; pe(i) && !_n(i); ) {
    const a = se(i), u = wo(i);
    !u && a.position === "fixed" && (o = null), (s ? !u && !o : !u && a.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Hn(i) && !u && cs(t, i)) ? r = r.filter((l) => l !== i) : o = a, i = We(i);
  }
  return e.set(t, r), r;
}
function rc(t) {
  let {
    element: e,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = t;
  const i = [...n === "clippingAncestors" ? xo(e) ? [] : nc(e, this._c) : [].concat(n), r], a = i[0], u = i.reduce((c, l) => {
    const f = ti(e, l, o);
    return c.top = te(f.top, c.top), c.right = le(f.right, c.right), c.bottom = le(f.bottom, c.bottom), c.left = te(f.left, c.left), c;
  }, ti(e, a, o));
  return {
    width: u.right - u.left,
    height: u.bottom - u.top,
    x: u.left,
    y: u.top
  };
}
function oc(t) {
  const {
    width: e,
    height: n
  } = ss(t);
  return {
    width: e,
    height: n
  };
}
function ic(t, e, n) {
  const r = be(e), o = Se(e), s = n === "fixed", i = sn(t, !0, s, e);
  let a = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const u = Ke(0);
  if (r || !r && !s)
    if ((An(e) !== "body" || Hn(o)) && (a = Ar(e)), r) {
      const f = sn(e, !0, s, e);
      u.x = f.x + e.clientLeft, u.y = f.y + e.clientTop;
    } else
      o && (u.x = us(o));
  const c = i.left + a.scrollLeft - u.x, l = i.top + a.scrollTop - u.y;
  return {
    x: c,
    y: l,
    width: i.width,
    height: i.height
  };
}
function Nr(t) {
  return se(t).position === "static";
}
function ei(t, e) {
  return !be(t) || se(t).position === "fixed" ? null : e ? e(t) : t.offsetParent;
}
function ls(t, e) {
  const n = ee(t);
  if (xo(t))
    return n;
  if (!be(t)) {
    let o = We(t);
    for (; o && !_n(o); ) {
      if (pe(o) && !Nr(o))
        return o;
      o = We(o);
    }
    return n;
  }
  let r = ei(t, e);
  for (; r && zu(r) && Nr(r); )
    r = ei(r, e);
  return r && _n(r) && Nr(r) && !wo(r) ? n : r || Yu(t) || n;
}
const sc = async function(t) {
  const e = this.getOffsetParent || ls, n = this.getDimensions, r = await n(t.floating);
  return {
    reference: ic(t.reference, await e(t.floating), t.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function ac(t) {
  return se(t).direction === "rtl";
}
const uc = {
  convertOffsetParentRelativeRectToViewportRelativeRect: Qu,
  getDocumentElement: Se,
  getClippingRect: rc,
  getOffsetParent: ls,
  getElementRects: sc,
  getClientRects: Ju,
  getDimensions: oc,
  getScale: yn,
  isElement: pe,
  isRTL: ac
};
function cc(t, e) {
  let n = null, r;
  const o = Se(t);
  function s() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), n = null;
  }
  function i(a, u) {
    a === void 0 && (a = !1), u === void 0 && (u = 1), s();
    const {
      left: c,
      top: l,
      width: f,
      height: v
    } = t.getBoundingClientRect();
    if (a || e(), !f || !v)
      return;
    const d = Qn(l), h = Qn(o.clientWidth - (c + f)), m = Qn(o.clientHeight - (l + v)), g = Qn(c), _ = {
      rootMargin: -d + "px " + -h + "px " + -m + "px " + -g + "px",
      threshold: te(0, le(1, u)) || 1
    };
    let w = !0;
    function k(B) {
      const I = B[0].intersectionRatio;
      if (I !== u) {
        if (!w)
          return i();
        I ? i(!1, I) : r = setTimeout(() => {
          i(!1, 1e-7);
        }, 1e3);
      }
      w = !1;
    }
    try {
      n = new IntersectionObserver(k, {
        ..._,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(k, _);
    }
    n.observe(t);
  }
  return i(!0), s;
}
function lc(t, e, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: s = !0,
    elementResize: i = typeof ResizeObserver == "function",
    layoutShift: a = typeof IntersectionObserver == "function",
    animationFrame: u = !1
  } = r, c = To(t), l = o || s ? [...c ? Bn(c) : [], ...Bn(e)] : [];
  l.forEach((y) => {
    o && y.addEventListener("scroll", n, {
      passive: !0
    }), s && y.addEventListener("resize", n);
  });
  const f = c && a ? cc(c, n) : null;
  let v = -1, d = null;
  i && (d = new ResizeObserver((y) => {
    let [_] = y;
    _ && _.target === c && d && (d.unobserve(e), cancelAnimationFrame(v), v = requestAnimationFrame(() => {
      var w;
      (w = d) == null || w.observe(e);
    })), n();
  }), c && !u && d.observe(c), d.observe(e));
  let h, m = u ? sn(t) : null;
  u && g();
  function g() {
    const y = sn(t);
    m && (y.x !== m.x || y.y !== m.y || y.width !== m.width || y.height !== m.height) && n(), m = y, h = requestAnimationFrame(g);
  }
  return n(), () => {
    var y;
    l.forEach((_) => {
      o && _.removeEventListener("scroll", n), s && _.removeEventListener("resize", n);
    }), f == null || f(), (y = d) == null || y.disconnect(), d = null, u && cancelAnimationFrame(h);
  };
}
const fc = qu, dc = Uu, vc = Wu, mc = Hu, gc = ju, hc = (t, e, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: uc,
    ...n
  }, s = {
    ...o.platform,
    _c: r
  };
  return Ku(t, e, {
    ...o,
    platform: s
  });
}, pc = {
  strategy: "absolute",
  placement: "top",
  gutter: 5,
  flip: !0,
  sameWidth: !1,
  overflowPadding: 8
}, bc = {
  bottom: "rotate(45deg)",
  left: "rotate(135deg)",
  top: "rotate(225deg)",
  right: "rotate(315deg)"
};
function yc(t, e, n = {}) {
  if (!e || !t || n === null)
    return {
      destroy: gt
    };
  const r = { ...pc, ...n }, o = e.querySelector("[data-arrow=true]"), s = [];
  r.flip && s.push(vc({
    boundary: r.boundary,
    padding: r.overflowPadding
  }));
  const i = j(o) ? o.offsetHeight / 2 : 0;
  if (r.gutter || r.offset) {
    const u = r.gutter ? { mainAxis: r.gutter } : r.offset;
    (u == null ? void 0 : u.mainAxis) != null && (u.mainAxis += i), s.push(fc(u));
  }
  s.push(dc({
    boundary: r.boundary,
    crossAxis: r.overlap,
    padding: r.overflowPadding
  })), o && s.push(gc({ element: o, padding: 8 })), s.push(mc({
    padding: r.overflowPadding,
    apply({ rects: u, availableHeight: c, availableWidth: l }) {
      r.sameWidth && Object.assign(e.style, {
        width: `${Math.round(u.reference.width)}px`,
        minWidth: "unset"
      }), r.fitViewport && Object.assign(e.style, {
        maxWidth: `${l}px`,
        maxHeight: `${c}px`
      });
    }
  }));
  function a() {
    if (!t || !e || j(t) && !t.ownerDocument.documentElement.contains(t))
      return;
    const { placement: u, strategy: c } = r;
    hc(t, e, {
      placement: u,
      middleware: s,
      strategy: c
    }).then((l) => {
      const f = Math.round(l.x), v = Math.round(l.y), [d, h] = _c(l.placement);
      if (e.setAttribute("data-side", d), e.setAttribute("data-align", h), Object.assign(e.style, {
        position: r.strategy,
        top: `${v}px`,
        left: `${f}px`
      }), j(o) && l.middlewareData.arrow) {
        const { x: m, y: g } = l.middlewareData.arrow, y = l.placement.split("-")[0];
        o.setAttribute("data-side", y), Object.assign(o.style, {
          position: "absolute",
          left: m != null ? `${m}px` : "",
          top: g != null ? `${g}px` : "",
          [y]: `calc(100% - ${i}px)`,
          transform: bc[y],
          backgroundColor: "inherit",
          zIndex: "inherit"
        });
      }
      return l;
    });
  }
  return Object.assign(e.style, {
    position: r.strategy
  }), {
    destroy: lc(t, e, a)
  };
}
function _c(t) {
  const [e, n = "center"] = t.split("-");
  return [e, n];
}
/*!
* tabbable 6.2.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var fs = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"], hr = /* @__PURE__ */ fs.join(","), ds = typeof Element > "u", an = ds ? function() {
} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector, pr = !ds && Element.prototype.getRootNode ? function(t) {
  var e;
  return t == null || (e = t.getRootNode) === null || e === void 0 ? void 0 : e.call(t);
} : function(t) {
  return t == null ? void 0 : t.ownerDocument;
}, br = function t(e, n) {
  var r;
  n === void 0 && (n = !0);
  var o = e == null || (r = e.getAttribute) === null || r === void 0 ? void 0 : r.call(e, "inert"), s = o === "" || o === "true", i = s || n && e && t(e.parentNode);
  return i;
}, wc = function(e) {
  var n, r = e == null || (n = e.getAttribute) === null || n === void 0 ? void 0 : n.call(e, "contenteditable");
  return r === "" || r === "true";
}, vs = function(e, n, r) {
  if (br(e))
    return [];
  var o = Array.prototype.slice.apply(e.querySelectorAll(hr));
  return n && an.call(e, hr) && o.unshift(e), o = o.filter(r), o;
}, ms = function t(e, n, r) {
  for (var o = [], s = Array.from(e); s.length; ) {
    var i = s.shift();
    if (!br(i, !1))
      if (i.tagName === "SLOT") {
        var a = i.assignedElements(), u = a.length ? a : i.children, c = t(u, !0, r);
        r.flatten ? o.push.apply(o, c) : o.push({
          scopeParent: i,
          candidates: c
        });
      } else {
        var l = an.call(i, hr);
        l && r.filter(i) && (n || !e.includes(i)) && o.push(i);
        var f = i.shadowRoot || // check for an undisclosed shadow
        typeof r.getShadowRoot == "function" && r.getShadowRoot(i), v = !br(f, !1) && (!r.shadowRootFilter || r.shadowRootFilter(i));
        if (f && v) {
          var d = t(f === !0 ? i.children : f.children, !0, r);
          r.flatten ? o.push.apply(o, d) : o.push({
            scopeParent: i,
            candidates: d
          });
        } else
          s.unshift.apply(s, i.children);
      }
  }
  return o;
}, gs = function(e) {
  return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
}, Xe = function(e) {
  if (!e)
    throw new Error("No node provided");
  return e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || wc(e)) && !gs(e) ? 0 : e.tabIndex;
}, Ec = function(e, n) {
  var r = Xe(e);
  return r < 0 && n && !gs(e) ? 0 : r;
}, Tc = function(e, n) {
  return e.tabIndex === n.tabIndex ? e.documentOrder - n.documentOrder : e.tabIndex - n.tabIndex;
}, hs = function(e) {
  return e.tagName === "INPUT";
}, xc = function(e) {
  return hs(e) && e.type === "hidden";
}, Cc = function(e) {
  var n = e.tagName === "DETAILS" && Array.prototype.slice.apply(e.children).some(function(r) {
    return r.tagName === "SUMMARY";
  });
  return n;
}, Oc = function(e, n) {
  for (var r = 0; r < e.length; r++)
    if (e[r].checked && e[r].form === n)
      return e[r];
}, Ac = function(e) {
  if (!e.name)
    return !0;
  var n = e.form || pr(e), r = function(a) {
    return n.querySelectorAll('input[type="radio"][name="' + a + '"]');
  }, o;
  if (typeof window < "u" && typeof window.CSS < "u" && typeof window.CSS.escape == "function")
    o = r(window.CSS.escape(e.name));
  else
    try {
      o = r(e.name);
    } catch (i) {
      return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", i.message), !1;
    }
  var s = Oc(o, e.form);
  return !s || s === e;
}, kc = function(e) {
  return hs(e) && e.type === "radio";
}, Pc = function(e) {
  return kc(e) && !Ac(e);
}, Sc = function(e) {
  var n, r = e && pr(e), o = (n = r) === null || n === void 0 ? void 0 : n.host, s = !1;
  if (r && r !== e) {
    var i, a, u;
    for (s = !!((i = o) !== null && i !== void 0 && (a = i.ownerDocument) !== null && a !== void 0 && a.contains(o) || e != null && (u = e.ownerDocument) !== null && u !== void 0 && u.contains(e)); !s && o; ) {
      var c, l, f;
      r = pr(o), o = (c = r) === null || c === void 0 ? void 0 : c.host, s = !!((l = o) !== null && l !== void 0 && (f = l.ownerDocument) !== null && f !== void 0 && f.contains(o));
    }
  }
  return s;
}, ni = function(e) {
  var n = e.getBoundingClientRect(), r = n.width, o = n.height;
  return r === 0 && o === 0;
}, Rc = function(e, n) {
  var r = n.displayCheck, o = n.getShadowRoot;
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  var s = an.call(e, "details>summary:first-of-type"), i = s ? e.parentElement : e;
  if (an.call(i, "details:not([open]) *"))
    return !0;
  if (!r || r === "full" || r === "legacy-full") {
    if (typeof o == "function") {
      for (var a = e; e; ) {
        var u = e.parentElement, c = pr(e);
        if (u && !u.shadowRoot && o(u) === !0)
          return ni(e);
        e.assignedSlot ? e = e.assignedSlot : !u && c !== e.ownerDocument ? e = c.host : e = u;
      }
      e = a;
    }
    if (Sc(e))
      return !e.getClientRects().length;
    if (r !== "legacy-full")
      return !0;
  } else if (r === "non-zero-area")
    return ni(e);
  return !1;
}, Dc = function(e) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
    for (var n = e.parentElement; n; ) {
      if (n.tagName === "FIELDSET" && n.disabled) {
        for (var r = 0; r < n.children.length; r++) {
          var o = n.children.item(r);
          if (o.tagName === "LEGEND")
            return an.call(n, "fieldset[disabled] *") ? !0 : !o.contains(e);
        }
        return !0;
      }
      n = n.parentElement;
    }
  return !1;
}, yr = function(e, n) {
  return !(n.disabled || // we must do an inert look up to filter out any elements inside an inert ancestor
  //  because we're limited in the type of selectors we can use in JSDom (see related
  //  note related to `candidateSelectors`)
  br(n) || xc(n) || Rc(n, e) || // For a details element with a summary, the summary element gets the focus
  Cc(n) || Dc(n));
}, $r = function(e, n) {
  return !(Pc(n) || Xe(n) < 0 || !yr(e, n));
}, Fc = function(e) {
  var n = parseInt(e.getAttribute("tabindex"), 10);
  return !!(isNaN(n) || n >= 0);
}, Nc = function t(e) {
  var n = [], r = [];
  return e.forEach(function(o, s) {
    var i = !!o.scopeParent, a = i ? o.scopeParent : o, u = Ec(a, i), c = i ? t(o.candidates) : a;
    u === 0 ? i ? n.push.apply(n, c) : n.push(a) : r.push({
      documentOrder: s,
      tabIndex: u,
      item: o,
      isScope: i,
      content: c
    });
  }), r.sort(Tc).reduce(function(o, s) {
    return s.isScope ? o.push.apply(o, s.content) : o.push(s.content), o;
  }, []).concat(n);
}, Ic = function(e, n) {
  n = n || {};
  var r;
  return n.getShadowRoot ? r = ms([e], n.includeContainer, {
    filter: $r.bind(null, n),
    flatten: !1,
    getShadowRoot: n.getShadowRoot,
    shadowRootFilter: Fc
  }) : r = vs(e, n.includeContainer, $r.bind(null, n)), Nc(r);
}, Mc = function(e, n) {
  n = n || {};
  var r;
  return n.getShadowRoot ? r = ms([e], n.includeContainer, {
    filter: yr.bind(null, n),
    flatten: !0,
    getShadowRoot: n.getShadowRoot
  }) : r = vs(e, n.includeContainer, yr.bind(null, n)), r;
}, vn = function(e, n) {
  if (n = n || {}, !e)
    throw new Error("No node provided");
  return an.call(e, hr) === !1 ? !1 : $r(n, e);
}, Lc = /* @__PURE__ */ fs.concat("iframe").join(","), Ir = function(e, n) {
  if (n = n || {}, !e)
    throw new Error("No node provided");
  return an.call(e, Lc) === !1 ? !1 : yr(n, e);
};
/*!
* focus-trap 7.5.4
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/
function ri(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function oi(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? ri(Object(n), !0).forEach(function(r) {
      Bc(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ri(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function Bc(t, e, n) {
  return e = jc(e), e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
function Kc(t, e) {
  if (typeof t != "object" || t === null)
    return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e || "default");
    if (typeof r != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function jc(t) {
  var e = Kc(t, "string");
  return typeof e == "symbol" ? e : String(e);
}
var ii = {
  activateTrap: function(e, n) {
    if (e.length > 0) {
      var r = e[e.length - 1];
      r !== n && r.pause();
    }
    var o = e.indexOf(n);
    o === -1 || e.splice(o, 1), e.push(n);
  },
  deactivateTrap: function(e, n) {
    var r = e.indexOf(n);
    r !== -1 && e.splice(r, 1), e.length > 0 && e[e.length - 1].unpause();
  }
}, Wc = function(e) {
  return e.tagName && e.tagName.toLowerCase() === "input" && typeof e.select == "function";
}, Vc = function(e) {
  return (e == null ? void 0 : e.key) === "Escape" || (e == null ? void 0 : e.key) === "Esc" || (e == null ? void 0 : e.keyCode) === 27;
}, Fn = function(e) {
  return (e == null ? void 0 : e.key) === "Tab" || (e == null ? void 0 : e.keyCode) === 9;
}, qc = function(e) {
  return Fn(e) && !e.shiftKey;
}, Uc = function(e) {
  return Fn(e) && e.shiftKey;
}, si = function(e) {
  return setTimeout(e, 0);
}, ai = function(e, n) {
  var r = -1;
  return e.every(function(o, s) {
    return n(o) ? (r = s, !1) : !0;
  }), r;
}, kn = function(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
    r[o - 1] = arguments[o];
  return typeof e == "function" ? e.apply(void 0, r) : e;
}, Jn = function(e) {
  return e.target.shadowRoot && typeof e.composedPath == "function" ? e.composedPath()[0] : e.target;
}, Hc = [], zc = function(e, n) {
  var r = (n == null ? void 0 : n.document) || document, o = (n == null ? void 0 : n.trapStack) || Hc, s = oi({
    returnFocusOnDeactivate: !0,
    escapeDeactivates: !0,
    delayInitialFocus: !0,
    isKeyForward: qc,
    isKeyBackward: Uc
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
  }, a, u = function(p, b, O) {
    return p && p[b] !== void 0 ? p[b] : s[O || b];
  }, c = function(p, b) {
    var O = typeof (b == null ? void 0 : b.composedPath) == "function" ? b.composedPath() : void 0;
    return i.containerGroups.findIndex(function(x) {
      var R = x.container, M = x.tabbableNodes;
      return R.contains(p) || // fall back to explicit tabbable search which will take into consideration any
      //  web components if the `tabbableOptions.getShadowRoot` option was used for
      //  the trap, enabling shadow DOM support in tabbable (`Node.contains()` doesn't
      //  look inside web components even if open)
      (O == null ? void 0 : O.includes(R)) || M.find(function(P) {
        return P === p;
      });
    });
  }, l = function(p) {
    var b = s[p];
    if (typeof b == "function") {
      for (var O = arguments.length, x = new Array(O > 1 ? O - 1 : 0), R = 1; R < O; R++)
        x[R - 1] = arguments[R];
      b = b.apply(void 0, x);
    }
    if (b === !0 && (b = void 0), !b) {
      if (b === void 0 || b === !1)
        return b;
      throw new Error("`".concat(p, "` was specified but was not a node, or did not return a node"));
    }
    var M = b;
    if (typeof b == "string" && (M = r.querySelector(b), !M))
      throw new Error("`".concat(p, "` as selector refers to no known node"));
    return M;
  }, f = function() {
    var p = l("initialFocus");
    if (p === !1)
      return !1;
    if (p === void 0 || !Ir(p, s.tabbableOptions))
      if (c(r.activeElement) >= 0)
        p = r.activeElement;
      else {
        var b = i.tabbableGroups[0], O = b && b.firstTabbableNode;
        p = O || l("fallbackFocus");
      }
    if (!p)
      throw new Error("Your focus-trap needs to have at least one focusable element");
    return p;
  }, v = function() {
    if (i.containerGroups = i.containers.map(function(p) {
      var b = Ic(p, s.tabbableOptions), O = Mc(p, s.tabbableOptions), x = b.length > 0 ? b[0] : void 0, R = b.length > 0 ? b[b.length - 1] : void 0, M = O.find(function(st) {
        return vn(st);
      }), P = O.slice().reverse().find(function(st) {
        return vn(st);
      }), Q = !!b.find(function(st) {
        return Xe(st) > 0;
      });
      return {
        container: p,
        tabbableNodes: b,
        focusableNodes: O,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: Q,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: x,
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
        firstDomTabbableNode: M,
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
        nextTabbableNode: function(V) {
          var Ct = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, Pt = b.indexOf(V);
          return Pt < 0 ? Ct ? O.slice(O.indexOf(V) + 1).find(function(U) {
            return vn(U);
          }) : O.slice(0, O.indexOf(V)).reverse().find(function(U) {
            return vn(U);
          }) : b[Pt + (Ct ? 1 : -1)];
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
  }, d = function E(p) {
    var b = p.activeElement;
    if (b)
      return b.shadowRoot && b.shadowRoot.activeElement !== null ? E(b.shadowRoot) : b;
  }, h = function E(p) {
    if (p !== !1 && p !== d(document)) {
      if (!p || !p.focus) {
        E(f());
        return;
      }
      p.focus({
        preventScroll: !!s.preventScroll
      }), i.mostRecentlyFocusedNode = p, Wc(p) && p.select();
    }
  }, m = function(p) {
    var b = l("setReturnFocus", p);
    return b || (b === !1 ? !1 : p);
  }, g = function(p) {
    var b = p.target, O = p.event, x = p.isBackward, R = x === void 0 ? !1 : x;
    b = b || Jn(O), v();
    var M = null;
    if (i.tabbableGroups.length > 0) {
      var P = c(b, O), Q = P >= 0 ? i.containerGroups[P] : void 0;
      if (P < 0)
        R ? M = i.tabbableGroups[i.tabbableGroups.length - 1].lastTabbableNode : M = i.tabbableGroups[0].firstTabbableNode;
      else if (R) {
        var st = ai(i.tabbableGroups, function($t) {
          var $ = $t.firstTabbableNode;
          return b === $;
        });
        if (st < 0 && (Q.container === b || Ir(b, s.tabbableOptions) && !vn(b, s.tabbableOptions) && !Q.nextTabbableNode(b, !1)) && (st = P), st >= 0) {
          var V = st === 0 ? i.tabbableGroups.length - 1 : st - 1, Ct = i.tabbableGroups[V];
          M = Xe(b) >= 0 ? Ct.lastTabbableNode : Ct.lastDomTabbableNode;
        } else
          Fn(O) || (M = Q.nextTabbableNode(b, !1));
      } else {
        var Pt = ai(i.tabbableGroups, function($t) {
          var $ = $t.lastTabbableNode;
          return b === $;
        });
        if (Pt < 0 && (Q.container === b || Ir(b, s.tabbableOptions) && !vn(b, s.tabbableOptions) && !Q.nextTabbableNode(b)) && (Pt = P), Pt >= 0) {
          var U = Pt === i.tabbableGroups.length - 1 ? 0 : Pt + 1, re = i.tabbableGroups[U];
          M = Xe(b) >= 0 ? re.firstTabbableNode : re.firstDomTabbableNode;
        } else
          Fn(O) || (M = Q.nextTabbableNode(b));
      }
    } else
      M = l("fallbackFocus");
    return M;
  }, y = function(p) {
    var b = Jn(p);
    if (!(c(b, p) >= 0)) {
      if (kn(s.clickOutsideDeactivates, p)) {
        a.deactivate({
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
      kn(s.allowOutsideClick, p) || p.preventDefault();
    }
  }, _ = function(p) {
    var b = Jn(p), O = c(b, p) >= 0;
    if (O || b instanceof Document)
      O && (i.mostRecentlyFocusedNode = b);
    else {
      p.stopImmediatePropagation();
      var x, R = !0;
      if (i.mostRecentlyFocusedNode)
        if (Xe(i.mostRecentlyFocusedNode) > 0) {
          var M = c(i.mostRecentlyFocusedNode), P = i.containerGroups[M].tabbableNodes;
          if (P.length > 0) {
            var Q = P.findIndex(function(st) {
              return st === i.mostRecentlyFocusedNode;
            });
            Q >= 0 && (s.isKeyForward(i.recentNavEvent) ? Q + 1 < P.length && (x = P[Q + 1], R = !1) : Q - 1 >= 0 && (x = P[Q - 1], R = !1));
          }
        } else
          i.containerGroups.some(function(st) {
            return st.tabbableNodes.some(function(V) {
              return Xe(V) > 0;
            });
          }) || (R = !1);
      else
        R = !1;
      R && (x = g({
        // move FROM the MRU node, not event-related node (which will be the node that is
        //  outside the trap causing the focus escape we're trying to fix)
        target: i.mostRecentlyFocusedNode,
        isBackward: s.isKeyBackward(i.recentNavEvent)
      })), h(x || i.mostRecentlyFocusedNode || f());
    }
    i.recentNavEvent = void 0;
  }, w = function(p) {
    var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    i.recentNavEvent = p;
    var O = g({
      event: p,
      isBackward: b
    });
    O && (Fn(p) && p.preventDefault(), h(O));
  }, k = function(p) {
    if (Vc(p) && kn(s.escapeDeactivates, p) !== !1) {
      p.preventDefault(), a.deactivate();
      return;
    }
    (s.isKeyForward(p) || s.isKeyBackward(p)) && w(p, s.isKeyBackward(p));
  }, B = function(p) {
    var b = Jn(p);
    c(b, p) >= 0 || kn(s.clickOutsideDeactivates, p) || kn(s.allowOutsideClick, p) || (p.preventDefault(), p.stopImmediatePropagation());
  }, I = function() {
    if (i.active)
      return ii.activateTrap(o, a), i.delayInitialFocusTimer = s.delayInitialFocus ? si(function() {
        h(f());
      }) : h(f()), r.addEventListener("focusin", _, !0), r.addEventListener("mousedown", y, {
        capture: !0,
        passive: !1
      }), r.addEventListener("touchstart", y, {
        capture: !0,
        passive: !1
      }), r.addEventListener("click", B, {
        capture: !0,
        passive: !1
      }), r.addEventListener("keydown", k, {
        capture: !0,
        passive: !1
      }), a;
  }, K = function() {
    if (i.active)
      return r.removeEventListener("focusin", _, !0), r.removeEventListener("mousedown", y, !0), r.removeEventListener("touchstart", y, !0), r.removeEventListener("click", B, !0), r.removeEventListener("keydown", k, !0), a;
  }, H = function(p) {
    var b = p.some(function(O) {
      var x = Array.from(O.removedNodes);
      return x.some(function(R) {
        return R === i.mostRecentlyFocusedNode;
      });
    });
    b && h(f());
  }, Y = typeof window < "u" && "MutationObserver" in window ? new MutationObserver(H) : void 0, G = function() {
    Y && (Y.disconnect(), i.active && !i.paused && i.containers.map(function(p) {
      Y.observe(p, {
        subtree: !0,
        childList: !0
      });
    }));
  };
  return a = {
    get active() {
      return i.active;
    },
    get paused() {
      return i.paused;
    },
    activate: function(p) {
      if (i.active)
        return this;
      var b = u(p, "onActivate"), O = u(p, "onPostActivate"), x = u(p, "checkCanFocusTrap");
      x || v(), i.active = !0, i.paused = !1, i.nodeFocusedBeforeActivation = r.activeElement, b == null || b();
      var R = function() {
        x && v(), I(), G(), O == null || O();
      };
      return x ? (x(i.containers.concat()).then(R, R), this) : (R(), this);
    },
    deactivate: function(p) {
      if (!i.active)
        return this;
      var b = oi({
        onDeactivate: s.onDeactivate,
        onPostDeactivate: s.onPostDeactivate,
        checkCanReturnFocus: s.checkCanReturnFocus
      }, p);
      clearTimeout(i.delayInitialFocusTimer), i.delayInitialFocusTimer = void 0, K(), i.active = !1, i.paused = !1, G(), ii.deactivateTrap(o, a);
      var O = u(b, "onDeactivate"), x = u(b, "onPostDeactivate"), R = u(b, "checkCanReturnFocus"), M = u(b, "returnFocus", "returnFocusOnDeactivate");
      O == null || O();
      var P = function() {
        si(function() {
          M && h(m(i.nodeFocusedBeforeActivation)), x == null || x();
        });
      };
      return M && R ? (R(m(i.nodeFocusedBeforeActivation)).then(P, P), this) : (P(), this);
    },
    pause: function(p) {
      if (i.paused || !i.active)
        return this;
      var b = u(p, "onPause"), O = u(p, "onPostPause");
      return i.paused = !0, b == null || b(), K(), G(), O == null || O(), this;
    },
    unpause: function(p) {
      if (!i.paused || !i.active)
        return this;
      var b = u(p, "onUnpause"), O = u(p, "onPostUnpause");
      return i.paused = !1, b == null || b(), v(), I(), G(), O == null || O(), this;
    },
    updateContainerElements: function(p) {
      var b = [].concat(p).filter(Boolean);
      return i.containers = b.map(function(O) {
        return typeof O == "string" ? r.querySelector(O) : O;
      }), i.active && v(), G(), this;
    }
  }, a.updateContainerElements(e), a;
};
function ps(t = {}) {
  let e;
  const { immediate: n, ...r } = t, o = kt(!1), s = kt(!1), i = (f) => e == null ? void 0 : e.activate(f), a = (f) => {
    e == null || e.deactivate(f);
  }, u = () => {
    e && (e.pause(), s.set(!0));
  }, c = () => {
    e && (e.unpause(), s.set(!1));
  };
  return {
    useFocusTrap: (f) => (e = zc(f, {
      ...r,
      onActivate() {
        var v;
        o.set(!0), (v = t.onActivate) == null || v.call(t);
      },
      onDeactivate() {
        var v;
        o.set(!1), (v = t.onDeactivate) == null || v.call(t);
      }
    }), n && i(), {
      destroy() {
        a(), e = void 0;
      }
    }),
    hasFocus: Ho(o),
    isPaused: Ho(s),
    activate: i,
    deactivate: a,
    pause: u,
    unpause: c
  };
}
const $n = [], bs = (t, e) => {
  let n = gt;
  function r() {
    const s = $n.indexOf(t);
    s >= 0 && $n.splice(s, 1);
  }
  function o(s) {
    n();
    const { open: i, onClose: a, shouldCloseOnInteractOutside: u, closeOnInteractOutside: c } = s;
    ke(100).then(() => {
      i ? $n.push(t) : r();
    });
    function l() {
      return $a($n) === t;
    }
    function f() {
      l() && a && (a(), r());
    }
    function v(h) {
      const m = h.target;
      po(m) && m && l() && (h.preventDefault(), h.stopPropagation(), h.stopImmediatePropagation());
    }
    function d(h) {
      u != null && u(h) && l() && (h.preventDefault(), h.stopPropagation(), h.stopImmediatePropagation(), f());
    }
    n = Gc(t, {
      onInteractOutsideStart: v,
      onInteractOutside: c ? d : void 0,
      enabled: i
    }).destroy;
  }
  return o(e), {
    update: o,
    destroy() {
      r(), n();
    }
  };
}, Yc = {
  floating: {},
  focusTrap: {},
  modal: {},
  escapeKeydown: {},
  portal: "body"
}, ui = (t, e) => {
  t.dataset.escapee = "";
  const { anchorElement: n, open: r, options: o } = e;
  if (!n || !r || !o)
    return { destroy: gt };
  const s = { ...Yc, ...o }, i = [];
  if (s.portal !== null && i.push(Co(t, s.portal).destroy), i.push(yc(n, t, s.floating).destroy), s.focusTrap !== null) {
    const { useFocusTrap: u } = ps({
      immediate: !0,
      escapeDeactivates: !1,
      allowOutsideClick: !0,
      returnFocusOnDeactivate: !1,
      fallbackFocus: t,
      ...s.focusTrap
    });
    i.push(u(t).destroy);
  }
  s.modal !== null && i.push(bs(t, {
    onClose: () => {
      j(n) && (r.set(!1), n.focus());
    },
    shouldCloseOnInteractOutside: (u) => !(u.defaultPrevented || j(n) && n.contains(u.target)),
    ...s.modal
  }).destroy), s.escapeKeydown !== null && i.push(dr(t, {
    enabled: r,
    handler: () => {
      r.set(!1);
    },
    ...s.escapeKeydown
  }).destroy);
  const a = Ut(...i);
  return {
    destroy() {
      a();
    }
  };
}, Co = (t, e = "body") => {
  let n;
  if (!j(e) && typeof e != "string")
    return {
      destroy: gt
    };
  async function r(s) {
    if (e = s, typeof e == "string") {
      if (n = document.querySelector(e), n === null && (await Qe(), n = document.querySelector(e)), n === null)
        throw new Error(`No element found matching css selector: "${e}"`);
    } else if (e instanceof HTMLElement)
      n = e;
    else
      throw new TypeError(`Unknown portal target type: ${e === null ? "null" : typeof e}. Allowed types: string (CSS selector) or HTMLElement.`);
    t.dataset.portal = "", n.appendChild(t), t.hidden = !1;
  }
  function o() {
    t.remove();
  }
  return r(e), {
    update: r,
    destroy: o
  };
}, Gc = (t, e) => {
  let n = gt, r = gt, o = !1, s = !1, i = !1;
  function a(l) {
    n(), r();
    const { onInteractOutside: f, onInteractOutsideStart: v, enabled: d } = l;
    if (!d)
      return;
    function h(y) {
      f && ci(y, t) && (v == null || v(y));
      const _ = y.target;
      po(_) && ys(t, _) && (s = !0), o = !0;
    }
    function m(y) {
      f == null || f(y);
    }
    const g = Xc(t);
    if (typeof PointerEvent < "u") {
      const y = (_) => {
        r();
        const w = (k) => {
          u(k) && m(k), c();
        };
        if (_.pointerType === "touch") {
          r = Ht(g, "click", w, {
            capture: !0,
            once: !0
          });
          return;
        }
        w(_);
      };
      n = Ut(Ht(g, "pointerdown", h, !0), Ht(g, "pointerup", y, !0));
    } else {
      const y = (w) => {
        i ? i = !1 : u(w) && m(w), c();
      }, _ = (w) => {
        i = !0, u(w) && m(w), c();
      };
      n = Ut(Ht(g, "mousedown", h, !0), Ht(g, "mouseup", y, !0), Ht(g, "touchstart", h, !0), Ht(g, "touchend", _, !0));
    }
  }
  function u(l) {
    return !!(o && !s && ci(l, t));
  }
  function c() {
    o = !1, s = !1;
  }
  return a(e), {
    update: a,
    destroy() {
      n(), r();
    }
  };
};
function ci(t, e) {
  if ("button" in t && t.button > 0)
    return !1;
  const n = t.target;
  if (!po(n))
    return !1;
  const r = n.ownerDocument;
  return !r || !r.documentElement.contains(n) ? !1 : e && !ys(e, n);
}
function ys(t, e) {
  return t === e || t.contains(e);
}
function Xc(t) {
  return (t == null ? void 0 : t.ownerDocument) ?? document;
}
$e(!1), $e(!1), $e(void 0);
const Zc = {
  ltr: [...fr, vt.ARROW_RIGHT],
  rtl: [...fr, vt.ARROW_LEFT]
}, Qc = {
  ltr: [vt.ARROW_LEFT],
  rtl: [vt.ARROW_RIGHT]
}, li = ["menu", "trigger"], Jc = {
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
function $c(t) {
  const { name: e, selector: n } = Xi(t.selector), { preventScroll: r, arrowSize: o, positioning: s, closeOnEscape: i, closeOnOutsideClick: a, portal: u, forceVisible: c, typeahead: l, loop: f, closeFocus: v, disableFocusFirstItem: d, closeOnItemClick: h, onOutsideClick: m } = t.rootOptions, g = t.rootOpen, y = t.rootActiveTrigger, _ = t.nextFocusable, w = t.prevFocusable, k = St.writable(!1), B = St(kt(0)), I = St(kt(null)), K = St(kt("right")), H = St(kt(null)), Y = St(ce([K, I], ([T, D]) => (F) => T === (D == null ? void 0 : D.side) && tl(F, D == null ? void 0 : D.area))), { typed: G, handleTypeaheadSearch: E } = Pu(), p = tn({ ...Gr(li), ...t.ids }), b = Qo({
    open: g,
    forceVisible: c,
    activeTrigger: y
  }), O = At(e(), {
    stores: [b, u, p.menu, p.trigger],
    returned: ([T, D, F, L]) => ({
      role: "menu",
      hidden: T ? void 0 : !0,
      style: Ie({
        display: T ? void 0 : "none"
      }),
      id: F,
      "aria-labelledby": L,
      "data-state": T ? "open" : "closed",
      "data-portal": Gi(D),
      tabindex: -1
    }),
    action: (T) => {
      let D = gt;
      const F = Wt([b, y, s, a, u, i], ([X, Et, Zt, yt, ot, ct]) => {
        D(), !(!X || !Et) && Qe().then(() => {
          D(), Sn(T, n), D = ui(T, {
            anchorElement: Et,
            open: g,
            options: {
              floating: Zt,
              modal: {
                closeOnInteractOutside: yt,
                shouldCloseOnInteractOutside: (tt) => {
                  var it;
                  return (it = m.get()) == null || it(tt), !(tt.defaultPrevented || j(Et) && Et.contains(tt.target));
                },
                onClose: () => {
                  g.set(!1), Et.focus();
                },
                open: X
              },
              portal: Xr(T, ot),
              escapeKeydown: ct ? void 0 : null
            }
          }).destroy;
        });
      }), L = Ut(nt(T, "keydown", (X) => {
        const Et = X.target, Zt = X.currentTarget;
        if (!j(Et) || !j(Zt) || !(Et.closest('[role="menu"]') === Zt))
          return;
        if (Xo.includes(X.key) && di(X, f.get() ?? !1), X.key === vt.TAB) {
          X.preventDefault(), g.set(!1), fi(X, _, w);
          return;
        }
        const ot = X.key.length === 1;
        !(X.ctrlKey || X.altKey || X.metaKey) && ot && l.get() === !0 && E(X.key, Ge(Zt));
      }));
      return {
        destroy() {
          F(), L(), D();
        }
      };
    }
  }), x = At(e("trigger"), {
    stores: [g, p.menu, p.trigger],
    returned: ([T, D, F]) => ({
      "aria-controls": D,
      "aria-expanded": T,
      "data-state": T ? "open" : "closed",
      id: F,
      tabindex: 0
    }),
    action: (T) => (tr(T), y.update((F) => F || T), {
      destroy: Ut(nt(T, "click", (F) => {
        const L = g.get(), X = F.currentTarget;
        j(X) && ($(X), L || F.preventDefault());
      }), nt(T, "keydown", (F) => {
        const L = F.currentTarget;
        if (!j(L) || !(fr.includes(F.key) || F.key === vt.ARROW_DOWN))
          return;
        F.preventDefault(), $(L);
        const X = L.getAttribute("aria-controls");
        if (!X)
          return;
        const Et = document.getElementById(X);
        if (!Et)
          return;
        const Zt = Ge(Et);
        Zt.length && qt(Zt[0]);
      }))
    })
  }), R = At(e("arrow"), {
    stores: o,
    returned: (T) => ({
      "data-arrow": !0,
      style: Ie({
        position: "absolute",
        width: `var(--arrow-size, ${T}px)`,
        height: `var(--arrow-size, ${T}px)`
      })
    })
  }), M = At(e("overlay"), {
    stores: [b],
    returned: ([T]) => ({
      hidden: T ? void 0 : !0,
      tabindex: -1,
      style: Ie({
        display: T ? void 0 : "none"
      }),
      "aria-hidden": "true",
      "data-state": rl(T)
    }),
    action: (T) => {
      let D = gt;
      if (i.get()) {
        const L = dr(T, {
          handler: () => {
            g.set(!1);
            const X = y.get();
            X && X.focus();
          }
        });
        L && L.destroy && (D = L.destroy);
      }
      const F = Wt([u], ([L]) => {
        if (L === null)
          return gt;
        const X = Xr(T, L);
        return X === null ? gt : Co(T, X).destroy;
      });
      return {
        destroy() {
          D(), F();
        }
      };
    }
  }), P = At(e("item"), {
    returned: () => ({
      role: "menuitem",
      tabindex: -1,
      "data-orientation": "vertical"
    }),
    action: (T) => (Sn(T, n), tr(T), {
      destroy: Ut(nt(T, "pointerdown", (F) => {
        const L = F.currentTarget;
        if (j(L) && Ce(L)) {
          F.preventDefault();
          return;
        }
      }), nt(T, "click", (F) => {
        const L = F.currentTarget;
        if (j(L)) {
          if (Ce(L)) {
            F.preventDefault();
            return;
          }
          if (F.defaultPrevented) {
            qt(L);
            return;
          }
          h.get() && ke(1).then(() => {
            g.set(!1);
          });
        }
      }), nt(T, "keydown", (F) => {
        Xt(F);
      }), nt(T, "pointermove", (F) => {
        De(F);
      }), nt(T, "pointerleave", (F) => {
        Ue(F);
      }), nt(T, "focusin", (F) => {
        Te(F);
      }), nt(T, "focusout", (F) => {
        xe(F);
      }))
    })
  }), Q = At(e("group"), {
    returned: () => (T) => ({
      role: "group",
      "aria-labelledby": T
    })
  }), st = At(e("group-label"), {
    returned: () => (T) => ({
      id: T
    })
  }), V = {
    defaultChecked: !1,
    disabled: !1
  }, Ct = (T) => {
    const D = { ...V, ...T }, F = D.checked ?? kt(D.defaultChecked ?? null), L = Dn(F, D.onCheckedChange), X = kt(D.disabled), Et = At(e("checkbox-item"), {
      stores: [L, X],
      returned: ([ot, ct]) => ({
        role: "menuitemcheckbox",
        tabindex: -1,
        "data-orientation": "vertical",
        "aria-checked": un(ot) ? "mixed" : ot ? "true" : "false",
        "data-disabled": Dr(ct),
        "data-state": Rr(ot)
      }),
      action: (ot) => (Sn(ot, n), tr(ot), {
        destroy: Ut(nt(ot, "pointerdown", (tt) => {
          const it = tt.currentTarget;
          if (j(it) && Ce(it)) {
            tt.preventDefault();
            return;
          }
        }), nt(ot, "click", (tt) => {
          const it = tt.currentTarget;
          if (j(it)) {
            if (Ce(it)) {
              tt.preventDefault();
              return;
            }
            if (tt.defaultPrevented) {
              qt(it);
              return;
            }
            L.update((Fe) => un(Fe) ? !0 : !Fe), h.get() && Qe().then(() => {
              g.set(!1);
            });
          }
        }), nt(ot, "keydown", (tt) => {
          Xt(tt);
        }), nt(ot, "pointermove", (tt) => {
          const it = tt.currentTarget;
          if (j(it)) {
            if (Ce(it)) {
              Re(tt);
              return;
            }
            De(tt, it);
          }
        }), nt(ot, "pointerleave", (tt) => {
          Ue(tt);
        }), nt(ot, "focusin", (tt) => {
          Te(tt);
        }), nt(ot, "focusout", (tt) => {
          xe(tt);
        }))
      })
    }), Zt = ce(L, (ot) => ot === !0), yt = ce(L, (ot) => ot === "indeterminate");
    return {
      elements: {
        checkboxItem: Et
      },
      states: {
        checked: L
      },
      helpers: {
        isChecked: Zt,
        isIndeterminate: yt
      },
      options: {
        disabled: X
      }
    };
  }, Pt = (T = {}) => {
    const D = T.value ?? kt(T.defaultValue ?? null), F = Dn(D, T.onValueChange), L = At(e("radio-group"), {
      returned: () => ({
        role: "group"
      })
    }), X = {
      disabled: !1
    }, Et = At(e("radio-item"), {
      stores: [F],
      returned: ([yt]) => (ot) => {
        const { value: ct, disabled: tt } = { ...X, ...ot }, it = yt === ct;
        return {
          disabled: tt,
          role: "menuitemradio",
          "data-state": it ? "checked" : "unchecked",
          "aria-checked": it,
          "data-disabled": Dr(tt),
          "data-value": ct,
          "data-orientation": "vertical",
          tabindex: -1
        };
      },
      action: (yt) => (Sn(yt, n), {
        destroy: Ut(nt(yt, "pointerdown", (ct) => {
          const tt = ct.currentTarget;
          if (!j(tt))
            return;
          const it = yt.dataset.value;
          if (yt.dataset.disabled || it === void 0) {
            ct.preventDefault();
            return;
          }
        }), nt(yt, "click", (ct) => {
          const tt = ct.currentTarget;
          if (!j(tt))
            return;
          const it = yt.dataset.value;
          if (yt.dataset.disabled || it === void 0) {
            ct.preventDefault();
            return;
          }
          if (ct.defaultPrevented) {
            if (!j(tt))
              return;
            qt(tt);
            return;
          }
          F.set(it), h.get() && Qe().then(() => {
            g.set(!1);
          });
        }), nt(yt, "keydown", (ct) => {
          Xt(ct);
        }), nt(yt, "pointermove", (ct) => {
          const tt = ct.currentTarget;
          if (!j(tt))
            return;
          const it = yt.dataset.value;
          if (yt.dataset.disabled || it === void 0) {
            Re(ct);
            return;
          }
          De(ct, tt);
        }), nt(yt, "pointerleave", (ct) => {
          Ue(ct);
        }), nt(yt, "focusin", (ct) => {
          Te(ct);
        }), nt(yt, "focusout", (ct) => {
          xe(ct);
        }))
      })
    }), Zt = ce(F, (yt) => (ot) => yt === ot);
    return {
      elements: {
        radioGroup: L,
        radioItem: Et
      },
      states: {
        value: F
      },
      helpers: {
        isChecked: Zt
      }
    };
  }, { elements: { root: U } } = fl({
    orientation: "horizontal"
  }), re = {
    ...Jc,
    disabled: !1,
    positioning: {
      placement: "right-start",
      gutter: 8
    }
  }, $t = (T) => {
    const D = { ...re, ...T }, F = D.open ?? kt(!1), L = Dn(F, D == null ? void 0 : D.onOpenChange), X = tn(Or(D, "ids")), { positioning: Et, arrowSize: Zt, disabled: yt } = X, ot = St(kt(null)), ct = St(kt(null)), tt = St(kt(0)), it = tn({ ...Gr(li), ...D.ids });
    Go(() => {
      const at = document.getElementById(it.trigger.get());
      at && ot.set(at);
    });
    const Fe = Qo({
      open: L,
      forceVisible: c,
      activeTrigger: ot
    }), Ps = At(e("submenu"), {
      stores: [Fe, it.menu, it.trigger],
      returned: ([at, Mt, Qt]) => ({
        role: "menu",
        hidden: at ? void 0 : !0,
        style: Ie({
          display: at ? void 0 : "none"
        }),
        id: Mt,
        "aria-labelledby": Qt,
        "data-state": at ? "open" : "closed",
        // unit tests fail on `.closest` if the id starts with a number
        // so using a data attribute
        "data-id": Mt,
        tabindex: -1
      }),
      action: (at) => {
        let Mt = gt;
        const Qt = Wt([Fe, Et], ([z, dt]) => {
          if (Mt(), !z)
            return;
          const Ot = ot.get();
          Ot && Qe().then(() => {
            Mt();
            const Rt = ko(Ot);
            Mt = ui(at, {
              anchorElement: Ot,
              open: L,
              options: {
                floating: dt,
                portal: j(Rt) ? Rt : void 0,
                modal: null,
                focusTrap: null,
                escapeKeydown: null
              }
            }).destroy;
          });
        }), lt = Ut(nt(at, "keydown", (z) => {
          if (z.key === vt.ESCAPE)
            return;
          const dt = z.target, Ot = z.currentTarget;
          if (!j(dt) || !j(Ot) || !(dt.closest('[role="menu"]') === Ot))
            return;
          if (Xo.includes(z.key)) {
            z.stopImmediatePropagation(), di(z, f.get() ?? !1);
            return;
          }
          const cn = Qc.ltr.includes(z.key), ln = z.ctrlKey || z.altKey || z.metaKey, Yn = z.key.length === 1;
          if (cn) {
            const Po = ot.get();
            z.preventDefault(), L.update(() => (Po && qt(Po), !1));
            return;
          }
          if (z.key === vt.TAB) {
            z.preventDefault(), g.set(!1), fi(z, _, w);
            return;
          }
          !ln && Yn && l.get() === !0 && E(z.key, Ge(Ot));
        }), nt(at, "pointermove", (z) => {
          Vt(z);
        }), nt(at, "focusout", (z) => {
          const dt = ot.get();
          if (k.get()) {
            const Ot = z.target, Rt = document.getElementById(it.menu.get());
            if (!j(Rt) || !j(Ot))
              return;
            !Rt.contains(Ot) && Ot !== dt && L.set(!1);
          } else {
            const Ot = z.currentTarget, Rt = z.relatedTarget;
            if (!j(Rt) || !j(Ot))
              return;
            !Ot.contains(Rt) && Rt !== dt && L.set(!1);
          }
        }));
        return {
          destroy() {
            Qt(), Mt(), lt();
          }
        };
      }
    }), Ss = At(e("subtrigger"), {
      stores: [L, yt, it.menu, it.trigger],
      returned: ([at, Mt, Qt, lt]) => ({
        role: "menuitem",
        id: lt,
        tabindex: -1,
        "aria-controls": Qt,
        "aria-expanded": at,
        "data-state": at ? "open" : "closed",
        "data-disabled": Dr(Mt),
        "aria-haspopop": "menu"
      }),
      action: (at) => {
        Sn(at, n), tr(at), ot.update((lt) => lt || at);
        const Mt = () => {
          Mr(ct), window.clearTimeout(tt.get()), I.set(null);
        }, Qt = Ut(nt(at, "click", (lt) => {
          if (lt.defaultPrevented)
            return;
          const z = lt.currentTarget;
          !j(z) || Ce(z) || (qt(z), L.get() || L.update((dt) => dt || (ot.set(z), !dt)));
        }), nt(at, "keydown", (lt) => {
          const z = G.get(), dt = lt.currentTarget;
          if (!(!j(dt) || Ce(dt) || z.length > 0 && lt.key === vt.SPACE) && Zc.ltr.includes(lt.key)) {
            if (!L.get()) {
              dt.click(), lt.preventDefault();
              return;
            }
            const Rt = dt.getAttribute("aria-controls");
            if (!Rt)
              return;
            const cn = document.getElementById(Rt);
            if (!j(cn))
              return;
            const ln = Ge(cn)[0];
            qt(ln);
          }
        }), nt(at, "pointermove", (lt) => {
          if (!Pn(lt) || (jt(lt), lt.defaultPrevented))
            return;
          const z = lt.currentTarget;
          if (!j(z))
            return;
          nl(it.menu.get()) || qt(z);
          const dt = ct.get();
          !L.get() && !dt && !Ce(z) && ct.set(window.setTimeout(() => {
            L.update(() => (ot.set(z), !0)), Mr(ct);
          }, 100));
        }), nt(at, "pointerleave", (lt) => {
          if (!Pn(lt))
            return;
          Mr(ct);
          const z = document.getElementById(it.menu.get()), dt = z == null ? void 0 : z.getBoundingClientRect();
          if (dt) {
            const Ot = z == null ? void 0 : z.dataset.side, Rt = Ot === "right", cn = Rt ? -5 : 5, ln = dt[Rt ? "left" : "right"], Yn = dt[Rt ? "right" : "left"];
            I.set({
              area: [
                // Apply a bleed on clientX to ensure that our exit point is
                // consistently within polygon bounds
                { x: lt.clientX + cn, y: lt.clientY },
                { x: ln, y: dt.top },
                { x: Yn, y: dt.top },
                { x: Yn, y: dt.bottom },
                { x: ln, y: dt.bottom }
              ],
              side: Ot
            }), window.clearTimeout(tt.get()), tt.set(window.setTimeout(() => {
              I.set(null);
            }, 300));
          } else {
            if (qe(lt), lt.defaultPrevented)
              return;
            I.set(null);
          }
        }), nt(at, "focusout", (lt) => {
          const z = lt.currentTarget;
          if (!j(z))
            return;
          dn(z);
          const dt = lt.relatedTarget;
          if (!j(dt))
            return;
          const Ot = z.getAttribute("aria-controls");
          if (!Ot)
            return;
          const Rt = document.getElementById(Ot);
          Rt && !Rt.contains(dt) && L.set(!1);
        }), nt(at, "focusin", (lt) => {
          Te(lt);
        }));
        return {
          destroy() {
            Mt(), Qt();
          }
        };
      }
    }), Rs = At(e("subarrow"), {
      stores: Zt,
      returned: (at) => ({
        "data-arrow": !0,
        style: Ie({
          position: "absolute",
          width: `var(--arrow-size, ${at}px)`,
          height: `var(--arrow-size, ${at}px)`
        })
      })
    });
    return Wt([g], ([at]) => {
      at || (ot.set(null), L.set(!1));
    }), Wt([I], ([at]) => {
      !Me || at || window.clearTimeout(tt.get());
    }), Wt([L], ([at]) => {
      if (Me && (at && k.get() && ke(1).then(() => {
        const Mt = document.getElementById(it.menu.get());
        if (!Mt)
          return;
        const Qt = Ge(Mt);
        Qt.length && qt(Qt[0]);
      }), !at)) {
        const Mt = H.get(), Qt = document.getElementById(it.trigger.get());
        if (Mt && ke(1).then(() => {
          const lt = document.getElementById(it.menu.get());
          lt && lt.contains(Mt) && dn(Mt);
        }), !Qt || document.activeElement === Qt)
          return;
        dn(Qt);
      }
    }), {
      ids: it,
      elements: {
        subTrigger: Ss,
        subMenu: Ps,
        subArrow: Rs
      },
      states: {
        subOpen: L
      },
      options: X
    };
  };
  Go(() => {
    const T = document.getElementById(p.trigger.get());
    j(T) && g.get() && y.set(T);
    const D = [], F = () => k.set(!1), L = () => {
      k.set(!0), D.push(Ut(Ht(document, "pointerdown", F, { capture: !0, once: !0 }), Ht(document, "pointermove", F, { capture: !0, once: !0 })));
    }, X = (Et) => {
      if (Et.key === vt.ESCAPE && i.get()) {
        g.set(!1);
        return;
      }
    };
    return D.push(Ht(document, "keydown", L, { capture: !0 })), D.push(Ht(document, "keydown", X)), () => {
      D.forEach((Et) => Et());
    };
  }), Wt([g, H], ([T, D]) => {
    !T && D && dn(D);
  }), Wt([g], ([T]) => {
    if (Me && !T) {
      const D = y.get();
      if (!D)
        return;
      const F = v.get();
      !T && D && Zr({ prop: F, defaultEl: D });
    }
  }), Wt([g, r], ([T, D]) => {
    if (!Me)
      return;
    const F = [];
    return T && D && F.push(ts()), ke(1).then(() => {
      const L = document.getElementById(p.menu.get());
      if (L && T && k.get()) {
        if (d.get()) {
          qt(L);
          return;
        }
        const X = Ge(L);
        if (!X.length)
          return;
        qt(X[0]);
      }
    }), () => {
      F.forEach((L) => L());
    };
  }), Wt(g, (T) => {
    if (!Me)
      return;
    const D = () => k.set(!1), F = (L) => {
      if (k.set(!0), L.key === vt.ESCAPE && T && i.get()) {
        g.set(!1);
        return;
      }
    };
    return Ut(Ht(document, "pointerdown", D, { capture: !0, once: !0 }), Ht(document, "pointermove", D, { capture: !0, once: !0 }), Ht(document, "keydown", F, { capture: !0 }));
  });
  function $(T) {
    g.update((D) => {
      const F = !D;
      return F && (_.set(Cu(T)), w.set(Ou(T)), y.set(T)), F;
    });
  }
  function Te(T) {
    const D = T.currentTarget;
    if (!j(D))
      return;
    const F = H.get();
    F && dn(F), su(D), H.set(D);
  }
  function xe(T) {
    const D = T.currentTarget;
    j(D) && dn(D);
  }
  function jt(T) {
    He(T) && T.preventDefault();
  }
  function Re(T) {
    if (He(T))
      return;
    const D = T.target;
    if (!j(D))
      return;
    const F = ko(D);
    F && qt(F);
  }
  function qe(T) {
    He(T) && T.preventDefault();
  }
  function Vt(T) {
    if (!Pn(T))
      return;
    const D = T.target, F = T.currentTarget;
    if (!j(F) || !j(D))
      return;
    const L = B.get(), X = L !== T.clientX;
    if (F.contains(D) && X) {
      const Et = T.clientX > L ? "right" : "left";
      K.set(Et), B.set(T.clientX);
    }
  }
  function De(T, D = null) {
    if (!Pn(T) || (jt(T), T.defaultPrevented))
      return;
    if (D) {
      qt(D);
      return;
    }
    const F = T.currentTarget;
    j(F) && qt(F);
  }
  function Ue(T) {
    Pn(T) && Re(T);
  }
  function Xt(T) {
    if (G.get().length > 0 && T.key === vt.SPACE) {
      T.preventDefault();
      return;
    }
    if (fr.includes(T.key)) {
      T.preventDefault();
      const L = T.currentTarget;
      if (!j(L))
        return;
      L.click();
    }
  }
  function un(T) {
    return T === "indeterminate";
  }
  function Rr(T) {
    return un(T) ? "indeterminate" : T ? "checked" : "unchecked";
  }
  function He(T) {
    return Y.get()(T);
  }
  function ko(T) {
    const D = T.closest('[role="menu"]');
    return j(D) ? D : null;
  }
  return {
    elements: {
      trigger: x,
      menu: O,
      overlay: M,
      item: P,
      group: Q,
      groupLabel: st,
      arrow: R,
      separator: U
    },
    builders: {
      createCheckboxItem: Ct,
      createSubmenu: $t,
      createMenuRadioGroup: Pt
    },
    states: {
      open: g
    },
    helpers: {
      handleTypeaheadSearch: E
    },
    ids: p,
    options: t.rootOptions
  };
}
function fi(t, e, n) {
  if (t.shiftKey) {
    const r = n.get();
    r && (t.preventDefault(), ke(1).then(() => r.focus()), n.set(null));
  } else {
    const r = e.get();
    r && (t.preventDefault(), ke(1).then(() => r.focus()), e.set(null));
  }
}
function Ge(t) {
  return Array.from(t.querySelectorAll(`[data-melt-menu-id="${t.id}"]`)).filter((e) => j(e));
}
function tr(t) {
  !t || !Ce(t) || (t.setAttribute("data-disabled", ""), t.setAttribute("aria-disabled", "true"));
}
function Mr(t) {
  if (!Me)
    return;
  const e = t.get();
  e && (window.clearTimeout(e), t.set(null));
}
function Pn(t) {
  return t.pointerType === "mouse";
}
function Sn(t, e) {
  if (!t)
    return;
  const n = t.closest(`${e()}, ${e("submenu")}`);
  j(n) && t.setAttribute("data-melt-menu-id", n.id);
}
function di(t, e) {
  t.preventDefault();
  const n = document.activeElement, r = t.currentTarget;
  if (!j(n) || !j(r))
    return;
  const o = Ge(r);
  if (!o.length)
    return;
  const s = o.filter((u) => !(u.hasAttribute("data-disabled") || u.getAttribute("disabled") === "true")), i = s.indexOf(n);
  let a;
  switch (t.key) {
    case vt.ARROW_DOWN:
      e ? a = i < s.length - 1 ? i + 1 : 0 : a = i < s.length - 1 ? i + 1 : i;
      break;
    case vt.ARROW_UP:
      e ? a = i > 0 ? i - 1 : s.length - 1 : a = i < 0 ? s.length - 1 : i > 0 ? i - 1 : 0;
      break;
    case vt.HOME:
      a = 0;
      break;
    case vt.END:
      a = s.length - 1;
      break;
    default:
      return;
  }
  qt(s[a]);
}
function tl(t, e) {
  if (!e)
    return !1;
  const n = { x: t.clientX, y: t.clientY };
  return el(n, e);
}
function el(t, e) {
  const { x: n, y: r } = t;
  let o = !1;
  for (let s = 0, i = e.length - 1; s < e.length; i = s++) {
    const a = e[s].x, u = e[s].y, c = e[i].x, l = e[i].y;
    u > r != l > r && n < (c - a) * (r - u) / (l - u) + a && (o = !o);
  }
  return o;
}
function nl(t) {
  const e = document.activeElement;
  if (!j(e))
    return !1;
  const n = e.closest(`[data-id="${t}"]`);
  return j(n);
}
function rl(t) {
  return t ? "open" : "closed";
}
const ol = {
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
  ...Or(ol, "isDateDisabled", "isDateUnavailable", "value", "locale", "disabled", "readonly", "minValue", "maxValue", "weekdayFormat")
});
const { name: Ye } = Xi("dialog"), il = {
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
}, sl = ["content", "title", "description"];
function al(t) {
  const e = { ...il, ...t }, n = tn(Or(e, "ids")), { preventScroll: r, closeOnEscape: o, closeOnOutsideClick: s, role: i, portal: a, forceVisible: u, openFocus: c, closeFocus: l, onOutsideClick: f } = n, v = St.writable(null), d = tn({
    ...Gr(sl),
    ...e.ids
  }), h = e.open ?? kt(e.defaultOpen), m = Dn(h, e == null ? void 0 : e.onOpenChange), g = ce([m, u], ([E, p]) => E || p);
  let y = gt;
  function _(E) {
    const p = E.currentTarget, b = E.currentTarget;
    !j(p) || !j(b) || (m.set(!0), v.set(b));
  }
  function w() {
    m.set(!1), Zr({
      prop: l.get(),
      defaultEl: v.get()
    });
  }
  const k = At(Ye("trigger"), {
    stores: [m],
    returned: ([E]) => ({
      "aria-haspopup": "dialog",
      "aria-expanded": E,
      type: "button"
    }),
    action: (E) => ({
      destroy: Ut(nt(E, "click", (b) => {
        _(b);
      }), nt(E, "keydown", (b) => {
        b.key !== vt.ENTER && b.key !== vt.SPACE || (b.preventDefault(), _(b));
      }))
    })
  }), B = At(Ye("overlay"), {
    stores: [g, m],
    returned: ([E, p]) => ({
      hidden: E ? void 0 : !0,
      tabindex: -1,
      style: Ie({
        display: E ? void 0 : "none"
      }),
      "aria-hidden": !0,
      "data-state": p ? "open" : "closed"
    }),
    action: (E) => {
      let p = gt;
      if (o.get()) {
        const b = dr(E, {
          handler: () => {
            w();
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
  }), I = At(Ye("content"), {
    stores: [g, d.content, d.description, d.title, m],
    returned: ([E, p, b, O, x]) => ({
      id: p,
      role: i.get(),
      "aria-describedby": b,
      "aria-labelledby": O,
      "aria-modal": E ? "true" : void 0,
      "data-state": x ? "open" : "closed",
      tabindex: -1,
      hidden: E ? void 0 : !0,
      style: Ie({
        display: E ? void 0 : "none"
      })
    }),
    action: (E) => {
      let p = gt, b = gt;
      const O = Ut(Wt([m, s, o], ([x, R, M]) => {
        if (!x)
          return;
        const P = ps({
          immediate: !1,
          escapeDeactivates: M,
          clickOutsideDeactivates: R,
          allowOutsideClick: !0,
          returnFocusOnDeactivate: !1,
          fallbackFocus: E
        });
        p = P.activate, b = P.deactivate;
        const Q = P.useFocusTrap(E);
        return Q && Q.destroy ? Q.destroy : P.deactivate;
      }), Wt([s, m], ([x, R]) => bs(E, {
        open: R,
        closeOnInteractOutside: x,
        onClose() {
          w();
        },
        shouldCloseOnInteractOutside(M) {
          var P;
          return (P = f.get()) == null || P(M), !M.defaultPrevented;
        }
      }).destroy), Wt([o], ([x]) => x ? dr(E, { handler: w }).destroy : gt), Wt([g], ([x]) => {
        Qe().then(() => {
          x ? p() : b();
        });
      }));
      return {
        destroy: () => {
          y(), O();
        }
      };
    }
  }), K = At(Ye("portalled"), {
    stores: a,
    returned: (E) => ({
      "data-portal": Gi(E)
    }),
    action: (E) => {
      const p = Wt([a], ([b]) => {
        if (b === null)
          return gt;
        const O = Xr(E, b);
        return O === null ? gt : Co(E, O).destroy;
      });
      return {
        destroy() {
          p();
        }
      };
    }
  }), H = At(Ye("title"), {
    stores: [d.title],
    returned: ([E]) => ({
      id: E
    })
  }), Y = At(Ye("description"), {
    stores: [d.description],
    returned: ([E]) => ({
      id: E
    })
  }), G = At(Ye("close"), {
    returned: () => ({
      type: "button"
    }),
    action: (E) => ({
      destroy: Ut(nt(E, "click", () => {
        w();
      }), nt(E, "keydown", (b) => {
        b.key !== vt.SPACE && b.key !== vt.ENTER || (b.preventDefault(), w());
      }))
    })
  });
  return Wt([m, r], ([E, p]) => {
    if (Me) {
      if (p && E && (y = ts()), E) {
        const b = document.getElementById(d.content.get());
        Zr({ prop: c.get(), defaultEl: b });
      }
      return () => {
        u.get() || y();
      };
    }
  }), {
    ids: d,
    elements: {
      content: I,
      trigger: k,
      title: H,
      description: Y,
      overlay: B,
      close: G,
      portalled: K
    },
    states: {
      open: m
    },
    options: n
  };
}
const ul = {
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
function cl(t) {
  const e = { ...ul, ...t }, n = tn(Or(e, "ids")), r = e.open ?? kt(e.defaultOpen), o = Dn(r, e == null ? void 0 : e.onOpenChange), s = St(kt(null)), i = St(kt(null)), a = St(kt(null)), { elements: u, builders: c, ids: l, states: f, options: v } = $c({
    rootOptions: n,
    rootOpen: o,
    rootActiveTrigger: St(s),
    nextFocusable: St(i),
    prevFocusable: St(a),
    selector: "dropdown-menu",
    removeScroll: !0,
    ids: e.ids
  });
  return {
    ids: l,
    elements: u,
    states: f,
    builders: c,
    options: v
  };
}
const ll = {
  orientation: "horizontal",
  decorative: !1
}, fl = (t) => {
  const e = { ...ll, ...t }, n = tn(e), { orientation: r, decorative: o } = n;
  return {
    elements: {
      root: At("separator", {
        stores: [r, o],
        returned: ([i, a]) => ({
          role: a ? "none" : "separator",
          "aria-orientation": i === "vertical" ? i : void 0,
          "aria-hidden": a,
          "data-orientation": i
        })
      })
    },
    options: n
  };
};
function _s(t, e) {
  const n = {};
  return e.forEach((r) => {
    n[r] = {
      [`data-${t}-${r}`]: ""
    };
  }), (r) => n[r];
}
function dl(t) {
  return t ? { "aria-disabled": "true", "data-disabled": "" } : { "aria-disabled": void 0, "data-disabled": void 0 };
}
function kr() {
  const t = cu();
  return (e) => {
    const { originalEvent: n } = e.detail, { cancelable: r } = e, o = n.type;
    t(o, { originalEvent: n, currentTarget: n.currentTarget }, { cancelable: r }) || e.preventDefault();
  };
}
function ws(t) {
  const e = {};
  for (const n in t) {
    const r = t[n];
    r !== void 0 && (e[n] = r);
  }
  return e;
}
function Es(t) {
  return function(e, n) {
    if (n === void 0)
      return;
    const r = t[e];
    r && r.set(n);
  };
}
function vl(t) {
  return (e = {}) => ml(t, e);
}
function ml(t, e) {
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
  t.update((o) => ({
    ...o,
    placement: gl(r.side, r.align),
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
function gl(t, e) {
  return e === "center" ? t : `${t}-${e}`;
}
function Ts() {
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
function Pr() {
  const { NAME: t } = Ts();
  return Di(t);
}
function hl(t) {
  const { NAME: e, PARTS: n } = Ts(), r = _s("menu", n), o = {
    ...cl({ ...ws(t), forceVisible: !0 }),
    getAttrs: r
  };
  return Fi(e, o), {
    ...o,
    updateOption: Es(o.options)
  };
}
function pl(t) {
  const n = { ...{
    side: "bottom",
    align: "center"
  }, ...t }, { options: { positioning: r } } = Pr();
  vl(r)(n);
}
function bl(t, e) {
  const n = Yt(e, ["children", "$$slots", "$$events"]), r = Yt(n, ["href", "asChild", "disabled", "el"]);
  Tt(e, !1);
  const o = {};
  Ee(o);
  const s = () => ne(v, "$item", o), i = /* @__PURE__ */ Jt(), a = /* @__PURE__ */ Jt();
  let u = S(e, "href", 8, () => {
  }), c = S(e, "asChild", 0, !1), l = S(e, "disabled", 0, !1), f = S(e, "el", 12, () => {
  });
  const { elements: { item: v }, getAttrs: d } = Pr(), h = kr();
  Z(() => s(), () => {
    mt(i, s());
  }), Z(() => rt(l()), () => {
    mt(a, {
      ...d("item"),
      ...dl(l())
    });
  }), Z(() => (C(i), C(a)), () => {
    Object.assign(C(i), C(a));
  }), _e(), we();
  var m = W(), g = /* @__PURE__ */ N(m);
  ht(
    g,
    c,
    (y) => {
      var _ = W(), w = /* @__PURE__ */ N(_);
      _t(
        w,
        wt(e),
        {
          get builder() {
            return C(i);
          }
        }
      ), A(y, _);
    },
    (y) => {
      var _ = W(), w = /* @__PURE__ */ N(_);
      qi(w, () => u() ? "a" : "div", !1, (k, B) => {
        Ft(k, (Y) => f(Y), () => f());
        let I;
        pt(() => I = Ui(
          k,
          I,
          {
            href: u(),
            ...C(i),
            ...r
          },
          ""
        )), Dt(k, (Y) => C(i).action(Y)), q("m-click", k, h, !1), q("m-focusin", k, h, !1), q("m-focusout", k, h, !1), q("m-keydown", k, h, !1), q("m-pointerdown", k, h, !1), q("m-pointerleave", k, h, !1), q("m-pointermove", k, h, !1), q("pointerenter", k, function(Y) {
          J.call(this, e, Y);
        });
        var K = W(), H = /* @__PURE__ */ N(K);
        _t(
          H,
          wt(e),
          {
            get builder() {
              return C(i);
            }
          }
        ), A(B, K);
      }), A(y, _);
    }
  ), A(t, m), xt();
}
function xs() {
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
function yl(t) {
  const { NAME: e, PARTS: n } = xs(), r = _s(e, n), o = {
    ...al({ ...ws(t), role: "dialog", forceVisible: !0 }),
    getAttrs: r
  };
  return Fi(e, o), {
    ...o,
    updateOption: Es(o.options)
  };
}
function zn() {
  const { NAME: t } = xs();
  return Di(t);
}
function _l(t, e) {
  Tt(e, !1);
  const n = {};
  Ee(n);
  const r = () => ne(g, "$idValues", n);
  let o = S(e, "preventScroll", 8, () => {
  }), s = S(e, "closeOnEscape", 8, () => {
  }), i = S(e, "closeOnOutsideClick", 8, () => {
  }), a = S(e, "portal", 8, () => {
  }), u = S(e, "open", 12, () => {
  }), c = S(e, "onOpenChange", 8, () => {
  }), l = S(e, "openFocus", 8, () => {
  }), f = S(e, "closeFocus", 8, () => {
  }), v = S(e, "onOutsideClick", 8, () => {
  });
  const {
    states: { open: d },
    updateOption: h,
    ids: m
  } = yl({
    closeOnEscape: s(),
    preventScroll: o(),
    closeOnOutsideClick: i(),
    portal: a(),
    forceVisible: !0,
    defaultOpen: u(),
    openFocus: l(),
    closeFocus: f(),
    onOutsideClick: v(),
    onOpenChange: ({ next: w }) => {
      var k;
      return u() !== w && ((k = c()) == null || k(w), u(w)), w;
    }
  }), g = ce([m.content, m.description, m.title], ([w, k, B]) => ({
    content: w,
    description: k,
    title: B
  }));
  Z(() => rt(u()), () => {
    u() !== void 0 && d.set(u());
  }), Z(() => rt(o()), () => {
    h("preventScroll", o());
  }), Z(() => rt(s()), () => {
    h("closeOnEscape", s());
  }), Z(
    () => rt(i()),
    () => {
      h("closeOnOutsideClick", i());
    }
  ), Z(() => rt(a()), () => {
    h("portal", a());
  }), Z(() => rt(l()), () => {
    h("openFocus", l());
  }), Z(() => rt(f()), () => {
    h("closeFocus", f());
  }), Z(() => rt(v()), () => {
    h("onOutsideClick", v());
  }), _e(), we();
  var y = W(), _ = /* @__PURE__ */ N(y);
  _t(
    _,
    wt(e),
    {
      get ids() {
        return r();
      }
    }
  ), A(t, y), xt();
}
function wl(t, e) {
  const n = Yt(e, ["children", "$$slots", "$$events"]), r = Yt(n, ["level", "asChild", "id", "el"]);
  Tt(e, !1);
  const o = {};
  Ee(o);
  const s = () => ne(f, "$title", o), i = /* @__PURE__ */ Jt();
  let a = S(e, "level", 0, "h2"), u = S(e, "asChild", 0, !1), c = S(e, "id", 8, () => {
  }), l = S(e, "el", 12, () => {
  });
  const { elements: { title: f }, ids: v, getAttrs: d } = zn(), h = d("title");
  Z(() => rt(c()), () => {
    c() && v.title.set(c());
  }), Z(() => s(), () => {
    mt(i, s());
  }), Z(() => C(i), () => {
    Object.assign(C(i), h);
  }), _e(), we();
  var m = W(), g = /* @__PURE__ */ N(m);
  ht(
    g,
    u,
    (y) => {
      var _ = W(), w = /* @__PURE__ */ N(_);
      _t(
        w,
        wt(e),
        {
          get builder() {
            return C(i);
          }
        }
      ), A(y, _);
    },
    (y) => {
      var _ = W(), w = /* @__PURE__ */ N(_);
      qi(w, a, !1, (k, B) => {
        Ft(k, (Y) => l(Y), () => l());
        let I;
        pt(() => I = Ui(k, I, { ...C(i), ...r }, "")), Dt(k, (Y) => C(i).action(Y));
        var K = W(), H = /* @__PURE__ */ N(K);
        _t(
          H,
          wt(e),
          {
            get builder() {
              return C(i);
            }
          }
        ), A(B, K);
      }), A(y, _);
    }
  ), A(t, m), xt();
}
var El = /* @__PURE__ */ et("<button><!></button>");
function Cs(t, e) {
  const n = Yt(e, ["children", "$$slots", "$$events"]), r = Yt(n, ["asChild", "el"]);
  Tt(e, !1);
  const o = {};
  Ee(o);
  const s = () => ne(c, "$close", o), i = /* @__PURE__ */ Jt();
  let a = S(e, "asChild", 0, !1), u = S(e, "el", 12, () => {
  });
  const { elements: { close: c }, getAttrs: l } = zn(), f = kr(), v = l("close");
  Z(() => s(), () => {
    mt(i, s());
  }), Z(() => C(i), () => {
    Object.assign(C(i), v);
  }), _e(), we();
  var d = W(), h = /* @__PURE__ */ N(d);
  ht(
    h,
    a,
    (m) => {
      var g = W(), y = /* @__PURE__ */ N(g);
      _t(
        y,
        wt(e),
        {
          get builder() {
            return C(i);
          }
        }
      ), A(m, g);
    },
    (m) => {
      var g = El();
      Ft(g, (w) => u(w), () => u());
      let y;
      var _ = /* @__PURE__ */ ut(g);
      _t(
        _,
        wt(e),
        {
          get builder() {
            return C(i);
          }
        }
      ), pt(() => y = It(
        g,
        y,
        {
          ...C(i),
          type: "button",
          ...r
        },
        !0,
        ""
      )), Dt(g, (w) => C(i).action(w)), q("m-click", g, f, !1), q("m-keydown", g, f, !1), A(m, g);
    }
  ), A(t, d), xt();
}
var Tl = /* @__PURE__ */ et("<div><!></div>");
function xl(t, e) {
  const n = Yt(e, ["children", "$$slots", "$$events"]), r = Yt(n, ["asChild", "el"]);
  Tt(e, !1);
  const o = {};
  Ee(o);
  const s = () => ne(c, "$portalled", o), i = /* @__PURE__ */ Jt();
  let a = S(e, "asChild", 0, !1), u = S(e, "el", 12, () => {
  });
  const { elements: { portalled: c }, getAttrs: l } = zn(), f = l("portal");
  Z(() => s(), () => {
    mt(i, s());
  }), Z(() => C(i), () => {
    Object.assign(C(i), f);
  }), _e(), we();
  var v = W(), d = /* @__PURE__ */ N(v);
  ht(
    d,
    a,
    (h) => {
      var m = W(), g = /* @__PURE__ */ N(m);
      _t(
        g,
        wt(e),
        {
          get builder() {
            return C(i);
          }
        }
      ), A(h, m);
    },
    (h) => {
      var m = Tl();
      Ft(m, (_) => u(_), () => u());
      let g;
      var y = /* @__PURE__ */ ut(m);
      _t(
        y,
        wt(e),
        {
          get builder() {
            return C(i);
          }
        }
      ), pt(() => g = It(m, g, { ...C(i), ...r }, !0, "")), Dt(m, (_) => C(i).action(_)), A(h, m);
    }
  ), A(t, v), xt();
}
var Cl = /* @__PURE__ */ et("<div><!></div>"), Ol = /* @__PURE__ */ et("<div><!></div>"), Al = /* @__PURE__ */ et("<div><!></div>"), kl = /* @__PURE__ */ et("<div><!></div>"), Pl = /* @__PURE__ */ et("<div><!></div>");
function Sl(t, e) {
  const n = Yt(e, ["children", "$$slots", "$$events"]), r = Yt(n, [
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
  Tt(e, !1);
  const o = {};
  Ee(o);
  const s = () => ne(y, "$content", o), i = () => ne(_, "$open", o), a = /* @__PURE__ */ Jt();
  let u = S(e, "transition", 8, () => {
  }), c = S(e, "transitionConfig", 8, () => {
  }), l = S(e, "inTransition", 8, () => {
  }), f = S(e, "inTransitionConfig", 8, () => {
  }), v = S(e, "outTransition", 8, () => {
  }), d = S(e, "outTransitionConfig", 8, () => {
  }), h = S(e, "asChild", 0, !1), m = S(e, "id", 8, () => {
  }), g = S(e, "el", 12, () => {
  });
  const {
    elements: { content: y },
    states: { open: _ },
    ids: w,
    getAttrs: k
  } = zn(), B = k("content");
  Z(() => rt(m()), () => {
    m() && w.content.set(m());
  }), Z(() => s(), () => {
    mt(a, s());
  }), Z(() => C(a), () => {
    Object.assign(C(a), B);
  }), _e(), we();
  var I = W(), K = /* @__PURE__ */ N(I);
  ht(
    K,
    () => h() && i(),
    (H) => {
      var Y = W(), G = /* @__PURE__ */ N(Y);
      _t(
        G,
        wt(e),
        {
          get builder() {
            return C(a);
          }
        }
      ), A(H, Y);
    },
    (H) => {
      var Y = W(), G = /* @__PURE__ */ N(Y);
      ht(
        G,
        () => u() && i(),
        (E) => {
          var p = Cl();
          Ft(p, (x) => g(x), () => g()), Gt(3, p, u, c);
          let b;
          var O = /* @__PURE__ */ ut(p);
          _t(
            O,
            wt(e),
            {
              get builder() {
                return C(a);
              }
            }
          ), pt(() => b = It(p, b, { ...C(a), ...r }, !0, "")), Dt(p, (x) => C(a).action(x)), q("pointerdown", p, function(x) {
            J.call(this, e, x);
          }), q("pointermove", p, function(x) {
            J.call(this, e, x);
          }), q("pointerup", p, function(x) {
            J.call(this, e, x);
          }), q("touchend", p, function(x) {
            J.call(this, e, x);
          }), q("touchstart", p, function(x) {
            J.call(this, e, x);
          }), q("touchcancel", p, function(x) {
            J.call(this, e, x);
          }), q("touchmove", p, function(x) {
            J.call(this, e, x);
          }), A(E, p);
        },
        (E) => {
          var p = W(), b = /* @__PURE__ */ N(p);
          ht(
            b,
            () => l() && v() && i(),
            (O) => {
              var x = Ol();
              Ft(x, (P) => g(P), () => g()), Gt(1, x, l, f), Gt(2, x, v, d);
              let R;
              var M = /* @__PURE__ */ ut(x);
              _t(
                M,
                wt(e),
                {
                  get builder() {
                    return C(a);
                  }
                }
              ), pt(() => R = It(x, R, { ...C(a), ...r }, !0, "")), Dt(x, (P) => C(a).action(P)), q("pointerdown", x, function(P) {
                J.call(this, e, P);
              }), q("pointermove", x, function(P) {
                J.call(this, e, P);
              }), q("pointerup", x, function(P) {
                J.call(this, e, P);
              }), q("touchend", x, function(P) {
                J.call(this, e, P);
              }), q("touchstart", x, function(P) {
                J.call(this, e, P);
              }), q("touchcancel", x, function(P) {
                J.call(this, e, P);
              }), q("touchmove", x, function(P) {
                J.call(this, e, P);
              }), A(O, x);
            },
            (O) => {
              var x = W(), R = /* @__PURE__ */ N(x);
              ht(
                R,
                () => l() && i(),
                (M) => {
                  var P = Al();
                  Ft(P, (V) => g(V), () => g()), Gt(1, P, l, f);
                  let Q;
                  var st = /* @__PURE__ */ ut(P);
                  _t(
                    st,
                    wt(e),
                    {
                      get builder() {
                        return C(a);
                      }
                    }
                  ), pt(() => Q = It(P, Q, { ...C(a), ...r }, !0, "")), Dt(P, (V) => C(a).action(V)), q("pointerdown", P, function(V) {
                    J.call(this, e, V);
                  }), q("pointermove", P, function(V) {
                    J.call(this, e, V);
                  }), q("pointerup", P, function(V) {
                    J.call(this, e, V);
                  }), q("touchend", P, function(V) {
                    J.call(this, e, V);
                  }), q("touchstart", P, function(V) {
                    J.call(this, e, V);
                  }), q("touchcancel", P, function(V) {
                    J.call(this, e, V);
                  }), q("touchmove", P, function(V) {
                    J.call(this, e, V);
                  }), A(M, P);
                },
                (M) => {
                  var P = W(), Q = /* @__PURE__ */ N(P);
                  ht(
                    Q,
                    () => v() && i(),
                    (st) => {
                      var V = kl();
                      Ft(V, (U) => g(U), () => g()), Gt(2, V, v, d);
                      let Ct;
                      var Pt = /* @__PURE__ */ ut(V);
                      _t(
                        Pt,
                        wt(e),
                        {
                          get builder() {
                            return C(a);
                          }
                        }
                      ), pt(() => Ct = It(V, Ct, { ...C(a), ...r }, !0, "")), Dt(V, (U) => C(a).action(U)), q("pointerdown", V, function(U) {
                        J.call(this, e, U);
                      }), q("pointermove", V, function(U) {
                        J.call(this, e, U);
                      }), q("pointerup", V, function(U) {
                        J.call(this, e, U);
                      }), q("touchend", V, function(U) {
                        J.call(this, e, U);
                      }), q("touchstart", V, function(U) {
                        J.call(this, e, U);
                      }), q("touchcancel", V, function(U) {
                        J.call(this, e, U);
                      }), q("touchmove", V, function(U) {
                        J.call(this, e, U);
                      }), A(st, V);
                    },
                    (st) => {
                      var V = W(), Ct = /* @__PURE__ */ N(V);
                      ht(
                        Ct,
                        i,
                        (Pt) => {
                          var U = Pl();
                          Ft(U, ($) => g($), () => g());
                          let re;
                          var $t = /* @__PURE__ */ ut(U);
                          _t(
                            $t,
                            wt(e),
                            {
                              get builder() {
                                return C(a);
                              }
                            }
                          ), pt(() => re = It(U, re, { ...C(a), ...r }, !0, "")), Dt(U, ($) => C(a).action($)), q("pointerdown", U, function($) {
                            J.call(this, e, $);
                          }), q("pointermove", U, function($) {
                            J.call(this, e, $);
                          }), q("pointerup", U, function($) {
                            J.call(this, e, $);
                          }), q("touchend", U, function($) {
                            J.call(this, e, $);
                          }), q("touchstart", U, function($) {
                            J.call(this, e, $);
                          }), q("touchcancel", U, function($) {
                            J.call(this, e, $);
                          }), q("touchmove", U, function($) {
                            J.call(this, e, $);
                          }), A(Pt, U);
                        },
                        null,
                        !0
                      ), A(st, V);
                    },
                    !0
                  ), A(M, P);
                },
                !0
              ), A(O, x);
            },
            !0
          ), A(E, p);
        },
        !0
      ), A(H, Y);
    }
  ), A(t, I), xt();
}
var Rl = /* @__PURE__ */ et("<div></div>"), Dl = /* @__PURE__ */ et("<div></div>"), Fl = /* @__PURE__ */ et("<div></div>"), Nl = /* @__PURE__ */ et("<div></div>"), Il = /* @__PURE__ */ et("<div></div>");
function Ml(t, e) {
  const n = Yt(e, ["children", "$$slots", "$$events"]), r = Yt(n, [
    "transition",
    "transitionConfig",
    "inTransition",
    "inTransitionConfig",
    "outTransition",
    "outTransitionConfig",
    "asChild",
    "el"
  ]);
  Tt(e, !1);
  const o = {};
  Ee(o);
  const s = () => ne(g, "$overlay", o), i = () => ne(y, "$open", o), a = /* @__PURE__ */ Jt();
  let u = S(e, "transition", 8, () => {
  }), c = S(e, "transitionConfig", 8, () => {
  }), l = S(e, "inTransition", 8, () => {
  }), f = S(e, "inTransitionConfig", 8, () => {
  }), v = S(e, "outTransition", 8, () => {
  }), d = S(e, "outTransitionConfig", 8, () => {
  }), h = S(e, "asChild", 0, !1), m = S(e, "el", 12, () => {
  });
  const {
    elements: { overlay: g },
    states: { open: y },
    getAttrs: _
  } = zn(), w = _("overlay");
  Z(() => s(), () => {
    mt(a, s());
  }), Z(() => C(a), () => {
    Object.assign(C(a), w);
  }), _e(), we();
  var k = W(), B = /* @__PURE__ */ N(k);
  ht(
    B,
    () => h() && i(),
    (I) => {
      var K = W(), H = /* @__PURE__ */ N(K);
      _t(
        H,
        wt(e),
        {
          get builder() {
            return C(a);
          }
        }
      ), A(I, K);
    },
    (I) => {
      var K = W(), H = /* @__PURE__ */ N(K);
      ht(
        H,
        () => u() && i(),
        (Y) => {
          var G = Rl();
          Ft(G, (p) => m(p), () => m()), Gt(3, G, u, c);
          let E;
          pt(() => E = It(G, E, { ...C(a), ...r }, !0, "")), q("mouseup", G, function(p) {
            J.call(this, e, p);
          }), Dt(G, (p) => C(a).action(p)), A(Y, G);
        },
        (Y) => {
          var G = W(), E = /* @__PURE__ */ N(G);
          ht(
            E,
            () => l() && v() && i(),
            (p) => {
              var b = Dl();
              Ft(b, (x) => m(x), () => m()), Gt(1, b, l, f), Gt(2, b, v, d);
              let O;
              pt(() => O = It(b, O, { ...C(a), ...r }, !0, "")), Dt(b, (x) => C(a).action(x)), q("mouseup", b, function(x) {
                J.call(this, e, x);
              }), A(p, b);
            },
            (p) => {
              var b = W(), O = /* @__PURE__ */ N(b);
              ht(
                O,
                () => l() && i(),
                (x) => {
                  var R = Fl();
                  Ft(R, (P) => m(P), () => m()), Gt(1, R, l, f);
                  let M;
                  pt(() => M = It(R, M, { ...C(a), ...r }, !0, "")), Dt(R, (P) => C(a).action(P)), q("mouseup", R, function(P) {
                    J.call(this, e, P);
                  }), A(x, R);
                },
                (x) => {
                  var R = W(), M = /* @__PURE__ */ N(R);
                  ht(
                    M,
                    () => v() && i(),
                    (P) => {
                      var Q = Nl();
                      Ft(Q, (V) => m(V), () => m()), Gt(2, Q, v, d);
                      let st;
                      pt(() => st = It(Q, st, { ...C(a), ...r }, !0, "")), Dt(Q, (V) => C(a).action(V)), q("mouseup", Q, function(V) {
                        J.call(this, e, V);
                      }), A(P, Q);
                    },
                    (P) => {
                      var Q = W(), st = /* @__PURE__ */ N(Q);
                      ht(
                        st,
                        i,
                        (V) => {
                          var Ct = Il();
                          Ft(Ct, (U) => m(U), () => m());
                          let Pt;
                          pt(() => Pt = It(Ct, Pt, { ...C(a), ...r }, !0, "")), Dt(Ct, (U) => C(a).action(U)), q("mouseup", Ct, function(U) {
                            J.call(this, e, U);
                          }), A(V, Ct);
                        },
                        null,
                        !0
                      ), A(P, Q);
                    },
                    !0
                  ), A(x, R);
                },
                !0
              ), A(p, b);
            },
            !0
          ), A(Y, G);
        },
        !0
      ), A(I, K);
    }
  ), A(t, k), xt();
}
function Ll(t, e) {
  Tt(e, !1);
  const n = {};
  Ee(n);
  const r = () => ne(k, "$idValues", n);
  let o = S(e, "closeOnOutsideClick", 8, () => {
  }), s = S(e, "closeOnEscape", 8, () => {
  }), i = S(e, "portal", 8, () => {
  }), a = S(e, "open", 12, () => {
  }), u = S(e, "onOpenChange", 8, () => {
  }), c = S(e, "preventScroll", 8, () => {
  }), l = S(e, "loop", 8, () => {
  }), f = S(e, "dir", 8, () => {
  }), v = S(e, "typeahead", 8, () => {
  }), d = S(e, "closeFocus", 8, () => {
  }), h = S(e, "disableFocusFirstItem", 8, () => {
  }), m = S(e, "closeOnItemClick", 8, () => {
  }), g = S(e, "onOutsideClick", 8, () => {
  });
  const {
    states: { open: y },
    updateOption: _,
    ids: w
  } = hl({
    closeOnOutsideClick: o(),
    closeOnEscape: s(),
    portal: i(),
    forceVisible: !0,
    defaultOpen: a(),
    preventScroll: c(),
    loop: l(),
    dir: f(),
    typeahead: v(),
    closeFocus: d(),
    disableFocusFirstItem: h(),
    closeOnItemClick: m(),
    onOutsideClick: g(),
    onOpenChange: ({ next: K }) => {
      var H;
      return a() !== K && ((H = u()) == null || H(K), a(K)), K;
    }
  }), k = ce([w.menu, w.trigger], ([K, H]) => ({ menu: K, trigger: H }));
  Z(() => rt(a()), () => {
    a() !== void 0 && y.set(a());
  }), Z(
    () => rt(o()),
    () => {
      _("closeOnOutsideClick", o());
    }
  ), Z(() => rt(s()), () => {
    _("closeOnEscape", s());
  }), Z(() => rt(i()), () => {
    _("portal", i());
  }), Z(() => rt(c()), () => {
    _("preventScroll", c());
  }), Z(() => rt(l()), () => {
    _("loop", l());
  }), Z(() => rt(f()), () => {
    _("dir", f());
  }), Z(() => rt(d()), () => {
    _("closeFocus", d());
  }), Z(
    () => rt(h()),
    () => {
      _("disableFocusFirstItem", h());
    }
  ), Z(() => rt(v()), () => {
    _("typeahead", v());
  }), Z(() => rt(m()), () => {
    _("closeOnItemClick", m());
  }), Z(() => rt(g()), () => {
    _("onOutsideClick", g());
  }), _e(), we();
  var B = W(), I = /* @__PURE__ */ N(B);
  _t(
    I,
    wt(e),
    {
      get ids() {
        return r();
      }
    }
  ), A(t, B), xt();
}
var Bl = /* @__PURE__ */ et("<div><!></div>"), Kl = /* @__PURE__ */ et("<div><!></div>"), jl = /* @__PURE__ */ et("<div><!></div>"), Wl = /* @__PURE__ */ et("<div><!></div>"), Vl = /* @__PURE__ */ et("<div><!></div>");
function ql(t, e) {
  const n = Yt(e, ["children", "$$slots", "$$events"]), r = Yt(n, [
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
  Tt(e, !1);
  const o = {};
  Ee(o);
  const s = () => ne(p, "$menu", o), i = () => ne(b, "$open", o), a = /* @__PURE__ */ Jt();
  let u = S(e, "transition", 8, () => {
  }), c = S(e, "transitionConfig", 8, () => {
  }), l = S(e, "inTransition", 8, () => {
  }), f = S(e, "inTransitionConfig", 8, () => {
  }), v = S(e, "outTransition", 8, () => {
  }), d = S(e, "outTransitionConfig", 8, () => {
  }), h = S(e, "asChild", 0, !1), m = S(e, "id", 8, () => {
  }), g = S(e, "side", 0, "bottom"), y = S(e, "align", 0, "center"), _ = S(e, "sideOffset", 0, 0), w = S(e, "alignOffset", 0, 0), k = S(e, "collisionPadding", 0, 8), B = S(e, "avoidCollisions", 0, !0), I = S(e, "collisionBoundary", 8, () => {
  }), K = S(e, "sameWidth", 0, !1), H = S(e, "fitViewport", 0, !1), Y = S(e, "strategy", 0, "absolute"), G = S(e, "overlap", 0, !1), E = S(e, "el", 12, () => {
  });
  const {
    elements: { menu: p },
    states: { open: b },
    ids: O,
    getAttrs: x
  } = Pr(), R = kr(), M = x("content");
  Z(() => rt(m()), () => {
    m() && O.menu.set(m());
  }), Z(() => s(), () => {
    mt(a, s());
  }), Z(() => C(a), () => {
    Object.assign(C(a), M);
  }), Z(
    () => (i(), rt(g()), rt(y()), rt(_()), rt(w()), rt(k()), rt(B()), rt(I()), rt(K()), rt(H()), rt(Y()), rt(G())),
    () => {
      i() && pl({
        side: g(),
        align: y(),
        sideOffset: _(),
        alignOffset: w(),
        collisionPadding: k(),
        avoidCollisions: B(),
        collisionBoundary: I(),
        sameWidth: K(),
        fitViewport: H(),
        strategy: Y(),
        overlap: G()
      });
    }
  ), _e(), we();
  var P = W(), Q = /* @__PURE__ */ N(P);
  ht(
    Q,
    () => h() && i(),
    (st) => {
      var V = W(), Ct = /* @__PURE__ */ N(V);
      _t(
        Ct,
        wt(e),
        {
          get builder() {
            return C(a);
          }
        }
      ), A(st, V);
    },
    (st) => {
      var V = W(), Ct = /* @__PURE__ */ N(V);
      ht(
        Ct,
        () => u() && i(),
        (Pt) => {
          var U = Bl();
          Ft(U, ($) => E($), () => E()), Gt(3, U, u, c);
          let re;
          var $t = /* @__PURE__ */ ut(U);
          _t(
            $t,
            wt(e),
            {
              get builder() {
                return C(a);
              }
            }
          ), pt(() => re = It(U, re, { ...C(a), ...r }, !0, "")), Dt(U, ($) => C(a).action($)), q("m-keydown", U, R, !1), A(Pt, U);
        },
        (Pt) => {
          var U = W(), re = /* @__PURE__ */ N(U);
          ht(
            re,
            () => l() && v() && i(),
            ($t) => {
              var $ = Kl();
              Ft($, (jt) => E(jt), () => E()), Gt(1, $, l, f), Gt(2, $, v, d);
              let Te;
              var xe = /* @__PURE__ */ ut($);
              _t(
                xe,
                wt(e),
                {
                  get builder() {
                    return C(a);
                  }
                }
              ), pt(() => Te = It($, Te, { ...C(a), ...r }, !0, "")), Dt($, (jt) => C(a).action(jt)), q("m-keydown", $, R, !1), A($t, $);
            },
            ($t) => {
              var $ = W(), Te = /* @__PURE__ */ N($);
              ht(
                Te,
                () => l() && i(),
                (xe) => {
                  var jt = jl();
                  Ft(jt, (Vt) => E(Vt), () => E()), Gt(1, jt, l, f);
                  let Re;
                  var qe = /* @__PURE__ */ ut(jt);
                  _t(
                    qe,
                    wt(e),
                    {
                      get builder() {
                        return C(a);
                      }
                    }
                  ), pt(() => Re = It(jt, Re, { ...C(a), ...r }, !0, "")), Dt(jt, (Vt) => C(a).action(Vt)), q("m-keydown", jt, R, !1), A(xe, jt);
                },
                (xe) => {
                  var jt = W(), Re = /* @__PURE__ */ N(jt);
                  ht(
                    Re,
                    () => v() && i(),
                    (qe) => {
                      var Vt = Wl();
                      Ft(Vt, (Xt) => E(Xt), () => E()), Gt(2, Vt, v, d);
                      let De;
                      var Ue = /* @__PURE__ */ ut(Vt);
                      _t(
                        Ue,
                        wt(e),
                        {
                          get builder() {
                            return C(a);
                          }
                        }
                      ), pt(() => De = It(Vt, De, { ...C(a), ...r }, !0, "")), Dt(Vt, (Xt) => C(a).action(Xt)), q("m-keydown", Vt, R, !1), A(qe, Vt);
                    },
                    (qe) => {
                      var Vt = W(), De = /* @__PURE__ */ N(Vt);
                      ht(
                        De,
                        i,
                        (Ue) => {
                          var Xt = Vl();
                          Ft(Xt, (He) => E(He), () => E());
                          let un;
                          var Rr = /* @__PURE__ */ ut(Xt);
                          _t(
                            Rr,
                            wt(e),
                            {
                              get builder() {
                                return C(a);
                              }
                            }
                          ), pt(() => un = It(Xt, un, { ...C(a), ...r }, !0, "")), Dt(Xt, (He) => C(a).action(He)), q("m-keydown", Xt, R, !1), A(Ue, Xt);
                        },
                        null,
                        !0
                      ), A(qe, Vt);
                    },
                    !0
                  ), A(xe, jt);
                },
                !0
              ), A($t, $);
            },
            !0
          ), A(Pt, U);
        },
        !0
      ), A(st, V);
    }
  ), A(t, P), xt();
}
var Ul = /* @__PURE__ */ et("<button><!></button>");
function Hl(t, e) {
  const n = Yt(e, ["children", "$$slots", "$$events"]), r = Yt(n, ["asChild", "id", "el"]);
  Tt(e, !1);
  const o = {};
  Ee(o);
  const s = () => ne(l, "$trigger", o), i = /* @__PURE__ */ Jt();
  let a = S(e, "asChild", 0, !1), u = S(e, "id", 8, () => {
  }), c = S(e, "el", 12, () => {
  });
  const { elements: { trigger: l }, ids: f, getAttrs: v } = Pr(), d = kr(), h = v("trigger");
  Z(() => rt(u()), () => {
    u() && f.trigger.set(u());
  }), Z(() => s(), () => {
    mt(i, s());
  }), Z(() => C(i), () => {
    Object.assign(C(i), h);
  }), _e(), we();
  var m = W(), g = /* @__PURE__ */ N(m);
  ht(
    g,
    a,
    (y) => {
      var _ = W(), w = /* @__PURE__ */ N(_);
      _t(
        w,
        wt(e),
        {
          get builder() {
            return C(i);
          }
        }
      ), A(y, _);
    },
    (y) => {
      var _ = Ul();
      Ft(_, (B) => c(B), () => c());
      let w;
      var k = /* @__PURE__ */ ut(_);
      _t(
        k,
        wt(e),
        {
          get builder() {
            return C(i);
          }
        }
      ), pt(() => w = It(
        _,
        w,
        {
          ...C(i),
          type: "button",
          ...r
        },
        !0,
        ""
      )), Dt(_, (B) => C(i).action(B)), q("m-keydown", _, d, !1), q("m-pointerdown", _, d, !1), A(y, _);
    }
  ), A(t, m), xt();
}
var zl = /* @__PURE__ */ Ma('<svg role="img"><use></use></svg>');
const Yl = {
  "chevron-down": "chevron-down",
  "comment-lines": "comment-lines",
  close: "close",
  "copy-to-clipboard": "copy-to-clipboard"
};
function Sr(t, e) {
  const n = S(e, "class", 3, ""), r = S(e, "size", 3, 16);
  var o = zl(), s = /* @__PURE__ */ ut(o);
  pt(() => {
    qa(o, `gl-icon s${Je(r())} ${Je(n())}`), qn(s, "href", `/assets/icons-1563760c6022424ca5187159258484be0c106b044e5e5a1b4f0be7a10cd6c90f.svg#${Je(Yl[e.name])}`);
  }), A(t, o);
}
var Gl = /* @__PURE__ */ et('<span class="gl-button-text gl-w-full"><span class="gl-new-dropdown-button-text"><!></span> <!></span>'), Xl = /* @__PURE__ */ et("<div><!></div>");
function Zl(t, e) {
  Tt(e, !0);
  const n = S(e, "class", 3, "");
  var r = Xl(), o = /* @__PURE__ */ ut(r);
  Hl(o, {
    class: "btn btn-default btn-md gl-button gl-new-dropdown-toggle",
    children: (s, i) => {
      var a = Gl(), u = /* @__PURE__ */ ut(a), c = /* @__PURE__ */ ut(u);
      Pe(() => e.children, c);
      var l = /* @__PURE__ */ Kt(/* @__PURE__ */ Kt(u, !0));
      Sr(l, {
        name: "chevron-down",
        class: "gl-button-icon gl-new-dropdown-chevron"
      }), A(s, a);
    },
    $$slots: { default: !0 }
  }), pt(() => mo(r, `gl-disclosure-dropdown gl-new-dropdown ${Je(n())}`)), A(t, r), xt();
}
var Ql = /* @__PURE__ */ et('<div class="gl-new-dropdown-panel gl-display-block!"><div class="gl-new-dropdown-inner"><div class="gl-new-dropdown-contents"><!></div></div></div>');
function Jl(t, e) {
  Tt(e, !0);
  var n = W(), r = /* @__PURE__ */ N(n);
  ql(r, {
    class: "gl-new-dropdown",
    align: "start",
    sideOffset: 4,
    children: (o, s) => {
      var i = Ql(), a = /* @__PURE__ */ ut(i), u = /* @__PURE__ */ ut(a), c = /* @__PURE__ */ ut(u);
      Pe(() => e.children, c), A(o, i);
    },
    $$slots: { default: !0 }
  }), A(t, n), xt();
}
var $l = /* @__PURE__ */ et('<div class="gl-new-dropdown-item-content"><span class="gl-new-dropdown-item-text-wrapper"><!></span></div>');
function tf(t, e) {
  Tt(e, !0);
  var n = W(), r = /* @__PURE__ */ N(n);
  bl(r, {
    class: "gl-new-dropdown-item",
    get onclick() {
      return e.onclick;
    },
    children: (o, s) => {
      var i = $l(), a = /* @__PURE__ */ ut(i), u = /* @__PURE__ */ ut(a);
      Pe(() => e.children, u), A(o, i);
    },
    $$slots: { default: !0 }
  }), A(t, n), xt();
}
const er = {
  Root: Ll,
  Trigger: Zl,
  Content: Jl,
  Item: tf
};
var ef = /* @__PURE__ */ et('<img src="/uploads/-/system/project/avatar/10/256x256.png" alt="Daktela logo">');
function nf(t, e) {
  const n = S(e, "class", 3, "");
  var r = ef();
  pt(() => {
    mo(r, n()), qn(r, "style", e.style);
  }), A(t, r);
}
var rf = /* @__PURE__ */ et("<!> ", 1), of = /* @__PURE__ */ et("<!> <!>", 1);
function Os(t, e) {
  const n = S(e, "class", 3, "");
  var r = W(), o = /* @__PURE__ */ N(r);
  er.Root(o, {
    children: (s, i) => {
      var a = of(), u = /* @__PURE__ */ N(a);
      er.Trigger(u, {
        get class() {
          return n();
        },
        children: (l, f) => {
          var v = W(), d = /* @__PURE__ */ N(v);
          nf(d, { class: "gl-icon s14", style: "scale: 1.5" }), A(l, v);
        },
        $$slots: { default: !0 }
      });
      var c = /* @__PURE__ */ Kt(/* @__PURE__ */ Kt(u, !0));
      er.Content(c, {
        children: (l, f) => {
          var v = W(), d = /* @__PURE__ */ N(v);
          Da(d, 69, () => e.features, (h, m) => Gn(h).title, (h, m, g) => {
            var y = W(), _ = /* @__PURE__ */ N(y);
            er.Item(_, {
              get onclick() {
                return Gn(m).onClick;
              },
              children: (w, k) => {
                var B = rf(), I = /* @__PURE__ */ N(B);
                Sr(I, {
                  get name() {
                    return Gn(m).icon;
                  },
                  class: "gl-mr-2"
                });
                var K = /* @__PURE__ */ Kt(I, !0);
                pt(() => Vi(K, ` ${Je(Gn(m).title)}`)), A(w, B);
              },
              $$slots: { default: !0 }
            }), A(h, y);
          }), A(l, v);
        },
        $$slots: { default: !0 }
      }), A(s, a);
    },
    $$slots: { default: !0 }
  }), A(t, r);
}
const to = {
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
function sf(t) {
  var e = W(), n = /* @__PURE__ */ N(e);
  Ml(n, { class: "modal-backdrop" }), A(t, e);
}
var af = /* @__PURE__ */ et('<div class="modal fade show gl-modal" style="display: block;"><div><div class="modal-content"><!></div></div></div>');
function uf(t, e) {
  Tt(e, !0);
  const n = S(e, "size", 3, "md");
  var r = W(), o = /* @__PURE__ */ N(r);
  Sl(o, {
    children: (s, i) => {
      var a = af(), u = /* @__PURE__ */ ut(a), c = /* @__PURE__ */ ut(u), l = /* @__PURE__ */ ut(c);
      Pe(() => e.children, l), pt(() => mo(u, `modal-dialog modal-${Je(n())}`)), A(s, a);
    },
    $$slots: { default: !0 }
  }), A(t, r), xt();
}
var cf = /* @__PURE__ */ et('<header class="modal-header"><!></header>');
function lf(t, e) {
  Tt(e, !0);
  var n = cf(), r = /* @__PURE__ */ ut(n);
  Pe(() => e.children, r), A(t, n), xt();
}
function ff(t, e) {
  Tt(e, !0);
  var n = W(), r = /* @__PURE__ */ N(n);
  wl(r, {
    class: "modal-title",
    children: (o, s) => {
      var i = W(), a = /* @__PURE__ */ N(i);
      Pe(() => e.children, a), A(o, i);
    },
    $$slots: { default: !0 }
  }), A(t, n), xt();
}
var df = /* @__PURE__ */ et("Close", 1), vf = /* @__PURE__ */ et('<span class="gl-button-text"><!></span>');
function mf(t, e) {
  Tt(e, !0);
  var n = W(), r = /* @__PURE__ */ N(n);
  Cs(r, {
    class: "btn btn-default btn-md gl-button",
    children: (o, s) => {
      var i = vf(), a = /* @__PURE__ */ ut(i);
      ht(
        a,
        () => e.children,
        (u) => {
          var c = W(), l = /* @__PURE__ */ N(c);
          Pe(() => e.children, l), A(u, c);
        },
        (u) => {
          var c = df();
          A(u, c);
        }
      ), A(o, i);
    },
    $$slots: { default: !0 }
  }), A(t, n), xt();
}
function gf(t) {
  var e = W(), n = /* @__PURE__ */ N(e);
  Cs(n, {
    class: "btn btn-default btn-sm gl-button btn-default-tertiary btn-icon",
    children: (r, o) => {
      var s = W(), i = /* @__PURE__ */ N(s);
      Sr(i, { name: "close" }), A(r, s);
    },
    $$slots: { default: !0 }
  }), A(t, e);
}
var hf = /* @__PURE__ */ et('<div class="modal-body"><!></div>');
function pf(t, e) {
  Tt(e, !0);
  var n = hf(), r = /* @__PURE__ */ ut(n);
  Pe(() => e.children, r), A(t, n), xt();
}
var bf = /* @__PURE__ */ et('<footer class="modal-footer"><!></footer>');
function yf(t, e) {
  Tt(e, !0);
  var n = bf(), r = /* @__PURE__ */ ut(n);
  Pe(() => e.children, r), A(t, n), xt();
}
const ue = {
  Root: _l,
  Portal: xl,
  Overlay: sf,
  Content: uf,
  Header: lf,
  Title: ff,
  Close: mf,
  CloseIcon: gf,
  Body: pf,
  Footer: yf
};
var _f = /* @__PURE__ */ et('<div class="gl-p-7 gl-text-center"><div class="gl-spinner-container gl-pb-2"><span class="gl-vertical-align-text-bottom! gl-spinner gl-spinner-dark gl-spinner-lg"></span></div> Loading</div>');
function wf(t) {
  var e = _f();
  A(t, e);
}
const Ef = [
  "Menlo",
  "'DejaVu Sans Mono'",
  "'Liberation Mono'",
  "Consolas",
  "'Ubuntu Mono'",
  "'Courier New'",
  "'andale mono'",
  "'lucida console'",
  "monospace"
].join(", "), Tf = [
  `font-family:${Ef}`,
  "font-size:0.8125rem",
  "margin-top:8px",
  "margin-bottom:8px",
  "color:#999999",
  "padding:8px 0 8px 8px",
  "border-width:0 0 0 3px",
  "border-style:none none none solid",
  "border-color:#444444"
].join(";");
function xf(t) {
  return Cf(t) + Of(t) + Sf(t) + Rf(t) + Df(t);
}
function Cf(t) {
  return `<p><strong>${t.title}</strong></p>`;
}
function Of(t) {
  return Oo("Commits", Af([t].concat(t.cherryPicks)));
}
function Af(t) {
  return t.map((e) => `${kf(e.branch)} ${Pf(e.commit)}`);
}
function kf(t) {
  return Ao(t.name, t.web_url);
}
function Pf(t) {
  return Ao(t.web_url, t.web_url);
}
function Sf(t) {
  return Oo("Merge requests", t.mergeRequests.map((e) => As(e.web_url)));
}
function Rf(t) {
  return Object.entries(t.extra).reduce((e, [n, r]) => e + Oo(n, Nf(r), !0), "");
}
function Df(t) {
  return t.body === "" ? "" : `<p>Notes (copied from commit message):</p><pre style="${Tf}">${t.body}</pre>`;
}
function Oo(t, e, n = !1) {
  return e.length ? e.length === 1 && n ? `<p>${t}: ${e[0]}</p>` : `<p>${t}:</p>` + Ff(e) : "";
}
function Ff(t) {
  return `<ul>${t.map((e) => `<li>${e}</li>`).join("")}</ul>`;
}
function Ao(t, e) {
  return `<a href="${e}" target="_blank" rel="noreferrer noopener">${t}</a>`;
}
function Nf(t) {
  return t.map(As);
}
function As(t) {
  try {
    return Ao(t, new URL(t).toString());
  } catch {
    return t;
  }
}
async function If(t, e) {
  try {
    await navigator.clipboard.writeText(C(e));
  } catch (n) {
    console.error(n);
  }
}
var Mf = /* @__PURE__ */ et('<span>Ticket: <a target="_blank" rel="noreferrer noopener"> </a></span>'), Lf = /* @__PURE__ */ et('<div class="gl-display-flex gl-justify-content-space-between gl-mb-2"><div><!></div> <button title="Copy message" class="btn input-group-text btn-default btn-md gl-button btn-default-secondary btn-icon"><!></button></div> <textarea readonly="" class="gl-form-input gl-form-textarea form-control"></textarea>', 1);
function Bf(t, e) {
  Tt(e, !0);
  const n = /* @__PURE__ */ In(() => xf(e.comment));
  var r = Lf(), o = /* @__PURE__ */ N(r), s = /* @__PURE__ */ ut(o), i = /* @__PURE__ */ ut(s);
  ht(i, () => e.comment.ticket, (l) => {
    var f = Mf(), v = /* @__PURE__ */ Kt(/* @__PURE__ */ ut(f)), d = /* @__PURE__ */ ut(v);
    pt(() => {
      qn(v, "href", e.comment.ticket), Vi(d, e.comment.ticket);
    }), A(l, f);
  });
  var a = /* @__PURE__ */ Kt(/* @__PURE__ */ Kt(s, !0));
  a.__click = [If, n];
  var u = /* @__PURE__ */ ut(a);
  Sr(u, {
    name: "copy-to-clipboard",
    class: "gl-button-icon"
  });
  var c = /* @__PURE__ */ Kt(/* @__PURE__ */ Kt(o, !0));
  pt(() => Ka(c, C(n))), A(t, r), xt();
}
ji(["click"]);
const Kf = "/api/v4", Le = {
  commits: {
    async findBySHA(t, e) {
      return Rn(`projects/${mn(t)}/repository/commits/${e}`);
    },
    async refs(t, e, n = "all") {
      return Rn(`projects/${mn(t)}/repository/commits/${e}/refs`, { type: n });
    },
    async comments(t, e) {
      return Rn(`projects/${mn(t)}/repository/commits/${e}/comments`);
    },
    async mergeRequests(t, e) {
      return Rn(`projects/${mn(t)}/repository/commits/${e}/merge_requests`);
    }
  },
  branches: {
    async findByName(t, e) {
      return Rn(`projects/${mn(t)}/repository/branches/${mn(e)}`);
    }
  }
};
function mn(t) {
  return encodeURIComponent(t);
}
async function Rn(t, e = {}) {
  const n = new URL(`${Kf}/${t}`, location.origin);
  return Object.entries(e).forEach(([o, s]) => n.searchParams.append(o, s)), await (await fetch(n)).json();
}
const vi = {
  async findRefs(t, e) {
    const n = await jf(t, e);
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
async function jf(t, e) {
  const n = await Le.commits.comments(t, e);
  return Wf(n);
}
function Wf(t) {
  return t.reduce((e, n) => {
    const r = n.note.match(/mentioned\s+in\s+commit\s+(\w+)/i);
    return r !== null && e.push(r[1]), e;
  }, []);
}
const Vf = {
  message(t) {
    const e = { title: "", body: "", ticket: void 0, extra: {} }, n = t.message.split(`
`).map((r) => r.trim());
    for (eo(n), e.title = qf(n), eo(n); n.length; )
      Uf(e, n);
    return e.body = e.body.trim(), e;
  }
};
function qf(t) {
  const e = t.shift();
  if (e === void 0)
    throw Error("Could not parse commit title");
  return e.replace(/\s*#\s*\d+\s*$/, "");
}
function Uf(t, e) {
  return Hf(e) || zf(t, e) || Yf(t, e) || Gf(t, e) || Xf(t, e);
}
function eo(t) {
  return ks(t, /^\s*$/);
}
function Hf(t) {
  return ks(t, /\(.*cherry.*picked.*\)/i);
}
function ks(t, e) {
  let n = !1;
  for (; t.length && t[0].match(e); )
    t.shift(), n = !0;
  return n;
}
function zf(t, e) {
  let n = !1;
  return e.length && e[0].match(/^\s*$/) && (t.body += `
`, n = !0, eo(e)), n;
}
function Yf(t, e) {
  if (e.length) {
    const n = e[0].match(/ticket\s*:\s*(http.*)/i);
    if (!n)
      return !1;
    t.ticket = n[1].trim(), e.shift();
  }
  return !0;
}
function Gf(t, e) {
  if (e.length) {
    const n = e[0].match(/^([^:]+):\s*(http.*)/i);
    if (!n)
      return !1;
    const r = n[1].trim(), o = n[2].trim();
    t.extra[r] = t.extra[r] ?? [], t.extra[r].push(o), e.shift();
  }
  return !0;
}
function Xf(t, e) {
  const n = e.shift();
  return n !== void 0 && (t.body += `${n}
`), n !== void 0;
}
const Lr = {
  async assembleBase(t, e) {
    const n = await Le.commits.findBySHA(t, e), [
      r,
      o,
      s
    ] = await Promise.all([
      Le.commits.refs(t, n.id, "all"),
      vi.findRefs(t, n.id),
      Le.commits.mergeRequests(t, n.id)
    ]);
    return { commit: n, branches: r, cherryPicks: o, mergeRequests: s };
  },
  async assembleComment(t, e) {
    const [n, r] = await Promise.all([
      Le.branches.findByName(t, e.branch.name),
      vi.deRefAll(t, e.cherryPicks)
    ]), o = Vf.message(e.commit);
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
};
var Zf = /* @__PURE__ */ et("Generate ticket comment", 1), Qf = /* @__PURE__ */ et("<!> <!>", 1), Jf = /* @__PURE__ */ et("<!> <!> <!>", 1), $f = /* @__PURE__ */ et("<!> <!>", 1);
function td(t, e) {
  Tt(e, !0);
  let n = S(e, "args", 7), r = /* @__PURE__ */ he(Oe({ type: "closed" }));
  async function o(v, d) {
    s(v, d);
    const h = await Lr.assembleBase(v, d), m = Lr.resolveBaseUsingFirst(h);
    if (m !== null) {
      const g = await Lr.assembleComment(v, m);
      i(g);
    } else
      console.error("Comment could not be auto-resolved");
  }
  function s(v, d) {
    mt(r, Oe({ type: "loading", project: v, commit: d }));
  }
  function i(v) {
    mt(r, Oe({ type: "result", comment: v }));
  }
  ur(() => {
    n() !== void 0 && o(n().projectRef, n().sha);
  });
  function a(v) {
    v || u();
  }
  function u() {
    mt(r, Oe({ type: "closed" })), n(void 0);
  }
  var c = W(), l = /* @__PURE__ */ N(c), f = /* @__PURE__ */ In(() => C(r).type !== "closed");
  ue.Root(l, {
    get open() {
      return C(f);
    },
    onOpenChange: a,
    children: (v, d) => {
      var h = W(), m = /* @__PURE__ */ N(h);
      ue.Portal(m, {
        children: (g, y) => {
          var _ = $f(), w = /* @__PURE__ */ N(_);
          ue.Overlay(w, {});
          var k = /* @__PURE__ */ Kt(/* @__PURE__ */ Kt(w, !0));
          ue.Content(k, {
            size: "sm",
            children: (B, I) => {
              var K = Jf(), H = /* @__PURE__ */ N(K);
              ue.Header(H, {
                children: (E, p) => {
                  var b = Qf(), O = /* @__PURE__ */ N(b);
                  ue.Title(O, {
                    children: (R, M) => {
                      var P = Zf();
                      A(R, P);
                    },
                    $$slots: { default: !0 }
                  });
                  var x = /* @__PURE__ */ Kt(/* @__PURE__ */ Kt(O, !0));
                  ue.CloseIcon(x, {}), A(E, b);
                },
                $$slots: { default: !0 }
              });
              var Y = /* @__PURE__ */ Kt(/* @__PURE__ */ Kt(H, !0));
              ue.Body(Y, {
                children: (E, p) => {
                  var b = W(), O = /* @__PURE__ */ N(b);
                  ht(
                    O,
                    () => C(r).type === "loading",
                    (x) => {
                      var R = W(), M = /* @__PURE__ */ N(R);
                      wf(M), A(x, R);
                    },
                    (x) => {
                      var R = W(), M = /* @__PURE__ */ N(R);
                      ht(
                        M,
                        () => C(r).type === "result",
                        (P) => {
                          var Q = W(), st = /* @__PURE__ */ N(Q);
                          Bf(st, {
                            get comment() {
                              return C(r).comment;
                            }
                          }), A(P, Q);
                        },
                        null,
                        !0
                      ), A(x, R);
                    }
                  ), A(E, b);
                },
                $$slots: { default: !0 }
              });
              var G = /* @__PURE__ */ Kt(/* @__PURE__ */ Kt(Y, !0));
              ue.Footer(G, {
                children: (E, p) => {
                  var b = W(), O = /* @__PURE__ */ N(b);
                  ue.Close(O, {}), A(E, b);
                },
                $$slots: { default: !0 }
              }), A(B, K);
            },
            $$slots: { default: !0 }
          }), A(g, _);
        },
        $$slots: { default: !0 }
      }), A(v, h);
    },
    $$slots: { default: !0 }
  }), A(t, c), xt();
}
function ed(t, e) {
  Tt(e, !0);
  var n = W(), r = /* @__PURE__ */ N(n);
  td(r, {
    get args() {
      return e.controls.generateTicketCommentModal.args;
    },
    set args(o) {
      e.controls.generateTicketCommentModal.args = o;
    }
  }), A(t, n), xt();
}
function nd() {
  let t = /* @__PURE__ */ he(void 0);
  function e(r) {
    mt(t, Oe(r));
  }
  function n() {
    mt(t, void 0);
  }
  return {
    get args() {
      return C(t);
    },
    open: e,
    close: n
  };
}
function rd() {
  const t = od();
  id(t), sd(t), ad(t);
}
function od() {
  return {
    generateTicketCommentModal: nd()
  };
}
function id(t) {
  try {
    const e = document.querySelector(".page-content-header");
    if (!e)
      return;
    const n = to.projects.ref(), r = to.commits.sha();
    vo(Os, {
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
function sd(t) {
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
    const r = to.projects.ref(), o = n.dataset.clipboardText ?? "";
    vo(Os, {
      target: e,
      props: {
        features: [
          {
            icon: "comment-lines",
            title: "Generate ticket comment",
            onClick() {
              t.generateTicketCommentModal.open({ projectRef: r, sha: o });
            }
          }
        ]
      }
    });
  } catch (e) {
    console.error(e);
  }
}
function ad(t) {
  const e = document.createElement("div");
  e.id = "daktela-modals", document.body.appendChild(e), vo(ed, {
    target: e,
    props: {
      controls: t
    }
  });
}
rd();
//# sourceMappingURL=daktela-gitlab.js.map
