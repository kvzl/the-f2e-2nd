goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.active_modules_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.active_modules_ref = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
shadow.cljs.devtools.client.browser.module_loaded = (function shadow$cljs$devtools$client$browser$module_loaded(name){
return shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.active_modules_ref.cljs$core$IDeref$_deref$arity$1(null),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(name)));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___37742 = arguments.length;
var i__4731__auto___37743 = (0);
while(true){
if((i__4731__auto___37743 < len__4730__auto___37742)){
args__4736__auto__.push((arguments[i__4731__auto___37743]));

var G__37746 = (i__4731__auto___37743 + (1));
i__4731__auto___37743 = G__37746;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
return console.log.apply(null,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),"color: blue;"], null),args)));
});

shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq37411){
var G__37412 = cljs.core.first(seq37411);
var seq37411__$1 = cljs.core.next(seq37411);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37412,seq37411__$1);
});

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__37415){
var map__37417 = p__37415;
var map__37417__$1 = (((((!((map__37417 == null))))?(((((map__37417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37417.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37417):map__37417);
var src = map__37417__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37417__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37417__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4131__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.module_is_active_QMARK_ = (function shadow$cljs$devtools$client$browser$module_is_active_QMARK_(module){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.cljs.devtools.client.browser.active_modules_ref),module);
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__37420 = cljs.core.seq(sources);
var chunk__37421 = null;
var count__37422 = (0);
var i__37423 = (0);
while(true){
if((i__37423 < count__37422)){
var map__37440 = chunk__37421.cljs$core$IIndexed$_nth$arity$2(null,i__37423);
var map__37440__$1 = (((((!((map__37440 == null))))?(((((map__37440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37440.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37440):map__37440);
var src = map__37440__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37440__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37440__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37440__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37440__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__37751 = seq__37420;
var G__37752 = chunk__37421;
var G__37753 = count__37422;
var G__37754 = (i__37423 + (1));
seq__37420 = G__37751;
chunk__37421 = G__37752;
count__37422 = G__37753;
i__37423 = G__37754;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37420);
if(temp__5735__auto__){
var seq__37420__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37420__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__37420__$1);
var G__37755 = cljs.core.chunk_rest(seq__37420__$1);
var G__37756 = c__4550__auto__;
var G__37757 = cljs.core.count(c__4550__auto__);
var G__37758 = (0);
seq__37420 = G__37755;
chunk__37421 = G__37756;
count__37422 = G__37757;
i__37423 = G__37758;
continue;
} else {
var map__37444 = cljs.core.first(seq__37420__$1);
var map__37444__$1 = (((((!((map__37444 == null))))?(((((map__37444.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37444.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37444):map__37444);
var src = map__37444__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37444__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37444__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37444__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37444__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));


var G__37765 = cljs.core.next(seq__37420__$1);
var G__37766 = null;
var G__37767 = (0);
var G__37768 = (0);
seq__37420 = G__37765;
chunk__37421 = G__37766;
count__37422 = G__37767;
i__37423 = G__37768;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__37448 = cljs.core.seq(js_requires);
var chunk__37449 = null;
var count__37450 = (0);
var i__37451 = (0);
while(true){
if((i__37451 < count__37450)){
var js_ns = chunk__37449.cljs$core$IIndexed$_nth$arity$2(null,i__37451);
var require_str_37771 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37771);


var G__37772 = seq__37448;
var G__37773 = chunk__37449;
var G__37774 = count__37450;
var G__37775 = (i__37451 + (1));
seq__37448 = G__37772;
chunk__37449 = G__37773;
count__37450 = G__37774;
i__37451 = G__37775;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37448);
if(temp__5735__auto__){
var seq__37448__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37448__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__37448__$1);
var G__37776 = cljs.core.chunk_rest(seq__37448__$1);
var G__37777 = c__4550__auto__;
var G__37778 = cljs.core.count(c__4550__auto__);
var G__37779 = (0);
seq__37448 = G__37776;
chunk__37449 = G__37777;
count__37450 = G__37778;
i__37451 = G__37779;
continue;
} else {
var js_ns = cljs.core.first(seq__37448__$1);
var require_str_37782 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_37782);


var G__37784 = cljs.core.next(seq__37448__$1);
var G__37785 = null;
var G__37786 = (0);
var G__37787 = (0);
seq__37448 = G__37784;
chunk__37449 = G__37785;
count__37450 = G__37786;
i__37451 = G__37787;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__37462 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__37462) : callback.call(null,G__37462));
} else {
var G__37463 = shadow.cljs.devtools.client.env.files_url();
var G__37464 = ((function (G__37463){
return (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});})(G__37463))
;
var G__37465 = "POST";
var G__37466 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__37467 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__37463,G__37464,G__37465,G__37466,G__37467);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__37474){
var map__37475 = p__37474;
var map__37475__$1 = (((((!((map__37475 == null))))?(((((map__37475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37475.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37475):map__37475);
var msg = map__37475__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37475__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37475__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__37480 = info;
var map__37480__$1 = (((((!((map__37480 == null))))?(((((map__37480.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37480.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37480):map__37480);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37480__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37480__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = ((function (map__37480,map__37480__$1,sources,compiled,map__37475,map__37475__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37485(s__37486){
return (new cljs.core.LazySeq(null,((function (map__37480,map__37480__$1,sources,compiled,map__37475,map__37475__$1,msg,info,reload_info){
return (function (){
var s__37486__$1 = s__37486;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__37486__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__37494 = cljs.core.first(xs__6292__auto__);
var map__37494__$1 = (((((!((map__37494 == null))))?(((((map__37494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37494.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37494):map__37494);
var src = map__37494__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37494__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37494__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__37486__$1,map__37494,map__37494__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37480,map__37480__$1,sources,compiled,map__37475,map__37475__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37485_$_iter__37487(s__37488){
return (new cljs.core.LazySeq(null,((function (s__37486__$1,map__37494,map__37494__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37480,map__37480__$1,sources,compiled,map__37475,map__37475__$1,msg,info,reload_info){
return (function (){
var s__37488__$1 = s__37488;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__37488__$1);
if(temp__5735__auto____$1){
var s__37488__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37488__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__37488__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__37490 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__37489 = (0);
while(true){
if((i__37489 < size__4522__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__37489);
cljs.core.chunk_append(b__37490,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__37799 = (i__37489 + (1));
i__37489 = G__37799;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37490),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37485_$_iter__37487(cljs.core.chunk_rest(s__37488__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37490),null);
}
} else {
var warning = cljs.core.first(s__37488__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37485_$_iter__37487(cljs.core.rest(s__37488__$2)));
}
} else {
return null;
}
break;
}
});})(s__37486__$1,map__37494,map__37494__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37480,map__37480__$1,sources,compiled,map__37475,map__37475__$1,msg,info,reload_info))
,null,null));
});})(s__37486__$1,map__37494,map__37494__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__37480,map__37480__$1,sources,compiled,map__37475,map__37475__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37485(cljs.core.rest(s__37486__$1)));
} else {
var G__37800 = cljs.core.rest(s__37486__$1);
s__37486__$1 = G__37800;
continue;
}
} else {
var G__37801 = cljs.core.rest(s__37486__$1);
s__37486__$1 = G__37801;
continue;
}
} else {
return null;
}
break;
}
});})(map__37480,map__37480__$1,sources,compiled,map__37475,map__37475__$1,msg,info,reload_info))
,null,null));
});})(map__37480,map__37480__$1,sources,compiled,map__37475,map__37475__$1,msg,info,reload_info))
;
return iter__4523__auto__(sources);
})()));
var seq__37503_37802 = cljs.core.seq(warnings);
var chunk__37504_37803 = null;
var count__37505_37804 = (0);
var i__37506_37805 = (0);
while(true){
if((i__37506_37805 < count__37505_37804)){
var map__37520_37808 = chunk__37504_37803.cljs$core$IIndexed$_nth$arity$2(null,i__37506_37805);
var map__37520_37809__$1 = (((((!((map__37520_37808 == null))))?(((((map__37520_37808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37520_37808.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37520_37808):map__37520_37808);
var w_37810 = map__37520_37809__$1;
var msg_37811__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37520_37809__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37812 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37520_37809__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37813 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37520_37809__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37814 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37520_37809__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37814)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37812),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37813),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37811__$1)].join(''));


var G__37815 = seq__37503_37802;
var G__37816 = chunk__37504_37803;
var G__37817 = count__37505_37804;
var G__37818 = (i__37506_37805 + (1));
seq__37503_37802 = G__37815;
chunk__37504_37803 = G__37816;
count__37505_37804 = G__37817;
i__37506_37805 = G__37818;
continue;
} else {
var temp__5735__auto___37819 = cljs.core.seq(seq__37503_37802);
if(temp__5735__auto___37819){
var seq__37503_37820__$1 = temp__5735__auto___37819;
if(cljs.core.chunked_seq_QMARK_(seq__37503_37820__$1)){
var c__4550__auto___37821 = cljs.core.chunk_first(seq__37503_37820__$1);
var G__37822 = cljs.core.chunk_rest(seq__37503_37820__$1);
var G__37823 = c__4550__auto___37821;
var G__37824 = cljs.core.count(c__4550__auto___37821);
var G__37825 = (0);
seq__37503_37802 = G__37822;
chunk__37504_37803 = G__37823;
count__37505_37804 = G__37824;
i__37506_37805 = G__37825;
continue;
} else {
var map__37522_37826 = cljs.core.first(seq__37503_37820__$1);
var map__37522_37827__$1 = (((((!((map__37522_37826 == null))))?(((((map__37522_37826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37522_37826.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37522_37826):map__37522_37826);
var w_37828 = map__37522_37827__$1;
var msg_37829__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37522_37827__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_37830 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37522_37827__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_37831 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37522_37827__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_37832 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37522_37827__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_37832)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_37830),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_37831),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_37829__$1)].join(''));


var G__37833 = cljs.core.next(seq__37503_37820__$1);
var G__37834 = null;
var G__37835 = (0);
var G__37836 = (0);
seq__37503_37802 = G__37833;
chunk__37504_37803 = G__37834;
count__37505_37804 = G__37835;
i__37506_37805 = G__37836;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__37480,map__37480__$1,sources,compiled,warnings,map__37475,map__37475__$1,msg,info,reload_info){
return (function (p__37526){
var map__37527 = p__37526;
var map__37527__$1 = (((((!((map__37527 == null))))?(((((map__37527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37527.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37527):map__37527);
var src = map__37527__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37527__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37527__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
});})(map__37480,map__37480__$1,sources,compiled,warnings,map__37475,map__37475__$1,msg,info,reload_info))
,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__37480,map__37480__$1,sources,compiled,warnings,map__37475,map__37475__$1,msg,info,reload_info){
return (function (p__37535){
var map__37536 = p__37535;
var map__37536__$1 = (((((!((map__37536 == null))))?(((((map__37536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37536.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37536):map__37536);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37536__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
});})(map__37480,map__37480__$1,sources,compiled,warnings,map__37475,map__37475__$1,msg,info,reload_info))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__37480,map__37480__$1,sources,compiled,warnings,map__37475,map__37475__$1,msg,info,reload_info){
return (function (p__37539){
var map__37541 = p__37539;
var map__37541__$1 = (((((!((map__37541 == null))))?(((((map__37541.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37541.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37541):map__37541);
var rc = map__37541__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37541__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.browser.module_is_active_QMARK_(module)));
});})(map__37480,map__37480__$1,sources,compiled,warnings,map__37475,map__37475__$1,msg,info,reload_info))
,sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,((function (sources_to_get,map__37480,map__37480__$1,sources,compiled,warnings,map__37475,map__37475__$1,msg,info,reload_info){
return (function (p1__37469_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37469_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
});})(sources_to_get,map__37480,map__37480__$1,sources,compiled,warnings,map__37475,map__37475__$1,msg,info,reload_info))
);
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(rel_new),"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4120__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4120__auto__){
var and__4120__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4120__auto____$1){
return new$;
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__37555){
var map__37556 = p__37555;
var map__37556__$1 = (((((!((map__37556 == null))))?(((((map__37556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37556.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37556):map__37556);
var msg = map__37556__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37556__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__37558 = cljs.core.seq(updates);
var chunk__37560 = null;
var count__37561 = (0);
var i__37562 = (0);
while(true){
if((i__37562 < count__37561)){
var path = chunk__37560.cljs$core$IIndexed$_nth$arity$2(null,i__37562);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37605_37845 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37608_37846 = null;
var count__37609_37847 = (0);
var i__37610_37848 = (0);
while(true){
if((i__37610_37848 < count__37609_37847)){
var node_37849 = chunk__37608_37846.cljs$core$IIndexed$_nth$arity$2(null,i__37610_37848);
var path_match_37850 = shadow.cljs.devtools.client.browser.match_paths(node_37849.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37850)){
var new_link_37851 = (function (){var G__37617 = node_37849.cloneNode(true);
G__37617.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37850),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37617;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37850], 0));

goog.dom.insertSiblingAfter(new_link_37851,node_37849);

goog.dom.removeNode(node_37849);


var G__37852 = seq__37605_37845;
var G__37853 = chunk__37608_37846;
var G__37854 = count__37609_37847;
var G__37855 = (i__37610_37848 + (1));
seq__37605_37845 = G__37852;
chunk__37608_37846 = G__37853;
count__37609_37847 = G__37854;
i__37610_37848 = G__37855;
continue;
} else {
var G__37856 = seq__37605_37845;
var G__37857 = chunk__37608_37846;
var G__37858 = count__37609_37847;
var G__37859 = (i__37610_37848 + (1));
seq__37605_37845 = G__37856;
chunk__37608_37846 = G__37857;
count__37609_37847 = G__37858;
i__37610_37848 = G__37859;
continue;
}
} else {
var temp__5735__auto___37860 = cljs.core.seq(seq__37605_37845);
if(temp__5735__auto___37860){
var seq__37605_37862__$1 = temp__5735__auto___37860;
if(cljs.core.chunked_seq_QMARK_(seq__37605_37862__$1)){
var c__4550__auto___37863 = cljs.core.chunk_first(seq__37605_37862__$1);
var G__37864 = cljs.core.chunk_rest(seq__37605_37862__$1);
var G__37865 = c__4550__auto___37863;
var G__37866 = cljs.core.count(c__4550__auto___37863);
var G__37867 = (0);
seq__37605_37845 = G__37864;
chunk__37608_37846 = G__37865;
count__37609_37847 = G__37866;
i__37610_37848 = G__37867;
continue;
} else {
var node_37868 = cljs.core.first(seq__37605_37862__$1);
var path_match_37869 = shadow.cljs.devtools.client.browser.match_paths(node_37868.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37869)){
var new_link_37870 = (function (){var G__37619 = node_37868.cloneNode(true);
G__37619.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37869),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37619;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37869], 0));

goog.dom.insertSiblingAfter(new_link_37870,node_37868);

goog.dom.removeNode(node_37868);


var G__37871 = cljs.core.next(seq__37605_37862__$1);
var G__37872 = null;
var G__37873 = (0);
var G__37874 = (0);
seq__37605_37845 = G__37871;
chunk__37608_37846 = G__37872;
count__37609_37847 = G__37873;
i__37610_37848 = G__37874;
continue;
} else {
var G__37875 = cljs.core.next(seq__37605_37862__$1);
var G__37876 = null;
var G__37877 = (0);
var G__37878 = (0);
seq__37605_37845 = G__37875;
chunk__37608_37846 = G__37876;
count__37609_37847 = G__37877;
i__37610_37848 = G__37878;
continue;
}
}
} else {
}
}
break;
}


var G__37879 = seq__37558;
var G__37880 = chunk__37560;
var G__37881 = count__37561;
var G__37882 = (i__37562 + (1));
seq__37558 = G__37879;
chunk__37560 = G__37880;
count__37561 = G__37881;
i__37562 = G__37882;
continue;
} else {
var G__37883 = seq__37558;
var G__37884 = chunk__37560;
var G__37885 = count__37561;
var G__37886 = (i__37562 + (1));
seq__37558 = G__37883;
chunk__37560 = G__37884;
count__37561 = G__37885;
i__37562 = G__37886;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__37558);
if(temp__5735__auto__){
var seq__37558__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37558__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__37558__$1);
var G__37887 = cljs.core.chunk_rest(seq__37558__$1);
var G__37888 = c__4550__auto__;
var G__37889 = cljs.core.count(c__4550__auto__);
var G__37890 = (0);
seq__37558 = G__37887;
chunk__37560 = G__37888;
count__37561 = G__37889;
i__37562 = G__37890;
continue;
} else {
var path = cljs.core.first(seq__37558__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__37623_37891 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__37626_37892 = null;
var count__37627_37893 = (0);
var i__37628_37894 = (0);
while(true){
if((i__37628_37894 < count__37627_37893)){
var node_37895 = chunk__37626_37892.cljs$core$IIndexed$_nth$arity$2(null,i__37628_37894);
var path_match_37896 = shadow.cljs.devtools.client.browser.match_paths(node_37895.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37896)){
var new_link_37899 = (function (){var G__37634 = node_37895.cloneNode(true);
G__37634.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37896),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37634;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37896], 0));

goog.dom.insertSiblingAfter(new_link_37899,node_37895);

goog.dom.removeNode(node_37895);


var G__37900 = seq__37623_37891;
var G__37901 = chunk__37626_37892;
var G__37902 = count__37627_37893;
var G__37903 = (i__37628_37894 + (1));
seq__37623_37891 = G__37900;
chunk__37626_37892 = G__37901;
count__37627_37893 = G__37902;
i__37628_37894 = G__37903;
continue;
} else {
var G__37904 = seq__37623_37891;
var G__37905 = chunk__37626_37892;
var G__37906 = count__37627_37893;
var G__37907 = (i__37628_37894 + (1));
seq__37623_37891 = G__37904;
chunk__37626_37892 = G__37905;
count__37627_37893 = G__37906;
i__37628_37894 = G__37907;
continue;
}
} else {
var temp__5735__auto___37908__$1 = cljs.core.seq(seq__37623_37891);
if(temp__5735__auto___37908__$1){
var seq__37623_37909__$1 = temp__5735__auto___37908__$1;
if(cljs.core.chunked_seq_QMARK_(seq__37623_37909__$1)){
var c__4550__auto___37910 = cljs.core.chunk_first(seq__37623_37909__$1);
var G__37911 = cljs.core.chunk_rest(seq__37623_37909__$1);
var G__37912 = c__4550__auto___37910;
var G__37913 = cljs.core.count(c__4550__auto___37910);
var G__37914 = (0);
seq__37623_37891 = G__37911;
chunk__37626_37892 = G__37912;
count__37627_37893 = G__37913;
i__37628_37894 = G__37914;
continue;
} else {
var node_37915 = cljs.core.first(seq__37623_37909__$1);
var path_match_37916 = shadow.cljs.devtools.client.browser.match_paths(node_37915.getAttribute("href"),path);
if(cljs.core.truth_(path_match_37916)){
var new_link_37917 = (function (){var G__37635 = node_37915.cloneNode(true);
G__37635.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_37916),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__37635;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_37916], 0));

goog.dom.insertSiblingAfter(new_link_37917,node_37915);

goog.dom.removeNode(node_37915);


var G__37918 = cljs.core.next(seq__37623_37909__$1);
var G__37919 = null;
var G__37920 = (0);
var G__37921 = (0);
seq__37623_37891 = G__37918;
chunk__37626_37892 = G__37919;
count__37627_37893 = G__37920;
i__37628_37894 = G__37921;
continue;
} else {
var G__37922 = cljs.core.next(seq__37623_37909__$1);
var G__37923 = null;
var G__37924 = (0);
var G__37925 = (0);
seq__37623_37891 = G__37922;
chunk__37626_37892 = G__37923;
count__37627_37893 = G__37924;
i__37628_37894 = G__37925;
continue;
}
}
} else {
}
}
break;
}


var G__37926 = cljs.core.next(seq__37558__$1);
var G__37927 = null;
var G__37928 = (0);
var G__37929 = (0);
seq__37558 = G__37926;
chunk__37560 = G__37927;
count__37561 = G__37928;
i__37562 = G__37929;
continue;
} else {
var G__37930 = cljs.core.next(seq__37558__$1);
var G__37931 = null;
var G__37932 = (0);
var G__37933 = (0);
seq__37558 = G__37930;
chunk__37560 = G__37931;
count__37561 = G__37932;
i__37562 = G__37933;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__37637){
var map__37638 = p__37637;
var map__37638__$1 = (((((!((map__37638 == null))))?(((((map__37638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37638.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37638):map__37638);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37638__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37638__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call(((function (map__37638,map__37638__$1,id,js){
return (function (){
return eval(js);
});})(map__37638,map__37638__$1,id,js))
,shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__37640){
var map__37641 = p__37640;
var map__37641__$1 = (((((!((map__37641 == null))))?(((((map__37641.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37641.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37641):map__37641);
var msg = map__37641__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37641__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37641__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37641__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37641__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (map__37641,map__37641__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (p__37646){
var map__37647 = p__37646;
var map__37647__$1 = (((((!((map__37647 == null))))?(((((map__37647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37647.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37647):map__37647);
var src = map__37647__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37647__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4120__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4120__auto__;
}
});})(map__37641,map__37641__$1,msg,id,sources,reload_namespaces,js_requires))
,sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,((function (sources_to_load,map__37641,map__37641__$1,msg,id,sources,reload_namespaces,js_requires){
return (function (sources__$1){
shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
});})(sources_to_load,map__37641,map__37641__$1,msg,id,sources,reload_namespaces,js_requires))
);
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__37653){
var map__37654 = p__37653;
var map__37654__$1 = (((((!((map__37654 == null))))?(((((map__37654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37654.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37654):map__37654);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37654__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37654__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),((function (map__37654,map__37654__$1,repl_state,id){
return (function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

return shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");
});})(map__37654,map__37654__$1,repl_state,id))
);
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__37656){
var map__37657 = p__37656;
var map__37657__$1 = (((((!((map__37657 == null))))?(((((map__37657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37657.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37657):map__37657);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37657__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37657__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__37661){
var map__37662 = p__37661;
var map__37662__$1 = (((((!((map__37662 == null))))?(((((map__37662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37662.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37662):map__37662);
var msg = map__37662__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37662__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__37669 = type;
var G__37669__$1 = (((G__37669 instanceof cljs.core.Keyword))?G__37669.fqn:null);
switch (G__37669__$1) {
case "asset-watch":
return shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
return shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
return shadow.cljs.devtools.client.browser.repl_require(msg);

break;
case "repl/set-ns":
return shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "repl/session-start":
return shadow.cljs.devtools.client.browser.repl_init(msg);

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

return shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

return shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
return shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

return shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":
return null;

break;
case "client/stale":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
return cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
return shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:
return new cljs.core.Keyword(null,"ignored","ignored",1227374526);

}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__37672 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__37673 = ((function (G__37672){
return (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});})(G__37672))
;
var G__37674 = "POST";
var G__37675 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__37676 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__37672,G__37673,G__37674,G__37675,G__37676);
});
shadow.cljs.devtools.client.browser.heartbeat_BANG_ = (function shadow$cljs$devtools$client$browser$heartbeat_BANG_(){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ping","ping",-1670114784),new cljs.core.Keyword(null,"v","v",21465059),Date.now()], null)], 0)));

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

socket.onmessage = ((function (print_fn,ws_url,socket){
return (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
});})(print_fn,ws_url,socket))
;

socket.onopen = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
goog.provide = goog.constructNamespace_;
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
});})(print_fn,ws_url,socket))
;

socket.onclose = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4131__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

return shadow.cljs.devtools.client.env.reset_print_fns_BANG_();
});})(print_fn,ws_url,socket))
;

socket.onerror = ((function (print_fn,ws_url,socket){
return (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
});})(print_fn,ws_url,socket))
;

return setTimeout(shadow.cljs.devtools.client.browser.heartbeat_BANG_,(30000));
}catch (e37722){var e = e37722;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___37997 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___37997)){
var s_37998 = temp__5735__auto___37997;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

s_37998.onclose = ((function (s_37998,temp__5735__auto___37997){
return (function (e){
return null;
});})(s_37998,temp__5735__auto___37997))
;

s_37998.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4120__auto__ = document;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4120__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
