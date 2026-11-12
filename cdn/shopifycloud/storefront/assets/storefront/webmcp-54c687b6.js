"use strict";
(() => {
    var $e = null;

    function _n() {
        return $e ? ? = new AbortController().signal, $e
    }

    function X(e) {
        let t = e ? .signal;
        return Sn(t) ? t : _n()
    }

    function Sn(e) {
        return typeof e == "object" && e !== null && typeof Reflect.get(e, "aborted") == "boolean" && typeof Reflect.get(e, "addEventListener") == "function"
    }

    function de(e) {
        return e.reason ? ? vn()
    }

    function vn() {
        if (typeof DOMException == "function") return new DOMException("Tool execution was aborted.", "AbortError");
        let e = new Error("Tool execution was aborted.");
        return e.name = "AbortError", e
    }

    function De(e) {
        if (e.aborted) throw de(e)
    }

    function Z(e) {
        return typeof e == "object" && e !== null && Reflect.get(e, "name") === "AbortError"
    }

    function Ne(e, t) {
        return e.aborted ? (t(), () => {}) : (e.addEventListener("abort", t, {
            once: !0
        }), () => e.removeEventListener("abort", t))
    }
    var Tn = [
        ["analyticsProcessingAllowed", "USER_CONSENT_TYPE_ANALYTICS"],
        ["marketingAllowed", "USER_CONSENT_TYPE_MARKETING"],
        ["preferencesProcessingAllowed", "USER_CONSENT_TYPE_PREFERENCES"],
        ["saleOfDataAllowed", "USER_CONSENT_TYPE_SALE_OF_DATA"]
    ];

    function Cn(e) {
        return Tn.filter(([t]) => e[t]).map(([, t]) => ({
            consentType: t
        }))
    }

    function Ue(e) {
        let {
            send: t,
            context: n,
            dataOriginator: r = "DATA_ORIGINATOR_MERCHANT",
            flushDelayMs: o = 5e3,
            registerLifecycle: i = !1
        } = e, a = [], s;

        function c() {
            s !== void 0 || typeof setTimeout != "function" || (s = setTimeout(() => {
                s = void 0, l()
            }, o))
        }

        function u(p) {
            let h = n.consent();
            if (!h.analyticsProcessingAllowed) return;
            let d = n.browserId();
            if (d === void 0 || r === "DATA_ORIGINATOR_MERCHANT" && n.shopId === void 0) return;
            let T = n.sessionToken(),
                S = wn();
            a.length >= 50 && a.shift(), a.push({
                eventClass: "EVENT_CLASS_EVENT",
                severity: "EVENT_SEVERITY_EVENT",
                source: "EVENT_APP_STOREFRONT",
                dataOriginator: r,
                user: {
                    type: "USER_TYPE_BUYER",
                    domainScopedBrowserId: {
                        value: d
                    }
                },
                ...n.shopId === void 0 ? {} : {
                    shop: {
                        id: {
                            lowid: n.shopId
                        }
                    }
                },
                ...T === void 0 ? {} : {
                    session: {
                        clientSessionToken: T
                    }
                },
                userConsents: Cn(h),
                client: {
                    message: { ...S === void 0 ? {} : {
                            id: S
                        },
                        createdAt: new Date().toISOString()
                    },
                    browser: {
                        href: En(n.pageUrl())
                    }
                },
                payload: p
            }), c()
        }

        function l() {
            if (s !== void 0 && (clearTimeout(s), s = void 0), a.length === 0) return;
            if (!n.consent().analyticsProcessingAllowed) {
                a.length = 0;
                return
            }
            let p = new Date().toISOString();
            for (let d of a) d.client.message.sentAt = p;
            let h = JSON.stringify({
                events: a
            });
            a.length = 0;
            try {
                t(h, !0)
            } catch {}
        }
        return i && typeof document < "u" && typeof window < "u" && typeof window.addEventListener == "function" && (document.addEventListener("visibilitychange", () => {
            document.visibilityState === "hidden" && l()
        }), window.addEventListener("pagehide", () => l())), {
            produce: u,
            flush: l
        }
    }

    function wn() {
        try {
            if (typeof crypto > "u" || typeof crypto.randomUUID != "function") return;
            let e = crypto.randomUUID().replaceAll("-", "");
            return {
                lowid: BigInt(`0x${e.slice(16)}`).toString(),
                highid: BigInt(`0x${e.slice(0,16)}`).toString()
            }
        } catch {
            return
        }
    }
    var An = "/.well-known/shopify/fec/produce";

    function ke(e = An) {
        return (t, n) => {
            try {
                if (typeof fetch != "function") return;
                fetch(e, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: t,
                    keepalive: n
                }).catch(() => {})
            } catch {}
        }
    }

    function En(e) {
        let t;
        try {
            t = new URL(e)
        } catch {
            return ""
        }
        return t.pathname = t.pathname.replace(/(\/(?:account\/(?:reset|activate)|gift_cards)\/[^/]+\/)[^/]+/, "$1[redacted]"), t.toString()
    }
    var Rn = [5, 10, 25, 50, 100, 250, 500, 1e3, 2500, 5e3, 1e4],
        Pn = 5e3,
        qe = 1;

    function Fe(e) {
        return Object.keys(e).sort().map(t => `${t}\0${String(e[t])}`).join("")
    }

    function On(e) {
        return Object.entries(e).map(([t, n]) => ({
            key: t,
            value: {
                stringValue: String(n)
            }
        }))
    }

    function Mn(e) {
        return Object.entries(e).map(([t, n]) => typeof n == "boolean" ? {
            key: t,
            value: {
                boolValue: n
            }
        } : typeof n == "number" ? {
            key: t,
            value: {
                doubleValue: n
            }
        } : {
            key: t,
            value: {
                stringValue: String(n)
            }
        })
    }
    var In = {
        info: {
            number: 9,
            text: "INFO"
        },
        warn: {
            number: 13,
            text: "WARN"
        },
        error: {
            number: 17,
            text: "ERROR"
        }
    };

    function xn(e, t) {
        for (let n = 0; n < e.length; n++)
            if (t <= e[n]) return n;
        return e.length
    }

    function pe(e) {
        return String(e * 1e6)
    }

    function Ln(e, t, n, r, o) {
        let i = new Map,
            a = new Map;
        for (let c of n) {
            let u = On(c.attributes);
            if (c.kind === "counter") {
                let l = i.get(c.name);
                l || (l = {
                    name: c.name,
                    unit: c.unit,
                    sum: {
                        aggregationTemporality: qe,
                        isMonotonic: !0,
                        dataPoints: []
                    }
                }, i.set(c.name, l)), l.sum.dataPoints.push({
                    startTimeUnixNano: o,
                    timeUnixNano: r,
                    asDouble: c.value,
                    attributes: u
                })
            } else {
                let l = a.get(c.name);
                l || (l = {
                    name: c.name,
                    unit: c.unit,
                    histogram: {
                        aggregationTemporality: qe,
                        dataPoints: []
                    }
                }, a.set(c.name, l)), l.histogram.dataPoints.push({
                    startTimeUnixNano: o,
                    timeUnixNano: r,
                    count: String(c.count),
                    sum: c.sum,
                    min: c.min,
                    max: c.max,
                    bucketCounts: c.bucketCounts.map(String),
                    explicitBounds: c.bounds,
                    attributes: u
                })
            }
        }
        let s = [...i.values(), ...a.values()];
        return {
            resourceMetrics: [{
                resource: {
                    attributes: [{
                        key: "service.name",
                        value: {
                            stringValue: e
                        }
                    }]
                },
                scopeMetrics: [{
                    scope: {
                        name: t.name,
                        version: t.version,
                        attributes: []
                    },
                    metrics: s
                }]
            }]
        }
    }

    function $n(e, t, n) {
        return {
            resourceLogs: [{
                resource: {
                    attributes: [{
                        key: "service.name",
                        value: {
                            stringValue: e
                        }
                    }]
                },
                scopeLogs: [{
                    scope: {
                        name: t.name,
                        version: t.version,
                        attributes: []
                    },
                    logRecords: n.map(r => ({
                        timeUnixNano: r.timeUnixNano,
                        observedTimeUnixNano: r.timeUnixNano,
                        severityNumber: r.severityNumber,
                        severityText: r.severityText,
                        body: {
                            stringValue: r.body
                        },
                        attributes: Mn(r.attributes)
                    }))
                }]
            }]
        }
    }
    var Dn = 100;

    function We(e) {
        let {
            serviceName: t,
            send: n,
            sendLogs: r,
            scopeName: o = "@shopify/webmcp",
            scopeVersion: i = "0.0.0",
            flushDelayMs: a = Pn,
            now: s = Date.now,
            registerLifecycle: c = !1
        } = e, u = {
            name: o,
            version: i
        }, l = new Map, p = [], h = s(), d;

        function T() {
            d !== void 0 || typeof setTimeout != "function" || (d = setTimeout(() => {
                d = void 0, z()
            }, a))
        }

        function S(R, _, P = {}, A = "1") {
            if (!Number.isFinite(_)) return;
            let N = `c${R}${A}${Fe(P)}`,
                U = l.get(N);
            U && U.kind === "counter" ? U.value += _ : l.set(N, {
                kind: "counter",
                name: R,
                unit: A,
                attributes: P,
                value: _
            }), T()
        }

        function hn(R, _, P = {}, A = "1", N = Rn) {
            if (!Number.isFinite(_)) return;
            let U = `h${R}${A}${Fe(P)}`,
                ue = l.get(U),
                E;
            ue && ue.kind === "histogram" ? E = ue : (E = {
                kind: "histogram",
                name: R,
                unit: A,
                attributes: P,
                bounds: N,
                count: 0,
                sum: 0,
                min: _,
                max: _,
                bucketCounts: Array.from({
                    length: N.length + 1
                }, () => 0)
            }, l.set(U, E)), E.count += 1, E.sum += _, E.min = Math.min(E.min, _), E.max = Math.max(E.max, _), E.bucketCounts[xn(E.bounds, _)] += 1, T()
        }

        function bn(R, _ = {}, P = "info") {
            if (!r) return;
            p.length >= Dn && p.shift();
            let {
                number: A,
                text: N
            } = In[P];
            p.push({
                timeUnixNano: pe(s()),
                severityNumber: A,
                severityText: N,
                body: R,
                attributes: _
            }), T()
        }

        function z() {
            d !== void 0 && (clearTimeout(d), d = void 0);
            let R = l.size > 0,
                _ = p.length > 0;
            if (!R && !_) return;
            let P = s();
            if (R) {
                let A = Ln(t, u, l.values(), pe(P), pe(h));
                l.clear();
                try {
                    n(JSON.stringify(A), !0)
                } catch {}
            }
            if (_ && r) {
                let A = $n(t, u, p);
                p.length = 0;
                try {
                    r(JSON.stringify(A), !0)
                } catch {}
            }
            h = P
        }
        return c && typeof document < "u" && typeof window < "u" && typeof window.addEventListener == "function" && (document.addEventListener("visibilitychange", () => {
            document.visibilityState === "hidden" && z()
        }), window.addEventListener("pagehide", () => z())), {
            counter: S,
            histogram: hn,
            log: bn,
            flush: z
        }
    }

    function fe(e) {
        return (t, n) => {
            try {
                if (typeof fetch != "function") return;
                fetch(e, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: t,
                    keepalive: n
                }).catch(() => {})
            } catch {}
        }
    }
    var q = {
            analyticsProcessingAllowed: !1,
            marketingAllowed: !1,
            preferencesProcessingAllowed: !1,
            saleOfDataAllowed: !1
        },
        Nn = /\/(\d+)(?:\?.*)?$/;

    function Be(e) {
        return typeof e == "number" ? Number.isSafeInteger(e) ? String(e) : void 0 : e === void 0 || e === "" ? void 0 : /^\d+$/.test(e) ? e : Nn.exec(e) ? .[1]
    }

    function Un(e) {
        try {
            return decodeURIComponent(e)
        } catch {
            return e
        }
    }

    function kn(e) {
        if (!(typeof document > "u" || typeof document.cookie != "string"))
            for (let t of document.cookie.split("; ")) {
                let n = t.indexOf("=");
                if (n === -1 || t.slice(0, n) !== e) continue;
                let r = t.slice(n + 1);
                return r === "" ? void 0 : Un(r)
            }
    }
    var qn = "00000000-0000-0000-0000-000000000000",
        He = "00000000-0000-0000-5000-000000000000";

    function ge(e) {
        if (!(typeof e != "string" || e === "") && !(e === qn || e === He)) return e
    }
    var ee = {
        token: void 0,
        denied: !1
    };

    function Fn(e) {
        try {
            if (typeof document > "u") return ee;
            let t = document.querySelector(`meta[name="${e}"]`);
            if (!t) return ee;
            let n = Number(t.getAttribute("data-expiration"));
            if (!Number.isFinite(n) || n <= Date.now()) return ee;
            let r = t.getAttribute("content");
            return r === He ? {
                token: void 0,
                denied: !0
            } : {
                token: ge(r),
                denied: !1
            }
        } catch {
            return ee
        }
    }

    function Ve(e, t, n) {
        try {
            let o = window.Shopify ? .customerPrivacy ? .__internal,
                i = o ? .[n];
            if (typeof i == "function") return ge(i.call(o, {
                generateFallback: !1,
                tag: "webmcp_storefront_context"
            }))
        } catch {
            return
        }
        let r = Fn(e);
        if (!r.denied) return r.token !== void 0 ? r.token : ge(kn(t))
    }

    function te(e) {
        try {
            return e ? .() === !0
        } catch {
            return !1
        }
    }

    function ye(e) {
        return typeof e == "object" && e !== null
    }

    function Wn(e) {
        return !ye(e) || e.analytics === "" && e.marketing === "" && e.preferences === ""
    }

    function Vn() {
        try {
            if (!ye(window.privacyBanner)) return !1;
            let e = window.Shopify ? .customerPrivacy,
                t = e ? .shouldShowBanner;
            return typeof t != "function" ? !0 : t() && Wn(e ? .currentVisitorConsent ? .())
        } catch {
            return !0
        }
    }

    function me() {
        let e = window.Shopify ? .customerPrivacy;
        if (!e || Vn()) return q;
        try {
            if (e.consentStatus !== "loaded") return q;
            let t = e.currentVisitorConsent ? .();
            if (ye(t) && t.analytics === "no") return q
        } catch {
            return q
        }
        return {
            analyticsProcessingAllowed: te(e.analyticsProcessingAllowed),
            marketingAllowed: te(e.marketingAllowed),
            preferencesProcessingAllowed: te(e.preferencesProcessingAllowed),
            saleOfDataAllowed: te(e.saleOfDataAllowed)
        }
    }

    function Bn() {
        try {
            return Be(window.Shopify ? .analytics ? .getConfig().shop ? .shopId)
        } catch {
            return
        }
    }

    function Hn() {
        try {
            if (typeof document > "u") return;
            let t = document.getElementById("shopify-features") ? .textContent;
            if (typeof t != "string" || t === "") return;
            let n = JSON.parse(t);
            if (typeof n != "object" || n === null) return;
            let r = Reflect.get(n, "shopId");
            return typeof r == "string" || typeof r == "number" ? Be(r) : void 0
        } catch {
            return
        }
    }

    function jn() {
        return Bn() ? ? Hn()
    }

    function Qn() {
        return window.location ? .href ? ? ""
    }

    function je() {
        return {
            shopId: jn(),
            browserId: () => Ve("shopify-y", "_shopify_y", "uniqueToken"),
            sessionToken: () => Ve("shopify-s", "_shopify_s", "visitToken"),
            pageUrl: Qn,
            consent: me
        }
    }
    var Gn = "https://otlp-http-production.shopifysvc.com/v1/metrics",
        Yn = "https://otlp-http-production.shopifysvc.com/v1/logs",
        Kn = "storefront_webmcp",
        Jn = !0,
        zn = {
            localhost: !0,
            "127.0.0.1": !0,
            "0.0.0.0": !0,
            "[::1]": !0,
            "localtest.me": !0
        };

    function Ke() {
        if (!Jn || typeof window > "u" || typeof document > "u") return !1;
        let e = window.location ? .host ? ? "";
        return e !== "" && !zn[e] && !e.includes(":")
    }
    var he = null,
        Qe = !1;

    function Je() {
        return Qe || (Qe = !0, Ke() && (he = We({
            serviceName: Kn,
            send: fe(Gn),
            sendLogs: fe(Yn),
            registerLifecycle: !0
        }))), he
    }
    var be = null,
        Ge = !1;

    function ze() {
        return Ge || (Ge = !0, Ke() && (be = Ue({
            send: ke(),
            context: je(),
            registerLifecycle: !0
        }))), be
    }
    var Xn = "type.googleapis.com/shopify.buyer_activity.agent.WebMcpToolCallEvent";

    function Zn(e) {
        return e.aborted === !0 ? "OUTCOME_ABORTED" : e.isError ? e.errorClass === "tool_error" ? "OUTCOME_TOOL_ERROR" : "OUTCOME_EXCEPTION" : "OUTCOME_SUCCESS"
    }
    var er = 255;

    function tr(e) {
        let t = e.aborted === !0;
        return {
            "@type": Xn,
            eventType: "EVENT_TYPE_WEB_MCP_TOOL_CALL_COMPLETED",
            surface: "AGENT_SURFACE_STOREFRONT_WEBMCP",
            toolName: e.tool,
            outcome: Zn(e),
            durationMs: Math.max(0, Math.round(e.durationMs)),
            ...e.errorClass === void 0 ? {} : {
                errorClass: e.errorClass.slice(0, er)
            },
            ...t ? {
                resultDiscarded: e.resultDiscarded === !0
            } : {}
        }
    }

    function nr(e, t = Je(), n = ze()) {
        if (rr(e, n), !t) return;
        let {
            tool: r,
            durationMs: o,
            isError: i,
            errorClass: a,
            errorMessage: s,
            aborted: c,
            resultDiscarded: u
        } = e;
        try {
            or(e, t), t.log(`webmcp ${r} ${c?"aborted":i?"error":"ok"}`, {
                tool_name: r,
                duration_ms: Math.round(o),
                is_error: i,
                error_class: a ? ? "none",
                ...c ? {
                    aborted: !0,
                    result_discarded: u === !0
                } : {},
                ...s === void 0 || !me().analyticsProcessingAllowed ? {} : {
                    error_message: s
                }
            }, i ? "error" : "info")
        } catch {}
    }

    function rr(e, t) {
        if (t) try {
            t.produce(tr(e))
        } catch {}
    }

    function or(e, t) {
        let {
            tool: n,
            durationMs: r,
            isError: o,
            errorClass: i,
            aborted: a,
            resultDiscarded: s
        } = e, c = {
            tool_name: n,
            is_error: o,
            error_class: i ? ? "none"
        };
        a ? t.counter("webmcp_tool_call_aborted_total", 1, {
            tool_name: n,
            result_discarded: s === !0
        }) : t.histogram("webmcp_tool_call_duration_ms", r, c, "ms"), t.counter("webmcp_tool_call_total", 1, c), o && t.counter("webmcp_tool_call_errors_total", 1, {
            tool_name: n,
            error_class: i ? ? "unknown"
        })
    }

    function ir(e) {
        return typeof e == "object" && e !== null && typeof Reflect.get(e, "then") == "function"
    }

    function ar(e) {
        return e instanceof Error && typeof e.name == "string" && e.name.length > 0 ? e.name : "Error"
    }

    function sr(e) {
        return typeof e == "object" && e !== null && Reflect.get(e, "isError") === !0
    }
    var Ye = 300;

    function Xe(e) {
        return e.length > Ye ? `${e.slice(0,Ye)}\u2026` : e
    }

    function cr(e) {
        if (e instanceof Error && typeof e.message == "string" && e.message.length > 0) return Xe(e.message)
    }

    function lr(e) {
        if (typeof e != "object" || e === null) return;
        let t = Reflect.get(e, "structuredContent");
        if (typeof t != "object" || t === null) return;
        let n = Reflect.get(t, "error");
        return typeof n == "string" && n.length > 0 ? Xe(n) : void 0
    }

    function Ze(e, t, n = Je(), r = ze()) {
        return (o, i) => {
            let a = X(i),
                s = performance.now(),
                c = d => {
                    nr({
                        tool: e,
                        durationMs: performance.now() - s,
                        ...d
                    }, n, r)
                },
                u = d => c({
                    isError: !1,
                    errorClass: "aborted",
                    aborted: !0,
                    resultDiscarded: d
                }),
                l = d => {
                    if (a.aborted) throw u(!0), de(a);
                    let T = sr(d);
                    return c({
                        isError: T,
                        errorClass: T ? "tool_error" : void 0,
                        errorMessage: T ? lr(d) : void 0
                    }), d
                },
                p = d => {
                    throw a.aborted || Z(d) ? u(!1) : c({
                        isError: !0,
                        errorClass: ar(d),
                        errorMessage: cr(d)
                    }), d
                },
                h;
            try {
                h = t(o, i)
            } catch (d) {
                return p(d)
            }
            return ir(h) ? h.then(l, p) : l(h)
        }
    }
    var et = {
        checkout: () => F("/checkout"),
        accountOrders: () => F("/account/orders"),
        product: e => F(`/products/${e}`),
        collection: e => F(`/collections/${e}`),
        search: e => F(`/search?q=${encodeURIComponent(e)}`)
    };

    function F(e) {
        let t = ur(),
            n = e.startsWith("/") ? e.slice(1) : e;
        return t + n
    }

    function L(e) {
        let n = tt() ? .match ? .(e);
        if (n ? .route === "product" || n ? .route === "productInCollection") {
            let o = n.params ? .productHandle;
            if (o) return o
        }
        let r = e.match(/\/products\/([^/?#]+)/);
        return r ? .[1] ? dr(r[1]) : ""
    }

    function ur() {
        if (typeof window > "u") return "/";
        let t = tt() ? .root;
        return typeof t != "string" ? "/" : t
    }

    function tt() {
        if (!(typeof window > "u")) return window.Shopify ? .routes
    }

    function dr(e) {
        try {
            return decodeURIComponent(e)
        } catch {
            return ""
        }
    }
    var nt = {
            type: "object",
            description: `A price. amount is in the currency's minor units (e.g. cents), NOT whole units: {"amount": 39800, "currency": "USD"} is $398.00. Use display for a human-readable price.`,
            properties: {
                amount: {
                    type: "integer",
                    description: "Price in the currency's minor units (cents for USD, so 39800 means 398.00). Not whole currency units."
                },
                currency: {
                    type: "string",
                    description: "ISO 4217 currency code."
                },
                display: {
                    type: "string",
                    description: 'The price formatted for display, e.g. "$398.00".'
                }
            }
        },
        O = {
            type: ["object", "null"],
            description: nt.description,
            properties: nt.properties
        },
        at = {
            type: "object",
            properties: {
                name: {
                    type: "string"
                },
                values: {
                    type: "array",
                    items: {
                        type: "string"
                    }
                }
            }
        },
        W = {
            type: "object",
            properties: {
                name: {
                    type: "string"
                },
                value: {
                    type: "string"
                }
            }
        },
        rt = {
            type: "object",
            properties: {
                id: {
                    type: "string",
                    description: "Storefront API Product GID. Pass as catalog.id to get_product."
                },
                title: {
                    type: "string"
                },
                handle: {
                    type: "string",
                    description: "Product handle. Can be passed to add_to_cart as line_items[].handle."
                },
                url: {
                    type: "string"
                },
                price_range: O,
                image: {
                    type: "string"
                },
                available: {
                    type: "boolean"
                },
                variant_count: {
                    type: "integer",
                    description: "Number of variants on this product record. Some stores split one item across several linked products (e.g. one product per color), so options can list more values than variant_count suggests; use get_product to see where each option value lives."
                },
                options: {
                    type: "array",
                    description: "Product option names and possible values. These values do not guarantee every combination is purchasable; call get_product for available variants.",
                    items: at
                },
                product_type: {
                    type: "string"
                },
                vendor: {
                    type: "string"
                }
            }
        },
        st = {
            type: "object",
            description: "Product + variant information for the line, sufficient to name and link to the item without an extra get_product call.",
            properties: {
                id: {
                    type: "string",
                    description: "Storefront API ProductVariant GID. Pass to add_to_cart as line_items[].item.id to add this variant."
                },
                title: {
                    type: "string",
                    description: 'Product title (e.g. "Classic Hoodie").'
                },
                variant_title: {
                    type: "string",
                    description: 'Variant title (e.g. "Large / Black"). Empty or "Default Title" for single-variant products.'
                },
                handle: {
                    type: "string"
                },
                url: {
                    type: "string",
                    description: "Direct URL to the product page with the variant preselected."
                },
                image: {
                    type: "string"
                },
                unit_price: O
            }
        },
        pr = {
            type: "object",
            properties: {
                id: {
                    type: "string",
                    description: "Cart line GID from get_cart. Pass back to update_cart_lines as line_items[].id to update or remove this line."
                },
                item: st,
                quantity: {
                    type: "integer"
                },
                line_price: { ...O,
                    description: "Total price for the line (quantity \xD7 unit_price)."
                }
            }
        },
        ot = {
            type: "object",
            properties: {
                item: st,
                quantity: {
                    type: "integer",
                    description: "Actual quantity on the cart line after the mutation. May differ from requested_quantity if the line merged with an existing entry or availability capped the add."
                },
                requested_quantity: {
                    type: "integer",
                    description: "Quantity the caller asked to add."
                }
            }
        },
        it = {
            type: "object",
            properties: {
                updated: {
                    type: "boolean"
                },
                deduped: {
                    type: "boolean",
                    description: "True when this exact add was applied moments ago and was skipped to avoid a duplicate. When true, nothing changed on this call and updated is false."
                },
                item_count: {
                    type: "integer"
                },
                total_price: O,
                line_items: {
                    type: "array",
                    description: "Items affected by this mutation, with product/variant details filled in from the post-mutation cart.",
                    items: ot
                },
                unresolved_items: {
                    type: "array"
                },
                resolved_items: {
                    type: "array",
                    description: "Present only on the clarification-needed path (nothing was applied). Items that could have been added, with pre-mutation lookup titles when available.",
                    items: ot
                },
                warnings: {
                    type: "array",
                    items: {
                        type: "string"
                    }
                }
            }
        },
        ct = {
            searchCatalog: {
                name: "search_catalog",
                annotations: {
                    readOnlyHint: !0,
                    untrustedContentHint: !0
                },
                description: "Search the store catalog for products, collections, articles, and pages. Does NOT add anything to the cart; use add_to_cart for cart changes. If the user asks for a specific product variant, call get_product after search_catalog to get its variant ID for add_to_cart, or use show_variant to display it.",
                inputSchema: {
                    type: "object",
                    required: ["catalog"],
                    properties: {
                        catalog: {
                            type: "object",
                            required: ["query"],
                            properties: {
                                query: {
                                    type: "string",
                                    description: "Search query string."
                                },
                                pagination: {
                                    type: "object",
                                    properties: {
                                        limit: {
                                            type: "integer",
                                            description: "Max results per type (1-10). Defaults to 5.",
                                            default: 5,
                                            minimum: 1,
                                            maximum: 10
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                outputSchema: {
                    type: "object",
                    properties: {
                        products: {
                            type: "array",
                            items: rt
                        },
                        collections: {
                            type: "array"
                        },
                        articles: {
                            type: "array"
                        },
                        pages: {
                            type: "array"
                        },
                        search_url: {
                            type: "string",
                            description: "Full search results page URL."
                        }
                    }
                }
            },
            browseStore: {
                name: "browse_store",
                annotations: {
                    readOnlyHint: !1,
                    untrustedContentHint: !0
                },
                description: 'Browse OR navigate to store collections. Set navigate=true whenever the user wants to be taken to a collection page in the browser (triggers: "browse to", "go to", "show me", "open", "take me to", "navigate to" a collection or category). With navigate=false (default), returns collection or product data without changing the page \u2014 use this only when the user is asking a question about the catalog, not asking to view it. Without a collection handle, lists all collections. With a handle, returns products from that collection; use "all" to browse everything. Does NOT add anything to the cart; use add_to_cart for cart changes. Prefer this over search_catalog when the user names a category, collection, or wants to explore. With navigate=true this MOVES the browser to the collection page; the tool result confirms the destination, and no further navigation is needed to show it.',
                inputSchema: {
                    type: "object",
                    properties: {
                        collection: {
                            type: "string",
                            description: 'Collection handle to browse (e.g. "best-sellers", "new-arrivals"). Omit to list all collections. Use "all" to browse every product.'
                        },
                        navigate: {
                            type: "boolean",
                            description: 'When true, navigate the browser to the collection page after loading data. Set true for user intents like "browse to", "go to", "show me", "open", "take me to" a collection. Requires a collection handle. Defaults to false.'
                        },
                        sort_by: {
                            type: "string",
                            description: "Sort order. Options: best-selling (default), price-ascending, price-descending, title-ascending, title-descending, created-descending, created-ascending."
                        },
                        page: {
                            type: "number",
                            description: "Page number for pagination (starts at 1). Each page returns up to 30 products."
                        }
                    }
                },
                outputSchema: {
                    type: "object",
                    properties: {
                        collections: {
                            type: "array",
                            items: {
                                type: "object",
                                properties: {
                                    title: {
                                        type: "string"
                                    },
                                    handle: {
                                        type: "string"
                                    },
                                    url: {
                                        type: "string"
                                    },
                                    description: {
                                        type: "string"
                                    }
                                }
                            }
                        },
                        products: {
                            type: "array",
                            items: rt
                        },
                        collection_title: {
                            type: "string"
                        },
                        page: {
                            type: "number"
                        },
                        sort_by: {
                            type: "string"
                        },
                        navigated: {
                            type: "boolean"
                        },
                        url: {
                            type: "string"
                        }
                    }
                }
            },
            getProduct: {
                name: "get_product",
                annotations: {
                    readOnlyHint: !1,
                    untrustedContentHint: !0
                },
                description: `Get product details, OR navigate the browser to the product page. Set catalog.navigate=true whenever the user wants to see/view the product in the browser (triggers: "show me", "open", "view", "go to", "take me to", "navigate to" a product). Set catalog.navigate=false (default) only when you need data (description, options, variants, prices, availability) to answer a question or to prepare an add_to_cart call \u2014 the browser stays on the current page. Defaults to the current page's product if no catalog.id is provided. Does NOT add anything to the cart; use add_to_cart for that. To view a specific variant (color/size/etc.) in the browser, use show_variant instead \u2014 it accepts partial option selections like "purple" without needing every option. To add a specific variant to the cart, call get_product with catalog.selected_options to get its variant id. With catalog.navigate=true this MOVES the browser to the product page; the tool result confirms the destination, and no further navigation is needed to show it.`,
                inputSchema: {
                    type: "object",
                    properties: {
                        catalog: {
                            type: "object",
                            description: "Product detail parameters.",
                            properties: {
                                id: {
                                    type: "string",
                                    description: "Storefront API Product GID, product handle, or product URL path. Custom app product paths and Shopify standard /products/<handle> paths are supported. The id field from search_catalog or browse_store can be passed directly. If omitted, uses the current page's product."
                                },
                                navigate: {
                                    type: "boolean",
                                    description: 'When true, navigate the browser to the product page after fetching details. Set true for user intents like "show me", "open", "view", "go to", "take me to" a product. Defaults to false. If the user specified partial options (e.g. only a color), prefer show_variant with selected_options instead.'
                                },
                                selected_options: {
                                    type: "array",
                                    description: "Known product option selections to filter available_options. Use exact option names and values from search_catalog options or a prior get_product available_options entry.",
                                    items: {
                                        type: "object",
                                        properties: {
                                            name: {
                                                type: "string",
                                                description: 'Option name, e.g. "Size" or "Color".'
                                            },
                                            value: {
                                                type: "string",
                                                description: 'Option value, e.g. "160cm" or "Fiberglass".'
                                            }
                                        },
                                        required: ["name", "value"]
                                    }
                                }
                            }
                        }
                    }
                },
                outputSchema: {
                    type: "object",
                    properties: {
                        id: {
                            type: "string",
                            description: "Storefront API Product GID."
                        },
                        title: {
                            type: "string"
                        },
                        handle: {
                            type: "string"
                        },
                        description: {
                            type: "object",
                            properties: {
                                html: {
                                    type: "string"
                                }
                            }
                        },
                        vendor: {
                            type: "string"
                        },
                        type: {
                            type: "string"
                        },
                        tags: {
                            type: "array",
                            items: {
                                type: "string"
                            }
                        },
                        url: {
                            type: "string"
                        },
                        price_range: {
                            type: "object",
                            properties: {
                                min: O,
                                max: O
                            }
                        },
                        available: {
                            type: "boolean"
                        },
                        options: {
                            type: "array",
                            description: "All product option names and possible values. Use available_options to identify purchasable combinations.",
                            items: at
                        },
                        variants: {
                            type: "array",
                            description: "Resolved variant records. When catalog.selected_options contains a complete option combination, this contains the matching variant. Pass an available variant id to add_to_cart as line_items[].item.id.",
                            items: {
                                type: "object",
                                properties: {
                                    id: {
                                        type: "string",
                                        description: "Storefront API ProductVariant GID. Pass to show_variant as catalog.variant_id to display it, or add_to_cart as line_items[].item.id to add it."
                                    },
                                    title: {
                                        type: "string"
                                    },
                                    options: {
                                        type: "array",
                                        items: W
                                    },
                                    price: O,
                                    list_price: O,
                                    availability: {
                                        type: "object",
                                        properties: {
                                            available: {
                                                type: "boolean"
                                            }
                                        }
                                    },
                                    sku: {
                                        type: "string"
                                    },
                                    product_handle: {
                                        type: "string",
                                        description: "Present only when this variant belongs to a different product than the one requested \u2014 some stores sell each option value (e.g. each color) as its own product, linked as options. Pass it to show_variant as catalog.handle to display the variant."
                                    }
                                }
                            }
                        },
                        available_options: {
                            type: "array",
                            description: "Available option combinations, optionally filtered by catalog.selected_options. Use one full combination to call get_product again when variants[] is empty.",
                            items: {
                                type: "array",
                                items: W
                            }
                        },
                        available_options_count: {
                            type: "integer",
                            description: "Total available option combinations matching catalog.selected_options."
                        },
                        available_options_truncated: {
                            type: "boolean",
                            description: "True when more available option combinations exist than were returned."
                        },
                        available_options_filter: {
                            type: "array",
                            description: "The selected_options filter applied to available_options, when provided.",
                            items: W
                        },
                        images: {
                            type: "array",
                            items: {
                                type: "string"
                            }
                        }
                    }
                }
            },
            showVariant: {
                name: "show_variant",
                annotations: {
                    readOnlyHint: !1,
                    untrustedContentHint: !0
                },
                description: 'Navigate the browser to a product page, with a specific variant OR a partial option filter selected. Use for view intents: "show me", "open", "view", "go to", "take me to" a specific product configuration. Accepts EITHER variant_id (fully specified variant) OR selected_options (partial, e.g. only Color=Purple) \u2014 with partial options the first matching available variant is picked automatically, so DO NOT ask the user for missing options when their intent is to view. Does NOT add anything to the cart; use add_to_cart for cart changes. For cart operations you still need a full variant_id \u2014 call get_product with the full option combination first. This MOVES the browser to the exact variant page with the variant pre-selected; the tool result confirms the destination, and no further navigation is needed to show it.',
                inputSchema: {
                    type: "object",
                    required: ["catalog"],
                    properties: {
                        catalog: {
                            type: "object",
                            description: "Provide EITHER variant_id OR selected_options. Handle is required unless the user is already on the product page.",
                            properties: {
                                handle: {
                                    type: "string",
                                    description: "Product handle. If omitted, uses the current product page's handle."
                                },
                                variant_id: {
                                    type: ["string", "number"],
                                    description: 'ProductVariant ID from get_product variants[].id, e.g. "gid://shopify/ProductVariant/123", or the numeric variant ID. Use when the user picked a specific fully-specified variant. Omit when using selected_options.'
                                },
                                selected_options: {
                                    type: "array",
                                    description: 'Partial (or full) option selections, e.g. [{"name":"Color","value":"Purple"}]. Use when the user names some options but not all (e.g. "show me the purple shoe" \u2014 pass only Color). The first matching available variant will be selected automatically. Use exact option names and values from get_product available_options or search_catalog options.',
                                    items: W
                                }
                            }
                        }
                    }
                },
                outputSchema: {
                    type: "object",
                    properties: {
                        handle: {
                            type: "string",
                            description: "Handle of the product page that was shown. Can differ from the requested handle when the variant is sold as a separate, linked product (e.g. one product per color)."
                        },
                        variant_id: {
                            type: "string"
                        },
                        url: {
                            type: "string"
                        },
                        navigated: {
                            type: "boolean"
                        },
                        selected_options: {
                            type: "array",
                            description: "The option selections that were resolved to a variant, if provided.",
                            items: W
                        }
                    }
                }
            },
            getCart: {
                name: "get_cart",
                annotations: {
                    readOnlyHint: !0,
                    untrustedContentHint: !0
                },
                description: "Get the current shopping cart contents \u2014 line items with product titles, variant titles, handles, URLs, images, unit prices, quantities, and totals. Everything needed to describe the cart to the user in natural language, without a follow-up get_product call per line. Works from any page.",
                inputSchema: {
                    type: "object",
                    properties: {}
                },
                outputSchema: {
                    type: "object",
                    properties: {
                        id: {
                            type: "string",
                            description: "Cart GID."
                        },
                        item_count: {
                            type: "integer"
                        },
                        total_price: O,
                        currency: {
                            type: "string"
                        },
                        line_items: {
                            type: "array",
                            items: pr
                        }
                    }
                }
            },
            addToCart: {
                name: "add_to_cart",
                annotations: {
                    readOnlyHint: !1,
                    untrustedContentHint: !0
                },
                description: `Add products to the cart. Call this as soon as the user asks to ADD items (triggers: "add ... to my cart", "buy", "I'll take", "put ... in my basket") \u2014 in ONE call listing every item they named, up to the 10-entry limit. That request IS the authorization: do NOT ask the user to confirm before calling, and do NOT stop after search_catalog or get_product merely to report the variant you found \u2014 make the change, then tell the user it is done. Batch every item for ONE request into a SINGLE call \u2014 line_items accepts up to 10 entries; do NOT call add_to_cart once per item. Batching applies WITHIN a single request: each new thing the user asks for later is its own call. If one request names more than 10 items, split just that request into as few calls as possible. Do NOT retry a call that already returned a result: adds are cumulative, so repeating a call adds duplicate items. Use line_items[].item.id with a ProductVariant GID when the exact variant is known. Use handle or query only when adding the selected or first available variant. To change a quantity or remove something already in the cart, use update_cart_lines instead \u2014 this tool can only add.`,
                inputSchema: {
                    type: "object",
                    required: ["cart"],
                    properties: {
                        cart: {
                            type: "object",
                            required: ["line_items"],
                            properties: {
                                line_items: {
                                    type: "array",
                                    description: "Items to add (1-10).",
                                    minItems: 1,
                                    maxItems: 10,
                                    items: {
                                        type: "object",
                                        properties: {
                                            item: {
                                                type: "object",
                                                description: "The merchandise to add.",
                                                properties: {
                                                    id: {
                                                        type: "string",
                                                        description: 'ProductVariant GID from get_product variants[].id, e.g. "gid://shopify/ProductVariant/123".'
                                                    }
                                                }
                                            },
                                            handle: {
                                                type: "string",
                                                description: "Product handle. Adds the selected or first available variant; call get_product first if the user requested specific options."
                                            },
                                            query: {
                                                type: "string",
                                                description: "Search query to find and add the selected or first available variant. For specific variants, call search_catalog/get_product first and pass item.id."
                                            },
                                            quantity: {
                                                type: "integer",
                                                description: "How many to add. Defaults to 1.",
                                                minimum: 1,
                                                default: 1
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                outputSchema: it
            },
            updateCartLines: {
                name: "update_cart_lines",
                annotations: {
                    readOnlyHint: !1,
                    untrustedContentHint: !0
                },
                description: "Change the quantity of items already in the cart, or remove them. Every change here addresses an existing cart line by its id, so call get_cart first unless you already have line_items[].id from an earlier get_cart in this conversation. Pass the ABSOLUTE target quantity, not a delta \u2014 quantity 2 means the line ends up at 2 regardless of what it was. Use quantity 0 to remove the line entirely. Batch every change for ONE request into a SINGLE call \u2014 line_items accepts up to 10 entries; do NOT call update_cart_lines once per line. Batching applies WITHIN a single request: each new thing the user asks for later is its own call. This tool cannot add new merchandise. To add something not already in the cart, use add_to_cart. To empty the whole cart at once, use cancel_cart.",
                inputSchema: {
                    type: "object",
                    required: ["cart"],
                    properties: {
                        cart: {
                            type: "object",
                            required: ["line_items"],
                            properties: {
                                line_items: {
                                    type: "array",
                                    description: "Existing cart lines to update or remove (1-10).",
                                    minItems: 1,
                                    maxItems: 10,
                                    items: {
                                        type: "object",
                                        required: ["id", "quantity"],
                                        properties: {
                                            id: {
                                                type: "string",
                                                description: "Existing cart line id from get_cart line_items[].id. Required \u2014 this tool cannot resolve products by name."
                                            },
                                            quantity: {
                                                type: "integer",
                                                description: "Absolute target quantity for this line (not a delta). 0 removes the line.",
                                                minimum: 0
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                outputSchema: it
            },
            cancelCart: {
                name: "cancel_cart",
                annotations: {
                    readOnlyHint: !1
                },
                description: "Remove all items from the cart in one step. Use when the user wants to empty their cart or start over.",
                inputSchema: {
                    type: "object",
                    properties: {}
                },
                outputSchema: {
                    type: "object",
                    properties: {
                        cleared: {
                            type: "boolean"
                        },
                        previous_item_count: {
                            type: "number"
                        }
                    }
                }
            },
            createCheckout: {
                name: "proceed_to_checkout",
                annotations: {
                    readOnlyHint: !1
                },
                description: "Proceed to checkout. Verifies the cart is not empty, then MOVES the browser to the checkout page. The tool result confirms the destination, and no further navigation is needed to show it.",
                inputSchema: {
                    type: "object",
                    properties: {}
                },
                outputSchema: {
                    type: "object",
                    properties: {
                        navigating_to: {
                            type: "string"
                        },
                        item_count: {
                            type: "integer"
                        },
                        total_price: O
                    }
                }
            },
            manageOrders: {
                name: "manage_orders",
                annotations: {
                    readOnlyHint: !1
                },
                description: "Navigate to the customer's order history page. Use when the user asks about past orders, order status, tracking, or returns. The user will be prompted to log in if not already authenticated. This MOVES the browser to the order history page; the tool result confirms the destination, and no further navigation is needed to show it.",
                inputSchema: {
                    type: "object",
                    properties: {}
                }
            },
            searchShopPoliciesAndFaqs: {
                name: "search_shop_policies_and_faqs",
                annotations: {
                    readOnlyHint: !0,
                    untrustedContentHint: !0
                },
                description: `Used to get facts about the store's policies, FAQ, or contact details.
When the question is about specific policy kinds, set policy_types to those kinds; leave it unset for general FAQ questions.
Some examples of questions you can ask are:
  - What is your return policy? (policy_types: ["refund"])
  - What is your shipping policy? (policy_types: ["shipping"])
  - What is your phone number? (policy_types: ["contact"])
  - What are your hours of operation? (policy_types: ["contact"])
  - Do you offer gift wrapping? (general FAQ, no specific policy kind \u2014 leave policy_types unset)
`,
                inputSchema: {
                    type: "object",
                    properties: {
                        query: {
                            type: "string",
                            description: "A natural language query. Searches FAQ pages and articles, and routes policies by keyword when policy_types is omitted."
                        },
                        policy_types: {
                            type: "array",
                            description: `Policy kinds to fetch, chosen from the user's question \u2014 e.g. ["refund"] for returns/exchanges, ["contact"] for phone/hours/address. Include every kind the question touches. Omit when no specific policy is relevant (e.g. a general FAQ question).`,
                            items: {
                                type: "string",
                                enum: ["refund", "shipping", "privacy", "terms_of_service", "terms_of_sale", "subscription", "legal_notice", "contact"]
                            }
                        }
                    },
                    required: ["query"]
                },
                outputSchema: {
                    type: "object",
                    properties: {
                        policies: {
                            type: "array",
                            description: "Store policies and contact information matching the query.",
                            items: {
                                type: "object",
                                properties: {
                                    type: {
                                        type: "string",
                                        description: "Policy kind: refund, shipping, privacy, terms_of_service, terms_of_sale, subscription, legal_notice, or contact."
                                    },
                                    title: {
                                        type: "string"
                                    },
                                    url: {
                                        type: "string"
                                    },
                                    body: {
                                        type: "string",
                                        description: "The policy text (may contain HTML)."
                                    }
                                }
                            }
                        },
                        pages: {
                            type: "array",
                            description: "Store pages (e.g. FAQ, help) matching the query.",
                            items: {
                                type: "object",
                                properties: {
                                    title: {
                                        type: "string"
                                    },
                                    handle: {
                                        type: "string"
                                    },
                                    url: {
                                        type: "string"
                                    },
                                    body: {
                                        type: "string",
                                        description: "The page body (may contain HTML) for the top matched pages."
                                    }
                                }
                            }
                        },
                        articles: {
                            type: "array",
                            description: "Blog articles matching the query.",
                            items: {
                                type: "object",
                                properties: {
                                    title: {
                                        type: "string"
                                    },
                                    handle: {
                                        type: "string"
                                    },
                                    url: {
                                        type: "string"
                                    },
                                    excerpt: {
                                        type: "string"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            getUcpProfile: {
                name: "get_ucp_profile",
                annotations: {
                    readOnlyHint: !0,
                    untrustedContentHint: !0
                },
                description: "Get this store's Universal Commerce Protocol (UCP) profile, as served at /.well-known/ucp: the UCP version, the services the store offers with their endpoints (e.g. the store's UCP MCP server), its capabilities, and its payment handlers. Use it to discover how to continue a purchase with this store over UCP, or to check which platform operates the store. Read-only; works from any page.",
                inputSchema: {
                    type: "object",
                    properties: {}
                },
                outputSchema: {
                    type: "object",
                    properties: {
                        ucp: {
                            type: "object",
                            description: "The UCP profile exactly as served. Keys include version, supported_versions (older versions keyed to their profile URLs), services (keyed by service name, e.g. dev.ucp.shopping; each a list of bindings with version, spec, transport, endpoint and schema), capabilities (keyed by capability name), and payment_handlers (keyed by handler name)."
                        }
                    }
                }
            }
        };
    var y = ((e, t) => {
        let n = e;
        if (t) {
            let r = new Set;
            for (let o of t) r.has(o) || (r.add(o), n += `
` + o)
        }
        return n
    });
    var lt = "2026-04";

    function ut(e) {
        return e ? e.startsWith("v1_") ? fr(e.replace(/^v1_/, "")) : (typeof console < "u" && console.warn(`[webmcp] Unsupported variant encoding: "${e}"`), []) : []
    }

    function fr(e) {
        let t = /[ :,-]/g,
            n = {
                currentOptionValue: [],
                decodedOptions: [],
                depth: 0,
                index: 0,
                rangeStart: null
            },
            r;
        for (; r = t.exec(e);) gr(e, n, r, t);
        return hr(e, n), n.decodedOptions
    }

    function gr(e, t, n, r) {
        let o = n[0],
            i = Number.parseInt(e.slice(t.index, n.index), 10) || 0;
        dt(t, i), t.currentOptionValue[t.depth] = i, o === "-" ? t.rangeStart = i : o === ":" ? t.depth++ : yr(e, t, n, o), t.index = r.lastIndex
    }

    function yr(e, t, n, r) {
        mr(e, n, r) && t.decodedOptions.push([...t.currentOptionValue]), r === "," && (t.currentOptionValue.pop(), t.depth--)
    }

    function mr(e, t, n) {
        return n === " " || n === "," && e[t.index - 1] !== ","
    }

    function hr(e, t) {
        let n = e.match(/\d+$/g) ? .[0];
        if (n === void 0) return;
        let r = Number.parseInt(n, 10);
        if (t.rangeStart !== null) {
            dt(t, r + 1);
            return
        }
        t.currentOptionValue[t.depth] = r, t.decodedOptions.push([...t.currentOptionValue])
    }

    function dt(e, t) {
        let n = e.rangeStart;
        if (n !== null) {
            for (let r = n; r < t; r++) e.currentOptionValue[e.depth] = r, e.decodedOptions.push([...e.currentOptionValue]);
            e.rangeStart = null
        }
    }
    var m = (e, t, n, r) => {
            let o = e;
            return n && (o += `

${n}`), r && (o += `

Next steps: ${r}`), {
                content: [{
                    type: "text",
                    text: o
                }],
                structuredContent: t
            }
        },
        gt = "This add has been applied: item_count and total in this result reflect the cart after the update. Adds are cumulative, so calling add_to_cart again for these same items would add duplicates. Lines already in the cart can be changed or removed with update_cart_lines.",
        yt = "This change has been applied: item_count and total in this result reflect the cart after the update, so there is no need to re-run it to confirm. Items not yet in the cart can be added with add_to_cart.",
        mt = "The cart has been emptied: this result reflects its current state, so calling cancel_cart again would have no effect. New items can be added with add_to_cart.",
        V = (e, t, n) => {
            let r = n ? `

${n}` : "";
            return {
                content: [{
                    type: "text",
                    text: `${e}${r}`
                }],
                structuredContent: t
            }
        },
        M = (e, t) => {
            let {
                summary: n,
                navigated: r,
                destination: o,
                keyFields: i
            } = e, a = o ? `the ${o} page` : "the requested page", c = `${r?`This tool has navigated the browser to ${a}, so the shopper will be looking at it without any further navigation. Navigating to the same page again would only reload it.`:`The browser was already on ${a}, so no navigation was needed.`}

${n}`;
            return i && (c += `

${i}`), {
                content: [{
                    type: "text",
                    text: c
                }],
                structuredContent: t
            }
        },
        f = (e, t) => {
            let n = `Error: ${e}`;
            return t && (n += `
Recovery: ${t}`), {
                content: [{
                    type: "text",
                    text: n
                }],
                structuredContent: {
                    error: e
                },
                isError: !0
            }
        },
        g = (e, t, n, r) => {
            if (t.aborted || Z(e)) throw e;
            return f(e instanceof Error ? e.message : n, r)
        },
        B = () => {
            let e = window.Shopify ? .actions;
            if (!e ? .getCart || !e.updateCart) throw new Error("Standard Actions are not available. Ensure Shopify Standard Actions are available before calling cart tools.");
            return e
        },
        $ = async (e, t = B()) => (await t.getCart(void 0, {
            signal: e
        })).cart ? ? {},
        ne = e => {
            De(e)
        },
        re = e => {
            let t = e.userErrors ? .map(n => n.message).filter(Boolean);
            if (t ? .length) throw new Error(t.join(", "))
        },
        oe = e => e.warnings ? .map(t => t.message).filter(_e) ? ? [],
        ht = e => e.lines ? .nodes ? ? [],
        D = e => e.totalQuantity ? ? 0,
        pt = new Map,
        bt = e => {
            let t = String(e ? ? "").toUpperCase();
            if (!t) return 2;
            let n = pt.get(t);
            if (n != null) return n;
            try {
                let r = new Intl.NumberFormat("en", {
                    style: "currency",
                    currency: t
                }).resolvedOptions().maximumFractionDigits ? ? 2;
                return pt.set(t, r), r
            } catch {
                return 2
            }
        },
        b = e => {
            if (e ? .amount == null || !e.currencyCode) return null;
            let t = Number(e.amount);
            if (!Number.isFinite(t)) return null;
            let n = {
                    amount: Math.round(t * 10 ** bt(e.currencyCode)),
                    currency: e.currencyCode
                },
                r = v(n);
            return r ? { ...n,
                display: r
            } : n
        },
        v = e => {
            if (!e) return "";
            let t = bt(e.currency),
                n = e.amount / 10 ** t;
            try {
                return new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: e.currency
                }).format(n)
            } catch {
                return `${n.toFixed(t)} ${e.currency}`
            }
        },
        _e = e => typeof e == "string" && e.length > 0,
        I = e => {
            if (typeof window > "u") return !1;
            let t = new URL(window.location.href);
            return t.pathname + t.search === e
        },
        x = (e, t, n = 0) => {
            let {
                signal: r
            } = e;
            if (r.aborted) return;
            let o = setTimeout(() => {
                    r.aborted || e.navigate(t), i()
                }, n),
                i = Ne(r, () => clearTimeout(o))
        },
        ft = "gid://shopify/ProductVariant/";

    function C(e) {
        if (e === void 0) return "";
        let t = String(e).trim(),
            n = t.startsWith(ft) ? t.slice(ft.length) : t;
        return /^\d+$/.test(n) ? n : ""
    }
    var br = `/api/${lt}/graphql.json`,
        Se = 30,
        _r = 50,
        _t = 50,
        Sr = "gid://shopify/Product/",
        ve = y("fragment WebMcpMoney on MoneyV2{amount currencyCode}"),
        Te = y("fragment WebMcpProductCard on Product{id title handle vendor productType availableForSale onlineStoreUrl featuredImage{url altText}priceRange{minVariantPrice{...WebMcpMoney}}variantsCount{count}options{name optionValues{name}}}", [ve]),
        Ct = y("fragment WebMcpProductForCart on Product{title handle selectedOrFirstAvailableVariant{id title availableForSale}}"),
        vr = y("fragment WebMcpCartDetails on Cart{id totalQuantity cost{totalAmount{...WebMcpMoney}}lines(first:250){nodes{id quantity cost{totalAmount{...WebMcpMoney}}merchandise{__typename ...on ProductVariant{id title image{url altText}price{...WebMcpMoney}product{id title handle onlineStoreUrl}}}}}}", [ve]),
        Tr = y("fragment WebMcpProductVariant on ProductVariant{id title availableForSale sku price{...WebMcpMoney}compareAtPrice{...WebMcpMoney}selectedOptions{name value}product{handle}}", [ve]),
        wt = y("fragment WebMcpProductDetails on Product{id title handle descriptionHtml vendor productType tags availableForSale onlineStoreUrl featuredImage{url altText}priceRange{minVariantPrice{...WebMcpMoney}maxVariantPrice{...WebMcpMoney}}variantsCount{count}encodedVariantAvailability selectedOrFirstAvailableVariant{...WebMcpProductVariant}options{name optionValues{name}}images(first:20){nodes{url altText}}}", [Tr]),
        Cr = y("query WebMcpSearchCatalog($query:String!$types:[PredictiveSearchType!]$limit:Int!){predictiveSearch(query:$query types:$types limit:$limit){products{...WebMcpProductCard}collections{title handle description onlineStoreUrl}articles{title handle excerpt onlineStoreUrl}pages{title handle onlineStoreUrl}}}", [Te]),
        wr = y("query WebMcpSearchPoliciesAndFaqs($query:String!$types:[PredictiveSearchType!]$limit:Int!$includeRefund:Boolean!$includeShipping:Boolean!$includePrivacy:Boolean!$includeTermsOfService:Boolean!$includeTermsOfSale:Boolean!$includeSubscription:Boolean!$includeLegalNotice:Boolean!$includeContact:Boolean!){shop{refundPolicy@include(if:$includeRefund){title body url}shippingPolicy@include(if:$includeShipping){title body url}privacyPolicy@include(if:$includePrivacy){title body url}termsOfService@include(if:$includeTermsOfService){title body url}termsOfSale@include(if:$includeTermsOfSale){title body url}subscriptionPolicy@include(if:$includeSubscription){title body url}legalNotice@include(if:$includeLegalNotice){title body url}contactInformation@include(if:$includeContact){title body url}}predictiveSearch(query:$query types:$types limit:$limit){articles{title handle excerpt onlineStoreUrl}pages{title handle onlineStoreUrl}}}"),
        Ar = 3,
        Er = y("query WebMcpPageBodies($h1:String$h2:String$h3:String){p1:page(handle:$h1){title body}p2:page(handle:$h2){title body}p3:page(handle:$h3){title body}}"),
        Rr = y("query WebMcpListCollections($first:Int!){collections(first:$first){nodes{title handle description onlineStoreUrl}}}"),
        Pr = y("query WebMcpBrowseProducts($first:Int!$sortKey:ProductSortKeys$reverse:Boolean!){products(first:$first sortKey:$sortKey reverse:$reverse){nodes{...WebMcpProductCard}}}", [Te]),
        Or = y("query WebMcpBrowseCollectionProducts($handle:String!$first:Int!$sortKey:ProductCollectionSortKeys$reverse:Boolean!){collection(handle:$handle){title handle description onlineStoreUrl products(first:$first sortKey:$sortKey reverse:$reverse){nodes{...WebMcpProductCard}}}}", [Te]),
        Mr = y("query WebMcpProductByHandle($handle:String!$selectedOptions:[SelectedOptionInput!]!$hasSelectedOptions:Boolean!){product(handle:$handle){...WebMcpProductDetails variantBySelectedOptions(selectedOptions:$selectedOptions caseInsensitiveMatch:true)@include(if:$hasSelectedOptions){...WebMcpProductVariant}}}", [wt]),
        Ir = y("query WebMcpProductById($id:ID!$selectedOptions:[SelectedOptionInput!]!$hasSelectedOptions:Boolean!){node(id:$id){__typename ...on Product{...WebMcpProductDetails variantBySelectedOptions(selectedOptions:$selectedOptions caseInsensitiveMatch:true)@include(if:$hasSelectedOptions){...WebMcpProductVariant}}}}", [wt]),
        xr = y("query WebMcpVariantProductHandle($id:ID!$handle:String!){node(id:$id){__typename ...on ProductVariant{product{id handle}}}requested:product(handle:$handle){id}}"),
        Lr = y("query WebMcpProductForCartByHandle($handle:String!){product(handle:$handle){...WebMcpProductForCart}}", [Ct]),
        $r = y("query WebMcpCartDetails($id:ID!){cart(id:$id){...WebMcpCartDetails}}", [vr]),
        Dr = y("query WebMcpSearchProductForCart($query:String!){predictiveSearch(query:$query types:[PRODUCT]limit:1){products{...WebMcpProductForCart}}}", [Ct]);
    async function At(e, t, n) {
        let r = await w(Cr, {
            query: e,
            types: ["PRODUCT", "COLLECTION", "ARTICLE", "PAGE"],
            limit: t
        }, n);
        return {
            predictiveSearch: Fr(r.predictiveSearch)
        }
    }
    var Et = [{
            type: "refund",
            field: "refundPolicy",
            include: "includeRefund"
        }, {
            type: "shipping",
            field: "shippingPolicy",
            include: "includeShipping"
        }, {
            type: "privacy",
            field: "privacyPolicy",
            include: "includePrivacy"
        }, {
            type: "terms_of_service",
            field: "termsOfService",
            include: "includeTermsOfService"
        }, {
            type: "terms_of_sale",
            field: "termsOfSale",
            include: "includeTermsOfSale"
        }, {
            type: "subscription",
            field: "subscriptionPolicy",
            include: "includeSubscription"
        }, {
            type: "legal_notice",
            field: "legalNotice",
            include: "includeLegalNotice"
        }, {
            type: "contact",
            field: "contactInformation",
            include: "includeContact"
        }],
        Ce = Et.map(e => e.type);
    async function Rt(e, t, n, r) {
        let o = new Set(n),
            i = await w(wr, {
                query: e,
                types: ["ARTICLE", "PAGE"],
                limit: t,
                includeRefund: o.has("refund"),
                includeShipping: o.has("shipping"),
                includePrivacy: o.has("privacy"),
                includeTermsOfService: o.has("terms_of_service"),
                includeTermsOfSale: o.has("terms_of_sale"),
                includeSubscription: o.has("subscription"),
                includeLegalNotice: o.has("legal_notice"),
                includeContact: o.has("contact")
            }, r),
            a = (i.predictiveSearch ? .pages ? ? []).map(Ee),
            s = (i.predictiveSearch ? .articles ? ? []).map(Ae);
        return {
            policies: Nr(i.shop),
            articles: s,
            pages: await Ur(a, r)
        }
    }

    function Nr(e) {
        return e ? Et.flatMap(({
            type: t,
            field: n
        }) => {
            let r = e[n];
            return r ? [{
                type: t,
                title: r.title ? ? "",
                url: r.url ? ? "",
                body: r.body ? ? ""
            }] : []
        }) : []
    }
    async function Ur(e, t) {
        let n = e.filter(s => s.handle).slice(0, Ar);
        if (!n.length) return e;
        let r = n.map(s => s.handle),
            o = await w(Er, {
                h1: r[0] ? ? null,
                h2: r[1] ? ? null,
                h3: r[2] ? ? null
            }, t),
            i = [o.p1, o.p2, o.p3],
            a = new Map;
        return n.forEach((s, c) => {
            let u = i[c] ? .body;
            u && a.set(s.handle, u)
        }), e.map(s => {
            let c = a.get(s.handle);
            return c ? { ...s,
                body: c
            } : s
        })
    }
    async function Pt(e) {
        return {
            collections: {
                nodes: (await w(Rr, {
                    first: _r
                }, e)).collections ? .nodes ? .map(we) ? ? []
            }
        }
    }
    async function Ot(e) {
        let t = await w(Pr, {
            first: Lt(e.page),
            ...kr(e.sortBy)
        }, e.signal);
        return {
            products: $t(t.products ? .nodes ? ? [], e.page).map(H),
            title: "All products"
        }
    }
    async function Mt(e) {
        let t = e.handle.trim(),
            n = await w(Or, {
                handle: t,
                first: Lt(e.page),
                ...qr(e.sortBy)
            }, e.signal),
            r = n.collection ? we(n.collection) : null;
        return {
            collection: r,
            products: $t(n.collection ? .products ? .nodes ? ? [], e.page).map(H),
            title: r ? .title ? ? t
        }
    }
    async function j(e, t) {
        let n = Re(e);
        if (!n) return null;
        let r = Dt(t.selected_options),
            o = r.length > 0;
        if (io(n)) {
            let s = (await w(Ir, {
                id: n,
                selectedOptions: r,
                hasSelectedOptions: o
            }, t.signal)).node;
            return s ? .__typename === "Product" ? Tt(H(s), t) : null
        }
        let i = await w(Mr, {
            handle: n,
            selectedOptions: r,
            hasSelectedOptions: o
        }, t.signal);
        return i.product ? Tt(H(i.product), t) : null
    }
    async function It(e, t, n) {
        let r = await w(xr, {
                id: e,
                handle: t
            }, n),
            o = r.node;
        if (o ? .__typename !== "ProductVariant") return null;
        let i = o.product;
        if (!i ? .handle) return null;
        let a = !!i.id && i.id === r.requested ? .id;
        return {
            handle: i.handle,
            sameProduct: a
        }
    }
    async function Q(e, t, n) {
        let r = e.trim();
        if (!r) return null;
        let i = (await w($r, {
            id: r
        }, n)).cart;
        return i ? {
            id: i.id ? ? r,
            item_count: i.totalQuantity ? ? 0,
            total_price: b(i.cost ? .totalAmount),
            currency: i.cost ? .totalAmount ? .currencyCode ? ? "",
            line_items: (i.lines ? .nodes ? ? []).map(a => Wr(a, t))
        } : null
    }
    async function xt(e) {
        if (e.handle ? .trim()) {
            let t = await w(Lr, {
                handle: e.handle.trim()
            }, e.signal);
            return t.product ? St(t.product) : null
        }
        if (e.query ? .trim()) {
            let n = (await w(Dr, {
                query: e.query.trim()
            }, e.signal)).predictiveSearch ? .products ? .[0];
            return n ? St(n) : null
        }
        return null
    }
    async function w(e, t, n) {
        let r = await fetch(br, {
            method: "POST",
            headers: {
                accept: "application/json",
                "content-type": "application/json"
            },
            body: JSON.stringify({
                query: e,
                variables: t
            }),
            signal: n
        });
        if (!r.ok) throw new Error(`Storefront API request failed (${r.status})`);
        let o = await r.json();
        if (o.errors ? .length) throw new Error(o.errors.map(i => i.message).filter(Boolean).join(", "));
        if (!o.data) throw new Error("Storefront API response did not include data.");
        return o.data
    }

    function Lt(e) {
        return Math.min(Math.max(1, e) * Se, 250)
    }

    function $t(e, t) {
        let n = (Math.max(1, t) - 1) * Se;
        return e.slice(n, n + Se)
    }

    function kr(e) {
        switch (e) {
            case "price-ascending":
                return {
                    sortKey: "PRICE",
                    reverse: !1
                };
            case "price-descending":
                return {
                    sortKey: "PRICE",
                    reverse: !0
                };
            case "title-ascending":
                return {
                    sortKey: "TITLE",
                    reverse: !1
                };
            case "title-descending":
                return {
                    sortKey: "TITLE",
                    reverse: !0
                };
            case "created-ascending":
                return {
                    sortKey: "CREATED_AT",
                    reverse: !1
                };
            case "created-descending":
                return {
                    sortKey: "CREATED_AT",
                    reverse: !0
                };
            case "best-selling":
            default:
                return {
                    sortKey: "BEST_SELLING",
                    reverse: !1
                }
        }
    }

    function qr(e) {
        switch (e) {
            case "price-ascending":
                return {
                    sortKey: "PRICE",
                    reverse: !1
                };
            case "price-descending":
                return {
                    sortKey: "PRICE",
                    reverse: !0
                };
            case "title-ascending":
                return {
                    sortKey: "TITLE",
                    reverse: !1
                };
            case "title-descending":
                return {
                    sortKey: "TITLE",
                    reverse: !0
                };
            case "created-ascending":
                return {
                    sortKey: "CREATED",
                    reverse: !1
                };
            case "created-descending":
                return {
                    sortKey: "CREATED",
                    reverse: !0
                };
            case "best-selling":
            default:
                return {
                    sortKey: "BEST_SELLING",
                    reverse: !1
                }
        }
    }

    function Fr(e) {
        return {
            products: (e ? .products ? ? []).map(H),
            collections: (e ? .collections ? ? []).map(we),
            articles: (e ? .articles ? ? []).map(Jr),
            pages: (e ? .pages ? ? []).map(zr)
        }
    }

    function H(e) {
        let t = e.selectedOrFirstAvailableVariant ? vt(e.selectedOrFirstAvailableVariant) : null,
            n = e.variantBySelectedOptions ? vt(e.variantBySelectedOptions) : null;
        return {
            id: e.id,
            title: e.title,
            handle: e.handle,
            descriptionHtml: e.descriptionHtml,
            vendor: e.vendor,
            productType: e.productType,
            tags: e.tags,
            availableForSale: e.availableForSale,
            onlineStoreUrl: e.onlineStoreUrl,
            featuredImage: e.featuredImage ? ? null,
            priceRange: e.priceRange,
            variantCount: e.variantsCount ? .count ? ? 0,
            selectedOrFirstAvailableVariant: t,
            variantBySelectedOptions: n,
            encodedVariantAvailability: e.encodedVariantAvailability,
            options: Qr(e.options),
            images: Yr(e.images ? .nodes)
        }
    }

    function Wr(e, t) {
        return {
            id: e.id ? ? "",
            quantity: e.quantity ? ? 0,
            line_price: b(e.cost ? .totalAmount),
            item: Vr(e, t)
        }
    }

    function Vr(e, t) {
        let n = Br(e),
            r = n.product;
        return {
            id: n.id,
            title: r.title,
            variant_title: n.title,
            handle: r.handle,
            url: jr({
                handle: r.handle,
                onlineStoreUrl: r.onlineStoreUrl
            }, n.id, t),
            image: n.image,
            unit_price: b(n.price)
        }
    }

    function Br(e) {
        let t = e.merchandise,
            n = t ? .__typename === "ProductVariant" ? t : null;
        return {
            id: n ? .id ? ? "",
            title: n ? .title ? ? "",
            image: n ? .image ? .url ? ? "",
            price: n ? .price,
            product: Hr(n ? .product)
        }
    }

    function Hr(e) {
        return {
            id: e ? .id ? ? "",
            title: e ? .title ? ? "",
            handle: e ? .handle ? ? "",
            onlineStoreUrl: e ? .onlineStoreUrl
        }
    }

    function jr(e, t, n) {
        let r = Y(e, a => n.product(a));
        if (!r) return "";
        let o = t.split("/").pop();
        if (!o) return r;
        let i = r.includes("?") ? "&" : "?";
        return `${r}${i}variant=${encodeURIComponent(o)}`
    }

    function St(e) {
        let t = e.selectedOrFirstAvailableVariant;
        return !t ? .id || !t.availableForSale ? null : {
            product: {
                title: e.title,
                handle: e.handle
            },
            variant: {
                merchandise_id: t.id,
                title: t.title
            }
        }
    }

    function Qr(e) {
        return e ? .map(t => ({
            name: t.name ? ? "",
            values: t.optionValues ? .map(n => n.name) ? ? []
        })) ? ? []
    }

    function Gr(e) {
        return e ? .map(t => ({
            name: t.name ? ? "",
            value: t.value ? ? ""
        })) ? ? []
    }

    function Yr(e) {
        return e ? .filter(Kr) ? ? []
    }

    function vt(e) {
        return {
            id: e.id ? ? "",
            title: e.title ? ? "",
            availableForSale: !!e.availableForSale,
            price: e.price,
            compareAtPrice: e.compareAtPrice,
            sku: e.sku,
            selectedOptions: Gr(e.selectedOptions),
            productHandle: e.product ? .handle ? ? void 0
        }
    }

    function Kr(e) {
        return e != null
    }

    function we(e) {
        return {
            title: e.title,
            handle: e.handle,
            description: e.description,
            onlineStoreUrl: e.onlineStoreUrl
        }
    }

    function Jr(e) {
        return {
            title: e.title,
            handle: e.handle,
            excerpt: e.excerpt,
            onlineStoreUrl: e.onlineStoreUrl
        }
    }

    function zr(e) {
        return {
            title: e.title,
            handle: e.handle,
            onlineStoreUrl: e.onlineStoreUrl
        }
    }

    function G(e, t) {
        let n = ao(e);
        return {
            id: e.id ? ? "",
            title: e.title ? ? "",
            handle: n,
            url: Xr(e, n, t),
            price_range: b(e.priceRange ? .minVariantPrice),
            image: Ut(e.featuredImage),
            available: !!e.availableForSale,
            variant_count: e.variantCount ? ? 0,
            options: e.options ? ? [],
            product_type: e.productType ? ? "",
            vendor: e.vendor ? ? ""
        }
    }

    function Xr(e, t, n) {
        return Y({
            handle: t,
            onlineStoreUrl: e.onlineStoreUrl
        }, r => n.product(r))
    }

    function Tt(e, t) {
        let n = G(e, t.routes),
            r = e.options ? ? [],
            o = Dt(t.selected_options),
            i = eo(r, e, o),
            a = Zr(e, o);
        return { ...n,
            description: {
                html: e.descriptionHtml ? ? ""
            },
            type: e.productType ? ? "",
            tags: e.tags ? ? [],
            price_range: {
                min: b(e.priceRange ? .minVariantPrice),
                max: b(e.priceRange ? .maxVariantPrice)
            },
            variants: a.map(s => oo(s, n.handle)),
            available_options: i.options,
            available_options_count: i.count,
            available_options_truncated: i.truncated,
            available_options_filter: o.length ? o : void 0,
            images: e.images ? .map(Ut).filter(_e) ? ? []
        }
    }

    function Zr(e, t) {
        return t.length ? e.variantBySelectedOptions ? [e.variantBySelectedOptions] : [] : e.selectedOrFirstAvailableVariant ? [e.selectedOrFirstAvailableVariant] : []
    }

    function eo(e, t, n) {
        let r = ut(t.encodedVariantAvailability),
            o = [];
        for (let s of r) {
            let c = to(e, s);
            c && no(c, n) && o.push(c)
        }
        let a = n.length > 0 || o.length <= _t ? o.slice(0, _t) : [];
        return {
            options: a,
            count: o.length,
            truncated: o.length > a.length
        }
    }

    function to(e, t) {
        if (!e.length || t.length !== e.length) return null;
        let n = [];
        for (let [r, o] of e.entries()) {
            let i = o.values[t[r]];
            if (!i) return null;
            n.push({
                name: o.name,
                value: i
            })
        }
        return n
    }

    function no(e, t) {
        return t.every(n => e.some(r => ro(r, n)))
    }

    function ro(e, t) {
        return ie(e.name) === ie(t.name) && ie(e.value) === ie(t.value)
    }

    function Dt(e) {
        return e ? .map(t => ({
            name: t.name ? .trim() ? ? "",
            value: t.value ? .trim() ? ? ""
        })).filter(t => t.name && t.value) ? ? []
    }

    function ie(e) {
        return e ? .trim().toLowerCase() ? ? ""
    }

    function oo(e, t) {
        let n = e.productHandle && e.productHandle !== t ? e.productHandle : void 0;
        return {
            id: e.id ? ? "",
            title: e.title ? ? "",
            options: e.selectedOptions ? ? [],
            price: b(e.price),
            list_price: b(e.compareAtPrice),
            availability: {
                available: !!e.availableForSale
            },
            sku: e.sku ? ? void 0,
            ...n ? {
                product_handle: n
            } : {}
        }
    }

    function ae(e, t) {
        let n = e.handle ? ? "";
        return {
            title: e.title ? ? "",
            handle: n,
            url: Y(e, r => t.collection(r)),
            description: e.description ? ? ""
        }
    }

    function Ae(e) {
        return {
            title: e.title ? ? "",
            handle: e.handle ? ? "",
            url: Y(e),
            excerpt: e.excerpt ? ? ""
        }
    }

    function Ee(e) {
        return {
            title: e.title ? ? "",
            handle: e.handle ? ? "",
            url: Y(e)
        }
    }

    function Y(e, t) {
        let n = Nt(e.onlineStoreUrl);
        if (n) return n;
        let r = e.handle ? .trim();
        return r ? t ? .(r) ? ? "" : ""
    }

    function Re(e) {
        let t = e ? .trim();
        return t ? L(t) || t : ""
    }

    function io(e) {
        return e.startsWith(Sr)
    }

    function ao(e) {
        return e.handle ? ? L(Nt(e.onlineStoreUrl))
    }

    function Nt(e) {
        if (!e) return "";
        if (e.startsWith("/")) return e;
        try {
            let t = new URL(e);
            return e.replace(t.origin, "")
        } catch {
            return e
        }
    }

    function Ut(e) {
        return e ? .url ? ? ""
    }
    var so = new Set(["best-selling", "price-ascending", "price-descending", "title-ascending", "title-descending", "created-ascending", "created-descending"]),
        qt = async (e, t) => {
            try {
                let n = e.collection ? .trim(),
                    r = e.navigate === !0;
                if (!n) return lo(await Pt(t.signal), t.routes, r);
                let o = Math.max(1, Number(e.page) || 1),
                    i = po(e.sort_by),
                    a = await co(n, i, o, t.signal);
                return uo(n, a, i, o, t, r)
            } catch (n) {
                return g(n, t.signal, "Failed to browse store", "Try browsing without a collection to list available collections.")
            }
        };
    async function co(e, t, n, r) {
        return e === "all" ? Ot({
            page: n,
            sortBy: t,
            signal: r
        }) : Mt({
            handle: e,
            page: n,
            sortBy: t,
            signal: r
        })
    }

    function lo(e, t, n) {
        let r = e.collections ? .nodes ? .map(i => ae(i, t)) ? ? [],
            o = n ? 'A collection handle is required to navigate. Ask the user which collection, or call browse_store again with a specific collection handle (or "all") and navigate=true.' : 'Call browse_store with a collection handle, or with collection "all" to browse products. Set navigate=true to take the user to the collection page.';
        return m(`Found ${r.length} collection${r.length!==1?"s":""}.`, {
            collections: r,
            products: [],
            navigated: !1
        }, fo(r), o)
    }

    function uo(e, t, n, r, o, i) {
        let {
            routes: a
        } = o;
        if (e !== "all" && !t.collection) return f(`Collection "${e}" was not found.`, "Call browse_store without a collection to list available collections.");
        let s = t.products.map(l => G(l, a)),
            c = a.collection(e),
            u = {
                collections: [],
                products: s,
                collection_title: t.title,
                page: r,
                sort_by: n,
                url: c
            };
        if (i) {
            let l = !I(c);
            return l && x(o, c), M({
                summary: l ? `Showing the ${t.title} collection.` : `Already showing the ${t.title} collection.`,
                navigated: l,
                destination: `${t.title} collection`,
                keyFields: kt(s)
            }, { ...u,
                navigated: l
            })
        }
        return m(`Showing ${s.length} product${s.length!==1?"s":""} from ${t.title}.`, { ...u,
            navigated: !1
        }, kt(s), "If the user asked to be taken to this collection, call browse_store again with navigate=true. If the user wants the selected or first available variant, call add_to_cart with cart.line_items using the product handle. If the user requested a specific color, size, material, or other option, call get_product with catalog.id and any known catalog.selected_options, then use the matching variants[].id with add_to_cart, OR call show_variant with selected_options to just navigate to that variant.")
    }

    function po(e) {
        return e && so.has(e) ? e : "best-selling"
    }

    function fo(e) {
        return e.length ? `Collections:
${e.map(t=>`- ${t.title} (${t.handle})`).join(`
`)}` : null
    }

    function kt(e) {
        return e.length ? `Products:
${e.map(t=>`- ${t.title} (id: ${t.id}, handle: ${t.handle}) - ${v(t.price_range)||"price unavailable"}`).join(`
`)}` : null
    }
    var Ft = 10,
        Wt = async (e, t) => {
            let n = e.cart ? .line_items;
            if (!Array.isArray(n) || n.length === 0) return f("No line_items provided.", "Call add_to_cart with cart.line_items.");
            let r = n.slice(0, Ft);
            try {
                let o = await Promise.all(r.map((a, s) => yo(a ? ? {}, s, t.signal))),
                    i = o.filter(Qt);
                return i.length ? Ht(i, o, r.length) : await Bt(o.filter(Gt), t, gt)
            } catch (o) {
                return g(o, t.signal, "Cart update failed", "Call get_cart to verify cart state, then retry add_to_cart with an explicit line_items[].item.id.")
            }
        },
        Vt = async (e, t) => {
            let n = e.cart ? .line_items;
            if (!Array.isArray(n) || n.length === 0) return f("No line_items provided.", "Call get_cart, then call update_cart_lines with cart.line_items[].id and the target quantity.");
            let r = n.slice(0, Ft),
                o = r.map((a, s) => go(a ? ? {}, s)),
                i = o.filter(Qt);
            if (i.length) return Ht(i, o, r.length);
            try {
                return await Bt(o.filter(Gt), t, yt)
            } catch (a) {
                return g(a, t.signal, "Cart update failed", "Call get_cart to verify cart state, then retry update_cart_lines with the current line_items[].id.")
            }
        };
    async function Bt(e, t, n) {
        let r = e.filter(se),
            o = await Mo(r, t),
            i = new Set(o.map(({
                add: S
            }) => C(S.merchandiseId))),
            a = e.filter(S => !(S.type === "add" && i.has(C(S.merchandiseId))));
        if (k("decision", {
                requested: e.length,
                skippedAsDuplicate: o.length,
                willWrite: a.length
            }), a.length === 0) return xo(o);
        ne(t.signal);
        let c = await B().updateCart({
            lines: a.map(S => S.type === "update" ? {
                id: S.id,
                quantity: S.quantity
            } : {
                merchandiseId: S.merchandiseId,
                quantity: S.quantity
            })
        });
        re(c);
        let u = a.filter(se);
        u.length ? Po(u) : Me();
        let l = oe(c),
            p = c.cart ? ? {},
            h = b(p.cost ? .totalAmount),
            d = await So(u, p.id, t),
            T = V([vo(a, D(p), h, l), Lo(o)].filter(Boolean).join(" "), {
                updated: !0,
                ...o.length ? {
                    deduped: !0
                } : {},
                item_count: D(p),
                total_price: h,
                line_items: d,
                warnings: l.length ? l : void 0
            }, n);
        return u.length && !t.signal.aborted && Oo(u), T
    }

    function go(e, t) {
        if (!e.id) return {
            type: "unresolved",
            item: t + 1,
            kind: "needs-cart-line",
            reason: "update_cart_lines needs the cart line's id. Call get_cart and pass line_items[].id, or use add_to_cart if this item is not in the cart yet."
        };
        let n = Oe(e.quantity);
        return n === null ? {
            type: "unresolved",
            item: t + 1,
            kind: "needs-cart-line",
            reason: `line_items[${t}] is missing a readable quantity. update_cart_lines needs the ABSOLUTE target quantity for the line (0 removes it); it cannot assume one.`
        } : n < 0 ? {
            type: "unresolved",
            item: t + 1,
            kind: "needs-cart-line",
            reason: `line_items[${t}] has a negative quantity (${n}). update_cart_lines takes the ABSOLUTE target quantity, not a delta \u2014 pass the quantity the line should end up at, or 0 to remove it.`
        } : {
            type: "update",
            id: e.id,
            quantity: n
        }
    }
    async function yo(e, t, n) {
        let r = ho(e.quantity),
            o = mo(e);
        if (o) return {
            type: "unresolved",
            item: t + 1,
            kind: "needs-cart-line",
            reason: `line_items[${t}] has a cart line id ("${o}"), so it is already in the cart. add_to_cart only adds new merchandise \u2014 call update_cart_lines with that id to change its quantity or remove it.`,
            query: e.query,
            handle: e.handle
        };
        if (bo(e.quantity)) return {
            type: "unresolved",
            item: t + 1,
            kind: "needs-cart-line",
            reason: "add_to_cart can only add. To remove an item or set its quantity to 0, call get_cart for the line id and then update_cart_lines.",
            query: e.query,
            handle: e.handle
        };
        if (e.item ? .id) return {
            type: "add",
            merchandiseId: e.item.id,
            quantity: r
        };
        let i = await xt({
            handle: e.handle,
            query: e.query,
            signal: n
        });
        return i ? {
            type: "add",
            merchandiseId: i.variant.merchandise_id,
            quantity: r,
            productTitle: i.product.title,
            variantTitle: i.variant.title
        } : {
            type: "unresolved",
            item: t + 1,
            kind: "lookup-failed",
            reason: e.handle ? `Could not resolve product handle "${e.handle}".` : e.query ? `Could not find a product for query "${e.query}".` : "Missing item.id, handle, or query.",
            query: e.query,
            handle: e.handle
        }
    }

    function mo(e) {
        let t = e.id;
        return typeof t == "string" && t.trim() !== "" ? t : void 0
    }

    function Oe(e) {
        let t = typeof e == "number" ? e : typeof e == "string" && e.trim() !== "" ? Number(e) : Number.NaN;
        return Number.isFinite(t) ? Math.floor(t) : null
    }

    function ho(e) {
        let t = Oe(e);
        return t === null ? 1 : Math.max(1, t)
    }

    function bo(e) {
        let t = Oe(e);
        return t !== null && t <= 0
    }

    function Ht(e, t, n) {
        let r = t.filter(se),
            o = e.map(i => `- Item ${i.item}: ${i.reason}`).join(`
`);
        return m(`Need clarification for ${e.length} of ${n} line_item${n===1?"":"s"}. Nothing changed.`, {
            updated: !1,
            unresolved_items: e,
            resolved_items: r.map(jt)
        }, o, _o(e))
    }

    function _o(e) {
        let t = [];
        return e.some(({
            kind: n
        }) => n === "lookup-failed") && t.push("NOTHING was added \u2014 not even the line items that resolved. Resolve the problem above (search_catalog or get_product for an explicit product or variant id), then call add_to_cart again with the COMPLETE set of line items for this request, including the ones listed as resolved: re-sending only the failed one would drop the rest. For specific variant requests prefer line_items[].item.id from get_product variants[].id."), e.some(({
            kind: n
        }) => n === "needs-cart-line") && t.push("To change or remove something already in the cart, call get_cart and pass that line's line_items[].id to update_cart_lines with the ABSOLUTE target quantity (0 removes the line). A handle or query can never remove or reduce a line."), t.join(" ")
    }
    async function So(e, t, n) {
        let r = e.map(jt);
        if (!t || e.length === 0) return r;
        let o;
        try {
            o = await Q(t, n.routes, n.signal)
        } catch {
            return r
        }
        if (!o) return r;
        let i = new Map;
        for (let a of o.line_items) {
            let s = C(a.item.id);
            s && i.set(s, a)
        }
        return e.map((a, s) => {
            let c = i.get(C(a.merchandiseId));
            return c ? {
                item: c.item,
                quantity: c.quantity,
                requested_quantity: a.quantity
            } : r[s]
        })
    }

    function jt(e) {
        return {
            item: {
                id: e.merchandiseId,
                title: e.productTitle ? ? "",
                variant_title: e.variantTitle ? ? "",
                handle: "",
                url: "",
                image: "",
                unit_price: null
            },
            quantity: e.quantity,
            requested_quantity: e.quantity
        }
    }

    function vo(e, t, n, r) {
        let o = e.filter(se),
            i = e.filter(To),
            a = o.reduce((l, p) => l + p.quantity, 0),
            s = [];
        o.length && s.push(`Added ${a} item${a===1?"":"s"} across ${o.length} product${o.length===1?"":"s"}`), i.length && s.push(`updated ${i.length} line${i.length===1?"":"s"}`);
        let c = `Cart now has ${t} item${t===1?"":"s"}${n?` totaling ${v(n)}`:""}.`,
            u = r.length ? ` Warnings: ${r.join("; ")}.` : "";
        return `${s.join(" and ")}. ${c}${u}`
    }

    function Qt(e) {
        return e.type === "unresolved"
    }

    function Gt(e) {
        return e.type === "add" || e.type === "update"
    }

    function se(e) {
        return e.type === "add"
    }

    function To(e) {
        return e.type === "update"
    }
    var Co = 6e4,
        Yt = "shopify.webmcp.recentAdds",
        Pe = new Map;

    function wo(e) {
        if (typeof e != "object" || e === null) return !1;
        let t = e;
        return typeof t.merchandiseId == "string" && typeof t.quantity == "number" && typeof t.at == "number" && typeof t.confirmed == "boolean"
    }

    function K() {
        let e = Ao();
        return e && e.size > 0 ? e : new Map(Pe)
    }

    function Ao() {
        try {
            let e = window.sessionStorage.getItem(Yt);
            if (!e) return;
            let t = JSON.parse(e);
            if (typeof t != "object" || t === null) return;
            let n = new Map;
            for (let [r, o] of Object.entries(t)) {
                if (!wo(o)) continue;
                let i = C(r);
                i && n.set(i, o)
            }
            return n
        } catch {
            return
        }
    }

    function J(e) {
        Pe.clear();
        for (let [t, n] of e) Pe.set(t, n);
        try {
            window.sessionStorage.setItem(Yt, JSON.stringify(Object.fromEntries(e)))
        } catch {}
    }

    function Me() {
        J(new Map)
    }

    function Eo(e) {
        let t = K(),
            n = t.get(e);
        if (n) {
            if (Date.now() - n.at >= Co) {
                t.delete(e), J(t);
                return
            }
            return n
        }
    }

    function Ro(e) {
        let t = K();
        t.delete(e) && J(t)
    }

    function Po(e) {
        let t = K(),
            n = Date.now();
        for (let r of e) t.set(C(r.merchandiseId), {
            merchandiseId: r.merchandiseId,
            quantity: r.quantity,
            at: n,
            confirmed: !1
        });
        J(t), k("remember", {
            merchandiseIds: e.map(r => r.merchandiseId)
        })
    }

    function Oo(e) {
        let t = K(),
            n = !1;
        for (let r of e) {
            let o = t.get(C(r.merchandiseId));
            o && (o.confirmed = !0, n = !0)
        }
        n && J(t)
    }

    function k(e, t) {
        try {
            if (typeof window > "u" || !Reflect.get(window, "__WEBMCP_CART_DEBUG__")) return;
            console.warn(`[webmcp:cart-guard] ${e}`, t)
        } catch {}
    }
    async function Mo(e, t) {
        let n = e.flatMap(o => {
            let i = Eo(C(o.merchandiseId));
            return i ? [{
                add: o,
                remembered: i
            }] : []
        });
        if (k("requested", {
                requested: e.map(o => o.merchandiseId),
                remembered: [...K().keys()],
                suspected: n.map(({
                    add: o
                }) => o.merchandiseId)
            }), n.length === 0) return [];
        let r = await Io(t);
        return k("cart-lookup", {
            conclusive: r !== void 0,
            merchandiseInCart: r ? [...r.keys()] : null
        }), r ? n.flatMap(({
            add: o,
            remembered: i
        }) => {
            let a = r.get(C(o.merchandiseId));
            return a ? (k("duplicate", {
                merchandiseId: o.merchandiseId,
                cartLineId: a.cartLineId
            }), [{
                add: o,
                remembered: i,
                cartLineId: a.cartLineId,
                cartQuantity: a.quantity
            }]) : (k("released", {
                merchandiseId: o.merchandiseId,
                reason: "positively absent from a conclusive cart lookup"
            }), Ro(C(o.merchandiseId)), [])
        }) : n.map(({
            add: o,
            remembered: i
        }) => ({
            add: o,
            remembered: i,
            cartLineId: void 0,
            cartQuantity: i.quantity
        }))
    }
    async function Io(e) {
        try {
            let t = await $(e.signal);
            if (!t.id) return;
            let n = await Q(t.id, e.routes, e.signal);
            if (!n) return;
            let r = new Map,
                o = 0;
            for (let i of n.line_items) {
                let a = C(i.item.id);
                if (!a) {
                    o += 1;
                    continue
                }
                let s = r.get(a);
                r.set(a, s ? {
                    cartLineId: void 0,
                    quantity: s.quantity + i.quantity
                } : {
                    cartLineId: i.id,
                    quantity: i.quantity
                })
            }
            return o > 0 || r.size === 0 && D(t) > 0 ? void 0 : r
        } catch {
            return
        }
    }

    function xo(e) {
        let n = e.some(({
            remembered: r
        }) => !r.confirmed) ? "These items are ALREADY in the cart. The earlier add_to_cart call was cancelled, but the cart update had already been applied before the cancellation, so it was never reported back. I did not add them again (that would duplicate them)." : "An identical add was just applied \u2014 the cart already includes these items, so I did not add them again (this prevents accidental duplicates).";
        return m(n, {
            updated: !1,
            deduped: !0
        }, Kt(e) || null, `Call get_cart if you need the authoritative post-update cart contents. ${Jt(e)} Otherwise do NOT repeat this call \u2014 the previous update already succeeded.`)
    }

    function Lo(e) {
        return e.length === 0 ? "" : `Skipped ${e.length} line item${e.length===1?"":"s"} already added to this cart, to avoid duplicating ${e.length===1?"it":"them"}: ${Kt(e)} ${Jt(e)}`
    }

    function Kt(e) {
        return e.map(({
            add: t,
            cartLineId: n,
            cartQuantity: r
        }) => {
            let o = t.productTitle ? `${t.productTitle}${t.variantTitle?` (${t.variantTitle})`:""}` : t.merchandiseId,
                i = n ? `, cart line id ${n}` : "";
            return `- ${o}: already in the cart with quantity ${r}${i}`
        }).join(`
`)
    }

    function Jt(e) {
        return e.every(({
            cartLineId: n
        }) => n) ? "If the shopper truly wants MORE of the same item, call update_cart_lines with the cart line id above and the ABSOLUTE total quantity they want (not the number to add)." : "If the shopper truly wants MORE of the same item, call get_cart and set that line's ABSOLUTE total quantity with update_cart_lines."
    }
    var zt = async (e, t) => {
        try {
            let n = B(),
                r = await $(t.signal, n),
                o = D(r);
            if (o === 0) return V("Cart is already empty.", {
                cleared: !0,
                previous_item_count: 0
            });
            let i = ht(r).filter(u => u.id).map(u => ({
                id: u.id,
                quantity: 0
            }));
            ne(t.signal);
            let a = await n.updateCart({
                lines: i
            });
            re(a), Me();
            let s = oe(a),
                c = s.length ? ` Warnings: ${s.join("; ")}.` : "";
            return V(`Cart cleared. Removed ${o} item${o!==1?"s":""}.${c}`, {
                cleared: !0,
                previous_item_count: o,
                ...s.length && {
                    warnings: s
                }
            }, mt)
        } catch (n) {
            return g(n, t.signal, "Failed to clear cart", "Try update_cart_lines with each line_items[].id and quantity 0 to remove items individually.")
        }
    };
    var Xt = async (e, t) => {
        try {
            let n = await $(t.signal),
                r = D(n);
            if (r === 0) return f("Cart is empty. Add items before checking out.", "Use search_catalog or add_to_cart to add products first.");
            let o = b(n.cost ? .totalAmount),
                i = t.routes.checkout(),
                a = !I(i);
            a && x(t, i);
            let s = o ? ` totaling ${v(o)}` : "",
                c = a ? `Taken you to checkout with ${r} item${r!==1?"s":""}${s}.` : `Already on the checkout page with ${r} item${r!==1?"s":""}${s}.`;
            return M({
                summary: c,
                navigated: a,
                destination: "checkout"
            }, {
                navigating_to: i,
                item_count: r,
                total_price: o
            })
        } catch (n) {
            return g(n, t.signal, "Failed to initiate checkout", "Call get_cart to verify cart contents, then retry.")
        }
    };
    var en = async (e, t) => {
            try {
                let n = await $(t.signal);
                if ((n.totalQuantity ? ? 0) === 0 || !n.id) return $o(n);
                let o = await Q(n.id, t.routes, t.signal);
                return Zt(o || ko(n, t.routes))
            } catch (n) {
                return g(n, t.signal, "Failed to fetch cart", "Try again - this is usually a transient error.")
            }
        },
        $o = e => {
            let t = {
                id: e.id ? ? "",
                item_count: 0,
                total_price: b(e.cost ? .totalAmount),
                currency: e.cost ? .totalAmount ? .currencyCode ? ? "",
                line_items: []
            };
            return m("Cart is empty.", t, null, "Use search_catalog or browse_store to help the user find products to add. Then call add_to_cart with cart.line_items.")
        },
        Zt = e => m(Do(e), e, No(e.line_items), "To modify quantities, call update_cart_lines with the line_items[].id from this response and the new quantity. To remove an item, call update_cart_lines with quantity 0. To proceed, use proceed_to_checkout."),
        Do = e => {
            let t = e.line_items.slice(0, 3).map(tn).join(", "),
                n = e.line_items.length > 3 ? ` and ${e.line_items.length-3} more` : "",
                r = e.item_count === 1 ? "" : "s",
                o = v(e.total_price) || "unknown total";
            return `Cart has ${e.item_count} item${r} totaling ${o}: ${t}${n}.`
        },
        No = e => `Cart line items:
` + e.map(Uo).join(`
`),
        Uo = e => {
            let t = v(e.line_price) || "price unavailable";
            return `- ${e.id}: "${tn(e)}" - ${t}`
        },
        tn = e => {
            let t = e.item.title || e.item.handle || e.item.id || "item",
                n = e.item.variant_title,
                r = n && n !== "Default Title" ? ` (${n})` : "";
            return `${t}${r} x${e.quantity}`
        };

    function ko(e, t) {
        return {
            id: e.id ? ? "",
            item_count: e.totalQuantity ? ? 0,
            total_price: b(e.cost ? .totalAmount),
            currency: e.cost ? .totalAmount ? .currencyCode ? ? "",
            line_items: (e.lines ? .nodes ? ? []).map(n => ({
                id: n.id ? ? "",
                quantity: n.quantity ? ? 0,
                line_price: b(n.cost ? .totalAmount),
                item: {
                    id: "",
                    title: "",
                    variant_title: "",
                    handle: "",
                    url: "",
                    image: "",
                    unit_price: null
                }
            }))
        }
    }
    var nn = async (e, t) => {
        let n = e.catalog,
            r = Re(n ? .id) || Bo();
        if (!r) return f("Product catalog.id is required.", "Call search_catalog or browse_store to find a product id or handle first.");
        try {
            return await qo(r, n, t)
        } catch (o) {
            return g(o, t.signal, "Failed to load product details", "Try again with a product id or handle from search_catalog or browse_store.")
        }
    };
    async function qo(e, t, n) {
        let r = t ? .selected_options,
            o = r ? .length ? [...r] : void 0,
            i = await j(e, {
                selected_options: o,
                routes: n.routes,
                signal: n.signal
            });
        return i ? t ? .navigate === !0 ? Wo(i, n) : Vo(i, !!o ? .length) : Fo(e)
    }

    function Fo(e) {
        return f(`Product "${e}" was not found.`, "Call search_catalog or browse_store to find an available product.")
    }

    function Wo(e, t) {
        let n = e.url,
            r = !I(n);
        return r && x(t, n), M({
            summary: r ? `Showing ${e.title}.` : `Already showing ${e.title}.`,
            navigated: r,
            destination: e.title
        }, e)
    }

    function Vo(e, t) {
        return m(`${e.title} has ${e.variant_count} variant${e.variant_count!==1?"s":""}.`, e, Ho(e), jo(e, t))
    }

    function Bo() {
        return typeof window > "u" ? "" : L(window.location.href)
    }

    function Ho(e) {
        if (!e.variants.length) return null;
        let t = e.variants.filter(r => r.availability.available);
        return `Variants:
` + (t.length ? t : e.variants.slice(0, 10)).map(r => {
            let o = r.options.map(s => `${s.name}: ${s.value}`).join(", "),
                i = v(r.price) || "price unavailable",
                a = r.availability.available ? "available" : "unavailable";
            return `- ${r.title} (id: ${r.id}) - ${o||"no options"} - ${i} - ${a}`
        }).join(`
`)
    }

    function jo(e, t) {
        let n = e.variants.filter(o => o.availability.available),
            r = "TO VIEW (show/open/go to): call show_variant with catalog.selected_options set to whatever options the user specified (even partial like just Color) \u2014 do NOT ask for missing options.";
        if (n.length && t) return `${r} TO ADD TO CART: use the matching variants[].id from this result with add_to_cart line_items[].item.id.`;
        if (n.length) {
            let o = e.available_options_truncated ? " (available_options is truncated \u2014 narrow with catalog.selected_options if needed)." : "";
            return `${r}${o} TO ADD TO CART: if the user did not request specific options, use variants[0].id or the product handle with add_to_cart. If they requested specific options, pick one complete available_options entry (or call get_product again with catalog.selected_options) to get the exact variants[].id.`
        }
        return e.available_options_count > 0 ? `${r} TO ADD TO CART: you need a full option combination \u2014 pick one complete available_options entry, or ask the user for missing options, then call get_product again with catalog.selected_options set to that full combination to get the exact variants[].id.` : e.available_options_truncated ? "Available option combinations were truncated. Call get_product again with catalog.selected_options for any options the user already specified to narrow the result before choosing a variant." : "No available option combinations matched. Ask the user to choose different product options or search for another product."
    }
    var Qo = "/.well-known/ucp",
        rn = async (e, t) => {
            try {
                let n = await fetch(Qo, {
                    headers: {
                        accept: "application/json"
                    },
                    signal: t.signal
                });
                if (!n.ok) throw new Error(`UCP profile request failed (${n.status})`);
                let r = await n.json(),
                    o = Go(r);
                if (!o) throw new Error("UCP profile response did not include a ucp object.");
                return m(Yo(o), {
                    ucp: o
                }, Ko(o), "Use the UCP service endpoints in this profile to continue the purchase over UCP. Call get_cart for the current cart id.")
            } catch (n) {
                return g(n, t.signal, "Failed to fetch UCP profile", "Try again - this is usually a transient error.")
            }
        };

    function Go(e) {
        return !ce(e) || !ce(e.ucp) ? null : e.ucp
    }

    function Yo(e) {
        let t = typeof e.version == "string" ? ` (version ${e.version})` : "",
            n = Object.keys(Ie(e.services)),
            r = Object.keys(Ie(e.capabilities)),
            o = n.length ? n.join(", ") : "none",
            i = r.length ? r.join(", ") : "none";
        return `Fetched this store's UCP profile${t}. Services: ${o}. Capabilities: ${i}.`
    }

    function Ko(e) {
        let t = Object.entries(Ie(e.services)).flatMap(([n, r]) => Jo(r).filter(o => o.endpoint).map(o => `- ${n} (${o.transport??"unknown"}): ${o.endpoint}`));
        return t.length ? `UCP service endpoints:
${t.join(`
`)}` : null
    }

    function Jo(e) {
        return Array.isArray(e) ? e.filter(ce).map(t => ({
            transport: typeof t.transport == "string" ? t.transport : void 0,
            endpoint: typeof t.endpoint == "string" ? t.endpoint : void 0
        })) : []
    }

    function Ie(e) {
        return ce(e) ? e : {}
    }

    function ce(e) {
        return typeof e == "object" && e !== null && !Array.isArray(e)
    }
    var on = (e, t) => {
        let n = t.routes.accountOrders(),
            r = !I(n);
        return r && x(t, n, 10), M({
            summary: r ? "Taken you to your order history. You may need to log in if not already authenticated." : "Already on your order history page. You may need to log in if not already authenticated.",
            navigated: r,
            destination: "order history"
        }, {
            navigating_to: n
        })
    };
    var an = async (e, t) => {
        let n = e.catalog ? .query ? .trim();
        if (!n) return f("Search query is required.", "Call search_catalog with catalog.query.");
        try {
            let r = ri(Number(e.catalog ? .pagination ? .limit) || 5, 1, 10),
                o = await At(n, r, t.signal);
            return Xo(n, zo(o.predictiveSearch, t.routes), t.routes)
        } catch (r) {
            return g(r, t.signal, "Search failed", "Try again with a simpler catalog.query, or use browse_store to inspect collections.")
        }
    };

    function zo(e, t) {
        return {
            products: e.products.map(n => G(n, t)),
            collections: e.collections.map(n => ae(n, t)),
            articles: e.articles.map(Ae),
            pages: e.pages.map(Ee)
        }
    }

    function Xo(e, t, n) {
        let r = t.products.length + t.collections.length + t.articles.length + t.pages.length,
            o = { ...t,
                search_url: n.search(e)
            };
        return r === 0 ? m(`No search results found for "${e}".`, o, null, "Try browse_store to inspect collections or search_catalog with a broader catalog.query.") : m(`Found ${Zo(t).join(", ")} for "${e}".`, o, ti(t), ei(t))
    }

    function Zo(e) {
        return [le("product", e.products.length), le("collection", e.collections.length), le("article", e.articles.length), le("page", e.pages.length)].filter(Boolean)
    }

    function le(e, t) {
        return t ? `${t} ${e}${t===1?"":"s"}` : ""
    }

    function ei(e) {
        return e.products.length ? "If the user wants the selected or first available variant, call add_to_cart with cart.line_items using the product handle or query. If the user requested a specific color, size, material, or other option, call get_product with catalog.id and any known catalog.selected_options to filter available_options, then use the matching variants[].id with add_to_cart." : e.collections.length || e.articles.length || e.pages.length ? "No products matched, but other catalog results were found. Share the relevant collection, article, or page URL with the user, or call browse_store for product collections." : "Use browse_store to inspect products by collection."
    }

    function ti(e) {
        let t = [ni(e.products), xe("Collections", e.collections), xe("Articles", e.articles), xe("Pages", e.pages)].filter(Boolean);
        return t.length ? t.join(`

`) : null
    }

    function ni(e) {
        return e.length ? `Products:
` + e.map(t => `- ${t.title} (id: ${t.id}, handle: ${t.handle}) - ${v(t.price_range)||"price unavailable"}`).join(`
`) : null
    }

    function xe(e, t) {
        return t.length ? `${e}:
` + t.map(n => `- ${n.title}${n.handle?` (${n.handle})`:""}: ${n.url}`).join(`
`) : null
    }

    function ri(e, t, n) {
        return Math.min(n, Math.max(t, e))
    }
    var oi = 5,
        ii = 300,
        ai = 5,
        si = [{
            type: "refund",
            patterns: [/\brefund/i, /\breturn/i, /\bmoney\s+back/i, /\bexchange/i, /\breimburse/i]
        }, {
            type: "shipping",
            patterns: [/\bship/i, /\bdeliver/i, /\bdispatch/i, /\bfulfil/i, /\bfulfill/i, /\bpostage/i, /\btracking/i, /\bcourier/i]
        }, {
            type: "privacy",
            patterns: [/\bprivacy/i, /\bdata/i, /\bcookie/i, /\bgdpr/i, /\bpersonal\s+information/i, /\bpersonal\s+data/i]
        }, {
            type: "terms_of_service",
            patterns: [/\bterms\s+of\s+service/i, /\bterms\s+of\s+use/i, /\btos/i, /\bterms/i]
        }, {
            type: "terms_of_sale",
            patterns: [/\bterms\s+of\s+sale/i, /\bpurchase\s+terms/i]
        }, {
            type: "subscription",
            patterns: [/\bsubscription/i, /\bsubscribe/i, /\brecurring/i]
        }, {
            type: "legal_notice",
            patterns: [/\blegal\s+notice/i, /\bimprint/i, /\bcompany\s+info/i]
        }, {
            type: "contact",
            patterns: [/\bphone/i, /\bcall/i, /\bcontact/i, /\bemail/i, /\baddress/i, /\bhours/i, /\bopening/i, /\blocation/i, /\breach/i, /\bsupport/i]
        }],
        cn = async (e, t) => {
            let n = e.query ? .trim();
            if (!n) return f("A search query is required.", "Call search_shop_policies_and_faqs with a query, e.g. 'return policy' or 'shipping'.");
            try {
                let r = ci(e.policy_types, n),
                    o = await Rt(n, oi, r, t.signal);
                return ui(n, o.policies, o.articles, o.pages)
            } catch (r) {
                return g(r, t.signal, "Policy and FAQ search failed", "Rephrase the query (e.g. 'return policy', 'shipping', 'contact') and try again.")
            }
        };

    function ci(e, t) {
        let n = new Set(Ce),
            o = (Array.isArray(e) ? e : []).filter(i => typeof i == "string" && n.has(i));
        return o.length ? o : li(t)
    }

    function li(e) {
        let t = si.flatMap(({
            type: n,
            patterns: r
        }) => r.some(o => o.test(e)) ? [n] : []);
        return t.length ? t : /\bpolic(?:y|ies)\b/i.test(e) ? [...Ce] : []
    }

    function ui(e, t, n, r) {
        let o = {
            policies: t,
            articles: n,
            pages: r
        };
        return t.length + n.length + r.length === 0 ? m(`No policies or FAQ content found for "${e}".`, o, null, "The store may not have published this content; a rephrased query, or the store's contact page, may help.") : m(di(e, t, n, r), o, pi(t, n, r), gi(t, n, r))
    }

    function di(e, t, n, r) {
        return `Found ${[t.length?`${t.length} polic${t.length===1?"y":"ies"}`:null,r.length?`${r.length} page${r.length===1?"":"s"}`:null,n.length?`${n.length} article${n.length===1?"":"s"}`:null].filter(Boolean).join(", ")||"no results"} for "${e}".`
    }

    function pi(e, t, n) {
        let r = [e.length ? `Policies:
` + e.map(fi).join(`
`) : null, n.length ? `Pages:
` + n.map(o => `- ${o.title}: ${o.url}`).join(`
`) : null, t.length ? `Articles:
` + t.map(o => `- ${o.title}: ${o.url}`).join(`
`) : null].filter(Boolean);
        return r.length ? r.join(`

`) : null
    }

    function fi(e) {
        let t = ln(e.body);
        return t ? t.kind === "empty" ? `- ${e.title}: ${e.url} (the policy body is empty)` : `- ${e.title}: ${e.url} (short policy body that links to: ${t.links.join(", ")})` : `- ${e.title}: ${e.url}`
    }

    function gi(e, t, n) {
        if (e.length) {
            let r = e.flatMap(i => {
                let a = ln(i.body);
                return a ? a.kind === "empty" ? [`${i.title} has an empty policy body.`] : [`${i.title} has a short policy body that links to other pages (listed above); the full details may be on those pages.`] : []
            });
            if (r.length === 0) return "The full policy text is in the structured content (policies[].body).";
            let o = n.length || t.length ? " Matching store pages and articles are also included in the structured content." : "";
            return `The policy text is in the structured content (policies[].body). ${r.join(" ")}${o}`
        }
        return n.length || t.length ? "The store has no matching policy. The structured content includes the matching pages' bodies and article excerpts, with their URLs." : "No matching policy or FAQ content was found; the store may not have published it, or a rephrased query may match."
    }

    function ln(e) {
        let t = [...new Set([...e.matchAll(/<a\b[^>]*\bhref\s*=\s*["']([^"']+)["']/gi)].map(r => sn(r[1] ? ? "").trim()).filter(r => r && !r.startsWith("#") && !/^(?:javascript|mailto|tel):/i.test(r)))],
            n = sn(e.replace(/<[^>]*>/g, " ")).replace(/https?:\/\/\S+/g, " ").replace(/\s+/g, " ").trim();
        return !n && t.length === 0 ? {
            kind: "empty"
        } : t.length > 0 && n.length < ii ? {
            kind: "short_with_links",
            links: t.slice(0, ai)
        } : null
    }

    function sn(e) {
        return e.replace(/&nbsp;/gi, " ").replace(/&amp;/gi, "&").replace(/&quot;/gi, '"').replace(/&#39;|&apos;/gi, "'").replace(/&lt;/gi, "<").replace(/&gt;/gi, ">")
    }
    var Le = "gid://shopify/ProductVariant/",
        un = async (e, t) => {
            let n = yi(e);
            if ("error" in n) return n.error;
            let {
                handle: r,
                rawVariantId: o,
                selectedOptions: i
            } = n, a = await mi(r, o, i, t);
            if ("error" in a) return a.error;
            let {
                variantId: s,
                resolvedOptions: c
            } = a, u = a.productHandle || r, l = c ? [u, r] : [u], p = Pi(t.routes.product(u), s, l), h = !I(p);
            return h && x(t, p), bi({
                handle: u,
                requestedHandle: r,
                variantId: s,
                url: p,
                navigated: h,
                resolvedOptions: c
            })
        };

    function yi(e) {
        let t = e.catalog.variant_id,
            n = Ci(e.catalog.selected_options);
        if (t == null && !n.length) return {
            error: f("Provide either catalog.variant_id or catalog.selected_options.", "For a specific variant, pass variant_id from get_product variants[].id. For a partial match like a color only, pass selected_options.")
        };
        let r = wi(e.catalog.handle);
        return r ? Ei(r) ? {
            handle: r,
            rawVariantId: t ? ? void 0,
            selectedOptions: n
        } : {
            error: f(`Product handle "${r}" is not valid.`, "Use a product handle from search_catalog, browse_store, or get_product.")
        } : {
            error: f("Product handle is required.", "Pass catalog.handle, or call show_variant from a product page.")
        }
    }
    async function mi(e, t, n, r) {
        let o = t != null ? pn(t) : "";
        if (o) {
            let i = await hi(o, e, r);
            return "error" in i ? i : {
                variantId: o,
                resolvedOptions: void 0,
                productHandle: i.sameProduct ? void 0 : i.handle
            }
        }
        if (n.length) {
            let i = await _i(e, n, r);
            return "error" in i ? i : {
                variantId: i.variantId,
                resolvedOptions: i.options,
                productHandle: i.productHandle
            }
        }
        return {
            error: f("Product variant_id could not be resolved.", "Call get_product to find an available variants[].id, then retry show_variant.")
        }
    }
    async function hi(e, t, n) {
        try {
            let r = await It(`${Le}${e}`, t, n.signal);
            return r || {
                error: f(`Product variant ${e} was not found on this store.`, "Call get_product to find an available variants[].id, then retry show_variant.")
            }
        } catch (r) {
            return {
                error: g(r, n.signal, "Failed to look up the product variant.", "Call get_product to find an available variants[].id, then retry show_variant.")
            }
        }
    }

    function bi(e) {
        let {
            handle: t,
            requestedHandle: n,
            variantId: r,
            url: o,
            navigated: i,
            resolvedOptions: a
        } = e, s = a ? .length ? ` (${a.map(u=>`${u.name}: ${u.value}`).join(", ")})` : "", c = t === n ? "" : a ? ` This variant is sold as a separate product (${t}), linked to ${n} as an option, so its own product page is shown.` : ` This variant belongs to a different product (${t}), so that product's page is shown.`;
        return M({
            summary: i ? `Showing the selected variant${s}.${c}` : `Already showing the selected variant${s}.${c}`,
            navigated: i,
            destination: t,
            keyFields: `Variant id: ${r}`
        }, {
            handle: t,
            variant_id: r,
            url: o,
            navigated: i,
            selected_options: a
        })
    }
    async function _i(e, t, n) {
        try {
            let r = await j(e, {
                selected_options: t,
                routes: n.routes,
                signal: n.signal
            });
            if (!r) return {
                error: Ti(e)
            };
            let o = Si(r);
            if (o) return o;
            let i = await vi(r, e, n);
            return i || {
                error: f("No available variant matched the selected options.", "Call get_product with the same selected_options to see available_options, then pick one and retry.")
            }
        } catch (r) {
            return {
                error: g(r, n.signal, "Failed to resolve variant from selected_options.", "Call get_product first to inspect available variants, then retry show_variant with a variant_id.")
            }
        }
    }

    function Si(e) {
        let t = e.variants.filter(n => n.availability.available);
        return dn(t[0] ? ? e.variants[0])
    }

    function dn(e) {
        return e ? .id ? {
            variantId: pn(e.id),
            options: e.options,
            ...e.product_handle ? {
                productHandle: e.product_handle
            } : {}
        } : null
    }
    async function vi(e, t, n) {
        let r = e.available_options ? .[0];
        if (!r ? .length) return null;
        let o = await j(t, {
            selected_options: r,
            routes: n.routes,
            signal: n.signal
        });
        return dn(o ? .variants ? .find(i => i.availability.available) ? ? o ? .variants ? .[0])
    }

    function Ti(e) {
        return f(`Product "${e}" was not found.`, "Call search_catalog or browse_store to find an available product.")
    }

    function Ci(e) {
        return e ? .length ? e.map(t => ({
            name: String(t ? .name ? ? "").trim(),
            value: String(t ? .value ? ? "").trim()
        })).filter(t => t.name && t.value) : []
    }

    function pn(e) {
        let t = String(e).trim();
        if (!t) return "";
        let n = t.startsWith(Le) ? t.slice(Le.length) : t;
        return /^\d+$/.test(n) ? n : ""
    }

    function wi(e) {
        return e ? .trim() ? Ai(e) : fn()
    }

    function Ai(e) {
        let t = e ? .trim();
        return t ? L(t) || Ri(t) : ""
    }

    function fn() {
        return typeof window > "u" ? "" : L(window.location.href)
    }

    function Ei(e) {
        return !!e && !/[/?#\\]/.test(e) && e !== "." && e !== ".."
    }

    function Ri(e) {
        try {
            return decodeURIComponent(e)
        } catch {
            return ""
        }
    }

    function Pi(e, t, n) {
        let r = new URL(e, Mi());
        if (r.searchParams.set("variant", t), n.includes(fn())) {
            let o = Oi().searchParams.get("selling_plan");
            o && r.searchParams.set("selling_plan", o)
        }
        return r.pathname + r.search
    }

    function Oi() {
        return typeof window > "u" ? new URL("https://shopify.local/") : new URL(window.location.href)
    }

    function Mi() {
        return typeof window > "u" ? "https://shopify.local" : window.location.origin
    }
    var gn = {
        add_to_cart: Wt,
        browse_store: qt,
        cancel_cart: zt,
        proceed_to_checkout: Xt,
        get_cart: en,
        get_product: nn,
        get_ucp_profile: rn,
        manage_orders: on,
        search_catalog: an,
        search_shop_policies_and_faqs: cn,
        show_variant: un,
        update_cart_lines: Vt
    };
    var yn = Symbol.for("shopify.webmcp.registered"),
        Ii = Object.values(ct).map(e => ({ ...e,
            execute: gn[e.name]
        }));

    function mn() {
        let e = Li();
        if (!e || $i()) return !1;
        let t = [];
        for (let n of Ii) {
            let r = Ni(n);
            t.push(e.registerTool(r))
        }
        return Di(), Promise.allSettled(t), !0
    }

    function xi(e) {
        let t = window.Shopify ? .routes ? .navigate;
        if (typeof t == "function") return t(e);
        window.location.href = e
    }

    function Li() {
        return typeof document < "u" && "modelContext" in document ? document.modelContext ? ? null : typeof navigator < "u" && "modelContext" in navigator ? navigator.modelContext ? ? null : null
    }

    function $i() {
        return typeof window > "u" ? !1 : Reflect.get(window, yn) === !0
    }

    function Di() {
        typeof window > "u" || Reflect.set(window, yn, !0)
    }

    function Ni(e) {
        let {
            execute: t,
            ...n
        } = e;
        return { ...n,
            execute: Ze(e.name, (r, o) => t(r, {
                routes: et,
                navigate: xi,
                signal: X(o)
            }))
        }
    }(function() {
        typeof window > "u" || mn()
    })();
})();