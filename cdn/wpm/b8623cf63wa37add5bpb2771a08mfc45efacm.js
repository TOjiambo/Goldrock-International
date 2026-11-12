(() => {
    var e = {
            11: (e, t, r) => {
                "use strict";
                var n = r(9058),
                    o = String,
                    i = TypeError;
                e.exports = function(e) {
                    if (n(e)) return e;
                    throw new i("Can't set " + o(e) + " as a prototype")
                }
            },
            74: (e, t, r) => {
                "use strict";
                var n = r(1399),
                    o = r(5201),
                    i = TypeError,
                    s = Object.getOwnPropertyDescriptor,
                    a = n && ! function() {
                        if (void 0 !== this) return !0;
                        try {
                            Object.defineProperty([], "length", {
                                writable: !1
                            }).length = 1
                        } catch (e) {
                            return e instanceof TypeError
                        }
                    }();
                e.exports = a ? function(e, t) {
                    if (o(e) && !s(e, "length").writable) throw new i("Cannot set read only .length");
                    return e.length = t
                } : function(e, t) {
                    return e.length = t
                }
            },
            78: (e, t, r) => {
                "use strict";
                var n = r(1834);
                e.exports = function(e, t, r) {
                    for (var o, i, s = r ? e : e.iterator, a = e.next; !(o = n(a, s)).done;)
                        if (void 0 !== (i = t(o.value))) return i
                }
            },
            164: (e, t, r) => {
                "use strict";
                var n = r(9544),
                    o = r(8078),
                    i = n("iterator"),
                    s = Array.prototype;
                e.exports = function(e) {
                    return void 0 !== e && (o.Array === e || s[i] === e)
                }
            },
            229: (e, t, r) => {
                "use strict";
                var n = r(543),
                    o = r(1578),
                    i = RangeError;
                e.exports = function(e, t, r, s) {
                    var a = n(e),
                        c = o(r),
                        u = c < 0 ? a + c : c;
                    if (u >= a || u < 0) throw new i("Incorrect index");
                    for (var d = new t(a), l = 0; l < a; l++) d[l] = l === u ? s : e[l];
                    return d
                }
            },
            323: e => {
                "use strict";
                var t = TypeError;
                e.exports = function(e) {
                    var r = e && e.alphabet;
                    if (void 0 === r || "base64" === r || "base64url" === r) return r || "base64";
                    throw new t("Incorrect `alphabet` option")
                }
            },
            352: (e, t, r) => {
                "use strict";
                var n = r(1834),
                    o = r(6895),
                    i = r(960),
                    s = r(7636),
                    a = r(3649),
                    c = r(3842),
                    u = a(function() {
                        var e = this.iterator,
                            t = i(n(this.next, e));
                        if (!(this.done = !!t.done)) return c(e, this.mapper, [t.value, this.counter++], !0)
                    });
                e.exports = function(e) {
                    return i(this), o(e), new u(s(this), {
                        mapper: e
                    })
                }
            },
            380: (e, t, r) => {
                "use strict";
                var n = r(1399),
                    o = r(1536),
                    i = r(2661),
                    s = r(960),
                    a = r(3094),
                    c = TypeError,
                    u = Object.defineProperty,
                    d = Object.getOwnPropertyDescriptor,
                    l = "enumerable",
                    p = "configurable",
                    h = "writable";
                t.f = n ? i ? function(e, t, r) {
                    if (s(e), t = a(t), s(r), "function" == typeof e && "prototype" === t && "value" in r && h in r && !r[h]) {
                        var n = d(e, t);
                        n && n[h] && (e[t] = r.value, r = {
                            configurable: p in r ? r[p] : n[p],
                            enumerable: l in r ? r[l] : n[l],
                            writable: !1
                        })
                    }
                    return u(e, t, r)
                } : u : function(e, t, r) {
                    if (s(e), t = a(t), s(r), o) try {
                        return u(e, t, r)
                    } catch (n) {}
                    if ("get" in r || "set" in r) throw new c("Accessors not supported");
                    return "value" in r && (e[t] = r.value), e
                }
            },
            459: (e, t, r) => {
                "use strict";
                var n = r(3013),
                    o = r(8280).concat("length", "prototype");
                t.f = Object.getOwnPropertyNames || function(e) {
                    return n(e, o)
                }
            },
            482: e => {
                "use strict";
                e.exports = {}
            },
            543: (e, t, r) => {
                "use strict";
                var n = r(1105);
                e.exports = function(e) {
                    return n(e.length)
                }
            },
            621: (e, t, r) => {
                "use strict";
                var n = r(4202);
                e.exports = function(e) {
                    return "object" == typeof e ? null !== e : n(e)
                }
            },
            654: (e, t, r) => {
                "use strict";
                var n = r(8482),
                    o = r(6591);
                e.exports = function(e) {
                    return n(o(e))
                }
            },
            663: (e, t, r) => {
                "use strict";
                r(6202)
            },
            679: (e, t, r) => {
                "use strict";
                var n = r(4202),
                    o = r(380),
                    i = r(4952),
                    s = r(4980);
                e.exports = function(e, t, r, a) {
                    a || (a = {});
                    var c = a.enumerable,
                        u = void 0 !== a.name ? a.name : t;
                    if (n(r) && i(r, u, a), a.global) c ? e[t] = r : s(t, r);
                    else {
                        try {
                            a.unsafe ? e[t] && (c = !0) : delete e[t]
                        } catch (d) {}
                        c ? e[t] = r : o.f(e, t, {
                            value: r,
                            enumerable: !1,
                            configurable: !a.nonConfigurable,
                            writable: !a.nonWritable
                        })
                    }
                    return e
                }
            },
            728: (e, t, r) => {
                "use strict";
                var n = r(6947);
                e.exports = n({}.isPrototypeOf)
            },
            764: (e, t, r) => {
                "use strict";
                var n = r(1311),
                    o = r(4202),
                    i = r(7759),
                    s = r(9544)("toStringTag"),
                    a = Object,
                    c = "Arguments" === i(function() {
                        return arguments
                    }());
                e.exports = n ? i : function(e) {
                    var t, r, n;
                    return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(r = function(e, t) {
                        try {
                            return e[t]
                        } catch (r) {}
                    }(t = a(e), s)) ? r : c ? i(t) : "Object" === (n = i(t)) && o(t.callee) ? "Arguments" : n
                }
            },
            821: (e, t, r) => {
                "use strict";
                var n = r(543);
                e.exports = function(e, t, r) {
                    for (var o = 0, i = arguments.length > 2 ? r : n(t), s = new e(i); i > o;) s[o] = t[o++];
                    return s
                }
            },
            960: (e, t, r) => {
                "use strict";
                var n = r(621),
                    o = String,
                    i = TypeError;
                e.exports = function(e) {
                    if (n(e)) return e;
                    throw new i(o(e) + " is not an object")
                }
            },
            977: (e, t, r) => {
                "use strict";
                var n = r(9731),
                    o = r(2307);
                o && n({
                    target: "ArrayBuffer",
                    proto: !0
                }, {
                    transfer: function() {
                        return o(this, arguments.length ? arguments[0] : void 0, !0)
                    }
                })
            },
            1105: (e, t, r) => {
                "use strict";
                var n = r(1578),
                    o = Math.min;
                e.exports = function(e) {
                    var t = n(e);
                    return t > 0 ? o(t, 9007199254740991) : 0
                }
            },
            1120: (e, t, r) => {
                "use strict";
                var n = r(6947),
                    o = r(5201),
                    i = r(4202),
                    s = r(7759),
                    a = r(8144),
                    c = n([].push);
                e.exports = function(e) {
                    if (i(e)) return e;
                    if (o(e)) {
                        for (var t = e.length, r = [], n = 0; n < t; n++) {
                            var u = e[n];
                            "string" == typeof u ? c(r, u) : "number" != typeof u && "Number" !== s(u) && "String" !== s(u) || c(r, a(u))
                        }
                        var d = r.length,
                            l = !0;
                        return function(e, t) {
                            if (l) return l = !1, t;
                            if (o(this)) return t;
                            for (var n = 0; n < d; n++)
                                if (r[n] === e) return t
                        }
                    }
                }
            },
            1125: (e, t, r) => {
                "use strict";
                var n = r(8809),
                    o = r(6212).findLast,
                    i = n.aTypedArray;
                (0, n.exportTypedArrayMethod)("findLast", function(e) {
                    return o(i(this), e, arguments.length > 1 ? arguments[1] : void 0)
                })
            },
            1249: (e, t, r) => {
                "use strict";
                var n = r(5833),
                    o = r(9634),
                    i = n.Set,
                    s = n.add;
                e.exports = function(e) {
                    var t = new i;
                    return o(e, function(e) {
                        s(t, e)
                    }), t
                }
            },
            1256: (e, t, r) => {
                "use strict";
                r(5873)
            },
            1311: (e, t, r) => {
                "use strict";
                var n = {};
                n[r(9544)("toStringTag")] = "z", e.exports = "[object z]" === String(n)
            },
            1381: (e, t, r) => {
                "use strict";
                var n = r(4862),
                    o = function(e) {
                        return {
                            size: e,
                            has: function() {
                                return !1
                            },
                            keys: function() {
                                return {
                                    next: function() {
                                        return {
                                            done: !0
                                        }
                                    }
                                }
                            }
                        }
                    };
                e.exports = function(e) {
                    var t = n("Set");
                    try {
                        (new t)[e](o(0));
                        try {
                            return (new t)[e](o(-1)), !1
                        } catch (r) {
                            return !0
                        }
                    } catch (i) {
                        return !1
                    }
                }
            },
            1399: (e, t, r) => {
                "use strict";
                var n = r(4492);
                e.exports = !n(function() {
                    return 7 !== Object.defineProperty({}, 1, {
                        get: function() {
                            return 7
                        }
                    })[1]
                })
            },
            1482: (e, t, r) => {
                "use strict";
                var n = r(9731),
                    o = r(6002),
                    i = r(6947),
                    s = r(7477),
                    a = r(5183),
                    c = r(4997),
                    u = r(323),
                    d = c.i2c,
                    l = c.i2cUrl,
                    p = o.Uint8Array,
                    h = i("".charAt);
                p && n({
                    target: "Uint8Array",
                    proto: !0,
                    forced: !0
                }, {
                    toBase64: function() {
                        for (var e, t = a(this), r = arguments.length ? s(arguments[0]) : void 0, n = "base64" === u(r) ? d : l, o = "", i = 0, c = t.length, p = function(t) {
                                return h(n, e >> 6 * t & 63)
                            }; i + 2 < c; i += 3) e = (t[i] << 16) + (t[i + 1] << 8) + t[i + 2], o += p(3) + p(2) + p(1) + p(0);
                        return i + 2 === c ? (e = (t[i] << 16) + (t[i + 1] << 8), o += p(3) + p(2) + p(1) + "=") : i + 1 === c && (e = t[i] << 16, o += p(3) + p(2) + "=="), o
                    }
                })
            },
            1536: (e, t, r) => {
                "use strict";
                var n = r(1399),
                    o = r(4492),
                    i = r(3552);
                e.exports = !n && !o(function() {
                    return 7 !== Object.defineProperty(i("div"), "a", {
                        get: function() {
                            return 7
                        }
                    }).a
                })
            },
            1548: (e, t, r) => {
                "use strict";
                var n = r(728),
                    o = TypeError;
                e.exports = function(e, t) {
                    if (n(t, e)) return e;
                    throw new o("Incorrect invocation")
                }
            },
            1554: function(e, t, r) {
                var n;
                ! function(o, i) {
                    "use strict";
                    var s = "function",
                        a = "undefined",
                        c = "object",
                        u = "string",
                        d = "major",
                        l = "model",
                        p = "name",
                        h = "type",
                        f = "vendor",
                        m = "version",
                        v = "architecture",
                        g = "console",
                        y = "mobile",
                        b = "tablet",
                        w = "smarttv",
                        _ = "wearable",
                        I = "embedded",
                        x = "Amazon",
                        E = "Apple",
                        k = "ASUS",
                        S = "BlackBerry",
                        C = "Browser",
                        T = "Chrome",
                        A = "Firefox",
                        P = "Google",
                        O = "Huawei",
                        R = "LG",
                        N = "Microsoft",
                        j = "Motorola",
                        M = "Opera",
                        U = "Samsung",
                        D = "Sharp",
                        $ = "Sony",
                        L = "Xiaomi",
                        q = "Zebra",
                        V = "Facebook",
                        B = "Chromium OS",
                        H = "Mac OS",
                        F = function(e) {
                            for (var t = {}, r = 0; r < e.length; r++) t[e[r].toUpperCase()] = e[r];
                            return t
                        },
                        z = function(e, t) {
                            return typeof e === u && -1 !== W(t).indexOf(W(e))
                        },
                        W = function(e) {
                            return e.toLowerCase()
                        },
                        K = function(e, t) {
                            if (typeof e === u) return e = e.replace(/^\s\s*/, ""), typeof t === a ? e : e.substring(0, 500)
                        },
                        Y = function(e, t) {
                            for (var r, n, o, a, u, d, l = 0; l < t.length && !u;) {
                                var p = t[l],
                                    h = t[l + 1];
                                for (r = n = 0; r < p.length && !u && p[r];)
                                    if (u = p[r++].exec(e))
                                        for (o = 0; o < h.length; o++) d = u[++n], typeof(a = h[o]) === c && a.length > 0 ? 2 === a.length ? typeof a[1] == s ? this[a[0]] = a[1].call(this, d) : this[a[0]] = a[1] : 3 === a.length ? typeof a[1] !== s || a[1].exec && a[1].test ? this[a[0]] = d ? d.replace(a[1], a[2]) : i : this[a[0]] = d ? a[1].call(this, d, a[2]) : i : 4 === a.length && (this[a[0]] = d ? a[3].call(this, d.replace(a[1], a[2])) : i) : this[a] = d || i;
                                l += 2
                            }
                        },
                        J = function(e, t) {
                            for (var r in t)
                                if (typeof t[r] === c && t[r].length > 0) {
                                    for (var n = 0; n < t[r].length; n++)
                                        if (z(t[r][n], e)) return "?" === r ? i : r
                                } else if (z(t[r], e)) return "?" === r ? i : r;
                            return e
                        },
                        G = {
                            ME: "4.90",
                            "NT 3.11": "NT3.51",
                            "NT 4.0": "NT4.0",
                            2e3: "NT 5.0",
                            XP: ["NT 5.1", "NT 5.2"],
                            Vista: "NT 6.0",
                            7: "NT 6.1",
                            8: "NT 6.2",
                            8.1: "NT 6.3",
                            10: ["NT 6.4", "NT 10.0"],
                            RT: "ARM"
                        },
                        X = {
                            browser: [
                                [/\b(?:crmo|crios)\/([\w\.]+)/i],
                                [m, [p, "Chrome"]],
                                [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                                [m, [p, "Edge"]],
                                [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
                                [p, m],
                                [/opios[\/ ]+([\w\.]+)/i],
                                [m, [p, M + " Mini"]],
                                [/\bopr\/([\w\.]+)/i],
                                [m, [p, M]],
                                [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
                                [m, [p, "Baidu"]],
                                [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(heytap|ovi)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
                                [p, m],
                                [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                                [m, [p, "UC" + C]],
                                [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
                                [m, [p, "WeChat"]],
                                [/konqueror\/([\w\.]+)/i],
                                [m, [p, "Konqueror"]],
                                [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                                [m, [p, "IE"]],
                                [/ya(?:search)?browser\/([\w\.]+)/i],
                                [m, [p, "Yandex"]],
                                [/slbrowser\/([\w\.]+)/i],
                                [m, [p, "Smart Lenovo " + C]],
                                [/(avast|avg)\/([\w\.]+)/i],
                                [
                                    [p, /(.+)/, "$1 Secure " + C], m
                                ],
                                [/\bfocus\/([\w\.]+)/i],
                                [m, [p, A + " Focus"]],
                                [/\bopt\/([\w\.]+)/i],
                                [m, [p, M + " Touch"]],
                                [/coc_coc\w+\/([\w\.]+)/i],
                                [m, [p, "Coc Coc"]],
                                [/dolfin\/([\w\.]+)/i],
                                [m, [p, "Dolphin"]],
                                [/coast\/([\w\.]+)/i],
                                [m, [p, M + " Coast"]],
                                [/miuibrowser\/([\w\.]+)/i],
                                [m, [p, "MIUI " + C]],
                                [/fxios\/([-\w\.]+)/i],
                                [m, [p, A]],
                                [/\bqihu|(qi?ho?o?|360)browser/i],
                                [
                                    [p, "360 " + C]
                                ],
                                [/(oculus|sailfish|huawei|vivo)browser\/([\w\.]+)/i],
                                [
                                    [p, /(.+)/, "$1 " + C], m
                                ],
                                [/samsungbrowser\/([\w\.]+)/i],
                                [m, [p, U + " Internet"]],
                                [/(comodo_dragon)\/([\w\.]+)/i],
                                [
                                    [p, /_/g, " "], m
                                ],
                                [/metasr[\/ ]?([\d\.]+)/i],
                                [m, [p, "Sogou Explorer"]],
                                [/(sogou)mo\w+\/([\d\.]+)/i],
                                [
                                    [p, "Sogou Mobile"], m
                                ],
                                [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i],
                                [p, m],
                                [/(lbbrowser)/i, /\[(linkedin)app\]/i],
                                [p],
                                [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
                                [
                                    [p, V], m
                                ],
                                [/(Klarna)\/([\w\.]+)/i, /(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(alipay)client\/([\w\.]+)/i, /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],
                                [p, m],
                                [/\bgsa\/([\w\.]+) .*safari\//i],
                                [m, [p, "GSA"]],
                                [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
                                [m, [p, "TikTok"]],
                                [/headlesschrome(?:\/([\w\.]+)| )/i],
                                [m, [p, T + " Headless"]],
                                [/ wv\).+(chrome)\/([\w\.]+)/i],
                                [
                                    [p, T + " WebView"], m
                                ],
                                [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                                [m, [p, "Android " + C]],
                                [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
                                [p, m],
                                [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
                                [m, [p, "Mobile Safari"]],
                                [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
                                [m, p],
                                [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                                [p, [m, J, {
                                    "1.0": "/8",
                                    1.2: "/1",
                                    1.3: "/3",
                                    "2.0": "/412",
                                    "2.0.2": "/416",
                                    "2.0.3": "/417",
                                    "2.0.4": "/419",
                                    "?": "/"
                                }]],
                                [/(webkit|khtml)\/([\w\.]+)/i],
                                [p, m],
                                [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                                [
                                    [p, "Netscape"], m
                                ],
                                [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                                [m, [p, A + " Reality"]],
                                [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i, /panasonic;(viera)/i],
                                [p, m],
                                [/(cobalt)\/([\w\.]+)/i],
                                [p, [m, /master.|lts./, ""]]
                            ],
                            cpu: [
                                [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
                                [
                                    [v, "amd64"]
                                ],
                                [/(ia32(?=;))/i],
                                [
                                    [v, W]
                                ],
                                [/((?:i[346]|x)86)[;\)]/i],
                                [
                                    [v, "ia32"]
                                ],
                                [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
                                [
                                    [v, "arm64"]
                                ],
                                [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                                [
                                    [v, "armhf"]
                                ],
                                [/windows (ce|mobile); ppc;/i],
                                [
                                    [v, "arm"]
                                ],
                                [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
                                [
                                    [v, /ower/, "", W]
                                ],
                                [/(sun4\w)[;\)]/i],
                                [
                                    [v, "sparc"]
                                ],
                                [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
                                [
                                    [v, W]
                                ]
                            ],
                            device: [
                                [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
                                [l, [f, U],
                                    [h, b]
                                ],
                                [/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i],
                                [l, [f, U],
                                    [h, y]
                                ],
                                [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
                                [l, [f, E],
                                    [h, y]
                                ],
                                [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
                                [l, [f, E],
                                    [h, b]
                                ],
                                [/(macintosh);/i],
                                [l, [f, E]],
                                [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                                [l, [f, D],
                                    [h, y]
                                ],
                                [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
                                [l, [f, O],
                                    [h, b]
                                ],
                                [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
                                [l, [f, O],
                                    [h, y]
                                ],
                                [/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],
                                [
                                    [l, /_/g, " "],
                                    [f, L],
                                    [h, y]
                                ],
                                [/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i, /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
                                [
                                    [l, /_/g, " "],
                                    [f, L],
                                    [h, b]
                                ],
                                [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
                                [l, [f, "OPPO"],
                                    [h, y]
                                ],
                                [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
                                [l, [f, "Vivo"],
                                    [h, y]
                                ],
                                [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
                                [l, [f, "Realme"],
                                    [h, y]
                                ],
                                [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
                                [l, [f, j],
                                    [h, y]
                                ],
                                [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                                [l, [f, j],
                                    [h, b]
                                ],
                                [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
                                [l, [f, R],
                                    [h, b]
                                ],
                                [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i],
                                [l, [f, R],
                                    [h, y]
                                ],
                                [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
                                [l, [f, "Lenovo"],
                                    [h, b]
                                ],
                                [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
                                [
                                    [l, /_/g, " "],
                                    [f, "Nokia"],
                                    [h, y]
                                ],
                                [/(pixel c)\b/i],
                                [l, [f, P],
                                    [h, b]
                                ],
                                [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                                [l, [f, P],
                                    [h, y]
                                ],
                                [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                                [l, [f, $],
                                    [h, y]
                                ],
                                [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                                [
                                    [l, "Xperia Tablet"],
                                    [f, $],
                                    [h, b]
                                ],
                                [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
                                [l, [f, "OnePlus"],
                                    [h, y]
                                ],
                                [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
                                [l, [f, x],
                                    [h, b]
                                ],
                                [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                                [
                                    [l, /(.+)/g, "Fire Phone $1"],
                                    [f, x],
                                    [h, y]
                                ],
                                [/(playbook);[-\w\),; ]+(rim)/i],
                                [l, f, [h, b]],
                                [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                                [l, [f, S],
                                    [h, y]
                                ],
                                [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
                                [l, [f, k],
                                    [h, b]
                                ],
                                [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                                [l, [f, k],
                                    [h, y]
                                ],
                                [/(nexus 9)/i],
                                [l, [f, "HTC"],
                                    [h, b]
                                ],
                                [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
                                [f, [l, /_/g, " "],
                                    [h, y]
                                ],
                                [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                                [l, [f, "Acer"],
                                    [h, b]
                                ],
                                [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                                [l, [f, "Meizu"],
                                    [h, y]
                                ],
                                [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
                                [l, [f, "Ulefone"],
                                    [h, y]
                                ],
                                [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i],
                                [f, l, [h, y]],
                                [/(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
                                [f, l, [h, b]],
                                [/(surface duo)/i],
                                [l, [f, N],
                                    [h, b]
                                ],
                                [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                                [l, [f, "Fairphone"],
                                    [h, y]
                                ],
                                [/(u304aa)/i],
                                [l, [f, "AT&T"],
                                    [h, y]
                                ],
                                [/\bsie-(\w*)/i],
                                [l, [f, "Siemens"],
                                    [h, y]
                                ],
                                [/\b(rct\w+) b/i],
                                [l, [f, "RCA"],
                                    [h, b]
                                ],
                                [/\b(venue[\d ]{2,7}) b/i],
                                [l, [f, "Dell"],
                                    [h, b]
                                ],
                                [/\b(q(?:mv|ta)\w+) b/i],
                                [l, [f, "Verizon"],
                                    [h, b]
                                ],
                                [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                                [l, [f, "Barnes & Noble"],
                                    [h, b]
                                ],
                                [/\b(tm\d{3}\w+) b/i],
                                [l, [f, "NuVision"],
                                    [h, b]
                                ],
                                [/\b(k88) b/i],
                                [l, [f, "ZTE"],
                                    [h, b]
                                ],
                                [/\b(nx\d{3}j) b/i],
                                [l, [f, "ZTE"],
                                    [h, y]
                                ],
                                [/\b(gen\d{3}) b.+49h/i],
                                [l, [f, "Swiss"],
                                    [h, y]
                                ],
                                [/\b(zur\d{3}) b/i],
                                [l, [f, "Swiss"],
                                    [h, b]
                                ],
                                [/\b((zeki)?tb.*\b) b/i],
                                [l, [f, "Zeki"],
                                    [h, b]
                                ],
                                [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                                [
                                    [f, "Dragon Touch"], l, [h, b]
                                ],
                                [/\b(ns-?\w{0,9}) b/i],
                                [l, [f, "Insignia"],
                                    [h, b]
                                ],
                                [/\b((nxa|next)-?\w{0,9}) b/i],
                                [l, [f, "NextBook"],
                                    [h, b]
                                ],
                                [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                                [
                                    [f, "Voice"], l, [h, y]
                                ],
                                [/\b(lvtel\-)?(v1[12]) b/i],
                                [
                                    [f, "LvTel"], l, [h, y]
                                ],
                                [/\b(ph-1) /i],
                                [l, [f, "Essential"],
                                    [h, y]
                                ],
                                [/\b(v(100md|700na|7011|917g).*\b) b/i],
                                [l, [f, "Envizen"],
                                    [h, b]
                                ],
                                [/\b(trio[-\w\. ]+) b/i],
                                [l, [f, "MachSpeed"],
                                    [h, b]
                                ],
                                [/\btu_(1491) b/i],
                                [l, [f, "Rotor"],
                                    [h, b]
                                ],
                                [/(shield[\w ]+) b/i],
                                [l, [f, "Nvidia"],
                                    [h, b]
                                ],
                                [/(sprint) (\w+)/i],
                                [f, l, [h, y]],
                                [/(kin\.[onetw]{3})/i],
                                [
                                    [l, /\./g, " "],
                                    [f, N],
                                    [h, y]
                                ],
                                [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                                [l, [f, q],
                                    [h, b]
                                ],
                                [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                                [l, [f, q],
                                    [h, y]
                                ],
                                [/smart-tv.+(samsung)/i],
                                [f, [h, w]],
                                [/hbbtv.+maple;(\d+)/i],
                                [
                                    [l, /^/, "SmartTV"],
                                    [f, U],
                                    [h, w]
                                ],
                                [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
                                [
                                    [f, R],
                                    [h, w]
                                ],
                                [/(apple) ?tv/i],
                                [f, [l, E + " TV"],
                                    [h, w]
                                ],
                                [/crkey/i],
                                [
                                    [l, T + "cast"],
                                    [f, P],
                                    [h, w]
                                ],
                                [/droid.+aft(\w+)( bui|\))/i],
                                [l, [f, x],
                                    [h, w]
                                ],
                                [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
                                [l, [f, D],
                                    [h, w]
                                ],
                                [/(bravia[\w ]+)( bui|\))/i],
                                [l, [f, $],
                                    [h, w]
                                ],
                                [/(mitv-\w{5}) bui/i],
                                [l, [f, L],
                                    [h, w]
                                ],
                                [/Hbbtv.*(technisat) (.*);/i],
                                [f, l, [h, w]],
                                [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
                                [
                                    [f, K],
                                    [l, K],
                                    [h, w]
                                ],
                                [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                                [
                                    [h, w]
                                ],
                                [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                                [f, l, [h, g]],
                                [/droid.+; (shield) bui/i],
                                [l, [f, "Nvidia"],
                                    [h, g]
                                ],
                                [/(playstation [345portablevi]+)/i],
                                [l, [f, $],
                                    [h, g]
                                ],
                                [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                                [l, [f, N],
                                    [h, g]
                                ],
                                [/((pebble))app/i],
                                [f, l, [h, _]],
                                [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
                                [l, [f, E],
                                    [h, _]
                                ],
                                [/droid.+; (glass) \d/i],
                                [l, [f, P],
                                    [h, _]
                                ],
                                [/droid.+; (wt63?0{2,3})\)/i],
                                [l, [f, q],
                                    [h, _]
                                ],
                                [/(quest( 2| pro)?)/i],
                                [l, [f, V],
                                    [h, _]
                                ],
                                [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                                [f, [h, I]],
                                [/(aeobc)\b/i],
                                [l, [f, x],
                                    [h, I]
                                ],
                                [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
                                [l, [h, y]],
                                [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
                                [l, [h, b]],
                                [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                                [
                                    [h, b]
                                ],
                                [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
                                [
                                    [h, y]
                                ],
                                [/(android[-\w\. ]{0,9});.+buil/i],
                                [l, [f, "Generic"]]
                            ],
                            engine: [
                                [/windows.+ edge\/([\w\.]+)/i],
                                [m, [p, "EdgeHTML"]],
                                [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                                [m, [p, "Blink"]],
                                [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
                                [p, m],
                                [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                                [m, p]
                            ],
                            os: [
                                [/microsoft (windows) (vista|xp)/i],
                                [p, m],
                                [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],
                                [p, [m, J, G]],
                                [/windows nt 6\.2; (arm)/i, /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i, /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
                                [
                                    [m, J, G],
                                    [p, "Windows"]
                                ],
                                [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i, /cfnetwork\/.+darwin/i],
                                [
                                    [m, /_/g, "."],
                                    [p, "iOS"]
                                ],
                                [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
                                [
                                    [p, H],
                                    [m, /_/g, "."]
                                ],
                                [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
                                [m, p],
                                [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i],
                                [p, m],
                                [/\(bb(10);/i],
                                [m, [p, S]],
                                [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
                                [m, [p, "Symbian"]],
                                [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
                                [m, [p, A + " OS"]],
                                [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                                [m, [p, "webOS"]],
                                [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
                                [m, [p, "watchOS"]],
                                [/crkey\/([\d\.]+)/i],
                                [m, [p, T + "cast"]],
                                [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
                                [
                                    [p, B], m
                                ],
                                [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
                                [p, m],
                                [/(sunos) ?([\w\.\d]*)/i],
                                [
                                    [p, "Solaris"], m
                                ],
                                [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
                                [p, m]
                            ]
                        },
                        Q = function(e, t) {
                            if (typeof e === c && (t = e, e = i), !(this instanceof Q)) return new Q(e, t).getResult();
                            var r = typeof o !== a && o.navigator ? o.navigator : i,
                                n = e || (r && r.userAgent ? r.userAgent : ""),
                                g = r && r.userAgentData ? r.userAgentData : i,
                                w = t ? function(e, t) {
                                    var r = {};
                                    for (var n in e) t[n] && t[n].length % 2 == 0 ? r[n] = t[n].concat(e[n]) : r[n] = e[n];
                                    return r
                                }(X, t) : X,
                                _ = r && r.userAgent == n;
                            return this.getBrowser = function() {
                                var e, t = {};
                                return t[p] = i, t[m] = i, Y.call(t, n, w.browser), t[d] = typeof(e = t[m]) === u ? e.replace(/[^\d\.]/g, "").split(".")[0] : i, _ && r && r.brave && typeof r.brave.isBrave == s && (t[p] = "Brave"), t
                            }, this.getCPU = function() {
                                var e = {};
                                return e[v] = i, Y.call(e, n, w.cpu), e
                            }, this.getDevice = function() {
                                var e = {};
                                return e[f] = i, e[l] = i, e[h] = i, Y.call(e, n, w.device), _ && !e[h] && g && g.mobile && (e[h] = y), _ && "Macintosh" == e[l] && r && typeof r.standalone !== a && r.maxTouchPoints && r.maxTouchPoints > 2 && (e[l] = "iPad", e[h] = b), e
                            }, this.getEngine = function() {
                                var e = {};
                                return e[p] = i, e[m] = i, Y.call(e, n, w.engine), e
                            }, this.getOS = function() {
                                var e = {};
                                return e[p] = i, e[m] = i, Y.call(e, n, w.os), _ && !e[p] && g && "Unknown" != g.platform && (e[p] = g.platform.replace(/chrome os/i, B).replace(/macos/i, H)), e
                            }, this.getResult = function() {
                                return {
                                    ua: this.getUA(),
                                    browser: this.getBrowser(),
                                    engine: this.getEngine(),
                                    os: this.getOS(),
                                    device: this.getDevice(),
                                    cpu: this.getCPU()
                                }
                            }, this.getUA = function() {
                                return n
                            }, this.setUA = function(e) {
                                return n = typeof e === u && e.length > 500 ? K(e, 500) : e, this
                            }, this.setUA(n), this
                        };
                    Q.VERSION = "1.0.37", Q.BROWSER = F([p, m, d]), Q.CPU = F([v]), Q.DEVICE = F([l, f, h, g, y, w, b, _, I]), Q.ENGINE = Q.OS = F([p, m]), typeof t !== a ? (e.exports && (t = e.exports = Q), t.UAParser = Q) : r.amdO ? (n = function() {
                        return Q
                    }.call(t, r, t, e)) === i || (e.exports = n) : typeof o !== a && (o.UAParser = Q);
                    var Z = typeof o !== a && (o.jQuery || o.Zepto);
                    if (Z && !Z.ua) {
                        var ee = new Q;
                        Z.ua = ee.getResult(), Z.ua.get = function() {
                            return ee.getUA()
                        }, Z.ua.set = function(e) {
                            ee.setUA(e);
                            var t = ee.getResult();
                            for (var r in t) Z.ua[r] = t[r]
                        }
                    }
                }("object" == typeof window ? window : this)
            },
            1576: e => {
                "use strict";
                var t = TypeError;
                e.exports = function(e) {
                    if (e > 9007199254740991) throw t("Maximum allowed index exceeded");
                    return e
                }
            },
            1578: (e, t, r) => {
                "use strict";
                var n = r(5912);
                e.exports = function(e) {
                    var t = +e;
                    return t != t || 0 === t ? 0 : n(t)
                }
            },
            1613: (e, t, r) => {
                "use strict";
                var n = r(9731),
                    o = r(9639);
                n({
                    target: "Set",
                    proto: !0,
                    real: !0,
                    forced: !r(1381)("union")
                }, {
                    union: o
                })
            },
            1639: (e, t, r) => {
                "use strict";
                var n = r(6999),
                    o = r(1834),
                    i = r(960),
                    s = r(2544),
                    a = r(164),
                    c = r(543),
                    u = r(728),
                    d = r(9580),
                    l = r(7768),
                    p = r(8042),
                    h = TypeError,
                    f = function(e, t) {
                        this.stopped = e, this.result = t
                    },
                    m = f.prototype;
                e.exports = function(e, t, r) {
                    var v, g, y, b, w, _, I, x = r && r.that,
                        E = !(!r || !r.AS_ENTRIES),
                        k = !(!r || !r.IS_RECORD),
                        S = !(!r || !r.IS_ITERATOR),
                        C = !(!r || !r.INTERRUPTED),
                        T = n(t, x),
                        A = function(e) {
                            return v && p(v, "normal", e), new f(!0, e)
                        },
                        P = function(e) {
                            return E ? (i(e), C ? T(e[0], e[1], A) : T(e[0], e[1])) : C ? T(e, A) : T(e)
                        };
                    if (k) v = e.iterator;
                    else if (S) v = e;
                    else {
                        if (!(g = l(e))) throw new h(s(e) + " is not iterable");
                        if (a(g)) {
                            for (y = 0, b = c(e); b > y; y++)
                                if ((w = P(e[y])) && u(m, w)) return w;
                            return new f(!1)
                        }
                        v = d(e, g)
                    }
                    for (_ = k ? e.next : v.next; !(I = o(_, v)).done;) {
                        try {
                            w = P(I.value)
                        } catch (O) {
                            p(v, "throw", O)
                        }
                        if ("object" == typeof w && w && u(m, w)) return w
                    }
                    return new f(!1)
                }
            },
            1649: (e, t, r) => {
                "use strict";
                var n = r(679),
                    o = r(6947),
                    i = r(8144),
                    s = r(2451),
                    a = URLSearchParams,
                    c = a.prototype,
                    u = o(c.getAll),
                    d = o(c.has),
                    l = new a("a=1");
                !l.has("a", 2) && l.has("a", void 0) || n(c, "has", function(e) {
                    var t = arguments.length,
                        r = t < 2 ? void 0 : arguments[1];
                    if (t && void 0 === r) return d(this, e);
                    var n = u(this, e);
                    s(t, 1);
                    for (var o = i(r), a = 0; a < n.length;)
                        if (n[a++] === o) return !0;
                    return !1
                }, {
                    enumerable: !0,
                    unsafe: !0
                })
            },
            1700: (e, t, r) => {
                "use strict";
                var n = r(8575),
                    o = r(5833).has,
                    i = r(9151),
                    s = r(3868),
                    a = r(9634),
                    c = r(78),
                    u = r(8042);
                e.exports = function(e) {
                    var t = n(this),
                        r = s(e);
                    if (i(t) <= r.size) return !1 !== a(t, function(e) {
                        if (r.includes(e)) return !1
                    }, !0);
                    var d = r.getIterator();
                    return !1 !== c(d, function(e) {
                        if (o(t, e)) return u(d, "normal", !1)
                    })
                }
            },
            1777: (e, t, r) => {
                "use strict";
                var n = r(1578),
                    o = Math.max,
                    i = Math.min;
                e.exports = function(e, t) {
                    var r = n(e);
                    return r < 0 ? o(r + t, 0) : i(r, t)
                }
            },
            1799: (e, t, r) => {
                "use strict";
                var n = r(4492),
                    o = r(4202),
                    i = /#|\.prototype\./,
                    s = function(e, t) {
                        var r = c[a(e)];
                        return r === d || r !== u && (o(t) ? n(t) : !!t)
                    },
                    a = s.normalize = function(e) {
                        return String(e).replace(i, ".").toLowerCase()
                    },
                    c = s.data = {},
                    u = s.NATIVE = "N",
                    d = s.POLYFILL = "P";
                e.exports = s
            },
            1815: (e, t, r) => {
                "use strict";
                var n = r(1399),
                    o = r(380),
                    i = r(3929);
                e.exports = function(e, t, r) {
                    n ? o.f(e, t, i(0, r)) : e[t] = r
                }
            },
            1834: (e, t, r) => {
                "use strict";
                var n = r(5121),
                    o = Function.prototype.call;
                e.exports = n ? o.bind(o) : function() {
                    return o.apply(o, arguments)
                }
            },
            1884: (e, t, r) => {
                "use strict";
                r(2561)
            },
            1994: (e, t, r) => {
                "use strict";
                var n = r(5599),
                    o = r(8809),
                    i = o.aTypedArray,
                    s = o.exportTypedArrayMethod,
                    a = o.getTypedArrayConstructor;
                s("toReversed", function() {
                    return n(i(this), a(this))
                })
            },
            1995: (e, t, r) => {
                "use strict";
                var n = r(6668),
                    o = r(4450),
                    i = r(6710),
                    s = r(380);
                e.exports = function(e, t, r) {
                    for (var a = o(t), c = s.f, u = i.f, d = 0; d < a.length; d++) {
                        var l = a[d];
                        n(e, l) || r && n(r, l) || c(e, l, u(t, l))
                    }
                }
            },
            2265: (e, t, r) => {
                "use strict";
                var n = r(7759),
                    o = r(6947);
                e.exports = function(e) {
                    if ("Function" === n(e)) return o(e)
                }
            },
            2275: (e, t, r) => {
                "use strict";
                var n = r(8575),
                    o = r(5833),
                    i = r(9151),
                    s = r(3868),
                    a = r(9634),
                    c = r(78),
                    u = o.Set,
                    d = o.add,
                    l = o.has;
                e.exports = function(e) {
                    var t = n(this),
                        r = s(e),
                        o = new u;
                    return i(t) > r.size ? c(r.getIterator(), function(e) {
                        l(t, e) && d(o, e)
                    }) : a(t, function(e) {
                        r.includes(e) && d(o, e)
                    }), o
                }
            },
            2307: (e, t, r) => {
                "use strict";
                var n = r(6002),
                    o = r(6947),
                    i = r(6671),
                    s = r(9593),
                    a = r(9611),
                    c = r(9411),
                    u = r(2568),
                    d = r(4789),
                    l = n.structuredClone,
                    p = n.ArrayBuffer,
                    h = n.DataView,
                    f = n.TypeError,
                    m = Math.min,
                    v = p.prototype,
                    g = h.prototype,
                    y = o(v.slice),
                    b = i(v, "resizable", "get"),
                    w = i(v, "maxByteLength", "get"),
                    _ = o(g.getInt8),
                    I = o(g.setInt8);
                e.exports = (d || u) && function(e, t, r) {
                    var n, o = c(e),
                        i = void 0 === t ? o : s(t),
                        v = !b || !b(e);
                    if (a(e)) throw new f("ArrayBuffer is detached");
                    if (d && (e = l(e, {
                            transfer: [e]
                        }), o === i && (r || v))) return e;
                    if (o >= i && (!r || v)) n = y(e, 0, i);
                    else {
                        var g = r && !v && w ? {
                            maxByteLength: w(e)
                        } : void 0;
                        n = new p(i, g);
                        for (var x = new h(e), E = new h(n), k = m(i, o), S = 0; S < k; S++) I(E, S, _(x, S))
                    }
                    return d || u(e), n
                }
            },
            2341: (e, t, r) => {
                "use strict";
                var n = r(9731),
                    o = r(1834),
                    i = r(6895),
                    s = r(960),
                    a = r(7636),
                    c = r(3649),
                    u = r(3842),
                    d = r(4192),
                    l = c(function() {
                        for (var e, t, r = this.iterator, n = this.predicate, i = this.next;;) {
                            if (e = s(o(i, r)), this.done = !!e.done) return;
                            if (t = e.value, u(r, n, [t, this.counter++], !0)) return t
                        }
                    });
                n({
                    target: "Iterator",
                    proto: !0,
                    real: !0,
                    forced: d
                }, {
                    filter: function(e) {
                        return s(this), i(e), new l(a(this), {
                            predicate: e
                        })
                    }
                })
            },
            2389: (e, t, r) => {
                "use strict";
                var n = r(6002),
                    o = r(7759);
                e.exports = "process" === o(n.process)
            },
            2451: e => {
                "use strict";
                var t = TypeError;
                e.exports = function(e, r) {
                    if (e < r) throw new t("Not enough arguments");
                    return e
                }
            },
            2513: (e, t, r) => {
                "use strict";
                r(4204)
            },
            2544: e => {
                "use strict";
                var t = String;
                e.exports = function(e) {
                    try {
                        return t(e)
                    } catch (r) {
                        return "Object"
                    }
                }
            },
            2561: (e, t, r) => {
                "use strict";
                var n = r(9731),
                    o = r(6115);
                n({
                    target: "Set",
                    proto: !0,
                    real: !0,
                    forced: !r(1381)("symmetricDifference")
                }, {
                    symmetricDifference: o
                })
            },
            2568: (e, t, r) => {
                "use strict";
                var n, o, i, s, a = r(6002),
                    c = r(4235),
                    u = r(4789),
                    d = a.structuredClone,
                    l = a.ArrayBuffer,
                    p = a.MessageChannel,
                    h = !1;
                if (u) h = function(e) {
                    d(e, {
                        transfer: [e]
                    })
                };
                else if (l) try {
                    p || (n = c("worker_threads")) && (p = n.MessageChannel), p && (o = new p, i = new l(2), s = function(e) {
                        o.port1.postMessage(null, [e])
                    }, 2 === i.byteLength && (s(i), 0 === i.byteLength && (h = s)))
                } catch (f) {}
                e.exports = h
            },
            2578: (e, t, r) => {
                "use strict";
                var n = r(8575),
                    o = r(5833).has,
                    i = r(9151),
                    s = r(3868),
                    a = r(78),
                    c = r(8042);
                e.exports = function(e) {
                    var t = n(this),
                        r = s(e);
                    if (i(t) < r.size) return !1;
                    var u = r.getIterator();
                    return !1 !== a(u, function(e) {
                        if (!o(t, e)) return c(u, "normal", !1)
                    })
                }
            },
            2661: (e, t, r) => {
                "use strict";
                var n = r(1399),
                    o = r(4492);
                e.exports = n && o(function() {
                    return 42 !== Object.defineProperty(function() {}, "prototype", {
                        value: 42,
                        writable: !1
                    }).prototype
                })
            },
            2690: (e, t, r) => {
                "use strict";
                var n = r(6947),
                    o = Error,
                    i = n("".replace),
                    s = String(new o("zxcasd").stack),
                    a = /\n\s*at [^:]*:[^\n]*/,
                    c = a.test(s);
                e.exports = function(e, t) {
                    if (c && "string" == typeof e && !o.prepareStackTrace)
                        for (; t--;) e = i(e, a, "");
                    return e
                }
            },
            2796: (e, t, r) => {
                "use strict";
                var n = r(9731),
                    o = r(6002),
                    i = r(6947),
                    s = r(5183),
                    a = o.Uint8Array,
                    c = i(1..toString);
                a && n({
                    target: "Uint8Array",
                    proto: !0,
                    forced: !0
                }, {
                    toHex: function() {
                        s(this);
                        for (var e = "", t = 0, r = this.length; t < r; t++) {
                            var n = c(this[t], 16);
                            e += 1 === n.length ? "0" + n : n
                        }
                        return e
                    }
                })
            },
            2820: (e, t, r) => {
                "use strict";
                var n, o, i, s = r(2903),
                    a = r(6002),
                    c = r(621),
                    u = r(6426),
                    d = r(6668),
                    l = r(5408),
                    p = r(7258),
                    h = r(482),
                    f = "Object already initialized",
                    m = a.TypeError,
                    v = a.WeakMap;
                if (s || l.state) {
                    var g = l.state || (l.state = new v);
                    g.get = g.get, g.has = g.has, g.set = g.set, n = function(e, t) {
                        if (g.has(e)) throw new m(f);
                        return t.facade = e, g.set(e, t), t
                    }, o = function(e) {
                        return g.get(e) || {}
                    }, i = function(e) {
                        return g.has(e)
                    }
                } else {
                    var y = p("state");
                    h[y] = !0, n = function(e, t) {
                        if (d(e, y)) throw new m(f);
                        return t.facade = e, u(e, y, t), t
                    }, o = function(e) {
                        return d(e, y) ? e[y] : {}
                    }, i = function(e) {
                        return d(e, y)
                    }
                }
                e.exports = {
                    set: n,
                    get: o,
                    has: i,
                    enforce: function(e) {
                        return i(e) ? o(e) : n(e, {})
                    },
                    getterFor: function(e) {
                        return function(t) {
                            var r;
                            if (!c(t) || (r = o(t)).type !== e) throw new m("Incompatible receiver, " + e + " required");
                            return r
                        }
                    }
                }
            },
            2903: (e, t, r) => {
                "use strict";
                var n = r(6002),
                    o = r(4202),
                    i = n.WeakMap;
                e.exports = o(i) && /native code/.test(String(i))
            },
            3004: (e, t, r) => {
                "use strict";
                var n, o, i, s = r(4492),
                    a = r(4202),
                    c = r(621),
                    u = r(5979),
                    d = r(9972),
                    l = r(679),
                    p = r(9544),
                    h = r(4192),
                    f = p("iterator"),
                    m = !1;
                [].keys && ("next" in (i = [].keys()) ? (o = d(d(i))) !== Object.prototype && (n = o) : m = !0), !c(n) || s(function() {
                    var e = {};
                    return n[f].call(e) !== e
                }) ? n = {} : h && (n = u(n)), a(n[f]) || l(n, f, function() {
                    return this
                }), e.exports = {
                    IteratorPrototype: n,
                    BUGGY_SAFARI_ITERATORS: m
                }
            },
            3013: (e, t, r) => {
                "use strict";
                var n = r(6947),
                    o = r(6668),
                    i = r(654),
                    s = r(5972).indexOf,
                    a = r(482),
                    c = n([].push);
                e.exports = function(e, t) {
                    var r, n = i(e),
                        u = 0,
                        d = [];
                    for (r in n) !o(a, r) && o(n, r) && c(d, r);
                    for (; t.length > u;) o(n, r = t[u++]) && (~s(d, r) || c(d, r));
                    return d
                }
            },
            3094: (e, t, r) => {
                "use strict";
                var n = r(5308),
                    o = r(3578);
                e.exports = function(e) {
                    var t = n(e, "string");
                    return o(t) ? t : t + ""
                }
            },
            3154: (e, t, r) => {
                "use strict";
                var n = r(679),
                    o = r(6947),
                    i = r(8144),
                    s = r(2451),
                    a = URLSearchParams,
                    c = a.prototype,
                    u = o(c.append),
                    d = o(c.delete),
                    l = o(c.forEach),
                    p = o([].push),
                    h = new a("a=1&a=2&b=3");
                h.delete("a", 1), h.delete("b", void 0), h + "" != "a=2" && n(c, "delete", function(e) {
                    var t = arguments.length,
                        r = t < 2 ? void 0 : arguments[1];
                    if (t && void 0 === r) return d(this, e);
                    var n = [];
                    l(this, function(e, t) {
                        p(n, {
                            key: t,
                            value: e
                        })
                    }), s(t, 1);
                    for (var o, a = i(e), c = i(r), h = 0, f = 0, m = !1, v = n.length; h < v;) o = n[h++], m || o.key === a ? (m = !0, d(this, o.key)) : f++;
                    for (; f < v;)(o = n[f++]).key === a && o.value === c || u(this, o.key, o.value)
                }, {
                    enumerable: !0,
                    unsafe: !0
                })
            },
            3192: (e, t, r) => {
                "use strict";
                var n = r(6671),
                    o = r(621),
                    i = r(6591),
                    s = r(11);
                e.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
                    var e, t = !1,
                        r = {};
                    try {
                        (e = n(Object.prototype, "__proto__", "set"))(r, []), t = r instanceof Array
                    } catch (a) {}
                    return function(r, n) {
                        return i(r), s(n), o(r) ? (t ? e(r, n) : r.__proto__ = n, r) : r
                    }
                }() : void 0)
            },
            3382: (e, t, r) => {
                "use strict";
                var n = r(4492);
                e.exports = !n(function() {
                    function e() {}
                    return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype
                })
            },
            3481: (e, t, r) => {
                "use strict";
                r(6432)
            },
            3506: (e, t) => {
                "use strict";
                t.f = Object.getOwnPropertySymbols
            },
            3552: (e, t, r) => {
                "use strict";
                var n = r(6002),
                    o = r(621),
                    i = n.document,
                    s = o(i) && o(i.createElement);
                e.exports = function(e) {
                    return s ? i.createElement(e) : {}
                }
            },
            3578: (e, t, r) => {
                "use strict";
                var n = r(4862),
                    o = r(4202),
                    i = r(728),
                    s = r(4455),
                    a = Object;
                e.exports = s ? function(e) {
                    return "symbol" == typeof e
                } : function(e) {
                    var t = n("Symbol");
                    return o(t) && i(t.prototype, a(e))
                }
            },
            3649: (e, t, r) => {
                "use strict";
                var n = r(1834),
                    o = r(5979),
                    i = r(6426),
                    s = r(9746),
                    a = r(9544),
                    c = r(2820),
                    u = r(7751),
                    d = r(3004).IteratorPrototype,
                    l = r(7214),
                    p = r(8042),
                    h = a("toStringTag"),
                    f = "IteratorHelper",
                    m = "WrapForValidIterator",
                    v = c.set,
                    g = function(e) {
                        var t = c.getterFor(e ? m : f);
                        return s(o(d), {
                            next: function() {
                                var r = t(this);
                                if (e) return r.nextHandler();
                                try {
                                    var n = r.done ? void 0 : r.nextHandler();
                                    return l(n, r.done)
                                } catch (o) {
                                    throw r.done = !0, o
                                }
                            },
                            return: function() {
                                var r = t(this),
                                    o = r.iterator;
                                if (r.done = !0, e) {
                                    var i = u(o, "return");
                                    return i ? n(i, o) : l(void 0, !0)
                                }
                                if (r.inner) try {
                                    p(r.inner.iterator, "normal")
                                } catch (s) {
                                    return p(o, "throw", s)
                                }
                                return p(o, "normal"), l(void 0, !0)
                            }
                        })
                    },
                    y = g(!0),
                    b = g(!1);
                i(b, h, "Iterator Helper"), e.exports = function(e, t) {
                    var r = function(r, n) {
                        n ? (n.iterator = r.iterator, n.next = r.next) : n = r, n.type = t ? m : f, n.nextHandler = e, n.counter = 0, n.done = !1, v(this, n)
                    };
                    return r.prototype = t ? y : b, r
                }
            },
            3841: (e, t, r) => {
                "use strict";
                var n = r(8575),
                    o = r(5833),
                    i = r(1249),
                    s = r(9151),
                    a = r(3868),
                    c = r(9634),
                    u = r(78),
                    d = o.has,
                    l = o.remove;
                e.exports = function(e) {
                    var t = n(this),
                        r = a(e),
                        o = i(t);
                    return s(t) <= r.size ? c(t, function(e) {
                        r.includes(e) && l(o, e)
                    }) : u(r.getIterator(), function(e) {
                        d(t, e) && l(o, e)
                    }), o
                }
            },
            3842: (e, t, r) => {
                "use strict";
                var n = r(960),
                    o = r(8042);
                e.exports = function(e, t, r, i) {
                    try {
                        return i ? t(n(r)[0], r[1]) : t(r)
                    } catch (s) {
                        o(e, "throw", s)
                    }
                }
            },
            3868: (e, t, r) => {
                "use strict";
                var n = r(6895),
                    o = r(960),
                    i = r(1834),
                    s = r(1578),
                    a = r(7636),
                    c = "Invalid size",
                    u = RangeError,
                    d = TypeError,
                    l = Math.max,
                    p = function(e, t) {
                        this.set = e, this.size = l(t, 0), this.has = n(e.has), this.keys = n(e.keys)
                    };
                p.prototype = {
                    getIterator: function() {
                        return a(o(i(this.keys, this.set)))
                    },
                    includes: function(e) {
                        return i(this.has, this.set, e)
                    }
                }, e.exports = function(e) {
                    o(e);
                    var t = +e.size;
                    if (t != t) throw new d(c);
                    var r = s(t);
                    if (r < 0) throw new u(c);
                    return new p(e, r)
                }
            },
            3875: (e, t, r) => {
                "use strict";
                var n = r(6947),
                    o = 0,
                    i = Math.random(),
                    s = n(1..toString);
                e.exports = function(e) {
                    return "Symbol(" + (void 0 === e ? "" : e) + ")_" + s(++o + i, 36)
                }
            },
            3912: (e, t, r) => {
                "use strict";
                var n = r(5121),
                    o = Function.prototype,
                    i = o.apply,
                    s = o.call;
                e.exports = "object" == typeof Reflect && Reflect.apply || (n ? s.bind(i) : function() {
                    return s.apply(i, arguments)
                })
            },
            3929: e => {
                "use strict";
                e.exports = function(e, t) {
                    return {
                        enumerable: !(1 & e),
                        configurable: !(2 & e),
                        writable: !(4 & e),
                        value: t
                    }
                }
            },
            4183: (e, t, r) => {
                "use strict";
                var n = r(6947),
                    o = r(4202),
                    i = r(5408),
                    s = n(Function.toString);
                o(i.inspectSource) || (i.inspectSource = function(e) {
                    return s(e)
                }), e.exports = i.inspectSource
            },
            4192: e => {
                "use strict";
                e.exports = !1
            },
            4202: e => {
                "use strict";
                var t = "object" == typeof document && document.all;
                e.exports = void 0 === t && void 0 !== t ? function(e) {
                    return "function" == typeof e || e === t
                } : function(e) {
                    return "function" == typeof e
                }
            },
            4204: (e, t, r) => {
                "use strict";
                var n = r(9731),
                    o = r(1700);
                n({
                    target: "Set",
                    proto: !0,
                    real: !0,
                    forced: !r(1381)("isDisjointFrom")
                }, {
                    isDisjointFrom: o
                })
            },
            4235: (e, t, r) => {
                "use strict";
                var n = r(2389);
                e.exports = function(e) {
                    try {
                        if (n) return Function('return require("' + e + '")')()
                    } catch (t) {}
                }
            },
            4435: (e, t, r) => {
                "use strict";
                var n = r(8575),
                    o = r(9151),
                    i = r(9634),
                    s = r(3868);
                e.exports = function(e) {
                    var t = n(this),
                        r = s(e);
                    return !(o(t) > r.size) && !1 !== i(t, function(e) {
                        if (!r.includes(e)) return !1
                    }, !0)
                }
            },
            4450: (e, t, r) => {
                "use strict";
                var n = r(4862),
                    o = r(6947),
                    i = r(459),
                    s = r(3506),
                    a = r(960),
                    c = o([].concat);
                e.exports = n("Reflect", "ownKeys") || function(e) {
                    var t = i.f(a(e)),
                        r = s.f;
                    return r ? c(t, r(e)) : t
                }
            },
            4455: (e, t, r) => {
                "use strict";
                var n = r(9750);
                e.exports = n && !Symbol.sham && "symbol" == typeof Symbol.iterator
            },
            4456: (e, t, r) => {
                "use strict";
                var n = r(5408);
                e.exports = function(e, t) {
                    return n[e] || (n[e] = t || {})
                }
            },
            4492: e => {
                "use strict";
                e.exports = function(e) {
                    try {
                        return !!e()
                    } catch (t) {
                        return !0
                    }
                }
            },
            4495: (e, t, r) => {
                "use strict";
                var n = r(1834),
                    o = r(960),
                    i = r(7636),
                    s = r(7768);
                e.exports = function(e, t) {
                    t && "string" == typeof e || o(e);
                    var r = s(e);
                    return i(o(void 0 !== r ? n(r, e) : e))
                }
            },
            4555: (e, t, r) => {
                "use strict";
                var n = r(6947),
                    o = r(6668),
                    i = SyntaxError,
                    s = parseInt,
                    a = String.fromCharCode,
                    c = n("".charAt),
                    u = n("".slice),
                    d = n(/./.exec),
                    l = {
                        '\\"': '"',
                        "\\\\": "\\",
                        "\\/": "/",
                        "\\b": "\b",
                        "\\f": "\f",
                        "\\n": "\n",
                        "\\r": "\r",
                        "\\t": "\t"
                    },
                    p = /^[\da-f]{4}$/i,
                    h = /^[\u0000-\u001F]$/;
                e.exports = function(e, t) {
                    for (var r = !0, n = ""; t < e.length;) {
                        var f = c(e, t);
                        if ("\\" === f) {
                            var m = u(e, t, t + 2);
                            if (o(l, m)) n += l[m], t += 2;
                            else {
                                if ("\\u" !== m) throw new i('Unknown escape sequence: "' + m + '"');
                                var v = u(e, t += 2, t + 4);
                                if (!d(p, v)) throw new i("Bad Unicode escape at: " + t);
                                n += a(s(v, 16)), t += 4
                            }
                        } else {
                            if ('"' === f) {
                                r = !1, t++;
                                break
                            }
                            if (d(h, f)) throw new i("Bad control character in string literal at: " + t);
                            n += f, t++
                        }
                    }
                    if (r) throw new i("Unterminated string at: " + t);
                    return {
                        value: n,
                        end: t
                    }
                }
            },
            4737: (e, t, r) => {
                "use strict";
                var n = r(1399),
                    o = r(6668),
                    i = Function.prototype,
                    s = n && Object.getOwnPropertyDescriptor,
                    a = o(i, "name"),
                    c = a && "something" === function() {}.name,
                    u = a && (!n || n && s(i, "name").configurable);
                e.exports = {
                    EXISTS: a,
                    PROPER: c,
                    CONFIGURABLE: u
                }
            },
            4765: (e, t, r) => {
                "use strict";
                var n = r(8809),
                    o = r(6947),
                    i = r(6895),
                    s = r(821),
                    a = n.aTypedArray,
                    c = n.getTypedArrayConstructor,
                    u = n.exportTypedArrayMethod,
                    d = o(n.TypedArrayPrototype.sort);
                u("toSorted", function(e) {
                    void 0 !== e && i(e);
                    var t = a(this),
                        r = s(c(t), t);
                    return d(r, e)
                })
            },
            4789: (e, t, r) => {
                "use strict";
                var n = r(6002),
                    o = r(4492),
                    i = r(8963),
                    s = r(5165),
                    a = r(9129),
                    c = r(2389),
                    u = n.structuredClone;
                e.exports = !!u && !o(function() {
                    if (a && i > 92 || c && i > 94 || s && i > 97) return !1;
                    var e = new ArrayBuffer(8),
                        t = u(e, {
                            transfer: [e]
                        });
                    return 0 !== e.byteLength || 8 !== t.byteLength
                })
            },
            4827: (e, t, r) => {
                "use strict";
                var n = r(3013),
                    o = r(8280);
                e.exports = Object.keys || function(e) {
                    return n(e, o)
                }
            },
            4862: (e, t, r) => {
                "use strict";
                var n = r(6002),
                    o = r(4202);
                e.exports = function(e, t) {
                    return arguments.length < 2 ? (r = n[e], o(r) ? r : void 0) : n[e] && n[e][t];
                    var r
                }
            },
            4952: (e, t, r) => {
                "use strict";
                var n = r(6947),
                    o = r(4492),
                    i = r(4202),
                    s = r(6668),
                    a = r(1399),
                    c = r(4737).CONFIGURABLE,
                    u = r(4183),
                    d = r(2820),
                    l = d.enforce,
                    p = d.get,
                    h = String,
                    f = Object.defineProperty,
                    m = n("".slice),
                    v = n("".replace),
                    g = n([].join),
                    y = a && !o(function() {
                        return 8 !== f(function() {}, "length", {
                            value: 8
                        }).length
                    }),
                    b = String(String).split("String"),
                    w = e.exports = function(e, t, r) {
                        "Symbol(" === m(h(t), 0, 7) && (t = "[" + v(h(t), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), r && r.getter && (t = "get " + t), r && r.setter && (t = "set " + t), (!s(e, "name") || c && e.name !== t) && (a ? f(e, "name", {
                            value: t,
                            configurable: !0
                        }) : e.name = t), y && r && s(r, "arity") && e.length !== r.arity && f(e, "length", {
                            value: r.arity
                        });
                        try {
                            r && s(r, "constructor") && r.constructor ? a && f(e, "prototype", {
                                writable: !1
                            }) : e.prototype && (e.prototype = void 0)
                        } catch (o) {}
                        var n = l(e);
                        return s(n, "source") || (n.source = g(b, "string" == typeof t ? t : "")), e
                    };
                Function.prototype.toString = w(function() {
                    return i(this) && p(this).source || u(this)
                }, "toString")
            },
            4980: (e, t, r) => {
                "use strict";
                var n = r(6002),
                    o = Object.defineProperty;
                e.exports = function(e, t) {
                    try {
                        o(n, e, {
                            value: t,
                            configurable: !0,
                            writable: !0
                        })
                    } catch (r) {
                        n[e] = t
                    }
                    return t
                }
            },
            4997: e => {
                "use strict";
                var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
                    r = t + "+/",
                    n = t + "-_",
                    o = function(e) {
                        for (var t = {}, r = 0; r < 64; r++) t[e.charAt(r)] = r;
                        return t
                    };
                e.exports = {
                    i2c: r,
                    c2i: o(r),
                    i2cUrl: n,
                    c2iUrl: o(n)
                }
            },
            5121: (e, t, r) => {
                "use strict";
                var n = r(4492);
                e.exports = !n(function() {
                    var e = function() {}.bind();
                    return "function" != typeof e || e.hasOwnProperty("prototype")
                })
            },
            5165: (e, t, r) => {
                "use strict";
                var n = r(9129),
                    o = r(2389);
                e.exports = !n && !o && "object" == typeof window && "object" == typeof document
            },
            5178: (e, t, r) => {
                "use strict";
                var n = r(229),
                    o = r(8809),
                    i = r(7054),
                    s = r(1578),
                    a = r(9755),
                    c = o.aTypedArray,
                    u = o.getTypedArrayConstructor,
                    d = o.exportTypedArrayMethod,
                    l = !! function() {
                        try {
                            new Int8Array(1).with(2, {
                                valueOf: function() {
                                    throw 8
                                }
                            })
                        } catch (e) {
                            return 8 === e
                        }
                    }();
                d("with", {
                    with: function(e, t) {
                        var r = c(this),
                            o = s(e),
                            d = i(r) ? a(t) : +t;
                        return n(r, u(r), o, d)
                    }
                }.with, !l)
            },
            5183: (e, t, r) => {
                "use strict";
                var n = r(764),
                    o = TypeError;
                e.exports = function(e) {
                    if ("Uint8Array" === n(e)) return e;
                    throw new o("Argument is not an Uint8Array")
                }
            },
            5201: (e, t, r) => {
                "use strict";
                var n = r(7759);
                e.exports = Array.isArray || function(e) {
                    return "Array" === n(e)
                }
            },
            5251: (e, t, r) => {
                "use strict";
                var n = r(4952),
                    o = r(380);
                e.exports = function(e, t, r) {
                    return r.get && n(r.get, t, {
                        getter: !0
                    }), r.set && n(r.set, t, {
                        setter: !0
                    }), o.f(e, t, r)
                }
            },
            5308: (e, t, r) => {
                "use strict";
                var n = r(1834),
                    o = r(621),
                    i = r(3578),
                    s = r(7751),
                    a = r(5621),
                    c = r(9544),
                    u = TypeError,
                    d = c("toPrimitive");
                e.exports = function(e, t) {
                    if (!o(e) || i(e)) return e;
                    var r, c = s(e, d);
                    if (c) {
                        if (void 0 === t && (t = "default"), r = n(c, e, t), !o(r) || i(r)) return r;
                        throw new u("Can't convert object to primitive value")
                    }
                    return void 0 === t && (t = "number"), a(e, t)
                }
            },
            5379: (e, t, r) => {
                "use strict";
                var n = r(6947);
                e.exports = n([].slice)
            },
            5408: (e, t, r) => {
                "use strict";
                var n = r(4192),
                    o = r(6002),
                    i = r(4980),
                    s = "__core-js_shared__",
                    a = e.exports = o[s] || i(s, {});
                (a.versions || (a.versions = [])).push({
                    version: "3.37.0",
                    mode: n ? "pure" : "global",
                    copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
                    license: "https://github.com/zloirock/core-js/blob/v3.37.0/LICENSE",
                    source: "https://github.com/zloirock/core-js"
                })
            },
            5495: (e, t, r) => {
                "use strict";
                var n = r(8809),
                    o = r(543),
                    i = r(1578),
                    s = n.aTypedArray;
                (0, n.exportTypedArrayMethod)("at", function(e) {
                    var t = s(this),
                        r = o(t),
                        n = i(e),
                        a = n >= 0 ? n : r + n;
                    return a < 0 || a >= r ? void 0 : t[a]
                })
            },
            5527: (e, t, r) => {
                "use strict";
                var n = r(9731),
                    o = r(3841);
                n({
                    target: "Set",
                    proto: !0,
                    real: !0,
                    forced: !r(1381)("difference")
                }, {
                    difference: o
                })
            },
            5599: (e, t, r) => {
                "use strict";
                var n = r(543);
                e.exports = function(e, t) {
                    for (var r = n(e), o = new t(r), i = 0; i < r; i++) o[i] = e[r - i - 1];
                    return o
                }
            },
            5621: (e, t, r) => {
                "use strict";
                var n = r(1834),
                    o = r(4202),
                    i = r(621),
                    s = TypeError;
                e.exports = function(e, t) {
                    var r, a;
                    if ("string" === t && o(r = e.toString) && !i(a = n(r, e))) return a;
                    if (o(r = e.valueOf) && !i(a = n(r, e))) return a;
                    if ("string" !== t && o(r = e.toString) && !i(a = n(r, e))) return a;
                    throw new s("Can't convert object to primitive value")
                }
            },
            5833: (e, t, r) => {
                "use strict";
                var n = r(6947),
                    o = Set.prototype;
                e.exports = {
                    Set,
                    add: n(o.add),
                    has: n(o.has),
                    remove: n(o.delete),
                    proto: o
                }
            },
            5864: (e, t, r) => {
                "use strict";
                var n = r(9731),
                    o = r(1639),
                    i = r(6895),
                    s = r(960),
                    a = r(7636);
                n({
                    target: "Iterator",
                    proto: !0,
                    real: !0
                }, {
                    every: function(e) {
                        s(this), i(e);
                        var t = a(this),
                            r = 0;
                        return !o(t, function(t, n) {
                            if (!e(t, r++)) return n()
                        }, {
                            IS_RECORD: !0,
                            INTERRUPTED: !0
                        }).stopped
                    }
                })
            },
            5873: (e, t, r) => {
                "use strict";
                var n = r(9731),
                    o = r(4492),
                    i = r(2275);
                n({
                    target: "Set",
                    proto: !0,
                    real: !0,
                    forced: !r(1381)("intersection") || o(function() {
                        return "3,2" !== String(Array.from(new Set([1, 2, 3]).intersection(new Set([3, 2]))))
                    })
                }, {
                    intersection: i
                })
            },
            5912: e => {
                "use strict";
                var t = Math.ceil,
                    r = Math.floor;
                e.exports = Math.trunc || function(e) {
                    var n = +e;
                    return (n > 0 ? r : t)(n)
                }
            },
            5972: (e, t, r) => {
                "use strict";
                var n = r(654),
                    o = r(1777),
                    i = r(543),
                    s = function(e) {
                        return function(t, r, s) {
                            var a = n(t),
                                c = i(a);
                            if (0 === c) return !e && -1;
                            var u, d = o(s, c);
                            if (e && r != r) {
                                for (; c > d;)
                                    if ((u = a[d++]) != u) return !0
                            } else
                                for (; c > d; d++)
                                    if ((e || d in a) && a[d] === r) return e || d || 0;
                            return !e && -1
                        }
                    };
                e.exports = {
                    includes: s(!0),
                    indexOf: s(!1)
                }
            },
            5979: (e, t, r) => {
                "use strict";
                var n, o = r(960),
                    i = r(8220),
                    s = r(8280),
                    a = r(482),
                    c = r(9936),
                    u = r(3552),
                    d = r(7258),
                    l = "prototype",
                    p = "script",
                    h = d("IE_PROTO"),
                    f = function() {},
                    m = function(e) {
                        return "<" + p + ">" + e + "</" + p + ">"
                    },
                    v = function(e) {
                        e.write(m("")), e.close();
                        var t = e.parentWindow.Object;
                        return e = null, t
                    },
                    g = function() {
                        try {
                            n = new ActiveXObject("htmlfile")
                        } catch (i) {}
                        var e, t, r;
                        g = "undefined" != typeof document ? document.domain && n ? v(n) : (t = u("iframe"), r = "java" + p + ":", t.style.display = "none", c.appendChild(t), t.src = String(r), (e = t.contentWindow.document).open(), e.write(m("document.F=Object")), e.close(), e.F) : v(n);
                        for (var o = s.length; o--;) delete g[l][s[o]];
                        return g()
                    };
                a[h] = !0, e.exports = Object.create || function(e, t) {
                    var r;
                    return null !== e ? (f[l] = o(e), r = new f, f[l] = null, r[h] = e) : r = g(), void 0 === t ? r : i.f(r, t)
                }
            },
            5993: (e, t, r) => {
                "use strict";
                var n = r(9731),
                    o = r(4862),
                    i = r(3912),
                    s = r(1834),
                    a = r(6947),
                    c = r(4492),
                    u = r(4202),
                    d = r(3578),
                    l = r(5379),
                    p = r(1120),
                    h = r(9750),
                    f = String,
                    m = o("JSON", "stringify"),
                    v = a(/./.exec),
                    g = a("".charAt),
                    y = a("".charCodeAt),
                    b = a("".replace),
                    w = a(1..toString),
                    _ = /[\uD800-\uDFFF]/g,
                    I = /^[\uD800-\uDBFF]$/,
                    x = /^[\uDC00-\uDFFF]$/,
                    E = !h || c(function() {
                        var e = o("Symbol")("stringify detection");
                        return "[null]" !== m([e]) || "{}" !== m({
                            a: e
                        }) || "{}" !== m(Object(e))
                    }),
                    k = c(function() {
                        return '"\\udf06\\ud834"' !== m("\udf06\ud834") || '"\\udead"' !== m("\udead")
                    }),
                    S = function(e, t) {
                        var r = l(arguments),
                            n = p(t);
                        if (u(n) || void 0 !== e && !d(e)) return r[1] = function(e, t) {
                            if (u(n) && (t = s(n, this, f(e), t)), !d(t)) return t
                        }, i(m, null, r)
                    },
                    C = function(e, t, r) {
                        var n = g(r, t - 1),
                            o = g(r, t + 1);
                        return v(I, e) && !v(x, o) || v(x, e) && !v(I, n) ? "\\u" + w(y(e, 0), 16) : e
                    };
                m && n({
                    target: "JSON",
                    stat: !0,
                    arity: 3,
                    forced: E || k
                }, {
                    stringify: function(e, t, r) {
                        var n = l(arguments),
                            o = i(E ? S : m, null, n);
                        return k && "string" == typeof o ? b(o, _, C) : o
                    }
                })
            },
            6002: function(e, t, r) {
                "use strict";
                var n = function(e) {
                    return e && e.Math === Math && e
                };
                e.exports = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof r.g && r.g) || n("object" == typeof this && this) || function() {
                    return this
                }() || Function("return this")()
            },
            6115: (e, t, r) => {
                "use strict";
                var n = r(8575),
                    o = r(5833),
                    i = r(1249),
                    s = r(3868),
                    a = r(78),
                    c = o.add,
                    u = o.has,
                    d = o.remove;
                e.exports = function(e) {
                    var t = n(this),
                        r = s(e).getIterator(),
                        o = i(t);
                    return a(r, function(e) {
                        u(t, e) ? d(o, e) : c(o, e)
                    }), o
                }
            },
            6202: (e, t, r) => {
                "use strict";
                var n = r(9731),
                    o = r(2578);
                n({
                    target: "Set",
                    proto: !0,
                    real: !0,
                    forced: !r(1381)("isSupersetOf")
                }, {
                    isSupersetOf: o
                })
            },
            6212: (e, t, r) => {
                "use strict";
                var n = r(6999),
                    o = r(8482),
                    i = r(7282),
                    s = r(543),
                    a = function(e) {
                        var t = 1 === e;
                        return function(r, a, c) {
                            for (var u, d = i(r), l = o(d), p = s(l), h = n(a, c); p-- > 0;)
                                if (h(u = l[p], p, d)) switch (e) {
                                    case 0:
                                        return u;
                                    case 1:
                                        return p
                                }
                            return t ? -1 : void 0
                        }
                    };
                e.exports = {
                    findLast: a(0),
                    findLastIndex: a(1)
                }
            },
            6364: (e, t, r) => {
                "use strict";
                var n = r(9731),
                    o = r(6002),
                    i = r(4862),
                    s = r(3929),
                    a = r(380).f,
                    c = r(6668),
                    u = r(1548),
                    d = r(8404),
                    l = r(9760),
                    p = r(8505),
                    h = r(2690),
                    f = r(1399),
                    m = r(4192),
                    v = "DOMException",
                    g = i("Error"),
                    y = i(v),
                    b = function() {
                        u(this, w);
                        var e = arguments.length,
                            t = l(e < 1 ? void 0 : arguments[0]),
                            r = l(e < 2 ? void 0 : arguments[1], "Error"),
                            n = new y(t, r),
                            o = new g(t);
                        return o.name = v, a(n, "stack", s(1, h(o.stack, 1))), d(n, this, b), n
                    },
                    w = b.prototype = y.prototype,
                    _ = "stack" in new g(v),
                    I = "stack" in new y(1, 2),
                    x = y && f && Object.getOwnPropertyDescriptor(o, v),
                    E = !(!x || x.writable && x.configurable),
                    k = _ && !E && !I;
                n({
                    global: !0,
                    constructor: !0,
                    forced: m || k
                }, {
                    DOMException: k ? b : y
                });
                var S = i(v),
                    C = S.prototype;
                if (C.constructor !== S)
                    for (var T in m || a(C, "constructor", s(1, S)), p)
                        if (c(p, T)) {
                            var A = p[T],
                                P = A.s;
                            c(S, P) || a(S, P, s(6, A.c))
                        }
            },
            6426: (e, t, r) => {
                "use strict";
                var n = r(1399),
                    o = r(380),
                    i = r(3929);
                e.exports = n ? function(e, t, r) {
                    return o.f(e, t, i(1, r))
                } : function(e, t, r) {
                    return e[t] = r, e
                }
            },
            6432: (e, t, r) => {
                "use strict";
                var n = r(1399),
                    o = r(5251),
                    i = r(9611),
                    s = ArrayBuffer.prototype;
                n && !("detached" in s) && o(s, "detached", {
                    configurable: !0,
                    get: function() {
                        return i(this)
                    }
                })
            },
            6456: (e, t, r) => {
                "use strict";
                r(7777)
            },
            6507: function(e, t) {
                var r, n, o;
                ! function() {
                    "use strict";
                    n = [], void 0 === (o = "function" == typeof(r = function() {
                        function e(e) {
                            return e.charAt(0).toUpperCase() + e.substring(1)
                        }

                        function t(e) {
                            return function() {
                                return this[e]
                            }
                        }
                        var r = ["isConstructor", "isEval", "isNative", "isToplevel"],
                            n = ["columnNumber", "lineNumber"],
                            o = ["fileName", "functionName", "source"],
                            i = r.concat(n, o, ["args"], ["evalOrigin"]);

                        function s(t) {
                            if (t)
                                for (var r = 0; r < i.length; r++) void 0 !== t[i[r]] && this["set" + e(i[r])](t[i[r]])
                        }
                        s.prototype = {
                            getArgs: function() {
                                return this.args
                            },
                            setArgs: function(e) {
                                if ("[object Array]" !== Object.prototype.toString.call(e)) throw new TypeError("Args must be an Array");
                                this.args = e
                            },
                            getEvalOrigin: function() {
                                return this.evalOrigin
                            },
                            setEvalOrigin: function(e) {
                                if (e instanceof s) this.evalOrigin = e;
                                else {
                                    if (!(e instanceof Object)) throw new TypeError("Eval Origin must be an Object or StackFrame");
                                    this.evalOrigin = new s(e)
                                }
                            },
                            toString: function() {
                                var e = this.getFileName() || "",
                                    t = this.getLineNumber() || "",
                                    r = this.getColumnNumber() || "",
                                    n = this.getFunctionName() || "";
                                return this.getIsEval() ? e ? "[eval] (" + e + ":" + t + ":" + r + ")" : "[eval]:" + t + ":" + r : n ? n + " (" + e + ":" + t + ":" + r + ")" : e + ":" + t + ":" + r
                            }
                        }, s.fromString = function(e) {
                            var t = e.indexOf("("),
                                r = e.lastIndexOf(")"),
                                n = e.substring(0, t),
                                o = e.substring(t + 1, r).split(","),
                                i = e.substring(r + 1);
                            if (0 === i.indexOf("@")) var a = /@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(i, ""),
                                c = a[1],
                                u = a[2],
                                d = a[3];
                            return new s({
                                functionName: n,
                                args: o || void 0,
                                fileName: c,
                                lineNumber: u || void 0,
                                columnNumber: d || void 0
                            })
                        };
                        for (var a = 0; a < r.length; a++) s.prototype["get" + e(r[a])] = t(r[a]), s.prototype["set" + e(r[a])] = function(e) {
                            return function(t) {
                                this[e] = Boolean(t)
                            }
                        }(r[a]);
                        for (var c = 0; c < n.length; c++) s.prototype["get" + e(n[c])] = t(n[c]), s.prototype["set" + e(n[c])] = function(e) {
                            return function(t) {
                                if (r = t, isNaN(parseFloat(r)) || !isFinite(r)) throw new TypeError(e + " must be a Number");
                                var r;
                                this[e] = Number(t)
                            }
                        }(n[c]);
                        for (var u = 0; u < o.length; u++) s.prototype["get" + e(o[u])] = t(o[u]), s.prototype["set" + e(o[u])] = function(e) {
                            return function(t) {
                                this[e] = String(t)
                            }
                        }(o[u]);
                        return s
                    }) ? r.apply(t, n) : r) || (e.exports = o)
                }()
            },
            6591: (e, t, r) => {
                "use strict";
                var n = r(7104),
                    o = TypeError;
                e.exports = function(e) {
                    if (n(e)) throw new o("Can't call method on " + e);
                    return e
                }
            },
            6668: (e, t, r) => {
                "use strict";
                var n = r(6947),
                    o = r(7282),
                    i = n({}.hasOwnProperty);
                e.exports = Object.hasOwn || function(e, t) {
                    return i(o(e), t)
                }
            },
            6671: (e, t, r) => {
                "use strict";
                var n = r(6947),
                    o = r(6895);
                e.exports = function(e, t, r) {
                    try {
                        return n(o(Object.getOwnPropertyDescriptor(e, t)[r]))
                    } catch (i) {}
                }
            },
            6710: (e, t, r) => {
                "use strict";
                var n = r(1399),
                    o = r(1834),
                    i = r(8590),
                    s = r(3929),
                    a = r(654),
                    c = r(3094),
                    u = r(6668),
                    d = r(1536),
                    l = Object.getOwnPropertyDescriptor;
                t.f = n ? l : function(e, t) {
                    if (e = a(e), t = c(t), d) try {
                        return l(e, t)
                    } catch (r) {}
                    if (u(e, t)) return s(!o(i.f, e, t), e[t])
                }
            },
            6718: function(e, t, r) {
                var n, o, i;
                ! function() {
                    "use strict";
                    o = [r(6507)], void 0 === (i = "function" == typeof(n = function(e) {
                        var t = /(^|@)\S+:\d+/,
                            r = /^\s*at .*(\S+:\d+|\(native\))/m,
                            n = /^(eval@)?(\[native code])?$/;
                        return {
                            parse: function(e) {
                                if (void 0 !== e.stacktrace || void 0 !== e["opera#sourceloc"]) return this.parseOpera(e);
                                if (e.stack && e.stack.match(r)) return this.parseV8OrIE(e);
                                if (e.stack) return this.parseFFOrSafari(e);
                                throw new Error("Cannot parse given Error object")
                            },
                            extractLocation: function(e) {
                                if (-1 === e.indexOf(":")) return [e];
                                var t = /(.+?)(?::(\d+))?(?::(\d+))?$/.exec(e.replace(/[()]/g, ""));
                                return [t[1], t[2] || void 0, t[3] || void 0]
                            },
                            parseV8OrIE: function(t) {
                                return t.stack.split("\n").filter(function(e) {
                                    return !!e.match(r)
                                }, this).map(function(t) {
                                    t.indexOf("(eval ") > -1 && (t = t.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(,.*$)/g, ""));
                                    var r = t.replace(/^\s+/, "").replace(/\(eval code/g, "(").replace(/^.*?\s+/, ""),
                                        n = r.match(/ (\(.+\)$)/);
                                    r = n ? r.replace(n[0], "") : r;
                                    var o = this.extractLocation(n ? n[1] : r),
                                        i = n && r || void 0,
                                        s = ["eval", "<anonymous>"].indexOf(o[0]) > -1 ? void 0 : o[0];
                                    return new e({
                                        functionName: i,
                                        fileName: s,
                                        lineNumber: o[1],
                                        columnNumber: o[2],
                                        source: t
                                    })
                                }, this)
                            },
                            parseFFOrSafari: function(t) {
                                return t.stack.split("\n").filter(function(e) {
                                    return !e.match(n)
                                }, this).map(function(t) {
                                    if (t.indexOf(" > eval") > -1 && (t = t.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1")), -1 === t.indexOf("@") && -1 === t.indexOf(":")) return new e({
                                        functionName: t
                                    });
                                    var r = /((.*".+"[^@]*)?[^@]*)(?:@)/,
                                        n = t.match(r),
                                        o = n && n[1] ? n[1] : void 0,
                                        i = this.extractLocation(t.replace(r, ""));
                                    return new e({
                                        functionName: o,
                                        fileName: i[0],
                                        lineNumber: i[1],
                                        columnNumber: i[2],
                                        source: t
                                    })
                                }, this)
                            },
                            parseOpera: function(e) {
                                return !e.stacktrace || e.message.indexOf("\n") > -1 && e.message.split("\n").length > e.stacktrace.split("\n").length ? this.parseOpera9(e) : e.stack ? this.parseOpera11(e) : this.parseOpera10(e)
                            },
                            parseOpera9: function(t) {
                                for (var r = /Line (\d+).*script (?:in )?(\S+)/i, n = t.message.split("\n"), o = [], i = 2, s = n.length; i < s; i += 2) {
                                    var a = r.exec(n[i]);
                                    a && o.push(new e({
                                        fileName: a[2],
                                        lineNumber: a[1],
                                        source: n[i]
                                    }))
                                }
                                return o
                            },
                            parseOpera10: function(t) {
                                for (var r = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i, n = t.stacktrace.split("\n"), o = [], i = 0, s = n.length; i < s; i += 2) {
                                    var a = r.exec(n[i]);
                                    a && o.push(new e({
                                        functionName: a[3] || void 0,
                                        fileName: a[2],
                                        lineNumber: a[1],
                                        source: n[i]
                                    }))
                                }
                                return o
                            },
                            parseOpera11: function(r) {
                                return r.stack.split("\n").filter(function(e) {
                                    return !!e.match(t) && !e.match(/^Error created at/)
                                }, this).map(function(t) {
                                    var r, n = t.split("@"),
                                        o = this.extractLocation(n.pop()),
                                        i = n.shift() || "",
                                        s = i.replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^)]*\)/g, "") || void 0;
                                    i.match(/\(([^)]*)\)/) && (r = i.replace(/^[^(]+\(([^)]*)\)$/, "$1"));
                                    var a = void 0 === r || "[arguments not available]" === r ? void 0 : r.split(",");
                                    return new e({
                                        functionName: s,
                                        args: a,
                                        fileName: o[0],
                                        lineNumber: o[1],
                                        columnNumber: o[2],
                                        source: t
                                    })
                                }, this)
                            }
                        }
                    }) ? n.apply(t, o) : n) || (e.exports = i)
                }()
            },
            6895: (e, t, r) => {
                "use strict";
                var n = r(4202),
                    o = r(2544),
                    i = TypeError;
                e.exports = function(e) {
                    if (n(e)) return e;
                    throw new i(o(e) + " is not a function")
                }
            },
            6947: (e, t, r) => {
                "use strict";
                var n = r(5121),
                    o = Function.prototype,
                    i = o.call,
                    s = n && o.bind.bind(i, i);
                e.exports = n ? s : function(e) {
                    return function() {
                        return i.apply(e, arguments)
                    }
                }
            },
            6999: (e, t, r) => {
                "use strict";
                var n = r(2265),
                    o = r(6895),
                    i = r(5121),
                    s = n(n.bind);
                e.exports = function(e, t) {
                    return o(e), void 0 === t ? e : i ? s(e, t) : function() {
                        return e.apply(t, arguments)
                    }
                }
            },
            7054: (e, t, r) => {
                "use strict";
                var n = r(764);
                e.exports = function(e) {
                    var t = n(e);
                    return "BigInt64Array" === t || "BigUint64Array" === t
                }
            },
            7104: e => {
                "use strict";
                e.exports = function(e) {
                    return null == e
                }
            },
            7214: e => {
                "use strict";
                e.exports = function(e, t) {
                    return {
                        value: e,
                        done: t
                    }
                }
            },
            7258: (e, t, r) => {
                "use strict";
                var n = r(4456),
                    o = r(3875),
                    i = n("keys");
                e.exports = function(e) {
                    return i[e] || (i[e] = o(e))
                }
            },
            7271: (e, t, r) => {
                "use strict";
                var n = r(8809),
                    o = r(6212).findLastIndex,
                    i = n.aTypedArray;
                (0, n.exportTypedArrayMethod)("findLastIndex", function(e) {
                    return o(i(this), e, arguments.length > 1 ? arguments[1] : void 0)
                })
            },
            7282: (e, t, r) => {
                "use strict";
                var n = r(6591),
                    o = Object;
                e.exports = function(e) {
                    return o(n(e))
                }
            },
            7477: (e, t, r) => {
                "use strict";
                var n = r(621),
                    o = String,
                    i = TypeError;
                e.exports = function(e) {
                    if (void 0 === e || n(e)) return e;
                    throw new i(o(e) + " is not an object or undefined")
                }
            },
            7636: e => {
                "use strict";
                e.exports = function(e) {
                    return {
                        iterator: e,
                        next: e.next,
                        done: !1
                    }
                }
            },
            7697: (e, t, r) => {
                "use strict";
                var n = r(9731),
                    o = r(7282),
                    i = r(543),
                    s = r(74),
                    a = r(1576);
                n({
                    target: "Array",
                    proto: !0,
                    arity: 1,
                    forced: r(4492)(function() {
                        return 4294967297 !== [].push.call({
                            length: 4294967296
                        }, 1)
                    }) || ! function() {
                        try {
                            Object.defineProperty([], "length", {
                                writable: !1
                            }).push()
                        } catch (e) {
                            return e instanceof TypeError
                        }
                    }()
                }, {
                    push: function(e) {
                        var t = o(this),
                            r = i(t),
                            n = arguments.length;
                        a(r + n);
                        for (var c = 0; c < n; c++) t[r] = arguments[c], r++;
                        return s(t, r), r
                    }
                })
            },
            7751: (e, t, r) => {
                "use strict";
                var n = r(6895),
                    o = r(7104);
                e.exports = function(e, t) {
                    var r = e[t];
                    return o(r) ? void 0 : n(r)
                }
            },
            7759: (e, t, r) => {
                "use strict";
                var n = r(6947),
                    o = n({}.toString),
                    i = n("".slice);
                e.exports = function(e) {
                    return i(o(e), 8, -1)
                }
            },
            7768: (e, t, r) => {
                "use strict";
                var n = r(764),
                    o = r(7751),
                    i = r(7104),
                    s = r(8078),
                    a = r(9544)("iterator");
                e.exports = function(e) {
                    if (!i(e)) return o(e, a) || o(e, "@@iterator") || s[n(e)]
                }
            },
            7777: (e, t, r) => {
                "use strict";
                var n = r(9731),
                    o = r(4435);
                n({
                    target: "Set",
                    proto: !0,
                    real: !0,
                    forced: !r(1381)("isSubsetOf")
                }, {
                    isSubsetOf: o
                })
            },
            7872: (e, t, r) => {
                "use strict";
                var n = r(9731),
                    o = r(1639),
                    i = r(6895),
                    s = r(960),
                    a = r(7636);
                n({
                    target: "Iterator",
                    proto: !0,
                    real: !0
                }, {
                    forEach: function(e) {
                        s(this), i(e);
                        var t = a(this),
                            r = 0;
                        o(t, function(t) {
                            e(t, r++)
                        }, {
                            IS_RECORD: !0
                        })
                    }
                })
            },
            7960: (e, t, r) => {
                "use strict";
                var n = r(9731),
                    o = r(1639),
                    i = r(6895),
                    s = r(960),
                    a = r(7636);
                n({
                    target: "Iterator",
                    proto: !0,
                    real: !0
                }, {
                    find: function(e) {
                        s(this), i(e);
                        var t = a(this),
                            r = 0;
                        return o(t, function(t, n) {
                            if (e(t, r++)) return n(t)
                        }, {
                            IS_RECORD: !0,
                            INTERRUPTED: !0
                        }).result
                    }
                })
            },
            8003: e => {
                "use strict";
                e.exports = "undefined" != typeof navigator && String(navigator.userAgent) || ""
            },
            8006: (e, t, r) => {
                "use strict";
                r(1613)
            },
            8042: (e, t, r) => {
                "use strict";
                var n = r(1834),
                    o = r(960),
                    i = r(7751);
                e.exports = function(e, t, r) {
                    var s, a;
                    o(e);
                    try {
                        if (!(s = i(e, "return"))) {
                            if ("throw" === t) throw r;
                            return r
                        }
                        s = n(s, e)
                    } catch (c) {
                        a = !0, s = c
                    }
                    if ("throw" === t) throw r;
                    if (a) throw s;
                    return o(s), r
                }
            },
            8078: e => {
                "use strict";
                e.exports = {}
            },
            8142: (e, t, r) => {
                "use strict";
                r(5527)
            },
            8144: (e, t, r) => {
                "use strict";
                var n = r(764),
                    o = String;
                e.exports = function(e) {
                    if ("Symbol" === n(e)) throw new TypeError("Cannot convert a Symbol value to a string");
                    return o(e)
                }
            },
            8220: (e, t, r) => {
                "use strict";
                var n = r(1399),
                    o = r(2661),
                    i = r(380),
                    s = r(960),
                    a = r(654),
                    c = r(4827);
                t.f = n && !o ? Object.defineProperties : function(e, t) {
                    s(e);
                    for (var r, n = a(t), o = c(t), u = o.length, d = 0; u > d;) i.f(e, r = o[d++], n[r]);
                    return e
                }
            },
            8239: (e, t, r) => {
                "use strict";
                var n = r(9731),
                    o = r(1639),
                    i = r(6895),
                    s = r(960),
                    a = r(7636);
                n({
                    target: "Iterator",
                    proto: !0,
                    real: !0
                }, {
                    some: function(e) {
                        s(this), i(e);
                        var t = a(this),
                            r = 0;
                        return o(t, function(t, n) {
                            if (e(t, r++)) return n()
                        }, {
                            IS_RECORD: !0,
                            INTERRUPTED: !0
                        }).stopped
                    }
                })
            },
            8280: e => {
                "use strict";
                e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
            },
            8404: (e, t, r) => {
                "use strict";
                var n = r(4202),
                    o = r(621),
                    i = r(3192);
                e.exports = function(e, t, r) {
                    var s, a;
                    return i && n(s = t.constructor) && s !== r && o(a = s.prototype) && a !== r.prototype && i(e, a), e
                }
            },
            8482: (e, t, r) => {
                "use strict";
                var n = r(6947),
                    o = r(4492),
                    i = r(7759),
                    s = Object,
                    a = n("".split);
                e.exports = o(function() {
                    return !s("z").propertyIsEnumerable(0)
                }) ? function(e) {
                    return "String" === i(e) ? a(e, "") : s(e)
                } : s
            },
            8505: e => {
                "use strict";
                e.exports = {
                    IndexSizeError: {
                        s: "INDEX_SIZE_ERR",
                        c: 1,
                        m: 1
                    },
                    DOMStringSizeError: {
                        s: "DOMSTRING_SIZE_ERR",
                        c: 2,
                        m: 0
                    },
                    HierarchyRequestError: {
                        s: "HIERARCHY_REQUEST_ERR",
                        c: 3,
                        m: 1
                    },
                    WrongDocumentError: {
                        s: "WRONG_DOCUMENT_ERR",
                        c: 4,
                        m: 1
                    },
                    InvalidCharacterError: {
                        s: "INVALID_CHARACTER_ERR",
                        c: 5,
                        m: 1
                    },
                    NoDataAllowedError: {
                        s: "NO_DATA_ALLOWED_ERR",
                        c: 6,
                        m: 0
                    },
                    NoModificationAllowedError: {
                        s: "NO_MODIFICATION_ALLOWED_ERR",
                        c: 7,
                        m: 1
                    },
                    NotFoundError: {
                        s: "NOT_FOUND_ERR",
                        c: 8,
                        m: 1
                    },
                    NotSupportedError: {
                        s: "NOT_SUPPORTED_ERR",
                        c: 9,
                        m: 1
                    },
                    InUseAttributeError: {
                        s: "INUSE_ATTRIBUTE_ERR",
                        c: 10,
                        m: 1
                    },
                    InvalidStateError: {
                        s: "INVALID_STATE_ERR",
                        c: 11,
                        m: 1
                    },
                    SyntaxError: {
                        s: "SYNTAX_ERR",
                        c: 12,
                        m: 1
                    },
                    InvalidModificationError: {
                        s: "INVALID_MODIFICATION_ERR",
                        c: 13,
                        m: 1
                    },
                    NamespaceError: {
                        s: "NAMESPACE_ERR",
                        c: 14,
                        m: 1
                    },
                    InvalidAccessError: {
                        s: "INVALID_ACCESS_ERR",
                        c: 15,
                        m: 1
                    },
                    ValidationError: {
                        s: "VALIDATION_ERR",
                        c: 16,
                        m: 0
                    },
                    TypeMismatchError: {
                        s: "TYPE_MISMATCH_ERR",
                        c: 17,
                        m: 1
                    },
                    SecurityError: {
                        s: "SECURITY_ERR",
                        c: 18,
                        m: 1
                    },
                    NetworkError: {
                        s: "NETWORK_ERR",
                        c: 19,
                        m: 1
                    },
                    AbortError: {
                        s: "ABORT_ERR",
                        c: 20,
                        m: 1
                    },
                    URLMismatchError: {
                        s: "URL_MISMATCH_ERR",
                        c: 21,
                        m: 1
                    },
                    QuotaExceededError: {
                        s: "QUOTA_EXCEEDED_ERR",
                        c: 22,
                        m: 1
                    },
                    TimeoutError: {
                        s: "TIMEOUT_ERR",
                        c: 23,
                        m: 1
                    },
                    InvalidNodeTypeError: {
                        s: "INVALID_NODE_TYPE_ERR",
                        c: 24,
                        m: 1
                    },
                    DataCloneError: {
                        s: "DATA_CLONE_ERR",
                        c: 25,
                        m: 1
                    }
                }
            },
            8575: (e, t, r) => {
                "use strict";
                var n = r(5833).has;
                e.exports = function(e) {
                    return n(e), e
                }
            },
            8590: (e, t) => {
                "use strict";
                var r = {}.propertyIsEnumerable,
                    n = Object.getOwnPropertyDescriptor,
                    o = n && !r.call({
                        1: 2
                    }, 1);
                t.f = o ? function(e) {
                    var t = n(this, e);
                    return !!t && t.enumerable
                } : r
            },
            8596: (e, t, r) => {
                "use strict";
                var n = r(9731),
                    o = r(1399),
                    i = r(6002),
                    s = r(4862),
                    a = r(6947),
                    c = r(1834),
                    u = r(4202),
                    d = r(621),
                    l = r(5201),
                    p = r(6668),
                    h = r(8144),
                    f = r(543),
                    m = r(1815),
                    v = r(4492),
                    g = r(4555),
                    y = r(9750),
                    b = i.JSON,
                    w = i.Number,
                    _ = i.SyntaxError,
                    I = b && b.parse,
                    x = s("Object", "keys"),
                    E = Object.getOwnPropertyDescriptor,
                    k = a("".charAt),
                    S = a("".slice),
                    C = a(/./.exec),
                    T = a([].push),
                    A = /^\d$/,
                    P = /^[1-9]$/,
                    O = /^(?:-|\d)$/,
                    R = /^[\t\n\r ]$/,
                    N = function(e, t, r, n) {
                        var o, i, s, a, u, h = e[t],
                            m = n && h === n.value,
                            v = m && "string" == typeof n.source ? {
                                source: n.source
                            } : {};
                        if (d(h)) {
                            var g = l(h),
                                y = m ? n.nodes : g ? [] : {};
                            if (g)
                                for (o = y.length, s = f(h), a = 0; a < s; a++) j(h, a, N(h, "" + a, r, a < o ? y[a] : void 0));
                            else
                                for (i = x(h), s = f(i), a = 0; a < s; a++) u = i[a], j(h, u, N(h, u, r, p(y, u) ? y[u] : void 0))
                        }
                        return c(r, e, t, h, v)
                    },
                    j = function(e, t, r) {
                        if (o) {
                            var n = E(e, t);
                            if (n && !n.configurable) return
                        }
                        void 0 === r ? delete e[t] : m(e, t, r)
                    },
                    M = function(e, t, r, n) {
                        this.value = e, this.end = t, this.source = r, this.nodes = n
                    },
                    U = function(e, t) {
                        this.source = e, this.index = t
                    };
                U.prototype = {
                    fork: function(e) {
                        return new U(this.source, e)
                    },
                    parse: function() {
                        var e = this.source,
                            t = this.skip(R, this.index),
                            r = this.fork(t),
                            n = k(e, t);
                        if (C(O, n)) return r.number();
                        switch (n) {
                            case "{":
                                return r.object();
                            case "[":
                                return r.array();
                            case '"':
                                return r.string();
                            case "t":
                                return r.keyword(!0);
                            case "f":
                                return r.keyword(!1);
                            case "n":
                                return r.keyword(null)
                        }
                        throw new _('Unexpected character: "' + n + '" at: ' + t)
                    },
                    node: function(e, t, r, n, o) {
                        return new M(t, n, e ? null : S(this.source, r, n), o)
                    },
                    object: function() {
                        for (var e = this.source, t = this.index + 1, r = !1, n = {}, o = {}; t < e.length;) {
                            if (t = this.until(['"', "}"], t), "}" === k(e, t) && !r) {
                                t++;
                                break
                            }
                            var i = this.fork(t).string(),
                                s = i.value;
                            t = i.end, t = this.until([":"], t) + 1, t = this.skip(R, t), i = this.fork(t).parse(), m(o, s, i), m(n, s, i.value), t = this.until([",", "}"], i.end);
                            var a = k(e, t);
                            if ("," === a) r = !0, t++;
                            else if ("}" === a) {
                                t++;
                                break
                            }
                        }
                        return this.node(1, n, this.index, t, o)
                    },
                    array: function() {
                        for (var e = this.source, t = this.index + 1, r = !1, n = [], o = []; t < e.length;) {
                            if (t = this.skip(R, t), "]" === k(e, t) && !r) {
                                t++;
                                break
                            }
                            var i = this.fork(t).parse();
                            if (T(o, i), T(n, i.value), t = this.until([",", "]"], i.end), "," === k(e, t)) r = !0, t++;
                            else if ("]" === k(e, t)) {
                                t++;
                                break
                            }
                        }
                        return this.node(1, n, this.index, t, o)
                    },
                    string: function() {
                        var e = this.index,
                            t = g(this.source, this.index + 1);
                        return this.node(0, t.value, e, t.end)
                    },
                    number: function() {
                        var e = this.source,
                            t = this.index,
                            r = t;
                        if ("-" === k(e, r) && r++, "0" === k(e, r)) r++;
                        else {
                            if (!C(P, k(e, r))) throw new _("Failed to parse number at: " + r);
                            r = this.skip(A, ++r)
                        }
                        if (!("." === k(e, r) && (r = this.skip(A, ++r)), "e" !== k(e, r) && "E" !== k(e, r) || (r++, "+" !== k(e, r) && "-" !== k(e, r) || r++, r !== (r = this.skip(A, r))))) throw new _("Failed to parse number's exponent value at: " + r);
                        return this.node(0, w(S(e, t, r)), t, r)
                    },
                    keyword: function(e) {
                        var t = "" + e,
                            r = this.index,
                            n = r + t.length;
                        if (S(this.source, r, n) !== t) throw new _("Failed to parse value at: " + r);
                        return this.node(0, e, r, n)
                    },
                    skip: function(e, t) {
                        for (var r = this.source; t < r.length && C(e, k(r, t)); t++);
                        return t
                    },
                    until: function(e, t) {
                        t = this.skip(R, t);
                        for (var r = k(this.source, t), n = 0; n < e.length; n++)
                            if (e[n] === r) return t;
                        throw new _('Unexpected character: "' + r + '" at: ' + t)
                    }
                };
                var D = v(function() {
                        var e, t = "9007199254740993";
                        return I(t, function(t, r, n) {
                            e = n.source
                        }), e !== t
                    }),
                    $ = y && !v(function() {
                        return 1 / I("-0 \t") != -1 / 0
                    });
                n({
                    target: "JSON",
                    stat: !0,
                    forced: D
                }, {
                    parse: function(e, t) {
                        return $ && !u(t) ? I(e) : function(e, t) {
                            e = h(e);
                            var r = new U(e, 0, ""),
                                n = r.parse(),
                                o = n.value,
                                i = r.skip(R, n.end);
                            if (i < e.length) throw new _('Unexpected extra character: "' + k(e, i) + '" after the parsed data at: ' + i);
                            return u(t) ? N({
                                "": o
                            }, "", t, n) : o
                        }(e, t)
                    }
                })
            },
            8643: (e, t, r) => {
                "use strict";
                var n = r(9731),
                    o = r(6002),
                    i = r(1548),
                    s = r(960),
                    a = r(4202),
                    c = r(9972),
                    u = r(5251),
                    d = r(1815),
                    l = r(4492),
                    p = r(6668),
                    h = r(9544),
                    f = r(3004).IteratorPrototype,
                    m = r(1399),
                    v = r(4192),
                    g = "constructor",
                    y = "Iterator",
                    b = h("toStringTag"),
                    w = TypeError,
                    _ = o[y],
                    I = v || !a(_) || _.prototype !== f || !l(function() {
                        _({})
                    }),
                    x = function() {
                        if (i(this, f), c(this) === f) throw new w("Abstract class Iterator not directly constructable")
                    },
                    E = function(e, t) {
                        m ? u(f, e, {
                            configurable: !0,
                            get: function() {
                                return t
                            },
                            set: function(t) {
                                if (s(this), this === f) throw new w("You can't redefine this property");
                                p(this, e) ? this[e] = t : d(this, e, t)
                            }
                        }) : f[e] = t
                    };
                p(f, b) || E(b, y), !I && p(f, g) && f[g] !== Object || E(g, x), x.prototype = f, n({
                    global: !0,
                    constructor: !0,
                    forced: I
                }, {
                    Iterator: x
                })
            },
            8657: (e, t, r) => {
                "use strict";
                var n = r(9731),
                    o = r(2307);
                o && n({
                    target: "ArrayBuffer",
                    proto: !0
                }, {
                    transferToFixedLength: function() {
                        return o(this, arguments.length ? arguments[0] : void 0, !1)
                    }
                })
            },
            8809: (e, t, r) => {
                "use strict";
                var n, o, i, s = r(9202),
                    a = r(1399),
                    c = r(6002),
                    u = r(4202),
                    d = r(621),
                    l = r(6668),
                    p = r(764),
                    h = r(2544),
                    f = r(6426),
                    m = r(679),
                    v = r(5251),
                    g = r(728),
                    y = r(9972),
                    b = r(3192),
                    w = r(9544),
                    _ = r(3875),
                    I = r(2820),
                    x = I.enforce,
                    E = I.get,
                    k = c.Int8Array,
                    S = k && k.prototype,
                    C = c.Uint8ClampedArray,
                    T = C && C.prototype,
                    A = k && y(k),
                    P = S && y(S),
                    O = Object.prototype,
                    R = c.TypeError,
                    N = w("toStringTag"),
                    j = _("TYPED_ARRAY_TAG"),
                    M = "TypedArrayConstructor",
                    U = s && !!b && "Opera" !== p(c.opera),
                    D = !1,
                    $ = {
                        Int8Array: 1,
                        Uint8Array: 1,
                        Uint8ClampedArray: 1,
                        Int16Array: 2,
                        Uint16Array: 2,
                        Int32Array: 4,
                        Uint32Array: 4,
                        Float32Array: 4,
                        Float64Array: 8
                    },
                    L = {
                        BigInt64Array: 8,
                        BigUint64Array: 8
                    },
                    q = function(e) {
                        var t = y(e);
                        if (d(t)) {
                            var r = E(t);
                            return r && l(r, M) ? r[M] : q(t)
                        }
                    },
                    V = function(e) {
                        if (!d(e)) return !1;
                        var t = p(e);
                        return l($, t) || l(L, t)
                    };
                for (n in $)(i = (o = c[n]) && o.prototype) ? x(i)[M] = o : U = !1;
                for (n in L)(i = (o = c[n]) && o.prototype) && (x(i)[M] = o);
                if ((!U || !u(A) || A === Function.prototype) && (A = function() {
                        throw new R("Incorrect invocation")
                    }, U))
                    for (n in $) c[n] && b(c[n], A);
                if ((!U || !P || P === O) && (P = A.prototype, U))
                    for (n in $) c[n] && b(c[n].prototype, P);
                if (U && y(T) !== P && b(T, P), a && !l(P, N))
                    for (n in D = !0, v(P, N, {
                            configurable: !0,
                            get: function() {
                                return d(this) ? this[j] : void 0
                            }
                        }), $) c[n] && f(c[n], j, n);
                e.exports = {
                    NATIVE_ARRAY_BUFFER_VIEWS: U,
                    TYPED_ARRAY_TAG: D && j,
                    aTypedArray: function(e) {
                        if (V(e)) return e;
                        throw new R("Target is not a typed array")
                    },
                    aTypedArrayConstructor: function(e) {
                        if (u(e) && (!b || g(A, e))) return e;
                        throw new R(h(e) + " is not a typed array constructor")
                    },
                    exportTypedArrayMethod: function(e, t, r, n) {
                        if (a) {
                            if (r)
                                for (var o in $) {
                                    var i = c[o];
                                    if (i && l(i.prototype, e)) try {
                                        delete i.prototype[e]
                                    } catch (s) {
                                        try {
                                            i.prototype[e] = t
                                        } catch (u) {}
                                    }
                                }
                            P[e] && !r || m(P, e, r ? t : U && S[e] || t, n)
                        }
                    },
                    exportTypedArrayStaticMethod: function(e, t, r) {
                        var n, o;
                        if (a) {
                            if (b) {
                                if (r)
                                    for (n in $)
                                        if ((o = c[n]) && l(o, e)) try {
                                            delete o[e]
                                        } catch (i) {}
                                if (A[e] && !r) return;
                                try {
                                    return m(A, e, r ? t : U && A[e] || t)
                                } catch (i) {}
                            }
                            for (n in $) !(o = c[n]) || o[e] && !r || m(o, e, t)
                        }
                    },
                    getTypedArrayConstructor: q,
                    isView: function(e) {
                        if (!d(e)) return !1;
                        var t = p(e);
                        return "DataView" === t || l($, t) || l(L, t)
                    },
                    isTypedArray: V,
                    TypedArray: A,
                    TypedArrayPrototype: P
                }
            },
            8888: (e, t, r) => {
                "use strict";
                r(977)
            },
            8963: (e, t, r) => {
                "use strict";
                var n, o, i = r(6002),
                    s = r(8003),
                    a = i.process,
                    c = i.Deno,
                    u = a && a.versions || c && c.version,
                    d = u && u.v8;
                d && (o = (n = d.split("."))[0] > 0 && n[0] < 4 ? 1 : +(n[0] + n[1])), !o && s && (!(n = s.match(/Edge\/(\d+)/)) || n[1] >= 74) && (n = s.match(/Chrome\/(\d+)/)) && (o = +n[1]), e.exports = o
            },
            9041: (e, t, r) => {
                "use strict";
                var n = r(9731),
                    o = r(352);
                n({
                    target: "Iterator",
                    proto: !0,
                    real: !0,
                    forced: r(4192)
                }, {
                    map: o
                })
            },
            9058: (e, t, r) => {
                "use strict";
                var n = r(621);
                e.exports = function(e) {
                    return n(e) || null === e
                }
            },
            9129: e => {
                "use strict";
                e.exports = "object" == typeof Deno && Deno && "object" == typeof Deno.version
            },
            9151: (e, t, r) => {
                "use strict";
                var n = r(6671),
                    o = r(5833);
                e.exports = n(o.proto, "size", "get") || function(e) {
                    return e.size
                }
            },
            9202: e => {
                "use strict";
                e.exports = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView
            },
            9335: (e, t, r) => {
                "use strict";
                var n = r(9731),
                    o = r(1834),
                    i = r(6895),
                    s = r(960),
                    a = r(7636),
                    c = r(4495),
                    u = r(3649),
                    d = r(8042),
                    l = r(4192),
                    p = u(function() {
                        for (var e, t, r = this.iterator, n = this.mapper;;) {
                            if (t = this.inner) try {
                                if (!(e = s(o(t.next, t.iterator))).done) return e.value;
                                this.inner = null
                            } catch (i) {
                                d(r, "throw", i)
                            }
                            if (e = s(o(this.next, r)), this.done = !!e.done) return;
                            try {
                                this.inner = c(n(e.value, this.counter++), !1)
                            } catch (i) {
                                d(r, "throw", i)
                            }
                        }
                    });
                n({
                    target: "Iterator",
                    proto: !0,
                    real: !0,
                    forced: l
                }, {
                    flatMap: function(e) {
                        return s(this), i(e), new p(a(this), {
                            mapper: e,
                            inner: null
                        })
                    }
                })
            },
            9411: (e, t, r) => {
                "use strict";
                var n = r(6671),
                    o = r(7759),
                    i = TypeError;
                e.exports = n(ArrayBuffer.prototype, "byteLength", "get") || function(e) {
                    if ("ArrayBuffer" !== o(e)) throw new i("ArrayBuffer expected");
                    return e.byteLength
                }
            },
            9544: (e, t, r) => {
                "use strict";
                var n = r(6002),
                    o = r(4456),
                    i = r(6668),
                    s = r(3875),
                    a = r(9750),
                    c = r(4455),
                    u = n.Symbol,
                    d = o("wks"),
                    l = c ? u.for || u : u && u.withoutSetter || s;
                e.exports = function(e) {
                    return i(d, e) || (d[e] = a && i(u, e) ? u[e] : l("Symbol." + e)), d[e]
                }
            },
            9580: (e, t, r) => {
                "use strict";
                var n = r(1834),
                    o = r(6895),
                    i = r(960),
                    s = r(2544),
                    a = r(7768),
                    c = TypeError;
                e.exports = function(e, t) {
                    var r = arguments.length < 2 ? a(e) : t;
                    if (o(r)) return i(n(r, e));
                    throw new c(s(e) + " is not iterable")
                }
            },
            9593: (e, t, r) => {
                "use strict";
                var n = r(1578),
                    o = r(1105),
                    i = RangeError;
                e.exports = function(e) {
                    if (void 0 === e) return 0;
                    var t = n(e),
                        r = o(t);
                    if (t !== r) throw new i("Wrong length or index");
                    return r
                }
            },
            9604: (e, t, r) => {
                "use strict";
                var n = r(1399),
                    o = r(6947),
                    i = r(5251),
                    s = URLSearchParams.prototype,
                    a = o(s.forEach);
                n && !("size" in s) && i(s, "size", {
                    get: function() {
                        var e = 0;
                        return a(this, function() {
                            e++
                        }), e
                    },
                    configurable: !0,
                    enumerable: !0
                })
            },
            9611: (e, t, r) => {
                "use strict";
                var n = r(6947),
                    o = r(9411),
                    i = n(ArrayBuffer.prototype.slice);
                e.exports = function(e) {
                    if (0 !== o(e)) return !1;
                    try {
                        return i(e, 0, 0), !1
                    } catch (t) {
                        return !0
                    }
                }
            },
            9612: (e, t, r) => {
                "use strict";
                r(8657)
            },
            9634: (e, t, r) => {
                "use strict";
                var n = r(6947),
                    o = r(78),
                    i = r(5833),
                    s = i.Set,
                    a = i.proto,
                    c = n(a.forEach),
                    u = n(a.keys),
                    d = u(new s).next;
                e.exports = function(e, t, r) {
                    return r ? o({
                        iterator: u(e),
                        next: d
                    }, t) : c(e, t)
                }
            },
            9639: (e, t, r) => {
                "use strict";
                var n = r(8575),
                    o = r(5833).add,
                    i = r(1249),
                    s = r(3868),
                    a = r(78);
                e.exports = function(e) {
                    var t = n(this),
                        r = s(e).getIterator(),
                        c = i(t);
                    return a(r, function(e) {
                        o(c, e)
                    }), c
                }
            },
            9641: (e, t, r) => {
                "use strict";
                var n = r(9731),
                    o = r(1639),
                    i = r(6895),
                    s = r(960),
                    a = r(7636),
                    c = TypeError;
                n({
                    target: "Iterator",
                    proto: !0,
                    real: !0
                }, {
                    reduce: function(e) {
                        s(this), i(e);
                        var t = a(this),
                            r = arguments.length < 2,
                            n = r ? void 0 : arguments[1],
                            u = 0;
                        if (o(t, function(t) {
                                r ? (r = !1, n = t) : n = e(n, t, u), u++
                            }, {
                                IS_RECORD: !0
                            }), r) throw new c("Reduce of empty iterator with no initial value");
                        return n
                    }
                })
            },
            9731: (e, t, r) => {
                "use strict";
                var n = r(6002),
                    o = r(6710).f,
                    i = r(6426),
                    s = r(679),
                    a = r(4980),
                    c = r(1995),
                    u = r(1799);
                e.exports = function(e, t) {
                    var r, d, l, p, h, f = e.target,
                        m = e.global,
                        v = e.stat;
                    if (r = m ? n : v ? n[f] || a(f, {}) : n[f] && n[f].prototype)
                        for (d in t) {
                            if (p = t[d], l = e.dontCallGetSet ? (h = o(r, d)) && h.value : r[d], !u(m ? d : f + (v ? "." : "#") + d, e.forced) && void 0 !== l) {
                                if (typeof p == typeof l) continue;
                                c(p, l)
                            }(e.sham || l && l.sham) && i(p, "sham", !0), s(r, d, p, e)
                        }
                }
            },
            9746: (e, t, r) => {
                "use strict";
                var n = r(679);
                e.exports = function(e, t, r) {
                    for (var o in t) n(e, o, t[o], r);
                    return e
                }
            },
            9750: (e, t, r) => {
                "use strict";
                var n = r(8963),
                    o = r(4492),
                    i = r(6002).String;
                e.exports = !!Object.getOwnPropertySymbols && !o(function() {
                    var e = Symbol("symbol detection");
                    return !i(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && n && n < 41
                })
            },
            9755: (e, t, r) => {
                "use strict";
                var n = r(5308),
                    o = TypeError;
                e.exports = function(e) {
                    var t = n(e, "number");
                    if ("number" == typeof t) throw new o("Can't convert number to bigint");
                    return BigInt(t)
                }
            },
            9760: (e, t, r) => {
                "use strict";
                var n = r(8144);
                e.exports = function(e, t) {
                    return void 0 === e ? arguments.length < 2 ? "" : t : n(e)
                }
            },
            9936: (e, t, r) => {
                "use strict";
                var n = r(4862);
                e.exports = n("document", "documentElement")
            },
            9972: (e, t, r) => {
                "use strict";
                var n = r(6668),
                    o = r(4202),
                    i = r(7282),
                    s = r(7258),
                    a = r(3382),
                    c = s("IE_PROTO"),
                    u = Object,
                    d = u.prototype;
                e.exports = a ? u.getPrototypeOf : function(e) {
                    var t = i(e);
                    if (n(t, c)) return t[c];
                    var r = t.constructor;
                    return o(r) && t instanceof r ? r.prototype : t instanceof u ? d : null
                }
            }
        },
        t = {};

    function r(n) {
        var o = t[n];
        if (void 0 !== o) return o.exports;
        var i = t[n] = {
            exports: {}
        };
        return e[n].call(i.exports, i, i.exports, r), i.exports
    }
    r.amdO = {}, r.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return r.d(t, {
            a: t
        }), t
    }, r.d = (e, t) => {
        for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {
            enumerable: !0,
            get: t[n]
        })
    }, r.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
        "use strict";

        function e() {
            const e = "xxxx-4xxx-xxxx-xxxxxxxxxxxx";
            let t = "";
            try {
                const r = window.crypto,
                    n = new Uint16Array(31);
                r.getRandomValues(n);
                let o = 0;
                t = e.replace(/[x]/g, e => {
                    const t = n[o];
                    if ("number" != typeof t) throw new Error(`Event ID service: Invalid random number at index "${o}".`);
                    const r = t % 16;
                    return o++, ("x" === e ? r : 3 & r | 8).toString(16)
                }).toUpperCase()
            } catch {
                t = e.replace(/[x]/g, e => {
                    const t = 16 * Math.random() | 0;
                    return ("x" === e ? t : 3 & t | 8).toString(16)
                }).toUpperCase()
            }
            return `${function(){let e=0,t=0;e=(new Date).getTime()>>>0;try{t=performance.now()>>>0}catch{t=0}return Math.abs(e+t).toString(16).toLowerCase().padStart(8,"0")}()}-${t}`
        }
        const t = ["page_viewed", "collection_viewed", "product_viewed", "search_submitted", "product_added_to_cart", "product_added_to_cart_next", "checkout_started", "checkout_completed", "payment_info_submitted", "checkout_contact_step_started", "checkout_contact_info_submitted", "checkout_address_info_submitted", "checkout_shipping_step_started", "checkout_shipping_info_submitted", "checkout_payment_step_started", "session_started"],
            n = "wpm",
            o = "trekkie",
            i = "trekkie-next",
            s = "trekkie-parity";
        let a, c;

        function u(t) {
            return `${t||"sh"}-${e()}`
        }
        r(7697), r(8643), r(5864), r(7872), r(9641), r(8239), r(8142), r(1256), r(2513), r(6456), r(663), r(1884), r(8006);
        var d = (e => (e.AdvancedDom = "advanced-dom", e.Custom = "custom", e.Dom = "dom", e.Meta = "meta", e.Standard = "standard", e))(d || {});
        const l = {
            all_events: d.Meta,
            all_standard_events: d.Meta,
            all_custom_events: d.Meta,
            all_dom_events: d.Meta,
            checkout_address_info_submitted: d.Standard,
            checkout_completed: d.Standard,
            checkout_started: d.Standard,
            payment_info_submitted: d.Standard,
            collection_viewed: d.Standard,
            checkout_contact_info_submitted: d.Standard,
            page_viewed: d.Standard,
            product_added_to_cart: d.Standard,
            product_removed_from_cart: d.Standard,
            product_viewed: d.Standard,
            search_submitted: d.Standard,
            cart_viewed: d.Standard,
            checkout_shipping_info_submitted: d.Standard,
            alert_displayed: d.Standard,
            ui_extension_errored: d.Standard,
            input_changed: d.Dom,
            input_blurred: d.Dom,
            input_focused: d.Dom,
            form_submitted: d.Dom,
            clicked: d.Dom,
            advanced_dom_mouse_moved: d.AdvancedDom,
            advanced_dom_window_resized: d.AdvancedDom,
            advanced_dom_scrolled: d.AdvancedDom,
            advanced_dom_clipboard: d.AdvancedDom,
            advanced_dom_selection_changed: d.AdvancedDom,
            advanced_dom_available: d.AdvancedDom,
            advanced_dom_changed: d.AdvancedDom,
            advanced_dom_clicked: d.AdvancedDom,
            advanced_dom_form_submitted: d.AdvancedDom,
            advanced_dom_input_changed: d.AdvancedDom,
            advanced_dom_input_blurred: d.AdvancedDom,
            advanced_dom_input_focused: d.AdvancedDom
        };

        function p(e) {
            return function(e) {
                return e in l
            }(e) ? l[e] : d.Custom
        }

        function h(e) {
            return p(e) === d.Standard
        }

        function f(e) {
            return p(e) === d.Custom
        }

        function m(e) {
            return p(e) === d.Dom
        }

        function v(e) {
            return p(e) === d.AdvancedDom
        }
        class g extends Error {
            constructor(e, t = {}) {
                super(e), this.severity = t.severity || "error", this.groupingHash = t.groupingHash ? ? ("Error" === this.name ? void 0 : this.name)
            }
        }
        var y = (e => (e.Shopify = "shopify", e.StorefrontRenderer = "storefront-renderer", e.CheckoutOne = "checkout-one", e.CheckoutOneSdk = "checkout-one-sdk", e.CheckoutOneShopApp = "checkout-one-shop-app", e.CheckoutOneNativeShopApp = "checkout-one-native-shop-app", e.CheckoutOneSdkShopApp = "checkout-one-sdk-shop-app", e.CheckoutKit = "checkout-kit", e.CheckoutKitShopApp = "checkout-kit-shop-app", e.CustomerAccount = "customer-account", e.Unknown = "unknown", e.NotAvailable = "n/a", e))(y || {}),
            b = (e => (e.App = "APP", e.Custom = "CUSTOM", e))(b || {}),
            w = (e => (e.Strict = "STRICT", e.Lax = "LAX", e.Open = "OPEN", e))(w || {}),
            _ = (e => (e.AdvancedDomEvents = "advanced_dom_events", e))(_ || {}),
            I = (e => (e.Modern = "modern", e.Legacy = "legacy", e.Bot = "bot", e.Unknown = "unknown", e.NotAvailable = "n/a", e))(I || {});
        const x = "product_added_to_cart",
            E = "Added Product",
            k = "cart_link_id";

        function S(e, t, r) {
            const {
                jQuery: n
            } = window;
            if (n && n(e).bind) {
                const o = e => {
                    e && r(e)
                };
                n(e).bind(t, o)
            } else e.addEventListener && e.addEventListener(t, r)
        }

        function C(e) {
            window.addEventListener("load", () => {
                for (const t of document.forms) e(t)
            })
        }

        function T() {
            return window.ShopifyAnalytics ? .meta || {}
        }

        function A(e, t) {
            for (const r of t.variants)
                if (String(r.id) === String(e)) return r;
            return null
        }

        function P(e, t) {
            for (const r of t) {
                const t = A(e, r);
                if (t) return {
                    product: r,
                    variant: t
                }
            }
            return {}
        }

        function O(e, t) {
            const [r] = t.productVariants ? .filter(t => t.id === e) || [];
            return r || function(e) {
                let t, r;
                const n = T();
                let o = {
                    currency: n.currency,
                    variant_id: e
                };
                if (n.products) {
                    const o = n.products;
                    ({
                        product: t,
                        variant: r
                    } = P(e, o))
                } else n.product && (t = n.product, r = A(e, t));
                return t && (o = { ...o,
                    product_id: t.id,
                    product_gid: t.gid,
                    product_vendor: t.vendor,
                    collection_title: null,
                    untranslated_product_title: t.untranslated_product_title
                }, r && (o = { ...o,
                    variant_id: e,
                    variant_price: r.price / 100,
                    product_title: r.name,
                    variant_sku: r.sku,
                    variant_title: r.public_title,
                    untranslated_variant_title: r.untranslated_variant_title
                })), {
                    id: String(o.variant_id),
                    image: {
                        src: ""
                    },
                    price: {
                        amount: o.variant_price,
                        currencyCode: o.currency
                    },
                    product: {
                        id: String(o.product_id),
                        title: o.product_title,
                        vendor: o.product_vendor,
                        type: o.product_type,
                        untranslatedTitle: o.untranslated_product_title || o.product_title,
                        url: o.url
                    },
                    sku: o.variant_sku,
                    title: o.variant_title,
                    untranslatedTitle: o.untranslated_variant_title || o.variant_title
                }
            }(e)
        }

        function R(e) {
            try {
                return e instanceof FormData ? function(e) {
                    const t = {};
                    return e.forEach((e, r) => {
                        N(r, e, t)
                    }), t
                }(e) : e instanceof URLSearchParams ? function(e) {
                    return Object.fromEntries(e.entries())
                }(e) : JSON.parse(e)
            } catch {
                return {}
            }
        }

        function N(e, t, r) {
            const [n, ...o] = e.split(".").filter(e => e);
            if (n && o.length > 0) return r[n] = r[n] || {}, void N(o.join("."), t, r[n]);
            const i = /(\w+)?\[(\d+)?\](.+)?/.exec(e);
            if (i) {
                const [e, n, o, s = ""] = i;
                if (n) return r[n] = r[n] || [], void N(e.replace(n, ""), t, r[n]);
                if (o) {
                    const e = s && "[" === s[0] ? [] : {};
                    return r[o] = r[o] || e, void N(s, t, r[o])
                }
                r.push(t)
            } else r[e] = t
        }

        function j(e) {
            let t = e.toLowerCase();
            return t = t.replace(/\/+$/, ""), t = t.replace(/\/\/+/g, "/"), t = t.split("?")[0] || t, t
        }

        function M(e) {
            if (!e) return 1;
            try {
                return JSON.parse(e).quantity || 1
            } catch {
                if (e instanceof FormData || e instanceof URLSearchParams) {
                    if (e.has("quantity")) return Number(e.get("quantity"))
                } else {
                    const t = e.split("&");
                    for (const e of t) {
                        const t = e.split("=");
                        if ("quantity" === t[0]) return Number(t[1])
                    }
                }
            }
            return 1
        }

        function U(e) {
            return null != e && "object" == typeof e && ("merchandise" in e && null != e.merchandise ? .id || "variant_id" in e && null != e.variant_id || "id" in e && null != e.id)
        }

        function D(e) {
            if (!U(e)) return null;
            if ("remote" in e && "boolean" == typeof e.remote) return e.remote;
            let t = null;
            if ("merchandise" in e ? t = e.merchandise ? .id : "variant_id" in e ? t = e.variant_id : "id" in e && (t = e.id), t) {
                const e = function(e) {
                    let t = null,
                        r = null;
                    const n = T();
                    return n.products ? ({
                        product: t,
                        variant: r
                    } = P(e, n.products)) : n.product && (r = A(e, n.product), r && (t = n.product)), r ? t ? ? null : null
                }(String(t));
                if (e && "remote" in e && "boolean" == typeof e.remote) return e.remote
            }
            return null
        }

        function $(e) {
            if (e) try {
                const {
                    pathname: t
                } = new URL(e, "https://shopify.com"), r = t.match(/\/products\/([^/]+)\/?$/) ? .[1];
                return r ? decodeURIComponent(r) : void 0
            } catch {
                return
            }
        }
        let L;

        function q(e, t) {
            const r = e.merchandise ? .product.title || void 0,
                n = e.merchandise ? .title || void 0,
                o = r && n ? `${r} - ${n}` : r || n || "",
                i = D(e.merchandise);
            return e ? {
                productId: e.merchandise ? .product ? .id,
                productHandle: t || $(e.merchandise ? .product ? .url),
                variantId: e.merchandise ? .id,
                name: o,
                sku: e.merchandise ? .sku,
                category: e.merchandise ? .product ? .type,
                brand: e.merchandise ? .product ? .vendor,
                variant: e.merchandise ? .title,
                price: e.merchandise ? .price ? .amount,
                quantity: e.quantity,
                currency: e.merchandise ? .price ? .currencyCode,
                cartToken: H(document.cookie).cart || void 0,
                remote: i
            } : {}
        }

        function V(e, t, r, n) {
            const o = q(e, r);
            window.ShopifyAnalytics && window.ShopifyAnalytics.lib && "function" == typeof window.ShopifyAnalytics.lib.track && window.ShopifyAnalytics.lib.track(E, { ...o
            }, void 0, void 0, {
                addApiSource: t,
                shopifyEmitted: !0
            })
        }

        function B(e, t, r) {
            if (L) try {
                L(q(e, r), t)
            } catch {}
        }

        function H(e) {
            const t = {};
            for (const r of e.split(/ *; */)) {
                const [e, n] = r.split("=");
                if (void 0 !== e) try {
                    t[decodeURIComponent(e)] = decodeURIComponent(n || "")
                } catch {
                    continue
                }
            }
            return t
        }

        function F(e) {
            if (!e.extensions ? .cart_changelog || "function" != typeof window.ShopifyAnalytics ? .lib ? .track) return;
            const t = function(e) {
                try {
                    return JSON.parse(atob(e))
                } catch {
                    return {}
                }
            }(e.extensions.cart_changelog);
            t.items_added && Array.isArray(t.items_added) && function(e) {
                const t = [];
                return e.forEach(e => {
                    const r = {
                        productId: e.product_id,
                        variantId: e.variant_id,
                        name: e.title,
                        sku: e.sku,
                        category: e.product_type,
                        brand: e.vendor,
                        variant: e.variant_title,
                        price: e.price,
                        quantity: e.quantity,
                        currency: window.ShopifyAnalytics.meta.currency,
                        cartToken: H(document.cookie).cart || void 0
                    };
                    t.push(r)
                }), t
            }(t.items_added).forEach(e => {
                window.ShopifyAnalytics.lib.track(E, e, void 0, void 0, {
                    addApiSource: "storefrontApi",
                    shopifyEmitted: !0
                })
            })
        }

        function z(e, t, r, n) {
            if (t.length !== r.length) throw new g("Payload body and response have different number of items");
            t.forEach((t, o) => {
                let i = 1;
                try {
                    const e = r[o] ? .quantity;
                    i = e ? Number(e) : 1
                } catch {}
                K(e, t, i, n)
            })
        }

        function W(e, t, r, n, o) {
            let i;
            if (function(e) {
                    return e && "object" == typeof e && "merchandise" in e && "cost" in e && "quantity" in e
                }(t)) i = t;
            else {
                const e = T().currency,
                    n = {
                        id: o.includes("add") ? String(t.id) : String(t.variant_id),
                        image: {
                            src: t.image
                        },
                        price: {
                            amount: t.presentment_price,
                            currencyCode: e
                        },
                        product: {
                            id: String(t.product_id),
                            title: t.product_title,
                            vendor: t.vendor,
                            type: t.product_type,
                            untranslatedTitle: t.untranslated_product_title,
                            url: t.url
                        },
                        sku: t.sku,
                        title: t.variant_title,
                        untranslatedTitle: t.untranslated_variant_title
                    };
                i = {
                    cost: {
                        totalAmount: {
                            amount: n.price.amount * r,
                            currencyCode: e
                        }
                    },
                    merchandise: n,
                    quantity: Number(r)
                }
            }
            if (Q(t, "fetch") || e(n, {
                    cartLine: i
                }), n === x) {
                const e = { ...i,
                    merchandise: { ...i.merchandise || {},
                        remote: t ? .remote ? ? null
                    }
                };
                o.includes("change") || o.includes("update") || o.includes("permalink") ? V(e, o, t ? .handle) : o.startsWith("add-") && U(t) && B(e, o, t ? .handle)
            }
        }

        function K(e, t, r, n) {
            W(e, t, r, x, n)
        }

        function Y(e, t, r) {
            const n = t.items,
                o = t.items_changelog ? .added;
            o && Array.isArray(o) && o.map(e => {
                const t = n.find(t => String(t.variant_id) === String(e.variant_id));
                return t ? {
                    variant_id: t.variant_id,
                    view_key: t.key,
                    image: t.image,
                    presentment_price: t.presentment_price,
                    product_id: t.product_id,
                    vendor: t.vendor,
                    product_type: t.product_type,
                    untranslated_product_title: t.product_title,
                    url: t.url,
                    handle: t.handle,
                    sku: t.sku,
                    product_title: t.product_title,
                    variant_title: t.variant_title,
                    untranslated_variant_title: t.variant_title,
                    quantity: e.quantity,
                    remote: t.remote
                } : null
            }).filter(e => null !== e).forEach(t => {
                K(e, t, t.quantity, r)
            })
        }

        function J(e, t, r) {
            const n = t.items_added,
                o = t.items_removed;
            n.forEach(t => {
                K(e, t, t ? .quantity, r)
            }), o.forEach(t => {
                ! function(e, t, r, n) {
                    W(e, t, r, "product_removed_from_cart", n)
                }(e, t, t ? .quantity, r)
            })
        }

        function G(e, t, r, n) {
            try {
                const o = function(e) {
                    const t = [];
                    if (e.id) t.push({
                        id: e.id,
                        quantity: Number(e.quantity) || 1
                    });
                    else if (e.items)
                        for (const r of e.items) r.id && t.push({
                            id: r.id,
                            quantity: Number(e.quantity) || 1
                        });
                    return t
                }(t);
                if (0 === o.length) return !1;
                ! function(e, t, r, n) {
                    for (const o of t) {
                        const t = o.id.toString(),
                            i = o.quantity,
                            s = O(t, r),
                            a = {
                                cost: {
                                    totalAmount: {
                                        amount: s.price.amount * i,
                                        currencyCode: s.price.currencyCode
                                    }
                                },
                                merchandise: s,
                                quantity: Number(i)
                            };
                        e(x, {
                            cartLine: a
                        }), V(a, n)
                    }
                }(e, o, r, n)
            } catch {
                return !1
            }
            return !0
        }

        function X(e) {}

        function Q(e, t) {
            if (!T().remoteProductsEnabled) return !1;
            if (!U(e)) return !0;
            const r = D(e);
            switch (t) {
                case "fetch":
                case "form":
                    return !0 === r;
                default:
                    return t
            }
        }
        const Z = /^(?:\/[a-zA-Z]+(?:-[a-zA-Z]+)?)?\/+cart\/+add(?:\.js|\.json)?\/*$/,
            ee = /^(?:\/[a-zA-Z]+(?:-[a-zA-Z]+)?)?\/+cart\/+change(?:\.js|\.json)?\/*$/,
            te = /^(?:\/[a-zA-Z]+(?:-[a-zA-Z]+)?)?\/+cart\/+update(?:\.js|\.json)?\/*$/,
            re = /^(?:\/[a-zA-Z]+(?:-[a-zA-Z]+)?)?\/api\/(\d{4}-\d{2}|unstable)\/graphql\.json(\?.*)?$/;
        class ne {
            static handleXhrOpen() {}
            static handleXhrDone(e) {
                if (!(e.xhr.status >= 400)) try {
                    const t = document.createElement("a");
                    t.href = e.url;
                    const r = t.pathname ? t.pathname : e.url;
                    t.href = e.xhr.responseURL;
                    const n = t.pathname ? t.pathname : e.xhr.responseURL;
                    let o = !1;
                    if (r.match(Z) && function(e, t) {
                            return j(e) !== j(t)
                        }(r, n)) {
                        const t = R(e.body);
                        o = G(e.publish, t, e.initData, "add-xhr-redirect")
                    }
                    if (o) return;
                    r.match(Z) ? ne.parsePayloadResponse(e, t => {
                        const r = Object.keys(t).find(e => "items" === e);
                        if (r) {
                            const n = t[r];
                            let o;
                            try {
                                o = JSON.parse(e.body).items
                            } catch {
                                o = function(e, t) {
                                    const r = new Array(t);
                                    for (let n = 0; n < t; n++) r[n] = {};
                                    for (const n of decodeURI(e).split("&")) {
                                        const [e = "", t] = n.split("="), o = e.match(/items\[(\d+)\]\[(\w+)\].*/);
                                        if (o) {
                                            const e = Number(o[1]),
                                                n = o[2];
                                            "quantity" === n ? r[e].quantity = t : "id" === n && (r[e].id = t)
                                        }
                                    }
                                    return r
                                }(e.body, n.length)
                            }
                            z(e.publish, n, o, "add-xhr-bulk")
                        } else K(e.publish, t, M(e.body), "add-xhr")
                    }) : r.match(ee) ? ne.parsePayloadResponse(e, t => {
                        J(e.publish, t, "change-xhr")
                    }) : r.match(te) ? ne.parsePayloadResponse(e, t => {
                        Y(e.publish, t, "update-xhr")
                    }) : r.match(re) && ne.parsePayloadResponse(e, e => {
                        F(e)
                    })
                } catch {}
            }
            static parseBlobToJson(e, t) {
                const r = new FileReader;
                r.addEventListener("loadend", () => {
                    t(JSON.parse(String.fromCharCode(...new Uint8Array(r.result))))
                }), r.readAsArrayBuffer(e)
            }
            static parsePayloadResponse(e, t) {
                e.xhr.response instanceof Blob ? ne.parseBlobToJson(e.xhr.response, t) : e.xhr.responseText && t(JSON.parse(e.xhr.responseText))
            }
            constructor(e, t, r, n, o, i) {
                this.xhr = e, this.url = t, this.method = r, this.body = n, this.publish = o, this.initData = i
            }
            onReadyStateChange() {
                4 === this.xhr.readyState && ne.handleXhrDone({
                    method: this.method,
                    url: this.url,
                    body: this.body,
                    xhr: this.xhr,
                    publish: this.publish,
                    initData: this.initData
                }), this.oldOnReadyStateChange && this.oldOnReadyStateChange.call(this.xhr, new Event("oldOnReadyStateChange"))
            }
        }

        function oe(e, t) {
            (function(e, t, r) {
                if (void 0 === e ? .prototype ? .open) return;
                const n = e.prototype.open,
                    o = e.prototype.send;
                Reflect.defineProperty(e.prototype, "open", {
                    value(e, t) {
                        this._url = t, this._method = e, n.apply(this, arguments)
                    }
                }), Reflect.defineProperty(e.prototype, "send", {
                    value(e) {
                        if (!(e instanceof Document)) {
                            const n = new ne(this, this._url, this._method, e || "", t, r);
                            this.addEventListener ? this.addEventListener("readystatechange", n.onReadyStateChange.bind(n), !1) : (n.oldOnReadyStateChange = this.onreadystatechange, this.onreadystatechange = n.onReadyStateChange)
                        }
                        o.call(this, e)
                    }
                })
            })(window.XMLHttpRequest, e, t),
            function(e, t, r) {
                const n = e.fetch;
                if ("function" != typeof n) return;
                const o = function(e, t, r) {
                    return function(...n) {
                        return e.apply(this, Array.prototype.slice.call(n)).then(e => {
                            if (!e.ok) return e;
                            const n = document.createElement("a");
                            n.href = e.url;
                            const o = n.pathname ? n.pathname : e.url;
                            let i, s = !1;
                            if (o.match(Z) && arguments[1] ? .body && e.redirected && (i = R(arguments[1].body), s = G(t, i, r, "add-fetch-redirect")), s) return e;
                            try {
                                if (o.match(Z)) {
                                    try {
                                        if (i = i || R(arguments[1].body), Object.keys(i).includes("items")) return function(e, t, r) {
                                            t.clone().json().then(t => {
                                                const n = r.items,
                                                    o = t.items;
                                                return z(e, o, n || [], "add-fetch-bulk"), t
                                            }).catch(X)
                                        }(t, e, i), e
                                    } catch (a) {}! function(e, t, r) {
                                        const n = M(r);
                                        t.clone().json().then(t => K(e, t, n, "add-fetch")).catch(X)
                                    }(t, e, arguments[1].body)
                                } else o.match(ee) ? function(e, t) {
                                    t.clone().json().then(t => {
                                        J(e, t, "change-fetch")
                                    }).catch(X)
                                }(t, e) : o.match(te) ? function(e, t) {
                                    t.clone().json().then(t => {
                                        Y(e, t, "update-fetch")
                                    }).catch(X)
                                }(t, e) : o.match(re) && function(e) {
                                    e.ok && e.clone().json().then(e => {
                                        F(e)
                                    }).catch(X)
                                }(e)
                            } catch {}
                            return e
                        })
                    }
                }(n, t, r);
                Reflect.defineProperty(e, "fetch", {
                    value: o
                })
            }(window, e, t), C(r => {
                const n = r.getAttribute("action");
                n && n.indexOf("/cart/add") >= 0 && S(r, "submit", r => {
                    ! function(e, t, r) {
                        const n = t || window.event;
                        if (!n || n.defaultPrevented || n.isDefaultPrevented && n.isDefaultPrevented()) return;
                        const o = n.currentTarget || n.srcElement;
                        if (o && o instanceof Element && (o.getAttribute("action") || o.getAttribute("href"))) try {
                            const t = function(e) {
                                let t;
                                const r = e.querySelector('[name="id"]') || e instanceof HTMLFormElement && e.elements.namedItem("id");
                                return r instanceof HTMLSelectElement && r.options ? t = r.options[r.selectedIndex] : (r instanceof HTMLOptionElement || r instanceof HTMLInputElement) && (t = r), t
                            }(o);
                            if (!t) return;
                            const n = t.value,
                                i = function(e) {
                                    const t = e.querySelector('[name="quantity"]');
                                    return t instanceof HTMLInputElement ? Number(t.value) : 1
                                }(o),
                                s = O(n, r),
                                a = {
                                    cost: {
                                        totalAmount: {
                                            amount: s.price.amount * i,
                                            currencyCode: s.price.currencyCode
                                        }
                                    },
                                    merchandise: s,
                                    quantity: Number(i)
                                };
                            if (B(a, "add-form"), Q(s, "form")) return;
                            e(x, {
                                cartLine: a
                            })
                        } catch {}
                    }(e, r, t)
                })
            })
        }

        function ie(e, t, {
            publishShadowTrekkieAddToCart: r
        } = {}) {
            (function(e) {
                L = e
            })(r), oe(e, t),
                function(e, t) {
                    C(r => {
                        const n = r.querySelector('[name="previous_step"]');
                        n && n instanceof HTMLInputElement && "payment_method" === n.value && S(document.body, "submit", r => {
                            ! function(e, t, r) {
                                const n = t || window.event;
                                if (!n) return;
                                const o = n.target || n.srcElement;
                                if (o && o instanceof HTMLFormElement && o.getAttribute("action") && null !== o.getAttribute("data-payment-form")) try {
                                    const t = r.checkout;
                                    if (!t) throw new g("Checkout data not found");
                                    e("payment_info_submitted", {
                                        checkout: t
                                    })
                                } catch {}
                            }(e, r, t)
                        })
                    })
                }(e, t)
        }
        class se extends TypeError {
            constructor(e) {
                super(e), this.name = "ConsentValidationError", Object.setPrototypeOf(this, se.prototype)
            }
        }
        const ae = "visitorConsentCollected",
            ce = "p",
            ue = "a",
            de = "m",
            le = "t",
            pe = "m",
            he = "a",
            fe = "p",
            me = "s";
        r(9041), r(8596), r(6364), r(7960);
        const ve = () => "undefined" == typeof window;

        function ge(e, t) {
            if (null === e) return "null";
            if (Array.isArray(e)) return `[${e.map(e=>ge(e,!0)).join(",")}]`;
            if ("object" == typeof e) {
                let r = [];
                for (const t in e) e.hasOwnProperty(t) && void 0 !== e[t] && r.push(`${t}:${ge(e[t],!0)}`);
                const n = r.join(",");
                return t ? `{${n}}` : n
            }
            return "string" == typeof e ? JSON.stringify(e) : `${e}`
        }

        function ye(e, ...t) {
            if (0 === t.length) return e;
            const r = t[0];
            return e[r] || (e[r] = {}), ye(e[r], ...t.slice(1))
        }

        function be(e) {
            try {
                return decodeURIComponent(e)
            } catch (t) {
                return ""
            }
        }

        function we() {
            if (!ve()) return window
        }
        r(5993), r(5495), r(1125), r(7271), r(1994), r(4765), r(5178), r(3481), r(8888), r(9612), r(1482), r(2796);
        const _e = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[0-9a-f]{4}-[0-9a-f]{12}$/,
            Ie = "00000000-0000-0000-5000-000000000000";

        function xe(e, t) {
            if ("string" != typeof e) return;
            if (! function(e) {
                    return !!e && _e.test(e.trim().toLowerCase())
                }(e)) return;
            const r = e.trim();
            if ("00000000-0000-0000-0000-000000000000" === r) return;
            if (r === Ie) return;
            const n = null == t || "string" == typeof t && "" === t.trim() ? NaN : Number(t);
            return Number.isFinite(n) && Date.now() > n ? void 0 : r
        }

        function Ee(e) {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, t => {
                const r = e();
                return ("x" === t ? r : 3 & r | 8).toString(16)
            })
        }

        function ke() {
            const e = "undefined" != typeof crypto ? crypto : void 0;
            if ("function" == typeof e ? .randomUUID) return e.randomUUID();
            if ("function" == typeof e ? .getRandomValues) {
                const t = e.getRandomValues(new Uint8Array(36));
                let r = 0;
                return Ee(() => t[r++] % 16)
            }
            return Ee(() => 16 * Math.random() | 0)
        }
        const Se = "_shopify_cmp";

        function Ce() {
            try {
                return document.cookie
            } catch {
                return !1
            }
        }

        function Te(e) {
            return e === encodeURIComponent(be(e))
        }

        function Ae(e, t, r, n) {
            if (!Te(n)) throw new TypeError("Cookie value is not correctly URI encoded.");
            if (!Te(e)) throw new TypeError("Cookie name is not correctly URI encoded.");
            let o = `${e}=${n}`;
            o += "; path=/", t && (o += `; domain=${t}`), o += `; expires=${new Date((new Date).getTime()+r).toUTCString()}`, document.cookie = o
        }
        const Pe = ["_shopify_y", "_shopify_s"];

        function Oe() {
            return ve() ? {} : window.Shopify ? .customerPrivacy ? .config || {}
        }
        const Re = "_cmp",
            Ne = "consentHeader";

        function je(e) {
            if (!ve()) {
                try {
                    e = decodeURIComponent(e)
                } catch {}
                try {
                    sessionStorage.setItem(Ne, e)
                } catch {}
            }
        }

        function Me(e = Re) {
            let t;
            if (t = function() {
                    try {
                        return function(e = Re) {
                            const t = performance ? .getEntriesByType ? .("navigation");
                            if (!t) return;
                            const r = t.map(t => function(e, t = Re) {
                                    if (e) return e.serverTiming ? .find(e => e.name == t) ? .description
                                }(t, e)),
                                n = r.find(e => e);
                            return n && e === Re && je(n), n
                        }(e)
                    } catch {
                        return
                    }
                }(), !t) {
                if (e !== Re) return;
                let t;
                try {
                    t = sessionStorage.getItem(Ne)
                } catch {}
                return t || void 0
            }
            try {
                t = decodeURIComponent(t)
            } catch {}
            return t
        }

        function Ue() {
            if (!ve()) {
                const e = window.Shopify ? .customerPrivacy ? .injectedConsent || Oe().injectedConsent;
                return e ? be(e) : void 0
            }
        }

        function De() {
            let e;
            if (e = ve() ? Ue() : function() {
                    const e = window.Shopify ? .customerPrivacy ? .cachedConsent;
                    return e ? be(e) : void 0
                }() || Ue() || new URLSearchParams(window.location.search).get("_cs") || function(e) {
                    const t = Ce() ? document.cookie.split("; ") : [];
                    for (let r = 0; r < t.length; r++) {
                        const [n, o] = t[r].split("=");
                        if (e === be(n)) return be(o)
                    }
                }(Se) || Me(), void 0 !== e) return qe(e)
        }

        function $e() {
            try {
                let e = De();
                if (!e) return;
                return e
            } catch {
                return
            }
        }

        function Le(e = null) {
            return null === e && (e = $e()), void 0 === e
        }

        function qe(e) {
            if ("%" == e.slice(0, 1)) try {
                e = decodeURIComponent(e)
            } catch {}
            const t = e.slice(0, 1);
            return "{" == t ? function(e) {
                let t;
                try {
                    t = JSON.parse(e)
                } catch {
                    return
                }
                if ("2.1" === t.v && t.con ? .CMP) return t
            }(e) : "3" == t ? function(e) {
                const {
                    base: t
                } = function(e) {
                    const t = e.replace(/#+$/, ""),
                        r = t.lastIndexOf("#");
                    if (r < 0) return {
                        base: t
                    };
                    const n = t.slice(0, r),
                        o = t.slice(r + 1);
                    return o.includes("}") ? {
                        base: t
                    } : {
                        base: n,
                        comment: o
                    }
                }(e), r = (e = t).slice(1).split("_"), [n, o, i, s, a] = r;
                let c, u;
                try {
                    c = r[5] ? JSON.parse(r.slice(5).join("_")) : void 0
                } catch {}
                if (a) {
                    const e = a.replace(/\*/g, "/").replace(/-/g, "+"),
                        t = atob(e);
                    let r = "";
                    for (let n = 0; n < t.length; n++) {
                        const e = t.charCodeAt(n).toString(16);
                        r += 1 === e.length ? "0" + e : e
                    }
                    u = [8, 13, 18, 23].reduce((e, t) => e.slice(0, t) + "-" + e.slice(t), r)
                }

                function d(e) {
                    const t = n.split(".")[0];
                    return t.includes(e.toLowerCase()) ? "0" : t.includes(e.toUpperCase()) ? "1" : ""
                }

                function l(e) {
                    return n.includes(e.replace("t", "s").toUpperCase())
                }
                return {
                    v: "3",
                    con: {
                        CMP: {
                            [he]: d("a"),
                            [fe]: d("p"),
                            [pe]: d("m"),
                            [me]: d("s")
                        }
                    },
                    region: o || "",
                    cus: c,
                    purposes: {
                        [ue]: l(ue),
                        [ce]: l(ce),
                        [de]: l(de),
                        [le]: l(le)
                    },
                    sale_of_data_region: "t" == s,
                    display_banner: "t" == i,
                    consent_id: u
                }
            }(e) : void 0
        }

        function Ve(e) {
            const t = $e();
            if (!t || !t.purposes) return !0;
            const r = t.purposes[e];
            return "boolean" != typeof r || r
        }

        function Be() {
            return Ve(ce)
        }

        function He() {
            return Ve(ue)
        }

        function Fe() {
            return Ve(de)
        }

        function ze() {
            return Ve(le)
        }

        function We() {
            if (!ve()) return window.Shopify ? .customerPrivacy
        }

        function Ke(e, t) {
            if (!ve()) try {
                document.dispatchEvent(new CustomEvent(e, {
                    detail: t || {}
                }))
            } catch (r) {
                console.error(`[Shopify Customer Privacy] Error in event listener for "${e}":`, r)
            }
        }
        r(3154), r(1649), r(9604), r(2341);

        function Ye(e, t) {
            const r = we();
            if (!r) return;
            const n = ye(r, "Shopify", "customerPrivacy", "cachedToken");
            if (t) {
                const r = "_shopify_s" === e ? 18e5 : 31536e6;
                n[e] = t, n[e + "_expires_at"] = Date.now() + r
            } else delete n[e], delete n[e + "_expires_at"]
        }
        const Je = "Shopify-Storefront-Consent-Management";

        function Ge(e) {
            return "" === e ? void 0 : e
        }

        function Xe(e) {
            const t = e.granular_consent;
            return {
                query: `query { consentManagement { cookies(${ge({visitorConsent:{marketing:Ge(t.marketing),analytics:Ge(t.analytics),preferences:Ge(t.preferences),saleOfData:Ge(t.sale_of_data),...t.metafields&&{metafields:t.metafields}},...t.email&&{visitorEmail:t.email},origReferrer:Ge(e.referrer),landingPage:Ge(e.landing_page)})}) { trackingConsentCookie cookieDomain landingPageCookie origReferrerCookie shopifyUnique shopifyVisit } customerAccountUrl } }`,
                variables: {}
            }
        }
        let Qe, Ze;

        function et(e, t, r, n = {}) {
            const o = Oe().consentDomain || t.granular_consent.checkoutRootDomain || window.location.host,
                i = () => function(e, t, r, n) {
                    const o = t.granular_consent;
                    let i = "",
                        s = {};
                    if (o.customerAccountRequestInfo) i = o.customerAccountRequestInfo.url, s = o.customerAccountRequestInfo.headers;
                    else {
                        const t = Oe(),
                            n = o.storefrontAccessToken || t.storefrontAccessToken;
                        i = `${/^(localhost|127\.0\.0\.1)(:|$)/.test(e)?"http:":"https:"}//${e}/api/unstable/graphql.json`;
                        const a = o.isExtensionToken ? "Shopify-Storefront-Extension-Token" : "x-shopify-storefront-access-token";
                        s = n ? {
                            [a]: n
                        } : {}, r && (s = { ...s,
                            ...r()
                        })
                    }
                    const a = {
                        headers: {
                            "content-type": "application/json",
                            ...!0 === Oe().asyncConsent && new URL(i).origin === window.location.origin && {
                                [Je]: "1"
                            },
                            ...s,
                            ..."undefined" != typeof __CtaTestEnv__ && "true" === __CtaTestEnv__ ? {
                                "x-test-payload": JSON.stringify(t)
                            } : {}
                        },
                        body: JSON.stringify(Xe(t)),
                        method: "POST"
                    };
                    let c;
                    try {
                        c = fetch(i, a)
                    } catch (u) {
                        c = Promise.reject(u)
                    }
                    return c.then(e => {
                        try {
                            n ? .(e)
                        } catch {}
                        if (e.ok) return e.json(); {
                            const t = new Error("Server error");
                            throw t.cause = {
                                status: e.status
                            }, t
                        }
                    })
                }(o, t, n.getVisitorTokenHeaders, n.onResponse).then(e => {
                    const o = e ? .data ? .consentManagement;
                    if (!o) {
                        const t = (e ? .errors ? ? []).map(e => e ? .message).filter(Boolean).join("; ");
                        throw new Error(t ? `GraphQL error: ${t}` : "GraphQL response missing consentManagement")
                    }
                    const i = o.cookies.cookieDomain,
                        s = o.cookies.trackingConsentCookie,
                        a = o.cookies.shopifyUnique,
                        c = o.cookies.shopifyVisit;
                    if (!0 === Oe().asyncConsent && s && ! function(e) {
                            try {
                                return void 0 !== qe(be(e))
                            } catch {
                                return !1
                            }
                        }(s)) throw new Error("Consent response contains unreadable consent");
                    var u, d, l;
                    if (s && (u = s, ye(window, "Shopify", "customerPrivacy").cachedConsent = u, !0 !== Oe().asyncConsent && je(s)), Ye("_shopify_y", a), Ye("_shopify_s", c), !0 === Oe().asyncConsent) e.errors ? .length || !s || Le() || function() {
                        if (ve() || ! function() {
                                const e = Ce();
                                return !!e && e.split(";").some(e => Pe.includes(e.split("=")[0].trim()))
                            }()) return;
                        const e = window.location.hostname.split("."),
                            t = ["", ...e.map((t, r) => e.slice(r).join("."))];
                        for (const r of Pe)
                            for (const e of t) try {
                                Ae(r, e, -1, "")
                            } catch {}
                    }();
                    else if (t.granular_consent.headlessStorefront && ! function() {
                            const e = we();
                            return !0 === e ? .Shopify ? .customerPrivacy ? .backendConsentEnabled || !0 === Oe().asyncVisitorState
                        }()) {
                        const e = 31536e6,
                            r = t.granular_consent,
                            n = i || r.checkoutRootDomain || window.location.hostname,
                            o = r.storefrontRootDomain || i || window.location.hostname;
                        Ae(Se, n, e, s), o !== n && Ae(Se, o, e, s)
                    }
                    return !1 !== n.emitEvents && (d = t, l = {
                        [ce]: Be(),
                        [ue]: He(),
                        [de]: Fe(),
                        [le]: ze()
                    }, void 0 !== d.granular_consent && function(e) {
                        ! function() {
                            const e = We();
                            e && (e.consentStatus = "loaded")
                        }();
                        const t = e[de],
                            r = e[le],
                            n = e[ue],
                            o = e[ce];
                        !0 === t ? Ke("firstPartyMarketingConsentAccepted") : !1 === t && Ke("firstPartyMarketingConsentDeclined"), !0 === r ? Ke("thirdPartyMarketingConsentAccepted") : !1 === r && Ke("thirdPartyMarketingConsentDeclined"), !0 === n ? Ke("analyticsConsentAccepted") : !1 === n && Ke("analyticsConsentDeclined"), !0 === o ? Ke("preferencesConsentAccepted") : !1 === o && Ke("preferencesConsentDeclined");
                        const i = function(e) {
                            return {
                                marketingAllowed: e[de],
                                saleOfDataAllowed: e[le],
                                analyticsAllowed: e[ue],
                                preferencesAllowed: e[ce],
                                firstPartyMarketingAllowed: e[de],
                                thirdPartyMarketingAllowed: e[le]
                            }
                        }(e);
                        Ke(ae, i);
                        const s = [n, o, t, r];
                        s.every(e => !0 === e) && Ke("trackingConsentAccepted"), s.every(e => !1 === e) && Ke("trackingConsentDeclined")
                    }(l)), void 0 !== r && r(null, e), e
                }).catch(e => {
                    const t = "Error while setting storefront API consent: " + e.message,
                        n = e.cause ? .status,
                        o = {
                            error: t
                        };
                    if (void 0 !== n && (o.statusCode = n), void 0 === r) throw o;
                    r(o)
                });
            if (!0 !== Oe().asyncConsent) return i();
            const s = Qe = Qe ? Qe.then(i, i) : i(),
                a = () => {
                    Qe === s && (Qe = void 0)
                };
            return s.then(a, a), s
        }
        class tt {
            constructor() {
                if (this.endpoint = "https://otlp-http-production.shopifysvc.com/v1/metrics", this.serviceName = "consent-tracking-api", this.scopeName = "consent-tracking-api-opentelemetry", tt.instance) return tt.instance;
                tt.instance = this
            }
            increment(e, t = {}, r = .01) {
                if (!ve() && e) try {
                    if (!Number.isFinite(r) || r <= 0 || r > 1) return;
                    if (!He()) return;
                    if (Math.random() >= r) return;
                    const n = this.buildMetricBody(e, t);
                    if (window.location.host.endsWith("spin.dev")) return void console.log("OpenTelemetry metric from consent API:", n);
                    if ("function" != typeof fetch) return;
                    return fetch(this.endpoint, {
                        headers: {
                            accept: "*/*",
                            "content-type": "application/json; charset=utf-8"
                        },
                        body: JSON.stringify(n),
                        method: "POST",
                        mode: "cors",
                        credentials: "omit"
                    }).catch(() => {})
                } catch (n) {}
            }
            buildMetricBody(e, t) {
                const r = 1e6 * Date.now();
                return {
                    resourceMetrics: [{
                        resource: {
                            attributes: [{
                                key: "service.name",
                                value: {
                                    stringValue: this.serviceName
                                }
                            }]
                        },
                        scopeMetrics: [{
                            scope: {
                                name: this.scopeName,
                                version: "1.1.1",
                                attributes: []
                            },
                            metrics: [{
                                name: e,
                                unit: "1",
                                sum: {
                                    aggregationTemporality: 1,
                                    isMonotonic: !0,
                                    dataPoints: [{
                                        asDouble: 1,
                                        startTimeUnixNano: r,
                                        timeUnixNano: r,
                                        attributes: rt(t)
                                    }]
                                }
                            }]
                        }]
                    }]
                }
            }
        }

        function rt(e) {
            return Object.keys(e).reduce((t, r) => {
                const n = e[r];
                return null == n || t.push({
                    key: r,
                    value: nt(n)
                }), t
            }, [])
        }

        function nt(e) {
            return "string" == typeof e ? {
                stringValue: e
            } : "boolean" == typeof e ? {
                boolValue: e
            } : isFinite(e) ? Math.floor(e) === e ? {
                intValue: e
            } : {
                doubleValue: e
            } : {
                stringValue: String(e)
            }
        }

        function ot() {
            return Ze ? ? = new tt
        }
        tt.instance = void 0;
        const it = ["marketing", "analytics", "preferences", "sale_of_data"],
            st = [...it, "email", "rootDomain", "checkoutRootDomain", "storefrontRootDomain", "storefrontAccessToken", "headlessStorefront", "isExtensionToken", "metafields", "customerAccountRequestInfo"],
            at = it.map(e => `"${e}"`).join(", "),
            ct = "https://shopify.dev/docs/api/customer-privacy";

        function ut() {
            try {
                if ("" === document.referrer) return !0;
                const e = document.createElement("a");
                return e.href = document.referrer, window.location.hostname != e.hostname
            } catch {
                return !0
            }
        }

        function dt() {
            return !!Le() || Fe() && He()
        }
        const lt = new Set;

        function pt(e) {
            return lt.has(e)
        }

        function ht(e, t) {
            return Boolean(e.enabledFlags ? .includes(t))
        }
        const ft = "6b3fd603",
            mt = "72f1cbdd",
            vt = "b13923a8",
            gt = "fcb309c6";

        function yt(e) {
            if (!ve()) try {
                return document.querySelector(`meta[name="${e}"]`) ? .getAttribute("content") ? .trim()
            } catch {
                return
            }
        }

        function bt(e) {
            const t = yt(e);
            if (t) try {
                const e = JSON.parse(t);
                return "string" == typeof e ? e.trim() : void 0
            } catch {
                return
            }
        }

        function wt(e) {
            return void 0 !== e && Date.now() > e
        }

        function _t(e, t) {
            const r = xe(bt(t));
            if (r && !wt(function(e) {
                    const t = bt(`${e}Expiration`);
                    if (!t) return;
                    const r = Number(t);
                    return Number.isFinite(r) ? r : void 0
                }(t))) return r;
            const n = xe(yt(e));
            return n && !wt(function(e) {
                if (!ve()) try {
                    const t = document.querySelector(`meta[name="${e}"]`) ? .getAttribute("data-expiration") ? .trim();
                    if (!t) return;
                    const r = Number(t);
                    return Number.isFinite(r) ? r : void 0
                } catch {
                    return
                }
            }(e)) ? n : void 0
        }

        function It(e, t) {
            try {
                ot().increment("consent_tracking_api_tracking_token_read", {
                    token: e,
                    source: t
                })
            } catch {}
        }

        function xt(e) {
            try {
                return performance ? .getEntriesByType("navigation")[0] ? .serverTiming ? .find(t => t.name == e) ? .description
            } catch {
                return
            }
        }
        async function Et(e) {
            try {
                if (Math.random() > .01) return;
                let t = null;
                if (e) try {
                    const r = await e.json();
                    t = Array.isArray(r ? .errors) && r.errors.length > 0
                } catch {}
                ot().increment("consent_tracking_api_persist", {
                    ok: String(!!e ? .ok),
                    status: String(e ? .status ? ? "none"),
                    graphql_errors: String(t)
                }, 1)
            } catch {}
        }

        function kt(e, t, r) {
            if (!0 === Oe().asyncConsent && "loaded" !== We() ? .consentStatus) return;
            ot().increment("consent_tracking_api_tracking_token_missing");
            const n = t ? void 0 : ke(),
                o = r ? void 0 : ke();
            return n && Ye("_shopify_y", n), o && Ye("_shopify_s", o),
                function(e, t) {
                    if (!ve()) try {
                        const n = xe(e),
                            o = xe(t);
                        if (!n && !o) return;
                        const i = function() {
                            const e = document.querySelector('[data-serialized-id="app-base-path"]');
                            if (!ve() && Boolean(we() ? .__CUSTOMER_ACCOUNT__) || e) {
                                const t = document.querySelector('[data-serialized-id="preview-mode-data"]');
                                if ("/" !== JSON.parse(e ? .textContent || "null") || !1 !== JSON.parse(t ? .textContent || "null") ? .inPreviewMode) return;
                                return new URL("/customer/api/unstable/graphql", window.location.origin).href
                            }
                            const {
                                protocol: t,
                                host: r
                            } = function() {
                                const e = Oe().consentDomain || window.location.host;
                                return {
                                    protocol: /^(localhost|127\.0\.0\.1)(:|$)/.test(e) ? "http:" : "https:",
                                    host: e
                                }
                            }();
                            return `${t}//${r}/api/unstable/graphql.json`
                        }();
                        if (!i) return;
                        const s = new URLSearchParams,
                            a = {
                                "content-type": "application/json"
                            };
                        n && (s.set("_y", n), a["X-Shopify-UniqueToken"] = n), o && (s.set("_s", o), a["X-Shopify-VisitToken"] = o);
                        const c = `${i}?${s.toString()}`;
                        let u;
                        try {
                            u = fetch(c, {
                                headers: a,
                                body: JSON.stringify({
                                    query: "query { consentManagement { cookies(visitorConsent:{}) { cookieDomain } } }",
                                    variables: {}
                                }),
                                method: "POST",
                                mode: "cors",
                                credentials: "include"
                            })
                        } catch (r) {
                            u = Promise.reject(r)
                        }
                        u.then(e => Et(e), () => Et(void 0))
                    } catch {}
                }(n, o), "_shopify_y" === e ? n : o
        }

        function St(e) {
            if (!He() && !Fe()) return;
            const t = function(e) {
                const t = we();
                if (!t) return;
                const r = t.Shopify ? .customerPrivacy ? .cachedToken ? .[e],
                    n = t.Shopify ? .customerPrivacy ? .cachedToken ? .[e + "_expires_at"];
                return !r || !n || n < (new Date).getTime() ? void 0 : xe(r)
            }(e);
            if (t) return It(e, "window_cache"), t;
            if (function() {
                    const e = we();
                    if (!e ? .ShopPay) return !1;
                    try {
                        const t = Object(e.ShopPay);
                        return Reflect.has(t, "trackingUnique") || Reflect.has(t, "trackingVisit")
                    } catch {
                        return !1
                    }
                }()) {
                const t = function(e) {
                    const t = we();
                    if (!t || !t.ShopPay) return;
                    const r = {
                        _shopify_y: "trackingUnique",
                        _shopify_s: "trackingVisit"
                    }[e];
                    return r ? xe(t.ShopPay[r]) : void 0
                }(e);
                return It(e, "shop_pay"), t
            }
            const r = "_shopify_y" === (n = e) ? _t("shopify-y", "serialized-shopifyY") : "_shopify_s" === n ? _t("shopify-s", "serialized-shopifyS") : void 0;
            var n;
            if (r) return It(e, "meta"), r;
            const o = function(e) {
                const t = e.replace("_shopify", ""),
                    r = xt(t),
                    n = Number(xt(`${t}e`));
                if (!n || Date.now() / 1e3 < n) return xe(r)
            }(e);
            if (o) return It(e, "server_timing"), o;
            const i = function(e) {
                try {
                    const t = document.cookie ? .split(";") ? .find(t => t.trim().startsWith(`${e}=`)) ? .split("=")[1] ? .trim();
                    return xe(t)
                } catch {
                    return
                }
            }(e);
            if (i) return It(e, "cookie"), i;
            It(e, "missing")
        }

        function Ct() {
            return At("_shopify_y")
        }

        function Tt() {
            return At("_shopify_s")
        }

        function At(e) {
            if (ve()) throw new Error("Token generateFallback is not supported in Node.js environments, just browsers.");
            const t = St(e);
            if (t) return t;
            if ((He() || Fe()) && ! function() {
                    const e = we();
                    return !(!e || !Reflect.has(e, "ShopPay"))
                }()) try {
                return kt(e, St("_shopify_y"), St("_shopify_s"))
            } catch {
                return
            }
        }
        class Pt {
            constructor(e) {
                this.maxSize = e, this.cache = new Map
            }
            get(e) {
                if (!this.cache.has(e)) return;
                const t = this.cache.get(e);
                return this.cache.delete(e), this.cache.set(e, t), t
            }
            has(e) {
                return this.cache.has(e)
            }
            set(e, t) {
                if (this.cache.size >= this.maxSize) {
                    const e = this.cache.keys().next().value;
                    this.cache.delete(e)
                }
                return this.cache.set(e, t), this
            }
            delete(e) {
                return this.cache.delete(e)
            }
            clear() {
                this.cache.clear()
            }
        }
        const Ot = e => "number" == typeof e ? new Pt(e) : new Map,
            Rt = (...e) => JSON.stringify(e);

        function Nt(e, {
            cache: t,
            cacheKey: r
        } = {}) {
            function n(...t) {
                const o = n.cache,
                    i = (r ? ? Rt).apply(this, t);
                if (o.has(i)) return o.get(i); {
                    const r = e(...t);
                    return o.set(i, r), r
                }
            }
            return n.cache = t ? ? Ot(), n
        }
        const jt = Nt((e = "") => {
                const t = e.indexOf("=");
                return -1 === t ? [e.trim(), void 0] : [e.slice(0, t).trim(), e.slice(t + 1).trim()]
            }, {
                cache: Ot(100),
                cacheKey: (e = "") => e
            }),
            Mt = Nt((e = "") => e.split(";").reduce((e, t) => {
                const [r, n] = jt(t);
                if (r) try {
                    e[decodeURIComponent(r)] = decodeURIComponent(n ? ? "")
                } catch {
                    e[r] = n ? ? ""
                }
                return e
            }, Object.create(null)), {
                cache: Ot(50),
                cacheKey: (e = "") => e
            }),
            Ut = "_shopify_y",
            Dt = () => {
                try {
                    return document.cookie
                } catch {
                    return
                }
            },
            $t = e => {
                try {
                    document.cookie = e
                } catch {}
            },
            Lt = e => {
                try {
                    if (e === Ut || "_shopify_s" === e) return e === Ut ? Ct() : Tt()
                } catch {}
                try {
                    const t = Dt();
                    return "string" == typeof t ? Mt(t)[e] : void 0
                } catch {
                    return
                }
            },
            qt = Symbol.for("web-pixels-manager.trekkie-shim");

        function Vt(e) {
            return "object" == typeof e && null !== e && !0 === e[qt]
        }
        const Bt = new Set(["appName", "uniqToken", "visitToken", "microSessionId", "microSessionCount", "isPersistentCookie"]),
            Ht = new Set(["ga is not defined", "Can't find variable: ga"]),
            Ft = new Set(["trekkie", "ready"]);

        function zt() {}

        function Wt(e) {
            return "object" == typeof e && null !== e
        }

        function Kt(e, t, r, n = !0) {
            return Reflect.defineProperty(e, t, {
                value: r,
                writable: !0,
                configurable: !0,
                enumerable: n
            })
        }

        function Yt() {
            return "persistent" === (Lt("_shopify_m") ? ? "persistent")
        }

        function Jt(e) {
            return Wt(e) && Vt(e.trekkie)
        }

        function Gt(e, t) {
            if ("function" == typeof e) try {
                e()
            } catch (r) {
                if (r instanceof Error && Ht.has(r.message)) return;
                t(r, {
                    context: "trekkieShim/ready"
                })
            }
        }
        const Xt = ["page", "track", "trackForm", "trackLink"];

        function Qt() {}

        function Zt({
            callback: e,
            onError: t,
            configuration: r,
            consent: n,
            createMissingStub: o = !1,
            onStubResolved: i
        }) {
            try {
                const s = window.ShopifyAnalytics ? .lib ? ? window.trekkie,
                    a = pt(vt),
                    c = a && o && null == s,
                    u = c ? function(e) {
                        const t = [];
                        for (const r of Xt) Reflect.set(t, r, Qt);
                        try {
                            Reflect.set(window, "trekkie", t)
                        } catch {}
                        if (window.trekkie === t) return t;
                        e(new Error("Failed to create the trekkie stub on window."), {
                            context: "trekkieShim/createStub"
                        })
                    }(t) : s,
                    d = a && o && ! function(e) {
                        return Wt(e) && e.trekkie === e
                    }(u);
                if (a && o && !Jt(u)) try {
                    i ? .(function(e, t) {
                        return e ? "wpm" : t ? "placeholder" : "page"
                    }(c, d))
                } catch {}
                if (a && Jt(u)) return;
                d && null != u && null == window.ShopifyAnalytics ? .lib && function(e, t) {
                    try {
                        const t = window.ShopifyAnalytics ? ? {};
                        Reflect.set(t, "lib", e), window.ShopifyAnalytics || Reflect.set(window, "ShopifyAnalytics", t)
                    } catch {}
                    window.ShopifyAnalytics ? .lib !== e && t(new Error("Failed to alias ShopifyAnalytics.lib to the stub."), {
                        context: "trekkieShim/aliasLib"
                    })
                }(u, t);
                const l = a ? function(e) {
                        const t = function(e) {
                            try {
                                return function({
                                    stub: e,
                                    configuration: t,
                                    consent: r,
                                    onError: n,
                                    awaitsSnippet: o = !1
                                }) {
                                    if (!Wt(e)) return;
                                    const i = e.trekkie;
                                    if (Vt(i)) return;
                                    if (Wt(i) && i !== e && Wt(i.defaultAttributes)) return;
                                    const s = i === e,
                                        a = {},
                                        c = e => {
                                            if (!Wt(e) || !Wt(e.Trekkie)) return;
                                            const {
                                                appName: t,
                                                defaultAttributes: r
                                            } = e.Trekkie;
                                            if (Wt(r))
                                                for (const n of Object.keys(r)) Bt.has(n) || (a[n] = r[n]);
                                            "string" == typeof t && (a.appName = t)
                                        };
                                    let u = Ie,
                                        d = 0;
                                    const l = () => {
                                        u = r.trackingTokens.getUniqueToken() || Ie, a.uniqToken = u, a.visitToken = r.trackingTokens.getVisitToken() || Ie
                                    };
                                    c(e.config);
                                    const p = {
                                        shopId: t.shopId,
                                        themeId: t.themeId,
                                        isMerchantRequest: !!t.isMerchantRequest || null
                                    };
                                    for (const y of Object.keys(p)) void 0 === a[y] && void 0 !== p[y] && (a[y] = p[y]);
                                    l(), a.microSessionId = t.pageId, a.microSessionCount = d, a.isPersistentCookie = Yt(), r.onConsentCollected(l);
                                    const h = e => Gt(e, n);
                                    let f = !1;
                                    const m = {
                                        defaultAttributes: a,
                                        get state() {
                                            return f || = r.analyticsProcessingAllowed(), f ? "initialized" : "awaiting-consent"
                                        },
                                        options: {},
                                        ready: h
                                    };
                                    Kt(m, qt, !0, !1);
                                    const v = {
                                            trekkie: m,
                                            ready: h,
                                            user: () => ({
                                                traits: () => ({
                                                    uniqToken: u
                                                })
                                            }),
                                            identify: zt,
                                            destroy: zt,
                                            handleConsentCollectedBinded: zt,
                                            addConsentCollectedListener: zt,
                                            removeConsentCollectedListener: zt,
                                            navigationInfo: {
                                                navigationType: t.navigationType,
                                                navigationApi: t.navigationApi
                                            },
                                            ...s && {
                                                integrations: [m]
                                            }
                                        },
                                        g = Object.keys(v).filter(t => o && Ft.has(t) ? !Reflect.defineProperty(e, t, {
                                            value: v[t],
                                            writable: !1,
                                            configurable: !0,
                                            enumerable: !0
                                        }) : !Kt(e, t, v[t]));
                                    return function(e, t) {
                                        const r = Object.getOwnPropertyDescriptor(e, "config");
                                        if (r && (!r.configurable || r.get)) return !1;
                                        let n = r ? .value;
                                        return Reflect.defineProperty(e, "config", {
                                            configurable: !0,
                                            enumerable: !0,
                                            get: () => n,
                                            set: e => {
                                                n = e, t(e)
                                            }
                                        })
                                    }(e, c) || g.push("config"), g.length > 0 && n(new Error(`Failed to install trekkie shim properties: ${g.join(", ")}`), {
                                        context: "trekkieShim/installProperties/define"
                                    }), {
                                        defaultAttributes: a,
                                        incrementMicroSessionCount: () => (d += 1, a.microSessionCount = d, d)
                                    }
                                }(e)
                            } catch (t) {
                                return void e.onError(t, {
                                    context: "trekkieShim/installProperties"
                                })
                            }
                        }(e);
                        return r = e.stub, n = e.onError, Array.isArray(r) && r.forEach(e => {
                            Array.isArray(e) && "ready" === e[0] && Gt(e[1], n)
                        }), t && e.awaitsSnippet && Array.isArray(e.stub) && function(e, t) {
                            const r = Array.prototype.push;
                            Reflect.defineProperty(e, "push", {
                                value: (...n) => {
                                    const o = n.filter(e => !Array.isArray(e) || "ready" !== e[0] || (Gt(e[1], t), !1));
                                    return r.apply(e, o)
                                },
                                writable: !0,
                                configurable: !0,
                                enumerable: !1
                            }) || t(new Error("Failed to install the trekkie stub push interceptor."), {
                                context: "trekkieShim/installStubPush"
                            })
                        }(e.stub, e.onError), t;
                        var r, n
                    }({
                        stub: u,
                        configuration: r,
                        consent: n,
                        onError: t,
                        awaitsSnippet: d
                    }) : void 0,
                    p = l ? t => e({ ...t,
                        microSessionCount: l.incrementMicroSessionCount()
                    }) : e,
                    h = function(e) {
                        let t = window.__TREKKIE_SHIM_QUEUE;
                        const r = null == t;
                        if (r) try {
                            window.__TREKKIE_SHIM_QUEUE = [], t = window.__TREKKIE_SHIM_QUEUE
                        } catch {}
                        if (Array.isArray(t)) return t;
                        e(new Error(`__TREKKIE_SHIM_QUEUE is ${null===t?"null":typeof t}, expected an array.`), {
                            context: r ? "trekkieShim/queueRecoveryFailed" : "trekkieShim/queueUnavailable"
                        })
                    }(t);
                if (!h) return;
                const f = ({
                    from: e,
                    method: r,
                    args: n,
                    pageContext: o
                }, i, s) => {
                    try {
                        p({
                            from: `${e} -> ${i}`,
                            method: r,
                            args: n,
                            ...void 0 !== o && {
                                pageContext: o
                            }
                        })
                    } catch (a) {
                        t(a, {
                            context: `${s}/${r}`
                        })
                    }
                };
                for (; h.length > 0;) {
                    const e = h.shift();
                    if (!e) break;
                    f(e, "wpm-replay-queue", "trekkieShim/replay")
                }
                const m = (...e) => (e.forEach(e => f(e, "wpm-replay-queue-push", "trekkieShim/push")), e.length);
                Reflect.defineProperty(h, "push", {
                    value: m,
                    writable: !0,
                    configurable: !0
                }) || t(new Error("Failed to install trekkie shim push interceptor: __TREKKIE_SHIM_QUEUE is not extensible."), {
                    context: "trekkieShim/installPush"
                }), new Promise((e, t) => {
                    const r = window.__TREKKIE_SHIM_QUEUE;
                    if (!r) return void t(new Error("__TREKKIE_SHIM_QUEUE is not defined on the window object."));
                    let n = !1;
                    const o = setTimeout(() => {
                            n || (n = !0, t(new Error("Trekkie did not become ready within 30000ms.")))
                        }, 3e4),
                        i = () => {
                            n || (n = !0, clearTimeout(o), e(window.trekkie))
                        };
                    if (r.ready) return void i();
                    let s = !1;
                    Reflect.defineProperty(r, "ready", {
                        get: () => s,
                        set(e) {
                            s = e, i()
                        },
                        configurable: !0
                    }) || i()
                }).catch(() => {})
            } catch (s) {
                t(s, {
                    context: "trekkieShim"
                })
            }
        }
        let er = function(e) {
            return e.Product = "product", e.Collection = "collection", e
        }({});
        const tr = {
            randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
        };
        let rr;
        const nr = new Uint8Array(16);

        function or() {
            if (!rr && (rr = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !rr)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
            return rr(nr)
        }
        const ir = [];
        for (let r = 0; r < 256; ++r) ir.push((r + 256).toString(16).slice(1));
        const sr = function(e, t, r) {
                if (tr.randomUUID && !t && !e) return tr.randomUUID();
                const n = (e = e || {}).random || (e.rng || or)();
                if (n[6] = 15 & n[6] | 64, n[8] = 63 & n[8] | 128, t) {
                    r = r || 0;
                    for (let e = 0; e < 16; ++e) t[r + e] = n[e];
                    return t
                }
                return function(e, t = 0) {
                    return ir[e[t + 0]] + ir[e[t + 1]] + ir[e[t + 2]] + ir[e[t + 3]] + "-" + ir[e[t + 4]] + ir[e[t + 5]] + "-" + ir[e[t + 6]] + ir[e[t + 7]] + "-" + ir[e[t + 8]] + ir[e[t + 9]] + "-" + ir[e[t + 10]] + ir[e[t + 11]] + ir[e[t + 12]] + ir[e[t + 13]] + ir[e[t + 14]] + ir[e[t + 15]]
                }(n)
            },
            ar = /\/products\/([a-z0-9]+(?:-[a-z0-9]+)*)-([a-zA-Z0-9+/=_-]+?)-([a-f0-9]{8})-remote(?:[?#/]|$)/;

        function cr(e) {
            try {
                const [t = ""] = e.split(/[?#]/, 1), r = ar.exec(t), n = r ? .[2];
                if (!n) return;
                const o = atob(n.replace(/-/g, "+").replace(/_/g, "/")).split(":");
                if (o.length < 5 || "v1" !== o[0]) return;
                const [, i, s, a] = o;
                return {
                    handle: r ? .[1] || void 0,
                    productId: i || void 0,
                    remoteShopId: s || void 0,
                    adResponseId: a || void 0
                }
            } catch {
                return
            }
        }
        const ur = /^\d{1,19}$/;

        function dr(e) {
            return void 0 !== e && function(e) {
                return ur.test(String(e))
            }(e) && !/^0+$/.test(String(e))
        }

        function lr(e) {
            const t = e.searchParams.get("variant");
            return t && t.length > 0 ? t : null
        }
        const pr = /\/products\/([^/?#]+)/,
            hr = 'predictive-search, predictive-search-component, [data-predictive-search]:not(body):not(html), .predictive-search, form[action$="/search"]',
            fr = new Set(["r", "e"]),
            mr = "search",
            vr = "recommendations";

        function gr(e) {
            const t = pr.exec(e) ? .[1];
            if (!t) return null;
            try {
                return {
                    handle: decodeURIComponent(t)
                }
            } catch {
                return {
                    handle: t
                }
            }
        }

        function yr(e) {
            const t = e.getAttribute("href") ? .trim();
            if (t) try {
                return new URL(t, e.baseURI)
            } catch {
                return
            }
        }

        function br(e) {
            if (e ? .origin !== window.location.origin) return;
            const t = e.searchParams.get("pr_rec_pid") ? .trim();
            return dr(t) ? t : void 0
        }

        function wr(e) {
            if (e ? .origin !== window.location.origin) return !1;
            const t = e.searchParams.get("_ss") ? .trim();
            return fr.has(t ? ? "")
        }

        function _r(e) {
            return e instanceof HTMLAnchorElement && wr(yr(e))
        }

        function Ir(e, t) {
            const r = function(e) {
                    if (!e ? .length) return () => null;
                    const t = new Map;
                    return r => {
                        if (0 === t.size)
                            for (const n of e) n.handle && !t.has(n.handle) && t.set(n.handle, n);
                        return t.get(r) ? ? null
                    }
                }(e),
                n = new Map,
                o = new Map;
            return (e, i = e) => {
                const s = yr(e),
                    a = s ? .pathname ? ? function(e) {
                        try {
                            return new URL(e.href).pathname
                        } catch {
                            return (e.getAttribute("href") ? ? "").trim()
                        }
                    }(e),
                    c = gr(a);
                if (!c) return null;
                const u = function(e, t) {
                        return t === er.Product && gr(window.location.pathname) ? .handle === e
                    }(c.handle, t),
                    d = !u && wr(s);
                if (function(e, t = _r(e)) {
                        return !!e.closest("header") && !t && !e.closest(hr)
                    }(e, d)) return null;
                const l = r(c.handle),
                    p = cr(a),
                    h = p ? .productId && p.remoteShopId ? p : void 0,
                    f = u ? void 0 : br(s),
                    m = h ? .productId ? ? l ? .id,
                    v = void 0 === m || m === f ? f : void 0,
                    g = function(e, t, r = function(e) {
                        return void 0 !== function(e) {
                            return e instanceof HTMLAnchorElement ? br(yr(e)) : void 0
                        }(e)
                    }(e), n = _r(e)) {
                        return r ? vr : n ? mr : e.closest("product-recommendations, [data-product-recommendations], .product-recommendations") ? vr : e.closest(hr) ? mr : function(e) {
                            return e === er.Collection ? "collection" : "searchresults" === e ? mr : "other"
                        }(t)
                    }(e, t, void 0 !== v, d),
                    y = (s ? lr(s) ? ? void 0 : void 0) ? ? l ? .variants ? .[0] ? .id,
                    b = i.getBoundingClientRect(),
                    w = {
                        width: window.innerWidth,
                        height: window.innerHeight
                    },
                    _ = `${c.handle}:${g}`,
                    I = n.get(_);
                if (I) {
                    const e = I.productId ? ? v;
                    return e !== I.productId && (I.productId = e), { ...I,
                        variantId: y,
                        rect: b,
                        viewport: w
                    }
                }
                const x = (o.get(g) ? ? 0) + 1;
                o.set(g, x);
                const E = {
                    handle: c.handle,
                    productHandle: p ? .handle ? ? c.handle,
                    productId: h ? .productId ? ? l ? .id ? ? v,
                    variantId: y,
                    remoteShopId: h ? .remoteShopId ? ? l ? .remoteShopId,
                    isCollective: l ? .isCollective,
                    adResponseId: p ? .adResponseId,
                    impressionId: sr(),
                    placement: g,
                    position: x,
                    rect: b,
                    viewport: w
                };
                return n.set(_, E), E
            }
        }

        function xr() {
            return !pt("229bb729")
        }

        function Er() {
            return !pt("add5c673")
        }

        function kr() {
            return !pt("11ef6017")
        }

        function Sr() {
            return xr() || Er() || kr()
        }
        class Cr extends g {
            constructor(e, t) {
                super(t instanceof Error ? t.message : String(t), {
                    groupingHash: e
                }), this.cause = void 0, this.name = e, this.cause = t
            }
        }

        function Tr(e, t) {
            try {
                return e()
            } catch (r) {
                return t
            }
        }
        const Ar = new Set;

        function Pr() {
            document.removeEventListener("visibilitychange", Pr);
            for (const e of Ar) e();
            Ar.clear()
        }

        function Or() {
            return new Promise(e => {
                Ar.add(e), "visible" === document.visibilityState ? (document.addEventListener("visibilitychange", Pr), requestAnimationFrame(() => setTimeout(() => {
                    Ar.delete(e), e()
                }))) : Pr()
            })
        }
        const Rr = 'a[href*="/products/"]',
            Nr = Tr(() => {
                if ("undefined" == typeof Element) return () => {};
                const e = Element.prototype.matches;
                return "function" == typeof e ? (t, r) => e.call(t, r) : () => {}
            }, () => {});

        function jr(e) {
            return Tr(() => e.nodeType === Node.ELEMENT_NODE, !1)
        }

        function Mr(e, t) {
            const r = Tr(() => Nr(e, t), void 0);
            return "boolean" == typeof r ? r : t === Rr && function(e) {
                return Tr(() => "undefined" != typeof HTMLAnchorElement && e instanceof HTMLAnchorElement && (e.getAttribute("href") ? ? "").includes("/products/"), !1)
            }(e)
        }

        function Ur(e) {
            return !(!jr(e) || !Mr(e, Rr) && null === e.querySelector(Rr))
        }

        function Dr(e) {
            let t = !1;
            const {
                onProductFound: r,
                onProductRemoved: n,
                onError: o
            } = e;

            function i(e, t) {
                if (jr(e)) {
                    Mr(e, Rr) && e instanceof HTMLAnchorElement && t(e);
                    for (const r of Array.from(e.querySelectorAll(Rr))) r instanceof HTMLAnchorElement && t(r)
                }
            }
            let s = [],
                a = [],
                c = null;
            const u = new MutationObserver(e => {
                    if (!t) try {
                        let u = !1;
                        for (const t of e) {
                            for (const e of Array.from(t.addedNodes)) Ur(e) && (s.push(e), u = !0);
                            for (const e of Array.from(t.removedNodes)) Ur(e) && (a.push(e), u = !0)
                        }
                        u && (c || (c = Or().then(() => {
                            c = null,
                                function() {
                                    if (t) return s = [], void(a = []);
                                    const e = s,
                                        c = a;
                                    s = [], a = [];
                                    for (const t of c) try {
                                        i(t, e => {
                                            e.isConnected || n(e)
                                        })
                                    } catch (u) {
                                        o ? .(new Cr("ProductScannerError", u))
                                    }
                                    for (const t of e) try {
                                        i(t, e => {
                                            e.isConnected && r(e)
                                        })
                                    } catch (u) {
                                        o ? .(new Cr("ProductScannerError", u))
                                    }
                                }()
                        })))
                    } catch (u) {
                        o ? .(new Cr("ProductScannerError", u))
                    }
                }),
                d = "function" == typeof requestIdleCallback && "function" == typeof cancelIdleCallback,
                l = d ? requestIdleCallback : requestAnimationFrame,
                p = d ? cancelIdleCallback : cancelAnimationFrame,
                h = l(() => {
                    if (!t) try {
                        i(document.documentElement, r)
                    } catch (e) {
                        o ? .(new Cr("ProductScannerError", e))
                    }
                });
            return u.observe(document.documentElement, {
                childList: !0,
                subtree: !0
            }), () => {
                t || (t = !0, p(h), u.disconnect(), s = [], a = [], c = null)
            }
        }
        class $r extends g {
            constructor() {
                super("The wait time must be above zero."), this.name = "InvalidThrottlingWaitTimeError"
            }
        }
        class Lr extends g {
            constructor() {
                super("The throttle function requires at least one of leading or trailing to be true, otherwise, its callback will never be called."), this.name = "InvalidThrottleOptionsError"
            }
        }

        function qr(e, t, r = {}) {
            return Vr(e, t, r)
        }

        function Vr(e, t, {
            leading: r = !0,
            trailing: n = !0,
            debounceMode: o = !1
        } = {}) {
            if (t <= 0) throw new $r;
            if (!r && !n) throw new Lr;
            let i, s, a, c = null,
                u = 0;

            function d() {
                u = !1 === r ? 0 : (new Date).valueOf(), c = null, i && (s = e.apply(a, i)), a = null, i = null
            }
            return Object.assign(function(...l) {
                const p = (new Date).valueOf();
                u || !1 !== r || (u = p), o && (u = p, c && (clearTimeout(c), c = null));
                const h = t - (p - u);
                return a = this, i = l, h <= 0 || h > t ? (c && (clearTimeout(c), c = null), u = p, i && (s = e.apply(a, i)), a = null, i = null) : c || !1 === n || (c = setTimeout(d, h)), s
            }, {
                cancel: function() {
                    c && (clearTimeout(c), c = null), i = null, a = null, u = 0
                }
            })
        }
        let Br;
        const Hr = () => (void 0 === Br && (Br = function() {
                let e = !1;
                try {
                    const t = {
                            get passive() {
                                return e = !0, !1
                            }
                        },
                        r = () => {};
                    self.addEventListener("test", r, t), self.removeEventListener("test", r, t)
                } catch (t) {
                    return !1
                }
                return e
            }()), Br),
            Fr = {
                capture: !0,
                passive: !0
            };

        function zr(e, t, r, n) {
            const o = n.addEventListenerOptions ? { ...Fr,
                ...n.addEventListenerOptions
            } : Fr;
            try {
                const i = function(e, {
                    sampleRate: t,
                    throttleDelay: r,
                    onError: n
                }) {
                    const o = r => {
                        Or().then(() => e(r)).catch(e => {
                            const r = /Maximum call stack size exceeded/i.test(e ? .message || "");
                            n(e, {
                                context: "listenTo/handler",
                                type: r ? "metric" : "error",
                                unhandled: !1,
                                options: {
                                    sampleRate: t ? ? .5
                                }
                            })
                        })
                    };
                    return "number" == typeof r ? qr(o, r) : o
                }(r, n);
                return e.addEventListener(t, i, Hr() ? o : o.capture), () => {
                    e.removeEventListener(t, i, Hr() ? o : o.capture)
                }
            } catch (i) {
                n.onError(i, {
                    context: "listenTo",
                    unhandled: !1
                })
            }
            return () => {}
        }

        function Wr(e, t) {
            if (!{}.hasOwnProperty.call(e, t)) throw new TypeError("attempted to use private field on non-instance");
            return e
        }
        var Kr = 0;

        function Yr(e) {
            return "__private_" + Kr++ + "_" + e
        }
        var Jr = Yr("observer"),
            Gr = Yr("watchesByElement"),
            Xr = Yr("lastEntryByElement"),
            Qr = Yr("disposed"),
            Zr = Yr("onIntersect"),
            en = Yr("armDwell"),
            tn = Yr("clearTimer"),
            rn = Yr("removeWatch");
        class nn {
            constructor() {
                if (Object.defineProperty(this, rn, {
                        value: cn
                    }), Object.defineProperty(this, tn, {
                        value: an
                    }), Object.defineProperty(this, en, {
                        value: sn
                    }), Object.defineProperty(this, Zr, {
                        value: on
                    }), Object.defineProperty(this, Jr, {
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, Gr, {
                        writable: !0,
                        value: new Map
                    }), Object.defineProperty(this, Xr, {
                        writable: !0,
                        value: new Map
                    }), Object.defineProperty(this, Qr, {
                        writable: !0,
                        value: !1
                    }), "function" != typeof IntersectionObserver) return Wr(this, Jr)[Jr] = null, void(Wr(this, Qr)[Qr] = !0);
                Wr(this, Jr)[Jr] = new IntersectionObserver(e => Wr(this, Zr)[Zr](e), {
                    threshold: .5
                })
            }
            watch(e, t) {
                if (Wr(this, Qr)[Qr]) return () => {};
                const r = { ...t,
                    el: e,
                    durationMs: t.durationMs ? ? 1e3,
                    timer: null,
                    satisfied: !1
                };
                let n = Wr(this, Gr)[Gr].get(e);
                n || (n = new Set, Wr(this, Gr)[Gr].set(e, n), Wr(this, Jr)[Jr] ? .observe(e)), n.add(r);
                const o = Wr(this, Xr)[Xr].get(e);
                return o && o.intersectionRatio >= .5 && Wr(this, en)[en](r, o), () => {
                    Wr(this, tn)[tn](r), r.satisfied || Wr(this, rn)[rn](r)
                }
            }
            dispose() {
                if (!Wr(this, Qr)[Qr]) {
                    Wr(this, Qr)[Qr] = !0;
                    for (const e of Wr(this, Gr)[Gr].values())
                        for (const t of e) Wr(this, tn)[tn](t);
                    Wr(this, Gr)[Gr].clear(), Wr(this, Xr)[Xr].clear(), Wr(this, Jr)[Jr] ? .disconnect()
                }
            }
        }

        function on(e) {
            if (!Wr(this, Qr)[Qr])
                for (const t of e) {
                    const e = Wr(this, Gr)[Gr].get(t.target);
                    if (e)
                        if (Wr(this, Xr)[Xr].set(t.target, t), t.intersectionRatio < .5)
                            for (const t of e) Wr(this, tn)[tn](t);
                        else
                            for (const r of [...e]) Wr(this, en)[en](r, t)
                }
        }

        function sn(e, t) {
            if (e.satisfied || null != e.timer) return;
            let r = !0;
            try {
                r = !e.shouldStartDwell || e.shouldStartDwell(t)
            } catch (n) {
                return e.onError ? .(new Cr("VisibilityObserverError", n)), void Wr(this, rn)[rn](e)
            }
            r ? e.timer = setTimeout(() => {
                if (e.timer = null, !e.satisfied) {
                    e.satisfied = !0;
                    try {
                        e.onSatisfied()
                    } catch (n) {
                        e.onError ? .(new Cr("VisibilityObserverError", n))
                    } finally {
                        Wr(this, rn)[rn](e)
                    }
                }
            }, e.durationMs) : Wr(this, rn)[rn](e)
        }

        function an(e) {
            null != e.timer && (clearTimeout(e.timer), e.timer = null)
        }

        function cn(e) {
            const t = Wr(this, Gr)[Gr].get(e.el);
            t && (t.delete(e), 0 === t.size && (Wr(this, Gr)[Gr].delete(e.el), Wr(this, Xr)[Xr].delete(e.el), Wr(this, Jr)[Jr] ? .unobserve(e.el)))
        }

        function un({
            context: e,
            products: t,
            onEvent: r,
            onHoverEvent: n,
            onError: o
        }) {
            try {
                const i = xr(),
                    s = Er(),
                    a = kr() && Boolean(n);
                if (!i && !s && !a) return () => {};
                const c = i || a ? new nn : null,
                    u = Ir(t, e.pageType),
                    d = new Map,
                    l = new Map;
                let p = !1;
                const h = c && i ? function({
                        visibility: e,
                        context: t,
                        emit: r,
                        onError: n
                    }) {
                        const o = new Set;
                        return {
                            track(i, s) {
                                const a = `${s.handle}:${s.placement}`;
                                return o.has(a) ? () => {} : e.watch(i, {
                                    onError: n,
                                    shouldStartDwell: e => e.boundingClientRect.width >= 10 && e.boundingClientRect.height >= 10,
                                    onSatisfied: () => {
                                        o.has(a) || (o.add(a), r({
                                            interaction: "impression",
                                            event: {
                                                pageUrl: window.location.href,
                                                pageType: t.pageType,
                                                productId: s.productId,
                                                productHandle: s.productHandle,
                                                variantId: s.variantId,
                                                remoteShopId: s.remoteShopId,
                                                isCollective: s.isCollective,
                                                adResponseId: s.adResponseId,
                                                impressionId: s.impressionId,
                                                placement: s.placement,
                                                position: s.position,
                                                rect: s.rect,
                                                collectionId: t.collectionId,
                                                totalProducts: t.totalProducts
                                            },
                                            viewport: s.viewport
                                        }))
                                    }
                                })
                            }
                        }
                    }({
                        visibility: c,
                        context: e,
                        emit: r,
                        onError: o
                    }) : null,
                    f = s ? function({
                        context: e,
                        emit: t,
                        onError: r
                    }) {
                        const n = e => {
                            r ? .(new Cr("ClickTrackerError", e))
                        };
                        return {
                            track(r, o) {
                                let i = !1;
                                const s = r => n => {
                                        n instanceof MouseEvent && !i && n.isTrusted && n.button === r && t({
                                            interaction: "click",
                                            event: {
                                                pageUrl: window.location.href,
                                                pageType: e.pageType,
                                                productId: o.productId,
                                                productHandle: o.productHandle,
                                                variantId: o.variantId,
                                                remoteShopId: o.remoteShopId,
                                                isCollective: o.isCollective,
                                                adResponseId: o.adResponseId,
                                                impressionId: o.impressionId,
                                                placement: o.placement,
                                                position: o.position,
                                                rect: o.rect,
                                                collectionId: e.collectionId,
                                                totalProducts: e.totalProducts
                                            },
                                            viewport: o.viewport
                                        })
                                    },
                                    a = [zr(r, "click", s(0), {
                                        onError: n
                                    }), zr(r, "auxclick", s(1), {
                                        onError: n
                                    })];
                                return () => {
                                    i = !0;
                                    for (const t of a) try {
                                        t()
                                    } catch (e) {
                                        n(e)
                                    }
                                }
                            }
                        }
                    }({
                        context: e,
                        emit: r,
                        onError: o
                    }) : null,
                    m = c && a && n ? function({
                        visibility: e,
                        context: t,
                        emit: r,
                        onError: n
                    }) {
                        const o = e => {
                            n ? .(new Cr("HoverTrackerError", e))
                        };
                        let i = !1;
                        const s = e => {
                                i || (i = !0, o(e))
                            },
                            a = "function" == typeof window.matchMedia ? window.matchMedia("(any-hover: none)") : null,
                            c = new Set;
                        let u = null,
                            d = null,
                            l = null,
                            p = !1;

                        function h() {
                            null != l && (clearTimeout(l), l = null)
                        }

                        function f() {
                            d && (d.cancel(), d = null)
                        }

                        function m() {
                            h(), u = null, f()
                        }

                        function v(e, t, r) {
                            const n = e => {
                                try {
                                    r(e)
                                } catch (t) {
                                    o(t)
                                }
                            };
                            try {
                                e.addEventListener(t, n, {
                                    passive: !0
                                })
                            } catch (i) {
                                s(i);
                                try {
                                    e.removeEventListener(t, n)
                                } catch (a) {
                                    s(a)
                                }
                                return
                            }
                            return () => {
                                try {
                                    e.removeEventListener(t, n)
                                } catch (i) {
                                    s(i)
                                }
                            }
                        }

                        function g(n, i) {
                            u = {
                                el: n,
                                impressionId: i.impressionId
                            }, d = {
                                el: n,
                                impressionId: i.impressionId,
                                cancel: e.watch(n, {
                                    onError: o,
                                    durationMs: 3e3,
                                    shouldStartDwell: e => e.boundingClientRect.width >= 10 && e.boundingClientRect.height >= 10,
                                    onSatisfied: () => {
                                        u ? .el === n && u.impressionId === i.impressionId && null == l && (d = null, r({
                                            event: {
                                                pageUrl: window.location.href,
                                                pageType: t.pageType,
                                                productId: i.productId,
                                                productHandle: i.productHandle,
                                                variantId: i.variantId,
                                                remoteShopId: i.remoteShopId,
                                                isCollective: i.isCollective,
                                                impressionId: i.impressionId,
                                                placement: i.placement,
                                                position: i.position,
                                                rect: i.rect,
                                                collectionId: t.collectionId,
                                                adResponseId: i.adResponseId,
                                                totalProducts: t.totalProducts
                                            },
                                            viewport: i.viewport
                                        }))
                                    }
                                })
                            }
                        }
                        const y = v(document, "visibilitychange", () => {
                            "visible" !== document.visibilityState && m()
                        });
                        return {
                            track(e, t) {
                                let r = !0;
                                if (!y) return () => {};
                                const n = v(e, "mouseenter", n => {
                                    if (n instanceof MouseEvent && !r && !p && n.isTrusted && !a ? .matches && "visible" === document.visibilityState) {
                                        if (u ? .impressionId === t.impressionId) {
                                            const r = null != l;
                                            if (h(), d ? .el === e) return;
                                            return f(), void((r || u.el !== e) && g(e, t))
                                        }
                                        h(), f(), g(e, t)
                                    }
                                });
                                if (!n) return () => {};
                                const o = v(e, "mouseleave", n => {
                                    n instanceof MouseEvent && (r || p || n.isTrusted && function(e) {
                                        const {
                                            relatedTarget: t
                                        } = e;
                                        if (t instanceof Element)
                                            for (const r of c)
                                                if (r === t || r.contains(t)) return r
                                    }(n) !== e && u ? .el === e && (f(), function(e, t) {
                                        h(), l = setTimeout(() => {
                                            l = null, u ? .el === e && u.impressionId === t && (u = null, f())
                                        }, 250)
                                    }(e, t.impressionId)))
                                });
                                return o ? (c.add(e), r = !1, () => {
                                    r = !0, c.delete(e), d ? .el === e && f(), u ? .el === e && m(), n(), o()
                                }) : (r = !0, n(), () => {})
                            },
                            dispose() {
                                p || (p = !0, c.clear(), m(), y ? .())
                            }
                        }
                    }({
                        visibility: c,
                        context: e,
                        emit: n,
                        onError: o
                    }) : null,
                    v = (e, t, r) => {
                        let n = !1;
                        return () => {
                            n || (n = !0, r.anchors.delete(e), r.anchors.size > 0 || (l.get(t) === r && l.delete(t), r.dispose()))
                        }
                    },
                    g = (e, t, r) => {
                        if (!m) return () => {};
                        const n = l.get(t);
                        if (n) return n.anchors.add(e), v(e, t, n);
                        const o = {
                            anchors: new Set([e]),
                            dispose: m.track(t, r)
                        };
                        return l.set(t, o), v(e, t, o)
                    },
                    y = Dr({
                        onProductFound: e => {
                            if (p) return;
                            const t = Tr(() => r.closest(".card-wrapper, .product-card-wrapper, .product-card, .grid__item, [data-product-card]") ? ? r.closest("[data-product-id]") ? ? r, r = e);
                            var r;
                            const n = d.get(e);
                            if (n) {
                                if (n.wrapper === t) return;
                                d.delete(e), n.dispose()
                            }
                            const i = u(e, t);
                            if (!i) return;
                            const s = [];
                            h && s.push(h.track(t, i)), f && s.push(f.track(e, i)), m && s.push(g(e, t, i)), d.set(e, {
                                wrapper: t,
                                dispose: dn(s, o)
                            })
                        },
                        onProductRemoved: e => {
                            if (p) return;
                            const t = d.get(e);
                            t && (d.delete(e), t.dispose())
                        },
                        onError: o
                    });
                return () => {
                    if (!p) {
                        p = !0, y();
                        for (const {
                                dispose: e
                            } of d.values()) e();
                        d.clear(), l.clear(), c ? .dispose(), m ? .dispose()
                    }
                }
            } catch (i) {
                return o ? .(new Cr("ProductInteractionProducerError", i)), () => {}
            }
        }

        function dn(e, t) {
            return () => {
                for (const n of e) try {
                    n()
                } catch (r) {
                    t ? .(new Cr("ProductInteractionProducerError", r))
                }
            }
        }

        function ln(e) {
            return e !== er.Product || pt("d5e4cc6b") ? e !== er.Collection || pt("b5872a1d") ? void 0 : er.Collection : er.Product
        }

        function pn(e) {
            return e.replace(/\/$/, "")
        }

        function hn(e) {
            return e.pageType === er.Product ? Boolean(e.resourceId) : e.pageType === er.Collection && (Boolean(e.resourceId) || function(e) {
                if (!e) return !1;
                try {
                    const t = pn(new URL(e).pathname);
                    return "/collections/all" === t || /^\/[a-z]{2,3}(?:-[a-z]{2,4})?\/collections\/all$/.test(t)
                } catch {
                    return !1
                }
            }(e.pageUrl))
        }
        class fn extends g {
            constructor(e, t) {
                super(t instanceof Error ? t.message : String(t), {
                    groupingHash: e
                }), this.cause = void 0, this.name = e, this.cause = t
            }
        }
        const mn = [5e3, 1e4, 3e4, 6e4];

        function vn(e) {
            return e === er.Product && !pt("22fc6a6b")
        }
        class gn extends g {
            constructor(e, t) {
                super(t instanceof Error ? t.message : String(t), {
                    groupingHash: e
                }), this.cause = void 0, this.name = e, this.cause = t
            }
        }
        const yn = ["/cart/add", "/cart/add.js"];

        function bn(e) {
            return (e instanceof HTMLInputElement || e instanceof HTMLSelectElement) && "quantity" === e.name
        }

        function wn(e) {
            const t = e.form ? .getAttribute("action");
            if (!t) return !1;
            try {
                const {
                    pathname: e
                } = new URL(t, window.location.origin);
                return yn.some(t => e.endsWith(t))
            } catch {
                return !1
            }
        }

        function _n(e) {
            return Number.isInteger(e) && e >= 1
        }

        function In(e, t) {
            const r = e.target;
            if (!bn(r)) return;
            if (!wn(r)) return;
            const n = Number(r.value);
            _n(n) ? t.scheduleEmit(r, n) : t.cancelPending()
        }

        function xn({
            publish: e,
            debounceMs: t
        }) {
            let r = !1,
                n = null;
            const o = function(e, t) {
                return Vr(e, t, {
                    leading: !1,
                    trailing: !0,
                    debounceMode: !0
                })
            }((t, r, o) => {
                t !== n && (e({
                    interaction: "quantity",
                    event: {
                        pageUrl: o,
                        quantity: t,
                        variantId: r
                    }
                }), n = t)
            }, t);

            function i() {
                o.cancel()
            }
            return {
                scheduleEmit: function(e, t) {
                    r || o(t, function(e) {
                        const t = e.form ? .querySelector('[name="id"]');
                        return t ? .value ? t.value : new URLSearchParams(window.location.search).get("variant") || void 0
                    }(e), window.location.href)
                },
                cancelPending: i,
                dispose: function() {
                    r || (r = !0, i())
                }
            }
        }

        function En(e) {
            return e.pageType === er.Product && Boolean(e.resourceId) && !pt("80a63488")
        }
        class kn extends g {
            constructor(e, t) {
                super(t instanceof Error ? t.message : String(t), {
                    groupingHash: e
                }), this.cause = void 0, this.name = e, this.cause = t
            }
        }

        function Sn({
            pageType: e,
            resourceId: t,
            pageUrl: r,
            products: n,
            emit: o,
            onError: i
        }) {
            const s = function({
                    pageType: e,
                    resourceId: t,
                    products: r
                }) {
                    if (e === er.Product) return r ? .find(e => e.id === t) ? .remoteShopId
                }({
                    pageType: e,
                    resourceId: t,
                    products: n
                }),
                a = function({
                    pageType: e,
                    resourceId: t,
                    pageUrl: r,
                    products: n
                }) {
                    if (e !== er.Product) return;
                    const o = n ? .find(e => e.id === t) ? .handle;
                    if (o) return o;
                    let i;
                    try {
                        i = new URL(r).pathname
                    } catch {
                        return
                    }
                    return cr(i) ? .handle ? ? gr(i) ? .handle
                }({
                    pageType: e,
                    resourceId: t,
                    pageUrl: r,
                    products: n
                });
            if (Sr() && un({
                    context: {
                        pageType: e,
                        collectionId: e === er.Collection ? t : void 0,
                        totalProducts: n ? .length
                    },
                    products: n,
                    onEvent: e => {
                        o("log:buyer-behavior:product-interaction", e)
                    },
                    ...kr() ? {
                        onHoverEvent: e => {
                            o("log:buyer-behavior:product-hover", e)
                        }
                    } : {},
                    onError: e => {
                        i(e, {
                            context: "features/buyer-behavior/productInteractionProducer",
                            severity: "warning",
                            unhandled: !1
                        })
                    }
                }), hn({
                    pageType: ln(e),
                    resourceId: t,
                    pageUrl: r
                })) {
                const c = function({
                        pageType: e,
                        resourceId: t,
                        pageUrl: r,
                        products: n
                    }) {
                        if (e !== er.Product) return;
                        const o = n ? .find(e => e.id === t);
                        if (!o) return;
                        const {
                            variants: i
                        } = o, s = i ? .[0] ? .id;
                        let a = null;
                        try {
                            a = lr(new URL(r))
                        } catch {}
                        return a ? Array.isArray(i) ? i.some(e => e.id === a) ? a : s : a : s
                    }({
                        pageType: e,
                        resourceId: t,
                        pageUrl: r,
                        products: n
                    }),
                    u = function({
                        pageType: e,
                        pageUrl: t
                    }) {
                        if (e === er.Product) try {
                            return cr(new URL(t).pathname) ? .adResponseId
                        } catch {
                            return
                        }
                    }({
                        pageType: e,
                        pageUrl: r
                    });
                ! function(e, {
                    onError: t
                }) {
                    let r = !1,
                        n = 0,
                        o = 0,
                        i = null;

                    function s() {
                        if (r) return;
                        a();
                        const t = mn[n];
                        if (void 0 === t) return;
                        const c = Math.max(0, t - o);
                        i = setTimeout(() => {
                            return i = null, o = r = t, n++, e({
                                event: {
                                    pageUrl: window.location.href,
                                    dwellMilliseconds: r
                                }
                            }), void(n >= mn.length ? u() : s());
                            var r
                        }, c)
                    }

                    function a() {
                        null !== i && (clearTimeout(i), i = null)
                    }
                    const c = zr(document, "visibilitychange", function() {
                        "visible" !== document.visibilityState ? (a(), o = 0) : !r && n < mn.length && s()
                    }, {
                        onError: e => {
                            t(new fn("PageDwellListenerError", e))
                        }
                    });

                    function u() {
                        r || (r = !0, a(), c())
                    }
                    "visible" === document.visibilityState && s()
                }(({
                    event: e
                }) => o("log:buyer-behavior:page-dwell", {
                    event: { ...e,
                        productHandle: a,
                        remoteShopId: s,
                        variantId: c,
                        adResponseId: u
                    }
                }), {
                    onError: e => {
                        i(e, {
                            context: "features/buyer-behavior/pageDwellListener",
                            severity: "warning",
                            unhandled: !1
                        })
                    }
                })
            }
            vn(e) && t && function(e, {
                onError: t
            }) {
                const r = e => {
                        t(new gn("ProductQuantityChangeListenerError", e))
                    },
                    n = xn({
                        publish: e,
                        debounceMs: 500
                    });
                zr(document, "input", e => In(e, n), {
                    onError: r
                }), zr(document, "change", e => In(e, n), {
                    onError: r
                }), zr(document, "quantity-selector:update", e => function(e, t) {
                    const r = e.detail ? .quantity;
                    if ("number" != typeof r || !_n(r)) return;
                    const n = bn(o = e.target) ? o : o instanceof Element ? o.querySelector('[name="quantity"]') : null;
                    var o;
                    n && wn(n) && t.scheduleEmit(n, r)
                }(e, n), {
                    onError: r
                })
            }(({
                interaction: e,
                event: t
            }) => o("log:buyer-behavior:product-quantity-change", {
                interaction: e,
                event: { ...t,
                    productHandle: a,
                    remoteShopId: s
                }
            }), {
                onError: e => {
                    i(e, {
                        context: "features/buyer-behavior/productQuantityChangeListener",
                        severity: "warning",
                        unhandled: !1
                    })
                }
            }), En({
                pageType: e,
                resourceId: t
            }) && function(e, t) {
                const r = e => {
                        t.onError(new kn("ProductVariantChangeListenerError", e))
                    },
                    n = function(e) {
                        const t = window.location.pathname;
                        let r = lr(new URL(window.location.href));
                        return function(n = window.location.href) {
                            const o = new URL(n, window.location.href);
                            if (o.pathname !== t) return;
                            const i = lr(o);
                            null !== i ? i !== r && (e({
                                event: {
                                    variantId: i,
                                    pageUrl: o.href
                                }
                            }), r = i) : r = null
                        }
                    }(e),
                    o = function() {
                        const e = window.navigation;
                        if (e && "function" == typeof e.addEventListener && "function" == typeof e.removeEventListener) return e
                    }();
                o ? function(e, t, r) {
                    let n = !1;
                    const o = e => {
                        try {
                            if (n) return;
                            if (!e.destination.sameDocument) return;
                            if ("replace" !== e.navigationType) return;
                            t(e.destination.url)
                        } catch (o) {
                            r(o)
                        }
                    };
                    e.addEventListener("navigate", o)
                }(o, n, r) : function(e, t) {
                    let r = !1;
                    const n = history.replaceState;

                    function o(o, i, s) {
                        n.call(this, o, i, s);
                        try {
                            if (r) return;
                            if (null == s) return;
                            e()
                        } catch (a) {
                            t(a)
                        }
                    }
                    history.replaceState = o
                }(n, r)
            }(({
                event: e
            }) => o("log:buyer-behavior:product-variant-change", {
                event: { ...e,
                    productHandle: a,
                    remoteShopId: s
                }
            }), {
                onError: e => {
                    i(e, {
                        context: "features/buyer-behavior/productVariantChangeListener",
                        severity: "warning",
                        unhandled: !1
                    })
                }
            })
        }
        const Cn = "webPixelsManager",
            Tn = "production",
            An = "modern",
            Pn = "8623cf63wa37add5bpb2771a08mfc45efac",
            On = "b8623cf63wa37add5bpb2771a08mfc45efacm.js",
            Rn = "1.10.3",
            Nn = "isPixelHelperSession";

        function jn() {
            return Fe()
        }

        function Mn() {
            return He()
        }

        function Un() {
            return Be()
        }

        function Dn() {
            return ze()
        }
        const $n = () => {
                let e, t;
                return {
                    promise: new Promise((...r) => {
                        [e, t] = r
                    }),
                    resolve: e,
                    reject: t
                }
            },
            Ln = Nt(e => {
                if (!e) return 0;
                let t = 5381;
                for (let r = 0; r < e.length; r++) t = Math.imul(t, 33) + e.charCodeAt(r) | 0;
                return t >>> 0
            }, {
                cacheKey: e => e
            }),
            qn = (e, t) => Math.random() <= t;

        function Vn(e) {
            return Bn(qn, e)
        }

        function Bn(e, {
            rate: t = 1
        } = {}) {
            return Hn(t), {
                includes: (r, n = t) => (n !== t && Hn(n), e(r, n))
            }
        }

        function Hn(e) {
            if (e <= 0 || e > 1) throw new g("Invalid sampling rate", {
                groupingHash: "Utilities:Sample:InvalidSamplingRate"
            })
        }
        const Fn = [/Googlebot/i, /Storebot-Google/i, /bingbot/i, /Baiduspider/i, /YandexBot/i, /DuckDuckBot/i, /Slurp/i, /facebookexternalhit/i, /Twitterbot/i, /LinkedInBot/i, /Applebot/i, /AdsBot-Google/i, /Mediapartners-Google/i, /APIs-Google/i, /bytedance/i, /PetalBot/i, /SemrushBot/i, /AhrefsBot/i, /MJ12bot/i, /DotBot/i, /Acunetix/i, /PerplexityBot/i, /Perplexity-User/i],
            zn = Nt(e => !!e && Fn.some(t => e.match(t)), {
                cacheKey: e => e ? ? "unknown",
                cache: Ot(100)
            });
        var Wn = r(1554),
            Kn = r(6718),
            Yn = r.n(Kn);
        class Jn extends Error {
            constructor(...e) {
                super(...e), this.message = "Excessive Stacktrace: May indicate infinite loop forming"
            }
        }
        const Gn = (e, t) => {
                const r = function(e) {
                    if (t = e, "string" != typeof(t ? .stack || t ? .stacktrace || t ? .["opera#sourceloc"]) || t.stack === `${t.name}: ${t.message}`) return null;
                    var t;
                    try {
                        const t = Yn().parse(e).reduce((e, t) => {
                            const r = function({
                                functionName: e,
                                lineNumber: t,
                                columnNumber: r
                            }) {
                                const n = /^global code$/i.test((o = e) || "") ? "global code" : o;
                                var o;
                                return {
                                    file: `https://cdn.shopify.com/cdn/wpm/${On}`,
                                    method: n,
                                    lineNumber: t,
                                    columnNumber: r
                                }
                            }(t);
                            try {
                                return "{}" === JSON.stringify(r) ? e : e.concat(r)
                            } catch (n) {
                                return e
                            }
                        }, []);
                        return {
                            errorClass: e ? .name,
                            message: e ? .message,
                            stacktrace: t,
                            type: "browserjs"
                        }
                    } catch (r) {
                        return null
                    }
                }(e);
                if (r) return r;
                const n = function(e, t) {
                    let r = "";
                    const n = {
                            lineNumber: "1",
                            columnNumber: "1",
                            method: t,
                            file: `https://cdn.shopify.com/cdn/wpm/${On}`
                        },
                        o = e.stackTrace || e.stack || e.description;
                    try {
                        if (o) {
                            r = e.stack.split("\n")[0];
                            const t = e.stack.match(/([0-9]+):([0-9]+)/);
                            if (t && t.length > 2 && (n.lineNumber = t[1], n.columnNumber = t[2], parseInt(n.lineNumber, 10) > 1e5)) throw new Jn
                        }
                        return {
                            errorClass: e ? .name || r,
                            message: e ? .message || r,
                            stacktrace: [n],
                            type: "browserjs"
                        }
                    } catch (i) {
                        return null
                    }
                }(e, t);
                return n || {
                    errorClass: e ? .name,
                    message: e ? .message,
                    stacktrace: [],
                    type: "browserjs"
                }
            },
            Xn = ["number", "boolean", "symbol"],
            Qn = (e, {
                context: t
            }) => {
                const r = "v1/" + (t ? `${t}/` : "");
                return null == e || Xn.includes(typeof e) || Array.isArray(e) ? `${r}UnknownError` : "string" == typeof e ? `${r}${e}` : "groupingHash" in e && "string" == typeof e.groupingHash ? `${r}${e.groupingHash}` : `${r}${"Error"!==e.name&&e.name?e.name:e.message}`
            };
        class Zn extends Error {
            constructor(...e) {
                super(...e), Error.captureStackTrace && Error.captureStackTrace(this, Zn)
            }
        }
        const eo = {
                severity: "error",
                context: "",
                unhandled: !0,
                library: "browser",
                surface: y.Unknown
            },
            to = Vn(),
            ro = function({
                sampler: e = to
            } = {}) {
                const t = {
                    metadata: {
                        shopId: -1,
                        surface: y.NotAvailable,
                        browserTarget: I.NotAvailable,
                        shopDomain: "n/a"
                    },
                    notify: (r, n) => {
                        try {
                            if ("metric" === n ? .type || !0 === r ? .metric) return;
                            const o = n ? .userAgent || self.navigator ? .userAgent;
                            if (zn(o)) return;
                            const i = n ? .options ? .sampleRate;
                            if (void 0 !== i && !e.includes(Qn(r, n ? ? {}), i)) return;
                            const s = { ...eo,
                                ...n,
                                ...t.metadata,
                                shopUrl: self.location.href
                            };
                            if (s.browserTarget === I.NotAvailable || s.browserTarget === I.Unknown || s.surface === y.NotAvailable || s.surface === y.Unknown || !no(s.shopUrl)) return void(console ? .error && console.error(r));
                            const a = function(e, t) {
                                const {
                                    userAgent: r,
                                    context: n,
                                    severity: o,
                                    unhandled: i,
                                    library: s,
                                    hashVersionSandbox: a,
                                    sandboxUrl: c,
                                    pixelId: u,
                                    pixelType: d,
                                    runtimeContext: l,
                                    shopId: p,
                                    initConfig: h,
                                    notes: f,
                                    surface: m,
                                    shopDomain: v,
                                    browserTarget: g,
                                    shopUrl: y
                                } = t, {
                                    device: b,
                                    os: w,
                                    browser: _,
                                    engine: I
                                } = function(t) {
                                    try {
                                        return new Wn.UAParser(t).getResult()
                                    } catch (e) {
                                        return {
                                            ua: "",
                                            browser: {
                                                name: "",
                                                version: "",
                                                major: ""
                                            },
                                            engine: {
                                                name: "",
                                                version: ""
                                            },
                                            os: {
                                                name: "",
                                                version: ""
                                            },
                                            device: {
                                                model: "",
                                                type: "",
                                                vendor: ""
                                            },
                                            cpu: {
                                                architecture: ""
                                            }
                                        }
                                    }
                                }(r || self.navigator ? .userAgent), x = Gn(e, n);
                                return {
                                    payload_version: 5,
                                    notifier: {
                                        name: "web-pixel-manager",
                                        version: Pn,
                                        url: "-"
                                    },
                                    events: [{
                                        exceptions: [x],
                                        context: n ? `v1/${n}` : void 0,
                                        severity: o,
                                        unhandled: i,
                                        app: {
                                            version: Pn
                                        },
                                        device: {
                                            manufacturer: b.vendor,
                                            model: b.model,
                                            osName: w.name,
                                            osVersion: w.version,
                                            browserName: _.name,
                                            browserVersion: _.version
                                        },
                                        request: {
                                            url: y,
                                            referrer: self.document ? .referrer
                                        },
                                        metaData: {
                                            app: {
                                                surface: m,
                                                library: s,
                                                build_target: An,
                                                env: Tn,
                                                hash_version_sandbox: a || "N/A",
                                                sandbox_url: c || "N/A"
                                            },
                                            device: {
                                                user_agent: r || self.navigator ? .userAgent,
                                                rendering_engine_name: I.name,
                                                rendering_engine_version: I.version,
                                                browser_target: g || "N/A",
                                                deploy_phase: Tn
                                            },
                                            request: {
                                                shop_id: p,
                                                shop_domain: v || "N/A",
                                                shop_url: y,
                                                pixel_id: u,
                                                pixel_type: d,
                                                runtime_context: l
                                            },
                                            "Additional Notes": {
                                                init_config: JSON.stringify(h),
                                                notes: f
                                            },
                                            error_source: {
                                                shop_id: p
                                            },
                                            custom: {
                                                slice_name: "signals",
                                                slice_id: "S-27053f",
                                                observe_grouping_key: Qn(e, t)
                                            }
                                        }
                                    }]
                                }
                            }(r, s);
                            fetch("https://error-analytics-production.shopifysvc.com", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                    "Bugsnag-Api-Key": "bcbc9f6762da195561967577c2d74ff8",
                                    "Bugsnag-Payload-Version": "5"
                                },
                                body: JSON.stringify(a)
                            }).catch(() => {})
                        } catch (o) {}
                    }
                };
                return t
            }(),
            no = e => {
                try {
                    const t = new URL(e);
                    return Boolean(t.protocol.startsWith("http") && t.host)
                } catch {
                    return !1
                }
            },
            oo = new Set,
            io = e => (oo.add(e), () => {
                oo.delete(e)
            });

        function so(e) {
            oo.forEach(t => {
                try {
                    t(e)
                } catch (r) {
                    ro.notify(r, {
                        context: "onConsentCollected/callEachCallback",
                        unhandled: !1
                    })
                }
            })
        }

        function ao(e) {
            so(e)
        }
        let co = !1;
        const uo = ["analytics", "preferences", "marketing", "sale_of_data"];

        function lo(e, t) {
            return e ? !t || Object.keys(e).every(r => !e[r] || t[r]) : dt()
        }

        function po(e) {
            const {
                promise: t,
                resolve: r
            } = $n(), n = {
                analytics: Mn(),
                marketing: jn(),
                preferences: Un(),
                sale_of_data: Dn()
            };
            if (lo(e, n)) return r(!0), t;
            const o = io(t => {
                const n = t.detail;
                lo(e, {
                    analytics: !0 === n ? .analyticsAllowed,
                    marketing: !0 === n ? .marketingAllowed,
                    preferences: !0 === n ? .preferencesAllowed,
                    sale_of_data: !0 === n ? .saleOfDataAllowed
                }) && (o(), r(!0))
            });
            return t
        }

        function ho(e, t) {
            if (!{}.hasOwnProperty.call(e, t)) throw new TypeError("attempted to use private field on non-instance");
            return e
        }
        var fo = 0;

        function mo(e) {
            return "__private_" + fo++ + "_" + e
        }

        function vo(e) {
            return Object.entries(e).map(([e, t]) => ({
                key: e,
                value: {
                    stringValue: String(t)
                }
            }))
        }

        function go(e) {
            if (Array.isArray(e)) return {
                arrayValue: {
                    values: e.map(e => go(e))
                }
            };
            switch (typeof e) {
                case "boolean":
                    return {
                        boolValue: Boolean(e)
                    };
                case "number":
                    return {
                        doubleValue: Number(e)
                    };
                default:
                    return {
                        stringValue: String(e)
                    }
            }
        }
        const yo = function() {
            const e = [0];
            for (let t = 0; t < 12; t++) {
                const r = Math.floor(5 * 2 ** t);
                e.push(r)
            }
            return e
        }();
        var bo = mo("exporter"),
            wo = mo("attributes"),
            _o = mo("metrics"),
            Io = mo("logs");
        class xo {
            constructor({
                exporter: e,
                attributes: t
            }) {
                Object.defineProperty(this, bo, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, wo, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, _o, {
                    writable: !0,
                    value: []
                }), Object.defineProperty(this, Io, {
                    writable: !0,
                    value: []
                }), ho(this, bo)[bo] = e, ho(this, wo)[wo] = null != t ? t : {}
            }
            addAttributes(e) {
                ho(this, wo)[wo] = { ...ho(this, wo)[wo],
                    ...e
                }
            }
            histogram({
                name: e,
                value: t,
                unit: r,
                bounds: n,
                attributes: o,
                scale: i,
                requiresKeepalive: s
            }) {
                const a = 1e6 * Date.now();
                n ? ho(this, _o)[_o].push({
                    name: e,
                    type: "histogram",
                    value: t,
                    unit: r,
                    timeUnixNano: a,
                    attributes: o,
                    bounds: n,
                    requiresKeepalive: s
                }) : ho(this, _o)[_o].push({
                    name: e,
                    type: "exponential_histogram",
                    value: t,
                    unit: r,
                    timeUnixNano: a,
                    attributes: o,
                    scale: i,
                    requiresKeepalive: s
                })
            }
            counter({
                name: e,
                value: t,
                unit: r,
                attributes: n,
                requiresKeepalive: o
            }) {
                const i = 1e6 * Date.now();
                ho(this, _o)[_o].push({
                    name: e,
                    type: "counter",
                    value: t,
                    unit: r,
                    timeUnixNano: i,
                    attributes: n,
                    requiresKeepalive: o
                })
            }
            gauge({
                name: e,
                value: t,
                unit: r,
                attributes: n,
                requiresKeepalive: o
            }) {
                const i = 1e6 * Date.now();
                ho(this, _o)[_o].push({
                    name: e,
                    type: "gauge",
                    value: t,
                    unit: r,
                    timeUnixNano: i,
                    attributes: n,
                    requiresKeepalive: o
                })
            }
            log({
                body: e,
                attributes: t,
                requiresKeepalive: r
            }) {
                const n = 1e6 * Date.now();
                ho(this, Io)[Io].push({
                    timeUnixNano: n,
                    body: e,
                    attributes: t,
                    requiresKeepalive: r
                })
            }
            async exportMetrics() {
                ho(this, _o)[_o].forEach(e => {
                    e.attributes = { ...ho(this, wo)[wo],
                        ...e.attributes
                    }
                });
                const e = ho(this, _o)[_o];
                ho(this, _o)[_o] = [], await this.exportByKeepalive(e, (e, t) => ho(this, bo)[bo].exportMetrics(this.aggregateMetrics(e), t))
            }
            async exportLogs() {
                const e = ho(this, Io)[Io];
                ho(this, Io)[Io] = [], await this.exportByKeepalive(e, (e, t) => ho(this, bo)[bo].exportLogs(this.formatLogs(e), t))
            }
            aggregateMetrics(e) {
                const t = {};
                return e.forEach(e => {
                    switch (e.type) {
                        case "histogram":
                            ! function(e, t) {
                                var r;
                                const {
                                    name: n,
                                    value: o,
                                    unit: i,
                                    timeUnixNano: s,
                                    attributes: a
                                } = t, c = null !== (r = t.bounds) && void 0 !== r ? r : yo, u = new Array(c.length + 1).fill(0);
                                e[n] || = {
                                    name: n,
                                    unit: i || "1",
                                    histogram: {
                                        aggregationTemporality: 1,
                                        dataPoints: []
                                    }
                                };
                                for (let d = 0; d < u.length; d++) {
                                    const e = c[d];
                                    if (void 0 === e) u[d] = 1;
                                    else if (o <= e) {
                                        u[d] = 1;
                                        break
                                    }
                                }
                                e[n].histogram.dataPoints.push({
                                    startTimeUnixNano: s,
                                    timeUnixNano: s,
                                    count: 1,
                                    sum: o,
                                    min: o,
                                    max: o,
                                    bucketCounts: u,
                                    explicitBounds: c,
                                    attributes: vo(null != a ? a : {})
                                })
                            }(t, e);
                            break;
                        case "exponential_histogram":
                            ! function(e, t) {
                                const {
                                    name: r,
                                    value: n,
                                    unit: o,
                                    timeUnixNano: i,
                                    attributes: s,
                                    scale: a
                                } = t;
                                e[r] || = {
                                    name: r,
                                    unit: o || "1",
                                    exponentialHistogram: {
                                        aggregationTemporality: 1,
                                        dataPoints: []
                                    }
                                };
                                const c = n <= 0 ? 0 : n,
                                    u = a || 3,
                                    d = 2 ** u / Math.log(2),
                                    l = Math.ceil(Math.log(n) * d) - 1,
                                    p = n <= 0 ? 1 : 0,
                                    h = {
                                        offset: n > 0 ? l : 0,
                                        bucketCounts: n > 0 ? [1] : []
                                    };
                                e[r].exponentialHistogram.dataPoints.push({
                                    attributes: vo(null != s ? s : {}),
                                    startTimeUnixNano: i,
                                    timeUnixNano: i,
                                    count: 1,
                                    sum: c,
                                    scale: u,
                                    zeroCount: p,
                                    positive: h,
                                    negative: {
                                        offset: 0,
                                        bucketCounts: []
                                    },
                                    min: c,
                                    max: c,
                                    zeroThreshold: 0
                                })
                            }(t, e);
                            break;
                        case "counter":
                            ! function(e, t) {
                                const {
                                    name: r,
                                    value: n,
                                    unit: o,
                                    timeUnixNano: i,
                                    attributes: s
                                } = t;
                                e[r] || = {
                                    name: r,
                                    unit: o || "1",
                                    sum: {
                                        aggregationTemporality: 1,
                                        isMonotonic: !0,
                                        dataPoints: []
                                    }
                                }, e[r].sum.dataPoints.push({
                                    startTimeUnixNano: i,
                                    timeUnixNano: i,
                                    asDouble: n,
                                    attributes: vo(null != s ? s : {})
                                })
                            }(t, e);
                            break;
                        case "gauge":
                            ! function(e, t) {
                                const {
                                    name: r,
                                    value: n,
                                    unit: o,
                                    timeUnixNano: i,
                                    attributes: s
                                } = t;
                                e[r] || = {
                                    name: r,
                                    unit: o || "1",
                                    gauge: {
                                        dataPoints: []
                                    }
                                }, e[r].gauge.dataPoints.push({
                                    startTimeUnixNano: i,
                                    timeUnixNano: i,
                                    asDouble: n,
                                    attributes: vo(null != s ? s : {})
                                })
                            }(t, e)
                    }
                }), Object.values(t)
            }
            async exportByKeepalive(e, t) {
                if (0 === e.length) return;
                const r = [],
                    n = [];
                e.forEach(e => {
                    var t;
                    null === (t = e.requiresKeepalive) || void 0 === t || t ? r.push(e) : n.push(e)
                });
                const o = [r.length > 0 ? t(r, {
                    keepalive: !0
                }) : void 0, n.length > 0 ? t(n, {
                    keepalive: !1
                }) : void 0].filter(e => void 0 !== e);
                await Promise.all(o)
            }
            formatLogs(e) {
                return e.map(e => {
                    const t = {
                        timeUnixNano: e.timeUnixNano,
                        observedTimeUnixNano: e.timeUnixNano,
                        attributes: (r = { ...ho(this, wo)[wo],
                            ...e.attributes
                        }, Object.entries(r).map(([e, t]) => ({
                            key: e,
                            value: go(t)
                        })))
                    };
                    var r;
                    return e.body && (t.body = {
                        stringValue: e.body
                    }), t
                })
            }
        }
        var Eo = mo("url"),
            ko = mo("serviceName"),
            So = mo("logger"),
            Co = mo("fetchFn"),
            To = mo("maxPayloadSizeBytes");
        class Ao {
            constructor(e, t, r) {
                var n;
                Object.defineProperty(this, Eo, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, ko, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, So, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, Co, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, To, {
                    writable: !0,
                    value: void 0
                }), ho(this, Eo)[Eo] = e.replace(/\/v1\/(logs|metrics|traces)\/?$/, ""), ho(this, ko)[ko] = t, ho(this, So)[So] = null == r ? void 0 : r.logger, ho(this, Co)[Co] = null == r ? void 0 : r.fetchFn, ho(this, To)[To] = null !== (n = null == r ? void 0 : r.maxPayloadSizeBytes) && void 0 !== n ? n : 51200
            }
            async exportMetrics(e, t) {
                var r;
                const n = null === (r = null == t ? void 0 : t.keepalive) || void 0 === r || r;
                await this.exportBatches("/v1/metrics", [...e], e => ({
                    resourceMetrics: [{
                        resource: {
                            attributes: [{
                                key: "service.name",
                                value: {
                                    stringValue: ho(this, ko)[ko]
                                }
                            }]
                        },
                        scopeMetrics: [{
                            scope: {
                                name: "open-telemetry-mini-client",
                                version: "1.1.0",
                                attributes: []
                            },
                            metrics: e
                        }]
                    }]
                }), n)
            }
            async exportLogs(e, t) {
                var r;
                const n = null === (r = null == t ? void 0 : t.keepalive) || void 0 === r || r;
                await this.exportBatches("/v1/logs", [...e], e => ({
                    resourceLogs: [{
                        resource: {
                            attributes: [{
                                key: "service.name",
                                value: {
                                    stringValue: ho(this, ko)[ko]
                                }
                            }]
                        },
                        scopeLogs: [{
                            scope: {
                                name: "open-telemetry-mini-client",
                                version: "1.1.0",
                                attributes: []
                            },
                            logRecords: e
                        }]
                    }]
                }), n)
            }
            async exportTo(e, t, r) {
                var n;
                const o = JSON.stringify(e),
                    i = (new TextEncoder).encode(o).length;
                if (i > ho(this, To)[To]) throw new Oo(`Payload size ${i} exceeds ${ho(this,To)[To]} bytes`);
                const s = await this.exporterFetch()(`${ho(this,Eo)[Eo]}${t}`, {
                    method: "POST",
                    keepalive: r,
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: o
                });
                if (null === (n = ho(this, So)[So]) || void 0 === n || n.log({
                        status: s.status
                    }), !s.ok) {
                    if (400 === s.status) {
                        const e = await s.text();
                        throw new Po(`Invalid OpenTelemetry Data: ${e}`)
                    }
                    if (429 === s.status || 503 === s.status) {
                        const t = await s.text(),
                            r = s.headers.get("Retry-After"),
                            n = r ? {
                                seconds: Number(r)
                            } : void 0;
                        throw new Po("Server did not accept data", {
                            errorData: t,
                            retryAfter: n,
                            body: e
                        })
                    }
                    if (401 === s.status || 403 === s.status) {
                        const t = await s.text();
                        throw new Ro(`Authentication failed: ${s.status} ${401===s.status?"Unauthorized":"Forbidden"}`, {
                            errorData: t,
                            body: e
                        })
                    }
                    throw new Po(`Server responded with ${s.status}`)
                }
            }
            exporterFetch() {
                return ho(this, Co)[Co] || fetch
            }
            async exportBatches(e, t, r, n) {
                let o = t.length;
                for (; t.length > 0;) try {
                    const i = t.slice(0, o);
                    await this.exportTo(r(i), e, n), t.splice(0, o)
                } catch (i) {
                    if (!(i instanceof Oo && o > 1)) throw i;
                    o = Math.ceil(o / 2)
                }
            }
        }
        class Po extends Error {
            constructor(e, t) {
                super(e), this.metadata = void 0, this.name = "OpenTelemetryClientError", this.metadata = t
            }
        }
        class Oo extends Error {
            constructor(...e) {
                super(...e), this.name = "PayloadTooLargeError"
            }
        }
        class Ro extends Error {
            constructor(e, t) {
                super(e), this.name = "AuthenticationFailedError", this.metadata = void 0, this.name = "AuthenticationFailedError", this.metadata = t
            }
        }
        let No = function(e) {
            return e.Histogram = "histogram", e.Counter = "counter", e.Gauge = "gauge", e.ExponentialHistogram = "exponential_histogram", e
        }({});
        var jo = Yr("client"),
            Mo = Yr("metrics"),
            Uo = Yr("prefix"),
            Do = Yr("defaultAttributes");
        class $o {
            constructor({
                client: e,
                metrics: t,
                prefix: r,
                defaultAttributes: n
            }) {
                Object.defineProperty(this, jo, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, Mo, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, Uo, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, Do, {
                    writable: !0,
                    value: void 0
                }), Wr(this, jo)[jo] = e, Wr(this, Mo)[Mo] = t, Wr(this, Uo)[Uo] = r ? ? "", Wr(this, Do)[Do] = n ? ? {}
            }
            record(e, t, ...r) {
                const n = Wr(this, Mo)[Mo][e],
                    o = String(e),
                    i = r[0] ? ? {},
                    s = {
                        name: Wr(this, Uo)[Uo] ? `${Wr(this,Uo)[Uo]}_${o}` : o,
                        value: t,
                        unit: n.unit,
                        attributes: { ...Wr(this, Do)[Do],
                            ...i
                        }
                    },
                    a = n.type;
                switch (a) {
                    case No.Counter:
                    case No.Gauge:
                        Wr(this, jo)[jo][a](s);
                        break;
                    case No.Histogram:
                        Wr(this, jo)[jo].histogram({ ...s,
                            bounds: n.bounds
                        });
                        break;
                    case No.ExponentialHistogram:
                        Wr(this, jo)[jo].histogram({ ...s,
                            scale: n.scale
                        });
                        break;
                    default:
                        throw new g(`Unknown metric type: ${a}`)
                }
                Wr(this, jo)[jo].exportMetrics().catch(() => {})
            }
            log(e, t) {
                Wr(this, jo)[jo].log({
                    body: e,
                    attributes: { ...Wr(this, Do)[Do],
                        ...t
                    }
                }), Wr(this, jo)[jo].exportLogs().catch(() => {})
            }
        }
        var Lo = Yr("client");
        class qo {
            constructor({
                client: e,
                throttleDelay: t
            }) {
                Object.defineProperty(this, Lo, {
                    writable: !0,
                    value: void 0
                }), Wr(this, Lo)[Lo] = t ? function(e, t) {
                    return {
                        counter: e.counter.bind(e),
                        gauge: e.gauge.bind(e),
                        histogram: e.histogram.bind(e),
                        log: e.log.bind(e),
                        exportMetrics: qr(() => e.exportMetrics().catch(() => {}), t),
                        exportLogs: qr(() => e.exportLogs().catch(() => {}), t)
                    }
                }(e, t) : e
            }
            createClient(e) {
                return new $o({ ...e,
                    client: Wr(this, Lo)[Lo]
                })
            }
        }
        var Vo = Yr("prefix");
        class Bo {
            constructor(e = "OpenTelemetry") {
                Object.defineProperty(this, Vo, {
                    writable: !0,
                    value: void 0
                }), Wr(this, Vo)[Vo] = e
            }
            exportMetrics(e) {
                return console.log(`[${Wr(this,Vo)[Vo]}] Metrics:`, e), Promise.resolve()
            }
            exportLogs(e) {
                return console.log(`[${Wr(this,Vo)[Vo]}] Logs:`, e), Promise.resolve()
            }
        }
        const Ho = {
                feature_usage: {
                    unit: "1",
                    type: No.Counter
                }
            },
            Fo = ["platform", "platformVersion", "architecture", "model", "uaFullVersion", "bitness", "fullVersionList", "wow64"];
        var zo = Yr("attrs"),
            Wo = Yr("prefetchStarted"),
            Ko = Yr("buildBaseAttributes"),
            Yo = Yr("requestHighEntropyValues");
        class Jo {
            constructor() {
                Object.defineProperty(this, Yo, {
                    value: Xo
                }), Object.defineProperty(this, Ko, {
                    value: Go
                }), Object.defineProperty(this, zo, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, Wo, {
                    writable: !0,
                    value: !1
                })
            }
            prefetch() {
                Wr(this, Wo)[Wo] || (Wr(this, zo)[zo] ? ? = Wr(this, Ko)[Ko](), Wr(this, zo)[zo] && (Wr(this, Wo)[Wo] = !0, Wr(this, Yo)[Yo]()))
            }
            getAttributes() {
                return this.prefetch(), Wr(this, zo)[zo]
            }
        }

        function Go() {
            return Tr(() => {
                const e = self.navigator,
                    t = self.screen;
                return {
                    tzo: (new Date).getTimezoneOffset(),
                    mtp: e.maxTouchPoints,
                    sw: t.width,
                    sh: t.height,
                    scd: t.colorDepth
                }
            })
        }

        function Xo() {
            const e = Tr(() => self.navigator.userAgentData);
            e ? .getHighEntropyValues && Tr(() => e.getHighEntropyValues(Fo).then(e => {
                const t = Tr(() => JSON.stringify(e));
                void 0 !== t && Wr(this, zo)[zo] && (Wr(this, zo)[zo].uahe = t)
            }).catch(() => {}))
        }
        const Qo = {},
            Zo = {
                "pixel:register": {
                    start: {
                        name: "pixel:register:started",
                        params: {
                            pixelId: "",
                            source: ""
                        }
                    },
                    end: {
                        name: "pixel:register:completed",
                        params: {
                            pixelId: "",
                            source: ""
                        }
                    }
                },
                "page:session": {
                    start: {
                        name: "start",
                        params: Qo
                    },
                    end: {
                        name: "page:unload",
                        params: Qo
                    }
                },
                completed: {
                    start: {
                        name: "start",
                        params: Qo
                    },
                    end: {
                        name: "pixels:resolved",
                        params: Qo
                    }
                }
            };

        function ei(e, t = Qo) {
            const r = ri(e, "end", t),
                n = function(e, t) {
                    try {
                        const r = ni(e, "start", t),
                            n = ni(e, "end", t),
                            o = function(e, t) {
                                return oi(e, t)
                            }(e, t),
                            i = self.performance.measure(o, r, n);
                        return { ...i,
                            duration: Math.round(i.duration),
                            startTime: Math.round(i.startTime)
                        }
                    } catch (r) {
                        return null
                    }
                }(e, t);
            return {
                mark: r,
                measurement: n
            }
        }

        function ti() {
            const [e] = window.performance ? .getEntriesByType("navigation") || [];
            return e && function(e) {
                return "type" in e
            }(e) ? e : void 0
        }

        function ri(e, t, r) {
            try {
                const n = ni(e, t, r);
                return self.performance.mark(n), {
                    name: n,
                    params: r
                }
            } catch (n) {
                return {
                    name: null,
                    params: r
                }
            }
        }

        function ni(e, t, r) {
            return oi(Zo[e][t].name, r)
        }

        function oi(e, t = {}) {
            const r = ["wpm", e];
            return Object.keys(t).forEach(e => {
                const n = t[e];
                n && r.push(n)
            }), r.join(":")
        }
        const ii = {
            test: "edge_test_click/1.0",
            load: "web_pixels_manager_load/3.3",
            init: "web_pixels_manager_init/3.2",
            register: "web_pixels_manager_pixel_register/3.8",
            subscriberEventEmit: "web_pixels_manager_subscriber_event_emit/4.1",
            eventPublish: "web_pixels_manager_event_publish/1.7",
            unload: "web_pixels_manager_unload/1.2",
            visitor: "web_pixels_manager_visitor/1.0",
            subscriberEventEmitDom: "web_pixels_manager_subscriber_event_emit_dom/2.0",
            subscriberEventEmitPrivacy: "web_pixels_manager_subscriber_event_emit_privacy/1.0",
            helperLoad: "web_pixels_helper_load/1.0",
            helperWindowButtonClick: "web_pixels_helper_window_button_click/1.0",
            buyerEventSample: "web_pixels_manager_buyer_event_sample/1.0",
            webPixelsStorefrontCustomerTracking: "web_pixels_manager_storefront_customer_tracking/1.0",
            webPixelsManagerSubscriberEventBlocked: "web_pixels_manager_subscriber_event_blocked/1.1"
        };

        function si(e, t) {
            return {
                schemaId: ii[e],
                payload: t
            }
        }
        let ai;

        function ci(e, {
            flush: t = !1,
            credentials: r = !1
        } = {}) {
            ai ? .produce(e.schemaId, e.payload, {
                flush: t,
                credentials: r
            })
        }

        function ui(e, t, r = !1) {
            ci(si(e, t), {
                flush: r
            })
        }

        function di() {
            return {
                events: [],
                timeoutId: void 0,
                flushCount: 0,
                lastFlushTime: void 0
            }
        }
        var li = Yr("delayStrategy"),
            pi = Yr("onError"),
            hi = Yr("maxBatchBytes"),
            fi = Yr("batches"),
            mi = Yr("hiddenFlushScheduled"),
            vi = Yr("onPageHide"),
            gi = Yr("onVisibilityChange"),
            yi = Yr("scheduleHiddenFlush"),
            bi = Yr("getBatch"),
            wi = Yr("flushAll"),
            _i = Yr("flushBatch"),
            Ii = Yr("sendChunked"),
            xi = Yr("clearBatchTimeout");
        class Ei {
            constructor(e, t = []) {
                Object.defineProperty(this, xi, {
                    value: Pi
                }), Object.defineProperty(this, Ii, {
                    value: Ai
                }), Object.defineProperty(this, _i, {
                    value: Ti
                }), Object.defineProperty(this, wi, {
                    value: Ci
                }), Object.defineProperty(this, bi, {
                    value: Si
                }), Object.defineProperty(this, yi, {
                    value: ki
                }), Object.defineProperty(this, li, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, pi, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, hi, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, fi, {
                    writable: !0,
                    value: new Map
                }), Object.defineProperty(this, mi, {
                    writable: !0,
                    value: !1
                }), Object.defineProperty(this, vi, {
                    writable: !0,
                    value: () => {
                        Wr(this, wi)[wi](!0)
                    }
                }), Object.defineProperty(this, gi, {
                    writable: !0,
                    value: () => {
                        "hidden" === document.visibilityState && Wr(this, wi)[wi](!1)
                    }
                }), Wr(this, li)[li] = e.delayStrategy ? ? ((e, t) => t >= 50 ? 0 : 50), Wr(this, pi)[pi] = e.onError, Wr(this, hi)[hi] = e.maxBatchBytes ? ? 2e4;
                for (const r of t) Wr(this, fi)[fi].set(r, di());
                window.addEventListener("pagehide", Wr(this, vi)[vi]), document.addEventListener("visibilitychange", Wr(this, gi)[gi])
            }
            destroy() {
                window.removeEventListener("pagehide", Wr(this, vi)[vi]), document.removeEventListener("visibilitychange", Wr(this, gi)[gi]), Wr(this, mi)[mi] = !1;
                for (const e of Wr(this, fi)[fi].values()) Wr(this, xi)[xi](e)
            }
            flush() {
                Wr(this, wi)[wi](!1)
            }
            get pendingEvents() {
                const e = [];
                for (const t of Wr(this, fi)[fi].values()) e.push(...t.events);
                return e
            }
            reportError(e) {
                Wr(this, pi)[pi] ? .(e)
            }
            enqueue(e, t, r) {
                const n = Wr(this, bi)[bi](r);
                if (n.events.push(e), t) this.flush();
                else if ("hidden" === document.visibilityState) Wr(this, yi)[yi]();
                else if (void 0 === n.timeoutId) {
                    const e = void 0 === n.lastFlushTime ? 1 / 0 : (new Date).valueOf() - n.lastFlushTime,
                        t = Wr(this, li)[li](n.flushCount, e);
                    n.timeoutId = setTimeout(() => Wr(this, _i)[_i](r, n, !1), t)
                }
            }
        }

        function ki() {
            Wr(this, mi)[mi] || ("function" == typeof queueMicrotask ? (Wr(this, mi)[mi] = !0, queueMicrotask(() => {
                Wr(this, mi)[mi] && (Wr(this, mi)[mi] = !1, this.flush())
            })) : this.flush())
        }

        function Si(e) {
            let t = Wr(this, fi)[fi].get(e);
            return t || (t = {
                events: [],
                timeoutId: void 0,
                flushCount: 0,
                lastFlushTime: void 0
            }, Wr(this, fi)[fi].set(e, t)), t
        }

        function Ci(e) {
            for (const [t, r] of Wr(this, fi)[fi]) Wr(this, _i)[_i](t, r, e)
        }

        function Ti(e, t, r) {
            Wr(this, xi)[xi](t), 0 !== t.events.length && (t.flushCount++, t.lastFlushTime = (new Date).valueOf(), Wr(this, Ii)[Ii](t.events.splice(0), {
                isFinal: r,
                batch: e
            }))
        }

        function Ai(e, t) {
            let r;
            try {
                r = this.serialize(e)
            } catch (s) {
                return void this.reportError(s)
            }
            if (n = r, o = Wr(this, hi)[hi], 3 * n.length <= o || !(new Blob([n]).size > o) || 1 === e.length) {
                try {
                    this.send(r, t)
                } catch (s) {
                    this.reportError(s)
                }
                return
            }
            var n, o;
            const i = Math.ceil(e.length / 2);
            Wr(this, Ii)[Ii](e.slice(0, i), t), Wr(this, Ii)[Ii](e.slice(i), t)
        }

        function Pi(e) {
            void 0 !== e.timeoutId && (clearTimeout(e.timeoutId), e.timeoutId = void 0)
        }

        function Oi() {
            throw new Error("fetch is unavailable")
        }
        const Ri = Tr(() => {
                const e = "undefined" == typeof window ? void 0 : window.fetch;
                return "function" == typeof e ? e.bind(window) : Oi
            }, Oi),
            Ni = Tr(() => {
                const e = "undefined" == typeof window ? void 0 : window.navigator.sendBeacon;
                return "function" == typeof e ? e.bind(window.navigator) : () => !1
            }, () => !1);

        function ji(e) {
            return e.replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").toLowerCase()
        }

        function Mi(e) {
            return null !== e && "object" == typeof e && !Array.isArray(e) && "[object Object]" === Object.prototype.toString.call(e)
        }

        function Ui(e, {
            visited: t = new WeakMap,
            preserveKeys: r
        } = {}) {
            if (!Mi(e)) return e;
            const n = new Set(r),
                o = t.get(e);
            if (o) return o;
            const i = {};
            t.set(e, i);
            for (const [s, a] of Object.entries(e)) {
                const e = n.has(s) ? s : ji(s);
                Array.isArray(a) ? i[e] = a.map(e => Ui(e, {
                    visited: t
                })) : Mi(a) ? i[e] = Ui(a, {
                    visited: t
                }) : i[e] = a
            }
            return i
        }

        function Di(e, t) {
            return function(e) {
                if ("function" != typeof e) return e;
                try {
                    return e()
                } catch {
                    return
                }
            }(t)
        }
        const $i = ["include", "omit"];
        var Li = Yr("endpoint"),
            qi = Yr("sendWithCredentials"),
            Vi = Yr("sendWithoutCredentials");
        class Bi extends Ei {
            constructor(e) {
                super(e, $i), Object.defineProperty(this, Vi, {
                    value: Fi
                }), Object.defineProperty(this, qi, {
                    value: Hi
                }), Object.defineProperty(this, Li, {
                    writable: !0,
                    value: void 0
                }), Wr(this, Li)[Li] = e.endpoint
            }
            setEndpoint(e) {
                Wr(this, Li)[Li] = e
            }
            produce(e, t, {
                flush: r,
                convertEventCase: n = !0,
                preserveEventCase: o = [],
                credentials: i = !0
            } = {}) {
                const s = t,
                    a = n ? Ui(s, {
                        preserveKeys: o
                    }) : s;
                Wr(this, Li)[Li] ? this.enqueue({
                    schema_id: e,
                    payload: a,
                    metadata: {
                        event_created_at_ms: (new Date).getTime()
                    }
                }, r, i ? "include" : "omit") : console.log("[MonorailClient]", e, a)
            }
            serialize(e) {
                const t = {
                    events: e,
                    metadata: {
                        event_sent_at_ms: (new Date).getTime()
                    }
                };
                return JSON.stringify(t, Di)
            }
            send(e, {
                isFinal: t,
                batch: r
            }) {
                const n = Wr(this, Li)[Li];
                n && ("omit" !== r || t || "hidden" === document.visibilityState ? Wr(this, qi)[qi](n, e, t) : Wr(this, Vi)[Vi](n, e))
            }
        }

        function Hi(e, t, r) {
            if (Tr(() => Ni(e, t), !1) || r) return;
            const n = new XMLHttpRequest;
            n.open("POST", e, !0), n.setRequestHeader("Content-Type", "text/plain"), n.send(t)
        }

        function Fi(e, t) {
            new Promise(r => {
                r(Ri(e, {
                    method: "POST",
                    headers: {
                        "Content-Type": "text/plain"
                    },
                    body: t,
                    credentials: "omit",
                    mode: "no-cors",
                    keepalive: !0
                }))
            }).catch(() => Wr(this, qi)[qi](e, t, !1)).catch(e => this.reportError(e))
        }

        function zi({
            storefrontBaseUrl: e,
            region: t,
            endpoint: r
        }) {
            return r || `${function(e,t){const r={global:"https://monorail-edge.shopifysvc.com",wellKnown:`${e}/.well-known/shopify/monorail`,staging:"https://monorail-edge-staging.shopifysvc.com",test:"https://localhost"},n=t||"wellKnown";return n in r?r[n]:r.wellKnown}(pn(e),t)}/unstable/produce_batch`
        }

        function Wi(e) {
            const t = [0];
            for (const r of e) {
                let e = Number.parseInt(r, 16);
                for (let r = 0; r < t.length; r++) {
                    const n = 16 * t[r] + e;
                    t[r] = n % 10, e = Math.floor(n / 10)
                }
                for (; e > 0;) t.push(e % 10), e = Math.floor(e / 10)
            }
            return t.reverse().join("")
        }

        function Ki() {
            return `${(new Date).getTime().toString()}${Math.floor(1e6*Math.random()).toString().padStart(6,"0")}`
        }

        function Yi(e) {
            return void 0 === e ? {
                lowid: Ki(),
                highid: Ki()
            } : {
                lowid: String(e)
            }
        }

        function Ji(e) {
            const t = e.replace(/-/g, "");
            if (!/^[0-9a-f]{32}$/i.test(t)) throw new Error("Invalid UUID format");
            return {
                highid: Wi(t.slice(0, 16)),
                lowid: Wi(t.slice(16))
            }
        }
        var Gi = Yr("endpoint");
        class Xi extends Ei {
            constructor(e) {
                super(e), Object.defineProperty(this, Gi, {
                    writable: !0,
                    value: void 0
                }), Wr(this, Gi)[Gi] = e.endpoint
            }
            produce(e, {
                flush: t
            } = {}) {
                this.enqueue(e, t)
            }
            serialize(e) {
                const t = {
                    events: e
                };
                return JSON.stringify(t)
            }
            send(e, {
                isFinal: t
            }) {
                const r = Wr(this, Gi)[Gi];
                if (Tr(() => Ni(r, e), !1) || t) return;
                const n = new XMLHttpRequest;
                n.open("POST", r, !0), n.setRequestHeader("Content-Type", "text/plain"), n.send(e)
            }
        }
        const Qi = [
            ["analyticsProcessingAllowed", "USER_CONSENT_TYPE_ANALYTICS"],
            ["marketingAllowed", "USER_CONSENT_TYPE_MARKETING"],
            ["preferencesProcessingAllowed", "USER_CONSENT_TYPE_PREFERENCES"],
            ["saleOfDataAllowed", "USER_CONSENT_TYPE_SALE_OF_DATA"]
        ];

        function Zi(e) {
            return Qi.filter(([t]) => e[t]).map(([, e]) => ({
                consentType: e
            }))
        }

        function es(e) {
            switch (e) {
                case y.CheckoutOneShopApp:
                case y.CheckoutOneNativeShopApp:
                case y.CheckoutOneSdkShopApp:
                case y.CheckoutKitShopApp:
                    return "shop-pay";
                case y.Shopify:
                case y.StorefrontRenderer:
                case y.CheckoutOne:
                case y.CheckoutOneSdk:
                case y.CheckoutKit:
                case y.CustomerAccount:
                    return "storefront";
                case y.Unknown:
                case y.NotAvailable:
                default:
                    return "unspecified"
            }
        }
        const ts = {
                "shop-pay": "EVENT_APP_SHOP_PAY",
                storefront: "EVENT_APP_STOREFRONT",
                unspecified: "EVENT_APP_UNSPECIFIED"
            },
            rs = {
                "shop-pay": "DATA_ORIGINATOR_SHOPIFY",
                storefront: "DATA_ORIGINATOR_MERCHANT",
                unspecified: "DATA_ORIGINATOR_UNSPECIFIED"
            };

        function ns(e) {
            return rs[es(e)]
        }

        function os(e) {
            return `${pn(e)}/.well-known/shopify/fec/produce`
        }
        var is = Yr("proto"),
            ss = Yr("context");
        class as {
            constructor({
                storefrontBaseUrl: e,
                frontendEventCollectorEndpoint: t,
                onError: r,
                ...n
            }) {
                Object.defineProperty(this, is, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, ss, {
                    writable: !0,
                    value: void 0
                }), Wr(this, is)[is] = new Xi({
                    endpoint: t || os(e),
                    onError: r
                }), Wr(this, ss)[ss] = n
            }
            produce(e, t = {}) {
                const {
                    consent: r
                } = Wr(this, ss)[ss], n = r.trackingTokens.getUniqueToken(), {
                    canonicalContext: o,
                    clientMessageCreatedAt: i,
                    clientMessageId: s,
                    tags: a,
                    userContext: c
                } = t, u = o ? .page, d = "apiClientId" in t ? t.apiClientId : Wr(this, ss)[ss].apiClientId, l = c && "customerId" in c ? c.customerId : Wr(this, ss)[ss].customerId;
                var p;
                Wr(this, is)[is].produce({
                    source: (p = Wr(this, ss)[ss].surface, ts[es(p)]),
                    eventClass: "EVENT_CLASS_EVENT",
                    dataOriginator: ns(Wr(this, ss)[ss].surface),
                    user: {
                        type: "USER_TYPE_BUYER",
                        ...n && {
                            domainScopedBrowserId: {
                                value: n
                            }
                        },
                        ...c ? .email && {
                            email: {
                                address: c.email
                            }
                        },
                        ...c ? .phone && {
                            phone: {
                                number: c.phone
                            }
                        },
                        ...void 0 !== l && {
                            customer: {
                                id: Yi(l)
                            }
                        }
                    },
                    shop: {
                        id: Yi(Wr(this, ss)[ss].shopId)
                    },
                    ...void 0 !== a && {
                        tags: a
                    },
                    session: {
                        clientSessionToken: r.trackingTokens.getVisitToken()
                    },
                    ...Wr(this, ss)[ss].httpRequestId && {
                        server: {
                            request: {
                                httpRequestId: Wr(this, ss)[ss].httpRequestId
                            }
                        }
                    },
                    ...void 0 !== d && {
                        apiClient: {
                            id: Yi(d)
                        }
                    },
                    userConsents: Zi({
                        analyticsProcessingAllowed: r.analyticsProcessingAllowed(),
                        marketingAllowed: r.marketingAllowed(),
                        preferencesProcessingAllowed: r.preferencesProcessingAllowed(),
                        saleOfDataAllowed: r.saleOfDataAllowed()
                    }),
                    ...void 0 !== u && {
                        page: {
                            source: "SOURCE_CLIENT_BROWSER",
                            url: !0 === u ? window.location.href : u.url,
                            ...Wr(this, ss)[ss].pageReferrer && {
                                referrer: Wr(this, ss)[ss].pageReferrer
                            }
                        }
                    },
                    client: {
                        message: {
                            id: void 0 === s ? Yi() : Ji(s),
                            ...void 0 !== i && {
                                createdAt: i
                            }
                        },
                        browser: {
                            href: Wr(this, ss)[ss].pageUrl
                        },
                        tokens: {
                            pageViewToken: Wr(this, ss)[ss].pageId
                        },
                        ...void 0 !== o ? .view && {
                            view: o.view
                        }
                    },
                    payload: e
                })
            }
        }

        function cs(e, t, r, n = !0) {
            try {
                const o = { ...n ? Object.getOwnPropertyDescriptor(e, t) : {},
                    ...r
                };
                return Object.defineProperty(e, t, o)
            } catch (o) {
                return e
            }
        }
        const us = "_shopify_test";

        function ds(e) {
            $t(`${us}=1; path=/; domain=${e}`)
        }

        function ls(e) {
            $t(`${us}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; domain=${e}`)
        }

        function ps() {
            return window ? .location ? .hostname || ""
        }
        const hs = Nt(() => {
            const e = [];
            for (const r of (t = ps()) ? t.split(".").reverse().reduce((e, t) => {
                    const r = e[e.length - 1];
                    return e.push(r ? `${t}.${r}` : t), e
                }, []) : []) ds(r), Lt(us) || e.push(r), ls(r);
            var t;
            return e
        }, {
            cacheKey: () => ps()
        });

        function fs(e, t) {
            return t.reduce((t, r) => (r in e && (t[r] = e[r]), t), {})
        }
        const ms = {
                uniqueToken: "_shopify_y",
                visitToken: "_shopify_s"
            },
            vs = {
                uniqueToken: () => Ct(),
                visitToken: () => Tt()
            };
        class gs {
            constructor({
                onError: e
            } = {}) {
                this.trackingTokens = void 0, this.analyticsProcessingAllowed = Mn, this.marketingAllowed = jn, this.preferencesProcessingAllowed = Un, this.saleOfDataAllowed = Dn, this.onConsentCollected = io, this.trackingTokens = function(e, {
                    onError: t
                } = {}) {
                    function r(r, n) {
                        for (const i of e) {
                            let e;
                            try {
                                e = i.read(r, n)
                            } catch (o) {
                                t ? .(o);
                                continue
                            }
                            if ("string" == typeof e) return e
                        }
                        return n ? ? ""
                    }
                    return {
                        getUniqueToken: e => r("uniqueToken", e),
                        getVisitToken: e => r("visitToken", e),
                        dispose: () => {
                            for (const n of e) try {
                                n.dispose ? .()
                            } catch (r) {
                                t ? .(r)
                            }
                        }
                    }
                }([{
                    read: e => vs[e]() || void 0
                }, {
                    read: e => Lt(ms[e]) || void 0
                }], {
                    onError: e
                })
            }
        }
        class ys extends Set {
            constructor(e, t) {
                if (super(), Number.isFinite(e) && !Number.isInteger(e) || e <= 0) throw new Error("Invalid maxSize specified");
                this.maxSize = e, this.keep = t
            }
            add(e) {
                if ("oldest" === this.keep) this.size < this.maxSize && super.add(e);
                else if ("newest" === this.keep && (super.add(e), this.size > this.maxSize))
                    for (const t of this)
                        if (this.delete(t), this.size <= this.maxSize) break;
                return this
            }
        }
        const bs = Symbol("eventBusReplay");
        class ws {
            constructor({
                bufferSize: e = 50,
                replayKeep: t = "oldest",
                subscribeAllKey: r,
                onSubscriberError: n
            } = {}) {
                this.channelSubscribers = new Map, this.bufferSize = e, this.replayKeep = t, this.subscribeAllKey = r, this.replayQueue = new ys(e, t), this.onSubscriberError = n, this.middlewareChain = e => e()
            }
            use(...e) {
                return e.forEach(e => this.useMiddleware(e)), this
            }
            publish(e, t, r = {}) {
                if (this.subscribeAllKey && e === this.subscribeAllKey) throw new Error(`Cannot publish to ${String(e)}`);
                this.replayQueue.add({
                    name: e,
                    payload: t,
                    options: r
                });
                const n = (n, o) => {
                    this.processEvent(e, t, o, r, n)
                };
                return [this.channelSubscribers.get(e), this.subscribeAllKey ? this.channelSubscribers.get(this.subscribeAllKey) : void 0].filter(e => !!e).forEach(e => e.forEach(n)), !0
            }
            subscribe(e, t, r = {}) {
                const n = this.channelSubscribers.get(e) || new Map;
                return this.channelSubscribers.set(e, n.set(t, r)), this.replayQueue.forEach(({
                    name: n,
                    payload: o,
                    options: i
                }) => {
                    (e === n || this.subscribeAllKey && e === this.subscribeAllKey) && this.processEvent(n, o, t, { ...i,
                        [bs]: !0
                    }, r)
                }), () => n.delete(t)
            }
            processEvent(e, t, r, n = {}, o = {}) {
                const i = (e = t) => {
                    r.call({}, e)
                };
                try {
                    this.middlewareChain(i, e, t, n, o)
                } catch (s) {
                    this.onSubscriberError ? this.onSubscriberError(s) : console ? .error(`Error in subscriber for event ${e}:`, s)
                }
            }
            useMiddleware(e) {
                const t = this.middlewareChain;
                this.middlewareChain = (r, n, o, ...i) => {
                    t((t = o) => {
                        let s = !1;
                        e((e = t) => {
                            s || (s = !0, r(e))
                        }, n, t, ...i), s = !0
                    }, n, o, ...i)
                }
            }
        }
        var _s = (e => (e.Standard = "standard", e.Advanced = "advanced", e))(_s || {});
        const Is = "remote-ui::ready";

        function xs(e, {
            terminate: t = !0,
            targetOrigin: r = "*"
        } = {}) {
            var n;
            if ("undefined" == typeof window) throw new Error("You can only run fromIframe() in a browser context, but no window was found.");
            const o = new WeakMap;
            let i;

            function s(t) {
                t.source === e.contentWindow && t.data === Is && (window.removeEventListener("message", s), i())
            }
            null === (n = e.contentWindow) || void 0 === n || n.postMessage(Is, r);
            const a = new Promise(e => {
                i = e, window.addEventListener("message", s)
            });
            return {
                async postMessage(t, n) {
                    var o;
                    await a, null === (o = e.contentWindow) || void 0 === o || o.postMessage(t, r, n)
                },
                addEventListener(t, r) {
                    const n = t => {
                        t.source === e.contentWindow && r(t)
                    };
                    o.set(r, n), self.addEventListener(t, n)
                },
                removeEventListener(e, t) {
                    const r = o.get(t);
                    null != r && (o.delete(t), self.removeEventListener(e, r))
                },
                terminate() {
                    window.removeEventListener("message", s), t && e.remove()
                }
            }
        }
        const Es = Symbol.for("RemoteUi::Retain"),
            ks = Symbol.for("RemoteUi::Release"),
            Ss = Symbol.for("RemoteUi::RetainedBy");
        class Cs {
            constructor() {
                this.memoryManaged = new Set
            }
            add(e) {
                this.memoryManaged.add(e), e[Ss].add(this), e[Es]()
            }
            release() {
                for (const e of this.memoryManaged) e[Ss].delete(this), e[ks]();
                this.memoryManaged.clear()
            }
        }

        function Ts(e) {
            return Boolean(e && e[Es] && e[ks])
        }

        function As(e, {
            deep: t = !0
        } = {}) {
            return Ps(e, t, new Map)
        }

        function Ps(e, t, r) {
            const n = r.get(e);
            if (null != n) return n;
            const o = Ts(e);
            if (o && e[Es](), r.set(e, o), t) {
                if (Array.isArray(e)) {
                    const n = e.reduce((e, n) => Ps(n, t, r) || e, o);
                    return r.set(e, n), n
                }
                if (Ns(e)) {
                    const n = Object.keys(e).reduce((n, o) => Ps(e[o], t, r) || n, o);
                    return r.set(e, n), n
                }
            }
            return r.set(e, o), o
        }

        function Os(e, {
            deep: t = !0
        } = {}) {
            return Rs(e, t, new Map)
        }

        function Rs(e, t, r) {
            const n = r.get(e);
            if (null != n) return n;
            const o = Ts(e);
            if (o && e[ks](), r.set(e, o), t) {
                if (Array.isArray(e)) {
                    const n = e.reduce((e, n) => Rs(n, t, r) || e, o);
                    return r.set(e, n), n
                }
                if (Ns(e)) {
                    const n = Object.keys(e).reduce((n, o) => Rs(e[o], t, r) || n, o);
                    return r.set(e, n), n
                }
            }
            return o
        }

        function Ns(e) {
            if (null == e || "object" != typeof e) return !1;
            const t = Object.getPrototypeOf(e);
            return null == t || t === Object.prototype
        }
        const js = "_@f",
            Ms = Object.create(null);

        function Us(e) {
            try {
                return Object.fromEntries(e)
            } catch (t) {
                const r = {};
                for (let n = 0; n < e.length; n++) Ms.value = e[n][1], Object.defineProperty(r, e[n][0], Ms);
                return Ms.value = void 0, r
            }
        }

        function Ds(e) {
            const t = new Map,
                r = new Map,
                n = new Map;
            return {
                encode: function n(o, i = new Map) {
                    if (null == o) return [o];
                    const s = i.get(o);
                    if (s) return s;
                    if ("object" == typeof o) {
                        if (Array.isArray(o)) {
                            i.set(o, [void 0]);
                            const e = [],
                                t = [o.map(t => {
                                    const [r, o = []] = n(t, i);
                                    return e.push(...o), r
                                }), e];
                            return i.set(o, t), t
                        }
                        if (Ns(o)) {
                            i.set(o, [void 0]);
                            const e = [],
                                t = [Us(Object.keys(o).map(t => {
                                    const [r, s = []] = n(o[t], i);
                                    return e.push(...s), [t, r]
                                })), e];
                            return i.set(o, t), t
                        }
                    }
                    if ("function" == typeof o) {
                        if (t.has(o)) {
                            const e = t.get(o),
                                r = [{
                                    [js]: e
                                }];
                            return i.set(o, r), r
                        }
                        const n = e.uuid();
                        t.set(o, n), r.set(n, o);
                        const s = [{
                            [js]: n
                        }];
                        return i.set(o, s), s
                    }
                    const a = [o];
                    return i.set(o, a), a
                },
                decode: o,
                async call(e, t) {
                    const n = new Cs,
                        i = r.get(e);
                    if (null == i) throw new Error("You attempted to call a function that was already released.");
                    try {
                        const e = Ts(i) ? [n, ...i[Ss]] : [n];
                        return await i(...o(t, e))
                    } finally {
                        n.release()
                    }
                },
                release(e) {
                    const n = r.get(e);
                    n && (r.delete(e), t.delete(n))
                },
                terminate() {
                    t.clear(), r.clear(), n.clear()
                }
            };

            function o(t, r) {
                if ("object" == typeof t) {
                    if (null == t) return t;
                    if (Array.isArray(t)) return t.map(e => o(e, r));
                    if (js in t) {
                        const o = t[js];
                        if (n.has(o)) return n.get(o);
                        let i = 0,
                            s = !1;
                        const a = () => {
                                i -= 1, 0 === i && (s = !0, n.delete(o), e.release(o))
                            },
                            c = () => {
                                i += 1
                            },
                            u = new Set(r),
                            d = (...t) => {
                                if (s) throw new Error("You attempted to call a function that was already released.");
                                if (!n.has(o)) throw new Error("You attempted to call a function that was already revoked.");
                                return e.call(o, t)
                            };
                        Object.defineProperties(d, {
                            [ks]: {
                                value: a,
                                writable: !1
                            },
                            [Es]: {
                                value: c,
                                writable: !1
                            },
                            [Ss]: {
                                value: u,
                                writable: !1
                            }
                        });
                        for (const e of u) e.add(d);
                        return n.set(o, d), d
                    }
                    if (Ns(t)) return Us(Object.keys(t).map(e => [e, o(t[e], r)]))
                }
                return t
            }
        }
        Ms.enumerable = !0, Ms.writable = !0, Ms.configurable = !0;
        class $s extends Error {
            constructor(e) {
                const {
                    callId: t,
                    error: r,
                    result: n
                } = e;
                super(`No resolver found for call ID: ${t}${r?` Error: ${String(r)}`:""}${null==n?"":` Result: ${JSON.stringify(n)}`}`), this.callId = void 0, this.error = void 0, this.result = void 0, this.groupingHash = "RemoteUI::MissingResolverError", this.name = "MissingResolverError", this.callId = t, this.error = r, this.result = n
            }
        }

        function Ls(e, {
            uuid: t = qs,
            createEncoder: r = Ds,
            callable: n
        } = {}) {
            let o = !1,
                i = e;
            const s = new Map,
                a = new Map,
                c = function(e, t) {
                    let r;
                    if (null == t) {
                        if ("function" != typeof Proxy) throw new Error("You must pass an array of callable methods in environments without Proxies.");
                        const t = new Map;
                        r = new Proxy({}, {
                            get(r, n) {
                                if (t.has(n)) return t.get(n);
                                const o = e(n);
                                return t.set(n, o), o
                            }
                        })
                    } else {
                        r = {};
                        for (const n of t) Object.defineProperty(r, n, {
                            value: e(n),
                            writable: !1,
                            configurable: !0,
                            enumerable: !0
                        })
                    }
                    return r
                }(p, n),
                u = r({
                    uuid: t,
                    release(e) {
                        d(3, [e])
                    },
                    call(e, r, n) {
                        const o = t(),
                            i = h(o, n),
                            [s, a] = u.encode(r);
                        return d(5, [o, e, s], a), i
                    }
                });
            return i.addEventListener("message", l), {
                call: c,
                replace(e) {
                    const t = i;
                    i = e, t.removeEventListener("message", l), e.addEventListener("message", l)
                },
                expose(e) {
                    for (const t of Object.keys(e)) {
                        const r = e[t];
                        "function" == typeof r ? s.set(t, r) : s.delete(t)
                    }
                },
                callable(...e) {
                    if (null != n)
                        for (const t of e) Object.defineProperty(c, t, {
                            value: p(t),
                            writable: !1,
                            configurable: !0,
                            enumerable: !0
                        })
                },
                terminate() {
                    d(2, void 0), f(), i.terminate && i.terminate()
                }
            };

            function d(e, t, r) {
                o || i.postMessage(t ? [e, t] : [e], r)
            }
            async function l(e) {
                if (o) return;
                const {
                    data: t
                } = e;
                var r;
                if (r = t, Array.isArray(r) && "number" == typeof r[0] && (null == r[1] || Array.isArray(r[1]))) switch (t[0]) {
                    case 2:
                        f();
                        break;
                    case 0:
                        {
                            const e = new Cs,
                                [r, o, i] = t[1],
                                a = s.get(o);
                            try {
                                if (null == a) throw new Error(`No '${o}' method is exposed on this endpoint`);
                                const [t, n] = u.encode(await a(...u.decode(i, [e])));
                                d(1, [r, void 0, t], n)
                            } catch (n) {
                                const {
                                    name: e,
                                    message: t,
                                    stack: o
                                } = n;
                                throw d(1, [r, {
                                    name: e,
                                    message: t,
                                    stack: o
                                }]), n
                            } finally {
                                e.release()
                            }
                            break
                        }
                    case 1:
                        {
                            const [e, r, n] = t[1],
                            o = a.get(e);
                            if (null == o) throw new $s({
                                callId: e,
                                error: r,
                                result: n
                            });o(...t[1]),
                            a.delete(e);
                            break
                        }
                    case 3:
                        {
                            const [e] = t[1];u.release(e);
                            break
                        }
                    case 6:
                        {
                            const [e, r, n] = t[1],
                            o = a.get(e);
                            if (null == o) throw new $s({
                                callId: e,
                                error: r,
                                result: n
                            });o(...t[1]),
                            a.delete(e);
                            break
                        }
                    case 5:
                        {
                            const [e, r, o] = t[1];
                            try {
                                const t = await u.call(r, o),
                                    [n, i] = u.encode(t);
                                d(6, [e, void 0, n], i)
                            } catch (n) {
                                const {
                                    name: t,
                                    message: r,
                                    stack: o
                                } = n;
                                throw d(6, [e, {
                                    name: t,
                                    message: r,
                                    stack: o
                                }]), n
                            }
                            break
                        }
                }
            }

            function p(e) {
                return (...r) => {
                    if (o) return Promise.reject(new Error("You attempted to call a function on a terminated web worker."));
                    if ("string" != typeof e && "number" != typeof e) return Promise.reject(new Error(`Can’t call a symbol method on a remote endpoint: ${e.toString()}`));
                    const n = t(),
                        i = h(n),
                        [s, a] = u.encode(r);
                    return d(0, [n, e, s], a), i
                }
            }

            function h(e, t) {
                return new Promise((r, n) => {
                    a.set(e, (e, o, i) => {
                        if (null == o) r(i && u.decode(i, t));
                        else {
                            const e = new Error;
                            Object.assign(e, o), n(e)
                        }
                    })
                })
            }

            function f() {
                var e;
                o = !0, s.clear(), a.clear(), null === (e = u.terminate) || void 0 === e || e.call(u), i.removeEventListener("message", l)
            }
        }

        function qs() {
            return `${Vs()}-${Vs()}-${Vs()}-${Vs()}`
        }

        function Vs() {
            return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)
        }
        const Bs = (e, t, {
                important: r = !1
            } = {}) => Object.keys(t).forEach(n => {
                const o = t[n],
                    [i = "", s = (r ? "important" : void 0)] = Array.isArray(o) ? o : [o];
                e.style.setProperty(n, i, s)
            }),
            Hs = "web-pixels-helper-sandbox-handle",
            Fs = {
                height: "26px",
                width: "21px",
                top: "12px",
                left: "12px"
            },
            zs = {
                height: "100%",
                width: "100%",
                top: "0px",
                left: "0px"
            };
        const Ws = 25;

        function Ks(e) {
            return e instanceof HTMLElement || e instanceof SVGElement
        }

        function Ys({
            id: e,
            tagName: t,
            attributes: r,
            dataset: n,
            styles: o
        }) {
            const i = document.querySelector(`${t}#${e}`);
            if (i) return [i, !1];
            const s = ((e, t) => {
                const r = document.createElement(e);
                return Object.keys(t).forEach(e => {
                    const n = t[e];
                    void 0 !== n && r.setAttribute(e, n)
                }), r
            })(t, { ...r,
                id: e
            });
            return n && Object.keys(n).forEach(e => {
                s.dataset[e] = n[e]
            }), Bs(s, o.props, o.options), [s, !0]
        }
        async function Js({
            containerSpec: e,
            iframeSpec: t
        }) {
            await new Promise(e => {
                if (document.body) e();
                else {
                    const t = () => {
                        "loading" !== document.readyState && (e(), document.removeEventListener("readystatechange", t))
                    };
                    document.addEventListener("readystatechange", t)
                }
            });
            const [r, n] = Ys({
                id: e.id,
                tagName: e.tagName,
                styles: {
                    props: e.styles,
                    options: {
                        important: !0
                    }
                },
                attributes: {
                    tabIndex: "-1",
                    ...e.attributes
                },
                dataset: e.dataset
            });
            n && document.body.appendChild(r);
            const o = t.attributes || {},
                [i, s] = Ys({
                    id: t.id,
                    tagName: "iframe",
                    styles: {
                        props: t.styles,
                        options: {
                            important: !0
                        }
                    },
                    attributes: {
                        tabIndex: "-1",
                        ...o,
                        name: t.id,
                        src: t.src
                    }
                });
            if (s) {
                if (t.privileges) {
                    if (! function(e) {
                            return "sandbox" in e
                        }(i)) throw new Zn("browser does not support the sandbox attribute on IFrames");
                    i.setAttribute("sandbox", t.privileges.join(" "))
                }
                r.appendChild(i)
            }
            return {
                container: r,
                iframe: i
            }
        }
        async function Gs({
            state: e,
            extensionsBaseUrl: t,
            onHelperReady: r
        }) {
            const n = await async function({
                    extensionsBaseUrl: e,
                    height: t = 216,
                    position: r = null
                }) {
                    const n = `${e}/web-pixels-helper/h${Pn}m.html`;
                    return Js({
                        containerSpec: {
                            id: "web-pixels-helper-sandbox-container",
                            tagName: "dialog",
                            attributes: {
                                popover: "manual"
                            },
                            styles: { ...r ? {
                                    top: `${r.y}px`,
                                    left: `${r.x}px`,
                                    right: "auto",
                                    bottom: "auto"
                                } : {
                                    top: "max(0px, calc(100% - 770px))",
                                    bottom: "auto",
                                    right: "30px",
                                    left: "auto"
                                },
                                width: "393px",
                                height: `${t}px`,
                                position: "fixed",
                                border: "0",
                                opacity: "0",
                                margin: "0",
                                padding: "0",
                                background: "transparent",
                                overflow: "hidden",
                                visibility: "hidden",
                                transform: "translate(0px, 0px)",
                                "border-radius": "16px",
                                "box-shadow": "rgba(0, 0, 0, 0.2) 0px 3px 5px -1px, rgba(0, 0, 0, 0.14) 0px 5px 8px 0px, rgba(0, 0, 0, 0.12) 0px 1px 14px 0px",
                                transition: "opacity 200ms ease-in-out, height 300ms ease-in-out, top 300ms ease-in-out, box-shadow 300ms",
                                display: "block",
                                "pointer-events": "auto"
                            },
                            dataset: {
                                shopifyPrivacy: "exclude"
                            }
                        },
                        iframeSpec: {
                            id: "web-pixels-helper-sandbox-iframe",
                            src: n,
                            styles: {
                                border: "none",
                                background: "#fff",
                                clip: "initial",
                                display: "inline",
                                margin: "0",
                                opacity: "1",
                                padding: "0",
                                visibility: "visible",
                                width: "100%",
                                height: "100%",
                                "border-radius": "16px"
                            }
                        }
                    })
                }({
                    extensionsBaseUrl: t,
                    height: e.height,
                    position: e.position
                }),
                o = Ls(xs(n.iframe), {
                    callable: ["initializeHelper", "logConsentGranted", "logPixelRegister", "logSubscribe", "logEvent"]
                }),
                i = Xs({
                    state: e,
                    reference: n,
                    onHelperReady: r
                });
            return o.expose({ ...i
                }),
                function(e, t) {
                    if (e.querySelector(`#${Hs}`)) return;
                    const r = document.createElement("div");
                    r.setAttribute("id", Hs), Bs(r, {
                        display: "block",
                        position: "absolute",
                        cursor: "grab",
                        background: "transparent",
                        ...Fs
                    }, {
                        important: !0
                    }), e.appendChild(r), r.addEventListener("mousedown", function({
                        container: e,
                        handle: t,
                        onMove: r
                    }, n) {
                        function o(t) {
                            t.preventDefault();
                            const o = Ws,
                                i = self.innerHeight - Ws,
                                s = Ws,
                                a = self.innerWidth - Ws;
                            if (t.clientY < o || t.clientY > i || t.clientX < s || t.clientX > a) return;
                            r && r(t.clientX - Ws, t.clientY - Ws), n[1] = n[3] - t.clientX, n[2] = n[4] - t.clientY, n[3] = t.clientX, n[4] = t.clientY;
                            const c = new DOMMatrix(getComputedStyle(e).transform),
                                u = c.e,
                                d = c.f,
                                l = u - n[1],
                                p = d - n[2];
                            Bs(e, {
                                transform: `translate(${l}px, ${p}px)`
                            }, {
                                important: !0
                            })
                        }

                        function i(e) {
                            Bs(t, Fs, {
                                important: !0
                            }), self.removeEventListener("mouseup", i), self.removeEventListener("mousemove", o)
                        }
                        return e => {
                            e.preventDefault(), n[3] = e.clientX, n[4] = e.clientY, self.addEventListener("mouseup", i), self.addEventListener("mousemove", o), Bs(t, zs, {
                                important: !0
                            })
                        }
                    }({
                        container: e,
                        handle: r,
                        onMove: t
                    }, {
                        1: 0,
                        2: 0,
                        3: 0,
                        4: 0
                    }))
                }(n.container, (t, r) => {
                    e.setPosition({
                        x: t,
                        y: r
                    })
                }), o
        }
        const Xs = ({
                state: e,
                reference: t,
                onHelperReady: r
            }) => ({
                async setHelperReady() {
                    t.container.showPopover(), Bs(t.container, {
                        visibility: "visible",
                        opacity: "1"
                    }, {
                        important: !0
                    }), r()
                },
                setHeight: ({
                    height: r
                }) => new Promise((n, o) => {
                    try {
                        Bs(t.container, {
                            height: `${r}px`
                        }, {
                            important: !0
                        }), e.setHeight(r), n(!0)
                    } catch (i) {
                        n(!1)
                    }
                }),
                async proceedWithoutConsent() {
                    try {
                        const {
                            success: e
                        } = await
                        function(e, t) {
                            if (ve()) throw new Error("setTrackingConsent is not supported in Node.js environments. This function requires browser APIs (XHR, cookies, window) and can only be called client-side.");
                            if (ot().increment("consent_tracking_api_calls_total", {
                                    method_name: "setTrackingConsent",
                                    api_version: "v1.10"
                                }), function(e) {
                                    if ("boolean" != typeof e && "object" != typeof e) throw new se(`setTrackingConsent received an invalid argument of type "${typeof e}". Expected an object with consent keys. Example: setTrackingConsent({ analytics: true, marketing: false }). See ${ct} for documentation.`);
                                    if ("object" == typeof e) {
                                        const t = Object.keys(e);
                                        if (0 === t.length) throw new se(`The submitted consent object is empty. Expected at least one consent key: ${at}. Example: setTrackingConsent({ analytics: true, marketing: false }). See ${ct} for documentation.`);
                                        for (const e of t)
                                            if (!st.includes(e)) throw new se(`The submitted consent object contains an invalid key: "${e}". Valid keys are: ${at}. Example: setTrackingConsent({ analytics: true, marketing: false }). See ${ct} for documentation.`)
                                    }
                                }(e), void 0 !== t && "function" != typeof t) throw new se(`setTrackingConsent received an invalid callback of type "${typeof t}". The second argument must be a function if provided. Example: setTrackingConsent({ analytics: true }, (error, result) => { ... }). See ${ct} for documentation.`);
                            const r = function(e) {
                                    if (!e) return null;
                                    try {
                                        return ut() ? document.referrer : ""
                                    } catch {
                                        return ""
                                    }
                                }(e.analytics),
                                n = function(e) {
                                    if (!e) return null;
                                    if (!ut()) return "/";
                                    try {
                                        return window.location.pathname + window.location.search
                                    } catch {
                                        return "/"
                                    }
                                }(e.analytics);
                            return et(0, {
                                granular_consent: e,
                                ...null !== r && {
                                    referrer: r
                                },
                                ...null !== n && {
                                    landing_page: n
                                }
                            }, t)
                        }(uo.reduce((e, t) => (e[t] = !0, e), {}));
                        return Boolean(e)
                    } catch (e) {
                        return !1
                    }
                },
                async setClipboard({
                    text: e
                }) {
                    try {
                        return self.navigator.clipboard.writeText(e), !0
                    } catch (t) {
                        return !1
                    }
                },
                async reportTelemetry(e) {
                    ui("helperWindowButtonClick", e)
                }
            }),
            Qs = new Set,
            Zs = "webPixelDebug";
        class ea extends g {
            constructor(e) {
                super(`Helper state is invalid.\n\nState: ${JSON.stringify(e)}`), this.name = "InvalidHelperStateError"
            }
        }
        class ta extends g {
            constructor(e, t) {
                super(`Helper's selected pixel is invalid.\n\nPixel: ${JSON.stringify(t)}\n\nState: ${JSON.stringify(e)}`), this.name = "InvalidPixelHelperError"
            }
        }
        const ra = [b.Custom, b.App];

        function na(e) {
            try {
                sessionStorage.setItem(Zs, JSON.stringify(e))
            } catch {
                t = "Session storage is not available. The Pixel Helper experience may be degraded.", Qs.has(t) || (Qs.add(t), "console" in self && console.warn(t))
            }
            var t
        }

        function oa() {
            Tr(() => sessionStorage.removeItem(Zs))
        }
        const ia = (e, t) => ({
                version: Pn,
                pageUrl: self.location.href,
                surface: e.surface ? ? y.Unknown,
                status: t,
                bundleTarget: An,
                shopId: e.shopId
            }),
            sa = function() {
                const e = new ys(1e3, "newest");
                let t = null;
                return {
                    message(r, n) {
                        const o = () => t ? .call[r](n);
                        if (t) try {
                            o()
                        } catch (i) {
                            ro.notify(i, {
                                context: "createWebPixelsHelper/message/endpoint-call",
                                unhandled: !1,
                                severity: "warning"
                            })
                        } else e ? .add(o)
                    },
                    async init(r) {
                        const n = (() => {
                            try {
                                return (e => {
                                    const t = new URL(window.location.href),
                                        r = t.searchParams.get(Zs),
                                        n = Tr(() => r ? JSON.parse(atob(r)) : null, null);
                                    r && (t.searchParams.delete(Zs), self.history.replaceState(null, "", t.toString()));
                                    const o = Tr(() => JSON.parse(sessionStorage.getItem(Zs) ? ? "null"), null);
                                    if (!n && !o) return null;
                                    const i = {
                                        position: null,
                                        height: 216,
                                        ...n ? ? o
                                    };
                                    if (! function(e) {
                                            return !(!e || !e.pixel || "string" != typeof e.pixel.type || "string" != typeof e.pixel.id || e.pixel.name && "string" != typeof e.pixel.name || "number" != typeof e.height)
                                        }(i)) throw oa(), new ea(i);
                                    const s = e.find(e => e.type === i.pixel.type && e.id === i.pixel.id);
                                    if (!s || !ra.includes(s.type) || s.id.match(/shopify/i)) throw oa(), new ta(i, i.pixel);
                                    return i.pixel = { ...i.pixel,
                                        name: i.pixel.name || s ? .name || ""
                                    }, na(i), {
                                        get pixel() {
                                            return i.pixel
                                        },
                                        get height() {
                                            return i.height
                                        },
                                        get position() {
                                            return i.position
                                        },
                                        setHeight(e) {
                                            i.height = e, na(i)
                                        },
                                        setPosition(e) {
                                            i.position = e, na(i)
                                        }
                                    }
                                })(r.webPixelsConfigList)
                            } catch (e) {
                                ro.notify(e, {
                                    context: "createWebPixelsHelper/init/state",
                                    unhandled: !1,
                                    severity: "warning",
                                    options: {
                                        sampleRate: .001
                                    }
                                }), ui("helperLoad", ia(r, "helper-read-error"))
                            }
                            return null
                        })();
                        if (!n) return;
                        let o = !1;
                        const {
                            shopId: i,
                            surface: s = y.Unknown
                        } = r, a = si("helperLoad", {
                            version: Pn,
                            pageUrl: self.location.href,
                            surface: s,
                            status: "loaded",
                            bundleTarget: An,
                            shopId: i
                        });
                        await Gs({
                            state: n,
                            extensionsBaseUrl: r.extensionsBaseUrl,
                            onHelperReady: () => {
                                o || (ci(a), o = !0)
                            }
                        }).then(o => {
                            if (!o) return;
                            t = o;
                            const i = n.pixel;
                            this.message("initializeHelper", {
                                pixelUid: {
                                    id: i.id,
                                    type: i.type
                                },
                                pixelName: i.name ? ? "",
                                config: r,
                                isCollapsed: n.height <= 216,
                                loggerLevel: Tr(() => "true" === self.localStorage.getItem("pixel-helper-advanced") ? _s.Advanced : _s.Standard, _s.Standard)
                            }), e.forEach(e => e()), e.clear()
                        }).catch(e => {
                            ro.notify(e, {
                                context: "createWebPixelsHelper/init/createHelperSandbox",
                                unhandled: !1,
                                severity: "warning"
                            }), ui("helperLoad", ia(r, "helper-create-error"))
                        })
                    }
                }
            }();

        function aa(e) {
            return "shopify-custom-pixel" === e.id ? "shopify-pixel" : e.type === b.Custom ? "-1" : e.apiClientId ? `${e.apiClientId}` : void 0
        }
        const ca = "[object Undefined]",
            ua = "[object Null]",
            da = ["[object String]", "[object Number]", "[object Boolean]", ca, ua],
            la = e => null === e ? ua : void 0 === e ? ca : Object.prototype.toString.call(e);

        function pa(e) {
            let t = null,
                r = null;

            function n(e) {
                return "[object Object]" === la(e)
            }
            return void 0 === e || n(e) ? {
                isValid: function e(o, i = "root") {
                    if (Array.isArray(o)) return o.every((t, r) => e(t, `${i}[${r}]`));
                    if (n(o)) return Object.keys(o).every(t => e(o[t], `${i}.${t}`));
                    const s = la(o),
                        a = da.includes(s);
                    return a || (r = i, t = `Value of type "${s}" at "${r}" must be one of the following types: ${da.join(", ")}.`), a
                }(e, "root"),
                error: t,
                errorKey: r
            } : (r = "root", t = `Value of type "${la(e)}" at "${r}" must be an object.`, {
                isValid: !1,
                error: t,
                errorKey: r
            })
        }
        const ha = ["page_viewed", "product_viewed", "collection_viewed", "cart_viewed", "clicked", "form_submitted", "input_blurred", "input_focused", "input_changed", "advanced_dom_clicked", "advanced_dom_scrolled", "advanced_dom_window_resized"],
            fa = Bn((e, t) => !!e && Ln(e.toLowerCase()) / 4294967296 <= t, {
                rate: .01
            });

        function ma(e, t, r, n, o = fa) {
            try {
                if (!ha.includes(e.name)) return;
                const i = n();
                i && o.includes(i) && ui("buyerEventSample", {
                    shopId: t,
                    eventType: e.type,
                    eventName: e.name,
                    surface: r,
                    eventPayloadJson: JSON.stringify(e),
                    sessionToken: i
                })
            } catch (i) {
                ro.notify(i, {
                    severity: "warning",
                    unhandled: !1,
                    context: "logBuyerEvent",
                    options: {
                        sampleRate: .2
                    }
                })
            }
        }
        const va = new Set(["innerHeight", "innerWidth", "scrollX", "scrollY", "pageXOffset", "pageYOffset"]);
        let ga = {},
            ya = !1,
            ba = !0;

        function wa() {
            ga.innerHeight = Tr(() => window.innerHeight, 0), ga.innerWidth = Tr(() => window.innerWidth, 0);
            const e = Tr(() => window.scrollX, 0),
                t = Tr(() => window.scrollY, 0);
            ga.scrollX = e, ga.pageXOffset = e, ga.scrollY = t, ga.pageYOffset = t, ba = !1
        }

        function _a() {
            ba = !0
        }
        const Ia = new Proxy(window, {
            get: (e, t) => (ya || (ya = !0, wa(), window.addEventListener("resize", _a, {
                passive: !0
            }), window.addEventListener("scroll", _a, {
                passive: !0
            }), window.addEventListener("orientationchange", _a, {
                passive: !0
            })), va.has(t) ? (ba && wa(), ga[t]) : Tr(() => Reflect.get(e, t)))
        });

        function xa() {
            const e = Ia.location,
                t = Ia.screen,
                r = {
                    href: Tr(() => e ? .href) ? ? "",
                    hash: Tr(() => e ? .hash) ? ? "",
                    host: Tr(() => e ? .host) ? ? "",
                    hostname: Tr(() => e ? .hostname) ? ? "",
                    origin: Tr(() => e ? .origin) ? ? "",
                    pathname: Tr(() => e ? .pathname) ? ? "",
                    port: Tr(() => e ? .port) ? ? "",
                    protocol: Tr(() => e ? .protocol) ? ? "",
                    search: Tr(() => e ? .search) ? ? ""
                };
            return {
                document: {
                    location: r,
                    referrer: Tr(() => document ? .referrer) ? ? "",
                    characterSet: Tr(() => document ? .characterSet) ? ? "",
                    title: Tr(() => document ? .title) ? ? ""
                },
                navigator: {
                    language: Tr(() => navigator ? .language) ? ? "",
                    cookieEnabled: Tr(() => navigator ? .cookieEnabled) ? ? !1,
                    languages: Tr(() => navigator ? .languages) ? ? [],
                    userAgent: Tr(() => navigator ? .userAgent) ? ? ""
                },
                window: {
                    innerHeight: Ia.innerHeight ? ? 0,
                    innerWidth: Ia.innerWidth ? ? 0,
                    outerHeight: Ia.outerHeight ? ? 0,
                    outerWidth: Ia.outerWidth ? ? 0,
                    pageXOffset: Ia.pageXOffset ? ? 0,
                    pageYOffset: Ia.pageYOffset ? ? 0,
                    location: r,
                    origin: Ia.origin ? ? "",
                    screen: {
                        height: Tr(() => t ? .height) ? ? 0,
                        width: Tr(() => t ? .width) ? ? 0
                    },
                    screenX: Ia.screenX ? ? 0,
                    screenY: Ia.screenY ? ? 0,
                    scrollX: Ia.scrollX ? ? 0,
                    scrollY: Ia.scrollY ? ? 0
                }
            }
        }
        var Ea = Yr("getClientId"),
            ka = Yr("sequenceIndices"),
            Sa = Yr("buildEvent"),
            Ca = Yr("getNextSequenceIndex");
        class Ta {
            constructor(e) {
                Object.defineProperty(this, Ca, {
                    value: Pa
                }), Object.defineProperty(this, Sa, {
                    value: Aa
                }), Object.defineProperty(this, Ea, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, ka, {
                    writable: !0,
                    value: new Map
                }), Wr(this, Ea)[Ea] = e
            }
            createEvent(e, t, r = {}) {
                const n = function(e, t, r) {
                    if ("checkout_completed" === e && r.eventId) return r.eventId;
                    const n = {
                        analyticsFramework: "wpm"
                    };
                    try {
                        return "product_added_to_cart" === e && "cartLine" in t && (n.cacheKey = function({
                            cartLine: e
                        } = {
                            cartLine: null
                        }) {
                            const t = e ? .merchandise.product.id,
                                r = e ? .merchandise.id;
                            if (t && r) return `${t}-${r}`
                        }(t)), window.Shopify ? .evids ? .(e, n)
                    } catch {
                        return
                    }
                }(e, t, r);
                return Wr(this, Sa)[Sa]({
                    id: n,
                    name: e,
                    data: t,
                    type: p(e)
                })
            }
            createCustomEvent(e, t = null) {
                return Wr(this, Sa)[Sa]({
                    name: e,
                    customData: t,
                    type: d.Custom
                })
            }
        }

        function Aa(e) {
            const t = Wr(this, Ea)[Ea];
            return { ...e,
                get clientId() {
                    return t()
                },
                timestamp: (new Date).toISOString(),
                context: xa(),
                id: "string" == typeof e.id && e.id.length > 0 ? e.id : sr(),
                seq: Wr(this, Ca)[Ca](e.name)
            }
        }

        function Pa(e) {
            const t = (Wr(this, ka)[ka].get(e) ? ? 0) + 1;
            return Wr(this, ka)[ka].set(e, t), t
        }
        const Oa = "wpmLoggedConversion1",
            Ra = ["thank_you", "thank-you", "post_purchase", "post-purchase"];
        class Na extends g {
            constructor(e) {
                super(`Duplicate conversion event blocked for checkout token: "${e}"`), this.name = "ExcludedConversionError"
            }
        }
        class ja extends g {
            constructor() {
                super("Checkout token unavailable from payload"), this.name = "MissingCheckoutTokenError"
            }
        }
        class Ma extends g {
            constructor() {
                super("Failed to extract valid checkout token from pathname"), this.name = "MissingPathnameCheckoutTokenError"
            }
        }

        function Ua(e) {
            const t = {},
                r = (new Date).getTime();
            for (const [n, o] of Object.entries(e))
                if ("number" == typeof o) {
                    const e = new Date(o);
                    e.setMonth(e.getMonth() + 2), r < e.getTime() && (t[n] = o)
                }
            return t
        }
        const Da = /^\/checkouts\/([^/]+)\/([^/]+)(?:\/((?:[a-z]{2,3}|zh-hans|zh-hant)(?:-[a-zA-Z0-9]+)?))?(?:\/([^/]+))\/?$/,
            $a = (e, t, r, n, o) => {
                const {
                    pixelRuntimeConfig: i
                } = o || {}, {
                    apiClientId: s,
                    restrictions: a
                } = i || {}, {
                    allowedEvents: c,
                    disallowedEvents: u
                } = a || {}, {
                    sendTo: d
                } = n || {}, l = d && String(d) === String(s), p = d && !l, h = !c || c.includes(t), f = u && u.includes(t);
                Boolean(h && !f && !p || l) && e()
            },
            La = (e, t, r, n, o) => {
                if (!v(t)) return void e();
                const {
                    pixelRuntimeConfig: i
                } = o || {}, {
                    capabilities: s,
                    type: a
                } = i || {}, c = s ? .includes(_.AdvancedDomEvents);
                c && a === b.App && e()
            };
        class qa extends g {
            constructor(e) {
                super(`Circular reference detected at "${e}" while applying protected customer data filtering. Event payload contains cyclic structures which are not supported.`), this.name = "ProtectedCustomerDataTransformError"
            }
        }

        function Va(e, t, r) {
            if ("function" == typeof t) {
                const n = t(e, r.context);
                return r.onTransformed ? .(e, n, r.path), n
            }
            if (null == t || "object" != typeof t) return r.onTransformed ? .(e, t, r.path), t;
            if (null == e) return r.onTransformed ? .(e, e, r.path), e;
            if ("object" != typeof e) return r.onTransformed ? .(e, e, r.path), e;
            if (r.ancestors.has(e)) throw new qa(r.path);
            const n = function(e, t, r) {
                return e.get(t) ? .get(r)
            }(r.cache, e, t);
            if (void 0 !== n) return n;
            let o;
            return r.ancestors.add(e), o = Array.isArray(e) ? function(e, t, r) {
                    let n = e;
                    for (let o = 0; o < e.length; o++) {
                        const i = e[o],
                            s = Va(i, t, { ...r,
                                path: `${r.path}[${o}]`
                            });
                        s !== i && (n === e && (n = e.slice()), n[o] = s)
                    }
                    return n
                }(e, t, r) : function(e, t, r) {
                    const n = Object.keys(t);
                    if (0 === n.length) return e;
                    let o = e;
                    for (const i of n)
                        if (i in e) {
                            const n = e[i],
                                s = Va(n, t[i], { ...r,
                                    path: `${r.path}.${i}`
                                });
                            s !== n && (o === e && (o = { ...e
                            }), o[i] = s)
                        }
                    return o
                }(e, t, r), r.ancestors.delete(e),
                function(e, t, r, n) {
                    let o = e.get(t);
                    o || (o = new WeakMap, e.set(t, o)), o.set(r, n)
                }(r.cache, e, t, o), o
        }
        const Ba = Nt(e => {
                const t = e ? .protectedCustomerApprovalScopes ? ? [];
                return {
                    protectedCustomerApprovalScopes: {
                        read_customer_address: t.includes("read_customer_address"),
                        read_customer_email: t.includes("read_customer_email"),
                        read_customer_name: t.includes("read_customer_name"),
                        read_customer_personal_data: t.includes("read_customer_personal_data"),
                        read_customer_phone: t.includes("read_customer_phone")
                    }
                }
            }, {
                cache: new WeakMap,
                cacheKey: e => e
            }),
            Ha = (e, t, r) => r ? .protectedCustomerApprovalScopes ? function(e, t, r) {
                return Va(e, t, {
                    context: r,
                    ancestors: new WeakSet,
                    cache: new WeakMap,
                    path: "$",
                    onTransformed: void 0
                })
            }(e, t, Ba(r)) : e,
            Fa = (e, t = null) => (r, n) => n.protectedCustomerApprovalScopes[e] ? r : t,
            za = {
                data: {
                    checkout: {
                        email: Fa("read_customer_email"),
                        phone: Fa("read_customer_phone"),
                        smsMarketingPhone: Fa("read_customer_phone"),
                        billingAddress: {
                            firstName: Fa("read_customer_name"),
                            lastName: Fa("read_customer_name"),
                            phone: Fa("read_customer_phone"),
                            address1: Fa("read_customer_address"),
                            address2: Fa("read_customer_address"),
                            city: Fa("read_customer_address"),
                            province: Fa("read_customer_address"),
                            provinceCode: Fa("read_customer_address"),
                            zip: Fa("read_customer_address")
                        },
                        shippingAddress: {
                            firstName: Fa("read_customer_name"),
                            lastName: Fa("read_customer_name"),
                            phone: Fa("read_customer_phone"),
                            address1: Fa("read_customer_address"),
                            address2: Fa("read_customer_address"),
                            city: Fa("read_customer_address"),
                            province: Fa("read_customer_address"),
                            provinceCode: Fa("read_customer_address"),
                            zip: Fa("read_customer_address")
                        },
                        order: {
                            customer: {
                                id: Fa("read_customer_personal_data"),
                                isFirstOrder: Fa("read_customer_personal_data")
                            }
                        }
                    }
                }
            },
            Wa = {
                checkout_address_info_submitted: za,
                checkout_completed: za,
                checkout_contact_info_submitted: za,
                checkout_shipping_info_submitted: za,
                checkout_started: za,
                payment_info_submitted: za
            };
        class Ka extends g {
            constructor(e, t) {
                super(`Failed to apply protected customer data filtering for event: ${e}. ${t.message}`), this.name = "ProtectedCustomerDataError"
            }
        }
        const Ya = ["share_all_events"],
            Ja = e => (t, r, n, o, i) => {
                const s = i ? .pixelRuntimeConfig;
                if (!s) return void t();
                const {
                    dataSharingAdjustments: a,
                    dataSharingState: c
                } = s;
                if (ht(s, "9a3ed68a") || s.type === b.Custom && (!pt(mt) || ht(s, "368e946e"))) return void t();
                const {
                    dataSharingControls: u
                } = a ? ? {};
                ((e, t) => Boolean(t) && "unrestricted" !== t && !1 === e ? .includes("share_all_events"))(u, c) ? function(e) {
                    return e ? .filter(e => !Ya.includes(e)) ? ? []
                }(u).length > 0 ? t() : e.emit("log:event-bus:publish:blocked", {
                    pixel: s,
                    event: {
                        name: r,
                        id: n.id
                    }
                }): t()
            },
            Ga = "all_standard_events",
            Xa = "all_custom_events",
            Qa = "all_dom_events";
        class Za extends g {
            constructor(e, t = "PublishEventError") {
                super(e, {
                    groupingHash: `EventBus:${t}`
                }), this.name = t
            }
        }
        const ec = Vn({
            rate: .01
        });

        function tc(e, {
            domEventSampler: t = ec
        } = {}) {
            const {
                shopId: r,
                surface: n,
                emit: o,
                consent: i
            } = e, s = new Ta(() => i.trackingTokens.getUniqueToken()), a = (({
                logError: e
            }) => function(t, r) {
                if ("checkout_completed" !== t) return !1;
                let n = r && "checkout" in r ? r ? .checkout ? .token : null;
                if (n && "string" == typeof n || (e(new ja, {
                        severity: "info",
                        unhandled: !1,
                        context: "isExcludedDuplicateConversion"
                    }), n = function() {
                        try {
                            const e = new URL(window.location.href),
                                t = Da.exec(e.pathname);
                            if (!t) return null;
                            const [, r, n, o, i] = t;
                            return n ? ? null
                        } catch (e) {
                            return null
                        }
                    }()), !n || "string" != typeof n) return e(new Ma, {
                    severity: "info",
                    unhandled: !1,
                    context: "isExcludedDuplicateConversion"
                }), !1;
                if (! function() {
                        try {
                            const e = new URL(window.location.href).pathname.split("/").filter(Boolean);
                            return e.includes("checkouts") && e.some(e => Ra.includes(e))
                        } catch (e) {
                            return !1
                        }
                    }()) return !1;
                const o = function() {
                    try {
                        const e = localStorage.getItem(Oa);
                        if (!e) return {};
                        const t = JSON.parse(e);
                        return "object" != typeof t || null === t ? {} : Ua(t)
                    } catch (e) {
                        return {}
                    }
                }();
                return n in o ? (e(new Na(n), {
                    severity: "info",
                    unhandled: !1,
                    context: "isExcludedDuplicateConversion"
                }), !0) : (function(e, t) {
                    t[e] = (new Date).getTime(),
                        function(e) {
                            try {
                                const t = Ua(e);
                                localStorage.setItem(Oa, JSON.stringify(t))
                            } catch (t) {}
                        }(t)
                }(n, o), !1)
            })(e), c = new ws({
                bufferSize: Number.POSITIVE_INFINITY,
                subscribeAllKey: Ga
            }).use($a, Ja(e), (e => (t, r, n, o, i) => {
                const s = i ? .pixelRuntimeConfig,
                    {
                        dataSharingAdjustments: a
                    } = s || {},
                    c = Wa[r] ? ? null;
                if (c && (s ? .type !== b.Custom || pt(mt))) try {
                    t(Ha(n, c, a))
                } catch (u) {
                    e.logError(new Ka(r, u instanceof Error ? u : new Error(String(u))), {
                        context: "eventBus/middleware/protected-customer-data",
                        unhandled: !1,
                        severity: "error",
                        pixelId: s ? .id
                    })
                } else t()
            })(e)), u = new ws({
                bufferSize: 1e3,
                subscribeAllKey: Xa
            }).use($a, Ja(e)), l = new ws({
                bufferSize: 1e3,
                replayKeep: "newest",
                subscribeAllKey: Qa
            }).use($a), g = new ws({
                bufferSize: 1e3,
                replayKeep: "newest"
            }).use($a, La);
            return {
                publish(e, t, b) {
                    if (!pt(ft) && n !== y.CustomerAccount) return function(e, t, u) {
                        if ("string" != typeof e) throw new Za("Expected event name to be a string, but got " + typeof e, "LegacyPublishStandardEventError");
                        if (!h(e)) return !1;
                        const d = pa(t);
                        if (!d.isValid) return console.error(d.error), !1;
                        const l = s.createEvent(e, t, u),
                            p = l.data ? .checkout ? .token;
                        return ma(l, r, n, () => i.trackingTokens.getVisitToken()), ui("eventPublish", {
                            version: Pn,
                            bundleTarget: An,
                            pageUrl: self.location.href,
                            shopId: r,
                            surface: n,
                            eventName: l.name,
                            eventType: l.type,
                            extensionId: u ? .extension ? .extensionId,
                            extensionAppId: u ? .extension ? .appId,
                            extensionType: u ? .extension ? .type,
                            userCanBeTracked: dt().toString(),
                            eventId: l.id,
                            checkoutToken: p,
                            checkoutCompletedPageType: u ? .checkoutCompletedPageType
                        }), o("log:event-bus:publish", {
                            event: l,
                            options: u
                        }), !a(e, l.data) && c.publish(l.name, l)
                    }(e, t, b);
                    if ("string" != typeof e) {
                        const t = JSON.stringify(e);
                        throw new Za(`Expected event name "${t}" to be a string, but got ${typeof e}`, "PublishEventError")
                    }
                    if (p(e) === d.Meta) return !1;
                    const w = pa(t);
                    if (!w.isValid) {
                        if (m(e) || v(e)) {
                            const r = new Za(`Input Validation Error for event ${e}: ${w.error}\nPayload: ${JSON.stringify(t)}`, "PublishAdvancedDomEventError");
                            return ro.notify(r, {
                                type: "metric",
                                context: "publish/invalidPayload"
                            }), !1
                        }
                        return console.error(w.error), !1
                    }
                    let _;
                    if (_ = f(e) ? s.createCustomEvent(e, t) : s.createEvent(e, t, b), f(e) || h(e)) {
                        let t = {
                            version: Pn,
                            bundleTarget: An,
                            pageUrl: self.location.href,
                            shopId: r,
                            surface: n,
                            eventName: _.name,
                            eventType: _.type,
                            extensionId: b ? .extension ? .extensionId,
                            extensionAppId: b ? .extension ? .appId,
                            extensionType: b ? .extension ? .type,
                            eventId: _.id
                        };
                        if (h(e)) {
                            const e = _.data ? .checkout ? .token;
                            ma(_, r, n, () => i.trackingTokens.getVisitToken()), t = { ...t,
                                userCanBeTracked: dt().toString(),
                                checkoutToken: e,
                                checkoutCompletedPageType: b ? .checkoutCompletedPageType
                            }
                        }
                        ui("eventPublish", t)
                    } else ma(_, r, n, () => i.trackingTokens.getVisitToken());
                    return o("log:event-bus:publish", {
                        event: _,
                        options: b
                    }), !a(e, _.data) && (h(e) ? c.publish(e, _) : m(e) ? l.publish(e, _) : v(e) ? g.publish(e, _) : u.publish(e, _, b))
                },
                publishCustomEvent(e, t, o) {
                    if (pt(ft)) return this.publish(e, t, o);
                    if ("string" != typeof e) throw new Za("Expected event name to be a string, but got " + typeof e, "PublishCustomEventError");
                    if (!f(e)) return !1;
                    const i = pa(t);
                    if (!i.isValid) return console.error(i.error), !1;
                    const a = s.createCustomEvent(e, t);
                    return ui("eventPublish", {
                        version: Pn,
                        bundleTarget: An,
                        pageUrl: self.location.href,
                        shopId: r,
                        surface: n,
                        eventName: a.name,
                        eventType: "custom",
                        extensionId: o ? .extension ? .extensionId,
                        extensionAppId: o ? .extension ? .appId,
                        extensionType: o ? .extension ? .type,
                        eventId: a.id
                    }), u.publish(e, a, o)
                },
                publishDomEvent(e, t, o) {
                    if (pt(ft)) return this.publish(e, t, o);
                    if ("string" != typeof e) {
                        const t = JSON.stringify(e);
                        throw new Za(`Expected event name "${t}" to be a string, but got ${typeof e}`, "PublishDomEventError")
                    }
                    if (!m(e) && !v(e)) throw new Za(`Event name "${e}" is not a supported DOM Event`, "PublishDomEventError");
                    const a = pa(t);
                    if (!a.isValid) {
                        const t = new Za(`Input Validation Error for event ${e}: ${a.error}`, "PublishDomEventError");
                        return ro.notify(t, {
                            type: "metric",
                            context: "publishDomEvent/invalidPayload"
                        }), !1
                    }
                    const c = s.createEvent(e, t, o);
                    return ma(c, r, n, () => i.trackingTokens.getVisitToken()), v(e) ? g.publish(e, c) : l.publish(e, c)
                },
                subscribe(e, r, n = {}) {
                    const o = sr(),
                        i = async i => {
                            await Or();
                            const s = {
                                    configuration: n.pixelRuntimeConfig ? .configuration,
                                    eventPayloadVersion: n.schemaVersion || n.pixelRuntimeConfig ? .eventPayloadVersion || "unknown",
                                    id: n.pixelRuntimeConfig ? .id || "unknown",
                                    type: n.pixelRuntimeConfig ? .type || "unknown",
                                    runtimeContext: n.pixelRuntimeConfig ? .runtimeContext || "unknown",
                                    restrictions: n.pixelRuntimeConfig ? .restrictions,
                                    scriptVersion: n.pixelRuntimeConfig ? .scriptVersion || "unknown",
                                    apiClientId: n.pixelRuntimeConfig ? .apiClientId,
                                    name: n.pixelRuntimeConfig ? .name
                                },
                                a = {
                                    pixelUid: {
                                        id: s.id,
                                        type: s.type
                                    },
                                    event: i,
                                    eventNameAsSubscribed: e,
                                    subscriptionId: o,
                                    status: "SUCCESS"
                                };
                            let c;
                            try {
                                await r.call(i, i), sa.message("logEvent", a)
                            } catch (v) {
                                c = v, sa.message("logEvent", { ...a,
                                    status: "FAIL",
                                    error: c
                                })
                            }
                            const u = p(i.name),
                                l = {
                                    version: Pn,
                                    bundleTarget: An,
                                    pageUrl: self.location.href,
                                    shopId: n.shopId,
                                    surface: n.surface,
                                    pixelName: s.name,
                                    pixelId: s.id,
                                    pixelAppId: aa(s),
                                    pixelSource: s.type,
                                    pixelRuntimeContext: s.runtimeContext,
                                    pixelScriptVersion: s.scriptVersion,
                                    pixelConfiguration: s.configuration,
                                    pixelEventSchemaVersion: s.eventPayloadVersion,
                                    eventName: i.name,
                                    eventId: i.id
                                },
                                f = c ? "FAILURE" : "SUCCESS",
                                m = c ? String(c) : void 0;
                            if ([d.Dom, d.AdvancedDom].includes(u)) t.includes(s.id) && ui("subscriberEventEmitDom", { ...l,
                                status: f,
                                errorMessage: m
                            });
                            else {
                                let e;
                                h(i.name) && (e = i ? .data ? .checkout ? .token), ui("subscriberEventEmit", { ...l,
                                    eventType: u,
                                    checkoutToken: e || void 0,
                                    status: f,
                                    errorMessage: m
                                })
                            }
                        };
                    if (v(e)) return g.subscribe(e, i, n);
                    if ("all_events" === e) {
                        const e = c.subscribe(Ga, i, n),
                            t = u.subscribe(Xa, i, n),
                            r = l.subscribe(Qa, i, n);
                        return () => {
                            const n = e(),
                                o = t(),
                                i = r();
                            return n && o && i
                        }
                    }
                    return e === Xa ? u.subscribe(Xa, i, n) : e === Ga || h(e) ? c.subscribe(e, i, n) : e === Qa || m(e) ? l.subscribe(e, i, n) : u.subscribe(e, i, n)
                }
            }
        }
        const rc = ["31014027265", "28638674945", "44186959873"],
            nc = Object.values(y),
            oc = [y.NotAvailable, y.Unknown, y.StorefrontRenderer],
            ic = [y.CheckoutOneShopApp, y.CheckoutOneNativeShopApp, y.CheckoutOneSdkShopApp, y.CheckoutKitShopApp],
            sc = [y.CheckoutOne, y.CheckoutOneSdk, y.CheckoutKit, ...ic];
        let ac = function(e) {
                return e.WebPixelExtension = "web-pixel-extension", e.Unknown = "unknown", e
            }({}),
            cc = function(e) {
                return e.Storefront = "storefront", e.Checkout = "checkout", e.Unknown = "unknown", e
            }({}),
            uc = function(e) {
                return e.Custom = "custom", e.All = "all", e
            }({});
        const dc = {
            customer: {
                id: Fa("read_customer_personal_data", ""),
                email: Fa("read_customer_email"),
                firstName: Fa("read_customer_name"),
                lastName: Fa("read_customer_name"),
                ordersCount: Fa("read_customer_personal_data"),
                phone: Fa("read_customer_phone")
            }
        };
        class lc extends g {
            constructor(e) {
                super(`Failed to apply protected customer data filtering to init data. ${e.message}`), this.name = "ProtectedCustomerDataInitError"
            }
        }

        function pc(e, t, r) {
            const {
                consent: n
            } = e, o = {
                context: xa(),
                data: {
                    customer: (a = t.customer, a ? {
                        email: a.email,
                        firstName: a.firstName,
                        id: a.id,
                        lastName: a.lastName,
                        phone: a.phone,
                        ordersCount: a.ordersCount
                    } : null),
                    cart: (s = t.cart, s ? {
                        id: s ? .id,
                        cost: {
                            totalAmount: {
                                amount: s ? .cost ? .totalAmount ? .amount,
                                currencyCode: s ? .cost ? .totalAmount ? .currencyCode
                            }
                        },
                        lines: s ? .lines,
                        totalQuantity: s ? .totalQuantity,
                        attributes: s ? .attributes
                    } : null),
                    shop: t.shop,
                    purchasingCompany: (i = t.purchasingCompany, i ? {
                        company: i.company,
                        location: i.location
                    } : null)
                },
                customerPrivacy: {
                    analyticsProcessingAllowed: n.analyticsProcessingAllowed(),
                    marketingAllowed: n.marketingAllowed(),
                    preferencesProcessingAllowed: n.preferencesProcessingAllowed(),
                    saleOfDataAllowed: n.saleOfDataAllowed()
                }
            };
            var i, s, a;
            const c = function(e, t) {
                const {
                    dataSharingAdjustments: r
                } = t;
                if (t.type === b.Custom && !pt(mt)) return e;
                try {
                    return Ha(e, dc, r)
                } catch (n) {
                    return ro.notify(new lc(n instanceof Error ? n : new Error(String(n))), {
                        context: "createRegisterInit/filterProtectedCustomerData",
                        unhandled: !1,
                        severity: "error",
                        pixelId: t.id
                    }), { ...e,
                        customer: e.customer ? { ...e.customer,
                            id: "",
                            email: null,
                            firstName: null,
                            lastName: null,
                            ordersCount: null,
                            phone: null
                        } : null
                    }
                }
            }(o.data, r);
            return { ...o,
                data: c
            }
        }
        const hc = new Set;

        function fc(e) {
            hc.add(e)
        }

        function mc(e, {
            eventBus: t,
            customerPrivacyEventBus: r,
            webPixelConfig: n,
            initData: o,
            forRPC: i = !1
        }) {
            const {
                shopId: s,
                surface: a
            } = e;
            let c = {};
            try {
                c = n.configuration ? JSON.parse(n.configuration) : {}
            } catch (d) {}
            const u = function(e) {
                return e === y.Shopify || sc.includes(e) ? cc.Checkout : e === y.StorefrontRenderer ? cc.Storefront : cc.Unknown
            }(a);
            return {
                analytics: {
                    subscribe(e, r, o) {
                        i && As(r);
                        const c = t.subscribe(e, r, { ...o,
                            pixelRuntimeConfig: n,
                            shopId: s,
                            surface: a,
                            scope: ac.WebPixelExtension
                        });
                        return fc(() => {
                            c(), i && Tr(() => Os(r))
                        }), c
                    }
                },
                browser: {
                    cookie: {
                        get: async e => e ? Lt(e) ? ? "" : Dt() ? ? "",
                        set: async (e, t) => {
                            if (t) {
                                const r = `${e}=${t}`;
                                document.cookie = r
                            } else document.cookie = e;
                            return Dt() ? ? ""
                        }
                    },
                    sendBeacon: async (e, t = "") => {
                        if (e.includes(self.location.origin) && !e.match(/\/\.well-known\/shopify\/monorail\/unstable\/produce_batch/)) return !1;
                        const r = new window.Blob([t], {
                            type: "text/plain"
                        });
                        return Tr(() => window.navigator.sendBeacon(e, r), !1)
                    },
                    localStorage: {
                        setItem: async (e, t) => {
                            Tr(() => window.localStorage.setItem(e, t))
                        },
                        getItem: async e => Tr(() => window.localStorage.getItem(e), null),
                        key: async e => Tr(() => window.localStorage.key(e), null),
                        removeItem: async e => {
                            Tr(() => window.localStorage.removeItem(e))
                        },
                        clear: async () => {
                            Tr(() => window.localStorage.clear())
                        },
                        length: async () => Tr(() => window.localStorage.length, 0)
                    },
                    sessionStorage: {
                        setItem: async (e, t) => {
                            Tr(() => window.sessionStorage.setItem(e, t))
                        },
                        getItem: async e => Tr(() => window.sessionStorage.getItem(e), null),
                        key: async e => Tr(() => window.sessionStorage.key(e), null),
                        removeItem: async e => {
                            Tr(() => window.sessionStorage.removeItem(e))
                        },
                        clear: async () => {
                            Tr(() => window.sessionStorage.clear())
                        },
                        length: async () => Tr(() => window.sessionStorage.length, 0)
                    }
                },
                settings: c,
                init: pc(e, o, n),
                _pixelInfo: { ...n,
                    surface: a,
                    surfaceNext: u
                },
                customerPrivacy: {
                    subscribe(e, t, o) {
                        i && As(t);
                        const c = r.subscribe(e, t, { ...o,
                            pixelRuntimeConfig: n,
                            shopId: s,
                            surface: a,
                            scope: ac.WebPixelExtension
                        });
                        return fc(() => {
                            c(), i && Tr(() => Os(t))
                        }), c
                    }
                }
            }
        }
        window.addEventListener("pagehide", ({
            persisted: e
        }) => {
            e || (hc.forEach(e => {
                Tr(e)
            }), hc.clear())
        }, {
            capture: !0
        });
        let vc, gc = function(e) {
            return e.Wpm = "wpm", e.WebPixels = "web-pixels", e
        }({});
        class yc extends Error {
            constructor(e, t) {
                super(e), this.url = void 0, this.name = "WebWorkerTopLevelError", this.url = t
            }
        }
        class bc extends Error {
            constructor(...e) {
                super(...e), this.name = "SandboxAlreadyCreatedError", this.message = "Sandbox already created."
            }
        }
        class wc extends Error {
            constructor(e, t) {
                super(e), this.name = "PixelInitializationError", this.stack = t
            }
        }
        class _c extends g {
            constructor(...e) {
                super(...e), this.name = "InvalidExtensionPointError", this.message = "Invalid Extension Point"
            }
        }
        const Ic = new Map;
        async function xc(e, t) {
            let r = !1,
                n = null;
            const {
                webPixelConfig: o,
                eventBus: i
            } = t, {
                shopId: s,
                surface: a
            } = e, c = o.id, u = o.type.toLowerCase(), d = gc.WebPixels;
            var l, p;
            switch (o.restrictions || (o.restrictions = function(e, t) {
                const r = {};
                return rc.includes(String(e)) && (r.allowedEvents = [], t !== y.StorefrontRenderer && (r.preventLoadingBeforeEvent = `shopify:app:pixels:load:${e}`)), r
            }(String(o.apiClientId), a)), await Promise.all([(async () => {
                await po(function(e) {
                    if (e) return uo.reduce((t, r) => (t[r] = e.includes(r.toUpperCase()), t), {})
                }(o.privacyPurposes)), sa.message("logConsentGranted", {
                    pixelUid: {
                        id: c,
                        type: o.type
                    }
                })
            })(), (l = (e, t) => i.subscribe(e, t, {
                pixelRuntimeConfig: {
                    apiClientId: "PIXEL-LOADER"
                }
            }), p = o.restrictions ? .preventLoadingBeforeEvent, new Promise((e, t) => {
                void 0 === p ? e(!0) : l(p, () => {
                    e(!0)
                })
            }))]), ri("pixel:register", "start", {
                pixelId: c,
                source: u
            }), o.runtimeContext) {
                case w.Lax:
                case w.Strict:
                    try {
                        r = await async function(e, {
                            webPixelConfig: t,
                            eventBus: r,
                            customerPrivacyEventBus: n,
                            initData: o,
                            cookieRestrictedDomains: i,
                            pixelPath: s
                        }) {
                            const {
                                shopId: a,
                                storefrontBaseUrl: c
                            } = e, u = `web-pixel-sandbox-${t.type}-${t.id}-${t.runtimeContext}-${Pn}`;
                            if (t.runtimeContext === w.Lax && document.getElementById(u)) {
                                const e = new bc;
                                throw ro.notify(e, {
                                    type: "metric",
                                    pixelId: t.id,
                                    pixelType: t.type,
                                    runtimeContext: t.runtimeContext,
                                    shopId: a,
                                    context: "createWebPixelSandbox/alreadyCreatedError",
                                    userAgent: self.navigator.userAgent,
                                    hashVersionSandbox: Pn,
                                    sandboxUrl: self.location.href || "unknown",
                                    options: {
                                        sampleRate: .15
                                    }
                                }), e
                            }
                            let d, l;
                            switch (t.runtimeContext) {
                                case w.Strict:
                                    [d, l] = await async function({
                                        sandboxId: e,
                                        webPixelConfig: t,
                                        storefrontBaseUrl: r,
                                        pixelPath: n = gc.Wpm
                                    }) {
                                        const o = t.id,
                                            i = [pn(r), `/${n}`, `@${Pn}`, `/web-pixel-${o}`, `@${t.scriptVersion}`, "/sandbox", `/worker.${An}.js`].join(""),
                                            s = new Worker(i, {
                                                name: e,
                                                type: "classic",
                                                credentials: "omit"
                                            }),
                                            a = new Promise((e, t) => {
                                                const r = e => {
                                                    s.removeEventListener("error", r), t(e ? .filename && e ? .lineno && e ? .message ? new yc(e.message, i) : new g(`Failed to load web worker for pixel ${o} with url ${i}}`, {
                                                        groupingHash: "WebPixelCreateWebWorkerSandbox:WebWorkerLoadError"
                                                    }))
                                                };
                                                s.addEventListener("error", r)
                                            });
                                        return [s, a]
                                    }({
                                        sandboxId: u,
                                        webPixelConfig: t,
                                        storefrontBaseUrl: c,
                                        pixelPath: s
                                    });
                                    break;
                                case w.Lax:
                                    [d, l] = await async function({
                                        sandboxId: e,
                                        webPixelConfig: t,
                                        storefrontBaseUrl: r,
                                        pixelPath: n = gc.Wpm
                                    }) {
                                        const {
                                            search: o
                                        } = self.location, i = t.id, s = t.type.toLowerCase(), a = [pn(r), `/${n}`, `@${Pn}`, `/${s}`, `/web-pixel-${i}`, `@${t.scriptVersion}`, "/sandbox", `/${An}`, /\.(js|json|xml)$/.test(self.location.pathname) ? "" : self.location.pathname, o].join(""), {
                                            iframe: c
                                        } = await Js({
                                            containerSpec: {
                                                id: "web-pixels-manager-sandbox-container",
                                                tagName: "div",
                                                styles: {
                                                    height: "0",
                                                    width: "0",
                                                    position: "fixed",
                                                    visibility: "hidden",
                                                    overflow: "hidden",
                                                    "z-index": "-100",
                                                    margin: "0",
                                                    padding: "0",
                                                    border: "0"
                                                },
                                                attributes: {
                                                    "aria-hidden": "true"
                                                },
                                                dataset: {
                                                    shopifyPrivacy: "exclude"
                                                }
                                            },
                                            iframeSpec: {
                                                id: e,
                                                src: a,
                                                privileges: ["allow-scripts", "allow-forms"],
                                                styles: {
                                                    height: "0",
                                                    width: "0",
                                                    visibility: "hidden"
                                                },
                                                attributes: {
                                                    "aria-hidden": "true"
                                                }
                                            }
                                        }), {
                                            promise: u,
                                            reject: d
                                        } = $n();
                                        let l;
                                        const p = () => {
                                            l = setTimeout(() => {
                                                d(new g(`Failed to load iframe for pixel ${i} with url ${a}`, {
                                                    groupingHash: "WebPixelCreateIframeSandbox:IframeLoadError"
                                                }))
                                            }, 1e3)
                                        };
                                        c.addEventListener("load", p);
                                        const h = xs(c);
                                        return h.addEventListener("message", e => {
                                            "remote-ui::ready" === e.data && (clearTimeout(l), c.removeEventListener("load", p))
                                        }), [h, u]
                                    }({
                                        sandboxId: u,
                                        webPixelConfig: t,
                                        storefrontBaseUrl: c,
                                        pixelPath: s
                                    });
                                    break;
                                default:
                                    throw new g(`Unsupported runtime context: ${t.runtimeContext}`, {
                                        groupingHash: "WebPixelCreateSandbox:UnsupportedRuntimeContext"
                                    })
                            }
                            const p = Ls(d, {
                                    callable: ["initialize"]
                                }),
                                h = mc(e, {
                                    eventBus: r,
                                    customerPrivacyEventBus: n,
                                    webPixelConfig: t,
                                    initData: o,
                                    forRPC: !0
                                }),
                                f = xa();
                            let m = {
                                status: "unknown",
                                hashVersion: "unknown",
                                sandboxUrl: "unknown"
                            };
                            const v = t.runtimeContext === w.Lax ? (vc || (vc = {
                                    localStorageItems: { ...self.localStorage
                                    },
                                    sessionStorageItems: { ...self.sessionStorage
                                    }
                                }), vc) : {
                                    localStorageItems: {},
                                    sessionStorageItems: {}
                                },
                                y = [p.call.initialize({
                                    pageTitle: self.document.title,
                                    webPixelConfig: t,
                                    shopId: a,
                                    webPixelApi: h,
                                    cookieRestrictedDomains: i,
                                    cookie: Dt() ? ? "",
                                    origin: self.origin,
                                    referrer: self.document.referrer,
                                    ...v
                                }).then(e => {
                                    m = e
                                }).catch(e => {
                                    throw new wc(e.toString(), e.stack ? ? "")
                                })];
                            if (l && y.push(l), await Promise.race(y), Pn !== m.hashVersion) {
                                const e = new g(`The main bundle hash (${Pn}) does not match the sandbox hash (${m.hashVersion})`, {
                                    groupingHash: "WebPixelCreateSandbox:HashMismatch"
                                });
                                throw ro.notify(e, {
                                    type: "metric",
                                    severity: "warning",
                                    pixelId: t.id,
                                    pixelType: t.type,
                                    runtimeContext: t.runtimeContext,
                                    context: "createSandbox/hashMismatch",
                                    shopId: a,
                                    userAgent: f.navigator.userAgent || self.navigator.userAgent,
                                    hashVersionSandbox: m.hashVersion,
                                    sandboxUrl: m.sandboxUrl
                                }), e
                            }
                            return !0
                        }(e, { ...t,
                            pixelPath: d
                        })
                    } catch (b) {
                        n = b, r = !1
                    }
                    break;
                case w.Open:
                    try {
                        r = await async function(e, {
                            webPixelConfig: t,
                            eventBus: r,
                            customerPrivacyEventBus: n,
                            initData: o,
                            pixelPath: i = gc.Wpm
                        }) {
                            const {
                                storefrontBaseUrl: s
                            } = e, {
                                promise: a,
                                resolve: c,
                                reject: u
                            } = $n(), {
                                id: d,
                                type: l,
                                integrityHash: p
                            } = t, h = `${d}-${l}`.toLowerCase();
                            Ic.set(h, () => ({
                                webPixelApi: mc(e, {
                                    eventBus: r,
                                    customerPrivacyEventBus: n,
                                    webPixelConfig: t,
                                    initData: o,
                                    forRPC: !0
                                }),
                                resolve: c,
                                reject: u
                            }));
                            const f = [pn(s), `/${i}@${Pn}`, `/${t.type.toLocaleLowerCase()}`, `/web-pixel-${d}@${t.scriptVersion}`, "~2", `/pixel.${An}.js`].join("");
                            if (!self[Cn]) {
                                const e = new g(`${Cn} was not found on the global scope. ${Cn}.createShopifyExtend() was not exposed to the window.`, {
                                    groupingHash: "WebPixelOpen:GlobalObjectMissing",
                                    severity: "warning"
                                });
                                return ro.notify(e, {
                                    type: "metric",
                                    context: "createWebPixelOpen/globalObjectMissing",
                                    severity: "warning",
                                    unhandled: !1
                                }), u(e), a
                            }
                            if (!("createShopifyExtend" in self[Cn])) {
                                const e = (e, t) => {
                                    let r;
                                    try {
                                        r = document.currentScript ? .dataset || {}
                                    } catch (b) {
                                        r = {}, ro.notify(b, {
                                            type: "metric",
                                            context: "createWebPixel/createWebPixelOpen/createShopifyExtend",
                                            unhandled: !1
                                        })
                                    }
                                    let {
                                        pixelId: n,
                                        pixelType: o
                                    } = r;
                                    if (n && o || (n = e, o = t), !n || !o) return u(new g("No pixelId or pixelType found in script tag or params.", {
                                        groupingHash: "WebPixelOpen:NoPixelIdOrType"
                                    })), null;
                                    const i = `${n}-${o}`.toLowerCase(),
                                        s = Ic.get(i);
                                    if (!s) return u(new g(`No openPixelFn found for ${i}.`, {
                                        groupingHash: "WebPixelOpen:NoOpenPixelFn"
                                    })), null;
                                    const {
                                        resolve: a,
                                        reject: c,
                                        webPixelApi: d
                                    } = s();
                                    return d || c(new g(`No api found for pixel ${i}.`, {
                                        groupingHash: "WebPixelOpen:NoApiFound"
                                    })), Object.freeze({
                                        extend: (e, t) => {
                                            "WebPixel::Render" !== e && c(new _c(`Invalid extension point: ${e}`, {
                                                groupingHash: "WebPixelOpen:InvalidExtensionPoint"
                                            }));
                                            try {
                                                t.call(d, d), a(!0)
                                            } catch (b) {
                                                c(new g(b, {
                                                    groupingHash: "WebPixelOpen:PixelCallbackError"
                                                }))
                                            }
                                        }
                                    })
                                };
                                cs(self[Cn], "createShopifyExtend", {
                                    value: e,
                                    enumerable: !1,
                                    writable: !1,
                                    configurable: !1
                                })
                            }
                            var m, v;
                            return await (m = f, v = e => {
                                e.dataset.pixelId = d, e.dataset.pixelType = l, p ? (e.integrity = p, e.crossOrigin = "anonymous") : ro.notify(new g(`Missing integrityHash for SRI-enabled open pixel of type ${l} with id ${d} and src ${f}`, {
                                    groupingHash: "WebPixelOpen:MissingIntegrityHash"
                                }), {
                                    type: "metric",
                                    context: "createWebPixelOpen/loadScript",
                                    severity: "warning",
                                    unhandled: !1
                                })
                            }, new Promise((e, t) => {
                                try {
                                    const r = document.createElement("script");
                                    r.src = m, r.async = !0, r.onload = () => {
                                        e()
                                    }, r.onerror = () => {
                                        n(), t(new g(`Failed to load script: ${m}`, {
                                            groupingHash: "WebPixelOpen:LoadScriptError"
                                        }))
                                    };
                                    const n = () => {
                                        r.onload = null, r.onerror = null, r.remove()
                                    };
                                    v && v(r);
                                    const o = document.head ? ? document.body ? ? document.documentElement;
                                    if (!o) return n(), void t(new g(`No DOM insertion target (head/body/documentElement) available to load script: ${m}`));
                                    o.appendChild(r)
                                } catch (b) {
                                    t(b)
                                }
                            })), a
                        }(e, { ...t,
                            pixelPath: d
                        })
                    } catch (b) {
                        n = b, r = !1
                    }
                    break;
                default:
                    {
                        const e = new g(`Invalid runtimeContext: ${o.runtimeContext}`, {
                            groupingHash: "WebPixel:InvalidRuntimeContext"
                        });
                        throw sa.message("logPixelRegister", {
                            pixelUid: {
                                id: c,
                                type: o.type
                            },
                            status: "FAIL",
                            errorType: "PixelRegistrationError",
                            error: e
                        }),
                        e
                    }
            }
            const h = aa(o),
                {
                    measurement: f
                } = ei("pixel:register", {
                    pixelId: c,
                    source: u
                });
            n && !r ? sa.message("logPixelRegister", {
                pixelUid: {
                    id: c,
                    type: o.type
                },
                status: "FAIL",
                errorType: n instanceof wc ? "PixelInitializationError" : "PixelRegistrationError",
                error: n
            }) : r && sa.message("logPixelRegister", {
                pixelUid: {
                    id: c,
                    type: o.type
                },
                status: "SUCCESS"
            });
            const m = n ? "failed" : "registered",
                v = n ? n.message : void 0;
            return ui("register", {
                version: Pn,
                pageUrl: self.location.href,
                shopId: s,
                surface: a,
                pixelId: c,
                pixelAppId: h,
                pixelSource: o.type,
                pixelRuntimeContext: o.runtimeContext,
                pixelScriptVersion: o.scriptVersion,
                pixelConfiguration: o ? .configuration,
                pixelEventSchemaVersion: o.eventPayloadVersion,
                pixelName: o.name,
                status: m,
                userCanBeTracked: dt().toString(),
                bundleTarget: An,
                errorMsg: v,
                duration: f ? .duration,
                startTime: f ? .startTime,
                sessionId: e.sessionId
            }), r
        }
        const Ec = new RegExp(["password", "pass", "pw", "ssn", "sin", "social", "security", "cc", "card", "creditcard", "cvv", "cvc", "cvn", "billing", "license", "health", "secret", "unique"].map(e => `^(.*[^a-z])?${e}([^a-z].*)?$`).join("|"), "i"),
            kc = function(e, {
                cache: t,
                cacheKey: r
            } = {}) {
                if ("function" != typeof queueMicrotask) return e;
                const n = t ? ? Ot();
                let o = !1;
                const i = Nt(e, {
                    cache: n,
                    cacheKey: r
                });
                return function(...e) {
                    return o || (queueMicrotask(() => {
                        n.clear(), o = !1
                    }), o = !0), i(...e)
                }
            }(function(e) {
                return !!Ks(e) && null !== e.closest('script, iframe, [data-shopify-privacy="exclude"]')
            }, {
                cacheKey: e => e
            }),
            Sc = ["id", "name", "type"],
            Cc = (e, t) => ("value" in t && "string" == typeof t.value && (e => {
                if (!Ks(e)) return !1;
                if ("redact" === e.dataset ? .shopifyPrivacy) return !0;
                for (const t of Sc) {
                    const r = e.getAttribute(t);
                    if ("string" == typeof r && Ec.test(r)) return !0
                }
                return !1
            })(e) && (t.value = "******"), t);

        function Tc(e, t, r) {
            if (t in e) try {
                const r = e[t],
                    n = typeof r;
                if ("string" === n || "number" === n || "boolean" === n) return r
            } catch (n) {
                ro.notify(n, {
                    context: "createDomEventsListener/getElementAttributes/getElementAttribute",
                    type: "metric"
                })
            }
            return e.getAttribute(t) ? ? r
        }

        function Ac(e, t, r) {
            const n = {};
            for (const o of t) {
                const t = Tc(e, o, r ? .[o]);
                void 0 !== t && (n[o] = t)
            }
            return Cc(e, n), n
        }
        const Pc = {
                id: null,
                href: null,
                name: null,
                tagName: null,
                type: null,
                value: null
            },
            Oc = Object.keys(Pc);

        function Rc(e) {
            return Ac(e, Oc, Pc)
        }
        const Nc = ["screenX", "screenY", "pageX", "pageY", "clientX", "clientY", "offsetX", "offsetY", "movementX", "movementY"],
            jc = Nc.reduce((e, t) => (e[t] = 0, e), {});
        let Mc = 0,
            Uc = new WeakMap;

        function Dc(e) {
            if (!e) return -1;
            let t = Uc.get(e);
            return void 0 === t && (t = Mc++, Uc.set(e, t)), t
        }
        let $c = new WeakMap;
        const Lc = {
            parentSerializationId: -1,
            prevSiblingSerializationId: -1
        };

        function qc(e) {
            if (!e) return Lc;
            let t = $c.get(e);
            if (void 0 === t) {
                let r = e.previousSibling;
                for (; r && kc(r);) r = r.previousSibling;
                t = {
                    parentSerializationId: Dc(e.parentNode),
                    prevSiblingSerializationId: Dc(r)
                }, Vc(e, t)
            }
            return t
        }

        function Vc(e, t) {
            $c.set(e, t)
        }

        function Bc(e) {
            $c.delete(e)
        }

        function Hc(e) {
            const t = e.nodeType;
            if (t === Node.ELEMENT_NODE) {
                const r = e,
                    n = {},
                    o = r.attributes;
                if (o)
                    for (let e = 0; e < o.length; e++) {
                        const t = o[e];
                        if (t) {
                            const e = t.name;
                            if (e in r) try {
                                const t = r[e],
                                    o = typeof t;
                                if ("string" === o || "number" === o || "boolean" === o) {
                                    n[e] = t;
                                    continue
                                }
                            } catch {}
                            n[e] = t.value
                        }
                    }
                if ("value" in r) try {
                    const e = r.value,
                        t = typeof e;
                    "string" !== t && "number" !== t && "boolean" !== t || (n.value = e)
                } catch {}
                Cc(r, n);
                const i = r.getBoundingClientRect(),
                    s = {
                        nodeType: t,
                        serializationId: Dc(e),
                        attributes: n,
                        tagName: r.tagName,
                        clientRect: {
                            x: i.x,
                            y: i.y,
                            height: i.height,
                            width: i.width
                        },
                        scroll: {
                            x: r.scrollLeft,
                            y: r.scrollTop,
                            width: r.scrollWidth,
                            height: r.scrollHeight
                        }
                    };
                if (r instanceof HTMLInputElement && ("checkbox" === r.type || "radio" === r.type)) {
                    const e = r.getAttribute("checked");
                    null !== e && (n.checked = e), s.checked = r.checked
                }
                return s
            }
            if (t === Node.TEXT_NODE) return {
                nodeType: t,
                serializationId: Dc(e),
                textContent: e.textContent ? ? ""
            };
            if (t === Node.DOCUMENT_TYPE_NODE) {
                const r = e;
                return {
                    nodeType: t,
                    serializationId: Dc(e),
                    attributes: {
                        name: r.name,
                        publicId: r.publicId,
                        systemId: r.systemId
                    }
                }
            }
            return {
                nodeType: t,
                serializationId: Dc(e)
            }
        }

        function Fc(e, t) {
            return {
                node: Hc(t),
                ...jc,
                ...fs(e, Nc)
            }
        }
        const zc = [{
                name: "HTMLInputElement",
                type: HTMLInputElement,
                tagName: "INPUT"
            }, {
                name: "HTMLSelectElement",
                type: HTMLSelectElement,
                tagName: "SELECT"
            }, {
                name: "HTMLTextAreaElement",
                type: HTMLTextAreaElement,
                tagName: "TEXTAREA"
            }, {
                name: "HTMLButtonElement",
                type: HTMLButtonElement,
                tagName: "BUTTON"
            }],
            Wc = zc.filter(({
                type: e
            }) => "function" != typeof e).map(({
                name: e
            }) => e),
            Kc = ["id", "name", "tagName", "type", "value"];

        function Yc(e) {
            return Ac(e, Kc)
        }
        const Jc = (e, t) => (r, {
                eventPrefix: n,
                onError: o
            }) => zr(window, e, i => {
                try {
                    const e = i ? .target;
                    if (!(e instanceof HTMLInputElement || e instanceof HTMLSelectElement || e instanceof HTMLTextAreaElement) || kc(e)) return;
                    n ? r(`${n}${t}`, {
                        node: Hc(e)
                    }) : r(t, {
                        element: Yc(e)
                    })
                } catch (s) {
                    o ? .(s, {
                        context: `createInputListenerFactory/${e}/${t}`,
                        type: "error",
                        unhandled: !1
                    })
                }
            }, {
                onError: o
            }),
            Gc = Jc("blur", "input_blurred"),
            Xc = Jc("focus", "input_focused"),
            Qc = Jc("change", "input_changed"),
            Zc = ["action", "id"],
            eu = [Gc, Qc, (e, {
                eventPrefix: t,
                onError: r
            }) => zr(window, "click", r => {
                const n = r ? .target;
                if (!(n instanceof Element) || kc(n)) return;
                const o = t ? Fc(r, n) : function(e, t) {
                    return {
                        element: Rc(t),
                        ...jc,
                        ...fs(e, Nc)
                    }
                }(r, n);
                e(`${t??""}clicked`, o)
            }, {
                onError: r,
                throttleDelay: 50
            }), Xc, (e, {
                eventPrefix: t,
                onError: r
            }) => {
                let n = !1;
                return zr(window, "submit", o => {
                    const i = o ? .target;
                    i instanceof HTMLFormElement && !kc(i) && (t ? e(`${t}form_submitted`, {
                        node: Hc(i)
                    }) : (Wc.length > 0 && !n && (n = !0, r(new Error(`Invalid DOM constructor globals: ${Wc.join(", ")}`), {
                        context: "createSubmitListener/invalidInputTypes",
                        type: "metric",
                        unhandled: !1
                    })), e("form_submitted", {
                        element: { ...Ac(i, Zc),
                            elements: Array.from(i.elements).filter(e => function(e) {
                                return zc.some(({
                                    type: t,
                                    tagName: r
                                }) => "function" == typeof t ? e instanceof t : e ? .tagName === r)
                            }(e) && !kc(e)).map(e => Yc(e))
                        }
                    })))
                }, {
                    onError: r
                })
            }],
            tu = (e, t) => {
                const r = eu.map(r => {
                    try {
                        return r(e, t)
                    } catch (n) {
                        return t ? .onError ? .(n, {
                            context: "createDomEventsListener"
                        }), () => {}
                    }
                });
                return () => {
                    r.forEach(e => e())
                }
            };

        function ru(e, t, {
            onError: r
        }) {
            return zr(document, e, r => {
                if (!(r instanceof Event && r.type === e)) return;
                const n = r.target;
                if (!(n instanceof Element) || kc(n)) return;
                const o = Hc(n);
                t("advanced_dom_clipboard", {
                    node: o,
                    action: r.type ? ? "copy"
                })
            }, {
                onError: r,
                throttleDelay: 100
            })
        }
        const nu = (e, t) => {
            const r = [],
                n = e.length;
            for (let o = 0; o < n; o++) {
                const n = e[o];
                n && !kc(n) && r.push(t(n))
            }
            return r
        };

        function ou(e) {
            const t = Dc(e),
                r = e.childNodes,
                n = [];
            let o = -1;
            const i = r.length;
            for (let s = 0; s < i; s++) {
                const e = r[s];
                if (!e || kc(e)) continue;
                const i = {
                    parentSerializationId: t,
                    prevSiblingSerializationId: o
                };
                Vc(e, i), n.push({
                    node: Hc(e),
                    children: ou(e),
                    ...i
                }), o = Dc(e)
            }
            return n
        }
        const iu = e => {
                const t = qc(e);
                return {
                    node: Hc(e),
                    children: ou(e),
                    parentSerializationId: t.parentSerializationId,
                    prevSiblingSerializationId: t.prevSiblingSerializationId
                }
            },
            su = [(e, {
                onError: t
            }) => {
                let r = null;
                return zr(window, "mousemove", t => {
                    if (!(t instanceof MouseEvent)) return;
                    const n = t ? .target;
                    if (!(n instanceof Element) || kc(n)) return;
                    const o = Fc(t, n);
                    o.movementX = r ? t.screenX - r.screenX : 0, o.movementY = r ? t.screenY - r.screenY : 0, e("advanced_dom_mouse_moved", o), r = t
                }, {
                    onError: t,
                    throttleDelay: 50
                })
            }, (e, {
                onError: t
            }) => zr(window, "resize", t => {
                const r = t.view;
                r && e("advanced_dom_window_resized", {
                    innerHeight: r.innerHeight,
                    innerWidth: r.innerWidth
                })
            }, {
                onError: t,
                throttleDelay: 100
            }), (e, {
                onError: t
            }) => zr(window, "scroll", t => {
                if (!(t instanceof Event)) return;
                const r = t ? .target;
                let n;
                if (r instanceof Document) n = r.scrollingElement ? ? document.documentElement;
                else {
                    if (!(r instanceof Element)) return;
                    n = r
                }
                kc(n) || e("advanced_dom_scrolled", {
                    node: Hc(n)
                })
            }, {
                onError: t,
                throttleDelay: 100
            }), (e, t) => {
                const r = [ru("cut", e, t), ru("paste", e, t), ru("copy", e, t)];
                return () => {
                    r.forEach(e => e())
                }
            }, (e, {
                onError: t
            }) => zr(document, "selectionchange", t => {
                const r = document.activeElement;
                r instanceof Element && !kc(r) && e("advanced_dom_selection_changed", {
                    node: Hc(r)
                })
            }, {
                onError: t,
                throttleDelay: 250
            }), (e, {
                onError: t
            }) => {
                const r = () => {
                    e("advanced_dom_available", {
                        root: iu(document)
                    })
                };
                return "loading" !== document.readyState ? (r(), () => {}) : zr(window, "DOMContentLoaded", r, {
                    onError: t
                })
            }, (e, {
                onError: t
            }) => {
                const r = new MutationObserver(r => {
                        Or().then(() => {
                            r.forEach(t => {
                                if (kc(t.target)) return;
                                const r = nu(Array.from(t.addedNodes).filter(e => e.parentNode), iu),
                                    n = function(e) {
                                        if (0 === e.removedNodes.length) return [];
                                        if (kc(e.target)) return e.removedNodes.forEach(e => Bc(e)), [];
                                        const t = Array.from(e.removedNodes).filter(e => {
                                            const {
                                                parentSerializationId: t
                                            } = qc(e);
                                            return -1 !== t || (Bc(e), !1)
                                        });
                                        return nu(t, e => {
                                            const t = Hc(e);
                                            return Bc(e), t
                                        })
                                    }(t),
                                    o = [];
                                if ("attributes" === t.type) {
                                    const {
                                        target: e,
                                        attributeName: r
                                    } = t;
                                    r && e instanceof HTMLElement && t.oldValue !== e.getAttribute(r) && o.push(Hc(t.target))
                                }
                                if ("characterData" === t.type) {
                                    const {
                                        target: e
                                    } = t;
                                    e instanceof Text && t.oldValue !== e.data && o.push(Hc(e))
                                }
                                0 === r.length && 0 === n.length && 0 === o.length || e("advanced_dom_changed", {
                                    addedFragments: r,
                                    removedNodes: n,
                                    modifiedNodes: o
                                })
                            })
                        }).catch(e => {
                            t ? .(e, {
                                context: "createDomChangeListener/observer",
                                unhandled: !1
                            })
                        })
                    }),
                    n = () => {
                        r.observe(document.documentElement, {
                            attributes: !0,
                            attributeOldValue: !0,
                            childList: !0,
                            subtree: !0,
                            characterData: !0,
                            characterDataOldValue: !0
                        })
                    };
                if ("loading" !== document.readyState) return n(), () => {
                    r.disconnect()
                };
                const o = zr(window, "DOMContentLoaded", n, {
                    onError: t
                });
                return () => {
                    o(), r.disconnect()
                }
            }];
        class au extends Error {
            constructor(...e) {
                super(...e), this.name = "VisitorError"
            }
        }
        const cu = {
            publish: () => !1,
            publishCustomEvent: () => !1,
            publishDomEvent: () => !1,
            visitor: () => !1,
            subscribe: () => () => !1
        };
        const uu = (e, t, r) => {
            const n = (e.gates ? ? []).filter(e => !e.isOpen);
            if (0 === n.length) return void e.register(t);
            const o = {
                    remaining: n.length
                },
                i = [],
                s = () => {
                    if (o.remaining--, 0 === o.remaining) {
                        i.forEach(e => e());
                        try {
                            e.register(t)
                        } catch (n) {
                            r && r(n)
                        }
                    }
                };
            for (const a of n) i.push(a.onOpen(s))
        };
        class du {
            constructor(e, {
                onError: t,
                bufferSize: r,
                replayKeep: n,
                registrationStrategy: o = uu
            } = {}) {
                this.eventBus = void 0, this.eventBus = new ws({
                    subscribeAllKey: "*",
                    onSubscriberError: t,
                    bufferSize: r,
                    replayKeep: n
                }), this.eventBus.use((e, t, r, n) => {
                    Reflect.get(n, bs) ? e({ ...r,
                        replayed: !0
                    }) : e()
                });
                const i = this.eventBus.subscribe.bind(this.eventBus);
                e.forEach(e => {
                    try {
                        o(e, i, t)
                    } catch (r) {
                        t ? t(r) : console ? .error("Error registering event hub adapter:", r)
                    }
                })
            }
            emit(e, t) {
                this.eventBus.publish(e, {
                    id: sr(),
                    name: e,
                    timestamp: (new Date).valueOf(),
                    payload: t
                })
            }
        }

        function lu(e, t) {
            return e.gates = [...e.gates ? ? [], ...t], e
        }
        var pu = Yr("open"),
            hu = Yr("callbacks");
        class fu {
            constructor(e, t) {
                Object.defineProperty(this, pu, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, hu, {
                    writable: !0,
                    value: new Set
                }), Wr(this, pu)[pu] = e(), Wr(this, pu)[pu] || t(() => {
                    !Wr(this, pu)[pu] && e() && (Wr(this, pu)[pu] = !0, Wr(this, hu)[hu].forEach(e => e()), Wr(this, hu)[hu].clear())
                })
            }
            get isOpen() {
                return Wr(this, pu)[pu]
            }
            onOpen(e) {
                return Wr(this, pu)[pu] ? (e(), () => {}) : (Wr(this, hu)[hu].add(e), () => {
                    Wr(this, hu)[hu].delete(e)
                })
            }
        }
        class mu extends fu {
            constructor(e, t) {
                super(t ? ? (() => e.analyticsProcessingAllowed() || e.marketingAllowed()), t => e.onConsentCollected(t))
            }
        }
        var vu = Yr("consent"),
            gu = Yr("notify"),
            yu = Yr("snapshot"),
            bu = Yr("check"),
            wu = Yr("read"),
            _u = Yr("matchesSnapshot");
        class Iu {
            constructor(e, t) {
                Object.defineProperty(this, _u, {
                    value: ku
                }), Object.defineProperty(this, wu, {
                    value: Eu
                }), Object.defineProperty(this, bu, {
                    value: xu
                }), Object.defineProperty(this, vu, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, gu, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, yu, {
                    writable: !0,
                    value: void 0
                }), Wr(this, vu)[vu] = e, Wr(this, gu)[gu] = t, Wr(this, yu)[yu] = Wr(this, wu)[wu]()
            }
            register(e) {
                Wr(this, vu)[vu].onConsentCollected(() => {
                    Wr(this, yu)[yu] = Wr(this, wu)[wu]()
                }), e("*", () => Wr(this, bu)[bu]())
            }
        }

        function xu() {
            const e = Wr(this, wu)[wu]();
            Wr(this, _u)[_u](e) || (Wr(this, gu)[gu](new CustomEvent(ae, {
                detail: e
            })), Wr(this, yu)[yu] = e)
        }

        function Eu() {
            const e = Wr(this, vu)[vu].marketingAllowed(),
                t = Wr(this, vu)[vu].saleOfDataAllowed();
            return {
                analyticsAllowed: Wr(this, vu)[vu].analyticsProcessingAllowed(),
                marketingAllowed: e,
                preferencesAllowed: Wr(this, vu)[vu].preferencesProcessingAllowed(),
                saleOfDataAllowed: t,
                firstPartyMarketingAllowed: e,
                thirdPartyMarketingAllowed: t
            }
        }

        function ku(e) {
            return e.analyticsAllowed === Wr(this, yu)[yu].analyticsAllowed && e.marketingAllowed === Wr(this, yu)[yu].marketingAllowed && e.preferencesAllowed === Wr(this, yu)[yu].preferencesAllowed && e.saleOfDataAllowed === Wr(this, yu)[yu].saleOfDataAllowed
        }
        var Su = Yr("monorailClient"),
            Cu = Yr("options"),
            Tu = Yr("produce");
        class Au {
            constructor(e, t) {
                Object.defineProperty(this, Tu, {
                    value: Pu
                }), Object.defineProperty(this, Su, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, Cu, {
                    writable: !0,
                    value: void 0
                }), Wr(this, Su)[Su] = e, Wr(this, Cu)[Cu] = t
            }
            register(e) {
                e("log:visitor:reported", ({
                    payload: {
                        event: e
                    }
                }) => {
                    Wr(this, Tu)[Tu](e)
                })
            }
        }

        function Pu(e) {
            Wr(this, Su)[Su].produce("web_pixels_manager_visitor/1.0", {
                email: e.email,
                phone: e.phone,
                customerId: e.customerId,
                apiClientId: e.apiClientId,
                clientId: Wr(this, Cu)[Cu].consent.trackingTokens.getUniqueToken(),
                shopId: Wr(this, Cu)[Cu].shopId,
                version: Pn,
                pageUrl: Wr(this, Cu)[Cu].pageUrl,
                surface: Wr(this, Cu)[Cu].surface
            })
        }
        var Ou = Yr("collector"),
            Ru = Yr("options"),
            Nu = Yr("produce");
        class ju {
            constructor(e, t) {
                Object.defineProperty(this, Nu, {
                    value: Mu
                }), Object.defineProperty(this, Ou, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, Ru, {
                    writable: !0,
                    value: void 0
                }), Wr(this, Ou)[Ou] = e, Wr(this, Ru)[Ru] = t
            }
            register(e) {
                e("log:visitor:reported", ({
                    payload: {
                        event: e
                    }
                }) => {
                    Wr(this, Nu)[Nu](e)
                })
            }
        }

        function Mu(e) {
            const t = {
                "@type": "type.googleapis.com/shopify.buyer_activity.WebPixelsManagerVisitorApiEvent",
                version: Pn,
                surface: Wr(this, Ru)[Ru].surface
            };
            Wr(this, Ou)[Ou].produce(t, {
                apiClientId: e.apiClientId,
                userContext: {
                    email: e.email,
                    phone: e.phone,
                    customerId: e.customerId
                }
            })
        }

        function Uu(e, t) {
            return Boolean(t && t !== String(e))
        }
        const Du = "storefront_product_interaction_event_test/1.5",
            $u = {
                impression: {
                    local: "product_viewable_impression",
                    remote: "remote_product_viewable_impression"
                },
                click: {
                    local: "product_clicked",
                    remote: "remote_product_clicked"
                }
            };

        function Lu(e, t) {
            return $u[e][t ? "remote" : "local"]
        }

        function qu(e) {
            return e ? "remote_product_hovered" : "product_hovered"
        }

        function Vu(e, t) {
            return e.top >= 0 && e.top + e.height / 2 < t.height
        }

        function Bu(e, t) {
            return e ? "ORIGIN_PRODUCT_NETWORK" : t ? "ORIGIN_COLLECTIVE" : "ORIGIN_ORGANIC"
        }

        function Hu({
            shopId: e,
            themeId: t,
            themePublished: r
        }, n) {
            const {
                productId: o,
                remoteShopId: i,
                adResponseId: s,
                collectionId: a,
                variantId: c,
                pageType: u
            } = n;
            return void 0 === t || void 0 === r ? {
                accepted: !1,
                reason: "missing-theme-context"
            } : u ? void 0 === o ? {
                accepted: !1,
                reason: "missing-product-id"
            } : dr(o) ? a && !dr(a) ? {
                accepted: !1,
                reason: "invalid-collection-id"
            } : void 0 === c || dr(c) ? Uu(e, i) ? dr(i) ? s ? {
                accepted: !0,
                remote: !0,
                remoteShopId: i,
                adResponseId: s
            } : {
                accepted: !1,
                reason: "missing-ad-response-id"
            } : {
                accepted: !1,
                reason: "invalid-remote-shop-id"
            } : {
                accepted: !0,
                remote: !1
            } : {
                accepted: !1,
                reason: "invalid-variant-id"
            } : {
                accepted: !1,
                reason: "invalid-product-id"
            } : {
                accepted: !1,
                reason: "missing-page-context"
            }
        }

        function Fu({
            shopId: e
        }, t) {
            const {
                productId: r,
                remoteShopId: n,
                adResponseId: o,
                collectionId: i,
                variantId: s
            } = t;
            return void 0 === r ? {
                accepted: !1,
                reason: "missing-product-id"
            } : dr(r) ? i && !dr(i) ? {
                accepted: !1,
                reason: "invalid-collection-id"
            } : void 0 === s || dr(s) ? Uu(e, n) ? dr(n) ? {
                accepted: !0,
                remote: !0,
                remoteShopId: n,
                ...void 0 !== o && {
                    adResponseId: o
                }
            } : {
                accepted: !1,
                reason: "invalid-remote-shop-id"
            } : {
                accepted: !0,
                remote: !1
            } : {
                accepted: !1,
                reason: "invalid-variant-id"
            } : {
                accepted: !1,
                reason: "invalid-product-id"
            }
        }
        var zu = Yr("monorailClient"),
            Wu = Yr("options"),
            Ku = Yr("produce");
        class Yu {
            constructor(e, t) {
                Object.defineProperty(this, Ku, {
                    value: Ju
                }), Object.defineProperty(this, zu, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, Wu, {
                    writable: !0,
                    value: void 0
                }), Wr(this, zu)[zu] = e, Wr(this, Wu)[Wu] = t
            }
            register(e) {
                e("log:buyer-behavior:product-interaction", ({
                    id: e,
                    payload: {
                        interaction: t,
                        event: r,
                        viewport: n
                    }
                }) => {
                    Wr(this, Ku)[Ku](e, t, r, n)
                })
            }
        }

        function Ju(e, t, r, n) {
            if ((Wr(this, Wu)[Wu].routeToCollector ? ? Hu)(Wr(this, Wu)[Wu], r).accepted) return;
            const o = Uu(Wr(this, Wu)[Wu].shopId, r.remoteShopId),
                i = Lu(t, o),
                {
                    consent: s
                } = Wr(this, Wu)[Wu];
            Wr(this, zu)[zu].produce(Du, {
                eventId: e,
                source: "EVENT_APP_STOREFRONT",
                shopId: Wr(this, Wu)[Wu].shopId,
                eventName: i,
                pageUrl: Wr(this, Wu)[Wu].pageUrl,
                pageId: Wr(this, Wu)[Wu].pageId,
                requestId: Wr(this, Wu)[Wu].requestId,
                pageType: r.pageType,
                productId: r.productId,
                productHandle: r.productHandle,
                variantId: r.variantId,
                apiClientId: Wr(this, Wu)[Wu].apiClientId,
                themeId: Wr(this, Wu)[Wu].themeId,
                themeStoreId: Wr(this, Wu)[Wu].themeStoreId,
                themePublished: Wr(this, Wu)[Wu].themePublished,
                remoteShopId: r.remoteShopId,
                origin: Bu(o, r.isCollective),
                impressionId: r.impressionId,
                placement: r.placement,
                position: r.position,
                aboveFold: Vu(r.rect, n),
                collectionId: r.collectionId,
                analyticsAllowed: s.analyticsProcessingAllowed(),
                marketingAllowed: s.marketingAllowed(),
                preferencesAllowed: s.preferencesProcessingAllowed(),
                saleOfDataAllowed: s.saleOfDataAllowed(),
                visitToken: s.trackingTokens.getVisitToken(),
                uniqueToken: s.trackingTokens.getUniqueToken()
            }, {
                credentials: !1
            }), Wr(this, Wu)[Wu].onEmission ? .({
                eventName: i,
                schemaId: Du
            })
        }
        const Gu = "type.googleapis.com/shopify.buyer_activity.interactions.ProductVariantChangedEvent",
            Xu = "type.googleapis.com/shopify.buyer_activity.interactions.ProductQuantityChangedEvent";

        function Qu({
            shopId: e,
            productId: t,
            variantId: r,
            collectionId: n,
            commerceSource: o,
            quantity: i
        }) {
            return {
                productId: Yi(t),
                commerceSource: o,
                shop: {
                    id: Yi(e)
                },
                ...void 0 !== r && {
                    variantId: Yi(r)
                },
                ...n && {
                    collectionId: Yi(n)
                },
                ...void 0 !== i && {
                    quantity: i
                }
            }
        }

        function Zu({
            shopId: e,
            collectionId: t
        }) {
            return { ...t && {
                    collectionId: Yi(t)
                },
                shop: {
                    id: Yi(e)
                }
            }
        }

        function ed({
            placement: e,
            index: t,
            totalItems: r,
            aboveFold: n
        }) {
            return { ...void 0 !== e && {
                    placement: e
                },
                ...void 0 !== t && {
                    index: t
                },
                ...void 0 !== r && {
                    totalItems: r
                },
                ...void 0 !== n && {
                    aboveFold: n
                }
            }
        }

        function td({
            adResponseId: e,
            publisherShopId: t,
            advertiserShopId: r
        }) {
            return { ...e && {
                    adResponseId: e
                },
                shopRelationship: {
                    advertiserShopId: Yi(r),
                    publisherShopId: Yi(t)
                }
            }
        }

        function rd(e) {
            return void 0 === e ? void 0 : Yi(e)
        }

        function nd(e, t) {
            return sd(e, t)
        }

        function od(e, t) {
            return sd(e, t)
        }

        function id(e, t) {
            return sd(e, t)
        }

        function sd(e, t) {
            const r = Uu(e.shopId, t.remoteShopId),
                n = cd[Bu(r, t.isCollective)];
            return {
                product: Qu({
                    shopId: r ? t.remoteShopId : e.shopId,
                    productId: t.productId,
                    variantId: t.variantId,
                    collectionId: t.collectionId,
                    commerceSource: n
                }),
                position: ed({
                    placement: t.placement,
                    index: t.position,
                    totalItems: t.totalProducts,
                    aboveFold: t.aboveFold
                }),
                impressionId: t.impressionId
            }
        }

        function ad(e, t, r) {
            return { ...e,
                advertising: td({
                    adResponseId: r.adResponseId,
                    publisherShopId: t.shopId,
                    advertiserShopId: r.remoteShopId
                })
            }
        }
        const cd = {
            ORIGIN_ORGANIC: "COMMERCE_SOURCE_ORGANIC",
            ORIGIN_PRODUCT_NETWORK: "COMMERCE_SOURCE_REMOTE",
            ORIGIN_COLLECTIVE: "COMMERCE_SOURCE_COLLECTIVE"
        };
        var ud = Yr("collector"),
            dd = Yr("options"),
            ld = Yr("produceProductInteraction"),
            pd = Yr("produceHover"),
            hd = Yr("buildCanonicalContext");
        class fd {
            constructor(e, t) {
                Object.defineProperty(this, hd, {
                    value: gd
                }), Object.defineProperty(this, pd, {
                    value: vd
                }), Object.defineProperty(this, ld, {
                    value: md
                }), Object.defineProperty(this, ud, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, dd, {
                    writable: !0,
                    value: void 0
                }), Wr(this, ud)[ud] = e, Wr(this, dd)[dd] = t
            }
            register(e) {
                e("log:buyer-behavior:product-interaction", ({
                    id: e,
                    payload: {
                        interaction: t,
                        event: r,
                        viewport: n
                    }
                }) => {
                    const o = Lu(t, Uu(Wr(this, dd)[dd].shopId, r.remoteShopId)),
                        i = Fu(Wr(this, dd)[dd], r);
                    i.accepted ? Wr(this, ld)[ld](e, o, t, r, n, i) : Wr(this, dd)[dd].onValidationError ? .({
                        eventName: o,
                        reason: i.reason
                    })
                }), Wr(this, dd)[dd].hoversEnabled && e("log:buyer-behavior:product-hover", ({
                    id: e,
                    payload: {
                        event: t,
                        viewport: r
                    }
                }) => {
                    const n = qu(Uu(Wr(this, dd)[dd].shopId, t.remoteShopId)),
                        o = Fu(Wr(this, dd)[dd], t);
                    o.accepted ? Wr(this, pd)[pd](e, n, t, r, o) : Wr(this, dd)[dd].onValidationError ? .({
                        eventName: n,
                        reason: o.reason
                    })
                })
            }
        }

        function md(e, t, r, n, o, i) {
            const s = { ...n,
                aboveFold: Vu(n.rect, o)
            };
            let a;
            var c, u;
            a = "impression" === r ? i.remote ? ad(nd(c = Wr(this, dd)[dd], u = { ...s,
                remoteShopId: i.remoteShopId,
                adResponseId: i.adResponseId
            }), c, u) : nd(Wr(this, dd)[dd], s) : i.remote ? function(e, t) {
                return ad(od(e, t), e, t)
            }(Wr(this, dd)[dd], { ...s,
                remoteShopId: i.remoteShopId,
                adResponseId: i.adResponseId
            }) : od(Wr(this, dd)[dd], s), Wr(this, ud)[ud].produce({
                "@type": "impression" === r ? "type.googleapis.com/shopify.buyer_activity.interactions.ProductImpressionEvent" : "type.googleapis.com/shopify.buyer_activity.interactions.ProductClickedEvent",
                ...a
            }, {
                clientMessageId: e,
                canonicalContext: Wr(this, hd)[hd](n)
            }), Wr(this, dd)[dd].onEmission ? .({
                eventName: t
            })
        }

        function vd(e, t, r, n, o) {
            const i = { ...r,
                    aboveFold: Vu(r.rect, n)
                },
                s = o.remote ? ad(id(a = Wr(this, dd)[dd], c = { ...i,
                    remoteShopId: o.remoteShopId,
                    adResponseId: o.adResponseId
                }), a, c) : id(Wr(this, dd)[dd], i);
            var a, c;
            Wr(this, ud)[ud].produce({
                "@type": "type.googleapis.com/shopify.buyer_activity.interactions.ProductHoveredEvent",
                ...s
            }, {
                clientMessageId: e,
                canonicalContext: Wr(this, hd)[hd](r)
            }), Wr(this, dd)[dd].onEmission ? .({
                eventName: t
            })
        }

        function gd({
            pageType: e,
            pageUrl: t
        }) {
            return {
                page: void 0 === t || {
                    url: t
                },
                ...e && {
                    view: {
                        name: e
                    }
                }
            }
        }

        function yd({
            themeId: e,
            themeStoreId: t,
            themePublished: r
        }) {
            if (void 0 !== e || void 0 !== t || void 0 !== r) return { ...void 0 !== e && {
                    themeId: Yi(e)
                },
                ...void 0 !== t && {
                    themeStoreId: String(t)
                },
                ...void 0 !== r && {
                    themePublished: r
                }
            }
        }
        const bd = {
            collection: "PLACEMENT_TYPE_COLLECTION",
            search: "PLACEMENT_TYPE_SEARCH",
            recommendations: "PLACEMENT_TYPE_RECOMMENDATIONS",
            other: "PLACEMENT_TYPE_OTHER"
        };

        function wd({
            shopId: e,
            themeId: t,
            themeStoreId: r,
            themePublished: n,
            pageUrl: o
        }, i) {
            const s = function(e, t, r) {
                    if ("search" === e) {
                        if (t === xd) {
                            const e = function(e) {
                                if (e) try {
                                    const t = new URL(e).searchParams.get("q") ? .trim();
                                    return t || void 0
                                } catch {
                                    return
                                }
                            }(r);
                            return {
                                searchType: "SEARCH_TYPE_SEARCH_PAGE",
                                ...void 0 !== e && {
                                    searchQuery: e
                                }
                            }
                        }
                        return {
                            searchType: "SEARCH_TYPE_TYPEAHEAD"
                        }
                    }
                }(i.placement, i.pageType, o),
                a = void 0 === t ? void 0 : yd({
                    themeId: t,
                    themeStoreId: r,
                    themePublished: n
                });
            return { ...void 0 !== i.pageType && {
                    pageContext: {
                        pageType: i.pageType
                    }
                },
                ...void 0 !== a && {
                    themeContext: a
                },
                product: Id({
                    shopId: e,
                    productId: i.productId,
                    variantId: i.variantId
                }),
                ...i.collectionId && {
                    collection: {
                        shopId: Yi(e),
                        collectionId: Yi(i.collectionId)
                    }
                },
                placementContext: {
                    placement: (c = i.placement, bd[c] ? ? "PLACEMENT_TYPE_UNSPECIFIED"),
                    ...void 0 !== i.position && {
                        position: i.position
                    },
                    ...void 0 !== i.totalProducts && {
                        totalProducts: i.totalProducts
                    },
                    ...void 0 !== i.aboveFold && {
                        aboveFold: i.aboveFold
                    }
                },
                ...void 0 !== s && {
                    searchContext: s
                },
                origin: Bu(Uu(e, i.remoteShopId), i.isCollective),
                ...void 0 !== i.impressionId && {
                    impressionId: i.impressionId
                }
            };
            var c
        }

        function _d(e, t) {
            return { ...wd(e, t),
                product: Id({
                    shopId: t.remoteShopId,
                    productId: t.productId,
                    variantId: t.variantId
                }),
                adContext: {
                    responseId: t.adResponseId,
                    publisherShopId: Yi(e.shopId),
                    advertiserShopId: Yi(t.remoteShopId)
                }
            }
        }

        function Id({
            shopId: e,
            productId: t,
            variantId: r
        }) {
            return {
                shopId: Yi(e),
                ...void 0 !== t && {
                    productId: Yi(t)
                },
                ...void 0 !== r && {
                    variantId: Yi(r)
                }
            }
        }
        const xd = "searchresults";
        var Ed = Yr("collector"),
            kd = Yr("options"),
            Sd = Yr("produceOrganic"),
            Cd = Yr("produceRemote"),
            Td = Yr("produceImpression"),
            Ad = Yr("produceClick"),
            Pd = Yr("produceHover"),
            Od = Yr("produceRemoteHover");
        class Rd {
            constructor(e, t) {
                Object.defineProperty(this, Od, {
                    value: $d
                }), Object.defineProperty(this, Pd, {
                    value: Dd
                }), Object.defineProperty(this, Ad, {
                    value: Ud
                }), Object.defineProperty(this, Td, {
                    value: Md
                }), Object.defineProperty(this, Cd, {
                    value: jd
                }), Object.defineProperty(this, Sd, {
                    value: Nd
                }), Object.defineProperty(this, Ed, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, kd, {
                    writable: !0,
                    value: void 0
                }), Wr(this, Ed)[Ed] = e, Wr(this, kd)[kd] = t
            }
            register(e) {
                e("log:buyer-behavior:product-interaction", ({
                    id: e,
                    payload: {
                        interaction: t,
                        event: r,
                        viewport: n
                    }
                }) => {
                    const o = Lu(t, Uu(Wr(this, kd)[kd].shopId, r.remoteShopId)),
                        i = Hu(Wr(this, kd)[kd], r);
                    i.accepted ? i.remote ? Wr(this, Cd)[Cd](e, o, t, r, n, i) : Wr(this, Sd)[Sd](e, o, t, r, n) : Wr(this, kd)[kd].onValidationError ? .({
                        eventName: o,
                        reason: i.reason
                    })
                }), Wr(this, kd)[kd].hoversEnabled && e("log:buyer-behavior:product-hover", ({
                    id: e,
                    payload: {
                        event: t,
                        viewport: r
                    }
                }) => {
                    const n = qu(Uu(Wr(this, kd)[kd].shopId, t.remoteShopId)),
                        o = Hu(Wr(this, kd)[kd], t);
                    o.accepted ? (o.remote ? Wr(this, Od)[Od](e, t, r, o) : Wr(this, Pd)[Pd](e, t, r), Wr(this, kd)[kd].onEmission ? .({
                        eventName: n
                    })) : Wr(this, kd)[kd].onValidationError ? .({
                        eventName: n,
                        reason: o.reason
                    })
                })
            }
        }

        function Nd(e, t, r, n, o) {
            "impression" === r ? Wr(this, Td)[Td](e, n, o) : Wr(this, Ad)[Ad](e, n, o), Wr(this, kd)[kd].onEmission ? .({
                eventName: t
            })
        }

        function jd(e, t, r, n, o, {
            remoteShopId: i,
            adResponseId: s
        }) {
            const a = _d(Wr(this, kd)[kd], { ...n,
                remoteShopId: i,
                adResponseId: s,
                aboveFold: Vu(n.rect, o)
            });
            "impression" === r ? Wr(this, Ed)[Ed].produce({
                "@type": "type.googleapis.com/shopify.buyer_activity.interactions.StorefrontRemoteProductViewableImpressionEvent",
                ...a
            }, {
                clientMessageId: e
            }) : Wr(this, Ed)[Ed].produce({
                "@type": "type.googleapis.com/shopify.buyer_activity.interactions.StorefrontRemoteProductClickedEvent",
                ...a
            }, {
                clientMessageId: e
            }), Wr(this, kd)[kd].onEmission ? .({
                eventName: t
            })
        }

        function Md(e, t, r) {
            const n = {
                "@type": "type.googleapis.com/shopify.buyer_activity.interactions.StorefrontProductViewableImpressionEvent",
                ...wd(Wr(this, kd)[kd], { ...t,
                    aboveFold: Vu(t.rect, r)
                })
            };
            Wr(this, Ed)[Ed].produce(n, {
                clientMessageId: e
            })
        }

        function Ud(e, t, r) {
            const n = {
                "@type": "type.googleapis.com/shopify.buyer_activity.interactions.StorefrontProductClickedEvent",
                ...wd(Wr(this, kd)[kd], { ...t,
                    aboveFold: Vu(t.rect, r)
                })
            };
            Wr(this, Ed)[Ed].produce(n, {
                clientMessageId: e
            })
        }

        function Dd(e, t, r) {
            const n = {
                "@type": "type.googleapis.com/shopify.buyer_activity.interactions.StorefrontProductHoveredEvent",
                ...wd(Wr(this, kd)[kd], { ...t,
                    aboveFold: Vu(t.rect, r)
                })
            };
            Wr(this, Ed)[Ed].produce(n, {
                clientMessageId: e
            })
        }

        function $d(e, t, r, {
            remoteShopId: n,
            adResponseId: o
        }) {
            const i = _d(Wr(this, kd)[kd], { ...t,
                remoteShopId: n,
                adResponseId: o,
                aboveFold: Vu(t.rect, r)
            });
            Wr(this, Ed)[Ed].produce({
                "@type": "type.googleapis.com/shopify.buyer_activity.interactions.StorefrontRemoteProductHoveredEvent",
                ...i
            }, {
                clientMessageId: e
            })
        }
        var Ld = Yr("monorailClient"),
            qd = Yr("options"),
            Vd = Yr("produce");
        class Bd {
            constructor(e, t) {
                Object.defineProperty(this, Vd, {
                    value: Hd
                }), Object.defineProperty(this, Ld, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, qd, {
                    writable: !0,
                    value: void 0
                }), Wr(this, Ld)[Ld] = e, Wr(this, qd)[qd] = t
            }
            register(e) {
                e("log:buyer-behavior:product-hover", ({
                    id: e,
                    payload: {
                        event: t,
                        viewport: r
                    }
                }) => {
                    Wr(this, Vd)[Vd](e, t, r)
                })
            }
        }

        function Hd(e, t, r) {
            if ((Wr(this, qd)[qd].routeToCollector ? ? Hu)(Wr(this, qd)[qd], t).accepted) return;
            const n = Uu(Wr(this, qd)[qd].shopId, t.remoteShopId),
                o = qu(n),
                {
                    consent: i
                } = Wr(this, qd)[qd];
            Wr(this, Ld)[Ld].produce(Du, {
                eventId: e,
                source: "EVENT_APP_STOREFRONT",
                shopId: Wr(this, qd)[qd].shopId,
                eventName: o,
                pageUrl: Wr(this, qd)[qd].pageUrl,
                pageId: Wr(this, qd)[qd].pageId,
                requestId: Wr(this, qd)[qd].requestId,
                pageType: t.pageType,
                productId: t.productId,
                productHandle: t.productHandle,
                variantId: t.variantId,
                apiClientId: Wr(this, qd)[qd].apiClientId,
                themeId: Wr(this, qd)[qd].themeId,
                themeStoreId: Wr(this, qd)[qd].themeStoreId,
                themePublished: Wr(this, qd)[qd].themePublished,
                remoteShopId: t.remoteShopId,
                origin: Bu(n, t.isCollective),
                impressionId: t.impressionId,
                placement: t.placement,
                position: t.position,
                aboveFold: Vu(t.rect, r),
                collectionId: t.collectionId,
                analyticsAllowed: i.analyticsProcessingAllowed(),
                marketingAllowed: i.marketingAllowed(),
                preferencesAllowed: i.preferencesProcessingAllowed(),
                saleOfDataAllowed: i.saleOfDataAllowed(),
                visitToken: i.trackingTokens.getVisitToken(),
                uniqueToken: i.trackingTokens.getUniqueToken()
            }, {
                credentials: !1
            }), Wr(this, qd)[qd].onEmission ? .({
                eventName: o,
                schemaId: Du
            })
        }
        const Fd = "storefront_product_interaction_event_test/1.5";

        function zd(e, t) {
            const {
                shopId: r,
                themeId: n,
                themePublished: o,
                pageType: i,
                resourceId: s
            } = e;
            if (void 0 === n || void 0 === o) return {
                accepted: !1,
                reason: "missing-theme-context"
            };
            if (!Number.isInteger(t.dwellMilliseconds) || t.dwellMilliseconds <= 0) return {
                accepted: !1,
                reason: "invalid-dwell-duration"
            };
            if (i === er.Product) {
                const {
                    variantId: e,
                    remoteShopId: i
                } = t;
                return dr(s) ? dr(e) ? Uu(r, i) ? dr(i) ? {
                    accepted: !0,
                    themeId: n,
                    themePublished: o,
                    variant: "remote-product",
                    productId: s,
                    variantId: e,
                    remoteShopId: i
                } : {
                    accepted: !1,
                    reason: "invalid-remote-shop-id"
                } : {
                    accepted: !0,
                    themeId: n,
                    themePublished: o,
                    variant: "product",
                    productId: s,
                    variantId: e
                } : {
                    accepted: !1,
                    reason: "invalid-variant-id"
                } : {
                    accepted: !1,
                    reason: "invalid-product-id"
                }
            }
            return s && !dr(s) ? {
                accepted: !1,
                reason: "invalid-collection-id"
            } : {
                accepted: !0,
                themeId: n,
                themePublished: o,
                variant: "collection"
            }
        }

        function Wd(e, t) {
            const {
                shopId: r,
                pageType: n,
                resourceId: o
            } = e;
            if (!Number.isInteger(t.dwellMilliseconds) || t.dwellMilliseconds <= 0) return {
                accepted: !1,
                reason: "invalid-dwell-duration"
            };
            if (n === er.Product) {
                const {
                    variantId: e,
                    remoteShopId: n
                } = t;
                return dr(o) ? dr(e) ? Uu(r, n) ? dr(n) ? {
                    accepted: !0,
                    variant: "remote-product",
                    productId: o,
                    variantId: e,
                    remoteShopId: n
                } : {
                    accepted: !1,
                    reason: "invalid-remote-shop-id"
                } : {
                    accepted: !0,
                    variant: "product",
                    productId: o,
                    variantId: e
                } : {
                    accepted: !1,
                    reason: "invalid-variant-id"
                } : {
                    accepted: !1,
                    reason: "invalid-product-id"
                }
            }
            return o && !dr(o) ? {
                accepted: !1,
                reason: "invalid-collection-id"
            } : {
                accepted: !0,
                variant: "collection"
            }
        }
        const Kd = {
            [er.Product]: "product_page_dwelled",
            [er.Collection]: "collection_page_dwelled"
        };
        var Yd = Yr("monorailClient"),
            Jd = Yr("options"),
            Gd = Yr("handle");
        class Xd {
            constructor(e, t) {
                Object.defineProperty(this, Gd, {
                    value: Qd
                }), Object.defineProperty(this, Yd, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, Jd, {
                    writable: !0,
                    value: void 0
                }), Wr(this, Yd)[Yd] = e, Wr(this, Jd)[Jd] = t
            }
            register(e) {
                e("log:buyer-behavior:page-dwell", ({
                    id: e,
                    payload: {
                        event: t
                    }
                }) => {
                    Wr(this, Gd)[Gd](e, t)
                })
            }
        }

        function Qd(e, t) {
            if ((Wr(this, Jd)[Jd].routeToCollector ? ? zd)(Wr(this, Jd)[Jd], t).accepted) return;
            const {
                consent: r,
                pageType: n,
                resourceId: o
            } = Wr(this, Jd)[Jd], i = n === er.Product && Uu(Wr(this, Jd)[Jd].shopId, t.remoteShopId) ? "remote_product_page_dwelled" : Kd[n];
            Wr(this, Yd)[Yd].produce(Fd, {
                eventId: e,
                source: "EVENT_APP_STOREFRONT",
                shopId: Wr(this, Jd)[Jd].shopId,
                eventName: i,
                pageUrl: Wr(this, Jd)[Jd].pageUrl,
                pageId: Wr(this, Jd)[Jd].pageId,
                requestId: Wr(this, Jd)[Jd].requestId,
                pageType: n,
                productId: n === er.Product ? o : void 0,
                productHandle: t.productHandle,
                variantId: t.variantId,
                collectionId: n === er.Collection ? o : void 0,
                remoteShopId: t.remoteShopId,
                apiClientId: Wr(this, Jd)[Jd].apiClientId,
                themeId: Wr(this, Jd)[Jd].themeId,
                themeStoreId: Wr(this, Jd)[Jd].themeStoreId,
                themePublished: Wr(this, Jd)[Jd].themePublished,
                dwellMilliseconds: t.dwellMilliseconds,
                analyticsAllowed: r.analyticsProcessingAllowed(),
                marketingAllowed: r.marketingAllowed(),
                preferencesAllowed: r.preferencesProcessingAllowed(),
                saleOfDataAllowed: r.saleOfDataAllowed(),
                visitToken: r.trackingTokens.getVisitToken(),
                uniqueToken: r.trackingTokens.getUniqueToken()
            }, {
                credentials: !1
            }), Wr(this, Jd)[Jd].onEmission ? .({
                eventName: i,
                schemaId: Fd
            })
        }

        function Zd(e, t) {
            return {
                pageContext: {
                    pageType: e.pageType
                },
                themeContext: rl(e),
                product: {
                    shopId: Yi(e.shopId),
                    productId: Yi(t.productId),
                    variantId: Yi(t.variantId)
                },
                dwellTimeMs: t.dwellMilliseconds
            }
        }

        function el(e, t) {
            return {
                pageContext: {
                    pageType: e.pageType
                },
                themeContext: rl(e),
                collection: {
                    shopId: Yi(e.shopId),
                    ...t.collectionId && {
                        collectionId: Yi(t.collectionId)
                    }
                },
                dwellTimeMs: t.dwellMilliseconds
            }
        }

        function tl(e, t) {
            const r = Zd(e, t);
            return { ...r,
                product: { ...r.product,
                    shopId: Yi(t.remoteShopId)
                },
                adContext: {
                    publisherShopId: Yi(e.shopId),
                    advertiserShopId: Yi(t.remoteShopId),
                    ...void 0 !== t.adResponseId && {
                        responseId: t.adResponseId
                    }
                }
            }
        }

        function rl({
            themeId: e,
            themeStoreId: t,
            themePublished: r
        }) {
            return {
                themeId: Yi(e),
                ...void 0 !== t && {
                    themeStoreId: String(t)
                },
                themePublished: r
            }
        }
        var nl = Yr("collector"),
            ol = Yr("options"),
            il = Yr("handle"),
            sl = Yr("eventName"),
            al = Yr("produce");
        class cl {
            constructor(e, t) {
                Object.defineProperty(this, al, {
                    value: ll
                }), Object.defineProperty(this, sl, {
                    value: dl
                }), Object.defineProperty(this, il, {
                    value: ul
                }), Object.defineProperty(this, nl, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, ol, {
                    writable: !0,
                    value: void 0
                }), Wr(this, nl)[nl] = e, Wr(this, ol)[ol] = t
            }
            register(e) {
                e("log:buyer-behavior:page-dwell", ({
                    id: e,
                    payload: {
                        event: t
                    }
                }) => {
                    Wr(this, il)[il](e, t)
                })
            }
        }

        function ul(e, t) {
            const r = Uu(Wr(this, ol)[ol].shopId, t.remoteShopId),
                n = Wr(this, sl)[sl](r),
                o = zd(Wr(this, ol)[ol], t);
            if (!o.accepted) return void Wr(this, ol)[ol].onValidationError ? .({
                eventName: n,
                reason: o.reason
            });
            const i = {
                    shopId: Wr(this, ol)[ol].shopId,
                    themeId: o.themeId,
                    themeStoreId: Wr(this, ol)[ol].themeStoreId,
                    themePublished: o.themePublished,
                    pageType: Wr(this, ol)[ol].pageType
                },
                {
                    dwellMilliseconds: s
                } = t;
            "product" === o.variant ? Wr(this, al)[al](e, n, {
                "@type": "type.googleapis.com/shopify.buyer_activity.interactions.StorefrontProductPageDwelledEvent",
                ...Zd(i, {
                    productId: o.productId,
                    variantId: o.variantId,
                    dwellMilliseconds: s
                })
            }) : "remote-product" === o.variant ? Wr(this, al)[al](e, n, {
                "@type": "type.googleapis.com/shopify.buyer_activity.interactions.StorefrontRemoteProductPageDwelledEvent",
                ...tl(i, {
                    productId: o.productId,
                    variantId: o.variantId,
                    remoteShopId: o.remoteShopId,
                    adResponseId: t.adResponseId,
                    dwellMilliseconds: s
                })
            }) : Wr(this, al)[al](e, n, {
                "@type": "type.googleapis.com/shopify.buyer_activity.interactions.StorefrontCollectionPageDwelledEvent",
                ...el(i, {
                    collectionId: Wr(this, ol)[ol].resourceId,
                    dwellMilliseconds: s
                })
            })
        }

        function dl(e) {
            return Wr(this, ol)[ol].pageType === er.Product ? e ? "remote_product_page_dwelled" : "product_page_dwelled" : "collection_page_dwelled"
        }

        function ll(e, t, r) {
            Wr(this, nl)[nl].produce(r, {
                clientMessageId: e
            }), Wr(this, ol)[ol].onEmission ? .({
                eventName: t
            })
        }

        function pl(e) {
            return {
                dwellTimeMs: String(e.dwellMilliseconds)
            }
        }
        var hl = Yr("collector"),
            fl = Yr("options"),
            ml = Yr("handle"),
            vl = Yr("eventName");
        class gl {
            constructor(e, t) {
                Object.defineProperty(this, vl, {
                    value: bl
                }), Object.defineProperty(this, ml, {
                    value: yl
                }), Object.defineProperty(this, hl, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, fl, {
                    writable: !0,
                    value: void 0
                }), Wr(this, hl)[hl] = e, Wr(this, fl)[fl] = t
            }
            register(e) {
                e("log:buyer-behavior:page-dwell", ({
                    id: e,
                    payload: {
                        event: t
                    }
                }) => {
                    Wr(this, ml)[ml](e, t)
                })
            }
        }

        function yl(e, t) {
            const r = Uu(Wr(this, fl)[fl].shopId, t.remoteShopId),
                n = Wr(this, vl)[vl](r),
                o = Wd(Wr(this, fl)[fl], t);
            if (!o.accepted) return void Wr(this, fl)[fl].onValidationError ? .({
                eventName: n,
                reason: o.reason
            });
            const i = {
                    shopId: Wr(this, fl)[fl].shopId
                },
                {
                    dwellMilliseconds: s
                } = t;
            let a;
            a = "product" === o.variant ? function(e, t) {
                return {
                    products: [Qu({
                        shopId: e.shopId,
                        productId: t.productId,
                        variantId: t.variantId,
                        commerceSource: "COMMERCE_SOURCE_ORGANIC"
                    })],
                    ...pl(t)
                }
            }(i, {
                productId: o.productId,
                variantId: o.variantId,
                dwellMilliseconds: s
            }) : "remote-product" === o.variant ? function(e) {
                return {
                    products: [Qu({
                        shopId: e.remoteShopId,
                        productId: e.productId,
                        variantId: e.variantId,
                        commerceSource: "COMMERCE_SOURCE_REMOTE"
                    })],
                    ...pl(e)
                }
            }({
                productId: o.productId,
                variantId: o.variantId,
                remoteShopId: o.remoteShopId,
                dwellMilliseconds: s
            }) : function(e, t) {
                return {
                    collection: Zu({
                        shopId: e.shopId,
                        collectionId: t.collectionId
                    }),
                    ...pl(t)
                }
            }(i, {
                collectionId: Wr(this, fl)[fl].resourceId,
                dwellMilliseconds: s
            }), Wr(this, hl)[hl].produce({
                "@type": "type.googleapis.com/shopify.buyer_activity.interactions.PageDwelledEvent",
                ...a
            }, {
                clientMessageId: e,
                canonicalContext: {
                    page: void 0 === t.pageUrl || {
                        url: t.pageUrl
                    },
                    view: {
                        name: Wr(this, fl)[fl].pageType
                    }
                }
            }), Wr(this, fl)[fl].onEmission ? .({
                eventName: n
            })
        }

        function bl(e) {
            return Wr(this, fl)[fl].pageType === er.Product ? e ? "remote_product_page_dwelled" : "product_page_dwelled" : "collection_page_dwelled"
        }
        const wl = "storefront_product_interaction_event_test/1.5",
            _l = "product_quantity_changed",
            Il = "remote_product_quantity_changed";

        function xl({
            shopId: e,
            productId: t,
            pageUrl: r,
            themeId: n,
            themePublished: o
        }, i) {
            const {
                quantity: s,
                remoteShopId: a,
                variantId: c
            } = i;
            if (void 0 === n || void 0 === o) return {
                accepted: !1,
                reason: "missing-theme-context"
            };
            if (!dr(t)) return {
                accepted: !1,
                reason: "invalid-product-id"
            };
            if (!Number.isInteger(s) || s <= 0) return {
                accepted: !1,
                reason: "invalid-quantity"
            };
            if (void 0 !== c && !dr(c)) return {
                accepted: !1,
                reason: "invalid-variant-id"
            };
            if (!Uu(e, a)) return {
                accepted: !0,
                remote: !1
            };
            if (!dr(a)) return {
                accepted: !1,
                reason: "invalid-remote-shop-id"
            };
            const u = cr(r) ? .adResponseId;
            return u ? {
                accepted: !0,
                remote: !0,
                remoteShopId: a,
                adResponseId: u
            } : {
                accepted: !1,
                reason: "missing-ad-response-id"
            }
        }

        function El({
            shopId: e,
            productId: t
        }, r) {
            const {
                quantity: n,
                remoteShopId: o,
                variantId: i
            } = r;
            return dr(t) ? !Number.isInteger(n) || n <= 0 ? {
                accepted: !1,
                reason: "invalid-quantity"
            } : void 0 === i || dr(i) ? Uu(e, o) ? dr(o) ? {
                accepted: !0,
                remote: !0,
                remoteShopId: o
            } : {
                accepted: !1,
                reason: "invalid-remote-shop-id"
            } : {
                accepted: !0,
                remote: !1
            } : {
                accepted: !1,
                reason: "invalid-variant-id"
            } : {
                accepted: !1,
                reason: "invalid-product-id"
            }
        }
        var kl = Yr("monorailClient"),
            Sl = Yr("options"),
            Cl = Yr("handle");
        class Tl {
            constructor(e, t) {
                Object.defineProperty(this, Cl, {
                    value: Al
                }), Object.defineProperty(this, kl, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, Sl, {
                    writable: !0,
                    value: void 0
                }), Wr(this, kl)[kl] = e, Wr(this, Sl)[Sl] = t
            }
            register(e) {
                e("log:buyer-behavior:product-quantity-change", ({
                    id: e,
                    payload: {
                        interaction: t,
                        event: r
                    }
                }) => {
                    "quantity" === t && Wr(this, Cl)[Cl](e, r)
                })
            }
        }

        function Al(e, t) {
            if ((Wr(this, Sl)[Sl].routeToCollector ? ? xl)(Wr(this, Sl)[Sl], t).accepted) return;
            const r = Uu(Wr(this, Sl)[Sl].shopId, t.remoteShopId) ? Il : _l,
                {
                    consent: n
                } = Wr(this, Sl)[Sl];
            Wr(this, kl)[kl].produce(wl, {
                eventId: e,
                source: "EVENT_APP_STOREFRONT",
                shopId: Wr(this, Sl)[Sl].shopId,
                eventName: r,
                pageUrl: Wr(this, Sl)[Sl].pageUrl,
                pageId: Wr(this, Sl)[Sl].pageId,
                requestId: Wr(this, Sl)[Sl].requestId,
                pageType: er.Product,
                productId: Wr(this, Sl)[Sl].productId,
                productHandle: t.productHandle,
                variantId: t.variantId,
                remoteShopId: t.remoteShopId,
                apiClientId: Wr(this, Sl)[Sl].apiClientId,
                themeId: Wr(this, Sl)[Sl].themeId,
                themeStoreId: Wr(this, Sl)[Sl].themeStoreId,
                themePublished: Wr(this, Sl)[Sl].themePublished,
                quantity: t.quantity,
                analyticsAllowed: n.analyticsProcessingAllowed(),
                marketingAllowed: n.marketingAllowed(),
                preferencesAllowed: n.preferencesProcessingAllowed(),
                saleOfDataAllowed: n.saleOfDataAllowed(),
                visitToken: n.trackingTokens.getVisitToken(),
                uniqueToken: n.trackingTokens.getUniqueToken()
            }, {
                credentials: !1
            }), Wr(this, Sl)[Sl].onEmission ? .({
                eventName: r,
                schemaId: wl
            })
        }

        function Pl({
            shopId: e,
            productId: t,
            pageType: r,
            themeId: n,
            themeStoreId: o,
            themePublished: i
        }, {
            quantity: s,
            variantId: a
        }) {
            return { ...void 0 !== r && {
                    pageContext: {
                        pageType: r
                    }
                },
                ...void 0 !== n && {
                    themeContext: {
                        themeId: Yi(n),
                        ...void 0 !== o && {
                            themeStoreId: String(o)
                        },
                        ...void 0 !== i && {
                            themePublished: i
                        }
                    }
                },
                product: Rl({
                    shopId: e,
                    productId: t,
                    variantId: a
                }),
                quantity: s
            }
        }

        function Ol(e, t) {
            return { ...Pl(e, t),
                product: Rl({
                    shopId: t.remoteShopId,
                    productId: e.productId,
                    variantId: t.variantId
                }),
                adContext: {
                    responseId: t.adResponseId,
                    publisherShopId: Yi(e.shopId),
                    advertiserShopId: Yi(t.remoteShopId)
                }
            }
        }

        function Rl({
            shopId: e,
            productId: t,
            variantId: r
        }) {
            return {
                shopId: Yi(e),
                productId: Yi(t),
                ...void 0 !== r && {
                    variantId: Yi(r)
                }
            }
        }
        var Nl = Yr("collector"),
            jl = Yr("options"),
            Ml = Yr("produce"),
            Ul = Yr("produceRemote");
        class Dl {
            constructor(e, t) {
                Object.defineProperty(this, Ul, {
                    value: Ll
                }), Object.defineProperty(this, Ml, {
                    value: $l
                }), Object.defineProperty(this, Nl, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, jl, {
                    writable: !0,
                    value: void 0
                }), Wr(this, Nl)[Nl] = e, Wr(this, jl)[jl] = t
            }
            register(e) {
                e("log:buyer-behavior:product-quantity-change", ({
                    id: e,
                    payload: {
                        interaction: t,
                        event: r
                    }
                }) => {
                    if ("quantity" !== t) return;
                    const n = Uu(Wr(this, jl)[jl].shopId, r.remoteShopId) ? Il : _l,
                        o = xl(Wr(this, jl)[jl], r);
                    o.accepted ? o.remote ? Wr(this, Ul)[Ul](e, n, r, o) : Wr(this, Ml)[Ml](e, n, r) : Wr(this, jl)[jl].onValidationError ? .({
                        eventName: n,
                        reason: o.reason
                    })
                })
            }
        }

        function $l(e, t, r) {
            const n = {
                "@type": "type.googleapis.com/shopify.buyer_activity.interactions.StorefrontProductQuantityChangedEvent",
                ...Pl(Wr(this, jl)[jl], r)
            };
            Wr(this, Nl)[Nl].produce(n, {
                clientMessageId: e
            }), Wr(this, jl)[jl].onEmission ? .({
                eventName: t
            })
        }

        function Ll(e, t, r, {
            remoteShopId: n,
            adResponseId: o
        }) {
            const i = {
                "@type": "type.googleapis.com/shopify.buyer_activity.interactions.StorefrontRemoteProductQuantityChangedEvent",
                ...Ol(Wr(this, jl)[jl], { ...r,
                    remoteShopId: n,
                    adResponseId: o
                })
            };
            Wr(this, Nl)[Nl].produce(i, {
                clientMessageId: e
            }), Wr(this, jl)[jl].onEmission ? .({
                eventName: t
            })
        }

        function ql(e, t) {
            return {
                product: Qu({
                    shopId: e.shopId,
                    productId: e.productId,
                    variantId: t.variantId,
                    commerceSource: "COMMERCE_SOURCE_ORGANIC"
                }),
                selectedQuantity: t.quantity
            }
        }
        var Vl = Yr("collector"),
            Bl = Yr("options"),
            Hl = Yr("produceOrganic"),
            Fl = Yr("produceRemote");
        class zl {
            constructor(e, t) {
                Object.defineProperty(this, Fl, {
                    value: Kl
                }), Object.defineProperty(this, Hl, {
                    value: Wl
                }), Object.defineProperty(this, Vl, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, Bl, {
                    writable: !0,
                    value: void 0
                }), Wr(this, Vl)[Vl] = e, Wr(this, Bl)[Bl] = t
            }
            register(e) {
                e("log:buyer-behavior:product-quantity-change", ({
                    id: e,
                    payload: {
                        interaction: t,
                        event: r
                    }
                }) => {
                    if ("quantity" !== t) return;
                    const n = Uu(Wr(this, Bl)[Bl].shopId, r.remoteShopId) ? Il : _l,
                        o = El(Wr(this, Bl)[Bl], r);
                    o.accepted ? o.remote ? Wr(this, Fl)[Fl](e, n, r, o) : Wr(this, Hl)[Hl](e, n, r) : Wr(this, Bl)[Bl].onValidationError ? .({
                        eventName: n,
                        reason: o.reason
                    })
                })
            }
        }

        function Wl(e, t, r) {
            Wr(this, Vl)[Vl].produce({
                "@type": Xu,
                ...ql(Wr(this, Bl)[Bl], r)
            }, {
                clientMessageId: e,
                canonicalContext: {
                    page: void 0 === r.pageUrl || {
                        url: r.pageUrl
                    },
                    ...Wr(this, Bl)[Bl].pageType && {
                        view: {
                            name: Wr(this, Bl)[Bl].pageType
                        }
                    }
                }
            }), Wr(this, Bl)[Bl].onEmission ? .({
                eventName: t
            })
        }

        function Kl(e, t, r, {
            remoteShopId: n
        }) {
            var o, i;
            Wr(this, Vl)[Vl].produce({
                "@type": Xu,
                ...(o = Wr(this, Bl)[Bl], i = { ...r,
                    remoteShopId: n
                }, { ...ql(o, i),
                    product: Qu({
                        shopId: i.remoteShopId,
                        productId: o.productId,
                        variantId: i.variantId,
                        commerceSource: "COMMERCE_SOURCE_REMOTE"
                    })
                })
            }, {
                clientMessageId: e,
                canonicalContext: {
                    page: void 0 === r.pageUrl || {
                        url: r.pageUrl
                    },
                    ...Wr(this, Bl)[Bl].pageType && {
                        view: {
                            name: Wr(this, Bl)[Bl].pageType
                        }
                    }
                }
            }), Wr(this, Bl)[Bl].onEmission ? .({
                eventName: t
            })
        }
        const Yl = "storefront_product_interaction_event_test/1.5",
            Jl = "product_variant_changed",
            Gl = "remote_product_variant_changed";

        function Xl({
            shopId: e,
            resourceId: t,
            pageUrl: r,
            themeId: n,
            themePublished: o
        }, i) {
            if (void 0 === n || void 0 === o) return {
                accepted: !1,
                reason: "missing-theme-context"
            };
            if (!dr(t)) return {
                accepted: !1,
                reason: "invalid-product-id"
            };
            if (!dr(i.variantId)) return {
                accepted: !1,
                reason: "invalid-variant-id"
            };
            const {
                remoteShopId: s
            } = i;
            if (!Uu(e, s)) return {
                accepted: !0,
                remote: !1
            };
            if (!dr(s)) return {
                accepted: !1,
                reason: "invalid-remote-shop-id"
            };
            const a = cr(r) ? .adResponseId;
            return a ? {
                accepted: !0,
                remote: !0,
                remoteShopId: s,
                adResponseId: a
            } : {
                accepted: !1,
                reason: "missing-ad-response-id"
            }
        }

        function Ql({
            shopId: e,
            resourceId: t
        }, r) {
            if (!dr(t)) return {
                accepted: !1,
                reason: "invalid-product-id"
            };
            if (!dr(r.variantId)) return {
                accepted: !1,
                reason: "invalid-variant-id"
            };
            const {
                remoteShopId: n
            } = r;
            return Uu(e, n) ? dr(n) ? {
                accepted: !0,
                remote: !0,
                remoteShopId: n
            } : {
                accepted: !1,
                reason: "invalid-remote-shop-id"
            } : {
                accepted: !0,
                remote: !1
            }
        }
        var Zl = Yr("monorailClient"),
            ep = Yr("options"),
            tp = Yr("handle");
        class rp {
            constructor(e, t) {
                Object.defineProperty(this, tp, {
                    value: np
                }), Object.defineProperty(this, Zl, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, ep, {
                    writable: !0,
                    value: void 0
                }), Wr(this, Zl)[Zl] = e, Wr(this, ep)[ep] = t
            }
            register(e) {
                e("log:buyer-behavior:product-variant-change", ({
                    id: e,
                    payload: {
                        event: t
                    }
                }) => {
                    Wr(this, tp)[tp](e, t)
                })
            }
        }

        function np(e, t) {
            if ((Wr(this, ep)[ep].routeToCollector ? ? Xl)(Wr(this, ep)[ep], t).accepted) return;
            const r = Uu(Wr(this, ep)[ep].shopId, t.remoteShopId) ? Gl : Jl,
                {
                    consent: n
                } = Wr(this, ep)[ep];
            Wr(this, Zl)[Zl].produce(Yl, {
                eventId: e,
                source: "EVENT_APP_STOREFRONT",
                shopId: Wr(this, ep)[ep].shopId,
                eventName: r,
                pageUrl: Wr(this, ep)[ep].pageUrl,
                pageId: Wr(this, ep)[ep].pageId,
                requestId: Wr(this, ep)[ep].requestId,
                pageType: er.Product,
                productId: Wr(this, ep)[ep].resourceId,
                productHandle: t.productHandle,
                variantId: t.variantId,
                remoteShopId: t.remoteShopId,
                apiClientId: Wr(this, ep)[ep].apiClientId,
                themeId: Wr(this, ep)[ep].themeId,
                themeStoreId: Wr(this, ep)[ep].themeStoreId,
                themePublished: Wr(this, ep)[ep].themePublished,
                analyticsAllowed: n.analyticsProcessingAllowed(),
                marketingAllowed: n.marketingAllowed(),
                preferencesAllowed: n.preferencesProcessingAllowed(),
                saleOfDataAllowed: n.saleOfDataAllowed(),
                visitToken: n.trackingTokens.getVisitToken(),
                uniqueToken: n.trackingTokens.getUniqueToken()
            }, {
                credentials: !1
            }), Wr(this, ep)[ep].onEmission ? .({
                eventName: r,
                schemaId: Yl
            })
        }

        function op(e, t) {
            return {
                products: [Qu({
                    shopId: e.shopId,
                    productId: e.resourceId,
                    variantId: t.variantId,
                    commerceSource: "COMMERCE_SOURCE_ORGANIC"
                })],
                selectedVariantId: rd(t.variantId)
            }
        }
        var ip = Yr("collector"),
            sp = Yr("options"),
            ap = Yr("produceOrganic"),
            cp = Yr("produceRemote");
        class up {
            constructor(e, t) {
                Object.defineProperty(this, cp, {
                    value: lp
                }), Object.defineProperty(this, ap, {
                    value: dp
                }), Object.defineProperty(this, ip, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, sp, {
                    writable: !0,
                    value: void 0
                }), Wr(this, ip)[ip] = e, Wr(this, sp)[sp] = t
            }
            register(e) {
                e("log:buyer-behavior:product-variant-change", ({
                    id: e,
                    payload: {
                        event: t
                    }
                }) => {
                    const r = Uu(Wr(this, sp)[sp].shopId, t.remoteShopId) ? Gl : Jl,
                        n = Ql(Wr(this, sp)[sp], t);
                    n.accepted ? n.remote ? Wr(this, cp)[cp](e, r, t, n) : Wr(this, ap)[ap](e, r, t) : Wr(this, sp)[sp].onValidationError ? .({
                        eventName: r,
                        reason: n.reason
                    })
                })
            }
        }

        function dp(e, t, r) {
            Wr(this, ip)[ip].produce({
                "@type": Gu,
                ...op(Wr(this, sp)[sp], r)
            }, {
                clientMessageId: e,
                canonicalContext: {
                    page: void 0 === r.pageUrl || {
                        url: r.pageUrl
                    },
                    view: {
                        name: er.Product
                    }
                }
            }), Wr(this, sp)[sp].onEmission ? .({
                eventName: t
            })
        }

        function lp(e, t, r, {
            remoteShopId: n
        }) {
            var o, i;
            Wr(this, ip)[ip].produce({
                "@type": Gu,
                ...(o = Wr(this, sp)[sp], i = { ...r,
                    remoteShopId: n
                }, { ...op(o, i),
                    products: [Qu({
                        shopId: i.remoteShopId,
                        productId: o.resourceId,
                        variantId: i.variantId,
                        commerceSource: "COMMERCE_SOURCE_REMOTE"
                    })]
                })
            }, {
                clientMessageId: e,
                canonicalContext: {
                    page: void 0 === r.pageUrl || {
                        url: r.pageUrl
                    },
                    view: {
                        name: er.Product
                    }
                }
            }), Wr(this, sp)[sp].onEmission ? .({
                eventName: t
            })
        }

        function pp({
            shopId: e,
            resourceId: t,
            themeId: r,
            themeStoreId: n,
            themePublished: o
        }, i) {
            const s = yd({
                themeId: r,
                themeStoreId: n,
                themePublished: o
            });
            return {
                pageContext: {
                    pageType: er.Product
                },
                ...void 0 !== s && {
                    themeContext: s
                },
                product: {
                    shopId: Yi(e),
                    productId: Yi(t),
                    variantId: Yi(i.variantId)
                }
            }
        }
        var hp = Yr("collector"),
            fp = Yr("options"),
            mp = Yr("produceOrganic"),
            vp = Yr("produceRemote");
        class gp {
            constructor(e, t) {
                Object.defineProperty(this, vp, {
                    value: bp
                }), Object.defineProperty(this, mp, {
                    value: yp
                }), Object.defineProperty(this, hp, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, fp, {
                    writable: !0,
                    value: void 0
                }), Wr(this, hp)[hp] = e, Wr(this, fp)[fp] = t
            }
            register(e) {
                e("log:buyer-behavior:product-variant-change", ({
                    id: e,
                    payload: {
                        event: t
                    }
                }) => {
                    const r = Uu(Wr(this, fp)[fp].shopId, t.remoteShopId) ? Gl : Jl,
                        n = Xl(Wr(this, fp)[fp], t);
                    n.accepted ? n.remote ? Wr(this, vp)[vp](e, r, t, n) : Wr(this, mp)[mp](e, r, t) : Wr(this, fp)[fp].onValidationError ? .({
                        eventName: r,
                        reason: n.reason
                    })
                })
            }
        }

        function yp(e, t, r) {
            const n = {
                "@type": "type.googleapis.com/shopify.buyer_activity.interactions.StorefrontProductVariantChangedEvent",
                ...pp(Wr(this, fp)[fp], r)
            };
            Wr(this, hp)[hp].produce(n, {
                clientMessageId: e
            }), Wr(this, fp)[fp].onEmission ? .({
                eventName: t
            })
        }

        function bp(e, t, r, {
            remoteShopId: n,
            adResponseId: o
        }) {
            const i = {
                "@type": "type.googleapis.com/shopify.buyer_activity.interactions.StorefrontRemoteProductVariantChangedEvent",
                ...(s = Wr(this, fp)[fp], a = { ...r,
                    remoteShopId: n,
                    adResponseId: o
                }, { ...pp(s, a),
                    product: {
                        shopId: Yi(a.remoteShopId),
                        productId: Yi(s.resourceId),
                        variantId: Yi(a.variantId)
                    },
                    adContext: {
                        responseId: a.adResponseId,
                        publisherShopId: Yi(s.shopId),
                        advertiserShopId: Yi(a.remoteShopId)
                    }
                })
            };
            var s, a;
            Wr(this, hp)[hp].produce(i, {
                clientMessageId: e
            }), Wr(this, fp)[fp].onEmission ? .({
                eventName: t
            })
        }
        var wp = Yr("monorailClient"),
            _p = Yr("configuration");
        class Ip {
            constructor(e, t) {
                Object.defineProperty(this, wp, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, _p, {
                    writable: !0,
                    value: void 0
                }), Wr(this, wp)[wp] = e, Wr(this, _p)[_p] = t
            }
            register(e) {
                Wr(this, _p)[_p].surface === y.CustomerAccount && e("log:event-bus:publish", ({
                    payload: {
                        event: e
                    }
                }) => {
                    if ("page_viewed" === e.name) {
                        const {
                            context: t
                        } = e, {
                            consent: r
                        } = Wr(this, _p)[_p], n = r.analyticsProcessingAllowed(), o = r.marketingAllowed(), i = r.preferencesProcessingAllowed(), s = r.saleOfDataAllowed(), a = !(o && n), c = {
                            eventName: "page_rendered",
                            shopifyEmitted: !0,
                            eventTime: new Date(e.timestamp).valueOf(),
                            eventId: e.id,
                            uniqueToken: e.clientId,
                            userAgent: t.navigator.userAgent,
                            acceptLanguage: t.navigator.language,
                            referrer: t.document.referrer,
                            eventSourceUrl: t.document.location.href,
                            source: `wpm-${Wr(this,_p)[_p].surface}`,
                            shopId: Wr(this, _p)[_p].shopId,
                            isMerchantRequest: Wr(this, _p)[_p].isMerchantRequest,
                            apiClientId: Wr(this, _p)[_p].apiClientId,
                            customerId: Wr(this, _p)[_p].customerId,
                            analyticsAllowed: n,
                            marketingAllowed: o,
                            preferencesAllowed: i,
                            saleOfDataAllowed: s,
                            facebookCapiEnabled: Wr(this, _p)[_p].firstPartyTracking.facebookCapiEnabled,
                            deprecatedVisitToken: r.trackingTokens.getVisitToken()
                        };
                        Wr(this, wp)[wp].produce("storefront_customer_tracking/4.27", { ...c,
                            emittedToV5: !0,
                            ccpaEnforced: !s,
                            gdprEnforced: a,
                            isPersistentCookie: "persistent" === (Lt("_shopify_m") ? ? "persistent")
                        });
                        const {
                            browserContext: u
                        } = Wr(this, _p)[_p];
                        Wr(this, wp)[wp].produce("storefront_customer_tracking/5.11", { ...c,
                            tiCv: Rn,
                            ...u && {
                                attributes: () => {
                                    const e = u.getAttributes();
                                    return e && JSON.stringify(e)
                                },
                                attributesVersion: 2
                            }
                        })
                    }
                })
            }
        }
        r(9335);
        const xp = ["checkout_completed", "checkout_started", "payment_info_submitted", "checkout_shipping_info_submitted", "checkout_contact_info_submitted", "checkout_address_info_submitted"],
            Ep = new Set([...xp, "page_viewed", "product_viewed", "collection_viewed", "product_added_to_cart", "search_submitted"]),
            kp = {
                page_viewed: "page_rendered",
                product_viewed: "product_page_rendered",
                collection_viewed: "collection_page_rendered"
            },
            Sp = e => kp[e] || e,
            Cp = (e, t) => {
                const r = e ? .product ? .title,
                    n = e ? .title,
                    o = r && n ? `${r} - ${n}` : r;
                return {
                    variant_id: e ? .id || void 0,
                    product_id: e ? .product ? .id || void 0,
                    handle: $(e ? .product ? .url),
                    name: o || void 0,
                    price: e ? .price ? .amount ? ? void 0,
                    sku: e ? .sku || void 0,
                    brand: e ? .product ? .vendor || void 0,
                    variant: e ? .title || void 0,
                    category: e ? .product ? .type || void 0,
                    quantity: t || void 0
                }
            },
            Tp = e => {
                try {
                    return e.map(e => JSON.stringify(e))
                } catch (t) {
                    return console.warn("Failed to serialize product objects for tracking:", t), []
                }
            };
        var Ap = Yr("client"),
            Pp = Yr("surface"),
            Op = Yr("sessionId");
        class Rp {
            constructor(e, {
                surface: t,
                sessionId: r
            }) {
                Object.defineProperty(this, Ap, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, Pp, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, Op, {
                    writable: !0,
                    value: void 0
                }), Wr(this, Ap)[Ap] = e, Wr(this, Pp)[Pp] = t, Wr(this, Op)[Op] = r
            }
            register(e) {
                e("log:event-bus:publish", ({
                    payload: {
                        event: e
                    }
                }) => {
                    if (!(e => Ep.has(e.name))(e)) return;
                    const {
                        context: t
                    } = e, r = {
                        eventTime: new Date(e.timestamp).valueOf(),
                        eventId: e.id,
                        uniqueToken: e.clientId,
                        eventSourceUrl: t.document.location.href,
                        surface: Wr(this, Pp)[Pp],
                        userAgent: t.navigator.userAgent,
                        sessionId: Wr(this, Op)[Op],
                        referrer: t.document.referrer
                    };
                    if ((e => xp.includes(e.name))(e)) {
                        const {
                            checkout: t
                        } = e.data;
                        Wr(this, Ap)[Ap].track({ ...r,
                            eventName: e.name,
                            checkoutToken: t.token || void 0,
                            orderId: t.order ? .id || void 0,
                            subtotalValue: t.subtotalPrice ? .amount,
                            totalValue: t.totalPrice ? .amount,
                            currency: t.currencyCode || void 0,
                            email: t.email || void 0,
                            phone: t.shippingAddress ? .phone || void 0,
                            billingAddressCity: t.shippingAddress ? .city || void 0,
                            billingAddressCountry: t.shippingAddress ? .country || void 0,
                            billingAddressRegion: t.shippingAddress ? .province || void 0,
                            products: Tp(t.lineItems.flatMap(({
                                variant: e,
                                quantity: t
                            }) => e ? [Cp(e, t)] : []))
                        })
                    } else if ("product_viewed" === e.name) {
                        const {
                            productVariant: t
                        } = e.data;
                        Wr(this, Ap)[Ap].track({ ...r,
                            eventName: Sp(e.name),
                            productId: t.product ? .id || void 0,
                            productTitle: t.product ? .title || void 0,
                            totalValue: t.price ? .amount || void 0,
                            currency: t.price ? .currencyCode || void 0
                        })
                    } else if ("collection_viewed" === e.name) {
                        const {
                            collection: t
                        } = e.data;
                        Wr(this, Ap)[Ap].track({ ...r,
                            eventName: Sp(e.name),
                            collectionName: t ? .title || void 0,
                            currency: t ? .productVariants ? .find(e => e ? .price ? .currencyCode) ? .price ? .currencyCode || void 0
                        })
                    } else if ("product_added_to_cart" === e.name) {
                        const {
                            cartLine: t
                        } = e.data, {
                            merchandise: n
                        } = t || {}, o = Tp([Cp(n, t ? .quantity)]);
                        Wr(this, Ap)[Ap].track({ ...r,
                            eventName: e.name,
                            products: o,
                            totalValue: t ? .cost ? .totalAmount ? .amount || void 0,
                            currency: t ? .cost ? .totalAmount ? .currencyCode || void 0
                        })
                    } else if ("page_viewed" === e.name) Wr(this, Ap)[Ap].track({ ...r,
                        eventName: Sp(e.name),
                        referrer: t.document.referrer
                    });
                    else if ("search_submitted" === e.name) {
                        const {
                            searchResult: n
                        } = e.data;
                        Wr(this, Ap)[Ap].track({ ...r,
                            eventName: e.name,
                            searchString: n ? .query || "",
                            referrer: t.document.referrer
                        })
                    }
                })
            }
        }
        var Np = Yr("sendEvent"),
            jp = Yr("configuration");
        class Mp {
            constructor(e, t) {
                Object.defineProperty(this, Np, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, jp, {
                    writable: !0,
                    value: void 0
                }), Wr(this, Np)[Np] = e, Wr(this, jp)[jp] = t
            }
            track(e) {
                try {
                    const {
                        consent: t
                    } = Wr(this, jp)[jp], r = { ...e,
                        shopId: Wr(this, jp)[jp].shopId,
                        source: this.constructSource(e.surface),
                        analyticsAllowed: t.analyticsProcessingAllowed(),
                        marketingAllowed: t.marketingAllowed(),
                        preferencesAllowed: t.preferencesProcessingAllowed(),
                        saleOfDataAllowed: t.saleOfDataAllowed(),
                        assetVersionId: Pn,
                        facebookCapiEnabled: !1,
                        shopifyEmitted: !0
                    };
                    Wr(this, Np)[Np](si("webPixelsStorefrontCustomerTracking", r), {
                        credentials: !1
                    })
                } catch (t) {}
            }
            constructSource(e) {
                return `wpm-${e}`
            }
        }
        const Up = "__shopify_agent_context_events";
        class Dp {
            persist(e) {
                const t = Tr(() => sessionStorage.getItem(Up), null),
                    r = Tr(() => t ? JSON.parse(t) : [], []),
                    n = Array.isArray(r) ? r : [];
                n.length >= 50 && n.shift(), n.push(e), Tr(() => sessionStorage.setItem(Up, JSON.stringify(n)))
            }
        }
        const $p = new Set(["page_viewed", "product_viewed", "collection_viewed", "product_added_to_cart", "search_submitted"]);
        var Lp = Yr("client"),
            qp = Yr("extractDetail");
        class Vp {
            constructor({
                client: e
            }) {
                Object.defineProperty(this, qp, {
                    value: Bp
                }), Object.defineProperty(this, Lp, {
                    writable: !0,
                    value: void 0
                }), Wr(this, Lp)[Lp] = e
            }
            register(e) {
                e("log:event-bus:publish", ({
                    payload: {
                        event: e
                    }
                }) => {
                    if (!(e => $p.has(e.name))(e)) return;
                    const t = Wr(this, qp)[qp](e);
                    t && Wr(this, Lp)[Lp].persist(t)
                })
            }
        }

        function Bp(e) {
            const t = e.context.document.location.href,
                r = new Date(e.timestamp).valueOf();
            switch (e.name) {
                case "page_viewed":
                    return {
                        type: "page_viewed",
                        url: t,
                        referrer: e.context.document.referrer,
                        timestamp: r
                    };
                case "product_viewed":
                    {
                        const {
                            productVariant: n
                        } = e.data;
                        return {
                            type: "product_viewed",
                            title: n.product ? .title || "",
                            productId: n.product ? .id || "",
                            price: n.price ? .amount || 0,
                            currency: n.price ? .currencyCode || "",
                            url: t,
                            timestamp: r
                        }
                    }
                case "collection_viewed":
                    {
                        const {
                            collection: n
                        } = e.data;
                        return {
                            type: "collection_viewed",
                            title: n ? .title || "",
                            currency: n ? .productVariants ? .find(e => e ? .price ? .currencyCode) ? .price ? .currencyCode || "",
                            url: t,
                            timestamp: r
                        }
                    }
                case "product_added_to_cart":
                    {
                        const {
                            cartLine: n
                        } = e.data,
                        {
                            merchandise: o
                        } = n || {};
                        return {
                            type: "product_added_to_cart",
                            productTitle: o ? .product ? .title || "",
                            variantTitle: o ? .title || "",
                            price: o ? .price ? .amount || 0,
                            currency: o ? .price ? .currencyCode || "",
                            quantity: n ? .quantity || 0,
                            sku: o ? .sku || "",
                            url: t,
                            timestamp: r
                        }
                    }
                case "search_submitted":
                    {
                        const {
                            searchResult: n
                        } = e.data;
                        return {
                            type: "search_submitted",
                            query: n ? .query || "",
                            url: t,
                            timestamp: r
                        }
                    }
                default:
                    return null
            }
        }
        const Hp = new WeakMap;

        function Fp(t) {
            const r = Hp.get(t);
            if (r) return r;
            const n = e();
            return Hp.set(t, n), n
        }

        function zp(e) {
            if (null == e) return {};
            switch (typeof e) {
                case "string":
                    return {
                        string: e
                    };
                case "boolean":
                    return {
                        boolean: e
                    };
                case "bigint":
                    return {
                        int: e.toString()
                    };
                case "number":
                    return function(e) {
                        return Number.isInteger(e) ? {
                            int: e.toString()
                        } : Number.isNaN(e) ? {
                            double: "NaN"
                        } : e === 1 / 0 ? {
                            double: "Infinity"
                        } : e === -1 / 0 ? {
                            double: "-Infinity"
                        } : {
                            double: e
                        }
                    }(e);
                case "object":
                    return function(e) {
                        try {
                            return {
                                string: JSON.stringify(e)
                            }
                        } catch {
                            return {}
                        }
                    }(e);
                default:
                    return {
                        string: String(e)
                    }
            }
        }

        function Wp(e, t) {
            return Array.isArray(t) ? {
                key: e,
                array: {
                    value: t.map(e => zp(e))
                }
            } : null == t ? {
                key: e
            } : {
                key: e,
                value: zp(t)
            }
        }

        function Kp(e, {
            eventId: t,
            monorailMetadata: r
        }) {
            return [Wp("advertiser_shop_id", e.advertiserShopId), Wp("ad_response_id", e.adResponseId), Wp("position", e.position), Wp("above_fold", e.aboveFold), Wp("viewport_width", e.viewportWidth), Wp("viewport_height", e.viewportHeight), Wp("x_pos", e.xPos), Wp("y_pos", e.yPos), Wp("session_id", e.sessionId), Wp("publisher_shop_id", e.publisherShopId), Wp("placement", e.placement), Wp("event_data", e.eventData), Wp("theme_id", e.themeId), Wp("theme_store_id", e.themeStoreId), Wp("theme_published", e.themePublished), Wp("original_event_id", t), Wp("original_schema_id", e.originalSchemaId), Wp("monorail_metadata", r), Wp("client_surface", "web-pixels-manager")]
        }

        function Yp(e) {
            return "string" == typeof e ? e : void 0
        }

        function Jp(e) {
            if (!e && 0 !== e) return;
            const t = Number(e);
            return Number.isNaN(t) ? void 0 : t
        }

        function Gp(e) {
            return "number" == typeof e && Number.isFinite(e)
        }

        function Xp(e) {
            return Boolean(e) && "object" == typeof e && !Array.isArray(e)
        }

        function Qp(e) {
            return Xp(e) ? e : void 0
        }

        function Zp(e, t) {
            if (!Array.isArray(e) || 0 === e.length) return;
            const r = e.filter(t);
            return r.length === e.length ? r : void 0
        }

        function eh(e) {
            return Array.isArray(e) ? e.filter(Xp) : []
        }

        function th(e) {
            const t = e.toLowerCase();
            if (t.startsWith("monorail://") && t.length > 11) return t.slice(11)
        }
        const rh = new Map([
            ["trekkie_storefront_remote_ad_rendered", "BUYER_EVENT_TYPE_AD_RENDERED"],
            ["trekkie_storefront_remote_ad_impression", "BUYER_EVENT_TYPE_AD_IMPRESSION"],
            ["trekkie_storefront_remote_ad_click", "BUYER_EVENT_TYPE_AD_CLICKED"]
        ]);

        function nh({
            method: e,
            args: [t, r]
        }) {
            if ("track" !== e) return;
            const n = Yp(t);
            if (!n) return;
            const o = th(n);
            if (!o) return;
            const i = function(e) {
                const [t] = e.split("/");
                if (t) return rh.get(t)
            }(o);
            return i ? {
                schemaId: o,
                buyerAdEventName: i,
                properties: Qp(r) ? ? {}
            } : void 0
        }

        function oh(e) {
            return "string" == typeof e ? e : Gp(e) ? String(e) : void 0
        }

        function ih(e, t, r) {
            return oh(e[t]) || oh(e[r])
        }

        function sh(e, t, r) {
            return Jp(e[t]) ? ? Jp(e[r])
        }

        function ah(e, t, r) {
            const n = e[t];
            if ("boolean" == typeof n) return n;
            const o = e[r];
            return "boolean" == typeof o ? o : void 0
        }

        function ch(e, t, r) {
            return e[t] ? ? e[r]
        }

        function uh(e, t) {
            return {
                shopId: sh(e, "shopId", "shop_id"),
                publisherShopId: sh(e, "publisherShopId", "publisher_shop_id"),
                eventId: ih(e, "eventId", "event_id"),
                originalSchemaId: t,
                advertiserShopId: sh(e, "advertiserShopId", "advertiser_shop_id"),
                adResponseId: ih(e, "adResponseId", "ad_response_id"),
                position: sh(e, "position", "position"),
                aboveFold: ah(e, "aboveFold", "above_fold"),
                viewportWidth: sh(e, "viewportWidth", "viewport_width"),
                viewportHeight: sh(e, "viewportHeight", "viewport_height"),
                xPos: sh(e, "xPos", "x_pos"),
                yPos: sh(e, "yPos", "y_pos"),
                sessionId: ih(e, "sessionId", "session_id"),
                placement: ih(e, "placement", "placement"),
                eventData: ch(e, "eventData", "event_data"),
                themeId: sh(e, "themeId", "theme_id"),
                themeStoreId: sh(e, "themeStoreId", "theme_store_id"),
                themePublished: ah(e, "themePublished", "theme_published"),
                monorailMetadata: ch(e, "s2sMetadata", "s2s_metadata")
            }
        }

        function dh(e) {
            return oh(e.eventId)
        }

        function lh(e, t) {
            return e.shopId ? ? e.publisherShopId ? ? t
        }
        var ph = Yr("collector"),
            hh = Yr("options"),
            fh = Yr("produce");
        class mh {
            constructor(e, t) {
                Object.defineProperty(this, fh, {
                    value: vh
                }), Object.defineProperty(this, ph, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, hh, {
                    writable: !0,
                    value: void 0
                }), Wr(this, ph)[ph] = e, Wr(this, hh)[hh] = t
            }
            register(e) {
                e("log:trekkie:track", e => {
                    const t = nh(e.payload);
                    t && Wr(this, fh)[fh](t, {
                        clientMessageId: e.id,
                        generatedEventId: Fp(e.payload)
                    })
                })
            }
        }

        function vh({
            buyerAdEventName: e,
            schemaId: t,
            properties: r
        }, {
            clientMessageId: n,
            generatedEventId: o
        }) {
            const {
                apiClientId: i,
                consent: s,
                navigationApi: a,
                navigationType: c,
                shopId: u
            } = Wr(this, hh)[hh], d = function(e) {
                return dr(e) ? e : void 0
            }(u);
            if (void 0 === d) return void Wr(this, hh)[hh].onValidationError ? .({
                eventName: e,
                reason: "invalid-shop-id"
            });
            const l = uh(r, t),
                p = function(e) {
                    return e ? ? 580111
                }(i);
            Wr(this, ph)[ph].produce(function({
                eventName: e,
                consent: t,
                shopId: r,
                apiClientId: n,
                shopifyY: o
            }) {
                return {
                    "@type": "type.googleapis.com/shopify.event.BuyerEvent",
                    actor: "ACTOR_BUYER",
                    eventProducer: "EVENT_PRODUCER_RAW_SOURCE",
                    eventType: e,
                    shopId: Yi(r),
                    apiClient: {
                        id: Yi(n)
                    },
                    buyerConsents: Zi(t),
                    buyer: {
                        userIdentities: [{
                            shopifyYCookie: {
                                shopifyY: o
                            }
                        }]
                    }
                }
            }({
                eventName: e,
                consent: {
                    analyticsProcessingAllowed: s.analyticsProcessingAllowed(),
                    marketingAllowed: s.marketingAllowed(),
                    preferencesProcessingAllowed: s.preferencesProcessingAllowed(),
                    saleOfDataAllowed: s.saleOfDataAllowed()
                },
                shopId: d,
                apiClientId: p,
                shopifyY: s.trackingTokens.getUniqueToken()
            }), {
                apiClientId: p,
                tags: Kp(l, {
                    eventId: dh(r) ? ? o,
                    monorailMetadata: l.monorailMetadata ? ? {
                        navigationType: c,
                        navigationApi: a
                    }
                }),
                clientMessageId: n,
                clientMessageCreatedAt: (new Date).toISOString(),
                canonicalContext: {
                    page: !0
                }
            }), Wr(this, hh)[hh].onEmission ? .({
                eventName: e
            })
        }
        var gh = Yr("monorailClient"),
            yh = Yr("options"),
            bh = Yr("produce");
        class wh {
            constructor(e, t) {
                Object.defineProperty(this, bh, {
                    value: _h
                }), Object.defineProperty(this, gh, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, yh, {
                    writable: !0,
                    value: void 0
                }), Wr(this, gh)[gh] = e, Wr(this, yh)[yh] = t
            }
            register(e) {
                e("log:trekkie:track", e => {
                    const t = nh(e.payload);
                    t && Wr(this, bh)[bh](t, Fp(e.payload))
                })
            }
        }

        function _h({
            buyerAdEventName: e,
            schemaId: t,
            properties: r
        }, n) {
            const {
                consent: o
            } = Wr(this, yh)[yh], i = o.analyticsProcessingAllowed(), s = o.marketingAllowed(), a = !(s && i), c = uh(r, t);
            Wr(this, gh)[gh].produce("storefront_customer_tracking_parity/1.0", {
                shopId: lh(c, Wr(this, yh)[yh].shopId),
                eventId: c.eventId || n,
                eventName: e,
                eventTime: (new Date).getTime(),
                eventSourceUrl: Wr(this, yh)[yh].pageUrl || self.location ? .href || "",
                uniqueToken: o.trackingTokens.getUniqueToken() || Ie,
                source: `wpm-${Wr(this,yh)[yh].surface}`,
                shopifyEmitted: !0,
                assetVersionId: Pn,
                ccpaEnforced: !o.saleOfDataAllowed(),
                gdprEnforced: a,
                gdprEnforcedAsString: String(a),
                isPersistentCookie: "persistent" === (Lt("_shopify_m") ? ? "persistent"),
                analyticsAllowed: i,
                marketingAllowed: s,
                preferencesAllowed: o.preferencesProcessingAllowed(),
                saleOfDataAllowed: o.saleOfDataAllowed(),
                deprecatedVisitToken: o.trackingTokens.getVisitToken(),
                sessionId: Wr(this, yh)[yh].sessionId,
                pageId: Wr(this, yh)[yh].pageId,
                userAgent: self.navigator ? .userAgent,
                apiClientId: Wr(this, yh)[yh].apiClientId,
                isMerchantRequest: Wr(this, yh)[yh].isMerchantRequest,
                navigationType: Wr(this, yh)[yh].navigationType,
                navigationApi: Wr(this, yh)[yh].navigationApi
            }), Wr(this, yh)[yh].onProduce ? .(e)
        }
        var Ih = Yr("monorailClient"),
            xh = Yr("options");
        class Eh {
            constructor(e, t) {
                Object.defineProperty(this, Ih, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, xh, {
                    writable: !0,
                    value: void 0
                }), Wr(this, Ih)[Ih] = e, Wr(this, xh)[xh] = t
            }
            register(e) {
                e("log:event-bus:publish:blocked", ({
                    payload: e
                }) => {
                    const {
                        pixel: t,
                        event: r
                    } = e;
                    t.type === b.App && Wr(this, Ih)[Ih].produce("web_pixels_manager_subscriber_event_blocked/1.1", {
                        eventId: r.id,
                        apiClientId: t.apiClientId ? .toString(),
                        shopId: Wr(this, xh)[xh].shopId,
                        pixelId: t.id,
                        pixelSource: t.type,
                        surface: Wr(this, xh)[xh].surface,
                        eventName: r.name,
                        eventType: p(r.name),
                        dataSharingState: t.dataSharingState ? ? "unknown",
                        bundleTarget: An,
                        pageUrl: Wr(this, xh)[xh].pageUrl
                    }, {
                        credentials: !1
                    })
                })
            }
        }
        var kh = Yr("client");
        class Sh {
            constructor(e) {
                Object.defineProperty(this, kh, {
                    writable: !0,
                    value: void 0
                }), Wr(this, kh)[kh] = e
            }
            register(e) {
                e("log:event-bus:publish:blocked", ({
                    payload: {
                        pixel: e,
                        event: t
                    }
                }) => {
                    Wr(this, kh)[kh].record("feature_usage", 1, {
                        feature: "pixel_event_blocked",
                        pixel_type: e.type,
                        event_type: p(t.name),
                        data_sharing_state: e.dataSharingState ? ? "unknown"
                    })
                })
            }
        }
        const Ch = "storefront_customer_tracking_parity/1.2",
            Th = "storefront_customer_tracking/5.11",
            Ah = [
                [/^[ _]?checkout[ _]?one[ _]?page[ _]?view[ _]?$/i, "page_rendered"],
                [/^[ _]?viewed[ _]?product[ _]?$/i, "product_page_rendered"],
                [/^[ _]?viewed[ _]?product[ _]?category[ _]?$/i, "collection_page_rendered"],
                [/^[ _]?added[ _]?product[ _]?$/i, "product_added_to_cart"],
                [/^[ _]?completed[ _]?order[ _]?$/i, "checkout_completed"],
                [/^[ _]?started[ _]?order[ _]?remote[ _]?$/i, "remote_checkout_started"],
                [/^[ _]?started[ _]?order[ _]?$/i, "checkout_started"],
                [/^[ _]?performed[ _]?search[ _]?$/i, "search_submitted"],
                [/^[ _]?added[ _]?payment[ _]?remote[ _]?$/i, "remote_payment_info_submitted"],
                [/^[ _]?added[ _]?payment[ _]?$/i, "payment_info_submitted"],
                [/^[ _]?checkout[ _]?[ _]?contact[ _]?info[ _]?submitted[ _]?remote[ _]?$/i, "remote_checkout_contact_info_submitted"],
                [/^[ _]?checkout[ _]?[ _]?contact[ _]?info[ _]?submitted[ _]?$/i, "checkout_contact_info_submitted"],
                [/^[ _]?checkout[ _]?[ _]?address[ _]?info[ _]?submitted[ _]?remote[ _]?$/i, "remote_checkout_address_info_submitted"],
                [/^[ _]?checkout[ _]?[ _]?address[ _]?info[ _]?submitted[ _]?$/i, "checkout_address_info_submitted"],
                [/^[ _]?checkout[ _]?[ _]?shipping[ _]?info[ _]?submitted[ _]?remote[ _]?$/i, "remote_checkout_shipping_info_submitted"],
                [/^[ _]?checkout[ _]?[ _]?shipping[ _]?info[ _]?submitted[ _]?$/i, "checkout_shipping_info_submitted"]
            ],
            Ph = "custom_storefront_customer_tracking/1.6",
            Oh = new Set([6167201, 12875497473]),
            Rh = new Set(["page_rendered", "payment_info_submitted", "checkout_contact_info_submitted", "checkout_address_info_submitted", "checkout_shipping_info_submitted", "checkout_started", "checkout_completed"]);
        let Nh = function(e) {
            return e.Block = "block", e.Filter = "filter", e.Allow = "allow", e
        }({});

        function jh(e) {
            const t = self.ShopifyAnalytics ? .meta;
            if (!t ? .remoteProductsEnabled) return Nh.Allow;
            if (!e) {
                const e = t.product;
                return e ? void 0 === e.id ? Nh.Block : !0 === e.remote ? Nh.Filter : Nh.Allow : Nh.Allow
            }
            return void 0 === e.productId ? Nh.Block : function(e, t) {
                return "boolean" == typeof e.remote ? e.remote : !!e.variantId && Boolean(function(e, t) {
                    return e.products ? function(e, t) {
                        for (const r of t)
                            if (r.variants)
                                for (const t of r.variants)
                                    if (String(t.id) === e) return r
                    }(t, e.products) : e.product ? .variants && e.product.variants.some(e => String(e.id) === t) ? e.product : void 0
                }(t, e.variantId) ? .remote)
            }(e, t) ? Nh.Filter : Nh.Allow
        }
        const Mh = {
            page_rendered: "page_viewed",
            remote_page_rendered: "page_viewed",
            product_page_rendered: "product_viewed",
            remote_product_page_rendered: "product_viewed",
            product_added_to_cart: "product_added_to_cart",
            remote_product_added_to_cart: "product_added_to_cart",
            checkout_started: "checkout_started",
            remote_checkout_started: "checkout_started",
            checkout_completed: "checkout_completed",
            search_submitted: "search_submitted",
            payment_info_submitted: "payment_info_submitted",
            remote_payment_info_submitted: "payment_info_submitted",
            collection_page_rendered: "collection_viewed",
            checkout_contact_info_submitted: "checkout_contact_info_submitted",
            remote_checkout_contact_info_submitted: "checkout_contact_info_submitted",
            checkout_address_info_submitted: "checkout_address_info_submitted",
            remote_checkout_address_info_submitted: "checkout_address_info_submitted",
            checkout_shipping_info_submitted: "checkout_shipping_info_submitted",
            remote_checkout_shipping_info_submitted: "checkout_shipping_info_submitted"
        };

        function Uh(e) {
            if (e.productId && e.variantId) return `${e.productId}-${e.variantId}`
        }
        const Dh = /^https?:\/\//;
        let $h, Lh;

        function qh() {
            const e = self.location ? .href;
            return e && e === $h || ($h = e, Lh = function() {
                const e = self.document ? .getElementsByTagName("link");
                if (e)
                    for (const t of Array.from(e)) {
                        if ("canonical" !== t.getAttribute("rel")) continue;
                        const e = t.getAttribute("href");
                        if (e && Dh.test(e) && !(e.replace(Dh, "").length <= 5)) return e
                    }
            }()), Lh
        }

        function Vh(e) {
            return "string" == typeof e && e || "USD"
        }

        function Bh(e) {
            return e.map(e => JSON.stringify({
                variant_id: Jp(e.variantId) ? ? null,
                product_id: Jp(e.productId) ? ? null,
                product_gid: e.productGid,
                handle: Yp(e.productHandle),
                name: e.name,
                price: Jp(e.price) ? ? 0,
                sku: e.sku,
                brand: e.brand,
                variant: e.variant,
                category: e.category,
                available: "boolean" == typeof e.available ? e.available : void 0,
                quantity: Jp(e.quantity || 0) ? ? null
            }))
        }

        function Hh(e) {
            return {
                totalValue: Jp(e.price) ? ? 0,
                currency: Vh(e.currency)
            }
        }

        function Fh(e) {
            return {
                totalValue: Jp(e.total) ? ? 0,
                subtotalValue: Jp(e.subtotalAfterMerchandiseDiscounts) ? ? 0,
                currency: Vh(e.currency)
            }
        }

        function zh(e) {
            return Jp(e.subtotalAfterMerchandiseDiscounts) ? ? 0
        }

        function Wh(e) {
            return {
                billingAddressCity: Yp(e ? .city),
                billingAddressCountry: Yp(e ? .country),
                billingAddressRegion: Yp(e ? .province)
            }
        }

        function Kh(e, t) {
            const r = Yp(e);
            return {
                referrer: t ? .referrer ? ? self.document ? .referrer,
                canonicalUrl: qh() ? ? "",
                pageType: "searchresults" === r ? "search" : r
            }
        }
        const Yh = {
            page_rendered: "z",
            product_page_rendered: "x",
            collection_page_rendered: "c",
            search_submitted: "b"
        };

        function Jh(t, r) {
            try {
                if (!Yh[t] || "storefront-renderer" !== r) return;
                const n = ti() ? .serverTiming ? .find(e => "requestID" === e.name) ? .description;
                if (!n) return;
                return function(e, t) {
                    try {
                        const r = Gh(e, t);
                        return r ? window.sessionStorage.getItem(r) : null
                    } catch {
                        return null
                    }
                }(n, t) ? e().toUpperCase() : (function(e, t) {
                    try {
                        const r = Gh(e, t);
                        if (!r) return;
                        window.sessionStorage.setItem(r, (new Date).getTime().toString())
                    } catch {}
                }(n, t), n)
            } catch {
                return
            }
        }

        function Gh(e, t) {
            const r = Yh[t];
            if (r) return `wpm-ri-${e}-${r}`
        }

        function Xh(e) {
            return "string" == typeof e ? e : Gp(e) ? String(e) : void 0
        }

        function Qh(e) {
            const t = Qp(e);
            if (t) return {
                url: Yp(t.url),
                referrer: Yp(t.referrer)
            }
        }

        function Zh(e) {
            return {
                productId: Xh(e.productId),
                variantId: Xh(e.variantId),
                remote: "boolean" == typeof e.remote ? e.remote : void 0
            }
        }

        function ef(e, t, r) {
            return e === Nh.Block ? null : e === Nh.Filter ? r : t
        }
        var tf = Yr("monorailClient"),
            rf = Yr("configuration"),
            nf = Yr("resolveTrackFlags"),
            of = Yr("resolveEventName"),
            sf = Yr("produce");
        class af {
            constructor(e, t) {
                Object.defineProperty(this, sf, {
                    value: df
                }), Object.defineProperty(this, of , {
                    value: uf
                }), Object.defineProperty(this, nf, {
                    value: cf
                }), Object.defineProperty(this, tf, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, rf, {
                    writable: !0,
                    value: void 0
                }), Wr(this, tf)[tf] = e, Wr(this, rf)[rf] = t
            }
            register(e) {
                e("log:trekkie:track", ({
                    replayed: e,
                    payload: {
                        method: t,
                        pageContext: r,
                        args: [n, o, i, s, a]
                    }
                }) => {
                    const c = Qp(o) ? ? {},
                        u = Qp(a) ? ? {},
                        d = Wr(this, of )[ of ](t, n, c);
                    if (!d) return;
                    if ("checkout_completed" === d && !s) return;
                    const l = Wr(this, nf)[nf](t, c, u);
                    Wr(this, sf)[sf](d, c, {
                        injectedEventId: Yp(i),
                        trackFlags: l,
                        emittedAsync: !0 === e,
                        pageContext: Qh(r),
                        shadow: !1
                    })
                }), e("log:trekkie:shadow-add-to-cart", ({
                    replayed: e,
                    payload: {
                        properties: t,
                        addApiSource: r,
                        pageContext: n
                    }
                }) => {
                    const o = Qp(t) ? ? {},
                        i = Wr(this, of )[ of ]("track", "Added Product", o);
                    i && Wr(this, sf)[sf](i, o, {
                        injectedEventId: void 0,
                        trackFlags: {
                            addToCartApiSource: r,
                            shopifyEmitted: !0
                        },
                        emittedAsync: !0 === e,
                        pageContext: Qh(n),
                        shadow: !0
                    })
                })
            }
        }

        function cf(e, t, r) {
            return "page" === e ? "shopifyEmitted" in t ? {
                shopifyEmitted: Boolean(t.shopifyEmitted)
            } : {} : {
                addToCartApiSource: Yp(r.addApiSource),
                shopifyEmitted: "boolean" == typeof r.shopifyEmitted ? r.shopifyEmitted : void 0
            }
        }

        function uf(e, t, r) {
            let n;
            if ("page" === e) n = "page_rendered";
            else {
                const e = Yp(t);
                if (!e) return null;
                n = function(e) {
                    for (const [t, r] of Ah)
                        if (t.test(e)) return r
                }(e)
            }
            if (!n) return null;
            switch (n) {
                case "page_rendered":
                    return ef(jh(), n, "remote_page_rendered");
                case "product_page_rendered":
                    return ef(jh(Zh(r)), n, "remote_product_page_rendered");
                case "product_added_to_cart":
                    return ef(jh(Zh(r)), n, "remote_product_added_to_cart");
                default:
                    return n
            }
        }

        function df(t, r, {
            injectedEventId: n,
            trackFlags: o,
            emittedAsync: i,
            pageContext: s,
            shadow: a
        }) {
            const c = (u = t, void 0 !== (d = Wr(this, rf)[rf].apiClientId) && Oh.has(d) && Rh.has(u));
            var u, d;
            if (c && !pt("7b21cf0b") && !pt(vt)) return;
            const l = a ? e() : function(t, r, n) {
                    const o = function(e, t, r) {
                        const n = Mh[e];
                        if (!n) return;
                        if ("checkout_completed" === n && r) return r;
                        const o = self.Shopify ? .evids;
                        return o ? o(n, "product_added_to_cart" === n ? {
                            analyticsFramework: "trekkie-parity",
                            cacheKey: Uh(t)
                        } : {
                            analyticsFramework: "trekkie-parity"
                        }) : void 0
                    }(t, r, n);
                    return o || e()
                }(t, r, n),
                p = function(e, t, r) {
                    switch (e) {
                        case "page_rendered":
                        case "remote_page_rendered":
                            return Kh(t.pageType, r);
                        case "product_page_rendered":
                        case "remote_product_page_rendered":
                            return { ...Kh("product", r),
                                ...Hh(t),
                                products: Bh([{ ...t,
                                    quantity: 1
                                }])
                            };
                        case "product_added_to_cart":
                        case "remote_product_added_to_cart":
                            return { ...Hh(t),
                                products: Bh([t]),
                                cartToken: Yp(t.cartToken)
                            };
                        case "payment_info_submitted":
                        case "remote_payment_info_submitted":
                        case "checkout_shipping_info_submitted":
                        case "remote_checkout_shipping_info_submitted":
                            return Fh(t);
                        case "search_submitted":
                            return { ...Kh("search", r),
                                searchString: Yp(t.query) ? ? ""
                            };
                        case "checkout_started":
                        case "remote_checkout_started":
                            return { ...Fh(t),
                                products: Bh(eh(t.products))
                            };
                        case "checkout_completed":
                            {
                                const e = Qp(t.customerEventData),
                                    r = Qp(e ? .customer),
                                    n = Qp(e ? .address),
                                    o = { ...Fh(t),
                                        ...Wh(n),
                                        products: Bh(eh(t.products)),
                                        firstName: Yp(r ? .firstName),
                                        lastName: Yp(r ? .lastName),
                                        email: Yp(r ? .emailAddress),
                                        phone: Yp(r ? .phoneNumber),
                                        billingAddressZipcode: Yp(n ? .zip)
                                    };
                                return t.orderId && (o.orderId = String(t.orderId)),
                                o
                            }
                        case "collection_page_rendered":
                            return { ...Kh("collection", r),
                                collectionId: Jp(t.collectionId),
                                collectionName: Yp(t.collectionName),
                                currency: Vh(t.currency)
                            };
                        case "checkout_contact_info_submitted":
                        case "remote_checkout_contact_info_submitted":
                            return {
                                email: Yp(t.email),
                                phone: Yp(t.phone),
                                subtotalValue: zh(t)
                            };
                        case "checkout_address_info_submitted":
                        case "remote_checkout_address_info_submitted":
                            return { ...Wh(t),
                                phone: Yp(t.phone),
                                subtotalValue: zh(t)
                            };
                        default:
                            return e
                    }
                }(t, r, s),
                h = Zp(r.rolloutIds, Gp) ? ? Wr(this, rf)[rf].rolloutIds,
                f = Zp(r.rolloutTreatmentIds, Gp) ? ? Wr(this, rf)[rf].rolloutTreatmentIds,
                m = Lt("shop_analytics"),
                v = Wr(this, rf)[rf].eventMetadataId ? ? Yp(Qp(window.ShopifyAnalytics ? .lib ? .trekkie ? .defaultAttributes) ? .eventMetadataId),
                {
                    consent: g
                } = Wr(this, rf)[rf],
                b = !(g.marketingAllowed() && g.analyticsProcessingAllowed()),
                w = {
                    eventId: l,
                    eventTime: (new Date).getTime(),
                    eventSourceUrl: s ? .url || self.location ? .href || "",
                    uniqueToken: g.trackingTokens.getUniqueToken() || Ie,
                    userAgent: self.navigator ? .userAgent,
                    eventName: t,
                    eventMetadataId: v,
                    shopId: Wr(this, rf)[rf].shopId,
                    source: a ? "wpm-shop-events-listener" : (_ = Wr(this, rf)[rf].surface, ic.includes(_) ? `wpm-${y.CheckoutOneShopApp}` : _ === y.CheckoutKit ? `wpm-${y.CheckoutOne}` : `wpm-${_}`),
                    facebookCapiEnabled: Wr(this, rf)[rf].firstPartyTracking.facebookCapiEnabled,
                    assetVersionId: Pn,
                    analyticsAllowed: g.analyticsProcessingAllowed(),
                    marketingAllowed: g.marketingAllowed(),
                    preferencesAllowed: g.preferencesProcessingAllowed(),
                    saleOfDataAllowed: g.saleOfDataAllowed(),
                    deprecatedVisitToken: g.trackingTokens.getVisitToken() || Ie,
                    sessionId: Wr(this, rf)[rf].sessionId,
                    pageId: Wr(this, rf)[rf].pageId,
                    apiClientId: Wr(this, rf)[rf].apiClientId ? ? 580111,
                    ...Wr(this, rf)[rf].checkoutToken && {
                        checkoutToken: Wr(this, rf)[rf].checkoutToken
                    },
                    customerId: Wr(this, rf)[rf].customerId,
                    ...m && {
                        shopAnalyticsToken: m
                    },
                    addToCartApiSource: o.addToCartApiSource,
                    shopifyEmitted: o.shopifyEmitted,
                    requestId: Jh(t, Wr(this, rf)[rf].surface),
                    ...h && {
                        rolloutIds: h
                    },
                    ...f && {
                        rolloutTreatmentIds: f
                    },
                    navigationType: Wr(this, rf)[rf].navigationType,
                    navigationApi: Wr(this, rf)[rf].navigationApi,
                    ...Wr(this, rf)[rf].isMerchantRequest && {
                        isMerchantRequest: !0
                    },
                    ...i && {
                        emittedAsync: !0
                    },
                    ...p
                };
            var _;
            const I = {
                ccpaEnforced: !g.saleOfDataAllowed(),
                gdprEnforced: b,
                gdprEnforcedAsString: String(b),
                isPersistentCookie: "persistent" === (Lt("_shopify_m") ? ? "persistent")
            };
            let x;
            if (a) x = Ch, Wr(this, tf)[tf].produce(x, { ...w,
                ...I,
                emittedToV5: !1
            });
            else if (c) x = Ph, Wr(this, tf)[tf].produce(x, { ...w,
                ...I,
                hydrogenSubchannelId: ""
            }, {
                preserveEventCase: ["hydrogenSubchannelId"]
            });
            else if (pt("4c64608a")) {
                const {
                    browserContext: e
                } = Wr(this, rf)[rf];
                x = Th, Wr(this, tf)[tf].produce(x, { ...w,
                    tiCv: Rn,
                    ...e && {
                        attributes: () => {
                            const t = e.getAttributes();
                            return t && JSON.stringify(t)
                        },
                        attributesVersion: 2
                    }
                })
            } else x = Ch, Wr(this, tf)[tf].produce(x, { ...w,
                ...I,
                emittedToV5: !0
            });
            Wr(this, rf)[rf].onProduce ? .(t, x, {
                shadow: a
            })
        }
        var lf = Yr("monorailClient"),
            pf = Yr("configuration");
        class hf {
            constructor(e, t) {
                Object.defineProperty(this, lf, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, pf, {
                    writable: !0,
                    value: void 0
                }), Wr(this, lf)[lf] = e, Wr(this, pf)[pf] = t
            }
            register(e) {
                e("log:trekkie:track", ({
                    payload: e,
                    payload: {
                        method: t,
                        args: [r, n, , o],
                        microSessionCount: i
                    }
                }) => {
                    if ("track" !== t) return;
                    const s = Yp(r);
                    if (!s) return;
                    const a = th(s);
                    if (!a) return;
                    if (Wr(this, pf)[pf].onEventReceived ? .(a), !pt(vt)) return;
                    const {
                        navigationType: c,
                        navigationApi: u,
                        consent: d,
                        pageId: l
                    } = Wr(this, pf)[pf], p = Qp(window.ShopifyAnalytics ? .lib ? .trekkie ? .defaultAttributes), h = {
                        event: s,
                        eventId: Fp(e),
                        s2sMetadata: {
                            navigationType: c,
                            navigationApi: u
                        },
                        ..."boolean" == typeof o && {
                            emitConversionEvent: o
                        },
                        ...Qp(n),
                        ...p && { ...p,
                            uniqToken: d.trackingTokens.getUniqueToken() || Ie,
                            visitToken: d.trackingTokens.getVisitToken() || Ie,
                            microSessionId: l,
                            ..."number" == typeof i && {
                                microSessionCount: i
                            },
                            isPersistentCookie: Yt()
                        },
                        eventType: "track"
                    };
                    Wr(this, lf)[lf].produce(a, h, {
                        convertEventCase: !1
                    })
                })
            }
        }
        var ff = Yr("client"),
            mf = Yr("options");
        class vf {
            constructor(e, t) {
                Object.defineProperty(this, ff, {
                    writable: !0,
                    value: void 0
                }), Object.defineProperty(this, mf, {
                    writable: !0,
                    value: void 0
                }), Wr(this, ff)[ff] = e, Wr(this, mf)[mf] = t
            }
            register(e) {
                e("log:trekkie:track", ({
                    payload: {
                        method: e,
                        args: t
                    }
                }) => {
                    if ("track" !== e && "page" !== e) return;
                    const r = "page" === e ? "Page Viewed" : t[0];
                    if ("string" != typeof r) return;
                    const {
                        consent: n
                    } = Wr(this, mf)[mf];
                    Wr(this, ff)[ff].record("feature_usage", 1, {
                        feature: "event_emission",
                        event_name: r,
                        user_can_be_tracked: n.analyticsProcessingAllowed() || n.marketingAllowed()
                    })
                })
            }
        }
        const gf = {
            [Ch]: "storefront_customer_tracking_parity",
            [Th]: "storefront_customer_tracking_v5",
            [Ph]: "custom_storefront_customer_tracking"
        };

        function yf(e) {
            return {
                requestId: bf(e.requestId, 128),
                navigationType: (t = e.navigationType, "unknown" === t || "error" === t ? void 0 : bf(t, 64)),
                trekkieState: wf()
            };
            var t
        }

        function bf(e, t) {
            return "string" == typeof e && e.length > 0 && e.length <= t ? e : void 0
        }

        function wf() {
            try {
                const e = self.ShopifyAnalytics ? .lib ? .trekkie;
                if (Vt(e)) return "shim";
                const t = e ? .state;
                return "awaiting-consent" === t || "initialized" === t ? t : void 0
            } catch (e) {
                return
            }
        }
        let _f;
        const If = {
            credentials: !0
        };

        function xf(e, t) {
            const r = new Set(t);
            return new Set(e).size === r.size && (e ? .every(e => r.has(e)) ? ? !0)
        }
        const Ef = Object.values(I),
            kf = e => {
                const t = e.trim().toLowerCase();
                return r = t, Ef.includes(r) ? t : I.NotAvailable;
                var r
            },
            Sf = e => {
                if (!e) return -1;
                const t = e.trim();
                if (!/^\d+$/.test(t)) return -1;
                const r = window.parseInt(t, 10);
                return window.isNaN(r) || r <= 0 ? -1 : r
            };

        function Cf(e) {
            if (!e) return [];
            try {
                const t = JSON.parse(e);
                return Array.isArray(t) ? t : []
            } catch (t) {
                return []
            }
        }
        const Tf = e => {
            if (e) try {
                const t = JSON.parse(e);
                if (!Array.isArray(t)) return;
                const r = t.filter(e => "number" == typeof e);
                if (0 === r.length || r.length !== t.length) return;
                return r
            } catch {
                return
            }
        };

        function Af(e, t) {
            const r = {
                rolloutIds: Tf(t ? .rolloutIds),
                rolloutTreatmentIds: Tf(t ? .rolloutTreatmentIds)
            };
            if (!e.includes(gt)) return r;
            const n = function() {
                try {
                    const e = document.querySelector('script#shopify-rollouts[type="application/json"]');
                    if (!e) return;
                    const t = JSON.parse(e.textContent || "");
                    if (!Xp(t)) return;
                    const {
                        rolloutIds: r,
                        rolloutTreatmentIds: n
                    } = t;
                    if (!(Array.isArray(r) && r.every(Gp) && Array.isArray(n) && n.every(Gp))) return;
                    return {
                        rolloutIds: r,
                        rolloutTreatmentIds: n
                    }
                } catch {
                    return
                }
            }();
            return { ...n ? ? r,
                rolloutSources : {
                    inline: void 0 !== t ? .rolloutIds || void 0 !== t ? .rolloutTreatmentIds ? r : void 0,
                    tag: n
                }
            }
        }

        function Pf() {
            try {
                const e = window.performance,
                    t = "function" == typeof e ? .getEntriesByType ? ti() : void 0;
                if (t ? .type) return {
                    navigationType: t.type,
                    navigationApi: "PerformanceNavigationTiming"
                };
                const r = e ? .navigation;
                if (void 0 !== r) return {
                    navigationType: {
                        0: "navigate",
                        1: "reload",
                        2: "back_forward"
                    }[r.type] ? ? "unknown",
                    navigationApi : "performance.navigation"
                }
            } catch (e) {
                return {
                    navigationType: "error",
                    navigationApi: "error"
                }
            }
            return {
                navigationType: "unknown",
                navigationApi: "unknown"
            }
        }

        function Of(e) {
            if (e) return e;
            try {
                return ti() ? .serverTiming ? .find(({
                    name: e
                }) => "requestID" === e) ? .description || void 0
            } catch {
                return
            }
        }
        const Rf = Nt(() => {
                try {
                    const e = window.Shopify ? .evids;
                    return e ? e("session_started", {
                        analyticsFramework: "wpm"
                    }) : sr()
                } catch {
                    return sr()
                }
            }),
            Nf = () => {
                const e = (() => {
                        try {
                            return document.currentScript ? .dataset
                        } catch {
                            return null
                        }
                    })(),
                    t = (e => {
                        const t = e.trim().toLowerCase();
                        return r = t, nc.includes(r) ? t : window.Shopify ? .Checkout ? y.Shopify : window.Shopify ? .analytics ? .replayQueue ? y.StorefrontRenderer : window.CardFields ? y.CheckoutOne : y.Unknown;
                        var r
                    })(e ? .surface ? ? ""),
                    r = (e => {
                        if (!e) return [];
                        try {
                            const t = JSON.parse(e);
                            return Array.isArray(t) ? t.filter(e => "string" == typeof e) : []
                        } catch {
                            return []
                        }
                    })(e ? .enabledBetaFlags);
                return {
                    browserTarget: kf(e ? .browserTarget ? ? ""),
                    surface: t,
                    enabledBetaFlags: r,
                    isMerchantRequest: "true" === e ? .isMerchantRequest,
                    firstPartyTracking: {
                        facebookCapiEnabled: "true" === e ? .facebookCapiEnabled
                    },
                    hashVersion: e ? .hashVersion ? ? "",
                    shopId: Sf(e ? .shopId),
                    apiClientId: Number(e ? .apiClientId) || void 0,
                    pageId: e ? .pageId ? ? sr(),
                    sessionId: Rf(),
                    pageType: e ? .pageType,
                    resourceId: e ? .resourceId,
                    requestId: Of(e ? .requestId),
                    ...Pf(),
                    themeId: Number(e ? .themeId) || void 0,
                    themeStoreId: Number(e ? .themeStoreId) || void 0,
                    themePublished: void 0 === e ? .themePublished ? void 0 : "true" === e.themePublished,
                    storefrontBaseUrl: (window.location.origin || e ? .storefrontBaseUrl) ? ? "",
                    monorailEndpoint: e ? .monorailEndpoint || "",
                    frontendEventCollectorEndpoint: e ? .frontendEventCollectorEndpoint || "",
                    extensionBaseUrl: e ? .extensionBaseUrl ? ? "",
                    shopDomain: e ? .shopDomain ? ? window.Shopify ? .shop ? ? "",
                    checkoutToken: e ? .checkoutToken || void 0,
                    customerId: Number(e ? .customerId) || void 0,
                    ...Af(r, e),
                    eventMetadataId: e ? .eventMetadataId || void 0,
                    events: Cf(e ? .events),
                    features: {
                        domEvents: "false" !== e ? .domEvents && oc.includes(t),
                        advancedDomEvents: "false" !== e ? .advancedDomEvents,
                        storefrontEvents: "false" !== e ? .storefrontEvents && oc.includes(t),
                        cartPermalink: "false" !== e ? .cartPermalink && [...oc, ...sc, y.Shopify].includes(t),
                        trekkieShim: "true" === e ? .trekkieShim,
                        agentContext: "true" === e ? .agentContext,
                        pixelHelper: "true" === e ? .pixelHelper
                    },
                    scope: {
                        publish: e ? .publish === uc.All ? uc.All : uc.Custom
                    }
                }
            };
        try {
            window.Shopify = window.Shopify || {}, !window.Shopify.evids && (a = {}, c = {
                    [n]: {},
                    [o]: {},
                    [i]: {},
                    [s]: {}
                }, window.Shopify.evids = (...e) => function(e, r) {
                    if (! function(e) {
                            return t.includes(e)
                        }(e) || (null == r ? void 0 : r.analyticsFramework) !== o && "wpm" !== (null == r ? void 0 : r.analyticsFramework) && (null == r ? void 0 : r.analyticsFramework) !== i && (null == r ? void 0 : r.analyticsFramework) !== s) return u("shu");
                    const n = function(e) {
                            return "string" == typeof e && e ? e : "default"
                        }(r.cacheKey),
                        d = function(e, t, r) {
                            const n = c[t],
                                o = n[e] ? ? (n[e] = {}),
                                i = o[r];
                            return o[r] = "number" == typeof i ? i + 1 : 0
                        }(e, r.analyticsFramework, n);
                    return function(e, t, r) {
                        const n = a[e] ? ? (a[e] = {}),
                            o = n[r] ? ? [];
                        let i = o[t];
                        return i || (i = u(), o.push(i)), n[r] = o, i
                    }(e, d, n)
                }(...e)),
                function({
                    configuration: e,
                    eventHub: t
                }) {
                    const r = window.location.href,
                        n = Tr(() => document ? .referrer) ? ? "";
                    ro.metadata = fs(e, ["shopId", "surface", "browserTarget", "shopDomain"]);
                    try {
                        (({
                            storefrontBaseUrl: e
                        }) => {
                            if (!e) throw new Zn("storefrontBaseUrl is required.");
                            if (! function(e) {
                                    try {
                                        return new URL(e), !0
                                    } catch (t) {
                                        return function(e) {
                                            const t = new RegExp("^(https?:\\/\\/)((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)*[a-z]{1,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$", "i");
                                            return Boolean(t.test(e))
                                        }(e)
                                    }
                                }(e)) throw new Zn(`storefrontBaseUrl is not a valid absolute URL: "${e}"`)
                        })(e),
                        function(e = []) {
                            (Array.isArray(e) ? e : [e]).forEach(e => lt.add(e))
                        }(e.enabledBetaFlags);
                        const o = function(e, t) {
                            return e.createClient({
                                metrics: Ho,
                                prefix: "web_pixels_manager",
                                defaultAttributes: {
                                    surface: t.surface
                                }
                            })
                        }(new qo({
                            throttleDelay: 1e3,
                            client: new xo({
                                exporter: "https://otlp-http-production.shopifysvc.com" ? new Ao("https://otlp-http-production.shopifysvc.com", "web-pixels-manager") : new Bo("WPM OTel")
                            })
                        }), e);
                        if (pt(gt)) {
                            const t = e.rolloutSources;
                            let r;
                            t ? .tag ? !t.inline || xf(t.tag.rolloutIds, t.inline.rolloutIds) && xf(t.tag.rolloutTreatmentIds, t.inline.rolloutTreatmentIds) || (r = "rollouts_tag_mismatch") : r = "rollouts_tag_unusable";
                            const n = Vn({
                                rate: .1
                            });
                            r && n.includes("rollout_diagnostic") && o.record("feature_usage", 10, {
                                feature: "rollout_diagnostic",
                                diagnostic: r
                            })
                        }! function() {
                            if (!co) try {
                                document.addEventListener(ae, so), co = !0
                            } catch (e) {
                                ro.notify(e, {
                                    context: "onConsentCollected/createOnConsentCollectedListener",
                                    unhandled: !1
                                })
                            }
                        }();
                        const i = new Bi({
                            endpoint: zi({
                                storefrontBaseUrl: e.storefrontBaseUrl,
                                endpoint: e.monorailEndpoint
                            }),
                            onError: e => {
                                ro.notify(e, {
                                    context: "utilities/monorail/sendRequest",
                                    unhandled: !1,
                                    type: "metric"
                                })
                            }
                        });
                        ai = i;
                        const s = new Set,
                            a = new gs({
                                onError: e => {
                                    const t = e instanceof Error ? `${e.name}:${e.message}` : String(e);
                                    s.has(t) || (s.add(t), ro.notify(e, {
                                        context: "foundation/consent/trackingTokens",
                                        severity: "warning",
                                        unhandled: !1
                                    }))
                                }
                            }),
                            c = new Jo,
                            u = () => a.analyticsProcessingAllowed() || a.marketingAllowed(),
                            d = () => {
                                u() && c.prefetch()
                            };
                        d(), io(d);
                        const l = {
                                getAttributes: () => u() ? c.getAttributes() : void 0
                            },
                            p = new as({
                                storefrontBaseUrl: e.storefrontBaseUrl,
                                frontendEventCollectorEndpoint: e.frontendEventCollectorEndpoint,
                                onError: e => {
                                    ro.notify(e, {
                                        context: "foundation/frontend-event-collector/send",
                                        unhandled: !1,
                                        type: "metric"
                                    })
                                },
                                shopId: e.shopId,
                                apiClientId: e.apiClientId,
                                customerId: e.customerId,
                                pageUrl: r,
                                pageReferrer: n,
                                pageId: e.pageId,
                                httpRequestId: e.requestId,
                                surface: e.surface,
                                consent: a
                            }),
                            m = t ? ? ((e, {
                                monorailClient: t,
                                collectorClient: r,
                                featureUsageClient: n,
                                onError: o,
                                pageUrl: i,
                                consent: s,
                                browserContext: a
                            }) => {
                                const c = new Iu(s, ao),
                                    u = new mu(s),
                                    d = new mu(s, () => s.analyticsProcessingAllowed() && s.marketingAllowed()),
                                    l = new mu(s, () => s.analyticsProcessingAllowed()),
                                    p = i ? ? "",
                                    h = ({
                                        eventName: e
                                    }) => {
                                        n.record("feature_usage", 1, {
                                            feature: "collector_emission",
                                            event_name: e,
                                            status: "emitted"
                                        })
                                    },
                                    f = ({
                                        eventName: e,
                                        reason: t
                                    }) => {
                                        n.record("feature_usage", 1, {
                                            feature: "collector_emission",
                                            event_name: e,
                                            status: "skipped",
                                            reason: t
                                        })
                                    },
                                    m = [lu(new Ip(t, { ...e,
                                        consent: s,
                                        browserContext: a
                                    }), [u])];
                                if (m.push(lu(new Au(t, {
                                        shopId: e.shopId,
                                        surface: e.surface,
                                        pageUrl: p,
                                        consent: s
                                    }), [d]), lu(new ju(r, {
                                        surface: e.surface
                                    }), [d])), pt("f12a06f7") && m.push(lu(new Rp(new Mp(ci, { ...e,
                                        consent: s
                                    }), {
                                        surface: e.surface,
                                        sessionId: e.sessionId
                                    }), [u])), e.features.agentContext) {
                                    const e = new Dp;
                                    m.push(lu(new Vp({
                                        client: e
                                    }), [u]))
                                }
                                e.features.storefrontEvents && m.push(... function({
                                    configuration: e,
                                    monorailClient: t,
                                    collectorClient: r,
                                    consent: n,
                                    pageUrl: o,
                                    onMonorailEmission: i,
                                    onCollectorEmission: s,
                                    onCollectorValidationError: a
                                }) {
                                    const c = [],
                                        u = pt("85f2c4d9"),
                                        d = u ? Fu : Hu,
                                        l = u ? Wd : zd,
                                        p = u ? El : xl,
                                        h = u ? Ql : Xl;
                                    Sr() && (c.push(new Yu(t, { ...e,
                                        pageUrl: o,
                                        consent: n,
                                        routeToCollector: d,
                                        onEmission: i
                                    })), c.push(u ? new fd(r, { ...e,
                                        pageUrl: o,
                                        hoversEnabled: kr(),
                                        onEmission: s,
                                        onValidationError: a
                                    }) : new Rd(r, { ...e,
                                        pageUrl: o,
                                        hoversEnabled: kr(),
                                        onEmission: s,
                                        onValidationError: a
                                    })), kr() && c.push(new Bd(t, { ...e,
                                        pageUrl: o,
                                        consent: n,
                                        routeToCollector: d,
                                        onEmission: i
                                    })));
                                    const f = {
                                        pageType: ln(e.pageType),
                                        resourceId: e.resourceId,
                                        pageUrl: o
                                    };
                                    hn(f) && (c.push(new Xd(t, { ...e,
                                        ...f,
                                        consent: n,
                                        routeToCollector: l,
                                        onEmission: i
                                    })), c.push(u ? new gl(r, { ...e,
                                        ...f,
                                        onEmission: s,
                                        onValidationError: a
                                    }) : new cl(r, { ...e,
                                        ...f,
                                        onEmission: s,
                                        onValidationError: a
                                    }))), e.resourceId && vn(e.pageType) && (c.push(new Tl(t, { ...e,
                                        productId: e.resourceId,
                                        pageUrl: o,
                                        consent: n,
                                        routeToCollector: p,
                                        onEmission: i
                                    })), c.push(u ? new zl(r, {
                                        shopId: e.shopId,
                                        productId: e.resourceId,
                                        pageType: e.pageType,
                                        themeId: e.themeId,
                                        themeStoreId: e.themeStoreId,
                                        themePublished: e.themePublished,
                                        pageUrl: o,
                                        onEmission: s,
                                        onValidationError: a
                                    }) : new Dl(r, {
                                        shopId: e.shopId,
                                        productId: e.resourceId,
                                        pageType: e.pageType,
                                        themeId: e.themeId,
                                        themeStoreId: e.themeStoreId,
                                        themePublished: e.themePublished,
                                        pageUrl: o,
                                        onEmission: s,
                                        onValidationError: a
                                    })));
                                    const m = {
                                        pageType: e.pageType,
                                        resourceId: e.resourceId
                                    };
                                    return En(m) && (c.push(new rp(t, { ...e,
                                        resourceId: m.resourceId,
                                        pageUrl: o,
                                        consent: n,
                                        routeToCollector: h,
                                        onEmission: i
                                    })), c.push(u ? new up(r, {
                                        shopId: e.shopId,
                                        resourceId: m.resourceId,
                                        themeId: e.themeId,
                                        themeStoreId: e.themeStoreId,
                                        themePublished: e.themePublished,
                                        pageUrl: o,
                                        onEmission: s,
                                        onValidationError: a
                                    }) : new gp(r, {
                                        shopId: e.shopId,
                                        resourceId: m.resourceId,
                                        themeId: e.themeId,
                                        themeStoreId: e.themeStoreId,
                                        themePublished: e.themePublished,
                                        pageUrl: o,
                                        onEmission: s,
                                        onValidationError: a
                                    }))), c
                                }({
                                    configuration: e,
                                    monorailClient: t,
                                    collectorClient: r,
                                    consent: s,
                                    pageUrl: p,
                                    onMonorailEmission: e => {
                                        n.record("feature_usage", 1, {
                                            feature: "monorail_emission",
                                            schema_id: e.schemaId,
                                            event_name: e.eventName
                                        })
                                    },
                                    onCollectorEmission: h,
                                    onCollectorValidationError: f
                                }).map(e => lu(e, [u])));
                                const v = {
                                    shopId: e.shopId,
                                    surface: e.surface,
                                    pageUrl: p
                                };
                                return m.push(new Eh(t, v)), Vn({
                                    rate: .1
                                }).includes("pixel_event_blocked") && m.push(new Sh(n)), m.push(lu(new af(t, { ...e,
                                    consent: s,
                                    browserContext: a,
                                    onProduce: (e, t, r) => {
                                        n.record("feature_usage", 1, {
                                            feature: "monorail_emission",
                                            schema_id: r.shadow ? "storefront_customer_tracking_parity_shadow" : gf[t],
                                            event_name: e
                                        })
                                    }
                                }), [u]), lu(new hf(t, {
                                    consent: s,
                                    pageId: e.pageId,
                                    navigationType: e.navigationType,
                                    navigationApi: e.navigationApi,
                                    onEventReceived: t => {
                                        n.record("feature_usage", 1, {
                                            feature: "monorail_forwarding"
                                        }), n.log("monorail_forwarding", {
                                            schema_id: t,
                                            shop_id: e.shopId,
                                            shop_domain: e.shopDomain,
                                            api_client_id: e.apiClientId,
                                            page_url: i
                                        })
                                    }
                                }), [l])), e.features.trekkieShim && m.push(pt(vt) ? lu(new mh(r, { ...e,
                                    consent: s,
                                    onEmission: h,
                                    onValidationError: f
                                }), [l]) : lu(new wh(t, { ...e,
                                    pageUrl: i,
                                    consent: s,
                                    onProduce: e => {
                                        n.record("feature_usage", 1, {
                                            feature: "monorail_emission",
                                            schema_id: "storefront_customer_tracking_parity",
                                            event_name: e
                                        })
                                    }
                                }), [l])), m.push(new vf(n, {
                                    consent: s
                                }), c), new du(m, {
                                    onError: o,
                                    bufferSize: 500,
                                    replayKeep: "newest"
                                })
                            })(e, {
                                pageUrl: r,
                                monorailClient: i,
                                collectorClient: p,
                                featureUsageClient: o,
                                consent: a,
                                browserContext: l,
                                onError: e => {
                                    ro.notify(e, {
                                        context: "createWebPixelsManager/eventHub",
                                        severity: "warning",
                                        unhandled: !1
                                    })
                                }
                            }),
                            v = m.emit.bind(m),
                            {
                                shopId: b,
                                surface: w,
                                storefrontBaseUrl: I,
                                extensionBaseUrl: E,
                                browserTarget: S,
                                features: C,
                                scope: T
                            } = e,
                            A = {
                                shopId: b,
                                sessionId: e.sessionId,
                                surface: w,
                                browserTarget: S,
                                pageUrl: r,
                                storefrontBaseUrl: I,
                                extensionBaseUrl: E,
                                addMonorailEvent: ci,
                                logError: ro.notify,
                                userConsent: po,
                                consent: a,
                                emit: v
                            };
                        if (self[Cn]) {
                            const e = new g(`WebPixelsManager: ${Cn} global object is already defined`, {
                                groupingHash: "WebPixelsManager:GlobalObjectAlreadyDefined",
                                severity: "info"
                            });
                            return ro.notify(e, {
                                type: "metric",
                                context: "createWebPixelsManager",
                                severity: "info",
                                unhandled: !1
                            }), self[Cn]
                        }
                        C.trekkieShim && Zt({
                            configuration: e,
                            consent: a,
                            callback: e => {
                                v("log:trekkie:track", e)
                            },
                            createMissingStub: w === y.StorefrontRenderer,
                            onStubResolved: e => {
                                Vn({
                                    rate: .01
                                }).includes("trekkie_shim_stub") && o.record("feature_usage", 100, {
                                    feature: "trekkie_shim_stub",
                                    origin: e
                                })
                            },
                            onError: (e, t) => {
                                ro.notify(e, { ...t,
                                    severity: "warning",
                                    unhandled: !1,
                                    options: {
                                        sampleRate: .01
                                    }
                                })
                            }
                        });
                        const P = si("load", {
                                version: Pn,
                                bundleTarget: An,
                                pageUrl: r,
                                status: "loading",
                                surface: w,
                                shopId: b,
                                visitToken: a.trackingTokens.getVisitToken() || void 0
                            }),
                            {
                                sessionId: O
                            } = e,
                            R = {
                                init(t) {
                                    if (function() {
                                            const e = `\\/(${gc.Wpm}|${gc.WebPixels})@(.+)\\/sandbox`;
                                            return null !== self.location.href.match(new RegExp(e))
                                        }()) return cu;
                                    const {
                                        initData: n,
                                        isMerchantRequest: o,
                                        monorailRegion: s,
                                        webPixelsConfigList: c
                                    } = t, u = { ...t,
                                        ...e,
                                        monorailEndpoint: e.monorailEndpoint || t.monorailEndpoint
                                    };
                                    if (_f) return ro.notify(new g(`WebPixelsManager: ${Cn} is being initialized multiple times`, {
                                        groupingHash: "WebPixelsManager:MultipleInitialization",
                                        severity: "info"
                                    }), {
                                        type: "metric",
                                        context: "createWebPixelsManager/init",
                                        severity: "info",
                                        unhandled: !1,
                                        initConfig: u
                                    }), _f;
                                    const d = hs();
                                    o && Tr(() => self.sessionStorage.setItem("isMerchantSession", "true")), C.pixelHelper && Tr(() => self.sessionStorage.setItem(Nn, "true")), i.setEndpoint(zi({
                                        storefrontBaseUrl: I,
                                        region: s,
                                        endpoint: e.monorailEndpoint
                                    })), (Tr(() => "true" === self.sessionStorage.getItem(Nn), !1) || w === y.CustomerAccount) && sa.init(u);
                                    const l = dt().toString(),
                                        p = si("unload", {
                                            version: Pn,
                                            bundleTarget: An,
                                            pageUrl: r,
                                            shopId: b,
                                            surface: w,
                                            isCompleted: "false",
                                            runtimeErrorCaught: "false",
                                            userCanBeTracked: l,
                                            sessionId: O
                                        });
                                    var m;
                                    m = p, window.addEventListener("pagehide", () => {
                                        m.payload.pageDuration = ei("page:session") ? .measurement ? .duration, ci(m, {
                                            flush: !0
                                        })
                                    });
                                    const E = tc(A),
                                        S = function() {
                                            const e = new ws({
                                                bufferSize: 1e3,
                                                subscribeAllKey: "all_customer_privacy_events"
                                            });
                                            return e.use($a), {
                                                publish(t, r, n) {
                                                    if ("string" != typeof t) throw new g("Expected event name to be a string, but got " + typeof t, {
                                                        groupingHash: "CustomerPrivacyEventBus:PublishEventNameNotString"
                                                    });
                                                    if (t !== ae) throw new g(`Expected event name to be a ${ae}, but got "${t}".`, {
                                                        groupingHash: "CustomerPrivacyEventBus:PublishEventNameNotSupported"
                                                    });
                                                    return e.publish(t, r, n)
                                                },
                                                subscribe(t, r, n = {}) {
                                                    if (t !== ae) throw new g(`Event name "${t}" is not supported in the CustomerPrivacyEventBus.`, {
                                                        groupingHash: "CustomerPrivacyEventBus:SubscribeEventNameNotSupported"
                                                    });
                                                    return e.subscribe(t, e => {
                                                        const t = {
                                                            configuration: n.pixelRuntimeConfig ? .configuration,
                                                            eventPayloadVersion: n.schemaVersion || n.pixelRuntimeConfig ? .eventPayloadVersion || "unknown",
                                                            id: n.pixelRuntimeConfig ? .id || "unknown",
                                                            type: n.pixelRuntimeConfig ? .type || "unknown",
                                                            runtimeContext: n.pixelRuntimeConfig ? .runtimeContext || "unknown",
                                                            restrictions: n.pixelRuntimeConfig ? .restrictions,
                                                            scriptVersion: n.pixelRuntimeConfig ? .scriptVersion || "unknown",
                                                            apiClientId: n.pixelRuntimeConfig ? .apiClientId
                                                        };
                                                        r.call(e, e), ui("subscriberEventEmitPrivacy", {
                                                            version: Pn,
                                                            bundleTarget: An,
                                                            pageUrl: self.location.href,
                                                            shopId: n.shopId,
                                                            surface: n.surface,
                                                            pixelId: t.id,
                                                            pixelAppId: aa(t),
                                                            pixelSource: t.type,
                                                            pixelRuntimeContext: t.runtimeContext,
                                                            pixelScriptVersion: t.scriptVersion,
                                                            pixelConfiguration: t.configuration,
                                                            pixelEventSchemaVersion: t.eventPayloadVersion,
                                                            eventName: ae,
                                                            eventId: sr()
                                                        })
                                                    }, n)
                                                }
                                            }
                                        }(),
                                        P = {
                                            context: "createWebPixelsManager/init",
                                            severity: "warning",
                                            unhandled: !1,
                                            initConfig: u
                                        },
                                        R = si("init", {
                                            version: Pn,
                                            bundleTarget: An,
                                            pageUrl: r,
                                            shopId: b,
                                            surface: w,
                                            status: "initializing",
                                            userCanBeTracked: l
                                        });
                                    try {
                                        if (window.Shopify && !0 === window.Shopify.designMode) return window.console && console.log("[WebPixelsManager] Prevented from executing in the Theme Editor"), cu;
                                        if (/^web-pixel-sandbox/.test(self.name)) {
                                            const e = new Zn("WebPixelsManager: browser library is being run in a sandbox");
                                            throw ro.notify(e, { ...P,
                                                type: "metric",
                                                library: "browser"
                                            }), e
                                        }
                                        const t = c.reduce((e, t) => {
                                            t.type = t.type.toUpperCase(), t.runtimeContext = t.runtimeContext ? .toUpperCase();
                                            const r = xc(A, {
                                                webPixelConfig: t,
                                                eventBus: E,
                                                customerPrivacyEventBus: S,
                                                initData: n,
                                                cookieRestrictedDomains: d
                                            });
                                            return t.restrictions ? .preventLoadingBeforeEvent ? e.waiting.push(r) : e.ready.push(r), e
                                        }, {
                                            ready: [],
                                            waiting: []
                                        });
                                        Promise.all(t.ready).then(() => function(e) {
                                            const {
                                                measurement: t
                                            } = ei("completed");
                                            e.payload.isCompleted = "true", e.payload.runTimeDuration = t ? .duration, e.payload.startTime = t ? .startTime
                                        }(p)).catch(e => {
                                            window.console && console.error("[Web Pixels]", e)
                                        }), Promise.all(t.waiting).catch(() => {}), a.onConsentCollected(e => {
                                            e && e.detail && S.publish(ae, {
                                                customerPrivacy: {
                                                    analyticsProcessingAllowed: e.detail.analyticsAllowed,
                                                    marketingAllowed: e.detail.marketingAllowed,
                                                    preferencesProcessingAllowed: e.detail.preferencesAllowed,
                                                    saleOfDataAllowed: e.detail.saleOfDataAllowed
                                                }
                                            })
                                        });
                                        const o = (w === y.CustomerAccount ? E.publish : E.publishDomEvent).bind(E),
                                            i = {
                                                onError: ro.notify.bind(ro)
                                            };
                                        if (C.storefrontEvents) {
                                            try {
                                                ie(E.publish.bind(E), n, {
                                                    publishShadowTrekkieAddToCart: C.trekkieShim && pt("08197dfb") ? (e, t) => {
                                                        v("log:trekkie:shadow-add-to-cart", {
                                                            properties: { ...e
                                                            },
                                                            addApiSource: t,
                                                            pageContext: {
                                                                url: self.location.href,
                                                                referrer: self.document.referrer
                                                            }
                                                        })
                                                    } : void 0
                                                })
                                            } catch (M) {
                                                ro.notify(M, {
                                                    context: "createWebPixelsManager/createShopEventsListener"
                                                })
                                            }
                                            Sn({
                                                pageType: e.pageType,
                                                resourceId: e.resourceId,
                                                pageUrl: r,
                                                products: n ? .products,
                                                emit: v,
                                                onError: ro.notify
                                            })
                                        }
                                        return C.cartPermalink && function(e, {
                                            cart: t
                                        }) {
                                            try {
                                                if (!window.localStorage) return;
                                                const r = new URLSearchParams(window.location.search).get(k);
                                                if (!r) return;
                                                if (r === window.localStorage.getItem(k)) return;
                                                window.localStorage.setItem(k, r), t ? .lines.forEach(t => {
                                                    W(e, t, t.quantity, x, "permalink")
                                                })
                                            } catch {}
                                        }(E.publish.bind(E), n), C.domEvents && tu(o, i), C.advancedDomEvents && c.some(({
                                            capabilities: e
                                        }) => (e || []).includes(_.AdvancedDomEvents)) && (N = o, j = i, su.map(e => {
                                            try {
                                                return e(N, j)
                                            } catch (M) {
                                                return j ? .onError ? .(M, {
                                                    context: "createAdvancedDomEventsListener"
                                                }), () => {}
                                            }
                                        }), tu(o, { ...i,
                                            eventPrefix: "advanced_dom_"
                                        })), R.payload.status = "initialized", ci(R), _f = function(e, {
                                            eventBus: t,
                                            customerId: r,
                                            scope: n
                                        }) {
                                            const o = function({
                                                    emit: e
                                                }, t) {
                                                    return {
                                                        visitor: (r = {}, n) => {
                                                            const o = function(e = {}, t) {
                                                                if (!e || "object" != typeof e) return "Visitor info must be of type object";
                                                                const {
                                                                    email: r,
                                                                    phone: n
                                                                } = e;
                                                                return r || n ? r && "string" != typeof r ? "Email must be of type string" : n && "string" != typeof n ? "Phone must be of type string" : t ? .appId && "string" != typeof t.appId ? "appId must be of type string" : t ? .apiClientId && "string" != typeof t.apiClientId ? "apiClientId must be of type string" : null : "Visitor must have one of phone or email"
                                                            }(r, n);
                                                            if (o) throw new au(o);
                                                            return e("log:visitor:reported", {
                                                                event: {
                                                                    email: r.email,
                                                                    phone: r.phone,
                                                                    customerId: t.customerId,
                                                                    apiClientId: n ? .appId || n ? .apiClientId
                                                                }
                                                            }), !0
                                                        }
                                                    }
                                                }(e, {
                                                    customerId: r
                                                }),
                                                {
                                                    shopId: i,
                                                    surface: s
                                                } = e,
                                                a = (e, r, o) => !(s === y.CustomerAccount && !f(e) && n.publish !== uc.All) && t.publish(e, r, o);
                                            return {
                                                publish: (e, t, r) => a(e, t, r),
                                                publishCustomEvent: (e, r, n = {}) => s === y.CustomerAccount ? a(e, r, n) : t.publishCustomEvent(e, r, n),
                                                publishDomEvent: (e, r, n = {}) => s === y.CustomerAccount ? a(e, r, n) : t.publishDomEvent(e, r, n),
                                                subscribe: (e, r, n) => t.subscribe(e, r, { ...n,
                                                    shopId: i,
                                                    surface: s
                                                }),
                                                visitor: (e, t) => o.visitor(e, t)
                                            }
                                        }(A, {
                                            eventBus: E,
                                            customerId: n ? .customer ? .id,
                                            scope: T
                                        }), e.events.forEach(([e, t, r]) => {
                                            try {
                                                w === y.CustomerAccount || h(e) ? E.publish(e, t, r) : E.publishCustomEvent(e, t, r)
                                            } catch (M) {
                                                ro.notify(M, {
                                                    context: "createWebPixelsManager/init/replayEvents",
                                                    severity: "warning",
                                                    unhandled: !1,
                                                    initConfig: u
                                                })
                                            }
                                        }), _f
                                    } catch (M) {
                                        return M instanceof Zn || ro.notify(M, {
                                            context: "init",
                                            initConfig: u
                                        }), window.console && console.error(M), R.payload.status = "failed", R.payload.errorMsg = M ? .message, ci(R), p.payload.runtimeErrorCaught = "true", cu
                                    }
                                    var N, j
                                }
                            };
                        return cs(self, Cn, {
                            value: R,
                            writable: !1,
                            configurable: !1,
                            enumerable: !1
                        }, !1), P.payload.status = "loaded", P.payload.visitToken = a.trackingTokens.getVisitToken() || void 0, Object.assign(P.payload, yf(e)), ci(P, If), R
                    } catch (o) {
                        const t = "string" == typeof o ? .message ? o.message : void 0,
                            n = o instanceof Zn || "WebPixelsHandledError" === o.name;
                        return ro.notify(o, {
                            context: "createWebPixelsManager",
                            severity: n ? "warning" : "error",
                            unhandled: !n
                        }), window.console && console.error(o), ci(si("load", {
                            version: Pn,
                            bundleTarget: An,
                            pageUrl: r,
                            status: "manager-create-error",
                            surface: e.surface,
                            errorMsg: t,
                            failureReason: "manager_create_failed",
                            shopId: e.shopId,
                            visitToken: Lt("_shopify_s"),
                            ...yf(e)
                        }), { ...If,
                            flush: !0
                        }), {
                            init: () => cu
                        }
                    }
                }({
                    configuration: Nf()
                })
        } catch (jf) {
            ro.notify(jf, {
                context: "entry-browser",
                severity: "error",
                unhandled: !1
            })
        }
    })()
})();