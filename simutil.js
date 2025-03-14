/*MODIFIED*/

import {bq as ko, r as Nt, d as Vn, b9 as Co, Q as jn, t as ue, aR as Mn, aE as Ro, L as dt, aJ as De, D as Io, a3 as gt, aZ as ze, f as sr, am as Vr, x as Gn, I as be, T as Br, e as Pn, v as Fo, j as jr, aU as Mo, aF as Ln, h as Yn, b as Ur, E as Bn} from "https://labsimapp.testout.com/v6_0_671/assets/authenticationservice-CjhoRfgB.js";
import {C as $n} from "https://labsimapp.testout.com/v6_0_671/assets/compressedstrings-f-RzZfLK.js";
function Ko(d) {
    let s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return function(u) {
        function f(y) {
            let {forwardedRef: _, ...b} = y;
            const [A,Y,q] = Vn(d, {
                ...b,
                keyPrefix: s.keyPrefix
            })
              , P = {
                ...b,
                t: A,
                i18n: Y,
                tReady: q
            };
            return s.withRef && _ ? P.ref = _ : !s.withRef && _ && (P.forwardedRef = _),
            Nt.createElement(u, P)
        }
        f.displayName = `withI18nextTranslation(${ko(u)})`,
        f.WrappedComponent = u;
        const p = (y, _) => Nt.createElement(f, Object.assign({}, y, {
            forwardedRef: _
        }));
        return s.withRef ? Nt.forwardRef(p) : f
    }
}
const yr = class yr {
    getHttpOrHttps() {
        let s = "http://";
        return window.location.toString().match(/^https:/i) && (s = "https://"),
        s
    }
    get WindowsLiveContentUrl() {
        return this.getHttpOrHttps() + "testoutlivecontent.blob.core.windows.net"
    }
    get StageContentUrl() {
        return this.getHttpOrHttps() + "testoutstagecontent.blob.core.windows.net"
    }
    get CdnContentUrl() {
        return Co
    }
    getContentServerUri(s) {
        const a = this.getHttpOrHttps();
        let u = window.location.toString().toLowerCase();
        return u.indexOf("?") >= 0 && (u = u.substring(0, u.indexOf("?"))),
        jn("uselocalsims") ? (u = u.substring(0, u.indexOf("/startlabsim")),
        u + "/content") : ue.uselivecontent === "true" || ue.content === "live" ? s != null && s.liveContainer ? `${this.WindowsLiveContentUrl}/${s.liveContainer}` : this.WindowsLiveContentUrl : ue.usedev5content === "true" || ue.content === "newdevtest5" ? a + "newdevtest5" : ue.usedevcontent === "true" || ue.content === "newdevtest" ? a + "newdevtest" : ue.usestagecontent === "true" || ue.content === "stage" ? s != null && s.stagingContainer ? `${this.WindowsLiveContentUrl}/${s.stagingContainer}` : this.StageContentUrl : u.indexOf("devtest5") > -1 ? a + "newdevtest5" : u.indexOf("devtest") > -1 ? a + "newdevtest" : u.indexOf("stage") > -1 ? this.StageContentUrl : u.indexOf("localhost") > -1 ? this.WindowsLiveContentUrl : s != null && s.liveContainer ? `${this.CdnContentUrl}/${s.liveContainer}` : this.CdnContentUrl
    }
    get DeploymentType() {
        return ue.usestagecontent === "true" || ue.content === "stage" ? Mn.Stage : Mn.Live
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
    getVersionTextFromProduct(s) {
        return s.majorVersion.toString() + s.minorVersion.toString() + s.patchVersion.toString()
    }
    getVersionTextFromCertification(s, a) {
        return s.majorVersion.toString() + a.patchVersion.toString()
    }
}
;
yr.Current = new yr;
let rr = yr;
var ke = {};
(function(d) {
    var s = d;
    (function(a) {
        function u(t) {
            var i = Array.prototype.slice
              , c = t.length
              , m = function(x, k) {
                return function() {
                    return k.apply(this, x.concat(i.call(arguments)))
                }
            }
              , h = function() {
                var x = i.call(arguments);
                return x.length < c ? m(x, h) : t.apply(this, i.apply(arguments, [0, c]))
            };
            return h
        }
        var f = u(function(t, i) {
            for (var c = 0; c < i.length; c += 1)
                t(i[c], c, i)
        })
          , p = u(function(t, i, c) {
            var m = i;
            return f(function(h, x) {
                m = t(m, h, x)
            }, c),
            m
        })
          , y = u(function(t, i) {
            var c = new Array(i.length);
            return f(function(m, h) {
                c[h] = t(m)
            }, i),
            c
        })
          , _ = u(function(t, i) {
            var c = [];
            return f(function(m, h) {
                t(m, h) && c.push(m)
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
                return p(function(m, h) {
                    return h(m)
                }, i.apply(null, arguments), c)
            }
        }
        var A = u(function(t, i) {
            for (var c = 0; c < t.length; c += 1)
                if (t[c] === i)
                    return !0;
            return !1
        });
        function Y(t) {
            return function() {
                return t
            }
        }
        var q = u(function(t, i) {
            return i[t]
        });
        function P(t) {
            return t.toString()
        }
        var M = u(function(t, i) {
            return i.join(t)
        })
          , tt = u(function(t, i, c) {
            return t + c + i
        });
        function O(t) {
            for (var i = Object(t), c = 1; c < arguments.length; c++) {
                var m = arguments[c];
                if (m != null)
                    for (var h in m)
                        Object.prototype.hasOwnProperty.call(m, h) && (i[h] = m[h])
            }
            return i
        }
        w.prototype = new Object,
        w.prototype.constructor = w,
        w.superclass = Object.prototype;
        function w() {
            this.init()
        }
        w.prototype.init = function() {
            this.reduceActions = [],
            this.reduceActions[3] = function(t) {
                return new Ht(t[0],t[2])
            }
            ,
            this.reduceActions[5] = function(t) {
                return new yt(t[0],t[2])
            }
            ,
            this.reduceActions[7] = function(t) {
                return new Vt(t[0],t[2])
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
                return new wt(t[0],t[2])
            }
            ,
            this.reduceActions[12] = function(t) {
                return new Qt(t[0],t[2])
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
                return new Xt(t[0],t[2])
            }
            ,
            this.reduceActions[18] = function(t) {
                return new Jt(t[0],t[2])
            }
            ,
            this.reduceActions[19] = function(t) {
                return new vt(t[0],t[2])
            }
            ,
            this.reduceActions[20] = function(t) {
                return new Yt(t[0],t[2])
            }
            ,
            this.reduceActions[22] = function(t) {
                return new _t(t[1])
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
                t[0].locationPath.steps.unshift(new N(N.DESCENDANTORSELF,C.nodeTest,[])),
                t[0]
            }
            ,
            this.reduceActions[29] = function(t) {
                return new X(t[0],[],void 0)
            }
            ,
            this.reduceActions[30] = function(t) {
                return I.instance_of(t[0], X) ? (t[0].filterPredicates == null && (t[0].filterPredicates = []),
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
                return new H(t[0])
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
                return t[0] == "comment" ? C.commentTest : t[0] == "text" ? C.textTest : t[0] == "processing-instruction" ? C.anyPiTest : t[0] == "node" ? C.nodeTest : new C(-1,void 0)
            }
            ,
            this.reduceActions[60] = function(t) {
                return new C.PITest(t[2])
            }
            ,
            this.reduceActions[61] = function(t) {
                return t[1]
            }
            ,
            this.reduceActions[63] = function(t) {
                return t[1].absolute = !0,
                t[1].steps.unshift(new N(N.DESCENDANTORSELF,C.nodeTest,[])),
                t[1]
            }
            ,
            this.reduceActions[64] = function(t) {
                return t[0].steps.push(new N(N.DESCENDANTORSELF,C.nodeTest,[])),
                t[0].steps.push(t[2]),
                t[0]
            }
            ,
            this.reduceActions[65] = function(t) {
                return new N(N.SELF,C.nodeTest,[])
            }
            ,
            this.reduceActions[66] = function(t) {
                return new N(N.PARENT,C.nodeTest,[])
            }
            ,
            this.reduceActions[67] = function(t) {
                return new Bt(t[1])
            }
            ,
            this.reduceActions[68] = function(t) {
                return C.nameTestAny
            }
            ,
            this.reduceActions[69] = function(t) {
                return new C.NameTestPrefixAny(t[0].split(":")[0])
            }
            ,
            this.reduceActions[70] = function(t) {
                return new C.NameTestQName(t[0])
            }
        }
        ,
        w.actionTable = [" s s        sssssssss    s ss  s  ss", "                 s                  ", "r  rrrrrrrrr         rrrrrrr rr  r  ", "                rrrrr               ", " s s        sssssssss    s ss  s  ss", "rs  rrrrrrrr s  sssssrrrrrr  rrs rs ", " s s        sssssssss    s ss  s  ss", "                            s       ", "                            s       ", "r  rrrrrrrrr         rrrrrrr rr rr  ", "r  rrrrrrrrr         rrrrrrr rr rr  ", "r  rrrrrrrrr         rrrrrrr rr rr  ", "r  rrrrrrrrr         rrrrrrr rr rr  ", "r  rrrrrrrrr         rrrrrrr rr rr  ", "  s                                 ", "                            s       ", " s           s  sssss          s  s ", "r  rrrrrrrrr         rrrrrrr rr  r  ", "a                                   ", "r       s                    rr  r  ", "r      sr                    rr  r  ", "r   s  rr            s       rr  r  ", "r   rssrr            rss     rr  r  ", "r   rrrrr            rrrss   rr  r  ", "r   rrrrrsss         rrrrr   rr  r  ", "r   rrrrrrrr         rrrrr   rr  r  ", "r   rrrrrrrr         rrrrrs  rr  r  ", "r   rrrrrrrr         rrrrrr  rr  r  ", "r   rrrrrrrr         rrrrrr  rr  r  ", "r  srrrrrrrr         rrrrrrs rr sr  ", "r  srrrrrrrr         rrrrrrs rr  r  ", "r  rrrrrrrrr         rrrrrrr rr rr  ", "r  rrrrrrrrr         rrrrrrr rr rr  ", "r  rrrrrrrrr         rrrrrrr rr rr  ", "r   rrrrrrrr         rrrrrr  rr  r  ", "r   rrrrrrrr         rrrrrr  rr  r  ", "r  rrrrrrrrr         rrrrrrr rr  r  ", "r  rrrrrrrrr         rrrrrrr rr  r  ", "                sssss               ", "r  rrrrrrrrr         rrrrrrr rr sr  ", "r  rrrrrrrrr         rrrrrrr rr  r  ", "r  rrrrrrrrr         rrrrrrr rr rr  ", "r  rrrrrrrrr         rrrrrrr rr rr  ", "                             s      ", "r  srrrrrrrr         rrrrrrs rr  r  ", "r   rrrrrrrr         rrrrr   rr  r  ", "              s                     ", "                             s      ", "                rrrrr               ", " s s        sssssssss    s sss s  ss", "r  srrrrrrrr         rrrrrrs rr  r  ", " s s        sssssssss    s ss  s  ss", " s s        sssssssss    s ss  s  ss", " s s        sssssssss    s ss  s  ss", " s s        sssssssss    s ss  s  ss", " s s        sssssssss    s ss  s  ss", " s s        sssssssss    s ss  s  ss", " s s        sssssssss    s ss  s  ss", " s s        sssssssss    s ss  s  ss", " s s        sssssssss    s ss  s  ss", " s s        sssssssss    s ss  s  ss", " s s        sssssssss    s ss  s  ss", " s s        sssssssss    s ss  s  ss", " s s        sssssssss    s ss  s  ss", " s s        sssssssss      ss  s  ss", " s s        sssssssss    s ss  s  ss", " s           s  sssss          s  s ", " s           s  sssss          s  s ", "r  rrrrrrrrr         rrrrrrr rr rr  ", " s           s  sssss          s  s ", " s           s  sssss          s  s ", "r  rrrrrrrrr         rrrrrrr rr sr  ", "r  rrrrrrrrr         rrrrrrr rr sr  ", "r  rrrrrrrrr         rrrrrrr rr  r  ", "r  rrrrrrrrr         rrrrrrr rr rr  ", "                             s      ", "r  rrrrrrrrr         rrrrrrr rr rr  ", "r  rrrrrrrrr         rrrrrrr rr rr  ", "                             rr     ", "                             s      ", "                             rs     ", "r      sr                    rr  r  ", "r   s  rr            s       rr  r  ", "r   rssrr            rss     rr  r  ", "r   rssrr            rss     rr  r  ", "r   rrrrr            rrrss   rr  r  ", "r   rrrrr            rrrss   rr  r  ", "r   rrrrr            rrrss   rr  r  ", "r   rrrrr            rrrss   rr  r  ", "r   rrrrrsss         rrrrr   rr  r  ", "r   rrrrrsss         rrrrr   rr  r  ", "r   rrrrrrrr         rrrrr   rr  r  ", "r   rrrrrrrr         rrrrr   rr  r  ", "r   rrrrrrrr         rrrrr   rr  r  ", "r   rrrrrrrr         rrrrrr  rr  r  ", "                                 r  ", "                                 s  ", "r  srrrrrrrr         rrrrrrs rr  r  ", "r  srrrrrrrr         rrrrrrs rr  r  ", "r  rrrrrrrrr         rrrrrrr rr  r  ", "r  rrrrrrrrr         rrrrrrr rr  r  ", "r  rrrrrrrrr         rrrrrrr rr  r  ", "r  rrrrrrrrr         rrrrrrr rr  r  ", "r  rrrrrrrrr         rrrrrrr rr rr  ", "r  rrrrrrrrr         rrrrrrr rr rr  ", " s s        sssssssss    s ss  s  ss", "r  rrrrrrrrr         rrrrrrr rr rr  ", "                             r      "],
        w.actionTableNumber = [` 1 0        /.-,+*)('    & %$  #  "!`, "                 J                  ", "a  aaaaaaaaa         aaaaaaa aa  a  ", "                YYYYY               ", ` 1 0        /.-,+*)('    & %$  #  "!`, `K1  KKKKKKKK .  +*)('KKKKKK  KK# K" `, ` 1 0        /.-,+*)('    & %$  #  "!`, "                            N       ", "                            O       ", "e  eeeeeeeee         eeeeeee ee ee  ", "f  fffffffff         fffffff ff ff  ", "d  ddddddddd         ddddddd dd dd  ", "B  BBBBBBBBB         BBBBBBB BB BB  ", "A  AAAAAAAAA         AAAAAAA AA AA  ", "  P                                 ", "                            Q       ", ` 1           .  +*)('          #  " `, "b  bbbbbbbbb         bbbbbbb bb  b  ", "                                    ", "!       S                    !!  !  ", '"      T"                    ""  "  ', "$   V  $$            U       $$  $  ", "&   &ZY&&            &XW     &&  &  ", ")   )))))            )))\\[   ))  )  ", ".   ....._^]         .....   ..  .  ", "1   11111111         11111   11  1  ", "5   55555555         55555`  55  5  ", "7   77777777         777777  77  7  ", "9   99999999         999999  99  9  ", ":  c::::::::         ::::::b :: a:  ", "I  fIIIIIIII         IIIIIIe II  I  ", "=  =========         ======= == ==  ", "?  ?????????         ??????? ?? ??  ", "C  CCCCCCCCC         CCCCCCC CC CC  ", "J   JJJJJJJJ         JJJJJJ  JJ  J  ", "M   MMMMMMMM         MMMMMM  MM  M  ", "N  NNNNNNNNN         NNNNNNN NN  N  ", "P  PPPPPPPPP         PPPPPPP PP  P  ", "                +*)('               ", "R  RRRRRRRRR         RRRRRRR RR aR  ", "U  UUUUUUUUU         UUUUUUU UU  U  ", "Z  ZZZZZZZZZ         ZZZZZZZ ZZ ZZ  ", "c  ccccccccc         ccccccc cc cc  ", "                             j      ", "L  fLLLLLLLL         LLLLLLe LL  L  ", "6   66666666         66666   66  6  ", "              k                     ", "                             l      ", "                XXXXX               ", ` 1 0        /.-,+*)('    & %$m #  "!`, "_  f________         ______e __  _  ", ` 1 0        /.-,+*)('    & %$  #  "!`, ` 1 0        /.-,+*)('    & %$  #  "!`, ` 1 0        /.-,+*)('    & %$  #  "!`, ` 1 0        /.-,+*)('    & %$  #  "!`, ` 1 0        /.-,+*)('    & %$  #  "!`, ` 1 0        /.-,+*)('    & %$  #  "!`, ` 1 0        /.-,+*)('    & %$  #  "!`, ` 1 0        /.-,+*)('    & %$  #  "!`, ` 1 0        /.-,+*)('    & %$  #  "!`, ` 1 0        /.-,+*)('    & %$  #  "!`, ` 1 0        /.-,+*)('    & %$  #  "!`, ` 1 0        /.-,+*)('    & %$  #  "!`, ` 1 0        /.-,+*)('    & %$  #  "!`, ` 1 0        /.-,+*)('      %$  #  "!`, ` 1 0        /.-,+*)('    & %$  #  "!`, ` 1           .  +*)('          #  " `, ` 1           .  +*)('          #  " `, ">  >>>>>>>>>         >>>>>>> >> >>  ", ` 1           .  +*)('          #  " `, ` 1           .  +*)('          #  " `, "Q  QQQQQQQQQ         QQQQQQQ QQ aQ  ", "V  VVVVVVVVV         VVVVVVV VV aV  ", "T  TTTTTTTTT         TTTTTTT TT  T  ", "@  @@@@@@@@@         @@@@@@@ @@ @@  ", "                                   ", "[  [[[[[[[[[         [[[[[[[ [[ [[  ", "D  DDDDDDDDD         DDDDDDD DD DD  ", "                             HH     ", "                                   ", "                             F     ", "#      T#                    ##  #  ", "%   V  %%            U       %%  %  ", "'   'ZY''            'XW     ''  '  ", "(   (ZY((            (XW     ((  (  ", "+   +++++            +++\\[   ++  +  ", "*   *****            ***\\[   **  *  ", "-   -----            ---\\[   --  -  ", ",   ,,,,,            ,,,\\[   ,,  ,  ", "0   00000_^]         00000   00  0  ", "/   /////_^]         /////   //  /  ", "2   22222222         22222   22  2  ", "3   33333333         33333   33  3  ", "4   44444444         44444   44  4  ", "8   88888888         888888  88  8  ", "                                 ^  ", "                                   ", ";  f;;;;;;;;         ;;;;;;e ;;  ;  ", "<  f<<<<<<<<         <<<<<<e <<  <  ", "O  OOOOOOOOO         OOOOOOO OO  O  ", "`  `````````         ``````` ``  `  ", "S  SSSSSSSSS         SSSSSSS SS  S  ", "W  WWWWWWWWW         WWWWWWW WW  W  ", "\\  \\\\\\\\\\\\\\\\\\         \\\\\\\\\\\\\\ \\\\ \\\\  ", "E  EEEEEEEEE         EEEEEEE EE EE  ", ` 1 0        /.-,+*)('    & %$  #  "!`, "]  ]]]]]]]]]         ]]]]]]] ]] ]]  ", "                             G      "],
        w.gotoTable = ["3456789:;<=>?@ AB  CDEFGH IJ ", "                             ", "                             ", "                             ", "L456789:;<=>?@ AB  CDEFGH IJ ", "            M        EFGH IJ ", "       N;<=>?@ AB  CDEFGH IJ ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "            S        EFGH IJ ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "              e              ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                        h  J ", "              i          j   ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "o456789:;<=>?@ ABpqCDEFGH IJ ", "                             ", "  r6789:;<=>?@ AB  CDEFGH IJ ", "   s789:;<=>?@ AB  CDEFGH IJ ", "    t89:;<=>?@ AB  CDEFGH IJ ", "    u89:;<=>?@ AB  CDEFGH IJ ", "     v9:;<=>?@ AB  CDEFGH IJ ", "     w9:;<=>?@ AB  CDEFGH IJ ", "     x9:;<=>?@ AB  CDEFGH IJ ", "     y9:;<=>?@ AB  CDEFGH IJ ", "      z:;<=>?@ AB  CDEFGH IJ ", "      {:;<=>?@ AB  CDEFGH IJ ", "       |;<=>?@ AB  CDEFGH IJ ", "       };<=>?@ AB  CDEFGH IJ ", "       ~;<=>?@ AB  CDEFGH IJ ", "         =>?@ AB  CDEFGH IJ ", "456789:;<=>?@ AB  CDEFGH IJ", "                    EFGH IJ ", "                    EFGH IJ ", "                             ", "                      GH IJ ", "                      GH IJ ", "              i             ", "              i             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "                             ", "o456789:;<=>?@ ABqCDEFGH IJ ", "                             ", "                             "],
        w.productions = [[1, 1, 2], [2, 1, 3], [3, 1, 4], [3, 3, 3, -9, 4], [4, 1, 5], [4, 3, 4, -8, 5], [5, 1, 6], [5, 3, 5, -22, 6], [5, 3, 5, -5, 6], [6, 1, 7], [6, 3, 6, -23, 7], [6, 3, 6, -24, 7], [6, 3, 6, -6, 7], [6, 3, 6, -7, 7], [7, 1, 8], [7, 3, 7, -25, 8], [7, 3, 7, -26, 8], [8, 1, 9], [8, 3, 8, -12, 9], [8, 3, 8, -11, 9], [8, 3, 8, -10, 9], [9, 1, 10], [9, 2, -26, 9], [10, 1, 11], [10, 3, 10, -27, 11], [11, 1, 12], [11, 1, 13], [11, 3, 13, -28, 14], [11, 3, 13, -4, 14], [13, 1, 15], [13, 2, 13, 16], [15, 1, 17], [15, 3, -29, 2, -30], [15, 1, -15], [15, 1, -16], [15, 1, 18], [18, 3, -13, -29, -30], [18, 4, -13, -29, 19, -30], [19, 1, 20], [19, 3, 20, -31, 19], [20, 1, 2], [12, 1, 14], [12, 1, 21], [21, 1, -28], [21, 2, -28, 14], [21, 1, 22], [14, 1, 23], [14, 3, 14, -28, 23], [14, 1, 24], [23, 2, 25, 26], [23, 1, 26], [23, 3, 25, 26, 27], [23, 2, 26, 27], [23, 1, 28], [27, 1, 16], [27, 2, 16, 27], [25, 2, -14, -3], [25, 1, -32], [26, 1, 29], [26, 3, -20, -29, -30], [26, 4, -21, -29, -15, -30], [16, 3, -33, 30, -34], [30, 1, 2], [22, 2, -4, 14], [24, 3, 14, -4, 23], [28, 1, -35], [28, 1, -2], [17, 2, -36, -18], [29, 1, -17], [29, 1, -19], [29, 1, -18]],
        w.DOUBLEDOT = 2,
        w.DOUBLECOLON = 3,
        w.DOUBLESLASH = 4,
        w.NOTEQUAL = 5,
        w.LESSTHANOREQUAL = 6,
        w.GREATERTHANOREQUAL = 7,
        w.AND = 8,
        w.OR = 9,
        w.MOD = 10,
        w.DIV = 11,
        w.MULTIPLYOPERATOR = 12,
        w.FUNCTIONNAME = 13,
        w.AXISNAME = 14,
        w.LITERAL = 15,
        w.NUMBER = 16,
        w.ASTERISKNAMETEST = 17,
        w.QNAME = 18,
        w.NCNAMECOLONASTERISK = 19,
        w.NODETYPE = 20,
        w.PROCESSINGINSTRUCTIONWITHLITERAL = 21,
        w.EQUALS = 22,
        w.LESSTHAN = 23,
        w.GREATERTHAN = 24,
        w.PLUS = 25,
        w.MINUS = 26,
        w.BAR = 27,
        w.SLASH = 28,
        w.LEFTPARENTHESIS = 29,
        w.RIGHTPARENTHESIS = 30,
        w.COMMA = 31,
        w.AT = 32,
        w.LEFTBRACKET = 33,
        w.RIGHTBRACKET = 34,
        w.DOT = 35,
        w.DOLLAR = 36,
        w.prototype.tokenize = function(t) {
            for (var i = [], c = [], m = t + "\0", h = 0, x = m.charAt(h++); ; ) {
                for (; x == " " || x == "	" || x == "\r" || x == `
`; )
                    x = m.charAt(h++);
                if (x == "\0" || h >= m.length)
                    break;
                if (x == "(") {
                    i.push(w.LEFTPARENTHESIS),
                    c.push(x),
                    x = m.charAt(h++);
                    continue
                }
                if (x == ")") {
                    i.push(w.RIGHTPARENTHESIS),
                    c.push(x),
                    x = m.charAt(h++);
                    continue
                }
                if (x == "[") {
                    i.push(w.LEFTBRACKET),
                    c.push(x),
                    x = m.charAt(h++);
                    continue
                }
                if (x == "]") {
                    i.push(w.RIGHTBRACKET),
                    c.push(x),
                    x = m.charAt(h++);
                    continue
                }
                if (x == "@") {
                    i.push(w.AT),
                    c.push(x),
                    x = m.charAt(h++);
                    continue
                }
                if (x == ",") {
                    i.push(w.COMMA),
                    c.push(x),
                    x = m.charAt(h++);
                    continue
                }
                if (x == "|") {
                    i.push(w.BAR),
                    c.push(x),
                    x = m.charAt(h++);
                    continue
                }
                if (x == "+") {
                    i.push(w.PLUS),
                    c.push(x),
                    x = m.charAt(h++);
                    continue
                }
                if (x == "-") {
                    i.push(w.MINUS),
                    c.push(x),
                    x = m.charAt(h++);
                    continue
                }
                if (x == "=") {
                    i.push(w.EQUALS),
                    c.push(x),
                    x = m.charAt(h++);
                    continue
                }
                if (x == "$") {
                    i.push(w.DOLLAR),
                    c.push(x),
                    x = m.charAt(h++);
                    continue
                }
                if (x == ".") {
                    if (x = m.charAt(h++),
                    x == ".") {
                        i.push(w.DOUBLEDOT),
                        c.push(".."),
                        x = m.charAt(h++);
                        continue
                    }
                    if (x >= "0" && x <= "9") {
                        var k = "." + x;
                        for (x = m.charAt(h++); x >= "0" && x <= "9"; )
                            k += x,
                            x = m.charAt(h++);
                        i.push(w.NUMBER),
                        c.push(k);
                        continue
                    }
                    i.push(w.DOT),
                    c.push(".");
                    continue
                }
                if (x == "'" || x == '"') {
                    for (var Q = x, nt = ""; h < m.length && (x = m.charAt(h)) !== Q; )
                        nt += x,
                        h += 1;
                    if (x !== Q)
                        throw Wt.fromMessage("Unterminated string literal: " + Q + nt);
                    h += 1,
                    i.push(w.LITERAL),
                    c.push(nt),
                    x = m.charAt(h++);
                    continue
                }
                if (x >= "0" && x <= "9") {
                    var k = x;
                    for (x = m.charAt(h++); x >= "0" && x <= "9"; )
                        k += x,
                        x = m.charAt(h++);
                    if (x == "." && m.charAt(h) >= "0" && m.charAt(h) <= "9")
                        for (k += x,
                        k += m.charAt(h++),
                        x = m.charAt(h++); x >= "0" && x <= "9"; )
                            k += x,
                            x = m.charAt(h++);
                    i.push(w.NUMBER),
                    c.push(k);
                    continue
                }
                if (x == "*") {
                    if (i.length > 0) {
                        var D = i[i.length - 1];
                        if (D != w.AT && D != w.DOUBLECOLON && D != w.LEFTPARENTHESIS && D != w.LEFTBRACKET && D != w.AND && D != w.OR && D != w.MOD && D != w.DIV && D != w.MULTIPLYOPERATOR && D != w.SLASH && D != w.DOUBLESLASH && D != w.BAR && D != w.PLUS && D != w.MINUS && D != w.EQUALS && D != w.NOTEQUAL && D != w.LESSTHAN && D != w.LESSTHANOREQUAL && D != w.GREATERTHAN && D != w.GREATERTHANOREQUAL) {
                            i.push(w.MULTIPLYOPERATOR),
                            c.push(x),
                            x = m.charAt(h++);
                            continue
                        }
                    }
                    i.push(w.ASTERISKNAMETEST),
                    c.push(x),
                    x = m.charAt(h++);
                    continue
                }
                if (x == ":" && m.charAt(h) == ":") {
                    i.push(w.DOUBLECOLON),
                    c.push("::"),
                    h++,
                    x = m.charAt(h++);
                    continue
                }
                if (x == "/") {
                    if (x = m.charAt(h++),
                    x == "/") {
                        i.push(w.DOUBLESLASH),
                        c.push("//"),
                        x = m.charAt(h++);
                        continue
                    }
                    i.push(w.SLASH),
                    c.push("/");
                    continue
                }
                if (x == "!" && m.charAt(h) == "=") {
                    i.push(w.NOTEQUAL),
                    c.push("!="),
                    h++,
                    x = m.charAt(h++);
                    continue
                }
                if (x == "<") {
                    if (m.charAt(h) == "=") {
                        i.push(w.LESSTHANOREQUAL),
                        c.push("<="),
                        h++,
                        x = m.charAt(h++);
                        continue
                    }
                    i.push(w.LESSTHAN),
                    c.push("<"),
                    x = m.charAt(h++);
                    continue
                }
                if (x == ">") {
                    if (m.charAt(h) == "=") {
                        i.push(w.GREATERTHANOREQUAL),
                        c.push(">="),
                        h++,
                        x = m.charAt(h++);
                        continue
                    }
                    i.push(w.GREATERTHAN),
                    c.push(">"),
                    x = m.charAt(h++);
                    continue
                }
                if (x == "_" || I.isLetter(x.charCodeAt(0))) {
                    var G = x;
                    for (x = m.charAt(h++); I.isNCNameChar(x.charCodeAt(0)); )
                        G += x,
                        x = m.charAt(h++);
                    if (i.length > 0) {
                        var D = i[i.length - 1];
                        if (D != w.AT && D != w.DOUBLECOLON && D != w.LEFTPARENTHESIS && D != w.LEFTBRACKET && D != w.AND && D != w.OR && D != w.MOD && D != w.DIV && D != w.MULTIPLYOPERATOR && D != w.SLASH && D != w.DOUBLESLASH && D != w.BAR && D != w.PLUS && D != w.MINUS && D != w.EQUALS && D != w.NOTEQUAL && D != w.LESSTHAN && D != w.LESSTHANOREQUAL && D != w.GREATERTHAN && D != w.GREATERTHANOREQUAL) {
                            if (G == "and") {
                                i.push(w.AND),
                                c.push(G);
                                continue
                            }
                            if (G == "or") {
                                i.push(w.OR),
                                c.push(G);
                                continue
                            }
                            if (G == "mod") {
                                i.push(w.MOD),
                                c.push(G);
                                continue
                            }
                            if (G == "div") {
                                i.push(w.DIV),
                                c.push(G);
                                continue
                            }
                        }
                    }
                    if (x == ":") {
                        if (m.charAt(h) == "*") {
                            i.push(w.NCNAMECOLONASTERISK),
                            c.push(G + ":*"),
                            h++,
                            x = m.charAt(h++);
                            continue
                        }
                        if (m.charAt(h) == "_" || I.isLetter(m.charCodeAt(h))) {
                            for (G += ":",
                            x = m.charAt(h++); I.isNCNameChar(x.charCodeAt(0)); )
                                G += x,
                                x = m.charAt(h++);
                            if (x == "(") {
                                i.push(w.FUNCTIONNAME),
                                c.push(G);
                                continue
                            }
                            i.push(w.QNAME),
                            c.push(G);
                            continue
                        }
                        if (m.charAt(h) == ":") {
                            i.push(w.AXISNAME),
                            c.push(G);
                            continue
                        }
                    }
                    if (x == "(") {
                        if (G == "comment" || G == "text" || G == "node") {
                            i.push(w.NODETYPE),
                            c.push(G);
                            continue
                        }
                        if (G == "processing-instruction") {
                            m.charAt(h) == ")" ? i.push(w.NODETYPE) : i.push(w.PROCESSINGINSTRUCTIONWITHLITERAL),
                            c.push(G);
                            continue
                        }
                        i.push(w.FUNCTIONNAME),
                        c.push(G);
                        continue
                    }
                    i.push(w.QNAME),
                    c.push(G);
                    continue
                }
                throw new Error("Unexpected character " + x)
            }
            return i.push(1),
            c.push("[EOF]"),
            [i, c]
        }
        ,
        w.SHIFT = "s",
        w.REDUCE = "r",
        w.ACCEPT = "a",
        w.prototype.parse = function(nt) {
            var i, c, m = this.tokenize(nt);
            if (m != null) {
                i = m[0],
                c = m[1];
                var h = 0, x = [], k = [], Q = [], nt, D, G;
                for (x.push(0),
                k.push(1),
                Q.push("_S"),
                D = i[h],
                G = c[h++]; ; )
                    switch (nt = x[x.length - 1],
                    w.actionTable[nt].charAt(D - 1)) {
                    case w.SHIFT:
                        k.push(-D),
                        Q.push(G),
                        x.push(w.actionTableNumber[nt].charCodeAt(D - 1) - 32),
                        D = i[h],
                        G = c[h++];
                        break;
                    case w.REDUCE:
                        for (var Ct = w.productions[w.actionTableNumber[nt].charCodeAt(D - 1) - 32][1], S = [], ie = 0; ie < Ct; ie++)
                            k.pop(),
                            S.unshift(Q.pop()),
                            x.pop();
                        var ae = x[x.length - 1];
                        k.push(w.productions[w.actionTableNumber[nt].charCodeAt(D - 1) - 32][0]),
                        this.reduceActions[w.actionTableNumber[nt].charCodeAt(D - 1) - 32] == null ? Q.push(S[0]) : Q.push(this.reduceActions[w.actionTableNumber[nt].charCodeAt(D - 1) - 32](S)),
                        x.push(w.gotoTable[ae].charCodeAt(w.productions[w.actionTableNumber[nt].charCodeAt(D - 1) - 32][0] - 2) - 33);
                        break;
                    case w.ACCEPT:
                        return new et(Q.pop());
                    default:
                        throw new Error("XPath parse error")
                    }
            }
        }
        ,
        et.prototype = new Object,
        et.prototype.constructor = et,
        et.superclass = Object.prototype;
        function et(t) {
            this.expression = t
        }
        et.prototype.toString = function() {
            return this.expression.toString()
        }
        ;
        function Rt(t, i, c) {
            i in t || (t[i] = c)
        }
        et.prototype.evaluate = function(t) {
            return t.contextNode = t.expressionContextNode,
            t.contextSize = 1,
            t.contextPosition = 1,
            t.isHtml && (Rt(t, "caseInsensitive", !0),
            Rt(t, "allowAnyNamespaceForNoPrefix", !0)),
            Rt(t, "caseInsensitive", !1),
            this.expression.evaluate(t)
        }
        ,
        et.XML_NAMESPACE_URI = "http://www.w3.org/XML/1998/namespace",
        et.XMLNS_NAMESPACE_URI = "http://www.w3.org/2000/xmlns/",
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
        _t.prototype = new At,
        _t.prototype.constructor = _t,
        _t.superclass = At.prototype;
        function _t(t) {
            arguments.length > 0 && this.init(t)
        }
        _t.prototype.init = function(t) {
            _t.superclass.init.call(this, t)
        }
        ,
        _t.prototype.evaluate = function(t) {
            return this.rhs.evaluate(t).number().negate()
        }
        ,
        _t.prototype.toString = function() {
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
            return "(" + this.lhs.toString() + " or " + this.rhs.toString() + ")"
        }
        ,
        Ht.prototype.evaluate = function(t) {
            var i = this.lhs.evaluate(t).bool();
            return i.booleanValue() ? i : this.rhs.evaluate(t).bool()
        }
        ,
        yt.prototype = new j,
        yt.prototype.constructor = yt,
        yt.superclass = j.prototype;
        function yt(t, i) {
            arguments.length > 0 && this.init(t, i)
        }
        yt.prototype.init = function(t, i) {
            yt.superclass.init.call(this, t, i)
        }
        ,
        yt.prototype.toString = function() {
            return "(" + this.lhs.toString() + " and " + this.rhs.toString() + ")"
        }
        ,
        yt.prototype.evaluate = function(t) {
            var i = this.lhs.evaluate(t).bool();
            return i.booleanValue() ? this.rhs.evaluate(t).bool() : i
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
            return "(" + this.lhs.toString() + " = " + this.rhs.toString() + ")"
        }
        ,
        Vt.prototype.evaluate = function(t) {
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
            return this.lhs.evaluate(t).greaterthan(this.rhs.evaluate(t))
        }
        ,
        wt.prototype.toString = function() {
            return "(" + this.lhs.toString() + " > " + this.rhs.toString() + ")"
        }
        ,
        Qt.prototype = new j,
        Qt.prototype.constructor = Qt,
        Qt.superclass = j.prototype;
        function Qt(t, i) {
            arguments.length > 0 && this.init(t, i)
        }
        Qt.prototype.init = function(t, i) {
            Qt.superclass.init.call(this, t, i)
        }
        ,
        Qt.prototype.evaluate = function(t) {
            return this.lhs.evaluate(t).lessthanorequal(this.rhs.evaluate(t))
        }
        ,
        Qt.prototype.toString = function() {
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
            return this.lhs.evaluate(t).number().minus(this.rhs.evaluate(t).number())
        }
        ,
        Xt.prototype.toString = function() {
            return "(" + this.lhs.toString() + " - " + this.rhs.toString() + ")"
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
            return this.lhs.evaluate(t).number().multiply(this.rhs.evaluate(t).number())
        }
        ,
        Jt.prototype.toString = function() {
            return "(" + this.lhs.toString() + " * " + this.rhs.toString() + ")"
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
            return this.lhs.evaluate(t).number().div(this.rhs.evaluate(t).number())
        }
        ,
        vt.prototype.toString = function() {
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
            return y(P, [this.lhs, this.rhs]).join(" | ")
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
        function xe(t) {
            for (; t && t.parentNode; )
                t = t.parentNode;
            return t
        }
        X.applyPredicates = function(t, i, c) {
            return p(function(m, h) {
                var x = i.extend({
                    contextSize: m.length
                });
                return _(function(k, Q) {
                    return X.predicateMatches(h, x.extend({
                        contextNode: k,
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
            for (var h = c; h.parentNode != null; )
                h = h.parentNode;
            return h
        }
        ,
        X.applyStep = function(t, i, c) {
            var m = [];
            switch (i.contextNode = c,
            t.axis) {
            case N.ANCESTOR:
                if (i.contextNode === i.virtualRoot)
                    break;
                var h;
                for (i.contextNode.nodeType == 2 ? h = X.getOwnerElement(i.contextNode) : h = i.contextNode.parentNode; h != null && (t.nodeTest.matches(h, i) && m.push(h),
                h !== i.virtualRoot); )
                    h = h.parentNode;
                break;
            case N.ANCESTORORSELF:
                for (var h = i.contextNode; h != null && (t.nodeTest.matches(h, i) && m.push(h),
                h !== i.virtualRoot); h = h.nodeType == 2 ? X.getOwnerElement(h) : h.parentNode)
                    ;
                break;
            case N.ATTRIBUTE:
                var x = i.contextNode.attributes;
                if (x != null)
                    for (var k = 0; k < x.length; k++) {
                        var h = x.item(k);
                        t.nodeTest.matches(h, i) && m.push(h)
                    }
                break;
            case N.CHILD:
                for (var h = i.contextNode.firstChild; h != null; h = h.nextSibling)
                    t.nodeTest.matches(h, i) && m.push(h);
                break;
            case N.DESCENDANT:
                for (var S = [i.contextNode.firstChild]; S.length > 0; )
                    for (var h = S.pop(); h != null; )
                        t.nodeTest.matches(h, i) && m.push(h),
                        h.firstChild != null ? (S.push(h.nextSibling),
                        h = h.firstChild) : h = h.nextSibling;
                break;
            case N.DESCENDANTORSELF:
                t.nodeTest.matches(i.contextNode, i) && m.push(i.contextNode);
                for (var S = [i.contextNode.firstChild]; S.length > 0; )
                    for (var h = S.pop(); h != null; )
                        t.nodeTest.matches(h, i) && m.push(h),
                        h.firstChild != null ? (S.push(h.nextSibling),
                        h = h.firstChild) : h = h.nextSibling;
                break;
            case N.FOLLOWING:
                if (i.contextNode === i.virtualRoot)
                    break;
                var S = [];
                i.contextNode.firstChild != null ? S.unshift(i.contextNode.firstChild) : S.unshift(i.contextNode.nextSibling);
                for (var h = i.contextNode.parentNode; h != null && h.nodeType != 9 && h !== i.virtualRoot; h = h.parentNode)
                    S.unshift(h.nextSibling);
                do
                    for (var h = S.pop(); h != null; )
                        t.nodeTest.matches(h, i) && m.push(h),
                        h.firstChild != null ? (S.push(h.nextSibling),
                        h = h.firstChild) : h = h.nextSibling;
                while (S.length > 0);
                break;
            case N.FOLLOWINGSIBLING:
                if (i.contextNode === i.virtualRoot)
                    break;
                for (var h = i.contextNode.nextSibling; h != null; h = h.nextSibling)
                    t.nodeTest.matches(h, i) && m.push(h);
                break;
            case N.NAMESPACE:
                var Q = {};
                if (i.contextNode.nodeType == 1) {
                    Q.xml = et.XML_NAMESPACE_URI,
                    Q.xmlns = et.XMLNS_NAMESPACE_URI;
                    for (var h = i.contextNode; h != null && h.nodeType == 1; h = h.parentNode)
                        for (var k = 0; k < h.attributes.length; k++) {
                            var nt = h.attributes.item(k)
                              , D = String(nt.name);
                            if (D == "xmlns")
                                Q[""] == null && (Q[""] = nt.value);
                            else if (D.length > 6 && D.substring(0, 6) == "xmlns:") {
                                var G = D.substring(6, D.length);
                                Q[G] == null && (Q[G] = nt.value)
                            }
                        }
                    for (var G in Q) {
                        var Ct = new zt(G,Q[G],i.contextNode);
                        t.nodeTest.matches(Ct, i) && m.push(Ct)
                    }
                }
                break;
            case N.PARENT:
                h = null,
                i.contextNode !== i.virtualRoot && (i.contextNode.nodeType == 2 ? h = X.getOwnerElement(i.contextNode) : h = i.contextNode.parentNode),
                h != null && t.nodeTest.matches(h, i) && m.push(h);
                break;
            case N.PRECEDING:
                var S;
                i.virtualRoot != null ? S = [i.virtualRoot] : S = [xe(i.contextNode)];
                t: for (; S.length > 0; )
                    for (var h = S.pop(); h != null; ) {
                        if (h == i.contextNode)
                            break t;
                        t.nodeTest.matches(h, i) && m.unshift(h),
                        h.firstChild != null ? (S.push(h.nextSibling),
                        h = h.firstChild) : h = h.nextSibling
                    }
                break;
            case N.PRECEDINGSIBLING:
                if (i.contextNode === i.virtualRoot)
                    break;
                for (var h = i.contextNode.previousSibling; h != null; h = h.previousSibling)
                    t.nodeTest.matches(h, i) && m.push(h);
                break;
            case N.SELF:
                t.nodeTest.matches(i.contextNode, i) && m.push(i.contextNode);
                break
            }
            return m
        }
        ,
        X.applySteps = function(t, i, c) {
            return p(function(m, h) {
                return [].concat.apply([], y(function(x) {
                    return X.applyPredicates(h.predicates, i, X.applyStep(h, i, x))
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
            if (!I.instance_of(c, R)) {
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
            var m = new R;
            return m.addArray(X.applyLocationPath(this.locationPath, i, c.nodes)),
            m
        }
        ,
        X.predicateMatches = function(t, i) {
            var c = t.evaluate(i);
            return I.instance_of(c, H) ? i.contextPosition == c.numberValue() : c.booleanValue()
        }
        ,
        X.predicateString = b(tt("[", "]"), P),
        X.predicatesString = b(M(""), y(X.predicateString)),
        X.prototype.toString = function() {
            if (this.filter != null) {
                var t = P(this.filter);
                return I.instance_of(this.filter, W) ? tt("'", "'", t) : this.filterPredicates != null && this.filterPredicates.length ? tt("(", ")", t) + X.predicatesString(this.filterPredicates) : this.locationPath != null ? t + (this.locationPath.absolute ? "" : "/") + P(this.locationPath) : t
            }
            return P(this.locationPath)
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
                for (var h = c.item(m), x = h.attributes, k = 0; k < x.length; k++) {
                    var Q = x.item(k);
                    if (Q === t)
                        return h
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
            return (this.absolute ? "/" : "") + y(P, this.steps).join("/")
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
        C.prototype = new Object,
        C.prototype.constructor = C,
        C.superclass = Object.prototype;
        function C(t, i) {
            arguments.length > 0 && this.init(t, i)
        }
        C.prototype.init = function(t, i) {
            this.type = t,
            this.value = i
        }
        ,
        C.prototype.toString = function() {
            return "<unknown nodetest type>"
        }
        ,
        C.prototype.matches = function(t, i) {
            console.warn("unknown node test type")
        }
        ,
        C.NAMETESTANY = 0,
        C.NAMETESTPREFIXANY = 1,
        C.NAMETESTQNAME = 2,
        C.COMMENT = 3,
        C.TEXT = 4,
        C.PI = 5,
        C.NODE = 6,
        C.isNodeType = function(t) {
            return b(A(t), q("nodeType"))
        }
        ,
        C.makeNodeTestType = function(t, i, c) {
            var m = c || function() {}
            ;
            m.prototype = new C(i.type),
            m.prototype.constructor = t;
            for (var h in i)
                m.prototype[h] = i[h];
            return m
        }
        ,
        C.makeNodeTypeTest = function(t, i, c) {
            return new (C.makeNodeTestType(t, {
                matches: C.isNodeType(i),
                toString: Y(c)
            }))
        }
        ,
        C.hasPrefix = function(t) {
            return t.prefix || (t.nodeName || t.tagName).indexOf(":") !== -1
        }
        ,
        C.isElementOrAttribute = C.isNodeType([1, 2]),
        C.nameSpaceMatches = function(t, i, c) {
            var m = c.namespaceURI || "";
            if (!t)
                return !m || i.allowAnyNamespaceForNoPrefix && !C.hasPrefix(c);
            var h = i.namespaceResolver.getNamespace(t, i.expressionContextNode);
            if (h == null)
                throw new Error("Cannot resolve QName " + t);
            return h === m
        }
        ,
        C.localNameMatches = function(t, i, c) {
            var m = c.localName || c.nodeName;
            return i.caseInsensitive ? t.toLowerCase() === m.toLowerCase() : t === m
        }
        ,
        C.NameTestPrefixAny = C.makeNodeTestType(C.NAMETESTPREFIXANY, {
            matches: function(t, i) {
                return C.isElementOrAttribute(t) && C.nameSpaceMatches(this.prefix, i, t)
            },
            toString: function() {
                return this.prefix + ":*"
            }
        }, function(t) {
            this.prefix = t
        }),
        C.NameTestQName = C.makeNodeTestType(C.NAMETESTQNAME, {
            matches: function(t, i) {
                return C.isNodeType([1, 2, zt.XPATH_NAMESPACE_NODE])(t) && C.nameSpaceMatches(this.prefix, i, t) && C.localNameMatches(this.localName, i, t)
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
        C.PITest = C.makeNodeTestType(C.PI, {
            matches: function(t, i) {
                return C.isNodeType([7])(t) && (t.target || t.nodeName) === this.name
            },
            toString: function() {
                return tt('processing-instruction("', '")', this.name)
            }
        }, function(t) {
            this.name = t
        }),
        C.nameTestAny = C.makeNodeTypeTest(C.NAMETESTANY, [1, 2, zt.XPATH_NAMESPACE_NODE], "*"),
        C.textTest = C.makeNodeTypeTest(C.TEXT, [3, 4], "text()"),
        C.commentTest = C.makeNodeTypeTest(C.COMMENT, [8], "comment()"),
        C.nodeTest = C.makeNodeTypeTest(C.NODE, [1, 2, 3, 4, 7, 8, 9], "node()"),
        C.anyPiTest = C.makeNodeTypeTest(C.PI, [7], "processing-instruction()"),
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
            var i = I.resolveQName(this.variable, t.namespaceResolver, t.contextNode, !1);
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
            var i = kt.getFunctionFromContext(this.functionName, t);
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
            return new H(this.str)
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
            return I.instance_of(t, U) ? this.bool().equals(t) : I.instance_of(t, H) ? this.number().equals(t) : I.instance_of(t, R) ? t.compareWithString(this, pt.equals) : new U(this.str == t.str)
        }
        ,
        W.prototype.notequal = function(t) {
            return I.instance_of(t, U) ? this.bool().notequal(t) : I.instance_of(t, H) ? this.number().notequal(t) : I.instance_of(t, R) ? t.compareWithString(this, pt.notequal) : new U(this.str != t.str)
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
        H.prototype = new rt,
        H.prototype.constructor = H,
        H.superclass = rt.prototype;
        function H(t) {
            arguments.length > 0 && this.init(t)
        }
        H.prototype.init = function(t) {
            this.num = typeof t == "string" ? this.parse(t) : Number(t)
        }
        ,
        H.prototype.numberFormat = /^\s*-?[0-9]*\.?[0-9]+\s*$/,
        H.prototype.parse = function(t) {
            return this.numberFormat.test(t) ? parseFloat(t) : Number.NaN
        }
        ;
        function xr(t) {
            for (var i = t.split("e-"), c = i[0].replace(".", ""), m = Number(i[1]), h = 0; h < m - 1; h += 1)
                c = "0" + c;
            return "0." + c
        }
        function wr(t) {
            for (var i = t.split("e"), c = i[0].replace(".", ""), m = Number(i[1]), h = m + 1 - c.length, x = 0; x < h; x += 1)
                c += "0";
            return c
        }
        H.prototype.toString = function() {
            var t = this.num.toString();
            return t.indexOf("e-") !== -1 ? xr(t) : t.indexOf("e") !== -1 ? wr(t) : t
        }
        ,
        H.prototype.evaluate = function(t) {
            return this
        }
        ,
        H.prototype.string = function() {
            return new W(this.toString())
        }
        ,
        H.prototype.number = function() {
            return this
        }
        ,
        H.prototype.bool = function() {
            return new U(this.num)
        }
        ,
        H.prototype.nodeset = function() {
            throw new Error("Cannot convert number to nodeset")
        }
        ,
        H.prototype.stringValue = function() {
            return this.string().stringValue()
        }
        ,
        H.prototype.numberValue = function() {
            return this.num
        }
        ,
        H.prototype.booleanValue = function() {
            return this.bool().booleanValue()
        }
        ,
        H.prototype.negate = function() {
            return new H(-this.num)
        }
        ,
        H.prototype.equals = function(t) {
            return I.instance_of(t, U) ? this.bool().equals(t) : I.instance_of(t, W) ? this.equals(t.number()) : I.instance_of(t, R) ? t.compareWithNumber(this, pt.equals) : new U(this.num == t.num)
        }
        ,
        H.prototype.notequal = function(t) {
            return I.instance_of(t, U) ? this.bool().notequal(t) : I.instance_of(t, W) ? this.notequal(t.number()) : I.instance_of(t, R) ? t.compareWithNumber(this, pt.notequal) : new U(this.num != t.num)
        }
        ,
        H.prototype.lessthan = function(t) {
            return I.instance_of(t, R) ? t.compareWithNumber(this, pt.greaterthan) : I.instance_of(t, U) || I.instance_of(t, W) ? this.lessthan(t.number()) : new U(this.num < t.num)
        }
        ,
        H.prototype.greaterthan = function(t) {
            return I.instance_of(t, R) ? t.compareWithNumber(this, pt.lessthan) : I.instance_of(t, U) || I.instance_of(t, W) ? this.greaterthan(t.number()) : new U(this.num > t.num)
        }
        ,
        H.prototype.lessthanorequal = function(t) {
            return I.instance_of(t, R) ? t.compareWithNumber(this, pt.greaterthanorequal) : I.instance_of(t, U) || I.instance_of(t, W) ? this.lessthanorequal(t.number()) : new U(this.num <= t.num)
        }
        ,
        H.prototype.greaterthanorequal = function(t) {
            return I.instance_of(t, R) ? t.compareWithNumber(this, pt.lessthanorequal) : I.instance_of(t, U) || I.instance_of(t, W) ? this.greaterthanorequal(t.number()) : new U(this.num >= t.num)
        }
        ,
        H.prototype.plus = function(t) {
            return new H(this.num + t.num)
        }
        ,
        H.prototype.minus = function(t) {
            return new H(this.num - t.num)
        }
        ,
        H.prototype.multiply = function(t) {
            return new H(this.num * t.num)
        }
        ,
        H.prototype.div = function(t) {
            return new H(this.num / t.num)
        }
        ,
        H.prototype.mod = function(t) {
            return new H(this.num % t.num)
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
            return new H(this.b)
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
            return I.instance_of(t, W) || I.instance_of(t, H) ? this.equals(t.bool()) : I.instance_of(t, R) ? t.compareWithBoolean(this, pt.equals) : new U(this.b == t.b)
        }
        ,
        U.prototype.notequal = function(t) {
            return I.instance_of(t, W) || I.instance_of(t, H) ? this.notequal(t.bool()) : I.instance_of(t, R) ? t.compareWithBoolean(this, pt.notequal) : new U(this.b != t.b)
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
                var h = this.right.right == null ? 0 : this.right.right.depth
                  , x = this.right.left == null ? 0 : this.right.left.depth;
                x > h && this.right.rotateLL(),
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
        function vr(t, i) {
            if (t === i)
                return 0;
            if (t.compareDocumentPosition) {
                var c = t.compareDocumentPosition(i);
                return c & 1 || c & 10 ? 1 : c & 20 ? -1 : 0
            }
            for (var m = 0, h = 0, x = t; x != null; x = x.parentNode || x.ownerElement)
                m++;
            for (var k = i; k != null; k = k.parentNode || k.ownerElement)
                h++;
            if (m > h) {
                for (; m > h; )
                    t = t.parentNode || t.ownerElement,
                    m--;
                if (t === i)
                    return 1
            } else if (h > m) {
                for (; h > m; )
                    i = i.parentNode || i.ownerElement,
                    h--;
                if (t === i)
                    return -1
            }
            for (var Q = t.parentNode || t.ownerElement, nt = i.parentNode || i.ownerElement; Q !== nt; )
                t = Q,
                i = nt,
                Q = t.parentNode || t.ownerElement,
                nt = i.parentNode || i.ownerElement;
            var D = I.isAttribute(t)
              , G = I.isAttribute(i);
            if (D && !G)
                return -1;
            if (!D && G)
                return 1;
            if (Q)
                for (var Ct = D ? Q.attributes : Q.childNodes, S = Ct.length, ie = 0; ie < S; ie += 1) {
                    var ae = Ct[ie];
                    if (ae === t)
                        return -1;
                    if (ae === i)
                        return 1
                }
            throw new Error("Unexpected: could not determine node order")
        }
        Ot.prototype.add = function(t) {
            if (t === this.node)
                return !1;
            var i = vr(t, this.node)
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
        R.prototype = new rt,
        R.prototype.constructor = R,
        R.superclass = rt.prototype;
        function R() {
            this.init()
        }
        R.prototype.init = function() {
            this.tree = null,
            this.nodes = [],
            this.size = 0
        }
        ,
        R.prototype.toString = function() {
            var t = this.first();
            return t == null ? "" : this.stringForNode(t)
        }
        ,
        R.prototype.evaluate = function(t) {
            return this
        }
        ,
        R.prototype.string = function() {
            return new W(this.toString())
        }
        ,
        R.prototype.stringValue = function() {
            return this.toString()
        }
        ,
        R.prototype.number = function() {
            return new H(this.string())
        }
        ,
        R.prototype.numberValue = function() {
            return Number(this.string())
        }
        ,
        R.prototype.bool = function() {
            return new U(this.booleanValue())
        }
        ,
        R.prototype.booleanValue = function() {
            return !!this.size
        }
        ,
        R.prototype.nodeset = function() {
            return this
        }
        ,
        R.prototype.stringForNode = function(t) {
            return t.nodeType == 9 || t.nodeType == 1 || t.nodeType === 11 ? this.stringForContainerNode(t) : t.nodeType === 2 ? t.value || t.nodeValue : t.isNamespaceNode ? t.namespace : t.nodeValue
        }
        ,
        R.prototype.stringForContainerNode = function(t) {
            for (var i = "", c = t.firstChild; c != null; c = c.nextSibling) {
                var m = c.nodeType;
                (m === 1 || m === 3 || m === 4 || m === 9 || m === 11) && (i += this.stringForNode(c))
            }
            return i
        }
        ,
        R.prototype.buildTree = function() {
            if (!this.tree && this.nodes.length) {
                this.tree = new Ot(this.nodes[0]);
                for (var t = 1; t < this.nodes.length; t += 1)
                    this.tree.add(this.nodes[t])
            }
            return this.tree
        }
        ,
        R.prototype.first = function() {
            var t = this.buildTree();
            if (t == null)
                return null;
            for (; t.left != null; )
                t = t.left;
            return t.node
        }
        ,
        R.prototype.add = function(t) {
            for (var i = 0; i < this.nodes.length; i += 1)
                if (t === this.nodes[i])
                    return;
            this.tree = null,
            this.nodes.push(t),
            this.size += 1
        }
        ,
        R.prototype.addArray = function(t) {
            var i = this;
            f(function(c) {
                i.add(c)
            }, t)
        }
        ,
        R.prototype.toArray = function() {
            var t = [];
            return this.toArrayRec(this.buildTree(), t),
            t
        }
        ,
        R.prototype.toArrayRec = function(t, i) {
            t != null && (this.toArrayRec(t.left, i),
            i.push(t.node),
            this.toArrayRec(t.right, i))
        }
        ,
        R.prototype.toUnsortedArray = function() {
            return this.nodes.slice()
        }
        ,
        R.prototype.compareWithString = function(t, i) {
            for (var c = this.toUnsortedArray(), m = 0; m < c.length; m++) {
                var h = c[m]
                  , x = new W(this.stringForNode(h))
                  , k = i(x, t);
                if (k.booleanValue())
                    return k
            }
            return new U(!1)
        }
        ,
        R.prototype.compareWithNumber = function(t, i) {
            for (var c = this.toUnsortedArray(), m = 0; m < c.length; m++) {
                var h = c[m]
                  , x = new H(this.stringForNode(h))
                  , k = i(x, t);
                if (k.booleanValue())
                    return k
            }
            return new U(!1)
        }
        ,
        R.prototype.compareWithBoolean = function(t, i) {
            return i(this.bool(), t)
        }
        ,
        R.prototype.compareWithNodeSet = function(t, i) {
            for (var c = this.toUnsortedArray(), m = function(Q, nt) {
                return i(nt, Q)
            }, h = 0; h < c.length; h++) {
                var x = new W(this.stringForNode(c[h]))
                  , k = t.compareWithString(x, m);
                if (k.booleanValue())
                    return k
            }
            return new U(!1)
        }
        ,
        R.compareWith = u(function(t, i) {
            return I.instance_of(i, W) ? this.compareWithString(i, t) : I.instance_of(i, H) ? this.compareWithNumber(i, t) : I.instance_of(i, U) ? this.compareWithBoolean(i, t) : this.compareWithNodeSet(i, t)
        }),
        R.prototype.equals = R.compareWith(pt.equals),
        R.prototype.notequal = R.compareWith(pt.notequal),
        R.prototype.lessthan = R.compareWith(pt.lessthan),
        R.prototype.greaterthan = R.compareWith(pt.greaterthan),
        R.prototype.lessthanorequal = R.compareWith(pt.lessthanorequal),
        R.prototype.greaterthanorequal = R.compareWith(pt.greaterthanorequal),
        R.prototype.union = function(t) {
            var i = new R;
            return i.addArray(this.toUnsortedArray()),
            i.addArray(t.toUnsortedArray()),
            i
        }
        ,
        zt.prototype = new Object,
        zt.prototype.constructor = zt,
        zt.superclass = Object.prototype;
        function zt(t, i, c) {
            this.isXPathNamespace = !0,
            this.ownerDocument = c.ownerDocument,
            this.nodeName = "#namespace",
            this.prefix = t,
            this.localName = t,
            this.namespaceURI = i,
            this.nodeValue = i,
            this.ownerElement = c,
            this.nodeType = zt.XPATH_NAMESPACE_NODE
        }
        zt.prototype.toString = function() {
            return '{ "' + this.prefix + '", "' + this.namespaceURI + '" }'
        }
        ,
        Ut.prototype = new Object,
        Ut.prototype.constructor = Ut,
        Ut.superclass = Object.prototype;
        function Ut(t, i, c) {
            this.variableResolver = t ?? new xt,
            this.namespaceResolver = i ?? new Zt,
            this.functionResolver = c ?? new kt
        }
        Ut.prototype.extend = function(t) {
            return O(new Ut, this, t)
        }
        ,
        xt.prototype = new Object,
        xt.prototype.constructor = xt,
        xt.superclass = Object.prototype;
        function xt() {}
        xt.prototype.getVariable = function(t, i) {
            return null
        }
        ,
        kt.prototype = new Object,
        kt.prototype.constructor = kt,
        kt.superclass = Object.prototype;
        function kt(t) {
            this.thisArg = t ?? V,
            this.functions = new Object,
            this.addStandardFunctions()
        }
        kt.prototype.addStandardFunctions = function() {
            this.functions["{}last"] = V.last,
            this.functions["{}position"] = V.position,
            this.functions["{}count"] = V.count,
            this.functions["{}id"] = V.id,
            this.functions["{}local-name"] = V.localName,
            this.functions["{}namespace-uri"] = V.namespaceURI,
            this.functions["{}name"] = V.name,
            this.functions["{}string"] = V.string,
            this.functions["{}concat"] = V.concat,
            this.functions["{}starts-with"] = V.startsWith,
            this.functions["{}contains"] = V.contains,
            this.functions["{}substring-before"] = V.substringBefore,
            this.functions["{}substring-after"] = V.substringAfter,
            this.functions["{}substring"] = V.substring,
            this.functions["{}string-length"] = V.stringLength,
            this.functions["{}normalize-space"] = V.normalizeSpace,
            this.functions["{}translate"] = V.translate,
            this.functions["{}boolean"] = V.boolean_,
            this.functions["{}not"] = V.not,
            this.functions["{}true"] = V.true_,
            this.functions["{}false"] = V.false_,
            this.functions["{}lang"] = V.lang,
            this.functions["{}number"] = V.number,
            this.functions["{}sum"] = V.sum,
            this.functions["{}floor"] = V.floor,
            this.functions["{}ceiling"] = V.ceiling,
            this.functions["{}round"] = V.round
        }
        ,
        kt.prototype.addFunction = function(t, i, c) {
            this.functions["{" + t + "}" + i] = c
        }
        ,
        kt.getFunctionFromContext = function(t, i) {
            var c = I.resolveQName(t, i.namespaceResolver, i.contextNode, !1);
            if (c[0] === null)
                throw new Error("Cannot resolve QName " + name);
            return i.functionResolver.getFunction(c[1], c[0])
        }
        ,
        kt.prototype.getFunction = function(t, i) {
            return this.functions["{" + i + "}" + t]
        }
        ,
        Zt.prototype = new Object,
        Zt.prototype.constructor = Zt,
        Zt.superclass = Object.prototype;
        function Zt() {}
        Zt.prototype.getNamespace = function(t, i) {
            if (t == "xml")
                return et.XML_NAMESPACE_URI;
            if (t == "xmlns")
                return et.XMLNS_NAMESPACE_URI;
            for (i.nodeType == 9 ? i = i.documentElement : i.nodeType == 2 ? i = X.getOwnerElement(i) : i.nodeType != 1 && (i = i.parentNode); i != null && i.nodeType == 1; ) {
                for (var c = i.attributes, m = 0; m < c.length; m++) {
                    var h = c.item(m)
                      , x = h.name || h.nodeName;
                    if (x === "xmlns" && t === "" || x === "xmlns:" + t)
                        return String(h.value || h.nodeValue)
                }
                i = i.parentNode
            }
            return null
        }
        ;
        var V = new Object;
        V.last = function(t) {
            if (arguments.length != 1)
                throw new Error("Function last expects ()");
            return new H(t.contextSize)
        }
        ,
        V.position = function(t) {
            if (arguments.length != 1)
                throw new Error("Function position expects ()");
            return new H(t.contextPosition)
        }
        ,
        V.count = function() {
            var t = arguments[0], i;
            if (arguments.length != 2 || !I.instance_of(i = arguments[1].evaluate(t), R))
                throw new Error("Function count expects (node-set)");
            return new H(i.size)
        }
        ,
        V.id = function() {
            var t = arguments[0], i;
            if (arguments.length != 2)
                throw new Error("Function id expects (object)");
            i = arguments[1].evaluate(t),
            I.instance_of(i, R) ? i = i.toArray().join(" ") : i = i.stringValue();
            for (var c = i.split(/[\x0d\x0a\x09\x20]+/), m = new R, h = t.contextNode.nodeType == 9 ? t.contextNode : t.contextNode.ownerDocument, x = 0; x < c.length; x++) {
                var k;
                h.getElementById ? k = h.getElementById(c[x]) : k = I.getElementById(h, c[x]),
                k != null && m.add(k)
            }
            return m
        }
        ,
        V.localName = function(t, i) {
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
        V.namespaceURI = function() {
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
        V.name = function() {
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
        V.string = function() {
            var t = arguments[0];
            if (arguments.length == 1)
                return new W(R.prototype.stringForNode(t.contextNode));
            if (arguments.length == 2)
                return arguments[1].evaluate(t).string();
            throw new Error("Function string expects (object?)")
        }
        ,
        V.concat = function(t) {
            if (arguments.length < 3)
                throw new Error("Function concat expects (string, string[, string]*)");
            for (var i = "", c = 1; c < arguments.length; c++)
                i += arguments[c].evaluate(t).stringValue();
            return new W(i)
        }
        ,
        V.startsWith = function() {
            var t = arguments[0];
            if (arguments.length != 3)
                throw new Error("Function startsWith expects (string, string)");
            var i = arguments[1].evaluate(t).stringValue()
              , c = arguments[2].evaluate(t).stringValue();
            return new U(i.substring(0, c.length) == c)
        }
        ,
        V.contains = function() {
            var t = arguments[0];
            if (arguments.length != 3)
                throw new Error("Function contains expects (string, string)");
            var i = arguments[1].evaluate(t).stringValue()
              , c = arguments[2].evaluate(t).stringValue();
            return new U(i.indexOf(c) !== -1)
        }
        ,
        V.substringBefore = function() {
            var t = arguments[0];
            if (arguments.length != 3)
                throw new Error("Function substring-before expects (string, string)");
            var i = arguments[1].evaluate(t).stringValue()
              , c = arguments[2].evaluate(t).stringValue();
            return new W(i.substring(0, i.indexOf(c)))
        }
        ,
        V.substringAfter = function() {
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
        V.substring = function() {
            var t = arguments[0];
            if (!(arguments.length == 3 || arguments.length == 4))
                throw new Error("Function substring expects (string, number, number?)");
            var i = arguments[1].evaluate(t).stringValue()
              , c = Math.round(arguments[2].evaluate(t).numberValue()) - 1
              , m = arguments.length == 4 ? c + Math.round(arguments[3].evaluate(t).numberValue()) : void 0;
            return new W(i.substring(c, m))
        }
        ,
        V.stringLength = function() {
            var t = arguments[0], i;
            if (arguments.length == 1)
                i = R.prototype.stringForNode(t.contextNode);
            else if (arguments.length == 2)
                i = arguments[1].evaluate(t).stringValue();
            else
                throw new Error("Function string-length expects (string?)");
            return new H(i.length)
        }
        ,
        V.normalizeSpace = function() {
            var t = arguments[0], i;
            if (arguments.length == 1)
                i = R.prototype.stringForNode(t.contextNode);
            else if (arguments.length == 2)
                i = arguments[1].evaluate(t).stringValue();
            else
                throw new Error("Function normalize-space expects (string?)");
            for (var c = 0, m = i.length - 1; I.isSpace(i.charCodeAt(m)); )
                m--;
            for (var h = ""; c <= m && I.isSpace(i.charCodeAt(c)); )
                c++;
            for (; c <= m; )
                if (I.isSpace(i.charCodeAt(c)))
                    for (h += " "; c <= m && I.isSpace(i.charCodeAt(c)); )
                        c++;
                else
                    h += i.charAt(c),
                    c++;
            return new W(h)
        }
        ,
        V.translate = function(t, i, c, m) {
            if (arguments.length != 4)
                throw new Error("Function translate expects (string, string, string)");
            var h = i.evaluate(t).stringValue()
              , x = c.evaluate(t).stringValue()
              , k = m.evaluate(t).stringValue()
              , Q = p(function(D, G, Ct) {
                return G in D || (D[G] = Ct > k.length ? "" : k[Ct]),
                D
            }, {}, x)
              , nt = M("", y(function(D) {
                return D in Q ? Q[D] : D
            }, h));
            return new W(nt)
        }
        ,
        V.boolean_ = function() {
            var t = arguments[0];
            if (arguments.length != 2)
                throw new Error("Function boolean expects (object)");
            return arguments[1].evaluate(t).bool()
        }
        ,
        V.not = function(t, i) {
            if (arguments.length != 2)
                throw new Error("Function not expects (object)");
            return i.evaluate(t).bool().not()
        }
        ,
        V.true_ = function() {
            if (arguments.length != 1)
                throw new Error("Function true expects ()");
            return U.true_
        }
        ,
        V.false_ = function() {
            if (arguments.length != 1)
                throw new Error("Function false expects ()");
            return U.false_
        }
        ,
        V.lang = function() {
            var t = arguments[0];
            if (arguments.length != 2)
                throw new Error("Function lang expects (string)");
            for (var i, c = t.contextNode; c != null && c.nodeType != 9; c = c.parentNode) {
                var m = c.getAttributeNS(et.XML_NAMESPACE_URI, "lang");
                if (m != null) {
                    i = String(m);
                    break
                }
            }
            if (i == null)
                return U.false_;
            var h = arguments[1].evaluate(t).stringValue();
            return new U(i.substring(0, h.length) == h && (i.length == h.length || i.charAt(h.length) == "-"))
        }
        ,
        V.number = function() {
            var t = arguments[0];
            if (!(arguments.length == 1 || arguments.length == 2))
                throw new Error("Function number expects (object?)");
            return arguments.length == 1 ? new H(R.prototype.stringForNode(t.contextNode)) : arguments[1].evaluate(t).number()
        }
        ,
        V.sum = function() {
            var t = arguments[0], i;
            if (arguments.length != 2 || !I.instance_of(i = arguments[1].evaluate(t), R))
                throw new Error("Function sum expects (node-set)");
            i = i.toUnsortedArray();
            for (var c = 0, m = 0; m < i.length; m++)
                c += new H(R.prototype.stringForNode(i[m])).numberValue();
            return new H(c)
        }
        ,
        V.floor = function() {
            var t = arguments[0];
            if (arguments.length != 2)
                throw new Error("Function floor expects (number)");
            return new H(Math.floor(arguments[1].evaluate(t).numberValue()))
        }
        ,
        V.ceiling = function() {
            var t = arguments[0];
            if (arguments.length != 2)
                throw new Error("Function ceiling expects (number)");
            return new H(Math.ceil(arguments[1].evaluate(t).numberValue()))
        }
        ,
        V.round = function() {
            var t = arguments[0];
            if (arguments.length != 2)
                throw new Error("Function round expects (number)");
            return new H(Math.round(arguments[1].evaluate(t).numberValue()))
        }
        ;
        var I = new Object;
        I.isAttribute = function(t) {
            return t && (t.nodeType === 2 || t.ownerElement)
        }
        ,
        I.splitQName = function(t) {
            var i = t.indexOf(":");
            return i == -1 ? [null, t] : [t.substring(0, i), t.substring(i + 1)]
        }
        ,
        I.resolveQName = function(t, i, c, m) {
            var h = I.splitQName(t);
            return h[0] != null ? h[0] = i.getNamespace(h[0], c) : m ? (h[0] = i.getNamespace("", c),
            h[0] == null && (h[0] = "")) : h[0] = "",
            h
        }
        ,
        I.isSpace = function(t) {
            return t == 9 || t == 13 || t == 10 || t == 32
        }
        ,
        I.isLetter = function(t) {
            return t >= 65 && t <= 90 || t >= 97 && t <= 122 || t >= 192 && t <= 214 || t >= 216 && t <= 246 || t >= 248 && t <= 255 || t >= 256 && t <= 305 || t >= 308 && t <= 318 || t >= 321 && t <= 328 || t >= 330 && t <= 382 || t >= 384 && t <= 451 || t >= 461 && t <= 496 || t >= 500 && t <= 501 || t >= 506 && t <= 535 || t >= 592 && t <= 680 || t >= 699 && t <= 705 || t == 902 || t >= 904 && t <= 906 || t == 908 || t >= 910 && t <= 929 || t >= 931 && t <= 974 || t >= 976 && t <= 982 || t == 986 || t == 988 || t == 990 || t == 992 || t >= 994 && t <= 1011 || t >= 1025 && t <= 1036 || t >= 1038 && t <= 1103 || t >= 1105 && t <= 1116 || t >= 1118 && t <= 1153 || t >= 1168 && t <= 1220 || t >= 1223 && t <= 1224 || t >= 1227 && t <= 1228 || t >= 1232 && t <= 1259 || t >= 1262 && t <= 1269 || t >= 1272 && t <= 1273 || t >= 1329 && t <= 1366 || t == 1369 || t >= 1377 && t <= 1414 || t >= 1488 && t <= 1514 || t >= 1520 && t <= 1522 || t >= 1569 && t <= 1594 || t >= 1601 && t <= 1610 || t >= 1649 && t <= 1719 || t >= 1722 && t <= 1726 || t >= 1728 && t <= 1742 || t >= 1744 && t <= 1747 || t == 1749 || t >= 1765 && t <= 1766 || t >= 2309 && t <= 2361 || t == 2365 || t >= 2392 && t <= 2401 || t >= 2437 && t <= 2444 || t >= 2447 && t <= 2448 || t >= 2451 && t <= 2472 || t >= 2474 && t <= 2480 || t == 2482 || t >= 2486 && t <= 2489 || t >= 2524 && t <= 2525 || t >= 2527 && t <= 2529 || t >= 2544 && t <= 2545 || t >= 2565 && t <= 2570 || t >= 2575 && t <= 2576 || t >= 2579 && t <= 2600 || t >= 2602 && t <= 2608 || t >= 2610 && t <= 2611 || t >= 2613 && t <= 2614 || t >= 2616 && t <= 2617 || t >= 2649 && t <= 2652 || t == 2654 || t >= 2674 && t <= 2676 || t >= 2693 && t <= 2699 || t == 2701 || t >= 2703 && t <= 2705 || t >= 2707 && t <= 2728 || t >= 2730 && t <= 2736 || t >= 2738 && t <= 2739 || t >= 2741 && t <= 2745 || t == 2749 || t == 2784 || t >= 2821 && t <= 2828 || t >= 2831 && t <= 2832 || t >= 2835 && t <= 2856 || t >= 2858 && t <= 2864 || t >= 2866 && t <= 2867 || t >= 2870 && t <= 2873 || t == 2877 || t >= 2908 && t <= 2909 || t >= 2911 && t <= 2913 || t >= 2949 && t <= 2954 || t >= 2958 && t <= 2960 || t >= 2962 && t <= 2965 || t >= 2969 && t <= 2970 || t == 2972 || t >= 2974 && t <= 2975 || t >= 2979 && t <= 2980 || t >= 2984 && t <= 2986 || t >= 2990 && t <= 2997 || t >= 2999 && t <= 3001 || t >= 3077 && t <= 3084 || t >= 3086 && t <= 3088 || t >= 3090 && t <= 3112 || t >= 3114 && t <= 3123 || t >= 3125 && t <= 3129 || t >= 3168 && t <= 3169 || t >= 3205 && t <= 3212 || t >= 3214 && t <= 3216 || t >= 3218 && t <= 3240 || t >= 3242 && t <= 3251 || t >= 3253 && t <= 3257 || t == 3294 || t >= 3296 && t <= 3297 || t >= 3333 && t <= 3340 || t >= 3342 && t <= 3344 || t >= 3346 && t <= 3368 || t >= 3370 && t <= 3385 || t >= 3424 && t <= 3425 || t >= 3585 && t <= 3630 || t == 3632 || t >= 3634 && t <= 3635 || t >= 3648 && t <= 3653 || t >= 3713 && t <= 3714 || t == 3716 || t >= 3719 && t <= 3720 || t == 3722 || t == 3725 || t >= 3732 && t <= 3735 || t >= 3737 && t <= 3743 || t >= 3745 && t <= 3747 || t == 3749 || t == 3751 || t >= 3754 && t <= 3755 || t >= 3757 && t <= 3758 || t == 3760 || t >= 3762 && t <= 3763 || t == 3773 || t >= 3776 && t <= 3780 || t >= 3904 && t <= 3911 || t >= 3913 && t <= 3945 || t >= 4256 && t <= 4293 || t >= 4304 && t <= 4342 || t == 4352 || t >= 4354 && t <= 4355 || t >= 4357 && t <= 4359 || t == 4361 || t >= 4363 && t <= 4364 || t >= 4366 && t <= 4370 || t == 4412 || t == 4414 || t == 4416 || t == 4428 || t == 4430 || t == 4432 || t >= 4436 && t <= 4437 || t == 4441 || t >= 4447 && t <= 4449 || t == 4451 || t == 4453 || t == 4455 || t == 4457 || t >= 4461 && t <= 4462 || t >= 4466 && t <= 4467 || t == 4469 || t == 4510 || t == 4520 || t == 4523 || t >= 4526 && t <= 4527 || t >= 4535 && t <= 4536 || t == 4538 || t >= 4540 && t <= 4546 || t == 4587 || t == 4592 || t == 4601 || t >= 7680 && t <= 7835 || t >= 7840 && t <= 7929 || t >= 7936 && t <= 7957 || t >= 7960 && t <= 7965 || t >= 7968 && t <= 8005 || t >= 8008 && t <= 8013 || t >= 8016 && t <= 8023 || t == 8025 || t == 8027 || t == 8029 || t >= 8031 && t <= 8061 || t >= 8064 && t <= 8116 || t >= 8118 && t <= 8124 || t == 8126 || t >= 8130 && t <= 8132 || t >= 8134 && t <= 8140 || t >= 8144 && t <= 8147 || t >= 8150 && t <= 8155 || t >= 8160 && t <= 8172 || t >= 8178 && t <= 8180 || t >= 8182 && t <= 8188 || t == 8486 || t >= 8490 && t <= 8491 || t == 8494 || t >= 8576 && t <= 8578 || t >= 12353 && t <= 12436 || t >= 12449 && t <= 12538 || t >= 12549 && t <= 12588 || t >= 44032 && t <= 55203 || t >= 19968 && t <= 40869 || t == 12295 || t >= 12321 && t <= 12329
        }
        ,
        I.isNCNameChar = function(t) {
            return t >= 48 && t <= 57 || t >= 1632 && t <= 1641 || t >= 1776 && t <= 1785 || t >= 2406 && t <= 2415 || t >= 2534 && t <= 2543 || t >= 2662 && t <= 2671 || t >= 2790 && t <= 2799 || t >= 2918 && t <= 2927 || t >= 3047 && t <= 3055 || t >= 3174 && t <= 3183 || t >= 3302 && t <= 3311 || t >= 3430 && t <= 3439 || t >= 3664 && t <= 3673 || t >= 3792 && t <= 3801 || t >= 3872 && t <= 3881 || t == 46 || t == 45 || t == 95 || I.isLetter(t) || t >= 768 && t <= 837 || t >= 864 && t <= 865 || t >= 1155 && t <= 1158 || t >= 1425 && t <= 1441 || t >= 1443 && t <= 1465 || t >= 1467 && t <= 1469 || t == 1471 || t >= 1473 && t <= 1474 || t == 1476 || t >= 1611 && t <= 1618 || t == 1648 || t >= 1750 && t <= 1756 || t >= 1757 && t <= 1759 || t >= 1760 && t <= 1764 || t >= 1767 && t <= 1768 || t >= 1770 && t <= 1773 || t >= 2305 && t <= 2307 || t == 2364 || t >= 2366 && t <= 2380 || t == 2381 || t >= 2385 && t <= 2388 || t >= 2402 && t <= 2403 || t >= 2433 && t <= 2435 || t == 2492 || t == 2494 || t == 2495 || t >= 2496 && t <= 2500 || t >= 2503 && t <= 2504 || t >= 2507 && t <= 2509 || t == 2519 || t >= 2530 && t <= 2531 || t == 2562 || t == 2620 || t == 2622 || t == 2623 || t >= 2624 && t <= 2626 || t >= 2631 && t <= 2632 || t >= 2635 && t <= 2637 || t >= 2672 && t <= 2673 || t >= 2689 && t <= 2691 || t == 2748 || t >= 2750 && t <= 2757 || t >= 2759 && t <= 2761 || t >= 2763 && t <= 2765 || t >= 2817 && t <= 2819 || t == 2876 || t >= 2878 && t <= 2883 || t >= 2887 && t <= 2888 || t >= 2891 && t <= 2893 || t >= 2902 && t <= 2903 || t >= 2946 && t <= 2947 || t >= 3006 && t <= 3010 || t >= 3014 && t <= 3016 || t >= 3018 && t <= 3021 || t == 3031 || t >= 3073 && t <= 3075 || t >= 3134 && t <= 3140 || t >= 3142 && t <= 3144 || t >= 3146 && t <= 3149 || t >= 3157 && t <= 3158 || t >= 3202 && t <= 3203 || t >= 3262 && t <= 3268 || t >= 3270 && t <= 3272 || t >= 3274 && t <= 3277 || t >= 3285 && t <= 3286 || t >= 3330 && t <= 3331 || t >= 3390 && t <= 3395 || t >= 3398 && t <= 3400 || t >= 3402 && t <= 3405 || t == 3415 || t == 3633 || t >= 3636 && t <= 3642 || t >= 3655 && t <= 3662 || t == 3761 || t >= 3764 && t <= 3769 || t >= 3771 && t <= 3772 || t >= 3784 && t <= 3789 || t >= 3864 && t <= 3865 || t == 3893 || t == 3895 || t == 3897 || t == 3902 || t == 3903 || t >= 3953 && t <= 3972 || t >= 3974 && t <= 3979 || t >= 3984 && t <= 3989 || t == 3991 || t >= 3993 && t <= 4013 || t >= 4017 && t <= 4023 || t == 4025 || t >= 8400 && t <= 8412 || t == 8417 || t >= 12330 && t <= 12335 || t == 12441 || t == 12442 || t == 183 || t == 720 || t == 721 || t == 903 || t == 1600 || t == 3654 || t == 3782 || t == 12293 || t >= 12337 && t <= 12341 || t >= 12445 && t <= 12446 || t >= 12540 && t <= 12542
        }
        ,
        I.coalesceText = function(t) {
            for (var i = t.firstChild; i != null; i = i.nextSibling)
                if (i.nodeType == 3 || i.nodeType == 4) {
                    var c = i.nodeValue
                      , m = i;
                    for (i = i.nextSibling; i != null && (i.nodeType == 3 || i.nodeType == 4); ) {
                        c += i.nodeValue;
                        var h = i;
                        i = i.nextSibling,
                        h.parentNode.removeChild(h)
                    }
                    if (m.nodeType == 4) {
                        var x = m.parentNode;
                        if (m.nextSibling == null)
                            x.removeChild(m),
                            x.appendChild(x.ownerDocument.createTextNode(c));
                        else {
                            var k = m.nextSibling;
                            x.removeChild(m),
                            x.insertBefore(x.ownerDocument.createTextNode(c), k)
                        }
                    } else
                        m.nodeValue = c;
                    if (i == null)
                        break
                } else
                    i.nodeType == 1 && I.coalesceText(i)
        }
        ,
        I.instance_of = function(t, i) {
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
        I.getElementById = function(t, i) {
            if (t.nodeType == 1 && (t.getAttribute("id") == i || t.getAttributeNS(null, "id") == i))
                return t;
            for (var c = t.firstChild; c != null; c = c.nextSibling) {
                var m = I.getElementById(c, i);
                if (m != null)
                    return m
            }
            return null
        }
        ;
        var Wt = function() {
            function t(c, m) {
                var h = m ? ": " + m.toString() : "";
                switch (c) {
                case i.INVALID_EXPRESSION_ERR:
                    return "Invalid expression" + h;
                case i.TYPE_ERR:
                    return "Type error" + h
                }
                return null
            }
            function i(c, m, h) {
                var x = Error.call(this, t(c, m) || h);
                return x.code = c,
                x.exception = m,
                x
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
            this.context.namespaceResolver = new le(i)
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
            return new $(m,i)
        }
        ,
        le.prototype = {},
        le.prototype.constructor = le,
        le.superclass = Object.prototype;
        function le(t) {
            this.xpathNSResolver = t
        }
        le.prototype.getNamespace = function(t, i) {
            return this.xpathNSResolver == null ? null : this.xpathNSResolver.lookupNamespaceURI(t)
        }
        ,
        se.prototype = {},
        se.prototype.constructor = se,
        se.superclass = Object.prototype;
        function se(t) {
            this.node = t,
            this.namespaceResolver = new Zt
        }
        se.prototype.lookupNamespaceURI = function(t) {
            return this.namespaceResolver.getNamespace(t, this.node)
        }
        ,
        $.prototype = {},
        $.prototype.constructor = $,
        $.superclass = Object.prototype;
        function $(t, i) {
            switch (i == $.ANY_TYPE && (t.constructor === W ? i = $.STRING_TYPE : t.constructor === H ? i = $.NUMBER_TYPE : t.constructor === U ? i = $.BOOLEAN_TYPE : t.constructor === R && (i = $.UNORDERED_NODE_ITERATOR_TYPE)),
            this.resultType = i,
            i) {
            case $.NUMBER_TYPE:
                this.numberValue = t.numberValue();
                return;
            case $.STRING_TYPE:
                this.stringValue = t.stringValue();
                return;
            case $.BOOLEAN_TYPE:
                this.booleanValue = t.booleanValue();
                return;
            case $.ANY_UNORDERED_NODE_TYPE:
            case $.FIRST_ORDERED_NODE_TYPE:
                if (t.constructor === R) {
                    this.singleNodeValue = t.first();
                    return
                }
                break;
            case $.UNORDERED_NODE_ITERATOR_TYPE:
            case $.ORDERED_NODE_ITERATOR_TYPE:
                if (t.constructor === R) {
                    this.invalidIteratorState = !1,
                    this.nodes = t.toArray(),
                    this.iteratorIndex = 0;
                    return
                }
                break;
            case $.UNORDERED_NODE_SNAPSHOT_TYPE:
            case $.ORDERED_NODE_SNAPSHOT_TYPE:
                if (t.constructor === R) {
                    this.nodes = t.toArray(),
                    this.snapshotLength = this.nodes.length;
                    return
                }
                break
            }
            throw new Wt(Wt.TYPE_ERR)
        }
        $.prototype.iterateNext = function() {
            if (this.resultType != $.UNORDERED_NODE_ITERATOR_TYPE && this.resultType != $.ORDERED_NODE_ITERATOR_TYPE)
                throw new Wt(Wt.TYPE_ERR);
            return this.nodes[this.iteratorIndex++]
        }
        ,
        $.prototype.snapshotItem = function(t) {
            if (this.resultType != $.UNORDERED_NODE_SNAPSHOT_TYPE && this.resultType != $.ORDERED_NODE_SNAPSHOT_TYPE)
                throw new Wt(Wt.TYPE_ERR);
            return this.nodes[t]
        }
        ,
        $.ANY_TYPE = 0,
        $.NUMBER_TYPE = 1,
        $.STRING_TYPE = 2,
        $.BOOLEAN_TYPE = 3,
        $.UNORDERED_NODE_ITERATOR_TYPE = 4,
        $.ORDERED_NODE_ITERATOR_TYPE = 5,
        $.UNORDERED_NODE_SNAPSHOT_TYPE = 6,
        $.ORDERED_NODE_SNAPSHOT_TYPE = 7,
        $.ANY_UNORDERED_NODE_TYPE = 8,
        $.FIRST_ORDERED_NODE_TYPE = 9;
        function ut(t, i) {
            t.createExpression = function(c, m) {
                try {
                    return new ct(c,m,i)
                } catch (h) {
                    throw new Wt(Wt.INVALID_EXPRESSION_ERR,h)
                }
            }
            ,
            t.createNSResolver = function(c) {
                return new se(c)
            }
            ,
            t.evaluate = function(c, m, h, x, k) {
                if (x < 0 || x > 9)
                    throw {
                        code: 0,
                        toString: function() {
                            return "Request type not supported"
                        }
                    };
                return t.createExpression(c, h, i).evaluate(m, x, k)
            }
        }
        try {
            var He = !0;
            try {
                document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("XPath", null) && (He = !1)
            } catch {}
            He && ut(document, new w)
        } catch {}
        ut(a, new w),
        function() {
            var t = new w
              , i = new Zt
              , c = new kt
              , m = new xt;
            function h(T) {
                return {
                    getNamespace: function(z, it) {
                        var Tt = T(z, it);
                        return Tt || i.getNamespace(z, it)
                    }
                }
            }
            function x(T) {
                return h(T.getNamespace.bind(T))
            }
            function k(T) {
                return h(function(z) {
                    return T[z]
                })
            }
            function Q(T) {
                return T && typeof T.getNamespace == "function" ? x(T) : typeof T == "function" ? h(T) : typeof T == "object" ? k(T) : i
            }
            function nt(T) {
                if (T === null || typeof T > "u" || T instanceof W || T instanceof U || T instanceof H || T instanceof R)
                    return T;
                switch (typeof T) {
                case "string":
                    return new W(T);
                case "boolean":
                    return new U(T);
                case "number":
                    return new H(T)
                }
                var z = new R;
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
            function Ct(T) {
                return G(T.getFunction.bind(T))
            }
            function S(T) {
                return G(function(z) {
                    return T[z]
                })
            }
            function ie(T) {
                return T && typeof T.getFunction == "function" ? Ct(T) : typeof T == "function" ? G(T) : typeof T == "object" ? S(T) : c
            }
            function ae(T) {
                return {
                    getVariable: function(z, it) {
                        var Tt = T(z, it);
                        return nt(Tt)
                    }
                }
            }
            function Kt(T) {
                if (T) {
                    if (typeof T.getVariable == "function")
                        return ae(T.getVariable.bind(T));
                    if (typeof T == "function")
                        return ae(T);
                    if (typeof T == "object")
                        return ae(function(z) {
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
                z.functionResolver = ie(T.functions),
                z.variableResolver = Kt(T.variables),
                z.expressionContextNode = T.node,
                Ft("allowAnyNamespaceForNoPrefix", z, T),
                Ft("isHtml", z, T)) : z.namespaceResolver = i,
                z
            }
            function Ve(T, z) {
                var it = Z(z);
                return T.evaluate(it)
            }
            var at = {
                evaluate: function(T) {
                    return Ve(this.expression, T)
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
            function Se(T) {
                var z = t.parse(T);
                return Object.create(at, {
                    expression: {
                        value: z
                    }
                })
            }
            a.parse = Se
        }(),
        a.XPath = et,
        a.XPathParser = w,
        a.XPathResult = $,
        a.Step = N,
        a.NodeTest = C,
        a.BarOperation = It,
        a.NamespaceResolver = Zt,
        a.FunctionResolver = kt,
        a.VariableResolver = xt,
        a.Utilities = I,
        a.XPathContext = Ut,
        a.XNodeSet = R,
        a.XBoolean = U,
        a.XString = W,
        a.XNumber = H,
        a.select = function(t, i, c) {
            return a.selectWithResolver(t, i, null, c)
        }
        ,
        a.useNamespaces = function(t) {
            var i = {
                mappings: t || {},
                lookupNamespaceURI: function(c) {
                    return this.mappings[c]
                }
            };
            return function(c, m, h) {
                return a.selectWithResolver(c, m, i, h)
            }
        }
        ,
        a.selectWithResolver = function(t, i, c, m) {
            var h = new ct(t,c,new w)
              , x = $.ANY_TYPE
              , k = h.evaluate(i, x, null);
            return k.resultType == $.STRING_TYPE ? k = k.stringValue : k.resultType == $.NUMBER_TYPE ? k = k.numberValue : k.resultType == $.BOOLEAN_TYPE ? k = k.booleanValue : (k = k.nodes,
            m && (k = k[0])),
            k
        }
        ,
        a.select1 = function(t, i) {
            return a.select(t, i, !0)
        }
    }
    )(s)
}
)(ke);
const tu = Ro(ke);
class Po {
    static getPossibleAcceleratorsForUser(s, a) {
        dt.get("/users/" + s + "/possibleaccelerators", u => {
            a(u)
        }
        )
    }
}
const ne = class ne {
    static addAcceleratorLocations(s, a) {
        if (s = s.toLowerCase(),
        this._acceleratorContainers || (this._acceleratorContainers = {}),
        (!this._acceleratorContainers[s] || a.match(/^https.*/) && !this._acceleratorContainers[s].match(/^https.*/)) && (this._acceleratorContainers[s] = a),
        this._acceleratorPossible = !0,
        this._listeners[s])
            for (const u of this._listeners[s])
                u && u()
    }
    static clearAcceleratorOutlines() {
        this._acceleratorPossible = !1;
        for (const s in this._acceleratorContainers)
            delete this._acceleratorContainers[s];
        this._acceleratorUriFailures = []
    }
    static addAcceleratorFailure(s) {
        this._acceleratorUriFailures.push(s)
    }
    static stopListeningForAcceleratorContainer(s) {
        for (const a of Object.keys(this._listeners)) {
            const u = this._listeners[a].indexOf(s);
            u > -1 && this._listeners[a].splice(u, 1)
        }
    }
    static listenForAcceleratorContainer(s, a) {
        s = s.toLowerCase().replace(/_/g, "-"),
        this._listeners[s] || (this._listeners[s] = []),
        this._listeners[s].indexOf(a) === -1 && this._listeners[s].push(a),
        this.checkForAcceleratorByContainer(s) && a && a()
    }
    static checkForAcceleratorByContainer(s) {
        return this.getAcceleratorForContainer(s) != null
    }
    static getAcceleratorForContainer(s) {
        return this._acceleratorContainers ? this._acceleratorContainers[s] : null
    }
    static getConfigOrSimDef(s, a, u) {
        if (s.toLowerCase().endsWith(".js") || s.toLowerCase().endsWith(".configjs")) {
            let f = s;
            return s.toLowerCase().endsWith(".js") && (f = s.substring(0, s.length - 3) + ".configjs"),
            new Promise(function(p, y) {
                ne.get(f, a, u).then(function(_) {
                    p(_)
                }).catch(_ => {
                    ne.get(s, a, u).then(function(b) {
                        p(b)
                    }, function(b) {
                        y(b)
                    }).catch(function(b) {
                        y(b)
                    })
                }
                )
            }
            )
        } else
            return new Promise(function(f, p) {
                ne.get(s, a, u).then(function(y) {
                    f(y)
                }, function(y) {
                    p(y)
                }).catch(function(y) {
                    p(y)
                })
            }
            )
    }
    static get(s, a=!1, u=!1, f=!1) {
        return this.getWithUrl(s, a, u, f).then( ([p]) => p)
    }
    static getWithUrl(s, a=!1, u=!1, f=!1) {
        this.requestAccelerators();
        let p = s.toLowerCase();
        const y = rr.Current.getContentServerUri();
        if (p.indexOf(y) >= 0) {
            const _ = this.getContentContainer(p, y);
            _.indexOf("_") >= 0 && (p = p.replace(_, _.replace(/_/g, "-")));
            const b = this._acceleratorContainers;
            if (this._acceleratorPossible && this._acceleratorUriFailures.indexOf(p) === -1 && p.indexOf(y) >= 0 && b[_.toLowerCase()] != null) {
                const Y = this.getContentPath(p);
                return new Promise(function(q, P) {
                    f ? De.getArrayBuffer(Y, a, u).then(function(M) {
                        q([M, Y])
                    }, function() {
                        ne.addAcceleratorFailure(p),
                        De.getArrayBuffer(p, a, u).then(function(M) {
                            q([M, p])
                        }, function(M) {
                            P(M)
                        })
                    }) : De.get(Y, a, u).then(function(M) {
                        q([M, Y])
                    }, function() {
                        ne.addAcceleratorFailure(p),
                        De.get(p, a, u).then(function(M) {
                            q([M, p])
                        }, function(M) {
                            P(M)
                        })
                    })
                }
                )
            }
        }
        return f ? De.getArrayBuffer(p, a, u).then(_ => [_, p]) : De.get(p, a, u).then(_ => [_, p])
    }
    static getContentContainer(s, a) {
        let u = s.substring(s.indexOf(a) + a.length + 1);
        if (u.indexOf("_version") === 0) {
            const _ = u.indexOf("/")
              , b = u.indexOf("\\");
            _ > 0 && (b === -1 || b > _) ? u = u.substring(_ + 1) : u = u.substring(b + 1)
        }
        let f;
        const p = u.indexOf("/")
          , y = u.indexOf("\\");
        return p > 0 ? y > 0 && y < p ? f = u.substring(0, y) : f = u.substring(0, p) : y > 0 ? f = u.substring(0, y) : f = u,
        f
    }
    static getContentPathAsync(s) {
        return new Promise(a => {
            this.requestAccelerators().then( () => {
                const u = this.getContentPath(s);
                u === s ? a(s) : De.isUriValid(u).then(f => {
                    a(f ? u : s)
                }
                )
            }
            )
        }
        )
    }
    static getContentPath(s) {
        if (this.requestAccelerators(),
        this._acceleratorPossible && this._acceleratorUriFailures.indexOf(s) === -1) {
            const a = rr.Current.getContentServerUri();
            if (s.indexOf(a) >= 0) {
                let u = this.getContentContainer(s, a);
                if (u.indexOf("_") > -1) {
                    const p = u.replace("_", "-");
                    s = s.replace(u, p),
                    u = p
                }
                const f = this._acceleratorContainers[u.toLowerCase()];
                if (f != null)
                    return s.replace(a, f)
            }
        }
        return s
    }
    static requestAccelerators() {
        return this._acceleratorRequestPromise || (this._acceleratorRequestPromise = new Promise(s => {
            Io.getFirstSignedOnUser().then(a => {
                Po.getPossibleAcceleratorsForUser(a.userProfile.userProfileId, u => {
                    this.getContainersOnAccelerator(u).then(s)
                }
                )
            }
            )
        }
        )),
        this._acceleratorRequestPromise
    }
    static getContainersOnAccelerator(s) {
        if (!s)
            return Promise.resolve();
        this.clearAcceleratorOutlines();
        const a = [];
        for (let u = 0; u < s.length; u++) {
            const f = s[u];
            a.push(new Promise(p => {
                const y = new XMLHttpRequest;
                y.onreadystatechange = function() {
                    if (y.readyState === 4) {
                        if (y.status >= 200 && y.status < 400)
                            try {
                                if (y.responseText) {
                                    const _ = y.responseText.split(`\r
`)
                                      , b = y.responseURL.replace("/containers", "");
                                    for (let A = 0; A < _.length; A++)
                                        ne.addAcceleratorLocations(_[A], b)
                                }
                            } catch {}
                        p()
                    }
                }
                ,
                y.open("GET", f + "/containers", !0),
                y.timeout = 3e4,
                y.send()
            }
            ))
        }
        return Promise.all(a)
    }
}
;
ne._acceleratorUriFailures = [],
ne._acceleratorPossible = !1,
ne._listeners = {};
let Ce = ne;
class J {
    static getDirectoryName(s) {
        const a = s.replace(/\//g, "\\").split("\\");
        let u = "";
        for (let f = 0; f < a.length - 1; f++)
            u.length > 0 && (u += "\\"),
            u += a[f];
        return u
    }
    static isPathRooted(s) {
        return s.indexOf(":") > -1
    }
    static getExtension(s) {
        return s.split(".").pop().toLowerCase()
    }
    static changeExtension(s, a) {
        const u = s.lastIndexOf(".");
        return u > -1 ? s.substr(0, u) + a : s + a
    }
    static combine(s, a) {
        return s[s.length - 1] === "\\" && (s = s.substr(0, s.length - 1)),
        a[0] === "\\" && (a = a.substr(1, a.length - 1)),
        s.length > 0 ? s + "\\" + a : a
    }
    static getFileName(s) {
        const a = s.replace(/\//g, "\\").split("\\");
        return a.length > 0 ? a[a.length - 1] : s
    }
    static getFileNameWithoutExtension(s) {
        s = J.getFileName(s);
        const a = s.lastIndexOf(".");
        return a > -1 ? s.substr(0, a) : s
    }
    static expandRelativeUrl(s, a) {
        const u = s.substring(0, s.lastIndexOf("/") + 1);
        return (a.indexOf(":") > -1 ? a : u + a).toLowerCase()
    }
    static convertBackslashesToForward(s) {
        return s.replace(/\\/g, "/")
    }
    static convertForwardSlashesToBack(s) {
        return s.replace(/\//g, "\\")
    }
    static rootTilde(s) {
        return s.indexOf("~\\") === 0 ? s.replace("~\\", "\\") : s.indexOf("~/") === 0 ? s.replace("~/", "/") : s.indexOf("~") === 0 ? s.replace("~", "/") : s
    }
    static combinePaths(s, a) {
        return a.indexOf(s) === 0 ? a : s.endsWith("/") && a.indexOf("/") === 0 ? s + a.replace("/", "") : s.endsWith("\\") && a.indexOf("\\") === 0 || s.endsWith("/") && a.indexOf("\\") === 0 ? s + a.replace("\\", "") : s.endsWith("\\") && a.indexOf("/") === 0 ? s + a.replace("/", "") : !s.endsWith("\\") && !s.endsWith("/") && a.indexOf("/") !== 0 && a.indexOf("\\") !== 0 ? s + "/" + a : s + a
    }
}
class Wr {
    constructor(s) {
        this.XML = s
    }
    buildDict() {
        this._resourceDict = {},
        ke.select("//Resource", this.XML).forEach(a => {
            const u = a.getAttribute("href");
            this._resourceDict[u] || (this._resourceDict[u] = []),
            this._resourceDict[u].push(a)
        }
        )
    }
    getResourceNodesByHref(s) {
        return this._resourceDict || this.buildDict(),
        this._resourceDict[s] || []
    }
    getResourcesInFolderPath(s) {
        return ke.select(`//Resource[starts-with(translate(@href, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), '${s}')]`, this.XML)
    }
    get hasModernExams() {
        const s = ke.select("//Resource[contains(translate(@href, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz'), '.exam.xml')]", this.XML);
        return s != null && s.length > 0
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
  , ge = (d => (d[d.None = 0] = "None",
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
d))(ge || {})
  , Lo = (d => (d.DomainPractice = "domainpractice",
d))(Lo || {})
  , qn = (d => (d[d.Section = 0] = "Section",
d[d.Resource = 1] = "Resource",
d))(qn || {});
const Gr = {
    getSortString: d => {
        const s = function(u) {
            return parseInt(u, 10).toString(16).padStart(3, "0")
        };
        return d ? function(u) {
            let f = u;
            const p = f.match(/^(\d*)\.(\d*)\.(\d*)\s*(.*)|^(\d*)\.(\d*)\s*(.*)/);
            return p && p.length === 8 && (p[1] != null ? f = `${s(p[1])}.${s(p[2])}.${s(p[3])} ${p[4]}` : p[5] != null && (f = `${s(p[5])}.${s(p[6])} ${p[7]}`)),
            f
        }(d) : ""
    }
    ,
    sort: (d, s, a) => d == null ? null : d.sort( (u, f) => {
        var p, y;
        return Gr.getSortString((p = u[s]) == null ? void 0 : p.toString()).localeCompare(Gr.getSortString((y = f[s]) == null ? void 0 : y.toString()), a)
    }
    ),
    findResourcesByHref(d, s) {
        return !s || !d ? [] : s.contents.reduce( (f, p) => f.concat(p.sections), []).map(f => Qn(f, d.toLowerCase())).reduce( (f, p) => f.concat(p), [])
    }
};
function Qn(d, s) {
    return d.outlineType === qn.Section ? d.items.map(a => Qn(a, s)).reduce( (a, u) => a.concat(u), []) : d.href === s ? [d] : []
}
const Yo = sr("resource/demo.png")
  , Bo = sr("resource/exam.png")
  , Uo = sr("resource/sim.png")
  , Wo = sr("resource/text.png")
  , Ho = sr("resource/video.png")
  , Mt = class Mt {
    static getResourceTitle(s, a, u=!1) {
        if (a.nodeName === "TOC")
            return s("table_of_contents");
        if (a.nodeName === "Glossary")
            return s("glossary");
        {
            const f = a.getAttribute("title");
            if (f) {
                const p = a.getAttribute("index");
                return p && !u ? p + " " + f : f
            }
        }
    }
    static getResourceTitleAndIndex(s, a) {
        if (a.nodeName === "TOC")
            return {
                title: s("table_of_contents"),
                index: ""
            };
        if (a.nodeName === "Glossary")
            return {
                title: s("glossary"),
                index: ""
            };
        {
            const u = a.getAttribute("title");
            let f = "";
            return u && (f = a.getAttribute("index")),
            {
                title: u,
                index: f
            }
        }
    }
    static getResourceTitleAndIndex2(s) {
        const a = s.getAttribute("title");
        let u = "";
        return a && (u = s.getAttribute("index")),
        {
            title: a,
            index: u
        }
    }
    static getResourceIndex(s) {
        return s.getAttribute("index")
    }
    static getResourceType(s, a) {
        var p, y;
        if (a != null)
            return a.resourceType;
        let u = lt.Unknown;
        const f = (p = s.getAttribute("href")) == null ? void 0 : p.toLowerCase();
        switch (s.nodeName.toLowerCase()) {
        case "toc":
            f != null && J.getExtension(f).indexOf("htm") > -1 ? u = lt.Section : u = lt.TableOfContents;
            break;
        case "glossary":
            u = lt.Glossary;
            break;
        case "section":
            u = lt.Section;
            break;
        case "resource":
            const _ = (y = s.getAttribute("type")) == null ? void 0 : y.toLowerCase();
            if (_ === "pbq")
                u = lt.Exam;
            else if (f != null) {
                const b = J.getExtension(f);
                switch (b) {
                case "jpg":
                case "png":
                    u = lt.Image;
                    break;
                case "txt":
                case "text":
                case "htm":
                case "html":
                    _ === "sim" ? u = lt.Simulation : u = lt.Text;
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
                    _ === "sim" ? u = lt.Simulation : u = lt.Exam;
                    break;
                case "xml":
                    if (f.toLowerCase().endsWith("question.xml"))
                        _ === "sim" ? u = lt.Simulation : u = lt.Question;
                    else if (f.toLowerCase().endsWith(".exam.xml"))
                        u = lt.Exam;
                    else
                        throw new Error("Unrecognized file extension: " + b);
                    break;
                default:
                    if (_ === "livelab")
                        u = lt.Simulation;
                    else
                        throw new Error("Unrecognized file extension: " + b)
                }
            }
            break;
        default:
            throw new Error("Unrecognized node type: " + s.nodeName.toLowerCase())
        }
        return u
    }
    static getResourceSubType(s, a) {
        var f;
        if (a != null)
            return a.resourceSubType;
        const u = (f = s.getAttribute("type")) == null ? void 0 : f.toLowerCase();
        switch (Mt.getResourceType(s, a)) {
        case lt.Video:
            if (u === "demo")
                return ge.Demo;
            break;
        case lt.Simulation:
            if (s.getAttribute("href").toLowerCase().endsWith(".question.xml"))
                return ge.QuestionAsSimulation;
            break;
        case lt.Section:
            if (u === "domainpractice")
                return ge.DomainPractice;
            break;
        case lt.Exam:
            if (u === "pbq")
                return ge.PBQ;
            if (u === "interactive")
                return ge.Interactive;
            break
        }
        return ge.None
    }
    static getHref(s, a=!0, u=!1) {
        if (!u && this.getResourceType(s) === lt.TableOfContents)
            return null;
        let f = s.getAttribute("href");
        if (a) {
            const p = s.getAttribute("element");
            p != null && p.length > 0 && (f += "?" + p)
        }
        return f != null ? f.toLowerCase() : f
    }
    static getResourceImage(s, a) {
        let u;
        switch (Mt.getResourceType(s, a)) {
        case lt.Video:
            Mt.getResourceSubType(s, a) === ge.Demo ? u = Yo : u = Ho;
            break;
        case lt.Text:
            u = Wo;
            break;
        case lt.Simulation:
            u = Uo;
            break;
        case lt.Exam:
        case lt.Question:
            u = Bo;
            break;
        default:
            u = null;
            break
        }
        return u
    }
    static getSection(s, a) {
        a = a || !1;
        let u = s.parentNode
          , f = null;
        for (; u && u.parentNode != null && u.parentNode.nodeName.toLocaleLowerCase() === "section"; )
            f = u,
            u = u.parentNode;
        return a && (u = f),
        u ? {
            sectionIndex: u.getAttribute("index"),
            sectionTitle: u.getAttribute("title"),
            sectionType: u.getAttribute("type")
        } : null
    }
    static getSubSection(s) {
        return this.getSection(s, !0)
    }
    static extractRelativePath(s, a) {
        s = J.convertForwardSlashesToBack(s),
        a = J.convertForwardSlashesToBack(a);
        let u = s.replace(/\\$/, "");
        for (; u.length > 0 && a.indexOf("..\\") === 0; )
            u = J.getDirectoryName(u),
            a = a.substring(3);
        if (J.isPathRooted(a)) {
            const f = u.split("\\")
              , p = a.split("\\");
            let y = 0;
            for (; y < f.length && y < p.length && gt.stringCompareCaseInsensitive(f[y], p[y]) === 0; )
                y++;
            if (y > 0) {
                let _ = ""
                  , b = f.length - y;
                gt.isNullOrEmpty(J.getExtension(s)) || b--;
                for (let A = 1; A <= b; A++)
                    _.length === 0 ? _ += ".." : _ += "\\..";
                for (let A = y; A < p.length; A++)
                    _.length === 0 ? _ = p[A] : _ += "\\" + p[A];
                return _
            }
        }
        return J.combine(u, a)
    }
    static getCourseRootUrl(s, a, u) {
        const f = rr.Current.getContentServerUri(a).toLowerCase()
          , p = new URL(f).pathname.length > 1
          , y = s.locale.toLowerCase()
          , _ = a.outlineType == null || a.outlineType === ze.Html5;
        let b = a.outlineHref.replace(/\.xml$/i, "").replace(/_/g, "-").toLowerCase();
        return _ ? p ? f.endsWith("/") ? f : f + "/" : (y && (b += `-${y}`),
        `${f}/${b}/${s.locale}/`) : u && a.outlineType === ze.Silverlight ? `http://content.testout.com/${a.outlineHref.replace(/\.xml$/i, "").toLowerCase()}/` : p ? f.toLowerCase() : `${f}/${b}/`
    }
    static getOutlineDirectory(s) {
        return s.outlineType == null || s.outlineType === ze.Html5 ? "" : "Outlines"
    }
    static getOutlineUrl(s, a) {
        const u = Mt.getOutlineDirectory(a);
        let f = Mt.getCourseRootUrl(s, a);
        return u.length > 0 && (f += u + "/"),
        f += a.outlineHref,
        J.convertBackslashesToForward(f).toLowerCase()
    }
    static getResourceUrl(s, a, u) {
        if (gt.isNullOrEmpty(u))
            return "";
        if (J.isPathRooted(u))
            return u;
        if (!s)
            return "";
        const f = Mt.getCourseRootUrl(s, a);
        return J.convertBackslashesToForward(f + this.getRelativeResourceUrl(s, a, u))
    }
    static getRelativeResourceUrl(s, a, u) {
        if (gt.isNullOrEmpty(u))
            return "";
        if (J.isPathRooted(u))
            return u;
        const f = Mt.getOutlineDirectory(a);
        let p = a.outlineType === ze.Silverlight ? u.replace(/^~\\/, "../") : u.replace(/^~\\/, "");
        return p.indexOf("~") > -1 && (p = p.replace(/^~/, "")),
        p.match(/\.exam\.xml$/i) && (p = p.replace(/\.exam\.xml$/i, ".exam.fex")),
        p.match(/\.question\.xml$/i) ? p = p.replace(/\.question\.xml$/i, ".question.fex") : p.match(/\.exm/i) && (p = J.getDirectoryName(p) + "/qx/" + J.changeExtension(J.getFileName(p), ".exam.fex")),
        J.convertBackslashesToForward(Mt.extractRelativePath(f, p)).toLowerCase()
    }
    static async getOutline(s, a) {
        if (s && a) {
            const u = Mt.getOutlineUrl(s, a)
              , f = await Ce.get(u, !1, !0);
            return new Wr(f)
        } else
            return null
    }
    static async loadOutline(s, a, u) {
        if (s && a) {
            const f = `outline-${a.productVersionId}`
              , p = u && u[f];
            if (p)
                return p;
            {
                if (!a.outlineHref)
                    return null;
                const y = Mt.getOutlineUrl(s, a)
                  , _ = await Ce.get(y, !1, !0)
                  , b = new Wr(_);
                return u && (u[f] = b),
                b
            }
        } else
            return null
    }
    static async loadObjectives(s, a, u) {
        if (s && a) {
            const f = `objectives-${a.productVersionId}`
              , p = u && u[f];
            if (p)
                return p;
            {
                const y = Mt.getOutlineUrl(s, a).replace(/\.xml$/i, ".objectives.xml")
                  , _ = await Ce.get(y, !1, !0)
                  , b = new Wr(_);
                return u && (u[f] = b),
                b
            }
        } else
            return null
    }
}
;
Mt.getResourceSortString = function(s, a) {
    return Gr.getSortString(Mt.getResourceTitle(s, a, !1))
}
;
let $r = Mt;
var Vo = (d => (d[d.Lab = 0] = "Lab",
d[d.Exam = 1] = "Exam",
d[d.Review = 2] = "Review",
d[d.Quiz = 3] = "Quiz",
d[d.Assessment = 4] = "Assessment",
d))(Vo || {});
class eu {
    static getTabInteropStatus(s, a, u) {
        return dt.get("/tabinterops/" + s + "/" + a, u)
    }
    static getTabInteropForQuestion(s, a) {
        return dt.get(`/tabinterops/user/${s}/questionid/${a}`)
    }
    static async addSecondsToQuestion(s, a, u) {
        return dt.put(`/tabinterops/user/${s}/questionid/${a}/seconds/${u}`)
    }
    static async addSeconds(s, a, u) {
        return dt.put(`/tabinterops/${s}/${a}/additionalseconds/${u}`)
    }
    static setTabInteropQuestion(s, a, u) {
        return dt.put(`/tabinterops/${s}/${a}/questionid/${u}`)
    }
    static async setTabOpened(s, a, u, f) {
        return u && await dt.put(`/tabinterops/${s}/${a}/lock/${u}?clientId=${f}`),
        await dt.put(`/tabinterops/${s}/${a}/tabopened/true`)
    }
    static abandonTabInterop(s, a) {
        return dt.put("/tabinterops/" + s + "/" + a + "/tabopened/false", null)
    }
    static deleteTabInterop(s, a) {
        return dt.delete("/tabinterops/" + s + "/" + a)
    }
    static sendTabResponse(s, a, u, f) {
        return dt.put("/tabinterops/" + s + "/" + a + "/tabresponse", u, f)
    }
    static buildTabInteropId(s) {
        switch (s) {
        case 0:
            return Vr().toString().replace(/.$/, "0");
        case 1:
        case 2:
        case 3:
        case 4:
            return Vr().toString().replace(/.$/, "1");
        default:
            throw new Error("Invalid TypeType in buildTabInteropId")
        }
    }
}
function Xn(d, s, a, u) {
    return new (a || (a = Promise))(function(f, p) {
        function y(A) {
            try {
                b(u.next(A))
            } catch (Y) {
                p(Y)
            }
        }
        function _(A) {
            try {
                b(u.throw(A))
            } catch (Y) {
                p(Y)
            }
        }
        function b(A) {
            var Y;
            A.done ? f(A.value) : (Y = A.value,
            Y instanceof a ? Y : new a(function(q) {
                q(Y)
            }
            )).then(y, _)
        }
        b((u = u.apply(d, [])).next())
    }
    )
}
function jo(d) {
    throw new Error('Could not dynamically require "' + d + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')
}
var Hr, Jn = {
    exports: {}
};
(Hr = Jn).exports = function() {
    var d, s;
    function a() {
        return d.apply(null, arguments)
    }
    function u(e) {
        d = e
    }
    function f(e) {
        return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]"
    }
    function p(e) {
        return e != null && Object.prototype.toString.call(e) === "[object Object]"
    }
    function y(e, r) {
        return Object.prototype.hasOwnProperty.call(e, r)
    }
    function _(e) {
        if (Object.getOwnPropertyNames)
            return Object.getOwnPropertyNames(e).length === 0;
        var r;
        for (r in e)
            if (y(e, r))
                return !1;
        return !0
    }
    function b(e) {
        return e === void 0
    }
    function A(e) {
        return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]"
    }
    function Y(e) {
        return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]"
    }
    function q(e, r) {
        var n, o = [], l = e.length;
        for (n = 0; n < l; ++n)
            o.push(r(e[n], n));
        return o
    }
    function P(e, r) {
        for (var n in r)
            y(r, n) && (e[n] = r[n]);
        return y(r, "toString") && (e.toString = r.toString),
        y(r, "valueOf") && (e.valueOf = r.valueOf),
        e
    }
    function M(e, r, n, o) {
        return hn(e, r, n, o, !0).utc()
    }
    function tt() {
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
        return e._pf == null && (e._pf = tt()),
        e._pf
    }
    function w(e) {
        var r = null
          , n = !1
          , o = e._d && !isNaN(e._d.getTime());
        return o && (r = O(e),
        n = s.call(r.parsedDateParts, function(l) {
            return l != null
        }),
        o = r.overflow < 0 && !r.empty && !r.invalidEra && !r.invalidMonth && !r.invalidWeekday && !r.weekdayMismatch && !r.nullInput && !r.invalidFormat && !r.userInvalidated && (!r.meridiem || r.meridiem && n),
        e._strict && (o = o && r.charsLeftOver === 0 && r.unusedTokens.length === 0 && r.bigHour === void 0)),
        Object.isFrozen != null && Object.isFrozen(e) ? o : (e._isValid = o,
        e._isValid)
    }
    function et(e) {
        var r = M(NaN);
        return e != null ? P(O(r), e) : O(r).userInvalidated = !0,
        r
    }
    s = Array.prototype.some ? Array.prototype.some : function(e) {
        var r, n = Object(this), o = n.length >>> 0;
        for (r = 0; r < o; r++)
            if (r in n && e.call(this, n[r], r, n))
                return !0;
        return !1
    }
    ;
    var Rt = a.momentProperties = []
      , rt = !1;
    function At(e, r) {
        var n, o, l, g = Rt.length;
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
            for (n = 0; n < g; n++)
                b(l = r[o = Rt[n]]) || (e[o] = l);
        return e
    }
    function _t(e) {
        At(this, e),
        this._d = new Date(e._d != null ? e._d.getTime() : NaN),
        this.isValid() || (this._d = new Date(NaN)),
        rt === !1 && (rt = !0,
        a.updateOffset(this),
        rt = !1)
    }
    function j(e) {
        return e instanceof _t || e != null && e._isAMomentObject != null
    }
    function Ht(e) {
        a.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e)
    }
    function yt(e, r) {
        var n = !0;
        return P(function() {
            if (a.deprecationHandler != null && a.deprecationHandler(null, e),
            n) {
                var o, l, g, v = [], F = arguments.length;
                for (l = 0; l < F; l++) {
                    if (o = "",
                    typeof arguments[l] == "object") {
                        for (g in o += `
[` + l + "] ",
                        arguments[0])
                            y(arguments[0], g) && (o += g + ": " + arguments[0][g] + ", ");
                        o = o.slice(0, -2)
                    } else
                        o = arguments[l];
                    v.push(o)
                }
                Ht(e + `
Arguments: ` + Array.prototype.slice.call(v).join("") + `
` + new Error().stack),
                n = !1
            }
            return r.apply(this, arguments)
        }, r)
    }
    var Vt, jt = {};
    function Gt(e, r) {
        a.deprecationHandler != null && a.deprecationHandler(e, r),
        jt[e] || (Ht(r),
        jt[e] = !0)
    }
    function wt(e) {
        return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]"
    }
    function Qt(e) {
        var r, n;
        for (n in e)
            y(e, n) && (wt(r = e[n]) ? this[n] = r : this["_" + n] = r);
        this._config = e,
        this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
    }
    function Pt(e, r) {
        var n, o = P({}, e);
        for (n in r)
            y(r, n) && (p(e[n]) && p(r[n]) ? (o[n] = {},
            P(o[n], e[n]),
            P(o[n], r[n])) : r[n] != null ? o[n] = r[n] : delete o[n]);
        for (n in e)
            y(e, n) && !y(r, n) && p(e[n]) && (o[n] = P({}, o[n]));
        return o
    }
    function Lt(e) {
        e != null && this.set(e)
    }
    a.suppressDeprecationWarnings = !1,
    a.deprecationHandler = null,
    Vt = Object.keys ? Object.keys : function(e) {
        var r, n = [];
        for (r in e)
            y(e, r) && n.push(r);
        return n
    }
    ;
    var Xt = {
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        nextWeek: "dddd [at] LT",
        lastDay: "[Yesterday at] LT",
        lastWeek: "[Last] dddd [at] LT",
        sameElse: "L"
    };
    function Jt(e, r, n) {
        var o = this._calendar[e] || this._calendar.sameElse;
        return wt(o) ? o.call(r, n) : o
    }
    function vt(e, r, n) {
        var o = "" + Math.abs(e)
          , l = r - o.length;
        return (e >= 0 ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, l)).toString().substr(1) + o
    }
    var Yt = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g
      , It = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g
      , X = {}
      , xe = {};
    function B(e, r, n, o) {
        var l = o;
        typeof o == "string" && (l = function() {
            return this[o]()
        }
        ),
        e && (xe[e] = l),
        r && (xe[r[0]] = function() {
            return vt(l.apply(this, arguments), r[1], r[2])
        }
        ),
        n && (xe[n] = function() {
            return this.localeData().ordinal(l.apply(this, arguments), e)
        }
        )
    }
    function N(e) {
        return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
    }
    function C(e) {
        var r, n, o = e.match(Yt);
        for (r = 0,
        n = o.length; r < n; r++)
            xe[o[r]] ? o[r] = xe[o[r]] : o[r] = N(o[r]);
        return function(l) {
            var g, v = "";
            for (g = 0; g < n; g++)
                v += wt(o[g]) ? o[g].call(l, e) : o[g];
            return v
        }
    }
    function Bt(e, r) {
        return e.isValid() ? (r = $t(r, e.localeData()),
        X[r] = X[r] || C(r),
        X[r](e)) : e.localeData().invalidDate()
    }
    function $t(e, r) {
        var n = 5;
        function o(l) {
            return r.longDateFormat(l) || l
        }
        for (It.lastIndex = 0; n >= 0 && It.test(e); )
            e = e.replace(It, o),
            It.lastIndex = 0,
            n -= 1;
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
          , n = this._longDateFormat[e.toUpperCase()];
        return r || !n ? r : (this._longDateFormat[e] = n.match(Yt).map(function(o) {
            return o === "MMMM" || o === "MM" || o === "DD" || o === "dddd" ? o.slice(1) : o
        }).join(""),
        this._longDateFormat[e])
    }
    var H = "Invalid date";
    function xr() {
        return this._invalidDate
    }
    var wr = "%d"
      , U = /\d{1,2}/;
    function Ot(e) {
        return this._ordinal.replace("%d", e)
    }
    var vr = {
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
    function R(e, r, n, o) {
        var l = this._relativeTime[n];
        return wt(l) ? l(e, r, n, o) : l.replace(/%d/i, e)
    }
    function zt(e, r) {
        var n = this._relativeTime[e > 0 ? "future" : "past"];
        return wt(n) ? n(r) : n.replace(/%s/i, r)
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
    function xt(e) {
        return typeof e == "string" ? Ut[e] || Ut[e.toLowerCase()] : void 0
    }
    function kt(e) {
        var r, n, o = {};
        for (n in e)
            y(e, n) && (r = xt(n)) && (o[r] = e[n]);
        return o
    }
    var Zt = {
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
    function V(e) {
        var r, n = [];
        for (r in e)
            y(e, r) && n.push({
                unit: r,
                priority: Zt[r]
            });
        return n.sort(function(o, l) {
            return o.priority - l.priority
        }),
        n
    }
    var I, Wt = /\d/, ct = /\d\d/, le = /\d{3}/, se = /\d{4}/, $ = /[+-]?\d{6}/, ut = /\d\d?/, He = /\d\d\d\d?/, t = /\d\d\d\d\d\d?/, i = /\d{1,3}/, c = /\d{1,4}/, m = /[+-]?\d{1,6}/, h = /\d+/, x = /[+-]?\d+/, k = /Z|[+-]\d\d:?\d\d/gi, Q = /Z|[+-]\d\d(?::?\d\d)?/gi, nt = /[+-]?\d+(\.\d{1,3})?/, D = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, G = /^[1-9]\d?/, Ct = /^([1-9]\d|\d)/;
    function S(e, r, n) {
        I[e] = wt(r) ? r : function(o, l) {
            return o && n ? n : r
        }
    }
    function ie(e, r) {
        return y(I, e) ? I[e](r._strict, r._locale) : new RegExp(ae(e))
    }
    function ae(e) {
        return Kt(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(r, n, o, l, g) {
            return n || o || l || g
        }))
    }
    function Kt(e) {
        return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }
    function Ft(e) {
        return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
    }
    function Z(e) {
        var r = +e
          , n = 0;
        return r !== 0 && isFinite(r) && (n = Ft(r)),
        n
    }
    I = {};
    var Ve = {};
    function at(e, r) {
        var n, o, l = r;
        for (typeof e == "string" && (e = [e]),
        A(r) && (l = function(g, v) {
            v[r] = Z(g)
        }
        ),
        o = e.length,
        n = 0; n < o; n++)
            Ve[e[n]] = l
    }
    function Se(e, r) {
        at(e, function(n, o, l, g) {
            l._w = l._w || {},
            r(n, l._w, l, g)
        })
    }
    function T(e, r, n) {
        r != null && y(Ve, e) && Ve[e](r, n._a, n, e)
    }
    function z(e) {
        return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
    }
    var it = 0
      , Tt = 1
      , qt = 2
      , St = 3
      , te = 4
      , ce = 5
      , Ee = 6
      , Kn = 7
      , ts = 8;
    function je(e) {
        return z(e) ? 366 : 365
    }
    B("Y", 0, 0, function() {
        var e = this.year();
        return e <= 9999 ? vt(e, 4) : "+" + e
    }),
    B(0, ["YY", 2], 0, function() {
        return this.year() % 100
    }),
    B(0, ["YYYY", 4], 0, "year"),
    B(0, ["YYYYY", 5], 0, "year"),
    B(0, ["YYYYYY", 6, !0], 0, "year"),
    S("Y", x),
    S("YY", ut, ct),
    S("YYYY", c, se),
    S("YYYYY", m, $),
    S("YYYYYY", m, $),
    at(["YYYYY", "YYYYYY"], it),
    at("YYYY", function(e, r) {
        r[it] = e.length === 2 ? a.parseTwoDigitYear(e) : Z(e)
    }),
    at("YY", function(e, r) {
        r[it] = a.parseTwoDigitYear(e)
    }),
    at("Y", function(e, r) {
        r[it] = parseInt(e, 10)
    }),
    a.parseTwoDigitYear = function(e) {
        return Z(e) + (Z(e) > 68 ? 1900 : 2e3)
    }
    ;
    var bt, Qr = Re("FullYear", !0);
    function es() {
        return z(this.year())
    }
    function Re(e, r) {
        return function(n) {
            return n != null ? (Xr(this, e, n),
            a.updateOffset(this, r),
            this) : Ge(this, e)
        }
    }
    function Ge(e, r) {
        if (!e.isValid())
            return NaN;
        var n = e._d
          , o = e._isUTC;
        switch (r) {
        case "Milliseconds":
            return o ? n.getUTCMilliseconds() : n.getMilliseconds();
        case "Seconds":
            return o ? n.getUTCSeconds() : n.getSeconds();
        case "Minutes":
            return o ? n.getUTCMinutes() : n.getMinutes();
        case "Hours":
            return o ? n.getUTCHours() : n.getHours();
        case "Date":
            return o ? n.getUTCDate() : n.getDate();
        case "Day":
            return o ? n.getUTCDay() : n.getDay();
        case "Month":
            return o ? n.getUTCMonth() : n.getMonth();
        case "FullYear":
            return o ? n.getUTCFullYear() : n.getFullYear();
        default:
            return NaN
        }
    }
    function Xr(e, r, n) {
        var o, l, g, v, F;
        if (e.isValid() && !isNaN(n)) {
            switch (o = e._d,
            l = e._isUTC,
            r) {
            case "Milliseconds":
                return void (l ? o.setUTCMilliseconds(n) : o.setMilliseconds(n));
            case "Seconds":
                return void (l ? o.setUTCSeconds(n) : o.setSeconds(n));
            case "Minutes":
                return void (l ? o.setUTCMinutes(n) : o.setMinutes(n));
            case "Hours":
                return void (l ? o.setUTCHours(n) : o.setHours(n));
            case "Date":
                return void (l ? o.setUTCDate(n) : o.setDate(n));
            case "FullYear":
                break;
            default:
                return
            }
            g = n,
            v = e.month(),
            F = (F = e.date()) !== 29 || v !== 1 || z(g) ? F : 28,
            l ? o.setUTCFullYear(g, v, F) : o.setFullYear(g, v, F)
        }
    }
    function rs(e) {
        return wt(this[e = xt(e)]) ? this[e]() : this
    }
    function ns(e, r) {
        if (typeof e == "object") {
            var n, o = V(e = kt(e)), l = o.length;
            for (n = 0; n < l; n++)
                this[o[n].unit](e[o[n].unit])
        } else if (wt(this[e = xt(e)]))
            return this[e](r);
        return this
    }
    function ss(e, r) {
        return (e % r + r) % r
    }
    function br(e, r) {
        if (isNaN(e) || isNaN(r))
            return NaN;
        var n = ss(r, 12);
        return e += (r - n) / 12,
        n === 1 ? z(e) ? 29 : 28 : 31 - n % 7 % 2
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
    S("M", ut, G),
    S("MM", ut, ct),
    S("MMM", function(e, r) {
        return r.monthsShortRegex(e)
    }),
    S("MMMM", function(e, r) {
        return r.monthsRegex(e)
    }),
    at(["M", "MM"], function(e, r) {
        r[Tt] = Z(e) - 1
    }),
    at(["MMM", "MMMM"], function(e, r, n, o) {
        var l = n._locale.monthsParse(e, o, n._strict);
        l != null ? r[Tt] = l : O(n).invalidMonth = e
    });
    var is = "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
      , Jr = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_")
      , zr = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/
      , as = D
      , os = D;
    function us(e, r) {
        return e ? f(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || zr).test(r) ? "format" : "standalone"][e.month()] : f(this._months) ? this._months : this._months.standalone
    }
    function ls(e, r) {
        return e ? f(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[zr.test(r) ? "format" : "standalone"][e.month()] : f(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
    }
    function cs(e, r, n) {
        var o, l, g, v = e.toLocaleLowerCase();
        if (!this._monthsParse)
            for (this._monthsParse = [],
            this._longMonthsParse = [],
            this._shortMonthsParse = [],
            o = 0; o < 12; ++o)
                g = M([2e3, o]),
                this._shortMonthsParse[o] = this.monthsShort(g, "").toLocaleLowerCase(),
                this._longMonthsParse[o] = this.months(g, "").toLocaleLowerCase();
        return n ? r === "MMM" ? (l = bt.call(this._shortMonthsParse, v)) !== -1 ? l : null : (l = bt.call(this._longMonthsParse, v)) !== -1 ? l : null : r === "MMM" ? (l = bt.call(this._shortMonthsParse, v)) !== -1 || (l = bt.call(this._longMonthsParse, v)) !== -1 ? l : null : (l = bt.call(this._longMonthsParse, v)) !== -1 || (l = bt.call(this._shortMonthsParse, v)) !== -1 ? l : null
    }
    function hs(e, r, n) {
        var o, l, g;
        if (this._monthsParseExact)
            return cs.call(this, e, r, n);
        for (this._monthsParse || (this._monthsParse = [],
        this._longMonthsParse = [],
        this._shortMonthsParse = []),
        o = 0; o < 12; o++)
            if (l = M([2e3, o]),
            n && !this._longMonthsParse[o] && (this._longMonthsParse[o] = new RegExp("^" + this.months(l, "").replace(".", "") + "$","i"),
            this._shortMonthsParse[o] = new RegExp("^" + this.monthsShort(l, "").replace(".", "") + "$","i")),
            n || this._monthsParse[o] || (g = "^" + this.months(l, "") + "|^" + this.monthsShort(l, ""),
            this._monthsParse[o] = new RegExp(g.replace(".", ""),"i")),
            n && r === "MMMM" && this._longMonthsParse[o].test(e) || n && r === "MMM" && this._shortMonthsParse[o].test(e) || !n && this._monthsParse[o].test(e))
                return o
    }
    function Zr(e, r) {
        if (!e.isValid())
            return e;
        if (typeof r == "string") {
            if (/^\d+$/.test(r))
                r = Z(r);
            else if (!A(r = e.localeData().monthsParse(r)))
                return e
        }
        var n = r
          , o = e.date();
        return o = o < 29 ? o : Math.min(o, br(e.year(), n)),
        e._isUTC ? e._d.setUTCMonth(n, o) : e._d.setMonth(n, o),
        e
    }
    function Kr(e) {
        return e != null ? (Zr(this, e),
        a.updateOffset(this, !0),
        this) : Ge(this, "Month")
    }
    function fs() {
        return br(this.year(), this.month())
    }
    function ds(e) {
        return this._monthsParseExact ? (y(this, "_monthsRegex") || tn.call(this),
        e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (y(this, "_monthsShortRegex") || (this._monthsShortRegex = as),
        this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
    }
    function ps(e) {
        return this._monthsParseExact ? (y(this, "_monthsRegex") || tn.call(this),
        e ? this._monthsStrictRegex : this._monthsRegex) : (y(this, "_monthsRegex") || (this._monthsRegex = os),
        this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
    }
    function tn() {
        function e(L, ot) {
            return ot.length - L.length
        }
        var r, n, o, l, g = [], v = [], F = [];
        for (r = 0; r < 12; r++)
            n = M([2e3, r]),
            o = Kt(this.monthsShort(n, "")),
            l = Kt(this.months(n, "")),
            g.push(o),
            v.push(l),
            F.push(l),
            F.push(o);
        g.sort(e),
        v.sort(e),
        F.sort(e),
        this._monthsRegex = new RegExp("^(" + F.join("|") + ")","i"),
        this._monthsShortRegex = this._monthsRegex,
        this._monthsStrictRegex = new RegExp("^(" + v.join("|") + ")","i"),
        this._monthsShortStrictRegex = new RegExp("^(" + g.join("|") + ")","i")
    }
    function ms(e, r, n, o, l, g, v) {
        var F;
        return e < 100 && e >= 0 ? (F = new Date(e + 400,r,n,o,l,g,v),
        isFinite(F.getFullYear()) && F.setFullYear(e)) : F = new Date(e,r,n,o,l,g,v),
        F
    }
    function $e(e) {
        var r, n;
        return e < 100 && e >= 0 ? ((n = Array.prototype.slice.call(arguments))[0] = e + 400,
        r = new Date(Date.UTC.apply(null, n)),
        isFinite(r.getUTCFullYear()) && r.setUTCFullYear(e)) : r = new Date(Date.UTC.apply(null, arguments)),
        r
    }
    function ir(e, r, n) {
        var o = 7 + r - n;
        return -(7 + $e(e, 0, o).getUTCDay() - r) % 7 + o - 1
    }
    function en(e, r, n, o, l) {
        var g, v, F = 1 + 7 * (r - 1) + (7 + n - o) % 7 + ir(e, o, l);
        return F <= 0 ? v = je(g = e - 1) + F : F > je(e) ? (g = e + 1,
        v = F - je(e)) : (g = e,
        v = F),
        {
            year: g,
            dayOfYear: v
        }
    }
    function qe(e, r, n) {
        var o, l, g = ir(e.year(), r, n), v = Math.floor((e.dayOfYear() - g - 1) / 7) + 1;
        return v < 1 ? o = v + he(l = e.year() - 1, r, n) : v > he(e.year(), r, n) ? (o = v - he(e.year(), r, n),
        l = e.year() + 1) : (l = e.year(),
        o = v),
        {
            week: o,
            year: l
        }
    }
    function he(e, r, n) {
        var o = ir(e, r, n)
          , l = ir(e + 1, r, n);
        return (je(e) - o + l) / 7
    }
    function gs(e) {
        return qe(e, this._week.dow, this._week.doy).week
    }
    B("w", ["ww", 2], "wo", "week"),
    B("W", ["WW", 2], "Wo", "isoWeek"),
    S("w", ut, G),
    S("ww", ut, ct),
    S("W", ut, G),
    S("WW", ut, ct),
    Se(["w", "ww", "W", "WW"], function(e, r, n, o) {
        r[o.substr(0, 1)] = Z(e)
    });
    var ys = {
        dow: 0,
        doy: 6
    };
    function xs() {
        return this._week.dow
    }
    function ws() {
        return this._week.doy
    }
    function vs(e) {
        var r = this.localeData().week(this);
        return e == null ? r : this.add(7 * (e - r), "d")
    }
    function bs(e) {
        var r = qe(this, 1, 4).week;
        return e == null ? r : this.add(7 * (e - r), "d")
    }
    function _s(e, r) {
        return typeof e != "string" ? e : isNaN(e) ? typeof (e = r.weekdaysParse(e)) == "number" ? e : null : parseInt(e, 10)
    }
    function Ss(e, r) {
        return typeof e == "string" ? r.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e
    }
    function _r(e, r) {
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
    S("d", ut),
    S("e", ut),
    S("E", ut),
    S("dd", function(e, r) {
        return r.weekdaysMinRegex(e)
    }),
    S("ddd", function(e, r) {
        return r.weekdaysShortRegex(e)
    }),
    S("dddd", function(e, r) {
        return r.weekdaysRegex(e)
    }),
    Se(["dd", "ddd", "dddd"], function(e, r, n, o) {
        var l = n._locale.weekdaysParse(e, o, n._strict);
        l != null ? r.d = l : O(n).invalidWeekday = e
    }),
    Se(["d", "e", "E"], function(e, r, n, o) {
        r[o] = Z(e)
    });
    var Es = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_")
      , rn = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_")
      , As = "Su_Mo_Tu_We_Th_Fr_Sa".split("_")
      , Ts = D
      , Ns = D
      , Ds = D;
    function Os(e, r) {
        var n = f(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(r) ? "format" : "standalone"];
        return e === !0 ? _r(n, this._week.dow) : e ? n[e.day()] : n
    }
    function ks(e) {
        return e === !0 ? _r(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort
    }
    function Cs(e) {
        return e === !0 ? _r(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin
    }
    function Rs(e, r, n) {
        var o, l, g, v = e.toLocaleLowerCase();
        if (!this._weekdaysParse)
            for (this._weekdaysParse = [],
            this._shortWeekdaysParse = [],
            this._minWeekdaysParse = [],
            o = 0; o < 7; ++o)
                g = M([2e3, 1]).day(o),
                this._minWeekdaysParse[o] = this.weekdaysMin(g, "").toLocaleLowerCase(),
                this._shortWeekdaysParse[o] = this.weekdaysShort(g, "").toLocaleLowerCase(),
                this._weekdaysParse[o] = this.weekdays(g, "").toLocaleLowerCase();
        return n ? r === "dddd" ? (l = bt.call(this._weekdaysParse, v)) !== -1 ? l : null : r === "ddd" ? (l = bt.call(this._shortWeekdaysParse, v)) !== -1 ? l : null : (l = bt.call(this._minWeekdaysParse, v)) !== -1 ? l : null : r === "dddd" ? (l = bt.call(this._weekdaysParse, v)) !== -1 || (l = bt.call(this._shortWeekdaysParse, v)) !== -1 || (l = bt.call(this._minWeekdaysParse, v)) !== -1 ? l : null : r === "ddd" ? (l = bt.call(this._shortWeekdaysParse, v)) !== -1 || (l = bt.call(this._weekdaysParse, v)) !== -1 || (l = bt.call(this._minWeekdaysParse, v)) !== -1 ? l : null : (l = bt.call(this._minWeekdaysParse, v)) !== -1 || (l = bt.call(this._weekdaysParse, v)) !== -1 || (l = bt.call(this._shortWeekdaysParse, v)) !== -1 ? l : null
    }
    function Is(e, r, n) {
        var o, l, g;
        if (this._weekdaysParseExact)
            return Rs.call(this, e, r, n);
        for (this._weekdaysParse || (this._weekdaysParse = [],
        this._minWeekdaysParse = [],
        this._shortWeekdaysParse = [],
        this._fullWeekdaysParse = []),
        o = 0; o < 7; o++)
            if (l = M([2e3, 1]).day(o),
            n && !this._fullWeekdaysParse[o] && (this._fullWeekdaysParse[o] = new RegExp("^" + this.weekdays(l, "").replace(".", "\\.?") + "$","i"),
            this._shortWeekdaysParse[o] = new RegExp("^" + this.weekdaysShort(l, "").replace(".", "\\.?") + "$","i"),
            this._minWeekdaysParse[o] = new RegExp("^" + this.weekdaysMin(l, "").replace(".", "\\.?") + "$","i")),
            this._weekdaysParse[o] || (g = "^" + this.weekdays(l, "") + "|^" + this.weekdaysShort(l, "") + "|^" + this.weekdaysMin(l, ""),
            this._weekdaysParse[o] = new RegExp(g.replace(".", ""),"i")),
            n && r === "dddd" && this._fullWeekdaysParse[o].test(e) || n && r === "ddd" && this._shortWeekdaysParse[o].test(e) || n && r === "dd" && this._minWeekdaysParse[o].test(e) || !n && this._weekdaysParse[o].test(e))
                return o
    }
    function Fs(e) {
        if (!this.isValid())
            return e != null ? this : NaN;
        var r = Ge(this, "Day");
        return e != null ? (e = _s(e, this.localeData()),
        this.add(e - r, "d")) : r
    }
    function Ms(e) {
        if (!this.isValid())
            return e != null ? this : NaN;
        var r = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return e == null ? r : this.add(e - r, "d")
    }
    function Ps(e) {
        if (!this.isValid())
            return e != null ? this : NaN;
        if (e != null) {
            var r = Ss(e, this.localeData());
            return this.day(this.day() % 7 ? r : r - 7)
        }
        return this.day() || 7
    }
    function Ls(e) {
        return this._weekdaysParseExact ? (y(this, "_weekdaysRegex") || Sr.call(this),
        e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (y(this, "_weekdaysRegex") || (this._weekdaysRegex = Ts),
        this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
    }
    function Ys(e) {
        return this._weekdaysParseExact ? (y(this, "_weekdaysRegex") || Sr.call(this),
        e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (y(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Ns),
        this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
    }
    function Bs(e) {
        return this._weekdaysParseExact ? (y(this, "_weekdaysRegex") || Sr.call(this),
        e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (y(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Ds),
        this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
    }
    function Sr() {
        function e(Dt, oe) {
            return oe.length - Dt.length
        }
        var r, n, o, l, g, v = [], F = [], L = [], ot = [];
        for (r = 0; r < 7; r++)
            n = M([2e3, 1]).day(r),
            o = Kt(this.weekdaysMin(n, "")),
            l = Kt(this.weekdaysShort(n, "")),
            g = Kt(this.weekdays(n, "")),
            v.push(o),
            F.push(l),
            L.push(g),
            ot.push(o),
            ot.push(l),
            ot.push(g);
        v.sort(e),
        F.sort(e),
        L.sort(e),
        ot.sort(e),
        this._weekdaysRegex = new RegExp("^(" + ot.join("|") + ")","i"),
        this._weekdaysShortRegex = this._weekdaysRegex,
        this._weekdaysMinRegex = this._weekdaysRegex,
        this._weekdaysStrictRegex = new RegExp("^(" + L.join("|") + ")","i"),
        this._weekdaysShortStrictRegex = new RegExp("^(" + F.join("|") + ")","i"),
        this._weekdaysMinStrictRegex = new RegExp("^(" + v.join("|") + ")","i")
    }
    function Er() {
        return this.hours() % 12 || 12
    }
    function Us() {
        return this.hours() || 24
    }
    function nn(e, r) {
        B(e, 0, 0, function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), r)
        })
    }
    function sn(e, r) {
        return r._meridiemParse
    }
    function Ws(e) {
        return (e + "").toLowerCase().charAt(0) === "p"
    }
    B("H", ["HH", 2], 0, "hour"),
    B("h", ["hh", 2], 0, Er),
    B("k", ["kk", 2], 0, Us),
    B("hmm", 0, 0, function() {
        return "" + Er.apply(this) + vt(this.minutes(), 2)
    }),
    B("hmmss", 0, 0, function() {
        return "" + Er.apply(this) + vt(this.minutes(), 2) + vt(this.seconds(), 2)
    }),
    B("Hmm", 0, 0, function() {
        return "" + this.hours() + vt(this.minutes(), 2)
    }),
    B("Hmmss", 0, 0, function() {
        return "" + this.hours() + vt(this.minutes(), 2) + vt(this.seconds(), 2)
    }),
    nn("a", !0),
    nn("A", !1),
    S("a", sn),
    S("A", sn),
    S("H", ut, Ct),
    S("h", ut, G),
    S("k", ut, G),
    S("HH", ut, ct),
    S("hh", ut, ct),
    S("kk", ut, ct),
    S("hmm", He),
    S("hmmss", t),
    S("Hmm", He),
    S("Hmmss", t),
    at(["H", "HH"], St),
    at(["k", "kk"], function(e, r, n) {
        var o = Z(e);
        r[St] = o === 24 ? 0 : o
    }),
    at(["a", "A"], function(e, r, n) {
        n._isPm = n._locale.isPM(e),
        n._meridiem = e
    }),
    at(["h", "hh"], function(e, r, n) {
        r[St] = Z(e),
        O(n).bigHour = !0
    }),
    at("hmm", function(e, r, n) {
        var o = e.length - 2;
        r[St] = Z(e.substr(0, o)),
        r[te] = Z(e.substr(o)),
        O(n).bigHour = !0
    }),
    at("hmmss", function(e, r, n) {
        var o = e.length - 4
          , l = e.length - 2;
        r[St] = Z(e.substr(0, o)),
        r[te] = Z(e.substr(o, 2)),
        r[ce] = Z(e.substr(l)),
        O(n).bigHour = !0
    }),
    at("Hmm", function(e, r, n) {
        var o = e.length - 2;
        r[St] = Z(e.substr(0, o)),
        r[te] = Z(e.substr(o))
    }),
    at("Hmmss", function(e, r, n) {
        var o = e.length - 4
          , l = e.length - 2;
        r[St] = Z(e.substr(0, o)),
        r[te] = Z(e.substr(o, 2)),
        r[ce] = Z(e.substr(l))
    });
    var Hs = /[ap]\.?m?\.?/i
      , Vs = Re("Hours", !0);
    function js(e, r, n) {
        return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
    }
    var Qe, an = {
        calendar: Xt,
        longDateFormat: pt,
        invalidDate: H,
        ordinal: wr,
        dayOfMonthOrdinalParse: U,
        relativeTime: vr,
        months: is,
        monthsShort: Jr,
        week: ys,
        weekdays: Es,
        weekdaysMin: As,
        weekdaysShort: rn,
        meridiemParse: Hs
    }, mt = {}, Xe = {};
    function Gs(e, r) {
        var n, o = Math.min(e.length, r.length);
        for (n = 0; n < o; n += 1)
            if (e[n] !== r[n])
                return n;
        return o
    }
    function on(e) {
        return e && e.toLowerCase().replace("_", "-")
    }
    function $s(e) {
        for (var r, n, o, l, g = 0; g < e.length; ) {
            for (r = (l = on(e[g]).split("-")).length,
            n = (n = on(e[g + 1])) ? n.split("-") : null; r > 0; ) {
                if (o = ar(l.slice(0, r).join("-")))
                    return o;
                if (n && n.length >= r && Gs(l, n) >= r - 1)
                    break;
                r--
            }
            g++
        }
        return Qe
    }
    function qs(e) {
        return !(!e || !e.match("^[^/\\\\]*$"))
    }
    function ar(e) {
        var r = null;
        if (mt[e] === void 0 && Hr && Hr.exports && qs(e))
            try {
                r = Qe._abbr,
                jo("./locale/" + e),
                we(r)
            } catch {
                mt[e] = null
            }
        return mt[e]
    }
    function we(e, r) {
        var n;
        return e && ((n = b(r) ? fe(e) : Ar(e, r)) ? Qe = n : typeof console < "u" && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")),
        Qe._abbr
    }
    function Ar(e, r) {
        if (r !== null) {
            var n, o = an;
            if (r.abbr = e,
            mt[e] != null)
                Gt("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),
                o = mt[e]._config;
            else if (r.parentLocale != null)
                if (mt[r.parentLocale] != null)
                    o = mt[r.parentLocale]._config;
                else {
                    if ((n = ar(r.parentLocale)) == null)
                        return Xe[r.parentLocale] || (Xe[r.parentLocale] = []),
                        Xe[r.parentLocale].push({
                            name: e,
                            config: r
                        }),
                        null;
                    o = n._config
                }
            return mt[e] = new Lt(Pt(o, r)),
            Xe[e] && Xe[e].forEach(function(l) {
                Ar(l.name, l.config)
            }),
            we(e),
            mt[e]
        }
        return delete mt[e],
        null
    }
    function Qs(e, r) {
        if (r != null) {
            var n, o, l = an;
            mt[e] != null && mt[e].parentLocale != null ? mt[e].set(Pt(mt[e]._config, r)) : ((o = ar(e)) != null && (l = o._config),
            r = Pt(l, r),
            o == null && (r.abbr = e),
            (n = new Lt(r)).parentLocale = mt[e],
            mt[e] = n),
            we(e)
        } else
            mt[e] != null && (mt[e].parentLocale != null ? (mt[e] = mt[e].parentLocale,
            e === we() && we(e)) : mt[e] != null && delete mt[e]);
        return mt[e]
    }
    function fe(e) {
        var r;
        if (e && e._locale && e._locale._abbr && (e = e._locale._abbr),
        !e)
            return Qe;
        if (!f(e)) {
            if (r = ar(e))
                return r;
            e = [e]
        }
        return $s(e)
    }
    function Xs() {
        return Vt(mt)
    }
    function Tr(e) {
        var r, n = e._a;
        return n && O(e).overflow === -2 && (r = n[Tt] < 0 || n[Tt] > 11 ? Tt : n[qt] < 1 || n[qt] > br(n[it], n[Tt]) ? qt : n[St] < 0 || n[St] > 24 || n[St] === 24 && (n[te] !== 0 || n[ce] !== 0 || n[Ee] !== 0) ? St : n[te] < 0 || n[te] > 59 ? te : n[ce] < 0 || n[ce] > 59 ? ce : n[Ee] < 0 || n[Ee] > 999 ? Ee : -1,
        O(e)._overflowDayOfYear && (r < it || r > qt) && (r = qt),
        O(e)._overflowWeeks && r === -1 && (r = Kn),
        O(e)._overflowWeekday && r === -1 && (r = ts),
        O(e).overflow = r),
        e
    }
    var Js = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/
      , zs = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/
      , Zs = /Z|[+-]\d\d(?::?\d\d)?/
      , or = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/], ["YYYYMM", /\d{6}/, !1], ["YYYY", /\d{4}/, !1]]
      , Nr = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]]
      , Ks = /^\/?Date\((-?\d+)/i
      , ti = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/
      , ei = {
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
    function un(e) {
        var r, n, o, l, g, v, F = e._i, L = Js.exec(F) || zs.exec(F), ot = or.length, Dt = Nr.length;
        if (L) {
            for (O(e).iso = !0,
            r = 0,
            n = ot; r < n; r++)
                if (or[r][1].exec(L[1])) {
                    l = or[r][0],
                    o = or[r][2] !== !1;
                    break
                }
            if (l == null)
                return void (e._isValid = !1);
            if (L[3]) {
                for (r = 0,
                n = Dt; r < n; r++)
                    if (Nr[r][1].exec(L[3])) {
                        g = (L[2] || " ") + Nr[r][0];
                        break
                    }
                if (g == null)
                    return void (e._isValid = !1)
            }
            if (!o && g != null)
                return void (e._isValid = !1);
            if (L[4]) {
                if (!Zs.exec(L[4]))
                    return void (e._isValid = !1);
                v = "Z"
            }
            e._f = l + (g || "") + (v || ""),
            Or(e)
        } else
            e._isValid = !1
    }
    function ri(e, r, n, o, l, g) {
        var v = [ni(e), Jr.indexOf(r), parseInt(n, 10), parseInt(o, 10), parseInt(l, 10)];
        return g && v.push(parseInt(g, 10)),
        v
    }
    function ni(e) {
        var r = parseInt(e, 10);
        return r <= 49 ? 2e3 + r : r <= 999 ? 1900 + r : r
    }
    function si(e) {
        return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
    }
    function ii(e, r, n) {
        return !e || rn.indexOf(e) === new Date(r[0],r[1],r[2]).getDay() || (O(n).weekdayMismatch = !0,
        n._isValid = !1,
        !1)
    }
    function ai(e, r, n) {
        if (e)
            return ei[e];
        if (r)
            return 0;
        var o = parseInt(n, 10)
          , l = o % 100;
        return (o - l) / 100 * 60 + l
    }
    function ln(e) {
        var r, n = ti.exec(si(e._i));
        if (n) {
            if (r = ri(n[4], n[3], n[2], n[5], n[6], n[7]),
            !ii(n[1], r, e))
                return;
            e._a = r,
            e._tzm = ai(n[8], n[9], n[10]),
            e._d = $e.apply(null, e._a),
            e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
            O(e).rfc2822 = !0
        } else
            e._isValid = !1
    }
    function oi(e) {
        var r = Ks.exec(e._i);
        r === null ? (un(e),
        e._isValid === !1 && (delete e._isValid,
        ln(e),
        e._isValid === !1 && (delete e._isValid,
        e._strict ? e._isValid = !1 : a.createFromInputFallback(e)))) : e._d = new Date(+r[1])
    }
    function Ie(e, r, n) {
        return e ?? r ?? n
    }
    function ui(e) {
        var r = new Date(a.now());
        return e._useUTC ? [r.getUTCFullYear(), r.getUTCMonth(), r.getUTCDate()] : [r.getFullYear(), r.getMonth(), r.getDate()]
    }
    function Dr(e) {
        var r, n, o, l, g, v = [];
        if (!e._d) {
            for (o = ui(e),
            e._w && e._a[qt] == null && e._a[Tt] == null && li(e),
            e._dayOfYear != null && (g = Ie(e._a[it], o[it]),
            (e._dayOfYear > je(g) || e._dayOfYear === 0) && (O(e)._overflowDayOfYear = !0),
            n = $e(g, 0, e._dayOfYear),
            e._a[Tt] = n.getUTCMonth(),
            e._a[qt] = n.getUTCDate()),
            r = 0; r < 3 && e._a[r] == null; ++r)
                e._a[r] = v[r] = o[r];
            for (; r < 7; r++)
                e._a[r] = v[r] = e._a[r] == null ? r === 2 ? 1 : 0 : e._a[r];
            e._a[St] === 24 && e._a[te] === 0 && e._a[ce] === 0 && e._a[Ee] === 0 && (e._nextDay = !0,
            e._a[St] = 0),
            e._d = (e._useUTC ? $e : ms).apply(null, v),
            l = e._useUTC ? e._d.getUTCDay() : e._d.getDay(),
            e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
            e._nextDay && (e._a[St] = 24),
            e._w && e._w.d !== void 0 && e._w.d !== l && (O(e).weekdayMismatch = !0)
        }
    }
    function li(e) {
        var r, n, o, l, g, v, F, L, ot;
        (r = e._w).GG != null || r.W != null || r.E != null ? (g = 1,
        v = 4,
        n = Ie(r.GG, e._a[it], qe(ht(), 1, 4).year),
        o = Ie(r.W, 1),
        ((l = Ie(r.E, 1)) < 1 || l > 7) && (L = !0)) : (g = e._locale._week.dow,
        v = e._locale._week.doy,
        ot = qe(ht(), g, v),
        n = Ie(r.gg, e._a[it], ot.year),
        o = Ie(r.w, ot.week),
        r.d != null ? ((l = r.d) < 0 || l > 6) && (L = !0) : r.e != null ? (l = r.e + g,
        (r.e < 0 || r.e > 6) && (L = !0)) : l = g),
        o < 1 || o > he(n, g, v) ? O(e)._overflowWeeks = !0 : L != null ? O(e)._overflowWeekday = !0 : (F = en(n, o, l, g, v),
        e._a[it] = F.year,
        e._dayOfYear = F.dayOfYear)
    }
    function Or(e) {
        if (e._f !== a.ISO_8601)
            if (e._f !== a.RFC_2822) {
                e._a = [],
                O(e).empty = !0;
                var r, n, o, l, g, v, F, L = "" + e._i, ot = L.length, Dt = 0;
                for (F = (o = $t(e._f, e._locale).match(Yt) || []).length,
                r = 0; r < F; r++)
                    l = o[r],
                    (n = (L.match(ie(l, e)) || [])[0]) && ((g = L.substr(0, L.indexOf(n))).length > 0 && O(e).unusedInput.push(g),
                    L = L.slice(L.indexOf(n) + n.length),
                    Dt += n.length),
                    xe[l] ? (n ? O(e).empty = !1 : O(e).unusedTokens.push(l),
                    T(l, n, e)) : e._strict && !n && O(e).unusedTokens.push(l);
                O(e).charsLeftOver = ot - Dt,
                L.length > 0 && O(e).unusedInput.push(L),
                e._a[St] <= 12 && O(e).bigHour === !0 && e._a[St] > 0 && (O(e).bigHour = void 0),
                O(e).parsedDateParts = e._a.slice(0),
                O(e).meridiem = e._meridiem,
                e._a[St] = ci(e._locale, e._a[St], e._meridiem),
                (v = O(e).era) !== null && (e._a[it] = e._locale.erasConvertYear(v, e._a[it])),
                Dr(e),
                Tr(e)
            } else
                ln(e);
        else
            un(e)
    }
    function ci(e, r, n) {
        var o;
        return n == null ? r : e.meridiemHour != null ? e.meridiemHour(r, n) : (e.isPM != null && ((o = e.isPM(n)) && r < 12 && (r += 12),
        o || r !== 12 || (r = 0)),
        r)
    }
    function hi(e) {
        var r, n, o, l, g, v, F = !1, L = e._f.length;
        if (L === 0)
            return O(e).invalidFormat = !0,
            void (e._d = new Date(NaN));
        for (l = 0; l < L; l++)
            g = 0,
            v = !1,
            r = At({}, e),
            e._useUTC != null && (r._useUTC = e._useUTC),
            r._f = e._f[l],
            Or(r),
            w(r) && (v = !0),
            g += O(r).charsLeftOver,
            g += 10 * O(r).unusedTokens.length,
            O(r).score = g,
            F ? g < o && (o = g,
            n = r) : (o == null || g < o || v) && (o = g,
            n = r,
            v && (F = !0));
        P(e, n || r)
    }
    function fi(e) {
        if (!e._d) {
            var r = kt(e._i)
              , n = r.day === void 0 ? r.date : r.day;
            e._a = q([r.year, r.month, n, r.hour, r.minute, r.second, r.millisecond], function(o) {
                return o && parseInt(o, 10)
            }),
            Dr(e)
        }
    }
    function di(e) {
        var r = new _t(Tr(cn(e)));
        return r._nextDay && (r.add(1, "d"),
        r._nextDay = void 0),
        r
    }
    function cn(e) {
        var r = e._i
          , n = e._f;
        return e._locale = e._locale || fe(e._l),
        r === null || n === void 0 && r === "" ? et({
            nullInput: !0
        }) : (typeof r == "string" && (e._i = r = e._locale.preparse(r)),
        j(r) ? new _t(Tr(r)) : (Y(r) ? e._d = r : f(n) ? hi(e) : n ? Or(e) : pi(e),
        w(e) || (e._d = null),
        e))
    }
    function pi(e) {
        var r = e._i;
        b(r) ? e._d = new Date(a.now()) : Y(r) ? e._d = new Date(r.valueOf()) : typeof r == "string" ? oi(e) : f(r) ? (e._a = q(r.slice(0), function(n) {
            return parseInt(n, 10)
        }),
        Dr(e)) : p(r) ? fi(e) : A(r) ? e._d = new Date(r) : a.createFromInputFallback(e)
    }
    function hn(e, r, n, o, l) {
        var g = {};
        return r !== !0 && r !== !1 || (o = r,
        r = void 0),
        n !== !0 && n !== !1 || (o = n,
        n = void 0),
        (p(e) && _(e) || f(e) && e.length === 0) && (e = void 0),
        g._isAMomentObject = !0,
        g._useUTC = g._isUTC = l,
        g._l = n,
        g._i = e,
        g._f = r,
        g._strict = o,
        di(g)
    }
    function ht(e, r, n, o) {
        return hn(e, r, n, o, !1)
    }
    a.createFromInputFallback = yt("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(e) {
        e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
    }),
    a.ISO_8601 = function() {}
    ,
    a.RFC_2822 = function() {}
    ;
    var mi = yt("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
        var e = ht.apply(null, arguments);
        return this.isValid() && e.isValid() ? e < this ? this : e : et()
    })
      , gi = yt("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
        var e = ht.apply(null, arguments);
        return this.isValid() && e.isValid() ? e > this ? this : e : et()
    });
    function dn(e, r) {
        var n, o;
        if (r.length === 1 && f(r[0]) && (r = r[0]),
        !r.length)
            return ht();
        for (n = r[0],
        o = 1; o < r.length; ++o)
            r[o].isValid() && !r[o][e](n) || (n = r[o]);
        return n
    }
    function yi() {
        return dn("isBefore", [].slice.call(arguments, 0))
    }
    function xi() {
        return dn("isAfter", [].slice.call(arguments, 0))
    }
    var wi = function() {
        return Date.now ? Date.now() : +new Date
    }
      , Je = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
    function vi(e) {
        var r, n, o = !1, l = Je.length;
        for (r in e)
            if (y(e, r) && (bt.call(Je, r) === -1 || e[r] != null && isNaN(e[r])))
                return !1;
        for (n = 0; n < l; ++n)
            if (e[Je[n]]) {
                if (o)
                    return !1;
                parseFloat(e[Je[n]]) !== Z(e[Je[n]]) && (o = !0)
            }
        return !0
    }
    function bi() {
        return this._isValid
    }
    function _i() {
        return ee(NaN)
    }
    function ur(e) {
        var r = kt(e)
          , n = r.year || 0
          , o = r.quarter || 0
          , l = r.month || 0
          , g = r.week || r.isoWeek || 0
          , v = r.day || 0
          , F = r.hour || 0
          , L = r.minute || 0
          , ot = r.second || 0
          , Dt = r.millisecond || 0;
        this._isValid = vi(r),
        this._milliseconds = +Dt + 1e3 * ot + 6e4 * L + 1e3 * F * 60 * 60,
        this._days = +v + 7 * g,
        this._months = +l + 3 * o + 12 * n,
        this._data = {},
        this._locale = fe(),
        this._bubble()
    }
    function lr(e) {
        return e instanceof ur
    }
    function kr(e) {
        return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e)
    }
    function Si(e, r, n) {
        var o, l = Math.min(e.length, r.length), g = Math.abs(e.length - r.length), v = 0;
        for (o = 0; o < l; o++)
            Z(e[o]) !== Z(r[o]) && v++;
        return v + g
    }
    function pn(e, r) {
        B(e, 0, 0, function() {
            var n = this.utcOffset()
              , o = "+";
            return n < 0 && (n = -n,
            o = "-"),
            o + vt(~~(n / 60), 2) + r + vt(~~n % 60, 2)
        })
    }
    pn("Z", ":"),
    pn("ZZ", ""),
    S("Z", Q),
    S("ZZ", Q),
    at(["Z", "ZZ"], function(e, r, n) {
        n._useUTC = !0,
        n._tzm = Cr(Q, e)
    });
    var Ei = /([\+\-]|\d\d)/gi;
    function Cr(e, r) {
        var n, o, l = (r || "").match(e);
        return l === null ? null : (o = 60 * (n = ((l[l.length - 1] || []) + "").match(Ei) || ["-", 0, 0])[1] + Z(n[2])) === 0 ? 0 : n[0] === "+" ? o : -o
    }
    function Rr(e, r) {
        var n, o;
        return r._isUTC ? (n = r.clone(),
        o = (j(e) || Y(e) ? e.valueOf() : ht(e).valueOf()) - n.valueOf(),
        n._d.setTime(n._d.valueOf() + o),
        a.updateOffset(n, !1),
        n) : ht(e).local()
    }
    function Ir(e) {
        return -Math.round(e._d.getTimezoneOffset())
    }
    function Ai(e, r, n) {
        var o, l = this._offset || 0;
        if (!this.isValid())
            return e != null ? this : NaN;
        if (e != null) {
            if (typeof e == "string") {
                if ((e = Cr(Q, e)) === null)
                    return this
            } else
                Math.abs(e) < 16 && !n && (e *= 60);
            return !this._isUTC && r && (o = Ir(this)),
            this._offset = e,
            this._isUTC = !0,
            o != null && this.add(o, "m"),
            l !== e && (!r || this._changeInProgress ? xn(this, ee(e - l, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0,
            a.updateOffset(this, !0),
            this._changeInProgress = null)),
            this
        }
        return this._isUTC ? l : Ir(this)
    }
    function Ti(e, r) {
        return e != null ? (typeof e != "string" && (e = -e),
        this.utcOffset(e, r),
        this) : -this.utcOffset()
    }
    function Ni(e) {
        return this.utcOffset(0, e)
    }
    function Di(e) {
        return this._isUTC && (this.utcOffset(0, e),
        this._isUTC = !1,
        e && this.subtract(Ir(this), "m")),
        this
    }
    function Oi() {
        if (this._tzm != null)
            this.utcOffset(this._tzm, !1, !0);
        else if (typeof this._i == "string") {
            var e = Cr(k, this._i);
            e != null ? this.utcOffset(e) : this.utcOffset(0, !0)
        }
        return this
    }
    function ki(e) {
        return !!this.isValid() && (e = e ? ht(e).utcOffset() : 0,
        (this.utcOffset() - e) % 60 == 0)
    }
    function Ci() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
    }
    function Ri() {
        if (!b(this._isDSTShifted))
            return this._isDSTShifted;
        var e, r = {};
        return At(r, this),
        (r = cn(r))._a ? (e = r._isUTC ? M(r._a) : ht(r._a),
        this._isDSTShifted = this.isValid() && Si(r._a, e.toArray()) > 0) : this._isDSTShifted = !1,
        this._isDSTShifted
    }
    function Ii() {
        return !!this.isValid() && !this._isUTC
    }
    function Fi() {
        return !!this.isValid() && this._isUTC
    }
    function mn() {
        return !!this.isValid() && this._isUTC && this._offset === 0
    }
    a.updateOffset = function() {}
    ;
    var Mi = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/
      , Pi = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
    function ee(e, r) {
        var n, o, l, g = e, v = null;
        return lr(e) ? g = {
            ms: e._milliseconds,
            d: e._days,
            M: e._months
        } : A(e) || !isNaN(+e) ? (g = {},
        r ? g[r] = +e : g.milliseconds = +e) : (v = Mi.exec(e)) ? (n = v[1] === "-" ? -1 : 1,
        g = {
            y: 0,
            d: Z(v[qt]) * n,
            h: Z(v[St]) * n,
            m: Z(v[te]) * n,
            s: Z(v[ce]) * n,
            ms: Z(kr(1e3 * v[Ee])) * n
        }) : (v = Pi.exec(e)) ? (n = v[1] === "-" ? -1 : 1,
        g = {
            y: Ae(v[2], n),
            M: Ae(v[3], n),
            w: Ae(v[4], n),
            d: Ae(v[5], n),
            h: Ae(v[6], n),
            m: Ae(v[7], n),
            s: Ae(v[8], n)
        }) : g == null ? g = {} : typeof g == "object" && ("from"in g || "to"in g) && (l = Li(ht(g.from), ht(g.to)),
        (g = {}).ms = l.milliseconds,
        g.M = l.months),
        o = new ur(g),
        lr(e) && y(e, "_locale") && (o._locale = e._locale),
        lr(e) && y(e, "_isValid") && (o._isValid = e._isValid),
        o
    }
    function Ae(e, r) {
        var n = e && parseFloat(e.replace(",", "."));
        return (isNaN(n) ? 0 : n) * r
    }
    function gn(e, r) {
        var n = {};
        return n.months = r.month() - e.month() + 12 * (r.year() - e.year()),
        e.clone().add(n.months, "M").isAfter(r) && --n.months,
        n.milliseconds = +r - +e.clone().add(n.months, "M"),
        n
    }
    function Li(e, r) {
        var n;
        return e.isValid() && r.isValid() ? (r = Rr(r, e),
        e.isBefore(r) ? n = gn(e, r) : ((n = gn(r, e)).milliseconds = -n.milliseconds,
        n.months = -n.months),
        n) : {
            milliseconds: 0,
            months: 0
        }
    }
    function yn(e, r) {
        return function(n, o) {
            var l;
            return o === null || isNaN(+o) || (Gt(r, "moment()." + r + "(period, number) is deprecated. Please use moment()." + r + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),
            l = n,
            n = o,
            o = l),
            xn(this, ee(n, o), e),
            this
        }
    }
    function xn(e, r, n, o) {
        var l = r._milliseconds
          , g = kr(r._days)
          , v = kr(r._months);
        e.isValid() && (o = o == null || o,
        v && Zr(e, Ge(e, "Month") + v * n),
        g && Xr(e, "Date", Ge(e, "Date") + g * n),
        l && e._d.setTime(e._d.valueOf() + l * n),
        o && a.updateOffset(e, g || v))
    }
    ee.fn = ur.prototype,
    ee.invalid = _i;
    var Yi = yn(1, "add")
      , Bi = yn(-1, "subtract");
    function wn(e) {
        return typeof e == "string" || e instanceof String
    }
    function Ui(e) {
        return j(e) || Y(e) || wn(e) || A(e) || Hi(e) || Wi(e) || e == null
    }
    function Wi(e) {
        var r, n, o = p(e) && !_(e), l = !1, g = ["years", "year", "y", "months", "month", "M", "days", "day", "d", "dates", "date", "D", "hours", "hour", "h", "minutes", "minute", "m", "seconds", "second", "s", "milliseconds", "millisecond", "ms"], v = g.length;
        for (r = 0; r < v; r += 1)
            n = g[r],
            l = l || y(e, n);
        return o && l
    }
    function Hi(e) {
        var r = f(e)
          , n = !1;
        return r && (n = e.filter(function(o) {
            return !A(o) && wn(e)
        }).length === 0),
        r && n
    }
    function Vi(e) {
        var r, n, o = p(e) && !_(e), l = !1, g = ["sameDay", "nextDay", "lastDay", "nextWeek", "lastWeek", "sameElse"];
        for (r = 0; r < g.length; r += 1)
            n = g[r],
            l = l || y(e, n);
        return o && l
    }
    function ji(e, r) {
        var n = e.diff(r, "days", !0);
        return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse"
    }
    function Gi(e, r) {
        arguments.length === 1 && (arguments[0] ? Ui(arguments[0]) ? (e = arguments[0],
        r = void 0) : Vi(arguments[0]) && (r = arguments[0],
        e = void 0) : (e = void 0,
        r = void 0));
        var n = e || ht()
          , o = Rr(n, this).startOf("day")
          , l = a.calendarFormat(this, o) || "sameElse"
          , g = r && (wt(r[l]) ? r[l].call(this, n) : r[l]);
        return this.format(g || this.localeData().calendar(l, this, ht(n)))
    }
    function $i() {
        return new _t(this)
    }
    function qi(e, r) {
        var n = j(e) ? e : ht(e);
        return !(!this.isValid() || !n.isValid()) && ((r = xt(r) || "millisecond") === "millisecond" ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(r).valueOf())
    }
    function Qi(e, r) {
        var n = j(e) ? e : ht(e);
        return !(!this.isValid() || !n.isValid()) && ((r = xt(r) || "millisecond") === "millisecond" ? this.valueOf() < n.valueOf() : this.clone().endOf(r).valueOf() < n.valueOf())
    }
    function Xi(e, r, n, o) {
        var l = j(e) ? e : ht(e)
          , g = j(r) ? r : ht(r);
        return !!(this.isValid() && l.isValid() && g.isValid()) && ((o = o || "()")[0] === "(" ? this.isAfter(l, n) : !this.isBefore(l, n)) && (o[1] === ")" ? this.isBefore(g, n) : !this.isAfter(g, n))
    }
    function Ji(e, r) {
        var n, o = j(e) ? e : ht(e);
        return !(!this.isValid() || !o.isValid()) && ((r = xt(r) || "millisecond") === "millisecond" ? this.valueOf() === o.valueOf() : (n = o.valueOf(),
        this.clone().startOf(r).valueOf() <= n && n <= this.clone().endOf(r).valueOf()))
    }
    function zi(e, r) {
        return this.isSame(e, r) || this.isAfter(e, r)
    }
    function Zi(e, r) {
        return this.isSame(e, r) || this.isBefore(e, r)
    }
    function Ki(e, r, n) {
        var o, l, g;
        if (!this.isValid())
            return NaN;
        if (!(o = Rr(e, this)).isValid())
            return NaN;
        switch (l = 6e4 * (o.utcOffset() - this.utcOffset()),
        r = xt(r)) {
        case "year":
            g = cr(this, o) / 12;
            break;
        case "month":
            g = cr(this, o);
            break;
        case "quarter":
            g = cr(this, o) / 3;
            break;
        case "second":
            g = (this - o) / 1e3;
            break;
        case "minute":
            g = (this - o) / 6e4;
            break;
        case "hour":
            g = (this - o) / 36e5;
            break;
        case "day":
            g = (this - o - l) / 864e5;
            break;
        case "week":
            g = (this - o - l) / 6048e5;
            break;
        default:
            g = this - o
        }
        return n ? g : Ft(g)
    }
    function cr(e, r) {
        if (e.date() < r.date())
            return -cr(r, e);
        var n = 12 * (r.year() - e.year()) + (r.month() - e.month())
          , o = e.clone().add(n, "months");
        return -(n + (r - o < 0 ? (r - o) / (o - e.clone().add(n - 1, "months")) : (r - o) / (e.clone().add(n + 1, "months") - o))) || 0
    }
    function ta() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    }
    function ea(e) {
        if (!this.isValid())
            return null;
        var r = e !== !0
          , n = r ? this.clone().utc() : this;
        return n.year() < 0 || n.year() > 9999 ? Bt(n, r ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : wt(Date.prototype.toISOString) ? r ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", Bt(n, "Z")) : Bt(n, r ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
    }
    function ra() {
        if (!this.isValid())
            return "moment.invalid(/* " + this._i + " */)";
        var e, r, n, o, l = "moment", g = "";
        return this.isLocal() || (l = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone",
        g = "Z"),
        e = "[" + l + '("]',
        r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
        n = "-MM-DD[T]HH:mm:ss.SSS",
        o = g + '[")]',
        this.format(e + r + n + o)
    }
    function na(e) {
        e || (e = this.isUtc() ? a.defaultFormatUtc : a.defaultFormat);
        var r = Bt(this, e);
        return this.localeData().postformat(r)
    }
    function sa(e, r) {
        return this.isValid() && (j(e) && e.isValid() || ht(e).isValid()) ? ee({
            to: this,
            from: e
        }).locale(this.locale()).humanize(!r) : this.localeData().invalidDate()
    }
    function ia(e) {
        return this.from(ht(), e)
    }
    function aa(e, r) {
        return this.isValid() && (j(e) && e.isValid() || ht(e).isValid()) ? ee({
            from: this,
            to: e
        }).locale(this.locale()).humanize(!r) : this.localeData().invalidDate()
    }
    function oa(e) {
        return this.to(ht(), e)
    }
    function vn(e) {
        var r;
        return e === void 0 ? this._locale._abbr : ((r = fe(e)) != null && (this._locale = r),
        this)
    }
    a.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ",
    a.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
    var bn = yt("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
        return e === void 0 ? this.localeData() : this.locale(e)
    });
    function _n() {
        return this._locale
    }
    var hr = 1e3
      , Fe = 60 * hr
      , fr = 60 * Fe
      , Sn = 3506328 * fr;
    function Me(e, r) {
        return (e % r + r) % r
    }
    function En(e, r, n) {
        return e < 100 && e >= 0 ? new Date(e + 400,r,n) - Sn : new Date(e,r,n).valueOf()
    }
    function An(e, r, n) {
        return e < 100 && e >= 0 ? Date.UTC(e + 400, r, n) - Sn : Date.UTC(e, r, n)
    }
    function ua(e) {
        var r, n;
        if ((e = xt(e)) === void 0 || e === "millisecond" || !this.isValid())
            return this;
        switch (n = this._isUTC ? An : En,
        e) {
        case "year":
            r = n(this.year(), 0, 1);
            break;
        case "quarter":
            r = n(this.year(), this.month() - this.month() % 3, 1);
            break;
        case "month":
            r = n(this.year(), this.month(), 1);
            break;
        case "week":
            r = n(this.year(), this.month(), this.date() - this.weekday());
            break;
        case "isoWeek":
            r = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
            break;
        case "day":
        case "date":
            r = n(this.year(), this.month(), this.date());
            break;
        case "hour":
            r = this._d.valueOf(),
            r -= Me(r + (this._isUTC ? 0 : this.utcOffset() * Fe), fr);
            break;
        case "minute":
            r = this._d.valueOf(),
            r -= Me(r, Fe);
            break;
        case "second":
            r = this._d.valueOf(),
            r -= Me(r, hr)
        }
        return this._d.setTime(r),
        a.updateOffset(this, !0),
        this
    }
    function la(e) {
        var r, n;
        if ((e = xt(e)) === void 0 || e === "millisecond" || !this.isValid())
            return this;
        switch (n = this._isUTC ? An : En,
        e) {
        case "year":
            r = n(this.year() + 1, 0, 1) - 1;
            break;
        case "quarter":
            r = n(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
            break;
        case "month":
            r = n(this.year(), this.month() + 1, 1) - 1;
            break;
        case "week":
            r = n(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
            break;
        case "isoWeek":
            r = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
            break;
        case "day":
        case "date":
            r = n(this.year(), this.month(), this.date() + 1) - 1;
            break;
        case "hour":
            r = this._d.valueOf(),
            r += fr - Me(r + (this._isUTC ? 0 : this.utcOffset() * Fe), fr) - 1;
            break;
        case "minute":
            r = this._d.valueOf(),
            r += Fe - Me(r, Fe) - 1;
            break;
        case "second":
            r = this._d.valueOf(),
            r += hr - Me(r, hr) - 1
        }
        return this._d.setTime(r),
        a.updateOffset(this, !0),
        this
    }
    function ca() {
        return this._d.valueOf() - 6e4 * (this._offset || 0)
    }
    function ha() {
        return Math.floor(this.valueOf() / 1e3)
    }
    function fa() {
        return new Date(this.valueOf())
    }
    function da() {
        var e = this;
        return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
    }
    function pa() {
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
    function ma() {
        return this.isValid() ? this.toISOString() : null
    }
    function ga() {
        return w(this)
    }
    function ya() {
        return P({}, O(this))
    }
    function xa() {
        return O(this).overflow
    }
    function wa() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        }
    }
    function va(e, r) {
        var n, o, l, g = this._eras || fe("en")._eras;
        for (n = 0,
        o = g.length; n < o; ++n)
            switch (typeof g[n].since == "string" && (l = a(g[n].since).startOf("day"),
            g[n].since = l.valueOf()),
            typeof g[n].until) {
            case "undefined":
                g[n].until = 1 / 0;
                break;
            case "string":
                l = a(g[n].until).startOf("day").valueOf(),
                g[n].until = l.valueOf()
            }
        return g
    }
    function ba(e, r, n) {
        var o, l, g, v, F, L = this.eras();
        for (e = e.toUpperCase(),
        o = 0,
        l = L.length; o < l; ++o)
            if (g = L[o].name.toUpperCase(),
            v = L[o].abbr.toUpperCase(),
            F = L[o].narrow.toUpperCase(),
            n)
                switch (r) {
                case "N":
                case "NN":
                case "NNN":
                    if (v === e)
                        return L[o];
                    break;
                case "NNNN":
                    if (g === e)
                        return L[o];
                    break;
                case "NNNNN":
                    if (F === e)
                        return L[o]
                }
            else if ([g, v, F].indexOf(e) >= 0)
                return L[o]
    }
    function _a(e, r) {
        var n = e.since <= e.until ? 1 : -1;
        return r === void 0 ? a(e.since).year() : a(e.since).year() + (r - e.offset) * n
    }
    function Sa() {
        var e, r, n, o = this.localeData().eras();
        for (e = 0,
        r = o.length; e < r; ++e)
            if (n = this.clone().startOf("day").valueOf(),
            o[e].since <= n && n <= o[e].until || o[e].until <= n && n <= o[e].since)
                return o[e].name;
        return ""
    }
    function Ea() {
        var e, r, n, o = this.localeData().eras();
        for (e = 0,
        r = o.length; e < r; ++e)
            if (n = this.clone().startOf("day").valueOf(),
            o[e].since <= n && n <= o[e].until || o[e].until <= n && n <= o[e].since)
                return o[e].narrow;
        return ""
    }
    function Aa() {
        var e, r, n, o = this.localeData().eras();
        for (e = 0,
        r = o.length; e < r; ++e)
            if (n = this.clone().startOf("day").valueOf(),
            o[e].since <= n && n <= o[e].until || o[e].until <= n && n <= o[e].since)
                return o[e].abbr;
        return ""
    }
    function Ta() {
        var e, r, n, o, l = this.localeData().eras();
        for (e = 0,
        r = l.length; e < r; ++e)
            if (n = l[e].since <= l[e].until ? 1 : -1,
            o = this.clone().startOf("day").valueOf(),
            l[e].since <= o && o <= l[e].until || l[e].until <= o && o <= l[e].since)
                return (this.year() - a(l[e].since).year()) * n + l[e].offset;
        return this.year()
    }
    function Na(e) {
        return y(this, "_erasNameRegex") || Mr.call(this),
        e ? this._erasNameRegex : this._erasRegex
    }
    function Da(e) {
        return y(this, "_erasAbbrRegex") || Mr.call(this),
        e ? this._erasAbbrRegex : this._erasRegex
    }
    function Oa(e) {
        return y(this, "_erasNarrowRegex") || Mr.call(this),
        e ? this._erasNarrowRegex : this._erasRegex
    }
    function Fr(e, r) {
        return r.erasAbbrRegex(e)
    }
    function ka(e, r) {
        return r.erasNameRegex(e)
    }
    function Ca(e, r) {
        return r.erasNarrowRegex(e)
    }
    function Ra(e, r) {
        return r._eraYearOrdinalRegex || h
    }
    function Mr() {
        var e, r, n, o, l, g = [], v = [], F = [], L = [], ot = this.eras();
        for (e = 0,
        r = ot.length; e < r; ++e)
            n = Kt(ot[e].name),
            o = Kt(ot[e].abbr),
            l = Kt(ot[e].narrow),
            v.push(n),
            g.push(o),
            F.push(l),
            L.push(n),
            L.push(o),
            L.push(l);
        this._erasRegex = new RegExp("^(" + L.join("|") + ")","i"),
        this._erasNameRegex = new RegExp("^(" + v.join("|") + ")","i"),
        this._erasAbbrRegex = new RegExp("^(" + g.join("|") + ")","i"),
        this._erasNarrowRegex = new RegExp("^(" + F.join("|") + ")","i")
    }
    function dr(e, r) {
        B(0, [e, e.length], 0, r)
    }
    function Ia(e) {
        return Tn.call(this, e, this.week(), this.weekday() + this.localeData()._week.dow, this.localeData()._week.dow, this.localeData()._week.doy)
    }
    function Fa(e) {
        return Tn.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
    }
    function Ma() {
        return he(this.year(), 1, 4)
    }
    function Pa() {
        return he(this.isoWeekYear(), 1, 4)
    }
    function La() {
        var e = this.localeData()._week;
        return he(this.year(), e.dow, e.doy)
    }
    function Ya() {
        var e = this.localeData()._week;
        return he(this.weekYear(), e.dow, e.doy)
    }
    function Tn(e, r, n, o, l) {
        var g;
        return e == null ? qe(this, o, l).year : (r > (g = he(e, o, l)) && (r = g),
        Ba.call(this, e, r, n, o, l))
    }
    function Ba(e, r, n, o, l) {
        var g = en(e, r, n, o, l)
          , v = $e(g.year, 0, g.dayOfYear);
        return this.year(v.getUTCFullYear()),
        this.month(v.getUTCMonth()),
        this.date(v.getUTCDate()),
        this
    }
    function Ua(e) {
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
    S("N", Fr),
    S("NN", Fr),
    S("NNN", Fr),
    S("NNNN", ka),
    S("NNNNN", Ca),
    at(["N", "NN", "NNN", "NNNN", "NNNNN"], function(e, r, n, o) {
        var l = n._locale.erasParse(e, o, n._strict);
        l ? O(n).era = l : O(n).invalidEra = e
    }),
    S("y", h),
    S("yy", h),
    S("yyy", h),
    S("yyyy", h),
    S("yo", Ra),
    at(["y", "yy", "yyy", "yyyy"], it),
    at(["yo"], function(e, r, n, o) {
        var l;
        n._locale._eraYearOrdinalRegex && (l = e.match(n._locale._eraYearOrdinalRegex)),
        n._locale.eraYearOrdinalParse ? r[it] = n._locale.eraYearOrdinalParse(e, l) : r[it] = parseInt(e, 10)
    }),
    B(0, ["gg", 2], 0, function() {
        return this.weekYear() % 100
    }),
    B(0, ["GG", 2], 0, function() {
        return this.isoWeekYear() % 100
    }),
    dr("gggg", "weekYear"),
    dr("ggggg", "weekYear"),
    dr("GGGG", "isoWeekYear"),
    dr("GGGGG", "isoWeekYear"),
    S("G", x),
    S("g", x),
    S("GG", ut, ct),
    S("gg", ut, ct),
    S("GGGG", c, se),
    S("gggg", c, se),
    S("GGGGG", m, $),
    S("ggggg", m, $),
    Se(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, r, n, o) {
        r[o.substr(0, 2)] = Z(e)
    }),
    Se(["gg", "GG"], function(e, r, n, o) {
        r[o] = a.parseTwoDigitYear(e)
    }),
    B("Q", 0, "Qo", "quarter"),
    S("Q", Wt),
    at("Q", function(e, r) {
        r[Tt] = 3 * (Z(e) - 1)
    }),
    B("D", ["DD", 2], "Do", "date"),
    S("D", ut, G),
    S("DD", ut, ct),
    S("Do", function(e, r) {
        return e ? r._dayOfMonthOrdinalParse || r._ordinalParse : r._dayOfMonthOrdinalParseLenient
    }),
    at(["D", "DD"], qt),
    at("Do", function(e, r) {
        r[qt] = Z(e.match(ut)[0])
    });
    var Nn = Re("Date", !0);
    function Wa(e) {
        var r = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return e == null ? r : this.add(e - r, "d")
    }
    B("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
    S("DDD", i),
    S("DDDD", le),
    at(["DDD", "DDDD"], function(e, r, n) {
        n._dayOfYear = Z(e)
    }),
    B("m", ["mm", 2], 0, "minute"),
    S("m", ut, Ct),
    S("mm", ut, ct),
    at(["m", "mm"], te);
    var Ha = Re("Minutes", !1);
    B("s", ["ss", 2], 0, "second"),
    S("s", ut, Ct),
    S("ss", ut, ct),
    at(["s", "ss"], ce);
    var ve, Dn, Va = Re("Seconds", !1);
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
    S("S", i, Wt),
    S("SS", i, ct),
    S("SSS", i, le),
    ve = "SSSS"; ve.length <= 9; ve += "S")
        S(ve, h);
    function ja(e, r) {
        r[Ee] = Z(1e3 * ("0." + e))
    }
    for (ve = "S"; ve.length <= 9; ve += "S")
        at(ve, ja);
    function Ga() {
        return this._isUTC ? "UTC" : ""
    }
    function $a() {
        return this._isUTC ? "Coordinated Universal Time" : ""
    }
    Dn = Re("Milliseconds", !1),
    B("z", 0, 0, "zoneAbbr"),
    B("zz", 0, 0, "zoneName");
    var E = _t.prototype;
    function qa(e) {
        return ht(1e3 * e)
    }
    function Qa() {
        return ht.apply(null, arguments).parseZone()
    }
    function On(e) {
        return e
    }
    E.add = Yi,
    E.calendar = Gi,
    E.clone = $i,
    E.diff = Ki,
    E.endOf = la,
    E.format = na,
    E.from = sa,
    E.fromNow = ia,
    E.to = aa,
    E.toNow = oa,
    E.get = rs,
    E.invalidAt = xa,
    E.isAfter = qi,
    E.isBefore = Qi,
    E.isBetween = Xi,
    E.isSame = Ji,
    E.isSameOrAfter = zi,
    E.isSameOrBefore = Zi,
    E.isValid = ga,
    E.lang = bn,
    E.locale = vn,
    E.localeData = _n,
    E.max = gi,
    E.min = mi,
    E.parsingFlags = ya,
    E.set = ns,
    E.startOf = ua,
    E.subtract = Bi,
    E.toArray = da,
    E.toObject = pa,
    E.toDate = fa,
    E.toISOString = ea,
    E.inspect = ra,
    typeof Symbol < "u" && Symbol.for != null && (E[Symbol.for("nodejs.util.inspect.custom")] = function() {
        return "Moment<" + this.format() + ">"
    }
    ),
    E.toJSON = ma,
    E.toString = ta,
    E.unix = ha,
    E.valueOf = ca,
    E.creationData = wa,
    E.eraName = Sa,
    E.eraNarrow = Ea,
    E.eraAbbr = Aa,
    E.eraYear = Ta,
    E.year = Qr,
    E.isLeapYear = es,
    E.weekYear = Ia,
    E.isoWeekYear = Fa,
    E.quarter = E.quarters = Ua,
    E.month = Kr,
    E.daysInMonth = fs,
    E.week = E.weeks = vs,
    E.isoWeek = E.isoWeeks = bs,
    E.weeksInYear = La,
    E.weeksInWeekYear = Ya,
    E.isoWeeksInYear = Ma,
    E.isoWeeksInISOWeekYear = Pa,
    E.date = Nn,
    E.day = E.days = Fs,
    E.weekday = Ms,
    E.isoWeekday = Ps,
    E.dayOfYear = Wa,
    E.hour = E.hours = Vs,
    E.minute = E.minutes = Ha,
    E.second = E.seconds = Va,
    E.millisecond = E.milliseconds = Dn,
    E.utcOffset = Ai,
    E.utc = Ni,
    E.local = Di,
    E.parseZone = Oi,
    E.hasAlignedHourOffset = ki,
    E.isDST = Ci,
    E.isLocal = Ii,
    E.isUtcOffset = Fi,
    E.isUtc = mn,
    E.isUTC = mn,
    E.zoneAbbr = Ga,
    E.zoneName = $a,
    E.dates = yt("dates accessor is deprecated. Use date instead.", Nn),
    E.months = yt("months accessor is deprecated. Use month instead", Kr),
    E.years = yt("years accessor is deprecated. Use year instead", Qr),
    E.zone = yt("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", Ti),
    E.isDSTShifted = yt("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", Ri);
    var st = Lt.prototype;
    function pr(e, r, n, o) {
        var l = fe()
          , g = M().set(o, r);
        return l[n](g, e)
    }
    function kn(e, r, n) {
        if (A(e) && (r = e,
        e = void 0),
        e = e || "",
        r != null)
            return pr(e, r, n, "month");
        var o, l = [];
        for (o = 0; o < 12; o++)
            l[o] = pr(e, o, n, "month");
        return l
    }
    function Pr(e, r, n, o) {
        typeof e == "boolean" ? (A(r) && (n = r,
        r = void 0),
        r = r || "") : (n = r = e,
        e = !1,
        A(r) && (n = r,
        r = void 0),
        r = r || "");
        var l, g = fe(), v = e ? g._week.dow : 0, F = [];
        if (n != null)
            return pr(r, (n + v) % 7, o, "day");
        for (l = 0; l < 7; l++)
            F[l] = pr(r, (l + v) % 7, o, "day");
        return F
    }
    function Xa(e, r) {
        return kn(e, r, "months")
    }
    function Ja(e, r) {
        return kn(e, r, "monthsShort")
    }
    function za(e, r, n) {
        return Pr(e, r, n, "weekdays")
    }
    function Za(e, r, n) {
        return Pr(e, r, n, "weekdaysShort")
    }
    function Ka(e, r, n) {
        return Pr(e, r, n, "weekdaysMin")
    }
    st.calendar = Jt,
    st.longDateFormat = W,
    st.invalidDate = xr,
    st.ordinal = Ot,
    st.preparse = On,
    st.postformat = On,
    st.relativeTime = R,
    st.pastFuture = zt,
    st.set = Qt,
    st.eras = va,
    st.erasParse = ba,
    st.erasConvertYear = _a,
    st.erasAbbrRegex = Da,
    st.erasNameRegex = Na,
    st.erasNarrowRegex = Oa,
    st.months = us,
    st.monthsShort = ls,
    st.monthsParse = hs,
    st.monthsRegex = ps,
    st.monthsShortRegex = ds,
    st.week = gs,
    st.firstDayOfYear = ws,
    st.firstDayOfWeek = xs,
    st.weekdays = Os,
    st.weekdaysMin = Cs,
    st.weekdaysShort = ks,
    st.weekdaysParse = Is,
    st.weekdaysRegex = Ls,
    st.weekdaysShortRegex = Ys,
    st.weekdaysMinRegex = Bs,
    st.isPM = Ws,
    st.meridiem = js,
    we("en", {
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
    a.lang = yt("moment.lang is deprecated. Use moment.locale instead.", we),
    a.langData = yt("moment.langData is deprecated. Use moment.localeData instead.", fe);
    var de = Math.abs;
    function to() {
        var e = this._data;
        return this._milliseconds = de(this._milliseconds),
        this._days = de(this._days),
        this._months = de(this._months),
        e.milliseconds = de(e.milliseconds),
        e.seconds = de(e.seconds),
        e.minutes = de(e.minutes),
        e.hours = de(e.hours),
        e.months = de(e.months),
        e.years = de(e.years),
        this
    }
    function Cn(e, r, n, o) {
        var l = ee(r, n);
        return e._milliseconds += o * l._milliseconds,
        e._days += o * l._days,
        e._months += o * l._months,
        e._bubble()
    }
    function eo(e, r) {
        return Cn(this, e, r, 1)
    }
    function ro(e, r) {
        return Cn(this, e, r, -1)
    }
    function Rn(e) {
        return e < 0 ? Math.floor(e) : Math.ceil(e)
    }
    function no() {
        var e, r, n, o, l, g = this._milliseconds, v = this._days, F = this._months, L = this._data;
        return g >= 0 && v >= 0 && F >= 0 || g <= 0 && v <= 0 && F <= 0 || (g += 864e5 * Rn(Lr(F) + v),
        v = 0,
        F = 0),
        L.milliseconds = g % 1e3,
        e = Ft(g / 1e3),
        L.seconds = e % 60,
        r = Ft(e / 60),
        L.minutes = r % 60,
        n = Ft(r / 60),
        L.hours = n % 24,
        v += Ft(n / 24),
        F += l = Ft(In(v)),
        v -= Rn(Lr(l)),
        o = Ft(F / 12),
        F %= 12,
        L.days = v,
        L.months = F,
        L.years = o,
        this
    }
    function In(e) {
        return 4800 * e / 146097
    }
    function Lr(e) {
        return 146097 * e / 4800
    }
    function so(e) {
        if (!this.isValid())
            return NaN;
        var r, n, o = this._milliseconds;
        if ((e = xt(e)) === "month" || e === "quarter" || e === "year")
            switch (r = this._days + o / 864e5,
            n = this._months + In(r),
            e) {
            case "month":
                return n;
            case "quarter":
                return n / 3;
            case "year":
                return n / 12
            }
        else
            switch (r = this._days + Math.round(Lr(this._months)),
            e) {
            case "week":
                return r / 7 + o / 6048e5;
            case "day":
                return r + o / 864e5;
            case "hour":
                return 24 * r + o / 36e5;
            case "minute":
                return 1440 * r + o / 6e4;
            case "second":
                return 86400 * r + o / 1e3;
            case "millisecond":
                return Math.floor(864e5 * r) + o;
            default:
                throw new Error("Unknown unit " + e)
            }
    }
    function pe(e) {
        return function() {
            return this.as(e)
        }
    }
    var Fn = pe("ms")
      , io = pe("s")
      , ao = pe("m")
      , oo = pe("h")
      , uo = pe("d")
      , lo = pe("w")
      , co = pe("M")
      , ho = pe("Q")
      , fo = pe("y")
      , po = Fn;
    function mo() {
        return ee(this)
    }
    function go(e) {
        return e = xt(e),
        this.isValid() ? this[e + "s"]() : NaN
    }
    function Te(e) {
        return function() {
            return this.isValid() ? this._data[e] : NaN
        }
    }
    var yo = Te("milliseconds")
      , xo = Te("seconds")
      , wo = Te("minutes")
      , vo = Te("hours")
      , bo = Te("days")
      , _o = Te("months")
      , So = Te("years");
    function Eo() {
        return Ft(this.days() / 7)
    }
    var me = Math.round
      , Pe = {
        ss: 44,
        s: 45,
        m: 45,
        h: 22,
        d: 26,
        w: null,
        M: 11
    };
    function Ao(e, r, n, o, l) {
        return l.relativeTime(r || 1, !!n, e, o)
    }
    function To(e, r, n, o) {
        var l = ee(e).abs()
          , g = me(l.as("s"))
          , v = me(l.as("m"))
          , F = me(l.as("h"))
          , L = me(l.as("d"))
          , ot = me(l.as("M"))
          , Dt = me(l.as("w"))
          , oe = me(l.as("y"))
          , Ne = g <= n.ss && ["s", g] || g < n.s && ["ss", g] || v <= 1 && ["m"] || v < n.m && ["mm", v] || F <= 1 && ["h"] || F < n.h && ["hh", F] || L <= 1 && ["d"] || L < n.d && ["dd", L];
        return n.w != null && (Ne = Ne || Dt <= 1 && ["w"] || Dt < n.w && ["ww", Dt]),
        (Ne = Ne || ot <= 1 && ["M"] || ot < n.M && ["MM", ot] || oe <= 1 && ["y"] || ["yy", oe])[2] = r,
        Ne[3] = +e > 0,
        Ne[4] = o,
        Ao.apply(null, Ne)
    }
    function No(e) {
        return e === void 0 ? me : typeof e == "function" && (me = e,
        !0)
    }
    function Do(e, r) {
        return Pe[e] !== void 0 && (r === void 0 ? Pe[e] : (Pe[e] = r,
        e === "s" && (Pe.ss = r - 1),
        !0))
    }
    function Oo(e, r) {
        if (!this.isValid())
            return this.localeData().invalidDate();
        var n, o, l = !1, g = Pe;
        return typeof e == "object" && (r = e,
        e = !1),
        typeof e == "boolean" && (l = e),
        typeof r == "object" && (g = Object.assign({}, Pe, r),
        r.s != null && r.ss == null && (g.ss = r.s - 1)),
        o = To(this, !l, g, n = this.localeData()),
        l && (o = n.pastFuture(+this, o)),
        n.postformat(o)
    }
    var Yr = Math.abs;
    function Le(e) {
        return (e > 0) - (e < 0) || +e
    }
    function mr() {
        if (!this.isValid())
            return this.localeData().invalidDate();
        var e, r, n, o, l, g, v, F, L = Yr(this._milliseconds) / 1e3, ot = Yr(this._days), Dt = Yr(this._months), oe = this.asSeconds();
        return oe ? (e = Ft(L / 60),
        r = Ft(e / 60),
        L %= 60,
        e %= 60,
        n = Ft(Dt / 12),
        Dt %= 12,
        o = L ? L.toFixed(3).replace(/\.?0+$/, "") : "",
        l = oe < 0 ? "-" : "",
        g = Le(this._months) !== Le(oe) ? "-" : "",
        v = Le(this._days) !== Le(oe) ? "-" : "",
        F = Le(this._milliseconds) !== Le(oe) ? "-" : "",
        l + "P" + (n ? g + n + "Y" : "") + (Dt ? g + Dt + "M" : "") + (ot ? v + ot + "D" : "") + (r || e || L ? "T" : "") + (r ? F + r + "H" : "") + (e ? F + e + "M" : "") + (L ? F + o + "S" : "")) : "P0D"
    }
    var K = ur.prototype;
    return K.isValid = bi,
    K.abs = to,
    K.add = eo,
    K.subtract = ro,
    K.as = so,
    K.asMilliseconds = Fn,
    K.asSeconds = io,
    K.asMinutes = ao,
    K.asHours = oo,
    K.asDays = uo,
    K.asWeeks = lo,
    K.asMonths = co,
    K.asQuarters = ho,
    K.asYears = fo,
    K.valueOf = po,
    K._bubble = no,
    K.clone = mo,
    K.get = go,
    K.milliseconds = yo,
    K.seconds = xo,
    K.minutes = wo,
    K.hours = vo,
    K.days = bo,
    K.weeks = Eo,
    K.months = _o,
    K.years = So,
    K.humanize = Oo,
    K.toISOString = mr,
    K.toString = mr,
    K.toJSON = mr,
    K.locale = vn,
    K.localeData = _n,
    K.toIsoString = yt("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", mr),
    K.lang = bn,
    B("X", 0, 0, "unix"),
    B("x", 0, 0, "valueOf"),
    S("x", x),
    S("X", nt),
    at("X", function(e, r, n) {
        n._d = new Date(1e3 * parseFloat(e))
    }),
    at("x", function(e, r, n) {
        n._d = new Date(Z(e))
    }),
    a.version = "2.30.1",
    u(ht),
    a.fn = E,
    a.min = yi,
    a.max = xi,
    a.now = wi,
    a.utc = M,
    a.unix = qa,
    a.months = Xa,
    a.isDate = Y,
    a.locale = we,
    a.invalid = et,
    a.duration = ee,
    a.isMoment = j,
    a.weekdays = za,
    a.parseZone = Qa,
    a.localeData = fe,
    a.isDuration = lr,
    a.monthsShort = Ja,
    a.weekdaysMin = Ka,
    a.defineLocale = Ar,
    a.updateLocale = Qs,
    a.locales = Xs,
    a.weekdaysShort = Za,
    a.normalizeUnits = xt,
    a.relativeTimeRounding = No,
    a.relativeTimeThreshold = Do,
    a.calendarFormat = ji,
    a.prototype = E,
    a.HTML5_FMT = {
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
    a
}();
Jn.exports;
var Un;
(function(d) {
    d[d.Text = 0] = "Text",
    d[d.Image = 1] = "Image"
}
)(Un || (Un = {}));
var Wn;
(function(d) {
    d.ToggleListening = "toggle-listening",
    d.Copy = "copy",
    d.Print = "print"
}
)(Wn || (Wn = {}));
class gr {
    static onBrowserHasGoneFromInactiveToActive(s) {
        const a = this.onVisiableListeners.size;
        return this.onVisiableListeners.add(s),
        a === 0 && this.addInactiveToActiveEvents(),
        () => {
            this.onVisiableListeners.size === 0 ? this.removeInactiveToActiveEvents() : this.onVisiableListeners.delete(s)
        }
    }
    static shouldDebounce() {
        return Date.now() - this.lastEventFireTime < this.dbounceTimeMs
    }
    static addInactiveToActiveEvents() {
        this.visibilityChangeListener = () => {
            this.shouldDebounce() || document.hidden || (this.onVisiableListeners.forEach(s => s()),
            this.lastEventFireTime = Date.now())
        }
        ,
        this.focusListener = () => {
            this.shouldDebounce() || (this.onVisiableListeners.forEach(s => s()),
            this.lastEventFireTime = Date.now())
        }
        ,
        this.lastMouseMove = Date.now(),
        this.mmlistener = () => {
            this.shouldDebounce() || (Date.now() - this.lastMouseMove > 8e3 && (this.onVisiableListeners.forEach(s => s()),
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
        let s, a, u = Date.now();
        const f = () => {
            a = window.requestAnimationFrame( () => {
                !this.shouldDebounce() && Date.now() - u > 1e3 && (this.onVisiableListeners.forEach(p => p()),
                this.lastEventFireTime = Date.now()),
                u = Date.now(),
                s = setTimeout(f, 900)
            }
            )
        }
        ;
        return s = setTimeout(f, 900),
        () => {
            cancelAnimationFrame(a),
            clearTimeout(s)
        }
    }
}
gr.onVisiableListeners = new Set,
gr.lastEventFireTime = 0,
gr.dbounceTimeMs = 250;
class qr {
}
qr.addListener = (d, s, a, u) => {
    let f = !1
      , p = Date.now();
    return gr.onBrowserHasGoneFromInactiveToActive( () => {
        f || Date.now() - p < 500 || (f = !0,
        setTimeout( () => {
            p = Date.now(),
            a.getTabInteropStatus(d, s).then(y => {
                f = !1,
                u(y)
            }
            ).catch( () => u(null))
        }
        , 500))
    }
    )
}
;
class Go {
    constructor(s, a, u, f) {
        this.markTabAsOpenedAndAddAbandonedListener = p => Xn(this, void 0, void 0, function*() {
            try {
                const y = yield this.model.getTabInteropStatus(this.tabInteropId, this.userProfileId);
                if (y && y.tabInteropId === this.tabInteropId && y.tabOpened === !1)
                    return p(y),
                    function() {}
            } catch {
                p(null)
            }
            return yield this.model.setTabOpened(this.tabInteropId, this.userProfileId, this.resourceId, this.clientId),
            this.addTabAbandonedListener(p)
        }),
        this.addTabAbandonedListener = p => qr.addListener(this.tabInteropId, this.userProfileId, this.model, y => {
            y && (y.tabInteropId !== this.tabInteropId || y.tabOpened && this.isClientMatch(y)) || p(y)
        }
        ),
        this.tabInteropId = s,
        this.userProfileId = a,
        this.model = f,
        this.resourceId = u,
        this.clientId = Vr().toString()
    }
    isClientMatch(s) {
        return ((s == null ? void 0 : s.clientId) || this.clientId) === this.clientId
    }
}
const zn = Gn.createContext(null)
  , ru = ({tabInteropId: d, userProfileId: s, resourceId: a, model: u, children: f}) => {
    const p = Nt.useMemo( () => new Go(d,s,a,u), [a, s, d, u]);
    return Gn.createElement(zn.Provider, {
        value: p
    }, f)
}
;
function nu() {
    return Nt.useContext(zn)
}
navigator.userAgent.toLowerCase();
const su = "__CLOSE_NO_SCORE";
class iu {
    constructor(s, a, u, f) {
        this.addResponseListener = (p, y) => p == null ? () => {}
        : (this.tabEvents = p,
        (p.onPopupBlockerSuspected || p.onTabOpened) && (this.popupBlockerDetectionTimeout = setTimeout( () => {
            this.model.getTabInteropStatus(this.tabInteropId, this.userProfileId).then(_ => this.handleResponse(p, _))
        }
        , 5e3)),
        p.onResponse && (this.cleanupResponseListener = qr.addListener(this.tabInteropId, this.userProfileId, this.model, _ => this.handleResponse(p, _))),
        () => {
            clearTimeout(this.popupBlockerDetectionTimeout),
            this.cleanupResponseListener && this.cleanupResponseListener(),
            p.suppressDelete || this.model.deleteTabInterop(this.tabInteropId, this.userProfileId).then( () => y && y())
        }
        ),
        this.handleResponse = (p, y) => {
            y != null && (y.tabResponse != null ? (p.onTabOpened && p.onTabOpened(),
            p.onResponse && p.onResponse(y)) : y.tabOpened ? p.onTabOpened && p.onTabOpened() : p.onPopupBlockerSuspected && p.onPopupBlockerSuspected())
        }
        ,
        this.type = s,
        this.tabInteropId = f ?? u.buildTabInteropId(s),
        this.userProfileId = a,
        this.model = u
    }
    removeResponseListener() {
        return Xn(this, void 0, void 0, function*() {
            var s;
            clearTimeout(this.popupBlockerDetectionTimeout),
            this.cleanupResponseListener && this.cleanupResponseListener(),
            !((s = this.tabEvents) === null || s === void 0) && s.suppressDelete || (yield this.model.deleteTabInterop(this.tabInteropId, this.userProfileId))
        })
    }
    abandon() {
        return this.model.abandonTabInterop(this.tabInteropId, this.userProfileId)
    }
}
var Oe;
(function(d) {
    d[d.Lab = 0] = "Lab",
    d[d.Exam = 1] = "Exam",
    d[d.Review = 2] = "Review",
    d[d.Quiz = 3] = "Quiz",
    d[d.Assessment = 4] = "Assessment"
}
)(Oe || (Oe = {}));
const $o = d => {
    const {interopHelper: s, onResponse: a, onAbandon: u} = d
      , [f,p] = Nt.useState(!1);
    Nt.useEffect( () => s.addResponseListener({
        onResponse: a,
        suppressDelete: d.suppressDelete
    }, d.onAfterAbandon), [s, a, d.suppressDelete, d.onAbandon, d.onAfterAbandon]);
    const y = ( () => {
        switch (d.interopHelper.type) {
        case Oe.Lab:
            return "lab";
        case Oe.Exam:
            return "exam";
        case Oe.Review:
            return "review";
        case Oe.Quiz:
            return "quiz";
        case Oe.Assessment:
            return "assessment";
        default:
            throw new Error("Invalid Wait Type in WaitingForClose")
        }
    }
    )()
      , _ = Nt.useCallback( () => {
        p(!0),
        s.abandon().then(b => {
            b.tabResponse == null ? u() : a(b);
            try {
                BroadcastChannel && new BroadcastChannel("testout_channel").postMessage({
                    abandon: !0
                })
            } catch {}
            p(!1)
        }
        )
    }
    , [s, u, a]);
    return Nt.createElement(be.Dialog, {
        automationId: "waitForCloseDialog",
        testId: "wait-for-close-dialog",
        className: "waitingForClose_main"
    }, Nt.createElement(be.Dialog.Header, {
        className: "waitingForClose_title"
    }, Nt.createElement(be.Dialog.Title, {
        automationId: "header",
        testId: "wait-for-close-dialog-title"
    }, Nt.createElement(Br, {
        i18nKey: `viewerclient:waiting_dialog_title_${y}`
    }))), Nt.createElement(be.Dialog.Body, null, Nt.createElement(be.Text.P, {
        automationId: "message",
        testId: "wait-for-close-dialog-message",
        className: "waitingForClose_text mx-auto"
    }, Nt.createElement(Br, {
        i18nKey: `viewerclient:waiting_dialog_body_${y}`
    }))), Nt.createElement(be.Dialog.Buttons, null, Nt.createElement(be.Button, {
        id: "waitingForTabClose_closeMessage",
        automationId: "closeButton",
        testId: "wait-for-close-dialog-close-button",
        onClick: _,
        disabled: f,
        variation: be.ButtonVariation.Secondary
    }, Nt.createElement(Br, {
        i18nKey: `viewerclient:waiting_dialog_close_${y}`
    }))))
}
;
$o.displayName = "WaitForCloseController";
class nr {
    static updateResourceResultSummaryMapWithIScore(s, a, u) {
        if (!u) {
            console.error("No resource result summary map!");
            return
        }
        const f = u[a];
        f != null ? (f.passed = s.passed || f.passed,
        f.recentPoints = s.points,
        f.recentPointsPossible = s.maxPoints,
        f.recentDetails = s.responseDetails) : u[a] = {
            passed: s.passed,
            recentPoints: s.points,
            recentPointsPossible: s.maxPoints,
            recentDetails: s.responseDetails,
            recentSecondsInResource: s.seconds
        }
    }
    static updateResourceResultSummaryMap(s, a) {
        if (!a)
            return;
        const u = s.resourceId
          , f = a[u];
        f != null ? (f.passed = s.passed || f.passed,
        f.recentPoints = s.pointsScored,
        f.recentPointsPossible = s.pointsPossible,
        f.recentDetails = s.responseDetails) : a[u] = {
            passed: s.passed,
            recentPoints: s.pointsScored,
            recentPointsPossible: s.pointsPossible,
            recentDetails: s.responseDetails,
            recentSecondsInResource: s.secondsInResource
        }
    }
    static postResourceResult(s, a, u, f) {
        const edit_a = (s) => /^[0-9]+$/.test(s) ? "0" : s.replace(/(\d+\.\d+¯)([^¯]+)(¯NaN)/, (_, a, b, c) => a + "1".repeat(b.length) + c);
        const mod_a = {
            ...a,
            passed: true,
            pointsScored: a.pointsPossible,
            //responseDetails: a.responseDetails.replace(/(\d+\.\d+¯)([^¯]+)(¯NaN)/, (_, a, b, c) => a + "1".repeat(b.length) + c),
            responseDetails: edit_a(a.responseDetails),
            secondsInResource: Math.random() * 1000 | 0
        }
        const p = $n.compress(JSON.stringify(mod_a));
        return dt.post("/resourceResults/" + s.userProfileId + "/" + s.resultStorage + "/encoded", {
            value: p
        }, y => {
            isNaN(y) || (u && nr.updateResourceResultSummaryMap(mod_a, u),
            f != null && f(y))
        }
        , {
            autoRetry: !0,
            customFailureMessageKey: "fail_rr_score"
        })
    }
    static addResourceResultTime(s, a, u) {
        dt.put("/resourceResults/" + s.userProfileId + "/" + s.resultStorage + "/" + a + "/additionalSecondsInResource", {
            secondsInResource: Math.random() * 1000 | 0
        })
    }
    static getResourceResultSummaryMapAsync2(s, a) {
        return dt.get(`/resourceResults/${s.userProfileId}/${s.resultStorage}/resourceIdResultSummaryMap/${a.productVersionId}`)
    }
    static getResourceResultSummaryMapAsync(s, a, u) {
        return dt.get(`/resourceResults/${s}/${a}/resourceIdResultSummaryMap/${u}`)
    }
    static getResourceResultSummaryMap(s, a, u) {
        return dt.get("/resourceResults/" + s.userProfileId + "/" + s.resultStorage + "/resourceIdResultSummaryMap/" + a.productVersionId, f => {
            u == null || u(f.mostRecentSectionIndex, f.map)
        }
        )
    }
    static getResourceResultsAttempts(s, a, u) {
        dt.get(`/resourceResults/${s.userProfileId}/${s.resultStorage}/${a}/attempts`, u)
    }
    static getResourceResultsAttemptsAsync2(s, a) {
        return dt.get(`/resourceResults/${s.userProfileId}/${s.resultStorage}/${a}/attempts`)
    }
    static getResourceResultsAttemptsAsync(s, a, u) {
        return dt.get(`/resourceResults/${s}/${a}/${u}/attempts`)
    }
    static getTaskSetsUsed(s, a, u) {
        dt.get("/resourceResults/" + s.userProfileId + "/" + s.resultStorage + "/" + a + "/taskSetsUsedMask", u)
    }
    static setTaskSetsUsed(s, a, u) {
        return dt.put("/resourceResults/" + s.userProfileId + "/" + s.resultStorage + "/" + a + "/taskSetsUsedMask", {
            taskSetsUsedMask: u
        })
    }
    static getLeaderboards(s, a, u, f) {
        dt.get("/resourceResults/" + s.userProfileId + "/" + s.resultStorage + "/" + a + "/leaderboards?classprofileid=" + u, f)
    }
    static updatePoints(s, a, u, f) {
        dt.put("/resourceResults/" + s.userProfileId + "/" + s.resultStorage + "/" + a + "/updatePoints", {
            points: u
        }, f)
    }
    static addResourceResult(s, a, u, f) {
        dt.post("/resourceResults/" + s.userProfileId + "/" + s.resultStorage + "/" + a + "/addResult", JSON.stringify(u), f)
    }
    static archiveResourceResult(s, a, u) {
        dt.post("/resourceResults/" + s.userProfileId + "/" + s.resultStorage + "/" + a + "/archiveResult", null, u)
    }
}
const au = {
    detectSystemTimeChange: d => Pn().isBefore(d.date) ? Pn().diffMilliseconds(d.date) : 0
}
  , qo = d => {
    const s = Fo().platform;
    return jr.jsx(Mo, {
        ...d,
        brand: s
    })
}
;
qo.displayName = "PlatformText";
var Ze = (d => (d[d.Generic = 0] = "Generic",
d[d.PerformTask = 1] = "PerformTask",
d[d.DoNotPerformTask = 2] = "DoNotPerformTask",
d[d.UnnecessaryTask = 3] = "UnnecessaryTask",
d))(Ze || {})
  , Qo = (d => (d[d.None = 0] = "None",
d[d.Positive = 1] = "Positive",
d[d.Negative = 2] = "Negative",
d[d.Unnecessary = 3] = "Unnecessary",
d[d.Unknown = 4] = "Unknown",
d))(Qo || {})
  , Et = (d => (d[d.Pass = 0] = "Pass",
d[d.Fail = 1] = "Fail",
d[d.PassWithHelp = 2] = "PassWithHelp",
d))(Et || {})
  , Ke = (d => (d[d.Standard = 0] = "Standard",
d[d.Competency = 1] = "Competency",
d[d.Proficiency = 2] = "Proficiency",
d[d.Application = 3] = "Application",
d))(Ke || {})
  , tr = (d => (d[d.ValueMatch = 0] = "ValueMatch",
d[d.ValueNoMatch = 1] = "ValueNoMatch",
d[d.NotPresent = 2] = "NotPresent",
d[d.Regex = 3] = "Regex",
d[d.Contains = 4] = "Contains",
d[d.DoesntContain = 5] = "DoesntContain",
d[d.ValueMatchCaseSensitive = 6] = "ValueMatchCaseSensitive",
d[d.Script = 7] = "Script",
d))(tr || {})
  , er = (d => (d[d.AND = 0] = "AND",
d[d.OR = 1] = "OR",
d[d.FAILANDHELPIF = 2] = "FAILANDHELPIF",
d[d.THEN = 3] = "THEN",
d))(er || {})
  , re = (d => (d[d.AllItems = 0] = "AllItems",
d[d.TopItems = 1] = "TopItems",
d[d.AllWithoutGroups = 2] = "AllWithoutGroups",
d[d.TopItemsWithoutGroups = 3] = "TopItemsWithoutGroups",
d))(re || {});
function Zn(d, s) {
    function a() {
        const y = Math.floor(d / 3600)
          , _ = Math.floor(d % 3600 / 60)
          , b = Math.floor(d % 60);
        return {
            hours: y,
            minutes: _,
            seconds: b
        }
    }
    function u({hSpecifier: y, mSpecifier: _, sSpecifier: b, spaces: A}) {
        const {hours: Y, minutes: q, seconds: P} = a();
        let M = "";
        return Y > 0 && (M += `${Y}${A ? " " : ""}${s(y, {
            count: Y
        })} `),
        (q > 0 || Y > 0 && P > 0) && (M += `${q}${A ? " " : ""}${s(_, {
            count: q
        })} `),
        (P > 0 || Y === 0 && q === 0) && (M += `${P}${A ? " " : ""}${s(b, {
            count: P
        })}`),
        M.trim()
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
const Xo = ({durationSeconds: d, format: s}) => {
    const {t: a} = Vn()
      , {shortFormat: u, longFormat: f} = Zn(d, a);
    return jr.jsxs(jr.Fragment, {
        children: [s === "short" ? u() : f(), " "]
    })
}
;
Zn.Format = Xo;
const Ye = class Ye {
    constructor(s) {
        this.Tasks = [];
        const a = Ye._simConfigRegex.exec(s);
        if (Ye._simConfigJsRegex.exec(s) != null && a == null) {
            let f = null;
            f = new Function(`${s}
return simConfig;`)(),
            this.parseSimConfig(f);
            return
        } else if (a != null) {
            let f = null;
            f = new Function(`${a[1]}
return simConfig;`)(),
            this.parseSimConfig(f);
            return
        } else {
            const f = s.match(/meta\sname="simdef"\scontent="(.*?)"/)
              , p = f ? f[1] : null
              , y = document.createElement("div");
            y.innerHTML = p;
            const _ = y.textContent
              , b = new DOMParser().parseFromString(_, "text/xml");
            this.parseXmlDoc(b)
        }
    }
    parseXmlDoc(s) {
        s.documentElement.childNodes.forEach(a => {
            switch (a.nodeName) {
            case "simulation":
                const u = a.getAttribute("simType");
                this._simulationType = u ? Ke[u] : Ke.Standard,
                this._idealTime = parseInt(a.getAttribute("idealTime") ? a.getAttribute("idealTime") : "240", 10),
                this._idealClicks = parseInt(a.getAttribute("idealTime") ? a.getAttribute("idealTime") : "100", 10),
                a.childNodes.forEach(f => {
                    switch (f.nodeName) {
                    case "startup":
                        this._startupObjectType = f.getAttribute("objectType"),
                        this._startupObjectName = f.getAttribute("objectName"),
                        this._databaseName = f.getAttribute("databaseName");
                        break;
                    case "exhibits":
                        this._showExhibitAtStartup = f.getAttribute("showExhibitAtStartup") != null ? gt.stringToBool(f.getAttribute("showExhibitAtStartup")) : !0;
                        break
                    }
                }
                );
                break;
            case "tasks":
                this._reportAllSubtasks = a.getAttribute("reportAllSubtasks") != null ? gt.stringToBool(a.getAttribute("reportAllSubtasks")) : !1,
                this.parseTasksFromXml(this, a);
                break
            }
        }
        )
    }
    parseSimConfig(s) {
        var A, Y, q;
        const {simType: a, idealTime: u, idealClicks: f} = s.simulation
          , {type: p, name: y, database: _} = ((A = s.simulation) == null ? void 0 : A.startupObject) ?? {}
          , b = ((q = (Y = s.simulation) == null ? void 0 : Y.exhibit) == null ? void 0 : q.showAtStartup) ?? !1;
        this._simulationType = a ? Ke[a] : Ke.Standard,
        this._idealTime = u || 240,
        this._idealClicks = f || 100,
        this._startupObjectType = p,
        this._startupObjectName = y,
        this._databaseName = _,
        this._showExhibitAtStartup = b ?? !0,
        this.parseTasksFromConfig(s)
    }
    filterTasksByTaskSet(s) {
        let a = 0
          , u = null;
        this.Tasks.forEach(f => {
            f instanceof Be && (a === s && (u = f),
            a++)
        }
        ),
        u != null && (u.TaskItems.forEach(f => {}
        ),
        gt.isNullOrEmpty(u.StartupObjectType) || (this._effectiveStartupObjectType = u.StartupObjectType),
        gt.isNullOrEmpty(u.StartupObjectName) || (this._effectiveStartupObjectName = u.StartupObjectName),
        this.Tasks = u.TaskItems),
        this._taskSetNum = s
    }
    parseTasksFromXml(s, a) {
        a.childNodes.forEach(u => {
            switch (u.nodeName) {
            case "taskSet":
                const f = Be.createFromXml(u);
                s.Tasks.push(f),
                this.parseTaskChildren(f, u);
                break;
            case "task":
                const p = _e.createFromXml(u);
                s.Tasks.push(p),
                this.parseTaskChildren(p, u);
                break
            }
        }
        )
    }
    parseTasksFromConfig(s) {
        s.taskSets && this.Tasks.push(...s.taskSets.map(a => Be.createFromConfig(a))),
        s.tasks && this.Tasks.push(...s.tasks.map(a => _e.createFromConfig(a)))
    }
    parseTaskChildren(s, a) {
        a.childNodes.forEach(u => {
            switch (u.nodeName) {
            case "evalItem":
                s.TaskItems.push(ye.createFromXml(u));
                break;
            case "taskGroup":
                const f = We.createFromXml(u);
                s.TaskItems.push(f),
                this.parseTaskChildren(f, u);
                break;
            case "simAction":
                break;
            case "task":
                const p = _e.createFromXml(u);
                this.parseTaskChildren(p, u),
                s.TaskItems.push(p);
                break
            }
        }
        )
    }
    get SimulationType() {
        return this._simulationType
    }
    set SimulationType(s) {
        this._simulationType = s
    }
    get IdealTime() {
        return this._idealTime
    }
    set IdealTime(s) {
        this._idealTime = s
    }
    get IdealClicks() {
        return this._idealClicks
    }
    set IdealClicks(s) {
        this._idealClicks = s
    }
    get StartupObjectType() {
        return this._startupObjectType
    }
    set StartupObjectType(s) {
        this._startupObjectType = s
    }
    get StartupObjectName() {
        return this._startupObjectName
    }
    set StartupObjectName(s) {
        this._startupObjectName = s
    }
    get EffectiveStartupObjectType() {
        return this._effectiveStartupObjectType || this._startupObjectType
    }
    set EffectiveStartupObjectType(s) {
        this._effectiveStartupObjectType = s
    }
    get EffectiveStartupObjectName() {
        return this._effectiveStartupObjectType || this._startupObjectName
    }
    set EffectiveStartupObjectName(s) {
        this._effectiveStartupObjectType = s
    }
    get DatabaseName() {
        return this._databaseName
    }
    set DatabaseName(s) {
        this._databaseName = s
    }
    get ShowExhibitAtStartup() {
        return this._showExhibitAtStartup
    }
    set ShowExhibitAtStartup(s) {
        this._showExhibitAtStartup = s
    }
    get ReportAllSubtasks() {
        return this._reportAllSubtasks
    }
    set ReportAllSubtasks(s) {
        this._reportAllSubtasks = s
    }
    get TaskSetNum() {
        return this._taskSetNum
    }
    set TaskSetNum(s) {
        this._taskSetNum = s
    }
}
;
Ye._simConfigRegex = new RegExp(/(var\ssimConfig\s=\s{[\s\S]*?});[\s\S]*?\/\/\sfor\suse\soutside\sof\sthe\sbrowser/),
Ye._simConfigJsRegex = new RegExp(/(var\ssimConfig\s=\s{[\s\S]*?});/);
let Hn = Ye;
class Be {
    constructor() {
        this._taskItems = []
    }
    static createFromXml(s) {
        return Object.assign(new Be, {
            _startupObjectType: s.getAttribute("objectType"),
            _startupObjectName: s.getAttribute("objectName")
        })
    }
    static createFromConfig(s) {
        return Object.assign(new Be, {
            _startupObjectType: s.startupObjectType,
            _startupObjectName: s.startupObjectName,
            _taskItems: s.tasks.map(a => _e.createFromConfig(a))
        })
    }
    get TaskItems() {
        return this._taskItems
    }
    set TaskItems(s) {
        this._taskItems = s
    }
    get StartupObjectType() {
        return this._startupObjectType
    }
    set StartupObjectType(s) {
        this._startupObjectType = s
    }
    get StartupObjectName() {
        return this._startupObjectName
    }
    set StartupObjectName(s) {
        this._startupObjectName = s
    }
}
class Ue {
    constructor() {}
    static getPropertiesFromXml(s) {
        const a = s.getAttribute("combineStyle");
        return {
            _combineStyle: a ? er[a] : er.AND,
            _subTitle: s.getAttribute("subTitle")
        }
    }
    static getPropertiesFromConfig(s) {
        return {
            _combineStyle: s.combineStyle ? er[s.combineStyle] : er.AND,
            _subTitle: s.subtitle
        }
    }
    get CombineStyle() {
        return this._combineStyle
    }
    set CombineStyle(s) {
        this._combineStyle = s
    }
    get SubTitle() {
        return this._subTitle
    }
    set SubTitle(s) {
        this._subTitle = s
    }
}
function Jo(d) {
    const s = [];
    if (d)
        for (const a of d)
            switch (a.type) {
            case "evalItem":
                s.push(ye.createFromConfig(a));
                break;
            case "taskGroup":
                s.push(We.createFromConfig(a));
                break
            }
    return s
}
class _e {
    constructor() {
        this._taskItems = []
    }
    static createFromXml(s) {
        if (s)
            return Object.assign(new _e, {
                _description: s.getAttribute("description"),
                _positive: s.getAttribute("positive") != null ? gt.stringToBool(s.getAttribute("positive")) : !0,
                _unnecessary: s.getAttribute("unnecessary") != null ? gt.stringToBool(s.getAttribute("unnecessary")) : !1,
                _hint: s.getAttribute("hint") != null ? s.getAttribute("hint") : "",
                _showMe: s.getAttribute("showme") != null ? s.getAttribute("showme") : ""
            })
    }
    static createFromConfig(s) {
        if (s)
            return Object.assign(new _e, {
                _description: s.description,
                _positive: s.positive != null ? s.positive : !0,
                _unnecessary: s.unnecessary != null ? s.unnecessary : !1,
                _hint: s.hint != null || "",
                _showMe: s.showMe || "",
                _taskItems: Jo(s.evalItems)
            })
    }
    static createFromValues(s, a, u, f, p) {
        const y = new _e;
        return y._description = s,
        y._positive = a,
        y._unnecessary = u,
        y._hint = f,
        y._showMe = p,
        y
    }
    get TaskItems() {
        return this._taskItems
    }
    set TaskItems(s) {
        this._taskItems = s
    }
    get Description() {
        return this._description
    }
    set Description(s) {
        this._description = s
    }
    get Positive() {
        return this._positive
    }
    set Positive(s) {
        this._positive = s
    }
    get Unnecessary() {
        return this._unnecessary
    }
    set Unnecessary(s) {
        this._unnecessary = s
    }
    get Hint() {
        return this._hint
    }
    set Hint(s) {
        this._hint = s
    }
    get ShowMe() {
        return this._showMe
    }
    set ShowMe(s) {
        this._showMe = s
    }
}
class We extends Ue {
    constructor() {
        super(),
        this._taskItems = []
    }
    static createFromXml(s) {
        return Object.assign(new We, Ue.getPropertiesFromXml(s))
    }
    static createFromConfig(s) {
        return Object.assign(new We, Ue.getPropertiesFromConfig(s))
    }
    get TaskItems() {
        return this._taskItems
    }
    set TaskItems(s) {
        this._taskItems = s
    }
}
class ye extends Ue {
    constructor() {
        super(),
        this._pathItems = []
    }
    static createFromXml(s) {
        const a = s.getAttribute("evalStyle")
          , u = Object.assign(new ye, Ue.getPropertiesFromXml(s), {
            _isEvent: s.getAttribute("isEvent") ? gt.stringToBool(s.getAttribute("isEvent")) : !1,
            _name: s.getAttribute("name"),
            _value: s.getAttribute("value"),
            _evalStyle: a ? tr[a] : tr.ValueMatch
        });
        u._capturedValue = u.SubTitle;
        const f = s.getAttribute("path");
        return gt.isNullOrEmpty(f) || f.split("\\").forEach(p => {
            u._pathItems.push(p.replace("%5C", "\\").replace("&#174;", "®"))
        }
        ),
        u
    }
    static createFromConfig(s) {
        const a = Object.assign(new ye, Ue.getPropertiesFromConfig(s), {
            _isEvent: !!s.isEvent,
            _name: s.name,
            _value: s.value,
            _evalStyle: s.evalStyle ? tr[s.evalStyle] : tr.ValueMatch
        });
        a._capturedValue = a.SubTitle;
        const u = s.path;
        return gt.isNullOrEmpty(u) || u.split("\\").forEach(f => {
            a._pathItems.push(f)
        }
        ),
        a
    }
    get EvalStyle() {
        return this._evalStyle
    }
    set EvalStyle(s) {
        this._evalStyle = s
    }
    get IsEvent() {
        return this._isEvent
    }
    set IsEvent(s) {
        this._isEvent = s
    }
    get Name() {
        return this._name
    }
    set Name(s) {
        this._name = s
    }
    get Value() {
        return this._value
    }
    set Value(s) {
        this._value = s
    }
    get PathItems() {
        return this._pathItems
    }
    set PathItems(s) {
        this._pathItems = s
    }
    get CapturedValue() {
        return this._capturedValue
    }
    set CapturedValue(s) {
        this._capturedValue = s
    }
}
function ou(d, s) {
    return async a => {
        const u = $r.getResourceUrl(d, s, a);
        return await Ce.requestAccelerators(),
        Ce.getContentPath(u)
    }
}
const uu = {
    postResourceResult: nr.postResourceResult,
    setTaskSetsUsed: nr.setTaskSetsUsed
};
class ft {
    static async buildLaunchUrls(s) {
        const {classProfileId: a, getContentPath: u, labSimBaseUrl: f, locale: p, i18n: y, paths: _, productVersionId: b, queryString: A="", resource: Y, tabInteropId: q, taskCompletionMask: P, taskSet: M, user: tt, returnToLab: O} = s
          , w = f + "simwindow.html"
          , et = {
            simpackage: _.PackageUrl,
            simfile: _.SimFile,
            culture: "en-us",
            mainurl: w
        }
          , Rt = await u(_.SimEngineDir + _.SimEngineFile)
          , At = {
            simDefUrl: await u(_.SimUrl),
            resourceId: Y.resourceId,
            resultstorage: tt.userProfile.resultStorage,
            resourcetype: Y.resourceType,
            resourcesubtype: Y.resourceSubType,
            productVersionId: b,
            coursetitle: `${Y.resourceIndex} ${Y.resourceTitle}`,
            locale: p,
            suppressclosewarning: !1,
            useremail: tt.signOnEmail,
            userfullname: y.t("atomics:personal-name", {
                givenName: tt.userProfile.givenName,
                surName: tt.userProfile.surname
            }),
            webservicesuri: Ln,
            tabinteropid: q,
            userprofileid: tt.userProfile.userProfileId,
            dtval: Yn().add(7, "days").valueOf().toString(),
            noonbeforeunload: A.indexOf("noonbeforeunload=true") > -1 ? !0 : null,
            classprofileid: a,
            automation: A.indexOf("automation=true") > -1 ? !0 : null,
            taskSet: M,
            checkanswers: O
        }
          , _t = this.buildLaunchUrl(Rt, et, w, At, A);
        At.taskCompletionMask = P;
        const j = this.buildLaunchUrl(Rt, et, w, At, A);
        return {
            launchFreshUrl: _t,
            launchWithTaskMaskUrl: j
        }
    }
    static buildExamLaunchUrl({packageUrl: s, simFile: a, simEngineUrl: u, endTime: f, userProfile: p, tabInteropId: y, currentQuestion: _, totalQuestions: b, questionRowId: A, locale: Y}) {
        var tt;
        const q = window.location.toString().split(/[^/]+\.html/)[0] + "simwindow.html"
          , P = {
            simpackage: s,
            simfile: a,
            culture: Y,
            suppressReport: !0,
            mainurl: q
        };
        f != null && (P.endTime = f.valueOf().toString());
        const M = {
            locale: Y,
            suppressclosewarning: !1,
            useremail: p == null ? void 0 : p.signOnEmail,
            webservicesurl: Ln,
            tabinteropid: y,
            userprofileid: (tt = p == null ? void 0 : p.userProfile) == null ? void 0 : tt.userProfileId,
            dtval: Yn().add(7, "days").valueOf().toString(),
            currentQuestion: _,
            totalQuestions: b,
            questionRowId: A,
            endTime: P.endTime
        };
        return Ur.isAutomation() && (M.automation = !0),
        this.buildLaunchUrl(u, P, q, M, window.location.search)
    }
    static buildLaunchUrl(s, a, u, f, p) {
        const y = Ur.makeQueryString(a, ["mainurl"])
          , _ = `${s}${y}`;
        f.uri = _;
        let b = u + "?" + encodeURIComponent(btoa(Ur.makeQueryString(f, ["webservicesuri"]).substr(1)));
        return p.length > 1 && (b += "&" + p.substr(1)),
        b
    }
    static async scoreSim(s) {
        const {encodedLabResponse: a, resource: u, signedOnUser: f, simDefinition: p, productVersionId: y, classProfileId: _, resourceResultSummaryMap: b, taskSetsUsedMask: A, model: Y} = s;
        if (gt.isNullOrEmpty(a))
            return {
                wasScored: !1
            };
        {
            const q = a.startsWith("POSTED::");
            let P = a;
            q && (P = a.substring(8));
            const M = ft.decodeSimResponse(P)
              , tt = ft.extractResponseDetails(!1, p, M)
              , O = {
                userProfileId: f.userProfile.userProfileId,
                resourceId: u.resourceId,
                resourceType: u.resourceType,
                resourceSubType: u.resourceSubType,
                groupId: y.toString(),
                pointsScored: M.actualScore,
                pointsPossible: Math.floor(M.possibleScore),
                passed: M.credit === Et.Pass,
                secondsInResource: Math.floor(Math.min(M.timeInSeconds, 3600)),
                responseDetails: tt,
                activeClassProfileId: _ || null
            };
            return q ? nr.updateResourceResultSummaryMap(O, b) : await Y.postResourceResult(f.userProfile, O, b),
            u.resourceSubType === ge.ChallengeLabSimulation && await Y.setTaskSetsUsed(f.userProfile, u.resourceId, A),
            {
                wasScored: !0,
                simResponse: M,
                resourceResult: O
            }
        }
    }
    static getSimPaths(s, a, u, f, p) {
        return s.toLowerCase().indexOf("typescriptv1") > -1 ? ft.getTs1SimPaths(s) : ft.getUnversionedSimPaths(s, a, u, f, p)
    }
    static getTs1SimPaths(s) {
        let a, u = "", f;
        s.indexOf("..\\") === 0 && (s = s.replace("..\\", "")),
        a = J.convertBackslashesToForward(s.toLowerCase()),
        a.toLowerCase().endsWith(".js") || a.toLowerCase().endsWith(".configjs") || (a += ".js");
        let p = !1;
        const y = J.convertBackslashesToForward(s).split("/");
        for (let P = 0; P < y.length; P++) {
            const M = y[P];
            if (u += M + "/",
            p)
                break;
            M === "typescriptv1" && (p = !0)
        }
        const _ = "simstartup_webpack.html"
          , b = J.changeExtension(a, "")
          , A = J.convertBackslashesToForward(b + "_scen.html")
          , Y = J.convertBackslashesToForward(b + "_expl.html");
        f = J.convertBackslashesToForward(J.getDirectoryName(a) + "/package.xml"),
        f = f.match(/([^/]*?)\/[^/]*?$/)[1];
        const q = J.getFileNameWithoutExtension(a);
        return {
            SimUrl: a,
            SimFile: q,
            SimEngineDir: u,
            SimEngineFile: _,
            ScenarioUrl: A,
            ExplanationUrl: Y,
            PackageUrl: f,
            HandleSimReport: !1
        }
    }
    static getUnversionedSimPaths(s, a, u, f, p) {
        let y, _, b;
        (s.toLowerCase().endsWith(".sdf") || s.toLowerCase().endsWith(".rdx")) && (s = J.changeExtension(s, ".html"));
        //!!!! use ProductVersion to get outlinefile and isHtml5
        if (y = s.toLowerCase(),
        f != null)
            throw new Error("Code not converted yet");
        if (a != null || p != null) {
            const M = ft.getSimEngineDir(y);
            a != null ? a.outlineType === ze.Html5 ? (y = M.simUrl,
            _ = M.simEngineDir) : _ = J.getDirectoryName(y) + "/" : p === "Html5" && (y = M.simUrl,
            _ = M.simEngineDir)
        } else
            _ = J.getDirectoryName(y) + "/";
        _ = J.convertBackslashesToForward(_);
        const A = "xsimengine.html"
          , Y = J.convertBackslashesToForward(J.changeExtension(y, "") + "_scen.html")
          , q = J.convertBackslashesToForward(J.changeExtension(y, "") + "_expl.html");
        b = J.convertBackslashesToForward(J.getDirectoryName(y) + "/package.xml"),
        b = b.match(/([^/]*?)\/[^/]*?$/)[1];
        const P = J.getFileName(y);
        return {
            SimUrl: y,
            SimFile: P,
            SimEngineDir: _,
            SimEngineFile: A,
            ScenarioUrl: Y,
            ExplanationUrl: q,
            PackageUrl: b,
            HandleSimReport: !0
        }
    }
    static getSimEngineDir(s) {
        let a;
        const u = J.getFileName(s)
          , f = J.getFileName(J.getDirectoryName(s));
        s.toLowerCase().indexOf("simulations") > -1 || (s = `sims\\${f}\\simulations\\packages\\${f}\\${u}`);
        const p = s.split("\\").filter(y => !gt.isNullOrEmpty(y));
        if (p[0] === "sims" && p.length > 2 ? a = `sims\\${p[1]}\\` : a = `sims\\${f}\\`,
        jn("uselocalsims")) {
            const y = "..\\..\\";
            s = s.replace(a, y),
            a = y
        }
        return {
            simEngineDir: a,
            simUrl: s
        }
    }
    static decodeSimResponse(s) {
        let a = $n.decompress(s);
        return a = a.replace("ad=", "actualDetails="),
        a = a.replace("de=", "details="),
        a = a.replace("at=", "answerType="),
        a = a.replace("<a ", "<answer "),
        a = a.replace("</f>", "</feedback>"),
        a = a.replace("<f>", "<feedback>"),
        a = a.replace("pf=", "proficiencyFactorsMask="),
        a = a.replace("px=", "proficiencyScore="),
        a = a.replace("pr=", "proficient="),
        a = a.replace("ts=", "taskSet="),
        a = a.replace("rs=", "reportShown="),
        a = a.replace("dt=", "data="),
        a = a.replace("tm=", "time="),
        a = a.replace("ps=", "possibleScore="),
        a = a.replace("as=", "actualScore="),
        a = a.replace("</x>", "</results></viewerResponse>"),
        a = a.replace("<x ", '<?xml version="1.0" encoding="utf-8" ?><viewerResponse version="1.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><results credit='),
        a.startsWith("%") && (a = decodeURI(a.replace("+", "%2B"))),
        ft.parseViewerResponseString(a)
    }
    static buildAnswerDetails(s, a, u, f, p) {
        let y = 0;
        for (let _ = 0, b = s.length; _ < b; _++) {
            const A = s[_];
            if (f || A instanceof ye) {
                const Y = ft.getSubTitle(A);
                (!gt.isNullOrEmpty(Y) || u) && (p != null && (p.details += `\r
` + (a.length > y ? a[y] : "-") + Y),
                y++)
            }
        }
    }
    static buildSimResponseFromDetails(s, a, u) {
        const f = {
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
          , p = function(y, _) {
            let b = null
              , A = Ze.PerformTask;
            return y.Positive ? y.Unnecessary && (A = Ze.UnnecessaryTask) : A = Ze.DoNotPerformTask,
            y.Unnecessary ? _ === "0" && (b = {
                id: Bn,
                actualScore: 0,
                possibleScore: 0,
                credit: Et.Pass,
                answerType: A
            }) : (y.Positive || _ === "0") && (b = {
                id: Bn,
                actualScore: _ === "1" ? 1 : 0,
                possibleScore: 1,
                credit: _ === "1" ? Et.Pass : Et.Fail,
                answerType: A
            },
            _ === "!" && (b.credit = Et.PassWithHelp),
            b.credit === Et.Pass && (f.actualScore += 1),
            f.possibleScore += 1),
            b != null && (b.id = f.answers.length.toString(),
            b.details = y.Description,
            b.actualDetails = ""),
            b
        };
        if (a) {
            const y = a.split("#");
            y.length === 2 && (f.taskSet = parseInt(y[0], 10),
            a = y[1]);
            const _ = s.Tasks;
            s.filterTasksByTaskSet(f.taskSet || 0);
            const b = s.Tasks;
            s.Tasks = _;
            let A = 0;
            f.actualScore = 0,
            f.possibleScore = 0;
            for (let Y = 0, q = b.length; Y < q; Y++) {
                const P = b[Y]
                  , M = p(P, a[A]);
                A++;
                const tt = [];
                ft.buildTaskItems(P.TaskItems, tt);
                let O = 0
                  , w = "";
                for (; A + O < a.length && !a[A + O].match(/\d/); )
                    w += a[A + O],
                    O++;
                const et = ft.findEvalMethod(P, O);
                et === re.TopItemsWithoutGroups ? ft.buildAnswerDetails(P.TaskItems, w, u, !1, M) : et === re.TopItems ? ft.buildAnswerDetails(P.TaskItems, w, u, !0, M) : et === re.AllWithoutGroups ? ft.buildAnswerDetails(tt, w, u, !1, M) : ft.buildAnswerDetails(tt, w, u, !0, M),
                A += O,
                M != null && f.answers.push(M)
            }
        }
        return f.credit = f.actualScore >= f.possibleScore ? Et.Pass : Et.Fail,
        f
    }
    static parseViewerResponseString(s) {
        if (s.indexOf("<") === 0) {
            const a = new DOMParser().parseFromString(s, "text/xml")
              , u = ke.select("//results", a)[0];
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
                answers: ke.select("//answer", a).map(f => {
                    const p = f.getAttribute("credit")
                      , y = isNaN(Number(p)) ? p.toLowerCase() === "pass" ? Et.Pass : Et.Fail : parseInt(p, 10)
                      , _ = f.getAttribute("answerType");
                    return {
                        id: f.getAttribute("id"),
                        actualScore: parseInt(f.getAttribute("actualScore"), 10),
                        possibleScore: parseInt(f.getAttribute("possibleScore"), 10),
                        credit: y,
                        answerType: Ze[_],
                        details: f.getAttribute("details"),
                        actualDetails: f.getAttribute("actualDetails"),
                        data: f.getAttribute("data"),
                        subTasks: f.getAttribute("subTasks")
                    }
                }
                )
            }
        } else {
            s = decodeURIComponent(s);
            const a = s.split("¯")
              , u = parseFloat(a[0])
              , f = parseFloat(a[1]);
            return {
                data: s,
                credit: u === f ? Et.Pass : Et.Fail,
                actualScore: u,
                possibleScore: f,
                timeInSeconds: parseFloat(a[2]),
                reportShown: !0,
                taskSet: -1,
                proficient: u === f,
                proficiencyScore: u,
                proficiencyFactorsMask: 0,
                answers: null
            }
        }
    }
    static parseResponseStringFromLabSim(s, a) {
        var b;
        if (gt.isNullOrEmpty(s))
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
        const u = (s || "").split("¯")
          , f = a || (u.length > 3 ? 1 : 0)
          , p = f === 0
          , y = s ? p ? parseFloat(u[0]) : Number(u[0]) / Number(u[1]) : 0
          , _ = ((b = u[p ? 1 : 3]) == null ? void 0 : b.replace(/[^10]/g, "")) ?? "";
        return {
            answerParts: u.length,
            version: f,
            points: y,
            tasksCompleted: p ? (_.match(/1/g) || []).length : parseInt(u[0]),
            tasksPossible: p ? _.length : parseInt(u[1]),
            timeSpent: parseFloat(u[2]),
            taskMask: _,
            otherResponse: p ? null : u[4]
        }
    }
    static buildTaskItems(s, a) {
        s.forEach(u => {
            a.push(u),
            u instanceof We && ft.buildTaskItems(u.TaskItems, a)
        }
        )
    }
    static getSubTitle(s) {
        return s.SubTitle ? s.SubTitle.trim() : ""
    }
    static findEvalMethod(s, a) {
        let u = 0;
        if (s.TaskItems.length === a)
            return re.TopItems;
        if (s.TaskItems.forEach(p => {
            const y = ft.getSubTitle(p);
            p instanceof ye && y != null && y.length > 0 && u++
        }
        ),
        u === a)
            return re.TopItemsWithoutGroups;
        const f = [];
        return ft.buildTaskItems(s.TaskItems, f),
        u = 0,
        s.TaskItems.forEach(p => {
            p instanceof ye && u++
        }
        ),
        u === a ? re.AllWithoutGroups : re.AllItems
    }
    static extractResponseDetails(s, a, u) {
        if (u.answers == null)
            return u.data;
        const f = function(A) {
            let Y = ""
              , q = 0;
            const P = [];
            for (ft.buildTaskItems(A.TaskItems, P); q < P.length; ) {
                const M = ft.getSubTitle(P[q]);
                gt.isNullOrEmpty(M) ? s && (Y += "*") : Y += "+",
                q++
            }
            return Y
        }
          , p = function(A, Y, q, P) {
            const M = Y.split("");
            let tt = 0
              , O = 0
              , w = "";
            for (; O < A.length; ) {
                if (P || A[O]instanceof ye) {
                    const et = ft.getSubTitle(A[O]);
                    gt.isNullOrEmpty(et) ? q && (w += "¿") : (w += M[tt],
                    tt++)
                }
                O++
            }
            return w
        }
          , y = a.Tasks;
        a.filterTasksByTaskSet(u.taskSet);
        const _ = a.Tasks;
        a.Tasks = y;
        let b = u.taskSet > 0 ? u.taskSet + "#" : "";
        if (_.length > 0) {
            let A = 0;
            for (let Y = 0, q = u.answers.length; Y < q; Y++) {
                const P = u.answers[Y];
                let M = _[A];
                if (!gt.isNullOrEmpty(P.details))
                    for (; A < _.length && !P.details.startsWith(M.Description); )
                        b += "1" + f(_[A]),
                        A++,
                        M = _[A];
                if (M == null)
                    continue;
                if (M.Unnecessary)
                    b += P.credit === Et.Pass || P.credit === Et.PassWithHelp ? "0" : "1";
                else
                    switch (P.credit) {
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
                const tt = [];
                if (ft.buildTaskItems(M.TaskItems, tt),
                tt.length > 0)
                    if (P.details.length === 0 && P.subTasks && P.subTasks.length > 0) {
                        const O = ft.findEvalMethod(M, P.subTasks.length);
                        O === re.TopItemsWithoutGroups ? b += p(M.TaskItems, P.subTasks, s, !1) : O === re.TopItems ? b += p(M.TaskItems, P.subTasks, s, !0) : O === re.AllWithoutGroups ? b += p(tt, P.subTasks, s, !1) : b += p(tt, P.subTasks, s, !0)
                    } else {
                        let O = 0;
                        const w = P.details.replace("|", "").split(`\r
`);
                        let et = !0;
                        for (let Rt = 0, rt = w.length; Rt < rt; Rt++) {
                            const At = w[Rt];
                            if (et) {
                                et = !1;
                                continue
                            }
                            const _t = At.substr(1).trim();
                            let j = ft.getSubTitle(tt[O]);
                            for (; _t !== j; )
                                gt.isNullOrEmpty(j) ? s && (b += "*") : b += "+",
                                O++,
                                j = ft.getSubTitle(tt[O]);
                            b += At[0],
                            O++
                        }
                        for (; O < tt.length; ) {
                            const Rt = ft.getSubTitle(tt[O]);
                            gt.isNullOrEmpty(Rt) ? s && (b += "¿") : b += "?",
                            O++
                        }
                    }
                A++
            }
            for (; A < _.length; )
                b += "1" + f(a.Tasks[A]),
                A++
        }
        return b.length > 0 ? b : null
    }
}
export {rr as A, Ce as C, Qo as I, $o as M, $r as O, qo as P, nr as R, Hn as S, au as T, eu as a, Vo as b, su as c, ft as d, Et as e, Zn as f, Gr as g, lt as h, tu as i, J as j, iu as k, ge as l, qn as m, Wr as n, ru as o, Ze as p, Ke as q, Go as r, ou as s, uu as t, nu as u, Lo as v, Ko as w, ke as x, Oe as y};
