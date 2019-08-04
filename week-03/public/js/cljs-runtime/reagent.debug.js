goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__35480__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__35480 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35481__i = 0, G__35481__a = new Array(arguments.length -  0);
while (G__35481__i < G__35481__a.length) {G__35481__a[G__35481__i] = arguments[G__35481__i + 0]; ++G__35481__i;}
  args = new cljs.core.IndexedSeq(G__35481__a,0,null);
} 
return G__35480__delegate.call(this,args);};
G__35480.cljs$lang$maxFixedArity = 0;
G__35480.cljs$lang$applyTo = (function (arglist__35482){
var args = cljs.core.seq(arglist__35482);
return G__35480__delegate(args);
});
G__35480.cljs$core$IFn$_invoke$arity$variadic = G__35480__delegate;
return G__35480;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__35483__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__35483 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35484__i = 0, G__35484__a = new Array(arguments.length -  0);
while (G__35484__i < G__35484__a.length) {G__35484__a[G__35484__i] = arguments[G__35484__i + 0]; ++G__35484__i;}
  args = new cljs.core.IndexedSeq(G__35484__a,0,null);
} 
return G__35483__delegate.call(this,args);};
G__35483.cljs$lang$maxFixedArity = 0;
G__35483.cljs$lang$applyTo = (function (arglist__35485){
var args = cljs.core.seq(arglist__35485);
return G__35483__delegate(args);
});
G__35483.cljs$core$IFn$_invoke$arity$variadic = G__35483__delegate;
return G__35483;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
