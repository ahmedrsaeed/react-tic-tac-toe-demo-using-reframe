// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__32136 = arguments.length;
switch (G__32136) {
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
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async32137 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32137 = (function (f,blockable,meta32138){
this.f = f;
this.blockable = blockable;
this.meta32138 = meta32138;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32137.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32139,meta32138__$1){
var self__ = this;
var _32139__$1 = this;
return (new cljs.core.async.t_cljs$core$async32137(self__.f,self__.blockable,meta32138__$1));
});

cljs.core.async.t_cljs$core$async32137.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32139){
var self__ = this;
var _32139__$1 = this;
return self__.meta32138;
});

cljs.core.async.t_cljs$core$async32137.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32137.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32137.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async32137.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async32137.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32138","meta32138",2125257412,null)], null);
});

cljs.core.async.t_cljs$core$async32137.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32137.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32137";

cljs.core.async.t_cljs$core$async32137.cljs$lang$ctorPrWriter = (function (this__28948__auto__,writer__28949__auto__,opt__28950__auto__){
return cljs.core._write.call(null,writer__28949__auto__,"cljs.core.async/t_cljs$core$async32137");
});

cljs.core.async.__GT_t_cljs$core$async32137 = (function cljs$core$async$__GT_t_cljs$core$async32137(f__$1,blockable__$1,meta32138){
return (new cljs.core.async.t_cljs$core$async32137(f__$1,blockable__$1,meta32138));
});

}

return (new cljs.core.async.t_cljs$core$async32137(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__32143 = arguments.length;
switch (G__32143) {
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
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
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
var G__32146 = arguments.length;
switch (G__32146) {
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
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var G__32149 = arguments.length;
switch (G__32149) {
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
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_32151 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_32151);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_32151,ret){
return (function (){
return fn1.call(null,val_32151);
});})(val_32151,ret))
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__32153 = arguments.length;
switch (G__32153) {
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
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__29268__auto___32155 = n;
var x_32156 = (0);
while(true){
if((x_32156 < n__29268__auto___32155)){
(a[x_32156] = (0));

var G__32157 = (x_32156 + (1));
x_32156 = G__32157;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__32158 = (i + (1));
i = G__32158;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async32159 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32159 = (function (flag,meta32160){
this.flag = flag;
this.meta32160 = meta32160;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32159.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_32161,meta32160__$1){
var self__ = this;
var _32161__$1 = this;
return (new cljs.core.async.t_cljs$core$async32159(self__.flag,meta32160__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async32159.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_32161){
var self__ = this;
var _32161__$1 = this;
return self__.meta32160;
});})(flag))
;

cljs.core.async.t_cljs$core$async32159.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32159.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async32159.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32159.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32159.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32160","meta32160",1099562223,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async32159.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32159.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32159";

cljs.core.async.t_cljs$core$async32159.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__28948__auto__,writer__28949__auto__,opt__28950__auto__){
return cljs.core._write.call(null,writer__28949__auto__,"cljs.core.async/t_cljs$core$async32159");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async32159 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32159(flag__$1,meta32160){
return (new cljs.core.async.t_cljs$core$async32159(flag__$1,meta32160));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async32159(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async32162 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32162 = (function (flag,cb,meta32163){
this.flag = flag;
this.cb = cb;
this.meta32163 = meta32163;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32162.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32164,meta32163__$1){
var self__ = this;
var _32164__$1 = this;
return (new cljs.core.async.t_cljs$core$async32162(self__.flag,self__.cb,meta32163__$1));
});

cljs.core.async.t_cljs$core$async32162.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32164){
var self__ = this;
var _32164__$1 = this;
return self__.meta32163;
});

cljs.core.async.t_cljs$core$async32162.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32162.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async32162.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32162.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async32162.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32163","meta32163",258624906,null)], null);
});

cljs.core.async.t_cljs$core$async32162.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32162.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32162";

cljs.core.async.t_cljs$core$async32162.cljs$lang$ctorPrWriter = (function (this__28948__auto__,writer__28949__auto__,opt__28950__auto__){
return cljs.core._write.call(null,writer__28949__auto__,"cljs.core.async/t_cljs$core$async32162");
});

cljs.core.async.__GT_t_cljs$core$async32162 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32162(flag__$1,cb__$1,meta32163){
return (new cljs.core.async.t_cljs$core$async32162(flag__$1,cb__$1,meta32163));
});

}

