// Compiled by ClojureScript 0.0-2665 {}
if(!goog.isProvided_('rum')) {
goog.provide('rum');
}
goog.require('cljs.core');
goog.require('sablono.core');
cljs.core.enable_console_print_BANG_.call(null);
var last_id_26272 = cljs.core.volatile_BANG_.call(null,(0));
rum.next_id = ((function (last_id_26272){
return (function next_id(){
return cljs.core._vreset_BANG_.call(null,last_id_26272,(cljs.core._deref.call(null,last_id_26272) + (1)));
});})(last_id_26272))
;
rum.state = (function state(comp){
return (comp.props[":rum/state"]);
});
rum.id = (function id(comp){
return new cljs.core.Keyword("rum","id","rum/id",-1388417078).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,rum.state.call(null,comp)));
});
rum.fns = (function fns(fn_key,classes){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,fn_key,classes));
});
/**
* @param {...*} var_args
*/
rum.call_all = (function() { 
var call_all__delegate = function (state,fns,args){
return cljs.core.reduce.call(null,(function (state__$1,fn){
return cljs.core.apply.call(null,fn,state__$1,args);
}),state,fns);
};
var call_all = function (state,fns,var_args){
var args = null;
if (arguments.length > 2) {
var G__26273__i = 0, G__26273__a = new Array(arguments.length -  2);
while (G__26273__i < G__26273__a.length) {G__26273__a[G__26273__i] = arguments[G__26273__i + 2]; ++G__26273__i;}
  args = new cljs.core.IndexedSeq(G__26273__a,0);
} 
return call_all__delegate.call(this,state,fns,args);};
call_all.cljs$lang$maxFixedArity = 2;
call_all.cljs$lang$applyTo = (function (arglist__26274){
var state = cljs.core.first(arglist__26274);
arglist__26274 = cljs.core.next(arglist__26274);
var fns = cljs.core.first(arglist__26274);
var args = cljs.core.rest(arglist__26274);
return call_all__delegate(state,fns,args);
});
call_all.cljs$core$IFn$_invoke$arity$variadic = call_all__delegate;
return call_all;
})()
;
rum.build_class = (function build_class(classes){
var init = rum.fns.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),classes);
var will_mount = rum.fns.call(null,new cljs.core.Keyword(null,"will-mount","will-mount",-434633071),classes);
var did_mount = rum.fns.call(null,new cljs.core.Keyword(null,"did-mount","did-mount",918232960),classes);
var transfer_state = rum.fns.call(null,new cljs.core.Keyword(null,"transfer-state","transfer-state",-947550242),classes);
var should_update = rum.fns.call(null,new cljs.core.Keyword(null,"should-update","should-update",-1292781795),classes);
var render = cljs.core.first.call(null,rum.fns.call(null,new cljs.core.Keyword(null,"render","render",-1408033454),classes));
var wrapped_render = cljs.core.reduce.call(null,((function (init,will_mount,did_mount,transfer_state,should_update,render){
return (function (p1__26276_SHARP_,p2__26275_SHARP_){
return p2__26275_SHARP_.call(null,p1__26276_SHARP_);
});})(init,will_mount,did_mount,transfer_state,should_update,render))
,render,rum.fns.call(null,new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),classes));
var will_unmount = rum.fns.call(null,new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),classes);
var props__GT_state = ((function (init,will_mount,did_mount,transfer_state,should_update,render,wrapped_render,will_unmount){
return (function (props){
return rum.call_all.call(null,(props[":rum/state"]),init,props);
});})(init,will_mount,did_mount,transfer_state,should_update,render,wrapped_render,will_unmount))
;
return React.createClass({"componentWillUnmount": ((cljs.core.empty_QMARK_.call(null,will_unmount))?null:((function (init,will_mount,did_mount,transfer_state,should_update,render,wrapped_render,will_unmount,props__GT_state){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.state.call(null,this$),rum.call_all.call(null,cljs.core._deref.call(null,rum.state.call(null,this$)),will_unmount));
});})(init,will_mount,did_mount,transfer_state,should_update,render,wrapped_render,will_unmount,props__GT_state))
), "render": ((function (init,will_mount,did_mount,transfer_state,should_update,render,wrapped_render,will_unmount,props__GT_state){
return (function (){
var this$ = this;
var state = rum.state.call(null,this$);
var vec__26281 = wrapped_render.call(null,cljs.core.deref.call(null,state));
var dom = cljs.core.nth.call(null,vec__26281,(0),null);
var next_state = cljs.core.nth.call(null,vec__26281,(1),null);
cljs.core.vreset_BANG_.call(null,state,next_state);

return dom;
});})(init,will_mount,did_mount,transfer_state,should_update,render,wrapped_render,will_unmount,props__GT_state))
, "shouldComponentUpdate": ((cljs.core.empty_QMARK_.call(null,should_update))?cljs.core.constantly.call(null,true):((function (init,will_mount,did_mount,transfer_state,should_update,render,wrapped_render,will_unmount,props__GT_state){
return (function (next_props,_){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.state.call(null,this$));
var new_state = cljs.core.deref.call(null,(next_props[":rum/state"]));
var or__12773__auto__ = cljs.core.some.call(null,((function (old_state,new_state,this$,init,will_mount,did_mount,transfer_state,should_update,render,wrapped_render,will_unmount,props__GT_state){
return (function (p1__26279_SHARP_){
return p1__26279_SHARP_.call(null,old_state,new_state);
});})(old_state,new_state,this$,init,will_mount,did_mount,transfer_state,should_update,render,wrapped_render,will_unmount,props__GT_state))
,should_update);
if(cljs.core.truth_(or__12773__auto__)){
return or__12773__auto__;
} else {
return false;
}
});})(init,will_mount,did_mount,transfer_state,should_update,render,wrapped_render,will_unmount,props__GT_state))
), "componentWillReceiveProps": ((function (init,will_mount,did_mount,transfer_state,should_update,render,wrapped_render,will_unmount,props__GT_state){
return (function (next_props){
var this$ = this;
var old_state = cljs.core.deref.call(null,rum.state.call(null,this$));
var next_state = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248),this$,new cljs.core.Keyword("rum","id","rum/id",-1388417078),new cljs.core.Keyword("rum","id","rum/id",-1388417078).cljs$core$IFn$_invoke$arity$1(old_state)], null),props__GT_state.call(null,next_props));
var next_state__$1 = cljs.core.reduce.call(null,((function (old_state,next_state,this$,init,will_mount,did_mount,transfer_state,should_update,render,wrapped_render,will_unmount,props__GT_state){
return (function (p1__26278_SHARP_,p2__26277_SHARP_){
return p2__26277_SHARP_.call(null,old_state,p1__26278_SHARP_);
});})(old_state,next_state,this$,init,will_mount,did_mount,transfer_state,should_update,render,wrapped_render,will_unmount,props__GT_state))
,next_state,transfer_state);
return (next_props[":rum/state"] = cljs.core.volatile_BANG_.call(null,next_state__$1));
});})(init,will_mount,did_mount,transfer_state,should_update,render,wrapped_render,will_unmount,props__GT_state))
, "componentDidMount": ((cljs.core.empty_QMARK_.call(null,did_mount))?null:((function (init,will_mount,did_mount,transfer_state,should_update,render,wrapped_render,will_unmount,props__GT_state){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.state.call(null,this$),rum.call_all.call(null,cljs.core._deref.call(null,rum.state.call(null,this$)),did_mount));
});})(init,will_mount,did_mount,transfer_state,should_update,render,wrapped_render,will_unmount,props__GT_state))
), "componentWillMount": ((cljs.core.empty_QMARK_.call(null,will_mount))?null:((function (init,will_mount,did_mount,transfer_state,should_update,render,wrapped_render,will_unmount,props__GT_state){
return (function (){
var this$ = this;
return cljs.core._vreset_BANG_.call(null,rum.state.call(null,this$),rum.call_all.call(null,cljs.core._deref.call(null,rum.state.call(null,this$)),will_mount));
});})(init,will_mount,did_mount,transfer_state,should_update,render,wrapped_render,will_unmount,props__GT_state))
), "getInitialState": ((function (init,will_mount,did_mount,transfer_state,should_update,render,wrapped_render,will_unmount,props__GT_state){
return (function (){
var this$ = this;
var props = this$.props;
var state = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248),this$,new cljs.core.Keyword("rum","id","rum/id",-1388417078),rum.next_id.call(null)], null),props__GT_state.call(null,props));
return (props[":rum/state"] = cljs.core.volatile_BANG_.call(null,state));
});})(init,will_mount,did_mount,transfer_state,should_update,render,wrapped_render,will_unmount,props__GT_state))
});
});
rum.schedule = (function (){var or__12773__auto__ = window.requestAnimationFrame;
if(cljs.core.truth_(or__12773__auto__)){
return or__12773__auto__;
} else {
var or__12773__auto____$1 = window.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__12773__auto____$1)){
return or__12773__auto____$1;
} else {
var or__12773__auto____$2 = window.mozRequestAnimationFrame;
if(cljs.core.truth_(or__12773__auto____$2)){
return or__12773__auto____$2;
} else {
var or__12773__auto____$3 = window.msRequestAnimationFrame;
if(cljs.core.truth_(or__12773__auto____$3)){
return or__12773__auto____$3;
} else {
return ((function (or__12773__auto____$3,or__12773__auto____$2,or__12773__auto____$1,or__12773__auto__){
return (function (p1__26282_SHARP_){
return setTimeout(p1__26282_SHARP_,(16));
});
;})(or__12773__auto____$3,or__12773__auto____$2,or__12773__auto____$1,or__12773__auto__))
}
}
}
}
})();
rum.compare_by = (function compare_by(keyfn){
return (function (x,y){
return cljs.core.compare.call(null,keyfn.call(null,x),keyfn.call(null,y));
});
});
rum.empty_queue = cljs.core.sorted_set_by.call(null,rum.compare_by.call(null,rum.id));
rum.render_queue = cljs.core.volatile_BANG_.call(null,rum.empty_queue);
rum.render = (function render(){
var queue = cljs.core.deref.call(null,rum.render_queue);
cljs.core.vreset_BANG_.call(null,rum.render_queue,rum.empty_queue);

var seq__26289 = cljs.core.seq.call(null,queue);
var chunk__26291 = null;
var count__26292 = (0);
var i__26293 = (0);
while(true){
if((i__26293 < count__26292)){
var comp = cljs.core._nth.call(null,chunk__26291,i__26293);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__26295 = seq__26289;
var G__26296 = chunk__26291;
var G__26297 = count__26292;
var G__26298 = (i__26293 + (1));
seq__26289 = G__26295;
chunk__26291 = G__26296;
count__26292 = G__26297;
i__26293 = G__26298;
continue;
} else {
var G__26299 = seq__26289;
var G__26300 = chunk__26291;
var G__26301 = count__26292;
var G__26302 = (i__26293 + (1));
seq__26289 = G__26299;
chunk__26291 = G__26300;
count__26292 = G__26301;
i__26293 = G__26302;
continue;
}
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__26289);
if(temp__4126__auto__){
var seq__26289__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26289__$1)){
var c__13560__auto__ = cljs.core.chunk_first.call(null,seq__26289__$1);
var G__26303 = cljs.core.chunk_rest.call(null,seq__26289__$1);
var G__26304 = c__13560__auto__;
var G__26305 = cljs.core.count.call(null,c__13560__auto__);
var G__26306 = (0);
seq__26289 = G__26303;
chunk__26291 = G__26304;
count__26292 = G__26305;
i__26293 = G__26306;
continue;
} else {
var comp = cljs.core.first.call(null,seq__26289__$1);
if(cljs.core.truth_(comp.isMounted())){
comp.forceUpdate();

var G__26307 = cljs.core.next.call(null,seq__26289__$1);
var G__26308 = null;
var G__26309 = (0);
var G__26310 = (0);
seq__26289 = G__26307;
chunk__26291 = G__26308;
count__26292 = G__26309;
i__26293 = G__26310;
continue;
} else {
var G__26311 = cljs.core.next.call(null,seq__26289__$1);
var G__26312 = null;
var G__26313 = (0);
var G__26314 = (0);
seq__26289 = G__26311;
chunk__26291 = G__26312;
count__26292 = G__26313;
i__26293 = G__26314;
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
rum.request_render = (function request_render(component){
if(cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,rum.render_queue))){
rum.schedule.call(null,rum.render);
} else {
}

return cljs.core._vreset_BANG_.call(null,rum.render_queue,cljs.core.conj.call(null,cljs.core._deref.call(null,rum.render_queue),component));
});
rum.mount = (function mount(component,node){
return React.render(component,node);
});
rum.render__GT_mixin = (function render__GT_mixin(render_fn){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_fn,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
})], null);
});
rum.render_state__GT_mixin = (function render_state__GT_mixin(render_fn){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function (state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,render_fn,state,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)),state], null);
})], null);
});
rum.args__GT_state = (function args__GT_state(args){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","args","rum/args",1315791754),args], null);
});
/**
* @param {...*} var_args
*/
rum.element = (function() { 
var element__delegate = function (class$,state,p__26315){
var vec__26317 = p__26315;
var props = cljs.core.nth.call(null,vec__26317,(0),null);
var props__$1 = (function (){var or__12773__auto__ = props;
if(cljs.core.truth_(or__12773__auto__)){
return or__12773__auto__;
} else {
return {};
}
})();
(props__$1[":rum/state"] = state);

return React.createElement(class$,props__$1);
};
var element = function (class$,state,var_args){
var p__26315 = null;
if (arguments.length > 2) {
var G__26318__i = 0, G__26318__a = new Array(arguments.length -  2);
while (G__26318__i < G__26318__a.length) {G__26318__a[G__26318__i] = arguments[G__26318__i + 2]; ++G__26318__i;}
  p__26315 = new cljs.core.IndexedSeq(G__26318__a,0);
} 
return element__delegate.call(this,class$,state,p__26315);};
element.cljs$lang$maxFixedArity = 2;
element.cljs$lang$applyTo = (function (arglist__26319){
var class$ = cljs.core.first(arglist__26319);
arglist__26319 = cljs.core.next(arglist__26319);
var state = cljs.core.first(arglist__26319);
var p__26315 = cljs.core.rest(arglist__26319);
return element__delegate(class$,state,p__26315);
});
element.cljs$core$IFn$_invoke$arity$variadic = element__delegate;
return element;
})()
;
rum.ctor__GT_class = (function ctor__GT_class(ctor){
return new cljs.core.Keyword("rum","class","rum/class",-2030775258).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,ctor));
});
rum.static$ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,new_state){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(old_state),new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state));
})], null);
rum.reactive_key = (function reactive_key(state){
return [cljs.core.str(":rum/reactive-"),cljs.core.str(new cljs.core.Keyword("rum","id","rum/id",-1388417078).cljs$core$IFn$_invoke$arity$1(state))].join('');
});
rum.reactive = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transfer-state","transfer-state",-947550242),(function (old,new$){
return cljs.core.assoc.call(null,new$,new cljs.core.Keyword("rum","refs","rum/refs",-1559872630),new cljs.core.Keyword("rum","refs","rum/refs",-1559872630).cljs$core$IFn$_invoke$arity$1(old));
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var _STAR_reactions_STAR_26320 = rum._STAR_reactions_STAR_;
try{rum._STAR_reactions_STAR_ = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);

