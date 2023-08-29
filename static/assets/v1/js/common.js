/* 사용 스크립트
 * - jQuery, - jQuery UI, - jQuery Easing,
 * - swiper, - Waypoints
 * - anime, - lottie
 * */

/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!(function (e, t) {
  'use strict';
  'object' == typeof module && 'object' == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document) throw new Error('jQuery requires a window with a document');
            return t(e);
          })
    : t(e);
})('undefined' != typeof window ? window : this, function (C, e) {
  'use strict';
  var t = [],
    r = Object.getPrototypeOf,
    s = t.slice,
    g = t.flat
      ? function (e) {
          return t.flat.call(e);
        }
      : function (e) {
          return t.concat.apply([], e);
        },
    u = t.push,
    i = t.indexOf,
    n = {},
    o = n.toString,
    v = n.hasOwnProperty,
    a = v.toString,
    l = a.call(Object),
    y = {},
    m = function (e) {
      return 'function' == typeof e && 'number' != typeof e.nodeType && 'function' != typeof e.item;
    },
    x = function (e) {
      return null != e && e === e.window;
    },
    E = C.document,
    c = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function b(e, t, n) {
    var r,
      i,
      o = (n = n || E).createElement('script');
    if (((o.text = e), t)) for (r in c) (i = t[r] || (t.getAttribute && t.getAttribute(r))) && o.setAttribute(r, i);
    n.head.appendChild(o).parentNode.removeChild(o);
  }
  function w(e) {
    return null == e ? e + '' : 'object' == typeof e || 'function' == typeof e ? n[o.call(e)] || 'object' : typeof e;
  }
  var f = '3.6.0',
    S = function (e, t) {
      return new S.fn.init(e, t);
    };
  function p(e) {
    var t = !!e && 'length' in e && e.length,
      n = w(e);
    return !m(e) && !x(e) && ('array' === n || 0 === t || ('number' == typeof t && 0 < t && t - 1 in e));
  }
  (S.fn = S.prototype =
    {
      jquery: f,
      constructor: S,
      length: 0,
      toArray: function () {
        return s.call(this);
      },
      get: function (e) {
        return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
      },
      pushStack: function (e) {
        var t = S.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return S.each(this, e);
      },
      map: function (n) {
        return this.pushStack(
          S.map(this, function (e, t) {
            return n.call(e, t, e);
          })
        );
      },
      slice: function () {
        return this.pushStack(s.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      even: function () {
        return this.pushStack(
          S.grep(this, function (e, t) {
            return (t + 1) % 2;
          })
        );
      },
      odd: function () {
        return this.pushStack(
          S.grep(this, function (e, t) {
            return t % 2;
          })
        );
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= n && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: u,
      sort: t.sort,
      splice: t.splice
    }),
    (S.extend = S.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          l = !1;
        for ('boolean' == typeof a && ((l = a), (a = arguments[s] || {}), s++), 'object' == typeof a || m(a) || (a = {}), s === u && ((a = this), s--); s < u; s++)
          if (null != (e = arguments[s]))
            for (t in e)
              (r = e[t]),
                '__proto__' !== t &&
                  a !== r &&
                  (l && r && (S.isPlainObject(r) || (i = Array.isArray(r)))
                    ? ((n = a[t]), (o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {}), (i = !1), (a[t] = S.extend(l, o, r)))
                    : void 0 !== r && (a[t] = r));
        return a;
      }),
    S.extend({
      expando: 'jQuery' + (f + Math.random()).replace(/\D/g, ''),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return !(!e || '[object Object]' !== o.call(e)) && (!(t = r(e)) || ('function' == typeof (n = v.call(t, 'constructor') && t.constructor) && a.call(n) === l));
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e, t, n) {
        b(e, { nonce: t && t.nonce }, n);
      },
      each: function (e, t) {
        var n,
          r = 0;
        if (p(e)) {
          for (n = e.length; r < n; r++) if (!1 === t.call(e[r], r, e[r])) break;
        } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      makeArray: function (e, t) {
        var n = t || [];
        return null != e && (p(Object(e)) ? S.merge(n, 'string' == typeof e ? [e] : e) : u.call(n, e)), n;
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : i.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
        return r;
      },
      map: function (e, t, n) {
        var r,
          i,
          o = 0,
          a = [];
        if (p(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
        else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
        return g(a);
      },
      guid: 1,
      support: y
    }),
    'function' == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]),
    S.each('Boolean Number String Function Array Date RegExp Object Error Symbol'.split(' '), function (e, t) {
      n['[object ' + t + ']'] = t.toLowerCase();
    });
  var d = (function (n) {
    var e,
      d,
      b,
      o,
      i,
      h,
      f,
      g,
      w,
      u,
      l,
      T,
      C,
      a,
      E,
      v,
      s,
      c,
      y,
      S = 'sizzle' + 1 * new Date(),
      p = n.document,
      k = 0,
      r = 0,
      m = ue(),
      x = ue(),
      A = ue(),
      N = ue(),
      j = function (e, t) {
        return e === t && (l = !0), 0;
      },
      D = {}.hasOwnProperty,
      t = [],
      q = t.pop,
      L = t.push,
      H = t.push,
      O = t.slice,
      P = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
      },
      R = 'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
      M = '[\\x20\\t\\r\\n\\f]',
      I = '(?:\\\\[\\da-fA-F]{1,6}' + M + '?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+',
      W = '\\[' + M + '*(' + I + ')(?:' + M + '*([*^$|!~]?=)' + M + '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' + I + '))|)' + M + '*\\]',
      F = ':(' + I + ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' + W + ')*)|.*)\\)|)',
      B = new RegExp(M + '+', 'g'),
      $ = new RegExp('^' + M + '+|((?:^|[^\\\\])(?:\\\\.)*)' + M + '+$', 'g'),
      _ = new RegExp('^' + M + '*,' + M + '*'),
      z = new RegExp('^' + M + '*([>+~]|' + M + ')' + M + '*'),
      U = new RegExp(M + '|>'),
      X = new RegExp(F),
      V = new RegExp('^' + I + '$'),
      G = {
        ID: new RegExp('^#(' + I + ')'),
        CLASS: new RegExp('^\\.(' + I + ')'),
        TAG: new RegExp('^(' + I + '|[*])'),
        ATTR: new RegExp('^' + W),
        PSEUDO: new RegExp('^' + F),
        CHILD: new RegExp('^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' + M + '*(even|odd|(([+-]|)(\\d*)n|)' + M + '*(?:([+-]|)' + M + '*(\\d+)|))' + M + '*\\)|)', 'i'),
        bool: new RegExp('^(?:' + R + ')$', 'i'),
        needsContext: new RegExp('^' + M + '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' + M + '*((?:-\\d)?\\d*)' + M + '*\\)|)(?=[^-]|$)', 'i')
      },
      Y = /HTML$/i,
      Q = /^(?:input|select|textarea|button)$/i,
      J = /^h\d$/i,
      K = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ee = /[+~]/,
      te = new RegExp('\\\\[\\da-fA-F]{1,6}' + M + '?|\\\\([^\\r\\n\\f])', 'g'),
      ne = function (e, t) {
        var n = '0x' + e.slice(1) - 65536;
        return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320));
      },
      re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ie = function (e, t) {
        return t ? ('\0' === e ? '\ufffd' : e.slice(0, -1) + '\\' + e.charCodeAt(e.length - 1).toString(16) + ' ') : '\\' + e;
      },
      oe = function () {
        T();
      },
      ae = be(
        function (e) {
          return !0 === e.disabled && 'fieldset' === e.nodeName.toLowerCase();
        },
        { dir: 'parentNode', next: 'legend' }
      );
    try {
      H.apply((t = O.call(p.childNodes)), p.childNodes), t[p.childNodes.length].nodeType;
    } catch (e) {
      H = {
        apply: t.length
          ? function (e, t) {
              L.apply(e, O.call(t));
            }
          : function (e, t) {
              var n = e.length,
                r = 0;
              while ((e[n++] = t[r++]));
              e.length = n - 1;
            }
      };
    }
    function se(t, e, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = e && e.ownerDocument,
        p = e ? e.nodeType : 9;
      if (((n = n || []), 'string' != typeof t || !t || (1 !== p && 9 !== p && 11 !== p))) return n;
      if (!r && (T(e), (e = e || C), E)) {
        if (11 !== p && (u = Z.exec(t)))
          if ((i = u[1])) {
            if (9 === p) {
              if (!(a = e.getElementById(i))) return n;
              if (a.id === i) return n.push(a), n;
            } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n;
          } else {
            if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
            if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n;
          }
        if (d.qsa && !N[t + ' '] && (!v || !v.test(t)) && (1 !== p || 'object' !== e.nodeName.toLowerCase())) {
          if (((c = t), (f = e), 1 === p && (U.test(t) || z.test(t)))) {
            ((f = (ee.test(t) && ye(e.parentNode)) || e) === e && d.scope) || ((s = e.getAttribute('id')) ? (s = s.replace(re, ie)) : e.setAttribute('id', (s = S))), (o = (l = h(t)).length);
            while (o--) l[o] = (s ? '#' + s : ':scope') + ' ' + xe(l[o]);
            c = l.join(',');
          }
          try {
            return H.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            N(t, !0);
          } finally {
            s === S && e.removeAttribute('id');
          }
        }
      }
      return g(t.replace($, '$1'), e, n, r);
    }
    function ue() {
      var r = [];
      return function e(t, n) {
        return r.push(t + ' ') > b.cacheLength && delete e[r.shift()], (e[t + ' '] = n);
      };
    }
    function le(e) {
      return (e[S] = !0), e;
    }
    function ce(e) {
      var t = C.createElement('fieldset');
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function fe(e, t) {
      var n = e.split('|'),
        r = n.length;
      while (r--) b.attrHandle[n[r]] = t;
    }
    function pe(e, t) {
      var n = t && e,
        r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while ((n = n.nextSibling)) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function de(t) {
      return function (e) {
        return 'input' === e.nodeName.toLowerCase() && e.type === t;
      };
    }
    function he(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ('input' === t || 'button' === t) && e.type === n;
      };
    }
    function ge(t) {
      return function (e) {
        return 'form' in e
          ? e.parentNode && !1 === e.disabled
            ? 'label' in e
              ? 'label' in e.parentNode
                ? e.parentNode.disabled === t
                : e.disabled === t
              : e.isDisabled === t || (e.isDisabled !== !t && ae(e) === t)
            : e.disabled === t
          : 'label' in e && e.disabled === t;
      };
    }
    function ve(a) {
      return le(function (o) {
        return (
          (o = +o),
          le(function (e, t) {
            var n,
              r = a([], e.length, o),
              i = r.length;
            while (i--) e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
          })
        );
      });
    }
    function ye(e) {
      return e && 'undefined' != typeof e.getElementsByTagName && e;
    }
    for (e in ((d = se.support = {}),
    (i = se.isXML =
      function (e) {
        var t = e && e.namespaceURI,
          n = e && (e.ownerDocument || e).documentElement;
        return !Y.test(t || (n && n.nodeName) || 'HTML');
      }),
    (T = se.setDocument =
      function (e) {
        var t,
          n,
          r = e ? e.ownerDocument || e : p;
        return (
          r != C &&
            9 === r.nodeType &&
            r.documentElement &&
            ((a = (C = r).documentElement),
            (E = !i(C)),
            p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener('unload', oe, !1) : n.attachEvent && n.attachEvent('onunload', oe)),
            (d.scope = ce(function (e) {
              return a.appendChild(e).appendChild(C.createElement('div')), 'undefined' != typeof e.querySelectorAll && !e.querySelectorAll(':scope fieldset div').length;
            })),
            (d.attributes = ce(function (e) {
              return (e.className = 'i'), !e.getAttribute('className');
            })),
            (d.getElementsByTagName = ce(function (e) {
              return e.appendChild(C.createComment('')), !e.getElementsByTagName('*').length;
            })),
            (d.getElementsByClassName = K.test(C.getElementsByClassName)),
            (d.getById = ce(function (e) {
              return (a.appendChild(e).id = S), !C.getElementsByName || !C.getElementsByName(S).length;
            })),
            d.getById
              ? ((b.filter.ID = function (e) {
                  var t = e.replace(te, ne);
                  return function (e) {
                    return e.getAttribute('id') === t;
                  };
                }),
                (b.find.ID = function (e, t) {
                  if ('undefined' != typeof t.getElementById && E) {
                    var n = t.getElementById(e);
                    return n ? [n] : [];
                  }
                }))
              : ((b.filter.ID = function (e) {
                  var n = e.replace(te, ne);
                  return function (e) {
                    var t = 'undefined' != typeof e.getAttributeNode && e.getAttributeNode('id');
                    return t && t.value === n;
                  };
                }),
                (b.find.ID = function (e, t) {
                  if ('undefined' != typeof t.getElementById && E) {
                    var n,
                      r,
                      i,
                      o = t.getElementById(e);
                    if (o) {
                      if ((n = o.getAttributeNode('id')) && n.value === e) return [o];
                      (i = t.getElementsByName(e)), (r = 0);
                      while ((o = i[r++])) if ((n = o.getAttributeNode('id')) && n.value === e) return [o];
                    }
                    return [];
                  }
                })),
            (b.find.TAG = d.getElementsByTagName
              ? function (e, t) {
                  return 'undefined' != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0;
                }
              : function (e, t) {
                  var n,
                    r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                  if ('*' === e) {
                    while ((n = o[i++])) 1 === n.nodeType && r.push(n);
                    return r;
                  }
                  return o;
                }),
            (b.find.CLASS =
              d.getElementsByClassName &&
              function (e, t) {
                if ('undefined' != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e);
              }),
            (s = []),
            (v = []),
            (d.qsa = K.test(C.querySelectorAll)) &&
              (ce(function (e) {
                var t;
                (a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length && v.push('[*^$]=' + M + '*(?:\'\'|"")'),
                  e.querySelectorAll('[selected]').length || v.push('\\[' + M + '*(?:value|' + R + ')'),
                  e.querySelectorAll('[id~=' + S + '-]').length || v.push('~='),
                  (t = C.createElement('input')).setAttribute('name', ''),
                  e.appendChild(t),
                  e.querySelectorAll("[name='']").length || v.push('\\[' + M + '*name' + M + '*=' + M + '*(?:\'\'|"")'),
                  e.querySelectorAll(':checked').length || v.push(':checked'),
                  e.querySelectorAll('a#' + S + '+*').length || v.push('.#.+[+~]'),
                  e.querySelectorAll('\\\f'),
                  v.push('[\\r\\n\\f]');
              }),
              ce(function (e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = C.createElement('input');
                t.setAttribute('type', 'hidden'),
                  e.appendChild(t).setAttribute('name', 'D'),
                  e.querySelectorAll('[name=d]').length && v.push('name' + M + '*[*^$|!~]?='),
                  2 !== e.querySelectorAll(':enabled').length && v.push(':enabled', ':disabled'),
                  (a.appendChild(e).disabled = !0),
                  2 !== e.querySelectorAll(':disabled').length && v.push(':enabled', ':disabled'),
                  e.querySelectorAll('*,:x'),
                  v.push(',.*:');
              })),
            (d.matchesSelector = K.test((c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector))) &&
              ce(function (e) {
                (d.disconnectedMatch = c.call(e, '*')), c.call(e, "[s!='']:x"), s.push('!=', F);
              }),
            (v = v.length && new RegExp(v.join('|'))),
            (s = s.length && new RegExp(s.join('|'))),
            (t = K.test(a.compareDocumentPosition)),
            (y =
              t || K.test(a.contains)
                ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                      r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
                  }
                : function (e, t) {
                    if (t) while ((t = t.parentNode)) if (t === e) return !0;
                    return !1;
                  }),
            (j = t
              ? function (e, t) {
                  if (e === t) return (l = !0), 0;
                  var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    n ||
                    (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || (!d.sortDetached && t.compareDocumentPosition(e) === n)
                      ? e == C || (e.ownerDocument == p && y(p, e))
                        ? -1
                        : t == C || (t.ownerDocument == p && y(p, t))
                        ? 1
                        : u
                        ? P(u, e) - P(u, t)
                        : 0
                      : 4 & n
                      ? -1
                      : 1)
                  );
                }
              : function (e, t) {
                  if (e === t) return (l = !0), 0;
                  var n,
                    r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    s = [t];
                  if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
                  if (i === o) return pe(e, t);
                  n = e;
                  while ((n = n.parentNode)) a.unshift(n);
                  n = t;
                  while ((n = n.parentNode)) s.unshift(n);
                  while (a[r] === s[r]) r++;
                  return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0;
                })),
          C
        );
      }),
    (se.matches = function (e, t) {
      return se(e, null, null, t);
    }),
    (se.matchesSelector = function (e, t) {
      if ((T(e), d.matchesSelector && E && !N[t + ' '] && (!s || !s.test(t)) && (!v || !v.test(t))))
        try {
          var n = c.call(e, t);
          if (n || d.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return n;
        } catch (e) {
          N(t, !0);
        }
      return 0 < se(t, C, null, [e]).length;
    }),
    (se.contains = function (e, t) {
      return (e.ownerDocument || e) != C && T(e), y(e, t);
    }),
    (se.attr = function (e, t) {
      (e.ownerDocument || e) != C && T(e);
      var n = b.attrHandle[t.toLowerCase()],
        r = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
      return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }),
    (se.escape = function (e) {
      return (e + '').replace(re, ie);
    }),
    (se.error = function (e) {
      throw new Error('Syntax error, unrecognized expression: ' + e);
    }),
    (se.uniqueSort = function (e) {
      var t,
        n = [],
        r = 0,
        i = 0;
      if (((l = !d.detectDuplicates), (u = !d.sortStable && e.slice(0)), e.sort(j), l)) {
        while ((t = e[i++])) t === e[i] && (r = n.push(i));
        while (r--) e.splice(n[r], 1);
      }
      return (u = null), e;
    }),
    (o = se.getText =
      function (e) {
        var t,
          n = '',
          r = 0,
          i = e.nodeType;
        if (i) {
          if (1 === i || 9 === i || 11 === i) {
            if ('string' == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
          } else if (3 === i || 4 === i) return e.nodeValue;
        } else while ((t = e[r++])) n += o(t);
        return n;
      }),
    ((b = se.selectors =
      {
        cacheLength: 50,
        createPseudo: le,
        match: G,
        attrHandle: {},
        find: {},
        relative: { '>': { dir: 'parentNode', first: !0 }, ' ': { dir: 'parentNode' }, '+': { dir: 'previousSibling', first: !0 }, '~': { dir: 'previousSibling' } },
        preFilter: {
          ATTR: function (e) {
            return (e[1] = e[1].replace(te, ne)), (e[3] = (e[3] || e[4] || e[5] || '').replace(te, ne)), '~=' === e[2] && (e[3] = ' ' + e[3] + ' '), e.slice(0, 4);
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              'nth' === e[1].slice(0, 3)
                ? (e[3] || se.error(e[0]), (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ('even' === e[3] || 'odd' === e[3]))), (e[5] = +(e[7] + e[8] || 'odd' === e[3])))
                : e[3] && se.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return G.CHILD.test(e[0])
              ? null
              : (e[3] ? (e[2] = e[4] || e[5] || '') : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(')', n.length - t) - n.length) && ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          }
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(te, ne).toLowerCase();
            return '*' === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function (e) {
            var t = m[e + ' '];
            return (
              t ||
              ((t = new RegExp('(^|' + M + ')' + e + '(' + M + '|$)')) &&
                m(e, function (e) {
                  return t.test(('string' == typeof e.className && e.className) || ('undefined' != typeof e.getAttribute && e.getAttribute('class')) || '');
                }))
            );
          },
          ATTR: function (n, r, i) {
            return function (e) {
              var t = se.attr(e, n);
              return null == t
                ? '!=' === r
                : !r ||
                    ((t += ''),
                    '=' === r
                      ? t === i
                      : '!=' === r
                      ? t !== i
                      : '^=' === r
                      ? i && 0 === t.indexOf(i)
                      : '*=' === r
                      ? i && -1 < t.indexOf(i)
                      : '$=' === r
                      ? i && t.slice(-i.length) === i
                      : '~=' === r
                      ? -1 < (' ' + t.replace(B, ' ') + ' ').indexOf(i)
                      : '|=' === r && (t === i || t.slice(0, i.length + 1) === i + '-'));
            };
          },
          CHILD: function (h, e, t, g, v) {
            var y = 'nth' !== h.slice(0, 3),
              m = 'last' !== h.slice(-4),
              x = 'of-type' === e;
            return 1 === g && 0 === v
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (e, t, n) {
                  var r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l = y !== m ? 'nextSibling' : 'previousSibling',
                    c = e.parentNode,
                    f = x && e.nodeName.toLowerCase(),
                    p = !n && !x,
                    d = !1;
                  if (c) {
                    if (y) {
                      while (l) {
                        a = e;
                        while ((a = a[l])) if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                        u = l = 'only' === h && !u && 'nextSibling';
                      }
                      return !0;
                    }
                    if (((u = [m ? c.firstChild : c.lastChild]), m && p)) {
                      (d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2]), (a = s && c.childNodes[s]);
                      while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                        if (1 === a.nodeType && ++d && a === e) {
                          i[h] = [k, s, d];
                          break;
                        }
                    } else if ((p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]), !1 === d))
                      while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                        if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]), a === e)) break;
                    return (d -= v) === g || (d % g == 0 && 0 <= d / g);
                  }
                };
          },
          PSEUDO: function (e, o) {
            var t,
              a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error('unsupported pseudo: ' + e);
            return a[S]
              ? a(o)
              : 1 < a.length
              ? ((t = [e, e, '', o]),
                b.setFilters.hasOwnProperty(e.toLowerCase())
                  ? le(function (e, t) {
                      var n,
                        r = a(e, o),
                        i = r.length;
                      while (i--) e[(n = P(e, r[i]))] = !(t[n] = r[i]);
                    })
                  : function (e) {
                      return a(e, 0, t);
                    })
              : a;
          }
        },
        pseudos: {
          not: le(function (e) {
            var r = [],
              i = [],
              s = f(e.replace($, '$1'));
            return s[S]
              ? le(function (e, t, n, r) {
                  var i,
                    o = s(e, null, r, []),
                    a = e.length;
                  while (a--) (i = o[a]) && (e[a] = !(t[a] = i));
                })
              : function (e, t, n) {
                  return (r[0] = e), s(r, null, n, i), (r[0] = null), !i.pop();
                };
          }),
          has: le(function (t) {
            return function (e) {
              return 0 < se(t, e).length;
            };
          }),
          contains: le(function (t) {
            return (
              (t = t.replace(te, ne)),
              function (e) {
                return -1 < (e.textContent || o(e)).indexOf(t);
              }
            );
          }),
          lang: le(function (n) {
            return (
              V.test(n || '') || se.error('unsupported lang: ' + n),
              (n = n.replace(te, ne).toLowerCase()),
              function (e) {
                var t;
                do {
                  if ((t = E ? e.lang : e.getAttribute('xml:lang') || e.getAttribute('lang'))) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + '-');
                } while ((e = e.parentNode) && 1 === e.nodeType);
                return !1;
              }
            );
          }),
          target: function (e) {
            var t = n.location && n.location.hash;
            return t && t.slice(1) === e.id;
          },
          root: function (e) {
            return e === a;
          },
          focus: function (e) {
            return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
          },
          enabled: ge(!1),
          disabled: ge(!0),
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return ('input' === t && !!e.checked) || ('option' === t && !!e.selected);
          },
          selected: function (e) {
            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !b.pseudos.empty(e);
          },
          header: function (e) {
            return J.test(e.nodeName);
          },
          input: function (e) {
            return Q.test(e.nodeName);
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return ('input' === t && 'button' === e.type) || 'button' === t;
          },
          text: function (e) {
            var t;
            return 'input' === e.nodeName.toLowerCase() && 'text' === e.type && (null == (t = e.getAttribute('type')) || 'text' === t.toLowerCase());
          },
          first: ve(function () {
            return [0];
          }),
          last: ve(function (e, t) {
            return [t - 1];
          }),
          eq: ve(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: ve(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: ve(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: ve(function (e, t, n) {
            for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
            return e;
          }),
          gt: ve(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
            return e;
          })
        }
      }).pseudos.nth = b.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      b.pseudos[e] = de(e);
    for (e in { submit: !0, reset: !0 }) b.pseudos[e] = he(e);
    function me() {}
    function xe(e) {
      for (var t = 0, n = e.length, r = ''; t < n; t++) r += e[t].value;
      return r;
    }
    function be(s, e, t) {
      var u = e.dir,
        l = e.next,
        c = l || u,
        f = t && 'parentNode' === c,
        p = r++;
      return e.first
        ? function (e, t, n) {
            while ((e = e[u])) if (1 === e.nodeType || f) return s(e, t, n);
            return !1;
          }
        : function (e, t, n) {
            var r,
              i,
              o,
              a = [k, p];
            if (n) {
              while ((e = e[u])) if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
            } else
              while ((e = e[u]))
                if (1 === e.nodeType || f)
                  if (((i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {})), l && l === e.nodeName.toLowerCase())) e = e[u] || e;
                  else {
                    if ((r = i[c]) && r[0] === k && r[1] === p) return (a[2] = r[2]);
                    if (((i[c] = a)[2] = s(e, t, n))) return !0;
                  }
            return !1;
          };
    }
    function we(i) {
      return 1 < i.length
        ? function (e, t, n) {
            var r = i.length;
            while (r--) if (!i[r](e, t, n)) return !1;
            return !0;
          }
        : i[0];
    }
    function Te(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
      return a;
    }
    function Ce(d, h, g, v, y, e) {
      return (
        v && !v[S] && (v = Ce(v)),
        y && !y[S] && (y = Ce(y, e)),
        le(function (e, t, n, r) {
          var i,
            o,
            a,
            s = [],
            u = [],
            l = t.length,
            c =
              e ||
              (function (e, t, n) {
                for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                return n;
              })(h || '*', n.nodeType ? [n] : n, []),
            f = !d || (!e && h) ? c : Te(c, s, d, n, r),
            p = g ? (y || (e ? d : l || v) ? [] : t) : f;
          if ((g && g(f, p, n, r), v)) {
            (i = Te(p, u)), v(i, [], n, r), (o = i.length);
            while (o--) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
          }
          if (e) {
            if (y || d) {
              if (y) {
                (i = []), (o = p.length);
                while (o--) (a = p[o]) && i.push((f[o] = a));
                y(null, (p = []), i, r);
              }
              o = p.length;
              while (o--) (a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a));
            }
          } else (p = Te(p === t ? p.splice(l, p.length) : p)), y ? y(null, t, p, r) : H.apply(t, p);
        })
      );
    }
    function Ee(e) {
      for (
        var i,
          t,
          n,
          r = e.length,
          o = b.relative[e[0].type],
          a = o || b.relative[' '],
          s = o ? 1 : 0,
          u = be(
            function (e) {
              return e === i;
            },
            a,
            !0
          ),
          l = be(
            function (e) {
              return -1 < P(i, e);
            },
            a,
            !0
          ),
          c = [
            function (e, t, n) {
              var r = (!o && (n || t !== w)) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
              return (i = null), r;
            }
          ];
        s < r;
        s++
      )
        if ((t = b.relative[e[s].type])) c = [be(we(c), t)];
        else {
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
            for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;
            return Ce(
              1 < s && we(c),
              1 < s && xe(e.slice(0, s - 1).concat({ value: ' ' === e[s - 2].type ? '*' : '' })).replace($, '$1'),
              t,
              s < n && Ee(e.slice(s, n)),
              n < r && Ee((e = e.slice(n))),
              n < r && xe(e)
            );
          }
          c.push(t);
        }
      return we(c);
    }
    return (
      (me.prototype = b.filters = b.pseudos),
      (b.setFilters = new me()),
      (h = se.tokenize =
        function (e, t) {
          var n,
            r,
            i,
            o,
            a,
            s,
            u,
            l = x[e + ' '];
          if (l) return t ? 0 : l.slice(0);
          (a = e), (s = []), (u = b.preFilter);
          while (a) {
            for (o in ((n && !(r = _.exec(a))) || (r && (a = a.slice(r[0].length) || a), s.push((i = []))),
            (n = !1),
            (r = z.exec(a)) && ((n = r.shift()), i.push({ value: n, type: r[0].replace($, ' ') }), (a = a.slice(n.length))),
            b.filter))
              !(r = G[o].exec(a)) || (u[o] && !(r = u[o](r))) || ((n = r.shift()), i.push({ value: n, type: o, matches: r }), (a = a.slice(n.length)));
            if (!n) break;
          }
          return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
        }),
      (f = se.compile =
        function (e, t) {
          var n,
            v,
            y,
            m,
            x,
            r,
            i = [],
            o = [],
            a = A[e + ' '];
          if (!a) {
            t || (t = h(e)), (n = t.length);
            while (n--) (a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
            (a = A(
              e,
              ((v = o),
              (m = 0 < (y = i).length),
              (x = 0 < v.length),
              (r = function (e, t, n, r, i) {
                var o,
                  a,
                  s,
                  u = 0,
                  l = '0',
                  c = e && [],
                  f = [],
                  p = w,
                  d = e || (x && b.find.TAG('*', i)),
                  h = (k += null == p ? 1 : Math.random() || 0.1),
                  g = d.length;
                for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
                  if (x && o) {
                    (a = 0), t || o.ownerDocument == C || (T(o), (n = !E));
                    while ((s = v[a++]))
                      if (s(o, t || C, n)) {
                        r.push(o);
                        break;
                      }
                    i && (k = h);
                  }
                  m && ((o = !s && o) && u--, e && c.push(o));
                }
                if (((u += l), m && l !== u)) {
                  a = 0;
                  while ((s = y[a++])) s(c, f, t, n);
                  if (e) {
                    if (0 < u) while (l--) c[l] || f[l] || (f[l] = q.call(r));
                    f = Te(f);
                  }
                  H.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r);
                }
                return i && ((k = h), (w = p)), c;
              }),
              m ? le(r) : r)
            )).selector = e;
          }
          return a;
        }),
      (g = se.select =
        function (e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = 'function' == typeof e && e,
            c = !r && h((e = l.selector || e));
          if (((n = n || []), 1 === c.length)) {
            if (2 < (o = c[0] = c[0].slice(0)).length && 'ID' === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
              if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
              l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
            }
            i = G.needsContext.test(e) ? 0 : o.length;
            while (i--) {
              if (((a = o[i]), b.relative[(s = a.type)])) break;
              if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), (ee.test(o[0].type) && ye(t.parentNode)) || t))) {
                if ((o.splice(i, 1), !(e = r.length && xe(o)))) return H.apply(n, r), n;
                break;
              }
            }
          }
          return (l || f(e, c))(r, t, !E, n, !t || (ee.test(e) && ye(t.parentNode)) || t), n;
        }),
      (d.sortStable = S.split('').sort(j).join('') === S),
      (d.detectDuplicates = !!l),
      T(),
      (d.sortDetached = ce(function (e) {
        return 1 & e.compareDocumentPosition(C.createElement('fieldset'));
      })),
      ce(function (e) {
        return (e.innerHTML = "<a href='#'></a>"), '#' === e.firstChild.getAttribute('href');
      }) ||
        fe('type|href|height|width', function (e, t, n) {
          if (!n) return e.getAttribute(t, 'type' === t.toLowerCase() ? 1 : 2);
        }),
      (d.attributes &&
        ce(function (e) {
          return (e.innerHTML = '<input/>'), e.firstChild.setAttribute('value', ''), '' === e.firstChild.getAttribute('value');
        })) ||
        fe('value', function (e, t, n) {
          if (!n && 'input' === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      ce(function (e) {
        return null == e.getAttribute('disabled');
      }) ||
        fe(R, function (e, t, n) {
          var r;
          if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
        }),
      se
    );
  })(C);
  (S.find = d),
    (S.expr = d.selectors),
    (S.expr[':'] = S.expr.pseudos),
    (S.uniqueSort = S.unique = d.uniqueSort),
    (S.text = d.getText),
    (S.isXMLDoc = d.isXML),
    (S.contains = d.contains),
    (S.escapeSelector = d.escape);
  var h = function (e, t, n) {
      var r = [],
        i = void 0 !== n;
      while ((e = e[t]) && 9 !== e.nodeType)
        if (1 === e.nodeType) {
          if (i && S(e).is(n)) break;
          r.push(e);
        }
      return r;
    },
    T = function (e, t) {
      for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    k = S.expr.match.needsContext;
  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function j(e, n, r) {
    return m(n)
      ? S.grep(e, function (e, t) {
          return !!n.call(e, t, e) !== r;
        })
      : n.nodeType
      ? S.grep(e, function (e) {
          return (e === n) !== r;
        })
      : 'string' != typeof n
      ? S.grep(e, function (e) {
          return -1 < i.call(n, e) !== r;
        })
      : S.filter(n, e, r);
  }
  (S.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ':not(' + e + ')'),
      1 === t.length && 1 === r.nodeType
        ? S.find.matchesSelector(r, e)
          ? [r]
          : []
        : S.find.matches(
            e,
            S.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    S.fn.extend({
      find: function (e) {
        var t,
          n,
          r = this.length,
          i = this;
        if ('string' != typeof e)
          return this.pushStack(
            S(e).filter(function () {
              for (t = 0; t < r; t++) if (S.contains(i[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);
        return 1 < r ? S.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(j(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(j(this, e || [], !0));
      },
      is: function (e) {
        return !!j(this, 'string' == typeof e && k.test(e) ? S(e) : e || [], !1).length;
      }
    });
  var D,
    q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((S.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;
    if (((n = n || D), 'string' == typeof e)) {
      if (!(r = '<' === e[0] && '>' === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || (!r[1] && t)) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (((t = t instanceof S ? t[0] : t), S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), N.test(r[1]) && S.isPlainObject(t)))
          for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this;
      }
      return (i = E.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this;
    }
    return e.nodeType ? ((this[0] = e), (this.length = 1), this) : m(e) ? (void 0 !== n.ready ? n.ready(e) : e(S)) : S.makeArray(e, this);
  }).prototype = S.fn),
    (D = S(E));
  var L = /^(?:parents|prev(?:Until|All))/,
    H = { children: !0, contents: !0, next: !0, prev: !0 };
  function O(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);
    return e;
  }
  S.fn.extend({
    has: function (e) {
      var t = S(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (S.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = 'string' != typeof e && S(e);
      if (!k.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
              o.push(n);
              break;
            }
      return this.pushStack(1 < o.length ? S.uniqueSort(o) : o);
    },
    index: function (e) {
      return e ? ('string' == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function (e, t) {
      return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }
  }),
    S.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return h(e, 'parentNode');
        },
        parentsUntil: function (e, t, n) {
          return h(e, 'parentNode', n);
        },
        next: function (e) {
          return O(e, 'nextSibling');
        },
        prev: function (e) {
          return O(e, 'previousSibling');
        },
        nextAll: function (e) {
          return h(e, 'nextSibling');
        },
        prevAll: function (e) {
          return h(e, 'previousSibling');
        },
        nextUntil: function (e, t, n) {
          return h(e, 'nextSibling', n);
        },
        prevUntil: function (e, t, n) {
          return h(e, 'previousSibling', n);
        },
        siblings: function (e) {
          return T((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return T(e.firstChild);
        },
        contents: function (e) {
          return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, 'template') && (e = e.content || e), S.merge([], e.childNodes));
        }
      },
      function (r, i) {
        S.fn[r] = function (e, t) {
          var n = S.map(this, i, e);
          return 'Until' !== r.slice(-5) && (t = e), t && 'string' == typeof t && (n = S.filter(t, n)), 1 < this.length && (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n);
        };
      }
    );
  var P = /[^\x20\t\r\n\f]+/g;
  function R(e) {
    return e;
  }
  function M(e) {
    throw e;
  }
  function I(e, t, n, r) {
    var i;
    try {
      e && m((i = e.promise)) ? i.call(e).done(t).fail(n) : e && m((i = e.then)) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  (S.Callbacks = function (r) {
    var e, n;
    r =
      'string' == typeof r
        ? ((e = r),
          (n = {}),
          S.each(e.match(P) || [], function (e, t) {
            n[t] = !0;
          }),
          n)
        : S.extend({}, r);
    var i,
      t,
      o,
      a,
      s = [],
      u = [],
      l = -1,
      c = function () {
        for (a = a || r.once, o = i = !0; u.length; l = -1) {
          t = u.shift();
          while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && ((l = s.length), (t = !1));
        }
        r.memory || (t = !1), (i = !1), a && (s = t ? [] : '');
      },
      f = {
        add: function () {
          return (
            s &&
              (t && !i && ((l = s.length - 1), u.push(t)),
              (function n(e) {
                S.each(e, function (e, t) {
                  m(t) ? (r.unique && f.has(t)) || s.push(t) : t && t.length && 'string' !== w(t) && n(t);
                });
              })(arguments),
              t && !i && c()),
            this
          );
        },
        remove: function () {
          return (
            S.each(arguments, function (e, t) {
              var n;
              while (-1 < (n = S.inArray(t, s, n))) s.splice(n, 1), n <= l && l--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < S.inArray(e, s) : 0 < s.length;
        },
        empty: function () {
          return s && (s = []), this;
        },
        disable: function () {
          return (a = u = []), (s = t = ''), this;
        },
        disabled: function () {
          return !s;
        },
        lock: function () {
          return (a = u = []), t || i || (s = t = ''), this;
        },
        locked: function () {
          return !!a;
        },
        fireWith: function (e, t) {
          return a || ((t = [e, (t = t || []).slice ? t.slice() : t]), u.push(t), i || c()), this;
        },
        fire: function () {
          return f.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!o;
        }
      };
    return f;
  }),
    S.extend({
      Deferred: function (e) {
        var o = [
            ['notify', 'progress', S.Callbacks('memory'), S.Callbacks('memory'), 2],
            ['resolve', 'done', S.Callbacks('once memory'), S.Callbacks('once memory'), 0, 'resolved'],
            ['reject', 'fail', S.Callbacks('once memory'), S.Callbacks('once memory'), 1, 'rejected']
          ],
          i = 'pending',
          a = {
            state: function () {
              return i;
            },
            always: function () {
              return s.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return a.then(null, e);
            },
            pipe: function () {
              var i = arguments;
              return S.Deferred(function (r) {
                S.each(o, function (e, t) {
                  var n = m(i[t[4]]) && i[t[4]];
                  s[t[1]](function () {
                    var e = n && n.apply(this, arguments);
                    e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + 'With'](this, n ? [e] : arguments);
                  });
                }),
                  (i = null);
              }).promise();
            },
            then: function (t, n, r) {
              var u = 0;
              function l(i, o, a, s) {
                return function () {
                  var n = this,
                    r = arguments,
                    e = function () {
                      var e, t;
                      if (!(i < u)) {
                        if ((e = a.apply(n, r)) === o.promise()) throw new TypeError('Thenable self-resolution');
                        (t = e && ('object' == typeof e || 'function' == typeof e) && e.then),
                          m(t)
                            ? s
                              ? t.call(e, l(u, o, R, s), l(u, o, M, s))
                              : (u++, t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith)))
                            : (a !== R && ((n = void 0), (r = [e])), (s || o.resolveWith)(n, r));
                      }
                    },
                    t = s
                      ? e
                      : function () {
                          try {
                            e();
                          } catch (e) {
                            S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== M && ((n = void 0), (r = [e])), o.rejectWith(n, r));
                          }
                        };
                  i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t));
                };
              }
              return S.Deferred(function (e) {
                o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : R)), o[2][3].add(l(0, e, m(n) ? n : M));
              }).promise();
            },
            promise: function (e) {
              return null != e ? S.extend(e, a) : a;
            }
          },
          s = {};
        return (
          S.each(o, function (e, t) {
            var n = t[2],
              r = t[5];
            (a[t[1]] = n.add),
              r &&
                n.add(
                  function () {
                    i = r;
                  },
                  o[3 - e][2].disable,
                  o[3 - e][3].disable,
                  o[0][2].lock,
                  o[0][3].lock
                ),
              n.add(t[3].fire),
              (s[t[0]] = function () {
                return s[t[0] + 'With'](this === s ? void 0 : this, arguments), this;
              }),
              (s[t[0] + 'With'] = n.fireWith);
          }),
          a.promise(s),
          e && e.call(s, s),
          s
        );
      },
      when: function (e) {
        var n = arguments.length,
          t = n,
          r = Array(t),
          i = s.call(arguments),
          o = S.Deferred(),
          a = function (t) {
            return function (e) {
              (r[t] = this), (i[t] = 1 < arguments.length ? s.call(arguments) : e), --n || o.resolveWith(r, i);
            };
          };
        if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n), 'pending' === o.state() || m(i[t] && i[t].then))) return o.then();
        while (t--) I(i[t], a(t), o.reject);
        return o.promise();
      }
    });
  var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (S.Deferred.exceptionHook = function (e, t) {
    C.console && C.console.warn && e && W.test(e.name) && C.console.warn('jQuery.Deferred exception: ' + e.message, e.stack, t);
  }),
    (S.readyException = function (e) {
      C.setTimeout(function () {
        throw e;
      });
    });
  var F = S.Deferred();
  function B() {
    E.removeEventListener('DOMContentLoaded', B), C.removeEventListener('load', B), S.ready();
  }
  (S.fn.ready = function (e) {
    return (
      F.then(e)['catch'](function (e) {
        S.readyException(e);
      }),
      this
    );
  }),
    S.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --S.readyWait : S.isReady) || ((S.isReady = !0) !== e && 0 < --S.readyWait) || F.resolveWith(E, [S]);
      }
    }),
    (S.ready.then = F.then),
    'complete' === E.readyState || ('loading' !== E.readyState && !E.documentElement.doScroll) ? C.setTimeout(S.ready) : (E.addEventListener('DOMContentLoaded', B), C.addEventListener('load', B));
  var $ = function (e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ('object' === w(n)) for (s in ((i = !0), n)) $(e, t, s, n[s], !0, o, a);
      else if (
        void 0 !== r &&
        ((i = !0),
        m(r) || (a = !0),
        l &&
          (a
            ? (t.call(e, r), (t = null))
            : ((l = t),
              (t = function (e, t, n) {
                return l.call(S(e), n);
              }))),
        t)
      )
        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    _ = /^-ms-/,
    z = /-([a-z])/g;
  function U(e, t) {
    return t.toUpperCase();
  }
  function X(e) {
    return e.replace(_, 'ms-').replace(z, U);
  }
  var V = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function G() {
    this.expando = S.expando + G.uid++;
  }
  (G.uid = 1),
    (G.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return t || ((t = {}), V(e) && (e.nodeType ? (e[this.expando] = t) : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
      },
      set: function (e, t, n) {
        var r,
          i = this.cache(e);
        if ('string' == typeof t) i[X(t)] = n;
        else for (r in t) i[X(r)] = t[r];
        return i;
      },
      get: function (e, t) {
        return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && 'string' == typeof t && void 0 === n) ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length;
            while (n--) delete r[t[n]];
          }
          (void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !S.isEmptyObject(t);
      }
    });
  var Y = new G(),
    Q = new G(),
    J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    K = /[A-Z]/g;
  function Z(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType)
      if (((r = 'data-' + t.replace(K, '-$&').toLowerCase()), 'string' == typeof (n = e.getAttribute(r)))) {
        try {
          n = 'true' === (i = n) || ('false' !== i && ('null' === i ? null : i === +i + '' ? +i : J.test(i) ? JSON.parse(i) : i));
        } catch (e) {}
        Q.set(e, t, n);
      } else n = void 0;
    return n;
  }
  S.extend({
    hasData: function (e) {
      return Q.hasData(e) || Y.hasData(e);
    },
    data: function (e, t, n) {
      return Q.access(e, t, n);
    },
    removeData: function (e, t) {
      Q.remove(e, t);
    },
    _data: function (e, t, n) {
      return Y.access(e, t, n);
    },
    _removeData: function (e, t) {
      Y.remove(e, t);
    }
  }),
    S.fn.extend({
      data: function (n, e) {
        var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes;
        if (void 0 === n) {
          if (this.length && ((i = Q.get(o)), 1 === o.nodeType && !Y.get(o, 'hasDataAttrs'))) {
            t = a.length;
            while (t--) a[t] && 0 === (r = a[t].name).indexOf('data-') && ((r = X(r.slice(5))), Z(o, r, i[r]));
            Y.set(o, 'hasDataAttrs', !0);
          }
          return i;
        }
        return 'object' == typeof n
          ? this.each(function () {
              Q.set(this, n);
            })
          : $(
              this,
              function (e) {
                var t;
                if (o && void 0 === e) return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
                this.each(function () {
                  Q.set(this, n, e);
                });
              },
              null,
              e,
              1 < arguments.length,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          Q.remove(this, e);
        });
      }
    }),
    S.extend({
      queue: function (e, t, n) {
        var r;
        if (e) return (t = (t || 'fx') + 'queue'), (r = Y.get(e, t)), n && (!r || Array.isArray(n) ? (r = Y.access(e, t, S.makeArray(n))) : r.push(n)), r || [];
      },
      dequeue: function (e, t) {
        t = t || 'fx';
        var n = S.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = S._queueHooks(e, t);
        'inprogress' === i && ((i = n.shift()), r--),
          i &&
            ('fx' === t && n.unshift('inprogress'),
            delete o.stop,
            i.call(
              e,
              function () {
                S.dequeue(e, t);
              },
              o
            )),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + 'queueHooks';
        return (
          Y.get(e, n) ||
          Y.access(e, n, {
            empty: S.Callbacks('once memory').add(function () {
              Y.remove(e, [t + 'queue', n]);
            })
          })
        );
      }
    }),
    S.fn.extend({
      queue: function (t, n) {
        var e = 2;
        return (
          'string' != typeof t && ((n = t), (t = 'fx'), e--),
          arguments.length < e
            ? S.queue(this[0], t)
            : void 0 === n
            ? this
            : this.each(function () {
                var e = S.queue(this, t, n);
                S._queueHooks(this, t), 'fx' === t && 'inprogress' !== e[0] && S.dequeue(this, t);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          S.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || 'fx', []);
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = S.Deferred(),
          o = this,
          a = this.length,
          s = function () {
            --r || i.resolveWith(o, [o]);
          };
        'string' != typeof e && ((t = e), (e = void 0)), (e = e || 'fx');
        while (a--) (n = Y.get(o[a], e + 'queueHooks')) && n.empty && (r++, n.empty.add(s));
        return s(), i.promise(t);
      }
    });
  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    te = new RegExp('^(?:([+-])=|)(' + ee + ')([a-z%]*)$', 'i'),
    ne = ['Top', 'Right', 'Bottom', 'Left'],
    re = E.documentElement,
    ie = function (e) {
      return S.contains(e.ownerDocument, e);
    },
    oe = { composed: !0 };
  re.getRootNode &&
    (ie = function (e) {
      return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument;
    });
  var ae = function (e, t) {
    return 'none' === (e = t || e).style.display || ('' === e.style.display && ie(e) && 'none' === S.css(e, 'display'));
  };
  function se(e, t, n, r) {
    var i,
      o,
      a = 20,
      s = r
        ? function () {
            return r.cur();
          }
        : function () {
            return S.css(e, t, '');
          },
      u = s(),
      l = (n && n[3]) || (S.cssNumber[t] ? '' : 'px'),
      c = e.nodeType && (S.cssNumber[t] || ('px' !== l && +u)) && te.exec(S.css(e, t));
    if (c && c[3] !== l) {
      (u /= 2), (l = l || c[3]), (c = +u || 1);
      while (a--) S.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0), (c /= o);
      (c *= 2), S.style(e, t, c + l), (n = n || []);
    }
    return n && ((c = +c || +u || 0), (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]), r && ((r.unit = l), (r.start = c), (r.end = i))), i;
  }
  var ue = {};
  function le(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
      (r = e[c]).style &&
        ((n = r.style.display),
        t
          ? ('none' === n && ((l[c] = Y.get(r, 'display') || null), l[c] || (r.style.display = '')),
            '' === r.style.display &&
              ae(r) &&
              (l[c] =
                ((u = a = o = void 0),
                (a = (i = r).ownerDocument),
                (s = i.nodeName),
                (u = ue[s]) || ((o = a.body.appendChild(a.createElement(s))), (u = S.css(o, 'display')), o.parentNode.removeChild(o), 'none' === u && (u = 'block'), (ue[s] = u)))))
          : 'none' !== n && ((l[c] = 'none'), Y.set(r, 'display', n)));
    for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
    return e;
  }
  S.fn.extend({
    show: function () {
      return le(this, !0);
    },
    hide: function () {
      return le(this);
    },
    toggle: function (e) {
      return 'boolean' == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            ae(this) ? S(this).show() : S(this).hide();
          });
    }
  });
  var ce,
    fe,
    pe = /^(?:checkbox|radio)$/i,
    de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    he = /^$|^module$|\/(?:java|ecma)script/i;
  (ce = E.createDocumentFragment().appendChild(E.createElement('div'))),
    (fe = E.createElement('input')).setAttribute('type', 'radio'),
    fe.setAttribute('checked', 'checked'),
    fe.setAttribute('name', 't'),
    ce.appendChild(fe),
    (y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (ce.innerHTML = '<textarea>x</textarea>'),
    (y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue),
    (ce.innerHTML = '<option></option>'),
    (y.option = !!ce.lastChild);
  var ge = {
    thead: [1, '<table>', '</table>'],
    col: [2, '<table><colgroup>', '</colgroup></table>'],
    tr: [2, '<table><tbody>', '</tbody></table>'],
    td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
    _default: [0, '', '']
  };
  function ve(e, t) {
    var n;
    return (
      (n = 'undefined' != typeof e.getElementsByTagName ? e.getElementsByTagName(t || '*') : 'undefined' != typeof e.querySelectorAll ? e.querySelectorAll(t || '*') : []),
      void 0 === t || (t && A(e, t)) ? S.merge([e], n) : n
    );
  }
  function ye(e, t) {
    for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], 'globalEval', !t || Y.get(t[n], 'globalEval'));
  }
  (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead), (ge.th = ge.td), y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", '</select>']);
  var me = /<|&#?\w+;/;
  function xe(e, t, n, r, i) {
    for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
      if ((o = e[d]) || 0 === o)
        if ('object' === w(o)) S.merge(p, o.nodeType ? [o] : o);
        else if (me.test(o)) {
          (a = a || f.appendChild(t.createElement('div'))), (s = (de.exec(o) || ['', ''])[1].toLowerCase()), (u = ge[s] || ge._default), (a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2]), (c = u[0]);
          while (c--) a = a.lastChild;
          S.merge(p, a.childNodes), ((a = f.firstChild).textContent = '');
        } else p.push(t.createTextNode(o));
    (f.textContent = ''), (d = 0);
    while ((o = p[d++]))
      if (r && -1 < S.inArray(o, r)) i && i.push(o);
      else if (((l = ie(o)), (a = ve(f.appendChild(o), 'script')), l && ye(a), n)) {
        c = 0;
        while ((o = a[c++])) he.test(o.type || '') && n.push(o);
      }
    return f;
  }
  var be = /^([^.]*)(?:\.(.+)|)/;
  function we() {
    return !0;
  }
  function Te() {
    return !1;
  }
  function Ce(e, t) {
    return (
      (e ===
        (function () {
          try {
            return E.activeElement;
          } catch (e) {}
        })()) ==
      ('focus' === t)
    );
  }
  function Ee(e, t, n, r, i, o) {
    var a, s;
    if ('object' == typeof t) {
      for (s in ('string' != typeof n && ((r = r || n), (n = void 0)), t)) Ee(e, s, n, r, t[s], o);
      return e;
    }
    if ((null == r && null == i ? ((i = n), (r = n = void 0)) : null == i && ('string' == typeof n ? ((i = r), (r = void 0)) : ((i = r), (r = n), (n = void 0))), !1 === i)) i = Te;
    else if (!i) return e;
    return (
      1 === o &&
        ((a = i),
        ((i = function (e) {
          return S().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = S.guid++))),
      e.each(function () {
        S.event.add(this, t, i, r, n);
      })
    );
  }
  function Se(e, i, o) {
    o
      ? (Y.set(e, i, !1),
        S.event.add(e, i, {
          namespace: !1,
          handler: function (e) {
            var t,
              n,
              r = Y.get(this, i);
            if (1 & e.isTrigger && this[i]) {
              if (r.length) (S.event.special[i] || {}).delegateType && e.stopPropagation();
              else if (((r = s.call(arguments)), Y.set(this, i, r), (t = o(this, i)), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : (n = {}), r !== n))
                return e.stopImmediatePropagation(), e.preventDefault(), n && n.value;
            } else r.length && (Y.set(this, i, { value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this) }), e.stopImmediatePropagation());
          }
        }))
      : void 0 === Y.get(e, i) && S.event.add(e, i, we);
  }
  (S.event = {
    global: {},
    add: function (t, e, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = Y.get(t);
      if (V(t)) {
        n.handler && ((n = (o = n).handler), (i = o.selector)),
          i && S.find.matchesSelector(re, i),
          n.guid || (n.guid = S.guid++),
          (u = v.events) || (u = v.events = Object.create(null)),
          (a = v.handle) ||
            (a = v.handle =
              function (e) {
                return 'undefined' != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0;
              }),
          (l = (e = (e || '').match(P) || ['']).length);
        while (l--)
          (d = g = (s = be.exec(e[l]) || [])[1]),
            (h = (s[2] || '').split('.').sort()),
            d &&
              ((f = S.event.special[d] || {}),
              (d = (i ? f.delegateType : f.bindType) || d),
              (f = S.event.special[d] || {}),
              (c = S.extend({ type: d, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && S.expr.match.needsContext.test(i), namespace: h.join('.') }, o)),
              (p = u[d]) || (((p = u[d] = []).delegateCount = 0), (f.setup && !1 !== f.setup.call(t, r, h, a)) || (t.addEventListener && t.addEventListener(d, a))),
              f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
              i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
              (S.event.global[d] = !0));
      }
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = Y.hasData(e) && Y.get(e);
      if (v && (u = v.events)) {
        l = (t = (t || '').match(P) || ['']).length;
        while (l--)
          if (((d = g = (s = be.exec(t[l]) || [])[1]), (h = (s[2] || '').split('.').sort()), d)) {
            (f = S.event.special[d] || {}), (p = u[(d = (r ? f.delegateType : f.bindType) || d)] || []), (s = s[2] && new RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)')), (a = o = p.length);
            while (o--)
              (c = p[o]),
                (!i && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (s && !s.test(c.namespace)) ||
                  (r && r !== c.selector && ('**' !== r || !c.selector)) ||
                  (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
            a && !p.length && ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) || S.removeEvent(e, d, v.handle), delete u[d]);
          } else for (d in u) S.event.remove(e, d + t[l], n, r, !0);
        S.isEmptyObject(u) && Y.remove(e, 'handle events');
      }
    },
    dispatch: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = new Array(arguments.length),
        u = S.event.fix(e),
        l = (Y.get(this, 'events') || Object.create(null))[u.type] || [],
        c = S.event.special[u.type] || {};
      for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
      if (((u.delegateTarget = this), !c.preDispatch || !1 !== c.preDispatch.call(this, u))) {
        (a = S.event.handlers.call(this, u, l)), (t = 0);
        while ((i = a[t++]) && !u.isPropagationStopped()) {
          (u.currentTarget = i.elem), (n = 0);
          while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())
            (u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace)) ||
              ((u.handleObj = o),
              (u.data = o.data),
              void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()));
        }
        return c.postDispatch && c.postDispatch.call(this, u), u.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = [],
        u = t.delegateCount,
        l = e.target;
      if (u && l.nodeType && !('click' === e.type && 1 <= e.button))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ('click' !== e.type || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++)
              void 0 === a[(i = (r = t[n]).selector + ' ')] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length), a[i] && o.push(r);
            o.length && s.push({ elem: l, handlers: o });
          }
      return (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s;
    },
    addProp: function (t, e) {
      Object.defineProperty(S.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: m(e)
          ? function () {
              if (this.originalEvent) return e(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[t];
            },
        set: function (e) {
          Object.defineProperty(this, t, { enumerable: !0, configurable: !0, writable: !0, value: e });
        }
      });
    },
    fix: function (e) {
      return e[S.expando] ? e : new S.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          var t = this || e;
          return pe.test(t.type) && t.click && A(t, 'input') && Se(t, 'click', we), !1;
        },
        trigger: function (e) {
          var t = this || e;
          return pe.test(t.type) && t.click && A(t, 'input') && Se(t, 'click'), !0;
        },
        _default: function (e) {
          var t = e.target;
          return (pe.test(t.type) && t.click && A(t, 'input') && Y.get(t, 'click')) || A(t, 'a');
        }
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        }
      }
    }
  }),
    (S.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (S.Event = function (e, t) {
      if (!(this instanceof S.Event)) return new S.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? we : Te),
          (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && S.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[S.expando] = !0);
    }),
    (S.Event.prototype = {
      constructor: S.Event,
      isDefaultPrevented: Te,
      isPropagationStopped: Te,
      isImmediatePropagationStopped: Te,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = we), e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = we), e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = we), e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
      }
    }),
    S.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
      },
      S.event.addProp
    ),
    S.each({ focus: 'focusin', blur: 'focusout' }, function (e, t) {
      S.event.special[e] = {
        setup: function () {
          return Se(this, e, Ce), !1;
        },
        trigger: function () {
          return Se(this, e), !0;
        },
        _default: function () {
          return !0;
        },
        delegateType: t
      };
    }),
    S.each({ mouseenter: 'mouseover', mouseleave: 'mouseout', pointerenter: 'pointerover', pointerleave: 'pointerout' }, function (e, i) {
      S.event.special[e] = {
        delegateType: i,
        bindType: i,
        handle: function (e) {
          var t,
            n = e.relatedTarget,
            r = e.handleObj;
          return (n && (n === this || S.contains(this, n))) || ((e.type = r.origType), (t = r.handler.apply(this, arguments)), (e.type = i)), t;
        }
      };
    }),
    S.fn.extend({
      on: function (e, t, n, r) {
        return Ee(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return Ee(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj) return (r = e.handleObj), S(e.delegateTarget).off(r.namespace ? r.origType + '.' + r.namespace : r.origType, r.selector, r.handler), this;
        if ('object' == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this;
        }
        return (
          (!1 !== t && 'function' != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = Te),
          this.each(function () {
            S.event.remove(this, e, n, t);
          })
        );
      }
    });
  var ke = /<script|<style|<link/i,
    Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function je(e, t) {
    return (A(e, 'table') && A(11 !== t.nodeType ? t : t.firstChild, 'tr') && S(e).children('tbody')[0]) || e;
  }
  function De(e) {
    return (e.type = (null !== e.getAttribute('type')) + '/' + e.type), e;
  }
  function qe(e) {
    return 'true/' === (e.type || '').slice(0, 5) ? (e.type = e.type.slice(5)) : e.removeAttribute('type'), e;
  }
  function Le(e, t) {
    var n, r, i, o, a, s;
    if (1 === t.nodeType) {
      if (Y.hasData(e) && (s = Y.get(e).events)) for (i in (Y.remove(t, 'handle events'), s)) for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
      Q.hasData(e) && ((o = Q.access(e)), (a = S.extend({}, o)), Q.set(t, a));
    }
  }
  function He(n, r, i, o) {
    r = g(r);
    var e,
      t,
      a,
      s,
      u,
      l,
      c = 0,
      f = n.length,
      p = f - 1,
      d = r[0],
      h = m(d);
    if (h || (1 < f && 'string' == typeof d && !y.checkClone && Ae.test(d)))
      return n.each(function (e) {
        var t = n.eq(e);
        h && (r[0] = d.call(this, e, t.html())), He(t, r, i, o);
      });
    if (f && ((t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild), 1 === e.childNodes.length && (e = t), t || o)) {
      for (s = (a = S.map(ve(e, 'script'), De)).length; c < f; c++) (u = e), c !== p && ((u = S.clone(u, !0, !0)), s && S.merge(a, ve(u, 'script'))), i.call(n[c], u, c);
      if (s)
        for (l = a[a.length - 1].ownerDocument, S.map(a, qe), c = 0; c < s; c++)
          (u = a[c]),
            he.test(u.type || '') &&
              !Y.access(u, 'globalEval') &&
              S.contains(l, u) &&
              (u.src && 'module' !== (u.type || '').toLowerCase()
                ? S._evalUrl && !u.noModule && S._evalUrl(u.src, { nonce: u.nonce || u.getAttribute('nonce') }, l)
                : b(u.textContent.replace(Ne, ''), u, l));
    }
    return n;
  }
  function Oe(e, t, n) {
    for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || S.cleanData(ve(r)), r.parentNode && (n && ie(r) && ye(ve(r, 'script')), r.parentNode.removeChild(r));
    return e;
  }
  S.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c = e.cloneNode(!0),
        f = ie(e);
      if (!(y.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || S.isXMLDoc(e)))
        for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++)
          (s = o[r]),
            (u = a[r]),
            void 0,
            'input' === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? (u.checked = s.checked) : ('input' !== l && 'textarea' !== l) || (u.defaultValue = s.defaultValue);
      if (t)
        if (n) for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) Le(o[r], a[r]);
        else Le(e, c);
      return 0 < (a = ve(c, 'script')).length && ye(a, !f && ve(e, 'script')), c;
    },
    cleanData: function (e) {
      for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (V(n)) {
          if ((t = n[Y.expando])) {
            if (t.events) for (r in t.events) i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
            n[Y.expando] = void 0;
          }
          n[Q.expando] && (n[Q.expando] = void 0);
        }
    }
  }),
    S.fn.extend({
      detach: function (e) {
        return Oe(this, e, !0);
      },
      remove: function (e) {
        return Oe(this, e);
      },
      text: function (e) {
        return $(
          this,
          function (e) {
            return void 0 === e
              ? S.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return He(this, arguments, function (e) {
          (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || je(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return He(this, arguments, function (e) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var t = je(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return He(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return He(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(ve(e, !1)), (e.textContent = ''));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return S.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return $(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if ('string' == typeof e && !ke.test(e) && !ge[(de.exec(e) || ['', ''])[1].toLowerCase()]) {
              e = S.htmlPrefilter(e);
              try {
                for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (S.cleanData(ve(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var n = [];
        return He(
          this,
          arguments,
          function (e) {
            var t = this.parentNode;
            S.inArray(this, n) < 0 && (S.cleanData(ve(this)), t && t.replaceChild(e, this));
          },
          n
        );
      }
    }),
    S.each({ appendTo: 'append', prependTo: 'prepend', insertBefore: 'before', insertAfter: 'after', replaceAll: 'replaceWith' }, function (e, a) {
      S.fn[e] = function (e) {
        for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++) (t = o === i ? this : this.clone(!0)), S(r[o])[a](t), u.apply(n, t.get());
        return this.pushStack(n);
      };
    });
  var Pe = new RegExp('^(' + ee + ')(?!px)[a-z%]+$', 'i'),
    Re = function (e) {
      var t = e.ownerDocument.defaultView;
      return (t && t.opener) || (t = C), t.getComputedStyle(e);
    },
    Me = function (e, t, n) {
      var r,
        i,
        o = {};
      for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
      for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
      return r;
    },
    Ie = new RegExp(ne.join('|'), 'i');
  function We(e, t, n) {
    var r,
      i,
      o,
      a,
      s = e.style;
    return (
      (n = n || Re(e)) &&
        ('' !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = S.style(e, t)),
        !y.pixelBoxStyles() &&
          Pe.test(a) &&
          Ie.test(t) &&
          ((r = s.width), (i = s.minWidth), (o = s.maxWidth), (s.minWidth = s.maxWidth = s.width = a), (a = n.width), (s.width = r), (s.minWidth = i), (s.maxWidth = o))),
      void 0 !== a ? a + '' : a
    );
  }
  function Fe(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      }
    };
  }
  !(function () {
    function e() {
      if (l) {
        (u.style.cssText = 'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0'),
          (l.style.cssText = 'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%'),
          re.appendChild(u).appendChild(l);
        var e = C.getComputedStyle(l);
        (n = '1%' !== e.top),
          (s = 12 === t(e.marginLeft)),
          (l.style.right = '60%'),
          (o = 36 === t(e.right)),
          (r = 36 === t(e.width)),
          (l.style.position = 'absolute'),
          (i = 12 === t(l.offsetWidth / 3)),
          re.removeChild(u),
          (l = null);
      }
    }
    function t(e) {
      return Math.round(parseFloat(e));
    }
    var n,
      r,
      i,
      o,
      a,
      s,
      u = E.createElement('div'),
      l = E.createElement('div');
    l.style &&
      ((l.style.backgroundClip = 'content-box'),
      (l.cloneNode(!0).style.backgroundClip = ''),
      (y.clearCloneStyle = 'content-box' === l.style.backgroundClip),
      S.extend(y, {
        boxSizingReliable: function () {
          return e(), r;
        },
        pixelBoxStyles: function () {
          return e(), o;
        },
        pixelPosition: function () {
          return e(), n;
        },
        reliableMarginLeft: function () {
          return e(), s;
        },
        scrollboxSize: function () {
          return e(), i;
        },
        reliableTrDimensions: function () {
          var e, t, n, r;
          return (
            null == a &&
              ((e = E.createElement('table')),
              (t = E.createElement('tr')),
              (n = E.createElement('div')),
              (e.style.cssText = 'position:absolute;left:-11111px;border-collapse:separate'),
              (t.style.cssText = 'border:1px solid'),
              (t.style.height = '1px'),
              (n.style.height = '9px'),
              (n.style.display = 'block'),
              re.appendChild(e).appendChild(t).appendChild(n),
              (r = C.getComputedStyle(t)),
              (a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight),
              re.removeChild(e)),
            a
          );
        }
      }));
  })();
  var Be = ['Webkit', 'Moz', 'ms'],
    $e = E.createElement('div').style,
    _e = {};
  function ze(e) {
    var t = S.cssProps[e] || _e[e];
    return (
      t ||
      (e in $e
        ? e
        : (_e[e] =
            (function (e) {
              var t = e[0].toUpperCase() + e.slice(1),
                n = Be.length;
              while (n--) if ((e = Be[n] + t) in $e) return e;
            })(e) || e))
    );
  }
  var Ue = /^(none|table(?!-c[ea]).+)/,
    Xe = /^--/,
    Ve = { position: 'absolute', visibility: 'hidden', display: 'block' },
    Ge = { letterSpacing: '0', fontWeight: '400' };
  function Ye(e, t, n) {
    var r = te.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || 'px') : t;
  }
  function Qe(e, t, n, r, i, o) {
    var a = 'width' === t ? 1 : 0,
      s = 0,
      u = 0;
    if (n === (r ? 'border' : 'content')) return 0;
    for (; a < 4; a += 2)
      'margin' === n && (u += S.css(e, n + ne[a], !0, i)),
        r
          ? ('content' === n && (u -= S.css(e, 'padding' + ne[a], !0, i)), 'margin' !== n && (u -= S.css(e, 'border' + ne[a] + 'Width', !0, i)))
          : ((u += S.css(e, 'padding' + ne[a], !0, i)), 'padding' !== n ? (u += S.css(e, 'border' + ne[a] + 'Width', !0, i)) : (s += S.css(e, 'border' + ne[a] + 'Width', !0, i)));
    return !r && 0 <= o && (u += Math.max(0, Math.ceil(e['offset' + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5)) || 0), u;
  }
  function Je(e, t, n) {
    var r = Re(e),
      i = (!y.boxSizingReliable() || n) && 'border-box' === S.css(e, 'boxSizing', !1, r),
      o = i,
      a = We(e, t, r),
      s = 'offset' + t[0].toUpperCase() + t.slice(1);
    if (Pe.test(a)) {
      if (!n) return a;
      a = 'auto';
    }
    return (
      ((!y.boxSizingReliable() && i) || (!y.reliableTrDimensions() && A(e, 'tr')) || 'auto' === a || (!parseFloat(a) && 'inline' === S.css(e, 'display', !1, r))) &&
        e.getClientRects().length &&
        ((i = 'border-box' === S.css(e, 'boxSizing', !1, r)), (o = s in e) && (a = e[s])),
      (a = parseFloat(a) || 0) + Qe(e, t, n || (i ? 'border' : 'content'), o, r, a) + 'px'
    );
  }
  function Ke(e, t, n, r, i) {
    return new Ke.prototype.init(e, t, n, r, i);
  }
  S.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = We(e, 'opacity');
            return '' === n ? '1' : n;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = X(t),
          u = Xe.test(t),
          l = e.style;
        if ((u || (t = ze(s)), (a = S.cssHooks[t] || S.cssHooks[s]), void 0 === n)) return a && 'get' in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        'string' === (o = typeof n) && (i = te.exec(n)) && i[1] && ((n = se(e, t, i)), (o = 'number')),
          null != n &&
            n == n &&
            ('number' !== o || u || (n += (i && i[3]) || (S.cssNumber[s] ? '' : 'px')),
            y.clearCloneStyle || '' !== n || 0 !== t.indexOf('background') || (l[t] = 'inherit'),
            (a && 'set' in a && void 0 === (n = a.set(e, n, r))) || (u ? l.setProperty(t, n) : (l[t] = n)));
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = X(t);
      return (
        Xe.test(t) || (t = ze(s)),
        (a = S.cssHooks[t] || S.cssHooks[s]) && 'get' in a && (i = a.get(e, !0, n)),
        void 0 === i && (i = We(e, t, r)),
        'normal' === i && t in Ge && (i = Ge[t]),
        '' === n || n ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i) : i
      );
    }
  }),
    S.each(['height', 'width'], function (e, u) {
      S.cssHooks[u] = {
        get: function (e, t, n) {
          if (t)
            return !Ue.test(S.css(e, 'display')) || (e.getClientRects().length && e.getBoundingClientRect().width)
              ? Je(e, u, n)
              : Me(e, Ve, function () {
                  return Je(e, u, n);
                });
        },
        set: function (e, t, n) {
          var r,
            i = Re(e),
            o = !y.scrollboxSize() && 'absolute' === i.position,
            a = (o || n) && 'border-box' === S.css(e, 'boxSizing', !1, i),
            s = n ? Qe(e, u, n, a, i) : 0;
          return (
            a && o && (s -= Math.ceil(e['offset' + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Qe(e, u, 'border', !1, i) - 0.5)),
            s && (r = te.exec(t)) && 'px' !== (r[3] || 'px') && ((e.style[u] = t), (t = S.css(e, u))),
            Ye(0, t, s)
          );
        }
      };
    }),
    (S.cssHooks.marginLeft = Fe(y.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(We(e, 'marginLeft')) ||
            e.getBoundingClientRect().left -
              Me(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + 'px'
        );
    })),
    S.each({ margin: '', padding: '', border: 'Width' }, function (i, o) {
      (S.cssHooks[i + o] = {
        expand: function (e) {
          for (var t = 0, n = {}, r = 'string' == typeof e ? e.split(' ') : [e]; t < 4; t++) n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
          return n;
        }
      }),
        'margin' !== i && (S.cssHooks[i + o].set = Ye);
    }),
    S.fn.extend({
      css: function (e, t) {
        return $(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              a = 0;
            if (Array.isArray(t)) {
              for (r = Re(e), i = t.length; a < i; a++) o[t[a]] = S.css(e, t[a], !1, r);
              return o;
            }
            return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
          },
          e,
          t,
          1 < arguments.length
        );
      }
    }),
    (((S.Tween = Ke).prototype = {
      constructor: Ke,
      init: function (e, t, n, r, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || S.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (S.cssNumber[n] ? '' : 'px'));
      },
      cur: function () {
        var e = Ke.propHooks[this.prop];
        return e && e.get ? e.get(this) : Ke.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = Ke.propHooks[this.prop];
        return (
          this.options.duration ? (this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)) : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step && this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : Ke.propHooks._default.set(this),
          this
        );
      }
    }).init.prototype = Ke.prototype),
    ((Ke.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop]) ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, '')) && 'auto' !== t ? t : 0;
        },
        set: function (e) {
          S.fx.step[e.prop]
            ? S.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType || (!S.cssHooks[e.prop] && null == e.elem.style[ze(e.prop)])
            ? (e.elem[e.prop] = e.now)
            : S.style(e.elem, e.prop, e.now + e.unit);
        }
      }
    }).scrollTop = Ke.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        }
      }),
    (S.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: 'swing'
    }),
    (S.fx = Ke.prototype.init),
    (S.fx.step = {});
  var Ze,
    et,
    tt,
    nt,
    rt = /^(?:toggle|show|hide)$/,
    it = /queueHooks$/;
  function ot() {
    et && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(ot) : C.setTimeout(ot, S.fx.interval), S.fx.tick());
  }
  function at() {
    return (
      C.setTimeout(function () {
        Ze = void 0;
      }),
      (Ze = Date.now())
    );
  }
  function st(e, t) {
    var n,
      r = 0,
      i = { height: e };
    for (t = t ? 1 : 0; r < 4; r += 2 - t) i['margin' + (n = ne[r])] = i['padding' + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function ut(e, t, n) {
    for (var r, i = (lt.tweeners[t] || []).concat(lt.tweeners['*']), o = 0, a = i.length; o < a; o++) if ((r = i[o].call(n, t, e))) return r;
  }
  function lt(o, e, t) {
    var n,
      a,
      r = 0,
      i = lt.prefilters.length,
      s = S.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (a) return !1;
        for (var e = Ze || at(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
        return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1);
      },
      l = s.promise({
        elem: o,
        props: S.extend({}, e),
        opts: S.extend(!0, { specialEasing: {}, easing: S.easing._default }, t),
        originalProperties: e,
        originalOptions: t,
        startTime: Ze || at(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
          return l.tweens.push(n), n;
        },
        stop: function (e) {
          var t = 0,
            n = e ? l.tweens.length : 0;
          if (a) return this;
          for (a = !0; t < n; t++) l.tweens[t].run(1);
          return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this;
        }
      }),
      c = l.props;
    for (
      !(function (e, t) {
        var n, r, i, o, a;
        for (n in e)
          if (((i = t[(r = X(n))]), (o = e[n]), Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])), n !== r && ((e[r] = o), delete e[n]), (a = S.cssHooks[r]) && ('expand' in a)))
            for (n in ((o = a.expand(o)), delete e[r], o)) (n in e) || ((e[n] = o[n]), (t[n] = i));
          else t[r] = i;
      })(c, l.opts.specialEasing);
      r < i;
      r++
    )
      if ((n = lt.prefilters[r].call(l, o, c, l.opts))) return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
    return (
      S.map(c, ut, l),
      m(l.opts.start) && l.opts.start.call(o, l),
      l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
      S.fx.timer(S.extend(u, { elem: o, anim: l, queue: l.opts.queue })),
      l
    );
  }
  (S.Animation = S.extend(lt, {
    tweeners: {
      '*': [
        function (e, t) {
          var n = this.createTween(e, t);
          return se(n.elem, e, te.exec(t), n), n;
        }
      ]
    },
    tweener: function (e, t) {
      m(e) ? ((t = e), (e = ['*'])) : (e = e.match(P));
      for (var n, r = 0, i = e.length; r < i; r++) (n = e[r]), (lt.tweeners[n] = lt.tweeners[n] || []), lt.tweeners[n].unshift(t);
    },
    prefilters: [
      function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = 'width' in t || 'height' in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && ae(e),
          v = Y.get(e, 'fxshow');
        for (r in (n.queue ||
          (null == (a = S._queueHooks(e, 'fx')).unqueued &&
            ((a.unqueued = 0),
            (s = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || s();
            })),
          a.unqueued++,
          p.always(function () {
            p.always(function () {
              a.unqueued--, S.queue(e, 'fx').length || a.empty.fire();
            });
          })),
        t))
          if (((i = t[r]), rt.test(i))) {
            if ((delete t[r], (o = o || 'toggle' === i), i === (g ? 'hide' : 'show'))) {
              if ('show' !== i || !v || void 0 === v[r]) continue;
              g = !0;
            }
            d[r] = (v && v[r]) || S.style(e, r);
          }
        if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
          for (r in (f &&
            1 === e.nodeType &&
            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
            null == (l = v && v.display) && (l = Y.get(e, 'display')),
            'none' === (c = S.css(e, 'display')) && (l ? (c = l) : (le([e], !0), (l = e.style.display || l), (c = S.css(e, 'display')), le([e]))),
            ('inline' === c || ('inline-block' === c && null != l)) &&
              'none' === S.css(e, 'float') &&
              (u ||
                (p.done(function () {
                  h.display = l;
                }),
                null == l && ((c = h.display), (l = 'none' === c ? '' : c))),
              (h.display = 'inline-block'))),
          n.overflow &&
            ((h.overflow = 'hidden'),
            p.always(function () {
              (h.overflow = n.overflow[0]), (h.overflowX = n.overflow[1]), (h.overflowY = n.overflow[2]);
            })),
          (u = !1),
          d))
            u ||
              (v ? 'hidden' in v && (g = v.hidden) : (v = Y.access(e, 'fxshow', { display: l })),
              o && (v.hidden = !g),
              g && le([e], !0),
              p.done(function () {
                for (r in (g || le([e]), Y.remove(e, 'fxshow'), d)) S.style(e, r, d[r]);
              })),
              (u = ut(g ? v[r] : 0, r, p)),
              r in v || ((v[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
      }
    ],
    prefilter: function (e, t) {
      t ? lt.prefilters.unshift(e) : lt.prefilters.push(e);
    }
  })),
    (S.speed = function (e, t, n) {
      var r = e && 'object' == typeof e ? S.extend({}, e) : { complete: n || (!n && t) || (m(e) && e), duration: e, easing: (n && t) || (t && !m(t) && t) };
      return (
        S.fx.off ? (r.duration = 0) : 'number' != typeof r.duration && (r.duration in S.fx.speeds ? (r.duration = S.fx.speeds[r.duration]) : (r.duration = S.fx.speeds._default)),
        (null != r.queue && !0 !== r.queue) || (r.queue = 'fx'),
        (r.old = r.complete),
        (r.complete = function () {
          m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue);
        }),
        r
      );
    }),
    S.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(ae).css('opacity', 0).show().end().animate({ opacity: t }, e, n, r);
      },
      animate: function (t, e, n, r) {
        var i = S.isEmptyObject(t),
          o = S.speed(e, n, r),
          a = function () {
            var e = lt(this, S.extend({}, t), o);
            (i || Y.get(this, 'finish')) && e.stop(!0);
          };
        return (a.finish = a), i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
      },
      stop: function (i, e, o) {
        var a = function (e) {
          var t = e.stop;
          delete e.stop, t(o);
        };
        return (
          'string' != typeof i && ((o = e), (e = i), (i = void 0)),
          e && this.queue(i || 'fx', []),
          this.each(function () {
            var e = !0,
              t = null != i && i + 'queueHooks',
              n = S.timers,
              r = Y.get(this);
            if (t) r[t] && r[t].stop && a(r[t]);
            else for (t in r) r[t] && r[t].stop && it.test(t) && a(r[t]);
            for (t = n.length; t--; ) n[t].elem !== this || (null != i && n[t].queue !== i) || (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
            (!e && o) || S.dequeue(this, i);
          })
        );
      },
      finish: function (a) {
        return (
          !1 !== a && (a = a || 'fx'),
          this.each(function () {
            var e,
              t = Y.get(this),
              n = t[a + 'queue'],
              r = t[a + 'queueHooks'],
              i = S.timers,
              o = n ? n.length : 0;
            for (t.finish = !0, S.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--; ) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
            for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
            delete t.finish;
          })
        );
      }
    }),
    S.each(['toggle', 'show', 'hide'], function (e, r) {
      var i = S.fn[r];
      S.fn[r] = function (e, t, n) {
        return null == e || 'boolean' == typeof e ? i.apply(this, arguments) : this.animate(st(r, !0), e, t, n);
      };
    }),
    S.each({ slideDown: st('show'), slideUp: st('hide'), slideToggle: st('toggle'), fadeIn: { opacity: 'show' }, fadeOut: { opacity: 'hide' }, fadeToggle: { opacity: 'toggle' } }, function (e, r) {
      S.fn[e] = function (e, t, n) {
        return this.animate(r, e, t, n);
      };
    }),
    (S.timers = []),
    (S.fx.tick = function () {
      var e,
        t = 0,
        n = S.timers;
      for (Ze = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || S.fx.stop(), (Ze = void 0);
    }),
    (S.fx.timer = function (e) {
      S.timers.push(e), S.fx.start();
    }),
    (S.fx.interval = 13),
    (S.fx.start = function () {
      et || ((et = !0), ot());
    }),
    (S.fx.stop = function () {
      et = null;
    }),
    (S.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (S.fn.delay = function (r, e) {
      return (
        (r = (S.fx && S.fx.speeds[r]) || r),
        (e = e || 'fx'),
        this.queue(e, function (e, t) {
          var n = C.setTimeout(e, r);
          t.stop = function () {
            C.clearTimeout(n);
          };
        })
      );
    }),
    (tt = E.createElement('input')),
    (nt = E.createElement('select').appendChild(E.createElement('option'))),
    (tt.type = 'checkbox'),
    (y.checkOn = '' !== tt.value),
    (y.optSelected = nt.selected),
    ((tt = E.createElement('input')).value = 't'),
    (tt.type = 'radio'),
    (y.radioValue = 't' === tt.value);
  var ct,
    ft = S.expr.attrHandle;
  S.fn.extend({
    attr: function (e, t) {
      return $(this, S.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        S.removeAttr(this, e);
      });
    }
  }),
    S.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return 'undefined' == typeof e.getAttribute
            ? S.prop(e, t, n)
            : ((1 === o && S.isXMLDoc(e)) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? ct : void 0)),
              void 0 !== n
                ? null === n
                  ? void S.removeAttr(e, t)
                  : i && 'set' in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e.setAttribute(t, n + ''), n)
                : i && 'get' in i && null !== (r = i.get(e, t))
                ? r
                : null == (r = S.find.attr(e, t))
                ? void 0
                : r);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!y.radioValue && 'radio' === t && A(e, 'input')) {
              var n = e.value;
              return e.setAttribute('type', t), n && (e.value = n), t;
            }
          }
        }
      },
      removeAttr: function (e, t) {
        var n,
          r = 0,
          i = t && t.match(P);
        if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n);
      }
    }),
    (ct = {
      set: function (e, t, n) {
        return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
      }
    }),
    S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var a = ft[t] || S.find.attr;
      ft[t] = function (e, t, n) {
        var r,
          i,
          o = t.toLowerCase();
        return n || ((i = ft[o]), (ft[o] = r), (r = null != a(e, t, n) ? o : null), (ft[o] = i)), r;
      };
    });
  var pt = /^(?:input|select|textarea|button)$/i,
    dt = /^(?:a|area)$/i;
  function ht(e) {
    return (e.match(P) || []).join(' ');
  }
  function gt(e) {
    return (e.getAttribute && e.getAttribute('class')) || '';
  }
  function vt(e) {
    return Array.isArray(e) ? e : ('string' == typeof e && e.match(P)) || [];
  }
  S.fn.extend({
    prop: function (e, t) {
      return $(this, S.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[S.propFix[e] || e];
      });
    }
  }),
    S.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && S.isXMLDoc(e)) || ((t = S.propFix[t] || t), (i = S.propHooks[t])),
            void 0 !== n ? (i && 'set' in i && void 0 !== (r = i.set(e, n, t)) ? r : (e[t] = n)) : i && 'get' in i && null !== (r = i.get(e, t)) ? r : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = S.find.attr(e, 'tabindex');
            return t ? parseInt(t, 10) : pt.test(e.nodeName) || (dt.test(e.nodeName) && e.href) ? 0 : -1;
          }
        }
      },
      propFix: { for: 'htmlFor', class: 'className' }
    }),
    y.optSelected ||
      (S.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        }
      }),
    S.each(['tabIndex', 'readOnly', 'maxLength', 'cellSpacing', 'cellPadding', 'rowSpan', 'colSpan', 'useMap', 'frameBorder', 'contentEditable'], function () {
      S.propFix[this.toLowerCase()] = this;
    }),
    S.fn.extend({
      addClass: function (t) {
        var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
        if (m(t))
          return this.each(function (e) {
            S(this).addClass(t.call(this, e, gt(this)));
          });
        if ((e = vt(t)).length)
          while ((n = this[u++]))
            if (((i = gt(n)), (r = 1 === n.nodeType && ' ' + ht(i) + ' '))) {
              a = 0;
              while ((o = e[a++])) r.indexOf(' ' + o + ' ') < 0 && (r += o + ' ');
              i !== (s = ht(r)) && n.setAttribute('class', s);
            }
        return this;
      },
      removeClass: function (t) {
        var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
        if (m(t))
          return this.each(function (e) {
            S(this).removeClass(t.call(this, e, gt(this)));
          });
        if (!arguments.length) return this.attr('class', '');
        if ((e = vt(t)).length)
          while ((n = this[u++]))
            if (((i = gt(n)), (r = 1 === n.nodeType && ' ' + ht(i) + ' '))) {
              a = 0;
              while ((o = e[a++])) while (-1 < r.indexOf(' ' + o + ' ')) r = r.replace(' ' + o + ' ', ' ');
              i !== (s = ht(r)) && n.setAttribute('class', s);
            }
        return this;
      },
      toggleClass: function (i, t) {
        var o = typeof i,
          a = 'string' === o || Array.isArray(i);
        return 'boolean' == typeof t && a
          ? t
            ? this.addClass(i)
            : this.removeClass(i)
          : m(i)
          ? this.each(function (e) {
              S(this).toggleClass(i.call(this, e, gt(this), t), t);
            })
          : this.each(function () {
              var e, t, n, r;
              if (a) {
                (t = 0), (n = S(this)), (r = vt(i));
                while ((e = r[t++])) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
              } else (void 0 !== i && 'boolean' !== o) || ((e = gt(this)) && Y.set(this, '__className__', e), this.setAttribute && this.setAttribute('class', e || !1 === i ? '' : Y.get(this, '__className__') || ''));
            });
      },
      hasClass: function (e) {
        var t,
          n,
          r = 0;
        t = ' ' + e + ' ';
        while ((n = this[r++])) if (1 === n.nodeType && -1 < (' ' + ht(gt(n)) + ' ').indexOf(t)) return !0;
        return !1;
      }
    });
  var yt = /\r/g;
  S.fn.extend({
    val: function (n) {
      var r,
        e,
        i,
        t = this[0];
      return arguments.length
        ? ((i = m(n)),
          this.each(function (e) {
            var t;
            1 === this.nodeType &&
              (null == (t = i ? n.call(this, e, S(this).val()) : n)
                ? (t = '')
                : 'number' == typeof t
                ? (t += '')
                : Array.isArray(t) &&
                  (t = S.map(t, function (e) {
                    return null == e ? '' : e + '';
                  })),
              ((r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && 'set' in r && void 0 !== r.set(this, t, 'value')) || (this.value = t));
          }))
        : t
        ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && 'get' in r && void 0 !== (e = r.get(t, 'value'))
          ? e
          : 'string' == typeof (e = t.value)
          ? e.replace(yt, '')
          : null == e
          ? ''
          : e
        : void 0;
    }
  }),
    S.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = S.find.attr(e, 'value');
            return null != t ? t : ht(S.text(e));
          }
        },
        select: {
          get: function (e) {
            var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = 'select-one' === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;
            for (r = o < 0 ? u : a ? o : 0; r < u; r++)
              if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, 'optgroup'))) {
                if (((t = S(n).val()), a)) return t;
                s.push(t);
              }
            return s;
          },
          set: function (e, t) {
            var n,
              r,
              i = e.options,
              o = S.makeArray(t),
              a = i.length;
            while (a--) ((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          }
        }
      }
    }),
    S.each(['radio', 'checkbox'], function () {
      (S.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t)) return (e.checked = -1 < S.inArray(S(e).val(), t));
        }
      }),
        y.checkOn ||
          (S.valHooks[this].get = function (e) {
            return null === e.getAttribute('value') ? 'on' : e.value;
          });
    }),
    (y.focusin = 'onfocusin' in C);
  var mt = /^(?:focusinfocus|focusoutblur)$/,
    xt = function (e) {
      e.stopPropagation();
    };
  S.extend(S.event, {
    trigger: function (e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p = [n || E],
        d = v.call(e, 'type') ? e.type : e,
        h = v.call(e, 'namespace') ? e.namespace.split('.') : [];
      if (
        ((o = f = a = n = n || E),
        3 !== n.nodeType &&
          8 !== n.nodeType &&
          !mt.test(d + S.event.triggered) &&
          (-1 < d.indexOf('.') && ((d = (h = d.split('.')).shift()), h.sort()),
          (u = d.indexOf(':') < 0 && 'on' + d),
          ((e = e[S.expando] ? e : new S.Event(d, 'object' == typeof e && e)).isTrigger = r ? 2 : 3),
          (e.namespace = h.join('.')),
          (e.rnamespace = e.namespace ? new RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)') : null),
          (e.result = void 0),
          e.target || (e.target = n),
          (t = null == t ? [e] : S.makeArray(t, [e])),
          (c = S.event.special[d] || {}),
          r || !c.trigger || !1 !== c.trigger.apply(n, t)))
      ) {
        if (!r && !c.noBubble && !x(n)) {
          for (s = c.delegateType || d, mt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), (a = o);
          a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C);
        }
        i = 0;
        while ((o = p[i++]) && !e.isPropagationStopped())
          (f = o),
            (e.type = 1 < i ? s : c.bindType || d),
            (l = (Y.get(o, 'events') || Object.create(null))[e.type] && Y.get(o, 'handle')) && l.apply(o, t),
            (l = u && o[u]) && l.apply && V(o) && ((e.result = l.apply(o, t)), !1 === e.result && e.preventDefault());
        return (
          (e.type = d),
          r ||
            e.isDefaultPrevented() ||
            (c._default && !1 !== c._default.apply(p.pop(), t)) ||
            !V(n) ||
            (u &&
              m(n[d]) &&
              !x(n) &&
              ((a = n[u]) && (n[u] = null),
              (S.event.triggered = d),
              e.isPropagationStopped() && f.addEventListener(d, xt),
              n[d](),
              e.isPropagationStopped() && f.removeEventListener(d, xt),
              (S.event.triggered = void 0),
              a && (n[u] = a))),
          e.result
        );
      }
    },
    simulate: function (e, t, n) {
      var r = S.extend(new S.Event(), n, { type: e, isSimulated: !0 });
      S.event.trigger(r, null, t);
    }
  }),
    S.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          S.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return S.event.trigger(e, t, n, !0);
      }
    }),
    y.focusin ||
      S.each({ focus: 'focusin', blur: 'focusout' }, function (n, r) {
        var i = function (e) {
          S.event.simulate(r, e.target, S.event.fix(e));
        };
        S.event.special[r] = {
          setup: function () {
            var e = this.ownerDocument || this.document || this,
              t = Y.access(e, r);
            t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1);
          },
          teardown: function () {
            var e = this.ownerDocument || this.document || this,
              t = Y.access(e, r) - 1;
            t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r));
          }
        };
      });
  var bt = C.location,
    wt = { guid: Date.now() },
    Tt = /\?/;
  S.parseXML = function (e) {
    var t, n;
    if (!e || 'string' != typeof e) return null;
    try {
      t = new C.DOMParser().parseFromString(e, 'text/xml');
    } catch (e) {}
    return (
      (n = t && t.getElementsByTagName('parsererror')[0]),
      (t && !n) ||
        S.error(
          'Invalid XML: ' +
            (n
              ? S.map(n.childNodes, function (e) {
                  return e.textContent;
                }).join('\n')
              : e)
        ),
      t
    );
  };
  var Ct = /\[\]$/,
    Et = /\r?\n/g,
    St = /^(?:submit|button|image|reset|file)$/i,
    kt = /^(?:input|select|textarea|keygen)/i;
  function At(n, e, r, i) {
    var t;
    if (Array.isArray(e))
      S.each(e, function (e, t) {
        r || Ct.test(n) ? i(n, t) : At(n + '[' + ('object' == typeof t && null != t ? e : '') + ']', t, r, i);
      });
    else if (r || 'object' !== w(e)) i(n, e);
    else for (t in e) At(n + '[' + t + ']', e[t], r, i);
  }
  (S.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        var n = m(t) ? t() : t;
        r[r.length] = encodeURIComponent(e) + '=' + encodeURIComponent(null == n ? '' : n);
      };
    if (null == e) return '';
    if (Array.isArray(e) || (e.jquery && !S.isPlainObject(e)))
      S.each(e, function () {
        i(this.name, this.value);
      });
    else for (n in e) At(n, e[n], t, i);
    return r.join('&');
  }),
    S.fn.extend({
      serialize: function () {
        return S.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = S.prop(this, 'elements');
          return e ? S.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return this.name && !S(this).is(':disabled') && kt.test(this.nodeName) && !St.test(e) && (this.checked || !pe.test(e));
          })
          .map(function (e, t) {
            var n = S(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? S.map(n, function (e) {
                  return { name: t.name, value: e.replace(Et, '\r\n') };
                })
              : { name: t.name, value: n.replace(Et, '\r\n') };
          })
          .get();
      }
    });
  var Nt = /%20/g,
    jt = /#.*$/,
    Dt = /([?&])_=[^&]*/,
    qt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Lt = /^(?:GET|HEAD)$/,
    Ht = /^\/\//,
    Ot = {},
    Pt = {},
    Rt = '*/'.concat('*'),
    Mt = E.createElement('a');
  function It(o) {
    return function (e, t) {
      'string' != typeof e && ((t = e), (e = '*'));
      var n,
        r = 0,
        i = e.toLowerCase().match(P) || [];
      if (m(t)) while ((n = i[r++])) '+' === n[0] ? ((n = n.slice(1) || '*'), (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t);
    };
  }
  function Wt(t, i, o, a) {
    var s = {},
      u = t === Pt;
    function l(e) {
      var r;
      return (
        (s[e] = !0),
        S.each(t[e] || [], function (e, t) {
          var n = t(i, o, a);
          return 'string' != typeof n || u || s[n] ? (u ? !(r = n) : void 0) : (i.dataTypes.unshift(n), l(n), !1);
        }),
        r
      );
    }
    return l(i.dataTypes[0]) || (!s['*'] && l('*'));
  }
  function Ft(e, t) {
    var n,
      r,
      i = S.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && S.extend(!0, e, r), e;
  }
  (Mt.href = bt.href),
    S.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: bt.href,
        type: 'GET',
        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        accepts: { '*': Rt, text: 'text/plain', html: 'text/html', xml: 'application/xml, text/xml', json: 'application/json, text/javascript' },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: { xml: 'responseXML', text: 'responseText', json: 'responseJSON' },
        converters: { '* text': String, 'text html': !0, 'text json': JSON.parse, 'text xml': S.parseXML },
        flatOptions: { url: !0, context: !0 }
      },
      ajaxSetup: function (e, t) {
        return t ? Ft(Ft(e, S.ajaxSettings), t) : Ft(S.ajaxSettings, e);
      },
      ajaxPrefilter: It(Ot),
      ajaxTransport: It(Pt),
      ajax: function (e, t) {
        'object' == typeof e && ((t = e), (e = void 0)), (t = t || {});
        var c,
          f,
          p,
          n,
          d,
          r,
          h,
          g,
          i,
          o,
          v = S.ajaxSetup({}, t),
          y = v.context || v,
          m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
          x = S.Deferred(),
          b = S.Callbacks('once memory'),
          w = v.statusCode || {},
          a = {},
          s = {},
          u = 'canceled',
          T = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (h) {
                if (!n) {
                  n = {};
                  while ((t = qt.exec(p))) n[t[1].toLowerCase() + ' '] = (n[t[1].toLowerCase() + ' '] || []).concat(t[2]);
                }
                t = n[e.toLowerCase() + ' '];
              }
              return null == t ? null : t.join(', ');
            },
            getAllResponseHeaders: function () {
              return h ? p : null;
            },
            setRequestHeader: function (e, t) {
              return null == h && ((e = s[e.toLowerCase()] = s[e.toLowerCase()] || e), (a[e] = t)), this;
            },
            overrideMimeType: function (e) {
              return null == h && (v.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (h) T.always(e[T.status]);
                else for (t in e) w[t] = [w[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || u;
              return c && c.abort(t), l(0, t), this;
            }
          };
        if (
          (x.promise(T),
          (v.url = ((e || v.url || bt.href) + '').replace(Ht, bt.protocol + '//')),
          (v.type = t.method || t.type || v.method || v.type),
          (v.dataTypes = (v.dataType || '*').toLowerCase().match(P) || ['']),
          null == v.crossDomain)
        ) {
          r = E.createElement('a');
          try {
            (r.href = v.url), (r.href = r.href), (v.crossDomain = Mt.protocol + '//' + Mt.host != r.protocol + '//' + r.host);
          } catch (e) {
            v.crossDomain = !0;
          }
        }
        if ((v.data && v.processData && 'string' != typeof v.data && (v.data = S.param(v.data, v.traditional)), Wt(Ot, v, t, T), h)) return T;
        for (i in ((g = S.event && v.global) && 0 == S.active++ && S.event.trigger('ajaxStart'),
        (v.type = v.type.toUpperCase()),
        (v.hasContent = !Lt.test(v.type)),
        (f = v.url.replace(jt, '')),
        v.hasContent
          ? v.data && v.processData && 0 === (v.contentType || '').indexOf('application/x-www-form-urlencoded') && (v.data = v.data.replace(Nt, '+'))
          : ((o = v.url.slice(f.length)),
            v.data && (v.processData || 'string' == typeof v.data) && ((f += (Tt.test(f) ? '&' : '?') + v.data), delete v.data),
            !1 === v.cache && ((f = f.replace(Dt, '$1')), (o = (Tt.test(f) ? '&' : '?') + '_=' + wt.guid++ + o)),
            (v.url = f + o)),
        v.ifModified && (S.lastModified[f] && T.setRequestHeader('If-Modified-Since', S.lastModified[f]), S.etag[f] && T.setRequestHeader('If-None-Match', S.etag[f])),
        ((v.data && v.hasContent && !1 !== v.contentType) || t.contentType) && T.setRequestHeader('Content-Type', v.contentType),
        T.setRequestHeader('Accept', v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ('*' !== v.dataTypes[0] ? ', ' + Rt + '; q=0.01' : '') : v.accepts['*']),
        v.headers))
          T.setRequestHeader(i, v.headers[i]);
        if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();
        if (((u = 'abort'), b.add(v.complete), T.done(v.success), T.fail(v.error), (c = Wt(Pt, v, t, T)))) {
          if (((T.readyState = 1), g && m.trigger('ajaxSend', [T, v]), h)) return T;
          v.async &&
            0 < v.timeout &&
            (d = C.setTimeout(function () {
              T.abort('timeout');
            }, v.timeout));
          try {
            (h = !1), c.send(a, l);
          } catch (e) {
            if (h) throw e;
            l(-1, e);
          }
        } else l(-1, 'No Transport');
        function l(e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = t;
          h ||
            ((h = !0),
            d && C.clearTimeout(d),
            (c = void 0),
            (p = r || ''),
            (T.readyState = 0 < e ? 4 : 0),
            (i = (200 <= e && e < 300) || 304 === e),
            n &&
              (s = (function (e, t, n) {
                var r,
                  i,
                  o,
                  a,
                  s = e.contents,
                  u = e.dataTypes;
                while ('*' === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader('Content-Type'));
                if (r)
                  for (i in s)
                    if (s[i] && s[i].test(r)) {
                      u.unshift(i);
                      break;
                    }
                if (u[0] in n) o = u[0];
                else {
                  for (i in n) {
                    if (!u[0] || e.converters[i + ' ' + u[0]]) {
                      o = i;
                      break;
                    }
                    a || (a = i);
                  }
                  o = o || a;
                }
                if (o) return o !== u[0] && u.unshift(o), n[o];
              })(v, T, n)),
            !i && -1 < S.inArray('script', v.dataTypes) && S.inArray('json', v.dataTypes) < 0 && (v.converters['text script'] = function () {}),
            (s = (function (e, t, n, r) {
              var i,
                o,
                a,
                s,
                u,
                l = {},
                c = e.dataTypes.slice();
              if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
              o = c.shift();
              while (o)
                if ((e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), (u = o), (o = c.shift())))
                  if ('*' === o) o = u;
                  else if ('*' !== u && u !== o) {
                    if (!(a = l[u + ' ' + o] || l['* ' + o]))
                      for (i in l)
                        if ((s = i.split(' '))[1] === o && (a = l[u + ' ' + s[0]] || l['* ' + s[0]])) {
                          !0 === a ? (a = l[i]) : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                          break;
                        }
                    if (!0 !== a)
                      if (a && e['throws']) t = a(t);
                      else
                        try {
                          t = a(t);
                        } catch (e) {
                          return { state: 'parsererror', error: a ? e : 'No conversion from ' + u + ' to ' + o };
                        }
                  }
              return { state: 'success', data: t };
            })(v, s, T, i)),
            i
              ? (v.ifModified && ((u = T.getResponseHeader('Last-Modified')) && (S.lastModified[f] = u), (u = T.getResponseHeader('etag')) && (S.etag[f] = u)),
                204 === e || 'HEAD' === v.type ? (l = 'nocontent') : 304 === e ? (l = 'notmodified') : ((l = s.state), (o = s.data), (i = !(a = s.error))))
              : ((a = l), (!e && l) || ((l = 'error'), e < 0 && (e = 0))),
            (T.status = e),
            (T.statusText = (t || l) + ''),
            i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]),
            T.statusCode(w),
            (w = void 0),
            g && m.trigger(i ? 'ajaxSuccess' : 'ajaxError', [T, v, i ? o : a]),
            b.fireWith(y, [T, l]),
            g && (m.trigger('ajaxComplete', [T, v]), --S.active || S.event.trigger('ajaxStop')));
        }
        return T;
      },
      getJSON: function (e, t, n) {
        return S.get(e, t, n, 'json');
      },
      getScript: function (e, t) {
        return S.get(e, void 0, t, 'script');
      }
    }),
    S.each(['get', 'post'], function (e, i) {
      S[i] = function (e, t, n, r) {
        return m(t) && ((r = r || n), (n = t), (t = void 0)), S.ajax(S.extend({ url: e, type: i, dataType: r, data: t, success: n }, S.isPlainObject(e) && e));
      };
    }),
    S.ajaxPrefilter(function (e) {
      var t;
      for (t in e.headers) 'content-type' === t.toLowerCase() && (e.contentType = e.headers[t] || '');
    }),
    (S._evalUrl = function (e, t, n) {
      return S.ajax({
        url: e,
        type: 'GET',
        dataType: 'script',
        cache: !0,
        async: !1,
        global: !1,
        converters: { 'text script': function () {} },
        dataFilter: function (e) {
          S.globalEval(e, t, n);
        }
      });
    }),
    S.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (m(e) && (e = e.call(this[0])),
            (t = S(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (n) {
        return m(n)
          ? this.each(function (e) {
              S(this).wrapInner(n.call(this, e));
            })
          : this.each(function () {
              var e = S(this),
                t = e.contents();
              t.length ? t.wrapAll(n) : e.append(n);
            });
      },
      wrap: function (t) {
        var n = m(t);
        return this.each(function (e) {
          S(this).wrapAll(n ? t.call(this, e) : t);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not('body')
            .each(function () {
              S(this).replaceWith(this.childNodes);
            }),
          this
        );
      }
    }),
    (S.expr.pseudos.hidden = function (e) {
      return !S.expr.pseudos.visible(e);
    }),
    (S.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (S.ajaxSettings.xhr = function () {
      try {
        return new C.XMLHttpRequest();
      } catch (e) {}
    });
  var Bt = { 0: 200, 1223: 204 },
    $t = S.ajaxSettings.xhr();
  (y.cors = !!$t && 'withCredentials' in $t),
    (y.ajax = $t = !!$t),
    S.ajaxTransport(function (i) {
      var o, a;
      if (y.cors || ($t && !i.crossDomain))
        return {
          send: function (e, t) {
            var n,
              r = i.xhr();
            if ((r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)) for (n in i.xhrFields) r[n] = i.xhrFields[n];
            for (n in (i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e['X-Requested-With'] || (e['X-Requested-With'] = 'XMLHttpRequest'), e))
              r.setRequestHeader(n, e[n]);
            (o = function (e) {
              return function () {
                o &&
                  ((o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null),
                  'abort' === e
                    ? r.abort()
                    : 'error' === e
                    ? 'number' != typeof r.status
                      ? t(0, 'error')
                      : t(r.status, r.statusText)
                    : t(
                        Bt[r.status] || r.status,
                        r.statusText,
                        'text' !== (r.responseType || 'text') || 'string' != typeof r.responseText ? { binary: r.response } : { text: r.responseText },
                        r.getAllResponseHeaders()
                      ));
              };
            }),
              (r.onload = o()),
              (a = r.onerror = r.ontimeout = o('error')),
              void 0 !== r.onabort
                ? (r.onabort = a)
                : (r.onreadystatechange = function () {
                    4 === r.readyState &&
                      C.setTimeout(function () {
                        o && a();
                      });
                  }),
              (o = o('abort'));
            try {
              r.send((i.hasContent && i.data) || null);
            } catch (e) {
              if (o) throw e;
            }
          },
          abort: function () {
            o && o();
          }
        };
    }),
    S.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    S.ajaxSetup({
      accepts: { script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript' },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        'text script': function (e) {
          return S.globalEval(e), e;
        }
      }
    }),
    S.ajaxPrefilter('script', function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = 'GET');
    }),
    S.ajaxTransport('script', function (n) {
      var r, i;
      if (n.crossDomain || n.scriptAttrs)
        return {
          send: function (e, t) {
            (r = S('<script>')
              .attr(n.scriptAttrs || {})
              .prop({ charset: n.scriptCharset, src: n.url })
              .on(
                'load error',
                (i = function (e) {
                  r.remove(), (i = null), e && t('error' === e.type ? 404 : 200, e.type);
                })
              )),
              E.head.appendChild(r[0]);
          },
          abort: function () {
            i && i();
          }
        };
    });
  var _t,
    zt = [],
    Ut = /(=)\?(?=&|$)|\?\?/;
  S.ajaxSetup({
    jsonp: 'callback',
    jsonpCallback: function () {
      var e = zt.pop() || S.expando + '_' + wt.guid++;
      return (this[e] = !0), e;
    }
  }),
    S.ajaxPrefilter('json jsonp', function (e, t, n) {
      var r,
        i,
        o,
        a = !1 !== e.jsonp && (Ut.test(e.url) ? 'url' : 'string' == typeof e.data && 0 === (e.contentType || '').indexOf('application/x-www-form-urlencoded') && Ut.test(e.data) && 'data');
      if (a || 'jsonp' === e.dataTypes[0])
        return (
          (r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
          a ? (e[a] = e[a].replace(Ut, '$1' + r)) : !1 !== e.jsonp && (e.url += (Tt.test(e.url) ? '&' : '?') + e.jsonp + '=' + r),
          (e.converters['script json'] = function () {
            return o || S.error(r + ' was not called'), o[0];
          }),
          (e.dataTypes[0] = 'json'),
          (i = C[r]),
          (C[r] = function () {
            o = arguments;
          }),
          n.always(function () {
            void 0 === i ? S(C).removeProp(r) : (C[r] = i), e[r] && ((e.jsonpCallback = t.jsonpCallback), zt.push(r)), o && m(i) && i(o[0]), (o = i = void 0);
          }),
          'script'
        );
    }),
    (y.createHTMLDocument = (((_t = E.implementation.createHTMLDocument('').body).innerHTML = '<form></form><form></form>'), 2 === _t.childNodes.length)),
    (S.parseHTML = function (e, t, n) {
      return 'string' != typeof e
        ? []
        : ('boolean' == typeof t && ((n = t), (t = !1)),
          t || (y.createHTMLDocument ? (((r = (t = E.implementation.createHTMLDocument('')).createElement('base')).href = E.location.href), t.head.appendChild(r)) : (t = E)),
          (o = !n && []),
          (i = N.exec(e)) ? [t.createElement(i[1])] : ((i = xe([e], t, o)), o && o.length && S(o).remove(), S.merge([], i.childNodes)));
      var r, i, o;
    }),
    (S.fn.load = function (e, t, n) {
      var r,
        i,
        o,
        a = this,
        s = e.indexOf(' ');
      return (
        -1 < s && ((r = ht(e.slice(s))), (e = e.slice(0, s))),
        m(t) ? ((n = t), (t = void 0)) : t && 'object' == typeof t && (i = 'POST'),
        0 < a.length &&
          S.ajax({ url: e, type: i || 'GET', dataType: 'html', data: t })
            .done(function (e) {
              (o = arguments), a.html(r ? S('<div>').append(S.parseHTML(e)).find(r) : e);
            })
            .always(
              n &&
                function (e, t) {
                  a.each(function () {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    (S.expr.pseudos.animated = function (t) {
      return S.grep(S.timers, function (e) {
        return t === e.elem;
      }).length;
    }),
    (S.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l = S.css(e, 'position'),
          c = S(e),
          f = {};
        'static' === l && (e.style.position = 'relative'),
          (s = c.offset()),
          (o = S.css(e, 'top')),
          (u = S.css(e, 'left')),
          ('absolute' === l || 'fixed' === l) && -1 < (o + u).indexOf('auto') ? ((a = (r = c.position()).top), (i = r.left)) : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
          m(t) && (t = t.call(e, n, S.extend({}, s))),
          null != t.top && (f.top = t.top - s.top + a),
          null != t.left && (f.left = t.left - s.left + i),
          'using' in t ? t.using.call(e, f) : c.css(f);
      }
    }),
    S.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function (e) {
                S.offset.setOffset(this, t, e);
              });
        var e,
          n,
          r = this[0];
        return r
          ? r.getClientRects().length
            ? ((e = r.getBoundingClientRect()), (n = r.ownerDocument.defaultView), { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            r = this[0],
            i = { top: 0, left: 0 };
          if ('fixed' === S.css(r, 'position')) t = r.getBoundingClientRect();
          else {
            (t = this.offset()), (n = r.ownerDocument), (e = r.offsetParent || n.documentElement);
            while (e && (e === n.body || e === n.documentElement) && 'static' === S.css(e, 'position')) e = e.parentNode;
            e && e !== r && 1 === e.nodeType && (((i = S(e).offset()).top += S.css(e, 'borderTopWidth', !0)), (i.left += S.css(e, 'borderLeftWidth', !0)));
          }
          return { top: t.top - i.top - S.css(r, 'marginTop', !0), left: t.left - i.left - S.css(r, 'marginLeft', !0) };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var e = this.offsetParent;
          while (e && 'static' === S.css(e, 'position')) e = e.offsetParent;
          return e || re;
        });
      }
    }),
    S.each({ scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' }, function (t, i) {
      var o = 'pageYOffset' === i;
      S.fn[t] = function (e) {
        return $(
          this,
          function (e, t, n) {
            var r;
            if ((x(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView), void 0 === n)) return r ? r[i] : e[t];
            r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : (e[t] = n);
          },
          t,
          e,
          arguments.length
        );
      };
    }),
    S.each(['top', 'left'], function (e, n) {
      S.cssHooks[n] = Fe(y.pixelPosition, function (e, t) {
        if (t) return (t = We(e, n)), Pe.test(t) ? S(e).position()[n] + 'px' : t;
      });
    }),
    S.each({ Height: 'height', Width: 'width' }, function (a, s) {
      S.each({ padding: 'inner' + a, content: s, '': 'outer' + a }, function (r, o) {
        S.fn[o] = function (e, t) {
          var n = arguments.length && (r || 'boolean' != typeof e),
            i = r || (!0 === e || !0 === t ? 'margin' : 'border');
          return $(
            this,
            function (e, t, n) {
              var r;
              return x(e)
                ? 0 === o.indexOf('outer')
                  ? e['inner' + a]
                  : e.document.documentElement['client' + a]
                : 9 === e.nodeType
                ? ((r = e.documentElement), Math.max(e.body['scroll' + a], r['scroll' + a], e.body['offset' + a], r['offset' + a], r['client' + a]))
                : void 0 === n
                ? S.css(e, t, i)
                : S.style(e, t, n, i);
            },
            s,
            n ? e : void 0,
            n
          );
        };
      });
    }),
    S.each(['ajaxStart', 'ajaxStop', 'ajaxComplete', 'ajaxError', 'ajaxSuccess', 'ajaxSend'], function (e, t) {
      S.fn[t] = function (e) {
        return this.on(t, e);
      };
    }),
    S.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length ? this.off(e, '**') : this.off(t, e || '**', n);
      },
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      }
    }),
    S.each(
      'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
        ' '
      ),
      function (e, n) {
        S.fn[n] = function (e, t) {
          return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
        };
      }
    );
  var Xt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  (S.proxy = function (e, t) {
    var n, r, i;
    if (('string' == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
      return (
        (r = s.call(arguments, 2)),
        ((i = function () {
          return e.apply(t || this, r.concat(s.call(arguments)));
        }).guid = e.guid =
          e.guid || S.guid++),
        i
      );
  }),
    (S.holdReady = function (e) {
      e ? S.readyWait++ : S.ready(!0);
    }),
    (S.isArray = Array.isArray),
    (S.parseJSON = JSON.parse),
    (S.nodeName = A),
    (S.isFunction = m),
    (S.isWindow = x),
    (S.camelCase = X),
    (S.type = w),
    (S.now = Date.now),
    (S.isNumeric = function (e) {
      var t = S.type(e);
      return ('number' === t || 'string' === t) && !isNaN(e - parseFloat(e));
    }),
    (S.trim = function (e) {
      return null == e ? '' : (e + '').replace(Xt, '');
    }),
    'function' == typeof define &&
      define.amd &&
      define('jquery', [], function () {
        return S;
      });
  var Vt = C.jQuery,
    Gt = C.$;
  return (
    (S.noConflict = function (e) {
      return C.$ === S && (C.$ = Gt), e && C.jQuery === S && (C.jQuery = Vt), S;
    }),
    'undefined' == typeof e && (C.jQuery = C.$ = S),
    S
  );
});

/*! jQuery Migrate v3.3.2 | (c) OpenJS Foundation and other contributors | jquery.org/license */
'undefined' == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
  (function (t) {
    'use strict';
    'function' == typeof define && define.amd
      ? define(['jquery'], function (e) {
          return t(e, window);
        })
      : 'object' == typeof module && module.exports
      ? (module.exports = t(require('jquery'), window))
      : t(jQuery, window);
  })(function (s, n) {
    'use strict';
    function e(e) {
      return (
        0 <=
        (function (e, t) {
          for (var r = /^(\d+)\.(\d+)\.(\d+)/, n = r.exec(e) || [], o = r.exec(t) || [], i = 1; i <= 3; i++) {
            if (+o[i] < +n[i]) return 1;
            if (+n[i] < +o[i]) return -1;
          }
          return 0;
        })(s.fn.jquery, e)
      );
    }
    (s.migrateVersion = '3.3.2'),
      n.console &&
        n.console.log &&
        ((s && e('3.0.0')) || n.console.log('JQMIGRATE: jQuery 3.0.0+ REQUIRED'),
        s.migrateWarnings && n.console.log('JQMIGRATE: Migrate plugin loaded multiple times'),
        n.console.log('JQMIGRATE: Migrate is installed' + (s.migrateMute ? '' : ' with logging active') + ', version ' + s.migrateVersion));
    var r = {};
    function u(e) {
      var t = n.console;
      (s.migrateDeduplicateWarnings && r[e]) || ((r[e] = !0), s.migrateWarnings.push(e), t && t.warn && !s.migrateMute && (t.warn('JQMIGRATE: ' + e), s.migrateTrace && t.trace && t.trace()));
    }
    function t(e, t, r, n) {
      Object.defineProperty(e, t, {
        configurable: !0,
        enumerable: !0,
        get: function () {
          return u(n), r;
        },
        set: function (e) {
          u(n), (r = e);
        }
      });
    }
    function o(e, t, r, n) {
      e[t] = function () {
        return u(n), r.apply(this, arguments);
      };
    }
    (s.migrateDeduplicateWarnings = !0),
      (s.migrateWarnings = []),
      void 0 === s.migrateTrace && (s.migrateTrace = !0),
      (s.migrateReset = function () {
        (r = {}), (s.migrateWarnings.length = 0);
      }),
      'BackCompat' === n.document.compatMode && u('jQuery is not compatible with Quirks Mode');
    var i,
      a,
      c,
      d = {},
      l = s.fn.init,
      p = s.find,
      f = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
      y = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
      m = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    for (i in ((s.fn.init = function (e) {
      var t = Array.prototype.slice.call(arguments);
      return 'string' == typeof e && '#' === e && (u("jQuery( '#' ) is not a valid selector"), (t[0] = [])), l.apply(this, t);
    }),
    (s.fn.init.prototype = s.fn),
    (s.find = function (t) {
      var r = Array.prototype.slice.call(arguments);
      if ('string' == typeof t && f.test(t))
        try {
          n.document.querySelector(t);
        } catch (e) {
          t = t.replace(y, function (e, t, r, n) {
            return '[' + t + r + '"' + n + '"]';
          });
          try {
            n.document.querySelector(t), u("Attribute selector with '#' must be quoted: " + r[0]), (r[0] = t);
          } catch (e) {
            u("Attribute selector with '#' was not fixed: " + r[0]);
          }
        }
      return p.apply(this, r);
    }),
    p))
      Object.prototype.hasOwnProperty.call(p, i) && (s.find[i] = p[i]);
    o(
      s.fn,
      'size',
      function () {
        return this.length;
      },
      'jQuery.fn.size() is deprecated and removed; use the .length property'
    ),
      o(
        s,
        'parseJSON',
        function () {
          return JSON.parse.apply(null, arguments);
        },
        'jQuery.parseJSON is deprecated; use JSON.parse'
      ),
      o(s, 'holdReady', s.holdReady, 'jQuery.holdReady is deprecated'),
      o(s, 'unique', s.uniqueSort, 'jQuery.unique is deprecated; use jQuery.uniqueSort'),
      t(s.expr, 'filters', s.expr.pseudos, 'jQuery.expr.filters is deprecated; use jQuery.expr.pseudos'),
      t(s.expr, ':', s.expr.pseudos, "jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"),
      e('3.1.1') &&
        o(
          s,
          'trim',
          function (e) {
            return null == e ? '' : (e + '').replace(m, '');
          },
          'jQuery.trim is deprecated; use String.prototype.trim'
        ),
      e('3.2.0') &&
        (o(
          s,
          'nodeName',
          function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
          },
          'jQuery.nodeName is deprecated'
        ),
        o(s, 'isArray', Array.isArray, 'jQuery.isArray is deprecated; use Array.isArray')),
      e('3.3.0') &&
        (o(
          s,
          'isNumeric',
          function (e) {
            var t = typeof e;
            return ('number' == t || 'string' == t) && !isNaN(e - parseFloat(e));
          },
          'jQuery.isNumeric() is deprecated'
        ),
        s.each('Boolean Number String Function Array Date RegExp Object Error Symbol'.split(' '), function (e, t) {
          d['[object ' + t + ']'] = t.toLowerCase();
        }),
        o(
          s,
          'type',
          function (e) {
            return null == e ? e + '' : 'object' == typeof e || 'function' == typeof e ? d[Object.prototype.toString.call(e)] || 'object' : typeof e;
          },
          'jQuery.type is deprecated'
        ),
        o(
          s,
          'isFunction',
          function (e) {
            return 'function' == typeof e;
          },
          'jQuery.isFunction() is deprecated'
        ),
        o(
          s,
          'isWindow',
          function (e) {
            return null != e && e === e.window;
          },
          'jQuery.isWindow() is deprecated'
        )),
      s.ajax &&
        ((a = s.ajax),
        (c = /(=)\?(?=&|$)|\?\?/),
        (s.ajax = function () {
          var e = a.apply(this, arguments);
          return (
            e.promise &&
              (o(e, 'success', e.done, 'jQXHR.success is deprecated and removed'),
              o(e, 'error', e.fail, 'jQXHR.error is deprecated and removed'),
              o(e, 'complete', e.always, 'jQXHR.complete is deprecated and removed')),
            e
          );
        }),
        e('4.0.0') ||
          s.ajaxPrefilter('+json', function (e) {
            !1 !== e.jsonp &&
              (c.test(e.url) || ('string' == typeof e.data && 0 === (e.contentType || '').indexOf('application/x-www-form-urlencoded') && c.test(e.data))) &&
              u('JSON-to-JSONP auto-promotion is deprecated');
          }));
    var g = s.fn.removeAttr,
      h = s.fn.toggleClass,
      v = /\S+/g;
    function j(e) {
      return e.replace(/-([a-z])/g, function (e, t) {
        return t.toUpperCase();
      });
    }
    s.fn.removeAttr = function (e) {
      var r = this;
      return (
        s.each(e.match(v), function (e, t) {
          s.expr.match.bool.test(t) && (u('jQuery.fn.removeAttr no longer sets boolean properties: ' + t), r.prop(t, !1));
        }),
        g.apply(this, arguments)
      );
    };
    var Q,
      b = !(s.fn.toggleClass = function (t) {
        return void 0 !== t && 'boolean' != typeof t
          ? h.apply(this, arguments)
          : (u('jQuery.fn.toggleClass( boolean ) is deprecated'),
            this.each(function () {
              var e = (this.getAttribute && this.getAttribute('class')) || '';
              e && s.data(this, '__className__', e), this.setAttribute && this.setAttribute('class', (!e && !1 !== t && s.data(this, '__className__')) || '');
            }));
      }),
      w = /^[a-z]/,
      x = /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;
    s.swap &&
      s.each(['height', 'width', 'reliableMarginRight'], function (e, t) {
        var r = s.cssHooks[t] && s.cssHooks[t].get;
        r &&
          (s.cssHooks[t].get = function () {
            var e;
            return (b = !0), (e = r.apply(this, arguments)), (b = !1), e;
          });
      }),
      (s.swap = function (e, t, r, n) {
        var o,
          i,
          a = {};
        for (i in (b || u('jQuery.swap() is undocumented and deprecated'), t)) (a[i] = e.style[i]), (e.style[i] = t[i]);
        for (i in ((o = r.apply(e, n || [])), t)) e.style[i] = a[i];
        return o;
      }),
      e('3.4.0') &&
        'undefined' != typeof Proxy &&
        (s.cssProps = new Proxy(s.cssProps || {}, {
          set: function () {
            return u('JQMIGRATE: jQuery.cssProps is deprecated'), Reflect.set.apply(this, arguments);
          }
        })),
      s.cssNumber || (s.cssNumber = {}),
      (Q = s.fn.css),
      (s.fn.css = function (e, t) {
        var r,
          n,
          o = this;
        return e && 'object' == typeof e && !Array.isArray(e)
          ? (s.each(e, function (e, t) {
              s.fn.css.call(o, e, t);
            }),
            this)
          : ('number' == typeof t &&
              ((r = j(e)), (n = r), (w.test(n) && x.test(n[0].toUpperCase() + n.slice(1))) || s.cssNumber[r] || u('Number-typed values are deprecated for jQuery.fn.css( "' + e + '", value )')),
            Q.apply(this, arguments));
      });
    var A,
      k,
      S,
      M,
      N = s.data;
    (s.data = function (e, t, r) {
      var n, o, i;
      if (t && 'object' == typeof t && 2 === arguments.length) {
        for (i in ((n = s.hasData(e) && N.call(this, e)), (o = {}), t)) i !== j(i) ? (u('jQuery.data() always sets/gets camelCased names: ' + i), (n[i] = t[i])) : (o[i] = t[i]);
        return N.call(this, e, o), t;
      }
      return t && 'string' == typeof t && t !== j(t) && (n = s.hasData(e) && N.call(this, e)) && t in n
        ? (u('jQuery.data() always sets/gets camelCased names: ' + t), 2 < arguments.length && (n[t] = r), n[t])
        : N.apply(this, arguments);
    }),
      s.fx &&
        ((S = s.Tween.prototype.run),
        (M = function (e) {
          return e;
        }),
        (s.Tween.prototype.run = function () {
          1 < s.easing[this.easing].length && (u("'jQuery.easing." + this.easing.toString() + "' should use only one argument"), (s.easing[this.easing] = M)), S.apply(this, arguments);
        }),
        (A = s.fx.interval || 13),
        (k = 'jQuery.fx.interval is deprecated'),
        n.requestAnimationFrame &&
          Object.defineProperty(s.fx, 'interval', {
            configurable: !0,
            enumerable: !0,
            get: function () {
              return n.document.hidden || u(k), A;
            },
            set: function (e) {
              u(k), (A = e);
            }
          }));
    var R = s.fn.load,
      H = s.event.add,
      C = s.event.fix;
    (s.event.props = []),
      (s.event.fixHooks = {}),
      t(s.event.props, 'concat', s.event.props.concat, 'jQuery.event.props.concat() is deprecated and removed'),
      (s.event.fix = function (e) {
        var t,
          r = e.type,
          n = this.fixHooks[r],
          o = s.event.props;
        if (o.length) {
          u('jQuery.event.props are deprecated and removed: ' + o.join());
          while (o.length) s.event.addProp(o.pop());
        }
        if (n && !n._migrated_ && ((n._migrated_ = !0), u('jQuery.event.fixHooks are deprecated and removed: ' + r), (o = n.props) && o.length)) while (o.length) s.event.addProp(o.pop());
        return (t = C.call(this, e)), n && n.filter ? n.filter(t, e) : t;
      }),
      (s.event.add = function (e, t) {
        return e === n && 'load' === t && 'complete' === n.document.readyState && u("jQuery(window).on('load'...) called after load event occurred"), H.apply(this, arguments);
      }),
      s.each(['load', 'unload', 'error'], function (e, t) {
        s.fn[t] = function () {
          var e = Array.prototype.slice.call(arguments, 0);
          return 'load' === t && 'string' == typeof e[0]
            ? R.apply(this, e)
            : (u('jQuery.fn.' + t + '() is deprecated'), e.splice(0, 0, t), arguments.length ? this.on.apply(this, e) : (this.triggerHandler.apply(this, e), this));
        };
      }),
      s.each(
        'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
          ' '
        ),
        function (e, r) {
          s.fn[r] = function (e, t) {
            return u('jQuery.fn.' + r + '() event shorthand is deprecated'), 0 < arguments.length ? this.on(r, null, e, t) : this.trigger(r);
          };
        }
      ),
      s(function () {
        s(n.document).triggerHandler('ready');
      }),
      (s.event.special.ready = {
        setup: function () {
          this === n.document && u("'ready' event is deprecated");
        }
      }),
      s.fn.extend({
        bind: function (e, t, r) {
          return u('jQuery.fn.bind() is deprecated'), this.on(e, null, t, r);
        },
        unbind: function (e, t) {
          return u('jQuery.fn.unbind() is deprecated'), this.off(e, null, t);
        },
        delegate: function (e, t, r, n) {
          return u('jQuery.fn.delegate() is deprecated'), this.on(t, e, r, n);
        },
        undelegate: function (e, t, r) {
          return u('jQuery.fn.undelegate() is deprecated'), 1 === arguments.length ? this.off(e, '**') : this.off(t, e || '**', r);
        },
        hover: function (e, t) {
          return u('jQuery.fn.hover() is deprecated'), this.on('mouseenter', e).on('mouseleave', t || e);
        }
      });
    function T(e) {
      var t = n.document.implementation.createHTMLDocument('');
      return (t.body.innerHTML = e), t.body && t.body.innerHTML;
    }
    function P(e) {
      var t = e.replace(O, '<$1></$2>');
      t !== e && T(e) !== T(t) && u('HTML tags must be properly nested and closed: ' + e);
    }
    var O = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      q = s.htmlPrefilter;
    (s.UNSAFE_restoreLegacyHtmlPrefilter = function () {
      s.htmlPrefilter = function (e) {
        return P(e), e.replace(O, '<$1></$2>');
      };
    }),
      (s.htmlPrefilter = function (e) {
        return P(e), q(e);
      });
    var D,
      _ = s.fn.offset;
    (s.fn.offset = function () {
      var e = this[0];
      return !e || (e.nodeType && e.getBoundingClientRect) ? _.apply(this, arguments) : (u('jQuery.fn.offset() requires a valid DOM element'), arguments.length ? this : void 0);
    }),
      s.ajax &&
        ((D = s.param),
        (s.param = function (e, t) {
          var r = s.ajaxSettings && s.ajaxSettings.traditional;
          return void 0 === t && r && (u('jQuery.param() no longer uses jQuery.ajaxSettings.traditional'), (t = r)), D.call(this, e, t);
        }));
    var E,
      F,
      J = s.fn.andSelf || s.fn.addBack;
    return (
      (s.fn.andSelf = function () {
        return u('jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()'), J.apply(this, arguments);
      }),
      s.Deferred &&
        ((E = s.Deferred),
        (F = [
          ['resolve', 'done', s.Callbacks('once memory'), s.Callbacks('once memory'), 'resolved'],
          ['reject', 'fail', s.Callbacks('once memory'), s.Callbacks('once memory'), 'rejected'],
          ['notify', 'progress', s.Callbacks('memory'), s.Callbacks('memory')]
        ]),
        (s.Deferred = function (e) {
          var i = E(),
            a = i.promise();
          return (
            (i.pipe = a.pipe =
              function () {
                var o = arguments;
                return (
                  u('deferred.pipe() is deprecated'),
                  s
                    .Deferred(function (n) {
                      s.each(F, function (e, t) {
                        var r = 'function' == typeof o[e] && o[e];
                        i[t[1]](function () {
                          var e = r && r.apply(this, arguments);
                          e && 'function' == typeof e.promise ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[t[0] + 'With'](this === a ? n.promise() : this, r ? [e] : arguments);
                        });
                      }),
                        (o = null);
                    })
                    .promise()
                );
              }),
            e && e.call(i, i),
            i
          );
        }),
        (s.Deferred.exceptionHook = E.exceptionHook)),
      s
    );
  });

/*! jQuery UI - v1.10.4 - 2016-10-11
 * http://jqueryui.com
 * Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.sortable.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.menu.js, jquery.ui.progressbar.js, jquery.ui.slider.js, jquery.ui.spinner.js, jquery.ui.tabs.js, jquery.ui.tooltip.js, jquery.ui.effect.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js
 * Copyright jQuery Foundation and other contributors; Licensed MIT */
(function (t, e) {
  function i(e, i) {
    var n,
      a,
      o,
      r = e.nodeName.toLowerCase();
    return 'area' === r
      ? ((n = e.parentNode), (a = n.name), e.href && a && 'map' === n.nodeName.toLowerCase() ? ((o = t('img[usemap=#' + a + ']')[0]), !!o && s(o)) : !1)
      : (/input|select|textarea|button|object/.test(r) ? !e.disabled : 'a' === r ? e.href || i : i) && s(e);
  }
  function s(e) {
    return (
      t.expr.filters.visible(e) &&
      !t(e)
        .parents()
        .addBack()
        .filter(function () {
          return 'hidden' === t.css(this, 'visibility');
        }).length
    );
  }
  var n = 0,
    a = /^ui-id-\d+$/;
  (t.ui = t.ui || {}),
    t.extend(t.ui, {
      version: '1.10.4',
      keyCode: {
        BACKSPACE: 8,
        COMMA: 188,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        LEFT: 37,
        NUMPAD_ADD: 107,
        NUMPAD_DECIMAL: 110,
        NUMPAD_DIVIDE: 111,
        NUMPAD_ENTER: 108,
        NUMPAD_MULTIPLY: 106,
        NUMPAD_SUBTRACT: 109,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38
      }
    }),
    t.fn.extend({
      focus: (function (e) {
        return function (i, s) {
          return 'number' == typeof i
            ? this.each(function () {
                var e = this;
                setTimeout(function () {
                  t(e).focus(), s && s.call(e);
                }, i);
              })
            : e.apply(this, arguments);
        };
      })(t.fn.focus),
      scrollParent: function () {
        var e;
        return (
          (e =
            (t.ui.ie && /(static|relative)/.test(this.css('position'))) || /absolute/.test(this.css('position'))
              ? this.parents()
                  .filter(function () {
                    return /(relative|absolute|fixed)/.test(t.css(this, 'position')) && /(auto|scroll)/.test(t.css(this, 'overflow') + t.css(this, 'overflow-y') + t.css(this, 'overflow-x'));
                  })
                  .eq(0)
              : this.parents()
                  .filter(function () {
                    return /(auto|scroll)/.test(t.css(this, 'overflow') + t.css(this, 'overflow-y') + t.css(this, 'overflow-x'));
                  })
                  .eq(0)),
          /fixed/.test(this.css('position')) || !e.length ? t(document) : e
        );
      },
      zIndex: function (i) {
        if (i !== e) return this.css('zIndex', i);
        if (this.length)
          for (var s, n, a = t(this[0]); a.length && a[0] !== document; ) {
            if (((s = a.css('position')), ('absolute' === s || 'relative' === s || 'fixed' === s) && ((n = parseInt(a.css('zIndex'), 10)), !isNaN(n) && 0 !== n))) return n;
            a = a.parent();
          }
        return 0;
      },
      uniqueId: function () {
        return this.each(function () {
          this.id || (this.id = 'ui-id-' + ++n);
        });
      },
      removeUniqueId: function () {
        return this.each(function () {
          a.test(this.id) && t(this).removeAttr('id');
        });
      }
    }),
    t.extend(t.expr[':'], {
      data: t.expr.createPseudo
        ? t.expr.createPseudo(function (e) {
            return function (i) {
              return !!t.data(i, e);
            };
          })
        : function (e, i, s) {
            return !!t.data(e, s[3]);
          },
      focusable: function (e) {
        return i(e, !isNaN(t.attr(e, 'tabindex')));
      },
      tabbable: function (e) {
        var s = t.attr(e, 'tabindex'),
          n = isNaN(s);
        return (n || s >= 0) && i(e, !n);
      }
    }),
    t('<a>').outerWidth(1).jquery ||
      t.each(['Width', 'Height'], function (i, s) {
        function n(e, i, s, n) {
          return (
            t.each(a, function () {
              (i -= parseFloat(t.css(e, 'padding' + this)) || 0), s && (i -= parseFloat(t.css(e, 'border' + this + 'Width')) || 0), n && (i -= parseFloat(t.css(e, 'margin' + this)) || 0);
            }),
            i
          );
        }
        var a = 'Width' === s ? ['Left', 'Right'] : ['Top', 'Bottom'],
          o = s.toLowerCase(),
          r = { innerWidth: t.fn.innerWidth, innerHeight: t.fn.innerHeight, outerWidth: t.fn.outerWidth, outerHeight: t.fn.outerHeight };
        (t.fn['inner' + s] = function (i) {
          return i === e
            ? r['inner' + s].call(this)
            : this.each(function () {
                t(this).css(o, n(this, i) + 'px');
              });
        }),
          (t.fn['outer' + s] = function (e, i) {
            return 'number' != typeof e
              ? r['outer' + s].call(this, e)
              : this.each(function () {
                  t(this).css(o, n(this, e, !0, i) + 'px');
                });
          });
      }),
    t.fn.addBack ||
      (t.fn.addBack = function (t) {
        return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
      }),
    t('<a>').data('a-b', 'a').removeData('a-b').data('a-b') &&
      (t.fn.removeData = (function (e) {
        return function (i) {
          return arguments.length ? e.call(this, t.camelCase(i)) : e.call(this);
        };
      })(t.fn.removeData)),
    (t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())),
    (t.support.selectstart = 'onselectstart' in document.createElement('div')),
    t.fn.extend({
      disableSelection: function () {
        return this.bind((t.support.selectstart ? 'selectstart' : 'mousedown') + '.ui-disableSelection', function (t) {
          t.preventDefault();
        });
      },
      enableSelection: function () {
        return this.unbind('.ui-disableSelection');
      }
    }),
    t.extend(t.ui, {
      plugin: {
        add: function (e, i, s) {
          var n,
            a = t.ui[e].prototype;
          for (n in s) (a.plugins[n] = a.plugins[n] || []), a.plugins[n].push([i, s[n]]);
        },
        call: function (t, e, i) {
          var s,
            n = t.plugins[e];
          if (n && t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType) for (s = 0; n.length > s; s++) t.options[n[s][0]] && n[s][1].apply(t.element, i);
        }
      },
      hasScroll: function (e, i) {
        if ('hidden' === t(e).css('overflow')) return !1;
        var s = i && 'left' === i ? 'scrollLeft' : 'scrollTop',
          n = !1;
        return e[s] > 0 ? !0 : ((e[s] = 1), (n = e[s] > 0), (e[s] = 0), n);
      }
    });
})(jQuery);
(function (e, t) {
  var i = 0,
    s = Array.prototype.slice,
    n = e.cleanData;
  (e.cleanData = function (t) {
    for (var i, s = 0; null != (i = t[s]); s++)
      try {
        e(i).triggerHandler('remove');
      } catch (a) {}
    n(t);
  }),
    (e.widget = function (i, s, n) {
      var a,
        o,
        r,
        h,
        l = {},
        u = i.split('.')[0];
      (i = i.split('.')[1]),
        (a = u + '-' + i),
        n || ((n = s), (s = e.Widget)),
        (e.expr[':'][a.toLowerCase()] = function (t) {
          return !!e.data(t, a);
        }),
        (e[u] = e[u] || {}),
        (o = e[u][i]),
        (r = e[u][i] =
          function (e, i) {
            return this._createWidget ? (arguments.length && this._createWidget(e, i), t) : new r(e, i);
          }),
        e.extend(r, o, { version: n.version, _proto: e.extend({}, n), _childConstructors: [] }),
        (h = new s()),
        (h.options = e.widget.extend({}, h.options)),
        e.each(n, function (i, n) {
          return e.isFunction(n)
            ? ((l[i] = (function () {
                var e = function () {
                    return s.prototype[i].apply(this, arguments);
                  },
                  t = function (e) {
                    return s.prototype[i].apply(this, e);
                  };
                return function () {
                  var i,
                    s = this._super,
                    a = this._superApply;
                  return (this._super = e), (this._superApply = t), (i = n.apply(this, arguments)), (this._super = s), (this._superApply = a), i;
                };
              })()),
              t)
            : ((l[i] = n), t);
        }),
        (r.prototype = e.widget.extend(h, { widgetEventPrefix: o ? h.widgetEventPrefix || i : i }, l, { constructor: r, namespace: u, widgetName: i, widgetFullName: a })),
        o
          ? (e.each(o._childConstructors, function (t, i) {
              var s = i.prototype;
              e.widget(s.namespace + '.' + s.widgetName, r, i._proto);
            }),
            delete o._childConstructors)
          : s._childConstructors.push(r),
        e.widget.bridge(i, r);
    }),
    (e.widget.extend = function (i) {
      for (var n, a, o = s.call(arguments, 1), r = 0, h = o.length; h > r; r++)
        for (n in o[r]) (a = o[r][n]), o[r].hasOwnProperty(n) && a !== t && (i[n] = e.isPlainObject(a) ? (e.isPlainObject(i[n]) ? e.widget.extend({}, i[n], a) : e.widget.extend({}, a)) : a);
      return i;
    }),
    (e.widget.bridge = function (i, n) {
      var a = n.prototype.widgetFullName || i;
      e.fn[i] = function (o) {
        var r = 'string' == typeof o,
          h = s.call(arguments, 1),
          l = this;
        return (
          (o = !r && h.length ? e.widget.extend.apply(null, [o].concat(h)) : o),
          r
            ? this.each(function () {
                var s,
                  n = e.data(this, a);
                return n
                  ? e.isFunction(n[o]) && '_' !== o.charAt(0)
                    ? ((s = n[o].apply(n, h)), s !== n && s !== t ? ((l = s && s.jquery ? l.pushStack(s.get()) : s), !1) : t)
                    : e.error("no such method '" + o + "' for " + i + ' widget instance')
                  : e.error('cannot call methods on ' + i + ' prior to initialization; ' + "attempted to call method '" + o + "'");
              })
            : this.each(function () {
                var t = e.data(this, a);
                t ? t.option(o || {})._init() : e.data(this, a, new n(o, this));
              }),
          l
        );
      };
    }),
    (e.Widget = function () {}),
    (e.Widget._childConstructors = []),
    (e.Widget.prototype = {
      widgetName: 'widget',
      widgetEventPrefix: '',
      defaultElement: '<div>',
      options: { disabled: !1, create: null },
      _createWidget: function (t, s) {
        (s = e(s || this.defaultElement || this)[0]),
          (this.element = e(s)),
          (this.uuid = i++),
          (this.eventNamespace = '.' + this.widgetName + this.uuid),
          (this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t)),
          (this.bindings = e()),
          (this.hoverable = e()),
          (this.focusable = e()),
          s !== this &&
            (e.data(s, this.widgetFullName, this),
            this._on(!0, this.element, {
              remove: function (e) {
                e.target === s && this.destroy();
              }
            }),
            (this.document = e(s.style ? s.ownerDocument : s.document || s)),
            (this.window = e(this.document[0].defaultView || this.document[0].parentWindow))),
          this._create(),
          this._trigger('create', null, this._getCreateEventData()),
          this._init();
      },
      _getCreateOptions: e.noop,
      _getCreateEventData: e.noop,
      _create: e.noop,
      _init: e.noop,
      destroy: function () {
        this._destroy(),
          this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),
          this.widget()
            .unbind(this.eventNamespace)
            .removeAttr('aria-disabled')
            .removeClass(this.widgetFullName + '-disabled ' + 'ui-state-disabled'),
          this.bindings.unbind(this.eventNamespace),
          this.hoverable.removeClass('ui-state-hover'),
          this.focusable.removeClass('ui-state-focus');
      },
      _destroy: e.noop,
      widget: function () {
        return this.element;
      },
      option: function (i, s) {
        var n,
          a,
          o,
          r = i;
        if (0 === arguments.length) return e.widget.extend({}, this.options);
        if ('string' == typeof i)
          if (((r = {}), (n = i.split('.')), (i = n.shift()), n.length)) {
            for (a = r[i] = e.widget.extend({}, this.options[i]), o = 0; n.length - 1 > o; o++) (a[n[o]] = a[n[o]] || {}), (a = a[n[o]]);
            if (((i = n.pop()), 1 === arguments.length)) return a[i] === t ? null : a[i];
            a[i] = s;
          } else {
            if (1 === arguments.length) return this.options[i] === t ? null : this.options[i];
            r[i] = s;
          }
        return this._setOptions(r), this;
      },
      _setOptions: function (e) {
        var t;
        for (t in e) this._setOption(t, e[t]);
        return this;
      },
      _setOption: function (e, t) {
        return (
          (this.options[e] = t),
          'disabled' === e &&
            (this.widget()
              .toggleClass(this.widgetFullName + '-disabled ui-state-disabled', !!t)
              .attr('aria-disabled', t),
            this.hoverable.removeClass('ui-state-hover'),
            this.focusable.removeClass('ui-state-focus')),
          this
        );
      },
      enable: function () {
        return this._setOption('disabled', !1);
      },
      disable: function () {
        return this._setOption('disabled', !0);
      },
      _on: function (i, s, n) {
        var a,
          o = this;
        'boolean' != typeof i && ((n = s), (s = i), (i = !1)),
          n ? ((s = a = e(s)), (this.bindings = this.bindings.add(s))) : ((n = s), (s = this.element), (a = this.widget())),
          e.each(n, function (n, r) {
            function h() {
              return i || (o.options.disabled !== !0 && !e(this).hasClass('ui-state-disabled')) ? ('string' == typeof r ? o[r] : r).apply(o, arguments) : t;
            }
            'string' != typeof r && (h.guid = r.guid = r.guid || h.guid || e.guid++);
            var l = n.match(/^(\w+)\s*(.*)$/),
              u = l[1] + o.eventNamespace,
              c = l[2];
            c ? a.delegate(c, u, h) : s.bind(u, h);
          });
      },
      _off: function (e, t) {
        (t = (t || '').split(' ').join(this.eventNamespace + ' ') + this.eventNamespace), e.unbind(t).undelegate(t);
      },
      _delay: function (e, t) {
        function i() {
          return ('string' == typeof e ? s[e] : e).apply(s, arguments);
        }
        var s = this;
        return setTimeout(i, t || 0);
      },
      _hoverable: function (t) {
        (this.hoverable = this.hoverable.add(t)),
          this._on(t, {
            mouseenter: function (t) {
              e(t.currentTarget).addClass('ui-state-hover');
            },
            mouseleave: function (t) {
              e(t.currentTarget).removeClass('ui-state-hover');
            }
          });
      },
      _focusable: function (t) {
        (this.focusable = this.focusable.add(t)),
          this._on(t, {
            focusin: function (t) {
              e(t.currentTarget).addClass('ui-state-focus');
            },
            focusout: function (t) {
              e(t.currentTarget).removeClass('ui-state-focus');
            }
          });
      },
      _trigger: function (t, i, s) {
        var n,
          a,
          o = this.options[t];
        if (((s = s || {}), (i = e.Event(i)), (i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase()), (i.target = this.element[0]), (a = i.originalEvent)))
          for (n in a) n in i || (i[n] = a[n]);
        return this.element.trigger(i, s), !((e.isFunction(o) && o.apply(this.element[0], [i].concat(s)) === !1) || i.isDefaultPrevented());
      }
    }),
    e.each({ show: 'fadeIn', hide: 'fadeOut' }, function (t, i) {
      e.Widget.prototype['_' + t] = function (s, n, a) {
        'string' == typeof n && (n = { effect: n });
        var o,
          r = n ? (n === !0 || 'number' == typeof n ? i : n.effect || i) : t;
        (n = n || {}),
          'number' == typeof n && (n = { duration: n }),
          (o = !e.isEmptyObject(n)),
          (n.complete = a),
          n.delay && s.delay(n.delay),
          o && e.effects && e.effects.effect[r]
            ? s[t](n)
            : r !== t && s[r]
            ? s[r](n.duration, n.easing, a)
            : s.queue(function (i) {
                e(this)[t](), a && a.call(s[0]), i();
              });
      };
    });
})(jQuery);
(function (e) {
  var t = !1;
  e(document).mouseup(function () {
    t = !1;
  }),
    e.widget('ui.mouse', {
      version: '1.10.4',
      options: { cancel: 'input,textarea,button,select,option', distance: 1, delay: 0 },
      _mouseInit: function () {
        var t = this;
        this.element
          .bind('mousedown.' + this.widgetName, function (e) {
            return t._mouseDown(e);
          })
          .bind('click.' + this.widgetName, function (i) {
            return !0 === e.data(i.target, t.widgetName + '.preventClickEvent') ? (e.removeData(i.target, t.widgetName + '.preventClickEvent'), i.stopImmediatePropagation(), !1) : undefined;
          }),
          (this.started = !1);
      },
      _mouseDestroy: function () {
        this.element.unbind('.' + this.widgetName),
          this._mouseMoveDelegate &&
            e(document)
              .unbind('mousemove.' + this.widgetName, this._mouseMoveDelegate)
              .unbind('mouseup.' + this.widgetName, this._mouseUpDelegate);
      },
      _mouseDown: function (i) {
        if (!t) {
          this._mouseStarted && this._mouseUp(i), (this._mouseDownEvent = i);
          var s = this,
            n = 1 === i.which,
            a = 'string' == typeof this.options.cancel && i.target.nodeName ? e(i.target).closest(this.options.cancel).length : !1;
          return n && !a && this._mouseCapture(i)
            ? ((this.mouseDelayMet = !this.options.delay),
              this.mouseDelayMet ||
                (this._mouseDelayTimer = setTimeout(function () {
                  s.mouseDelayMet = !0;
                }, this.options.delay)),
              this._mouseDistanceMet(i) && this._mouseDelayMet(i) && ((this._mouseStarted = this._mouseStart(i) !== !1), !this._mouseStarted)
                ? (i.preventDefault(), !0)
                : (!0 === e.data(i.target, this.widgetName + '.preventClickEvent') && e.removeData(i.target, this.widgetName + '.preventClickEvent'),
                  (this._mouseMoveDelegate = function (e) {
                    return s._mouseMove(e);
                  }),
                  (this._mouseUpDelegate = function (e) {
                    return s._mouseUp(e);
                  }),
                  e(document)
                    .bind('mousemove.' + this.widgetName, this._mouseMoveDelegate)
                    .bind('mouseup.' + this.widgetName, this._mouseUpDelegate),
                  i.preventDefault(),
                  (t = !0),
                  !0))
            : !0;
        }
      },
      _mouseMove: function (t) {
        return e.ui.ie && (!document.documentMode || 9 > document.documentMode) && !t.button
          ? this._mouseUp(t)
          : this._mouseStarted
          ? (this._mouseDrag(t), t.preventDefault())
          : (this._mouseDistanceMet(t) &&
              this._mouseDelayMet(t) &&
              ((this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1), this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)),
            !this._mouseStarted);
      },
      _mouseUp: function (t) {
        return (
          e(document)
            .unbind('mousemove.' + this.widgetName, this._mouseMoveDelegate)
            .unbind('mouseup.' + this.widgetName, this._mouseUpDelegate),
          this._mouseStarted && ((this._mouseStarted = !1), t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + '.preventClickEvent', !0), this._mouseStop(t)),
          !1
        );
      },
      _mouseDistanceMet: function (e) {
        return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance;
      },
      _mouseDelayMet: function () {
        return this.mouseDelayMet;
      },
      _mouseStart: function () {},
      _mouseDrag: function () {},
      _mouseStop: function () {},
      _mouseCapture: function () {
        return !0;
      }
    });
})(jQuery);
(function (e, t) {
  function i(e, t, i) {
    return [parseFloat(e[0]) * (p.test(e[0]) ? t / 100 : 1), parseFloat(e[1]) * (p.test(e[1]) ? i / 100 : 1)];
  }
  function s(t, i) {
    return parseInt(e.css(t, i), 10) || 0;
  }
  function n(t) {
    var i = t[0];
    return 9 === i.nodeType
      ? { width: t.width(), height: t.height(), offset: { top: 0, left: 0 } }
      : e.isWindow(i)
      ? { width: t.width(), height: t.height(), offset: { top: t.scrollTop(), left: t.scrollLeft() } }
      : i.preventDefault
      ? { width: 0, height: 0, offset: { top: i.pageY, left: i.pageX } }
      : { width: t.outerWidth(), height: t.outerHeight(), offset: t.offset() };
  }
  e.ui = e.ui || {};
  var a,
    o = Math.max,
    r = Math.abs,
    l = Math.round,
    h = /left|center|right/,
    u = /top|center|bottom/,
    c = /[\+\-]\d+(\.[\d]+)?%?/,
    d = /^\w+/,
    p = /%$/,
    f = e.fn.position;
  (e.position = {
    scrollbarWidth: function () {
      if (a !== t) return a;
      var i,
        s,
        n = e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
        o = n.children()[0];
      return e('body').append(n), (i = o.offsetWidth), n.css('overflow', 'scroll'), (s = o.offsetWidth), i === s && (s = n[0].clientWidth), n.remove(), (a = i - s);
    },
    getScrollInfo: function (t) {
      var i = t.isWindow || t.isDocument ? '' : t.element.css('overflow-x'),
        s = t.isWindow || t.isDocument ? '' : t.element.css('overflow-y'),
        n = 'scroll' === i || ('auto' === i && t.width < t.element[0].scrollWidth),
        a = 'scroll' === s || ('auto' === s && t.height < t.element[0].scrollHeight);
      return { width: a ? e.position.scrollbarWidth() : 0, height: n ? e.position.scrollbarWidth() : 0 };
    },
    getWithinInfo: function (t) {
      var i = e(t || window),
        s = e.isWindow(i[0]),
        n = !!i[0] && 9 === i[0].nodeType;
      return {
        element: i,
        isWindow: s,
        isDocument: n,
        offset: i.offset() || { left: 0, top: 0 },
        scrollLeft: i.scrollLeft(),
        scrollTop: i.scrollTop(),
        width: s ? i.width() : i.outerWidth(),
        height: s ? i.height() : i.outerHeight()
      };
    }
  }),
    (e.fn.position = function (t) {
      if (!t || !t.of) return f.apply(this, arguments);
      t = e.extend({}, t);
      var a,
        p,
        m,
        g,
        v,
        _,
        b = e(t.of),
        y = e.position.getWithinInfo(t.within),
        x = e.position.getScrollInfo(y),
        k = (t.collision || 'flip').split(' '),
        w = {};
      return (
        (_ = n(b)),
        b[0].preventDefault && (t.at = 'left top'),
        (p = _.width),
        (m = _.height),
        (g = _.offset),
        (v = e.extend({}, g)),
        e.each(['my', 'at'], function () {
          var e,
            i,
            s = (t[this] || '').split(' ');
          1 === s.length && (s = h.test(s[0]) ? s.concat(['center']) : u.test(s[0]) ? ['center'].concat(s) : ['center', 'center']),
            (s[0] = h.test(s[0]) ? s[0] : 'center'),
            (s[1] = u.test(s[1]) ? s[1] : 'center'),
            (e = c.exec(s[0])),
            (i = c.exec(s[1])),
            (w[this] = [e ? e[0] : 0, i ? i[0] : 0]),
            (t[this] = [d.exec(s[0])[0], d.exec(s[1])[0]]);
        }),
        1 === k.length && (k[1] = k[0]),
        'right' === t.at[0] ? (v.left += p) : 'center' === t.at[0] && (v.left += p / 2),
        'bottom' === t.at[1] ? (v.top += m) : 'center' === t.at[1] && (v.top += m / 2),
        (a = i(w.at, p, m)),
        (v.left += a[0]),
        (v.top += a[1]),
        this.each(function () {
          var n,
            h,
            u = e(this),
            c = u.outerWidth(),
            d = u.outerHeight(),
            f = s(this, 'marginLeft'),
            _ = s(this, 'marginTop'),
            T = c + f + s(this, 'marginRight') + x.width,
            D = d + _ + s(this, 'marginBottom') + x.height,
            S = e.extend({}, v),
            M = i(w.my, u.outerWidth(), u.outerHeight());
          'right' === t.my[0] ? (S.left -= c) : 'center' === t.my[0] && (S.left -= c / 2),
            'bottom' === t.my[1] ? (S.top -= d) : 'center' === t.my[1] && (S.top -= d / 2),
            (S.left += M[0]),
            (S.top += M[1]),
            e.support.offsetFractions || ((S.left = l(S.left)), (S.top = l(S.top))),
            (n = { marginLeft: f, marginTop: _ }),
            e.each(['left', 'top'], function (i, s) {
              e.ui.position[k[i]] &&
                e.ui.position[k[i]][s](S, {
                  targetWidth: p,
                  targetHeight: m,
                  elemWidth: c,
                  elemHeight: d,
                  collisionPosition: n,
                  collisionWidth: T,
                  collisionHeight: D,
                  offset: [a[0] + M[0], a[1] + M[1]],
                  my: t.my,
                  at: t.at,
                  within: y,
                  elem: u
                });
            }),
            t.using &&
              (h = function (e) {
                var i = g.left - S.left,
                  s = i + p - c,
                  n = g.top - S.top,
                  a = n + m - d,
                  l = {
                    target: { element: b, left: g.left, top: g.top, width: p, height: m },
                    element: { element: u, left: S.left, top: S.top, width: c, height: d },
                    horizontal: 0 > s ? 'left' : i > 0 ? 'right' : 'center',
                    vertical: 0 > a ? 'top' : n > 0 ? 'bottom' : 'middle'
                  };
                c > p && p > r(i + s) && (l.horizontal = 'center'),
                  d > m && m > r(n + a) && (l.vertical = 'middle'),
                  (l.important = o(r(i), r(s)) > o(r(n), r(a)) ? 'horizontal' : 'vertical'),
                  t.using.call(this, e, l);
              }),
            u.offset(e.extend(S, { using: h }));
        })
      );
    }),
    (e.ui.position = {
      fit: {
        left: function (e, t) {
          var i,
            s = t.within,
            n = s.isWindow ? s.scrollLeft : s.offset.left,
            a = s.width,
            r = e.left - t.collisionPosition.marginLeft,
            l = n - r,
            h = r + t.collisionWidth - a - n;
          t.collisionWidth > a
            ? l > 0 && 0 >= h
              ? ((i = e.left + l + t.collisionWidth - a - n), (e.left += l - i))
              : (e.left = h > 0 && 0 >= l ? n : l > h ? n + a - t.collisionWidth : n)
            : l > 0
            ? (e.left += l)
            : h > 0
            ? (e.left -= h)
            : (e.left = o(e.left - r, e.left));
        },
        top: function (e, t) {
          var i,
            s = t.within,
            n = s.isWindow ? s.scrollTop : s.offset.top,
            a = t.within.height,
            r = e.top - t.collisionPosition.marginTop,
            l = n - r,
            h = r + t.collisionHeight - a - n;
          t.collisionHeight > a
            ? l > 0 && 0 >= h
              ? ((i = e.top + l + t.collisionHeight - a - n), (e.top += l - i))
              : (e.top = h > 0 && 0 >= l ? n : l > h ? n + a - t.collisionHeight : n)
            : l > 0
            ? (e.top += l)
            : h > 0
            ? (e.top -= h)
            : (e.top = o(e.top - r, e.top));
        }
      },
      flip: {
        left: function (e, t) {
          var i,
            s,
            n = t.within,
            a = n.offset.left + n.scrollLeft,
            o = n.width,
            l = n.isWindow ? n.scrollLeft : n.offset.left,
            h = e.left - t.collisionPosition.marginLeft,
            u = h - l,
            c = h + t.collisionWidth - o - l,
            d = 'left' === t.my[0] ? -t.elemWidth : 'right' === t.my[0] ? t.elemWidth : 0,
            p = 'left' === t.at[0] ? t.targetWidth : 'right' === t.at[0] ? -t.targetWidth : 0,
            f = -2 * t.offset[0];
          0 > u
            ? ((i = e.left + d + p + f + t.collisionWidth - o - a), (0 > i || r(u) > i) && (e.left += d + p + f))
            : c > 0 && ((s = e.left - t.collisionPosition.marginLeft + d + p + f - l), (s > 0 || c > r(s)) && (e.left += d + p + f));
        },
        top: function (e, t) {
          var i,
            s,
            n = t.within,
            a = n.offset.top + n.scrollTop,
            o = n.height,
            l = n.isWindow ? n.scrollTop : n.offset.top,
            h = e.top - t.collisionPosition.marginTop,
            u = h - l,
            c = h + t.collisionHeight - o - l,
            d = 'top' === t.my[1],
            p = d ? -t.elemHeight : 'bottom' === t.my[1] ? t.elemHeight : 0,
            f = 'top' === t.at[1] ? t.targetHeight : 'bottom' === t.at[1] ? -t.targetHeight : 0,
            m = -2 * t.offset[1];
          0 > u
            ? ((s = e.top + p + f + m + t.collisionHeight - o - a), e.top + p + f + m > u && (0 > s || r(u) > s) && (e.top += p + f + m))
            : c > 0 && ((i = e.top - t.collisionPosition.marginTop + p + f + m - l), e.top + p + f + m > c && (i > 0 || c > r(i)) && (e.top += p + f + m));
        }
      },
      flipfit: {
        left: function () {
          e.ui.position.flip.left.apply(this, arguments), e.ui.position.fit.left.apply(this, arguments);
        },
        top: function () {
          e.ui.position.flip.top.apply(this, arguments), e.ui.position.fit.top.apply(this, arguments);
        }
      }
    }),
    (function () {
      var t,
        i,
        s,
        n,
        a,
        o = document.getElementsByTagName('body')[0],
        r = document.createElement('div');
      (t = document.createElement(o ? 'div' : 'body')),
        (s = { visibility: 'hidden', width: 0, height: 0, border: 0, margin: 0, background: 'none' }),
        o && e.extend(s, { position: 'absolute', left: '-1000px', top: '-1000px' });
      for (a in s) t.style[a] = s[a];
      t.appendChild(r),
        (i = o || document.documentElement),
        i.insertBefore(t, i.firstChild),
        (r.style.cssText = 'position: absolute; left: 10.7432222px;'),
        (n = e(r).offset().left),
        (e.support.offsetFractions = n > 10 && 11 > n),
        (t.innerHTML = ''),
        i.removeChild(t);
    })();
})(jQuery);
(function (e) {
  e.widget('ui.draggable', e.ui.mouse, {
    version: '1.10.4',
    widgetEventPrefix: 'drag',
    options: {
      addClasses: !0,
      appendTo: 'parent',
      axis: !1,
      connectToSortable: !1,
      containment: !1,
      cursor: 'auto',
      cursorAt: !1,
      grid: !1,
      handle: !1,
      helper: 'original',
      iframeFix: !1,
      opacity: !1,
      refreshPositions: !1,
      revert: !1,
      revertDuration: 500,
      scope: 'default',
      scroll: !0,
      scrollSensitivity: 20,
      scrollSpeed: 20,
      snap: !1,
      snapMode: 'both',
      snapTolerance: 20,
      stack: !1,
      zIndex: !1,
      drag: null,
      start: null,
      stop: null
    },
    _create: function () {
      'original' !== this.options.helper || /^(?:r|a|f)/.test(this.element.css('position')) || (this.element[0].style.position = 'relative'),
        this.options.addClasses && this.element.addClass('ui-draggable'),
        this.options.disabled && this.element.addClass('ui-draggable-disabled'),
        this._mouseInit();
    },
    _destroy: function () {
      this.element.removeClass('ui-draggable ui-draggable-dragging ui-draggable-disabled'), this._mouseDestroy();
    },
    _mouseCapture: function (t) {
      var i = this.options;
      return this.helper || i.disabled || e(t.target).closest('.ui-resizable-handle').length > 0
        ? !1
        : ((this.handle = this._getHandle(t)),
          this.handle
            ? (e(i.iframeFix === !0 ? 'iframe' : i.iframeFix).each(function () {
                e("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>")
                  .css({ width: this.offsetWidth + 'px', height: this.offsetHeight + 'px', position: 'absolute', opacity: '0.001', zIndex: 1e3 })
                  .css(e(this).offset())
                  .appendTo('body');
              }),
              !0)
            : !1);
    },
    _mouseStart: function (t) {
      var i = this.options;
      return (
        (this.helper = this._createHelper(t)),
        this.helper.addClass('ui-draggable-dragging'),
        this._cacheHelperProportions(),
        e.ui.ddmanager && (e.ui.ddmanager.current = this),
        this._cacheMargins(),
        (this.cssPosition = this.helper.css('position')),
        (this.scrollParent = this.helper.scrollParent()),
        (this.offsetParent = this.helper.offsetParent()),
        (this.offsetParentCssPosition = this.offsetParent.css('position')),
        (this.offset = this.positionAbs = this.element.offset()),
        (this.offset = { top: this.offset.top - this.margins.top, left: this.offset.left - this.margins.left }),
        (this.offset.scroll = !1),
        e.extend(this.offset, { click: { left: t.pageX - this.offset.left, top: t.pageY - this.offset.top }, parent: this._getParentOffset(), relative: this._getRelativeOffset() }),
        (this.originalPosition = this.position = this._generatePosition(t)),
        (this.originalPageX = t.pageX),
        (this.originalPageY = t.pageY),
        i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt),
        this._setContainment(),
        this._trigger('start', t) === !1
          ? (this._clear(), !1)
          : (this._cacheHelperProportions(),
            e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t),
            this._mouseDrag(t, !0),
            e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t),
            !0)
      );
    },
    _mouseDrag: function (t, i) {
      if (
        ('fixed' === this.offsetParentCssPosition && (this.offset.parent = this._getParentOffset()),
        (this.position = this._generatePosition(t)),
        (this.positionAbs = this._convertPositionTo('absolute')),
        !i)
      ) {
        var s = this._uiHash();
        if (this._trigger('drag', t, s) === !1) return this._mouseUp({}), !1;
        this.position = s.position;
      }
      return (
        (this.options.axis && 'y' === this.options.axis) || (this.helper[0].style.left = this.position.left + 'px'),
        (this.options.axis && 'x' === this.options.axis) || (this.helper[0].style.top = this.position.top + 'px'),
        e.ui.ddmanager && e.ui.ddmanager.drag(this, t),
        !1
      );
    },
    _mouseStop: function (t) {
      var i = this,
        s = !1;
      return (
        e.ui.ddmanager && !this.options.dropBehaviour && (s = e.ui.ddmanager.drop(this, t)),
        this.dropped && ((s = this.dropped), (this.dropped = !1)),
        'original' !== this.options.helper || e.contains(this.element[0].ownerDocument, this.element[0])
          ? (('invalid' === this.options.revert && !s) ||
            ('valid' === this.options.revert && s) ||
            this.options.revert === !0 ||
            (e.isFunction(this.options.revert) && this.options.revert.call(this.element, s))
              ? e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
                  i._trigger('stop', t) !== !1 && i._clear();
                })
              : this._trigger('stop', t) !== !1 && this._clear(),
            !1)
          : !1
      );
    },
    _mouseUp: function (t) {
      return (
        e('div.ui-draggable-iframeFix').each(function () {
          this.parentNode.removeChild(this);
        }),
        e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t),
        e.ui.mouse.prototype._mouseUp.call(this, t)
      );
    },
    cancel: function () {
      return this.helper.is('.ui-draggable-dragging') ? this._mouseUp({}) : this._clear(), this;
    },
    _getHandle: function (t) {
      return this.options.handle ? !!e(t.target).closest(this.element.find(this.options.handle)).length : !0;
    },
    _createHelper: function (t) {
      var i = this.options,
        s = e.isFunction(i.helper) ? e(i.helper.apply(this.element[0], [t])) : 'clone' === i.helper ? this.element.clone().removeAttr('id') : this.element;
      return (
        s.parents('body').length || s.appendTo('parent' === i.appendTo ? this.element[0].parentNode : i.appendTo),
        s[0] === this.element[0] || /(fixed|absolute)/.test(s.css('position')) || s.css('position', 'absolute'),
        s
      );
    },
    _adjustOffsetFromHelper: function (t) {
      'string' == typeof t && (t = t.split(' ')),
        e.isArray(t) && (t = { left: +t[0], top: +t[1] || 0 }),
        'left' in t && (this.offset.click.left = t.left + this.margins.left),
        'right' in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left),
        'top' in t && (this.offset.click.top = t.top + this.margins.top),
        'bottom' in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top);
    },
    _getParentOffset: function () {
      var t = this.offsetParent.offset();
      return (
        'absolute' === this.cssPosition &&
          this.scrollParent[0] !== document &&
          e.contains(this.scrollParent[0], this.offsetParent[0]) &&
          ((t.left += this.scrollParent.scrollLeft()), (t.top += this.scrollParent.scrollTop())),
        (this.offsetParent[0] === document.body || (this.offsetParent[0].tagName && 'html' === this.offsetParent[0].tagName.toLowerCase() && e.ui.ie)) && (t = { top: 0, left: 0 }),
        { top: t.top + (parseInt(this.offsetParent.css('borderTopWidth'), 10) || 0), left: t.left + (parseInt(this.offsetParent.css('borderLeftWidth'), 10) || 0) }
      );
    },
    _getRelativeOffset: function () {
      if ('relative' === this.cssPosition) {
        var e = this.element.position();
        return {
          top: e.top - (parseInt(this.helper.css('top'), 10) || 0) + this.scrollParent.scrollTop(),
          left: e.left - (parseInt(this.helper.css('left'), 10) || 0) + this.scrollParent.scrollLeft()
        };
      }
      return { top: 0, left: 0 };
    },
    _cacheMargins: function () {
      this.margins = {
        left: parseInt(this.element.css('marginLeft'), 10) || 0,
        top: parseInt(this.element.css('marginTop'), 10) || 0,
        right: parseInt(this.element.css('marginRight'), 10) || 0,
        bottom: parseInt(this.element.css('marginBottom'), 10) || 0
      };
    },
    _cacheHelperProportions: function () {
      this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight() };
    },
    _setContainment: function () {
      var t,
        i,
        s,
        a = this.options;
      return a.containment
        ? 'window' === a.containment
          ? ((this.containment = [
              e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left,
              e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top,
              e(window).scrollLeft() + e(window).width() - this.helperProportions.width - this.margins.left,
              e(window).scrollTop() + (e(window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top
            ]),
            undefined)
          : 'document' === a.containment
          ? ((this.containment = [
              0,
              0,
              e(document).width() - this.helperProportions.width - this.margins.left,
              (e(document).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top
            ]),
            undefined)
          : a.containment.constructor === Array
          ? ((this.containment = a.containment), undefined)
          : ('parent' === a.containment && (a.containment = this.helper[0].parentNode),
            (i = e(a.containment)),
            (s = i[0]),
            s &&
              ((t = 'hidden' !== i.css('overflow')),
              (this.containment = [
                (parseInt(i.css('borderLeftWidth'), 10) || 0) + (parseInt(i.css('paddingLeft'), 10) || 0),
                (parseInt(i.css('borderTopWidth'), 10) || 0) + (parseInt(i.css('paddingTop'), 10) || 0),
                (t ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) -
                  (parseInt(i.css('borderRightWidth'), 10) || 0) -
                  (parseInt(i.css('paddingRight'), 10) || 0) -
                  this.helperProportions.width -
                  this.margins.left -
                  this.margins.right,
                (t ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) -
                  (parseInt(i.css('borderBottomWidth'), 10) || 0) -
                  (parseInt(i.css('paddingBottom'), 10) || 0) -
                  this.helperProportions.height -
                  this.margins.top -
                  this.margins.bottom
              ]),
              (this.relative_container = i)),
            undefined)
        : ((this.containment = null), undefined);
    },
    _convertPositionTo: function (t, i) {
      i || (i = this.position);
      var s = 'absolute' === t ? 1 : -1,
        a = 'absolute' !== this.cssPosition || (this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0])) ? this.scrollParent : this.offsetParent;
      return (
        this.offset.scroll || (this.offset.scroll = { top: a.scrollTop(), left: a.scrollLeft() }),
        {
          top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ('fixed' === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top) * s,
          left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ('fixed' === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left) * s
        }
      );
    },
    _generatePosition: function (t) {
      var i,
        s,
        a,
        n,
        o = this.options,
        r = 'absolute' !== this.cssPosition || (this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0])) ? this.scrollParent : this.offsetParent,
        l = t.pageX,
        h = t.pageY;
      return (
        this.offset.scroll || (this.offset.scroll = { top: r.scrollTop(), left: r.scrollLeft() }),
        this.originalPosition &&
          (this.containment &&
            (this.relative_container
              ? ((s = this.relative_container.offset()), (i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]))
              : (i = this.containment),
            t.pageX - this.offset.click.left < i[0] && (l = i[0] + this.offset.click.left),
            t.pageY - this.offset.click.top < i[1] && (h = i[1] + this.offset.click.top),
            t.pageX - this.offset.click.left > i[2] && (l = i[2] + this.offset.click.left),
            t.pageY - this.offset.click.top > i[3] && (h = i[3] + this.offset.click.top)),
          o.grid &&
            ((a = o.grid[1] ? this.originalPageY + Math.round((h - this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY),
            (h = i ? (a - this.offset.click.top >= i[1] || a - this.offset.click.top > i[3] ? a : a - this.offset.click.top >= i[1] ? a - o.grid[1] : a + o.grid[1]) : a),
            (n = o.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / o.grid[0]) * o.grid[0] : this.originalPageX),
            (l = i ? (n - this.offset.click.left >= i[0] || n - this.offset.click.left > i[2] ? n : n - this.offset.click.left >= i[0] ? n - o.grid[0] : n + o.grid[0]) : n))),
        {
          top: h - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ('fixed' === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top),
          left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ('fixed' === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left)
        }
      );
    },
    _clear: function () {
      this.helper.removeClass('ui-draggable-dragging'), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), (this.helper = null), (this.cancelHelperRemoval = !1);
    },
    _trigger: function (t, i, s) {
      return (s = s || this._uiHash()), e.ui.plugin.call(this, t, [i, s]), 'drag' === t && (this.positionAbs = this._convertPositionTo('absolute')), e.Widget.prototype._trigger.call(this, t, i, s);
    },
    plugins: {},
    _uiHash: function () {
      return { helper: this.helper, position: this.position, originalPosition: this.originalPosition, offset: this.positionAbs };
    }
  }),
    e.ui.plugin.add('draggable', 'connectToSortable', {
      start: function (t, i) {
        var s = e(this).data('ui-draggable'),
          a = s.options,
          n = e.extend({}, i, { item: s.element });
        (s.sortables = []),
          e(a.connectToSortable).each(function () {
            var i = e.data(this, 'ui-sortable');
            i && !i.options.disabled && (s.sortables.push({ instance: i, shouldRevert: i.options.revert }), i.refreshPositions(), i._trigger('activate', t, n));
          });
      },
      stop: function (t, i) {
        var s = e(this).data('ui-draggable'),
          a = e.extend({}, i, { item: s.element });
        e.each(s.sortables, function () {
          this.instance.isOver
            ? ((this.instance.isOver = 0),
              (s.cancelHelperRemoval = !0),
              (this.instance.cancelHelperRemoval = !1),
              this.shouldRevert && (this.instance.options.revert = this.shouldRevert),
              this.instance._mouseStop(t),
              (this.instance.options.helper = this.instance.options._helper),
              'original' === s.options.helper && this.instance.currentItem.css({ top: 'auto', left: 'auto' }))
            : ((this.instance.cancelHelperRemoval = !1), this.instance._trigger('deactivate', t, a));
        });
      },
      drag: function (t, i) {
        var s = e(this).data('ui-draggable'),
          a = this;
        e.each(s.sortables, function () {
          var n = !1,
            o = this;
          (this.instance.positionAbs = s.positionAbs),
            (this.instance.helperProportions = s.helperProportions),
            (this.instance.offset.click = s.offset.click),
            this.instance._intersectsWith(this.instance.containerCache) &&
              ((n = !0),
              e.each(s.sortables, function () {
                return (
                  (this.instance.positionAbs = s.positionAbs),
                  (this.instance.helperProportions = s.helperProportions),
                  (this.instance.offset.click = s.offset.click),
                  this !== o && this.instance._intersectsWith(this.instance.containerCache) && e.contains(o.instance.element[0], this.instance.element[0]) && (n = !1),
                  n
                );
              })),
            n
              ? (this.instance.isOver ||
                  ((this.instance.isOver = 1),
                  (this.instance.currentItem = e(a).clone().removeAttr('id').appendTo(this.instance.element).data('ui-sortable-item', !0)),
                  (this.instance.options._helper = this.instance.options.helper),
                  (this.instance.options.helper = function () {
                    return i.helper[0];
                  }),
                  (t.target = this.instance.currentItem[0]),
                  this.instance._mouseCapture(t, !0),
                  this.instance._mouseStart(t, !0, !0),
                  (this.instance.offset.click.top = s.offset.click.top),
                  (this.instance.offset.click.left = s.offset.click.left),
                  (this.instance.offset.parent.left -= s.offset.parent.left - this.instance.offset.parent.left),
                  (this.instance.offset.parent.top -= s.offset.parent.top - this.instance.offset.parent.top),
                  s._trigger('toSortable', t),
                  (s.dropped = this.instance.element),
                  (s.currentItem = s.element),
                  (this.instance.fromOutside = s)),
                this.instance.currentItem && this.instance._mouseDrag(t))
              : this.instance.isOver &&
                ((this.instance.isOver = 0),
                (this.instance.cancelHelperRemoval = !0),
                (this.instance.options.revert = !1),
                this.instance._trigger('out', t, this.instance._uiHash(this.instance)),
                this.instance._mouseStop(t, !0),
                (this.instance.options.helper = this.instance.options._helper),
                this.instance.currentItem.remove(),
                this.instance.placeholder && this.instance.placeholder.remove(),
                s._trigger('fromSortable', t),
                (s.dropped = !1));
        });
      }
    }),
    e.ui.plugin.add('draggable', 'cursor', {
      start: function () {
        var t = e('body'),
          i = e(this).data('ui-draggable').options;
        t.css('cursor') && (i._cursor = t.css('cursor')), t.css('cursor', i.cursor);
      },
      stop: function () {
        var t = e(this).data('ui-draggable').options;
        t._cursor && e('body').css('cursor', t._cursor);
      }
    }),
    e.ui.plugin.add('draggable', 'opacity', {
      start: function (t, i) {
        var s = e(i.helper),
          a = e(this).data('ui-draggable').options;
        s.css('opacity') && (a._opacity = s.css('opacity')), s.css('opacity', a.opacity);
      },
      stop: function (t, i) {
        var s = e(this).data('ui-draggable').options;
        s._opacity && e(i.helper).css('opacity', s._opacity);
      }
    }),
    e.ui.plugin.add('draggable', 'scroll', {
      start: function () {
        var t = e(this).data('ui-draggable');
        t.scrollParent[0] !== document && 'HTML' !== t.scrollParent[0].tagName && (t.overflowOffset = t.scrollParent.offset());
      },
      drag: function (t) {
        var i = e(this).data('ui-draggable'),
          s = i.options,
          a = !1;
        i.scrollParent[0] !== document && 'HTML' !== i.scrollParent[0].tagName
          ? ((s.axis && 'x' === s.axis) ||
              (i.overflowOffset.top + i.scrollParent[0].offsetHeight - t.pageY < s.scrollSensitivity
                ? (i.scrollParent[0].scrollTop = a = i.scrollParent[0].scrollTop + s.scrollSpeed)
                : t.pageY - i.overflowOffset.top < s.scrollSensitivity && (i.scrollParent[0].scrollTop = a = i.scrollParent[0].scrollTop - s.scrollSpeed)),
            (s.axis && 'y' === s.axis) ||
              (i.overflowOffset.left + i.scrollParent[0].offsetWidth - t.pageX < s.scrollSensitivity
                ? (i.scrollParent[0].scrollLeft = a = i.scrollParent[0].scrollLeft + s.scrollSpeed)
                : t.pageX - i.overflowOffset.left < s.scrollSensitivity && (i.scrollParent[0].scrollLeft = a = i.scrollParent[0].scrollLeft - s.scrollSpeed)))
          : ((s.axis && 'x' === s.axis) ||
              (t.pageY - e(document).scrollTop() < s.scrollSensitivity
                ? (a = e(document).scrollTop(e(document).scrollTop() - s.scrollSpeed))
                : e(window).height() - (t.pageY - e(document).scrollTop()) < s.scrollSensitivity && (a = e(document).scrollTop(e(document).scrollTop() + s.scrollSpeed))),
            (s.axis && 'y' === s.axis) ||
              (t.pageX - e(document).scrollLeft() < s.scrollSensitivity
                ? (a = e(document).scrollLeft(e(document).scrollLeft() - s.scrollSpeed))
                : e(window).width() - (t.pageX - e(document).scrollLeft()) < s.scrollSensitivity && (a = e(document).scrollLeft(e(document).scrollLeft() + s.scrollSpeed)))),
          a !== !1 && e.ui.ddmanager && !s.dropBehaviour && e.ui.ddmanager.prepareOffsets(i, t);
      }
    }),
    e.ui.plugin.add('draggable', 'snap', {
      start: function () {
        var t = e(this).data('ui-draggable'),
          i = t.options;
        (t.snapElements = []),
          e(i.snap.constructor !== String ? i.snap.items || ':data(ui-draggable)' : i.snap).each(function () {
            var i = e(this),
              s = i.offset();
            this !== t.element[0] && t.snapElements.push({ item: this, width: i.outerWidth(), height: i.outerHeight(), top: s.top, left: s.left });
          });
      },
      drag: function (t, i) {
        var s,
          a,
          n,
          o,
          r,
          l,
          h,
          u,
          c,
          d,
          p = e(this).data('ui-draggable'),
          f = p.options,
          m = f.snapTolerance,
          g = i.offset.left,
          v = g + p.helperProportions.width,
          _ = i.offset.top,
          b = _ + p.helperProportions.height;
        for (c = p.snapElements.length - 1; c >= 0; c--)
          (r = p.snapElements[c].left),
            (l = r + p.snapElements[c].width),
            (h = p.snapElements[c].top),
            (u = h + p.snapElements[c].height),
            r - m > v || g > l + m || h - m > b || _ > u + m || !e.contains(p.snapElements[c].item.ownerDocument, p.snapElements[c].item)
              ? (p.snapElements[c].snapping && p.options.snap.release && p.options.snap.release.call(p.element, t, e.extend(p._uiHash(), { snapItem: p.snapElements[c].item })),
                (p.snapElements[c].snapping = !1))
              : ('inner' !== f.snapMode &&
                  ((s = m >= Math.abs(h - b)),
                  (a = m >= Math.abs(u - _)),
                  (n = m >= Math.abs(r - v)),
                  (o = m >= Math.abs(l - g)),
                  s && (i.position.top = p._convertPositionTo('relative', { top: h - p.helperProportions.height, left: 0 }).top - p.margins.top),
                  a && (i.position.top = p._convertPositionTo('relative', { top: u, left: 0 }).top - p.margins.top),
                  n && (i.position.left = p._convertPositionTo('relative', { top: 0, left: r - p.helperProportions.width }).left - p.margins.left),
                  o && (i.position.left = p._convertPositionTo('relative', { top: 0, left: l }).left - p.margins.left)),
                (d = s || a || n || o),
                'outer' !== f.snapMode &&
                  ((s = m >= Math.abs(h - _)),
                  (a = m >= Math.abs(u - b)),
                  (n = m >= Math.abs(r - g)),
                  (o = m >= Math.abs(l - v)),
                  s && (i.position.top = p._convertPositionTo('relative', { top: h, left: 0 }).top - p.margins.top),
                  a && (i.position.top = p._convertPositionTo('relative', { top: u - p.helperProportions.height, left: 0 }).top - p.margins.top),
                  n && (i.position.left = p._convertPositionTo('relative', { top: 0, left: r }).left - p.margins.left),
                  o && (i.position.left = p._convertPositionTo('relative', { top: 0, left: l - p.helperProportions.width }).left - p.margins.left)),
                !p.snapElements[c].snapping && (s || a || n || o || d) && p.options.snap.snap && p.options.snap.snap.call(p.element, t, e.extend(p._uiHash(), { snapItem: p.snapElements[c].item })),
                (p.snapElements[c].snapping = s || a || n || o || d));
      }
    }),
    e.ui.plugin.add('draggable', 'stack', {
      start: function () {
        var t,
          i = this.data('ui-draggable').options,
          s = e.makeArray(e(i.stack)).sort(function (t, i) {
            return (parseInt(e(t).css('zIndex'), 10) || 0) - (parseInt(e(i).css('zIndex'), 10) || 0);
          });
        s.length &&
          ((t = parseInt(e(s[0]).css('zIndex'), 10) || 0),
          e(s).each(function (i) {
            e(this).css('zIndex', t + i);
          }),
          this.css('zIndex', t + s.length));
      }
    }),
    e.ui.plugin.add('draggable', 'zIndex', {
      start: function (t, i) {
        var s = e(i.helper),
          a = e(this).data('ui-draggable').options;
        s.css('zIndex') && (a._zIndex = s.css('zIndex')), s.css('zIndex', a.zIndex);
      },
      stop: function (t, i) {
        var s = e(this).data('ui-draggable').options;
        s._zIndex && e(i.helper).css('zIndex', s._zIndex);
      }
    });
})(jQuery);
(function (e) {
  function t(e, t, i) {
    return e > t && t + i > e;
  }
  e.widget('ui.droppable', {
    version: '1.10.4',
    widgetEventPrefix: 'drop',
    options: {
      accept: '*',
      activeClass: !1,
      addClasses: !0,
      greedy: !1,
      hoverClass: !1,
      scope: 'default',
      tolerance: 'intersect',
      activate: null,
      deactivate: null,
      drop: null,
      out: null,
      over: null
    },
    _create: function () {
      var t,
        i = this.options,
        s = i.accept;
      (this.isover = !1),
        (this.isout = !0),
        (this.accept = e.isFunction(s)
          ? s
          : function (e) {
              return e.is(s);
            }),
        (this.proportions = function () {
          return arguments.length ? ((t = arguments[0]), undefined) : t ? t : (t = { width: this.element[0].offsetWidth, height: this.element[0].offsetHeight });
        }),
        (e.ui.ddmanager.droppables[i.scope] = e.ui.ddmanager.droppables[i.scope] || []),
        e.ui.ddmanager.droppables[i.scope].push(this),
        i.addClasses && this.element.addClass('ui-droppable');
    },
    _destroy: function () {
      for (var t = 0, i = e.ui.ddmanager.droppables[this.options.scope]; i.length > t; t++) i[t] === this && i.splice(t, 1);
      this.element.removeClass('ui-droppable ui-droppable-disabled');
    },
    _setOption: function (t, i) {
      'accept' === t &&
        (this.accept = e.isFunction(i)
          ? i
          : function (e) {
              return e.is(i);
            }),
        e.Widget.prototype._setOption.apply(this, arguments);
    },
    _activate: function (t) {
      var i = e.ui.ddmanager.current;
      this.options.activeClass && this.element.addClass(this.options.activeClass), i && this._trigger('activate', t, this.ui(i));
    },
    _deactivate: function (t) {
      var i = e.ui.ddmanager.current;
      this.options.activeClass && this.element.removeClass(this.options.activeClass), i && this._trigger('deactivate', t, this.ui(i));
    },
    _over: function (t) {
      var i = e.ui.ddmanager.current;
      i &&
        (i.currentItem || i.element)[0] !== this.element[0] &&
        this.accept.call(this.element[0], i.currentItem || i.element) &&
        (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger('over', t, this.ui(i)));
    },
    _out: function (t) {
      var i = e.ui.ddmanager.current;
      i &&
        (i.currentItem || i.element)[0] !== this.element[0] &&
        this.accept.call(this.element[0], i.currentItem || i.element) &&
        (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger('out', t, this.ui(i)));
    },
    _drop: function (t, i) {
      var s = i || e.ui.ddmanager.current,
        a = !1;
      return s && (s.currentItem || s.element)[0] !== this.element[0]
        ? (this.element
            .find(':data(ui-droppable)')
            .not('.ui-draggable-dragging')
            .each(function () {
              var t = e.data(this, 'ui-droppable');
              return t.options.greedy &&
                !t.options.disabled &&
                t.options.scope === s.options.scope &&
                t.accept.call(t.element[0], s.currentItem || s.element) &&
                e.ui.intersect(s, e.extend(t, { offset: t.element.offset() }), t.options.tolerance)
                ? ((a = !0), !1)
                : undefined;
            }),
          a
            ? !1
            : this.accept.call(this.element[0], s.currentItem || s.element)
            ? (this.options.activeClass && this.element.removeClass(this.options.activeClass),
              this.options.hoverClass && this.element.removeClass(this.options.hoverClass),
              this._trigger('drop', t, this.ui(s)),
              this.element)
            : !1)
        : !1;
    },
    ui: function (e) {
      return { draggable: e.currentItem || e.element, helper: e.helper, position: e.position, offset: e.positionAbs };
    }
  }),
    (e.ui.intersect = function (e, i, s) {
      if (!i.offset) return !1;
      var a,
        n,
        o = (e.positionAbs || e.position.absolute).left,
        r = (e.positionAbs || e.position.absolute).top,
        l = o + e.helperProportions.width,
        h = r + e.helperProportions.height,
        u = i.offset.left,
        c = i.offset.top,
        d = u + i.proportions().width,
        p = c + i.proportions().height;
      switch (s) {
        case 'fit':
          return o >= u && d >= l && r >= c && p >= h;
        case 'intersect':
          return o + e.helperProportions.width / 2 > u && d > l - e.helperProportions.width / 2 && r + e.helperProportions.height / 2 > c && p > h - e.helperProportions.height / 2;
        case 'pointer':
          return (
            (a = (e.positionAbs || e.position.absolute).left + (e.clickOffset || e.offset.click).left),
            (n = (e.positionAbs || e.position.absolute).top + (e.clickOffset || e.offset.click).top),
            t(n, c, i.proportions().height) && t(a, u, i.proportions().width)
          );
        case 'touch':
          return ((r >= c && p >= r) || (h >= c && p >= h) || (c > r && h > p)) && ((o >= u && d >= o) || (l >= u && d >= l) || (u > o && l > d));
        default:
          return !1;
      }
    }),
    (e.ui.ddmanager = {
      current: null,
      droppables: { default: [] },
      prepareOffsets: function (t, i) {
        var s,
          a,
          n = e.ui.ddmanager.droppables[t.options.scope] || [],
          o = i ? i.type : null,
          r = (t.currentItem || t.element).find(':data(ui-droppable)').addBack();
        e: for (s = 0; n.length > s; s++)
          if (!(n[s].options.disabled || (t && !n[s].accept.call(n[s].element[0], t.currentItem || t.element)))) {
            for (a = 0; r.length > a; a++)
              if (r[a] === n[s].element[0]) {
                n[s].proportions().height = 0;
                continue e;
              }
            (n[s].visible = 'none' !== n[s].element.css('display')),
              n[s].visible &&
                ('mousedown' === o && n[s]._activate.call(n[s], i),
                (n[s].offset = n[s].element.offset()),
                n[s].proportions({ width: n[s].element[0].offsetWidth, height: n[s].element[0].offsetHeight }));
          }
      },
      drop: function (t, i) {
        var s = !1;
        return (
          e.each((e.ui.ddmanager.droppables[t.options.scope] || []).slice(), function () {
            this.options &&
              (!this.options.disabled && this.visible && e.ui.intersect(t, this, this.options.tolerance) && (s = this._drop.call(this, i) || s),
              !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && ((this.isout = !0), (this.isover = !1), this._deactivate.call(this, i)));
          }),
          s
        );
      },
      dragStart: function (t, i) {
        t.element.parentsUntil('body').bind('scroll.droppable', function () {
          t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, i);
        });
      },
      drag: function (t, i) {
        t.options.refreshPositions && e.ui.ddmanager.prepareOffsets(t, i),
          e.each(e.ui.ddmanager.droppables[t.options.scope] || [], function () {
            if (!this.options.disabled && !this.greedyChild && this.visible) {
              var s,
                a,
                n,
                o = e.ui.intersect(t, this, this.options.tolerance),
                r = !o && this.isover ? 'isout' : o && !this.isover ? 'isover' : null;
              r &&
                (this.options.greedy &&
                  ((a = this.options.scope),
                  (n = this.element.parents(':data(ui-droppable)').filter(function () {
                    return e.data(this, 'ui-droppable').options.scope === a;
                  })),
                  n.length && ((s = e.data(n[0], 'ui-droppable')), (s.greedyChild = 'isover' === r))),
                s && 'isover' === r && ((s.isover = !1), (s.isout = !0), s._out.call(s, i)),
                (this[r] = !0),
                (this['isout' === r ? 'isover' : 'isout'] = !1),
                this['isover' === r ? '_over' : '_out'].call(this, i),
                s && 'isout' === r && ((s.isout = !1), (s.isover = !0), s._over.call(s, i)));
            }
          });
      },
      dragStop: function (t, i) {
        t.element.parentsUntil('body').unbind('scroll.droppable'), t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, i);
      }
    });
})(jQuery);
(function (e) {
  function t(e) {
    return parseInt(e, 10) || 0;
  }
  function i(e) {
    return !isNaN(parseInt(e, 10));
  }
  e.widget('ui.resizable', e.ui.mouse, {
    version: '1.10.4',
    widgetEventPrefix: 'resize',
    options: {
      alsoResize: !1,
      animate: !1,
      animateDuration: 'slow',
      animateEasing: 'swing',
      aspectRatio: !1,
      autoHide: !1,
      containment: !1,
      ghost: !1,
      grid: !1,
      handles: 'e,s,se',
      helper: !1,
      maxHeight: null,
      maxWidth: null,
      minHeight: 10,
      minWidth: 10,
      zIndex: 90,
      resize: null,
      start: null,
      stop: null
    },
    _create: function () {
      var t,
        i,
        s,
        n,
        a,
        o = this,
        r = this.options;
      if (
        (this.element.addClass('ui-resizable'),
        e.extend(this, {
          _aspectRatio: !!r.aspectRatio,
          aspectRatio: r.aspectRatio,
          originalElement: this.element,
          _proportionallyResizeElements: [],
          _helper: r.helper || r.ghost || r.animate ? r.helper || 'ui-resizable-helper' : null
        }),
        this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) &&
          (this.element.wrap(
            e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
              position: this.element.css('position'),
              width: this.element.outerWidth(),
              height: this.element.outerHeight(),
              top: this.element.css('top'),
              left: this.element.css('left')
            })
          ),
          (this.element = this.element.parent().data('ui-resizable', this.element.data('ui-resizable'))),
          (this.elementIsWrapper = !0),
          this.element.css({
            marginLeft: this.originalElement.css('marginLeft'),
            marginTop: this.originalElement.css('marginTop'),
            marginRight: this.originalElement.css('marginRight'),
            marginBottom: this.originalElement.css('marginBottom')
          }),
          this.originalElement.css({ marginLeft: 0, marginTop: 0, marginRight: 0, marginBottom: 0 }),
          (this.originalResizeStyle = this.originalElement.css('resize')),
          this.originalElement.css('resize', 'none'),
          this._proportionallyResizeElements.push(this.originalElement.css({ position: 'static', zoom: 1, display: 'block' })),
          this.originalElement.css({ margin: this.originalElement.css('margin') }),
          this._proportionallyResize()),
        (this.handles =
          r.handles ||
          (e('.ui-resizable-handle', this.element).length
            ? { n: '.ui-resizable-n', e: '.ui-resizable-e', s: '.ui-resizable-s', w: '.ui-resizable-w', se: '.ui-resizable-se', sw: '.ui-resizable-sw', ne: '.ui-resizable-ne', nw: '.ui-resizable-nw' }
            : 'e,s,se')),
        this.handles.constructor === String)
      )
        for ('all' === this.handles && (this.handles = 'n,e,s,w,se,sw,ne,nw'), t = this.handles.split(','), this.handles = {}, i = 0; t.length > i; i++)
          (s = e.trim(t[i])),
            (a = 'ui-resizable-' + s),
            (n = e("<div class='ui-resizable-handle " + a + "'></div>")),
            n.css({ zIndex: r.zIndex }),
            'se' === s && n.addClass('ui-icon ui-icon-gripsmall-diagonal-se'),
            (this.handles[s] = '.ui-resizable-' + s),
            this.element.append(n);
      (this._renderAxis = function (t) {
        var i, s, n, a;
        t = t || this.element;
        for (i in this.handles)
          this.handles[i].constructor === String && (this.handles[i] = e(this.handles[i], this.element).show()),
            this.elementIsWrapper &&
              this.originalElement[0].nodeName.match(/textarea|input|select|button/i) &&
              ((s = e(this.handles[i], this.element)),
              (a = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth()),
              (n = ['padding', /ne|nw|n/.test(i) ? 'Top' : /se|sw|s/.test(i) ? 'Bottom' : /^e$/.test(i) ? 'Right' : 'Left'].join('')),
              t.css(n, a),
              this._proportionallyResize()),
            e(this.handles[i]).length;
      }),
        this._renderAxis(this.element),
        (this._handles = e('.ui-resizable-handle', this.element).disableSelection()),
        this._handles.mouseover(function () {
          o.resizing || (this.className && (n = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), (o.axis = n && n[1] ? n[1] : 'se'));
        }),
        r.autoHide &&
          (this._handles.hide(),
          e(this.element)
            .addClass('ui-resizable-autohide')
            .mouseenter(function () {
              r.disabled || (e(this).removeClass('ui-resizable-autohide'), o._handles.show());
            })
            .mouseleave(function () {
              r.disabled || o.resizing || (e(this).addClass('ui-resizable-autohide'), o._handles.hide());
            })),
        this._mouseInit();
    },
    _destroy: function () {
      this._mouseDestroy();
      var t,
        i = function (t) {
          e(t).removeClass('ui-resizable ui-resizable-disabled ui-resizable-resizing').removeData('resizable').removeData('ui-resizable').unbind('.resizable').find('.ui-resizable-handle').remove();
        };
      return (
        this.elementIsWrapper &&
          (i(this.element),
          (t = this.element),
          this.originalElement.css({ position: t.css('position'), width: t.outerWidth(), height: t.outerHeight(), top: t.css('top'), left: t.css('left') }).insertAfter(t),
          t.remove()),
        this.originalElement.css('resize', this.originalResizeStyle),
        i(this.originalElement),
        this
      );
    },
    _mouseCapture: function (t) {
      var i,
        s,
        n = !1;
      for (i in this.handles) (s = e(this.handles[i])[0]), (s === t.target || e.contains(s, t.target)) && (n = !0);
      return !this.options.disabled && n;
    },
    _mouseStart: function (i) {
      var s,
        n,
        a,
        o = this.options,
        r = this.element.position(),
        h = this.element;
      return (
        (this.resizing = !0),
        /absolute/.test(h.css('position'))
          ? h.css({ position: 'absolute', top: h.css('top'), left: h.css('left') })
          : h.is('.ui-draggable') && h.css({ position: 'absolute', top: r.top, left: r.left }),
        this._renderProxy(),
        (s = t(this.helper.css('left'))),
        (n = t(this.helper.css('top'))),
        o.containment && ((s += e(o.containment).scrollLeft() || 0), (n += e(o.containment).scrollTop() || 0)),
        (this.offset = this.helper.offset()),
        (this.position = { left: s, top: n }),
        (this.size = this._helper ? { width: this.helper.width(), height: this.helper.height() } : { width: h.width(), height: h.height() }),
        (this.originalSize = this._helper ? { width: h.outerWidth(), height: h.outerHeight() } : { width: h.width(), height: h.height() }),
        (this.originalPosition = { left: s, top: n }),
        (this.sizeDiff = { width: h.outerWidth() - h.width(), height: h.outerHeight() - h.height() }),
        (this.originalMousePosition = { left: i.pageX, top: i.pageY }),
        (this.aspectRatio = 'number' == typeof o.aspectRatio ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1),
        (a = e('.ui-resizable-' + this.axis).css('cursor')),
        e('body').css('cursor', 'auto' === a ? this.axis + '-resize' : a),
        h.addClass('ui-resizable-resizing'),
        this._propagate('start', i),
        !0
      );
    },
    _mouseDrag: function (t) {
      var i,
        s = this.helper,
        n = {},
        a = this.originalMousePosition,
        o = this.axis,
        r = this.position.top,
        h = this.position.left,
        l = this.size.width,
        u = this.size.height,
        c = t.pageX - a.left || 0,
        d = t.pageY - a.top || 0,
        p = this._change[o];
      return p
        ? ((i = p.apply(this, [t, c, d])),
          this._updateVirtualBoundaries(t.shiftKey),
          (this._aspectRatio || t.shiftKey) && (i = this._updateRatio(i, t)),
          (i = this._respectSize(i, t)),
          this._updateCache(i),
          this._propagate('resize', t),
          this.position.top !== r && (n.top = this.position.top + 'px'),
          this.position.left !== h && (n.left = this.position.left + 'px'),
          this.size.width !== l && (n.width = this.size.width + 'px'),
          this.size.height !== u && (n.height = this.size.height + 'px'),
          s.css(n),
          !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(),
          e.isEmptyObject(n) || this._trigger('resize', t, this.ui()),
          !1)
        : !1;
    },
    _mouseStop: function (t) {
      this.resizing = !1;
      var i,
        s,
        n,
        a,
        o,
        r,
        h,
        l = this.options,
        u = this;
      return (
        this._helper &&
          ((i = this._proportionallyResizeElements),
          (s = i.length && /textarea/i.test(i[0].nodeName)),
          (n = s && e.ui.hasScroll(i[0], 'left') ? 0 : u.sizeDiff.height),
          (a = s ? 0 : u.sizeDiff.width),
          (o = { width: u.helper.width() - a, height: u.helper.height() - n }),
          (r = parseInt(u.element.css('left'), 10) + (u.position.left - u.originalPosition.left) || null),
          (h = parseInt(u.element.css('top'), 10) + (u.position.top - u.originalPosition.top) || null),
          l.animate || this.element.css(e.extend(o, { top: h, left: r })),
          u.helper.height(u.size.height),
          u.helper.width(u.size.width),
          this._helper && !l.animate && this._proportionallyResize()),
        e('body').css('cursor', 'auto'),
        this.element.removeClass('ui-resizable-resizing'),
        this._propagate('stop', t),
        this._helper && this.helper.remove(),
        !1
      );
    },
    _updateVirtualBoundaries: function (e) {
      var t,
        s,
        n,
        a,
        o,
        r = this.options;
      (o = { minWidth: i(r.minWidth) ? r.minWidth : 0, maxWidth: i(r.maxWidth) ? r.maxWidth : 1 / 0, minHeight: i(r.minHeight) ? r.minHeight : 0, maxHeight: i(r.maxHeight) ? r.maxHeight : 1 / 0 }),
        (this._aspectRatio || e) &&
          ((t = o.minHeight * this.aspectRatio),
          (n = o.minWidth / this.aspectRatio),
          (s = o.maxHeight * this.aspectRatio),
          (a = o.maxWidth / this.aspectRatio),
          t > o.minWidth && (o.minWidth = t),
          n > o.minHeight && (o.minHeight = n),
          o.maxWidth > s && (o.maxWidth = s),
          o.maxHeight > a && (o.maxHeight = a)),
        (this._vBoundaries = o);
    },
    _updateCache: function (e) {
      (this.offset = this.helper.offset()),
        i(e.left) && (this.position.left = e.left),
        i(e.top) && (this.position.top = e.top),
        i(e.height) && (this.size.height = e.height),
        i(e.width) && (this.size.width = e.width);
    },
    _updateRatio: function (e) {
      var t = this.position,
        s = this.size,
        n = this.axis;
      return (
        i(e.height) ? (e.width = e.height * this.aspectRatio) : i(e.width) && (e.height = e.width / this.aspectRatio),
        'sw' === n && ((e.left = t.left + (s.width - e.width)), (e.top = null)),
        'nw' === n && ((e.top = t.top + (s.height - e.height)), (e.left = t.left + (s.width - e.width))),
        e
      );
    },
    _respectSize: function (e) {
      var t = this._vBoundaries,
        s = this.axis,
        n = i(e.width) && t.maxWidth && t.maxWidth < e.width,
        a = i(e.height) && t.maxHeight && t.maxHeight < e.height,
        o = i(e.width) && t.minWidth && t.minWidth > e.width,
        r = i(e.height) && t.minHeight && t.minHeight > e.height,
        h = this.originalPosition.left + this.originalSize.width,
        l = this.position.top + this.size.height,
        u = /sw|nw|w/.test(s),
        c = /nw|ne|n/.test(s);
      return (
        o && (e.width = t.minWidth),
        r && (e.height = t.minHeight),
        n && (e.width = t.maxWidth),
        a && (e.height = t.maxHeight),
        o && u && (e.left = h - t.minWidth),
        n && u && (e.left = h - t.maxWidth),
        r && c && (e.top = l - t.minHeight),
        a && c && (e.top = l - t.maxHeight),
        e.width || e.height || e.left || !e.top ? e.width || e.height || e.top || !e.left || (e.left = null) : (e.top = null),
        e
      );
    },
    _proportionallyResize: function () {
      if (this._proportionallyResizeElements.length) {
        var e,
          t,
          i,
          s,
          n,
          a = this.helper || this.element;
        for (e = 0; this._proportionallyResizeElements.length > e; e++) {
          if (((n = this._proportionallyResizeElements[e]), !this.borderDif))
            for (
              this.borderDif = [],
                i = [n.css('borderTopWidth'), n.css('borderRightWidth'), n.css('borderBottomWidth'), n.css('borderLeftWidth')],
                s = [n.css('paddingTop'), n.css('paddingRight'), n.css('paddingBottom'), n.css('paddingLeft')],
                t = 0;
              i.length > t;
              t++
            )
              this.borderDif[t] = (parseInt(i[t], 10) || 0) + (parseInt(s[t], 10) || 0);
          n.css({ height: a.height() - this.borderDif[0] - this.borderDif[2] || 0, width: a.width() - this.borderDif[1] - this.borderDif[3] || 0 });
        }
      }
    },
    _renderProxy: function () {
      var t = this.element,
        i = this.options;
      (this.elementOffset = t.offset()),
        this._helper
          ? ((this.helper = this.helper || e("<div style='overflow:hidden;'></div>")),
            this.helper
              .addClass(this._helper)
              .css({
                width: this.element.outerWidth() - 1,
                height: this.element.outerHeight() - 1,
                position: 'absolute',
                left: this.elementOffset.left + 'px',
                top: this.elementOffset.top + 'px',
                zIndex: ++i.zIndex
              }),
            this.helper.appendTo('body').disableSelection())
          : (this.helper = this.element);
    },
    _change: {
      e: function (e, t) {
        return { width: this.originalSize.width + t };
      },
      w: function (e, t) {
        var i = this.originalSize,
          s = this.originalPosition;
        return { left: s.left + t, width: i.width - t };
      },
      n: function (e, t, i) {
        var s = this.originalSize,
          n = this.originalPosition;
        return { top: n.top + i, height: s.height - i };
      },
      s: function (e, t, i) {
        return { height: this.originalSize.height + i };
      },
      se: function (t, i, s) {
        return e.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, i, s]));
      },
      sw: function (t, i, s) {
        return e.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, i, s]));
      },
      ne: function (t, i, s) {
        return e.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, i, s]));
      },
      nw: function (t, i, s) {
        return e.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, i, s]));
      }
    },
    _propagate: function (t, i) {
      e.ui.plugin.call(this, t, [i, this.ui()]), 'resize' !== t && this._trigger(t, i, this.ui());
    },
    plugins: {},
    ui: function () {
      return {
        originalElement: this.originalElement,
        element: this.element,
        helper: this.helper,
        position: this.position,
        size: this.size,
        originalSize: this.originalSize,
        originalPosition: this.originalPosition
      };
    }
  }),
    e.ui.plugin.add('resizable', 'animate', {
      stop: function (t) {
        var i = e(this).data('ui-resizable'),
          s = i.options,
          n = i._proportionallyResizeElements,
          a = n.length && /textarea/i.test(n[0].nodeName),
          o = a && e.ui.hasScroll(n[0], 'left') ? 0 : i.sizeDiff.height,
          r = a ? 0 : i.sizeDiff.width,
          h = { width: i.size.width - r, height: i.size.height - o },
          l = parseInt(i.element.css('left'), 10) + (i.position.left - i.originalPosition.left) || null,
          u = parseInt(i.element.css('top'), 10) + (i.position.top - i.originalPosition.top) || null;
        i.element.animate(e.extend(h, u && l ? { top: u, left: l } : {}), {
          duration: s.animateDuration,
          easing: s.animateEasing,
          step: function () {
            var s = { width: parseInt(i.element.css('width'), 10), height: parseInt(i.element.css('height'), 10), top: parseInt(i.element.css('top'), 10), left: parseInt(i.element.css('left'), 10) };
            n && n.length && e(n[0]).css({ width: s.width, height: s.height }), i._updateCache(s), i._propagate('resize', t);
          }
        });
      }
    }),
    e.ui.plugin.add('resizable', 'containment', {
      start: function () {
        var i,
          s,
          n,
          a,
          o,
          r,
          h,
          l = e(this).data('ui-resizable'),
          u = l.options,
          c = l.element,
          d = u.containment,
          p = d instanceof e ? d.get(0) : /parent/.test(d) ? c.parent().get(0) : d;
        p &&
          ((l.containerElement = e(p)),
          /document/.test(d) || d === document
            ? ((l.containerOffset = { left: 0, top: 0 }),
              (l.containerPosition = { left: 0, top: 0 }),
              (l.parentData = { element: e(document), left: 0, top: 0, width: e(document).width(), height: e(document).height() || document.body.parentNode.scrollHeight }))
            : ((i = e(p)),
              (s = []),
              e(['Top', 'Right', 'Left', 'Bottom']).each(function (e, n) {
                s[e] = t(i.css('padding' + n));
              }),
              (l.containerOffset = i.offset()),
              (l.containerPosition = i.position()),
              (l.containerSize = { height: i.innerHeight() - s[3], width: i.innerWidth() - s[1] }),
              (n = l.containerOffset),
              (a = l.containerSize.height),
              (o = l.containerSize.width),
              (r = e.ui.hasScroll(p, 'left') ? p.scrollWidth : o),
              (h = e.ui.hasScroll(p) ? p.scrollHeight : a),
              (l.parentData = { element: p, left: n.left, top: n.top, width: r, height: h })));
      },
      resize: function (t) {
        var i,
          s,
          n,
          a,
          o = e(this).data('ui-resizable'),
          r = o.options,
          h = o.containerOffset,
          l = o.position,
          u = o._aspectRatio || t.shiftKey,
          c = { top: 0, left: 0 },
          d = o.containerElement;
        d[0] !== document && /static/.test(d.css('position')) && (c = h),
          l.left < (o._helper ? h.left : 0) &&
            ((o.size.width = o.size.width + (o._helper ? o.position.left - h.left : o.position.left - c.left)),
            u && (o.size.height = o.size.width / o.aspectRatio),
            (o.position.left = r.helper ? h.left : 0)),
          l.top < (o._helper ? h.top : 0) &&
            ((o.size.height = o.size.height + (o._helper ? o.position.top - h.top : o.position.top)), u && (o.size.width = o.size.height * o.aspectRatio), (o.position.top = o._helper ? h.top : 0)),
          (o.offset.left = o.parentData.left + o.position.left),
          (o.offset.top = o.parentData.top + o.position.top),
          (i = Math.abs((o._helper ? o.offset.left - c.left : o.offset.left - c.left) + o.sizeDiff.width)),
          (s = Math.abs((o._helper ? o.offset.top - c.top : o.offset.top - h.top) + o.sizeDiff.height)),
          (n = o.containerElement.get(0) === o.element.parent().get(0)),
          (a = /relative|absolute/.test(o.containerElement.css('position'))),
          n && a && (i -= Math.abs(o.parentData.left)),
          i + o.size.width >= o.parentData.width && ((o.size.width = o.parentData.width - i), u && (o.size.height = o.size.width / o.aspectRatio)),
          s + o.size.height >= o.parentData.height && ((o.size.height = o.parentData.height - s), u && (o.size.width = o.size.height * o.aspectRatio));
      },
      stop: function () {
        var t = e(this).data('ui-resizable'),
          i = t.options,
          s = t.containerOffset,
          n = t.containerPosition,
          a = t.containerElement,
          o = e(t.helper),
          r = o.offset(),
          h = o.outerWidth() - t.sizeDiff.width,
          l = o.outerHeight() - t.sizeDiff.height;
        t._helper && !i.animate && /relative/.test(a.css('position')) && e(this).css({ left: r.left - n.left - s.left, width: h, height: l }),
          t._helper && !i.animate && /static/.test(a.css('position')) && e(this).css({ left: r.left - n.left - s.left, width: h, height: l });
      }
    }),
    e.ui.plugin.add('resizable', 'alsoResize', {
      start: function () {
        var t = e(this).data('ui-resizable'),
          i = t.options,
          s = function (t) {
            e(t).each(function () {
              var t = e(this);
              t.data('ui-resizable-alsoresize', { width: parseInt(t.width(), 10), height: parseInt(t.height(), 10), left: parseInt(t.css('left'), 10), top: parseInt(t.css('top'), 10) });
            });
          };
        'object' != typeof i.alsoResize || i.alsoResize.parentNode
          ? s(i.alsoResize)
          : i.alsoResize.length
          ? ((i.alsoResize = i.alsoResize[0]), s(i.alsoResize))
          : e.each(i.alsoResize, function (e) {
              s(e);
            });
      },
      resize: function (t, i) {
        var s = e(this).data('ui-resizable'),
          n = s.options,
          a = s.originalSize,
          o = s.originalPosition,
          r = { height: s.size.height - a.height || 0, width: s.size.width - a.width || 0, top: s.position.top - o.top || 0, left: s.position.left - o.left || 0 },
          h = function (t, s) {
            e(t).each(function () {
              var t = e(this),
                n = e(this).data('ui-resizable-alsoresize'),
                a = {},
                o = s && s.length ? s : t.parents(i.originalElement[0]).length ? ['width', 'height'] : ['width', 'height', 'top', 'left'];
              e.each(o, function (e, t) {
                var i = (n[t] || 0) + (r[t] || 0);
                i && i >= 0 && (a[t] = i || null);
              }),
                t.css(a);
            });
          };
        'object' != typeof n.alsoResize || n.alsoResize.nodeType
          ? h(n.alsoResize)
          : e.each(n.alsoResize, function (e, t) {
              h(e, t);
            });
      },
      stop: function () {
        e(this).removeData('resizable-alsoresize');
      }
    }),
    e.ui.plugin.add('resizable', 'ghost', {
      start: function () {
        var t = e(this).data('ui-resizable'),
          i = t.options,
          s = t.size;
        (t.ghost = t.originalElement.clone()),
          t.ghost
            .css({ opacity: 0.25, display: 'block', position: 'relative', height: s.height, width: s.width, margin: 0, left: 0, top: 0 })
            .addClass('ui-resizable-ghost')
            .addClass('string' == typeof i.ghost ? i.ghost : ''),
          t.ghost.appendTo(t.helper);
      },
      resize: function () {
        var t = e(this).data('ui-resizable');
        t.ghost && t.ghost.css({ position: 'relative', height: t.size.height, width: t.size.width });
      },
      stop: function () {
        var t = e(this).data('ui-resizable');
        t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0));
      }
    }),
    e.ui.plugin.add('resizable', 'grid', {
      resize: function () {
        var t = e(this).data('ui-resizable'),
          i = t.options,
          s = t.size,
          n = t.originalSize,
          a = t.originalPosition,
          o = t.axis,
          r = 'number' == typeof i.grid ? [i.grid, i.grid] : i.grid,
          h = r[0] || 1,
          l = r[1] || 1,
          u = Math.round((s.width - n.width) / h) * h,
          c = Math.round((s.height - n.height) / l) * l,
          d = n.width + u,
          p = n.height + c,
          f = i.maxWidth && d > i.maxWidth,
          m = i.maxHeight && p > i.maxHeight,
          g = i.minWidth && i.minWidth > d,
          v = i.minHeight && i.minHeight > p;
        (i.grid = r),
          g && (d += h),
          v && (p += l),
          f && (d -= h),
          m && (p -= l),
          /^(se|s|e)$/.test(o)
            ? ((t.size.width = d), (t.size.height = p))
            : /^(ne)$/.test(o)
            ? ((t.size.width = d), (t.size.height = p), (t.position.top = a.top - c))
            : /^(sw)$/.test(o)
            ? ((t.size.width = d), (t.size.height = p), (t.position.left = a.left - u))
            : (p - l > 0 ? ((t.size.height = p), (t.position.top = a.top - c)) : ((t.size.height = l), (t.position.top = a.top + n.height - l)),
              d - h > 0 ? ((t.size.width = d), (t.position.left = a.left - u)) : ((t.size.width = h), (t.position.left = a.left + n.width - h)));
      }
    });
})(jQuery);
(function (e) {
  e.widget('ui.selectable', e.ui.mouse, {
    version: '1.10.4',
    options: { appendTo: 'body', autoRefresh: !0, distance: 0, filter: '*', tolerance: 'touch', selected: null, selecting: null, start: null, stop: null, unselected: null, unselecting: null },
    _create: function () {
      var t,
        i = this;
      this.element.addClass('ui-selectable'),
        (this.dragged = !1),
        (this.refresh = function () {
          (t = e(i.options.filter, i.element[0])),
            t.addClass('ui-selectee'),
            t.each(function () {
              var t = e(this),
                i = t.offset();
              e.data(this, 'selectable-item', {
                element: this,
                $element: t,
                left: i.left,
                top: i.top,
                right: i.left + t.outerWidth(),
                bottom: i.top + t.outerHeight(),
                startselected: !1,
                selected: t.hasClass('ui-selected'),
                selecting: t.hasClass('ui-selecting'),
                unselecting: t.hasClass('ui-unselecting')
              });
            });
        }),
        this.refresh(),
        (this.selectees = t.addClass('ui-selectee')),
        this._mouseInit(),
        (this.helper = e("<div class='ui-selectable-helper'></div>"));
    },
    _destroy: function () {
      this.selectees.removeClass('ui-selectee').removeData('selectable-item'), this.element.removeClass('ui-selectable ui-selectable-disabled'), this._mouseDestroy();
    },
    _mouseStart: function (t) {
      var i = this,
        s = this.options;
      (this.opos = [t.pageX, t.pageY]),
        this.options.disabled ||
          ((this.selectees = e(s.filter, this.element[0])),
          this._trigger('start', t),
          e(s.appendTo).append(this.helper),
          this.helper.css({ left: t.pageX, top: t.pageY, width: 0, height: 0 }),
          s.autoRefresh && this.refresh(),
          this.selectees.filter('.ui-selected').each(function () {
            var s = e.data(this, 'selectable-item');
            (s.startselected = !0),
              t.metaKey ||
                t.ctrlKey ||
                (s.$element.removeClass('ui-selected'), (s.selected = !1), s.$element.addClass('ui-unselecting'), (s.unselecting = !0), i._trigger('unselecting', t, { unselecting: s.element }));
          }),
          e(t.target)
            .parents()
            .addBack()
            .each(function () {
              var s,
                n = e.data(this, 'selectable-item');
              return n
                ? ((s = (!t.metaKey && !t.ctrlKey) || !n.$element.hasClass('ui-selected')),
                  n.$element.removeClass(s ? 'ui-unselecting' : 'ui-selected').addClass(s ? 'ui-selecting' : 'ui-unselecting'),
                  (n.unselecting = !s),
                  (n.selecting = s),
                  (n.selected = s),
                  s ? i._trigger('selecting', t, { selecting: n.element }) : i._trigger('unselecting', t, { unselecting: n.element }),
                  !1)
                : undefined;
            }));
    },
    _mouseDrag: function (t) {
      if (((this.dragged = !0), !this.options.disabled)) {
        var i,
          s = this,
          n = this.options,
          a = this.opos[0],
          o = this.opos[1],
          r = t.pageX,
          h = t.pageY;
        return (
          a > r && ((i = r), (r = a), (a = i)),
          o > h && ((i = h), (h = o), (o = i)),
          this.helper.css({ left: a, top: o, width: r - a, height: h - o }),
          this.selectees.each(function () {
            var i = e.data(this, 'selectable-item'),
              l = !1;
            i &&
              i.element !== s.element[0] &&
              ('touch' === n.tolerance ? (l = !(i.left > r || a > i.right || i.top > h || o > i.bottom)) : 'fit' === n.tolerance && (l = i.left > a && r > i.right && i.top > o && h > i.bottom),
              l
                ? (i.selected && (i.$element.removeClass('ui-selected'), (i.selected = !1)),
                  i.unselecting && (i.$element.removeClass('ui-unselecting'), (i.unselecting = !1)),
                  i.selecting || (i.$element.addClass('ui-selecting'), (i.selecting = !0), s._trigger('selecting', t, { selecting: i.element })))
                : (i.selecting &&
                    ((t.metaKey || t.ctrlKey) && i.startselected
                      ? (i.$element.removeClass('ui-selecting'), (i.selecting = !1), i.$element.addClass('ui-selected'), (i.selected = !0))
                      : (i.$element.removeClass('ui-selecting'),
                        (i.selecting = !1),
                        i.startselected && (i.$element.addClass('ui-unselecting'), (i.unselecting = !0)),
                        s._trigger('unselecting', t, { unselecting: i.element }))),
                  i.selected &&
                    (t.metaKey ||
                      t.ctrlKey ||
                      i.startselected ||
                      (i.$element.removeClass('ui-selected'),
                      (i.selected = !1),
                      i.$element.addClass('ui-unselecting'),
                      (i.unselecting = !0),
                      s._trigger('unselecting', t, { unselecting: i.element })))));
          }),
          !1
        );
      }
    },
    _mouseStop: function (t) {
      var i = this;
      return (
        (this.dragged = !1),
        e('.ui-unselecting', this.element[0]).each(function () {
          var s = e.data(this, 'selectable-item');
          s.$element.removeClass('ui-unselecting'), (s.unselecting = !1), (s.startselected = !1), i._trigger('unselected', t, { unselected: s.element });
        }),
        e('.ui-selecting', this.element[0]).each(function () {
          var s = e.data(this, 'selectable-item');
          s.$element.removeClass('ui-selecting').addClass('ui-selected'), (s.selecting = !1), (s.selected = !0), (s.startselected = !0), i._trigger('selected', t, { selected: s.element });
        }),
        this._trigger('stop', t),
        this.helper.remove(),
        !1
      );
    }
  });
})(jQuery);
(function (e) {
  function t(e, t, i) {
    return e > t && t + i > e;
  }
  function i(e) {
    return /left|right/.test(e.css('float')) || /inline|table-cell/.test(e.css('display'));
  }
  e.widget('ui.sortable', e.ui.mouse, {
    version: '1.10.4',
    widgetEventPrefix: 'sort',
    ready: !1,
    options: {
      appendTo: 'parent',
      axis: !1,
      connectWith: !1,
      containment: !1,
      cursor: 'auto',
      cursorAt: !1,
      dropOnEmpty: !0,
      forcePlaceholderSize: !1,
      forceHelperSize: !1,
      grid: !1,
      handle: !1,
      helper: 'original',
      items: '> *',
      opacity: !1,
      placeholder: !1,
      revert: !1,
      scroll: !0,
      scrollSensitivity: 20,
      scrollSpeed: 20,
      scope: 'default',
      tolerance: 'intersect',
      zIndex: 1e3,
      activate: null,
      beforeStop: null,
      change: null,
      deactivate: null,
      out: null,
      over: null,
      receive: null,
      remove: null,
      sort: null,
      start: null,
      stop: null,
      update: null
    },
    _create: function () {
      var e = this.options;
      (this.containerCache = {}),
        this.element.addClass('ui-sortable'),
        this.refresh(),
        (this.floating = this.items.length ? 'x' === e.axis || i(this.items[0].item) : !1),
        (this.offset = this.element.offset()),
        this._mouseInit(),
        (this.ready = !0);
    },
    _destroy: function () {
      this.element.removeClass('ui-sortable ui-sortable-disabled'), this._mouseDestroy();
      for (var e = this.items.length - 1; e >= 0; e--) this.items[e].item.removeData(this.widgetName + '-item');
      return this;
    },
    _setOption: function (t, i) {
      'disabled' === t ? ((this.options[t] = i), this.widget().toggleClass('ui-sortable-disabled', !!i)) : e.Widget.prototype._setOption.apply(this, arguments);
    },
    _mouseCapture: function (t, i) {
      var s = null,
        n = !1,
        a = this;
      return this.reverting
        ? !1
        : this.options.disabled || 'static' === this.options.type
        ? !1
        : (this._refreshItems(t),
          e(t.target)
            .parents()
            .each(function () {
              return e.data(this, a.widgetName + '-item') === a ? ((s = e(this)), !1) : undefined;
            }),
          e.data(t.target, a.widgetName + '-item') === a && (s = e(t.target)),
          s
            ? !this.options.handle ||
              i ||
              (e(this.options.handle, s)
                .find('*')
                .addBack()
                .each(function () {
                  this === t.target && (n = !0);
                }),
              n)
              ? ((this.currentItem = s), this._removeCurrentsFromItems(), !0)
              : !1
            : !1);
    },
    _mouseStart: function (t, i, s) {
      var n,
        a,
        o = this.options;
      if (
        ((this.currentContainer = this),
        this.refreshPositions(),
        (this.helper = this._createHelper(t)),
        this._cacheHelperProportions(),
        this._cacheMargins(),
        (this.scrollParent = this.helper.scrollParent()),
        (this.offset = this.currentItem.offset()),
        (this.offset = { top: this.offset.top - this.margins.top, left: this.offset.left - this.margins.left }),
        e.extend(this.offset, { click: { left: t.pageX - this.offset.left, top: t.pageY - this.offset.top }, parent: this._getParentOffset(), relative: this._getRelativeOffset() }),
        this.helper.css('position', 'absolute'),
        (this.cssPosition = this.helper.css('position')),
        (this.originalPosition = this._generatePosition(t)),
        (this.originalPageX = t.pageX),
        (this.originalPageY = t.pageY),
        o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt),
        (this.domPosition = { prev: this.currentItem.prev()[0], parent: this.currentItem.parent()[0] }),
        this.helper[0] !== this.currentItem[0] && this.currentItem.hide(),
        this._createPlaceholder(),
        o.containment && this._setContainment(),
        o.cursor &&
          'auto' !== o.cursor &&
          ((a = this.document.find('body')),
          (this.storedCursor = a.css('cursor')),
          a.css('cursor', o.cursor),
          (this.storedStylesheet = e('<style>*{ cursor: ' + o.cursor + ' !important; }</style>').appendTo(a))),
        o.opacity && (this.helper.css('opacity') && (this._storedOpacity = this.helper.css('opacity')), this.helper.css('opacity', o.opacity)),
        o.zIndex && (this.helper.css('zIndex') && (this._storedZIndex = this.helper.css('zIndex')), this.helper.css('zIndex', o.zIndex)),
        this.scrollParent[0] !== document && 'HTML' !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()),
        this._trigger('start', t, this._uiHash()),
        this._preserveHelperProportions || this._cacheHelperProportions(),
        !s)
      )
        for (n = this.containers.length - 1; n >= 0; n--) this.containers[n]._trigger('activate', t, this._uiHash(this));
      return (
        e.ui.ddmanager && (e.ui.ddmanager.current = this),
        e.ui.ddmanager && !o.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t),
        (this.dragging = !0),
        this.helper.addClass('ui-sortable-helper'),
        this._mouseDrag(t),
        !0
      );
    },
    _mouseDrag: function (t) {
      var i,
        s,
        n,
        a,
        o = this.options,
        r = !1;
      for (
        this.position = this._generatePosition(t),
          this.positionAbs = this._convertPositionTo('absolute'),
          this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs),
          this.options.scroll &&
            (this.scrollParent[0] !== document && 'HTML' !== this.scrollParent[0].tagName
              ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < o.scrollSensitivity
                  ? (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + o.scrollSpeed)
                  : t.pageY - this.overflowOffset.top < o.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - o.scrollSpeed),
                this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < o.scrollSensitivity
                  ? (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + o.scrollSpeed)
                  : t.pageX - this.overflowOffset.left < o.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - o.scrollSpeed))
              : (t.pageY - e(document).scrollTop() < o.scrollSensitivity
                  ? (r = e(document).scrollTop(e(document).scrollTop() - o.scrollSpeed))
                  : e(window).height() - (t.pageY - e(document).scrollTop()) < o.scrollSensitivity && (r = e(document).scrollTop(e(document).scrollTop() + o.scrollSpeed)),
                t.pageX - e(document).scrollLeft() < o.scrollSensitivity
                  ? (r = e(document).scrollLeft(e(document).scrollLeft() - o.scrollSpeed))
                  : e(window).width() - (t.pageX - e(document).scrollLeft()) < o.scrollSensitivity && (r = e(document).scrollLeft(e(document).scrollLeft() + o.scrollSpeed))),
            r !== !1 && e.ui.ddmanager && !o.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t)),
          this.positionAbs = this._convertPositionTo('absolute'),
          (this.options.axis && 'y' === this.options.axis) || (this.helper[0].style.left = this.position.left + 'px'),
          (this.options.axis && 'x' === this.options.axis) || (this.helper[0].style.top = this.position.top + 'px'),
          i = this.items.length - 1;
        i >= 0;
        i--
      )
        if (
          ((s = this.items[i]),
          (n = s.item[0]),
          (a = this._intersectsWithPointer(s)),
          a &&
            s.instance === this.currentContainer &&
            n !== this.currentItem[0] &&
            this.placeholder[1 === a ? 'next' : 'prev']()[0] !== n &&
            !e.contains(this.placeholder[0], n) &&
            ('semi-dynamic' === this.options.type ? !e.contains(this.element[0], n) : !0))
        ) {
          if (((this.direction = 1 === a ? 'down' : 'up'), 'pointer' !== this.options.tolerance && !this._intersectsWithSides(s))) break;
          this._rearrange(t, s), this._trigger('change', t, this._uiHash());
          break;
        }
      return this._contactContainers(t), e.ui.ddmanager && e.ui.ddmanager.drag(this, t), this._trigger('sort', t, this._uiHash()), (this.lastPositionAbs = this.positionAbs), !1;
    },
    _mouseStop: function (t, i) {
      if (t) {
        if ((e.ui.ddmanager && !this.options.dropBehaviour && e.ui.ddmanager.drop(this, t), this.options.revert)) {
          var s = this,
            n = this.placeholder.offset(),
            a = this.options.axis,
            o = {};
          (a && 'x' !== a) || (o.left = n.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)),
            (a && 'y' !== a) || (o.top = n.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)),
            (this.reverting = !0),
            e(this.helper).animate(o, parseInt(this.options.revert, 10) || 500, function () {
              s._clear(t);
            });
        } else this._clear(t, i);
        return !1;
      }
    },
    cancel: function () {
      if (this.dragging) {
        this._mouseUp({ target: null }), 'original' === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass('ui-sortable-helper') : this.currentItem.show();
        for (var t = this.containers.length - 1; t >= 0; t--)
          this.containers[t]._trigger('deactivate', null, this._uiHash(this)),
            this.containers[t].containerCache.over && (this.containers[t]._trigger('out', null, this._uiHash(this)), (this.containers[t].containerCache.over = 0));
      }
      return (
        this.placeholder &&
          (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
          'original' !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(),
          e.extend(this, { helper: null, dragging: !1, reverting: !1, _noFinalSort: null }),
          this.domPosition.prev ? e(this.domPosition.prev).after(this.currentItem) : e(this.domPosition.parent).prepend(this.currentItem)),
        this
      );
    },
    serialize: function (t) {
      var i = this._getItemsAsjQuery(t && t.connected),
        s = [];
      return (
        (t = t || {}),
        e(i).each(function () {
          var i = (e(t.item || this).attr(t.attribute || 'id') || '').match(t.expression || /(.+)[\-=_](.+)/);
          i && s.push((t.key || i[1] + '[]') + '=' + (t.key && t.expression ? i[1] : i[2]));
        }),
        !s.length && t.key && s.push(t.key + '='),
        s.join('&')
      );
    },
    toArray: function (t) {
      var i = this._getItemsAsjQuery(t && t.connected),
        s = [];
      return (
        (t = t || {}),
        i.each(function () {
          s.push(e(t.item || this).attr(t.attribute || 'id') || '');
        }),
        s
      );
    },
    _intersectsWith: function (e) {
      var t = this.positionAbs.left,
        i = t + this.helperProportions.width,
        s = this.positionAbs.top,
        n = s + this.helperProportions.height,
        a = e.left,
        o = a + e.width,
        r = e.top,
        h = r + e.height,
        l = this.offset.click.top,
        u = this.offset.click.left,
        c = 'x' === this.options.axis || (s + l > r && h > s + l),
        d = 'y' === this.options.axis || (t + u > a && o > t + u),
        p = c && d;
      return 'pointer' === this.options.tolerance ||
        this.options.forcePointerForContainers ||
        ('pointer' !== this.options.tolerance && this.helperProportions[this.floating ? 'width' : 'height'] > e[this.floating ? 'width' : 'height'])
        ? p
        : t + this.helperProportions.width / 2 > a && o > i - this.helperProportions.width / 2 && s + this.helperProportions.height / 2 > r && h > n - this.helperProportions.height / 2;
    },
    _intersectsWithPointer: function (e) {
      var i = 'x' === this.options.axis || t(this.positionAbs.top + this.offset.click.top, e.top, e.height),
        s = 'y' === this.options.axis || t(this.positionAbs.left + this.offset.click.left, e.left, e.width),
        n = i && s,
        a = this._getDragVerticalDirection(),
        o = this._getDragHorizontalDirection();
      return n ? (this.floating ? ((o && 'right' === o) || 'down' === a ? 2 : 1) : a && ('down' === a ? 2 : 1)) : !1;
    },
    _intersectsWithSides: function (e) {
      var i = t(this.positionAbs.top + this.offset.click.top, e.top + e.height / 2, e.height),
        s = t(this.positionAbs.left + this.offset.click.left, e.left + e.width / 2, e.width),
        n = this._getDragVerticalDirection(),
        a = this._getDragHorizontalDirection();
      return this.floating && a ? ('right' === a && s) || ('left' === a && !s) : n && (('down' === n && i) || ('up' === n && !i));
    },
    _getDragVerticalDirection: function () {
      var e = this.positionAbs.top - this.lastPositionAbs.top;
      return 0 !== e && (e > 0 ? 'down' : 'up');
    },
    _getDragHorizontalDirection: function () {
      var e = this.positionAbs.left - this.lastPositionAbs.left;
      return 0 !== e && (e > 0 ? 'right' : 'left');
    },
    refresh: function (e) {
      return this._refreshItems(e), this.refreshPositions(), this;
    },
    _connectWith: function () {
      var e = this.options;
      return e.connectWith.constructor === String ? [e.connectWith] : e.connectWith;
    },
    _getItemsAsjQuery: function (t) {
      function i() {
        r.push(this);
      }
      var s,
        n,
        a,
        o,
        r = [],
        h = [],
        l = this._connectWith();
      if (l && t)
        for (s = l.length - 1; s >= 0; s--)
          for (a = e(l[s]), n = a.length - 1; n >= 0; n--)
            (o = e.data(a[n], this.widgetFullName)),
              o &&
                o !== this &&
                !o.options.disabled &&
                h.push([e.isFunction(o.options.items) ? o.options.items.call(o.element) : e(o.options.items, o.element).not('.ui-sortable-helper').not('.ui-sortable-placeholder'), o]);
      for (
        h.push([
          e.isFunction(this.options.items)
            ? this.options.items.call(this.element, null, { options: this.options, item: this.currentItem })
            : e(this.options.items, this.element).not('.ui-sortable-helper').not('.ui-sortable-placeholder'),
          this
        ]),
          s = h.length - 1;
        s >= 0;
        s--
      )
        h[s][0].each(i);
      return e(r);
    },
    _removeCurrentsFromItems: function () {
      var t = this.currentItem.find(':data(' + this.widgetName + '-item)');
      this.items = e.grep(this.items, function (e) {
        for (var i = 0; t.length > i; i++) if (t[i] === e.item[0]) return !1;
        return !0;
      });
    },
    _refreshItems: function (t) {
      (this.items = []), (this.containers = [this]);
      var i,
        s,
        n,
        a,
        o,
        r,
        h,
        l,
        u = this.items,
        c = [[e.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, { item: this.currentItem }) : e(this.options.items, this.element), this]],
        d = this._connectWith();
      if (d && this.ready)
        for (i = d.length - 1; i >= 0; i--)
          for (n = e(d[i]), s = n.length - 1; s >= 0; s--)
            (a = e.data(n[s], this.widgetFullName)),
              a &&
                a !== this &&
                !a.options.disabled &&
                (c.push([e.isFunction(a.options.items) ? a.options.items.call(a.element[0], t, { item: this.currentItem }) : e(a.options.items, a.element), a]), this.containers.push(a));
      for (i = c.length - 1; i >= 0; i--)
        for (o = c[i][1], r = c[i][0], s = 0, l = r.length; l > s; s++) (h = e(r[s])), h.data(this.widgetName + '-item', o), u.push({ item: h, instance: o, width: 0, height: 0, left: 0, top: 0 });
    },
    refreshPositions: function (t) {
      this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
      var i, s, n, a;
      for (i = this.items.length - 1; i >= 0; i--)
        (s = this.items[i]),
          (s.instance !== this.currentContainer && this.currentContainer && s.item[0] !== this.currentItem[0]) ||
            ((n = this.options.toleranceElement ? e(this.options.toleranceElement, s.item) : s.item),
            t || ((s.width = n.outerWidth()), (s.height = n.outerHeight())),
            (a = n.offset()),
            (s.left = a.left),
            (s.top = a.top));
      if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
      else
        for (i = this.containers.length - 1; i >= 0; i--)
          (a = this.containers[i].element.offset()),
            (this.containers[i].containerCache.left = a.left),
            (this.containers[i].containerCache.top = a.top),
            (this.containers[i].containerCache.width = this.containers[i].element.outerWidth()),
            (this.containers[i].containerCache.height = this.containers[i].element.outerHeight());
      return this;
    },
    _createPlaceholder: function (t) {
      t = t || this;
      var i,
        s = t.options;
      (s.placeholder && s.placeholder.constructor !== String) ||
        ((i = s.placeholder),
        (s.placeholder = {
          element: function () {
            var s = t.currentItem[0].nodeName.toLowerCase(),
              n = e('<' + s + '>', t.document[0])
                .addClass(i || t.currentItem[0].className + ' ui-sortable-placeholder')
                .removeClass('ui-sortable-helper');
            return (
              'tr' === s
                ? t.currentItem.children().each(function () {
                    e('<td>&#160;</td>', t.document[0])
                      .attr('colspan', e(this).attr('colspan') || 1)
                      .appendTo(n);
                  })
                : 'img' === s && n.attr('src', t.currentItem.attr('src')),
              i || n.css('visibility', 'hidden'),
              n
            );
          },
          update: function (e, n) {
            (!i || s.forcePlaceholderSize) &&
              (n.height() || n.height(t.currentItem.innerHeight() - parseInt(t.currentItem.css('paddingTop') || 0, 10) - parseInt(t.currentItem.css('paddingBottom') || 0, 10)),
              n.width() || n.width(t.currentItem.innerWidth() - parseInt(t.currentItem.css('paddingLeft') || 0, 10) - parseInt(t.currentItem.css('paddingRight') || 0, 10)));
          }
        })),
        (t.placeholder = e(s.placeholder.element.call(t.element, t.currentItem))),
        t.currentItem.after(t.placeholder),
        s.placeholder.update(t, t.placeholder);
    },
    _contactContainers: function (s) {
      var n,
        a,
        o,
        r,
        h,
        l,
        u,
        c,
        d,
        p,
        f = null,
        m = null;
      for (n = this.containers.length - 1; n >= 0; n--)
        if (!e.contains(this.currentItem[0], this.containers[n].element[0]))
          if (this._intersectsWith(this.containers[n].containerCache)) {
            if (f && e.contains(this.containers[n].element[0], f.element[0])) continue;
            (f = this.containers[n]), (m = n);
          } else this.containers[n].containerCache.over && (this.containers[n]._trigger('out', s, this._uiHash(this)), (this.containers[n].containerCache.over = 0));
      if (f)
        if (1 === this.containers.length) this.containers[m].containerCache.over || (this.containers[m]._trigger('over', s, this._uiHash(this)), (this.containers[m].containerCache.over = 1));
        else {
          for (
            o = 1e4, r = null, p = f.floating || i(this.currentItem), h = p ? 'left' : 'top', l = p ? 'width' : 'height', u = this.positionAbs[h] + this.offset.click[h], a = this.items.length - 1;
            a >= 0;
            a--
          )
            e.contains(this.containers[m].element[0], this.items[a].item[0]) &&
              this.items[a].item[0] !== this.currentItem[0] &&
              (!p || t(this.positionAbs.top + this.offset.click.top, this.items[a].top, this.items[a].height)) &&
              ((c = this.items[a].item.offset()[h]),
              (d = !1),
              Math.abs(c - u) > Math.abs(c + this.items[a][l] - u) && ((d = !0), (c += this.items[a][l])),
              o > Math.abs(c - u) && ((o = Math.abs(c - u)), (r = this.items[a]), (this.direction = d ? 'up' : 'down')));
          if (!r && !this.options.dropOnEmpty) return;
          if (this.currentContainer === this.containers[m]) return;
          r ? this._rearrange(s, r, null, !0) : this._rearrange(s, null, this.containers[m].element, !0),
            this._trigger('change', s, this._uiHash()),
            this.containers[m]._trigger('change', s, this._uiHash(this)),
            (this.currentContainer = this.containers[m]),
            this.options.placeholder.update(this.currentContainer, this.placeholder),
            this.containers[m]._trigger('over', s, this._uiHash(this)),
            (this.containers[m].containerCache.over = 1);
        }
    },
    _createHelper: function (t) {
      var i = this.options,
        s = e.isFunction(i.helper) ? e(i.helper.apply(this.element[0], [t, this.currentItem])) : 'clone' === i.helper ? this.currentItem.clone() : this.currentItem;
      return (
        s.parents('body').length || e('parent' !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]),
        s[0] === this.currentItem[0] &&
          (this._storedCSS = {
            width: this.currentItem[0].style.width,
            height: this.currentItem[0].style.height,
            position: this.currentItem.css('position'),
            top: this.currentItem.css('top'),
            left: this.currentItem.css('left')
          }),
        (!s[0].style.width || i.forceHelperSize) && s.width(this.currentItem.width()),
        (!s[0].style.height || i.forceHelperSize) && s.height(this.currentItem.height()),
        s
      );
    },
    _adjustOffsetFromHelper: function (t) {
      'string' == typeof t && (t = t.split(' ')),
        e.isArray(t) && (t = { left: +t[0], top: +t[1] || 0 }),
        'left' in t && (this.offset.click.left = t.left + this.margins.left),
        'right' in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left),
        'top' in t && (this.offset.click.top = t.top + this.margins.top),
        'bottom' in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top);
    },
    _getParentOffset: function () {
      this.offsetParent = this.helper.offsetParent();
      var t = this.offsetParent.offset();
      return (
        'absolute' === this.cssPosition &&
          this.scrollParent[0] !== document &&
          e.contains(this.scrollParent[0], this.offsetParent[0]) &&
          ((t.left += this.scrollParent.scrollLeft()), (t.top += this.scrollParent.scrollTop())),
        (this.offsetParent[0] === document.body || (this.offsetParent[0].tagName && 'html' === this.offsetParent[0].tagName.toLowerCase() && e.ui.ie)) && (t = { top: 0, left: 0 }),
        { top: t.top + (parseInt(this.offsetParent.css('borderTopWidth'), 10) || 0), left: t.left + (parseInt(this.offsetParent.css('borderLeftWidth'), 10) || 0) }
      );
    },
    _getRelativeOffset: function () {
      if ('relative' === this.cssPosition) {
        var e = this.currentItem.position();
        return {
          top: e.top - (parseInt(this.helper.css('top'), 10) || 0) + this.scrollParent.scrollTop(),
          left: e.left - (parseInt(this.helper.css('left'), 10) || 0) + this.scrollParent.scrollLeft()
        };
      }
      return { top: 0, left: 0 };
    },
    _cacheMargins: function () {
      this.margins = { left: parseInt(this.currentItem.css('marginLeft'), 10) || 0, top: parseInt(this.currentItem.css('marginTop'), 10) || 0 };
    },
    _cacheHelperProportions: function () {
      this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight() };
    },
    _setContainment: function () {
      var t,
        i,
        s,
        n = this.options;
      'parent' === n.containment && (n.containment = this.helper[0].parentNode),
        ('document' === n.containment || 'window' === n.containment) &&
          (this.containment = [
            0 - this.offset.relative.left - this.offset.parent.left,
            0 - this.offset.relative.top - this.offset.parent.top,
            e('document' === n.containment ? document : window).width() - this.helperProportions.width - this.margins.left,
            (e('document' === n.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top
          ]),
        /^(document|window|parent)$/.test(n.containment) ||
          ((t = e(n.containment)[0]),
          (i = e(n.containment).offset()),
          (s = 'hidden' !== e(t).css('overflow')),
          (this.containment = [
            i.left + (parseInt(e(t).css('borderLeftWidth'), 10) || 0) + (parseInt(e(t).css('paddingLeft'), 10) || 0) - this.margins.left,
            i.top + (parseInt(e(t).css('borderTopWidth'), 10) || 0) + (parseInt(e(t).css('paddingTop'), 10) || 0) - this.margins.top,
            i.left +
              (s ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) -
              (parseInt(e(t).css('borderLeftWidth'), 10) || 0) -
              (parseInt(e(t).css('paddingRight'), 10) || 0) -
              this.helperProportions.width -
              this.margins.left,
            i.top +
              (s ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) -
              (parseInt(e(t).css('borderTopWidth'), 10) || 0) -
              (parseInt(e(t).css('paddingBottom'), 10) || 0) -
              this.helperProportions.height -
              this.margins.top
          ]));
    },
    _convertPositionTo: function (t, i) {
      i || (i = this.position);
      var s = 'absolute' === t ? 1 : -1,
        n = 'absolute' !== this.cssPosition || (this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0])) ? this.scrollParent : this.offsetParent,
        a = /(html|body)/i.test(n[0].tagName);
      return {
        top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ('fixed' === this.cssPosition ? -this.scrollParent.scrollTop() : a ? 0 : n.scrollTop()) * s,
        left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ('fixed' === this.cssPosition ? -this.scrollParent.scrollLeft() : a ? 0 : n.scrollLeft()) * s
      };
    },
    _generatePosition: function (t) {
      var i,
        s,
        n = this.options,
        a = t.pageX,
        o = t.pageY,
        r = 'absolute' !== this.cssPosition || (this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0])) ? this.scrollParent : this.offsetParent,
        h = /(html|body)/i.test(r[0].tagName);
      return (
        'relative' !== this.cssPosition || (this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0]) || (this.offset.relative = this._getRelativeOffset()),
        this.originalPosition &&
          (this.containment &&
            (t.pageX - this.offset.click.left < this.containment[0] && (a = this.containment[0] + this.offset.click.left),
            t.pageY - this.offset.click.top < this.containment[1] && (o = this.containment[1] + this.offset.click.top),
            t.pageX - this.offset.click.left > this.containment[2] && (a = this.containment[2] + this.offset.click.left),
            t.pageY - this.offset.click.top > this.containment[3] && (o = this.containment[3] + this.offset.click.top)),
          n.grid &&
            ((i = this.originalPageY + Math.round((o - this.originalPageY) / n.grid[1]) * n.grid[1]),
            (o = this.containment
              ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3]
                ? i
                : i - this.offset.click.top >= this.containment[1]
                ? i - n.grid[1]
                : i + n.grid[1]
              : i),
            (s = this.originalPageX + Math.round((a - this.originalPageX) / n.grid[0]) * n.grid[0]),
            (a = this.containment
              ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2]
                ? s
                : s - this.offset.click.left >= this.containment[0]
                ? s - n.grid[0]
                : s + n.grid[0]
              : s))),
        {
          top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ('fixed' === this.cssPosition ? -this.scrollParent.scrollTop() : h ? 0 : r.scrollTop()),
          left: a - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ('fixed' === this.cssPosition ? -this.scrollParent.scrollLeft() : h ? 0 : r.scrollLeft())
        }
      );
    },
    _rearrange: function (e, t, i, s) {
      i ? i[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], 'down' === this.direction ? t.item[0] : t.item[0].nextSibling),
        (this.counter = this.counter ? ++this.counter : 1);
      var n = this.counter;
      this._delay(function () {
        n === this.counter && this.refreshPositions(!s);
      });
    },
    _clear: function (e, t) {
      function i(e, t, i) {
        return function (s) {
          i._trigger(e, s, t._uiHash(t));
        };
      }
      this.reverting = !1;
      var s,
        n = [];
      if ((!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), (this._noFinalSort = null), this.helper[0] === this.currentItem[0])) {
        for (s in this._storedCSS) ('auto' === this._storedCSS[s] || 'static' === this._storedCSS[s]) && (this._storedCSS[s] = '');
        this.currentItem.css(this._storedCSS).removeClass('ui-sortable-helper');
      } else this.currentItem.show();
      for (
        this.fromOutside &&
          !t &&
          n.push(function (e) {
            this._trigger('receive', e, this._uiHash(this.fromOutside));
          }),
          (!this.fromOutside && this.domPosition.prev === this.currentItem.prev().not('.ui-sortable-helper')[0] && this.domPosition.parent === this.currentItem.parent()[0]) ||
            t ||
            n.push(function (e) {
              this._trigger('update', e, this._uiHash());
            }),
          this !== this.currentContainer &&
            (t ||
              (n.push(function (e) {
                this._trigger('remove', e, this._uiHash());
              }),
              n.push(
                function (e) {
                  return function (t) {
                    e._trigger('receive', t, this._uiHash(this));
                  };
                }.call(this, this.currentContainer)
              ),
              n.push(
                function (e) {
                  return function (t) {
                    e._trigger('update', t, this._uiHash(this));
                  };
                }.call(this, this.currentContainer)
              ))),
          s = this.containers.length - 1;
        s >= 0;
        s--
      )
        t || n.push(i('deactivate', this, this.containers[s])), this.containers[s].containerCache.over && (n.push(i('out', this, this.containers[s])), (this.containers[s].containerCache.over = 0));
      if (
        (this.storedCursor && (this.document.find('body').css('cursor', this.storedCursor), this.storedStylesheet.remove()),
        this._storedOpacity && this.helper.css('opacity', this._storedOpacity),
        this._storedZIndex && this.helper.css('zIndex', 'auto' === this._storedZIndex ? '' : this._storedZIndex),
        (this.dragging = !1),
        this.cancelHelperRemoval)
      ) {
        if (!t) {
          for (this._trigger('beforeStop', e, this._uiHash()), s = 0; n.length > s; s++) n[s].call(this, e);
          this._trigger('stop', e, this._uiHash());
        }
        return (this.fromOutside = !1), !1;
      }
      if (
        (t || this._trigger('beforeStop', e, this._uiHash()),
        this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
        this.helper[0] !== this.currentItem[0] && this.helper.remove(),
        (this.helper = null),
        !t)
      ) {
        for (s = 0; n.length > s; s++) n[s].call(this, e);
        this._trigger('stop', e, this._uiHash());
      }
      return (this.fromOutside = !1), !0;
    },
    _trigger: function () {
      e.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel();
    },
    _uiHash: function (t) {
      var i = t || this;
      return {
        helper: i.helper,
        placeholder: i.placeholder || e([]),
        position: i.position,
        originalPosition: i.originalPosition,
        offset: i.positionAbs,
        item: i.currentItem,
        sender: t ? t.element : null
      };
    }
  });
})(jQuery);
(function (e) {
  var t = 0,
    i = {},
    s = {};
  (i.height = i.paddingTop = i.paddingBottom = i.borderTopWidth = i.borderBottomWidth = 'hide'),
    (s.height = s.paddingTop = s.paddingBottom = s.borderTopWidth = s.borderBottomWidth = 'show'),
    e.widget('ui.accordion', {
      version: '1.10.4',
      options: {
        active: 0,
        animate: {},
        collapsible: !1,
        event: 'click',
        header: '> li > :first-child,> :not(li):even',
        heightStyle: 'auto',
        icons: { activeHeader: 'ui-icon-triangle-1-s', header: 'ui-icon-triangle-1-e' },
        activate: null,
        beforeActivate: null
      },
      _create: function () {
        var t = this.options;
        (this.prevShow = this.prevHide = e()),
          this.element.addClass('ui-accordion ui-widget ui-helper-reset').attr('role', 'tablist'),
          t.collapsible || (t.active !== !1 && null != t.active) || (t.active = 0),
          this._processPanels(),
          0 > t.active && (t.active += this.headers.length),
          this._refresh();
      },
      _getCreateEventData: function () {
        return { header: this.active, panel: this.active.length ? this.active.next() : e(), content: this.active.length ? this.active.next() : e() };
      },
      _createIcons: function () {
        var t = this.options.icons;
        t &&
          (e('<span>')
            .addClass('ui-accordion-header-icon ui-icon ' + t.header)
            .prependTo(this.headers),
          this.active.children('.ui-accordion-header-icon').removeClass(t.header).addClass(t.activeHeader),
          this.headers.addClass('ui-accordion-icons'));
      },
      _destroyIcons: function () {
        this.headers.removeClass('ui-accordion-icons').children('.ui-accordion-header-icon').remove();
      },
      _destroy: function () {
        var e;
        this.element.removeClass('ui-accordion ui-widget ui-helper-reset').removeAttr('role'),
          this.headers
            .removeClass('ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top')
            .removeAttr('role')
            .removeAttr('aria-expanded')
            .removeAttr('aria-selected')
            .removeAttr('aria-controls')
            .removeAttr('tabIndex')
            .each(function () {
              /^ui-accordion/.test(this.id) && this.removeAttribute('id');
            }),
          this._destroyIcons(),
          (e = this.headers
            .next()
            .css('display', '')
            .removeAttr('role')
            .removeAttr('aria-hidden')
            .removeAttr('aria-labelledby')
            .removeClass('ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled')
            .each(function () {
              /^ui-accordion/.test(this.id) && this.removeAttribute('id');
            })),
          'content' !== this.options.heightStyle && e.css('height', '');
      },
      _setOption: function (e, t) {
        return 'active' === e
          ? (this._activate(t), undefined)
          : ('event' === e && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(t)),
            this._super(e, t),
            'collapsible' !== e || t || this.options.active !== !1 || this._activate(0),
            'icons' === e && (this._destroyIcons(), t && this._createIcons()),
            'disabled' === e && this.headers.add(this.headers.next()).toggleClass('ui-state-disabled', !!t),
            undefined);
      },
      _keydown: function (t) {
        if (!t.altKey && !t.ctrlKey) {
          var i = e.ui.keyCode,
            s = this.headers.length,
            a = this.headers.index(t.target),
            n = !1;
          switch (t.keyCode) {
            case i.RIGHT:
            case i.DOWN:
              n = this.headers[(a + 1) % s];
              break;
            case i.LEFT:
            case i.UP:
              n = this.headers[(a - 1 + s) % s];
              break;
            case i.SPACE:
            case i.ENTER:
              this._eventHandler(t);
              break;
            case i.HOME:
              n = this.headers[0];
              break;
            case i.END:
              n = this.headers[s - 1];
          }
          n && (e(t.target).attr('tabIndex', -1), e(n).attr('tabIndex', 0), n.focus(), t.preventDefault());
        }
      },
      _panelKeyDown: function (t) {
        t.keyCode === e.ui.keyCode.UP && t.ctrlKey && e(t.currentTarget).prev().focus();
      },
      refresh: function () {
        var t = this.options;
        this._processPanels(),
          (t.active === !1 && t.collapsible === !0) || !this.headers.length
            ? ((t.active = !1), (this.active = e()))
            : t.active === !1
            ? this._activate(0)
            : this.active.length && !e.contains(this.element[0], this.active[0])
            ? this.headers.length === this.headers.find('.ui-state-disabled').length
              ? ((t.active = !1), (this.active = e()))
              : this._activate(Math.max(0, t.active - 1))
            : (t.active = this.headers.index(this.active)),
          this._destroyIcons(),
          this._refresh();
      },
      _processPanels: function () {
        (this.headers = this.element.find(this.options.header).addClass('ui-accordion-header ui-helper-reset ui-state-default ui-corner-all')),
          this.headers.next().addClass('ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom').filter(':not(.ui-accordion-content-active)').hide();
      },
      _refresh: function () {
        var i,
          s = this.options,
          a = s.heightStyle,
          n = this.element.parent(),
          r = (this.accordionId = 'ui-accordion-' + (this.element.attr('id') || ++t));
        (this.active = this._findActive(s.active).addClass('ui-accordion-header-active ui-state-active ui-corner-top').removeClass('ui-corner-all')),
          this.active.next().addClass('ui-accordion-content-active').show(),
          this.headers
            .attr('role', 'tab')
            .each(function (t) {
              var i = e(this),
                s = i.attr('id'),
                a = i.next(),
                n = a.attr('id');
              s || ((s = r + '-header-' + t), i.attr('id', s)), n || ((n = r + '-panel-' + t), a.attr('id', n)), i.attr('aria-controls', n), a.attr('aria-labelledby', s);
            })
            .next()
            .attr('role', 'tabpanel'),
          this.headers.not(this.active).attr({ 'aria-selected': 'false', 'aria-expanded': 'false', tabIndex: -1 }).next().attr({ 'aria-hidden': 'true' }).hide(),
          this.active.length ? this.active.attr({ 'aria-selected': 'true', 'aria-expanded': 'true', tabIndex: 0 }).next().attr({ 'aria-hidden': 'false' }) : this.headers.eq(0).attr('tabIndex', 0),
          this._createIcons(),
          this._setupEvents(s.event),
          'fill' === a
            ? ((i = n.height()),
              this.element.siblings(':visible').each(function () {
                var t = e(this),
                  s = t.css('position');
                'absolute' !== s && 'fixed' !== s && (i -= t.outerHeight(!0));
              }),
              this.headers.each(function () {
                i -= e(this).outerHeight(!0);
              }),
              this.headers
                .next()
                .each(function () {
                  e(this).height(Math.max(0, i - e(this).innerHeight() + e(this).height()));
                })
                .css('overflow', 'auto'))
            : 'auto' === a &&
              ((i = 0),
              this.headers
                .next()
                .each(function () {
                  i = Math.max(i, e(this).css('height', '').height());
                })
                .height(i));
      },
      _activate: function (t) {
        var i = this._findActive(t)[0];
        i !== this.active[0] && ((i = i || this.active[0]), this._eventHandler({ target: i, currentTarget: i, preventDefault: e.noop }));
      },
      _findActive: function (t) {
        return 'number' == typeof t ? this.headers.eq(t) : e();
      },
      _setupEvents: function (t) {
        var i = { keydown: '_keydown' };
        t &&
          e.each(t.split(' '), function (e, t) {
            i[t] = '_eventHandler';
          }),
          this._off(this.headers.add(this.headers.next())),
          this._on(this.headers, i),
          this._on(this.headers.next(), { keydown: '_panelKeyDown' }),
          this._hoverable(this.headers),
          this._focusable(this.headers);
      },
      _eventHandler: function (t) {
        var i = this.options,
          s = this.active,
          a = e(t.currentTarget),
          n = a[0] === s[0],
          r = n && i.collapsible,
          o = r ? e() : a.next(),
          h = s.next(),
          l = { oldHeader: s, oldPanel: h, newHeader: r ? e() : a, newPanel: o };
        t.preventDefault(),
          (n && !i.collapsible) ||
            this._trigger('beforeActivate', t, l) === !1 ||
            ((i.active = r ? !1 : this.headers.index(a)),
            (this.active = n ? e() : a),
            this._toggle(l),
            s.removeClass('ui-accordion-header-active ui-state-active'),
            i.icons && s.children('.ui-accordion-header-icon').removeClass(i.icons.activeHeader).addClass(i.icons.header),
            n ||
              (a.removeClass('ui-corner-all').addClass('ui-accordion-header-active ui-state-active ui-corner-top'),
              i.icons && a.children('.ui-accordion-header-icon').removeClass(i.icons.header).addClass(i.icons.activeHeader),
              a.next().addClass('ui-accordion-content-active')));
      },
      _toggle: function (t) {
        var i = t.newPanel,
          s = this.prevShow.length ? this.prevShow : t.oldPanel;
        this.prevShow.add(this.prevHide).stop(!0, !0),
          (this.prevShow = i),
          (this.prevHide = s),
          this.options.animate ? this._animate(i, s, t) : (s.hide(), i.show(), this._toggleComplete(t)),
          s.attr({ 'aria-hidden': 'true' }),
          s.prev().attr('aria-selected', 'false'),
          i.length && s.length
            ? s.prev().attr({ tabIndex: -1, 'aria-expanded': 'false' })
            : i.length &&
              this.headers
                .filter(function () {
                  return 0 === e(this).attr('tabIndex');
                })
                .attr('tabIndex', -1),
          i.attr('aria-hidden', 'false').prev().attr({ 'aria-selected': 'true', tabIndex: 0, 'aria-expanded': 'true' });
      },
      _animate: function (e, t, a) {
        var n,
          r,
          o,
          h = this,
          l = 0,
          u = e.length && (!t.length || e.index() < t.index()),
          c = this.options.animate || {},
          d = (u && c.down) || c,
          p = function () {
            h._toggleComplete(a);
          };
        return (
          'number' == typeof d && (o = d),
          'string' == typeof d && (r = d),
          (r = r || d.easing || c.easing),
          (o = o || d.duration || c.duration),
          t.length
            ? e.length
              ? ((n = e.show().outerHeight()),
                t.animate(i, {
                  duration: o,
                  easing: r,
                  step: function (e, t) {
                    t.now = Math.round(e);
                  }
                }),
                e.hide().animate(s, {
                  duration: o,
                  easing: r,
                  complete: p,
                  step: function (e, i) {
                    (i.now = Math.round(e)), 'height' !== i.prop ? (l += i.now) : 'content' !== h.options.heightStyle && ((i.now = Math.round(n - t.outerHeight() - l)), (l = 0));
                  }
                }),
                undefined)
              : t.animate(i, o, r, p)
            : e.animate(s, o, r, p)
        );
      },
      _toggleComplete: function (e) {
        var t = e.oldPanel;
        t.removeClass('ui-accordion-content-active').prev().removeClass('ui-corner-top').addClass('ui-corner-all'),
          t.length && (t.parent()[0].className = t.parent()[0].className),
          this._trigger('activate', null, e);
      }
    });
})(jQuery);
(function (e) {
  e.widget('ui.autocomplete', {
    version: '1.10.4',
    defaultElement: '<input>',
    options: {
      appendTo: null,
      autoFocus: !1,
      delay: 300,
      minLength: 1,
      position: { my: 'left top', at: 'left bottom', collision: 'none' },
      source: null,
      change: null,
      close: null,
      focus: null,
      open: null,
      response: null,
      search: null,
      select: null
    },
    requestIndex: 0,
    pending: 0,
    _create: function () {
      var t,
        i,
        s,
        a = this.element[0].nodeName.toLowerCase(),
        n = 'textarea' === a,
        r = 'input' === a;
      (this.isMultiLine = n ? !0 : r ? !1 : this.element.prop('isContentEditable')),
        (this.valueMethod = this.element[n || r ? 'val' : 'text']),
        (this.isNewMenu = !0),
        this.element.addClass('ui-autocomplete-input').attr('autocomplete', 'off'),
        this._on(this.element, {
          keydown: function (a) {
            if (this.element.prop('readOnly')) return (t = !0), (s = !0), (i = !0), undefined;
            (t = !1), (s = !1), (i = !1);
            var n = e.ui.keyCode;
            switch (a.keyCode) {
              case n.PAGE_UP:
                (t = !0), this._move('previousPage', a);
                break;
              case n.PAGE_DOWN:
                (t = !0), this._move('nextPage', a);
                break;
              case n.UP:
                (t = !0), this._keyEvent('previous', a);
                break;
              case n.DOWN:
                (t = !0), this._keyEvent('next', a);
                break;
              case n.ENTER:
              case n.NUMPAD_ENTER:
                this.menu.active && ((t = !0), a.preventDefault(), this.menu.select(a));
                break;
              case n.TAB:
                this.menu.active && this.menu.select(a);
                break;
              case n.ESCAPE:
                this.menu.element.is(':visible') && (this._value(this.term), this.close(a), a.preventDefault());
                break;
              default:
                (i = !0), this._searchTimeout(a);
            }
          },
          keypress: function (s) {
            if (t) return (t = !1), (!this.isMultiLine || this.menu.element.is(':visible')) && s.preventDefault(), undefined;
            if (!i) {
              var a = e.ui.keyCode;
              switch (s.keyCode) {
                case a.PAGE_UP:
                  this._move('previousPage', s);
                  break;
                case a.PAGE_DOWN:
                  this._move('nextPage', s);
                  break;
                case a.UP:
                  this._keyEvent('previous', s);
                  break;
                case a.DOWN:
                  this._keyEvent('next', s);
              }
            }
          },
          input: function (e) {
            return s ? ((s = !1), e.preventDefault(), undefined) : (this._searchTimeout(e), undefined);
          },
          focus: function () {
            (this.selectedItem = null), (this.previous = this._value());
          },
          blur: function (e) {
            return this.cancelBlur ? (delete this.cancelBlur, undefined) : (clearTimeout(this.searching), this.close(e), this._change(e), undefined);
          }
        }),
        this._initSource(),
        (this.menu = e('<ul>').addClass('ui-autocomplete ui-front').appendTo(this._appendTo()).menu({ role: null }).hide().data('ui-menu')),
        this._on(this.menu.element, {
          mousedown: function (t) {
            t.preventDefault(),
              (this.cancelBlur = !0),
              this._delay(function () {
                delete this.cancelBlur;
              });
            var i = this.menu.element[0];
            e(t.target).closest('.ui-menu-item').length ||
              this._delay(function () {
                var t = this;
                this.document.one('mousedown', function (s) {
                  s.target === t.element[0] || s.target === i || e.contains(i, s.target) || t.close();
                });
              });
          },
          menufocus: function (t, i) {
            if (this.isNewMenu && ((this.isNewMenu = !1), t.originalEvent && /^mouse/.test(t.originalEvent.type)))
              return (
                this.menu.blur(),
                this.document.one('mousemove', function () {
                  e(t.target).trigger(t.originalEvent);
                }),
                undefined
              );
            var s = i.item.data('ui-autocomplete-item');
            !1 !== this._trigger('focus', t, { item: s }) ? t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(s.value) : this.liveRegion.text(s.value);
          },
          menuselect: function (e, t) {
            var i = t.item.data('ui-autocomplete-item'),
              s = this.previous;
            this.element[0] !== this.document[0].activeElement &&
              (this.element.focus(),
              (this.previous = s),
              this._delay(function () {
                (this.previous = s), (this.selectedItem = i);
              })),
              !1 !== this._trigger('select', e, { item: i }) && this._value(i.value),
              (this.term = this._value()),
              this.close(e),
              (this.selectedItem = i);
          }
        }),
        (this.liveRegion = e('<span>', { role: 'status', 'aria-live': 'polite' }).addClass('ui-helper-hidden-accessible').insertBefore(this.element)),
        this._on(this.window, {
          beforeunload: function () {
            this.element.removeAttr('autocomplete');
          }
        });
    },
    _destroy: function () {
      clearTimeout(this.searching), this.element.removeClass('ui-autocomplete-input').removeAttr('autocomplete'), this.menu.element.remove(), this.liveRegion.remove();
    },
    _setOption: function (e, t) {
      this._super(e, t), 'source' === e && this._initSource(), 'appendTo' === e && this.menu.element.appendTo(this._appendTo()), 'disabled' === e && t && this.xhr && this.xhr.abort();
    },
    _appendTo: function () {
      var t = this.options.appendTo;
      return t && (t = t.jquery || t.nodeType ? e(t) : this.document.find(t).eq(0)), t || (t = this.element.closest('.ui-front')), t.length || (t = this.document[0].body), t;
    },
    _initSource: function () {
      var t,
        i,
        s = this;
      e.isArray(this.options.source)
        ? ((t = this.options.source),
          (this.source = function (i, s) {
            s(e.ui.autocomplete.filter(t, i.term));
          }))
        : 'string' == typeof this.options.source
        ? ((i = this.options.source),
          (this.source = function (t, a) {
            s.xhr && s.xhr.abort(),
              (s.xhr = e.ajax({
                url: i,
                data: t,
                dataType: 'json',
                success: function (e) {
                  a(e);
                },
                error: function () {
                  a([]);
                }
              }));
          }))
        : (this.source = this.options.source);
    },
    _searchTimeout: function (e) {
      clearTimeout(this.searching),
        (this.searching = this._delay(function () {
          this.term !== this._value() && ((this.selectedItem = null), this.search(null, e));
        }, this.options.delay));
    },
    search: function (e, t) {
      return (e = null != e ? e : this._value()), (this.term = this._value()), e.length < this.options.minLength ? this.close(t) : this._trigger('search', t) !== !1 ? this._search(e) : undefined;
    },
    _search: function (e) {
      this.pending++, this.element.addClass('ui-autocomplete-loading'), (this.cancelSearch = !1), this.source({ term: e }, this._response());
    },
    _response: function () {
      var t = ++this.requestIndex;
      return e.proxy(function (e) {
        t === this.requestIndex && this.__response(e), this.pending--, this.pending || this.element.removeClass('ui-autocomplete-loading');
      }, this);
    },
    __response: function (e) {
      e && (e = this._normalize(e)),
        this._trigger('response', null, { content: e }),
        !this.options.disabled && e && e.length && !this.cancelSearch ? (this._suggest(e), this._trigger('open')) : this._close();
    },
    close: function (e) {
      (this.cancelSearch = !0), this._close(e);
    },
    _close: function (e) {
      this.menu.element.is(':visible') && (this.menu.element.hide(), this.menu.blur(), (this.isNewMenu = !0), this._trigger('close', e));
    },
    _change: function (e) {
      this.previous !== this._value() && this._trigger('change', e, { item: this.selectedItem });
    },
    _normalize: function (t) {
      return t.length && t[0].label && t[0].value
        ? t
        : e.map(t, function (t) {
            return 'string' == typeof t ? { label: t, value: t } : e.extend({ label: t.label || t.value, value: t.value || t.label }, t);
          });
    },
    _suggest: function (t) {
      var i = this.menu.element.empty();
      this._renderMenu(i, t),
        (this.isNewMenu = !0),
        this.menu.refresh(),
        i.show(),
        this._resizeMenu(),
        i.position(e.extend({ of: this.element }, this.options.position)),
        this.options.autoFocus && this.menu.next();
    },
    _resizeMenu: function () {
      var e = this.menu.element;
      e.outerWidth(Math.max(e.width('').outerWidth() + 1, this.element.outerWidth()));
    },
    _renderMenu: function (t, i) {
      var s = this;
      e.each(i, function (e, i) {
        s._renderItemData(t, i);
      });
    },
    _renderItemData: function (e, t) {
      return this._renderItem(e, t).data('ui-autocomplete-item', t);
    },
    _renderItem: function (t, i) {
      return e('<li>').append(e('<a>').text(i.label)).appendTo(t);
    },
    _move: function (e, t) {
      return this.menu.element.is(':visible')
        ? (this.menu.isFirstItem() && /^previous/.test(e)) || (this.menu.isLastItem() && /^next/.test(e))
          ? (this._value(this.term), this.menu.blur(), undefined)
          : (this.menu[e](t), undefined)
        : (this.search(null, t), undefined);
    },
    widget: function () {
      return this.menu.element;
    },
    _value: function () {
      return this.valueMethod.apply(this.element, arguments);
    },
    _keyEvent: function (e, t) {
      (!this.isMultiLine || this.menu.element.is(':visible')) && (this._move(e, t), t.preventDefault());
    }
  }),
    e.extend(e.ui.autocomplete, {
      escapeRegex: function (e) {
        return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
      },
      filter: function (t, i) {
        var s = RegExp(e.ui.autocomplete.escapeRegex(i), 'i');
        return e.grep(t, function (e) {
          return s.test(e.label || e.value || e);
        });
      }
    }),
    e.widget('ui.autocomplete', e.ui.autocomplete, {
      options: {
        messages: {
          noResults: 'No search results.',
          results: function (e) {
            return e + (e > 1 ? ' results are' : ' result is') + ' available, use up and down arrow keys to navigate.';
          }
        }
      },
      __response: function (e) {
        var t;
        this._superApply(arguments),
          this.options.disabled || this.cancelSearch || ((t = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults), this.liveRegion.text(t));
      }
    });
})(jQuery);
(function (e) {
  var t,
    i = 'ui-button ui-widget ui-state-default ui-corner-all',
    s = 'ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only',
    a = function () {
      var t = e(this);
      setTimeout(function () {
        t.find(':ui-button').button('refresh');
      }, 1);
    },
    n = function (t) {
      var i = t.name,
        s = t.form,
        a = e([]);
      return (
        i &&
          ((i = i.replace(/'/g, "\\'")),
          (a = s
            ? e(s).find("[name='" + i + "']")
            : e("[name='" + i + "']", t.ownerDocument).filter(function () {
                return !this.form;
              }))),
        a
      );
    };
  e.widget('ui.button', {
    version: '1.10.4',
    defaultElement: '<button>',
    options: { disabled: null, text: !0, label: null, icons: { primary: null, secondary: null } },
    _create: function () {
      this.element
        .closest('form')
        .unbind('reset' + this.eventNamespace)
        .bind('reset' + this.eventNamespace, a),
        'boolean' != typeof this.options.disabled ? (this.options.disabled = !!this.element.prop('disabled')) : this.element.prop('disabled', this.options.disabled),
        this._determineButtonType(),
        (this.hasTitle = !!this.buttonElement.attr('title'));
      var s = this,
        r = this.options,
        o = 'checkbox' === this.type || 'radio' === this.type,
        h = o ? '' : 'ui-state-active';
      null === r.label && (r.label = 'input' === this.type ? this.buttonElement.val() : this.buttonElement.html()),
        this._hoverable(this.buttonElement),
        this.buttonElement
          .addClass(i)
          .attr('role', 'button')
          .bind('mouseenter' + this.eventNamespace, function () {
            r.disabled || (this === t && e(this).addClass('ui-state-active'));
          })
          .bind('mouseleave' + this.eventNamespace, function () {
            r.disabled || e(this).removeClass(h);
          })
          .bind('click' + this.eventNamespace, function (e) {
            r.disabled && (e.preventDefault(), e.stopImmediatePropagation());
          }),
        this._on({
          focus: function () {
            this.buttonElement.addClass('ui-state-focus');
          },
          blur: function () {
            this.buttonElement.removeClass('ui-state-focus');
          }
        }),
        o &&
          this.element.bind('change' + this.eventNamespace, function () {
            s.refresh();
          }),
        'checkbox' === this.type
          ? this.buttonElement.bind('click' + this.eventNamespace, function () {
              return r.disabled ? !1 : undefined;
            })
          : 'radio' === this.type
          ? this.buttonElement.bind('click' + this.eventNamespace, function () {
              if (r.disabled) return !1;
              e(this).addClass('ui-state-active'), s.buttonElement.attr('aria-pressed', 'true');
              var t = s.element[0];
              n(t)
                .not(t)
                .map(function () {
                  return e(this).button('widget')[0];
                })
                .removeClass('ui-state-active')
                .attr('aria-pressed', 'false');
            })
          : (this.buttonElement
              .bind('mousedown' + this.eventNamespace, function () {
                return r.disabled
                  ? !1
                  : (e(this).addClass('ui-state-active'),
                    (t = this),
                    s.document.one('mouseup', function () {
                      t = null;
                    }),
                    undefined);
              })
              .bind('mouseup' + this.eventNamespace, function () {
                return r.disabled ? !1 : (e(this).removeClass('ui-state-active'), undefined);
              })
              .bind('keydown' + this.eventNamespace, function (t) {
                return r.disabled ? !1 : ((t.keyCode === e.ui.keyCode.SPACE || t.keyCode === e.ui.keyCode.ENTER) && e(this).addClass('ui-state-active'), undefined);
              })
              .bind('keyup' + this.eventNamespace + ' blur' + this.eventNamespace, function () {
                e(this).removeClass('ui-state-active');
              }),
            this.buttonElement.is('a') &&
              this.buttonElement.keyup(function (t) {
                t.keyCode === e.ui.keyCode.SPACE && e(this).click();
              })),
        this._setOption('disabled', r.disabled),
        this._resetButton();
    },
    _determineButtonType: function () {
      var e, t, i;
      (this.type = this.element.is('[type=checkbox]') ? 'checkbox' : this.element.is('[type=radio]') ? 'radio' : this.element.is('input') ? 'input' : 'button'),
        'checkbox' === this.type || 'radio' === this.type
          ? ((e = this.element.parents().last()),
            (t = "label[for='" + this.element.attr('id') + "']"),
            (this.buttonElement = e.find(t)),
            this.buttonElement.length || ((e = e.length ? e.siblings() : this.element.siblings()), (this.buttonElement = e.filter(t)), this.buttonElement.length || (this.buttonElement = e.find(t))),
            this.element.addClass('ui-helper-hidden-accessible'),
            (i = this.element.is(':checked')),
            i && this.buttonElement.addClass('ui-state-active'),
            this.buttonElement.prop('aria-pressed', i))
          : (this.buttonElement = this.element);
    },
    widget: function () {
      return this.buttonElement;
    },
    _destroy: function () {
      this.element.removeClass('ui-helper-hidden-accessible'),
        this.buttonElement
          .removeClass(i + ' ui-state-active ' + s)
          .removeAttr('role')
          .removeAttr('aria-pressed')
          .html(this.buttonElement.find('.ui-button-text').html()),
        this.hasTitle || this.buttonElement.removeAttr('title');
    },
    _setOption: function (e, t) {
      return this._super(e, t), 'disabled' === e ? (this.element.prop('disabled', !!t), t && this.buttonElement.removeClass('ui-state-focus'), undefined) : (this._resetButton(), undefined);
    },
    refresh: function () {
      var t = this.element.is('input, button') ? this.element.is(':disabled') : this.element.hasClass('ui-button-disabled');
      t !== this.options.disabled && this._setOption('disabled', t),
        'radio' === this.type
          ? n(this.element[0]).each(function () {
              e(this).is(':checked')
                ? e(this).button('widget').addClass('ui-state-active').attr('aria-pressed', 'true')
                : e(this).button('widget').removeClass('ui-state-active').attr('aria-pressed', 'false');
            })
          : 'checkbox' === this.type &&
            (this.element.is(':checked')
              ? this.buttonElement.addClass('ui-state-active').attr('aria-pressed', 'true')
              : this.buttonElement.removeClass('ui-state-active').attr('aria-pressed', 'false'));
    },
    _resetButton: function () {
      if ('input' === this.type) return this.options.label && this.element.val(this.options.label), undefined;
      var t = this.buttonElement.removeClass(s),
        i = e('<span></span>', this.document[0]).addClass('ui-button-text').html(this.options.label).appendTo(t.empty()).text(),
        a = this.options.icons,
        n = a.primary && a.secondary,
        r = [];
      a.primary || a.secondary
        ? (this.options.text && r.push('ui-button-text-icon' + (n ? 's' : a.primary ? '-primary' : '-secondary')),
          a.primary && t.prepend("<span class='ui-button-icon-primary ui-icon " + a.primary + "'></span>"),
          a.secondary && t.append("<span class='ui-button-icon-secondary ui-icon " + a.secondary + "'></span>"),
          this.options.text || (r.push(n ? 'ui-button-icons-only' : 'ui-button-icon-only'), this.hasTitle || t.attr('title', e.trim(i))))
        : r.push('ui-button-text-only'),
        t.addClass(r.join(' '));
    }
  }),
    e.widget('ui.buttonset', {
      version: '1.10.4',
      options: { items: 'button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)' },
      _create: function () {
        this.element.addClass('ui-buttonset');
      },
      _init: function () {
        this.refresh();
      },
      _setOption: function (e, t) {
        'disabled' === e && this.buttons.button('option', e, t), this._super(e, t);
      },
      refresh: function () {
        var t = 'rtl' === this.element.css('direction');
        this.buttons = this.element
          .find(this.options.items)
          .filter(':ui-button')
          .button('refresh')
          .end()
          .not(':ui-button')
          .button()
          .end()
          .map(function () {
            return e(this).button('widget')[0];
          })
          .removeClass('ui-corner-all ui-corner-left ui-corner-right')
          .filter(':first')
          .addClass(t ? 'ui-corner-right' : 'ui-corner-left')
          .end()
          .filter(':last')
          .addClass(t ? 'ui-corner-left' : 'ui-corner-right')
          .end()
          .end();
      },
      _destroy: function () {
        this.element.removeClass('ui-buttonset'),
          this.buttons
            .map(function () {
              return e(this).button('widget')[0];
            })
            .removeClass('ui-corner-left ui-corner-right')
            .end()
            .button('destroy');
      }
    });
})(jQuery);
(function (t, e) {
  function i() {
    (this._curInst = null),
      (this._keyEvent = !1),
      (this._disabledInputs = []),
      (this._datepickerShowing = !1),
      (this._inDialog = !1),
      (this._mainDivId = 'ui-datepicker-div'),
      (this._inlineClass = 'ui-datepicker-inline'),
      (this._appendClass = 'ui-datepicker-append'),
      (this._triggerClass = 'ui-datepicker-trigger'),
      (this._dialogClass = 'ui-datepicker-dialog'),
      (this._disableClass = 'ui-datepicker-disabled'),
      (this._unselectableClass = 'ui-datepicker-unselectable'),
      (this._currentClass = 'ui-datepicker-current-day'),
      (this._dayOverClass = 'ui-datepicker-days-cell-over'),
      (this.regional = []),
      (this.regional[''] = {
        closeText: 'Done',
        prevText: 'Prev',
        nextText: 'Next',
        currentText: 'Today',
        monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        weekHeader: 'Wk',
        dateFormat: 'mm/dd/yy',
        firstDay: 0,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ''
      }),
      (this._defaults = {
        showOn: 'focus',
        showAnim: 'fadeIn',
        showOptions: {},
        defaultDate: null,
        appendText: '',
        buttonText: '...',
        buttonImage: '',
        buttonImageOnly: !1,
        hideIfNoPrevNext: !1,
        navigationAsDateFormat: !1,
        gotoCurrent: !1,
        changeMonth: !1,
        changeYear: !1,
        yearRange: 'c-10:c+10',
        showOtherMonths: !1,
        selectOtherMonths: !1,
        showWeek: !1,
        calculateWeek: this.iso8601Week,
        shortYearCutoff: '+10',
        minDate: null,
        maxDate: null,
        duration: 'fast',
        beforeShowDay: null,
        beforeShow: null,
        onSelect: null,
        onChangeMonthYear: null,
        onClose: null,
        numberOfMonths: 1,
        showCurrentAtPos: 0,
        stepMonths: 1,
        stepBigMonths: 12,
        altField: '',
        altFormat: '',
        constrainInput: !0,
        showButtonPanel: !1,
        autoSize: !1,
        disabled: !1
      }),
      t.extend(this._defaults, this.regional['']),
      (this.dpDiv = s(t("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")));
  }
  function s(e) {
    var i = 'button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a';
    return e
      .delegate(i, 'mouseout', function () {
        t(this).removeClass('ui-state-hover'),
          -1 !== this.className.indexOf('ui-datepicker-prev') && t(this).removeClass('ui-datepicker-prev-hover'),
          -1 !== this.className.indexOf('ui-datepicker-next') && t(this).removeClass('ui-datepicker-next-hover');
      })
      .delegate(i, 'mouseover', function () {
        t.datepicker._isDisabledDatepicker(a.inline ? e.parent()[0] : a.input[0]) ||
          (t(this).parents('.ui-datepicker-calendar').find('a').removeClass('ui-state-hover'),
          t(this).addClass('ui-state-hover'),
          -1 !== this.className.indexOf('ui-datepicker-prev') && t(this).addClass('ui-datepicker-prev-hover'),
          -1 !== this.className.indexOf('ui-datepicker-next') && t(this).addClass('ui-datepicker-next-hover'));
      });
  }
  function n(e, i) {
    t.extend(e, i);
    for (var s in i) null == i[s] && (e[s] = i[s]);
    return e;
  }
  t.extend(t.ui, { datepicker: { version: '1.10.4' } });
  var a,
    o = 'datepicker';
  t.extend(i.prototype, {
    markerClassName: 'hasDatepicker',
    maxRows: 4,
    _widgetDatepicker: function () {
      return this.dpDiv;
    },
    setDefaults: function (t) {
      return n(this._defaults, t || {}), this;
    },
    _attachDatepicker: function (e, i) {
      var s, n, a;
      (s = e.nodeName.toLowerCase()),
        (n = 'div' === s || 'span' === s),
        e.id || ((this.uuid += 1), (e.id = 'dp' + this.uuid)),
        (a = this._newInst(t(e), n)),
        (a.settings = t.extend({}, i || {})),
        'input' === s ? this._connectDatepicker(e, a) : n && this._inlineDatepicker(e, a);
    },
    _newInst: function (e, i) {
      var n = e[0].id.replace(/([^A-Za-z0-9_\-])/g, '\\\\$1');
      return {
        id: n,
        input: e,
        selectedDay: 0,
        selectedMonth: 0,
        selectedYear: 0,
        drawMonth: 0,
        drawYear: 0,
        inline: i,
        dpDiv: i ? s(t("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
      };
    },
    _connectDatepicker: function (e, i) {
      var s = t(e);
      (i.append = t([])),
        (i.trigger = t([])),
        s.hasClass(this.markerClassName) ||
          (this._attachments(s, i),
          s.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp),
          this._autoSize(i),
          t.data(e, o, i),
          i.settings.disabled && this._disableDatepicker(e));
    },
    _attachments: function (e, i) {
      var s,
        n,
        a,
        o = this._get(i, 'appendText'),
        r = this._get(i, 'isRTL');
      i.append && i.append.remove(),
        o && ((i.append = t("<span class='" + this._appendClass + "'>" + o + '</span>')), e[r ? 'before' : 'after'](i.append)),
        e.unbind('focus', this._showDatepicker),
        i.trigger && i.trigger.remove(),
        (s = this._get(i, 'showOn')),
        ('focus' === s || 'both' === s) && e.focus(this._showDatepicker),
        ('button' === s || 'both' === s) &&
          ((n = this._get(i, 'buttonText')),
          (a = this._get(i, 'buttonImage')),
          (i.trigger = t(
            this._get(i, 'buttonImageOnly')
              ? t('<img/>').addClass(this._triggerClass).attr({ src: a, alt: n, title: n })
              : t("<button type='button'></button>")
                  .addClass(this._triggerClass)
                  .html(a ? t('<img/>').attr({ src: a, alt: n, title: n }) : n)
          )),
          e[r ? 'before' : 'after'](i.trigger),
          i.trigger.click(function () {
            return (
              t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0]
                ? t.datepicker._hideDatepicker()
                : t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0]
                ? (t.datepicker._hideDatepicker(), t.datepicker._showDatepicker(e[0]))
                : t.datepicker._showDatepicker(e[0]),
              !1
            );
          }));
    },
    _autoSize: function (t) {
      if (this._get(t, 'autoSize') && !t.inline) {
        var e,
          i,
          s,
          n,
          a = new Date(2009, 11, 20),
          o = this._get(t, 'dateFormat');
        o.match(/[DM]/) &&
          ((e = function (t) {
            for (i = 0, s = 0, n = 0; t.length > n; n++) t[n].length > i && ((i = t[n].length), (s = n));
            return s;
          }),
          a.setMonth(e(this._get(t, o.match(/MM/) ? 'monthNames' : 'monthNamesShort'))),
          a.setDate(e(this._get(t, o.match(/DD/) ? 'dayNames' : 'dayNamesShort')) + 20 - a.getDay())),
          t.input.attr('size', this._formatDate(t, a).length);
      }
    },
    _inlineDatepicker: function (e, i) {
      var s = t(e);
      s.hasClass(this.markerClassName) ||
        (s.addClass(this.markerClassName).append(i.dpDiv),
        t.data(e, o, i),
        this._setDate(i, this._getDefaultDate(i), !0),
        this._updateDatepicker(i),
        this._updateAlternate(i),
        i.settings.disabled && this._disableDatepicker(e),
        i.dpDiv.css('display', 'block'));
    },
    _dialogDatepicker: function (e, i, s, a, r) {
      var h,
        l,
        u,
        c,
        d,
        p = this._dialogInst;
      return (
        p ||
          ((this.uuid += 1),
          (h = 'dp' + this.uuid),
          (this._dialogInput = t("<input type='text' id='" + h + "' style='position: absolute; top: -100px; width: 0px;'/>")),
          this._dialogInput.keydown(this._doKeyDown),
          t('body').append(this._dialogInput),
          (p = this._dialogInst = this._newInst(this._dialogInput, !1)),
          (p.settings = {}),
          t.data(this._dialogInput[0], o, p)),
        n(p.settings, a || {}),
        (i = i && i.constructor === Date ? this._formatDate(p, i) : i),
        this._dialogInput.val(i),
        (this._pos = r ? (r.length ? r : [r.pageX, r.pageY]) : null),
        this._pos ||
          ((l = document.documentElement.clientWidth),
          (u = document.documentElement.clientHeight),
          (c = document.documentElement.scrollLeft || document.body.scrollLeft),
          (d = document.documentElement.scrollTop || document.body.scrollTop),
          (this._pos = [l / 2 - 100 + c, u / 2 - 150 + d])),
        this._dialogInput.css('left', this._pos[0] + 20 + 'px').css('top', this._pos[1] + 'px'),
        (p.settings.onSelect = s),
        (this._inDialog = !0),
        this.dpDiv.addClass(this._dialogClass),
        this._showDatepicker(this._dialogInput[0]),
        t.blockUI && t.blockUI(this.dpDiv),
        t.data(this._dialogInput[0], o, p),
        this
      );
    },
    _destroyDatepicker: function (e) {
      var i,
        s = t(e),
        n = t.data(e, o);
      s.hasClass(this.markerClassName) &&
        ((i = e.nodeName.toLowerCase()),
        t.removeData(e, o),
        'input' === i
          ? (n.append.remove(),
            n.trigger.remove(),
            s.removeClass(this.markerClassName).unbind('focus', this._showDatepicker).unbind('keydown', this._doKeyDown).unbind('keypress', this._doKeyPress).unbind('keyup', this._doKeyUp))
          : ('div' === i || 'span' === i) && s.removeClass(this.markerClassName).empty());
    },
    _enableDatepicker: function (e) {
      var i,
        s,
        n = t(e),
        a = t.data(e, o);
      n.hasClass(this.markerClassName) &&
        ((i = e.nodeName.toLowerCase()),
        'input' === i
          ? ((e.disabled = !1),
            a.trigger
              .filter('button')
              .each(function () {
                this.disabled = !1;
              })
              .end()
              .filter('img')
              .css({ opacity: '1.0', cursor: '' }))
          : ('div' === i || 'span' === i) &&
            ((s = n.children('.' + this._inlineClass)), s.children().removeClass('ui-state-disabled'), s.find('select.ui-datepicker-month, select.ui-datepicker-year').prop('disabled', !1)),
        (this._disabledInputs = t.map(this._disabledInputs, function (t) {
          return t === e ? null : t;
        })));
    },
    _disableDatepicker: function (e) {
      var i,
        s,
        n = t(e),
        a = t.data(e, o);
      n.hasClass(this.markerClassName) &&
        ((i = e.nodeName.toLowerCase()),
        'input' === i
          ? ((e.disabled = !0),
            a.trigger
              .filter('button')
              .each(function () {
                this.disabled = !0;
              })
              .end()
              .filter('img')
              .css({ opacity: '0.5', cursor: 'default' }))
          : ('div' === i || 'span' === i) &&
            ((s = n.children('.' + this._inlineClass)), s.children().addClass('ui-state-disabled'), s.find('select.ui-datepicker-month, select.ui-datepicker-year').prop('disabled', !0)),
        (this._disabledInputs = t.map(this._disabledInputs, function (t) {
          return t === e ? null : t;
        })),
        (this._disabledInputs[this._disabledInputs.length] = e));
    },
    _isDisabledDatepicker: function (t) {
      if (!t) return !1;
      for (var e = 0; this._disabledInputs.length > e; e++) if (this._disabledInputs[e] === t) return !0;
      return !1;
    },
    _getInst: function (e) {
      try {
        return t.data(e, o);
      } catch (i) {
        throw 'Missing instance data for this datepicker';
      }
    },
    _optionDatepicker: function (i, s, a) {
      var o,
        r,
        h,
        l,
        u = this._getInst(i);
      return 2 === arguments.length && 'string' == typeof s
        ? 'defaults' === s
          ? t.extend({}, t.datepicker._defaults)
          : u
          ? 'all' === s
            ? t.extend({}, u.settings)
            : this._get(u, s)
          : null
        : ((o = s || {}),
          'string' == typeof s && ((o = {}), (o[s] = a)),
          u &&
            (this._curInst === u && this._hideDatepicker(),
            (r = this._getDateDatepicker(i, !0)),
            (h = this._getMinMaxDate(u, 'min')),
            (l = this._getMinMaxDate(u, 'max')),
            n(u.settings, o),
            null !== h && o.dateFormat !== e && o.minDate === e && (u.settings.minDate = this._formatDate(u, h)),
            null !== l && o.dateFormat !== e && o.maxDate === e && (u.settings.maxDate = this._formatDate(u, l)),
            'disabled' in o && (o.disabled ? this._disableDatepicker(i) : this._enableDatepicker(i)),
            this._attachments(t(i), u),
            this._autoSize(u),
            this._setDate(u, r),
            this._updateAlternate(u),
            this._updateDatepicker(u)),
          e);
    },
    _changeDatepicker: function (t, e, i) {
      this._optionDatepicker(t, e, i);
    },
    _refreshDatepicker: function (t) {
      var e = this._getInst(t);
      e && this._updateDatepicker(e);
    },
    _setDateDatepicker: function (t, e) {
      var i = this._getInst(t);
      i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i));
    },
    _getDateDatepicker: function (t, e) {
      var i = this._getInst(t);
      return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null;
    },
    _doKeyDown: function (e) {
      var i,
        s,
        n,
        a = t.datepicker._getInst(e.target),
        o = !0,
        r = a.dpDiv.is('.ui-datepicker-rtl');
      if (((a._keyEvent = !0), t.datepicker._datepickerShowing))
        switch (e.keyCode) {
          case 9:
            t.datepicker._hideDatepicker(), (o = !1);
            break;
          case 13:
            return (
              (n = t('td.' + t.datepicker._dayOverClass + ':not(.' + t.datepicker._currentClass + ')', a.dpDiv)),
              n[0] && t.datepicker._selectDay(e.target, a.selectedMonth, a.selectedYear, n[0]),
              (i = t.datepicker._get(a, 'onSelect')),
              i ? ((s = t.datepicker._formatDate(a)), i.apply(a.input ? a.input[0] : null, [s, a])) : t.datepicker._hideDatepicker(),
              !1
            );
          case 27:
            t.datepicker._hideDatepicker();
            break;
          case 33:
            t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(a, 'stepBigMonths') : -t.datepicker._get(a, 'stepMonths'), 'M');
            break;
          case 34:
            t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(a, 'stepBigMonths') : +t.datepicker._get(a, 'stepMonths'), 'M');
            break;
          case 35:
            (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target), (o = e.ctrlKey || e.metaKey);
            break;
          case 36:
            (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target), (o = e.ctrlKey || e.metaKey);
            break;
          case 37:
            (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? 1 : -1, 'D'),
              (o = e.ctrlKey || e.metaKey),
              e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(a, 'stepBigMonths') : -t.datepicker._get(a, 'stepMonths'), 'M');
            break;
          case 38:
            (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, 'D'), (o = e.ctrlKey || e.metaKey);
            break;
          case 39:
            (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? -1 : 1, 'D'),
              (o = e.ctrlKey || e.metaKey),
              e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(a, 'stepBigMonths') : +t.datepicker._get(a, 'stepMonths'), 'M');
            break;
          case 40:
            (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, 'D'), (o = e.ctrlKey || e.metaKey);
            break;
          default:
            o = !1;
        }
      else 36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : (o = !1);
      o && (e.preventDefault(), e.stopPropagation());
    },
    _doKeyPress: function (i) {
      var s,
        n,
        a = t.datepicker._getInst(i.target);
      return t.datepicker._get(a, 'constrainInput')
        ? ((s = t.datepicker._possibleChars(t.datepicker._get(a, 'dateFormat'))),
          (n = String.fromCharCode(null == i.charCode ? i.keyCode : i.charCode)),
          i.ctrlKey || i.metaKey || ' ' > n || !s || s.indexOf(n) > -1)
        : e;
    },
    _doKeyUp: function (e) {
      var i,
        s = t.datepicker._getInst(e.target);
      if (s.input.val() !== s.lastVal)
        try {
          (i = t.datepicker.parseDate(t.datepicker._get(s, 'dateFormat'), s.input ? s.input.val() : null, t.datepicker._getFormatConfig(s))),
            i && (t.datepicker._setDateFromField(s), t.datepicker._updateAlternate(s), t.datepicker._updateDatepicker(s));
        } catch (n) {}
      return !0;
    },
    _showDatepicker: function (e) {
      if (((e = e.target || e), 'input' !== e.nodeName.toLowerCase() && (e = t('input', e.parentNode)[0]), !t.datepicker._isDisabledDatepicker(e) && t.datepicker._lastInput !== e)) {
        var i, s, a, o, r, h, l;
        (i = t.datepicker._getInst(e)),
          t.datepicker._curInst &&
            t.datepicker._curInst !== i &&
            (t.datepicker._curInst.dpDiv.stop(!0, !0), i && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])),
          (s = t.datepicker._get(i, 'beforeShow')),
          (a = s ? s.apply(e, [e, i]) : {}),
          a !== !1 &&
            (n(i.settings, a),
            (i.lastVal = null),
            (t.datepicker._lastInput = e),
            t.datepicker._setDateFromField(i),
            t.datepicker._inDialog && (e.value = ''),
            t.datepicker._pos || ((t.datepicker._pos = t.datepicker._findPos(e)), (t.datepicker._pos[1] += e.offsetHeight)),
            (o = !1),
            t(e)
              .parents()
              .each(function () {
                return (o |= 'fixed' === t(this).css('position')), !o;
              }),
            (r = { left: t.datepicker._pos[0], top: t.datepicker._pos[1] }),
            (t.datepicker._pos = null),
            i.dpDiv.empty(),
            i.dpDiv.css({ position: 'absolute', display: 'block', top: '-1000px' }),
            t.datepicker._updateDatepicker(i),
            (r = t.datepicker._checkOffset(i, r, o)),
            i.dpDiv.css({ position: t.datepicker._inDialog && t.blockUI ? 'static' : o ? 'fixed' : 'absolute', display: 'none', left: r.left + 'px', top: r.top + 'px' }),
            i.inline ||
              ((h = t.datepicker._get(i, 'showAnim')),
              (l = t.datepicker._get(i, 'duration')),
              i.dpDiv.zIndex(t(e).zIndex() + 1),
              (t.datepicker._datepickerShowing = !0),
              t.effects && t.effects.effect[h] ? i.dpDiv.show(h, t.datepicker._get(i, 'showOptions'), l) : i.dpDiv[h || 'show'](h ? l : null),
              t.datepicker._shouldFocusInput(i) && i.input.focus(),
              (t.datepicker._curInst = i)));
      }
    },
    _updateDatepicker: function (e) {
      (this.maxRows = 4), (a = e), e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e), e.dpDiv.find('.' + this._dayOverClass + ' a').mouseover();
      var i,
        s = this._getNumberOfMonths(e),
        n = s[1],
        o = 17;
      e.dpDiv.removeClass('ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4').width(''),
        n > 1 && e.dpDiv.addClass('ui-datepicker-multi-' + n).css('width', o * n + 'em'),
        e.dpDiv[(1 !== s[0] || 1 !== s[1] ? 'add' : 'remove') + 'Class']('ui-datepicker-multi'),
        e.dpDiv[(this._get(e, 'isRTL') ? 'add' : 'remove') + 'Class']('ui-datepicker-rtl'),
        e === t.datepicker._curInst && t.datepicker._datepickerShowing && t.datepicker._shouldFocusInput(e) && e.input.focus(),
        e.yearshtml &&
          ((i = e.yearshtml),
          setTimeout(function () {
            i === e.yearshtml && e.yearshtml && e.dpDiv.find('select.ui-datepicker-year:first').replaceWith(e.yearshtml), (i = e.yearshtml = null);
          }, 0));
    },
    _shouldFocusInput: function (t) {
      return t.input && t.input.is(':visible') && !t.input.is(':disabled') && !t.input.is(':focus');
    },
    _checkOffset: function (e, i, s) {
      var n = e.dpDiv.outerWidth(),
        a = e.dpDiv.outerHeight(),
        o = e.input ? e.input.outerWidth() : 0,
        r = e.input ? e.input.outerHeight() : 0,
        h = document.documentElement.clientWidth + (s ? 0 : t(document).scrollLeft()),
        l = document.documentElement.clientHeight + (s ? 0 : t(document).scrollTop());
      return (
        (i.left -= this._get(e, 'isRTL') ? n - o : 0),
        (i.left -= s && i.left === e.input.offset().left ? t(document).scrollLeft() : 0),
        (i.top -= s && i.top === e.input.offset().top + r ? t(document).scrollTop() : 0),
        (i.left -= Math.min(i.left, i.left + n > h && h > n ? Math.abs(i.left + n - h) : 0)),
        (i.top -= Math.min(i.top, i.top + a > l && l > a ? Math.abs(a + r) : 0)),
        i
      );
    },
    _findPos: function (e) {
      for (var i, s = this._getInst(e), n = this._get(s, 'isRTL'); e && ('hidden' === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e)); ) e = e[n ? 'previousSibling' : 'nextSibling'];
      return (i = t(e).offset()), [i.left, i.top];
    },
    _hideDatepicker: function (e) {
      var i,
        s,
        n,
        a,
        r = this._curInst;
      !r ||
        (e && r !== t.data(e, o)) ||
        (this._datepickerShowing &&
          ((i = this._get(r, 'showAnim')),
          (s = this._get(r, 'duration')),
          (n = function () {
            t.datepicker._tidyDialog(r);
          }),
          t.effects && (t.effects.effect[i] || t.effects[i])
            ? r.dpDiv.hide(i, t.datepicker._get(r, 'showOptions'), s, n)
            : r.dpDiv['slideDown' === i ? 'slideUp' : 'fadeIn' === i ? 'fadeOut' : 'hide'](i ? s : null, n),
          i || n(),
          (this._datepickerShowing = !1),
          (a = this._get(r, 'onClose')),
          a && a.apply(r.input ? r.input[0] : null, [r.input ? r.input.val() : '', r]),
          (this._lastInput = null),
          this._inDialog && (this._dialogInput.css({ position: 'absolute', left: '0', top: '-100px' }), t.blockUI && (t.unblockUI(), t('body').append(this.dpDiv))),
          (this._inDialog = !1)));
    },
    _tidyDialog: function (t) {
      t.dpDiv.removeClass(this._dialogClass).unbind('.ui-datepicker-calendar');
    },
    _checkExternalClick: function (e) {
      if (t.datepicker._curInst) {
        var i = t(e.target),
          s = t.datepicker._getInst(i[0]);
        ((i[0].id !== t.datepicker._mainDivId &&
          0 === i.parents('#' + t.datepicker._mainDivId).length &&
          !i.hasClass(t.datepicker.markerClassName) &&
          !i.closest('.' + t.datepicker._triggerClass).length &&
          t.datepicker._datepickerShowing &&
          (!t.datepicker._inDialog || !t.blockUI)) ||
          (i.hasClass(t.datepicker.markerClassName) && t.datepicker._curInst !== s)) &&
          t.datepicker._hideDatepicker();
      }
    },
    _adjustDate: function (e, i, s) {
      var n = t(e),
        a = this._getInst(n[0]);
      this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(a, i + ('M' === s ? this._get(a, 'showCurrentAtPos') : 0), s), this._updateDatepicker(a));
    },
    _gotoToday: function (e) {
      var i,
        s = t(e),
        n = this._getInst(s[0]);
      this._get(n, 'gotoCurrent') && n.currentDay
        ? ((n.selectedDay = n.currentDay), (n.drawMonth = n.selectedMonth = n.currentMonth), (n.drawYear = n.selectedYear = n.currentYear))
        : ((i = new Date()), (n.selectedDay = i.getDate()), (n.drawMonth = n.selectedMonth = i.getMonth()), (n.drawYear = n.selectedYear = i.getFullYear())),
        this._notifyChange(n),
        this._adjustDate(s);
    },
    _selectMonthYear: function (e, i, s) {
      var n = t(e),
        a = this._getInst(n[0]);
      (a['selected' + ('M' === s ? 'Month' : 'Year')] = a['draw' + ('M' === s ? 'Month' : 'Year')] = parseInt(i.options[i.selectedIndex].value, 10)), this._notifyChange(a), this._adjustDate(n);
    },
    _selectDay: function (e, i, s, n) {
      var a,
        o = t(e);
      t(n).hasClass(this._unselectableClass) ||
        this._isDisabledDatepicker(o[0]) ||
        ((a = this._getInst(o[0])),
        (a.selectedDay = a.currentDay = t('a', n).html()),
        (a.selectedMonth = a.currentMonth = i),
        (a.selectedYear = a.currentYear = s),
        this._selectDate(e, this._formatDate(a, a.currentDay, a.currentMonth, a.currentYear)));
    },
    _clearDate: function (e) {
      var i = t(e);
      this._selectDate(i, '');
    },
    _selectDate: function (e, i) {
      var s,
        n = t(e),
        a = this._getInst(n[0]);
      (i = null != i ? i : this._formatDate(a)),
        a.input && a.input.val(i),
        this._updateAlternate(a),
        (s = this._get(a, 'onSelect')),
        s ? s.apply(a.input ? a.input[0] : null, [i, a]) : a.input && a.input.trigger('change'),
        a.inline ? this._updateDatepicker(a) : (this._hideDatepicker(), (this._lastInput = a.input[0]), 'object' != typeof a.input[0] && a.input.focus(), (this._lastInput = null));
    },
    _updateAlternate: function (e) {
      var i,
        s,
        n,
        a = this._get(e, 'altField');
      a &&
        ((i = this._get(e, 'altFormat') || this._get(e, 'dateFormat')),
        (s = this._getDate(e)),
        (n = this.formatDate(i, s, this._getFormatConfig(e))),
        t(a).each(function () {
          t(this).val(n);
        }));
    },
    noWeekends: function (t) {
      var e = t.getDay();
      return [e > 0 && 6 > e, ''];
    },
    iso8601Week: function (t) {
      var e,
        i = new Date(t.getTime());
      return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), (e = i.getTime()), i.setMonth(0), i.setDate(1), Math.floor(Math.round((e - i) / 864e5) / 7) + 1;
    },
    parseDate: function (i, s, n) {
      if (null == i || null == s) throw 'Invalid arguments';
      if (((s = 'object' == typeof s ? '' + s : s + ''), '' === s)) return null;
      var a,
        o,
        r,
        h,
        l = 0,
        u = (n ? n.shortYearCutoff : null) || this._defaults.shortYearCutoff,
        c = 'string' != typeof u ? u : (new Date().getFullYear() % 100) + parseInt(u, 10),
        d = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
        p = (n ? n.dayNames : null) || this._defaults.dayNames,
        f = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
        m = (n ? n.monthNames : null) || this._defaults.monthNames,
        g = -1,
        v = -1,
        _ = -1,
        b = -1,
        y = !1,
        k = function (t) {
          var e = i.length > a + 1 && i.charAt(a + 1) === t;
          return e && a++, e;
        },
        x = function (t) {
          var e = k(t),
            i = '@' === t ? 14 : '!' === t ? 20 : 'y' === t && e ? 4 : 'o' === t ? 3 : 2,
            n = RegExp('^\\d{1,' + i + '}'),
            a = s.substring(l).match(n);
          if (!a) throw 'Missing number at position ' + l;
          return (l += a[0].length), parseInt(a[0], 10);
        },
        w = function (i, n, a) {
          var o = -1,
            r = t
              .map(k(i) ? a : n, function (t, e) {
                return [[e, t]];
              })
              .sort(function (t, e) {
                return -(t[1].length - e[1].length);
              });
          if (
            (t.each(r, function (t, i) {
              var n = i[1];
              return s.substr(l, n.length).toLowerCase() === n.toLowerCase() ? ((o = i[0]), (l += n.length), !1) : e;
            }),
            -1 !== o)
          )
            return o + 1;
          throw 'Unknown name at position ' + l;
        },
        D = function () {
          if (s.charAt(l) !== i.charAt(a)) throw 'Unexpected literal at position ' + l;
          l++;
        };
      for (a = 0; i.length > a; a++)
        if (y) "'" !== i.charAt(a) || k("'") ? D() : (y = !1);
        else
          switch (i.charAt(a)) {
            case 'd':
              _ = x('d');
              break;
            case 'D':
              w('D', d, p);
              break;
            case 'o':
              b = x('o');
              break;
            case 'm':
              v = x('m');
              break;
            case 'M':
              v = w('M', f, m);
              break;
            case 'y':
              g = x('y');
              break;
            case '@':
              (h = new Date(x('@'))), (g = h.getFullYear()), (v = h.getMonth() + 1), (_ = h.getDate());
              break;
            case '!':
              (h = new Date((x('!') - this._ticksTo1970) / 1e4)), (g = h.getFullYear()), (v = h.getMonth() + 1), (_ = h.getDate());
              break;
            case "'":
              k("'") ? D() : (y = !0);
              break;
            default:
              D();
          }
      if (s.length > l && ((r = s.substr(l)), !/^\s+/.test(r))) throw 'Extra/unparsed characters found in date: ' + r;
      if ((-1 === g ? (g = new Date().getFullYear()) : 100 > g && (g += new Date().getFullYear() - (new Date().getFullYear() % 100) + (c >= g ? 0 : -100)), b > -1))
        for (v = 1, _ = b; ; ) {
          if (((o = this._getDaysInMonth(g, v - 1)), o >= _)) break;
          v++, (_ -= o);
        }
      if (((h = this._daylightSavingAdjust(new Date(g, v - 1, _))), h.getFullYear() !== g || h.getMonth() + 1 !== v || h.getDate() !== _)) throw 'Invalid date';
      return h;
    },
    ATOM: 'yy-mm-dd',
    COOKIE: 'D, dd M yy',
    ISO_8601: 'yy-mm-dd',
    RFC_822: 'D, d M y',
    RFC_850: 'DD, dd-M-y',
    RFC_1036: 'D, d M y',
    RFC_1123: 'D, d M yy',
    RFC_2822: 'D, d M yy',
    RSS: 'D, d M y',
    TICKS: '!',
    TIMESTAMP: '@',
    W3C: 'yy-mm-dd',
    _ticksTo1970: 1e7 * 60 * 60 * 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
    formatDate: function (t, e, i) {
      if (!e) return '';
      var s,
        n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
        a = (i ? i.dayNames : null) || this._defaults.dayNames,
        o = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
        r = (i ? i.monthNames : null) || this._defaults.monthNames,
        h = function (e) {
          var i = t.length > s + 1 && t.charAt(s + 1) === e;
          return i && s++, i;
        },
        l = function (t, e, i) {
          var s = '' + e;
          if (h(t)) for (; i > s.length; ) s = '0' + s;
          return s;
        },
        u = function (t, e, i, s) {
          return h(t) ? s[e] : i[e];
        },
        c = '',
        d = !1;
      if (e)
        for (s = 0; t.length > s; s++)
          if (d) "'" !== t.charAt(s) || h("'") ? (c += t.charAt(s)) : (d = !1);
          else
            switch (t.charAt(s)) {
              case 'd':
                c += l('d', e.getDate(), 2);
                break;
              case 'D':
                c += u('D', e.getDay(), n, a);
                break;
              case 'o':
                c += l('o', Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                break;
              case 'm':
                c += l('m', e.getMonth() + 1, 2);
                break;
              case 'M':
                c += u('M', e.getMonth(), o, r);
                break;
              case 'y':
                c += h('y') ? e.getFullYear() : (10 > e.getYear() % 100 ? '0' : '') + (e.getYear() % 100);
                break;
              case '@':
                c += e.getTime();
                break;
              case '!':
                c += 1e4 * e.getTime() + this._ticksTo1970;
                break;
              case "'":
                h("'") ? (c += "'") : (d = !0);
                break;
              default:
                c += t.charAt(s);
            }
      return c;
    },
    _possibleChars: function (t) {
      var e,
        i = '',
        s = !1,
        n = function (i) {
          var s = t.length > e + 1 && t.charAt(e + 1) === i;
          return s && e++, s;
        };
      for (e = 0; t.length > e; e++)
        if (s) "'" !== t.charAt(e) || n("'") ? (i += t.charAt(e)) : (s = !1);
        else
          switch (t.charAt(e)) {
            case 'd':
            case 'm':
            case 'y':
            case '@':
              i += '0123456789';
              break;
            case 'D':
            case 'M':
              return null;
            case "'":
              n("'") ? (i += "'") : (s = !0);
              break;
            default:
              i += t.charAt(e);
          }
      return i;
    },
    _get: function (t, i) {
      return t.settings[i] !== e ? t.settings[i] : this._defaults[i];
    },
    _setDateFromField: function (t, e) {
      if (t.input.val() !== t.lastVal) {
        var i = this._get(t, 'dateFormat'),
          s = (t.lastVal = t.input ? t.input.val() : null),
          n = this._getDefaultDate(t),
          a = n,
          o = this._getFormatConfig(t);
        try {
          a = this.parseDate(i, s, o) || n;
        } catch (r) {
          s = e ? '' : s;
        }
        (t.selectedDay = a.getDate()),
          (t.drawMonth = t.selectedMonth = a.getMonth()),
          (t.drawYear = t.selectedYear = a.getFullYear()),
          (t.currentDay = s ? a.getDate() : 0),
          (t.currentMonth = s ? a.getMonth() : 0),
          (t.currentYear = s ? a.getFullYear() : 0),
          this._adjustInstDate(t);
      }
    },
    _getDefaultDate: function (t) {
      return this._restrictMinMax(t, this._determineDate(t, this._get(t, 'defaultDate'), new Date()));
    },
    _determineDate: function (e, i, s) {
      var n = function (t) {
          var e = new Date();
          return e.setDate(e.getDate() + t), e;
        },
        a = function (i) {
          try {
            return t.datepicker.parseDate(t.datepicker._get(e, 'dateFormat'), i, t.datepicker._getFormatConfig(e));
          } catch (s) {}
          for (
            var n = (i.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date(),
              a = n.getFullYear(),
              o = n.getMonth(),
              r = n.getDate(),
              h = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
              l = h.exec(i);
            l;

          ) {
            switch (l[2] || 'd') {
              case 'd':
              case 'D':
                r += parseInt(l[1], 10);
                break;
              case 'w':
              case 'W':
                r += 7 * parseInt(l[1], 10);
                break;
              case 'm':
              case 'M':
                (o += parseInt(l[1], 10)), (r = Math.min(r, t.datepicker._getDaysInMonth(a, o)));
                break;
              case 'y':
              case 'Y':
                (a += parseInt(l[1], 10)), (r = Math.min(r, t.datepicker._getDaysInMonth(a, o)));
            }
            l = h.exec(i);
          }
          return new Date(a, o, r);
        },
        o = null == i || '' === i ? s : 'string' == typeof i ? a(i) : 'number' == typeof i ? (isNaN(i) ? s : n(i)) : new Date(i.getTime());
      return (o = o && 'Invalid Date' == '' + o ? s : o), o && (o.setHours(0), o.setMinutes(0), o.setSeconds(0), o.setMilliseconds(0)), this._daylightSavingAdjust(o);
    },
    _daylightSavingAdjust: function (t) {
      return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null;
    },
    _setDate: function (t, e, i) {
      var s = !e,
        n = t.selectedMonth,
        a = t.selectedYear,
        o = this._restrictMinMax(t, this._determineDate(t, e, new Date()));
      (t.selectedDay = t.currentDay = o.getDate()),
        (t.drawMonth = t.selectedMonth = t.currentMonth = o.getMonth()),
        (t.drawYear = t.selectedYear = t.currentYear = o.getFullYear()),
        (n === t.selectedMonth && a === t.selectedYear) || i || this._notifyChange(t),
        this._adjustInstDate(t),
        t.input && t.input.val(s ? '' : this._formatDate(t));
    },
    _getDate: function (t) {
      var e = !t.currentYear || (t.input && '' === t.input.val()) ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
      return e;
    },
    _attachHandlers: function (e) {
      var i = this._get(e, 'stepMonths'),
        s = '#' + e.id.replace(/\\\\/g, '\\');
      e.dpDiv.find('[data-handler]').map(function () {
        var e = {
          prev: function () {
            t.datepicker._adjustDate(s, -i, 'M');
          },
          next: function () {
            t.datepicker._adjustDate(s, +i, 'M');
          },
          hide: function () {
            t.datepicker._hideDatepicker();
          },
          today: function () {
            t.datepicker._gotoToday(s);
          },
          selectDay: function () {
            return t.datepicker._selectDay(s, +this.getAttribute('data-month'), +this.getAttribute('data-year'), this), !1;
          },
          selectMonth: function () {
            return t.datepicker._selectMonthYear(s, this, 'M'), !1;
          },
          selectYear: function () {
            return t.datepicker._selectMonthYear(s, this, 'Y'), !1;
          }
        };
        t(this).bind(this.getAttribute('data-event'), e[this.getAttribute('data-handler')]);
      });
    },
    _generateHTML: function (t) {
      var e,
        i,
        s,
        n,
        a,
        o,
        r,
        h,
        l,
        u,
        c,
        d,
        p,
        f,
        m,
        g,
        v,
        _,
        b,
        y,
        k,
        x,
        w,
        D,
        C,
        T,
        M,
        S,
        I,
        N,
        P,
        A,
        H,
        z,
        O,
        F,
        E,
        W,
        L,
        R = new Date(),
        j = this._daylightSavingAdjust(new Date(R.getFullYear(), R.getMonth(), R.getDate())),
        Y = this._get(t, 'isRTL'),
        B = this._get(t, 'showButtonPanel'),
        K = this._get(t, 'hideIfNoPrevNext'),
        q = this._get(t, 'navigationAsDateFormat'),
        J = this._getNumberOfMonths(t),
        $ = this._get(t, 'showCurrentAtPos'),
        V = this._get(t, 'stepMonths'),
        U = 1 !== J[0] || 1 !== J[1],
        Q = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
        G = this._getMinMaxDate(t, 'min'),
        X = this._getMinMaxDate(t, 'max'),
        Z = t.drawMonth - $,
        te = t.drawYear;
      if ((0 > Z && ((Z += 12), te--), X))
        for (e = this._daylightSavingAdjust(new Date(X.getFullYear(), X.getMonth() - J[0] * J[1] + 1, X.getDate())), e = G && G > e ? G : e; this._daylightSavingAdjust(new Date(te, Z, 1)) > e; )
          Z--, 0 > Z && ((Z = 11), te--);
      for (
        t.drawMonth = Z,
          t.drawYear = te,
          i = this._get(t, 'prevText'),
          i = q ? this.formatDate(i, this._daylightSavingAdjust(new Date(te, Z - V, 1)), this._getFormatConfig(t)) : i,
          s = this._canAdjustMonth(t, -1, te, Z)
            ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" +
              i +
              "'><span class='ui-icon ui-icon-circle-triangle-" +
              (Y ? 'e' : 'w') +
              "'>" +
              i +
              '</span></a>'
            : K
            ? ''
            : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? 'e' : 'w') + "'>" + i + '</span></a>',
          n = this._get(t, 'nextText'),
          n = q ? this.formatDate(n, this._daylightSavingAdjust(new Date(te, Z + V, 1)), this._getFormatConfig(t)) : n,
          a = this._canAdjustMonth(t, 1, te, Z)
            ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" +
              n +
              "'><span class='ui-icon ui-icon-circle-triangle-" +
              (Y ? 'w' : 'e') +
              "'>" +
              n +
              '</span></a>'
            : K
            ? ''
            : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? 'w' : 'e') + "'>" + n + '</span></a>',
          o = this._get(t, 'currentText'),
          r = this._get(t, 'gotoCurrent') && t.currentDay ? Q : j,
          o = q ? this.formatDate(o, r, this._getFormatConfig(t)) : o,
          h = t.inline
            ? ''
            : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, 'closeText') + '</button>',
          l = B
            ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" +
              (Y ? h : '') +
              (this._isInRange(t, r)
                ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + o + '</button>'
                : '') +
              (Y ? '' : h) +
              '</div>'
            : '',
          u = parseInt(this._get(t, 'firstDay'), 10),
          u = isNaN(u) ? 0 : u,
          c = this._get(t, 'showWeek'),
          d = this._get(t, 'dayNames'),
          p = this._get(t, 'dayNamesMin'),
          f = this._get(t, 'monthNames'),
          m = this._get(t, 'monthNamesShort'),
          g = this._get(t, 'beforeShowDay'),
          v = this._get(t, 'showOtherMonths'),
          _ = this._get(t, 'selectOtherMonths'),
          b = this._getDefaultDate(t),
          y = '',
          x = 0;
        J[0] > x;
        x++
      ) {
        for (w = '', this.maxRows = 4, D = 0; J[1] > D; D++) {
          if (((C = this._daylightSavingAdjust(new Date(te, Z, t.selectedDay))), (T = ' ui-corner-all'), (M = ''), U)) {
            if (((M += "<div class='ui-datepicker-group"), J[1] > 1))
              switch (D) {
                case 0:
                  (M += ' ui-datepicker-group-first'), (T = ' ui-corner-' + (Y ? 'right' : 'left'));
                  break;
                case J[1] - 1:
                  (M += ' ui-datepicker-group-last'), (T = ' ui-corner-' + (Y ? 'left' : 'right'));
                  break;
                default:
                  (M += ' ui-datepicker-group-middle'), (T = '');
              }
            M += "'>";
          }
          for (
            M +=
              "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" +
              T +
              "'>" +
              (/all|left/.test(T) && 0 === x ? (Y ? a : s) : '') +
              (/all|right/.test(T) && 0 === x ? (Y ? s : a) : '') +
              this._generateMonthYearHeader(t, Z, te, G, X, x > 0 || D > 0, f, m) +
              "</div><table class='ui-datepicker-calendar'><thead>" +
              '<tr>',
              S = c ? "<th class='ui-datepicker-week-col'>" + this._get(t, 'weekHeader') + '</th>' : '',
              k = 0;
            7 > k;
            k++
          )
            (I = (k + u) % 7), (S += '<th' + ((k + u + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : '') + '>' + "<span title='" + d[I] + "'>" + p[I] + '</span></th>');
          for (
            M += S + '</tr></thead><tbody>',
              N = this._getDaysInMonth(te, Z),
              te === t.selectedYear && Z === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, N)),
              P = (this._getFirstDayOfMonth(te, Z) - u + 7) % 7,
              A = Math.ceil((P + N) / 7),
              H = U ? (this.maxRows > A ? this.maxRows : A) : A,
              this.maxRows = H,
              z = this._daylightSavingAdjust(new Date(te, Z, 1 - P)),
              O = 0;
            H > O;
            O++
          ) {
            for (M += '<tr>', F = c ? "<td class='ui-datepicker-week-col'>" + this._get(t, 'calculateWeek')(z) + '</td>' : '', k = 0; 7 > k; k++)
              (E = g ? g.apply(t.input ? t.input[0] : null, [z]) : [!0, '']),
                (W = z.getMonth() !== Z),
                (L = (W && !_) || !E[0] || (G && G > z) || (X && z > X)),
                (F +=
                  "<td class='" +
                  ((k + u + 6) % 7 >= 5 ? ' ui-datepicker-week-end' : '') +
                  (W ? ' ui-datepicker-other-month' : '') +
                  ((z.getTime() === C.getTime() && Z === t.selectedMonth && t._keyEvent) || (b.getTime() === z.getTime() && b.getTime() === C.getTime()) ? ' ' + this._dayOverClass : '') +
                  (L ? ' ' + this._unselectableClass + ' ui-state-disabled' : '') +
                  (W && !v ? '' : ' ' + E[1] + (z.getTime() === Q.getTime() ? ' ' + this._currentClass : '') + (z.getTime() === j.getTime() ? ' ui-datepicker-today' : '')) +
                  "'" +
                  ((W && !v) || !E[2] ? '' : " title='" + E[2].replace(/'/g, '&#39;') + "'") +
                  (L ? '' : " data-handler='selectDay' data-event='click' data-month='" + z.getMonth() + "' data-year='" + z.getFullYear() + "'") +
                  '>' +
                  (W && !v
                    ? '&#xa0;'
                    : L
                    ? "<span class='ui-state-default'>" + z.getDate() + '</span>'
                    : "<a class='ui-state-default" +
                      (z.getTime() === j.getTime() ? ' ui-state-highlight' : '') +
                      (z.getTime() === Q.getTime() ? ' ui-state-active' : '') +
                      (W ? ' ui-priority-secondary' : '') +
                      "' href='#'>" +
                      z.getDate() +
                      '</a>') +
                  '</td>'),
                z.setDate(z.getDate() + 1),
                (z = this._daylightSavingAdjust(z));
            M += F + '</tr>';
          }
          Z++, Z > 11 && ((Z = 0), te++), (M += '</tbody></table>' + (U ? '</div>' + (J[0] > 0 && D === J[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : '') : '')), (w += M);
        }
        y += w;
      }
      return (y += l), (t._keyEvent = !1), y;
    },
    _generateMonthYearHeader: function (t, e, i, s, n, a, o, r) {
      var h,
        l,
        u,
        c,
        d,
        p,
        f,
        m,
        g = this._get(t, 'changeMonth'),
        v = this._get(t, 'changeYear'),
        _ = this._get(t, 'showMonthAfterYear'),
        b = "<div class='ui-datepicker-title'>",
        y = '';
      if (a || !g) y += "<span class='ui-datepicker-month'>" + o[e] + '</span>';
      else {
        for (h = s && s.getFullYear() === i, l = n && n.getFullYear() === i, y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", u = 0; 12 > u; u++)
          (!h || u >= s.getMonth()) && (!l || n.getMonth() >= u) && (y += "<option value='" + u + "'" + (u === e ? " selected='selected'" : '') + '>' + r[u] + '</option>');
        y += '</select>';
      }
      if ((_ || (b += y + (!a && g && v ? '' : '&#xa0;')), !t.yearshtml))
        if (((t.yearshtml = ''), a || !v)) b += "<span class='ui-datepicker-year'>" + i + '</span>';
        else {
          for (
            c = this._get(t, 'yearRange').split(':'),
              d = new Date().getFullYear(),
              p = function (t) {
                var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10);
                return isNaN(e) ? d : e;
              },
              f = p(c[0]),
              m = Math.max(f, p(c[1] || '')),
              f = s ? Math.max(f, s.getFullYear()) : f,
              m = n ? Math.min(m, n.getFullYear()) : m,
              t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
            m >= f;
            f++
          )
            t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : '') + '>' + f + '</option>';
          (t.yearshtml += '</select>'), (b += t.yearshtml), (t.yearshtml = null);
        }
      return (b += this._get(t, 'yearSuffix')), _ && (b += (!a && g && v ? '' : '&#xa0;') + y), (b += '</div>');
    },
    _adjustInstDate: function (t, e, i) {
      var s = t.drawYear + ('Y' === i ? e : 0),
        n = t.drawMonth + ('M' === i ? e : 0),
        a = Math.min(t.selectedDay, this._getDaysInMonth(s, n)) + ('D' === i ? e : 0),
        o = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(s, n, a)));
      (t.selectedDay = o.getDate()), (t.drawMonth = t.selectedMonth = o.getMonth()), (t.drawYear = t.selectedYear = o.getFullYear()), ('M' === i || 'Y' === i) && this._notifyChange(t);
    },
    _restrictMinMax: function (t, e) {
      var i = this._getMinMaxDate(t, 'min'),
        s = this._getMinMaxDate(t, 'max'),
        n = i && i > e ? i : e;
      return s && n > s ? s : n;
    },
    _notifyChange: function (t) {
      var e = this._get(t, 'onChangeMonthYear');
      e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t]);
    },
    _getNumberOfMonths: function (t) {
      var e = this._get(t, 'numberOfMonths');
      return null == e ? [1, 1] : 'number' == typeof e ? [1, e] : e;
    },
    _getMinMaxDate: function (t, e) {
      return this._determineDate(t, this._get(t, e + 'Date'), null);
    },
    _getDaysInMonth: function (t, e) {
      return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate();
    },
    _getFirstDayOfMonth: function (t, e) {
      return new Date(t, e, 1).getDay();
    },
    _canAdjustMonth: function (t, e, i, s) {
      var n = this._getNumberOfMonths(t),
        a = this._daylightSavingAdjust(new Date(i, s + (0 > e ? e : n[0] * n[1]), 1));
      return 0 > e && a.setDate(this._getDaysInMonth(a.getFullYear(), a.getMonth())), this._isInRange(t, a);
    },
    _isInRange: function (t, e) {
      var i,
        s,
        n = this._getMinMaxDate(t, 'min'),
        a = this._getMinMaxDate(t, 'max'),
        o = null,
        r = null,
        h = this._get(t, 'yearRange');
      return (
        h && ((i = h.split(':')), (s = new Date().getFullYear()), (o = parseInt(i[0], 10)), (r = parseInt(i[1], 10)), i[0].match(/[+\-].*/) && (o += s), i[1].match(/[+\-].*/) && (r += s)),
        (!n || e.getTime() >= n.getTime()) && (!a || e.getTime() <= a.getTime()) && (!o || e.getFullYear() >= o) && (!r || r >= e.getFullYear())
      );
    },
    _getFormatConfig: function (t) {
      var e = this._get(t, 'shortYearCutoff');
      return (
        (e = 'string' != typeof e ? e : (new Date().getFullYear() % 100) + parseInt(e, 10)),
        {
          shortYearCutoff: e,
          dayNamesShort: this._get(t, 'dayNamesShort'),
          dayNames: this._get(t, 'dayNames'),
          monthNamesShort: this._get(t, 'monthNamesShort'),
          monthNames: this._get(t, 'monthNames')
        }
      );
    },
    _formatDate: function (t, e, i, s) {
      e || ((t.currentDay = t.selectedDay), (t.currentMonth = t.selectedMonth), (t.currentYear = t.selectedYear));
      var n = e ? ('object' == typeof e ? e : this._daylightSavingAdjust(new Date(s, i, e))) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
      return this.formatDate(this._get(t, 'dateFormat'), n, this._getFormatConfig(t));
    }
  }),
    (t.fn.datepicker = function (e) {
      if (!this.length) return this;
      t.datepicker.initialized || (t(document).mousedown(t.datepicker._checkExternalClick), (t.datepicker.initialized = !0)),
        0 === t('#' + t.datepicker._mainDivId).length && t('body').append(t.datepicker.dpDiv);
      var i = Array.prototype.slice.call(arguments, 1);
      return 'string' != typeof e || ('isDisabled' !== e && 'getDate' !== e && 'widget' !== e)
        ? 'option' === e && 2 === arguments.length && 'string' == typeof arguments[1]
          ? t.datepicker['_' + e + 'Datepicker'].apply(t.datepicker, [this[0]].concat(i))
          : this.each(function () {
              'string' == typeof e ? t.datepicker['_' + e + 'Datepicker'].apply(t.datepicker, [this].concat(i)) : t.datepicker._attachDatepicker(this, e);
            })
        : t.datepicker['_' + e + 'Datepicker'].apply(t.datepicker, [this[0]].concat(i));
    }),
    (t.datepicker = new i()),
    (t.datepicker.initialized = !1),
    (t.datepicker.uuid = new Date().getTime()),
    (t.datepicker.version = '1.10.4');
})(jQuery);
(function (e) {
  var t = { buttons: !0, height: !0, maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0, width: !0 },
    i = { maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0 };
  e.widget('ui.dialog', {
    version: '1.10.4',
    options: {
      appendTo: 'body',
      autoOpen: !0,
      buttons: [],
      closeOnEscape: !0,
      closeText: 'close',
      dialogClass: '',
      draggable: !0,
      hide: null,
      height: 'auto',
      maxHeight: null,
      maxWidth: null,
      minHeight: 150,
      minWidth: 150,
      modal: !1,
      position: {
        my: 'center',
        at: 'center',
        of: window,
        collision: 'fit',
        using: function (t) {
          var i = e(this).css(t).offset().top;
          0 > i && e(this).css('top', t.top - i);
        }
      },
      resizable: !0,
      show: null,
      title: null,
      width: 300,
      beforeClose: null,
      close: null,
      drag: null,
      dragStart: null,
      dragStop: null,
      focus: null,
      open: null,
      resize: null,
      resizeStart: null,
      resizeStop: null
    },
    _create: function () {
      (this.originalCss = {
        display: this.element[0].style.display,
        width: this.element[0].style.width,
        minHeight: this.element[0].style.minHeight,
        maxHeight: this.element[0].style.maxHeight,
        height: this.element[0].style.height
      }),
        (this.originalPosition = { parent: this.element.parent(), index: this.element.parent().children().index(this.element) }),
        (this.originalTitle = this.element.attr('title')),
        (this.options.title = this.options.title || this.originalTitle),
        this._createWrapper(),
        this.element.show().removeAttr('title').addClass('ui-dialog-content ui-widget-content').appendTo(this.uiDialog),
        this._createTitlebar(),
        this._createButtonPane(),
        this.options.draggable && e.fn.draggable && this._makeDraggable(),
        this.options.resizable && e.fn.resizable && this._makeResizable(),
        (this._isOpen = !1);
    },
    _init: function () {
      this.options.autoOpen && this.open();
    },
    _appendTo: function () {
      var t = this.options.appendTo;
      return t && (t.jquery || t.nodeType) ? e(t) : this.document.find(t || 'body').eq(0);
    },
    _destroy: function () {
      var e,
        t = this.originalPosition;
      this._destroyOverlay(),
        this.element.removeUniqueId().removeClass('ui-dialog-content ui-widget-content').css(this.originalCss).detach(),
        this.uiDialog.stop(!0, !0).remove(),
        this.originalTitle && this.element.attr('title', this.originalTitle),
        (e = t.parent.children().eq(t.index)),
        e.length && e[0] !== this.element[0] ? e.before(this.element) : t.parent.append(this.element);
    },
    widget: function () {
      return this.uiDialog;
    },
    disable: e.noop,
    enable: e.noop,
    close: function (t) {
      var i,
        s = this;
      if (this._isOpen && this._trigger('beforeClose', t) !== !1) {
        if (((this._isOpen = !1), this._destroyOverlay(), !this.opener.filter(':focusable').focus().length))
          try {
            (i = this.document[0].activeElement), i && 'body' !== i.nodeName.toLowerCase() && e(i).blur();
          } catch (a) {}
        this._hide(this.uiDialog, this.options.hide, function () {
          s._trigger('close', t);
        });
      }
    },
    isOpen: function () {
      return this._isOpen;
    },
    moveToTop: function () {
      this._moveToTop();
    },
    _moveToTop: function (e, t) {
      var i = !!this.uiDialog.nextAll(':visible').insertBefore(this.uiDialog).length;
      return i && !t && this._trigger('focus', e), i;
    },
    open: function () {
      var t = this;
      return this._isOpen
        ? (this._moveToTop() && this._focusTabbable(), undefined)
        : ((this._isOpen = !0),
          (this.opener = e(this.document[0].activeElement)),
          this._size(),
          this._position(),
          this._createOverlay(),
          this._moveToTop(null, !0),
          this._show(this.uiDialog, this.options.show, function () {
            t._focusTabbable(), t._trigger('focus');
          }),
          this._trigger('open'),
          undefined);
    },
    _focusTabbable: function () {
      var e = this.element.find('[autofocus]');
      e.length || (e = this.element.find(':tabbable')),
        e.length || (e = this.uiDialogButtonPane.find(':tabbable')),
        e.length || (e = this.uiDialogTitlebarClose.filter(':tabbable')),
        e.length || (e = this.uiDialog),
        e.eq(0).focus();
    },
    _keepFocus: function (t) {
      function i() {
        var t = this.document[0].activeElement,
          i = this.uiDialog[0] === t || e.contains(this.uiDialog[0], t);
        i || this._focusTabbable();
      }
      t.preventDefault(), i.call(this), this._delay(i);
    },
    _createWrapper: function () {
      (this.uiDialog = e('<div>')
        .addClass('ui-dialog ui-widget ui-widget-content ui-corner-all ui-front ' + this.options.dialogClass)
        .hide()
        .attr({ tabIndex: -1, role: 'dialog' })
        .appendTo(this._appendTo())),
        this._on(this.uiDialog, {
          keydown: function (t) {
            if (this.options.closeOnEscape && !t.isDefaultPrevented() && t.keyCode && t.keyCode === e.ui.keyCode.ESCAPE) return t.preventDefault(), this.close(t), undefined;
            if (t.keyCode === e.ui.keyCode.TAB) {
              var i = this.uiDialog.find(':tabbable'),
                s = i.filter(':first'),
                a = i.filter(':last');
              (t.target !== a[0] && t.target !== this.uiDialog[0]) || t.shiftKey
                ? (t.target !== s[0] && t.target !== this.uiDialog[0]) || !t.shiftKey || (a.focus(1), t.preventDefault())
                : (s.focus(1), t.preventDefault());
            }
          },
          mousedown: function (e) {
            this._moveToTop(e) && this._focusTabbable();
          }
        }),
        this.element.find('[aria-describedby]').length || this.uiDialog.attr({ 'aria-describedby': this.element.uniqueId().attr('id') });
    },
    _createTitlebar: function () {
      var t;
      (this.uiDialogTitlebar = e('<div>').addClass('ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix').prependTo(this.uiDialog)),
        this._on(this.uiDialogTitlebar, {
          mousedown: function (t) {
            e(t.target).closest('.ui-dialog-titlebar-close') || this.uiDialog.focus();
          }
        }),
        (this.uiDialogTitlebarClose = e("<button type='button'></button>")
          .button({ label: this.options.closeText, icons: { primary: 'ui-icon-closethick' }, text: !1 })
          .addClass('ui-dialog-titlebar-close')
          .appendTo(this.uiDialogTitlebar)),
        this._on(this.uiDialogTitlebarClose, {
          click: function (e) {
            e.preventDefault(), this.close(e);
          }
        }),
        (t = e('<span>').uniqueId().addClass('ui-dialog-title').prependTo(this.uiDialogTitlebar)),
        this._title(t),
        this.uiDialog.attr({ 'aria-labelledby': t.attr('id') });
    },
    _title: function (e) {
      this.options.title || e.html('&#160;'), e.text(this.options.title);
    },
    _createButtonPane: function () {
      (this.uiDialogButtonPane = e('<div>').addClass('ui-dialog-buttonpane ui-widget-content ui-helper-clearfix')),
        (this.uiButtonSet = e('<div>').addClass('ui-dialog-buttonset').appendTo(this.uiDialogButtonPane)),
        this._createButtons();
    },
    _createButtons: function () {
      var t = this,
        i = this.options.buttons;
      return (
        this.uiDialogButtonPane.remove(),
        this.uiButtonSet.empty(),
        e.isEmptyObject(i) || (e.isArray(i) && !i.length)
          ? (this.uiDialog.removeClass('ui-dialog-buttons'), undefined)
          : (e.each(i, function (i, s) {
              var a, n;
              (s = e.isFunction(s) ? { click: s, text: i } : s),
                (s = e.extend({ type: 'button' }, s)),
                (a = s.click),
                (s.click = function () {
                  a.apply(t.element[0], arguments);
                }),
                (n = { icons: s.icons, text: s.showText }),
                delete s.icons,
                delete s.showText,
                e('<button></button>', s).button(n).appendTo(t.uiButtonSet);
            }),
            this.uiDialog.addClass('ui-dialog-buttons'),
            this.uiDialogButtonPane.appendTo(this.uiDialog),
            undefined)
      );
    },
    _makeDraggable: function () {
      function t(e) {
        return { position: e.position, offset: e.offset };
      }
      var i = this,
        s = this.options;
      this.uiDialog.draggable({
        cancel: '.ui-dialog-content, .ui-dialog-titlebar-close',
        handle: '.ui-dialog-titlebar',
        containment: 'document',
        start: function (s, a) {
          e(this).addClass('ui-dialog-dragging'), i._blockFrames(), i._trigger('dragStart', s, t(a));
        },
        drag: function (e, s) {
          i._trigger('drag', e, t(s));
        },
        stop: function (a, n) {
          (s.position = [n.position.left - i.document.scrollLeft(), n.position.top - i.document.scrollTop()]),
            e(this).removeClass('ui-dialog-dragging'),
            i._unblockFrames(),
            i._trigger('dragStop', a, t(n));
        }
      });
    },
    _makeResizable: function () {
      function t(e) {
        return { originalPosition: e.originalPosition, originalSize: e.originalSize, position: e.position, size: e.size };
      }
      var i = this,
        s = this.options,
        a = s.resizable,
        n = this.uiDialog.css('position'),
        o = 'string' == typeof a ? a : 'n,e,s,w,se,sw,ne,nw';
      this.uiDialog
        .resizable({
          cancel: '.ui-dialog-content',
          containment: 'document',
          alsoResize: this.element,
          maxWidth: s.maxWidth,
          maxHeight: s.maxHeight,
          minWidth: s.minWidth,
          minHeight: this._minHeight(),
          handles: o,
          start: function (s, a) {
            e(this).addClass('ui-dialog-resizing'), i._blockFrames(), i._trigger('resizeStart', s, t(a));
          },
          resize: function (e, s) {
            i._trigger('resize', e, t(s));
          },
          stop: function (a, n) {
            (s.height = e(this).height()), (s.width = e(this).width()), e(this).removeClass('ui-dialog-resizing'), i._unblockFrames(), i._trigger('resizeStop', a, t(n));
          }
        })
        .css('position', n);
    },
    _minHeight: function () {
      var e = this.options;
      return 'auto' === e.height ? e.minHeight : Math.min(e.minHeight, e.height);
    },
    _position: function () {
      var e = this.uiDialog.is(':visible');
      e || this.uiDialog.show(), this.uiDialog.position(this.options.position), e || this.uiDialog.hide();
    },
    _setOptions: function (s) {
      var a = this,
        n = !1,
        o = {};
      e.each(s, function (e, s) {
        a._setOption(e, s), e in t && (n = !0), e in i && (o[e] = s);
      }),
        n && (this._size(), this._position()),
        this.uiDialog.is(':data(ui-resizable)') && this.uiDialog.resizable('option', o);
    },
    _setOption: function (e, t) {
      var i,
        s,
        a = this.uiDialog;
      'dialogClass' === e && a.removeClass(this.options.dialogClass).addClass(t),
        'disabled' !== e &&
          (this._super(e, t),
          'appendTo' === e && this.uiDialog.appendTo(this._appendTo()),
          'buttons' === e && this._createButtons(),
          'closeText' === e && this.uiDialogTitlebarClose.button({ label: '' + t }),
          'draggable' === e && ((i = a.is(':data(ui-draggable)')), i && !t && a.draggable('destroy'), !i && t && this._makeDraggable()),
          'position' === e && this._position(),
          'resizable' === e &&
            ((s = a.is(':data(ui-resizable)')), s && !t && a.resizable('destroy'), s && 'string' == typeof t && a.resizable('option', 'handles', t), s || t === !1 || this._makeResizable()),
          'title' === e && this._title(this.uiDialogTitlebar.find('.ui-dialog-title')));
    },
    _size: function () {
      var e,
        t,
        i,
        s = this.options;
      this.element.show().css({ width: 'auto', minHeight: 0, maxHeight: 'none', height: 0 }),
        s.minWidth > s.width && (s.width = s.minWidth),
        (e = this.uiDialog.css({ height: 'auto', width: s.width }).outerHeight()),
        (t = Math.max(0, s.minHeight - e)),
        (i = 'number' == typeof s.maxHeight ? Math.max(0, s.maxHeight - e) : 'none'),
        'auto' === s.height ? this.element.css({ minHeight: t, maxHeight: i, height: 'auto' }) : this.element.height(Math.max(0, s.height - e)),
        this.uiDialog.is(':data(ui-resizable)') && this.uiDialog.resizable('option', 'minHeight', this._minHeight());
    },
    _blockFrames: function () {
      this.iframeBlocks = this.document.find('iframe').map(function () {
        var t = e(this);
        return e('<div>').css({ position: 'absolute', width: t.outerWidth(), height: t.outerHeight() }).appendTo(t.parent()).offset(t.offset())[0];
      });
    },
    _unblockFrames: function () {
      this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks);
    },
    _allowInteraction: function (t) {
      return e(t.target).closest('.ui-dialog').length ? !0 : !!e(t.target).closest('.ui-datepicker').length;
    },
    _createOverlay: function () {
      if (this.options.modal) {
        var t = this,
          i = this.widgetFullName;
        e.ui.dialog.overlayInstances ||
          this._delay(function () {
            e.ui.dialog.overlayInstances &&
              this.document.bind('focusin.dialog', function (s) {
                t._allowInteraction(s) || (s.preventDefault(), e('.ui-dialog:visible:last .ui-dialog-content').data(i)._focusTabbable());
              });
          }),
          (this.overlay = e('<div>').addClass('ui-widget-overlay ui-front').appendTo(this._appendTo())),
          this._on(this.overlay, { mousedown: '_keepFocus' }),
          e.ui.dialog.overlayInstances++;
      }
    },
    _destroyOverlay: function () {
      this.options.modal && this.overlay && (e.ui.dialog.overlayInstances--, e.ui.dialog.overlayInstances || this.document.unbind('focusin.dialog'), this.overlay.remove(), (this.overlay = null));
    }
  }),
    (e.ui.dialog.overlayInstances = 0),
    e.uiBackCompat !== !1 &&
      e.widget('ui.dialog', e.ui.dialog, {
        _position: function () {
          var t,
            i = this.options.position,
            s = [],
            a = [0, 0];
          i
            ? (('string' == typeof i || ('object' == typeof i && '0' in i)) &&
                ((s = i.split ? i.split(' ') : [i[0], i[1]]),
                1 === s.length && (s[1] = s[0]),
                e.each(['left', 'top'], function (e, t) {
                  +s[e] === s[e] && ((a[e] = s[e]), (s[e] = t));
                }),
                (i = { my: s[0] + (0 > a[0] ? a[0] : '+' + a[0]) + ' ' + s[1] + (0 > a[1] ? a[1] : '+' + a[1]), at: s.join(' ') })),
              (i = e.extend({}, e.ui.dialog.prototype.options.position, i)))
            : (i = e.ui.dialog.prototype.options.position),
            (t = this.uiDialog.is(':visible')),
            t || this.uiDialog.show(),
            this.uiDialog.position(i),
            t || this.uiDialog.hide();
        }
      });
})(jQuery);
(function (e) {
  e.widget('ui.menu', {
    version: '1.10.4',
    defaultElement: '<ul>',
    delay: 300,
    options: { icons: { submenu: 'ui-icon-carat-1-e' }, menus: 'ul', position: { my: 'left top', at: 'right top' }, role: 'menu', blur: null, focus: null, select: null },
    _create: function () {
      (this.activeMenu = this.element),
        (this.mouseHandled = !1),
        this.element
          .uniqueId()
          .addClass('ui-menu ui-widget ui-widget-content ui-corner-all')
          .toggleClass('ui-menu-icons', !!this.element.find('.ui-icon').length)
          .attr({ role: this.options.role, tabIndex: 0 })
          .bind(
            'click' + this.eventNamespace,
            e.proxy(function (e) {
              this.options.disabled && e.preventDefault();
            }, this)
          ),
        this.options.disabled && this.element.addClass('ui-state-disabled').attr('aria-disabled', 'true'),
        this._on({
          'mousedown .ui-menu-item > a': function (e) {
            e.preventDefault();
          },
          'click .ui-state-disabled > a': function (e) {
            e.preventDefault();
          },
          'click .ui-menu-item:has(a)': function (t) {
            var i = e(t.target).closest('.ui-menu-item');
            !this.mouseHandled &&
              i.not('.ui-state-disabled').length &&
              (this.select(t),
              t.isPropagationStopped() || (this.mouseHandled = !0),
              i.has('.ui-menu').length
                ? this.expand(t)
                : !this.element.is(':focus') &&
                  e(this.document[0].activeElement).closest('.ui-menu').length &&
                  (this.element.trigger('focus', [!0]), this.active && 1 === this.active.parents('.ui-menu').length && clearTimeout(this.timer)));
          },
          'mouseenter .ui-menu-item': function (t) {
            var i = e(t.currentTarget);
            i.siblings().children('.ui-state-active').removeClass('ui-state-active'), this.focus(t, i);
          },
          mouseleave: 'collapseAll',
          'mouseleave .ui-menu': 'collapseAll',
          focus: function (e, t) {
            var i = this.active || this.element.children('.ui-menu-item').eq(0);
            t || this.focus(e, i);
          },
          blur: function (t) {
            this._delay(function () {
              e.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(t);
            });
          },
          keydown: '_keydown'
        }),
        this.refresh(),
        this._on(this.document, {
          click: function (t) {
            e(t.target).closest('.ui-menu').length || this.collapseAll(t), (this.mouseHandled = !1);
          }
        });
    },
    _destroy: function () {
      this.element
        .removeAttr('aria-activedescendant')
        .find('.ui-menu')
        .addBack()
        .removeClass('ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons')
        .removeAttr('role')
        .removeAttr('tabIndex')
        .removeAttr('aria-labelledby')
        .removeAttr('aria-expanded')
        .removeAttr('aria-hidden')
        .removeAttr('aria-disabled')
        .removeUniqueId()
        .show(),
        this.element
          .find('.ui-menu-item')
          .removeClass('ui-menu-item')
          .removeAttr('role')
          .removeAttr('aria-disabled')
          .children('a')
          .removeUniqueId()
          .removeClass('ui-corner-all ui-state-hover')
          .removeAttr('tabIndex')
          .removeAttr('role')
          .removeAttr('aria-haspopup')
          .children()
          .each(function () {
            var t = e(this);
            t.data('ui-menu-submenu-carat') && t.remove();
          }),
        this.element.find('.ui-menu-divider').removeClass('ui-menu-divider ui-widget-content');
    },
    _keydown: function (t) {
      function i(e) {
        return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
      }
      var s,
        n,
        a,
        o,
        r,
        h = !0;
      switch (t.keyCode) {
        case e.ui.keyCode.PAGE_UP:
          this.previousPage(t);
          break;
        case e.ui.keyCode.PAGE_DOWN:
          this.nextPage(t);
          break;
        case e.ui.keyCode.HOME:
          this._move('first', 'first', t);
          break;
        case e.ui.keyCode.END:
          this._move('last', 'last', t);
          break;
        case e.ui.keyCode.UP:
          this.previous(t);
          break;
        case e.ui.keyCode.DOWN:
          this.next(t);
          break;
        case e.ui.keyCode.LEFT:
          this.collapse(t);
          break;
        case e.ui.keyCode.RIGHT:
          this.active && !this.active.is('.ui-state-disabled') && this.expand(t);
          break;
        case e.ui.keyCode.ENTER:
        case e.ui.keyCode.SPACE:
          this._activate(t);
          break;
        case e.ui.keyCode.ESCAPE:
          this.collapse(t);
          break;
        default:
          (h = !1),
            (n = this.previousFilter || ''),
            (a = String.fromCharCode(t.keyCode)),
            (o = !1),
            clearTimeout(this.filterTimer),
            a === n ? (o = !0) : (a = n + a),
            (r = RegExp('^' + i(a), 'i')),
            (s = this.activeMenu.children('.ui-menu-item').filter(function () {
              return r.test(e(this).children('a').text());
            })),
            (s = o && -1 !== s.index(this.active.next()) ? this.active.nextAll('.ui-menu-item') : s),
            s.length ||
              ((a = String.fromCharCode(t.keyCode)),
              (r = RegExp('^' + i(a), 'i')),
              (s = this.activeMenu.children('.ui-menu-item').filter(function () {
                return r.test(e(this).children('a').text());
              }))),
            s.length
              ? (this.focus(t, s),
                s.length > 1
                  ? ((this.previousFilter = a),
                    (this.filterTimer = this._delay(function () {
                      delete this.previousFilter;
                    }, 1e3)))
                  : delete this.previousFilter)
              : delete this.previousFilter;
      }
      h && t.preventDefault();
    },
    _activate: function (e) {
      this.active.is('.ui-state-disabled') || (this.active.children("a[aria-haspopup='true']").length ? this.expand(e) : this.select(e));
    },
    refresh: function () {
      var t,
        i = this.options.icons.submenu,
        s = this.element.find(this.options.menus);
      this.element.toggleClass('ui-menu-icons', !!this.element.find('.ui-icon').length),
        s
          .filter(':not(.ui-menu)')
          .addClass('ui-menu ui-widget ui-widget-content ui-corner-all')
          .hide()
          .attr({ role: this.options.role, 'aria-hidden': 'true', 'aria-expanded': 'false' })
          .each(function () {
            var t = e(this),
              s = t.prev('a'),
              n = e('<span>')
                .addClass('ui-menu-icon ui-icon ' + i)
                .data('ui-menu-submenu-carat', !0);
            s.attr('aria-haspopup', 'true').prepend(n), t.attr('aria-labelledby', s.attr('id'));
          }),
        (t = s.add(this.element)),
        t
          .children(':not(.ui-menu-item):has(a)')
          .addClass('ui-menu-item')
          .attr('role', 'presentation')
          .children('a')
          .uniqueId()
          .addClass('ui-corner-all')
          .attr({ tabIndex: -1, role: this._itemRole() }),
        t.children(':not(.ui-menu-item)').each(function () {
          var t = e(this);
          /[^\-\u2014\u2013\s]/.test(t.text()) || t.addClass('ui-widget-content ui-menu-divider');
        }),
        t.children('.ui-state-disabled').attr('aria-disabled', 'true'),
        this.active && !e.contains(this.element[0], this.active[0]) && this.blur();
    },
    _itemRole: function () {
      return { menu: 'menuitem', listbox: 'option' }[this.options.role];
    },
    _setOption: function (e, t) {
      'icons' === e && this.element.find('.ui-menu-icon').removeClass(this.options.icons.submenu).addClass(t.submenu), this._super(e, t);
    },
    focus: function (e, t) {
      var i, s;
      this.blur(e, e && 'focus' === e.type),
        this._scrollIntoView(t),
        (this.active = t.first()),
        (s = this.active.children('a').addClass('ui-state-focus')),
        this.options.role && this.element.attr('aria-activedescendant', s.attr('id')),
        this.active.parent().closest('.ui-menu-item').children('a:first').addClass('ui-state-active'),
        e && 'keydown' === e.type
          ? this._close()
          : (this.timer = this._delay(function () {
              this._close();
            }, this.delay)),
        (i = t.children('.ui-menu')),
        i.length && e && /^mouse/.test(e.type) && this._startOpening(i),
        (this.activeMenu = t.parent()),
        this._trigger('focus', e, { item: t });
    },
    _scrollIntoView: function (t) {
      var i, s, n, a, o, r;
      this._hasScroll() &&
        ((i = parseFloat(e.css(this.activeMenu[0], 'borderTopWidth')) || 0),
        (s = parseFloat(e.css(this.activeMenu[0], 'paddingTop')) || 0),
        (n = t.offset().top - this.activeMenu.offset().top - i - s),
        (a = this.activeMenu.scrollTop()),
        (o = this.activeMenu.height()),
        (r = t.height()),
        0 > n ? this.activeMenu.scrollTop(a + n) : n + r > o && this.activeMenu.scrollTop(a + n - o + r));
    },
    blur: function (e, t) {
      t || clearTimeout(this.timer), this.active && (this.active.children('a').removeClass('ui-state-focus'), (this.active = null), this._trigger('blur', e, { item: this.active }));
    },
    _startOpening: function (e) {
      clearTimeout(this.timer),
        'true' === e.attr('aria-hidden') &&
          (this.timer = this._delay(function () {
            this._close(), this._open(e);
          }, this.delay));
    },
    _open: function (t) {
      var i = e.extend({ of: this.active }, this.options.position);
      clearTimeout(this.timer),
        this.element.find('.ui-menu').not(t.parents('.ui-menu')).hide().attr('aria-hidden', 'true'),
        t.show().removeAttr('aria-hidden').attr('aria-expanded', 'true').position(i);
    },
    collapseAll: function (t, i) {
      clearTimeout(this.timer),
        (this.timer = this._delay(function () {
          var s = i ? this.element : e(t && t.target).closest(this.element.find('.ui-menu'));
          s.length || (s = this.element), this._close(s), this.blur(t), (this.activeMenu = s);
        }, this.delay));
    },
    _close: function (e) {
      e || (e = this.active ? this.active.parent() : this.element),
        e.find('.ui-menu').hide().attr('aria-hidden', 'true').attr('aria-expanded', 'false').end().find('a.ui-state-active').removeClass('ui-state-active');
    },
    collapse: function (e) {
      var t = this.active && this.active.parent().closest('.ui-menu-item', this.element);
      t && t.length && (this._close(), this.focus(e, t));
    },
    expand: function (e) {
      var t = this.active && this.active.children('.ui-menu ').children('.ui-menu-item').first();
      t &&
        t.length &&
        (this._open(t.parent()),
        this._delay(function () {
          this.focus(e, t);
        }));
    },
    next: function (e) {
      this._move('next', 'first', e);
    },
    previous: function (e) {
      this._move('prev', 'last', e);
    },
    isFirstItem: function () {
      return this.active && !this.active.prevAll('.ui-menu-item').length;
    },
    isLastItem: function () {
      return this.active && !this.active.nextAll('.ui-menu-item').length;
    },
    _move: function (e, t, i) {
      var s;
      this.active && (s = 'first' === e || 'last' === e ? this.active['first' === e ? 'prevAll' : 'nextAll']('.ui-menu-item').eq(-1) : this.active[e + 'All']('.ui-menu-item').eq(0)),
        (s && s.length && this.active) || (s = this.activeMenu.children('.ui-menu-item')[t]()),
        this.focus(i, s);
    },
    nextPage: function (t) {
      var i, s, n;
      return this.active
        ? (this.isLastItem() ||
            (this._hasScroll()
              ? ((s = this.active.offset().top),
                (n = this.element.height()),
                this.active.nextAll('.ui-menu-item').each(function () {
                  return (i = e(this)), 0 > i.offset().top - s - n;
                }),
                this.focus(t, i))
              : this.focus(t, this.activeMenu.children('.ui-menu-item')[this.active ? 'last' : 'first']())),
          undefined)
        : (this.next(t), undefined);
    },
    previousPage: function (t) {
      var i, s, n;
      return this.active
        ? (this.isFirstItem() ||
            (this._hasScroll()
              ? ((s = this.active.offset().top),
                (n = this.element.height()),
                this.active.prevAll('.ui-menu-item').each(function () {
                  return (i = e(this)), i.offset().top - s + n > 0;
                }),
                this.focus(t, i))
              : this.focus(t, this.activeMenu.children('.ui-menu-item').first())),
          undefined)
        : (this.next(t), undefined);
    },
    _hasScroll: function () {
      return this.element.outerHeight() < this.element.prop('scrollHeight');
    },
    select: function (t) {
      this.active = this.active || e(t.target).closest('.ui-menu-item');
      var i = { item: this.active };
      this.active.has('.ui-menu').length || this.collapseAll(t, !0), this._trigger('select', t, i);
    }
  });
})(jQuery);
(function (e, t) {
  e.widget('ui.progressbar', {
    version: '1.10.4',
    options: { max: 100, value: 0, change: null, complete: null },
    min: 0,
    _create: function () {
      (this.oldValue = this.options.value = this._constrainedValue()),
        this.element.addClass('ui-progressbar ui-widget ui-widget-content ui-corner-all').attr({ role: 'progressbar', 'aria-valuemin': this.min }),
        (this.valueDiv = e("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element)),
        this._refreshValue();
    },
    _destroy: function () {
      this.element.removeClass('ui-progressbar ui-widget ui-widget-content ui-corner-all').removeAttr('role').removeAttr('aria-valuemin').removeAttr('aria-valuemax').removeAttr('aria-valuenow'),
        this.valueDiv.remove();
    },
    value: function (e) {
      return e === t ? this.options.value : ((this.options.value = this._constrainedValue(e)), this._refreshValue(), t);
    },
    _constrainedValue: function (e) {
      return e === t && (e = this.options.value), (this.indeterminate = e === !1), 'number' != typeof e && (e = 0), this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, e));
    },
    _setOptions: function (e) {
      var t = e.value;
      delete e.value, this._super(e), (this.options.value = this._constrainedValue(t)), this._refreshValue();
    },
    _setOption: function (e, t) {
      'max' === e && (t = Math.max(this.min, t)), this._super(e, t);
    },
    _percentage: function () {
      return this.indeterminate ? 100 : (100 * (this.options.value - this.min)) / (this.options.max - this.min);
    },
    _refreshValue: function () {
      var t = this.options.value,
        i = this._percentage();
      this.valueDiv
        .toggle(this.indeterminate || t > this.min)
        .toggleClass('ui-corner-right', t === this.options.max)
        .width(i.toFixed(0) + '%'),
        this.element.toggleClass('ui-progressbar-indeterminate', this.indeterminate),
        this.indeterminate
          ? (this.element.removeAttr('aria-valuenow'), this.overlayDiv || (this.overlayDiv = e("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv)))
          : (this.element.attr({ 'aria-valuemax': this.options.max, 'aria-valuenow': t }), this.overlayDiv && (this.overlayDiv.remove(), (this.overlayDiv = null))),
        this.oldValue !== t && ((this.oldValue = t), this._trigger('change')),
        t === this.options.max && this._trigger('complete');
    }
  });
})(jQuery);
(function (e) {
  var t = 5;
  e.widget('ui.slider', e.ui.mouse, {
    version: '1.10.4',
    widgetEventPrefix: 'slide',
    options: { animate: !1, distance: 0, max: 100, min: 0, orientation: 'horizontal', range: !1, step: 1, value: 0, values: null, change: null, slide: null, start: null, stop: null },
    _create: function () {
      (this._keySliding = !1),
        (this._mouseSliding = !1),
        (this._animateOff = !0),
        (this._handleIndex = null),
        this._detectOrientation(),
        this._mouseInit(),
        this.element.addClass('ui-slider ui-slider-' + this.orientation + ' ui-widget' + ' ui-widget-content' + ' ui-corner-all'),
        this._refresh(),
        this._setOption('disabled', this.options.disabled),
        (this._animateOff = !1);
    },
    _refresh: function () {
      this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue();
    },
    _createHandles: function () {
      var t,
        i,
        s = this.options,
        n = this.element.find('.ui-slider-handle').addClass('ui-state-default ui-corner-all'),
        a = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",
        o = [];
      for (i = (s.values && s.values.length) || 1, n.length > i && (n.slice(i).remove(), (n = n.slice(0, i))), t = n.length; i > t; t++) o.push(a);
      (this.handles = n.add(e(o.join('')).appendTo(this.element))),
        (this.handle = this.handles.eq(0)),
        this.handles.each(function (t) {
          e(this).data('ui-slider-handle-index', t);
        });
    },
    _createRange: function () {
      var t = this.options,
        i = '';
      t.range
        ? (t.range === !0 &&
            (t.values
              ? t.values.length && 2 !== t.values.length
                ? (t.values = [t.values[0], t.values[0]])
                : e.isArray(t.values) && (t.values = t.values.slice(0))
              : (t.values = [this._valueMin(), this._valueMin()])),
          this.range && this.range.length
            ? this.range.removeClass('ui-slider-range-min ui-slider-range-max').css({ left: '', bottom: '' })
            : ((this.range = e('<div></div>').appendTo(this.element)), (i = 'ui-slider-range ui-widget-header ui-corner-all')),
          this.range.addClass(i + ('min' === t.range || 'max' === t.range ? ' ui-slider-range-' + t.range : '')))
        : (this.range && this.range.remove(), (this.range = null));
    },
    _setupEvents: function () {
      var e = this.handles.add(this.range).filter('a');
      this._off(e), this._on(e, this._handleEvents), this._hoverable(e), this._focusable(e);
    },
    _destroy: function () {
      this.handles.remove(),
        this.range && this.range.remove(),
        this.element.removeClass('ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all'),
        this._mouseDestroy();
    },
    _mouseCapture: function (t) {
      var i,
        s,
        n,
        a,
        o,
        r,
        h,
        l,
        u = this,
        c = this.options;
      return c.disabled
        ? !1
        : ((this.elementSize = { width: this.element.outerWidth(), height: this.element.outerHeight() }),
          (this.elementOffset = this.element.offset()),
          (i = { x: t.pageX, y: t.pageY }),
          (s = this._normValueFromMouse(i)),
          (n = this._valueMax() - this._valueMin() + 1),
          this.handles.each(function (t) {
            var i = Math.abs(s - u.values(t));
            (n > i || (n === i && (t === u._lastChangedValue || u.values(t) === c.min))) && ((n = i), (a = e(this)), (o = t));
          }),
          (r = this._start(t, o)),
          r === !1
            ? !1
            : ((this._mouseSliding = !0),
              (this._handleIndex = o),
              a.addClass('ui-state-active').focus(),
              (h = a.offset()),
              (l = !e(t.target).parents().addBack().is('.ui-slider-handle')),
              (this._clickOffset = l
                ? { left: 0, top: 0 }
                : {
                    left: t.pageX - h.left - a.width() / 2,
                    top: t.pageY - h.top - a.height() / 2 - (parseInt(a.css('borderTopWidth'), 10) || 0) - (parseInt(a.css('borderBottomWidth'), 10) || 0) + (parseInt(a.css('marginTop'), 10) || 0)
                  }),
              this.handles.hasClass('ui-state-hover') || this._slide(t, o, s),
              (this._animateOff = !0),
              !0));
    },
    _mouseStart: function () {
      return !0;
    },
    _mouseDrag: function (e) {
      var t = { x: e.pageX, y: e.pageY },
        i = this._normValueFromMouse(t);
      return this._slide(e, this._handleIndex, i), !1;
    },
    _mouseStop: function (e) {
      return (
        this.handles.removeClass('ui-state-active'),
        (this._mouseSliding = !1),
        this._stop(e, this._handleIndex),
        this._change(e, this._handleIndex),
        (this._handleIndex = null),
        (this._clickOffset = null),
        (this._animateOff = !1),
        !1
      );
    },
    _detectOrientation: function () {
      this.orientation = 'vertical' === this.options.orientation ? 'vertical' : 'horizontal';
    },
    _normValueFromMouse: function (e) {
      var t, i, s, n, a;
      return (
        'horizontal' === this.orientation
          ? ((t = this.elementSize.width), (i = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)))
          : ((t = this.elementSize.height), (i = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0))),
        (s = i / t),
        s > 1 && (s = 1),
        0 > s && (s = 0),
        'vertical' === this.orientation && (s = 1 - s),
        (n = this._valueMax() - this._valueMin()),
        (a = this._valueMin() + s * n),
        this._trimAlignValue(a)
      );
    },
    _start: function (e, t) {
      var i = { handle: this.handles[t], value: this.value() };
      return this.options.values && this.options.values.length && ((i.value = this.values(t)), (i.values = this.values())), this._trigger('start', e, i);
    },
    _slide: function (e, t, i) {
      var s, n, a;
      this.options.values && this.options.values.length
        ? ((s = this.values(t ? 0 : 1)),
          2 === this.options.values.length && this.options.range === !0 && ((0 === t && i > s) || (1 === t && s > i)) && (i = s),
          i !== this.values(t) &&
            ((n = this.values()), (n[t] = i), (a = this._trigger('slide', e, { handle: this.handles[t], value: i, values: n })), (s = this.values(t ? 0 : 1)), a !== !1 && this.values(t, i)))
        : i !== this.value() && ((a = this._trigger('slide', e, { handle: this.handles[t], value: i })), a !== !1 && this.value(i));
    },
    _stop: function (e, t) {
      var i = { handle: this.handles[t], value: this.value() };
      this.options.values && this.options.values.length && ((i.value = this.values(t)), (i.values = this.values())), this._trigger('stop', e, i);
    },
    _change: function (e, t) {
      if (!this._keySliding && !this._mouseSliding) {
        var i = { handle: this.handles[t], value: this.value() };
        this.options.values && this.options.values.length && ((i.value = this.values(t)), (i.values = this.values())), (this._lastChangedValue = t), this._trigger('change', e, i);
      }
    },
    value: function (e) {
      return arguments.length ? ((this.options.value = this._trimAlignValue(e)), this._refreshValue(), this._change(null, 0), undefined) : this._value();
    },
    values: function (t, i) {
      var s, n, a;
      if (arguments.length > 1) return (this.options.values[t] = this._trimAlignValue(i)), this._refreshValue(), this._change(null, t), undefined;
      if (!arguments.length) return this._values();
      if (!e.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(t) : this.value();
      for (s = this.options.values, n = arguments[0], a = 0; s.length > a; a += 1) (s[a] = this._trimAlignValue(n[a])), this._change(null, a);
      this._refreshValue();
    },
    _setOption: function (t, i) {
      var s,
        n = 0;
      switch (
        ('range' === t &&
          this.options.range === !0 &&
          ('min' === i
            ? ((this.options.value = this._values(0)), (this.options.values = null))
            : 'max' === i && ((this.options.value = this._values(this.options.values.length - 1)), (this.options.values = null))),
        e.isArray(this.options.values) && (n = this.options.values.length),
        e.Widget.prototype._setOption.apply(this, arguments),
        t)
      ) {
        case 'orientation':
          this._detectOrientation(), this.element.removeClass('ui-slider-horizontal ui-slider-vertical').addClass('ui-slider-' + this.orientation), this._refreshValue();
          break;
        case 'value':
          (this._animateOff = !0), this._refreshValue(), this._change(null, 0), (this._animateOff = !1);
          break;
        case 'values':
          for (this._animateOff = !0, this._refreshValue(), s = 0; n > s; s += 1) this._change(null, s);
          this._animateOff = !1;
          break;
        case 'min':
        case 'max':
          (this._animateOff = !0), this._refreshValue(), (this._animateOff = !1);
          break;
        case 'range':
          (this._animateOff = !0), this._refresh(), (this._animateOff = !1);
      }
    },
    _value: function () {
      var e = this.options.value;
      return (e = this._trimAlignValue(e));
    },
    _values: function (e) {
      var t, i, s;
      if (arguments.length) return (t = this.options.values[e]), (t = this._trimAlignValue(t));
      if (this.options.values && this.options.values.length) {
        for (i = this.options.values.slice(), s = 0; i.length > s; s += 1) i[s] = this._trimAlignValue(i[s]);
        return i;
      }
      return [];
    },
    _trimAlignValue: function (e) {
      if (this._valueMin() >= e) return this._valueMin();
      if (e >= this._valueMax()) return this._valueMax();
      var t = this.options.step > 0 ? this.options.step : 1,
        i = (e - this._valueMin()) % t,
        s = e - i;
      return 2 * Math.abs(i) >= t && (s += i > 0 ? t : -t), parseFloat(s.toFixed(5));
    },
    _valueMin: function () {
      return this.options.min;
    },
    _valueMax: function () {
      return this.options.max;
    },
    _refreshValue: function () {
      var t,
        i,
        s,
        n,
        a,
        o = this.options.range,
        r = this.options,
        h = this,
        l = this._animateOff ? !1 : r.animate,
        u = {};
      this.options.values && this.options.values.length
        ? this.handles.each(function (s) {
            (i = 100 * ((h.values(s) - h._valueMin()) / (h._valueMax() - h._valueMin()))),
              (u['horizontal' === h.orientation ? 'left' : 'bottom'] = i + '%'),
              e(this).stop(1, 1)[l ? 'animate' : 'css'](u, r.animate),
              h.options.range === !0 &&
                ('horizontal' === h.orientation
                  ? (0 === s && h.range.stop(1, 1)[l ? 'animate' : 'css']({ left: i + '%' }, r.animate),
                    1 === s && h.range[l ? 'animate' : 'css']({ width: i - t + '%' }, { queue: !1, duration: r.animate }))
                  : (0 === s && h.range.stop(1, 1)[l ? 'animate' : 'css']({ bottom: i + '%' }, r.animate),
                    1 === s && h.range[l ? 'animate' : 'css']({ height: i - t + '%' }, { queue: !1, duration: r.animate }))),
              (t = i);
          })
        : ((s = this.value()),
          (n = this._valueMin()),
          (a = this._valueMax()),
          (i = a !== n ? 100 * ((s - n) / (a - n)) : 0),
          (u['horizontal' === this.orientation ? 'left' : 'bottom'] = i + '%'),
          this.handle.stop(1, 1)[l ? 'animate' : 'css'](u, r.animate),
          'min' === o && 'horizontal' === this.orientation && this.range.stop(1, 1)[l ? 'animate' : 'css']({ width: i + '%' }, r.animate),
          'max' === o && 'horizontal' === this.orientation && this.range[l ? 'animate' : 'css']({ width: 100 - i + '%' }, { queue: !1, duration: r.animate }),
          'min' === o && 'vertical' === this.orientation && this.range.stop(1, 1)[l ? 'animate' : 'css']({ height: i + '%' }, r.animate),
          'max' === o && 'vertical' === this.orientation && this.range[l ? 'animate' : 'css']({ height: 100 - i + '%' }, { queue: !1, duration: r.animate }));
    },
    _handleEvents: {
      keydown: function (i) {
        var s,
          n,
          a,
          o,
          r = e(i.target).data('ui-slider-handle-index');
        switch (i.keyCode) {
          case e.ui.keyCode.HOME:
          case e.ui.keyCode.END:
          case e.ui.keyCode.PAGE_UP:
          case e.ui.keyCode.PAGE_DOWN:
          case e.ui.keyCode.UP:
          case e.ui.keyCode.RIGHT:
          case e.ui.keyCode.DOWN:
          case e.ui.keyCode.LEFT:
            if ((i.preventDefault(), !this._keySliding && ((this._keySliding = !0), e(i.target).addClass('ui-state-active'), (s = this._start(i, r)), s === !1))) return;
        }
        switch (((o = this.options.step), (n = a = this.options.values && this.options.values.length ? this.values(r) : this.value()), i.keyCode)) {
          case e.ui.keyCode.HOME:
            a = this._valueMin();
            break;
          case e.ui.keyCode.END:
            a = this._valueMax();
            break;
          case e.ui.keyCode.PAGE_UP:
            a = this._trimAlignValue(n + (this._valueMax() - this._valueMin()) / t);
            break;
          case e.ui.keyCode.PAGE_DOWN:
            a = this._trimAlignValue(n - (this._valueMax() - this._valueMin()) / t);
            break;
          case e.ui.keyCode.UP:
          case e.ui.keyCode.RIGHT:
            if (n === this._valueMax()) return;
            a = this._trimAlignValue(n + o);
            break;
          case e.ui.keyCode.DOWN:
          case e.ui.keyCode.LEFT:
            if (n === this._valueMin()) return;
            a = this._trimAlignValue(n - o);
        }
        this._slide(i, r, a);
      },
      click: function (e) {
        e.preventDefault();
      },
      keyup: function (t) {
        var i = e(t.target).data('ui-slider-handle-index');
        this._keySliding && ((this._keySliding = !1), this._stop(t, i), this._change(t, i), e(t.target).removeClass('ui-state-active'));
      }
    }
  });
})(jQuery);
(function (e) {
  function t(e) {
    return function () {
      var t = this.element.val();
      e.apply(this, arguments), this._refresh(), t !== this.element.val() && this._trigger('change');
    };
  }
  e.widget('ui.spinner', {
    version: '1.10.4',
    defaultElement: '<input>',
    widgetEventPrefix: 'spin',
    options: {
      culture: null,
      icons: { down: 'ui-icon-triangle-1-s', up: 'ui-icon-triangle-1-n' },
      incremental: !0,
      max: null,
      min: null,
      numberFormat: null,
      page: 10,
      step: 1,
      change: null,
      spin: null,
      start: null,
      stop: null
    },
    _create: function () {
      this._setOption('max', this.options.max),
        this._setOption('min', this.options.min),
        this._setOption('step', this.options.step),
        '' !== this.value() && this._value(this.element.val(), !0),
        this._draw(),
        this._on(this._events),
        this._refresh(),
        this._on(this.window, {
          beforeunload: function () {
            this.element.removeAttr('autocomplete');
          }
        });
    },
    _getCreateOptions: function () {
      var t = {},
        i = this.element;
      return (
        e.each(['min', 'max', 'step'], function (e, s) {
          var n = i.attr(s);
          void 0 !== n && n.length && (t[s] = n);
        }),
        t
      );
    },
    _events: {
      keydown: function (e) {
        this._start(e) && this._keydown(e) && e.preventDefault();
      },
      keyup: '_stop',
      focus: function () {
        this.previous = this.element.val();
      },
      blur: function (e) {
        return this.cancelBlur ? (delete this.cancelBlur, void 0) : (this._stop(), this._refresh(), this.previous !== this.element.val() && this._trigger('change', e), void 0);
      },
      mousewheel: function (e, t) {
        if (t) {
          if (!this.spinning && !this._start(e)) return !1;
          this._spin((t > 0 ? 1 : -1) * this.options.step, e),
            clearTimeout(this.mousewheelTimer),
            (this.mousewheelTimer = this._delay(function () {
              this.spinning && this._stop(e);
            }, 100)),
            e.preventDefault();
        }
      },
      'mousedown .ui-spinner-button': function (t) {
        function i() {
          var e = this.element[0] === this.document[0].activeElement;
          e ||
            (this.element.focus(),
            (this.previous = s),
            this._delay(function () {
              this.previous = s;
            }));
        }
        var s;
        (s = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val()),
          t.preventDefault(),
          i.call(this),
          (this.cancelBlur = !0),
          this._delay(function () {
            delete this.cancelBlur, i.call(this);
          }),
          this._start(t) !== !1 && this._repeat(null, e(t.currentTarget).hasClass('ui-spinner-up') ? 1 : -1, t);
      },
      'mouseup .ui-spinner-button': '_stop',
      'mouseenter .ui-spinner-button': function (t) {
        return e(t.currentTarget).hasClass('ui-state-active') ? (this._start(t) === !1 ? !1 : (this._repeat(null, e(t.currentTarget).hasClass('ui-spinner-up') ? 1 : -1, t), void 0)) : void 0;
      },
      'mouseleave .ui-spinner-button': '_stop'
    },
    _draw: function () {
      var e = (this.uiSpinner = this.element.addClass('ui-spinner-input').attr('autocomplete', 'off').wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml()));
      this.element.attr('role', 'spinbutton'),
        (this.buttons = e.find('.ui-spinner-button').attr('tabIndex', -1).button().removeClass('ui-corner-all')),
        this.buttons.height() > Math.ceil(0.5 * e.height()) && e.height() > 0 && e.height(e.height()),
        this.options.disabled && this.disable();
    },
    _keydown: function (t) {
      var i = this.options,
        s = e.ui.keyCode;
      switch (t.keyCode) {
        case s.UP:
          return this._repeat(null, 1, t), !0;
        case s.DOWN:
          return this._repeat(null, -1, t), !0;
        case s.PAGE_UP:
          return this._repeat(null, i.page, t), !0;
        case s.PAGE_DOWN:
          return this._repeat(null, -i.page, t), !0;
      }
      return !1;
    },
    _uiSpinnerHtml: function () {
      return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>";
    },
    _buttonHtml: function () {
      return (
        "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " +
        this.options.icons.up +
        "'>&#9650;</span>" +
        '</a>' +
        "<a class='ui-spinner-button ui-spinner-down ui-corner-br'>" +
        "<span class='ui-icon " +
        this.options.icons.down +
        "'>&#9660;</span>" +
        '</a>'
      );
    },
    _start: function (e) {
      return this.spinning || this._trigger('start', e) !== !1 ? (this.counter || (this.counter = 1), (this.spinning = !0), !0) : !1;
    },
    _repeat: function (e, t, i) {
      (e = e || 500),
        clearTimeout(this.timer),
        (this.timer = this._delay(function () {
          this._repeat(40, t, i);
        }, e)),
        this._spin(t * this.options.step, i);
    },
    _spin: function (e, t) {
      var i = this.value() || 0;
      this.counter || (this.counter = 1),
        (i = this._adjustValue(i + e * this._increment(this.counter))),
        (this.spinning && this._trigger('spin', t, { value: i }) === !1) || (this._value(i), this.counter++);
    },
    _increment: function (t) {
      var i = this.options.incremental;
      return i ? (e.isFunction(i) ? i(t) : Math.floor((t * t * t) / 5e4 - (t * t) / 500 + (17 * t) / 200 + 1)) : 1;
    },
    _precision: function () {
      var e = this._precisionOf(this.options.step);
      return null !== this.options.min && (e = Math.max(e, this._precisionOf(this.options.min))), e;
    },
    _precisionOf: function (e) {
      var t = '' + e,
        i = t.indexOf('.');
      return -1 === i ? 0 : t.length - i - 1;
    },
    _adjustValue: function (e) {
      var t,
        i,
        s = this.options;
      return (
        (t = null !== s.min ? s.min : 0),
        (i = e - t),
        (i = Math.round(i / s.step) * s.step),
        (e = t + i),
        (e = parseFloat(e.toFixed(this._precision()))),
        null !== s.max && e > s.max ? s.max : null !== s.min && s.min > e ? s.min : e
      );
    },
    _stop: function (e) {
      this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), (this.counter = 0), (this.spinning = !1), this._trigger('stop', e));
    },
    _setOption: function (e, t) {
      if ('culture' === e || 'numberFormat' === e) {
        var i = this._parse(this.element.val());
        return (this.options[e] = t), this.element.val(this._format(i)), void 0;
      }
      ('max' === e || 'min' === e || 'step' === e) && 'string' == typeof t && (t = this._parse(t)),
        'icons' === e &&
          (this.buttons.first().find('.ui-icon').removeClass(this.options.icons.up).addClass(t.up), this.buttons.last().find('.ui-icon').removeClass(this.options.icons.down).addClass(t.down)),
        this._super(e, t),
        'disabled' === e && (t ? (this.element.prop('disabled', !0), this.buttons.button('disable')) : (this.element.prop('disabled', !1), this.buttons.button('enable')));
    },
    _setOptions: t(function (e) {
      this._super(e), this._value(this.element.val());
    }),
    _parse: function (e) {
      return 'string' == typeof e && '' !== e && (e = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(e, 10, this.options.culture) : +e), '' === e || isNaN(e) ? null : e;
    },
    _format: function (e) {
      return '' === e ? '' : window.Globalize && this.options.numberFormat ? Globalize.format(e, this.options.numberFormat, this.options.culture) : e;
    },
    _refresh: function () {
      this.element.attr({ 'aria-valuemin': this.options.min, 'aria-valuemax': this.options.max, 'aria-valuenow': this._parse(this.element.val()) });
    },
    _value: function (e, t) {
      var i;
      '' !== e && ((i = this._parse(e)), null !== i && (t || (i = this._adjustValue(i)), (e = this._format(i)))), this.element.val(e), this._refresh();
    },
    _destroy: function () {
      this.element
        .removeClass('ui-spinner-input')
        .prop('disabled', !1)
        .removeAttr('autocomplete')
        .removeAttr('role')
        .removeAttr('aria-valuemin')
        .removeAttr('aria-valuemax')
        .removeAttr('aria-valuenow'),
        this.uiSpinner.replaceWith(this.element);
    },
    stepUp: t(function (e) {
      this._stepUp(e);
    }),
    _stepUp: function (e) {
      this._start() && (this._spin((e || 1) * this.options.step), this._stop());
    },
    stepDown: t(function (e) {
      this._stepDown(e);
    }),
    _stepDown: function (e) {
      this._start() && (this._spin((e || 1) * -this.options.step), this._stop());
    },
    pageUp: t(function (e) {
      this._stepUp((e || 1) * this.options.page);
    }),
    pageDown: t(function (e) {
      this._stepDown((e || 1) * this.options.page);
    }),
    value: function (e) {
      return arguments.length ? (t(this._value).call(this, e), void 0) : this._parse(this.element.val());
    },
    widget: function () {
      return this.uiSpinner;
    }
  });
})(jQuery);
(function (e, t) {
  function i() {
    return ++n;
  }
  function s(e) {
    return (e = e.cloneNode(!1)), e.hash.length > 1 && decodeURIComponent(e.href.replace(a, '')) === decodeURIComponent(location.href.replace(a, ''));
  }
  var n = 0,
    a = /#.*$/;
  e.widget('ui.tabs', {
    version: '1.10.4',
    delay: 300,
    options: { active: null, collapsible: !1, event: 'click', heightStyle: 'content', hide: null, show: null, activate: null, beforeActivate: null, beforeLoad: null, load: null },
    _create: function () {
      var t = this,
        i = this.options;
      (this.running = !1),
        this.element
          .addClass('ui-tabs ui-widget ui-widget-content ui-corner-all')
          .toggleClass('ui-tabs-collapsible', i.collapsible)
          .delegate('.ui-tabs-nav > li', 'mousedown' + this.eventNamespace, function (t) {
            e(this).is('.ui-state-disabled') && t.preventDefault();
          })
          .delegate('.ui-tabs-anchor', 'focus' + this.eventNamespace, function () {
            e(this).closest('li').is('.ui-state-disabled') && this.blur();
          }),
        this._processTabs(),
        (i.active = this._initialActive()),
        e.isArray(i.disabled) &&
          (i.disabled = e
            .unique(
              i.disabled.concat(
                e.map(this.tabs.filter('.ui-state-disabled'), function (e) {
                  return t.tabs.index(e);
                })
              )
            )
            .sort()),
        (this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(i.active) : e()),
        this._refresh(),
        this.active.length && this.load(i.active);
    },
    _initialActive: function () {
      var i = this.options.active,
        s = this.options.collapsible,
        n = location.hash.substring(1);
      return (
        null === i &&
          (n &&
            this.tabs.each(function (s, a) {
              return e(a).attr('aria-controls') === n ? ((i = s), !1) : t;
            }),
          null === i && (i = this.tabs.index(this.tabs.filter('.ui-tabs-active'))),
          (null === i || -1 === i) && (i = this.tabs.length ? 0 : !1)),
        i !== !1 && ((i = this.tabs.index(this.tabs.eq(i))), -1 === i && (i = s ? !1 : 0)),
        !s && i === !1 && this.anchors.length && (i = 0),
        i
      );
    },
    _getCreateEventData: function () {
      return { tab: this.active, panel: this.active.length ? this._getPanelForTab(this.active) : e() };
    },
    _tabKeydown: function (i) {
      var s = e(this.document[0].activeElement).closest('li'),
        n = this.tabs.index(s),
        a = !0;
      if (!this._handlePageNav(i)) {
        switch (i.keyCode) {
          case e.ui.keyCode.RIGHT:
          case e.ui.keyCode.DOWN:
            n++;
            break;
          case e.ui.keyCode.UP:
          case e.ui.keyCode.LEFT:
            (a = !1), n--;
            break;
          case e.ui.keyCode.END:
            n = this.anchors.length - 1;
            break;
          case e.ui.keyCode.HOME:
            n = 0;
            break;
          case e.ui.keyCode.SPACE:
            return i.preventDefault(), clearTimeout(this.activating), this._activate(n), t;
          case e.ui.keyCode.ENTER:
            return i.preventDefault(), clearTimeout(this.activating), this._activate(n === this.options.active ? !1 : n), t;
          default:
            return;
        }
        i.preventDefault(),
          clearTimeout(this.activating),
          (n = this._focusNextTab(n, a)),
          i.ctrlKey ||
            (s.attr('aria-selected', 'false'),
            this.tabs.eq(n).attr('aria-selected', 'true'),
            (this.activating = this._delay(function () {
              this.option('active', n);
            }, this.delay)));
      }
    },
    _panelKeydown: function (t) {
      this._handlePageNav(t) || (t.ctrlKey && t.keyCode === e.ui.keyCode.UP && (t.preventDefault(), this.active.focus()));
    },
    _handlePageNav: function (i) {
      return i.altKey && i.keyCode === e.ui.keyCode.PAGE_UP
        ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0)
        : i.altKey && i.keyCode === e.ui.keyCode.PAGE_DOWN
        ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0)
        : t;
    },
    _findNextTab: function (t, i) {
      function s() {
        return t > n && (t = 0), 0 > t && (t = n), t;
      }
      for (var n = this.tabs.length - 1; -1 !== e.inArray(s(), this.options.disabled); ) t = i ? t + 1 : t - 1;
      return t;
    },
    _focusNextTab: function (e, t) {
      return (e = this._findNextTab(e, t)), this.tabs.eq(e).focus(), e;
    },
    _setOption: function (e, i) {
      return 'active' === e
        ? (this._activate(i), t)
        : 'disabled' === e
        ? (this._setupDisabled(i), t)
        : (this._super(e, i),
          'collapsible' === e && (this.element.toggleClass('ui-tabs-collapsible', i), i || this.options.active !== !1 || this._activate(0)),
          'event' === e && this._setupEvents(i),
          'heightStyle' === e && this._setupHeightStyle(i),
          t);
    },
    _tabId: function (e) {
      return e.attr('aria-controls') || 'ui-tabs-' + i();
    },
    _sanitizeSelector: function (e) {
      return e ? e.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, '\\$&') : '';
    },
    refresh: function () {
      var t = this.options,
        i = this.tablist.children(':has(a[href])');
      (t.disabled = e.map(i.filter('.ui-state-disabled'), function (e) {
        return i.index(e);
      })),
        this._processTabs(),
        t.active !== !1 && this.anchors.length
          ? this.active.length && !e.contains(this.tablist[0], this.active[0])
            ? this.tabs.length === t.disabled.length
              ? ((t.active = !1), (this.active = e()))
              : this._activate(this._findNextTab(Math.max(0, t.active - 1), !1))
            : (t.active = this.tabs.index(this.active))
          : ((t.active = !1), (this.active = e())),
        this._refresh();
    },
    _refresh: function () {
      this._setupDisabled(this.options.disabled),
        this._setupEvents(this.options.event),
        this._setupHeightStyle(this.options.heightStyle),
        this.tabs.not(this.active).attr({ 'aria-selected': 'false', tabIndex: -1 }),
        this.panels.not(this._getPanelForTab(this.active)).hide().attr({ 'aria-expanded': 'false', 'aria-hidden': 'true' }),
        this.active.length
          ? (this.active.addClass('ui-tabs-active ui-state-active').attr({ 'aria-selected': 'true', tabIndex: 0 }),
            this._getPanelForTab(this.active).show().attr({ 'aria-expanded': 'true', 'aria-hidden': 'false' }))
          : this.tabs.eq(0).attr('tabIndex', 0);
    },
    _processTabs: function () {
      var t = this;
      (this.tablist = this._getList().addClass('ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all').attr('role', 'tablist')),
        (this.tabs = this.tablist.find('> li:has(a[href])').addClass('ui-state-default ui-corner-top').attr({ role: 'tab', tabIndex: -1 })),
        (this.anchors = this.tabs
          .map(function () {
            return e('a', this)[0];
          })
          .addClass('ui-tabs-anchor')
          .attr({ role: 'presentation', tabIndex: -1 })),
        (this.panels = e()),
        this.anchors.each(function (i, n) {
          var a,
            o,
            r,
            h = e(n).uniqueId().attr('id'),
            l = e(n).closest('li'),
            u = l.attr('aria-controls');
          s(n)
            ? ((a = n.hash), (o = t.element.find(t._sanitizeSelector(a))))
            : ((r = t._tabId(l)), (a = '#' + r), (o = t.element.find(a)), o.length || ((o = t._createPanel(r)), o.insertAfter(t.panels[i - 1] || t.tablist)), o.attr('aria-live', 'polite')),
            o.length && (t.panels = t.panels.add(o)),
            u && l.data('ui-tabs-aria-controls', u),
            l.attr({ 'aria-controls': a.substring(1), 'aria-labelledby': h }),
            o.attr('aria-labelledby', h);
        }),
        this.panels.addClass('ui-tabs-panel ui-widget-content ui-corner-bottom').attr('role', 'tabpanel');
    },
    _getList: function () {
      return this.tablist || this.element.find('ol,ul').eq(0);
    },
    _createPanel: function (t) {
      return e('<div>').attr('id', t).addClass('ui-tabs-panel ui-widget-content ui-corner-bottom').data('ui-tabs-destroy', !0);
    },
    _setupDisabled: function (t) {
      e.isArray(t) && (t.length ? t.length === this.anchors.length && (t = !0) : (t = !1));
      for (var i, s = 0; (i = this.tabs[s]); s++)
        t === !0 || -1 !== e.inArray(s, t) ? e(i).addClass('ui-state-disabled').attr('aria-disabled', 'true') : e(i).removeClass('ui-state-disabled').removeAttr('aria-disabled');
      this.options.disabled = t;
    },
    _setupEvents: function (t) {
      var i = {
        click: function (e) {
          e.preventDefault();
        }
      };
      t &&
        e.each(t.split(' '), function (e, t) {
          i[t] = '_eventHandler';
        }),
        this._off(this.anchors.add(this.tabs).add(this.panels)),
        this._on(this.anchors, i),
        this._on(this.tabs, { keydown: '_tabKeydown' }),
        this._on(this.panels, { keydown: '_panelKeydown' }),
        this._focusable(this.tabs),
        this._hoverable(this.tabs);
    },
    _setupHeightStyle: function (t) {
      var i,
        s = this.element.parent();
      'fill' === t
        ? ((i = s.height()),
          (i -= this.element.outerHeight() - this.element.height()),
          this.element.siblings(':visible').each(function () {
            var t = e(this),
              s = t.css('position');
            'absolute' !== s && 'fixed' !== s && (i -= t.outerHeight(!0));
          }),
          this.element
            .children()
            .not(this.panels)
            .each(function () {
              i -= e(this).outerHeight(!0);
            }),
          this.panels
            .each(function () {
              e(this).height(Math.max(0, i - e(this).innerHeight() + e(this).height()));
            })
            .css('overflow', 'auto'))
        : 'auto' === t &&
          ((i = 0),
          this.panels
            .each(function () {
              i = Math.max(i, e(this).height('').height());
            })
            .height(i));
    },
    _eventHandler: function (t) {
      var i = this.options,
        s = this.active,
        n = e(t.currentTarget),
        a = n.closest('li'),
        o = a[0] === s[0],
        r = o && i.collapsible,
        h = r ? e() : this._getPanelForTab(a),
        l = s.length ? this._getPanelForTab(s) : e(),
        u = { oldTab: s, oldPanel: l, newTab: r ? e() : a, newPanel: h };
      t.preventDefault(),
        a.hasClass('ui-state-disabled') ||
          a.hasClass('ui-tabs-loading') ||
          this.running ||
          (o && !i.collapsible) ||
          this._trigger('beforeActivate', t, u) === !1 ||
          ((i.active = r ? !1 : this.tabs.index(a)),
          (this.active = o ? e() : a),
          this.xhr && this.xhr.abort(),
          l.length || h.length || e.error('jQuery UI Tabs: Mismatching fragment identifier.'),
          h.length && this.load(this.tabs.index(a), t),
          this._toggle(t, u));
    },
    _toggle: function (t, i) {
      function s() {
        (a.running = !1), a._trigger('activate', t, i);
      }
      function n() {
        i.newTab.closest('li').addClass('ui-tabs-active ui-state-active'), o.length && a.options.show ? a._show(o, a.options.show, s) : (o.show(), s());
      }
      var a = this,
        o = i.newPanel,
        r = i.oldPanel;
      (this.running = !0),
        r.length && this.options.hide
          ? this._hide(r, this.options.hide, function () {
              i.oldTab.closest('li').removeClass('ui-tabs-active ui-state-active'), n();
            })
          : (i.oldTab.closest('li').removeClass('ui-tabs-active ui-state-active'), r.hide(), n()),
        r.attr({ 'aria-expanded': 'false', 'aria-hidden': 'true' }),
        i.oldTab.attr('aria-selected', 'false'),
        o.length && r.length
          ? i.oldTab.attr('tabIndex', -1)
          : o.length &&
            this.tabs
              .filter(function () {
                return 0 === e(this).attr('tabIndex');
              })
              .attr('tabIndex', -1),
        o.attr({ 'aria-expanded': 'true', 'aria-hidden': 'false' }),
        i.newTab.attr({ 'aria-selected': 'true', tabIndex: 0 });
    },
    _activate: function (t) {
      var i,
        s = this._findActive(t);
      s[0] !== this.active[0] && (s.length || (s = this.active), (i = s.find('.ui-tabs-anchor')[0]), this._eventHandler({ target: i, currentTarget: i, preventDefault: e.noop }));
    },
    _findActive: function (t) {
      return t === !1 ? e() : this.tabs.eq(t);
    },
    _getIndex: function (e) {
      return 'string' == typeof e && (e = this.anchors.index(this.anchors.filter("[href$='" + e + "']"))), e;
    },
    _destroy: function () {
      this.xhr && this.xhr.abort(),
        this.element.removeClass('ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible'),
        this.tablist.removeClass('ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all').removeAttr('role'),
        this.anchors.removeClass('ui-tabs-anchor').removeAttr('role').removeAttr('tabIndex').removeUniqueId(),
        this.tabs.add(this.panels).each(function () {
          e.data(this, 'ui-tabs-destroy')
            ? e(this).remove()
            : e(this)
                .removeClass('ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel')
                .removeAttr('tabIndex')
                .removeAttr('aria-live')
                .removeAttr('aria-busy')
                .removeAttr('aria-selected')
                .removeAttr('aria-labelledby')
                .removeAttr('aria-hidden')
                .removeAttr('aria-expanded')
                .removeAttr('role');
        }),
        this.tabs.each(function () {
          var t = e(this),
            i = t.data('ui-tabs-aria-controls');
          i ? t.attr('aria-controls', i).removeData('ui-tabs-aria-controls') : t.removeAttr('aria-controls');
        }),
        this.panels.show(),
        'content' !== this.options.heightStyle && this.panels.css('height', '');
    },
    enable: function (i) {
      var s = this.options.disabled;
      s !== !1 &&
        (i === t
          ? (s = !1)
          : ((i = this._getIndex(i)),
            (s = e.isArray(s)
              ? e.map(s, function (e) {
                  return e !== i ? e : null;
                })
              : e.map(this.tabs, function (e, t) {
                  return t !== i ? t : null;
                }))),
        this._setupDisabled(s));
    },
    disable: function (i) {
      var s = this.options.disabled;
      if (s !== !0) {
        if (i === t) s = !0;
        else {
          if (((i = this._getIndex(i)), -1 !== e.inArray(i, s))) return;
          s = e.isArray(s) ? e.merge([i], s).sort() : [i];
        }
        this._setupDisabled(s);
      }
    },
    load: function (t, i) {
      t = this._getIndex(t);
      var n = this,
        a = this.tabs.eq(t),
        o = a.find('.ui-tabs-anchor'),
        r = this._getPanelForTab(a),
        h = { tab: a, panel: r };
      s(o[0]) ||
        ((this.xhr = e.ajax(this._ajaxSettings(o, i, h))),
        this.xhr &&
          'canceled' !== this.xhr.statusText &&
          (a.addClass('ui-tabs-loading'),
          r.attr('aria-busy', 'true'),
          this.xhr
            .success(function (e) {
              setTimeout(function () {
                r.html(e), n._trigger('load', i, h);
              }, 1);
            })
            .complete(function (e, t) {
              setTimeout(function () {
                'abort' === t && n.panels.stop(!1, !0), a.removeClass('ui-tabs-loading'), r.removeAttr('aria-busy'), e === n.xhr && delete n.xhr;
              }, 1);
            })));
    },
    _ajaxSettings: function (t, i, s) {
      var n = this;
      return {
        url: t.attr('href'),
        beforeSend: function (t, a) {
          return n._trigger('beforeLoad', i, e.extend({ jqXHR: t, ajaxSettings: a }, s));
        }
      };
    },
    _getPanelForTab: function (t) {
      var i = e(t).attr('aria-controls');
      return this.element.find(this._sanitizeSelector('#' + i));
    }
  });
})(jQuery);
(function (e) {
  function t(t, i) {
    var s = (t.attr('aria-describedby') || '').split(/\s+/);
    s.push(i), t.data('ui-tooltip-id', i).attr('aria-describedby', e.trim(s.join(' ')));
  }
  function i(t) {
    var i = t.data('ui-tooltip-id'),
      s = (t.attr('aria-describedby') || '').split(/\s+/),
      n = e.inArray(i, s);
    -1 !== n && s.splice(n, 1), t.removeData('ui-tooltip-id'), (s = e.trim(s.join(' '))), s ? t.attr('aria-describedby', s) : t.removeAttr('aria-describedby');
  }
  var s = 0;
  e.widget('ui.tooltip', {
    version: '1.10.4',
    options: {
      content: function () {
        var t = e(this).attr('title') || '';
        return e('<a>').text(t).html();
      },
      hide: !0,
      items: '[title]:not([disabled])',
      position: { my: 'left top+15', at: 'left bottom', collision: 'flipfit flip' },
      show: !0,
      tooltipClass: null,
      track: !1,
      close: null,
      open: null
    },
    _create: function () {
      this._on({ mouseover: 'open', focusin: 'open' }), (this.tooltips = {}), (this.parents = {}), this.options.disabled && this._disable();
    },
    _setOption: function (t, i) {
      var s = this;
      return 'disabled' === t
        ? (this[i ? '_disable' : '_enable'](), (this.options[t] = i), void 0)
        : (this._super(t, i),
          'content' === t &&
            e.each(this.tooltips, function (e, t) {
              s._updateContent(t);
            }),
          void 0);
    },
    _disable: function () {
      var t = this;
      e.each(this.tooltips, function (i, s) {
        var n = e.Event('blur');
        (n.target = n.currentTarget = s[0]), t.close(n, !0);
      }),
        this.element
          .find(this.options.items)
          .addBack()
          .each(function () {
            var t = e(this);
            t.is('[title]') && t.data('ui-tooltip-title', t.attr('title')).attr('title', '');
          });
    },
    _enable: function () {
      this.element
        .find(this.options.items)
        .addBack()
        .each(function () {
          var t = e(this);
          t.data('ui-tooltip-title') && t.attr('title', t.data('ui-tooltip-title'));
        });
    },
    open: function (t) {
      var i = this,
        s = e(t ? t.target : this.element).closest(this.options.items);
      s.length &&
        !s.data('ui-tooltip-id') &&
        (s.attr('title') && s.data('ui-tooltip-title', s.attr('title')),
        s.data('ui-tooltip-open', !0),
        t &&
          'mouseover' === t.type &&
          s.parents().each(function () {
            var t,
              s = e(this);
            s.data('ui-tooltip-open') && ((t = e.Event('blur')), (t.target = t.currentTarget = this), i.close(t, !0)),
              s.attr('title') && (s.uniqueId(), (i.parents[this.id] = { element: this, title: s.attr('title') }), s.attr('title', ''));
          }),
        this._updateContent(s, t));
    },
    _updateContent: function (e, t) {
      var i,
        s = this.options.content,
        n = this,
        a = t ? t.type : null;
      return 'string' == typeof s
        ? this._open(t, e, s)
        : ((i = s.call(e[0], function (i) {
            e.data('ui-tooltip-open') &&
              n._delay(function () {
                t && (t.type = a), this._open(t, e, i);
              });
          })),
          i && this._open(t, e, i),
          void 0);
    },
    _open: function (i, s, n) {
      function a(e) {
        (l.of = e), o.is(':hidden') || o.position(l);
      }
      var o,
        r,
        h,
        l = e.extend({}, this.options.position);
      if (n) {
        if (((o = this._find(s)), o.length)) return o.find('.ui-tooltip-content').html(n), void 0;
        s.is('[title]') && (i && 'mouseover' === i.type ? s.attr('title', '') : s.removeAttr('title')),
          (o = this._tooltip(s)),
          t(s, o.attr('id')),
          o.find('.ui-tooltip-content').html(n),
          this.options.track && i && /^mouse/.test(i.type) ? (this._on(this.document, { mousemove: a }), a(i)) : o.position(e.extend({ of: s }, this.options.position)),
          o.hide(),
          this._show(o, this.options.show),
          this.options.show &&
            this.options.show.delay &&
            (h = this.delayedShow =
              setInterval(function () {
                o.is(':visible') && (a(l.of), clearInterval(h));
              }, e.fx.interval)),
          this._trigger('open', i, { tooltip: o }),
          (r = {
            keyup: function (t) {
              if (t.keyCode === e.ui.keyCode.ESCAPE) {
                var i = e.Event(t);
                (i.currentTarget = s[0]), this.close(i, !0);
              }
            },
            remove: function () {
              this._removeTooltip(o);
            }
          }),
          (i && 'mouseover' !== i.type) || (r.mouseleave = 'close'),
          (i && 'focusin' !== i.type) || (r.focusout = 'close'),
          this._on(!0, s, r);
      }
    },
    close: function (t) {
      var s = this,
        n = e(t ? t.currentTarget : this.element),
        a = this._find(n);
      this.closing ||
        (clearInterval(this.delayedShow),
        n.data('ui-tooltip-title') && n.attr('title', n.data('ui-tooltip-title')),
        i(n),
        a.stop(!0),
        this._hide(a, this.options.hide, function () {
          s._removeTooltip(e(this));
        }),
        n.removeData('ui-tooltip-open'),
        this._off(n, 'mouseleave focusout keyup'),
        n[0] !== this.element[0] && this._off(n, 'remove'),
        this._off(this.document, 'mousemove'),
        t &&
          'mouseleave' === t.type &&
          e.each(this.parents, function (t, i) {
            e(i.element).attr('title', i.title), delete s.parents[t];
          }),
        (this.closing = !0),
        this._trigger('close', t, { tooltip: a }),
        (this.closing = !1));
    },
    _tooltip: function (t) {
      var i = 'ui-tooltip-' + s++,
        n = e('<div>')
          .attr({ id: i, role: 'tooltip' })
          .addClass('ui-tooltip ui-widget ui-corner-all ui-widget-content ' + (this.options.tooltipClass || ''));
      return e('<div>').addClass('ui-tooltip-content').appendTo(n), n.appendTo(this.document[0].body), (this.tooltips[i] = t), n;
    },
    _find: function (t) {
      var i = t.data('ui-tooltip-id');
      return i ? e('#' + i) : e();
    },
    _removeTooltip: function (e) {
      e.remove(), delete this.tooltips[e.attr('id')];
    },
    _destroy: function () {
      var t = this;
      e.each(this.tooltips, function (i, s) {
        var n = e.Event('blur');
        (n.target = n.currentTarget = s[0]), t.close(n, !0), e('#' + i).remove(), s.data('ui-tooltip-title') && (s.attr('title', s.data('ui-tooltip-title')), s.removeData('ui-tooltip-title'));
      });
    }
  });
})(jQuery);
(function (e, t) {
  var i = 'ui-effects-';
  (e.effects = { effect: {} }),
    (function (e, t) {
      function i(e, t, i) {
        var s = c[t.type] || {};
        return null == e ? (i || !t.def ? null : t.def) : ((e = s.floor ? ~~e : parseFloat(e)), isNaN(e) ? t.def : s.mod ? (e + s.mod) % s.mod : 0 > e ? 0 : e > s.max ? s.max : e);
      }
      function s(i) {
        var s = l(),
          n = (s._rgba = []);
        return (
          (i = i.toLowerCase()),
          f(h, function (e, a) {
            var o,
              r = a.re.exec(i),
              h = r && a.parse(r),
              l = a.space || 'rgba';
            return h ? ((o = s[l](h)), (s[u[l].cache] = o[u[l].cache]), (n = s._rgba = o._rgba), !1) : t;
          }),
          n.length ? ('0,0,0,0' === n.join() && e.extend(n, a.transparent), s) : a[i]
        );
      }
      function n(e, t, i) {
        return (i = (i + 1) % 1), 1 > 6 * i ? e + 6 * (t - e) * i : 1 > 2 * i ? t : 2 > 3 * i ? e + 6 * (t - e) * (2 / 3 - i) : e;
      }
      var a,
        o = 'backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor',
        r = /^([\-+])=\s*(\d+\.?\d*)/,
        h = [
          {
            re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function (e) {
              return [e[1], e[2], e[3], e[4]];
            }
          },
          {
            re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function (e) {
              return [2.55 * e[1], 2.55 * e[2], 2.55 * e[3], e[4]];
            }
          },
          {
            re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
            parse: function (e) {
              return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)];
            }
          },
          {
            re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
            parse: function (e) {
              return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)];
            }
          },
          {
            re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            space: 'hsla',
            parse: function (e) {
              return [e[1], e[2] / 100, e[3] / 100, e[4]];
            }
          }
        ],
        l = (e.Color = function (t, i, s, n) {
          return new e.Color.fn.parse(t, i, s, n);
        }),
        u = {
          rgba: { props: { red: { idx: 0, type: 'byte' }, green: { idx: 1, type: 'byte' }, blue: { idx: 2, type: 'byte' } } },
          hsla: { props: { hue: { idx: 0, type: 'degrees' }, saturation: { idx: 1, type: 'percent' }, lightness: { idx: 2, type: 'percent' } } }
        },
        c = { byte: { floor: !0, max: 255 }, percent: { max: 1 }, degrees: { mod: 360, floor: !0 } },
        d = (l.support = {}),
        p = e('<p>')[0],
        f = e.each;
      (p.style.cssText = 'background-color:rgba(1,1,1,.5)'),
        (d.rgba = p.style.backgroundColor.indexOf('rgba') > -1),
        f(u, function (e, t) {
          (t.cache = '_' + e), (t.props.alpha = { idx: 3, type: 'percent', def: 1 });
        }),
        (l.fn = e.extend(l.prototype, {
          parse: function (n, o, r, h) {
            if (n === t) return (this._rgba = [null, null, null, null]), this;
            (n.jquery || n.nodeType) && ((n = e(n).css(o)), (o = t));
            var c = this,
              d = e.type(n),
              p = (this._rgba = []);
            return (
              o !== t && ((n = [n, o, r, h]), (d = 'array')),
              'string' === d
                ? this.parse(s(n) || a._default)
                : 'array' === d
                ? (f(u.rgba.props, function (e, t) {
                    p[t.idx] = i(n[t.idx], t);
                  }),
                  this)
                : 'object' === d
                ? (n instanceof l
                    ? f(u, function (e, t) {
                        n[t.cache] && (c[t.cache] = n[t.cache].slice());
                      })
                    : f(u, function (t, s) {
                        var a = s.cache;
                        f(s.props, function (e, t) {
                          if (!c[a] && s.to) {
                            if ('alpha' === e || null == n[e]) return;
                            c[a] = s.to(c._rgba);
                          }
                          c[a][t.idx] = i(n[e], t, !0);
                        }),
                          c[a] && 0 > e.inArray(null, c[a].slice(0, 3)) && ((c[a][3] = 1), s.from && (c._rgba = s.from(c[a])));
                      }),
                  this)
                : t
            );
          },
          is: function (e) {
            var i = l(e),
              s = !0,
              n = this;
            return (
              f(u, function (e, a) {
                var o,
                  r = i[a.cache];
                return (
                  r &&
                    ((o = n[a.cache] || (a.to && a.to(n._rgba)) || []),
                    f(a.props, function (e, i) {
                      return null != r[i.idx] ? (s = r[i.idx] === o[i.idx]) : t;
                    })),
                  s
                );
              }),
              s
            );
          },
          _space: function () {
            var e = [],
              t = this;
            return (
              f(u, function (i, s) {
                t[s.cache] && e.push(i);
              }),
              e.pop()
            );
          },
          transition: function (e, t) {
            var s = l(e),
              n = s._space(),
              a = u[n],
              o = 0 === this.alpha() ? l('transparent') : this,
              r = o[a.cache] || a.to(o._rgba),
              h = r.slice();
            return (
              (s = s[a.cache]),
              f(a.props, function (e, n) {
                var a = n.idx,
                  o = r[a],
                  l = s[a],
                  u = c[n.type] || {};
                null !== l && (null === o ? (h[a] = l) : (u.mod && (l - o > u.mod / 2 ? (o += u.mod) : o - l > u.mod / 2 && (o -= u.mod)), (h[a] = i((l - o) * t + o, n))));
              }),
              this[n](h)
            );
          },
          blend: function (t) {
            if (1 === this._rgba[3]) return this;
            var i = this._rgba.slice(),
              s = i.pop(),
              n = l(t)._rgba;
            return l(
              e.map(i, function (e, t) {
                return (1 - s) * n[t] + s * e;
              })
            );
          },
          toRgbaString: function () {
            var t = 'rgba(',
              i = e.map(this._rgba, function (e, t) {
                return null == e ? (t > 2 ? 1 : 0) : e;
              });
            return 1 === i[3] && (i.pop(), (t = 'rgb(')), t + i.join() + ')';
          },
          toHslaString: function () {
            var t = 'hsla(',
              i = e.map(this.hsla(), function (e, t) {
                return null == e && (e = t > 2 ? 1 : 0), t && 3 > t && (e = Math.round(100 * e) + '%'), e;
              });
            return 1 === i[3] && (i.pop(), (t = 'hsl(')), t + i.join() + ')';
          },
          toHexString: function (t) {
            var i = this._rgba.slice(),
              s = i.pop();
            return (
              t && i.push(~~(255 * s)),
              '#' +
                e
                  .map(i, function (e) {
                    return (e = (e || 0).toString(16)), 1 === e.length ? '0' + e : e;
                  })
                  .join('')
            );
          },
          toString: function () {
            return 0 === this._rgba[3] ? 'transparent' : this.toRgbaString();
          }
        })),
        (l.fn.parse.prototype = l.fn),
        (u.hsla.to = function (e) {
          if (null == e[0] || null == e[1] || null == e[2]) return [null, null, null, e[3]];
          var t,
            i,
            s = e[0] / 255,
            n = e[1] / 255,
            a = e[2] / 255,
            o = e[3],
            r = Math.max(s, n, a),
            h = Math.min(s, n, a),
            l = r - h,
            u = r + h,
            c = 0.5 * u;
          return (
            (t = h === r ? 0 : s === r ? (60 * (n - a)) / l + 360 : n === r ? (60 * (a - s)) / l + 120 : (60 * (s - n)) / l + 240),
            (i = 0 === l ? 0 : 0.5 >= c ? l / u : l / (2 - u)),
            [Math.round(t) % 360, i, c, null == o ? 1 : o]
          );
        }),
        (u.hsla.from = function (e) {
          if (null == e[0] || null == e[1] || null == e[2]) return [null, null, null, e[3]];
          var t = e[0] / 360,
            i = e[1],
            s = e[2],
            a = e[3],
            o = 0.5 >= s ? s * (1 + i) : s + i - s * i,
            r = 2 * s - o;
          return [Math.round(255 * n(r, o, t + 1 / 3)), Math.round(255 * n(r, o, t)), Math.round(255 * n(r, o, t - 1 / 3)), a];
        }),
        f(u, function (s, n) {
          var a = n.props,
            o = n.cache,
            h = n.to,
            u = n.from;
          (l.fn[s] = function (s) {
            if ((h && !this[o] && (this[o] = h(this._rgba)), s === t)) return this[o].slice();
            var n,
              r = e.type(s),
              c = 'array' === r || 'object' === r ? s : arguments,
              d = this[o].slice();
            return (
              f(a, function (e, t) {
                var s = c['object' === r ? e : t.idx];
                null == s && (s = d[t.idx]), (d[t.idx] = i(s, t));
              }),
              u ? ((n = l(u(d))), (n[o] = d), n) : l(d)
            );
          }),
            f(a, function (t, i) {
              l.fn[t] ||
                (l.fn[t] = function (n) {
                  var a,
                    o = e.type(n),
                    h = 'alpha' === t ? (this._hsla ? 'hsla' : 'rgba') : s,
                    l = this[h](),
                    u = l[i.idx];
                  return 'undefined' === o
                    ? u
                    : ('function' === o && ((n = n.call(this, u)), (o = e.type(n))),
                      null == n && i.empty ? this : ('string' === o && ((a = r.exec(n)), a && (n = u + parseFloat(a[2]) * ('+' === a[1] ? 1 : -1))), (l[i.idx] = n), this[h](l)));
                });
            });
        }),
        (l.hook = function (t) {
          var i = t.split(' ');
          f(i, function (t, i) {
            (e.cssHooks[i] = {
              set: function (t, n) {
                var a,
                  o,
                  r = '';
                if ('transparent' !== n && ('string' !== e.type(n) || (a = s(n)))) {
                  if (((n = l(a || n)), !d.rgba && 1 !== n._rgba[3])) {
                    for (o = 'backgroundColor' === i ? t.parentNode : t; ('' === r || 'transparent' === r) && o && o.style; )
                      try {
                        (r = e.css(o, 'backgroundColor')), (o = o.parentNode);
                      } catch (h) {}
                    n = n.blend(r && 'transparent' !== r ? r : '_default');
                  }
                  n = n.toRgbaString();
                }
                try {
                  t.style[i] = n;
                } catch (h) {}
              }
            }),
              (e.fx.step[i] = function (t) {
                t.colorInit || ((t.start = l(t.elem, i)), (t.end = l(t.end)), (t.colorInit = !0)), e.cssHooks[i].set(t.elem, t.start.transition(t.end, t.pos));
              });
          });
        }),
        l.hook(o),
        (e.cssHooks.borderColor = {
          expand: function (e) {
            var t = {};
            return (
              f(['Top', 'Right', 'Bottom', 'Left'], function (i, s) {
                t['border' + s + 'Color'] = e;
              }),
              t
            );
          }
        }),
        (a = e.Color.names =
          {
            aqua: '#00ffff',
            black: '#000000',
            blue: '#0000ff',
            fuchsia: '#ff00ff',
            gray: '#808080',
            green: '#008000',
            lime: '#00ff00',
            maroon: '#800000',
            navy: '#000080',
            olive: '#808000',
            purple: '#800080',
            red: '#ff0000',
            silver: '#c0c0c0',
            teal: '#008080',
            white: '#ffffff',
            yellow: '#ffff00',
            transparent: [null, null, null, 0],
            _default: '#ffffff'
          });
    })(jQuery),
    (function () {
      function i(t) {
        var i,
          s,
          n = t.ownerDocument.defaultView ? t.ownerDocument.defaultView.getComputedStyle(t, null) : t.currentStyle,
          a = {};
        if (n && n.length && n[0] && n[n[0]]) for (s = n.length; s--; ) (i = n[s]), 'string' == typeof n[i] && (a[e.camelCase(i)] = n[i]);
        else for (i in n) 'string' == typeof n[i] && (a[i] = n[i]);
        return a;
      }
      function s(t, i) {
        var s,
          n,
          o = {};
        for (s in i) (n = i[s]), t[s] !== n && (a[s] || ((e.fx.step[s] || !isNaN(parseFloat(n))) && (o[s] = n)));
        return o;
      }
      var n = ['add', 'remove', 'toggle'],
        a = { border: 1, borderBottom: 1, borderColor: 1, borderLeft: 1, borderRight: 1, borderTop: 1, borderWidth: 1, margin: 1, padding: 1 };
      e.each(['borderLeftStyle', 'borderRightStyle', 'borderBottomStyle', 'borderTopStyle'], function (t, i) {
        e.fx.step[i] = function (e) {
          (('none' !== e.end && !e.setAttr) || (1 === e.pos && !e.setAttr)) && (jQuery.style(e.elem, i, e.end), (e.setAttr = !0));
        };
      }),
        e.fn.addBack ||
          (e.fn.addBack = function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
          }),
        (e.effects.animateClass = function (t, a, o, r) {
          var h = e.speed(a, o, r);
          return this.queue(function () {
            var a,
              o = e(this),
              r = o.attr('class') || '',
              l = h.children ? o.find('*').addBack() : o;
            (l = l.map(function () {
              var t = e(this);
              return { el: t, start: i(this) };
            })),
              (a = function () {
                e.each(n, function (e, i) {
                  t[i] && o[i + 'Class'](t[i]);
                });
              }),
              a(),
              (l = l.map(function () {
                return (this.end = i(this.el[0])), (this.diff = s(this.start, this.end)), this;
              })),
              o.attr('class', r),
              (l = l.map(function () {
                var t = this,
                  i = e.Deferred(),
                  s = e.extend({}, h, {
                    queue: !1,
                    complete: function () {
                      i.resolve(t);
                    }
                  });
                return this.el.animate(this.diff, s), i.promise();
              })),
              e.when.apply(e, l.get()).done(function () {
                a(),
                  e.each(arguments, function () {
                    var t = this.el;
                    e.each(this.diff, function (e) {
                      t.css(e, '');
                    });
                  }),
                  h.complete.call(o[0]);
              });
          });
        }),
        e.fn.extend({
          addClass: (function (t) {
            return function (i, s, n, a) {
              return s ? e.effects.animateClass.call(this, { add: i }, s, n, a) : t.apply(this, arguments);
            };
          })(e.fn.addClass),
          removeClass: (function (t) {
            return function (i, s, n, a) {
              return arguments.length > 1 ? e.effects.animateClass.call(this, { remove: i }, s, n, a) : t.apply(this, arguments);
            };
          })(e.fn.removeClass),
          toggleClass: (function (i) {
            return function (s, n, a, o, r) {
              return 'boolean' == typeof n || n === t
                ? a
                  ? e.effects.animateClass.call(this, n ? { add: s } : { remove: s }, a, o, r)
                  : i.apply(this, arguments)
                : e.effects.animateClass.call(this, { toggle: s }, n, a, o);
            };
          })(e.fn.toggleClass),
          switchClass: function (t, i, s, n, a) {
            return e.effects.animateClass.call(this, { add: i, remove: t }, s, n, a);
          }
        });
    })(),
    (function () {
      function s(t, i, s, n) {
        return (
          e.isPlainObject(t) && ((i = t), (t = t.effect)),
          (t = { effect: t }),
          null == i && (i = {}),
          e.isFunction(i) && ((n = i), (s = null), (i = {})),
          ('number' == typeof i || e.fx.speeds[i]) && ((n = s), (s = i), (i = {})),
          e.isFunction(s) && ((n = s), (s = null)),
          i && e.extend(t, i),
          (s = s || i.duration),
          (t.duration = e.fx.off ? 0 : 'number' == typeof s ? s : s in e.fx.speeds ? e.fx.speeds[s] : e.fx.speeds._default),
          (t.complete = n || i.complete),
          t
        );
      }
      function n(t) {
        return !t || 'number' == typeof t || e.fx.speeds[t] ? !0 : 'string' != typeof t || e.effects.effect[t] ? (e.isFunction(t) ? !0 : 'object' != typeof t || t.effect ? !1 : !0) : !0;
      }
      e.extend(e.effects, {
        version: '1.10.4',
        save: function (e, t) {
          for (var s = 0; t.length > s; s++) null !== t[s] && e.data(i + t[s], e[0].style[t[s]]);
        },
        restore: function (e, s) {
          var n, a;
          for (a = 0; s.length > a; a++) null !== s[a] && ((n = e.data(i + s[a])), n === t && (n = ''), e.css(s[a], n));
        },
        setMode: function (e, t) {
          return 'toggle' === t && (t = e.is(':hidden') ? 'show' : 'hide'), t;
        },
        getBaseline: function (e, t) {
          var i, s;
          switch (e[0]) {
            case 'top':
              i = 0;
              break;
            case 'middle':
              i = 0.5;
              break;
            case 'bottom':
              i = 1;
              break;
            default:
              i = e[0] / t.height;
          }
          switch (e[1]) {
            case 'left':
              s = 0;
              break;
            case 'center':
              s = 0.5;
              break;
            case 'right':
              s = 1;
              break;
            default:
              s = e[1] / t.width;
          }
          return { x: s, y: i };
        },
        createWrapper: function (t) {
          if (t.parent().is('.ui-effects-wrapper')) return t.parent();
          var i = { width: t.outerWidth(!0), height: t.outerHeight(!0), float: t.css('float') },
            s = e('<div></div>').addClass('ui-effects-wrapper').css({ fontSize: '100%', background: 'transparent', border: 'none', margin: 0, padding: 0 }),
            n = { width: t.width(), height: t.height() },
            a = document.activeElement;
          try {
            a.id;
          } catch (o) {
            a = document.body;
          }
          return (
            t.wrap(s),
            (t[0] === a || e.contains(t[0], a)) && e(a).focus(),
            (s = t.parent()),
            'static' === t.css('position')
              ? (s.css({ position: 'relative' }), t.css({ position: 'relative' }))
              : (e.extend(i, { position: t.css('position'), zIndex: t.css('z-index') }),
                e.each(['top', 'left', 'bottom', 'right'], function (e, s) {
                  (i[s] = t.css(s)), isNaN(parseInt(i[s], 10)) && (i[s] = 'auto');
                }),
                t.css({ position: 'relative', top: 0, left: 0, right: 'auto', bottom: 'auto' })),
            t.css(n),
            s.css(i).show()
          );
        },
        removeWrapper: function (t) {
          var i = document.activeElement;
          return t.parent().is('.ui-effects-wrapper') && (t.parent().replaceWith(t), (t[0] === i || e.contains(t[0], i)) && e(i).focus()), t;
        },
        setTransition: function (t, i, s, n) {
          return (
            (n = n || {}),
            e.each(i, function (e, i) {
              var a = t.cssUnit(i);
              a[0] > 0 && (n[i] = a[0] * s + a[1]);
            }),
            n
          );
        }
      }),
        e.fn.extend({
          effect: function () {
            function t(t) {
              function s() {
                e.isFunction(a) && a.call(n[0]), e.isFunction(t) && t();
              }
              var n = e(this),
                a = i.complete,
                r = i.mode;
              (n.is(':hidden') ? 'hide' === r : 'show' === r) ? (n[r](), s()) : o.call(n[0], i, s);
            }
            var i = s.apply(this, arguments),
              n = i.mode,
              a = i.queue,
              o = e.effects.effect[i.effect];
            return e.fx.off || !o
              ? n
                ? this[n](i.duration, i.complete)
                : this.each(function () {
                    i.complete && i.complete.call(this);
                  })
              : a === !1
              ? this.each(t)
              : this.queue(a || 'fx', t);
          },
          show: (function (e) {
            return function (t) {
              if (n(t)) return e.apply(this, arguments);
              var i = s.apply(this, arguments);
              return (i.mode = 'show'), this.effect.call(this, i);
            };
          })(e.fn.show),
          hide: (function (e) {
            return function (t) {
              if (n(t)) return e.apply(this, arguments);
              var i = s.apply(this, arguments);
              return (i.mode = 'hide'), this.effect.call(this, i);
            };
          })(e.fn.hide),
          toggle: (function (e) {
            return function (t) {
              if (n(t) || 'boolean' == typeof t) return e.apply(this, arguments);
              var i = s.apply(this, arguments);
              return (i.mode = 'toggle'), this.effect.call(this, i);
            };
          })(e.fn.toggle),
          cssUnit: function (t) {
            var i = this.css(t),
              s = [];
            return (
              e.each(['em', 'px', '%', 'pt'], function (e, t) {
                i.indexOf(t) > 0 && (s = [parseFloat(i), t]);
              }),
              s
            );
          }
        });
    })(),
    (function () {
      var t = {};
      e.each(['Quad', 'Cubic', 'Quart', 'Quint', 'Expo'], function (e, i) {
        t[i] = function (t) {
          return Math.pow(t, e + 2);
        };
      }),
        e.extend(t, {
          Sine: function (e) {
            return 1 - Math.cos((e * Math.PI) / 2);
          },
          Circ: function (e) {
            return 1 - Math.sqrt(1 - e * e);
          },
          Elastic: function (e) {
            return 0 === e || 1 === e ? e : -Math.pow(2, 8 * (e - 1)) * Math.sin(((80 * (e - 1) - 7.5) * Math.PI) / 15);
          },
          Back: function (e) {
            return e * e * (3 * e - 2);
          },
          Bounce: function (e) {
            for (var t, i = 4; ((t = Math.pow(2, --i)) - 1) / 11 > e; );
            return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * t - 2) / 22 - e, 2);
          }
        }),
        e.each(t, function (t, i) {
          (e.easing['easeIn' + t] = i),
            (e.easing['easeOut' + t] = function (e) {
              return 1 - i(1 - e);
            }),
            (e.easing['easeInOut' + t] = function (e) {
              return 0.5 > e ? i(2 * e) / 2 : 1 - i(-2 * e + 2) / 2;
            });
        });
    })();
})(jQuery);
(function (e) {
  var t = /up|down|vertical/,
    i = /up|left|vertical|horizontal/;
  e.effects.effect.blind = function (s, a) {
    var n,
      o,
      r,
      l = e(this),
      h = ['position', 'top', 'bottom', 'left', 'right', 'height', 'width'],
      u = e.effects.setMode(l, s.mode || 'hide'),
      c = s.direction || 'up',
      d = t.test(c),
      p = d ? 'height' : 'width',
      f = d ? 'top' : 'left',
      m = i.test(c),
      g = {},
      v = 'show' === u;
    l.parent().is('.ui-effects-wrapper') ? e.effects.save(l.parent(), h) : e.effects.save(l, h),
      l.show(),
      (n = e.effects.createWrapper(l).css({ overflow: 'hidden' })),
      (o = n[p]()),
      (r = parseFloat(n.css(f)) || 0),
      (g[p] = v ? o : 0),
      m ||
        (l
          .css(d ? 'bottom' : 'right', 0)
          .css(d ? 'top' : 'left', 'auto')
          .css({ position: 'absolute' }),
        (g[f] = v ? r : o + r)),
      v && (n.css(p, 0), m || n.css(f, r + o)),
      n.animate(g, {
        duration: s.duration,
        easing: s.easing,
        queue: !1,
        complete: function () {
          'hide' === u && l.hide(), e.effects.restore(l, h), e.effects.removeWrapper(l), a();
        }
      });
  };
})(jQuery);
(function (e) {
  e.effects.effect.bounce = function (t, i) {
    var s,
      a,
      n,
      o = e(this),
      r = ['position', 'top', 'bottom', 'left', 'right', 'height', 'width'],
      l = e.effects.setMode(o, t.mode || 'effect'),
      h = 'hide' === l,
      u = 'show' === l,
      c = t.direction || 'up',
      d = t.distance,
      p = t.times || 5,
      f = 2 * p + (u || h ? 1 : 0),
      m = t.duration / f,
      g = t.easing,
      v = 'up' === c || 'down' === c ? 'top' : 'left',
      _ = 'up' === c || 'left' === c,
      b = o.queue(),
      y = b.length;
    for (
      (u || h) && r.push('opacity'),
        e.effects.save(o, r),
        o.show(),
        e.effects.createWrapper(o),
        d || (d = o['top' === v ? 'outerHeight' : 'outerWidth']() / 3),
        u &&
          ((n = { opacity: 1 }),
          (n[v] = 0),
          o
            .css('opacity', 0)
            .css(v, _ ? 2 * -d : 2 * d)
            .animate(n, m, g)),
        h && (d /= Math.pow(2, p - 1)),
        n = {},
        n[v] = 0,
        s = 0;
      p > s;
      s++
    )
      (a = {}), (a[v] = (_ ? '-=' : '+=') + d), o.animate(a, m, g).animate(n, m, g), (d = h ? 2 * d : d / 2);
    h && ((a = { opacity: 0 }), (a[v] = (_ ? '-=' : '+=') + d), o.animate(a, m, g)),
      o.queue(function () {
        h && o.hide(), e.effects.restore(o, r), e.effects.removeWrapper(o), i();
      }),
      y > 1 && b.splice.apply(b, [1, 0].concat(b.splice(y, f + 1))),
      o.dequeue();
  };
})(jQuery);
(function (e) {
  e.effects.effect.clip = function (t, i) {
    var s,
      a,
      n,
      o = e(this),
      r = ['position', 'top', 'bottom', 'left', 'right', 'height', 'width'],
      l = e.effects.setMode(o, t.mode || 'hide'),
      h = 'show' === l,
      u = t.direction || 'vertical',
      c = 'vertical' === u,
      d = c ? 'height' : 'width',
      p = c ? 'top' : 'left',
      f = {};
    e.effects.save(o, r),
      o.show(),
      (s = e.effects.createWrapper(o).css({ overflow: 'hidden' })),
      (a = 'IMG' === o[0].tagName ? s : o),
      (n = a[d]()),
      h && (a.css(d, 0), a.css(p, n / 2)),
      (f[d] = h ? n : 0),
      (f[p] = h ? 0 : n / 2),
      a.animate(f, {
        queue: !1,
        duration: t.duration,
        easing: t.easing,
        complete: function () {
          h || o.hide(), e.effects.restore(o, r), e.effects.removeWrapper(o), i();
        }
      });
  };
})(jQuery);
(function (e) {
  e.effects.effect.drop = function (t, i) {
    var s,
      a = e(this),
      n = ['position', 'top', 'bottom', 'left', 'right', 'opacity', 'height', 'width'],
      o = e.effects.setMode(a, t.mode || 'hide'),
      r = 'show' === o,
      l = t.direction || 'left',
      h = 'up' === l || 'down' === l ? 'top' : 'left',
      u = 'up' === l || 'left' === l ? 'pos' : 'neg',
      c = { opacity: r ? 1 : 0 };
    e.effects.save(a, n),
      a.show(),
      e.effects.createWrapper(a),
      (s = t.distance || a['top' === h ? 'outerHeight' : 'outerWidth'](!0) / 2),
      r && a.css('opacity', 0).css(h, 'pos' === u ? -s : s),
      (c[h] = (r ? ('pos' === u ? '+=' : '-=') : 'pos' === u ? '-=' : '+=') + s),
      a.animate(c, {
        queue: !1,
        duration: t.duration,
        easing: t.easing,
        complete: function () {
          'hide' === o && a.hide(), e.effects.restore(a, n), e.effects.removeWrapper(a), i();
        }
      });
  };
})(jQuery);
(function (e) {
  e.effects.effect.explode = function (t, i) {
    function s() {
      b.push(this), b.length === c * d && a();
    }
    function a() {
      p.css({ visibility: 'visible' }), e(b).remove(), m || p.hide(), i();
    }
    var n,
      o,
      r,
      l,
      h,
      u,
      c = t.pieces ? Math.round(Math.sqrt(t.pieces)) : 3,
      d = c,
      p = e(this),
      f = e.effects.setMode(p, t.mode || 'hide'),
      m = 'show' === f,
      g = p.show().css('visibility', 'hidden').offset(),
      v = Math.ceil(p.outerWidth() / d),
      _ = Math.ceil(p.outerHeight() / c),
      b = [];
    for (n = 0; c > n; n++)
      for (l = g.top + n * _, u = n - (c - 1) / 2, o = 0; d > o; o++)
        (r = g.left + o * v),
          (h = o - (d - 1) / 2),
          p
            .clone()
            .appendTo('body')
            .wrap('<div></div>')
            .css({ position: 'absolute', visibility: 'visible', left: -o * v, top: -n * _ })
            .parent()
            .addClass('ui-effects-explode')
            .css({ position: 'absolute', overflow: 'hidden', width: v, height: _, left: r + (m ? h * v : 0), top: l + (m ? u * _ : 0), opacity: m ? 0 : 1 })
            .animate({ left: r + (m ? 0 : h * v), top: l + (m ? 0 : u * _), opacity: m ? 1 : 0 }, t.duration || 500, t.easing, s);
  };
})(jQuery);
(function (e) {
  e.effects.effect.fade = function (t, i) {
    var s = e(this),
      a = e.effects.setMode(s, t.mode || 'toggle');
    s.animate({ opacity: a }, { queue: !1, duration: t.duration, easing: t.easing, complete: i });
  };
})(jQuery);
(function (e) {
  e.effects.effect.fold = function (t, i) {
    var s,
      a,
      n = e(this),
      o = ['position', 'top', 'bottom', 'left', 'right', 'height', 'width'],
      r = e.effects.setMode(n, t.mode || 'hide'),
      l = 'show' === r,
      h = 'hide' === r,
      u = t.size || 15,
      c = /([0-9]+)%/.exec(u),
      d = !!t.horizFirst,
      p = l !== d,
      f = p ? ['width', 'height'] : ['height', 'width'],
      m = t.duration / 2,
      g = {},
      v = {};
    e.effects.save(n, o),
      n.show(),
      (s = e.effects.createWrapper(n).css({ overflow: 'hidden' })),
      (a = p ? [s.width(), s.height()] : [s.height(), s.width()]),
      c && (u = (parseInt(c[1], 10) / 100) * a[h ? 0 : 1]),
      l && s.css(d ? { height: 0, width: u } : { height: u, width: 0 }),
      (g[f[0]] = l ? a[0] : u),
      (v[f[1]] = l ? a[1] : 0),
      s.animate(g, m, t.easing).animate(v, m, t.easing, function () {
        h && n.hide(), e.effects.restore(n, o), e.effects.removeWrapper(n), i();
      });
  };
})(jQuery);
(function (e) {
  e.effects.effect.highlight = function (t, i) {
    var s = e(this),
      a = ['backgroundImage', 'backgroundColor', 'opacity'],
      n = e.effects.setMode(s, t.mode || 'show'),
      o = { backgroundColor: s.css('backgroundColor') };
    'hide' === n && (o.opacity = 0),
      e.effects.save(s, a),
      s
        .show()
        .css({ backgroundImage: 'none', backgroundColor: t.color || '#ffff99' })
        .animate(o, {
          queue: !1,
          duration: t.duration,
          easing: t.easing,
          complete: function () {
            'hide' === n && s.hide(), e.effects.restore(s, a), i();
          }
        });
  };
})(jQuery);
(function (e) {
  e.effects.effect.pulsate = function (t, i) {
    var s,
      a = e(this),
      n = e.effects.setMode(a, t.mode || 'show'),
      o = 'show' === n,
      r = 'hide' === n,
      l = o || 'hide' === n,
      h = 2 * (t.times || 5) + (l ? 1 : 0),
      u = t.duration / h,
      c = 0,
      d = a.queue(),
      p = d.length;
    for ((o || !a.is(':visible')) && (a.css('opacity', 0).show(), (c = 1)), s = 1; h > s; s++) a.animate({ opacity: c }, u, t.easing), (c = 1 - c);
    a.animate({ opacity: c }, u, t.easing),
      a.queue(function () {
        r && a.hide(), i();
      }),
      p > 1 && d.splice.apply(d, [1, 0].concat(d.splice(p, h + 1))),
      a.dequeue();
  };
})(jQuery);
(function (e) {
  (e.effects.effect.puff = function (t, i) {
    var s = e(this),
      a = e.effects.setMode(s, t.mode || 'hide'),
      n = 'hide' === a,
      o = parseInt(t.percent, 10) || 150,
      r = o / 100,
      h = { height: s.height(), width: s.width(), outerHeight: s.outerHeight(), outerWidth: s.outerWidth() };
    e.extend(t, {
      effect: 'scale',
      queue: !1,
      fade: !0,
      mode: a,
      complete: i,
      percent: n ? o : 100,
      from: n ? h : { height: h.height * r, width: h.width * r, outerHeight: h.outerHeight * r, outerWidth: h.outerWidth * r }
    }),
      s.effect(t);
  }),
    (e.effects.effect.scale = function (t, i) {
      var s = e(this),
        a = e.extend(!0, {}, t),
        n = e.effects.setMode(s, t.mode || 'effect'),
        o = parseInt(t.percent, 10) || (0 === parseInt(t.percent, 10) ? 0 : 'hide' === n ? 0 : 100),
        r = t.direction || 'both',
        h = t.origin,
        l = { height: s.height(), width: s.width(), outerHeight: s.outerHeight(), outerWidth: s.outerWidth() },
        u = { y: 'horizontal' !== r ? o / 100 : 1, x: 'vertical' !== r ? o / 100 : 1 };
      (a.effect = 'size'),
        (a.queue = !1),
        (a.complete = i),
        'effect' !== n && ((a.origin = h || ['middle', 'center']), (a.restore = !0)),
        (a.from = t.from || ('show' === n ? { height: 0, width: 0, outerHeight: 0, outerWidth: 0 } : l)),
        (a.to = { height: l.height * u.y, width: l.width * u.x, outerHeight: l.outerHeight * u.y, outerWidth: l.outerWidth * u.x }),
        a.fade && ('show' === n && ((a.from.opacity = 0), (a.to.opacity = 1)), 'hide' === n && ((a.from.opacity = 1), (a.to.opacity = 0))),
        s.effect(a);
    }),
    (e.effects.effect.size = function (t, i) {
      var s,
        a,
        n,
        o = e(this),
        r = ['position', 'top', 'bottom', 'left', 'right', 'width', 'height', 'overflow', 'opacity'],
        h = ['position', 'top', 'bottom', 'left', 'right', 'overflow', 'opacity'],
        l = ['width', 'height', 'overflow'],
        u = ['fontSize'],
        c = ['borderTopWidth', 'borderBottomWidth', 'paddingTop', 'paddingBottom'],
        d = ['borderLeftWidth', 'borderRightWidth', 'paddingLeft', 'paddingRight'],
        p = e.effects.setMode(o, t.mode || 'effect'),
        f = t.restore || 'effect' !== p,
        m = t.scale || 'both',
        g = t.origin || ['middle', 'center'],
        v = o.css('position'),
        _ = f ? r : h,
        b = { height: 0, width: 0, outerHeight: 0, outerWidth: 0 };
      'show' === p && o.show(),
        (s = { height: o.height(), width: o.width(), outerHeight: o.outerHeight(), outerWidth: o.outerWidth() }),
        'toggle' === t.mode && 'show' === p ? ((o.from = t.to || b), (o.to = t.from || s)) : ((o.from = t.from || ('show' === p ? b : s)), (o.to = t.to || ('hide' === p ? b : s))),
        (n = { from: { y: o.from.height / s.height, x: o.from.width / s.width }, to: { y: o.to.height / s.height, x: o.to.width / s.width } }),
        ('box' === m || 'both' === m) &&
          (n.from.y !== n.to.y && ((_ = _.concat(c)), (o.from = e.effects.setTransition(o, c, n.from.y, o.from)), (o.to = e.effects.setTransition(o, c, n.to.y, o.to))),
          n.from.x !== n.to.x && ((_ = _.concat(d)), (o.from = e.effects.setTransition(o, d, n.from.x, o.from)), (o.to = e.effects.setTransition(o, d, n.to.x, o.to)))),
        ('content' === m || 'both' === m) &&
          n.from.y !== n.to.y &&
          ((_ = _.concat(u).concat(l)), (o.from = e.effects.setTransition(o, u, n.from.y, o.from)), (o.to = e.effects.setTransition(o, u, n.to.y, o.to))),
        e.effects.save(o, _),
        o.show(),
        e.effects.createWrapper(o),
        o.css('overflow', 'hidden').css(o.from),
        g &&
          ((a = e.effects.getBaseline(g, s)),
          (o.from.top = (s.outerHeight - o.outerHeight()) * a.y),
          (o.from.left = (s.outerWidth - o.outerWidth()) * a.x),
          (o.to.top = (s.outerHeight - o.to.outerHeight) * a.y),
          (o.to.left = (s.outerWidth - o.to.outerWidth) * a.x)),
        o.css(o.from),
        ('content' === m || 'both' === m) &&
          ((c = c.concat(['marginTop', 'marginBottom']).concat(u)),
          (d = d.concat(['marginLeft', 'marginRight'])),
          (l = r.concat(c).concat(d)),
          o.find('*[width]').each(function () {
            var i = e(this),
              s = { height: i.height(), width: i.width(), outerHeight: i.outerHeight(), outerWidth: i.outerWidth() };
            f && e.effects.save(i, l),
              (i.from = { height: s.height * n.from.y, width: s.width * n.from.x, outerHeight: s.outerHeight * n.from.y, outerWidth: s.outerWidth * n.from.x }),
              (i.to = { height: s.height * n.to.y, width: s.width * n.to.x, outerHeight: s.height * n.to.y, outerWidth: s.width * n.to.x }),
              n.from.y !== n.to.y && ((i.from = e.effects.setTransition(i, c, n.from.y, i.from)), (i.to = e.effects.setTransition(i, c, n.to.y, i.to))),
              n.from.x !== n.to.x && ((i.from = e.effects.setTransition(i, d, n.from.x, i.from)), (i.to = e.effects.setTransition(i, d, n.to.x, i.to))),
              i.css(i.from),
              i.animate(i.to, t.duration, t.easing, function () {
                f && e.effects.restore(i, l);
              });
          })),
        o.animate(o.to, {
          queue: !1,
          duration: t.duration,
          easing: t.easing,
          complete: function () {
            0 === o.to.opacity && o.css('opacity', o.from.opacity),
              'hide' === p && o.hide(),
              e.effects.restore(o, _),
              f ||
                ('static' === v
                  ? o.css({ position: 'relative', top: o.to.top, left: o.to.left })
                  : e.each(['top', 'left'], function (e, t) {
                      o.css(t, function (t, i) {
                        var s = parseInt(i, 10),
                          a = e ? o.to.left : o.to.top;
                        return 'auto' === i ? a + 'px' : s + a + 'px';
                      });
                    })),
              e.effects.removeWrapper(o),
              i();
          }
        });
    });
})(jQuery);
(function (e) {
  e.effects.effect.shake = function (t, i) {
    var s,
      a = e(this),
      n = ['position', 'top', 'bottom', 'left', 'right', 'height', 'width'],
      o = e.effects.setMode(a, t.mode || 'effect'),
      r = t.direction || 'left',
      h = t.distance || 20,
      l = t.times || 3,
      u = 2 * l + 1,
      c = Math.round(t.duration / u),
      d = 'up' === r || 'down' === r ? 'top' : 'left',
      p = 'up' === r || 'left' === r,
      f = {},
      m = {},
      g = {},
      v = a.queue(),
      _ = v.length;
    for (
      e.effects.save(a, n), a.show(), e.effects.createWrapper(a), f[d] = (p ? '-=' : '+=') + h, m[d] = (p ? '+=' : '-=') + 2 * h, g[d] = (p ? '-=' : '+=') + 2 * h, a.animate(f, c, t.easing), s = 1;
      l > s;
      s++
    )
      a.animate(m, c, t.easing).animate(g, c, t.easing);
    a
      .animate(m, c, t.easing)
      .animate(f, c / 2, t.easing)
      .queue(function () {
        'hide' === o && a.hide(), e.effects.restore(a, n), e.effects.removeWrapper(a), i();
      }),
      _ > 1 && v.splice.apply(v, [1, 0].concat(v.splice(_, u + 1))),
      a.dequeue();
  };
})(jQuery);
(function (e) {
  e.effects.effect.slide = function (t, i) {
    var s,
      a = e(this),
      n = ['position', 'top', 'bottom', 'left', 'right', 'width', 'height'],
      o = e.effects.setMode(a, t.mode || 'show'),
      r = 'show' === o,
      h = t.direction || 'left',
      l = 'up' === h || 'down' === h ? 'top' : 'left',
      u = 'up' === h || 'left' === h,
      c = {};
    e.effects.save(a, n),
      a.show(),
      (s = t.distance || a['top' === l ? 'outerHeight' : 'outerWidth'](!0)),
      e.effects.createWrapper(a).css({ overflow: 'hidden' }),
      r && a.css(l, u ? (isNaN(s) ? '-' + s : -s) : s),
      (c[l] = (r ? (u ? '+=' : '-=') : u ? '-=' : '+=') + s),
      a.animate(c, {
        queue: !1,
        duration: t.duration,
        easing: t.easing,
        complete: function () {
          'hide' === o && a.hide(), e.effects.restore(a, n), e.effects.removeWrapper(a), i();
        }
      });
  };
})(jQuery);
(function (e) {
  e.effects.effect.transfer = function (t, i) {
    var s = e(this),
      a = e(t.to),
      n = 'fixed' === a.css('position'),
      o = e('body'),
      r = n ? o.scrollTop() : 0,
      h = n ? o.scrollLeft() : 0,
      l = a.offset(),
      u = { top: l.top - r, left: l.left - h, height: a.innerHeight(), width: a.innerWidth() },
      c = s.offset(),
      d = e("<div class='ui-effects-transfer'></div>")
        .appendTo(document.body)
        .addClass(t.className)
        .css({ top: c.top - r, left: c.left - h, height: s.innerHeight(), width: s.innerWidth(), position: n ? 'fixed' : 'absolute' })
        .animate(u, t.duration, t.easing, function () {
          d.remove(), i();
        });
  };
})(jQuery);

/**
 * Swiper 8.4.7
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2023 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: January 30, 2023
 */

!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define(t)
    : ((e = 'undefined' != typeof globalThis ? globalThis : e || self).Swiper = t());
})(this, function () {
  'use strict';
  function e(e) {
    return null !== e && 'object' == typeof e && 'constructor' in e && e.constructor === Object;
  }
  function t(s, a) {
    void 0 === s && (s = {}),
      void 0 === a && (a = {}),
      Object.keys(a).forEach((i) => {
        void 0 === s[i] ? (s[i] = a[i]) : e(a[i]) && e(s[i]) && Object.keys(a[i]).length > 0 && t(s[i], a[i]);
      });
  }
  const s = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: { blur() {}, nodeName: '' },
    querySelector: () => null,
    querySelectorAll: () => [],
    getElementById: () => null,
    createEvent: () => ({ initEvent() {} }),
    createElement: () => ({ children: [], childNodes: [], style: {}, setAttribute() {}, getElementsByTagName: () => [] }),
    createElementNS: () => ({}),
    importNode: () => null,
    location: { hash: '', host: '', hostname: '', href: '', origin: '', pathname: '', protocol: '', search: '' }
  };
  function a() {
    const e = 'undefined' != typeof document ? document : {};
    return t(e, s), e;
  }
  const i = {
    document: s,
    navigator: { userAgent: '' },
    location: { hash: '', host: '', hostname: '', href: '', origin: '', pathname: '', protocol: '', search: '' },
    history: { replaceState() {}, pushState() {}, go() {}, back() {} },
    CustomEvent: function () {
      return this;
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle: () => ({ getPropertyValue: () => '' }),
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia: () => ({}),
    requestAnimationFrame: (e) => ('undefined' == typeof setTimeout ? (e(), null) : setTimeout(e, 0)),
    cancelAnimationFrame(e) {
      'undefined' != typeof setTimeout && clearTimeout(e);
    }
  };
  function r() {
    const e = 'undefined' != typeof window ? window : {};
    return t(e, i), e;
  }
  class n extends Array {
    constructor(e) {
      'number' == typeof e
        ? super(e)
        : (super(...(e || [])),
          (function (e) {
            const t = e.__proto__;
            Object.defineProperty(e, '__proto__', {
              get: () => t,
              set(e) {
                t.__proto__ = e;
              }
            });
          })(this));
    }
  }
  function l(e) {
    void 0 === e && (e = []);
    const t = [];
    return (
      e.forEach((e) => {
        Array.isArray(e) ? t.push(...l(e)) : t.push(e);
      }),
      t
    );
  }
  function o(e, t) {
    return Array.prototype.filter.call(e, t);
  }
  function d(e, t) {
    const s = r(),
      i = a();
    let l = [];
    if (!t && e instanceof n) return e;
    if (!e) return new n(l);
    if ('string' == typeof e) {
      const s = e.trim();
      if (s.indexOf('<') >= 0 && s.indexOf('>') >= 0) {
        let e = 'div';
        0 === s.indexOf('<li') && (e = 'ul'),
          0 === s.indexOf('<tr') && (e = 'tbody'),
          (0 !== s.indexOf('<td') && 0 !== s.indexOf('<th')) || (e = 'tr'),
          0 === s.indexOf('<tbody') && (e = 'table'),
          0 === s.indexOf('<option') && (e = 'select');
        const t = i.createElement(e);
        t.innerHTML = s;
        for (let e = 0; e < t.childNodes.length; e += 1) l.push(t.childNodes[e]);
      } else
        l = (function (e, t) {
          if ('string' != typeof e) return [e];
          const s = [],
            a = t.querySelectorAll(e);
          for (let e = 0; e < a.length; e += 1) s.push(a[e]);
          return s;
        })(e.trim(), t || i);
    } else if (e.nodeType || e === s || e === i) l.push(e);
    else if (Array.isArray(e)) {
      if (e instanceof n) return e;
      l = e;
    }
    return new n(
      (function (e) {
        const t = [];
        for (let s = 0; s < e.length; s += 1) -1 === t.indexOf(e[s]) && t.push(e[s]);
        return t;
      })(l)
    );
  }
  d.fn = n.prototype;
  const c = {
    addClass: function () {
      for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
      const a = l(t.map((e) => e.split(' ')));
      return (
        this.forEach((e) => {
          e.classList.add(...a);
        }),
        this
      );
    },
    removeClass: function () {
      for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
      const a = l(t.map((e) => e.split(' ')));
      return (
        this.forEach((e) => {
          e.classList.remove(...a);
        }),
        this
      );
    },
    hasClass: function () {
      for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
      const a = l(t.map((e) => e.split(' ')));
      return o(this, (e) => a.filter((t) => e.classList.contains(t)).length > 0).length > 0;
    },
    toggleClass: function () {
      for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
      const a = l(t.map((e) => e.split(' ')));
      this.forEach((e) => {
        a.forEach((t) => {
          e.classList.toggle(t);
        });
      });
    },
    attr: function (e, t) {
      if (1 === arguments.length && 'string' == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
      for (let s = 0; s < this.length; s += 1)
        if (2 === arguments.length) this[s].setAttribute(e, t);
        else for (const t in e) (this[s][t] = e[t]), this[s].setAttribute(t, e[t]);
      return this;
    },
    removeAttr: function (e) {
      for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
      return this;
    },
    transform: function (e) {
      for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
      return this;
    },
    transition: function (e) {
      for (let t = 0; t < this.length; t += 1) this[t].style.transitionDuration = 'string' != typeof e ? `${e}ms` : e;
      return this;
    },
    on: function () {
      for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
      let [a, i, r, n] = t;
      function l(e) {
        const t = e.target;
        if (!t) return;
        const s = e.target.dom7EventData || [];
        if ((s.indexOf(e) < 0 && s.unshift(e), d(t).is(i))) r.apply(t, s);
        else {
          const e = d(t).parents();
          for (let t = 0; t < e.length; t += 1) d(e[t]).is(i) && r.apply(e[t], s);
        }
      }
      function o(e) {
        const t = (e && e.target && e.target.dom7EventData) || [];
        t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t);
      }
      'function' == typeof t[1] && (([a, r, n] = t), (i = void 0)), n || (n = !1);
      const c = a.split(' ');
      let p;
      for (let e = 0; e < this.length; e += 1) {
        const t = this[e];
        if (i)
          for (p = 0; p < c.length; p += 1) {
            const e = c[p];
            t.dom7LiveListeners || (t.dom7LiveListeners = {}),
              t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
              t.dom7LiveListeners[e].push({ listener: r, proxyListener: l }),
              t.addEventListener(e, l, n);
          }
        else
          for (p = 0; p < c.length; p += 1) {
            const e = c[p];
            t.dom7Listeners || (t.dom7Listeners = {}), t.dom7Listeners[e] || (t.dom7Listeners[e] = []), t.dom7Listeners[e].push({ listener: r, proxyListener: o }), t.addEventListener(e, o, n);
          }
      }
      return this;
    },
    off: function () {
      for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++) t[s] = arguments[s];
      let [a, i, r, n] = t;
      'function' == typeof t[1] && (([a, r, n] = t), (i = void 0)), n || (n = !1);
      const l = a.split(' ');
      for (let e = 0; e < l.length; e += 1) {
        const t = l[e];
        for (let e = 0; e < this.length; e += 1) {
          const s = this[e];
          let a;
          if ((!i && s.dom7Listeners ? (a = s.dom7Listeners[t]) : i && s.dom7LiveListeners && (a = s.dom7LiveListeners[t]), a && a.length))
            for (let e = a.length - 1; e >= 0; e -= 1) {
              const i = a[e];
              (r && i.listener === r) || (r && i.listener && i.listener.dom7proxy && i.listener.dom7proxy === r)
                ? (s.removeEventListener(t, i.proxyListener, n), a.splice(e, 1))
                : r || (s.removeEventListener(t, i.proxyListener, n), a.splice(e, 1));
            }
        }
      }
      return this;
    },
    trigger: function () {
      const e = r();
      for (var t = arguments.length, s = new Array(t), a = 0; a < t; a++) s[a] = arguments[a];
      const i = s[0].split(' '),
        n = s[1];
      for (let t = 0; t < i.length; t += 1) {
        const a = i[t];
        for (let t = 0; t < this.length; t += 1) {
          const i = this[t];
          if (e.CustomEvent) {
            const t = new e.CustomEvent(a, { detail: n, bubbles: !0, cancelable: !0 });
            (i.dom7EventData = s.filter((e, t) => t > 0)), i.dispatchEvent(t), (i.dom7EventData = []), delete i.dom7EventData;
          }
        }
      }
      return this;
    },
    transitionEnd: function (e) {
      const t = this;
      return (
        e &&
          t.on('transitionend', function s(a) {
            a.target === this && (e.call(this, a), t.off('transitionend', s));
          }),
        this
      );
    },
    outerWidth: function (e) {
      if (this.length > 0) {
        if (e) {
          const e = this.styles();
          return this[0].offsetWidth + parseFloat(e.getPropertyValue('margin-right')) + parseFloat(e.getPropertyValue('margin-left'));
        }
        return this[0].offsetWidth;
      }
      return null;
    },
    outerHeight: function (e) {
      if (this.length > 0) {
        if (e) {
          const e = this.styles();
          return this[0].offsetHeight + parseFloat(e.getPropertyValue('margin-top')) + parseFloat(e.getPropertyValue('margin-bottom'));
        }
        return this[0].offsetHeight;
      }
      return null;
    },
    styles: function () {
      const e = r();
      return this[0] ? e.getComputedStyle(this[0], null) : {};
    },
    offset: function () {
      if (this.length > 0) {
        const e = r(),
          t = a(),
          s = this[0],
          i = s.getBoundingClientRect(),
          n = t.body,
          l = s.clientTop || n.clientTop || 0,
          o = s.clientLeft || n.clientLeft || 0,
          d = s === e ? e.scrollY : s.scrollTop,
          c = s === e ? e.scrollX : s.scrollLeft;
        return { top: i.top + d - l, left: i.left + c - o };
      }
      return null;
    },
    css: function (e, t) {
      const s = r();
      let a;
      if (1 === arguments.length) {
        if ('string' != typeof e) {
          for (a = 0; a < this.length; a += 1) for (const t in e) this[a].style[t] = e[t];
          return this;
        }
        if (this[0]) return s.getComputedStyle(this[0], null).getPropertyValue(e);
      }
      if (2 === arguments.length && 'string' == typeof e) {
        for (a = 0; a < this.length; a += 1) this[a].style[e] = t;
        return this;
      }
      return this;
    },
    each: function (e) {
      return e
        ? (this.forEach((t, s) => {
            e.apply(t, [t, s]);
          }),
          this)
        : this;
    },
    html: function (e) {
      if (void 0 === e) return this[0] ? this[0].innerHTML : null;
      for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
      return this;
    },
    text: function (e) {
      if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
      for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
      return this;
    },
    is: function (e) {
      const t = r(),
        s = a(),
        i = this[0];
      let l, o;
      if (!i || void 0 === e) return !1;
      if ('string' == typeof e) {
        if (i.matches) return i.matches(e);
        if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
        if (i.msMatchesSelector) return i.msMatchesSelector(e);
        for (l = d(e), o = 0; o < l.length; o += 1) if (l[o] === i) return !0;
        return !1;
      }
      if (e === s) return i === s;
      if (e === t) return i === t;
      if (e.nodeType || e instanceof n) {
        for (l = e.nodeType ? [e] : e, o = 0; o < l.length; o += 1) if (l[o] === i) return !0;
        return !1;
      }
      return !1;
    },
    index: function () {
      let e,
        t = this[0];
      if (t) {
        for (e = 0; null !== (t = t.previousSibling); ) 1 === t.nodeType && (e += 1);
        return e;
      }
    },
    eq: function (e) {
      if (void 0 === e) return this;
      const t = this.length;
      if (e > t - 1) return d([]);
      if (e < 0) {
        const s = t + e;
        return d(s < 0 ? [] : [this[s]]);
      }
      return d([this[e]]);
    },
    append: function () {
      let e;
      const t = a();
      for (let s = 0; s < arguments.length; s += 1) {
        e = s < 0 || arguments.length <= s ? void 0 : arguments[s];
        for (let s = 0; s < this.length; s += 1)
          if ('string' == typeof e) {
            const a = t.createElement('div');
            for (a.innerHTML = e; a.firstChild; ) this[s].appendChild(a.firstChild);
          } else if (e instanceof n) for (let t = 0; t < e.length; t += 1) this[s].appendChild(e[t]);
          else this[s].appendChild(e);
      }
      return this;
    },
    prepend: function (e) {
      const t = a();
      let s, i;
      for (s = 0; s < this.length; s += 1)
        if ('string' == typeof e) {
          const a = t.createElement('div');
          for (a.innerHTML = e, i = a.childNodes.length - 1; i >= 0; i -= 1) this[s].insertBefore(a.childNodes[i], this[s].childNodes[0]);
        } else if (e instanceof n) for (i = 0; i < e.length; i += 1) this[s].insertBefore(e[i], this[s].childNodes[0]);
        else this[s].insertBefore(e, this[s].childNodes[0]);
      return this;
    },
    next: function (e) {
      return this.length > 0
        ? e
          ? this[0].nextElementSibling && d(this[0].nextElementSibling).is(e)
            ? d([this[0].nextElementSibling])
            : d([])
          : this[0].nextElementSibling
          ? d([this[0].nextElementSibling])
          : d([])
        : d([]);
    },
    nextAll: function (e) {
      const t = [];
      let s = this[0];
      if (!s) return d([]);
      for (; s.nextElementSibling; ) {
        const a = s.nextElementSibling;
        e ? d(a).is(e) && t.push(a) : t.push(a), (s = a);
      }
      return d(t);
    },
    prev: function (e) {
      if (this.length > 0) {
        const t = this[0];
        return e ? (t.previousElementSibling && d(t.previousElementSibling).is(e) ? d([t.previousElementSibling]) : d([])) : t.previousElementSibling ? d([t.previousElementSibling]) : d([]);
      }
      return d([]);
    },
    prevAll: function (e) {
      const t = [];
      let s = this[0];
      if (!s) return d([]);
      for (; s.previousElementSibling; ) {
        const a = s.previousElementSibling;
        e ? d(a).is(e) && t.push(a) : t.push(a), (s = a);
      }
      return d(t);
    },
    parent: function (e) {
      const t = [];
      for (let s = 0; s < this.length; s += 1) null !== this[s].parentNode && (e ? d(this[s].parentNode).is(e) && t.push(this[s].parentNode) : t.push(this[s].parentNode));
      return d(t);
    },
    parents: function (e) {
      const t = [];
      for (let s = 0; s < this.length; s += 1) {
        let a = this[s].parentNode;
        for (; a; ) e ? d(a).is(e) && t.push(a) : t.push(a), (a = a.parentNode);
      }
      return d(t);
    },
    closest: function (e) {
      let t = this;
      return void 0 === e ? d([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
    },
    find: function (e) {
      const t = [];
      for (let s = 0; s < this.length; s += 1) {
        const a = this[s].querySelectorAll(e);
        for (let e = 0; e < a.length; e += 1) t.push(a[e]);
      }
      return d(t);
    },
    children: function (e) {
      const t = [];
      for (let s = 0; s < this.length; s += 1) {
        const a = this[s].children;
        for (let s = 0; s < a.length; s += 1) (e && !d(a[s]).is(e)) || t.push(a[s]);
      }
      return d(t);
    },
    filter: function (e) {
      return d(o(this, e));
    },
    remove: function () {
      for (let e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
      return this;
    }
  };
  function p(e, t) {
    return void 0 === t && (t = 0), setTimeout(e, t);
  }
  function u() {
    return Date.now();
  }
  function h(e, t) {
    void 0 === t && (t = 'x');
    const s = r();
    let a, i, n;
    const l = (function (e) {
      const t = r();
      let s;
      return t.getComputedStyle && (s = t.getComputedStyle(e, null)), !s && e.currentStyle && (s = e.currentStyle), s || (s = e.style), s;
    })(e);
    return (
      s.WebKitCSSMatrix
        ? ((i = l.transform || l.webkitTransform),
          i.split(',').length > 6 &&
            (i = i
              .split(', ')
              .map((e) => e.replace(',', '.'))
              .join(', ')),
          (n = new s.WebKitCSSMatrix('none' === i ? '' : i)))
        : ((n = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,')),
          (a = n.toString().split(','))),
      'x' === t && (i = s.WebKitCSSMatrix ? n.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])),
      'y' === t && (i = s.WebKitCSSMatrix ? n.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])),
      i || 0
    );
  }
  function m(e) {
    return 'object' == typeof e && null !== e && e.constructor && 'Object' === Object.prototype.toString.call(e).slice(8, -1);
  }
  function f(e) {
    return 'undefined' != typeof window && void 0 !== window.HTMLElement ? e instanceof HTMLElement : e && (1 === e.nodeType || 11 === e.nodeType);
  }
  function g() {
    const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
      t = ['__proto__', 'constructor', 'prototype'];
    for (let s = 1; s < arguments.length; s += 1) {
      const a = s < 0 || arguments.length <= s ? void 0 : arguments[s];
      if (null != a && !f(a)) {
        const s = Object.keys(Object(a)).filter((e) => t.indexOf(e) < 0);
        for (let t = 0, i = s.length; t < i; t += 1) {
          const i = s[t],
            r = Object.getOwnPropertyDescriptor(a, i);
          void 0 !== r &&
            r.enumerable &&
            (m(e[i]) && m(a[i]) ? (a[i].__swiper__ ? (e[i] = a[i]) : g(e[i], a[i])) : !m(e[i]) && m(a[i]) ? ((e[i] = {}), a[i].__swiper__ ? (e[i] = a[i]) : g(e[i], a[i])) : (e[i] = a[i]));
        }
      }
    }
    return e;
  }
  function v(e, t, s) {
    e.style.setProperty(t, s);
  }
  function w(e) {
    let { swiper: t, targetPosition: s, side: a } = e;
    const i = r(),
      n = -t.translate;
    let l,
      o = null;
    const d = t.params.speed;
    (t.wrapperEl.style.scrollSnapType = 'none'), i.cancelAnimationFrame(t.cssModeFrameID);
    const c = s > n ? 'next' : 'prev',
      p = (e, t) => ('next' === c && e >= t) || ('prev' === c && e <= t),
      u = () => {
        (l = new Date().getTime()), null === o && (o = l);
        const e = Math.max(Math.min((l - o) / d, 1), 0),
          r = 0.5 - Math.cos(e * Math.PI) / 2;
        let c = n + r * (s - n);
        if ((p(c, s) && (c = s), t.wrapperEl.scrollTo({ [a]: c }), p(c, s)))
          return (
            (t.wrapperEl.style.overflow = 'hidden'),
            (t.wrapperEl.style.scrollSnapType = ''),
            setTimeout(() => {
              (t.wrapperEl.style.overflow = ''), t.wrapperEl.scrollTo({ [a]: c });
            }),
            void i.cancelAnimationFrame(t.cssModeFrameID)
          );
        t.cssModeFrameID = i.requestAnimationFrame(u);
      };
    u();
  }
  let b, x, y;
  function E() {
    return (
      b ||
        (b = (function () {
          const e = r(),
            t = a();
          return {
            smoothScroll: t.documentElement && 'scrollBehavior' in t.documentElement.style,
            touch: !!('ontouchstart' in e || (e.DocumentTouch && t instanceof e.DocumentTouch)),
            passiveListener: (function () {
              let t = !1;
              try {
                const s = Object.defineProperty({}, 'passive', {
                  get() {
                    t = !0;
                  }
                });
                e.addEventListener('testPassiveListener', null, s);
              } catch (e) {}
              return t;
            })(),
            gestures: 'ongesturestart' in e
          };
        })()),
      b
    );
  }
  function C(e) {
    return (
      void 0 === e && (e = {}),
      x ||
        (x = (function (e) {
          let { userAgent: t } = void 0 === e ? {} : e;
          const s = E(),
            a = r(),
            i = a.navigator.platform,
            n = t || a.navigator.userAgent,
            l = { ios: !1, android: !1 },
            o = a.screen.width,
            d = a.screen.height,
            c = n.match(/(Android);?[\s\/]+([\d.]+)?/);
          let p = n.match(/(iPad).*OS\s([\d_]+)/);
          const u = n.match(/(iPod)(.*OS\s([\d_]+))?/),
            h = !p && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
            m = 'Win32' === i;
          let f = 'MacIntel' === i;
          return (
            !p &&
              f &&
              s.touch &&
              ['1024x1366', '1366x1024', '834x1194', '1194x834', '834x1112', '1112x834', '768x1024', '1024x768', '820x1180', '1180x820', '810x1080', '1080x810'].indexOf(`${o}x${d}`) >= 0 &&
              ((p = n.match(/(Version)\/([\d.]+)/)), p || (p = [0, 1, '13_0_0']), (f = !1)),
            c && !m && ((l.os = 'android'), (l.android = !0)),
            (p || h || u) && ((l.os = 'ios'), (l.ios = !0)),
            l
          );
        })(e)),
      x
    );
  }
  function T() {
    return (
      y ||
        (y = (function () {
          const e = r();
          return {
            isSafari: (function () {
              const t = e.navigator.userAgent.toLowerCase();
              return t.indexOf('safari') >= 0 && t.indexOf('chrome') < 0 && t.indexOf('android') < 0;
            })(),
            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
          };
        })()),
      y
    );
  }
  Object.keys(c).forEach((e) => {
    Object.defineProperty(d.fn, e, { value: c[e], writable: !0 });
  });
  var $ = {
    on(e, t, s) {
      const a = this;
      if (!a.eventsListeners || a.destroyed) return a;
      if ('function' != typeof t) return a;
      const i = s ? 'unshift' : 'push';
      return (
        e.split(' ').forEach((e) => {
          a.eventsListeners[e] || (a.eventsListeners[e] = []), a.eventsListeners[e][i](t);
        }),
        a
      );
    },
    once(e, t, s) {
      const a = this;
      if (!a.eventsListeners || a.destroyed) return a;
      if ('function' != typeof t) return a;
      function i() {
        a.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
        for (var s = arguments.length, r = new Array(s), n = 0; n < s; n++) r[n] = arguments[n];
        t.apply(a, r);
      }
      return (i.__emitterProxy = t), a.on(e, i, s);
    },
    onAny(e, t) {
      const s = this;
      if (!s.eventsListeners || s.destroyed) return s;
      if ('function' != typeof e) return s;
      const a = t ? 'unshift' : 'push';
      return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[a](e), s;
    },
    offAny(e) {
      const t = this;
      if (!t.eventsListeners || t.destroyed) return t;
      if (!t.eventsAnyListeners) return t;
      const s = t.eventsAnyListeners.indexOf(e);
      return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
    },
    off(e, t) {
      const s = this;
      return !s.eventsListeners || s.destroyed
        ? s
        : s.eventsListeners
        ? (e.split(' ').forEach((e) => {
            void 0 === t
              ? (s.eventsListeners[e] = [])
              : s.eventsListeners[e] &&
                s.eventsListeners[e].forEach((a, i) => {
                  (a === t || (a.__emitterProxy && a.__emitterProxy === t)) && s.eventsListeners[e].splice(i, 1);
                });
          }),
          s)
        : s;
    },
    emit() {
      const e = this;
      if (!e.eventsListeners || e.destroyed) return e;
      if (!e.eventsListeners) return e;
      let t, s, a;
      for (var i = arguments.length, r = new Array(i), n = 0; n < i; n++) r[n] = arguments[n];
      'string' == typeof r[0] || Array.isArray(r[0]) ? ((t = r[0]), (s = r.slice(1, r.length)), (a = e)) : ((t = r[0].events), (s = r[0].data), (a = r[0].context || e)), s.unshift(a);
      return (
        (Array.isArray(t) ? t : t.split(' ')).forEach((t) => {
          e.eventsAnyListeners &&
            e.eventsAnyListeners.length &&
            e.eventsAnyListeners.forEach((e) => {
              e.apply(a, [t, ...s]);
            }),
            e.eventsListeners &&
              e.eventsListeners[t] &&
              e.eventsListeners[t].forEach((e) => {
                e.apply(a, s);
              });
        }),
        e
      );
    }
  };
  var S = {
    updateSize: function () {
      const e = this;
      let t, s;
      const a = e.$el;
      (t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : a[0].clientWidth),
        (s = void 0 !== e.params.height && null !== e.params.height ? e.params.height : a[0].clientHeight),
        (0 === t && e.isHorizontal()) ||
          (0 === s && e.isVertical()) ||
          ((t = t - parseInt(a.css('padding-left') || 0, 10) - parseInt(a.css('padding-right') || 0, 10)),
          (s = s - parseInt(a.css('padding-top') || 0, 10) - parseInt(a.css('padding-bottom') || 0, 10)),
          Number.isNaN(t) && (t = 0),
          Number.isNaN(s) && (s = 0),
          Object.assign(e, { width: t, height: s, size: e.isHorizontal() ? t : s }));
    },
    updateSlides: function () {
      const e = this;
      function t(t) {
        return e.isHorizontal()
          ? t
          : {
              width: 'height',
              'margin-top': 'margin-left',
              'margin-bottom ': 'margin-right',
              'margin-left': 'margin-top',
              'margin-right': 'margin-bottom',
              'padding-left': 'padding-top',
              'padding-right': 'padding-bottom',
              marginRight: 'marginBottom'
            }[t];
      }
      function s(e, s) {
        return parseFloat(e.getPropertyValue(t(s)) || 0);
      }
      const a = e.params,
        { $wrapperEl: i, size: r, rtlTranslate: n, wrongRTL: l } = e,
        o = e.virtual && a.virtual.enabled,
        d = o ? e.virtual.slides.length : e.slides.length,
        c = i.children(`.${e.params.slideClass}`),
        p = o ? e.virtual.slides.length : c.length;
      let u = [];
      const h = [],
        m = [];
      let f = a.slidesOffsetBefore;
      'function' == typeof f && (f = a.slidesOffsetBefore.call(e));
      let g = a.slidesOffsetAfter;
      'function' == typeof g && (g = a.slidesOffsetAfter.call(e));
      const w = e.snapGrid.length,
        b = e.slidesGrid.length;
      let x = a.spaceBetween,
        y = -f,
        E = 0,
        C = 0;
      if (void 0 === r) return;
      'string' == typeof x && x.indexOf('%') >= 0 && (x = (parseFloat(x.replace('%', '')) / 100) * r),
        (e.virtualSize = -x),
        n ? c.css({ marginLeft: '', marginBottom: '', marginTop: '' }) : c.css({ marginRight: '', marginBottom: '', marginTop: '' }),
        a.centeredSlides && a.cssMode && (v(e.wrapperEl, '--swiper-centered-offset-before', ''), v(e.wrapperEl, '--swiper-centered-offset-after', ''));
      const T = a.grid && a.grid.rows > 1 && e.grid;
      let $;
      T && e.grid.initSlides(p);
      const S = 'auto' === a.slidesPerView && a.breakpoints && Object.keys(a.breakpoints).filter((e) => void 0 !== a.breakpoints[e].slidesPerView).length > 0;
      for (let i = 0; i < p; i += 1) {
        $ = 0;
        const n = c.eq(i);
        if ((T && e.grid.updateSlide(i, n, p, t), 'none' !== n.css('display'))) {
          if ('auto' === a.slidesPerView) {
            S && (c[i].style[t('width')] = '');
            const r = getComputedStyle(n[0]),
              l = n[0].style.transform,
              o = n[0].style.webkitTransform;
            if ((l && (n[0].style.transform = 'none'), o && (n[0].style.webkitTransform = 'none'), a.roundLengths)) $ = e.isHorizontal() ? n.outerWidth(!0) : n.outerHeight(!0);
            else {
              const e = s(r, 'width'),
                t = s(r, 'padding-left'),
                a = s(r, 'padding-right'),
                i = s(r, 'margin-left'),
                l = s(r, 'margin-right'),
                o = r.getPropertyValue('box-sizing');
              if (o && 'border-box' === o) $ = e + i + l;
              else {
                const { clientWidth: s, offsetWidth: r } = n[0];
                $ = e + t + a + i + l + (r - s);
              }
            }
            l && (n[0].style.transform = l), o && (n[0].style.webkitTransform = o), a.roundLengths && ($ = Math.floor($));
          } else ($ = (r - (a.slidesPerView - 1) * x) / a.slidesPerView), a.roundLengths && ($ = Math.floor($)), c[i] && (c[i].style[t('width')] = `${$}px`);
          c[i] && (c[i].swiperSlideSize = $),
            m.push($),
            a.centeredSlides
              ? ((y = y + $ / 2 + E / 2 + x),
                0 === E && 0 !== i && (y = y - r / 2 - x),
                0 === i && (y = y - r / 2 - x),
                Math.abs(y) < 0.001 && (y = 0),
                a.roundLengths && (y = Math.floor(y)),
                C % a.slidesPerGroup == 0 && u.push(y),
                h.push(y))
              : (a.roundLengths && (y = Math.floor(y)), (C - Math.min(e.params.slidesPerGroupSkip, C)) % e.params.slidesPerGroup == 0 && u.push(y), h.push(y), (y = y + $ + x)),
            (e.virtualSize += $ + x),
            (E = $),
            (C += 1);
        }
      }
      if (
        ((e.virtualSize = Math.max(e.virtualSize, r) + g),
        n && l && ('slide' === a.effect || 'coverflow' === a.effect) && i.css({ width: `${e.virtualSize + a.spaceBetween}px` }),
        a.setWrapperSize && i.css({ [t('width')]: `${e.virtualSize + a.spaceBetween}px` }),
        T && e.grid.updateWrapperSize($, u, t),
        !a.centeredSlides)
      ) {
        const t = [];
        for (let s = 0; s < u.length; s += 1) {
          let i = u[s];
          a.roundLengths && (i = Math.floor(i)), u[s] <= e.virtualSize - r && t.push(i);
        }
        (u = t), Math.floor(e.virtualSize - r) - Math.floor(u[u.length - 1]) > 1 && u.push(e.virtualSize - r);
      }
      if ((0 === u.length && (u = [0]), 0 !== a.spaceBetween)) {
        const s = e.isHorizontal() && n ? 'marginLeft' : t('marginRight');
        c.filter((e, t) => !a.cssMode || t !== c.length - 1).css({ [s]: `${x}px` });
      }
      if (a.centeredSlides && a.centeredSlidesBounds) {
        let e = 0;
        m.forEach((t) => {
          e += t + (a.spaceBetween ? a.spaceBetween : 0);
        }),
          (e -= a.spaceBetween);
        const t = e - r;
        u = u.map((e) => (e < 0 ? -f : e > t ? t + g : e));
      }
      if (a.centerInsufficientSlides) {
        let e = 0;
        if (
          (m.forEach((t) => {
            e += t + (a.spaceBetween ? a.spaceBetween : 0);
          }),
          (e -= a.spaceBetween),
          e < r)
        ) {
          const t = (r - e) / 2;
          u.forEach((e, s) => {
            u[s] = e - t;
          }),
            h.forEach((e, s) => {
              h[s] = e + t;
            });
        }
      }
      if ((Object.assign(e, { slides: c, snapGrid: u, slidesGrid: h, slidesSizesGrid: m }), a.centeredSlides && a.cssMode && !a.centeredSlidesBounds)) {
        v(e.wrapperEl, '--swiper-centered-offset-before', -u[0] + 'px'), v(e.wrapperEl, '--swiper-centered-offset-after', e.size / 2 - m[m.length - 1] / 2 + 'px');
        const t = -e.snapGrid[0],
          s = -e.slidesGrid[0];
        (e.snapGrid = e.snapGrid.map((e) => e + t)), (e.slidesGrid = e.slidesGrid.map((e) => e + s));
      }
      if (
        (p !== d && e.emit('slidesLengthChange'),
        u.length !== w && (e.params.watchOverflow && e.checkOverflow(), e.emit('snapGridLengthChange')),
        h.length !== b && e.emit('slidesGridLengthChange'),
        a.watchSlidesProgress && e.updateSlidesOffset(),
        !(o || a.cssMode || ('slide' !== a.effect && 'fade' !== a.effect)))
      ) {
        const t = `${a.containerModifierClass}backface-hidden`,
          s = e.$el.hasClass(t);
        p <= a.maxBackfaceHiddenSlides ? s || e.$el.addClass(t) : s && e.$el.removeClass(t);
      }
    },
    updateAutoHeight: function (e) {
      const t = this,
        s = [],
        a = t.virtual && t.params.virtual.enabled;
      let i,
        r = 0;
      'number' == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
      const n = (e) => (a ? t.slides.filter((t) => parseInt(t.getAttribute('data-swiper-slide-index'), 10) === e)[0] : t.slides.eq(e)[0]);
      if ('auto' !== t.params.slidesPerView && t.params.slidesPerView > 1)
        if (t.params.centeredSlides)
          (t.visibleSlides || d([])).each((e) => {
            s.push(e);
          });
        else
          for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
            const e = t.activeIndex + i;
            if (e > t.slides.length && !a) break;
            s.push(n(e));
          }
      else s.push(n(t.activeIndex));
      for (i = 0; i < s.length; i += 1)
        if (void 0 !== s[i]) {
          const e = s[i].offsetHeight;
          r = e > r ? e : r;
        }
      (r || 0 === r) && t.$wrapperEl.css('height', `${r}px`);
    },
    updateSlidesOffset: function () {
      const e = this,
        t = e.slides;
      for (let s = 0; s < t.length; s += 1) t[s].swiperSlideOffset = e.isHorizontal() ? t[s].offsetLeft : t[s].offsetTop;
    },
    updateSlidesProgress: function (e) {
      void 0 === e && (e = (this && this.translate) || 0);
      const t = this,
        s = t.params,
        { slides: a, rtlTranslate: i, snapGrid: r } = t;
      if (0 === a.length) return;
      void 0 === a[0].swiperSlideOffset && t.updateSlidesOffset();
      let n = -e;
      i && (n = e), a.removeClass(s.slideVisibleClass), (t.visibleSlidesIndexes = []), (t.visibleSlides = []);
      for (let e = 0; e < a.length; e += 1) {
        const l = a[e];
        let o = l.swiperSlideOffset;
        s.cssMode && s.centeredSlides && (o -= a[0].swiperSlideOffset);
        const d = (n + (s.centeredSlides ? t.minTranslate() : 0) - o) / (l.swiperSlideSize + s.spaceBetween),
          c = (n - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - o) / (l.swiperSlideSize + s.spaceBetween),
          p = -(n - o),
          u = p + t.slidesSizesGrid[e];
        ((p >= 0 && p < t.size - 1) || (u > 1 && u <= t.size) || (p <= 0 && u >= t.size)) && (t.visibleSlides.push(l), t.visibleSlidesIndexes.push(e), a.eq(e).addClass(s.slideVisibleClass)),
          (l.progress = i ? -d : d),
          (l.originalProgress = i ? -c : c);
      }
      t.visibleSlides = d(t.visibleSlides);
    },
    updateProgress: function (e) {
      const t = this;
      if (void 0 === e) {
        const s = t.rtlTranslate ? -1 : 1;
        e = (t && t.translate && t.translate * s) || 0;
      }
      const s = t.params,
        a = t.maxTranslate() - t.minTranslate();
      let { progress: i, isBeginning: r, isEnd: n } = t;
      const l = r,
        o = n;
      0 === a ? ((i = 0), (r = !0), (n = !0)) : ((i = (e - t.minTranslate()) / a), (r = i <= 0), (n = i >= 1)),
        Object.assign(t, { progress: i, isBeginning: r, isEnd: n }),
        (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) && t.updateSlidesProgress(e),
        r && !l && t.emit('reachBeginning toEdge'),
        n && !o && t.emit('reachEnd toEdge'),
        ((l && !r) || (o && !n)) && t.emit('fromEdge'),
        t.emit('progress', i);
    },
    updateSlidesClasses: function () {
      const e = this,
        { slides: t, params: s, $wrapperEl: a, activeIndex: i, realIndex: r } = e,
        n = e.virtual && s.virtual.enabled;
      let l;
      t.removeClass(`${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`),
        (l = n ? e.$wrapperEl.find(`.${s.slideClass}[data-swiper-slide-index="${i}"]`) : t.eq(i)),
        l.addClass(s.slideActiveClass),
        s.loop &&
          (l.hasClass(s.slideDuplicateClass)
            ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass)
            : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass));
      let o = l.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);
      s.loop && 0 === o.length && ((o = t.eq(0)), o.addClass(s.slideNextClass));
      let d = l.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);
      s.loop && 0 === d.length && ((d = t.eq(-1)), d.addClass(s.slidePrevClass)),
        s.loop &&
          (o.hasClass(s.slideDuplicateClass)
            ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${o.attr('data-swiper-slide-index')}"]`).addClass(s.slideDuplicateNextClass)
            : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${o.attr('data-swiper-slide-index')}"]`).addClass(s.slideDuplicateNextClass),
          d.hasClass(s.slideDuplicateClass)
            ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${d.attr('data-swiper-slide-index')}"]`).addClass(s.slideDuplicatePrevClass)
            : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${d.attr('data-swiper-slide-index')}"]`).addClass(s.slideDuplicatePrevClass)),
        e.emitSlidesClasses();
    },
    updateActiveIndex: function (e) {
      const t = this,
        s = t.rtlTranslate ? t.translate : -t.translate,
        { slidesGrid: a, snapGrid: i, params: r, activeIndex: n, realIndex: l, snapIndex: o } = t;
      let d,
        c = e;
      if (void 0 === c) {
        for (let e = 0; e < a.length; e += 1) void 0 !== a[e + 1] ? (s >= a[e] && s < a[e + 1] - (a[e + 1] - a[e]) / 2 ? (c = e) : s >= a[e] && s < a[e + 1] && (c = e + 1)) : s >= a[e] && (c = e);
        r.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0);
      }
      if (i.indexOf(s) >= 0) d = i.indexOf(s);
      else {
        const e = Math.min(r.slidesPerGroupSkip, c);
        d = e + Math.floor((c - e) / r.slidesPerGroup);
      }
      if ((d >= i.length && (d = i.length - 1), c === n)) return void (d !== o && ((t.snapIndex = d), t.emit('snapIndexChange')));
      const p = parseInt(t.slides.eq(c).attr('data-swiper-slide-index') || c, 10);
      Object.assign(t, { snapIndex: d, realIndex: p, previousIndex: n, activeIndex: c }),
        t.emit('activeIndexChange'),
        t.emit('snapIndexChange'),
        l !== p && t.emit('realIndexChange'),
        (t.initialized || t.params.runCallbacksOnInit) && t.emit('slideChange');
    },
    updateClickedSlide: function (e) {
      const t = this,
        s = t.params,
        a = d(e).closest(`.${s.slideClass}`)[0];
      let i,
        r = !1;
      if (a)
        for (let e = 0; e < t.slides.length; e += 1)
          if (t.slides[e] === a) {
            (r = !0), (i = e);
            break;
          }
      if (!a || !r) return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
      (t.clickedSlide = a),
        t.virtual && t.params.virtual.enabled ? (t.clickedIndex = parseInt(d(a).attr('data-swiper-slide-index'), 10)) : (t.clickedIndex = i),
        s.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide();
    }
  };
  var M = {
    getTranslate: function (e) {
      void 0 === e && (e = this.isHorizontal() ? 'x' : 'y');
      const { params: t, rtlTranslate: s, translate: a, $wrapperEl: i } = this;
      if (t.virtualTranslate) return s ? -a : a;
      if (t.cssMode) return a;
      let r = h(i[0], e);
      return s && (r = -r), r || 0;
    },
    setTranslate: function (e, t) {
      const s = this,
        { rtlTranslate: a, params: i, $wrapperEl: r, wrapperEl: n, progress: l } = s;
      let o,
        d = 0,
        c = 0;
      s.isHorizontal() ? (d = a ? -e : e) : (c = e),
        i.roundLengths && ((d = Math.floor(d)), (c = Math.floor(c))),
        i.cssMode ? (n[s.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = s.isHorizontal() ? -d : -c) : i.virtualTranslate || r.transform(`translate3d(${d}px, ${c}px, 0px)`),
        (s.previousTranslate = s.translate),
        (s.translate = s.isHorizontal() ? d : c);
      const p = s.maxTranslate() - s.minTranslate();
      (o = 0 === p ? 0 : (e - s.minTranslate()) / p), o !== l && s.updateProgress(e), s.emit('setTranslate', s.translate, t);
    },
    minTranslate: function () {
      return -this.snapGrid[0];
    },
    maxTranslate: function () {
      return -this.snapGrid[this.snapGrid.length - 1];
    },
    translateTo: function (e, t, s, a, i) {
      void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), void 0 === a && (a = !0);
      const r = this,
        { params: n, wrapperEl: l } = r;
      if (r.animating && n.preventInteractionOnTransition) return !1;
      const o = r.minTranslate(),
        d = r.maxTranslate();
      let c;
      if (((c = a && e > o ? o : a && e < d ? d : e), r.updateProgress(c), n.cssMode)) {
        const e = r.isHorizontal();
        if (0 === t) l[e ? 'scrollLeft' : 'scrollTop'] = -c;
        else {
          if (!r.support.smoothScroll) return w({ swiper: r, targetPosition: -c, side: e ? 'left' : 'top' }), !0;
          l.scrollTo({ [e ? 'left' : 'top']: -c, behavior: 'smooth' });
        }
        return !0;
      }
      return (
        0 === t
          ? (r.setTransition(0), r.setTranslate(c), s && (r.emit('beforeTransitionStart', t, i), r.emit('transitionEnd')))
          : (r.setTransition(t),
            r.setTranslate(c),
            s && (r.emit('beforeTransitionStart', t, i), r.emit('transitionStart')),
            r.animating ||
              ((r.animating = !0),
              r.onTranslateToWrapperTransitionEnd ||
                (r.onTranslateToWrapperTransitionEnd = function (e) {
                  r &&
                    !r.destroyed &&
                    e.target === this &&
                    (r.$wrapperEl[0].removeEventListener('transitionend', r.onTranslateToWrapperTransitionEnd),
                    r.$wrapperEl[0].removeEventListener('webkitTransitionEnd', r.onTranslateToWrapperTransitionEnd),
                    (r.onTranslateToWrapperTransitionEnd = null),
                    delete r.onTranslateToWrapperTransitionEnd,
                    s && r.emit('transitionEnd'));
                }),
              r.$wrapperEl[0].addEventListener('transitionend', r.onTranslateToWrapperTransitionEnd),
              r.$wrapperEl[0].addEventListener('webkitTransitionEnd', r.onTranslateToWrapperTransitionEnd))),
        !0
      );
    }
  };
  function P(e) {
    let { swiper: t, runCallbacks: s, direction: a, step: i } = e;
    const { activeIndex: r, previousIndex: n } = t;
    let l = a;
    if ((l || (l = r > n ? 'next' : r < n ? 'prev' : 'reset'), t.emit(`transition${i}`), s && r !== n)) {
      if ('reset' === l) return void t.emit(`slideResetTransition${i}`);
      t.emit(`slideChangeTransition${i}`), 'next' === l ? t.emit(`slideNextTransition${i}`) : t.emit(`slidePrevTransition${i}`);
    }
  }
  var k = {
    slideTo: function (e, t, s, a, i) {
      if ((void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), 'number' != typeof e && 'string' != typeof e))
        throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);
      if ('string' == typeof e) {
        const t = parseInt(e, 10);
        if (!isFinite(t)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
        e = t;
      }
      const r = this;
      let n = e;
      n < 0 && (n = 0);
      const { params: l, snapGrid: o, slidesGrid: d, previousIndex: c, activeIndex: p, rtlTranslate: u, wrapperEl: h, enabled: m } = r;
      if ((r.animating && l.preventInteractionOnTransition) || (!m && !a && !i)) return !1;
      const f = Math.min(r.params.slidesPerGroupSkip, n);
      let g = f + Math.floor((n - f) / r.params.slidesPerGroup);
      g >= o.length && (g = o.length - 1);
      const v = -o[g];
      if (l.normalizeSlideIndex)
        for (let e = 0; e < d.length; e += 1) {
          const t = -Math.floor(100 * v),
            s = Math.floor(100 * d[e]),
            a = Math.floor(100 * d[e + 1]);
          void 0 !== d[e + 1] ? (t >= s && t < a - (a - s) / 2 ? (n = e) : t >= s && t < a && (n = e + 1)) : t >= s && (n = e);
        }
      if (r.initialized && n !== p) {
        if (!r.allowSlideNext && v < r.translate && v < r.minTranslate()) return !1;
        if (!r.allowSlidePrev && v > r.translate && v > r.maxTranslate() && (p || 0) !== n) return !1;
      }
      let b;
      if ((n !== (c || 0) && s && r.emit('beforeSlideChangeStart'), r.updateProgress(v), (b = n > p ? 'next' : n < p ? 'prev' : 'reset'), (u && -v === r.translate) || (!u && v === r.translate)))
        return (
          r.updateActiveIndex(n),
          l.autoHeight && r.updateAutoHeight(),
          r.updateSlidesClasses(),
          'slide' !== l.effect && r.setTranslate(v),
          'reset' !== b && (r.transitionStart(s, b), r.transitionEnd(s, b)),
          !1
        );
      if (l.cssMode) {
        const e = r.isHorizontal(),
          s = u ? v : -v;
        if (0 === t) {
          const t = r.virtual && r.params.virtual.enabled;
          t && ((r.wrapperEl.style.scrollSnapType = 'none'), (r._immediateVirtual = !0)),
            (h[e ? 'scrollLeft' : 'scrollTop'] = s),
            t &&
              requestAnimationFrame(() => {
                (r.wrapperEl.style.scrollSnapType = ''), (r._swiperImmediateVirtual = !1);
              });
        } else {
          if (!r.support.smoothScroll) return w({ swiper: r, targetPosition: s, side: e ? 'left' : 'top' }), !0;
          h.scrollTo({ [e ? 'left' : 'top']: s, behavior: 'smooth' });
        }
        return !0;
      }
      return (
        r.setTransition(t),
        r.setTranslate(v),
        r.updateActiveIndex(n),
        r.updateSlidesClasses(),
        r.emit('beforeTransitionStart', t, a),
        r.transitionStart(s, b),
        0 === t
          ? r.transitionEnd(s, b)
          : r.animating ||
            ((r.animating = !0),
            r.onSlideToWrapperTransitionEnd ||
              (r.onSlideToWrapperTransitionEnd = function (e) {
                r &&
                  !r.destroyed &&
                  e.target === this &&
                  (r.$wrapperEl[0].removeEventListener('transitionend', r.onSlideToWrapperTransitionEnd),
                  r.$wrapperEl[0].removeEventListener('webkitTransitionEnd', r.onSlideToWrapperTransitionEnd),
                  (r.onSlideToWrapperTransitionEnd = null),
                  delete r.onSlideToWrapperTransitionEnd,
                  r.transitionEnd(s, b));
              }),
            r.$wrapperEl[0].addEventListener('transitionend', r.onSlideToWrapperTransitionEnd),
            r.$wrapperEl[0].addEventListener('webkitTransitionEnd', r.onSlideToWrapperTransitionEnd)),
        !0
      );
    },
    slideToLoop: function (e, t, s, a) {
      if ((void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), 'string' == typeof e)) {
        const t = parseInt(e, 10);
        if (!isFinite(t)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
        e = t;
      }
      const i = this;
      let r = e;
      return i.params.loop && (r += i.loopedSlides), i.slideTo(r, t, s, a);
    },
    slideNext: function (e, t, s) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      const a = this,
        { animating: i, enabled: r, params: n } = a;
      if (!r) return a;
      let l = n.slidesPerGroup;
      'auto' === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (l = Math.max(a.slidesPerViewDynamic('current', !0), 1));
      const o = a.activeIndex < n.slidesPerGroupSkip ? 1 : l;
      if (n.loop) {
        if (i && n.loopPreventsSlide) return !1;
        a.loopFix(), (a._clientLeft = a.$wrapperEl[0].clientLeft);
      }
      return n.rewind && a.isEnd ? a.slideTo(0, e, t, s) : a.slideTo(a.activeIndex + o, e, t, s);
    },
    slidePrev: function (e, t, s) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      const a = this,
        { params: i, animating: r, snapGrid: n, slidesGrid: l, rtlTranslate: o, enabled: d } = a;
      if (!d) return a;
      if (i.loop) {
        if (r && i.loopPreventsSlide) return !1;
        a.loopFix(), (a._clientLeft = a.$wrapperEl[0].clientLeft);
      }
      function c(e) {
        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
      }
      const p = c(o ? a.translate : -a.translate),
        u = n.map((e) => c(e));
      let h = n[u.indexOf(p) - 1];
      if (void 0 === h && i.cssMode) {
        let e;
        n.forEach((t, s) => {
          p >= t && (e = s);
        }),
          void 0 !== e && (h = n[e > 0 ? e - 1 : e]);
      }
      let m = 0;
      if (
        (void 0 !== h &&
          ((m = l.indexOf(h)),
          m < 0 && (m = a.activeIndex - 1),
          'auto' === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && ((m = m - a.slidesPerViewDynamic('previous', !0) + 1), (m = Math.max(m, 0)))),
        i.rewind && a.isBeginning)
      ) {
        const i = a.params.virtual && a.params.virtual.enabled && a.virtual ? a.virtual.slides.length - 1 : a.slides.length - 1;
        return a.slideTo(i, e, t, s);
      }
      return a.slideTo(m, e, t, s);
    },
    slideReset: function (e, t, s) {
      return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, s);
    },
    slideToClosest: function (e, t, s, a) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === a && (a = 0.5);
      const i = this;
      let r = i.activeIndex;
      const n = Math.min(i.params.slidesPerGroupSkip, r),
        l = n + Math.floor((r - n) / i.params.slidesPerGroup),
        o = i.rtlTranslate ? i.translate : -i.translate;
      if (o >= i.snapGrid[l]) {
        const e = i.snapGrid[l];
        o - e > (i.snapGrid[l + 1] - e) * a && (r += i.params.slidesPerGroup);
      } else {
        const e = i.snapGrid[l - 1];
        o - e <= (i.snapGrid[l] - e) * a && (r -= i.params.slidesPerGroup);
      }
      return (r = Math.max(r, 0)), (r = Math.min(r, i.slidesGrid.length - 1)), i.slideTo(r, e, t, s);
    },
    slideToClickedSlide: function () {
      const e = this,
        { params: t, $wrapperEl: s } = e,
        a = 'auto' === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
      let i,
        r = e.clickedIndex;
      if (t.loop) {
        if (e.animating) return;
        (i = parseInt(d(e.clickedSlide).attr('data-swiper-slide-index'), 10)),
          t.centeredSlides
            ? r < e.loopedSlides - a / 2 || r > e.slides.length - e.loopedSlides + a / 2
              ? (e.loopFix(),
                (r = s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index()),
                p(() => {
                  e.slideTo(r);
                }))
              : e.slideTo(r)
            : r > e.slides.length - a
            ? (e.loopFix(),
              (r = s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index()),
              p(() => {
                e.slideTo(r);
              }))
            : e.slideTo(r);
      } else e.slideTo(r);
    }
  };
  var z = {
    loopCreate: function () {
      const e = this,
        t = a(),
        { params: s, $wrapperEl: i } = e,
        r = i.children().length > 0 ? d(i.children()[0].parentNode) : i;
      r.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();
      let n = r.children(`.${s.slideClass}`);
      if (s.loopFillGroupWithBlank) {
        const e = s.slidesPerGroup - (n.length % s.slidesPerGroup);
        if (e !== s.slidesPerGroup) {
          for (let a = 0; a < e; a += 1) {
            const e = d(t.createElement('div')).addClass(`${s.slideClass} ${s.slideBlankClass}`);
            r.append(e);
          }
          n = r.children(`.${s.slideClass}`);
        }
      }
      'auto' !== s.slidesPerView || s.loopedSlides || (s.loopedSlides = n.length),
        (e.loopedSlides = Math.ceil(parseFloat(s.loopedSlides || s.slidesPerView, 10))),
        (e.loopedSlides += s.loopAdditionalSlides),
        e.loopedSlides > n.length && e.params.loopedSlidesLimit && (e.loopedSlides = n.length);
      const l = [],
        o = [];
      n.each((e, t) => {
        d(e).attr('data-swiper-slide-index', t);
      });
      for (let t = 0; t < e.loopedSlides; t += 1) {
        const e = t - Math.floor(t / n.length) * n.length;
        o.push(n.eq(e)[0]), l.unshift(n.eq(n.length - e - 1)[0]);
      }
      for (let e = 0; e < o.length; e += 1) r.append(d(o[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
      for (let e = l.length - 1; e >= 0; e -= 1) r.prepend(d(l[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
    },
    loopFix: function () {
      const e = this;
      e.emit('beforeLoopFix');
      const { activeIndex: t, slides: s, loopedSlides: a, allowSlidePrev: i, allowSlideNext: r, snapGrid: n, rtlTranslate: l } = e;
      let o;
      (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
      const d = -n[t] - e.getTranslate();
      if (t < a) {
        (o = s.length - 3 * a + t), (o += a);
        e.slideTo(o, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d);
      } else if (t >= s.length - a) {
        (o = -s.length + t + a), (o += a);
        e.slideTo(o, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d);
      }
      (e.allowSlidePrev = i), (e.allowSlideNext = r), e.emit('loopFix');
    },
    loopDestroy: function () {
      const { $wrapperEl: e, params: t, slides: s } = this;
      e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(), s.removeAttr('data-swiper-slide-index');
    }
  };
  function L(e) {
    const t = this,
      s = a(),
      i = r(),
      n = t.touchEventsData,
      { params: l, touches: o, enabled: c } = t;
    if (!c) return;
    if (t.animating && l.preventInteractionOnTransition) return;
    !t.animating && l.cssMode && l.loop && t.loopFix();
    let p = e;
    p.originalEvent && (p = p.originalEvent);
    let h = d(p.target);
    if ('wrapper' === l.touchEventsTarget && !h.closest(t.wrapperEl).length) return;
    if (((n.isTouchEvent = 'touchstart' === p.type), !n.isTouchEvent && 'which' in p && 3 === p.which)) return;
    if (!n.isTouchEvent && 'button' in p && p.button > 0) return;
    if (n.isTouched && n.isMoved) return;
    const m = !!l.noSwipingClass && '' !== l.noSwipingClass,
      f = e.composedPath ? e.composedPath() : e.path;
    m && p.target && p.target.shadowRoot && f && (h = d(f[0]));
    const g = l.noSwipingSelector ? l.noSwipingSelector : `.${l.noSwipingClass}`,
      v = !(!p.target || !p.target.shadowRoot);
    if (
      l.noSwiping &&
      (v
        ? (function (e, t) {
            return (
              void 0 === t && (t = this),
              (function t(s) {
                if (!s || s === a() || s === r()) return null;
                s.assignedSlot && (s = s.assignedSlot);
                const i = s.closest(e);
                return i || s.getRootNode ? i || t(s.getRootNode().host) : null;
              })(t)
            );
          })(g, h[0])
        : h.closest(g)[0])
    )
      return void (t.allowClick = !0);
    if (l.swipeHandler && !h.closest(l.swipeHandler)[0]) return;
    (o.currentX = 'touchstart' === p.type ? p.targetTouches[0].pageX : p.pageX), (o.currentY = 'touchstart' === p.type ? p.targetTouches[0].pageY : p.pageY);
    const w = o.currentX,
      b = o.currentY,
      x = l.edgeSwipeDetection || l.iOSEdgeSwipeDetection,
      y = l.edgeSwipeThreshold || l.iOSEdgeSwipeThreshold;
    if (x && (w <= y || w >= i.innerWidth - y)) {
      if ('prevent' !== x) return;
      e.preventDefault();
    }
    if (
      (Object.assign(n, { isTouched: !0, isMoved: !1, allowTouchCallbacks: !0, isScrolling: void 0, startMoving: void 0 }),
      (o.startX = w),
      (o.startY = b),
      (n.touchStartTime = u()),
      (t.allowClick = !0),
      t.updateSize(),
      (t.swipeDirection = void 0),
      l.threshold > 0 && (n.allowThresholdMove = !1),
      'touchstart' !== p.type)
    ) {
      let e = !0;
      h.is(n.focusableElements) && ((e = !1), 'SELECT' === h[0].nodeName && (n.isTouched = !1)),
        s.activeElement && d(s.activeElement).is(n.focusableElements) && s.activeElement !== h[0] && s.activeElement.blur();
      const a = e && t.allowTouchMove && l.touchStartPreventDefault;
      (!l.touchStartForcePreventDefault && !a) || h[0].isContentEditable || p.preventDefault();
    }
    t.params.freeMode && t.params.freeMode.enabled && t.freeMode && t.animating && !l.cssMode && t.freeMode.onTouchStart(), t.emit('touchStart', p);
  }
  function O(e) {
    const t = a(),
      s = this,
      i = s.touchEventsData,
      { params: r, touches: n, rtlTranslate: l, enabled: o } = s;
    if (!o) return;
    let c = e;
    if ((c.originalEvent && (c = c.originalEvent), !i.isTouched)) return void (i.startMoving && i.isScrolling && s.emit('touchMoveOpposite', c));
    if (i.isTouchEvent && 'touchmove' !== c.type) return;
    const p = 'touchmove' === c.type && c.targetTouches && (c.targetTouches[0] || c.changedTouches[0]),
      h = 'touchmove' === c.type ? p.pageX : c.pageX,
      m = 'touchmove' === c.type ? p.pageY : c.pageY;
    if (c.preventedByNestedSwiper) return (n.startX = h), void (n.startY = m);
    if (!s.allowTouchMove)
      return d(c.target).is(i.focusableElements) || (s.allowClick = !1), void (i.isTouched && (Object.assign(n, { startX: h, startY: m, currentX: h, currentY: m }), (i.touchStartTime = u())));
    if (i.isTouchEvent && r.touchReleaseOnEdges && !r.loop)
      if (s.isVertical()) {
        if ((m < n.startY && s.translate <= s.maxTranslate()) || (m > n.startY && s.translate >= s.minTranslate())) return (i.isTouched = !1), void (i.isMoved = !1);
      } else if ((h < n.startX && s.translate <= s.maxTranslate()) || (h > n.startX && s.translate >= s.minTranslate())) return;
    if (i.isTouchEvent && t.activeElement && c.target === t.activeElement && d(c.target).is(i.focusableElements)) return (i.isMoved = !0), void (s.allowClick = !1);
    if ((i.allowTouchCallbacks && s.emit('touchMove', c), c.targetTouches && c.targetTouches.length > 1)) return;
    (n.currentX = h), (n.currentY = m);
    const f = n.currentX - n.startX,
      g = n.currentY - n.startY;
    if (s.params.threshold && Math.sqrt(f ** 2 + g ** 2) < s.params.threshold) return;
    if (void 0 === i.isScrolling) {
      let e;
      (s.isHorizontal() && n.currentY === n.startY) || (s.isVertical() && n.currentX === n.startX)
        ? (i.isScrolling = !1)
        : f * f + g * g >= 25 && ((e = (180 * Math.atan2(Math.abs(g), Math.abs(f))) / Math.PI), (i.isScrolling = s.isHorizontal() ? e > r.touchAngle : 90 - e > r.touchAngle));
    }
    if ((i.isScrolling && s.emit('touchMoveOpposite', c), void 0 === i.startMoving && ((n.currentX === n.startX && n.currentY === n.startY) || (i.startMoving = !0)), i.isScrolling))
      return void (i.isTouched = !1);
    if (!i.startMoving) return;
    (s.allowClick = !1),
      !r.cssMode && c.cancelable && c.preventDefault(),
      r.touchMoveStopPropagation && !r.nested && c.stopPropagation(),
      i.isMoved ||
        (r.loop && !r.cssMode && s.loopFix(),
        (i.startTranslate = s.getTranslate()),
        s.setTransition(0),
        s.animating && s.$wrapperEl.trigger('webkitTransitionEnd transitionend'),
        (i.allowMomentumBounce = !1),
        !r.grabCursor || (!0 !== s.allowSlideNext && !0 !== s.allowSlidePrev) || s.setGrabCursor(!0),
        s.emit('sliderFirstMove', c)),
      s.emit('sliderMove', c),
      (i.isMoved = !0);
    let v = s.isHorizontal() ? f : g;
    (n.diff = v), (v *= r.touchRatio), l && (v = -v), (s.swipeDirection = v > 0 ? 'prev' : 'next'), (i.currentTranslate = v + i.startTranslate);
    let w = !0,
      b = r.resistanceRatio;
    if (
      (r.touchReleaseOnEdges && (b = 0),
      v > 0 && i.currentTranslate > s.minTranslate()
        ? ((w = !1), r.resistance && (i.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + i.startTranslate + v) ** b))
        : v < 0 && i.currentTranslate < s.maxTranslate() && ((w = !1), r.resistance && (i.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - i.startTranslate - v) ** b)),
      w && (c.preventedByNestedSwiper = !0),
      !s.allowSlideNext && 'next' === s.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate),
      !s.allowSlidePrev && 'prev' === s.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate),
      s.allowSlidePrev || s.allowSlideNext || (i.currentTranslate = i.startTranslate),
      r.threshold > 0)
    ) {
      if (!(Math.abs(v) > r.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
      if (!i.allowThresholdMove)
        return (
          (i.allowThresholdMove = !0),
          (n.startX = n.currentX),
          (n.startY = n.currentY),
          (i.currentTranslate = i.startTranslate),
          void (n.diff = s.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY)
        );
    }
    r.followFinger &&
      !r.cssMode &&
      (((r.freeMode && r.freeMode.enabled && s.freeMode) || r.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()),
      s.params.freeMode && r.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(),
      s.updateProgress(i.currentTranslate),
      s.setTranslate(i.currentTranslate));
  }
  function I(e) {
    const t = this,
      s = t.touchEventsData,
      { params: a, touches: i, rtlTranslate: r, slidesGrid: n, enabled: l } = t;
    if (!l) return;
    let o = e;
    if ((o.originalEvent && (o = o.originalEvent), s.allowTouchCallbacks && t.emit('touchEnd', o), (s.allowTouchCallbacks = !1), !s.isTouched))
      return s.isMoved && a.grabCursor && t.setGrabCursor(!1), (s.isMoved = !1), void (s.startMoving = !1);
    a.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
    const d = u(),
      c = d - s.touchStartTime;
    if (t.allowClick) {
      const e = o.path || (o.composedPath && o.composedPath());
      t.updateClickedSlide((e && e[0]) || o.target), t.emit('tap click', o), c < 300 && d - s.lastClickTime < 300 && t.emit('doubleTap doubleClick', o);
    }
    if (
      ((s.lastClickTime = u()),
      p(() => {
        t.destroyed || (t.allowClick = !0);
      }),
      !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === i.diff || s.currentTranslate === s.startTranslate)
    )
      return (s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1);
    let h;
    if (((s.isTouched = !1), (s.isMoved = !1), (s.startMoving = !1), (h = a.followFinger ? (r ? t.translate : -t.translate) : -s.currentTranslate), a.cssMode)) return;
    if (t.params.freeMode && a.freeMode.enabled) return void t.freeMode.onTouchEnd({ currentPos: h });
    let m = 0,
      f = t.slidesSizesGrid[0];
    for (let e = 0; e < n.length; e += e < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup) {
      const t = e < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
      void 0 !== n[e + t] ? h >= n[e] && h < n[e + t] && ((m = e), (f = n[e + t] - n[e])) : h >= n[e] && ((m = e), (f = n[n.length - 1] - n[n.length - 2]));
    }
    let g = null,
      v = null;
    a.rewind && (t.isBeginning ? (v = t.params.virtual && t.params.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1) : t.isEnd && (g = 0));
    const w = (h - n[m]) / f,
      b = m < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
    if (c > a.longSwipesMs) {
      if (!a.longSwipes) return void t.slideTo(t.activeIndex);
      'next' === t.swipeDirection && (w >= a.longSwipesRatio ? t.slideTo(a.rewind && t.isEnd ? g : m + b) : t.slideTo(m)),
        'prev' === t.swipeDirection && (w > 1 - a.longSwipesRatio ? t.slideTo(m + b) : null !== v && w < 0 && Math.abs(w) > a.longSwipesRatio ? t.slideTo(v) : t.slideTo(m));
    } else {
      if (!a.shortSwipes) return void t.slideTo(t.activeIndex);
      t.navigation && (o.target === t.navigation.nextEl || o.target === t.navigation.prevEl)
        ? o.target === t.navigation.nextEl
          ? t.slideTo(m + b)
          : t.slideTo(m)
        : ('next' === t.swipeDirection && t.slideTo(null !== g ? g : m + b), 'prev' === t.swipeDirection && t.slideTo(null !== v ? v : m));
    }
  }
  function A() {
    const e = this,
      { params: t, el: s } = e;
    if (s && 0 === s.offsetWidth) return;
    t.breakpoints && e.setBreakpoint();
    const { allowSlideNext: a, allowSlidePrev: i, snapGrid: r } = e;
    (e.allowSlideNext = !0),
      (e.allowSlidePrev = !0),
      e.updateSize(),
      e.updateSlides(),
      e.updateSlidesClasses(),
      ('auto' === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0),
      e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(),
      (e.allowSlidePrev = i),
      (e.allowSlideNext = a),
      e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
  }
  function D(e) {
    const t = this;
    t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())));
  }
  function G() {
    const e = this,
      { wrapperEl: t, rtlTranslate: s, enabled: a } = e;
    if (!a) return;
    let i;
    (e.previousTranslate = e.translate),
      e.isHorizontal() ? (e.translate = -t.scrollLeft) : (e.translate = -t.scrollTop),
      0 === e.translate && (e.translate = 0),
      e.updateActiveIndex(),
      e.updateSlidesClasses();
    const r = e.maxTranslate() - e.minTranslate();
    (i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r), i !== e.progress && e.updateProgress(s ? -e.translate : e.translate), e.emit('setTranslate', e.translate, !1);
  }
  let N = !1;
  function B() {}
  const H = (e, t) => {
    const s = a(),
      { params: i, touchEvents: r, el: n, wrapperEl: l, device: o, support: d } = e,
      c = !!i.nested,
      p = 'on' === t ? 'addEventListener' : 'removeEventListener',
      u = t;
    if (d.touch) {
      const t = !('touchstart' !== r.start || !d.passiveListener || !i.passiveListeners) && { passive: !0, capture: !1 };
      n[p](r.start, e.onTouchStart, t), n[p](r.move, e.onTouchMove, d.passiveListener ? { passive: !1, capture: c } : c), n[p](r.end, e.onTouchEnd, t), r.cancel && n[p](r.cancel, e.onTouchEnd, t);
    } else n[p](r.start, e.onTouchStart, !1), s[p](r.move, e.onTouchMove, c), s[p](r.end, e.onTouchEnd, !1);
    (i.preventClicks || i.preventClicksPropagation) && n[p]('click', e.onClick, !0),
      i.cssMode && l[p]('scroll', e.onScroll),
      i.updateOnWindowResize ? e[u](o.ios || o.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', A, !0) : e[u]('observerUpdate', A, !0);
  };
  var X = {
    attachEvents: function () {
      const e = this,
        t = a(),
        { params: s, support: i } = e;
      (e.onTouchStart = L.bind(e)),
        (e.onTouchMove = O.bind(e)),
        (e.onTouchEnd = I.bind(e)),
        s.cssMode && (e.onScroll = G.bind(e)),
        (e.onClick = D.bind(e)),
        i.touch && !N && (t.addEventListener('touchstart', B), (N = !0)),
        H(e, 'on');
    },
    detachEvents: function () {
      H(this, 'off');
    }
  };
  const Y = (e, t) => e.grid && t.grid && t.grid.rows > 1;
  var R = {
    addClasses: function () {
      const e = this,
        { classNames: t, params: s, rtl: a, $el: i, device: r, support: n } = e,
        l = (function (e, t) {
          const s = [];
          return (
            e.forEach((e) => {
              'object' == typeof e
                ? Object.keys(e).forEach((a) => {
                    e[a] && s.push(t + a);
                  })
                : 'string' == typeof e && s.push(t + e);
            }),
            s
          );
        })(
          [
            'initialized',
            s.direction,
            { 'pointer-events': !n.touch },
            { 'free-mode': e.params.freeMode && s.freeMode.enabled },
            { autoheight: s.autoHeight },
            { rtl: a },
            { grid: s.grid && s.grid.rows > 1 },
            { 'grid-column': s.grid && s.grid.rows > 1 && 'column' === s.grid.fill },
            { android: r.android },
            { ios: r.ios },
            { 'css-mode': s.cssMode },
            { centered: s.cssMode && s.centeredSlides },
            { 'watch-progress': s.watchSlidesProgress }
          ],
          s.containerModifierClass
        );
      t.push(...l), i.addClass([...t].join(' ')), e.emitContainerClasses();
    },
    removeClasses: function () {
      const { $el: e, classNames: t } = this;
      e.removeClass(t.join(' ')), this.emitContainerClasses();
    }
  };
  var W = {
    init: !0,
    direction: 'horizontal',
    touchEventsTarget: 'wrapper',
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: 'input, select, option, textarea, button, video, label',
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: 'slide',
    breakpoints: void 0,
    breakpointsBase: 'window',
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 0,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    preloadImages: !0,
    updateOnImagesReady: !0,
    loop: !1,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopedSlidesLimit: !0,
    loopFillGroupWithBlank: !1,
    loopPreventsSlide: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: 'swiper-no-swiping',
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: 'swiper-',
    slideClass: 'swiper-slide',
    slideBlankClass: 'swiper-slide-invisible-blank',
    slideActiveClass: 'swiper-slide-active',
    slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
    slideVisibleClass: 'swiper-slide-visible',
    slideDuplicateClass: 'swiper-slide-duplicate',
    slideNextClass: 'swiper-slide-next',
    slideDuplicateNextClass: 'swiper-slide-duplicate-next',
    slidePrevClass: 'swiper-slide-prev',
    slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
    wrapperClass: 'swiper-wrapper',
    runCallbacksOnInit: !0,
    _emitClasses: !1
  };
  function q(e, t) {
    return function (s) {
      void 0 === s && (s = {});
      const a = Object.keys(s)[0],
        i = s[a];
      'object' == typeof i && null !== i
        ? (['navigation', 'pagination', 'scrollbar'].indexOf(a) >= 0 && !0 === e[a] && (e[a] = { auto: !0 }),
          a in e && 'enabled' in i
            ? (!0 === e[a] && (e[a] = { enabled: !0 }), 'object' != typeof e[a] || 'enabled' in e[a] || (e[a].enabled = !0), e[a] || (e[a] = { enabled: !1 }), g(t, s))
            : g(t, s))
        : g(t, s);
    };
  }
  const j = {
      eventsEmitter: $,
      update: S,
      translate: M,
      transition: {
        setTransition: function (e, t) {
          const s = this;
          s.params.cssMode || s.$wrapperEl.transition(e), s.emit('setTransition', e, t);
        },
        transitionStart: function (e, t) {
          void 0 === e && (e = !0);
          const s = this,
            { params: a } = s;
          a.cssMode || (a.autoHeight && s.updateAutoHeight(), P({ swiper: s, runCallbacks: e, direction: t, step: 'Start' }));
        },
        transitionEnd: function (e, t) {
          void 0 === e && (e = !0);
          const s = this,
            { params: a } = s;
          (s.animating = !1), a.cssMode || (s.setTransition(0), P({ swiper: s, runCallbacks: e, direction: t, step: 'End' }));
        }
      },
      slide: k,
      loop: z,
      grabCursor: {
        setGrabCursor: function (e) {
          const t = this;
          if (t.support.touch || !t.params.simulateTouch || (t.params.watchOverflow && t.isLocked) || t.params.cssMode) return;
          const s = 'container' === t.params.touchEventsTarget ? t.el : t.wrapperEl;
          (s.style.cursor = 'move'), (s.style.cursor = e ? 'grabbing' : 'grab');
        },
        unsetGrabCursor: function () {
          const e = this;
          e.support.touch || (e.params.watchOverflow && e.isLocked) || e.params.cssMode || (e['container' === e.params.touchEventsTarget ? 'el' : 'wrapperEl'].style.cursor = '');
        }
      },
      events: X,
      breakpoints: {
        setBreakpoint: function () {
          const e = this,
            { activeIndex: t, initialized: s, loopedSlides: a = 0, params: i, $el: r } = e,
            n = i.breakpoints;
          if (!n || (n && 0 === Object.keys(n).length)) return;
          const l = e.getBreakpoint(n, e.params.breakpointsBase, e.el);
          if (!l || e.currentBreakpoint === l) return;
          const o = (l in n ? n[l] : void 0) || e.originalParams,
            d = Y(e, i),
            c = Y(e, o),
            p = i.enabled;
          d && !c
            ? (r.removeClass(`${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`), e.emitContainerClasses())
            : !d &&
              c &&
              (r.addClass(`${i.containerModifierClass}grid`),
              ((o.grid.fill && 'column' === o.grid.fill) || (!o.grid.fill && 'column' === i.grid.fill)) && r.addClass(`${i.containerModifierClass}grid-column`),
              e.emitContainerClasses()),
            ['navigation', 'pagination', 'scrollbar'].forEach((t) => {
              const s = i[t] && i[t].enabled,
                a = o[t] && o[t].enabled;
              s && !a && e[t].disable(), !s && a && e[t].enable();
            });
          const u = o.direction && o.direction !== i.direction,
            h = i.loop && (o.slidesPerView !== i.slidesPerView || u);
          u && s && e.changeDirection(), g(e.params, o);
          const m = e.params.enabled;
          Object.assign(e, { allowTouchMove: e.params.allowTouchMove, allowSlideNext: e.params.allowSlideNext, allowSlidePrev: e.params.allowSlidePrev }),
            p && !m ? e.disable() : !p && m && e.enable(),
            (e.currentBreakpoint = l),
            e.emit('_beforeBreakpoint', o),
            h && s && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - a + e.loopedSlides, 0, !1)),
            e.emit('breakpoint', o);
        },
        getBreakpoint: function (e, t, s) {
          if ((void 0 === t && (t = 'window'), !e || ('container' === t && !s))) return;
          let a = !1;
          const i = r(),
            n = 'window' === t ? i.innerHeight : s.clientHeight,
            l = Object.keys(e).map((e) => {
              if ('string' == typeof e && 0 === e.indexOf('@')) {
                const t = parseFloat(e.substr(1));
                return { value: n * t, point: e };
              }
              return { value: e, point: e };
            });
          l.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
          for (let e = 0; e < l.length; e += 1) {
            const { point: r, value: n } = l[e];
            'window' === t ? i.matchMedia(`(min-width: ${n}px)`).matches && (a = r) : n <= s.clientWidth && (a = r);
          }
          return a || 'max';
        }
      },
      checkOverflow: {
        checkOverflow: function () {
          const e = this,
            { isLocked: t, params: s } = e,
            { slidesOffsetBefore: a } = s;
          if (a) {
            const t = e.slides.length - 1,
              s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * a;
            e.isLocked = e.size > s;
          } else e.isLocked = 1 === e.snapGrid.length;
          !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
            !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
            t && t !== e.isLocked && (e.isEnd = !1),
            t !== e.isLocked && e.emit(e.isLocked ? 'lock' : 'unlock');
        }
      },
      classes: R,
      images: {
        loadImage: function (e, t, s, a, i, n) {
          const l = r();
          let o;
          function c() {
            n && n();
          }
          d(e).parent('picture')[0] || (e.complete && i) ? c() : t ? ((o = new l.Image()), (o.onload = c), (o.onerror = c), a && (o.sizes = a), s && (o.srcset = s), t && (o.src = t)) : c();
        },
        preloadImages: function () {
          const e = this;
          function t() {
            null != e &&
              e &&
              !e.destroyed &&
              (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit('imagesReady')));
          }
          e.imagesToLoad = e.$el.find('img');
          for (let s = 0; s < e.imagesToLoad.length; s += 1) {
            const a = e.imagesToLoad[s];
            e.loadImage(a, a.currentSrc || a.getAttribute('src'), a.srcset || a.getAttribute('srcset'), a.sizes || a.getAttribute('sizes'), !0, t);
          }
        }
      }
    },
    _ = {};
  class V {
    constructor() {
      let e, t;
      for (var s = arguments.length, a = new Array(s), i = 0; i < s; i++) a[i] = arguments[i];
      if (
        (1 === a.length && a[0].constructor && 'Object' === Object.prototype.toString.call(a[0]).slice(8, -1) ? (t = a[0]) : ([e, t] = a),
        t || (t = {}),
        (t = g({}, t)),
        e && !t.el && (t.el = e),
        t.el && d(t.el).length > 1)
      ) {
        const e = [];
        return (
          d(t.el).each((s) => {
            const a = g({}, t, { el: s });
            e.push(new V(a));
          }),
          e
        );
      }
      const r = this;
      (r.__swiper__ = !0),
        (r.support = E()),
        (r.device = C({ userAgent: t.userAgent })),
        (r.browser = T()),
        (r.eventsListeners = {}),
        (r.eventsAnyListeners = []),
        (r.modules = [...r.__modules__]),
        t.modules && Array.isArray(t.modules) && r.modules.push(...t.modules);
      const n = {};
      r.modules.forEach((e) => {
        e({ swiper: r, extendParams: q(t, n), on: r.on.bind(r), once: r.once.bind(r), off: r.off.bind(r), emit: r.emit.bind(r) });
      });
      const l = g({}, W, n);
      return (
        (r.params = g({}, l, _, t)),
        (r.originalParams = g({}, r.params)),
        (r.passedParams = g({}, t)),
        r.params &&
          r.params.on &&
          Object.keys(r.params.on).forEach((e) => {
            r.on(e, r.params.on[e]);
          }),
        r.params && r.params.onAny && r.onAny(r.params.onAny),
        (r.$ = d),
        Object.assign(r, {
          enabled: r.params.enabled,
          el: e,
          classNames: [],
          slides: d(),
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal: () => 'horizontal' === r.params.direction,
          isVertical: () => 'vertical' === r.params.direction,
          activeIndex: 0,
          realIndex: 0,
          isBeginning: !0,
          isEnd: !1,
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: !1,
          allowSlideNext: r.params.allowSlideNext,
          allowSlidePrev: r.params.allowSlidePrev,
          touchEvents: (function () {
            const e = ['touchstart', 'touchmove', 'touchend', 'touchcancel'],
              t = ['pointerdown', 'pointermove', 'pointerup'];
            return (
              (r.touchEventsTouch = { start: e[0], move: e[1], end: e[2], cancel: e[3] }),
              (r.touchEventsDesktop = { start: t[0], move: t[1], end: t[2] }),
              r.support.touch || !r.params.simulateTouch ? r.touchEventsTouch : r.touchEventsDesktop
            );
          })(),
          touchEventsData: {
            isTouched: void 0,
            isMoved: void 0,
            allowTouchCallbacks: void 0,
            touchStartTime: void 0,
            isScrolling: void 0,
            currentTranslate: void 0,
            startTranslate: void 0,
            allowThresholdMove: void 0,
            focusableElements: r.params.focusableElements,
            lastClickTime: u(),
            clickTimeout: void 0,
            velocities: [],
            allowMomentumBounce: void 0,
            isTouchEvent: void 0,
            startMoving: void 0
          },
          allowClick: !0,
          allowTouchMove: r.params.allowTouchMove,
          touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
          imagesToLoad: [],
          imagesLoaded: 0
        }),
        r.emit('_swiper'),
        r.params.init && r.init(),
        r
      );
    }
    enable() {
      const e = this;
      e.enabled || ((e.enabled = !0), e.params.grabCursor && e.setGrabCursor(), e.emit('enable'));
    }
    disable() {
      const e = this;
      e.enabled && ((e.enabled = !1), e.params.grabCursor && e.unsetGrabCursor(), e.emit('disable'));
    }
    setProgress(e, t) {
      const s = this;
      e = Math.min(Math.max(e, 0), 1);
      const a = s.minTranslate(),
        i = (s.maxTranslate() - a) * e + a;
      s.translateTo(i, void 0 === t ? 0 : t), s.updateActiveIndex(), s.updateSlidesClasses();
    }
    emitContainerClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = e.el.className.split(' ').filter((t) => 0 === t.indexOf('swiper') || 0 === t.indexOf(e.params.containerModifierClass));
      e.emit('_containerClasses', t.join(' '));
    }
    getSlideClasses(e) {
      const t = this;
      return t.destroyed
        ? ''
        : e.className
            .split(' ')
            .filter((e) => 0 === e.indexOf('swiper-slide') || 0 === e.indexOf(t.params.slideClass))
            .join(' ');
    }
    emitSlidesClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = [];
      e.slides.each((s) => {
        const a = e.getSlideClasses(s);
        t.push({ slideEl: s, classNames: a }), e.emit('_slideClass', s, a);
      }),
        e.emit('_slideClasses', t);
    }
    slidesPerViewDynamic(e, t) {
      void 0 === e && (e = 'current'), void 0 === t && (t = !1);
      const { params: s, slides: a, slidesGrid: i, slidesSizesGrid: r, size: n, activeIndex: l } = this;
      let o = 1;
      if (s.centeredSlides) {
        let e,
          t = a[l].swiperSlideSize;
        for (let s = l + 1; s < a.length; s += 1) a[s] && !e && ((t += a[s].swiperSlideSize), (o += 1), t > n && (e = !0));
        for (let s = l - 1; s >= 0; s -= 1) a[s] && !e && ((t += a[s].swiperSlideSize), (o += 1), t > n && (e = !0));
      } else if ('current' === e)
        for (let e = l + 1; e < a.length; e += 1) {
          (t ? i[e] + r[e] - i[l] < n : i[e] - i[l] < n) && (o += 1);
        }
      else
        for (let e = l - 1; e >= 0; e -= 1) {
          i[l] - i[e] < n && (o += 1);
        }
      return o;
    }
    update() {
      const e = this;
      if (!e || e.destroyed) return;
      const { snapGrid: t, params: s } = e;
      function a() {
        const t = e.rtlTranslate ? -1 * e.translate : e.translate,
          s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
        e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
      }
      let i;
      s.breakpoints && e.setBreakpoint(),
        e.updateSize(),
        e.updateSlides(),
        e.updateProgress(),
        e.updateSlidesClasses(),
        e.params.freeMode && e.params.freeMode.enabled
          ? (a(), e.params.autoHeight && e.updateAutoHeight())
          : ((i =
              ('auto' === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides
                ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                : e.slideTo(e.activeIndex, 0, !1, !0)),
            i || a()),
        s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
        e.emit('update');
    }
    changeDirection(e, t) {
      void 0 === t && (t = !0);
      const s = this,
        a = s.params.direction;
      return (
        e || (e = 'horizontal' === a ? 'vertical' : 'horizontal'),
        e === a ||
          ('horizontal' !== e && 'vertical' !== e) ||
          (s.$el.removeClass(`${s.params.containerModifierClass}${a}`).addClass(`${s.params.containerModifierClass}${e}`),
          s.emitContainerClasses(),
          (s.params.direction = e),
          s.slides.each((t) => {
            'vertical' === e ? (t.style.width = '') : (t.style.height = '');
          }),
          s.emit('changeDirection'),
          t && s.update()),
        s
      );
    }
    changeLanguageDirection(e) {
      const t = this;
      (t.rtl && 'rtl' === e) ||
        (!t.rtl && 'ltr' === e) ||
        ((t.rtl = 'rtl' === e),
        (t.rtlTranslate = 'horizontal' === t.params.direction && t.rtl),
        t.rtl ? (t.$el.addClass(`${t.params.containerModifierClass}rtl`), (t.el.dir = 'rtl')) : (t.$el.removeClass(`${t.params.containerModifierClass}rtl`), (t.el.dir = 'ltr')),
        t.update());
    }
    mount(e) {
      const t = this;
      if (t.mounted) return !0;
      const s = d(e || t.params.el);
      if (!(e = s[0])) return !1;
      e.swiper = t;
      const i = () => `.${(t.params.wrapperClass || '').trim().split(' ').join('.')}`;
      let r = (() => {
        if (e && e.shadowRoot && e.shadowRoot.querySelector) {
          const t = d(e.shadowRoot.querySelector(i()));
          return (t.children = (e) => s.children(e)), t;
        }
        return s.children ? s.children(i()) : d(s).children(i());
      })();
      if (0 === r.length && t.params.createElements) {
        const e = a().createElement('div');
        (r = d(e)),
          (e.className = t.params.wrapperClass),
          s.append(e),
          s.children(`.${t.params.slideClass}`).each((e) => {
            r.append(e);
          });
      }
      return (
        Object.assign(t, {
          $el: s,
          el: e,
          $wrapperEl: r,
          wrapperEl: r[0],
          mounted: !0,
          rtl: 'rtl' === e.dir.toLowerCase() || 'rtl' === s.css('direction'),
          rtlTranslate: 'horizontal' === t.params.direction && ('rtl' === e.dir.toLowerCase() || 'rtl' === s.css('direction')),
          wrongRTL: '-webkit-box' === r.css('display')
        }),
        !0
      );
    }
    init(e) {
      const t = this;
      if (t.initialized) return t;
      return (
        !1 === t.mount(e) ||
          (t.emit('beforeInit'),
          t.params.breakpoints && t.setBreakpoint(),
          t.addClasses(),
          t.params.loop && t.loopCreate(),
          t.updateSize(),
          t.updateSlides(),
          t.params.watchOverflow && t.checkOverflow(),
          t.params.grabCursor && t.enabled && t.setGrabCursor(),
          t.params.preloadImages && t.preloadImages(),
          t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0),
          t.attachEvents(),
          (t.initialized = !0),
          t.emit('init'),
          t.emit('afterInit')),
        t
      );
    }
    destroy(e, t) {
      void 0 === e && (e = !0), void 0 === t && (t = !0);
      const s = this,
        { params: a, $el: i, $wrapperEl: r, slides: n } = s;
      return (
        void 0 === s.params ||
          s.destroyed ||
          (s.emit('beforeDestroy'),
          (s.initialized = !1),
          s.detachEvents(),
          a.loop && s.loopDestroy(),
          t &&
            (s.removeClasses(),
            i.removeAttr('style'),
            r.removeAttr('style'),
            n && n.length && n.removeClass([a.slideVisibleClass, a.slideActiveClass, a.slideNextClass, a.slidePrevClass].join(' ')).removeAttr('style').removeAttr('data-swiper-slide-index')),
          s.emit('destroy'),
          Object.keys(s.eventsListeners).forEach((e) => {
            s.off(e);
          }),
          !1 !== e &&
            ((s.$el[0].swiper = null),
            (function (e) {
              const t = e;
              Object.keys(t).forEach((e) => {
                try {
                  t[e] = null;
                } catch (e) {}
                try {
                  delete t[e];
                } catch (e) {}
              });
            })(s)),
          (s.destroyed = !0)),
        null
      );
    }
    static extendDefaults(e) {
      g(_, e);
    }
    static get extendedDefaults() {
      return _;
    }
    static get defaults() {
      return W;
    }
    static installModule(e) {
      V.prototype.__modules__ || (V.prototype.__modules__ = []);
      const t = V.prototype.__modules__;
      'function' == typeof e && t.indexOf(e) < 0 && t.push(e);
    }
    static use(e) {
      return Array.isArray(e) ? (e.forEach((e) => V.installModule(e)), V) : (V.installModule(e), V);
    }
  }
  function F(e, t, s, i) {
    const r = a();
    return (
      e.params.createElements &&
        Object.keys(i).forEach((a) => {
          if (!s[a] && !0 === s.auto) {
            let n = e.$el.children(`.${i[a]}`)[0];
            n || ((n = r.createElement('div')), (n.className = i[a]), e.$el.append(n)), (s[a] = n), (t[a] = n);
          }
        }),
      s
    );
  }
  function U(e) {
    return (
      void 0 === e && (e = ''),
      `.${e
        .trim()
        .replace(/([\.:!\/])/g, '\\$1')
        .replace(/ /g, '.')}`
    );
  }
  function K(e) {
    const t = this,
      { $wrapperEl: s, params: a } = t;
    if ((a.loop && t.loopDestroy(), 'object' == typeof e && 'length' in e)) for (let t = 0; t < e.length; t += 1) e[t] && s.append(e[t]);
    else s.append(e);
    a.loop && t.loopCreate(), a.observer || t.update();
  }
  function Z(e) {
    const t = this,
      { params: s, $wrapperEl: a, activeIndex: i } = t;
    s.loop && t.loopDestroy();
    let r = i + 1;
    if ('object' == typeof e && 'length' in e) {
      for (let t = 0; t < e.length; t += 1) e[t] && a.prepend(e[t]);
      r = i + e.length;
    } else a.prepend(e);
    s.loop && t.loopCreate(), s.observer || t.update(), t.slideTo(r, 0, !1);
  }
  function Q(e, t) {
    const s = this,
      { $wrapperEl: a, params: i, activeIndex: r } = s;
    let n = r;
    i.loop && ((n -= s.loopedSlides), s.loopDestroy(), (s.slides = a.children(`.${i.slideClass}`)));
    const l = s.slides.length;
    if (e <= 0) return void s.prependSlide(t);
    if (e >= l) return void s.appendSlide(t);
    let o = n > e ? n + 1 : n;
    const d = [];
    for (let t = l - 1; t >= e; t -= 1) {
      const e = s.slides.eq(t);
      e.remove(), d.unshift(e);
    }
    if ('object' == typeof t && 'length' in t) {
      for (let e = 0; e < t.length; e += 1) t[e] && a.append(t[e]);
      o = n > e ? n + t.length : n;
    } else a.append(t);
    for (let e = 0; e < d.length; e += 1) a.append(d[e]);
    i.loop && s.loopCreate(), i.observer || s.update(), i.loop ? s.slideTo(o + s.loopedSlides, 0, !1) : s.slideTo(o, 0, !1);
  }
  function J(e) {
    const t = this,
      { params: s, $wrapperEl: a, activeIndex: i } = t;
    let r = i;
    s.loop && ((r -= t.loopedSlides), t.loopDestroy(), (t.slides = a.children(`.${s.slideClass}`)));
    let n,
      l = r;
    if ('object' == typeof e && 'length' in e) {
      for (let s = 0; s < e.length; s += 1) (n = e[s]), t.slides[n] && t.slides.eq(n).remove(), n < l && (l -= 1);
      l = Math.max(l, 0);
    } else (n = e), t.slides[n] && t.slides.eq(n).remove(), n < l && (l -= 1), (l = Math.max(l, 0));
    s.loop && t.loopCreate(), s.observer || t.update(), s.loop ? t.slideTo(l + t.loopedSlides, 0, !1) : t.slideTo(l, 0, !1);
  }
  function ee() {
    const e = this,
      t = [];
    for (let s = 0; s < e.slides.length; s += 1) t.push(s);
    e.removeSlide(t);
  }
  function te(e) {
    const { effect: t, swiper: s, on: a, setTranslate: i, setTransition: r, overwriteParams: n, perspective: l, recreateShadows: o, getEffectParams: d } = e;
    let c;
    a('beforeInit', () => {
      if (s.params.effect !== t) return;
      s.classNames.push(`${s.params.containerModifierClass}${t}`), l && l() && s.classNames.push(`${s.params.containerModifierClass}3d`);
      const e = n ? n() : {};
      Object.assign(s.params, e), Object.assign(s.originalParams, e);
    }),
      a('setTranslate', () => {
        s.params.effect === t && i();
      }),
      a('setTransition', (e, a) => {
        s.params.effect === t && r(a);
      }),
      a('transitionEnd', () => {
        if (s.params.effect === t && o) {
          if (!d || !d().slideShadows) return;
          s.slides.each((e) => {
            s.$(e).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').remove();
          }),
            o();
        }
      }),
      a('virtualUpdate', () => {
        s.params.effect === t &&
          (s.slides.length || (c = !0),
          requestAnimationFrame(() => {
            c && s.slides && s.slides.length && (i(), (c = !1));
          }));
      });
  }
  function se(e, t) {
    return e.transformEl ? t.find(e.transformEl).css({ 'backface-visibility': 'hidden', '-webkit-backface-visibility': 'hidden' }) : t;
  }
  function ae(e) {
    let { swiper: t, duration: s, transformEl: a, allSlides: i } = e;
    const { slides: r, activeIndex: n, $wrapperEl: l } = t;
    if (t.params.virtualTranslate && 0 !== s) {
      let e,
        s = !1;
      (e = i ? (a ? r.find(a) : r) : a ? r.eq(n).find(a) : r.eq(n)),
        e.transitionEnd(() => {
          if (s) return;
          if (!t || t.destroyed) return;
          (s = !0), (t.animating = !1);
          const e = ['webkitTransitionEnd', 'transitionend'];
          for (let t = 0; t < e.length; t += 1) l.trigger(e[t]);
        });
    }
  }
  function ie(e, t, s) {
    const a = 'swiper-slide-shadow' + (s ? `-${s}` : ''),
      i = e.transformEl ? t.find(e.transformEl) : t;
    let r = i.children(`.${a}`);
    return r.length || ((r = d(`<div class="swiper-slide-shadow${s ? `-${s}` : ''}"></div>`)), i.append(r)), r;
  }
  Object.keys(j).forEach((e) => {
    Object.keys(j[e]).forEach((t) => {
      V.prototype[t] = j[e][t];
    });
  }),
    V.use([
      function (e) {
        let { swiper: t, on: s, emit: a } = e;
        const i = r();
        let n = null,
          l = null;
        const o = () => {
            t && !t.destroyed && t.initialized && (a('beforeResize'), a('resize'));
          },
          d = () => {
            t && !t.destroyed && t.initialized && a('orientationchange');
          };
        s('init', () => {
          t.params.resizeObserver && void 0 !== i.ResizeObserver
            ? t &&
              !t.destroyed &&
              t.initialized &&
              ((n = new ResizeObserver((e) => {
                l = i.requestAnimationFrame(() => {
                  const { width: s, height: a } = t;
                  let i = s,
                    r = a;
                  e.forEach((e) => {
                    let { contentBoxSize: s, contentRect: a, target: n } = e;
                    (n && n !== t.el) || ((i = a ? a.width : (s[0] || s).inlineSize), (r = a ? a.height : (s[0] || s).blockSize));
                  }),
                    (i === s && r === a) || o();
                });
              })),
              n.observe(t.el))
            : (i.addEventListener('resize', o), i.addEventListener('orientationchange', d));
        }),
          s('destroy', () => {
            l && i.cancelAnimationFrame(l), n && n.unobserve && t.el && (n.unobserve(t.el), (n = null)), i.removeEventListener('resize', o), i.removeEventListener('orientationchange', d);
          });
      },
      function (e) {
        let { swiper: t, extendParams: s, on: a, emit: i } = e;
        const n = [],
          l = r(),
          o = function (e, t) {
            void 0 === t && (t = {});
            const s = new (l.MutationObserver || l.WebkitMutationObserver)((e) => {
              if (1 === e.length) return void i('observerUpdate', e[0]);
              const t = function () {
                i('observerUpdate', e[0]);
              };
              l.requestAnimationFrame ? l.requestAnimationFrame(t) : l.setTimeout(t, 0);
            });
            s.observe(e, { attributes: void 0 === t.attributes || t.attributes, childList: void 0 === t.childList || t.childList, characterData: void 0 === t.characterData || t.characterData }),
              n.push(s);
          };
        s({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
          a('init', () => {
            if (t.params.observer) {
              if (t.params.observeParents) {
                const e = t.$el.parents();
                for (let t = 0; t < e.length; t += 1) o(e[t]);
              }
              o(t.$el[0], { childList: t.params.observeSlideChildren }), o(t.$wrapperEl[0], { attributes: !1 });
            }
          }),
          a('destroy', () => {
            n.forEach((e) => {
              e.disconnect();
            }),
              n.splice(0, n.length);
          });
      }
    ]);
  const re = [
    function (e) {
      let t,
        { swiper: s, extendParams: a, on: i, emit: r } = e;
      function n(e, t) {
        const a = s.params.virtual;
        if (a.cache && s.virtual.cache[t]) return s.virtual.cache[t];
        const i = a.renderSlide ? d(a.renderSlide.call(s, e, t)) : d(`<div class="${s.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`);
        return i.attr('data-swiper-slide-index') || i.attr('data-swiper-slide-index', t), a.cache && (s.virtual.cache[t] = i), i;
      }
      function l(e) {
        const { slidesPerView: t, slidesPerGroup: a, centeredSlides: i } = s.params,
          { addSlidesBefore: l, addSlidesAfter: o } = s.params.virtual,
          { from: d, to: c, slides: p, slidesGrid: u, offset: h } = s.virtual;
        s.params.cssMode || s.updateActiveIndex();
        const m = s.activeIndex || 0;
        let f, g, v;
        (f = s.rtlTranslate ? 'right' : s.isHorizontal() ? 'left' : 'top'), i ? ((g = Math.floor(t / 2) + a + o), (v = Math.floor(t / 2) + a + l)) : ((g = t + (a - 1) + o), (v = a + l));
        const w = Math.max((m || 0) - v, 0),
          b = Math.min((m || 0) + g, p.length - 1),
          x = (s.slidesGrid[w] || 0) - (s.slidesGrid[0] || 0);
        function y() {
          s.updateSlides(), s.updateProgress(), s.updateSlidesClasses(), s.lazy && s.params.lazy.enabled && s.lazy.load(), r('virtualUpdate');
        }
        if ((Object.assign(s.virtual, { from: w, to: b, offset: x, slidesGrid: s.slidesGrid }), d === w && c === b && !e))
          return s.slidesGrid !== u && x !== h && s.slides.css(f, `${x}px`), s.updateProgress(), void r('virtualUpdate');
        if (s.params.virtual.renderExternal)
          return (
            s.params.virtual.renderExternal.call(s, {
              offset: x,
              from: w,
              to: b,
              slides: (function () {
                const e = [];
                for (let t = w; t <= b; t += 1) e.push(p[t]);
                return e;
              })()
            }),
            void (s.params.virtual.renderExternalUpdate ? y() : r('virtualUpdate'))
          );
        const E = [],
          C = [];
        if (e) s.$wrapperEl.find(`.${s.params.slideClass}`).remove();
        else for (let e = d; e <= c; e += 1) (e < w || e > b) && s.$wrapperEl.find(`.${s.params.slideClass}[data-swiper-slide-index="${e}"]`).remove();
        for (let t = 0; t < p.length; t += 1) t >= w && t <= b && (void 0 === c || e ? C.push(t) : (t > c && C.push(t), t < d && E.push(t)));
        C.forEach((e) => {
          s.$wrapperEl.append(n(p[e], e));
        }),
          E.sort((e, t) => t - e).forEach((e) => {
            s.$wrapperEl.prepend(n(p[e], e));
          }),
          s.$wrapperEl.children('.swiper-slide').css(f, `${x}px`),
          y();
      }
      a({ virtual: { enabled: !1, slides: [], cache: !0, renderSlide: null, renderExternal: null, renderExternalUpdate: !0, addSlidesBefore: 0, addSlidesAfter: 0 } }),
        (s.virtual = { cache: {}, from: void 0, to: void 0, slides: [], offset: 0, slidesGrid: [] }),
        i('beforeInit', () => {
          s.params.virtual.enabled &&
            ((s.virtual.slides = s.params.virtual.slides),
            s.classNames.push(`${s.params.containerModifierClass}virtual`),
            (s.params.watchSlidesProgress = !0),
            (s.originalParams.watchSlidesProgress = !0),
            s.params.initialSlide || l());
        }),
        i('setTranslate', () => {
          s.params.virtual.enabled &&
            (s.params.cssMode && !s._immediateVirtual
              ? (clearTimeout(t),
                (t = setTimeout(() => {
                  l();
                }, 100)))
              : l());
        }),
        i('init update resize', () => {
          s.params.virtual.enabled && s.params.cssMode && v(s.wrapperEl, '--swiper-virtual-size', `${s.virtualSize}px`);
        }),
        Object.assign(s.virtual, {
          appendSlide: function (e) {
            if ('object' == typeof e && 'length' in e) for (let t = 0; t < e.length; t += 1) e[t] && s.virtual.slides.push(e[t]);
            else s.virtual.slides.push(e);
            l(!0);
          },
          prependSlide: function (e) {
            const t = s.activeIndex;
            let a = t + 1,
              i = 1;
            if (Array.isArray(e)) {
              for (let t = 0; t < e.length; t += 1) e[t] && s.virtual.slides.unshift(e[t]);
              (a = t + e.length), (i = e.length);
            } else s.virtual.slides.unshift(e);
            if (s.params.virtual.cache) {
              const e = s.virtual.cache,
                t = {};
              Object.keys(e).forEach((s) => {
                const a = e[s],
                  r = a.attr('data-swiper-slide-index');
                r && a.attr('data-swiper-slide-index', parseInt(r, 10) + i), (t[parseInt(s, 10) + i] = a);
              }),
                (s.virtual.cache = t);
            }
            l(!0), s.slideTo(a, 0);
          },
          removeSlide: function (e) {
            if (null == e) return;
            let t = s.activeIndex;
            if (Array.isArray(e))
              for (let a = e.length - 1; a >= 0; a -= 1) s.virtual.slides.splice(e[a], 1), s.params.virtual.cache && delete s.virtual.cache[e[a]], e[a] < t && (t -= 1), (t = Math.max(t, 0));
            else s.virtual.slides.splice(e, 1), s.params.virtual.cache && delete s.virtual.cache[e], e < t && (t -= 1), (t = Math.max(t, 0));
            l(!0), s.slideTo(t, 0);
          },
          removeAllSlides: function () {
            (s.virtual.slides = []), s.params.virtual.cache && (s.virtual.cache = {}), l(!0), s.slideTo(0, 0);
          },
          update: l
        });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: i, emit: n } = e;
      const l = a(),
        o = r();
      function c(e) {
        if (!t.enabled) return;
        const { rtlTranslate: s } = t;
        let a = e;
        a.originalEvent && (a = a.originalEvent);
        const i = a.keyCode || a.charCode,
          r = t.params.keyboard.pageUpDown,
          d = r && 33 === i,
          c = r && 34 === i,
          p = 37 === i,
          u = 39 === i,
          h = 38 === i,
          m = 40 === i;
        if (!t.allowSlideNext && ((t.isHorizontal() && u) || (t.isVertical() && m) || c)) return !1;
        if (!t.allowSlidePrev && ((t.isHorizontal() && p) || (t.isVertical() && h) || d)) return !1;
        if (
          !(
            a.shiftKey ||
            a.altKey ||
            a.ctrlKey ||
            a.metaKey ||
            (l.activeElement && l.activeElement.nodeName && ('input' === l.activeElement.nodeName.toLowerCase() || 'textarea' === l.activeElement.nodeName.toLowerCase()))
          )
        ) {
          if (t.params.keyboard.onlyInViewport && (d || c || p || u || h || m)) {
            let e = !1;
            if (t.$el.parents(`.${t.params.slideClass}`).length > 0 && 0 === t.$el.parents(`.${t.params.slideActiveClass}`).length) return;
            const a = t.$el,
              i = a[0].clientWidth,
              r = a[0].clientHeight,
              n = o.innerWidth,
              l = o.innerHeight,
              d = t.$el.offset();
            s && (d.left -= t.$el[0].scrollLeft);
            const c = [
              [d.left, d.top],
              [d.left + i, d.top],
              [d.left, d.top + r],
              [d.left + i, d.top + r]
            ];
            for (let t = 0; t < c.length; t += 1) {
              const s = c[t];
              if (s[0] >= 0 && s[0] <= n && s[1] >= 0 && s[1] <= l) {
                if (0 === s[0] && 0 === s[1]) continue;
                e = !0;
              }
            }
            if (!e) return;
          }
          t.isHorizontal()
            ? ((d || c || p || u) && (a.preventDefault ? a.preventDefault() : (a.returnValue = !1)),
              (((c || u) && !s) || ((d || p) && s)) && t.slideNext(),
              (((d || p) && !s) || ((c || u) && s)) && t.slidePrev())
            : ((d || c || h || m) && (a.preventDefault ? a.preventDefault() : (a.returnValue = !1)), (c || m) && t.slideNext(), (d || h) && t.slidePrev()),
            n('keyPress', i);
        }
      }
      function p() {
        t.keyboard.enabled || (d(l).on('keydown', c), (t.keyboard.enabled = !0));
      }
      function u() {
        t.keyboard.enabled && (d(l).off('keydown', c), (t.keyboard.enabled = !1));
      }
      (t.keyboard = { enabled: !1 }),
        s({ keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } }),
        i('init', () => {
          t.params.keyboard.enabled && p();
        }),
        i('destroy', () => {
          t.keyboard.enabled && u();
        }),
        Object.assign(t.keyboard, { enable: p, disable: u });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a, emit: i } = e;
      const n = r();
      let l;
      s({ mousewheel: { enabled: !1, releaseOnEdges: !1, invert: !1, forceToAxis: !1, sensitivity: 1, eventsTarget: 'container', thresholdDelta: null, thresholdTime: null } }),
        (t.mousewheel = { enabled: !1 });
      let o,
        c = u();
      const h = [];
      function m() {
        t.enabled && (t.mouseEntered = !0);
      }
      function f() {
        t.enabled && (t.mouseEntered = !1);
      }
      function g(e) {
        return (
          !(t.params.mousewheel.thresholdDelta && e.delta < t.params.mousewheel.thresholdDelta) &&
          !(t.params.mousewheel.thresholdTime && u() - c < t.params.mousewheel.thresholdTime) &&
          ((e.delta >= 6 && u() - c < 60) ||
            (e.direction < 0
              ? (t.isEnd && !t.params.loop) || t.animating || (t.slideNext(), i('scroll', e.raw))
              : (t.isBeginning && !t.params.loop) || t.animating || (t.slidePrev(), i('scroll', e.raw)),
            (c = new n.Date().getTime()),
            !1))
        );
      }
      function v(e) {
        let s = e,
          a = !0;
        if (!t.enabled) return;
        const r = t.params.mousewheel;
        t.params.cssMode && s.preventDefault();
        let n = t.$el;
        if (('container' !== t.params.mousewheel.eventsTarget && (n = d(t.params.mousewheel.eventsTarget)), !t.mouseEntered && !n[0].contains(s.target) && !r.releaseOnEdges)) return !0;
        s.originalEvent && (s = s.originalEvent);
        let c = 0;
        const m = t.rtlTranslate ? -1 : 1,
          f = (function (e) {
            let t = 0,
              s = 0,
              a = 0,
              i = 0;
            return (
              'detail' in e && (s = e.detail),
              'wheelDelta' in e && (s = -e.wheelDelta / 120),
              'wheelDeltaY' in e && (s = -e.wheelDeltaY / 120),
              'wheelDeltaX' in e && (t = -e.wheelDeltaX / 120),
              'axis' in e && e.axis === e.HORIZONTAL_AXIS && ((t = s), (s = 0)),
              (a = 10 * t),
              (i = 10 * s),
              'deltaY' in e && (i = e.deltaY),
              'deltaX' in e && (a = e.deltaX),
              e.shiftKey && !a && ((a = i), (i = 0)),
              (a || i) && e.deltaMode && (1 === e.deltaMode ? ((a *= 40), (i *= 40)) : ((a *= 800), (i *= 800))),
              a && !t && (t = a < 1 ? -1 : 1),
              i && !s && (s = i < 1 ? -1 : 1),
              { spinX: t, spinY: s, pixelX: a, pixelY: i }
            );
          })(s);
        if (r.forceToAxis)
          if (t.isHorizontal()) {
            if (!(Math.abs(f.pixelX) > Math.abs(f.pixelY))) return !0;
            c = -f.pixelX * m;
          } else {
            if (!(Math.abs(f.pixelY) > Math.abs(f.pixelX))) return !0;
            c = -f.pixelY;
          }
        else c = Math.abs(f.pixelX) > Math.abs(f.pixelY) ? -f.pixelX * m : -f.pixelY;
        if (0 === c) return !0;
        r.invert && (c = -c);
        let v = t.getTranslate() + c * r.sensitivity;
        if (
          (v >= t.minTranslate() && (v = t.minTranslate()),
          v <= t.maxTranslate() && (v = t.maxTranslate()),
          (a = !!t.params.loop || !(v === t.minTranslate() || v === t.maxTranslate())),
          a && t.params.nested && s.stopPropagation(),
          t.params.freeMode && t.params.freeMode.enabled)
        ) {
          const e = { time: u(), delta: Math.abs(c), direction: Math.sign(c) },
            a = o && e.time < o.time + 500 && e.delta <= o.delta && e.direction === o.direction;
          if (!a) {
            (o = void 0), t.params.loop && t.loopFix();
            let n = t.getTranslate() + c * r.sensitivity;
            const d = t.isBeginning,
              u = t.isEnd;
            if (
              (n >= t.minTranslate() && (n = t.minTranslate()),
              n <= t.maxTranslate() && (n = t.maxTranslate()),
              t.setTransition(0),
              t.setTranslate(n),
              t.updateProgress(),
              t.updateActiveIndex(),
              t.updateSlidesClasses(),
              ((!d && t.isBeginning) || (!u && t.isEnd)) && t.updateSlidesClasses(),
              t.params.freeMode.sticky)
            ) {
              clearTimeout(l), (l = void 0), h.length >= 15 && h.shift();
              const s = h.length ? h[h.length - 1] : void 0,
                a = h[0];
              if ((h.push(e), s && (e.delta > s.delta || e.direction !== s.direction))) h.splice(0);
              else if (h.length >= 15 && e.time - a.time < 500 && a.delta - e.delta >= 1 && e.delta <= 6) {
                const s = c > 0 ? 0.8 : 0.2;
                (o = e),
                  h.splice(0),
                  (l = p(() => {
                    t.slideToClosest(t.params.speed, !0, void 0, s);
                  }, 0));
              }
              l ||
                (l = p(() => {
                  (o = e), h.splice(0), t.slideToClosest(t.params.speed, !0, void 0, 0.5);
                }, 500));
            }
            if ((a || i('scroll', s), t.params.autoplay && t.params.autoplayDisableOnInteraction && t.autoplay.stop(), n === t.minTranslate() || n === t.maxTranslate())) return !0;
          }
        } else {
          const s = { time: u(), delta: Math.abs(c), direction: Math.sign(c), raw: e };
          h.length >= 2 && h.shift();
          const a = h.length ? h[h.length - 1] : void 0;
          if (
            (h.push(s),
            a ? (s.direction !== a.direction || s.delta > a.delta || s.time > a.time + 150) && g(s) : g(s),
            (function (e) {
              const s = t.params.mousewheel;
              if (e.direction < 0) {
                if (t.isEnd && !t.params.loop && s.releaseOnEdges) return !0;
              } else if (t.isBeginning && !t.params.loop && s.releaseOnEdges) return !0;
              return !1;
            })(s))
          )
            return !0;
        }
        return s.preventDefault ? s.preventDefault() : (s.returnValue = !1), !1;
      }
      function w(e) {
        let s = t.$el;
        'container' !== t.params.mousewheel.eventsTarget && (s = d(t.params.mousewheel.eventsTarget)), s[e]('mouseenter', m), s[e]('mouseleave', f), s[e]('wheel', v);
      }
      function b() {
        return t.params.cssMode ? (t.wrapperEl.removeEventListener('wheel', v), !0) : !t.mousewheel.enabled && (w('on'), (t.mousewheel.enabled = !0), !0);
      }
      function x() {
        return t.params.cssMode ? (t.wrapperEl.addEventListener(event, v), !0) : !!t.mousewheel.enabled && (w('off'), (t.mousewheel.enabled = !1), !0);
      }
      a('init', () => {
        !t.params.mousewheel.enabled && t.params.cssMode && x(), t.params.mousewheel.enabled && b();
      }),
        a('destroy', () => {
          t.params.cssMode && b(), t.mousewheel.enabled && x();
        }),
        Object.assign(t.mousewheel, { enable: b, disable: x });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a, emit: i } = e;
      function r(e) {
        let s;
        return e && ((s = d(e)), t.params.uniqueNavElements && 'string' == typeof e && s.length > 1 && 1 === t.$el.find(e).length && (s = t.$el.find(e))), s;
      }
      function n(e, s) {
        const a = t.params.navigation;
        e &&
          e.length > 0 &&
          (e[s ? 'addClass' : 'removeClass'](a.disabledClass),
          e[0] && 'BUTTON' === e[0].tagName && (e[0].disabled = s),
          t.params.watchOverflow && t.enabled && e[t.isLocked ? 'addClass' : 'removeClass'](a.lockClass));
      }
      function l() {
        if (t.params.loop) return;
        const { $nextEl: e, $prevEl: s } = t.navigation;
        n(s, t.isBeginning && !t.params.rewind), n(e, t.isEnd && !t.params.rewind);
      }
      function o(e) {
        e.preventDefault(), (!t.isBeginning || t.params.loop || t.params.rewind) && (t.slidePrev(), i('navigationPrev'));
      }
      function c(e) {
        e.preventDefault(), (!t.isEnd || t.params.loop || t.params.rewind) && (t.slideNext(), i('navigationNext'));
      }
      function p() {
        const e = t.params.navigation;
        if (((t.params.navigation = F(t, t.originalParams.navigation, t.params.navigation, { nextEl: 'swiper-button-next', prevEl: 'swiper-button-prev' })), !e.nextEl && !e.prevEl)) return;
        const s = r(e.nextEl),
          a = r(e.prevEl);
        s && s.length > 0 && s.on('click', c),
          a && a.length > 0 && a.on('click', o),
          Object.assign(t.navigation, { $nextEl: s, nextEl: s && s[0], $prevEl: a, prevEl: a && a[0] }),
          t.enabled || (s && s.addClass(e.lockClass), a && a.addClass(e.lockClass));
      }
      function u() {
        const { $nextEl: e, $prevEl: s } = t.navigation;
        e && e.length && (e.off('click', c), e.removeClass(t.params.navigation.disabledClass)), s && s.length && (s.off('click', o), s.removeClass(t.params.navigation.disabledClass));
      }
      s({
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: !1,
          disabledClass: 'swiper-button-disabled',
          hiddenClass: 'swiper-button-hidden',
          lockClass: 'swiper-button-lock',
          navigationDisabledClass: 'swiper-navigation-disabled'
        }
      }),
        (t.navigation = { nextEl: null, $nextEl: null, prevEl: null, $prevEl: null }),
        a('init', () => {
          !1 === t.params.navigation.enabled ? h() : (p(), l());
        }),
        a('toEdge fromEdge lock unlock', () => {
          l();
        }),
        a('destroy', () => {
          u();
        }),
        a('enable disable', () => {
          const { $nextEl: e, $prevEl: s } = t.navigation;
          e && e[t.enabled ? 'removeClass' : 'addClass'](t.params.navigation.lockClass), s && s[t.enabled ? 'removeClass' : 'addClass'](t.params.navigation.lockClass);
        }),
        a('click', (e, s) => {
          const { $nextEl: a, $prevEl: r } = t.navigation,
            n = s.target;
          if (t.params.navigation.hideOnClick && !d(n).is(r) && !d(n).is(a)) {
            if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === n || t.pagination.el.contains(n))) return;
            let e;
            a ? (e = a.hasClass(t.params.navigation.hiddenClass)) : r && (e = r.hasClass(t.params.navigation.hiddenClass)),
              i(!0 === e ? 'navigationShow' : 'navigationHide'),
              a && a.toggleClass(t.params.navigation.hiddenClass),
              r && r.toggleClass(t.params.navigation.hiddenClass);
          }
        });
      const h = () => {
        t.$el.addClass(t.params.navigation.navigationDisabledClass), u();
      };
      Object.assign(t.navigation, {
        enable: () => {
          t.$el.removeClass(t.params.navigation.navigationDisabledClass), p(), l();
        },
        disable: h,
        update: l,
        init: p,
        destroy: u
      });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a, emit: i } = e;
      const r = 'swiper-pagination';
      let n;
      s({
        pagination: {
          el: null,
          bulletElement: 'span',
          clickable: !1,
          hideOnClick: !1,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: !1,
          type: 'bullets',
          dynamicBullets: !1,
          dynamicMainBullets: 1,
          formatFractionCurrent: (e) => e,
          formatFractionTotal: (e) => e,
          bulletClass: `${r}-bullet`,
          bulletActiveClass: `${r}-bullet-active`,
          modifierClass: `${r}-`,
          currentClass: `${r}-current`,
          totalClass: `${r}-total`,
          hiddenClass: `${r}-hidden`,
          progressbarFillClass: `${r}-progressbar-fill`,
          progressbarOppositeClass: `${r}-progressbar-opposite`,
          clickableClass: `${r}-clickable`,
          lockClass: `${r}-lock`,
          horizontalClass: `${r}-horizontal`,
          verticalClass: `${r}-vertical`,
          paginationDisabledClass: `${r}-disabled`
        }
      }),
        (t.pagination = { el: null, $el: null, bullets: [] });
      let l = 0;
      function o() {
        return !t.params.pagination.el || !t.pagination.el || !t.pagination.$el || 0 === t.pagination.$el.length;
      }
      function c(e, s) {
        const { bulletActiveClass: a } = t.params.pagination;
        e[s]().addClass(`${a}-${s}`)[s]().addClass(`${a}-${s}-${s}`);
      }
      function p() {
        const e = t.rtl,
          s = t.params.pagination;
        if (o()) return;
        const a = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
          r = t.pagination.$el;
        let p;
        const u = t.params.loop ? Math.ceil((a - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
        if (
          (t.params.loop
            ? ((p = Math.ceil((t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup)),
              p > a - 1 - 2 * t.loopedSlides && (p -= a - 2 * t.loopedSlides),
              p > u - 1 && (p -= u),
              p < 0 && 'bullets' !== t.params.paginationType && (p = u + p))
            : (p = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0),
          'bullets' === s.type && t.pagination.bullets && t.pagination.bullets.length > 0)
        ) {
          const a = t.pagination.bullets;
          let i, o, u;
          if (
            (s.dynamicBullets &&
              ((n = a.eq(0)[t.isHorizontal() ? 'outerWidth' : 'outerHeight'](!0)),
              r.css(t.isHorizontal() ? 'width' : 'height', n * (s.dynamicMainBullets + 4) + 'px'),
              s.dynamicMainBullets > 1 &&
                void 0 !== t.previousIndex &&
                ((l += p - (t.previousIndex - t.loopedSlides || 0)), l > s.dynamicMainBullets - 1 ? (l = s.dynamicMainBullets - 1) : l < 0 && (l = 0)),
              (i = Math.max(p - l, 0)),
              (o = i + (Math.min(a.length, s.dynamicMainBullets) - 1)),
              (u = (o + i) / 2)),
            a.removeClass(['', '-next', '-next-next', '-prev', '-prev-prev', '-main'].map((e) => `${s.bulletActiveClass}${e}`).join(' ')),
            r.length > 1)
          )
            a.each((e) => {
              const t = d(e),
                a = t.index();
              a === p && t.addClass(s.bulletActiveClass), s.dynamicBullets && (a >= i && a <= o && t.addClass(`${s.bulletActiveClass}-main`), a === i && c(t, 'prev'), a === o && c(t, 'next'));
            });
          else {
            const e = a.eq(p),
              r = e.index();
            if ((e.addClass(s.bulletActiveClass), s.dynamicBullets)) {
              const e = a.eq(i),
                n = a.eq(o);
              for (let e = i; e <= o; e += 1) a.eq(e).addClass(`${s.bulletActiveClass}-main`);
              if (t.params.loop)
                if (r >= a.length) {
                  for (let e = s.dynamicMainBullets; e >= 0; e -= 1) a.eq(a.length - e).addClass(`${s.bulletActiveClass}-main`);
                  a.eq(a.length - s.dynamicMainBullets - 1).addClass(`${s.bulletActiveClass}-prev`);
                } else c(e, 'prev'), c(n, 'next');
              else c(e, 'prev'), c(n, 'next');
            }
          }
          if (s.dynamicBullets) {
            const i = Math.min(a.length, s.dynamicMainBullets + 4),
              r = (n * i - n) / 2 - u * n,
              l = e ? 'right' : 'left';
            a.css(t.isHorizontal() ? l : 'top', `${r}px`);
          }
        }
        if (('fraction' === s.type && (r.find(U(s.currentClass)).text(s.formatFractionCurrent(p + 1)), r.find(U(s.totalClass)).text(s.formatFractionTotal(u))), 'progressbar' === s.type)) {
          let e;
          e = s.progressbarOpposite ? (t.isHorizontal() ? 'vertical' : 'horizontal') : t.isHorizontal() ? 'horizontal' : 'vertical';
          const a = (p + 1) / u;
          let i = 1,
            n = 1;
          'horizontal' === e ? (i = a) : (n = a), r.find(U(s.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${i}) scaleY(${n})`).transition(t.params.speed);
        }
        'custom' === s.type && s.renderCustom ? (r.html(s.renderCustom(t, p + 1, u)), i('paginationRender', r[0])) : i('paginationUpdate', r[0]),
          t.params.watchOverflow && t.enabled && r[t.isLocked ? 'addClass' : 'removeClass'](s.lockClass);
      }
      function u() {
        const e = t.params.pagination;
        if (o()) return;
        const s = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
          a = t.pagination.$el;
        let r = '';
        if ('bullets' === e.type) {
          let i = t.params.loop ? Math.ceil((s - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
          t.params.freeMode && t.params.freeMode.enabled && !t.params.loop && i > s && (i = s);
          for (let s = 0; s < i; s += 1) e.renderBullet ? (r += e.renderBullet.call(t, s, e.bulletClass)) : (r += `<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`);
          a.html(r), (t.pagination.bullets = a.find(U(e.bulletClass)));
        }
        'fraction' === e.type &&
          ((r = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`), a.html(r)),
          'progressbar' === e.type && ((r = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`), a.html(r)),
          'custom' !== e.type && i('paginationRender', t.pagination.$el[0]);
      }
      function h() {
        t.params.pagination = F(t, t.originalParams.pagination, t.params.pagination, { el: 'swiper-pagination' });
        const e = t.params.pagination;
        if (!e.el) return;
        let s = d(e.el);
        0 !== s.length &&
          (t.params.uniqueNavElements && 'string' == typeof e.el && s.length > 1 && ((s = t.$el.find(e.el)), s.length > 1 && (s = s.filter((e) => d(e).parents('.swiper')[0] === t.el))),
          'bullets' === e.type && e.clickable && s.addClass(e.clickableClass),
          s.addClass(e.modifierClass + e.type),
          s.addClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
          'bullets' === e.type && e.dynamicBullets && (s.addClass(`${e.modifierClass}${e.type}-dynamic`), (l = 0), e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
          'progressbar' === e.type && e.progressbarOpposite && s.addClass(e.progressbarOppositeClass),
          e.clickable &&
            s.on('click', U(e.bulletClass), function (e) {
              e.preventDefault();
              let s = d(this).index() * t.params.slidesPerGroup;
              t.params.loop && (s += t.loopedSlides), t.slideTo(s);
            }),
          Object.assign(t.pagination, { $el: s, el: s[0] }),
          t.enabled || s.addClass(e.lockClass));
      }
      function m() {
        const e = t.params.pagination;
        if (o()) return;
        const s = t.pagination.$el;
        s.removeClass(e.hiddenClass),
          s.removeClass(e.modifierClass + e.type),
          s.removeClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
          t.pagination.bullets && t.pagination.bullets.removeClass && t.pagination.bullets.removeClass(e.bulletActiveClass),
          e.clickable && s.off('click', U(e.bulletClass));
      }
      a('init', () => {
        !1 === t.params.pagination.enabled ? f() : (h(), u(), p());
      }),
        a('activeIndexChange', () => {
          (t.params.loop || void 0 === t.snapIndex) && p();
        }),
        a('snapIndexChange', () => {
          t.params.loop || p();
        }),
        a('slidesLengthChange', () => {
          t.params.loop && (u(), p());
        }),
        a('snapGridLengthChange', () => {
          t.params.loop || (u(), p());
        }),
        a('destroy', () => {
          m();
        }),
        a('enable disable', () => {
          const { $el: e } = t.pagination;
          e && e[t.enabled ? 'removeClass' : 'addClass'](t.params.pagination.lockClass);
        }),
        a('lock unlock', () => {
          p();
        }),
        a('click', (e, s) => {
          const a = s.target,
            { $el: r } = t.pagination;
          if (t.params.pagination.el && t.params.pagination.hideOnClick && r && r.length > 0 && !d(a).hasClass(t.params.pagination.bulletClass)) {
            if (t.navigation && ((t.navigation.nextEl && a === t.navigation.nextEl) || (t.navigation.prevEl && a === t.navigation.prevEl))) return;
            const e = r.hasClass(t.params.pagination.hiddenClass);
            i(!0 === e ? 'paginationShow' : 'paginationHide'), r.toggleClass(t.params.pagination.hiddenClass);
          }
        });
      const f = () => {
        t.$el.addClass(t.params.pagination.paginationDisabledClass), t.pagination.$el && t.pagination.$el.addClass(t.params.pagination.paginationDisabledClass), m();
      };
      Object.assign(t.pagination, {
        enable: () => {
          t.$el.removeClass(t.params.pagination.paginationDisabledClass), t.pagination.$el && t.pagination.$el.removeClass(t.params.pagination.paginationDisabledClass), h(), u(), p();
        },
        disable: f,
        render: u,
        update: p,
        init: h,
        destroy: m
      });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: i, emit: r } = e;
      const n = a();
      let l,
        o,
        c,
        u,
        h = !1,
        m = null,
        f = null;
      function g() {
        if (!t.params.scrollbar.el || !t.scrollbar.el) return;
        const { scrollbar: e, rtlTranslate: s, progress: a } = t,
          { $dragEl: i, $el: r } = e,
          n = t.params.scrollbar;
        let l = o,
          d = (c - o) * a;
        s ? ((d = -d), d > 0 ? ((l = o - d), (d = 0)) : -d + o > c && (l = c + d)) : d < 0 ? ((l = o + d), (d = 0)) : d + o > c && (l = c - d),
          t.isHorizontal() ? (i.transform(`translate3d(${d}px, 0, 0)`), (i[0].style.width = `${l}px`)) : (i.transform(`translate3d(0px, ${d}px, 0)`), (i[0].style.height = `${l}px`)),
          n.hide &&
            (clearTimeout(m),
            (r[0].style.opacity = 1),
            (m = setTimeout(() => {
              (r[0].style.opacity = 0), r.transition(400);
            }, 1e3)));
      }
      function v() {
        if (!t.params.scrollbar.el || !t.scrollbar.el) return;
        const { scrollbar: e } = t,
          { $dragEl: s, $el: a } = e;
        (s[0].style.width = ''),
          (s[0].style.height = ''),
          (c = t.isHorizontal() ? a[0].offsetWidth : a[0].offsetHeight),
          (u = t.size / (t.virtualSize + t.params.slidesOffsetBefore - (t.params.centeredSlides ? t.snapGrid[0] : 0))),
          (o = 'auto' === t.params.scrollbar.dragSize ? c * u : parseInt(t.params.scrollbar.dragSize, 10)),
          t.isHorizontal() ? (s[0].style.width = `${o}px`) : (s[0].style.height = `${o}px`),
          (a[0].style.display = u >= 1 ? 'none' : ''),
          t.params.scrollbar.hide && (a[0].style.opacity = 0),
          t.params.watchOverflow && t.enabled && e.$el[t.isLocked ? 'addClass' : 'removeClass'](t.params.scrollbar.lockClass);
      }
      function w(e) {
        return t.isHorizontal()
          ? 'touchstart' === e.type || 'touchmove' === e.type
            ? e.targetTouches[0].clientX
            : e.clientX
          : 'touchstart' === e.type || 'touchmove' === e.type
          ? e.targetTouches[0].clientY
          : e.clientY;
      }
      function b(e) {
        const { scrollbar: s, rtlTranslate: a } = t,
          { $el: i } = s;
        let r;
        (r = (w(e) - i.offset()[t.isHorizontal() ? 'left' : 'top'] - (null !== l ? l : o / 2)) / (c - o)), (r = Math.max(Math.min(r, 1), 0)), a && (r = 1 - r);
        const n = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * r;
        t.updateProgress(n), t.setTranslate(n), t.updateActiveIndex(), t.updateSlidesClasses();
      }
      function x(e) {
        const s = t.params.scrollbar,
          { scrollbar: a, $wrapperEl: i } = t,
          { $el: n, $dragEl: o } = a;
        (h = !0),
          (l = e.target === o[0] || e.target === o ? w(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? 'left' : 'top'] : null),
          e.preventDefault(),
          e.stopPropagation(),
          i.transition(100),
          o.transition(100),
          b(e),
          clearTimeout(f),
          n.transition(0),
          s.hide && n.css('opacity', 1),
          t.params.cssMode && t.$wrapperEl.css('scroll-snap-type', 'none'),
          r('scrollbarDragStart', e);
      }
      function y(e) {
        const { scrollbar: s, $wrapperEl: a } = t,
          { $el: i, $dragEl: n } = s;
        h && (e.preventDefault ? e.preventDefault() : (e.returnValue = !1), b(e), a.transition(0), i.transition(0), n.transition(0), r('scrollbarDragMove', e));
      }
      function E(e) {
        const s = t.params.scrollbar,
          { scrollbar: a, $wrapperEl: i } = t,
          { $el: n } = a;
        h &&
          ((h = !1),
          t.params.cssMode && (t.$wrapperEl.css('scroll-snap-type', ''), i.transition('')),
          s.hide &&
            (clearTimeout(f),
            (f = p(() => {
              n.css('opacity', 0), n.transition(400);
            }, 1e3))),
          r('scrollbarDragEnd', e),
          s.snapOnRelease && t.slideToClosest());
      }
      function C(e) {
        const { scrollbar: s, touchEventsTouch: a, touchEventsDesktop: i, params: r, support: l } = t,
          o = s.$el;
        if (!o) return;
        const d = o[0],
          c = !(!l.passiveListener || !r.passiveListeners) && { passive: !1, capture: !1 },
          p = !(!l.passiveListener || !r.passiveListeners) && { passive: !0, capture: !1 };
        if (!d) return;
        const u = 'on' === e ? 'addEventListener' : 'removeEventListener';
        l.touch ? (d[u](a.start, x, c), d[u](a.move, y, c), d[u](a.end, E, p)) : (d[u](i.start, x, c), n[u](i.move, y, c), n[u](i.end, E, p));
      }
      function T() {
        const { scrollbar: e, $el: s } = t;
        t.params.scrollbar = F(t, t.originalParams.scrollbar, t.params.scrollbar, { el: 'swiper-scrollbar' });
        const a = t.params.scrollbar;
        if (!a.el) return;
        let i = d(a.el);
        t.params.uniqueNavElements && 'string' == typeof a.el && i.length > 1 && 1 === s.find(a.el).length && (i = s.find(a.el)), i.addClass(t.isHorizontal() ? a.horizontalClass : a.verticalClass);
        let r = i.find(`.${t.params.scrollbar.dragClass}`);
        0 === r.length && ((r = d(`<div class="${t.params.scrollbar.dragClass}"></div>`)), i.append(r)),
          Object.assign(e, { $el: i, el: i[0], $dragEl: r, dragEl: r[0] }),
          a.draggable && t.params.scrollbar.el && t.scrollbar.el && C('on'),
          i && i[t.enabled ? 'removeClass' : 'addClass'](t.params.scrollbar.lockClass);
      }
      function $() {
        const e = t.params.scrollbar,
          s = t.scrollbar.$el;
        s && s.removeClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass), t.params.scrollbar.el && t.scrollbar.el && C('off');
      }
      s({
        scrollbar: {
          el: null,
          dragSize: 'auto',
          hide: !1,
          draggable: !1,
          snapOnRelease: !0,
          lockClass: 'swiper-scrollbar-lock',
          dragClass: 'swiper-scrollbar-drag',
          scrollbarDisabledClass: 'swiper-scrollbar-disabled',
          horizontalClass: 'swiper-scrollbar-horizontal',
          verticalClass: 'swiper-scrollbar-vertical'
        }
      }),
        (t.scrollbar = { el: null, dragEl: null, $el: null, $dragEl: null }),
        i('init', () => {
          !1 === t.params.scrollbar.enabled ? S() : (T(), v(), g());
        }),
        i('update resize observerUpdate lock unlock', () => {
          v();
        }),
        i('setTranslate', () => {
          g();
        }),
        i('setTransition', (e, s) => {
          !(function (e) {
            t.params.scrollbar.el && t.scrollbar.el && t.scrollbar.$dragEl.transition(e);
          })(s);
        }),
        i('enable disable', () => {
          const { $el: e } = t.scrollbar;
          e && e[t.enabled ? 'removeClass' : 'addClass'](t.params.scrollbar.lockClass);
        }),
        i('destroy', () => {
          $();
        });
      const S = () => {
        t.$el.addClass(t.params.scrollbar.scrollbarDisabledClass), t.scrollbar.$el && t.scrollbar.$el.addClass(t.params.scrollbar.scrollbarDisabledClass), $();
      };
      Object.assign(t.scrollbar, {
        enable: () => {
          t.$el.removeClass(t.params.scrollbar.scrollbarDisabledClass), t.scrollbar.$el && t.scrollbar.$el.removeClass(t.params.scrollbar.scrollbarDisabledClass), T(), v(), g();
        },
        disable: S,
        updateSize: v,
        setTranslate: g,
        init: T,
        destroy: $
      });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      s({ parallax: { enabled: !1 } });
      const i = (e, s) => {
          const { rtl: a } = t,
            i = d(e),
            r = a ? -1 : 1,
            n = i.attr('data-swiper-parallax') || '0';
          let l = i.attr('data-swiper-parallax-x'),
            o = i.attr('data-swiper-parallax-y');
          const c = i.attr('data-swiper-parallax-scale'),
            p = i.attr('data-swiper-parallax-opacity');
          if (
            (l || o ? ((l = l || '0'), (o = o || '0')) : t.isHorizontal() ? ((l = n), (o = '0')) : ((o = n), (l = '0')),
            (l = l.indexOf('%') >= 0 ? parseInt(l, 10) * s * r + '%' : l * s * r + 'px'),
            (o = o.indexOf('%') >= 0 ? parseInt(o, 10) * s + '%' : o * s + 'px'),
            null != p)
          ) {
            const e = p - (p - 1) * (1 - Math.abs(s));
            i[0].style.opacity = e;
          }
          if (null == c) i.transform(`translate3d(${l}, ${o}, 0px)`);
          else {
            const e = c - (c - 1) * (1 - Math.abs(s));
            i.transform(`translate3d(${l}, ${o}, 0px) scale(${e})`);
          }
        },
        r = () => {
          const { $el: e, slides: s, progress: a, snapGrid: r } = t;
          e.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each((e) => {
            i(e, a);
          }),
            s.each((e, s) => {
              let n = e.progress;
              t.params.slidesPerGroup > 1 && 'auto' !== t.params.slidesPerView && (n += Math.ceil(s / 2) - a * (r.length - 1)),
                (n = Math.min(Math.max(n, -1), 1)),
                d(e)
                  .find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]')
                  .each((e) => {
                    i(e, n);
                  });
            });
        };
      a('beforeInit', () => {
        t.params.parallax.enabled && ((t.params.watchSlidesProgress = !0), (t.originalParams.watchSlidesProgress = !0));
      }),
        a('init', () => {
          t.params.parallax.enabled && r();
        }),
        a('setTranslate', () => {
          t.params.parallax.enabled && r();
        }),
        a('setTransition', (e, s) => {
          t.params.parallax.enabled &&
            (function (e) {
              void 0 === e && (e = t.params.speed);
              const { $el: s } = t;
              s.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each((t) => {
                const s = d(t);
                let a = parseInt(s.attr('data-swiper-parallax-duration'), 10) || e;
                0 === e && (a = 0), s.transition(a);
              });
            })(s);
        });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a, emit: i } = e;
      const n = r();
      s({ zoom: { enabled: !1, maxRatio: 3, minRatio: 1, toggle: !0, containerClass: 'swiper-zoom-container', zoomedSlideClass: 'swiper-slide-zoomed' } }), (t.zoom = { enabled: !1 });
      let l,
        o,
        c,
        p = 1,
        u = !1;
      const m = { $slideEl: void 0, slideWidth: void 0, slideHeight: void 0, $imageEl: void 0, $imageWrapEl: void 0, maxRatio: 3 },
        f = {
          isTouched: void 0,
          isMoved: void 0,
          currentX: void 0,
          currentY: void 0,
          minX: void 0,
          minY: void 0,
          maxX: void 0,
          maxY: void 0,
          width: void 0,
          height: void 0,
          startX: void 0,
          startY: void 0,
          touchesStart: {},
          touchesCurrent: {}
        },
        g = { x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0 };
      let v = 1;
      function w(e) {
        if (e.targetTouches.length < 2) return 1;
        const t = e.targetTouches[0].pageX,
          s = e.targetTouches[0].pageY,
          a = e.targetTouches[1].pageX,
          i = e.targetTouches[1].pageY;
        return Math.sqrt((a - t) ** 2 + (i - s) ** 2);
      }
      function b(e) {
        const s = t.support,
          a = t.params.zoom;
        if (((o = !1), (c = !1), !s.gestures)) {
          if ('touchstart' !== e.type || ('touchstart' === e.type && e.targetTouches.length < 2)) return;
          (o = !0), (m.scaleStart = w(e));
        }
        (m.$slideEl && m.$slideEl.length) ||
        ((m.$slideEl = d(e.target).closest(`.${t.params.slideClass}`)),
        0 === m.$slideEl.length && (m.$slideEl = t.slides.eq(t.activeIndex)),
        (m.$imageEl = m.$slideEl.find(`.${a.containerClass}`).eq(0).find('picture, img, svg, canvas, .swiper-zoom-target').eq(0)),
        (m.$imageWrapEl = m.$imageEl.parent(`.${a.containerClass}`)),
        (m.maxRatio = m.$imageWrapEl.attr('data-swiper-zoom') || a.maxRatio),
        0 !== m.$imageWrapEl.length)
          ? (m.$imageEl && m.$imageEl.transition(0), (u = !0))
          : (m.$imageEl = void 0);
      }
      function x(e) {
        const s = t.support,
          a = t.params.zoom,
          i = t.zoom;
        if (!s.gestures) {
          if ('touchmove' !== e.type || ('touchmove' === e.type && e.targetTouches.length < 2)) return;
          (c = !0), (m.scaleMove = w(e));
        }
        m.$imageEl && 0 !== m.$imageEl.length
          ? (s.gestures ? (i.scale = e.scale * p) : (i.scale = (m.scaleMove / m.scaleStart) * p),
            i.scale > m.maxRatio && (i.scale = m.maxRatio - 1 + (i.scale - m.maxRatio + 1) ** 0.5),
            i.scale < a.minRatio && (i.scale = a.minRatio + 1 - (a.minRatio - i.scale + 1) ** 0.5),
            m.$imageEl.transform(`translate3d(0,0,0) scale(${i.scale})`))
          : 'gesturechange' === e.type && b(e);
      }
      function y(e) {
        const s = t.device,
          a = t.support,
          i = t.params.zoom,
          r = t.zoom;
        if (!a.gestures) {
          if (!o || !c) return;
          if ('touchend' !== e.type || ('touchend' === e.type && e.changedTouches.length < 2 && !s.android)) return;
          (o = !1), (c = !1);
        }
        m.$imageEl &&
          0 !== m.$imageEl.length &&
          ((r.scale = Math.max(Math.min(r.scale, m.maxRatio), i.minRatio)),
          m.$imageEl.transition(t.params.speed).transform(`translate3d(0,0,0) scale(${r.scale})`),
          (p = r.scale),
          (u = !1),
          1 === r.scale && (m.$slideEl = void 0));
      }
      function E(e) {
        const s = t.zoom;
        if (!m.$imageEl || 0 === m.$imageEl.length) return;
        if (((t.allowClick = !1), !f.isTouched || !m.$slideEl)) return;
        f.isMoved ||
          ((f.width = m.$imageEl[0].offsetWidth),
          (f.height = m.$imageEl[0].offsetHeight),
          (f.startX = h(m.$imageWrapEl[0], 'x') || 0),
          (f.startY = h(m.$imageWrapEl[0], 'y') || 0),
          (m.slideWidth = m.$slideEl[0].offsetWidth),
          (m.slideHeight = m.$slideEl[0].offsetHeight),
          m.$imageWrapEl.transition(0));
        const a = f.width * s.scale,
          i = f.height * s.scale;
        if (!(a < m.slideWidth && i < m.slideHeight)) {
          if (
            ((f.minX = Math.min(m.slideWidth / 2 - a / 2, 0)),
            (f.maxX = -f.minX),
            (f.minY = Math.min(m.slideHeight / 2 - i / 2, 0)),
            (f.maxY = -f.minY),
            (f.touchesCurrent.x = 'touchmove' === e.type ? e.targetTouches[0].pageX : e.pageX),
            (f.touchesCurrent.y = 'touchmove' === e.type ? e.targetTouches[0].pageY : e.pageY),
            !f.isMoved && !u)
          ) {
            if (
              t.isHorizontal() &&
              ((Math.floor(f.minX) === Math.floor(f.startX) && f.touchesCurrent.x < f.touchesStart.x) || (Math.floor(f.maxX) === Math.floor(f.startX) && f.touchesCurrent.x > f.touchesStart.x))
            )
              return void (f.isTouched = !1);
            if (
              !t.isHorizontal() &&
              ((Math.floor(f.minY) === Math.floor(f.startY) && f.touchesCurrent.y < f.touchesStart.y) || (Math.floor(f.maxY) === Math.floor(f.startY) && f.touchesCurrent.y > f.touchesStart.y))
            )
              return void (f.isTouched = !1);
          }
          e.cancelable && e.preventDefault(),
            e.stopPropagation(),
            (f.isMoved = !0),
            (f.currentX = f.touchesCurrent.x - f.touchesStart.x + f.startX),
            (f.currentY = f.touchesCurrent.y - f.touchesStart.y + f.startY),
            f.currentX < f.minX && (f.currentX = f.minX + 1 - (f.minX - f.currentX + 1) ** 0.8),
            f.currentX > f.maxX && (f.currentX = f.maxX - 1 + (f.currentX - f.maxX + 1) ** 0.8),
            f.currentY < f.minY && (f.currentY = f.minY + 1 - (f.minY - f.currentY + 1) ** 0.8),
            f.currentY > f.maxY && (f.currentY = f.maxY - 1 + (f.currentY - f.maxY + 1) ** 0.8),
            g.prevPositionX || (g.prevPositionX = f.touchesCurrent.x),
            g.prevPositionY || (g.prevPositionY = f.touchesCurrent.y),
            g.prevTime || (g.prevTime = Date.now()),
            (g.x = (f.touchesCurrent.x - g.prevPositionX) / (Date.now() - g.prevTime) / 2),
            (g.y = (f.touchesCurrent.y - g.prevPositionY) / (Date.now() - g.prevTime) / 2),
            Math.abs(f.touchesCurrent.x - g.prevPositionX) < 2 && (g.x = 0),
            Math.abs(f.touchesCurrent.y - g.prevPositionY) < 2 && (g.y = 0),
            (g.prevPositionX = f.touchesCurrent.x),
            (g.prevPositionY = f.touchesCurrent.y),
            (g.prevTime = Date.now()),
            m.$imageWrapEl.transform(`translate3d(${f.currentX}px, ${f.currentY}px,0)`);
        }
      }
      function C() {
        const e = t.zoom;
        m.$slideEl &&
          t.previousIndex !== t.activeIndex &&
          (m.$imageEl && m.$imageEl.transform('translate3d(0,0,0) scale(1)'),
          m.$imageWrapEl && m.$imageWrapEl.transform('translate3d(0,0,0)'),
          (e.scale = 1),
          (p = 1),
          (m.$slideEl = void 0),
          (m.$imageEl = void 0),
          (m.$imageWrapEl = void 0));
      }
      function T(e) {
        const s = t.zoom,
          a = t.params.zoom;
        if (
          (m.$slideEl ||
            (e && e.target && (m.$slideEl = d(e.target).closest(`.${t.params.slideClass}`)),
            m.$slideEl ||
              (t.params.virtual && t.params.virtual.enabled && t.virtual ? (m.$slideEl = t.$wrapperEl.children(`.${t.params.slideActiveClass}`)) : (m.$slideEl = t.slides.eq(t.activeIndex))),
            (m.$imageEl = m.$slideEl.find(`.${a.containerClass}`).eq(0).find('picture, img, svg, canvas, .swiper-zoom-target').eq(0)),
            (m.$imageWrapEl = m.$imageEl.parent(`.${a.containerClass}`))),
          !m.$imageEl || 0 === m.$imageEl.length || !m.$imageWrapEl || 0 === m.$imageWrapEl.length)
        )
          return;
        let i, r, l, o, c, u, h, g, v, w, b, x, y, E, C, T, $, S;
        t.params.cssMode && ((t.wrapperEl.style.overflow = 'hidden'), (t.wrapperEl.style.touchAction = 'none')),
          m.$slideEl.addClass(`${a.zoomedSlideClass}`),
          void 0 === f.touchesStart.x && e
            ? ((i = 'touchend' === e.type ? e.changedTouches[0].pageX : e.pageX), (r = 'touchend' === e.type ? e.changedTouches[0].pageY : e.pageY))
            : ((i = f.touchesStart.x), (r = f.touchesStart.y)),
          (s.scale = m.$imageWrapEl.attr('data-swiper-zoom') || a.maxRatio),
          (p = m.$imageWrapEl.attr('data-swiper-zoom') || a.maxRatio),
          e
            ? (($ = m.$slideEl[0].offsetWidth),
              (S = m.$slideEl[0].offsetHeight),
              (l = m.$slideEl.offset().left + n.scrollX),
              (o = m.$slideEl.offset().top + n.scrollY),
              (c = l + $ / 2 - i),
              (u = o + S / 2 - r),
              (v = m.$imageEl[0].offsetWidth),
              (w = m.$imageEl[0].offsetHeight),
              (b = v * s.scale),
              (x = w * s.scale),
              (y = Math.min($ / 2 - b / 2, 0)),
              (E = Math.min(S / 2 - x / 2, 0)),
              (C = -y),
              (T = -E),
              (h = c * s.scale),
              (g = u * s.scale),
              h < y && (h = y),
              h > C && (h = C),
              g < E && (g = E),
              g > T && (g = T))
            : ((h = 0), (g = 0)),
          m.$imageWrapEl.transition(300).transform(`translate3d(${h}px, ${g}px,0)`),
          m.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${s.scale})`);
      }
      function $() {
        const e = t.zoom,
          s = t.params.zoom;
        m.$slideEl ||
          (t.params.virtual && t.params.virtual.enabled && t.virtual ? (m.$slideEl = t.$wrapperEl.children(`.${t.params.slideActiveClass}`)) : (m.$slideEl = t.slides.eq(t.activeIndex)),
          (m.$imageEl = m.$slideEl.find(`.${s.containerClass}`).eq(0).find('picture, img, svg, canvas, .swiper-zoom-target').eq(0)),
          (m.$imageWrapEl = m.$imageEl.parent(`.${s.containerClass}`))),
          m.$imageEl &&
            0 !== m.$imageEl.length &&
            m.$imageWrapEl &&
            0 !== m.$imageWrapEl.length &&
            (t.params.cssMode && ((t.wrapperEl.style.overflow = ''), (t.wrapperEl.style.touchAction = '')),
            (e.scale = 1),
            (p = 1),
            m.$imageWrapEl.transition(300).transform('translate3d(0,0,0)'),
            m.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)'),
            m.$slideEl.removeClass(`${s.zoomedSlideClass}`),
            (m.$slideEl = void 0));
      }
      function S(e) {
        const s = t.zoom;
        s.scale && 1 !== s.scale ? $() : T(e);
      }
      function M() {
        const e = t.support;
        return {
          passiveListener: !('touchstart' !== t.touchEvents.start || !e.passiveListener || !t.params.passiveListeners) && { passive: !0, capture: !1 },
          activeListenerWithCapture: !e.passiveListener || { passive: !1, capture: !0 }
        };
      }
      function P() {
        return `.${t.params.slideClass}`;
      }
      function k(e) {
        const { passiveListener: s } = M(),
          a = P();
        t.$wrapperEl[e]('gesturestart', a, b, s), t.$wrapperEl[e]('gesturechange', a, x, s), t.$wrapperEl[e]('gestureend', a, y, s);
      }
      function z() {
        l || ((l = !0), k('on'));
      }
      function L() {
        l && ((l = !1), k('off'));
      }
      function O() {
        const e = t.zoom;
        if (e.enabled) return;
        e.enabled = !0;
        const s = t.support,
          { passiveListener: a, activeListenerWithCapture: i } = M(),
          r = P();
        s.gestures
          ? (t.$wrapperEl.on(t.touchEvents.start, z, a), t.$wrapperEl.on(t.touchEvents.end, L, a))
          : 'touchstart' === t.touchEvents.start &&
            (t.$wrapperEl.on(t.touchEvents.start, r, b, a),
            t.$wrapperEl.on(t.touchEvents.move, r, x, i),
            t.$wrapperEl.on(t.touchEvents.end, r, y, a),
            t.touchEvents.cancel && t.$wrapperEl.on(t.touchEvents.cancel, r, y, a)),
          t.$wrapperEl.on(t.touchEvents.move, `.${t.params.zoom.containerClass}`, E, i);
      }
      function I() {
        const e = t.zoom;
        if (!e.enabled) return;
        const s = t.support;
        e.enabled = !1;
        const { passiveListener: a, activeListenerWithCapture: i } = M(),
          r = P();
        s.gestures
          ? (t.$wrapperEl.off(t.touchEvents.start, z, a), t.$wrapperEl.off(t.touchEvents.end, L, a))
          : 'touchstart' === t.touchEvents.start &&
            (t.$wrapperEl.off(t.touchEvents.start, r, b, a),
            t.$wrapperEl.off(t.touchEvents.move, r, x, i),
            t.$wrapperEl.off(t.touchEvents.end, r, y, a),
            t.touchEvents.cancel && t.$wrapperEl.off(t.touchEvents.cancel, r, y, a)),
          t.$wrapperEl.off(t.touchEvents.move, `.${t.params.zoom.containerClass}`, E, i);
      }
      Object.defineProperty(t.zoom, 'scale', {
        get: () => v,
        set(e) {
          if (v !== e) {
            const t = m.$imageEl ? m.$imageEl[0] : void 0,
              s = m.$slideEl ? m.$slideEl[0] : void 0;
            i('zoomChange', e, t, s);
          }
          v = e;
        }
      }),
        a('init', () => {
          t.params.zoom.enabled && O();
        }),
        a('destroy', () => {
          I();
        }),
        a('touchStart', (e, s) => {
          t.zoom.enabled &&
            (function (e) {
              const s = t.device;
              m.$imageEl &&
                0 !== m.$imageEl.length &&
                (f.isTouched ||
                  (s.android && e.cancelable && e.preventDefault(),
                  (f.isTouched = !0),
                  (f.touchesStart.x = 'touchstart' === e.type ? e.targetTouches[0].pageX : e.pageX),
                  (f.touchesStart.y = 'touchstart' === e.type ? e.targetTouches[0].pageY : e.pageY)));
            })(s);
        }),
        a('touchEnd', (e, s) => {
          t.zoom.enabled &&
            (function () {
              const e = t.zoom;
              if (!m.$imageEl || 0 === m.$imageEl.length) return;
              if (!f.isTouched || !f.isMoved) return (f.isTouched = !1), void (f.isMoved = !1);
              (f.isTouched = !1), (f.isMoved = !1);
              let s = 300,
                a = 300;
              const i = g.x * s,
                r = f.currentX + i,
                n = g.y * a,
                l = f.currentY + n;
              0 !== g.x && (s = Math.abs((r - f.currentX) / g.x)), 0 !== g.y && (a = Math.abs((l - f.currentY) / g.y));
              const o = Math.max(s, a);
              (f.currentX = r), (f.currentY = l);
              const d = f.width * e.scale,
                c = f.height * e.scale;
              (f.minX = Math.min(m.slideWidth / 2 - d / 2, 0)),
                (f.maxX = -f.minX),
                (f.minY = Math.min(m.slideHeight / 2 - c / 2, 0)),
                (f.maxY = -f.minY),
                (f.currentX = Math.max(Math.min(f.currentX, f.maxX), f.minX)),
                (f.currentY = Math.max(Math.min(f.currentY, f.maxY), f.minY)),
                m.$imageWrapEl.transition(o).transform(`translate3d(${f.currentX}px, ${f.currentY}px,0)`);
            })();
        }),
        a('doubleTap', (e, s) => {
          !t.animating && t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && S(s);
        }),
        a('transitionEnd', () => {
          t.zoom.enabled && t.params.zoom.enabled && C();
        }),
        a('slideChange', () => {
          t.zoom.enabled && t.params.zoom.enabled && t.params.cssMode && C();
        }),
        Object.assign(t.zoom, { enable: O, disable: I, in: T, out: $, toggle: S });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a, emit: i } = e;
      s({
        lazy: {
          checkInView: !1,
          enabled: !1,
          loadPrevNext: !1,
          loadPrevNextAmount: 1,
          loadOnTransitionStart: !1,
          scrollingElement: '',
          elementClass: 'swiper-lazy',
          loadingClass: 'swiper-lazy-loading',
          loadedClass: 'swiper-lazy-loaded',
          preloaderClass: 'swiper-lazy-preloader'
        }
      }),
        (t.lazy = {});
      let n = !1,
        l = !1;
      function o(e, s) {
        void 0 === s && (s = !0);
        const a = t.params.lazy;
        if (void 0 === e) return;
        if (0 === t.slides.length) return;
        const r = t.virtual && t.params.virtual.enabled ? t.$wrapperEl.children(`.${t.params.slideClass}[data-swiper-slide-index="${e}"]`) : t.slides.eq(e),
          n = r.find(`.${a.elementClass}:not(.${a.loadedClass}):not(.${a.loadingClass})`);
        !r.hasClass(a.elementClass) || r.hasClass(a.loadedClass) || r.hasClass(a.loadingClass) || n.push(r[0]),
          0 !== n.length &&
            n.each((e) => {
              const n = d(e);
              n.addClass(a.loadingClass);
              const l = n.attr('data-background'),
                c = n.attr('data-src'),
                p = n.attr('data-srcset'),
                u = n.attr('data-sizes'),
                h = n.parent('picture');
              t.loadImage(n[0], c || l, p, u, !1, () => {
                if (null != t && t && (!t || t.params) && !t.destroyed) {
                  if (
                    (l
                      ? (n.css('background-image', `url("${l}")`), n.removeAttr('data-background'))
                      : (p && (n.attr('srcset', p), n.removeAttr('data-srcset')),
                        u && (n.attr('sizes', u), n.removeAttr('data-sizes')),
                        h.length &&
                          h.children('source').each((e) => {
                            const t = d(e);
                            t.attr('data-srcset') && (t.attr('srcset', t.attr('data-srcset')), t.removeAttr('data-srcset'));
                          }),
                        c && (n.attr('src', c), n.removeAttr('data-src'))),
                    n.addClass(a.loadedClass).removeClass(a.loadingClass),
                    r.find(`.${a.preloaderClass}`).remove(),
                    t.params.loop && s)
                  ) {
                    const e = r.attr('data-swiper-slide-index');
                    if (r.hasClass(t.params.slideDuplicateClass)) {
                      o(t.$wrapperEl.children(`[data-swiper-slide-index="${e}"]:not(.${t.params.slideDuplicateClass})`).index(), !1);
                    } else {
                      o(t.$wrapperEl.children(`.${t.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`).index(), !1);
                    }
                  }
                  i('lazyImageReady', r[0], n[0]), t.params.autoHeight && t.updateAutoHeight();
                }
              }),
                i('lazyImageLoad', r[0], n[0]);
            });
      }
      function c() {
        const { $wrapperEl: e, params: s, slides: a, activeIndex: i } = t,
          r = t.virtual && s.virtual.enabled,
          n = s.lazy;
        let c = s.slidesPerView;
        function p(t) {
          if (r) {
            if (e.children(`.${s.slideClass}[data-swiper-slide-index="${t}"]`).length) return !0;
          } else if (a[t]) return !0;
          return !1;
        }
        function u(e) {
          return r ? d(e).attr('data-swiper-slide-index') : d(e).index();
        }
        if (('auto' === c && (c = 0), l || (l = !0), t.params.watchSlidesProgress))
          e.children(`.${s.slideVisibleClass}`).each((e) => {
            o(r ? d(e).attr('data-swiper-slide-index') : d(e).index());
          });
        else if (c > 1) for (let e = i; e < i + c; e += 1) p(e) && o(e);
        else o(i);
        if (n.loadPrevNext)
          if (c > 1 || (n.loadPrevNextAmount && n.loadPrevNextAmount > 1)) {
            const e = n.loadPrevNextAmount,
              t = Math.ceil(c),
              s = Math.min(i + t + Math.max(e, t), a.length),
              r = Math.max(i - Math.max(t, e), 0);
            for (let e = i + t; e < s; e += 1) p(e) && o(e);
            for (let e = r; e < i; e += 1) p(e) && o(e);
          } else {
            const t = e.children(`.${s.slideNextClass}`);
            t.length > 0 && o(u(t));
            const a = e.children(`.${s.slidePrevClass}`);
            a.length > 0 && o(u(a));
          }
      }
      function p() {
        const e = r();
        if (!t || t.destroyed) return;
        const s = t.params.lazy.scrollingElement ? d(t.params.lazy.scrollingElement) : d(e),
          a = s[0] === e,
          i = a ? e.innerWidth : s[0].offsetWidth,
          l = a ? e.innerHeight : s[0].offsetHeight,
          o = t.$el.offset(),
          { rtlTranslate: u } = t;
        let h = !1;
        u && (o.left -= t.$el[0].scrollLeft);
        const m = [
          [o.left, o.top],
          [o.left + t.width, o.top],
          [o.left, o.top + t.height],
          [o.left + t.width, o.top + t.height]
        ];
        for (let e = 0; e < m.length; e += 1) {
          const t = m[e];
          if (t[0] >= 0 && t[0] <= i && t[1] >= 0 && t[1] <= l) {
            if (0 === t[0] && 0 === t[1]) continue;
            h = !0;
          }
        }
        const f = !('touchstart' !== t.touchEvents.start || !t.support.passiveListener || !t.params.passiveListeners) && { passive: !0, capture: !1 };
        h ? (c(), s.off('scroll', p, f)) : n || ((n = !0), s.on('scroll', p, f));
      }
      a('beforeInit', () => {
        t.params.lazy.enabled && t.params.preloadImages && (t.params.preloadImages = !1);
      }),
        a('init', () => {
          t.params.lazy.enabled && (t.params.lazy.checkInView ? p() : c());
        }),
        a('scroll', () => {
          t.params.freeMode && t.params.freeMode.enabled && !t.params.freeMode.sticky && c();
        }),
        a('scrollbarDragMove resize _freeModeNoMomentumRelease', () => {
          t.params.lazy.enabled && (t.params.lazy.checkInView ? p() : c());
        }),
        a('transitionStart', () => {
          t.params.lazy.enabled && (t.params.lazy.loadOnTransitionStart || (!t.params.lazy.loadOnTransitionStart && !l)) && (t.params.lazy.checkInView ? p() : c());
        }),
        a('transitionEnd', () => {
          t.params.lazy.enabled && !t.params.lazy.loadOnTransitionStart && (t.params.lazy.checkInView ? p() : c());
        }),
        a('slideChange', () => {
          const { lazy: e, cssMode: s, watchSlidesProgress: a, touchReleaseOnEdges: i, resistanceRatio: r } = t.params;
          e.enabled && (s || (a && (i || 0 === r))) && c();
        }),
        a('destroy', () => {
          t.$el && t.$el.find(`.${t.params.lazy.loadingClass}`).removeClass(t.params.lazy.loadingClass);
        }),
        Object.assign(t.lazy, { load: c, loadInSlide: o });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      function i(e, t) {
        const s = (function () {
          let e, t, s;
          return (a, i) => {
            for (t = -1, e = a.length; e - t > 1; ) (s = (e + t) >> 1), a[s] <= i ? (t = s) : (e = s);
            return e;
          };
        })();
        let a, i;
        return (
          (this.x = e),
          (this.y = t),
          (this.lastIndex = e.length - 1),
          (this.interpolate = function (e) {
            return e ? ((i = s(this.x, e)), (a = i - 1), ((e - this.x[a]) * (this.y[i] - this.y[a])) / (this.x[i] - this.x[a]) + this.y[a]) : 0;
          }),
          this
        );
      }
      function r() {
        t.controller.control && t.controller.spline && ((t.controller.spline = void 0), delete t.controller.spline);
      }
      s({ controller: { control: void 0, inverse: !1, by: 'slide' } }),
        (t.controller = { control: void 0 }),
        a('beforeInit', () => {
          t.controller.control = t.params.controller.control;
        }),
        a('update', () => {
          r();
        }),
        a('resize', () => {
          r();
        }),
        a('observerUpdate', () => {
          r();
        }),
        a('setTranslate', (e, s, a) => {
          t.controller.control && t.controller.setTranslate(s, a);
        }),
        a('setTransition', (e, s, a) => {
          t.controller.control && t.controller.setTransition(s, a);
        }),
        Object.assign(t.controller, {
          setTranslate: function (e, s) {
            const a = t.controller.control;
            let r, n;
            const l = t.constructor;
            function o(e) {
              const s = t.rtlTranslate ? -t.translate : t.translate;
              'slide' === t.params.controller.by &&
                (!(function (e) {
                  t.controller.spline || (t.controller.spline = t.params.loop ? new i(t.slidesGrid, e.slidesGrid) : new i(t.snapGrid, e.snapGrid));
                })(e),
                (n = -t.controller.spline.interpolate(-s))),
                (n && 'container' !== t.params.controller.by) ||
                  ((r = (e.maxTranslate() - e.minTranslate()) / (t.maxTranslate() - t.minTranslate())), (n = (s - t.minTranslate()) * r + e.minTranslate())),
                t.params.controller.inverse && (n = e.maxTranslate() - n),
                e.updateProgress(n),
                e.setTranslate(n, t),
                e.updateActiveIndex(),
                e.updateSlidesClasses();
            }
            if (Array.isArray(a)) for (let e = 0; e < a.length; e += 1) a[e] !== s && a[e] instanceof l && o(a[e]);
            else a instanceof l && s !== a && o(a);
          },
          setTransition: function (e, s) {
            const a = t.constructor,
              i = t.controller.control;
            let r;
            function n(s) {
              s.setTransition(e, t),
                0 !== e &&
                  (s.transitionStart(),
                  s.params.autoHeight &&
                    p(() => {
                      s.updateAutoHeight();
                    }),
                  s.$wrapperEl.transitionEnd(() => {
                    i && (s.params.loop && 'slide' === t.params.controller.by && s.loopFix(), s.transitionEnd());
                  }));
            }
            if (Array.isArray(i)) for (r = 0; r < i.length; r += 1) i[r] !== s && i[r] instanceof a && n(i[r]);
            else i instanceof a && s !== i && n(i);
          }
        });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      s({
        a11y: {
          enabled: !0,
          notificationClass: 'swiper-notification',
          prevSlideMessage: 'Previous slide',
          nextSlideMessage: 'Next slide',
          firstSlideMessage: 'This is the first slide',
          lastSlideMessage: 'This is the last slide',
          paginationBulletMessage: 'Go to slide {{index}}',
          slideLabelMessage: '{{index}} / {{slidesLength}}',
          containerMessage: null,
          containerRoleDescriptionMessage: null,
          itemRoleDescriptionMessage: null,
          slideRole: 'group',
          id: null
        }
      }),
        (t.a11y = { clicked: !1 });
      let i = null;
      function r(e) {
        const t = i;
        0 !== t.length && (t.html(''), t.html(e));
      }
      function n(e) {
        e.attr('tabIndex', '0');
      }
      function l(e) {
        e.attr('tabIndex', '-1');
      }
      function o(e, t) {
        e.attr('role', t);
      }
      function c(e, t) {
        e.attr('aria-roledescription', t);
      }
      function p(e, t) {
        e.attr('aria-label', t);
      }
      function u(e) {
        e.attr('aria-disabled', !0);
      }
      function h(e) {
        e.attr('aria-disabled', !1);
      }
      function m(e) {
        if (13 !== e.keyCode && 32 !== e.keyCode) return;
        const s = t.params.a11y,
          a = d(e.target);
        t.navigation && t.navigation.$nextEl && a.is(t.navigation.$nextEl) && ((t.isEnd && !t.params.loop) || t.slideNext(), t.isEnd ? r(s.lastSlideMessage) : r(s.nextSlideMessage)),
          t.navigation && t.navigation.$prevEl && a.is(t.navigation.$prevEl) && ((t.isBeginning && !t.params.loop) || t.slidePrev(), t.isBeginning ? r(s.firstSlideMessage) : r(s.prevSlideMessage)),
          t.pagination && a.is(U(t.params.pagination.bulletClass)) && a[0].click();
      }
      function f() {
        return t.pagination && t.pagination.bullets && t.pagination.bullets.length;
      }
      function g() {
        return f() && t.params.pagination.clickable;
      }
      const v = (e, t, s) => {
          n(e),
            'BUTTON' !== e[0].tagName && (o(e, 'button'), e.on('keydown', m)),
            p(e, s),
            (function (e, t) {
              e.attr('aria-controls', t);
            })(e, t);
        },
        w = () => {
          t.a11y.clicked = !0;
        },
        b = () => {
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              t.destroyed || (t.a11y.clicked = !1);
            });
          });
        },
        x = (e) => {
          if (t.a11y.clicked) return;
          const s = e.target.closest(`.${t.params.slideClass}`);
          if (!s || !t.slides.includes(s)) return;
          const a = t.slides.indexOf(s) === t.activeIndex,
            i = t.params.watchSlidesProgress && t.visibleSlides && t.visibleSlides.includes(s);
          a || i || (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents) || (t.isHorizontal() ? (t.el.scrollLeft = 0) : (t.el.scrollTop = 0), t.slideTo(t.slides.indexOf(s), 0));
        },
        y = () => {
          const e = t.params.a11y;
          e.itemRoleDescriptionMessage && c(d(t.slides), e.itemRoleDescriptionMessage), e.slideRole && o(d(t.slides), e.slideRole);
          const s = t.params.loop ? t.slides.filter((e) => !e.classList.contains(t.params.slideDuplicateClass)).length : t.slides.length;
          e.slideLabelMessage &&
            t.slides.each((a, i) => {
              const r = d(a),
                n = t.params.loop ? parseInt(r.attr('data-swiper-slide-index'), 10) : i;
              p(r, e.slideLabelMessage.replace(/\{\{index\}\}/, n + 1).replace(/\{\{slidesLength\}\}/, s));
            });
        },
        E = () => {
          const e = t.params.a11y;
          t.$el.append(i);
          const s = t.$el;
          e.containerRoleDescriptionMessage && c(s, e.containerRoleDescriptionMessage), e.containerMessage && p(s, e.containerMessage);
          const a = t.$wrapperEl,
            r = e.id || a.attr('id') || `swiper-wrapper-${((n = 16), void 0 === n && (n = 16), 'x'.repeat(n).replace(/x/g, () => Math.round(16 * Math.random()).toString(16)))}`;
          var n;
          const l = t.params.autoplay && t.params.autoplay.enabled ? 'off' : 'polite';
          var o;
          let d, u;
          (o = r),
            a.attr('id', o),
            (function (e, t) {
              e.attr('aria-live', t);
            })(a, l),
            y(),
            t.navigation && t.navigation.$nextEl && (d = t.navigation.$nextEl),
            t.navigation && t.navigation.$prevEl && (u = t.navigation.$prevEl),
            d && d.length && v(d, r, e.nextSlideMessage),
            u && u.length && v(u, r, e.prevSlideMessage),
            g() && t.pagination.$el.on('keydown', U(t.params.pagination.bulletClass), m),
            t.$el.on('focus', x, !0),
            t.$el.on('pointerdown', w, !0),
            t.$el.on('pointerup', b, !0);
        };
      a('beforeInit', () => {
        i = d(`<span class="${t.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`);
      }),
        a('afterInit', () => {
          t.params.a11y.enabled && E();
        }),
        a('slidesLengthChange snapGridLengthChange slidesGridLengthChange', () => {
          t.params.a11y.enabled && y();
        }),
        a('fromEdge toEdge afterInit lock unlock', () => {
          t.params.a11y.enabled &&
            (function () {
              if (t.params.loop || t.params.rewind || !t.navigation) return;
              const { $nextEl: e, $prevEl: s } = t.navigation;
              s && s.length > 0 && (t.isBeginning ? (u(s), l(s)) : (h(s), n(s))), e && e.length > 0 && (t.isEnd ? (u(e), l(e)) : (h(e), n(e)));
            })();
        }),
        a('paginationUpdate', () => {
          t.params.a11y.enabled &&
            (function () {
              const e = t.params.a11y;
              f() &&
                t.pagination.bullets.each((s) => {
                  const a = d(s);
                  t.params.pagination.clickable && (n(a), t.params.pagination.renderBullet || (o(a, 'button'), p(a, e.paginationBulletMessage.replace(/\{\{index\}\}/, a.index() + 1)))),
                    a.is(`.${t.params.pagination.bulletActiveClass}`) ? a.attr('aria-current', 'true') : a.removeAttr('aria-current');
                });
            })();
        }),
        a('destroy', () => {
          t.params.a11y.enabled &&
            (function () {
              let e, s;
              i && i.length > 0 && i.remove(),
                t.navigation && t.navigation.$nextEl && (e = t.navigation.$nextEl),
                t.navigation && t.navigation.$prevEl && (s = t.navigation.$prevEl),
                e && e.off('keydown', m),
                s && s.off('keydown', m),
                g() && t.pagination.$el.off('keydown', U(t.params.pagination.bulletClass), m),
                t.$el.off('focus', x, !0),
                t.$el.off('pointerdown', w, !0),
                t.$el.off('pointerup', b, !0);
            })();
        });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      s({ history: { enabled: !1, root: '', replaceState: !1, key: 'slides', keepQuery: !1 } });
      let i = !1,
        n = {};
      const l = (e) =>
          e
            .toString()
            .replace(/\s+/g, '-')
            .replace(/[^\w-]+/g, '')
            .replace(/--+/g, '-')
            .replace(/^-+/, '')
            .replace(/-+$/, ''),
        o = (e) => {
          const t = r();
          let s;
          s = e ? new URL(e) : t.location;
          const a = s.pathname
              .slice(1)
              .split('/')
              .filter((e) => '' !== e),
            i = a.length;
          return { key: a[i - 2], value: a[i - 1] };
        },
        d = (e, s) => {
          const a = r();
          if (!i || !t.params.history.enabled) return;
          let n;
          n = t.params.url ? new URL(t.params.url) : a.location;
          const o = t.slides.eq(s);
          let d = l(o.attr('data-history'));
          if (t.params.history.root.length > 0) {
            let s = t.params.history.root;
            '/' === s[s.length - 1] && (s = s.slice(0, s.length - 1)), (d = `${s}/${e}/${d}`);
          } else n.pathname.includes(e) || (d = `${e}/${d}`);
          t.params.history.keepQuery && (d += n.search);
          const c = a.history.state;
          (c && c.value === d) || (t.params.history.replaceState ? a.history.replaceState({ value: d }, null, d) : a.history.pushState({ value: d }, null, d));
        },
        c = (e, s, a) => {
          if (s)
            for (let i = 0, r = t.slides.length; i < r; i += 1) {
              const r = t.slides.eq(i);
              if (l(r.attr('data-history')) === s && !r.hasClass(t.params.slideDuplicateClass)) {
                const s = r.index();
                t.slideTo(s, e, a);
              }
            }
          else t.slideTo(0, e, a);
        },
        p = () => {
          (n = o(t.params.url)), c(t.params.speed, n.value, !1);
        };
      a('init', () => {
        t.params.history.enabled &&
          (() => {
            const e = r();
            if (t.params.history) {
              if (!e.history || !e.history.pushState) return (t.params.history.enabled = !1), void (t.params.hashNavigation.enabled = !0);
              (i = !0), (n = o(t.params.url)), (n.key || n.value) && (c(0, n.value, t.params.runCallbacksOnInit), t.params.history.replaceState || e.addEventListener('popstate', p));
            }
          })();
      }),
        a('destroy', () => {
          t.params.history.enabled &&
            (() => {
              const e = r();
              t.params.history.replaceState || e.removeEventListener('popstate', p);
            })();
        }),
        a('transitionEnd _freeModeNoMomentumRelease', () => {
          i && d(t.params.history.key, t.activeIndex);
        }),
        a('slideChange', () => {
          i && t.params.cssMode && d(t.params.history.key, t.activeIndex);
        });
    },
    function (e) {
      let { swiper: t, extendParams: s, emit: i, on: n } = e,
        l = !1;
      const o = a(),
        c = r();
      s({ hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 } });
      const p = () => {
          i('hashChange');
          const e = o.location.hash.replace('#', '');
          if (e !== t.slides.eq(t.activeIndex).attr('data-hash')) {
            const s = t.$wrapperEl.children(`.${t.params.slideClass}[data-hash="${e}"]`).index();
            if (void 0 === s) return;
            t.slideTo(s);
          }
        },
        u = () => {
          if (l && t.params.hashNavigation.enabled)
            if (t.params.hashNavigation.replaceState && c.history && c.history.replaceState) c.history.replaceState(null, null, `#${t.slides.eq(t.activeIndex).attr('data-hash')}` || ''), i('hashSet');
            else {
              const e = t.slides.eq(t.activeIndex),
                s = e.attr('data-hash') || e.attr('data-history');
              (o.location.hash = s || ''), i('hashSet');
            }
        };
      n('init', () => {
        t.params.hashNavigation.enabled &&
          (() => {
            if (!t.params.hashNavigation.enabled || (t.params.history && t.params.history.enabled)) return;
            l = !0;
            const e = o.location.hash.replace('#', '');
            if (e) {
              const s = 0;
              for (let a = 0, i = t.slides.length; a < i; a += 1) {
                const i = t.slides.eq(a);
                if ((i.attr('data-hash') || i.attr('data-history')) === e && !i.hasClass(t.params.slideDuplicateClass)) {
                  const e = i.index();
                  t.slideTo(e, s, t.params.runCallbacksOnInit, !0);
                }
              }
            }
            t.params.hashNavigation.watchState && d(c).on('hashchange', p);
          })();
      }),
        n('destroy', () => {
          t.params.hashNavigation.enabled && t.params.hashNavigation.watchState && d(c).off('hashchange', p);
        }),
        n('transitionEnd _freeModeNoMomentumRelease', () => {
          l && u();
        }),
        n('slideChange', () => {
          l && t.params.cssMode && u();
        });
    },
    function (e) {
      let t,
        { swiper: s, extendParams: i, on: r, emit: n } = e;
      function l() {
        if (!s.size) return (s.autoplay.running = !1), void (s.autoplay.paused = !1);
        const e = s.slides.eq(s.activeIndex);
        let a = s.params.autoplay.delay;
        e.attr('data-swiper-autoplay') && (a = e.attr('data-swiper-autoplay') || s.params.autoplay.delay),
          clearTimeout(t),
          (t = p(() => {
            let e;
            s.params.autoplay.reverseDirection
              ? s.params.loop
                ? (s.loopFix(), (e = s.slidePrev(s.params.speed, !0, !0)), n('autoplay'))
                : s.isBeginning
                ? s.params.autoplay.stopOnLastSlide
                  ? d()
                  : ((e = s.slideTo(s.slides.length - 1, s.params.speed, !0, !0)), n('autoplay'))
                : ((e = s.slidePrev(s.params.speed, !0, !0)), n('autoplay'))
              : s.params.loop
              ? (s.loopFix(), (e = s.slideNext(s.params.speed, !0, !0)), n('autoplay'))
              : s.isEnd
              ? s.params.autoplay.stopOnLastSlide
                ? d()
                : ((e = s.slideTo(0, s.params.speed, !0, !0)), n('autoplay'))
              : ((e = s.slideNext(s.params.speed, !0, !0)), n('autoplay')),
              ((s.params.cssMode && s.autoplay.running) || !1 === e) && l();
          }, a));
      }
      function o() {
        return void 0 === t && !s.autoplay.running && ((s.autoplay.running = !0), n('autoplayStart'), l(), !0);
      }
      function d() {
        return !!s.autoplay.running && void 0 !== t && (t && (clearTimeout(t), (t = void 0)), (s.autoplay.running = !1), n('autoplayStop'), !0);
      }
      function c(e) {
        s.autoplay.running &&
          (s.autoplay.paused ||
            (t && clearTimeout(t),
            (s.autoplay.paused = !0),
            0 !== e && s.params.autoplay.waitForTransition
              ? ['transitionend', 'webkitTransitionEnd'].forEach((e) => {
                  s.$wrapperEl[0].addEventListener(e, h);
                })
              : ((s.autoplay.paused = !1), l())));
      }
      function u() {
        const e = a();
        'hidden' === e.visibilityState && s.autoplay.running && c(), 'visible' === e.visibilityState && s.autoplay.paused && (l(), (s.autoplay.paused = !1));
      }
      function h(e) {
        s &&
          !s.destroyed &&
          s.$wrapperEl &&
          e.target === s.$wrapperEl[0] &&
          (['transitionend', 'webkitTransitionEnd'].forEach((e) => {
            s.$wrapperEl[0].removeEventListener(e, h);
          }),
          (s.autoplay.paused = !1),
          s.autoplay.running ? l() : d());
      }
      function m() {
        s.params.autoplay.disableOnInteraction ? d() : (n('autoplayPause'), c()),
          ['transitionend', 'webkitTransitionEnd'].forEach((e) => {
            s.$wrapperEl[0].removeEventListener(e, h);
          });
      }
      function f() {
        s.params.autoplay.disableOnInteraction || ((s.autoplay.paused = !1), n('autoplayResume'), l());
      }
      (s.autoplay = { running: !1, paused: !1 }),
        i({ autoplay: { enabled: !1, delay: 3e3, waitForTransition: !0, disableOnInteraction: !0, stopOnLastSlide: !1, reverseDirection: !1, pauseOnMouseEnter: !1 } }),
        r('init', () => {
          if (s.params.autoplay.enabled) {
            o();
            a().addEventListener('visibilitychange', u), s.params.autoplay.pauseOnMouseEnter && (s.$el.on('mouseenter', m), s.$el.on('mouseleave', f));
          }
        }),
        r('beforeTransitionStart', (e, t, a) => {
          s.autoplay.running && (a || !s.params.autoplay.disableOnInteraction ? s.autoplay.pause(t) : d());
        }),
        r('sliderFirstMove', () => {
          s.autoplay.running && (s.params.autoplay.disableOnInteraction ? d() : c());
        }),
        r('touchEnd', () => {
          s.params.cssMode && s.autoplay.paused && !s.params.autoplay.disableOnInteraction && l();
        }),
        r('destroy', () => {
          s.$el.off('mouseenter', m), s.$el.off('mouseleave', f), s.autoplay.running && d();
          a().removeEventListener('visibilitychange', u);
        }),
        Object.assign(s.autoplay, { pause: c, run: l, start: o, stop: d });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      s({ thumbs: { swiper: null, multipleActiveThumbs: !0, autoScrollOffset: 0, slideThumbActiveClass: 'swiper-slide-thumb-active', thumbsContainerClass: 'swiper-thumbs' } });
      let i = !1,
        r = !1;
      function n() {
        const e = t.thumbs.swiper;
        if (!e || e.destroyed) return;
        const s = e.clickedIndex,
          a = e.clickedSlide;
        if (a && d(a).hasClass(t.params.thumbs.slideThumbActiveClass)) return;
        if (null == s) return;
        let i;
        if (((i = e.params.loop ? parseInt(d(e.clickedSlide).attr('data-swiper-slide-index'), 10) : s), t.params.loop)) {
          let e = t.activeIndex;
          t.slides.eq(e).hasClass(t.params.slideDuplicateClass) && (t.loopFix(), (t._clientLeft = t.$wrapperEl[0].clientLeft), (e = t.activeIndex));
          const s = t.slides.eq(e).prevAll(`[data-swiper-slide-index="${i}"]`).eq(0).index(),
            a = t.slides.eq(e).nextAll(`[data-swiper-slide-index="${i}"]`).eq(0).index();
          i = void 0 === s ? a : void 0 === a ? s : a - e < e - s ? a : s;
        }
        t.slideTo(i);
      }
      function l() {
        const { thumbs: e } = t.params;
        if (i) return !1;
        i = !0;
        const s = t.constructor;
        if (e.swiper instanceof s)
          (t.thumbs.swiper = e.swiper),
            Object.assign(t.thumbs.swiper.originalParams, { watchSlidesProgress: !0, slideToClickedSlide: !1 }),
            Object.assign(t.thumbs.swiper.params, { watchSlidesProgress: !0, slideToClickedSlide: !1 });
        else if (m(e.swiper)) {
          const a = Object.assign({}, e.swiper);
          Object.assign(a, { watchSlidesProgress: !0, slideToClickedSlide: !1 }), (t.thumbs.swiper = new s(a)), (r = !0);
        }
        return t.thumbs.swiper.$el.addClass(t.params.thumbs.thumbsContainerClass), t.thumbs.swiper.on('tap', n), !0;
      }
      function o(e) {
        const s = t.thumbs.swiper;
        if (!s || s.destroyed) return;
        const a = 'auto' === s.params.slidesPerView ? s.slidesPerViewDynamic() : s.params.slidesPerView;
        let i = 1;
        const r = t.params.thumbs.slideThumbActiveClass;
        if (
          (t.params.slidesPerView > 1 && !t.params.centeredSlides && (i = t.params.slidesPerView),
          t.params.thumbs.multipleActiveThumbs || (i = 1),
          (i = Math.floor(i)),
          s.slides.removeClass(r),
          s.params.loop || (s.params.virtual && s.params.virtual.enabled))
        )
          for (let e = 0; e < i; e += 1) s.$wrapperEl.children(`[data-swiper-slide-index="${t.realIndex + e}"]`).addClass(r);
        else for (let e = 0; e < i; e += 1) s.slides.eq(t.realIndex + e).addClass(r);
        const n = t.params.thumbs.autoScrollOffset,
          l = n && !s.params.loop;
        if (t.realIndex !== s.realIndex || l) {
          let i,
            r,
            o = s.activeIndex;
          if (s.params.loop) {
            s.slides.eq(o).hasClass(s.params.slideDuplicateClass) && (s.loopFix(), (s._clientLeft = s.$wrapperEl[0].clientLeft), (o = s.activeIndex));
            const e = s.slides.eq(o).prevAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index(),
              a = s.slides.eq(o).nextAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index();
            (i = void 0 === e ? a : void 0 === a ? e : a - o == o - e ? (s.params.slidesPerGroup > 1 ? a : o) : a - o < o - e ? a : e), (r = t.activeIndex > t.previousIndex ? 'next' : 'prev');
          } else (i = t.realIndex), (r = i > t.previousIndex ? 'next' : 'prev');
          l && (i += 'next' === r ? n : -1 * n),
            s.visibleSlidesIndexes &&
              s.visibleSlidesIndexes.indexOf(i) < 0 &&
              (s.params.centeredSlides ? (i = i > o ? i - Math.floor(a / 2) + 1 : i + Math.floor(a / 2) - 1) : i > o && s.params.slidesPerGroup, s.slideTo(i, e ? 0 : void 0));
        }
      }
      (t.thumbs = { swiper: null }),
        a('beforeInit', () => {
          const { thumbs: e } = t.params;
          e && e.swiper && (l(), o(!0));
        }),
        a('slideChange update resize observerUpdate', () => {
          o();
        }),
        a('setTransition', (e, s) => {
          const a = t.thumbs.swiper;
          a && !a.destroyed && a.setTransition(s);
        }),
        a('beforeDestroy', () => {
          const e = t.thumbs.swiper;
          e && !e.destroyed && r && e.destroy();
        }),
        Object.assign(t.thumbs, { init: l, update: o });
    },
    function (e) {
      let { swiper: t, extendParams: s, emit: a, once: i } = e;
      s({ freeMode: { enabled: !1, momentum: !0, momentumRatio: 1, momentumBounce: !0, momentumBounceRatio: 1, momentumVelocityRatio: 1, sticky: !1, minimumVelocity: 0.02 } }),
        Object.assign(t, {
          freeMode: {
            onTouchStart: function () {
              const e = t.getTranslate();
              t.setTranslate(e), t.setTransition(0), (t.touchEventsData.velocities.length = 0), t.freeMode.onTouchEnd({ currentPos: t.rtl ? t.translate : -t.translate });
            },
            onTouchMove: function () {
              const { touchEventsData: e, touches: s } = t;
              0 === e.velocities.length && e.velocities.push({ position: s[t.isHorizontal() ? 'startX' : 'startY'], time: e.touchStartTime }),
                e.velocities.push({ position: s[t.isHorizontal() ? 'currentX' : 'currentY'], time: u() });
            },
            onTouchEnd: function (e) {
              let { currentPos: s } = e;
              const { params: r, $wrapperEl: n, rtlTranslate: l, snapGrid: o, touchEventsData: d } = t,
                c = u() - d.touchStartTime;
              if (s < -t.minTranslate()) t.slideTo(t.activeIndex);
              else if (s > -t.maxTranslate()) t.slides.length < o.length ? t.slideTo(o.length - 1) : t.slideTo(t.slides.length - 1);
              else {
                if (r.freeMode.momentum) {
                  if (d.velocities.length > 1) {
                    const e = d.velocities.pop(),
                      s = d.velocities.pop(),
                      a = e.position - s.position,
                      i = e.time - s.time;
                    (t.velocity = a / i), (t.velocity /= 2), Math.abs(t.velocity) < r.freeMode.minimumVelocity && (t.velocity = 0), (i > 150 || u() - e.time > 300) && (t.velocity = 0);
                  } else t.velocity = 0;
                  (t.velocity *= r.freeMode.momentumVelocityRatio), (d.velocities.length = 0);
                  let e = 1e3 * r.freeMode.momentumRatio;
                  const s = t.velocity * e;
                  let c = t.translate + s;
                  l && (c = -c);
                  let p,
                    h = !1;
                  const m = 20 * Math.abs(t.velocity) * r.freeMode.momentumBounceRatio;
                  let f;
                  if (c < t.maxTranslate())
                    r.freeMode.momentumBounce ? (c + t.maxTranslate() < -m && (c = t.maxTranslate() - m), (p = t.maxTranslate()), (h = !0), (d.allowMomentumBounce = !0)) : (c = t.maxTranslate()),
                      r.loop && r.centeredSlides && (f = !0);
                  else if (c > t.minTranslate())
                    r.freeMode.momentumBounce ? (c - t.minTranslate() > m && (c = t.minTranslate() + m), (p = t.minTranslate()), (h = !0), (d.allowMomentumBounce = !0)) : (c = t.minTranslate()),
                      r.loop && r.centeredSlides && (f = !0);
                  else if (r.freeMode.sticky) {
                    let e;
                    for (let t = 0; t < o.length; t += 1)
                      if (o[t] > -c) {
                        e = t;
                        break;
                      }
                    (c = Math.abs(o[e] - c) < Math.abs(o[e - 1] - c) || 'next' === t.swipeDirection ? o[e] : o[e - 1]), (c = -c);
                  }
                  if (
                    (f &&
                      i('transitionEnd', () => {
                        t.loopFix();
                      }),
                    0 !== t.velocity)
                  ) {
                    if (((e = l ? Math.abs((-c - t.translate) / t.velocity) : Math.abs((c - t.translate) / t.velocity)), r.freeMode.sticky)) {
                      const s = Math.abs((l ? -c : c) - t.translate),
                        a = t.slidesSizesGrid[t.activeIndex];
                      e = s < a ? r.speed : s < 2 * a ? 1.5 * r.speed : 2.5 * r.speed;
                    }
                  } else if (r.freeMode.sticky) return void t.slideToClosest();
                  r.freeMode.momentumBounce && h
                    ? (t.updateProgress(p),
                      t.setTransition(e),
                      t.setTranslate(c),
                      t.transitionStart(!0, t.swipeDirection),
                      (t.animating = !0),
                      n.transitionEnd(() => {
                        t &&
                          !t.destroyed &&
                          d.allowMomentumBounce &&
                          (a('momentumBounce'),
                          t.setTransition(r.speed),
                          setTimeout(() => {
                            t.setTranslate(p),
                              n.transitionEnd(() => {
                                t && !t.destroyed && t.transitionEnd();
                              });
                          }, 0));
                      }))
                    : t.velocity
                    ? (a('_freeModeNoMomentumRelease'),
                      t.updateProgress(c),
                      t.setTransition(e),
                      t.setTranslate(c),
                      t.transitionStart(!0, t.swipeDirection),
                      t.animating ||
                        ((t.animating = !0),
                        n.transitionEnd(() => {
                          t && !t.destroyed && t.transitionEnd();
                        })))
                    : t.updateProgress(c),
                    t.updateActiveIndex(),
                    t.updateSlidesClasses();
                } else {
                  if (r.freeMode.sticky) return void t.slideToClosest();
                  r.freeMode && a('_freeModeNoMomentumRelease');
                }
                (!r.freeMode.momentum || c >= r.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
              }
            }
          }
        });
    },
    function (e) {
      let t,
        s,
        a,
        { swiper: i, extendParams: r } = e;
      r({ grid: { rows: 1, fill: 'column' } }),
        (i.grid = {
          initSlides: (e) => {
            const { slidesPerView: r } = i.params,
              { rows: n, fill: l } = i.params.grid;
            (s = t / n), (a = Math.floor(e / n)), (t = Math.floor(e / n) === e / n ? e : Math.ceil(e / n) * n), 'auto' !== r && 'row' === l && (t = Math.max(t, r * n));
          },
          updateSlide: (e, r, n, l) => {
            const { slidesPerGroup: o, spaceBetween: d } = i.params,
              { rows: c, fill: p } = i.params.grid;
            let u, h, m;
            if ('row' === p && o > 1) {
              const s = Math.floor(e / (o * c)),
                a = e - c * o * s,
                i = 0 === s ? o : Math.min(Math.ceil((n - s * c * o) / c), o);
              (m = Math.floor(a / i)), (h = a - m * i + s * o), (u = h + (m * t) / c), r.css({ '-webkit-order': u, order: u });
            } else
              'column' === p
                ? ((h = Math.floor(e / c)), (m = e - h * c), (h > a || (h === a && m === c - 1)) && ((m += 1), m >= c && ((m = 0), (h += 1))))
                : ((m = Math.floor(e / s)), (h = e - m * s));
            r.css(l('margin-top'), 0 !== m ? d && `${d}px` : '');
          },
          updateWrapperSize: (e, s, a) => {
            const { spaceBetween: r, centeredSlides: n, roundLengths: l } = i.params,
              { rows: o } = i.params.grid;
            if (((i.virtualSize = (e + r) * t), (i.virtualSize = Math.ceil(i.virtualSize / o) - r), i.$wrapperEl.css({ [a('width')]: `${i.virtualSize + r}px` }), n)) {
              s.splice(0, s.length);
              const e = [];
              for (let t = 0; t < s.length; t += 1) {
                let a = s[t];
                l && (a = Math.floor(a)), s[t] < i.virtualSize + s[0] && e.push(a);
              }
              s.push(...e);
            }
          }
        });
    },
    function (e) {
      let { swiper: t } = e;
      Object.assign(t, { appendSlide: K.bind(t), prependSlide: Z.bind(t), addSlide: Q.bind(t), removeSlide: J.bind(t), removeAllSlides: ee.bind(t) });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      s({ fadeEffect: { crossFade: !1, transformEl: null } }),
        te({
          effect: 'fade',
          swiper: t,
          on: a,
          setTranslate: () => {
            const { slides: e } = t,
              s = t.params.fadeEffect;
            for (let a = 0; a < e.length; a += 1) {
              const e = t.slides.eq(a);
              let i = -e[0].swiperSlideOffset;
              t.params.virtualTranslate || (i -= t.translate);
              let r = 0;
              t.isHorizontal() || ((r = i), (i = 0));
              const n = t.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(e[0].progress), 0) : 1 + Math.min(Math.max(e[0].progress, -1), 0);
              se(s, e).css({ opacity: n }).transform(`translate3d(${i}px, ${r}px, 0px)`);
            }
          },
          setTransition: (e) => {
            const { transformEl: s } = t.params.fadeEffect;
            (s ? t.slides.find(s) : t.slides).transition(e), ae({ swiper: t, duration: e, transformEl: s, allSlides: !0 });
          },
          overwriteParams: () => ({ slidesPerView: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !t.params.cssMode })
        });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      s({ cubeEffect: { slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: 0.94 } });
      const i = (e, t, s) => {
        let a = s ? e.find('.swiper-slide-shadow-left') : e.find('.swiper-slide-shadow-top'),
          i = s ? e.find('.swiper-slide-shadow-right') : e.find('.swiper-slide-shadow-bottom');
        0 === a.length && ((a = d(`<div class="swiper-slide-shadow-${s ? 'left' : 'top'}"></div>`)), e.append(a)),
          0 === i.length && ((i = d(`<div class="swiper-slide-shadow-${s ? 'right' : 'bottom'}"></div>`)), e.append(i)),
          a.length && (a[0].style.opacity = Math.max(-t, 0)),
          i.length && (i[0].style.opacity = Math.max(t, 0));
      };
      te({
        effect: 'cube',
        swiper: t,
        on: a,
        setTranslate: () => {
          const { $el: e, $wrapperEl: s, slides: a, width: r, height: n, rtlTranslate: l, size: o, browser: c } = t,
            p = t.params.cubeEffect,
            u = t.isHorizontal(),
            h = t.virtual && t.params.virtual.enabled;
          let m,
            f = 0;
          p.shadow &&
            (u
              ? ((m = s.find('.swiper-cube-shadow')), 0 === m.length && ((m = d('<div class="swiper-cube-shadow"></div>')), s.append(m)), m.css({ height: `${r}px` }))
              : ((m = e.find('.swiper-cube-shadow')), 0 === m.length && ((m = d('<div class="swiper-cube-shadow"></div>')), e.append(m))));
          for (let e = 0; e < a.length; e += 1) {
            const t = a.eq(e);
            let s = e;
            h && (s = parseInt(t.attr('data-swiper-slide-index'), 10));
            let r = 90 * s,
              n = Math.floor(r / 360);
            l && ((r = -r), (n = Math.floor(-r / 360)));
            const d = Math.max(Math.min(t[0].progress, 1), -1);
            let c = 0,
              m = 0,
              g = 0;
            s % 4 == 0
              ? ((c = 4 * -n * o), (g = 0))
              : (s - 1) % 4 == 0
              ? ((c = 0), (g = 4 * -n * o))
              : (s - 2) % 4 == 0
              ? ((c = o + 4 * n * o), (g = o))
              : (s - 3) % 4 == 0 && ((c = -o), (g = 3 * o + 4 * o * n)),
              l && (c = -c),
              u || ((m = c), (c = 0));
            const v = `rotateX(${u ? 0 : -r}deg) rotateY(${u ? r : 0}deg) translate3d(${c}px, ${m}px, ${g}px)`;
            d <= 1 && d > -1 && ((f = 90 * s + 90 * d), l && (f = 90 * -s - 90 * d)), t.transform(v), p.slideShadows && i(t, d, u);
          }
          if ((s.css({ '-webkit-transform-origin': `50% 50% -${o / 2}px`, 'transform-origin': `50% 50% -${o / 2}px` }), p.shadow))
            if (u) m.transform(`translate3d(0px, ${r / 2 + p.shadowOffset}px, ${-r / 2}px) rotateX(90deg) rotateZ(0deg) scale(${p.shadowScale})`);
            else {
              const e = Math.abs(f) - 90 * Math.floor(Math.abs(f) / 90),
                t = 1.5 - (Math.sin((2 * e * Math.PI) / 360) / 2 + Math.cos((2 * e * Math.PI) / 360) / 2),
                s = p.shadowScale,
                a = p.shadowScale / t,
                i = p.shadowOffset;
              m.transform(`scale3d(${s}, 1, ${a}) translate3d(0px, ${n / 2 + i}px, ${-n / 2 / a}px) rotateX(-90deg)`);
            }
          const g = c.isSafari || c.isWebView ? -o / 2 : 0;
          s.transform(`translate3d(0px,0,${g}px) rotateX(${t.isHorizontal() ? 0 : f}deg) rotateY(${t.isHorizontal() ? -f : 0}deg)`), s[0].style.setProperty('--swiper-cube-translate-z', `${g}px`);
        },
        setTransition: (e) => {
          const { $el: s, slides: a } = t;
          a.transition(e).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(e),
            t.params.cubeEffect.shadow && !t.isHorizontal() && s.find('.swiper-cube-shadow').transition(e);
        },
        recreateShadows: () => {
          const e = t.isHorizontal();
          t.slides.each((t) => {
            const s = Math.max(Math.min(t.progress, 1), -1);
            i(d(t), s, e);
          });
        },
        getEffectParams: () => t.params.cubeEffect,
        perspective: () => !0,
        overwriteParams: () => ({ slidesPerView: 1, slidesPerGroup: 1, watchSlidesProgress: !0, resistanceRatio: 0, spaceBetween: 0, centeredSlides: !1, virtualTranslate: !0 })
      });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      s({ flipEffect: { slideShadows: !0, limitRotation: !0, transformEl: null } });
      const i = (e, s, a) => {
        let i = t.isHorizontal() ? e.find('.swiper-slide-shadow-left') : e.find('.swiper-slide-shadow-top'),
          r = t.isHorizontal() ? e.find('.swiper-slide-shadow-right') : e.find('.swiper-slide-shadow-bottom');
        0 === i.length && (i = ie(a, e, t.isHorizontal() ? 'left' : 'top')),
          0 === r.length && (r = ie(a, e, t.isHorizontal() ? 'right' : 'bottom')),
          i.length && (i[0].style.opacity = Math.max(-s, 0)),
          r.length && (r[0].style.opacity = Math.max(s, 0));
      };
      te({
        effect: 'flip',
        swiper: t,
        on: a,
        setTranslate: () => {
          const { slides: e, rtlTranslate: s } = t,
            a = t.params.flipEffect;
          for (let r = 0; r < e.length; r += 1) {
            const n = e.eq(r);
            let l = n[0].progress;
            t.params.flipEffect.limitRotation && (l = Math.max(Math.min(n[0].progress, 1), -1));
            const o = n[0].swiperSlideOffset;
            let d = -180 * l,
              c = 0,
              p = t.params.cssMode ? -o - t.translate : -o,
              u = 0;
            t.isHorizontal() ? s && (d = -d) : ((u = p), (p = 0), (c = -d), (d = 0)), (n[0].style.zIndex = -Math.abs(Math.round(l)) + e.length), a.slideShadows && i(n, l, a);
            const h = `translate3d(${p}px, ${u}px, 0px) rotateX(${c}deg) rotateY(${d}deg)`;
            se(a, n).transform(h);
          }
        },
        setTransition: (e) => {
          const { transformEl: s } = t.params.flipEffect;
          (s ? t.slides.find(s) : t.slides).transition(e).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(e),
            ae({ swiper: t, duration: e, transformEl: s });
        },
        recreateShadows: () => {
          const e = t.params.flipEffect;
          t.slides.each((s) => {
            const a = d(s);
            let r = a[0].progress;
            t.params.flipEffect.limitRotation && (r = Math.max(Math.min(s.progress, 1), -1)), i(a, r, e);
          });
        },
        getEffectParams: () => t.params.flipEffect,
        perspective: () => !0,
        overwriteParams: () => ({ slidesPerView: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !t.params.cssMode })
      });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      s({ coverflowEffect: { rotate: 50, stretch: 0, depth: 100, scale: 1, modifier: 1, slideShadows: !0, transformEl: null } }),
        te({
          effect: 'coverflow',
          swiper: t,
          on: a,
          setTranslate: () => {
            const { width: e, height: s, slides: a, slidesSizesGrid: i } = t,
              r = t.params.coverflowEffect,
              n = t.isHorizontal(),
              l = t.translate,
              o = n ? e / 2 - l : s / 2 - l,
              d = n ? r.rotate : -r.rotate,
              c = r.depth;
            for (let e = 0, t = a.length; e < t; e += 1) {
              const t = a.eq(e),
                s = i[e],
                l = (o - t[0].swiperSlideOffset - s / 2) / s,
                p = 'function' == typeof r.modifier ? r.modifier(l) : l * r.modifier;
              let u = n ? d * p : 0,
                h = n ? 0 : d * p,
                m = -c * Math.abs(p),
                f = r.stretch;
              'string' == typeof f && -1 !== f.indexOf('%') && (f = (parseFloat(r.stretch) / 100) * s);
              let g = n ? 0 : f * p,
                v = n ? f * p : 0,
                w = 1 - (1 - r.scale) * Math.abs(p);
              Math.abs(v) < 0.001 && (v = 0),
                Math.abs(g) < 0.001 && (g = 0),
                Math.abs(m) < 0.001 && (m = 0),
                Math.abs(u) < 0.001 && (u = 0),
                Math.abs(h) < 0.001 && (h = 0),
                Math.abs(w) < 0.001 && (w = 0);
              const b = `translate3d(${v}px,${g}px,${m}px)  rotateX(${h}deg) rotateY(${u}deg) scale(${w})`;
              if ((se(r, t).transform(b), (t[0].style.zIndex = 1 - Math.abs(Math.round(p))), r.slideShadows)) {
                let e = n ? t.find('.swiper-slide-shadow-left') : t.find('.swiper-slide-shadow-top'),
                  s = n ? t.find('.swiper-slide-shadow-right') : t.find('.swiper-slide-shadow-bottom');
                0 === e.length && (e = ie(r, t, n ? 'left' : 'top')),
                  0 === s.length && (s = ie(r, t, n ? 'right' : 'bottom')),
                  e.length && (e[0].style.opacity = p > 0 ? p : 0),
                  s.length && (s[0].style.opacity = -p > 0 ? -p : 0);
              }
            }
          },
          setTransition: (e) => {
            const { transformEl: s } = t.params.coverflowEffect;
            (s ? t.slides.find(s) : t.slides).transition(e).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(e);
          },
          perspective: () => !0,
          overwriteParams: () => ({ watchSlidesProgress: !0 })
        });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      s({
        creativeEffect: {
          transformEl: null,
          limitProgress: 1,
          shadowPerProgress: !1,
          progressMultiplier: 1,
          perspective: !0,
          prev: { translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1 },
          next: { translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1 }
        }
      });
      const i = (e) => ('string' == typeof e ? e : `${e}px`);
      te({
        effect: 'creative',
        swiper: t,
        on: a,
        setTranslate: () => {
          const { slides: e, $wrapperEl: s, slidesSizesGrid: a } = t,
            r = t.params.creativeEffect,
            { progressMultiplier: n } = r,
            l = t.params.centeredSlides;
          if (l) {
            const e = a[0] / 2 - t.params.slidesOffsetBefore || 0;
            s.transform(`translateX(calc(50% - ${e}px))`);
          }
          for (let s = 0; s < e.length; s += 1) {
            const a = e.eq(s),
              o = a[0].progress,
              d = Math.min(Math.max(a[0].progress, -r.limitProgress), r.limitProgress);
            let c = d;
            l || (c = Math.min(Math.max(a[0].originalProgress, -r.limitProgress), r.limitProgress));
            const p = a[0].swiperSlideOffset,
              u = [t.params.cssMode ? -p - t.translate : -p, 0, 0],
              h = [0, 0, 0];
            let m = !1;
            t.isHorizontal() || ((u[1] = u[0]), (u[0] = 0));
            let f = { translate: [0, 0, 0], rotate: [0, 0, 0], scale: 1, opacity: 1 };
            d < 0 ? ((f = r.next), (m = !0)) : d > 0 && ((f = r.prev), (m = !0)),
              u.forEach((e, t) => {
                u[t] = `calc(${e}px + (${i(f.translate[t])} * ${Math.abs(d * n)}))`;
              }),
              h.forEach((e, t) => {
                h[t] = f.rotate[t] * Math.abs(d * n);
              }),
              (a[0].style.zIndex = -Math.abs(Math.round(o)) + e.length);
            const g = u.join(', '),
              v = `rotateX(${h[0]}deg) rotateY(${h[1]}deg) rotateZ(${h[2]}deg)`,
              w = c < 0 ? `scale(${1 + (1 - f.scale) * c * n})` : `scale(${1 - (1 - f.scale) * c * n})`,
              b = c < 0 ? 1 + (1 - f.opacity) * c * n : 1 - (1 - f.opacity) * c * n,
              x = `translate3d(${g}) ${v} ${w}`;
            if ((m && f.shadow) || !m) {
              let e = a.children('.swiper-slide-shadow');
              if ((0 === e.length && f.shadow && (e = ie(r, a)), e.length)) {
                const t = r.shadowPerProgress ? d * (1 / r.limitProgress) : d;
                e[0].style.opacity = Math.min(Math.max(Math.abs(t), 0), 1);
              }
            }
            const y = se(r, a);
            y.transform(x).css({ opacity: b }), f.origin && y.css('transform-origin', f.origin);
          }
        },
        setTransition: (e) => {
          const { transformEl: s } = t.params.creativeEffect;
          (s ? t.slides.find(s) : t.slides).transition(e).find('.swiper-slide-shadow').transition(e), ae({ swiper: t, duration: e, transformEl: s, allSlides: !0 });
        },
        perspective: () => t.params.creativeEffect.perspective,
        overwriteParams: () => ({ watchSlidesProgress: !0, virtualTranslate: !t.params.cssMode })
      });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      s({ cardsEffect: { slideShadows: !0, transformEl: null, rotate: !0, perSlideRotate: 2, perSlideOffset: 8 } }),
        te({
          effect: 'cards',
          swiper: t,
          on: a,
          setTranslate: () => {
            const { slides: e, activeIndex: s } = t,
              a = t.params.cardsEffect,
              { startTranslate: i, isTouched: r } = t.touchEventsData,
              n = t.translate;
            for (let l = 0; l < e.length; l += 1) {
              const o = e.eq(l),
                d = o[0].progress,
                c = Math.min(Math.max(d, -4), 4);
              let p = o[0].swiperSlideOffset;
              t.params.centeredSlides && !t.params.cssMode && t.$wrapperEl.transform(`translateX(${t.minTranslate()}px)`), t.params.centeredSlides && t.params.cssMode && (p -= e[0].swiperSlideOffset);
              let u = t.params.cssMode ? -p - t.translate : -p,
                h = 0;
              const m = -100 * Math.abs(c);
              let f = 1,
                g = -a.perSlideRotate * c,
                v = a.perSlideOffset - 0.75 * Math.abs(c);
              const w = t.virtual && t.params.virtual.enabled ? t.virtual.from + l : l,
                b = (w === s || w === s - 1) && c > 0 && c < 1 && (r || t.params.cssMode) && n < i,
                x = (w === s || w === s + 1) && c < 0 && c > -1 && (r || t.params.cssMode) && n > i;
              if (b || x) {
                const e = (1 - Math.abs((Math.abs(c) - 0.5) / 0.5)) ** 0.5;
                (g += -28 * c * e), (f += -0.5 * e), (v += 96 * e), (h = -25 * e * Math.abs(c) + '%');
              }
              if (((u = c < 0 ? `calc(${u}px + (${v * Math.abs(c)}%))` : c > 0 ? `calc(${u}px + (-${v * Math.abs(c)}%))` : `${u}px`), !t.isHorizontal())) {
                const e = h;
                (h = u), (u = e);
              }
              const y = c < 0 ? '' + (1 + (1 - f) * c) : '' + (1 - (1 - f) * c),
                E = `\n        translate3d(${u}, ${h}, ${m}px)\n        rotateZ(${a.rotate ? g : 0}deg)\n        scale(${y})\n      `;
              if (a.slideShadows) {
                let e = o.find('.swiper-slide-shadow');
                0 === e.length && (e = ie(a, o)), e.length && (e[0].style.opacity = Math.min(Math.max((Math.abs(c) - 0.5) / 0.5, 0), 1));
              }
              o[0].style.zIndex = -Math.abs(Math.round(d)) + e.length;
              se(a, o).transform(E);
            }
          },
          setTransition: (e) => {
            const { transformEl: s } = t.params.cardsEffect;
            (s ? t.slides.find(s) : t.slides).transition(e).find('.swiper-slide-shadow').transition(e), ae({ swiper: t, duration: e, transformEl: s });
          },
          perspective: () => !0,
          overwriteParams: () => ({ watchSlidesProgress: !0, virtualTranslate: !t.params.cssMode })
        });
    }
  ];
  return V.use(re), V;
});
//# sourceMappingURL=swiper-bundle.min.js.map

/*
jQuery Waypoints - v2.0.3
Copyright (c) 2011-2013 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
(function () {
  var t =
      [].indexOf ||
      function (t) {
        for (var e = 0, n = this.length; e < n; e++) {
          if (e in this && this[e] === t) return e;
        }
        return -1;
      },
    e = [].slice;
  (function (t, e) {
    if (typeof define === 'function' && define.amd) {
      return define('waypoints', ['jquery'], function (n) {
        return e(n, t);
      });
    } else {
      return e(t.jQuery, t);
    }
  })(this, function (n, r) {
    var i, o, l, s, f, u, a, c, h, d, p, y, v, w, g, m;
    i = n(r);
    c = t.call(r, 'ontouchstart') >= 0;
    s = { horizontal: {}, vertical: {} };
    f = 1;
    a = {};
    u = 'waypoints-context-id';
    p = 'resize.waypoints';
    y = 'scroll.waypoints';
    v = 1;
    w = 'waypoints-waypoint-ids';
    g = 'waypoint';
    m = 'waypoints';
    o = (function () {
      function t(t) {
        var e = this;
        this.$element = t;
        this.element = t[0];
        this.didResize = false;
        this.didScroll = false;
        this.id = 'context' + f++;
        this.oldScroll = { x: t.scrollLeft(), y: t.scrollTop() };
        this.waypoints = { horizontal: {}, vertical: {} };
        t.data(u, this.id);
        a[this.id] = this;
        t.bind(y, function () {
          var t;
          if (!(e.didScroll || c)) {
            e.didScroll = true;
            t = function () {
              e.doScroll();
              return (e.didScroll = false);
            };
            return r.setTimeout(t, n[m].settings.scrollThrottle);
          }
        });
        t.bind(p, function () {
          var t;
          if (!e.didResize) {
            e.didResize = true;
            t = function () {
              n[m]('refresh');
              return (e.didResize = false);
            };
            return r.setTimeout(t, n[m].settings.resizeThrottle);
          }
        });
      }
      t.prototype.doScroll = function () {
        var t,
          e = this;
        t = {
          horizontal: { newScroll: this.$element.scrollLeft(), oldScroll: this.oldScroll.x, forward: 'right', backward: 'left' },
          vertical: { newScroll: this.$element.scrollTop(), oldScroll: this.oldScroll.y, forward: 'down', backward: 'up' }
        };
        if (c && (!t.vertical.oldScroll || !t.vertical.newScroll)) {
          n[m]('refresh');
        }
        n.each(t, function (t, r) {
          var i, o, l;
          l = [];
          o = r.newScroll > r.oldScroll;
          i = o ? r.forward : r.backward;
          n.each(e.waypoints[t], function (t, e) {
            var n, i;
            if (r.oldScroll < (n = e.offset) && n <= r.newScroll) {
              return l.push(e);
            } else if (r.newScroll < (i = e.offset) && i <= r.oldScroll) {
              return l.push(e);
            }
          });
          l.sort(function (t, e) {
            return t.offset - e.offset;
          });
          if (!o) {
            l.reverse();
          }
          return n.each(l, function (t, e) {
            if (e.options.continuous || t === l.length - 1) {
              return e.trigger([i]);
            }
          });
        });
        return (this.oldScroll = { x: t.horizontal.newScroll, y: t.vertical.newScroll });
      };
      t.prototype.refresh = function () {
        var t,
          e,
          r,
          i = this;
        r = n.isWindow(this.element);
        e = this.$element.offset();
        this.doScroll();
        t = {
          horizontal: {
            contextOffset: r ? 0 : e.left,
            contextScroll: r ? 0 : this.oldScroll.x,
            contextDimension: this.$element.width(),
            oldScroll: this.oldScroll.x,
            forward: 'right',
            backward: 'left',
            offsetProp: 'left'
          },
          vertical: {
            contextOffset: r ? 0 : e.top,
            contextScroll: r ? 0 : this.oldScroll.y,
            contextDimension: r ? n[m]('viewportHeight') : this.$element.height(),
            oldScroll: this.oldScroll.y,
            forward: 'down',
            backward: 'up',
            offsetProp: 'top'
          }
        };
        return n.each(t, function (t, e) {
          return n.each(i.waypoints[t], function (t, r) {
            var i, o, l, s, f;
            i = r.options.offset;
            l = r.offset;
            o = n.isWindow(r.element) ? 0 : r.$element.offset()[e.offsetProp];
            if (n.isFunction(i)) {
              i = i.apply(r.element);
            } else if (typeof i === 'string') {
              i = parseFloat(i);
              if (r.options.offset.indexOf('%') > -1) {
                i = Math.ceil((e.contextDimension * i) / 100);
              }
            }
            r.offset = o - e.contextOffset + e.contextScroll - i;
            if ((r.options.onlyOnScroll && l != null) || !r.enabled) {
              return;
            }
            if (l !== null && l < (s = e.oldScroll) && s <= r.offset) {
              return r.trigger([e.backward]);
            } else if (l !== null && l > (f = e.oldScroll) && f >= r.offset) {
              return r.trigger([e.forward]);
            } else if (l === null && e.oldScroll >= r.offset) {
              return r.trigger([e.forward]);
            }
          });
        });
      };
      t.prototype.checkEmpty = function () {
        if (n.isEmptyObject(this.waypoints.horizontal) && n.isEmptyObject(this.waypoints.vertical)) {
          this.$element.unbind([p, y].join(' '));
          return delete a[this.id];
        }
      };
      return t;
    })();
    l = (function () {
      function t(t, e, r) {
        var i, o;
        r = n.extend({}, n.fn[g].defaults, r);
        if (r.offset === 'bottom-in-view') {
          r.offset = function () {
            var t;
            t = n[m]('viewportHeight');
            if (!n.isWindow(e.element)) {
              t = e.$element.height();
            }
            return t - n(this).outerHeight();
          };
        }
        this.$element = t;
        this.element = t[0];
        this.axis = r.horizontal ? 'horizontal' : 'vertical';
        this.callback = r.handler;
        this.context = e;
        this.enabled = r.enabled;
        this.id = 'waypoints' + v++;
        this.offset = null;
        this.options = r;
        e.waypoints[this.axis][this.id] = this;
        s[this.axis][this.id] = this;
        i = (o = t.data(w)) != null ? o : [];
        i.push(this.id);
        t.data(w, i);
      }
      t.prototype.trigger = function (t) {
        if (!this.enabled) {
          return;
        }
        if (this.callback != null) {
          this.callback.apply(this.element, t);
        }
        if (this.options.triggerOnce) {
          return this.destroy();
        }
      };
      t.prototype.disable = function () {
        return (this.enabled = false);
      };
      t.prototype.enable = function () {
        this.context.refresh();
        return (this.enabled = true);
      };
      t.prototype.destroy = function () {
        delete s[this.axis][this.id];
        delete this.context.waypoints[this.axis][this.id];
        return this.context.checkEmpty();
      };
      t.getWaypointsByElement = function (t) {
        var e, r;
        r = n(t).data(w);
        if (!r) {
          return [];
        }
        e = n.extend({}, s.horizontal, s.vertical);
        return n.map(r, function (t) {
          return e[t];
        });
      };
      return t;
    })();
    d = {
      init: function (t, e) {
        var r;
        if (e == null) {
          e = {};
        }
        if ((r = e.handler) == null) {
          e.handler = t;
        }
        this.each(function () {
          var t, r, i, s;
          t = n(this);
          i = (s = e.context) != null ? s : n.fn[g].defaults.context;
          if (!n.isWindow(i)) {
            i = t.closest(i);
          }
          i = n(i);
          r = a[i.data(u)];
          if (!r) {
            r = new o(i);
          }
          return new l(t, r, e);
        });
        n[m]('refresh');
        return this;
      },
      disable: function () {
        return d._invoke(this, 'disable');
      },
      enable: function () {
        return d._invoke(this, 'enable');
      },
      destroy: function () {
        return d._invoke(this, 'destroy');
      },
      prev: function (t, e) {
        return d._traverse.call(this, t, e, function (t, e, n) {
          if (e > 0) {
            return t.push(n[e - 1]);
          }
        });
      },
      next: function (t, e) {
        return d._traverse.call(this, t, e, function (t, e, n) {
          if (e < n.length - 1) {
            return t.push(n[e + 1]);
          }
        });
      },
      _traverse: function (t, e, i) {
        var o, l;
        if (t == null) {
          t = 'vertical';
        }
        if (e == null) {
          e = r;
        }
        l = h.aggregate(e);
        o = [];
        this.each(function () {
          var e;
          e = n.inArray(this, l[t]);
          return i(o, e, l[t]);
        });
        return this.pushStack(o);
      },
      _invoke: function (t, e) {
        t.each(function () {
          var t;
          t = l.getWaypointsByElement(this);
          return n.each(t, function (t, n) {
            n[e]();
            return true;
          });
        });
        return this;
      }
    };
    n.fn[g] = function () {
      var t, r;
      (r = arguments[0]), (t = 2 <= arguments.length ? e.call(arguments, 1) : []);
      if (d[r]) {
        return d[r].apply(this, t);
      } else if (n.isFunction(r)) {
        return d.init.apply(this, arguments);
      } else if (n.isPlainObject(r)) {
        return d.init.apply(this, [null, r]);
      } else if (!r) {
        return n.error('jQuery Waypoints needs a callback function or handler option.');
      } else {
        return n.error('The ' + r + ' method does not exist in jQuery Waypoints.');
      }
    };
    n.fn[g].defaults = { context: r, continuous: true, enabled: true, horizontal: false, offset: 0, triggerOnce: false };
    h = {
      refresh: function () {
        return n.each(a, function (t, e) {
          return e.refresh();
        });
      },
      viewportHeight: function () {
        var t;
        return (t = r.innerHeight) != null ? t : i.height();
      },
      aggregate: function (t) {
        var e, r, i;
        e = s;
        if (t) {
          e = (i = a[n(t).data(u)]) != null ? i.waypoints : void 0;
        }
        if (!e) {
          return [];
        }
        r = { horizontal: [], vertical: [] };
        n.each(r, function (t, i) {
          n.each(e[t], function (t, e) {
            return i.push(e);
          });
          i.sort(function (t, e) {
            return t.offset - e.offset;
          });
          r[t] = n.map(i, function (t) {
            return t.element;
          });
          return (r[t] = n.unique(r[t]));
        });
        return r;
      },
      above: function (t) {
        if (t == null) {
          t = r;
        }
        return h._filter(t, 'vertical', function (t, e) {
          return e.offset <= t.oldScroll.y;
        });
      },
      below: function (t) {
        if (t == null) {
          t = r;
        }
        return h._filter(t, 'vertical', function (t, e) {
          return e.offset > t.oldScroll.y;
        });
      },
      left: function (t) {
        if (t == null) {
          t = r;
        }
        return h._filter(t, 'horizontal', function (t, e) {
          return e.offset <= t.oldScroll.x;
        });
      },
      right: function (t) {
        if (t == null) {
          t = r;
        }
        return h._filter(t, 'horizontal', function (t, e) {
          return e.offset > t.oldScroll.x;
        });
      },
      enable: function () {
        return h._invoke('enable');
      },
      disable: function () {
        return h._invoke('disable');
      },
      destroy: function () {
        return h._invoke('destroy');
      },
      extendFn: function (t, e) {
        return (d[t] = e);
      },
      _invoke: function (t) {
        var e;
        e = n.extend({}, s.vertical, s.horizontal);
        return n.each(e, function (e, n) {
          n[t]();
          return true;
        });
      },
      _filter: function (t, e, r) {
        var i, o;
        i = a[n(t).data(u)];
        if (!i) {
          return [];
        }
        o = [];
        n.each(i.waypoints[e], function (t, e) {
          if (r(i, e)) {
            return o.push(e);
          }
        });
        o.sort(function (t, e) {
          return t.offset - e.offset;
        });
        return n.map(o, function (t) {
          return t.element;
        });
      }
    };
    n[m] = function () {
      var t, n;
      (n = arguments[0]), (t = 2 <= arguments.length ? e.call(arguments, 1) : []);
      if (h[n]) {
        return h[n].apply(null, t);
      } else {
        return h.aggregate.call(null, n);
      }
    };
    n[m].settings = { resizeThrottle: 100, scrollThrottle: 30 };
    return i.load(function () {
      return n[m]('refresh');
    });
  });
}.call(this));

/*
 * anime.js v3.1.0
 * (c) 2019 Julian Garnier
 * Released under the MIT license
 * animejs.com
 */

!(function (n, e) {
  'object' == typeof exports && 'undefined' != typeof module ? (module.exports = e()) : 'function' == typeof define && define.amd ? define(e) : (n.anime = e());
})(this, function () {
  'use strict';
  var n = {
      update: null,
      begin: null,
      loopBegin: null,
      changeBegin: null,
      change: null,
      changeComplete: null,
      loopComplete: null,
      complete: null,
      loop: 1,
      direction: 'normal',
      autoplay: !0,
      timelineOffset: 0
    },
    e = { duration: 1e3, delay: 0, endDelay: 0, easing: 'easeOutElastic(1, .5)', round: 0 },
    r = ['translateX', 'translateY', 'translateZ', 'rotate', 'rotateX', 'rotateY', 'rotateZ', 'scale', 'scaleX', 'scaleY', 'scaleZ', 'skew', 'skewX', 'skewY', 'perspective'],
    t = { CSS: {}, springs: {} };
  function a(n, e, r) {
    return Math.min(Math.max(n, e), r);
  }
  function o(n, e) {
    return n.indexOf(e) > -1;
  }
  function u(n, e) {
    return n.apply(null, e);
  }
  var i = {
    arr: function (n) {
      return Array.isArray(n);
    },
    obj: function (n) {
      return o(Object.prototype.toString.call(n), 'Object');
    },
    pth: function (n) {
      return i.obj(n) && n.hasOwnProperty('totalLength');
    },
    svg: function (n) {
      return n instanceof SVGElement;
    },
    inp: function (n) {
      return n instanceof HTMLInputElement;
    },
    dom: function (n) {
      return n.nodeType || i.svg(n);
    },
    str: function (n) {
      return 'string' == typeof n;
    },
    fnc: function (n) {
      return 'function' == typeof n;
    },
    und: function (n) {
      return void 0 === n;
    },
    hex: function (n) {
      return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(n);
    },
    rgb: function (n) {
      return /^rgb/.test(n);
    },
    hsl: function (n) {
      return /^hsl/.test(n);
    },
    col: function (n) {
      return i.hex(n) || i.rgb(n) || i.hsl(n);
    },
    key: function (r) {
      return !n.hasOwnProperty(r) && !e.hasOwnProperty(r) && 'targets' !== r && 'keyframes' !== r;
    }
  };
  function c(n) {
    var e = /\(([^)]+)\)/.exec(n);
    return e
      ? e[1].split(',').map(function (n) {
          return parseFloat(n);
        })
      : [];
  }
  function s(n, e) {
    var r = c(n),
      o = a(i.und(r[0]) ? 1 : r[0], 0.1, 100),
      u = a(i.und(r[1]) ? 100 : r[1], 0.1, 100),
      s = a(i.und(r[2]) ? 10 : r[2], 0.1, 100),
      f = a(i.und(r[3]) ? 0 : r[3], 0.1, 100),
      l = Math.sqrt(u / o),
      d = s / (2 * Math.sqrt(u * o)),
      p = d < 1 ? l * Math.sqrt(1 - d * d) : 0,
      h = 1,
      v = d < 1 ? (d * l - f) / p : -f + l;
    function g(n) {
      var r = e ? (e * n) / 1e3 : n;
      return (r = d < 1 ? Math.exp(-r * d * l) * (h * Math.cos(p * r) + v * Math.sin(p * r)) : (h + v * r) * Math.exp(-r * l)), 0 === n || 1 === n ? n : 1 - r;
    }
    return e
      ? g
      : function () {
          var e = t.springs[n];
          if (e) return e;
          for (var r = 0, a = 0; ; )
            if (1 === g((r += 1 / 6))) {
              if (++a >= 16) break;
            } else a = 0;
          var o = r * (1 / 6) * 1e3;
          return (t.springs[n] = o), o;
        };
  }
  function f(n) {
    return (
      void 0 === n && (n = 10),
      function (e) {
        return Math.round(e * n) * (1 / n);
      }
    );
  }
  var l,
    d,
    p = (function () {
      var n = 11,
        e = 1 / (n - 1);
      function r(n, e) {
        return 1 - 3 * e + 3 * n;
      }
      function t(n, e) {
        return 3 * e - 6 * n;
      }
      function a(n) {
        return 3 * n;
      }
      function o(n, e, o) {
        return ((r(e, o) * n + t(e, o)) * n + a(e)) * n;
      }
      function u(n, e, o) {
        return 3 * r(e, o) * n * n + 2 * t(e, o) * n + a(e);
      }
      return function (r, t, a, i) {
        if (0 <= r && r <= 1 && 0 <= a && a <= 1) {
          var c = new Float32Array(n);
          if (r !== t || a !== i) for (var s = 0; s < n; ++s) c[s] = o(s * e, r, a);
          return function (n) {
            return r === t && a === i ? n : 0 === n || 1 === n ? n : o(f(n), t, i);
          };
        }
        function f(t) {
          for (var i = 0, s = 1, f = n - 1; s !== f && c[s] <= t; ++s) i += e;
          var l = i + ((t - c[--s]) / (c[s + 1] - c[s])) * e,
            d = u(l, r, a);
          return d >= 0.001
            ? (function (n, e, r, t) {
                for (var a = 0; a < 4; ++a) {
                  var i = u(e, r, t);
                  if (0 === i) return e;
                  e -= (o(e, r, t) - n) / i;
                }
                return e;
              })(t, l, r, a)
            : 0 === d
            ? l
            : (function (n, e, r, t, a) {
                for (var u, i, c = 0; (u = o((i = e + (r - e) / 2), t, a) - n) > 0 ? (r = i) : (e = i), Math.abs(u) > 1e-7 && ++c < 10; );
                return i;
              })(t, i, i + e, r, a);
        }
      };
    })(),
    h =
      ((l = {
        linear: function () {
          return function (n) {
            return n;
          };
        }
      }),
      (d = {
        Sine: function () {
          return function (n) {
            return 1 - Math.cos((n * Math.PI) / 2);
          };
        },
        Circ: function () {
          return function (n) {
            return 1 - Math.sqrt(1 - n * n);
          };
        },
        Back: function () {
          return function (n) {
            return n * n * (3 * n - 2);
          };
        },
        Bounce: function () {
          return function (n) {
            for (var e, r = 4; n < ((e = Math.pow(2, --r)) - 1) / 11; );
            return 1 / Math.pow(4, 3 - r) - 7.5625 * Math.pow((3 * e - 2) / 22 - n, 2);
          };
        },
        Elastic: function (n, e) {
          void 0 === n && (n = 1), void 0 === e && (e = 0.5);
          var r = a(n, 1, 10),
            t = a(e, 0.1, 2);
          return function (n) {
            return 0 === n || 1 === n ? n : -r * Math.pow(2, 10 * (n - 1)) * Math.sin(((n - 1 - (t / (2 * Math.PI)) * Math.asin(1 / r)) * (2 * Math.PI)) / t);
          };
        }
      }),
      ['Quad', 'Cubic', 'Quart', 'Quint', 'Expo'].forEach(function (n, e) {
        d[n] = function () {
          return function (n) {
            return Math.pow(n, e + 2);
          };
        };
      }),
      Object.keys(d).forEach(function (n) {
        var e = d[n];
        (l['easeIn' + n] = e),
          (l['easeOut' + n] = function (n, r) {
            return function (t) {
              return 1 - e(n, r)(1 - t);
            };
          }),
          (l['easeInOut' + n] = function (n, r) {
            return function (t) {
              return t < 0.5 ? e(n, r)(2 * t) / 2 : 1 - e(n, r)(-2 * t + 2) / 2;
            };
          });
      }),
      l);
  function v(n, e) {
    if (i.fnc(n)) return n;
    var r = n.split('(')[0],
      t = h[r],
      a = c(n);
    switch (r) {
      case 'spring':
        return s(n, e);
      case 'cubicBezier':
        return u(p, a);
      case 'steps':
        return u(f, a);
      default:
        return u(t, a);
    }
  }
  function g(n) {
    try {
      return document.querySelectorAll(n);
    } catch (n) {
      return;
    }
  }
  function m(n, e) {
    for (var r = n.length, t = arguments.length >= 2 ? arguments[1] : void 0, a = [], o = 0; o < r; o++)
      if (o in n) {
        var u = n[o];
        e.call(t, u, o, n) && a.push(u);
      }
    return a;
  }
  function y(n) {
    return n.reduce(function (n, e) {
      return n.concat(i.arr(e) ? y(e) : e);
    }, []);
  }
  function b(n) {
    return i.arr(n) ? n : (i.str(n) && (n = g(n) || n), n instanceof NodeList || n instanceof HTMLCollection ? [].slice.call(n) : [n]);
  }
  function M(n, e) {
    return n.some(function (n) {
      return n === e;
    });
  }
  function x(n) {
    var e = {};
    for (var r in n) e[r] = n[r];
    return e;
  }
  function w(n, e) {
    var r = x(n);
    for (var t in n) r[t] = e.hasOwnProperty(t) ? e[t] : n[t];
    return r;
  }
  function k(n, e) {
    var r = x(n);
    for (var t in e) r[t] = i.und(n[t]) ? e[t] : n[t];
    return r;
  }
  function O(n) {
    return i.rgb(n)
      ? (r = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec((e = n)))
        ? 'rgba(' + r[1] + ',1)'
        : e
      : i.hex(n)
      ? ((t = n.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (n, e, r, t) {
          return e + e + r + r + t + t;
        })),
        (a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t)),
        'rgba(' + parseInt(a[1], 16) + ',' + parseInt(a[2], 16) + ',' + parseInt(a[3], 16) + ',1)')
      : i.hsl(n)
      ? (function (n) {
          var e,
            r,
            t,
            a = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(n) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(n),
            o = parseInt(a[1], 10) / 360,
            u = parseInt(a[2], 10) / 100,
            i = parseInt(a[3], 10) / 100,
            c = a[4] || 1;
          function s(n, e, r) {
            return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? n + 6 * (e - n) * r : r < 0.5 ? e : r < 2 / 3 ? n + (e - n) * (2 / 3 - r) * 6 : n;
          }
          if (0 == u) e = r = t = i;
          else {
            var f = i < 0.5 ? i * (1 + u) : i + u - i * u,
              l = 2 * i - f;
            (e = s(l, f, o + 1 / 3)), (r = s(l, f, o)), (t = s(l, f, o - 1 / 3));
          }
          return 'rgba(' + 255 * e + ',' + 255 * r + ',' + 255 * t + ',' + c + ')';
        })(n)
      : void 0;
    var e, r, t, a;
  }
  function C(n) {
    var e = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(n);
    if (e) return e[1];
  }
  function B(n, e) {
    return i.fnc(n) ? n(e.target, e.id, e.total) : n;
  }
  function P(n, e) {
    return n.getAttribute(e);
  }
  function I(n, e, r) {
    if (M([r, 'deg', 'rad', 'turn'], C(e))) return e;
    var a = t.CSS[e + r];
    if (!i.und(a)) return a;
    var o = document.createElement(n.tagName),
      u = n.parentNode && n.parentNode !== document ? n.parentNode : document.body;
    u.appendChild(o), (o.style.position = 'absolute'), (o.style.width = 100 + r);
    var c = 100 / o.offsetWidth;
    u.removeChild(o);
    var s = c * parseFloat(e);
    return (t.CSS[e + r] = s), s;
  }
  function T(n, e, r) {
    if (e in n.style) {
      var t = e.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(),
        a = n.style[e] || getComputedStyle(n).getPropertyValue(t) || '0';
      return r ? I(n, a, r) : a;
    }
  }
  function D(n, e) {
    return i.dom(n) && !i.inp(n) && (P(n, e) || (i.svg(n) && n[e]))
      ? 'attribute'
      : i.dom(n) && M(r, e)
      ? 'transform'
      : i.dom(n) && 'transform' !== e && T(n, e)
      ? 'css'
      : null != n[e]
      ? 'object'
      : void 0;
  }
  function E(n) {
    if (i.dom(n)) {
      for (var e, r = n.style.transform || '', t = /(\w+)\(([^)]*)\)/g, a = new Map(); (e = t.exec(r)); ) a.set(e[1], e[2]);
      return a;
    }
  }
  function F(n, e, r, t) {
    var a,
      u = o(e, 'scale') ? 1 : 0 + (o((a = e), 'translate') || 'perspective' === a ? 'px' : o(a, 'rotate') || o(a, 'skew') ? 'deg' : void 0),
      i = E(n).get(e) || u;
    return r && (r.transforms.list.set(e, i), (r.transforms.last = e)), t ? I(n, i, t) : i;
  }
  function N(n, e, r, t) {
    switch (D(n, e)) {
      case 'transform':
        return F(n, e, t, r);
      case 'css':
        return T(n, e, r);
      case 'attribute':
        return P(n, e);
      default:
        return n[e] || 0;
    }
  }
  function A(n, e) {
    var r = /^(\*=|\+=|-=)/.exec(n);
    if (!r) return n;
    var t = C(n) || 0,
      a = parseFloat(e),
      o = parseFloat(n.replace(r[0], ''));
    switch (r[0][0]) {
      case '+':
        return a + o + t;
      case '-':
        return a - o + t;
      case '*':
        return a * o + t;
    }
  }
  function L(n, e) {
    if (i.col(n)) return O(n);
    if (/\s/g.test(n)) return n;
    var r = C(n),
      t = r ? n.substr(0, n.length - r.length) : n;
    return e ? t + e : t;
  }
  function j(n, e) {
    return Math.sqrt(Math.pow(e.x - n.x, 2) + Math.pow(e.y - n.y, 2));
  }
  function S(n) {
    for (var e, r = n.points, t = 0, a = 0; a < r.numberOfItems; a++) {
      var o = r.getItem(a);
      a > 0 && (t += j(e, o)), (e = o);
    }
    return t;
  }
  function q(n) {
    if (n.getTotalLength) return n.getTotalLength();
    switch (n.tagName.toLowerCase()) {
      case 'circle':
        return (o = n), 2 * Math.PI * P(o, 'r');
      case 'rect':
        return 2 * P((a = n), 'width') + 2 * P(a, 'height');
      case 'line':
        return j({ x: P((t = n), 'x1'), y: P(t, 'y1') }, { x: P(t, 'x2'), y: P(t, 'y2') });
      case 'polyline':
        return S(n);
      case 'polygon':
        return (r = (e = n).points), S(e) + j(r.getItem(r.numberOfItems - 1), r.getItem(0));
    }
    var e, r, t, a, o;
  }
  function $(n, e) {
    var r = e || {},
      t =
        r.el ||
        (function (n) {
          for (var e = n.parentNode; i.svg(e) && i.svg(e.parentNode); ) e = e.parentNode;
          return e;
        })(n),
      a = t.getBoundingClientRect(),
      o = P(t, 'viewBox'),
      u = a.width,
      c = a.height,
      s = r.viewBox || (o ? o.split(' ') : [0, 0, u, c]);
    return { el: t, viewBox: s, x: s[0] / 1, y: s[1] / 1, w: u / s[2], h: c / s[3] };
  }
  function X(n, e) {
    function r(r) {
      void 0 === r && (r = 0);
      var t = e + r >= 1 ? e + r : 0;
      return n.el.getPointAtLength(t);
    }
    var t = $(n.el, n.svg),
      a = r(),
      o = r(-1),
      u = r(1);
    switch (n.property) {
      case 'x':
        return (a.x - t.x) * t.w;
      case 'y':
        return (a.y - t.y) * t.h;
      case 'angle':
        return (180 * Math.atan2(u.y - o.y, u.x - o.x)) / Math.PI;
    }
  }
  function Y(n, e) {
    var r = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,
      t = L(i.pth(n) ? n.totalLength : n, e) + '';
    return { original: t, numbers: t.match(r) ? t.match(r).map(Number) : [0], strings: i.str(n) || e ? t.split(r) : [] };
  }
  function Z(n) {
    return m(n ? y(i.arr(n) ? n.map(b) : b(n)) : [], function (n, e, r) {
      return r.indexOf(n) === e;
    });
  }
  function Q(n) {
    var e = Z(n);
    return e.map(function (n, r) {
      return { target: n, id: r, total: e.length, transforms: { list: E(n) } };
    });
  }
  function V(n, e) {
    var r = x(e);
    if ((/^spring/.test(r.easing) && (r.duration = s(r.easing)), i.arr(n))) {
      var t = n.length;
      2 === t && !i.obj(n[0]) ? (n = { value: n }) : i.fnc(e.duration) || (r.duration = e.duration / t);
    }
    var a = i.arr(n) ? n : [n];
    return a
      .map(function (n, r) {
        var t = i.obj(n) && !i.pth(n) ? n : { value: n };
        return i.und(t.delay) && (t.delay = r ? 0 : e.delay), i.und(t.endDelay) && (t.endDelay = r === a.length - 1 ? e.endDelay : 0), t;
      })
      .map(function (n) {
        return k(n, r);
      });
  }
  function z(n, e) {
    var r = [],
      t = e.keyframes;
    for (var a in (t &&
      (e = k(
        (function (n) {
          for (
            var e = m(
                y(
                  n.map(function (n) {
                    return Object.keys(n);
                  })
                ),
                function (n) {
                  return i.key(n);
                }
              ).reduce(function (n, e) {
                return n.indexOf(e) < 0 && n.push(e), n;
              }, []),
              r = {},
              t = function (t) {
                var a = e[t];
                r[a] = n.map(function (n) {
                  var e = {};
                  for (var r in n) i.key(r) ? r == a && (e.value = n[r]) : (e[r] = n[r]);
                  return e;
                });
              },
              a = 0;
            a < e.length;
            a++
          )
            t(a);
          return r;
        })(t),
        e
      )),
    e))
      i.key(a) && r.push({ name: a, tweens: V(e[a], n) });
    return r;
  }
  function H(n, e) {
    var r;
    return n.tweens.map(function (t) {
      var a = (function (n, e) {
          var r = {};
          for (var t in n) {
            var a = B(n[t], e);
            i.arr(a) &&
              1 ===
                (a = a.map(function (n) {
                  return B(n, e);
                })).length &&
              (a = a[0]),
              (r[t] = a);
          }
          return (r.duration = parseFloat(r.duration)), (r.delay = parseFloat(r.delay)), r;
        })(t, e),
        o = a.value,
        u = i.arr(o) ? o[1] : o,
        c = C(u),
        s = N(e.target, n.name, c, e),
        f = r ? r.to.original : s,
        l = i.arr(o) ? o[0] : f,
        d = C(l) || C(s),
        p = c || d;
      return (
        i.und(u) && (u = f),
        (a.from = Y(l, p)),
        (a.to = Y(A(u, l), p)),
        (a.start = r ? r.end : 0),
        (a.end = a.start + a.delay + a.duration + a.endDelay),
        (a.easing = v(a.easing, a.duration)),
        (a.isPath = i.pth(o)),
        (a.isColor = i.col(a.from.original)),
        a.isColor && (a.round = 1),
        (r = a),
        a
      );
    });
  }
  var G = {
    css: function (n, e, r) {
      return (n.style[e] = r);
    },
    attribute: function (n, e, r) {
      return n.setAttribute(e, r);
    },
    object: function (n, e, r) {
      return (n[e] = r);
    },
    transform: function (n, e, r, t, a) {
      if ((t.list.set(e, r), e === t.last || a)) {
        var o = '';
        t.list.forEach(function (n, e) {
          o += e + '(' + n + ') ';
        }),
          (n.style.transform = o);
      }
    }
  };
  function R(n, e) {
    Q(n).forEach(function (n) {
      for (var r in e) {
        var t = B(e[r], n),
          a = n.target,
          o = C(t),
          u = N(a, r, o, n),
          i = A(L(t, o || C(u)), u),
          c = D(a, r);
        G[c](a, r, i, n.transforms, !0);
      }
    });
  }
  function W(n, e) {
    return m(
      y(
        n.map(function (n) {
          return e.map(function (e) {
            return (function (n, e) {
              var r = D(n.target, e.name);
              if (r) {
                var t = H(e, n),
                  a = t[t.length - 1];
                return { type: r, property: e.name, animatable: n, tweens: t, duration: a.end, delay: t[0].delay, endDelay: a.endDelay };
              }
            })(n, e);
          });
        })
      ),
      function (n) {
        return !i.und(n);
      }
    );
  }
  function J(n, e) {
    var r = n.length,
      t = function (n) {
        return n.timelineOffset ? n.timelineOffset : 0;
      },
      a = {};
    return (
      (a.duration = r
        ? Math.max.apply(
            Math,
            n.map(function (n) {
              return t(n) + n.duration;
            })
          )
        : e.duration),
      (a.delay = r
        ? Math.min.apply(
            Math,
            n.map(function (n) {
              return t(n) + n.delay;
            })
          )
        : e.delay),
      (a.endDelay = r
        ? a.duration -
          Math.max.apply(
            Math,
            n.map(function (n) {
              return t(n) + n.duration - n.endDelay;
            })
          )
        : e.endDelay),
      a
    );
  }
  var K = 0;
  var U,
    _ = [],
    nn = [],
    en = (function () {
      function n() {
        U = requestAnimationFrame(e);
      }
      function e(e) {
        var r = _.length;
        if (r) {
          for (var t = 0; t < r; ) {
            var a = _[t];
            if (a.paused) {
              var o = _.indexOf(a);
              o > -1 && (_.splice(o, 1), (r = _.length));
            } else a.tick(e);
            t++;
          }
          n();
        } else U = cancelAnimationFrame(U);
      }
      return n;
    })();
  function rn(r) {
    void 0 === r && (r = {});
    var t,
      o = 0,
      u = 0,
      i = 0,
      c = 0,
      s = null;
    function f(n) {
      var e =
        window.Promise &&
        new Promise(function (n) {
          return (s = n);
        });
      return (n.finished = e), e;
    }
    var l,
      d,
      p,
      h,
      v,
      g,
      y,
      b,
      M =
        ((d = w(n, (l = r))),
        (p = w(e, l)),
        (h = z(p, l)),
        (v = Q(l.targets)),
        (g = W(v, h)),
        (y = J(g, p)),
        (b = K),
        K++,
        k(d, { id: b, children: [], animatables: v, animations: g, duration: y.duration, delay: y.delay, endDelay: y.endDelay }));
    f(M);
    function x() {
      var n = M.direction;
      'alternate' !== n && (M.direction = 'normal' !== n ? 'normal' : 'reverse'),
        (M.reversed = !M.reversed),
        t.forEach(function (n) {
          return (n.reversed = M.reversed);
        });
    }
    function O(n) {
      return M.reversed ? M.duration - n : n;
    }
    function C() {
      (o = 0), (u = O(M.currentTime) * (1 / rn.speed));
    }
    function B(n, e) {
      e && e.seek(n - e.timelineOffset);
    }
    function P(n) {
      for (var e = 0, r = M.animations, t = r.length; e < t; ) {
        var o = r[e],
          u = o.animatable,
          i = o.tweens,
          c = i.length - 1,
          s = i[c];
        c &&
          (s =
            m(i, function (e) {
              return n < e.end;
            })[0] || s);
        for (
          var f = a(n - s.start - s.delay, 0, s.duration) / s.duration, l = isNaN(f) ? 1 : s.easing(f), d = s.to.strings, p = s.round, h = [], v = s.to.numbers.length, g = void 0, y = 0;
          y < v;
          y++
        ) {
          var b = void 0,
            x = s.to.numbers[y],
            w = s.from.numbers[y] || 0;
          (b = s.isPath ? X(s.value, l * x) : w + l * (x - w)), p && ((s.isColor && y > 2) || (b = Math.round(b * p) / p)), h.push(b);
        }
        var k = d.length;
        if (k) {
          g = d[0];
          for (var O = 0; O < k; O++) {
            d[O];
            var C = d[O + 1],
              B = h[O];
            isNaN(B) || (g += C ? B + C : B + ' ');
          }
        } else g = h[0];
        G[o.type](u.target, o.property, g, u.transforms), (o.currentValue = g), e++;
      }
    }
    function I(n) {
      M[n] && !M.passThrough && M[n](M);
    }
    function T(n) {
      var e = M.duration,
        r = M.delay,
        l = e - M.endDelay,
        d = O(n);
      (M.progress = a((d / e) * 100, 0, 100)),
        (M.reversePlayback = d < M.currentTime),
        t &&
          (function (n) {
            if (M.reversePlayback) for (var e = c; e--; ) B(n, t[e]);
            else for (var r = 0; r < c; r++) B(n, t[r]);
          })(d),
        !M.began && M.currentTime > 0 && ((M.began = !0), I('begin')),
        !M.loopBegan && M.currentTime > 0 && ((M.loopBegan = !0), I('loopBegin')),
        d <= r && 0 !== M.currentTime && P(0),
        ((d >= l && M.currentTime !== e) || !e) && P(e),
        d > r && d < l
          ? (M.changeBegan || ((M.changeBegan = !0), (M.changeCompleted = !1), I('changeBegin')), I('change'), P(d))
          : M.changeBegan && ((M.changeCompleted = !0), (M.changeBegan = !1), I('changeComplete')),
        (M.currentTime = a(d, 0, e)),
        M.began && I('update'),
        n >= e &&
          ((u = 0),
          M.remaining && !0 !== M.remaining && M.remaining--,
          M.remaining
            ? ((o = i), I('loopComplete'), (M.loopBegan = !1), 'alternate' === M.direction && x())
            : ((M.paused = !0), M.completed || ((M.completed = !0), I('loopComplete'), I('complete'), !M.passThrough && 'Promise' in window && (s(), f(M)))));
    }
    return (
      (M.reset = function () {
        var n = M.direction;
        (M.passThrough = !1),
          (M.currentTime = 0),
          (M.progress = 0),
          (M.paused = !0),
          (M.began = !1),
          (M.loopBegan = !1),
          (M.changeBegan = !1),
          (M.completed = !1),
          (M.changeCompleted = !1),
          (M.reversePlayback = !1),
          (M.reversed = 'reverse' === n),
          (M.remaining = M.loop),
          (t = M.children);
        for (var e = (c = t.length); e--; ) M.children[e].reset();
        ((M.reversed && !0 !== M.loop) || ('alternate' === n && 1 === M.loop)) && M.remaining++, P(M.reversed ? M.duration : 0);
      }),
      (M.set = function (n, e) {
        return R(n, e), M;
      }),
      (M.tick = function (n) {
        (i = n), o || (o = i), T((i + (u - o)) * rn.speed);
      }),
      (M.seek = function (n) {
        T(O(n));
      }),
      (M.pause = function () {
        (M.paused = !0), C();
      }),
      (M.play = function () {
        M.paused && (M.completed && M.reset(), (M.paused = !1), _.push(M), C(), U || en());
      }),
      (M.reverse = function () {
        x(), C();
      }),
      (M.restart = function () {
        M.reset(), M.play();
      }),
      M.reset(),
      M.autoplay && M.play(),
      M
    );
  }
  function tn(n, e) {
    for (var r = e.length; r--; ) M(n, e[r].animatable.target) && e.splice(r, 1);
  }
  return (
    'undefined' != typeof document &&
      document.addEventListener('visibilitychange', function () {
        document.hidden
          ? (_.forEach(function (n) {
              return n.pause();
            }),
            (nn = _.slice(0)),
            (rn.running = _ = []))
          : nn.forEach(function (n) {
              return n.play();
            });
      }),
    (rn.version = '3.1.0'),
    (rn.speed = 1),
    (rn.running = _),
    (rn.remove = function (n) {
      for (var e = Z(n), r = _.length; r--; ) {
        var t = _[r],
          a = t.animations,
          o = t.children;
        tn(e, a);
        for (var u = o.length; u--; ) {
          var i = o[u],
            c = i.animations;
          tn(e, c), c.length || i.children.length || o.splice(u, 1);
        }
        a.length || o.length || t.pause();
      }
    }),
    (rn.get = N),
    (rn.set = R),
    (rn.convertPx = I),
    (rn.path = function (n, e) {
      var r = i.str(n) ? g(n)[0] : n,
        t = e || 100;
      return function (n) {
        return { property: n, el: r, svg: $(r), totalLength: q(r) * (t / 100) };
      };
    }),
    (rn.setDashoffset = function (n) {
      var e = q(n);
      return n.setAttribute('stroke-dasharray', e), e;
    }),
    (rn.stagger = function (n, e) {
      void 0 === e && (e = {});
      var r = e.direction || 'normal',
        t = e.easing ? v(e.easing) : null,
        a = e.grid,
        o = e.axis,
        u = e.from || 0,
        c = 'first' === u,
        s = 'center' === u,
        f = 'last' === u,
        l = i.arr(n),
        d = l ? parseFloat(n[0]) : parseFloat(n),
        p = l ? parseFloat(n[1]) : 0,
        h = C(l ? n[1] : n) || 0,
        g = e.start || 0 + (l ? d : 0),
        m = [],
        y = 0;
      return function (n, e, i) {
        if ((c && (u = 0), s && (u = (i - 1) / 2), f && (u = i - 1), !m.length)) {
          for (var v = 0; v < i; v++) {
            if (a) {
              var b = s ? (a[0] - 1) / 2 : u % a[0],
                M = s ? (a[1] - 1) / 2 : Math.floor(u / a[0]),
                x = b - (v % a[0]),
                w = M - Math.floor(v / a[0]),
                k = Math.sqrt(x * x + w * w);
              'x' === o && (k = -x), 'y' === o && (k = -w), m.push(k);
            } else m.push(Math.abs(u - v));
            y = Math.max.apply(Math, m);
          }
          t &&
            (m = m.map(function (n) {
              return t(n / y) * y;
            })),
            'reverse' === r &&
              (m = m.map(function (n) {
                return o ? (n < 0 ? -1 * n : -n) : Math.abs(y - n);
              }));
        }
        return g + (l ? (p - d) / y : d) * (Math.round(100 * m[e]) / 100) + h;
      };
    }),
    (rn.timeline = function (n) {
      void 0 === n && (n = {});
      var r = rn(n);
      return (
        (r.duration = 0),
        (r.add = function (t, a) {
          var o = _.indexOf(r),
            u = r.children;
          function c(n) {
            n.passThrough = !0;
          }
          o > -1 && _.splice(o, 1);
          for (var s = 0; s < u.length; s++) c(u[s]);
          var f = k(t, w(e, n));
          f.targets = f.targets || n.targets;
          var l = r.duration;
          (f.autoplay = !1), (f.direction = r.direction), (f.timelineOffset = i.und(a) ? l : A(a, l)), c(r), r.seek(f.timelineOffset);
          var d = rn(f);
          c(d), u.push(d);
          var p = J(u, n);
          return (r.delay = p.delay), (r.endDelay = p.endDelay), (r.duration = p.duration), r.seek(0), r.reset(), r.autoplay && r.play(), r;
        }),
        r
      );
    }),
    (rn.easing = v),
    (rn.penner = h),
    (rn.random = function (n, e) {
      return Math.floor(Math.random() * (e - n + 1)) + n;
    }),
    rn
  );
});
