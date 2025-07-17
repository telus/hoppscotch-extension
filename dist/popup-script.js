(() => {

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

      var $parcel$global = globalThis;
    
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire4cfd"];

if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire4cfd"] = parcelRequire;
}

var parcelRegister = parcelRequire.register;
parcelRegister("jfuA3", function(module, exports) {

$parcel$export(module.exports, "DEFAULT_ORIGIN_LIST", () => $c69d36af2ce7e1c0$export$90f2c8d1f20401a);
const $c69d36af2ce7e1c0$export$90f2c8d1f20401a = [
    "https://hoppscotch.io"
];

});

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $5c5af6691b6c963a$var$t = globalThis, $5c5af6691b6c963a$var$i = $5c5af6691b6c963a$var$t.trustedTypes, $5c5af6691b6c963a$var$s = $5c5af6691b6c963a$var$i ? $5c5af6691b6c963a$var$i.createPolicy("lit-html", {
    createHTML: (t)=>t
}) : void 0, $5c5af6691b6c963a$var$e = "$lit$", $5c5af6691b6c963a$var$h = `lit$${(Math.random() + "").slice(9)}$`, $5c5af6691b6c963a$var$o = "?" + $5c5af6691b6c963a$var$h, $5c5af6691b6c963a$var$n = `<${$5c5af6691b6c963a$var$o}>`, $5c5af6691b6c963a$var$r = document, $5c5af6691b6c963a$var$l = ()=>$5c5af6691b6c963a$var$r.createComment(""), $5c5af6691b6c963a$var$c = (t)=>null === t || "object" != typeof t && "function" != typeof t, $5c5af6691b6c963a$var$a = Array.isArray, $5c5af6691b6c963a$var$u = (t)=>$5c5af6691b6c963a$var$a(t) || "function" == typeof t?.[Symbol.iterator], $5c5af6691b6c963a$var$d = "[ 	\n\f\r]", $5c5af6691b6c963a$var$f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, $5c5af6691b6c963a$var$v = /-->/g, $5c5af6691b6c963a$var$_ = />/g, $5c5af6691b6c963a$var$m = RegExp(`>|${$5c5af6691b6c963a$var$d}(?:([^\\s"'>=/]+)(${$5c5af6691b6c963a$var$d}*=${$5c5af6691b6c963a$var$d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), $5c5af6691b6c963a$var$p = /'/g, $5c5af6691b6c963a$var$g = /"/g, $5c5af6691b6c963a$var$$ = /^(?:script|style|textarea|title)$/i, $5c5af6691b6c963a$var$y = (t)=>(i, ...s)=>({
            _$litType$: t,
            strings: i,
            values: s
        }), $5c5af6691b6c963a$export$c0bb0b647f701bb5 = $5c5af6691b6c963a$var$y(1), $5c5af6691b6c963a$export$7ed1367e7fa1ad68 = $5c5af6691b6c963a$var$y(2), $5c5af6691b6c963a$export$9c068ae9cc5db4e8 = Symbol.for("lit-noChange"), $5c5af6691b6c963a$export$45b790e32b2810ee = Symbol.for("lit-nothing"), $5c5af6691b6c963a$var$A = new WeakMap, $5c5af6691b6c963a$var$E = $5c5af6691b6c963a$var$r.createTreeWalker($5c5af6691b6c963a$var$r, 129);
function $5c5af6691b6c963a$var$C(t, i) {
    if (!Array.isArray(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== $5c5af6691b6c963a$var$s ? $5c5af6691b6c963a$var$s.createHTML(i) : i;
}
const $5c5af6691b6c963a$var$P = (t, i)=>{
    const s = t.length - 1, o = [];
    let r, l = 2 === i ? "<svg>" : "", c = $5c5af6691b6c963a$var$f;
    for(let i = 0; i < s; i++){
        const s = t[i];
        let a, u, d = -1, y = 0;
        for(; y < s.length && (c.lastIndex = y, u = c.exec(s), null !== u);)y = c.lastIndex, c === $5c5af6691b6c963a$var$f ? "!--" === u[1] ? c = $5c5af6691b6c963a$var$v : void 0 !== u[1] ? c = $5c5af6691b6c963a$var$_ : void 0 !== u[2] ? ($5c5af6691b6c963a$var$$.test(u[2]) && (r = RegExp("</" + u[2], "g")), c = $5c5af6691b6c963a$var$m) : void 0 !== u[3] && (c = $5c5af6691b6c963a$var$m) : c === $5c5af6691b6c963a$var$m ? ">" === u[0] ? (c = r ?? $5c5af6691b6c963a$var$f, d = -1) : void 0 === u[1] ? d = -2 : (d = c.lastIndex - u[2].length, a = u[1], c = void 0 === u[3] ? $5c5af6691b6c963a$var$m : '"' === u[3] ? $5c5af6691b6c963a$var$g : $5c5af6691b6c963a$var$p) : c === $5c5af6691b6c963a$var$g || c === $5c5af6691b6c963a$var$p ? c = $5c5af6691b6c963a$var$m : c === $5c5af6691b6c963a$var$v || c === $5c5af6691b6c963a$var$_ ? c = $5c5af6691b6c963a$var$f : (c = $5c5af6691b6c963a$var$m, r = void 0);
        const x = c === $5c5af6691b6c963a$var$m && t[i + 1].startsWith("/>") ? " " : "";
        l += c === $5c5af6691b6c963a$var$f ? s + $5c5af6691b6c963a$var$n : d >= 0 ? (o.push(a), s.slice(0, d) + $5c5af6691b6c963a$var$e + s.slice(d) + $5c5af6691b6c963a$var$h + x) : s + $5c5af6691b6c963a$var$h + (-2 === d ? i : x);
    }
    return [
        $5c5af6691b6c963a$var$C(t, l + (t[s] || "<?>") + (2 === i ? "</svg>" : "")),
        o
    ];
};
class $5c5af6691b6c963a$var$V {
    constructor({ strings: t, _$litType$: s }, n){
        let r;
        this.parts = [];
        let c = 0, a = 0;
        const u = t.length - 1, d = this.parts, [f, v] = $5c5af6691b6c963a$var$P(t, s);
        if (this.el = $5c5af6691b6c963a$var$V.createElement(f, n), $5c5af6691b6c963a$var$E.currentNode = this.el.content, 2 === s) {
            const t = this.el.content.firstChild;
            t.replaceWith(...t.childNodes);
        }
        for(; null !== (r = $5c5af6691b6c963a$var$E.nextNode()) && d.length < u;){
            if (1 === r.nodeType) {
                if (r.hasAttributes()) for (const t of r.getAttributeNames())if (t.endsWith($5c5af6691b6c963a$var$e)) {
                    const i = v[a++], s = r.getAttribute(t).split($5c5af6691b6c963a$var$h), e = /([.?@])?(.*)/.exec(i);
                    d.push({
                        type: 1,
                        index: c,
                        name: e[2],
                        strings: s,
                        ctor: "." === e[1] ? $5c5af6691b6c963a$var$k : "?" === e[1] ? $5c5af6691b6c963a$var$H : "@" === e[1] ? $5c5af6691b6c963a$var$I : $5c5af6691b6c963a$var$R
                    }), r.removeAttribute(t);
                } else t.startsWith($5c5af6691b6c963a$var$h) && (d.push({
                    type: 6,
                    index: c
                }), r.removeAttribute(t));
                if ($5c5af6691b6c963a$var$$.test(r.tagName)) {
                    const t = r.textContent.split($5c5af6691b6c963a$var$h), s = t.length - 1;
                    if (s > 0) {
                        r.textContent = $5c5af6691b6c963a$var$i ? $5c5af6691b6c963a$var$i.emptyScript : "";
                        for(let i = 0; i < s; i++)r.append(t[i], $5c5af6691b6c963a$var$l()), $5c5af6691b6c963a$var$E.nextNode(), d.push({
                            type: 2,
                            index: ++c
                        });
                        r.append(t[s], $5c5af6691b6c963a$var$l());
                    }
                }
            } else if (8 === r.nodeType) {
                if (r.data === $5c5af6691b6c963a$var$o) d.push({
                    type: 2,
                    index: c
                });
                else {
                    let t = -1;
                    for(; -1 !== (t = r.data.indexOf($5c5af6691b6c963a$var$h, t + 1));)d.push({
                        type: 7,
                        index: c
                    }), t += $5c5af6691b6c963a$var$h.length - 1;
                }
            }
            c++;
        }
    }
    static createElement(t, i) {
        const s = $5c5af6691b6c963a$var$r.createElement("template");
        return s.innerHTML = t, s;
    }
}
function $5c5af6691b6c963a$var$N(t, i, s = t, e) {
    if (i === $5c5af6691b6c963a$export$9c068ae9cc5db4e8) return i;
    let h = void 0 !== e ? s._$Co?.[e] : s._$Cl;
    const o = $5c5af6691b6c963a$var$c(i) ? void 0 : i._$litDirective$;
    return h?.constructor !== o && (h?._$AO?.(!1), void 0 === o ? h = void 0 : (h = new o(t), h._$AT(t, s, e)), void 0 !== e ? (s._$Co ??= [])[e] = h : s._$Cl = h), void 0 !== h && (i = $5c5af6691b6c963a$var$N(t, h._$AS(t, i.values), h, e)), i;
}
class $5c5af6691b6c963a$var$S {
    constructor(t, i){
        this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
    }
    get parentNode() {
        return this._$AM.parentNode;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    u(t) {
        const { el: { content: i }, parts: s } = this._$AD, e = (t?.creationScope ?? $5c5af6691b6c963a$var$r).importNode(i, !0);
        $5c5af6691b6c963a$var$E.currentNode = e;
        let h = $5c5af6691b6c963a$var$E.nextNode(), o = 0, n = 0, l = s[0];
        for(; void 0 !== l;){
            if (o === l.index) {
                let i;
                2 === l.type ? i = new $5c5af6691b6c963a$var$M(h, h.nextSibling, this, t) : 1 === l.type ? i = new l.ctor(h, l.name, l.strings, this, t) : 6 === l.type && (i = new $5c5af6691b6c963a$var$L(h, this, t)), this._$AV.push(i), l = s[++n];
            }
            o !== l?.index && (h = $5c5af6691b6c963a$var$E.nextNode(), o++);
        }
        return $5c5af6691b6c963a$var$E.currentNode = $5c5af6691b6c963a$var$r, e;
    }
    p(t) {
        let i = 0;
        for (const s of this._$AV)void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
    }
}
class $5c5af6691b6c963a$var$M {
    get _$AU() {
        return this._$AM?._$AU ?? this._$Cv;
    }
    constructor(t, i, s, e){
        this.type = 2, this._$AH = $5c5af6691b6c963a$export$45b790e32b2810ee, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cv = e?.isConnected ?? !0;
    }
    get parentNode() {
        let t = this._$AA.parentNode;
        const i = this._$AM;
        return void 0 !== i && 11 === t?.nodeType && (t = i.parentNode), t;
    }
    get startNode() {
        return this._$AA;
    }
    get endNode() {
        return this._$AB;
    }
    _$AI(t, i = this) {
        t = $5c5af6691b6c963a$var$N(this, t, i), $5c5af6691b6c963a$var$c(t) ? t === $5c5af6691b6c963a$export$45b790e32b2810ee || null == t || "" === t ? (this._$AH !== $5c5af6691b6c963a$export$45b790e32b2810ee && this._$AR(), this._$AH = $5c5af6691b6c963a$export$45b790e32b2810ee) : t !== this._$AH && t !== $5c5af6691b6c963a$export$9c068ae9cc5db4e8 && this._(t) : void 0 !== t._$litType$ ? this.g(t) : void 0 !== t.nodeType ? this.$(t) : $5c5af6691b6c963a$var$u(t) ? this.T(t) : this._(t);
    }
    k(t) {
        return this._$AA.parentNode.insertBefore(t, this._$AB);
    }
    $(t) {
        this._$AH !== t && (this._$AR(), this._$AH = this.k(t));
    }
    _(t) {
        this._$AH !== $5c5af6691b6c963a$export$45b790e32b2810ee && $5c5af6691b6c963a$var$c(this._$AH) ? this._$AA.nextSibling.data = t : this.$($5c5af6691b6c963a$var$r.createTextNode(t)), this._$AH = t;
    }
    g(t) {
        const { values: i, _$litType$: s } = t, e = "number" == typeof s ? this._$AC(t) : (void 0 === s.el && (s.el = $5c5af6691b6c963a$var$V.createElement($5c5af6691b6c963a$var$C(s.h, s.h[0]), this.options)), s);
        if (this._$AH?._$AD === e) this._$AH.p(i);
        else {
            const t = new $5c5af6691b6c963a$var$S(e, this), s = t.u(this.options);
            t.p(i), this.$(s), this._$AH = t;
        }
    }
    _$AC(t) {
        let i = $5c5af6691b6c963a$var$A.get(t.strings);
        return void 0 === i && $5c5af6691b6c963a$var$A.set(t.strings, i = new $5c5af6691b6c963a$var$V(t)), i;
    }
    T(t) {
        $5c5af6691b6c963a$var$a(this._$AH) || (this._$AH = [], this._$AR());
        const i = this._$AH;
        let s, e = 0;
        for (const h of t)e === i.length ? i.push(s = new $5c5af6691b6c963a$var$M(this.k($5c5af6691b6c963a$var$l()), this.k($5c5af6691b6c963a$var$l()), this, this.options)) : s = i[e], s._$AI(h), e++;
        e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
    }
    _$AR(t = this._$AA.nextSibling, i) {
        for(this._$AP?.(!1, !0, i); t && t !== this._$AB;){
            const i = t.nextSibling;
            t.remove(), t = i;
        }
    }
    setConnected(t) {
        void 0 === this._$AM && (this._$Cv = t, this._$AP?.(t));
    }
}
class $5c5af6691b6c963a$var$R {
    get tagName() {
        return this.element.tagName;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    constructor(t, i, s, e, h){
        this.type = 1, this._$AH = $5c5af6691b6c963a$export$45b790e32b2810ee, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = h, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String), this.strings = s) : this._$AH = $5c5af6691b6c963a$export$45b790e32b2810ee;
    }
    _$AI(t, i = this, s, e) {
        const h = this.strings;
        let o = !1;
        if (void 0 === h) t = $5c5af6691b6c963a$var$N(this, t, i, 0), o = !$5c5af6691b6c963a$var$c(t) || t !== this._$AH && t !== $5c5af6691b6c963a$export$9c068ae9cc5db4e8, o && (this._$AH = t);
        else {
            const e = t;
            let n, r;
            for(t = h[0], n = 0; n < h.length - 1; n++)r = $5c5af6691b6c963a$var$N(this, e[s + n], i, n), r === $5c5af6691b6c963a$export$9c068ae9cc5db4e8 && (r = this._$AH[n]), o ||= !$5c5af6691b6c963a$var$c(r) || r !== this._$AH[n], r === $5c5af6691b6c963a$export$45b790e32b2810ee ? t = $5c5af6691b6c963a$export$45b790e32b2810ee : t !== $5c5af6691b6c963a$export$45b790e32b2810ee && (t += (r ?? "") + h[n + 1]), this._$AH[n] = r;
        }
        o && !e && this.j(t);
    }
    j(t) {
        t === $5c5af6691b6c963a$export$45b790e32b2810ee ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
    }
}
class $5c5af6691b6c963a$var$k extends $5c5af6691b6c963a$var$R {
    constructor(){
        super(...arguments), this.type = 3;
    }
    j(t) {
        this.element[this.name] = t === $5c5af6691b6c963a$export$45b790e32b2810ee ? void 0 : t;
    }
}
class $5c5af6691b6c963a$var$H extends $5c5af6691b6c963a$var$R {
    constructor(){
        super(...arguments), this.type = 4;
    }
    j(t) {
        this.element.toggleAttribute(this.name, !!t && t !== $5c5af6691b6c963a$export$45b790e32b2810ee);
    }
}
class $5c5af6691b6c963a$var$I extends $5c5af6691b6c963a$var$R {
    constructor(t, i, s, e, h){
        super(t, i, s, e, h), this.type = 5;
    }
    _$AI(t, i = this) {
        if ((t = $5c5af6691b6c963a$var$N(this, t, i, 0) ?? $5c5af6691b6c963a$export$45b790e32b2810ee) === $5c5af6691b6c963a$export$9c068ae9cc5db4e8) return;
        const s = this._$AH, e = t === $5c5af6691b6c963a$export$45b790e32b2810ee && s !== $5c5af6691b6c963a$export$45b790e32b2810ee || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, h = t !== $5c5af6691b6c963a$export$45b790e32b2810ee && (s === $5c5af6691b6c963a$export$45b790e32b2810ee || e);
        e && this.element.removeEventListener(this.name, this, s), h && this.element.addEventListener(this.name, this, t), this._$AH = t;
    }
    handleEvent(t) {
        "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
    }
}
class $5c5af6691b6c963a$var$L {
    constructor(t, i, s){
        this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t) {
        $5c5af6691b6c963a$var$N(this, t);
    }
}
const $5c5af6691b6c963a$export$8613d1ca9052b22e = {
    S: $5c5af6691b6c963a$var$e,
    A: $5c5af6691b6c963a$var$h,
    P: $5c5af6691b6c963a$var$o,
    C: 1,
    M: $5c5af6691b6c963a$var$P,
    L: $5c5af6691b6c963a$var$S,
    R: $5c5af6691b6c963a$var$u,
    V: $5c5af6691b6c963a$var$N,
    D: $5c5af6691b6c963a$var$M,
    I: $5c5af6691b6c963a$var$R,
    H: $5c5af6691b6c963a$var$H,
    N: $5c5af6691b6c963a$var$I,
    U: $5c5af6691b6c963a$var$k,
    B: $5c5af6691b6c963a$var$L
}, $5c5af6691b6c963a$var$Z = $5c5af6691b6c963a$var$t.litHtmlPolyfillSupport;
$5c5af6691b6c963a$var$Z?.($5c5af6691b6c963a$var$V, $5c5af6691b6c963a$var$M), ($5c5af6691b6c963a$var$t.litHtmlVersions ??= []).push("3.0.0");
const $5c5af6691b6c963a$export$b3890eb0ae9dca99 = (t, i, s)=>{
    const e = s?.renderBefore ?? i;
    let h = e._$litPart$;
    if (void 0 === h) {
        const t = s?.renderBefore ?? null;
        e._$litPart$ = h = new $5c5af6691b6c963a$var$M(i.insertBefore($5c5af6691b6c963a$var$l(), t), t, void 0, s ?? {});
    }
    return h._$AI(t), h;
};


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $7599f3c4ce356670$export$9ba3b3f20a85bfa = {
    ATTRIBUTE: 1,
    CHILD: 2,
    PROPERTY: 3,
    BOOLEAN_ATTRIBUTE: 4,
    EVENT: 5,
    ELEMENT: 6
}, $7599f3c4ce356670$export$99b43ad1ed32e735 = (t)=>(...e)=>({
            _$litDirective$: t,
            values: e
        });
class $7599f3c4ce356670$export$befdefbdce210f91 {
    constructor(t){}
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AT(t, e, i) {
        this._$Ct = t, this._$AM = e, this._$Ci = i;
    }
    _$AS(t, e) {
        return this.update(t, e);
    }
    update(t, e) {
        return this.render(...e);
    }
}


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $65b75041c1a49413$var$t = globalThis, $65b75041c1a49413$var$i = $65b75041c1a49413$var$t.trustedTypes, $65b75041c1a49413$var$s = $65b75041c1a49413$var$i ? $65b75041c1a49413$var$i.createPolicy("lit-html", {
    createHTML: (t)=>t
}) : void 0, $65b75041c1a49413$var$e = "$lit$", $65b75041c1a49413$var$h = `lit$${Math.random().toFixed(9).slice(2)}$`, $65b75041c1a49413$var$o = "?" + $65b75041c1a49413$var$h, $65b75041c1a49413$var$n = `<${$65b75041c1a49413$var$o}>`, $65b75041c1a49413$var$r = document, $65b75041c1a49413$var$l = ()=>$65b75041c1a49413$var$r.createComment(""), $65b75041c1a49413$var$c = (t)=>null === t || "object" != typeof t && "function" != typeof t, $65b75041c1a49413$var$a = Array.isArray, $65b75041c1a49413$var$u = (t)=>$65b75041c1a49413$var$a(t) || "function" == typeof t?.[Symbol.iterator], $65b75041c1a49413$var$d = "[ 	\n\f\r]", $65b75041c1a49413$var$f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, $65b75041c1a49413$var$v = /-->/g, $65b75041c1a49413$var$_ = />/g, $65b75041c1a49413$var$m = RegExp(`>|${$65b75041c1a49413$var$d}(?:([^\\s"'>=/]+)(${$65b75041c1a49413$var$d}*=${$65b75041c1a49413$var$d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), $65b75041c1a49413$var$p = /'/g, $65b75041c1a49413$var$g = /"/g, $65b75041c1a49413$var$$ = /^(?:script|style|textarea|title)$/i, $65b75041c1a49413$var$y = (t)=>(i, ...s)=>({
            _$litType$: t,
            strings: i,
            values: s
        }), $65b75041c1a49413$export$c0bb0b647f701bb5 = $65b75041c1a49413$var$y(1), $65b75041c1a49413$export$7ed1367e7fa1ad68 = $65b75041c1a49413$var$y(2), $65b75041c1a49413$export$9c068ae9cc5db4e8 = Symbol.for("lit-noChange"), $65b75041c1a49413$export$45b790e32b2810ee = Symbol.for("lit-nothing"), $65b75041c1a49413$var$A = new WeakMap, $65b75041c1a49413$var$E = $65b75041c1a49413$var$r.createTreeWalker($65b75041c1a49413$var$r, 129);
function $65b75041c1a49413$var$C(t, i) {
    if (!Array.isArray(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== $65b75041c1a49413$var$s ? $65b75041c1a49413$var$s.createHTML(i) : i;
}
const $65b75041c1a49413$var$P = (t, i)=>{
    const s = t.length - 1, o = [];
    let r, l = 2 === i ? "<svg>" : "", c = $65b75041c1a49413$var$f;
    for(let i = 0; i < s; i++){
        const s = t[i];
        let a, u, d = -1, y = 0;
        for(; y < s.length && (c.lastIndex = y, u = c.exec(s), null !== u);)y = c.lastIndex, c === $65b75041c1a49413$var$f ? "!--" === u[1] ? c = $65b75041c1a49413$var$v : void 0 !== u[1] ? c = $65b75041c1a49413$var$_ : void 0 !== u[2] ? ($65b75041c1a49413$var$$.test(u[2]) && (r = RegExp("</" + u[2], "g")), c = $65b75041c1a49413$var$m) : void 0 !== u[3] && (c = $65b75041c1a49413$var$m) : c === $65b75041c1a49413$var$m ? ">" === u[0] ? (c = r ?? $65b75041c1a49413$var$f, d = -1) : void 0 === u[1] ? d = -2 : (d = c.lastIndex - u[2].length, a = u[1], c = void 0 === u[3] ? $65b75041c1a49413$var$m : '"' === u[3] ? $65b75041c1a49413$var$g : $65b75041c1a49413$var$p) : c === $65b75041c1a49413$var$g || c === $65b75041c1a49413$var$p ? c = $65b75041c1a49413$var$m : c === $65b75041c1a49413$var$v || c === $65b75041c1a49413$var$_ ? c = $65b75041c1a49413$var$f : (c = $65b75041c1a49413$var$m, r = void 0);
        const x = c === $65b75041c1a49413$var$m && t[i + 1].startsWith("/>") ? " " : "";
        l += c === $65b75041c1a49413$var$f ? s + $65b75041c1a49413$var$n : d >= 0 ? (o.push(a), s.slice(0, d) + $65b75041c1a49413$var$e + s.slice(d) + $65b75041c1a49413$var$h + x) : s + $65b75041c1a49413$var$h + (-2 === d ? i : x);
    }
    return [
        $65b75041c1a49413$var$C(t, l + (t[s] || "<?>") + (2 === i ? "</svg>" : "")),
        o
    ];
};
class $65b75041c1a49413$var$V {
    constructor({ strings: t, _$litType$: s }, n){
        let r;
        this.parts = [];
        let c = 0, a = 0;
        const u = t.length - 1, d = this.parts, [f, v] = $65b75041c1a49413$var$P(t, s);
        if (this.el = $65b75041c1a49413$var$V.createElement(f, n), $65b75041c1a49413$var$E.currentNode = this.el.content, 2 === s) {
            const t = this.el.content.firstChild;
            t.replaceWith(...t.childNodes);
        }
        for(; null !== (r = $65b75041c1a49413$var$E.nextNode()) && d.length < u;){
            if (1 === r.nodeType) {
                if (r.hasAttributes()) for (const t of r.getAttributeNames())if (t.endsWith($65b75041c1a49413$var$e)) {
                    const i = v[a++], s = r.getAttribute(t).split($65b75041c1a49413$var$h), e = /([.?@])?(.*)/.exec(i);
                    d.push({
                        type: 1,
                        index: c,
                        name: e[2],
                        strings: s,
                        ctor: "." === e[1] ? $65b75041c1a49413$var$k : "?" === e[1] ? $65b75041c1a49413$var$H : "@" === e[1] ? $65b75041c1a49413$var$I : $65b75041c1a49413$var$R
                    }), r.removeAttribute(t);
                } else t.startsWith($65b75041c1a49413$var$h) && (d.push({
                    type: 6,
                    index: c
                }), r.removeAttribute(t));
                if ($65b75041c1a49413$var$$.test(r.tagName)) {
                    const t = r.textContent.split($65b75041c1a49413$var$h), s = t.length - 1;
                    if (s > 0) {
                        r.textContent = $65b75041c1a49413$var$i ? $65b75041c1a49413$var$i.emptyScript : "";
                        for(let i = 0; i < s; i++)r.append(t[i], $65b75041c1a49413$var$l()), $65b75041c1a49413$var$E.nextNode(), d.push({
                            type: 2,
                            index: ++c
                        });
                        r.append(t[s], $65b75041c1a49413$var$l());
                    }
                }
            } else if (8 === r.nodeType) {
                if (r.data === $65b75041c1a49413$var$o) d.push({
                    type: 2,
                    index: c
                });
                else {
                    let t = -1;
                    for(; -1 !== (t = r.data.indexOf($65b75041c1a49413$var$h, t + 1));)d.push({
                        type: 7,
                        index: c
                    }), t += $65b75041c1a49413$var$h.length - 1;
                }
            }
            c++;
        }
    }
    static createElement(t, i) {
        const s = $65b75041c1a49413$var$r.createElement("template");
        return s.innerHTML = t, s;
    }
}
function $65b75041c1a49413$var$N(t, i, s = t, e) {
    if (i === $65b75041c1a49413$export$9c068ae9cc5db4e8) return i;
    let h = void 0 !== e ? s._$Co?.[e] : s._$Cl;
    const o = $65b75041c1a49413$var$c(i) ? void 0 : i._$litDirective$;
    return h?.constructor !== o && (h?._$AO?.(!1), void 0 === o ? h = void 0 : (h = new o(t), h._$AT(t, s, e)), void 0 !== e ? (s._$Co ??= [])[e] = h : s._$Cl = h), void 0 !== h && (i = $65b75041c1a49413$var$N(t, h._$AS(t, i.values), h, e)), i;
}
class $65b75041c1a49413$var$S {
    constructor(t, i){
        this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = i;
    }
    get parentNode() {
        return this._$AM.parentNode;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    u(t) {
        const { el: { content: i }, parts: s } = this._$AD, e = (t?.creationScope ?? $65b75041c1a49413$var$r).importNode(i, !0);
        $65b75041c1a49413$var$E.currentNode = e;
        let h = $65b75041c1a49413$var$E.nextNode(), o = 0, n = 0, l = s[0];
        for(; void 0 !== l;){
            if (o === l.index) {
                let i;
                2 === l.type ? i = new $65b75041c1a49413$var$M(h, h.nextSibling, this, t) : 1 === l.type ? i = new l.ctor(h, l.name, l.strings, this, t) : 6 === l.type && (i = new $65b75041c1a49413$var$L(h, this, t)), this._$AV.push(i), l = s[++n];
            }
            o !== l?.index && (h = $65b75041c1a49413$var$E.nextNode(), o++);
        }
        return $65b75041c1a49413$var$E.currentNode = $65b75041c1a49413$var$r, e;
    }
    p(t) {
        let i = 0;
        for (const s of this._$AV)void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
    }
}
class $65b75041c1a49413$var$M {
    get _$AU() {
        return this._$AM?._$AU ?? this._$Cv;
    }
    constructor(t, i, s, e){
        this.type = 2, this._$AH = $65b75041c1a49413$export$45b790e32b2810ee, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cv = e?.isConnected ?? !0;
    }
    get parentNode() {
        let t = this._$AA.parentNode;
        const i = this._$AM;
        return void 0 !== i && 11 === t?.nodeType && (t = i.parentNode), t;
    }
    get startNode() {
        return this._$AA;
    }
    get endNode() {
        return this._$AB;
    }
    _$AI(t, i = this) {
        t = $65b75041c1a49413$var$N(this, t, i), $65b75041c1a49413$var$c(t) ? t === $65b75041c1a49413$export$45b790e32b2810ee || null == t || "" === t ? (this._$AH !== $65b75041c1a49413$export$45b790e32b2810ee && this._$AR(), this._$AH = $65b75041c1a49413$export$45b790e32b2810ee) : t !== this._$AH && t !== $65b75041c1a49413$export$9c068ae9cc5db4e8 && this._(t) : void 0 !== t._$litType$ ? this.$(t) : void 0 !== t.nodeType ? this.T(t) : $65b75041c1a49413$var$u(t) ? this.k(t) : this._(t);
    }
    S(t) {
        return this._$AA.parentNode.insertBefore(t, this._$AB);
    }
    T(t) {
        this._$AH !== t && (this._$AR(), this._$AH = this.S(t));
    }
    _(t) {
        this._$AH !== $65b75041c1a49413$export$45b790e32b2810ee && $65b75041c1a49413$var$c(this._$AH) ? this._$AA.nextSibling.data = t : this.T($65b75041c1a49413$var$r.createTextNode(t)), this._$AH = t;
    }
    $(t) {
        const { values: i, _$litType$: s } = t, e = "number" == typeof s ? this._$AC(t) : (void 0 === s.el && (s.el = $65b75041c1a49413$var$V.createElement($65b75041c1a49413$var$C(s.h, s.h[0]), this.options)), s);
        if (this._$AH?._$AD === e) this._$AH.p(i);
        else {
            const t = new $65b75041c1a49413$var$S(e, this), s = t.u(this.options);
            t.p(i), this.T(s), this._$AH = t;
        }
    }
    _$AC(t) {
        let i = $65b75041c1a49413$var$A.get(t.strings);
        return void 0 === i && $65b75041c1a49413$var$A.set(t.strings, i = new $65b75041c1a49413$var$V(t)), i;
    }
    k(t) {
        $65b75041c1a49413$var$a(this._$AH) || (this._$AH = [], this._$AR());
        const i = this._$AH;
        let s, e = 0;
        for (const h of t)e === i.length ? i.push(s = new $65b75041c1a49413$var$M(this.S($65b75041c1a49413$var$l()), this.S($65b75041c1a49413$var$l()), this, this.options)) : s = i[e], s._$AI(h), e++;
        e < i.length && (this._$AR(s && s._$AB.nextSibling, e), i.length = e);
    }
    _$AR(t = this._$AA.nextSibling, i) {
        for(this._$AP?.(!1, !0, i); t && t !== this._$AB;){
            const i = t.nextSibling;
            t.remove(), t = i;
        }
    }
    setConnected(t) {
        void 0 === this._$AM && (this._$Cv = t, this._$AP?.(t));
    }
}
class $65b75041c1a49413$var$R {
    get tagName() {
        return this.element.tagName;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    constructor(t, i, s, e, h){
        this.type = 1, this._$AH = $65b75041c1a49413$export$45b790e32b2810ee, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = h, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String), this.strings = s) : this._$AH = $65b75041c1a49413$export$45b790e32b2810ee;
    }
    _$AI(t, i = this, s, e) {
        const h = this.strings;
        let o = !1;
        if (void 0 === h) t = $65b75041c1a49413$var$N(this, t, i, 0), o = !$65b75041c1a49413$var$c(t) || t !== this._$AH && t !== $65b75041c1a49413$export$9c068ae9cc5db4e8, o && (this._$AH = t);
        else {
            const e = t;
            let n, r;
            for(t = h[0], n = 0; n < h.length - 1; n++)r = $65b75041c1a49413$var$N(this, e[s + n], i, n), r === $65b75041c1a49413$export$9c068ae9cc5db4e8 && (r = this._$AH[n]), o ||= !$65b75041c1a49413$var$c(r) || r !== this._$AH[n], r === $65b75041c1a49413$export$45b790e32b2810ee ? t = $65b75041c1a49413$export$45b790e32b2810ee : t !== $65b75041c1a49413$export$45b790e32b2810ee && (t += (r ?? "") + h[n + 1]), this._$AH[n] = r;
        }
        o && !e && this.j(t);
    }
    j(t) {
        t === $65b75041c1a49413$export$45b790e32b2810ee ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
    }
}
class $65b75041c1a49413$var$k extends $65b75041c1a49413$var$R {
    constructor(){
        super(...arguments), this.type = 3;
    }
    j(t) {
        this.element[this.name] = t === $65b75041c1a49413$export$45b790e32b2810ee ? void 0 : t;
    }
}
class $65b75041c1a49413$var$H extends $65b75041c1a49413$var$R {
    constructor(){
        super(...arguments), this.type = 4;
    }
    j(t) {
        this.element.toggleAttribute(this.name, !!t && t !== $65b75041c1a49413$export$45b790e32b2810ee);
    }
}
class $65b75041c1a49413$var$I extends $65b75041c1a49413$var$R {
    constructor(t, i, s, e, h){
        super(t, i, s, e, h), this.type = 5;
    }
    _$AI(t, i = this) {
        if ((t = $65b75041c1a49413$var$N(this, t, i, 0) ?? $65b75041c1a49413$export$45b790e32b2810ee) === $65b75041c1a49413$export$9c068ae9cc5db4e8) return;
        const s = this._$AH, e = t === $65b75041c1a49413$export$45b790e32b2810ee && s !== $65b75041c1a49413$export$45b790e32b2810ee || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, h = t !== $65b75041c1a49413$export$45b790e32b2810ee && (s === $65b75041c1a49413$export$45b790e32b2810ee || e);
        e && this.element.removeEventListener(this.name, this, s), h && this.element.addEventListener(this.name, this, t), this._$AH = t;
    }
    handleEvent(t) {
        "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
    }
}
class $65b75041c1a49413$var$L {
    constructor(t, i, s){
        this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t) {
        $65b75041c1a49413$var$N(this, t);
    }
}
const $65b75041c1a49413$export$8613d1ca9052b22e = {
    P: $65b75041c1a49413$var$e,
    A: $65b75041c1a49413$var$h,
    C: $65b75041c1a49413$var$o,
    M: 1,
    L: $65b75041c1a49413$var$P,
    R: $65b75041c1a49413$var$S,
    D: $65b75041c1a49413$var$u,
    V: $65b75041c1a49413$var$N,
    I: $65b75041c1a49413$var$M,
    H: $65b75041c1a49413$var$R,
    N: $65b75041c1a49413$var$H,
    U: $65b75041c1a49413$var$I,
    B: $65b75041c1a49413$var$k,
    F: $65b75041c1a49413$var$L
}, $65b75041c1a49413$var$Z = $65b75041c1a49413$var$t.litHtmlPolyfillSupport;
$65b75041c1a49413$var$Z?.($65b75041c1a49413$var$V, $65b75041c1a49413$var$M), ($65b75041c1a49413$var$t.litHtmlVersions ??= []).push("3.1.3");
const $65b75041c1a49413$export$b3890eb0ae9dca99 = (t, i, s)=>{
    const e = s?.renderBefore ?? i;
    let h = e._$litPart$;
    if (void 0 === h) {
        const t = s?.renderBefore ?? null;
        e._$litPart$ = h = new $65b75041c1a49413$var$M(i.insertBefore($65b75041c1a49413$var$l(), t), t, void 0, s ?? {});
    }
    return h._$AI(t), h;
};



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ class $a21ef1f0a94b57e5$export$3bebd1f0e3943985 extends (0, $7599f3c4ce356670$export$befdefbdce210f91) {
    constructor(i){
        if (super(i), this.it = (0, $65b75041c1a49413$export$45b790e32b2810ee), i.type !== (0, $7599f3c4ce356670$export$9ba3b3f20a85bfa).CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
    }
    render(r) {
        if (r === (0, $65b75041c1a49413$export$45b790e32b2810ee) || null == r) return this._t = void 0, this.it = r;
        if (r === (0, $65b75041c1a49413$export$9c068ae9cc5db4e8)) return r;
        if ("string" != typeof r) throw Error(this.constructor.directiveName + "() called with a non-string value");
        if (r === this.it) return this._t;
        this.it = r;
        const s = [
            r
        ];
        return s.raw = s, this._t = {
            _$litType$: this.constructor.resultType,
            strings: s,
            values: []
        };
    }
}
$a21ef1f0a94b57e5$export$3bebd1f0e3943985.directiveName = "unsafeHTML", $a21ef1f0a94b57e5$export$3bebd1f0e3943985.resultType = 1;
const $a21ef1f0a94b57e5$export$b6e69390c23686fb = (0, $7599f3c4ce356670$export$99b43ad1ed32e735)($a21ef1f0a94b57e5$export$3bebd1f0e3943985);


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ class $eb24b44a9eeed7f6$var$t extends (0, $a21ef1f0a94b57e5$export$3bebd1f0e3943985) {
}
$eb24b44a9eeed7f6$var$t.directiveName = "unsafeSVG", $eb24b44a9eeed7f6$var$t.resultType = 2;
const $eb24b44a9eeed7f6$export$1cb98903879b8bf5 = (0, $7599f3c4ce356670$export$99b43ad1ed32e735)($eb24b44a9eeed7f6$var$t);




var $7912f37a9206b86a$exports = {};
$7912f37a9206b86a$exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" width=\"18px\" height=\"18px\"><path d=\"M0 0h24v24H0z\" fill=\"none\"></path><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"></path></svg>\n";


var $fe1dea1a4c07b0fa$exports = {};
$fe1dea1a4c07b0fa$exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"currentColor\" width=\"18\"><path d=\"M0 0h24v24H0z\" fill=\"none\"></path><path d=\"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z\"></path></svg>\n";


var $e6409aa4967aa4d5$exports = {};
$e6409aa4967aa4d5$exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" width=\"18px\" height=\"18px\"><path d=\"M0 0h24v24H0z\" fill=\"none\"></path><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z\"></path></svg>\n";



var $jfuA3 = parcelRequire("jfuA3");
"use strict";


let $723d2faa5111e643$var$origins = [];
let $723d2faa5111e643$var$inputText = "";
let $723d2faa5111e643$var$placeholderURL = "https://hoppscotch.io";
let $723d2faa5111e643$var$errorMessage = "";
const $723d2faa5111e643$var$getOriginList = ()=>new Promise((resolve, _)=>{
        chrome.storage.sync.get([
            "originList"
        ], async (items)=>{
            if (!items || !items.originList) {
                await $723d2faa5111e643$var$storeOriginList((0, $jfuA3.DEFAULT_ORIGIN_LIST));
                resolve((0, $jfuA3.DEFAULT_ORIGIN_LIST));
            }
            resolve(JSON.parse(items.originList));
        });
    });
const $723d2faa5111e643$var$storeOriginList = (originList)=>new Promise((resolve, _)=>{
        chrome.storage.sync.set({
            originList: JSON.stringify(originList)
        }, ()=>{
            resolve();
        });
    });
const $723d2faa5111e643$var$onAddClick = (event)=>{
    event.preventDefault();
    try {
        const parsedURL = new URL($723d2faa5111e643$var$inputText);
        if ($723d2faa5111e643$var$origins.includes(parsedURL.origin)) {
            $723d2faa5111e643$var$errorMessage = "Origin is already on the list";
            (0, $5c5af6691b6c963a$export$b3890eb0ae9dca99)($723d2faa5111e643$var$page(), document.body);
        } else {
            $723d2faa5111e643$var$origins.push(parsedURL.origin);
            $723d2faa5111e643$var$inputText = "";
            $723d2faa5111e643$var$storeOriginList($723d2faa5111e643$var$origins);
            $723d2faa5111e643$var$errorMessage = "";
            (0, $5c5af6691b6c963a$export$b3890eb0ae9dca99)($723d2faa5111e643$var$page(), document.body);
        }
    } catch (e) {
        $723d2faa5111e643$var$errorMessage = "Improper URL";
        (0, $5c5af6691b6c963a$export$b3890eb0ae9dca99)($723d2faa5111e643$var$page(), document.body);
    }
};
const $723d2faa5111e643$var$onInputTextChange = (ev)=>{
    $723d2faa5111e643$var$inputText = ev.target.value;
    $723d2faa5111e643$var$errorMessage = "";
    (0, $5c5af6691b6c963a$export$b3890eb0ae9dca99)($723d2faa5111e643$var$page(), document.body);
};
const $723d2faa5111e643$var$onDeleteOriginClicked = async (index)=>{
    $723d2faa5111e643$var$origins.splice(index, 1);
    await $723d2faa5111e643$var$storeOriginList($723d2faa5111e643$var$origins);
    (0, $5c5af6691b6c963a$export$b3890eb0ae9dca99)($723d2faa5111e643$var$page(), document.body);
};
const $723d2faa5111e643$var$page = ()=>(0, $5c5af6691b6c963a$export$c0bb0b647f701bb5)`
  ${$723d2faa5111e643$var$inputField($723d2faa5111e643$var$inputText, $723d2faa5111e643$var$onInputTextChange, $723d2faa5111e643$var$onAddClick)}
  ${$723d2faa5111e643$var$errorField($723d2faa5111e643$var$errorMessage)} ${$723d2faa5111e643$var$originList($723d2faa5111e643$var$origins, $723d2faa5111e643$var$onDeleteOriginClicked)}
`;
const $723d2faa5111e643$var$errorField = (error)=>(0, $5c5af6691b6c963a$export$c0bb0b647f701bb5)`
  ${error.length > 0 ? (0, $5c5af6691b6c963a$export$c0bb0b647f701bb5)`
        <div class="err">
          ${(0, $eb24b44a9eeed7f6$export$1cb98903879b8bf5)((0, (/*@__PURE__*/$parcel$interopDefault($e6409aa4967aa4d5$exports))))}
          <span class="err-text"> ${error} </span>
        </div>
      ` : (0, $5c5af6691b6c963a$export$c0bb0b647f701bb5)``}
`;
const $723d2faa5111e643$var$inputField = (inputText, onInputTextChange, onAddClick)=>(0, $5c5af6691b6c963a$export$c0bb0b647f701bb5)`
  <form novalidate class="origin-input-box">
    <label class="origin-input-label" for="origin-input">Enter new origin</label>

    <div class="origin-input-wrapper">
      <input id="origin-input" required placeholder="${$723d2faa5111e643$var$placeholderURL}" class="origin-input" .value=${inputText} @input=${onInputTextChange}></input>
      <button class="origin-add" type="submit" @click=${onAddClick}>
        ${(0, $eb24b44a9eeed7f6$export$1cb98903879b8bf5)((0, (/*@__PURE__*/$parcel$interopDefault($7912f37a9206b86a$exports))))}
        <span class="button-text">Add</span>
      </button>
    </div>
  </form>
`;
const $723d2faa5111e643$var$originList = (origins, onDeleteClicked)=>(0, $5c5af6691b6c963a$export$c0bb0b647f701bb5)`
  <label class="origin-input-label">Active origins</label>
  <ul class="origin-list">
    ${origins.map((origin, i)=>(0, $5c5af6691b6c963a$export$c0bb0b647f701bb5)`
        <li class="origin-list-entry">
          <span class="origin-list-entry-origin">${origin}</span>
          <button
            class="origin-delete"
            .disabled=${origin === "https://hoppscotch.io"}
            @click=${()=>onDeleteClicked(i)}
          >
            ${(0, $eb24b44a9eeed7f6$export$1cb98903879b8bf5)((0, (/*@__PURE__*/$parcel$interopDefault($fe1dea1a4c07b0fa$exports))))}
          </button>
        </li>
      `)}
  </ul>
`;
$723d2faa5111e643$var$getOriginList().then((list)=>{
    $723d2faa5111e643$var$origins = list;
    (0, $5c5af6691b6c963a$export$b3890eb0ae9dca99)($723d2faa5111e643$var$page(), document.body);
}).catch(()=>{
// Just fail silently :P
});
chrome.tabs.query({
    active: true
}, (result)=>{
    if (result.length > 0) try {
        if (result[0].url) {
            if (!result[0].url.startsWith("http")) return;
            const url = new URL(result[0].url);
            if (url && url.origin) {
                $723d2faa5111e643$var$placeholderURL = url.origin;
                $723d2faa5111e643$var$inputText = url.origin;
            }
            (0, $5c5af6691b6c963a$export$b3890eb0ae9dca99)($723d2faa5111e643$var$page(), document.body);
        }
    } catch (_e) {}
});

})();
//# sourceMappingURL=popup-script.js.map
