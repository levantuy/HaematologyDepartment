import jQuery from 'jquery';

(function() {
    return function(e, t, n) {
        function i() {}

        function r(e, t) {
            if (t) return "'" + e.split("'").join("\\'").split('\\"').join('\\\\\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t") + "'";
            var n = e.charAt(0),
                i = e.substring(1);
            return "=" === n ? "+(" + i + ")+" : ":" === n ? "+$kendoHtmlEncode(" + i + ")+" : ";" + e + ";$kendoOutput+="
        }

        function o(e, t, n) {
            return e += "", t = t || 2, n = t - e.length, n ? U[t].substring(0, n) + e : e
        }

        function a(e) {
            var t = e.css(ve.support.transitions.css + "box-shadow") || e.css("box-shadow"),
                n = t ? t.match(Ae) || [0, 0, 0, 0, 0] : [0, 0, 0, 0, 0],
                i = xe.max(+n[3], +(n[4] || 0));
            return {
                left: -n[1] + i,
                right: +n[1] + i,
                bottom: +n[2] + i
            }
        }

        function s(t, n) {
            var i, r, o, s, l, c, u, d, h = Se.browser,
                f = "rtl" == t.css("direction");
            return t.parent().hasClass("k-animation-container") ? (u = t.parent(".k-animation-container"), d = u[0].style, u.is(":hidden") && u.show(), i = Te.test(d.width) || Te.test(d.height), i || u.css({
                width: t.outerWidth(),
                height: t.outerHeight(),
                boxSizing: "content-box",
                mozBoxSizing: "content-box",
                webkitBoxSizing: "content-box"
            })) : (r = a(t), o = t[0].style.width, s = t[0].style.height, l = Te.test(o), c = Te.test(s), h.opera && (r.left = r.right = r.bottom = 5), i = l || c, !l && (!n || n && o) && (o = t.outerWidth()), !c && (!n || n && s) && (s = t.outerHeight()), t.wrap(e("<div/>").addClass("k-animation-container").css({
                width: o,
                height: s,
                marginLeft: r.left * (f ? 1 : -1),
                paddingLeft: r.left,
                paddingRight: r.right,
                paddingBottom: r.bottom
            })), i && t.css({
                width: "100%",
                height: "100%",
                boxSizing: "border-box",
                mozBoxSizing: "border-box",
                webkitBoxSizing: "border-box"
            })), h.msie && xe.floor(h.version) <= 7 && (t.css({
                zoom: 1
            }), t.children(".k-menu").width(t.width())), t.parent()
        }

        function l(e) {
            var t = 1,
                n = arguments.length;
            for (t = 1; n > t; t++) c(e, arguments[t]);
            return e
        }

        function c(e, t) {
            var n, i, r, o, a, s = ve.data.ObservableArray,
                l = ve.data.LazyObservableArray,
                u = ve.data.DataSource,
                d = ve.data.HierarchicalDataSource;
            for (n in t) i = t[n], r = typeof i, o = r === Re && null !== i ? i.constructor : null, o && o !== Array && o !== s && o !== l && o !== u && o !== d ? i instanceof Date ? e[n] = new Date(i.getTime()) : I(i.clone) ? e[n] = i.clone() : (a = e[n], e[n] = typeof a === Re ? a || {} : {}, c(e[n], i)) : r !== Be && (e[n] = i);
            return e
        }

        function u(e, t, i) {
            for (var r in t)
                if (t.hasOwnProperty(r) && t[r].test(e)) return r;
            return i !== n ? i : e
        }

        function d(e) {
            return e.replace(/([a-z][A-Z])/g, function(e) {
                return e.charAt(0) + "-" + e.charAt(1).toLowerCase()
            })
        }

        function h(e) {
            return e.replace(/\-(\w)/g, function(e, t) {
                return t.toUpperCase()
            })
        }

        function f(t, n) {
            var i, r = {};
            return document.defaultView && document.defaultView.getComputedStyle ? (i = document.defaultView.getComputedStyle(t, ""), n && e.each(n, function(e, t) {
                r[t] = i.getPropertyValue(t)
            })) : (i = t.currentStyle, n && e.each(n, function(e, t) {
                r[t] = i[h(t)]
            })), ve.size(r) || (r = i), r
        }

        function p(e) {
            if (e && e.className && "string" == typeof e.className && e.className.indexOf("k-auto-scrollable") > -1) return !0;
            var t = f(e, ["overflow"]).overflow;
            return "auto" == t || "scroll" == t
        }

        function g(t, i) {
            var r = t instanceof e ? t[0] : t,
                o = Se.isRtl(t),
                a = Se.browser.webkit,
                s = Se.browser.mozilla;
            return i === n ? o && a ? r.scrollWidth - r.clientWidth - r.scrollLeft : Math.abs(r.scrollLeft) : (r.scrollLeft = o && a ? r.scrollWidth - r.clientWidth - i : o && s ? -i : i, n)
        }

        function m(e) {
            var t, n = 0;
            for (t in e) e.hasOwnProperty(t) && "toJSON" != t && n++;
            return n
        }

        function v(e, n, i) {
            n || (n = "offset");
            var r = e[n]();
            return Se.browser.msie && (Se.pointers || Se.msPointers) && !i && (r.top -= t.pageYOffset - document.documentElement.scrollTop, r.left -= t.pageXOffset - document.documentElement.scrollLeft), r
        }

        function _(e) {
            var t = {};
            return be("string" == typeof e ? e.split(" ") : e, function(e) {
                t[e] = this
            }), t
        }

        function b(e) {
            return new ve.effects.Element(e)
        }

        function w(e, t, n, i) {
            return typeof e === Fe && (I(t) && (i = t, t = 400, n = !1), I(n) && (i = n, n = !1), typeof t === ze && (n = t, t = 400), e = {
                effects: e,
                duration: t,
                reverse: n,
                complete: i
            }), _e({
                effects: {},
                duration: 400,
                reverse: !1,
                init: ke,
                teardown: ke,
                hide: !1
            }, e, {
                completeCallback: e.complete,
                complete: ke
            })
        }

        function y(t, n, i, r, o) {
            for (var a, s = 0, l = t.length; l > s; s++) a = e(t[s]), a.queue(function() {
                j.promise(a, w(n, i, r, o))
            });
            return t
        }

        function k(e, t, n, i) {
            return t && (t = t.split(" "), be(t, function(t, n) {
                e.toggleClass(n, i)
            })), e
        }

        function x(e) {
            return ("" + e).replace(q, "&amp;").replace($, "&lt;").replace(K, "&gt;").replace(G, "&quot;").replace(Y, "&#39;")
        }

        function C(e, t) {
            var i;
            return 0 === t.indexOf("data") && (t = t.substring(4), t = t.charAt(0).toLowerCase() + t.substring(1)), t = t.replace(re, "-$1"), i = e.getAttribute("data-" + ve.ns + t), null === i ? i = n : "null" === i ? i = null : "true" === i ? i = !0 : "false" === i ? i = !1 : Ee.test(i) ? i = parseFloat(i) : ne.test(i) && !ie.test(i) && (i = Function("return (" + i + ")")()), i
        }

        function S(t, i) {
            var r, o, a = {};
            for (r in i) o = C(t, r), o !== n && (te.test(r) && (o = ve.template(e("#" + o).html())), a[r] = o);
            return a
        }

        function T(t, n) {
            return e.contains(t, n) ? -1 : 1
        }

        function D() {
            var t = e(this);
            return e.inArray(t.attr("data-" + ve.ns + "role"), ["slider", "rangeslider"]) > -1 || t.is(":visible")
        }

        function A(e, t) {
            var n = e.nodeName.toLowerCase();
            return (/input|select|textarea|button|object/.test(n) ? !e.disabled : "a" === n ? e.href || t : t) && E(e)
        }

        function E(t) {
            return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() {
                return "hidden" === e.css(this, "visibility")
            }).length
        }

        function M(e, t) {
            return new M.fn.init(e, t)
        }
        var F, I, R, P, z, B, L, H, N, O, V, U, W, j, q, $, G, Y, K, Q, X, J, Z, ee, te, ne, ie, re, oe, ae, se, le, ce, ue, de, he, fe, pe, ge, me, ve = t.kendo = t.kendo || {
                cultures: {}
            },
            _e = e.extend,
            be = e.each,
            we = e.isArray,
            ye = e.proxy,
            ke = e.noop,
            xe = Math,
            Ce = t.JSON || {},
            Se = {},
            Te = /%/,
            De = /\{(\d+)(:[^\}]+)?\}/g,
            Ae = /(\d+(?:\.?)\d*)px\s*(\d+(?:\.?)\d*)px\s*(\d+(?:\.?)\d*)px\s*(\d+)?/i,
            Ee = /^(\+|-?)\d+(\.?)\d*$/,
            Me = "function",
            Fe = "string",
            Ie = "number",
            Re = "object",
            Pe = "null",
            ze = "boolean",
            Be = "undefined",
            Le = {},
            He = {},
            Ne = [].slice,
            Oe = t.Globalize;
        ve.version = "2015.3.1111".replace(/^\s+|\s+$/g, ""), i.extend = function(e) {
                var t, n, i = function() {},
                    r = this,
                    o = e && e.init ? e.init : function() {
                        r.apply(this, arguments)
                    };
                i.prototype = r.prototype, n = o.fn = o.prototype = new i;
                for (t in e) n[t] = null != e[t] && e[t].constructor === Object ? _e(!0, {}, i.prototype[t], e[t]) : e[t];
                return n.constructor = o, o.extend = r.extend, o
            }, i.prototype._initOptions = function(e) {
                this.options = l({}, this.options, e)
            }, I = ve.isFunction = function(e) {
                return "function" == typeof e
            }, R = function() {
                this._defaultPrevented = !0
            }, P = function() {
                return this._defaultPrevented === !0
            }, z = i.extend({
                init: function() {
                    this._events = {}
                },
                bind: function(e, t, i) {
                    var r, o, a, s, l, c = this,
                        u = typeof e === Fe ? [e] : e,
                        d = typeof t === Me;
                    if (t === n) {
                        for (r in e) c.bind(r, e[r]);
                        return c
                    }
                    for (r = 0, o = u.length; o > r; r++) e = u[r], s = d ? t : t[e], s && (i && (a = s, s = function() {
                        c.unbind(e, s), a.apply(c, arguments)
                    }, s.original = a), l = c._events[e] = c._events[e] || [], l.push(s));
                    return c
                },
                one: function(e, t) {
                    return this.bind(e, t, !0)
                },
                first: function(e, t) {
                    var n, i, r, o, a = this,
                        s = typeof e === Fe ? [e] : e,
                        l = typeof t === Me;
                    for (n = 0, i = s.length; i > n; n++) e = s[n], r = l ? t : t[e], r && (o = a._events[e] = a._events[e] || [], o.unshift(r));
                    return a
                },
                trigger: function(e, t) {
                    var n, i, r = this,
                        o = r._events[e];
                    if (o) {
                        for (t = t || {}, t.sender = r, t._defaultPrevented = !1, t.preventDefault = R, t.isDefaultPrevented = P, o = o.slice(), n = 0, i = o.length; i > n; n++) o[n].call(r, t);
                        return t._defaultPrevented === !0
                    }
                    return !1
                },
                unbind: function(e, t) {
                    var i, r = this,
                        o = r._events[e];
                    if (e === n) r._events = {};
                    else if (o)
                        if (t)
                            for (i = o.length - 1; i >= 0; i--)(o[i] === t || o[i].original === t) && o.splice(i, 1);
                        else r._events[e] = [];
                    return r
                }
            }), B = /^\w+/, L = /\$\{([^}]*)\}/g, H = /\\\}/g, N = /__CURLY__/g, O = /\\#/g, V = /__SHARP__/g, U = ["", "0", "00", "000", "0000"], F = {
                paramName: "data",
                useWithBlock: !0,
                render: function(e, t) {
                    var n, i, r = "";
                    for (n = 0, i = t.length; i > n; n++) r += e(t[n]);
                    return r
                },
                compile: function(e, t) {
                    var n, i, o, a = _e({}, this, t),
                        s = a.paramName,
                        l = s.match(B)[0],
                        c = a.useWithBlock,
                        u = "var $kendoOutput, $kendoHtmlEncode = kendo.htmlEncode;";
                    if (I(e)) return e;
                    for (u += c ? "with(" + s + "){" : "", u += "$kendoOutput=", i = e.replace(H, "__CURLY__").replace(L, "#=$kendoHtmlEncode($1)#").replace(N, "}").replace(O, "__SHARP__").split("#"), o = 0; i.length > o; o++) u += r(i[o], o % 2 === 0);
                    u += c ? ";}" : ";", u += "return $kendoOutput;", u = u.replace(V, "#");
                    try {
                        return n = Function(l, u), n._slotCount = Math.floor(i.length / 2), n
                    } catch (d) {
                        throw Error(ve.format("Invalid template:'{0}' Generated code:'{1}'", e, u))
                    }
                }
            },
            function() {
                function e(e) {
                    return a.lastIndex = 0, a.test(e) ? '"' + e.replace(a, function(e) {
                        var t = s[e];
                        return typeof t === Fe ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                    }) + '"' : '"' + e + '"'
                }

                function t(o, a) {
                    var s, c, u, d, h, f, p = n,
                        g = a[o];
                    if (g && typeof g === Re && typeof g.toJSON === Me && (g = g.toJSON(o)), typeof r === Me && (g = r.call(a, o, g)), f = typeof g, f === Fe) return e(g);
                    if (f === Ie) return isFinite(g) ? g + "" : Pe;
                    if (f === ze || f === Pe) return g + "";
                    if (f === Re) {
                        if (!g) return Pe;
                        if (n += i, h = [], "[object Array]" === l.apply(g)) {
                            for (d = g.length, s = 0; d > s; s++) h[s] = t(s, g) || Pe;
                            return u = 0 === h.length ? "[]" : n ? "[\n" + n + h.join(",\n" + n) + "\n" + p + "]" : "[" + h.join(",") + "]", n = p, u
                        }
                        if (r && typeof r === Re)
                            for (d = r.length, s = 0; d > s; s++) typeof r[s] === Fe && (c = r[s], u = t(c, g), u && h.push(e(c) + (n ? ": " : ":") + u));
                        else
                            for (c in g) Object.hasOwnProperty.call(g, c) && (u = t(c, g), u && h.push(e(c) + (n ? ": " : ":") + u));
                        return u = 0 === h.length ? "{}" : n ? "{\n" + n + h.join(",\n" + n) + "\n" + p + "}" : "{" + h.join(",") + "}", n = p, u
                    }
                }
                var n, i, r, a = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                    s = {
                        "\b": "\\b",
                        "	": "\\t",
                        "\n": "\\n",
                        "\f": "\\f",
                        "\r": "\\r",
                        '"': '\\"',
                        "\\": "\\\\"
                    },
                    l = {}.toString;
                typeof Date.prototype.toJSON !== Me && (Date.prototype.toJSON = function() {
                    var e = this;
                    return isFinite(e.valueOf()) ? o(e.getUTCFullYear(), 4) + "-" + o(e.getUTCMonth() + 1) + "-" + o(e.getUTCDate()) + "T" + o(e.getUTCHours()) + ":" + o(e.getUTCMinutes()) + ":" + o(e.getUTCSeconds()) + "Z" : null
                }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
                    return this.valueOf()
                }), typeof Ce.stringify !== Me && (Ce.stringify = function(e, o, a) {
                    var s;
                    if (n = "", i = "", typeof a === Ie)
                        for (s = 0; a > s; s += 1) i += " ";
                    else typeof a === Fe && (i = a);
                    if (r = o, o && typeof o !== Me && (typeof o !== Re || typeof o.length !== Ie)) throw Error("JSON.stringify");
                    return t("", {
                        "": e
                    })
                })
            }(),
            function() {
                function t(e) {
                    if (e) {
                        if (e.numberFormat) return e;
                        if (typeof e === Fe) {
                            var t = ve.cultures;
                            return t[e] || t[e.split("-")[0]] || null
                        }
                        return null
                    }
                    return null
                }

                function i(e) {
                    return e && (e = t(e)), e || ve.cultures.current
                }

                function r(e) {
                    e.groupSizes = e.groupSize, e.percent.groupSizes = e.percent.groupSize, e.currency.groupSizes = e.currency.groupSize
                }

                function a(e, t, r) {
                    r = i(r);
                    var a = r.calendars.standard,
                        s = a.days,
                        l = a.months;
                    return t = a.patterns[t] || t, t.replace(u, function(t) {
                        var i, r, c;
                        return "d" === t ? r = e.getDate() : "dd" === t ? r = o(e.getDate()) : "ddd" === t ? r = s.namesAbbr[e.getDay()] : "dddd" === t ? r = s.names[e.getDay()] : "M" === t ? r = e.getMonth() + 1 : "MM" === t ? r = o(e.getMonth() + 1) : "MMM" === t ? r = l.namesAbbr[e.getMonth()] : "MMMM" === t ? r = l.names[e.getMonth()] : "yy" === t ? r = o(e.getFullYear() % 100) : "yyyy" === t ? r = o(e.getFullYear(), 4) : "h" === t ? r = e.getHours() % 12 || 12 : "hh" === t ? r = o(e.getHours() % 12 || 12) : "H" === t ? r = e.getHours() : "HH" === t ? r = o(e.getHours()) : "m" === t ? r = e.getMinutes() : "mm" === t ? r = o(e.getMinutes()) : "s" === t ? r = e.getSeconds() : "ss" === t ? r = o(e.getSeconds()) : "f" === t ? r = xe.floor(e.getMilliseconds() / 100) : "ff" === t ? (r = e.getMilliseconds(), r > 99 && (r = xe.floor(r / 10)), r = o(r)) : "fff" === t ? r = o(e.getMilliseconds(), 3) : "tt" === t ? r = e.getHours() < 12 ? a.AM[0] : a.PM[0] : "zzz" === t ? (i = e.getTimezoneOffset(), c = 0 > i, r = ("" + xe.abs(i / 60)).split(".")[0], i = xe.abs(i) - 60 * r, r = (c ? "+" : "-") + o(r), r += ":" + o(i)) : ("zz" === t || "z" === t) && (r = e.getTimezoneOffset() / 60, c = 0 > r, r = ("" + xe.abs(r)).split(".")[0], r = (c ? "+" : "-") + ("zz" === t ? o(r) : r)), r !== n ? r : t.slice(1, t.length - 1)
                    })
                }

                function s(e, t, r) {
                    r = i(r);
                    var o, a, s, c, u, w, y, k, x, C, S, T, D, A, E, M, F, I, R, P, z, B, L, H = r.numberFormat,
                        N = H.groupSize[0],
                        O = H[m],
                        V = H[g],
                        U = H.decimals,
                        W = H.pattern[0],
                        j = [],
                        q = 0 > e,
                        $ = p,
                        G = p,
                        Y = -1;
                    if (e === n) return p;
                    if (!isFinite(e)) return e;
                    if (!t) return r.name.length ? e.toLocaleString() : "" + e;
                    if (u = d.exec(t)) {
                        if (t = u[1].toLowerCase(), a = "c" === t, s = "p" === t, (a || s) && (H = a ? H.currency : H.percent, N = H.groupSize[0], O = H[m], V = H[g], U = H.decimals, o = H.symbol, W = H.pattern[q ? 0 : 1]), c = u[2], c && (U = +c), "e" === t) return c ? e.toExponential(U) : e.toExponential();
                        if (s && (e *= 100), e = l(e, U), q = 0 > e, e = e.split(g), w = e[0], y = e[1], q && (w = w.substring(1)), G = w, k = w.length, k >= N)
                            for (G = p, C = 0; k > C; C++) C > 0 && (k - C) % N === 0 && (G += O), G += w.charAt(C);
                        if (y && (G += V + y), "n" === t && !q) return G;
                        for (e = p, C = 0, S = W.length; S > C; C++) T = W.charAt(C), e += "n" === T ? G : "$" === T || "%" === T ? o : T;
                        return e
                    }
                    if (q && (e = -e), (t.indexOf("'") > -1 || t.indexOf('"') > -1 || t.indexOf("\\") > -1) && (t = t.replace(h, function(e) {
                            var t = e.charAt(0).replace("\\", ""),
                                n = e.slice(1).replace(t, "");
                            return j.push(n), b
                        })), t = t.split(";"), q && t[1]) t = t[1], A = !0;
                    else if (0 === e) {
                        if (t = t[2] || t[0], -1 == t.indexOf(v) && -1 == t.indexOf(_)) return t
                    } else t = t[0];
                    if (P = t.indexOf("%"), z = t.indexOf("$"), s = -1 != P, a = -1 != z, s && (e *= 100), a && "\\" === t[z - 1] && (t = t.split("\\").join(""), a = !1), (a || s) && (H = a ? H.currency : H.percent, N = H.groupSize[0], O = H[m], V = H[g], U = H.decimals, o = H.symbol), D = t.indexOf(m) > -1, D && (t = t.replace(f, p)), E = t.indexOf(g), S = t.length, -1 != E ? (y = ("" + e).split("e"), y = y[1] ? l(e, Math.abs(y[1])) : y[0], y = y.split(g)[1] || p, F = t.lastIndexOf(_) - E, M = t.lastIndexOf(v) - E, I = F > -1, R = M > -1, C = y.length, I || R || (t = t.substring(0, E) + t.substring(E + 1), S = t.length, E = -1, C = 0), I && F > M ? C = F : M > F && (R && C > M ? C = M : I && F > C && (C = F)), C > -1 && (e = l(e, C))) : e = l(e), M = t.indexOf(v), B = F = t.indexOf(_), Y = -1 == M && -1 != F ? F : -1 != M && -1 == F ? M : M > F ? F : M, M = t.lastIndexOf(v), F = t.lastIndexOf(_), L = -1 == M && -1 != F ? F : -1 != M && -1 == F ? M : M > F ? M : F, Y == S && (L = Y), -1 != Y) {
                        if (G = ("" + e).split(g), w = G[0], y = G[1] || p, k = w.length, x = y.length, q && -1 * e >= 0 && (q = !1), D)
                            if (k === N && E - B > k) w = O + w;
                            else if (k > N) {
                            for (G = p, C = 0; k > C; C++) C > 0 && (k - C) % N === 0 && (G += O), G += w.charAt(C);
                            w = G
                        }
                        for (e = t.substring(0, Y), q && !A && (e += "-"), C = Y; S > C; C++) {
                            if (T = t.charAt(C), -1 == E) {
                                if (k > L - C) {
                                    e += w;
                                    break
                                }
                            } else if (-1 != F && C > F && ($ = p), k >= E - C && E - C > -1 && (e += w, C = E), E === C) {
                                e += (y ? V : p) + y, C += L - E + 1;
                                continue
                            }
                            T === _ ? (e += T, $ = T) : T === v && (e += $)
                        }
                        if (L >= Y && (e += t.substring(L + 1)), a || s) {
                            for (G = p, C = 0, S = e.length; S > C; C++) T = e.charAt(C), G += "$" === T || "%" === T ? o : T;
                            e = G
                        }
                        if (S = j.length)
                            for (C = 0; S > C; C++) e = e.replace(b, j[C])
                    }
                    return e
                }
                var l, c, u = /dddd|ddd|dd|d|MMMM|MMM|MM|M|yyyy|yy|HH|H|hh|h|mm|m|fff|ff|f|tt|ss|s|zzz|zz|z|"[^"]*"|'[^']*'/g,
                    d = /^(n|c|p|e)(\d*)$/i,
                    h = /(\\.)|(['][^']*[']?)|(["][^"]*["]?)/g,
                    f = /\,/g,
                    p = "",
                    g = ".",
                    m = ",",
                    v = "#",
                    _ = "0",
                    b = "??",
                    w = "en-US",
                    y = {}.toString;
                ve.cultures["en-US"] = {
                    name: w,
                    numberFormat: {
                        pattern: ["-n"],
                        decimals: 2,
                        ",": ",",
                        ".": ".",
                        groupSize: [3],
                        percent: {
                            pattern: ["-n %", "n %"],
                            decimals: 2,
                            ",": ",",
                            ".": ".",
                            groupSize: [3],
                            symbol: "%"
                        },
                        currency: {
                            name: "US Dollar",
                            abbr: "USD",
                            pattern: ["($n)", "$n"],
                            decimals: 2,
                            ",": ",",
                            ".": ".",
                            groupSize: [3],
                            symbol: "$"
                        }
                    },
                    calendars: {
                        standard: {
                            days: {
                                names: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                                namesAbbr: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                                namesShort: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
                            },
                            months: {
                                names: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                                namesAbbr: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
                            },
                            AM: ["AM", "am", "AM"],
                            PM: ["PM", "pm", "PM"],
                            patterns: {
                                d: "M/d/yyyy",
                                D: "dddd, MMMM dd, yyyy",
                                F: "dddd, MMMM dd, yyyy h:mm:ss tt",
                                g: "M/d/yyyy h:mm tt",
                                G: "M/d/yyyy h:mm:ss tt",
                                m: "MMMM dd",
                                M: "MMMM dd",
                                s: "yyyy'-'MM'-'ddTHH':'mm':'ss",
                                t: "h:mm tt",
                                T: "h:mm:ss tt",
                                u: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
                                y: "MMMM, yyyy",
                                Y: "MMMM, yyyy"
                            },
                            "/": "/",
                            ":": ":",
                            firstDay: 0,
                            twoDigitYearMax: 2029
                        }
                    }
                }, ve.culture = function(e) {
                    var i, o = ve.cultures;
                    return e === n ? o.current : (i = t(e) || o[w], i.calendar = i.calendars.standard, o.current = i, Oe && !Oe.load && r(i.numberFormat), n)
                }, ve.findCulture = t, ve.getCulture = i, ve.culture(w), l = function(e, t) {
                    return t = t || 0, e = ("" + e).split("e"), e = Math.round(+(e[0] + "e" + (e[1] ? +e[1] + t : t))), e = ("" + e).split("e"), e = +(e[0] + "e" + (e[1] ? +e[1] - t : -t)), e.toFixed(t)
                }, c = function(e, t, i) {
                    if (t) {
                        if ("[object Date]" === y.call(e)) return a(e, t, i);
                        if (typeof e === Ie) return s(e, t, i)
                    }
                    return e !== n ? e : ""
                }, Oe && !Oe.load && (c = function(t, n, i) {
                    return e.isPlainObject(i) && (i = i.name), Oe.format(t, n, i)
                }), ve.format = function(e) {
                    var t = arguments;
                    return e.replace(De, function(e, n, i) {
                        var r = t[parseInt(n, 10) + 1];
                        return c(r, i ? i.substring(1) : "")
                    })
                }, ve._extractFormat = function(e) {
                    return "{0:" === e.slice(0, 3) && (e = e.slice(3, e.length - 1)), e
                }, ve._activeElement = function() {
                    try {
                        return document.activeElement
                    } catch (e) {
                        return document.documentElement.activeElement
                    }
                }, ve._round = l, ve.toString = c
            }(),
            function() {
                function t(e, t, n) {
                    return !(e >= t && n >= e)
                }

                function i(e) {
                    return e.charAt(0)
                }

                function r(t) {
                    return e.map(t, i)
                }

                function o(e, t) {
                    t || 23 !== e.getHours() || e.setHours(e.getHours() + 2)
                }

                function a(e) {
                    for (var t = 0, n = e.length, i = []; n > t; t++) i[t] = (e[t] + "").toLowerCase();
                    return i
                }

                function s(e) {
                    var t, n = {};
                    for (t in e) n[t] = a(e[t]);
                    return n
                }

                function l(e, i, a) {
                    if (!e) return null;
                    var l, c, u, d, p, g, m, _, b, w, y, k, x, C = function(e) {
                            for (var t = 0; i[B] === e;) t++, B++;
                            return t > 0 && (B -= 1), t
                        },
                        S = function(t) {
                            var n = v[t] || RegExp("^\\d{1," + t + "}"),
                                i = e.substr(L, t).match(n);
                            return i ? (i = i[0], L += i.length, parseInt(i, 10)) : null
                        },
                        T = function(t, n) {
                            for (var i, r, o, a = 0, s = t.length, l = 0, c = 0; s > a; a++) i = t[a], r = i.length, o = e.substr(L, r), n && (o = o.toLowerCase()), o == i && r > l && (l = r, c = a);
                            return l ? (L += l, c + 1) : null
                        },
                        D = function() {
                            var t = !1;
                            return e.charAt(L) === i[B] && (L++, t = !0), t
                        },
                        A = a.calendars.standard,
                        E = null,
                        M = null,
                        F = null,
                        I = null,
                        R = null,
                        P = null,
                        z = null,
                        B = 0,
                        L = 0,
                        H = !1,
                        N = new Date,
                        O = A.twoDigitYearMax || 2029,
                        V = N.getFullYear();
                    for (i || (i = "d"), d = A.patterns[i], d && (i = d), i = i.split(""), u = i.length; u > B; B++)
                        if (l = i[B], H) "'" === l ? H = !1 : D();
                        else if ("d" === l) {
                        if (c = C("d"), A._lowerDays || (A._lowerDays = s(A.days)), null !== F && c > 2) continue;
                        if (F = 3 > c ? S(2) : T(A._lowerDays[3 == c ? "namesAbbr" : "names"], !0), null === F || t(F, 1, 31)) return null
                    } else if ("M" === l) {
                        if (c = C("M"), A._lowerMonths || (A._lowerMonths = s(A.months)), M = 3 > c ? S(2) : T(A._lowerMonths[3 == c ? "namesAbbr" : "names"], !0), null === M || t(M, 1, 12)) return null;
                        M -= 1
                    } else if ("y" === l) {
                        if (c = C("y"), E = S(c), null === E) return null;
                        2 == c && ("string" == typeof O && (O = V + parseInt(O, 10)), E = V - V % 100 + E, E > O && (E -= 100))
                    } else if ("h" === l) {
                        if (C("h"), I = S(2), 12 == I && (I = 0), null === I || t(I, 0, 11)) return null
                    } else if ("H" === l) {
                        if (C("H"), I = S(2), null === I || t(I, 0, 23)) return null
                    } else if ("m" === l) {
                        if (C("m"), R = S(2), null === R || t(R, 0, 59)) return null
                    } else if ("s" === l) {
                        if (C("s"), P = S(2), null === P || t(P, 0, 59)) return null
                    } else if ("f" === l) {
                        if (c = C("f"), x = e.substr(L, c).match(v[3]), z = S(c), null !== z && (x = x[0].length, 3 > x && (z *= Math.pow(10, 3 - x)), c > 3 && (z = parseInt(("" + z).substring(0, 3), 10))), null === z || t(z, 0, 999)) return null
                    } else if ("t" === l) {
                        if (c = C("t"), _ = A.AM, b = A.PM, 1 === c && (_ = r(_), b = r(b)), p = T(b), !p && !T(_)) return null
                    } else if ("z" === l) {
                        if (g = !0, c = C("z"), "Z" === e.substr(L, 1)) {
                            D();
                            continue
                        }
                        if (m = e.substr(L, 6).match(c > 2 ? f : h), !m) return null;
                        if (m = m[0].split(":"), w = m[0], y = m[1], !y && w.length > 3 && (L = w.length - 2, y = w.substring(L), w = w.substring(0, L)), w = parseInt(w, 10), t(w, -12, 13)) return null;
                        if (c > 2 && (y = parseInt(y, 10), isNaN(y) || t(y, 0, 59))) return null
                    } else if ("'" === l) H = !0, D();
                    else if (!D()) return null;
                    return k = null !== I || null !== R || P || null, null === E && null === M && null === F && k ? (E = V, M = N.getMonth(), F = N.getDate()) : (null === E && (E = V), null === F && (F = 1)), p && 12 > I && (I += 12), g ? (w && (I += -w), y && (R += -y), e = new Date(Date.UTC(E, M, F, I, R, P, z))) : (e = new Date(E, M, F, I, R, P, z), o(e, I)), 100 > E && e.setFullYear(E), e.getDate() !== F && g === n ? null : e
                }

                function c(e) {
                    var t = "-" === e.substr(0, 1) ? -1 : 1;
                    return e = e.substring(1), e = 60 * parseInt(e.substr(0, 2), 10) + parseInt(e.substring(2), 10), t * e
                }
                var u = /\u00A0/g,
                    d = /[eE][\-+]?[0-9]+/,
                    h = /[+|\-]\d{1,2}/,
                    f = /[+|\-]\d{1,2}:?\d{2}/,
                    p = /^\/Date\((.*?)\)\/$/,
                    g = /[+-]\d*/,
                    m = ["G", "g", "d", "F", "D", "y", "m", "T", "t"],
                    v = {
                        2: /^\d{1,2}/,
                        3: /^\d{1,3}/,
                        4: /^\d{4}/
                    },
                    _ = {}.toString;
                ve.parseDate = function(e, t, n) {
                    var i, r, o, a, s;
                    if ("[object Date]" === _.call(e)) return e;
                    if (i = 0, r = null, e && 0 === e.indexOf("/D") && (r = p.exec(e))) return r = r[1], s = g.exec(r.substring(1)), r = new Date(parseInt(r, 10)), s && (s = c(s[0]), r = ve.timezone.apply(r, 0), r = ve.timezone.convert(r, 0, -1 * s)), r;
                    if (n = ve.getCulture(n), !t) {
                        for (t = [], a = n.calendar.patterns, o = m.length; o > i; i++) t[i] = a[m[i]];
                        i = 0, t = ["yyyy/MM/dd HH:mm:ss", "yyyy/MM/dd HH:mm", "yyyy/MM/dd", "ddd MMM dd yyyy HH:mm:ss", "yyyy-MM-ddTHH:mm:ss.fffffffzzz", "yyyy-MM-ddTHH:mm:ss.fffzzz", "yyyy-MM-ddTHH:mm:sszzz", "yyyy-MM-ddTHH:mm:ss.fffffff", "yyyy-MM-ddTHH:mm:ss.fff", "yyyy-MM-ddTHH:mmzzz", "yyyy-MM-ddTHH:mmzz", "yyyy-MM-ddTHH:mm:ss", "yyyy-MM-ddTHH:mm", "yyyy-MM-dd HH:mm:ss", "yyyy-MM-dd HH:mm", "yyyy-MM-dd", "HH:mm:ss", "HH:mm"].concat(t)
                    }
                    for (t = we(t) ? t : [t], o = t.length; o > i; i++)
                        if (r = l(e, t[i], n)) return r;
                    return r
                }, ve.parseInt = function(e, t) {
                    var n = ve.parseFloat(e, t);
                    return n && (n = 0 | n), n
                }, ve.parseFloat = function(e, t, n) {
                    if (!e && 0 !== e) return null;
                    if (typeof e === Ie) return e;
                    e = "" + e, t = ve.getCulture(t);
                    var i, r, o = t.numberFormat,
                        a = o.percent,
                        s = o.currency,
                        l = s.symbol,
                        c = a.symbol,
                        h = e.indexOf("-");
                    return d.test(e) ? (e = parseFloat(e.replace(o["."], ".")), isNaN(e) && (e = null), e) : h > 0 ? null : (h = h > -1, e.indexOf(l) > -1 || n && n.toLowerCase().indexOf("c") > -1 ? (o = s, i = o.pattern[0].replace("$", l).split("n"), e.indexOf(i[0]) > -1 && e.indexOf(i[1]) > -1 && (e = e.replace(i[0], "").replace(i[1], ""), h = !0)) : e.indexOf(c) > -1 && (r = !0, o = a, l = c), e = e.replace("-", "").replace(l, "").replace(u, " ").split(o[","].replace(u, " ")).join("").replace(o["."], "."), e = parseFloat(e), isNaN(e) ? e = null : h && (e *= -1), e && r && (e /= 100), e)
                }, Oe && !Oe.load && (ve.parseDate = function(e, t, n) {
                    return "[object Date]" === _.call(e) ? e : Oe.parseDate(e, t, n)
                }, ve.parseFloat = function(t, i) {
                    return typeof t === Ie ? t : t === n || null === t ? null : (e.isPlainObject(i) && (i = i.name), t = Oe.parseFloat(t, i), isNaN(t) ? null : t)
                })
            }(),
            function() {
                var i, r, o, a, s, l, c;
                Se._scrollbar = n, Se.scrollbar = function(e) {
                    if (isNaN(Se._scrollbar) || e) {
                        var t, n = document.createElement("div");
                        return n.style.cssText = "overflow:scroll;overflow-x:hidden;zoom:1;clear:both;display:block", n.innerHTML = "&nbsp;", document.body.appendChild(n), Se._scrollbar = t = n.offsetWidth - n.scrollWidth, document.body.removeChild(n), t
                    }
                    return Se._scrollbar
                }, Se.isRtl = function(t) {
                    return e(t).closest(".k-rtl").length > 0
                }, i = document.createElement("table");
                try {
                    i.innerHTML = "<tr><td></td></tr>", Se.tbodyInnerHtml = !0
                } catch (d) {
                    Se.tbodyInnerHtml = !1
                }
                Se.touch = "ontouchstart" in t, Se.msPointers = t.MSPointerEvent, Se.pointers = t.PointerEvent, r = Se.transitions = !1, o = Se.transforms = !1, a = "HTMLElement" in t ? HTMLElement.prototype : [], Se.hasHW3D = "WebKitCSSMatrix" in t && "m11" in new t.WebKitCSSMatrix || "MozPerspective" in document.documentElement.style || "msPerspective" in document.documentElement.style, be(["Moz", "webkit", "O", "ms"], function() {
                    var e, t = "" + this,
                        a = typeof i.style[t + "Transition"] === Fe;
                    return a || typeof i.style[t + "Transform"] === Fe ? (e = t.toLowerCase(), o = {
                        css: "ms" != e ? "-" + e + "-" : "",
                        prefix: t,
                        event: "o" === e || "webkit" === e ? e : ""
                    }, a && (r = o, r.event = r.event ? r.event + "TransitionEnd" : "transitionend"), !1) : n
                }), i = null, Se.transforms = o, Se.transitions = r, Se.devicePixelRatio = t.devicePixelRatio === n ? 1 : t.devicePixelRatio;
                try {
                    Se.screenWidth = t.outerWidth || t.screen ? t.screen.availWidth : t.innerWidth, Se.screenHeight = t.outerHeight || t.screen ? t.screen.availHeight : t.innerHeight
                } catch (d) {
                    Se.screenWidth = t.screen.availWidth, Se.screenHeight = t.screen.availHeight
                }
                Se.detectOS = function(e) {
                        var n, i, r = !1,
                            o = [],
                            a = !/mobile safari/i.test(e),
                            s = {
                                wp: /(Windows Phone(?: OS)?)\s(\d+)\.(\d+(\.\d+)?)/,
                                fire: /(Silk)\/(\d+)\.(\d+(\.\d+)?)/,
                                android: /(Android|Android.*(?:Opera|Firefox).*?\/)\s*(\d+)\.(\d+(\.\d+)?)/,
                                iphone: /(iPhone|iPod).*OS\s+(\d+)[\._]([\d\._]+)/,
                                ipad: /(iPad).*OS\s+(\d+)[\._]([\d_]+)/,
                                meego: /(MeeGo).+NokiaBrowser\/(\d+)\.([\d\._]+)/,
                                webos: /(webOS)\/(\d+)\.(\d+(\.\d+)?)/,
                                blackberry: /(BlackBerry|BB10).*?Version\/(\d+)\.(\d+(\.\d+)?)/,
                                playbook: /(PlayBook).*?Tablet\s*OS\s*(\d+)\.(\d+(\.\d+)?)/,
                                windows: /(MSIE)\s+(\d+)\.(\d+(\.\d+)?)/,
                                tizen: /(tizen).*?Version\/(\d+)\.(\d+(\.\d+)?)/i,
                                sailfish: /(sailfish).*rv:(\d+)\.(\d+(\.\d+)?).*firefox/i,
                                ffos: /(Mobile).*rv:(\d+)\.(\d+(\.\d+)?).*Firefox/
                            },
                            l = {
                                ios: /^i(phone|pad|pod)$/i,
                                android: /^android|fire$/i,
                                blackberry: /^blackberry|playbook/i,
                                windows: /windows/,
                                wp: /wp/,
                                flat: /sailfish|ffos|tizen/i,
                                meego: /meego/
                            },
                            c = {
                                tablet: /playbook|ipad|fire/i
                            },
                            d = {
                                omini: /Opera\sMini/i,
                                omobile: /Opera\sMobi/i,
                                firefox: /Firefox|Fennec/i,
                                mobilesafari: /version\/.*safari/i,
                                ie: /MSIE|Windows\sPhone/i,
                                chrome: /chrome|crios/i,
                                webkit: /webkit/i
                            };
                        for (i in s)
                            if (s.hasOwnProperty(i) && (o = e.match(s[i]))) {
                                if ("windows" == i && "plugins" in navigator) return !1;
                                r = {}, r.device = i, r.tablet = u(i, c, !1), r.browser = u(e, d, "default"), r.name = u(i, l), r[r.name] = !0, r.majorVersion = o[2], r.minorVersion = o[3].replace("_", "."), n = r.minorVersion.replace(".", "").substr(0, 2), r.flatVersion = r.majorVersion + n + Array(3 - (3 > n.length ? n.length : 2)).join("0"), r.cordova = typeof t.PhoneGap !== Be || typeof t.cordova !== Be, r.appMode = t.navigator.standalone || /file|local|wmapp/.test(t.location.protocol) || r.cordova, r.android && (1.5 > Se.devicePixelRatio && 400 > r.flatVersion || a) && (Se.screenWidth > 800 || Se.screenHeight > 800) && (r.tablet = i);
                                break
                            }
                        return r
                    }, s = Se.mobileOS = Se.detectOS(navigator.userAgent), Se.wpDevicePixelRatio = s.wp ? window.screen.width / 320 : 0, Se.kineticScrollNeeded = s && (Se.touch || Se.msPointers || Se.pointers), Se.hasNativeScrolling = !1, (s.ios || s.android && s.majorVersion > 2 || s.wp) && (Se.hasNativeScrolling = s), Se.mouseAndTouchPresent = Se.touch && !(Se.mobileOS.ios || Se.mobileOS.android), Se.detectBrowser = function(e) {
                        var t, n = !1,
                            i = [],
                            r = {
                                edge: /(edge)[ \/]([\w.]+)/i,
                                webkit: /(chrome)[ \/]([\w.]+)/i,
                                safari: /(webkit)[ \/]([\w.]+)/i,
                                opera: /(opera)(?:.*version|)[ \/]([\w.]+)/i,
                                msie: /(msie\s|trident.*? rv:)([\w.]+)/i,
                                mozilla: /(mozilla)(?:.*? rv:([\w.]+)|)/i
                            };
                        for (t in r)
                            if (r.hasOwnProperty(t) && (i = e.match(r[t]))) {
                                n = {}, n[t] = !0, n[i[1].toLowerCase().split(" ")[0].split("/")[0]] = !0, n.version = parseInt(document.documentMode || i[2], 10);
                                break
                            }
                        return n
                    }, Se.browser = Se.detectBrowser(navigator.userAgent), Se.detectClipboardAccess = function() {
                        var e = {
                            copy: document.queryCommandSupported ? document.queryCommandSupported("copy") : !1,
                            cut: document.queryCommandSupported ? document.queryCommandSupported("cut") : !1,
                            paste: document.queryCommandSupported ? document.queryCommandSupported("paste") : !1
                        };
                        return Se.browser.chrome && Se.browser.version >= 43 && (e.copy = !0, e.cut = !0), e
                    }, Se.clipboard = Se.detectClipboardAccess(), Se.zoomLevel = function() {
                        var e, n, i;
                        try {
                            return e = Se.browser, n = 0, i = document.documentElement, e.msie && 11 == e.version && i.scrollHeight > i.clientHeight && !Se.touch && (n = Se.scrollbar()), Se.touch ? i.clientWidth / t.innerWidth : e.msie && e.version >= 10 ? ((window.top || t).document.documentElement.offsetWidth + n) / (window.top || t).innerWidth : 1
                        } catch (r) {
                            return 1
                        }
                    }, Se.cssBorderSpacing = n !== document.documentElement.style.borderSpacing && !(Se.browser.msie && 8 > Se.browser.version),
                    function(t) {
                        var n = "",
                            i = e(document.documentElement),
                            r = parseInt(t.version, 10);
                        t.msie ? n = "ie" : t.mozilla ? n = "ff" : t.safari ? n = "safari" : t.webkit ? n = "webkit" : t.opera ? n = "opera" : t.edge && (n = "edge"), n && (n = "k-" + n + " k-" + n + r), Se.mobileOS && (n += " k-mobile"), i.addClass(n)
                    }(Se.browser), Se.eventCapture = document.documentElement.addEventListener, l = document.createElement("input"), Se.placeholder = "placeholder" in l, Se.propertyChangeEvent = "onpropertychange" in l, Se.input = function() {
                        for (var e, t = ["number", "date", "time", "month", "week", "datetime", "datetime-local"], n = t.length, i = "test", r = {}, o = 0; n > o; o++) e = t[o], l.setAttribute("type", e), l.value = i, r[e.replace("-", "")] = "text" !== l.type && l.value !== i;
                        return r
                    }(), l.style.cssText = "float:left;", Se.cssFloat = !!l.style.cssFloat, l = null, Se.stableSort = function() {
                        var e, t = 513,
                            n = [{
                                index: 0,
                                field: "b"
                            }];
                        for (e = 1; t > e; e++) n.push({
                            index: e,
                            field: "a"
                        });
                        return n.sort(function(e, t) {
                            return e.field > t.field ? 1 : t.field > e.field ? -1 : 0
                        }), 1 === n[0].index
                    }(), Se.matchesSelector = a.webkitMatchesSelector || a.mozMatchesSelector || a.msMatchesSelector || a.oMatchesSelector || a.matchesSelector || a.matches || function(t) {
                        for (var n = document.querySelectorAll ? (this.parentNode || document).querySelectorAll(t) || [] : e(t), i = n.length; i--;)
                            if (n[i] == this) return !0;
                        return !1
                    }, Se.pushState = t.history && t.history.pushState, c = document.documentMode, Se.hashChange = "onhashchange" in t && !(Se.browser.msie && (!c || 8 >= c)), Se.customElements = "registerElement" in t.document
            }(), W = {
                left: {
                    reverse: "right"
                },
                right: {
                    reverse: "left"
                },
                down: {
                    reverse: "up"
                },
                up: {
                    reverse: "down"
                },
                top: {
                    reverse: "bottom"
                },
                bottom: {
                    reverse: "top"
                },
                "in": {
                    reverse: "out"
                },
                out: {
                    reverse: "in"
                }
            }, j = {}, e.extend(j, {
                enabled: !0,
                Element: function(t) {
                    this.element = e(t)
                },
                promise: function(e, t) {
                    e.is(":visible") || e.css({
                        display: e.data("olddisplay") || "block"
                    }).css("display"), t.hide && e.data("olddisplay", e.css("display")).hide(), t.init && t.init(), t.completeCallback && t.completeCallback(e), e.dequeue()
                },
                disable: function() {
                    this.enabled = !1, this.promise = this.promiseShim
                },
                enable: function() {
                    this.enabled = !0, this.promise = this.animatedPromise
                }
            }), j.promiseShim = j.promise, "kendoAnimate" in e.fn || _e(e.fn, {
                kendoStop: function(e, t) {
                    return this.stop(e, t)
                },
                kendoAnimate: function(e, t, n, i) {
                    return y(this, e, t, n, i)
                },
                kendoAddClass: function(e, t) {
                    return ve.toggleClass(this, e, t, !0)
                },
                kendoRemoveClass: function(e, t) {
                    return ve.toggleClass(this, e, t, !1)
                },
                kendoToggleClass: function(e, t, n) {
                    return ve.toggleClass(this, e, t, n)
                }
            }), q = /&/g, $ = /</g, G = /"/g, Y = /'/g, K = />/g, Q = function(e) {
                return e.target
            }, Se.touch && (Q = function(e) {
                var t = "originalEvent" in e ? e.originalEvent.changedTouches : "changedTouches" in e ? e.changedTouches : null;
                return t ? document.elementFromPoint(t[0].clientX, t[0].clientY) : e.target
            }, be(["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap"], function(t, n) {
                e.fn[n] = function(e) {
                    return this.bind(n, e)
                }
            })), Se.touch ? Se.mobileOS ? (Se.mousedown = "touchstart", Se.mouseup = "touchend", Se.mousemove = "touchmove", Se.mousecancel = "touchcancel", Se.click = "touchend", Se.resize = "orientationchange") : (Se.mousedown = "mousedown touchstart", Se.mouseup = "mouseup touchend", Se.mousemove = "mousemove touchmove", Se.mousecancel = "mouseleave touchcancel", Se.click = "click", Se.resize = "resize") : Se.pointers ? (Se.mousemove = "pointermove", Se.mousedown = "pointerdown", Se.mouseup = "pointerup", Se.mousecancel = "pointercancel", Se.click = "pointerup", Se.resize = "orientationchange resize") : Se.msPointers ? (Se.mousemove = "MSPointerMove", Se.mousedown = "MSPointerDown", Se.mouseup = "MSPointerUp", Se.mousecancel = "MSPointerCancel", Se.click = "MSPointerUp", Se.resize = "orientationchange resize") : (Se.mousemove = "mousemove", Se.mousedown = "mousedown", Se.mouseup = "mouseup", Se.mousecancel = "mouseleave", Se.click = "click", Se.resize = "resize"), X = function(e, t) {
                var n, i, r, o, a = t || "d",
                    s = 1;
                for (i = 0, r = e.length; r > i; i++) o = e[i], "" !== o && (n = o.indexOf("["), 0 !== n && (-1 == n ? o = "." + o : (s++, o = "." + o.substring(0, n) + " || {})" + o.substring(n))), s++, a += o + (r - 1 > i ? " || {})" : ")"));
                return Array(s).join("(") + a
            }, J = /^([a-z]+:)?\/\//i, _e(ve, {
                widgets: [],
                _widgetRegisteredCallbacks: [],
                ui: ve.ui || {},
                fx: ve.fx || b,
                effects: ve.effects || j,
                mobile: ve.mobile || {},
                data: ve.data || {},
                dataviz: ve.dataviz || {},
                drawing: ve.drawing || {},
                spreadsheet: {
                    messages: {}
                },
                keys: {
                    INSERT: 45,
                    DELETE: 46,
                    BACKSPACE: 8,
                    TAB: 9,
                    ENTER: 13,
                    ESC: 27,
                    LEFT: 37,
                    UP: 38,
                    RIGHT: 39,
                    DOWN: 40,
                    END: 35,
                    HOME: 36,
                    SPACEBAR: 32,
                    PAGEUP: 33,
                    PAGEDOWN: 34,
                    F2: 113,
                    F10: 121,
                    F12: 123,
                    NUMPAD_PLUS: 107,
                    NUMPAD_MINUS: 109,
                    NUMPAD_DOT: 110
                },
                support: ve.support || Se,
                animate: ve.animate || y,
                ns: "",
                attr: function(e) {
                    return "data-" + ve.ns + e
                },
                getShadows: a,
                wrap: s,
                deepExtend: l,
                getComputedStyles: f,
                webComponents: ve.webComponents || [],
                isScrollable: p,
                scrollLeft: g,
                size: m,
                toCamelCase: h,
                toHyphens: d,
                getOffset: ve.getOffset || v,
                parseEffects: ve.parseEffects || _,
                toggleClass: ve.toggleClass || k,
                directions: ve.directions || W,
                Observable: z,
                Class: i,
                Template: F,
                template: ye(F.compile, F),
                render: ye(F.render, F),
                stringify: ye(Ce.stringify, Ce),
                eventTarget: Q,
                htmlEncode: x,
                isLocalUrl: function(e) {
                    return e && !J.test(e)
                },
                expr: function(e, t, n) {
                    return e = e || "", typeof t == Fe && (n = t, t = !1), n = n || "d", e && "[" !== e.charAt(0) && (e = "." + e), t ? (e = e.replace(/"([^.]*)\.([^"]*)"/g, '"$1_$DOT$_$2"'), e = e.replace(/'([^.]*)\.([^']*)'/g, "'$1_$DOT$_$2'"), e = X(e.split("."), n), e = e.replace(/_\$DOT\$_/g, ".")) : e = n + e, e
                },
                getter: function(e, t) {
                    var n = e + t;
                    return Le[n] = Le[n] || Function("d", "return " + ve.expr(e, t))
                },
                setter: function(e) {
                    return He[e] = He[e] || Function("d,value", ve.expr(e) + "=value")
                },
                accessor: function(e) {
                    return {
                        get: ve.getter(e),
                        set: ve.setter(e)
                    }
                },
                guid: function() {
                    var e, t, n = "";
                    for (e = 0; 32 > e; e++) t = 16 * xe.random() | 0, (8 == e || 12 == e || 16 == e || 20 == e) && (n += "-"), n += (12 == e ? 4 : 16 == e ? 3 & t | 8 : t).toString(16);
                    return n
                },
                roleSelector: function(e) {
                    return e.replace(/(\S+)/g, "[" + ve.attr("role") + "=$1],").slice(0, -1)
                },
                directiveSelector: function(e) {
                    var t, n = e.split(" ");
                    if (n)
                        for (t = 0; n.length > t; t++) "view" != n[t] && (n[t] = n[t].replace(/(\w*)(view|bar|strip|over)$/, "$1-$2"));
                    return n.join(" ").replace(/(\S+)/g, "kendo-mobile-$1,").slice(0, -1)
                },
                triggeredByInput: function(e) {
                    return /^(label|input|textarea|select)$/i.test(e.target.tagName)
                },
                onWidgetRegistered: function(e) {
                    for (var t = 0, n = ve.widgets.length; n > t; t++) e(ve.widgets[t]);
                    ve._widgetRegisteredCallbacks.push(e)
                },
                logToConsole: function(e) {
                    var i = t.console;
                    !ve.suppressLog && n !== i && i.log && i.log(e)
                }
            }), Z = z.extend({
                init: function(e, t) {
                    var n, i = this;
                    i.element = ve.jQuery(e).handler(i), i.angular("init", t), z.fn.init.call(i), n = t ? t.dataSource : null, n && (t = _e({}, t, {
                            dataSource: {}
                        })), t = i.options = _e(!0, {}, i.options, t), n && (t.dataSource = n), i.element.attr(ve.attr("role")) || i.element.attr(ve.attr("role"), (t.name || "").toLowerCase()),
                        i.element.data("kendo" + t.prefix + t.name, i), i.bind(i.events, t)
                },
                events: [],
                options: {
                    prefix: ""
                },
                _hasBindingTarget: function() {
                    return !!this.element[0].kendoBindingTarget
                },
                _tabindex: function(e) {
                    e = e || this.wrapper;
                    var t = this.element,
                        n = "tabindex",
                        i = e.attr(n) || t.attr(n);
                    t.removeAttr(n), e.attr(n, isNaN(i) ? 0 : i)
                },
                setOptions: function(t) {
                    this._setEvents(t), e.extend(this.options, t)
                },
                _setEvents: function(e) {
                    for (var t, n = this, i = 0, r = n.events.length; r > i; i++) t = n.events[i], n.options[t] && e[t] && n.unbind(t, n.options[t]);
                    n.bind(n.events, e)
                },
                resize: function(e) {
                    var t = this.getSize(),
                        n = this._size;
                    (e || (t.width > 0 || t.height > 0) && (!n || t.width !== n.width || t.height !== n.height)) && (this._size = t, this._resize(t, e), this.trigger("resize", t))
                },
                getSize: function() {
                    return ve.dimensions(this.element)
                },
                size: function(e) {
                    return e ? (this.setSize(e), n) : this.getSize()
                },
                setSize: e.noop,
                _resize: e.noop,
                destroy: function() {
                    var e = this;
                    e.element.removeData("kendo" + e.options.prefix + e.options.name), e.element.removeData("handler"), e.unbind()
                },
                _destroy: function() {
                    this.destroy()
                },
                angular: function() {},
                _muteAngularRebind: function(e) {
                    this._muteRebind = !0, e.call(this), this._muteRebind = !1
                }
            }), ee = Z.extend({
                dataItems: function() {
                    return this.dataSource.flatView()
                },
                _angularItems: function(t) {
                    var n = this;
                    n.angular(t, function() {
                        return {
                            elements: n.items(),
                            data: e.map(n.dataItems(), function(e) {
                                return {
                                    dataItem: e
                                }
                            })
                        }
                    })
                }
            }), ve.dimensions = function(e, t) {
                var n = e[0];
                return t && e.css(t), {
                    width: n.offsetWidth,
                    height: n.offsetHeight
                }
            }, ve.notify = ke, te = /template$/i, ne = /^\s*(?:\{(?:.|\r\n|\n)*\}|\[(?:.|\r\n|\n)*\])\s*$/, ie = /^\{(\d+)(:[^\}]+)?\}|^\[[A-Za-z_]*\]$/, re = /([A-Z])/g, ve.initWidget = function(i, r, o) {
                var a, s, l, c, u, d, h, f, p, g, m, v, _;
                if (o ? o.roles && (o = o.roles) : o = ve.ui.roles, i = i.nodeType ? i : i[0], d = i.getAttribute("data-" + ve.ns + "role")) {
                    p = -1 === d.indexOf("."), l = p ? o[d] : ve.getter(d)(t), m = e(i).data(), v = l ? "kendo" + l.fn.options.prefix + l.fn.options.name : "", g = p ? RegExp("^kendo.*" + d + "$", "i") : RegExp("^" + v + "$", "i");
                    for (_ in m)
                        if (_.match(g)) {
                            if (_ !== v) return m[_];
                            a = m[_]
                        }
                    if (l) {
                        for (f = C(i, "dataSource"), r = e.extend({}, S(i, l.fn.options), r), f && (r.dataSource = typeof f === Fe ? ve.getter(f)(t) : f), c = 0, u = l.fn.events.length; u > c; c++) s = l.fn.events[c], h = C(i, s), h !== n && (r[s] = ve.getter(h)(t));
                        return a ? e.isEmptyObject(r) || a.setOptions(r) : a = new l(i, r), a
                    }
                }
            }, ve.rolesFromNamespaces = function(e) {
                var t, n, i = [];
                for (e[0] || (e = [ve.ui, ve.dataviz.ui]), t = 0, n = e.length; n > t; t++) i[t] = e[t].roles;
                return _e.apply(null, [{}].concat(i.reverse()))
            }, ve.init = function(t) {
                var n = ve.rolesFromNamespaces(Ne.call(arguments, 1));
                e(t).find("[data-" + ve.ns + "role]").addBack().each(function() {
                    ve.initWidget(this, {}, n)
                })
            }, ve.destroy = function(t) {
                e(t).find("[data-" + ve.ns + "role]").addBack().each(function() {
                    var t, n = e(this).data();
                    for (t in n) 0 === t.indexOf("kendo") && typeof n[t].destroy === Me && n[t].destroy()
                })
            }, ve.resize = function(t, n) {
                var i, r = e(t).find("[data-" + ve.ns + "role]").addBack().filter(D);
                r.length && (i = e.makeArray(r), i.sort(T), e.each(i, function() {
                    var t = ve.widgetInstance(e(this));
                    t && t.resize(n)
                }))
            }, ve.parseOptions = S, _e(ve.ui, {
                Widget: Z,
                DataBoundWidget: ee,
                roles: {},
                progress: function(t, n) {
                    var i, r, o, a, s = t.find(".k-loading-mask"),
                        l = ve.support,
                        c = l.browser;
                    n ? s.length || (i = l.isRtl(t), r = i ? "right" : "left", a = t.scrollLeft(), o = c.webkit && i ? t[0].scrollWidth - t.width() - 2 * a : 0, s = e("<div class='k-loading-mask'><span class='k-loading-text'>Loading...</span><div class='k-loading-image'/><div class='k-loading-color'/></div>").width("100%").height("100%").css("top", t.scrollTop()).css(r, Math.abs(a) + o).prependTo(t)) : s && s.remove()
                },
                plugin: function(t, i, r) {
                    var o, a, s, l, c = t.fn.options.name;
                    for (i = i || ve.ui, r = r || "", i[c] = t, i.roles[c.toLowerCase()] = t, o = "getKendo" + r + c, c = "kendo" + r + c, a = {
                            name: c,
                            widget: t,
                            prefix: r || ""
                        }, ve.widgets.push(a), s = 0, l = ve._widgetRegisteredCallbacks.length; l > s; s++) ve._widgetRegisteredCallbacks[s](a);
                    e.fn[c] = function(i) {
                        var r, o = this;
                        return typeof i === Fe ? (r = Ne.call(arguments, 1), this.each(function() {
                            var t, a, s = e.data(this, c);
                            if (!s) throw Error(ve.format("Cannot call method '{0}' of {1} before it is initialized", i, c));
                            if (t = s[i], typeof t !== Me) throw Error(ve.format("Cannot find method '{0}' of {1}", i, c));
                            return a = t.apply(s, r), a !== n ? (o = a, !1) : n
                        })) : this.each(function() {
                            return new t(this, i)
                        }), o
                    }, e.fn[c].widget = t, e.fn[o] = function() {
                        return this.data(c)
                    }
                }
            }), oe = {
                bind: function() {
                    return this
                },
                nullObject: !0,
                options: {}
            }, ae = Z.extend({
                init: function(e, t) {
                    Z.fn.init.call(this, e, t), this.element.autoApplyNS(), this.wrapper = this.element, this.element.addClass("km-widget")
                },
                destroy: function() {
                    Z.fn.destroy.call(this), this.element.kendoDestroy()
                },
                options: {
                    prefix: "Mobile"
                },
                events: [],
                view: function() {
                    var e = this.element.closest(ve.roleSelector("view splitview modalview drawer"));
                    return ve.widgetInstance(e, ve.mobile.ui) || oe
                },
                viewHasNativeScrolling: function() {
                    var e = this.view();
                    return e && e.options.useNativeScrolling
                },
                container: function() {
                    var e = this.element.closest(ve.roleSelector("view layout modalview drawer splitview"));
                    return ve.widgetInstance(e.eq(0), ve.mobile.ui) || oe
                }
            }), _e(ve.mobile, {
                init: function(e) {
                    ve.init(e, ve.mobile.ui, ve.ui, ve.dataviz.ui)
                },
                appLevelNativeScrolling: function() {
                    return ve.mobile.application && ve.mobile.application.options && ve.mobile.application.options.useNativeScrolling
                },
                roles: {},
                ui: {
                    Widget: ae,
                    DataBoundWidget: ee.extend(ae.prototype),
                    roles: {},
                    plugin: function(e) {
                        ve.ui.plugin(e, ve.mobile.ui, "Mobile")
                    }
                }
            }), l(ve.dataviz, {
                init: function(e) {
                    ve.init(e, ve.dataviz.ui)
                },
                ui: {
                    roles: {},
                    themes: {},
                    views: [],
                    plugin: function(e) {
                        ve.ui.plugin(e, ve.dataviz.ui)
                    }
                },
                roles: {}
            }), ve.touchScroller = function(t, n) {
                return n || (n = {}), n.useNative = !0, e(t).map(function(t, i) {
                    return i = e(i), Se.kineticScrollNeeded && ve.mobile.ui.Scroller && !i.data("kendoMobileScroller") ? (i.kendoMobileScroller(n), i.data("kendoMobileScroller")) : !1
                })[0]
            }, ve.preventDefault = function(e) {
                e.preventDefault()
            }, ve.widgetInstance = function(e, n) {
                var i, r, o, a, s = e.data(ve.ns + "role"),
                    l = [];
                if (s) {
                    if ("content" === s && (s = "scroller"), n)
                        if (n[0])
                            for (i = 0, r = n.length; r > i; i++) l.push(n[i].roles[s]);
                        else l.push(n.roles[s]);
                    else l = [ve.ui.roles[s], ve.dataviz.ui.roles[s], ve.mobile.ui.roles[s]];
                    for (s.indexOf(".") >= 0 && (l = [ve.getter(s)(t)]), i = 0, r = l.length; r > i; i++)
                        if (o = l[i], o && (a = e.data("kendo" + o.fn.options.prefix + o.fn.options.name))) return a
                }
            }, ve.onResize = function(n) {
                var i = n;
                return Se.mobileOS.android && (i = function() {
                    setTimeout(n, 600)
                }), e(t).on(Se.resize, i), i
            }, ve.unbindResize = function(n) {
                e(t).off(Se.resize, n)
            }, ve.attrValue = function(e, t) {
                return e.data(ve.ns + t)
            }, ve.days = {
                Sunday: 0,
                Monday: 1,
                Tuesday: 2,
                Wednesday: 3,
                Thursday: 4,
                Friday: 5,
                Saturday: 6
            }, e.extend(e.expr[":"], {
                kendoFocusable: function(t) {
                    var n = e.attr(t, "tabindex");
                    return A(t, !isNaN(n) && n > -1)
                }
            }), se = ["mousedown", "mousemove", "mouseenter", "mouseleave", "mouseover", "mouseout", "mouseup", "click"], le = "label, input, [data-rel=external]", ce = {
                setupMouseMute: function() {
                    var t, n = 0,
                        i = se.length,
                        r = document.documentElement;
                    if (!ce.mouseTrap && Se.eventCapture)
                        for (ce.mouseTrap = !0, ce.bustClick = !1, ce.captureMouse = !1, t = function(t) {
                                ce.captureMouse && ("click" === t.type ? ce.bustClick && !e(t.target).is(le) && (t.preventDefault(), t.stopPropagation()) : t.stopPropagation())
                            }; i > n; n++) r.addEventListener(se[n], t, !0)
                },
                muteMouse: function(e) {
                    ce.captureMouse = !0, e.data.bustClick && (ce.bustClick = !0), clearTimeout(ce.mouseTrapTimeoutID)
                },
                unMuteMouse: function() {
                    clearTimeout(ce.mouseTrapTimeoutID), ce.mouseTrapTimeoutID = setTimeout(function() {
                        ce.captureMouse = !1, ce.bustClick = !1
                    }, 400)
                }
            }, ue = {
                down: "touchstart mousedown",
                move: "mousemove touchmove",
                up: "mouseup touchend touchcancel",
                cancel: "mouseleave touchcancel"
            }, Se.touch && (Se.mobileOS.ios || Se.mobileOS.android) ? ue = {
                down: "touchstart",
                move: "touchmove",
                up: "touchend touchcancel",
                cancel: "touchcancel"
            } : Se.pointers ? ue = {
                down: "pointerdown",
                move: "pointermove",
                up: "pointerup",
                cancel: "pointercancel pointerleave"
            } : Se.msPointers && (ue = {
                down: "MSPointerDown",
                move: "MSPointerMove",
                up: "MSPointerUp",
                cancel: "MSPointerCancel MSPointerLeave"
            }), !Se.msPointers || "onmspointerenter" in t || e.each({
                MSPointerEnter: "MSPointerOver",
                MSPointerLeave: "MSPointerOut"
            }, function(t, n) {
                e.event.special[t] = {
                    delegateType: n,
                    bindType: n,
                    handle: function(t) {
                        var i, r = this,
                            o = t.relatedTarget,
                            a = t.handleObj;
                        return (!o || o !== r && !e.contains(r, o)) && (t.type = a.origType, i = a.handler.apply(this, arguments), t.type = n), i
                    }
                }
            }), de = function(e) {
                return ue[e] || e
            }, he = /([^ ]+)/g, ve.applyEventMap = function(e, t) {
                return e = e.replace(he, de), t && (e = e.replace(he, "$1." + t)), e
            }, fe = e.fn.on, _e(!0, M, e), M.fn = M.prototype = new e, M.fn.constructor = M, M.fn.init = function(t, n) {
                return n && n instanceof e && !(n instanceof M) && (n = M(n)), e.fn.init.call(this, t, n, pe)
            }, M.fn.init.prototype = M.fn, pe = M(document), _e(M.fn, {
                handler: function(e) {
                    return this.data("handler", e), this
                },
                autoApplyNS: function(e) {
                    return this.data("kendoNS", e || ve.guid()), this
                },
                on: function() {
                    var e, t, n, i, r, o, a = this,
                        s = a.data("kendoNS");
                    return 1 === arguments.length ? fe.call(a, arguments[0]) : (e = a, t = Ne.call(arguments), typeof t[t.length - 1] === Be && t.pop(), n = t[t.length - 1], i = ve.applyEventMap(t[0], s), Se.mouseAndTouchPresent && i.search(/mouse|click/) > -1 && this[0] !== document.documentElement && (ce.setupMouseMute(), r = 2 === t.length ? null : t[1], o = i.indexOf("click") > -1 && i.indexOf("touchend") > -1, fe.call(this, {
                        touchstart: ce.muteMouse,
                        touchend: ce.unMuteMouse
                    }, r, {
                        bustClick: o
                    })), typeof n === Fe && (e = a.data("handler"), n = e[n], t[t.length - 1] = function(t) {
                        n.call(e, t)
                    }), t[0] = i, fe.apply(a, t), a)
                },
                kendoDestroy: function(e) {
                    return e = e || this.data("kendoNS"), e && this.off("." + e), this
                }
            }), ve.jQuery = M, ve.eventMap = ue, ve.timezone = function() {
                function e(e, t) {
                    var n, i, r, o = t[3],
                        a = t[4],
                        s = t[5],
                        l = t[8];
                    return l || (t[8] = l = {}), l[e] ? l[e] : (isNaN(a) ? 0 === a.indexOf("last") ? (n = new Date(Date.UTC(e, u[o] + 1, 1, s[0] - 24, s[1], s[2], 0)), i = d[a.substr(4, 3)], r = n.getUTCDay(), n.setUTCDate(n.getUTCDate() + i - r - (i > r ? 7 : 0))) : a.indexOf(">=") >= 0 && (n = new Date(Date.UTC(e, u[o], a.substr(5), s[0], s[1], s[2], 0)), i = d[a.substr(0, 3)], r = n.getUTCDay(), n.setUTCDate(n.getUTCDate() + i - r + (r > i ? 7 : 0))) : n = new Date(Date.UTC(e, u[o], a, s[0], s[1], s[2], 0)), l[e] = n)
                }

                function t(t, n, i) {
                    var r, o, a, s;
                    return (n = n[i]) ? (a = new Date(t).getUTCFullYear(), n = jQuery.grep(n, function(e) {
                        var t = e[0],
                            n = e[1];
                        return a >= t && (n >= a || t == a && "only" == n || "max" == n)
                    }), n.push(t), n.sort(function(t, n) {
                        return "number" != typeof t && (t = +e(a, t)), "number" != typeof n && (n = +e(a, n)), t - n
                    }), s = n[jQuery.inArray(t, n) - 1] || n[n.length - 1], isNaN(s) ? s : null) : (r = i.split(":"), o = 0, r.length > 1 && (o = 60 * r[0] + +r[1]), [-1e6, "max", "-", "Jan", 1, [0, 0, 0], o, "-"])
                }

                function n(e, t, n) {
                    var i, r, o, a = t[n];
                    if ("string" == typeof a && (a = t[a]), !a) throw Error('Timezone "' + n + '" is either incorrect, or kendo.timezones.min.js is not included.');
                    for (i = a.length - 1; i >= 0 && (r = a[i][3], !(r && e > r)); i--);
                    if (o = a[i + 1], !o) throw Error('Timezone "' + n + '" not found on ' + e + ".");
                    return o
                }

                function i(e, i, r, o) {
                    typeof e != Ie && (e = Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
                    var a = n(e, i, o);
                    return {
                        zone: a,
                        rule: t(e, r, a[1])
                    }
                }

                function r(e, t) {
                    var n, r, o;
                    return "Etc/UTC" == t || "Etc/GMT" == t ? 0 : (n = i(e, this.zones, this.rules, t), r = n.zone, o = n.rule, ve.parseFloat(o ? r[0] - o[6] : r[0]))
                }

                function o(e, t) {
                    var n = i(e, this.zones, this.rules, t),
                        r = n.zone,
                        o = n.rule,
                        a = r[2];
                    return a.indexOf("/") >= 0 ? a.split("/")[o && +o[6] ? 1 : 0] : a.indexOf("%s") >= 0 ? a.replace("%s", o && "-" != o[7] ? o[7] : "") : a
                }

                function a(e, t, n) {
                    var i, r;
                    return typeof t == Fe && (t = this.offset(e, t)), typeof n == Fe && (n = this.offset(e, n)), i = e.getTimezoneOffset(), e = new Date(e.getTime() + 6e4 * (t - n)), r = e.getTimezoneOffset(), new Date(e.getTime() + 6e4 * (r - i))
                }

                function s(e, t) {
                    return this.convert(e, e.getTimezoneOffset(), t)
                }

                function l(e, t) {
                    return this.convert(e, t, e.getTimezoneOffset())
                }

                function c(e) {
                    return this.apply(new Date(e), "Etc/UTC")
                }
                var u = {
                        Jan: 0,
                        Feb: 1,
                        Mar: 2,
                        Apr: 3,
                        May: 4,
                        Jun: 5,
                        Jul: 6,
                        Aug: 7,
                        Sep: 8,
                        Oct: 9,
                        Nov: 10,
                        Dec: 11
                    },
                    d = {
                        Sun: 0,
                        Mon: 1,
                        Tue: 2,
                        Wed: 3,
                        Thu: 4,
                        Fri: 5,
                        Sat: 6
                    };
                return {
                    zones: {},
                    rules: {},
                    offset: r,
                    convert: a,
                    apply: s,
                    remove: l,
                    abbr: o,
                    toLocalDate: c
                }
            }(), ve.date = function() {
                function e(e, t) {
                    return 0 === t && 23 === e.getHours() ? (e.setHours(e.getHours() + 2), !0) : !1
                }

                function t(t, n, i) {
                    var r = t.getHours();
                    i = i || 1, n = (n - t.getDay() + 7 * i) % 7, t.setDate(t.getDate() + n), e(t, r)
                }

                function n(e, n, i) {
                    return e = new Date(e), t(e, n, i), e
                }

                function i(e) {
                    return new Date(e.getFullYear(), e.getMonth(), 1)
                }

                function r(e) {
                    var t = new Date(e.getFullYear(), e.getMonth() + 1, 0),
                        n = i(e),
                        r = Math.abs(t.getTimezoneOffset() - n.getTimezoneOffset());
                    return r && t.setHours(n.getHours() + r / 60), t
                }

                function o(t) {
                    return t = new Date(t.getFullYear(), t.getMonth(), t.getDate(), 0, 0, 0), e(t, 0), t
                }

                function a(e) {
                    return Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds())
                }

                function s(e) {
                    return e.getTime() - o(e)
                }

                function l(e, t, n) {
                    var i, r = s(t),
                        o = s(n);
                    return e && r != o ? (t >= n && (n += m), i = s(e), r > i && (i += m), r > o && (o += m), i >= r && o >= i) : !0
                }

                function c(e, t, n) {
                    var i, r = t.getTime(),
                        o = n.getTime();
                    return r >= o && (o += m), i = e.getTime(), i >= r && o >= i
                }

                function u(t, n) {
                    var i = t.getHours();
                    return t = new Date(t), d(t, n * m), e(t, i), t
                }

                function d(e, t, n) {
                    var i, r = e.getTimezoneOffset();
                    e.setTime(e.getTime() + t), n || (i = e.getTimezoneOffset() - r, e.setTime(e.getTime() + i * g))
                }

                function h() {
                    return o(new Date)
                }

                function f(e) {
                    return o(e).getTime() == h().getTime()
                }

                function p(e) {
                    var t = new Date(1980, 1, 1, 0, 0, 0);
                    return e && t.setHours(e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()), t
                }
                var g = 6e4,
                    m = 864e5;
                return {
                    adjustDST: e,
                    dayOfWeek: n,
                    setDayOfWeek: t,
                    getDate: o,
                    isInDateRange: c,
                    isInTimeRange: l,
                    isToday: f,
                    nextDay: function(e) {
                        return u(e, 1)
                    },
                    previousDay: function(e) {
                        return u(e, -1)
                    },
                    toUtcTime: a,
                    MS_PER_DAY: m,
                    MS_PER_HOUR: 60 * g,
                    MS_PER_MINUTE: g,
                    setTime: d,
                    addDays: u,
                    today: h,
                    toInvariantTime: p,
                    firstDayOfMonth: i,
                    lastDayOfMonth: r,
                    getMilliseconds: s
                }
            }(), ve.stripWhitespace = function(e) {
                var t, n, i;
                if (document.createNodeIterator)
                    for (t = document.createNodeIterator(e, NodeFilter.SHOW_TEXT, function(t) {
                            return t.parentNode == e ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
                        }, !1); t.nextNode();) t.referenceNode && !t.referenceNode.textContent.trim() && t.referenceNode.parentNode.removeChild(t.referenceNode);
                else
                    for (n = 0; e.childNodes.length > n; n++) i = e.childNodes[n], 3 != i.nodeType || /\S/.test(i.nodeValue) || (e.removeChild(i), n--), 1 == i.nodeType && ve.stripWhitespace(i)
            }, ge = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function(e) {
                setTimeout(e, 1e3 / 60)
            }, ve.animationFrame = function(e) {
                ge.call(t, e)
            }, me = [], ve.queueAnimation = function(e) {
                me[me.length] = e, 1 === me.length && ve.runNextAnimation()
            }, ve.runNextAnimation = function() {
                ve.animationFrame(function() {
                    me[0] && (me.shift()(), me[0] && ve.runNextAnimation())
                })
            }, ve.parseQueryStringParams = function(e) {
                for (var t = e.split("?")[1] || "", n = {}, i = t.split(/&|=/), r = i.length, o = 0; r > o; o += 2) "" !== i[o] && (n[decodeURIComponent(i[o])] = decodeURIComponent(i[o + 1]));
                return n
            }, ve.elementUnderCursor = function(e) {
                return n !== e.x.client ? document.elementFromPoint(e.x.client, e.y.client) : n
            }, ve.wheelDeltaY = function(e) {
                var t, i = e.originalEvent,
                    r = i.wheelDeltaY;
                return i.wheelDelta ? (r === n || r) && (t = i.wheelDelta) : i.detail && i.axis === i.VERTICAL_AXIS && (t = 10 * -i.detail), t
            }, ve.throttle = function(e, t) {
                var i, r, o = 0;
                return !t || 0 >= t ? e : (r = function() {
                    function r() {
                        e.apply(a, l), o = +new Date
                    }
                    var a = this,
                        s = +new Date - o,
                        l = arguments;
                    return o ? (i && clearTimeout(i), s > t ? r() : i = setTimeout(r, t - s), n) : r()
                }, r.cancel = function() {
                    clearTimeout(i)
                }, r)
            }, ve.caret = function(t, i, r) {
                var o, a, s, l, c = i !== n;
                if (r === n && (r = i), t[0] && (t = t[0]), !c || !t.disabled) {
                    try {
                        t.selectionStart !== n ? c ? (t.focus(), t.setSelectionRange(i, r)) : i = [t.selectionStart, t.selectionEnd] : document.selection && (e(t).is(":visible") && t.focus(), o = t.createTextRange(), c ? (o.collapse(!0), o.moveStart("character", i), o.moveEnd("character", r - i), o.select()) : (a = o.duplicate(), o.moveToBookmark(document.selection.createRange().getBookmark()), a.setEndPoint("EndToStart", o), s = a.text.length, l = s + o.text.length, i = [s, l]))
                    } catch (u) {
                        i = []
                    }
                    return i
                }
            }, ve.compileMobileDirective = function(e, n) {
                var i = t.angular;
                return e.attr("data-" + ve.ns + "role", e[0].tagName.toLowerCase().replace("kendo-mobile-", "").replace("-", "")), i.element(e).injector().invoke(["$compile", function(t) {
                    t(e)(n), /^\$(digest|apply)$/.test(n.$$phase) || n.$digest()
                }]), ve.widgetInstance(e, ve.mobile.ui)
            }, ve.antiForgeryTokens = function() {
                var t = {},
                    i = e("meta[name=csrf-token],meta[name=_csrf]").attr("content"),
                    r = e("meta[name=csrf-param],meta[name=_csrf_header]").attr("content");
                return e("input[name^='__RequestVerificationToken']").each(function() {
                    t[this.name] = this.value
                }), r !== n && i !== n && (t[r] = i), t
            }, ve.cycleForm = function(e) {
                function t(e) {
                    var t = ve.widgetInstance(e);
                    t && t.focus ? t.focus() : e.focus()
                }
                var n = e.find("input, .k-widget").first(),
                    i = e.find("button, .k-button").last();
                i.on("keydown", function(e) {
                    e.keyCode != ve.keys.TAB || e.shiftKey || (e.preventDefault(), t(n))
                }), n.on("keydown", function(e) {
                    e.keyCode == ve.keys.TAB && e.shiftKey && (e.preventDefault(), t(i))
                })
            },
            function() {
                function n(t, n, i, r) {
                    var o, a, s = e("<form>").attr({
                            action: i,
                            method: "POST",
                            target: r
                        }),
                        l = ve.antiForgeryTokens();
                    l.fileName = n, o = t.split(";base64,"), l.contentType = o[0].replace("data:", ""), l.base64 = o[1];
                    for (a in l) l.hasOwnProperty(a) && e("<input>").attr({
                        value: l[a],
                        name: a,
                        type: "hidden"
                    }).appendTo(s);
                    s.appendTo("body").submit().remove()
                }

                function i(e, t) {
                    var n, i, r, o, a, s = e;
                    if ("string" == typeof e) {
                        for (n = e.split(";base64,"), i = n[0], r = atob(n[1]), o = new Uint8Array(r.length), a = 0; r.length > a; a++) o[a] = r.charCodeAt(a);
                        s = new Blob([o.buffer], {
                            type: i
                        })
                    }
                    navigator.msSaveBlob(s, t)
                }

                function r(e, n) {
                    t.Blob && e instanceof Blob && (e = URL.createObjectURL(e)), o.download = n, o.href = e;
                    var i = document.createEvent("MouseEvents");
                    i.initMouseEvent("click", !0, !1, t, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), o.dispatchEvent(i)
                }
                var o = document.createElement("a"),
                    a = "download" in o;
                ve.saveAs = function(e) {
                    var t = n;
                    e.forceProxy || (a ? t = r : navigator.msSaveBlob && (t = i)), t(e.dataURI, e.fileName, e.proxyURL, e.proxyTarget)
                }
            }()
    }(jQuery, window), window.kendo
})();;
(function() {
    return function(e, t) {
        function n(e, t, n, i) {
            var r, o = e.getFullYear(),
                a = t.getFullYear(),
                s = n.getFullYear();
            return o -= o % i, r = o + (i - 1), a > o && (o = a), r > s && (r = s), o + "-" + r
        }

        function i(e) {
            for (var t, n = 0, i = e.min, r = e.max, o = e.start, a = e.setter, l = e.build, c = e.cells || 12, u = e.perRow || 4, d = e.content || R, h = e.empty || I, f = e.html || '<table tabindex="0" role="grid" class="k-content k-meta-view" cellspacing="0"><tbody><tr role="row">'; c > n; n++) n > 0 && n % u === 0 && (f += '</tr><tr role="row">'), o = new pe(o.getFullYear(), o.getMonth(), o.getDate(), 0, 0, 0), S(o, 0), t = l(o, n), f += s(o, i, r) ? d(t) : h(t), a(o, 1);
            return f + "</tr></tbody></table>"
        }

        function r(e, t, n) {
            var i = e.getFullYear(),
                r = t.getFullYear(),
                o = r,
                a = 0;
            return n && (r -= r % n, o = r - r % n + n - 1), i > o ? a = 1 : r > i && (a = -1), a
        }

        function o() {
            var e = new pe;
            return new pe(e.getFullYear(), e.getMonth(), e.getDate())
        }

        function a(e, t, n) {
            var i = o();
            return e && (i = new pe(+e)), t > i ? i = new pe(+t) : i > n && (i = new pe(+n)), i
        }

        function s(e, t, n) {
            return +e >= +t && +n >= +e
        }

        function l(e, t) {
            return e.slice(t).concat(e.slice(0, t))
        }

        function c(e, t, n) {
            t = t instanceof pe ? t.getFullYear() : e.getFullYear() + n * t, e.setFullYear(t)
        }

        function u(t) {
            e(this).toggleClass($, ie.indexOf(t.type) > -1 || t.type == te)
        }

        function d(e) {
            e.preventDefault()
        }

        function h(e) {
            return A(e).calendars.standard
        }

        function f(e) {
            var n = ge[e.start],
                i = ge[e.depth],
                r = A(e.culture);
            e.format = T(e.format || r.calendars.standard.patterns.d), isNaN(n) && (n = 0, e.start = U), (i === t || i > n) && (e.depth = U), e.dates || (e.dates = [])
        }

        function p(e) {
            P && e.find("*").attr("unselectable", "on")
        }

        function g(e, t) {
            for (var n = 0, i = t.length; i > n; n++)
                if (e === +t[n]) return !0;
            return !1
        }

        function m(e, t) {
            return e ? e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate() : !1
        }

        function v(e, t) {
            return e ? e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() : !1
        }
        var _, b = window.kendo,
            w = b.support,
            y = b.ui,
            k = y.Widget,
            x = b.keys,
            C = b.parseDate,
            S = b.date.adjustDST,
            T = b._extractFormat,
            D = b.template,
            A = b.getCulture,
            E = b.support.transitions,
            M = E ? E.css + "transform-origin" : "",
            R = D('<td#=data.cssClass# role="gridcell"><a tabindex="-1" class="k-link" href="\\#" data-#=data.ns#value="#=data.dateString#">#=data.value#</a></td>', {
                useWithBlock: !1
            }),
            I = D('<td role="gridcell">&nbsp;</td>', {
                useWithBlock: !1
            }),
            F = b.support.browser,
            P = F.msie && 9 > F.version,
            z = ".kendoCalendar",
            B = "click" + z,
            L = "keydown" + z,
            H = "id",
            N = "min",
            O = "left",
            V = "slideIn",
            U = "month",
            W = "century",
            j = "change",
            q = "navigate",
            G = "value",
            $ = "k-state-hover",
            Y = "k-state-disabled",
            K = "k-state-focused",
            Q = "k-other-month",
            X = ' class="' + Q + '"',
            J = "k-nav-today",
            Z = "td:has(.k-link)",
            ee = "blur" + z,
            te = "focus",
            ne = te + z,
            ie = w.touch ? "touchstart" : "mouseenter",
            re = w.touch ? "touchstart" + z : "mouseenter" + z,
            oe = w.touch ? "touchend" + z + " touchmove" + z : "mouseleave" + z,
            ae = 6e4,
            se = 864e5,
            le = "_prevArrow",
            ce = "_nextArrow",
            ue = "aria-disabled",
            de = "aria-selected",
            he = e.proxy,
            fe = e.extend,
            pe = Date,
            ge = {
                month: 0,
                year: 1,
                decade: 2,
                century: 3
            },
            me = k.extend({
                init: function(t, n) {
                    var i, r, o = this;
                    k.fn.init.call(o, t, n), t = o.wrapper = o.element, n = o.options, n.url = window.unescape(n.url), o._templates(), o._header(), o._footer(o.footer), r = t.addClass("k-widget k-calendar").on(re + " " + oe, Z, u).on(L, "table.k-content", he(o._move, o)).on(B, Z, function(t) {
                        var n = t.currentTarget.firstChild; - 1 != n.href.indexOf("#") && t.preventDefault(), o._click(e(n))
                    }).on("mouseup" + z, "table.k-content, .k-footer", function() {
                        o._focusView(o.options.focusOnNav !== !1)
                    }).attr(H), r && (o._cellID = r + "_cell_selected"), f(n), i = C(n.value, n.format, n.culture), o._index = ge[n.start], o._current = new pe(+a(i, n.min, n.max)), o._addClassProxy = function() {
                        o._active = !0, o._cell.addClass(K)
                    }, o._removeClassProxy = function() {
                        o._active = !1, o._cell.removeClass(K)
                    }, o.value(i), b.notify(o)
                },
                options: {
                    name: "Calendar",
                    value: null,
                    min: new pe(1900, 0, 1),
                    max: new pe(2099, 11, 31),
                    dates: [],
                    url: "",
                    culture: "",
                    footer: "",
                    format: "",
                    month: {},
                    start: U,
                    depth: U,
                    animation: {
                        horizontal: {
                            effects: V,
                            reverse: !0,
                            duration: 500,
                            divisor: 2
                        },
                        vertical: {
                            effects: "zoomIn",
                            duration: 400
                        }
                    }
                },
                events: [j, q],
                setOptions: function(e) {
                    var t = this;
                    f(e), e.dates[0] || (e.dates = t.options.dates), k.fn.setOptions.call(t, e), t._templates(), t._footer(t.footer), t._index = ge[t.options.start], t.navigate()
                },
                destroy: function() {
                    var e = this,
                        t = e._today;
                    e.element.off(z), e._title.off(z), e[le].off(z), e[ce].off(z), b.destroy(e._table), t && b.destroy(t.off(z)), k.fn.destroy.call(e)
                },
                current: function() {
                    return this._current
                },
                view: function() {
                    return this._view
                },
                focus: function(e) {
                    e = e || this._table, this._bindTable(e), e.focus()
                },
                min: function(e) {
                    return this._option(N, e)
                },
                max: function(e) {
                    return this._option("max", e)
                },
                navigateToPast: function() {
                    this._navigate(le, -1)
                },
                navigateToFuture: function() {
                    this._navigate(ce, 1)
                },
                navigateUp: function() {
                    var e = this,
                        t = e._index;
                    e._title.hasClass(Y) || e.navigate(e._current, ++t)
                },
                navigateDown: function(e) {
                    var n = this,
                        i = n._index,
                        r = n.options.depth;
                    if (e) return i === ge[r] ? (+n._value != +e && (n.value(e), n.trigger(j)), t) : (n.navigate(e, --i), t)
                },
                navigate: function(n, i) {
                    i = isNaN(i) ? ge[i] : i;
                    var r, o, s, l, c = this,
                        u = c.options,
                        d = u.culture,
                        h = u.min,
                        f = u.max,
                        g = c._title,
                        m = c._table,
                        v = c._oldTable,
                        b = c._value,
                        w = c._current,
                        y = n && +n > +w,
                        k = i !== t && i !== c._index;
                    n || (n = w), c._current = n = new pe(+a(n, h, f)), i === t ? i = c._index : c._index = i, c._view = o = _.views[i], s = o.compare, l = i === ge[W], g.toggleClass(Y, l).attr(ue, l), l = s(n, h) < 1, c[le].toggleClass(Y, l).attr(ue, l), l = s(n, f) > -1, c[ce].toggleClass(Y, l).attr(ue, l), m && v && v.data("animating") && (v.kendoStop(!0, !0), m.kendoStop(!0, !0)), c._oldTable = m, (!m || c._changeView) && (g.html(o.title(n, h, f, d)), c._table = r = e(o.content(fe({
                        min: h,
                        max: f,
                        date: n,
                        url: u.url,
                        dates: u.dates,
                        format: u.format,
                        culture: d
                    }, c[o.name]))), p(r), c._animate({
                        from: m,
                        to: r,
                        vertical: k,
                        future: y
                    }), c._focus(n), c.trigger(q)), i === ge[u.depth] && b && c._class("k-state-selected", o.toDateString(b)), c._class(K, o.toDateString(n)), !m && c._cell && c._cell.removeClass(K), c._changeView = !0
                },
                value: function(e) {
                    var n = this,
                        i = n._view,
                        r = n.options,
                        o = n._view,
                        a = r.min,
                        l = r.max;
                    return e === t ? n._value : (e = C(e, r.format, r.culture), null !== e && (e = new pe(+e), s(e, a, l) || (e = null)), n._value = e, o && null === e && n._cell ? n._cell.removeClass("k-state-selected") : (n._changeView = !e || i && 0 !== i.compare(e, n._current), n.navigate(e)), t)
                },
                _move: function(t) {
                    var n, i, r, o, s = this,
                        l = s.options,
                        c = t.keyCode,
                        u = s._view,
                        d = s._index,
                        h = new pe(+s._current),
                        f = b.support.isRtl(s.wrapper);
                    return t.target === s._table[0] && (s._active = !0), t.ctrlKey ? c == x.RIGHT && !f || c == x.LEFT && f ? (s.navigateToFuture(), i = !0) : c == x.LEFT && !f || c == x.RIGHT && f ? (s.navigateToPast(), i = !0) : c == x.UP ? (s.navigateUp(), i = !0) : c == x.DOWN && (s._click(e(s._cell[0].firstChild)), i = !0) : (c == x.RIGHT && !f || c == x.LEFT && f ? (n = 1, i = !0) : c == x.LEFT && !f || c == x.RIGHT && f ? (n = -1, i = !0) : c == x.UP ? (n = 0 === d ? -7 : -4, i = !0) : c == x.DOWN ? (n = 0 === d ? 7 : 4, i = !0) : c == x.ENTER ? (s._click(e(s._cell[0].firstChild)), i = !0) : c == x.HOME || c == x.END ? (r = c == x.HOME ? "first" : "last", o = u[r](h), h = new pe(o.getFullYear(), o.getMonth(), o.getDate(), h.getHours(), h.getMinutes(), h.getSeconds(), h.getMilliseconds()), i = !0) : c == x.PAGEUP ? (i = !0, s.navigateToPast()) : c == x.PAGEDOWN && (i = !0, s.navigateToFuture()), (n || r) && (r || u.setDate(h, n), s._focus(a(h, l.min, l.max)))), i && t.preventDefault(), s._current
                },
                _animate: function(e) {
                    var t = this,
                        n = e.from,
                        i = e.to,
                        r = t._active;
                    n ? n.parent().data("animating") ? (n.off(z), n.parent().kendoStop(!0, !0).remove(), n.remove(), i.insertAfter(t.element[0].firstChild), t._focusView(r)) : n.is(":visible") && t.options.animation !== !1 ? t[e.vertical ? "_vertical" : "_horizontal"](n, i, e.future) : (i.insertAfter(n), n.off(z).remove(), t._focusView(r)) : (i.insertAfter(t.element[0].firstChild), t._bindTable(i))
                },
                _horizontal: function(e, t, n) {
                    var i = this,
                        r = i._active,
                        o = i.options.animation.horizontal,
                        a = o.effects,
                        s = e.outerWidth();
                    a && -1 != a.indexOf(V) && (e.add(t).css({
                        width: s
                    }), e.wrap("<div/>"), i._focusView(r, e), e.parent().css({
                        position: "relative",
                        width: 2 * s,
                        "float": O,
                        "margin-left": n ? 0 : -s
                    }), t[n ? "insertAfter" : "insertBefore"](e), fe(o, {
                        effects: V + ":" + (n ? "right" : O),
                        complete: function() {
                            e.off(z).remove(), i._oldTable = null, t.unwrap(), i._focusView(r)
                        }
                    }), e.parent().kendoStop(!0, !0).kendoAnimate(o))
                },
                _vertical: function(e, t) {
                    var n, i, r = this,
                        o = r.options.animation.vertical,
                        a = o.effects,
                        s = r._active;
                    a && -1 != a.indexOf("zoom") && (t.css({
                        position: "absolute",
                        top: e.prev().outerHeight(),
                        left: 0
                    }).insertBefore(e), M && (n = r._cellByDate(r._view.toDateString(r._current)), i = n.position(), i = i.left + parseInt(n.width() / 2, 10) + "px " + (i.top + parseInt(n.height() / 2, 10) + "px"), t.css(M, i)), e.kendoStop(!0, !0).kendoAnimate({
                        effects: "fadeOut",
                        duration: 600,
                        complete: function() {
                            e.off(z).remove(), r._oldTable = null, t.css({
                                position: "static",
                                top: 0,
                                left: 0
                            }), r._focusView(s)
                        }
                    }), t.kendoStop(!0, !0).kendoAnimate(o))
                },
                _cellByDate: function(t) {
                    return this._table.find("td:not(." + Q + ")").filter(function() {
                        return e(this.firstChild).attr(b.attr(G)) === t
                    })
                },
                _class: function(t, n) {
                    var i = this,
                        r = i._cellID,
                        o = i._cell;
                    o && o.removeAttr(de).removeAttr("aria-label").removeAttr(H), o = i._table.find("td:not(." + Q + ")").removeClass(t).filter(function() {
                        return e(this.firstChild).attr(b.attr(G)) === n
                    }).attr(de, !0), t !== K || i._active || i.options.focusOnNav === !1 || (t = ""), o.addClass(t), o[0] && (i._cell = o), r && (o.attr(H, r), i._table.removeAttr("aria-activedescendant").attr("aria-activedescendant", r))
                },
                _bindTable: function(e) {
                    e.on(ne, this._addClassProxy).on(ee, this._removeClassProxy)
                },
                _click: function(e) {
                    var t = this,
                        n = t.options,
                        i = new Date(+t._current),
                        r = e.attr(b.attr(G)).split("/");
                    r = new pe(r[0], r[1], r[2]), S(r, 0), t._view.setDate(i, r), t.navigateDown(a(i, n.min, n.max))
                },
                _focus: function(e) {
                    var t = this,
                        n = t._view;
                    0 !== n.compare(e, t._current) ? t.navigate(e) : (t._current = e, t._class(K, n.toDateString(e)))
                },
                _focusView: function(e, t) {
                    e && this.focus(t)
                },
                _footer: function(n) {
                    var i = this,
                        r = o(),
                        a = i.element,
                        s = a.find(".k-footer");
                    return n ? (s[0] || (s = e('<div class="k-footer"><a href="#" class="k-link k-nav-today"></a></div>').appendTo(a)), i._today = s.show().find(".k-link").html(n(r)).attr("title", b.toString(r, "D", i.options.culture)), i._toggle(), t) : (i._toggle(!1), s.hide(), t)
                },
                _header: function() {
                    var e, t = this,
                        n = t.element;
                    n.find(".k-header")[0] || n.html('<div class="k-header"><a href="#" role="button" class="k-link k-nav-prev"><span class="k-icon k-i-arrow-w"></span></a><a href="#" role="button" aria-live="assertive" aria-atomic="true" class="k-link k-nav-fast"></a><a href="#" role="button" class="k-link k-nav-next"><span class="k-icon k-i-arrow-e"></span></a></div>'), e = n.find(".k-link").on(re + " " + oe + " " + ne + " " + ee, u).click(!1), t._title = e.eq(1).on(B, function() {
                        t._active = t.options.focusOnNav !== !1, t.navigateUp()
                    }), t[le] = e.eq(0).on(B, function() {
                        t._active = t.options.focusOnNav !== !1, t.navigateToPast()
                    }), t[ce] = e.eq(2).on(B, function() {
                        t._active = t.options.focusOnNav !== !1, t.navigateToFuture()
                    })
                },
                _navigate: function(e, t) {
                    var n = this,
                        i = n._index + 1,
                        r = new pe(+n._current);
                    e = n[e], e.hasClass(Y) || (i > 3 ? r.setFullYear(r.getFullYear() + 100 * t) : _.views[i].setDate(r, t), n.navigate(r))
                },
                _option: function(e, n) {
                    var i, r = this,
                        o = r.options,
                        a = r._value || r._current;
                    return n === t ? o[e] : (n = C(n, o.format, o.culture), n && (o[e] = new pe(+n), i = e === N ? n > a : a > n, (i || v(a, n)) && (i && (r._value = null), r._changeView = !0), r._changeView || (r._changeView = !(!o.month.content && !o.month.empty)), r.navigate(r._value), r._toggle()), t)
                },
                _toggle: function(e) {
                    var n = this,
                        i = n.options,
                        r = n._today;
                    e === t && (e = s(o(), i.min, i.max)), r && (r.off(B), e ? r.addClass(J).removeClass(Y).on(B, he(n._todayClick, n)) : r.removeClass(J).addClass(Y).on(B, d))
                },
                _todayClick: function(e) {
                    var t = this,
                        n = ge[t.options.depth],
                        i = o();
                    e.preventDefault(), 0 === t._view.compare(t._current, i) && t._index == n && (t._changeView = !1), t._value = i, t.navigate(i, n), t.trigger(j)
                },
                _templates: function() {
                    var e = this,
                        t = e.options,
                        n = t.footer,
                        i = t.month,
                        r = i.content,
                        o = i.empty;
                    e.month = {
                        content: D('<td#=data.cssClass# role="gridcell"><a tabindex="-1" class="k-link#=data.linkClass#" href="#=data.url#" ' + b.attr("value") + '="#=data.dateString#" title="#=data.title#">' + (r || "#=data.value#") + "</a></td>", {
                            useWithBlock: !!r
                        }),
                        empty: D('<td role="gridcell">' + (o || "&nbsp;") + "</td>", {
                            useWithBlock: !!o
                        })
                    }, e.footer = n !== !1 ? D(n || '#= kendo.toString(data,"D","' + t.culture + '") #', {
                        useWithBlock: !1
                    }) : null
                }
            });
        y.plugin(me), _ = {
            firstDayOfMonth: function(e) {
                return new pe(e.getFullYear(), e.getMonth(), 1)
            },
            firstVisibleDay: function(e, t) {
                t = t || b.culture().calendar;
                for (var n = t.firstDay, i = new pe(e.getFullYear(), e.getMonth(), 0, e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()); i.getDay() != n;) _.setTime(i, -1 * se);
                return i
            },
            setTime: function(e, t) {
                var n = e.getTimezoneOffset(),
                    i = new pe(e.getTime() + t),
                    r = i.getTimezoneOffset() - n;
                e.setTime(i.getTime() + r * ae)
            },
            views: [{
                name: U,
                title: function(e, t, n, i) {
                    return h(i).months.names[e.getMonth()] + " " + e.getFullYear()
                },
                content: function(e) {
                    for (var t = this, n = 0, r = e.min, o = e.max, a = e.date, s = e.dates, c = e.format, u = e.culture, d = e.url, f = d && s[0], p = h(u), m = p.firstDay, v = p.days, w = l(v.names, m), y = l(v.namesShort, m), k = _.firstVisibleDay(a, p), x = t.first(a), C = t.last(a), T = t.toDateString, D = new pe, A = '<table tabindex="0" role="grid" class="k-content" cellspacing="0"><thead><tr role="row">'; 7 > n; n++) A += '<th scope="col" title="' + w[n] + '">' + y[n] + "</th>";
                    return D = new pe(D.getFullYear(), D.getMonth(), D.getDate()), S(D, 0), D = +D, i({
                        cells: 42,
                        perRow: 7,
                        html: A += '</tr></thead><tbody><tr role="row">',
                        start: k,
                        min: new pe(r.getFullYear(), r.getMonth(), r.getDate()),
                        max: new pe(o.getFullYear(), o.getMonth(), o.getDate()),
                        content: e.content,
                        empty: e.empty,
                        setter: t.setDate,
                        build: function(e) {
                            var t = [],
                                n = e.getDay(),
                                i = "",
                                r = "#";
                            return (x > e || e > C) && t.push(Q), +e === D && t.push("k-today"), (0 === n || 6 === n) && t.push("k-weekend"), f && g(+e, s) && (r = d.replace("{0}", b.toString(e, c, u)), i = " k-action-link"), {
                                date: e,
                                dates: s,
                                ns: b.ns,
                                title: b.toString(e, "D", u),
                                value: e.getDate(),
                                dateString: T(e),
                                cssClass: t[0] ? ' class="' + t.join(" ") + '"' : "",
                                linkClass: i,
                                url: r
                            }
                        }
                    })
                },
                first: function(e) {
                    return _.firstDayOfMonth(e)
                },
                last: function(e) {
                    var t = new pe(e.getFullYear(), e.getMonth() + 1, 0),
                        n = _.firstDayOfMonth(e),
                        i = Math.abs(t.getTimezoneOffset() - n.getTimezoneOffset());
                    return i && t.setHours(n.getHours() + i / 60), t
                },
                compare: function(e, t) {
                    var n, i = e.getMonth(),
                        r = e.getFullYear(),
                        o = t.getMonth(),
                        a = t.getFullYear();
                    return n = r > a ? 1 : a > r ? -1 : i == o ? 0 : i > o ? 1 : -1
                },
                setDate: function(e, t) {
                    var n = e.getHours();
                    t instanceof pe ? e.setFullYear(t.getFullYear(), t.getMonth(), t.getDate()) : _.setTime(e, t * se), S(e, n)
                },
                toDateString: function(e) {
                    return e.getFullYear() + "/" + e.getMonth() + "/" + e.getDate()
                }
            }, {
                name: "year",
                title: function(e) {
                    return e.getFullYear()
                },
                content: function(e) {
                    var t = h(e.culture).months.namesAbbr,
                        n = this.toDateString,
                        r = e.min,
                        o = e.max;
                    return i({
                        min: new pe(r.getFullYear(), r.getMonth(), 1),
                        max: new pe(o.getFullYear(), o.getMonth(), 1),
                        start: new pe(e.date.getFullYear(), 0, 1),
                        setter: this.setDate,
                        build: function(e) {
                            return {
                                value: t[e.getMonth()],
                                ns: b.ns,
                                dateString: n(e),
                                cssClass: ""
                            }
                        }
                    })
                },
                first: function(e) {
                    return new pe(e.getFullYear(), 0, e.getDate())
                },
                last: function(e) {
                    return new pe(e.getFullYear(), 11, e.getDate())
                },
                compare: function(e, t) {
                    return r(e, t)
                },
                setDate: function(e, t) {
                    var n, i = e.getHours();
                    t instanceof pe ? (n = t.getMonth(), e.setFullYear(t.getFullYear(), n, e.getDate()), n !== e.getMonth() && e.setDate(0)) : (n = e.getMonth() + t, e.setMonth(n), n > 11 && (n -= 12), n > 0 && e.getMonth() != n && e.setDate(0)), S(e, i)
                },
                toDateString: function(e) {
                    return e.getFullYear() + "/" + e.getMonth() + "/1"
                }
            }, {
                name: "decade",
                title: function(e, t, i) {
                    return n(e, t, i, 10)
                },
                content: function(e) {
                    var t = e.date.getFullYear(),
                        n = this.toDateString;
                    return i({
                        start: new pe(t - t % 10 - 1, 0, 1),
                        min: new pe(e.min.getFullYear(), 0, 1),
                        max: new pe(e.max.getFullYear(), 0, 1),
                        setter: this.setDate,
                        build: function(e, t) {
                            return {
                                value: e.getFullYear(),
                                ns: b.ns,
                                dateString: n(e),
                                cssClass: 0 === t || 11 == t ? X : ""
                            }
                        }
                    })
                },
                first: function(e) {
                    var t = e.getFullYear();
                    return new pe(t - t % 10, e.getMonth(), e.getDate())
                },
                last: function(e) {
                    var t = e.getFullYear();
                    return new pe(t - t % 10 + 9, e.getMonth(), e.getDate())
                },
                compare: function(e, t) {
                    return r(e, t, 10)
                },
                setDate: function(e, t) {
                    c(e, t, 1)
                },
                toDateString: function(e) {
                    return e.getFullYear() + "/0/1"
                }
            }, {
                name: W,
                title: function(e, t, i) {
                    return n(e, t, i, 100)
                },
                content: function(e) {
                    var t = e.date.getFullYear(),
                        n = e.min.getFullYear(),
                        r = e.max.getFullYear(),
                        o = this.toDateString,
                        a = n,
                        s = r;
                    return a -= a % 10, s -= s % 10, 10 > s - a && (s = a + 9), i({
                        start: new pe(t - t % 100 - 10, 0, 1),
                        min: new pe(a, 0, 1),
                        max: new pe(s, 0, 1),
                        setter: this.setDate,
                        build: function(e, t) {
                            var i = e.getFullYear(),
                                a = i + 9;
                            return n > i && (i = n), a > r && (a = r), {
                                ns: b.ns,
                                value: i + " - " + a,
                                dateString: o(e),
                                cssClass: 0 === t || 11 == t ? X : ""
                            }
                        }
                    })
                },
                first: function(e) {
                    var t = e.getFullYear();
                    return new pe(t - t % 100, e.getMonth(), e.getDate())
                },
                last: function(e) {
                    var t = e.getFullYear();
                    return new pe(t - t % 100 + 99, e.getMonth(), e.getDate())
                },
                compare: function(e, t) {
                    return r(e, t, 100)
                },
                setDate: function(e, t) {
                    c(e, t, 10)
                },
                toDateString: function(e) {
                    var t = e.getFullYear();
                    return t - t % 10 + "/0/1"
                }
            }]
        }, _.isEqualDatePart = m, _.makeUnselectable = p, _.restrictValue = a, _.isInRange = s, _.normalize = f, _.viewsEnum = ge, b.calendar = _
    }(window.kendo.jQuery), window.kendo
})();;
(function() {
    return function(e, t) {
        function n(t, n) {
            return t === n || e.contains(t, n)
        }
        var i = window.kendo,
            o = i.ui,
            r = o.Widget,
            s = i.support,
            a = i.getOffset,
            l = "open",
            c = "close",
            u = "deactivate",
            d = "activate",
            h = "center",
            f = "left",
            p = "right",
            g = "top",
            m = "bottom",
            v = "absolute",
            _ = "hidden",
            w = "body",
            b = "location",
            y = "position",
            x = "visible",
            k = "effects",
            C = "k-state-active",
            S = "k-state-border",
            T = /k-state-border-(\w+)/,
            D = ".k-picker-wrap, .k-dropdown-wrap, .k-link",
            A = "down",
            E = e(document.documentElement),
            M = e(window),
            P = "scroll",
            I = "resize scroll",
            R = s.transitions.css,
            B = R + "transform",
            z = e.extend,
            L = ".kendoPopup",
            F = ["font-size", "font-family", "font-stretch", "font-style", "font-weight", "line-height"],
            O = r.extend({
                init: function(t, n) {
                    var o, s = this;
                    n = n || {}, n.isRtl && (n.origin = n.origin || m + " " + p, n.position = n.position || g + " " + p), r.fn.init.call(s, t, n), t = s.element, n = s.options, s.collisions = n.collision ? n.collision.split(" ") : [], s.downEvent = i.applyEventMap(A, i.guid()), 1 === s.collisions.length && s.collisions.push(s.collisions[0]), o = e(s.options.anchor).closest(".k-popup,.k-group").filter(":not([class^=km-])"), n.appendTo = e(e(n.appendTo)[0] || o[0] || w), s.element.hide().addClass("k-popup k-group k-reset").toggleClass("k-rtl", !!n.isRtl).css({
                        position: v
                    }).appendTo(n.appendTo).on("mouseenter" + L, function() {
                        s._hovered = !0
                    }).on("mouseleave" + L, function() {
                        s._hovered = !1
                    }), s.wrapper = e(), n.animation === !1 && (n.animation = {
                        open: {
                            effects: {}
                        },
                        close: {
                            hide: !0,
                            effects: {}
                        }
                    }), z(n.animation.open, {
                        complete: function() {
                            s.wrapper.css({
                                overflow: x
                            }), s._activated = !0, s._trigger(d)
                        }
                    }), z(n.animation.close, {
                        complete: function() {
                            s._animationClose()
                        }
                    }), s._mousedownProxy = function(e) {
                        s._mousedown(e)
                    }, s._resizeProxy = function(e) {
                        s._resize(e)
                    }, n.toggleTarget && e(n.toggleTarget).on(n.toggleEvent + L, e.proxy(s.toggle, s))
                },
                events: [l, d, c, u],
                options: {
                    name: "Popup",
                    toggleEvent: "click",
                    origin: m + " " + f,
                    position: g + " " + f,
                    anchor: w,
                    appendTo: null,
                    collision: "flip fit",
                    viewport: window,
                    copyAnchorStyles: !0,
                    autosize: !1,
                    modal: !1,
                    adjustSize: {
                        width: 0,
                        height: 0
                    },
                    animation: {
                        open: {
                            effects: "slideIn:down",
                            transition: !0,
                            duration: 200
                        },
                        close: {
                            duration: 100,
                            hide: !0
                        }
                    }
                },
                _animationClose: function() {
                    var t, n, o, r, s = this,
                        a = s.options;
                    s.wrapper.hide(), t = s.wrapper.data(b), n = e(a.anchor), t && s.wrapper.css(t), a.anchor != w && (o = ((n.attr("class") || "").match(T) || ["", "down"])[1], r = S + "-" + o, n.removeClass(r).children(D).removeClass(C).removeClass(r), s.element.removeClass(S + "-" + i.directions[o].reverse)), s._closing = !1, s._trigger(u)
                },
                destroy: function() {
                    var t, n = this,
                        o = n.options,
                        s = n.element.off(L);
                    r.fn.destroy.call(n), o.toggleTarget && e(o.toggleTarget).off(L), o.modal || (E.unbind(n.downEvent, n._mousedownProxy), n._toggleResize(!1)), i.destroy(n.element.children()), s.removeData(), o.appendTo[0] === document.body && (t = s.parent(".k-animation-container"), t[0] ? t.remove() : s.remove())
                },
                open: function(t, n) {
                    var o, r, a, c = this,
                        u = {
                            isFixed: !isNaN(parseInt(n, 10)),
                            x: t,
                            y: n
                        },
                        d = c.element,
                        h = c.options,
                        f = "down",
                        p = e(h.anchor),
                        m = d[0] && d.hasClass("km-widget");
                    if (!c.visible()) {
                        if (h.copyAnchorStyles && (m && "font-size" == F[0] && F.shift(), d.css(i.getComputedStyles(p[0], F))), d.data("animating") || c._trigger(l)) return;
                        c._activated = !1, h.modal || (E.unbind(c.downEvent, c._mousedownProxy).bind(c.downEvent, c._mousedownProxy), s.mobileOS.ios || s.mobileOS.android || (c._toggleResize(!1), c._toggleResize(!0))), c.wrapper = r = i.wrap(d, h.autosize).css({
                            overflow: _,
                            display: "block",
                            position: v
                        }), s.mobileOS.android && r.css(B, "translatez(0)"), r.css(y), e(h.appendTo)[0] == document.body && r.css(g, "-10000px"), o = z(!0, {}, h.animation.open), c.flipped = c._position(u), o.effects = i.parseEffects(o.effects, c.flipped), f = o.effects.slideIn ? o.effects.slideIn.direction : f, h.anchor != w && (a = S + "-" + f, d.addClass(S + "-" + i.directions[f].reverse), p.addClass(a).children(D).addClass(C).addClass(a)), d.data(k, o.effects).kendoStop(!0).kendoAnimate(o)
                    }
                },
                position: function() {
                    this.visible() && this._position()
                },
                toggle: function() {
                    var e = this;
                    e[e.visible() ? c : l]()
                },
                visible: function() {
                    return this.element.is(":" + x)
                },
                close: function(n) {
                    var o, r, s, a, l = this,
                        u = l.options;
                    if (l.visible()) {
                        if (o = l.wrapper[0] ? l.wrapper : i.wrap(l.element).hide(), l._toggleResize(!1), l._closing || l._trigger(c)) return l._toggleResize(!0), t;
                        l.element.find(".k-popup").each(function() {
                            var t = e(this),
                                i = t.data("kendoPopup");
                            i && i.close(n)
                        }), E.unbind(l.downEvent, l._mousedownProxy), n ? r = {
                            hide: !0,
                            effects: {}
                        } : (r = z(!0, {}, u.animation.close), s = l.element.data(k), a = r.effects, !a && !i.size(a) && s && i.size(s) && (r.effects = s, r.reverse = !0), l._closing = !0), l.element.kendoStop(!0), o.css({
                            overflow: _
                        }), l.element.kendoAnimate(r)
                    }
                },
                _trigger: function(e) {
                    return this.trigger(e, {
                        type: e
                    })
                },
                _resize: function(e) {
                    var t = this;
                    "resize" === e.type ? (clearTimeout(t._resizeTimeout), t._resizeTimeout = setTimeout(function() {
                        t._position(), t._resizeTimeout = null
                    }, 50)) : (!t._hovered || t._activated && t.element.hasClass("k-list-container")) && t.close()
                },
                _toggleResize: function(e) {
                    var t = e ? "on" : "off";
                    this._scrollableParents()[t](P, this._resizeProxy), M[t](I, this._resizeProxy)
                },
                _mousedown: function(t) {
                    var o = this,
                        r = o.element[0],
                        s = o.options,
                        a = e(s.anchor)[0],
                        l = s.toggleTarget,
                        c = i.eventTarget(t),
                        u = e(c).closest(".k-popup"),
                        d = u.parent().parent(".km-shim").length;
                    u = u[0], (d || !u || u === o.element[0]) && "popover" !== e(t.target).closest("a").data("rel") && (n(r, c) || n(a, c) || l && n(e(l)[0], c) || o.close())
                },
                _fit: function(e, t, n) {
                    var i = 0;
                    return e + t > n && (i = n - (e + t)), 0 > e && (i = -e), i
                },
                _flip: function(e, t, n, i, o, r, s) {
                    var a = 0;
                    return s = s || t, r !== o && r !== h && o !== h && (e + s > i && (a += -(n + t)), 0 > e + a && (a += n + t)), a
                },
                _scrollableParents: function() {
                    return e(this.options.anchor).parentsUntil("body").filter(function(e, t) {
                        return i.isScrollable(t)
                    })
                },
                _position: function(t) {
                    var n, o, r, l, c, u, d, h, f, p, g, m = this,
                        _ = m.element,
                        w = m.wrapper,
                        x = m.options,
                        k = e(x.viewport),
                        C = k.offset(),
                        S = e(x.anchor),
                        T = x.origin.toLowerCase().split(" "),
                        D = x.position.toLowerCase().split(" "),
                        A = m.collisions,
                        E = s.zoomLevel(),
                        M = 10002,
                        P = !!(k[0] == window && window.innerWidth && 1.02 >= E),
                        I = 0,
                        R = document.documentElement,
                        B = P ? window.innerWidth : k.width(),
                        L = P ? window.innerHeight : k.height();
                    if (P && R.scrollHeight - R.clientHeight > 0 && (B -= i.support.scrollbar()), n = S.parents().filter(w.siblings()), n[0])
                        if (r = Math.max(+n.css("zIndex"), 0)) M = r + 10;
                        else
                            for (o = S.parentsUntil(n), l = o.length; l > I; I++) r = +e(o[I]).css("zIndex"), r && r > M && (M = r + 10);
                    return w.css("zIndex", M), w.css(t && t.isFixed ? {
                        left: t.x,
                        top: t.y
                    } : m._align(T, D)), c = a(w, y, S[0] === w.offsetParent()[0]), u = a(w), d = S.offsetParent().parent(".k-animation-container,.k-popup,.k-group"), d.length && (c = a(w, y, !0), u = a(w)), k[0] === window ? (u.top -= window.pageYOffset || document.documentElement.scrollTop || 0, u.left -= window.pageXOffset || document.documentElement.scrollLeft || 0) : (u.top -= C.top, u.left -= C.left), m.wrapper.data(b) || w.data(b, z({}, c)), h = z({}, u), f = z({}, c), p = x.adjustSize, "fit" === A[0] && (f.top += m._fit(h.top, w.outerHeight() + p.height, L / E)), "fit" === A[1] && (f.left += m._fit(h.left, w.outerWidth() + p.width, B / E)), g = z({}, f), "flip" === A[0] && (f.top += m._flip(h.top, _.outerHeight(), S.outerHeight(), L / E, T[0], D[0], w.outerHeight())), "flip" === A[1] && (f.left += m._flip(h.left, _.outerWidth(), S.outerWidth(), B / E, T[1], D[1], w.outerWidth())), _.css(y, v), w.css(f), f.left != g.left || f.top != g.top
                },
                _align: function(t, n) {
                    var i, o = this,
                        r = o.wrapper,
                        s = e(o.options.anchor),
                        l = t[0],
                        c = t[1],
                        u = n[0],
                        d = n[1],
                        f = a(s),
                        g = e(o.options.appendTo),
                        v = r.outerWidth(),
                        _ = r.outerHeight(),
                        w = s.outerWidth(),
                        b = s.outerHeight(),
                        y = f.top,
                        x = f.left,
                        k = Math.round;
                    return g[0] != document.body && (i = a(g), y -= i.top, x -= i.left), l === m && (y += b), l === h && (y += k(b / 2)), u === m && (y -= _), u === h && (y -= k(_ / 2)), c === p && (x += w), c === h && (x += k(w / 2)), d === p && (x -= v), d === h && (x -= k(v / 2)), {
                        top: y,
                        left: x
                    }
                }
            });
        o.plugin(O)
    }(window.kendo.jQuery), window.kendo
})();;
(function() {
    return function(e, t) {
        function n(t) {
            var n = t.parseFormats,
                i = t.format;
            L.normalize(t), n = e.isArray(n) ? n : [n], n.length || n.push("yyyy-MM-dd"), -1 === e.inArray(i, n) && n.splice(0, 0, t.format), t.parseFormats = n
        }

        function i(e) {
            e.preventDefault()
        }
        var o, r = window.kendo,
            s = r.ui,
            a = s.Widget,
            l = r.parseDate,
            c = r.keys,
            h = r.template,
            u = r._activeElement,
            d = "<div />",
            f = "<span />",
            p = ".kendoDatePicker",
            g = "click" + p,
            m = "open",
            v = "close",
            _ = "change",
            w = "disabled",
            y = "readonly",
            b = "k-state-default",
            x = "k-state-focused",
            k = "k-state-selected",
            C = "k-state-disabled",
            S = "k-state-hover",
            T = "mouseenter" + p + " mouseleave" + p,
            A = "mousedown" + p,
            D = "id",
            M = "min",
            P = "max",
            E = "month",
            I = "aria-disabled",
            B = "aria-expanded",
            R = "aria-hidden",
            z = "aria-readonly",
            L = r.calendar,
            F = L.isInRange,
            O = L.restrictValue,
            N = L.isEqualDatePart,
            V = e.extend,
            H = e.proxy,
            U = Date,
            j = function(t) {
                var n, i = this,
                    o = document.body,
                    a = e(d).attr(R, "true").addClass("k-calendar-container").appendTo(o);
                i.options = t = t || {}, n = t.id, n && (n += "_dateview", a.attr(D, n), i._dateViewID = n), i.popup = new s.Popup(a, V(t.popup, t, {
                    name: "Popup",
                    isRtl: r.support.isRtl(t.anchor)
                })), i.div = a, i.value(t.value)
            };
        j.prototype = {
            _calendar: function() {
                var t, n = this,
                    o = n.calendar,
                    a = n.options;
                o || (t = e(d).attr(D, r.guid()).appendTo(n.popup.element).on(A, i).on(g, "td:has(.k-link)", H(n._click, n)), n.calendar = o = new s.Calendar(t), n._setOptions(a), r.calendar.makeUnselectable(o.element), o.navigate(n._value || n._current, a.start), n.value(n._value))
            },
            _setOptions: function(e) {
                this.calendar.setOptions({
                    focusOnNav: !1,
                    change: e.change,
                    culture: e.culture,
                    dates: e.dates,
                    depth: e.depth,
                    footer: e.footer,
                    format: e.format,
                    max: e.max,
                    min: e.min,
                    month: e.month,
                    start: e.start
                })
            },
            setOptions: function(e) {
                var t = this.options;
                this.options = V(t, e, {
                    change: t.change,
                    close: t.close,
                    open: t.open
                }), this.calendar && this._setOptions(this.options)
            },
            destroy: function() {
                this.popup.destroy()
            },
            open: function() {
                var e = this;
                e._calendar(), e.popup.open()
            },
            close: function() {
                this.popup.close()
            },
            min: function(e) {
                this._option(M, e)
            },
            max: function(e) {
                this._option(P, e)
            },
            toggle: function() {
                var e = this;
                e[e.popup.visible() ? v : m]()
            },
            move: function(e) {
                var t = this,
                    n = e.keyCode,
                    i = t.calendar,
                    o = e.ctrlKey && n == c.DOWN || n == c.ENTER,
                    r = !1;
                if (e.altKey) n == c.DOWN ? (t.open(), e.preventDefault(), r = !0) : n == c.UP && (t.close(), e.preventDefault(), r = !0);
                else if (t.popup.visible()) {
                    if (n == c.ESC || o && i._cell.hasClass(k)) return t.close(), e.preventDefault(), !0;
                    t._current = i._move(e), r = !0
                }
                return r
            },
            current: function(e) {
                this._current = e, this.calendar._focus(e)
            },
            value: function(e) {
                var t = this,
                    n = t.calendar,
                    i = t.options;
                t._value = e, t._current = new U(+O(e, i.min, i.max)), n && n.value(e)
            },
            _click: function(e) {
                -1 !== e.currentTarget.className.indexOf(k) && this.close()
            },
            _option: function(e, t) {
                var n = this,
                    i = n.calendar;
                n.options[e] = t, i && i[e](t)
            }
        }, j.normalize = n, r.DateView = j, o = a.extend({
            init: function(t, i) {
                var o, s, c = this;
                a.fn.init.call(c, t, i), t = c.element, i = c.options, i.min = l(t.attr("min")) || l(i.min), i.max = l(t.attr("max")) || l(i.max), n(i), c._initialOptions = V({}, i), c._wrapper(), c.dateView = new j(V({}, i, {
                    id: t.attr(D),
                    anchor: c.wrapper,
                    change: function() {
                        c._change(this.value()), c.close()
                    },
                    close: function(e) {
                        c.trigger(v) ? e.preventDefault() : (t.attr(B, !1), s.attr(R, !0))
                    },
                    open: function(e) {
                        var n, i = c.options;
                        c.trigger(m) ? e.preventDefault() : (c.element.val() !== c._oldText && (n = l(t.val(), i.parseFormats, i.culture), c.dateView[n ? "current" : "value"](n)), t.attr(B, !0), s.attr(R, !1), c._updateARIA(n))
                    }
                })), s = c.dateView.div, c._icon();
                try {
                    t[0].setAttribute("type", "text")
                } catch (h) {
                    t[0].type = "text"
                }
                t.addClass("k-input").attr({
                    role: "combobox",
                    "aria-expanded": !1,
                    "aria-owns": c.dateView._dateViewID
                }), c._reset(), c._template(), o = t.is("[disabled]") || e(c.element).parents("fieldset").is(":disabled"), o ? c.enable(!1) : c.readonly(t.is("[readonly]")), c._old = c._update(i.value || c.element.val()), c._oldText = t.val(), r.notify(c)
            },
            events: [m, v, _],
            options: {
                name: "DatePicker",
                value: null,
                footer: "",
                format: "",
                culture: "",
                parseFormats: [],
                min: new Date(1900, 0, 1),
                max: new Date(2099, 11, 31),
                start: E,
                depth: E,
                animation: {},
                month: {},
                dates: [],
                ARIATemplate: 'Current focused date is #=kendo.toString(data.current, "D")#'
            },
            setOptions: function(e) {
                var t = this,
                    i = t._value;
                a.fn.setOptions.call(t, e), e = t.options, e.min = l(e.min), e.max = l(e.max), n(e), t.dateView.setOptions(e), i && (t.element.val(r.toString(i, e.format, e.culture)), t._updateARIA(i))
            },
            _editable: function(e) {
                var t = this,
                    n = t._dateIcon.off(p),
                    o = t.element.off(p),
                    r = t._inputWrapper.off(p),
                    s = e.readonly,
                    a = e.disable;
                s || a ? (r.addClass(a ? C : b).removeClass(a ? b : C), o.attr(w, a).attr(y, s).attr(I, a).attr(z, s)) : (r.addClass(b).removeClass(C).on(T, t._toggleHover), o.removeAttr(w).removeAttr(y).attr(I, !1).attr(z, !1).on("keydown" + p, H(t._keydown, t)).on("focusout" + p, H(t._blur, t)).on("focus" + p, function() {
                    t._inputWrapper.addClass(x)
                }), n.on(g, H(t._click, t)).on(A, i))
            },
            readonly: function(e) {
                this._editable({
                    readonly: e === t ? !0 : e,
                    disable: !1
                })
            },
            enable: function(e) {
                this._editable({
                    readonly: !1,
                    disable: !(e = e === t ? !0 : e)
                })
            },
            destroy: function() {
                var e = this;
                a.fn.destroy.call(e), e.dateView.destroy(), e.element.off(p), e._dateIcon.off(p), e._inputWrapper.off(p), e._form && e._form.off("reset", e._resetHandler)
            },
            open: function() {
                this.dateView.open()
            },
            close: function() {
                this.dateView.close()
            },
            min: function(e) {
                return this._option(M, e)
            },
            max: function(e) {
                return this._option(P, e)
            },
            value: function(e) {
                var n = this;
                return e === t ? n._value : (n._old = n._update(e), null === n._old && n.element.val(""), n._oldText = n.element.val(), t)
            },
            _toggleHover: function(t) {
                e(t.currentTarget).toggleClass(S, "mouseenter" === t.type)
            },
            _blur: function() {
                var e = this,
                    t = e.element.val();
                e.close(), t !== e._oldText && e._change(t), e._inputWrapper.removeClass(x)
            },
            _click: function() {
                var e = this,
                    t = e.element;
                e.dateView.toggle(), r.support.touch || t[0] === u() || t.focus()
            },
            _change: function(e) {
                var t = this;
                e = t._update(e), +t._old != +e && (t._old = e, t._oldText = t.element.val(), t._typing || t.element.trigger(_), t.trigger(_)), t._typing = !1
            },
            _keydown: function(e) {
                var t = this,
                    n = t.dateView,
                    i = t.element.val(),
                    o = !1;
                n.popup.visible() || e.keyCode != c.ENTER || i === t._oldText ? (o = n.move(e), t._updateARIA(n._current), o || (t._typing = !0)) : t._change(i)
            },
            _icon: function() {
                var t, n = this,
                    i = n.element;
                t = i.next("span.k-select"), t[0] || (t = e('<span unselectable="on" class="k-select"><span unselectable="on" class="k-icon k-i-calendar">select</span></span>').insertAfter(i)), n._dateIcon = t.attr({
                    role: "button",
                    "aria-controls": n.dateView._dateViewID
                })
            },
            _option: function(e, n) {
                var i = this,
                    o = i.options;
                return n === t ? o[e] : (n = l(n, o.parseFormats, o.culture), n && (o[e] = new U(+n), i.dateView[e](n)), t)
            },
            _update: function(e) {
                var t, n = this,
                    i = n.options,
                    o = i.min,
                    s = i.max,
                    a = n._value,
                    c = l(e, i.parseFormats, i.culture),
                    h = null === c && null === a || c instanceof Date && a instanceof Date;
                return +c === +a && h ? (t = r.toString(c, i.format, i.culture), t !== e && n.element.val(null === c ? e : t), c) : (null !== c && N(c, o) ? c = O(c, o, s) : F(c, o, s) || (c = null), n._value = c, n.dateView.value(c), n.element.val(c ? r.toString(c, i.format, i.culture) : e), n._updateARIA(c), c)
            },
            _wrapper: function() {
                var t, n = this,
                    i = n.element;
                t = i.parents(".k-datepicker"), t[0] || (t = i.wrap(f).parent().addClass("k-picker-wrap k-state-default"), t = t.wrap(f).parent()), t[0].style.cssText = i[0].style.cssText, i.css({
                    width: "100%",
                    height: i[0].style.height
                }), n.wrapper = t.addClass("k-widget k-datepicker k-header").addClass(i[0].className), n._inputWrapper = e(t[0].firstChild)
            },
            _reset: function() {
                var t = this,
                    n = t.element,
                    i = n.attr("form"),
                    o = i ? e("#" + i) : n.closest("form");
                o[0] && (t._resetHandler = function() {
                    t.value(n[0].defaultValue), t.max(t._initialOptions.max), t.min(t._initialOptions.min)
                }, t._form = o.on("reset", t._resetHandler))
            },
            _template: function() {
                this._ariaTemplate = h(this.options.ARIATemplate)
            },
            _updateARIA: function(e) {
                var t, n = this,
                    i = n.dateView.calendar;
                n.element.removeAttr("aria-activedescendant"), i && (t = i._cell, t.attr("aria-label", n._ariaTemplate({
                    current: e || i.current()
                })), n.element.attr("aria-activedescendant", t.attr("id")))
            }
        }), s.plugin(o)
    }(window.kendo.jQuery), window.kendo
})();;
(function() {
    return function(e) {
        function t(e, t) {
            var n = e.x.location,
                i = e.y.location,
                r = t.x.location,
                o = t.y.location,
                a = n - r,
                s = i - o;
            return {
                center: {
                    x: (n + r) / 2,
                    y: (i + o) / 2
                },
                distance: Math.sqrt(a * a + s * s)
            }
        }

        function n(e) {
            var t, n, i, r = [],
                a = e.originalEvent,
                s = e.currentTarget,
                l = 0;
            if (e.api) r.push({
                id: 2,
                event: e,
                target: e.target,
                currentTarget: e.target,
                location: e,
                type: "api"
            });
            else if (e.type.match(/touch/))
                for (n = a ? a.changedTouches : [], t = n.length; t > l; l++) i = n[l], r.push({
                    location: i,
                    event: e,
                    target: i.target,
                    currentTarget: s,
                    id: i.identifier,
                    type: "touch"
                });
            else r.push(o.pointers || o.msPointers ? {
                location: a,
                event: e,
                target: e.target,
                currentTarget: s,
                id: a.pointerId,
                type: "pointer"
            } : {
                id: 1,
                event: e,
                target: e.target,
                currentTarget: s,
                location: e,
                type: "mouse"
            });
            return r
        }

        function i(e) {
            for (var t = r.eventMap.up.split(" "), n = 0, i = t.length; i > n; n++) e(t[n])
        }
        var r = window.kendo,
            o = r.support,
            a = window.document,
            s = r.Class,
            l = r.Observable,
            c = e.now,
            u = e.extend,
            d = o.mobileOS,
            h = d && d.android,
            f = 800,
            p = o.browser.msie ? 5 : 0,
            g = "press",
            m = "hold",
            v = "select",
            _ = "start",
            y = "move",
            b = "end",
            w = "cancel",
            x = "tap",
            k = "release",
            C = "gesturestart",
            S = "gesturechange",
            T = "gestureend",
            A = "gesturetap",
            D = {
                api: 0,
                touch: 0,
                mouse: 9,
                pointer: 9
            },
            M = !o.touch || o.mouseAndTouchPresent,
            E = s.extend({
                init: function(e, t) {
                    var n = this;
                    n.axis = e, n._updateLocationData(t), n.startLocation = n.location, n.velocity = n.delta = 0, n.timeStamp = c()
                },
                move: function(e) {
                    var t = this,
                        n = e["page" + t.axis],
                        i = c(),
                        r = i - t.timeStamp || 1;
                    (n || !h) && (t.delta = n - t.location, t._updateLocationData(e), t.initialDelta = n - t.startLocation, t.velocity = t.delta / r, t.timeStamp = i)
                },
                _updateLocationData: function(e) {
                    var t = this,
                        n = t.axis;
                    t.location = e["page" + n], t.client = e["client" + n], t.screen = e["screen" + n]
                }
            }),
            P = s.extend({
                init: function(e, t, n) {
                    u(this, {
                        x: new E("X", n.location),
                        y: new E("Y", n.location),
                        type: n.type,
                        threshold: e.threshold || D[n.type],
                        userEvents: e,
                        target: t,
                        currentTarget: n.currentTarget,
                        initialTouch: n.target,
                        id: n.id,
                        pressEvent: n,
                        _moved: !1,
                        _finished: !1
                    })
                },
                press: function() {
                    this._holdTimeout = setTimeout(e.proxy(this, "_hold"), this.userEvents.minHold), this._trigger(g, this.pressEvent)
                },
                _hold: function() {
                    this._trigger(m, this.pressEvent)
                },
                move: function(e) {
                    var t = this;
                    if (!t._finished) {
                        if (t.x.move(e.location), t.y.move(e.location), !t._moved) {
                            if (t._withinIgnoreThreshold()) return;
                            if (I.current && I.current !== t.userEvents) return t.dispose();
                            t._start(e)
                        }
                        t._finished || t._trigger(y, e)
                    }
                },
                end: function(e) {
                    var t = this;
                    t.endTime = c(), t._finished || (t._finished = !0, t._trigger(k, e), t._moved ? t._trigger(b, e) : t._trigger(x, e), clearTimeout(t._holdTimeout), t.dispose())
                },
                dispose: function() {
                    var t = this.userEvents,
                        n = t.touches;
                    this._finished = !0, this.pressEvent = null, clearTimeout(this._holdTimeout), n.splice(e.inArray(this, n), 1)
                },
                skip: function() {
                    this.dispose()
                },
                cancel: function() {
                    this.dispose()
                },
                isMoved: function() {
                    return this._moved
                },
                _start: function(e) {
                    clearTimeout(this._holdTimeout), this.startTime = c(), this._moved = !0, this._trigger(_, e)
                },
                _trigger: function(e, t) {
                    var n = this,
                        i = t.event,
                        r = {
                            touch: n,
                            x: n.x,
                            y: n.y,
                            target: n.target,
                            event: i
                        };
                    n.userEvents.notify(e, r) && i.preventDefault()
                },
                _withinIgnoreThreshold: function() {
                    var e = this.x.initialDelta,
                        t = this.y.initialDelta;
                    return Math.sqrt(e * e + t * t) <= this.threshold
                }
            }),
            I = l.extend({
                init: function(t, n) {
                    var s, c, d, h = this,
                        D = r.guid();
                    n = n || {}, s = h.filter = n.filter, h.threshold = n.threshold || p, h.minHold = n.minHold || f, h.touches = [], h._maxTouches = n.multiTouch ? 2 : 1, h.allowSelection = n.allowSelection, h.captureUpIfMoved = n.captureUpIfMoved, h.eventNS = D, t = e(t).handler(h), l.fn.init.call(h), u(h, {
                        element: t,
                        surface: e(n.global && M ? a.documentElement : n.surface || t),
                        stopPropagation: n.stopPropagation,
                        pressed: !1
                    }), h.surface.handler(h).on(r.applyEventMap("move", D), "_move").on(r.applyEventMap("up cancel", D), "_end"), t.on(r.applyEventMap("down", D), s, "_start"), (o.pointers || o.msPointers) && (11 > o.browser.version ? t.css("-ms-touch-action", "pinch-zoom double-tap-zoom") : t.css("touch-action", "none")), n.preventDragEvent && t.on(r.applyEventMap("dragstart", D), r.preventDefault), t.on(r.applyEventMap("mousedown", D), s, {
                        root: t
                    }, "_select"), h.captureUpIfMoved && o.eventCapture && (c = h.surface[0], d = e.proxy(h.preventIfMoving, h), i(function(e) {
                        c.addEventListener(e, d, !0)
                    })), h.bind([g, m, x, _, y, b, k, w, C, S, T, A, v], n)
                },
                preventIfMoving: function(e) {
                    this._isMoved() && e.preventDefault()
                },
                destroy: function() {
                    var e, t = this;
                    t._destroyed || (t._destroyed = !0, t.captureUpIfMoved && o.eventCapture && (e = t.surface[0], i(function(n) {
                        e.removeEventListener(n, t.preventIfMoving)
                    })), t.element.kendoDestroy(t.eventNS), t.surface.kendoDestroy(t.eventNS), t.element.removeData("handler"), t.surface.removeData("handler"), t._disposeAll(), t.unbind(), delete t.surface, delete t.element, delete t.currentTarget)
                },
                capture: function() {
                    I.current = this
                },
                cancel: function() {
                    this._disposeAll(), this.trigger(w)
                },
                notify: function(e, n) {
                    var i = this,
                        r = i.touches;
                    if (this._isMultiTouch()) {
                        switch (e) {
                            case y:
                                e = S;
                                break;
                            case b:
                                e = T;
                                break;
                            case x:
                                e = A
                        }
                        u(n, {
                            touches: r
                        }, t(r[0], r[1]))
                    }
                    return this.trigger(e, u(n, {
                        type: e
                    }))
                },
                press: function(e, t, n) {
                    this._apiCall("_start", e, t, n)
                },
                move: function(e, t) {
                    this._apiCall("_move", e, t)
                },
                end: function(e, t) {
                    this._apiCall("_end", e, t)
                },
                _isMultiTouch: function() {
                    return this.touches.length > 1
                },
                _maxTouchesReached: function() {
                    return this.touches.length >= this._maxTouches
                },
                _disposeAll: function() {
                    for (var e = this.touches; e.length > 0;) e.pop().dispose()
                },
                _isMoved: function() {
                    return e.grep(this.touches, function(e) {
                        return e.isMoved()
                    }).length
                },
                _select: function(e) {
                    (!this.allowSelection || this.trigger(v, {
                        event: e
                    })) && e.preventDefault()
                },
                _start: function(t) {
                    var i, r, o = this,
                        a = 0,
                        s = o.filter,
                        l = n(t),
                        c = l.length,
                        u = t.which;
                    if (!(u && u > 1 || o._maxTouchesReached()))
                        for (I.current = null, o.currentTarget = t.currentTarget, o.stopPropagation && t.stopPropagation(); c > a && !o._maxTouchesReached(); a++) r = l[a], i = s ? e(r.currentTarget) : o.element, i.length && (r = new P(o, i, r), o.touches.push(r), r.press(), o._isMultiTouch() && o.notify("gesturestart", {}))
                },
                _move: function(e) {
                    this._eachTouch("move", e)
                },
                _end: function(e) {
                    this._eachTouch("end", e)
                },
                _eachTouch: function(e, t) {
                    var i, r, o, a, s = this,
                        l = {},
                        c = n(t),
                        u = s.touches;
                    for (i = 0; u.length > i; i++) r = u[i], l[r.id] = r;
                    for (i = 0; c.length > i; i++) o = c[i], a = l[o.id], a && a[e](o)
                },
                _apiCall: function(t, n, i, r) {
                    this[t]({
                        api: !0,
                        pageX: n,
                        pageY: i,
                        clientX: n,
                        clientY: i,
                        target: e(r || this.element)[0],
                        stopPropagation: e.noop,
                        preventDefault: e.noop
                    })
                }
            });
        I.defaultThreshold = function(e) {
            p = e
        }, I.minHold = function(e) {
            f = e
        }, r.getTouches = n, r.touchDelta = t, r.UserEvents = I
    }(window.kendo.jQuery), window.kendo
})();;
(function() {
    return function(e, t) {
        function n(e, t) {
            if (!e.is(":visible")) return !1;
            var n = o.getOffset(e),
                i = t.left + t.width,
                r = t.top + t.height;
            return n.right = n.left + e.outerWidth(), n.bottom = n.top + e.outerHeight(), !(n.left > i || t.left > n.right || n.top > r || t.top > n.bottom)
        }
        var i, o = window.kendo,
            r = o.ui.Widget,
            s = e.proxy,
            a = Math.abs,
            l = "aria-selected",
            c = "k-state-selected",
            u = "k-state-selecting",
            d = "k-selectable",
            h = "change",
            f = ".kendoSelectable",
            p = "k-state-unselecting",
            g = "input,a,textarea,.k-multiselect-wrap,select,button,a.k-button>.k-icon,button.k-button>.k-icon,span.k-icon.k-i-expand,span.k-icon.k-i-collapse",
            m = o.support.browser.msie,
            v = !1;
        ! function(e) {
            ! function() {
                e('<div class="parent"><span /></div>').on("click", ">*", function() {
                    v = !0
                }).find("span").click().end().off()
            }()
        }(e), i = r.extend({
            init: function(t, n) {
                var i, a = this;
                r.fn.init.call(a, t, n), a._marquee = e("<div class='k-marquee'><div class='k-marquee-color'></div></div>"), a._lastActive = null, a.element.addClass(d), a.relatedTarget = a.options.relatedTarget, i = a.options.multiple, this.options.aria && i && a.element.attr("aria-multiselectable", !0), a.userEvents = new o.UserEvents(a.element, {
                    global: !0,
                    allowSelection: !0,
                    filter: (v ? "" : "." + d + " ") + a.options.filter,
                    tap: s(a._tap, a)
                }), i && a.userEvents.bind("start", s(a._start, a)).bind("move", s(a._move, a)).bind("end", s(a._end, a)).bind("select", s(a._select, a))
            },
            events: [h],
            options: {
                name: "Selectable",
                filter: ">*",
                multiple: !1,
                relatedTarget: e.noop
            },
            _isElement: function(e) {
                var t, n = this.element,
                    i = n.length,
                    o = !1;
                for (e = e[0], t = 0; i > t; t++)
                    if (n[t] === e) {
                        o = !0;
                        break
                    }
                return o
            },
            _tap: function(t) {
                var n, i = e(t.target),
                    o = this,
                    r = t.event.ctrlKey || t.event.metaKey,
                    s = o.options.multiple,
                    a = s && t.event.shiftKey,
                    l = t.event.which,
                    u = t.event.button;
                !o._isElement(i.closest("." + d)) || l && 3 == l || u && 2 == u || this._allowSelection(t.event.target) && (n = i.hasClass(c), s && r || o.clear(), i = i.add(o.relatedTarget(i)), a ? o.selectRange(o._firstSelectee(), i) : (n && r ? (o._unselect(i), o._notify(h)) : o.value(i), o._lastActive = o._downTarget = i))
            },
            _start: function(n) {
                var i, o = this,
                    r = e(n.target),
                    s = r.hasClass(c),
                    a = n.event.ctrlKey || n.event.metaKey;
                if (this._allowSelection(n.event.target)) {
                    if (o._downTarget = r, !o._isElement(r.closest("." + d))) return o.userEvents.cancel(), t;
                    o.options.useAllItems ? o._items = o.element.find(o.options.filter) : (i = r.closest(o.element), o._items = i.find(o.options.filter)), n.sender.capture(), o._marquee.appendTo(document.body).css({
                        left: n.x.client + 1,
                        top: n.y.client + 1,
                        width: 0,
                        height: 0
                    }), a || o.clear(), r = r.add(o.relatedTarget(r)), s && (o._selectElement(r, !0), a && r.addClass(p))
                }
            },
            _move: function(e) {
                var t = this,
                    n = {
                        left: e.x.startLocation > e.x.location ? e.x.location : e.x.startLocation,
                        top: e.y.startLocation > e.y.location ? e.y.location : e.y.startLocation,
                        width: a(e.x.initialDelta),
                        height: a(e.y.initialDelta)
                    };
                t._marquee.css(n), t._invalidateSelectables(n, e.event.ctrlKey || e.event.metaKey), e.preventDefault()
            },
            _end: function() {
                var e, t = this;
                t._marquee.remove(), t._unselect(t.element.find(t.options.filter + "." + p)).removeClass(p), e = t.element.find(t.options.filter + "." + u), e = e.add(t.relatedTarget(e)), t.value(e), t._lastActive = t._downTarget, t._items = null
            },
            _invalidateSelectables: function(e, t) {
                var i, o, r, s, a = this._downTarget[0],
                    l = this._items;
                for (i = 0, o = l.length; o > i; i++) s = l.eq(i), r = s.add(this.relatedTarget(s)), n(s, e) ? s.hasClass(c) ? t && a !== s[0] && r.removeClass(c).addClass(p) : s.hasClass(u) || s.hasClass(p) || r.addClass(u) : s.hasClass(u) ? r.removeClass(u) : t && s.hasClass(p) && r.removeClass(p).addClass(c)
            },
            value: function(e) {
                var n = this,
                    i = s(n._selectElement, n);
                return e ? (e.each(function() {
                    i(this)
                }), n._notify(h), t) : n.element.find(n.options.filter + "." + c)
            },
            _firstSelectee: function() {
                var e, t = this;
                return null !== t._lastActive ? t._lastActive : (e = t.value(), e.length > 0 ? e[0] : t.element.find(t.options.filter)[0])
            },
            _selectElement: function(t, n) {
                var i = e(t),
                    o = !n && this._notify("select", {
                        element: t
                    });
                i.removeClass(u), o || (i.addClass(c), this.options.aria && i.attr(l, !0))
            },
            _notify: function(e, t) {
                return t = t || {}, this.trigger(e, t)
            },
            _unselect: function(e) {
                return e.removeClass(c), this.options.aria && e.attr(l, !1), e
            },
            _select: function(t) {
                this._allowSelection(t.event.target) && (!m || m && !e(o._activeElement()).is(g)) && t.preventDefault()
            },
            _allowSelection: function(t) {
                return e(t).is(g) ? (this.userEvents.cancel(), this._downTarget = null, !1) : !0
            },
            resetTouchEvents: function() {
                this.userEvents.cancel()
            },
            clear: function() {
                var e = this.element.find(this.options.filter + "." + c);
                this._unselect(e)
            },
            selectRange: function(t, n) {
                var i, o, r, s = this;
                for (s.clear(), s.element.length > 1 && (r = s.options.continuousItems()), r && r.length || (r = s.element.find(s.options.filter)), t = e.inArray(e(t)[0], r), n = e.inArray(e(n)[0], r), t > n && (o = t, t = n, n = o), s.options.useAllItems || (n += s.element.length - 1), i = t; n >= i; i++) s._selectElement(r[i]);
                s._notify(h)
            },
            destroy: function() {
                var e = this;
                r.fn.destroy.call(e), e.element.off(f), e.userEvents.destroy(), e._marquee = e._lastActive = e.element = e.userEvents = null
            }
        }), i.parseOptions = function(e) {
            var t = "string" == typeof e && e.toLowerCase();
            return {
                multiple: t && t.indexOf("multiple") > -1,
                cell: t && t.indexOf("cell") > -1
            }
        }, o.ui.plugin(i)
    }(window.kendo.jQuery), window.kendo
})();;
(function() {
    return function(e, t) {
        function n(e, t, n, i) {
            return function(r) {
                var o, a = {};
                for (o in r) a[o] = r[o];
                a.field = i ? n + "." + r.field : n, t == be && e._notifyChange && e._notifyChange(a), e.trigger(t, a)
            }
        }

        function i(t, n) {
            if (t === n) return !0;
            var r, o = e.type(t),
                a = e.type(n);
            if (o !== a) return !1;
            if ("date" === o) return t.getTime() === n.getTime();
            if ("object" !== o && "array" !== o) return !1;
            for (r in t)
                if (!i(t[r], n[r])) return !1;
            return !0
        }

        function r(e, t) {
            var n, i;
            for (i in e) {
                if (n = e[i], ne(n) && n.field && n.field === t) return n;
                if (n === t) return n
            }
            return null
        }

        function o(e) {
            this.data = e || []
        }

        function a(e, n) {
            if (e) {
                var i = typeof e === fe ? {
                        field: e,
                        dir: n
                    } : e,
                    r = re(i) ? i : i !== t ? [i] : [];
                return oe(r, function(e) {
                    return !!e.dir
                })
            }
        }

        function s(e) {
            var t, n, i, r, o = e.filters;
            if (o)
                for (t = 0, n = o.length; n > t; t++) i = o[t], r = i.operator, r && typeof r === fe && (i.operator = U[r.toLowerCase()] || r), s(i)
        }

        function l(e) {
            return e && !ie(e) ? ((re(e) || !e.filters) && (e = {
                logic: "and",
                filters: re(e) ? e : [e]
            }), s(e), e) : t
        }

        function c(e) {
            return re(e) ? e : [e]
        }

        function u(e, n) {
            var i = typeof e === fe ? {
                    field: e,
                    dir: n
                } : e,
                r = re(i) ? i : i !== t ? [i] : [];
            return H(r, function(e) {
                return {
                    field: e.field,
                    dir: e.dir || "asc",
                    aggregates: e.aggregates
                }
            })
        }

        function d(e, t) {
            return e && e.getTime && t && t.getTime ? e.getTime() === t.getTime() : e === t
        }

        function h(e, t, n, i, r, o) {
            var a, s, l, c, u;
            for (t = t || [], c = t.length, a = 0; c > a; a++) s = t[a], l = s.aggregate, u = s.field, e[u] = e[u] || {}, o[u] = o[u] || {}, o[u][l] = o[u][l] || {}, e[u][l] = W[l.toLowerCase()](e[u][l], n, ce.accessor(u), i, r, o[u][l])
        }

        function f(e) {
            return "number" == typeof e && !isNaN(e)
        }

        function p(e) {
            return e && e.getTime
        }

        function g(e) {
            var t, n = e.length,
                i = Array(n);
            for (t = 0; n > t; t++) i[t] = e[t].toJSON();
            return i
        }

        function m(e, t, n, i, r) {
            var o, a, s, l, c, u = {};
            for (l = 0, c = e.length; c > l; l++) {
                o = e[l];
                for (a in t) s = r[a], s && s !== a && (u[s] || (u[s] = ce.setter(s)), u[s](o, t[a](o)), delete o[a])
            }
        }

        function v(e, t, n, i, r) {
            var o, a, s, l, c;
            for (l = 0, c = e.length; c > l; l++) {
                o = e[l];
                for (a in t) o[a] = n._parse(a, t[a](o)), s = r[a], s && s !== a && delete o[s]
            }
        }

        function _(e, t, n, i, r) {
            var o, a, s, l;
            for (a = 0, l = e.length; l > a; a++) o = e[a], s = i[o.field], s && s != o.field && (o.field = s), o.value = n._parse(o.field, o.value), o.hasSubgroups ? _(o.items, t, n, i, r) : v(o.items, t, n, i, r)
        }

        function b(e, t, n, i, r, o) {
            return function(a) {
                return a = e(a), a && !ie(i) && ("[object Array]" === He.call(a) || a instanceof We || (a = [a]), n(a, i, new t, r, o)), a || []
            }
        }

        function w(e, t, n, i) {
            for (var r, o, a, s = 0; t.length && i && (r = t[s], o = r.items, a = o.length, e && e.field === r.field && e.value === r.value ? (e.hasSubgroups && e.items.length ? w(e.items[e.items.length - 1], r.items, n, i) : (o = o.slice(n, n + i), e.items = e.items.concat(o)), t.splice(s--, 1)) : r.hasSubgroups && o.length ? (w(r, o, n, i), r.items.length || t.splice(s--, 1)) : (o = o.slice(n, n + i), r.items = o, r.items.length || t.splice(s--, 1)), 0 === o.length ? n -= a : (n = 0, i -= o.length), !(++s >= t.length)););
            t.length > s && t.splice(s, t.length - s)
        }

        function y(e) {
            var t, n, i, r, o, a = [];
            for (t = 0, n = e.length; n > t; t++)
                if (o = e.at(t), o.hasSubgroups) a = a.concat(y(o.items));
                else
                    for (i = o.items, r = 0; i.length > r; r++) a.push(i.at(r));
            return a
        }

        function k(e, t) {
            var n, i, r;
            if (t)
                for (n = 0, i = e.length; i > n; n++) r = e.at(n), r.hasSubgroups ? k(r.items, t) : r.items = new je(r.items, t)
        }

        function x(e, t) {
            for (var n = 0, i = e.length; i > n; n++)
                if (e[n].hasSubgroups) {
                    if (x(e[n].items, t)) return !0
                } else if (t(e[n].items, e[n])) return !0
        }

        function C(e, t, n, i) {
            for (var r = 0; e.length > r && e[r].data !== t && !S(e[r].data, n, i); r++);
        }

        function S(e, t, n) {
            for (var i = 0, r = e.length; r > i; i++) {
                if (e[i] && e[i].hasSubgroups) return S(e[i].items, t, n);
                if (e[i] === t || e[i] === n) return e[i] = n, !0
            }
        }

        function T(e, n, i, r, o) {
            var a, s, l, c;
            for (a = 0, s = e.length; s > a; a++)
                if (l = e[a], l && !(l instanceof r))
                    if (l.hasSubgroups === t || o) {
                        for (c = 0; n.length > c; c++)
                            if (n[c] === l) {
                                e[a] = n.at(c), C(i, n, l, e[a]);
                                break
                            }
                    } else T(l.items, n, i, r, o)
        }

        function D(e, t) {
            var n, i, r;
            for (n = 0, i = e.length; i > n; n++)
                if (r = e.at(n), r.uid == t.uid) return e.splice(n, 1), r
        }

        function A(e, t) {
            return t ? M(e, function(e) {
                return e.uid && e.uid == t.uid || e[t.idField] === t.id && t.id !== t._defaultId
            }) : -1
        }

        function E(e, t) {
            return t ? M(e, function(e) {
                return e.uid == t.uid
            }) : -1
        }

        function M(e, t) {
            var n, i;
            for (n = 0, i = e.length; i > n; n++)
                if (t(e[n])) return n;
            return -1
        }

        function F(e, t) {
            var n, i;
            return e && !ie(e) ? (n = e[t], i = ne(n) ? n.from || n.field || t : e[t] || t, ue(i) ? t : i) : t
        }

        function I(e, t) {
            var n, i, r, o = {};
            for (r in e) "filters" !== r && (o[r] = e[r]);
            if (e.filters)
                for (o.filters = [], n = 0, i = e.filters.length; i > n; n++) o.filters[n] = I(e.filters[n], t);
            else o.field = F(t.fields, o.field);
            return o
        }

        function R(e, t) {
            var n, i, r, o, a, s = [];
            for (n = 0, i = e.length; i > n; n++) {
                r = {}, o = e[n];
                for (a in o) r[a] = o[a];
                r.field = F(t.fields, r.field), r.aggregates && re(r.aggregates) && (r.aggregates = R(r.aggregates, t)), s.push(r)
            }
            return s
        }

        function P(t, n) {
            var i, r, o, a, s, l, c, u, d, h;
            for (t = e(t)[0], i = t.options, r = n[0], o = n[1], a = [], s = 0, l = i.length; l > s; s++) d = {}, u = i[s], c = u.parentNode, c === t && (c = null), u.disabled || c && c.disabled || (c && (d.optgroup = c.label), d[r.field] = u.text, h = u.attributes.value, h = h && h.specified ? u.value : u.text, d[o.field] = h, a.push(d));
            return a
        }

        function z(t, n) {
            var i, r, o, a, s, l, c, u = e(t)[0].tBodies[0],
                d = u ? u.rows : [],
                h = n.length,
                f = [];
            for (i = 0, r = d.length; r > i; i++) {
                for (s = {}, c = !0, a = d[i].cells, o = 0; h > o; o++) l = a[o], "th" !== l.nodeName.toLowerCase() && (c = !1, s[n[o].field] = l.innerHTML);
                c || f.push(s)
            }
            return f
        }

        function B(e) {
            return function() {
                var t = this._data,
                    n = Y.fn[e].apply(this, Be.call(arguments));
                return this._data != t && this._attachBubbleHandlers(), n
            }
        }

        function L(t, n) {
            function i(e, t) {
                return e.filter(t).add(e.find(t))
            }
            var r, o, a, s, l, c, u, d, h = e(t).children(),
                f = [],
                p = n[0].field,
                g = n[1] && n[1].field,
                m = n[2] && n[2].field,
                v = n[3] && n[3].field;
            for (r = 0, o = h.length; o > r; r++) a = {
                _loaded: !0
            }, s = h.eq(r), c = s[0].firstChild, d = s.children(), t = d.filter("ul"), d = d.filter(":not(ul)"), l = s.attr("data-id"), l && (a.id = l), c && (a[p] = 3 == c.nodeType ? c.nodeValue : d.text()), g && (a[g] = i(d, "a").attr("href")), v && (a[v] = i(d, "img").attr("src")), m && (u = i(d, ".k-sprite").prop("className"), a[m] = u && e.trim(u.replace("k-sprite", ""))), t.length && (a.items = L(t.eq(0), n)), "true" == s.attr("data-hasChildren") && (a.hasChildren = !0), f.push(a);
            return f
        }
        var H, N, O, V, U, W, j, q, G, $, Y, K, Q, X, J, Z, ee = e.extend,
            te = e.proxy,
            ne = e.isPlainObject,
            ie = e.isEmptyObject,
            re = e.isArray,
            oe = e.grep,
            ae = e.ajax,
            se = e.each,
            le = e.noop,
            ce = window.kendo,
            ue = ce.isFunction,
            de = ce.Observable,
            he = ce.Class,
            fe = "string",
            pe = "function",
            ge = "create",
            me = "read",
            ve = "update",
            _e = "destroy",
            be = "change",
            we = "sync",
            ye = "get",
            ke = "error",
            xe = "requestStart",
            Ce = "progress",
            Se = "requestEnd",
            Te = [ge, me, ve, _e],
            De = function(e) {
                return e
            },
            Ae = ce.getter,
            Ee = ce.stringify,
            Me = Math,
            Fe = [].push,
            Ie = [].join,
            Re = [].pop,
            Pe = [].splice,
            ze = [].shift,
            Be = [].slice,
            Le = [].unshift,
            He = {}.toString,
            Ne = ce.support.stableSort,
            Oe = /^\/Date\((.*?)\)\/$/,
            Ve = /(\r+|\n+)/g,
            Ue = /(?=['\\])/g,
            We = de.extend({
                init: function(e, t) {
                    var n = this;
                    n.type = t || qe, de.fn.init.call(n), n.length = e.length, n.wrapAll(e, n)
                },
                at: function(e) {
                    return this[e]
                },
                toJSON: function() {
                    var e, t, n = this.length,
                        i = Array(n);
                    for (e = 0; n > e; e++) t = this[e], t instanceof qe && (t = t.toJSON()), i[e] = t;
                    return i
                },
                parent: le,
                wrapAll: function(e, t) {
                    var n, i, r = this,
                        o = function() {
                            return r
                        };
                    for (t = t || [], n = 0, i = e.length; i > n; n++) t[n] = r.wrap(e[n], o);
                    return t
                },
                wrap: function(e, t) {
                    var n, i = this;
                    return null !== e && "[object Object]" === He.call(e) && (n = e instanceof i.type || e instanceof Ye, n || (e = e instanceof qe ? e.toJSON() : e, e = new i.type(e)), e.parent = t, e.bind(be, function(e) {
                        i.trigger(be, {
                            field: e.field,
                            node: e.node,
                            index: e.index,
                            items: e.items || [this],
                            action: e.node ? e.action || "itemloaded" : "itemchange"
                        })
                    })), e
                },
                push: function() {
                    var e, t = this.length,
                        n = this.wrapAll(arguments);
                    return e = Fe.apply(this, n), this.trigger(be, {
                        action: "add",
                        index: t,
                        items: n
                    }), e
                },
                slice: Be,
                sort: [].sort,
                join: Ie,
                pop: function() {
                    var e = this.length,
                        t = Re.apply(this);
                    return e && this.trigger(be, {
                        action: "remove",
                        index: e - 1,
                        items: [t]
                    }), t
                },
                splice: function(e, t, n) {
                    var i, r, o, a = this.wrapAll(Be.call(arguments, 2));
                    if (i = Pe.apply(this, [e, t].concat(a)), i.length)
                        for (this.trigger(be, {
                                action: "remove",
                                index: e,
                                items: i
                            }), r = 0, o = i.length; o > r; r++) i[r] && i[r].children && i[r].unbind(be);
                    return n && this.trigger(be, {
                        action: "add",
                        index: e,
                        items: a
                    }), i
                },
                shift: function() {
                    var e = this.length,
                        t = ze.apply(this);
                    return e && this.trigger(be, {
                        action: "remove",
                        index: 0,
                        items: [t]
                    }), t
                },
                unshift: function() {
                    var e, t = this.wrapAll(arguments);
                    return e = Le.apply(this, t), this.trigger(be, {
                        action: "add",
                        index: 0,
                        items: t
                    }), e
                },
                indexOf: function(e) {
                    var t, n, i = this;
                    for (t = 0, n = i.length; n > t; t++)
                        if (i[t] === e) return t;
                    return -1
                },
                forEach: function(e) {
                    for (var t = 0, n = this.length; n > t; t++) e(this[t], t, this)
                },
                map: function(e) {
                    for (var t = 0, n = [], i = this.length; i > t; t++) n[t] = e(this[t], t, this);
                    return n
                },
                reduce: function(e) {
                    var t, n = 0,
                        i = this.length;
                    for (2 == arguments.length ? t = arguments[1] : i > n && (t = this[n++]); i > n; n++) t = e(t, this[n], n, this);
                    return t
                },
                reduceRight: function(e) {
                    var t, n = this.length - 1;
                    for (2 == arguments.length ? t = arguments[1] : n > 0 && (t = this[n--]); n >= 0; n--) t = e(t, this[n], n, this);
                    return t
                },
                filter: function(e) {
                    for (var t, n = 0, i = [], r = this.length; r > n; n++) t = this[n], e(t, n, this) && (i[i.length] = t);
                    return i
                },
                find: function(e) {
                    for (var t, n = 0, i = this.length; i > n; n++)
                        if (t = this[n], e(t, n, this)) return t
                },
                every: function(e) {
                    for (var t, n = 0, i = this.length; i > n; n++)
                        if (t = this[n], !e(t, n, this)) return !1;
                    return !0
                },
                some: function(e) {
                    for (var t, n = 0, i = this.length; i > n; n++)
                        if (t = this[n], e(t, n, this)) return !0;
                    return !1
                },
                remove: function(e) {
                    var t = this.indexOf(e); - 1 !== t && this.splice(t, 1)
                },
                empty: function() {
                    this.splice(0, this.length)
                }
            }),
            je = We.extend({
                init: function(e, t) {
                    de.fn.init.call(this), this.type = t || qe;
                    for (var n = 0; e.length > n; n++) this[n] = e[n];
                    this.length = n, this._parent = te(function() {
                        return this
                    }, this)
                },
                at: function(e) {
                    var t = this[e];
                    return t instanceof this.type ? t.parent = this._parent : t = this[e] = this.wrap(t, this._parent), t
                }
            }),
            qe = de.extend({
                init: function(e) {
                    var t, n, i = this,
                        r = function() {
                            return i
                        };
                    de.fn.init.call(this), this._handlers = {};
                    for (n in e) t = e[n], "object" == typeof t && t && !t.getTime && "_" != n.charAt(0) && (t = i.wrap(t, n, r)), i[n] = t;
                    i.uid = ce.guid()
                },
                shouldSerialize: function(e) {
                    return this.hasOwnProperty(e) && "_handlers" !== e && "_events" !== e && typeof this[e] !== pe && "uid" !== e
                },
                forEach: function(e) {
                    for (var t in this) this.shouldSerialize(t) && e(this[t], t)
                },
                toJSON: function() {
                    var e, t, n = {};
                    for (t in this) this.shouldSerialize(t) && (e = this[t], (e instanceof qe || e instanceof We) && (e = e.toJSON()), n[t] = e);
                    return n
                },
                get: function(e) {
                    var t, n = this;
                    return n.trigger(ye, {
                        field: e
                    }), t = "this" === e ? n : ce.getter(e, !0)(n)
                },
                _set: function(e, t) {
                    var n, i, r, o = this,
                        a = e.indexOf(".") >= 0;
                    if (a)
                        for (n = e.split("."), i = ""; n.length > 1;) {
                            if (i += n.shift(), r = ce.getter(i, !0)(o), r instanceof qe) return r.set(n.join("."), t), a;
                            i += "."
                        }
                    return ce.setter(e)(o, t), a
                },
                set: function(e, t) {
                    var n = this,
                        i = e.indexOf(".") >= 0,
                        r = ce.getter(e, !0)(n);
                    r !== t && (r instanceof de && this._handlers[e] && (this._handlers[e].get && r.unbind(ye, this._handlers[e].get), r.unbind(be, this._handlers[e].change)), n.trigger("set", {
                        field: e,
                        value: t
                    }) || (i || (t = n.wrap(t, e, function() {
                        return n
                    })), (!n._set(e, t) || e.indexOf("(") >= 0 || e.indexOf("[") >= 0) && n.trigger(be, {
                        field: e
                    })))
                },
                parent: le,
                wrap: function(e, t, i) {
                    var r, o, a, s, l = this,
                        c = He.call(e);
                    return null == e || "[object Object]" !== c && "[object Array]" !== c || (a = e instanceof We, s = e instanceof Y, "[object Object]" !== c || s || a ? ("[object Array]" === c || a || s) && (a || s || (e = new We(e)), o = n(l, be, t, !1), e.bind(be, o), l._handlers[t] = {
                        change: o
                    }) : (e instanceof qe || (e = new qe(e)), r = n(l, ye, t, !0), e.bind(ye, r), o = n(l, be, t, !0), e.bind(be, o), l._handlers[t] = {
                        get: r,
                        change: o
                    }), e.parent = i), e
                }
            }),
            Ge = {
                number: function(e) {
                    return ce.parseFloat(e)
                },
                date: function(e) {
                    return ce.parseDate(e)
                },
                "boolean": function(e) {
                    return typeof e === fe ? "true" === e.toLowerCase() : null != e ? !!e : e
                },
                string: function(e) {
                    return null != e ? e + "" : e
                },
                "default": function(e) {
                    return e
                }
            },
            $e = {
                string: "",
                number: 0,
                date: new Date,
                "boolean": !1,
                "default": ""
            },
            Ye = qe.extend({
                init: function(n) {
                    var i, r, o = this;
                    if ((!n || e.isEmptyObject(n)) && (n = e.extend({}, o.defaults, n), o._initializers))
                        for (i = 0; o._initializers.length > i; i++) r = o._initializers[i], n[r] = o.defaults[r]();
                    qe.fn.init.call(o, n), o.dirty = !1, o.idField && (o.id = o.get(o.idField), o.id === t && (o.id = o._defaultId))
                },
                shouldSerialize: function(e) {
                    return qe.fn.shouldSerialize.call(this, e) && "uid" !== e && !("id" !== this.idField && "id" === e) && "dirty" !== e && "_accessors" !== e
                },
                _parse: function(e, t) {
                    var n, i = this,
                        o = e,
                        a = i.fields || {};
                    return e = a[e], e || (e = r(a, o)), e && (n = e.parse, !n && e.type && (n = Ge[e.type.toLowerCase()])), n ? n(t) : t
                },
                _notifyChange: function(e) {
                    var t = e.action;
                    ("add" == t || "remove" == t) && (this.dirty = !0)
                },
                editable: function(e) {
                    return e = (this.fields || {})[e], e ? e.editable !== !1 : !0
                },
                set: function(e, t, n) {
                    var r = this;
                    r.editable(e) && (t = r._parse(e, t), i(t, r.get(e)) || (r.dirty = !0, qe.fn.set.call(r, e, t, n)))
                },
                accept: function(e) {
                    var t, n, i = this,
                        r = function() {
                            return i
                        };
                    for (t in e) n = e[t], "_" != t.charAt(0) && (n = i.wrap(e[t], t, r)), i._set(t, n);
                    i.idField && (i.id = i.get(i.idField)), i.dirty = !1
                },
                isNew: function() {
                    return this.id === this._defaultId
                }
            });
        Ye.define = function(e, n) {
            n === t && (n = e, e = Ye);
            var i, r, o, a, s, l, c, u, d = ee({
                    defaults: {}
                }, n),
                h = {},
                f = d.id,
                p = [];
            if (f && (d.idField = f), d.id && delete d.id, f && (d.defaults[f] = d._defaultId = ""), "[object Array]" === He.call(d.fields)) {
                for (l = 0, c = d.fields.length; c > l; l++) o = d.fields[l], typeof o === fe ? h[o] = {} : o.field && (h[o.field] = o);
                d.fields = h
            }
            for (r in d.fields) o = d.fields[r], a = o.type || "default", s = null, u = r, r = typeof o.field === fe ? o.field : r, o.nullable || (s = d.defaults[u !== r ? u : r] = o.defaultValue !== t ? o.defaultValue : $e[a.toLowerCase()], "function" == typeof s && p.push(r)), n.id === r && (d._defaultId = s), d.defaults[u !== r ? u : r] = s, o.parse = o.parse || Ge[a];
            return p.length > 0 && (d._initializers = p), i = e.extend(d), i.define = function(e) {
                return Ye.define(i, e)
            }, d.fields && (i.fields = d.fields, i.idField = d.idField), i
        }, N = {
            selector: function(e) {
                return ue(e) ? e : Ae(e)
            },
            compare: function(e) {
                var t = this.selector(e);
                return function(e, n) {
                    return e = t(e), n = t(n), null == e && null == n ? 0 : null == e ? -1 : null == n ? 1 : e.localeCompare ? e.localeCompare(n) : e > n ? 1 : n > e ? -1 : 0
                }
            },
            create: function(e) {
                var t = e.compare || this.compare(e.field);
                return "desc" == e.dir ? function(e, n) {
                    return t(n, e, !0)
                } : t
            },
            combine: function(e) {
                return function(t, n) {
                    var i, r, o = e[0](t, n);
                    for (i = 1, r = e.length; r > i; i++) o = o || e[i](t, n);
                    return o
                }
            }
        }, O = ee({}, N, {
            asc: function(e) {
                var t = this.selector(e);
                return function(e, n) {
                    var i = t(e),
                        r = t(n);
                    return i && i.getTime && r && r.getTime && (i = i.getTime(), r = r.getTime()), i === r ? e.__position - n.__position : null == i ? -1 : null == r ? 1 : i.localeCompare ? i.localeCompare(r) : i > r ? 1 : -1
                }
            },
            desc: function(e) {
                var t = this.selector(e);
                return function(e, n) {
                    var i = t(e),
                        r = t(n);
                    return i && i.getTime && r && r.getTime && (i = i.getTime(), r = r.getTime()), i === r ? e.__position - n.__position : null == i ? 1 : null == r ? -1 : r.localeCompare ? r.localeCompare(i) : r > i ? 1 : -1
                }
            },
            create: function(e) {
                return this[e.dir](e.field)
            }
        }), H = function(e, t) {
            var n, i = e.length,
                r = Array(i);
            for (n = 0; i > n; n++) r[n] = t(e[n], n, e);
            return r
        }, V = function() {
            function e(e) {
                return e.replace(Ue, "\\").replace(Ve, "")
            }

            function t(t, n, i, r) {
                var o;
                return null != i && (typeof i === fe && (i = e(i), o = Oe.exec(i), o ? i = new Date(+o[1]) : r ? (i = "'" + i.toLowerCase() + "'", n = "(" + n + " || '').toLowerCase()") : i = "'" + i + "'"), i.getTime && (n = "(" + n + "?" + n + ".getTime():" + n + ")", i = i.getTime())), n + " " + t + " " + i
            }
            return {
                quote: function(t) {
                    return t && t.getTime ? "new Date(" + t.getTime() + ")" : "string" == typeof t ? "'" + e(t) + "'" : "" + t
                },
                eq: function(e, n, i) {
                    return t("==", e, n, i)
                },
                neq: function(e, n, i) {
                    return t("!=", e, n, i)
                },
                gt: function(e, n, i) {
                    return t(">", e, n, i)
                },
                gte: function(e, n, i) {
                    return t(">=", e, n, i)
                },
                lt: function(e, n, i) {
                    return t("<", e, n, i)
                },
                lte: function(e, n, i) {
                    return t("<=", e, n, i)
                },
                startswith: function(t, n, i) {
                    return i && (t = "(" + t + " || '').toLowerCase()", n && (n = n.toLowerCase())), n && (n = e(n)), t + ".lastIndexOf('" + n + "', 0) == 0"
                },
                doesnotstartwith: function(t, n, i) {
                    return i && (t = "(" + t + " || '').toLowerCase()", n && (n = n.toLowerCase())), n && (n = e(n)), t + ".lastIndexOf('" + n + "', 0) == -1"
                },
                endswith: function(t, n, i) {
                    return i && (t = "(" + t + " || '').toLowerCase()", n && (n = n.toLowerCase())), n && (n = e(n)), t + ".indexOf('" + n + "', " + t + ".length - " + (n || "").length + ") >= 0"
                },
                doesnotendwith: function(t, n, i) {
                    return i && (t = "(" + t + " || '').toLowerCase()", n && (n = n.toLowerCase())), n && (n = e(n)), t + ".indexOf('" + n + "', " + t + ".length - " + (n || "").length + ") < 0"
                },
                contains: function(t, n, i) {
                    return i && (t = "(" + t + " || '').toLowerCase()", n && (n = n.toLowerCase())), n && (n = e(n)), t + ".indexOf('" + n + "') >= 0"
                },
                doesnotcontain: function(t, n, i) {
                    return i && (t = "(" + t + " || '').toLowerCase()", n && (n = n.toLowerCase())), n && (n = e(n)), t + ".indexOf('" + n + "') == -1"
                }
            }
        }(), o.filterExpr = function(e) {
            var n, i, r, a, s, l, c = [],
                u = {
                    and: " && ",
                    or: " || "
                },
                d = [],
                h = [],
                f = e.filters;
            for (n = 0, i = f.length; i > n; n++) r = f[n], s = r.field, l = r.operator, r.filters ? (a = o.filterExpr(r), r = a.expression.replace(/__o\[(\d+)\]/g, function(e, t) {
                return t = +t, "__o[" + (h.length + t) + "]"
            }).replace(/__f\[(\d+)\]/g, function(e, t) {
                return t = +t, "__f[" + (d.length + t) + "]"
            }), h.push.apply(h, a.operators), d.push.apply(d, a.fields)) : (typeof s === pe ? (a = "__f[" + d.length + "](d)", d.push(s)) : a = ce.expr(s), typeof l === pe ? (r = "__o[" + h.length + "](" + a + ", " + V.quote(r.value) + ")", h.push(l)) : r = V[(l || "eq").toLowerCase()](a, r.value, r.ignoreCase !== t ? r.ignoreCase : !0)), c.push(r);
            return {
                expression: "(" + c.join(u[e.logic]) + ")",
                fields: d,
                operators: h
            }
        }, U = {
            "==": "eq",
            equals: "eq",
            isequalto: "eq",
            equalto: "eq",
            equal: "eq",
            "!=": "neq",
            ne: "neq",
            notequals: "neq",
            isnotequalto: "neq",
            notequalto: "neq",
            notequal: "neq",
            "<": "lt",
            islessthan: "lt",
            lessthan: "lt",
            less: "lt",
            "<=": "lte",
            le: "lte",
            islessthanorequalto: "lte",
            lessthanequal: "lte",
            ">": "gt",
            isgreaterthan: "gt",
            greaterthan: "gt",
            greater: "gt",
            ">=": "gte",
            isgreaterthanorequalto: "gte",
            greaterthanequal: "gte",
            ge: "gte",
            notsubstringof: "doesnotcontain"
        }, o.normalizeFilter = l, o.prototype = {
            toArray: function() {
                return this.data
            },
            range: function(e, t) {
                return new o(this.data.slice(e, e + t))
            },
            skip: function(e) {
                return new o(this.data.slice(e))
            },
            take: function(e) {
                return new o(this.data.slice(0, e))
            },
            select: function(e) {
                return new o(H(this.data, e))
            },
            order: function(e, t) {
                var n = {
                    dir: t
                };
                return e && (e.compare ? n.compare = e.compare : n.field = e), new o(this.data.slice(0).sort(N.create(n)))
            },
            orderBy: function(e) {
                return this.order(e, "asc")
            },
            orderByDescending: function(e) {
                return this.order(e, "desc")
            },
            sort: function(e, t, n) {
                var i, r, o = a(e, t),
                    s = [];
                if (n = n || N, o.length) {
                    for (i = 0, r = o.length; r > i; i++) s.push(n.create(o[i]));
                    return this.orderBy({
                        compare: n.combine(s)
                    })
                }
                return this
            },
            filter: function(e) {
                var t, n, i, r, a, s, c, u, d = this.data,
                    h = [];
                if (e = l(e), !e || 0 === e.filters.length) return this;
                for (r = o.filterExpr(e), s = r.fields, c = r.operators, a = u = Function("d, __f, __o", "return " + r.expression), (s.length || c.length) && (u = function(e) {
                        return a(e, s, c)
                    }), t = 0, i = d.length; i > t; t++) n = d[t], u(n) && h.push(n);
                return new o(h)
            },
            group: function(e, t) {
                e = u(e || []), t = t || this.data;
                var n, i = this,
                    r = new o(i.data);
                return e.length > 0 && (n = e[0], r = r.groupBy(n).select(function(i) {
                    var r = new o(t).filter([{
                        field: i.field,
                        operator: "eq",
                        value: i.value,
                        ignoreCase: !1
                    }]);
                    return {
                        field: i.field,
                        value: i.value,
                        items: e.length > 1 ? new o(i.items).group(e.slice(1), r.toArray()).toArray() : i.items,
                        hasSubgroups: e.length > 1,
                        aggregates: r.aggregate(n.aggregates)
                    }
                })), r
            },
            groupBy: function(e) {
                if (ie(e) || !this.data.length) return new o([]);
                var t, n, i, r, a = e.field,
                    s = this._sortForGrouping(a, e.dir || "asc"),
                    l = ce.accessor(a),
                    c = l.get(s[0], a),
                    u = {
                        field: a,
                        value: c,
                        items: []
                    },
                    h = [u];
                for (i = 0, r = s.length; r > i; i++) t = s[i], n = l.get(t, a), d(c, n) || (c = n, u = {
                    field: a,
                    value: c,
                    items: []
                }, h.push(u)), u.items.push(t);
                return new o(h)
            },
            _sortForGrouping: function(e, t) {
                var n, i, r = this.data;
                if (!Ne) {
                    for (n = 0, i = r.length; i > n; n++) r[n].__position = n;
                    for (r = new o(r).sort(e, t, O).toArray(), n = 0, i = r.length; i > n; n++) delete r[n].__position;
                    return r
                }
                return this.sort(e, t).toArray()
            },
            aggregate: function(e) {
                var t, n, i = {},
                    r = {};
                if (e && e.length)
                    for (t = 0, n = this.data.length; n > t; t++) h(i, e, this.data[t], t, n, r);
                return i
            }
        }, W = {
            sum: function(e, t, n) {
                var i = n.get(t);
                return f(e) ? f(i) && (e += i) : e = i, e
            },
            count: function(e) {
                return (e || 0) + 1
            },
            average: function(e, n, i, r, o, a) {
                var s = i.get(n);
                return a.count === t && (a.count = 0), f(e) ? f(s) && (e += s) : e = s, f(s) && a.count++, r == o - 1 && f(e) && (e /= a.count), e
            },
            max: function(e, t, n) {
                var i = n.get(t);
                return f(e) || p(e) || (e = i), i > e && (f(i) || p(i)) && (e = i), e
            },
            min: function(e, t, n) {
                var i = n.get(t);
                return f(e) || p(e) || (e = i), e > i && (f(i) || p(i)) && (e = i), e
            }
        }, o.process = function(e, n) {
            n = n || {};
            var i, r = new o(e),
                s = n.group,
                l = u(s || []).concat(a(n.sort || [])),
                c = n.filterCallback,
                d = n.filter,
                h = n.skip,
                f = n.take;
            return d && (r = r.filter(d), c && (r = c(r)), i = r.toArray().length), l && (r = r.sort(l), s && (e = r.toArray())), h !== t && f !== t && (r = r.range(h, f)), s && (r = r.group(s, e)), {
                total: i,
                data: r.toArray()
            }
        }, j = he.extend({
            init: function(e) {
                this.data = e.data
            },
            read: function(e) {
                e.success(this.data)
            },
            update: function(e) {
                e.success(e.data)
            },
            create: function(e) {
                e.success(e.data)
            },
            destroy: function(e) {
                e.success(e.data)
            }
        }), q = he.extend({
            init: function(e) {
                var t, n = this;
                e = n.options = ee({}, n.options, e), se(Te, function(t, n) {
                    typeof e[n] === fe && (e[n] = {
                        url: e[n]
                    })
                }), n.cache = e.cache ? G.create(e.cache) : {
                    find: le,
                    add: le
                }, t = e.parameterMap, ue(e.push) && (n.push = e.push), n.push || (n.push = De), n.parameterMap = ue(t) ? t : function(e) {
                    var n = {};
                    return se(e, function(e, i) {
                        e in t && (e = t[e], ne(e) && (i = e.value(i), e = e.key)), n[e] = i
                    }), n
                }
            },
            options: {
                parameterMap: De
            },
            create: function(e) {
                return ae(this.setup(e, ge))
            },
            read: function(n) {
                var i, r, o, a = this,
                    s = a.cache;
                n = a.setup(n, me), i = n.success || le, r = n.error || le, o = s.find(n.data), o !== t ? i(o) : (n.success = function(e) {
                    s.add(n.data, e), i(e)
                }, e.ajax(n))
            },
            update: function(e) {
                return ae(this.setup(e, ve))
            },
            destroy: function(e) {
                return ae(this.setup(e, _e))
            },
            setup: function(e, t) {
                e = e || {};
                var n, i = this,
                    r = i.options[t],
                    o = ue(r.data) ? r.data(e.data) : r.data;
                return e = ee(!0, {}, r, e), n = ee(!0, {}, o, e.data), e.data = i.parameterMap(n, t), ue(e.url) && (e.url = e.url(n)), e
            }
        }), G = he.extend({
            init: function() {
                this._store = {}
            },
            add: function(e, n) {
                e !== t && (this._store[Ee(e)] = n)
            },
            find: function(e) {
                return this._store[Ee(e)]
            },
            clear: function() {
                this._store = {}
            },
            remove: function(e) {
                delete this._store[Ee(e)]
            }
        }), G.create = function(e) {
            var t = {
                inmemory: function() {
                    return new G
                }
            };
            return ne(e) && ue(e.find) ? e : e === !0 ? new G : t[e]()
        }, $ = he.extend({
            init: function(e) {
                var t, n, i, r, o, a, s, l, c, u, d, h, f, p = this;
                e = e || {};
                for (t in e) n = e[t], p[t] = typeof n === fe ? Ae(n) : n;
                r = e.modelBase || Ye, ne(p.model) && (p.model = i = r.define(p.model)), o = te(p.data, p), p._dataAccessFunction = o, p.model && (a = te(p.groups, p), s = te(p.serialize, p), l = {}, c = {}, u = {}, d = {}, h = !1, i = p.model, i.fields && (se(i.fields, function(e, t) {
                    var n;
                    f = e, ne(t) && t.field ? f = t.field : typeof t === fe && (f = t), ne(t) && t.from && (n = t.from), h = h || n && n !== e || f !== e, c[e] = Ae(n || f), u[e] = Ae(e), l[n || f] = e, d[e] = n || f
                }), !e.serialize && h && (p.serialize = b(s, i, m, u, l, d))), p._dataAccessFunction = o, p.data = b(o, i, v, c, l, d), p.groups = b(a, i, _, c, l, d))
            },
            errors: function(e) {
                return e ? e.errors : null
            },
            parse: De,
            data: De,
            total: function(e) {
                return e.length
            },
            groups: De,
            aggregates: function() {
                return {}
            },
            serialize: function(e) {
                return e
            }
        }), Y = de.extend({
            init: function(e) {
                var n, i, r, o = this;
                e && (i = e.data), e = o.options = ee({}, o.options, e), o._map = {}, o._prefetch = {}, o._data = [], o._pristineData = [], o._ranges = [], o._view = [], o._pristineTotal = 0, o._destroyed = [], o._pageSize = e.pageSize, o._page = e.page || (e.pageSize ? 1 : t), o._sort = a(e.sort), o._filter = l(e.filter), o._group = u(e.group), o._aggregate = e.aggregate, o._total = e.total, o._shouldDetachObservableParents = !0, de.fn.init.call(o), o.transport = K.create(e, i, o), ue(o.transport.push) && o.transport.push({
                    pushCreate: te(o._pushCreate, o),
                    pushUpdate: te(o._pushUpdate, o),
                    pushDestroy: te(o._pushDestroy, o)
                }), null != e.offlineStorage && ("string" == typeof e.offlineStorage ? (r = e.offlineStorage, o._storage = {
                    getItem: function() {
                        return JSON.parse(localStorage.getItem(r))
                    },
                    setItem: function(e) {
                        localStorage.setItem(r, Ee(o.reader.serialize(e)))
                    }
                }) : o._storage = e.offlineStorage), o.reader = new ce.data.readers[e.schema.type || "json"](e.schema), n = o.reader.model || {}, o._detachObservableParents(), o._data = o._observe(o._data), o._online = !0, o.bind(["push", ke, be, xe, we, Se, Ce], e)
            },
            options: {
                data: null,
                schema: {
                    modelBase: Ye
                },
                offlineStorage: null,
                serverSorting: !1,
                serverPaging: !1,
                serverFiltering: !1,
                serverGrouping: !1,
                serverAggregates: !1,
                batch: !1
            },
            clone: function() {
                return this
            },
            online: function(n) {
                return n !== t ? this._online != n && (this._online = n, n) ? this.sync() : e.Deferred().resolve().promise() : this._online
            },
            offlineData: function(e) {
                return null == this.options.offlineStorage ? null : e !== t ? this._storage.setItem(e) : this._storage.getItem() || []
            },
            _isServerGrouped: function() {
                var e = this.group() || [];
                return this.options.serverGrouping && e.length
            },
            _pushCreate: function(e) {
                this._push(e, "pushCreate")
            },
            _pushUpdate: function(e) {
                this._push(e, "pushUpdate")
            },
            _pushDestroy: function(e) {
                this._push(e, "pushDestroy")
            },
            _push: function(e, t) {
                var n = this._readData(e);
                n || (n = e), this[t](n)
            },
            _flatData: function(e, t) {
                if (e) {
                    if (this._isServerGrouped()) return y(e);
                    if (!t)
                        for (var n = 0; e.length > n; n++) e.at(n)
                }
                return e
            },
            parent: le,
            get: function(e) {
                var t, n, i = this._flatData(this._data);
                for (t = 0, n = i.length; n > t; t++)
                    if (i[t].id == e) return i[t]
            },
            getByUid: function(e) {
                var t, n, i = this._flatData(this._data);
                if (i)
                    for (t = 0, n = i.length; n > t; t++)
                        if (i[t].uid == e) return i[t]
            },
            indexOf: function(e) {
                return E(this._data, e)
            },
            at: function(e) {
                return this._data.at(e)
            },
            data: function(e) {
                var n, i = this;
                if (e === t) {
                    if (i._data)
                        for (n = 0; i._data.length > n; n++) i._data.at(n);
                    return i._data
                }
                i._detachObservableParents(), i._data = this._observe(e), i._pristineData = e.slice(0), i._storeData(), i._ranges = [], i.trigger("reset"), i._addRange(i._data), i._total = i._data.length, i._pristineTotal = i._total, i._process(i._data)
            },
            view: function(e) {
                return e === t ? this._view : (this._view = this._observeView(e), t)
            },
            _observeView: function(e) {
                var t, n = this;
                return T(e, n._data, n._ranges, n.reader.model || qe, n._isServerGrouped()), t = new je(e, n.reader.model), t.parent = function() {
                    return n.parent()
                }, t
            },
            flatView: function() {
                var e = this.group() || [];
                return e.length ? y(this._view) : this._view
            },
            add: function(e) {
                return this.insert(this._data.length, e)
            },
            _createNewModel: function(e) {
                return this.reader.model ? new this.reader.model(e) : e instanceof qe ? e : new qe(e)
            },
            insert: function(e, t) {
                return t || (t = e, e = 0), t instanceof Ye || (t = this._createNewModel(t)), this._isServerGrouped() ? this._data.splice(e, 0, this._wrapInEmptyGroup(t)) : this._data.splice(e, 0, t), t
            },
            pushCreate: function(e) {
                var t, n, i, r, o, a;
                re(e) || (e = [e]), t = [], n = this.options.autoSync, this.options.autoSync = !1;
                try {
                    for (i = 0; e.length > i; i++) r = e[i], o = this.add(r), t.push(o), a = o.toJSON(), this._isServerGrouped() && (a = this._wrapInEmptyGroup(a)), this._pristineData.push(a)
                } finally {
                    this.options.autoSync = n
                }
                t.length && this.trigger("push", {
                    type: "create",
                    items: t
                })
            },
            pushUpdate: function(e) {
                var t, n, i, r, o;
                for (re(e) || (e = [e]), t = [], n = 0; e.length > n; n++) i = e[n], r = this._createNewModel(i), o = this.get(r.id), o ? (t.push(o), o.accept(i), o.trigger(be), this._updatePristineForModel(o, i)) : this.pushCreate(i);
                t.length && this.trigger("push", {
                    type: "update",
                    items: t
                })
            },
            pushDestroy: function(e) {
                var t = this._removeItems(e);
                t.length && this.trigger("push", {
                    type: "destroy",
                    items: t
                })
            },
            _removeItems: function(e) {
                var t, n, i, r, o, a;
                re(e) || (e = [e]), t = [], n = this.options.autoSync, this.options.autoSync = !1;
                try {
                    for (i = 0; e.length > i; i++) r = e[i], o = this._createNewModel(r), a = !1, this._eachItem(this._data, function(e) {
                        var n, i;
                        for (n = 0; e.length > n; n++)
                            if (i = e.at(n), i.id === o.id) {
                                t.push(i), e.splice(n, 1), a = !0;
                                break
                            }
                    }), a && (this._removePristineForModel(o), this._destroyed.pop())
                } finally {
                    this.options.autoSync = n
                }
                return t
            },
            remove: function(e) {
                var n, i = this,
                    r = i._isServerGrouped();
                return this._eachItem(i._data, function(o) {
                    return n = D(o, e), n && r ? (n.isNew && n.isNew() || i._destroyed.push(n), !0) : t
                }), this._removeModelFromRanges(e), this._updateRangesLength(), e
            },
            destroyed: function() {
                return this._destroyed
            },
            created: function() {
                var e, t, n = [],
                    i = this._flatData(this._data);
                for (e = 0, t = i.length; t > e; e++) i[e].isNew && i[e].isNew() && n.push(i[e]);
                return n
            },
            updated: function() {
                var e, t, n = [],
                    i = this._flatData(this._data);
                for (e = 0, t = i.length; t > e; e++) i[e].isNew && !i[e].isNew() && i[e].dirty && n.push(i[e]);
                return n
            },
            sync: function() {
                var t, n = this,
                    i = [],
                    r = [],
                    o = n._destroyed,
                    a = e.Deferred().resolve().promise();
                if (n.online()) {
                    if (!n.reader.model) return a;
                    i = n.created(), r = n.updated(), t = [], n.options.batch && n.transport.submit ? t = n._sendSubmit(i, r, o) : (t.push.apply(t, n._send("create", i)), t.push.apply(t, n._send("update", r)), t.push.apply(t, n._send("destroy", o))), a = e.when.apply(null, t).then(function() {
                        var e, t;
                        for (e = 0, t = arguments.length; t > e; e++) n._accept(arguments[e]);
                        n._storeData(!0), n._change({
                            action: "sync"
                        }), n.trigger(we)
                    })
                } else n._storeData(!0), n._change({
                    action: "sync"
                });
                return a
            },
            cancelChanges: function(e) {
                var t = this;
                e instanceof ce.data.Model ? t._cancelModel(e) : (t._destroyed = [], t._detachObservableParents(), t._data = t._observe(t._pristineData), t.options.serverPaging && (t._total = t._pristineTotal), t._ranges = [], t._addRange(t._data), t._change())
            },
            hasChanges: function() {
                var e, t, n = this._flatData(this._data);
                if (this._destroyed.length) return !0;
                for (e = 0, t = n.length; t > e; e++)
                    if (n[e].isNew && n[e].isNew() || n[e].dirty) return !0;
                return !1
            },
            _accept: function(t) {
                var n, i = this,
                    r = t.models,
                    o = t.response,
                    a = 0,
                    s = i._isServerGrouped(),
                    l = i._pristineData,
                    c = t.type;
                if (i.trigger(Se, {
                        response: o,
                        type: c
                    }), o && !ie(o)) {
                    if (o = i.reader.parse(o), i._handleCustomErrors(o)) return;
                    o = i.reader.data(o), re(o) || (o = [o])
                } else o = e.map(r, function(e) {
                    return e.toJSON()
                });
                for ("destroy" === c && (i._destroyed = []), a = 0, n = r.length; n > a; a++) "destroy" !== c ? (r[a].accept(o[a]), "create" === c ? l.push(s ? i._wrapInEmptyGroup(r[a]) : o[a]) : "update" === c && i._updatePristineForModel(r[a], o[a])) : i._removePristineForModel(r[a])
            },
            _updatePristineForModel: function(e, t) {
                this._executeOnPristineForModel(e, function(e, n) {
                    ce.deepExtend(n[e], t)
                })
            },
            _executeOnPristineForModel: function(e, n) {
                this._eachPristineItem(function(i) {
                    var r = A(i, e);
                    return r > -1 ? (n(r, i), !0) : t
                })
            },
            _removePristineForModel: function(e) {
                this._executeOnPristineForModel(e, function(e, t) {
                    t.splice(e, 1)
                })
            },
            _readData: function(e) {
                var t = this._isServerGrouped() ? this.reader.groups : this.reader.data;
                return t.call(this.reader, e)
            },
            _eachPristineItem: function(e) {
                this._eachItem(this._pristineData, e)
            },
            _eachItem: function(e, t) {
                e && e.length && (this._isServerGrouped() ? x(e, t) : t(e))
            },
            _pristineForModel: function(e) {
                var n, i, r = function(r) {
                    return i = A(r, e), i > -1 ? (n = r[i], !0) : t
                };
                return this._eachPristineItem(r), n
            },
            _cancelModel: function(e) {
                var t = this._pristineForModel(e);
                this._eachItem(this._data, function(n) {
                    var i = E(n, e);
                    i >= 0 && (!t || e.isNew() && !t.__state__ ? n.splice(i, 1) : n[i].accept(t))
                })
            },
            _submit: function(t, n) {
                var i = this;
                i.trigger(xe, {
                    type: "submit"
                }), i.transport.submit(ee({
                    success: function(n, i) {
                        var r = e.grep(t, function(e) {
                            return e.type == i
                        })[0];
                        r && r.resolve({
                            response: n,
                            models: r.models,
                            type: i
                        })
                    },
                    error: function(e, n, r) {
                        for (var o = 0; t.length > o; o++) t[o].reject(e);
                        i.error(e, n, r)
                    }
                }, n))
            },
            _sendSubmit: function(t, n, i) {
                var r = this,
                    o = [];
                return r.options.batch && (t.length && o.push(e.Deferred(function(e) {
                    e.type = "create", e.models = t
                })), n.length && o.push(e.Deferred(function(e) {
                    e.type = "update", e.models = n
                })), i.length && o.push(e.Deferred(function(e) {
                    e.type = "destroy", e.models = i
                })), r._submit(o, {
                    data: {
                        created: r.reader.serialize(g(t)),
                        updated: r.reader.serialize(g(n)),
                        destroyed: r.reader.serialize(g(i))
                    }
                })), o
            },
            _promise: function(t, n, i) {
                var r = this;
                return e.Deferred(function(e) {
                    r.trigger(xe, {
                        type: i
                    }), r.transport[i].call(r.transport, ee({
                        success: function(t) {
                            e.resolve({
                                response: t,
                                models: n,
                                type: i
                            })
                        },
                        error: function(t, n, i) {
                            e.reject(t), r.error(t, n, i)
                        }
                    }, t))
                }).promise()
            },
            _send: function(e, t) {
                var n, i, r = this,
                    o = [],
                    a = r.reader.serialize(g(t));
                if (r.options.batch) t.length && o.push(r._promise({
                    data: {
                        models: a
                    }
                }, t, e));
                else
                    for (n = 0, i = t.length; i > n; n++) o.push(r._promise({
                        data: a[n]
                    }, [t[n]], e));
                return o
            },
            read: function(t) {
                var n = this,
                    i = n._params(t),
                    r = e.Deferred();
                return n._queueRequest(i, function() {
                    var e = n.trigger(xe, {
                        type: "read"
                    });
                    e ? (n._dequeueRequest(), r.resolve(e)) : (n.trigger(Ce), n._ranges = [], n.trigger("reset"), n.online() ? n.transport.read({
                        data: i,
                        success: function(e) {
                            n.success(e, i), r.resolve()
                        },
                        error: function() {
                            var e = Be.call(arguments);
                            n.error.apply(n, e), r.reject.apply(r, e)
                        }
                    }) : null != n.options.offlineStorage && (n.success(n.offlineData(), i), r.resolve()))
                }), r.promise()
            },
            _readAggregates: function(e) {
                return this.reader.aggregates(e)
            },
            success: function(e) {
                var n, i, r, o, a, s, l, c, u = this,
                    d = u.options;
                if (u.trigger(Se, {
                        response: e,
                        type: "read"
                    }), u.online()) {
                    if (e = u.reader.parse(e), u._handleCustomErrors(e)) return u._dequeueRequest(), t;
                    u._total = u.reader.total(e), u._aggregate && d.serverAggregates && (u._aggregateResult = u._readAggregates(e)), e = u._readData(e)
                } else {
                    for (e = u._readData(e), n = [], i = {}, r = u.reader.model, o = r ? r.idField : "id", a = 0; this._destroyed.length > a; a++) s = this._destroyed[a][o], i[s] = s;
                    for (a = 0; e.length > a; a++) l = e[a], c = l.__state__, "destroy" == c ? i[l[o]] || this._destroyed.push(this._createNewModel(l)) : n.push(l);
                    e = n, u._total = e.length
                }
                u._pristineTotal = u._total, u._pristineData = e.slice(0), u._detachObservableParents(), u._data = u._observe(e), null != u.options.offlineStorage && u._eachItem(u._data, function(e) {
                        var t, n;
                        for (t = 0; e.length > t; t++) n = e.at(t), "update" == n.__state__ && (n.dirty = !0)
                    }), u._storeData(), u._addRange(u._data), u._process(u._data),
                    u._dequeueRequest()
            },
            _detachObservableParents: function() {
                if (this._data && this._shouldDetachObservableParents)
                    for (var e = 0; this._data.length > e; e++) this._data[e].parent && (this._data[e].parent = le)
            },
            _storeData: function(e) {
                function t(e) {
                    var n, i, r, o = [];
                    for (n = 0; e.length > n; n++) i = e.at(n), r = i.toJSON(), a && i.items ? r.items = t(i.items) : (r.uid = i.uid, s && (i.isNew() ? r.__state__ = "create" : i.dirty && (r.__state__ = "update"))), o.push(r);
                    return o
                }
                var n, i, r, o, a = this._isServerGrouped(),
                    s = this.reader.model;
                if (null != this.options.offlineStorage) {
                    for (n = t(this._data), i = [], r = 0; this._destroyed.length > r; r++) o = this._destroyed[r].toJSON(), o.__state__ = "destroy", i.push(o);
                    this.offlineData(n.concat(i)), e && (this._pristineData = n)
                }
            },
            _addRange: function(e) {
                var t = this,
                    n = t._skip || 0,
                    i = n + t._flatData(e, !0).length;
                t._ranges.push({
                    start: n,
                    end: i,
                    data: e,
                    timestamp: (new Date).getTime()
                }), t._ranges.sort(function(e, t) {
                    return e.start - t.start
                })
            },
            error: function(e, t, n) {
                this._dequeueRequest(), this.trigger(Se, {}), this.trigger(ke, {
                    xhr: e,
                    status: t,
                    errorThrown: n
                })
            },
            _params: function(e) {
                var t = this,
                    n = ee({
                        take: t.take(),
                        skip: t.skip(),
                        page: t.page(),
                        pageSize: t.pageSize(),
                        sort: t._sort,
                        filter: t._filter,
                        group: t._group,
                        aggregate: t._aggregate
                    }, e);
                return t.options.serverPaging || (delete n.take, delete n.skip, delete n.page, delete n.pageSize), t.options.serverGrouping ? t.reader.model && n.group && (n.group = R(n.group, t.reader.model)) : delete n.group, t.options.serverFiltering ? t.reader.model && n.filter && (n.filter = I(n.filter, t.reader.model)) : delete n.filter, t.options.serverSorting ? t.reader.model && n.sort && (n.sort = R(n.sort, t.reader.model)) : delete n.sort, t.options.serverAggregates ? t.reader.model && n.aggregate && (n.aggregate = R(n.aggregate, t.reader.model)) : delete n.aggregate, n
            },
            _queueRequest: function(e, n) {
                var i = this;
                i._requestInProgress ? i._pending = {
                    callback: te(n, i),
                    options: e
                } : (i._requestInProgress = !0, i._pending = t, n())
            },
            _dequeueRequest: function() {
                var e = this;
                e._requestInProgress = !1, e._pending && e._queueRequest(e._pending.options, e._pending.callback)
            },
            _handleCustomErrors: function(e) {
                if (this.reader.errors) {
                    var t = this.reader.errors(e);
                    if (t) return this.trigger(ke, {
                        xhr: null,
                        status: "customerror",
                        errorThrown: "custom error",
                        errors: t
                    }), !0
                }
                return !1
            },
            _shouldWrap: function(e) {
                var t = this.reader.model;
                return t && e.length ? !(e[0] instanceof t) : !1
            },
            _observe: function(e) {
                var t, n = this,
                    i = n.reader.model;
                return n._shouldDetachObservableParents = !0, e instanceof We ? (n._shouldDetachObservableParents = !1, n._shouldWrap(e) && (e.type = n.reader.model, e.wrapAll(e, e))) : (t = n.pageSize() && !n.options.serverPaging ? je : We, e = new t(e, n.reader.model), e.parent = function() {
                    return n.parent()
                }), n._isServerGrouped() && k(e, i), n._changeHandler && n._data && n._data instanceof We ? n._data.unbind(be, n._changeHandler) : n._changeHandler = te(n._change, n), e.bind(be, n._changeHandler)
            },
            _updateTotalForAction: function(e, t) {
                var n = this,
                    i = parseInt(n._total, 10);
                f(n._total) || (i = parseInt(n._pristineTotal, 10)), "add" === e ? i += t.length : "remove" === e ? i -= t.length : "itemchange" === e || "sync" === e || n.options.serverPaging ? "sync" === e && (i = n._pristineTotal = parseInt(n._total, 10)) : i = n._pristineTotal, n._total = i
            },
            _change: function(e) {
                var t, n, i, r = this,
                    o = e ? e.action : "";
                if ("remove" === o)
                    for (t = 0, n = e.items.length; n > t; t++) e.items[t].isNew && e.items[t].isNew() || r._destroyed.push(e.items[t]);
                !r.options.autoSync || "add" !== o && "remove" !== o && "itemchange" !== o ? (r._updateTotalForAction(o, e ? e.items : []), r._process(r._data, e)) : (i = function(t) {
                    "sync" === t.action && (r.unbind("change", i), r._updateTotalForAction(o, e.items))
                }, r.first("change", i), r.sync())
            },
            _calculateAggregates: function(e, t) {
                t = t || {};
                var n = new o(e),
                    i = t.aggregate,
                    r = t.filter;
                return r && (n = n.filter(r)), n.aggregate(i)
            },
            _process: function(e, n) {
                var i, r = this,
                    o = {};
                r.options.serverPaging !== !0 && (o.skip = r._skip, o.take = r._take || r._pageSize, o.skip === t && r._page !== t && r._pageSize !== t && (o.skip = (r._page - 1) * r._pageSize)), r.options.serverSorting !== !0 && (o.sort = r._sort), r.options.serverFiltering !== !0 && (o.filter = r._filter), r.options.serverGrouping !== !0 && (o.group = r._group), r.options.serverAggregates !== !0 && (o.aggregate = r._aggregate, r._aggregateResult = r._calculateAggregates(e, o)), i = r._queryProcess(e, o), r.view(i.data), i.total === t || r.options.serverFiltering || (r._total = i.total), n = n || {}, n.items = n.items || r._view, r.trigger(be, n)
            },
            _queryProcess: function(e, t) {
                return o.process(e, t)
            },
            _mergeState: function(e) {
                var n = this;
                return e !== t && (n._pageSize = e.pageSize, n._page = e.page, n._sort = e.sort, n._filter = e.filter, n._group = e.group, n._aggregate = e.aggregate, n._skip = e.skip, n._take = e.take, n._skip === t && (n._skip = n.skip(), e.skip = n.skip()), n._take === t && n._pageSize !== t && (n._take = n._pageSize, e.take = n._take), e.sort && (n._sort = e.sort = a(e.sort)), e.filter && (n._filter = e.filter = l(e.filter)), e.group && (n._group = e.group = u(e.group)), e.aggregate && (n._aggregate = e.aggregate = c(e.aggregate))), e
            },
            query: function(n) {
                var i, r, o = this.options.serverSorting || this.options.serverPaging || this.options.serverFiltering || this.options.serverGrouping || this.options.serverAggregates;
                return o || (this._data === t || 0 === this._data.length) && !this._destroyed.length ? this.read(this._mergeState(n)) : (r = this.trigger(xe, {
                    type: "read"
                }), r || (this.trigger(Ce), i = this._queryProcess(this._data, this._mergeState(n)), this.options.serverFiltering || (this._total = i.total !== t ? i.total : this._data.length), this._aggregateResult = this._calculateAggregates(this._data, n), this.view(i.data), this.trigger(Se, {
                    type: "read"
                }), this.trigger(be, {
                    items: i.data
                })), e.Deferred().resolve(r).promise())
            },
            fetch: function(e) {
                var t = this,
                    n = function(n) {
                        n !== !0 && ue(e) && e.call(t)
                    };
                return this._query().then(n)
            },
            _query: function(e) {
                var t = this;
                return t.query(ee({}, {
                    page: t.page(),
                    pageSize: t.pageSize(),
                    sort: t.sort(),
                    filter: t.filter(),
                    group: t.group(),
                    aggregate: t.aggregate()
                }, e))
            },
            next: function(e) {
                var n = this,
                    i = n.page(),
                    r = n.total();
                return e = e || {}, !i || r && i + 1 > n.totalPages() ? t : (n._skip = i * n.take(), i += 1, e.page = i, n._query(e), i)
            },
            prev: function(e) {
                var n = this,
                    i = n.page();
                return e = e || {}, i && 1 !== i ? (n._skip = n._skip - n.take(), i -= 1, e.page = i, n._query(e), i) : t
            },
            page: function(e) {
                var n, i = this;
                return e !== t ? (e = Me.max(Me.min(Me.max(e, 1), i.totalPages()), 1), i._query({
                    page: e
                }), t) : (n = i.skip(), n !== t ? Me.round((n || 0) / (i.take() || 1)) + 1 : t)
            },
            pageSize: function(e) {
                var n = this;
                return e !== t ? (n._query({
                    pageSize: e,
                    page: 1
                }), t) : n.take()
            },
            sort: function(e) {
                var n = this;
                return e !== t ? (n._query({
                    sort: e
                }), t) : n._sort
            },
            filter: function(e) {
                var n = this;
                return e === t ? n._filter : (n.trigger("reset"), n._query({
                    filter: e,
                    page: 1
                }), t)
            },
            group: function(e) {
                var n = this;
                return e !== t ? (n._query({
                    group: e
                }), t) : n._group
            },
            total: function() {
                return parseInt(this._total || 0, 10)
            },
            aggregate: function(e) {
                var n = this;
                return e !== t ? (n._query({
                    aggregate: e
                }), t) : n._aggregate
            },
            aggregates: function() {
                var e = this._aggregateResult;
                return ie(e) && (e = this._emptyAggregates(this.aggregate())), e
            },
            _emptyAggregates: function(e) {
                var t, n, i = {};
                if (!ie(e))
                    for (t = {}, re(e) || (e = [e]), n = 0; e.length > n; n++) t[e[n].aggregate] = 0, i[e[n].field] = t;
                return i
            },
            _wrapInEmptyGroup: function(e) {
                var t, n, i, r, o = this.group();
                for (i = o.length - 1, r = 0; i >= r; i--) n = o[i], t = {
                    value: e.get(n.field),
                    field: n.field,
                    items: t ? [t] : [e],
                    hasSubgroups: !!t,
                    aggregates: this._emptyAggregates(n.aggregates)
                };
                return t
            },
            totalPages: function() {
                var e = this,
                    t = e.pageSize() || e.total();
                return Me.ceil((e.total() || 0) / t)
            },
            inRange: function(e, t) {
                var n = this,
                    i = Me.min(e + t, n.total());
                return !n.options.serverPaging && n._data.length > 0 ? !0 : n._findRange(e, i).length > 0
            },
            lastRange: function() {
                var e = this._ranges;
                return e[e.length - 1] || {
                    start: 0,
                    end: 0,
                    data: []
                }
            },
            firstItemUid: function() {
                var e = this._ranges;
                return e.length && e[0].data.length && e[0].data[0].uid
            },
            enableRequestsInProgress: function() {
                this._skipRequestsInProgress = !1
            },
            _timeStamp: function() {
                return (new Date).getTime()
            },
            range: function(e, n) {
                var i, r, o, a, s, l, c, u;
                if (this._currentRequestTimeStamp = this._timeStamp(), this._skipRequestsInProgress = !0, e = Me.min(e || 0, this.total()), i = this, r = Me.max(Me.floor(e / n), 0) * n, o = Me.min(r + n, i.total()), a = i._findRange(e, Me.min(e + n, i.total())), a.length) {
                    i._pending = t, i._skip = e > i.skip() ? Me.min(o, (i.totalPages() - 1) * i.take()) : r, i._take = n, s = i.options.serverPaging, l = i.options.serverSorting, c = i.options.serverFiltering, u = i.options.serverAggregates;
                    try {
                        i.options.serverPaging = !0, i._isServerGrouped() || i.group() && i.group().length || (i.options.serverSorting = !0), i.options.serverFiltering = !0, i.options.serverPaging = !0, i.options.serverAggregates = !0, s && (i._detachObservableParents(), i._data = a = i._observe(a)), i._process(a)
                    } finally {
                        i.options.serverPaging = s, i.options.serverSorting = l, i.options.serverFiltering = c, i.options.serverAggregates = u
                    }
                } else n !== t && (i._rangeExists(r, o) ? e > r && i.prefetch(o, n, function() {
                    i.range(e, n)
                }) : i.prefetch(r, n, function() {
                    e > r && o < i.total() && !i._rangeExists(o, Me.min(o + n, i.total())) ? i.prefetch(o, n, function() {
                        i.range(e, n)
                    }) : i.range(e, n)
                }))
            },
            _findRange: function(e, n) {
                var i, r, o, s, l, c, d, h, f, p, g, m, v = this,
                    _ = v._ranges,
                    b = [],
                    w = v.options,
                    y = w.serverSorting || w.serverPaging || w.serverFiltering || w.serverGrouping || w.serverAggregates;
                for (r = 0, g = _.length; g > r; r++)
                    if (i = _[r], e >= i.start && i.end >= e) {
                        for (p = 0, o = r; g > o; o++)
                            if (i = _[o], f = v._flatData(i.data, !0), f.length && e + p >= i.start && (c = i.data, d = i.end, y || (m = u(v.group() || []).concat(a(v.sort() || [])), h = v._queryProcess(i.data, {
                                    sort: m,
                                    filter: v.filter()
                                }), f = c = h.data, h.total !== t && (d = h.total)), s = 0, e + p > i.start && (s = e + p - i.start), l = f.length, d > n && (l -= d - n), p += l - s, b = v._mergeGroups(b, c, s, l), i.end >= n && p == n - e)) return b;
                        break
                    }
                return []
            },
            _mergeGroups: function(e, t, n, i) {
                if (this._isServerGrouped()) {
                    var r, o = t.toJSON();
                    return e.length && (r = e[e.length - 1]), w(r, o, n, i), e.concat(o)
                }
                return e.concat(t.slice(n, i))
            },
            skip: function() {
                var e = this;
                return e._skip === t ? e._page !== t ? (e._page - 1) * (e.take() || 1) : t : e._skip
            },
            take: function() {
                return this._take || this._pageSize
            },
            _prefetchSuccessHandler: function(e, t, n, i) {
                var r = this,
                    o = r._timeStamp();
                return function(a) {
                    var s, l, c, u = !1,
                        d = {
                            start: e,
                            end: t,
                            data: [],
                            timestamp: r._timeStamp()
                        };
                    if (r._dequeueRequest(), r.trigger(Se, {
                            response: a,
                            type: "read"
                        }), a = r.reader.parse(a), c = r._readData(a), c.length) {
                        for (s = 0, l = r._ranges.length; l > s; s++)
                            if (r._ranges[s].start === e) {
                                u = !0, d = r._ranges[s];
                                break
                            }
                        u || r._ranges.push(d)
                    }
                    d.data = r._observe(c), d.end = d.start + r._flatData(d.data, !0).length, r._ranges.sort(function(e, t) {
                        return e.start - t.start
                    }), r._total = r.reader.total(a), (i || o >= r._currentRequestTimeStamp || !r._skipRequestsInProgress) && (n && c.length ? n() : r.trigger(be, {}))
                }
            },
            prefetch: function(e, t, n) {
                var i = this,
                    r = Me.min(e + t, i.total()),
                    o = {
                        take: t,
                        skip: e,
                        page: e / t + 1,
                        pageSize: t,
                        sort: i._sort,
                        filter: i._filter,
                        group: i._group,
                        aggregate: i._aggregate
                    };
                i._rangeExists(e, r) ? n && n() : (clearTimeout(i._timeout), i._timeout = setTimeout(function() {
                    i._queueRequest(o, function() {
                        i.trigger(xe, {
                            type: "read"
                        }) ? i._dequeueRequest() : i.transport.read({
                            data: i._params(o),
                            success: i._prefetchSuccessHandler(e, r, n),
                            error: function() {
                                var e = Be.call(arguments);
                                i.error.apply(i, e)
                            }
                        })
                    })
                }, 100))
            },
            _multiplePrefetch: function(e, t, n) {
                var i = this,
                    r = Me.min(e + t, i.total()),
                    o = {
                        take: t,
                        skip: e,
                        page: e / t + 1,
                        pageSize: t,
                        sort: i._sort,
                        filter: i._filter,
                        group: i._group,
                        aggregate: i._aggregate
                    };
                i._rangeExists(e, r) ? n && n() : i.trigger(xe, {
                    type: "read"
                }) || i.transport.read({
                    data: i._params(o),
                    success: i._prefetchSuccessHandler(e, r, n, !0)
                })
            },
            _rangeExists: function(e, t) {
                var n, i, r = this,
                    o = r._ranges;
                for (n = 0, i = o.length; i > n; n++)
                    if (e >= o[n].start && o[n].end >= t) return !0;
                return !1
            },
            _removeModelFromRanges: function(e) {
                var t, n, i, r, o;
                for (r = 0, o = this._ranges.length; o > r && (i = this._ranges[r], this._eachItem(i.data, function(i) {
                        t = D(i, e), t && (n = !0)
                    }), !n); r++);
            },
            _updateRangesLength: function() {
                var e, t, n, i, r = 0;
                for (n = 0, i = this._ranges.length; i > n; n++) e = this._ranges[n], e.start = e.start - r, t = this._flatData(e.data, !0).length, r = e.end - t, e.end = e.start + t
            }
        }), K = {}, K.create = function(t, n, i) {
            var r, o = t.transport ? e.extend({}, t.transport) : null;
            return o ? (o.read = typeof o.read === fe ? {
                url: o.read
            } : o.read, "jsdo" === t.type && (o.dataSource = i), t.type && (ce.data.transports = ce.data.transports || {}, ce.data.schemas = ce.data.schemas || {}, ce.data.transports[t.type] && !ne(ce.data.transports[t.type]) ? r = new ce.data.transports[t.type](ee(o, {
                data: n
            })) : o = ee(!0, {}, ce.data.transports[t.type], o), t.schema = ee(!0, {}, ce.data.schemas[t.type], t.schema)), r || (r = ue(o.read) ? o : new q(o))) : r = new j({
                data: t.data || []
            }), r
        }, Y.create = function(e) {
            (re(e) || e instanceof We) && (e = {
                data: e
            });
            var n, i, r, o = e || {},
                a = o.data,
                s = o.fields,
                l = o.table,
                c = o.select,
                u = {};
            if (a || !s || o.transport || (l ? a = z(l, s) : c && (a = P(c, s), o.group === t && a[0] && a[0].optgroup !== t && (o.group = "optgroup"))), ce.data.Model && s && (!o.schema || !o.schema.model)) {
                for (n = 0, i = s.length; i > n; n++) r = s[n], r.type && (u[r.field] = r);
                ie(u) || (o.schema = ee(!0, o.schema, {
                    model: {
                        fields: u
                    }
                }))
            }
            return o.data = a, c = null, o.select = null, l = null, o.table = null, o instanceof Y ? o : new Y(o)
        }, Q = Ye.define({
            idField: "id",
            init: function(e) {
                var t = this,
                    n = t.hasChildren || e && e.hasChildren,
                    i = "items",
                    r = {};
                ce.data.Model.fn.init.call(t, e), typeof t.children === fe && (i = t.children), r = {
                    schema: {
                        data: i,
                        model: {
                            hasChildren: n,
                            id: t.idField,
                            fields: t.fields
                        }
                    }
                }, typeof t.children !== fe && ee(r, t.children), r.data = e, n || (n = r.schema.data), typeof n === fe && (n = ce.getter(n)), ue(n) && (t.hasChildren = !!n.call(t, t)), t._childrenOptions = r, t.hasChildren && t._initChildren(), t._loaded = !(!e || !e._loaded)
            },
            _initChildren: function() {
                var e, t, n, i = this;
                i.children instanceof X || (e = i.children = new X(i._childrenOptions), t = e.transport, n = t.parameterMap, t.parameterMap = function(e, t) {
                    return e[i.idField || "id"] = i.id, n && (e = n(e, t)), e
                }, e.parent = function() {
                    return i
                }, e.bind(be, function(e) {
                    e.node = e.node || i, i.trigger(be, e)
                }), e.bind(ke, function(e) {
                    var t = i.parent();
                    t && (e.node = e.node || i, t.trigger(ke, e))
                }), i._updateChildrenField())
            },
            append: function(e) {
                this._initChildren(), this.loaded(!0), this.children.add(e)
            },
            hasChildren: !1,
            level: function() {
                for (var e = this.parentNode(), t = 0; e && e.parentNode;) t++, e = e.parentNode ? e.parentNode() : null;
                return t
            },
            _updateChildrenField: function() {
                var e = this._childrenOptions.schema.data;
                this[e || "items"] = this.children.data()
            },
            _childrenLoaded: function() {
                this._loaded = !0, this._updateChildrenField()
            },
            load: function() {
                var n, i, r = {},
                    o = "_query";
                return this.hasChildren ? (this._initChildren(), n = this.children, r[this.idField || "id"] = this.id, this._loaded || (n._data = t, o = "read"), n.one(be, te(this._childrenLoaded, this)), i = n[o](r)) : this.loaded(!0), i || e.Deferred().resolve().promise()
            },
            parentNode: function() {
                var e = this.parent();
                return e.parent()
            },
            loaded: function(e) {
                return e === t ? this._loaded : (this._loaded = e, t)
            },
            shouldSerialize: function(e) {
                return Ye.fn.shouldSerialize.call(this, e) && "children" !== e && "_loaded" !== e && "hasChildren" !== e && "_childrenOptions" !== e
            }
        }), X = Y.extend({
            init: function(e) {
                var t = Q.define({
                    children: e
                });
                Y.fn.init.call(this, ee(!0, {}, {
                    schema: {
                        modelBase: t,
                        model: t
                    }
                }, e)), this._attachBubbleHandlers()
            },
            _attachBubbleHandlers: function() {
                var e = this;
                e._data.bind(ke, function(t) {
                    e.trigger(ke, t)
                })
            },
            remove: function(e) {
                var t, n = e.parentNode(),
                    i = this;
                return n && n._initChildren && (i = n.children), t = Y.fn.remove.call(i, e), n && !i.data().length && (n.hasChildren = !1), t
            },
            success: B("success"),
            data: B("data"),
            insert: function(e, t) {
                var n = this.parent();
                return n && n._initChildren && (n.hasChildren = !0, n._initChildren()), Y.fn.insert.call(this, e, t)
            },
            _find: function(e, t) {
                var n, i, r, o, a = this._data;
                if (a) {
                    if (r = Y.fn[e].call(this, t)) return r;
                    for (a = this._flatData(this._data), n = 0, i = a.length; i > n; n++)
                        if (o = a[n].children, o instanceof X && (r = o[e](t))) return r
                }
            },
            get: function(e) {
                return this._find("get", e)
            },
            getByUid: function(e) {
                return this._find("getByUid", e)
            }
        }), X.create = function(e) {
            e = e && e.push ? {
                data: e
            } : e;
            var t = e || {},
                n = t.data,
                i = t.fields,
                r = t.list;
            return n && n._dataSource ? n._dataSource : (n || !i || t.transport || r && (n = L(r, i)), t.data = n, t instanceof X ? t : new X(t))
        }, J = ce.Observable.extend({
            init: function(e, t, n) {
                ce.Observable.fn.init.call(this), this._prefetching = !1, this.dataSource = e, this.prefetch = !n;
                var i = this;
                e.bind("change", function() {
                    i._change()
                }), e.bind("reset", function() {
                    i._reset()
                }), this._syncWithDataSource(), this.setViewSize(t)
            },
            setViewSize: function(e) {
                this.viewSize = e, this._recalculate()
            },
            at: function(e) {
                var n = this.pageSize,
                    i = !0;
                return e >= this.total() ? (this.trigger("endreached", {
                    index: e
                }), null) : this.useRanges ? this.useRanges ? ((this.dataOffset > e || e >= this.skip + n) && (i = this.range(Math.floor(e / n) * n)), e === this.prefetchThreshold && this._prefetch(), e === this.midPageThreshold ? this.range(this.nextMidRange, !0) : e === this.nextPageThreshold ? this.range(this.nextFullRange) : e === this.pullBackThreshold && this.range(this.offset === this.skip ? this.previousMidRange : this.previousFullRange), i ? this.dataSource.at(e - this.dataOffset) : (this.trigger("endreached", {
                    index: e
                }), null)) : t : this.dataSource.view()[e]
            },
            indexOf: function(e) {
                return this.dataSource.data().indexOf(e) + this.dataOffset
            },
            total: function() {
                return parseInt(this.dataSource.total(), 10)
            },
            next: function() {
                var e = this,
                    t = e.pageSize,
                    n = e.skip - e.viewSize + t,
                    i = Me.max(Me.floor(n / t), 0) * t;
                this.offset = n, this.dataSource.prefetch(i, t, function() {
                    e._goToRange(n, !0)
                })
            },
            range: function(e, t) {
                if (this.offset === e) return !0;
                var n = this,
                    i = this.pageSize,
                    r = Me.max(Me.floor(e / i), 0) * i,
                    o = this.dataSource;
                return t && (r += i), o.inRange(e, i) ? (this.offset = e, this._recalculate(), this._goToRange(e), !0) : this.prefetch ? (o.prefetch(r, i, function() {
                    n.offset = e, n._recalculate(), n._goToRange(e, !0)
                }), !1) : !0
            },
            syncDataSource: function() {
                var e = this.offset;
                this.offset = null, this.range(e)
            },
            destroy: function() {
                this.unbind()
            },
            _prefetch: function() {
                var e = this,
                    t = this.pageSize,
                    n = this.skip + t,
                    i = this.dataSource;
                i.inRange(n, t) || this._prefetching || !this.prefetch || (this._prefetching = !0, this.trigger("prefetching", {
                    skip: n,
                    take: t
                }), i.prefetch(n, t, function() {
                    e._prefetching = !1, e.trigger("prefetched", {
                        skip: n,
                        take: t
                    })
                }))
            },
            _goToRange: function(e, t) {
                this.offset === e && (this.dataOffset = e, this._expanding = t, this.dataSource.range(e, this.pageSize), this.dataSource.enableRequestsInProgress())
            },
            _reset: function() {
                this._syncPending = !0
            },
            _change: function() {
                var e = this.dataSource;
                this.length = this.useRanges ? e.lastRange().end : e.view().length, this._syncPending && (this._syncWithDataSource(), this._recalculate(), this._syncPending = !1, this.trigger("reset", {
                    offset: this.offset
                })), this.trigger("resize"), this._expanding && this.trigger("expand"), delete this._expanding
            },
            _syncWithDataSource: function() {
                var e = this.dataSource;
                this._firstItemUid = e.firstItemUid(), this.dataOffset = this.offset = e.skip() || 0, this.pageSize = e.pageSize(), this.useRanges = e.options.serverPaging
            },
            _recalculate: function() {
                var e = this.pageSize,
                    t = this.offset,
                    n = this.viewSize,
                    i = Math.ceil(t / e) * e;
                this.skip = i, this.midPageThreshold = i + e - 1, this.nextPageThreshold = i + n - 1, this.prefetchThreshold = i + Math.floor(e / 3 * 2), this.pullBackThreshold = this.offset - 1, this.nextMidRange = i + e - n, this.nextFullRange = i, this.previousMidRange = t - n, this.previousFullRange = i - e
            }
        }), Z = ce.Observable.extend({
            init: function(e, t) {
                var n = this;
                ce.Observable.fn.init.call(n), this.dataSource = e, this.batchSize = t, this._total = 0, this.buffer = new J(e, 3 * t), this.buffer.bind({
                    endreached: function(e) {
                        n.trigger("endreached", {
                            index: e.index
                        })
                    },
                    prefetching: function(e) {
                        n.trigger("prefetching", {
                            skip: e.skip,
                            take: e.take
                        })
                    },
                    prefetched: function(e) {
                        n.trigger("prefetched", {
                            skip: e.skip,
                            take: e.take
                        })
                    },
                    reset: function() {
                        n._total = 0, n.trigger("reset")
                    },
                    resize: function() {
                        n._total = Math.ceil(this.length / n.batchSize), n.trigger("resize", {
                            total: n.total(),
                            offset: this.offset
                        })
                    }
                })
            },
            syncDataSource: function() {
                this.buffer.syncDataSource()
            },
            at: function(e) {
                var t, n, i = this.buffer,
                    r = e * this.batchSize,
                    o = this.batchSize,
                    a = [];
                for (i.offset > r && i.at(i.offset - 1), n = 0; o > n && (t = i.at(r + n), null !== t); n++) a.push(t);
                return a
            },
            total: function() {
                return this._total
            },
            destroy: function() {
                this.buffer.destroy(), this.unbind()
            }
        }), ee(!0, ce.data, {
            readers: {
                json: $
            },
            Query: o,
            DataSource: Y,
            HierarchicalDataSource: X,
            Node: Q,
            ObservableObject: qe,
            ObservableArray: We,
            LazyObservableArray: je,
            LocalTransport: j,
            RemoteTransport: q,
            Cache: G,
            DataReader: $,
            Model: Ye,
            Buffer: J,
            BatchBuffer: Z
        })
    }(window.kendo.jQuery), window.kendo
})();;
(function() {
    return function(e, t) {
        var n = window.kendo,
            i = "change",
            o = "cancel",
            r = "dataBound",
            a = "dataBinding",
            s = n.ui.Widget,
            l = n.keys,
            c = ">*",
            u = "progress",
            d = "error",
            h = "k-state-focused",
            f = "k-state-selected",
            p = "k-edit-item",
            g = "edit",
            m = "remove",
            v = "save",
            _ = "click",
            w = ".kendoListView",
            b = e.proxy,
            y = n._activeElement,
            x = n.ui.progress,
            k = n.data.DataSource,
            C = n.ui.DataBoundWidget.extend({
                init: function(t, i) {
                    var o = this;
                    i = e.isArray(i) ? {
                        dataSource: i
                    } : i, s.fn.init.call(o, t, i), i = o.options, o.wrapper = t = o.element, t[0].id && (o._itemId = t[0].id + "_lv_active"), o._element(), o._dataSource(), o._templates(), o._navigatable(), o._selectable(), o._pageable(), o._crudHandlers(), o.options.autoBind && o.dataSource.fetch(), n.notify(o)
                },
                events: [i, o, a, r, g, m, v],
                options: {
                    name: "ListView",
                    autoBind: !0,
                    selectable: !1,
                    navigatable: !1,
                    template: "",
                    altTemplate: "",
                    editTemplate: ""
                },
                setOptions: function(e) {
                    s.fn.setOptions.call(this, e), this._templates(), this.selectable && (this.selectable.destroy(), this.selectable = null), this._selectable()
                },
                _templates: function() {
                    var e = this.options;
                    this.template = n.template(e.template || ""), this.altTemplate = n.template(e.altTemplate || e.template), this.editTemplate = n.template(e.editTemplate || "")
                },
                _item: function(e) {
                    return this.element.children()[e]()
                },
                items: function() {
                    return this.element.children()
                },
                dataItem: function(t) {
                    var i = n.attr("uid"),
                        o = e(t).closest("[" + i + "]").attr(i);
                    return this.dataSource.getByUid(o)
                },
                setDataSource: function(e) {
                    this.options.dataSource = e, this._dataSource(), this.options.autoBind && e.fetch()
                },
                _unbindDataSource: function() {
                    var e = this;
                    e.dataSource.unbind(i, e._refreshHandler).unbind(u, e._progressHandler).unbind(d, e._errorHandler)
                },
                _dataSource: function() {
                    var e = this;
                    e.dataSource && e._refreshHandler ? e._unbindDataSource() : (e._refreshHandler = b(e.refresh, e), e._progressHandler = b(e._progress, e), e._errorHandler = b(e._error, e)), e.dataSource = k.create(e.options.dataSource).bind(i, e._refreshHandler).bind(u, e._progressHandler).bind(d, e._errorHandler)
                },
                _progress: function() {
                    x(this.element, !0)
                },
                _error: function() {
                    x(this.element, !1)
                },
                _element: function() {
                    this.element.addClass("k-widget k-listview").attr("role", "listbox")
                },
                refresh: function(e) {
                    var i, o, s, l, c, u = this,
                        d = u.dataSource.view(),
                        h = "",
                        f = u.template,
                        p = u.altTemplate,
                        g = y();
                    if (e = e || {}, "itemchange" === e.action) return u._hasBindingTarget() || u.editable || (i = e.items[0], s = u.items().filter("[" + n.attr("uid") + "=" + i.uid + "]"), s.length > 0 && (l = s.index(), u.angular("cleanup", function() {
                        return {
                            elements: [s]
                        }
                    }), s.replaceWith(f(i)), s = u.items().eq(l), s.attr(n.attr("uid"), i.uid), u.angular("compile", function() {
                        return {
                            elements: [s],
                            data: [{
                                dataItem: i
                            }]
                        }
                    }), u.trigger("itemChange", {
                        item: s,
                        data: i
                    }))), t;
                    if (!u.trigger(a, {
                            action: e.action || "rebind",
                            items: e.items,
                            index: e.index
                        })) {
                        for (u._angularItems("cleanup"), u._destroyEditable(), l = 0, c = d.length; c > l; l++) h += l % 2 ? p(d[l]) : f(d[l]);
                        for (u.element.html(h), o = u.items(), l = 0, c = d.length; c > l; l++) o.eq(l).attr(n.attr("uid"), d[l].uid).attr("role", "option").attr("aria-selected", "false");
                        u.element[0] === g && u.options.navigatable && u.current(o.eq(0)), u._angularItems("compile"), u.trigger(r)
                    }
                },
                _pageable: function() {
                    var t, i, o = this,
                        r = o.options.pageable;
                    e.isPlainObject(r) && (i = r.pagerId, t = e.extend({}, r, {
                        dataSource: o.dataSource,
                        pagerId: null
                    }), o.pager = new n.ui.Pager(e("#" + i), t))
                },
                _selectable: function() {
                    var e, o, r = this,
                        a = r.options.selectable,
                        s = r.options.navigatable;
                    a && (e = n.ui.Selectable.parseOptions(a).multiple, r.selectable = new n.ui.Selectable(r.element, {
                        aria: !0,
                        multiple: e,
                        filter: c,
                        change: function() {
                            r.trigger(i)
                        }
                    }), s && r.element.on("keydown" + w, function(n) {
                        if (n.keyCode === l.SPACEBAR) {
                            if (o = r.current(), n.target == n.currentTarget && n.preventDefault(), e)
                                if (n.ctrlKey) {
                                    if (o && o.hasClass(f)) return o.removeClass(f), t
                                } else r.selectable.clear();
                            else r.selectable.clear();
                            r.selectable.value(o)
                        }
                    }))
                },
                current: function(e) {
                    var n = this,
                        i = n.element,
                        o = n._current,
                        r = n._itemId;
                    return e === t ? o : (o && o[0] && (o[0].id === r && o.removeAttr("id"), o.removeClass(h), i.removeAttr("aria-activedescendant")), e && e[0] && (r = e[0].id || r, n._scrollTo(e[0]), i.attr("aria-activedescendant", r), e.addClass(h).attr("id", r)), n._current = e, t)
                },
                _scrollTo: function(t) {
                    var n, i, o = this,
                        r = !1,
                        a = "scroll";
                    "auto" == o.wrapper.css("overflow") || o.wrapper.css("overflow") == a ? n = o.wrapper[0] : (n = window, r = !0), i = function(i, o) {
                        var s = r ? e(t).offset()[i.toLowerCase()] : t["offset" + i],
                            l = t["client" + o],
                            c = e(n)[a + i](),
                            u = e(n)[o.toLowerCase()]();
                        s + l > c + u ? e(n)[a + i](s + l - u) : c > s && e(n)[a + i](s)
                    }, i("Top", "Height"), i("Left", "Width")
                },
                _navigatable: function() {
                    var t = this,
                        i = t.options.navigatable,
                        o = t.element,
                        r = function(n) {
                            t.current(e(n.currentTarget)), e(n.target).is(":button,a,:input,a>.k-icon,textarea") || o.focus()
                        };
                    i && (t._tabindex(), o.on("focus" + w, function() {
                        var e = t._current;
                        e && e.is(":visible") || (e = t._item("first")), t.current(e)
                    }).on("focusout" + w, function() {
                        t._current && t._current.removeClass(h)
                    }).on("keydown" + w, function(i) {
                        var r, a, s = i.keyCode,
                            c = t.current(),
                            u = e(i.target),
                            d = !u.is(":button,textarea,a,a>.t-icon,input"),
                            h = u.is(":text"),
                            f = n.preventDefault,
                            g = o.find("." + p),
                            m = y();
                        if (!(!d && !h && l.ESC != s || h && l.ESC != s && l.ENTER != s))
                            if (l.UP === s || l.LEFT === s) c && (c = c.prev()), t.current(c && c[0] ? c : t._item("last")), f(i);
                            else if (l.DOWN === s || l.RIGHT === s) c && (c = c.next()), t.current(c && c[0] ? c : t._item("first")), f(i);
                        else if (l.PAGEUP === s) t.current(null), t.dataSource.page(t.dataSource.page() - 1), f(i);
                        else if (l.PAGEDOWN === s) t.current(null), t.dataSource.page(t.dataSource.page() + 1), f(i);
                        else if (l.HOME === s) t.current(t._item("first")), f(i);
                        else if (l.END === s) t.current(t._item("last")), f(i);
                        else if (l.ENTER === s) 0 !== g.length && (d || h) ? (r = t.items().index(g), m && m.blur(), t.save(), a = function() {
                            t.element.trigger("focus"), t.current(t.items().eq(r))
                        }, t.one("dataBound", a)) : "" !== t.options.editTemplate && t.edit(c);
                        else if (l.ESC === s) {
                            if (g = o.find("." + p), 0 === g.length) return;
                            r = t.items().index(g), t.cancel(), t.element.trigger("focus"), t.current(t.items().eq(r))
                        }
                    }), o.on("mousedown" + w + " touchstart" + w, c, b(r, t)))
                },
                clearSelection: function() {
                    var e = this;
                    e.selectable.clear(), e.trigger(i)
                },
                select: function(n) {
                    var i = this,
                        o = i.selectable;
                    return n = e(n), n.length ? (o.options.multiple || (o.clear(), n = n.first()), o.value(n), t) : o.value()
                },
                _destroyEditable: function() {
                    var e = this;
                    e.editable && (e.editable.destroy(), delete e.editable)
                },
                _modelFromElement: function(e) {
                    var t = e.attr(n.attr("uid"));
                    return this.dataSource.getByUid(t)
                },
                _closeEditable: function() {
                    var e, t, i, o = this,
                        r = o.editable,
                        a = o.template;
                    return r && (r.element.index() % 2 && (a = o.altTemplate), o.angular("cleanup", function() {
                        return {
                            elements: [r.element]
                        }
                    }), e = o._modelFromElement(r.element), o._destroyEditable(), i = r.element.index(), r.element.replaceWith(a(e)), t = o.items().eq(i), t.attr(n.attr("uid"), e.uid), o._hasBindingTarget() && n.bind(t, e), o.angular("compile", function() {
                        return {
                            elements: [t],
                            data: [{
                                dataItem: e
                            }]
                        }
                    })), !0
                },
                edit: function(e) {
                    var t, i, o = this,
                        r = o._modelFromElement(e),
                        a = r.uid;
                    o.cancel(), e = o.items().filter("[" + n.attr("uid") + "=" + a + "]"), i = e.index(), e.replaceWith(o.editTemplate(r)), t = o.items().eq(i).addClass(p).attr(n.attr("uid"), r.uid), o.editable = t.kendoEditable({
                        model: r,
                        clearContainer: !1,
                        errorTemplate: !1,
                        target: o
                    }).data("kendoEditable"), o.trigger(g, {
                        model: r,
                        item: t
                    })
                },
                save: function() {
                    var e, t, n = this,
                        i = n.editable;
                    i && (t = i.element, e = n._modelFromElement(t), i.end() && !n.trigger(v, {
                        model: e,
                        item: t
                    }) && (n._closeEditable(), n.dataSource.sync()))
                },
                remove: function(e) {
                    var t = this,
                        n = t.dataSource,
                        i = t._modelFromElement(e);
                    t.editable && (n.cancelChanges(t._modelFromElement(t.editable.element)), t._closeEditable()), t.trigger(m, {
                        model: i,
                        item: e
                    }) || (e.hide(), n.remove(i), n.sync())
                },
                add: function() {
                    var e, t = this,
                        n = t.dataSource,
                        i = n.indexOf((n.view() || [])[0]);
                    0 > i && (i = 0), t.cancel(), e = n.insert(i, {}), t.edit(t.element.find("[data-uid='" + e.uid + "']"))
                },
                cancel: function() {
                    var e, t, n = this,
                        i = n.dataSource;
                    n.editable && (e = n.editable.element, t = n._modelFromElement(e), n.trigger(o, {
                        model: t,
                        container: e
                    }) || (i.cancelChanges(t), n._closeEditable()))
                },
                _crudHandlers: function() {
                    var t = this,
                        i = _ + w;
                    t.element.on(i, ".k-edit-button", function(i) {
                        var o = e(this).closest("[" + n.attr("uid") + "]");
                        t.edit(o), i.preventDefault()
                    }), t.element.on(i, ".k-delete-button", function(i) {
                        var o = e(this).closest("[" + n.attr("uid") + "]");
                        t.remove(o), i.preventDefault()
                    }), t.element.on(i, ".k-update-button", function(e) {
                        t.save(), e.preventDefault()
                    }), t.element.on(i, ".k-cancel-button", function(e) {
                        t.cancel(), e.preventDefault()
                    })
                },
                destroy: function() {
                    var e = this;
                    s.fn.destroy.call(e), e._unbindDataSource(), e._destroyEditable(), e.element.off(w), e.pager && e.pager.destroy(), n.destroy(e.element)
                }
            });
        n.ui.plugin(C)
    }(window.kendo.jQuery), window.kendo
})();;
(function() {
    return function(e, t) {
        function n(e, t) {
            return e = e.split(" ")[!t + 0] || e, e.replace("top", "up").replace("bottom", "down")
        }

        function i(e, t, n) {
            e = e.split(" ")[!t + 0] || e;
            var i = {
                    origin: ["bottom", n ? "right" : "left"],
                    position: ["top", n ? "right" : "left"]
                },
                o = /left|right/.test(e);
            return o ? (i.origin = ["top", e], i.position[1] = c.directions[e].reverse) : (i.origin[0] = e, i.position[0] = c.directions[e].reverse), i.origin = i.origin.join(" "), i.position = i.position.join(" "), i
        }

        function o(t, n) {
            try {
                return e.contains(t, n)
            } catch (i) {
                return !1
            }
        }

        function r(t) {
            t = e(t), t.addClass("k-item").children(k).addClass(P), t.children("a").addClass(T).children(k).addClass(P), t.filter(":not([disabled])").addClass(G), t.filter(".k-separator:empty").append("&nbsp;"), t.filter("li[disabled]").addClass(Y).removeAttr("disabled").attr("aria-disabled", !0), t.filter("[role]").length || t.attr("role", "menuitem"), t.children("." + T).length || t.contents().filter(function() {
                return !(this.nodeName.match(y) || 3 == this.nodeType && !e.trim(this.nodeValue))
            }).wrapAll("<span class='" + T + "'/>"), a(t), s(t)
        }

        function a(t) {
            t = e(t), t.find("> .k-link > [class*=k-i-arrow]:not(.k-sprite)").remove(), t.filter(":has(.k-menu-group)").children(".k-link:not(:has([class*=k-i-arrow]:not(.k-sprite)))").each(function() {
                var t = e(this),
                    n = t.parent().parent();
                t.append("<span class='k-icon " + (n.hasClass(S + "-horizontal") ? "k-i-arrow-s" : "k-i-arrow-e") + "'/>")
            })
        }

        function s(t) {
            t = e(t), t.filter(".k-first:not(:first-child)").removeClass(M), t.filter(".k-last:not(:last-child)").removeClass(D), t.filter(":first-child").addClass(M), t.filter(":last-child").addClass(D)
        }
        var l, c = window.kendo,
            u = c.ui,
            d = c._activeElement,
            h = c.support.touch && c.support.mobileOS,
            f = "mousedown",
            p = "click",
            g = e.extend,
            m = e.proxy,
            v = e.each,
            _ = c.template,
            w = c.keys,
            b = u.Widget,
            y = /^(ul|a|div)$/i,
            x = ".kendoMenu",
            k = "img",
            C = "open",
            S = "k-menu",
            T = "k-link",
            D = "k-last",
            A = "close",
            E = "timer",
            M = "k-first",
            P = "k-image",
            I = "select",
            R = "zIndex",
            B = "activate",
            z = "deactivate",
            L = "touchstart" + x + " MSPointerDown" + x + " pointerdown" + x,
            F = c.support.pointers,
            O = c.support.msPointers,
            N = O || F,
            H = F ? "pointerover" : O ? "MSPointerOver" : "mouseenter",
            V = F ? "pointerout" : O ? "MSPointerOut" : "mouseleave",
            U = h || N,
            W = e(document.documentElement),
            j = "kendoPopup",
            G = "k-state-default",
            q = "k-state-hover",
            $ = "k-state-focused",
            Y = "k-state-disabled",
            Q = ".k-menu",
            K = ".k-menu-group",
            X = K + ",.k-animation-container",
            Z = ":not(.k-list) > .k-item",
            J = ".k-item.k-state-disabled",
            ee = ".k-item:not(.k-state-disabled)",
            te = ".k-item:not(.k-state-disabled) > .k-link",
            ne = ":not(.k-item.k-separator)",
            ie = ne + ":eq(0)",
            oe = ne + ":last",
            re = "> div:not(.k-animation-container,.k-list-container)",
            ae = {
                2: 1,
                touch: 1
            },
            se = {
                content: _("<div class='k-content #= groupCssClass() #' tabindex='-1'>#= content(item) #</div>"),
                group: _("<ul class='#= groupCssClass(group) #'#= groupAttributes(group) # role='menu' aria-hidden='true'>#= renderItems(data) #</ul>"),
                itemWrapper: _("<#= tag(item) # class='#= textClass(item) #'#= textAttributes(item) #>#= image(item) ##= sprite(item) ##= text(item) ##= arrow(data) #</#= tag(item) #>"),
                item: _("<li class='#= wrapperCssClass(group, item) #' role='menuitem' #=item.items ? \"aria-haspopup='true'\": \"\"##=item.enabled === false ? \"aria-disabled='true'\" : ''#>#= itemWrapper(data) ## if (item.items) { ##= subGroup({ items: item.items, menu: menu, group: { expanded: item.expanded } }) ## } else if (item.content || item.contentUrl) { ##= renderContent(data) ## } #</li>"),
                image: _("<img class='k-image' alt='' src='#= imageUrl #' />"),
                arrow: _("<span class='#= arrowClass(item, group) #'></span>"),
                sprite: _("<span class='k-sprite #= spriteCssClass #'></span>"),
                empty: _("")
            },
            le = {
                wrapperCssClass: function(e, t) {
                    var n = "k-item",
                        i = t.index;
                    return n += t.enabled === !1 ? " k-state-disabled" : " k-state-default", e.firstLevel && 0 === i && (n += " k-first"), i == e.length - 1 && (n += " k-last"), t.cssClass && (n += " " + t.cssClass), n
                },
                textClass: function() {
                    return T
                },
                textAttributes: function(e) {
                    return e.url ? " href='" + e.url + "'" : ""
                },
                arrowClass: function(e, t) {
                    var n = "k-icon";
                    return n += t.horizontal ? " k-i-arrow-s" : " k-i-arrow-e"
                },
                text: function(e) {
                    return e.encoded === !1 ? e.text : c.htmlEncode(e.text)
                },
                tag: function(e) {
                    return e.url ? "a" : "span"
                },
                groupAttributes: function(e) {
                    return e.expanded !== !0 ? " style='display:none'" : ""
                },
                groupCssClass: function() {
                    return "k-group k-menu-group"
                },
                content: function(e) {
                    return e.content ? e.content : "&nbsp;"
                }
            },
            ce = b.extend({
                init: function(t, n) {
                    var i = this;
                    b.fn.init.call(i, t, n), t = i.wrapper = i.element, n = i.options, i._initData(n), i._updateClasses(), i._animations(n), i.nextItemZIndex = 100, i._tabindex(), i._focusProxy = m(i._focusHandler, i), t.on(L, ee, i._focusProxy).on(p + x, J, !1).on(p + x, ee, m(i._click, i)).on("keydown" + x, m(i._keydown, i)).on("focus" + x, m(i._focus, i)).on("focus" + x, ".k-content", m(i._focus, i)).on(L + " " + f + x, ".k-content", m(i._preventClose, i)).on("blur" + x, m(i._removeHoverItem, i)).on("blur" + x, "[tabindex]", m(i._checkActiveElement, i)).on(H + x, ee, m(i._mouseenter, i)).on(V + x, ee, m(i._mouseleave, i)).on(H + x + " " + V + x + " " + f + x + " " + p + x, te, m(i._toggleHover, i)), n.openOnClick && (i.clicked = !1, i._documentClickHandler = m(i._documentClick, i), e(document).click(i._documentClickHandler)), t.attr("role", "menubar"), t[0].id && (i._ariaId = c.format("{0}_mn_active", t[0].id)), c.notify(i)
                },
                events: [C, A, B, z, I],
                options: {
                    name: "Menu",
                    animation: {
                        open: {
                            duration: 200
                        },
                        close: {
                            duration: 100
                        }
                    },
                    orientation: "horizontal",
                    direction: "default",
                    openOnClick: !1,
                    closeOnClick: !0,
                    hoverDelay: 100,
                    popupCollision: t
                },
                _initData: function(e) {
                    var t = this;
                    e.dataSource && (t.angular("cleanup", function() {
                        return {
                            elements: t.element.children()
                        }
                    }), t.element.empty(), t.append(e.dataSource, t.element), t.angular("compile", function() {
                        return {
                            elements: t.element.children()
                        }
                    }))
                },
                setOptions: function(e) {
                    var t = this.options.animation;
                    this._animations(e), e.animation = g(!0, t, e.animation), "dataSource" in e && this._initData(e), this._updateClasses(), b.fn.setOptions.call(this, e)
                },
                destroy: function() {
                    var t = this;
                    b.fn.destroy.call(t), t.element.off(x), t._documentClickHandler && e(document).unbind("click", t._documentClickHandler), c.destroy(t.element)
                },
                enable: function(e, t) {
                    return this._toggleDisabled(e, t !== !1), this
                },
                disable: function(e) {
                    return this._toggleDisabled(e, !1), this
                },
                append: function(e, t) {
                    t = this.element.find(t);
                    var n = this._insert(e, t, t.length ? t.find("> .k-menu-group, > .k-animation-container > .k-menu-group") : null);
                    return v(n.items, function() {
                        n.group.append(this), a(this)
                    }), a(t), s(n.group.find(".k-first, .k-last").add(n.items)), this
                },
                insertBefore: function(e, t) {
                    t = this.element.find(t);
                    var n = this._insert(e, t, t.parent());
                    return v(n.items, function() {
                        t.before(this), a(this), s(this)
                    }), s(t), this
                },
                insertAfter: function(e, t) {
                    t = this.element.find(t);
                    var n = this._insert(e, t, t.parent());
                    return v(n.items, function() {
                        t.after(this), a(this), s(this)
                    }), s(t), this
                },
                _insert: function(t, n, i) {
                    var o, a, s, l, c = this;
                    return n && n.length || (i = c.element), s = e.isPlainObject(t), l = {
                        firstLevel: i.hasClass(S),
                        horizontal: i.hasClass(S + "-horizontal"),
                        expanded: !0,
                        length: i.children().length
                    }, n && !i.length && (i = e(ce.renderGroup({
                        group: l
                    })).appendTo(n)), s || e.isArray(t) ? o = e(e.map(s ? [t] : t, function(t, n) {
                        return "string" == typeof t ? e(t).get() : e(ce.renderItem({
                            group: l,
                            item: g(t, {
                                index: n
                            })
                        })).get()
                    })) : (o = "string" == typeof t && "<" != t.charAt(0) ? c.element.find(t) : e(t), a = o.find("> ul").addClass("k-menu-group").attr("role", "menu"), o = o.filter("li"), o.add(a.find("> li")).each(function() {
                        r(this)
                    })), {
                        items: o,
                        group: i
                    }
                },
                remove: function(e) {
                    var t, n, i, o;
                    return e = this.element.find(e), t = this, n = e.parentsUntil(t.element, Z), i = e.parent("ul:not(.k-menu)"), e.remove(), i && !i.children(Z).length && (o = i.parent(".k-animation-container"), o.length ? o.remove() : i.remove()), n.length && (n = n.eq(0), a(n), s(n)), t
                },
                open: function(o) {
                    var r = this,
                        a = r.options,
                        s = "horizontal" == a.orientation,
                        l = a.direction,
                        u = c.support.isRtl(r.wrapper);
                    return o = r.element.find(o), /^(top|bottom|default)$/.test(l) && (l = u ? s ? (l + " left").replace("default", "bottom") : "left" : s ? (l + " right").replace("default", "bottom") : "right"), o.siblings().find(">.k-popup:visible,>.k-animation-container>.k-popup:visible").each(function() {
                        var t = e(this).data("kendoPopup");
                        t && t.close()
                    }), o.each(function() {
                        var o = e(this);
                        clearTimeout(o.data(E)), o.data(E, setTimeout(function() {
                            var d, f, p, m, v, _, w, b, y = o.find(".k-menu-group:first:hidden");
                            y[0] && r._triggerEvent({
                                item: o[0],
                                type: C
                            }) === !1 && (!y.find(".k-menu-group")[0] && y.children(".k-item").length > 1 ? (f = e(window).height(), p = function() {
                                y.css({
                                    maxHeight: f - (y.outerHeight() - y.height()) - c.getShadows(y).bottom,
                                    overflow: "auto"
                                })
                            }, c.support.browser.msie && 7 >= c.support.browser.version ? setTimeout(p, 0) : p()) : y.css({
                                maxHeight: "",
                                overflow: ""
                            }), o.data(R, o.css(R)), o.css(R, r.nextItemZIndex++), d = y.data(j), m = o.parent().hasClass(S), v = m && s, _ = i(l, m, u), w = a.animation.open.effects, b = w !== t ? w : "slideIn:" + n(l, m), d ? (d = y.data(j), d.options.origin = _.origin, d.options.position = _.position, d.options.animation.open.effects = b) : d = y.kendoPopup({
                                activate: function() {
                                    r._triggerEvent({
                                        item: this.wrapper.parent(),
                                        type: B
                                    })
                                },
                                deactivate: function(e) {
                                    e.sender.element.removeData("targetTransform").css({
                                        opacity: ""
                                    }), r._triggerEvent({
                                        item: this.wrapper.parent(),
                                        type: z
                                    })
                                },
                                origin: _.origin,
                                position: _.position,
                                collision: a.popupCollision !== t ? a.popupCollision : v ? "fit" : "fit flip",
                                anchor: o,
                                appendTo: o,
                                animation: {
                                    open: g(!0, {
                                        effects: b
                                    }, a.animation.open),
                                    close: a.animation.close
                                },
                                close: function(e) {
                                    var t = e.sender.wrapper.parent();
                                    r._triggerEvent({
                                        item: t[0],
                                        type: A
                                    }) ? e.preventDefault() : (t.css(R, t.data(R)), t.removeData(R), h && (t.removeClass(q), r._removeHoverItem()))
                                }
                            }).data(j), y.removeAttr("aria-hidden"), d.open())
                        }, r.options.hoverDelay))
                    }), r
                },
                close: function(t, n) {
                    var i = this,
                        o = i.element;
                    return t = o.find(t), t.length || (t = o.find(">.k-item")), t.each(function() {
                        var t = e(this);
                        !n && i._isRootItem(t) && (i.clicked = !1), clearTimeout(t.data(E)), t.data(E, setTimeout(function() {
                            var e = t.find(".k-menu-group:not(.k-list-container):not(.k-calendar-container):first:visible").data(j);
                            e && (e.close(), e.element.attr("aria-hidden", !0))
                        }, i.options.hoverDelay))
                    }), i
                },
                _toggleDisabled: function(t, n) {
                    this.element.find(t).each(function() {
                        e(this).toggleClass(G, n).toggleClass(Y, !n).attr("aria-disabled", !n)
                    })
                },
                _toggleHover: function(t) {
                    var n = e(c.eventTarget(t) || t.target).closest(Z),
                        i = t.type == H || -1 !== f.indexOf(t.type);
                    n.parents("li." + Y).length || n.toggleClass(q, i || "mousedown" == t.type || "click" == t.type), this._removeHoverItem()
                },
                _preventClose: function() {
                    this.options.closeOnClick || (this._closurePrevented = !0)
                },
                _checkActiveElement: function(t) {
                    var n = this,
                        i = e(t ? t.currentTarget : this._hoverItem()),
                        r = n._findRootParent(i)[0];
                    this._closurePrevented || setTimeout(function() {
                        (!document.hasFocus() || !o(r, c._activeElement()) && t && !o(r, t.currentTarget)) && n.close(r)
                    }, 0), this._closurePrevented = !1
                },
                _removeHoverItem: function() {
                    var e = this._hoverItem();
                    e && e.hasClass($) && (e.removeClass($), this._oldHoverItem = null)
                },
                _updateClasses: function() {
                    var e, t = this.element,
                        n = ".k-menu-init div ul";
                    t.removeClass("k-menu-horizontal k-menu-vertical"), t.addClass("k-widget k-reset k-header k-menu-init " + S).addClass(S + "-" + this.options.orientation), t.find("li > ul").filter(function() {
                        return !c.support.matchesSelector.call(this, n)
                    }).addClass("k-group k-menu-group").attr("role", "menu").attr("aria-hidden", t.is(":visible")).end().find("li > div").addClass("k-content").attr("tabindex", "-1"), e = t.find("> li,.k-menu-group > li"), t.removeClass("k-menu-init"), e.each(function() {
                        r(this)
                    })
                },
                _mouseenter: function(t) {
                    var n = this,
                        i = e(t.currentTarget),
                        r = i.children(".k-animation-container").length || i.children(K).length;
                    t.delegateTarget == i.parents(Q)[0] && (n.options.openOnClick && !n.clicked || h || (F || O) && t.originalEvent.pointerType in ae && n._isRootItem(i.closest(Z)) || !o(t.currentTarget, t.relatedTarget) && r && n.open(i), (n.options.openOnClick && n.clicked || U) && i.siblings().each(m(function(e, t) {
                        n.close(t, !0)
                    }, n)))
                },
                _mouseleave: function(n) {
                    var i = this,
                        r = e(n.currentTarget),
                        a = r.children(".k-animation-container").length || r.children(K).length;
                    return r.parentsUntil(".k-animation-container", ".k-list-container,.k-calendar-container")[0] ? (n.stopImmediatePropagation(), t) : (i.options.openOnClick || h || (F || O) && n.originalEvent.pointerType in ae || o(n.currentTarget, n.relatedTarget || n.target) || !a || o(n.currentTarget, c._activeElement()) || i.close(r), t)
                },
                _click: function(n) {
                    var i, o, r, a = this,
                        s = a.options,
                        l = e(c.eventTarget(n)),
                        u = l[0] ? l[0].nodeName.toUpperCase() : "",
                        d = "INPUT" == u || "SELECT" == u || "BUTTON" == u || "LABEL" == u,
                        h = l.closest("." + T),
                        f = l.closest(Z),
                        p = h.attr("href"),
                        g = l.attr("href"),
                        m = e("<a href='#' />").attr("href"),
                        v = !!p && p !== m,
                        _ = v && !!p.match(/^#/),
                        w = !!g && g !== m,
                        b = s.openOnClick && r && a._isRootItem(f);
                    if (!l.closest(re, f[0]).length) {
                        if (f.hasClass(Y)) return n.preventDefault(), t;
                        if (n.handled || !a._triggerEvent({
                                item: f[0],
                                type: I
                            }) || d || n.preventDefault(), n.handled = !0, o = f.children(X), r = o.is(":visible"), s.closeOnClick && (!v || _) && (!o.length || b)) return f.removeClass(q).css("height"), a._oldHoverItem = a._findRootParent(f), a.close(h.parentsUntil(a.element, Z)), a.clicked = !1, -1 != "MSPointerUp".indexOf(n.type) && n.preventDefault(), t;
                        v && n.enterKey && h[0].click(), (a._isRootItem(f) && s.openOnClick || c.support.touch || (F || O) && a._isRootItem(f.closest(Z))) && (v || d || w || n.preventDefault(), a.clicked = !0, i = o.is(":visible") ? A : C, (s.closeOnClick || i != A) && a[i](f))
                    }
                },
                _documentClick: function(e) {
                    o(this.element[0], e.target) || (this.clicked = !1)
                },
                _focus: function(n) {
                    var i = this,
                        o = n.target,
                        r = i._hoverItem(),
                        a = d();
                    return o == i.wrapper[0] || e(o).is(":kendoFocusable") ? (a === n.currentTarget && (r.length ? i._moveHover([], r) : i._oldHoverItem || i._moveHover([], i.wrapper.children().first())), t) : (n.stopPropagation(), e(o).closest(".k-content").closest(".k-menu-group").closest(".k-item").addClass($), i.wrapper.focus(), t)
                },
                _keydown: function(e) {
                    var n, i, o, r = this,
                        a = e.keyCode,
                        s = r._oldHoverItem,
                        l = c.support.isRtl(r.wrapper);
                    if (e.target == e.currentTarget || a == w.ESC) {
                        if (s || (s = r._oldHoverItem = r._hoverItem()), i = r._itemBelongsToVertival(s), o = r._itemHasChildren(s), a == w.RIGHT) n = r[l ? "_itemLeft" : "_itemRight"](s, i, o);
                        else if (a == w.LEFT) n = r[l ? "_itemRight" : "_itemLeft"](s, i, o);
                        else if (a == w.DOWN) n = r._itemDown(s, i, o);
                        else if (a == w.UP) n = r._itemUp(s, i, o);
                        else if (a == w.ESC) n = r._itemEsc(s, i);
                        else if (a == w.ENTER || a == w.SPACEBAR) n = s.children(".k-link"), n.length > 0 && (r._click({
                            target: n[0],
                            preventDefault: function() {},
                            enterKey: !0
                        }), r._moveHover(s, r._findRootParent(s)));
                        else if (a == w.TAB) return n = r._findRootParent(s), r._moveHover(s, n), r._checkActiveElement(), t;
                        n && n[0] && (e.preventDefault(), e.stopPropagation())
                    }
                },
                _hoverItem: function() {
                    return this.wrapper.find(".k-item.k-state-hover,.k-item.k-state-focused").filter(":visible")
                },
                _itemBelongsToVertival: function(e) {
                    var t = this.wrapper.hasClass("k-menu-vertical");
                    return e.length ? e.parent().hasClass("k-menu-group") || t : t
                },
                _itemHasChildren: function(e) {
                    return e.length ? e.children("ul.k-menu-group, div.k-animation-container").length > 0 : !1
                },
                _moveHover: function(t, n) {
                    var i = this,
                        o = i._ariaId;
                    t.length && n.length && t.removeClass($), n.length && (n[0].id && (o = n[0].id), n.addClass($), i._oldHoverItem = n, o && (i.element.removeAttr("aria-activedescendant"), e("#" + o).removeAttr("id"), n.attr("id", o), i.element.attr("aria-activedescendant", o)))
                },
                _findRootParent: function(e) {
                    return this._isRootItem(e) ? e : e.parentsUntil(Q, "li.k-item").last()
                },
                _isRootItem: function(e) {
                    return e.parent().hasClass(S)
                },
                _itemRight: function(e, t, n) {
                    var i, o, r = this;
                    if (!e.hasClass(Y)) return t ? n ? (r.open(e), i = e.find(".k-menu-group").children().first()) : "horizontal" == r.options.orientation && (o = r._findRootParent(e), r.close(o), i = o.nextAll(ie)) : (i = e.nextAll(ie), i.length || (i = e.prevAll(oe))), i && !i.length ? i = r.wrapper.children(".k-item").first() : i || (i = []), r._moveHover(e, i), i
                },
                _itemLeft: function(e, t) {
                    var n, i = this;
                    return t ? (n = e.parent().closest(".k-item"), i.close(n), i._isRootItem(n) && "horizontal" == i.options.orientation && (n = n.prevAll(ie))) : (n = e.prevAll(ie), n.length || (n = e.nextAll(oe))), n.length || (n = i.wrapper.children(".k-item").last()), i._moveHover(e, n), n
                },
                _itemDown: function(e, t, n) {
                    var i, o = this;
                    if (t) i = e.nextAll(ie);
                    else {
                        if (!n || e.hasClass(Y)) return;
                        o.open(e), i = e.find(".k-menu-group").children().first()
                    }
                    return !i.length && e.length ? i = e.parent().children().first() : e.length || (i = o.wrapper.children(".k-item").first()), o._moveHover(e, i), i
                },
                _itemUp: function(e, t) {
                    var n, i = this;
                    if (t) return n = e.prevAll(ie), !n.length && e.length ? n = e.parent().children().last() : e.length || (n = i.wrapper.children(".k-item").last()), i._moveHover(e, n), n
                },
                _itemEsc: function(e, t) {
                    var n, i = this;
                    return t ? (n = e.parent().closest(".k-item"), i.close(n), i._moveHover(e, n), n) : e
                },
                _triggerEvent: function(e) {
                    var t = this;
                    return t.trigger(e.type, {
                        type: e.type,
                        item: e.item
                    })
                },
                _focusHandler: function(t) {
                    var n = this,
                        i = e(c.eventTarget(t)).closest(Z);
                    setTimeout(function() {
                        n._moveHover([], i), i.children(".k-content")[0] && i.parent().closest(".k-item").removeClass($)
                    }, 200)
                },
                _animations: function(e) {
                    e && "animation" in e && !e.animation && (e.animation = {
                        open: {
                            effects: {}
                        },
                        close: {
                            hide: !0,
                            effects: {}
                        }
                    })
                }
            });
        g(ce, {
            renderItem: function(e) {
                e = g({
                    menu: {},
                    group: {}
                }, e);
                var t = se.empty,
                    n = e.item;
                return se.item(g(e, {
                    image: n.imageUrl ? se.image : t,
                    sprite: n.spriteCssClass ? se.sprite : t,
                    itemWrapper: se.itemWrapper,
                    renderContent: ce.renderContent,
                    arrow: n.items || n.content ? se.arrow : t,
                    subGroup: ce.renderGroup
                }, le))
            },
            renderGroup: function(e) {
                return se.group(g({
                    renderItems: function(e) {
                        for (var t = "", n = 0, i = e.items, o = i ? i.length : 0, r = g({
                                length: o
                            }, e.group); o > n; n++) t += ce.renderItem(g(e, {
                            group: r,
                            item: g({
                                index: n
                            }, i[n])
                        }));
                        return t
                    }
                }, e, le))
            },
            renderContent: function(e) {
                return se.content(g(e, le))
            }
        }), l = ce.extend({
            init: function(t, n) {
                var i = this;
                ce.fn.init.call(i, t, n), i.target = e(i.options.target), i._popup(), i._wire()
            },
            options: {
                name: "ContextMenu",
                filter: null,
                showOn: "contextmenu",
                orientation: "vertical",
                alignToAnchor: !1,
                target: "body"
            },
            events: [C, A, B, z, I],
            setOptions: function(t) {
                var n = this;
                ce.fn.setOptions.call(n, t), n.target.off(n.showOn + x, n._showProxy), n.userEvents && n.userEvents.destroy(), n.target = e(n.options.target), t.orientation && n.popup.wrapper[0] && n.popup.element.unwrap(), n._wire(), ce.fn.setOptions.call(this, t)
            },
            destroy: function() {
                var e = this;
                e.target.off(e.options.showOn + x), W.off(c.support.mousedown + x, e._closeProxy), e.userEvents && e.userEvents.destroy(), ce.fn.destroy.call(e)
            },
            open: function(n, i) {
                var r = this;
                return n = e(n)[0], o(r.element[0], e(n)[0]) ? ce.fn.open.call(r, n) : r._triggerEvent({
                    item: r.element,
                    type: C
                }) === !1 && (r.popup.visible() && r.options.filter && (r.popup.close(!0), r.popup.element.kendoStop(!0)), i !== t ? (r.popup.wrapper.hide(), r.popup.open(n, i)) : (r.popup.options.anchor = (n ? n : r.popup.anchor) || r.target, r.popup.element.kendoStop(!0), r.popup.open()), W.off(r.popup.downEvent, r.popup._mousedownProxy), W.on(c.support.mousedown + x, r._closeProxy)), r
            },
            close: function() {
                var t = this;
                o(t.element[0], e(arguments[0])[0]) ? ce.fn.close.call(t, arguments[0]) : t.popup.visible() && t._triggerEvent({
                    item: t.element,
                    type: A
                }) === !1 && (t.popup.close(), W.off(c.support.mousedown + x, t._closeProxy), t.unbind(I, t._closeTimeoutProxy))
            },
            _showHandler: function(e) {
                var t, n = e,
                    i = this,
                    r = i.options;
                e.event && (n = e.event, n.pageX = e.x.location, n.pageY = e.y.location), o(i.element[0], e.relatedTarget || e.target) || (i._eventOrigin = n, n.preventDefault(), n.stopImmediatePropagation(), i.element.find("." + $).removeClass($), (r.filter && c.support.matchesSelector.call(n.currentTarget, r.filter) || !r.filter) && (r.alignToAnchor ? (i.popup.options.anchor = n.currentTarget, i.open(n.currentTarget)) : (i.popup.options.anchor = n.currentTarget, i._targetChild ? (t = i.target.offset(), i.open(n.pageX - t.left, n.pageY - t.top)) : i.open(n.pageX, n.pageY))))
            },
            _closeHandler: function(t) {
                var n, i = this,
                    r = e(t.relatedTarget || t.target),
                    a = r.closest(i.target.selector)[0] == i.target[0],
                    s = r.closest(ee).children(X),
                    l = o(i.element[0], r[0]);
                i._eventOrigin = t, n = 3 !== t.which, i.popup.visible() && (n && a || !a) && (i.options.closeOnClick && !s[0] && l || !l) && (l ? (this.unbind(I, this._closeTimeoutProxy), i.bind(I, i._closeTimeoutProxy)) : i.close())
            },
            _wire: function() {
                var e = this,
                    t = e.options,
                    n = e.target;
                e._showProxy = m(e._showHandler, e), e._closeProxy = m(e._closeHandler, e), e._closeTimeoutProxy = m(e.close, e), n[0] && (c.support.mobileOS && "contextmenu" == t.showOn ? (e.userEvents = new c.UserEvents(n, {
                    filter: t.filter,
                    allowSelection: !1
                }), n.on(t.showOn + x, !1), e.userEvents.bind("hold", e._showProxy)) : t.filter ? n.on(t.showOn + x, t.filter, e._showProxy) : n.on(t.showOn + x, e._showProxy))
            },
            _triggerEvent: function(n) {
                var i = this,
                    o = e(i.popup.options.anchor)[0],
                    r = i._eventOrigin;
                return i._eventOrigin = t, i.trigger(n.type, g({
                    type: n.type,
                    item: n.item || this.element[0],
                    target: o
                }, r ? {
                    event: r
                } : {}))
            },
            _popup: function() {
                var e = this;
                e._triggerProxy = m(e._triggerEvent, e), e.popup = e.element.addClass("k-context-menu").kendoPopup({
                    anchor: e.target || "body",
                    copyAnchorStyles: e.options.copyAnchorStyles,
                    collision: e.options.popupCollision || "fit",
                    animation: e.options.animation,
                    activate: e._triggerProxy,
                    deactivate: e._triggerProxy
                }).data("kendoPopup"), e._targetChild = o(e.target[0], e.popup.element[0])
            }
        }), u.plugin(ce), u.plugin(l)
    }(window.kendo.jQuery), window.kendo
})();;
(function() {
    return function(e, t) {
        function n(t) {
            t = e(t), t.children(v).children(".k-icon").remove(), t.filter(":has(.k-panel),:has(.k-content)").children(".k-link:not(:has([class*=k-i-arrow]))").each(function() {
                var t = e(this),
                    n = t.parent();
                t.append("<span class='k-icon " + (n.hasClass(I) ? "k-i-arrow-n k-panelbar-collapse" : "k-i-arrow-s k-panelbar-expand") + "'/>")
            })
        }

        function i(t) {
            t = e(t), t.filter(".k-first:not(:first-child)").removeClass(k), t.filter(".k-last:not(:last-child)").removeClass(g), t.filter(":first-child").addClass(k), t.filter(":last-child").addClass(g)
        }
        var o = window.kendo,
            r = o.ui,
            s = o.keys,
            a = e.extend,
            l = e.each,
            c = o.template,
            u = r.Widget,
            d = /^(ul|a|div)$/i,
            h = ".kendoPanelBar",
            f = "img",
            p = "href",
            g = "k-last",
            m = "k-link",
            v = "." + m,
            _ = "error",
            w = ".k-item",
            b = ".k-group",
            y = b + ":visible",
            x = "k-image",
            k = "k-first",
            C = "expand",
            S = "select",
            T = "k-content",
            D = "activate",
            A = "collapse",
            E = "mouseenter",
            M = "mouseleave",
            P = "contentLoad",
            I = "k-state-active",
            R = "> .k-panel",
            B = "> .k-content",
            z = "k-state-focused",
            L = "k-state-disabled",
            F = "k-state-selected",
            O = "." + F,
            N = "k-state-highlight",
            H = w + ":not(.k-state-disabled)",
            V = "> " + H + " > " + v + ", .k-panel > " + H + " > " + v,
            U = w + ".k-state-disabled > .k-link",
            W = "> li > " + O + ", .k-panel > li > " + O,
            j = "k-state-default",
            G = "aria-disabled",
            q = "aria-expanded",
            $ = "aria-hidden",
            Y = "aria-selected",
            Q = ":visible",
            K = ":empty",
            X = "single",
            Z = {
                content: c("<div role='region' class='k-content'#= contentAttributes(data) #>#= content(item) #</div>"),
                group: c("<ul role='group' aria-hidden='true' class='#= groupCssClass(group) #'#= groupAttributes(group) #>#= renderItems(data) #</ul>"),
                itemWrapper: c("<#= tag(item) # class='#= textClass(item, group) #' #= contentUrl(item) ##= textAttributes(item) #>#= image(item) ##= sprite(item) ##= text(item) ##= arrow(data) #</#= tag(item) #>"),
                item: c("<li role='menuitem' #=aria(item)#class='#= wrapperCssClass(group, item) #'>#= itemWrapper(data) ## if (item.items) { ##= subGroup({ items: item.items, panelBar: panelBar, group: { expanded: item.expanded } }) ## } else if (item.content || item.contentUrl) { ##= renderContent(data) ## } #</li>"),
                image: c("<img class='k-image' alt='' src='#= imageUrl #' />"),
                arrow: c("<span class='#= arrowClass(item) #'></span>"),
                sprite: c("<span class='k-sprite #= spriteCssClass #'></span>"),
                empty: c("")
            },
            J = {
                aria: function(e) {
                    var t = "";
                    return (e.items || e.content || e.contentUrl) && (t += q + "='" + (e.expanded ? "true" : "false") + "' "), e.enabled === !1 && (t += G + "='true'"), t
                },
                wrapperCssClass: function(e, t) {
                    var n = "k-item",
                        i = t.index;
                    return n += t.enabled === !1 ? " " + L : t.expanded === !0 ? " " + I : " k-state-default", 0 === i && (n += " k-first"), i == e.length - 1 && (n += " k-last"), t.cssClass && (n += " " + t.cssClass), n
                },
                textClass: function(e, t) {
                    var n = m;
                    return t.firstLevel && (n += " k-header"), n
                },
                textAttributes: function(e) {
                    return e.url ? " href='" + e.url + "'" : ""
                },
                arrowClass: function(e) {
                    var t = "k-icon";
                    return t += e.expanded ? " k-i-arrow-n k-panelbar-collapse" : " k-i-arrow-s k-panelbar-expand"
                },
                text: function(e) {
                    return e.encoded === !1 ? e.text : o.htmlEncode(e.text)
                },
                tag: function(e) {
                    return e.url || e.contentUrl ? "a" : "span"
                },
                groupAttributes: function(e) {
                    return e.expanded !== !0 ? " style='display:none'" : ""
                },
                groupCssClass: function() {
                    return "k-group k-panel"
                },
                contentAttributes: function(e) {
                    return e.item.expanded !== !0 ? " style='display:none'" : ""
                },
                content: function(e) {
                    return e.content ? e.content : e.contentUrl ? "" : "&nbsp;"
                },
                contentUrl: function(e) {
                    return e.contentUrl ? 'href="' + e.contentUrl + '"' : ""
                }
            },
            ee = u.extend({
                init: function(t, n) {
                    var i, r = this;
                    u.fn.init.call(r, t, n), t = r.wrapper = r.element.addClass("k-widget k-reset k-header k-panelbar"), n = r.options, t[0].id && (r._itemId = t[0].id + "_pb_active"), r._tabindex(), r._initData(n), r._updateClasses(), r._animations(n), t.on("click" + h, V, function(t) {
                        r._click(e(t.currentTarget)) && t.preventDefault()
                    }).on(E + h + " " + M + h, V, r._toggleHover).on("click" + h, U, !1).on("keydown" + h, e.proxy(r._keydown, r)).on("focus" + h, function() {
                        var e = r.select();
                        r._current(e[0] ? e : r._first())
                    }).on("blur" + h, function() {
                        r._current(null)
                    }).attr("role", "menu"), i = t.find("li." + I + " > ." + T), i[0] && r.expand(i.parent(), !1), r._angularCompile(), o.notify(r)
                },
                events: [C, A, S, D, _, P],
                options: {
                    name: "PanelBar",
                    animation: {
                        expand: {
                            effects: "expand:vertical",
                            duration: 200
                        },
                        collapse: {
                            duration: 200
                        }
                    },
                    expandMode: "multiple"
                },
                _angularCompile: function() {
                    var e = this;
                    e.angular("compile", function() {
                        return {
                            elements: e.element.children("li"),
                            data: [{
                                dataItem: e.options.$angular
                            }]
                        }
                    })
                },
                _angularCleanup: function() {
                    var e = this;
                    e.angular("cleanup", function() {
                        return {
                            elements: e.element.children("li")
                        }
                    })
                },
                destroy: function() {
                    u.fn.destroy.call(this), this.element.off(h), this._angularCleanup(), o.destroy(this.element)
                },
                _initData: function(e) {
                    var t = this;
                    e.dataSource && (t.element.empty(), t.append(e.dataSource, t.element))
                },
                setOptions: function(e) {
                    var t = this.options.animation;
                    this._animations(e), e.animation = a(!0, t, e.animation), "dataSource" in e && this._initData(e), u.fn.setOptions.call(this, e)
                },
                expand: function(n, i) {
                    var o = this,
                        r = {};
                    return o._animating && n.find("ul").is(":visible") ? (o.one("complete", function() {
                        setTimeout(function() {
                            o.expand(n)
                        })
                    }), t) : (o._animating = !0, i = i !== !1, n = this.element.find(n), n.each(function(t, s) {
                        s = e(s);
                        var a = s.find(R).add(s.find(B));
                        if (!s.hasClass(L) && a.length > 0) {
                            if (o.options.expandMode == X && o._collapseAllExpanded(s)) return o;
                            n.find("." + N).removeClass(N), s.addClass(N), i || (r = o.options.animation, o.options.animation = {
                                expand: {
                                    effects: {}
                                },
                                collapse: {
                                    hide: !0,
                                    effects: {}
                                }
                            }), o._triggerEvent(C, s) || o._toggleItem(s, !1), i || (o.options.animation = r)
                        }
                    }), o)
                },
                collapse: function(t, n) {
                    var i = this,
                        o = {};
                    return i._animating = !0, n = n !== !1, t = i.element.find(t), t.each(function(t, r) {
                        r = e(r);
                        var s = r.find(R).add(r.find(B));
                        !r.hasClass(L) && s.is(Q) && (r.removeClass(N), n || (o = i.options.animation, i.options.animation = {
                            expand: {
                                effects: {}
                            },
                            collapse: {
                                hide: !0,
                                effects: {}
                            }
                        }), i._triggerEvent(A, r) || i._toggleItem(r, !0), n || (i.options.animation = o))
                    }), i
                },
                _toggleDisabled: function(e, t) {
                    e = this.element.find(e), e.toggleClass(j, t).toggleClass(L, !t).attr(G, !t)
                },
                select: function(n) {
                    var i = this;
                    return n === t ? i.element.find(W).parent() : (n = i.element.find(n), n.length ? n.each(function() {
                        var n = e(this),
                            o = n.children(v);
                        return n.hasClass(L) ? i : (i._triggerEvent(S, n) || i._updateSelected(o), t)
                    }) : this._updateSelected(n), i)
                },
                clearSelection: function() {
                    this.select(e())
                },
                enable: function(e, t) {
                    return this._toggleDisabled(e, t !== !1), this
                },
                disable: function(e) {
                    return this._toggleDisabled(e, !1), this
                },
                append: function(e, t) {
                    t = this.element.find(t);
                    var o = this._insert(e, t, t.length ? t.find(R) : null);
                    return l(o.items, function() {
                        o.group.append(this), i(this)
                    }), n(t), i(o.group.find(".k-first, .k-last")), o.group.height("auto"), this
                },
                insertBefore: function(e, t) {
                    t = this.element.find(t);
                    var n = this._insert(e, t, t.parent());
                    return l(n.items, function() {
                        t.before(this), i(this)
                    }), i(t), n.group.height("auto"), this
                },
                insertAfter: function(e, t) {
                    t = this.element.find(t);
                    var n = this._insert(e, t, t.parent());
                    return l(n.items, function() {
                        t.after(this), i(this)
                    }), i(t), n.group.height("auto"), this
                },
                remove: function(e) {
                    e = this.element.find(e);
                    var t = this,
                        o = e.parentsUntil(t.element, w),
                        r = e.parent("ul");
                    return e.remove(), !r || r.hasClass("k-panelbar") || r.children(w).length || r.remove(), o.length && (o = o.eq(0), n(o), i(o)), t
                },
                reload: function(t) {
                    var n = this;
                    t = n.element.find(t), t.each(function() {
                        var t = e(this);
                        n._ajaxRequest(t, t.children("." + T), !t.is(Q))
                    })
                },
                _first: function() {
                    return this.element.children(H).first()
                },
                _last: function() {
                    var e = this.element.children(H).last(),
                        t = e.children(y);
                    return t[0] ? t.children(H).last() : e
                },
                _current: function(n) {
                    var i = this,
                        o = i._focused,
                        r = i._itemId;
                    return n === t ? o : (i.element.removeAttr("aria-activedescendant"), o && o.length && (o[0].id === r && o.removeAttr("id"), o.children(v).removeClass(z)), e(n).length && (r = n[0].id || r, n.attr("id", r).children(v).addClass(z), i.element.attr("aria-activedescendant", r)), i._focused = n, t)
                },
                _keydown: function(e) {
                    var t = this,
                        n = e.keyCode,
                        i = t._current();
                    e.target == e.currentTarget && (n == s.DOWN || n == s.RIGHT ? (t._current(t._nextItem(i)), e.preventDefault()) : n == s.UP || n == s.LEFT ? (t._current(t._prevItem(i)), e.preventDefault()) : n == s.ENTER || n == s.SPACEBAR ? (t._click(i.children(v)), e.preventDefault()) : n == s.HOME ? (t._current(t._first()), e.preventDefault()) : n == s.END && (t._current(t._last()), e.preventDefault()))
                },
                _nextItem: function(e) {
                    if (!e) return this._first();
                    var t = e.children(y),
                        n = e.nextAll(":visible").first();
                    return t[0] && (n = t.children("." + k)), n[0] || (n = e.parent(y).parent(w).next()), n[0] || (n = this._first()), n.hasClass(L) && (n = this._nextItem(n)), n
                },
                _prevItem: function(e) {
                    if (!e) return this._last();
                    var t, n = e.prevAll(":visible").first();
                    if (n[0])
                        for (t = n; t[0];) t = t.children(y).children("." + g), t[0] && (n = t);
                    else n = e.parent(y).parent(w), n[0] || (n = this._last());
                    return n.hasClass(L) && (n = this._prevItem(n)), n
                },
                _insert: function(t, n, i) {
                    var r, s, l = this,
                        c = e.isPlainObject(t),
                        u = n && n[0];
                    return u || (i = l.element), s = {
                        firstLevel: i.hasClass("k-panelbar"),
                        expanded: i.parent().hasClass(I),
                        length: i.children().length
                    }, u && !i.length && (i = e(ee.renderGroup({
                        group: s
                    })).appendTo(n)), t instanceof o.Observable && (t = t.toJSON()), c || e.isArray(t) ? (r = e.map(c ? [t] : t, function(t, n) {
                        return e("string" == typeof t ? t : ee.renderItem({
                            group: s,
                            item: a(t, {
                                index: n
                            })
                        }))
                    }), u && n.attr(q, !1)) : (r = "string" == typeof t && "<" != t.charAt(0) ? l.element.find(t) : e(t), l._updateItemsClasses(r)), {
                        items: r,
                        group: i
                    }
                },
                _toggleHover: function(t) {
                    var n = e(t.currentTarget);
                    n.parents("li." + L).length || n.toggleClass("k-state-hover", t.type == E)
                },
                _updateClasses: function() {
                    var t, o, r = this;
                    t = r.element.find("li > ul").not(function() {
                        return e(this).parentsUntil(".k-panelbar", "div").length
                    }).addClass("k-group k-panel").attr("role", "group"), t.parent().attr(q, !1).not("." + I).children("ul").attr($, !0).hide(), o = r.element.add(t).children(), r._updateItemsClasses(o), n(o), i(o)
                },
                _updateItemsClasses: function(e) {
                    for (var t = e.length, n = 0; t > n; n++) this._updateItemClasses(e[n], n)
                },
                _updateItemClasses: function(t, n) {
                    var i, r, s = this._selected,
                        a = this.options.contentUrls,
                        l = a && a[n],
                        c = this.element[0];
                    t = e(t).addClass("k-item").attr("role", "menuitem"), o.support.browser.msie && t.css("list-style-position", "inside").css("list-style-position", ""), t.children(f).addClass(x), r = t.children("a").addClass(m), r[0] && (r.attr("href", l), r.children(f).addClass(x)), t.filter(":not([disabled]):not([class*=k-state])").addClass("k-state-default"), t.filter("li[disabled]").addClass("k-state-disabled").attr(G, !0).removeAttr("disabled"), t.children("div").addClass(T).attr("role", "region").attr($, !0).hide().parent().attr(q, !1), r = t.children(O), r[0] && (s && s.removeAttr(Y).children(O).removeClass(F), r.addClass(F), this._selected = t.attr(Y, !0)), t.children(v)[0] || (i = "<span class='" + m + "'/>", a && a[n] && t[0].parentNode == c && (i = '<a class="k-link k-header" href="' + a[n] + '"/>'), t.contents().filter(function() {
                        return !(this.nodeName.match(d) || 3 == this.nodeType && !e.trim(this.nodeValue))
                    }).wrapAll(i)), t.parent(".k-panelbar")[0] && t.children(v).addClass("k-header")
                },
                _click: function(e) {
                    var t, n, i, o, r, s, a, l = this,
                        c = l.element;
                    if (!e.parents("li." + L).length && e.closest(".k-widget")[0] == c[0]) {
                        if (r = e.closest(v), s = r.closest(w), l._updateSelected(r), n = s.find(R).add(s.find(B)), i = r.attr(p), o = i && ("#" == i.charAt(i.length - 1) || -1 != i.indexOf("#" + l.element[0].id + "-")), t = !(!o && !n.length), n.data("animating")) return t;
                        if (l._triggerEvent(S, s) && (t = !0), t !== !1) return l.options.expandMode == X && l._collapseAllExpanded(s) ? t : (n.length && (a = n.is(Q), l._triggerEvent(a ? A : C, s) || (t = l._toggleItem(s, a))), t)
                    }
                },
                _toggleItem: function(e, n) {
                    var i, o, r = this,
                        s = e.find(R),
                        a = e.find(v),
                        l = a.attr(p);
                    return s.length ? (this._toggleGroup(s, n), i = !0) : (o = e.children("." + T), o.length && (i = !0, o.is(K) && l !== t ? r._ajaxRequest(e, o, n) : r._toggleGroup(o, n))), i
                },
                _toggleGroup: function(e, n) {
                    var i = this,
                        o = i.options.animation,
                        r = o.expand,
                        s = a({}, o.collapse),
                        l = s && "effects" in s;
                    return e.is(Q) != n ? (i._animating = !1, t) : (e.parent().attr(q, !n).attr($, n).toggleClass(I, !n).find("> .k-link > .k-icon").toggleClass("k-i-arrow-n", !n).toggleClass("k-panelbar-collapse", !n).toggleClass("k-i-arrow-s", n).toggleClass("k-panelbar-expand", n), n ? (r = a(l ? s : a({
                        reverse: !0
                    }, r), {
                        hide: !0
                    }), r.complete = function() {
                        i._animationCallback()
                    }) : r = a({
                        complete: function(e) {
                            i._triggerEvent(D, e.closest(w)), i._animationCallback()
                        }
                    }, r), e.kendoStop(!0, !0).kendoAnimate(r), t)
                },
                _animationCallback: function() {
                    var e = this;
                    e.trigger("complete"), e._animating = !1
                },
                _collapseAllExpanded: function(t) {
                    var n, i = this,
                        o = !1,
                        r = t.find(R).add(t.find(B));
                    return r.is(Q) && (o = !0), r.is(Q) || 0 === r.length || (n = t.siblings(), n.find(R).add(n.find(B)).filter(function() {
                        return e(this).is(Q)
                    }).each(function(t, n) {
                        n = e(n), o = i._triggerEvent(A, n.closest(w)), o || i._toggleGroup(n, !0)
                    })), o
                },
                _ajaxRequest: function(t, n, i) {
                    var o = this,
                        r = t.find(".k-panelbar-collapse, .k-panelbar-expand"),
                        s = t.find(v),
                        a = setTimeout(function() {
                            r.addClass("k-loading")
                        }, 100),
                        l = {},
                        c = s.attr(p);
                    e.ajax({
                        type: "GET",
                        cache: !1,
                        url: c,
                        dataType: "html",
                        data: l,
                        error: function(e, t) {
                            r.removeClass("k-loading"), o.trigger(_, {
                                xhr: e,
                                status: t
                            }) && this.complete()
                        },
                        complete: function() {
                            clearTimeout(a), r.removeClass("k-loading")
                        },
                        success: function(e) {
                            function r() {
                                return {
                                    elements: n.get()
                                }
                            }
                            try {
                                o.angular("cleanup", r), n.html(e), o.angular("compile", r)
                            } catch (s) {
                                var a = window.console;
                                a && a.error && a.error(s.name + ": " + s.message + " in " + c), this.error(this.xhr, "error")
                            }
                            o._toggleGroup(n, i), o.trigger(P, {
                                item: t[0],
                                contentElement: n[0]
                            })
                        }
                    })
                },
                _triggerEvent: function(e, t) {
                    var n = this;
                    return n.trigger(e, {
                        item: t[0]
                    })
                },
                _updateSelected: function(e) {
                    var t = this,
                        n = t.element,
                        i = e.parent(w),
                        o = t._selected;
                    o && o.removeAttr(Y), t._selected = i.attr(Y, !0), n.find(W).removeClass(F), n.find("> ." + N + ", .k-panel > ." + N).removeClass(N), e.addClass(F), e.parentsUntil(n, w).filter(":has(.k-header)").addClass(N), t._current(i[0] ? i : null)
                },
                _animations: function(e) {
                    e && "animation" in e && !e.animation && (e.animation = {
                        expand: {
                            effects: {}
                        },
                        collapse: {
                            hide: !0,
                            effects: {}
                        }
                    })
                }
            });
        a(ee, {
            renderItem: function(e) {
                e = a({
                    panelBar: {},
                    group: {}
                }, e);
                var t = Z.empty,
                    n = e.item;
                return Z.item(a(e, {
                    image: n.imageUrl ? Z.image : t,
                    sprite: n.spriteCssClass ? Z.sprite : t,
                    itemWrapper: Z.itemWrapper,
                    renderContent: ee.renderContent,
                    arrow: n.items || n.content || n.contentUrl ? Z.arrow : t,
                    subGroup: ee.renderGroup
                }, J))
            },
            renderGroup: function(e) {
                return Z.group(a({
                    renderItems: function(e) {
                        for (var t = "", n = 0, i = e.items, o = i ? i.length : 0, r = a({
                                length: o
                            }, e.group); o > n; n++) t += ee.renderItem(a(e, {
                            group: r,
                            item: a({
                                index: n
                            }, i[n])
                        }));
                        return t
                    }
                }, e, J))
            },
            renderContent: function(e) {
                return Z.content(a(e, J))
            }
        }), o.ui.plugin(ee)
    }(window.kendo.jQuery), window.kendo
})();;
(function() {
    return function(e) {
        function t(e) {
            for (; e.length;) n(e), e = e.parent()
        }

        function n(e) {
            var t = e.data(r.ns + "title");
            t && (e.attr("title", t), e.removeData(r.ns + "title"))
        }

        function i(e) {
            var t = e.attr("title");
            t && (e.data(r.ns + "title", t), e.attr("title", ""))
        }

        function o(e) {
            for (; e.length && !e.is("body");) i(e), e = e.parent()
        }
        var r = window.kendo,
            a = r.ui.Widget,
            s = r.ui.Popup,
            l = r.isFunction,
            c = e.isPlainObject,
            u = e.extend,
            d = e.proxy,
            h = e(document),
            f = r.isLocalUrl,
            p = "_tt_active",
            g = "aria-describedby",
            m = "show",
            v = "hide",
            _ = "error",
            y = "contentLoad",
            b = "requestStart",
            w = "k-content-frame",
            x = '<div role="tooltip" class="k-widget k-tooltip#if (!autoHide) {# k-tooltip-closable#}#">#if (!autoHide) {# <div class="k-tooltip-button"><a href="\\#" class="k-icon k-i-close">close</a></div> #}#<div class="k-tooltip-content"></div>#if (callout){ #<div class="k-callout k-callout-#=dir#"></div>#}#</div>',
            k = r.template("<iframe frameborder='0' class='" + w + "' src='#= content.url #'>This page requires frames in order to show content</iframe>"),
            C = ".kendoTooltip",
            S = {
                bottom: {
                    origin: "bottom center",
                    position: "top center"
                },
                top: {
                    origin: "top center",
                    position: "bottom center"
                },
                left: {
                    origin: "center left",
                    position: "center right",
                    collision: "fit flip"
                },
                right: {
                    origin: "center right",
                    position: "center left",
                    collision: "fit flip"
                },
                center: {
                    position: "center center",
                    origin: "center center"
                }
            },
            T = {
                top: "bottom",
                bottom: "top",
                left: "right",
                right: "left",
                center: "center"
            },
            A = {
                bottom: "n",
                top: "s",
                left: "e",
                right: "w",
                center: "n"
            },
            D = {
                horizontal: {
                    offset: "top",
                    size: "outerHeight"
                },
                vertical: {
                    offset: "left",
                    size: "outerWidth"
                }
            },
            M = function(e) {
                return e.target.data(r.ns + "title")
            },
            E = a.extend({
                init: function(e, t) {
                    var n, i = this;
                    a.fn.init.call(i, e, t), n = i.options.position.match(/left|right/) ? "horizontal" : "vertical", i.dimensions = D[n], i._documentKeyDownHandler = d(i._documentKeyDown, i), i.element.on(i.options.showOn + C, i.options.filter, d(i._showOn, i)).on("mouseenter" + C, i.options.filter, d(i._mouseenter, i)), this.options.autoHide && i.element.on("mouseleave" + C, i.options.filter, d(i._mouseleave, i))
                },
                options: {
                    name: "Tooltip",
                    filter: "",
                    content: M,
                    showAfter: 100,
                    callout: !0,
                    position: "bottom",
                    showOn: "mouseenter",
                    autoHide: !0,
                    width: null,
                    height: null,
                    animation: {
                        open: {
                            effects: "fade:in",
                            duration: 0
                        },
                        close: {
                            effects: "fade:out",
                            duration: 40,
                            hide: !0
                        }
                    }
                },
                events: [m, v, y, _, b],
                _mouseenter: function(t) {
                    o(e(t.currentTarget))
                },
                _showOn: function(t) {
                    var n = this,
                        i = e(t.currentTarget);
                    n.options.showOn && n.options.showOn.match(/click|focus/) ? n._show(i) : (clearTimeout(n.timeout), n.timeout = setTimeout(function() {
                        n._show(i)
                    }, n.options.showAfter))
                },
                _appendContent: function(e) {
                    var t, n = this,
                        i = n.options.content,
                        o = n.content,
                        a = n.options.iframe;
                    c(i) && i.url ? ("iframe" in n.options || (a = !f(i.url)), n.trigger(b, {
                        options: i,
                        target: e
                    }), a ? (o.hide(), t = o.find("." + w)[0], t ? t.src = i.url || t.src : o.html(k({
                        content: i
                    })), o.find("." + w).off("load" + C).on("load" + C, function() {
                        n.trigger(y), o.show()
                    })) : (o.empty(), r.ui.progress(o, !0), n._ajaxRequest(i))) : i && l(i) ? (i = i({
                        sender: this,
                        target: e
                    }), o.html(i || "")) : o.html(i), n.angular("compile", function() {
                        return {
                            elements: o
                        }
                    })
                },
                _ajaxRequest: function(e) {
                    var t = this;
                    jQuery.ajax(u({
                        type: "GET",
                        dataType: "html",
                        cache: !1,
                        error: function(e, n) {
                            r.ui.progress(t.content, !1), t.trigger(_, {
                                status: n,
                                xhr: e
                            })
                        },
                        success: d(function(e) {
                            r.ui.progress(t.content, !1), t.content.html(e), t.trigger(y)
                        }, t)
                    }, e))
                },
                _documentKeyDown: function(e) {
                    e.keyCode === r.keys.ESC && this.hide()
                },
                refresh: function() {
                    var e = this,
                        t = e.popup;
                    t && t.options.anchor && e._appendContent(t.options.anchor)
                },
                hide: function() {
                    this.popup && this.popup.close()
                },
                show: function(e) {
                    e = e || this.element, o(e), this._show(e)
                },
                _show: function(e) {
                    var n = this,
                        i = n.target();
                    n.popup || n._initPopup(), i && i[0] != e[0] && (n.popup.close(), n.popup.element.kendoStop(!0, !0)), i && i[0] == e[0] || (n._appendContent(e), n.popup.options.anchor = e), n.popup.one("deactivate", function() {
                        t(e), e.removeAttr(g), this.element.removeAttr("id").attr("aria-hidden", !0), h.off("keydown" + C, n._documentKeyDownHandler)
                    }), n.popup.open()
                },
                _initPopup: function() {
                    var t = this,
                        n = t.options,
                        i = e(r.template(x)({
                            callout: n.callout && "center" !== n.position,
                            dir: A[n.position],
                            autoHide: n.autoHide
                        }));
                    t.popup = new s(i, u({
                        activate: function() {
                            var e = this.options.anchor,
                                i = e[0].id || t.element[0].id;
                            i && (e.attr(g, i + p), this.element.attr("id", i + p)), n.callout && t._positionCallout(), this.element.removeAttr("aria-hidden"), h.on("keydown" + C, t._documentKeyDownHandler), t.trigger(m)
                        },
                        close: function() {
                            t.trigger(v)
                        },
                        copyAnchorStyles: !1,
                        animation: n.animation
                    }, S[n.position])), i.css({
                        width: n.width,
                        height: n.height
                    }), t.content = i.find(".k-tooltip-content"), t.arrow = i.find(".k-callout"), n.autoHide ? i.on("mouseleave" + C, d(t._mouseleave, t)) : i.on("click" + C, ".k-tooltip-button", d(t._closeButtonClick, t))
                },
                _closeButtonClick: function(e) {
                    e.preventDefault(), this.hide()
                },
                _mouseleave: function(n) {
                    if (this.popup) {
                        var i = e(n.currentTarget),
                            o = i.offset(),
                            r = n.pageX,
                            a = n.pageY;
                        if (o.right = o.left + i.outerWidth(), o.bottom = o.top + i.outerHeight(), r > o.left && o.right > r && a > o.top && o.bottom > a) return;
                        this.popup.close()
                    } else t(e(n.currentTarget));
                    clearTimeout(this.timeout)
                },
                _positionCallout: function() {
                    var t = this,
                        n = t.options.position,
                        i = t.dimensions,
                        o = i.offset,
                        r = t.popup,
                        a = r.options.anchor,
                        s = e(a).offset(),
                        l = parseInt(t.arrow.css("border-top-width"), 10),
                        c = e(r.element).offset(),
                        u = A[r.flipped ? T[n] : n],
                        d = s[o] - c[o] + e(a)[i.size]() / 2 - l;
                    t.arrow.removeClass("k-callout-n k-callout-s k-callout-w k-callout-e").addClass("k-callout-" + u).css(o, d)
                },
                target: function() {
                    return this.popup ? this.popup.options.anchor : null
                },
                destroy: function() {
                    var e = this.popup;
                    e && (e.element.off(C), e.destroy()), clearTimeout(this.timeout), this.element.off(C), h.off("keydown" + C, this._documentKeyDownHandler), a.fn.destroy.call(this)
                }
            });
        r.ui.plugin(E)
    }(window.kendo.jQuery), window.kendo
})();;
(function() {
    return function(e, t) {
        function n(e) {
            return function(t) {
                var n = t.children(".k-animation-container");
                return n.length || (n = t), n.children(e)
            }
        }

        function i(e) {
            return f.template(e, {
                useWithBlock: !1
            })
        }

        function r(e) {
            return e.find("> div .k-checkbox [type=checkbox]")
        }

        function o(e) {
            return function(t, n) {
                n = n.closest(W);
                var i, r = n.parent();
                return r.parent().is("li") && (i = r.parent()), this._dataSourceMove(t, r, i, function(t, i) {
                    return this._insert(t.data(), i, n.index() + e)
                })
            }
        }

        function a(t, n) {
            for (var i; t && "ul" != t.nodeName.toLowerCase();) i = t, t = t.nextSibling, 3 == i.nodeType && (i.nodeValue = e.trim(i.nodeValue)), h.test(i.className) ? n.insertBefore(i, n.firstChild) : n.appendChild(i)
        }

        function s(t) {
            var n = t.children("div"),
                i = t.children("ul"),
                r = n.children(".k-icon"),
                o = t.children(":checkbox"),
                s = n.children(".k-in");
            t.hasClass("k-treeview") || (n.length || (n = e("<div />").prependTo(t)), !r.length && i.length ? r = e("<span class='k-icon' />").prependTo(n) : i.length && i.children().length || (r.remove(), i.remove()), o.length && e("<span class='k-checkbox' />").appendTo(n).append(o), s.length || (s = t.children("a").eq(0).addClass("k-in"), s.length || (s = e("<span class='k-in' />")), s.appendTo(n), n.length && a(n[0].nextSibling, s[0])))
        }
        var l, c, u, d, h, f = window.kendo,
            p = f.ui,
            g = f.data,
            m = e.extend,
            v = f.template,
            _ = e.isArray,
            y = p.Widget,
            b = g.HierarchicalDataSource,
            w = e.proxy,
            x = f.keys,
            k = ".kendoTreeView",
            C = "select",
            S = "check",
            T = "navigate",
            A = "expand",
            D = "change",
            M = "error",
            E = "checked",
            P = "indeterminate",
            I = "collapse",
            R = "dragstart",
            z = "drag",
            B = "drop",
            L = "dragend",
            F = "dataBound",
            O = "click",
            N = "undefined",
            H = "k-state-hover",
            V = "k-treeview",
            U = ":visible",
            W = ".k-item",
            j = "string",
            G = "aria-selected",
            q = "aria-disabled",
            $ = {
                text: "dataTextField",
                url: "dataUrlField",
                spriteCssClass: "dataSpriteCssClassField",
                imageUrl: "dataImageUrlField"
            },
            Y = function(e) {
                return "object" == typeof HTMLElement ? e instanceof HTMLElement : e && "object" == typeof e && 1 === e.nodeType && typeof e.nodeName === j
            };
        c = n(".k-group"), u = n(".k-group,.k-content"), d = function(e) {
            return e.children("div").children(".k-icon")
        }, h = /k-sprite/, l = f.ui.DataBoundWidget.extend({
            init: function(e, t) {
                var n, i, r = this,
                    o = !1,
                    a = t && !!t.dataSource;
                _(t) && (n = !0, t = {
                    dataSource: t
                }), t && typeof t.loadOnDemand == N && _(t.dataSource) && (t.loadOnDemand = !1), y.prototype.init.call(r, e, t), e = r.element, t = r.options, i = e.is("ul") && e || e.hasClass(V) && e.children("ul"), o = !a && i.length, o && (t.dataSource.list = i), r._animation(), r._accessors(), r._templates(), e.hasClass(V) ? (r.wrapper = e, r.root = e.children("ul").eq(0)) : (r._wrapper(), i && (r.root = e, r._group(r.wrapper))), r._tabindex(), r.root.attr("role", "tree"), r._dataSource(o), r._attachEvents(), r._dragging(), o ? r._syncHtmlAndDataSource() : t.autoBind && (r._progress(!0), r.dataSource.fetch()), t.checkboxes && t.checkboxes.checkChildren && r.updateIndeterminate(), r.element[0].id && (r._ariaId = f.format("{0}_tv_active", r.element[0].id)), f.notify(r)
            },
            _attachEvents: function() {
                var t = this,
                    n = ".k-in:not(.k-state-selected,.k-state-disabled)",
                    i = "mouseenter";
                t.wrapper.on(i + k, ".k-in.k-state-selected", function(e) {
                    e.preventDefault()
                }).on(i + k, n, function() {
                    e(this).addClass(H)
                }).on("mouseleave" + k, n, function() {
                    e(this).removeClass(H)
                }).on(O + k, n, w(t._click, t)).on("dblclick" + k, ".k-in:not(.k-state-disabled)", w(t._toggleButtonClick, t)).on(O + k, ".k-plus,.k-minus", w(t._toggleButtonClick, t)).on("keydown" + k, w(t._keydown, t)).on("focus" + k, w(t._focus, t)).on("blur" + k, w(t._blur, t)).on("mousedown" + k, ".k-in,.k-checkbox :checkbox,.k-plus,.k-minus", w(t._mousedown, t)).on("change" + k, ".k-checkbox :checkbox", w(t._checkboxChange, t)).on("click" + k, ".k-checkbox :checkbox", w(t._checkboxClick, t)).on("click" + k, ".k-request-retry", w(t._retryRequest, t)).on("click" + k, function(n) {
                    e(n.target).is(":kendoFocusable") || t.focus()
                })
            },
            _checkboxClick: function(t) {
                var n = e(t.target);
                n.data(P) && (n.data(P, !1).prop(P, !1).prop(E, !0), this._checkboxChange(t))
            },
            _syncHtmlAndDataSource: function(e, t) {
                var n, i, o, a, s, l, c, u;
                for (e = e || this.root, t = t || this.dataSource, n = t.view(), i = f.attr("uid"), o = f.attr("expanded"), a = this.options.checkboxes, s = e.children("li"), l = 0; s.length > l; l++) u = n[l], c = s.eq(l), c.attr("role", "treeitem").attr(i, u.uid), u.expanded = "true" === c.attr(o), a && (u.checked = r(c).prop(E)), this._syncHtmlAndDataSource(c.children("ul"), u.children)
            },
            _animation: function() {
                var e = this.options,
                    t = e.animation;
                t === !1 ? t = {
                    expand: {
                        effects: {}
                    },
                    collapse: {
                        hide: !0,
                        effects: {}
                    }
                } : t.collapse && "effects" in t.collapse || (t.collapse = m({
                    reverse: !0
                }, t.expand)), m(t.collapse, {
                    hide: !0
                }), e.animation = t
            },
            _dragging: function() {
                var t, n = this.options.dragAndDrop,
                    i = this.dragging;
                n && !i ? (t = this, this.dragging = new p.HierarchicalDragAndDrop(this.element, {
                    reorderable: !0,
                    $angular: this.options.$angular,
                    autoScroll: this.options.autoScroll,
                    filter: "div:not(.k-state-disabled) .k-in",
                    allowedContainers: ".k-treeview",
                    itemSelector: ".k-treeview .k-item",
                    hintText: w(this._hintText, this),
                    contains: function(t, n) {
                        return e.contains(t, n)
                    },
                    dropHintContainer: function(e) {
                        return e
                    },
                    itemFromTarget: function(e) {
                        var t = e.closest(".k-top,.k-mid,.k-bot");
                        return {
                            item: t,
                            content: e.closest(".k-in"),
                            first: t.hasClass("k-top"),
                            last: t.hasClass("k-bot")
                        }
                    },
                    dropPositionFrom: function(e) {
                        return e.prevAll(".k-in").length > 0 ? "after" : "before"
                    },
                    dragstart: function(e) {
                        return t.trigger(R, {
                            sourceNode: e[0]
                        })
                    },
                    drag: function(e) {
                        t.trigger(z, {
                            originalEvent: e.originalEvent,
                            sourceNode: e.source[0],
                            dropTarget: e.target[0],
                            pageY: e.pageY,
                            pageX: e.pageX,
                            statusClass: e.status,
                            setStatusClass: e.setStatus
                        })
                    },
                    drop: function(e) {
                        return t.trigger(B, {
                            originalEvent: e.originalEvent,
                            sourceNode: e.source,
                            destinationNode: e.destination,
                            valid: e.valid,
                            setValid: function(t) {
                                this.valid = t, e.setValid(t)
                            },
                            dropTarget: e.dropTarget,
                            dropPosition: e.position
                        })
                    },
                    dragend: function(e) {
                        function n(n) {
                            t.updateIndeterminate(), t.trigger(L, {
                                originalEvent: e.originalEvent,
                                sourceNode: n && n[0],
                                destinationNode: r[0],
                                dropPosition: o
                            })
                        }
                        var i = e.source,
                            r = e.destination,
                            o = e.position;
                        "over" == o ? t.append(i, r, n) : ("before" == o ? i = t.insertBefore(i, r) : "after" == o && (i = t.insertAfter(i, r)), n(i))
                    }
                })) : !n && i && (i.destroy(), this.dragging = null)
            },
            _hintText: function(e) {
                return this.templates.dragClue({
                    item: this.dataItem(e),
                    treeview: this.options
                })
            },
            _templates: function() {
                var e = this,
                    t = e.options,
                    n = w(e._fieldAccessor, e);
                t.template && typeof t.template == j ? t.template = v(t.template) : t.template || (t.template = i("# var text = " + n("text") + "(data.item); ## if (typeof data.item.encoded != 'undefined' && data.item.encoded === false) {##= text ## } else { ##: text ## } #")), e._checkboxes(), e.templates = {
                    wrapperCssClass: function(e, t) {
                        var n = "k-item",
                            i = t.index;
                        return e.firstLevel && 0 === i && (n += " k-first"), i == e.length - 1 && (n += " k-last"), n
                    },
                    cssClass: function(e, t) {
                        var n = "",
                            i = t.index,
                            r = e.length - 1;
                        return e.firstLevel && 0 === i && (n += "k-top "), n += 0 === i && i != r ? "k-top" : i == r ? "k-bot" : "k-mid"
                    },
                    textClass: function(e) {
                        var t = "k-in";
                        return e.enabled === !1 && (t += " k-state-disabled"), e.selected === !0 && (t += " k-state-selected"), t
                    },
                    toggleButtonClass: function(e) {
                        var t = "k-icon";
                        return t += e.expanded !== !0 ? " k-plus" : " k-minus", e.enabled === !1 && (t += "-disabled"), t
                    },
                    groupAttributes: function(e) {
                        var t = "";
                        return e.firstLevel || (t = "role='group'"), t + (e.expanded !== !0 ? " style='display:none'" : "")
                    },
                    groupCssClass: function(e) {
                        var t = "k-group";
                        return e.firstLevel && (t += " k-treeview-lines"), t
                    },
                    dragClue: i("#= data.treeview.template(data) #"),
                    group: i("<ul class='#= data.r.groupCssClass(data.group) #'#= data.r.groupAttributes(data.group) #>#= data.renderItems(data) #</ul>"),
                    itemContent: i("# var imageUrl = " + n("imageUrl") + "(data.item); ## var spriteCssClass = " + n("spriteCssClass") + "(data.item); ## if (imageUrl) { #<img class='k-image' alt='' src='#= imageUrl #'># } ## if (spriteCssClass) { #<span class='k-sprite #= spriteCssClass #' /># } ##= data.treeview.template(data) #"),
                    itemElement: i("# var item = data.item, r = data.r; ## var url = " + n("url") + "(item); #<div class='#= r.cssClass(data.group, item) #'># if (item.hasChildren) { #<span class='#= r.toggleButtonClass(item) #' role='presentation' /># } ## if (data.treeview.checkboxes) { #<span class='k-checkbox' role='presentation'>#= data.treeview.checkboxes.template(data) #</span># } ## var tag = url ? 'a' : 'span'; ## var textAttr = url ? ' href=\\'' + url + '\\'' : ''; #<#=tag#  class='#= r.textClass(item) #'#= textAttr #>#= r.itemContent(data) #</#=tag#></div>"),
                    item: i("# var item = data.item, r = data.r; #<li role='treeitem' class='#= r.wrapperCssClass(data.group, item) #' " + f.attr("uid") + "='#= item.uid #' aria-selected='#= item.selected ? \"true\" : \"false \" #' #=item.enabled === false ? \"aria-disabled='true'\" : ''## if (item.expanded) { #data-expanded='true' aria-expanded='true'# } #>#= r.itemElement(data) #</li>"),
                    loading: i("<div class='k-icon k-loading' /> #: data.messages.loading #"),
                    retry: i("#: data.messages.requestFailed # <button class='k-button k-request-retry'>#: data.messages.retry #</button>")
                }
            },
            items: function() {
                return this.element.find(".k-item > div:first-child")
            },
            setDataSource: function(t) {
                var n = this.options;
                n.dataSource = t, this._dataSource(), n.checkboxes && n.checkboxes.checkChildren && this.dataSource.one("change", e.proxy(this.updateIndeterminate, this, null)), this.dataSource.fetch()
            },
            _bindDataSource: function() {
                this._refreshHandler = w(this.refresh, this), this._errorHandler = w(this._error, this), this.dataSource.bind(D, this._refreshHandler), this.dataSource.bind(M, this._errorHandler)
            },
            _unbindDataSource: function() {
                var e = this.dataSource;
                e && (e.unbind(D, this._refreshHandler), e.unbind(M, this._errorHandler))
            },
            _dataSource: function(e) {
                function t(e) {
                    for (var n = 0; e.length > n; n++) e[n]._initChildren(), e[n].children.fetch(), t(e[n].children.view())
                }
                var n = this,
                    i = n.options,
                    r = i.dataSource;
                r = _(r) ? {
                    data: r
                } : r, n._unbindDataSource(), r.fields || (r.fields = [{
                    field: "text"
                }, {
                    field: "url"
                }, {
                    field: "spriteCssClass"
                }, {
                    field: "imageUrl"
                }]), n.dataSource = r = b.create(r), e && (r.fetch(), t(r.view())), n._bindDataSource()
            },
            events: [R, z, B, L, F, A, I, C, D, T, S],
            options: {
                name: "TreeView",
                dataSource: {},
                animation: {
                    expand: {
                        effects: "expand:vertical",
                        duration: 200
                    },
                    collapse: {
                        duration: 100
                    }
                },
                messages: {
                    loading: "Loading...",
                    requestFailed: "Request failed.",
                    retry: "Retry"
                },
                dragAndDrop: !1,
                checkboxes: !1,
                autoBind: !0,
                autoScroll: !1,
                loadOnDemand: !0,
                template: "",
                dataTextField: null
            },
            _accessors: function() {
                var e, t, n, i = this,
                    r = i.options,
                    o = i.element;
                for (e in $) t = r[$[e]], n = o.attr(f.attr(e + "-field")), !t && n && (t = n), t || (t = e), _(t) || (t = [t]), r[$[e]] = t
            },
            _fieldAccessor: function(t) {
                var n = this.options[$[t]],
                    i = n.length,
                    r = "(function(item) {";
                return 0 === i ? r += "return item['" + t + "'];" : (r += "var levels = [" + e.map(n, function(e) {
                    return "function(d){ return " + f.expr(e) + "}"
                }).join(",") + "];", r += "return levels[Math.min(item.level(), " + i + "-1)](item)"), r += "})"
            },
            setOptions: function(e) {
                y.fn.setOptions.call(this, e), this._animation(), this._dragging(), this._templates()
            },
            _trigger: function(e, t) {
                return this.trigger(e, {
                    node: t.closest(W)[0]
                })
            },
            _setChecked: function(t, n) {
                if (t && e.isFunction(t.view))
                    for (var i = 0, r = t.view(); r.length > i; i++) r[i][E] = n, r[i].children && this._setChecked(r[i].children, n)
            },
            _setIndeterminate: function(e) {
                var t, n, i, o = c(e),
                    a = !0;
                if (o.length && (t = r(o.children()), n = t.length)) {
                    if (n > 1) {
                        for (i = 1; n > i; i++)
                            if (t[i].checked != t[i - 1].checked || t[i].indeterminate || t[i - 1].indeterminate) {
                                a = !1;
                                break
                            }
                    } else a = !t[0].indeterminate;
                    return r(e).data(P, !a).prop(P, !a).prop(E, a && t[0].checked)
                }
            },
            updateIndeterminate: function(e) {
                var t, n, i;
                if (e = e || this.wrapper, t = c(e).children(), t.length) {
                    for (n = 0; t.length > n; n++) this.updateIndeterminate(t.eq(n));
                    i = this._setIndeterminate(e), i && i.prop(E) && (this.dataItem(e).checked = !0)
                }
            },
            _bubbleIndeterminate: function(e) {
                if (e.length) {
                    var t, n = this.parent(e);
                    n.length && (this._setIndeterminate(n), t = n.children("div").find(".k-checkbox :checkbox"), t.prop(P) === !1 ? this.dataItem(n).set(E, t.prop(E)) : delete this.dataItem(n).checked, this._bubbleIndeterminate(n))
                }
            },
            _checkboxChange: function(t) {
                var n = e(t.target),
                    i = n.prop(E),
                    r = n.closest(W),
                    o = this.dataItem(r);
                o.checked != i && (o.set(E, i), this._trigger(S, r))
            },
            _toggleButtonClick: function(t) {
                this.toggle(e(t.target).closest(W))
            },
            _mousedown: function(t) {
                var n = e(t.currentTarget).closest(W);
                this._clickTarget = n, this.current(n)
            },
            _focusable: function(e) {
                return e && e.length && e.is(":visible") && !e.find(".k-in:first").hasClass("k-state-disabled")
            },
            _focus: function() {
                var t = this.select(),
                    n = this._clickTarget;
                f.support.touch || (n && n.length && (t = n), this._focusable(t) || (t = this.current()), this._focusable(t) || (t = this._nextVisible(e())), this.current(t))
            },
            focus: function() {
                var e, t = this.wrapper,
                    n = t[0],
                    i = [],
                    r = [],
                    o = document.documentElement;
                do n = n.parentNode, n.scrollHeight > n.clientHeight && (i.push(n), r.push(n.scrollTop)); while (n != o);
                for (t.focus(), e = 0; i.length > e; e++) i[e].scrollTop = r[e]
            },
            _blur: function() {
                this.current().find(".k-in:first").removeClass("k-state-focused")
            },
            _enabled: function(e) {
                return !e.children("div").children(".k-in").hasClass("k-state-disabled")
            },
            parent: function(t) {
                var n, i, r = /\bk-treeview\b/,
                    o = /\bk-item\b/;
                typeof t == j && (t = this.element.find(t)), Y(t) || (t = t[0]), i = o.test(t.className);
                do t = t.parentNode, o.test(t.className) && (i ? n = t : i = !0); while (!r.test(t.className) && !n);
                return e(n)
            },
            _nextVisible: function(e) {
                function t(e) {
                    for (; e.length && !e.next().length;) e = i.parent(e);
                    return e.next().length ? e.next() : e
                }
                var n, i = this,
                    r = i._expanded(e);
                return e.length && e.is(":visible") ? r ? (n = c(e).children().first(), n.length || (n = t(e))) : n = t(e) : n = i.root.children().eq(0), i._enabled(n) || (n = i._nextVisible(n)), n
            },
            _previousVisible: function(e) {
                var t, n, i = this;
                if (!e.length || e.prev().length)
                    for (n = e.length ? e.prev() : i.root.children().last(); i._expanded(n) && (t = c(n).children().last(), t.length);) n = t;
                else n = i.parent(e) || e;
                return i._enabled(n) || (n = i._previousVisible(n)), n
            },
            _keydown: function(n) {
                var i, r = this,
                    o = n.keyCode,
                    a = r.current(),
                    s = r._expanded(a),
                    l = a.find(".k-checkbox:first :checkbox"),
                    c = f.support.isRtl(r.element);
                n.target == n.currentTarget && (!c && o == x.RIGHT || c && o == x.LEFT ? s ? i = r._nextVisible(a) : r.expand(a) : !c && o == x.LEFT || c && o == x.RIGHT ? s ? r.collapse(a) : (i = r.parent(a), r._enabled(i) || (i = t)) : o == x.DOWN ? i = r._nextVisible(a) : o == x.UP ? i = r._previousVisible(a) : o == x.HOME ? i = r._nextVisible(e()) : o == x.END ? i = r._previousVisible(e()) : o == x.ENTER ? a.find(".k-in:first").hasClass("k-state-selected") || r._trigger(C, a) || r.select(a) : o == x.SPACEBAR && l.length && (l.prop(E, !l.prop(E)).data(P, !1).prop(P, !1), r._checkboxChange({
                    target: l
                }), i = a), i && (n.preventDefault(), a[0] != i[0] && (r._trigger(T, i), r.current(i))))
            },
            _click: function(t) {
                var n, i = this,
                    r = e(t.currentTarget),
                    o = u(r.closest(W)),
                    a = r.attr("href");
                n = a ? "#" == a || a.indexOf("#" + this.element.id + "-") >= 0 : o.length && !o.children().length, n && t.preventDefault(), r.hasClass(".k-state-selected") || i._trigger(C, r) || i.select(r)
            },
            _wrapper: function() {
                var e, t, n = this,
                    i = n.element,
                    r = "k-widget k-treeview";
                i.is("ul") ? (e = i.wrap("<div />").parent(), t = i) : (e = i, t = e.children("ul").eq(0)), n.wrapper = e.addClass(r), n.root = t
            },
            _group: function(e) {
                var t = this,
                    n = e.hasClass(V),
                    i = {
                        firstLevel: n,
                        expanded: n || t._expanded(e)
                    },
                    r = e.children("ul");
                r.addClass(t.templates.groupCssClass(i)).css("display", i.expanded ? "" : "none"), t._nodes(r, i)
            },
            _nodes: function(t, n) {
                var i, r = this,
                    o = t.children("li");
                n = m({
                    length: o.length
                }, n), o.each(function(t, o) {
                    o = e(o), i = {
                        index: t,
                        expanded: r._expanded(o)
                    }, s(o), r._updateNodeClasses(o, n, i), r._group(o)
                })
            },
            _checkboxes: function() {
                var e, t = this.options,
                    n = t.checkboxes;
                n && (e = "<input type='checkbox' #= (item.enabled === false) ? 'disabled' : '' # #= item.checked ? 'checked' : '' #", n.name && (e += " name='" + n.name + "'"), e += " />", n = m({
                    template: e
                }, t.checkboxes), typeof n.template == j && (n.template = v(n.template)), t.checkboxes = n)
            },
            _updateNodeClasses: function(e, t, n) {
                var i = e.children("div"),
                    r = e.children("ul"),
                    o = this.templates;
                e.hasClass("k-treeview") || (n = n || {}, n.expanded = typeof n.expanded != N ? n.expanded : this._expanded(e), n.index = typeof n.index != N ? n.index : e.index(), n.enabled = typeof n.enabled != N ? n.enabled : !i.children(".k-in").hasClass("k-state-disabled"), t = t || {}, t.firstLevel = typeof t.firstLevel != N ? t.firstLevel : e.parent().parent().hasClass(V), t.length = typeof t.length != N ? t.length : e.parent().children().length, e.removeClass("k-first k-last").addClass(o.wrapperCssClass(t, n)), i.removeClass("k-top k-mid k-bot").addClass(o.cssClass(t, n)), i.children(".k-in").removeClass("k-in k-state-default k-state-disabled").addClass(o.textClass(n)), (r.length || "true" == e.attr("data-hasChildren")) && (i.children(".k-icon").removeClass("k-plus k-minus k-plus-disabled k-minus-disabled").addClass(o.toggleButtonClass(n)), r.addClass("k-group")))
            },
            _processNodes: function(t, n) {
                var i = this;
                i.element.find(t).each(function(t, r) {
                    n.call(i, t, e(r).closest(W))
                })
            },
            dataItem: function(t) {
                var n = e(t).closest(W).attr(f.attr("uid")),
                    i = this.dataSource;
                return i && i.getByUid(n)
            },
            _insertNode: function(t, n, i, r, o) {
                var a, l, u, d, h = this,
                    f = c(i),
                    p = f.children().length + 1,
                    g = {
                        firstLevel: i.hasClass(V),
                        expanded: !o,
                        length: p
                    },
                    m = "",
                    v = function(e, t) {
                        e.appendTo(t)
                    };
                for (u = 0; t.length > u; u++) d = t[u], d.index = n + u, m += h._renderItem({
                    group: g,
                    item: d
                });
                if (l = e(m), l.length) {
                    for (h.angular("compile", function() {
                            return {
                                elements: l.get(),
                                data: t.map(function(e) {
                                    return {
                                        dataItem: e
                                    }
                                })
                            }
                        }), f.length || (f = e(h._renderGroup({
                            group: g
                        })).appendTo(i)), r(l, f), i.hasClass("k-item") && (s(i), h._updateNodeClasses(i)), h._updateNodeClasses(l.prev().first()), h._updateNodeClasses(l.next().last()), u = 0; t.length > u; u++) d = t[u], d.hasChildren && (a = d.children.data(), a.length && h._insertNode(a, d.index, l.eq(u), v, !h._expanded(l.eq(u))));
                    return l
                }
            },
            _updateNodes: function(t, n) {
                function i(e, t) {
                    e.find(".k-checkbox :checkbox").prop(E, t).data(P, !1).prop(P, !1)
                }
                var r, o, a, s, l, c, d, h = this,
                    f = {
                        treeview: h.options,
                        item: s
                    },
                    g = "expanded" != n && "checked" != n;
                if ("selected" == n) s = t[0], o = h.findByUid(s.uid).find(".k-in:first").removeClass("k-state-hover").toggleClass("k-state-selected", s[n]).end(), s[n] && h.current(o), o.attr(G, !!s[n]);
                else {
                    for (d = e.map(t, function(e) {
                            return h.findByUid(e.uid).children("div")
                        }), g && h.angular("cleanup", function() {
                            return {
                                elements: d
                            }
                        }), r = 0; t.length > r; r++) f.item = s = t[r], a = d[r], o = a.parent(), g && a.children(".k-in").html(h.templates.itemContent(f)), n == E ? (l = s[n], i(a, l), h.options.checkboxes.checkChildren && (i(o.children(".k-group"), l), h._setChecked(s.children, l), h._bubbleIndeterminate(o))) : "expanded" == n ? h._toggle(o, s, s[n]) : "enabled" == n && (o.find(".k-checkbox :checkbox").prop("disabled", !s[n]), c = !u(o).is(U), o.removeAttr(q), s[n] || (s.selected && s.set("selected", !1), s.expanded && s.set("expanded", !1), c = !0, o.attr(G, !1).attr(q, !0)), h._updateNodeClasses(o, {}, {
                        enabled: s[n],
                        expanded: !c
                    })), a.length && this.trigger("itemChange", {
                        item: a,
                        data: s,
                        ns: p
                    });
                    g && h.angular("compile", function() {
                        return {
                            elements: d,
                            data: e.map(t, function(e) {
                                return [{
                                    dataItem: e
                                }]
                            })
                        }
                    })
                }
            },
            _appendItems: function(e, t, n) {
                var i = c(n),
                    r = i.children(),
                    o = !this._expanded(n);
                typeof e == N && (e = r.length), this._insertNode(t, e, n, function(t, n) {
                    e >= r.length ? t.appendTo(n) : t.insertBefore(r.eq(e))
                }, o), this._expanded(n) && (this._updateNodeClasses(n), c(n).css("display", "block"))
            },
            _refreshChildren: function(e, t, n) {
                var i, r, o, a = this.options,
                    l = a.loadOnDemand,
                    u = a.checkboxes && a.checkboxes.checkChildren;
                if (c(e).empty(), t.length)
                    for (this._appendItems(n, t, e), r = c(e).children(), l && u && this._bubbleIndeterminate(r.last()), i = 0; r.length > i; i++) o = r.eq(i), this.trigger("itemChange", {
                        item: o.children("div"),
                        data: this.dataItem(o),
                        ns: p
                    });
                else s(e)
            },
            _refreshRoot: function(t) {
                var n, i, r, o = this._renderGroup({
                    items: t,
                    group: {
                        firstLevel: !0,
                        expanded: !0
                    }
                });
                for (this.root.length ? (this._angularItems("cleanup"), n = e(o), this.root.attr("class", n.attr("class")).html(n.html())) : this.root = this.wrapper.html(o).children("ul"), this.root.attr("role", "tree"), i = 0; t.length > i; i++) r = this.root.children(".k-item"), this.trigger("itemChange", {
                    item: r.eq(i),
                    data: t[i],
                    ns: p
                });
                this._angularItems("compile")
            },
            refresh: function(e) {
                var n, i, r = e.node,
                    o = e.action,
                    a = e.items,
                    s = this.wrapper,
                    l = this.options,
                    c = l.loadOnDemand,
                    u = l.checkboxes && l.checkboxes.checkChildren;
                if (e.field) {
                    if (!a[0] || !a[0].level) return;
                    return this._updateNodes(a, e.field)
                }
                if (r && (s = this.findByUid(r.uid), this._progress(s, !1)), u && "remove" != o) {
                    for (i = !1, n = 0; a.length > n; n++)
                        if ("checked" in a[n]) {
                            i = !0;
                            break
                        }
                    if (!i && r && r.checked)
                        for (n = 0; a.length > n; n++) a[n].checked = !0
                }
                if ("add" == o ? this._appendItems(e.index, a, s) : "remove" == o ? this._remove(this.findByUid(a[0].uid), !1) : "itemchange" == o ? this._updateNodes(a) : "itemloaded" == o ? this._refreshChildren(s, a, e.index) : this._refreshRoot(a), "remove" != o)
                    for (n = 0; a.length > n; n++)(!c || a[n].expanded) && a[n].load();
                this.trigger(F, {
                    node: r ? s : t
                })
            },
            _error: function(e) {
                var t = e.node && this.findByUid(e.node.uid),
                    n = this.templates.retry({
                        messages: this.options.messages
                    });
                t ? (this._progress(t, !1), this._expanded(t, !1), d(t).addClass("k-i-refresh"), e.node.loaded(!1)) : (this._progress(!1), this.element.html(n))
            },
            _retryRequest: function(e) {
                e.preventDefault(), this.dataSource.fetch()
            },
            expand: function(e) {
                this._processNodes(e, function(e, t) {
                    this.toggle(t, !0)
                })
            },
            collapse: function(e) {
                this._processNodes(e, function(e, t) {
                    this.toggle(t, !1)
                })
            },
            enable: function(e, t) {
                t = 2 == arguments.length ? !!t : !0, this._processNodes(e, function(e, n) {
                    this.dataItem(n).set("enabled", t)
                })
            },
            current: function(n) {
                var i = this,
                    r = i._current,
                    o = i.element,
                    a = i._ariaId;
                return arguments.length > 0 && n && n.length ? (r && (r[0].id === a && r.removeAttr("id"), r.find(".k-in:first").removeClass("k-state-focused")), r = i._current = e(n, o).closest(W), r.find(".k-in:first").addClass("k-state-focused"), a = r[0].id || a, a && (i.wrapper.removeAttr("aria-activedescendant"), r.attr("id", a), i.wrapper.attr("aria-activedescendant", a)), t) : (r || (r = i._nextVisible(e())), r)
            },
            select: function(n) {
                var i = this,
                    r = i.element;
                return arguments.length ? (n = e(n, r).closest(W), r.find(".k-state-selected").each(function() {
                    var t = i.dataItem(this);
                    t ? (t.set("selected", !1), delete t.selected) : e(this).removeClass("k-state-selected")
                }), n.length && i.dataItem(n).set("selected", !0), i.trigger(D), t) : r.find(".k-state-selected").closest(W)
            },
            _toggle: function(e, t, n) {
                var i, r = this.options,
                    o = u(e),
                    a = n ? "expand" : "collapse";
                o.data("animating") || this._trigger(a, e) || (this._expanded(e, n), i = t && t.loaded(), n && !i ? (r.loadOnDemand && this._progress(e, !0), o.remove(), t.load()) : (this._updateNodeClasses(e, {}, {
                    expanded: n
                }), n || o.css("height", o.height()).css("height"), o.kendoStop(!0, !0).kendoAnimate(m({
                    reset: !0
                }, r.animation[a], {
                    complete: function() {
                        n && o.css("height", "")
                    }
                }))))
            },
            toggle: function(t, n) {
                t = e(t), d(t).is(".k-minus,.k-plus,.k-minus-disabled,.k-plus-disabled") && (1 == arguments.length && (n = !this._expanded(t)), this._expanded(t, n))
            },
            destroy: function() {
                var e = this;
                y.fn.destroy.call(e), e.wrapper.off(k), e._unbindDataSource(), e.dragging && e.dragging.destroy(), f.destroy(e.element), e.root = e.wrapper = e.element = null
            },
            _expanded: function(e, n) {
                var i = f.attr("expanded"),
                    r = this.dataItem(e);
                return 1 == arguments.length ? "true" === e.attr(i) || r && r.expanded : (u(e).data("animating") || (r && (r.set("expanded", n), n = r.expanded), n ? (e.attr(i, "true"), e.attr("aria-expanded", "true")) : (e.removeAttr(i), e.attr("aria-expanded", "false"))), t)
            },
            _progress: function(e, t) {
                var n = this.element,
                    i = this.templates.loading({
                        messages: this.options.messages
                    });
                1 == arguments.length ? (t = e, t ? n.html(i) : n.empty()) : d(e).toggleClass("k-loading", t).removeClass("k-i-refresh")
            },
            text: function(e, n) {
                var i = this.dataItem(e),
                    r = this.options[$.text],
                    o = i.level(),
                    a = r.length,
                    s = r[Math.min(o, a - 1)];
                return n ? (i.set(s, n), t) : i[s]
            },
            _objectOrSelf: function(t) {
                return e(t).closest("[data-role=treeview]").data("kendoTreeView") || this
            },
            _dataSourceMove: function(t, n, i, r) {
                var o, a = this._objectOrSelf(i || n),
                    s = a.dataSource,
                    l = e.Deferred().resolve().promise();
                return i && i[0] != a.element[0] && (o = a.dataItem(i), o.loaded() || (a._progress(i, !0), l = o.load()), i != this.root && (s = o.children, s && s instanceof b || (o._initChildren(), o.loaded(!0), s = o.children))), t = this._toObservableData(t), r.call(this, s, t, l)
            },
            _toObservableData: function(t) {
                var n, i, r = t;
                return (t instanceof window.jQuery || Y(t)) && (n = this._objectOrSelf(t).dataSource, i = e(t).attr(f.attr("uid")), r = n.getByUid(i), r && (r = n.remove(r))), r
            },
            _insert: function(e, t, n) {
                t instanceof f.data.ObservableArray ? t = t.toJSON() : _(t) || (t = [t]);
                var i = e.parent();
                return i && i._initChildren && (i.hasChildren = !0, i._initChildren()), e.splice.apply(e, [n, 0].concat(t)), this.findByUid(e[n].uid)
            },
            insertAfter: o(1),
            insertBefore: o(0),
            append: function(t, n, i) {
                var r = this,
                    o = r.root;
                return n && (o = c(n)), r._dataSourceMove(t, o, n, function(t, o, a) {
                    function s() {
                        n && r._expanded(n, !0);
                        var e = t.data(),
                            i = Math.max(e.length, 0);
                        return r._insert(e, o, i)
                    }
                    var l;
                    return a.then(function() {
                        l = s(), (i = i || e.noop)(l)
                    }), l || null
                })
            },
            _remove: function(t, n) {
                var i, r, o, a = this;
                return t = e(t, a.element), this.angular("cleanup", function() {
                    return {
                        elements: t.get()
                    }
                }), i = t.parent().parent(), r = t.prev(), o = t.next(), t[n ? "detach" : "remove"](), i.hasClass("k-item") && (s(i), a._updateNodeClasses(i)), a._updateNodeClasses(r), a._updateNodeClasses(o), t
            },
            remove: function(e) {
                var t = this.dataItem(e);
                t && this.dataSource.remove(t)
            },
            detach: function(e) {
                return this._remove(e, !0)
            },
            findByText: function(t) {
                return e(this.element).find(".k-in").filter(function(n, i) {
                    return e(i).text() == t
                }).closest(W)
            },
            findByUid: function(t) {
                var n, i, r = this.element.find(".k-item"),
                    o = f.attr("uid");
                for (i = 0; r.length > i; i++)
                    if (r[i].getAttribute(o) == t) {
                        n = r[i];
                        break
                    }
                return e(n)
            },
            expandPath: function(n, i) {
                function r(e, t, n) {
                    e && !e.loaded() ? e.set("expanded", !0) : t.call(n)
                }
                var o, a, s;
                for (n = n.slice(0), o = this, a = this.dataSource, s = a.get(n[0]), i = i || e.noop; n.length > 0 && s && (s.expanded || s.loaded());) s.set("expanded", !0), n.shift(), s = a.get(n[0]);
                return n.length ? (a.bind("change", function(e) {
                    var t, s = e.node && e.node.id;
                    s && s === n[0] && (n.shift(), n.length ? (t = a.get(n[0]), r(t, i, o)) : i.call(o))
                }), r(s, i, o), t) : i.call(o)
            },
            _parentIds: function(e) {
                for (var t = e && e.parentNode(), n = []; t && t.parentNode;) n.unshift(t.id), t = t.parentNode();
                return n
            },
            expandTo: function(e) {
                e instanceof f.data.Node || (e = this.dataSource.get(e));
                var t = this._parentIds(e);
                this.expandPath(t)
            },
            _renderItem: function(e) {
                return e.group || (e.group = {}), e.treeview = this.options, e.r = this.templates, this.templates.item(e)
            },
            _renderGroup: function(e) {
                var t = this;
                return e.renderItems = function(e) {
                    var n = "",
                        i = 0,
                        r = e.items,
                        o = r ? r.length : 0,
                        a = e.group;
                    for (a.length = o; o > i; i++) e.group = a, e.item = r[i], e.item.index = i, n += t._renderItem(e);
                    return n
                }, e.r = t.templates, t.templates.group(e)
            }
        }), p.plugin(l)
    }(window.kendo.jQuery), window.kendo
})();;
(function() {
    return function(e) {
        var t = window.kendo,
            n = t.ui.Widget,
            i = e.proxy,
            o = Math.abs,
            r = 20,
            a = n.extend({
                init: function(e, o) {
                    function r(e) {
                        return function(t) {
                            s._triggerTouch(e, t)
                        }
                    }

                    function a(e) {
                        return function(t) {
                            s.trigger(e, {
                                touches: t.touches,
                                distance: t.distance,
                                center: t.center,
                                event: t.event
                            })
                        }
                    }
                    var s = this;
                    n.fn.init.call(s, e, o), o = s.options, e = s.element, s.wrapper = e, s.events = new t.UserEvents(e, {
                        filter: o.filter,
                        surface: o.surface,
                        minHold: o.minHold,
                        multiTouch: o.multiTouch,
                        allowSelection: !0,
                        press: r("touchstart"),
                        hold: r("hold"),
                        tap: i(s, "_tap"),
                        gesturestart: a("gesturestart"),
                        gesturechange: a("gesturechange"),
                        gestureend: a("gestureend")
                    }), o.enableSwipe ? (s.events.bind("start", i(s, "_swipestart")), s.events.bind("move", i(s, "_swipemove"))) : (s.events.bind("start", i(s, "_dragstart")), s.events.bind("move", r("drag")), s.events.bind("end", r("dragend"))), t.notify(s)
                },
                events: ["touchstart", "dragstart", "drag", "dragend", "tap", "doubletap", "hold", "swipe", "gesturestart", "gesturechange", "gestureend"],
                options: {
                    name: "Touch",
                    surface: null,
                    global: !1,
                    multiTouch: !1,
                    enableSwipe: !1,
                    minXDelta: 30,
                    maxYDelta: 20,
                    maxDuration: 1e3,
                    minHold: 800,
                    doubleTapTimeout: 800
                },
                cancel: function() {
                    this.events.cancel()
                },
                _triggerTouch: function(e, t) {
                    this.trigger(e, {
                        touch: t.touch,
                        event: t.event
                    }) && t.preventDefault()
                },
                _tap: function(e) {
                    var n = this,
                        i = n.lastTap,
                        o = e.touch;
                    i && n.options.doubleTapTimeout > o.endTime - i.endTime && t.touchDelta(o, i).distance < r ? (n._triggerTouch("doubletap", e), n.lastTap = null) : (n._triggerTouch("tap", e), n.lastTap = o)
                },
                _dragstart: function(e) {
                    this._triggerTouch("dragstart", e)
                },
                _swipestart: function(e) {
                    2 * o(e.x.velocity) >= o(e.y.velocity) && e.sender.capture()
                },
                _swipemove: function(e) {
                    var t = this,
                        n = t.options,
                        i = e.touch,
                        r = e.event.timeStamp - i.startTime,
                        a = i.x.initialDelta > 0 ? "right" : "left";
                    o(i.x.initialDelta) >= n.minXDelta && o(i.y.initialDelta) < n.maxYDelta && n.maxDuration > r && (t.trigger("swipe", {
                        direction: a,
                        touch: e.touch
                    }), i.cancel())
                }
            });
        t.ui.plugin(a)
    }(window.kendo.jQuery), window.kendo
})();;
/* DO NOT MODIFY OR DELETE THIS LINE! UPGRADE WIZARD CHECKSUM CB43F145632B8923CE537B9D040AE4F8 */