goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__31910){
var map__31912 = p__31910;
var map__31912__$1 = (((((!((map__31912 == null))))?(((((map__31912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31912.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31912):map__31912);
var m = map__31912__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31912__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31912__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31917_32268 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31918_32269 = null;
var count__31919_32270 = (0);
var i__31920_32271 = (0);
while(true){
if((i__31920_32271 < count__31919_32270)){
var f_32273 = chunk__31918_32269.cljs$core$IIndexed$_nth$arity$2(null,i__31920_32271);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_32273], 0));


var G__32274 = seq__31917_32268;
var G__32275 = chunk__31918_32269;
var G__32276 = count__31919_32270;
var G__32277 = (i__31920_32271 + (1));
seq__31917_32268 = G__32274;
chunk__31918_32269 = G__32275;
count__31919_32270 = G__32276;
i__31920_32271 = G__32277;
continue;
} else {
var temp__5735__auto___32278 = cljs.core.seq(seq__31917_32268);
if(temp__5735__auto___32278){
var seq__31917_32279__$1 = temp__5735__auto___32278;
if(cljs.core.chunked_seq_QMARK_(seq__31917_32279__$1)){
var c__4550__auto___32280 = cljs.core.chunk_first(seq__31917_32279__$1);
var G__32285 = cljs.core.chunk_rest(seq__31917_32279__$1);
var G__32286 = c__4550__auto___32280;
var G__32287 = cljs.core.count(c__4550__auto___32280);
var G__32288 = (0);
seq__31917_32268 = G__32285;
chunk__31918_32269 = G__32286;
count__31919_32270 = G__32287;
i__31920_32271 = G__32288;
continue;
} else {
var f_32289 = cljs.core.first(seq__31917_32279__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_32289], 0));


var G__32292 = cljs.core.next(seq__31917_32279__$1);
var G__32293 = null;
var G__32294 = (0);
var G__32295 = (0);
seq__31917_32268 = G__32292;
chunk__31918_32269 = G__32293;
count__31919_32270 = G__32294;
i__31920_32271 = G__32295;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_32297 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_32297], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_32297)))?cljs.core.second(arglists_32297):arglists_32297)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31928_32304 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31929_32305 = null;
var count__31930_32306 = (0);
var i__31931_32307 = (0);
while(true){
if((i__31931_32307 < count__31930_32306)){
var vec__31960_32308 = chunk__31929_32305.cljs$core$IIndexed$_nth$arity$2(null,i__31931_32307);
var name_32309 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31960_32308,(0),null);
var map__31963_32310 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31960_32308,(1),null);
var map__31963_32311__$1 = (((((!((map__31963_32310 == null))))?(((((map__31963_32310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31963_32310.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31963_32310):map__31963_32310);
var doc_32312 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31963_32311__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32313 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31963_32311__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_32309], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_32313], 0));

if(cljs.core.truth_(doc_32312)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_32312], 0));
} else {
}


var G__32317 = seq__31928_32304;
var G__32318 = chunk__31929_32305;
var G__32319 = count__31930_32306;
var G__32320 = (i__31931_32307 + (1));
seq__31928_32304 = G__32317;
chunk__31929_32305 = G__32318;
count__31930_32306 = G__32319;
i__31931_32307 = G__32320;
continue;
} else {
var temp__5735__auto___32321 = cljs.core.seq(seq__31928_32304);
if(temp__5735__auto___32321){
var seq__31928_32322__$1 = temp__5735__auto___32321;
if(cljs.core.chunked_seq_QMARK_(seq__31928_32322__$1)){
var c__4550__auto___32323 = cljs.core.chunk_first(seq__31928_32322__$1);
var G__32324 = cljs.core.chunk_rest(seq__31928_32322__$1);
var G__32325 = c__4550__auto___32323;
var G__32326 = cljs.core.count(c__4550__auto___32323);
var G__32327 = (0);
seq__31928_32304 = G__32324;
chunk__31929_32305 = G__32325;
count__31930_32306 = G__32326;
i__31931_32307 = G__32327;
continue;
} else {
var vec__31973_32328 = cljs.core.first(seq__31928_32322__$1);
var name_32329 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31973_32328,(0),null);
var map__31976_32330 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31973_32328,(1),null);
var map__31976_32331__$1 = (((((!((map__31976_32330 == null))))?(((((map__31976_32330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31976_32330.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31976_32330):map__31976_32330);
var doc_32332 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31976_32331__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32333 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31976_32331__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_32329], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_32333], 0));

if(cljs.core.truth_(doc_32332)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_32332], 0));
} else {
}


