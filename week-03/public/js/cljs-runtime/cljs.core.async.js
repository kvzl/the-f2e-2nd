goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__33589 = arguments.length;
switch (G__33589) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33590 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33590 = (function (f,blockable,meta33591){
this.f = f;
this.blockable = blockable;
this.meta33591 = meta33591;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33590.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33592,meta33591__$1){
var self__ = this;
var _33592__$1 = this;
return (new cljs.core.async.t_cljs$core$async33590(self__.f,self__.blockable,meta33591__$1));
});

cljs.core.async.t_cljs$core$async33590.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33592){
var self__ = this;
var _33592__$1 = this;
return self__.meta33591;
});

cljs.core.async.t_cljs$core$async33590.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33590.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33590.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async33590.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async33590.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33591","meta33591",696988442,null)], null);
});

cljs.core.async.t_cljs$core$async33590.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33590.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33590";

cljs.core.async.t_cljs$core$async33590.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async33590");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33590.
 */
cljs.core.async.__GT_t_cljs$core$async33590 = (function cljs$core$async$__GT_t_cljs$core$async33590(f__$1,blockable__$1,meta33591){
return (new cljs.core.async.t_cljs$core$async33590(f__$1,blockable__$1,meta33591));
});

}

return (new cljs.core.async.t_cljs$core$async33590(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__33595 = arguments.length;
switch (G__33595) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__33597 = arguments.length;
switch (G__33597) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__33599 = arguments.length;
switch (G__33599) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_35039 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35039) : fn1.call(null,val_35039));
} else {
cljs.core.async.impl.dispatch.run(((function (val_35039,ret){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35039) : fn1.call(null,val_35039));
});})(val_35039,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__33601 = arguments.length;
switch (G__33601) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__5733__auto__){
return (function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
});})(ret,retb,temp__5733__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___35057 = n;
var x_35058 = (0);
while(true){
if((x_35058 < n__4607__auto___35057)){
(a[x_35058] = x_35058);

var G__35059 = (x_35058 + (1));
x_35058 = G__35059;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33602 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33602 = (function (flag,meta33603){
this.flag = flag;
this.meta33603 = meta33603;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33602.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_33604,meta33603__$1){
var self__ = this;
var _33604__$1 = this;
return (new cljs.core.async.t_cljs$core$async33602(self__.flag,meta33603__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async33602.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_33604){
var self__ = this;
var _33604__$1 = this;
return self__.meta33603;
});})(flag))
;

cljs.core.async.t_cljs$core$async33602.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33602.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async33602.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33602.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33602.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33603","meta33603",-2033330971,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async33602.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33602.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33602";

cljs.core.async.t_cljs$core$async33602.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async33602");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33602.
 */
cljs.core.async.__GT_t_cljs$core$async33602 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33602(flag__$1,meta33603){
return (new cljs.core.async.t_cljs$core$async33602(flag__$1,meta33603));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async33602(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33605 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33605 = (function (flag,cb,meta33606){
this.flag = flag;
this.cb = cb;
this.meta33606 = meta33606;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33605.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33607,meta33606__$1){
var self__ = this;
var _33607__$1 = this;
return (new cljs.core.async.t_cljs$core$async33605(self__.flag,self__.cb,meta33606__$1));
});

cljs.core.async.t_cljs$core$async33605.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33607){
var self__ = this;
var _33607__$1 = this;
return self__.meta33606;
});

cljs.core.async.t_cljs$core$async33605.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33605.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t_cljs$core$async33605.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33605.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async33605.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33606","meta33606",789845241,null)], null);
});

cljs.core.async.t_cljs$core$async33605.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33605.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33605";

cljs.core.async.t_cljs$core$async33605.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async33605");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33605.
 */
cljs.core.async.__GT_t_cljs$core$async33605 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33605(flag__$1,cb__$1,meta33606){
return (new cljs.core.async.t_cljs$core$async33605(flag__$1,cb__$1,meta33606));
});

}

