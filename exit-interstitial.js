(() => {
    var s = Function.prototype.bind.bind(Function.prototype.call),
        Wt = (i, c) => {
            for (let d = i; d; d = Object.getPrototypeOf(d)) {
                let h = Object.getOwnPropertyDescriptor(d, c);
                if (h) return h
            }
            throw new TypeError(`${c} is not defined`)
        },
        a = (i, c) => s(Wt(i, c).get),
        H = (i, c) => s(Wt(i, c).set);
    var It = s(String.prototype.endsWith),
        cn = s(String.prototype.slice),
        S = s(RegExp.prototype.exec),
        an = /^_(self|top|parent)$/i,
        ln = /(^|\s)noreferrer(\s|$)/i,
        Ct = /^(no-referrer(-when-downgrade)?|same-origin|(strict-)?origin(-when-cross-origin)?|unsafe-url)$/i,
        un = /^(never|default|always|origin-when-crossorigin)$/i,
        Ft = /^(no-referrer|same-origin|never)$/i,
        pn = /\s(musical_ly|trill)_|\sBytedanceWebview\//,
        Tt = i => It(i, ".") ? cn(i, 0, -1) : i,
        Mt = i => {
            let c = Tt(i),
                d = `.${c}`;
            return h => {
                let _ = Tt(h);
                return _ === c || It(_, d)
            }
        },
        Dt = (i, c, d) => i !== void 0 && (i.protocol === "https:" || i.protocol === "http:") && i.origin !== c && !d(i.hostname),
        nt = (i, c, d) => i !== null && S(ln, i) !== null ? !0 : c !== null && S(Ct, c) !== null ? S(Ft, c) !== null : d,
        Ht = (i, c) => S(Ct, i) !== null || S(un, i) !== null ? S(Ft, i) !== null : c,
        W = (i, {
            metaKey: c,
            ctrlKey: d,
            shiftKey: h,
            button: _
        }) => i && S(an, i) === null ? i : c || d || h || _ === 1 ? "_blank" : "",
        Ut = i => S(pn, i) !== null;
    var fn = "http://www.w3.org/2000/svg",
        dn = "http://www.w3.org/1999/xlink",
        ot = ["rel", "referrerpolicy", "download", "ping", "hreflang", "type"],
        gn = Object.freeze({
            __proto__: null,
            metaKey: !1,
            ctrlKey: !1,
            shiftKey: !1,
            button: 0
        });

    function Kt(i) {
        let c = window;
        if (c.top !== c) return;
        let d = document,
            h = c.navigation,
            _ = location.origin,
            b = URL,
            U = a(b.prototype, "href"),
            $t = a(b.prototype, "origin"),
            Bt = a(b.prototype, "protocol"),
            qt = a(b.prototype, "hostname"),
            Gt = H(b.prototype, "search"),
            rt = FormData,
            Yt = URLSearchParams,
            jt = s(URLSearchParams.prototype.toString),
            Vt = s(URLSearchParams.prototype.append),
            st = s(Event.prototype.preventDefault),
            zt = s(Event.prototype.stopPropagation),
            ct = s(Event.prototype.stopImmediatePropagation),
            K = s(Event.prototype.composedPath),
            Xt = a(Event.prototype, "type"),
            Jt = a(Event.prototype, "target"),
            it = typeof SubmitEvent == "function" ? a(SubmitEvent.prototype, "submitter") : void 0,
            Qt = typeof File == "function" ? a(File.prototype, "name") : void 0,
            Zt = a(HTMLButtonElement.prototype, "form"),
            te = a(HTMLInputElement.prototype, "form"),
            ee = a(Event.prototype, "cancelable"),
            at = a(Event.prototype, "defaultPrevented"),
            ne = a(Event.prototype, "bubbles"),
            oe = a(Event.prototype, "currentTarget"),
            re = a(Event.prototype, "eventPhase"),
            {
                CAPTURING_PHASE: se
            } = Event,
            lt = a(Event.prototype, "cancelBubble"),
            ce = H(Event.prototype, "cancelBubble"),
            ie = a(MouseEvent.prototype, "button"),
            ae = a(MouseEvent.prototype, "metaKey"),
            le = a(MouseEvent.prototype, "ctrlKey"),
            ue = a(MouseEvent.prototype, "shiftKey"),
            pe = h && a(NavigateEvent.prototype, "destination"),
            fe = h && a(NavigationDestination.prototype, "url"),
            ut = h && a(NavigateEvent.prototype, "navigationType"),
            de = h && a(NavigateEvent.prototype, "formData"),
            pt = h && "sourceElement" in NavigateEvent.prototype ? a(NavigateEvent.prototype, "sourceElement") : void 0,
            w = s(Element.prototype.getAttribute),
            ge = s(Element.prototype.getAttributeNS),
            $ = s(Element.prototype.setAttribute),
            ye = a(Element.prototype, "localName"),
            he = a(Element.prototype, "namespaceURI"),
            me = s(Document.prototype.querySelector),
            we = s(Document.prototype.querySelectorAll),
            Ee = a(NodeList.prototype, "length"),
            _e = s(NodeList.prototype.item),
            T = a(Node.prototype, "baseURI"),
            I = a(Node.prototype, "isConnected"),
            be = s(Document.prototype.createElement),
            ve = s(HTMLElement.prototype.click),
            Se = s(c.open),
            ke = s(location.assign),
            Ne = s(location.replace),
            Re = encodeURIComponent,
            Oe = s(String.prototype.startsWith),
            ft = s(String.prototype.charCodeAt),
            dt = s(String.prototype.slice),
            Le = s(String.prototype.toLowerCase),
            B = s(c.setTimeout),
            Pe = s(c.queueMicrotask),
            Ae = s(c.addEventListener),
            xe = s(c.removeEventListener),
            gt = s(EventTarget.prototype.addEventListener),
            yt = s(EventTarget.prototype.removeEventListener),
            ht = Object.defineProperties,
            q = t => {
                let e = [],
                    n = [HTMLElement.prototype, SVGElement.prototype, Document.prototype, c];
                for (let o = 0; o < n.length; o += 1) try {
                    e[e.length] = {
                        get: a(n[o], t),
                        set: H(n[o], t)
                    }
                } catch {}
                return e
            },
            We = {
                click: q("onclick"),
                auxclick: q("onauxclick"),
                submit: q("onsubmit")
            },
            C = WeakMap,
            Te = WeakSet,
            G = s(WeakMap.prototype.get),
            mt = s(WeakMap.prototype.set),
            wt = s(WeakMap.prototype.delete),
            Ie = s(WeakSet.prototype.add),
            Ce = s(WeakSet.prototype.has),
            Fe = Mt(i.site),
            Et = Ut(navigator.userAgent),
            _t = U(new b(i.exitPath, _)),
            Me = `${_t}?`,
            R = (t, e) => {
                try {
                    let n = new b(t, e);
                    return {
                        href: U(n),
                        origin: $t(n),
                        protocol: Bt(n),
                        hostname: qt(n)
                    }
                } catch {
                    return
                }
            },
            De = (t, e, n) => {
                let o = n ? "&noreferrer=1" : "";
                return `${_t}?q=${Re(t.href)}&trigger=${e}${o}`
            },
            Y = () => {
                let t = we(d, 'meta[name="referrer" i][content]'),
                    e = !1;
                for (let n = 0; n < Ee(t); n += 1) e = Ht(w(_e(t, n), "content"), e);
                return e
            },
            j = (t, e, {
                target: n,
                noReferrer: o,
                replaces: r
            }) => {
                let u = De(t, e, o);
                if (n) {
                    Se(c, u, n, "noopener");
                    return
                }(r ? Ne : ke)(location, u)
            },
            F = t => Dt(t, _, Fe),
            M = 0,
            V, z = !1,
            He = t => {
                if (M > 0) {
                    V = t;
                    return
                }
                t()
            },
            Ue = t => {
                if (M -= 1, t && (z = !0), M > 0) return;
                let e = z ? void 0 : V;
                V = void 0, z = !1, e && e()
            },
            Ke = t => t !== void 0 && Oe(t.href, Me),
            P = t => {
                try {
                    return ye(t)
                } catch {
                    return
                }
            },
            bt = t => nt(w(t, "rel"), w(t, "referrerpolicy"), Y()),
            $e = t => {
                let e = pt ? pt(t) : null,
                    n = e === null ? void 0 : P(e);
                return n === "a" || n === "area" ? bt(e) : Y()
            },
            Be = t => {
                let e = R(fe(pe(t)));
                if (Ke(e)) {
                    ct(t);
                    return
                }
                if (!ee(t) || ut(t) === "traverse" || !F(e) || de(t) !== null) return;
                st(t);
                let n = {
                    target: "",
                    noReferrer: $e(t),
                    replaces: ut(t) === "replace"
                };
                He(() => j(e, "navigate", n))
            },
            A = t => {
                let e = w(t, "href");
                return e === null && he(t) === fn ? ge(t, dn, "href") : e
            },
            qe = t => {
                let e = K(t);
                for (let n = 0; n < e.length; n += 1) {
                    let o = e[n],
                        r = P(o);
                    if (r === "a" || r === "area") {
                        let u = A(o);
                        if (u !== null) return {
                            node: o,
                            href: u
                        }
                    }
                }
            },
            vt = () => {
                let t = me(d, "base[target]");
                return t ? w(t, "target") : ""
            },
            X = t => w(t, "target") ? ? vt(),
            Ge = t => {
                try {
                    return {
                        metaKey: ae(t),
                        ctrlKey: le(t),
                        shiftKey: ue(t),
                        button: ie(t)
                    }
                } catch {
                    return
                }
            },
            St = new Te,
            Ye = t => {
                let e = !1,
                    n = () => {
                        e = !0
                    },
                    o = () => e || Ce(St, t);
                return ht(t, {
                    __proto__: null,
                    preventDefault: {
                        __proto__: null,
                        configurable: !0,
                        value: n
                    },
                    defaultPrevented: {
                        __proto__: null,
                        configurable: !0,
                        get: o
                    },
                    returnValue: {
                        __proto__: null,
                        configurable: !0,
                        get: () => !o(),
                        set: r => {
                            r || n()
                        }
                    }
                }), o
            },
            je = {
                click: new C,
                auxclick: new C,
                submit: new C
            },
            Ve = (t, e) => {
                let n = We[t],
                    o = je[t],
                    r = [],
                    u = f => {
                        for (let p = 0; p < r.length; p += 1)
                            if (r[p] === f) return !0;
                        return !1
                    },
                    g = (f, p, E) => {
                        let m = s(E);

                        function D(N) {
                            let O = m(this, N);
                            return O === !1 && typeof N == "object" && N !== null && Ie(St, N), O
                        }
                        return {
                            target: f,
                            accessor: p,
                            handler: E,
                            wrapper: D,
                            inFlight: 0
                        }
                    },
                    v = () => {
                        for (let f = 0; f < e.length; f += 1)
                            for (let p = 0; p < n.length; p += 1) {
                                let E;
                                try {
                                    E = n[p].get(e[f])
                                } catch {
                                    continue
                                }
                                if (typeof E == "function") {
                                    let m = G(o, e[f]);
                                    (!m || m.wrapper !== E) && (m = g(e[f], n[p], E), n[p].set(e[f], m.wrapper), mt(o, e[f], m)), u(m) || (m.inFlight += 1, r[r.length] = m)
                                }
                                break
                            }
                    };
                return v(), {
                    wrap: v,
                    unwrap: () => {
                        for (let f = 0; f < r.length; f += 1) {
                            let p = r[f];
                            p.inFlight -= 1, !(p.inFlight > 0) && (G(o, p.target) === p && wt(o, p.target), p.accessor.get(p.target) === p.wrapper && p.accessor.set(p.target, p.handler))
                        }
                    }
                }
            },
            ze = (t, e, n) => {
                let o = A(t),
                    r = o === null ? void 0 : R(o, T(d));
                if (!F(r)) return;
                let u = {
                    target: Et ? "" : W(X(t), n),
                    noReferrer: bt(t),
                    replaces: !1
                };
                return {
                    __proto__: null,
                    inWindow: u.target === "",
                    go: () => j(r, e, u)
                }
            },
            kt = t => {
                let e = A(t);
                if (e === null || w(t, "download") === null) return !1;
                let n = R(e, T(d));
                return n !== void 0 && (n.origin === _ || n.protocol === "blob:" || n.protocol === "data:")
            },
            Xe = (t, e) => A(t) !== null && !kt(t) && W(X(t), e) === "",
            Je = (t, e) => {
                let n = A(t);
                if (n === null) return !1;
                let o = be(d, "a"),
                    r = W(X(t), e);
                $(o, "href", n), $(o, "target", r || "_self");
                for (let u = 0; u < ot.length; u += 1) {
                    let g = w(t, ot[u]);
                    g !== null && $(o, ot[u], g)
                }
                return ve(o), r === "" && !kt(t)
            },
            Qe = (t, e, n) => ({
                __proto__: null,
                plan: () => ze(t, e, n),
                navigatesWindow: () => Xe(t, n),
                follow: () => Je(t, n)
            }),
            Nt = (t, e, n) => {
                M += 1;
                let o = K(t),
                    r = o.length - 1,
                    u = 0,
                    g = !1,
                    v = !1,
                    k = l => {
                        v || (v = !0, Ue(l))
                    },
                    f = l => {
                        if (g) return;
                        g = !0;
                        let L = at(t),
                            y = L ? void 0 : n.plan(),
                            xt = l && n.follow !== void 0,
                            x;
                        !L && (y || xt) && (st(t), x = Ye(t)), y ? .readFields !== void 0 && (l ? x && Pe(c, () => {
                            x() || y.handlerReturned()
                        }) : y.readFields()), B(c, () => {
                            if (!x) {
                                k(!at(t) && n.navigatesWindow());
                                return
                            }
                            if (x()) {
                                k(!1);
                                return
                            }
                            if (xt && (y = n.plan(), !y)) {
                                k(n.follow());
                                return
                            }
                            if (y.dropped !== void 0 && y.dropped()) {
                                k(!1);
                                return
                            }
                            y.go(), k(y.inWindow)
                        }, 0)
                    },
                    p = (l, L) => {
                        for (let y = 0; y < o.length; y += 1)
                            if (o[y] === l) return L === se ? r - y : o.length + y;
                        return -1
                    },
                    E = () => {
                        p(oe(t), re(t)) <= u && f(!0)
                    },
                    m = l => {
                        l === t && f(!1)
                    },
                    D = Ve(e, o),
                    N = l => L => {
                        if (L === t) {
                            if (u = l, lt(t)) {
                                f(!1);
                                return
                            }
                            D.wrap()
                        }
                    },
                    O = [],
                    tt = [],
                    et = ne(t);
                if (et) {
                    for (let l = 0; l < r; l += 1) O[l] = N(r - l), tt[l] = N(o.length + l), gt(o[l], e, O[l], !0), gt(o[l], e, tt[l], !1);
                    Ae(c, e, m, !1)
                }
                if (B(c, () => {
                        if (g || k(!1), g = !0, D.unwrap(), !!et) {
                            for (let l = 0; l < r; l += 1) yt(o[l], e, O[l], !0), yt(o[l], e, tt[l], !1);
                            xe(c, e, m, !1)
                        }
                    }, 0), !et) {
                    f(!0);
                    return
                }
                ht(t, {
                    __proto__: null,
                    stopPropagation: {
                        __proto__: null,
                        configurable: !0,
                        value: () => {
                            E(), zt(t)
                        }
                    },
                    stopImmediatePropagation: {
                        __proto__: null,
                        configurable: !0,
                        value: () => {
                            f(!0), ct(t)
                        }
                    },
                    cancelBubble: {
                        __proto__: null,
                        configurable: !0,
                        get: () => lt(t),
                        set: l => {
                            l && E(), ce(t, l)
                        }
                    }
                })
            },
            J = new C,
            Ze = (t, e) => {
                let n = K(t);
                for (let o = 0; o < n.length; o += 1) {
                    let r = n[o],
                        u = P(r);
                    if (u === "button" || u === "input") {
                        mt(J, r, e), B(c, () => wt(J, r), 0);
                        return
                    }
                }
            },
            Rt = t => {
                let e = Xt(t),
                    n = Ge(t);
                if (!n || e === "auxclick" && n.button !== 1) return;
                e === "click" && Ze(t, n);
                let o = qe(t);
                !o || !F(R(o.href, T(d))) || Nt(t, e, Qe(o.node, e, n))
            },
            Q = (t, e, n, o) => (e ? w(e, n) : null) ? ? w(t, o),
            Ot = (t, e) => Le(Q(t, e, "formmethod", "method") ? ? ""),
            Lt = (t, e, n) => W(Q(t, e, "formtarget", "target") ? ? vt(), n),
            Pt = (t, e) => {
                let n = Ot(t, e);
                if (n === "post" || n === "dialog") return;
                let o = Q(t, e, "formaction", "action");
                if (o === null || o === "") return;
                let r = R(o, T(d));
                return F(r) ? r : void 0
            },
            tn = (t, e) => {
                if ((e && (P(e) === "button" ? Zt : te)(e)) === t) try {
                    return new rt(t, e)
                } catch {}
                return new rt(t)
            },
            Z = t => {
                let e = "",
                    n = 0;
                for (let o = 0; o < t.length; o += 1) {
                    let r = ft(t, o);
                    (r === 13 || r === 10) && (e += `${dt(t,n,o)}\r
`, r === 13 && ft(t, o + 1) === 10 && (o += 1), n = o + 1)
                }
                return n === 0 ? t : e + dt(t, n)
            },
            en = t => {
                try {
                    return Z(Qt(t))
                } catch {
                    return ""
                }
            },
            At = (t, e, n) => {
                try {
                    let o = new b(n.href),
                        r = new Yt;
                    for (let u of tn(t, e)) {
                        let g = u[1];
                        Vt(r, Z(u[0]), typeof g == "string" ? Z(g) : en(g))
                    }
                    return Gt(o, `?${jt(r)}`), R(U(o)) ? ? n
                } catch {
                    return n
                }
            },
            nn = (t, e, n) => {
                if (!I(t)) return;
                let o = Pt(t, e);
                if (!o) return;
                let r, u = !1,
                    g = () => {
                        r = At(t, e, o), I(t) || (u = !0)
                    },
                    v = {
                        target: Et ? "" : Lt(t, e, n),
                        noReferrer: nt(w(t, "rel"), null, Y()),
                        replaces: !1
                    };
                return {
                    __proto__: null,
                    inWindow: v.target === "",
                    go: () => j(r ? ? At(t, e, o), "submit", v),
                    readFields: g,
                    handlerReturned: () => {
                        I(t) ? g() : u = !0
                    },
                    dropped: () => u
                }
            },
            on = (t, e, n) => I(t) && Ot(t, e) !== "dialog" && Lt(t, e, n) === "",
            rn = (t, e, n) => ({
                __proto__: null,
                plan: () => nn(t, e, n),
                navigatesWindow: () => on(t, e, n)
            }),
            sn = t => {
                if (!t.isTrusted) return;
                let e = Jt(t);
                if (P(e) !== "form") return;
                let n = it ? it(t) : null;
                if (!Pt(e, n)) return;
                let o = (n && G(J, n)) ? ? gn;
                Nt(t, "submit", rn(e, n, o))
            };
        h ? .addEventListener("navigate", Be, !0), c.addEventListener("click", Rt, !0), c.addEventListener("auxclick", Rt, !0), c.addEventListener("submit", sn, !0)
    }
    Kt({
        "site": "arrivalhall.com.au",
        "exitPath": "\/url"
    });
})();
//# sourceURL=exit-interstitial.js