var comp = new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state);
var old_reactions = new cljs.core.Keyword("rum","refs","rum/refs",-1559872630).cljs$core$IFn$_invoke$arity$2(state,cljs.core.PersistentHashSet.EMPTY);
var vec__26321 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__26321,(0),null);
var next_state = cljs.core.nth.call(null,vec__26321,(1),null);
var new_reactions = cljs.core.deref.call(null,rum._STAR_reactions_STAR_);
var key = rum.reactive_key.call(null,state);
var seq__26322_26334 = cljs.core.seq.call(null,old_reactions);
var chunk__26323_26335 = null;
var count__26324_26336 = (0);
var i__26325_26337 = (0);
while(true){
if((i__26325_26337 < count__26324_26336)){
var ref_26338 = cljs.core._nth.call(null,chunk__26323_26335,i__26325_26337);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_26338)){
} else {
cljs.core.remove_watch.call(null,ref_26338,key);
}

var G__26339 = seq__26322_26334;
var G__26340 = chunk__26323_26335;
var G__26341 = count__26324_26336;
var G__26342 = (i__26325_26337 + (1));
seq__26322_26334 = G__26339;
chunk__26323_26335 = G__26340;
count__26324_26336 = G__26341;
i__26325_26337 = G__26342;
continue;
} else {
var temp__4126__auto___26343 = cljs.core.seq.call(null,seq__26322_26334);
if(temp__4126__auto___26343){
var seq__26322_26344__$1 = temp__4126__auto___26343;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26322_26344__$1)){
var c__13560__auto___26345 = cljs.core.chunk_first.call(null,seq__26322_26344__$1);
var G__26346 = cljs.core.chunk_rest.call(null,seq__26322_26344__$1);
var G__26347 = c__13560__auto___26345;
var G__26348 = cljs.core.count.call(null,c__13560__auto___26345);
var G__26349 = (0);
seq__26322_26334 = G__26346;
chunk__26323_26335 = G__26347;
count__26324_26336 = G__26348;
i__26325_26337 = G__26349;
continue;
} else {
var ref_26350 = cljs.core.first.call(null,seq__26322_26344__$1);
if(cljs.core.contains_QMARK_.call(null,new_reactions,ref_26350)){
} else {
cljs.core.remove_watch.call(null,ref_26350,key);
}

var G__26351 = cljs.core.next.call(null,seq__26322_26344__$1);
var G__26352 = null;
var G__26353 = (0);
var G__26354 = (0);
seq__26322_26334 = G__26351;
chunk__26323_26335 = G__26352;
count__26324_26336 = G__26353;
i__26325_26337 = G__26354;
continue;
}
} else {
}
}
break;
}

