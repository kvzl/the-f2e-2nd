goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4434__auto__.call(null,this$));
} else {
var m__4431__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4431__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__35144 = coll;
var G__35145 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__35144,G__35145) : shadow.dom.lazy_native_coll_seq.call(null,G__35144,G__35145));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
});

shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4131__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return not_found;
}
});

shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
});

shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
});

shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
});

shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
});

shadow.dom.NativeColl.cljs$lang$type = true;

shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";

shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"shadow.dom/NativeColl");
});

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__35182 = arguments.length;
switch (G__35182) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
});

shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
});

shadow.dom.query_one.cljs$lang$maxFixedArity = 2;

shadow.dom.query = (function shadow$dom$query(var_args){
var G__35185 = arguments.length;
switch (G__35185) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});

shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});

shadow.dom.query.cljs$lang$maxFixedArity = 2;

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__35192 = arguments.length;
switch (G__35192) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
});

shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
});

shadow.dom.by_id.cljs$lang$maxFixedArity = 2;

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__35198 = arguments.length;
switch (G__35198) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
e.cancelBubble = true;

e.returnValue = false;
}

return e;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
});

shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4;

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__35203 = arguments.length;
switch (G__35203) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__35207 = document;
var G__35208 = shadow.dom.dom_node(el);
return goog.dom.contains(G__35207,G__35208);
});

shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__35211 = shadow.dom.dom_node(parent);
var G__35212 = shadow.dom.dom_node(el);
return goog.dom.contains(G__35211,G__35212);
});

shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2;

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__35213 = shadow.dom.dom_node(el);
var G__35214 = cls;
return goog.dom.classlist.add(G__35213,G__35214);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__35217 = shadow.dom.dom_node(el);
var G__35218 = cls;
return goog.dom.classlist.remove(G__35217,G__35218);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__35222 = arguments.length;
switch (G__35222) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__35225 = shadow.dom.dom_node(el);
var G__35226 = cls;
return goog.dom.classlist.toggle(G__35225,G__35226);
});

shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
});

shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3;

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e35232){if((e35232 instanceof Object)){
var e = e35232;
return console.log("didnt support attachEvent",el,e);
} else {
throw e35232;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4131__auto__ = (!((typeof document !== 'undefined')));
if(or__4131__auto__){
return or__4131__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__35233 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__35235 = null;
var count__35236 = (0);
var i__35237 = (0);
while(true){
if((i__35237 < count__35236)){
var el = chunk__35235.cljs$core$IIndexed$_nth$arity$2(null,i__35237);
var handler_35943__$1 = ((function (seq__35233,chunk__35235,count__35236,i__35237,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35233,chunk__35235,count__35236,i__35237,el))
;
var G__35249_35945 = el;
var G__35250_35946 = cljs.core.name(ev);
var G__35251_35947 = handler_35943__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__35249_35945,G__35250_35946,G__35251_35947) : shadow.dom.dom_listen.call(null,G__35249_35945,G__35250_35946,G__35251_35947));


var G__35949 = seq__35233;
var G__35950 = chunk__35235;
var G__35951 = count__35236;
var G__35952 = (i__35237 + (1));
seq__35233 = G__35949;
chunk__35235 = G__35950;
count__35236 = G__35951;
i__35237 = G__35952;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35233);
if(temp__5735__auto__){
var seq__35233__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35233__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35233__$1);
var G__35956 = cljs.core.chunk_rest(seq__35233__$1);
var G__35957 = c__4550__auto__;
var G__35958 = cljs.core.count(c__4550__auto__);
var G__35959 = (0);
seq__35233 = G__35956;
chunk__35235 = G__35957;
count__35236 = G__35958;
i__35237 = G__35959;
continue;
} else {
var el = cljs.core.first(seq__35233__$1);
var handler_35960__$1 = ((function (seq__35233,chunk__35235,count__35236,i__35237,el,seq__35233__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35233,chunk__35235,count__35236,i__35237,el,seq__35233__$1,temp__5735__auto__))
;
var G__35253_35961 = el;
var G__35254_35962 = cljs.core.name(ev);
var G__35255_35963 = handler_35960__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__35253_35961,G__35254_35962,G__35255_35963) : shadow.dom.dom_listen.call(null,G__35253_35961,G__35254_35962,G__35255_35963));


var G__35966 = cljs.core.next(seq__35233__$1);
var G__35967 = null;
var G__35968 = (0);
var G__35969 = (0);
seq__35233 = G__35966;
chunk__35235 = G__35967;
count__35236 = G__35968;
i__35237 = G__35969;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__35258 = arguments.length;
switch (G__35258) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});

shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__35264 = shadow.dom.dom_node(el);
var G__35265 = cljs.core.name(ev);
var G__35266 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__35264,G__35265,G__35266) : shadow.dom.dom_listen.call(null,G__35264,G__35265,G__35266));
}
});

