goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__38726 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__38727 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__38727;

try{try{var seq__38728 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__38729 = null;
var count__38730 = (0);
var i__38731 = (0);
while(true){
if((i__38731 < count__38730)){
var vec__38741 = chunk__38729.cljs$core$IIndexed$_nth$arity$2(null,i__38731);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38741,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38741,(1),null);
var temp__5733__auto___38802 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___38802)){
var effect_fn_38805 = temp__5733__auto___38802;
(effect_fn_38805.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38805.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38805.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__38806 = seq__38728;
var G__38807 = chunk__38729;
var G__38808 = count__38730;
var G__38809 = (i__38731 + (1));
seq__38728 = G__38806;
chunk__38729 = G__38807;
count__38730 = G__38808;
i__38731 = G__38809;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38728);
if(temp__5735__auto__){
var seq__38728__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38728__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__38728__$1);
var G__38810 = cljs.core.chunk_rest(seq__38728__$1);
var G__38811 = c__4550__auto__;
var G__38812 = cljs.core.count(c__4550__auto__);
var G__38813 = (0);
seq__38728 = G__38810;
chunk__38729 = G__38811;
count__38730 = G__38812;
i__38731 = G__38813;
continue;
} else {
var vec__38745 = cljs.core.first(seq__38728__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38745,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38745,(1),null);
var temp__5733__auto___38814 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___38814)){
var effect_fn_38815 = temp__5733__auto___38814;
(effect_fn_38815.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38815.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38815.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__38816 = cljs.core.next(seq__38728__$1);
var G__38817 = null;
var G__38818 = (0);
var G__38819 = (0);
seq__38728 = G__38816;
chunk__38729 = G__38817;
count__38730 = G__38818;
i__38731 = G__38819;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__38436__auto___38820 = re_frame.interop.now();
var duration__38437__auto___38821 = (end__38436__auto___38820 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__38437__auto___38821,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__38436__auto___38820);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__38726;
}} else {
var seq__38748 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__38749 = null;
var count__38750 = (0);
var i__38751 = (0);
while(true){
if((i__38751 < count__38750)){
var vec__38762 = chunk__38749.cljs$core$IIndexed$_nth$arity$2(null,i__38751);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38762,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38762,(1),null);
var temp__5733__auto___38831 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___38831)){
var effect_fn_38832 = temp__5733__auto___38831;
(effect_fn_38832.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38832.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38832.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__38833 = seq__38748;
var G__38834 = chunk__38749;
var G__38835 = count__38750;
var G__38836 = (i__38751 + (1));
seq__38748 = G__38833;
chunk__38749 = G__38834;
count__38750 = G__38835;
i__38751 = G__38836;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38748);
if(temp__5735__auto__){
var seq__38748__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38748__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__38748__$1);
var G__38837 = cljs.core.chunk_rest(seq__38748__$1);
var G__38838 = c__4550__auto__;
var G__38839 = cljs.core.count(c__4550__auto__);
var G__38840 = (0);
seq__38748 = G__38837;
chunk__38749 = G__38838;
count__38750 = G__38839;
i__38751 = G__38840;
continue;
} else {
var vec__38765 = cljs.core.first(seq__38748__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38765,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38765,(1),null);
var temp__5733__auto___38841 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___38841)){
var effect_fn_38842 = temp__5733__auto___38841;
(effect_fn_38842.cljs$core$IFn$_invoke$arity$1 ? effect_fn_38842.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_38842.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__38843 = cljs.core.next(seq__38748__$1);
var G__38844 = null;
var G__38845 = (0);
var G__38846 = (0);
seq__38748 = G__38843;
chunk__38749 = G__38844;
count__38750 = G__38845;
i__38751 = G__38846;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__38768 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__38769 = null;
var count__38770 = (0);
var i__38771 = (0);
while(true){
if((i__38771 < count__38770)){
var map__38777 = chunk__38769.cljs$core$IIndexed$_nth$arity$2(null,i__38771);
var map__38777__$1 = (((((!((map__38777 == null))))?(((((map__38777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38777.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38777):map__38777);
var effect = map__38777__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38777__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38777__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__38768,chunk__38769,count__38770,i__38771,map__38777,map__38777__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__38768,chunk__38769,count__38770,i__38771,map__38777,map__38777__$1,effect,ms,dispatch))
,ms);
}


var G__38853 = seq__38768;
var G__38854 = chunk__38769;
var G__38855 = count__38770;
var G__38856 = (i__38771 + (1));
seq__38768 = G__38853;
chunk__38769 = G__38854;
count__38770 = G__38855;
i__38771 = G__38856;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38768);
if(temp__5735__auto__){
var seq__38768__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38768__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__38768__$1);
var G__38857 = cljs.core.chunk_rest(seq__38768__$1);
var G__38858 = c__4550__auto__;
var G__38859 = cljs.core.count(c__4550__auto__);
var G__38860 = (0);
seq__38768 = G__38857;
chunk__38769 = G__38858;
count__38770 = G__38859;
i__38771 = G__38860;
continue;
} else {
var map__38779 = cljs.core.first(seq__38768__$1);
var map__38779__$1 = (((((!((map__38779 == null))))?(((((map__38779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38779.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38779):map__38779);
var effect = map__38779__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38779__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38779__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__38768,chunk__38769,count__38770,i__38771,map__38779,map__38779__$1,effect,ms,dispatch,seq__38768__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__38768,chunk__38769,count__38770,i__38771,map__38779,map__38779__$1,effect,ms,dispatch,seq__38768__$1,temp__5735__auto__))
,ms);
}


var G__38865 = cljs.core.next(seq__38768__$1);
var G__38866 = null;
var G__38867 = (0);
var G__38868 = (0);
seq__38768 = G__38865;
chunk__38769 = G__38866;
count__38770 = G__38867;
i__38771 = G__38868;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__38781 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__38782 = null;
var count__38783 = (0);
var i__38784 = (0);
while(true){
if((i__38784 < count__38783)){
var event = chunk__38782.cljs$core$IIndexed$_nth$arity$2(null,i__38784);
re_frame.router.dispatch(event);


var G__38870 = seq__38781;
var G__38871 = chunk__38782;
var G__38872 = count__38783;
var G__38873 = (i__38784 + (1));
seq__38781 = G__38870;
chunk__38782 = G__38871;
count__38783 = G__38872;
i__38784 = G__38873;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38781);
if(temp__5735__auto__){
var seq__38781__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38781__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__38781__$1);
var G__38877 = cljs.core.chunk_rest(seq__38781__$1);
var G__38878 = c__4550__auto__;
var G__38879 = cljs.core.count(c__4550__auto__);
var G__38880 = (0);
seq__38781 = G__38877;
chunk__38782 = G__38878;
count__38783 = G__38879;
i__38784 = G__38880;
continue;
} else {
var event = cljs.core.first(seq__38781__$1);
re_frame.router.dispatch(event);


var G__38881 = cljs.core.next(seq__38781__$1);
var G__38882 = null;
var G__38883 = (0);
var G__38884 = (0);
seq__38781 = G__38881;
chunk__38782 = G__38882;
count__38783 = G__38883;
i__38784 = G__38884;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__38788 = cljs.core.seq(value);
var chunk__38789 = null;
var count__38790 = (0);
var i__38791 = (0);
while(true){
if((i__38791 < count__38790)){
var event = chunk__38789.cljs$core$IIndexed$_nth$arity$2(null,i__38791);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__38885 = seq__38788;
var G__38886 = chunk__38789;
var G__38887 = count__38790;
var G__38888 = (i__38791 + (1));
seq__38788 = G__38885;
chunk__38789 = G__38886;
count__38790 = G__38887;
i__38791 = G__38888;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38788);
if(temp__5735__auto__){
var seq__38788__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38788__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__38788__$1);
var G__38889 = cljs.core.chunk_rest(seq__38788__$1);
var G__38890 = c__4550__auto__;
var G__38891 = cljs.core.count(c__4550__auto__);
var G__38892 = (0);
seq__38788 = G__38889;
chunk__38789 = G__38890;
count__38790 = G__38891;
i__38791 = G__38892;
continue;
} else {
var event = cljs.core.first(seq__38788__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__38899 = cljs.core.next(seq__38788__$1);
var G__38900 = null;
var G__38901 = (0);
var G__38902 = (0);
seq__38788 = G__38899;
chunk__38789 = G__38900;
count__38790 = G__38901;
i__38791 = G__38902;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
