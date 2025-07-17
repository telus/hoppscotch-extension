
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $76a73fc404f16003$var$t = globalThis, $76a73fc404f16003$var$i = $76a73fc404f16003$var$t.trustedTypes, $76a73fc404f16003$var$s = $76a73fc404f16003$var$i ? $76a73fc404f16003$var$i.createPolicy("lit-html", {
    createHTML: (t)=>t
}) : void 0, $76a73fc404f16003$var$e = "$lit$", $76a73fc404f16003$var$h = `lit$${(Math.random() + "").slice(9)}$`, $76a73fc404f16003$var$o = "?" + $76a73fc404f16003$var$h, $76a73fc404f16003$var$n = `<${$76a73fc404f16003$var$o}>`, $76a73fc404f16003$var$r = document, $76a73fc404f16003$var$l = ()=>$76a73fc404f16003$var$r.createComment(""), $76a73fc404f16003$var$c = (t)=>null === t || "object" != typeof t && "function" != typeof t, $76a73fc404f16003$var$a = Array.isArray, $76a73fc404f16003$var$u = (t)=>$76a73fc404f16003$var$a(t) || "function" == typeof t?.[Symbol.iterator], $76a73fc404f16003$var$d = "[ 	\n\f\r]", $76a73fc404f16003$var$f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, $76a73fc404f16003$var$v = /-->/g, $76a73fc404f16003$var$_ = />/g, $76a73fc404f16003$var$m = RegExp(`>|${$76a73fc404f16003$var$d}(?:([^\\s"'>=/]+)(${$76a73fc404f16003$var$d}*=${$76a73fc404f16003$var$d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), $76a73fc404f16003$var$p = /'/g, $76a73fc404f16003$var$g = /"/g, $76a73fc404f16003$var$$ = /^(?:script|style|textarea|title)$/i, $76a73fc404f16003$var$y = (t)=>(i, ...s)=>({
            _$litType$: t,
            strings: i,
            values: s
        }), $76a73fc404f16003$export$c0bb0b647f701bb5 = $76a73fc404f16003$var$y(1), $76a73fc404f16003$export$7ed1367e7fa1ad68 = $76a73fc404f16003$var$y(2), $76a73fc404f16003$export$9c068ae9cc5db4e8 = Symbol.for("lit-noChange"), $76a73fc404f16003$export$45b790e32b2810ee = Symbol.for("lit-nothing"), $76a73fc404f16003$var$A = new WeakMap, $76a73fc404f16003$var$E = $76a73fc404f16003$var$r.createTreeWalker($76a73fc404f16003$var$r, 129);
function $76a73fc404f16003$var$C(t, i) {
    if (!Array.isArray(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== $76a73fc404f16003$var$s ? $76a73fc404f16003$var$s.createHTML(i) : i;
}
const $76a73fc404f16003$var$P = (t, i)=>{
    const s = t.length - 1, o = [];
    let r, l = 2 === i ? "<svg>" : "", c = $76a73fc404f16003$var$f;
    for(let i = 0; i < s; i++){
        const s = t[i];
        let a, u, d = -1, y = 0;
        for(; y < s.length && (c.lastIndex = y, u = c.exec(s), null !== u);)y = c.lastIndex, c === $76a73fc404f16003$var$f ? "!--" === u[1] ? c = $76a73fc404f16003$var$v : void 0 !== u[1] ? c = $76a73fc404f16003$var$_ : void 0 !== u[2] ? ($76a73fc404f16003$var$$.test(u[2]) && (r = RegExp("</" + u[2], "g")), c = $76a73fc404f16003$var$m) : void 0 !== u[3] && (c = $76a73fc404f16003$var$m) : c === $76a73fc404f16003$var$m ? ">" === u[0] ? (c = r ?? $76a73fc404f16003$var$f, d = -1) : void 0 === u[1] ? d = -2 : (d = c.lastIndex - u[2].length, a = u[1], c = void 0 === u[3] ? $76a73fc404f16003$var$m : '"' === u[3] ? $76a73fc404f16003$var$g : $76a73fc404f16003$var$p) : c === $76a73fc404f16003$var$g || c === $76a73fc404f16003$var$p ? c = $76a73fc404f16003$var$m : c === $76a73fc404f16003$var$v || c === $76a73fc404f16003$var$_ ? c = $76a73fc404f16003$var$f : (c = $76a73fc404f16003$var$m, r = void 0);
        const x = c === $76a73fc404f16003$var$m && t[i + 1].startsWith("/>") ? " " : "";
        l += c === $76a73fc404f16003$var$f ? s + $76a73fc404f16003$var$n : d >= 0 ? (o.push(a), s.slice(0, d) + $76a73fc404f16003$var$e + s.slice(d) + $76a73fc404f16003$var$h + x) : s + $76a73fc404f16003$var$h + (-2 === d ? i : x);
    }
    return [
        $76a73fc404f16003$var$C(t, l + (t[s] || "<?>") + (2 === i ? "</svg>" : "")),
        o
    ];
};
class $76a73fc404f16003$var$V {
    constructor({ strings: t, _$litType$: s }, n){
        let r;
        this.parts = [];
        let c = 0, a = 0;
        const u = t.length - 1, d = this.parts, [f, v] = $76a73fc404f16003$var$P(t, s);
        if (this.el = $76a73fc404f16003$var$V.createElement(f, n), $76a73fc404f16003$var$E.currentNode = this.el.content, 2 === s) {
            const t = this.el.content.firstChild;
            t.replaceWith(...t.childNodes);
        }
        for(; null !== (r = $76a73fc404f16003$var$E.nextNode()) && d.length < u;){
            if (1 === r.nodeType) {
                if (r.hasAttributes()) for (const t of r.getAttributeNames())if (t.endsWith($76a73fc404f16003$var$e)) {
                    const i = v[a++], s = r.getAttribute(t).split($76a73fc404f16003$var$h), e = /([.?@])?(.*)/.exec(i);
                    d.push({
                        type: 1,
                        index: c,
                        name: e[2],
                        strings: s,
                        ctor: "." === e[1] ? $76a73fc404f16003$var$k : "?" === e[1] ? $76a73fc404f16003$var$H : "@" === e[1] ? $76a73fc404f16003$var$I : $76a73fc404f16003$var$R
                    }), r.removeAttribute(t);
                } else t.startsWith($76a73fc404f16003$var$h) && (d.push({
                    type: 6,
                    index: c
                }), r.removeAttribute(t));
                if ($76a73fc404f16003$var$$.test(r.tagName)) {
                    const t = r.textContent.split($76a73fc404f16003$var$h), s = t.length - 1;
                    if (s > 0) {
                        r.textContent = $76a73fc404f16003$var$i ? $76a73fc404f16003$var$i.emptyScript : "";
                        for(let i = 0; i < s; i++)r.append(t[i], $76a73fc404f16003$var$l()), $76a73fc404f16003$var$E.nextNode(), d.push({
                            type: 2,
                            index: ++c
                        });
                        r.append(t[s], $76a73fc404f16003$var$l());
                    }
                }
            } else if (8 === r.nodeType) {
                if (r.data === $76a73fc404f16003$var$o) d.push({
                    type: 2,
                    index: c
                });
                else {
                    let t = -1;
                    for(; -1 !== (t = r.data.indexOf($76a73fc404f16003$var$h, t + 1));)d.push({
                        type: 7,
                        index: c
                    }), t += $76a73fc404f16003$var$h.length - 1;
                }
            }
            c++;
        }
    }
    static createElement(t, i) {
        const s = $76a73fc404f16003$var$r.createElement("template");
        return s.innerHTML = t, s;
    }
}
function $76a73fc404f16003$var$N(t, i, s = t, e) {
    if (i === $76a73fc404f16003$export$9c068ae9cc5db4e8) return i;
    let h = void 0 !== e ? s._$Co?.[e] : s._$Cl;
    const o = $76a73fc404f16003$var$c(i) ? void 0 : i._$litDirective$;
    return h?.constructor !== o && (h?._$AO?.(!1), void 0 === o ? h = void 0 : (h = new o(t), h._$AT(t, s, e)), void 0 !== e ? (s._$Co ??= [])[e] = h : s._$Cl = h), void 0 !== h && (i = $76a73fc404f16003$var$N(t, h._$AS(t, i.values), h, e)), i;
}
class $76a73fc404f16003$var$S {
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
        const { el: { content: i }, parts: s } = this._$AD, e = (t?.creationScope ?? $76a73fc404f16003$var$r).importNode(i, !0);
        $76a73fc404f16003$var$E.currentNode = e;
        let h = $76a73fc404f16003$var$E.nextNode(), o = 0, n = 0, l = s[0];
        for(; void 0 !== l;){
            if (o === l.index) {
                let i;
                2 === l.type ? i = new $76a73fc404f16003$var$M(h, h.nextSibling, this, t) : 1 === l.type ? i = new l.ctor(h, l.name, l.strings, this, t) : 6 === l.type && (i = new $76a73fc404f16003$var$L(h, this, t)), this._$AV.push(i), l = s[++n];
            }
            o !== l?.index && (h = $76a73fc404f16003$var$E.nextNode(), o++);
        }
        return $76a73fc404f16003$var$E.currentNode = $76a73fc404f16003$var$r, e;
    }
    p(t) {
        let i = 0;
        for (const s of this._$AV)void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
    }
}
class $76a73fc404f16003$var$M {
    get _$AU() {
        return this._$AM?._$AU ?? this._$Cv;
    }
    constructor(t, i, s, e){
        this.type = 2, this._$AH = $76a73fc404f16003$export$45b790e32b2810ee, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cv = e?.isConnected ?? !0;
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
        t = $76a73fc404f16003$var$N(this, t, i), $76a73fc404f16003$var$c(t) ? t === $76a73fc404f16003$export$45b790e32b2810ee || null == t || "" === t ? (this._$AH !== $76a73fc404f16003$export$45b790e32b2810ee && this._$AR(), this._$AH = $76a73fc404f16003$export$45b790e32b2810ee) : t !== this._$AH && t !== $76a73fc404f16003$export$9c068ae9cc5db4e8 && this._(t) : void 0 !== t._$litType$ ? this.g(t) : void 0 !== t.nodeType ? this.$(t) : $76a73fc404f16003$var$u(t) ? this.T(t) : this._(t);
    }
    k(t) {
        return this._$AA.parentNode.insertBefore(t, this._$AB);
    }
    $(t) {
        this._$AH !== t && (this._$AR(), this._$AH = this.k(t));
    }
    _(t) {
        this._$AH !== $76a73fc404f16003$export$45b790e32b2810ee && $76a73fc404f16003$var$c(this._$AH) ? this._$AA.nextSibling.data = t : this.$($76a73fc404f16003$var$r.createTextNode(t)), this._$AH = t;
    }
    g(t) {
        const { values: i, _$litType$: s } = t, e = "number" == typeof s ? this._$AC(t) : (void 0 === s.el && (s.el = $76a73fc404f16003$var$V.createElement($76a73fc404f16003$var$C(s.h, s.h[0]), this.options)), s);
        if (this._$AH?._$AD === e) this._$AH.p(i);
        else {
            const t = new $76a73fc404f16003$var$S(e, this), s = t.u(this.options);
            t.p(i), this.$(s), this._$AH = t;
        }
    }
    _$AC(t) {
        let i = $76a73fc404f16003$var$A.get(t.strings);
        return void 0 === i && $76a73fc404f16003$var$A.set(t.strings, i = new $76a73fc404f16003$var$V(t)), i;
    }
    T(t) {
        $76a73fc404f16003$var$a(this._$AH) || (this._$AH = [], this._$AR());
        const i = this._$AH;
        let s, e = 0;
        for (const h of t)e === i.length ? i.push(s = new $76a73fc404f16003$var$M(this.k($76a73fc404f16003$var$l()), this.k($76a73fc404f16003$var$l()), this, this.options)) : s = i[e], s._$AI(h), e++;
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
class $76a73fc404f16003$var$R {
    get tagName() {
        return this.element.tagName;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    constructor(t, i, s, e, h){
        this.type = 1, this._$AH = $76a73fc404f16003$export$45b790e32b2810ee, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = h, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String), this.strings = s) : this._$AH = $76a73fc404f16003$export$45b790e32b2810ee;
    }
    _$AI(t, i = this, s, e) {
        const h = this.strings;
        let o = !1;
        if (void 0 === h) t = $76a73fc404f16003$var$N(this, t, i, 0), o = !$76a73fc404f16003$var$c(t) || t !== this._$AH && t !== $76a73fc404f16003$export$9c068ae9cc5db4e8, o && (this._$AH = t);
        else {
            const e = t;
            let n, r;
            for(t = h[0], n = 0; n < h.length - 1; n++)r = $76a73fc404f16003$var$N(this, e[s + n], i, n), r === $76a73fc404f16003$export$9c068ae9cc5db4e8 && (r = this._$AH[n]), o ||= !$76a73fc404f16003$var$c(r) || r !== this._$AH[n], r === $76a73fc404f16003$export$45b790e32b2810ee ? t = $76a73fc404f16003$export$45b790e32b2810ee : t !== $76a73fc404f16003$export$45b790e32b2810ee && (t += (r ?? "") + h[n + 1]), this._$AH[n] = r;
        }
        o && !e && this.j(t);
    }
    j(t) {
        t === $76a73fc404f16003$export$45b790e32b2810ee ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
    }
}
class $76a73fc404f16003$var$k extends $76a73fc404f16003$var$R {
    constructor(){
        super(...arguments), this.type = 3;
    }
    j(t) {
        this.element[this.name] = t === $76a73fc404f16003$export$45b790e32b2810ee ? void 0 : t;
    }
}
class $76a73fc404f16003$var$H extends $76a73fc404f16003$var$R {
    constructor(){
        super(...arguments), this.type = 4;
    }
    j(t) {
        this.element.toggleAttribute(this.name, !!t && t !== $76a73fc404f16003$export$45b790e32b2810ee);
    }
}
class $76a73fc404f16003$var$I extends $76a73fc404f16003$var$R {
    constructor(t, i, s, e, h){
        super(t, i, s, e, h), this.type = 5;
    }
    _$AI(t, i = this) {
        if ((t = $76a73fc404f16003$var$N(this, t, i, 0) ?? $76a73fc404f16003$export$45b790e32b2810ee) === $76a73fc404f16003$export$9c068ae9cc5db4e8) return;
        const s = this._$AH, e = t === $76a73fc404f16003$export$45b790e32b2810ee && s !== $76a73fc404f16003$export$45b790e32b2810ee || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, h = t !== $76a73fc404f16003$export$45b790e32b2810ee && (s === $76a73fc404f16003$export$45b790e32b2810ee || e);
        e && this.element.removeEventListener(this.name, this, s), h && this.element.addEventListener(this.name, this, t), this._$AH = t;
    }
    handleEvent(t) {
        "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
    }
}
class $76a73fc404f16003$var$L {
    constructor(t, i, s){
        this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t) {
        $76a73fc404f16003$var$N(this, t);
    }
}
const $76a73fc404f16003$export$8613d1ca9052b22e = {
    S: $76a73fc404f16003$var$e,
    A: $76a73fc404f16003$var$h,
    P: $76a73fc404f16003$var$o,
    C: 1,
    M: $76a73fc404f16003$var$P,
    L: $76a73fc404f16003$var$S,
    R: $76a73fc404f16003$var$u,
    V: $76a73fc404f16003$var$N,
    D: $76a73fc404f16003$var$M,
    I: $76a73fc404f16003$var$R,
    H: $76a73fc404f16003$var$H,
    N: $76a73fc404f16003$var$I,
    U: $76a73fc404f16003$var$k,
    B: $76a73fc404f16003$var$L
}, $76a73fc404f16003$var$Z = $76a73fc404f16003$var$t.litHtmlPolyfillSupport;
$76a73fc404f16003$var$Z?.($76a73fc404f16003$var$V, $76a73fc404f16003$var$M), ($76a73fc404f16003$var$t.litHtmlVersions ??= []).push("3.0.0");
const $76a73fc404f16003$export$b3890eb0ae9dca99 = (t, i, s)=>{
    const e = s?.renderBefore ?? i;
    let h = e._$litPart$;
    if (void 0 === h) {
        const t = s?.renderBefore ?? null;
        e._$litPart$ = h = new $76a73fc404f16003$var$M(i.insertBefore($76a73fc404f16003$var$l(), t), t, void 0, s ?? {});
    }
    return h._$AI(t), h;
};


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ const $44a02b4f643f8400$export$9ba3b3f20a85bfa = {
    ATTRIBUTE: 1,
    CHILD: 2,
    PROPERTY: 3,
    BOOLEAN_ATTRIBUTE: 4,
    EVENT: 5,
    ELEMENT: 6
}, $44a02b4f643f8400$export$99b43ad1ed32e735 = (t)=>(...e)=>({
            _$litDirective$: t,
            values: e
        });
class $44a02b4f643f8400$export$befdefbdce210f91 {
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
 */ const $f9d8ded0c2f6d64e$var$t = globalThis, $f9d8ded0c2f6d64e$var$i = $f9d8ded0c2f6d64e$var$t.trustedTypes, $f9d8ded0c2f6d64e$var$s = $f9d8ded0c2f6d64e$var$i ? $f9d8ded0c2f6d64e$var$i.createPolicy("lit-html", {
    createHTML: (t)=>t
}) : void 0, $f9d8ded0c2f6d64e$var$e = "$lit$", $f9d8ded0c2f6d64e$var$h = `lit$${Math.random().toFixed(9).slice(2)}$`, $f9d8ded0c2f6d64e$var$o = "?" + $f9d8ded0c2f6d64e$var$h, $f9d8ded0c2f6d64e$var$n = `<${$f9d8ded0c2f6d64e$var$o}>`, $f9d8ded0c2f6d64e$var$r = document, $f9d8ded0c2f6d64e$var$l = ()=>$f9d8ded0c2f6d64e$var$r.createComment(""), $f9d8ded0c2f6d64e$var$c = (t)=>null === t || "object" != typeof t && "function" != typeof t, $f9d8ded0c2f6d64e$var$a = Array.isArray, $f9d8ded0c2f6d64e$var$u = (t)=>$f9d8ded0c2f6d64e$var$a(t) || "function" == typeof t?.[Symbol.iterator], $f9d8ded0c2f6d64e$var$d = "[ 	\n\f\r]", $f9d8ded0c2f6d64e$var$f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, $f9d8ded0c2f6d64e$var$v = /-->/g, $f9d8ded0c2f6d64e$var$_ = />/g, $f9d8ded0c2f6d64e$var$m = RegExp(`>|${$f9d8ded0c2f6d64e$var$d}(?:([^\\s"'>=/]+)(${$f9d8ded0c2f6d64e$var$d}*=${$f9d8ded0c2f6d64e$var$d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`, "g"), $f9d8ded0c2f6d64e$var$p = /'/g, $f9d8ded0c2f6d64e$var$g = /"/g, $f9d8ded0c2f6d64e$var$$ = /^(?:script|style|textarea|title)$/i, $f9d8ded0c2f6d64e$var$y = (t)=>(i, ...s)=>({
            _$litType$: t,
            strings: i,
            values: s
        }), $f9d8ded0c2f6d64e$export$c0bb0b647f701bb5 = $f9d8ded0c2f6d64e$var$y(1), $f9d8ded0c2f6d64e$export$7ed1367e7fa1ad68 = $f9d8ded0c2f6d64e$var$y(2), $f9d8ded0c2f6d64e$export$9c068ae9cc5db4e8 = Symbol.for("lit-noChange"), $f9d8ded0c2f6d64e$export$45b790e32b2810ee = Symbol.for("lit-nothing"), $f9d8ded0c2f6d64e$var$A = new WeakMap, $f9d8ded0c2f6d64e$var$E = $f9d8ded0c2f6d64e$var$r.createTreeWalker($f9d8ded0c2f6d64e$var$r, 129);
function $f9d8ded0c2f6d64e$var$C(t, i) {
    if (!Array.isArray(t) || !t.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== $f9d8ded0c2f6d64e$var$s ? $f9d8ded0c2f6d64e$var$s.createHTML(i) : i;
}
const $f9d8ded0c2f6d64e$var$P = (t, i)=>{
    const s = t.length - 1, o = [];
    let r, l = 2 === i ? "<svg>" : "", c = $f9d8ded0c2f6d64e$var$f;
    for(let i = 0; i < s; i++){
        const s = t[i];
        let a, u, d = -1, y = 0;
        for(; y < s.length && (c.lastIndex = y, u = c.exec(s), null !== u);)y = c.lastIndex, c === $f9d8ded0c2f6d64e$var$f ? "!--" === u[1] ? c = $f9d8ded0c2f6d64e$var$v : void 0 !== u[1] ? c = $f9d8ded0c2f6d64e$var$_ : void 0 !== u[2] ? ($f9d8ded0c2f6d64e$var$$.test(u[2]) && (r = RegExp("</" + u[2], "g")), c = $f9d8ded0c2f6d64e$var$m) : void 0 !== u[3] && (c = $f9d8ded0c2f6d64e$var$m) : c === $f9d8ded0c2f6d64e$var$m ? ">" === u[0] ? (c = r ?? $f9d8ded0c2f6d64e$var$f, d = -1) : void 0 === u[1] ? d = -2 : (d = c.lastIndex - u[2].length, a = u[1], c = void 0 === u[3] ? $f9d8ded0c2f6d64e$var$m : '"' === u[3] ? $f9d8ded0c2f6d64e$var$g : $f9d8ded0c2f6d64e$var$p) : c === $f9d8ded0c2f6d64e$var$g || c === $f9d8ded0c2f6d64e$var$p ? c = $f9d8ded0c2f6d64e$var$m : c === $f9d8ded0c2f6d64e$var$v || c === $f9d8ded0c2f6d64e$var$_ ? c = $f9d8ded0c2f6d64e$var$f : (c = $f9d8ded0c2f6d64e$var$m, r = void 0);
        const x = c === $f9d8ded0c2f6d64e$var$m && t[i + 1].startsWith("/>") ? " " : "";
        l += c === $f9d8ded0c2f6d64e$var$f ? s + $f9d8ded0c2f6d64e$var$n : d >= 0 ? (o.push(a), s.slice(0, d) + $f9d8ded0c2f6d64e$var$e + s.slice(d) + $f9d8ded0c2f6d64e$var$h + x) : s + $f9d8ded0c2f6d64e$var$h + (-2 === d ? i : x);
    }
    return [
        $f9d8ded0c2f6d64e$var$C(t, l + (t[s] || "<?>") + (2 === i ? "</svg>" : "")),
        o
    ];
};
class $f9d8ded0c2f6d64e$var$V {
    constructor({ strings: t, _$litType$: s }, n){
        let r;
        this.parts = [];
        let c = 0, a = 0;
        const u = t.length - 1, d = this.parts, [f, v] = $f9d8ded0c2f6d64e$var$P(t, s);
        if (this.el = $f9d8ded0c2f6d64e$var$V.createElement(f, n), $f9d8ded0c2f6d64e$var$E.currentNode = this.el.content, 2 === s) {
            const t = this.el.content.firstChild;
            t.replaceWith(...t.childNodes);
        }
        for(; null !== (r = $f9d8ded0c2f6d64e$var$E.nextNode()) && d.length < u;){
            if (1 === r.nodeType) {
                if (r.hasAttributes()) for (const t of r.getAttributeNames())if (t.endsWith($f9d8ded0c2f6d64e$var$e)) {
                    const i = v[a++], s = r.getAttribute(t).split($f9d8ded0c2f6d64e$var$h), e = /([.?@])?(.*)/.exec(i);
                    d.push({
                        type: 1,
                        index: c,
                        name: e[2],
                        strings: s,
                        ctor: "." === e[1] ? $f9d8ded0c2f6d64e$var$k : "?" === e[1] ? $f9d8ded0c2f6d64e$var$H : "@" === e[1] ? $f9d8ded0c2f6d64e$var$I : $f9d8ded0c2f6d64e$var$R
                    }), r.removeAttribute(t);
                } else t.startsWith($f9d8ded0c2f6d64e$var$h) && (d.push({
                    type: 6,
                    index: c
                }), r.removeAttribute(t));
                if ($f9d8ded0c2f6d64e$var$$.test(r.tagName)) {
                    const t = r.textContent.split($f9d8ded0c2f6d64e$var$h), s = t.length - 1;
                    if (s > 0) {
                        r.textContent = $f9d8ded0c2f6d64e$var$i ? $f9d8ded0c2f6d64e$var$i.emptyScript : "";
                        for(let i = 0; i < s; i++)r.append(t[i], $f9d8ded0c2f6d64e$var$l()), $f9d8ded0c2f6d64e$var$E.nextNode(), d.push({
                            type: 2,
                            index: ++c
                        });
                        r.append(t[s], $f9d8ded0c2f6d64e$var$l());
                    }
                }
            } else if (8 === r.nodeType) {
                if (r.data === $f9d8ded0c2f6d64e$var$o) d.push({
                    type: 2,
                    index: c
                });
                else {
                    let t = -1;
                    for(; -1 !== (t = r.data.indexOf($f9d8ded0c2f6d64e$var$h, t + 1));)d.push({
                        type: 7,
                        index: c
                    }), t += $f9d8ded0c2f6d64e$var$h.length - 1;
                }
            }
            c++;
        }
    }
    static createElement(t, i) {
        const s = $f9d8ded0c2f6d64e$var$r.createElement("template");
        return s.innerHTML = t, s;
    }
}
function $f9d8ded0c2f6d64e$var$N(t, i, s = t, e) {
    if (i === $f9d8ded0c2f6d64e$export$9c068ae9cc5db4e8) return i;
    let h = void 0 !== e ? s._$Co?.[e] : s._$Cl;
    const o = $f9d8ded0c2f6d64e$var$c(i) ? void 0 : i._$litDirective$;
    return h?.constructor !== o && (h?._$AO?.(!1), void 0 === o ? h = void 0 : (h = new o(t), h._$AT(t, s, e)), void 0 !== e ? (s._$Co ??= [])[e] = h : s._$Cl = h), void 0 !== h && (i = $f9d8ded0c2f6d64e$var$N(t, h._$AS(t, i.values), h, e)), i;
}
class $f9d8ded0c2f6d64e$var$S {
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
        const { el: { content: i }, parts: s } = this._$AD, e = (t?.creationScope ?? $f9d8ded0c2f6d64e$var$r).importNode(i, !0);
        $f9d8ded0c2f6d64e$var$E.currentNode = e;
        let h = $f9d8ded0c2f6d64e$var$E.nextNode(), o = 0, n = 0, l = s[0];
        for(; void 0 !== l;){
            if (o === l.index) {
                let i;
                2 === l.type ? i = new $f9d8ded0c2f6d64e$var$M(h, h.nextSibling, this, t) : 1 === l.type ? i = new l.ctor(h, l.name, l.strings, this, t) : 6 === l.type && (i = new $f9d8ded0c2f6d64e$var$L(h, this, t)), this._$AV.push(i), l = s[++n];
            }
            o !== l?.index && (h = $f9d8ded0c2f6d64e$var$E.nextNode(), o++);
        }
        return $f9d8ded0c2f6d64e$var$E.currentNode = $f9d8ded0c2f6d64e$var$r, e;
    }
    p(t) {
        let i = 0;
        for (const s of this._$AV)void 0 !== s && (void 0 !== s.strings ? (s._$AI(t, s, i), i += s.strings.length - 2) : s._$AI(t[i])), i++;
    }
}
class $f9d8ded0c2f6d64e$var$M {
    get _$AU() {
        return this._$AM?._$AU ?? this._$Cv;
    }
    constructor(t, i, s, e){
        this.type = 2, this._$AH = $f9d8ded0c2f6d64e$export$45b790e32b2810ee, this._$AN = void 0, this._$AA = t, this._$AB = i, this._$AM = s, this.options = e, this._$Cv = e?.isConnected ?? !0;
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
        t = $f9d8ded0c2f6d64e$var$N(this, t, i), $f9d8ded0c2f6d64e$var$c(t) ? t === $f9d8ded0c2f6d64e$export$45b790e32b2810ee || null == t || "" === t ? (this._$AH !== $f9d8ded0c2f6d64e$export$45b790e32b2810ee && this._$AR(), this._$AH = $f9d8ded0c2f6d64e$export$45b790e32b2810ee) : t !== this._$AH && t !== $f9d8ded0c2f6d64e$export$9c068ae9cc5db4e8 && this._(t) : void 0 !== t._$litType$ ? this.$(t) : void 0 !== t.nodeType ? this.T(t) : $f9d8ded0c2f6d64e$var$u(t) ? this.k(t) : this._(t);
    }
    S(t) {
        return this._$AA.parentNode.insertBefore(t, this._$AB);
    }
    T(t) {
        this._$AH !== t && (this._$AR(), this._$AH = this.S(t));
    }
    _(t) {
        this._$AH !== $f9d8ded0c2f6d64e$export$45b790e32b2810ee && $f9d8ded0c2f6d64e$var$c(this._$AH) ? this._$AA.nextSibling.data = t : this.T($f9d8ded0c2f6d64e$var$r.createTextNode(t)), this._$AH = t;
    }
    $(t) {
        const { values: i, _$litType$: s } = t, e = "number" == typeof s ? this._$AC(t) : (void 0 === s.el && (s.el = $f9d8ded0c2f6d64e$var$V.createElement($f9d8ded0c2f6d64e$var$C(s.h, s.h[0]), this.options)), s);
        if (this._$AH?._$AD === e) this._$AH.p(i);
        else {
            const t = new $f9d8ded0c2f6d64e$var$S(e, this), s = t.u(this.options);
            t.p(i), this.T(s), this._$AH = t;
        }
    }
    _$AC(t) {
        let i = $f9d8ded0c2f6d64e$var$A.get(t.strings);
        return void 0 === i && $f9d8ded0c2f6d64e$var$A.set(t.strings, i = new $f9d8ded0c2f6d64e$var$V(t)), i;
    }
    k(t) {
        $f9d8ded0c2f6d64e$var$a(this._$AH) || (this._$AH = [], this._$AR());
        const i = this._$AH;
        let s, e = 0;
        for (const h of t)e === i.length ? i.push(s = new $f9d8ded0c2f6d64e$var$M(this.S($f9d8ded0c2f6d64e$var$l()), this.S($f9d8ded0c2f6d64e$var$l()), this, this.options)) : s = i[e], s._$AI(h), e++;
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
class $f9d8ded0c2f6d64e$var$R {
    get tagName() {
        return this.element.tagName;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    constructor(t, i, s, e, h){
        this.type = 1, this._$AH = $f9d8ded0c2f6d64e$export$45b790e32b2810ee, this._$AN = void 0, this.element = t, this.name = i, this._$AM = e, this.options = h, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this._$AH = Array(s.length - 1).fill(new String), this.strings = s) : this._$AH = $f9d8ded0c2f6d64e$export$45b790e32b2810ee;
    }
    _$AI(t, i = this, s, e) {
        const h = this.strings;
        let o = !1;
        if (void 0 === h) t = $f9d8ded0c2f6d64e$var$N(this, t, i, 0), o = !$f9d8ded0c2f6d64e$var$c(t) || t !== this._$AH && t !== $f9d8ded0c2f6d64e$export$9c068ae9cc5db4e8, o && (this._$AH = t);
        else {
            const e = t;
            let n, r;
            for(t = h[0], n = 0; n < h.length - 1; n++)r = $f9d8ded0c2f6d64e$var$N(this, e[s + n], i, n), r === $f9d8ded0c2f6d64e$export$9c068ae9cc5db4e8 && (r = this._$AH[n]), o ||= !$f9d8ded0c2f6d64e$var$c(r) || r !== this._$AH[n], r === $f9d8ded0c2f6d64e$export$45b790e32b2810ee ? t = $f9d8ded0c2f6d64e$export$45b790e32b2810ee : t !== $f9d8ded0c2f6d64e$export$45b790e32b2810ee && (t += (r ?? "") + h[n + 1]), this._$AH[n] = r;
        }
        o && !e && this.j(t);
    }
    j(t) {
        t === $f9d8ded0c2f6d64e$export$45b790e32b2810ee ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
    }
}
class $f9d8ded0c2f6d64e$var$k extends $f9d8ded0c2f6d64e$var$R {
    constructor(){
        super(...arguments), this.type = 3;
    }
    j(t) {
        this.element[this.name] = t === $f9d8ded0c2f6d64e$export$45b790e32b2810ee ? void 0 : t;
    }
}
class $f9d8ded0c2f6d64e$var$H extends $f9d8ded0c2f6d64e$var$R {
    constructor(){
        super(...arguments), this.type = 4;
    }
    j(t) {
        this.element.toggleAttribute(this.name, !!t && t !== $f9d8ded0c2f6d64e$export$45b790e32b2810ee);
    }
}
class $f9d8ded0c2f6d64e$var$I extends $f9d8ded0c2f6d64e$var$R {
    constructor(t, i, s, e, h){
        super(t, i, s, e, h), this.type = 5;
    }
    _$AI(t, i = this) {
        if ((t = $f9d8ded0c2f6d64e$var$N(this, t, i, 0) ?? $f9d8ded0c2f6d64e$export$45b790e32b2810ee) === $f9d8ded0c2f6d64e$export$9c068ae9cc5db4e8) return;
        const s = this._$AH, e = t === $f9d8ded0c2f6d64e$export$45b790e32b2810ee && s !== $f9d8ded0c2f6d64e$export$45b790e32b2810ee || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, h = t !== $f9d8ded0c2f6d64e$export$45b790e32b2810ee && (s === $f9d8ded0c2f6d64e$export$45b790e32b2810ee || e);
        e && this.element.removeEventListener(this.name, this, s), h && this.element.addEventListener(this.name, this, t), this._$AH = t;
    }
    handleEvent(t) {
        "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
    }
}
class $f9d8ded0c2f6d64e$var$L {
    constructor(t, i, s){
        this.element = t, this.type = 6, this._$AN = void 0, this._$AM = i, this.options = s;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t) {
        $f9d8ded0c2f6d64e$var$N(this, t);
    }
}
const $f9d8ded0c2f6d64e$export$8613d1ca9052b22e = {
    P: $f9d8ded0c2f6d64e$var$e,
    A: $f9d8ded0c2f6d64e$var$h,
    C: $f9d8ded0c2f6d64e$var$o,
    M: 1,
    L: $f9d8ded0c2f6d64e$var$P,
    R: $f9d8ded0c2f6d64e$var$S,
    D: $f9d8ded0c2f6d64e$var$u,
    V: $f9d8ded0c2f6d64e$var$N,
    I: $f9d8ded0c2f6d64e$var$M,
    H: $f9d8ded0c2f6d64e$var$R,
    N: $f9d8ded0c2f6d64e$var$H,
    U: $f9d8ded0c2f6d64e$var$I,
    B: $f9d8ded0c2f6d64e$var$k,
    F: $f9d8ded0c2f6d64e$var$L
}, $f9d8ded0c2f6d64e$var$Z = $f9d8ded0c2f6d64e$var$t.litHtmlPolyfillSupport;
$f9d8ded0c2f6d64e$var$Z?.($f9d8ded0c2f6d64e$var$V, $f9d8ded0c2f6d64e$var$M), ($f9d8ded0c2f6d64e$var$t.litHtmlVersions ??= []).push("3.1.3");
const $f9d8ded0c2f6d64e$export$b3890eb0ae9dca99 = (t, i, s)=>{
    const e = s?.renderBefore ?? i;
    let h = e._$litPart$;
    if (void 0 === h) {
        const t = s?.renderBefore ?? null;
        e._$litPart$ = h = new $f9d8ded0c2f6d64e$var$M(i.insertBefore($f9d8ded0c2f6d64e$var$l(), t), t, void 0, s ?? {});
    }
    return h._$AI(t), h;
};



/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ class $552d97798370706e$export$3bebd1f0e3943985 extends (0, $44a02b4f643f8400$export$befdefbdce210f91) {
    constructor(i){
        if (super(i), this.it = (0, $f9d8ded0c2f6d64e$export$45b790e32b2810ee), i.type !== (0, $44a02b4f643f8400$export$9ba3b3f20a85bfa).CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
    }
    render(r) {
        if (r === (0, $f9d8ded0c2f6d64e$export$45b790e32b2810ee) || null == r) return this._t = void 0, this.it = r;
        if (r === (0, $f9d8ded0c2f6d64e$export$9c068ae9cc5db4e8)) return r;
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
$552d97798370706e$export$3bebd1f0e3943985.directiveName = "unsafeHTML", $552d97798370706e$export$3bebd1f0e3943985.resultType = 1;
const $552d97798370706e$export$b6e69390c23686fb = (0, $44a02b4f643f8400$export$99b43ad1ed32e735)($552d97798370706e$export$3bebd1f0e3943985);


/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ class $ca8c51f5212a09d5$var$t extends (0, $552d97798370706e$export$3bebd1f0e3943985) {
}
$ca8c51f5212a09d5$var$t.directiveName = "unsafeSVG", $ca8c51f5212a09d5$var$t.resultType = 2;
const $ca8c51f5212a09d5$export$1cb98903879b8bf5 = (0, $44a02b4f643f8400$export$99b43ad1ed32e735)($ca8c51f5212a09d5$var$t);




var $4f26c7c8095888a3$exports = {};
$4f26c7c8095888a3$exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" width=\"18px\" height=\"18px\"><path d=\"M0 0h24v24H0z\" fill=\"none\"></path><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"></path></svg>\n";


var $a2681c76b0fe8390$exports = {};
$a2681c76b0fe8390$exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"currentColor\" width=\"18\"><path d=\"M0 0h24v24H0z\" fill=\"none\"></path><path d=\"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z\"></path></svg>\n";


var $c01262e8de576e49$exports = {};
$c01262e8de576e49$exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\" width=\"18px\" height=\"18px\"><path d=\"M0 0h24v24H0z\" fill=\"none\"></path><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z\"></path></svg>\n";


const $bf37cc07f39ab2c9$export$90f2c8d1f20401a = [
    "https://hoppscotch.io"
];


"use strict";


let $f02d8b45a2a641c1$var$origins = [];
let $f02d8b45a2a641c1$var$inputText = "";
let $f02d8b45a2a641c1$var$placeholderURL = "https://hoppscotch.io";
let $f02d8b45a2a641c1$var$errorMessage = "";
const $f02d8b45a2a641c1$var$getOriginList = ()=>new Promise((resolve, _)=>{
        chrome.storage.sync.get([
            "originList"
        ], async (items)=>{
            if (!items || !items.originList) {
                await $f02d8b45a2a641c1$var$storeOriginList((0, $bf37cc07f39ab2c9$export$90f2c8d1f20401a));
                resolve((0, $bf37cc07f39ab2c9$export$90f2c8d1f20401a));
            }
            resolve(JSON.parse(items.originList));
        });
    });
const $f02d8b45a2a641c1$var$storeOriginList = (originList)=>new Promise((resolve, _)=>{
        chrome.storage.sync.set({
            originList: JSON.stringify(originList)
        }, ()=>{
            resolve();
        });
    });
const $f02d8b45a2a641c1$var$onAddClick = (event)=>{
    event.preventDefault();
    try {
        const parsedURL = new URL($f02d8b45a2a641c1$var$inputText);
        if ($f02d8b45a2a641c1$var$origins.includes(parsedURL.origin)) {
            $f02d8b45a2a641c1$var$errorMessage = "Origin is already on the list";
            (0, $76a73fc404f16003$export$b3890eb0ae9dca99)($f02d8b45a2a641c1$var$page(), document.body);
        } else {
            $f02d8b45a2a641c1$var$origins.push(parsedURL.origin);
            $f02d8b45a2a641c1$var$inputText = "";
            $f02d8b45a2a641c1$var$storeOriginList($f02d8b45a2a641c1$var$origins);
            $f02d8b45a2a641c1$var$errorMessage = "";
            (0, $76a73fc404f16003$export$b3890eb0ae9dca99)($f02d8b45a2a641c1$var$page(), document.body);
        }
    } catch (e) {
        $f02d8b45a2a641c1$var$errorMessage = "Improper URL";
        (0, $76a73fc404f16003$export$b3890eb0ae9dca99)($f02d8b45a2a641c1$var$page(), document.body);
    }
};
const $f02d8b45a2a641c1$var$onInputTextChange = (ev)=>{
    $f02d8b45a2a641c1$var$inputText = ev.target.value;
    $f02d8b45a2a641c1$var$errorMessage = "";
    (0, $76a73fc404f16003$export$b3890eb0ae9dca99)($f02d8b45a2a641c1$var$page(), document.body);
};
const $f02d8b45a2a641c1$var$onDeleteOriginClicked = async (index)=>{
    $f02d8b45a2a641c1$var$origins.splice(index, 1);
    await $f02d8b45a2a641c1$var$storeOriginList($f02d8b45a2a641c1$var$origins);
    (0, $76a73fc404f16003$export$b3890eb0ae9dca99)($f02d8b45a2a641c1$var$page(), document.body);
};
const $f02d8b45a2a641c1$var$page = ()=>(0, $76a73fc404f16003$export$c0bb0b647f701bb5)`
  ${$f02d8b45a2a641c1$var$inputField($f02d8b45a2a641c1$var$inputText, $f02d8b45a2a641c1$var$onInputTextChange, $f02d8b45a2a641c1$var$onAddClick)}
  ${$f02d8b45a2a641c1$var$errorField($f02d8b45a2a641c1$var$errorMessage)} ${$f02d8b45a2a641c1$var$originList($f02d8b45a2a641c1$var$origins, $f02d8b45a2a641c1$var$onDeleteOriginClicked)}
`;
const $f02d8b45a2a641c1$var$errorField = (error)=>(0, $76a73fc404f16003$export$c0bb0b647f701bb5)`
  ${error.length > 0 ? (0, $76a73fc404f16003$export$c0bb0b647f701bb5)`
        <div class="err">
          ${(0, $ca8c51f5212a09d5$export$1cb98903879b8bf5)((0, (/*@__PURE__*/$parcel$interopDefault($c01262e8de576e49$exports))))}
          <span class="err-text"> ${error} </span>
        </div>
      ` : (0, $76a73fc404f16003$export$c0bb0b647f701bb5)``}
`;
const $f02d8b45a2a641c1$var$inputField = (inputText, onInputTextChange, onAddClick)=>(0, $76a73fc404f16003$export$c0bb0b647f701bb5)`
  <form novalidate class="origin-input-box">
    <label class="origin-input-label" for="origin-input">Enter new origin</label>

    <div class="origin-input-wrapper">
      <input id="origin-input" required placeholder="${$f02d8b45a2a641c1$var$placeholderURL}" class="origin-input" .value=${inputText} @input=${onInputTextChange}></input>
      <button class="origin-add" type="submit" @click=${onAddClick}>
        ${(0, $ca8c51f5212a09d5$export$1cb98903879b8bf5)((0, (/*@__PURE__*/$parcel$interopDefault($4f26c7c8095888a3$exports))))}
        <span class="button-text">Add</span>
      </button>
    </div>
  </form>
`;
const $f02d8b45a2a641c1$var$originList = (origins, onDeleteClicked)=>(0, $76a73fc404f16003$export$c0bb0b647f701bb5)`
  <label class="origin-input-label">Active origins</label>
  <ul class="origin-list">
    ${origins.map((origin, i)=>(0, $76a73fc404f16003$export$c0bb0b647f701bb5)`
        <li class="origin-list-entry">
          <span class="origin-list-entry-origin">${origin}</span>
          <button
            class="origin-delete"
            .disabled=${origin === "https://hoppscotch.io"}
            @click=${()=>onDeleteClicked(i)}
          >
            ${(0, $ca8c51f5212a09d5$export$1cb98903879b8bf5)((0, (/*@__PURE__*/$parcel$interopDefault($a2681c76b0fe8390$exports))))}
          </button>
        </li>
      `)}
  </ul>
`;
$f02d8b45a2a641c1$var$getOriginList().then((list)=>{
    $f02d8b45a2a641c1$var$origins = list;
    (0, $76a73fc404f16003$export$b3890eb0ae9dca99)($f02d8b45a2a641c1$var$page(), document.body);
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
                $f02d8b45a2a641c1$var$placeholderURL = url.origin;
                $f02d8b45a2a641c1$var$inputText = url.origin;
            }
            (0, $76a73fc404f16003$export$b3890eb0ae9dca99)($f02d8b45a2a641c1$var$page(), document.body);
        }
    } catch (_e) {}
});


//# sourceMappingURL=popup.37b8c9c2.js.map