shadow.dom.on.cljs$lang$maxFixedArity = 4;

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__35269 = shadow.dom.dom_node(el);
var G__35270 = cljs.core.name(ev);
var G__35271 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__35269,G__35270,G__35271) : shadow.dom.dom_listen_remove.call(null,G__35269,G__35270,G__35271));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__35278 = cljs.core.seq(events);
var chunk__35279 = null;
var count__35280 = (0);
var i__35281 = (0);
while(true){
if((i__35281 < count__35280)){
var vec__35299 = chunk__35279.cljs$core$IIndexed$_nth$arity$2(null,i__35281);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35299,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35299,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35977 = seq__35278;
var G__35978 = chunk__35279;
var G__35979 = count__35280;
var G__35980 = (i__35281 + (1));
seq__35278 = G__35977;
chunk__35279 = G__35978;
count__35280 = G__35979;
i__35281 = G__35980;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35278);
if(temp__5735__auto__){
var seq__35278__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35278__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35278__$1);
var G__35981 = cljs.core.chunk_rest(seq__35278__$1);
var G__35982 = c__4550__auto__;
var G__35983 = cljs.core.count(c__4550__auto__);
var G__35984 = (0);
seq__35278 = G__35981;
chunk__35279 = G__35982;
count__35280 = G__35983;
i__35281 = G__35984;
continue;
} else {
var vec__35305 = cljs.core.first(seq__35278__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35305,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35305,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35985 = cljs.core.next(seq__35278__$1);
var G__35986 = null;
var G__35987 = (0);
var G__35988 = (0);
seq__35278 = G__35985;
chunk__35279 = G__35986;
count__35280 = G__35987;
i__35281 = G__35988;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__35315 = cljs.core.seq(styles);
var chunk__35316 = null;
var count__35317 = (0);
var i__35318 = (0);
while(true){
if((i__35318 < count__35317)){
var vec__35339 = chunk__35316.cljs$core$IIndexed$_nth$arity$2(null,i__35318);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35339,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35339,(1),null);
var G__35342_36003 = dom;
var G__35343_36004 = cljs.core.name(k);
var G__35344_36005 = (((v == null))?"":v);
goog.style.setStyle(G__35342_36003,G__35343_36004,G__35344_36005);


var G__36007 = seq__35315;
var G__36008 = chunk__35316;
var G__36009 = count__35317;
var G__36010 = (i__35318 + (1));
seq__35315 = G__36007;
chunk__35316 = G__36008;
count__35317 = G__36009;
i__35318 = G__36010;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35315);
if(temp__5735__auto__){
var seq__35315__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35315__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35315__$1);
var G__36011 = cljs.core.chunk_rest(seq__35315__$1);
var G__36012 = c__4550__auto__;
var G__36013 = cljs.core.count(c__4550__auto__);
var G__36014 = (0);
seq__35315 = G__36011;
chunk__35316 = G__36012;
count__35317 = G__36013;
i__35318 = G__36014;
continue;
} else {
var vec__35349 = cljs.core.first(seq__35315__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35349,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35349,(1),null);
var G__35352_36016 = dom;
var G__35353_36017 = cljs.core.name(k);
var G__35354_36018 = (((v == null))?"":v);
goog.style.setStyle(G__35352_36016,G__35353_36017,G__35354_36018);


var G__36020 = cljs.core.next(seq__35315__$1);
var G__36021 = null;
var G__36022 = (0);
var G__36023 = (0);
seq__35315 = G__36020;
chunk__35316 = G__36021;
count__35317 = G__36022;
i__35318 = G__36023;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__35360_36025 = key;
var G__35360_36026__$1 = (((G__35360_36025 instanceof cljs.core.Keyword))?G__35360_36025.fqn:null);
switch (G__35360_36026__$1) {
case "id":
el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "class":
el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);

break;
case "for":
el.htmlFor = value;

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_36035 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4131__auto__ = goog.string.startsWith(ks_36035,"data-");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.string.startsWith(ks_36035,"aria-");
}
})())){
el.setAttribute(ks_36035,value);
} else {
(el[ks_36035] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__35378 = shadow.dom.dom_node(el);
var G__35379 = cls;
return goog.dom.classlist.contains(G__35378,G__35379);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__35396){
var map__35397 = p__35396;
var map__35397__$1 = (((((!((map__35397 == null))))?(((((map__35397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35397.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35397):map__35397);
var props = map__35397__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35397__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__35401 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35401,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35401,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35401,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__35407 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__35407,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__35407;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__35413 = arguments.length;
switch (G__35413) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
});

shadow.dom.append.cljs$lang$maxFixedArity = 2;

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__35426){
var vec__35427 = p__35426;
var seq__35428 = cljs.core.seq(vec__35427);
var first__35429 = cljs.core.first(seq__35428);
var seq__35428__$1 = cljs.core.next(seq__35428);
var nn = first__35429;
var first__35429__$1 = cljs.core.first(seq__35428__$1);
var seq__35428__$2 = cljs.core.next(seq__35428__$1);
var np = first__35429__$1;
var nc = seq__35428__$2;
var node = vec__35427;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35432 = nn;
var G__35433 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35432,G__35433) : create_fn.call(null,G__35432,G__35433));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35434 = nn;
var G__35435 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35434,G__35435) : create_fn.call(null,G__35434,G__35435));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__35442 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35442,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35442,(1),null);
var seq__35447_36062 = cljs.core.seq(node_children);
var chunk__35448_36063 = null;
var count__35449_36064 = (0);
var i__35450_36065 = (0);
while(true){
if((i__35450_36065 < count__35449_36064)){
var child_struct_36066 = chunk__35448_36063.cljs$core$IIndexed$_nth$arity$2(null,i__35450_36065);
var children_36067 = shadow.dom.dom_node(child_struct_36066);
if(cljs.core.seq_QMARK_(children_36067)){
var seq__35486_36068 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_36067));
var chunk__35488_36069 = null;
var count__35489_36070 = (0);
var i__35490_36071 = (0);
while(true){
if((i__35490_36071 < count__35489_36070)){
var child_36076 = chunk__35488_36069.cljs$core$IIndexed$_nth$arity$2(null,i__35490_36071);
if(cljs.core.truth_(child_36076)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36076);


var G__36077 = seq__35486_36068;
var G__36078 = chunk__35488_36069;
var G__36079 = count__35489_36070;
var G__36080 = (i__35490_36071 + (1));
seq__35486_36068 = G__36077;
chunk__35488_36069 = G__36078;
count__35489_36070 = G__36079;
i__35490_36071 = G__36080;
continue;
} else {
var G__36081 = seq__35486_36068;
var G__36082 = chunk__35488_36069;
var G__36083 = count__35489_36070;
var G__36084 = (i__35490_36071 + (1));
seq__35486_36068 = G__36081;
chunk__35488_36069 = G__36082;
count__35489_36070 = G__36083;
i__35490_36071 = G__36084;
continue;
}
} else {
var temp__5735__auto___36085 = cljs.core.seq(seq__35486_36068);
if(temp__5735__auto___36085){
var seq__35486_36086__$1 = temp__5735__auto___36085;
if(cljs.core.chunked_seq_QMARK_(seq__35486_36086__$1)){
var c__4550__auto___36087 = cljs.core.chunk_first(seq__35486_36086__$1);
var G__36088 = cljs.core.chunk_rest(seq__35486_36086__$1);
var G__36089 = c__4550__auto___36087;
var G__36090 = cljs.core.count(c__4550__auto___36087);
var G__36091 = (0);
seq__35486_36068 = G__36088;
chunk__35488_36069 = G__36089;
count__35489_36070 = G__36090;
i__35490_36071 = G__36091;
continue;
} else {
var child_36092 = cljs.core.first(seq__35486_36086__$1);
if(cljs.core.truth_(child_36092)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36092);


var G__36093 = cljs.core.next(seq__35486_36086__$1);
var G__36094 = null;
var G__36095 = (0);
var G__36096 = (0);
seq__35486_36068 = G__36093;
chunk__35488_36069 = G__36094;
count__35489_36070 = G__36095;
i__35490_36071 = G__36096;
continue;
} else {
var G__36102 = cljs.core.next(seq__35486_36086__$1);
var G__36103 = null;
var G__36104 = (0);
var G__36105 = (0);
seq__35486_36068 = G__36102;
chunk__35488_36069 = G__36103;
count__35489_36070 = G__36104;
i__35490_36071 = G__36105;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_36067);
}


var G__36106 = seq__35447_36062;
var G__36107 = chunk__35448_36063;
var G__36108 = count__35449_36064;
var G__36109 = (i__35450_36065 + (1));
seq__35447_36062 = G__36106;
chunk__35448_36063 = G__36107;
count__35449_36064 = G__36108;
i__35450_36065 = G__36109;
continue;
} else {
var temp__5735__auto___36111 = cljs.core.seq(seq__35447_36062);
if(temp__5735__auto___36111){
var seq__35447_36112__$1 = temp__5735__auto___36111;
if(cljs.core.chunked_seq_QMARK_(seq__35447_36112__$1)){
var c__4550__auto___36113 = cljs.core.chunk_first(seq__35447_36112__$1);
var G__36115 = cljs.core.chunk_rest(seq__35447_36112__$1);
var G__36116 = c__4550__auto___36113;
var G__36117 = cljs.core.count(c__4550__auto___36113);
var G__36118 = (0);
seq__35447_36062 = G__36115;
chunk__35448_36063 = G__36116;
count__35449_36064 = G__36117;
i__35450_36065 = G__36118;
continue;
} else {
var child_struct_36119 = cljs.core.first(seq__35447_36112__$1);
var children_36120 = shadow.dom.dom_node(child_struct_36119);
if(cljs.core.seq_QMARK_(children_36120)){
var seq__35492_36121 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_36120));
var chunk__35494_36122 = null;
var count__35495_36123 = (0);
var i__35496_36124 = (0);
while(true){
if((i__35496_36124 < count__35495_36123)){
var child_36127 = chunk__35494_36122.cljs$core$IIndexed$_nth$arity$2(null,i__35496_36124);
if(cljs.core.truth_(child_36127)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36127);


var G__36129 = seq__35492_36121;
var G__36130 = chunk__35494_36122;
var G__36131 = count__35495_36123;
var G__36132 = (i__35496_36124 + (1));
seq__35492_36121 = G__36129;
chunk__35494_36122 = G__36130;
count__35495_36123 = G__36131;
i__35496_36124 = G__36132;
continue;
} else {
var G__36133 = seq__35492_36121;
var G__36134 = chunk__35494_36122;
var G__36135 = count__35495_36123;
var G__36136 = (i__35496_36124 + (1));
seq__35492_36121 = G__36133;
chunk__35494_36122 = G__36134;
count__35495_36123 = G__36135;
i__35496_36124 = G__36136;
continue;
}
} else {
var temp__5735__auto___36137__$1 = cljs.core.seq(seq__35492_36121);
if(temp__5735__auto___36137__$1){
var seq__35492_36141__$1 = temp__5735__auto___36137__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35492_36141__$1)){
var c__4550__auto___36142 = cljs.core.chunk_first(seq__35492_36141__$1);
var G__36143 = cljs.core.chunk_rest(seq__35492_36141__$1);
var G__36144 = c__4550__auto___36142;
var G__36145 = cljs.core.count(c__4550__auto___36142);
var G__36146 = (0);
seq__35492_36121 = G__36143;
chunk__35494_36122 = G__36144;
count__35495_36123 = G__36145;
i__35496_36124 = G__36146;
continue;
} else {
var child_36147 = cljs.core.first(seq__35492_36141__$1);
if(cljs.core.truth_(child_36147)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36147);


var G__36148 = cljs.core.next(seq__35492_36141__$1);
var G__36149 = null;
var G__36150 = (0);
var G__36151 = (0);
seq__35492_36121 = G__36148;
chunk__35494_36122 = G__36149;
count__35495_36123 = G__36150;
i__35496_36124 = G__36151;
continue;
} else {
var G__36153 = cljs.core.next(seq__35492_36141__$1);
var G__36154 = null;
var G__36155 = (0);
var G__36156 = (0);
seq__35492_36121 = G__36153;
chunk__35494_36122 = G__36154;
count__35495_36123 = G__36155;
i__35496_36124 = G__36156;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_36120);
}


var G__36157 = cljs.core.next(seq__35447_36112__$1);
var G__36158 = null;
var G__36159 = (0);
var G__36160 = (0);
seq__35447_36062 = G__36157;
chunk__35448_36063 = G__36158;
count__35449_36064 = G__36159;
i__35450_36065 = G__36160;
continue;
}
} else {
}
}
break;
}