var seq__26326_26355 = cljs.core.seq.call(null,new_reactions);
var chunk__26327_26356 = null;
var count__26328_26357 = (0);
var i__26329_26358 = (0);
while(true){
if((i__26329_26358 < count__26328_26357)){
var ref_26359 = cljs.core._nth.call(null,chunk__26327_26356,i__26329_26358);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_26359)){
} else {
cljs.core.add_watch.call(null,ref_26359,key,((function (seq__26326_26355,chunk__26327_26356,count__26328_26357,i__26329_26358,ref_26359,comp,old_reactions,vec__26321,dom,next_state,new_reactions,key,_STAR_reactions_STAR_26320){
return (function (_,___$1,___$2,___$3){
return rum.request_render.call(null,comp);
});})(seq__26326_26355,chunk__26327_26356,count__26328_26357,i__26329_26358,ref_26359,comp,old_reactions,vec__26321,dom,next_state,new_reactions,key,_STAR_reactions_STAR_26320))
);
}

var G__26360 = seq__26326_26355;
var G__26361 = chunk__26327_26356;
var G__26362 = count__26328_26357;
var G__26363 = (i__26329_26358 + (1));
seq__26326_26355 = G__26360;
chunk__26327_26356 = G__26361;
count__26328_26357 = G__26362;
i__26329_26358 = G__26363;
continue;
} else {
var temp__4126__auto___26364 = cljs.core.seq.call(null,seq__26326_26355);
if(temp__4126__auto___26364){
var seq__26326_26365__$1 = temp__4126__auto___26364;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26326_26365__$1)){
var c__13560__auto___26366 = cljs.core.chunk_first.call(null,seq__26326_26365__$1);
var G__26367 = cljs.core.chunk_rest.call(null,seq__26326_26365__$1);
var G__26368 = c__13560__auto___26366;
var G__26369 = cljs.core.count.call(null,c__13560__auto___26366);
var G__26370 = (0);
seq__26326_26355 = G__26367;
chunk__26327_26356 = G__26368;
count__26328_26357 = G__26369;
i__26329_26358 = G__26370;
continue;
} else {
var ref_26371 = cljs.core.first.call(null,seq__26326_26365__$1);
if(cljs.core.contains_QMARK_.call(null,old_reactions,ref_26371)){
} else {
cljs.core.add_watch.call(null,ref_26371,key,((function (seq__26326_26355,chunk__26327_26356,count__26328_26357,i__26329_26358,ref_26371,seq__26326_26365__$1,temp__4126__auto___26364,comp,old_reactions,vec__26321,dom,next_state,new_reactions,key,_STAR_reactions_STAR_26320){
return (function (_,___$1,___$2,___$3){
return rum.request_render.call(null,comp);
});})(seq__26326_26355,chunk__26327_26356,count__26328_26357,i__26329_26358,ref_26371,seq__26326_26365__$1,temp__4126__auto___26364,comp,old_reactions,vec__26321,dom,next_state,new_reactions,key,_STAR_reactions_STAR_26320))
);
}

var G__26372 = cljs.core.next.call(null,seq__26326_26365__$1);
var G__26373 = null;
var G__26374 = (0);
var G__26375 = (0);
seq__26326_26355 = G__26372;
chunk__26327_26356 = G__26373;
count__26328_26357 = G__26374;
i__26329_26358 = G__26375;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum","refs","rum/refs",-1559872630),new_reactions)], null);
}finally {rum._STAR_reactions_STAR_ = _STAR_reactions_STAR_26320;
}});
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var key_26376 = rum.reactive_key.call(null,state);
var seq__26330_26377 = cljs.core.seq.call(null,new cljs.core.Keyword("rum","refs","rum/refs",-1559872630).cljs$core$IFn$_invoke$arity$1(state));
var chunk__26331_26378 = null;
var count__26332_26379 = (0);
var i__26333_26380 = (0);
while(true){
if((i__26333_26380 < count__26332_26379)){
var ref_26381 = cljs.core._nth.call(null,chunk__26331_26378,i__26333_26380);
cljs.core.remove_watch.call(null,ref_26381,key_26376);

var G__26382 = seq__26330_26377;
var G__26383 = chunk__26331_26378;
var G__26384 = count__26332_26379;
var G__26385 = (i__26333_26380 + (1));
seq__26330_26377 = G__26382;
chunk__26331_26378 = G__26383;
count__26332_26379 = G__26384;
i__26333_26380 = G__26385;
continue;
} else {
var temp__4126__auto___26386 = cljs.core.seq.call(null,seq__26330_26377);
if(temp__4126__auto___26386){
var seq__26330_26387__$1 = temp__4126__auto___26386;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26330_26387__$1)){
var c__13560__auto___26388 = cljs.core.chunk_first.call(null,seq__26330_26387__$1);
var G__26389 = cljs.core.chunk_rest.call(null,seq__26330_26387__$1);
var G__26390 = c__13560__auto___26388;
var G__26391 = cljs.core.count.call(null,c__13560__auto___26388);
var G__26392 = (0);
seq__26330_26377 = G__26389;
chunk__26331_26378 = G__26390;
count__26332_26379 = G__26391;
i__26333_26380 = G__26392;
continue;
} else {
var ref_26393 = cljs.core.first.call(null,seq__26330_26387__$1);
cljs.core.remove_watch.call(null,ref_26393,key_26376);

var G__26394 = cljs.core.next.call(null,seq__26330_26387__$1);
var G__26395 = null;
var G__26396 = (0);
var G__26397 = (0);
seq__26330_26377 = G__26394;
chunk__26331_26378 = G__26395;
count__26332_26379 = G__26396;
i__26333_26380 = G__26397;
continue;
}
} else {
}
}
break;
}

