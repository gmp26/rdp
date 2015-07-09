// Compiled by ClojureScript 0.0-2665 {}
if(!goog.isProvided_('figwheel.client.socket')) {
goog.provide('figwheel.client.socket');
}
goog.require('cljs.core');
goog.require('cljs.reader');
/**
* @param {...*} var_args
*/
figwheel.client.socket.log = (function() { 
var log__delegate = function (p__31303,args){
var map__31305 = p__31303;
var map__31305__$1 = ((cljs.core.seq_QMARK_.call(null,map__31305))?cljs.core.apply.call(null,cljs.core.hash_map,map__31305):map__31305);
var debug = cljs.core.get.call(null,map__31305__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));
if(cljs.core.truth_(debug)){
return console.log(cljs.core.to_array.call(null,args));
} else {
return null;
}
};
var log = function (p__31303,var_args){
var args = null;
if (arguments.length > 1) {
var G__31306__i = 0, G__31306__a = new Array(arguments.length -  1);
while (G__31306__i < G__31306__a.length) {G__31306__a[G__31306__i] = arguments[G__31306__i + 1]; ++G__31306__i;}
  args = new cljs.core.IndexedSeq(G__31306__a,0);
} 
return log__delegate.call(this,p__31303,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__31307){
var p__31303 = cljs.core.first(arglist__31307);
var args = cljs.core.rest(arglist__31307);
return log__delegate(p__31303,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.socket.have_websockets_QMARK_ = (function have_websockets_QMARK_(){
return ("WebSocket" in window);
});
if(typeof figwheel.client.socket.message_history_atom !== 'undefined'){
} else {
figwheel.client.socket.message_history_atom = cljs.core.atom.call(null,cljs.core.List.EMPTY);
}
if(typeof figwheel.client.socket.socket_atom !== 'undefined'){
} else {
figwheel.client.socket.socket_atom = cljs.core.atom.call(null,false);
}
/**
* Send a end message to the server.
*/
figwheel.client.socket.send_BANG_ = (function send_BANG_(msg){
return cljs.core.deref.call(null,figwheel.client.socket.socket_atom).send(cljs.core.pr_str.call(null,msg));
});
figwheel.client.socket.close_BANG_ = (function close_BANG_(){
cljs.core.deref.call(null,figwheel.client.socket.socket_atom).onclose = cljs.core.identity;

return cljs.core.deref.call(null,figwheel.client.socket.socket_atom).close();
});
figwheel.client.socket.proper_build_id = (function proper_build_id(build_id,msg){
return ((build_id == null)) || ((new cljs.core.Keyword(null,"build-id","build-id",1642831089).cljs$core$IFn$_invoke$arity$1(msg) == null)) || (cljs.core._EQ_.call(null,cljs.core.name.call(null,build_id),new cljs.core.Keyword(null,"build-id","build-id",1642831089).cljs$core$IFn$_invoke$arity$1(msg)));
});
figwheel.client.socket.open = (function open(p__31308){
var map__31310 = p__31308;
var map__31310__$1 = ((cljs.core.seq_QMARK_.call(null,map__31310))?cljs.core.apply.call(null,cljs.core.hash_map,map__31310):map__31310);
var opts = map__31310__$1;
var build_id = cljs.core.get.call(null,map__31310__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
var websocket_url = cljs.core.get.call(null,map__31310__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));
var retried_count = cljs.core.get.call(null,map__31310__$1,new cljs.core.Keyword(null,"retried-count","retried-count",-2127867357));
var retry_count = cljs.core.get.call(null,map__31310__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));
if(cljs.core.not.call(null,figwheel.client.socket.have_websockets_QMARK_.call(null))){
return console.debug("Figwheel: Can't start Figwheel!! This browser doesn't support WebSockets");
} else {
console.debug("Figwheel: trying to open cljs reload socket");

var socket = (new WebSocket(websocket_url));
socket.onmessage = ((function (socket,map__31310,map__31310__$1,opts,build_id,websocket_url,retried_count,retry_count){
return (function (msg_str){
var temp__4126__auto__ = cljs.reader.read_string.call(null,msg_str.data);
if(cljs.core.truth_(temp__4126__auto__)){
var msg = temp__4126__auto__;
var and__12761__auto__ = cljs.core.map_QMARK_.call(null,msg);
if(and__12761__auto__){
var and__12761__auto____$1 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);
if(cljs.core.truth_(and__12761__auto____$1)){
var and__12761__auto____$2 = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"ping","ping",-1670114784));
if(and__12761__auto____$2){
var and__12761__auto____$3 = figwheel.client.socket.proper_build_id.call(null,build_id,msg);
if(and__12761__auto____$3){
return cljs.core.swap_BANG_.call(null,figwheel.client.socket.message_history_atom,cljs.core.conj,msg);
} else {
return and__12761__auto____$3;
}
} else {
return and__12761__auto____$2;
}
} else {
return and__12761__auto____$1;
}
} else {
return and__12761__auto__;
}
} else {
return null;
}
});})(socket,map__31310,map__31310__$1,opts,build_id,websocket_url,retried_count,retry_count))
;

socket.onopen = ((function (socket,map__31310,map__31310__$1,opts,build_id,websocket_url,retried_count,retry_count){
return (function (x){
cljs.core.reset_BANG_.call(null,figwheel.client.socket.socket_atom,socket);

return console.debug("Figwheel: socket connection established");
});})(socket,map__31310,map__31310__$1,opts,build_id,websocket_url,retried_count,retry_count))
;

socket.onclose = ((function (socket,map__31310,map__31310__$1,opts,build_id,websocket_url,retried_count,retry_count){
return (function (x){
var retried_count__$1 = (function (){var or__12773__auto__ = retried_count;
if(cljs.core.truth_(or__12773__auto__)){
return or__12773__auto__;
} else {
return (0);
}
})();
figwheel.client.socket.log.call(null,opts,"Figwheel: socket closed or failed to open");

if((retry_count > retried_count__$1)){
return window.setTimeout(((function (retried_count__$1,socket,map__31310,map__31310__$1,opts,build_id,websocket_url,retried_count,retry_count){
return (function (){
return open.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retried-count","retried-count",-2127867357),(retried_count__$1 + (1))));
});})(retried_count__$1,socket,map__31310,map__31310__$1,opts,build_id,websocket_url,retried_count,retry_count))
,(function (){var x__13097__auto__ = (10000);
var y__13098__auto__ = ((2000) + ((500) * retried_count__$1));
return ((x__13097__auto__ < y__13098__auto__) ? x__13097__auto__ : y__13098__auto__);
})());
} else {
return null;
}
});})(socket,map__31310,map__31310__$1,opts,build_id,websocket_url,retried_count,retry_count))
;

socket.onerror = ((function (socket,map__31310,map__31310__$1,opts,build_id,websocket_url,retried_count,retry_count){
return (function (x){
return figwheel.client.socket.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__31310,map__31310__$1,opts,build_id,websocket_url,retried_count,retry_count))
;

return socket;
}
});

//# sourceMappingURL=socket.js.map