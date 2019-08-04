goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__38456){
var map__38457 = p__38456;
var map__38457__$1 = (((((!((map__38457 == null))))?(((((map__38457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38457.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38457):map__38457);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38457__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38457__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38457__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38457__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4131__auto__ = child_of;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__38459_38508 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__38460_38509 = null;
var count__38461_38510 = (0);
var i__38462_38511 = (0);
while(true){
if((i__38462_38511 < count__38461_38510)){
var vec__38473_38512 = chunk__38460_38509.cljs$core$IIndexed$_nth$arity$2(null,i__38462_38511);
var k_38513 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38473_38512,(0),null);
var cb_38514 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38473_38512,(1),null);
try{var G__38477_38515 = cljs.core.deref(re_frame.trace.traces);
(cb_38514.cljs$core$IFn$_invoke$arity$1 ? cb_38514.cljs$core$IFn$_invoke$arity$1(G__38477_38515) : cb_38514.call(null,G__38477_38515));
}catch (e38476){var e_38517 = e38476;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_38513,"while storing",cljs.core.deref(re_frame.trace.traces),e_38517], 0));
}

var G__38519 = seq__38459_38508;
var G__38520 = chunk__38460_38509;
var G__38521 = count__38461_38510;
var G__38522 = (i__38462_38511 + (1));
seq__38459_38508 = G__38519;
chunk__38460_38509 = G__38520;
count__38461_38510 = G__38521;
i__38462_38511 = G__38522;
continue;
} else {
var temp__5735__auto___38523 = cljs.core.seq(seq__38459_38508);
if(temp__5735__auto___38523){
var seq__38459_38524__$1 = temp__5735__auto___38523;
if(cljs.core.chunked_seq_QMARK_(seq__38459_38524__$1)){
var c__4550__auto___38525 = cljs.core.chunk_first(seq__38459_38524__$1);
var G__38526 = cljs.core.chunk_rest(seq__38459_38524__$1);
var G__38527 = c__4550__auto___38525;
var G__38528 = cljs.core.count(c__4550__auto___38525);
var G__38529 = (0);
seq__38459_38508 = G__38526;
chunk__38460_38509 = G__38527;
count__38461_38510 = G__38528;
i__38462_38511 = G__38529;
continue;
} else {
var vec__38478_38534 = cljs.core.first(seq__38459_38524__$1);
var k_38535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38478_38534,(0),null);
var cb_38536 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38478_38534,(1),null);
try{var G__38482_38537 = cljs.core.deref(re_frame.trace.traces);
(cb_38536.cljs$core$IFn$_invoke$arity$1 ? cb_38536.cljs$core$IFn$_invoke$arity$1(G__38482_38537) : cb_38536.call(null,G__38482_38537));
}catch (e38481){var e_38538 = e38481;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_38535,"while storing",cljs.core.deref(re_frame.trace.traces),e_38538], 0));
}

var G__38539 = cljs.core.next(seq__38459_38524__$1);
var G__38540 = null;
var G__38541 = (0);
var G__38542 = (0);
seq__38459_38508 = G__38539;
chunk__38460_38509 = G__38540;
count__38461_38510 = G__38541;
i__38462_38511 = G__38542;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