var G__32346 = cljs.core.next(seq__31928_32322__$1);
var G__32348 = null;
var G__32349 = (0);
var G__32350 = (0);
seq__31928_32304 = G__32346;
chunk__31929_32305 = G__32348;
count__31930_32306 = G__32349;
i__31931_32307 = G__32350;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__31990 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__31991 = null;
var count__31992 = (0);
var i__31993 = (0);
while(true){
if((i__31993 < count__31992)){
var role = chunk__31991.cljs$core$IIndexed$_nth$arity$2(null,i__31993);
var temp__5735__auto___32356__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___32356__$1)){
var spec_32357 = temp__5735__auto___32356__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_32357)], 0));
} else {
}


var G__32359 = seq__31990;
var G__32360 = chunk__31991;
var G__32361 = count__31992;
var G__32362 = (i__31993 + (1));
seq__31990 = G__32359;
chunk__31991 = G__32360;
count__31992 = G__32361;
i__31993 = G__32362;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__31990);
if(temp__5735__auto____$1){
var seq__31990__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__31990__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__31990__$1);
var G__32363 = cljs.core.chunk_rest(seq__31990__$1);
var G__32364 = c__4550__auto__;
var G__32365 = cljs.core.count(c__4550__auto__);
var G__32366 = (0);
seq__31990 = G__32363;
chunk__31991 = G__32364;
count__31992 = G__32365;
i__31993 = G__32366;
continue;
} else {
var role = cljs.core.first(seq__31990__$1);
var temp__5735__auto___32368__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___32368__$2)){
var spec_32369 = temp__5735__auto___32368__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_32369)], 0));
} else {
}