return cljs.core.dissoc.call(null,state,new cljs.core.Keyword("rum","refs","rum/refs",-1559872630));
})], null);
rum.react = (function react(ref){
cljs.core._vreset_BANG_.call(null,rum._STAR_reactions_STAR_,cljs.core.conj.call(null,cljs.core._deref.call(null,rum._STAR_reactions_STAR_),ref));

return cljs.core.deref.call(null,ref);
});

/**
* @constructor
*/
rum.LensCursor = (function (parent,getter,setter){
this.parent = parent;
this.getter = getter;
this.setter = setter;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 114690;
})
rum.LensCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
cljs.core._write.call(null,writer,"#<Cursor: ");

cljs.core.pr_writer.call(null,cljs.core._deref.call(null,this$__$1),writer,opts);

return cljs.core._write.call(null,writer,">");
});

rum.LensCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_.call(null,this$__$1,f.call(null,cljs.core._deref.call(null,this$__$1)));
});

rum.LensCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_.call(null,this$__$1,f.call(null,cljs.core._deref.call(null,this$__$1),a));
});

rum.LensCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_.call(null,this$__$1,f.call(null,cljs.core._deref.call(null,this$__$1),a,b));
});

rum.LensCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
return cljs.core._reset_BANG_.call(null,this$__$1,cljs.core.apply.call(null,f,cljs.core._deref.call(null,this$__$1),a,b,xs));
});