return node;
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});

cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL;

DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__35502 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__35502);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__35504 = cljs.core.seq(node);
var chunk__35505 = null;
var count__35506 = (0);
var i__35507 = (0);
while(true){
if((i__35507 < count__35506)){
var n = chunk__35505.cljs$core$IIndexed$_nth$arity$2(null,i__35507);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36168 = seq__35504;
var G__36169 = chunk__35505;
var G__36170 = count__35506;
var G__36171 = (i__35507 + (1));
seq__35504 = G__36168;
chunk__35505 = G__36169;
count__35506 = G__36170;
i__35507 = G__36171;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35504);
if(temp__5735__auto__){
var seq__35504__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35504__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35504__$1);
var G__36173 = cljs.core.chunk_rest(seq__35504__$1);
var G__36174 = c__4550__auto__;
var G__36175 = cljs.core.count(c__4550__auto__);
var G__36176 = (0);
seq__35504 = G__36173;
chunk__35505 = G__36174;
count__35506 = G__36175;
i__35507 = G__36176;
continue;
} else {
var n = cljs.core.first(seq__35504__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36178 = cljs.core.next(seq__35504__$1);
var G__36179 = null;
var G__36180 = (0);
var G__36181 = (0);
seq__35504 = G__36178;
chunk__35505 = G__36179;
count__35506 = G__36180;
i__35507 = G__36181;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__35519 = shadow.dom.dom_node(new$);
var G__35520 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__35519,G__35520);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__35525 = arguments.length;
switch (G__35525) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return shadow.dom.dom_node(el).innerText = new_text;
});

shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
});

shadow.dom.text.cljs$lang$maxFixedArity = 2;

shadow.dom.check = (function shadow$dom$check(var_args){
var G__35534 = arguments.length;
switch (G__35534) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
});

shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return shadow.dom.dom_node(el).checked = checked;
});

shadow.dom.check.cljs$lang$maxFixedArity = 2;

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__35550 = arguments.length;
switch (G__35550) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});

shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4131__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return default$;
}
});

shadow.dom.attr.cljs$lang$maxFixedArity = 3;

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36209 = arguments.length;
var i__4731__auto___36210 = (0);
while(true){
if((i__4731__auto___36210 < len__4730__auto___36209)){
args__4736__auto__.push((arguments[i__4731__auto___36210]));

var G__36212 = (i__4731__auto___36210 + (1));
i__4731__auto___36210 = G__36212;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__35577_36217 = cljs.core.seq(nodes);
var chunk__35578_36218 = null;
var count__35579_36219 = (0);
var i__35580_36220 = (0);
while(true){
if((i__35580_36220 < count__35579_36219)){
var node_36224 = chunk__35578_36218.cljs$core$IIndexed$_nth$arity$2(null,i__35580_36220);
fragment.appendChild(shadow.dom._to_dom(node_36224));


var G__36225 = seq__35577_36217;
var G__36226 = chunk__35578_36218;
var G__36227 = count__35579_36219;
var G__36228 = (i__35580_36220 + (1));
seq__35577_36217 = G__36225;
chunk__35578_36218 = G__36226;
count__35579_36219 = G__36227;
i__35580_36220 = G__36228;
continue;
} else {
var temp__5735__auto___36229 = cljs.core.seq(seq__35577_36217);
if(temp__5735__auto___36229){
var seq__35577_36231__$1 = temp__5735__auto___36229;
if(cljs.core.chunked_seq_QMARK_(seq__35577_36231__$1)){
var c__4550__auto___36232 = cljs.core.chunk_first(seq__35577_36231__$1);
var G__36233 = cljs.core.chunk_rest(seq__35577_36231__$1);
var G__36234 = c__4550__auto___36232;
var G__36235 = cljs.core.count(c__4550__auto___36232);
var G__36236 = (0);
seq__35577_36217 = G__36233;
chunk__35578_36218 = G__36234;
count__35579_36219 = G__36235;
i__35580_36220 = G__36236;
continue;
} else {
var node_36238 = cljs.core.first(seq__35577_36231__$1);
fragment.appendChild(shadow.dom._to_dom(node_36238));


var G__36240 = cljs.core.next(seq__35577_36231__$1);
var G__36241 = null;
var G__36242 = (0);
var G__36243 = (0);
seq__35577_36217 = G__36240;
chunk__35578_36218 = G__36241;
count__35579_36219 = G__36242;
i__35580_36220 = G__36243;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
});

shadow.dom.fragment.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
shadow.dom.fragment.cljs$lang$applyTo = (function (seq35575){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35575));
});

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__35588_36251 = cljs.core.seq(scripts);
var chunk__35589_36252 = null;
var count__35590_36253 = (0);
var i__35591_36254 = (0);
while(true){
if((i__35591_36254 < count__35590_36253)){
var vec__35600_36258 = chunk__35589_36252.cljs$core$IIndexed$_nth$arity$2(null,i__35591_36254);
var script_tag_36259 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35600_36258,(0),null);
var script_body_36260 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35600_36258,(1),null);
eval(script_body_36260);


var G__36262 = seq__35588_36251;
var G__36263 = chunk__35589_36252;
var G__36264 = count__35590_36253;
var G__36265 = (i__35591_36254 + (1));
seq__35588_36251 = G__36262;
chunk__35589_36252 = G__36263;
count__35590_36253 = G__36264;
i__35591_36254 = G__36265;
continue;
} else {
var temp__5735__auto___36266 = cljs.core.seq(seq__35588_36251);
if(temp__5735__auto___36266){
var seq__35588_36267__$1 = temp__5735__auto___36266;
if(cljs.core.chunked_seq_QMARK_(seq__35588_36267__$1)){
var c__4550__auto___36268 = cljs.core.chunk_first(seq__35588_36267__$1);
var G__36269 = cljs.core.chunk_rest(seq__35588_36267__$1);
var G__36270 = c__4550__auto___36268;
var G__36271 = cljs.core.count(c__4550__auto___36268);
var G__36272 = (0);
seq__35588_36251 = G__36269;
chunk__35589_36252 = G__36270;
count__35590_36253 = G__36271;
i__35591_36254 = G__36272;
continue;
} else {
var vec__35603_36274 = cljs.core.first(seq__35588_36267__$1);
var script_tag_36275 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35603_36274,(0),null);
var script_body_36276 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35603_36274,(1),null);
eval(script_body_36276);


var G__36280 = cljs.core.next(seq__35588_36267__$1);
var G__36281 = null;
var G__36282 = (0);
var G__36283 = (0);
seq__35588_36251 = G__36280;
chunk__35589_36252 = G__36281;
count__35590_36253 = G__36282;
i__35591_36254 = G__36283;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (scripts){
return (function (s__$1,p__35608){
var vec__35610 = p__35608;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35610,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35610,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
});})(scripts))
,s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
el.innerHTML = s;

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__35622 = shadow.dom.dom_node(el);
var G__35623 = cls;
return goog.dom.getAncestorByClass(G__35622,G__35623);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__35627 = arguments.length;
switch (G__35627) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__35628 = shadow.dom.dom_node(el);
var G__35629 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__35628,G__35629);
});

shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__35631 = shadow.dom.dom_node(el);
var G__35632 = cljs.core.name(tag);
var G__35633 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__35631,G__35632,G__35633);
});

shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3;

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__35638 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__35638);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__35642 = shadow.dom.dom_node(dom);
var G__35643 = value;
return goog.dom.forms.setValue(G__35642,G__35643);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__35646 = cljs.core.seq(style_keys);
var chunk__35647 = null;
var count__35648 = (0);
var i__35649 = (0);
while(true){
if((i__35649 < count__35648)){
var it = chunk__35647.cljs$core$IIndexed$_nth$arity$2(null,i__35649);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36310 = seq__35646;
var G__36311 = chunk__35647;
var G__36312 = count__35648;
var G__36313 = (i__35649 + (1));
seq__35646 = G__36310;
chunk__35647 = G__36311;
count__35648 = G__36312;
i__35649 = G__36313;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35646);
if(temp__5735__auto__){
var seq__35646__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35646__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__35646__$1);
var G__36315 = cljs.core.chunk_rest(seq__35646__$1);
var G__36316 = c__4550__auto__;
var G__36317 = cljs.core.count(c__4550__auto__);
var G__36318 = (0);
seq__35646 = G__36315;
chunk__35647 = G__36316;
count__35648 = G__36317;
i__35649 = G__36318;
continue;
} else {
var it = cljs.core.first(seq__35646__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36320 = cljs.core.next(seq__35646__$1);
var G__36321 = null;
var G__36322 = (0);
var G__36323 = (0);
seq__35646 = G__36320;
chunk__35647 = G__36321;
count__35648 = G__36322;
i__35649 = G__36323;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k35651,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__35655 = k35651;
var G__35655__$1 = (((G__35655 instanceof cljs.core.Keyword))?G__35655.fqn:null);
switch (G__35655__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35651,else__4388__auto__);

}
});

shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__35659){
var vec__35660 = p__35659;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35660,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35660,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35650){
var self__ = this;
var G__35650__$1 = this;
return (new cljs.core.RecordIter((0),G__35650__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__35666 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__35666(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35652,other35653){
var self__ = this;
var this35652__$1 = this;
return (((!((other35653 == null)))) && ((this35652__$1.constructor === other35653.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35652__$1.x,other35653.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35652__$1.y,other35653.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35652__$1.__extmap,other35653.__extmap)));
});

shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__35650){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__35667 = cljs.core.keyword_identical_QMARK_;
var expr__35668 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__35670 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__35671 = expr__35668;
return (pred__35667.cljs$core$IFn$_invoke$arity$2 ? pred__35667.cljs$core$IFn$_invoke$arity$2(G__35670,G__35671) : pred__35667.call(null,G__35670,G__35671));
})())){
return (new shadow.dom.Coordinate(G__35650,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__35672 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__35673 = expr__35668;
return (pred__35667.cljs$core$IFn$_invoke$arity$2 ? pred__35667.cljs$core$IFn$_invoke$arity$2(G__35672,G__35673) : pred__35667.call(null,G__35672,G__35673));
})())){
return (new shadow.dom.Coordinate(self__.x,G__35650,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__35650),null));
}
}
});

shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
});

shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__35650){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__35650,self__.__extmap,self__.__hash));
});

shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
});

shadow.dom.Coordinate.cljs$lang$type = true;

shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
});

shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Coordinate");
});

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__35654){
var extmap__4424__auto__ = (function (){var G__35676 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35654,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__35654)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35676);
} else {
return G__35676;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__35654),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__35654),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__35681 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__35681);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__35687 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__35687);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__35689 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__35689);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k35691,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__35697 = k35691;
var G__35697__$1 = (((G__35697 instanceof cljs.core.Keyword))?G__35697.fqn:null);
switch (G__35697__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35691,else__4388__auto__);

}
});

shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__35702){
var vec__35704 = p__35702;
var k__4408__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35704,(0),null);
var v__4409__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35704,(1),null);
return (f__4405__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4405__auto__.cljs$core$IFn$_invoke$arity$3(ret__4407__auto__,k__4408__auto__,v__4409__auto__) : f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__));
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer(writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4400__auto__,pr_pair__4402__auto__,"#shadow.dom.Size{",", ","}",opts__4401__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35690){
var self__ = this;
var G__35690__$1 = this;
return (new cljs.core.RecordIter((0),G__35690__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
});

shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = (function (){var fexpr__35721 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
;
return fexpr__35721(this__4381__auto____$1);
})();
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35692,other35693){
var self__ = this;
var this35692__$1 = this;
return (((!((other35693 == null)))) && ((this35692__$1.constructor === other35693.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35692__$1.w,other35693.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35692__$1.h,other35693.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35692__$1.__extmap,other35693.__extmap)));
});

shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4395__auto__)),null));
}
});

shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__35690){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__35728 = cljs.core.keyword_identical_QMARK_;
var expr__35729 = k__4393__auto__;
if(cljs.core.truth_((function (){var G__35731 = new cljs.core.Keyword(null,"w","w",354169001);
var G__35732 = expr__35729;
return (pred__35728.cljs$core$IFn$_invoke$arity$2 ? pred__35728.cljs$core$IFn$_invoke$arity$2(G__35731,G__35732) : pred__35728.call(null,G__35731,G__35732));
})())){
return (new shadow.dom.Size(G__35690,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__35733 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__35734 = expr__35729;
return (pred__35728.cljs$core$IFn$_invoke$arity$2 ? pred__35728.cljs$core$IFn$_invoke$arity$2(G__35733,G__35734) : pred__35728.call(null,G__35733,G__35734));
})())){
return (new shadow.dom.Size(self__.w,G__35690,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4393__auto__,G__35690),null));
}
}
});

shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
});

shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__35690){
var self__ = this;
var this__4384__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__35690,self__.__extmap,self__.__hash));
});

shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
});

shadow.dom.Size.cljs$lang$type = true;

shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
});

shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/Size");
});

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__35696){
var extmap__4424__auto__ = (function (){var G__35741 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35696,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__35696)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35741);
} else {
return G__35741;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__35696),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__35696),null,cljs.core.not_empty(extmap__4424__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__35745 = shadow.dom.dom_node(el);
return goog.style.getSize(G__35745);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4604__auto__ = opts;
var l__4605__auto__ = a__4604__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4605__auto__)){
var G__36378 = (i + (1));
var G__36379 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__36378;
ret = G__36379;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35754){
var vec__35755 = p__35754;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35755,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35755,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__35760 = arguments.length;
switch (G__35760) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});

shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});

shadow.dom.redirect.cljs$lang$maxFixedArity = 2;

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return document.location.href = document.location.href;
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__35762_36381 = new_node;
var G__35763_36382 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__35762_36381,G__35763_36382);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__35764_36383 = new_node;
var G__35765_36384 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__35764_36383,G__35765_36384);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__36385 = ps;
var G__36386 = (i + (1));
el__$1 = G__36385;
i = G__36386;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__35766 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__35766);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,((function (parent){
return (function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
});})(parent))
,null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__35775 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__35775);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__35784 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__35784);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__35788 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35788,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35788,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35788,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__35794_36387 = cljs.core.seq(props);
var chunk__35795_36388 = null;
var count__35796_36389 = (0);
var i__35797_36390 = (0);
while(true){
if((i__35797_36390 < count__35796_36389)){
var vec__35813_36391 = chunk__35795_36388.cljs$core$IIndexed$_nth$arity$2(null,i__35797_36390);
var k_36392 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35813_36391,(0),null);
var v_36393 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35813_36391,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_36392);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36392),v_36393);


var G__36394 = seq__35794_36387;
var G__36395 = chunk__35795_36388;
var G__36396 = count__35796_36389;
var G__36397 = (i__35797_36390 + (1));
seq__35794_36387 = G__36394;
chunk__35795_36388 = G__36395;
count__35796_36389 = G__36396;
i__35797_36390 = G__36397;
continue;
} else {
var temp__5735__auto___36398 = cljs.core.seq(seq__35794_36387);
if(temp__5735__auto___36398){
var seq__35794_36399__$1 = temp__5735__auto___36398;
if(cljs.core.chunked_seq_QMARK_(seq__35794_36399__$1)){
var c__4550__auto___36400 = cljs.core.chunk_first(seq__35794_36399__$1);
var G__36401 = cljs.core.chunk_rest(seq__35794_36399__$1);
var G__36402 = c__4550__auto___36400;
var G__36403 = cljs.core.count(c__4550__auto___36400);
var G__36404 = (0);
seq__35794_36387 = G__36401;
chunk__35795_36388 = G__36402;
count__35796_36389 = G__36403;
i__35797_36390 = G__36404;
continue;
} else {
var vec__35817_36405 = cljs.core.first(seq__35794_36399__$1);
var k_36406 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35817_36405,(0),null);
var v_36407 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35817_36405,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_36406);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36406),v_36407);