var G__32373 = cljs.core.next(seq__31990__$1);
var G__32374 = null;
var G__32375 = (0);
var G__32376 = (0);
seq__31990 = G__32373;
chunk__31991 = G__32374;
count__31992 = G__32375;
i__31993 = G__32376;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__32379 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__32380 = cljs.core.ex_cause(t);
via = G__32379;
t = G__32380;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__32074 = datafied_throwable;
var map__32074__$1 = (((((!((map__32074 == null))))?(((((map__32074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32074.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32074):map__32074);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32074__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32074__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__32074__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__32075 = cljs.core.last(via);
var map__32075__$1 = (((((!((map__32075 == null))))?(((((map__32075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32075.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32075):map__32075);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32075__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32075__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32075__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__32076 = data;
var map__32076__$1 = (((((!((map__32076 == null))))?(((((map__32076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32076.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32076):map__32076);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32076__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32076__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32076__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__32077 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__32077__$1 = (((((!((map__32077 == null))))?(((((map__32077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32077):map__32077);
var top_data = map__32077__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32077__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__32093 = phase;
var G__32093__$1 = (((G__32093 instanceof cljs.core.Keyword))?G__32093.fqn:null);
switch (G__32093__$1) {
case "read-source":
var map__32099 = data;
var map__32099__$1 = (((((!((map__32099 == null))))?(((((map__32099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32099.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32099):map__32099);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32099__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32099__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__32108 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__32108__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32108,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__32108);
var G__32108__$2 = (cljs.core.truth_((function (){var fexpr__32113 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__32113.cljs$core$IFn$_invoke$arity$1 ? fexpr__32113.cljs$core$IFn$_invoke$arity$1(source) : fexpr__32113.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__32108__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__32108__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32108__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__32108__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__32119 = top_data;
var G__32119__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32119,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__32119);
var G__32119__$2 = (cljs.core.truth_((function (){var fexpr__32127 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__32127.cljs$core$IFn$_invoke$arity$1 ? fexpr__32127.cljs$core$IFn$_invoke$arity$1(source) : fexpr__32127.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__32119__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__32119__$1);
var G__32119__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32119__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__32119__$2);
var G__32119__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32119__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__32119__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32119__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__32119__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__32128 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32128,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32128,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32128,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32128,(3),null);
var G__32131 = top_data;
var G__32131__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32131,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__32131);
var G__32131__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32131__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__32131__$1);
var G__32131__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32131__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__32131__$2);
var G__32131__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32131__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__32131__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32131__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__32131__$4;
}

break;
case "execution":
var vec__32136 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32136,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32136,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32136,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32136,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (vec__32136,source__$1,method,file,line,G__32093,G__32093__$1,map__32074,map__32074__$1,via,trace,phase,map__32075,map__32075__$1,type,message,data,map__32076,map__32076__$1,problems,fn,caller,map__32077,map__32077__$1,top_data,source){
return (function (p1__32064_SHARP_){
var or__4131__auto__ = (p1__32064_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var fexpr__32145 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__32145.cljs$core$IFn$_invoke$arity$1 ? fexpr__32145.cljs$core$IFn$_invoke$arity$1(p1__32064_SHARP_) : fexpr__32145.call(null,p1__32064_SHARP_));
}
});})(vec__32136,source__$1,method,file,line,G__32093,G__32093__$1,map__32074,map__32074__$1,via,trace,phase,map__32075,map__32075__$1,type,message,data,map__32076,map__32076__$1,problems,fn,caller,map__32077,map__32077__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__32146 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__32146__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32146,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__32146);
var G__32146__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32146__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__32146__$1);
var G__32146__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32146__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__32146__$2);
var G__32146__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32146__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__32146__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__32146__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__32146__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32093__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__32170){
var map__32171 = p__32170;
var map__32171__$1 = (((((!((map__32171 == null))))?(((((map__32171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32171.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32171):map__32171);
var triage_data = map__32171__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32171__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32171__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32171__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32171__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32171__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32171__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32171__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32171__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__32188 = phase;
var G__32188__$1 = (((G__32188 instanceof cljs.core.Keyword))?G__32188.fqn:null);
switch (G__32188__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__32197 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__32198 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__32199 = loc;
var G__32200 = (cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__32203_32426 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__32204_32427 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__32205_32428 = true;
var _STAR_print_fn_STAR__temp_val__32206_32429 = ((function (_STAR_print_newline_STAR__orig_val__32203_32426,_STAR_print_fn_STAR__orig_val__32204_32427,_STAR_print_newline_STAR__temp_val__32205_32428,sb__4661__auto__,G__32197,G__32198,G__32199,G__32188,G__32188__$1,loc,class_name,simple_class,cause_type,format,map__32171,map__32171__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__32203_32426,_STAR_print_fn_STAR__orig_val__32204_32427,_STAR_print_newline_STAR__temp_val__32205_32428,sb__4661__auto__,G__32197,G__32198,G__32199,G__32188,G__32188__$1,loc,class_name,simple_class,cause_type,format,map__32171,map__32171__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__32205_32428;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__32206_32429;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__32203_32426,_STAR_print_fn_STAR__orig_val__32204_32427,_STAR_print_newline_STAR__temp_val__32205_32428,_STAR_print_fn_STAR__temp_val__32206_32429,sb__4661__auto__,G__32197,G__32198,G__32199,G__32188,G__32188__$1,loc,class_name,simple_class,cause_type,format,map__32171,map__32171__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__32203_32426,_STAR_print_fn_STAR__orig_val__32204_32427,_STAR_print_newline_STAR__temp_val__32205_32428,_STAR_print_fn_STAR__temp_val__32206_32429,sb__4661__auto__,G__32197,G__32198,G__32199,G__32188,G__32188__$1,loc,class_name,simple_class,cause_type,format,map__32171,map__32171__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__32166_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__32166_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__32203_32426,_STAR_print_fn_STAR__orig_val__32204_32427,_STAR_print_newline_STAR__temp_val__32205_32428,_STAR_print_fn_STAR__temp_val__32206_32429,sb__4661__auto__,G__32197,G__32198,G__32199,G__32188,G__32188__$1,loc,class_name,simple_class,cause_type,format,map__32171,map__32171__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__32203_32426,_STAR_print_fn_STAR__orig_val__32204_32427,_STAR_print_newline_STAR__temp_val__32205_32428,_STAR_print_fn_STAR__temp_val__32206_32429,sb__4661__auto__,G__32197,G__32198,G__32199,G__32188,G__32188__$1,loc,class_name,simple_class,cause_type,format,map__32171,map__32171__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__32204_32427;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__32203_32426;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__32197,G__32198,G__32199,G__32200) : format.call(null,G__32197,G__32198,G__32199,G__32200));

break;
case "macroexpansion":
var G__32218 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__32219 = cause_type;
var G__32220 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__32221 = loc;
var G__32222 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__32218,G__32219,G__32220,G__32221,G__32222) : format.call(null,G__32218,G__32219,G__32220,G__32221,G__32222));

break;
case "compile-syntax-check":
var G__32227 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__32228 = cause_type;
var G__32229 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__32230 = loc;
var G__32231 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__32227,G__32228,G__32229,G__32230,G__32231) : format.call(null,G__32227,G__32228,G__32229,G__32230,G__32231));

break;
case "compilation":
var G__32233 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__32234 = cause_type;
var G__32235 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__32236 = loc;
var G__32237 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__32233,G__32234,G__32235,G__32236,G__32237) : format.call(null,G__32233,G__32234,G__32235,G__32236,G__32237));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__32238 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__32239 = symbol;
var G__32240 = loc;
var G__32241 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__32242_32442 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__32243_32443 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__32244_32444 = true;
var _STAR_print_fn_STAR__temp_val__32245_32445 = ((function (_STAR_print_newline_STAR__orig_val__32242_32442,_STAR_print_fn_STAR__orig_val__32243_32443,_STAR_print_newline_STAR__temp_val__32244_32444,sb__4661__auto__,G__32238,G__32239,G__32240,G__32188,G__32188__$1,loc,class_name,simple_class,cause_type,format,map__32171,map__32171__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__32242_32442,_STAR_print_fn_STAR__orig_val__32243_32443,_STAR_print_newline_STAR__temp_val__32244_32444,sb__4661__auto__,G__32238,G__32239,G__32240,G__32188,G__32188__$1,loc,class_name,simple_class,cause_type,format,map__32171,map__32171__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__32244_32444;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__32245_32445;

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__32242_32442,_STAR_print_fn_STAR__orig_val__32243_32443,_STAR_print_newline_STAR__temp_val__32244_32444,_STAR_print_fn_STAR__temp_val__32245_32445,sb__4661__auto__,G__32238,G__32239,G__32240,G__32188,G__32188__$1,loc,class_name,simple_class,cause_type,format,map__32171,map__32171__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR__orig_val__32242_32442,_STAR_print_fn_STAR__orig_val__32243_32443,_STAR_print_newline_STAR__temp_val__32244_32444,_STAR_print_fn_STAR__temp_val__32245_32445,sb__4661__auto__,G__32238,G__32239,G__32240,G__32188,G__32188__$1,loc,class_name,simple_class,cause_type,format,map__32171,map__32171__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__32167_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__32167_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__32242_32442,_STAR_print_fn_STAR__orig_val__32243_32443,_STAR_print_newline_STAR__temp_val__32244_32444,_STAR_print_fn_STAR__temp_val__32245_32445,sb__4661__auto__,G__32238,G__32239,G__32240,G__32188,G__32188__$1,loc,class_name,simple_class,cause_type,format,map__32171,map__32171__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__32242_32442,_STAR_print_fn_STAR__orig_val__32243_32443,_STAR_print_newline_STAR__temp_val__32244_32444,_STAR_print_fn_STAR__temp_val__32245_32445,sb__4661__auto__,G__32238,G__32239,G__32240,G__32188,G__32188__$1,loc,class_name,simple_class,cause_type,format,map__32171,map__32171__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__32243_32443;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__32242_32442;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__32238,G__32239,G__32240,G__32241) : format.call(null,G__32238,G__32239,G__32240,G__32241));
} else {
var G__32250 = "Execution error%s at %s(%s).\n%s\n";
var G__32251 = cause_type;
var G__32252 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__32253 = loc;
var G__32254 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__32250,G__32251,G__32252,G__32253,G__32254) : format.call(null,G__32250,G__32251,G__32252,G__32253,G__32254));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32188__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
