// Compiled by ClojureScript 0.0-2665 {}
if(!goog.isProvided_('cljs.core.async')) {
goog.provide('cljs.core.async');
}
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t27519 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27519 = (function (f,fn_handler,meta27520){
this.f = f;
this.fn_handler = fn_handler;
this.meta27520 = meta27520;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27519.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27519.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t27519.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t27519.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27521){
var self__ = this;
var _27521__$1 = this;
return self__.meta27520;
});

cljs.core.async.t27519.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27521,meta27520__$1){
var self__ = this;
var _27521__$1 = this;
return (new cljs.core.async.t27519(self__.f,self__.fn_handler,meta27520__$1));
});

cljs.core.async.t27519.cljs$lang$type = true;

cljs.core.async.t27519.cljs$lang$ctorStr = "cljs.core.async/t27519";

cljs.core.async.t27519.cljs$lang$ctorPrWriter = (function (this__13360__auto__,writer__13361__auto__,opt__13362__auto__){
return cljs.core._write.call(null,writer__13361__auto__,"cljs.core.async/t27519");
});

cljs.core.async.__GT_t27519 = (function __GT_t27519(f__$1,fn_handler__$1,meta27520){
return (new cljs.core.async.t27519(f__$1,fn_handler__$1,meta27520));
});

}

return (new cljs.core.async.t27519(f,fn_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),20,new cljs.core.Keyword(null,"end-line","end-line",1837326455),16,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),13,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/gmp26/clojure/rum-datascript-prototype/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){
var G__27523 = buff;
if(G__27523){
var bit__13454__auto__ = null;
if(cljs.core.truth_((function (){var or__12773__auto__ = bit__13454__auto__;
if(cljs.core.truth_(or__12773__auto__)){
return or__12773__auto__;
} else {
return G__27523.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__27523.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__27523);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__27523);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){
return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){
return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){
return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){
return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27524 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27524);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27524,ret){
return (function (){
return fn1.call(null,val_27524);
});})(val_27524,ret))
);
}
} else {
}

return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});
var put_BANG___3 = (function (port,val,fn1){
return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){
var a = (new Array(n));
var n__13660__auto___27525 = n;
var x_27526 = (0);
while(true){
if((x_27526 < n__13660__auto___27525)){
(a[x_27526] = (0));

var G__27527 = (x_27526 + (1));
x_27526 = G__27527;
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

var G__27528 = (i + (1));
i = G__27528;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t27532 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27532 = (function (flag,alt_flag,meta27533){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta27533 = meta27533;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27532.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27532.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t27532.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t27532.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27534){
var self__ = this;
var _27534__$1 = this;
return self__.meta27533;
});})(flag))
;

cljs.core.async.t27532.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27534,meta27533__$1){
var self__ = this;
var _27534__$1 = this;
return (new cljs.core.async.t27532(self__.flag,self__.alt_flag,meta27533__$1));
});})(flag))
;

cljs.core.async.t27532.cljs$lang$type = true;

cljs.core.async.t27532.cljs$lang$ctorStr = "cljs.core.async/t27532";

cljs.core.async.t27532.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__13360__auto__,writer__13361__auto__,opt__13362__auto__){
return cljs.core._write.call(null,writer__13361__auto__,"cljs.core.async/t27532");
});})(flag))
;

cljs.core.async.__GT_t27532 = ((function (flag){
return (function __GT_t27532(flag__$1,alt_flag__$1,meta27533){
return (new cljs.core.async.t27532(flag__$1,alt_flag__$1,meta27533));
});})(flag))
;

}

return (new cljs.core.async.t27532(flag,alt_flag,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),15,new cljs.core.Keyword(null,"end-line","end-line",1837326455),146,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),141,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/gmp26/clojure/rum-datascript-prototype/resources/public/js/out/cljs/core/async.cljs"], null)));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t27538 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27538 = (function (cb,flag,alt_handler,meta27539){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta27539 = meta27539;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27538.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27538.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t27538.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t27538.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27540){
var self__ = this;
var _27540__$1 = this;
return self__.meta27539;
});

cljs.core.async.t27538.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27540,meta27539__$1){
var self__ = this;
var _27540__$1 = this;
return (new cljs.core.async.t27538(self__.cb,self__.flag,self__.alt_handler,meta27539__$1));
});

cljs.core.async.t27538.cljs$lang$type = true;

cljs.core.async.t27538.cljs$lang$ctorStr = "cljs.core.async/t27538";

cljs.core.async.t27538.cljs$lang$ctorPrWriter = (function (this__13360__auto__,writer__13361__auto__,opt__13362__auto__){
return cljs.core._write.call(null,writer__13361__auto__,"cljs.core.async/t27538");
});

cljs.core.async.__GT_t27538 = (function __GT_t27538(cb__$1,flag__$1,alt_handler__$1,meta27539){
return (new cljs.core.async.t27538(cb__$1,flag__$1,alt_handler__$1,meta27539));
});

}