var G__36413 = cljs.core.next(seq__35794_36399__$1);
var G__36414 = null;
var G__36415 = (0);
var G__36416 = (0);
seq__35794_36387 = G__36413;
chunk__35795_36388 = G__36414;
count__35796_36389 = G__36415;
i__35797_36390 = G__36416;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__35823 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35823,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35823,(1),null);
var seq__35826_36418 = cljs.core.seq(node_children);
var chunk__35828_36419 = null;
var count__35829_36420 = (0);
var i__35830_36421 = (0);
while(true){
if((i__35830_36421 < count__35829_36420)){
var child_struct_36422 = chunk__35828_36419.cljs$core$IIndexed$_nth$arity$2(null,i__35830_36421);
if((!((child_struct_36422 == null)))){
if(typeof child_struct_36422 === 'string'){
var text_36423 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36423),child_struct_36422].join(''));
} else {
var children_36425 = shadow.dom.svg_node(child_struct_36422);
if(cljs.core.seq_QMARK_(children_36425)){
var seq__35860_36427 = cljs.core.seq(children_36425);
var chunk__35862_36428 = null;
var count__35863_36429 = (0);
var i__35864_36430 = (0);
while(true){
if((i__35864_36430 < count__35863_36429)){
var child_36431 = chunk__35862_36428.cljs$core$IIndexed$_nth$arity$2(null,i__35864_36430);
if(cljs.core.truth_(child_36431)){
node.appendChild(child_36431);


var G__36432 = seq__35860_36427;
var G__36433 = chunk__35862_36428;
var G__36434 = count__35863_36429;
var G__36435 = (i__35864_36430 + (1));
seq__35860_36427 = G__36432;
chunk__35862_36428 = G__36433;
count__35863_36429 = G__36434;
i__35864_36430 = G__36435;
continue;
} else {
var G__36436 = seq__35860_36427;
var G__36437 = chunk__35862_36428;
var G__36438 = count__35863_36429;
var G__36439 = (i__35864_36430 + (1));
seq__35860_36427 = G__36436;
chunk__35862_36428 = G__36437;
count__35863_36429 = G__36438;
i__35864_36430 = G__36439;
continue;
}
} else {
var temp__5735__auto___36440 = cljs.core.seq(seq__35860_36427);
if(temp__5735__auto___36440){
var seq__35860_36441__$1 = temp__5735__auto___36440;
if(cljs.core.chunked_seq_QMARK_(seq__35860_36441__$1)){
var c__4550__auto___36443 = cljs.core.chunk_first(seq__35860_36441__$1);
var G__36444 = cljs.core.chunk_rest(seq__35860_36441__$1);
var G__36445 = c__4550__auto___36443;
var G__36446 = cljs.core.count(c__4550__auto___36443);
var G__36447 = (0);
seq__35860_36427 = G__36444;
chunk__35862_36428 = G__36445;
count__35863_36429 = G__36446;
i__35864_36430 = G__36447;
continue;
} else {
var child_36449 = cljs.core.first(seq__35860_36441__$1);
if(cljs.core.truth_(child_36449)){
node.appendChild(child_36449);


var G__36450 = cljs.core.next(seq__35860_36441__$1);
var G__36451 = null;
var G__36452 = (0);
var G__36453 = (0);
seq__35860_36427 = G__36450;
chunk__35862_36428 = G__36451;
count__35863_36429 = G__36452;
i__35864_36430 = G__36453;
continue;
} else {
var G__36454 = cljs.core.next(seq__35860_36441__$1);
var G__36455 = null;
var G__36456 = (0);
var G__36457 = (0);
seq__35860_36427 = G__36454;
chunk__35862_36428 = G__36455;
count__35863_36429 = G__36456;
i__35864_36430 = G__36457;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36425);
}
}


var G__36458 = seq__35826_36418;
var G__36459 = chunk__35828_36419;
var G__36460 = count__35829_36420;
var G__36461 = (i__35830_36421 + (1));
seq__35826_36418 = G__36458;
chunk__35828_36419 = G__36459;
count__35829_36420 = G__36460;
i__35830_36421 = G__36461;
continue;
} else {
var G__36462 = seq__35826_36418;
var G__36463 = chunk__35828_36419;
var G__36464 = count__35829_36420;
var G__36465 = (i__35830_36421 + (1));
seq__35826_36418 = G__36462;
chunk__35828_36419 = G__36463;
count__35829_36420 = G__36464;
i__35830_36421 = G__36465;
continue;
}
} else {
var temp__5735__auto___36466 = cljs.core.seq(seq__35826_36418);
if(temp__5735__auto___36466){
var seq__35826_36477__$1 = temp__5735__auto___36466;
if(cljs.core.chunked_seq_QMARK_(seq__35826_36477__$1)){
var c__4550__auto___36478 = cljs.core.chunk_first(seq__35826_36477__$1);
var G__36479 = cljs.core.chunk_rest(seq__35826_36477__$1);
var G__36480 = c__4550__auto___36478;
var G__36481 = cljs.core.count(c__4550__auto___36478);
var G__36482 = (0);
seq__35826_36418 = G__36479;
chunk__35828_36419 = G__36480;
count__35829_36420 = G__36481;
i__35830_36421 = G__36482;
continue;
} else {
var child_struct_36483 = cljs.core.first(seq__35826_36477__$1);
if((!((child_struct_36483 == null)))){
if(typeof child_struct_36483 === 'string'){
var text_36484 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36484),child_struct_36483].join(''));
} else {
var children_36485 = shadow.dom.svg_node(child_struct_36483);
if(cljs.core.seq_QMARK_(children_36485)){
var seq__35872_36486 = cljs.core.seq(children_36485);
var chunk__35874_36487 = null;
var count__35875_36488 = (0);
var i__35876_36489 = (0);
while(true){
if((i__35876_36489 < count__35875_36488)){
var child_36490 = chunk__35874_36487.cljs$core$IIndexed$_nth$arity$2(null,i__35876_36489);
if(cljs.core.truth_(child_36490)){
node.appendChild(child_36490);


var G__36492 = seq__35872_36486;
var G__36493 = chunk__35874_36487;
var G__36494 = count__35875_36488;
var G__36495 = (i__35876_36489 + (1));
seq__35872_36486 = G__36492;
chunk__35874_36487 = G__36493;
count__35875_36488 = G__36494;
i__35876_36489 = G__36495;
continue;
} else {
var G__36496 = seq__35872_36486;
var G__36497 = chunk__35874_36487;
var G__36498 = count__35875_36488;
var G__36499 = (i__35876_36489 + (1));
seq__35872_36486 = G__36496;
chunk__35874_36487 = G__36497;
count__35875_36488 = G__36498;
i__35876_36489 = G__36499;
continue;
}
} else {
var temp__5735__auto___36500__$1 = cljs.core.seq(seq__35872_36486);
if(temp__5735__auto___36500__$1){
var seq__35872_36501__$1 = temp__5735__auto___36500__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35872_36501__$1)){
var c__4550__auto___36502 = cljs.core.chunk_first(seq__35872_36501__$1);
var G__36503 = cljs.core.chunk_rest(seq__35872_36501__$1);
var G__36504 = c__4550__auto___36502;
var G__36505 = cljs.core.count(c__4550__auto___36502);
var G__36506 = (0);
seq__35872_36486 = G__36503;
chunk__35874_36487 = G__36504;
count__35875_36488 = G__36505;
i__35876_36489 = G__36506;
continue;
} else {
var child_36507 = cljs.core.first(seq__35872_36501__$1);
if(cljs.core.truth_(child_36507)){
node.appendChild(child_36507);


var G__36508 = cljs.core.next(seq__35872_36501__$1);
var G__36509 = null;
var G__36510 = (0);
var G__36511 = (0);
seq__35872_36486 = G__36508;
chunk__35874_36487 = G__36509;
count__35875_36488 = G__36510;
i__35876_36489 = G__36511;
continue;
} else {
var G__36512 = cljs.core.next(seq__35872_36501__$1);
var G__36513 = null;
var G__36514 = (0);
var G__36515 = (0);
seq__35872_36486 = G__36512;
chunk__35874_36487 = G__36513;
count__35875_36488 = G__36514;
i__35876_36489 = G__36515;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36485);
}
}


var G__36518 = cljs.core.next(seq__35826_36477__$1);
var G__36519 = null;
var G__36520 = (0);
var G__36521 = (0);
seq__35826_36418 = G__36518;
chunk__35828_36419 = G__36519;
count__35829_36420 = G__36520;
i__35830_36421 = G__36521;
continue;
} else {
var G__36522 = cljs.core.next(seq__35826_36477__$1);
var G__36523 = null;
var G__36524 = (0);
var G__36525 = (0);
seq__35826_36418 = G__36522;
chunk__35828_36419 = G__36523;
count__35829_36420 = G__36524;
i__35830_36421 = G__36525;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__35885_36526 = shadow.dom._to_svg;
var G__35886_36527 = "string";
var G__35887_36528 = ((function (G__35885_36526,G__35886_36527){
return (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});})(G__35885_36526,G__35886_36527))
;
goog.object.set(G__35885_36526,G__35886_36527,G__35887_36528);

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
});

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__35889_36529 = shadow.dom._to_svg;
var G__35890_36530 = "null";
var G__35891_36531 = ((function (G__35889_36529,G__35890_36530){
return (function (_){
return null;
});})(G__35889_36529,G__35890_36530))
;
goog.object.set(G__35889_36529,G__35890_36530,G__35891_36531);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36537 = arguments.length;
var i__4731__auto___36538 = (0);
while(true){
if((i__4731__auto___36538 < len__4730__auto___36537)){
args__4736__auto__.push((arguments[i__4731__auto___36538]));

var G__36542 = (i__4731__auto___36538 + (1));
i__4731__auto___36538 = G__36542;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
});

shadow.dom.svg.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
shadow.dom.svg.cljs$lang$applyTo = (function (seq35893){
var G__35894 = cljs.core.first(seq35893);
var seq35893__$1 = cljs.core.next(seq35893);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35894,seq35893__$1);
});

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__35899 = arguments.length;
switch (G__35899) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
});

shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = ((function (buf,chan){
return (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});})(buf,chan))
;
var G__35908_36547 = shadow.dom.dom_node(el);
var G__35909_36548 = cljs.core.name(event);
var G__35910_36549 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__35908_36547,G__35909_36548,G__35910_36549) : shadow.dom.dom_listen.call(null,G__35908_36547,G__35909_36548,G__35910_36549));

if(cljs.core.truth_((function (){var and__4120__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4120__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4120__auto__;
}
})())){
var c__33515__auto___36550 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33515__auto___36550,buf,chan,event_fn){
return (function (){
var f__33516__auto__ = (function (){var switch__33352__auto__ = ((function (c__33515__auto___36550,buf,chan,event_fn){
return (function (state_35917){
var state_val_35918 = (state_35917[(1)]);
if((state_val_35918 === (1))){
var state_35917__$1 = state_35917;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35917__$1,(2),once_or_cleanup);
} else {
if((state_val_35918 === (2))){
var inst_35914 = (state_35917[(2)]);
var inst_35915 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_35917__$1 = (function (){var statearr_35921 = state_35917;
(statearr_35921[(7)] = inst_35914);

return statearr_35921;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35917__$1,inst_35915);
} else {
return null;
}
}
});})(c__33515__auto___36550,buf,chan,event_fn))
;
return ((function (switch__33352__auto__,c__33515__auto___36550,buf,chan,event_fn){
return (function() {
var shadow$dom$state_machine__33353__auto__ = null;
var shadow$dom$state_machine__33353__auto____0 = (function (){
var statearr_35922 = [null,null,null,null,null,null,null,null];
(statearr_35922[(0)] = shadow$dom$state_machine__33353__auto__);

(statearr_35922[(1)] = (1));

return statearr_35922;
});
var shadow$dom$state_machine__33353__auto____1 = (function (state_35917){
while(true){
var ret_value__33354__auto__ = (function (){try{while(true){
var result__33355__auto__ = switch__33352__auto__(state_35917);
if(cljs.core.keyword_identical_QMARK_(result__33355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33355__auto__;
}
break;
}
}catch (e35923){if((e35923 instanceof Object)){
var ex__33356__auto__ = e35923;
var statearr_35924_36556 = state_35917;
(statearr_35924_36556[(5)] = ex__33356__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_35917);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35923;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36560 = state_35917;
state_35917 = G__36560;
continue;
} else {
return ret_value__33354__auto__;
}
break;
}
});
shadow$dom$state_machine__33353__auto__ = function(state_35917){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__33353__auto____0.call(this);
case 1:
return shadow$dom$state_machine__33353__auto____1.call(this,state_35917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__33353__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__33353__auto____0;
shadow$dom$state_machine__33353__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__33353__auto____1;
return shadow$dom$state_machine__33353__auto__;
})()
;})(switch__33352__auto__,c__33515__auto___36550,buf,chan,event_fn))
})();
var state__33517__auto__ = (function (){var statearr_35925 = (f__33516__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33516__auto__.cljs$core$IFn$_invoke$arity$0() : f__33516__auto__.call(null));
(statearr_35925[(6)] = c__33515__auto___36550);

return statearr_35925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33517__auto__);
});})(c__33515__auto___36550,buf,chan,event_fn))
);

} else {
}

return chan;
});

shadow.dom.event_chan.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=shadow.dom.js.map