rum.LensCursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (_,new_value){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.parent,self__.setter,new_value);

return new_value;
});

rum.LensCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
});

rum.LensCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
cljs.core.add_watch.call(null,self__.parent,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,key),this$__$1),((function (this$__$1){
return (function (_,___$1,oldp,newp){
var old = self__.getter.call(null,oldp);
var new$ = self__.getter.call(null,newp);
if(cljs.core.not_EQ_.call(null,old,new$)){
return f.call(null,key,this$__$1,old,new$);
} else {
return null;
}
});})(this$__$1))
);

return this$__$1;
});

rum.LensCursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
cljs.core.remove_watch.call(null,self__.parent,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,key),this$__$1));

return this$__$1;
});

rum.LensCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.getter.call(null,cljs.core._deref.call(null,self__.parent));
});

rum.LensCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (this$__$1 === other);
});

rum.LensCursor.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return cljs.core._equiv.call(null,this$,other);
});

rum.LensCursor.cljs$lang$type = true;

rum.LensCursor.cljs$lang$ctorStr = "rum/LensCursor";

rum.LensCursor.cljs$lang$ctorPrWriter = (function (this__13360__auto__,writer__13361__auto__,opt__13362__auto__){
return cljs.core._write.call(null,writer__13361__auto__,"rum/LensCursor");
});

