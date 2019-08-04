goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__25767){
var vec__25768 = p__25767;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25768,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25768,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__25771 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25771,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25771,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25771,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__25792 = arguments.length;
switch (G__25792) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4219__auto__ = cljs.core.count(a);
var y__4220__auto__ = cljs.core.count(b);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((((!((x == null)))) && ((!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4433__auto__ = (((x == null))?null:x);
var m__4434__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4434__auto__.call(null,x));
} else {
var m__4431__auto__ = (clojure.data.equality_partition["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4431__auto__.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((((!((a == null)))) && ((!((a.clojure$data$Diff$diff_similar$arity$2 == null)))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4433__auto__ = (((a == null))?null:a);
var m__4434__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4434__auto__.call(null,a,b));
} else {
var m__4431__auto__ = (clojure.data.diff_similar["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4431__auto__.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__25812_26019 = clojure.data.equality_partition;
var G__25813_26020 = "null";
var G__25814_26021 = ((function (G__25812_26019,G__25813_26020){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__25812_26019,G__25813_26020))
;
goog.object.set(G__25812_26019,G__25813_26020,G__25814_26021);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__25825_26027 = clojure.data.equality_partition;
var G__25826_26028 = "string";
var G__25827_26029 = ((function (G__25825_26027,G__25826_26028){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__25825_26027,G__25826_26028))
;
goog.object.set(G__25825_26027,G__25826_26028,G__25827_26029);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__25836_26030 = clojure.data.equality_partition;
var G__25837_26031 = "number";
var G__25838_26032 = ((function (G__25836_26030,G__25837_26031){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__25836_26030,G__25837_26031))
;
goog.object.set(G__25836_26030,G__25837_26031,G__25838_26032);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__25843_26039 = clojure.data.equality_partition;
var G__25844_26040 = "array";
var G__25845_26041 = ((function (G__25843_26039,G__25844_26040){
return (function (x){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
});})(G__25843_26039,G__25844_26040))
;
goog.object.set(G__25843_26039,G__25844_26040,G__25845_26041);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__25850_26051 = clojure.data.equality_partition;
var G__25851_26052 = "function";
var G__25852_26053 = ((function (G__25850_26051,G__25851_26052){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__25850_26051,G__25851_26052))
;
goog.object.set(G__25850_26051,G__25851_26052,G__25852_26053);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__25855_26058 = clojure.data.equality_partition;
var G__25856_26059 = "boolean";
var G__25857_26060 = ((function (G__25855_26058,G__25856_26059){
return (function (x){
return new cljs.core.Keyword(null,"atom","atom",-397043653);
});})(G__25855_26058,G__25856_26059))
;
goog.object.set(G__25855_26058,G__25856_26059,G__25857_26060);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__25865_26065 = clojure.data.equality_partition;
var G__25866_26066 = "_";
var G__25867_26067 = ((function (G__25865_26065,G__25866_26066){
return (function (x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return new cljs.core.Keyword(null,"sequential","sequential",-1082983960);
} else {
return new cljs.core.Keyword(null,"atom","atom",-397043653);

}
}
}
});})(G__25865_26065,G__25866_26066))
;
goog.object.set(G__25865_26065,G__25866_26066,G__25867_26067);
goog.object.set(clojure.data.Diff,"null",true);

var G__25879_26082 = clojure.data.diff_similar;
var G__25880_26083 = "null";
var G__25881_26084 = ((function (G__25879_26082,G__25880_26083){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__25879_26082,G__25880_26083))
;
goog.object.set(G__25879_26082,G__25880_26083,G__25881_26084);

goog.object.set(clojure.data.Diff,"string",true);

var G__25884_26094 = clojure.data.diff_similar;
var G__25885_26095 = "string";
var G__25886_26096 = ((function (G__25884_26094,G__25885_26095){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__25884_26094,G__25885_26095))
;
goog.object.set(G__25884_26094,G__25885_26095,G__25886_26096);

goog.object.set(clojure.data.Diff,"number",true);

var G__25889_26100 = clojure.data.diff_similar;
var G__25890_26101 = "number";
var G__25891_26102 = ((function (G__25889_26100,G__25890_26101){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__25889_26100,G__25890_26101))
;
goog.object.set(G__25889_26100,G__25890_26101,G__25891_26102);

goog.object.set(clojure.data.Diff,"array",true);

var G__25896_26105 = clojure.data.diff_similar;
var G__25899_26106 = "array";
var G__25900_26107 = ((function (G__25896_26105,G__25899_26106){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__25896_26105,G__25899_26106))
;
goog.object.set(G__25896_26105,G__25899_26106,G__25900_26107);

goog.object.set(clojure.data.Diff,"function",true);

var G__25902_26116 = clojure.data.diff_similar;
var G__25903_26117 = "function";
var G__25904_26118 = ((function (G__25902_26116,G__25903_26117){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__25902_26116,G__25903_26117))
;
goog.object.set(G__25902_26116,G__25903_26117,G__25904_26118);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__25906_26139 = clojure.data.diff_similar;
var G__25907_26140 = "boolean";
var G__25908_26141 = ((function (G__25906_26139,G__25907_26140){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__25906_26139,G__25907_26140))
;
goog.object.set(G__25906_26139,G__25907_26140,G__25908_26141);

goog.object.set(clojure.data.Diff,"_",true);

var G__25909_26149 = clojure.data.diff_similar;
var G__25910_26150 = "_";
var G__25911_26151 = ((function (G__25909_26149,G__25910_26150){
return (function (a,b){
var fexpr__25916 = (function (){var G__25917 = clojure.data.equality_partition(a);
var G__25917__$1 = (((G__25917 instanceof cljs.core.Keyword))?G__25917.fqn:null);
switch (G__25917__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25917__$1)].join('')));

}
})();
return (fexpr__25916.cljs$core$IFn$_invoke$arity$2 ? fexpr__25916.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__25916.call(null,a,b));
});})(G__25909_26149,G__25910_26150))
;
goog.object.set(G__25909_26149,G__25910_26150,G__25911_26151);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});

//# sourceMappingURL=clojure.data.js.map
