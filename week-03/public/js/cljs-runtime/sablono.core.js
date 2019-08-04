goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__35241__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__35108 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__35109 = cljs.core.seq(vec__35108);
var first__35110 = cljs.core.first(seq__35109);
var seq__35109__$1 = cljs.core.next(seq__35109);
var tag = first__35110;
var body = seq__35109__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__35241 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35242__i = 0, G__35242__a = new Array(arguments.length -  0);
while (G__35242__i < G__35242__a.length) {G__35242__a[G__35242__i] = arguments[G__35242__i + 0]; ++G__35242__i;}
  args = new cljs.core.IndexedSeq(G__35242__a,0,null);
} 
return G__35241__delegate.call(this,args);};
G__35241.cljs$lang$maxFixedArity = 0;
G__35241.cljs$lang$applyTo = (function (arglist__35243){
var args = cljs.core.seq(arglist__35243);
return G__35241__delegate(args);
});
G__35241.cljs$core$IFn$_invoke$arity$variadic = G__35241__delegate;
return G__35241;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4523__auto__ = (function sablono$core$update_arglists_$_iter__35111(s__35112){
return (new cljs.core.LazySeq(null,(function (){
var s__35112__$1 = s__35112;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__35112__$1);
if(temp__5735__auto__){
var s__35112__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35112__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__35112__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__35114 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__35113 = (0);
while(true){
if((i__35113 < size__4522__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__35113);
cljs.core.chunk_append(b__35114,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__35244 = (i__35113 + (1));
i__35113 = G__35244;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35114),sablono$core$update_arglists_$_iter__35111(cljs.core.chunk_rest(s__35112__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35114),null);
}
} else {
var args = cljs.core.first(s__35112__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__35111(cljs.core.rest(s__35112__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35249 = arguments.length;
var i__4731__auto___35250 = (0);
while(true){
if((i__4731__auto___35250 < len__4730__auto___35249)){
args__4736__auto__.push((arguments[i__4731__auto___35250]));

var G__35251 = (i__4731__auto___35250 + (1));
i__4731__auto___35250 = G__35251;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4523__auto__ = (function sablono$core$iter__35116(s__35117){
return (new cljs.core.LazySeq(null,(function (){
var s__35117__$1 = s__35117;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__35117__$1);
if(temp__5735__auto__){
var s__35117__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35117__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__35117__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__35119 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__35118 = (0);
while(true){
if((i__35118 < size__4522__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__35118);
cljs.core.chunk_append(b__35119,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__35257 = (i__35118 + (1));
i__35118 = G__35257;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35119),sablono$core$iter__35116(cljs.core.chunk_rest(s__35117__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35119),null);
}
} else {
var style = cljs.core.first(s__35117__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__35116(cljs.core.rest(s__35117__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
sablono.core.include_css.cljs$lang$applyTo = (function (seq35115){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35115));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__35120 = goog.dom.getDocument().body;
var G__35121 = (function (){var G__35122 = "script";
var G__35123 = ({"src": src});
return goog.dom.createDom(G__35122,G__35123);
})();
return goog.dom.appendChild(G__35120,G__35121);
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js("http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to35124 = (function sablono$core$link_to35124(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35260 = arguments.length;
var i__4731__auto___35261 = (0);
while(true){
if((i__4731__auto___35261 < len__4730__auto___35260)){
args__4736__auto__.push((arguments[i__4731__auto___35261]));

var G__35262 = (i__4731__auto___35261 + (1));
i__4731__auto___35261 = G__35262;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to35124.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

sablono.core.link_to35124.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
});

sablono.core.link_to35124.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.link_to35124.cljs$lang$applyTo = (function (seq35125){
var G__35126 = cljs.core.first(seq35125);
var seq35125__$1 = cljs.core.next(seq35125);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35126,seq35125__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to35124);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to35127 = (function sablono$core$mail_to35127(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35264 = arguments.length;
var i__4731__auto___35265 = (0);
while(true){
if((i__4731__auto___35265 < len__4730__auto___35264)){
args__4736__auto__.push((arguments[i__4731__auto___35265]));

var G__35266 = (i__4731__auto___35265 + (1));
i__4731__auto___35265 = G__35266;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to35127.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

sablono.core.mail_to35127.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__35130){
var vec__35131 = p__35130;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35131,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4131__auto__ = content;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to35127.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.mail_to35127.cljs$lang$applyTo = (function (seq35128){
var G__35129 = cljs.core.first(seq35128);
var seq35128__$1 = cljs.core.next(seq35128);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35129,seq35128__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to35127);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list35134 = (function sablono$core$unordered_list35134(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4523__auto__ = (function sablono$core$unordered_list35134_$_iter__35135(s__35136){
return (new cljs.core.LazySeq(null,(function (){
var s__35136__$1 = s__35136;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__35136__$1);
if(temp__5735__auto__){
var s__35136__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35136__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__35136__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__35138 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__35137 = (0);
while(true){
if((i__35137 < size__4522__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__35137);
cljs.core.chunk_append(b__35138,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__35267 = (i__35137 + (1));
i__35137 = G__35267;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35138),sablono$core$unordered_list35134_$_iter__35135(cljs.core.chunk_rest(s__35136__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35138),null);
}
} else {
var x = cljs.core.first(s__35136__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list35134_$_iter__35135(cljs.core.rest(s__35136__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list35134);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list35139 = (function sablono$core$ordered_list35139(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4523__auto__ = (function sablono$core$ordered_list35139_$_iter__35140(s__35141){
return (new cljs.core.LazySeq(null,(function (){
var s__35141__$1 = s__35141;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__35141__$1);
if(temp__5735__auto__){
var s__35141__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35141__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__35141__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__35143 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__35142 = (0);
while(true){
if((i__35142 < size__4522__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__35142);
cljs.core.chunk_append(b__35143,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__35270 = (i__35142 + (1));
i__35142 = G__35270;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35143),sablono$core$ordered_list35139_$_iter__35140(cljs.core.chunk_rest(s__35141__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35143),null);
}
} else {
var x = cljs.core.first(s__35141__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list35139_$_iter__35140(cljs.core.rest(s__35141__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list35139);
/**
 * Create an image element.
 */
sablono.core.image35144 = (function sablono$core$image35144(var_args){
var G__35146 = arguments.length;
switch (G__35146) {
case 1:
return sablono.core.image35144.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image35144.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.image35144.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
});

sablono.core.image35144.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image35144.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image35144);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__35147_SHARP_,p2__35148_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35147_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__35148_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__35149_SHARP_,p2__35150_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35149_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__35150_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__35152 = arguments.length;
switch (G__35152) {
case 2:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4131__auto__ = value;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3;

/**
 * Creates a color input field.
 */
sablono.core.color_field35153 = (function sablono$core$color_field35153(var_args){
var G__35155 = arguments.length;
switch (G__35155) {
case 1:
return sablono.core.color_field35153.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field35153.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.color_field35153.cljs$core$IFn$_invoke$arity$1 = (function (name__35100__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__35100__auto__);
});

sablono.core.color_field35153.cljs$core$IFn$_invoke$arity$2 = (function (name__35100__auto__,value__35101__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__35100__auto__,value__35101__auto__);
});

sablono.core.color_field35153.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field35153);

/**
 * Creates a date input field.
 */
sablono.core.date_field35156 = (function sablono$core$date_field35156(var_args){
var G__35158 = arguments.length;
switch (G__35158) {
case 1:
return sablono.core.date_field35156.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field35156.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.date_field35156.cljs$core$IFn$_invoke$arity$1 = (function (name__35100__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__35100__auto__);
});

sablono.core.date_field35156.cljs$core$IFn$_invoke$arity$2 = (function (name__35100__auto__,value__35101__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__35100__auto__,value__35101__auto__);
});

sablono.core.date_field35156.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field35156);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field35159 = (function sablono$core$datetime_field35159(var_args){
var G__35161 = arguments.length;
switch (G__35161) {
case 1:
return sablono.core.datetime_field35159.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field35159.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_field35159.cljs$core$IFn$_invoke$arity$1 = (function (name__35100__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__35100__auto__);
});

sablono.core.datetime_field35159.cljs$core$IFn$_invoke$arity$2 = (function (name__35100__auto__,value__35101__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__35100__auto__,value__35101__auto__);
});

sablono.core.datetime_field35159.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field35159);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field35162 = (function sablono$core$datetime_local_field35162(var_args){
var G__35164 = arguments.length;
switch (G__35164) {
case 1:
return sablono.core.datetime_local_field35162.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field35162.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field35162.cljs$core$IFn$_invoke$arity$1 = (function (name__35100__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__35100__auto__);
});

sablono.core.datetime_local_field35162.cljs$core$IFn$_invoke$arity$2 = (function (name__35100__auto__,value__35101__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__35100__auto__,value__35101__auto__);
});

sablono.core.datetime_local_field35162.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field35162);

/**
 * Creates a email input field.
 */
sablono.core.email_field35165 = (function sablono$core$email_field35165(var_args){
var G__35167 = arguments.length;
switch (G__35167) {
case 1:
return sablono.core.email_field35165.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field35165.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.email_field35165.cljs$core$IFn$_invoke$arity$1 = (function (name__35100__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__35100__auto__);
});

sablono.core.email_field35165.cljs$core$IFn$_invoke$arity$2 = (function (name__35100__auto__,value__35101__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__35100__auto__,value__35101__auto__);
});

sablono.core.email_field35165.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field35165);

/**
 * Creates a file input field.
 */
sablono.core.file_field35168 = (function sablono$core$file_field35168(var_args){
var G__35170 = arguments.length;
switch (G__35170) {
case 1:
return sablono.core.file_field35168.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field35168.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.file_field35168.cljs$core$IFn$_invoke$arity$1 = (function (name__35100__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__35100__auto__);
});

sablono.core.file_field35168.cljs$core$IFn$_invoke$arity$2 = (function (name__35100__auto__,value__35101__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__35100__auto__,value__35101__auto__);
});

sablono.core.file_field35168.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field35168);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field35171 = (function sablono$core$hidden_field35171(var_args){
var G__35173 = arguments.length;
switch (G__35173) {
case 1:
return sablono.core.hidden_field35171.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field35171.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.hidden_field35171.cljs$core$IFn$_invoke$arity$1 = (function (name__35100__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__35100__auto__);
});

sablono.core.hidden_field35171.cljs$core$IFn$_invoke$arity$2 = (function (name__35100__auto__,value__35101__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__35100__auto__,value__35101__auto__);
});

sablono.core.hidden_field35171.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field35171);

/**
 * Creates a month input field.
 */
sablono.core.month_field35174 = (function sablono$core$month_field35174(var_args){
var G__35176 = arguments.length;
switch (G__35176) {
case 1:
return sablono.core.month_field35174.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field35174.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.month_field35174.cljs$core$IFn$_invoke$arity$1 = (function (name__35100__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__35100__auto__);
});

sablono.core.month_field35174.cljs$core$IFn$_invoke$arity$2 = (function (name__35100__auto__,value__35101__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__35100__auto__,value__35101__auto__);
});

sablono.core.month_field35174.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field35174);

/**
 * Creates a number input field.
 */
sablono.core.number_field35177 = (function sablono$core$number_field35177(var_args){
var G__35179 = arguments.length;
switch (G__35179) {
case 1:
return sablono.core.number_field35177.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field35177.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.number_field35177.cljs$core$IFn$_invoke$arity$1 = (function (name__35100__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__35100__auto__);
});

sablono.core.number_field35177.cljs$core$IFn$_invoke$arity$2 = (function (name__35100__auto__,value__35101__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__35100__auto__,value__35101__auto__);
});

sablono.core.number_field35177.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field35177);

/**
 * Creates a password input field.
 */
sablono.core.password_field35180 = (function sablono$core$password_field35180(var_args){
var G__35182 = arguments.length;
switch (G__35182) {
case 1:
return sablono.core.password_field35180.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field35180.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.password_field35180.cljs$core$IFn$_invoke$arity$1 = (function (name__35100__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__35100__auto__);
});

sablono.core.password_field35180.cljs$core$IFn$_invoke$arity$2 = (function (name__35100__auto__,value__35101__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__35100__auto__,value__35101__auto__);
});

sablono.core.password_field35180.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field35180);

/**
 * Creates a range input field.
 */
sablono.core.range_field35183 = (function sablono$core$range_field35183(var_args){
var G__35185 = arguments.length;
switch (G__35185) {
case 1:
return sablono.core.range_field35183.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field35183.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.range_field35183.cljs$core$IFn$_invoke$arity$1 = (function (name__35100__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__35100__auto__);
});

sablono.core.range_field35183.cljs$core$IFn$_invoke$arity$2 = (function (name__35100__auto__,value__35101__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__35100__auto__,value__35101__auto__);
});

sablono.core.range_field35183.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field35183);

/**
 * Creates a search input field.
 */
sablono.core.search_field35186 = (function sablono$core$search_field35186(var_args){
var G__35188 = arguments.length;
switch (G__35188) {
case 1:
return sablono.core.search_field35186.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field35186.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.search_field35186.cljs$core$IFn$_invoke$arity$1 = (function (name__35100__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__35100__auto__);
});

sablono.core.search_field35186.cljs$core$IFn$_invoke$arity$2 = (function (name__35100__auto__,value__35101__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__35100__auto__,value__35101__auto__);
});

sablono.core.search_field35186.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field35186);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field35189 = (function sablono$core$tel_field35189(var_args){
var G__35191 = arguments.length;
switch (G__35191) {
case 1:
return sablono.core.tel_field35189.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field35189.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.tel_field35189.cljs$core$IFn$_invoke$arity$1 = (function (name__35100__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__35100__auto__);
});

sablono.core.tel_field35189.cljs$core$IFn$_invoke$arity$2 = (function (name__35100__auto__,value__35101__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__35100__auto__,value__35101__auto__);
});

sablono.core.tel_field35189.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field35189);

/**
 * Creates a text input field.
 */
sablono.core.text_field35192 = (function sablono$core$text_field35192(var_args){
var G__35194 = arguments.length;
switch (G__35194) {
case 1:
return sablono.core.text_field35192.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field35192.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_field35192.cljs$core$IFn$_invoke$arity$1 = (function (name__35100__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__35100__auto__);
});

sablono.core.text_field35192.cljs$core$IFn$_invoke$arity$2 = (function (name__35100__auto__,value__35101__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__35100__auto__,value__35101__auto__);
});

sablono.core.text_field35192.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field35192);

/**
 * Creates a time input field.
 */
sablono.core.time_field35195 = (function sablono$core$time_field35195(var_args){
var G__35197 = arguments.length;
switch (G__35197) {
case 1:
return sablono.core.time_field35195.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field35195.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.time_field35195.cljs$core$IFn$_invoke$arity$1 = (function (name__35100__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__35100__auto__);
});

sablono.core.time_field35195.cljs$core$IFn$_invoke$arity$2 = (function (name__35100__auto__,value__35101__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__35100__auto__,value__35101__auto__);
});

sablono.core.time_field35195.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field35195);

/**
 * Creates a url input field.
 */
sablono.core.url_field35198 = (function sablono$core$url_field35198(var_args){
var G__35200 = arguments.length;
switch (G__35200) {
case 1:
return sablono.core.url_field35198.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field35198.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.url_field35198.cljs$core$IFn$_invoke$arity$1 = (function (name__35100__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__35100__auto__);
});

sablono.core.url_field35198.cljs$core$IFn$_invoke$arity$2 = (function (name__35100__auto__,value__35101__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__35100__auto__,value__35101__auto__);
});

sablono.core.url_field35198.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field35198);

/**
 * Creates a week input field.
 */
sablono.core.week_field35201 = (function sablono$core$week_field35201(var_args){
var G__35203 = arguments.length;
switch (G__35203) {
case 1:
return sablono.core.week_field35201.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field35201.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.week_field35201.cljs$core$IFn$_invoke$arity$1 = (function (name__35100__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__35100__auto__);
});

sablono.core.week_field35201.cljs$core$IFn$_invoke$arity$2 = (function (name__35100__auto__,value__35101__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__35100__auto__,value__35101__auto__);
});

sablono.core.week_field35201.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field35201);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box35204 = (function sablono$core$check_box35204(var_args){
var G__35206 = arguments.length;
switch (G__35206) {
case 1:
return sablono.core.check_box35204.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box35204.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box35204.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.check_box35204.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
});

sablono.core.check_box35204.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box35204.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box35204.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box35204);
/**
 * Creates a radio button.
 */
sablono.core.radio_button35207 = (function sablono$core$radio_button35207(var_args){
var G__35209 = arguments.length;
switch (G__35209) {
case 1:
return sablono.core.radio_button35207.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button35207.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button35207.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.radio_button35207.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
});

sablono.core.radio_button35207.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button35207.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button35207.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button35207);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__35210 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0));
return goog.string.hashCode(G__35210);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options35211 = (function sablono$core$select_options35211(coll){
var iter__4523__auto__ = (function sablono$core$select_options35211_$_iter__35212(s__35213){
return (new cljs.core.LazySeq(null,(function (){
var s__35213__$1 = s__35213;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__35213__$1);
if(temp__5735__auto__){
var s__35213__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35213__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__35213__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__35215 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__35214 = (0);
while(true){
if((i__35214 < size__4522__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__35214);
cljs.core.chunk_append(b__35215,((cljs.core.sequential_QMARK_(x))?(function (){var vec__35216 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35216,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35216,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35216,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options35211.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options35211.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options35211.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__35292 = (i__35214 + (1));
i__35214 = G__35292;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35215),sablono$core$select_options35211_$_iter__35212(cljs.core.chunk_rest(s__35213__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35215),null);
}
} else {
var x = cljs.core.first(s__35213__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__35219 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35219,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35219,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35219,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options35211.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options35211.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options35211.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options35211_$_iter__35212(cljs.core.rest(s__35213__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(coll);
});

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options35211);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down35222 = (function sablono$core$drop_down35222(var_args){
var G__35224 = arguments.length;
switch (G__35224) {
case 2:
return sablono.core.drop_down35222.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down35222.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.drop_down35222.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down35222.cljs$core$IFn$_invoke$arity$3(name,options,null);
});

sablono.core.drop_down35222.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});

sablono.core.drop_down35222.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down35222);
/**
 * Creates a text area element.
 */
sablono.core.text_area35225 = (function sablono$core$text_area35225(var_args){
var G__35227 = arguments.length;
switch (G__35227) {
case 1:
return sablono.core.text_area35225.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area35225.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_area35225.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
});

sablono.core.text_area35225.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4131__auto__ = value;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area35225.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area35225);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label35228 = (function sablono$core$label35228(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label35228);
/**
 * Creates a submit button.
 */
sablono.core.submit_button35229 = (function sablono$core$submit_button35229(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button35229);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button35230 = (function sablono$core$reset_button35230(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button35230);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to35231 = (function sablono$core$form_to35231(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35295 = arguments.length;
var i__4731__auto___35296 = (0);
while(true){
if((i__4731__auto___35296 < len__4730__auto___35295)){
args__4736__auto__.push((arguments[i__4731__auto___35296]));

var G__35297 = (i__4731__auto___35296 + (1));
i__4731__auto___35296 = G__35297;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to35231.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

sablono.core.form_to35231.cljs$core$IFn$_invoke$arity$variadic = (function (p__35234,body){
var vec__35235 = p__35234;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35235,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35235,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),(function (){var G__35238 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null);
var G__35239 = "_method";
var G__35240 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__35238,G__35239,G__35240) : sablono.core.hidden_field.call(null,G__35238,G__35239,G__35240));
})()], null)),body));
});

sablono.core.form_to35231.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.form_to35231.cljs$lang$applyTo = (function (seq35232){
var G__35233 = cljs.core.first(seq35232);
var seq35232__$1 = cljs.core.next(seq35232);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35233,seq35232__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to35231);

//# sourceMappingURL=sablono.core.js.map