return (new cljs.core.async.t27538(cb,flag,alt_handler,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),11,new cljs.core.Keyword(null,"end-line","end-line",1837326455),154,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),149,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/gmp26/clojure/rum-datascript-prototype/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
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
return (function (p1__27541_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27541_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27542_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27542_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__12773__auto__ = wport;
if(cljs.core.truth_(or__12773__auto__)){
return or__12773__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27543 = (i + (1));
i = G__27543;
continue;
}
} else {
return null;
}
break;
}
})();
var or__12773__auto__ = ret;
if(cljs.core.truth_(or__12773__auto__)){
return or__12773__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__12761__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__12761__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__12761__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
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
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__27544){
var map__27546 = p__27544;
var map__27546__$1 = ((cljs.core.seq_QMARK_.call(null,map__27546))?cljs.core.apply.call(null,cljs.core.hash_map,map__27546):map__27546);
var opts = map__27546__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__27544 = null;
if (arguments.length > 1) {
var G__27547__i = 0, G__27547__a = new Array(arguments.length -  1);
while (G__27547__i < G__27547__a.length) {G__27547__a[G__27547__i] = arguments[G__27547__i + 1]; ++G__27547__i;}
  p__27544 = new cljs.core.IndexedSeq(G__27547__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__27544);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__27548){
var ports = cljs.core.first(arglist__27548);
var p__27544 = cljs.core.rest(arglist__27548);
return alts_BANG___delegate(ports,p__27544);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){
return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){
var c__16465__auto___27643 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16465__auto___27643){
return (function (){
var f__16466__auto__ = (function (){var switch__16450__auto__ = ((function (c__16465__auto___27643){
return (function (state_27619){
var state_val_27620 = (state_27619[(1)]);
if((state_val_27620 === (7))){
var inst_27615 = (state_27619[(2)]);
var state_27619__$1 = state_27619;
var statearr_27621_27644 = state_27619__$1;
(statearr_27621_27644[(2)] = inst_27615);

(statearr_27621_27644[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27620 === (1))){
var state_27619__$1 = state_27619;
var statearr_27622_27645 = state_27619__$1;
(statearr_27622_27645[(2)] = null);

(statearr_27622_27645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27620 === (4))){
var inst_27598 = (state_27619[(7)]);
var inst_27598__$1 = (state_27619[(2)]);
var inst_27599 = (inst_27598__$1 == null);
var state_27619__$1 = (function (){var statearr_27623 = state_27619;
(statearr_27623[(7)] = inst_27598__$1);

return statearr_27623;
})();
if(cljs.core.truth_(inst_27599)){
var statearr_27624_27646 = state_27619__$1;
(statearr_27624_27646[(1)] = (5));

} else {
var statearr_27625_27647 = state_27619__$1;
(statearr_27625_27647[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27620 === (13))){
var state_27619__$1 = state_27619;
var statearr_27626_27648 = state_27619__$1;
(statearr_27626_27648[(2)] = null);

(statearr_27626_27648[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27620 === (6))){
var inst_27598 = (state_27619[(7)]);
var state_27619__$1 = state_27619;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27619__$1,(11),to,inst_27598);
} else {
if((state_val_27620 === (3))){
var inst_27617 = (state_27619[(2)]);
var state_27619__$1 = state_27619;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27619__$1,inst_27617);
} else {
if((state_val_27620 === (12))){
var state_27619__$1 = state_27619;
var statearr_27627_27649 = state_27619__$1;
(statearr_27627_27649[(2)] = null);

(statearr_27627_27649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27620 === (2))){
var state_27619__$1 = state_27619;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27619__$1,(4),from);
} else {
if((state_val_27620 === (11))){
var inst_27608 = (state_27619[(2)]);
var state_27619__$1 = state_27619;
if(cljs.core.truth_(inst_27608)){
var statearr_27628_27650 = state_27619__$1;
(statearr_27628_27650[(1)] = (12));

} else {
var statearr_27629_27651 = state_27619__$1;
(statearr_27629_27651[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27620 === (9))){
var state_27619__$1 = state_27619;
var statearr_27630_27652 = state_27619__$1;
(statearr_27630_27652[(2)] = null);

(statearr_27630_27652[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27620 === (5))){
var state_27619__$1 = state_27619;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27631_27653 = state_27619__$1;
(statearr_27631_27653[(1)] = (8));

} else {
var statearr_27632_27654 = state_27619__$1;
(statearr_27632_27654[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27620 === (14))){
var inst_27613 = (state_27619[(2)]);
var state_27619__$1 = state_27619;
var statearr_27633_27655 = state_27619__$1;
(statearr_27633_27655[(2)] = inst_27613);

(statearr_27633_27655[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27620 === (10))){
var inst_27605 = (state_27619[(2)]);
var state_27619__$1 = state_27619;
var statearr_27634_27656 = state_27619__$1;
(statearr_27634_27656[(2)] = inst_27605);

(statearr_27634_27656[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27620 === (8))){
var inst_27602 = cljs.core.async.close_BANG_.call(null,to);
var state_27619__$1 = state_27619;
var statearr_27635_27657 = state_27619__$1;
(statearr_27635_27657[(2)] = inst_27602);

(statearr_27635_27657[(1)] = (10));


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
});})(c__16465__auto___27643))
;
return ((function (switch__16450__auto__,c__16465__auto___27643){
return (function() {
var state_machine__16451__auto__ = null;
var state_machine__16451__auto____0 = (function (){
var statearr_27639 = [null,null,null,null,null,null,null,null];
(statearr_27639[(0)] = state_machine__16451__auto__);

(statearr_27639[(1)] = (1));

return statearr_27639;
});
var state_machine__16451__auto____1 = (function (state_27619){
while(true){
var ret_value__16452__auto__ = (function (){try{while(true){
var result__16453__auto__ = switch__16450__auto__.call(null,state_27619);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16453__auto__;
}
break;
}
}catch (e27640){if((e27640 instanceof Object)){
var ex__16454__auto__ = e27640;
var statearr_27641_27658 = state_27619;
(statearr_27641_27658[(5)] = ex__16454__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27619);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27640;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27659 = state_27619;
state_27619 = G__27659;
continue;
} else {
return ret_value__16452__auto__;
}
break;
}
});
state_machine__16451__auto__ = function(state_27619){
switch(arguments.length){
case 0:
return state_machine__16451__auto____0.call(this);
case 1:
return state_machine__16451__auto____1.call(this,state_27619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16451__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16451__auto____0;
state_machine__16451__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16451__auto____1;
return state_machine__16451__auto__;
})()
;})(switch__16450__auto__,c__16465__auto___27643))
})();
var state__16467__auto__ = (function (){var statearr_27642 = f__16466__auto__.call(null);
(statearr_27642[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16465__auto___27643);

return statearr_27642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16467__auto__);
});})(c__16465__auto___27643))
);


return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__27843){
var vec__27844 = p__27843;
var v = cljs.core.nth.call(null,vec__27844,(0),null);
var p = cljs.core.nth.call(null,vec__27844,(1),null);
var job = vec__27844;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__16465__auto___28026 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16465__auto___28026,res,vec__27844,v,p,job,jobs,results){
return (function (){
var f__16466__auto__ = (function (){var switch__16450__auto__ = ((function (c__16465__auto___28026,res,vec__27844,v,p,job,jobs,results){
return (function (state_27849){
var state_val_27850 = (state_27849[(1)]);
if((state_val_27850 === (2))){
var inst_27846 = (state_27849[(2)]);
var inst_27847 = cljs.core.async.close_BANG_.call(null,res);
var state_27849__$1 = (function (){var statearr_27851 = state_27849;
(statearr_27851[(7)] = inst_27846);

return statearr_27851;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27849__$1,inst_27847);
} else {
if((state_val_27850 === (1))){
var state_27849__$1 = state_27849;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27849__$1,(2),res,v);
} else {
return null;
}
}
});})(c__16465__auto___28026,res,vec__27844,v,p,job,jobs,results))
;
return ((function (switch__16450__auto__,c__16465__auto___28026,res,vec__27844,v,p,job,jobs,results){
return (function() {
var state_machine__16451__auto__ = null;
var state_machine__16451__auto____0 = (function (){
var statearr_27855 = [null,null,null,null,null,null,null,null];
(statearr_27855[(0)] = state_machine__16451__auto__);

(statearr_27855[(1)] = (1));

return statearr_27855;
});
var state_machine__16451__auto____1 = (function (state_27849){
while(true){
var ret_value__16452__auto__ = (function (){try{while(true){
var result__16453__auto__ = switch__16450__auto__.call(null,state_27849);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16453__auto__;
}
break;
}
}catch (e27856){if((e27856 instanceof Object)){
var ex__16454__auto__ = e27856;
var statearr_27857_28027 = state_27849;
(statearr_27857_28027[(5)] = ex__16454__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27849);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27856;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28028 = state_27849;
state_27849 = G__28028;
continue;
} else {
return ret_value__16452__auto__;
}
break;
}
});
state_machine__16451__auto__ = function(state_27849){
switch(arguments.length){
case 0:
return state_machine__16451__auto____0.call(this);
case 1:
return state_machine__16451__auto____1.call(this,state_27849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16451__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16451__auto____0;
state_machine__16451__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16451__auto____1;
return state_machine__16451__auto__;
})()
;})(switch__16450__auto__,c__16465__auto___28026,res,vec__27844,v,p,job,jobs,results))
})();
var state__16467__auto__ = (function (){var statearr_27858 = f__16466__auto__.call(null);
(statearr_27858[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16465__auto___28026);

return statearr_27858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16467__auto__);
});})(c__16465__auto___28026,res,vec__27844,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27859){
var vec__27860 = p__27859;
var v = cljs.core.nth.call(null,vec__27860,(0),null);
var p = cljs.core.nth.call(null,vec__27860,(1),null);
var job = vec__27860;
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
var n__13660__auto___28029 = n;
var __28030 = (0);
while(true){
if((__28030 < n__13660__auto___28029)){
var G__27861_28031 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__27861_28031) {
case "async":
var c__16465__auto___28033 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28030,c__16465__auto___28033,G__27861_28031,n__13660__auto___28029,jobs,results,process,async){
return (function (){
var f__16466__auto__ = (function (){var switch__16450__auto__ = ((function (__28030,c__16465__auto___28033,G__27861_28031,n__13660__auto___28029,jobs,results,process,async){
return (function (state_27874){
var state_val_27875 = (state_27874[(1)]);
if((state_val_27875 === (7))){
var inst_27870 = (state_27874[(2)]);
var state_27874__$1 = state_27874;
var statearr_27876_28034 = state_27874__$1;
(statearr_27876_28034[(2)] = inst_27870);

(statearr_27876_28034[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27875 === (6))){
var state_27874__$1 = state_27874;
var statearr_27877_28035 = state_27874__$1;
(statearr_27877_28035[(2)] = null);

(statearr_27877_28035[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27875 === (5))){
var state_27874__$1 = state_27874;
var statearr_27878_28036 = state_27874__$1;
(statearr_27878_28036[(2)] = null);

(statearr_27878_28036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27875 === (4))){
var inst_27864 = (state_27874[(2)]);
var inst_27865 = async.call(null,inst_27864);
var state_27874__$1 = state_27874;
if(cljs.core.truth_(inst_27865)){
var statearr_27879_28037 = state_27874__$1;
(statearr_27879_28037[(1)] = (5));

} else {
var statearr_27880_28038 = state_27874__$1;
(statearr_27880_28038[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27875 === (3))){
var inst_27872 = (state_27874[(2)]);
var state_27874__$1 = state_27874;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27874__$1,inst_27872);
} else {
if((state_val_27875 === (2))){
var state_27874__$1 = state_27874;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27874__$1,(4),jobs);
} else {
if((state_val_27875 === (1))){
var state_27874__$1 = state_27874;
var statearr_27881_28039 = state_27874__$1;
(statearr_27881_28039[(2)] = null);

(statearr_27881_28039[(1)] = (2));


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
});})(__28030,c__16465__auto___28033,G__27861_28031,n__13660__auto___28029,jobs,results,process,async))
;
return ((function (__28030,switch__16450__auto__,c__16465__auto___28033,G__27861_28031,n__13660__auto___28029,jobs,results,process,async){
return (function() {
var state_machine__16451__auto__ = null;
var state_machine__16451__auto____0 = (function (){
var statearr_27885 = [null,null,null,null,null,null,null];
(statearr_27885[(0)] = state_machine__16451__auto__);

(statearr_27885[(1)] = (1));

return statearr_27885;
});
var state_machine__16451__auto____1 = (function (state_27874){
while(true){
var ret_value__16452__auto__ = (function (){try{while(true){
var result__16453__auto__ = switch__16450__auto__.call(null,state_27874);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16453__auto__;
}
break;
}
}catch (e27886){if((e27886 instanceof Object)){
var ex__16454__auto__ = e27886;
var statearr_27887_28040 = state_27874;
(statearr_27887_28040[(5)] = ex__16454__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27874);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27886;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28041 = state_27874;
state_27874 = G__28041;
continue;
} else {
return ret_value__16452__auto__;
}
break;
}
});
state_machine__16451__auto__ = function(state_27874){
switch(arguments.length){
case 0:
return state_machine__16451__auto____0.call(this);
case 1:
return state_machine__16451__auto____1.call(this,state_27874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16451__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16451__auto____0;
state_machine__16451__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16451__auto____1;
return state_machine__16451__auto__;
})()
;})(__28030,switch__16450__auto__,c__16465__auto___28033,G__27861_28031,n__13660__auto___28029,jobs,results,process,async))
})();
var state__16467__auto__ = (function (){var statearr_27888 = f__16466__auto__.call(null);
(statearr_27888[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16465__auto___28033);

return statearr_27888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16467__auto__);
});})(__28030,c__16465__auto___28033,G__27861_28031,n__13660__auto___28029,jobs,results,process,async))
);


break;
case "compute":
var c__16465__auto___28042 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28030,c__16465__auto___28042,G__27861_28031,n__13660__auto___28029,jobs,results,process,async){
return (function (){
var f__16466__auto__ = (function (){var switch__16450__auto__ = ((function (__28030,c__16465__auto___28042,G__27861_28031,n__13660__auto___28029,jobs,results,process,async){
return (function (state_27901){
var state_val_27902 = (state_27901[(1)]);
if((state_val_27902 === (7))){
var inst_27897 = (state_27901[(2)]);
var state_27901__$1 = state_27901;
var statearr_27903_28043 = state_27901__$1;
(statearr_27903_28043[(2)] = inst_27897);

(statearr_27903_28043[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27902 === (6))){
var state_27901__$1 = state_27901;
var statearr_27904_28044 = state_27901__$1;
(statearr_27904_28044[(2)] = null);

(statearr_27904_28044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27902 === (5))){
var state_27901__$1 = state_27901;
var statearr_27905_28045 = state_27901__$1;
(statearr_27905_28045[(2)] = null);

(statearr_27905_28045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27902 === (4))){
var inst_27891 = (state_27901[(2)]);
var inst_27892 = process.call(null,inst_27891);
var state_27901__$1 = state_27901;
if(cljs.core.truth_(inst_27892)){
var statearr_27906_28046 = state_27901__$1;
(statearr_27906_28046[(1)] = (5));

} else {
var statearr_27907_28047 = state_27901__$1;
(statearr_27907_28047[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27902 === (3))){
var inst_27899 = (state_27901[(2)]);
var state_27901__$1 = state_27901;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27901__$1,inst_27899);
} else {
if((state_val_27902 === (2))){
var state_27901__$1 = state_27901;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27901__$1,(4),jobs);
} else {
if((state_val_27902 === (1))){
var state_27901__$1 = state_27901;
var statearr_27908_28048 = state_27901__$1;
(statearr_27908_28048[(2)] = null);

(statearr_27908_28048[(1)] = (2));


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
});})(__28030,c__16465__auto___28042,G__27861_28031,n__13660__auto___28029,jobs,results,process,async))
;
return ((function (__28030,switch__16450__auto__,c__16465__auto___28042,G__27861_28031,n__13660__auto___28029,jobs,results,process,async){
return (function() {
var state_machine__16451__auto__ = null;
var state_machine__16451__auto____0 = (function (){
var statearr_27912 = [null,null,null,null,null,null,null];
(statearr_27912[(0)] = state_machine__16451__auto__);

(statearr_27912[(1)] = (1));

return statearr_27912;
});
var state_machine__16451__auto____1 = (function (state_27901){
while(true){
var ret_value__16452__auto__ = (function (){try{while(true){
var result__16453__auto__ = switch__16450__auto__.call(null,state_27901);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16453__auto__;
}
break;
}
}catch (e27913){if((e27913 instanceof Object)){
var ex__16454__auto__ = e27913;
var statearr_27914_28049 = state_27901;
(statearr_27914_28049[(5)] = ex__16454__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27901);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27913;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28050 = state_27901;
state_27901 = G__28050;
continue;
} else {
return ret_value__16452__auto__;
}
break;
}
});
state_machine__16451__auto__ = function(state_27901){
switch(arguments.length){
case 0:
return state_machine__16451__auto____0.call(this);
case 1:
return state_machine__16451__auto____1.call(this,state_27901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16451__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16451__auto____0;
state_machine__16451__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16451__auto____1;
return state_machine__16451__auto__;
})()
;})(__28030,switch__16450__auto__,c__16465__auto___28042,G__27861_28031,n__13660__auto___28029,jobs,results,process,async))
})();
var state__16467__auto__ = (function (){var statearr_27915 = f__16466__auto__.call(null);
(statearr_27915[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16465__auto___28042);

return statearr_27915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16467__auto__);
});})(__28030,c__16465__auto___28042,G__27861_28031,n__13660__auto___28029,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__28051 = (__28030 + (1));
__28030 = G__28051;
continue;
} else {
}
break;
}

var c__16465__auto___28052 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16465__auto___28052,jobs,results,process,async){
return (function (){
var f__16466__auto__ = (function (){var switch__16450__auto__ = ((function (c__16465__auto___28052,jobs,results,process,async){
return (function (state_27937){
var state_val_27938 = (state_27937[(1)]);
if((state_val_27938 === (9))){
var inst_27930 = (state_27937[(2)]);
var state_27937__$1 = (function (){var statearr_27939 = state_27937;
(statearr_27939[(7)] = inst_27930);

return statearr_27939;
})();
var statearr_27940_28053 = state_27937__$1;
(statearr_27940_28053[(2)] = null);

(statearr_27940_28053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27938 === (8))){
var inst_27923 = (state_27937[(8)]);
var inst_27928 = (state_27937[(2)]);
var state_27937__$1 = (function (){var statearr_27941 = state_27937;
(statearr_27941[(9)] = inst_27928);

return statearr_27941;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27937__$1,(9),results,inst_27923);
} else {
if((state_val_27938 === (7))){
var inst_27933 = (state_27937[(2)]);
var state_27937__$1 = state_27937;
var statearr_27942_28054 = state_27937__$1;
(statearr_27942_28054[(2)] = inst_27933);

(statearr_27942_28054[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27938 === (6))){
var inst_27923 = (state_27937[(8)]);
var inst_27918 = (state_27937[(10)]);
var inst_27923__$1 = cljs.core.async.chan.call(null,(1));
var inst_27924 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27925 = [inst_27918,inst_27923__$1];
var inst_27926 = (new cljs.core.PersistentVector(null,2,(5),inst_27924,inst_27925,null));
var state_27937__$1 = (function (){var statearr_27943 = state_27937;
(statearr_27943[(8)] = inst_27923__$1);

return statearr_27943;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27937__$1,(8),jobs,inst_27926);
} else {
if((state_val_27938 === (5))){
var inst_27921 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27937__$1 = state_27937;
var statearr_27944_28055 = state_27937__$1;
(statearr_27944_28055[(2)] = inst_27921);

(statearr_27944_28055[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27938 === (4))){
var inst_27918 = (state_27937[(10)]);
var inst_27918__$1 = (state_27937[(2)]);
var inst_27919 = (inst_27918__$1 == null);
var state_27937__$1 = (function (){var statearr_27945 = state_27937;
(statearr_27945[(10)] = inst_27918__$1);

return statearr_27945;
})();
if(cljs.core.truth_(inst_27919)){
var statearr_27946_28056 = state_27937__$1;
(statearr_27946_28056[(1)] = (5));

} else {
var statearr_27947_28057 = state_27937__$1;
(statearr_27947_28057[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27938 === (3))){
var inst_27935 = (state_27937[(2)]);
var state_27937__$1 = state_27937;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27937__$1,inst_27935);
} else {
if((state_val_27938 === (2))){
var state_27937__$1 = state_27937;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27937__$1,(4),from);
} else {
if((state_val_27938 === (1))){
var state_27937__$1 = state_27937;
var statearr_27948_28058 = state_27937__$1;
(statearr_27948_28058[(2)] = null);

(statearr_27948_28058[(1)] = (2));


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
});})(c__16465__auto___28052,jobs,results,process,async))
;
return ((function (switch__16450__auto__,c__16465__auto___28052,jobs,results,process,async){
return (function() {
var state_machine__16451__auto__ = null;
var state_machine__16451__auto____0 = (function (){
var statearr_27952 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27952[(0)] = state_machine__16451__auto__);

(statearr_27952[(1)] = (1));

return statearr_27952;
});
var state_machine__16451__auto____1 = (function (state_27937){
while(true){
var ret_value__16452__auto__ = (function (){try{while(true){
var result__16453__auto__ = switch__16450__auto__.call(null,state_27937);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16453__auto__;
}
break;
}
}catch (e27953){if((e27953 instanceof Object)){
var ex__16454__auto__ = e27953;
var statearr_27954_28059 = state_27937;
(statearr_27954_28059[(5)] = ex__16454__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27937);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27953;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28060 = state_27937;
state_27937 = G__28060;
continue;
} else {
return ret_value__16452__auto__;
}
break;
}
});
state_machine__16451__auto__ = function(state_27937){
switch(arguments.length){
case 0:
return state_machine__16451__auto____0.call(this);
case 1:
return state_machine__16451__auto____1.call(this,state_27937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16451__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16451__auto____0;
state_machine__16451__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16451__auto____1;
return state_machine__16451__auto__;
})()
;})(switch__16450__auto__,c__16465__auto___28052,jobs,results,process,async))
})();
var state__16467__auto__ = (function (){var statearr_27955 = f__16466__auto__.call(null);
(statearr_27955[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16465__auto___28052);

return statearr_27955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16467__auto__);
});})(c__16465__auto___28052,jobs,results,process,async))
);


var c__16465__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16465__auto__,jobs,results,process,async){
return (function (){
var f__16466__auto__ = (function (){var switch__16450__auto__ = ((function (c__16465__auto__,jobs,results,process,async){
return (function (state_27993){
var state_val_27994 = (state_27993[(1)]);
if((state_val_27994 === (7))){
var inst_27989 = (state_27993[(2)]);
var state_27993__$1 = state_27993;
var statearr_27995_28061 = state_27993__$1;
(statearr_27995_28061[(2)] = inst_27989);

(statearr_27995_28061[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27994 === (20))){
var state_27993__$1 = state_27993;
var statearr_27996_28062 = state_27993__$1;
(statearr_27996_28062[(2)] = null);

(statearr_27996_28062[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27994 === (1))){
var state_27993__$1 = state_27993;
var statearr_27997_28063 = state_27993__$1;
(statearr_27997_28063[(2)] = null);

(statearr_27997_28063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27994 === (4))){
var inst_27958 = (state_27993[(7)]);
var inst_27958__$1 = (state_27993[(2)]);
var inst_27959 = (inst_27958__$1 == null);
var state_27993__$1 = (function (){var statearr_27998 = state_27993;
(statearr_27998[(7)] = inst_27958__$1);

return statearr_27998;
})();
if(cljs.core.truth_(inst_27959)){
var statearr_27999_28064 = state_27993__$1;
(statearr_27999_28064[(1)] = (5));

} else {
var statearr_28000_28065 = state_27993__$1;
(statearr_28000_28065[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27994 === (15))){
var inst_27971 = (state_27993[(8)]);
var state_27993__$1 = state_27993;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27993__$1,(18),to,inst_27971);
} else {
if((state_val_27994 === (21))){
var inst_27984 = (state_27993[(2)]);
var state_27993__$1 = state_27993;
var statearr_28001_28066 = state_27993__$1;
(statearr_28001_28066[(2)] = inst_27984);

(statearr_28001_28066[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27994 === (13))){
var inst_27986 = (state_27993[(2)]);
var state_27993__$1 = (function (){var statearr_28002 = state_27993;
(statearr_28002[(9)] = inst_27986);

return statearr_28002;
})();
var statearr_28003_28067 = state_27993__$1;
(statearr_28003_28067[(2)] = null);

(statearr_28003_28067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27994 === (6))){
var inst_27958 = (state_27993[(7)]);
var state_27993__$1 = state_27993;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27993__$1,(11),inst_27958);
} else {
if((state_val_27994 === (17))){
var inst_27979 = (state_27993[(2)]);
var state_27993__$1 = state_27993;
if(cljs.core.truth_(inst_27979)){
var statearr_28004_28068 = state_27993__$1;
(statearr_28004_28068[(1)] = (19));

} else {
var statearr_28005_28069 = state_27993__$1;
(statearr_28005_28069[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27994 === (3))){
var inst_27991 = (state_27993[(2)]);
var state_27993__$1 = state_27993;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27993__$1,inst_27991);
} else {
if((state_val_27994 === (12))){
var inst_27968 = (state_27993[(10)]);
var state_27993__$1 = state_27993;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27993__$1,(14),inst_27968);
} else {
if((state_val_27994 === (2))){
var state_27993__$1 = state_27993;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27993__$1,(4),results);
} else {
if((state_val_27994 === (19))){
var state_27993__$1 = state_27993;
var statearr_28006_28070 = state_27993__$1;
(statearr_28006_28070[(2)] = null);

(statearr_28006_28070[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27994 === (11))){
var inst_27968 = (state_27993[(2)]);
var state_27993__$1 = (function (){var statearr_28007 = state_27993;
(statearr_28007[(10)] = inst_27968);

return statearr_28007;
})();
var statearr_28008_28071 = state_27993__$1;
(statearr_28008_28071[(2)] = null);

(statearr_28008_28071[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27994 === (9))){
var state_27993__$1 = state_27993;
var statearr_28009_28072 = state_27993__$1;
(statearr_28009_28072[(2)] = null);

(statearr_28009_28072[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27994 === (5))){
var state_27993__$1 = state_27993;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28010_28073 = state_27993__$1;
(statearr_28010_28073[(1)] = (8));

} else {
var statearr_28011_28074 = state_27993__$1;
(statearr_28011_28074[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27994 === (14))){
var inst_27973 = (state_27993[(11)]);
var inst_27971 = (state_27993[(8)]);
var inst_27971__$1 = (state_27993[(2)]);
var inst_27972 = (inst_27971__$1 == null);
var inst_27973__$1 = cljs.core.not.call(null,inst_27972);
var state_27993__$1 = (function (){var statearr_28012 = state_27993;
(statearr_28012[(11)] = inst_27973__$1);

(statearr_28012[(8)] = inst_27971__$1);

return statearr_28012;
})();
if(inst_27973__$1){
var statearr_28013_28075 = state_27993__$1;
(statearr_28013_28075[(1)] = (15));

} else {
var statearr_28014_28076 = state_27993__$1;
(statearr_28014_28076[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27994 === (16))){
var inst_27973 = (state_27993[(11)]);
var state_27993__$1 = state_27993;
var statearr_28015_28077 = state_27993__$1;
(statearr_28015_28077[(2)] = inst_27973);

(statearr_28015_28077[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27994 === (10))){
var inst_27965 = (state_27993[(2)]);
var state_27993__$1 = state_27993;
var statearr_28016_28078 = state_27993__$1;
(statearr_28016_28078[(2)] = inst_27965);

(statearr_28016_28078[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27994 === (18))){
var inst_27976 = (state_27993[(2)]);
var state_27993__$1 = state_27993;
var statearr_28017_28079 = state_27993__$1;
(statearr_28017_28079[(2)] = inst_27976);

(statearr_28017_28079[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27994 === (8))){
var inst_27962 = cljs.core.async.close_BANG_.call(null,to);
var state_27993__$1 = state_27993;
var statearr_28018_28080 = state_27993__$1;
(statearr_28018_28080[(2)] = inst_27962);

(statearr_28018_28080[(1)] = (10));


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
});})(c__16465__auto__,jobs,results,process,async))
;
return ((function (switch__16450__auto__,c__16465__auto__,jobs,results,process,async){
return (function() {
var state_machine__16451__auto__ = null;
var state_machine__16451__auto____0 = (function (){
var statearr_28022 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28022[(0)] = state_machine__16451__auto__);

(statearr_28022[(1)] = (1));

return statearr_28022;
});
var state_machine__16451__auto____1 = (function (state_27993){
while(true){
var ret_value__16452__auto__ = (function (){try{while(true){
var result__16453__auto__ = switch__16450__auto__.call(null,state_27993);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16453__auto__;
}
break;
}
}catch (e28023){if((e28023 instanceof Object)){
var ex__16454__auto__ = e28023;
var statearr_28024_28081 = state_27993;
(statearr_28024_28081[(5)] = ex__16454__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27993);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28023;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28082 = state_27993;
state_27993 = G__28082;
continue;
} else {
return ret_value__16452__auto__;
}
break;
}
});
state_machine__16451__auto__ = function(state_27993){
switch(arguments.length){
case 0:
return state_machine__16451__auto____0.call(this);
case 1:
return state_machine__16451__auto____1.call(this,state_27993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16451__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16451__auto____0;
state_machine__16451__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16451__auto____1;
return state_machine__16451__auto__;
})()
;})(switch__16450__auto__,c__16465__auto__,jobs,results,process,async))
})();
var state__16467__auto__ = (function (){var statearr_28025 = f__16466__auto__.call(null);
(statearr_28025[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16465__auto__);

return statearr_28025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16467__auto__);
});})(c__16465__auto__,jobs,results,process,async))
);

return c__16465__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){
return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){
return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){
return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__16465__auto___28183 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16465__auto___28183,tc,fc){
return (function (){
var f__16466__auto__ = (function (){var switch__16450__auto__ = ((function (c__16465__auto___28183,tc,fc){
return (function (state_28158){
var state_val_28159 = (state_28158[(1)]);
if((state_val_28159 === (7))){
var inst_28154 = (state_28158[(2)]);
var state_28158__$1 = state_28158;
var statearr_28160_28184 = state_28158__$1;
(statearr_28160_28184[(2)] = inst_28154);

(statearr_28160_28184[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28159 === (1))){
var state_28158__$1 = state_28158;
var statearr_28161_28185 = state_28158__$1;
(statearr_28161_28185[(2)] = null);

(statearr_28161_28185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28159 === (4))){
var inst_28135 = (state_28158[(7)]);
var inst_28135__$1 = (state_28158[(2)]);
var inst_28136 = (inst_28135__$1 == null);
var state_28158__$1 = (function (){var statearr_28162 = state_28158;
(statearr_28162[(7)] = inst_28135__$1);

return statearr_28162;
})();
if(cljs.core.truth_(inst_28136)){
var statearr_28163_28186 = state_28158__$1;
(statearr_28163_28186[(1)] = (5));

} else {
var statearr_28164_28187 = state_28158__$1;
(statearr_28164_28187[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28159 === (13))){
var state_28158__$1 = state_28158;
var statearr_28165_28188 = state_28158__$1;
(statearr_28165_28188[(2)] = null);

(statearr_28165_28188[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28159 === (6))){
var inst_28135 = (state_28158[(7)]);
var inst_28141 = p.call(null,inst_28135);
var state_28158__$1 = state_28158;
if(cljs.core.truth_(inst_28141)){
var statearr_28166_28189 = state_28158__$1;
(statearr_28166_28189[(1)] = (9));

} else {
var statearr_28167_28190 = state_28158__$1;
(statearr_28167_28190[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28159 === (3))){
var inst_28156 = (state_28158[(2)]);
var state_28158__$1 = state_28158;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28158__$1,inst_28156);
} else {
if((state_val_28159 === (12))){
var state_28158__$1 = state_28158;
var statearr_28168_28191 = state_28158__$1;
(statearr_28168_28191[(2)] = null);

(statearr_28168_28191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28159 === (2))){
var state_28158__$1 = state_28158;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28158__$1,(4),ch);
} else {
if((state_val_28159 === (11))){
var inst_28135 = (state_28158[(7)]);
var inst_28145 = (state_28158[(2)]);
var state_28158__$1 = state_28158;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28158__$1,(8),inst_28145,inst_28135);
} else {
if((state_val_28159 === (9))){
var state_28158__$1 = state_28158;
var statearr_28169_28192 = state_28158__$1;
(statearr_28169_28192[(2)] = tc);

(statearr_28169_28192[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28159 === (5))){
var inst_28138 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28139 = cljs.core.async.close_BANG_.call(null,fc);
var state_28158__$1 = (function (){var statearr_28170 = state_28158;
(statearr_28170[(8)] = inst_28138);

return statearr_28170;
})();
var statearr_28171_28193 = state_28158__$1;
(statearr_28171_28193[(2)] = inst_28139);

(statearr_28171_28193[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28159 === (14))){
var inst_28152 = (state_28158[(2)]);
var state_28158__$1 = state_28158;
var statearr_28172_28194 = state_28158__$1;
(statearr_28172_28194[(2)] = inst_28152);

(statearr_28172_28194[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28159 === (10))){
var state_28158__$1 = state_28158;
var statearr_28173_28195 = state_28158__$1;
(statearr_28173_28195[(2)] = fc);

(statearr_28173_28195[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28159 === (8))){
var inst_28147 = (state_28158[(2)]);
var state_28158__$1 = state_28158;
if(cljs.core.truth_(inst_28147)){
var statearr_28174_28196 = state_28158__$1;
(statearr_28174_28196[(1)] = (12));

} else {
var statearr_28175_28197 = state_28158__$1;
(statearr_28175_28197[(1)] = (13));

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
});})(c__16465__auto___28183,tc,fc))
;
return ((function (switch__16450__auto__,c__16465__auto___28183,tc,fc){
return (function() {
var state_machine__16451__auto__ = null;
var state_machine__16451__auto____0 = (function (){
var statearr_28179 = [null,null,null,null,null,null,null,null,null];
(statearr_28179[(0)] = state_machine__16451__auto__);

(statearr_28179[(1)] = (1));

return statearr_28179;
});
var state_machine__16451__auto____1 = (function (state_28158){
while(true){
var ret_value__16452__auto__ = (function (){try{while(true){
var result__16453__auto__ = switch__16450__auto__.call(null,state_28158);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16453__auto__;
}
break;
}
}catch (e28180){if((e28180 instanceof Object)){
var ex__16454__auto__ = e28180;
var statearr_28181_28198 = state_28158;
(statearr_28181_28198[(5)] = ex__16454__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28158);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28180;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28199 = state_28158;
state_28158 = G__28199;
continue;
} else {
return ret_value__16452__auto__;
}
break;
}
});
state_machine__16451__auto__ = function(state_28158){
switch(arguments.length){
case 0:
return state_machine__16451__auto____0.call(this);
case 1:
return state_machine__16451__auto____1.call(this,state_28158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16451__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16451__auto____0;
state_machine__16451__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16451__auto____1;
return state_machine__16451__auto__;
})()
;})(switch__16450__auto__,c__16465__auto___28183,tc,fc))
})();
var state__16467__auto__ = (function (){var statearr_28182 = f__16466__auto__.call(null);
(statearr_28182[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16465__auto___28183);

return statearr_28182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16467__auto__);
});})(c__16465__auto___28183,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){
var c__16465__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16465__auto__){
return (function (){
var f__16466__auto__ = (function (){var switch__16450__auto__ = ((function (c__16465__auto__){
return (function (state_28246){
var state_val_28247 = (state_28246[(1)]);
if((state_val_28247 === (7))){
var inst_28242 = (state_28246[(2)]);
var state_28246__$1 = state_28246;
var statearr_28248_28264 = state_28246__$1;
(statearr_28248_28264[(2)] = inst_28242);

(statearr_28248_28264[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28247 === (6))){
var inst_28235 = (state_28246[(7)]);
var inst_28232 = (state_28246[(8)]);
var inst_28239 = f.call(null,inst_28232,inst_28235);
var inst_28232__$1 = inst_28239;
var state_28246__$1 = (function (){var statearr_28249 = state_28246;
(statearr_28249[(8)] = inst_28232__$1);

return statearr_28249;
})();
var statearr_28250_28265 = state_28246__$1;
(statearr_28250_28265[(2)] = null);

(statearr_28250_28265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28247 === (5))){
var inst_28232 = (state_28246[(8)]);
var state_28246__$1 = state_28246;
var statearr_28251_28266 = state_28246__$1;
(statearr_28251_28266[(2)] = inst_28232);

(statearr_28251_28266[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28247 === (4))){
var inst_28235 = (state_28246[(7)]);
var inst_28235__$1 = (state_28246[(2)]);
var inst_28236 = (inst_28235__$1 == null);
var state_28246__$1 = (function (){var statearr_28252 = state_28246;
(statearr_28252[(7)] = inst_28235__$1);

return statearr_28252;
})();
if(cljs.core.truth_(inst_28236)){
var statearr_28253_28267 = state_28246__$1;
(statearr_28253_28267[(1)] = (5));

} else {
var statearr_28254_28268 = state_28246__$1;
(statearr_28254_28268[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28247 === (3))){
var inst_28244 = (state_28246[(2)]);
var state_28246__$1 = state_28246;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28246__$1,inst_28244);
} else {
if((state_val_28247 === (2))){
var state_28246__$1 = state_28246;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28246__$1,(4),ch);
} else {
if((state_val_28247 === (1))){
var inst_28232 = init;
var state_28246__$1 = (function (){var statearr_28255 = state_28246;
(statearr_28255[(8)] = inst_28232);

return statearr_28255;
})();
var statearr_28256_28269 = state_28246__$1;
(statearr_28256_28269[(2)] = null);

(statearr_28256_28269[(1)] = (2));


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
});})(c__16465__auto__))
;
return ((function (switch__16450__auto__,c__16465__auto__){
return (function() {
var state_machine__16451__auto__ = null;
var state_machine__16451__auto____0 = (function (){
var statearr_28260 = [null,null,null,null,null,null,null,null,null];
(statearr_28260[(0)] = state_machine__16451__auto__);

(statearr_28260[(1)] = (1));

return statearr_28260;
});
var state_machine__16451__auto____1 = (function (state_28246){
while(true){
var ret_value__16452__auto__ = (function (){try{while(true){
var result__16453__auto__ = switch__16450__auto__.call(null,state_28246);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16453__auto__;
}
break;
}
}catch (e28261){if((e28261 instanceof Object)){
var ex__16454__auto__ = e28261;
var statearr_28262_28270 = state_28246;
(statearr_28262_28270[(5)] = ex__16454__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28246);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28261;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28271 = state_28246;
state_28246 = G__28271;
continue;
} else {
return ret_value__16452__auto__;
}
break;
}
});
state_machine__16451__auto__ = function(state_28246){
switch(arguments.length){
case 0:
return state_machine__16451__auto____0.call(this);
case 1:
return state_machine__16451__auto____1.call(this,state_28246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16451__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16451__auto____0;
state_machine__16451__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16451__auto____1;
return state_machine__16451__auto__;
})()
;})(switch__16450__auto__,c__16465__auto__))
})();
var state__16467__auto__ = (function (){var statearr_28263 = f__16466__auto__.call(null);
(statearr_28263[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16465__auto__);

return statearr_28263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16467__auto__);
});})(c__16465__auto__))
);

return c__16465__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){
return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__16465__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16465__auto__){
return (function (){
var f__16466__auto__ = (function (){var switch__16450__auto__ = ((function (c__16465__auto__){
return (function (state_28345){
var state_val_28346 = (state_28345[(1)]);
if((state_val_28346 === (7))){
var inst_28327 = (state_28345[(2)]);
var state_28345__$1 = state_28345;
var statearr_28347_28370 = state_28345__$1;
(statearr_28347_28370[(2)] = inst_28327);

(statearr_28347_28370[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28346 === (1))){
var inst_28321 = cljs.core.seq.call(null,coll);
var inst_28322 = inst_28321;
var state_28345__$1 = (function (){var statearr_28348 = state_28345;
(statearr_28348[(7)] = inst_28322);

return statearr_28348;
})();
var statearr_28349_28371 = state_28345__$1;
(statearr_28349_28371[(2)] = null);

(statearr_28349_28371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28346 === (4))){
var inst_28322 = (state_28345[(7)]);
var inst_28325 = cljs.core.first.call(null,inst_28322);
var state_28345__$1 = state_28345;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28345__$1,(7),ch,inst_28325);
} else {
if((state_val_28346 === (13))){
var inst_28339 = (state_28345[(2)]);
var state_28345__$1 = state_28345;
var statearr_28350_28372 = state_28345__$1;
(statearr_28350_28372[(2)] = inst_28339);

(statearr_28350_28372[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28346 === (6))){
var inst_28330 = (state_28345[(2)]);
var state_28345__$1 = state_28345;
if(cljs.core.truth_(inst_28330)){
var statearr_28351_28373 = state_28345__$1;
(statearr_28351_28373[(1)] = (8));

} else {
var statearr_28352_28374 = state_28345__$1;
(statearr_28352_28374[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28346 === (3))){
var inst_28343 = (state_28345[(2)]);
var state_28345__$1 = state_28345;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28345__$1,inst_28343);
} else {
if((state_val_28346 === (12))){
var state_28345__$1 = state_28345;
var statearr_28353_28375 = state_28345__$1;
(statearr_28353_28375[(2)] = null);

(statearr_28353_28375[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28346 === (2))){
var inst_28322 = (state_28345[(7)]);
var state_28345__$1 = state_28345;
if(cljs.core.truth_(inst_28322)){
var statearr_28354_28376 = state_28345__$1;
(statearr_28354_28376[(1)] = (4));

} else {
var statearr_28355_28377 = state_28345__$1;
(statearr_28355_28377[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28346 === (11))){
var inst_28336 = cljs.core.async.close_BANG_.call(null,ch);
var state_28345__$1 = state_28345;
var statearr_28356_28378 = state_28345__$1;
(statearr_28356_28378[(2)] = inst_28336);

(statearr_28356_28378[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28346 === (9))){
var state_28345__$1 = state_28345;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28357_28379 = state_28345__$1;
(statearr_28357_28379[(1)] = (11));

} else {
var statearr_28358_28380 = state_28345__$1;
(statearr_28358_28380[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28346 === (5))){
var inst_28322 = (state_28345[(7)]);
var state_28345__$1 = state_28345;
var statearr_28359_28381 = state_28345__$1;
(statearr_28359_28381[(2)] = inst_28322);

(statearr_28359_28381[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28346 === (10))){
var inst_28341 = (state_28345[(2)]);
var state_28345__$1 = state_28345;
var statearr_28360_28382 = state_28345__$1;
(statearr_28360_28382[(2)] = inst_28341);

(statearr_28360_28382[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28346 === (8))){
var inst_28322 = (state_28345[(7)]);
var inst_28332 = cljs.core.next.call(null,inst_28322);
var inst_28322__$1 = inst_28332;
var state_28345__$1 = (function (){var statearr_28361 = state_28345;
(statearr_28361[(7)] = inst_28322__$1);

return statearr_28361;
})();
var statearr_28362_28383 = state_28345__$1;
(statearr_28362_28383[(2)] = null);

(statearr_28362_28383[(1)] = (2));


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
});})(c__16465__auto__))
;
return ((function (switch__16450__auto__,c__16465__auto__){
return (function() {
var state_machine__16451__auto__ = null;
var state_machine__16451__auto____0 = (function (){
var statearr_28366 = [null,null,null,null,null,null,null,null];
(statearr_28366[(0)] = state_machine__16451__auto__);

(statearr_28366[(1)] = (1));

return statearr_28366;
});
var state_machine__16451__auto____1 = (function (state_28345){
while(true){
var ret_value__16452__auto__ = (function (){try{while(true){
var result__16453__auto__ = switch__16450__auto__.call(null,state_28345);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16453__auto__;
}
break;
}
}catch (e28367){if((e28367 instanceof Object)){
var ex__16454__auto__ = e28367;
var statearr_28368_28384 = state_28345;
(statearr_28368_28384[(5)] = ex__16454__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28345);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28367;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28385 = state_28345;
state_28345 = G__28385;
continue;
} else {
return ret_value__16452__auto__;
}
break;
}
});
state_machine__16451__auto__ = function(state_28345){
switch(arguments.length){
case 0:
return state_machine__16451__auto____0.call(this);
case 1:
return state_machine__16451__auto____1.call(this,state_28345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16451__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16451__auto____0;
state_machine__16451__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16451__auto____1;
return state_machine__16451__auto__;
})()
;})(switch__16450__auto__,c__16465__auto__))
})();
var state__16467__auto__ = (function (){var statearr_28369 = f__16466__auto__.call(null);
(statearr_28369[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16465__auto__);

return statearr_28369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16467__auto__);
});})(c__16465__auto__))
);

return c__16465__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj28387 = {};
return obj28387;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__12761__auto__ = _;
if(and__12761__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__12761__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__13417__auto__ = (((_ == null))?null:_);
return (function (){var or__12773__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__13417__auto__)]);
if(or__12773__auto__){
return or__12773__auto__;
} else {
var or__12773__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__12773__auto____$1){
return or__12773__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj28389 = {};
return obj28389;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__12761__auto__ = m;
if(and__12761__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__12761__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__13417__auto__ = (((m == null))?null:m);
return (function (){var or__12773__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__13417__auto__)]);
if(or__12773__auto__){
return or__12773__auto__;
} else {
var or__12773__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__12773__auto____$1){
return or__12773__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__12761__auto__ = m;
if(and__12761__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__12761__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__13417__auto__ = (((m == null))?null:m);
return (function (){var or__12773__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__13417__auto__)]);
if(or__12773__auto__){
return or__12773__auto__;
} else {
var or__12773__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__12773__auto____$1){
return or__12773__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__12761__auto__ = m;
if(and__12761__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__12761__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__13417__auto__ = (((m == null))?null:m);
return (function (){var or__12773__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__13417__auto__)]);
if(or__12773__auto__){
return or__12773__auto__;
} else {
var or__12773__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__12773__auto____$1){
return or__12773__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t28611 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t28611 = (function (cs,ch,mult,meta28612){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta28612 = meta28612;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28611.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t28611.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t28611.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t28611.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t28611.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t28611.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t28611.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28613){
var self__ = this;
var _28613__$1 = this;
return self__.meta28612;
});})(cs))
;

cljs.core.async.t28611.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28613,meta28612__$1){
var self__ = this;
var _28613__$1 = this;
return (new cljs.core.async.t28611(self__.cs,self__.ch,self__.mult,meta28612__$1));
});})(cs))
;

cljs.core.async.t28611.cljs$lang$type = true;

cljs.core.async.t28611.cljs$lang$ctorStr = "cljs.core.async/t28611";

cljs.core.async.t28611.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__13360__auto__,writer__13361__auto__,opt__13362__auto__){
return cljs.core._write.call(null,writer__13361__auto__,"cljs.core.async/t28611");
});})(cs))
;

cljs.core.async.__GT_t28611 = ((function (cs){
return (function __GT_t28611(cs__$1,ch__$1,mult__$1,meta28612){
return (new cljs.core.async.t28611(cs__$1,ch__$1,mult__$1,meta28612));
});})(cs))
;

}

return (new cljs.core.async.t28611(cs,ch,mult,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),397,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),390,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/gmp26/clojure/rum-datascript-prototype/resources/public/js/out/cljs/core/async.cljs"], null)));
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
var c__16465__auto___28832 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16465__auto___28832,cs,m,dchan,dctr,done){
return (function (){
var f__16466__auto__ = (function (){var switch__16450__auto__ = ((function (c__16465__auto___28832,cs,m,dchan,dctr,done){
return (function (state_28744){
var state_val_28745 = (state_28744[(1)]);
if((state_val_28745 === (7))){
var inst_28740 = (state_28744[(2)]);
var state_28744__$1 = state_28744;
var statearr_28746_28833 = state_28744__$1;
(statearr_28746_28833[(2)] = inst_28740);

(statearr_28746_28833[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28745 === (20))){
var inst_28645 = (state_28744[(7)]);
var inst_28655 = cljs.core.first.call(null,inst_28645);
var inst_28656 = cljs.core.nth.call(null,inst_28655,(0),null);
var inst_28657 = cljs.core.nth.call(null,inst_28655,(1),null);
var state_28744__$1 = (function (){var statearr_28747 = state_28744;
(statearr_28747[(8)] = inst_28656);

return statearr_28747;
})();
if(cljs.core.truth_(inst_28657)){
var statearr_28748_28834 = state_28744__$1;
(statearr_28748_28834[(1)] = (22));

} else {
var statearr_28749_28835 = state_28744__$1;
(statearr_28749_28835[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28745 === (27))){
var inst_28616 = (state_28744[(9)]);
var inst_28687 = (state_28744[(10)]);
var inst_28692 = (state_28744[(11)]);
var inst_28685 = (state_28744[(12)]);
var inst_28692__$1 = cljs.core._nth.call(null,inst_28685,inst_28687);
var inst_28693 = cljs.core.async.put_BANG_.call(null,inst_28692__$1,inst_28616,done);
var state_28744__$1 = (function (){var statearr_28750 = state_28744;
(statearr_28750[(11)] = inst_28692__$1);

return statearr_28750;
})();
if(cljs.core.truth_(inst_28693)){
var statearr_28751_28836 = state_28744__$1;
(statearr_28751_28836[(1)] = (30));

} else {
var statearr_28752_28837 = state_28744__$1;
(statearr_28752_28837[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28745 === (1))){
var state_28744__$1 = state_28744;
var statearr_28753_28838 = state_28744__$1;
(statearr_28753_28838[(2)] = null);

(statearr_28753_28838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28745 === (24))){
var inst_28645 = (state_28744[(7)]);
var inst_28662 = (state_28744[(2)]);
var inst_28663 = cljs.core.next.call(null,inst_28645);
var inst_28625 = inst_28663;
var inst_28626 = null;
var inst_28627 = (0);
var inst_28628 = (0);
var state_28744__$1 = (function (){var statearr_28754 = state_28744;
(statearr_28754[(13)] = inst_28662);

(statearr_28754[(14)] = inst_28628);

(statearr_28754[(15)] = inst_28626);

(statearr_28754[(16)] = inst_28625);

(statearr_28754[(17)] = inst_28627);

return statearr_28754;
})();
var statearr_28755_28839 = state_28744__$1;
(statearr_28755_28839[(2)] = null);

(statearr_28755_28839[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28745 === (39))){
var state_28744__$1 = state_28744;
var statearr_28759_28840 = state_28744__$1;
(statearr_28759_28840[(2)] = null);

(statearr_28759_28840[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28745 === (4))){
var inst_28616 = (state_28744[(9)]);
var inst_28616__$1 = (state_28744[(2)]);
var inst_28617 = (inst_28616__$1 == null);
var state_28744__$1 = (function (){var statearr_28760 = state_28744;
(statearr_28760[(9)] = inst_28616__$1);

return statearr_28760;
})();
if(cljs.core.truth_(inst_28617)){
var statearr_28761_28841 = state_28744__$1;
(statearr_28761_28841[(1)] = (5));

} else {
var statearr_28762_28842 = state_28744__$1;
(statearr_28762_28842[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28745 === (15))){
var inst_28628 = (state_28744[(14)]);
var inst_28626 = (state_28744[(15)]);
var inst_28625 = (state_28744[(16)]);
var inst_28627 = (state_28744[(17)]);
var inst_28641 = (state_28744[(2)]);
var inst_28642 = (inst_28628 + (1));
var tmp28756 = inst_28626;
var tmp28757 = inst_28625;
var tmp28758 = inst_28627;
var inst_28625__$1 = tmp28757;
var inst_28626__$1 = tmp28756;
var inst_28627__$1 = tmp28758;
var inst_28628__$1 = inst_28642;
var state_28744__$1 = (function (){var statearr_28763 = state_28744;
(statearr_28763[(14)] = inst_28628__$1);

(statearr_28763[(15)] = inst_28626__$1);

(statearr_28763[(16)] = inst_28625__$1);

(statearr_28763[(17)] = inst_28627__$1);

(statearr_28763[(18)] = inst_28641);

return statearr_28763;
})();
var statearr_28764_28843 = state_28744__$1;
(statearr_28764_28843[(2)] = null);

(statearr_28764_28843[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28745 === (21))){
var inst_28666 = (state_28744[(2)]);
var state_28744__$1 = state_28744;
var statearr_28768_28844 = state_28744__$1;
(statearr_28768_28844[(2)] = inst_28666);

(statearr_28768_28844[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28745 === (31))){
var inst_28692 = (state_28744[(11)]);
var inst_28696 = done.call(null,null);
var inst_28697 = cljs.core.async.untap_STAR_.call(null,m,inst_28692);
var state_28744__$1 = (function (){var statearr_28769 = state_28744;
(statearr_28769[(19)] = inst_28696);

return statearr_28769;
})();
var statearr_28770_28845 = state_28744__$1;
(statearr_28770_28845[(2)] = inst_28697);

(statearr_28770_28845[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28745 === (32))){
var inst_28686 = (state_28744[(20)]);
var inst_28687 = (state_28744[(10)]);
var inst_28685 = (state_28744[(12)]);
var inst_28684 = (state_28744[(21)]);
var inst_28699 = (state_28744[(2)]);
var inst_28700 = (inst_28687 + (1));
var tmp28765 = inst_28686;
var tmp28766 = inst_28685;
var tmp28767 = inst_28684;
var inst_28684__$1 = tmp28767;
var inst_28685__$1 = tmp28766;
var inst_28686__$1 = tmp28765;
var inst_28687__$1 = inst_28700;
var state_28744__$1 = (function (){var statearr_28771 = state_28744;
(statearr_28771[(22)] = inst_28699);

(statearr_28771[(20)] = inst_28686__$1);

(statearr_28771[(10)] = inst_28687__$1);

(statearr_28771[(12)] = inst_28685__$1);

(statearr_28771[(21)] = inst_28684__$1);

return statearr_28771;
})();
var statearr_28772_28846 = state_28744__$1;
(statearr_28772_28846[(2)] = null);

(statearr_28772_28846[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28745 === (40))){
var inst_28712 = (state_28744[(23)]);
var inst_28716 = done.call(null,null);
var inst_28717 = cljs.core.async.untap_STAR_.call(null,m,inst_28712);
var state_28744__$1 = (function (){var statearr_28773 = state_28744;
(statearr_28773[(24)] = inst_28716);

return statearr_28773;
})();
var statearr_28774_28847 = state_28744__$1;
(statearr_28774_28847[(2)] = inst_28717);

(statearr_28774_28847[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28745 === (33))){
var inst_28703 = (state_28744[(25)]);
var inst_28705 = cljs.core.chunked_seq_QMARK_.call(null,inst_28703);
var state_28744__$1 = state_28744;
if(inst_28705){
var statearr_28775_28848 = state_28744__$1;
(statearr_28775_28848[(1)] = (36));

} else {
var statearr_28776_28849 = state_28744__$1;
(statearr_28776_28849[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28745 === (13))){
var inst_28635 = (state_28744[(26)]);
var inst_28638 = cljs.core.async.close_BANG_.call(null,inst_28635);
var state_28744__$1 = state_28744;
var statearr_28777_28850 = state_28744__$1;
(statearr_28777_28850[(2)] = inst_28638);

(statearr_28777_28850[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28745 === (22))){
var inst_28656 = (state_28744[(8)]);
var inst_28659 = cljs.core.async.close_BANG_.call(null,inst_28656);
var state_28744__$1 = state_28744;
var statearr_28778_28851 = state_28744__$1;
(statearr_28778_28851[(2)] = inst_28659);

(statearr_28778_28851[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28745 === (36))){
var inst_28703 = (state_28744[(25)]);
var inst_28707 = cljs.core.chunk_first.call(null,inst_28703);
var inst_28708 = cljs.core.chunk_rest.call(null,inst_28703);
var inst_28709 = cljs.core.count.call(null,inst_28707);
var inst_28684 = inst_28708;
var inst_28685 = inst_28707;
var inst_28686 = inst_28709;
var inst_28687 = (0);
var state_28744__$1 = (function (){var statearr_28779 = state_28744;
(statearr_28779[(20)] = inst_28686);

(statearr_28779[(10)] = inst_28687);

(statearr_28779[(12)] = inst_28685);

(statearr_28779[(21)] = inst_28684);

return statearr_28779;
})();
var statearr_28780_28852 = state_28744__$1;
(statearr_28780_28852[(2)] = null);

(statearr_28780_28852[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28745 === (41))){
var inst_28703 = (state_28744[(25)]);
var inst_28719 = (state_28744[(2)]);
var inst_28720 = cljs.core.next.call(null,inst_28703);
var inst_28684 = inst_28720;
var inst_28685 = null;
var inst_28686 = (0);
var inst_28687 = (0);
var state_28744__$1 = (function (){var statearr_28781 = state_28744;
(statearr_28781[(20)] = inst_28686);

(statearr_28781[(10)] = inst_28687);

(statearr_28781[(27)] = inst_28719);

(statearr_28781[(12)] = inst_28685);

(statearr_28781[(21)] = inst_28684);

return statearr_28781;
})();
var statearr_28782_28853 = state_28744__$1;
(statearr_28782_28853[(2)] = null);

(statearr_28782_28853[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28745 === (43))){
var state_28744__$1 = state_28744;
var statearr_28783_28854 = state_28744__$1;
(statearr_28783_28854[(2)] = null);

(statearr_28783_28854[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28745 === (29))){
var inst_28728 = (state_28744[(2)]);
var state_28744__$1 = state_28744;
var statearr_28784_28855 = state_28744__$1;
(statearr_28784_28855[(2)] = inst_28728);

(statearr_28784_28855[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28745 === (44))){
var inst_28737 = (state_28744[(2)]);
var state_28744__$1 = (function (){var statearr_28785 = state_28744;
(statearr_28785[(28)] = inst_28737);

return statearr_28785;
})();
var statearr_28786_28856 = state_28744__$1;
(statearr_28786_28856[(2)] = null);

(statearr_28786_28856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28745 === (6))){
var inst_28676 = (state_28744[(29)]);
var inst_28675 = cljs.core.deref.call(null,cs);
var inst_28676__$1 = cljs.core.keys.call(null,inst_28675);
var inst_28677 = cljs.core.count.call(null,inst_28676__$1);
var inst_28678 = cljs.core.reset_BANG_.call(null,dctr,inst_28677);
var inst_28683 = cljs.core.seq.call(null,inst_28676__$1);
var inst_28684 = inst_28683;
var inst_28685 = null;
var inst_28686 = (0);
var inst_28687 = (0);
var state_28744__$1 = (function (){var statearr_28787 = state_28744;
(statearr_28787[(20)] = inst_28686);

(statearr_28787[(30)] = inst_28678);

(statearr_28787[(10)] = inst_28687);

(statearr_28787[(12)] = inst_28685);

(statearr_28787[(21)] = inst_28684);

(statearr_28787[(29)] = inst_28676__$1);

return statearr_28787;
})();
var statearr_28788_28857 = state_28744__$1;
(statearr_28788_28857[(2)] = null);

(statearr_28788_28857[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28745 === (28))){
var inst_28703 = (state_28744[(25)]);
var inst_28684 = (state_28744[(21)]);
var inst_28703__$1 = cljs.core.seq.call(null,inst_28684);
var state_28744__$1 = (function (){var statearr_28789 = state_28744;
(statearr_28789[(25)] = inst_28703__$1);

return statearr_28789;
})();
if(inst_28703__$1){
var statearr_28790_28858 = state_28744__$1;
(statearr_28790_28858[(1)] = (33));

} else {
var statearr_28791_28859 = state_28744__$1;
(statearr_28791_28859[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28745 === (25))){
var inst_28686 = (state_28744[(20)]);
var inst_28687 = (state_28744[(10)]);
var inst_28689 = (inst_28687 < inst_28686);
var inst_28690 = inst_28689;
var state_28744__$1 = state_28744;
if(cljs.core.truth_(inst_28690)){
var statearr_28792_28860 = state_28744__$1;
(statearr_28792_28860[(1)] = (27));

} else {
var statearr_28793_28861 = state_28744__$1;
(statearr_28793_28861[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28745 === (34))){
var state_28744__$1 = state_28744;
var statearr_28794_28862 = state_28744__$1;
(statearr_28794_28862[(2)] = null);

(statearr_28794_28862[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28745 === (17))){
var state_28744__$1 = state_28744;
var statearr_28795_28863 = state_28744__$1;
(statearr_28795_28863[(2)] = null);

(statearr_28795_28863[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28745 === (3))){
var inst_28742 = (state_28744[(2)]);
var state_28744__$1 = state_28744;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28744__$1,inst_28742);
} else {
if((state_val_28745 === (12))){
var inst_28671 = (state_28744[(2)]);
var state_28744__$1 = state_28744;
var statearr_28796_28864 = state_28744__$1;
(statearr_28796_28864[(2)] = inst_28671);

(statearr_28796_28864[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28745 === (2))){
var state_28744__$1 = state_28744;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28744__$1,(4),ch);
} else {
if((state_val_28745 === (23))){
var state_28744__$1 = state_28744;
var statearr_28797_28865 = state_28744__$1;
(statearr_28797_28865[(2)] = null);

(statearr_28797_28865[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28745 === (35))){
var inst_28726 = (state_28744[(2)]);
var state_28744__$1 = state_28744;
var statearr_28798_28866 = state_28744__$1;
(statearr_28798_28866[(2)] = inst_28726);

(statearr_28798_28866[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28745 === (19))){
var inst_28645 = (state_28744[(7)]);
var inst_28649 = cljs.core.chunk_first.call(null,inst_28645);
var inst_28650 = cljs.core.chunk_rest.call(null,inst_28645);
var inst_28651 = cljs.core.count.call(null,inst_28649);
var inst_28625 = inst_28650;
var inst_28626 = inst_28649;
var inst_28627 = inst_28651;
var inst_28628 = (0);
var state_28744__$1 = (function (){var statearr_28799 = state_28744;
(statearr_28799[(14)] = inst_28628);

(statearr_28799[(15)] = inst_28626);

(statearr_28799[(16)] = inst_28625);

(statearr_28799[(17)] = inst_28627);

return statearr_28799;
})();
var statearr_28800_28867 = state_28744__$1;
(statearr_28800_28867[(2)] = null);

(statearr_28800_28867[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28745 === (11))){
var inst_28625 = (state_28744[(16)]);
var inst_28645 = (state_28744[(7)]);
var inst_28645__$1 = cljs.core.seq.call(null,inst_28625);
var state_28744__$1 = (function (){var statearr_28801 = state_28744;
(statearr_28801[(7)] = inst_28645__$1);

return statearr_28801;
})();
if(inst_28645__$1){
var statearr_28802_28868 = state_28744__$1;
(statearr_28802_28868[(1)] = (16));

} else {
var statearr_28803_28869 = state_28744__$1;
(statearr_28803_28869[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28745 === (9))){
var inst_28673 = (state_28744[(2)]);
var state_28744__$1 = state_28744;
var statearr_28804_28870 = state_28744__$1;
(statearr_28804_28870[(2)] = inst_28673);

(statearr_28804_28870[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28745 === (5))){
var inst_28623 = cljs.core.deref.call(null,cs);
var inst_28624 = cljs.core.seq.call(null,inst_28623);
var inst_28625 = inst_28624;
var inst_28626 = null;
var inst_28627 = (0);
var inst_28628 = (0);
var state_28744__$1 = (function (){var statearr_28805 = state_28744;
(statearr_28805[(14)] = inst_28628);

(statearr_28805[(15)] = inst_28626);

(statearr_28805[(16)] = inst_28625);

(statearr_28805[(17)] = inst_28627);

return statearr_28805;
})();
var statearr_28806_28871 = state_28744__$1;
(statearr_28806_28871[(2)] = null);

(statearr_28806_28871[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28745 === (14))){
var state_28744__$1 = state_28744;
var statearr_28807_28872 = state_28744__$1;
(statearr_28807_28872[(2)] = null);

(statearr_28807_28872[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28745 === (45))){
var inst_28734 = (state_28744[(2)]);
var state_28744__$1 = state_28744;
var statearr_28808_28873 = state_28744__$1;
(statearr_28808_28873[(2)] = inst_28734);

(statearr_28808_28873[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28745 === (26))){
var inst_28676 = (state_28744[(29)]);
var inst_28730 = (state_28744[(2)]);
var inst_28731 = cljs.core.seq.call(null,inst_28676);
var state_28744__$1 = (function (){var statearr_28809 = state_28744;
(statearr_28809[(31)] = inst_28730);

return statearr_28809;
})();
if(inst_28731){
var statearr_28810_28874 = state_28744__$1;
(statearr_28810_28874[(1)] = (42));

} else {
var statearr_28811_28875 = state_28744__$1;
(statearr_28811_28875[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28745 === (16))){
var inst_28645 = (state_28744[(7)]);
var inst_28647 = cljs.core.chunked_seq_QMARK_.call(null,inst_28645);
var state_28744__$1 = state_28744;
if(inst_28647){
var statearr_28812_28876 = state_28744__$1;
(statearr_28812_28876[(1)] = (19));

} else {
var statearr_28813_28877 = state_28744__$1;
(statearr_28813_28877[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28745 === (38))){
var inst_28723 = (state_28744[(2)]);
var state_28744__$1 = state_28744;
var statearr_28814_28878 = state_28744__$1;
(statearr_28814_28878[(2)] = inst_28723);

(statearr_28814_28878[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28745 === (30))){
var state_28744__$1 = state_28744;
var statearr_28815_28879 = state_28744__$1;
(statearr_28815_28879[(2)] = null);

(statearr_28815_28879[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28745 === (10))){
var inst_28628 = (state_28744[(14)]);
var inst_28626 = (state_28744[(15)]);
var inst_28634 = cljs.core._nth.call(null,inst_28626,inst_28628);
var inst_28635 = cljs.core.nth.call(null,inst_28634,(0),null);
var inst_28636 = cljs.core.nth.call(null,inst_28634,(1),null);
var state_28744__$1 = (function (){var statearr_28816 = state_28744;
(statearr_28816[(26)] = inst_28635);

return statearr_28816;
})();
if(cljs.core.truth_(inst_28636)){
var statearr_28817_28880 = state_28744__$1;
(statearr_28817_28880[(1)] = (13));

} else {
var statearr_28818_28881 = state_28744__$1;
(statearr_28818_28881[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28745 === (18))){
var inst_28669 = (state_28744[(2)]);
var state_28744__$1 = state_28744;
var statearr_28819_28882 = state_28744__$1;
(statearr_28819_28882[(2)] = inst_28669);

(statearr_28819_28882[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28745 === (42))){
var state_28744__$1 = state_28744;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28744__$1,(45),dchan);
} else {
if((state_val_28745 === (37))){
var inst_28616 = (state_28744[(9)]);
var inst_28703 = (state_28744[(25)]);
var inst_28712 = (state_28744[(23)]);
var inst_28712__$1 = cljs.core.first.call(null,inst_28703);
var inst_28713 = cljs.core.async.put_BANG_.call(null,inst_28712__$1,inst_28616,done);
var state_28744__$1 = (function (){var statearr_28820 = state_28744;
(statearr_28820[(23)] = inst_28712__$1);

return statearr_28820;
})();
if(cljs.core.truth_(inst_28713)){
var statearr_28821_28883 = state_28744__$1;
(statearr_28821_28883[(1)] = (39));

} else {
var statearr_28822_28884 = state_28744__$1;
(statearr_28822_28884[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28745 === (8))){
var inst_28628 = (state_28744[(14)]);
var inst_28627 = (state_28744[(17)]);
var inst_28630 = (inst_28628 < inst_28627);
var inst_28631 = inst_28630;
var state_28744__$1 = state_28744;
if(cljs.core.truth_(inst_28631)){
var statearr_28823_28885 = state_28744__$1;
(statearr_28823_28885[(1)] = (10));

} else {
var statearr_28824_28886 = state_28744__$1;
(statearr_28824_28886[(1)] = (11));

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
});})(c__16465__auto___28832,cs,m,dchan,dctr,done))
;
return ((function (switch__16450__auto__,c__16465__auto___28832,cs,m,dchan,dctr,done){
return (function() {
var state_machine__16451__auto__ = null;
var state_machine__16451__auto____0 = (function (){
var statearr_28828 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28828[(0)] = state_machine__16451__auto__);

(statearr_28828[(1)] = (1));

return statearr_28828;
});
var state_machine__16451__auto____1 = (function (state_28744){
while(true){
var ret_value__16452__auto__ = (function (){try{while(true){
var result__16453__auto__ = switch__16450__auto__.call(null,state_28744);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16453__auto__;
}
break;
}
}catch (e28829){if((e28829 instanceof Object)){
var ex__16454__auto__ = e28829;
var statearr_28830_28887 = state_28744;
(statearr_28830_28887[(5)] = ex__16454__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28744);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28829;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28888 = state_28744;
state_28744 = G__28888;
continue;
} else {
return ret_value__16452__auto__;
}
break;
}
});
state_machine__16451__auto__ = function(state_28744){
switch(arguments.length){
case 0:
return state_machine__16451__auto____0.call(this);
case 1:
return state_machine__16451__auto____1.call(this,state_28744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16451__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16451__auto____0;
state_machine__16451__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16451__auto____1;
return state_machine__16451__auto__;
})()
;})(switch__16450__auto__,c__16465__auto___28832,cs,m,dchan,dctr,done))
})();
var state__16467__auto__ = (function (){var statearr_28831 = f__16466__auto__.call(null);
(statearr_28831[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16465__auto___28832);

return statearr_28831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16467__auto__);
});})(c__16465__auto___28832,cs,m,dchan,dctr,done))
);


return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){
return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj28890 = {};
return obj28890;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__12761__auto__ = m;
if(and__12761__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__12761__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__13417__auto__ = (((m == null))?null:m);
return (function (){var or__12773__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__13417__auto__)]);
if(or__12773__auto__){
return or__12773__auto__;
} else {
var or__12773__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__12773__auto____$1){
return or__12773__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__12761__auto__ = m;
if(and__12761__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__12761__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__13417__auto__ = (((m == null))?null:m);
return (function (){var or__12773__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__13417__auto__)]);
if(or__12773__auto__){
return or__12773__auto__;
} else {
var or__12773__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__12773__auto____$1){
return or__12773__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__12761__auto__ = m;
if(and__12761__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__12761__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__13417__auto__ = (((m == null))?null:m);
return (function (){var or__12773__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__13417__auto__)]);
if(or__12773__auto__){
return or__12773__auto__;
} else {
var or__12773__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__12773__auto____$1){
return or__12773__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__12761__auto__ = m;
if(and__12761__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__12761__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__13417__auto__ = (((m == null))?null:m);
return (function (){var or__12773__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__13417__auto__)]);
if(or__12773__auto__){
return or__12773__auto__;
} else {
var or__12773__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__12773__auto____$1){
return or__12773__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__12761__auto__ = m;
if(and__12761__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__12761__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__13417__auto__ = (((m == null))?null:m);
return (function (){var or__12773__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__13417__auto__)]);
if(or__12773__auto__){
return or__12773__auto__;
} else {
var or__12773__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__12773__auto____$1){
return or__12773__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__28891){
var map__28896 = p__28891;
var map__28896__$1 = ((cljs.core.seq_QMARK_.call(null,map__28896))?cljs.core.apply.call(null,cljs.core.hash_map,map__28896):map__28896);
var opts = map__28896__$1;
var statearr_28897_28900 = state;
(statearr_28897_28900[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__28896,map__28896__$1,opts){
return (function (val){
var statearr_28898_28901 = state;
(statearr_28898_28901[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28896,map__28896__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_28899_28902 = state;
(statearr_28899_28902[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__28891 = null;
if (arguments.length > 3) {
var G__28903__i = 0, G__28903__a = new Array(arguments.length -  3);
while (G__28903__i < G__28903__a.length) {G__28903__a[G__28903__i] = arguments[G__28903__i + 3]; ++G__28903__i;}
  p__28891 = new cljs.core.IndexedSeq(G__28903__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__28891);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__28904){
var state = cljs.core.first(arglist__28904);
arglist__28904 = cljs.core.next(arglist__28904);
var cont_block = cljs.core.first(arglist__28904);
arglist__28904 = cljs.core.next(arglist__28904);
var ports = cljs.core.first(arglist__28904);
var p__28891 = cljs.core.rest(arglist__28904);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__28891);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){
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
if(typeof cljs.core.async.t29024 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29024 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29025){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta29025 = meta29025;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29024.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t29024.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29024.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29024.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29024.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29024.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29024.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t29024.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29024.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29026){
var self__ = this;
var _29026__$1 = this;
return self__.meta29025;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29024.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29026,meta29025__$1){
var self__ = this;
var _29026__$1 = this;
return (new cljs.core.async.t29024(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29025__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t29024.cljs$lang$type = true;

cljs.core.async.t29024.cljs$lang$ctorStr = "cljs.core.async/t29024";

cljs.core.async.t29024.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__13360__auto__,writer__13361__auto__,opt__13362__auto__){
return cljs.core._write.call(null,writer__13361__auto__,"cljs.core.async/t29024");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t29024 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t29024(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29025){
return (new cljs.core.async.t29024(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29025));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t29024(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),25,new cljs.core.Keyword(null,"end-line","end-line",1837326455),510,new cljs.core.Keyword(null,"column","column",2078222095),11,new cljs.core.Keyword(null,"line","line",212345235),499,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/gmp26/clojure/rum-datascript-prototype/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__16465__auto___29143 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16465__auto___29143,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__16466__auto__ = (function (){var switch__16450__auto__ = ((function (c__16465__auto___29143,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29096){
var state_val_29097 = (state_29096[(1)]);
if((state_val_29097 === (7))){
var inst_29040 = (state_29096[(7)]);
var inst_29045 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29040);
var state_29096__$1 = state_29096;
var statearr_29098_29144 = state_29096__$1;
(statearr_29098_29144[(2)] = inst_29045);

(statearr_29098_29144[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29097 === (20))){
var inst_29055 = (state_29096[(8)]);
var state_29096__$1 = state_29096;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29096__$1,(23),out,inst_29055);
} else {
if((state_val_29097 === (1))){
var inst_29030 = (state_29096[(9)]);
var inst_29030__$1 = calc_state.call(null);
var inst_29031 = cljs.core.seq_QMARK_.call(null,inst_29030__$1);
var state_29096__$1 = (function (){var statearr_29099 = state_29096;
(statearr_29099[(9)] = inst_29030__$1);

return statearr_29099;
})();
if(inst_29031){
var statearr_29100_29145 = state_29096__$1;
(statearr_29100_29145[(1)] = (2));

} else {
var statearr_29101_29146 = state_29096__$1;
(statearr_29101_29146[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29097 === (24))){
var inst_29048 = (state_29096[(10)]);
var inst_29040 = inst_29048;
var state_29096__$1 = (function (){var statearr_29102 = state_29096;
(statearr_29102[(7)] = inst_29040);

return statearr_29102;
})();
var statearr_29103_29147 = state_29096__$1;
(statearr_29103_29147[(2)] = null);

(statearr_29103_29147[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29097 === (4))){
var inst_29030 = (state_29096[(9)]);
var inst_29036 = (state_29096[(2)]);
var inst_29037 = cljs.core.get.call(null,inst_29036,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29038 = cljs.core.get.call(null,inst_29036,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29039 = cljs.core.get.call(null,inst_29036,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29040 = inst_29030;
var state_29096__$1 = (function (){var statearr_29104 = state_29096;
(statearr_29104[(11)] = inst_29037);

(statearr_29104[(12)] = inst_29039);

(statearr_29104[(7)] = inst_29040);

(statearr_29104[(13)] = inst_29038);

return statearr_29104;
})();
var statearr_29105_29148 = state_29096__$1;
(statearr_29105_29148[(2)] = null);

(statearr_29105_29148[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29097 === (15))){
var state_29096__$1 = state_29096;
var statearr_29106_29149 = state_29096__$1;
(statearr_29106_29149[(2)] = null);

(statearr_29106_29149[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29097 === (21))){
var inst_29048 = (state_29096[(10)]);
var inst_29040 = inst_29048;
var state_29096__$1 = (function (){var statearr_29107 = state_29096;
(statearr_29107[(7)] = inst_29040);

return statearr_29107;
})();
var statearr_29108_29150 = state_29096__$1;
(statearr_29108_29150[(2)] = null);

(statearr_29108_29150[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29097 === (13))){
var inst_29092 = (state_29096[(2)]);
var state_29096__$1 = state_29096;
var statearr_29109_29151 = state_29096__$1;
(statearr_29109_29151[(2)] = inst_29092);

(statearr_29109_29151[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29097 === (22))){
var inst_29090 = (state_29096[(2)]);
var state_29096__$1 = state_29096;
var statearr_29110_29152 = state_29096__$1;
(statearr_29110_29152[(2)] = inst_29090);

(statearr_29110_29152[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29097 === (6))){
var inst_29094 = (state_29096[(2)]);
var state_29096__$1 = state_29096;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29096__$1,inst_29094);
} else {
if((state_val_29097 === (25))){
var state_29096__$1 = state_29096;
var statearr_29111_29153 = state_29096__$1;
(statearr_29111_29153[(2)] = null);

(statearr_29111_29153[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29097 === (17))){
var inst_29070 = (state_29096[(14)]);
var state_29096__$1 = state_29096;
var statearr_29112_29154 = state_29096__$1;
(statearr_29112_29154[(2)] = inst_29070);

(statearr_29112_29154[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29097 === (3))){
var inst_29030 = (state_29096[(9)]);
var state_29096__$1 = state_29096;
var statearr_29113_29155 = state_29096__$1;
(statearr_29113_29155[(2)] = inst_29030);

(statearr_29113_29155[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29097 === (12))){
var inst_29051 = (state_29096[(15)]);
var inst_29070 = (state_29096[(14)]);
var inst_29056 = (state_29096[(16)]);
var inst_29070__$1 = inst_29051.call(null,inst_29056);
var state_29096__$1 = (function (){var statearr_29114 = state_29096;
(statearr_29114[(14)] = inst_29070__$1);

return statearr_29114;
})();
if(cljs.core.truth_(inst_29070__$1)){
var statearr_29115_29156 = state_29096__$1;
(statearr_29115_29156[(1)] = (17));

} else {
var statearr_29116_29157 = state_29096__$1;
(statearr_29116_29157[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29097 === (2))){
var inst_29030 = (state_29096[(9)]);
var inst_29033 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29030);
var state_29096__$1 = state_29096;
var statearr_29117_29158 = state_29096__$1;
(statearr_29117_29158[(2)] = inst_29033);

(statearr_29117_29158[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29097 === (23))){
var inst_29081 = (state_29096[(2)]);
var state_29096__$1 = state_29096;
if(cljs.core.truth_(inst_29081)){
var statearr_29118_29159 = state_29096__$1;
(statearr_29118_29159[(1)] = (24));

} else {
var statearr_29119_29160 = state_29096__$1;
(statearr_29119_29160[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29097 === (19))){
var inst_29078 = (state_29096[(2)]);
var state_29096__$1 = state_29096;
if(cljs.core.truth_(inst_29078)){
var statearr_29120_29161 = state_29096__$1;
(statearr_29120_29161[(1)] = (20));

} else {
var statearr_29121_29162 = state_29096__$1;
(statearr_29121_29162[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29097 === (11))){
var inst_29055 = (state_29096[(8)]);
var inst_29061 = (inst_29055 == null);
var state_29096__$1 = state_29096;
if(cljs.core.truth_(inst_29061)){
var statearr_29122_29163 = state_29096__$1;
(statearr_29122_29163[(1)] = (14));

} else {
var statearr_29123_29164 = state_29096__$1;
(statearr_29123_29164[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29097 === (9))){
var inst_29048 = (state_29096[(10)]);
var inst_29048__$1 = (state_29096[(2)]);
var inst_29049 = cljs.core.get.call(null,inst_29048__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29050 = cljs.core.get.call(null,inst_29048__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29051 = cljs.core.get.call(null,inst_29048__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_29096__$1 = (function (){var statearr_29124 = state_29096;
(statearr_29124[(15)] = inst_29051);

(statearr_29124[(10)] = inst_29048__$1);

(statearr_29124[(17)] = inst_29050);

return statearr_29124;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29096__$1,(10),inst_29049);
} else {
if((state_val_29097 === (5))){
var inst_29040 = (state_29096[(7)]);
var inst_29043 = cljs.core.seq_QMARK_.call(null,inst_29040);
var state_29096__$1 = state_29096;
if(inst_29043){
var statearr_29125_29165 = state_29096__$1;
(statearr_29125_29165[(1)] = (7));

} else {
var statearr_29126_29166 = state_29096__$1;
(statearr_29126_29166[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29097 === (14))){
var inst_29056 = (state_29096[(16)]);
var inst_29063 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29056);
var state_29096__$1 = state_29096;
var statearr_29127_29167 = state_29096__$1;
(statearr_29127_29167[(2)] = inst_29063);

(statearr_29127_29167[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29097 === (26))){
var inst_29086 = (state_29096[(2)]);
var state_29096__$1 = state_29096;
var statearr_29128_29168 = state_29096__$1;
(statearr_29128_29168[(2)] = inst_29086);

(statearr_29128_29168[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29097 === (16))){
var inst_29066 = (state_29096[(2)]);
var inst_29067 = calc_state.call(null);
var inst_29040 = inst_29067;
var state_29096__$1 = (function (){var statearr_29129 = state_29096;
(statearr_29129[(7)] = inst_29040);

(statearr_29129[(18)] = inst_29066);

return statearr_29129;
})();
var statearr_29130_29169 = state_29096__$1;
(statearr_29130_29169[(2)] = null);

(statearr_29130_29169[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29097 === (10))){
var inst_29056 = (state_29096[(16)]);
var inst_29055 = (state_29096[(8)]);
var inst_29054 = (state_29096[(2)]);
var inst_29055__$1 = cljs.core.nth.call(null,inst_29054,(0),null);
var inst_29056__$1 = cljs.core.nth.call(null,inst_29054,(1),null);
var inst_29057 = (inst_29055__$1 == null);
var inst_29058 = cljs.core._EQ_.call(null,inst_29056__$1,change);
var inst_29059 = (inst_29057) || (inst_29058);
var state_29096__$1 = (function (){var statearr_29131 = state_29096;
(statearr_29131[(16)] = inst_29056__$1);

(statearr_29131[(8)] = inst_29055__$1);

return statearr_29131;
})();
if(cljs.core.truth_(inst_29059)){
var statearr_29132_29170 = state_29096__$1;
(statearr_29132_29170[(1)] = (11));

} else {
var statearr_29133_29171 = state_29096__$1;
(statearr_29133_29171[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29097 === (18))){
var inst_29051 = (state_29096[(15)]);
var inst_29056 = (state_29096[(16)]);
var inst_29050 = (state_29096[(17)]);
var inst_29073 = cljs.core.empty_QMARK_.call(null,inst_29051);
var inst_29074 = inst_29050.call(null,inst_29056);
var inst_29075 = cljs.core.not.call(null,inst_29074);
var inst_29076 = (inst_29073) && (inst_29075);
var state_29096__$1 = state_29096;
var statearr_29134_29172 = state_29096__$1;
(statearr_29134_29172[(2)] = inst_29076);

(statearr_29134_29172[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29097 === (8))){
var inst_29040 = (state_29096[(7)]);
var state_29096__$1 = state_29096;
var statearr_29135_29173 = state_29096__$1;
(statearr_29135_29173[(2)] = inst_29040);

(statearr_29135_29173[(1)] = (9));


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
});})(c__16465__auto___29143,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__16450__auto__,c__16465__auto___29143,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__16451__auto__ = null;
var state_machine__16451__auto____0 = (function (){
var statearr_29139 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29139[(0)] = state_machine__16451__auto__);

(statearr_29139[(1)] = (1));

return statearr_29139;
});
var state_machine__16451__auto____1 = (function (state_29096){
while(true){
var ret_value__16452__auto__ = (function (){try{while(true){
var result__16453__auto__ = switch__16450__auto__.call(null,state_29096);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16453__auto__;
}
break;
}
}catch (e29140){if((e29140 instanceof Object)){
var ex__16454__auto__ = e29140;
var statearr_29141_29174 = state_29096;
(statearr_29141_29174[(5)] = ex__16454__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29096);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29140;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29175 = state_29096;
state_29096 = G__29175;
continue;
} else {
return ret_value__16452__auto__;
}
break;
}
});
state_machine__16451__auto__ = function(state_29096){
switch(arguments.length){
case 0:
return state_machine__16451__auto____0.call(this);
case 1:
return state_machine__16451__auto____1.call(this,state_29096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16451__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16451__auto____0;
state_machine__16451__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16451__auto____1;
return state_machine__16451__auto__;
})()
;})(switch__16450__auto__,c__16465__auto___29143,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__16467__auto__ = (function (){var statearr_29142 = f__16466__auto__.call(null);
(statearr_29142[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16465__auto___29143);

return statearr_29142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16467__auto__);
});})(c__16465__auto___29143,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj29177 = {};
return obj29177;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__12761__auto__ = p;
if(and__12761__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__12761__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__13417__auto__ = (((p == null))?null:p);
return (function (){var or__12773__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__13417__auto__)]);
if(or__12773__auto__){
return or__12773__auto__;
} else {
var or__12773__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__12773__auto____$1){
return or__12773__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__12761__auto__ = p;
if(and__12761__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__12761__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__13417__auto__ = (((p == null))?null:p);
return (function (){var or__12773__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__13417__auto__)]);
if(or__12773__auto__){
return or__12773__auto__;
} else {
var or__12773__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__12773__auto____$1){
return or__12773__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){
if((function (){var and__12761__auto__ = p;
if(and__12761__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__12761__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__13417__auto__ = (((p == null))?null:p);
return (function (){var or__12773__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__13417__auto__)]);
if(or__12773__auto__){
return or__12773__auto__;
} else {
var or__12773__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__12773__auto____$1){
return or__12773__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__12761__auto__ = p;
if(and__12761__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__12761__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__13417__auto__ = (((p == null))?null:p);
return (function (){var or__12773__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__13417__auto__)]);
if(or__12773__auto__){
return or__12773__auto__;
} else {
var or__12773__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__12773__auto____$1){
return or__12773__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;

/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){
return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__12773__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__12773__auto__)){
return or__12773__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__12773__auto__,mults){
return (function (p1__29178_SHARP_){
if(cljs.core.truth_(p1__29178_SHARP_.call(null,topic))){
return p1__29178_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29178_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__12773__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t29301 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29301 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta29302){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta29302 = meta29302;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29301.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t29301.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t29301.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t29301.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t29301.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t29301.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t29301.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t29301.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29303){
var self__ = this;
var _29303__$1 = this;
return self__.meta29302;
});})(mults,ensure_mult))
;

cljs.core.async.t29301.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29303,meta29302__$1){
var self__ = this;
var _29303__$1 = this;
return (new cljs.core.async.t29301(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta29302__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t29301.cljs$lang$type = true;

cljs.core.async.t29301.cljs$lang$ctorStr = "cljs.core.async/t29301";

cljs.core.async.t29301.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__13360__auto__,writer__13361__auto__,opt__13362__auto__){
return cljs.core._write.call(null,writer__13361__auto__,"cljs.core.async/t29301");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t29301 = ((function (mults,ensure_mult){
return (function __GT_t29301(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta29302){
return (new cljs.core.async.t29301(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta29302));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t29301(ensure_mult,mults,buf_fn,topic_fn,ch,pub,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),65,new cljs.core.Keyword(null,"end-line","end-line",1837326455),603,new cljs.core.Keyword(null,"column","column",2078222095),14,new cljs.core.Keyword(null,"line","line",212345235),591,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/gmp26/clojure/rum-datascript-prototype/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
;
var c__16465__auto___29423 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16465__auto___29423,mults,ensure_mult,p){
return (function (){
var f__16466__auto__ = (function (){var switch__16450__auto__ = ((function (c__16465__auto___29423,mults,ensure_mult,p){
return (function (state_29375){
var state_val_29376 = (state_29375[(1)]);
if((state_val_29376 === (7))){
var inst_29371 = (state_29375[(2)]);
var state_29375__$1 = state_29375;
var statearr_29377_29424 = state_29375__$1;
(statearr_29377_29424[(2)] = inst_29371);

(statearr_29377_29424[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29376 === (20))){
var state_29375__$1 = state_29375;
var statearr_29378_29425 = state_29375__$1;
(statearr_29378_29425[(2)] = null);

(statearr_29378_29425[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29376 === (1))){
var state_29375__$1 = state_29375;
var statearr_29379_29426 = state_29375__$1;
(statearr_29379_29426[(2)] = null);

(statearr_29379_29426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29376 === (24))){
var inst_29354 = (state_29375[(7)]);
var inst_29363 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29354);
var state_29375__$1 = state_29375;
var statearr_29380_29427 = state_29375__$1;
(statearr_29380_29427[(2)] = inst_29363);

(statearr_29380_29427[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29376 === (4))){
var inst_29306 = (state_29375[(8)]);
var inst_29306__$1 = (state_29375[(2)]);
var inst_29307 = (inst_29306__$1 == null);
var state_29375__$1 = (function (){var statearr_29381 = state_29375;
(statearr_29381[(8)] = inst_29306__$1);

return statearr_29381;
})();
if(cljs.core.truth_(inst_29307)){
var statearr_29382_29428 = state_29375__$1;
(statearr_29382_29428[(1)] = (5));

} else {
var statearr_29383_29429 = state_29375__$1;
(statearr_29383_29429[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29376 === (15))){
var inst_29348 = (state_29375[(2)]);
var state_29375__$1 = state_29375;
var statearr_29384_29430 = state_29375__$1;
(statearr_29384_29430[(2)] = inst_29348);

(statearr_29384_29430[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29376 === (21))){
var inst_29368 = (state_29375[(2)]);
var state_29375__$1 = (function (){var statearr_29385 = state_29375;
(statearr_29385[(9)] = inst_29368);

return statearr_29385;
})();
var statearr_29386_29431 = state_29375__$1;
(statearr_29386_29431[(2)] = null);

(statearr_29386_29431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29376 === (13))){
var inst_29330 = (state_29375[(10)]);
var inst_29332 = cljs.core.chunked_seq_QMARK_.call(null,inst_29330);
var state_29375__$1 = state_29375;
if(inst_29332){
var statearr_29387_29432 = state_29375__$1;
(statearr_29387_29432[(1)] = (16));

} else {
var statearr_29388_29433 = state_29375__$1;
(statearr_29388_29433[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29376 === (22))){
var inst_29360 = (state_29375[(2)]);
var state_29375__$1 = state_29375;
if(cljs.core.truth_(inst_29360)){
var statearr_29389_29434 = state_29375__$1;
(statearr_29389_29434[(1)] = (23));

} else {
var statearr_29390_29435 = state_29375__$1;
(statearr_29390_29435[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29376 === (6))){
var inst_29354 = (state_29375[(7)]);
var inst_29306 = (state_29375[(8)]);
var inst_29356 = (state_29375[(11)]);
var inst_29354__$1 = topic_fn.call(null,inst_29306);
var inst_29355 = cljs.core.deref.call(null,mults);
var inst_29356__$1 = cljs.core.get.call(null,inst_29355,inst_29354__$1);
var state_29375__$1 = (function (){var statearr_29391 = state_29375;
(statearr_29391[(7)] = inst_29354__$1);

(statearr_29391[(11)] = inst_29356__$1);

return statearr_29391;
})();
if(cljs.core.truth_(inst_29356__$1)){
var statearr_29392_29436 = state_29375__$1;
(statearr_29392_29436[(1)] = (19));

} else {
var statearr_29393_29437 = state_29375__$1;
(statearr_29393_29437[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29376 === (25))){
var inst_29365 = (state_29375[(2)]);
var state_29375__$1 = state_29375;
var statearr_29394_29438 = state_29375__$1;
(statearr_29394_29438[(2)] = inst_29365);

(statearr_29394_29438[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29376 === (17))){
var inst_29330 = (state_29375[(10)]);
var inst_29339 = cljs.core.first.call(null,inst_29330);
var inst_29340 = cljs.core.async.muxch_STAR_.call(null,inst_29339);
var inst_29341 = cljs.core.async.close_BANG_.call(null,inst_29340);
var inst_29342 = cljs.core.next.call(null,inst_29330);
var inst_29316 = inst_29342;
var inst_29317 = null;
var inst_29318 = (0);
var inst_29319 = (0);
var state_29375__$1 = (function (){var statearr_29395 = state_29375;
(statearr_29395[(12)] = inst_29318);

(statearr_29395[(13)] = inst_29341);

(statearr_29395[(14)] = inst_29316);

(statearr_29395[(15)] = inst_29319);

(statearr_29395[(16)] = inst_29317);

return statearr_29395;
})();
var statearr_29396_29439 = state_29375__$1;
(statearr_29396_29439[(2)] = null);

(statearr_29396_29439[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29376 === (3))){
var inst_29373 = (state_29375[(2)]);
var state_29375__$1 = state_29375;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29375__$1,inst_29373);
} else {
if((state_val_29376 === (12))){
var inst_29350 = (state_29375[(2)]);
var state_29375__$1 = state_29375;
var statearr_29397_29440 = state_29375__$1;
(statearr_29397_29440[(2)] = inst_29350);

(statearr_29397_29440[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29376 === (2))){
var state_29375__$1 = state_29375;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29375__$1,(4),ch);
} else {
if((state_val_29376 === (23))){
var state_29375__$1 = state_29375;
var statearr_29398_29441 = state_29375__$1;
(statearr_29398_29441[(2)] = null);

(statearr_29398_29441[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29376 === (19))){
var inst_29306 = (state_29375[(8)]);
var inst_29356 = (state_29375[(11)]);
var inst_29358 = cljs.core.async.muxch_STAR_.call(null,inst_29356);
var state_29375__$1 = state_29375;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29375__$1,(22),inst_29358,inst_29306);
} else {
if((state_val_29376 === (11))){
var inst_29330 = (state_29375[(10)]);
var inst_29316 = (state_29375[(14)]);
var inst_29330__$1 = cljs.core.seq.call(null,inst_29316);
var state_29375__$1 = (function (){var statearr_29399 = state_29375;
(statearr_29399[(10)] = inst_29330__$1);

return statearr_29399;
})();
if(inst_29330__$1){
var statearr_29400_29442 = state_29375__$1;
(statearr_29400_29442[(1)] = (13));

} else {
var statearr_29401_29443 = state_29375__$1;
(statearr_29401_29443[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29376 === (9))){
var inst_29352 = (state_29375[(2)]);
var state_29375__$1 = state_29375;
var statearr_29402_29444 = state_29375__$1;
(statearr_29402_29444[(2)] = inst_29352);

(statearr_29402_29444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29376 === (5))){
var inst_29313 = cljs.core.deref.call(null,mults);
var inst_29314 = cljs.core.vals.call(null,inst_29313);
var inst_29315 = cljs.core.seq.call(null,inst_29314);
var inst_29316 = inst_29315;
var inst_29317 = null;
var inst_29318 = (0);
var inst_29319 = (0);
var state_29375__$1 = (function (){var statearr_29403 = state_29375;
(statearr_29403[(12)] = inst_29318);

(statearr_29403[(14)] = inst_29316);

(statearr_29403[(15)] = inst_29319);

(statearr_29403[(16)] = inst_29317);

return statearr_29403;
})();
var statearr_29404_29445 = state_29375__$1;
(statearr_29404_29445[(2)] = null);

(statearr_29404_29445[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29376 === (14))){
var state_29375__$1 = state_29375;
var statearr_29408_29446 = state_29375__$1;
(statearr_29408_29446[(2)] = null);

(statearr_29408_29446[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29376 === (16))){
var inst_29330 = (state_29375[(10)]);
var inst_29334 = cljs.core.chunk_first.call(null,inst_29330);
var inst_29335 = cljs.core.chunk_rest.call(null,inst_29330);
var inst_29336 = cljs.core.count.call(null,inst_29334);
var inst_29316 = inst_29335;
var inst_29317 = inst_29334;
var inst_29318 = inst_29336;
var inst_29319 = (0);
var state_29375__$1 = (function (){var statearr_29409 = state_29375;
(statearr_29409[(12)] = inst_29318);

(statearr_29409[(14)] = inst_29316);

(statearr_29409[(15)] = inst_29319);

(statearr_29409[(16)] = inst_29317);

return statearr_29409;
})();
var statearr_29410_29447 = state_29375__$1;
(statearr_29410_29447[(2)] = null);

(statearr_29410_29447[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29376 === (10))){
var inst_29318 = (state_29375[(12)]);
var inst_29316 = (state_29375[(14)]);
var inst_29319 = (state_29375[(15)]);
var inst_29317 = (state_29375[(16)]);
var inst_29324 = cljs.core._nth.call(null,inst_29317,inst_29319);
var inst_29325 = cljs.core.async.muxch_STAR_.call(null,inst_29324);
var inst_29326 = cljs.core.async.close_BANG_.call(null,inst_29325);
var inst_29327 = (inst_29319 + (1));
var tmp29405 = inst_29318;
var tmp29406 = inst_29316;
var tmp29407 = inst_29317;
var inst_29316__$1 = tmp29406;
var inst_29317__$1 = tmp29407;
var inst_29318__$1 = tmp29405;
var inst_29319__$1 = inst_29327;
var state_29375__$1 = (function (){var statearr_29411 = state_29375;
(statearr_29411[(12)] = inst_29318__$1);

(statearr_29411[(14)] = inst_29316__$1);

(statearr_29411[(15)] = inst_29319__$1);

(statearr_29411[(17)] = inst_29326);

(statearr_29411[(16)] = inst_29317__$1);

return statearr_29411;
})();
var statearr_29412_29448 = state_29375__$1;
(statearr_29412_29448[(2)] = null);

(statearr_29412_29448[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29376 === (18))){
var inst_29345 = (state_29375[(2)]);
var state_29375__$1 = state_29375;
var statearr_29413_29449 = state_29375__$1;
(statearr_29413_29449[(2)] = inst_29345);

(statearr_29413_29449[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29376 === (8))){
var inst_29318 = (state_29375[(12)]);
var inst_29319 = (state_29375[(15)]);
var inst_29321 = (inst_29319 < inst_29318);
var inst_29322 = inst_29321;
var state_29375__$1 = state_29375;
if(cljs.core.truth_(inst_29322)){
var statearr_29414_29450 = state_29375__$1;
(statearr_29414_29450[(1)] = (10));

} else {
var statearr_29415_29451 = state_29375__$1;
(statearr_29415_29451[(1)] = (11));

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
});})(c__16465__auto___29423,mults,ensure_mult,p))
;
return ((function (switch__16450__auto__,c__16465__auto___29423,mults,ensure_mult,p){
return (function() {
var state_machine__16451__auto__ = null;
var state_machine__16451__auto____0 = (function (){
var statearr_29419 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29419[(0)] = state_machine__16451__auto__);

(statearr_29419[(1)] = (1));

return statearr_29419;
});
var state_machine__16451__auto____1 = (function (state_29375){
while(true){
var ret_value__16452__auto__ = (function (){try{while(true){
var result__16453__auto__ = switch__16450__auto__.call(null,state_29375);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16453__auto__;
}
break;
}
}catch (e29420){if((e29420 instanceof Object)){
var ex__16454__auto__ = e29420;
var statearr_29421_29452 = state_29375;
(statearr_29421_29452[(5)] = ex__16454__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29375);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29420;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29453 = state_29375;
state_29375 = G__29453;
continue;
} else {
return ret_value__16452__auto__;
}
break;
}
});
state_machine__16451__auto__ = function(state_29375){
switch(arguments.length){
case 0:
return state_machine__16451__auto____0.call(this);
case 1:
return state_machine__16451__auto____1.call(this,state_29375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16451__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16451__auto____0;
state_machine__16451__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16451__auto____1;
return state_machine__16451__auto__;
})()
;})(switch__16450__auto__,c__16465__auto___29423,mults,ensure_mult,p))
})();
var state__16467__auto__ = (function (){var statearr_29422 = f__16466__auto__.call(null);
(statearr_29422[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16465__auto___29423);

return statearr_29422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16467__auto__);
});})(c__16465__auto___29423,mults,ensure_mult,p))
);


return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){
return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){
return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){
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
var c__16465__auto___29590 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16465__auto___29590,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__16466__auto__ = (function (){var switch__16450__auto__ = ((function (c__16465__auto___29590,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29560){
var state_val_29561 = (state_29560[(1)]);
if((state_val_29561 === (7))){
var state_29560__$1 = state_29560;
var statearr_29562_29591 = state_29560__$1;
(statearr_29562_29591[(2)] = null);

(statearr_29562_29591[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29561 === (1))){
var state_29560__$1 = state_29560;
var statearr_29563_29592 = state_29560__$1;
(statearr_29563_29592[(2)] = null);

(statearr_29563_29592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29561 === (4))){
var inst_29524 = (state_29560[(7)]);
var inst_29526 = (inst_29524 < cnt);
var state_29560__$1 = state_29560;
if(cljs.core.truth_(inst_29526)){
var statearr_29564_29593 = state_29560__$1;
(statearr_29564_29593[(1)] = (6));

} else {
var statearr_29565_29594 = state_29560__$1;
(statearr_29565_29594[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29561 === (15))){
var inst_29556 = (state_29560[(2)]);
var state_29560__$1 = state_29560;
var statearr_29566_29595 = state_29560__$1;
(statearr_29566_29595[(2)] = inst_29556);

(statearr_29566_29595[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29561 === (13))){
var inst_29549 = cljs.core.async.close_BANG_.call(null,out);
var state_29560__$1 = state_29560;
var statearr_29567_29596 = state_29560__$1;
(statearr_29567_29596[(2)] = inst_29549);

(statearr_29567_29596[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29561 === (6))){
var state_29560__$1 = state_29560;
var statearr_29568_29597 = state_29560__$1;
(statearr_29568_29597[(2)] = null);

(statearr_29568_29597[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29561 === (3))){
var inst_29558 = (state_29560[(2)]);
var state_29560__$1 = state_29560;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29560__$1,inst_29558);
} else {
if((state_val_29561 === (12))){
var inst_29546 = (state_29560[(8)]);
var inst_29546__$1 = (state_29560[(2)]);
var inst_29547 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29546__$1);
var state_29560__$1 = (function (){var statearr_29569 = state_29560;
(statearr_29569[(8)] = inst_29546__$1);

return statearr_29569;
})();
if(cljs.core.truth_(inst_29547)){
var statearr_29570_29598 = state_29560__$1;
(statearr_29570_29598[(1)] = (13));

} else {
var statearr_29571_29599 = state_29560__$1;
(statearr_29571_29599[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29561 === (2))){
var inst_29523 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29524 = (0);
var state_29560__$1 = (function (){var statearr_29572 = state_29560;
(statearr_29572[(7)] = inst_29524);

(statearr_29572[(9)] = inst_29523);

return statearr_29572;
})();
var statearr_29573_29600 = state_29560__$1;
(statearr_29573_29600[(2)] = null);

(statearr_29573_29600[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29561 === (11))){
var inst_29524 = (state_29560[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29560,(10),Object,null,(9));
var inst_29533 = chs__$1.call(null,inst_29524);
var inst_29534 = done.call(null,inst_29524);
var inst_29535 = cljs.core.async.take_BANG_.call(null,inst_29533,inst_29534);
var state_29560__$1 = state_29560;
var statearr_29574_29601 = state_29560__$1;
(statearr_29574_29601[(2)] = inst_29535);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29560__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29561 === (9))){
var inst_29524 = (state_29560[(7)]);
var inst_29537 = (state_29560[(2)]);
var inst_29538 = (inst_29524 + (1));
var inst_29524__$1 = inst_29538;
var state_29560__$1 = (function (){var statearr_29575 = state_29560;
(statearr_29575[(7)] = inst_29524__$1);

(statearr_29575[(10)] = inst_29537);

return statearr_29575;
})();
var statearr_29576_29602 = state_29560__$1;
(statearr_29576_29602[(2)] = null);

(statearr_29576_29602[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29561 === (5))){
var inst_29544 = (state_29560[(2)]);
var state_29560__$1 = (function (){var statearr_29577 = state_29560;
(statearr_29577[(11)] = inst_29544);

return statearr_29577;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29560__$1,(12),dchan);
} else {
if((state_val_29561 === (14))){
var inst_29546 = (state_29560[(8)]);
var inst_29551 = cljs.core.apply.call(null,f,inst_29546);
var state_29560__$1 = state_29560;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29560__$1,(16),out,inst_29551);
} else {
if((state_val_29561 === (16))){
var inst_29553 = (state_29560[(2)]);
var state_29560__$1 = (function (){var statearr_29578 = state_29560;
(statearr_29578[(12)] = inst_29553);

return statearr_29578;
})();
var statearr_29579_29603 = state_29560__$1;
(statearr_29579_29603[(2)] = null);

(statearr_29579_29603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29561 === (10))){
var inst_29528 = (state_29560[(2)]);
var inst_29529 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29560__$1 = (function (){var statearr_29580 = state_29560;
(statearr_29580[(13)] = inst_29528);

return statearr_29580;
})();
var statearr_29581_29604 = state_29560__$1;
(statearr_29581_29604[(2)] = inst_29529);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29560__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29561 === (8))){
var inst_29542 = (state_29560[(2)]);
var state_29560__$1 = state_29560;
var statearr_29582_29605 = state_29560__$1;
(statearr_29582_29605[(2)] = inst_29542);

(statearr_29582_29605[(1)] = (5));


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
});})(c__16465__auto___29590,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__16450__auto__,c__16465__auto___29590,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__16451__auto__ = null;
var state_machine__16451__auto____0 = (function (){
var statearr_29586 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29586[(0)] = state_machine__16451__auto__);

(statearr_29586[(1)] = (1));

return statearr_29586;
});
var state_machine__16451__auto____1 = (function (state_29560){
while(true){
var ret_value__16452__auto__ = (function (){try{while(true){
var result__16453__auto__ = switch__16450__auto__.call(null,state_29560);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16453__auto__;
}
break;
}
}catch (e29587){if((e29587 instanceof Object)){
var ex__16454__auto__ = e29587;
var statearr_29588_29606 = state_29560;
(statearr_29588_29606[(5)] = ex__16454__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29560);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29587;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29607 = state_29560;
state_29560 = G__29607;
continue;
} else {
return ret_value__16452__auto__;
}
break;
}
});
state_machine__16451__auto__ = function(state_29560){
switch(arguments.length){
case 0:
return state_machine__16451__auto____0.call(this);
case 1:
return state_machine__16451__auto____1.call(this,state_29560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16451__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16451__auto____0;
state_machine__16451__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16451__auto____1;
return state_machine__16451__auto__;
})()
;})(switch__16450__auto__,c__16465__auto___29590,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__16467__auto__ = (function (){var statearr_29589 = f__16466__auto__.call(null);
(statearr_29589[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16465__auto___29590);

return statearr_29589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16467__auto__);
});})(c__16465__auto___29590,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){
return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16465__auto___29715 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16465__auto___29715,out){
return (function (){
var f__16466__auto__ = (function (){var switch__16450__auto__ = ((function (c__16465__auto___29715,out){
return (function (state_29691){
var state_val_29692 = (state_29691[(1)]);
if((state_val_29692 === (7))){
var inst_29671 = (state_29691[(7)]);
var inst_29670 = (state_29691[(8)]);
var inst_29670__$1 = (state_29691[(2)]);
var inst_29671__$1 = cljs.core.nth.call(null,inst_29670__$1,(0),null);
var inst_29672 = cljs.core.nth.call(null,inst_29670__$1,(1),null);
var inst_29673 = (inst_29671__$1 == null);
var state_29691__$1 = (function (){var statearr_29693 = state_29691;
(statearr_29693[(9)] = inst_29672);

(statearr_29693[(7)] = inst_29671__$1);

(statearr_29693[(8)] = inst_29670__$1);

return statearr_29693;
})();
if(cljs.core.truth_(inst_29673)){
var statearr_29694_29716 = state_29691__$1;
(statearr_29694_29716[(1)] = (8));

} else {
var statearr_29695_29717 = state_29691__$1;
(statearr_29695_29717[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29692 === (1))){
var inst_29662 = cljs.core.vec.call(null,chs);
var inst_29663 = inst_29662;
var state_29691__$1 = (function (){var statearr_29696 = state_29691;
(statearr_29696[(10)] = inst_29663);

return statearr_29696;
})();
var statearr_29697_29718 = state_29691__$1;
(statearr_29697_29718[(2)] = null);

(statearr_29697_29718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29692 === (4))){
var inst_29663 = (state_29691[(10)]);
var state_29691__$1 = state_29691;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29691__$1,(7),inst_29663);
} else {
if((state_val_29692 === (6))){
var inst_29687 = (state_29691[(2)]);
var state_29691__$1 = state_29691;
var statearr_29698_29719 = state_29691__$1;
(statearr_29698_29719[(2)] = inst_29687);

(statearr_29698_29719[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29692 === (3))){
var inst_29689 = (state_29691[(2)]);
var state_29691__$1 = state_29691;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29691__$1,inst_29689);
} else {
if((state_val_29692 === (2))){
var inst_29663 = (state_29691[(10)]);
var inst_29665 = cljs.core.count.call(null,inst_29663);
var inst_29666 = (inst_29665 > (0));
var state_29691__$1 = state_29691;
if(cljs.core.truth_(inst_29666)){
var statearr_29700_29720 = state_29691__$1;
(statearr_29700_29720[(1)] = (4));

} else {
var statearr_29701_29721 = state_29691__$1;
(statearr_29701_29721[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29692 === (11))){
var inst_29663 = (state_29691[(10)]);
var inst_29680 = (state_29691[(2)]);
var tmp29699 = inst_29663;
var inst_29663__$1 = tmp29699;
var state_29691__$1 = (function (){var statearr_29702 = state_29691;
(statearr_29702[(11)] = inst_29680);

(statearr_29702[(10)] = inst_29663__$1);

return statearr_29702;
})();
var statearr_29703_29722 = state_29691__$1;
(statearr_29703_29722[(2)] = null);

(statearr_29703_29722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29692 === (9))){
var inst_29671 = (state_29691[(7)]);
var state_29691__$1 = state_29691;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29691__$1,(11),out,inst_29671);
} else {
if((state_val_29692 === (5))){
var inst_29685 = cljs.core.async.close_BANG_.call(null,out);
var state_29691__$1 = state_29691;
var statearr_29704_29723 = state_29691__$1;
(statearr_29704_29723[(2)] = inst_29685);

(statearr_29704_29723[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29692 === (10))){
var inst_29683 = (state_29691[(2)]);
var state_29691__$1 = state_29691;
var statearr_29705_29724 = state_29691__$1;
(statearr_29705_29724[(2)] = inst_29683);

(statearr_29705_29724[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29692 === (8))){
var inst_29663 = (state_29691[(10)]);
var inst_29672 = (state_29691[(9)]);
var inst_29671 = (state_29691[(7)]);
var inst_29670 = (state_29691[(8)]);
var inst_29675 = (function (){var c = inst_29672;
var v = inst_29671;
var vec__29668 = inst_29670;
var cs = inst_29663;
return ((function (c,v,vec__29668,cs,inst_29663,inst_29672,inst_29671,inst_29670,state_val_29692,c__16465__auto___29715,out){
return (function (p1__29608_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29608_SHARP_);
});
;})(c,v,vec__29668,cs,inst_29663,inst_29672,inst_29671,inst_29670,state_val_29692,c__16465__auto___29715,out))
})();
var inst_29676 = cljs.core.filterv.call(null,inst_29675,inst_29663);
var inst_29663__$1 = inst_29676;
var state_29691__$1 = (function (){var statearr_29706 = state_29691;
(statearr_29706[(10)] = inst_29663__$1);

return statearr_29706;
})();
var statearr_29707_29725 = state_29691__$1;
(statearr_29707_29725[(2)] = null);

(statearr_29707_29725[(1)] = (2));


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
});})(c__16465__auto___29715,out))
;
return ((function (switch__16450__auto__,c__16465__auto___29715,out){
return (function() {
var state_machine__16451__auto__ = null;
var state_machine__16451__auto____0 = (function (){
var statearr_29711 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29711[(0)] = state_machine__16451__auto__);

(statearr_29711[(1)] = (1));

return statearr_29711;
});
var state_machine__16451__auto____1 = (function (state_29691){
while(true){
var ret_value__16452__auto__ = (function (){try{while(true){
var result__16453__auto__ = switch__16450__auto__.call(null,state_29691);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16453__auto__;
}
break;
}
}catch (e29712){if((e29712 instanceof Object)){
var ex__16454__auto__ = e29712;
var statearr_29713_29726 = state_29691;
(statearr_29713_29726[(5)] = ex__16454__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29691);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29712;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29727 = state_29691;
state_29691 = G__29727;
continue;
} else {
return ret_value__16452__auto__;
}
break;
}
});
state_machine__16451__auto__ = function(state_29691){
switch(arguments.length){
case 0:
return state_machine__16451__auto____0.call(this);
case 1:
return state_machine__16451__auto____1.call(this,state_29691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16451__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16451__auto____0;
state_machine__16451__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16451__auto____1;
return state_machine__16451__auto__;
})()
;})(switch__16450__auto__,c__16465__auto___29715,out))
})();
var state__16467__auto__ = (function (){var statearr_29714 = f__16466__auto__.call(null);
(statearr_29714[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16465__auto___29715);

return statearr_29714;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16467__auto__);
});})(c__16465__auto___29715,out))
);


return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){
return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16465__auto___29820 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16465__auto___29820,out){
return (function (){
var f__16466__auto__ = (function (){var switch__16450__auto__ = ((function (c__16465__auto___29820,out){
return (function (state_29797){
var state_val_29798 = (state_29797[(1)]);
if((state_val_29798 === (7))){
var inst_29779 = (state_29797[(7)]);
var inst_29779__$1 = (state_29797[(2)]);
var inst_29780 = (inst_29779__$1 == null);
var inst_29781 = cljs.core.not.call(null,inst_29780);
var state_29797__$1 = (function (){var statearr_29799 = state_29797;
(statearr_29799[(7)] = inst_29779__$1);

return statearr_29799;
})();
if(inst_29781){
var statearr_29800_29821 = state_29797__$1;
(statearr_29800_29821[(1)] = (8));

} else {
var statearr_29801_29822 = state_29797__$1;
(statearr_29801_29822[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (1))){
var inst_29774 = (0);
var state_29797__$1 = (function (){var statearr_29802 = state_29797;
(statearr_29802[(8)] = inst_29774);

return statearr_29802;
})();
var statearr_29803_29823 = state_29797__$1;
(statearr_29803_29823[(2)] = null);

(statearr_29803_29823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (4))){
var state_29797__$1 = state_29797;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29797__$1,(7),ch);
} else {
if((state_val_29798 === (6))){
var inst_29792 = (state_29797[(2)]);
var state_29797__$1 = state_29797;
var statearr_29804_29824 = state_29797__$1;
(statearr_29804_29824[(2)] = inst_29792);

(statearr_29804_29824[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (3))){
var inst_29794 = (state_29797[(2)]);
var inst_29795 = cljs.core.async.close_BANG_.call(null,out);
var state_29797__$1 = (function (){var statearr_29805 = state_29797;
(statearr_29805[(9)] = inst_29794);

return statearr_29805;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29797__$1,inst_29795);
} else {
if((state_val_29798 === (2))){
var inst_29774 = (state_29797[(8)]);
var inst_29776 = (inst_29774 < n);
var state_29797__$1 = state_29797;
if(cljs.core.truth_(inst_29776)){
var statearr_29806_29825 = state_29797__$1;
(statearr_29806_29825[(1)] = (4));

} else {
var statearr_29807_29826 = state_29797__$1;
(statearr_29807_29826[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (11))){
var inst_29774 = (state_29797[(8)]);
var inst_29784 = (state_29797[(2)]);
var inst_29785 = (inst_29774 + (1));
var inst_29774__$1 = inst_29785;
var state_29797__$1 = (function (){var statearr_29808 = state_29797;
(statearr_29808[(8)] = inst_29774__$1);

(statearr_29808[(10)] = inst_29784);

return statearr_29808;
})();
var statearr_29809_29827 = state_29797__$1;
(statearr_29809_29827[(2)] = null);

(statearr_29809_29827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (9))){
var state_29797__$1 = state_29797;
var statearr_29810_29828 = state_29797__$1;
(statearr_29810_29828[(2)] = null);

(statearr_29810_29828[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (5))){
var state_29797__$1 = state_29797;
var statearr_29811_29829 = state_29797__$1;
(statearr_29811_29829[(2)] = null);

(statearr_29811_29829[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (10))){
var inst_29789 = (state_29797[(2)]);
var state_29797__$1 = state_29797;
var statearr_29812_29830 = state_29797__$1;
(statearr_29812_29830[(2)] = inst_29789);

(statearr_29812_29830[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29798 === (8))){
var inst_29779 = (state_29797[(7)]);
var state_29797__$1 = state_29797;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29797__$1,(11),out,inst_29779);
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
});})(c__16465__auto___29820,out))
;
return ((function (switch__16450__auto__,c__16465__auto___29820,out){
return (function() {
var state_machine__16451__auto__ = null;
var state_machine__16451__auto____0 = (function (){
var statearr_29816 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29816[(0)] = state_machine__16451__auto__);

(statearr_29816[(1)] = (1));

return statearr_29816;
});
var state_machine__16451__auto____1 = (function (state_29797){
while(true){
var ret_value__16452__auto__ = (function (){try{while(true){
var result__16453__auto__ = switch__16450__auto__.call(null,state_29797);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16453__auto__;
}
break;
}
}catch (e29817){if((e29817 instanceof Object)){
var ex__16454__auto__ = e29817;
var statearr_29818_29831 = state_29797;
(statearr_29818_29831[(5)] = ex__16454__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29797);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29817;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29832 = state_29797;
state_29797 = G__29832;
continue;
} else {
return ret_value__16452__auto__;
}
break;
}
});
state_machine__16451__auto__ = function(state_29797){
switch(arguments.length){
case 0:
return state_machine__16451__auto____0.call(this);
case 1:
return state_machine__16451__auto____1.call(this,state_29797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16451__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16451__auto____0;
state_machine__16451__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16451__auto____1;
return state_machine__16451__auto__;
})()
;})(switch__16450__auto__,c__16465__auto___29820,out))
})();
var state__16467__auto__ = (function (){var statearr_29819 = f__16466__auto__.call(null);
(statearr_29819[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16465__auto___29820);

return statearr_29819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16467__auto__);
});})(c__16465__auto___29820,out))
);


return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){
if(typeof cljs.core.async.t29840 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29840 = (function (ch,f,map_LT_,meta29841){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta29841 = meta29841;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29840.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t29840.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t29840.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t29840.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t29843 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29843 = (function (fn1,_,meta29841,map_LT_,f,ch,meta29844){
this.fn1 = fn1;
this._ = _;
this.meta29841 = meta29841;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29844 = meta29844;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29843.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t29843.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t29843.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29833_SHARP_){
return f1.call(null,(((p1__29833_SHARP_ == null))?null:self__.f.call(null,p1__29833_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t29843.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29845){
var self__ = this;
var _29845__$1 = this;
return self__.meta29844;
});})(___$1))
;

cljs.core.async.t29843.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29845,meta29844__$1){
var self__ = this;
var _29845__$1 = this;
return (new cljs.core.async.t29843(self__.fn1,self__._,self__.meta29841,self__.map_LT_,self__.f,self__.ch,meta29844__$1));
});})(___$1))
;

cljs.core.async.t29843.cljs$lang$type = true;

cljs.core.async.t29843.cljs$lang$ctorStr = "cljs.core.async/t29843";

cljs.core.async.t29843.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__13360__auto__,writer__13361__auto__,opt__13362__auto__){
return cljs.core._write.call(null,writer__13361__auto__,"cljs.core.async/t29843");
});})(___$1))
;

cljs.core.async.__GT_t29843 = ((function (___$1){
return (function __GT_t29843(fn1__$1,___$2,meta29841__$1,map_LT___$1,f__$1,ch__$1,meta29844){
return (new cljs.core.async.t29843(fn1__$1,___$2,meta29841__$1,map_LT___$1,f__$1,ch__$1,meta29844));
});})(___$1))
;

}

return (new cljs.core.async.t29843(fn1,___$1,self__.meta29841,self__.map_LT_,self__.f,self__.ch,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),737,new cljs.core.Keyword(null,"column","column",2078222095),10,new cljs.core.Keyword(null,"line","line",212345235),731,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/gmp26/clojure/rum-datascript-prototype/resources/public/js/out/cljs/core/async.cljs"], null)));
})()
);
if(cljs.core.truth_((function (){var and__12761__auto__ = ret;
if(cljs.core.truth_(and__12761__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__12761__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t29840.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t29840.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t29840.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t29840.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29842){
var self__ = this;
var _29842__$1 = this;
return self__.meta29841;
});

cljs.core.async.t29840.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29842,meta29841__$1){
var self__ = this;
var _29842__$1 = this;
return (new cljs.core.async.t29840(self__.ch,self__.f,self__.map_LT_,meta29841__$1));
});

cljs.core.async.t29840.cljs$lang$type = true;

cljs.core.async.t29840.cljs$lang$ctorStr = "cljs.core.async/t29840";

cljs.core.async.t29840.cljs$lang$ctorPrWriter = (function (this__13360__auto__,writer__13361__auto__,opt__13362__auto__){
return cljs.core._write.call(null,writer__13361__auto__,"cljs.core.async/t29840");
});

cljs.core.async.__GT_t29840 = (function __GT_t29840(ch__$1,f__$1,map_LT___$1,meta29841){
return (new cljs.core.async.t29840(ch__$1,f__$1,map_LT___$1,meta29841));
});

}

return (new cljs.core.async.t29840(ch,f,map_LT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),46,new cljs.core.Keyword(null,"end-line","end-line",1837326455),743,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),722,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/gmp26/clojure/rum-datascript-prototype/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t29849 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29849 = (function (ch,f,map_GT_,meta29850){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta29850 = meta29850;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29849.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t29849.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t29849.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t29849.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t29849.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t29849.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t29849.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29851){
var self__ = this;
var _29851__$1 = this;
return self__.meta29850;
});

cljs.core.async.t29849.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29851,meta29850__$1){
var self__ = this;
var _29851__$1 = this;
return (new cljs.core.async.t29849(self__.ch,self__.f,self__.map_GT_,meta29850__$1));
});

cljs.core.async.t29849.cljs$lang$type = true;

cljs.core.async.t29849.cljs$lang$ctorStr = "cljs.core.async/t29849";

cljs.core.async.t29849.cljs$lang$ctorPrWriter = (function (this__13360__auto__,writer__13361__auto__,opt__13362__auto__){
return cljs.core._write.call(null,writer__13361__auto__,"cljs.core.async/t29849");
});

cljs.core.async.__GT_t29849 = (function __GT_t29849(ch__$1,f__$1,map_GT___$1,meta29850){
return (new cljs.core.async.t29849(ch__$1,f__$1,map_GT___$1,meta29850));
});

}

return (new cljs.core.async.t29849(ch,f,map_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),757,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),748,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/gmp26/clojure/rum-datascript-prototype/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t29855 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t29855 = (function (ch,p,filter_GT_,meta29856){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta29856 = meta29856;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29855.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t29855.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t29855.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t29855.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t29855.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t29855.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t29855.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t29855.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29857){
var self__ = this;
var _29857__$1 = this;
return self__.meta29856;
});

cljs.core.async.t29855.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29857,meta29856__$1){
var self__ = this;
var _29857__$1 = this;
return (new cljs.core.async.t29855(self__.ch,self__.p,self__.filter_GT_,meta29856__$1));
});

cljs.core.async.t29855.cljs$lang$type = true;

cljs.core.async.t29855.cljs$lang$ctorStr = "cljs.core.async/t29855";

cljs.core.async.t29855.cljs$lang$ctorPrWriter = (function (this__13360__auto__,writer__13361__auto__,opt__13362__auto__){
return cljs.core._write.call(null,writer__13361__auto__,"cljs.core.async/t29855");
});

cljs.core.async.__GT_t29855 = (function __GT_t29855(ch__$1,p__$1,filter_GT___$1,meta29856){
return (new cljs.core.async.t29855(ch__$1,p__$1,filter_GT___$1,meta29856));
});

}

return (new cljs.core.async.t29855(ch,p,filter_GT_,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),48,new cljs.core.Keyword(null,"end-line","end-line",1837326455),774,new cljs.core.Keyword(null,"column","column",2078222095),3,new cljs.core.Keyword(null,"line","line",212345235),762,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/gmp26/clojure/rum-datascript-prototype/resources/public/js/out/cljs/core/async.cljs"], null)));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){
return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16465__auto___29940 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16465__auto___29940,out){
return (function (){
var f__16466__auto__ = (function (){var switch__16450__auto__ = ((function (c__16465__auto___29940,out){
return (function (state_29919){
var state_val_29920 = (state_29919[(1)]);
if((state_val_29920 === (7))){
var inst_29915 = (state_29919[(2)]);
var state_29919__$1 = state_29919;
var statearr_29921_29941 = state_29919__$1;
(statearr_29921_29941[(2)] = inst_29915);

(statearr_29921_29941[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29920 === (1))){
var state_29919__$1 = state_29919;
var statearr_29922_29942 = state_29919__$1;
(statearr_29922_29942[(2)] = null);

(statearr_29922_29942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29920 === (4))){
var inst_29901 = (state_29919[(7)]);
var inst_29901__$1 = (state_29919[(2)]);
var inst_29902 = (inst_29901__$1 == null);
var state_29919__$1 = (function (){var statearr_29923 = state_29919;
(statearr_29923[(7)] = inst_29901__$1);

return statearr_29923;
})();
if(cljs.core.truth_(inst_29902)){
var statearr_29924_29943 = state_29919__$1;
(statearr_29924_29943[(1)] = (5));

} else {
var statearr_29925_29944 = state_29919__$1;
(statearr_29925_29944[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29920 === (6))){
var inst_29901 = (state_29919[(7)]);
var inst_29906 = p.call(null,inst_29901);
var state_29919__$1 = state_29919;
if(cljs.core.truth_(inst_29906)){
var statearr_29926_29945 = state_29919__$1;
(statearr_29926_29945[(1)] = (8));

} else {
var statearr_29927_29946 = state_29919__$1;
(statearr_29927_29946[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29920 === (3))){
var inst_29917 = (state_29919[(2)]);
var state_29919__$1 = state_29919;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29919__$1,inst_29917);
} else {
if((state_val_29920 === (2))){
var state_29919__$1 = state_29919;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29919__$1,(4),ch);
} else {
if((state_val_29920 === (11))){
var inst_29909 = (state_29919[(2)]);
var state_29919__$1 = state_29919;
var statearr_29928_29947 = state_29919__$1;
(statearr_29928_29947[(2)] = inst_29909);

(statearr_29928_29947[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29920 === (9))){
var state_29919__$1 = state_29919;
var statearr_29929_29948 = state_29919__$1;
(statearr_29929_29948[(2)] = null);

(statearr_29929_29948[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29920 === (5))){
var inst_29904 = cljs.core.async.close_BANG_.call(null,out);
var state_29919__$1 = state_29919;
var statearr_29930_29949 = state_29919__$1;
(statearr_29930_29949[(2)] = inst_29904);

(statearr_29930_29949[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29920 === (10))){
var inst_29912 = (state_29919[(2)]);
var state_29919__$1 = (function (){var statearr_29931 = state_29919;
(statearr_29931[(8)] = inst_29912);

return statearr_29931;
})();
var statearr_29932_29950 = state_29919__$1;
(statearr_29932_29950[(2)] = null);

(statearr_29932_29950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29920 === (8))){
var inst_29901 = (state_29919[(7)]);
var state_29919__$1 = state_29919;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29919__$1,(11),out,inst_29901);
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
});})(c__16465__auto___29940,out))
;
return ((function (switch__16450__auto__,c__16465__auto___29940,out){
return (function() {
var state_machine__16451__auto__ = null;
var state_machine__16451__auto____0 = (function (){
var statearr_29936 = [null,null,null,null,null,null,null,null,null];
(statearr_29936[(0)] = state_machine__16451__auto__);

(statearr_29936[(1)] = (1));

return statearr_29936;
});
var state_machine__16451__auto____1 = (function (state_29919){
while(true){
var ret_value__16452__auto__ = (function (){try{while(true){
var result__16453__auto__ = switch__16450__auto__.call(null,state_29919);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16453__auto__;
}
break;
}
}catch (e29937){if((e29937 instanceof Object)){
var ex__16454__auto__ = e29937;
var statearr_29938_29951 = state_29919;
(statearr_29938_29951[(5)] = ex__16454__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29919);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29937;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29952 = state_29919;
state_29919 = G__29952;
continue;
} else {
return ret_value__16452__auto__;
}
break;
}
});
state_machine__16451__auto__ = function(state_29919){
switch(arguments.length){
case 0:
return state_machine__16451__auto____0.call(this);
case 1:
return state_machine__16451__auto____1.call(this,state_29919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16451__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16451__auto____0;
state_machine__16451__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16451__auto____1;
return state_machine__16451__auto__;
})()
;})(switch__16450__auto__,c__16465__auto___29940,out))
})();
var state__16467__auto__ = (function (){var statearr_29939 = f__16466__auto__.call(null);
(statearr_29939[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16465__auto___29940);

return statearr_29939;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16467__auto__);
});})(c__16465__auto___29940,out))
);


return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){
return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){
var c__16465__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16465__auto__){
return (function (){
var f__16466__auto__ = (function (){var switch__16450__auto__ = ((function (c__16465__auto__){
return (function (state_30118){
var state_val_30119 = (state_30118[(1)]);
if((state_val_30119 === (7))){
var inst_30114 = (state_30118[(2)]);
var state_30118__$1 = state_30118;
var statearr_30120_30161 = state_30118__$1;
(statearr_30120_30161[(2)] = inst_30114);

(statearr_30120_30161[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30119 === (20))){
var inst_30084 = (state_30118[(7)]);
var inst_30095 = (state_30118[(2)]);
var inst_30096 = cljs.core.next.call(null,inst_30084);
var inst_30070 = inst_30096;
var inst_30071 = null;
var inst_30072 = (0);
var inst_30073 = (0);
var state_30118__$1 = (function (){var statearr_30121 = state_30118;
(statearr_30121[(8)] = inst_30095);

(statearr_30121[(9)] = inst_30071);

(statearr_30121[(10)] = inst_30072);

(statearr_30121[(11)] = inst_30073);

(statearr_30121[(12)] = inst_30070);

return statearr_30121;
})();
var statearr_30122_30162 = state_30118__$1;
(statearr_30122_30162[(2)] = null);

(statearr_30122_30162[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30119 === (1))){
var state_30118__$1 = state_30118;
var statearr_30123_30163 = state_30118__$1;
(statearr_30123_30163[(2)] = null);

(statearr_30123_30163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30119 === (4))){
var inst_30059 = (state_30118[(13)]);
var inst_30059__$1 = (state_30118[(2)]);
var inst_30060 = (inst_30059__$1 == null);
var state_30118__$1 = (function (){var statearr_30124 = state_30118;
(statearr_30124[(13)] = inst_30059__$1);

return statearr_30124;
})();
if(cljs.core.truth_(inst_30060)){
var statearr_30125_30164 = state_30118__$1;
(statearr_30125_30164[(1)] = (5));

} else {
var statearr_30126_30165 = state_30118__$1;
(statearr_30126_30165[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30119 === (15))){
var state_30118__$1 = state_30118;
var statearr_30130_30166 = state_30118__$1;
(statearr_30130_30166[(2)] = null);

(statearr_30130_30166[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30119 === (21))){
var state_30118__$1 = state_30118;
var statearr_30131_30167 = state_30118__$1;
(statearr_30131_30167[(2)] = null);

(statearr_30131_30167[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30119 === (13))){
var inst_30071 = (state_30118[(9)]);
var inst_30072 = (state_30118[(10)]);
var inst_30073 = (state_30118[(11)]);
var inst_30070 = (state_30118[(12)]);
var inst_30080 = (state_30118[(2)]);
var inst_30081 = (inst_30073 + (1));
var tmp30127 = inst_30071;
var tmp30128 = inst_30072;
var tmp30129 = inst_30070;
var inst_30070__$1 = tmp30129;
var inst_30071__$1 = tmp30127;
var inst_30072__$1 = tmp30128;
var inst_30073__$1 = inst_30081;
var state_30118__$1 = (function (){var statearr_30132 = state_30118;
(statearr_30132[(9)] = inst_30071__$1);

(statearr_30132[(10)] = inst_30072__$1);

(statearr_30132[(11)] = inst_30073__$1);

(statearr_30132[(14)] = inst_30080);

(statearr_30132[(12)] = inst_30070__$1);

return statearr_30132;
})();
var statearr_30133_30168 = state_30118__$1;
(statearr_30133_30168[(2)] = null);

(statearr_30133_30168[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30119 === (22))){
var state_30118__$1 = state_30118;
var statearr_30134_30169 = state_30118__$1;
(statearr_30134_30169[(2)] = null);

(statearr_30134_30169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30119 === (6))){
var inst_30059 = (state_30118[(13)]);
var inst_30068 = f.call(null,inst_30059);
var inst_30069 = cljs.core.seq.call(null,inst_30068);
var inst_30070 = inst_30069;
var inst_30071 = null;
var inst_30072 = (0);
var inst_30073 = (0);
var state_30118__$1 = (function (){var statearr_30135 = state_30118;
(statearr_30135[(9)] = inst_30071);

(statearr_30135[(10)] = inst_30072);

(statearr_30135[(11)] = inst_30073);

(statearr_30135[(12)] = inst_30070);

return statearr_30135;
})();
var statearr_30136_30170 = state_30118__$1;
(statearr_30136_30170[(2)] = null);

(statearr_30136_30170[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30119 === (17))){
var inst_30084 = (state_30118[(7)]);
var inst_30088 = cljs.core.chunk_first.call(null,inst_30084);
var inst_30089 = cljs.core.chunk_rest.call(null,inst_30084);
var inst_30090 = cljs.core.count.call(null,inst_30088);
var inst_30070 = inst_30089;
var inst_30071 = inst_30088;
var inst_30072 = inst_30090;
var inst_30073 = (0);
var state_30118__$1 = (function (){var statearr_30137 = state_30118;
(statearr_30137[(9)] = inst_30071);

(statearr_30137[(10)] = inst_30072);

(statearr_30137[(11)] = inst_30073);

(statearr_30137[(12)] = inst_30070);

return statearr_30137;
})();
var statearr_30138_30171 = state_30118__$1;
(statearr_30138_30171[(2)] = null);

(statearr_30138_30171[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30119 === (3))){
var inst_30116 = (state_30118[(2)]);
var state_30118__$1 = state_30118;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30118__$1,inst_30116);
} else {
if((state_val_30119 === (12))){
var inst_30104 = (state_30118[(2)]);
var state_30118__$1 = state_30118;
var statearr_30139_30172 = state_30118__$1;
(statearr_30139_30172[(2)] = inst_30104);

(statearr_30139_30172[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30119 === (2))){
var state_30118__$1 = state_30118;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30118__$1,(4),in$);
} else {
if((state_val_30119 === (23))){
var inst_30112 = (state_30118[(2)]);
var state_30118__$1 = state_30118;
var statearr_30140_30173 = state_30118__$1;
(statearr_30140_30173[(2)] = inst_30112);

(statearr_30140_30173[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30119 === (19))){
var inst_30099 = (state_30118[(2)]);
var state_30118__$1 = state_30118;
var statearr_30141_30174 = state_30118__$1;
(statearr_30141_30174[(2)] = inst_30099);

(statearr_30141_30174[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30119 === (11))){
var inst_30084 = (state_30118[(7)]);
var inst_30070 = (state_30118[(12)]);
var inst_30084__$1 = cljs.core.seq.call(null,inst_30070);
var state_30118__$1 = (function (){var statearr_30142 = state_30118;
(statearr_30142[(7)] = inst_30084__$1);

return statearr_30142;
})();
if(inst_30084__$1){
var statearr_30143_30175 = state_30118__$1;
(statearr_30143_30175[(1)] = (14));

} else {
var statearr_30144_30176 = state_30118__$1;
(statearr_30144_30176[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30119 === (9))){
var inst_30106 = (state_30118[(2)]);
var inst_30107 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30118__$1 = (function (){var statearr_30145 = state_30118;
(statearr_30145[(15)] = inst_30106);

return statearr_30145;
})();
if(cljs.core.truth_(inst_30107)){
var statearr_30146_30177 = state_30118__$1;
(statearr_30146_30177[(1)] = (21));

} else {
var statearr_30147_30178 = state_30118__$1;
(statearr_30147_30178[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30119 === (5))){
var inst_30062 = cljs.core.async.close_BANG_.call(null,out);
var state_30118__$1 = state_30118;
var statearr_30148_30179 = state_30118__$1;
(statearr_30148_30179[(2)] = inst_30062);

(statearr_30148_30179[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30119 === (14))){
var inst_30084 = (state_30118[(7)]);
var inst_30086 = cljs.core.chunked_seq_QMARK_.call(null,inst_30084);
var state_30118__$1 = state_30118;
if(inst_30086){
var statearr_30149_30180 = state_30118__$1;
(statearr_30149_30180[(1)] = (17));

} else {
var statearr_30150_30181 = state_30118__$1;
(statearr_30150_30181[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30119 === (16))){
var inst_30102 = (state_30118[(2)]);
var state_30118__$1 = state_30118;
var statearr_30151_30182 = state_30118__$1;
(statearr_30151_30182[(2)] = inst_30102);

(statearr_30151_30182[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30119 === (10))){
var inst_30071 = (state_30118[(9)]);
var inst_30073 = (state_30118[(11)]);
var inst_30078 = cljs.core._nth.call(null,inst_30071,inst_30073);
var state_30118__$1 = state_30118;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30118__$1,(13),out,inst_30078);
} else {
if((state_val_30119 === (18))){
var inst_30084 = (state_30118[(7)]);
var inst_30093 = cljs.core.first.call(null,inst_30084);
var state_30118__$1 = state_30118;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30118__$1,(20),out,inst_30093);
} else {
if((state_val_30119 === (8))){
var inst_30072 = (state_30118[(10)]);
var inst_30073 = (state_30118[(11)]);
var inst_30075 = (inst_30073 < inst_30072);
var inst_30076 = inst_30075;
var state_30118__$1 = state_30118;
if(cljs.core.truth_(inst_30076)){
var statearr_30152_30183 = state_30118__$1;
(statearr_30152_30183[(1)] = (10));

} else {
var statearr_30153_30184 = state_30118__$1;
(statearr_30153_30184[(1)] = (11));

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
});})(c__16465__auto__))
;
return ((function (switch__16450__auto__,c__16465__auto__){
return (function() {
var state_machine__16451__auto__ = null;
var state_machine__16451__auto____0 = (function (){
var statearr_30157 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30157[(0)] = state_machine__16451__auto__);

(statearr_30157[(1)] = (1));

return statearr_30157;
});
var state_machine__16451__auto____1 = (function (state_30118){
while(true){
var ret_value__16452__auto__ = (function (){try{while(true){
var result__16453__auto__ = switch__16450__auto__.call(null,state_30118);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16453__auto__;
}
break;
}
}catch (e30158){if((e30158 instanceof Object)){
var ex__16454__auto__ = e30158;
var statearr_30159_30185 = state_30118;
(statearr_30159_30185[(5)] = ex__16454__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30118);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30158;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30186 = state_30118;
state_30118 = G__30186;
continue;
} else {
return ret_value__16452__auto__;
}
break;
}
});
state_machine__16451__auto__ = function(state_30118){
switch(arguments.length){
case 0:
return state_machine__16451__auto____0.call(this);
case 1:
return state_machine__16451__auto____1.call(this,state_30118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16451__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16451__auto____0;
state_machine__16451__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16451__auto____1;
return state_machine__16451__auto__;
})()
;})(switch__16450__auto__,c__16465__auto__))
})();
var state__16467__auto__ = (function (){var statearr_30160 = f__16466__auto__.call(null);
(statearr_30160[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16465__auto__);

return statearr_30160;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16467__auto__);
});})(c__16465__auto__))
);

return c__16465__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){
return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){
return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){
return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16465__auto___30283 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16465__auto___30283,out){
return (function (){
var f__16466__auto__ = (function (){var switch__16450__auto__ = ((function (c__16465__auto___30283,out){
return (function (state_30258){
var state_val_30259 = (state_30258[(1)]);
if((state_val_30259 === (7))){
var inst_30253 = (state_30258[(2)]);
var state_30258__$1 = state_30258;
var statearr_30260_30284 = state_30258__$1;
(statearr_30260_30284[(2)] = inst_30253);

(statearr_30260_30284[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30259 === (1))){
var inst_30235 = null;
var state_30258__$1 = (function (){var statearr_30261 = state_30258;
(statearr_30261[(7)] = inst_30235);

return statearr_30261;
})();
var statearr_30262_30285 = state_30258__$1;
(statearr_30262_30285[(2)] = null);

(statearr_30262_30285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30259 === (4))){
var inst_30238 = (state_30258[(8)]);
var inst_30238__$1 = (state_30258[(2)]);
var inst_30239 = (inst_30238__$1 == null);
var inst_30240 = cljs.core.not.call(null,inst_30239);
var state_30258__$1 = (function (){var statearr_30263 = state_30258;
(statearr_30263[(8)] = inst_30238__$1);

return statearr_30263;
})();
if(inst_30240){
var statearr_30264_30286 = state_30258__$1;
(statearr_30264_30286[(1)] = (5));

} else {
var statearr_30265_30287 = state_30258__$1;
(statearr_30265_30287[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30259 === (6))){
var state_30258__$1 = state_30258;
var statearr_30266_30288 = state_30258__$1;
(statearr_30266_30288[(2)] = null);

(statearr_30266_30288[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30259 === (3))){
var inst_30255 = (state_30258[(2)]);
var inst_30256 = cljs.core.async.close_BANG_.call(null,out);
var state_30258__$1 = (function (){var statearr_30267 = state_30258;
(statearr_30267[(9)] = inst_30255);

return statearr_30267;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30258__$1,inst_30256);
} else {
if((state_val_30259 === (2))){
var state_30258__$1 = state_30258;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30258__$1,(4),ch);
} else {
if((state_val_30259 === (11))){
var inst_30238 = (state_30258[(8)]);
var inst_30247 = (state_30258[(2)]);
var inst_30235 = inst_30238;
var state_30258__$1 = (function (){var statearr_30268 = state_30258;
(statearr_30268[(7)] = inst_30235);

(statearr_30268[(10)] = inst_30247);

return statearr_30268;
})();
var statearr_30269_30289 = state_30258__$1;
(statearr_30269_30289[(2)] = null);

(statearr_30269_30289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30259 === (9))){
var inst_30238 = (state_30258[(8)]);
var state_30258__$1 = state_30258;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30258__$1,(11),out,inst_30238);
} else {
if((state_val_30259 === (5))){
var inst_30235 = (state_30258[(7)]);
var inst_30238 = (state_30258[(8)]);
var inst_30242 = cljs.core._EQ_.call(null,inst_30238,inst_30235);
var state_30258__$1 = state_30258;
if(inst_30242){
var statearr_30271_30290 = state_30258__$1;
(statearr_30271_30290[(1)] = (8));

} else {
var statearr_30272_30291 = state_30258__$1;
(statearr_30272_30291[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30259 === (10))){
var inst_30250 = (state_30258[(2)]);
var state_30258__$1 = state_30258;
var statearr_30273_30292 = state_30258__$1;
(statearr_30273_30292[(2)] = inst_30250);

(statearr_30273_30292[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30259 === (8))){
var inst_30235 = (state_30258[(7)]);
var tmp30270 = inst_30235;
var inst_30235__$1 = tmp30270;
var state_30258__$1 = (function (){var statearr_30274 = state_30258;
(statearr_30274[(7)] = inst_30235__$1);

return statearr_30274;
})();
var statearr_30275_30293 = state_30258__$1;
(statearr_30275_30293[(2)] = null);

(statearr_30275_30293[(1)] = (2));


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
});})(c__16465__auto___30283,out))
;
return ((function (switch__16450__auto__,c__16465__auto___30283,out){
return (function() {
var state_machine__16451__auto__ = null;
var state_machine__16451__auto____0 = (function (){
var statearr_30279 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30279[(0)] = state_machine__16451__auto__);

(statearr_30279[(1)] = (1));

return statearr_30279;
});
var state_machine__16451__auto____1 = (function (state_30258){
while(true){
var ret_value__16452__auto__ = (function (){try{while(true){
var result__16453__auto__ = switch__16450__auto__.call(null,state_30258);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16453__auto__;
}
break;
}
}catch (e30280){if((e30280 instanceof Object)){
var ex__16454__auto__ = e30280;
var statearr_30281_30294 = state_30258;
(statearr_30281_30294[(5)] = ex__16454__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30258);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30280;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30295 = state_30258;
state_30258 = G__30295;
continue;
} else {
return ret_value__16452__auto__;
}
break;
}
});
state_machine__16451__auto__ = function(state_30258){
switch(arguments.length){
case 0:
return state_machine__16451__auto____0.call(this);
case 1:
return state_machine__16451__auto____1.call(this,state_30258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16451__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16451__auto____0;
state_machine__16451__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16451__auto____1;
return state_machine__16451__auto__;
})()
;})(switch__16450__auto__,c__16465__auto___30283,out))
})();
var state__16467__auto__ = (function (){var statearr_30282 = f__16466__auto__.call(null);
(statearr_30282[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16465__auto___30283);

return statearr_30282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16467__auto__);
});})(c__16465__auto___30283,out))
);


return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){
return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16465__auto___30430 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16465__auto___30430,out){
return (function (){
var f__16466__auto__ = (function (){var switch__16450__auto__ = ((function (c__16465__auto___30430,out){
return (function (state_30400){
var state_val_30401 = (state_30400[(1)]);
if((state_val_30401 === (7))){
var inst_30396 = (state_30400[(2)]);
var state_30400__$1 = state_30400;
var statearr_30402_30431 = state_30400__$1;
(statearr_30402_30431[(2)] = inst_30396);

(statearr_30402_30431[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30401 === (1))){
var inst_30363 = (new Array(n));
var inst_30364 = inst_30363;
var inst_30365 = (0);
var state_30400__$1 = (function (){var statearr_30403 = state_30400;
(statearr_30403[(7)] = inst_30365);

(statearr_30403[(8)] = inst_30364);

return statearr_30403;
})();
var statearr_30404_30432 = state_30400__$1;
(statearr_30404_30432[(2)] = null);

(statearr_30404_30432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30401 === (4))){
var inst_30368 = (state_30400[(9)]);
var inst_30368__$1 = (state_30400[(2)]);
var inst_30369 = (inst_30368__$1 == null);
var inst_30370 = cljs.core.not.call(null,inst_30369);
var state_30400__$1 = (function (){var statearr_30405 = state_30400;
(statearr_30405[(9)] = inst_30368__$1);

return statearr_30405;
})();
if(inst_30370){
var statearr_30406_30433 = state_30400__$1;
(statearr_30406_30433[(1)] = (5));

} else {
var statearr_30407_30434 = state_30400__$1;
(statearr_30407_30434[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30401 === (15))){
var inst_30390 = (state_30400[(2)]);
var state_30400__$1 = state_30400;
var statearr_30408_30435 = state_30400__$1;
(statearr_30408_30435[(2)] = inst_30390);

(statearr_30408_30435[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30401 === (13))){
var state_30400__$1 = state_30400;
var statearr_30409_30436 = state_30400__$1;
(statearr_30409_30436[(2)] = null);

(statearr_30409_30436[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30401 === (6))){
var inst_30365 = (state_30400[(7)]);
var inst_30386 = (inst_30365 > (0));
var state_30400__$1 = state_30400;
if(cljs.core.truth_(inst_30386)){
var statearr_30410_30437 = state_30400__$1;
(statearr_30410_30437[(1)] = (12));

} else {
var statearr_30411_30438 = state_30400__$1;
(statearr_30411_30438[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30401 === (3))){
var inst_30398 = (state_30400[(2)]);
var state_30400__$1 = state_30400;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30400__$1,inst_30398);
} else {
if((state_val_30401 === (12))){
var inst_30364 = (state_30400[(8)]);
var inst_30388 = cljs.core.vec.call(null,inst_30364);
var state_30400__$1 = state_30400;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30400__$1,(15),out,inst_30388);
} else {
if((state_val_30401 === (2))){
var state_30400__$1 = state_30400;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30400__$1,(4),ch);
} else {
if((state_val_30401 === (11))){
var inst_30380 = (state_30400[(2)]);
var inst_30381 = (new Array(n));
var inst_30364 = inst_30381;
var inst_30365 = (0);
var state_30400__$1 = (function (){var statearr_30412 = state_30400;
(statearr_30412[(10)] = inst_30380);

(statearr_30412[(7)] = inst_30365);

(statearr_30412[(8)] = inst_30364);

return statearr_30412;
})();
var statearr_30413_30439 = state_30400__$1;
(statearr_30413_30439[(2)] = null);

(statearr_30413_30439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30401 === (9))){
var inst_30364 = (state_30400[(8)]);
var inst_30378 = cljs.core.vec.call(null,inst_30364);
var state_30400__$1 = state_30400;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30400__$1,(11),out,inst_30378);
} else {
if((state_val_30401 === (5))){
var inst_30368 = (state_30400[(9)]);
var inst_30365 = (state_30400[(7)]);
var inst_30364 = (state_30400[(8)]);
var inst_30373 = (state_30400[(11)]);
var inst_30372 = (inst_30364[inst_30365] = inst_30368);
var inst_30373__$1 = (inst_30365 + (1));
var inst_30374 = (inst_30373__$1 < n);
var state_30400__$1 = (function (){var statearr_30414 = state_30400;
(statearr_30414[(12)] = inst_30372);

(statearr_30414[(11)] = inst_30373__$1);

return statearr_30414;
})();
if(cljs.core.truth_(inst_30374)){
var statearr_30415_30440 = state_30400__$1;
(statearr_30415_30440[(1)] = (8));

} else {
var statearr_30416_30441 = state_30400__$1;
(statearr_30416_30441[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30401 === (14))){
var inst_30393 = (state_30400[(2)]);
var inst_30394 = cljs.core.async.close_BANG_.call(null,out);
var state_30400__$1 = (function (){var statearr_30418 = state_30400;
(statearr_30418[(13)] = inst_30393);

return statearr_30418;
})();
var statearr_30419_30442 = state_30400__$1;
(statearr_30419_30442[(2)] = inst_30394);

(statearr_30419_30442[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30401 === (10))){
var inst_30384 = (state_30400[(2)]);
var state_30400__$1 = state_30400;
var statearr_30420_30443 = state_30400__$1;
(statearr_30420_30443[(2)] = inst_30384);

(statearr_30420_30443[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30401 === (8))){
var inst_30364 = (state_30400[(8)]);
var inst_30373 = (state_30400[(11)]);
var tmp30417 = inst_30364;
var inst_30364__$1 = tmp30417;
var inst_30365 = inst_30373;
var state_30400__$1 = (function (){var statearr_30421 = state_30400;
(statearr_30421[(7)] = inst_30365);

(statearr_30421[(8)] = inst_30364__$1);

return statearr_30421;
})();
var statearr_30422_30444 = state_30400__$1;
(statearr_30422_30444[(2)] = null);

(statearr_30422_30444[(1)] = (2));


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
});})(c__16465__auto___30430,out))
;
return ((function (switch__16450__auto__,c__16465__auto___30430,out){
return (function() {
var state_machine__16451__auto__ = null;
var state_machine__16451__auto____0 = (function (){
var statearr_30426 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30426[(0)] = state_machine__16451__auto__);

(statearr_30426[(1)] = (1));

return statearr_30426;
});
var state_machine__16451__auto____1 = (function (state_30400){
while(true){
var ret_value__16452__auto__ = (function (){try{while(true){
var result__16453__auto__ = switch__16450__auto__.call(null,state_30400);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16453__auto__;
}
break;
}
}catch (e30427){if((e30427 instanceof Object)){
var ex__16454__auto__ = e30427;
var statearr_30428_30445 = state_30400;
(statearr_30428_30445[(5)] = ex__16454__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30400);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30427;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30446 = state_30400;
state_30400 = G__30446;
continue;
} else {
return ret_value__16452__auto__;
}
break;
}
});
state_machine__16451__auto__ = function(state_30400){
switch(arguments.length){
case 0:
return state_machine__16451__auto____0.call(this);
case 1:
return state_machine__16451__auto____1.call(this,state_30400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16451__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16451__auto____0;
state_machine__16451__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16451__auto____1;
return state_machine__16451__auto__;
})()
;})(switch__16450__auto__,c__16465__auto___30430,out))
})();
var state__16467__auto__ = (function (){var statearr_30429 = f__16466__auto__.call(null);
(statearr_30429[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16465__auto___30430);

return statearr_30429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16467__auto__);
});})(c__16465__auto___30430,out))
);


return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){
return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16465__auto___30589 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16465__auto___30589,out){
return (function (){
var f__16466__auto__ = (function (){var switch__16450__auto__ = ((function (c__16465__auto___30589,out){
return (function (state_30559){
var state_val_30560 = (state_30559[(1)]);
if((state_val_30560 === (7))){
var inst_30555 = (state_30559[(2)]);
var state_30559__$1 = state_30559;
var statearr_30561_30590 = state_30559__$1;
(statearr_30561_30590[(2)] = inst_30555);

(statearr_30561_30590[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30560 === (1))){
var inst_30518 = [];
var inst_30519 = inst_30518;
var inst_30520 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30559__$1 = (function (){var statearr_30562 = state_30559;
(statearr_30562[(7)] = inst_30519);

(statearr_30562[(8)] = inst_30520);

return statearr_30562;
})();
var statearr_30563_30591 = state_30559__$1;
(statearr_30563_30591[(2)] = null);

(statearr_30563_30591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30560 === (4))){
var inst_30523 = (state_30559[(9)]);
var inst_30523__$1 = (state_30559[(2)]);
var inst_30524 = (inst_30523__$1 == null);
var inst_30525 = cljs.core.not.call(null,inst_30524);
var state_30559__$1 = (function (){var statearr_30564 = state_30559;
(statearr_30564[(9)] = inst_30523__$1);

return statearr_30564;
})();
if(inst_30525){
var statearr_30565_30592 = state_30559__$1;
(statearr_30565_30592[(1)] = (5));

} else {
var statearr_30566_30593 = state_30559__$1;
(statearr_30566_30593[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30560 === (15))){
var inst_30549 = (state_30559[(2)]);
var state_30559__$1 = state_30559;
var statearr_30567_30594 = state_30559__$1;
(statearr_30567_30594[(2)] = inst_30549);

(statearr_30567_30594[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30560 === (13))){
var state_30559__$1 = state_30559;
var statearr_30568_30595 = state_30559__$1;
(statearr_30568_30595[(2)] = null);

(statearr_30568_30595[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30560 === (6))){
var inst_30519 = (state_30559[(7)]);
var inst_30544 = inst_30519.length;
var inst_30545 = (inst_30544 > (0));
var state_30559__$1 = state_30559;
if(cljs.core.truth_(inst_30545)){
var statearr_30569_30596 = state_30559__$1;
(statearr_30569_30596[(1)] = (12));

} else {
var statearr_30570_30597 = state_30559__$1;
(statearr_30570_30597[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30560 === (3))){
var inst_30557 = (state_30559[(2)]);
var state_30559__$1 = state_30559;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30559__$1,inst_30557);
} else {
if((state_val_30560 === (12))){
var inst_30519 = (state_30559[(7)]);
var inst_30547 = cljs.core.vec.call(null,inst_30519);
var state_30559__$1 = state_30559;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30559__$1,(15),out,inst_30547);
} else {
if((state_val_30560 === (2))){
var state_30559__$1 = state_30559;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30559__$1,(4),ch);
} else {
if((state_val_30560 === (11))){
var inst_30527 = (state_30559[(10)]);
var inst_30523 = (state_30559[(9)]);
var inst_30537 = (state_30559[(2)]);
var inst_30538 = [];
var inst_30539 = inst_30538.push(inst_30523);
var inst_30519 = inst_30538;
var inst_30520 = inst_30527;
var state_30559__$1 = (function (){var statearr_30571 = state_30559;
(statearr_30571[(11)] = inst_30537);

(statearr_30571[(7)] = inst_30519);

(statearr_30571[(8)] = inst_30520);

(statearr_30571[(12)] = inst_30539);

return statearr_30571;
})();
var statearr_30572_30598 = state_30559__$1;
(statearr_30572_30598[(2)] = null);

(statearr_30572_30598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30560 === (9))){
var inst_30519 = (state_30559[(7)]);
var inst_30535 = cljs.core.vec.call(null,inst_30519);
var state_30559__$1 = state_30559;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30559__$1,(11),out,inst_30535);
} else {
if((state_val_30560 === (5))){
var inst_30527 = (state_30559[(10)]);
var inst_30523 = (state_30559[(9)]);
var inst_30520 = (state_30559[(8)]);
var inst_30527__$1 = f.call(null,inst_30523);
var inst_30528 = cljs.core._EQ_.call(null,inst_30527__$1,inst_30520);
var inst_30529 = cljs.core.keyword_identical_QMARK_.call(null,inst_30520,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_30530 = (inst_30528) || (inst_30529);
var state_30559__$1 = (function (){var statearr_30573 = state_30559;
(statearr_30573[(10)] = inst_30527__$1);

return statearr_30573;
})();
if(cljs.core.truth_(inst_30530)){
var statearr_30574_30599 = state_30559__$1;
(statearr_30574_30599[(1)] = (8));

} else {
var statearr_30575_30600 = state_30559__$1;
(statearr_30575_30600[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30560 === (14))){
var inst_30552 = (state_30559[(2)]);
var inst_30553 = cljs.core.async.close_BANG_.call(null,out);
var state_30559__$1 = (function (){var statearr_30577 = state_30559;
(statearr_30577[(13)] = inst_30552);

return statearr_30577;
})();
var statearr_30578_30601 = state_30559__$1;
(statearr_30578_30601[(2)] = inst_30553);

(statearr_30578_30601[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30560 === (10))){
var inst_30542 = (state_30559[(2)]);
var state_30559__$1 = state_30559;
var statearr_30579_30602 = state_30559__$1;
(statearr_30579_30602[(2)] = inst_30542);

(statearr_30579_30602[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30560 === (8))){
var inst_30527 = (state_30559[(10)]);
var inst_30519 = (state_30559[(7)]);
var inst_30523 = (state_30559[(9)]);
var inst_30532 = inst_30519.push(inst_30523);
var tmp30576 = inst_30519;
var inst_30519__$1 = tmp30576;
var inst_30520 = inst_30527;
var state_30559__$1 = (function (){var statearr_30580 = state_30559;
(statearr_30580[(7)] = inst_30519__$1);

(statearr_30580[(8)] = inst_30520);

(statearr_30580[(14)] = inst_30532);

return statearr_30580;
})();
var statearr_30581_30603 = state_30559__$1;
(statearr_30581_30603[(2)] = null);

(statearr_30581_30603[(1)] = (2));


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
});})(c__16465__auto___30589,out))
;
return ((function (switch__16450__auto__,c__16465__auto___30589,out){
return (function() {
var state_machine__16451__auto__ = null;
var state_machine__16451__auto____0 = (function (){
var statearr_30585 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30585[(0)] = state_machine__16451__auto__);

(statearr_30585[(1)] = (1));

return statearr_30585;
});
var state_machine__16451__auto____1 = (function (state_30559){
while(true){
var ret_value__16452__auto__ = (function (){try{while(true){
var result__16453__auto__ = switch__16450__auto__.call(null,state_30559);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16453__auto__;
}
break;
}
}catch (e30586){if((e30586 instanceof Object)){
var ex__16454__auto__ = e30586;
var statearr_30587_30604 = state_30559;
(statearr_30587_30604[(5)] = ex__16454__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30586;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30605 = state_30559;
state_30559 = G__30605;
continue;
} else {
return ret_value__16452__auto__;
}
break;
}
});
state_machine__16451__auto__ = function(state_30559){
switch(arguments.length){
case 0:
return state_machine__16451__auto____0.call(this);
case 1:
return state_machine__16451__auto____1.call(this,state_30559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16451__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16451__auto____0;
state_machine__16451__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16451__auto____1;
return state_machine__16451__auto__;
})()
;})(switch__16450__auto__,c__16465__auto___30589,out))
})();
var state__16467__auto__ = (function (){var statearr_30588 = f__16466__auto__.call(null);
(statearr_30588[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16465__auto___30589);

return statearr_30588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16467__auto__);
});})(c__16465__auto___30589,out))
);


return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map