return (new cljs.core.async.t_cljs$core$async33605(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33608_SHARP_){
var G__33610 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33608_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33610) : fret.call(null,G__33610));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33609_SHARP_){
var G__33611 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33609_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33611) : fret.call(null,G__33611));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__35084 = (i + (1));
i = G__35084;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4120__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4120__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35086 = arguments.length;
var i__4731__auto___35087 = (0);
while(true){
if((i__4731__auto___35087 < len__4730__auto___35086)){
args__4736__auto__.push((arguments[i__4731__auto___35087]));

var G__35088 = (i__4731__auto___35087 + (1));
i__4731__auto___35087 = G__35088;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33614){
var map__33615 = p__33614;
var map__33615__$1 = (((((!((map__33615 == null))))?(((((map__33615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33615.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33615):map__33615);
var opts = map__33615__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33612){
var G__33613 = cljs.core.first(seq33612);
var seq33612__$1 = cljs.core.next(seq33612);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33613,seq33612__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__33618 = arguments.length;
switch (G__33618) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__33515__auto___35100 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33515__auto___35100){
return (function (){
var f__33516__auto__ = (function (){var switch__33352__auto__ = ((function (c__33515__auto___35100){
return (function (state_33642){
var state_val_33643 = (state_33642[(1)]);
if((state_val_33643 === (7))){
var inst_33638 = (state_33642[(2)]);
var state_33642__$1 = state_33642;
var statearr_33644_35103 = state_33642__$1;
(statearr_33644_35103[(2)] = inst_33638);

(statearr_33644_35103[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33643 === (1))){
var state_33642__$1 = state_33642;
var statearr_33645_35104 = state_33642__$1;
(statearr_33645_35104[(2)] = null);

(statearr_33645_35104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33643 === (4))){
var inst_33621 = (state_33642[(7)]);
var inst_33621__$1 = (state_33642[(2)]);
var inst_33622 = (inst_33621__$1 == null);
var state_33642__$1 = (function (){var statearr_33646 = state_33642;
(statearr_33646[(7)] = inst_33621__$1);

return statearr_33646;
})();
if(cljs.core.truth_(inst_33622)){
var statearr_33647_35105 = state_33642__$1;
(statearr_33647_35105[(1)] = (5));

} else {
var statearr_33648_35106 = state_33642__$1;
(statearr_33648_35106[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33643 === (13))){
var state_33642__$1 = state_33642;
var statearr_33649_35107 = state_33642__$1;
(statearr_33649_35107[(2)] = null);

(statearr_33649_35107[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33643 === (6))){
var inst_33621 = (state_33642[(7)]);
var state_33642__$1 = state_33642;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33642__$1,(11),to,inst_33621);
} else {
if((state_val_33643 === (3))){
var inst_33640 = (state_33642[(2)]);
var state_33642__$1 = state_33642;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33642__$1,inst_33640);
} else {
if((state_val_33643 === (12))){
var state_33642__$1 = state_33642;
var statearr_33650_35112 = state_33642__$1;
(statearr_33650_35112[(2)] = null);

(statearr_33650_35112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33643 === (2))){
var state_33642__$1 = state_33642;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33642__$1,(4),from);
} else {
if((state_val_33643 === (11))){
var inst_33631 = (state_33642[(2)]);
var state_33642__$1 = state_33642;
if(cljs.core.truth_(inst_33631)){
var statearr_33651_35113 = state_33642__$1;
(statearr_33651_35113[(1)] = (12));

} else {
var statearr_33652_35114 = state_33642__$1;
(statearr_33652_35114[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33643 === (9))){
var state_33642__$1 = state_33642;
var statearr_33653_35115 = state_33642__$1;
(statearr_33653_35115[(2)] = null);

(statearr_33653_35115[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33643 === (5))){
var state_33642__$1 = state_33642;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33654_35116 = state_33642__$1;
(statearr_33654_35116[(1)] = (8));

} else {
var statearr_33655_35117 = state_33642__$1;
(statearr_33655_35117[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33643 === (14))){
var inst_33636 = (state_33642[(2)]);
var state_33642__$1 = state_33642;
var statearr_33656_35118 = state_33642__$1;
(statearr_33656_35118[(2)] = inst_33636);

(statearr_33656_35118[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33643 === (10))){
var inst_33628 = (state_33642[(2)]);
var state_33642__$1 = state_33642;
var statearr_33657_35121 = state_33642__$1;
(statearr_33657_35121[(2)] = inst_33628);

(statearr_33657_35121[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33643 === (8))){
var inst_33625 = cljs.core.async.close_BANG_(to);
var state_33642__$1 = state_33642;
var statearr_33658_35123 = state_33642__$1;
(statearr_33658_35123[(2)] = inst_33625);

(statearr_33658_35123[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33515__auto___35100))
;
return ((function (switch__33352__auto__,c__33515__auto___35100){
return (function() {
var cljs$core$async$state_machine__33353__auto__ = null;
var cljs$core$async$state_machine__33353__auto____0 = (function (){
var statearr_33659 = [null,null,null,null,null,null,null,null];
(statearr_33659[(0)] = cljs$core$async$state_machine__33353__auto__);

(statearr_33659[(1)] = (1));

return statearr_33659;
});
var cljs$core$async$state_machine__33353__auto____1 = (function (state_33642){
while(true){
var ret_value__33354__auto__ = (function (){try{while(true){
var result__33355__auto__ = switch__33352__auto__(state_33642);
if(cljs.core.keyword_identical_QMARK_(result__33355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33355__auto__;
}
break;
}
}catch (e33660){if((e33660 instanceof Object)){
var ex__33356__auto__ = e33660;
var statearr_33661_35135 = state_33642;
(statearr_33661_35135[(5)] = ex__33356__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33642);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33660;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35138 = state_33642;
state_33642 = G__35138;
continue;
} else {
return ret_value__33354__auto__;
}
break;
}
});
cljs$core$async$state_machine__33353__auto__ = function(state_33642){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33353__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33353__auto____1.call(this,state_33642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33353__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33353__auto____0;
cljs$core$async$state_machine__33353__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33353__auto____1;
return cljs$core$async$state_machine__33353__auto__;
})()
;})(switch__33352__auto__,c__33515__auto___35100))
})();
var state__33517__auto__ = (function (){var statearr_33662 = (f__33516__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33516__auto__.cljs$core$IFn$_invoke$arity$0() : f__33516__auto__.call(null));
(statearr_33662[(6)] = c__33515__auto___35100);

return statearr_33662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33517__auto__);
});})(c__33515__auto___35100))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__33663){
var vec__33664 = p__33663;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33664,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33664,(1),null);
var job = vec__33664;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__33515__auto___35141 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33515__auto___35141,res,vec__33664,v,p,job,jobs,results){
return (function (){
var f__33516__auto__ = (function (){var switch__33352__auto__ = ((function (c__33515__auto___35141,res,vec__33664,v,p,job,jobs,results){
return (function (state_33671){
var state_val_33672 = (state_33671[(1)]);
if((state_val_33672 === (1))){
var state_33671__$1 = state_33671;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33671__$1,(2),res,v);
} else {
if((state_val_33672 === (2))){
var inst_33668 = (state_33671[(2)]);
var inst_33669 = cljs.core.async.close_BANG_(res);
var state_33671__$1 = (function (){var statearr_33673 = state_33671;
(statearr_33673[(7)] = inst_33668);

return statearr_33673;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33671__$1,inst_33669);
} else {
return null;
}
}
});})(c__33515__auto___35141,res,vec__33664,v,p,job,jobs,results))
;
return ((function (switch__33352__auto__,c__33515__auto___35141,res,vec__33664,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33353__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33353__auto____0 = (function (){
var statearr_33674 = [null,null,null,null,null,null,null,null];
(statearr_33674[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33353__auto__);

(statearr_33674[(1)] = (1));

return statearr_33674;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33353__auto____1 = (function (state_33671){
while(true){
var ret_value__33354__auto__ = (function (){try{while(true){
var result__33355__auto__ = switch__33352__auto__(state_33671);
if(cljs.core.keyword_identical_QMARK_(result__33355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33355__auto__;
}
break;
}
}catch (e33675){if((e33675 instanceof Object)){
var ex__33356__auto__ = e33675;
var statearr_33676_35142 = state_33671;
(statearr_33676_35142[(5)] = ex__33356__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33671);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33675;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35143 = state_33671;
state_33671 = G__35143;
continue;
} else {
return ret_value__33354__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33353__auto__ = function(state_33671){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33353__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33353__auto____1.call(this,state_33671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33353__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33353__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33353__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33353__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33353__auto__;
})()
;})(switch__33352__auto__,c__33515__auto___35141,res,vec__33664,v,p,job,jobs,results))
})();
var state__33517__auto__ = (function (){var statearr_33677 = (f__33516__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33516__auto__.cljs$core$IFn$_invoke$arity$0() : f__33516__auto__.call(null));
(statearr_33677[(6)] = c__33515__auto___35141);

return statearr_33677;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33517__auto__);
});})(c__33515__auto___35141,res,vec__33664,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__33678){
var vec__33679 = p__33678;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33679,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33679,(1),null);
var job = vec__33679;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___35150 = n;
var __35151 = (0);
while(true){
if((__35151 < n__4607__auto___35150)){
var G__33682_35152 = type;
var G__33682_35153__$1 = (((G__33682_35152 instanceof cljs.core.Keyword))?G__33682_35152.fqn:null);
switch (G__33682_35153__$1) {
case "compute":
var c__33515__auto___35156 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35151,c__33515__auto___35156,G__33682_35152,G__33682_35153__$1,n__4607__auto___35150,jobs,results,process,async){
return (function (){
var f__33516__auto__ = (function (){var switch__33352__auto__ = ((function (__35151,c__33515__auto___35156,G__33682_35152,G__33682_35153__$1,n__4607__auto___35150,jobs,results,process,async){
return (function (state_33695){
var state_val_33696 = (state_33695[(1)]);
if((state_val_33696 === (1))){
var state_33695__$1 = state_33695;
var statearr_33697_35158 = state_33695__$1;
(statearr_33697_35158[(2)] = null);

(statearr_33697_35158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33696 === (2))){
var state_33695__$1 = state_33695;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33695__$1,(4),jobs);
} else {
if((state_val_33696 === (3))){
var inst_33693 = (state_33695[(2)]);
var state_33695__$1 = state_33695;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33695__$1,inst_33693);
} else {
if((state_val_33696 === (4))){
var inst_33685 = (state_33695[(2)]);
var inst_33686 = process(inst_33685);
var state_33695__$1 = state_33695;
if(cljs.core.truth_(inst_33686)){
var statearr_33698_35160 = state_33695__$1;
(statearr_33698_35160[(1)] = (5));

} else {
var statearr_33699_35161 = state_33695__$1;
(statearr_33699_35161[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33696 === (5))){
var state_33695__$1 = state_33695;
var statearr_33700_35162 = state_33695__$1;
(statearr_33700_35162[(2)] = null);

(statearr_33700_35162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33696 === (6))){
var state_33695__$1 = state_33695;
var statearr_33701_35163 = state_33695__$1;
(statearr_33701_35163[(2)] = null);

(statearr_33701_35163[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33696 === (7))){
var inst_33691 = (state_33695[(2)]);
var state_33695__$1 = state_33695;
var statearr_33702_35164 = state_33695__$1;
(statearr_33702_35164[(2)] = inst_33691);

(statearr_33702_35164[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__35151,c__33515__auto___35156,G__33682_35152,G__33682_35153__$1,n__4607__auto___35150,jobs,results,process,async))
;
return ((function (__35151,switch__33352__auto__,c__33515__auto___35156,G__33682_35152,G__33682_35153__$1,n__4607__auto___35150,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33353__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33353__auto____0 = (function (){
var statearr_33703 = [null,null,null,null,null,null,null];
(statearr_33703[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33353__auto__);

(statearr_33703[(1)] = (1));

return statearr_33703;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33353__auto____1 = (function (state_33695){
while(true){
var ret_value__33354__auto__ = (function (){try{while(true){
var result__33355__auto__ = switch__33352__auto__(state_33695);
if(cljs.core.keyword_identical_QMARK_(result__33355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33355__auto__;
}
break;
}
}catch (e33704){if((e33704 instanceof Object)){
var ex__33356__auto__ = e33704;
var statearr_33705_35165 = state_33695;
(statearr_33705_35165[(5)] = ex__33356__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33695);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33704;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35169 = state_33695;
state_33695 = G__35169;
continue;
} else {
return ret_value__33354__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33353__auto__ = function(state_33695){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33353__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33353__auto____1.call(this,state_33695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33353__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33353__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33353__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33353__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33353__auto__;
})()
;})(__35151,switch__33352__auto__,c__33515__auto___35156,G__33682_35152,G__33682_35153__$1,n__4607__auto___35150,jobs,results,process,async))
})();
var state__33517__auto__ = (function (){var statearr_33706 = (f__33516__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33516__auto__.cljs$core$IFn$_invoke$arity$0() : f__33516__auto__.call(null));
(statearr_33706[(6)] = c__33515__auto___35156);

return statearr_33706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33517__auto__);
});})(__35151,c__33515__auto___35156,G__33682_35152,G__33682_35153__$1,n__4607__auto___35150,jobs,results,process,async))
);


break;
case "async":
var c__33515__auto___35170 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35151,c__33515__auto___35170,G__33682_35152,G__33682_35153__$1,n__4607__auto___35150,jobs,results,process,async){
return (function (){
var f__33516__auto__ = (function (){var switch__33352__auto__ = ((function (__35151,c__33515__auto___35170,G__33682_35152,G__33682_35153__$1,n__4607__auto___35150,jobs,results,process,async){
return (function (state_33719){
var state_val_33720 = (state_33719[(1)]);
if((state_val_33720 === (1))){
var state_33719__$1 = state_33719;
var statearr_33721_35173 = state_33719__$1;
(statearr_33721_35173[(2)] = null);

(statearr_33721_35173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33720 === (2))){
var state_33719__$1 = state_33719;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33719__$1,(4),jobs);
} else {
if((state_val_33720 === (3))){
var inst_33717 = (state_33719[(2)]);
var state_33719__$1 = state_33719;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33719__$1,inst_33717);
} else {
if((state_val_33720 === (4))){
var inst_33709 = (state_33719[(2)]);
var inst_33710 = async(inst_33709);
var state_33719__$1 = state_33719;
if(cljs.core.truth_(inst_33710)){
var statearr_33722_35174 = state_33719__$1;
(statearr_33722_35174[(1)] = (5));

} else {
var statearr_33723_35176 = state_33719__$1;
(statearr_33723_35176[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33720 === (5))){
var state_33719__$1 = state_33719;
var statearr_33724_35179 = state_33719__$1;
(statearr_33724_35179[(2)] = null);

(statearr_33724_35179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33720 === (6))){
var state_33719__$1 = state_33719;
var statearr_33725_35181 = state_33719__$1;
(statearr_33725_35181[(2)] = null);

(statearr_33725_35181[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33720 === (7))){
var inst_33715 = (state_33719[(2)]);
var state_33719__$1 = state_33719;
var statearr_33726_35183 = state_33719__$1;
(statearr_33726_35183[(2)] = inst_33715);

(statearr_33726_35183[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__35151,c__33515__auto___35170,G__33682_35152,G__33682_35153__$1,n__4607__auto___35150,jobs,results,process,async))
;
return ((function (__35151,switch__33352__auto__,c__33515__auto___35170,G__33682_35152,G__33682_35153__$1,n__4607__auto___35150,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33353__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33353__auto____0 = (function (){
var statearr_33727 = [null,null,null,null,null,null,null];
(statearr_33727[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33353__auto__);

(statearr_33727[(1)] = (1));

return statearr_33727;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33353__auto____1 = (function (state_33719){
while(true){
var ret_value__33354__auto__ = (function (){try{while(true){
var result__33355__auto__ = switch__33352__auto__(state_33719);
if(cljs.core.keyword_identical_QMARK_(result__33355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33355__auto__;
}
break;
}
}catch (e33728){if((e33728 instanceof Object)){
var ex__33356__auto__ = e33728;
var statearr_33729_35186 = state_33719;
(statearr_33729_35186[(5)] = ex__33356__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33719);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33728;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35187 = state_33719;
state_33719 = G__35187;
continue;
} else {
return ret_value__33354__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33353__auto__ = function(state_33719){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33353__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33353__auto____1.call(this,state_33719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33353__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33353__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33353__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33353__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33353__auto__;
})()
;})(__35151,switch__33352__auto__,c__33515__auto___35170,G__33682_35152,G__33682_35153__$1,n__4607__auto___35150,jobs,results,process,async))
})();
var state__33517__auto__ = (function (){var statearr_33730 = (f__33516__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33516__auto__.cljs$core$IFn$_invoke$arity$0() : f__33516__auto__.call(null));
(statearr_33730[(6)] = c__33515__auto___35170);

return statearr_33730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33517__auto__);
});})(__35151,c__33515__auto___35170,G__33682_35152,G__33682_35153__$1,n__4607__auto___35150,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33682_35153__$1)].join('')));

}

var G__35188 = (__35151 + (1));
__35151 = G__35188;
continue;
} else {
}
break;
}

var c__33515__auto___35189 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33515__auto___35189,jobs,results,process,async){
return (function (){
var f__33516__auto__ = (function (){var switch__33352__auto__ = ((function (c__33515__auto___35189,jobs,results,process,async){
return (function (state_33752){
var state_val_33753 = (state_33752[(1)]);
if((state_val_33753 === (7))){
var inst_33748 = (state_33752[(2)]);
var state_33752__$1 = state_33752;
var statearr_33754_35191 = state_33752__$1;
(statearr_33754_35191[(2)] = inst_33748);

(statearr_33754_35191[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33753 === (1))){
var state_33752__$1 = state_33752;
var statearr_33755_35193 = state_33752__$1;
(statearr_33755_35193[(2)] = null);

(statearr_33755_35193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33753 === (4))){
var inst_33733 = (state_33752[(7)]);
var inst_33733__$1 = (state_33752[(2)]);
var inst_33734 = (inst_33733__$1 == null);
var state_33752__$1 = (function (){var statearr_33756 = state_33752;
(statearr_33756[(7)] = inst_33733__$1);

return statearr_33756;
})();
if(cljs.core.truth_(inst_33734)){
var statearr_33757_35194 = state_33752__$1;
(statearr_33757_35194[(1)] = (5));

} else {
var statearr_33758_35195 = state_33752__$1;
(statearr_33758_35195[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33753 === (6))){
var inst_33738 = (state_33752[(8)]);
var inst_33733 = (state_33752[(7)]);
var inst_33738__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_33739 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33740 = [inst_33733,inst_33738__$1];
var inst_33741 = (new cljs.core.PersistentVector(null,2,(5),inst_33739,inst_33740,null));
var state_33752__$1 = (function (){var statearr_33759 = state_33752;
(statearr_33759[(8)] = inst_33738__$1);

return statearr_33759;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33752__$1,(8),jobs,inst_33741);
} else {
if((state_val_33753 === (3))){
var inst_33750 = (state_33752[(2)]);
var state_33752__$1 = state_33752;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33752__$1,inst_33750);
} else {
if((state_val_33753 === (2))){
var state_33752__$1 = state_33752;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33752__$1,(4),from);
} else {
if((state_val_33753 === (9))){
var inst_33745 = (state_33752[(2)]);
var state_33752__$1 = (function (){var statearr_33760 = state_33752;
(statearr_33760[(9)] = inst_33745);

return statearr_33760;
})();
var statearr_33761_35197 = state_33752__$1;
(statearr_33761_35197[(2)] = null);

(statearr_33761_35197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33753 === (5))){
var inst_33736 = cljs.core.async.close_BANG_(jobs);
var state_33752__$1 = state_33752;
var statearr_33762_35199 = state_33752__$1;
(statearr_33762_35199[(2)] = inst_33736);

(statearr_33762_35199[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33753 === (8))){
var inst_33738 = (state_33752[(8)]);
var inst_33743 = (state_33752[(2)]);
var state_33752__$1 = (function (){var statearr_33763 = state_33752;
(statearr_33763[(10)] = inst_33743);

return statearr_33763;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33752__$1,(9),results,inst_33738);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__33515__auto___35189,jobs,results,process,async))
;
return ((function (switch__33352__auto__,c__33515__auto___35189,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33353__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33353__auto____0 = (function (){
var statearr_33764 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33764[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33353__auto__);

(statearr_33764[(1)] = (1));

return statearr_33764;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33353__auto____1 = (function (state_33752){
while(true){
var ret_value__33354__auto__ = (function (){try{while(true){
var result__33355__auto__ = switch__33352__auto__(state_33752);
if(cljs.core.keyword_identical_QMARK_(result__33355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33355__auto__;
}
break;
}
}catch (e33765){if((e33765 instanceof Object)){
var ex__33356__auto__ = e33765;
var statearr_33766_35200 = state_33752;
(statearr_33766_35200[(5)] = ex__33356__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33752);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33765;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35201 = state_33752;
state_33752 = G__35201;
continue;
} else {
return ret_value__33354__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33353__auto__ = function(state_33752){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33353__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33353__auto____1.call(this,state_33752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33353__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33353__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33353__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33353__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33353__auto__;
})()
;})(switch__33352__auto__,c__33515__auto___35189,jobs,results,process,async))
})();
var state__33517__auto__ = (function (){var statearr_33767 = (f__33516__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33516__auto__.cljs$core$IFn$_invoke$arity$0() : f__33516__auto__.call(null));
(statearr_33767[(6)] = c__33515__auto___35189);

return statearr_33767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33517__auto__);
});})(c__33515__auto___35189,jobs,results,process,async))
);


var c__33515__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33515__auto__,jobs,results,process,async){
return (function (){
var f__33516__auto__ = (function (){var switch__33352__auto__ = ((function (c__33515__auto__,jobs,results,process,async){
return (function (state_33805){
var state_val_33806 = (state_33805[(1)]);
if((state_val_33806 === (7))){
var inst_33801 = (state_33805[(2)]);
var state_33805__$1 = state_33805;
var statearr_33807_35204 = state_33805__$1;
(statearr_33807_35204[(2)] = inst_33801);

(statearr_33807_35204[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33806 === (20))){
var state_33805__$1 = state_33805;
var statearr_33808_35205 = state_33805__$1;
(statearr_33808_35205[(2)] = null);

(statearr_33808_35205[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33806 === (1))){
var state_33805__$1 = state_33805;
var statearr_33809_35206 = state_33805__$1;
(statearr_33809_35206[(2)] = null);

(statearr_33809_35206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33806 === (4))){
var inst_33770 = (state_33805[(7)]);
var inst_33770__$1 = (state_33805[(2)]);
var inst_33771 = (inst_33770__$1 == null);
var state_33805__$1 = (function (){var statearr_33810 = state_33805;
(statearr_33810[(7)] = inst_33770__$1);

return statearr_33810;
})();
if(cljs.core.truth_(inst_33771)){
var statearr_33811_35209 = state_33805__$1;
(statearr_33811_35209[(1)] = (5));

} else {
var statearr_33812_35210 = state_33805__$1;
(statearr_33812_35210[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33806 === (15))){
var inst_33783 = (state_33805[(8)]);
var state_33805__$1 = state_33805;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33805__$1,(18),to,inst_33783);
} else {
if((state_val_33806 === (21))){
var inst_33796 = (state_33805[(2)]);
var state_33805__$1 = state_33805;
var statearr_33813_35215 = state_33805__$1;
(statearr_33813_35215[(2)] = inst_33796);

(statearr_33813_35215[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33806 === (13))){
var inst_33798 = (state_33805[(2)]);
var state_33805__$1 = (function (){var statearr_33814 = state_33805;
(statearr_33814[(9)] = inst_33798);

return statearr_33814;
})();
var statearr_33815_35216 = state_33805__$1;
(statearr_33815_35216[(2)] = null);

(statearr_33815_35216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33806 === (6))){
var inst_33770 = (state_33805[(7)]);
var state_33805__$1 = state_33805;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33805__$1,(11),inst_33770);
} else {
if((state_val_33806 === (17))){
var inst_33791 = (state_33805[(2)]);
var state_33805__$1 = state_33805;
if(cljs.core.truth_(inst_33791)){
var statearr_33816_35219 = state_33805__$1;
(statearr_33816_35219[(1)] = (19));

} else {
var statearr_33817_35220 = state_33805__$1;
(statearr_33817_35220[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33806 === (3))){
var inst_33803 = (state_33805[(2)]);
var state_33805__$1 = state_33805;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33805__$1,inst_33803);
} else {
if((state_val_33806 === (12))){
var inst_33780 = (state_33805[(10)]);
var state_33805__$1 = state_33805;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33805__$1,(14),inst_33780);
} else {
if((state_val_33806 === (2))){
var state_33805__$1 = state_33805;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33805__$1,(4),results);
} else {
if((state_val_33806 === (19))){
var state_33805__$1 = state_33805;
var statearr_33818_35223 = state_33805__$1;
(statearr_33818_35223[(2)] = null);

(statearr_33818_35223[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33806 === (11))){
var inst_33780 = (state_33805[(2)]);
var state_33805__$1 = (function (){var statearr_33819 = state_33805;
(statearr_33819[(10)] = inst_33780);

return statearr_33819;
})();
var statearr_33820_35224 = state_33805__$1;
(statearr_33820_35224[(2)] = null);

(statearr_33820_35224[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33806 === (9))){
var state_33805__$1 = state_33805;
var statearr_33821_35227 = state_33805__$1;
(statearr_33821_35227[(2)] = null);

(statearr_33821_35227[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33806 === (5))){
var state_33805__$1 = state_33805;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33822_35228 = state_33805__$1;
(statearr_33822_35228[(1)] = (8));

} else {
var statearr_33823_35229 = state_33805__$1;
(statearr_33823_35229[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33806 === (14))){
var inst_33783 = (state_33805[(8)]);
var inst_33785 = (state_33805[(11)]);
var inst_33783__$1 = (state_33805[(2)]);
var inst_33784 = (inst_33783__$1 == null);
var inst_33785__$1 = cljs.core.not(inst_33784);
var state_33805__$1 = (function (){var statearr_33824 = state_33805;
(statearr_33824[(8)] = inst_33783__$1);

(statearr_33824[(11)] = inst_33785__$1);

return statearr_33824;
})();
if(inst_33785__$1){
var statearr_33825_35230 = state_33805__$1;
(statearr_33825_35230[(1)] = (15));

} else {
var statearr_33826_35231 = state_33805__$1;
(statearr_33826_35231[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33806 === (16))){
var inst_33785 = (state_33805[(11)]);
var state_33805__$1 = state_33805;
var statearr_33827_35234 = state_33805__$1;
(statearr_33827_35234[(2)] = inst_33785);

(statearr_33827_35234[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33806 === (10))){
var inst_33777 = (state_33805[(2)]);
var state_33805__$1 = state_33805;
var statearr_33828_35238 = state_33805__$1;
(statearr_33828_35238[(2)] = inst_33777);

(statearr_33828_35238[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33806 === (18))){
var inst_33788 = (state_33805[(2)]);
var state_33805__$1 = state_33805;
var statearr_33829_35242 = state_33805__$1;
(statearr_33829_35242[(2)] = inst_33788);

(statearr_33829_35242[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33806 === (8))){
var inst_33774 = cljs.core.async.close_BANG_(to);
var state_33805__$1 = state_33805;
var statearr_33830_35243 = state_33805__$1;
(statearr_33830_35243[(2)] = inst_33774);

(statearr_33830_35243[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33515__auto__,jobs,results,process,async))
;
return ((function (switch__33352__auto__,c__33515__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33353__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33353__auto____0 = (function (){
var statearr_33831 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33831[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33353__auto__);

(statearr_33831[(1)] = (1));

return statearr_33831;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33353__auto____1 = (function (state_33805){
while(true){
var ret_value__33354__auto__ = (function (){try{while(true){
var result__33355__auto__ = switch__33352__auto__(state_33805);
if(cljs.core.keyword_identical_QMARK_(result__33355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33355__auto__;
}
break;
}
}catch (e33832){if((e33832 instanceof Object)){
var ex__33356__auto__ = e33832;
var statearr_33833_35247 = state_33805;
(statearr_33833_35247[(5)] = ex__33356__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33805);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33832;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35248 = state_33805;
state_33805 = G__35248;
continue;
} else {
return ret_value__33354__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33353__auto__ = function(state_33805){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33353__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33353__auto____1.call(this,state_33805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33353__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33353__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33353__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33353__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33353__auto__;
})()
;})(switch__33352__auto__,c__33515__auto__,jobs,results,process,async))
})();
var state__33517__auto__ = (function (){var statearr_33834 = (f__33516__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33516__auto__.cljs$core$IFn$_invoke$arity$0() : f__33516__auto__.call(null));
(statearr_33834[(6)] = c__33515__auto__);

return statearr_33834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33517__auto__);
});})(c__33515__auto__,jobs,results,process,async))
);

return c__33515__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__33836 = arguments.length;
switch (G__33836) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__33838 = arguments.length;
switch (G__33838) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__33840 = arguments.length;
switch (G__33840) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__33515__auto___35275 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33515__auto___35275,tc,fc){
return (function (){
var f__33516__auto__ = (function (){var switch__33352__auto__ = ((function (c__33515__auto___35275,tc,fc){
return (function (state_33866){
var state_val_33867 = (state_33866[(1)]);
if((state_val_33867 === (7))){
var inst_33862 = (state_33866[(2)]);
var state_33866__$1 = state_33866;
var statearr_33868_35277 = state_33866__$1;
(statearr_33868_35277[(2)] = inst_33862);

(statearr_33868_35277[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33867 === (1))){
var state_33866__$1 = state_33866;
var statearr_33869_35282 = state_33866__$1;
(statearr_33869_35282[(2)] = null);

(statearr_33869_35282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33867 === (4))){
var inst_33843 = (state_33866[(7)]);
var inst_33843__$1 = (state_33866[(2)]);
var inst_33844 = (inst_33843__$1 == null);
var state_33866__$1 = (function (){var statearr_33870 = state_33866;
(statearr_33870[(7)] = inst_33843__$1);

return statearr_33870;
})();
if(cljs.core.truth_(inst_33844)){
var statearr_33871_35287 = state_33866__$1;
(statearr_33871_35287[(1)] = (5));

} else {
var statearr_33872_35288 = state_33866__$1;
(statearr_33872_35288[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33867 === (13))){
var state_33866__$1 = state_33866;
var statearr_33873_35289 = state_33866__$1;
(statearr_33873_35289[(2)] = null);

(statearr_33873_35289[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33867 === (6))){
var inst_33843 = (state_33866[(7)]);
var inst_33849 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33843) : p.call(null,inst_33843));
var state_33866__$1 = state_33866;
if(cljs.core.truth_(inst_33849)){
var statearr_33874_35295 = state_33866__$1;
(statearr_33874_35295[(1)] = (9));

} else {
var statearr_33875_35298 = state_33866__$1;
(statearr_33875_35298[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33867 === (3))){
var inst_33864 = (state_33866[(2)]);
var state_33866__$1 = state_33866;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33866__$1,inst_33864);
} else {
if((state_val_33867 === (12))){
var state_33866__$1 = state_33866;
var statearr_33876_35302 = state_33866__$1;
(statearr_33876_35302[(2)] = null);

(statearr_33876_35302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33867 === (2))){
var state_33866__$1 = state_33866;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33866__$1,(4),ch);
} else {
if((state_val_33867 === (11))){
var inst_33843 = (state_33866[(7)]);
var inst_33853 = (state_33866[(2)]);
var state_33866__$1 = state_33866;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33866__$1,(8),inst_33853,inst_33843);
} else {
if((state_val_33867 === (9))){
var state_33866__$1 = state_33866;
var statearr_33877_35304 = state_33866__$1;
(statearr_33877_35304[(2)] = tc);

(statearr_33877_35304[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33867 === (5))){
var inst_33846 = cljs.core.async.close_BANG_(tc);
var inst_33847 = cljs.core.async.close_BANG_(fc);
var state_33866__$1 = (function (){var statearr_33878 = state_33866;
(statearr_33878[(8)] = inst_33846);

return statearr_33878;
})();
var statearr_33879_35310 = state_33866__$1;
(statearr_33879_35310[(2)] = inst_33847);

(statearr_33879_35310[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33867 === (14))){
var inst_33860 = (state_33866[(2)]);
var state_33866__$1 = state_33866;
var statearr_33880_35313 = state_33866__$1;
(statearr_33880_35313[(2)] = inst_33860);

(statearr_33880_35313[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33867 === (10))){
var state_33866__$1 = state_33866;
var statearr_33881_35314 = state_33866__$1;
(statearr_33881_35314[(2)] = fc);

(statearr_33881_35314[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33867 === (8))){
var inst_33855 = (state_33866[(2)]);
var state_33866__$1 = state_33866;
if(cljs.core.truth_(inst_33855)){
var statearr_33882_35319 = state_33866__$1;
(statearr_33882_35319[(1)] = (12));

} else {
var statearr_33883_35320 = state_33866__$1;
(statearr_33883_35320[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33515__auto___35275,tc,fc))
;
return ((function (switch__33352__auto__,c__33515__auto___35275,tc,fc){
return (function() {
var cljs$core$async$state_machine__33353__auto__ = null;
var cljs$core$async$state_machine__33353__auto____0 = (function (){
var statearr_33884 = [null,null,null,null,null,null,null,null,null];
(statearr_33884[(0)] = cljs$core$async$state_machine__33353__auto__);

(statearr_33884[(1)] = (1));

return statearr_33884;
});
var cljs$core$async$state_machine__33353__auto____1 = (function (state_33866){
while(true){
var ret_value__33354__auto__ = (function (){try{while(true){
var result__33355__auto__ = switch__33352__auto__(state_33866);
if(cljs.core.keyword_identical_QMARK_(result__33355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33355__auto__;
}
break;
}
}catch (e33885){if((e33885 instanceof Object)){
var ex__33356__auto__ = e33885;
var statearr_33886_35361 = state_33866;
(statearr_33886_35361[(5)] = ex__33356__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33866);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33885;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35363 = state_33866;
state_33866 = G__35363;
continue;
} else {
return ret_value__33354__auto__;
}
break;
}
});
cljs$core$async$state_machine__33353__auto__ = function(state_33866){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33353__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33353__auto____1.call(this,state_33866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33353__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33353__auto____0;
cljs$core$async$state_machine__33353__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33353__auto____1;
return cljs$core$async$state_machine__33353__auto__;
})()
;})(switch__33352__auto__,c__33515__auto___35275,tc,fc))
})();
var state__33517__auto__ = (function (){var statearr_33887 = (f__33516__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33516__auto__.cljs$core$IFn$_invoke$arity$0() : f__33516__auto__.call(null));
(statearr_33887[(6)] = c__33515__auto___35275);

return statearr_33887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33517__auto__);
});})(c__33515__auto___35275,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__33515__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33515__auto__){
return (function (){
var f__33516__auto__ = (function (){var switch__33352__auto__ = ((function (c__33515__auto__){
return (function (state_33908){
var state_val_33909 = (state_33908[(1)]);
if((state_val_33909 === (7))){
var inst_33904 = (state_33908[(2)]);
var state_33908__$1 = state_33908;
var statearr_33910_35369 = state_33908__$1;
(statearr_33910_35369[(2)] = inst_33904);

(statearr_33910_35369[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33909 === (1))){
var inst_33888 = init;
var state_33908__$1 = (function (){var statearr_33911 = state_33908;
(statearr_33911[(7)] = inst_33888);

return statearr_33911;
})();
var statearr_33912_35370 = state_33908__$1;
(statearr_33912_35370[(2)] = null);

(statearr_33912_35370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33909 === (4))){
var inst_33891 = (state_33908[(8)]);
var inst_33891__$1 = (state_33908[(2)]);
var inst_33892 = (inst_33891__$1 == null);
var state_33908__$1 = (function (){var statearr_33913 = state_33908;
(statearr_33913[(8)] = inst_33891__$1);

return statearr_33913;
})();
if(cljs.core.truth_(inst_33892)){
var statearr_33914_35374 = state_33908__$1;
(statearr_33914_35374[(1)] = (5));

} else {
var statearr_33915_35375 = state_33908__$1;
(statearr_33915_35375[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33909 === (6))){
var inst_33888 = (state_33908[(7)]);
var inst_33891 = (state_33908[(8)]);
var inst_33895 = (state_33908[(9)]);
var inst_33895__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_33888,inst_33891) : f.call(null,inst_33888,inst_33891));
var inst_33896 = cljs.core.reduced_QMARK_(inst_33895__$1);
var state_33908__$1 = (function (){var statearr_33916 = state_33908;
(statearr_33916[(9)] = inst_33895__$1);

return statearr_33916;
})();
if(inst_33896){
var statearr_33917_35380 = state_33908__$1;
(statearr_33917_35380[(1)] = (8));

} else {
var statearr_33918_35381 = state_33908__$1;
(statearr_33918_35381[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33909 === (3))){
var inst_33906 = (state_33908[(2)]);
var state_33908__$1 = state_33908;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33908__$1,inst_33906);
} else {
if((state_val_33909 === (2))){
var state_33908__$1 = state_33908;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33908__$1,(4),ch);
} else {
if((state_val_33909 === (9))){
var inst_33895 = (state_33908[(9)]);
var inst_33888 = inst_33895;
var state_33908__$1 = (function (){var statearr_33919 = state_33908;
(statearr_33919[(7)] = inst_33888);

return statearr_33919;
})();
var statearr_33920_35389 = state_33908__$1;
(statearr_33920_35389[(2)] = null);

(statearr_33920_35389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33909 === (5))){
var inst_33888 = (state_33908[(7)]);
var state_33908__$1 = state_33908;
var statearr_33921_35390 = state_33908__$1;
(statearr_33921_35390[(2)] = inst_33888);

(statearr_33921_35390[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33909 === (10))){
var inst_33902 = (state_33908[(2)]);
var state_33908__$1 = state_33908;
var statearr_33922_35399 = state_33908__$1;
(statearr_33922_35399[(2)] = inst_33902);

(statearr_33922_35399[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33909 === (8))){
var inst_33895 = (state_33908[(9)]);
var inst_33898 = cljs.core.deref(inst_33895);
var state_33908__$1 = state_33908;
var statearr_33923_35404 = state_33908__$1;
(statearr_33923_35404[(2)] = inst_33898);

(statearr_33923_35404[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__33515__auto__))
;
return ((function (switch__33352__auto__,c__33515__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__33353__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33353__auto____0 = (function (){
var statearr_33924 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33924[(0)] = cljs$core$async$reduce_$_state_machine__33353__auto__);

(statearr_33924[(1)] = (1));

return statearr_33924;
});
var cljs$core$async$reduce_$_state_machine__33353__auto____1 = (function (state_33908){
while(true){
var ret_value__33354__auto__ = (function (){try{while(true){
var result__33355__auto__ = switch__33352__auto__(state_33908);
if(cljs.core.keyword_identical_QMARK_(result__33355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33355__auto__;
}
break;
}
}catch (e33925){if((e33925 instanceof Object)){
var ex__33356__auto__ = e33925;
var statearr_33926_35410 = state_33908;
(statearr_33926_35410[(5)] = ex__33356__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33908);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33925;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35412 = state_33908;
state_33908 = G__35412;
continue;
} else {
return ret_value__33354__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33353__auto__ = function(state_33908){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33353__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33353__auto____1.call(this,state_33908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__33353__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33353__auto____0;
cljs$core$async$reduce_$_state_machine__33353__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33353__auto____1;
return cljs$core$async$reduce_$_state_machine__33353__auto__;
})()
;})(switch__33352__auto__,c__33515__auto__))
})();
var state__33517__auto__ = (function (){var statearr_33927 = (f__33516__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33516__auto__.cljs$core$IFn$_invoke$arity$0() : f__33516__auto__.call(null));
(statearr_33927[(6)] = c__33515__auto__);

return statearr_33927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33517__auto__);
});})(c__33515__auto__))
);

return c__33515__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__33515__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33515__auto__,f__$1){
return (function (){
var f__33516__auto__ = (function (){var switch__33352__auto__ = ((function (c__33515__auto__,f__$1){
return (function (state_33933){
var state_val_33934 = (state_33933[(1)]);
if((state_val_33934 === (1))){
var inst_33928 = cljs.core.async.reduce(f__$1,init,ch);
var state_33933__$1 = state_33933;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33933__$1,(2),inst_33928);
} else {
if((state_val_33934 === (2))){
var inst_33930 = (state_33933[(2)]);
var inst_33931 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_33930) : f__$1.call(null,inst_33930));
var state_33933__$1 = state_33933;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33933__$1,inst_33931);
} else {
return null;
}
}
});})(c__33515__auto__,f__$1))
;
return ((function (switch__33352__auto__,c__33515__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__33353__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33353__auto____0 = (function (){
var statearr_33935 = [null,null,null,null,null,null,null];
(statearr_33935[(0)] = cljs$core$async$transduce_$_state_machine__33353__auto__);

(statearr_33935[(1)] = (1));

return statearr_33935;
});
var cljs$core$async$transduce_$_state_machine__33353__auto____1 = (function (state_33933){
while(true){
var ret_value__33354__auto__ = (function (){try{while(true){
var result__33355__auto__ = switch__33352__auto__(state_33933);
if(cljs.core.keyword_identical_QMARK_(result__33355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33355__auto__;
}
break;
}
}catch (e33936){if((e33936 instanceof Object)){
var ex__33356__auto__ = e33936;
var statearr_33937_35422 = state_33933;
(statearr_33937_35422[(5)] = ex__33356__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33933);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33936;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35425 = state_33933;
state_33933 = G__35425;
continue;
} else {
return ret_value__33354__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33353__auto__ = function(state_33933){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33353__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33353__auto____1.call(this,state_33933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__33353__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33353__auto____0;
cljs$core$async$transduce_$_state_machine__33353__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33353__auto____1;
return cljs$core$async$transduce_$_state_machine__33353__auto__;
})()
;})(switch__33352__auto__,c__33515__auto__,f__$1))
})();
var state__33517__auto__ = (function (){var statearr_33938 = (f__33516__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33516__auto__.cljs$core$IFn$_invoke$arity$0() : f__33516__auto__.call(null));
(statearr_33938[(6)] = c__33515__auto__);

return statearr_33938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33517__auto__);
});})(c__33515__auto__,f__$1))
);

return c__33515__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__33940 = arguments.length;
switch (G__33940) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__33515__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33515__auto__){
return (function (){
var f__33516__auto__ = (function (){var switch__33352__auto__ = ((function (c__33515__auto__){
return (function (state_33965){
var state_val_33966 = (state_33965[(1)]);
if((state_val_33966 === (7))){
var inst_33947 = (state_33965[(2)]);
var state_33965__$1 = state_33965;
var statearr_33967_35438 = state_33965__$1;
(statearr_33967_35438[(2)] = inst_33947);

(statearr_33967_35438[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33966 === (1))){
var inst_33941 = cljs.core.seq(coll);
var inst_33942 = inst_33941;
var state_33965__$1 = (function (){var statearr_33968 = state_33965;
(statearr_33968[(7)] = inst_33942);

return statearr_33968;
})();
var statearr_33969_35441 = state_33965__$1;
(statearr_33969_35441[(2)] = null);

(statearr_33969_35441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33966 === (4))){
var inst_33942 = (state_33965[(7)]);
var inst_33945 = cljs.core.first(inst_33942);
var state_33965__$1 = state_33965;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33965__$1,(7),ch,inst_33945);
} else {
if((state_val_33966 === (13))){
var inst_33959 = (state_33965[(2)]);
var state_33965__$1 = state_33965;
var statearr_33970_35446 = state_33965__$1;
(statearr_33970_35446[(2)] = inst_33959);

(statearr_33970_35446[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33966 === (6))){
var inst_33950 = (state_33965[(2)]);
var state_33965__$1 = state_33965;
if(cljs.core.truth_(inst_33950)){
var statearr_33971_35451 = state_33965__$1;
(statearr_33971_35451[(1)] = (8));

} else {
var statearr_33972_35452 = state_33965__$1;
(statearr_33972_35452[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33966 === (3))){
var inst_33963 = (state_33965[(2)]);
var state_33965__$1 = state_33965;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33965__$1,inst_33963);
} else {
if((state_val_33966 === (12))){
var state_33965__$1 = state_33965;
var statearr_33973_35461 = state_33965__$1;
(statearr_33973_35461[(2)] = null);

(statearr_33973_35461[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33966 === (2))){
var inst_33942 = (state_33965[(7)]);
var state_33965__$1 = state_33965;
if(cljs.core.truth_(inst_33942)){
var statearr_33974_35464 = state_33965__$1;
(statearr_33974_35464[(1)] = (4));

} else {
var statearr_33975_35465 = state_33965__$1;
(statearr_33975_35465[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33966 === (11))){
var inst_33956 = cljs.core.async.close_BANG_(ch);
var state_33965__$1 = state_33965;
var statearr_33976_35466 = state_33965__$1;
(statearr_33976_35466[(2)] = inst_33956);

(statearr_33976_35466[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33966 === (9))){
var state_33965__$1 = state_33965;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33977_35467 = state_33965__$1;
(statearr_33977_35467[(1)] = (11));

} else {
var statearr_33978_35468 = state_33965__$1;
(statearr_33978_35468[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33966 === (5))){
var inst_33942 = (state_33965[(7)]);
var state_33965__$1 = state_33965;
var statearr_33979_35469 = state_33965__$1;
(statearr_33979_35469[(2)] = inst_33942);

(statearr_33979_35469[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33966 === (10))){
var inst_33961 = (state_33965[(2)]);
var state_33965__$1 = state_33965;
var statearr_33980_35470 = state_33965__$1;
(statearr_33980_35470[(2)] = inst_33961);

(statearr_33980_35470[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33966 === (8))){
var inst_33942 = (state_33965[(7)]);
var inst_33952 = cljs.core.next(inst_33942);
var inst_33942__$1 = inst_33952;
var state_33965__$1 = (function (){var statearr_33981 = state_33965;
(statearr_33981[(7)] = inst_33942__$1);

return statearr_33981;
})();
var statearr_33982_35471 = state_33965__$1;
(statearr_33982_35471[(2)] = null);

(statearr_33982_35471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33515__auto__))
;
return ((function (switch__33352__auto__,c__33515__auto__){
return (function() {
var cljs$core$async$state_machine__33353__auto__ = null;
var cljs$core$async$state_machine__33353__auto____0 = (function (){
var statearr_33983 = [null,null,null,null,null,null,null,null];
(statearr_33983[(0)] = cljs$core$async$state_machine__33353__auto__);

(statearr_33983[(1)] = (1));

return statearr_33983;
});
var cljs$core$async$state_machine__33353__auto____1 = (function (state_33965){
while(true){
var ret_value__33354__auto__ = (function (){try{while(true){
var result__33355__auto__ = switch__33352__auto__(state_33965);
if(cljs.core.keyword_identical_QMARK_(result__33355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33355__auto__;
}
break;
}
}catch (e33984){if((e33984 instanceof Object)){
var ex__33356__auto__ = e33984;
var statearr_33985_35472 = state_33965;
(statearr_33985_35472[(5)] = ex__33356__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33965);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33984;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35479 = state_33965;
state_33965 = G__35479;
continue;
} else {
return ret_value__33354__auto__;
}
break;
}
});
cljs$core$async$state_machine__33353__auto__ = function(state_33965){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33353__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33353__auto____1.call(this,state_33965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33353__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33353__auto____0;
cljs$core$async$state_machine__33353__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33353__auto____1;
return cljs$core$async$state_machine__33353__auto__;
})()
;})(switch__33352__auto__,c__33515__auto__))
})();
var state__33517__auto__ = (function (){var statearr_33986 = (f__33516__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33516__auto__.cljs$core$IFn$_invoke$arity$0() : f__33516__auto__.call(null));
(statearr_33986[(6)] = c__33515__auto__);

return statearr_33986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33517__auto__);
});})(c__33515__auto__))
);

return c__33515__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4434__auto__.call(null,_));
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4431__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4434__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4431__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33987 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33987 = (function (ch,cs,meta33988){
this.ch = ch;
this.cs = cs;
this.meta33988 = meta33988;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33987.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_33989,meta33988__$1){
var self__ = this;
var _33989__$1 = this;
return (new cljs.core.async.t_cljs$core$async33987(self__.ch,self__.cs,meta33988__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async33987.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_33989){
var self__ = this;
var _33989__$1 = this;
return self__.meta33988;
});})(cs))
;

cljs.core.async.t_cljs$core$async33987.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33987.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async33987.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33987.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33987.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33987.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33987.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33988","meta33988",16146806,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async33987.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33987.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33987";

cljs.core.async.t_cljs$core$async33987.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async33987");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33987.
 */
cljs.core.async.__GT_t_cljs$core$async33987 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async33987(ch__$1,cs__$1,meta33988){
return (new cljs.core.async.t_cljs$core$async33987(ch__$1,cs__$1,meta33988));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async33987(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__33515__auto___35498 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33515__auto___35498,cs,m,dchan,dctr,done){
return (function (){
var f__33516__auto__ = (function (){var switch__33352__auto__ = ((function (c__33515__auto___35498,cs,m,dchan,dctr,done){
return (function (state_34124){
var state_val_34125 = (state_34124[(1)]);
if((state_val_34125 === (7))){
var inst_34120 = (state_34124[(2)]);
var state_34124__$1 = state_34124;
var statearr_34126_35499 = state_34124__$1;
(statearr_34126_35499[(2)] = inst_34120);

(statearr_34126_35499[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34125 === (20))){
var inst_34023 = (state_34124[(7)]);
var inst_34035 = cljs.core.first(inst_34023);
var inst_34036 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34035,(0),null);
var inst_34037 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34035,(1),null);
var state_34124__$1 = (function (){var statearr_34127 = state_34124;
(statearr_34127[(8)] = inst_34036);

return statearr_34127;
})();
if(cljs.core.truth_(inst_34037)){
var statearr_34128_35500 = state_34124__$1;
(statearr_34128_35500[(1)] = (22));

} else {
var statearr_34129_35501 = state_34124__$1;
(statearr_34129_35501[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34125 === (27))){
var inst_34072 = (state_34124[(9)]);
var inst_34065 = (state_34124[(10)]);
var inst_34067 = (state_34124[(11)]);
var inst_33992 = (state_34124[(12)]);
var inst_34072__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34065,inst_34067);
var inst_34073 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34072__$1,inst_33992,done);
var state_34124__$1 = (function (){var statearr_34130 = state_34124;
(statearr_34130[(9)] = inst_34072__$1);

return statearr_34130;
})();
if(cljs.core.truth_(inst_34073)){
var statearr_34131_35508 = state_34124__$1;
(statearr_34131_35508[(1)] = (30));

} else {
var statearr_34132_35509 = state_34124__$1;
(statearr_34132_35509[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34125 === (1))){
var state_34124__$1 = state_34124;
var statearr_34133_35512 = state_34124__$1;
(statearr_34133_35512[(2)] = null);

(statearr_34133_35512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34125 === (24))){
var inst_34023 = (state_34124[(7)]);
var inst_34042 = (state_34124[(2)]);
var inst_34043 = cljs.core.next(inst_34023);
var inst_34001 = inst_34043;
var inst_34002 = null;
var inst_34003 = (0);
var inst_34004 = (0);
var state_34124__$1 = (function (){var statearr_34134 = state_34124;
(statearr_34134[(13)] = inst_34001);

(statearr_34134[(14)] = inst_34004);

(statearr_34134[(15)] = inst_34003);

(statearr_34134[(16)] = inst_34042);

(statearr_34134[(17)] = inst_34002);

return statearr_34134;
})();
var statearr_34135_35516 = state_34124__$1;
(statearr_34135_35516[(2)] = null);

(statearr_34135_35516[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34125 === (39))){
var state_34124__$1 = state_34124;
var statearr_34139_35518 = state_34124__$1;
(statearr_34139_35518[(2)] = null);

(statearr_34139_35518[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34125 === (4))){
var inst_33992 = (state_34124[(12)]);
var inst_33992__$1 = (state_34124[(2)]);
var inst_33993 = (inst_33992__$1 == null);
var state_34124__$1 = (function (){var statearr_34140 = state_34124;
(statearr_34140[(12)] = inst_33992__$1);

return statearr_34140;
})();
if(cljs.core.truth_(inst_33993)){
var statearr_34141_35521 = state_34124__$1;
(statearr_34141_35521[(1)] = (5));

} else {
var statearr_34142_35522 = state_34124__$1;
(statearr_34142_35522[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34125 === (15))){
var inst_34001 = (state_34124[(13)]);
var inst_34004 = (state_34124[(14)]);
var inst_34003 = (state_34124[(15)]);
var inst_34002 = (state_34124[(17)]);
var inst_34019 = (state_34124[(2)]);
var inst_34020 = (inst_34004 + (1));
var tmp34136 = inst_34001;
var tmp34137 = inst_34003;
var tmp34138 = inst_34002;
var inst_34001__$1 = tmp34136;
var inst_34002__$1 = tmp34138;
var inst_34003__$1 = tmp34137;
var inst_34004__$1 = inst_34020;
var state_34124__$1 = (function (){var statearr_34143 = state_34124;
(statearr_34143[(13)] = inst_34001__$1);

(statearr_34143[(14)] = inst_34004__$1);

(statearr_34143[(15)] = inst_34003__$1);

(statearr_34143[(18)] = inst_34019);

(statearr_34143[(17)] = inst_34002__$1);

return statearr_34143;
})();
var statearr_34144_35526 = state_34124__$1;
(statearr_34144_35526[(2)] = null);

(statearr_34144_35526[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34125 === (21))){
var inst_34046 = (state_34124[(2)]);
var state_34124__$1 = state_34124;
var statearr_34148_35530 = state_34124__$1;
(statearr_34148_35530[(2)] = inst_34046);

(statearr_34148_35530[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34125 === (31))){
var inst_34072 = (state_34124[(9)]);
var inst_34076 = done(null);
var inst_34077 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34072);
var state_34124__$1 = (function (){var statearr_34149 = state_34124;
(statearr_34149[(19)] = inst_34076);

return statearr_34149;
})();
var statearr_34150_35531 = state_34124__$1;
(statearr_34150_35531[(2)] = inst_34077);

(statearr_34150_35531[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34125 === (32))){
var inst_34064 = (state_34124[(20)]);
var inst_34066 = (state_34124[(21)]);
var inst_34065 = (state_34124[(10)]);
var inst_34067 = (state_34124[(11)]);
var inst_34079 = (state_34124[(2)]);
var inst_34080 = (inst_34067 + (1));
var tmp34145 = inst_34064;
var tmp34146 = inst_34066;
var tmp34147 = inst_34065;
var inst_34064__$1 = tmp34145;
var inst_34065__$1 = tmp34147;
var inst_34066__$1 = tmp34146;
var inst_34067__$1 = inst_34080;
var state_34124__$1 = (function (){var statearr_34151 = state_34124;
(statearr_34151[(20)] = inst_34064__$1);

(statearr_34151[(22)] = inst_34079);

(statearr_34151[(21)] = inst_34066__$1);

(statearr_34151[(10)] = inst_34065__$1);

(statearr_34151[(11)] = inst_34067__$1);

return statearr_34151;
})();
var statearr_34152_35535 = state_34124__$1;
(statearr_34152_35535[(2)] = null);

(statearr_34152_35535[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34125 === (40))){
var inst_34092 = (state_34124[(23)]);
var inst_34096 = done(null);
var inst_34097 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34092);
var state_34124__$1 = (function (){var statearr_34153 = state_34124;
(statearr_34153[(24)] = inst_34096);

return statearr_34153;
})();
var statearr_34154_35536 = state_34124__$1;
(statearr_34154_35536[(2)] = inst_34097);

(statearr_34154_35536[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34125 === (33))){
var inst_34083 = (state_34124[(25)]);
var inst_34085 = cljs.core.chunked_seq_QMARK_(inst_34083);
var state_34124__$1 = state_34124;
if(inst_34085){
var statearr_34155_35537 = state_34124__$1;
(statearr_34155_35537[(1)] = (36));

} else {
var statearr_34156_35538 = state_34124__$1;
(statearr_34156_35538[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34125 === (13))){
var inst_34013 = (state_34124[(26)]);
var inst_34016 = cljs.core.async.close_BANG_(inst_34013);
var state_34124__$1 = state_34124;
var statearr_34157_35543 = state_34124__$1;
(statearr_34157_35543[(2)] = inst_34016);

(statearr_34157_35543[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34125 === (22))){
var inst_34036 = (state_34124[(8)]);
var inst_34039 = cljs.core.async.close_BANG_(inst_34036);
var state_34124__$1 = state_34124;
var statearr_34158_35544 = state_34124__$1;
(statearr_34158_35544[(2)] = inst_34039);

(statearr_34158_35544[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34125 === (36))){
var inst_34083 = (state_34124[(25)]);
var inst_34087 = cljs.core.chunk_first(inst_34083);
var inst_34088 = cljs.core.chunk_rest(inst_34083);
var inst_34089 = cljs.core.count(inst_34087);
var inst_34064 = inst_34088;
var inst_34065 = inst_34087;
var inst_34066 = inst_34089;
var inst_34067 = (0);
var state_34124__$1 = (function (){var statearr_34159 = state_34124;
(statearr_34159[(20)] = inst_34064);

(statearr_34159[(21)] = inst_34066);

(statearr_34159[(10)] = inst_34065);

(statearr_34159[(11)] = inst_34067);

return statearr_34159;
})();
var statearr_34160_35545 = state_34124__$1;
(statearr_34160_35545[(2)] = null);

(statearr_34160_35545[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34125 === (41))){
var inst_34083 = (state_34124[(25)]);
var inst_34099 = (state_34124[(2)]);
var inst_34100 = cljs.core.next(inst_34083);
var inst_34064 = inst_34100;
var inst_34065 = null;
var inst_34066 = (0);
var inst_34067 = (0);
var state_34124__$1 = (function (){var statearr_34161 = state_34124;
(statearr_34161[(20)] = inst_34064);

(statearr_34161[(21)] = inst_34066);

(statearr_34161[(27)] = inst_34099);

(statearr_34161[(10)] = inst_34065);

(statearr_34161[(11)] = inst_34067);

return statearr_34161;
})();
var statearr_34162_35552 = state_34124__$1;
(statearr_34162_35552[(2)] = null);

(statearr_34162_35552[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34125 === (43))){
var state_34124__$1 = state_34124;
var statearr_34163_35553 = state_34124__$1;
(statearr_34163_35553[(2)] = null);

(statearr_34163_35553[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34125 === (29))){
var inst_34108 = (state_34124[(2)]);
var state_34124__$1 = state_34124;
var statearr_34164_35556 = state_34124__$1;
(statearr_34164_35556[(2)] = inst_34108);

(statearr_34164_35556[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34125 === (44))){
var inst_34117 = (state_34124[(2)]);
var state_34124__$1 = (function (){var statearr_34165 = state_34124;
(statearr_34165[(28)] = inst_34117);

return statearr_34165;
})();
var statearr_34166_35559 = state_34124__$1;
(statearr_34166_35559[(2)] = null);

(statearr_34166_35559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34125 === (6))){
var inst_34056 = (state_34124[(29)]);
var inst_34055 = cljs.core.deref(cs);
var inst_34056__$1 = cljs.core.keys(inst_34055);
var inst_34057 = cljs.core.count(inst_34056__$1);
var inst_34058 = cljs.core.reset_BANG_(dctr,inst_34057);
var inst_34063 = cljs.core.seq(inst_34056__$1);
var inst_34064 = inst_34063;
var inst_34065 = null;
var inst_34066 = (0);
var inst_34067 = (0);
var state_34124__$1 = (function (){var statearr_34167 = state_34124;
(statearr_34167[(20)] = inst_34064);

(statearr_34167[(21)] = inst_34066);

(statearr_34167[(29)] = inst_34056__$1);

(statearr_34167[(30)] = inst_34058);

(statearr_34167[(10)] = inst_34065);

(statearr_34167[(11)] = inst_34067);

return statearr_34167;
})();
var statearr_34168_35564 = state_34124__$1;
(statearr_34168_35564[(2)] = null);

(statearr_34168_35564[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34125 === (28))){
var inst_34083 = (state_34124[(25)]);
var inst_34064 = (state_34124[(20)]);
var inst_34083__$1 = cljs.core.seq(inst_34064);
var state_34124__$1 = (function (){var statearr_34169 = state_34124;
(statearr_34169[(25)] = inst_34083__$1);

return statearr_34169;
})();
if(inst_34083__$1){
var statearr_34170_35567 = state_34124__$1;
(statearr_34170_35567[(1)] = (33));

} else {
var statearr_34171_35568 = state_34124__$1;
(statearr_34171_35568[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34125 === (25))){
var inst_34066 = (state_34124[(21)]);
var inst_34067 = (state_34124[(11)]);
var inst_34069 = (inst_34067 < inst_34066);
var inst_34070 = inst_34069;
var state_34124__$1 = state_34124;
if(cljs.core.truth_(inst_34070)){
var statearr_34172_35571 = state_34124__$1;
(statearr_34172_35571[(1)] = (27));

} else {
var statearr_34173_35572 = state_34124__$1;
(statearr_34173_35572[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34125 === (34))){
var state_34124__$1 = state_34124;
var statearr_34174_35573 = state_34124__$1;
(statearr_34174_35573[(2)] = null);

(statearr_34174_35573[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34125 === (17))){
var state_34124__$1 = state_34124;
var statearr_34175_35574 = state_34124__$1;
(statearr_34175_35574[(2)] = null);

(statearr_34175_35574[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34125 === (3))){
var inst_34122 = (state_34124[(2)]);
var state_34124__$1 = state_34124;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34124__$1,inst_34122);
} else {
if((state_val_34125 === (12))){
var inst_34051 = (state_34124[(2)]);
var state_34124__$1 = state_34124;
var statearr_34176_35576 = state_34124__$1;
(statearr_34176_35576[(2)] = inst_34051);

(statearr_34176_35576[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34125 === (2))){
var state_34124__$1 = state_34124;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34124__$1,(4),ch);
} else {
if((state_val_34125 === (23))){
var state_34124__$1 = state_34124;
var statearr_34177_35581 = state_34124__$1;
(statearr_34177_35581[(2)] = null);

(statearr_34177_35581[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34125 === (35))){
var inst_34106 = (state_34124[(2)]);
var state_34124__$1 = state_34124;
var statearr_34178_35582 = state_34124__$1;
(statearr_34178_35582[(2)] = inst_34106);

(statearr_34178_35582[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34125 === (19))){
var inst_34023 = (state_34124[(7)]);
var inst_34027 = cljs.core.chunk_first(inst_34023);
var inst_34028 = cljs.core.chunk_rest(inst_34023);
var inst_34029 = cljs.core.count(inst_34027);
var inst_34001 = inst_34028;
var inst_34002 = inst_34027;
var inst_34003 = inst_34029;
var inst_34004 = (0);
var state_34124__$1 = (function (){var statearr_34179 = state_34124;
(statearr_34179[(13)] = inst_34001);

(statearr_34179[(14)] = inst_34004);

(statearr_34179[(15)] = inst_34003);

(statearr_34179[(17)] = inst_34002);

return statearr_34179;
})();
var statearr_34180_35583 = state_34124__$1;
(statearr_34180_35583[(2)] = null);

(statearr_34180_35583[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34125 === (11))){
var inst_34001 = (state_34124[(13)]);
var inst_34023 = (state_34124[(7)]);
var inst_34023__$1 = cljs.core.seq(inst_34001);
var state_34124__$1 = (function (){var statearr_34181 = state_34124;
(statearr_34181[(7)] = inst_34023__$1);

return statearr_34181;
})();
if(inst_34023__$1){
var statearr_34182_35584 = state_34124__$1;
(statearr_34182_35584[(1)] = (16));

} else {
var statearr_34183_35585 = state_34124__$1;
(statearr_34183_35585[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34125 === (9))){
var inst_34053 = (state_34124[(2)]);
var state_34124__$1 = state_34124;
var statearr_34184_35586 = state_34124__$1;
(statearr_34184_35586[(2)] = inst_34053);

(statearr_34184_35586[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34125 === (5))){
var inst_33999 = cljs.core.deref(cs);
var inst_34000 = cljs.core.seq(inst_33999);
var inst_34001 = inst_34000;
var inst_34002 = null;
var inst_34003 = (0);
var inst_34004 = (0);
var state_34124__$1 = (function (){var statearr_34185 = state_34124;
(statearr_34185[(13)] = inst_34001);

(statearr_34185[(14)] = inst_34004);

(statearr_34185[(15)] = inst_34003);

(statearr_34185[(17)] = inst_34002);

return statearr_34185;
})();
var statearr_34186_35587 = state_34124__$1;
(statearr_34186_35587[(2)] = null);

(statearr_34186_35587[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34125 === (14))){
var state_34124__$1 = state_34124;
var statearr_34187_35595 = state_34124__$1;
(statearr_34187_35595[(2)] = null);

(statearr_34187_35595[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34125 === (45))){
var inst_34114 = (state_34124[(2)]);
var state_34124__$1 = state_34124;
var statearr_34188_35596 = state_34124__$1;
(statearr_34188_35596[(2)] = inst_34114);

(statearr_34188_35596[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34125 === (26))){
var inst_34056 = (state_34124[(29)]);
var inst_34110 = (state_34124[(2)]);
var inst_34111 = cljs.core.seq(inst_34056);
var state_34124__$1 = (function (){var statearr_34189 = state_34124;
(statearr_34189[(31)] = inst_34110);

return statearr_34189;
})();
if(inst_34111){
var statearr_34190_35606 = state_34124__$1;
(statearr_34190_35606[(1)] = (42));

} else {
var statearr_34191_35607 = state_34124__$1;
(statearr_34191_35607[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34125 === (16))){
var inst_34023 = (state_34124[(7)]);
var inst_34025 = cljs.core.chunked_seq_QMARK_(inst_34023);
var state_34124__$1 = state_34124;
if(inst_34025){
var statearr_34192_35609 = state_34124__$1;
(statearr_34192_35609[(1)] = (19));

} else {
var statearr_34193_35613 = state_34124__$1;
(statearr_34193_35613[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34125 === (38))){
var inst_34103 = (state_34124[(2)]);
var state_34124__$1 = state_34124;
var statearr_34194_35614 = state_34124__$1;
(statearr_34194_35614[(2)] = inst_34103);

(statearr_34194_35614[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34125 === (30))){
var state_34124__$1 = state_34124;
var statearr_34195_35615 = state_34124__$1;
(statearr_34195_35615[(2)] = null);

(statearr_34195_35615[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34125 === (10))){
var inst_34004 = (state_34124[(14)]);
var inst_34002 = (state_34124[(17)]);
var inst_34012 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34002,inst_34004);
var inst_34013 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34012,(0),null);
var inst_34014 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34012,(1),null);
var state_34124__$1 = (function (){var statearr_34196 = state_34124;
(statearr_34196[(26)] = inst_34013);

return statearr_34196;
})();
if(cljs.core.truth_(inst_34014)){
var statearr_34197_35616 = state_34124__$1;
(statearr_34197_35616[(1)] = (13));

} else {
var statearr_34198_35620 = state_34124__$1;
(statearr_34198_35620[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34125 === (18))){
var inst_34049 = (state_34124[(2)]);
var state_34124__$1 = state_34124;
var statearr_34199_35621 = state_34124__$1;
(statearr_34199_35621[(2)] = inst_34049);

(statearr_34199_35621[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34125 === (42))){
var state_34124__$1 = state_34124;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34124__$1,(45),dchan);
} else {
if((state_val_34125 === (37))){
var inst_34083 = (state_34124[(25)]);
var inst_34092 = (state_34124[(23)]);
var inst_33992 = (state_34124[(12)]);
var inst_34092__$1 = cljs.core.first(inst_34083);
var inst_34093 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34092__$1,inst_33992,done);
var state_34124__$1 = (function (){var statearr_34200 = state_34124;
(statearr_34200[(23)] = inst_34092__$1);

return statearr_34200;
})();
if(cljs.core.truth_(inst_34093)){
var statearr_34201_35624 = state_34124__$1;
(statearr_34201_35624[(1)] = (39));

} else {
var statearr_34202_35625 = state_34124__$1;
(statearr_34202_35625[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34125 === (8))){
var inst_34004 = (state_34124[(14)]);
var inst_34003 = (state_34124[(15)]);
var inst_34006 = (inst_34004 < inst_34003);
var inst_34007 = inst_34006;
var state_34124__$1 = state_34124;
if(cljs.core.truth_(inst_34007)){
var statearr_34203_35635 = state_34124__$1;
(statearr_34203_35635[(1)] = (10));

} else {
var statearr_34204_35636 = state_34124__$1;
(statearr_34204_35636[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33515__auto___35498,cs,m,dchan,dctr,done))
;
return ((function (switch__33352__auto__,c__33515__auto___35498,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__33353__auto__ = null;
var cljs$core$async$mult_$_state_machine__33353__auto____0 = (function (){
var statearr_34205 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34205[(0)] = cljs$core$async$mult_$_state_machine__33353__auto__);

(statearr_34205[(1)] = (1));

return statearr_34205;
});
var cljs$core$async$mult_$_state_machine__33353__auto____1 = (function (state_34124){
while(true){
var ret_value__33354__auto__ = (function (){try{while(true){
var result__33355__auto__ = switch__33352__auto__(state_34124);
if(cljs.core.keyword_identical_QMARK_(result__33355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33355__auto__;
}
break;
}
}catch (e34206){if((e34206 instanceof Object)){
var ex__33356__auto__ = e34206;
var statearr_34207_35640 = state_34124;
(statearr_34207_35640[(5)] = ex__33356__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34124);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34206;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35641 = state_34124;
state_34124 = G__35641;
continue;
} else {
return ret_value__33354__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33353__auto__ = function(state_34124){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33353__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33353__auto____1.call(this,state_34124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__33353__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33353__auto____0;
cljs$core$async$mult_$_state_machine__33353__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33353__auto____1;
return cljs$core$async$mult_$_state_machine__33353__auto__;
})()
;})(switch__33352__auto__,c__33515__auto___35498,cs,m,dchan,dctr,done))
})();
var state__33517__auto__ = (function (){var statearr_34208 = (f__33516__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33516__auto__.cljs$core$IFn$_invoke$arity$0() : f__33516__auto__.call(null));
(statearr_34208[(6)] = c__33515__auto___35498);

return statearr_34208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33517__auto__);
});})(c__33515__auto___35498,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__34210 = arguments.length;
switch (G__34210) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4434__auto__.call(null,m,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4431__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4434__auto__.call(null,m));
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4431__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4434__auto__.call(null,m,state_map));
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4431__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4434__auto__.call(null,m,mode));
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4431__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35656 = arguments.length;
var i__4731__auto___35657 = (0);
while(true){
if((i__4731__auto___35657 < len__4730__auto___35656)){
args__4736__auto__.push((arguments[i__4731__auto___35657]));

var G__35658 = (i__4731__auto___35657 + (1));
i__4731__auto___35657 = G__35658;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34215){
var map__34216 = p__34215;
var map__34216__$1 = (((((!((map__34216 == null))))?(((((map__34216.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34216.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34216):map__34216);
var opts = map__34216__$1;
var statearr_34218_35663 = state;
(statearr_34218_35663[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts(((function (map__34216,map__34216__$1,opts){
return (function (val){
var statearr_34219_35664 = state;
(statearr_34219_35664[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__34216,map__34216__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_34220_35665 = state;
(statearr_34220_35665[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34211){
var G__34212 = cljs.core.first(seq34211);
var seq34211__$1 = cljs.core.next(seq34211);
var G__34213 = cljs.core.first(seq34211__$1);
var seq34211__$2 = cljs.core.next(seq34211__$1);
var G__34214 = cljs.core.first(seq34211__$2);
var seq34211__$3 = cljs.core.next(seq34211__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34212,G__34213,G__34214,seq34211__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34221 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34221 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34222){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta34222 = meta34222;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34221.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34223,meta34222__$1){
var self__ = this;
var _34223__$1 = this;
return (new cljs.core.async.t_cljs$core$async34221(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta34222__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34221.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34223){
var self__ = this;
var _34223__$1 = this;
return self__.meta34222;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34221.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34221.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34221.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34221.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34221.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34221.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34221.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34221.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34221.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta34222","meta34222",267830948,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34221.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34221.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34221";

cljs.core.async.t_cljs$core$async34221.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async34221");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34221.
 */
cljs.core.async.__GT_t_cljs$core$async34221 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async34221(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34222){
return (new cljs.core.async.t_cljs$core$async34221(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34222));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async34221(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33515__auto___35674 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33515__auto___35674,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__33516__auto__ = (function (){var switch__33352__auto__ = ((function (c__33515__auto___35674,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_34325){
var state_val_34326 = (state_34325[(1)]);
if((state_val_34326 === (7))){
var inst_34240 = (state_34325[(2)]);
var state_34325__$1 = state_34325;
var statearr_34327_35675 = state_34325__$1;
(statearr_34327_35675[(2)] = inst_34240);

(statearr_34327_35675[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (20))){
var inst_34252 = (state_34325[(7)]);
var state_34325__$1 = state_34325;
var statearr_34328_35677 = state_34325__$1;
(statearr_34328_35677[(2)] = inst_34252);

(statearr_34328_35677[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (27))){
var state_34325__$1 = state_34325;
var statearr_34329_35678 = state_34325__$1;
(statearr_34329_35678[(2)] = null);

(statearr_34329_35678[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (1))){
var inst_34227 = (state_34325[(8)]);
var inst_34227__$1 = calc_state();
var inst_34229 = (inst_34227__$1 == null);
var inst_34230 = cljs.core.not(inst_34229);
var state_34325__$1 = (function (){var statearr_34330 = state_34325;
(statearr_34330[(8)] = inst_34227__$1);

return statearr_34330;
})();
if(inst_34230){
var statearr_34331_35679 = state_34325__$1;
(statearr_34331_35679[(1)] = (2));

} else {
var statearr_34332_35680 = state_34325__$1;
(statearr_34332_35680[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (24))){
var inst_34276 = (state_34325[(9)]);
var inst_34299 = (state_34325[(10)]);
var inst_34285 = (state_34325[(11)]);
var inst_34299__$1 = (inst_34276.cljs$core$IFn$_invoke$arity$1 ? inst_34276.cljs$core$IFn$_invoke$arity$1(inst_34285) : inst_34276.call(null,inst_34285));
var state_34325__$1 = (function (){var statearr_34333 = state_34325;
(statearr_34333[(10)] = inst_34299__$1);

return statearr_34333;
})();
if(cljs.core.truth_(inst_34299__$1)){
var statearr_34334_35682 = state_34325__$1;
(statearr_34334_35682[(1)] = (29));

} else {
var statearr_34335_35683 = state_34325__$1;
(statearr_34335_35683[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (4))){
var inst_34243 = (state_34325[(2)]);
var state_34325__$1 = state_34325;
if(cljs.core.truth_(inst_34243)){
var statearr_34336_35684 = state_34325__$1;
(statearr_34336_35684[(1)] = (8));

} else {
var statearr_34337_35685 = state_34325__$1;
(statearr_34337_35685[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (15))){
var inst_34270 = (state_34325[(2)]);
var state_34325__$1 = state_34325;
if(cljs.core.truth_(inst_34270)){
var statearr_34338_35686 = state_34325__$1;
(statearr_34338_35686[(1)] = (19));

} else {
var statearr_34339_35688 = state_34325__$1;
(statearr_34339_35688[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (21))){
var inst_34275 = (state_34325[(12)]);
var inst_34275__$1 = (state_34325[(2)]);
var inst_34276 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34275__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34277 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34275__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34278 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34275__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34325__$1 = (function (){var statearr_34340 = state_34325;
(statearr_34340[(12)] = inst_34275__$1);

(statearr_34340[(13)] = inst_34277);

(statearr_34340[(9)] = inst_34276);

return statearr_34340;
})();
return cljs.core.async.ioc_alts_BANG_(state_34325__$1,(22),inst_34278);
} else {
if((state_val_34326 === (31))){
var inst_34307 = (state_34325[(2)]);
var state_34325__$1 = state_34325;
if(cljs.core.truth_(inst_34307)){
var statearr_34341_35694 = state_34325__$1;
(statearr_34341_35694[(1)] = (32));

} else {
var statearr_34342_35695 = state_34325__$1;
(statearr_34342_35695[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (32))){
var inst_34284 = (state_34325[(14)]);
var state_34325__$1 = state_34325;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34325__$1,(35),out,inst_34284);
} else {
if((state_val_34326 === (33))){
var inst_34275 = (state_34325[(12)]);
var inst_34252 = inst_34275;
var state_34325__$1 = (function (){var statearr_34343 = state_34325;
(statearr_34343[(7)] = inst_34252);

return statearr_34343;
})();
var statearr_34344_35698 = state_34325__$1;
(statearr_34344_35698[(2)] = null);

(statearr_34344_35698[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (13))){
var inst_34252 = (state_34325[(7)]);
var inst_34259 = inst_34252.cljs$lang$protocol_mask$partition0$;
var inst_34260 = (inst_34259 & (64));
var inst_34261 = inst_34252.cljs$core$ISeq$;
var inst_34262 = (cljs.core.PROTOCOL_SENTINEL === inst_34261);
var inst_34263 = ((inst_34260) || (inst_34262));
var state_34325__$1 = state_34325;
if(cljs.core.truth_(inst_34263)){
var statearr_34345_35699 = state_34325__$1;
(statearr_34345_35699[(1)] = (16));

} else {
var statearr_34346_35700 = state_34325__$1;
(statearr_34346_35700[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (22))){
var inst_34284 = (state_34325[(14)]);
var inst_34285 = (state_34325[(11)]);
var inst_34283 = (state_34325[(2)]);
var inst_34284__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34283,(0),null);
var inst_34285__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34283,(1),null);
var inst_34286 = (inst_34284__$1 == null);
var inst_34287 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34285__$1,change);
var inst_34288 = ((inst_34286) || (inst_34287));
var state_34325__$1 = (function (){var statearr_34347 = state_34325;
(statearr_34347[(14)] = inst_34284__$1);

(statearr_34347[(11)] = inst_34285__$1);

return statearr_34347;
})();
if(cljs.core.truth_(inst_34288)){
var statearr_34348_35701 = state_34325__$1;
(statearr_34348_35701[(1)] = (23));

} else {
var statearr_34349_35703 = state_34325__$1;
(statearr_34349_35703[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (36))){
var inst_34275 = (state_34325[(12)]);
var inst_34252 = inst_34275;
var state_34325__$1 = (function (){var statearr_34350 = state_34325;
(statearr_34350[(7)] = inst_34252);

return statearr_34350;
})();
var statearr_34351_35707 = state_34325__$1;
(statearr_34351_35707[(2)] = null);

(statearr_34351_35707[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (29))){
var inst_34299 = (state_34325[(10)]);
var state_34325__$1 = state_34325;
var statearr_34352_35708 = state_34325__$1;
(statearr_34352_35708[(2)] = inst_34299);

(statearr_34352_35708[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (6))){
var state_34325__$1 = state_34325;
var statearr_34353_35709 = state_34325__$1;
(statearr_34353_35709[(2)] = false);

(statearr_34353_35709[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (28))){
var inst_34295 = (state_34325[(2)]);
var inst_34296 = calc_state();
var inst_34252 = inst_34296;
var state_34325__$1 = (function (){var statearr_34354 = state_34325;
(statearr_34354[(15)] = inst_34295);

(statearr_34354[(7)] = inst_34252);

return statearr_34354;
})();
var statearr_34355_35710 = state_34325__$1;
(statearr_34355_35710[(2)] = null);

(statearr_34355_35710[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (25))){
var inst_34321 = (state_34325[(2)]);
var state_34325__$1 = state_34325;
var statearr_34356_35711 = state_34325__$1;
(statearr_34356_35711[(2)] = inst_34321);

(statearr_34356_35711[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (34))){
var inst_34319 = (state_34325[(2)]);
var state_34325__$1 = state_34325;
var statearr_34357_35712 = state_34325__$1;
(statearr_34357_35712[(2)] = inst_34319);

(statearr_34357_35712[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (17))){
var state_34325__$1 = state_34325;
var statearr_34358_35713 = state_34325__$1;
(statearr_34358_35713[(2)] = false);

(statearr_34358_35713[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (3))){
var state_34325__$1 = state_34325;
var statearr_34359_35714 = state_34325__$1;
(statearr_34359_35714[(2)] = false);

(statearr_34359_35714[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (12))){
var inst_34323 = (state_34325[(2)]);
var state_34325__$1 = state_34325;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34325__$1,inst_34323);
} else {
if((state_val_34326 === (2))){
var inst_34227 = (state_34325[(8)]);
var inst_34232 = inst_34227.cljs$lang$protocol_mask$partition0$;
var inst_34233 = (inst_34232 & (64));
var inst_34234 = inst_34227.cljs$core$ISeq$;
var inst_34235 = (cljs.core.PROTOCOL_SENTINEL === inst_34234);
var inst_34236 = ((inst_34233) || (inst_34235));
var state_34325__$1 = state_34325;
if(cljs.core.truth_(inst_34236)){
var statearr_34360_35715 = state_34325__$1;
(statearr_34360_35715[(1)] = (5));

} else {
var statearr_34361_35716 = state_34325__$1;
(statearr_34361_35716[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (23))){
var inst_34284 = (state_34325[(14)]);
var inst_34290 = (inst_34284 == null);
var state_34325__$1 = state_34325;
if(cljs.core.truth_(inst_34290)){
var statearr_34362_35717 = state_34325__$1;
(statearr_34362_35717[(1)] = (26));

} else {
var statearr_34363_35718 = state_34325__$1;
(statearr_34363_35718[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (35))){
var inst_34310 = (state_34325[(2)]);
var state_34325__$1 = state_34325;
if(cljs.core.truth_(inst_34310)){
var statearr_34364_35719 = state_34325__$1;
(statearr_34364_35719[(1)] = (36));

} else {
var statearr_34365_35720 = state_34325__$1;
(statearr_34365_35720[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (19))){
var inst_34252 = (state_34325[(7)]);
var inst_34272 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_34252);
var state_34325__$1 = state_34325;
var statearr_34366_35722 = state_34325__$1;
(statearr_34366_35722[(2)] = inst_34272);

(statearr_34366_35722[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (11))){
var inst_34252 = (state_34325[(7)]);
var inst_34256 = (inst_34252 == null);
var inst_34257 = cljs.core.not(inst_34256);
var state_34325__$1 = state_34325;
if(inst_34257){
var statearr_34367_35723 = state_34325__$1;
(statearr_34367_35723[(1)] = (13));

} else {
var statearr_34368_35724 = state_34325__$1;
(statearr_34368_35724[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (9))){
var inst_34227 = (state_34325[(8)]);
var state_34325__$1 = state_34325;
var statearr_34369_35725 = state_34325__$1;
(statearr_34369_35725[(2)] = inst_34227);

(statearr_34369_35725[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (5))){
var state_34325__$1 = state_34325;
var statearr_34370_35726 = state_34325__$1;
(statearr_34370_35726[(2)] = true);

(statearr_34370_35726[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (14))){
var state_34325__$1 = state_34325;
var statearr_34371_35727 = state_34325__$1;
(statearr_34371_35727[(2)] = false);

(statearr_34371_35727[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (26))){
var inst_34285 = (state_34325[(11)]);
var inst_34292 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_34285);
var state_34325__$1 = state_34325;
var statearr_34372_35735 = state_34325__$1;
(statearr_34372_35735[(2)] = inst_34292);

(statearr_34372_35735[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (16))){
var state_34325__$1 = state_34325;
var statearr_34373_35736 = state_34325__$1;
(statearr_34373_35736[(2)] = true);

(statearr_34373_35736[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (38))){
var inst_34315 = (state_34325[(2)]);
var state_34325__$1 = state_34325;
var statearr_34374_35737 = state_34325__$1;
(statearr_34374_35737[(2)] = inst_34315);

(statearr_34374_35737[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (30))){
var inst_34277 = (state_34325[(13)]);
var inst_34276 = (state_34325[(9)]);
var inst_34285 = (state_34325[(11)]);
var inst_34302 = cljs.core.empty_QMARK_(inst_34276);
var inst_34303 = (inst_34277.cljs$core$IFn$_invoke$arity$1 ? inst_34277.cljs$core$IFn$_invoke$arity$1(inst_34285) : inst_34277.call(null,inst_34285));
var inst_34304 = cljs.core.not(inst_34303);
var inst_34305 = ((inst_34302) && (inst_34304));
var state_34325__$1 = state_34325;
var statearr_34375_35738 = state_34325__$1;
(statearr_34375_35738[(2)] = inst_34305);

(statearr_34375_35738[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (10))){
var inst_34227 = (state_34325[(8)]);
var inst_34248 = (state_34325[(2)]);
var inst_34249 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34248,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34250 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34248,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34251 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34248,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34252 = inst_34227;
var state_34325__$1 = (function (){var statearr_34376 = state_34325;
(statearr_34376[(16)] = inst_34250);

(statearr_34376[(17)] = inst_34249);

(statearr_34376[(18)] = inst_34251);

(statearr_34376[(7)] = inst_34252);

return statearr_34376;
})();
var statearr_34377_35742 = state_34325__$1;
(statearr_34377_35742[(2)] = null);

(statearr_34377_35742[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (18))){
var inst_34267 = (state_34325[(2)]);
var state_34325__$1 = state_34325;
var statearr_34378_35743 = state_34325__$1;
(statearr_34378_35743[(2)] = inst_34267);

(statearr_34378_35743[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (37))){
var state_34325__$1 = state_34325;
var statearr_34379_35744 = state_34325__$1;
(statearr_34379_35744[(2)] = null);

(statearr_34379_35744[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34326 === (8))){
var inst_34227 = (state_34325[(8)]);
var inst_34245 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_34227);
var state_34325__$1 = state_34325;
var statearr_34380_35746 = state_34325__$1;
(statearr_34380_35746[(2)] = inst_34245);

(statearr_34380_35746[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33515__auto___35674,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__33352__auto__,c__33515__auto___35674,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__33353__auto__ = null;
var cljs$core$async$mix_$_state_machine__33353__auto____0 = (function (){
var statearr_34381 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34381[(0)] = cljs$core$async$mix_$_state_machine__33353__auto__);

(statearr_34381[(1)] = (1));

return statearr_34381;
});
var cljs$core$async$mix_$_state_machine__33353__auto____1 = (function (state_34325){
while(true){
var ret_value__33354__auto__ = (function (){try{while(true){
var result__33355__auto__ = switch__33352__auto__(state_34325);
if(cljs.core.keyword_identical_QMARK_(result__33355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33355__auto__;
}
break;
}
}catch (e34382){if((e34382 instanceof Object)){
var ex__33356__auto__ = e34382;
var statearr_34383_35747 = state_34325;
(statearr_34383_35747[(5)] = ex__33356__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34325);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34382;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35748 = state_34325;
state_34325 = G__35748;
continue;
} else {
return ret_value__33354__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33353__auto__ = function(state_34325){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33353__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33353__auto____1.call(this,state_34325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__33353__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33353__auto____0;
cljs$core$async$mix_$_state_machine__33353__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33353__auto____1;
return cljs$core$async$mix_$_state_machine__33353__auto__;
})()
;})(switch__33352__auto__,c__33515__auto___35674,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__33517__auto__ = (function (){var statearr_34384 = (f__33516__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33516__auto__.cljs$core$IFn$_invoke$arity$0() : f__33516__auto__.call(null));
(statearr_34384[(6)] = c__33515__auto___35674);

return statearr_34384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33517__auto__);
});})(c__33515__auto___35674,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4434__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4431__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4434__auto__.call(null,p,v,ch));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4431__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__34386 = arguments.length;
switch (G__34386) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4434__auto__.call(null,p));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4431__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4434__auto__.call(null,p,v));
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4431__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__34389 = arguments.length;
switch (G__34389) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4131__auto__,mults){
return (function (p1__34387_SHARP_){
if(cljs.core.truth_((p1__34387_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__34387_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__34387_SHARP_.call(null,topic)))){
return p1__34387_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__34387_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34390 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34390 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34391){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34391 = meta34391;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34390.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_34392,meta34391__$1){
var self__ = this;
var _34392__$1 = this;
return (new cljs.core.async.t_cljs$core$async34390(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34391__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34390.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_34392){
var self__ = this;
var _34392__$1 = this;
return self__.meta34391;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34390.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34390.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34390.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34390.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34390.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34390.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34390.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34390.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34391","meta34391",-962299627,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34390.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34390.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34390";

cljs.core.async.t_cljs$core$async34390.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async34390");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34390.
 */
cljs.core.async.__GT_t_cljs$core$async34390 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async34390(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34391){
return (new cljs.core.async.t_cljs$core$async34390(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34391));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async34390(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33515__auto___35767 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33515__auto___35767,mults,ensure_mult,p){
return (function (){
var f__33516__auto__ = (function (){var switch__33352__auto__ = ((function (c__33515__auto___35767,mults,ensure_mult,p){
return (function (state_34464){
var state_val_34465 = (state_34464[(1)]);
if((state_val_34465 === (7))){
var inst_34460 = (state_34464[(2)]);
var state_34464__$1 = state_34464;
var statearr_34466_35768 = state_34464__$1;
(statearr_34466_35768[(2)] = inst_34460);

(statearr_34466_35768[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34465 === (20))){
var state_34464__$1 = state_34464;
var statearr_34467_35769 = state_34464__$1;
(statearr_34467_35769[(2)] = null);

(statearr_34467_35769[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34465 === (1))){
var state_34464__$1 = state_34464;
var statearr_34468_35770 = state_34464__$1;
(statearr_34468_35770[(2)] = null);

(statearr_34468_35770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34465 === (24))){
var inst_34443 = (state_34464[(7)]);
var inst_34452 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_34443);
var state_34464__$1 = state_34464;
var statearr_34469_35771 = state_34464__$1;
(statearr_34469_35771[(2)] = inst_34452);

(statearr_34469_35771[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34465 === (4))){
var inst_34395 = (state_34464[(8)]);
var inst_34395__$1 = (state_34464[(2)]);
var inst_34396 = (inst_34395__$1 == null);
var state_34464__$1 = (function (){var statearr_34470 = state_34464;
(statearr_34470[(8)] = inst_34395__$1);

return statearr_34470;
})();
if(cljs.core.truth_(inst_34396)){
var statearr_34471_35772 = state_34464__$1;
(statearr_34471_35772[(1)] = (5));

} else {
var statearr_34472_35773 = state_34464__$1;
(statearr_34472_35773[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34465 === (15))){
var inst_34437 = (state_34464[(2)]);
var state_34464__$1 = state_34464;
var statearr_34473_35774 = state_34464__$1;
(statearr_34473_35774[(2)] = inst_34437);

(statearr_34473_35774[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34465 === (21))){
var inst_34457 = (state_34464[(2)]);
var state_34464__$1 = (function (){var statearr_34474 = state_34464;
(statearr_34474[(9)] = inst_34457);

return statearr_34474;
})();
var statearr_34475_35776 = state_34464__$1;
(statearr_34475_35776[(2)] = null);

(statearr_34475_35776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34465 === (13))){
var inst_34419 = (state_34464[(10)]);
var inst_34421 = cljs.core.chunked_seq_QMARK_(inst_34419);
var state_34464__$1 = state_34464;
if(inst_34421){
var statearr_34476_35777 = state_34464__$1;
(statearr_34476_35777[(1)] = (16));

} else {
var statearr_34477_35778 = state_34464__$1;
(statearr_34477_35778[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34465 === (22))){
var inst_34449 = (state_34464[(2)]);
var state_34464__$1 = state_34464;
if(cljs.core.truth_(inst_34449)){
var statearr_34478_35779 = state_34464__$1;
(statearr_34478_35779[(1)] = (23));

} else {
var statearr_34479_35780 = state_34464__$1;
(statearr_34479_35780[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34465 === (6))){
var inst_34443 = (state_34464[(7)]);
var inst_34395 = (state_34464[(8)]);
var inst_34445 = (state_34464[(11)]);
var inst_34443__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_34395) : topic_fn.call(null,inst_34395));
var inst_34444 = cljs.core.deref(mults);
var inst_34445__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34444,inst_34443__$1);
var state_34464__$1 = (function (){var statearr_34480 = state_34464;
(statearr_34480[(7)] = inst_34443__$1);

(statearr_34480[(11)] = inst_34445__$1);

return statearr_34480;
})();
if(cljs.core.truth_(inst_34445__$1)){
var statearr_34481_35781 = state_34464__$1;
(statearr_34481_35781[(1)] = (19));

} else {
var statearr_34482_35782 = state_34464__$1;
(statearr_34482_35782[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34465 === (25))){
var inst_34454 = (state_34464[(2)]);
var state_34464__$1 = state_34464;
var statearr_34483_35783 = state_34464__$1;
(statearr_34483_35783[(2)] = inst_34454);

(statearr_34483_35783[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34465 === (17))){
var inst_34419 = (state_34464[(10)]);
var inst_34428 = cljs.core.first(inst_34419);
var inst_34429 = cljs.core.async.muxch_STAR_(inst_34428);
var inst_34430 = cljs.core.async.close_BANG_(inst_34429);
var inst_34431 = cljs.core.next(inst_34419);
var inst_34405 = inst_34431;
var inst_34406 = null;
var inst_34407 = (0);
var inst_34408 = (0);
var state_34464__$1 = (function (){var statearr_34484 = state_34464;
(statearr_34484[(12)] = inst_34407);

(statearr_34484[(13)] = inst_34430);

(statearr_34484[(14)] = inst_34408);

(statearr_34484[(15)] = inst_34405);

(statearr_34484[(16)] = inst_34406);

return statearr_34484;
})();
var statearr_34485_35785 = state_34464__$1;
(statearr_34485_35785[(2)] = null);

(statearr_34485_35785[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34465 === (3))){
var inst_34462 = (state_34464[(2)]);
var state_34464__$1 = state_34464;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34464__$1,inst_34462);
} else {
if((state_val_34465 === (12))){
var inst_34439 = (state_34464[(2)]);
var state_34464__$1 = state_34464;
var statearr_34486_35786 = state_34464__$1;
(statearr_34486_35786[(2)] = inst_34439);

(statearr_34486_35786[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34465 === (2))){
var state_34464__$1 = state_34464;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34464__$1,(4),ch);
} else {
if((state_val_34465 === (23))){
var state_34464__$1 = state_34464;
var statearr_34487_35787 = state_34464__$1;
(statearr_34487_35787[(2)] = null);

(statearr_34487_35787[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34465 === (19))){
var inst_34395 = (state_34464[(8)]);
var inst_34445 = (state_34464[(11)]);
var inst_34447 = cljs.core.async.muxch_STAR_(inst_34445);
var state_34464__$1 = state_34464;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34464__$1,(22),inst_34447,inst_34395);
} else {
if((state_val_34465 === (11))){
var inst_34405 = (state_34464[(15)]);
var inst_34419 = (state_34464[(10)]);
var inst_34419__$1 = cljs.core.seq(inst_34405);
var state_34464__$1 = (function (){var statearr_34488 = state_34464;
(statearr_34488[(10)] = inst_34419__$1);

return statearr_34488;
})();
if(inst_34419__$1){
var statearr_34489_35791 = state_34464__$1;
(statearr_34489_35791[(1)] = (13));

} else {
var statearr_34490_35792 = state_34464__$1;
(statearr_34490_35792[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34465 === (9))){
var inst_34441 = (state_34464[(2)]);
var state_34464__$1 = state_34464;
var statearr_34491_35793 = state_34464__$1;
(statearr_34491_35793[(2)] = inst_34441);

(statearr_34491_35793[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34465 === (5))){
var inst_34402 = cljs.core.deref(mults);
var inst_34403 = cljs.core.vals(inst_34402);
var inst_34404 = cljs.core.seq(inst_34403);
var inst_34405 = inst_34404;
var inst_34406 = null;
var inst_34407 = (0);
var inst_34408 = (0);
var state_34464__$1 = (function (){var statearr_34492 = state_34464;
(statearr_34492[(12)] = inst_34407);

(statearr_34492[(14)] = inst_34408);

(statearr_34492[(15)] = inst_34405);

(statearr_34492[(16)] = inst_34406);

return statearr_34492;
})();
var statearr_34493_35801 = state_34464__$1;
(statearr_34493_35801[(2)] = null);

(statearr_34493_35801[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34465 === (14))){
var state_34464__$1 = state_34464;
var statearr_34497_35802 = state_34464__$1;
(statearr_34497_35802[(2)] = null);

(statearr_34497_35802[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34465 === (16))){
var inst_34419 = (state_34464[(10)]);
var inst_34423 = cljs.core.chunk_first(inst_34419);
var inst_34424 = cljs.core.chunk_rest(inst_34419);
var inst_34425 = cljs.core.count(inst_34423);
var inst_34405 = inst_34424;
var inst_34406 = inst_34423;
var inst_34407 = inst_34425;
var inst_34408 = (0);
var state_34464__$1 = (function (){var statearr_34498 = state_34464;
(statearr_34498[(12)] = inst_34407);

(statearr_34498[(14)] = inst_34408);

(statearr_34498[(15)] = inst_34405);

(statearr_34498[(16)] = inst_34406);

return statearr_34498;
})();
var statearr_34499_35803 = state_34464__$1;
(statearr_34499_35803[(2)] = null);

(statearr_34499_35803[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34465 === (10))){
var inst_34407 = (state_34464[(12)]);
var inst_34408 = (state_34464[(14)]);
var inst_34405 = (state_34464[(15)]);
var inst_34406 = (state_34464[(16)]);
var inst_34413 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34406,inst_34408);
var inst_34414 = cljs.core.async.muxch_STAR_(inst_34413);
var inst_34415 = cljs.core.async.close_BANG_(inst_34414);
var inst_34416 = (inst_34408 + (1));
var tmp34494 = inst_34407;
var tmp34495 = inst_34405;
var tmp34496 = inst_34406;
var inst_34405__$1 = tmp34495;
var inst_34406__$1 = tmp34496;
var inst_34407__$1 = tmp34494;
var inst_34408__$1 = inst_34416;
var state_34464__$1 = (function (){var statearr_34500 = state_34464;
(statearr_34500[(12)] = inst_34407__$1);

(statearr_34500[(14)] = inst_34408__$1);

(statearr_34500[(15)] = inst_34405__$1);

(statearr_34500[(16)] = inst_34406__$1);

(statearr_34500[(17)] = inst_34415);

return statearr_34500;
})();
var statearr_34501_35804 = state_34464__$1;
(statearr_34501_35804[(2)] = null);

(statearr_34501_35804[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34465 === (18))){
var inst_34434 = (state_34464[(2)]);
var state_34464__$1 = state_34464;
var statearr_34502_35805 = state_34464__$1;
(statearr_34502_35805[(2)] = inst_34434);

(statearr_34502_35805[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34465 === (8))){
var inst_34407 = (state_34464[(12)]);
var inst_34408 = (state_34464[(14)]);
var inst_34410 = (inst_34408 < inst_34407);
var inst_34411 = inst_34410;
var state_34464__$1 = state_34464;
if(cljs.core.truth_(inst_34411)){
var statearr_34503_35806 = state_34464__$1;
(statearr_34503_35806[(1)] = (10));

} else {
var statearr_34504_35807 = state_34464__$1;
(statearr_34504_35807[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33515__auto___35767,mults,ensure_mult,p))
;
return ((function (switch__33352__auto__,c__33515__auto___35767,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__33353__auto__ = null;
var cljs$core$async$state_machine__33353__auto____0 = (function (){
var statearr_34505 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34505[(0)] = cljs$core$async$state_machine__33353__auto__);

(statearr_34505[(1)] = (1));

return statearr_34505;
});
var cljs$core$async$state_machine__33353__auto____1 = (function (state_34464){
while(true){
var ret_value__33354__auto__ = (function (){try{while(true){
var result__33355__auto__ = switch__33352__auto__(state_34464);
if(cljs.core.keyword_identical_QMARK_(result__33355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33355__auto__;
}
break;
}
}catch (e34506){if((e34506 instanceof Object)){
var ex__33356__auto__ = e34506;
var statearr_34507_35811 = state_34464;
(statearr_34507_35811[(5)] = ex__33356__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34464);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34506;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35812 = state_34464;
state_34464 = G__35812;
continue;
} else {
return ret_value__33354__auto__;
}
break;
}
});
cljs$core$async$state_machine__33353__auto__ = function(state_34464){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33353__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33353__auto____1.call(this,state_34464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33353__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33353__auto____0;
cljs$core$async$state_machine__33353__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33353__auto____1;
return cljs$core$async$state_machine__33353__auto__;
})()
;})(switch__33352__auto__,c__33515__auto___35767,mults,ensure_mult,p))
})();
var state__33517__auto__ = (function (){var statearr_34508 = (f__33516__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33516__auto__.cljs$core$IFn$_invoke$arity$0() : f__33516__auto__.call(null));
(statearr_34508[(6)] = c__33515__auto___35767);

return statearr_34508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33517__auto__);
});})(c__33515__auto___35767,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__34510 = arguments.length;
switch (G__34510) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__34512 = arguments.length;
switch (G__34512) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__34514 = arguments.length;
switch (G__34514) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__33515__auto___35838 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33515__auto___35838,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__33516__auto__ = (function (){var switch__33352__auto__ = ((function (c__33515__auto___35838,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_34553){
var state_val_34554 = (state_34553[(1)]);
if((state_val_34554 === (7))){
var state_34553__$1 = state_34553;
var statearr_34555_35839 = state_34553__$1;
(statearr_34555_35839[(2)] = null);

(statearr_34555_35839[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34554 === (1))){
var state_34553__$1 = state_34553;
var statearr_34556_35840 = state_34553__$1;
(statearr_34556_35840[(2)] = null);

(statearr_34556_35840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34554 === (4))){
var inst_34517 = (state_34553[(7)]);
var inst_34519 = (inst_34517 < cnt);
var state_34553__$1 = state_34553;
if(cljs.core.truth_(inst_34519)){
var statearr_34557_35847 = state_34553__$1;
(statearr_34557_35847[(1)] = (6));

} else {
var statearr_34558_35848 = state_34553__$1;
(statearr_34558_35848[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34554 === (15))){
var inst_34549 = (state_34553[(2)]);
var state_34553__$1 = state_34553;
var statearr_34559_35849 = state_34553__$1;
(statearr_34559_35849[(2)] = inst_34549);

(statearr_34559_35849[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34554 === (13))){
var inst_34542 = cljs.core.async.close_BANG_(out);
var state_34553__$1 = state_34553;
var statearr_34560_35850 = state_34553__$1;
(statearr_34560_35850[(2)] = inst_34542);

(statearr_34560_35850[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34554 === (6))){
var state_34553__$1 = state_34553;
var statearr_34561_35851 = state_34553__$1;
(statearr_34561_35851[(2)] = null);

(statearr_34561_35851[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34554 === (3))){
var inst_34551 = (state_34553[(2)]);
var state_34553__$1 = state_34553;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34553__$1,inst_34551);
} else {
if((state_val_34554 === (12))){
var inst_34539 = (state_34553[(8)]);
var inst_34539__$1 = (state_34553[(2)]);
var inst_34540 = cljs.core.some(cljs.core.nil_QMARK_,inst_34539__$1);
var state_34553__$1 = (function (){var statearr_34562 = state_34553;
(statearr_34562[(8)] = inst_34539__$1);

return statearr_34562;
})();
if(cljs.core.truth_(inst_34540)){
var statearr_34563_35852 = state_34553__$1;
(statearr_34563_35852[(1)] = (13));

} else {
var statearr_34564_35853 = state_34553__$1;
(statearr_34564_35853[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34554 === (2))){
var inst_34516 = cljs.core.reset_BANG_(dctr,cnt);
var inst_34517 = (0);
var state_34553__$1 = (function (){var statearr_34565 = state_34553;
(statearr_34565[(7)] = inst_34517);

(statearr_34565[(9)] = inst_34516);

return statearr_34565;
})();
var statearr_34566_35854 = state_34553__$1;
(statearr_34566_35854[(2)] = null);

(statearr_34566_35854[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34554 === (11))){
var inst_34517 = (state_34553[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_34553,(10),Object,null,(9));
var inst_34526 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_34517) : chs__$1.call(null,inst_34517));
var inst_34527 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_34517) : done.call(null,inst_34517));
var inst_34528 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_34526,inst_34527);
var state_34553__$1 = state_34553;
var statearr_34567_35855 = state_34553__$1;
(statearr_34567_35855[(2)] = inst_34528);


cljs.core.async.impl.ioc_helpers.process_exception(state_34553__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34554 === (9))){
var inst_34517 = (state_34553[(7)]);
var inst_34530 = (state_34553[(2)]);
var inst_34531 = (inst_34517 + (1));
var inst_34517__$1 = inst_34531;
var state_34553__$1 = (function (){var statearr_34568 = state_34553;
(statearr_34568[(7)] = inst_34517__$1);

(statearr_34568[(10)] = inst_34530);

return statearr_34568;
})();
var statearr_34569_35856 = state_34553__$1;
(statearr_34569_35856[(2)] = null);

(statearr_34569_35856[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34554 === (5))){
var inst_34537 = (state_34553[(2)]);
var state_34553__$1 = (function (){var statearr_34570 = state_34553;
(statearr_34570[(11)] = inst_34537);

return statearr_34570;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34553__$1,(12),dchan);
} else {
if((state_val_34554 === (14))){
var inst_34539 = (state_34553[(8)]);
var inst_34544 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_34539);
var state_34553__$1 = state_34553;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34553__$1,(16),out,inst_34544);
} else {
if((state_val_34554 === (16))){
var inst_34546 = (state_34553[(2)]);
var state_34553__$1 = (function (){var statearr_34571 = state_34553;
(statearr_34571[(12)] = inst_34546);

return statearr_34571;
})();
var statearr_34572_35857 = state_34553__$1;
(statearr_34572_35857[(2)] = null);

(statearr_34572_35857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34554 === (10))){
var inst_34521 = (state_34553[(2)]);
var inst_34522 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_34553__$1 = (function (){var statearr_34573 = state_34553;
(statearr_34573[(13)] = inst_34521);

return statearr_34573;
})();
var statearr_34574_35858 = state_34553__$1;
(statearr_34574_35858[(2)] = inst_34522);


cljs.core.async.impl.ioc_helpers.process_exception(state_34553__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34554 === (8))){
var inst_34535 = (state_34553[(2)]);
var state_34553__$1 = state_34553;
var statearr_34575_35859 = state_34553__$1;
(statearr_34575_35859[(2)] = inst_34535);

(statearr_34575_35859[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33515__auto___35838,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__33352__auto__,c__33515__auto___35838,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__33353__auto__ = null;
var cljs$core$async$state_machine__33353__auto____0 = (function (){
var statearr_34576 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34576[(0)] = cljs$core$async$state_machine__33353__auto__);

(statearr_34576[(1)] = (1));

return statearr_34576;
});
var cljs$core$async$state_machine__33353__auto____1 = (function (state_34553){
while(true){
var ret_value__33354__auto__ = (function (){try{while(true){
var result__33355__auto__ = switch__33352__auto__(state_34553);
if(cljs.core.keyword_identical_QMARK_(result__33355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33355__auto__;
}
break;
}
}catch (e34577){if((e34577 instanceof Object)){
var ex__33356__auto__ = e34577;
var statearr_34578_35866 = state_34553;
(statearr_34578_35866[(5)] = ex__33356__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34553);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34577;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35867 = state_34553;
state_34553 = G__35867;
continue;
} else {
return ret_value__33354__auto__;
}
break;
}
});
cljs$core$async$state_machine__33353__auto__ = function(state_34553){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33353__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33353__auto____1.call(this,state_34553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33353__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33353__auto____0;
cljs$core$async$state_machine__33353__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33353__auto____1;
return cljs$core$async$state_machine__33353__auto__;
})()
;})(switch__33352__auto__,c__33515__auto___35838,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__33517__auto__ = (function (){var statearr_34579 = (f__33516__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33516__auto__.cljs$core$IFn$_invoke$arity$0() : f__33516__auto__.call(null));
(statearr_34579[(6)] = c__33515__auto___35838);

return statearr_34579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33517__auto__);
});})(c__33515__auto___35838,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__34582 = arguments.length;
switch (G__34582) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33515__auto___35869 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33515__auto___35869,out){
return (function (){
var f__33516__auto__ = (function (){var switch__33352__auto__ = ((function (c__33515__auto___35869,out){
return (function (state_34614){
var state_val_34615 = (state_34614[(1)]);
if((state_val_34615 === (7))){
var inst_34594 = (state_34614[(7)]);
var inst_34593 = (state_34614[(8)]);
var inst_34593__$1 = (state_34614[(2)]);
var inst_34594__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34593__$1,(0),null);
var inst_34595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34593__$1,(1),null);
var inst_34596 = (inst_34594__$1 == null);
var state_34614__$1 = (function (){var statearr_34616 = state_34614;
(statearr_34616[(9)] = inst_34595);

(statearr_34616[(7)] = inst_34594__$1);

(statearr_34616[(8)] = inst_34593__$1);

return statearr_34616;
})();
if(cljs.core.truth_(inst_34596)){
var statearr_34617_35870 = state_34614__$1;
(statearr_34617_35870[(1)] = (8));

} else {
var statearr_34618_35871 = state_34614__$1;
(statearr_34618_35871[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34615 === (1))){
var inst_34583 = cljs.core.vec(chs);
var inst_34584 = inst_34583;
var state_34614__$1 = (function (){var statearr_34619 = state_34614;
(statearr_34619[(10)] = inst_34584);

return statearr_34619;
})();
var statearr_34620_35878 = state_34614__$1;
(statearr_34620_35878[(2)] = null);

(statearr_34620_35878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34615 === (4))){
var inst_34584 = (state_34614[(10)]);
var state_34614__$1 = state_34614;
return cljs.core.async.ioc_alts_BANG_(state_34614__$1,(7),inst_34584);
} else {
if((state_val_34615 === (6))){
var inst_34610 = (state_34614[(2)]);
var state_34614__$1 = state_34614;
var statearr_34621_35879 = state_34614__$1;
(statearr_34621_35879[(2)] = inst_34610);

(statearr_34621_35879[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34615 === (3))){
var inst_34612 = (state_34614[(2)]);
var state_34614__$1 = state_34614;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34614__$1,inst_34612);
} else {
if((state_val_34615 === (2))){
var inst_34584 = (state_34614[(10)]);
var inst_34586 = cljs.core.count(inst_34584);
var inst_34587 = (inst_34586 > (0));
var state_34614__$1 = state_34614;
if(cljs.core.truth_(inst_34587)){
var statearr_34623_35880 = state_34614__$1;
(statearr_34623_35880[(1)] = (4));

} else {
var statearr_34624_35881 = state_34614__$1;
(statearr_34624_35881[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34615 === (11))){
var inst_34584 = (state_34614[(10)]);
var inst_34603 = (state_34614[(2)]);
var tmp34622 = inst_34584;
var inst_34584__$1 = tmp34622;
var state_34614__$1 = (function (){var statearr_34625 = state_34614;
(statearr_34625[(10)] = inst_34584__$1);

(statearr_34625[(11)] = inst_34603);

return statearr_34625;
})();
var statearr_34626_35882 = state_34614__$1;
(statearr_34626_35882[(2)] = null);

(statearr_34626_35882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34615 === (9))){
var inst_34594 = (state_34614[(7)]);
var state_34614__$1 = state_34614;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34614__$1,(11),out,inst_34594);
} else {
if((state_val_34615 === (5))){
var inst_34608 = cljs.core.async.close_BANG_(out);
var state_34614__$1 = state_34614;
var statearr_34627_35883 = state_34614__$1;
(statearr_34627_35883[(2)] = inst_34608);

(statearr_34627_35883[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34615 === (10))){
var inst_34606 = (state_34614[(2)]);
var state_34614__$1 = state_34614;
var statearr_34628_35884 = state_34614__$1;
(statearr_34628_35884[(2)] = inst_34606);

(statearr_34628_35884[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34615 === (8))){
var inst_34584 = (state_34614[(10)]);
var inst_34595 = (state_34614[(9)]);
var inst_34594 = (state_34614[(7)]);
var inst_34593 = (state_34614[(8)]);
var inst_34598 = (function (){var cs = inst_34584;
var vec__34589 = inst_34593;
var v = inst_34594;
var c = inst_34595;
return ((function (cs,vec__34589,v,c,inst_34584,inst_34595,inst_34594,inst_34593,state_val_34615,c__33515__auto___35869,out){
return (function (p1__34580_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__34580_SHARP_);
});
;})(cs,vec__34589,v,c,inst_34584,inst_34595,inst_34594,inst_34593,state_val_34615,c__33515__auto___35869,out))
})();
var inst_34599 = cljs.core.filterv(inst_34598,inst_34584);
var inst_34584__$1 = inst_34599;
var state_34614__$1 = (function (){var statearr_34629 = state_34614;
(statearr_34629[(10)] = inst_34584__$1);

return statearr_34629;
})();
var statearr_34630_35888 = state_34614__$1;
(statearr_34630_35888[(2)] = null);

(statearr_34630_35888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__33515__auto___35869,out))
;
return ((function (switch__33352__auto__,c__33515__auto___35869,out){
return (function() {
var cljs$core$async$state_machine__33353__auto__ = null;
var cljs$core$async$state_machine__33353__auto____0 = (function (){
var statearr_34631 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34631[(0)] = cljs$core$async$state_machine__33353__auto__);

(statearr_34631[(1)] = (1));

return statearr_34631;
});
var cljs$core$async$state_machine__33353__auto____1 = (function (state_34614){
while(true){
var ret_value__33354__auto__ = (function (){try{while(true){
var result__33355__auto__ = switch__33352__auto__(state_34614);
if(cljs.core.keyword_identical_QMARK_(result__33355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33355__auto__;
}
break;
}
}catch (e34632){if((e34632 instanceof Object)){
var ex__33356__auto__ = e34632;
var statearr_34633_35892 = state_34614;
(statearr_34633_35892[(5)] = ex__33356__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34614);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34632;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35895 = state_34614;
state_34614 = G__35895;
continue;
} else {
return ret_value__33354__auto__;
}
break;
}
});
cljs$core$async$state_machine__33353__auto__ = function(state_34614){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33353__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33353__auto____1.call(this,state_34614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33353__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33353__auto____0;
cljs$core$async$state_machine__33353__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33353__auto____1;
return cljs$core$async$state_machine__33353__auto__;
})()
;})(switch__33352__auto__,c__33515__auto___35869,out))
})();
var state__33517__auto__ = (function (){var statearr_34634 = (f__33516__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33516__auto__.cljs$core$IFn$_invoke$arity$0() : f__33516__auto__.call(null));
(statearr_34634[(6)] = c__33515__auto___35869);

return statearr_34634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33517__auto__);
});})(c__33515__auto___35869,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__34636 = arguments.length;
switch (G__34636) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33515__auto___35897 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33515__auto___35897,out){
return (function (){
var f__33516__auto__ = (function (){var switch__33352__auto__ = ((function (c__33515__auto___35897,out){
return (function (state_34660){
var state_val_34661 = (state_34660[(1)]);
if((state_val_34661 === (7))){
var inst_34642 = (state_34660[(7)]);
var inst_34642__$1 = (state_34660[(2)]);
var inst_34643 = (inst_34642__$1 == null);
var inst_34644 = cljs.core.not(inst_34643);
var state_34660__$1 = (function (){var statearr_34662 = state_34660;
(statearr_34662[(7)] = inst_34642__$1);

return statearr_34662;
})();
if(inst_34644){
var statearr_34663_35900 = state_34660__$1;
(statearr_34663_35900[(1)] = (8));

} else {
var statearr_34664_35901 = state_34660__$1;
(statearr_34664_35901[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34661 === (1))){
var inst_34637 = (0);
var state_34660__$1 = (function (){var statearr_34665 = state_34660;
(statearr_34665[(8)] = inst_34637);

return statearr_34665;
})();
var statearr_34666_35902 = state_34660__$1;
(statearr_34666_35902[(2)] = null);

(statearr_34666_35902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34661 === (4))){
var state_34660__$1 = state_34660;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34660__$1,(7),ch);
} else {
if((state_val_34661 === (6))){
var inst_34655 = (state_34660[(2)]);
var state_34660__$1 = state_34660;
var statearr_34667_35903 = state_34660__$1;
(statearr_34667_35903[(2)] = inst_34655);

(statearr_34667_35903[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34661 === (3))){
var inst_34657 = (state_34660[(2)]);
var inst_34658 = cljs.core.async.close_BANG_(out);
var state_34660__$1 = (function (){var statearr_34668 = state_34660;
(statearr_34668[(9)] = inst_34657);

return statearr_34668;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34660__$1,inst_34658);
} else {
if((state_val_34661 === (2))){
var inst_34637 = (state_34660[(8)]);
var inst_34639 = (inst_34637 < n);
var state_34660__$1 = state_34660;
if(cljs.core.truth_(inst_34639)){
var statearr_34669_35904 = state_34660__$1;
(statearr_34669_35904[(1)] = (4));

} else {
var statearr_34670_35905 = state_34660__$1;
(statearr_34670_35905[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34661 === (11))){
var inst_34637 = (state_34660[(8)]);
var inst_34647 = (state_34660[(2)]);
var inst_34648 = (inst_34637 + (1));
var inst_34637__$1 = inst_34648;
var state_34660__$1 = (function (){var statearr_34671 = state_34660;
(statearr_34671[(10)] = inst_34647);

(statearr_34671[(8)] = inst_34637__$1);

return statearr_34671;
})();
var statearr_34672_35906 = state_34660__$1;
(statearr_34672_35906[(2)] = null);

(statearr_34672_35906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34661 === (9))){
var state_34660__$1 = state_34660;
var statearr_34673_35907 = state_34660__$1;
(statearr_34673_35907[(2)] = null);

(statearr_34673_35907[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34661 === (5))){
var state_34660__$1 = state_34660;
var statearr_34674_35911 = state_34660__$1;
(statearr_34674_35911[(2)] = null);

(statearr_34674_35911[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34661 === (10))){
var inst_34652 = (state_34660[(2)]);
var state_34660__$1 = state_34660;
var statearr_34675_35912 = state_34660__$1;
(statearr_34675_35912[(2)] = inst_34652);

(statearr_34675_35912[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34661 === (8))){
var inst_34642 = (state_34660[(7)]);
var state_34660__$1 = state_34660;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34660__$1,(11),out,inst_34642);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__33515__auto___35897,out))
;
return ((function (switch__33352__auto__,c__33515__auto___35897,out){
return (function() {
var cljs$core$async$state_machine__33353__auto__ = null;
var cljs$core$async$state_machine__33353__auto____0 = (function (){
var statearr_34676 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34676[(0)] = cljs$core$async$state_machine__33353__auto__);

(statearr_34676[(1)] = (1));

return statearr_34676;
});
var cljs$core$async$state_machine__33353__auto____1 = (function (state_34660){
while(true){
var ret_value__33354__auto__ = (function (){try{while(true){
var result__33355__auto__ = switch__33352__auto__(state_34660);
if(cljs.core.keyword_identical_QMARK_(result__33355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33355__auto__;
}
break;
}
}catch (e34677){if((e34677 instanceof Object)){
var ex__33356__auto__ = e34677;
var statearr_34678_35919 = state_34660;
(statearr_34678_35919[(5)] = ex__33356__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34660);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34677;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35920 = state_34660;
state_34660 = G__35920;
continue;
} else {
return ret_value__33354__auto__;
}
break;
}
});
cljs$core$async$state_machine__33353__auto__ = function(state_34660){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33353__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33353__auto____1.call(this,state_34660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33353__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33353__auto____0;
cljs$core$async$state_machine__33353__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33353__auto____1;
return cljs$core$async$state_machine__33353__auto__;
})()
;})(switch__33352__auto__,c__33515__auto___35897,out))
})();
var state__33517__auto__ = (function (){var statearr_34679 = (f__33516__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33516__auto__.cljs$core$IFn$_invoke$arity$0() : f__33516__auto__.call(null));
(statearr_34679[(6)] = c__33515__auto___35897);

return statearr_34679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33517__auto__);
});})(c__33515__auto___35897,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34681 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34681 = (function (f,ch,meta34682){
this.f = f;
this.ch = ch;
this.meta34682 = meta34682;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34681.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34683,meta34682__$1){
var self__ = this;
var _34683__$1 = this;
return (new cljs.core.async.t_cljs$core$async34681(self__.f,self__.ch,meta34682__$1));
});

cljs.core.async.t_cljs$core$async34681.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34683){
var self__ = this;
var _34683__$1 = this;
return self__.meta34682;
});

cljs.core.async.t_cljs$core$async34681.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34681.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async34681.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async34681.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34681.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34684 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34684 = (function (f,ch,meta34682,_,fn1,meta34685){
this.f = f;
this.ch = ch;
this.meta34682 = meta34682;
this._ = _;
this.fn1 = fn1;
this.meta34685 = meta34685;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34684.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_34686,meta34685__$1){
var self__ = this;
var _34686__$1 = this;
return (new cljs.core.async.t_cljs$core$async34684(self__.f,self__.ch,self__.meta34682,self__._,self__.fn1,meta34685__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async34684.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_34686){
var self__ = this;
var _34686__$1 = this;
return self__.meta34685;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34684.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34684.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34684.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34684.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__34680_SHARP_){
var G__34687 = (((p1__34680_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__34680_SHARP_) : self__.f.call(null,p1__34680_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__34687) : f1.call(null,G__34687));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async34684.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34682","meta34682",1278319027,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34681","cljs.core.async/t_cljs$core$async34681",-138457177,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34685","meta34685",-1750548554,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34684.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34684.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34684";

cljs.core.async.t_cljs$core$async34684.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async34684");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34684.
 */
cljs.core.async.__GT_t_cljs$core$async34684 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34684(f__$1,ch__$1,meta34682__$1,___$2,fn1__$1,meta34685){
return (new cljs.core.async.t_cljs$core$async34684(f__$1,ch__$1,meta34682__$1,___$2,fn1__$1,meta34685));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async34684(self__.f,self__.ch,self__.meta34682,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__34688 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__34688) : self__.f.call(null,G__34688));
})());
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async34681.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34681.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async34681.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34682","meta34682",1278319027,null)], null);
});

cljs.core.async.t_cljs$core$async34681.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34681.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34681";

cljs.core.async.t_cljs$core$async34681.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async34681");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34681.
 */
cljs.core.async.__GT_t_cljs$core$async34681 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34681(f__$1,ch__$1,meta34682){
return (new cljs.core.async.t_cljs$core$async34681(f__$1,ch__$1,meta34682));
});

}

return (new cljs.core.async.t_cljs$core$async34681(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34689 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34689 = (function (f,ch,meta34690){
this.f = f;
this.ch = ch;
this.meta34690 = meta34690;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34689.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34691,meta34690__$1){
var self__ = this;
var _34691__$1 = this;
return (new cljs.core.async.t_cljs$core$async34689(self__.f,self__.ch,meta34690__$1));
});

cljs.core.async.t_cljs$core$async34689.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34691){
var self__ = this;
var _34691__$1 = this;
return self__.meta34690;
});

cljs.core.async.t_cljs$core$async34689.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34689.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async34689.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34689.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34689.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34689.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
});

cljs.core.async.t_cljs$core$async34689.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34690","meta34690",-2038414041,null)], null);
});

cljs.core.async.t_cljs$core$async34689.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34689.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34689";

cljs.core.async.t_cljs$core$async34689.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async34689");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34689.
 */
cljs.core.async.__GT_t_cljs$core$async34689 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34689(f__$1,ch__$1,meta34690){
return (new cljs.core.async.t_cljs$core$async34689(f__$1,ch__$1,meta34690));
});

}

return (new cljs.core.async.t_cljs$core$async34689(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34692 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34692 = (function (p,ch,meta34693){
this.p = p;
this.ch = ch;
this.meta34693 = meta34693;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34692.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34694,meta34693__$1){
var self__ = this;
var _34694__$1 = this;
return (new cljs.core.async.t_cljs$core$async34692(self__.p,self__.ch,meta34693__$1));
});

cljs.core.async.t_cljs$core$async34692.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34694){
var self__ = this;
var _34694__$1 = this;
return self__.meta34693;
});

cljs.core.async.t_cljs$core$async34692.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34692.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t_cljs$core$async34692.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t_cljs$core$async34692.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34692.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34692.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34692.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t_cljs$core$async34692.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34693","meta34693",840117525,null)], null);
});

cljs.core.async.t_cljs$core$async34692.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34692.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34692";

cljs.core.async.t_cljs$core$async34692.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write(writer__4375__auto__,"cljs.core.async/t_cljs$core$async34692");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34692.
 */
cljs.core.async.__GT_t_cljs$core$async34692 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34692(p__$1,ch__$1,meta34693){
return (new cljs.core.async.t_cljs$core$async34692(p__$1,ch__$1,meta34693));
});

}

return (new cljs.core.async.t_cljs$core$async34692(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__34696 = arguments.length;
switch (G__34696) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33515__auto___35933 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33515__auto___35933,out){
return (function (){
var f__33516__auto__ = (function (){var switch__33352__auto__ = ((function (c__33515__auto___35933,out){
return (function (state_34717){
var state_val_34718 = (state_34717[(1)]);
if((state_val_34718 === (7))){
var inst_34713 = (state_34717[(2)]);
var state_34717__$1 = state_34717;
var statearr_34719_35935 = state_34717__$1;
(statearr_34719_35935[(2)] = inst_34713);

(statearr_34719_35935[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34718 === (1))){
var state_34717__$1 = state_34717;
var statearr_34720_35937 = state_34717__$1;
(statearr_34720_35937[(2)] = null);

(statearr_34720_35937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34718 === (4))){
var inst_34699 = (state_34717[(7)]);
var inst_34699__$1 = (state_34717[(2)]);
var inst_34700 = (inst_34699__$1 == null);
var state_34717__$1 = (function (){var statearr_34721 = state_34717;
(statearr_34721[(7)] = inst_34699__$1);

return statearr_34721;
})();
if(cljs.core.truth_(inst_34700)){
var statearr_34722_35938 = state_34717__$1;
(statearr_34722_35938[(1)] = (5));

} else {
var statearr_34723_35939 = state_34717__$1;
(statearr_34723_35939[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34718 === (6))){
var inst_34699 = (state_34717[(7)]);
var inst_34704 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34699) : p.call(null,inst_34699));
var state_34717__$1 = state_34717;
if(cljs.core.truth_(inst_34704)){
var statearr_34724_35940 = state_34717__$1;
(statearr_34724_35940[(1)] = (8));

} else {
var statearr_34725_35941 = state_34717__$1;
(statearr_34725_35941[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34718 === (3))){
var inst_34715 = (state_34717[(2)]);
var state_34717__$1 = state_34717;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34717__$1,inst_34715);
} else {
if((state_val_34718 === (2))){
var state_34717__$1 = state_34717;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34717__$1,(4),ch);
} else {
if((state_val_34718 === (11))){
var inst_34707 = (state_34717[(2)]);
var state_34717__$1 = state_34717;
var statearr_34726_35942 = state_34717__$1;
(statearr_34726_35942[(2)] = inst_34707);

(statearr_34726_35942[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34718 === (9))){
var state_34717__$1 = state_34717;
var statearr_34727_35944 = state_34717__$1;
(statearr_34727_35944[(2)] = null);

(statearr_34727_35944[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34718 === (5))){
var inst_34702 = cljs.core.async.close_BANG_(out);
var state_34717__$1 = state_34717;
var statearr_34728_35948 = state_34717__$1;
(statearr_34728_35948[(2)] = inst_34702);

(statearr_34728_35948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34718 === (10))){
var inst_34710 = (state_34717[(2)]);
var state_34717__$1 = (function (){var statearr_34729 = state_34717;
(statearr_34729[(8)] = inst_34710);

return statearr_34729;
})();
var statearr_34730_35954 = state_34717__$1;
(statearr_34730_35954[(2)] = null);

(statearr_34730_35954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34718 === (8))){
var inst_34699 = (state_34717[(7)]);
var state_34717__$1 = state_34717;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34717__$1,(11),out,inst_34699);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__33515__auto___35933,out))
;
return ((function (switch__33352__auto__,c__33515__auto___35933,out){
return (function() {
var cljs$core$async$state_machine__33353__auto__ = null;
var cljs$core$async$state_machine__33353__auto____0 = (function (){
var statearr_34731 = [null,null,null,null,null,null,null,null,null];
(statearr_34731[(0)] = cljs$core$async$state_machine__33353__auto__);

(statearr_34731[(1)] = (1));

return statearr_34731;
});
var cljs$core$async$state_machine__33353__auto____1 = (function (state_34717){
while(true){
var ret_value__33354__auto__ = (function (){try{while(true){
var result__33355__auto__ = switch__33352__auto__(state_34717);
if(cljs.core.keyword_identical_QMARK_(result__33355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33355__auto__;
}
break;
}
}catch (e34732){if((e34732 instanceof Object)){
var ex__33356__auto__ = e34732;
var statearr_34733_35964 = state_34717;
(statearr_34733_35964[(5)] = ex__33356__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34717);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34732;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35965 = state_34717;
state_34717 = G__35965;
continue;
} else {
return ret_value__33354__auto__;
}
break;
}
});
cljs$core$async$state_machine__33353__auto__ = function(state_34717){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33353__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33353__auto____1.call(this,state_34717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33353__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33353__auto____0;
cljs$core$async$state_machine__33353__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33353__auto____1;
return cljs$core$async$state_machine__33353__auto__;
})()
;})(switch__33352__auto__,c__33515__auto___35933,out))
})();
var state__33517__auto__ = (function (){var statearr_34734 = (f__33516__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33516__auto__.cljs$core$IFn$_invoke$arity$0() : f__33516__auto__.call(null));
(statearr_34734[(6)] = c__33515__auto___35933);

return statearr_34734;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33517__auto__);
});})(c__33515__auto___35933,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34736 = arguments.length;
switch (G__34736) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__33515__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33515__auto__){
return (function (){
var f__33516__auto__ = (function (){var switch__33352__auto__ = ((function (c__33515__auto__){
return (function (state_34798){
var state_val_34799 = (state_34798[(1)]);
if((state_val_34799 === (7))){
var inst_34794 = (state_34798[(2)]);
var state_34798__$1 = state_34798;
var statearr_34800_35972 = state_34798__$1;
(statearr_34800_35972[(2)] = inst_34794);

(statearr_34800_35972[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34799 === (20))){
var inst_34764 = (state_34798[(7)]);
var inst_34775 = (state_34798[(2)]);
var inst_34776 = cljs.core.next(inst_34764);
var inst_34750 = inst_34776;
var inst_34751 = null;
var inst_34752 = (0);
var inst_34753 = (0);
var state_34798__$1 = (function (){var statearr_34801 = state_34798;
(statearr_34801[(8)] = inst_34751);

(statearr_34801[(9)] = inst_34775);

(statearr_34801[(10)] = inst_34750);

(statearr_34801[(11)] = inst_34753);

(statearr_34801[(12)] = inst_34752);

return statearr_34801;
})();
var statearr_34802_35989 = state_34798__$1;
(statearr_34802_35989[(2)] = null);

(statearr_34802_35989[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34799 === (1))){
var state_34798__$1 = state_34798;
var statearr_34803_35990 = state_34798__$1;
(statearr_34803_35990[(2)] = null);

(statearr_34803_35990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34799 === (4))){
var inst_34739 = (state_34798[(13)]);
var inst_34739__$1 = (state_34798[(2)]);
var inst_34740 = (inst_34739__$1 == null);
var state_34798__$1 = (function (){var statearr_34804 = state_34798;
(statearr_34804[(13)] = inst_34739__$1);

return statearr_34804;
})();
if(cljs.core.truth_(inst_34740)){
var statearr_34805_35991 = state_34798__$1;
(statearr_34805_35991[(1)] = (5));

} else {
var statearr_34806_35992 = state_34798__$1;
(statearr_34806_35992[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34799 === (15))){
var state_34798__$1 = state_34798;
var statearr_34810_35994 = state_34798__$1;
(statearr_34810_35994[(2)] = null);

(statearr_34810_35994[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34799 === (21))){
var state_34798__$1 = state_34798;
var statearr_34811_35995 = state_34798__$1;
(statearr_34811_35995[(2)] = null);

(statearr_34811_35995[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34799 === (13))){
var inst_34751 = (state_34798[(8)]);
var inst_34750 = (state_34798[(10)]);
var inst_34753 = (state_34798[(11)]);
var inst_34752 = (state_34798[(12)]);
var inst_34760 = (state_34798[(2)]);
var inst_34761 = (inst_34753 + (1));
var tmp34807 = inst_34751;
var tmp34808 = inst_34750;
var tmp34809 = inst_34752;
var inst_34750__$1 = tmp34808;
var inst_34751__$1 = tmp34807;
var inst_34752__$1 = tmp34809;
var inst_34753__$1 = inst_34761;
var state_34798__$1 = (function (){var statearr_34812 = state_34798;
(statearr_34812[(8)] = inst_34751__$1);

(statearr_34812[(14)] = inst_34760);

(statearr_34812[(10)] = inst_34750__$1);

(statearr_34812[(11)] = inst_34753__$1);

(statearr_34812[(12)] = inst_34752__$1);

return statearr_34812;
})();
var statearr_34813_35998 = state_34798__$1;
(statearr_34813_35998[(2)] = null);

(statearr_34813_35998[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34799 === (22))){
var state_34798__$1 = state_34798;
var statearr_34814_35999 = state_34798__$1;
(statearr_34814_35999[(2)] = null);

(statearr_34814_35999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34799 === (6))){
var inst_34739 = (state_34798[(13)]);
var inst_34748 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34739) : f.call(null,inst_34739));
var inst_34749 = cljs.core.seq(inst_34748);
var inst_34750 = inst_34749;
var inst_34751 = null;
var inst_34752 = (0);
var inst_34753 = (0);
var state_34798__$1 = (function (){var statearr_34815 = state_34798;
(statearr_34815[(8)] = inst_34751);

(statearr_34815[(10)] = inst_34750);

(statearr_34815[(11)] = inst_34753);

(statearr_34815[(12)] = inst_34752);

return statearr_34815;
})();
var statearr_34816_36000 = state_34798__$1;
(statearr_34816_36000[(2)] = null);

(statearr_34816_36000[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34799 === (17))){
var inst_34764 = (state_34798[(7)]);
var inst_34768 = cljs.core.chunk_first(inst_34764);
var inst_34769 = cljs.core.chunk_rest(inst_34764);
var inst_34770 = cljs.core.count(inst_34768);
var inst_34750 = inst_34769;
var inst_34751 = inst_34768;
var inst_34752 = inst_34770;
var inst_34753 = (0);
var state_34798__$1 = (function (){var statearr_34817 = state_34798;
(statearr_34817[(8)] = inst_34751);

(statearr_34817[(10)] = inst_34750);

(statearr_34817[(11)] = inst_34753);

(statearr_34817[(12)] = inst_34752);

return statearr_34817;
})();
var statearr_34818_36030 = state_34798__$1;
(statearr_34818_36030[(2)] = null);

(statearr_34818_36030[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34799 === (3))){
var inst_34796 = (state_34798[(2)]);
var state_34798__$1 = state_34798;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34798__$1,inst_34796);
} else {
if((state_val_34799 === (12))){
var inst_34784 = (state_34798[(2)]);
var state_34798__$1 = state_34798;
var statearr_34819_36033 = state_34798__$1;
(statearr_34819_36033[(2)] = inst_34784);

(statearr_34819_36033[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34799 === (2))){
var state_34798__$1 = state_34798;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34798__$1,(4),in$);
} else {
if((state_val_34799 === (23))){
var inst_34792 = (state_34798[(2)]);
var state_34798__$1 = state_34798;
var statearr_34820_36037 = state_34798__$1;
(statearr_34820_36037[(2)] = inst_34792);

(statearr_34820_36037[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34799 === (19))){
var inst_34779 = (state_34798[(2)]);
var state_34798__$1 = state_34798;
var statearr_34821_36039 = state_34798__$1;
(statearr_34821_36039[(2)] = inst_34779);

(statearr_34821_36039[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34799 === (11))){
var inst_34750 = (state_34798[(10)]);
var inst_34764 = (state_34798[(7)]);
var inst_34764__$1 = cljs.core.seq(inst_34750);
var state_34798__$1 = (function (){var statearr_34822 = state_34798;
(statearr_34822[(7)] = inst_34764__$1);

return statearr_34822;
})();
if(inst_34764__$1){
var statearr_34823_36040 = state_34798__$1;
(statearr_34823_36040[(1)] = (14));

} else {
var statearr_34824_36041 = state_34798__$1;
(statearr_34824_36041[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34799 === (9))){
var inst_34786 = (state_34798[(2)]);
var inst_34787 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34798__$1 = (function (){var statearr_34825 = state_34798;
(statearr_34825[(15)] = inst_34786);

return statearr_34825;
})();
if(cljs.core.truth_(inst_34787)){
var statearr_34826_36042 = state_34798__$1;
(statearr_34826_36042[(1)] = (21));

} else {
var statearr_34827_36043 = state_34798__$1;
(statearr_34827_36043[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34799 === (5))){
var inst_34742 = cljs.core.async.close_BANG_(out);
var state_34798__$1 = state_34798;
var statearr_34828_36044 = state_34798__$1;
(statearr_34828_36044[(2)] = inst_34742);

(statearr_34828_36044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34799 === (14))){
var inst_34764 = (state_34798[(7)]);
var inst_34766 = cljs.core.chunked_seq_QMARK_(inst_34764);
var state_34798__$1 = state_34798;
if(inst_34766){
var statearr_34829_36045 = state_34798__$1;
(statearr_34829_36045[(1)] = (17));

} else {
var statearr_34830_36046 = state_34798__$1;
(statearr_34830_36046[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34799 === (16))){
var inst_34782 = (state_34798[(2)]);
var state_34798__$1 = state_34798;
var statearr_34831_36047 = state_34798__$1;
(statearr_34831_36047[(2)] = inst_34782);

(statearr_34831_36047[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34799 === (10))){
var inst_34751 = (state_34798[(8)]);
var inst_34753 = (state_34798[(11)]);
var inst_34758 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_34751,inst_34753);
var state_34798__$1 = state_34798;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34798__$1,(13),out,inst_34758);
} else {
if((state_val_34799 === (18))){
var inst_34764 = (state_34798[(7)]);
var inst_34773 = cljs.core.first(inst_34764);
var state_34798__$1 = state_34798;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34798__$1,(20),out,inst_34773);
} else {
if((state_val_34799 === (8))){
var inst_34753 = (state_34798[(11)]);
var inst_34752 = (state_34798[(12)]);
var inst_34755 = (inst_34753 < inst_34752);
var inst_34756 = inst_34755;
var state_34798__$1 = state_34798;
if(cljs.core.truth_(inst_34756)){
var statearr_34832_36052 = state_34798__$1;
(statearr_34832_36052[(1)] = (10));

} else {
var statearr_34833_36053 = state_34798__$1;
(statearr_34833_36053[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33515__auto__))
;
return ((function (switch__33352__auto__,c__33515__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33353__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33353__auto____0 = (function (){
var statearr_34834 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34834[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33353__auto__);

(statearr_34834[(1)] = (1));

return statearr_34834;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33353__auto____1 = (function (state_34798){
while(true){
var ret_value__33354__auto__ = (function (){try{while(true){
var result__33355__auto__ = switch__33352__auto__(state_34798);
if(cljs.core.keyword_identical_QMARK_(result__33355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33355__auto__;
}
break;
}
}catch (e34835){if((e34835 instanceof Object)){
var ex__33356__auto__ = e34835;
var statearr_34836_36058 = state_34798;
(statearr_34836_36058[(5)] = ex__33356__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34798);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34835;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36059 = state_34798;
state_34798 = G__36059;
continue;
} else {
return ret_value__33354__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33353__auto__ = function(state_34798){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33353__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33353__auto____1.call(this,state_34798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__33353__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33353__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33353__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33353__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33353__auto__;
})()
;})(switch__33352__auto__,c__33515__auto__))
})();
var state__33517__auto__ = (function (){var statearr_34837 = (f__33516__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33516__auto__.cljs$core$IFn$_invoke$arity$0() : f__33516__auto__.call(null));
(statearr_34837[(6)] = c__33515__auto__);

return statearr_34837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33517__auto__);
});})(c__33515__auto__))
);

return c__33515__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34839 = arguments.length;
switch (G__34839) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__34841 = arguments.length;
switch (G__34841) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__34843 = arguments.length;
switch (G__34843) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33515__auto___36101 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33515__auto___36101,out){
return (function (){
var f__33516__auto__ = (function (){var switch__33352__auto__ = ((function (c__33515__auto___36101,out){
return (function (state_34867){
var state_val_34868 = (state_34867[(1)]);
if((state_val_34868 === (7))){
var inst_34862 = (state_34867[(2)]);
var state_34867__$1 = state_34867;
var statearr_34869_36110 = state_34867__$1;
(statearr_34869_36110[(2)] = inst_34862);

(statearr_34869_36110[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34868 === (1))){
var inst_34844 = null;
var state_34867__$1 = (function (){var statearr_34870 = state_34867;
(statearr_34870[(7)] = inst_34844);

return statearr_34870;
})();
var statearr_34871_36114 = state_34867__$1;
(statearr_34871_36114[(2)] = null);

(statearr_34871_36114[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34868 === (4))){
var inst_34847 = (state_34867[(8)]);
var inst_34847__$1 = (state_34867[(2)]);
var inst_34848 = (inst_34847__$1 == null);
var inst_34849 = cljs.core.not(inst_34848);
var state_34867__$1 = (function (){var statearr_34872 = state_34867;
(statearr_34872[(8)] = inst_34847__$1);

return statearr_34872;
})();
if(inst_34849){
var statearr_34873_36125 = state_34867__$1;
(statearr_34873_36125[(1)] = (5));

} else {
var statearr_34874_36126 = state_34867__$1;
(statearr_34874_36126[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34868 === (6))){
var state_34867__$1 = state_34867;
var statearr_34875_36128 = state_34867__$1;
(statearr_34875_36128[(2)] = null);

(statearr_34875_36128[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34868 === (3))){
var inst_34864 = (state_34867[(2)]);
var inst_34865 = cljs.core.async.close_BANG_(out);
var state_34867__$1 = (function (){var statearr_34876 = state_34867;
(statearr_34876[(9)] = inst_34864);

return statearr_34876;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34867__$1,inst_34865);
} else {
if((state_val_34868 === (2))){
var state_34867__$1 = state_34867;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34867__$1,(4),ch);
} else {
if((state_val_34868 === (11))){
var inst_34847 = (state_34867[(8)]);
var inst_34856 = (state_34867[(2)]);
var inst_34844 = inst_34847;
var state_34867__$1 = (function (){var statearr_34877 = state_34867;
(statearr_34877[(10)] = inst_34856);

(statearr_34877[(7)] = inst_34844);

return statearr_34877;
})();
var statearr_34878_36152 = state_34867__$1;
(statearr_34878_36152[(2)] = null);

(statearr_34878_36152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34868 === (9))){
var inst_34847 = (state_34867[(8)]);
var state_34867__$1 = state_34867;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34867__$1,(11),out,inst_34847);
} else {
if((state_val_34868 === (5))){
var inst_34844 = (state_34867[(7)]);
var inst_34847 = (state_34867[(8)]);
var inst_34851 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34847,inst_34844);
var state_34867__$1 = state_34867;
if(inst_34851){
var statearr_34880_36161 = state_34867__$1;
(statearr_34880_36161[(1)] = (8));

} else {
var statearr_34881_36162 = state_34867__$1;
(statearr_34881_36162[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34868 === (10))){
var inst_34859 = (state_34867[(2)]);
var state_34867__$1 = state_34867;
var statearr_34882_36163 = state_34867__$1;
(statearr_34882_36163[(2)] = inst_34859);

(statearr_34882_36163[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34868 === (8))){
var inst_34844 = (state_34867[(7)]);
var tmp34879 = inst_34844;
var inst_34844__$1 = tmp34879;
var state_34867__$1 = (function (){var statearr_34883 = state_34867;
(statearr_34883[(7)] = inst_34844__$1);

return statearr_34883;
})();
var statearr_34884_36164 = state_34867__$1;
(statearr_34884_36164[(2)] = null);

(statearr_34884_36164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__33515__auto___36101,out))
;
return ((function (switch__33352__auto__,c__33515__auto___36101,out){
return (function() {
var cljs$core$async$state_machine__33353__auto__ = null;
var cljs$core$async$state_machine__33353__auto____0 = (function (){
var statearr_34885 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34885[(0)] = cljs$core$async$state_machine__33353__auto__);

(statearr_34885[(1)] = (1));

return statearr_34885;
});
var cljs$core$async$state_machine__33353__auto____1 = (function (state_34867){
while(true){
var ret_value__33354__auto__ = (function (){try{while(true){
var result__33355__auto__ = switch__33352__auto__(state_34867);
if(cljs.core.keyword_identical_QMARK_(result__33355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33355__auto__;
}
break;
}
}catch (e34886){if((e34886 instanceof Object)){
var ex__33356__auto__ = e34886;
var statearr_34887_36172 = state_34867;
(statearr_34887_36172[(5)] = ex__33356__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34867);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34886;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36177 = state_34867;
state_34867 = G__36177;
continue;
} else {
return ret_value__33354__auto__;
}
break;
}
});
cljs$core$async$state_machine__33353__auto__ = function(state_34867){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33353__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33353__auto____1.call(this,state_34867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33353__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33353__auto____0;
cljs$core$async$state_machine__33353__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33353__auto____1;
return cljs$core$async$state_machine__33353__auto__;
})()
;})(switch__33352__auto__,c__33515__auto___36101,out))
})();
var state__33517__auto__ = (function (){var statearr_34888 = (f__33516__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33516__auto__.cljs$core$IFn$_invoke$arity$0() : f__33516__auto__.call(null));
(statearr_34888[(6)] = c__33515__auto___36101);

return statearr_34888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33517__auto__);
});})(c__33515__auto___36101,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34890 = arguments.length;
switch (G__34890) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33515__auto___36184 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33515__auto___36184,out){
return (function (){
var f__33516__auto__ = (function (){var switch__33352__auto__ = ((function (c__33515__auto___36184,out){
return (function (state_34928){
var state_val_34929 = (state_34928[(1)]);
if((state_val_34929 === (7))){
var inst_34924 = (state_34928[(2)]);
var state_34928__$1 = state_34928;
var statearr_34930_36186 = state_34928__$1;
(statearr_34930_36186[(2)] = inst_34924);

(statearr_34930_36186[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34929 === (1))){
var inst_34891 = (new Array(n));
var inst_34892 = inst_34891;
var inst_34893 = (0);
var state_34928__$1 = (function (){var statearr_34931 = state_34928;
(statearr_34931[(7)] = inst_34892);

(statearr_34931[(8)] = inst_34893);

return statearr_34931;
})();
var statearr_34932_36187 = state_34928__$1;
(statearr_34932_36187[(2)] = null);

(statearr_34932_36187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34929 === (4))){
var inst_34896 = (state_34928[(9)]);
var inst_34896__$1 = (state_34928[(2)]);
var inst_34897 = (inst_34896__$1 == null);
var inst_34898 = cljs.core.not(inst_34897);
var state_34928__$1 = (function (){var statearr_34933 = state_34928;
(statearr_34933[(9)] = inst_34896__$1);

return statearr_34933;
})();
if(inst_34898){
var statearr_34934_36188 = state_34928__$1;
(statearr_34934_36188[(1)] = (5));

} else {
var statearr_34935_36189 = state_34928__$1;
(statearr_34935_36189[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34929 === (15))){
var inst_34918 = (state_34928[(2)]);
var state_34928__$1 = state_34928;
var statearr_34936_36191 = state_34928__$1;
(statearr_34936_36191[(2)] = inst_34918);

(statearr_34936_36191[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34929 === (13))){
var state_34928__$1 = state_34928;
var statearr_34937_36192 = state_34928__$1;
(statearr_34937_36192[(2)] = null);

(statearr_34937_36192[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34929 === (6))){
var inst_34893 = (state_34928[(8)]);
var inst_34914 = (inst_34893 > (0));
var state_34928__$1 = state_34928;
if(cljs.core.truth_(inst_34914)){
var statearr_34938_36193 = state_34928__$1;
(statearr_34938_36193[(1)] = (12));

} else {
var statearr_34939_36194 = state_34928__$1;
(statearr_34939_36194[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34929 === (3))){
var inst_34926 = (state_34928[(2)]);
var state_34928__$1 = state_34928;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34928__$1,inst_34926);
} else {
if((state_val_34929 === (12))){
var inst_34892 = (state_34928[(7)]);
var inst_34916 = cljs.core.vec(inst_34892);
var state_34928__$1 = state_34928;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34928__$1,(15),out,inst_34916);
} else {
if((state_val_34929 === (2))){
var state_34928__$1 = state_34928;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34928__$1,(4),ch);
} else {
if((state_val_34929 === (11))){
var inst_34908 = (state_34928[(2)]);
var inst_34909 = (new Array(n));
var inst_34892 = inst_34909;
var inst_34893 = (0);
var state_34928__$1 = (function (){var statearr_34940 = state_34928;
(statearr_34940[(7)] = inst_34892);

(statearr_34940[(10)] = inst_34908);

(statearr_34940[(8)] = inst_34893);

return statearr_34940;
})();
var statearr_34941_36206 = state_34928__$1;
(statearr_34941_36206[(2)] = null);

(statearr_34941_36206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34929 === (9))){
var inst_34892 = (state_34928[(7)]);
var inst_34906 = cljs.core.vec(inst_34892);
var state_34928__$1 = state_34928;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34928__$1,(11),out,inst_34906);
} else {
if((state_val_34929 === (5))){
var inst_34901 = (state_34928[(11)]);
var inst_34892 = (state_34928[(7)]);
var inst_34896 = (state_34928[(9)]);
var inst_34893 = (state_34928[(8)]);
var inst_34900 = (inst_34892[inst_34893] = inst_34896);
var inst_34901__$1 = (inst_34893 + (1));
var inst_34902 = (inst_34901__$1 < n);
var state_34928__$1 = (function (){var statearr_34942 = state_34928;
(statearr_34942[(11)] = inst_34901__$1);

(statearr_34942[(12)] = inst_34900);

return statearr_34942;
})();
if(cljs.core.truth_(inst_34902)){
var statearr_34943_36237 = state_34928__$1;
(statearr_34943_36237[(1)] = (8));

} else {
var statearr_34944_36239 = state_34928__$1;
(statearr_34944_36239[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34929 === (14))){
var inst_34921 = (state_34928[(2)]);
var inst_34922 = cljs.core.async.close_BANG_(out);
var state_34928__$1 = (function (){var statearr_34946 = state_34928;
(statearr_34946[(13)] = inst_34921);

return statearr_34946;
})();
var statearr_34947_36244 = state_34928__$1;
(statearr_34947_36244[(2)] = inst_34922);

(statearr_34947_36244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34929 === (10))){
var inst_34912 = (state_34928[(2)]);
var state_34928__$1 = state_34928;
var statearr_34948_36245 = state_34928__$1;
(statearr_34948_36245[(2)] = inst_34912);

(statearr_34948_36245[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34929 === (8))){
var inst_34901 = (state_34928[(11)]);
var inst_34892 = (state_34928[(7)]);
var tmp34945 = inst_34892;
var inst_34892__$1 = tmp34945;
var inst_34893 = inst_34901;
var state_34928__$1 = (function (){var statearr_34949 = state_34928;
(statearr_34949[(7)] = inst_34892__$1);

(statearr_34949[(8)] = inst_34893);

return statearr_34949;
})();
var statearr_34950_36255 = state_34928__$1;
(statearr_34950_36255[(2)] = null);

(statearr_34950_36255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33515__auto___36184,out))
;
return ((function (switch__33352__auto__,c__33515__auto___36184,out){
return (function() {
var cljs$core$async$state_machine__33353__auto__ = null;
var cljs$core$async$state_machine__33353__auto____0 = (function (){
var statearr_34951 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34951[(0)] = cljs$core$async$state_machine__33353__auto__);

(statearr_34951[(1)] = (1));

return statearr_34951;
});
var cljs$core$async$state_machine__33353__auto____1 = (function (state_34928){
while(true){
var ret_value__33354__auto__ = (function (){try{while(true){
var result__33355__auto__ = switch__33352__auto__(state_34928);
if(cljs.core.keyword_identical_QMARK_(result__33355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33355__auto__;
}
break;
}
}catch (e34952){if((e34952 instanceof Object)){
var ex__33356__auto__ = e34952;
var statearr_34953_36287 = state_34928;
(statearr_34953_36287[(5)] = ex__33356__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34928);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34952;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36290 = state_34928;
state_34928 = G__36290;
continue;
} else {
return ret_value__33354__auto__;
}
break;
}
});
cljs$core$async$state_machine__33353__auto__ = function(state_34928){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33353__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33353__auto____1.call(this,state_34928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33353__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33353__auto____0;
cljs$core$async$state_machine__33353__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33353__auto____1;
return cljs$core$async$state_machine__33353__auto__;
})()
;})(switch__33352__auto__,c__33515__auto___36184,out))
})();
var state__33517__auto__ = (function (){var statearr_34954 = (f__33516__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33516__auto__.cljs$core$IFn$_invoke$arity$0() : f__33516__auto__.call(null));
(statearr_34954[(6)] = c__33515__auto___36184);

return statearr_34954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33517__auto__);
});})(c__33515__auto___36184,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34956 = arguments.length;
switch (G__34956) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33515__auto___36303 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__33515__auto___36303,out){
return (function (){
var f__33516__auto__ = (function (){var switch__33352__auto__ = ((function (c__33515__auto___36303,out){
return (function (state_34998){
var state_val_34999 = (state_34998[(1)]);
if((state_val_34999 === (7))){
var inst_34994 = (state_34998[(2)]);
var state_34998__$1 = state_34998;
var statearr_35000_36314 = state_34998__$1;
(statearr_35000_36314[(2)] = inst_34994);

(statearr_35000_36314[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34999 === (1))){
var inst_34957 = [];
var inst_34958 = inst_34957;
var inst_34959 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34998__$1 = (function (){var statearr_35001 = state_34998;
(statearr_35001[(7)] = inst_34958);

(statearr_35001[(8)] = inst_34959);

return statearr_35001;
})();
var statearr_35002_36319 = state_34998__$1;
(statearr_35002_36319[(2)] = null);

(statearr_35002_36319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34999 === (4))){
var inst_34962 = (state_34998[(9)]);
var inst_34962__$1 = (state_34998[(2)]);
var inst_34963 = (inst_34962__$1 == null);
var inst_34964 = cljs.core.not(inst_34963);
var state_34998__$1 = (function (){var statearr_35003 = state_34998;
(statearr_35003[(9)] = inst_34962__$1);

return statearr_35003;
})();
if(inst_34964){
var statearr_35004_36324 = state_34998__$1;
(statearr_35004_36324[(1)] = (5));

} else {
var statearr_35005_36325 = state_34998__$1;
(statearr_35005_36325[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34999 === (15))){
var inst_34988 = (state_34998[(2)]);
var state_34998__$1 = state_34998;
var statearr_35006_36328 = state_34998__$1;
(statearr_35006_36328[(2)] = inst_34988);

(statearr_35006_36328[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34999 === (13))){
var state_34998__$1 = state_34998;
var statearr_35007_36332 = state_34998__$1;
(statearr_35007_36332[(2)] = null);

(statearr_35007_36332[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34999 === (6))){
var inst_34958 = (state_34998[(7)]);
var inst_34983 = inst_34958.length;
var inst_34984 = (inst_34983 > (0));
var state_34998__$1 = state_34998;
if(cljs.core.truth_(inst_34984)){
var statearr_35008_36333 = state_34998__$1;
(statearr_35008_36333[(1)] = (12));

} else {
var statearr_35009_36334 = state_34998__$1;
(statearr_35009_36334[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34999 === (3))){
var inst_34996 = (state_34998[(2)]);
var state_34998__$1 = state_34998;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34998__$1,inst_34996);
} else {
if((state_val_34999 === (12))){
var inst_34958 = (state_34998[(7)]);
var inst_34986 = cljs.core.vec(inst_34958);
var state_34998__$1 = state_34998;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34998__$1,(15),out,inst_34986);
} else {
if((state_val_34999 === (2))){
var state_34998__$1 = state_34998;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34998__$1,(4),ch);
} else {
if((state_val_34999 === (11))){
var inst_34962 = (state_34998[(9)]);
var inst_34966 = (state_34998[(10)]);
var inst_34976 = (state_34998[(2)]);
var inst_34977 = [];
var inst_34978 = inst_34977.push(inst_34962);
var inst_34958 = inst_34977;
var inst_34959 = inst_34966;
var state_34998__$1 = (function (){var statearr_35010 = state_34998;
(statearr_35010[(7)] = inst_34958);

(statearr_35010[(8)] = inst_34959);

(statearr_35010[(11)] = inst_34976);

(statearr_35010[(12)] = inst_34978);

return statearr_35010;
})();
var statearr_35011_36338 = state_34998__$1;
(statearr_35011_36338[(2)] = null);

(statearr_35011_36338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34999 === (9))){
var inst_34958 = (state_34998[(7)]);
var inst_34974 = cljs.core.vec(inst_34958);
var state_34998__$1 = state_34998;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34998__$1,(11),out,inst_34974);
} else {
if((state_val_34999 === (5))){
var inst_34962 = (state_34998[(9)]);
var inst_34959 = (state_34998[(8)]);
var inst_34966 = (state_34998[(10)]);
var inst_34966__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34962) : f.call(null,inst_34962));
var inst_34967 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34966__$1,inst_34959);
var inst_34968 = cljs.core.keyword_identical_QMARK_(inst_34959,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_34969 = ((inst_34967) || (inst_34968));
var state_34998__$1 = (function (){var statearr_35012 = state_34998;
(statearr_35012[(10)] = inst_34966__$1);

return statearr_35012;
})();
if(cljs.core.truth_(inst_34969)){
var statearr_35013_36339 = state_34998__$1;
(statearr_35013_36339[(1)] = (8));

} else {
var statearr_35014_36340 = state_34998__$1;
(statearr_35014_36340[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34999 === (14))){
var inst_34991 = (state_34998[(2)]);
var inst_34992 = cljs.core.async.close_BANG_(out);
var state_34998__$1 = (function (){var statearr_35016 = state_34998;
(statearr_35016[(13)] = inst_34991);

return statearr_35016;
})();
var statearr_35017_36341 = state_34998__$1;
(statearr_35017_36341[(2)] = inst_34992);

(statearr_35017_36341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34999 === (10))){
var inst_34981 = (state_34998[(2)]);
var state_34998__$1 = state_34998;
var statearr_35018_36342 = state_34998__$1;
(statearr_35018_36342[(2)] = inst_34981);

(statearr_35018_36342[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34999 === (8))){
var inst_34962 = (state_34998[(9)]);
var inst_34958 = (state_34998[(7)]);
var inst_34966 = (state_34998[(10)]);
var inst_34971 = inst_34958.push(inst_34962);
var tmp35015 = inst_34958;
var inst_34958__$1 = tmp35015;
var inst_34959 = inst_34966;
var state_34998__$1 = (function (){var statearr_35019 = state_34998;
(statearr_35019[(14)] = inst_34971);

(statearr_35019[(7)] = inst_34958__$1);

(statearr_35019[(8)] = inst_34959);

return statearr_35019;
})();
var statearr_35020_36345 = state_34998__$1;
(statearr_35020_36345[(2)] = null);

(statearr_35020_36345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33515__auto___36303,out))
;
return ((function (switch__33352__auto__,c__33515__auto___36303,out){
return (function() {
var cljs$core$async$state_machine__33353__auto__ = null;
var cljs$core$async$state_machine__33353__auto____0 = (function (){
var statearr_35021 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35021[(0)] = cljs$core$async$state_machine__33353__auto__);

(statearr_35021[(1)] = (1));

return statearr_35021;
});
var cljs$core$async$state_machine__33353__auto____1 = (function (state_34998){
while(true){
var ret_value__33354__auto__ = (function (){try{while(true){
var result__33355__auto__ = switch__33352__auto__(state_34998);
if(cljs.core.keyword_identical_QMARK_(result__33355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33355__auto__;
}
break;
}
}catch (e35022){if((e35022 instanceof Object)){
var ex__33356__auto__ = e35022;
var statearr_35023_36346 = state_34998;
(statearr_35023_36346[(5)] = ex__33356__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_34998);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35022;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36349 = state_34998;
state_34998 = G__36349;
continue;
} else {
return ret_value__33354__auto__;
}
break;
}
});
cljs$core$async$state_machine__33353__auto__ = function(state_34998){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33353__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33353__auto____1.call(this,state_34998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33353__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33353__auto____0;
cljs$core$async$state_machine__33353__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33353__auto____1;
return cljs$core$async$state_machine__33353__auto__;
})()
;})(switch__33352__auto__,c__33515__auto___36303,out))
})();
var state__33517__auto__ = (function (){var statearr_35024 = (f__33516__auto__.cljs$core$IFn$_invoke$arity$0 ? f__33516__auto__.cljs$core$IFn$_invoke$arity$0() : f__33516__auto__.call(null));
(statearr_35024[(6)] = c__33515__auto___36303);

return statearr_35024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33517__auto__);
});})(c__33515__auto___36303,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=cljs.core.async.js.map