return (new cljs.core.async.t_cljs$core$async32162(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32165_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32165_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32166_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32166_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__28323__auto__ = wport;
if(cljs.core.truth_(or__28323__auto__)){
return or__28323__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32167 = (i + (1));
i = G__32167;
continue;
}
} else {
return null;
}
break;
}
})();
var or__28323__auto__ = ret;
if(cljs.core.truth_(or__28323__auto__)){
return or__28323__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__28311__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__28311__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__28311__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__29499__auto__ = [];
var len__29492__auto___32173 = arguments.length;
var i__29493__auto___32174 = (0);
while(true){
if((i__29493__auto___32174 < len__29492__auto___32173)){
args__29499__auto__.push((arguments[i__29493__auto___32174]));

var G__32175 = (i__29493__auto___32174 + (1));
i__29493__auto___32174 = G__32175;
continue;
} else {
}
break;
}

var argseq__29500__auto__ = ((((1) < args__29499__auto__.length))?(new cljs.core.IndexedSeq(args__29499__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29500__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32170){
var map__32171 = p__32170;
var map__32171__$1 = ((((!((map__32171 == null)))?((((map__32171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32171.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32171):map__32171);
var opts = map__32171__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32168){
var G__32169 = cljs.core.first.call(null,seq32168);
var seq32168__$1 = cljs.core.next.call(null,seq32168);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32169,seq32168__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
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
var G__32177 = arguments.length;
switch (G__32177) {
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
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__32090__auto___32223 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32090__auto___32223){
return (function (){
var f__32091__auto__ = (function (){var switch__32002__auto__ = ((function (c__32090__auto___32223){
return (function (state_32201){
var state_val_32202 = (state_32201[(1)]);
if((state_val_32202 === (7))){
var inst_32197 = (state_32201[(2)]);
var state_32201__$1 = state_32201;
var statearr_32203_32224 = state_32201__$1;
(statearr_32203_32224[(2)] = inst_32197);

(statearr_32203_32224[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32202 === (1))){
var state_32201__$1 = state_32201;
var statearr_32204_32225 = state_32201__$1;
(statearr_32204_32225[(2)] = null);

(statearr_32204_32225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32202 === (4))){
var inst_32180 = (state_32201[(7)]);
var inst_32180__$1 = (state_32201[(2)]);
var inst_32181 = (inst_32180__$1 == null);
var state_32201__$1 = (function (){var statearr_32205 = state_32201;
(statearr_32205[(7)] = inst_32180__$1);

return statearr_32205;
})();
if(cljs.core.truth_(inst_32181)){
var statearr_32206_32226 = state_32201__$1;
(statearr_32206_32226[(1)] = (5));

} else {
var statearr_32207_32227 = state_32201__$1;
(statearr_32207_32227[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32202 === (13))){
var state_32201__$1 = state_32201;
var statearr_32208_32228 = state_32201__$1;
(statearr_32208_32228[(2)] = null);

(statearr_32208_32228[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32202 === (6))){
var inst_32180 = (state_32201[(7)]);
var state_32201__$1 = state_32201;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32201__$1,(11),to,inst_32180);
} else {
if((state_val_32202 === (3))){
var inst_32199 = (state_32201[(2)]);
var state_32201__$1 = state_32201;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32201__$1,inst_32199);
} else {
if((state_val_32202 === (12))){
var state_32201__$1 = state_32201;
var statearr_32209_32229 = state_32201__$1;
(statearr_32209_32229[(2)] = null);

(statearr_32209_32229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32202 === (2))){
var state_32201__$1 = state_32201;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32201__$1,(4),from);
} else {
if((state_val_32202 === (11))){
var inst_32190 = (state_32201[(2)]);
var state_32201__$1 = state_32201;
if(cljs.core.truth_(inst_32190)){
var statearr_32210_32230 = state_32201__$1;
(statearr_32210_32230[(1)] = (12));

} else {
var statearr_32211_32231 = state_32201__$1;
(statearr_32211_32231[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32202 === (9))){
var state_32201__$1 = state_32201;
var statearr_32212_32232 = state_32201__$1;
(statearr_32212_32232[(2)] = null);

(statearr_32212_32232[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32202 === (5))){
var state_32201__$1 = state_32201;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32213_32233 = state_32201__$1;
(statearr_32213_32233[(1)] = (8));

} else {
var statearr_32214_32234 = state_32201__$1;
(statearr_32214_32234[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32202 === (14))){
var inst_32195 = (state_32201[(2)]);
var state_32201__$1 = state_32201;
var statearr_32215_32235 = state_32201__$1;
(statearr_32215_32235[(2)] = inst_32195);

(statearr_32215_32235[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32202 === (10))){
var inst_32187 = (state_32201[(2)]);
var state_32201__$1 = state_32201;
var statearr_32216_32236 = state_32201__$1;
(statearr_32216_32236[(2)] = inst_32187);

(statearr_32216_32236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32202 === (8))){
var inst_32184 = cljs.core.async.close_BANG_.call(null,to);
var state_32201__$1 = state_32201;
var statearr_32217_32237 = state_32201__$1;
(statearr_32217_32237[(2)] = inst_32184);

(statearr_32217_32237[(1)] = (10));


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
});})(c__32090__auto___32223))
;
return ((function (switch__32002__auto__,c__32090__auto___32223){
return (function() {
var cljs$core$async$state_machine__32003__auto__ = null;
var cljs$core$async$state_machine__32003__auto____0 = (function (){
var statearr_32218 = [null,null,null,null,null,null,null,null];
(statearr_32218[(0)] = cljs$core$async$state_machine__32003__auto__);

(statearr_32218[(1)] = (1));

return statearr_32218;
});
var cljs$core$async$state_machine__32003__auto____1 = (function (state_32201){
while(true){
var ret_value__32004__auto__ = (function (){try{while(true){
var result__32005__auto__ = switch__32002__auto__.call(null,state_32201);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32005__auto__;
}
break;
}
}catch (e32219){if((e32219 instanceof Object)){
var ex__32006__auto__ = e32219;
var statearr_32220_32238 = state_32201;
(statearr_32220_32238[(5)] = ex__32006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32201);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32219;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32239 = state_32201;
state_32201 = G__32239;
continue;
} else {
return ret_value__32004__auto__;
}
break;
}
});
cljs$core$async$state_machine__32003__auto__ = function(state_32201){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32003__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32003__auto____1.call(this,state_32201);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32003__auto____0;
cljs$core$async$state_machine__32003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32003__auto____1;
return cljs$core$async$state_machine__32003__auto__;
})()
;})(switch__32002__auto__,c__32090__auto___32223))
})();
var state__32092__auto__ = (function (){var statearr_32221 = f__32091__auto__.call(null);
(statearr_32221[(6)] = c__32090__auto___32223);

return statearr_32221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32092__auto__);
});})(c__32090__auto___32223))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__32240){
var vec__32241 = p__32240;
var v = cljs.core.nth.call(null,vec__32241,(0),null);
var p = cljs.core.nth.call(null,vec__32241,(1),null);
var job = vec__32241;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__32090__auto___32412 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32090__auto___32412,res,vec__32241,v,p,job,jobs,results){
return (function (){
var f__32091__auto__ = (function (){var switch__32002__auto__ = ((function (c__32090__auto___32412,res,vec__32241,v,p,job,jobs,results){
return (function (state_32248){
var state_val_32249 = (state_32248[(1)]);
if((state_val_32249 === (1))){
var state_32248__$1 = state_32248;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32248__$1,(2),res,v);
} else {
if((state_val_32249 === (2))){
var inst_32245 = (state_32248[(2)]);
var inst_32246 = cljs.core.async.close_BANG_.call(null,res);
var state_32248__$1 = (function (){var statearr_32250 = state_32248;
(statearr_32250[(7)] = inst_32245);

return statearr_32250;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32248__$1,inst_32246);
} else {
return null;
}
}
});})(c__32090__auto___32412,res,vec__32241,v,p,job,jobs,results))
;
return ((function (switch__32002__auto__,c__32090__auto___32412,res,vec__32241,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32003__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32003__auto____0 = (function (){
var statearr_32251 = [null,null,null,null,null,null,null,null];
(statearr_32251[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32003__auto__);

(statearr_32251[(1)] = (1));

return statearr_32251;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32003__auto____1 = (function (state_32248){
while(true){
var ret_value__32004__auto__ = (function (){try{while(true){
var result__32005__auto__ = switch__32002__auto__.call(null,state_32248);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32005__auto__;
}
break;
}
}catch (e32252){if((e32252 instanceof Object)){
var ex__32006__auto__ = e32252;
var statearr_32253_32413 = state_32248;
(statearr_32253_32413[(5)] = ex__32006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32248);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32252;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32414 = state_32248;
state_32248 = G__32414;
continue;
} else {
return ret_value__32004__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32003__auto__ = function(state_32248){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32003__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32003__auto____1.call(this,state_32248);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32003__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32003__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32003__auto__;
})()
;})(switch__32002__auto__,c__32090__auto___32412,res,vec__32241,v,p,job,jobs,results))
})();
var state__32092__auto__ = (function (){var statearr_32254 = f__32091__auto__.call(null);
(statearr_32254[(6)] = c__32090__auto___32412);

return statearr_32254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32092__auto__);
});})(c__32090__auto___32412,res,vec__32241,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__32255){
var vec__32256 = p__32255;
var v = cljs.core.nth.call(null,vec__32256,(0),null);
var p = cljs.core.nth.call(null,vec__32256,(1),null);
var job = vec__32256;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__29268__auto___32415 = n;
var __32416 = (0);
while(true){
if((__32416 < n__29268__auto___32415)){
var G__32259_32417 = type;
var G__32259_32418__$1 = (((G__32259_32417 instanceof cljs.core.Keyword))?G__32259_32417.fqn:null);
switch (G__32259_32418__$1) {
case "compute":
var c__32090__auto___32420 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32416,c__32090__auto___32420,G__32259_32417,G__32259_32418__$1,n__29268__auto___32415,jobs,results,process,async){
return (function (){
var f__32091__auto__ = (function (){var switch__32002__auto__ = ((function (__32416,c__32090__auto___32420,G__32259_32417,G__32259_32418__$1,n__29268__auto___32415,jobs,results,process,async){
return (function (state_32272){
var state_val_32273 = (state_32272[(1)]);
if((state_val_32273 === (1))){
var state_32272__$1 = state_32272;
var statearr_32274_32421 = state_32272__$1;
(statearr_32274_32421[(2)] = null);

(statearr_32274_32421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32273 === (2))){
var state_32272__$1 = state_32272;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32272__$1,(4),jobs);
} else {
if((state_val_32273 === (3))){
var inst_32270 = (state_32272[(2)]);
var state_32272__$1 = state_32272;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32272__$1,inst_32270);
} else {
if((state_val_32273 === (4))){
var inst_32262 = (state_32272[(2)]);
var inst_32263 = process.call(null,inst_32262);
var state_32272__$1 = state_32272;
if(cljs.core.truth_(inst_32263)){
var statearr_32275_32422 = state_32272__$1;
(statearr_32275_32422[(1)] = (5));

} else {
var statearr_32276_32423 = state_32272__$1;
(statearr_32276_32423[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32273 === (5))){
var state_32272__$1 = state_32272;
var statearr_32277_32424 = state_32272__$1;
(statearr_32277_32424[(2)] = null);

(statearr_32277_32424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32273 === (6))){
var state_32272__$1 = state_32272;
var statearr_32278_32425 = state_32272__$1;
(statearr_32278_32425[(2)] = null);

(statearr_32278_32425[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32273 === (7))){
var inst_32268 = (state_32272[(2)]);
var state_32272__$1 = state_32272;
var statearr_32279_32426 = state_32272__$1;
(statearr_32279_32426[(2)] = inst_32268);

(statearr_32279_32426[(1)] = (3));


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
});})(__32416,c__32090__auto___32420,G__32259_32417,G__32259_32418__$1,n__29268__auto___32415,jobs,results,process,async))
;
return ((function (__32416,switch__32002__auto__,c__32090__auto___32420,G__32259_32417,G__32259_32418__$1,n__29268__auto___32415,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32003__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32003__auto____0 = (function (){
var statearr_32280 = [null,null,null,null,null,null,null];
(statearr_32280[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32003__auto__);

(statearr_32280[(1)] = (1));

return statearr_32280;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32003__auto____1 = (function (state_32272){
while(true){
var ret_value__32004__auto__ = (function (){try{while(true){
var result__32005__auto__ = switch__32002__auto__.call(null,state_32272);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32005__auto__;
}
break;
}
}catch (e32281){if((e32281 instanceof Object)){
var ex__32006__auto__ = e32281;
var statearr_32282_32427 = state_32272;
(statearr_32282_32427[(5)] = ex__32006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32272);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32281;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32428 = state_32272;
state_32272 = G__32428;
continue;
} else {
return ret_value__32004__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32003__auto__ = function(state_32272){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32003__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32003__auto____1.call(this,state_32272);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32003__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32003__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32003__auto__;
})()
;})(__32416,switch__32002__auto__,c__32090__auto___32420,G__32259_32417,G__32259_32418__$1,n__29268__auto___32415,jobs,results,process,async))
})();
var state__32092__auto__ = (function (){var statearr_32283 = f__32091__auto__.call(null);
(statearr_32283[(6)] = c__32090__auto___32420);

return statearr_32283;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32092__auto__);
});})(__32416,c__32090__auto___32420,G__32259_32417,G__32259_32418__$1,n__29268__auto___32415,jobs,results,process,async))
);


break;
case "async":
var c__32090__auto___32429 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32416,c__32090__auto___32429,G__32259_32417,G__32259_32418__$1,n__29268__auto___32415,jobs,results,process,async){
return (function (){
var f__32091__auto__ = (function (){var switch__32002__auto__ = ((function (__32416,c__32090__auto___32429,G__32259_32417,G__32259_32418__$1,n__29268__auto___32415,jobs,results,process,async){
return (function (state_32296){
var state_val_32297 = (state_32296[(1)]);
if((state_val_32297 === (1))){
var state_32296__$1 = state_32296;
var statearr_32298_32430 = state_32296__$1;
(statearr_32298_32430[(2)] = null);

(statearr_32298_32430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (2))){
var state_32296__$1 = state_32296;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32296__$1,(4),jobs);
} else {
if((state_val_32297 === (3))){
var inst_32294 = (state_32296[(2)]);
var state_32296__$1 = state_32296;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32296__$1,inst_32294);
} else {
if((state_val_32297 === (4))){
var inst_32286 = (state_32296[(2)]);
var inst_32287 = async.call(null,inst_32286);
var state_32296__$1 = state_32296;
if(cljs.core.truth_(inst_32287)){
var statearr_32299_32431 = state_32296__$1;
(statearr_32299_32431[(1)] = (5));

} else {
var statearr_32300_32432 = state_32296__$1;
(statearr_32300_32432[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (5))){
var state_32296__$1 = state_32296;
var statearr_32301_32433 = state_32296__$1;
(statearr_32301_32433[(2)] = null);

(statearr_32301_32433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (6))){
var state_32296__$1 = state_32296;
var statearr_32302_32434 = state_32296__$1;
(statearr_32302_32434[(2)] = null);

(statearr_32302_32434[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32297 === (7))){
var inst_32292 = (state_32296[(2)]);
var state_32296__$1 = state_32296;
var statearr_32303_32435 = state_32296__$1;
(statearr_32303_32435[(2)] = inst_32292);

(statearr_32303_32435[(1)] = (3));


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
});})(__32416,c__32090__auto___32429,G__32259_32417,G__32259_32418__$1,n__29268__auto___32415,jobs,results,process,async))
;
return ((function (__32416,switch__32002__auto__,c__32090__auto___32429,G__32259_32417,G__32259_32418__$1,n__29268__auto___32415,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32003__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32003__auto____0 = (function (){
var statearr_32304 = [null,null,null,null,null,null,null];
(statearr_32304[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32003__auto__);

(statearr_32304[(1)] = (1));

return statearr_32304;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32003__auto____1 = (function (state_32296){
while(true){
var ret_value__32004__auto__ = (function (){try{while(true){
var result__32005__auto__ = switch__32002__auto__.call(null,state_32296);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32005__auto__;
}
break;
}
}catch (e32305){if((e32305 instanceof Object)){
var ex__32006__auto__ = e32305;
var statearr_32306_32436 = state_32296;
(statearr_32306_32436[(5)] = ex__32006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32296);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32305;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32437 = state_32296;
state_32296 = G__32437;
continue;
} else {
return ret_value__32004__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32003__auto__ = function(state_32296){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32003__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32003__auto____1.call(this,state_32296);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32003__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32003__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32003__auto__;
})()
;})(__32416,switch__32002__auto__,c__32090__auto___32429,G__32259_32417,G__32259_32418__$1,n__29268__auto___32415,jobs,results,process,async))
})();
var state__32092__auto__ = (function (){var statearr_32307 = f__32091__auto__.call(null);
(statearr_32307[(6)] = c__32090__auto___32429);

return statearr_32307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32092__auto__);
});})(__32416,c__32090__auto___32429,G__32259_32417,G__32259_32418__$1,n__29268__auto___32415,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32259_32418__$1)].join('')));

}

var G__32438 = (__32416 + (1));
__32416 = G__32438;
continue;
} else {
}
break;
}

var c__32090__auto___32439 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32090__auto___32439,jobs,results,process,async){
return (function (){
var f__32091__auto__ = (function (){var switch__32002__auto__ = ((function (c__32090__auto___32439,jobs,results,process,async){
return (function (state_32329){
var state_val_32330 = (state_32329[(1)]);
if((state_val_32330 === (1))){
var state_32329__$1 = state_32329;
var statearr_32331_32440 = state_32329__$1;
(statearr_32331_32440[(2)] = null);

(statearr_32331_32440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32330 === (2))){
var state_32329__$1 = state_32329;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32329__$1,(4),from);
} else {
if((state_val_32330 === (3))){
var inst_32327 = (state_32329[(2)]);
var state_32329__$1 = state_32329;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32329__$1,inst_32327);
} else {
if((state_val_32330 === (4))){
var inst_32310 = (state_32329[(7)]);
var inst_32310__$1 = (state_32329[(2)]);
var inst_32311 = (inst_32310__$1 == null);
var state_32329__$1 = (function (){var statearr_32332 = state_32329;
(statearr_32332[(7)] = inst_32310__$1);

return statearr_32332;
})();
if(cljs.core.truth_(inst_32311)){
var statearr_32333_32441 = state_32329__$1;
(statearr_32333_32441[(1)] = (5));

} else {
var statearr_32334_32442 = state_32329__$1;
(statearr_32334_32442[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32330 === (5))){
var inst_32313 = cljs.core.async.close_BANG_.call(null,jobs);
var state_32329__$1 = state_32329;
var statearr_32335_32443 = state_32329__$1;
(statearr_32335_32443[(2)] = inst_32313);

(statearr_32335_32443[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32330 === (6))){
var inst_32310 = (state_32329[(7)]);
var inst_32315 = (state_32329[(8)]);
var inst_32315__$1 = cljs.core.async.chan.call(null,(1));
var inst_32316 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32317 = [inst_32310,inst_32315__$1];
var inst_32318 = (new cljs.core.PersistentVector(null,2,(5),inst_32316,inst_32317,null));
var state_32329__$1 = (function (){var statearr_32336 = state_32329;
(statearr_32336[(8)] = inst_32315__$1);

return statearr_32336;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32329__$1,(8),jobs,inst_32318);
} else {
if((state_val_32330 === (7))){
var inst_32325 = (state_32329[(2)]);
var state_32329__$1 = state_32329;
var statearr_32337_32444 = state_32329__$1;
(statearr_32337_32444[(2)] = inst_32325);

(statearr_32337_32444[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32330 === (8))){
var inst_32315 = (state_32329[(8)]);
var inst_32320 = (state_32329[(2)]);
var state_32329__$1 = (function (){var statearr_32338 = state_32329;
(statearr_32338[(9)] = inst_32320);

return statearr_32338;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32329__$1,(9),results,inst_32315);
} else {
if((state_val_32330 === (9))){
var inst_32322 = (state_32329[(2)]);
var state_32329__$1 = (function (){var statearr_32339 = state_32329;
(statearr_32339[(10)] = inst_32322);

return statearr_32339;
})();
var statearr_32340_32445 = state_32329__$1;
(statearr_32340_32445[(2)] = null);

(statearr_32340_32445[(1)] = (2));


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
});})(c__32090__auto___32439,jobs,results,process,async))
;
return ((function (switch__32002__auto__,c__32090__auto___32439,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32003__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32003__auto____0 = (function (){
var statearr_32341 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32341[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32003__auto__);

(statearr_32341[(1)] = (1));

return statearr_32341;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32003__auto____1 = (function (state_32329){
while(true){
var ret_value__32004__auto__ = (function (){try{while(true){
var result__32005__auto__ = switch__32002__auto__.call(null,state_32329);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32005__auto__;
}
break;
}
}catch (e32342){if((e32342 instanceof Object)){
var ex__32006__auto__ = e32342;
var statearr_32343_32446 = state_32329;
(statearr_32343_32446[(5)] = ex__32006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32329);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32342;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32447 = state_32329;
state_32329 = G__32447;
continue;
} else {
return ret_value__32004__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32003__auto__ = function(state_32329){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32003__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32003__auto____1.call(this,state_32329);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32003__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32003__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32003__auto__;
})()
;})(switch__32002__auto__,c__32090__auto___32439,jobs,results,process,async))
})();
var state__32092__auto__ = (function (){var statearr_32344 = f__32091__auto__.call(null);
(statearr_32344[(6)] = c__32090__auto___32439);

return statearr_32344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32092__auto__);
});})(c__32090__auto___32439,jobs,results,process,async))
);


var c__32090__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32090__auto__,jobs,results,process,async){
return (function (){
var f__32091__auto__ = (function (){var switch__32002__auto__ = ((function (c__32090__auto__,jobs,results,process,async){
return (function (state_32382){
var state_val_32383 = (state_32382[(1)]);
if((state_val_32383 === (7))){
var inst_32378 = (state_32382[(2)]);
var state_32382__$1 = state_32382;
var statearr_32384_32448 = state_32382__$1;
(statearr_32384_32448[(2)] = inst_32378);

(statearr_32384_32448[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (20))){
var state_32382__$1 = state_32382;
var statearr_32385_32449 = state_32382__$1;
(statearr_32385_32449[(2)] = null);

(statearr_32385_32449[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (1))){
var state_32382__$1 = state_32382;
var statearr_32386_32450 = state_32382__$1;
(statearr_32386_32450[(2)] = null);

(statearr_32386_32450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (4))){
var inst_32347 = (state_32382[(7)]);
var inst_32347__$1 = (state_32382[(2)]);
var inst_32348 = (inst_32347__$1 == null);
var state_32382__$1 = (function (){var statearr_32387 = state_32382;
(statearr_32387[(7)] = inst_32347__$1);

return statearr_32387;
})();
if(cljs.core.truth_(inst_32348)){
var statearr_32388_32451 = state_32382__$1;
(statearr_32388_32451[(1)] = (5));

} else {
var statearr_32389_32452 = state_32382__$1;
(statearr_32389_32452[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (15))){
var inst_32360 = (state_32382[(8)]);
var state_32382__$1 = state_32382;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32382__$1,(18),to,inst_32360);
} else {
if((state_val_32383 === (21))){
var inst_32373 = (state_32382[(2)]);
var state_32382__$1 = state_32382;
var statearr_32390_32453 = state_32382__$1;
(statearr_32390_32453[(2)] = inst_32373);

(statearr_32390_32453[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (13))){
var inst_32375 = (state_32382[(2)]);
var state_32382__$1 = (function (){var statearr_32391 = state_32382;
(statearr_32391[(9)] = inst_32375);

return statearr_32391;
})();
var statearr_32392_32454 = state_32382__$1;
(statearr_32392_32454[(2)] = null);

(statearr_32392_32454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (6))){
var inst_32347 = (state_32382[(7)]);
var state_32382__$1 = state_32382;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32382__$1,(11),inst_32347);
} else {
if((state_val_32383 === (17))){
var inst_32368 = (state_32382[(2)]);
var state_32382__$1 = state_32382;
if(cljs.core.truth_(inst_32368)){
var statearr_32393_32455 = state_32382__$1;
(statearr_32393_32455[(1)] = (19));

} else {
var statearr_32394_32456 = state_32382__$1;
(statearr_32394_32456[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (3))){
var inst_32380 = (state_32382[(2)]);
var state_32382__$1 = state_32382;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32382__$1,inst_32380);
} else {
if((state_val_32383 === (12))){
var inst_32357 = (state_32382[(10)]);
var state_32382__$1 = state_32382;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32382__$1,(14),inst_32357);
} else {
if((state_val_32383 === (2))){
var state_32382__$1 = state_32382;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32382__$1,(4),results);
} else {
if((state_val_32383 === (19))){
var state_32382__$1 = state_32382;
var statearr_32395_32457 = state_32382__$1;
(statearr_32395_32457[(2)] = null);

(statearr_32395_32457[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (11))){
var inst_32357 = (state_32382[(2)]);
var state_32382__$1 = (function (){var statearr_32396 = state_32382;
(statearr_32396[(10)] = inst_32357);

return statearr_32396;
})();
var statearr_32397_32458 = state_32382__$1;
(statearr_32397_32458[(2)] = null);

(statearr_32397_32458[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (9))){
var state_32382__$1 = state_32382;
var statearr_32398_32459 = state_32382__$1;
(statearr_32398_32459[(2)] = null);

(statearr_32398_32459[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (5))){
var state_32382__$1 = state_32382;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32399_32460 = state_32382__$1;
(statearr_32399_32460[(1)] = (8));

} else {
var statearr_32400_32461 = state_32382__$1;
(statearr_32400_32461[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (14))){
var inst_32360 = (state_32382[(8)]);
var inst_32362 = (state_32382[(11)]);
var inst_32360__$1 = (state_32382[(2)]);
var inst_32361 = (inst_32360__$1 == null);
var inst_32362__$1 = cljs.core.not.call(null,inst_32361);
var state_32382__$1 = (function (){var statearr_32401 = state_32382;
(statearr_32401[(8)] = inst_32360__$1);

(statearr_32401[(11)] = inst_32362__$1);

return statearr_32401;
})();
if(inst_32362__$1){
var statearr_32402_32462 = state_32382__$1;
(statearr_32402_32462[(1)] = (15));

} else {
var statearr_32403_32463 = state_32382__$1;
(statearr_32403_32463[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (16))){
var inst_32362 = (state_32382[(11)]);
var state_32382__$1 = state_32382;
var statearr_32404_32464 = state_32382__$1;
(statearr_32404_32464[(2)] = inst_32362);

(statearr_32404_32464[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (10))){
var inst_32354 = (state_32382[(2)]);
var state_32382__$1 = state_32382;
var statearr_32405_32465 = state_32382__$1;
(statearr_32405_32465[(2)] = inst_32354);

(statearr_32405_32465[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (18))){
var inst_32365 = (state_32382[(2)]);
var state_32382__$1 = state_32382;
var statearr_32406_32466 = state_32382__$1;
(statearr_32406_32466[(2)] = inst_32365);

(statearr_32406_32466[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32383 === (8))){
var inst_32351 = cljs.core.async.close_BANG_.call(null,to);
var state_32382__$1 = state_32382;
var statearr_32407_32467 = state_32382__$1;
(statearr_32407_32467[(2)] = inst_32351);

(statearr_32407_32467[(1)] = (10));


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
});})(c__32090__auto__,jobs,results,process,async))
;
return ((function (switch__32002__auto__,c__32090__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32003__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32003__auto____0 = (function (){
var statearr_32408 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32408[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32003__auto__);

(statearr_32408[(1)] = (1));

return statearr_32408;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32003__auto____1 = (function (state_32382){
while(true){
var ret_value__32004__auto__ = (function (){try{while(true){
var result__32005__auto__ = switch__32002__auto__.call(null,state_32382);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32005__auto__;
}
break;
}
}catch (e32409){if((e32409 instanceof Object)){
var ex__32006__auto__ = e32409;
var statearr_32410_32468 = state_32382;
(statearr_32410_32468[(5)] = ex__32006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32382);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32409;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32469 = state_32382;
state_32382 = G__32469;
continue;
} else {
return ret_value__32004__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32003__auto__ = function(state_32382){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32003__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32003__auto____1.call(this,state_32382);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32003__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32003__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32003__auto__;
})()
;})(switch__32002__auto__,c__32090__auto__,jobs,results,process,async))
})();
var state__32092__auto__ = (function (){var statearr_32411 = f__32091__auto__.call(null);
(statearr_32411[(6)] = c__32090__auto__);

return statearr_32411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32092__auto__);
});})(c__32090__auto__,jobs,results,process,async))
);

return c__32090__auto__;
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
var G__32471 = arguments.length;
switch (G__32471) {
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
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
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
var G__32474 = arguments.length;
switch (G__32474) {
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
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
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
var G__32477 = arguments.length;
switch (G__32477) {
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
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__32090__auto___32526 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32090__auto___32526,tc,fc){
return (function (){
var f__32091__auto__ = (function (){var switch__32002__auto__ = ((function (c__32090__auto___32526,tc,fc){
return (function (state_32503){
var state_val_32504 = (state_32503[(1)]);
if((state_val_32504 === (7))){
var inst_32499 = (state_32503[(2)]);
var state_32503__$1 = state_32503;
var statearr_32505_32527 = state_32503__$1;
(statearr_32505_32527[(2)] = inst_32499);

(statearr_32505_32527[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32504 === (1))){
var state_32503__$1 = state_32503;
var statearr_32506_32528 = state_32503__$1;
(statearr_32506_32528[(2)] = null);

(statearr_32506_32528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32504 === (4))){
var inst_32480 = (state_32503[(7)]);
var inst_32480__$1 = (state_32503[(2)]);
var inst_32481 = (inst_32480__$1 == null);
var state_32503__$1 = (function (){var statearr_32507 = state_32503;
(statearr_32507[(7)] = inst_32480__$1);

return statearr_32507;
})();
if(cljs.core.truth_(inst_32481)){
var statearr_32508_32529 = state_32503__$1;
(statearr_32508_32529[(1)] = (5));

} else {
var statearr_32509_32530 = state_32503__$1;
(statearr_32509_32530[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32504 === (13))){
var state_32503__$1 = state_32503;
var statearr_32510_32531 = state_32503__$1;
(statearr_32510_32531[(2)] = null);

(statearr_32510_32531[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32504 === (6))){
var inst_32480 = (state_32503[(7)]);
var inst_32486 = p.call(null,inst_32480);
var state_32503__$1 = state_32503;
if(cljs.core.truth_(inst_32486)){
var statearr_32511_32532 = state_32503__$1;
(statearr_32511_32532[(1)] = (9));

} else {
var statearr_32512_32533 = state_32503__$1;
(statearr_32512_32533[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32504 === (3))){
var inst_32501 = (state_32503[(2)]);
var state_32503__$1 = state_32503;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32503__$1,inst_32501);
} else {
if((state_val_32504 === (12))){
var state_32503__$1 = state_32503;
var statearr_32513_32534 = state_32503__$1;
(statearr_32513_32534[(2)] = null);

(statearr_32513_32534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32504 === (2))){
var state_32503__$1 = state_32503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32503__$1,(4),ch);
} else {
if((state_val_32504 === (11))){
var inst_32480 = (state_32503[(7)]);
var inst_32490 = (state_32503[(2)]);
var state_32503__$1 = state_32503;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32503__$1,(8),inst_32490,inst_32480);
} else {
if((state_val_32504 === (9))){
var state_32503__$1 = state_32503;
var statearr_32514_32535 = state_32503__$1;
(statearr_32514_32535[(2)] = tc);

(statearr_32514_32535[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32504 === (5))){
var inst_32483 = cljs.core.async.close_BANG_.call(null,tc);
var inst_32484 = cljs.core.async.close_BANG_.call(null,fc);
var state_32503__$1 = (function (){var statearr_32515 = state_32503;
(statearr_32515[(8)] = inst_32483);

return statearr_32515;
})();
var statearr_32516_32536 = state_32503__$1;
(statearr_32516_32536[(2)] = inst_32484);

(statearr_32516_32536[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32504 === (14))){
var inst_32497 = (state_32503[(2)]);
var state_32503__$1 = state_32503;
var statearr_32517_32537 = state_32503__$1;
(statearr_32517_32537[(2)] = inst_32497);

(statearr_32517_32537[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32504 === (10))){
var state_32503__$1 = state_32503;
var statearr_32518_32538 = state_32503__$1;
(statearr_32518_32538[(2)] = fc);

(statearr_32518_32538[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32504 === (8))){
var inst_32492 = (state_32503[(2)]);
var state_32503__$1 = state_32503;
if(cljs.core.truth_(inst_32492)){
var statearr_32519_32539 = state_32503__$1;
(statearr_32519_32539[(1)] = (12));

} else {
var statearr_32520_32540 = state_32503__$1;
(statearr_32520_32540[(1)] = (13));

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
});})(c__32090__auto___32526,tc,fc))
;
return ((function (switch__32002__auto__,c__32090__auto___32526,tc,fc){
return (function() {
var cljs$core$async$state_machine__32003__auto__ = null;
var cljs$core$async$state_machine__32003__auto____0 = (function (){
var statearr_32521 = [null,null,null,null,null,null,null,null,null];
(statearr_32521[(0)] = cljs$core$async$state_machine__32003__auto__);

(statearr_32521[(1)] = (1));

return statearr_32521;
});
var cljs$core$async$state_machine__32003__auto____1 = (function (state_32503){
while(true){
var ret_value__32004__auto__ = (function (){try{while(true){
var result__32005__auto__ = switch__32002__auto__.call(null,state_32503);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32005__auto__;
}
break;
}
}catch (e32522){if((e32522 instanceof Object)){
var ex__32006__auto__ = e32522;
var statearr_32523_32541 = state_32503;
(statearr_32523_32541[(5)] = ex__32006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32522;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32542 = state_32503;
state_32503 = G__32542;
continue;
} else {
return ret_value__32004__auto__;
}
break;
}
});
cljs$core$async$state_machine__32003__auto__ = function(state_32503){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32003__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32003__auto____1.call(this,state_32503);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32003__auto____0;
cljs$core$async$state_machine__32003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32003__auto____1;
return cljs$core$async$state_machine__32003__auto__;
})()
;})(switch__32002__auto__,c__32090__auto___32526,tc,fc))
})();
var state__32092__auto__ = (function (){var statearr_32524 = f__32091__auto__.call(null);
(statearr_32524[(6)] = c__32090__auto___32526);

return statearr_32524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32092__auto__);
});})(c__32090__auto___32526,tc,fc))
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
var c__32090__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32090__auto__){
return (function (){
var f__32091__auto__ = (function (){var switch__32002__auto__ = ((function (c__32090__auto__){
return (function (state_32563){
var state_val_32564 = (state_32563[(1)]);
if((state_val_32564 === (7))){
var inst_32559 = (state_32563[(2)]);
var state_32563__$1 = state_32563;
var statearr_32565_32583 = state_32563__$1;
(statearr_32565_32583[(2)] = inst_32559);

(statearr_32565_32583[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32564 === (1))){
var inst_32543 = init;
var state_32563__$1 = (function (){var statearr_32566 = state_32563;
(statearr_32566[(7)] = inst_32543);

return statearr_32566;
})();
var statearr_32567_32584 = state_32563__$1;
(statearr_32567_32584[(2)] = null);

(statearr_32567_32584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32564 === (4))){
var inst_32546 = (state_32563[(8)]);
var inst_32546__$1 = (state_32563[(2)]);
var inst_32547 = (inst_32546__$1 == null);
var state_32563__$1 = (function (){var statearr_32568 = state_32563;
(statearr_32568[(8)] = inst_32546__$1);

return statearr_32568;
})();
if(cljs.core.truth_(inst_32547)){
var statearr_32569_32585 = state_32563__$1;
(statearr_32569_32585[(1)] = (5));

} else {
var statearr_32570_32586 = state_32563__$1;
(statearr_32570_32586[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32564 === (6))){
var inst_32550 = (state_32563[(9)]);
var inst_32543 = (state_32563[(7)]);
var inst_32546 = (state_32563[(8)]);
var inst_32550__$1 = f.call(null,inst_32543,inst_32546);
var inst_32551 = cljs.core.reduced_QMARK_.call(null,inst_32550__$1);
var state_32563__$1 = (function (){var statearr_32571 = state_32563;
(statearr_32571[(9)] = inst_32550__$1);

return statearr_32571;
})();
if(inst_32551){
var statearr_32572_32587 = state_32563__$1;
(statearr_32572_32587[(1)] = (8));

} else {
var statearr_32573_32588 = state_32563__$1;
(statearr_32573_32588[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32564 === (3))){
var inst_32561 = (state_32563[(2)]);
var state_32563__$1 = state_32563;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32563__$1,inst_32561);
} else {
if((state_val_32564 === (2))){
var state_32563__$1 = state_32563;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32563__$1,(4),ch);
} else {
if((state_val_32564 === (9))){
var inst_32550 = (state_32563[(9)]);
var inst_32543 = inst_32550;
var state_32563__$1 = (function (){var statearr_32574 = state_32563;
(statearr_32574[(7)] = inst_32543);

return statearr_32574;
})();
var statearr_32575_32589 = state_32563__$1;
(statearr_32575_32589[(2)] = null);

(statearr_32575_32589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32564 === (5))){
var inst_32543 = (state_32563[(7)]);
var state_32563__$1 = state_32563;
var statearr_32576_32590 = state_32563__$1;
(statearr_32576_32590[(2)] = inst_32543);

(statearr_32576_32590[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32564 === (10))){
var inst_32557 = (state_32563[(2)]);
var state_32563__$1 = state_32563;
var statearr_32577_32591 = state_32563__$1;
(statearr_32577_32591[(2)] = inst_32557);

(statearr_32577_32591[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32564 === (8))){
var inst_32550 = (state_32563[(9)]);
var inst_32553 = cljs.core.deref.call(null,inst_32550);
var state_32563__$1 = state_32563;
var statearr_32578_32592 = state_32563__$1;
(statearr_32578_32592[(2)] = inst_32553);

(statearr_32578_32592[(1)] = (10));


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
});})(c__32090__auto__))
;
return ((function (switch__32002__auto__,c__32090__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__32003__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32003__auto____0 = (function (){
var statearr_32579 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32579[(0)] = cljs$core$async$reduce_$_state_machine__32003__auto__);

(statearr_32579[(1)] = (1));

return statearr_32579;
});
var cljs$core$async$reduce_$_state_machine__32003__auto____1 = (function (state_32563){
while(true){
var ret_value__32004__auto__ = (function (){try{while(true){
var result__32005__auto__ = switch__32002__auto__.call(null,state_32563);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32005__auto__;
}
break;
}
}catch (e32580){if((e32580 instanceof Object)){
var ex__32006__auto__ = e32580;
var statearr_32581_32593 = state_32563;
(statearr_32581_32593[(5)] = ex__32006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32563);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32580;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32594 = state_32563;
state_32563 = G__32594;
continue;
} else {
return ret_value__32004__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32003__auto__ = function(state_32563){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32003__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32003__auto____1.call(this,state_32563);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__32003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32003__auto____0;
cljs$core$async$reduce_$_state_machine__32003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32003__auto____1;
return cljs$core$async$reduce_$_state_machine__32003__auto__;
})()
;})(switch__32002__auto__,c__32090__auto__))
})();
var state__32092__auto__ = (function (){var statearr_32582 = f__32091__auto__.call(null);
(statearr_32582[(6)] = c__32090__auto__);

return statearr_32582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32092__auto__);
});})(c__32090__auto__))
);

return c__32090__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__32090__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32090__auto__,f__$1){
return (function (){
var f__32091__auto__ = (function (){var switch__32002__auto__ = ((function (c__32090__auto__,f__$1){
return (function (state_32600){
var state_val_32601 = (state_32600[(1)]);
if((state_val_32601 === (1))){
var inst_32595 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_32600__$1 = state_32600;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32600__$1,(2),inst_32595);
} else {
if((state_val_32601 === (2))){
var inst_32597 = (state_32600[(2)]);
var inst_32598 = f__$1.call(null,inst_32597);
var state_32600__$1 = state_32600;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32600__$1,inst_32598);
} else {
return null;
}
}
});})(c__32090__auto__,f__$1))
;
return ((function (switch__32002__auto__,c__32090__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__32003__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32003__auto____0 = (function (){
var statearr_32602 = [null,null,null,null,null,null,null];
(statearr_32602[(0)] = cljs$core$async$transduce_$_state_machine__32003__auto__);

(statearr_32602[(1)] = (1));

return statearr_32602;
});
var cljs$core$async$transduce_$_state_machine__32003__auto____1 = (function (state_32600){
while(true){
var ret_value__32004__auto__ = (function (){try{while(true){
var result__32005__auto__ = switch__32002__auto__.call(null,state_32600);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32005__auto__;
}
break;
}
}catch (e32603){if((e32603 instanceof Object)){
var ex__32006__auto__ = e32603;
var statearr_32604_32606 = state_32600;
(statearr_32604_32606[(5)] = ex__32006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32600);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32603;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32607 = state_32600;
state_32600 = G__32607;
continue;
} else {
return ret_value__32004__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32003__auto__ = function(state_32600){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32003__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32003__auto____1.call(this,state_32600);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__32003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32003__auto____0;
cljs$core$async$transduce_$_state_machine__32003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32003__auto____1;
return cljs$core$async$transduce_$_state_machine__32003__auto__;
})()
;})(switch__32002__auto__,c__32090__auto__,f__$1))
})();
var state__32092__auto__ = (function (){var statearr_32605 = f__32091__auto__.call(null);
(statearr_32605[(6)] = c__32090__auto__);

return statearr_32605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32092__auto__);
});})(c__32090__auto__,f__$1))
);

return c__32090__auto__;
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
var G__32609 = arguments.length;
switch (G__32609) {
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
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__32090__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32090__auto__){
return (function (){
var f__32091__auto__ = (function (){var switch__32002__auto__ = ((function (c__32090__auto__){
return (function (state_32634){
var state_val_32635 = (state_32634[(1)]);
if((state_val_32635 === (7))){
var inst_32616 = (state_32634[(2)]);
var state_32634__$1 = state_32634;
var statearr_32636_32657 = state_32634__$1;
(statearr_32636_32657[(2)] = inst_32616);

(statearr_32636_32657[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32635 === (1))){
var inst_32610 = cljs.core.seq.call(null,coll);
var inst_32611 = inst_32610;
var state_32634__$1 = (function (){var statearr_32637 = state_32634;
(statearr_32637[(7)] = inst_32611);

return statearr_32637;
})();
var statearr_32638_32658 = state_32634__$1;
(statearr_32638_32658[(2)] = null);

(statearr_32638_32658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32635 === (4))){
var inst_32611 = (state_32634[(7)]);
var inst_32614 = cljs.core.first.call(null,inst_32611);
var state_32634__$1 = state_32634;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32634__$1,(7),ch,inst_32614);
} else {
if((state_val_32635 === (13))){
var inst_32628 = (state_32634[(2)]);
var state_32634__$1 = state_32634;
var statearr_32639_32659 = state_32634__$1;
(statearr_32639_32659[(2)] = inst_32628);

(statearr_32639_32659[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32635 === (6))){
var inst_32619 = (state_32634[(2)]);
var state_32634__$1 = state_32634;
if(cljs.core.truth_(inst_32619)){
var statearr_32640_32660 = state_32634__$1;
(statearr_32640_32660[(1)] = (8));

} else {
var statearr_32641_32661 = state_32634__$1;
(statearr_32641_32661[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32635 === (3))){
var inst_32632 = (state_32634[(2)]);
var state_32634__$1 = state_32634;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32634__$1,inst_32632);
} else {
if((state_val_32635 === (12))){
var state_32634__$1 = state_32634;
var statearr_32642_32662 = state_32634__$1;
(statearr_32642_32662[(2)] = null);

(statearr_32642_32662[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32635 === (2))){
var inst_32611 = (state_32634[(7)]);
var state_32634__$1 = state_32634;
if(cljs.core.truth_(inst_32611)){
var statearr_32643_32663 = state_32634__$1;
(statearr_32643_32663[(1)] = (4));

} else {
var statearr_32644_32664 = state_32634__$1;
(statearr_32644_32664[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32635 === (11))){
var inst_32625 = cljs.core.async.close_BANG_.call(null,ch);
var state_32634__$1 = state_32634;
var statearr_32645_32665 = state_32634__$1;
(statearr_32645_32665[(2)] = inst_32625);

(statearr_32645_32665[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32635 === (9))){
var state_32634__$1 = state_32634;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32646_32666 = state_32634__$1;
(statearr_32646_32666[(1)] = (11));

} else {
var statearr_32647_32667 = state_32634__$1;
(statearr_32647_32667[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32635 === (5))){
var inst_32611 = (state_32634[(7)]);
var state_32634__$1 = state_32634;
var statearr_32648_32668 = state_32634__$1;
(statearr_32648_32668[(2)] = inst_32611);

(statearr_32648_32668[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32635 === (10))){
var inst_32630 = (state_32634[(2)]);
var state_32634__$1 = state_32634;
var statearr_32649_32669 = state_32634__$1;
(statearr_32649_32669[(2)] = inst_32630);

(statearr_32649_32669[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32635 === (8))){
var inst_32611 = (state_32634[(7)]);
var inst_32621 = cljs.core.next.call(null,inst_32611);
var inst_32611__$1 = inst_32621;
var state_32634__$1 = (function (){var statearr_32650 = state_32634;
(statearr_32650[(7)] = inst_32611__$1);

return statearr_32650;
})();
var statearr_32651_32670 = state_32634__$1;
(statearr_32651_32670[(2)] = null);

(statearr_32651_32670[(1)] = (2));


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
});})(c__32090__auto__))
;
return ((function (switch__32002__auto__,c__32090__auto__){
return (function() {
var cljs$core$async$state_machine__32003__auto__ = null;
var cljs$core$async$state_machine__32003__auto____0 = (function (){
var statearr_32652 = [null,null,null,null,null,null,null,null];
(statearr_32652[(0)] = cljs$core$async$state_machine__32003__auto__);

(statearr_32652[(1)] = (1));

return statearr_32652;
});
var cljs$core$async$state_machine__32003__auto____1 = (function (state_32634){
while(true){
var ret_value__32004__auto__ = (function (){try{while(true){
var result__32005__auto__ = switch__32002__auto__.call(null,state_32634);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32005__auto__;
}
break;
}
}catch (e32653){if((e32653 instanceof Object)){
var ex__32006__auto__ = e32653;
var statearr_32654_32671 = state_32634;
(statearr_32654_32671[(5)] = ex__32006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32634);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32653;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32672 = state_32634;
state_32634 = G__32672;
continue;
} else {
return ret_value__32004__auto__;
}
break;
}
});
cljs$core$async$state_machine__32003__auto__ = function(state_32634){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32003__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32003__auto____1.call(this,state_32634);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32003__auto____0;
cljs$core$async$state_machine__32003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32003__auto____1;
return cljs$core$async$state_machine__32003__auto__;
})()
;})(switch__32002__auto__,c__32090__auto__))
})();
var state__32092__auto__ = (function (){var statearr_32655 = f__32091__auto__.call(null);
(statearr_32655[(6)] = c__32090__auto__);

return statearr_32655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32092__auto__);
});})(c__32090__auto__))
);

return c__32090__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__29006__auto__ = (((_ == null))?null:_);
var m__29007__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__29006__auto__)]);
if(!((m__29007__auto__ == null))){
return m__29007__auto__.call(null,_);
} else {
var m__29007__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__29007__auto____$1 == null))){
return m__29007__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__29006__auto__ = (((m == null))?null:m);
var m__29007__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__29006__auto__)]);
if(!((m__29007__auto__ == null))){
return m__29007__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__29007__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__29007__auto____$1 == null))){
return m__29007__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__29006__auto__ = (((m == null))?null:m);
var m__29007__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__29006__auto__)]);
if(!((m__29007__auto__ == null))){
return m__29007__auto__.call(null,m,ch);
} else {
var m__29007__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__29007__auto____$1 == null))){
return m__29007__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__29006__auto__ = (((m == null))?null:m);
var m__29007__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__29006__auto__)]);
if(!((m__29007__auto__ == null))){
return m__29007__auto__.call(null,m);
} else {
var m__29007__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__29007__auto____$1 == null))){
return m__29007__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async32673 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32673 = (function (ch,cs,meta32674){
this.ch = ch;
this.cs = cs;
this.meta32674 = meta32674;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32673.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_32675,meta32674__$1){
var self__ = this;
var _32675__$1 = this;
return (new cljs.core.async.t_cljs$core$async32673(self__.ch,self__.cs,meta32674__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async32673.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_32675){
var self__ = this;
var _32675__$1 = this;
return self__.meta32674;
});})(cs))
;

cljs.core.async.t_cljs$core$async32673.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32673.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async32673.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32673.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32673.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32673.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async32673.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32674","meta32674",-575873001,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async32673.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32673.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32673";

cljs.core.async.t_cljs$core$async32673.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__28948__auto__,writer__28949__auto__,opt__28950__auto__){
return cljs.core._write.call(null,writer__28949__auto__,"cljs.core.async/t_cljs$core$async32673");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async32673 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async32673(ch__$1,cs__$1,meta32674){
return (new cljs.core.async.t_cljs$core$async32673(ch__$1,cs__$1,meta32674));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async32673(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__32090__auto___32895 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32090__auto___32895,cs,m,dchan,dctr,done){
return (function (){
var f__32091__auto__ = (function (){var switch__32002__auto__ = ((function (c__32090__auto___32895,cs,m,dchan,dctr,done){
return (function (state_32810){
var state_val_32811 = (state_32810[(1)]);
if((state_val_32811 === (7))){
var inst_32806 = (state_32810[(2)]);
var state_32810__$1 = state_32810;
var statearr_32812_32896 = state_32810__$1;
(statearr_32812_32896[(2)] = inst_32806);

(statearr_32812_32896[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32811 === (20))){
var inst_32709 = (state_32810[(7)]);
var inst_32721 = cljs.core.first.call(null,inst_32709);
var inst_32722 = cljs.core.nth.call(null,inst_32721,(0),null);
var inst_32723 = cljs.core.nth.call(null,inst_32721,(1),null);
var state_32810__$1 = (function (){var statearr_32813 = state_32810;
(statearr_32813[(8)] = inst_32722);

return statearr_32813;
})();
if(cljs.core.truth_(inst_32723)){
var statearr_32814_32897 = state_32810__$1;
(statearr_32814_32897[(1)] = (22));

} else {
var statearr_32815_32898 = state_32810__$1;
(statearr_32815_32898[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32811 === (27))){
var inst_32751 = (state_32810[(9)]);
var inst_32678 = (state_32810[(10)]);
var inst_32758 = (state_32810[(11)]);
var inst_32753 = (state_32810[(12)]);
var inst_32758__$1 = cljs.core._nth.call(null,inst_32751,inst_32753);
var inst_32759 = cljs.core.async.put_BANG_.call(null,inst_32758__$1,inst_32678,done);
var state_32810__$1 = (function (){var statearr_32816 = state_32810;
(statearr_32816[(11)] = inst_32758__$1);

return statearr_32816;
})();
if(cljs.core.truth_(inst_32759)){
var statearr_32817_32899 = state_32810__$1;
(statearr_32817_32899[(1)] = (30));

} else {
var statearr_32818_32900 = state_32810__$1;
(statearr_32818_32900[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32811 === (1))){
var state_32810__$1 = state_32810;
var statearr_32819_32901 = state_32810__$1;
(statearr_32819_32901[(2)] = null);

(statearr_32819_32901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32811 === (24))){
var inst_32709 = (state_32810[(7)]);
var inst_32728 = (state_32810[(2)]);
var inst_32729 = cljs.core.next.call(null,inst_32709);
var inst_32687 = inst_32729;
var inst_32688 = null;
var inst_32689 = (0);
var inst_32690 = (0);
var state_32810__$1 = (function (){var statearr_32820 = state_32810;
(statearr_32820[(13)] = inst_32688);

(statearr_32820[(14)] = inst_32689);

(statearr_32820[(15)] = inst_32728);

(statearr_32820[(16)] = inst_32690);

(statearr_32820[(17)] = inst_32687);

return statearr_32820;
})();
var statearr_32821_32902 = state_32810__$1;
(statearr_32821_32902[(2)] = null);

(statearr_32821_32902[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32811 === (39))){
var state_32810__$1 = state_32810;
var statearr_32825_32903 = state_32810__$1;
(statearr_32825_32903[(2)] = null);

(statearr_32825_32903[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32811 === (4))){
var inst_32678 = (state_32810[(10)]);
var inst_32678__$1 = (state_32810[(2)]);
var inst_32679 = (inst_32678__$1 == null);
var state_32810__$1 = (function (){var statearr_32826 = state_32810;
(statearr_32826[(10)] = inst_32678__$1);

return statearr_32826;
})();
if(cljs.core.truth_(inst_32679)){
var statearr_32827_32904 = state_32810__$1;
(statearr_32827_32904[(1)] = (5));

} else {
var statearr_32828_32905 = state_32810__$1;
(statearr_32828_32905[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32811 === (15))){
var inst_32688 = (state_32810[(13)]);
var inst_32689 = (state_32810[(14)]);
var inst_32690 = (state_32810[(16)]);
var inst_32687 = (state_32810[(17)]);
var inst_32705 = (state_32810[(2)]);
var inst_32706 = (inst_32690 + (1));
var tmp32822 = inst_32688;
var tmp32823 = inst_32689;
var tmp32824 = inst_32687;
var inst_32687__$1 = tmp32824;
var inst_32688__$1 = tmp32822;
var inst_32689__$1 = tmp32823;
var inst_32690__$1 = inst_32706;
var state_32810__$1 = (function (){var statearr_32829 = state_32810;
(statearr_32829[(18)] = inst_32705);

(statearr_32829[(13)] = inst_32688__$1);

(statearr_32829[(14)] = inst_32689__$1);

(statearr_32829[(16)] = inst_32690__$1);

(statearr_32829[(17)] = inst_32687__$1);

return statearr_32829;
})();
var statearr_32830_32906 = state_32810__$1;
(statearr_32830_32906[(2)] = null);

(statearr_32830_32906[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32811 === (21))){
var inst_32732 = (state_32810[(2)]);
var state_32810__$1 = state_32810;
var statearr_32834_32907 = state_32810__$1;
(statearr_32834_32907[(2)] = inst_32732);

(statearr_32834_32907[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32811 === (31))){
var inst_32758 = (state_32810[(11)]);
var inst_32762 = done.call(null,null);
var inst_32763 = cljs.core.async.untap_STAR_.call(null,m,inst_32758);
var state_32810__$1 = (function (){var statearr_32835 = state_32810;
(statearr_32835[(19)] = inst_32762);

return statearr_32835;
})();
var statearr_32836_32908 = state_32810__$1;
(statearr_32836_32908[(2)] = inst_32763);

(statearr_32836_32908[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32811 === (32))){
var inst_32750 = (state_32810[(20)]);
var inst_32751 = (state_32810[(9)]);
var inst_32753 = (state_32810[(12)]);
var inst_32752 = (state_32810[(21)]);
var inst_32765 = (state_32810[(2)]);
var inst_32766 = (inst_32753 + (1));
var tmp32831 = inst_32750;
var tmp32832 = inst_32751;
var tmp32833 = inst_32752;
var inst_32750__$1 = tmp32831;
var inst_32751__$1 = tmp32832;
var inst_32752__$1 = tmp32833;
var inst_32753__$1 = inst_32766;
var state_32810__$1 = (function (){var statearr_32837 = state_32810;
(statearr_32837[(20)] = inst_32750__$1);

(statearr_32837[(9)] = inst_32751__$1);

(statearr_32837[(12)] = inst_32753__$1);

(statearr_32837[(22)] = inst_32765);

(statearr_32837[(21)] = inst_32752__$1);

return statearr_32837;
})();
var statearr_32838_32909 = state_32810__$1;
(statearr_32838_32909[(2)] = null);

(statearr_32838_32909[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32811 === (40))){
var inst_32778 = (state_32810[(23)]);
var inst_32782 = done.call(null,null);
var inst_32783 = cljs.core.async.untap_STAR_.call(null,m,inst_32778);
var state_32810__$1 = (function (){var statearr_32839 = state_32810;
(statearr_32839[(24)] = inst_32782);

return statearr_32839;
})();
var statearr_32840_32910 = state_32810__$1;
(statearr_32840_32910[(2)] = inst_32783);

(statearr_32840_32910[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32811 === (33))){
var inst_32769 = (state_32810[(25)]);
var inst_32771 = cljs.core.chunked_seq_QMARK_.call(null,inst_32769);
var state_32810__$1 = state_32810;
if(inst_32771){
var statearr_32841_32911 = state_32810__$1;
(statearr_32841_32911[(1)] = (36));

} else {
var statearr_32842_32912 = state_32810__$1;
(statearr_32842_32912[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32811 === (13))){
var inst_32699 = (state_32810[(26)]);
var inst_32702 = cljs.core.async.close_BANG_.call(null,inst_32699);
var state_32810__$1 = state_32810;
var statearr_32843_32913 = state_32810__$1;
(statearr_32843_32913[(2)] = inst_32702);

(statearr_32843_32913[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32811 === (22))){
var inst_32722 = (state_32810[(8)]);
var inst_32725 = cljs.core.async.close_BANG_.call(null,inst_32722);
var state_32810__$1 = state_32810;
var statearr_32844_32914 = state_32810__$1;
(statearr_32844_32914[(2)] = inst_32725);

(statearr_32844_32914[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32811 === (36))){
var inst_32769 = (state_32810[(25)]);
var inst_32773 = cljs.core.chunk_first.call(null,inst_32769);
var inst_32774 = cljs.core.chunk_rest.call(null,inst_32769);
var inst_32775 = cljs.core.count.call(null,inst_32773);
var inst_32750 = inst_32774;
var inst_32751 = inst_32773;
var inst_32752 = inst_32775;
var inst_32753 = (0);
var state_32810__$1 = (function (){var statearr_32845 = state_32810;
(statearr_32845[(20)] = inst_32750);

(statearr_32845[(9)] = inst_32751);

(statearr_32845[(12)] = inst_32753);

(statearr_32845[(21)] = inst_32752);

return statearr_32845;
})();
var statearr_32846_32915 = state_32810__$1;
(statearr_32846_32915[(2)] = null);

(statearr_32846_32915[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32811 === (41))){
var inst_32769 = (state_32810[(25)]);
var inst_32785 = (state_32810[(2)]);
var inst_32786 = cljs.core.next.call(null,inst_32769);
var inst_32750 = inst_32786;
var inst_32751 = null;
var inst_32752 = (0);
var inst_32753 = (0);
var state_32810__$1 = (function (){var statearr_32847 = state_32810;
(statearr_32847[(20)] = inst_32750);

(statearr_32847[(9)] = inst_32751);

(statearr_32847[(27)] = inst_32785);

(statearr_32847[(12)] = inst_32753);

(statearr_32847[(21)] = inst_32752);

return statearr_32847;
})();
var statearr_32848_32916 = state_32810__$1;
(statearr_32848_32916[(2)] = null);

(statearr_32848_32916[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32811 === (43))){
var state_32810__$1 = state_32810;
var statearr_32849_32917 = state_32810__$1;
(statearr_32849_32917[(2)] = null);

(statearr_32849_32917[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32811 === (29))){
var inst_32794 = (state_32810[(2)]);
var state_32810__$1 = state_32810;
var statearr_32850_32918 = state_32810__$1;
(statearr_32850_32918[(2)] = inst_32794);

(statearr_32850_32918[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32811 === (44))){
var inst_32803 = (state_32810[(2)]);
var state_32810__$1 = (function (){var statearr_32851 = state_32810;
(statearr_32851[(28)] = inst_32803);

return statearr_32851;
})();
var statearr_32852_32919 = state_32810__$1;
(statearr_32852_32919[(2)] = null);

(statearr_32852_32919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32811 === (6))){
var inst_32742 = (state_32810[(29)]);
var inst_32741 = cljs.core.deref.call(null,cs);
var inst_32742__$1 = cljs.core.keys.call(null,inst_32741);
var inst_32743 = cljs.core.count.call(null,inst_32742__$1);
var inst_32744 = cljs.core.reset_BANG_.call(null,dctr,inst_32743);
var inst_32749 = cljs.core.seq.call(null,inst_32742__$1);
var inst_32750 = inst_32749;
var inst_32751 = null;
var inst_32752 = (0);
var inst_32753 = (0);
var state_32810__$1 = (function (){var statearr_32853 = state_32810;
(statearr_32853[(20)] = inst_32750);

(statearr_32853[(9)] = inst_32751);

(statearr_32853[(29)] = inst_32742__$1);

(statearr_32853[(12)] = inst_32753);

(statearr_32853[(30)] = inst_32744);

(statearr_32853[(21)] = inst_32752);

return statearr_32853;
})();
var statearr_32854_32920 = state_32810__$1;
(statearr_32854_32920[(2)] = null);

(statearr_32854_32920[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32811 === (28))){
var inst_32750 = (state_32810[(20)]);
var inst_32769 = (state_32810[(25)]);
var inst_32769__$1 = cljs.core.seq.call(null,inst_32750);
var state_32810__$1 = (function (){var statearr_32855 = state_32810;
(statearr_32855[(25)] = inst_32769__$1);

return statearr_32855;
})();
if(inst_32769__$1){
var statearr_32856_32921 = state_32810__$1;
(statearr_32856_32921[(1)] = (33));

} else {
var statearr_32857_32922 = state_32810__$1;
(statearr_32857_32922[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32811 === (25))){
var inst_32753 = (state_32810[(12)]);
var inst_32752 = (state_32810[(21)]);
var inst_32755 = (inst_32753 < inst_32752);
var inst_32756 = inst_32755;
var state_32810__$1 = state_32810;
if(cljs.core.truth_(inst_32756)){
var statearr_32858_32923 = state_32810__$1;
(statearr_32858_32923[(1)] = (27));

} else {
var statearr_32859_32924 = state_32810__$1;
(statearr_32859_32924[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32811 === (34))){
var state_32810__$1 = state_32810;
var statearr_32860_32925 = state_32810__$1;
(statearr_32860_32925[(2)] = null);

(statearr_32860_32925[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32811 === (17))){
var state_32810__$1 = state_32810;
var statearr_32861_32926 = state_32810__$1;
(statearr_32861_32926[(2)] = null);

(statearr_32861_32926[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32811 === (3))){
var inst_32808 = (state_32810[(2)]);
var state_32810__$1 = state_32810;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32810__$1,inst_32808);
} else {
if((state_val_32811 === (12))){
var inst_32737 = (state_32810[(2)]);
var state_32810__$1 = state_32810;
var statearr_32862_32927 = state_32810__$1;
(statearr_32862_32927[(2)] = inst_32737);

(statearr_32862_32927[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32811 === (2))){
var state_32810__$1 = state_32810;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32810__$1,(4),ch);
} else {
if((state_val_32811 === (23))){
var state_32810__$1 = state_32810;
var statearr_32863_32928 = state_32810__$1;
(statearr_32863_32928[(2)] = null);

(statearr_32863_32928[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32811 === (35))){
var inst_32792 = (state_32810[(2)]);
var state_32810__$1 = state_32810;
var statearr_32864_32929 = state_32810__$1;
(statearr_32864_32929[(2)] = inst_32792);

(statearr_32864_32929[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32811 === (19))){
var inst_32709 = (state_32810[(7)]);
var inst_32713 = cljs.core.chunk_first.call(null,inst_32709);
var inst_32714 = cljs.core.chunk_rest.call(null,inst_32709);
var inst_32715 = cljs.core.count.call(null,inst_32713);
var inst_32687 = inst_32714;
var inst_32688 = inst_32713;
var inst_32689 = inst_32715;
var inst_32690 = (0);
var state_32810__$1 = (function (){var statearr_32865 = state_32810;
(statearr_32865[(13)] = inst_32688);

(statearr_32865[(14)] = inst_32689);

(statearr_32865[(16)] = inst_32690);

(statearr_32865[(17)] = inst_32687);

return statearr_32865;
})();
var statearr_32866_32930 = state_32810__$1;
(statearr_32866_32930[(2)] = null);

(statearr_32866_32930[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32811 === (11))){
var inst_32709 = (state_32810[(7)]);
var inst_32687 = (state_32810[(17)]);
var inst_32709__$1 = cljs.core.seq.call(null,inst_32687);
var state_32810__$1 = (function (){var statearr_32867 = state_32810;
(statearr_32867[(7)] = inst_32709__$1);

return statearr_32867;
})();
if(inst_32709__$1){
var statearr_32868_32931 = state_32810__$1;
(statearr_32868_32931[(1)] = (16));

} else {
var statearr_32869_32932 = state_32810__$1;
(statearr_32869_32932[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32811 === (9))){
var inst_32739 = (state_32810[(2)]);
var state_32810__$1 = state_32810;
var statearr_32870_32933 = state_32810__$1;
(statearr_32870_32933[(2)] = inst_32739);

(statearr_32870_32933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32811 === (5))){
var inst_32685 = cljs.core.deref.call(null,cs);
var inst_32686 = cljs.core.seq.call(null,inst_32685);
var inst_32687 = inst_32686;
var inst_32688 = null;
var inst_32689 = (0);
var inst_32690 = (0);
var state_32810__$1 = (function (){var statearr_32871 = state_32810;
(statearr_32871[(13)] = inst_32688);

(statearr_32871[(14)] = inst_32689);

(statearr_32871[(16)] = inst_32690);

(statearr_32871[(17)] = inst_32687);

return statearr_32871;
})();
var statearr_32872_32934 = state_32810__$1;
(statearr_32872_32934[(2)] = null);

(statearr_32872_32934[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32811 === (14))){
var state_32810__$1 = state_32810;
var statearr_32873_32935 = state_32810__$1;
(statearr_32873_32935[(2)] = null);

(statearr_32873_32935[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32811 === (45))){
var inst_32800 = (state_32810[(2)]);
var state_32810__$1 = state_32810;
var statearr_32874_32936 = state_32810__$1;
(statearr_32874_32936[(2)] = inst_32800);

(statearr_32874_32936[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32811 === (26))){
var inst_32742 = (state_32810[(29)]);
var inst_32796 = (state_32810[(2)]);
var inst_32797 = cljs.core.seq.call(null,inst_32742);
var state_32810__$1 = (function (){var statearr_32875 = state_32810;
(statearr_32875[(31)] = inst_32796);

return statearr_32875;
})();
if(inst_32797){
var statearr_32876_32937 = state_32810__$1;
(statearr_32876_32937[(1)] = (42));

} else {
var statearr_32877_32938 = state_32810__$1;
(statearr_32877_32938[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32811 === (16))){
var inst_32709 = (state_32810[(7)]);
var inst_32711 = cljs.core.chunked_seq_QMARK_.call(null,inst_32709);
var state_32810__$1 = state_32810;
if(inst_32711){
var statearr_32878_32939 = state_32810__$1;
(statearr_32878_32939[(1)] = (19));

} else {
var statearr_32879_32940 = state_32810__$1;
(statearr_32879_32940[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32811 === (38))){
var inst_32789 = (state_32810[(2)]);
var state_32810__$1 = state_32810;
var statearr_32880_32941 = state_32810__$1;
(statearr_32880_32941[(2)] = inst_32789);

(statearr_32880_32941[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32811 === (30))){
var state_32810__$1 = state_32810;
var statearr_32881_32942 = state_32810__$1;
(statearr_32881_32942[(2)] = null);

(statearr_32881_32942[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32811 === (10))){
var inst_32688 = (state_32810[(13)]);
var inst_32690 = (state_32810[(16)]);
var inst_32698 = cljs.core._nth.call(null,inst_32688,inst_32690);
var inst_32699 = cljs.core.nth.call(null,inst_32698,(0),null);
var inst_32700 = cljs.core.nth.call(null,inst_32698,(1),null);
var state_32810__$1 = (function (){var statearr_32882 = state_32810;
(statearr_32882[(26)] = inst_32699);

return statearr_32882;
})();
if(cljs.core.truth_(inst_32700)){
var statearr_32883_32943 = state_32810__$1;
(statearr_32883_32943[(1)] = (13));

} else {
var statearr_32884_32944 = state_32810__$1;
(statearr_32884_32944[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32811 === (18))){
var inst_32735 = (state_32810[(2)]);
var state_32810__$1 = state_32810;
var statearr_32885_32945 = state_32810__$1;
(statearr_32885_32945[(2)] = inst_32735);

(statearr_32885_32945[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32811 === (42))){
var state_32810__$1 = state_32810;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32810__$1,(45),dchan);
} else {
if((state_val_32811 === (37))){
var inst_32778 = (state_32810[(23)]);
var inst_32769 = (state_32810[(25)]);
var inst_32678 = (state_32810[(10)]);
var inst_32778__$1 = cljs.core.first.call(null,inst_32769);
var inst_32779 = cljs.core.async.put_BANG_.call(null,inst_32778__$1,inst_32678,done);
var state_32810__$1 = (function (){var statearr_32886 = state_32810;
(statearr_32886[(23)] = inst_32778__$1);

return statearr_32886;
})();
if(cljs.core.truth_(inst_32779)){
var statearr_32887_32946 = state_32810__$1;
(statearr_32887_32946[(1)] = (39));

} else {
var statearr_32888_32947 = state_32810__$1;
(statearr_32888_32947[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32811 === (8))){
var inst_32689 = (state_32810[(14)]);
var inst_32690 = (state_32810[(16)]);
var inst_32692 = (inst_32690 < inst_32689);
var inst_32693 = inst_32692;
var state_32810__$1 = state_32810;
if(cljs.core.truth_(inst_32693)){
var statearr_32889_32948 = state_32810__$1;
(statearr_32889_32948[(1)] = (10));

} else {
var statearr_32890_32949 = state_32810__$1;
(statearr_32890_32949[(1)] = (11));

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
});})(c__32090__auto___32895,cs,m,dchan,dctr,done))
;
return ((function (switch__32002__auto__,c__32090__auto___32895,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__32003__auto__ = null;
var cljs$core$async$mult_$_state_machine__32003__auto____0 = (function (){
var statearr_32891 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32891[(0)] = cljs$core$async$mult_$_state_machine__32003__auto__);

(statearr_32891[(1)] = (1));

return statearr_32891;
});
var cljs$core$async$mult_$_state_machine__32003__auto____1 = (function (state_32810){
while(true){
var ret_value__32004__auto__ = (function (){try{while(true){
var result__32005__auto__ = switch__32002__auto__.call(null,state_32810);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32005__auto__;
}
break;
}
}catch (e32892){if((e32892 instanceof Object)){
var ex__32006__auto__ = e32892;
var statearr_32893_32950 = state_32810;
(statearr_32893_32950[(5)] = ex__32006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32810);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32892;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32951 = state_32810;
state_32810 = G__32951;
continue;
} else {
return ret_value__32004__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32003__auto__ = function(state_32810){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32003__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32003__auto____1.call(this,state_32810);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__32003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32003__auto____0;
cljs$core$async$mult_$_state_machine__32003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32003__auto____1;
return cljs$core$async$mult_$_state_machine__32003__auto__;
})()
;})(switch__32002__auto__,c__32090__auto___32895,cs,m,dchan,dctr,done))
})();
var state__32092__auto__ = (function (){var statearr_32894 = f__32091__auto__.call(null);
(statearr_32894[(6)] = c__32090__auto___32895);

return statearr_32894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32092__auto__);
});})(c__32090__auto___32895,cs,m,dchan,dctr,done))
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
var G__32953 = arguments.length;
switch (G__32953) {
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
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__29006__auto__ = (((m == null))?null:m);
var m__29007__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__29006__auto__)]);
if(!((m__29007__auto__ == null))){
return m__29007__auto__.call(null,m,ch);
} else {
var m__29007__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__29007__auto____$1 == null))){
return m__29007__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__29006__auto__ = (((m == null))?null:m);
var m__29007__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__29006__auto__)]);
if(!((m__29007__auto__ == null))){
return m__29007__auto__.call(null,m,ch);
} else {
var m__29007__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__29007__auto____$1 == null))){
return m__29007__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__29006__auto__ = (((m == null))?null:m);
var m__29007__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__29006__auto__)]);
if(!((m__29007__auto__ == null))){
return m__29007__auto__.call(null,m);
} else {
var m__29007__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__29007__auto____$1 == null))){
return m__29007__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__29006__auto__ = (((m == null))?null:m);
var m__29007__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__29006__auto__)]);
if(!((m__29007__auto__ == null))){
return m__29007__auto__.call(null,m,state_map);
} else {
var m__29007__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__29007__auto____$1 == null))){
return m__29007__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__29006__auto__ = (((m == null))?null:m);
var m__29007__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__29006__auto__)]);
if(!((m__29007__auto__ == null))){
return m__29007__auto__.call(null,m,mode);
} else {
var m__29007__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__29007__auto____$1 == null))){
return m__29007__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__29499__auto__ = [];
var len__29492__auto___32965 = arguments.length;
var i__29493__auto___32966 = (0);
while(true){
if((i__29493__auto___32966 < len__29492__auto___32965)){
args__29499__auto__.push((arguments[i__29493__auto___32966]));

var G__32967 = (i__29493__auto___32966 + (1));
i__29493__auto___32966 = G__32967;
continue;
} else {
}
break;
}

var argseq__29500__auto__ = ((((3) < args__29499__auto__.length))?(new cljs.core.IndexedSeq(args__29499__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29500__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32959){
var map__32960 = p__32959;
var map__32960__$1 = ((((!((map__32960 == null)))?((((map__32960.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32960.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32960):map__32960);
var opts = map__32960__$1;
var statearr_32962_32968 = state;
(statearr_32962_32968[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__32960,map__32960__$1,opts){
return (function (val){
var statearr_32963_32969 = state;
(statearr_32963_32969[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__32960,map__32960__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_32964_32970 = state;
(statearr_32964_32970[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32955){
var G__32956 = cljs.core.first.call(null,seq32955);
var seq32955__$1 = cljs.core.next.call(null,seq32955);
var G__32957 = cljs.core.first.call(null,seq32955__$1);
var seq32955__$2 = cljs.core.next.call(null,seq32955__$1);
var G__32958 = cljs.core.first.call(null,seq32955__$2);
var seq32955__$3 = cljs.core.next.call(null,seq32955__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32956,G__32957,G__32958,seq32955__$3);
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async32971 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32971 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta32972){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta32972 = meta32972;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32971.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32973,meta32972__$1){
var self__ = this;
var _32973__$1 = this;
return (new cljs.core.async.t_cljs$core$async32971(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta32972__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32971.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32973){
var self__ = this;
var _32973__$1 = this;
return self__.meta32972;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32971.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32971.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32971.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32971.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32971.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32971.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32971.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32971.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32971.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta32972","meta32972",1885381019,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async32971.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32971.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32971";

cljs.core.async.t_cljs$core$async32971.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__28948__auto__,writer__28949__auto__,opt__28950__auto__){
return cljs.core._write.call(null,writer__28949__auto__,"cljs.core.async/t_cljs$core$async32971");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async32971 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async32971(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta32972){
return (new cljs.core.async.t_cljs$core$async32971(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta32972));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async32971(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32090__auto___33135 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32090__auto___33135,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__32091__auto__ = (function (){var switch__32002__auto__ = ((function (c__32090__auto___33135,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_33075){
var state_val_33076 = (state_33075[(1)]);
if((state_val_33076 === (7))){
var inst_32990 = (state_33075[(2)]);
var state_33075__$1 = state_33075;
var statearr_33077_33136 = state_33075__$1;
(statearr_33077_33136[(2)] = inst_32990);

(statearr_33077_33136[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33076 === (20))){
var inst_33002 = (state_33075[(7)]);
var state_33075__$1 = state_33075;
var statearr_33078_33137 = state_33075__$1;
(statearr_33078_33137[(2)] = inst_33002);

(statearr_33078_33137[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33076 === (27))){
var state_33075__$1 = state_33075;
var statearr_33079_33138 = state_33075__$1;
(statearr_33079_33138[(2)] = null);

(statearr_33079_33138[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33076 === (1))){
var inst_32977 = (state_33075[(8)]);
var inst_32977__$1 = calc_state.call(null);
var inst_32979 = (inst_32977__$1 == null);
var inst_32980 = cljs.core.not.call(null,inst_32979);
var state_33075__$1 = (function (){var statearr_33080 = state_33075;
(statearr_33080[(8)] = inst_32977__$1);

return statearr_33080;
})();
if(inst_32980){
var statearr_33081_33139 = state_33075__$1;
(statearr_33081_33139[(1)] = (2));

} else {
var statearr_33082_33140 = state_33075__$1;
(statearr_33082_33140[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33076 === (24))){
var inst_33026 = (state_33075[(9)]);
var inst_33035 = (state_33075[(10)]);
var inst_33049 = (state_33075[(11)]);
var inst_33049__$1 = inst_33026.call(null,inst_33035);
var state_33075__$1 = (function (){var statearr_33083 = state_33075;
(statearr_33083[(11)] = inst_33049__$1);

return statearr_33083;
})();
if(cljs.core.truth_(inst_33049__$1)){
var statearr_33084_33141 = state_33075__$1;
(statearr_33084_33141[(1)] = (29));

} else {
var statearr_33085_33142 = state_33075__$1;
(statearr_33085_33142[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33076 === (4))){
var inst_32993 = (state_33075[(2)]);
var state_33075__$1 = state_33075;
if(cljs.core.truth_(inst_32993)){
var statearr_33086_33143 = state_33075__$1;
(statearr_33086_33143[(1)] = (8));

} else {
var statearr_33087_33144 = state_33075__$1;
(statearr_33087_33144[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33076 === (15))){
var inst_33020 = (state_33075[(2)]);
var state_33075__$1 = state_33075;
if(cljs.core.truth_(inst_33020)){
var statearr_33088_33145 = state_33075__$1;
(statearr_33088_33145[(1)] = (19));

} else {
var statearr_33089_33146 = state_33075__$1;
(statearr_33089_33146[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33076 === (21))){
var inst_33025 = (state_33075[(12)]);
var inst_33025__$1 = (state_33075[(2)]);
var inst_33026 = cljs.core.get.call(null,inst_33025__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33027 = cljs.core.get.call(null,inst_33025__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33028 = cljs.core.get.call(null,inst_33025__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33075__$1 = (function (){var statearr_33090 = state_33075;
(statearr_33090[(12)] = inst_33025__$1);

(statearr_33090[(9)] = inst_33026);

(statearr_33090[(13)] = inst_33027);

return statearr_33090;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_33075__$1,(22),inst_33028);
} else {
if((state_val_33076 === (31))){
var inst_33057 = (state_33075[(2)]);
var state_33075__$1 = state_33075;
if(cljs.core.truth_(inst_33057)){
var statearr_33091_33147 = state_33075__$1;
(statearr_33091_33147[(1)] = (32));

} else {
var statearr_33092_33148 = state_33075__$1;
(statearr_33092_33148[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33076 === (32))){
var inst_33034 = (state_33075[(14)]);
var state_33075__$1 = state_33075;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33075__$1,(35),out,inst_33034);
} else {
if((state_val_33076 === (33))){
var inst_33025 = (state_33075[(12)]);
var inst_33002 = inst_33025;
var state_33075__$1 = (function (){var statearr_33093 = state_33075;
(statearr_33093[(7)] = inst_33002);

return statearr_33093;
})();
var statearr_33094_33149 = state_33075__$1;
(statearr_33094_33149[(2)] = null);

(statearr_33094_33149[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33076 === (13))){
var inst_33002 = (state_33075[(7)]);
var inst_33009 = inst_33002.cljs$lang$protocol_mask$partition0$;
var inst_33010 = (inst_33009 & (64));
var inst_33011 = inst_33002.cljs$core$ISeq$;
var inst_33012 = (cljs.core.PROTOCOL_SENTINEL === inst_33011);
var inst_33013 = (inst_33010) || (inst_33012);
var state_33075__$1 = state_33075;
if(cljs.core.truth_(inst_33013)){
var statearr_33095_33150 = state_33075__$1;
(statearr_33095_33150[(1)] = (16));

} else {
var statearr_33096_33151 = state_33075__$1;
(statearr_33096_33151[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33076 === (22))){
var inst_33035 = (state_33075[(10)]);
var inst_33034 = (state_33075[(14)]);
var inst_33033 = (state_33075[(2)]);
var inst_33034__$1 = cljs.core.nth.call(null,inst_33033,(0),null);
var inst_33035__$1 = cljs.core.nth.call(null,inst_33033,(1),null);
var inst_33036 = (inst_33034__$1 == null);
var inst_33037 = cljs.core._EQ_.call(null,inst_33035__$1,change);
var inst_33038 = (inst_33036) || (inst_33037);
var state_33075__$1 = (function (){var statearr_33097 = state_33075;
(statearr_33097[(10)] = inst_33035__$1);

(statearr_33097[(14)] = inst_33034__$1);

return statearr_33097;
})();
if(cljs.core.truth_(inst_33038)){
var statearr_33098_33152 = state_33075__$1;
(statearr_33098_33152[(1)] = (23));

} else {
var statearr_33099_33153 = state_33075__$1;
(statearr_33099_33153[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33076 === (36))){
var inst_33025 = (state_33075[(12)]);
var inst_33002 = inst_33025;
var state_33075__$1 = (function (){var statearr_33100 = state_33075;
(statearr_33100[(7)] = inst_33002);

return statearr_33100;
})();
var statearr_33101_33154 = state_33075__$1;
(statearr_33101_33154[(2)] = null);

(statearr_33101_33154[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33076 === (29))){
var inst_33049 = (state_33075[(11)]);
var state_33075__$1 = state_33075;
var statearr_33102_33155 = state_33075__$1;
(statearr_33102_33155[(2)] = inst_33049);

(statearr_33102_33155[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33076 === (6))){
var state_33075__$1 = state_33075;
var statearr_33103_33156 = state_33075__$1;
(statearr_33103_33156[(2)] = false);

(statearr_33103_33156[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33076 === (28))){
var inst_33045 = (state_33075[(2)]);
var inst_33046 = calc_state.call(null);
var inst_33002 = inst_33046;
var state_33075__$1 = (function (){var statearr_33104 = state_33075;
(statearr_33104[(7)] = inst_33002);

(statearr_33104[(15)] = inst_33045);

return statearr_33104;
})();
var statearr_33105_33157 = state_33075__$1;
(statearr_33105_33157[(2)] = null);

(statearr_33105_33157[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33076 === (25))){
var inst_33071 = (state_33075[(2)]);
var state_33075__$1 = state_33075;
var statearr_33106_33158 = state_33075__$1;
(statearr_33106_33158[(2)] = inst_33071);

(statearr_33106_33158[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33076 === (34))){
var inst_33069 = (state_33075[(2)]);
var state_33075__$1 = state_33075;
var statearr_33107_33159 = state_33075__$1;
(statearr_33107_33159[(2)] = inst_33069);

(statearr_33107_33159[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33076 === (17))){
var state_33075__$1 = state_33075;
var statearr_33108_33160 = state_33075__$1;
(statearr_33108_33160[(2)] = false);

(statearr_33108_33160[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33076 === (3))){
var state_33075__$1 = state_33075;
var statearr_33109_33161 = state_33075__$1;
(statearr_33109_33161[(2)] = false);

(statearr_33109_33161[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33076 === (12))){
var inst_33073 = (state_33075[(2)]);
var state_33075__$1 = state_33075;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33075__$1,inst_33073);
} else {
if((state_val_33076 === (2))){
var inst_32977 = (state_33075[(8)]);
var inst_32982 = inst_32977.cljs$lang$protocol_mask$partition0$;
var inst_32983 = (inst_32982 & (64));
var inst_32984 = inst_32977.cljs$core$ISeq$;
var inst_32985 = (cljs.core.PROTOCOL_SENTINEL === inst_32984);
var inst_32986 = (inst_32983) || (inst_32985);
var state_33075__$1 = state_33075;
if(cljs.core.truth_(inst_32986)){
var statearr_33110_33162 = state_33075__$1;
(statearr_33110_33162[(1)] = (5));

} else {
var statearr_33111_33163 = state_33075__$1;
(statearr_33111_33163[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33076 === (23))){
var inst_33034 = (state_33075[(14)]);
var inst_33040 = (inst_33034 == null);
var state_33075__$1 = state_33075;
if(cljs.core.truth_(inst_33040)){
var statearr_33112_33164 = state_33075__$1;
(statearr_33112_33164[(1)] = (26));

} else {
var statearr_33113_33165 = state_33075__$1;
(statearr_33113_33165[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33076 === (35))){
var inst_33060 = (state_33075[(2)]);
var state_33075__$1 = state_33075;
if(cljs.core.truth_(inst_33060)){
var statearr_33114_33166 = state_33075__$1;
(statearr_33114_33166[(1)] = (36));

} else {
var statearr_33115_33167 = state_33075__$1;
(statearr_33115_33167[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33076 === (19))){
var inst_33002 = (state_33075[(7)]);
var inst_33022 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33002);
var state_33075__$1 = state_33075;
var statearr_33116_33168 = state_33075__$1;
(statearr_33116_33168[(2)] = inst_33022);

(statearr_33116_33168[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33076 === (11))){
var inst_33002 = (state_33075[(7)]);
var inst_33006 = (inst_33002 == null);
var inst_33007 = cljs.core.not.call(null,inst_33006);
var state_33075__$1 = state_33075;
if(inst_33007){
var statearr_33117_33169 = state_33075__$1;
(statearr_33117_33169[(1)] = (13));

} else {
var statearr_33118_33170 = state_33075__$1;
(statearr_33118_33170[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33076 === (9))){
var inst_32977 = (state_33075[(8)]);
var state_33075__$1 = state_33075;
var statearr_33119_33171 = state_33075__$1;
(statearr_33119_33171[(2)] = inst_32977);

(statearr_33119_33171[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33076 === (5))){
var state_33075__$1 = state_33075;
var statearr_33120_33172 = state_33075__$1;
(statearr_33120_33172[(2)] = true);

(statearr_33120_33172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33076 === (14))){
var state_33075__$1 = state_33075;
var statearr_33121_33173 = state_33075__$1;
(statearr_33121_33173[(2)] = false);

(statearr_33121_33173[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33076 === (26))){
var inst_33035 = (state_33075[(10)]);
var inst_33042 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_33035);
var state_33075__$1 = state_33075;
var statearr_33122_33174 = state_33075__$1;
(statearr_33122_33174[(2)] = inst_33042);

(statearr_33122_33174[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33076 === (16))){
var state_33075__$1 = state_33075;
var statearr_33123_33175 = state_33075__$1;
(statearr_33123_33175[(2)] = true);

(statearr_33123_33175[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33076 === (38))){
var inst_33065 = (state_33075[(2)]);
var state_33075__$1 = state_33075;
var statearr_33124_33176 = state_33075__$1;
(statearr_33124_33176[(2)] = inst_33065);

(statearr_33124_33176[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33076 === (30))){
var inst_33026 = (state_33075[(9)]);
var inst_33035 = (state_33075[(10)]);
var inst_33027 = (state_33075[(13)]);
var inst_33052 = cljs.core.empty_QMARK_.call(null,inst_33026);
var inst_33053 = inst_33027.call(null,inst_33035);
var inst_33054 = cljs.core.not.call(null,inst_33053);
var inst_33055 = (inst_33052) && (inst_33054);
var state_33075__$1 = state_33075;
var statearr_33125_33177 = state_33075__$1;
(statearr_33125_33177[(2)] = inst_33055);

(statearr_33125_33177[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33076 === (10))){
var inst_32977 = (state_33075[(8)]);
var inst_32998 = (state_33075[(2)]);
var inst_32999 = cljs.core.get.call(null,inst_32998,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33000 = cljs.core.get.call(null,inst_32998,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33001 = cljs.core.get.call(null,inst_32998,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33002 = inst_32977;
var state_33075__$1 = (function (){var statearr_33126 = state_33075;
(statearr_33126[(7)] = inst_33002);

(statearr_33126[(16)] = inst_32999);

(statearr_33126[(17)] = inst_33001);

(statearr_33126[(18)] = inst_33000);

return statearr_33126;
})();
var statearr_33127_33178 = state_33075__$1;
(statearr_33127_33178[(2)] = null);

(statearr_33127_33178[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33076 === (18))){
var inst_33017 = (state_33075[(2)]);
var state_33075__$1 = state_33075;
var statearr_33128_33179 = state_33075__$1;
(statearr_33128_33179[(2)] = inst_33017);

(statearr_33128_33179[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33076 === (37))){
var state_33075__$1 = state_33075;
var statearr_33129_33180 = state_33075__$1;
(statearr_33129_33180[(2)] = null);

(statearr_33129_33180[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33076 === (8))){
var inst_32977 = (state_33075[(8)]);
var inst_32995 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32977);
var state_33075__$1 = state_33075;
var statearr_33130_33181 = state_33075__$1;
(statearr_33130_33181[(2)] = inst_32995);

(statearr_33130_33181[(1)] = (10));


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
});})(c__32090__auto___33135,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__32002__auto__,c__32090__auto___33135,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__32003__auto__ = null;
var cljs$core$async$mix_$_state_machine__32003__auto____0 = (function (){
var statearr_33131 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33131[(0)] = cljs$core$async$mix_$_state_machine__32003__auto__);

(statearr_33131[(1)] = (1));

return statearr_33131;
});
var cljs$core$async$mix_$_state_machine__32003__auto____1 = (function (state_33075){
while(true){
var ret_value__32004__auto__ = (function (){try{while(true){
var result__32005__auto__ = switch__32002__auto__.call(null,state_33075);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32005__auto__;
}
break;
}
}catch (e33132){if((e33132 instanceof Object)){
var ex__32006__auto__ = e33132;
var statearr_33133_33182 = state_33075;
(statearr_33133_33182[(5)] = ex__32006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33075);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33132;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33183 = state_33075;
state_33075 = G__33183;
continue;
} else {
return ret_value__32004__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32003__auto__ = function(state_33075){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32003__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32003__auto____1.call(this,state_33075);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__32003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32003__auto____0;
cljs$core$async$mix_$_state_machine__32003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32003__auto____1;
return cljs$core$async$mix_$_state_machine__32003__auto__;
})()
;})(switch__32002__auto__,c__32090__auto___33135,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__32092__auto__ = (function (){var statearr_33134 = f__32091__auto__.call(null);
(statearr_33134[(6)] = c__32090__auto___33135);

return statearr_33134;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32092__auto__);
});})(c__32090__auto___33135,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__29006__auto__ = (((p == null))?null:p);
var m__29007__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__29006__auto__)]);
if(!((m__29007__auto__ == null))){
return m__29007__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__29007__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__29007__auto____$1 == null))){
return m__29007__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__29006__auto__ = (((p == null))?null:p);
var m__29007__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__29006__auto__)]);
if(!((m__29007__auto__ == null))){
return m__29007__auto__.call(null,p,v,ch);
} else {
var m__29007__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__29007__auto____$1 == null))){
return m__29007__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__33185 = arguments.length;
switch (G__33185) {
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
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__29006__auto__ = (((p == null))?null:p);
var m__29007__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__29006__auto__)]);
if(!((m__29007__auto__ == null))){
return m__29007__auto__.call(null,p);
} else {
var m__29007__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__29007__auto____$1 == null))){
return m__29007__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__29006__auto__ = (((p == null))?null:p);
var m__29007__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__29006__auto__)]);
if(!((m__29007__auto__ == null))){
return m__29007__auto__.call(null,p,v);
} else {
var m__29007__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__29007__auto____$1 == null))){
return m__29007__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
var G__33189 = arguments.length;
switch (G__33189) {
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
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__28323__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__28323__auto__)){
return or__28323__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__28323__auto__,mults){
return (function (p1__33187_SHARP_){
if(cljs.core.truth_(p1__33187_SHARP_.call(null,topic))){
return p1__33187_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__33187_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__28323__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async33190 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33190 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33191){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33191 = meta33191;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33190.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_33192,meta33191__$1){
var self__ = this;
var _33192__$1 = this;
return (new cljs.core.async.t_cljs$core$async33190(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33191__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33190.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_33192){
var self__ = this;
var _33192__$1 = this;
return self__.meta33191;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33190.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33190.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33190.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33190.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33190.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33190.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33190.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33190.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33191","meta33191",1997397260,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33190.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33190.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33190";

cljs.core.async.t_cljs$core$async33190.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__28948__auto__,writer__28949__auto__,opt__28950__auto__){
return cljs.core._write.call(null,writer__28949__auto__,"cljs.core.async/t_cljs$core$async33190");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async33190 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async33190(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33191){
return (new cljs.core.async.t_cljs$core$async33190(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33191));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async33190(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32090__auto___33310 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32090__auto___33310,mults,ensure_mult,p){
return (function (){
var f__32091__auto__ = (function (){var switch__32002__auto__ = ((function (c__32090__auto___33310,mults,ensure_mult,p){
return (function (state_33264){
var state_val_33265 = (state_33264[(1)]);
if((state_val_33265 === (7))){
var inst_33260 = (state_33264[(2)]);
var state_33264__$1 = state_33264;
var statearr_33266_33311 = state_33264__$1;
(statearr_33266_33311[(2)] = inst_33260);

(statearr_33266_33311[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (20))){
var state_33264__$1 = state_33264;
var statearr_33267_33312 = state_33264__$1;
(statearr_33267_33312[(2)] = null);

(statearr_33267_33312[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (1))){
var state_33264__$1 = state_33264;
var statearr_33268_33313 = state_33264__$1;
(statearr_33268_33313[(2)] = null);

(statearr_33268_33313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (24))){
var inst_33243 = (state_33264[(7)]);
var inst_33252 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_33243);
var state_33264__$1 = state_33264;
var statearr_33269_33314 = state_33264__$1;
(statearr_33269_33314[(2)] = inst_33252);

(statearr_33269_33314[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (4))){
var inst_33195 = (state_33264[(8)]);
var inst_33195__$1 = (state_33264[(2)]);
var inst_33196 = (inst_33195__$1 == null);
var state_33264__$1 = (function (){var statearr_33270 = state_33264;
(statearr_33270[(8)] = inst_33195__$1);

return statearr_33270;
})();
if(cljs.core.truth_(inst_33196)){
var statearr_33271_33315 = state_33264__$1;
(statearr_33271_33315[(1)] = (5));

} else {
var statearr_33272_33316 = state_33264__$1;
(statearr_33272_33316[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (15))){
var inst_33237 = (state_33264[(2)]);
var state_33264__$1 = state_33264;
var statearr_33273_33317 = state_33264__$1;
(statearr_33273_33317[(2)] = inst_33237);

(statearr_33273_33317[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (21))){
var inst_33257 = (state_33264[(2)]);
var state_33264__$1 = (function (){var statearr_33274 = state_33264;
(statearr_33274[(9)] = inst_33257);

return statearr_33274;
})();
var statearr_33275_33318 = state_33264__$1;
(statearr_33275_33318[(2)] = null);

(statearr_33275_33318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (13))){
var inst_33219 = (state_33264[(10)]);
var inst_33221 = cljs.core.chunked_seq_QMARK_.call(null,inst_33219);
var state_33264__$1 = state_33264;
if(inst_33221){
var statearr_33276_33319 = state_33264__$1;
(statearr_33276_33319[(1)] = (16));

} else {
var statearr_33277_33320 = state_33264__$1;
(statearr_33277_33320[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (22))){
var inst_33249 = (state_33264[(2)]);
var state_33264__$1 = state_33264;
if(cljs.core.truth_(inst_33249)){
var statearr_33278_33321 = state_33264__$1;
(statearr_33278_33321[(1)] = (23));

} else {
var statearr_33279_33322 = state_33264__$1;
(statearr_33279_33322[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (6))){
var inst_33243 = (state_33264[(7)]);
var inst_33245 = (state_33264[(11)]);
var inst_33195 = (state_33264[(8)]);
var inst_33243__$1 = topic_fn.call(null,inst_33195);
var inst_33244 = cljs.core.deref.call(null,mults);
var inst_33245__$1 = cljs.core.get.call(null,inst_33244,inst_33243__$1);
var state_33264__$1 = (function (){var statearr_33280 = state_33264;
(statearr_33280[(7)] = inst_33243__$1);

(statearr_33280[(11)] = inst_33245__$1);

return statearr_33280;
})();
if(cljs.core.truth_(inst_33245__$1)){
var statearr_33281_33323 = state_33264__$1;
(statearr_33281_33323[(1)] = (19));

} else {
var statearr_33282_33324 = state_33264__$1;
(statearr_33282_33324[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (25))){
var inst_33254 = (state_33264[(2)]);
var state_33264__$1 = state_33264;
var statearr_33283_33325 = state_33264__$1;
(statearr_33283_33325[(2)] = inst_33254);

(statearr_33283_33325[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (17))){
var inst_33219 = (state_33264[(10)]);
var inst_33228 = cljs.core.first.call(null,inst_33219);
var inst_33229 = cljs.core.async.muxch_STAR_.call(null,inst_33228);
var inst_33230 = cljs.core.async.close_BANG_.call(null,inst_33229);
var inst_33231 = cljs.core.next.call(null,inst_33219);
var inst_33205 = inst_33231;
var inst_33206 = null;
var inst_33207 = (0);
var inst_33208 = (0);
var state_33264__$1 = (function (){var statearr_33284 = state_33264;
(statearr_33284[(12)] = inst_33205);

(statearr_33284[(13)] = inst_33230);

(statearr_33284[(14)] = inst_33208);

(statearr_33284[(15)] = inst_33206);

(statearr_33284[(16)] = inst_33207);

return statearr_33284;
})();
var statearr_33285_33326 = state_33264__$1;
(statearr_33285_33326[(2)] = null);

(statearr_33285_33326[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (3))){
var inst_33262 = (state_33264[(2)]);
var state_33264__$1 = state_33264;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33264__$1,inst_33262);
} else {
if((state_val_33265 === (12))){
var inst_33239 = (state_33264[(2)]);
var state_33264__$1 = state_33264;
var statearr_33286_33327 = state_33264__$1;
(statearr_33286_33327[(2)] = inst_33239);

(statearr_33286_33327[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (2))){
var state_33264__$1 = state_33264;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33264__$1,(4),ch);
} else {
if((state_val_33265 === (23))){
var state_33264__$1 = state_33264;
var statearr_33287_33328 = state_33264__$1;
(statearr_33287_33328[(2)] = null);

(statearr_33287_33328[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (19))){
var inst_33245 = (state_33264[(11)]);
var inst_33195 = (state_33264[(8)]);
var inst_33247 = cljs.core.async.muxch_STAR_.call(null,inst_33245);
var state_33264__$1 = state_33264;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33264__$1,(22),inst_33247,inst_33195);
} else {
if((state_val_33265 === (11))){
var inst_33205 = (state_33264[(12)]);
var inst_33219 = (state_33264[(10)]);
var inst_33219__$1 = cljs.core.seq.call(null,inst_33205);
var state_33264__$1 = (function (){var statearr_33288 = state_33264;
(statearr_33288[(10)] = inst_33219__$1);

return statearr_33288;
})();
if(inst_33219__$1){
var statearr_33289_33329 = state_33264__$1;
(statearr_33289_33329[(1)] = (13));

} else {
var statearr_33290_33330 = state_33264__$1;
(statearr_33290_33330[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (9))){
var inst_33241 = (state_33264[(2)]);
var state_33264__$1 = state_33264;
var statearr_33291_33331 = state_33264__$1;
(statearr_33291_33331[(2)] = inst_33241);

(statearr_33291_33331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (5))){
var inst_33202 = cljs.core.deref.call(null,mults);
var inst_33203 = cljs.core.vals.call(null,inst_33202);
var inst_33204 = cljs.core.seq.call(null,inst_33203);
var inst_33205 = inst_33204;
var inst_33206 = null;
var inst_33207 = (0);
var inst_33208 = (0);
var state_33264__$1 = (function (){var statearr_33292 = state_33264;
(statearr_33292[(12)] = inst_33205);

(statearr_33292[(14)] = inst_33208);

(statearr_33292[(15)] = inst_33206);

(statearr_33292[(16)] = inst_33207);

return statearr_33292;
})();
var statearr_33293_33332 = state_33264__$1;
(statearr_33293_33332[(2)] = null);

(statearr_33293_33332[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (14))){
var state_33264__$1 = state_33264;
var statearr_33297_33333 = state_33264__$1;
(statearr_33297_33333[(2)] = null);

(statearr_33297_33333[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (16))){
var inst_33219 = (state_33264[(10)]);
var inst_33223 = cljs.core.chunk_first.call(null,inst_33219);
var inst_33224 = cljs.core.chunk_rest.call(null,inst_33219);
var inst_33225 = cljs.core.count.call(null,inst_33223);
var inst_33205 = inst_33224;
var inst_33206 = inst_33223;
var inst_33207 = inst_33225;
var inst_33208 = (0);
var state_33264__$1 = (function (){var statearr_33298 = state_33264;
(statearr_33298[(12)] = inst_33205);

(statearr_33298[(14)] = inst_33208);

(statearr_33298[(15)] = inst_33206);

(statearr_33298[(16)] = inst_33207);

return statearr_33298;
})();
var statearr_33299_33334 = state_33264__$1;
(statearr_33299_33334[(2)] = null);

(statearr_33299_33334[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (10))){
var inst_33205 = (state_33264[(12)]);
var inst_33208 = (state_33264[(14)]);
var inst_33206 = (state_33264[(15)]);
var inst_33207 = (state_33264[(16)]);
var inst_33213 = cljs.core._nth.call(null,inst_33206,inst_33208);
var inst_33214 = cljs.core.async.muxch_STAR_.call(null,inst_33213);
var inst_33215 = cljs.core.async.close_BANG_.call(null,inst_33214);
var inst_33216 = (inst_33208 + (1));
var tmp33294 = inst_33205;
var tmp33295 = inst_33206;
var tmp33296 = inst_33207;
var inst_33205__$1 = tmp33294;
var inst_33206__$1 = tmp33295;
var inst_33207__$1 = tmp33296;
var inst_33208__$1 = inst_33216;
var state_33264__$1 = (function (){var statearr_33300 = state_33264;
(statearr_33300[(12)] = inst_33205__$1);

(statearr_33300[(17)] = inst_33215);

(statearr_33300[(14)] = inst_33208__$1);

(statearr_33300[(15)] = inst_33206__$1);

(statearr_33300[(16)] = inst_33207__$1);

return statearr_33300;
})();
var statearr_33301_33335 = state_33264__$1;
(statearr_33301_33335[(2)] = null);

(statearr_33301_33335[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (18))){
var inst_33234 = (state_33264[(2)]);
var state_33264__$1 = state_33264;
var statearr_33302_33336 = state_33264__$1;
(statearr_33302_33336[(2)] = inst_33234);

(statearr_33302_33336[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33265 === (8))){
var inst_33208 = (state_33264[(14)]);
var inst_33207 = (state_33264[(16)]);
var inst_33210 = (inst_33208 < inst_33207);
var inst_33211 = inst_33210;
var state_33264__$1 = state_33264;
if(cljs.core.truth_(inst_33211)){
var statearr_33303_33337 = state_33264__$1;
(statearr_33303_33337[(1)] = (10));

} else {
var statearr_33304_33338 = state_33264__$1;
(statearr_33304_33338[(1)] = (11));

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
});})(c__32090__auto___33310,mults,ensure_mult,p))
;
return ((function (switch__32002__auto__,c__32090__auto___33310,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__32003__auto__ = null;
var cljs$core$async$state_machine__32003__auto____0 = (function (){
var statearr_33305 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33305[(0)] = cljs$core$async$state_machine__32003__auto__);

(statearr_33305[(1)] = (1));

return statearr_33305;
});
var cljs$core$async$state_machine__32003__auto____1 = (function (state_33264){
while(true){
var ret_value__32004__auto__ = (function (){try{while(true){
var result__32005__auto__ = switch__32002__auto__.call(null,state_33264);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32005__auto__;
}
break;
}
}catch (e33306){if((e33306 instanceof Object)){
var ex__32006__auto__ = e33306;
var statearr_33307_33339 = state_33264;
(statearr_33307_33339[(5)] = ex__32006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33264);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33306;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33340 = state_33264;
state_33264 = G__33340;
continue;
} else {
return ret_value__32004__auto__;
}
break;
}
});
cljs$core$async$state_machine__32003__auto__ = function(state_33264){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32003__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32003__auto____1.call(this,state_33264);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32003__auto____0;
cljs$core$async$state_machine__32003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32003__auto____1;
return cljs$core$async$state_machine__32003__auto__;
})()
;})(switch__32002__auto__,c__32090__auto___33310,mults,ensure_mult,p))
})();
var state__32092__auto__ = (function (){var statearr_33308 = f__32091__auto__.call(null);
(statearr_33308[(6)] = c__32090__auto___33310);

return statearr_33308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32092__auto__);
});})(c__32090__auto___33310,mults,ensure_mult,p))
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
var G__33342 = arguments.length;
switch (G__33342) {
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
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__33345 = arguments.length;
switch (G__33345) {
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
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
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
var G__33348 = arguments.length;
switch (G__33348) {
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
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__32090__auto___33415 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32090__auto___33415,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__32091__auto__ = (function (){var switch__32002__auto__ = ((function (c__32090__auto___33415,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_33387){
var state_val_33388 = (state_33387[(1)]);
if((state_val_33388 === (7))){
var state_33387__$1 = state_33387;
var statearr_33389_33416 = state_33387__$1;
(statearr_33389_33416[(2)] = null);

(statearr_33389_33416[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33388 === (1))){
var state_33387__$1 = state_33387;
var statearr_33390_33417 = state_33387__$1;
(statearr_33390_33417[(2)] = null);

(statearr_33390_33417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33388 === (4))){
var inst_33351 = (state_33387[(7)]);
var inst_33353 = (inst_33351 < cnt);
var state_33387__$1 = state_33387;
if(cljs.core.truth_(inst_33353)){
var statearr_33391_33418 = state_33387__$1;
(statearr_33391_33418[(1)] = (6));

} else {
var statearr_33392_33419 = state_33387__$1;
(statearr_33392_33419[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33388 === (15))){
var inst_33383 = (state_33387[(2)]);
var state_33387__$1 = state_33387;
var statearr_33393_33420 = state_33387__$1;
(statearr_33393_33420[(2)] = inst_33383);

(statearr_33393_33420[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33388 === (13))){
var inst_33376 = cljs.core.async.close_BANG_.call(null,out);
var state_33387__$1 = state_33387;
var statearr_33394_33421 = state_33387__$1;
(statearr_33394_33421[(2)] = inst_33376);

(statearr_33394_33421[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33388 === (6))){
var state_33387__$1 = state_33387;
var statearr_33395_33422 = state_33387__$1;
(statearr_33395_33422[(2)] = null);

(statearr_33395_33422[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33388 === (3))){
var inst_33385 = (state_33387[(2)]);
var state_33387__$1 = state_33387;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33387__$1,inst_33385);
} else {
if((state_val_33388 === (12))){
var inst_33373 = (state_33387[(8)]);
var inst_33373__$1 = (state_33387[(2)]);
var inst_33374 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_33373__$1);
var state_33387__$1 = (function (){var statearr_33396 = state_33387;
(statearr_33396[(8)] = inst_33373__$1);

return statearr_33396;
})();
if(cljs.core.truth_(inst_33374)){
var statearr_33397_33423 = state_33387__$1;
(statearr_33397_33423[(1)] = (13));

} else {
var statearr_33398_33424 = state_33387__$1;
(statearr_33398_33424[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33388 === (2))){
var inst_33350 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_33351 = (0);
var state_33387__$1 = (function (){var statearr_33399 = state_33387;
(statearr_33399[(9)] = inst_33350);

(statearr_33399[(7)] = inst_33351);

return statearr_33399;
})();
var statearr_33400_33425 = state_33387__$1;
(statearr_33400_33425[(2)] = null);

(statearr_33400_33425[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33388 === (11))){
var inst_33351 = (state_33387[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33387,(10),Object,null,(9));
var inst_33360 = chs__$1.call(null,inst_33351);
var inst_33361 = done.call(null,inst_33351);
var inst_33362 = cljs.core.async.take_BANG_.call(null,inst_33360,inst_33361);
var state_33387__$1 = state_33387;
var statearr_33401_33426 = state_33387__$1;
(statearr_33401_33426[(2)] = inst_33362);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33387__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33388 === (9))){
var inst_33351 = (state_33387[(7)]);
var inst_33364 = (state_33387[(2)]);
var inst_33365 = (inst_33351 + (1));
var inst_33351__$1 = inst_33365;
var state_33387__$1 = (function (){var statearr_33402 = state_33387;
(statearr_33402[(7)] = inst_33351__$1);

(statearr_33402[(10)] = inst_33364);

return statearr_33402;
})();
var statearr_33403_33427 = state_33387__$1;
(statearr_33403_33427[(2)] = null);

(statearr_33403_33427[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33388 === (5))){
var inst_33371 = (state_33387[(2)]);
var state_33387__$1 = (function (){var statearr_33404 = state_33387;
(statearr_33404[(11)] = inst_33371);

return statearr_33404;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33387__$1,(12),dchan);
} else {
if((state_val_33388 === (14))){
var inst_33373 = (state_33387[(8)]);
var inst_33378 = cljs.core.apply.call(null,f,inst_33373);
var state_33387__$1 = state_33387;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33387__$1,(16),out,inst_33378);
} else {
if((state_val_33388 === (16))){
var inst_33380 = (state_33387[(2)]);
var state_33387__$1 = (function (){var statearr_33405 = state_33387;
(statearr_33405[(12)] = inst_33380);

return statearr_33405;
})();
var statearr_33406_33428 = state_33387__$1;
(statearr_33406_33428[(2)] = null);

(statearr_33406_33428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33388 === (10))){
var inst_33355 = (state_33387[(2)]);
var inst_33356 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_33387__$1 = (function (){var statearr_33407 = state_33387;
(statearr_33407[(13)] = inst_33355);

return statearr_33407;
})();
var statearr_33408_33429 = state_33387__$1;
(statearr_33408_33429[(2)] = inst_33356);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33387__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33388 === (8))){
var inst_33369 = (state_33387[(2)]);
var state_33387__$1 = state_33387;
var statearr_33409_33430 = state_33387__$1;
(statearr_33409_33430[(2)] = inst_33369);

(statearr_33409_33430[(1)] = (5));


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
});})(c__32090__auto___33415,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__32002__auto__,c__32090__auto___33415,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__32003__auto__ = null;
var cljs$core$async$state_machine__32003__auto____0 = (function (){
var statearr_33410 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33410[(0)] = cljs$core$async$state_machine__32003__auto__);

(statearr_33410[(1)] = (1));

return statearr_33410;
});
var cljs$core$async$state_machine__32003__auto____1 = (function (state_33387){
while(true){
var ret_value__32004__auto__ = (function (){try{while(true){
var result__32005__auto__ = switch__32002__auto__.call(null,state_33387);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32005__auto__;
}
break;
}
}catch (e33411){if((e33411 instanceof Object)){
var ex__32006__auto__ = e33411;
var statearr_33412_33431 = state_33387;
(statearr_33412_33431[(5)] = ex__32006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33387);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33411;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33432 = state_33387;
state_33387 = G__33432;
continue;
} else {
return ret_value__32004__auto__;
}
break;
}
});
cljs$core$async$state_machine__32003__auto__ = function(state_33387){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32003__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32003__auto____1.call(this,state_33387);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32003__auto____0;
cljs$core$async$state_machine__32003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32003__auto____1;
return cljs$core$async$state_machine__32003__auto__;
})()
;})(switch__32002__auto__,c__32090__auto___33415,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__32092__auto__ = (function (){var statearr_33413 = f__32091__auto__.call(null);
(statearr_33413[(6)] = c__32090__auto___33415);

return statearr_33413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32092__auto__);
});})(c__32090__auto___33415,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__33435 = arguments.length;
switch (G__33435) {
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
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32090__auto___33489 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32090__auto___33489,out){
return (function (){
var f__32091__auto__ = (function (){var switch__32002__auto__ = ((function (c__32090__auto___33489,out){
return (function (state_33467){
var state_val_33468 = (state_33467[(1)]);
if((state_val_33468 === (7))){
var inst_33446 = (state_33467[(7)]);
var inst_33447 = (state_33467[(8)]);
var inst_33446__$1 = (state_33467[(2)]);
var inst_33447__$1 = cljs.core.nth.call(null,inst_33446__$1,(0),null);
var inst_33448 = cljs.core.nth.call(null,inst_33446__$1,(1),null);
var inst_33449 = (inst_33447__$1 == null);
var state_33467__$1 = (function (){var statearr_33469 = state_33467;
(statearr_33469[(7)] = inst_33446__$1);

(statearr_33469[(9)] = inst_33448);

(statearr_33469[(8)] = inst_33447__$1);

return statearr_33469;
})();
if(cljs.core.truth_(inst_33449)){
var statearr_33470_33490 = state_33467__$1;
(statearr_33470_33490[(1)] = (8));

} else {
var statearr_33471_33491 = state_33467__$1;
(statearr_33471_33491[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33468 === (1))){
var inst_33436 = cljs.core.vec.call(null,chs);
var inst_33437 = inst_33436;
var state_33467__$1 = (function (){var statearr_33472 = state_33467;
(statearr_33472[(10)] = inst_33437);

return statearr_33472;
})();
var statearr_33473_33492 = state_33467__$1;
(statearr_33473_33492[(2)] = null);

(statearr_33473_33492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33468 === (4))){
var inst_33437 = (state_33467[(10)]);
var state_33467__$1 = state_33467;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33467__$1,(7),inst_33437);
} else {
if((state_val_33468 === (6))){
var inst_33463 = (state_33467[(2)]);
var state_33467__$1 = state_33467;
var statearr_33474_33493 = state_33467__$1;
(statearr_33474_33493[(2)] = inst_33463);

(statearr_33474_33493[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33468 === (3))){
var inst_33465 = (state_33467[(2)]);
var state_33467__$1 = state_33467;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33467__$1,inst_33465);
} else {
if((state_val_33468 === (2))){
var inst_33437 = (state_33467[(10)]);
var inst_33439 = cljs.core.count.call(null,inst_33437);
var inst_33440 = (inst_33439 > (0));
var state_33467__$1 = state_33467;
if(cljs.core.truth_(inst_33440)){
var statearr_33476_33494 = state_33467__$1;
(statearr_33476_33494[(1)] = (4));

} else {
var statearr_33477_33495 = state_33467__$1;
(statearr_33477_33495[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33468 === (11))){
var inst_33437 = (state_33467[(10)]);
var inst_33456 = (state_33467[(2)]);
var tmp33475 = inst_33437;
var inst_33437__$1 = tmp33475;
var state_33467__$1 = (function (){var statearr_33478 = state_33467;
(statearr_33478[(11)] = inst_33456);

(statearr_33478[(10)] = inst_33437__$1);

return statearr_33478;
})();
var statearr_33479_33496 = state_33467__$1;
(statearr_33479_33496[(2)] = null);

(statearr_33479_33496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33468 === (9))){
var inst_33447 = (state_33467[(8)]);
var state_33467__$1 = state_33467;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33467__$1,(11),out,inst_33447);
} else {
if((state_val_33468 === (5))){
var inst_33461 = cljs.core.async.close_BANG_.call(null,out);
var state_33467__$1 = state_33467;
var statearr_33480_33497 = state_33467__$1;
(statearr_33480_33497[(2)] = inst_33461);

(statearr_33480_33497[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33468 === (10))){
var inst_33459 = (state_33467[(2)]);
var state_33467__$1 = state_33467;
var statearr_33481_33498 = state_33467__$1;
(statearr_33481_33498[(2)] = inst_33459);

(statearr_33481_33498[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33468 === (8))){
var inst_33446 = (state_33467[(7)]);
var inst_33448 = (state_33467[(9)]);
var inst_33447 = (state_33467[(8)]);
var inst_33437 = (state_33467[(10)]);
var inst_33451 = (function (){var cs = inst_33437;
var vec__33442 = inst_33446;
var v = inst_33447;
var c = inst_33448;
return ((function (cs,vec__33442,v,c,inst_33446,inst_33448,inst_33447,inst_33437,state_val_33468,c__32090__auto___33489,out){
return (function (p1__33433_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__33433_SHARP_);
});
;})(cs,vec__33442,v,c,inst_33446,inst_33448,inst_33447,inst_33437,state_val_33468,c__32090__auto___33489,out))
})();
var inst_33452 = cljs.core.filterv.call(null,inst_33451,inst_33437);
var inst_33437__$1 = inst_33452;
var state_33467__$1 = (function (){var statearr_33482 = state_33467;
(statearr_33482[(10)] = inst_33437__$1);

return statearr_33482;
})();
var statearr_33483_33499 = state_33467__$1;
(statearr_33483_33499[(2)] = null);

(statearr_33483_33499[(1)] = (2));


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
});})(c__32090__auto___33489,out))
;
return ((function (switch__32002__auto__,c__32090__auto___33489,out){
return (function() {
var cljs$core$async$state_machine__32003__auto__ = null;
var cljs$core$async$state_machine__32003__auto____0 = (function (){
var statearr_33484 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33484[(0)] = cljs$core$async$state_machine__32003__auto__);

(statearr_33484[(1)] = (1));

return statearr_33484;
});
var cljs$core$async$state_machine__32003__auto____1 = (function (state_33467){
while(true){
var ret_value__32004__auto__ = (function (){try{while(true){
var result__32005__auto__ = switch__32002__auto__.call(null,state_33467);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32005__auto__;
}
break;
}
}catch (e33485){if((e33485 instanceof Object)){
var ex__32006__auto__ = e33485;
var statearr_33486_33500 = state_33467;
(statearr_33486_33500[(5)] = ex__32006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33467);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33485;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33501 = state_33467;
state_33467 = G__33501;
continue;
} else {
return ret_value__32004__auto__;
}
break;
}
});
cljs$core$async$state_machine__32003__auto__ = function(state_33467){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32003__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32003__auto____1.call(this,state_33467);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32003__auto____0;
cljs$core$async$state_machine__32003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32003__auto____1;
return cljs$core$async$state_machine__32003__auto__;
})()
;})(switch__32002__auto__,c__32090__auto___33489,out))
})();
var state__32092__auto__ = (function (){var statearr_33487 = f__32091__auto__.call(null);
(statearr_33487[(6)] = c__32090__auto___33489);

return statearr_33487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32092__auto__);
});})(c__32090__auto___33489,out))
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
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__33503 = arguments.length;
switch (G__33503) {
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
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32090__auto___33548 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32090__auto___33548,out){
return (function (){
var f__32091__auto__ = (function (){var switch__32002__auto__ = ((function (c__32090__auto___33548,out){
return (function (state_33527){
var state_val_33528 = (state_33527[(1)]);
if((state_val_33528 === (7))){
var inst_33509 = (state_33527[(7)]);
var inst_33509__$1 = (state_33527[(2)]);
var inst_33510 = (inst_33509__$1 == null);
var inst_33511 = cljs.core.not.call(null,inst_33510);
var state_33527__$1 = (function (){var statearr_33529 = state_33527;
(statearr_33529[(7)] = inst_33509__$1);

return statearr_33529;
})();
if(inst_33511){
var statearr_33530_33549 = state_33527__$1;
(statearr_33530_33549[(1)] = (8));

} else {
var statearr_33531_33550 = state_33527__$1;
(statearr_33531_33550[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33528 === (1))){
var inst_33504 = (0);
var state_33527__$1 = (function (){var statearr_33532 = state_33527;
(statearr_33532[(8)] = inst_33504);

return statearr_33532;
})();
var statearr_33533_33551 = state_33527__$1;
(statearr_33533_33551[(2)] = null);

(statearr_33533_33551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33528 === (4))){
var state_33527__$1 = state_33527;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33527__$1,(7),ch);
} else {
if((state_val_33528 === (6))){
var inst_33522 = (state_33527[(2)]);
var state_33527__$1 = state_33527;
var statearr_33534_33552 = state_33527__$1;
(statearr_33534_33552[(2)] = inst_33522);

(statearr_33534_33552[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33528 === (3))){
var inst_33524 = (state_33527[(2)]);
var inst_33525 = cljs.core.async.close_BANG_.call(null,out);
var state_33527__$1 = (function (){var statearr_33535 = state_33527;
(statearr_33535[(9)] = inst_33524);

return statearr_33535;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33527__$1,inst_33525);
} else {
if((state_val_33528 === (2))){
var inst_33504 = (state_33527[(8)]);
var inst_33506 = (inst_33504 < n);
var state_33527__$1 = state_33527;
if(cljs.core.truth_(inst_33506)){
var statearr_33536_33553 = state_33527__$1;
(statearr_33536_33553[(1)] = (4));

} else {
var statearr_33537_33554 = state_33527__$1;
(statearr_33537_33554[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33528 === (11))){
var inst_33504 = (state_33527[(8)]);
var inst_33514 = (state_33527[(2)]);
var inst_33515 = (inst_33504 + (1));
var inst_33504__$1 = inst_33515;
var state_33527__$1 = (function (){var statearr_33538 = state_33527;
(statearr_33538[(10)] = inst_33514);

(statearr_33538[(8)] = inst_33504__$1);

return statearr_33538;
})();
var statearr_33539_33555 = state_33527__$1;
(statearr_33539_33555[(2)] = null);

(statearr_33539_33555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33528 === (9))){
var state_33527__$1 = state_33527;
var statearr_33540_33556 = state_33527__$1;
(statearr_33540_33556[(2)] = null);

(statearr_33540_33556[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33528 === (5))){
var state_33527__$1 = state_33527;
var statearr_33541_33557 = state_33527__$1;
(statearr_33541_33557[(2)] = null);

(statearr_33541_33557[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33528 === (10))){
var inst_33519 = (state_33527[(2)]);
var state_33527__$1 = state_33527;
var statearr_33542_33558 = state_33527__$1;
(statearr_33542_33558[(2)] = inst_33519);

(statearr_33542_33558[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33528 === (8))){
var inst_33509 = (state_33527[(7)]);
var state_33527__$1 = state_33527;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33527__$1,(11),out,inst_33509);
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
});})(c__32090__auto___33548,out))
;
return ((function (switch__32002__auto__,c__32090__auto___33548,out){
return (function() {
var cljs$core$async$state_machine__32003__auto__ = null;
var cljs$core$async$state_machine__32003__auto____0 = (function (){
var statearr_33543 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33543[(0)] = cljs$core$async$state_machine__32003__auto__);

(statearr_33543[(1)] = (1));

return statearr_33543;
});
var cljs$core$async$state_machine__32003__auto____1 = (function (state_33527){
while(true){
var ret_value__32004__auto__ = (function (){try{while(true){
var result__32005__auto__ = switch__32002__auto__.call(null,state_33527);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32005__auto__;
}
break;
}
}catch (e33544){if((e33544 instanceof Object)){
var ex__32006__auto__ = e33544;
var statearr_33545_33559 = state_33527;
(statearr_33545_33559[(5)] = ex__32006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33527);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33544;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33560 = state_33527;
state_33527 = G__33560;
continue;
} else {
return ret_value__32004__auto__;
}
break;
}
});
cljs$core$async$state_machine__32003__auto__ = function(state_33527){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32003__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32003__auto____1.call(this,state_33527);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32003__auto____0;
cljs$core$async$state_machine__32003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32003__auto____1;
return cljs$core$async$state_machine__32003__auto__;
})()
;})(switch__32002__auto__,c__32090__auto___33548,out))
})();
var state__32092__auto__ = (function (){var statearr_33546 = f__32091__auto__.call(null);
(statearr_33546[(6)] = c__32090__auto___33548);

return statearr_33546;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32092__auto__);
});})(c__32090__auto___33548,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async33562 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33562 = (function (f,ch,meta33563){
this.f = f;
this.ch = ch;
this.meta33563 = meta33563;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33562.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33564,meta33563__$1){
var self__ = this;
var _33564__$1 = this;
return (new cljs.core.async.t_cljs$core$async33562(self__.f,self__.ch,meta33563__$1));
});

cljs.core.async.t_cljs$core$async33562.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33564){
var self__ = this;
var _33564__$1 = this;
return self__.meta33563;
});

cljs.core.async.t_cljs$core$async33562.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33562.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33562.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33562.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33562.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async33565 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33565 = (function (f,ch,meta33563,_,fn1,meta33566){
this.f = f;
this.ch = ch;
this.meta33563 = meta33563;
this._ = _;
this.fn1 = fn1;
this.meta33566 = meta33566;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33565.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_33567,meta33566__$1){
var self__ = this;
var _33567__$1 = this;
return (new cljs.core.async.t_cljs$core$async33565(self__.f,self__.ch,self__.meta33563,self__._,self__.fn1,meta33566__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async33565.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_33567){
var self__ = this;
var _33567__$1 = this;
return self__.meta33566;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33565.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33565.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33565.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async33565.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__33561_SHARP_){
return f1.call(null,(((p1__33561_SHARP_ == null))?null:self__.f.call(null,p1__33561_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async33565.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33563","meta33563",1010000462,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33562","cljs.core.async/t_cljs$core$async33562",-1849410489,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33566","meta33566",2127549727,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async33565.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33565.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33565";

cljs.core.async.t_cljs$core$async33565.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__28948__auto__,writer__28949__auto__,opt__28950__auto__){
return cljs.core._write.call(null,writer__28949__auto__,"cljs.core.async/t_cljs$core$async33565");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async33565 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33565(f__$1,ch__$1,meta33563__$1,___$2,fn1__$1,meta33566){
return (new cljs.core.async.t_cljs$core$async33565(f__$1,ch__$1,meta33563__$1,___$2,fn1__$1,meta33566));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async33565(self__.f,self__.ch,self__.meta33563,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__28311__auto__ = ret;
if(cljs.core.truth_(and__28311__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__28311__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async33562.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33562.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async33562.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33563","meta33563",1010000462,null)], null);
});

cljs.core.async.t_cljs$core$async33562.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33562.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33562";

cljs.core.async.t_cljs$core$async33562.cljs$lang$ctorPrWriter = (function (this__28948__auto__,writer__28949__auto__,opt__28950__auto__){
return cljs.core._write.call(null,writer__28949__auto__,"cljs.core.async/t_cljs$core$async33562");
});

cljs.core.async.__GT_t_cljs$core$async33562 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33562(f__$1,ch__$1,meta33563){
return (new cljs.core.async.t_cljs$core$async33562(f__$1,ch__$1,meta33563));
});

}

return (new cljs.core.async.t_cljs$core$async33562(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async33568 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33568 = (function (f,ch,meta33569){
this.f = f;
this.ch = ch;
this.meta33569 = meta33569;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33568.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33570,meta33569__$1){
var self__ = this;
var _33570__$1 = this;
return (new cljs.core.async.t_cljs$core$async33568(self__.f,self__.ch,meta33569__$1));
});

cljs.core.async.t_cljs$core$async33568.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33570){
var self__ = this;
var _33570__$1 = this;
return self__.meta33569;
});

cljs.core.async.t_cljs$core$async33568.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33568.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33568.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33568.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33568.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33568.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async33568.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33569","meta33569",-986452487,null)], null);
});

cljs.core.async.t_cljs$core$async33568.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33568.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33568";

cljs.core.async.t_cljs$core$async33568.cljs$lang$ctorPrWriter = (function (this__28948__auto__,writer__28949__auto__,opt__28950__auto__){
return cljs.core._write.call(null,writer__28949__auto__,"cljs.core.async/t_cljs$core$async33568");
});

cljs.core.async.__GT_t_cljs$core$async33568 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async33568(f__$1,ch__$1,meta33569){
return (new cljs.core.async.t_cljs$core$async33568(f__$1,ch__$1,meta33569));
});

}

return (new cljs.core.async.t_cljs$core$async33568(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async33571 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33571 = (function (p,ch,meta33572){
this.p = p;
this.ch = ch;
this.meta33572 = meta33572;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33571.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33573,meta33572__$1){
var self__ = this;
var _33573__$1 = this;
return (new cljs.core.async.t_cljs$core$async33571(self__.p,self__.ch,meta33572__$1));
});

cljs.core.async.t_cljs$core$async33571.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33573){
var self__ = this;
var _33573__$1 = this;
return self__.meta33572;
});

cljs.core.async.t_cljs$core$async33571.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33571.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33571.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async33571.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33571.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async33571.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33571.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async33571.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33572","meta33572",-970150834,null)], null);
});

cljs.core.async.t_cljs$core$async33571.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33571.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33571";

cljs.core.async.t_cljs$core$async33571.cljs$lang$ctorPrWriter = (function (this__28948__auto__,writer__28949__auto__,opt__28950__auto__){
return cljs.core._write.call(null,writer__28949__auto__,"cljs.core.async/t_cljs$core$async33571");
});

cljs.core.async.__GT_t_cljs$core$async33571 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async33571(p__$1,ch__$1,meta33572){
return (new cljs.core.async.t_cljs$core$async33571(p__$1,ch__$1,meta33572));
});

}

return (new cljs.core.async.t_cljs$core$async33571(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__33575 = arguments.length;
switch (G__33575) {
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
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32090__auto___33615 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32090__auto___33615,out){
return (function (){
var f__32091__auto__ = (function (){var switch__32002__auto__ = ((function (c__32090__auto___33615,out){
return (function (state_33596){
var state_val_33597 = (state_33596[(1)]);
if((state_val_33597 === (7))){
var inst_33592 = (state_33596[(2)]);
var state_33596__$1 = state_33596;
var statearr_33598_33616 = state_33596__$1;
(statearr_33598_33616[(2)] = inst_33592);

(statearr_33598_33616[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33597 === (1))){
var state_33596__$1 = state_33596;
var statearr_33599_33617 = state_33596__$1;
(statearr_33599_33617[(2)] = null);

(statearr_33599_33617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33597 === (4))){
var inst_33578 = (state_33596[(7)]);
var inst_33578__$1 = (state_33596[(2)]);
var inst_33579 = (inst_33578__$1 == null);
var state_33596__$1 = (function (){var statearr_33600 = state_33596;
(statearr_33600[(7)] = inst_33578__$1);

return statearr_33600;
})();
if(cljs.core.truth_(inst_33579)){
var statearr_33601_33618 = state_33596__$1;
(statearr_33601_33618[(1)] = (5));

} else {
var statearr_33602_33619 = state_33596__$1;
(statearr_33602_33619[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33597 === (6))){
var inst_33578 = (state_33596[(7)]);
var inst_33583 = p.call(null,inst_33578);
var state_33596__$1 = state_33596;
if(cljs.core.truth_(inst_33583)){
var statearr_33603_33620 = state_33596__$1;
(statearr_33603_33620[(1)] = (8));

} else {
var statearr_33604_33621 = state_33596__$1;
(statearr_33604_33621[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33597 === (3))){
var inst_33594 = (state_33596[(2)]);
var state_33596__$1 = state_33596;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33596__$1,inst_33594);
} else {
if((state_val_33597 === (2))){
var state_33596__$1 = state_33596;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33596__$1,(4),ch);
} else {
if((state_val_33597 === (11))){
var inst_33586 = (state_33596[(2)]);
var state_33596__$1 = state_33596;
var statearr_33605_33622 = state_33596__$1;
(statearr_33605_33622[(2)] = inst_33586);

(statearr_33605_33622[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33597 === (9))){
var state_33596__$1 = state_33596;
var statearr_33606_33623 = state_33596__$1;
(statearr_33606_33623[(2)] = null);

(statearr_33606_33623[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33597 === (5))){
var inst_33581 = cljs.core.async.close_BANG_.call(null,out);
var state_33596__$1 = state_33596;
var statearr_33607_33624 = state_33596__$1;
(statearr_33607_33624[(2)] = inst_33581);

(statearr_33607_33624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33597 === (10))){
var inst_33589 = (state_33596[(2)]);
var state_33596__$1 = (function (){var statearr_33608 = state_33596;
(statearr_33608[(8)] = inst_33589);

return statearr_33608;
})();
var statearr_33609_33625 = state_33596__$1;
(statearr_33609_33625[(2)] = null);

(statearr_33609_33625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33597 === (8))){
var inst_33578 = (state_33596[(7)]);
var state_33596__$1 = state_33596;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33596__$1,(11),out,inst_33578);
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
});})(c__32090__auto___33615,out))
;
return ((function (switch__32002__auto__,c__32090__auto___33615,out){
return (function() {
var cljs$core$async$state_machine__32003__auto__ = null;
var cljs$core$async$state_machine__32003__auto____0 = (function (){
var statearr_33610 = [null,null,null,null,null,null,null,null,null];
(statearr_33610[(0)] = cljs$core$async$state_machine__32003__auto__);

(statearr_33610[(1)] = (1));

return statearr_33610;
});
var cljs$core$async$state_machine__32003__auto____1 = (function (state_33596){
while(true){
var ret_value__32004__auto__ = (function (){try{while(true){
var result__32005__auto__ = switch__32002__auto__.call(null,state_33596);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32005__auto__;
}
break;
}
}catch (e33611){if((e33611 instanceof Object)){
var ex__32006__auto__ = e33611;
var statearr_33612_33626 = state_33596;
(statearr_33612_33626[(5)] = ex__32006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33596);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33611;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33627 = state_33596;
state_33596 = G__33627;
continue;
} else {
return ret_value__32004__auto__;
}
break;
}
});
cljs$core$async$state_machine__32003__auto__ = function(state_33596){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32003__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32003__auto____1.call(this,state_33596);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32003__auto____0;
cljs$core$async$state_machine__32003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32003__auto____1;
return cljs$core$async$state_machine__32003__auto__;
})()
;})(switch__32002__auto__,c__32090__auto___33615,out))
})();
var state__32092__auto__ = (function (){var statearr_33613 = f__32091__auto__.call(null);
(statearr_33613[(6)] = c__32090__auto___33615);

return statearr_33613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32092__auto__);
});})(c__32090__auto___33615,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__33629 = arguments.length;
switch (G__33629) {
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
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__32090__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32090__auto__){
return (function (){
var f__32091__auto__ = (function (){var switch__32002__auto__ = ((function (c__32090__auto__){
return (function (state_33692){
var state_val_33693 = (state_33692[(1)]);
if((state_val_33693 === (7))){
var inst_33688 = (state_33692[(2)]);
var state_33692__$1 = state_33692;
var statearr_33694_33732 = state_33692__$1;
(statearr_33694_33732[(2)] = inst_33688);

(statearr_33694_33732[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (20))){
var inst_33658 = (state_33692[(7)]);
var inst_33669 = (state_33692[(2)]);
var inst_33670 = cljs.core.next.call(null,inst_33658);
var inst_33644 = inst_33670;
var inst_33645 = null;
var inst_33646 = (0);
var inst_33647 = (0);
var state_33692__$1 = (function (){var statearr_33695 = state_33692;
(statearr_33695[(8)] = inst_33646);

(statearr_33695[(9)] = inst_33669);

(statearr_33695[(10)] = inst_33647);

(statearr_33695[(11)] = inst_33645);

(statearr_33695[(12)] = inst_33644);

return statearr_33695;
})();
var statearr_33696_33733 = state_33692__$1;
(statearr_33696_33733[(2)] = null);

(statearr_33696_33733[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (1))){
var state_33692__$1 = state_33692;
var statearr_33697_33734 = state_33692__$1;
(statearr_33697_33734[(2)] = null);

(statearr_33697_33734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (4))){
var inst_33633 = (state_33692[(13)]);
var inst_33633__$1 = (state_33692[(2)]);
var inst_33634 = (inst_33633__$1 == null);
var state_33692__$1 = (function (){var statearr_33698 = state_33692;
(statearr_33698[(13)] = inst_33633__$1);

return statearr_33698;
})();
if(cljs.core.truth_(inst_33634)){
var statearr_33699_33735 = state_33692__$1;
(statearr_33699_33735[(1)] = (5));

} else {
var statearr_33700_33736 = state_33692__$1;
(statearr_33700_33736[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (15))){
var state_33692__$1 = state_33692;
var statearr_33704_33737 = state_33692__$1;
(statearr_33704_33737[(2)] = null);

(statearr_33704_33737[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (21))){
var state_33692__$1 = state_33692;
var statearr_33705_33738 = state_33692__$1;
(statearr_33705_33738[(2)] = null);

(statearr_33705_33738[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (13))){
var inst_33646 = (state_33692[(8)]);
var inst_33647 = (state_33692[(10)]);
var inst_33645 = (state_33692[(11)]);
var inst_33644 = (state_33692[(12)]);
var inst_33654 = (state_33692[(2)]);
var inst_33655 = (inst_33647 + (1));
var tmp33701 = inst_33646;
var tmp33702 = inst_33645;
var tmp33703 = inst_33644;
var inst_33644__$1 = tmp33703;
var inst_33645__$1 = tmp33702;
var inst_33646__$1 = tmp33701;
var inst_33647__$1 = inst_33655;
var state_33692__$1 = (function (){var statearr_33706 = state_33692;
(statearr_33706[(8)] = inst_33646__$1);

(statearr_33706[(10)] = inst_33647__$1);

(statearr_33706[(11)] = inst_33645__$1);

(statearr_33706[(14)] = inst_33654);

(statearr_33706[(12)] = inst_33644__$1);

return statearr_33706;
})();
var statearr_33707_33739 = state_33692__$1;
(statearr_33707_33739[(2)] = null);

(statearr_33707_33739[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (22))){
var state_33692__$1 = state_33692;
var statearr_33708_33740 = state_33692__$1;
(statearr_33708_33740[(2)] = null);

(statearr_33708_33740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (6))){
var inst_33633 = (state_33692[(13)]);
var inst_33642 = f.call(null,inst_33633);
var inst_33643 = cljs.core.seq.call(null,inst_33642);
var inst_33644 = inst_33643;
var inst_33645 = null;
var inst_33646 = (0);
var inst_33647 = (0);
var state_33692__$1 = (function (){var statearr_33709 = state_33692;
(statearr_33709[(8)] = inst_33646);

(statearr_33709[(10)] = inst_33647);

(statearr_33709[(11)] = inst_33645);

(statearr_33709[(12)] = inst_33644);

return statearr_33709;
})();
var statearr_33710_33741 = state_33692__$1;
(statearr_33710_33741[(2)] = null);

(statearr_33710_33741[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (17))){
var inst_33658 = (state_33692[(7)]);
var inst_33662 = cljs.core.chunk_first.call(null,inst_33658);
var inst_33663 = cljs.core.chunk_rest.call(null,inst_33658);
var inst_33664 = cljs.core.count.call(null,inst_33662);
var inst_33644 = inst_33663;
var inst_33645 = inst_33662;
var inst_33646 = inst_33664;
var inst_33647 = (0);
var state_33692__$1 = (function (){var statearr_33711 = state_33692;
(statearr_33711[(8)] = inst_33646);

(statearr_33711[(10)] = inst_33647);

(statearr_33711[(11)] = inst_33645);

(statearr_33711[(12)] = inst_33644);

return statearr_33711;
})();
var statearr_33712_33742 = state_33692__$1;
(statearr_33712_33742[(2)] = null);

(statearr_33712_33742[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (3))){
var inst_33690 = (state_33692[(2)]);
var state_33692__$1 = state_33692;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33692__$1,inst_33690);
} else {
if((state_val_33693 === (12))){
var inst_33678 = (state_33692[(2)]);
var state_33692__$1 = state_33692;
var statearr_33713_33743 = state_33692__$1;
(statearr_33713_33743[(2)] = inst_33678);

(statearr_33713_33743[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (2))){
var state_33692__$1 = state_33692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33692__$1,(4),in$);
} else {
if((state_val_33693 === (23))){
var inst_33686 = (state_33692[(2)]);
var state_33692__$1 = state_33692;
var statearr_33714_33744 = state_33692__$1;
(statearr_33714_33744[(2)] = inst_33686);

(statearr_33714_33744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (19))){
var inst_33673 = (state_33692[(2)]);
var state_33692__$1 = state_33692;
var statearr_33715_33745 = state_33692__$1;
(statearr_33715_33745[(2)] = inst_33673);

(statearr_33715_33745[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (11))){
var inst_33658 = (state_33692[(7)]);
var inst_33644 = (state_33692[(12)]);
var inst_33658__$1 = cljs.core.seq.call(null,inst_33644);
var state_33692__$1 = (function (){var statearr_33716 = state_33692;
(statearr_33716[(7)] = inst_33658__$1);

return statearr_33716;
})();
if(inst_33658__$1){
var statearr_33717_33746 = state_33692__$1;
(statearr_33717_33746[(1)] = (14));

} else {
var statearr_33718_33747 = state_33692__$1;
(statearr_33718_33747[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (9))){
var inst_33680 = (state_33692[(2)]);
var inst_33681 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_33692__$1 = (function (){var statearr_33719 = state_33692;
(statearr_33719[(15)] = inst_33680);

return statearr_33719;
})();
if(cljs.core.truth_(inst_33681)){
var statearr_33720_33748 = state_33692__$1;
(statearr_33720_33748[(1)] = (21));

} else {
var statearr_33721_33749 = state_33692__$1;
(statearr_33721_33749[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (5))){
var inst_33636 = cljs.core.async.close_BANG_.call(null,out);
var state_33692__$1 = state_33692;
var statearr_33722_33750 = state_33692__$1;
(statearr_33722_33750[(2)] = inst_33636);

(statearr_33722_33750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (14))){
var inst_33658 = (state_33692[(7)]);
var inst_33660 = cljs.core.chunked_seq_QMARK_.call(null,inst_33658);
var state_33692__$1 = state_33692;
if(inst_33660){
var statearr_33723_33751 = state_33692__$1;
(statearr_33723_33751[(1)] = (17));

} else {
var statearr_33724_33752 = state_33692__$1;
(statearr_33724_33752[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (16))){
var inst_33676 = (state_33692[(2)]);
var state_33692__$1 = state_33692;
var statearr_33725_33753 = state_33692__$1;
(statearr_33725_33753[(2)] = inst_33676);

(statearr_33725_33753[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33693 === (10))){
var inst_33647 = (state_33692[(10)]);
var inst_33645 = (state_33692[(11)]);
var inst_33652 = cljs.core._nth.call(null,inst_33645,inst_33647);
var state_33692__$1 = state_33692;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33692__$1,(13),out,inst_33652);
} else {
if((state_val_33693 === (18))){
var inst_33658 = (state_33692[(7)]);
var inst_33667 = cljs.core.first.call(null,inst_33658);
var state_33692__$1 = state_33692;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33692__$1,(20),out,inst_33667);
} else {
if((state_val_33693 === (8))){
var inst_33646 = (state_33692[(8)]);
var inst_33647 = (state_33692[(10)]);
var inst_33649 = (inst_33647 < inst_33646);
var inst_33650 = inst_33649;
var state_33692__$1 = state_33692;
if(cljs.core.truth_(inst_33650)){
var statearr_33726_33754 = state_33692__$1;
(statearr_33726_33754[(1)] = (10));

} else {
var statearr_33727_33755 = state_33692__$1;
(statearr_33727_33755[(1)] = (11));

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
});})(c__32090__auto__))
;
return ((function (switch__32002__auto__,c__32090__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32003__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32003__auto____0 = (function (){
var statearr_33728 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33728[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32003__auto__);

(statearr_33728[(1)] = (1));

return statearr_33728;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32003__auto____1 = (function (state_33692){
while(true){
var ret_value__32004__auto__ = (function (){try{while(true){
var result__32005__auto__ = switch__32002__auto__.call(null,state_33692);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32005__auto__;
}
break;
}
}catch (e33729){if((e33729 instanceof Object)){
var ex__32006__auto__ = e33729;
var statearr_33730_33756 = state_33692;
(statearr_33730_33756[(5)] = ex__32006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33692);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33729;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33757 = state_33692;
state_33692 = G__33757;
continue;
} else {
return ret_value__32004__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32003__auto__ = function(state_33692){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32003__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32003__auto____1.call(this,state_33692);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__32003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32003__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32003__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32003__auto__;
})()
;})(switch__32002__auto__,c__32090__auto__))
})();
var state__32092__auto__ = (function (){var statearr_33731 = f__32091__auto__.call(null);
(statearr_33731[(6)] = c__32090__auto__);

return statearr_33731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32092__auto__);
});})(c__32090__auto__))
);

return c__32090__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33759 = arguments.length;
switch (G__33759) {
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
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__33762 = arguments.length;
switch (G__33762) {
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
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__33765 = arguments.length;
switch (G__33765) {
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
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32090__auto___33812 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32090__auto___33812,out){
return (function (){
var f__32091__auto__ = (function (){var switch__32002__auto__ = ((function (c__32090__auto___33812,out){
return (function (state_33789){
var state_val_33790 = (state_33789[(1)]);
if((state_val_33790 === (7))){
var inst_33784 = (state_33789[(2)]);
var state_33789__$1 = state_33789;
var statearr_33791_33813 = state_33789__$1;
(statearr_33791_33813[(2)] = inst_33784);

(statearr_33791_33813[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33790 === (1))){
var inst_33766 = null;
var state_33789__$1 = (function (){var statearr_33792 = state_33789;
(statearr_33792[(7)] = inst_33766);

return statearr_33792;
})();
var statearr_33793_33814 = state_33789__$1;
(statearr_33793_33814[(2)] = null);

(statearr_33793_33814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33790 === (4))){
var inst_33769 = (state_33789[(8)]);
var inst_33769__$1 = (state_33789[(2)]);
var inst_33770 = (inst_33769__$1 == null);
var inst_33771 = cljs.core.not.call(null,inst_33770);
var state_33789__$1 = (function (){var statearr_33794 = state_33789;
(statearr_33794[(8)] = inst_33769__$1);

return statearr_33794;
})();
if(inst_33771){
var statearr_33795_33815 = state_33789__$1;
(statearr_33795_33815[(1)] = (5));

} else {
var statearr_33796_33816 = state_33789__$1;
(statearr_33796_33816[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33790 === (6))){
var state_33789__$1 = state_33789;
var statearr_33797_33817 = state_33789__$1;
(statearr_33797_33817[(2)] = null);

(statearr_33797_33817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33790 === (3))){
var inst_33786 = (state_33789[(2)]);
var inst_33787 = cljs.core.async.close_BANG_.call(null,out);
var state_33789__$1 = (function (){var statearr_33798 = state_33789;
(statearr_33798[(9)] = inst_33786);

return statearr_33798;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33789__$1,inst_33787);
} else {
if((state_val_33790 === (2))){
var state_33789__$1 = state_33789;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33789__$1,(4),ch);
} else {
if((state_val_33790 === (11))){
var inst_33769 = (state_33789[(8)]);
var inst_33778 = (state_33789[(2)]);
var inst_33766 = inst_33769;
var state_33789__$1 = (function (){var statearr_33799 = state_33789;
(statearr_33799[(10)] = inst_33778);

(statearr_33799[(7)] = inst_33766);

return statearr_33799;
})();
var statearr_33800_33818 = state_33789__$1;
(statearr_33800_33818[(2)] = null);

(statearr_33800_33818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33790 === (9))){
var inst_33769 = (state_33789[(8)]);
var state_33789__$1 = state_33789;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33789__$1,(11),out,inst_33769);
} else {
if((state_val_33790 === (5))){
var inst_33769 = (state_33789[(8)]);
var inst_33766 = (state_33789[(7)]);
var inst_33773 = cljs.core._EQ_.call(null,inst_33769,inst_33766);
var state_33789__$1 = state_33789;
if(inst_33773){
var statearr_33802_33819 = state_33789__$1;
(statearr_33802_33819[(1)] = (8));

} else {
var statearr_33803_33820 = state_33789__$1;
(statearr_33803_33820[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33790 === (10))){
var inst_33781 = (state_33789[(2)]);
var state_33789__$1 = state_33789;
var statearr_33804_33821 = state_33789__$1;
(statearr_33804_33821[(2)] = inst_33781);

(statearr_33804_33821[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33790 === (8))){
var inst_33766 = (state_33789[(7)]);
var tmp33801 = inst_33766;
var inst_33766__$1 = tmp33801;
var state_33789__$1 = (function (){var statearr_33805 = state_33789;
(statearr_33805[(7)] = inst_33766__$1);

return statearr_33805;
})();
var statearr_33806_33822 = state_33789__$1;
(statearr_33806_33822[(2)] = null);

(statearr_33806_33822[(1)] = (2));


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
});})(c__32090__auto___33812,out))
;
return ((function (switch__32002__auto__,c__32090__auto___33812,out){
return (function() {
var cljs$core$async$state_machine__32003__auto__ = null;
var cljs$core$async$state_machine__32003__auto____0 = (function (){
var statearr_33807 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33807[(0)] = cljs$core$async$state_machine__32003__auto__);

(statearr_33807[(1)] = (1));

return statearr_33807;
});
var cljs$core$async$state_machine__32003__auto____1 = (function (state_33789){
while(true){
var ret_value__32004__auto__ = (function (){try{while(true){
var result__32005__auto__ = switch__32002__auto__.call(null,state_33789);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32005__auto__;
}
break;
}
}catch (e33808){if((e33808 instanceof Object)){
var ex__32006__auto__ = e33808;
var statearr_33809_33823 = state_33789;
(statearr_33809_33823[(5)] = ex__32006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33789);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33808;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33824 = state_33789;
state_33789 = G__33824;
continue;
} else {
return ret_value__32004__auto__;
}
break;
}
});
cljs$core$async$state_machine__32003__auto__ = function(state_33789){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32003__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32003__auto____1.call(this,state_33789);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32003__auto____0;
cljs$core$async$state_machine__32003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32003__auto____1;
return cljs$core$async$state_machine__32003__auto__;
})()
;})(switch__32002__auto__,c__32090__auto___33812,out))
})();
var state__32092__auto__ = (function (){var statearr_33810 = f__32091__auto__.call(null);
(statearr_33810[(6)] = c__32090__auto___33812);

return statearr_33810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32092__auto__);
});})(c__32090__auto___33812,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33826 = arguments.length;
switch (G__33826) {
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
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32090__auto___33892 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32090__auto___33892,out){
return (function (){
var f__32091__auto__ = (function (){var switch__32002__auto__ = ((function (c__32090__auto___33892,out){
return (function (state_33864){
var state_val_33865 = (state_33864[(1)]);
if((state_val_33865 === (7))){
var inst_33860 = (state_33864[(2)]);
var state_33864__$1 = state_33864;
var statearr_33866_33893 = state_33864__$1;
(statearr_33866_33893[(2)] = inst_33860);

(statearr_33866_33893[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33865 === (1))){
var inst_33827 = (new Array(n));
var inst_33828 = inst_33827;
var inst_33829 = (0);
var state_33864__$1 = (function (){var statearr_33867 = state_33864;
(statearr_33867[(7)] = inst_33829);

(statearr_33867[(8)] = inst_33828);

return statearr_33867;
})();
var statearr_33868_33894 = state_33864__$1;
(statearr_33868_33894[(2)] = null);

(statearr_33868_33894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33865 === (4))){
var inst_33832 = (state_33864[(9)]);
var inst_33832__$1 = (state_33864[(2)]);
var inst_33833 = (inst_33832__$1 == null);
var inst_33834 = cljs.core.not.call(null,inst_33833);
var state_33864__$1 = (function (){var statearr_33869 = state_33864;
(statearr_33869[(9)] = inst_33832__$1);

return statearr_33869;
})();
if(inst_33834){
var statearr_33870_33895 = state_33864__$1;
(statearr_33870_33895[(1)] = (5));

} else {
var statearr_33871_33896 = state_33864__$1;
(statearr_33871_33896[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33865 === (15))){
var inst_33854 = (state_33864[(2)]);
var state_33864__$1 = state_33864;
var statearr_33872_33897 = state_33864__$1;
(statearr_33872_33897[(2)] = inst_33854);

(statearr_33872_33897[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33865 === (13))){
var state_33864__$1 = state_33864;
var statearr_33873_33898 = state_33864__$1;
(statearr_33873_33898[(2)] = null);

(statearr_33873_33898[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33865 === (6))){
var inst_33829 = (state_33864[(7)]);
var inst_33850 = (inst_33829 > (0));
var state_33864__$1 = state_33864;
if(cljs.core.truth_(inst_33850)){
var statearr_33874_33899 = state_33864__$1;
(statearr_33874_33899[(1)] = (12));

} else {
var statearr_33875_33900 = state_33864__$1;
(statearr_33875_33900[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33865 === (3))){
var inst_33862 = (state_33864[(2)]);
var state_33864__$1 = state_33864;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33864__$1,inst_33862);
} else {
if((state_val_33865 === (12))){
var inst_33828 = (state_33864[(8)]);
var inst_33852 = cljs.core.vec.call(null,inst_33828);
var state_33864__$1 = state_33864;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33864__$1,(15),out,inst_33852);
} else {
if((state_val_33865 === (2))){
var state_33864__$1 = state_33864;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33864__$1,(4),ch);
} else {
if((state_val_33865 === (11))){
var inst_33844 = (state_33864[(2)]);
var inst_33845 = (new Array(n));
var inst_33828 = inst_33845;
var inst_33829 = (0);
var state_33864__$1 = (function (){var statearr_33876 = state_33864;
(statearr_33876[(7)] = inst_33829);

(statearr_33876[(10)] = inst_33844);

(statearr_33876[(8)] = inst_33828);

return statearr_33876;
})();
var statearr_33877_33901 = state_33864__$1;
(statearr_33877_33901[(2)] = null);

(statearr_33877_33901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33865 === (9))){
var inst_33828 = (state_33864[(8)]);
var inst_33842 = cljs.core.vec.call(null,inst_33828);
var state_33864__$1 = state_33864;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33864__$1,(11),out,inst_33842);
} else {
if((state_val_33865 === (5))){
var inst_33837 = (state_33864[(11)]);
var inst_33829 = (state_33864[(7)]);
var inst_33832 = (state_33864[(9)]);
var inst_33828 = (state_33864[(8)]);
var inst_33836 = (inst_33828[inst_33829] = inst_33832);
var inst_33837__$1 = (inst_33829 + (1));
var inst_33838 = (inst_33837__$1 < n);
var state_33864__$1 = (function (){var statearr_33878 = state_33864;
(statearr_33878[(11)] = inst_33837__$1);

(statearr_33878[(12)] = inst_33836);

return statearr_33878;
})();
if(cljs.core.truth_(inst_33838)){
var statearr_33879_33902 = state_33864__$1;
(statearr_33879_33902[(1)] = (8));

} else {
var statearr_33880_33903 = state_33864__$1;
(statearr_33880_33903[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33865 === (14))){
var inst_33857 = (state_33864[(2)]);
var inst_33858 = cljs.core.async.close_BANG_.call(null,out);
var state_33864__$1 = (function (){var statearr_33882 = state_33864;
(statearr_33882[(13)] = inst_33857);

return statearr_33882;
})();
var statearr_33883_33904 = state_33864__$1;
(statearr_33883_33904[(2)] = inst_33858);

(statearr_33883_33904[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33865 === (10))){
var inst_33848 = (state_33864[(2)]);
var state_33864__$1 = state_33864;
var statearr_33884_33905 = state_33864__$1;
(statearr_33884_33905[(2)] = inst_33848);

(statearr_33884_33905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33865 === (8))){
var inst_33837 = (state_33864[(11)]);
var inst_33828 = (state_33864[(8)]);
var tmp33881 = inst_33828;
var inst_33828__$1 = tmp33881;
var inst_33829 = inst_33837;
var state_33864__$1 = (function (){var statearr_33885 = state_33864;
(statearr_33885[(7)] = inst_33829);

(statearr_33885[(8)] = inst_33828__$1);

return statearr_33885;
})();
var statearr_33886_33906 = state_33864__$1;
(statearr_33886_33906[(2)] = null);

(statearr_33886_33906[(1)] = (2));


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
});})(c__32090__auto___33892,out))
;
return ((function (switch__32002__auto__,c__32090__auto___33892,out){
return (function() {
var cljs$core$async$state_machine__32003__auto__ = null;
var cljs$core$async$state_machine__32003__auto____0 = (function (){
var statearr_33887 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33887[(0)] = cljs$core$async$state_machine__32003__auto__);

(statearr_33887[(1)] = (1));

return statearr_33887;
});
var cljs$core$async$state_machine__32003__auto____1 = (function (state_33864){
while(true){
var ret_value__32004__auto__ = (function (){try{while(true){
var result__32005__auto__ = switch__32002__auto__.call(null,state_33864);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32005__auto__;
}
break;
}
}catch (e33888){if((e33888 instanceof Object)){
var ex__32006__auto__ = e33888;
var statearr_33889_33907 = state_33864;
(statearr_33889_33907[(5)] = ex__32006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33864);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33888;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33908 = state_33864;
state_33864 = G__33908;
continue;
} else {
return ret_value__32004__auto__;
}
break;
}
});
cljs$core$async$state_machine__32003__auto__ = function(state_33864){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32003__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32003__auto____1.call(this,state_33864);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32003__auto____0;
cljs$core$async$state_machine__32003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32003__auto____1;
return cljs$core$async$state_machine__32003__auto__;
})()
;})(switch__32002__auto__,c__32090__auto___33892,out))
})();
var state__32092__auto__ = (function (){var statearr_33890 = f__32091__auto__.call(null);
(statearr_33890[(6)] = c__32090__auto___33892);

return statearr_33890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32092__auto__);
});})(c__32090__auto___33892,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33910 = arguments.length;
switch (G__33910) {
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
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32090__auto___33980 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32090__auto___33980,out){
return (function (){
var f__32091__auto__ = (function (){var switch__32002__auto__ = ((function (c__32090__auto___33980,out){
return (function (state_33952){
var state_val_33953 = (state_33952[(1)]);
if((state_val_33953 === (7))){
var inst_33948 = (state_33952[(2)]);
var state_33952__$1 = state_33952;
var statearr_33954_33981 = state_33952__$1;
(statearr_33954_33981[(2)] = inst_33948);

(statearr_33954_33981[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33953 === (1))){
var inst_33911 = [];
var inst_33912 = inst_33911;
var inst_33913 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33952__$1 = (function (){var statearr_33955 = state_33952;
(statearr_33955[(7)] = inst_33913);

(statearr_33955[(8)] = inst_33912);

return statearr_33955;
})();
var statearr_33956_33982 = state_33952__$1;
(statearr_33956_33982[(2)] = null);

(statearr_33956_33982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33953 === (4))){
var inst_33916 = (state_33952[(9)]);
var inst_33916__$1 = (state_33952[(2)]);
var inst_33917 = (inst_33916__$1 == null);
var inst_33918 = cljs.core.not.call(null,inst_33917);
var state_33952__$1 = (function (){var statearr_33957 = state_33952;
(statearr_33957[(9)] = inst_33916__$1);

return statearr_33957;
})();
if(inst_33918){
var statearr_33958_33983 = state_33952__$1;
(statearr_33958_33983[(1)] = (5));

} else {
var statearr_33959_33984 = state_33952__$1;
(statearr_33959_33984[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33953 === (15))){
var inst_33942 = (state_33952[(2)]);
var state_33952__$1 = state_33952;
var statearr_33960_33985 = state_33952__$1;
(statearr_33960_33985[(2)] = inst_33942);

(statearr_33960_33985[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33953 === (13))){
var state_33952__$1 = state_33952;
var statearr_33961_33986 = state_33952__$1;
(statearr_33961_33986[(2)] = null);

(statearr_33961_33986[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33953 === (6))){
var inst_33912 = (state_33952[(8)]);
var inst_33937 = inst_33912.length;
var inst_33938 = (inst_33937 > (0));
var state_33952__$1 = state_33952;
if(cljs.core.truth_(inst_33938)){
var statearr_33962_33987 = state_33952__$1;
(statearr_33962_33987[(1)] = (12));

} else {
var statearr_33963_33988 = state_33952__$1;
(statearr_33963_33988[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33953 === (3))){
var inst_33950 = (state_33952[(2)]);
var state_33952__$1 = state_33952;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33952__$1,inst_33950);
} else {
if((state_val_33953 === (12))){
var inst_33912 = (state_33952[(8)]);
var inst_33940 = cljs.core.vec.call(null,inst_33912);
var state_33952__$1 = state_33952;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33952__$1,(15),out,inst_33940);
} else {
if((state_val_33953 === (2))){
var state_33952__$1 = state_33952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33952__$1,(4),ch);
} else {
if((state_val_33953 === (11))){
var inst_33920 = (state_33952[(10)]);
var inst_33916 = (state_33952[(9)]);
var inst_33930 = (state_33952[(2)]);
var inst_33931 = [];
var inst_33932 = inst_33931.push(inst_33916);
var inst_33912 = inst_33931;
var inst_33913 = inst_33920;
var state_33952__$1 = (function (){var statearr_33964 = state_33952;
(statearr_33964[(11)] = inst_33930);

(statearr_33964[(7)] = inst_33913);

(statearr_33964[(12)] = inst_33932);

(statearr_33964[(8)] = inst_33912);

return statearr_33964;
})();
var statearr_33965_33989 = state_33952__$1;
(statearr_33965_33989[(2)] = null);

(statearr_33965_33989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33953 === (9))){
var inst_33912 = (state_33952[(8)]);
var inst_33928 = cljs.core.vec.call(null,inst_33912);
var state_33952__$1 = state_33952;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33952__$1,(11),out,inst_33928);
} else {
if((state_val_33953 === (5))){
var inst_33920 = (state_33952[(10)]);
var inst_33913 = (state_33952[(7)]);
var inst_33916 = (state_33952[(9)]);
var inst_33920__$1 = f.call(null,inst_33916);
var inst_33921 = cljs.core._EQ_.call(null,inst_33920__$1,inst_33913);
var inst_33922 = cljs.core.keyword_identical_QMARK_.call(null,inst_33913,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_33923 = (inst_33921) || (inst_33922);
var state_33952__$1 = (function (){var statearr_33966 = state_33952;
(statearr_33966[(10)] = inst_33920__$1);

return statearr_33966;
})();
if(cljs.core.truth_(inst_33923)){
var statearr_33967_33990 = state_33952__$1;
(statearr_33967_33990[(1)] = (8));

} else {
var statearr_33968_33991 = state_33952__$1;
(statearr_33968_33991[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33953 === (14))){
var inst_33945 = (state_33952[(2)]);
var inst_33946 = cljs.core.async.close_BANG_.call(null,out);
var state_33952__$1 = (function (){var statearr_33970 = state_33952;
(statearr_33970[(13)] = inst_33945);

return statearr_33970;
})();
var statearr_33971_33992 = state_33952__$1;
(statearr_33971_33992[(2)] = inst_33946);

(statearr_33971_33992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33953 === (10))){
var inst_33935 = (state_33952[(2)]);
var state_33952__$1 = state_33952;
var statearr_33972_33993 = state_33952__$1;
(statearr_33972_33993[(2)] = inst_33935);

(statearr_33972_33993[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33953 === (8))){
var inst_33920 = (state_33952[(10)]);
var inst_33916 = (state_33952[(9)]);
var inst_33912 = (state_33952[(8)]);
var inst_33925 = inst_33912.push(inst_33916);
var tmp33969 = inst_33912;
var inst_33912__$1 = tmp33969;
var inst_33913 = inst_33920;
var state_33952__$1 = (function (){var statearr_33973 = state_33952;
(statearr_33973[(7)] = inst_33913);

(statearr_33973[(14)] = inst_33925);

(statearr_33973[(8)] = inst_33912__$1);

return statearr_33973;
})();
var statearr_33974_33994 = state_33952__$1;
(statearr_33974_33994[(2)] = null);

(statearr_33974_33994[(1)] = (2));


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
});})(c__32090__auto___33980,out))
;
return ((function (switch__32002__auto__,c__32090__auto___33980,out){
return (function() {
var cljs$core$async$state_machine__32003__auto__ = null;
var cljs$core$async$state_machine__32003__auto____0 = (function (){
var statearr_33975 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33975[(0)] = cljs$core$async$state_machine__32003__auto__);

(statearr_33975[(1)] = (1));

return statearr_33975;
});
var cljs$core$async$state_machine__32003__auto____1 = (function (state_33952){
while(true){
var ret_value__32004__auto__ = (function (){try{while(true){
var result__32005__auto__ = switch__32002__auto__.call(null,state_33952);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32005__auto__;
}
break;
}
}catch (e33976){if((e33976 instanceof Object)){
var ex__32006__auto__ = e33976;
var statearr_33977_33995 = state_33952;
(statearr_33977_33995[(5)] = ex__32006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33952);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33976;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33996 = state_33952;
state_33952 = G__33996;
continue;
} else {
return ret_value__32004__auto__;
}
break;
}
});
cljs$core$async$state_machine__32003__auto__ = function(state_33952){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32003__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32003__auto____1.call(this,state_33952);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32003__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32003__auto____0;
cljs$core$async$state_machine__32003__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32003__auto____1;
return cljs$core$async$state_machine__32003__auto__;
})()
;})(switch__32002__auto__,c__32090__auto___33980,out))
})();
var state__32092__auto__ = (function (){var statearr_33978 = f__32091__auto__.call(null);
(statearr_33978[(6)] = c__32090__auto___33980);

return statearr_33978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32092__auto__);
});})(c__32090__auto___33980,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1544388303471
