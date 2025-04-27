import {bc as Pa, r as Nt, u as Xn, aY as La, Q as Jn, n as ce, aI as Wn, aw as Ya, l as dt, aA as Ce, t as Ba, W as gt, aQ as Ke, a as or, ae as qr, R as zn, L as _e, T as Vr, d as Vn, o as Ua, j as Qr, aL as Wa, h as Hn, ax as jn, I as Hr, E as Gn} from "https://labsimapp.testout.com/v6_0_675/assets/authenticationservice-DROgAuto.js";
import {C as Zn} from "https://labsimapp.testout.com/v6_0_675/assets/compressedstrings-f-RzZfLK.js";
function mu(d) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return function(u) {
        function h(x) {
            let {forwardedRef: S, ...b} = x;
            const [A,L,$] = Xn(d, {
                ...b,
                keyPrefix: n.keyPrefix
            })
              , M = {
                ...b,
                t: A,
                i18n: L,
                tReady: $
            };
            return n.withRef && S ? M.ref = S : !n.withRef && S && (M.forwardedRef = S),
            Nt.createElement(u, M)
        }
        h.displayName = `withI18nextTranslation(${Pa(u)})`,
        h.WrappedComponent = u;
        const p = (x, S) => Nt.createElement(h, Object.assign({}, x, {
            forwardedRef: S
        }));
        return n.withRef ? Nt.forwardRef(p) : h
    }
}
const wr = class wr {
    getHttpOrHttps() {
        let n = "http://";
        return window.location.toString().match(/^https:/i) && (n = "https://"),
        n
    }
    get WindowsLiveContentUrl() {
        return this.getHttpOrHttps() + "testoutlivecontent.blob.core.windows.net"
    }
    get StageContentUrl() {
        return this.getHttpOrHttps() + "testoutstagecontent.blob.core.windows.net"
    }
    get CdnContentUrl() {
        return La
    }
    getContentServerUri(n) {
        const o = this.getHttpOrHttps();
        let u = window.location.toString().toLowerCase();
        return u.indexOf("?") >= 0 && (u = u.substring(0, u.indexOf("?"))),
        Jn("uselocalsims") ? (u = u.substring(0, u.indexOf("/startlabsim")),
        u + "/content") : ce.uselivecontent === "true" || ce.content === "live" ? n != null && n.liveContainer ? `${this.WindowsLiveContentUrl}/${n.liveContainer}` : this.WindowsLiveContentUrl : ce.usedev5content === "true" || ce.content === "newdevtest5" ? o + "newdevtest5" : ce.usedevcontent === "true" || ce.content === "newdevtest" ? o + "newdevtest" : ce.usestagecontent === "true" || ce.content === "stage" ? n != null && n.stagingContainer ? `${this.WindowsLiveContentUrl}/${n.stagingContainer}` : this.StageContentUrl : u.indexOf("devtest5") > -1 ? o + "newdevtest5" : u.indexOf("devtest") > -1 ? o + "newdevtest" : u.indexOf("stage") > -1 ? this.StageContentUrl : u.indexOf("localhost") > -1 ? this.WindowsLiveContentUrl : n != null && n.liveContainer ? `${this.CdnContentUrl}/${n.liveContainer}` : this.CdnContentUrl
    }
    get DeploymentType() {
        return ce.usestagecontent === "true" || ce.content === "stage" ? Wn.Stage : Wn.Live
    }
    get IsDevOrStaging() {
        return this.IsDev || this.IsStaging
    }
    get IsDev() {
        return window.location.hostname === "localhost"
    }
    get IsStaging() {
        return /lsproxy\./.test(window.location.hostname)
    }
    get IsLive() {
        return !this.IsDevOrStaging
    }
    getVersionTextFromProduct(n) {
        return n.majorVersion.toString() + n.minorVersion.toString() + n.patchVersion.toString()
    }
    getVersionTextFromCertification(n, o) {
        return n.majorVersion.toString() + o.patchVersion.toString()
    }
}
;
wr.Current = new wr;
let sr = wr;
var Re = {};
(function(d) {
    var n = d;
    (function(o) {
        function u(t) {
            var i = Array.prototype.slice
              , c = t.length
              , m = function(y, C) {
                return function() {
                    return C.apply(this, y.concat(i.call(arguments)))
                }
            }
              , f = function() {
                var y = i.call(arguments);
                return y.length < c ? m(y, f) : t.apply(this, i.apply(arguments, [0, c]))
            };
            return f
        }
        var h = u(function(t, i) {
            for (var c = 0; c < i.length; c += 1)
                t(i[c], c, i)
        })
          , p = u(function(t, i, c) {
            var m = i;
            return h(function(f, y) {
                m = t(m, f, y)
            }, c),
            m
        })
          , x = u(function(t, i) {
            var c = new Array(i.length);
            return h(function(m, f) {
                c[f] = t(m)
            }, i),
            c
        })
          , S = u(function(t, i) {
            var c = [];
            return h(function(m, f) {
                t(m, f) && c.push(m)
            }, i),
            c
        });
        function b() {
            if (arguments.length === 0)
                throw new Error("compose requires at least one argument");
            var t = Array.prototype.slice.call(arguments).reverse()
              , i = t[0]
              , c = t.slice(1);
            return function() {
                return p(function(m, f) {
                    return f(m)
                }, i.apply(null, arguments), c)
            }
        }
        var A = u(function(t, i) {
            for (var c = 0; c < t.length; c += 1)
                if (t[c] === i)
                    return !0;
            return !1
        });
        function L(t) {
            return function() {
                return t
            }
        }
        var $ = u(function(t, i) {
            return i[t]
        });
        function M(t) {
            return t.toString()
        }
        var R = u(function(t, i) {
            return i.join(t)
        })
          , K = u(function(t, i, c) {
            return t + c + i
        });
        function O(t) {
            for (var i = Object(t), c = 1; c < arguments.length; c++) {
                var m = arguments[c];
                if (m != null)
                    for (var f in m)
                        Object.prototype.hasOwnProperty.call(m, f) && (i[f] = m[f])
            }
            return i
        }
        v.prototype = new Object,
        v.prototype.constructor = v,
        v.superclass = Object.prototype;
        function v() {
            this.init()
        }
        v.prototype.init = function() {
            this.reduceActions = [],
            this.reduceActions[3] = function(t) {
                return new Vt(t[0],t[2])
            }
            ,
            this.reduceActions[5] = function(t) {
                return new xt(t[0],t[2])
            }
            ,
            this.reduceActions[7] = function(t) {
                return new Ht(t[0],t[2])
            }
            ,
            this.reduceActions[8] = function(t) {
                return new jt(t[0],t[2])
            }
            ,
            this.reduceActions[10] = function(t) {
                return new Gt(t[0],t[2])
            }
            ,
            this.reduceActions[11] = function(t) {
                return new vt(t[0],t[2])
            }
            ,
            this.reduceActions[12] = function(t) {
                return new Xt(t[0],t[2])
            }
            ,
            this.reduceActions[13] = function(t) {
                return new Pt(t[0],t[2])
            }
            ,
            this.reduceActions[15] = function(t) {
                return new Lt(t[0],t[2])
            }
            ,
            this.reduceActions[16] = function(t) {
                return new Jt(t[0],t[2])
            }
            ,
            this.reduceActions[18] = function(t) {
                return new zt(t[0],t[2])
            }
            ,
            this.reduceActions[19] = function(t) {
                return new wt(t[0],t[2])
            }
            ,
            this.reduceActions[20] = function(t) {
                return new Yt(t[0],t[2])
            }
            ,
            this.reduceActions[22] = function(t) {
                return new St(t[1])
            }
            ,
            this.reduceActions[24] = function(t) {
                return new It(t[0],t[2])
            }
            ,
            this.reduceActions[25] = function(t) {
                return new X(void 0,void 0,t[0])
            }
            ,
            this.reduceActions[27] = function(t) {
                return t[0].locationPath = t[2],
                t[0]
            }
            ,
            this.reduceActions[28] = function(t) {
                return t[0].locationPath = t[2],
                t[0].locationPath.steps.unshift(new N(N.DESCENDANTORSELF,k.nodeTest,[])),
                t[0]
            }
            ,
            this.reduceActions[29] = function(t) {
                return new X(t[0],[],void 0)
            }
            ,
            this.reduceActions[30] = function(t) {
                return F.instance_of(t[0], X) ? (t[0].filterPredicates == null && (t[0].filterPredicates = []),
                t[0].filterPredicates.push(t[1]),
                t[0]) : new X(t[0],[t[1]],void 0)
            }
            ,
            this.reduceActions[32] = function(t) {
                return t[1]
            }
            ,
            this.reduceActions[33] = function(t) {
                return new W(t[0])
            }
            ,
            this.reduceActions[34] = function(t) {
                return new V(t[0])
            }
            ,
            this.reduceActions[36] = function(t) {
                return new $t(t[0],[])
            }
            ,
            this.reduceActions[37] = function(t) {
                return new $t(t[0],t[2])
            }
            ,
            this.reduceActions[38] = function(t) {
                return [t[0]]
            }
            ,
            this.reduceActions[39] = function(t) {
                return t[2].unshift(t[0]),
                t[2]
            }
            ,
            this.reduceActions[43] = function(t) {
                return new B(!0,[])
            }
            ,
            this.reduceActions[44] = function(t) {
                return t[1].absolute = !0,
                t[1]
            }
            ,
            this.reduceActions[46] = function(t) {
                return new B(!1,[t[0]])
            }
            ,
            this.reduceActions[47] = function(t) {
                return t[0].steps.push(t[2]),
                t[0]
            }
            ,
            this.reduceActions[49] = function(t) {
                return new N(t[0],t[1],[])
            }
            ,
            this.reduceActions[50] = function(t) {
                return new N(N.CHILD,t[0],[])
            }
            ,
            this.reduceActions[51] = function(t) {
                return new N(t[0],t[1],t[2])
            }
            ,
            this.reduceActions[52] = function(t) {
                return new N(N.CHILD,t[0],t[1])
            }
            ,
            this.reduceActions[54] = function(t) {
                return [t[0]]
            }
            ,
            this.reduceActions[55] = function(t) {
                return t[1].unshift(t[0]),
                t[1]
            }
            ,
            this.reduceActions[56] = function(t) {
                return t[0] == "ancestor" ? N.ANCESTOR : t[0] == "ancestor-or-self" ? N.ANCESTORORSELF : t[0] == "attribute" ? N.ATTRIBUTE : t[0] == "child" ? N.CHILD : t[0] == "descendant" ? N.DESCENDANT : t[0] == "descendant-or-self" ? N.DESCENDANTORSELF : t[0] == "following" ? N.FOLLOWING : t[0] == "following-sibling" ? N.FOLLOWINGSIBLING : t[0] == "namespace" ? N.NAMESPACE : t[0] == "parent" ? N.PARENT : t[0] == "preceding" ? N.PRECEDING : t[0] == "preceding-sibling" ? N.PRECEDINGSIBLING : t[0] == "self" ? N.SELF : -1
            }
            ,
            this.reduceActions[57] = function(t) {
                return N.ATTRIBUTE
            }
            ,
            this.reduceActions[59] = function(t) {
                return t[0] == "comment" ? k.commentTest : t[0] == "text" ? k.textTest : t[0] == "processing-instruction" ? k.anyPiTest : t[0] == "node" ? k.nodeTest : new k(-1,void 0)
            }
            ,
            this.reduceActions[60] = function(t) {
                return new k.PITest(t[2])
            }
            ,
            this.reduceActions[61] = function(t) {
                return t[1]
            }
            ,
            this.reduceActions[63] = function(t) {
                return t[1].absolute = !0,
                t[1].steps.unshift(new N(N.DESCENDANTORSELF,k.nodeTest,[])),
                t[1]
            }
            ,
            this.reduceActions[64] = function(t) {
                return t[0].steps.push(new N(N.DESCENDANTORSELF,k.nodeTest,[])),
                t[0].steps.push(t[2]),
                t[0]
            }
            ,
            this.reduceActions[65] = function(t) {
                return new N(N.SELF,k.nodeTest,[])
            }
            ,
            this.reduceActions[66] = function(t) {
                return new N(N.PARENT,k.nodeTest,[])
            }
            ,
            this.reduceActions[67] = function(t) {
                return new Bt(t[1])
            }
            ,
            this.reduceActions[68] = function(t) {
                return k.nameTestAny
            }
            ,
            this.reduceActions[69] = function(t) {
                return new k.NameTestPrefixAny(t[0].split(":")[0])
            }
            ,
            this.reduceActions[70] = function(t) {
                return new k.NameTestQName(t[0])
            }
        }
        ,
        v.actionTable = [" s s        sssssssss    s ss  s  ss", "                 s                  ", "r  rrrrrrrrr         rrrrrrr rr  r  ", "                rrrrr               ", " s s        sssssssss    s ss  s  ss", "rs  rrrrrrrr s  sssssrrrrrr  rrs rs ", " s s        sssssssss    s ss  s  ss", "                            s       ", "                            s       ", "r  rrrrrrrrr         rrrrrrr rr rr  ", "r  rrrrrrrrr         rrrrrrr rr rr  ", "r  rrrrrrrrr         rrrrrrr rr rr  ", "r  rrrrrrrrr         rrrrrrr rr rr  ", "r  rrrrrrrrr         rrrrrrr rr rr  ", "  s                                 ", "                            s       ", " s           s  sssss          s  s ", "r  rrrrrrrrr         rrrrrrr rr  r  ", "a                                   ", "r       s                    rr  r  ", "r      sr                    rr  r  ", "r   s  rr            s       rr  r  ", "r   rssrr            rss     rr  r  ", "r   rrrrr            rrrss   rr  r  ", "r   rrrrrsss         rrrrr   rr  r  ", "r   rrrrrrrr         rrrrr   rr  r  ", "r   rrrrrrrr         rrrrrs  rr  r  ", "r   rrrrrrrr         rrrrrr  rr  r  ", "r   rrrrrrrr         rrrrrr  rr  r  ", "r  srrrrrrrr         rrrrrrs rr sr  ", "r  srrrrrrrr         rrrrrrs rr  r  ", "r  rrrrrrrrr         rrrrrrr rr rr  ", "r  rrrrrrrrr         rrrrrrr rr rr  ", "r  rrrrrrrrr         rrrrrrr rr rr  ", "r   rrrrrrrr         rrrrrr  rr  r  ", "r   rrrrrrrr         rrrrrr  rr  r  ", "r  rrrrrrrrr         rrrrrrr rr  r  ", "r  rrrrrrrrr         rrrrrrr rr  r  ", "                sssss               ", "r  rrrrrrrrr         rrrrrrr rr sr  ", "r  rrrrrrrrr         rrrrrrr rr  r  ", "r  rrrrrrrrr         rrrrrrr rr rr  ", "r  rrrrrrrrr         rrrrrrr rr rr  ", "                             s      ", "r  srrrrrrrr         rrrrrrs rr  r  ", "r   rrrrrrrr         rrrrr   rr  r  ", "              s                     ", "                             s      ", "                rrrrr               ", " s s        sssssssss    s sss s  ss", "r  srrrrrrrr         rrrrrrs rr  r  ", " s s        sssssssss    s ss  s  ss", " s s        sssssssss    s ss  s  ss", " s s        sssssssss    s ss  s  ss", " s s        sssssssss    s ss  s  ss", " s s        sssssssss    s ss  s  ss", " s s        sssssssss    s ss  s  ss", " s s        sssssssss    s ss  s  ss", " s s        sssssssss    s ss  s  ss", " s s        sssssssss    s ss  s  ss", " s s        sssssssss    s ss  s  ss", " s s        sssssssss    s ss  s  ss", " s s        sssssssss    s ss  s  ss", " s s        sssssssss    s ss  s  ss", " s s        sssssssss      ss  s  ss", " s s        sssssssss    s ss  s  ss", " s           s  sssss          s  s ", " s           s  sssss          s  s ", "r  rrrrrrrrr         rrrrrrr rr rr  ", " s           s  sssss          s  s ", " s           s  sssss          s  s ", "r  rrrrrrrrr         rrrrrrr rr sr  ", "r  rrrrrrrrr         rrrrrrr rr sr  ", "r  rrrrrrrrr         rrrrrrr rr  r  ", "r  rrrrrrrrr         rrrrrrr rr rr  ", "                             s      ", "r  rrrrrrrrr         rrrrrrr rr rr  ", "r  rrrrrrrrr         rrrrrrr rr rr  ", "                             rr     ", "                             s      ", "                             rs     ", "r      sr                    rr  r  ", "r   s  rr            s       rr  r  ", "r   rssrr            rss     rr  r  ", "r   rssrr            rss     rr  r  ", "r   rrrrr            rrrss   rr  r  ", "r   rrrrr            rrrss   rr  r  ", "r   rrrrr            rrrss   rr  r  ", "r   rrrrr            rrrss   rr  r  ", "r   rrrrrsss         rrrrr   rr  r  ", "r   rrrrrsss         rrrrr   rr  r  ", "r   rrrrrrrr         rrrrr   rr  r  ", "r   rrrrrrrr         rrrrr   rr  r  ", "r   rrrrrrrr         rrrrr   rr  r  ", "r   rrrrrrrr         rrrrrr  rr  r  ", "                                 r  ", "                                 s  ", "r  srrrrrrrr         rrrrrrs rr  r  ", "r  srrrrrrrr         rrrrrrs rr  r  ", "r  rrrrrrrrr         rrrrrrr rr  r  ", "r  rrrrrrrrr         rrrrrrr rr  r  ", "r  rrrrrrrrr         rrrrrrr rr  r  ", "r  rrrrrrrrr         rrrrrrr rr  r  ", "r  rrrrrrrrr         rrrrrrr rr rr  ", "r  rrrrrrrrr         rrrrrrr rr rr  ", " s s        sssssssss    s ss  s  ss", "r  rrrrrrrrr         rrrrrrr rr rr  ", "                             r      "],
        v.actionTableNumber = [` 1 0        /.-,+*)('    & %$  #  "!`, "                 J                  ", "a  aaaaaaaaa         aaaaaaa aa  a  ", "                YYYYY               ", ` 1 0        /.-,+*)('    & %$  #  "!`, `K1  KKKKKKKK .  +*)('KKKKKK  KK# K" `, ` 1 0        /.-,+*)('    & %$  #  "!`, "                            N       ", "                            O       ", "e  eeeeeeeee         eeeeeee ee ee  ", "f  fffffffff         fffffff ff ff  ", "d  ddddddddd         ddddddd dd dd  ", "B  BBBBBBBBB         BBBBBBB BB BB  ", "A  AAAAAAAAA         AAAAAAA AA AA  ", "  P                                 ", "                            Q       ", ` 1           .  +*)('          #  " `, "b  bbbbbbbbb         bbbbbbb bb  b  ", "                                    ", "!       S                    !!  !  ", '"      T"                    ""  "  ', "$   V  $$            U       $$  $  ", "&   &ZY&&            &XW     &&  &  ", ")   )))))            )))\\[   ))  )  ", ".   ....._^]         .....   ..  .  ", "1   11111111         11111   11  1  ", "5   55555555         55555`  55  5  ", "7   77777777         777777  77  7  ", "9   99999999         999999  99  9  ", ":  c::::::::         ::::::b :: a:  ", "I  fIIIIIIII         IIIIIIe II  I  ", "=  =========         ======= == ==  ", "?  ?????????         ??????? ?? ??  ", "C  CCCCCCCCC         CCCCCCC CC CC  ", "J   JJJJJJJJ         JJJJJJ  JJ  J  ", "M   MMMMMMMM         MMMMMM  MM  M  ", "N  NNNNNNNNN         NNNNNNN NN  N  ", "P  PPPPPPPPP         PPPPPPP PP  P  ", "                +*)('               ", "R  RRRRRRRRR         RRRRRRR RR aR  ", "U  UUUUUUUUU         UUUUUUU UU  U  ", "Z  ZZZZZZZZZ         ZZZZZZZ ZZ ZZ  ", "c  ccccccccc         ccccccc cc cc  ", "                             j      ", "L  fLLLLLLLL         LLLLLLe LL  L  ", "6   66666666         66666   66  6  ", "              k                     ", "                             l      ", "                XXXXX               ", ` 1 0        /.-,+*)('    & %$m #  "!`, "_  f________         ______e __  _  ", ` 1 0        /.-,+*)('    & %$  #  "!`, ` 1 0        /.-,+*)('    & %$  #  "!`, ` 1 0        /.-,+*)('    & %$  #  "!`, ` 1 0        /.-,+*)('    & %$  #  "!`, ` 1 0        /.-,+*)('    & %$  #  "!`, ` 1 0        /.-,+*)('    & %$  #  "!`, ` 1 0        /.-,+*)('    & %$  #  "!`, ` 1 0        /.-,+*)('    & %$  #  "!`, ` 1 0        /.-,+*)('    & %$  #  "!`, ` 1 0        /.-,+*)('    & %$  #  "!`, ` 1 0        /.-,+*)('    & %$  #  "!`, ` 1 0        /.-,+*)('    & %$  #  "!`, ` 1 0        /.-,+*)('    & %$  #  "!`, ` 1 0        /.-,+*)('      %$  #  "!`, ` 1 0        /.-,+*)('    & %$  #  "!`, ` 1           .  +*)('          #  " `, ` 1           .  +*)('          #  " `, ">  >>>>>>>>>         >>>>>>> >> >>  ", ` 1           .  +*)('          #  " `, ` 1           .  +*)('          #  " `, "Q  QQQQQQQQQ         QQQQQQQ QQ aQ  ", "V  VVVVVVVVV         VVVVVVV VV aV  ", "T  TTTTTTTTT         TTTTTTT TT  T  ", "@  @@@@@@@@@         @@@@@@@ @@ @@  ", "                                   ", "[  [[[[[[[[[         [[[[[[[ [[ [[  ", "D  DDDDDDDDD         DDDDDDD DD DD  ", "                             HH     ", "                                   ", "                             F     ", "#      T#                    ##  #  ", "%   V  %%            U       %%  %  ", "'   'ZY''            'XW     ''  '  ", "(   (ZY((            (XW     ((  (  ", "+   +++++            +++\\[   ++  +  ", "*   *****            ***\\[   **  *  ", "-   -----            ---\\[   --  -  ", ",   ,,,,,            ,,,\\[   ,,  ,  ", "0   00000_^]         00000   00  0  ", "/   /////_^]         /////   //  /  ", "2   22222222         22222   22  2  ", "3   33333333         33333   33  3  ", "4   44444444         44444   44  4  ", "8   88888888         888888  88  8  ", "                                 ^  ", "                                   ", ";  f;;;;;;;;         ;;;;;;e ;;  ;  ", "<  f<<<<<<<<         <<<<<<e <<  <  ", "O  OOOOOOOOO         OOOOOOO OO  O  ", "`  `````````         ``````` ``  `  ", "S  SSSSSSSSS         SSSSSSS SS  S  ", "W  WWWWWWWWW         WWWWWWW WW  W  ", "\\  \\\\\\\\\\\\\\\\\\         \\\\\\\\\\\\\\ \\\\ \\\\  ", "E  EEEEEEEEE         EEEEEEE EE EE  ", ` 1 0        /.-,+*)('    & %$  #  "!`, "]  ]]]]]]]]]         ]]]]]]] ]] ]]  ", "                             G      "],
        v.gotoTable = ["3456789:;<=>?@ AB  CDEFGH IJ ", "                             ", "                             ", "                             ", "L456789:;<=>?@ AB  CDEFGH IJ ", "            M        EFGH IJ ", "       N;<=>?@ AB  CDEFGH IJ ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "            S        EFGH IJ ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "              e              ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                        h  J ", "              i          j   ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "o456789:;<=>?@ ABpqCDEFGH IJ ", "                             ", "  r6789:;<=>?@ AB  CDEFGH IJ ", "   s789:;<=>?@ AB  CDEFGH IJ ", "    t89:;<=>?@ AB  CDEFGH IJ ", "    u89:;<=>?@ AB  CDEFGH IJ ", "     v9:;<=>?@ AB  CDEFGH IJ ", "     w9:;<=>?@ AB  CDEFGH IJ ", "     x9:;<=>?@ AB  CDEFGH IJ ", "     y9:;<=>?@ AB  CDEFGH IJ ", "      z:;<=>?@ AB  CDEFGH IJ ", "      {:;<=>?@ AB  CDEFGH IJ ", "       |;<=>?@ AB  CDEFGH IJ ", "       };<=>?@ AB  CDEFGH IJ ", "       ~;<=>?@ AB  CDEFGH IJ ", "         =>?@ AB  CDEFGH IJ ", "456789:;<=>?@ AB  CDEFGH IJ", "                    EFGH IJ ", "                    EFGH IJ ", "                             ", "                      GH IJ ", "                      GH IJ ", "              i             ", "              i             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "o456789:;<=>?@ ABqCDEFGH IJ ", "                             ", "                             "],
        v.productions = [[1, 1, 2], [2, 1, 3], [3, 1, 4], [3, 3, 3, -9, 4], [4, 1, 5], [4, 3, 4, -8, 5], [5, 1, 6], [5, 3, 5, -22, 6], [5, 3, 5, -5, 6], [6, 1, 7], [6, 3, 6, -23, 7], [6, 3, 6, -24, 7], [6, 3, 6, -6, 7], [6, 3, 6, -7, 7], [7, 1, 8], [7, 3, 7, -25, 8], [7, 3, 7, -26, 8], [8, 1, 9], [8, 3, 8, -12, 9], [8, 3, 8, -11, 9], [8, 3, 8, -10, 9], [9, 1, 10], [9, 2, -26, 9], [10, 1, 11], [10, 3, 10, -27, 11], [11, 1, 12], [11, 1, 13], [11, 3, 13, -28, 14], [11, 3, 13, -4, 14], [13, 1, 15], [13, 2, 13, 16], [15, 1, 17], [15, 3, -29, 2, -30], [15, 1, -15], [15, 1, -16], [15, 1, 18], [18, 3, -13, -29, -30], [18, 4, -13, -29, 19, -30], [19, 1, 20], [19, 3, 20, -31, 19], [20, 1, 2], [12, 1, 14], [12, 1, 21], [21, 1, -28], [21, 2, -28, 14], [21, 1, 22], [14, 1, 23], [14, 3, 14, -28, 23], [14, 1, 24], [23, 2, 25, 26], [23, 1, 26], [23, 3, 25, 26, 27], [23, 2, 26, 27], [23, 1, 28], [27, 1, 16], [27, 2, 16, 27], [25, 2, -14, -3], [25, 1, -32], [26, 1, 29], [26, 3, -20, -29, -30], [26, 4, -21, -29, -15, -30], [16, 3, -33, 30, -34], [30, 1, 2], [22, 2, -4, 14], [24, 3, 14, -4, 23], [28, 1, -35], [28, 1, -2], [17, 2, -36, -18], [29, 1, -17], [29, 1, -19], [29, 1, -18]],
        v.DOUBLEDOT = 2,
        v.DOUBLECOLON = 3,
        v.DOUBLESLASH = 4,
        v.NOTEQUAL = 5,
        v.LESSTHANOREQUAL = 6,
        v.GREATERTHANOREQUAL = 7,
        v.AND = 8,
        v.OR = 9,
        v.MOD = 10,
        v.DIV = 11,
        v.MULTIPLYOPERATOR = 12,
        v.FUNCTIONNAME = 13,
        v.AXISNAME = 14,
        v.LITERAL = 15,
        v.NUMBER = 16,
        v.ASTERISKNAMETEST = 17,
        v.QNAME = 18,
        v.NCNAMECOLONASTERISK = 19,
        v.NODETYPE = 20,
        v.PROCESSINGINSTRUCTIONWITHLITERAL = 21,
        v.EQUALS = 22,
        v.LESSTHAN = 23,
        v.GREATERTHAN = 24,
        v.PLUS = 25,
        v.MINUS = 26,
        v.BAR = 27,
        v.SLASH = 28,
        v.LEFTPARENTHESIS = 29,
        v.RIGHTPARENTHESIS = 30,
        v.COMMA = 31,
        v.AT = 32,
        v.LEFTBRACKET = 33,
        v.RIGHTBRACKET = 34,
        v.DOT = 35,
        v.DOLLAR = 36,
        v.prototype.tokenize = function(t) {
            for (var i = [], c = [], m = t + "\0", f = 0, y = m.charAt(f++); ; ) {
                for (; y == " " || y == "	" || y == "\r" || y == `
`; )
                    y = m.charAt(f++);
                if (y == "\0" || f >= m.length)
                    break;
                if (y == "(") {
                    i.push(v.LEFTPARENTHESIS),
                    c.push(y),
                    y = m.charAt(f++);
                    continue
                }
                if (y == ")") {
                    i.push(v.RIGHTPARENTHESIS),
                    c.push(y),
                    y = m.charAt(f++);
                    continue
                }
                if (y == "[") {
                    i.push(v.LEFTBRACKET),
                    c.push(y),
                    y = m.charAt(f++);
                    continue
                }
                if (y == "]") {
                    i.push(v.RIGHTBRACKET),
                    c.push(y),
                    y = m.charAt(f++);
                    continue
                }
                if (y == "@") {
                    i.push(v.AT),
                    c.push(y),
                    y = m.charAt(f++);
                    continue
                }
                if (y == ",") {
                    i.push(v.COMMA),
                    c.push(y),
                    y = m.charAt(f++);
                    continue
                }
                if (y == "|") {
                    i.push(v.BAR),
                    c.push(y),
                    y = m.charAt(f++);
                    continue
                }
                if (y == "+") {
                    i.push(v.PLUS),
                    c.push(y),
                    y = m.charAt(f++);
                    continue
                }
                if (y == "-") {
                    i.push(v.MINUS),
                    c.push(y),
                    y = m.charAt(f++);
                    continue
                }
                if (y == "=") {
                    i.push(v.EQUALS),
                    c.push(y),
                    y = m.charAt(f++);
                    continue
                }
                if (y == "$") {
                    i.push(v.DOLLAR),
                    c.push(y),
                    y = m.charAt(f++);
                    continue
                }
                if (y == ".") {
                    if (y = m.charAt(f++),
                    y == ".") {
                        i.push(v.DOUBLEDOT),
                        c.push(".."),
                        y = m.charAt(f++);
                        continue
                    }
                    if (y >= "0" && y <= "9") {
                        var C = "." + y;
                        for (y = m.charAt(f++); y >= "0" && y <= "9"; )
                            C += y,
                            y = m.charAt(f++);
                        i.push(v.NUMBER),
                        c.push(C);
                        continue
                    }
                    i.push(v.DOT),
                    c.push(".");
                    continue
                }
                if (y == "'" || y == '"') {
                    for (var Q = y, nt = ""; f < m.length && (y = m.charAt(f)) !== Q; )
                        nt += y,
                        f += 1;
                    if (y !== Q)
                        throw Wt.fromMessage("Unterminated string literal: " + Q + nt);
                    f += 1,
                    i.push(v.LITERAL),
                    c.push(nt),
                    y = m.charAt(f++);
                    continue
                }
                if (y >= "0" && y <= "9") {
                    var C = y;
                    for (y = m.charAt(f++); y >= "0" && y <= "9"; )
                        C += y,
                        y = m.charAt(f++);
                    if (y == "." && m.charAt(f) >= "0" && m.charAt(f) <= "9")
                        for (C += y,
                        C += m.charAt(f++),
                        y = m.charAt(f++); y >= "0" && y <= "9"; )
                            C += y,
                            y = m.charAt(f++);
                    i.push(v.NUMBER),
                    c.push(C);
                    continue
                }
                if (y == "*") {
                    if (i.length > 0) {
                        var D = i[i.length - 1];
                        if (D != v.AT && D != v.DOUBLECOLON && D != v.LEFTPARENTHESIS && D != v.LEFTBRACKET && D != v.AND && D != v.OR && D != v.MOD && D != v.DIV && D != v.MULTIPLYOPERATOR && D != v.SLASH && D != v.DOUBLESLASH && D != v.BAR && D != v.PLUS && D != v.MINUS && D != v.EQUALS && D != v.NOTEQUAL && D != v.LESSTHAN && D != v.LESSTHANOREQUAL && D != v.GREATERTHAN && D != v.GREATERTHANOREQUAL) {
                            i.push(v.MULTIPLYOPERATOR),
                            c.push(y),
                            y = m.charAt(f++);
                            continue
                        }
                    }
                    i.push(v.ASTERISKNAMETEST),
                    c.push(y),
                    y = m.charAt(f++);
                    continue
                }
                if (y == ":" && m.charAt(f) == ":") {
                    i.push(v.DOUBLECOLON),
                    c.push("::"),
                    f++,
                    y = m.charAt(f++);
                    continue
                }
                if (y == "/") {
                    if (y = m.charAt(f++),
                    y == "/") {
                        i.push(v.DOUBLESLASH),
                        c.push("//"),
                        y = m.charAt(f++);
                        continue
                    }
                    i.push(v.SLASH),
                    c.push("/");
                    continue
                }
                if (y == "!" && m.charAt(f) == "=") {
                    i.push(v.NOTEQUAL),
                    c.push("!="),
                    f++,
                    y = m.charAt(f++);
                    continue
                }
                if (y == "<") {
                    if (m.charAt(f) == "=") {
                        i.push(v.LESSTHANOREQUAL),
                        c.push("<="),
                        f++,
                        y = m.charAt(f++);
                        continue
                    }
                    i.push(v.LESSTHAN),
                    c.push("<"),
                    y = m.charAt(f++);
                    continue
                }
                if (y == ">") {
                    if (m.charAt(f) == "=") {
                        i.push(v.GREATERTHANOREQUAL),
                        c.push(">="),
                        f++,
                        y = m.charAt(f++);
                        continue
                    }
                    i.push(v.GREATERTHAN),
                    c.push(">"),
                    y = m.charAt(f++);
                    continue
                }
                if (y == "_" || F.isLetter(y.charCodeAt(0))) {
                    var G = y;
                    for (y = m.charAt(f++); F.isNCNameChar(y.charCodeAt(0)); )
                        G += y,
                        y = m.charAt(f++);
                    if (i.length > 0) {
                        var D = i[i.length - 1];
                        if (D != v.AT && D != v.DOUBLECOLON && D != v.LEFTPARENTHESIS && D != v.LEFTBRACKET && D != v.AND && D != v.OR && D != v.MOD && D != v.DIV && D != v.MULTIPLYOPERATOR && D != v.SLASH && D != v.DOUBLESLASH && D != v.BAR && D != v.PLUS && D != v.MINUS && D != v.EQUALS && D != v.NOTEQUAL && D != v.LESSTHAN && D != v.LESSTHANOREQUAL && D != v.GREATERTHAN && D != v.GREATERTHANOREQUAL) {
                            if (G == "and") {
                                i.push(v.AND),
                                c.push(G);
                                continue
                            }
                            if (G == "or") {
                                i.push(v.OR),
                                c.push(G);
                                continue
                            }
                            if (G == "mod") {
                                i.push(v.MOD),
                                c.push(G);
                                continue
                            }
                            if (G == "div") {
                                i.push(v.DIV),
                                c.push(G);
                                continue
                            }
                        }
                    }
                    if (y == ":") {
                        if (m.charAt(f) == "*") {
                            i.push(v.NCNAMECOLONASTERISK),
                            c.push(G + ":*"),
                            f++,
                            y = m.charAt(f++);
                            continue
                        }
                        if (m.charAt(f) == "_" || F.isLetter(m.charCodeAt(f))) {
                            for (G += ":",
                            y = m.charAt(f++); F.isNCNameChar(y.charCodeAt(0)); )
                                G += y,
                                y = m.charAt(f++);
                            if (y == "(") {
                                i.push(v.FUNCTIONNAME),
                                c.push(G);
                                continue
                            }
                            i.push(v.QNAME),
                            c.push(G);
                            continue
                        }
                        if (m.charAt(f) == ":") {
                            i.push(v.AXISNAME),
                            c.push(G);
                            continue
                        }
                    }
                    if (y == "(") {
                        if (G == "comment" || G == "text" || G == "node") {
                            i.push(v.NODETYPE),
                            c.push(G);
                            continue
                        }
                        if (G == "processing-instruction") {
                            m.charAt(f) == ")" ? i.push(v.NODETYPE) : i.push(v.PROCESSINGINSTRUCTIONWITHLITERAL),
                            c.push(G);
                            continue
                        }
                        i.push(v.FUNCTIONNAME),
                        c.push(G);
                        continue
                    }
                    i.push(v.QNAME),
                    c.push(G);
                    continue
                }
                throw new Error("Unexpected character " + y)
            }
            return i.push(1),
            c.push("[EOF]"),
            [i, c]
        }
        ,
        v.SHIFT = "s",
        v.REDUCE = "r",
        v.ACCEPT = "a",
        v.prototype.parse = function(nt) {
            var i, c, m = this.tokenize(nt);
            if (m != null) {
                i = m[0],
                c = m[1];
                var f = 0, y = [], C = [], Q = [], nt, D, G;
                for (y.push(0),
                C.push(1),
                Q.push("_S"),
                D = i[f],
                G = c[f++]; ; )
                    switch (nt = y[y.length - 1],
                    v.actionTable[nt].charAt(D - 1)) {
                    case v.SHIFT:
                        C.push(-D),
                        Q.push(G),
                        y.push(v.actionTableNumber[nt].charCodeAt(D - 1) - 32),
                        D = i[f],
                        G = c[f++];
                        break;
                    case v.REDUCE:
                        for (var kt = v.productions[v.actionTableNumber[nt].charCodeAt(D - 1) - 32][1], _ = [], ae = 0; ae < kt; ae++)
                            C.pop(),
                            _.unshift(Q.pop()),
                            y.pop();
                        var ue = y[y.length - 1];
                        C.push(v.productions[v.actionTableNumber[nt].charCodeAt(D - 1) - 32][0]),
                        this.reduceActions[v.actionTableNumber[nt].charCodeAt(D - 1) - 32] == null ? Q.push(_[0]) : Q.push(this.reduceActions[v.actionTableNumber[nt].charCodeAt(D - 1) - 32](_)),
                        y.push(v.gotoTable[ue].charCodeAt(v.productions[v.actionTableNumber[nt].charCodeAt(D - 1) - 32][0] - 2) - 33);
                        break;
                    case v.ACCEPT:
                        return new tt(Q.pop());
                    default:
                        throw new Error("XPath parse error")
                    }
            }
        }
        ,
        tt.prototype = new Object,
        tt.prototype.constructor = tt,
        tt.superclass = Object.prototype;
        function tt(t) {
            this.expression = t
        }
        tt.prototype.toString = function() {
            return this.expression.toString()
        }
        ;
        function Rt(t, i, c) {
            i in t || (t[i] = c)
        }
        tt.prototype.evaluate = function(t) {
            return t.contextNode = t.expressionContextNode,
            t.contextSize = 1,
            t.contextPosition = 1,
            t.isHtml && (Rt(t, "caseInsensitive", !0),
            Rt(t, "allowAnyNamespaceForNoPrefix", !0)),
            Rt(t, "caseInsensitive", !1),
            this.expression.evaluate(t)
        }
        ,
        tt.XML_NAMESPACE_URI = "http://www.w3.org/XML/1998/namespace",
        tt.XMLNS_NAMESPACE_URI = "http://www.w3.org/2000/xmlns/",
        rt.prototype = new Object,
        rt.prototype.constructor = rt,
        rt.superclass = Object.prototype;
        function rt() {}
        rt.prototype.init = function() {}
        ,
        rt.prototype.toString = function() {
            return "<Expression>"
        }
        ,
        rt.prototype.evaluate = function(t) {
            throw new Error("Could not evaluate expression.")
        }
        ,
        At.prototype = new rt,
        At.prototype.constructor = At,
        At.superclass = rt.prototype;
        function At(t) {
            arguments.length > 0 && this.init(t)
        }
        At.prototype.init = function(t) {
            this.rhs = t
        }
        ,
        St.prototype = new At,
        St.prototype.constructor = St,
        St.superclass = At.prototype;
        function St(t) {
            arguments.length > 0 && this.init(t)
        }
        St.prototype.init = function(t) {
            St.superclass.init.call(this, t)
        }
        ,
        St.prototype.evaluate = function(t) {
            return this.rhs.evaluate(t).number().negate()
        }
        ,
        St.prototype.toString = function() {
            return "-" + this.rhs.toString()
        }
        ,
        j.prototype = new rt,
        j.prototype.constructor = j,
        j.superclass = rt.prototype;
        function j(t, i) {
            arguments.length > 0 && this.init(t, i)
        }
        j.prototype.init = function(t, i) {
            this.lhs = t,
            this.rhs = i
        }
        ,
        Vt.prototype = new j,
        Vt.prototype.constructor = Vt,
        Vt.superclass = j.prototype;
        function Vt(t, i) {
            arguments.length > 0 && this.init(t, i)
        }
        Vt.prototype.init = function(t, i) {
            Vt.superclass.init.call(this, t, i)
        }
        ,
        Vt.prototype.toString = function() {
            return "(" + this.lhs.toString() + " or " + this.rhs.toString() + ")"
        }
        ,
        Vt.prototype.evaluate = function(t) {
            var i = this.lhs.evaluate(t).bool();
            return i.booleanValue() ? i : this.rhs.evaluate(t).bool()
        }
        ,
        xt.prototype = new j,
        xt.prototype.constructor = xt,
        xt.superclass = j.prototype;
        function xt(t, i) {
            arguments.length > 0 && this.init(t, i)
        }
        xt.prototype.init = function(t, i) {
            xt.superclass.init.call(this, t, i)
        }
        ,
        xt.prototype.toString = function() {
            return "(" + this.lhs.toString() + " and " + this.rhs.toString() + ")"
        }
        ,
        xt.prototype.evaluate = function(t) {
            var i = this.lhs.evaluate(t).bool();
            return i.booleanValue() ? this.rhs.evaluate(t).bool() : i
        }
        ,
        Ht.prototype = new j,
        Ht.prototype.constructor = Ht,
        Ht.superclass = j.prototype;
        function Ht(t, i) {
            arguments.length > 0 && this.init(t, i)
        }
        Ht.prototype.init = function(t, i) {
            Ht.superclass.init.call(this, t, i)
        }
        ,
        Ht.prototype.toString = function() {
            return "(" + this.lhs.toString() + " = " + this.rhs.toString() + ")"
        }
        ,
        Ht.prototype.evaluate = function(t) {
            return this.lhs.evaluate(t).equals(this.rhs.evaluate(t))
        }
        ,
        jt.prototype = new j,
        jt.prototype.constructor = jt,
        jt.superclass = j.prototype;
        function jt(t, i) {
            arguments.length > 0 && this.init(t, i)
        }
        jt.prototype.init = function(t, i) {
            jt.superclass.init.call(this, t, i)
        }
        ,
        jt.prototype.toString = function() {
            return "(" + this.lhs.toString() + " != " + this.rhs.toString() + ")"
        }
        ,
        jt.prototype.evaluate = function(t) {
            return this.lhs.evaluate(t).notequal(this.rhs.evaluate(t))
        }
        ,
        Gt.prototype = new j,
        Gt.prototype.constructor = Gt,
        Gt.superclass = j.prototype;
        function Gt(t, i) {
            arguments.length > 0 && this.init(t, i)
        }
        Gt.prototype.init = function(t, i) {
            Gt.superclass.init.call(this, t, i)
        }
        ,
        Gt.prototype.evaluate = function(t) {
            return this.lhs.evaluate(t).lessthan(this.rhs.evaluate(t))
        }
        ,
        Gt.prototype.toString = function() {
            return "(" + this.lhs.toString() + " < " + this.rhs.toString() + ")"
        }
        ,
        vt.prototype = new j,
        vt.prototype.constructor = vt,
        vt.superclass = j.prototype;
        function vt(t, i) {
            arguments.length > 0 && this.init(t, i)
        }
        vt.prototype.init = function(t, i) {
            vt.superclass.init.call(this, t, i)
        }
        ,
        vt.prototype.evaluate = function(t) {
            return this.lhs.evaluate(t).greaterthan(this.rhs.evaluate(t))
        }
        ,
        vt.prototype.toString = function() {
            return "(" + this.lhs.toString() + " > " + this.rhs.toString() + ")"
        }
        ,
        Xt.prototype = new j,
        Xt.prototype.constructor = Xt,
        Xt.superclass = j.prototype;
        function Xt(t, i) {
            arguments.length > 0 && this.init(t, i)
        }
        Xt.prototype.init = function(t, i) {
            Xt.superclass.init.call(this, t, i)
        }
        ,
        Xt.prototype.evaluate = function(t) {
            return this.lhs.evaluate(t).lessthanorequal(this.rhs.evaluate(t))
        }
        ,
        Xt.prototype.toString = function() {
            return "(" + this.lhs.toString() + " <= " + this.rhs.toString() + ")"
        }
        ,
        Pt.prototype = new j,
        Pt.prototype.constructor = Pt,
        Pt.superclass = j.prototype;
        function Pt(t, i) {
            arguments.length > 0 && this.init(t, i)
        }
        Pt.prototype.init = function(t, i) {
            Pt.superclass.init.call(this, t, i)
        }
        ,
        Pt.prototype.evaluate = function(t) {
            return this.lhs.evaluate(t).greaterthanorequal(this.rhs.evaluate(t))
        }
        ,
        Pt.prototype.toString = function() {
            return "(" + this.lhs.toString() + " >= " + this.rhs.toString() + ")"
        }
        ,
        Lt.prototype = new j,
        Lt.prototype.constructor = Lt,
        Lt.superclass = j.prototype;
        function Lt(t, i) {
            arguments.length > 0 && this.init(t, i)
        }
        Lt.prototype.init = function(t, i) {
            Lt.superclass.init.call(this, t, i)
        }
        ,
        Lt.prototype.evaluate = function(t) {
            return this.lhs.evaluate(t).number().plus(this.rhs.evaluate(t).number())
        }
        ,
        Lt.prototype.toString = function() {
            return "(" + this.lhs.toString() + " + " + this.rhs.toString() + ")"
        }
        ,
        Jt.prototype = new j,
        Jt.prototype.constructor = Jt,
        Jt.superclass = j.prototype;
        function Jt(t, i) {
            arguments.length > 0 && this.init(t, i)
        }
        Jt.prototype.init = function(t, i) {
            Jt.superclass.init.call(this, t, i)
        }
        ,
        Jt.prototype.evaluate = function(t) {
            return this.lhs.evaluate(t).number().minus(this.rhs.evaluate(t).number())
        }
        ,
        Jt.prototype.toString = function() {
            return "(" + this.lhs.toString() + " - " + this.rhs.toString() + ")"
        }
        ,
        zt.prototype = new j,
        zt.prototype.constructor = zt,
        zt.superclass = j.prototype;
        function zt(t, i) {
            arguments.length > 0 && this.init(t, i)
        }
        zt.prototype.init = function(t, i) {
            zt.superclass.init.call(this, t, i)
        }
        ,
        zt.prototype.evaluate = function(t) {
            return this.lhs.evaluate(t).number().multiply(this.rhs.evaluate(t).number())
        }
        ,
        zt.prototype.toString = function() {
            return "(" + this.lhs.toString() + " * " + this.rhs.toString() + ")"
        }
        ,
        wt.prototype = new j,
        wt.prototype.constructor = wt,
        wt.superclass = j.prototype;
        function wt(t, i) {
            arguments.length > 0 && this.init(t, i)
        }
        wt.prototype.init = function(t, i) {
            wt.superclass.init.call(this, t, i)
        }
        ,
        wt.prototype.evaluate = function(t) {
            return this.lhs.evaluate(t).number().div(this.rhs.evaluate(t).number())
        }
        ,
        wt.prototype.toString = function() {
            return "(" + this.lhs.toString() + " div " + this.rhs.toString() + ")"
        }
        ,
        Yt.prototype = new j,
        Yt.prototype.constructor = Yt,
        Yt.superclass = j.prototype;
        function Yt(t, i) {
            arguments.length > 0 && this.init(t, i)
        }
        Yt.prototype.init = function(t, i) {
            Yt.superclass.init.call(this, t, i)
        }
        ,
        Yt.prototype.evaluate = function(t) {
            return this.lhs.evaluate(t).number().mod(this.rhs.evaluate(t).number())
        }
        ,
        Yt.prototype.toString = function() {
            return "(" + this.lhs.toString() + " mod " + this.rhs.toString() + ")"
        }
        ,
        It.prototype = new j,
        It.prototype.constructor = It,
        It.superclass = j.prototype;
        function It(t, i) {
            arguments.length > 0 && this.init(t, i)
        }
        It.prototype.init = function(t, i) {
            It.superclass.init.call(this, t, i)
        }
        ,
        It.prototype.evaluate = function(t) {
            return this.lhs.evaluate(t).nodeset().union(this.rhs.evaluate(t).nodeset())
        }
        ,
        It.prototype.toString = function() {
            return x(M, [this.lhs, this.rhs]).join(" | ")
        }
        ,
        X.prototype = new rt,
        X.prototype.constructor = X,
        X.superclass = rt.prototype;
        function X(t, i, c) {
            arguments.length > 0 && this.init(t, i, c)
        }
        X.prototype.init = function(t, i, c) {
            X.superclass.init.call(this),
            this.filter = t,
            this.filterPredicates = i,
            this.locationPath = c
        }
        ;
        function we(t) {
            for (; t && t.parentNode; )
                t = t.parentNode;
            return t
        }
        X.applyPredicates = function(t, i, c) {
            return p(function(m, f) {
                var y = i.extend({
                    contextSize: m.length
                });
                return S(function(C, Q) {
                    return X.predicateMatches(f, y.extend({
                        contextNode: C,
                        contextPosition: Q + 1
                    }))
                }, m)
            }, c, t)
        }
        ,
        X.getRoot = function(t, i) {
            var c = i[0];
            if (c.nodeType === 9)
                return c;
            if (t.virtualRoot)
                return t.virtualRoot;
            var m = c.ownerDocument;
            if (m)
                return m;
            for (var f = c; f.parentNode != null; )
                f = f.parentNode;
            return f
        }
        ,
        X.applyStep = function(t, i, c) {
            var m = [];
            switch (i.contextNode = c,
            t.axis) {
            case N.ANCESTOR:
                if (i.contextNode === i.virtualRoot)
                    break;
                var f;
                for (i.contextNode.nodeType == 2 ? f = X.getOwnerElement(i.contextNode) : f = i.contextNode.parentNode; f != null && (t.nodeTest.matches(f, i) && m.push(f),
                f !== i.virtualRoot); )
                    f = f.parentNode;
                break;
            case N.ANCESTORORSELF:
                for (var f = i.contextNode; f != null && (t.nodeTest.matches(f, i) && m.push(f),
                f !== i.virtualRoot); f = f.nodeType == 2 ? X.getOwnerElement(f) : f.parentNode)
                    ;
                break;
            case N.ATTRIBUTE:
                var y = i.contextNode.attributes;
                if (y != null)
                    for (var C = 0; C < y.length; C++) {
                        var f = y.item(C);
                        t.nodeTest.matches(f, i) && m.push(f)
                    }
                break;
            case N.CHILD:
                for (var f = i.contextNode.firstChild; f != null; f = f.nextSibling)
                    t.nodeTest.matches(f, i) && m.push(f);
                break;
            case N.DESCENDANT:
                for (var _ = [i.contextNode.firstChild]; _.length > 0; )
                    for (var f = _.pop(); f != null; )
                        t.nodeTest.matches(f, i) && m.push(f),
                        f.firstChild != null ? (_.push(f.nextSibling),
                        f = f.firstChild) : f = f.nextSibling;
                break;
            case N.DESCENDANTORSELF:
                t.nodeTest.matches(i.contextNode, i) && m.push(i.contextNode);
                for (var _ = [i.contextNode.firstChild]; _.length > 0; )
                    for (var f = _.pop(); f != null; )
                        t.nodeTest.matches(f, i) && m.push(f),
                        f.firstChild != null ? (_.push(f.nextSibling),
                        f = f.firstChild) : f = f.nextSibling;
                break;
            case N.FOLLOWING:
                if (i.contextNode === i.virtualRoot)
                    break;
                var _ = [];
                i.contextNode.firstChild != null ? _.unshift(i.contextNode.firstChild) : _.unshift(i.contextNode.nextSibling);
                for (var f = i.contextNode.parentNode; f != null && f.nodeType != 9 && f !== i.virtualRoot; f = f.parentNode)
                    _.unshift(f.nextSibling);
                do
                    for (var f = _.pop(); f != null; )
                        t.nodeTest.matches(f, i) && m.push(f),
                        f.firstChild != null ? (_.push(f.nextSibling),
                        f = f.firstChild) : f = f.nextSibling;
                while (_.length > 0);
                break;
            case N.FOLLOWINGSIBLING:
                if (i.contextNode === i.virtualRoot)
                    break;
                for (var f = i.contextNode.nextSibling; f != null; f = f.nextSibling)
                    t.nodeTest.matches(f, i) && m.push(f);
                break;
            case N.NAMESPACE:
                var Q = {};
                if (i.contextNode.nodeType == 1) {
                    Q.xml = tt.XML_NAMESPACE_URI,
                    Q.xmlns = tt.XMLNS_NAMESPACE_URI;
                    for (var f = i.contextNode; f != null && f.nodeType == 1; f = f.parentNode)
                        for (var C = 0; C < f.attributes.length; C++) {
                            var nt = f.attributes.item(C)
                              , D = String(nt.name);
                            if (D == "xmlns")
                                Q[""] == null && (Q[""] = nt.value);
                            else if (D.length > 6 && D.substring(0, 6) == "xmlns:") {
                                var G = D.substring(6, D.length);
                                Q[G] == null && (Q[G] = nt.value)
                            }
                        }
                    for (var G in Q) {
                        var kt = new Zt(G,Q[G],i.contextNode);
                        t.nodeTest.matches(kt, i) && m.push(kt)
                    }
                }
                break;
            case N.PARENT:
                f = null,
                i.contextNode !== i.virtualRoot && (i.contextNode.nodeType == 2 ? f = X.getOwnerElement(i.contextNode) : f = i.contextNode.parentNode),
                f != null && t.nodeTest.matches(f, i) && m.push(f);
                break;
            case N.PRECEDING:
                var _;
                i.virtualRoot != null ? _ = [i.virtualRoot] : _ = [we(i.contextNode)];
                t: for (; _.length > 0; )
                    for (var f = _.pop(); f != null; ) {
                        if (f == i.contextNode)
                            break t;
                        t.nodeTest.matches(f, i) && m.unshift(f),
                        f.firstChild != null ? (_.push(f.nextSibling),
                        f = f.firstChild) : f = f.nextSibling
                    }
                break;
            case N.PRECEDINGSIBLING:
                if (i.contextNode === i.virtualRoot)
                    break;
                for (var f = i.contextNode.previousSibling; f != null; f = f.previousSibling)
                    t.nodeTest.matches(f, i) && m.push(f);
                break;
            case N.SELF:
                t.nodeTest.matches(i.contextNode, i) && m.push(i.contextNode);
                break
            }
            return m
        }
        ,
        X.applySteps = function(t, i, c) {
            return p(function(m, f) {
                return [].concat.apply([], x(function(y) {
                    return X.applyPredicates(f.predicates, i, X.applyStep(f, i, y))
                }, m))
            }, c, t)
        }
        ,
        X.prototype.applyFilter = function(t, i) {
            if (!this.filter)
                return {
                    nodes: [t.contextNode]
                };
            var c = this.filter.evaluate(t);
            if (!F.instance_of(c, I)) {
                if (this.filterPredicates != null && this.filterPredicates.length > 0 || this.locationPath != null)
                    throw new Error("Path expression filter must evaluate to a nodeset if predicates or location path are used");
                return {
                    nonNodes: c
                }
            }
            return {
                nodes: X.applyPredicates(this.filterPredicates || [], i, c.toUnsortedArray())
            }
        }
        ,
        X.applyLocationPath = function(t, i, c) {
            if (!t)
                return c;
            var m = t.absolute ? [X.getRoot(i, c)] : c;
            return X.applySteps(t.steps, i, m)
        }
        ,
        X.prototype.evaluate = function(t) {
            var i = O(new Ut, t)
              , c = this.applyFilter(t, i);
            if ("nonNodes"in c)
                return c.nonNodes;
            var m = new I;
            return m.addArray(X.applyLocationPath(this.locationPath, i, c.nodes)),
            m
        }
        ,
        X.predicateMatches = function(t, i) {
            var c = t.evaluate(i);
            return F.instance_of(c, V) ? i.contextPosition == c.numberValue() : c.booleanValue()
        }
        ,
        X.predicateString = b(K("[", "]"), M),
        X.predicatesString = b(R(""), x(X.predicateString)),
        X.prototype.toString = function() {
            if (this.filter != null) {
                var t = M(this.filter);
                return F.instance_of(this.filter, W) ? K("'", "'", t) : this.filterPredicates != null && this.filterPredicates.length ? K("(", ")", t) + X.predicatesString(this.filterPredicates) : this.locationPath != null ? t + (this.locationPath.absolute ? "" : "/") + M(this.locationPath) : t
            }
            return M(this.locationPath)
        }
        ,
        X.getOwnerElement = function(t) {
            if (t.ownerElement)
                return t.ownerElement;
            try {
                if (t.selectSingleNode)
                    return t.selectSingleNode("..")
            } catch {}
            for (var i = t.nodeType == 9 ? t : t.ownerDocument, c = i.getElementsByTagName("*"), m = 0; m < c.length; m++)
                for (var f = c.item(m), y = f.attributes, C = 0; C < y.length; C++) {
                    var Q = y.item(C);
                    if (Q === t)
                        return f
                }
            return null
        }
        ,
        B.prototype = new Object,
        B.prototype.constructor = B,
        B.superclass = Object.prototype;
        function B(t, i) {
            arguments.length > 0 && this.init(t, i)
        }
        B.prototype.init = function(t, i) {
            this.absolute = t,
            this.steps = i
        }
        ,
        B.prototype.toString = function() {
            return (this.absolute ? "/" : "") + x(M, this.steps).join("/")
        }
        ,
        N.prototype = new Object,
        N.prototype.constructor = N,
        N.superclass = Object.prototype;
        function N(t, i, c) {
            arguments.length > 0 && this.init(t, i, c)
        }
        N.prototype.init = function(t, i, c) {
            this.axis = t,
            this.nodeTest = i,
            this.predicates = c
        }
        ,
        N.prototype.toString = function() {
            return N.STEPNAMES[this.axis] + "::" + this.nodeTest.toString() + X.predicatesString(this.predicates)
        }
        ,
        N.ANCESTOR = 0,
        N.ANCESTORORSELF = 1,
        N.ATTRIBUTE = 2,
        N.CHILD = 3,
        N.DESCENDANT = 4,
        N.DESCENDANTORSELF = 5,
        N.FOLLOWING = 6,
        N.FOLLOWINGSIBLING = 7,
        N.NAMESPACE = 8,
        N.PARENT = 9,
        N.PRECEDING = 10,
        N.PRECEDINGSIBLING = 11,
        N.SELF = 12,
        N.STEPNAMES = p(function(t, i) {
            return t[i[0]] = i[1],
            t
        }, {}, [[N.ANCESTOR, "ancestor"], [N.ANCESTORORSELF, "ancestor-or-self"], [N.ATTRIBUTE, "attribute"], [N.CHILD, "child"], [N.DESCENDANT, "descendant"], [N.DESCENDANTORSELF, "descendant-or-self"], [N.FOLLOWING, "following"], [N.FOLLOWINGSIBLING, "following-sibling"], [N.NAMESPACE, "namespace"], [N.PARENT, "parent"], [N.PRECEDING, "preceding"], [N.PRECEDINGSIBLING, "preceding-sibling"], [N.SELF, "self"]]),
        k.prototype = new Object,
        k.prototype.constructor = k,
        k.superclass = Object.prototype;
        function k(t, i) {
            arguments.length > 0 && this.init(t, i)
        }
        k.prototype.init = function(t, i) {
            this.type = t,
            this.value = i
        }
        ,
        k.prototype.toString = function() {
            return "<unknown nodetest type>"
        }
        ,
        k.prototype.matches = function(t, i) {
            console.warn("unknown node test type")
        }
        ,
        k.NAMETESTANY = 0,
        k.NAMETESTPREFIXANY = 1,
        k.NAMETESTQNAME = 2,
        k.COMMENT = 3,
        k.TEXT = 4,
        k.PI = 5,
        k.NODE = 6,
        k.isNodeType = function(t) {
            return b(A(t), $("nodeType"))
        }
        ,
        k.makeNodeTestType = function(t, i, c) {
            var m = c || function() {}
            ;
            m.prototype = new k(i.type),
            m.prototype.constructor = t;
            for (var f in i)
                m.prototype[f] = i[f];
            return m
        }
        ,
        k.makeNodeTypeTest = function(t, i, c) {
            return new (k.makeNodeTestType(t, {
                matches: k.isNodeType(i),
                toString: L(c)
            }))
        }
        ,
        k.hasPrefix = function(t) {
            return t.prefix || (t.nodeName || t.tagName).indexOf(":") !== -1
        }
        ,
        k.isElementOrAttribute = k.isNodeType([1, 2]),
        k.nameSpaceMatches = function(t, i, c) {
            var m = c.namespaceURI || "";
            if (!t)
                return !m || i.allowAnyNamespaceForNoPrefix && !k.hasPrefix(c);
            var f = i.namespaceResolver.getNamespace(t, i.expressionContextNode);
            if (f == null)
                throw new Error("Cannot resolve QName " + t);
            return f === m
        }
        ,
        k.localNameMatches = function(t, i, c) {
            var m = c.localName || c.nodeName;
            return i.caseInsensitive ? t.toLowerCase() === m.toLowerCase() : t === m
        }
        ,
        k.NameTestPrefixAny = k.makeNodeTestType(k.NAMETESTPREFIXANY, {
            matches: function(t, i) {
                return k.isElementOrAttribute(t) && k.nameSpaceMatches(this.prefix, i, t)
            },
            toString: function() {
                return this.prefix + ":*"
            }
        }, function(t) {
            this.prefix = t
        }),
        k.NameTestQName = k.makeNodeTestType(k.NAMETESTQNAME, {
            matches: function(t, i) {
                return k.isNodeType([1, 2, Zt.XPATH_NAMESPACE_NODE])(t) && k.nameSpaceMatches(this.prefix, i, t) && k.localNameMatches(this.localName, i, t)
            },
            toString: function() {
                return this.name
            }
        }, function(t) {
            var i = t.split(":");
            this.name = t,
            this.prefix = i.length > 1 ? i[0] : null,
            this.localName = i[i.length > 1 ? 1 : 0]
        }),
        k.PITest = k.makeNodeTestType(k.PI, {
            matches: function(t, i) {
                return k.isNodeType([7])(t) && (t.target || t.nodeName) === this.name
            },
            toString: function() {
                return K('processing-instruction("', '")', this.name)
            }
        }, function(t) {
            this.name = t
        }),
        k.nameTestAny = k.makeNodeTypeTest(k.NAMETESTANY, [1, 2, Zt.XPATH_NAMESPACE_NODE], "*"),
        k.textTest = k.makeNodeTypeTest(k.TEXT, [3, 4], "text()"),
        k.commentTest = k.makeNodeTypeTest(k.COMMENT, [8], "comment()"),
        k.nodeTest = k.makeNodeTypeTest(k.NODE, [1, 2, 3, 4, 7, 8, 9], "node()"),
        k.anyPiTest = k.makeNodeTypeTest(k.PI, [7], "processing-instruction()"),
        Bt.prototype = new rt,
        Bt.prototype.constructor = Bt,
        Bt.superclass = rt.prototype;
        function Bt(t) {
            arguments.length > 0 && this.init(t)
        }
        Bt.prototype.init = function(t) {
            this.variable = t
        }
        ,
        Bt.prototype.toString = function() {
            return "$" + this.variable
        }
        ,
        Bt.prototype.evaluate = function(t) {
            var i = F.resolveQName(this.variable, t.namespaceResolver, t.contextNode, !1);
            if (i[0] == null)
                throw new Error("Cannot resolve QName " + fn);
            var c = t.variableResolver.getVariable(i[1], i[0]);
            if (!c)
                throw Wt.fromMessage("Undeclared variable: " + this.toString());
            return c
        }
        ,
        $t.prototype = new rt,
        $t.prototype.constructor = $t,
        $t.superclass = rt.prototype;
        function $t(t, i) {
            arguments.length > 0 && this.init(t, i)
        }
        $t.prototype.init = function(t, i) {
            this.functionName = t,
            this.arguments = i
        }
        ,
        $t.prototype.toString = function() {
            for (var t = this.functionName + "(", i = 0; i < this.arguments.length; i++)
                i > 0 && (t += ", "),
                t += this.arguments[i].toString();
            return t + ")"
        }
        ,
        $t.prototype.evaluate = function(t) {
            var i = Ct.getFunctionFromContext(this.functionName, t);
            if (!i)
                throw new Error("Unknown function " + this.functionName);
            var c = [t].concat(this.arguments);
            return i.apply(t.functionResolver.thisArg, c)
        }
        ;
        var pt = new Object;
        pt.equals = function(t, i) {
            return t.equals(i)
        }
        ,
        pt.notequal = function(t, i) {
            return t.notequal(i)
        }
        ,
        pt.lessthan = function(t, i) {
            return t.lessthan(i)
        }
        ,
        pt.greaterthan = function(t, i) {
            return t.greaterthan(i)
        }
        ,
        pt.lessthanorequal = function(t, i) {
            return t.lessthanorequal(i)
        }
        ,
        pt.greaterthanorequal = function(t, i) {
            return t.greaterthanorequal(i)
        }
        ,
        W.prototype = new rt,
        W.prototype.constructor = W,
        W.superclass = rt.prototype;
        function W(t) {
            arguments.length > 0 && this.init(t)
        }
        W.prototype.init = function(t) {
            this.str = String(t)
        }
        ,
        W.prototype.toString = function() {
            return this.str
        }
        ,
        W.prototype.evaluate = function(t) {
            return this
        }
        ,
        W.prototype.string = function() {
            return this
        }
        ,
        W.prototype.number = function() {
            return new V(this.str)
        }
        ,
        W.prototype.bool = function() {
            return new U(this.str)
        }
        ,
        W.prototype.nodeset = function() {
            throw new Error("Cannot convert string to nodeset")
        }
        ,
        W.prototype.stringValue = function() {
            return this.str
        }
        ,
        W.prototype.numberValue = function() {
            return this.number().numberValue()
        }
        ,
        W.prototype.booleanValue = function() {
            return this.bool().booleanValue()
        }
        ,
        W.prototype.equals = function(t) {
            return F.instance_of(t, U) ? this.bool().equals(t) : F.instance_of(t, V) ? this.number().equals(t) : F.instance_of(t, I) ? t.compareWithString(this, pt.equals) : new U(this.str == t.str)
        }
        ,
        W.prototype.notequal = function(t) {
            return F.instance_of(t, U) ? this.bool().notequal(t) : F.instance_of(t, V) ? this.number().notequal(t) : F.instance_of(t, I) ? t.compareWithString(this, pt.notequal) : new U(this.str != t.str)
        }
        ,
        W.prototype.lessthan = function(t) {
            return this.number().lessthan(t)
        }
        ,
        W.prototype.greaterthan = function(t) {
            return this.number().greaterthan(t)
        }
        ,
        W.prototype.lessthanorequal = function(t) {
            return this.number().lessthanorequal(t)
        }
        ,
        W.prototype.greaterthanorequal = function(t) {
            return this.number().greaterthanorequal(t)
        }
        ,
        V.prototype = new rt,
        V.prototype.constructor = V,
        V.superclass = rt.prototype;
        function V(t) {
            arguments.length > 0 && this.init(t)
        }
        V.prototype.init = function(t) {
            this.num = typeof t == "string" ? this.parse(t) : Number(t)
        }
        ,
        V.prototype.numberFormat = /^\s*-?[0-9]*\.?[0-9]+\s*$/,
        V.prototype.parse = function(t) {
            return this.numberFormat.test(t) ? parseFloat(t) : Number.NaN
        }
        ;
        function br(t) {
            for (var i = t.split("e-"), c = i[0].replace(".", ""), m = Number(i[1]), f = 0; f < m - 1; f += 1)
                c = "0" + c;
            return "0." + c
        }
        function Sr(t) {
            for (var i = t.split("e"), c = i[0].replace(".", ""), m = Number(i[1]), f = m + 1 - c.length, y = 0; y < f; y += 1)
                c += "0";
            return c
        }
        V.prototype.toString = function() {
            var t = this.num.toString();
            return t.indexOf("e-") !== -1 ? br(t) : t.indexOf("e") !== -1 ? Sr(t) : t
        }
        ,
        V.prototype.evaluate = function(t) {
            return this
        }
        ,
        V.prototype.string = function() {
            return new W(this.toString())
        }
        ,
        V.prototype.number = function() {
            return this
        }
        ,
        V.prototype.bool = function() {
            return new U(this.num)
        }
        ,
        V.prototype.nodeset = function() {
            throw new Error("Cannot convert number to nodeset")
        }
        ,
        V.prototype.stringValue = function() {
            return this.string().stringValue()
        }
        ,
        V.prototype.numberValue = function() {
            return this.num
        }
        ,
        V.prototype.booleanValue = function() {
            return this.bool().booleanValue()
        }
        ,
        V.prototype.negate = function() {
            return new V(-this.num)
        }
        ,
        V.prototype.equals = function(t) {
            return F.instance_of(t, U) ? this.bool().equals(t) : F.instance_of(t, W) ? this.equals(t.number()) : F.instance_of(t, I) ? t.compareWithNumber(this, pt.equals) : new U(this.num == t.num)
        }
        ,
        V.prototype.notequal = function(t) {
            return F.instance_of(t, U) ? this.bool().notequal(t) : F.instance_of(t, W) ? this.notequal(t.number()) : F.instance_of(t, I) ? t.compareWithNumber(this, pt.notequal) : new U(this.num != t.num)
        }
        ,
        V.prototype.lessthan = function(t) {
            return F.instance_of(t, I) ? t.compareWithNumber(this, pt.greaterthan) : F.instance_of(t, U) || F.instance_of(t, W) ? this.lessthan(t.number()) : new U(this.num < t.num)
        }
        ,
        V.prototype.greaterthan = function(t) {
            return F.instance_of(t, I) ? t.compareWithNumber(this, pt.lessthan) : F.instance_of(t, U) || F.instance_of(t, W) ? this.greaterthan(t.number()) : new U(this.num > t.num)
        }
        ,
        V.prototype.lessthanorequal = function(t) {
            return F.instance_of(t, I) ? t.compareWithNumber(this, pt.greaterthanorequal) : F.instance_of(t, U) || F.instance_of(t, W) ? this.lessthanorequal(t.number()) : new U(this.num <= t.num)
        }
        ,
        V.prototype.greaterthanorequal = function(t) {
            return F.instance_of(t, I) ? t.compareWithNumber(this, pt.lessthanorequal) : F.instance_of(t, U) || F.instance_of(t, W) ? this.greaterthanorequal(t.number()) : new U(this.num >= t.num)
        }
        ,
        V.prototype.plus = function(t) {
            return new V(this.num + t.num)
        }
        ,
        V.prototype.minus = function(t) {
            return new V(this.num - t.num)
        }
        ,
        V.prototype.multiply = function(t) {
            return new V(this.num * t.num)
        }
        ,
        V.prototype.div = function(t) {
            return new V(this.num / t.num)
        }
        ,
        V.prototype.mod = function(t) {
            return new V(this.num % t.num)
        }
        ,
        U.prototype = new rt,
        U.prototype.constructor = U,
        U.superclass = rt.prototype;
        function U(t) {
            arguments.length > 0 && this.init(t)
        }
        U.prototype.init = function(t) {
            this.b = !!t
        }
        ,
        U.prototype.toString = function() {
            return this.b.toString()
        }
        ,
        U.prototype.evaluate = function(t) {
            return this
        }
        ,
        U.prototype.string = function() {
            return new W(this.b)
        }
        ,
        U.prototype.number = function() {
            return new V(this.b)
        }
        ,
        U.prototype.bool = function() {
            return this
        }
        ,
        U.prototype.nodeset = function() {
            throw new Error("Cannot convert boolean to nodeset")
        }
        ,
        U.prototype.stringValue = function() {
            return this.string().stringValue()
        }
        ,
        U.prototype.numberValue = function() {
            return this.number().numberValue()
        }
        ,
        U.prototype.booleanValue = function() {
            return this.b
        }
        ,
        U.prototype.not = function() {
            return new U(!this.b)
        }
        ,
        U.prototype.equals = function(t) {
            return F.instance_of(t, W) || F.instance_of(t, V) ? this.equals(t.bool()) : F.instance_of(t, I) ? t.compareWithBoolean(this, pt.equals) : new U(this.b == t.b)
        }
        ,
        U.prototype.notequal = function(t) {
            return F.instance_of(t, W) || F.instance_of(t, V) ? this.notequal(t.bool()) : F.instance_of(t, I) ? t.compareWithBoolean(this, pt.notequal) : new U(this.b != t.b)
        }
        ,
        U.prototype.lessthan = function(t) {
            return this.number().lessthan(t)
        }
        ,
        U.prototype.greaterthan = function(t) {
            return this.number().greaterthan(t)
        }
        ,
        U.prototype.lessthanorequal = function(t) {
            return this.number().lessthanorequal(t)
        }
        ,
        U.prototype.greaterthanorequal = function(t) {
            return this.number().greaterthanorequal(t)
        }
        ,
        U.true_ = new U(!0),
        U.false_ = new U(!1),
        Ot.prototype = new Object,
        Ot.prototype.constructor = Ot,
        Ot.superclass = Object.prototype;
        function Ot(t) {
            this.init(t)
        }
        Ot.prototype.init = function(t) {
            this.left = null,
            this.right = null,
            this.node = t,
            this.depth = 1
        }
        ,
        Ot.prototype.balance = function() {
            var t = this.left == null ? 0 : this.left.depth
              , i = this.right == null ? 0 : this.right.depth;
            if (t > i + 1) {
                var c = this.left.left == null ? 0 : this.left.left.depth
                  , m = this.left.right == null ? 0 : this.left.right.depth;
                c < m && this.left.rotateRR(),
                this.rotateLL()
            } else if (t + 1 < i) {
                var f = this.right.right == null ? 0 : this.right.right.depth
                  , y = this.right.left == null ? 0 : this.right.left.depth;
                y > f && this.right.rotateLL(),
                this.rotateRR()
            }
        }
        ,
        Ot.prototype.rotateLL = function() {
            var t = this.node
              , i = this.right;
            this.node = this.left.node,
            this.right = this.left,
            this.left = this.left.left,
            this.right.left = this.right.right,
            this.right.right = i,
            this.right.node = t,
            this.right.updateInNewLocation(),
            this.updateInNewLocation()
        }
        ,
        Ot.prototype.rotateRR = function() {
            var t = this.node
              , i = this.left;
            this.node = this.right.node,
            this.left = this.right,
            this.right = this.right.right,
            this.left.right = this.left.left,
            this.left.left = i,
            this.left.node = t,
            this.left.updateInNewLocation(),
            this.updateInNewLocation()
        }
        ,
        Ot.prototype.updateInNewLocation = function() {
            this.getDepthFromChildren()
        }
        ,
        Ot.prototype.getDepthFromChildren = function() {
            this.depth = this.node == null ? 0 : 1,
            this.left != null && (this.depth = this.left.depth + 1),
            this.right != null && this.depth <= this.right.depth && (this.depth = this.right.depth + 1)
        }
        ;
        function _r(t, i) {
            if (t === i)
                return 0;
            if (t.compareDocumentPosition) {
                var c = t.compareDocumentPosition(i);
                return c & 1 || c & 10 ? 1 : c & 20 ? -1 : 0
            }
            for (var m = 0, f = 0, y = t; y != null; y = y.parentNode || y.ownerElement)
                m++;
            for (var C = i; C != null; C = C.parentNode || C.ownerElement)
                f++;
            if (m > f) {
                for (; m > f; )
                    t = t.parentNode || t.ownerElement,
                    m--;
                if (t === i)
                    return 1
            } else if (f > m) {
                for (; f > m; )
                    i = i.parentNode || i.ownerElement,
                    f--;
                if (t === i)
                    return -1
            }
            for (var Q = t.parentNode || t.ownerElement, nt = i.parentNode || i.ownerElement; Q !== nt; )
                t = Q,
                i = nt,
                Q = t.parentNode || t.ownerElement,
                nt = i.parentNode || i.ownerElement;
            var D = F.isAttribute(t)
              , G = F.isAttribute(i);
            if (D && !G)
                return -1;
            if (!D && G)
                return 1;
            if (Q)
                for (var kt = D ? Q.attributes : Q.childNodes, _ = kt.length, ae = 0; ae < _; ae += 1) {
                    var ue = kt[ae];
                    if (ue === t)
                        return -1;
                    if (ue === i)
                        return 1
                }
            throw new Error("Unexpected: could not determine node order")
        }
        Ot.prototype.add = function(t) {
            if (t === this.node)
                return !1;
            var i = _r(t, this.node)
              , c = !1;
            return i == -1 ? this.left == null ? (this.left = new Ot(t),
            c = !0) : (c = this.left.add(t),
            c && this.balance()) : i == 1 && (this.right == null ? (this.right = new Ot(t),
            c = !0) : (c = this.right.add(t),
            c && this.balance())),
            c && this.getDepthFromChildren(),
            c
        }
        ,
        I.prototype = new rt,
        I.prototype.constructor = I,
        I.superclass = rt.prototype;
        function I() {
            this.init()
        }
        I.prototype.init = function() {
            this.tree = null,
            this.nodes = [],
            this.size = 0
        }
        ,
        I.prototype.toString = function() {
            var t = this.first();
            return t == null ? "" : this.stringForNode(t)
        }
        ,
        I.prototype.evaluate = function(t) {
            return this
        }
        ,
        I.prototype.string = function() {
            return new W(this.toString())
        }
        ,
        I.prototype.stringValue = function() {
            return this.toString()
        }
        ,
        I.prototype.number = function() {
            return new V(this.string())
        }
        ,
        I.prototype.numberValue = function() {
            return Number(this.string())
        }
        ,
        I.prototype.bool = function() {
            return new U(this.booleanValue())
        }
        ,
        I.prototype.booleanValue = function() {
            return !!this.size
        }
        ,
        I.prototype.nodeset = function() {
            return this
        }
        ,
        I.prototype.stringForNode = function(t) {
            return t.nodeType == 9 || t.nodeType == 1 || t.nodeType === 11 ? this.stringForContainerNode(t) : t.nodeType === 2 ? t.value || t.nodeValue : t.isNamespaceNode ? t.namespace : t.nodeValue
        }
        ,
        I.prototype.stringForContainerNode = function(t) {
            for (var i = "", c = t.firstChild; c != null; c = c.nextSibling) {
                var m = c.nodeType;
                (m === 1 || m === 3 || m === 4 || m === 9 || m === 11) && (i += this.stringForNode(c))
            }
            return i
        }
        ,
        I.prototype.buildTree = function() {
            if (!this.tree && this.nodes.length) {
                this.tree = new Ot(this.nodes[0]);
                for (var t = 1; t < this.nodes.length; t += 1)
                    this.tree.add(this.nodes[t])
            }
            return this.tree
        }
        ,
        I.prototype.first = function() {
            var t = this.buildTree();
            if (t == null)
                return null;
            for (; t.left != null; )
                t = t.left;
            return t.node
        }
        ,
        I.prototype.add = function(t) {
            for (var i = 0; i < this.nodes.length; i += 1)
                if (t === this.nodes[i])
                    return;
            this.tree = null,
            this.nodes.push(t),
            this.size += 1
        }
        ,
        I.prototype.addArray = function(t) {
            var i = this;
            h(function(c) {
                i.add(c)
            }, t)
        }
        ,
        I.prototype.toArray = function() {
            var t = [];
            return this.toArrayRec(this.buildTree(), t),
            t
        }
        ,
        I.prototype.toArrayRec = function(t, i) {
            t != null && (this.toArrayRec(t.left, i),
            i.push(t.node),
            this.toArrayRec(t.right, i))
        }
        ,
        I.prototype.toUnsortedArray = function() {
            return this.nodes.slice()
        }
        ,
        I.prototype.compareWithString = function(t, i) {
            for (var c = this.toUnsortedArray(), m = 0; m < c.length; m++) {
                var f = c[m]
                  , y = new W(this.stringForNode(f))
                  , C = i(y, t);
                if (C.booleanValue())
                    return C
            }
            return new U(!1)
        }
        ,
        I.prototype.compareWithNumber = function(t, i) {
            for (var c = this.toUnsortedArray(), m = 0; m < c.length; m++) {
                var f = c[m]
                  , y = new V(this.stringForNode(f))
                  , C = i(y, t);
                if (C.booleanValue())
                    return C
            }
            return new U(!1)
        }
        ,
        I.prototype.compareWithBoolean = function(t, i) {
            return i(this.bool(), t)
        }
        ,
        I.prototype.compareWithNodeSet = function(t, i) {
            for (var c = this.toUnsortedArray(), m = function(Q, nt) {
                return i(nt, Q)
            }, f = 0; f < c.length; f++) {
                var y = new W(this.stringForNode(c[f]))
                  , C = t.compareWithString(y, m);
                if (C.booleanValue())
                    return C
            }
            return new U(!1)
        }
        ,
        I.compareWith = u(function(t, i) {
            return F.instance_of(i, W) ? this.compareWithString(i, t) : F.instance_of(i, V) ? this.compareWithNumber(i, t) : F.instance_of(i, U) ? this.compareWithBoolean(i, t) : this.compareWithNodeSet(i, t)
        }),
        I.prototype.equals = I.compareWith(pt.equals),
        I.prototype.notequal = I.compareWith(pt.notequal),
        I.prototype.lessthan = I.compareWith(pt.lessthan),
        I.prototype.greaterthan = I.compareWith(pt.greaterthan),
        I.prototype.lessthanorequal = I.compareWith(pt.lessthanorequal),
        I.prototype.greaterthanorequal = I.compareWith(pt.greaterthanorequal),
        I.prototype.union = function(t) {
            var i = new I;
            return i.addArray(this.toUnsortedArray()),
            i.addArray(t.toUnsortedArray()),
            i
        }
        ,
        Zt.prototype = new Object,
        Zt.prototype.constructor = Zt,
        Zt.superclass = Object.prototype;
        function Zt(t, i, c) {
            this.isXPathNamespace = !0,
            this.ownerDocument = c.ownerDocument,
            this.nodeName = "#namespace",
            this.prefix = t,
            this.localName = t,
            this.namespaceURI = i,
            this.nodeValue = i,
            this.ownerElement = c,
            this.nodeType = Zt.XPATH_NAMESPACE_NODE
        }
        Zt.prototype.toString = function() {
            return '{ "' + this.prefix + '", "' + this.namespaceURI + '" }'
        }
        ,
        Ut.prototype = new Object,
        Ut.prototype.constructor = Ut,
        Ut.superclass = Object.prototype;
        function Ut(t, i, c) {
            this.variableResolver = t ?? new yt,
            this.namespaceResolver = i ?? new Kt,
            this.functionResolver = c ?? new Ct
        }
        Ut.prototype.extend = function(t) {
            return O(new Ut, this, t)
        }
        ,
        yt.prototype = new Object,
        yt.prototype.constructor = yt,
        yt.superclass = Object.prototype;
        function yt() {}
        yt.prototype.getVariable = function(t, i) {
            return null
        }
        ,
        Ct.prototype = new Object,
        Ct.prototype.constructor = Ct,
        Ct.superclass = Object.prototype;
        function Ct(t) {
            this.thisArg = t ?? H,
            this.functions = new Object,
            this.addStandardFunctions()
        }
        Ct.prototype.addStandardFunctions = function() {
            this.functions["{}last"] = H.last,
            this.functions["{}position"] = H.position,
            this.functions["{}count"] = H.count,
            this.functions["{}id"] = H.id,
            this.functions["{}local-name"] = H.localName,
            this.functions["{}namespace-uri"] = H.namespaceURI,
            this.functions["{}name"] = H.name,
            this.functions["{}string"] = H.string,
            this.functions["{}concat"] = H.concat,
            this.functions["{}starts-with"] = H.startsWith,
            this.functions["{}contains"] = H.contains,
            this.functions["{}substring-before"] = H.substringBefore,
            this.functions["{}substring-after"] = H.substringAfter,
            this.functions["{}substring"] = H.substring,
            this.functions["{}string-length"] = H.stringLength,
            this.functions["{}normalize-space"] = H.normalizeSpace,
            this.functions["{}translate"] = H.translate,
            this.functions["{}boolean"] = H.boolean_,
            this.functions["{}not"] = H.not,
            this.functions["{}true"] = H.true_,
            this.functions["{}false"] = H.false_,
            this.functions["{}lang"] = H.lang,
            this.functions["{}number"] = H.number,
            this.functions["{}sum"] = H.sum,
            this.functions["{}floor"] = H.floor,
            this.functions["{}ceiling"] = H.ceiling,
            this.functions["{}round"] = H.round
        }
        ,
        Ct.prototype.addFunction = function(t, i, c) {
            this.functions["{" + t + "}" + i] = c
        }
        ,
        Ct.getFunctionFromContext = function(t, i) {
            var c = F.resolveQName(t, i.namespaceResolver, i.contextNode, !1);
            if (c[0] === null)
                throw new Error("Cannot resolve QName " + name);
            return i.functionResolver.getFunction(c[1], c[0])
        }
        ,
        Ct.prototype.getFunction = function(t, i) {
            return this.functions["{" + i + "}" + t]
        }
        ,
        Kt.prototype = new Object,
        Kt.prototype.constructor = Kt,
        Kt.superclass = Object.prototype;
        function Kt() {}
        Kt.prototype.getNamespace = function(t, i) {
            if (t == "xml")
                return tt.XML_NAMESPACE_URI;
            if (t == "xmlns")
                return tt.XMLNS_NAMESPACE_URI;
            for (i.nodeType == 9 ? i = i.documentElement : i.nodeType == 2 ? i = X.getOwnerElement(i) : i.nodeType != 1 && (i = i.parentNode); i != null && i.nodeType == 1; ) {
                for (var c = i.attributes, m = 0; m < c.length; m++) {
                    var f = c.item(m)
                      , y = f.name || f.nodeName;
                    if (y === "xmlns" && t === "" || y === "xmlns:" + t)
                        return String(f.value || f.nodeValue)
                }
                i = i.parentNode
            }
            return null
        }
        ;
        var H = new Object;
        H.last = function(t) {
            if (arguments.length != 1)
                throw new Error("Function last expects ()");
            return new V(t.contextSize)
        }
        ,
        H.position = function(t) {
            if (arguments.length != 1)
                throw new Error("Function position expects ()");
            return new V(t.contextPosition)
        }
        ,
        H.count = function() {
            var t = arguments[0], i;
            if (arguments.length != 2 || !F.instance_of(i = arguments[1].evaluate(t), I))
                throw new Error("Function count expects (node-set)");
            return new V(i.size)
        }
        ,
        H.id = function() {
            var t = arguments[0], i;
            if (arguments.length != 2)
                throw new Error("Function id expects (object)");
            i = arguments[1].evaluate(t),
            F.instance_of(i, I) ? i = i.toArray().join(" ") : i = i.stringValue();
            for (var c = i.split(/[\x0d\x0a\x09\x20]+/), m = new I, f = t.contextNode.nodeType == 9 ? t.contextNode : t.contextNode.ownerDocument, y = 0; y < c.length; y++) {
                var C;
                f.getElementById ? C = f.getElementById(c[y]) : C = F.getElementById(f, c[y]),
                C != null && m.add(C)
            }
            return m
        }
        ,
        H.localName = function(t, i) {
            var c;
            if (arguments.length == 1)
                c = t.contextNode;
            else if (arguments.length == 2)
                c = i.evaluate(t).first();
            else
                throw new Error("Function local-name expects (node-set?)");
            return c == null ? new W("") : new W(c.localName || c.baseName || c.target || c.nodeName || "")
        }
        ,
        H.namespaceURI = function() {
            var t = arguments[0], i;
            if (arguments.length == 1)
                i = t.contextNode;
            else if (arguments.length == 2)
                i = arguments[1].evaluate(t).first();
            else
                throw new Error("Function namespace-uri expects (node-set?)");
            return i == null ? new W("") : new W(i.namespaceURI)
        }
        ,
        H.name = function() {
            var t = arguments[0], i;
            if (arguments.length == 1)
                i = t.contextNode;
            else if (arguments.length == 2)
                i = arguments[1].evaluate(t).first();
            else
                throw new Error("Function name expects (node-set?)");
            return i == null ? new W("") : i.nodeType == 1 ? new W(i.nodeName) : i.nodeType == 2 ? new W(i.name || i.nodeName) : i.nodeType === 7 ? new W(i.target || i.nodeName) : i.localName == null ? new W("") : new W(i.localName)
        }
        ,
        H.string = function() {
            var t = arguments[0];
            if (arguments.length == 1)
                return new W(I.prototype.stringForNode(t.contextNode));
            if (arguments.length == 2)
                return arguments[1].evaluate(t).string();
            throw new Error("Function string expects (object?)")
        }
        ,
        H.concat = function(t) {
            if (arguments.length < 3)
                throw new Error("Function concat expects (string, string[, string]*)");
            for (var i = "", c = 1; c < arguments.length; c++)
                i += arguments[c].evaluate(t).stringValue();
            return new W(i)
        }
        ,
        H.startsWith = function() {
            var t = arguments[0];
            if (arguments.length != 3)
                throw new Error("Function startsWith expects (string, string)");
            var i = arguments[1].evaluate(t).stringValue()
              , c = arguments[2].evaluate(t).stringValue();
            return new U(i.substring(0, c.length) == c)
        }
        ,
        H.contains = function() {
            var t = arguments[0];
            if (arguments.length != 3)
                throw new Error("Function contains expects (string, string)");
            var i = arguments[1].evaluate(t).stringValue()
              , c = arguments[2].evaluate(t).stringValue();
            return new U(i.indexOf(c) !== -1)
        }
        ,
        H.substringBefore = function() {
            var t = arguments[0];
            if (arguments.length != 3)
                throw new Error("Function substring-before expects (string, string)");
            var i = arguments[1].evaluate(t).stringValue()
              , c = arguments[2].evaluate(t).stringValue();
            return new W(i.substring(0, i.indexOf(c)))
        }
        ,
        H.substringAfter = function() {
            var t = arguments[0];
            if (arguments.length != 3)
                throw new Error("Function substring-after expects (string, string)");
            var i = arguments[1].evaluate(t).stringValue()
              , c = arguments[2].evaluate(t).stringValue();
            if (c.length == 0)
                return new W(i);
            var m = i.indexOf(c);
            return m == -1 ? new W("") : new W(i.substring(m + c.length))
        }
        ,
        H.substring = function() {
            var t = arguments[0];
            if (!(arguments.length == 3 || arguments.length == 4))
                throw new Error("Function substring expects (string, number, number?)");
            var i = arguments[1].evaluate(t).stringValue()
              , c = Math.round(arguments[2].evaluate(t).numberValue()) - 1
              , m = arguments.length == 4 ? c + Math.round(arguments[3].evaluate(t).numberValue()) : void 0;
            return new W(i.substring(c, m))
        }
        ,
        H.stringLength = function() {
            var t = arguments[0], i;
            if (arguments.length == 1)
                i = I.prototype.stringForNode(t.contextNode);
            else if (arguments.length == 2)
                i = arguments[1].evaluate(t).stringValue();
            else
                throw new Error("Function string-length expects (string?)");
            return new V(i.length)
        }
        ,
        H.normalizeSpace = function() {
            var t = arguments[0], i;
            if (arguments.length == 1)
                i = I.prototype.stringForNode(t.contextNode);
            else if (arguments.length == 2)
                i = arguments[1].evaluate(t).stringValue();
            else
                throw new Error("Function normalize-space expects (string?)");
            for (var c = 0, m = i.length - 1; F.isSpace(i.charCodeAt(m)); )
                m--;
            for (var f = ""; c <= m && F.isSpace(i.charCodeAt(c)); )
                c++;
            for (; c <= m; )
                if (F.isSpace(i.charCodeAt(c)))
                    for (f += " "; c <= m && F.isSpace(i.charCodeAt(c)); )
                        c++;
                else
                    f += i.charAt(c),
                    c++;
            return new W(f)
        }
        ,
        H.translate = function(t, i, c, m) {
            if (arguments.length != 4)
                throw new Error("Function translate expects (string, string, string)");
            var f = i.evaluate(t).stringValue()
              , y = c.evaluate(t).stringValue()
              , C = m.evaluate(t).stringValue()
              , Q = p(function(D, G, kt) {
                return G in D || (D[G] = kt > C.length ? "" : C[kt]),
                D
            }, {}, y)
              , nt = R("", x(function(D) {
                return D in Q ? Q[D] : D
            }, f));
            return new W(nt)
        }
        ,
        H.boolean_ = function() {
            var t = arguments[0];
            if (arguments.length != 2)
                throw new Error("Function boolean expects (object)");
            return arguments[1].evaluate(t).bool()
        }
        ,
        H.not = function(t, i) {
            if (arguments.length != 2)
                throw new Error("Function not expects (object)");
            return i.evaluate(t).bool().not()
        }
        ,
        H.true_ = function() {
            if (arguments.length != 1)
                throw new Error("Function true expects ()");
            return U.true_
        }
        ,
        H.false_ = function() {
            if (arguments.length != 1)
                throw new Error("Function false expects ()");
            return U.false_
        }
        ,
        H.lang = function() {
            var t = arguments[0];
            if (arguments.length != 2)
                throw new Error("Function lang expects (string)");
            for (var i, c = t.contextNode; c != null && c.nodeType != 9; c = c.parentNode) {
                var m = c.getAttributeNS(tt.XML_NAMESPACE_URI, "lang");
                if (m != null) {
                    i = String(m);
                    break
                }
            }
            if (i == null)
                return U.false_;
            var f = arguments[1].evaluate(t).stringValue();
            return new U(i.substring(0, f.length) == f && (i.length == f.length || i.charAt(f.length) == "-"))
        }
        ,
        H.number = function() {
            var t = arguments[0];
            if (!(arguments.length == 1 || arguments.length == 2))
                throw new Error("Function number expects (object?)");
            return arguments.length == 1 ? new V(I.prototype.stringForNode(t.contextNode)) : arguments[1].evaluate(t).number()
        }
        ,
        H.sum = function() {
            var t = arguments[0], i;
            if (arguments.length != 2 || !F.instance_of(i = arguments[1].evaluate(t), I))
                throw new Error("Function sum expects (node-set)");
            i = i.toUnsortedArray();
            for (var c = 0, m = 0; m < i.length; m++)
                c += new V(I.prototype.stringForNode(i[m])).numberValue();
            return new V(c)
        }
        ,
        H.floor = function() {
            var t = arguments[0];
            if (arguments.length != 2)
                throw new Error("Function floor expects (number)");
            return new V(Math.floor(arguments[1].evaluate(t).numberValue()))
        }
        ,
        H.ceiling = function() {
            var t = arguments[0];
            if (arguments.length != 2)
                throw new Error("Function ceiling expects (number)");
            return new V(Math.ceil(arguments[1].evaluate(t).numberValue()))
        }
        ,
        H.round = function() {
            var t = arguments[0];
            if (arguments.length != 2)
                throw new Error("Function round expects (number)");
            return new V(Math.round(arguments[1].evaluate(t).numberValue()))
        }
        ;
        var F = new Object;
        F.isAttribute = function(t) {
            return t && (t.nodeType === 2 || t.ownerElement)
        }
        ,
        F.splitQName = function(t) {
            var i = t.indexOf(":");
            return i == -1 ? [null, t] : [t.substring(0, i), t.substring(i + 1)]
        }
        ,
        F.resolveQName = function(t, i, c, m) {
            var f = F.splitQName(t);
            return f[0] != null ? f[0] = i.getNamespace(f[0], c) : m ? (f[0] = i.getNamespace("", c),
            f[0] == null && (f[0] = "")) : f[0] = "",
            f
        }
        ,
        F.isSpace = function(t) {
            return t == 9 || t == 13 || t == 10 || t == 32
        }
        ,
        F.isLetter = function(t) {
            return t >= 65 && t <= 90 || t >= 97 && t <= 122 || t >= 192 && t <= 214 || t >= 216 && t <= 246 || t >= 248 && t <= 255 || t >= 256 && t <= 305 || t >= 308 && t <= 318 || t >= 321 && t <= 328 || t >= 330 && t <= 382 || t >= 384 && t <= 451 || t >= 461 && t <= 496 || t >= 500 && t <= 501 || t >= 506 && t <= 535 || t >= 592 && t <= 680 || t >= 699 && t <= 705 || t == 902 || t >= 904 && t <= 906 || t == 908 || t >= 910 && t <= 929 || t >= 931 && t <= 974 || t >= 976 && t <= 982 || t == 986 || t == 988 || t == 990 || t == 992 || t >= 994 && t <= 1011 || t >= 1025 && t <= 1036 || t >= 1038 && t <= 1103 || t >= 1105 && t <= 1116 || t >= 1118 && t <= 1153 || t >= 1168 && t <= 1220 || t >= 1223 && t <= 1224 || t >= 1227 && t <= 1228 || t >= 1232 && t <= 1259 || t >= 1262 && t <= 1269 || t >= 1272 && t <= 1273 || t >= 1329 && t <= 1366 || t == 1369 || t >= 1377 && t <= 1414 || t >= 1488 && t <= 1514 || t >= 1520 && t <= 1522 || t >= 1569 && t <= 1594 || t >= 1601 && t <= 1610 || t >= 1649 && t <= 1719 || t >= 1722 && t <= 1726 || t >= 1728 && t <= 1742 || t >= 1744 && t <= 1747 || t == 1749 || t >= 1765 && t <= 1766 || t >= 2309 && t <= 2361 || t == 2365 || t >= 2392 && t <= 2401 || t >= 2437 && t <= 2444 || t >= 2447 && t <= 2448 || t >= 2451 && t <= 2472 || t >= 2474 && t <= 2480 || t == 2482 || t >= 2486 && t <= 2489 || t >= 2524 && t <= 2525 || t >= 2527 && t <= 2529 || t >= 2544 && t <= 2545 || t >= 2565 && t <= 2570 || t >= 2575 && t <= 2576 || t >= 2579 && t <= 2600 || t >= 2602 && t <= 2608 || t >= 2610 && t <= 2611 || t >= 2613 && t <= 2614 || t >= 2616 && t <= 2617 || t >= 2649 && t <= 2652 || t == 2654 || t >= 2674 && t <= 2676 || t >= 2693 && t <= 2699 || t == 2701 || t >= 2703 && t <= 2705 || t >= 2707 && t <= 2728 || t >= 2730 && t <= 2736 || t >= 2738 && t <= 2739 || t >= 2741 && t <= 2745 || t == 2749 || t == 2784 || t >= 2821 && t <= 2828 || t >= 2831 && t <= 2832 || t >= 2835 && t <= 2856 || t >= 2858 && t <= 2864 || t >= 2866 && t <= 2867 || t >= 2870 && t <= 2873 || t == 2877 || t >= 2908 && t <= 2909 || t >= 2911 && t <= 2913 || t >= 2949 && t <= 2954 || t >= 2958 && t <= 2960 || t >= 2962 && t <= 2965 || t >= 2969 && t <= 2970 || t == 2972 || t >= 2974 && t <= 2975 || t >= 2979 && t <= 2980 || t >= 2984 && t <= 2986 || t >= 2990 && t <= 2997 || t >= 2999 && t <= 3001 || t >= 3077 && t <= 3084 || t >= 3086 && t <= 3088 || t >= 3090 && t <= 3112 || t >= 3114 && t <= 3123 || t >= 3125 && t <= 3129 || t >= 3168 && t <= 3169 || t >= 3205 && t <= 3212 || t >= 3214 && t <= 3216 || t >= 3218 && t <= 3240 || t >= 3242 && t <= 3251 || t >= 3253 && t <= 3257 || t == 3294 || t >= 3296 && t <= 3297 || t >= 3333 && t <= 3340 || t >= 3342 && t <= 3344 || t >= 3346 && t <= 3368 || t >= 3370 && t <= 3385 || t >= 3424 && t <= 3425 || t >= 3585 && t <= 3630 || t == 3632 || t >= 3634 && t <= 3635 || t >= 3648 && t <= 3653 || t >= 3713 && t <= 3714 || t == 3716 || t >= 3719 && t <= 3720 || t == 3722 || t == 3725 || t >= 3732 && t <= 3735 || t >= 3737 && t <= 3743 || t >= 3745 && t <= 3747 || t == 3749 || t == 3751 || t >= 3754 && t <= 3755 || t >= 3757 && t <= 3758 || t == 3760 || t >= 3762 && t <= 3763 || t == 3773 || t >= 3776 && t <= 3780 || t >= 3904 && t <= 3911 || t >= 3913 && t <= 3945 || t >= 4256 && t <= 4293 || t >= 4304 && t <= 4342 || t == 4352 || t >= 4354 && t <= 4355 || t >= 4357 && t <= 4359 || t == 4361 || t >= 4363 && t <= 4364 || t >= 4366 && t <= 4370 || t == 4412 || t == 4414 || t == 4416 || t == 4428 || t == 4430 || t == 4432 || t >= 4436 && t <= 4437 || t == 4441 || t >= 4447 && t <= 4449 || t == 4451 || t == 4453 || t == 4455 || t == 4457 || t >= 4461 && t <= 4462 || t >= 4466 && t <= 4467 || t == 4469 || t == 4510 || t == 4520 || t == 4523 || t >= 4526 && t <= 4527 || t >= 4535 && t <= 4536 || t == 4538 || t >= 4540 && t <= 4546 || t == 4587 || t == 4592 || t == 4601 || t >= 7680 && t <= 7835 || t >= 7840 && t <= 7929 || t >= 7936 && t <= 7957 || t >= 7960 && t <= 7965 || t >= 7968 && t <= 8005 || t >= 8008 && t <= 8013 || t >= 8016 && t <= 8023 || t == 8025 || t == 8027 || t == 8029 || t >= 8031 && t <= 8061 || t >= 8064 && t <= 8116 || t >= 8118 && t <= 8124 || t == 8126 || t >= 8130 && t <= 8132 || t >= 8134 && t <= 8140 || t >= 8144 && t <= 8147 || t >= 8150 && t <= 8155 || t >= 8160 && t <= 8172 || t >= 8178 && t <= 8180 || t >= 8182 && t <= 8188 || t == 8486 || t >= 8490 && t <= 8491 || t == 8494 || t >= 8576 && t <= 8578 || t >= 12353 && t <= 12436 || t >= 12449 && t <= 12538 || t >= 12549 && t <= 12588 || t >= 44032 && t <= 55203 || t >= 19968 && t <= 40869 || t == 12295 || t >= 12321 && t <= 12329
        }
        ,
        F.isNCNameChar = function(t) {
            return t >= 48 && t <= 57 || t >= 1632 && t <= 1641 || t >= 1776 && t <= 1785 || t >= 2406 && t <= 2415 || t >= 2534 && t <= 2543 || t >= 2662 && t <= 2671 || t >= 2790 && t <= 2799 || t >= 2918 && t <= 2927 || t >= 3047 && t <= 3055 || t >= 3174 && t <= 3183 || t >= 3302 && t <= 3311 || t >= 3430 && t <= 3439 || t >= 3664 && t <= 3673 || t >= 3792 && t <= 3801 || t >= 3872 && t <= 3881 || t == 46 || t == 45 || t == 95 || F.isLetter(t) || t >= 768 && t <= 837 || t >= 864 && t <= 865 || t >= 1155 && t <= 1158 || t >= 1425 && t <= 1441 || t >= 1443 && t <= 1465 || t >= 1467 && t <= 1469 || t == 1471 || t >= 1473 && t <= 1474 || t == 1476 || t >= 1611 && t <= 1618 || t == 1648 || t >= 1750 && t <= 1756 || t >= 1757 && t <= 1759 || t >= 1760 && t <= 1764 || t >= 1767 && t <= 1768 || t >= 1770 && t <= 1773 || t >= 2305 && t <= 2307 || t == 2364 || t >= 2366 && t <= 2380 || t == 2381 || t >= 2385 && t <= 2388 || t >= 2402 && t <= 2403 || t >= 2433 && t <= 2435 || t == 2492 || t == 2494 || t == 2495 || t >= 2496 && t <= 2500 || t >= 2503 && t <= 2504 || t >= 2507 && t <= 2509 || t == 2519 || t >= 2530 && t <= 2531 || t == 2562 || t == 2620 || t == 2622 || t == 2623 || t >= 2624 && t <= 2626 || t >= 2631 && t <= 2632 || t >= 2635 && t <= 2637 || t >= 2672 && t <= 2673 || t >= 2689 && t <= 2691 || t == 2748 || t >= 2750 && t <= 2757 || t >= 2759 && t <= 2761 || t >= 2763 && t <= 2765 || t >= 2817 && t <= 2819 || t == 2876 || t >= 2878 && t <= 2883 || t >= 2887 && t <= 2888 || t >= 2891 && t <= 2893 || t >= 2902 && t <= 2903 || t >= 2946 && t <= 2947 || t >= 3006 && t <= 3010 || t >= 3014 && t <= 3016 || t >= 3018 && t <= 3021 || t == 3031 || t >= 3073 && t <= 3075 || t >= 3134 && t <= 3140 || t >= 3142 && t <= 3144 || t >= 3146 && t <= 3149 || t >= 3157 && t <= 3158 || t >= 3202 && t <= 3203 || t >= 3262 && t <= 3268 || t >= 3270 && t <= 3272 || t >= 3274 && t <= 3277 || t >= 3285 && t <= 3286 || t >= 3330 && t <= 3331 || t >= 3390 && t <= 3395 || t >= 3398 && t <= 3400 || t >= 3402 && t <= 3405 || t == 3415 || t == 3633 || t >= 3636 && t <= 3642 || t >= 3655 && t <= 3662 || t == 3761 || t >= 3764 && t <= 3769 || t >= 3771 && t <= 3772 || t >= 3784 && t <= 3789 || t >= 3864 && t <= 3865 || t == 3893 || t == 3895 || t == 3897 || t == 3902 || t == 3903 || t >= 3953 && t <= 3972 || t >= 3974 && t <= 3979 || t >= 3984 && t <= 3989 || t == 3991 || t >= 3993 && t <= 4013 || t >= 4017 && t <= 4023 || t == 4025 || t >= 8400 && t <= 8412 || t == 8417 || t >= 12330 && t <= 12335 || t == 12441 || t == 12442 || t == 183 || t == 720 || t == 721 || t == 903 || t == 1600 || t == 3654 || t == 3782 || t == 12293 || t >= 12337 && t <= 12341 || t >= 12445 && t <= 12446 || t >= 12540 && t <= 12542
        }
        ,
        F.coalesceText = function(t) {
            for (var i = t.firstChild; i != null; i = i.nextSibling)
                if (i.nodeType == 3 || i.nodeType == 4) {
                    var c = i.nodeValue
                      , m = i;
                    for (i = i.nextSibling; i != null && (i.nodeType == 3 || i.nodeType == 4); ) {
                        c += i.nodeValue;
                        var f = i;
                        i = i.nextSibling,
                        f.parentNode.removeChild(f)
                    }
                    if (m.nodeType == 4) {
                        var y = m.parentNode;
                        if (m.nextSibling == null)
                            y.removeChild(m),
                            y.appendChild(y.ownerDocument.createTextNode(c));
                        else {
                            var C = m.nextSibling;
                            y.removeChild(m),
                            y.insertBefore(y.ownerDocument.createTextNode(c), C)
                        }
                    } else
                        m.nodeValue = c;
                    if (i == null)
                        break
                } else
                    i.nodeType == 1 && F.coalesceText(i)
        }
        ,
        F.instance_of = function(t, i) {
            for (; t != null; ) {
                if (t.constructor === i)
                    return !0;
                if (t === Object)
                    return !1;
                t = t.constructor.superclass
            }
            return !1
        }
        ,
        F.getElementById = function(t, i) {
            if (t.nodeType == 1 && (t.getAttribute("id") == i || t.getAttributeNS(null, "id") == i))
                return t;
            for (var c = t.firstChild; c != null; c = c.nextSibling) {
                var m = F.getElementById(c, i);
                if (m != null)
                    return m
            }
            return null
        }
        ;
        var Wt = function() {
            function t(c, m) {
                var f = m ? ": " + m.toString() : "";
                switch (c) {
                case i.INVALID_EXPRESSION_ERR:
                    return "Invalid expression" + f;
                case i.TYPE_ERR:
                    return "Type error" + f
                }
                return null
            }
            function i(c, m, f) {
                var y = Error.call(this, t(c, m) || f);
                return y.code = c,
                y.exception = m,
                y
            }
            return i.prototype = Object.create(Error.prototype),
            i.prototype.constructor = i,
            i.superclass = Error,
            i.prototype.toString = function() {
                return this.message
            }
            ,
            i.fromMessage = function(c, m) {
                return new i(null,m,c)
            }
            ,
            i.INVALID_EXPRESSION_ERR = 51,
            i.TYPE_ERR = 52,
            i
        }();
        ct.prototype = {},
        ct.prototype.constructor = ct,
        ct.superclass = Object.prototype;
        function ct(t, i, c) {
            this.xpath = c.parse(t),
            this.context = new Ut,
            this.context.namespaceResolver = new he(i)
        }
        ct.getOwnerDocument = function(t) {
            return t.nodeType === 9 ? t : t.ownerDocument
        }
        ,
        ct.detectHtmlDom = function(t) {
            if (!t)
                return !1;
            var i = ct.getOwnerDocument(t);
            try {
                return i.implementation.hasFeature("HTML", "2.0")
            } catch {
                return !0
            }
        }
        ,
        ct.prototype.evaluate = function(t, i, c) {
            this.context.expressionContextNode = t,
            this.context.caseInsensitive = ct.detectHtmlDom(t);
            var m = this.xpath.evaluate(this.context);
            return new q(m,i)
        }
        ,
        he.prototype = {},
        he.prototype.constructor = he,
        he.superclass = Object.prototype;
        function he(t) {
            this.xpathNSResolver = t
        }
        he.prototype.getNamespace = function(t, i) {
            return this.xpathNSResolver == null ? null : this.xpathNSResolver.lookupNamespaceURI(t)
        }
        ,
        oe.prototype = {},
        oe.prototype.constructor = oe,
        oe.superclass = Object.prototype;
        function oe(t) {
            this.node = t,
            this.namespaceResolver = new Kt
        }
        oe.prototype.lookupNamespaceURI = function(t) {
            return this.namespaceResolver.getNamespace(t, this.node)
        }
        ,
        q.prototype = {},
        q.prototype.constructor = q,
        q.superclass = Object.prototype;
        function q(t, i) {
            switch (i == q.ANY_TYPE && (t.constructor === W ? i = q.STRING_TYPE : t.constructor === V ? i = q.NUMBER_TYPE : t.constructor === U ? i = q.BOOLEAN_TYPE : t.constructor === I && (i = q.UNORDERED_NODE_ITERATOR_TYPE)),
            this.resultType = i,
            i) {
            case q.NUMBER_TYPE:
                this.numberValue = t.numberValue();
                return;
            case q.STRING_TYPE:
                this.stringValue = t.stringValue();
                return;
            case q.BOOLEAN_TYPE:
                this.booleanValue = t.booleanValue();
                return;
            case q.ANY_UNORDERED_NODE_TYPE:
            case q.FIRST_ORDERED_NODE_TYPE:
                if (t.constructor === I) {
                    this.singleNodeValue = t.first();
                    return
                }
                break;
            case q.UNORDERED_NODE_ITERATOR_TYPE:
            case q.ORDERED_NODE_ITERATOR_TYPE:
                if (t.constructor === I) {
                    this.invalidIteratorState = !1,
                    this.nodes = t.toArray(),
                    this.iteratorIndex = 0;
                    return
                }
                break;
            case q.UNORDERED_NODE_SNAPSHOT_TYPE:
            case q.ORDERED_NODE_SNAPSHOT_TYPE:
                if (t.constructor === I) {
                    this.nodes = t.toArray(),
                    this.snapshotLength = this.nodes.length;
                    return
                }
                break
            }
            throw new Wt(Wt.TYPE_ERR)
        }
        q.prototype.iterateNext = function() {
            if (this.resultType != q.UNORDERED_NODE_ITERATOR_TYPE && this.resultType != q.ORDERED_NODE_ITERATOR_TYPE)
                throw new Wt(Wt.TYPE_ERR);
            return this.nodes[this.iteratorIndex++]
        }
        ,
        q.prototype.snapshotItem = function(t) {
            if (this.resultType != q.UNORDERED_NODE_SNAPSHOT_TYPE && this.resultType != q.ORDERED_NODE_SNAPSHOT_TYPE)
                throw new Wt(Wt.TYPE_ERR);
            return this.nodes[t]
        }
        ,
        q.ANY_TYPE = 0,
        q.NUMBER_TYPE = 1,
        q.STRING_TYPE = 2,
        q.BOOLEAN_TYPE = 3,
        q.UNORDERED_NODE_ITERATOR_TYPE = 4,
        q.ORDERED_NODE_ITERATOR_TYPE = 5,
        q.UNORDERED_NODE_SNAPSHOT_TYPE = 6,
        q.ORDERED_NODE_SNAPSHOT_TYPE = 7,
        q.ANY_UNORDERED_NODE_TYPE = 8,
        q.FIRST_ORDERED_NODE_TYPE = 9;
        function ut(t, i) {
            t.createExpression = function(c, m) {
                try {
                    return new ct(c,m,i)
                } catch (f) {
                    throw new Wt(Wt.INVALID_EXPRESSION_ERR,f)
                }
            }
            ,
            t.createNSResolver = function(c) {
                return new oe(c)
            }
            ,
            t.evaluate = function(c, m, f, y, C) {
                if (y < 0 || y > 9)
                    throw {
                        code: 0,
                        toString: function() {
                            return "Request type not supported"
                        }
                    };
                return t.createExpression(c, f, i).evaluate(m, y, C)
            }
        }
        try {
            var je = !0;
            try {
                document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("XPath", null) && (je = !1)
            } catch {}
            je && ut(document, new v)
        } catch {}
        ut(o, new v),
        function() {
            var t = new v
              , i = new Kt
              , c = new Ct
              , m = new yt;
            function f(T) {
                return {
                    getNamespace: function(z, it) {
                        var Tt = T(z, it);
                        return Tt || i.getNamespace(z, it)
                    }
                }
            }
            function y(T) {
                return f(T.getNamespace.bind(T))
            }
            function C(T) {
                return f(function(z) {
                    return T[z]
                })
            }
            function Q(T) {
                return T && typeof T.getNamespace == "function" ? y(T) : typeof T == "function" ? f(T) : typeof T == "object" ? C(T) : i
            }
            function nt(T) {
                if (T === null || typeof T > "u" || T instanceof W || T instanceof U || T instanceof V || T instanceof I)
                    return T;
                switch (typeof T) {
                case "string":
                    return new W(T);
                case "boolean":
                    return new U(T);
                case "number":
                    return new V(T)
                }
                var z = new I;
                return z.addArray([].concat(T)),
                z
            }
            function D(T) {
                return function(z) {
                    var it = Array.prototype.slice.call(arguments, 1).map(function(qt) {
                        return qt.evaluate(z)
                    })
                      , Tt = T.apply(this, [].concat(z, it));
                    return nt(Tt)
                }
            }
            function G(T) {
                return {
                    getFunction: function(z, it) {
                        var Tt = T(z, it);
                        return Tt ? D(Tt) : c.getFunction(z, it)
                    }
                }
            }
            function kt(T) {
                return G(T.getFunction.bind(T))
            }
            function _(T) {
                return G(function(z) {
                    return T[z]
                })
            }
            function ae(T) {
                return T && typeof T.getFunction == "function" ? kt(T) : typeof T == "function" ? G(T) : typeof T == "object" ? _(T) : c
            }
            function ue(T) {
                return {
                    getVariable: function(z, it) {
                        var Tt = T(z, it);
                        return nt(Tt)
                    }
                }
            }
            function te(T) {
                if (T) {
                    if (typeof T.getVariable == "function")
                        return ue(T.getVariable.bind(T));
                    if (typeof T == "function")
                        return ue(T);
                    if (typeof T == "object")
                        return ue(function(z) {
                            return T[z]
                        })
                }
                return m
            }
            function Ft(T, z, it) {
                T in it && (z[T] = it[T])
            }
            function Z(T) {
                var z = new Ut;
                return T ? (z.namespaceResolver = Q(T.namespaces),
                z.functionResolver = ae(T.functions),
                z.variableResolver = te(T.variables),
                z.expressionContextNode = T.node,
                Ft("allowAnyNamespaceForNoPrefix", z, T),
                Ft("isHtml", z, T)) : z.namespaceResolver = i,
                z
            }
            function Ge(T, z) {
                var it = Z(z);
                return T.evaluate(it)
            }
            var ot = {
                evaluate: function(T) {
                    return Ge(this.expression, T)
                },
                evaluateNumber: function(T) {
                    return this.evaluate(T).numberValue()
                },
                evaluateString: function(T) {
                    return this.evaluate(T).stringValue()
                },
                evaluateBoolean: function(T) {
                    return this.evaluate(T).booleanValue()
                },
                evaluateNodeSet: function(T) {
                    return this.evaluate(T).nodeset()
                },
                select: function(T) {
                    return this.evaluateNodeSet(T).toArray()
                },
                select1: function(T) {
                    return this.select(T)[0]
                }
            };
            function Ae(T) {
                var z = t.parse(T);
                return Object.create(ot, {
                    expression: {
                        value: z
                    }
                })
            }
            o.parse = Ae
        }(),
        o.XPath = tt,
        o.XPathParser = v,
        o.XPathResult = q,
        o.Step = N,
        o.NodeTest = k,
        o.BarOperation = It,
        o.NamespaceResolver = Kt,
        o.FunctionResolver = Ct,
        o.VariableResolver = yt,
        o.Utilities = F,
        o.XPathContext = Ut,
        o.XNodeSet = I,
        o.XBoolean = U,
        o.XString = W,
        o.XNumber = V,
        o.select = function(t, i, c) {
            return o.selectWithResolver(t, i, null, c)
        }
        ,
        o.useNamespaces = function(t) {
            var i = {
                mappings: t || {},
                lookupNamespaceURI: function(c) {
                    return this.mappings[c]
                }
            };
            return function(c, m, f) {
                return o.selectWithResolver(c, m, i, f)
            }
        }
        ,
        o.selectWithResolver = function(t, i, c, m) {
            var f = new ct(t,c,new v)
              , y = q.ANY_TYPE
              , C = f.evaluate(i, y, null);
            return C.resultType == q.STRING_TYPE ? C = C.stringValue : C.resultType == q.NUMBER_TYPE ? C = C.numberValue : C.resultType == q.BOOLEAN_TYPE ? C = C.booleanValue : (C = C.nodes,
            m && (C = C[0])),
            C
        }
        ,
        o.select1 = function(t, i) {
            return o.select(t, i, !0)
        }
    }
    )(n)
}
)(Re);
const gu = Ya(Re);
class Va {
    static getPossibleAcceleratorsForUser(n, o) {
        dt.get("/users/" + n + "/possibleaccelerators", u => {
            o(u)
        }
        )
    }
}
const ie = class ie {
    static addAcceleratorLocations(n, o) {
        if (n = n.toLowerCase(),
        this._acceleratorContainers || (this._acceleratorContainers = {}),
        (!this._acceleratorContainers[n] || o.match(/^https.*/) && !this._acceleratorContainers[n].match(/^https.*/)) && (this._acceleratorContainers[n] = o),
        this._acceleratorPossible = !0,
        this._listeners[n])
            for (const u of this._listeners[n])
                u && u()
    }
    static clearAcceleratorOutlines() {
        this._acceleratorPossible = !1;
        for (const n in this._acceleratorContainers)
            delete this._acceleratorContainers[n];
        this._acceleratorUriFailures = []
    }
    static addAcceleratorFailure(n) {
        this._acceleratorUriFailures.push(n)
    }
    static stopListeningForAcceleratorContainer(n) {
        for (const o of Object.keys(this._listeners)) {
            const u = this._listeners[o].indexOf(n);
            u > -1 && this._listeners[o].splice(u, 1)
        }
    }
    static listenForAcceleratorContainer(n, o) {
        n = n.toLowerCase().replace(/_/g, "-"),
        this._listeners[n] || (this._listeners[n] = []),
        this._listeners[n].indexOf(o) === -1 && this._listeners[n].push(o),
        this.checkForAcceleratorByContainer(n) && o && o()
    }
    static checkForAcceleratorByContainer(n) {
        return this.getAcceleratorForContainer(n) != null
    }
    static getAcceleratorForContainer(n) {
        return this._acceleratorContainers ? this._acceleratorContainers[n] : null
    }
    static getConfigOrSimDef(n, o, u) {
        if (n.toLowerCase().endsWith(".js") || n.toLowerCase().endsWith(".configjs")) {
            let h = n;
            return n.toLowerCase().endsWith(".js") && (h = n.substring(0, n.length - 3) + ".configjs"),
            new Promise(function(p, x) {
                ie.get(h, o, u).then(function(S) {
                    p(S)
                }).catch(S => {
                    ie.get(n, o, u).then(function(b) {
                        p(b)
                    }, function(b) {
                        x(b)
                    }).catch(function(b) {
                        x(b)
                    })
                }
                )
            }
            )
        } else
            return new Promise(function(h, p) {
                ie.get(n, o, u).then(function(x) {
                    h(x)
                }, function(x) {
                    p(x)
                }).catch(function(x) {
                    p(x)
                })
            }
            )
    }
    static get(n, o=!1, u=!1, h=!1) {
        return this.getWithUrl(n, o, u, h).then( ([p]) => p)
    }
    static getWithUrl(n, o=!1, u=!1, h=!1) {
        this.requestAccelerators();
        let p = n.toLowerCase();
        const x = sr.Current.getContentServerUri();
        if (p.indexOf(x) >= 0) {
            const S = this.getContentContainer(p, x);
            S.indexOf("_") >= 0 && (p = p.replace(S, S.replace(/_/g, "-")));
            const b = this._acceleratorContainers;
            if (this._acceleratorPossible && this._acceleratorUriFailures.indexOf(p) === -1 && p.indexOf(x) >= 0 && b[S.toLowerCase()] != null) {
                const L = this.getContentPath(p);
                return new Promise(function($, M) {
                    h ? Ce.getArrayBuffer(L, o, u).then(function(R) {
                        $([R, L])
                    }, function() {
                        ie.addAcceleratorFailure(p),
                        Ce.getArrayBuffer(p, o, u).then(function(R) {
                            $([R, p])
                        }, function(R) {
                            M(R)
                        })
                    }) : Ce.get(L, o, u).then(function(R) {
                        $([R, L])
                    }, function() {
                        ie.addAcceleratorFailure(p),
                        Ce.get(p, o, u).then(function(R) {
                            $([R, p])
                        }, function(R) {
                            M(R)
                        })
                    })
                }
                )
            }
        }
        return h ? Ce.getArrayBuffer(p, o, u).then(S => [S, p]) : Ce.get(p, o, u).then(S => [S, p])
    }
    static getContentContainer(n, o) {
        let u = n.substring(n.indexOf(o) + o.length + 1);
        if (u.indexOf("_version") === 0) {
            const S = u.indexOf("/")
              , b = u.indexOf("\\");
            S > 0 && (b === -1 || b > S) ? u = u.substring(S + 1) : u = u.substring(b + 1)
        }
        let h;
        const p = u.indexOf("/")
          , x = u.indexOf("\\");
        return p > 0 ? x > 0 && x < p ? h = u.substring(0, x) : h = u.substring(0, p) : x > 0 ? h = u.substring(0, x) : h = u,
        h
    }
    static getContentPathAsync(n) {
        return new Promise(o => {
            this.requestAccelerators().then( () => {
                const u = this.getContentPath(n);
                u === n ? o(n) : Ce.isUriValid(u).then(h => {
                    o(h ? u : n)
                }
                )
            }
            )
        }
        )
    }
    static getContentPath(n) {
        if (this.requestAccelerators(),
        this._acceleratorPossible && this._acceleratorUriFailures.indexOf(n) === -1) {
            const o = sr.Current.getContentServerUri();
            if (n.indexOf(o) >= 0) {
                let u = this.getContentContainer(n, o);
                if (u.indexOf("_") > -1) {
                    const p = u.replace("_", "-");
                    n = n.replace(u, p),
                    u = p
                }
                const h = this._acceleratorContainers[u.toLowerCase()];
                if (h != null)
                    return n.replace(o, h)
            }
        }
        return n
    }
    static requestAccelerators() {
        return this._acceleratorRequestPromise || (this._acceleratorRequestPromise = new Promise(n => {
            Ba.getFirstSignedOnUser().then(o => {
                Va.getPossibleAcceleratorsForUser(o.userProfile.userProfileId, u => {
                    this.getContainersOnAccelerator(u).then(n)
                }
                )
            }
            )
        }
        )),
        this._acceleratorRequestPromise
    }
    static getContainersOnAccelerator(n) {
        if (!n)
            return Promise.resolve();
        this.clearAcceleratorOutlines();
        const o = [];
        for (let u = 0; u < n.length; u++) {
            const h = n[u];
            o.push(new Promise(p => {
                const x = new XMLHttpRequest;
                x.onreadystatechange = function() {
                    if (x.readyState === 4) {
                        if (x.status >= 200 && x.status < 400)
                            try {
                                if (x.responseText) {
                                    const S = x.responseText.split(`\r
`)
                                      , b = x.responseURL.replace("/containers", "");
                                    for (let A = 0; A < S.length; A++)
                                        ie.addAcceleratorLocations(S[A], b)
                                }
                            } catch {}
                        p()
                    }
                }
                ,
                x.open("GET", h + "/containers", !0),
                x.timeout = 3e4,
                x.send()
            }
            ))
        }
        return Promise.all(o)
    }
}
;
ie._acceleratorUriFailures = [],
ie._acceleratorPossible = !1,
ie._listeners = {};
let Ie = ie;
class J {
    static getDirectoryName(n) {
        const o = n.replace(/\//g, "\\").split("\\");
        let u = "";
        for (let h = 0; h < o.length - 1; h++)
            u.length > 0 && (u += "\\"),
            u += o[h];
        return u
    }
    static isPathRooted(n) {
        return n.indexOf(":") > -1
    }
    static getExtension(n) {
        return n.split(".").pop().toLowerCase()
    }
    static changeExtension(n, o) {
        const u = n.lastIndexOf(".");
        return u > -1 ? n.substr(0, u) + o : n + o
    }
    static combine(n, o) {
        return n[n.length - 1] === "\\" && (n = n.substr(0, n.length - 1)),
        o[0] === "\\" && (o = o.substr(1, o.length - 1)),
        n.length > 0 ? n + "\\" + o : o
    }
    static getFileName(n) {
        const o = n.replace(/\//g, "\\").split("\\");
        return o.length > 0 ? o[o.length - 1] : n
    }
    static getFileNameWithoutExtension(n) {
        n = J.getFileName(n);
        const o = n.lastIndexOf(".");
        return o > -1 ? n.substr(0, o) : n
    }
    static expandRelativeUrl(n, o) {
        const u = n.substring(0, n.lastIndexOf("/") + 1);
        return (o.indexOf(":") > -1 ? o : u + o).toLowerCase()
    }
    static convertBackslashesToForward(n) {
        return n.replace(/\\/g, "/")
    }
    static convertForwardSlashesToBack(n) {
        return n.replace(/\//g, "\\")
    }
    static rootTilde(n) {
        return n.indexOf("~\\") === 0 ? n.replace("~\\", "\\") : n.indexOf("~/") === 0 ? n.replace("~/", "/") : n.indexOf("~") === 0 ? n.replace("~", "/") : n
    }
    static combinePaths(n, o) {
        return o.indexOf(n) === 0 ? o : n.endsWith("/") && o.indexOf("/") === 0 ? n + o.replace("/", "") : n.endsWith("\\") && o.indexOf("\\") === 0 || n.endsWith("/") && o.indexOf("\\") === 0 ? n + o.replace("\\", "") : n.endsWith("\\") && o.indexOf("/") === 0 ? n + o.replace("/", "") : !n.endsWith("\\") && !n.endsWith("/") && o.indexOf("/") !== 0 && o.indexOf("\\") !== 0 ? n + "/" + o : n + o
    }
}
class jr {
    constructor(n) {
        this.XML = n
    }
    buildDict() {
        this._resourceDict = {},
        Re.select("//Resource", this.XML).forEach(o => {
            const u = o.getAttribute("href");
            this._resourceDict[u] || (this._resourceDict[u] = []),
            this._resourceDict[u].push(o)
        }
        )
    }
    getResourceNodesByHref(n) {
        return this._resourceDict || this.buildDict(),
        this._resourceDict[n] || []
    }
    getResourcesInFolderPath(n) {
        return Re.select(`//Resource[starts-with(translate(@href, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), '${n}')]`, this.XML)
    }
    get hasModernExams() {
        const n = Re.select("//Resource[contains(translate(@href, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), '.exam.xml')]", this.XML);
        return n != null && n.length > 0
    }
}
var lt = (d => (d[d.Unknown = 0] = "Unknown",
d[d.Text = 1] = "Text",
d[d.Video = 2] = "Video",
d[d.Simulation = 3] = "Simulation",
d[d.Exam = 4] = "Exam",
d[d.Question = 5] = "Question",
d[d.TableOfContents = 6] = "TableOfContents",
d[d.Glossary = 7] = "Glossary",
d[d.Section = 8] = "Section",
d[d.Image = 9] = "Image",
d[d.Certification = 10] = "Certification",
d))(lt || {})
  , ye = (d => (d[d.None = 0] = "None",
d[d.CertificationExam = 1] = "CertificationExam",
d[d.CustomExam = 2] = "CustomExam",
d[d.PracticeExam = 3] = "PracticeExam",
d[d.SectionExam = 4] = "SectionExam",
d[d.StandardSimulation = 5] = "StandardSimulation",
d[d.SkillsLabSimulation = 6] = "SkillsLabSimulation",
d[d.AppliedLabSimulation = 7] = "AppliedLabSimulation",
d[d.ChallengeLabSimulation = 8] = "ChallengeLabSimulation",
d[d.StandardQuestion = 9] = "StandardQuestion",
d[d.UserDefinedQuestion = 10] = "UserDefinedQuestion",
d[d.Demo = 11] = "Demo",
d[d.QuestionAsSimulation = 12] = "QuestionAsSimulation",
d[d.LiveLab = 13] = "LiveLab",
d[d.DomainPractice = 14] = "DomainPractice",
d[d.LearningReview = 15] = "LearningReview",
d[d.PBQ = 16] = "PBQ",
d[d.Skillable = 17] = "Skillable",
d[d.Workbench = 18] = "Workbench",
d[d.Interactive = 19] = "Interactive",
d[d.SecureQuestion = 20] = "SecureQuestion",
d[d.HasVideo = 21] = "HasVideo",
d))(ye || {})
  , Ha = (d => (d.DomainPractice = "domainpractice",
d))(Ha || {})
  , vr = (d => (d[d.Section = 0] = "Section",
d[d.Resource = 1] = "Resource",
d))(vr || {});
const Xr = {
    getSortString: d => {
        const n = function(u) {
            return parseInt(u, 10).toString(16).padStart(3, "0")
        };
        return d ? function(u) {
            let h = u;
            const p = h.match(/^(\d*)\.(\d*)\.(\d*)\s*(.*)|^(\d*)\.(\d*)\s*(.*)/);
            return p && p.length === 8 && (p[1] != null ? h = `${n(p[1])}.${n(p[2])}.${n(p[3])} ${p[4]}` : p[5] != null && (h = `${n(p[5])}.${n(p[6])} ${p[7]}`)),
            h
        }(d) : ""
    }
    ,
    sort: (d, n, o) => d == null ? null : d.sort( (u, h) => {
        var p, x;
        return Xr.getSortString((p = u[n]) == null ? void 0 : p.toString()).localeCompare(Xr.getSortString((x = h[n]) == null ? void 0 : x.toString()), o)
    }
    ),
    findResourcesByHref(d, n) {
        return !n || !d ? [] : n.contents.reduce( (h, p) => h.concat(p.sections), []).map(h => Kn(h, d.toLowerCase())).reduce( (h, p) => h.concat(p), [])
    }
};
function Kn(d, n) {
    return d.outlineType === vr.Section ? d.items.map(o => Kn(o, n)).reduce( (o, u) => o.concat(u), []) : d.href === n ? [d] : []
}
function Qt(d, n, o) {
    return Array.from(d.children).filter(u => u.tagName.toLowerCase() === n.toLowerCase()).map(u => new o(u))
}
function Jr(d, n, o) {
    return Qt(d, n, o)[0]
}
class se {
    static parseOutline(n) {
        return n == null ? null : se.transform(new ja(typeof n == "string" ? new DOMParser().parseFromString(n, "text/xml") : n))
    }
    static transform(n) {
        const o = n == null ? void 0 : n.Navigation
          , h = o.Product.Outline.map(p => p).map(p => p.TOC.map(x => x)).reduce( (p, x) => p.concat(x), []);
        return {
            glossaryName: o.Environment.Glossary.map(p => p.name)[0],
            environmentVariables: se.transformEnvironmentVariables(o.Environment.EnvironmentVariables),
            contents: h.map(se.transformTableOfContents)
        }
    }
    static transformEnvironmentVariables(n) {
        return n.map(h => h.EnvironmentVariable).map(h => h.map(p => p)).reduce( (h, p) => h.concat(p), []).reduce( (h, p) => Object.assign(h, p), {})
    }
    static decodeUnicode(n) {
        try {
            return n !== null ? JSON.parse(`"${n}"`) : n
        } catch {
            return n
        }
    }
    static transformTableOfContents(n) {
        const o = {
            index: n.index,
            title: se.decodeUnicode(n.title),
            href: n.href,
            sections: []
        };
        return o.sections = n.Section.map(u => se.transformSection(u, o)),
        o
    }
    static transformSection(n, o) {
        var h;
        const u = {
            outlineType: vr.Section,
            href: this.transformHref(n),
            index: n.index,
            parent: o,
            title: se.decodeUnicode(n.title),
            type: (h = n.type) == null ? void 0 : h.toLowerCase(),
            items: []
        };
        return u.items = n.Resource.map(p => se.transformResource(p, u)),
        u.items = u.items.concat(n.Section.map(p => se.transformSection(p, u))),
        u.items.sort( (p, x) => {
            const S = (p.index || "").split(".")
              , b = parseInt(S[0])
              , A = parseInt(S[1] || "-1")
              , L = parseInt(S[2] || "-1")
              , $ = (x.index || "").split(".")
              , M = parseInt($[0])
              , R = parseInt($[1] || "-1")
              , K = parseInt($[2] || "-1")
              , O = b - M
              , v = A - R
              , tt = L - K;
            return O || v || tt
        }
        ),
        u
    }
    static transformResource(n, o) {
        var h, p;
        return {
            outlineType: vr.Resource,
            href: this.transformHref(n),
            index: n.index,
            title: se.decodeUnicode(n.title),
            type: (h = n.type) == null ? void 0 : h.toLowerCase(),
            section: o,
            duration: n.duration ? parseInt(n.duration) : null,
            hideFromCustomExams: ((p = n.hideFromCustomExams) == null ? void 0 : p.toLowerCase()) === "true"
        }
    }
    static transformHref(n) {
        var o;
        return (o = n.href && n.element ? `${n.href}?${n.element}` : n.href) == null ? void 0 : o.toLowerCase()
    }
}
class ja {
    constructor(n) {
        this.xml = n
    }
    get Navigation() {
        return Jr(this.xml, "navigation", Ga)
    }
}
class Ga {
    constructor(n) {
        this.xml = n
    }
    get resolution() {
        return this.xml.getAttribute("resolution")
    }
    get ontime() {
        return this.xml.getAttribute("ontime")
    }
    get "en-us"() {
        return this.xml.getAttribute("en-us")
    }
    get currentLanguage() {
        return this.xml.getAttribute("currentLanguage")
    }
    get "jira_en-us"() {
        return this.xml.getAttribute("jira_en-us")
    }
    get Environment() {
        return Jr(this.xml, "environment", $a)
    }
    get Product() {
        return Jr(this.xml, "product", Ja)
    }
}
class $a {
    constructor(n) {
        this.xml = n
    }
    get Glossary() {
        return Qt(this.xml, "Glossary", Xa)
    }
    get Objectives() {
        return Qt(this.xml, "Objectives", Gr)
    }
    get ExamExmRedirectPath() {
        return Qt(this.xml, "ExamExmRedirectPath", Gr)
    }
    get SilverlightSimRedirectPath() {
        return Qt(this.xml, "SilverlightSimRedirectPath", Gr)
    }
    get EnvironmentVariables() {
        return Qt(this.xml, "EnvironmentVariables", qa)
    }
}
class qa {
    constructor(n) {
        this.xml = n
    }
    get EnvironmentVariable() {
        return Qt(this.xml, "EnvironmentVariable", Qa).map(n => n.toObject())
    }
}
class Qa {
    constructor(n) {
        this.xml = n
    }
    toObject() {
        const n = {};
        return Array.from(this.xml.attributes).forEach(o => {
            n[o.nodeName] = o.nodeValue
        }
        ),
        n
    }
}
class Gr {
    constructor(n) {
        this.xml = n
    }
    get href() {
        return this.xml.getAttribute("href")
    }
}
class Xa {
    constructor(n) {
        this.xml = n
    }
    get name() {
        return this.xml.getAttribute("name")
    }
}
class Ja {
    constructor(n) {
        this.xml = n
    }
    get Outline() {
        return Qt(this.xml, "Outline", za)
    }
}
class za {
    constructor(n) {
        this.xml = n
    }
    get TOC() {
        return Qt(this.xml, "TOC", Za)
    }
}
class Za {
    constructor(n) {
        this.xml = n
    }
    get index() {
        return this.xml.getAttribute("index")
    }
    get title() {
        return this.xml.getAttribute("title")
    }
    get href() {
        return this.xml.getAttribute("href")
    }
    get Section() {
        return Qt(this.xml, "Section", Zr)
    }
}
class ts {
    constructor(n) {
        this.xml = n
    }
    get href() {
        return this.xml.getAttribute("href")
    }
    get element() {
        return this.xml.getAttribute("element")
    }
}
class Zr extends ts {
    constructor(n) {
        super(n)
    }
    get index() {
        return this.xml.getAttribute("index")
    }
    get title() {
        return this.xml.getAttribute("title")
    }
    get type() {
        return this.xml.getAttribute("type")
    }
    get Section() {
        return Qt(this.xml, "Section", Zr)
    }
    get Resource() {
        return Qt(this.xml, "Resource", Ka)
    }
}
class Ka extends ts {
    constructor(n) {
        super(n)
    }
    get index() {
        return this.xml.getAttribute("index")
    }
    get title() {
        return this.xml.getAttribute("title")
    }
    get type() {
        return this.xml.getAttribute("type")
    }
    get duration() {
        return this.xml.getAttribute("duration")
    }
    get hideFromCustomExams() {
        return this.xml.getAttribute("hideFromCustomExams")
    }
}
const tu = or("resource/demo.png")
  , eu = or("resource/exam.png")
  , ru = or("resource/sim.png")
  , nu = or("resource/text.png")
  , su = or("resource/video.png")
  , Mt = class Mt {
    static getResourceTitle(n, o, u=!1) {
        if (o.nodeName === "TOC")
            return n("table_of_contents");
        if (o.nodeName === "Glossary")
            return n("glossary");
        {
            const h = se.decodeUnicode(o.getAttribute("title"));
            if (h) {
                const p = o.getAttribute("index");
                return p && !u ? p + " " + h : h
            }
        }
    }
    static getResourceTitleAndIndex(n, o) {
        if (o.nodeName === "TOC")
            return {
                title: n("table_of_contents"),
                index: ""
            };
        if (o.nodeName === "Glossary")
            return {
                title: n("glossary"),
                index: ""
            };
        {
            const u = o.getAttribute("title");
            let h = "";
            return u && (h = o.getAttribute("index")),
            {
                title: u,
                index: h
            }
        }
    }
    static getResourceTitleAndIndex2(n) {
        const o = n.getAttribute("title");
        let u = "";
        return o && (u = n.getAttribute("index")),
        {
            title: o,
            index: u
        }
    }
    static getResourceIndex(n) {
        return n.getAttribute("index")
    }
    static getResourceType(n, o) {
        var p, x;
        if (o != null)
            return o.resourceType;
        let u = lt.Unknown;
        const h = (p = n.getAttribute("href")) == null ? void 0 : p.toLowerCase();
        switch (n.nodeName.toLowerCase()) {
        case "toc":
            h != null && J.getExtension(h).indexOf("htm") > -1 ? u = lt.Section : u = lt.TableOfContents;
            break;
        case "glossary":
            u = lt.Glossary;
            break;
        case "section":
            u = lt.Section;
            break;
        case "resource":
            const S = (x = n.getAttribute("type")) == null ? void 0 : x.toLowerCase();
            if (S === "pbq")
                u = lt.Exam;
            else if (h != null) {
                const b = J.getExtension(h);
                switch (b) {
                case "jpg":
                case "png":
                    u = lt.Image;
                    break;
                case "txt":
                case "text":
                case "htm":
                case "html":
                    S === "sim" ? u = lt.Simulation : u = lt.Text;
                    break;
                case "mp4":
                case "wmv":
                case "ismv":
                case "avi":
                    u = lt.Video;
                    break;
                case "sim":
                case "sdf":
                case "rdx":
                case "swf":
                case "js":
                case "json":
                    u = lt.Simulation;
                    break;
                case "dat":
                case "exm":
                    S === "sim" ? u = lt.Simulation : u = lt.Exam;
                    break;
                case "xml":
                    if (h.toLowerCase().endsWith("question.xml"))
                        S === "sim" ? u = lt.Simulation : u = lt.Question;
                    else if (h.toLowerCase().endsWith(".exam.xml"))
                        u = lt.Exam;
                    else
                        throw new Error("Unrecognized file extension: " + b);
                    break;
                default:
                    if (S === "livelab")
                        u = lt.Simulation;
                    else
                        throw new Error("Unrecognized file extension: " + b)
                }
            }
            break;
        default:
            throw new Error("Unrecognized node type: " + n.nodeName.toLowerCase())
        }
        return u
    }
    static getResourceSubType(n, o) {
        var h;
        if (o != null)
            return o.resourceSubType;
        const u = (h = n.getAttribute("type")) == null ? void 0 : h.toLowerCase();
        switch (Mt.getResourceType(n, o)) {
        case lt.Video:
            if (u === "demo")
                return ye.Demo;
            break;
        case lt.Simulation:
            if (n.getAttribute("href").toLowerCase().endsWith(".question.xml"))
                return ye.QuestionAsSimulation;
            break;
        case lt.Section:
            if (u === "domainpractice")
                return ye.DomainPractice;
            break;
        case lt.Exam:
            if (u === "pbq")
                return ye.PBQ;
            if (u === "interactive")
                return ye.Interactive;
            break
        }
        return ye.None
    }
    static getHref(n, o=!0, u=!1) {
        if (!u && this.getResourceType(n) === lt.TableOfContents)
            return null;
        let h = n.getAttribute("href");
        if (o) {
            const p = n.getAttribute("element");
            p != null && p.length > 0 && (h += "?" + p)
        }
        return h != null ? h.toLowerCase() : h
    }
    static getResourceImage(n, o) {
        let u;
        switch (Mt.getResourceType(n, o)) {
        case lt.Video:
            Mt.getResourceSubType(n, o) === ye.Demo ? u = tu : u = su;
            break;
        case lt.Text:
            u = nu;
            break;
        case lt.Simulation:
            u = ru;
            break;
        case lt.Exam:
        case lt.Question:
            u = eu;
            break;
        default:
            u = null;
            break
        }
        return u
    }
    static getSection(n, o) {
        o = o || !1;
        let u = n.parentNode
          , h = null;
        for (; u && u.parentNode != null && u.parentNode.nodeName.toLocaleLowerCase() === "section"; )
            h = u,
            u = u.parentNode;
        return o && (u = h),
        u ? {
            sectionIndex: u.getAttribute("index"),
            sectionTitle: u.getAttribute("title"),
            sectionType: u.getAttribute("type")
        } : null
    }
    static getSubSection(n) {
        return this.getSection(n, !0)
    }
    static extractRelativePath(n, o) {
        n = J.convertForwardSlashesToBack(n),
        o = J.convertForwardSlashesToBack(o);
        let u = n.replace(/\\$/, "");
        for (; u.length > 0 && o.indexOf("..\\") === 0; )
            u = J.getDirectoryName(u),
            o = o.substring(3);
        if (J.isPathRooted(o)) {
            const h = u.split("\\")
              , p = o.split("\\");
            let x = 0;
            for (; x < h.length && x < p.length && gt.stringCompareCaseInsensitive(h[x], p[x]) === 0; )
                x++;
            if (x > 0) {
                let S = ""
                  , b = h.length - x;
                gt.isNullOrEmpty(J.getExtension(n)) || b--;
                for (let A = 1; A <= b; A++)
                    S.length === 0 ? S += ".." : S += "\\..";
                for (let A = x; A < p.length; A++)
                    S.length === 0 ? S = p[A] : S += "\\" + p[A];
                return S
            }
        }
        return J.combine(u, o)
    }
    static getCourseRootUrl(n, o, u) {
        const h = sr.Current.getContentServerUri(o).toLowerCase()
          , p = new URL(h).pathname.length > 1
          , x = n.locale.toLowerCase()
          , S = o.outlineType == null || o.outlineType === Ke.Html5;
        let b = o.outlineHref.replace(/\.xml$/i, "").replace(/_/g, "-").toLowerCase();
        return S ? p ? h.endsWith("/") ? h : h + "/" : (x && (b += `-${x}`),
        `${h}/${b}/${n.locale}/`) : u && o.outlineType === Ke.Silverlight ? `http://content.testout.com/${o.outlineHref.replace(/\.xml$/i, "").toLowerCase()}/` : p ? h.toLowerCase() : `${h}/${b}/`
    }
    static getOutlineDirectory(n) {
        return n.outlineType == null || n.outlineType === Ke.Html5 ? "" : "Outlines"
    }
    static getOutlineUrl(n, o) {
        const u = Mt.getOutlineDirectory(o);
        let h = Mt.getCourseRootUrl(n, o);
        return u.length > 0 && (h += u + "/"),
        h += o.outlineHref,
        J.convertBackslashesToForward(h).toLowerCase()
    }
    static getResourceUrl(n, o, u) {
        if (gt.isNullOrEmpty(u))
            return "";
        if (J.isPathRooted(u))
            return u;
        if (!n)
            return "";
        const h = Mt.getCourseRootUrl(n, o);
        return J.convertBackslashesToForward(h + this.getRelativeResourceUrl(n, o, u))
    }
    static getRelativeResourceUrl(n, o, u) {
        if (gt.isNullOrEmpty(u))
            return "";
        if (J.isPathRooted(u))
            return u;
        const h = Mt.getOutlineDirectory(o);
        let p = o.outlineType === Ke.Silverlight ? u.replace(/^~\\/, "../") : u.replace(/^~\\/, "");
        return p.indexOf("~") > -1 && (p = p.replace(/^~/, "")),
        p.match(/\.exam\.xml$/i) && (p = p.replace(/\.exam\.xml$/i, ".exam.fex")),
        p.match(/\.question\.xml$/i) ? p = p.replace(/\.question\.xml$/i, ".question.fex") : p.match(/\.exm/i) && (p = J.getDirectoryName(p) + "/qx/" + J.changeExtension(J.getFileName(p), ".exam.fex")),
        J.convertBackslashesToForward(Mt.extractRelativePath(h, p)).toLowerCase()
    }
    static async getOutline(n, o) {
        if (n && o) {
            const u = Mt.getOutlineUrl(n, o)
              , h = await Ie.get(u, !1, !0);
            return new jr(h)
        } else
            return null
    }
    static async loadOutline(n, o, u) {
        if (n && o) {
            const h = `outline-${o.productVersionId}`
              , p = u && u[h];
            if (p)
                return p;
            {
                if (!o.outlineHref)
                    return null;
                const x = Mt.getOutlineUrl(n, o)
                  , S = await Ie.get(x, !1, !0)
                  , b = new jr(S);
                return u && (u[h] = b),
                b
            }
        } else
            return null
    }
    static async loadObjectives(n, o, u) {
        if (n && o) {
            const h = `objectives-${o.productVersionId}`
              , p = u && u[h];
            if (p)
                return p;
            {
                const x = Mt.getOutlineUrl(n, o).replace(/\.xml$/i, ".objectives.xml")
                  , S = await Ie.get(x, !1, !0)
                  , b = new jr(S);
                return u && (u[h] = b),
                b
            }
        } else
            return null
    }
}
;
Mt.getResourceSortString = function(n, o) {
    return Xr.getSortString(Mt.getResourceTitle(n, o, !1))
}
;
let zr = Mt;
var iu = (d => (d[d.Lab = 0] = "Lab",
d[d.Exam = 1] = "Exam",
d[d.Review = 2] = "Review",
d[d.Quiz = 3] = "Quiz",
d[d.Assessment = 4] = "Assessment",
d))(iu || {});
class xu {
    static getTabInteropStatus(n, o, u) {
        return dt.get("/tabinterops/" + n + "/" + o, u)
    }
    static getTabInteropForQuestion(n, o) {
        return dt.get(`/tabinterops/user/${n}/questionid/${o}`)
    }
    static async addSecondsToQuestion(n, o, u) {
        return dt.put(`/tabinterops/user/${n}/questionid/${o}/seconds/${u}`)
    }
    static async addSeconds(n, o, u) {
        return dt.put(`/tabinterops/${n}/${o}/additionalseconds/${u}`)
    }
    static setTabInteropQuestion(n, o, u) {
        return dt.put(`/tabinterops/${n}/${o}/questionid/${u}`)
    }
    static async setTabOpened(n, o, u, h) {
        return u && await dt.put(`/tabinterops/${n}/${o}/lock/${u}?clientId=${h}`),
        await dt.put(`/tabinterops/${n}/${o}/tabopened/true`)
    }
    static abandonTabInterop(n, o) {
        return dt.put("/tabinterops/" + n + "/" + o + "/tabopened/false", null)
    }
    static deleteTabInterop(n, o) {
        return dt.delete("/tabinterops/" + n + "/" + o)
    }
    static sendTabResponse(n, o, u, h) {
        return dt.put("/tabinterops/" + n + "/" + o + "/tabresponse", u, h)
    }
    static buildTabInteropId(n) {
        switch (n) {
        case 0:
            return qr().toString().replace(/.$/, "0");
        case 1:
        case 2:
        case 3:
        case 4:
            return qr().toString().replace(/.$/, "1");
        default:
            throw new Error("Invalid TypeType in buildTabInteropId")
        }
    }
}
function es(d, n, o, u) {
    return new (o || (o = Promise))(function(h, p) {
        function x(A) {
            try {
                b(u.next(A))
            } catch (L) {
                p(L)
            }
        }
        function S(A) {
            try {
                b(u.throw(A))
            } catch (L) {
                p(L)
            }
        }
        function b(A) {
            var L;
            A.done ? h(A.value) : (L = A.value,
            L instanceof o ? L : new o(function($) {
                $(L)
            }
            )).then(x, S)
        }
        b((u = u.apply(d, [])).next())
    }
    )
}
function ou(d) {
    throw new Error('Could not dynamically require "' + d + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
}
var $r, rs = {
    exports: {}
};
($r = rs).exports = function() {
    var d, n;
    function o() {
        return d.apply(null, arguments)
    }
    function u(e) {
        d = e
    }
    function h(e) {
        return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]"
    }
    function p(e) {
        return e != null && Object.prototype.toString.call(e) === "[object Object]"
    }
    function x(e, r) {
        return Object.prototype.hasOwnProperty.call(e, r)
    }
    function S(e) {
        if (Object.getOwnPropertyNames)
            return Object.getOwnPropertyNames(e).length === 0;
        var r;
        for (r in e)
            if (x(e, r))
                return !1;
        return !0
    }
    function b(e) {
        return e === void 0
    }
    function A(e) {
        return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]"
    }
    function L(e) {
        return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]"
    }
    function $(e, r) {
        var s, a = [], l = e.length;
        for (s = 0; s < l; ++s)
            a.push(r(e[s], s));
        return a
    }
    function M(e, r) {
        for (var s in r)
            x(r, s) && (e[s] = r[s]);
        return x(r, "toString") && (e.toString = r.toString),
        x(r, "valueOf") && (e.valueOf = r.valueOf),
        e
    }
    function R(e, r, s, a) {
        return yn(e, r, s, a, !0).utc()
    }
    function K() {
        return {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidEra: null,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1,
            parsedDateParts: [],
            era: null,
            meridiem: null,
            rfc2822: !1,
            weekdayMismatch: !1
        }
    }
    function O(e) {
        return e._pf == null && (e._pf = K()),
        e._pf
    }
    function v(e) {
        var r = null
          , s = !1
          , a = e._d && !isNaN(e._d.getTime());
        return a && (r = O(e),
        s = n.call(r.parsedDateParts, function(l) {
            return l != null
        }),
        a = r.overflow < 0 && !r.empty && !r.invalidEra && !r.invalidMonth && !r.invalidWeekday && !r.weekdayMismatch && !r.nullInput && !r.invalidFormat && !r.userInvalidated && (!r.meridiem || r.meridiem && s),
        e._strict && (a = a && r.charsLeftOver === 0 && r.unusedTokens.length === 0 && r.bigHour === void 0)),
        Object.isFrozen != null && Object.isFrozen(e) ? a : (e._isValid = a,
        e._isValid)
    }
    function tt(e) {
        var r = R(NaN);
        return e != null ? M(O(r), e) : O(r).userInvalidated = !0,
        r
    }
    n = Array.prototype.some ? Array.prototype.some : function(e) {
        var r, s = Object(this), a = s.length >>> 0;
        for (r = 0; r < a; r++)
            if (r in s && e.call(this, s[r], r, s))
                return !0;
        return !1
    }
    ;
    var Rt = o.momentProperties = []
      , rt = !1;
    function At(e, r) {
        var s, a, l, g = Rt.length;
        if (b(r._isAMomentObject) || (e._isAMomentObject = r._isAMomentObject),
        b(r._i) || (e._i = r._i),
        b(r._f) || (e._f = r._f),
        b(r._l) || (e._l = r._l),
        b(r._strict) || (e._strict = r._strict),
        b(r._tzm) || (e._tzm = r._tzm),
        b(r._isUTC) || (e._isUTC = r._isUTC),
        b(r._offset) || (e._offset = r._offset),
        b(r._pf) || (e._pf = O(r)),
        b(r._locale) || (e._locale = r._locale),
        g > 0)
            for (s = 0; s < g; s++)
                b(l = r[a = Rt[s]]) || (e[a] = l);
        return e
    }
    function St(e) {
        At(this, e),
        this._d = new Date(e._d != null ? e._d.getTime() : NaN),
        this.isValid() || (this._d = new Date(NaN)),
        rt === !1 && (rt = !0,
        o.updateOffset(this),
        rt = !1)
    }
    function j(e) {
        return e instanceof St || e != null && e._isAMomentObject != null
    }
    function Vt(e) {
        o.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e)
    }
    function xt(e, r) {
        var s = !0;
        return M(function() {
            if (o.deprecationHandler != null && o.deprecationHandler(null, e),
            s) {
                var a, l, g, w = [], P = arguments.length;
                for (l = 0; l < P; l++) {
                    if (a = "",
                    typeof arguments[l] == "object") {
                        for (g in a += `
[` + l + "] ",
                        arguments[0])
                            x(arguments[0], g) && (a += g + ": " + arguments[0][g] + ", ");
                        a = a.slice(0, -2)
                    } else
                        a = arguments[l];
                    w.push(a)
                }
                Vt(e + `
Arguments: ` + Array.prototype.slice.call(w).join("") + `
` + new Error().stack),
                s = !1
            }
            return r.apply(this, arguments)
        }, r)
    }
    var Ht, jt = {};
    function Gt(e, r) {
        o.deprecationHandler != null && o.deprecationHandler(e, r),
        jt[e] || (Vt(r),
        jt[e] = !0)
    }
    function vt(e) {
        return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]"
    }
    function Xt(e) {
        var r, s;
        for (s in e)
            x(e, s) && (vt(r = e[s]) ? this[s] = r : this["_" + s] = r);
        this._config = e,
        this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
    }
    function Pt(e, r) {
        var s, a = M({}, e);
        for (s in r)
            x(r, s) && (p(e[s]) && p(r[s]) ? (a[s] = {},
            M(a[s], e[s]),
            M(a[s], r[s])) : r[s] != null ? a[s] = r[s] : delete a[s]);
        for (s in e)
            x(e, s) && !x(r, s) && p(e[s]) && (a[s] = M({}, a[s]));
        return a
    }
    function Lt(e) {
        e != null && this.set(e)
    }
    o.suppressDeprecationWarnings = !1,
    o.deprecationHandler = null,
    Ht = Object.keys ? Object.keys : function(e) {
        var r, s = [];
        for (r in e)
            x(e, r) && s.push(r);
        return s
    }
    ;
    var Jt = {
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        nextWeek: "dddd [at] LT",
        lastDay: "[Yesterday at] LT",
        lastWeek: "[Last] dddd [at] LT",
        sameElse: "L"
    };
    function zt(e, r, s) {
        var a = this._calendar[e] || this._calendar.sameElse;
        return vt(a) ? a.call(r, s) : a
    }
    function wt(e, r, s) {
        var a = "" + Math.abs(e)
          , l = r - a.length;
        return (e >= 0 ? s ? "+" : "" : "-") + Math.pow(10, Math.max(0, l)).toString().substr(1) + a
    }
    var Yt = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g
      , It = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g
      , X = {}
      , we = {};
    function B(e, r, s, a) {
        var l = a;
        typeof a == "string" && (l = function() {
            return this[a]()
        }
        ),
        e && (we[e] = l),
        r && (we[r[0]] = function() {
            return wt(l.apply(this, arguments), r[1], r[2])
        }
        ),
        s && (we[s] = function() {
            return this.localeData().ordinal(l.apply(this, arguments), e)
        }
        )
    }
    function N(e) {
        return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
    }
    function k(e) {
        var r, s, a = e.match(Yt);
        for (r = 0,
        s = a.length; r < s; r++)
            we[a[r]] ? a[r] = we[a[r]] : a[r] = N(a[r]);
        return function(l) {
            var g, w = "";
            for (g = 0; g < s; g++)
                w += vt(a[g]) ? a[g].call(l, e) : a[g];
            return w
        }
    }
    function Bt(e, r) {
        return e.isValid() ? (r = $t(r, e.localeData()),
        X[r] = X[r] || k(r),
        X[r](e)) : e.localeData().invalidDate()
    }
    function $t(e, r) {
        var s = 5;
        function a(l) {
            return r.longDateFormat(l) || l
        }
        for (It.lastIndex = 0; s >= 0 && It.test(e); )
            e = e.replace(It, a),
            It.lastIndex = 0,
            s -= 1;
        return e
    }
    var pt = {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A"
    };
    function W(e) {
        var r = this._longDateFormat[e]
          , s = this._longDateFormat[e.toUpperCase()];
        return r || !s ? r : (this._longDateFormat[e] = s.match(Yt).map(function(a) {
            return a === "MMMM" || a === "MM" || a === "DD" || a === "dddd" ? a.slice(1) : a
        }).join(""),
        this._longDateFormat[e])
    }
    var V = "Invalid date";
    function br() {
        return this._invalidDate
    }
    var Sr = "%d"
      , U = /\d{1,2}/;
    function Ot(e) {
        return this._ordinal.replace("%d", e)
    }
    var _r = {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        ss: "%d seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        w: "a week",
        ww: "%d weeks",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years"
    };
    function I(e, r, s, a) {
        var l = this._relativeTime[s];
        return vt(l) ? l(e, r, s, a) : l.replace(/%d/i, e)
    }
    function Zt(e, r) {
        var s = this._relativeTime[e > 0 ? "future" : "past"];
        return vt(s) ? s(r) : s.replace(/%s/i, r)
    }
    var Ut = {
        D: "date",
        dates: "date",
        date: "date",
        d: "day",
        days: "day",
        day: "day",
        e: "weekday",
        weekdays: "weekday",
        weekday: "weekday",
        E: "isoWeekday",
        isoweekdays: "isoWeekday",
        isoweekday: "isoWeekday",
        DDD: "dayOfYear",
        dayofyears: "dayOfYear",
        dayofyear: "dayOfYear",
        h: "hour",
        hours: "hour",
        hour: "hour",
        ms: "millisecond",
        milliseconds: "millisecond",
        millisecond: "millisecond",
        m: "minute",
        minutes: "minute",
        minute: "minute",
        M: "month",
        months: "month",
        month: "month",
        Q: "quarter",
        quarters: "quarter",
        quarter: "quarter",
        s: "second",
        seconds: "second",
        second: "second",
        gg: "weekYear",
        weekyears: "weekYear",
        weekyear: "weekYear",
        GG: "isoWeekYear",
        isoweekyears: "isoWeekYear",
        isoweekyear: "isoWeekYear",
        w: "week",
        weeks: "week",
        week: "week",
        W: "isoWeek",
        isoweeks: "isoWeek",
        isoweek: "isoWeek",
        y: "year",
        years: "year",
        year: "year"
    };
    function yt(e) {
        return typeof e == "string" ? Ut[e] || Ut[e.toLowerCase()] : void 0
    }
    function Ct(e) {
        var r, s, a = {};
        for (s in e)
            x(e, s) && (r = yt(s)) && (a[r] = e[s]);
        return a
    }
    var Kt = {
        date: 9,
        day: 11,
        weekday: 11,
        isoWeekday: 11,
        dayOfYear: 4,
        hour: 13,
        millisecond: 16,
        minute: 14,
        month: 8,
        quarter: 7,
        second: 15,
        weekYear: 1,
        isoWeekYear: 1,
        week: 5,
        isoWeek: 5,
        year: 1
    };
    function H(e) {
        var r, s = [];
        for (r in e)
            x(e, r) && s.push({
                unit: r,
                priority: Kt[r]
            });
        return s.sort(function(a, l) {
            return a.priority - l.priority
        }),
        s
    }
    var F, Wt = /\d/, ct = /\d\d/, he = /\d{3}/, oe = /\d{4}/, q = /[+-]?\d{6}/, ut = /\d\d?/, je = /\d\d\d\d?/, t = /\d\d\d\d\d\d?/, i = /\d{1,3}/, c = /\d{1,4}/, m = /[+-]?\d{1,6}/, f = /\d+/, y = /[+-]?\d+/, C = /Z|[+-]\d\d:?\d\d/gi, Q = /Z|[+-]\d\d(?::?\d\d)?/gi, nt = /[+-]?\d+(\.\d{1,3})?/, D = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, G = /^[1-9]\d?/, kt = /^([1-9]\d|\d)/;
    function _(e, r, s) {
        F[e] = vt(r) ? r : function(a, l) {
            return a && s ? s : r
        }
    }
    function ae(e, r) {
        return x(F, e) ? F[e](r._strict, r._locale) : new RegExp(ue(e))
    }
    function ue(e) {
        return te(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(r, s, a, l, g) {
            return s || a || l || g
        }))
    }
    function te(e) {
        return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }
    function Ft(e) {
        return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
    }
    function Z(e) {
        var r = +e
          , s = 0;
        return r !== 0 && isFinite(r) && (s = Ft(r)),
        s
    }
    F = {};
    var Ge = {};
    function ot(e, r) {
        var s, a, l = r;
        for (typeof e == "string" && (e = [e]),
        A(r) && (l = function(g, w) {
            w[r] = Z(g)
        }
        ),
        a = e.length,
        s = 0; s < a; s++)
            Ge[e[s]] = l
    }
    function Ae(e, r) {
        ot(e, function(s, a, l, g) {
            l._w = l._w || {},
            r(s, l._w, l, g)
        })
    }
    function T(e, r, s) {
        r != null && x(Ge, e) && Ge[e](r, s._a, s, e)
    }
    function z(e) {
        return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
    }
    var it = 0
      , Tt = 1
      , qt = 2
      , _t = 3
      , ee = 4
      , fe = 5
      , Te = 6
      , is = 7
      , os = 8;
    function $e(e) {
        return z(e) ? 366 : 365
    }
    B("Y", 0, 0, function() {
        var e = this.year();
        return e <= 9999 ? wt(e, 4) : "+" + e
    }),
    B(0, ["YY", 2], 0, function() {
        return this.year() % 100
    }),
    B(0, ["YYYY", 4], 0, "year"),
    B(0, ["YYYYY", 5], 0, "year"),
    B(0, ["YYYYYY", 6, !0], 0, "year"),
    _("Y", y),
    _("YY", ut, ct),
    _("YYYY", c, oe),
    _("YYYYY", m, q),
    _("YYYYYY", m, q),
    ot(["YYYYY", "YYYYYY"], it),
    ot("YYYY", function(e, r) {
        r[it] = e.length === 2 ? o.parseTwoDigitYear(e) : Z(e)
    }),
    ot("YY", function(e, r) {
        r[it] = o.parseTwoDigitYear(e)
    }),
    ot("Y", function(e, r) {
        r[it] = parseInt(e, 10)
    }),
    o.parseTwoDigitYear = function(e) {
        return Z(e) + (Z(e) > 68 ? 1900 : 2e3)
    }
    ;
    var bt, tn = Fe("FullYear", !0);
    function as() {
        return z(this.year())
    }
    function Fe(e, r) {
        return function(s) {
            return s != null ? (en(this, e, s),
            o.updateOffset(this, r),
            this) : qe(this, e)
        }
    }
    function qe(e, r) {
        if (!e.isValid())
            return NaN;
        var s = e._d
          , a = e._isUTC;
        switch (r) {
        case "Milliseconds":
            return a ? s.getUTCMilliseconds() : s.getMilliseconds();
        case "Seconds":
            return a ? s.getUTCSeconds() : s.getSeconds();
        case "Minutes":
            return a ? s.getUTCMinutes() : s.getMinutes();
        case "Hours":
            return a ? s.getUTCHours() : s.getHours();
        case "Date":
            return a ? s.getUTCDate() : s.getDate();
        case "Day":
            return a ? s.getUTCDay() : s.getDay();
        case "Month":
            return a ? s.getUTCMonth() : s.getMonth();
        case "FullYear":
            return a ? s.getUTCFullYear() : s.getFullYear();
        default:
            return NaN
        }
    }
    function en(e, r, s) {
        var a, l, g, w, P;
        if (e.isValid() && !isNaN(s)) {
            switch (a = e._d,
            l = e._isUTC,
            r) {
            case "Milliseconds":
                return void (l ? a.setUTCMilliseconds(s) : a.setMilliseconds(s));
            case "Seconds":
                return void (l ? a.setUTCSeconds(s) : a.setSeconds(s));
            case "Minutes":
                return void (l ? a.setUTCMinutes(s) : a.setMinutes(s));
            case "Hours":
                return void (l ? a.setUTCHours(s) : a.setHours(s));
            case "Date":
                return void (l ? a.setUTCDate(s) : a.setDate(s));
            case "FullYear":
                break;
            default:
                return
            }
            g = s,
            w = e.month(),
            P = (P = e.date()) !== 29 || w !== 1 || z(g) ? P : 28,
            l ? a.setUTCFullYear(g, w, P) : a.setFullYear(g, w, P)
        }
    }
    function us(e) {
        return vt(this[e = yt(e)]) ? this[e]() : this
    }
    function ls(e, r) {
        if (typeof e == "object") {
            var s, a = H(e = Ct(e)), l = a.length;
            for (s = 0; s < l; s++)
                this[a[s].unit](e[a[s].unit])
        } else if (vt(this[e = yt(e)]))
            return this[e](r);
        return this
    }
    function cs(e, r) {
        return (e % r + r) % r
    }
    function Er(e, r) {
        if (isNaN(e) || isNaN(r))
            return NaN;
        var s = cs(r, 12);
        return e += (r - s) / 12,
        s === 1 ? z(e) ? 29 : 28 : 31 - s % 7 % 2
    }
    bt = Array.prototype.indexOf ? Array.prototype.indexOf : function(e) {
        var r;
        for (r = 0; r < this.length; ++r)
            if (this[r] === e)
                return r;
        return -1
    }
    ,
    B("M", ["MM", 2], "Mo", function() {
        return this.month() + 1
    }),
    B("MMM", 0, 0, function(e) {
        return this.localeData().monthsShort(this, e)
    }),
    B("MMMM", 0, 0, function(e) {
        return this.localeData().months(this, e)
    }),
    _("M", ut, G),
    _("MM", ut, ct),
    _("MMM", function(e, r) {
        return r.monthsShortRegex(e)
    }),
    _("MMMM", function(e, r) {
        return r.monthsRegex(e)
    }),
    ot(["M", "MM"], function(e, r) {
        r[Tt] = Z(e) - 1
    }),
    ot(["MMM", "MMMM"], function(e, r, s, a) {
        var l = s._locale.monthsParse(e, a, s._strict);
        l != null ? r[Tt] = l : O(s).invalidMonth = e
    });
    var hs = "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
      , rn = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_")
      , nn = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/
      , fs = D
      , ds = D;
    function ps(e, r) {
        return e ? h(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || nn).test(r) ? "format" : "standalone"][e.month()] : h(this._months) ? this._months : this._months.standalone
    }
    function ms(e, r) {
        return e ? h(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[nn.test(r) ? "format" : "standalone"][e.month()] : h(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
    }
    function gs(e, r, s) {
        var a, l, g, w = e.toLocaleLowerCase();
        if (!this._monthsParse)
            for (this._monthsParse = [],
            this._longMonthsParse = [],
            this._shortMonthsParse = [],
            a = 0; a < 12; ++a)
                g = R([2e3, a]),
                this._shortMonthsParse[a] = this.monthsShort(g, "").toLocaleLowerCase(),
                this._longMonthsParse[a] = this.months(g, "").toLocaleLowerCase();
        return s ? r === "MMM" ? (l = bt.call(this._shortMonthsParse, w)) !== -1 ? l : null : (l = bt.call(this._longMonthsParse, w)) !== -1 ? l : null : r === "MMM" ? (l = bt.call(this._shortMonthsParse, w)) !== -1 || (l = bt.call(this._longMonthsParse, w)) !== -1 ? l : null : (l = bt.call(this._longMonthsParse, w)) !== -1 || (l = bt.call(this._shortMonthsParse, w)) !== -1 ? l : null
    }
    function xs(e, r, s) {
        var a, l, g;
        if (this._monthsParseExact)
            return gs.call(this, e, r, s);
        for (this._monthsParse || (this._monthsParse = [],
        this._longMonthsParse = [],
        this._shortMonthsParse = []),
        a = 0; a < 12; a++)
            if (l = R([2e3, a]),
            s && !this._longMonthsParse[a] && (this._longMonthsParse[a] = new RegExp("^" + this.months(l, "").replace(".", "") + "$","i"),
            this._shortMonthsParse[a] = new RegExp("^" + this.monthsShort(l, "").replace(".", "") + "$","i")),
            s || this._monthsParse[a] || (g = "^" + this.months(l, "") + "|^" + this.monthsShort(l, ""),
            this._monthsParse[a] = new RegExp(g.replace(".", ""),"i")),
            s && r === "MMMM" && this._longMonthsParse[a].test(e) || s && r === "MMM" && this._shortMonthsParse[a].test(e) || !s && this._monthsParse[a].test(e))
                return a
    }
    function sn(e, r) {
        if (!e.isValid())
            return e;
        if (typeof r == "string") {
            if (/^\d+$/.test(r))
                r = Z(r);
            else if (!A(r = e.localeData().monthsParse(r)))
                return e
        }
        var s = r
          , a = e.date();
        return a = a < 29 ? a : Math.min(a, Er(e.year(), s)),
        e._isUTC ? e._d.setUTCMonth(s, a) : e._d.setMonth(s, a),
        e
    }
    function on(e) {
        return e != null ? (sn(this, e),
        o.updateOffset(this, !0),
        this) : qe(this, "Month")
    }
    function ys() {
        return Er(this.year(), this.month())
    }
    function vs(e) {
        return this._monthsParseExact ? (x(this, "_monthsRegex") || an.call(this),
        e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (x(this, "_monthsShortRegex") || (this._monthsShortRegex = fs),
        this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
    }
    function ws(e) {
        return this._monthsParseExact ? (x(this, "_monthsRegex") || an.call(this),
        e ? this._monthsStrictRegex : this._monthsRegex) : (x(this, "_monthsRegex") || (this._monthsRegex = ds),
        this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
    }
    function an() {
        function e(Y, at) {
            return at.length - Y.length
        }
        var r, s, a, l, g = [], w = [], P = [];
        for (r = 0; r < 12; r++)
            s = R([2e3, r]),
            a = te(this.monthsShort(s, "")),
            l = te(this.months(s, "")),
            g.push(a),
            w.push(l),
            P.push(l),
            P.push(a);
        g.sort(e),
        w.sort(e),
        P.sort(e),
        this._monthsRegex = new RegExp("^(" + P.join("|") + ")","i"),
        this._monthsShortRegex = this._monthsRegex,
        this._monthsStrictRegex = new RegExp("^(" + w.join("|") + ")","i"),
        this._monthsShortStrictRegex = new RegExp("^(" + g.join("|") + ")","i")
    }
    function bs(e, r, s, a, l, g, w) {
        var P;
        return e < 100 && e >= 0 ? (P = new Date(e + 400,r,s,a,l,g,w),
        isFinite(P.getFullYear()) && P.setFullYear(e)) : P = new Date(e,r,s,a,l,g,w),
        P
    }
    function Qe(e) {
        var r, s;
        return e < 100 && e >= 0 ? ((s = Array.prototype.slice.call(arguments))[0] = e + 400,
        r = new Date(Date.UTC.apply(null, s)),
        isFinite(r.getUTCFullYear()) && r.setUTCFullYear(e)) : r = new Date(Date.UTC.apply(null, arguments)),
        r
    }
    function ar(e, r, s) {
        var a = 7 + r - s;
        return -(7 + Qe(e, 0, a).getUTCDay() - r) % 7 + a - 1
    }
    function un(e, r, s, a, l) {
        var g, w, P = 1 + 7 * (r - 1) + (7 + s - a) % 7 + ar(e, a, l);
        return P <= 0 ? w = $e(g = e - 1) + P : P > $e(e) ? (g = e + 1,
        w = P - $e(e)) : (g = e,
        w = P),
        {
            year: g,
            dayOfYear: w
        }
    }
    function Xe(e, r, s) {
        var a, l, g = ar(e.year(), r, s), w = Math.floor((e.dayOfYear() - g - 1) / 7) + 1;
        return w < 1 ? a = w + de(l = e.year() - 1, r, s) : w > de(e.year(), r, s) ? (a = w - de(e.year(), r, s),
        l = e.year() + 1) : (l = e.year(),
        a = w),
        {
            week: a,
            year: l
        }
    }
    function de(e, r, s) {
        var a = ar(e, r, s)
          , l = ar(e + 1, r, s);
        return ($e(e) - a + l) / 7
    }
    function Ss(e) {
        return Xe(e, this._week.dow, this._week.doy).week
    }
    B("w", ["ww", 2], "wo", "week"),
    B("W", ["WW", 2], "Wo", "isoWeek"),
    _("w", ut, G),
    _("ww", ut, ct),
    _("W", ut, G),
    _("WW", ut, ct),
    Ae(["w", "ww", "W", "WW"], function(e, r, s, a) {
        r[a.substr(0, 1)] = Z(e)
    });
    var _s = {
        dow: 0,
        doy: 6
    };
    function Es() {
        return this._week.dow
    }
    function As() {
        return this._week.doy
    }
    function Ts(e) {
        var r = this.localeData().week(this);
        return e == null ? r : this.add(7 * (e - r), "d")
    }
    function Ns(e) {
        var r = Xe(this, 1, 4).week;
        return e == null ? r : this.add(7 * (e - r), "d")
    }
    function Ds(e, r) {
        return typeof e != "string" ? e : isNaN(e) ? typeof (e = r.weekdaysParse(e)) == "number" ? e : null : parseInt(e, 10)
    }
    function Os(e, r) {
        return typeof e == "string" ? r.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e
    }
    function Ar(e, r) {
        return e.slice(r, 7).concat(e.slice(0, r))
    }
    B("d", 0, "do", "day"),
    B("dd", 0, 0, function(e) {
        return this.localeData().weekdaysMin(this, e)
    }),
    B("ddd", 0, 0, function(e) {
        return this.localeData().weekdaysShort(this, e)
    }),
    B("dddd", 0, 0, function(e) {
        return this.localeData().weekdays(this, e)
    }),
    B("e", 0, 0, "weekday"),
    B("E", 0, 0, "isoWeekday"),
    _("d", ut),
    _("e", ut),
    _("E", ut),
    _("dd", function(e, r) {
        return r.weekdaysMinRegex(e)
    }),
    _("ddd", function(e, r) {
        return r.weekdaysShortRegex(e)
    }),
    _("dddd", function(e, r) {
        return r.weekdaysRegex(e)
    }),
    Ae(["dd", "ddd", "dddd"], function(e, r, s, a) {
        var l = s._locale.weekdaysParse(e, a, s._strict);
        l != null ? r.d = l : O(s).invalidWeekday = e
    }),
    Ae(["d", "e", "E"], function(e, r, s, a) {
        r[a] = Z(e)
    });
    var Cs = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_")
      , ln = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_")
      , ks = "Su_Mo_Tu_We_Th_Fr_Sa".split("_")
      , Rs = D
      , Is = D
      , Fs = D;
    function Ms(e, r) {
        var s = h(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(r) ? "format" : "standalone"];
        return e === !0 ? Ar(s, this._week.dow) : e ? s[e.day()] : s
    }
    function Ps(e) {
        return e === !0 ? Ar(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort
    }
    function Ls(e) {
        return e === !0 ? Ar(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin
    }
    function Ys(e, r, s) {
        var a, l, g, w = e.toLocaleLowerCase();
        if (!this._weekdaysParse)
            for (this._weekdaysParse = [],
            this._shortWeekdaysParse = [],
            this._minWeekdaysParse = [],
            a = 0; a < 7; ++a)
                g = R([2e3, 1]).day(a),
                this._minWeekdaysParse[a] = this.weekdaysMin(g, "").toLocaleLowerCase(),
                this._shortWeekdaysParse[a] = this.weekdaysShort(g, "").toLocaleLowerCase(),
                this._weekdaysParse[a] = this.weekdays(g, "").toLocaleLowerCase();
        return s ? r === "dddd" ? (l = bt.call(this._weekdaysParse, w)) !== -1 ? l : null : r === "ddd" ? (l = bt.call(this._shortWeekdaysParse, w)) !== -1 ? l : null : (l = bt.call(this._minWeekdaysParse, w)) !== -1 ? l : null : r === "dddd" ? (l = bt.call(this._weekdaysParse, w)) !== -1 || (l = bt.call(this._shortWeekdaysParse, w)) !== -1 || (l = bt.call(this._minWeekdaysParse, w)) !== -1 ? l : null : r === "ddd" ? (l = bt.call(this._shortWeekdaysParse, w)) !== -1 || (l = bt.call(this._weekdaysParse, w)) !== -1 || (l = bt.call(this._minWeekdaysParse, w)) !== -1 ? l : null : (l = bt.call(this._minWeekdaysParse, w)) !== -1 || (l = bt.call(this._weekdaysParse, w)) !== -1 || (l = bt.call(this._shortWeekdaysParse, w)) !== -1 ? l : null
    }
    function Bs(e, r, s) {
        var a, l, g;
        if (this._weekdaysParseExact)
            return Ys.call(this, e, r, s);
        for (this._weekdaysParse || (this._weekdaysParse = [],
        this._minWeekdaysParse = [],
        this._shortWeekdaysParse = [],
        this._fullWeekdaysParse = []),
        a = 0; a < 7; a++)
            if (l = R([2e3, 1]).day(a),
            s && !this._fullWeekdaysParse[a] && (this._fullWeekdaysParse[a] = new RegExp("^" + this.weekdays(l, "").replace(".", "\\.?") + "$","i"),
            this._shortWeekdaysParse[a] = new RegExp("^" + this.weekdaysShort(l, "").replace(".", "\\.?") + "$","i"),
            this._minWeekdaysParse[a] = new RegExp("^" + this.weekdaysMin(l, "").replace(".", "\\.?") + "$","i")),
            this._weekdaysParse[a] || (g = "^" + this.weekdays(l, "") + "|^" + this.weekdaysShort(l, "") + "|^" + this.weekdaysMin(l, ""),
            this._weekdaysParse[a] = new RegExp(g.replace(".", ""),"i")),
            s && r === "dddd" && this._fullWeekdaysParse[a].test(e) || s && r === "ddd" && this._shortWeekdaysParse[a].test(e) || s && r === "dd" && this._minWeekdaysParse[a].test(e) || !s && this._weekdaysParse[a].test(e))
                return a
    }
    function Us(e) {
        if (!this.isValid())
            return e != null ? this : NaN;
        var r = qe(this, "Day");
        return e != null ? (e = Ds(e, this.localeData()),
        this.add(e - r, "d")) : r
    }
    function Ws(e) {
        if (!this.isValid())
            return e != null ? this : NaN;
        var r = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return e == null ? r : this.add(e - r, "d")
    }
    function Vs(e) {
        if (!this.isValid())
            return e != null ? this : NaN;
        if (e != null) {
            var r = Os(e, this.localeData());
            return this.day(this.day() % 7 ? r : r - 7)
        }
        return this.day() || 7
    }
    function Hs(e) {
        return this._weekdaysParseExact ? (x(this, "_weekdaysRegex") || Tr.call(this),
        e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (x(this, "_weekdaysRegex") || (this._weekdaysRegex = Rs),
        this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
    }
    function js(e) {
        return this._weekdaysParseExact ? (x(this, "_weekdaysRegex") || Tr.call(this),
        e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (x(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Is),
        this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
    }
    function Gs(e) {
        return this._weekdaysParseExact ? (x(this, "_weekdaysRegex") || Tr.call(this),
        e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (x(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Fs),
        this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
    }
    function Tr() {
        function e(Dt, le) {
            return le.length - Dt.length
        }
        var r, s, a, l, g, w = [], P = [], Y = [], at = [];
        for (r = 0; r < 7; r++)
            s = R([2e3, 1]).day(r),
            a = te(this.weekdaysMin(s, "")),
            l = te(this.weekdaysShort(s, "")),
            g = te(this.weekdays(s, "")),
            w.push(a),
            P.push(l),
            Y.push(g),
            at.push(a),
            at.push(l),
            at.push(g);
        w.sort(e),
        P.sort(e),
        Y.sort(e),
        at.sort(e),
        this._weekdaysRegex = new RegExp("^(" + at.join("|") + ")","i"),
        this._weekdaysShortRegex = this._weekdaysRegex,
        this._weekdaysMinRegex = this._weekdaysRegex,
        this._weekdaysStrictRegex = new RegExp("^(" + Y.join("|") + ")","i"),
        this._weekdaysShortStrictRegex = new RegExp("^(" + P.join("|") + ")","i"),
        this._weekdaysMinStrictRegex = new RegExp("^(" + w.join("|") + ")","i")
    }
    function Nr() {
        return this.hours() % 12 || 12
    }
    function $s() {
        return this.hours() || 24
    }
    function cn(e, r) {
        B(e, 0, 0, function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), r)
        })
    }
    function hn(e, r) {
        return r._meridiemParse
    }
    function qs(e) {
        return (e + "").toLowerCase().charAt(0) === "p"
    }
    B("H", ["HH", 2], 0, "hour"),
    B("h", ["hh", 2], 0, Nr),
    B("k", ["kk", 2], 0, $s),
    B("hmm", 0, 0, function() {
        return "" + Nr.apply(this) + wt(this.minutes(), 2)
    }),
    B("hmmss", 0, 0, function() {
        return "" + Nr.apply(this) + wt(this.minutes(), 2) + wt(this.seconds(), 2)
    }),
    B("Hmm", 0, 0, function() {
        return "" + this.hours() + wt(this.minutes(), 2)
    }),
    B("Hmmss", 0, 0, function() {
        return "" + this.hours() + wt(this.minutes(), 2) + wt(this.seconds(), 2)
    }),
    cn("a", !0),
    cn("A", !1),
    _("a", hn),
    _("A", hn),
    _("H", ut, kt),
    _("h", ut, G),
    _("k", ut, G),
    _("HH", ut, ct),
    _("hh", ut, ct),
    _("kk", ut, ct),
    _("hmm", je),
    _("hmmss", t),
    _("Hmm", je),
    _("Hmmss", t),
    ot(["H", "HH"], _t),
    ot(["k", "kk"], function(e, r, s) {
        var a = Z(e);
        r[_t] = a === 24 ? 0 : a
    }),
    ot(["a", "A"], function(e, r, s) {
        s._isPm = s._locale.isPM(e),
        s._meridiem = e
    }),
    ot(["h", "hh"], function(e, r, s) {
        r[_t] = Z(e),
        O(s).bigHour = !0
    }),
    ot("hmm", function(e, r, s) {
        var a = e.length - 2;
        r[_t] = Z(e.substr(0, a)),
        r[ee] = Z(e.substr(a)),
        O(s).bigHour = !0
    }),
    ot("hmmss", function(e, r, s) {
        var a = e.length - 4
          , l = e.length - 2;
        r[_t] = Z(e.substr(0, a)),
        r[ee] = Z(e.substr(a, 2)),
        r[fe] = Z(e.substr(l)),
        O(s).bigHour = !0
    }),
    ot("Hmm", function(e, r, s) {
        var a = e.length - 2;
        r[_t] = Z(e.substr(0, a)),
        r[ee] = Z(e.substr(a))
    }),
    ot("Hmmss", function(e, r, s) {
        var a = e.length - 4
          , l = e.length - 2;
        r[_t] = Z(e.substr(0, a)),
        r[ee] = Z(e.substr(a, 2)),
        r[fe] = Z(e.substr(l))
    });
    var Qs = /[ap]\.?m?\.?/i
      , Xs = Fe("Hours", !0);
    function Js(e, r, s) {
        return e > 11 ? s ? "pm" : "PM" : s ? "am" : "AM"
    }
    var Je, dn = {
        calendar: Jt,
        longDateFormat: pt,
        invalidDate: V,
        ordinal: Sr,
        dayOfMonthOrdinalParse: U,
        relativeTime: _r,
        months: hs,
        monthsShort: rn,
        week: _s,
        weekdays: Cs,
        weekdaysMin: ks,
        weekdaysShort: ln,
        meridiemParse: Qs
    }, mt = {}, ze = {};
    function zs(e, r) {
        var s, a = Math.min(e.length, r.length);
        for (s = 0; s < a; s += 1)
            if (e[s] !== r[s])
                return s;
        return a
    }
    function pn(e) {
        return e && e.toLowerCase().replace("_", "-")
    }
    function Zs(e) {
        for (var r, s, a, l, g = 0; g < e.length; ) {
            for (r = (l = pn(e[g]).split("-")).length,
            s = (s = pn(e[g + 1])) ? s.split("-") : null; r > 0; ) {
                if (a = ur(l.slice(0, r).join("-")))
                    return a;
                if (s && s.length >= r && zs(l, s) >= r - 1)
                    break;
                r--
            }
            g++
        }
        return Je
    }
    function Ks(e) {
        return !(!e || !e.match("^[^/\\\\]*$"))
    }
    function ur(e) {
        var r = null;
        if (mt[e] === void 0 && $r && $r.exports && Ks(e))
            try {
                r = Je._abbr,
                ou("./locale/" + e),
                be(r)
            } catch {
                mt[e] = null
            }
        return mt[e]
    }
    function be(e, r) {
        var s;
        return e && ((s = b(r) ? pe(e) : Dr(e, r)) ? Je = s : typeof console < "u" && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")),
        Je._abbr
    }
    function Dr(e, r) {
        if (r !== null) {
            var s, a = dn;
            if (r.abbr = e,
            mt[e] != null)
                Gt("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),
                a = mt[e]._config;
            else if (r.parentLocale != null)
                if (mt[r.parentLocale] != null)
                    a = mt[r.parentLocale]._config;
                else {
                    if ((s = ur(r.parentLocale)) == null)
                        return ze[r.parentLocale] || (ze[r.parentLocale] = []),
                        ze[r.parentLocale].push({
                            name: e,
                            config: r
                        }),
                        null;
                    a = s._config
                }
            return mt[e] = new Lt(Pt(a, r)),
            ze[e] && ze[e].forEach(function(l) {
                Dr(l.name, l.config)
            }),
            be(e),
            mt[e]
        }
        return delete mt[e],
        null
    }
    function ti(e, r) {
        if (r != null) {
            var s, a, l = dn;
            mt[e] != null && mt[e].parentLocale != null ? mt[e].set(Pt(mt[e]._config, r)) : ((a = ur(e)) != null && (l = a._config),
            r = Pt(l, r),
            a == null && (r.abbr = e),
            (s = new Lt(r)).parentLocale = mt[e],
            mt[e] = s),
            be(e)
        } else
            mt[e] != null && (mt[e].parentLocale != null ? (mt[e] = mt[e].parentLocale,
            e === be() && be(e)) : mt[e] != null && delete mt[e]);
        return mt[e]
    }
    function pe(e) {
        var r;
        if (e && e._locale && e._locale._abbr && (e = e._locale._abbr),
        !e)
            return Je;
        if (!h(e)) {
            if (r = ur(e))
                return r;
            e = [e]
        }
        return Zs(e)
    }
    function ei() {
        return Ht(mt)
    }
    function Or(e) {
        var r, s = e._a;
        return s && O(e).overflow === -2 && (r = s[Tt] < 0 || s[Tt] > 11 ? Tt : s[qt] < 1 || s[qt] > Er(s[it], s[Tt]) ? qt : s[_t] < 0 || s[_t] > 24 || s[_t] === 24 && (s[ee] !== 0 || s[fe] !== 0 || s[Te] !== 0) ? _t : s[ee] < 0 || s[ee] > 59 ? ee : s[fe] < 0 || s[fe] > 59 ? fe : s[Te] < 0 || s[Te] > 999 ? Te : -1,
        O(e)._overflowDayOfYear && (r < it || r > qt) && (r = qt),
        O(e)._overflowWeeks && r === -1 && (r = is),
        O(e)._overflowWeekday && r === -1 && (r = os),
        O(e).overflow = r),
        e
    }
    var ri = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/
      , ni = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/
      , si = /Z|[+-]\d\d(?::?\d\d)?/
      , lr = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/], ["YYYYMM", /\d{6}/, !1], ["YYYY", /\d{4}/, !1]]
      , Cr = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]]
      , ii = /^\/?Date\((-?\d+)/i
      , oi = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/
      , ai = {
        UT: 0,
        GMT: 0,
        EDT: -240,
        EST: -300,
        CDT: -300,
        CST: -360,
        MDT: -360,
        MST: -420,
        PDT: -420,
        PST: -480
    };
    function mn(e) {
        var r, s, a, l, g, w, P = e._i, Y = ri.exec(P) || ni.exec(P), at = lr.length, Dt = Cr.length;
        if (Y) {
            for (O(e).iso = !0,
            r = 0,
            s = at; r < s; r++)
                if (lr[r][1].exec(Y[1])) {
                    l = lr[r][0],
                    a = lr[r][2] !== !1;
                    break
                }
            if (l == null)
                return void (e._isValid = !1);
            if (Y[3]) {
                for (r = 0,
                s = Dt; r < s; r++)
                    if (Cr[r][1].exec(Y[3])) {
                        g = (Y[2] || " ") + Cr[r][0];
                        break
                    }
                if (g == null)
                    return void (e._isValid = !1)
            }
            if (!a && g != null)
                return void (e._isValid = !1);
            if (Y[4]) {
                if (!si.exec(Y[4]))
                    return void (e._isValid = !1);
                w = "Z"
            }
            e._f = l + (g || "") + (w || ""),
            Rr(e)
        } else
            e._isValid = !1
    }
    function ui(e, r, s, a, l, g) {
        var w = [li(e), rn.indexOf(r), parseInt(s, 10), parseInt(a, 10), parseInt(l, 10)];
        return g && w.push(parseInt(g, 10)),
        w
    }
    function li(e) {
        var r = parseInt(e, 10);
        return r <= 49 ? 2e3 + r : r <= 999 ? 1900 + r : r
    }
    function ci(e) {
        return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
    }
    function hi(e, r, s) {
        return !e || ln.indexOf(e) === new Date(r[0],r[1],r[2]).getDay() || (O(s).weekdayMismatch = !0,
        s._isValid = !1,
        !1)
    }
    function fi(e, r, s) {
        if (e)
            return ai[e];
        if (r)
            return 0;
        var a = parseInt(s, 10)
          , l = a % 100;
        return (a - l) / 100 * 60 + l
    }
    function gn(e) {
        var r, s = oi.exec(ci(e._i));
        if (s) {
            if (r = ui(s[4], s[3], s[2], s[5], s[6], s[7]),
            !hi(s[1], r, e))
                return;
            e._a = r,
            e._tzm = fi(s[8], s[9], s[10]),
            e._d = Qe.apply(null, e._a),
            e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
            O(e).rfc2822 = !0
        } else
            e._isValid = !1
    }
    function di(e) {
        var r = ii.exec(e._i);
        r === null ? (mn(e),
        e._isValid === !1 && (delete e._isValid,
        gn(e),
        e._isValid === !1 && (delete e._isValid,
        e._strict ? e._isValid = !1 : o.createFromInputFallback(e)))) : e._d = new Date(+r[1])
    }
    function Me(e, r, s) {
        return e ?? r ?? s
    }
    function pi(e) {
        var r = new Date(o.now());
        return e._useUTC ? [r.getUTCFullYear(), r.getUTCMonth(), r.getUTCDate()] : [r.getFullYear(), r.getMonth(), r.getDate()]
    }
    function kr(e) {
        var r, s, a, l, g, w = [];
        if (!e._d) {
            for (a = pi(e),
            e._w && e._a[qt] == null && e._a[Tt] == null && mi(e),
            e._dayOfYear != null && (g = Me(e._a[it], a[it]),
            (e._dayOfYear > $e(g) || e._dayOfYear === 0) && (O(e)._overflowDayOfYear = !0),
            s = Qe(g, 0, e._dayOfYear),
            e._a[Tt] = s.getUTCMonth(),
            e._a[qt] = s.getUTCDate()),
            r = 0; r < 3 && e._a[r] == null; ++r)
                e._a[r] = w[r] = a[r];
            for (; r < 7; r++)
                e._a[r] = w[r] = e._a[r] == null ? r === 2 ? 1 : 0 : e._a[r];
            e._a[_t] === 24 && e._a[ee] === 0 && e._a[fe] === 0 && e._a[Te] === 0 && (e._nextDay = !0,
            e._a[_t] = 0),
            e._d = (e._useUTC ? Qe : bs).apply(null, w),
            l = e._useUTC ? e._d.getUTCDay() : e._d.getDay(),
            e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
            e._nextDay && (e._a[_t] = 24),
            e._w && e._w.d !== void 0 && e._w.d !== l && (O(e).weekdayMismatch = !0)
        }
    }
    function mi(e) {
        var r, s, a, l, g, w, P, Y, at;
        (r = e._w).GG != null || r.W != null || r.E != null ? (g = 1,
        w = 4,
        s = Me(r.GG, e._a[it], Xe(ht(), 1, 4).year),
        a = Me(r.W, 1),
        ((l = Me(r.E, 1)) < 1 || l > 7) && (Y = !0)) : (g = e._locale._week.dow,
        w = e._locale._week.doy,
        at = Xe(ht(), g, w),
        s = Me(r.gg, e._a[it], at.year),
        a = Me(r.w, at.week),
        r.d != null ? ((l = r.d) < 0 || l > 6) && (Y = !0) : r.e != null ? (l = r.e + g,
        (r.e < 0 || r.e > 6) && (Y = !0)) : l = g),
        a < 1 || a > de(s, g, w) ? O(e)._overflowWeeks = !0 : Y != null ? O(e)._overflowWeekday = !0 : (P = un(s, a, l, g, w),
        e._a[it] = P.year,
        e._dayOfYear = P.dayOfYear)
    }
    function Rr(e) {
        if (e._f !== o.ISO_8601)
            if (e._f !== o.RFC_2822) {
                e._a = [],
                O(e).empty = !0;
                var r, s, a, l, g, w, P, Y = "" + e._i, at = Y.length, Dt = 0;
                for (P = (a = $t(e._f, e._locale).match(Yt) || []).length,
                r = 0; r < P; r++)
                    l = a[r],
                    (s = (Y.match(ae(l, e)) || [])[0]) && ((g = Y.substr(0, Y.indexOf(s))).length > 0 && O(e).unusedInput.push(g),
                    Y = Y.slice(Y.indexOf(s) + s.length),
                    Dt += s.length),
                    we[l] ? (s ? O(e).empty = !1 : O(e).unusedTokens.push(l),
                    T(l, s, e)) : e._strict && !s && O(e).unusedTokens.push(l);
                O(e).charsLeftOver = at - Dt,
                Y.length > 0 && O(e).unusedInput.push(Y),
                e._a[_t] <= 12 && O(e).bigHour === !0 && e._a[_t] > 0 && (O(e).bigHour = void 0),
                O(e).parsedDateParts = e._a.slice(0),
                O(e).meridiem = e._meridiem,
                e._a[_t] = gi(e._locale, e._a[_t], e._meridiem),
                (w = O(e).era) !== null && (e._a[it] = e._locale.erasConvertYear(w, e._a[it])),
                kr(e),
                Or(e)
            } else
                gn(e);
        else
            mn(e)
    }
    function gi(e, r, s) {
        var a;
        return s == null ? r : e.meridiemHour != null ? e.meridiemHour(r, s) : (e.isPM != null && ((a = e.isPM(s)) && r < 12 && (r += 12),
        a || r !== 12 || (r = 0)),
        r)
    }
    function xi(e) {
        var r, s, a, l, g, w, P = !1, Y = e._f.length;
        if (Y === 0)
            return O(e).invalidFormat = !0,
            void (e._d = new Date(NaN));
        for (l = 0; l < Y; l++)
            g = 0,
            w = !1,
            r = At({}, e),
            e._useUTC != null && (r._useUTC = e._useUTC),
            r._f = e._f[l],
            Rr(r),
            v(r) && (w = !0),
            g += O(r).charsLeftOver,
            g += 10 * O(r).unusedTokens.length,
            O(r).score = g,
            P ? g < a && (a = g,
            s = r) : (a == null || g < a || w) && (a = g,
            s = r,
            w && (P = !0));
        M(e, s || r)
    }
    function yi(e) {
        if (!e._d) {
            var r = Ct(e._i)
              , s = r.day === void 0 ? r.date : r.day;
            e._a = $([r.year, r.month, s, r.hour, r.minute, r.second, r.millisecond], function(a) {
                return a && parseInt(a, 10)
            }),
            kr(e)
        }
    }
    function vi(e) {
        var r = new St(Or(xn(e)));
        return r._nextDay && (r.add(1, "d"),
        r._nextDay = void 0),
        r
    }
    function xn(e) {
        var r = e._i
          , s = e._f;
        return e._locale = e._locale || pe(e._l),
        r === null || s === void 0 && r === "" ? tt({
            nullInput: !0
        }) : (typeof r == "string" && (e._i = r = e._locale.preparse(r)),
        j(r) ? new St(Or(r)) : (L(r) ? e._d = r : h(s) ? xi(e) : s ? Rr(e) : wi(e),
        v(e) || (e._d = null),
        e))
    }
    function wi(e) {
        var r = e._i;
        b(r) ? e._d = new Date(o.now()) : L(r) ? e._d = new Date(r.valueOf()) : typeof r == "string" ? di(e) : h(r) ? (e._a = $(r.slice(0), function(s) {
            return parseInt(s, 10)
        }),
        kr(e)) : p(r) ? yi(e) : A(r) ? e._d = new Date(r) : o.createFromInputFallback(e)
    }
    function yn(e, r, s, a, l) {
        var g = {};
        return r !== !0 && r !== !1 || (a = r,
        r = void 0),
        s !== !0 && s !== !1 || (a = s,
        s = void 0),
        (p(e) && S(e) || h(e) && e.length === 0) && (e = void 0),
        g._isAMomentObject = !0,
        g._useUTC = g._isUTC = l,
        g._l = s,
        g._i = e,
        g._f = r,
        g._strict = a,
        vi(g)
    }
    function ht(e, r, s, a) {
        return yn(e, r, s, a, !1)
    }
    o.createFromInputFallback = xt("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(e) {
        e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
    }),
    o.ISO_8601 = function() {}
    ,
    o.RFC_2822 = function() {}
    ;
    var bi = xt("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
        var e = ht.apply(null, arguments);
        return this.isValid() && e.isValid() ? e < this ? this : e : tt()
    })
      , Si = xt("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
        var e = ht.apply(null, arguments);
        return this.isValid() && e.isValid() ? e > this ? this : e : tt()
    });
    function vn(e, r) {
        var s, a;
        if (r.length === 1 && h(r[0]) && (r = r[0]),
        !r.length)
            return ht();
        for (s = r[0],
        a = 1; a < r.length; ++a)
            r[a].isValid() && !r[a][e](s) || (s = r[a]);
        return s
    }
    function _i() {
        return vn("isBefore", [].slice.call(arguments, 0))
    }
    function Ei() {
        return vn("isAfter", [].slice.call(arguments, 0))
    }
    var Ai = function() {
        return Date.now ? Date.now() : +new Date
    }
      , Ze = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
    function Ti(e) {
        var r, s, a = !1, l = Ze.length;
        for (r in e)
            if (x(e, r) && (bt.call(Ze, r) === -1 || e[r] != null && isNaN(e[r])))
                return !1;
        for (s = 0; s < l; ++s)
            if (e[Ze[s]]) {
                if (a)
                    return !1;
                parseFloat(e[Ze[s]]) !== Z(e[Ze[s]]) && (a = !0)
            }
        return !0
    }
    function Ni() {
        return this._isValid
    }
    function Di() {
        return re(NaN)
    }
    function cr(e) {
        var r = Ct(e)
          , s = r.year || 0
          , a = r.quarter || 0
          , l = r.month || 0
          , g = r.week || r.isoWeek || 0
          , w = r.day || 0
          , P = r.hour || 0
          , Y = r.minute || 0
          , at = r.second || 0
          , Dt = r.millisecond || 0;
        this._isValid = Ti(r),
        this._milliseconds = +Dt + 1e3 * at + 6e4 * Y + 1e3 * P * 60 * 60,
        this._days = +w + 7 * g,
        this._months = +l + 3 * a + 12 * s,
        this._data = {},
        this._locale = pe(),
        this._bubble()
    }
    function hr(e) {
        return e instanceof cr
    }
    function Ir(e) {
        return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e)
    }
    function Oi(e, r, s) {
        var a, l = Math.min(e.length, r.length), g = Math.abs(e.length - r.length), w = 0;
        for (a = 0; a < l; a++)
            Z(e[a]) !== Z(r[a]) && w++;
        return w + g
    }
    function wn(e, r) {
        B(e, 0, 0, function() {
            var s = this.utcOffset()
              , a = "+";
            return s < 0 && (s = -s,
            a = "-"),
            a + wt(~~(s / 60), 2) + r + wt(~~s % 60, 2)
        })
    }
    wn("Z", ":"),
    wn("ZZ", ""),
    _("Z", Q),
    _("ZZ", Q),
    ot(["Z", "ZZ"], function(e, r, s) {
        s._useUTC = !0,
        s._tzm = Fr(Q, e)
    });
    var Ci = /([\+\-]|\d\d)/gi;
    function Fr(e, r) {
        var s, a, l = (r || "").match(e);
        return l === null ? null : (a = 60 * (s = ((l[l.length - 1] || []) + "").match(Ci) || ["-", 0, 0])[1] + Z(s[2])) === 0 ? 0 : s[0] === "+" ? a : -a
    }
    function Mr(e, r) {
        var s, a;
        return r._isUTC ? (s = r.clone(),
        a = (j(e) || L(e) ? e.valueOf() : ht(e).valueOf()) - s.valueOf(),
        s._d.setTime(s._d.valueOf() + a),
        o.updateOffset(s, !1),
        s) : ht(e).local()
    }
    function Pr(e) {
        return -Math.round(e._d.getTimezoneOffset())
    }
    function ki(e, r, s) {
        var a, l = this._offset || 0;
        if (!this.isValid())
            return e != null ? this : NaN;
        if (e != null) {
            if (typeof e == "string") {
                if ((e = Fr(Q, e)) === null)
                    return this
            } else
                Math.abs(e) < 16 && !s && (e *= 60);
            return !this._isUTC && r && (a = Pr(this)),
            this._offset = e,
            this._isUTC = !0,
            a != null && this.add(a, "m"),
            l !== e && (!r || this._changeInProgress ? En(this, re(e - l, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0,
            o.updateOffset(this, !0),
            this._changeInProgress = null)),
            this
        }
        return this._isUTC ? l : Pr(this)
    }
    function Ri(e, r) {
        return e != null ? (typeof e != "string" && (e = -e),
        this.utcOffset(e, r),
        this) : -this.utcOffset()
    }
    function Ii(e) {
        return this.utcOffset(0, e)
    }
    function Fi(e) {
        return this._isUTC && (this.utcOffset(0, e),
        this._isUTC = !1,
        e && this.subtract(Pr(this), "m")),
        this
    }
    function Mi() {
        if (this._tzm != null)
            this.utcOffset(this._tzm, !1, !0);
        else if (typeof this._i == "string") {
            var e = Fr(C, this._i);
            e != null ? this.utcOffset(e) : this.utcOffset(0, !0)
        }
        return this
    }
    function Pi(e) {
        return !!this.isValid() && (e = e ? ht(e).utcOffset() : 0,
        (this.utcOffset() - e) % 60 == 0)
    }
    function Li() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
    }
    function Yi() {
        if (!b(this._isDSTShifted))
            return this._isDSTShifted;
        var e, r = {};
        return At(r, this),
        (r = xn(r))._a ? (e = r._isUTC ? R(r._a) : ht(r._a),
        this._isDSTShifted = this.isValid() && Oi(r._a, e.toArray()) > 0) : this._isDSTShifted = !1,
        this._isDSTShifted
    }
    function Bi() {
        return !!this.isValid() && !this._isUTC
    }
    function Ui() {
        return !!this.isValid() && this._isUTC
    }
    function bn() {
        return !!this.isValid() && this._isUTC && this._offset === 0
    }
    o.updateOffset = function() {}
    ;
    var Wi = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/
      , Vi = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
    function re(e, r) {
        var s, a, l, g = e, w = null;
        return hr(e) ? g = {
            ms: e._milliseconds,
            d: e._days,
            M: e._months
        } : A(e) || !isNaN(+e) ? (g = {},
        r ? g[r] = +e : g.milliseconds = +e) : (w = Wi.exec(e)) ? (s = w[1] === "-" ? -1 : 1,
        g = {
            y: 0,
            d: Z(w[qt]) * s,
            h: Z(w[_t]) * s,
            m: Z(w[ee]) * s,
            s: Z(w[fe]) * s,
            ms: Z(Ir(1e3 * w[Te])) * s
        }) : (w = Vi.exec(e)) ? (s = w[1] === "-" ? -1 : 1,
        g = {
            y: Ne(w[2], s),
            M: Ne(w[3], s),
            w: Ne(w[4], s),
            d: Ne(w[5], s),
            h: Ne(w[6], s),
            m: Ne(w[7], s),
            s: Ne(w[8], s)
        }) : g == null ? g = {} : typeof g == "object" && ("from"in g || "to"in g) && (l = Hi(ht(g.from), ht(g.to)),
        (g = {}).ms = l.milliseconds,
        g.M = l.months),
        a = new cr(g),
        hr(e) && x(e, "_locale") && (a._locale = e._locale),
        hr(e) && x(e, "_isValid") && (a._isValid = e._isValid),
        a
    }
    function Ne(e, r) {
        var s = e && parseFloat(e.replace(",", "."));
        return (isNaN(s) ? 0 : s) * r
    }
    function Sn(e, r) {
        var s = {};
        return s.months = r.month() - e.month() + 12 * (r.year() - e.year()),
        e.clone().add(s.months, "M").isAfter(r) && --s.months,
        s.milliseconds = +r - +e.clone().add(s.months, "M"),
        s
    }
    function Hi(e, r) {
        var s;
        return e.isValid() && r.isValid() ? (r = Mr(r, e),
        e.isBefore(r) ? s = Sn(e, r) : ((s = Sn(r, e)).milliseconds = -s.milliseconds,
        s.months = -s.months),
        s) : {
            milliseconds: 0,
            months: 0
        }
    }
    function _n(e, r) {
        return function(s, a) {
            var l;
            return a === null || isNaN(+a) || (Gt(r, "moment()." + r + "(period, number) is deprecated. Please use moment()." + r + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),
            l = s,
            s = a,
            a = l),
            En(this, re(s, a), e),
            this
        }
    }
    function En(e, r, s, a) {
        var l = r._milliseconds
          , g = Ir(r._days)
          , w = Ir(r._months);
        e.isValid() && (a = a == null || a,
        w && sn(e, qe(e, "Month") + w * s),
        g && en(e, "Date", qe(e, "Date") + g * s),
        l && e._d.setTime(e._d.valueOf() + l * s),
        a && o.updateOffset(e, g || w))
    }
    re.fn = cr.prototype,
    re.invalid = Di;
    var ji = _n(1, "add")
      , Gi = _n(-1, "subtract");
    function An(e) {
        return typeof e == "string" || e instanceof String
    }
    function $i(e) {
        return j(e) || L(e) || An(e) || A(e) || Qi(e) || qi(e) || e == null
    }
    function qi(e) {
        var r, s, a = p(e) && !S(e), l = !1, g = ["years", "year", "y", "months", "month", "M", "days", "day", "d", "dates", "date", "D", "hours", "hour", "h", "minutes", "minute", "m", "seconds", "second", "s", "milliseconds", "millisecond", "ms"], w = g.length;
        for (r = 0; r < w; r += 1)
            s = g[r],
            l = l || x(e, s);
        return a && l
    }
    function Qi(e) {
        var r = h(e)
          , s = !1;
        return r && (s = e.filter(function(a) {
            return !A(a) && An(e)
        }).length === 0),
        r && s
    }
    function Xi(e) {
        var r, s, a = p(e) && !S(e), l = !1, g = ["sameDay", "nextDay", "lastDay", "nextWeek", "lastWeek", "sameElse"];
        for (r = 0; r < g.length; r += 1)
            s = g[r],
            l = l || x(e, s);
        return a && l
    }
    function Ji(e, r) {
        var s = e.diff(r, "days", !0);
        return s < -6 ? "sameElse" : s < -1 ? "lastWeek" : s < 0 ? "lastDay" : s < 1 ? "sameDay" : s < 2 ? "nextDay" : s < 7 ? "nextWeek" : "sameElse"
    }
    function zi(e, r) {
        arguments.length === 1 && (arguments[0] ? $i(arguments[0]) ? (e = arguments[0],
        r = void 0) : Xi(arguments[0]) && (r = arguments[0],
        e = void 0) : (e = void 0,
        r = void 0));
        var s = e || ht()
          , a = Mr(s, this).startOf("day")
          , l = o.calendarFormat(this, a) || "sameElse"
          , g = r && (vt(r[l]) ? r[l].call(this, s) : r[l]);
        return this.format(g || this.localeData().calendar(l, this, ht(s)))
    }
    function Zi() {
        return new St(this)
    }
    function Ki(e, r) {
        var s = j(e) ? e : ht(e);
        return !(!this.isValid() || !s.isValid()) && ((r = yt(r) || "millisecond") === "millisecond" ? this.valueOf() > s.valueOf() : s.valueOf() < this.clone().startOf(r).valueOf())
    }
    function to(e, r) {
        var s = j(e) ? e : ht(e);
        return !(!this.isValid() || !s.isValid()) && ((r = yt(r) || "millisecond") === "millisecond" ? this.valueOf() < s.valueOf() : this.clone().endOf(r).valueOf() < s.valueOf())
    }
    function eo(e, r, s, a) {
        var l = j(e) ? e : ht(e)
          , g = j(r) ? r : ht(r);
        return !!(this.isValid() && l.isValid() && g.isValid()) && ((a = a || "()")[0] === "(" ? this.isAfter(l, s) : !this.isBefore(l, s)) && (a[1] === ")" ? this.isBefore(g, s) : !this.isAfter(g, s))
    }
    function ro(e, r) {
        var s, a = j(e) ? e : ht(e);
        return !(!this.isValid() || !a.isValid()) && ((r = yt(r) || "millisecond") === "millisecond" ? this.valueOf() === a.valueOf() : (s = a.valueOf(),
        this.clone().startOf(r).valueOf() <= s && s <= this.clone().endOf(r).valueOf()))
    }
    function no(e, r) {
        return this.isSame(e, r) || this.isAfter(e, r)
    }
    function so(e, r) {
        return this.isSame(e, r) || this.isBefore(e, r)
    }
    function io(e, r, s) {
        var a, l, g;
        if (!this.isValid())
            return NaN;
        if (!(a = Mr(e, this)).isValid())
            return NaN;
        switch (l = 6e4 * (a.utcOffset() - this.utcOffset()),
        r = yt(r)) {
        case "year":
            g = fr(this, a) / 12;
            break;
        case "month":
            g = fr(this, a);
            break;
        case "quarter":
            g = fr(this, a) / 3;
            break;
        case "second":
            g = (this - a) / 1e3;
            break;
        case "minute":
            g = (this - a) / 6e4;
            break;
        case "hour":
            g = (this - a) / 36e5;
            break;
        case "day":
            g = (this - a - l) / 864e5;
            break;
        case "week":
            g = (this - a - l) / 6048e5;
            break;
        default:
            g = this - a
        }
        return s ? g : Ft(g)
    }
    function fr(e, r) {
        if (e.date() < r.date())
            return -fr(r, e);
        var s = 12 * (r.year() - e.year()) + (r.month() - e.month())
          , a = e.clone().add(s, "months");
        return -(s + (r - a < 0 ? (r - a) / (a - e.clone().add(s - 1, "months")) : (r - a) / (e.clone().add(s + 1, "months") - a))) || 0
    }
    function oo() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    }
    function ao(e) {
        if (!this.isValid())
            return null;
        var r = e !== !0
          , s = r ? this.clone().utc() : this;
        return s.year() < 0 || s.year() > 9999 ? Bt(s, r ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : vt(Date.prototype.toISOString) ? r ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", Bt(s, "Z")) : Bt(s, r ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
    }
    function uo() {
        if (!this.isValid())
            return "moment.invalid(/* " + this._i + " */)";
        var e, r, s, a, l = "moment", g = "";
        return this.isLocal() || (l = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone",
        g = "Z"),
        e = "[" + l + '("]',
        r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
        s = "-MM-DD[T]HH:mm:ss.SSS",
        a = g + '[")]',
        this.format(e + r + s + a)
    }
    function lo(e) {
        e || (e = this.isUtc() ? o.defaultFormatUtc : o.defaultFormat);
        var r = Bt(this, e);
        return this.localeData().postformat(r)
    }
    function co(e, r) {
        return this.isValid() && (j(e) && e.isValid() || ht(e).isValid()) ? re({
            to: this,
            from: e
        }).locale(this.locale()).humanize(!r) : this.localeData().invalidDate()
    }
    function ho(e) {
        return this.from(ht(), e)
    }
    function fo(e, r) {
        return this.isValid() && (j(e) && e.isValid() || ht(e).isValid()) ? re({
            from: this,
            to: e
        }).locale(this.locale()).humanize(!r) : this.localeData().invalidDate()
    }
    function po(e) {
        return this.to(ht(), e)
    }
    function Tn(e) {
        var r;
        return e === void 0 ? this._locale._abbr : ((r = pe(e)) != null && (this._locale = r),
        this)
    }
    o.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ",
    o.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
    var Nn = xt("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
        return e === void 0 ? this.localeData() : this.locale(e)
    });
    function Dn() {
        return this._locale
    }
    var dr = 1e3
      , Pe = 60 * dr
      , pr = 60 * Pe
      , On = 3506328 * pr;
    function Le(e, r) {
        return (e % r + r) % r
    }
    function Cn(e, r, s) {
        return e < 100 && e >= 0 ? new Date(e + 400,r,s) - On : new Date(e,r,s).valueOf()
    }
    function kn(e, r, s) {
        return e < 100 && e >= 0 ? Date.UTC(e + 400, r, s) - On : Date.UTC(e, r, s)
    }
    function mo(e) {
        var r, s;
        if ((e = yt(e)) === void 0 || e === "millisecond" || !this.isValid())
            return this;
        switch (s = this._isUTC ? kn : Cn,
        e) {
        case "year":
            r = s(this.year(), 0, 1);
            break;
        case "quarter":
            r = s(this.year(), this.month() - this.month() % 3, 1);
            break;
        case "month":
            r = s(this.year(), this.month(), 1);
            break;
        case "week":
            r = s(this.year(), this.month(), this.date() - this.weekday());
            break;
        case "isoWeek":
            r = s(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
            break;
        case "day":
        case "date":
            r = s(this.year(), this.month(), this.date());
            break;
        case "hour":
            r = this._d.valueOf(),
            r -= Le(r + (this._isUTC ? 0 : this.utcOffset() * Pe), pr);
            break;
        case "minute":
            r = this._d.valueOf(),
            r -= Le(r, Pe);
            break;
        case "second":
            r = this._d.valueOf(),
            r -= Le(r, dr)
        }
        return this._d.setTime(r),
        o.updateOffset(this, !0),
        this
    }
    function go(e) {
        var r, s;
        if ((e = yt(e)) === void 0 || e === "millisecond" || !this.isValid())
            return this;
        switch (s = this._isUTC ? kn : Cn,
        e) {
        case "year":
            r = s(this.year() + 1, 0, 1) - 1;
            break;
        case "quarter":
            r = s(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
            break;
        case "month":
            r = s(this.year(), this.month() + 1, 1) - 1;
            break;
        case "week":
            r = s(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
            break;
        case "isoWeek":
            r = s(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
            break;
        case "day":
        case "date":
            r = s(this.year(), this.month(), this.date() + 1) - 1;
            break;
        case "hour":
            r = this._d.valueOf(),
            r += pr - Le(r + (this._isUTC ? 0 : this.utcOffset() * Pe), pr) - 1;
            break;
        case "minute":
            r = this._d.valueOf(),
            r += Pe - Le(r, Pe) - 1;
            break;
        case "second":
            r = this._d.valueOf(),
            r += dr - Le(r, dr) - 1
        }
        return this._d.setTime(r),
        o.updateOffset(this, !0),
        this
    }
    function xo() {
        return this._d.valueOf() - 6e4 * (this._offset || 0)
    }
    function yo() {
        return Math.floor(this.valueOf() / 1e3)
    }
    function vo() {
        return new Date(this.valueOf())
    }
    function wo() {
        var e = this;
        return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
    }
    function bo() {
        var e = this;
        return {
            years: e.year(),
            months: e.month(),
            date: e.date(),
            hours: e.hours(),
            minutes: e.minutes(),
            seconds: e.seconds(),
            milliseconds: e.milliseconds()
        }
    }
    function So() {
        return this.isValid() ? this.toISOString() : null
    }
    function _o() {
        return v(this)
    }
    function Eo() {
        return M({}, O(this))
    }
    function Ao() {
        return O(this).overflow
    }
    function To() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        }
    }
    function No(e, r) {
        var s, a, l, g = this._eras || pe("en")._eras;
        for (s = 0,
        a = g.length; s < a; ++s)
            switch (typeof g[s].since == "string" && (l = o(g[s].since).startOf("day"),
            g[s].since = l.valueOf()),
            typeof g[s].until) {
            case "undefined":
                g[s].until = 1 / 0;
                break;
            case "string":
                l = o(g[s].until).startOf("day").valueOf(),
                g[s].until = l.valueOf()
            }
        return g
    }
    function Do(e, r, s) {
        var a, l, g, w, P, Y = this.eras();
        for (e = e.toUpperCase(),
        a = 0,
        l = Y.length; a < l; ++a)
            if (g = Y[a].name.toUpperCase(),
            w = Y[a].abbr.toUpperCase(),
            P = Y[a].narrow.toUpperCase(),
            s)
                switch (r) {
                case "N":
                case "NN":
                case "NNN":
                    if (w === e)
                        return Y[a];
                    break;
                case "NNNN":
                    if (g === e)
                        return Y[a];
                    break;
                case "NNNNN":
                    if (P === e)
                        return Y[a]
                }
            else if ([g, w, P].indexOf(e) >= 0)
                return Y[a]
    }
    function Oo(e, r) {
        var s = e.since <= e.until ? 1 : -1;
        return r === void 0 ? o(e.since).year() : o(e.since).year() + (r - e.offset) * s
    }
    function Co() {
        var e, r, s, a = this.localeData().eras();
        for (e = 0,
        r = a.length; e < r; ++e)
            if (s = this.clone().startOf("day").valueOf(),
            a[e].since <= s && s <= a[e].until || a[e].until <= s && s <= a[e].since)
                return a[e].name;
        return ""
    }
    function ko() {
        var e, r, s, a = this.localeData().eras();
        for (e = 0,
        r = a.length; e < r; ++e)
            if (s = this.clone().startOf("day").valueOf(),
            a[e].since <= s && s <= a[e].until || a[e].until <= s && s <= a[e].since)
                return a[e].narrow;
        return ""
    }
    function Ro() {
        var e, r, s, a = this.localeData().eras();
        for (e = 0,
        r = a.length; e < r; ++e)
            if (s = this.clone().startOf("day").valueOf(),
            a[e].since <= s && s <= a[e].until || a[e].until <= s && s <= a[e].since)
                return a[e].abbr;
        return ""
    }
    function Io() {
        var e, r, s, a, l = this.localeData().eras();
        for (e = 0,
        r = l.length; e < r; ++e)
            if (s = l[e].since <= l[e].until ? 1 : -1,
            a = this.clone().startOf("day").valueOf(),
            l[e].since <= a && a <= l[e].until || l[e].until <= a && a <= l[e].since)
                return (this.year() - o(l[e].since).year()) * s + l[e].offset;
        return this.year()
    }
    function Fo(e) {
        return x(this, "_erasNameRegex") || Yr.call(this),
        e ? this._erasNameRegex : this._erasRegex
    }
    function Mo(e) {
        return x(this, "_erasAbbrRegex") || Yr.call(this),
        e ? this._erasAbbrRegex : this._erasRegex
    }
    function Po(e) {
        return x(this, "_erasNarrowRegex") || Yr.call(this),
        e ? this._erasNarrowRegex : this._erasRegex
    }
    function Lr(e, r) {
        return r.erasAbbrRegex(e)
    }
    function Lo(e, r) {
        return r.erasNameRegex(e)
    }
    function Yo(e, r) {
        return r.erasNarrowRegex(e)
    }
    function Bo(e, r) {
        return r._eraYearOrdinalRegex || f
    }
    function Yr() {
        var e, r, s, a, l, g = [], w = [], P = [], Y = [], at = this.eras();
        for (e = 0,
        r = at.length; e < r; ++e)
            s = te(at[e].name),
            a = te(at[e].abbr),
            l = te(at[e].narrow),
            w.push(s),
            g.push(a),
            P.push(l),
            Y.push(s),
            Y.push(a),
            Y.push(l);
        this._erasRegex = new RegExp("^(" + Y.join("|") + ")","i"),
        this._erasNameRegex = new RegExp("^(" + w.join("|") + ")","i"),
        this._erasAbbrRegex = new RegExp("^(" + g.join("|") + ")","i"),
        this._erasNarrowRegex = new RegExp("^(" + P.join("|") + ")","i")
    }
    function mr(e, r) {
        B(0, [e, e.length], 0, r)
    }
    function Uo(e) {
        return Rn.call(this, e, this.week(), this.weekday() + this.localeData()._week.dow, this.localeData()._week.dow, this.localeData()._week.doy)
    }
    function Wo(e) {
        return Rn.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
    }
    function Vo() {
        return de(this.year(), 1, 4)
    }
    function Ho() {
        return de(this.isoWeekYear(), 1, 4)
    }
    function jo() {
        var e = this.localeData()._week;
        return de(this.year(), e.dow, e.doy)
    }
    function Go() {
        var e = this.localeData()._week;
        return de(this.weekYear(), e.dow, e.doy)
    }
    function Rn(e, r, s, a, l) {
        var g;
        return e == null ? Xe(this, a, l).year : (r > (g = de(e, a, l)) && (r = g),
        $o.call(this, e, r, s, a, l))
    }
    function $o(e, r, s, a, l) {
        var g = un(e, r, s, a, l)
          , w = Qe(g.year, 0, g.dayOfYear);
        return this.year(w.getUTCFullYear()),
        this.month(w.getUTCMonth()),
        this.date(w.getUTCDate()),
        this
    }
    function qo(e) {
        return e == null ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
    }
    B("N", 0, 0, "eraAbbr"),
    B("NN", 0, 0, "eraAbbr"),
    B("NNN", 0, 0, "eraAbbr"),
    B("NNNN", 0, 0, "eraName"),
    B("NNNNN", 0, 0, "eraNarrow"),
    B("y", ["y", 1], "yo", "eraYear"),
    B("y", ["yy", 2], 0, "eraYear"),
    B("y", ["yyy", 3], 0, "eraYear"),
    B("y", ["yyyy", 4], 0, "eraYear"),
    _("N", Lr),
    _("NN", Lr),
    _("NNN", Lr),
    _("NNNN", Lo),
    _("NNNNN", Yo),
    ot(["N", "NN", "NNN", "NNNN", "NNNNN"], function(e, r, s, a) {
        var l = s._locale.erasParse(e, a, s._strict);
        l ? O(s).era = l : O(s).invalidEra = e
    }),
    _("y", f),
    _("yy", f),
    _("yyy", f),
    _("yyyy", f),
    _("yo", Bo),
    ot(["y", "yy", "yyy", "yyyy"], it),
    ot(["yo"], function(e, r, s, a) {
        var l;
        s._locale._eraYearOrdinalRegex && (l = e.match(s._locale._eraYearOrdinalRegex)),
        s._locale.eraYearOrdinalParse ? r[it] = s._locale.eraYearOrdinalParse(e, l) : r[it] = parseInt(e, 10)
    }),
    B(0, ["gg", 2], 0, function() {
        return this.weekYear() % 100
    }),
    B(0, ["GG", 2], 0, function() {
        return this.isoWeekYear() % 100
    }),
    mr("gggg", "weekYear"),
    mr("ggggg", "weekYear"),
    mr("GGGG", "isoWeekYear"),
    mr("GGGGG", "isoWeekYear"),
    _("G", y),
    _("g", y),
    _("GG", ut, ct),
    _("gg", ut, ct),
    _("GGGG", c, oe),
    _("gggg", c, oe),
    _("GGGGG", m, q),
    _("ggggg", m, q),
    Ae(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, r, s, a) {
        r[a.substr(0, 2)] = Z(e)
    }),
    Ae(["gg", "GG"], function(e, r, s, a) {
        r[a] = o.parseTwoDigitYear(e)
    }),
    B("Q", 0, "Qo", "quarter"),
    _("Q", Wt),
    ot("Q", function(e, r) {
        r[Tt] = 3 * (Z(e) - 1)
    }),
    B("D", ["DD", 2], "Do", "date"),
    _("D", ut, G),
    _("DD", ut, ct),
    _("Do", function(e, r) {
        return e ? r._dayOfMonthOrdinalParse || r._ordinalParse : r._dayOfMonthOrdinalParseLenient
    }),
    ot(["D", "DD"], qt),
    ot("Do", function(e, r) {
        r[qt] = Z(e.match(ut)[0])
    });
    var In = Fe("Date", !0);
    function Qo(e) {
        var r = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return e == null ? r : this.add(e - r, "d")
    }
    B("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
    _("DDD", i),
    _("DDDD", he),
    ot(["DDD", "DDDD"], function(e, r, s) {
        s._dayOfYear = Z(e)
    }),
    B("m", ["mm", 2], 0, "minute"),
    _("m", ut, kt),
    _("mm", ut, ct),
    ot(["m", "mm"], ee);
    var Xo = Fe("Minutes", !1);
    B("s", ["ss", 2], 0, "second"),
    _("s", ut, kt),
    _("ss", ut, ct),
    ot(["s", "ss"], fe);
    var Se, Fn, Jo = Fe("Seconds", !1);
    for (B("S", 0, 0, function() {
        return ~~(this.millisecond() / 100)
    }),
    B(0, ["SS", 2], 0, function() {
        return ~~(this.millisecond() / 10)
    }),
    B(0, ["SSS", 3], 0, "millisecond"),
    B(0, ["SSSS", 4], 0, function() {
        return 10 * this.millisecond()
    }),
    B(0, ["SSSSS", 5], 0, function() {
        return 100 * this.millisecond()
    }),
    B(0, ["SSSSSS", 6], 0, function() {
        return 1e3 * this.millisecond()
    }),
    B(0, ["SSSSSSS", 7], 0, function() {
        return 1e4 * this.millisecond()
    }),
    B(0, ["SSSSSSSS", 8], 0, function() {
        return 1e5 * this.millisecond()
    }),
    B(0, ["SSSSSSSSS", 9], 0, function() {
        return 1e6 * this.millisecond()
    }),
    _("S", i, Wt),
    _("SS", i, ct),
    _("SSS", i, he),
    Se = "SSSS"; Se.length <= 9; Se += "S")
        _(Se, f);
    function zo(e, r) {
        r[Te] = Z(1e3 * ("0." + e))
    }
    for (Se = "S"; Se.length <= 9; Se += "S")
        ot(Se, zo);
    function Zo() {
        return this._isUTC ? "UTC" : ""
    }
    function Ko() {
        return this._isUTC ? "Coordinated Universal Time" : ""
    }
    Fn = Fe("Milliseconds", !1),
    B("z", 0, 0, "zoneAbbr"),
    B("zz", 0, 0, "zoneName");
    var E = St.prototype;
    function ta(e) {
        return ht(1e3 * e)
    }
    function ea() {
        return ht.apply(null, arguments).parseZone()
    }
    function Mn(e) {
        return e
    }
    E.add = ji,
    E.calendar = zi,
    E.clone = Zi,
    E.diff = io,
    E.endOf = go,
    E.format = lo,
    E.from = co,
    E.fromNow = ho,
    E.to = fo,
    E.toNow = po,
    E.get = us,
    E.invalidAt = Ao,
    E.isAfter = Ki,
    E.isBefore = to,
    E.isBetween = eo,
    E.isSame = ro,
    E.isSameOrAfter = no,
    E.isSameOrBefore = so,
    E.isValid = _o,
    E.lang = Nn,
    E.locale = Tn,
    E.localeData = Dn,
    E.max = Si,
    E.min = bi,
    E.parsingFlags = Eo,
    E.set = ls,
    E.startOf = mo,
    E.subtract = Gi,
    E.toArray = wo,
    E.toObject = bo,
    E.toDate = vo,
    E.toISOString = ao,
    E.inspect = uo,
    typeof Symbol < "u" && Symbol.for != null && (E[Symbol.for("nodejs.util.inspect.custom")] = function() {
        return "Moment<" + this.format() + ">"
    }
    ),
    E.toJSON = So,
    E.toString = oo,
    E.unix = yo,
    E.valueOf = xo,
    E.creationData = To,
    E.eraName = Co,
    E.eraNarrow = ko,
    E.eraAbbr = Ro,
    E.eraYear = Io,
    E.year = tn,
    E.isLeapYear = as,
    E.weekYear = Uo,
    E.isoWeekYear = Wo,
    E.quarter = E.quarters = qo,
    E.month = on,
    E.daysInMonth = ys,
    E.week = E.weeks = Ts,
    E.isoWeek = E.isoWeeks = Ns,
    E.weeksInYear = jo,
    E.weeksInWeekYear = Go,
    E.isoWeeksInYear = Vo,
    E.isoWeeksInISOWeekYear = Ho,
    E.date = In,
    E.day = E.days = Us,
    E.weekday = Ws,
    E.isoWeekday = Vs,
    E.dayOfYear = Qo,
    E.hour = E.hours = Xs,
    E.minute = E.minutes = Xo,
    E.second = E.seconds = Jo,
    E.millisecond = E.milliseconds = Fn,
    E.utcOffset = ki,
    E.utc = Ii,
    E.local = Fi,
    E.parseZone = Mi,
    E.hasAlignedHourOffset = Pi,
    E.isDST = Li,
    E.isLocal = Bi,
    E.isUtcOffset = Ui,
    E.isUtc = bn,
    E.isUTC = bn,
    E.zoneAbbr = Zo,
    E.zoneName = Ko,
    E.dates = xt("dates accessor is deprecated. Use date instead.", In),
    E.months = xt("months accessor is deprecated. Use month instead", on),
    E.years = xt("years accessor is deprecated. Use year instead", tn),
    E.zone = xt("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", Ri),
    E.isDSTShifted = xt("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", Yi);
    var st = Lt.prototype;
    function gr(e, r, s, a) {
        var l = pe()
          , g = R().set(a, r);
        return l[s](g, e)
    }
    function Pn(e, r, s) {
        if (A(e) && (r = e,
        e = void 0),
        e = e || "",
        r != null)
            return gr(e, r, s, "month");
        var a, l = [];
        for (a = 0; a < 12; a++)
            l[a] = gr(e, a, s, "month");
        return l
    }
    function Br(e, r, s, a) {
        typeof e == "boolean" ? (A(r) && (s = r,
        r = void 0),
        r = r || "") : (s = r = e,
        e = !1,
        A(r) && (s = r,
        r = void 0),
        r = r || "");
        var l, g = pe(), w = e ? g._week.dow : 0, P = [];
        if (s != null)
            return gr(r, (s + w) % 7, a, "day");
        for (l = 0; l < 7; l++)
            P[l] = gr(r, (l + w) % 7, a, "day");
        return P
    }
    function ra(e, r) {
        return Pn(e, r, "months")
    }
    function na(e, r) {
        return Pn(e, r, "monthsShort")
    }
    function sa(e, r, s) {
        return Br(e, r, s, "weekdays")
    }
    function ia(e, r, s) {
        return Br(e, r, s, "weekdaysShort")
    }
    function oa(e, r, s) {
        return Br(e, r, s, "weekdaysMin")
    }
    st.calendar = zt,
    st.longDateFormat = W,
    st.invalidDate = br,
    st.ordinal = Ot,
    st.preparse = Mn,
    st.postformat = Mn,
    st.relativeTime = I,
    st.pastFuture = Zt,
    st.set = Xt,
    st.eras = No,
    st.erasParse = Do,
    st.erasConvertYear = Oo,
    st.erasAbbrRegex = Mo,
    st.erasNameRegex = Fo,
    st.erasNarrowRegex = Po,
    st.months = ps,
    st.monthsShort = ms,
    st.monthsParse = xs,
    st.monthsRegex = ws,
    st.monthsShortRegex = vs,
    st.week = Ss,
    st.firstDayOfYear = As,
    st.firstDayOfWeek = Es,
    st.weekdays = Ms,
    st.weekdaysMin = Ls,
    st.weekdaysShort = Ps,
    st.weekdaysParse = Bs,
    st.weekdaysRegex = Hs,
    st.weekdaysShortRegex = js,
    st.weekdaysMinRegex = Gs,
    st.isPM = qs,
    st.meridiem = Js,
    be("en", {
        eras: [{
            since: "0001-01-01",
            until: 1 / 0,
            offset: 1,
            name: "Anno Domini",
            narrow: "AD",
            abbr: "AD"
        }, {
            since: "0000-12-31",
            until: -1 / 0,
            offset: 1,
            name: "Before Christ",
            narrow: "BC",
            abbr: "BC"
        }],
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(e) {
            var r = e % 10;
            return e + (Z(e % 100 / 10) === 1 ? "th" : r === 1 ? "st" : r === 2 ? "nd" : r === 3 ? "rd" : "th")
        }
    }),
    o.lang = xt("moment.lang is deprecated. Use moment.locale instead.", be),
    o.langData = xt("moment.langData is deprecated. Use moment.localeData instead.", pe);
    var me = Math.abs;
    function aa() {
        var e = this._data;
        return this._milliseconds = me(this._milliseconds),
        this._days = me(this._days),
        this._months = me(this._months),
        e.milliseconds = me(e.milliseconds),
        e.seconds = me(e.seconds),
        e.minutes = me(e.minutes),
        e.hours = me(e.hours),
        e.months = me(e.months),
        e.years = me(e.years),
        this
    }
    function Ln(e, r, s, a) {
        var l = re(r, s);
        return e._milliseconds += a * l._milliseconds,
        e._days += a * l._days,
        e._months += a * l._months,
        e._bubble()
    }
    function ua(e, r) {
        return Ln(this, e, r, 1)
    }
    function la(e, r) {
        return Ln(this, e, r, -1)
    }
    function Yn(e) {
        return e < 0 ? Math.floor(e) : Math.ceil(e)
    }
    function ca() {
        var e, r, s, a, l, g = this._milliseconds, w = this._days, P = this._months, Y = this._data;
        return g >= 0 && w >= 0 && P >= 0 || g <= 0 && w <= 0 && P <= 0 || (g += 864e5 * Yn(Ur(P) + w),
        w = 0,
        P = 0),
        Y.milliseconds = g % 1e3,
        e = Ft(g / 1e3),
        Y.seconds = e % 60,
        r = Ft(e / 60),
        Y.minutes = r % 60,
        s = Ft(r / 60),
        Y.hours = s % 24,
        w += Ft(s / 24),
        P += l = Ft(Bn(w)),
        w -= Yn(Ur(l)),
        a = Ft(P / 12),
        P %= 12,
        Y.days = w,
        Y.months = P,
        Y.years = a,
        this
    }
    function Bn(e) {
        return 4800 * e / 146097
    }
    function Ur(e) {
        return 146097 * e / 4800
    }
    function ha(e) {
        if (!this.isValid())
            return NaN;
        var r, s, a = this._milliseconds;
        if ((e = yt(e)) === "month" || e === "quarter" || e === "year")
            switch (r = this._days + a / 864e5,
            s = this._months + Bn(r),
            e) {
            case "month":
                return s;
            case "quarter":
                return s / 3;
            case "year":
                return s / 12
            }
        else
            switch (r = this._days + Math.round(Ur(this._months)),
            e) {
            case "week":
                return r / 7 + a / 6048e5;
            case "day":
                return r + a / 864e5;
            case "hour":
                return 24 * r + a / 36e5;
            case "minute":
                return 1440 * r + a / 6e4;
            case "second":
                return 86400 * r + a / 1e3;
            case "millisecond":
                return Math.floor(864e5 * r) + a;
            default:
                throw new Error("Unknown unit " + e)
            }
    }
    function ge(e) {
        return function() {
            return this.as(e)
        }
    }
    var Un = ge("ms")
      , fa = ge("s")
      , da = ge("m")
      , pa = ge("h")
      , ma = ge("d")
      , ga = ge("w")
      , xa = ge("M")
      , ya = ge("Q")
      , va = ge("y")
      , wa = Un;
    function ba() {
        return re(this)
    }
    function Sa(e) {
        return e = yt(e),
        this.isValid() ? this[e + "s"]() : NaN
    }
    function De(e) {
        return function() {
            return this.isValid() ? this._data[e] : NaN
        }
    }
    var _a = De("milliseconds")
      , Ea = De("seconds")
      , Aa = De("minutes")
      , Ta = De("hours")
      , Na = De("days")
      , Da = De("months")
      , Oa = De("years");
    function Ca() {
        return Ft(this.days() / 7)
    }
    var xe = Math.round
      , Ye = {
        ss: 44,
        s: 45,
        m: 45,
        h: 22,
        d: 26,
        w: null,
        M: 11
    };
    function ka(e, r, s, a, l) {
        return l.relativeTime(r || 1, !!s, e, a)
    }
    function Ra(e, r, s, a) {
        var l = re(e).abs()
          , g = xe(l.as("s"))
          , w = xe(l.as("m"))
          , P = xe(l.as("h"))
          , Y = xe(l.as("d"))
          , at = xe(l.as("M"))
          , Dt = xe(l.as("w"))
          , le = xe(l.as("y"))
          , Oe = g <= s.ss && ["s", g] || g < s.s && ["ss", g] || w <= 1 && ["m"] || w < s.m && ["mm", w] || P <= 1 && ["h"] || P < s.h && ["hh", P] || Y <= 1 && ["d"] || Y < s.d && ["dd", Y];
        return s.w != null && (Oe = Oe || Dt <= 1 && ["w"] || Dt < s.w && ["ww", Dt]),
        (Oe = Oe || at <= 1 && ["M"] || at < s.M && ["MM", at] || le <= 1 && ["y"] || ["yy", le])[2] = r,
        Oe[3] = +e > 0,
        Oe[4] = a,
        ka.apply(null, Oe)
    }
    function Ia(e) {
        return e === void 0 ? xe : typeof e == "function" && (xe = e,
        !0)
    }
    function Fa(e, r) {
        return Ye[e] !== void 0 && (r === void 0 ? Ye[e] : (Ye[e] = r,
        e === "s" && (Ye.ss = r - 1),
        !0))
    }
    function Ma(e, r) {
        if (!this.isValid())
            return this.localeData().invalidDate();
        var s, a, l = !1, g = Ye;
        return typeof e == "object" && (r = e,
        e = !1),
        typeof e == "boolean" && (l = e),
        typeof r == "object" && (g = Object.assign({}, Ye, r),
        r.s != null && r.ss == null && (g.ss = r.s - 1)),
        a = Ra(this, !l, g, s = this.localeData()),
        l && (a = s.pastFuture(+this, a)),
        s.postformat(a)
    }
    var Wr = Math.abs;
    function Be(e) {
        return (e > 0) - (e < 0) || +e
    }
    function xr() {
        if (!this.isValid())
            return this.localeData().invalidDate();
        var e, r, s, a, l, g, w, P, Y = Wr(this._milliseconds) / 1e3, at = Wr(this._days), Dt = Wr(this._months), le = this.asSeconds();
        return le ? (e = Ft(Y / 60),
        r = Ft(e / 60),
        Y %= 60,
        e %= 60,
        s = Ft(Dt / 12),
        Dt %= 12,
        a = Y ? Y.toFixed(3).replace(/\.?0+$/, "") : "",
        l = le < 0 ? "-" : "",
        g = Be(this._months) !== Be(le) ? "-" : "",
        w = Be(this._days) !== Be(le) ? "-" : "",
        P = Be(this._milliseconds) !== Be(le) ? "-" : "",
        l + "P" + (s ? g + s + "Y" : "") + (Dt ? g + Dt + "M" : "") + (at ? w + at + "D" : "") + (r || e || Y ? "T" : "") + (r ? P + r + "H" : "") + (e ? P + e + "M" : "") + (Y ? P + a + "S" : "")) : "P0D"
    }
    var et = cr.prototype;
    return et.isValid = Ni,
    et.abs = aa,
    et.add = ua,
    et.subtract = la,
    et.as = ha,
    et.asMilliseconds = Un,
    et.asSeconds = fa,
    et.asMinutes = da,
    et.asHours = pa,
    et.asDays = ma,
    et.asWeeks = ga,
    et.asMonths = xa,
    et.asQuarters = ya,
    et.asYears = va,
    et.valueOf = wa,
    et._bubble = ca,
    et.clone = ba,
    et.get = Sa,
    et.milliseconds = _a,
    et.seconds = Ea,
    et.minutes = Aa,
    et.hours = Ta,
    et.days = Na,
    et.weeks = Ca,
    et.months = Da,
    et.years = Oa,
    et.humanize = Ma,
    et.toISOString = xr,
    et.toString = xr,
    et.toJSON = xr,
    et.locale = Tn,
    et.localeData = Dn,
    et.toIsoString = xt("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", xr),
    et.lang = Nn,
    B("X", 0, 0, "unix"),
    B("x", 0, 0, "valueOf"),
    _("x", y),
    _("X", nt),
    ot("X", function(e, r, s) {
        s._d = new Date(1e3 * parseFloat(e))
    }),
    ot("x", function(e, r, s) {
        s._d = new Date(Z(e))
    }),
    o.version = "2.30.1",
    u(ht),
    o.fn = E,
    o.min = _i,
    o.max = Ei,
    o.now = Ai,
    o.utc = R,
    o.unix = ta,
    o.months = ra,
    o.isDate = L,
    o.locale = be,
    o.invalid = tt,
    o.duration = re,
    o.isMoment = j,
    o.weekdays = sa,
    o.parseZone = ea,
    o.localeData = pe,
    o.isDuration = hr,
    o.monthsShort = na,
    o.weekdaysMin = oa,
    o.defineLocale = Dr,
    o.updateLocale = ti,
    o.locales = ei,
    o.weekdaysShort = ia,
    o.normalizeUnits = yt,
    o.relativeTimeRounding = Ia,
    o.relativeTimeThreshold = Fa,
    o.calendarFormat = Ji,
    o.prototype = E,
    o.HTML5_FMT = {
        DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
        DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
        DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
        DATE: "YYYY-MM-DD",
        TIME: "HH:mm",
        TIME_SECONDS: "HH:mm:ss",
        TIME_MS: "HH:mm:ss.SSS",
        WEEK: "GGGG-[W]WW",
        MONTH: "YYYY-MM"
    },
    o
}();
rs.exports;
var $n;
(function(d) {
    d[d.Text = 0] = "Text",
    d[d.Image = 1] = "Image"
}
)($n || ($n = {}));
var qn;
(function(d) {
    d.ToggleListening = "toggle-listening",
    d.Copy = "copy",
    d.Print = "print"
}
)(qn || (qn = {}));
class yr {
    static onBrowserHasGoneFromInactiveToActive(n) {
        const o = this.onVisiableListeners.size;
        return this.onVisiableListeners.add(n),
        o === 0 && this.addInactiveToActiveEvents(),
        () => {
            this.onVisiableListeners.size === 0 ? this.removeInactiveToActiveEvents() : this.onVisiableListeners.delete(n)
        }
    }
    static shouldDebounce() {
        return Date.now() - this.lastEventFireTime < this.dbounceTimeMs
    }
    static addInactiveToActiveEvents() {
        this.visibilityChangeListener = () => {
            this.shouldDebounce() || document.hidden || (this.onVisiableListeners.forEach(n => n()),
            this.lastEventFireTime = Date.now())
        }
        ,
        this.focusListener = () => {
            this.shouldDebounce() || (this.onVisiableListeners.forEach(n => n()),
            this.lastEventFireTime = Date.now())
        }
        ,
        this.lastMouseMove = Date.now(),
        this.mmlistener = () => {
            this.shouldDebounce() || (Date.now() - this.lastMouseMove > 8e3 && (this.onVisiableListeners.forEach(n => n()),
            this.lastEventFireTime = Date.now()),
            this.lastMouseMove = Date.now())
        }
        ,
        this.cancelWeirdEventWorkarounds = this.addWeirdEventWorkarounds(),
        document.addEventListener("visibilitychange", this.visibilityChangeListener, !1),
        document.addEventListener("focus", this.focusListener, !1),
        window.addEventListener("focus", this.focusListener, !1),
        document.addEventListener("mousemove", this.mmlistener, !0)
    }
    static removeInactiveToActiveEvents() {
        document.removeEventListener("visibilitychange", this.visibilityChangeListener, !1),
        document.removeEventListener("focus", this.focusListener, !1),
        window.removeEventListener("focus", this.focusListener, !1),
        document.removeEventListener("mousemove", this.mmlistener, !0),
        this.cancelWeirdEventWorkarounds()
    }
    static addWeirdEventWorkarounds() {
        let n, o, u = Date.now();
        const h = () => {
            o = window.requestAnimationFrame( () => {
                !this.shouldDebounce() && Date.now() - u > 1e3 && (this.onVisiableListeners.forEach(p => p()),
                this.lastEventFireTime = Date.now()),
                u = Date.now(),
                n = setTimeout(h, 900)
            }
            )
        }
        ;
        return n = setTimeout(h, 900),
        () => {
            cancelAnimationFrame(o),
            clearTimeout(n)
        }
    }
}
yr.onVisiableListeners = new Set,
yr.lastEventFireTime = 0,
yr.dbounceTimeMs = 250;
class Kr {
}
Kr.addListener = (d, n, o, u) => {
    let h = !1
      , p = Date.now();
    return yr.onBrowserHasGoneFromInactiveToActive( () => {
        h || Date.now() - p < 500 || (h = !0,
        setTimeout( () => {
            p = Date.now(),
            o.getTabInteropStatus(d, n).then(x => {
                h = !1,
                u(x)
            }
            ).catch( () => u(null))
        }
        , 500))
    }
    )
}
;
class au {
    constructor(n, o, u, h) {
        this.markTabAsOpenedAndAddAbandonedListener = p => es(this, void 0, void 0, function*() {
            try {
                const x = yield this.model.getTabInteropStatus(this.tabInteropId, this.userProfileId);
                if (x && x.tabInteropId === this.tabInteropId && x.tabOpened === !1)
                    return p(x),
                    function() {}
            } catch {
                p(null)
            }
            return yield this.model.setTabOpened(this.tabInteropId, this.userProfileId, this.resourceId, this.clientId),
            this.addTabAbandonedListener(p)
        }),
        this.addTabAbandonedListener = p => Kr.addListener(this.tabInteropId, this.userProfileId, this.model, x => {
            x && (x.tabInteropId !== this.tabInteropId || x.tabOpened && this.isClientMatch(x)) || p(x)
        }
        ),
        this.tabInteropId = n,
        this.userProfileId = o,
        this.model = h,
        this.resourceId = u,
        this.clientId = qr().toString()
    }
    isClientMatch(n) {
        return ((n == null ? void 0 : n.clientId) || this.clientId) === this.clientId
    }
}
const ns = zn.createContext(null)
  , yu = ({tabInteropId: d, userProfileId: n, resourceId: o, model: u, children: h}) => {
    const p = Nt.useMemo( () => new au(d,n,o,u), [o, n, d, u]);
    return zn.createElement(ns.Provider, {
        value: p
    }, h)
}
;
function vu() {
    return Nt.useContext(ns)
}
navigator.userAgent.toLowerCase();
const wu = "__CLOSE_NO_SCORE";
class bu {
    constructor(n, o, u, h) {
        this.addResponseListener = (p, x) => p == null ? () => {}
        : (this.tabEvents = p,
        (p.onPopupBlockerSuspected || p.onTabOpened) && (this.popupBlockerDetectionTimeout = setTimeout( () => {
            this.model.getTabInteropStatus(this.tabInteropId, this.userProfileId).then(S => this.handleResponse(p, S))
        }
        , 5e3)),
        p.onResponse && (this.cleanupResponseListener = Kr.addListener(this.tabInteropId, this.userProfileId, this.model, S => this.handleResponse(p, S))),
        () => {
            clearTimeout(this.popupBlockerDetectionTimeout),
            this.cleanupResponseListener && this.cleanupResponseListener(),
            p.suppressDelete || this.model.deleteTabInterop(this.tabInteropId, this.userProfileId).then( () => x && x())
        }
        ),
        this.handleResponse = (p, x) => {
            x != null && (x.tabResponse != null ? (p.onTabOpened && p.onTabOpened(),
            p.onResponse && p.onResponse(x)) : x.tabOpened ? p.onTabOpened && p.onTabOpened() : p.onPopupBlockerSuspected && p.onPopupBlockerSuspected())
        }
        ,
        this.type = n,
        this.tabInteropId = h ?? u.buildTabInteropId(n),
        this.userProfileId = o,
        this.model = u
    }
    removeResponseListener() {
        return es(this, void 0, void 0, function*() {
            var n;
            clearTimeout(this.popupBlockerDetectionTimeout),
            this.cleanupResponseListener && this.cleanupResponseListener(),
            !((n = this.tabEvents) === null || n === void 0) && n.suppressDelete || (yield this.model.deleteTabInterop(this.tabInteropId, this.userProfileId))
        })
    }
    abandon() {
        return this.model.abandonTabInterop(this.tabInteropId, this.userProfileId)
    }
}
var ke;
(function(d) {
    d[d.Lab = 0] = "Lab",
    d[d.Exam = 1] = "Exam",
    d[d.Review = 2] = "Review",
    d[d.Quiz = 3] = "Quiz",
    d[d.Assessment = 4] = "Assessment"
}
)(ke || (ke = {}));
const uu = d => {
    const {interopHelper: n, onResponse: o, onAbandon: u} = d
      , [h,p] = Nt.useState(!1);
    Nt.useEffect( () => n.addResponseListener({
        onResponse: o,
        suppressDelete: d.suppressDelete
    }, d.onAfterAbandon), [n, o, d.suppressDelete, d.onAbandon, d.onAfterAbandon]);
    const x = ( () => {
        switch (d.interopHelper.type) {
        case ke.Lab:
            return "lab";
        case ke.Exam:
            return "exam";
        case ke.Review:
            return "review";
        case ke.Quiz:
            return "quiz";
        case ke.Assessment:
            return "assessment";
        default:
            throw new Error("Invalid Wait Type in WaitingForClose")
        }
    }
    )()
      , S = Nt.useCallback( () => {
        p(!0),
        n.abandon().then(b => {
            b.tabResponse == null ? u() : o(b);
            try {
                BroadcastChannel && new BroadcastChannel("testout_channel").postMessage({
                    abandon: !0
                })
            } catch {}
            p(!1)
        }
        )
    }
    , [n, u, o]);
    return Nt.createElement(_e.Dialog, {
        automationId: "waitForCloseDialog",
        testId: "wait-for-close-dialog",
        className: "waitingForClose_main"
    }, Nt.createElement(_e.Dialog.Header, {
        className: "waitingForClose_title"
    }, Nt.createElement(_e.Dialog.Title, {
        automationId: "header",
        testId: "wait-for-close-dialog-title"
    }, Nt.createElement(Vr, {
        i18nKey: `viewerclient:waiting_dialog_title_${x}`
    }))), Nt.createElement(_e.Dialog.Body, null, Nt.createElement(_e.Text.P, {
        automationId: "message",
        testId: "wait-for-close-dialog-message",
        className: "waitingForClose_text mx-auto"
    }, Nt.createElement(Vr, {
        i18nKey: `viewerclient:waiting_dialog_body_${x}`
    }))), Nt.createElement(_e.Dialog.Buttons, null, Nt.createElement(_e.Button, {
        id: "waitingForTabClose_closeMessage",
        automationId: "closeButton",
        testId: "wait-for-close-dialog-close-button",
        onClick: S,
        disabled: h,
        variation: _e.ButtonVariation.Secondary
    }, Nt.createElement(Vr, {
        i18nKey: `viewerclient:waiting_dialog_close_${x}`
    }))))
}
;
uu.displayName = "WaitForCloseController";
class ir {
    static updateResourceResultSummaryMapWithIScore(n, o, u) {
        if (!u) {
            console.error("No resource result summary map!");
            return
        }
        const h = u[o];
        h != null ? (h.passed = n.passed || h.passed,
        h.recentPoints = n.points,
        h.recentPointsPossible = n.maxPoints,
        h.recentDetails = n.responseDetails) : u[o] = {
            passed: n.passed,
            recentPoints: n.points,
            recentPointsPossible: n.maxPoints,
            recentDetails: n.responseDetails,
            recentSecondsInResource: n.seconds
        }
    }
    static updateResourceResultSummaryMap(n, o) {
        if (!o)
            return;
        const u = n.resourceId
          , h = o[u];
        h != null ? (h.passed = n.passed || h.passed,
        h.recentPoints = n.pointsScored,
        h.recentPointsPossible = n.pointsPossible,
        h.recentDetails = n.responseDetails) : o[u] = {
            passed: n.passed,
            recentPoints: n.pointsScored,
            recentPointsPossible: n.pointsPossible,
            recentDetails: n.responseDetails,
            recentSecondsInResource: n.secondsInResource
        }
    }
    static postResourceResult(n, o, u, h) {
        const p = Zn.compress(JSON.stringify(o));
        return dt.post("/resourceResults/" + n.userProfileId + "/" + n.resultStorage + "/encoded", {
            value: p
        }, x => {
            isNaN(x) || (u && ir.updateResourceResultSummaryMap(o, u),
            h != null && h(x))
        }
        , {
            autoRetry: !0,
            customFailureMessageKey: "fail_rr_score"
        })
    }
    static addResourceResultTime(n, o, u) {
        dt.put("/resourceResults/" + n.userProfileId + "/" + n.resultStorage + "/" + o + "/additionalSecondsInResource", {
            secondsInResource: u
        })
    }
    static getResourceResultSummaryMapAsync2(n, o) {
        return dt.get(`/resourceResults/${n.userProfileId}/${n.resultStorage}/resourceIdResultSummaryMap/${o.productVersionId}`)
    }
    static getResourceResultSummaryMapAsync(n, o, u) {
        return dt.get(`/resourceResults/${n}/${o}/resourceIdResultSummaryMap/${u}`)
    }
    static getResourceResultSummaryMap(n, o, u) {
        return dt.get("/resourceResults/" + n.userProfileId + "/" + n.resultStorage + "/resourceIdResultSummaryMap/" + o.productVersionId, h => {
            u == null || u(h.mostRecentSectionIndex, h.map)
        }
        )
    }
    static getResourceResultsAttempts(n, o, u) {
        dt.get(`/resourceResults/${n.userProfileId}/${n.resultStorage}/${o}/attempts`, u)
    }
    static getResourceResultsAttemptsAsync2(n, o) {
        return dt.get(`/resourceResults/${n.userProfileId}/${n.resultStorage}/${o}/attempts`)
    }
    static getResourceResultsAttemptsAsync(n, o, u) {
        return dt.get(`/resourceResults/${n}/${o}/${u}/attempts`)
    }
    static getTaskSetsUsed(n, o, u) {
        dt.get("/resourceResults/" + n.userProfileId + "/" + n.resultStorage + "/" + o + "/taskSetsUsedMask", u)
    }
    static setTaskSetsUsed(n, o, u) {
        return dt.put("/resourceResults/" + n.userProfileId + "/" + n.resultStorage + "/" + o + "/taskSetsUsedMask", {
            taskSetsUsedMask: u
        })
    }
    static getLeaderboards(n, o, u, h) {
        dt.get("/resourceResults/" + n.userProfileId + "/" + n.resultStorage + "/" + o + "/leaderboards?classprofileid=" + u, h)
    }
    static updatePoints(n, o, u, h) {
        dt.put("/resourceResults/" + n.userProfileId + "/" + n.resultStorage + "/" + o + "/updatePoints", {
            points: u
        }, h)
    }
    static addResourceResult(n, o, u, h) {
        dt.post("/resourceResults/" + n.userProfileId + "/" + n.resultStorage + "/" + o + "/addResult", JSON.stringify(u), h)
    }
    static archiveResourceResult(n, o, u) {
        dt.post("/resourceResults/" + n.userProfileId + "/" + n.resultStorage + "/" + o + "/archiveResult", null, u)
    }
}
const Su = {
    detectSystemTimeChange: d => Vn().isBefore(d.date) ? Vn().diffMilliseconds(d.date) : 0
}
  , lu = d => {
    const n = Ua().platform;
    return Qr.jsx(Wa, {
        ...d,
        brand: n
    })
}
;
lu.displayName = "PlatformText";
var tr = (d => (d[d.Generic = 0] = "Generic",
d[d.PerformTask = 1] = "PerformTask",
d[d.DoNotPerformTask = 2] = "DoNotPerformTask",
d[d.UnnecessaryTask = 3] = "UnnecessaryTask",
d))(tr || {})
  , cu = (d => (d[d.None = 0] = "None",
d[d.Positive = 1] = "Positive",
d[d.Negative = 2] = "Negative",
d[d.Unnecessary = 3] = "Unnecessary",
d[d.Unknown = 4] = "Unknown",
d))(cu || {})
  , Et = (d => (d[d.Pass = 0] = "Pass",
d[d.Fail = 1] = "Fail",
d[d.PassWithHelp = 2] = "PassWithHelp",
d))(Et || {})
  , er = (d => (d[d.Standard = 0] = "Standard",
d[d.Competency = 1] = "Competency",
d[d.Proficiency = 2] = "Proficiency",
d[d.Application = 3] = "Application",
d))(er || {})
  , rr = (d => (d[d.ValueMatch = 0] = "ValueMatch",
d[d.ValueNoMatch = 1] = "ValueNoMatch",
d[d.NotPresent = 2] = "NotPresent",
d[d.Regex = 3] = "Regex",
d[d.Contains = 4] = "Contains",
d[d.DoesntContain = 5] = "DoesntContain",
d[d.ValueMatchCaseSensitive = 6] = "ValueMatchCaseSensitive",
d[d.Script = 7] = "Script",
d))(rr || {})
  , nr = (d => (d[d.AND = 0] = "AND",
d[d.OR = 1] = "OR",
d[d.FAILANDHELPIF = 2] = "FAILANDHELPIF",
d[d.THEN = 3] = "THEN",
d))(nr || {})
  , ne = (d => (d[d.AllItems = 0] = "AllItems",
d[d.TopItems = 1] = "TopItems",
d[d.AllWithoutGroups = 2] = "AllWithoutGroups",
d[d.TopItemsWithoutGroups = 3] = "TopItemsWithoutGroups",
d))(ne || {});
function ss(d, n) {
    function o() {
        const x = Math.floor(d / 3600)
          , S = Math.floor(d % 3600 / 60)
          , b = Math.floor(d % 60);
        return {
            hours: x,
            minutes: S,
            seconds: b
        }
    }
    function u({hSpecifier: x, mSpecifier: S, sSpecifier: b, spaces: A}) {
        const {hours: L, minutes: $, seconds: M} = o();
        let R = "";
        return L > 0 && (R += `${L}${A ? " " : ""}${n(x, {
            count: L
        })} `),
        ($ > 0 || L > 0 && M > 0) && (R += `${$}${A ? " " : ""}${n(S, {
            count: $
        })} `),
        (M > 0 || L === 0 && $ === 0) && (R += `${M}${A ? " " : ""}${n(b, {
            count: M
        })}`),
        R.trim()
    }
    return {
        shortFormat: () => u({
            hSpecifier: "h",
            mSpecifier: "m",
            sSpecifier: "s",
            spaces: !1
        }),
        longFormat: () => u({
            hSpecifier: "hour",
            mSpecifier: "minute",
            sSpecifier: "second",
            spaces: !0
        })
    }
}
const hu = ({durationSeconds: d, format: n}) => {
    const {t: o} = Xn()
      , {shortFormat: u, longFormat: h} = ss(d, o);
    return Qr.jsxs(Qr.Fragment, {
        children: [n === "short" ? u() : h(), " "]
    })
}
;
ss.Format = hu;
const Ue = class Ue {
    constructor(n) {
        this.Tasks = [];
        const o = Ue._simConfigRegex.exec(n);
        if (Ue._simConfigJsRegex.exec(n) != null && o == null) {
            let h = null;
            h = new Function(`${n}
return simConfig;`)(),
            this.parseSimConfig(h);
            return
        } else if (o != null) {
            let h = null;
            h = new Function(`${o[1]}
return simConfig;`)(),
            this.parseSimConfig(h);
            return
        } else {
            const h = n.match(/meta\sname="simdef"\scontent="(.*?)"/)
              , p = h ? h[1] : null
              , x = document.createElement("div");
            x.innerHTML = p;
            const S = x.textContent
              , b = new DOMParser().parseFromString(S, "text/xml");
            this.parseXmlDoc(b)
        }
    }
    parseXmlDoc(n) {
        n.documentElement.childNodes.forEach(o => {
            switch (o.nodeName) {
            case "simulation":
                const u = o.getAttribute("simType");
                this._simulationType = u ? er[u] : er.Standard,
                this._idealTime = parseInt(o.getAttribute("idealTime") ? o.getAttribute("idealTime") : "240", 10),
                this._idealClicks = parseInt(o.getAttribute("idealTime") ? o.getAttribute("idealTime") : "100", 10),
                o.childNodes.forEach(h => {
                    switch (h.nodeName) {
                    case "startup":
                        this._startupObjectType = h.getAttribute("objectType"),
                        this._startupObjectName = h.getAttribute("objectName"),
                        this._databaseName = h.getAttribute("databaseName");
                        break;
                    case "exhibits":
                        this._showExhibitAtStartup = h.getAttribute("showExhibitAtStartup") != null ? gt.stringToBool(h.getAttribute("showExhibitAtStartup")) : !0;
                        break
                    }
                }
                );
                break;
            case "tasks":
                this._reportAllSubtasks = o.getAttribute("reportAllSubtasks") != null ? gt.stringToBool(o.getAttribute("reportAllSubtasks")) : !1,
                this.parseTasksFromXml(this, o);
                break
            }
        }
        )
    }
    parseSimConfig(n) {
        var A, L, $;
        const {simType: o, idealTime: u, idealClicks: h} = n.simulation
          , {type: p, name: x, database: S} = ((A = n.simulation) == null ? void 0 : A.startupObject) ?? {}
          , b = (($ = (L = n.simulation) == null ? void 0 : L.exhibit) == null ? void 0 : $.showAtStartup) ?? !1;
        this._simulationType = o ? er[o] : er.Standard,
        this._idealTime = u || 240,
        this._idealClicks = h || 100,
        this._startupObjectType = p,
        this._startupObjectName = x,
        this._databaseName = S,
        this._showExhibitAtStartup = b ?? !0,
        this.parseTasksFromConfig(n)
    }
    filterTasksByTaskSet(n) {
        let o = 0
          , u = null;
        this.Tasks.forEach(h => {
            h instanceof We && (o === n && (u = h),
            o++)
        }
        ),
        u != null && (u.TaskItems.forEach(h => {}
        ),
        gt.isNullOrEmpty(u.StartupObjectType) || (this._effectiveStartupObjectType = u.StartupObjectType),
        gt.isNullOrEmpty(u.StartupObjectName) || (this._effectiveStartupObjectName = u.StartupObjectName),
        this.Tasks = u.TaskItems),
        this._taskSetNum = n
    }
    parseTasksFromXml(n, o) {
        o.childNodes.forEach(u => {
            switch (u.nodeName) {
            case "taskSet":
                const h = We.createFromXml(u);
                n.Tasks.push(h),
                this.parseTaskChildren(h, u);
                break;
            case "task":
                const p = Ee.createFromXml(u);
                n.Tasks.push(p),
                this.parseTaskChildren(p, u);
                break
            }
        }
        )
    }
    parseTasksFromConfig(n) {
        n.taskSets && this.Tasks.push(...n.taskSets.map(o => We.createFromConfig(o))),
        n.tasks && this.Tasks.push(...n.tasks.map(o => Ee.createFromConfig(o)))
    }
    parseTaskChildren(n, o) {
        o.childNodes.forEach(u => {
            switch (u.nodeName) {
            case "evalItem":
                n.TaskItems.push(ve.createFromXml(u));
                break;
            case "taskGroup":
                const h = He.createFromXml(u);
                n.TaskItems.push(h),
                this.parseTaskChildren(h, u);
                break;
            case "simAction":
                break;
            case "task":
                const p = Ee.createFromXml(u);
                this.parseTaskChildren(p, u),
                n.TaskItems.push(p);
                break
            }
        }
        )
    }
    get SimulationType() {
        return this._simulationType
    }
    set SimulationType(n) {
        this._simulationType = n
    }
    get IdealTime() {
        return this._idealTime
    }
    set IdealTime(n) {
        this._idealTime = n
    }
    get IdealClicks() {
        return this._idealClicks
    }
    set IdealClicks(n) {
        this._idealClicks = n
    }
    get StartupObjectType() {
        return this._startupObjectType
    }
    set StartupObjectType(n) {
        this._startupObjectType = n
    }
    get StartupObjectName() {
        return this._startupObjectName
    }
    set StartupObjectName(n) {
        this._startupObjectName = n
    }
    get EffectiveStartupObjectType() {
        return this._effectiveStartupObjectType || this._startupObjectType
    }
    set EffectiveStartupObjectType(n) {
        this._effectiveStartupObjectType = n
    }
    get EffectiveStartupObjectName() {
        return this._effectiveStartupObjectType || this._startupObjectName
    }
    set EffectiveStartupObjectName(n) {
        this._effectiveStartupObjectType = n
    }
    get DatabaseName() {
        return this._databaseName
    }
    set DatabaseName(n) {
        this._databaseName = n
    }
    get ShowExhibitAtStartup() {
        return this._showExhibitAtStartup
    }
    set ShowExhibitAtStartup(n) {
        this._showExhibitAtStartup = n
    }
    get ReportAllSubtasks() {
        return this._reportAllSubtasks
    }
    set ReportAllSubtasks(n) {
        this._reportAllSubtasks = n
    }
    get TaskSetNum() {
        return this._taskSetNum
    }
    set TaskSetNum(n) {
        this._taskSetNum = n
    }
}
;
Ue._simConfigRegex = new RegExp(/(var\ssimConfig\s=\s{[\s\S]*?});[\s\S]*?\/\/\sfor\suse\soutside\sof\sthe\sbrowser/),
Ue._simConfigJsRegex = new RegExp(/(var\ssimConfig\s=\s{[\s\S]*?});/);
let Qn = Ue;
class We {
    constructor() {
        this._taskItems = []
    }
    static createFromXml(n) {
        return Object.assign(new We, {
            _startupObjectType: n.getAttribute("objectType"),
            _startupObjectName: n.getAttribute("objectName")
        })
    }
    static createFromConfig(n) {
        return Object.assign(new We, {
            _startupObjectType: n.startupObjectType,
            _startupObjectName: n.startupObjectName,
            _taskItems: n.tasks.map(o => Ee.createFromConfig(o))
        })
    }
    get TaskItems() {
        return this._taskItems
    }
    set TaskItems(n) {
        this._taskItems = n
    }
    get StartupObjectType() {
        return this._startupObjectType
    }
    set StartupObjectType(n) {
        this._startupObjectType = n
    }
    get StartupObjectName() {
        return this._startupObjectName
    }
    set StartupObjectName(n) {
        this._startupObjectName = n
    }
}
class Ve {
    constructor() {}
    static getPropertiesFromXml(n) {
        const o = n.getAttribute("combineStyle");
        return {
            _combineStyle: o ? nr[o] : nr.AND,
            _subTitle: n.getAttribute("subTitle")
        }
    }
    static getPropertiesFromConfig(n) {
        return {
            _combineStyle: n.combineStyle ? nr[n.combineStyle] : nr.AND,
            _subTitle: n.subtitle
        }
    }
    get CombineStyle() {
        return this._combineStyle
    }
    set CombineStyle(n) {
        this._combineStyle = n
    }
    get SubTitle() {
        return this._subTitle
    }
    set SubTitle(n) {
        this._subTitle = n
    }
}
function fu(d) {
    const n = [];
    if (d)
        for (const o of d)
            switch (o.type) {
            case "evalItem":
                n.push(ve.createFromConfig(o));
                break;
            case "taskGroup":
                n.push(He.createFromConfig(o));
                break
            }
    return n
}
class Ee {
    constructor() {
        this._taskItems = []
    }
    static createFromXml(n) {
        if (n)
            return Object.assign(new Ee, {
                _description: n.getAttribute("description"),
                _positive: n.getAttribute("positive") != null ? gt.stringToBool(n.getAttribute("positive")) : !0,
                _unnecessary: n.getAttribute("unnecessary") != null ? gt.stringToBool(n.getAttribute("unnecessary")) : !1,
                _hint: n.getAttribute("hint") != null ? n.getAttribute("hint") : "",
                _showMe: n.getAttribute("showme") != null ? n.getAttribute("showme") : ""
            })
    }
    static createFromConfig(n) {
        if (n)
            return Object.assign(new Ee, {
                _description: n.description,
                _positive: n.positive != null ? n.positive : !0,
                _unnecessary: n.unnecessary != null ? n.unnecessary : !1,
                _hint: n.hint != null || "",
                _showMe: n.showMe || "",
                _taskItems: fu(n.evalItems)
            })
    }
    static createFromValues(n, o, u, h, p) {
        const x = new Ee;
        return x._description = n,
        x._positive = o,
        x._unnecessary = u,
        x._hint = h,
        x._showMe = p,
        x
    }
    get TaskItems() {
        return this._taskItems
    }
    set TaskItems(n) {
        this._taskItems = n
    }
    get Description() {
        return this._description
    }
    set Description(n) {
        this._description = n
    }
    get Positive() {
        return this._positive
    }
    set Positive(n) {
        this._positive = n
    }
    get Unnecessary() {
        return this._unnecessary
    }
    set Unnecessary(n) {
        this._unnecessary = n
    }
    get Hint() {
        return this._hint
    }
    set Hint(n) {
        this._hint = n
    }
    get ShowMe() {
        return this._showMe
    }
    set ShowMe(n) {
        this._showMe = n
    }
}
class He extends Ve {
    constructor() {
        super(),
        this._taskItems = []
    }
    static createFromXml(n) {
        return Object.assign(new He, Ve.getPropertiesFromXml(n))
    }
    static createFromConfig(n) {
        return Object.assign(new He, Ve.getPropertiesFromConfig(n))
    }
    get TaskItems() {
        return this._taskItems
    }
    set TaskItems(n) {
        this._taskItems = n
    }
}
class ve extends Ve {
    constructor() {
        super(),
        this._pathItems = []
    }
    static createFromXml(n) {
        const o = n.getAttribute("evalStyle")
          , u = Object.assign(new ve, Ve.getPropertiesFromXml(n), {
            _isEvent: n.getAttribute("isEvent") ? gt.stringToBool(n.getAttribute("isEvent")) : !1,
            _name: n.getAttribute("name"),
            _value: n.getAttribute("value"),
            _evalStyle: o ? rr[o] : rr.ValueMatch
        });
        u._capturedValue = u.SubTitle;
        const h = n.getAttribute("path");
        return gt.isNullOrEmpty(h) || h.split("\\").forEach(p => {
            u._pathItems.push(p.replace("%5C", "\\").replace("&#174;", "®"))
        }
        ),
        u
    }
    static createFromConfig(n) {
        const o = Object.assign(new ve, Ve.getPropertiesFromConfig(n), {
            _isEvent: !!n.isEvent,
            _name: n.name,
            _value: n.value,
            _evalStyle: n.evalStyle ? rr[n.evalStyle] : rr.ValueMatch
        });
        o._capturedValue = o.SubTitle;
        const u = n.path;
        return gt.isNullOrEmpty(u) || u.split("\\").forEach(h => {
            o._pathItems.push(h)
        }
        ),
        o
    }
    get EvalStyle() {
        return this._evalStyle
    }
    set EvalStyle(n) {
        this._evalStyle = n
    }
    get IsEvent() {
        return this._isEvent
    }
    set IsEvent(n) {
        this._isEvent = n
    }
    get Name() {
        return this._name
    }
    set Name(n) {
        this._name = n
    }
    get Value() {
        return this._value
    }
    set Value(n) {
        this._value = n
    }
    get PathItems() {
        return this._pathItems
    }
    set PathItems(n) {
        this._pathItems = n
    }
    get CapturedValue() {
        return this._capturedValue
    }
    set CapturedValue(n) {
        this._capturedValue = n
    }
}
function _u(d, n) {
    return async o => {
        const u = zr.getResourceUrl(d, n, o);
        return await Ie.requestAccelerators(),
        Ie.getContentPath(u)
    }
}
const Eu = {
    postResourceResult: ir.postResourceResult,
    setTaskSetsUsed: ir.setTaskSetsUsed
};
class ft {
    static async buildLaunchUrls(n) {
        const {classProfileId: o, getContentPath: u, labSimBaseUrl: h, locale: p, i18n: x, paths: S, productVersionId: b, queryString: A="", resource: L, tabInteropId: $, taskCompletionMask: M, taskSet: R, user: K, returnToLab: O} = n
          , v = h + "simwindow.html"
          , tt = {
            simpackage: S.PackageUrl,
            simfile: S.SimFile,
            culture: "en-us",
            mainurl: v
        }
          , Rt = await u(S.SimEngineDir + S.SimEngineFile)
          , At = {
            simDefUrl: await u(S.SimUrl),
            resourceId: L.resourceId,
            resultstorage: K.userProfile.resultStorage,
            resourcetype: L.resourceType,
            resourcesubtype: L.resourceSubType,
            productVersionId: b,
            coursetitle: `${L.resourceIndex} ${L.resourceTitle}`,
            locale: p,
            suppressclosewarning: !1,
            useremail: K.signOnEmail,
            userfullname: x.t("atomics:personal-name", {
                givenName: K.userProfile.givenName,
                surName: K.userProfile.surname
            }),
            webservicesuri: jn,
            tabinteropid: $,
            userprofileid: K.userProfile.userProfileId,
            dtval: Hn().add(7, "days").valueOf().toString(),
            noonbeforeunload: A.indexOf("noonbeforeunload=true") > -1 ? !0 : null,
            classprofileid: o,
            automation: A.indexOf("automation=true") > -1 ? !0 : null,
            taskSet: R,
            checkanswers: O
        }
          , St = this.buildLaunchUrl(Rt, tt, v, At, A);
        At.taskCompletionMask = M;
        const j = this.buildLaunchUrl(Rt, tt, v, At, A);
        return {
            launchFreshUrl: St,
            launchWithTaskMaskUrl: j
        }
    }
    static buildExamLaunchUrl({packageUrl: n, simFile: o, simEngineUrl: u, endTime: h, userProfile: p, tabInteropId: x, currentQuestion: S, totalQuestions: b, questionRowId: A, locale: L}) {
        var K;
        const $ = window.location.toString().split(/[^/]+\.html/)[0] + "simwindow.html"
          , M = {
            simpackage: n,
            simfile: o,
            culture: L,
            suppressReport: !0,
            mainurl: $
        };
        h != null && (M.endTime = h.valueOf().toString());
        const R = {
            locale: L,
            suppressclosewarning: !1,
            useremail: p == null ? void 0 : p.signOnEmail,
            webservicesurl: jn,
            tabinteropid: x,
            userprofileid: (K = p == null ? void 0 : p.userProfile) == null ? void 0 : K.userProfileId,
            dtval: Hn().add(7, "days").valueOf().toString(),
            currentQuestion: S,
            totalQuestions: b,
            questionRowId: A,
            endTime: M.endTime
        };
        return Hr.isAutomation() && (R.automation = !0),
        this.buildLaunchUrl(u, M, $, R, window.location.search)
    }
    static buildLaunchUrl(n, o, u, h, p) {
        const x = Hr.makeQueryString(o, ["mainurl"])
          , S = `${n}${x}`;
        h.uri = S;
        let b = u + "?" + encodeURIComponent(btoa(Hr.makeQueryString(h, ["webservicesuri"]).substr(1)));
        return p.length > 1 && (b += "&" + p.substr(1)),
        b
    }
    static async scoreSim(n) {
        const {encodedLabResponse: o, resource: u, signedOnUser: h, simDefinition: p, productVersionId: x, classProfileId: S, resourceResultSummaryMap: b, taskSetsUsedMask: A, model: L} = n;
        if (gt.isNullOrEmpty(o))
            return {
                wasScored: !1
            };
        {
            const $ = o.startsWith("POSTED::");
            let M = o;
            $ && (M = o.substring(8));
            const R = ft.decodeSimResponse(M)
              , K = ft.extractResponseDetails(!1, p, R)
              , O = {
                userProfileId: h.userProfile.userProfileId,
                resourceId: u.resourceId,
                resourceType: u.resourceType,
                resourceSubType: u.resourceSubType,
                groupId: x.toString(),
                pointsScored: R.actualScore,
                pointsPossible: Math.floor(R.possibleScore),
                passed: R.credit === Et.Pass,
                secondsInResource: Math.floor(Math.min(R.timeInSeconds, 3600)),
                responseDetails: K,
                activeClassProfileId: S || null
            };
            return $ ? ir.updateResourceResultSummaryMap(O, b) : await L.postResourceResult(h.userProfile, O, b),
            u.resourceSubType === ye.ChallengeLabSimulation && await L.setTaskSetsUsed(h.userProfile, u.resourceId, A),
            {
                wasScored: !0,
                simResponse: R,
                resourceResult: O
            }
        }
    }
    static getSimPaths(n, o, u, h, p) {
        return n.toLowerCase().indexOf("typescriptv1") > -1 ? ft.getTs1SimPaths(n) : ft.getUnversionedSimPaths(n, o, u, h, p)
    }
    static getTs1SimPaths(n) {
        let o, u = "", h;
        n.indexOf("..\\") === 0 && (n = n.replace("..\\", "")),
        o = J.convertBackslashesToForward(n.toLowerCase()),
        o.toLowerCase().endsWith(".js") || o.toLowerCase().endsWith(".configjs") || (o += ".js");
        let p = !1;
        const x = J.convertBackslashesToForward(n).split("/");
        for (let M = 0; M < x.length; M++) {
            const R = x[M];
            if (u += R + "/",
            p)
                break;
            R === "typescriptv1" && (p = !0)
        }
        const S = "simstartup_webpack.html"
          , b = J.changeExtension(o, "")
          , A = J.convertBackslashesToForward(b + "_scen.html")
          , L = J.convertBackslashesToForward(b + "_expl.html");
        h = J.convertBackslashesToForward(J.getDirectoryName(o) + "/package.xml"),
        h = h.match(/([^/]*?)\/[^/]*?$/)[1];
        const $ = J.getFileNameWithoutExtension(o);
        return {
            SimUrl: o,
            SimFile: $,
            SimEngineDir: u,
            SimEngineFile: S,
            ScenarioUrl: A,
            ExplanationUrl: L,
            PackageUrl: h,
            HandleSimReport: !1
        }
    }
    static getUnversionedSimPaths(n, o, u, h, p) {
        let x, S, b;
        (n.toLowerCase().endsWith(".sdf") || n.toLowerCase().endsWith(".rdx")) && (n = J.changeExtension(n, ".html"));
        //!!!! use ProductVersion to get outlinefile and isHtml5
        if (x = n.toLowerCase(),
        h != null)
            throw new Error("Code not converted yet");
        if (o != null || p != null) {
            const R = ft.getSimEngineDir(x);
            o != null ? o.outlineType === Ke.Html5 ? (x = R.simUrl,
            S = R.simEngineDir) : S = J.getDirectoryName(x) + "/" : p === "Html5" && (x = R.simUrl,
            S = R.simEngineDir)
        } else
            S = J.getDirectoryName(x) + "/";
        S = J.convertBackslashesToForward(S);
        const A = "xsimengine.html"
          , L = J.convertBackslashesToForward(J.changeExtension(x, "") + "_scen.html")
          , $ = J.convertBackslashesToForward(J.changeExtension(x, "") + "_expl.html");
        b = J.convertBackslashesToForward(J.getDirectoryName(x) + "/package.xml"),
        b = b.match(/([^/]*?)\/[^/]*?$/)[1];
        const M = J.getFileName(x);
        return {
            SimUrl: x,
            SimFile: M,
            SimEngineDir: S,
            SimEngineFile: A,
            ScenarioUrl: L,
            ExplanationUrl: $,
            PackageUrl: b,
            HandleSimReport: !0
        }
    }
    static getSimEngineDir(n) {
        let o;
        const u = J.getFileName(n)
          , h = J.getFileName(J.getDirectoryName(n));
        n.toLowerCase().indexOf("simulations") > -1 || (n = `sims\\${h}\\simulations\\packages\\${h}\\${u}`);
        const p = n.split("\\").filter(x => !gt.isNullOrEmpty(x));
        if (p[0] === "sims" && p.length > 2 ? o = `sims\\${p[1]}\\` : o = `sims\\${h}\\`,
        Jn("uselocalsims")) {
            const x = "..\\..\\";
            n = n.replace(o, x),
            o = x
        }
        return {
            simEngineDir: o,
            simUrl: n
        }
    }
    static decodeSimResponse(n) {
        let o = Zn.decompress(n);
        return o = o.replace("ad=", "actualDetails="),
        o = o.replace("de=", "details="),
        o = o.replace("at=", "answerType="),
        o = o.replace("<a ", "<answer "),
        o = o.replace("</f>", "</feedback>"),
        o = o.replace("<f>", "<feedback>"),
        o = o.replace("pf=", "proficiencyFactorsMask="),
        o = o.replace("px=", "proficiencyScore="),
        o = o.replace("pr=", "proficient="),
        o = o.replace("ts=", "taskSet="),
        o = o.replace("rs=", "reportShown="),
        o = o.replace("dt=", "data="),
        o = o.replace("tm=", "time="),
        o = o.replace("ps=", "possibleScore="),
        o = o.replace("as=", "actualScore="),
        o = o.replace("</x>", "</results></viewerResponse>"),
        o = o.replace("<x ", '<?xml version="1.0" encoding="utf-8" ?><viewerResponse version="1.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><results credit='),
        o.startsWith("%") && (o = decodeURI(o.replace("+", "%2B"))),
        ft.parseViewerResponseString(o)
    }
    static buildAnswerDetails(n, o, u, h, p) {
        let x = 0;
        for (let S = 0, b = n.length; S < b; S++) {
            const A = n[S];
            if (h || A instanceof ve) {
                const L = ft.getSubTitle(A);
                (!gt.isNullOrEmpty(L) || u) && (p != null && (p.details += `\r
` + (o.length > x ? o[x] : "-") + L),
                x++)
            }
        }
    }
    static buildSimResponseFromDetails(n, o, u) {
        const h = {
            actualScore: void 0,
            answers: [],
            credit: void 0,
            data: void 0,
            possibleScore: void 0,
            proficiencyFactorsMask: void 0,
            proficiencyScore: void 0,
            proficient: void 0,
            reportShown: void 0,
            taskSet: void 0,
            timeInSeconds: void 0
        }
          , p = function(x, S) {
            let b = null
              , A = tr.PerformTask;
            return x.Positive ? x.Unnecessary && (A = tr.UnnecessaryTask) : A = tr.DoNotPerformTask,
            x.Unnecessary ? S === "0" && (b = {
                id: Gn,
                actualScore: 0,
                possibleScore: 0,
                credit: Et.Pass,
                answerType: A
            }) : (x.Positive || S === "0") && (b = {
                id: Gn,
                actualScore: S === "1" ? 1 : 0,
                possibleScore: 1,
                credit: S === "1" ? Et.Pass : Et.Fail,
                answerType: A
            },
            S === "!" && (b.credit = Et.PassWithHelp),
            b.credit === Et.Pass && (h.actualScore += 1),
            h.possibleScore += 1),
            b != null && (b.id = h.answers.length.toString(),
            b.details = x.Description,
            b.actualDetails = ""),
            b
        };
        if (o) {
            const x = o.split("#");
            x.length === 2 && (h.taskSet = parseInt(x[0], 10),
            o = x[1]);
            const S = n.Tasks;
            n.filterTasksByTaskSet(h.taskSet || 0);
            const b = n.Tasks;
            n.Tasks = S;
            let A = 0;
            h.actualScore = 0,
            h.possibleScore = 0;
            for (let L = 0, $ = b.length; L < $; L++) {
                const M = b[L]
                  , R = p(M, o[A]);
                A++;
                const K = [];
                ft.buildTaskItems(M.TaskItems, K);
                let O = 0
                  , v = "";
                for (; A + O < o.length && !o[A + O].match(/\d/); )
                    v += o[A + O],
                    O++;
                const tt = ft.findEvalMethod(M, O);
                tt === ne.TopItemsWithoutGroups ? ft.buildAnswerDetails(M.TaskItems, v, u, !1, R) : tt === ne.TopItems ? ft.buildAnswerDetails(M.TaskItems, v, u, !0, R) : tt === ne.AllWithoutGroups ? ft.buildAnswerDetails(K, v, u, !1, R) : ft.buildAnswerDetails(K, v, u, !0, R),
                A += O,
                R != null && h.answers.push(R)
            }
        }
        return h.credit = h.actualScore >= h.possibleScore ? Et.Pass : Et.Fail,
        h
    }
    static parseViewerResponseString(n) {
        if (n.indexOf("<") === 0) {
            const o = new DOMParser().parseFromString(n, "text/xml")
              , u = Re.select("//results", o)[0];
            return {
                credit: u.getAttribute("credit").match(/pass/i) ? Et.Pass : Et.Fail,
                actualScore: parseInt(u.getAttribute("actualScore"), 10),
                possibleScore: parseInt(u.getAttribute("possibleScore"), 10),
                timeInSeconds: parseFloat(u.getAttribute("time")),
                data: u.getAttribute("data"),
                reportShown: gt.stringToBool(u.getAttribute("reportShown")),
                taskSet: parseInt(u.getAttribute("taskSet"), 10),
                proficient: gt.stringToBool(u.getAttribute("proficient")),
                proficiencyScore: parseInt(u.getAttribute("proficiencyScore"), 10),
                proficiencyFactorsMask: parseInt(u.getAttribute("proficiencyFactorsMask"), 10),
                answers: Re.select("//answer", o).map(h => {
                    const p = h.getAttribute("credit")
                      , x = isNaN(Number(p)) ? p.toLowerCase() === "pass" ? Et.Pass : Et.Fail : parseInt(p, 10)
                      , S = h.getAttribute("answerType");
                    return {
                        id: h.getAttribute("id"),
                        actualScore: parseInt(h.getAttribute("actualScore"), 10),
                        possibleScore: parseInt(h.getAttribute("possibleScore"), 10),
                        credit: x,
                        answerType: tr[S],
                        details: h.getAttribute("details"),
                        actualDetails: h.getAttribute("actualDetails"),
                        data: h.getAttribute("data"),
                        subTasks: h.getAttribute("subTasks")
                    }
                }
                )
            }
        } else {
            n = decodeURIComponent(n);
            const o = n.split("¯")
              , u = parseFloat(o[0])
              , h = parseFloat(o[1]);
            return {
                data: n,
                credit: u === h ? Et.Pass : Et.Fail,
                actualScore: u,
                possibleScore: h,
                timeInSeconds: parseFloat(o[2]),
                reportShown: !0,
                taskSet: -1,
                proficient: u === h,
                proficiencyScore: u,
                proficiencyFactorsMask: 0,
                answers: null
            }
        }
    }
    static parseResponseStringFromLabSim(n, o) {
        var b;
        if (gt.isNullOrEmpty(n))
            return {
                answerParts: 0,
                otherResponse: "",
                points: 0,
                taskMask: "",
                tasksCompleted: void 0,
                tasksPossible: void 0,
                timeSpent: 0,
                version: null
            };
        const u = (n || "").split("¯")
          , h = o || (u.length > 3 ? 1 : 0)
          , p = h === 0
          , x = n ? p ? parseFloat(u[0]) : Number(u[0]) / Number(u[1]) : 0
          , S = ((b = u[p ? 1 : 3]) == null ? void 0 : b.replace(/[^10]/g, "")) ?? "";
        return {
            answerParts: u.length,
            version: h,
            points: x,
            tasksCompleted: p ? (S.match(/1/g) || []).length : parseInt(u[0]),
            tasksPossible: p ? S.length : parseInt(u[1]),
            timeSpent: parseFloat(u[2]),
            taskMask: S,
            otherResponse: p ? null : u[4]
        }
    }
    static buildTaskItems(n, o) {
        n.forEach(u => {
            o.push(u),
            u instanceof He && ft.buildTaskItems(u.TaskItems, o)
        }
        )
    }
    static getSubTitle(n) {
        return n.SubTitle ? n.SubTitle.trim() : ""
    }
    static findEvalMethod(n, o) {
        let u = 0;
        if (n.TaskItems.length === o)
            return ne.TopItems;
        if (n.TaskItems.forEach(p => {
            const x = ft.getSubTitle(p);
            p instanceof ve && x != null && x.length > 0 && u++
        }
        ),
        u === o)
            return ne.TopItemsWithoutGroups;
        const h = [];
        return ft.buildTaskItems(n.TaskItems, h),
        u = 0,
        n.TaskItems.forEach(p => {
            p instanceof ve && u++
        }
        ),
        u === o ? ne.AllWithoutGroups : ne.AllItems
    }
    static extractResponseDetails(n, o, u) {
        if (u.answers == null)
            return u.data;
        const h = function(A) {
            let L = ""
              , $ = 0;
            const M = [];
            for (ft.buildTaskItems(A.TaskItems, M); $ < M.length; ) {
                const R = ft.getSubTitle(M[$]);
                gt.isNullOrEmpty(R) ? n && (L += "*") : L += "+",
                $++
            }
            return L
        }
          , p = function(A, L, $, M) {
            const R = L.split("");
            let K = 0
              , O = 0
              , v = "";
            for (; O < A.length; ) {
                if (M || A[O]instanceof ve) {
                    const tt = ft.getSubTitle(A[O]);
                    gt.isNullOrEmpty(tt) ? $ && (v += "¿") : (v += R[K],
                    K++)
                }
                O++
            }
            return v
        }
          , x = o.Tasks;
        o.filterTasksByTaskSet(u.taskSet);
        const S = o.Tasks;
        o.Tasks = x;
        let b = u.taskSet > 0 ? u.taskSet + "#" : "";
        if (S.length > 0) {
            let A = 0;
            for (let L = 0, $ = u.answers.length; L < $; L++) {
                const M = u.answers[L];
                let R = S[A];
                if (!gt.isNullOrEmpty(M.details))
                    for (; A < S.length && !M.details.startsWith(R.Description); )
                        b += "1" + h(S[A]),
                        A++,
                        R = S[A];
                if (R == null)
                    continue;
                if (R.Unnecessary)
                    b += M.credit === Et.Pass || M.credit === Et.PassWithHelp ? "0" : "1";
                else
                    switch (M.credit) {
                    case Et.Pass:
                        b += "1";
                        break;
                    case Et.PassWithHelp:
                        b += "!";
                        break;
                    default:
                        b += "0";
                        break
                    }
                const K = [];
                if (ft.buildTaskItems(R.TaskItems, K),
                K.length > 0)
                    if (M.details.length === 0 && M.subTasks && M.subTasks.length > 0) {
                        const O = ft.findEvalMethod(R, M.subTasks.length);
                        O === ne.TopItemsWithoutGroups ? b += p(R.TaskItems, M.subTasks, n, !1) : O === ne.TopItems ? b += p(R.TaskItems, M.subTasks, n, !0) : O === ne.AllWithoutGroups ? b += p(K, M.subTasks, n, !1) : b += p(K, M.subTasks, n, !0)
                    } else {
                        let O = 0;
                        const v = M.details.replace("|", "").split(`\r
`);
                        let tt = !0;
                        for (let Rt = 0, rt = v.length; Rt < rt; Rt++) {
                            const At = v[Rt];
                            if (tt) {
                                tt = !1;
                                continue
                            }
                            const St = At.substr(1).trim();
                            let j = ft.getSubTitle(K[O]);
                            for (; St !== j; )
                                gt.isNullOrEmpty(j) ? n && (b += "*") : b += "+",
                                O++,
                                j = ft.getSubTitle(K[O]);
                            b += At[0],
                            O++
                        }
                        for (; O < K.length; ) {
                            const Rt = ft.getSubTitle(K[O]);
                            gt.isNullOrEmpty(Rt) ? n && (b += "¿") : b += "?",
                            O++
                        }
                    }
                A++
            }
            for (; A < S.length; )
                b += "1" + h(o.Tasks[A]),
                A++
        }
        return b.length > 0 ? b : null
    }
}
export {sr as A, Ie as C, bu as D, cu as I, wu as M, zr as O, lu as P, ir as R, Qn as S, Su as T, ke as Y, xu as a, iu as b, vu as c, yu as d, uu as e, ft as f, Et as g, ss as h, Xr as i, lt as j, gu as k, se as l, J as m, ye as n, vr as o, jr as p, Jr as q, Qt as r, tr as s, er as t, au as u, _u as v, mu as w, Re as x, Eu as y, Ha as z};