rum.__GT_LensCursor = (function __GT_LensCursor(parent,getter,setter){
return (new rum.LensCursor(parent,getter,setter));
});

rum.cursor = (function cursor(ref,path){
var getter = (function (p1__26398_SHARP_){
return cljs.core.get_in.call(null,p1__26398_SHARP_,path);
});
var setter = ((function (getter){
return (function (p1__26399_SHARP_,p2__26400_SHARP_){
return cljs.core.assoc_in.call(null,p1__26399_SHARP_,path,p2__26400_SHARP_);
});})(getter))
;
if((ref instanceof rum.LensCursor)){
return (new rum.LensCursor(ref.parent,cljs.core.comp.call(null,getter,ref.getter),((function (getter,setter){
return (function (where,what){
var focus = ref.getter.call(null,where);
var focus__$1 = setter.call(null,focus,what);
var focus__$2 = ref.setter.call(null,where,focus__$1);
return focus__$2;
});})(getter,setter))
));
} else {
return (new rum.LensCursor(ref,getter,setter));
}
});
rum.deref_args = (function deref_args(xs){
return cljs.core.mapv.call(null,(function (p1__26401_SHARP_){
if((function (){var G__26403 = p1__26401_SHARP_;
if(G__26403){
var bit__13454__auto__ = (G__26403.cljs$lang$protocol_mask$partition0$ & (32768));
if((bit__13454__auto__) || (G__26403.cljs$core$IDeref$)){
return true;
} else {
if((!G__26403.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__26403);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__26403);
}
})()){
return cljs.core.deref.call(null,p1__26401_SHARP_);
} else {
return p1__26401_SHARP_;
}
}),xs);
});
rum.cursored = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transfer-state","transfer-state",-947550242),(function (old,new$){
return cljs.core.assoc.call(null,new$,new cljs.core.Keyword("rum","om-args","rum/om-args",-1682450907),new cljs.core.Keyword("rum","om-args","rum/om-args",-1682450907).cljs$core$IFn$_invoke$arity$1(old));
}),new cljs.core.Keyword(null,"should-update","should-update",-1292781795),(function (old_state,new_state){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("rum","om-args","rum/om-args",-1682450907).cljs$core$IFn$_invoke$arity$1(old_state),rum.deref_args.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(new_state)));
}),new cljs.core.Keyword(null,"wrap-render","wrap-render",1782000986),(function (render_fn){
return (function (state){
var vec__26404 = render_fn.call(null,state);
var dom = cljs.core.nth.call(null,vec__26404,(0),null);
var next_state = cljs.core.nth.call(null,vec__26404,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dom,cljs.core.assoc.call(null,next_state,new cljs.core.Keyword("rum","om-args","rum/om-args",-1682450907),rum.deref_args.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state)))], null);
});
})], null);
rum.cursored_key = (function cursored_key(state){
return [cljs.core.str(":rum/cursored-"),cljs.core.str(new cljs.core.Keyword("rum","id","rum/id",-1388417078).cljs$core$IFn$_invoke$arity$1(state))].join('');
});
rum.cursored_watch = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"did-mount","did-mount",918232960),(function (state){
var seq__26405_26421 = cljs.core.seq.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var chunk__26407_26422 = null;
var count__26408_26423 = (0);
var i__26409_26424 = (0);
while(true){
if((i__26409_26424 < count__26408_26423)){
var arg_26425 = cljs.core._nth.call(null,chunk__26407_26422,i__26409_26424);
if((function (){var G__26411 = arg_26425;
if(G__26411){
var bit__13454__auto__ = (G__26411.cljs$lang$protocol_mask$partition1$ & (2));
if((bit__13454__auto__) || (G__26411.cljs$core$IWatchable$)){
return true;
} else {
if((!G__26411.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,G__26411);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,G__26411);
}
})()){
cljs.core.add_watch.call(null,arg_26425,rum.cursored_key.call(null,state),((function (seq__26405_26421,chunk__26407_26422,count__26408_26423,i__26409_26424,arg_26425){
return (function (_,___$1,___$2,___$3){
return rum.request_render.call(null,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});})(seq__26405_26421,chunk__26407_26422,count__26408_26423,i__26409_26424,arg_26425))
);

var G__26426 = seq__26405_26421;
var G__26427 = chunk__26407_26422;
var G__26428 = count__26408_26423;
var G__26429 = (i__26409_26424 + (1));
seq__26405_26421 = G__26426;
chunk__26407_26422 = G__26427;
count__26408_26423 = G__26428;
i__26409_26424 = G__26429;
continue;
} else {
var G__26430 = seq__26405_26421;
var G__26431 = chunk__26407_26422;
var G__26432 = count__26408_26423;
var G__26433 = (i__26409_26424 + (1));
seq__26405_26421 = G__26430;
chunk__26407_26422 = G__26431;
count__26408_26423 = G__26432;
i__26409_26424 = G__26433;
continue;
}
} else {
var temp__4126__auto___26434 = cljs.core.seq.call(null,seq__26405_26421);
if(temp__4126__auto___26434){
var seq__26405_26435__$1 = temp__4126__auto___26434;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26405_26435__$1)){
var c__13560__auto___26436 = cljs.core.chunk_first.call(null,seq__26405_26435__$1);
var G__26437 = cljs.core.chunk_rest.call(null,seq__26405_26435__$1);
var G__26438 = c__13560__auto___26436;
var G__26439 = cljs.core.count.call(null,c__13560__auto___26436);
var G__26440 = (0);
seq__26405_26421 = G__26437;
chunk__26407_26422 = G__26438;
count__26408_26423 = G__26439;
i__26409_26424 = G__26440;
continue;
} else {
var arg_26441 = cljs.core.first.call(null,seq__26405_26435__$1);
if((function (){var G__26412 = arg_26441;
if(G__26412){
var bit__13454__auto__ = (G__26412.cljs$lang$protocol_mask$partition1$ & (2));
if((bit__13454__auto__) || (G__26412.cljs$core$IWatchable$)){
return true;
} else {
if((!G__26412.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,G__26412);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,G__26412);
}
})()){
cljs.core.add_watch.call(null,arg_26441,rum.cursored_key.call(null,state),((function (seq__26405_26421,chunk__26407_26422,count__26408_26423,i__26409_26424,arg_26441,seq__26405_26435__$1,temp__4126__auto___26434){
return (function (_,___$1,___$2,___$3){
return rum.request_render.call(null,new cljs.core.Keyword("rum","react-component","rum/react-component",-1879897248).cljs$core$IFn$_invoke$arity$1(state));
});})(seq__26405_26421,chunk__26407_26422,count__26408_26423,i__26409_26424,arg_26441,seq__26405_26435__$1,temp__4126__auto___26434))
);

var G__26442 = cljs.core.next.call(null,seq__26405_26435__$1);
var G__26443 = null;
var G__26444 = (0);
var G__26445 = (0);
seq__26405_26421 = G__26442;
chunk__26407_26422 = G__26443;
count__26408_26423 = G__26444;
i__26409_26424 = G__26445;
continue;
} else {
var G__26446 = cljs.core.next.call(null,seq__26405_26435__$1);
var G__26447 = null;
var G__26448 = (0);
var G__26449 = (0);
seq__26405_26421 = G__26446;
chunk__26407_26422 = G__26447;
count__26408_26423 = G__26448;
i__26409_26424 = G__26449;
continue;
}
}
} else {
}
}
break;
}

return state;
}),new cljs.core.Keyword(null,"will-unmount","will-unmount",-808051550),(function (state){
var seq__26413_26450 = cljs.core.seq.call(null,new cljs.core.Keyword("rum","args","rum/args",1315791754).cljs$core$IFn$_invoke$arity$1(state));
var chunk__26415_26451 = null;
var count__26416_26452 = (0);
var i__26417_26453 = (0);
while(true){
if((i__26417_26453 < count__26416_26452)){
var arg_26454 = cljs.core._nth.call(null,chunk__26415_26451,i__26417_26453);
if((function (){var G__26419 = arg_26454;
if(G__26419){
var bit__13454__auto__ = (G__26419.cljs$lang$protocol_mask$partition1$ & (2));
if((bit__13454__auto__) || (G__26419.cljs$core$IWatchable$)){
return true;
} else {
if((!G__26419.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,G__26419);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,G__26419);
}
})()){
cljs.core.remove_watch.call(null,arg_26454,rum.cursored_key.call(null,state));

var G__26455 = seq__26413_26450;
var G__26456 = chunk__26415_26451;
var G__26457 = count__26416_26452;
var G__26458 = (i__26417_26453 + (1));
seq__26413_26450 = G__26455;
chunk__26415_26451 = G__26456;
count__26416_26452 = G__26457;
i__26417_26453 = G__26458;
continue;
} else {
var G__26459 = seq__26413_26450;
var G__26460 = chunk__26415_26451;
var G__26461 = count__26416_26452;
var G__26462 = (i__26417_26453 + (1));
seq__26413_26450 = G__26459;
chunk__26415_26451 = G__26460;
count__26416_26452 = G__26461;
i__26417_26453 = G__26462;
continue;
}
} else {
var temp__4126__auto___26463 = cljs.core.seq.call(null,seq__26413_26450);
if(temp__4126__auto___26463){
var seq__26413_26464__$1 = temp__4126__auto___26463;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26413_26464__$1)){
var c__13560__auto___26465 = cljs.core.chunk_first.call(null,seq__26413_26464__$1);
var G__26466 = cljs.core.chunk_rest.call(null,seq__26413_26464__$1);
var G__26467 = c__13560__auto___26465;
var G__26468 = cljs.core.count.call(null,c__13560__auto___26465);
var G__26469 = (0);
seq__26413_26450 = G__26466;
chunk__26415_26451 = G__26467;
count__26416_26452 = G__26468;
i__26417_26453 = G__26469;
continue;
} else {
var arg_26470 = cljs.core.first.call(null,seq__26413_26464__$1);
if((function (){var G__26420 = arg_26470;
if(G__26420){
var bit__13454__auto__ = (G__26420.cljs$lang$protocol_mask$partition1$ & (2));
if((bit__13454__auto__) || (G__26420.cljs$core$IWatchable$)){
return true;
} else {
if((!G__26420.cljs$lang$protocol_mask$partition1$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,G__26420);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,G__26420);
}
})()){
cljs.core.remove_watch.call(null,arg_26470,rum.cursored_key.call(null,state));

var G__26471 = cljs.core.next.call(null,seq__26413_26464__$1);
var G__26472 = null;
var G__26473 = (0);
var G__26474 = (0);
seq__26413_26450 = G__26471;
chunk__26415_26451 = G__26472;
count__26416_26452 = G__26473;
i__26417_26453 = G__26474;
continue;
} else {
var G__26475 = cljs.core.next.call(null,seq__26413_26464__$1);
var G__26476 = null;
var G__26477 = (0);
var G__26478 = (0);
seq__26413_26450 = G__26475;
chunk__26415_26451 = G__26476;
count__26416_26452 = G__26477;
i__26417_26453 = G__26478;
continue;
}
}
} else {
}
}
break;
}

return state;
})], null);

//# sourceMappingURL=rum.js.map