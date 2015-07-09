// Compiled by ClojureScript 0.0-2665 {}
if(!goog.isProvided_('figwheel.client.heads_up')) {
goog.provide('figwheel.client.heads_up');
}
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('clojure.string');

/**
* @param {...*} var_args
*/
figwheel.client.heads_up.node = (function() { 
var node__delegate = function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__31320_31328 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__31321_31329 = null;
var count__31322_31330 = (0);
var i__31323_31331 = (0);
while(true){
if((i__31323_31331 < count__31322_31330)){
var k_31332 = cljs.core._nth.call(null,chunk__31321_31329,i__31323_31331);
e.setAttribute(cljs.core.name.call(null,k_31332),cljs.core.get.call(null,attrs,k_31332));

var G__31333 = seq__31320_31328;
var G__31334 = chunk__31321_31329;
var G__31335 = count__31322_31330;
var G__31336 = (i__31323_31331 + (1));
seq__31320_31328 = G__31333;
chunk__31321_31329 = G__31334;
count__31322_31330 = G__31335;
i__31323_31331 = G__31336;
continue;
} else {
var temp__4126__auto___31337 = cljs.core.seq.call(null,seq__31320_31328);
if(temp__4126__auto___31337){
var seq__31320_31338__$1 = temp__4126__auto___31337;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31320_31338__$1)){
var c__13560__auto___31339 = cljs.core.chunk_first.call(null,seq__31320_31338__$1);
var G__31340 = cljs.core.chunk_rest.call(null,seq__31320_31338__$1);
var G__31341 = c__13560__auto___31339;
var G__31342 = cljs.core.count.call(null,c__13560__auto___31339);
var G__31343 = (0);
seq__31320_31328 = G__31340;
chunk__31321_31329 = G__31341;
count__31322_31330 = G__31342;
i__31323_31331 = G__31343;
continue;
} else {
var k_31344 = cljs.core.first.call(null,seq__31320_31338__$1);
e.setAttribute(cljs.core.name.call(null,k_31344),cljs.core.get.call(null,attrs,k_31344));

var G__31345 = cljs.core.next.call(null,seq__31320_31338__$1);
var G__31346 = null;
var G__31347 = (0);
var G__31348 = (0);
seq__31320_31328 = G__31345;
chunk__31321_31329 = G__31346;
count__31322_31330 = G__31347;
i__31323_31331 = G__31348;
continue;
}
} else {
}
}
break;
}

var seq__31324_31349 = cljs.core.seq.call(null,children);
var chunk__31325_31350 = null;
var count__31326_31351 = (0);
var i__31327_31352 = (0);
while(true){
if((i__31327_31352 < count__31326_31351)){
var ch_31353 = cljs.core._nth.call(null,chunk__31325_31350,i__31327_31352);
e.appendChild(ch_31353);

var G__31354 = seq__31324_31349;
var G__31355 = chunk__31325_31350;
var G__31356 = count__31326_31351;
var G__31357 = (i__31327_31352 + (1));
seq__31324_31349 = G__31354;
chunk__31325_31350 = G__31355;
count__31326_31351 = G__31356;
i__31327_31352 = G__31357;
continue;
} else {
var temp__4126__auto___31358 = cljs.core.seq.call(null,seq__31324_31349);
if(temp__4126__auto___31358){
var seq__31324_31359__$1 = temp__4126__auto___31358;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31324_31359__$1)){
var c__13560__auto___31360 = cljs.core.chunk_first.call(null,seq__31324_31359__$1);
var G__31361 = cljs.core.chunk_rest.call(null,seq__31324_31359__$1);
var G__31362 = c__13560__auto___31360;
var G__31363 = cljs.core.count.call(null,c__13560__auto___31360);
var G__31364 = (0);
seq__31324_31349 = G__31361;
chunk__31325_31350 = G__31362;
count__31326_31351 = G__31363;
i__31327_31352 = G__31364;
continue;
} else {
var ch_31365 = cljs.core.first.call(null,seq__31324_31359__$1);
e.appendChild(ch_31365);

var G__31366 = cljs.core.next.call(null,seq__31324_31359__$1);
var G__31367 = null;
var G__31368 = (0);
var G__31369 = (0);
seq__31324_31349 = G__31366;
chunk__31325_31350 = G__31367;
count__31326_31351 = G__31368;
i__31327_31352 = G__31369;
continue;
}
} else {
}
}
break;
}

return e;
};
var node = function (t,attrs,var_args){
var children = null;
if (arguments.length > 2) {
var G__31370__i = 0, G__31370__a = new Array(arguments.length -  2);
while (G__31370__i < G__31370__a.length) {G__31370__a[G__31370__i] = arguments[G__31370__i + 2]; ++G__31370__i;}
  children = new cljs.core.IndexedSeq(G__31370__a,0);
} 
return node__delegate.call(this,t,attrs,children);};
node.cljs$lang$maxFixedArity = 2;
node.cljs$lang$applyTo = (function (arglist__31371){
var t = cljs.core.first(arglist__31371);
arglist__31371 = cljs.core.next(arglist__31371);
var attrs = cljs.core.first(arglist__31371);
var children = cljs.core.rest(arglist__31371);
return node__delegate(t,attrs,children);
});
node.cljs$core$IFn$_invoke$arity$variadic = node__delegate;
return node;
})()
;
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__13670__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__13671__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__13672__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__13673__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__13674__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__13670__auto__,prefer_table__13671__auto__,method_cache__13672__auto__,cached_hierarchy__13673__auto__,hierarchy__13674__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__13670__auto__,prefer_table__13671__auto__,method_cache__13672__auto__,cached_hierarchy__13673__auto__,hierarchy__13674__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__13674__auto__,method_table__13670__auto__,prefer_table__13671__auto__,method_cache__13672__auto__,cached_hierarchy__13673__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

return document.body.appendChild(el);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
}
});
figwheel.client.heads_up.set_style_BANG_ = (function set_style_BANG_(p__31372,st_map){
var map__31376 = p__31372;
var map__31376__$1 = ((cljs.core.seq_QMARK_.call(null,map__31376))?cljs.core.apply.call(null,cljs.core.hash_map,map__31376):map__31376);
var container_el = cljs.core.get.call(null,map__31376__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__31376,map__31376__$1,container_el){
return (function (p__31377){
var vec__31378 = p__31377;
var k = cljs.core.nth.call(null,vec__31378,(0),null);
var v = cljs.core.nth.call(null,vec__31378,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__31376,map__31376__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function set_content_BANG_(p__31379,dom_str){
var map__31381 = p__31379;
var map__31381__$1 = ((cljs.core.seq_QMARK_.call(null,map__31381))?cljs.core.apply.call(null,cljs.core.hash_map,map__31381):map__31381);
var c = map__31381__$1;
var content_area_el = cljs.core.get.call(null,map__31381__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function get_content(p__31382){
var map__31384 = p__31382;
var map__31384__$1 = ((cljs.core.seq_QMARK_.call(null,map__31384))?cljs.core.apply.call(null,cljs.core.hash_map,map__31384):map__31384);
var content_area_el = cljs.core.get.call(null,map__31384__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function display_heads_up(style,msg){
var c__16465__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16465__auto__){
return (function (){
var f__16466__auto__ = (function (){var switch__16450__auto__ = ((function (c__16465__auto__){
return (function (state_31426){
var state_val_31427 = (state_31426[(1)]);
if((state_val_31427 === (2))){
var inst_31411 = (state_31426[(7)]);
var inst_31420 = (state_31426[(2)]);
var inst_31421 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_31422 = ["auto"];
var inst_31423 = cljs.core.PersistentHashMap.fromArrays(inst_31421,inst_31422);
var inst_31424 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_31411,inst_31423);
var state_31426__$1 = (function (){var statearr_31428 = state_31426;
(statearr_31428[(8)] = inst_31420);

return statearr_31428;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31426__$1,inst_31424);
} else {
if((state_val_31427 === (1))){
var inst_31411 = (state_31426[(7)]);
var inst_31411__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_31412 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_31413 = ["10px","10px","100%","68px","1.0"];
var inst_31414 = cljs.core.PersistentHashMap.fromArrays(inst_31412,inst_31413);
var inst_31415 = cljs.core.merge.call(null,inst_31414,style);
var inst_31416 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_31411__$1,inst_31415);
var inst_31417 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_31411__$1,msg);
var inst_31418 = cljs.core.async.timeout.call(null,(300));
var state_31426__$1 = (function (){var statearr_31429 = state_31426;
(statearr_31429[(9)] = inst_31417);

(statearr_31429[(10)] = inst_31416);

(statearr_31429[(7)] = inst_31411__$1);

return statearr_31429;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31426__$1,(2),inst_31418);
} else {
return null;
}
}
});})(c__16465__auto__))
;
return ((function (switch__16450__auto__,c__16465__auto__){
return (function() {
var state_machine__16451__auto__ = null;
var state_machine__16451__auto____0 = (function (){
var statearr_31433 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31433[(0)] = state_machine__16451__auto__);

(statearr_31433[(1)] = (1));

return statearr_31433;
});
var state_machine__16451__auto____1 = (function (state_31426){
while(true){
var ret_value__16452__auto__ = (function (){try{while(true){
var result__16453__auto__ = switch__16450__auto__.call(null,state_31426);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16453__auto__;
}
break;
}
}catch (e31434){if((e31434 instanceof Object)){
var ex__16454__auto__ = e31434;
var statearr_31435_31437 = state_31426;
(statearr_31435_31437[(5)] = ex__16454__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31426);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31434;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31438 = state_31426;
state_31426 = G__31438;
continue;
} else {
return ret_value__16452__auto__;
}
break;
}
});
state_machine__16451__auto__ = function(state_31426){
switch(arguments.length){
case 0:
return state_machine__16451__auto____0.call(this);
case 1:
return state_machine__16451__auto____1.call(this,state_31426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16451__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16451__auto____0;
state_machine__16451__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16451__auto____1;
return state_machine__16451__auto__;
})()
;})(switch__16450__auto__,c__16465__auto__))
})();
var state__16467__auto__ = (function (){var statearr_31436 = f__16466__auto__.call(null);
(statearr_31436[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16465__auto__);

return statearr_31436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16467__auto__);
});})(c__16465__auto__))
);

return c__16465__auto__;
});
figwheel.client.heads_up.heading = (function heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function format_line(msg){
var temp__4124__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__31440 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__31440,(0),null);
var ln = cljs.core.nth.call(null,vec__31440,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function display_error(formatted_messages){
var vec__31443 = cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages));
var file_name = cljs.core.nth.call(null,vec__31443,(0),null);
var file_line = cljs.core.nth.call(null,vec__31443,(1),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__31443,file_name,file_line){
return (function (p1__31441_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__31441_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__31443,file_name,file_line))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,file_line,msg))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function append_message(message){
var map__31445 = figwheel.client.heads_up.ensure_container.call(null);
var map__31445__$1 = ((cljs.core.seq_QMARK_.call(null,map__31445))?cljs.core.apply.call(null,cljs.core.hash_map,map__31445):map__31445);
var content_area_el = cljs.core.get.call(null,map__31445__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function clear(){
var c__16465__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16465__auto__){
return (function (){
var f__16466__auto__ = (function (){var switch__16450__auto__ = ((function (c__16465__auto__){
return (function (state_31492){
var state_val_31493 = (state_31492[(1)]);
if((state_val_31493 === (3))){
var inst_31475 = (state_31492[(7)]);
var inst_31489 = (state_31492[(2)]);
var inst_31490 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_31475,"");
var state_31492__$1 = (function (){var statearr_31494 = state_31492;
(statearr_31494[(8)] = inst_31489);

return statearr_31494;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31492__$1,inst_31490);
} else {
if((state_val_31493 === (2))){
var inst_31475 = (state_31492[(7)]);
var inst_31482 = (state_31492[(2)]);
var inst_31483 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_31484 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_31485 = cljs.core.PersistentHashMap.fromArrays(inst_31483,inst_31484);
var inst_31486 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_31475,inst_31485);
var inst_31487 = cljs.core.async.timeout.call(null,(200));
var state_31492__$1 = (function (){var statearr_31495 = state_31492;
(statearr_31495[(9)] = inst_31486);

(statearr_31495[(10)] = inst_31482);

return statearr_31495;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31492__$1,(3),inst_31487);
} else {
if((state_val_31493 === (1))){
var inst_31475 = (state_31492[(7)]);
var inst_31475__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_31476 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_31477 = ["0.0"];
var inst_31478 = cljs.core.PersistentHashMap.fromArrays(inst_31476,inst_31477);
var inst_31479 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_31475__$1,inst_31478);
var inst_31480 = cljs.core.async.timeout.call(null,(300));
var state_31492__$1 = (function (){var statearr_31496 = state_31492;
(statearr_31496[(7)] = inst_31475__$1);

(statearr_31496[(11)] = inst_31479);

return statearr_31496;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31492__$1,(2),inst_31480);
} else {
return null;
}
}
}
});})(c__16465__auto__))
;
return ((function (switch__16450__auto__,c__16465__auto__){
return (function() {
var state_machine__16451__auto__ = null;
var state_machine__16451__auto____0 = (function (){
var statearr_31500 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31500[(0)] = state_machine__16451__auto__);

(statearr_31500[(1)] = (1));

return statearr_31500;
});
var state_machine__16451__auto____1 = (function (state_31492){
while(true){
var ret_value__16452__auto__ = (function (){try{while(true){
var result__16453__auto__ = switch__16450__auto__.call(null,state_31492);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16453__auto__;
}
break;
}
}catch (e31501){if((e31501 instanceof Object)){
var ex__16454__auto__ = e31501;
var statearr_31502_31504 = state_31492;
(statearr_31502_31504[(5)] = ex__16454__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31492);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31501;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31505 = state_31492;
state_31492 = G__31505;
continue;
} else {
return ret_value__16452__auto__;
}
break;
}
});
state_machine__16451__auto__ = function(state_31492){
switch(arguments.length){
case 0:
return state_machine__16451__auto____0.call(this);
case 1:
return state_machine__16451__auto____1.call(this,state_31492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16451__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16451__auto____0;
state_machine__16451__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16451__auto____1;
return state_machine__16451__auto__;
})()
;})(switch__16450__auto__,c__16465__auto__))
})();
var state__16467__auto__ = (function (){var statearr_31503 = f__16466__auto__.call(null);
(statearr_31503[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16465__auto__);

return statearr_31503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16467__auto__);
});})(c__16465__auto__))
);

return c__16465__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function flash_loaded(){
var c__16465__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16465__auto__){
return (function (){
var f__16466__auto__ = (function (){var switch__16450__auto__ = ((function (c__16465__auto__){
return (function (state_31537){
var state_val_31538 = (state_31537[(1)]);
if((state_val_31538 === (4))){
var inst_31535 = (state_31537[(2)]);
var state_31537__$1 = state_31537;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31537__$1,inst_31535);
} else {
if((state_val_31538 === (3))){
var inst_31532 = (state_31537[(2)]);
var inst_31533 = figwheel.client.heads_up.clear.call(null);
var state_31537__$1 = (function (){var statearr_31539 = state_31537;
(statearr_31539[(7)] = inst_31532);

return statearr_31539;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31537__$1,(4),inst_31533);
} else {
if((state_val_31538 === (2))){
var inst_31529 = (state_31537[(2)]);
var inst_31530 = cljs.core.async.timeout.call(null,(400));
var state_31537__$1 = (function (){var statearr_31540 = state_31537;
(statearr_31540[(8)] = inst_31529);

return statearr_31540;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31537__$1,(3),inst_31530);
} else {
if((state_val_31538 === (1))){
var inst_31527 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_31537__$1 = state_31537;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31537__$1,(2),inst_31527);
} else {
return null;
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
var statearr_31544 = [null,null,null,null,null,null,null,null,null];
(statearr_31544[(0)] = state_machine__16451__auto__);

(statearr_31544[(1)] = (1));

return statearr_31544;
});
var state_machine__16451__auto____1 = (function (state_31537){
while(true){
var ret_value__16452__auto__ = (function (){try{while(true){
var result__16453__auto__ = switch__16450__auto__.call(null,state_31537);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16453__auto__;
}
break;
}
}catch (e31545){if((e31545 instanceof Object)){
var ex__16454__auto__ = e31545;
var statearr_31546_31548 = state_31537;
(statearr_31546_31548[(5)] = ex__16454__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31537);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31545;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31549 = state_31537;
state_31537 = G__31549;
continue;
} else {
return ret_value__16452__auto__;
}
break;
}
});
state_machine__16451__auto__ = function(state_31537){
switch(arguments.length){
case 0:
return state_machine__16451__auto____0.call(this);
case 1:
return state_machine__16451__auto____1.call(this,state_31537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16451__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16451__auto____0;
state_machine__16451__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16451__auto____1;
return state_machine__16451__auto__;
})()
;})(switch__16450__auto__,c__16465__auto__))
})();
var state__16467__auto__ = (function (){var statearr_31547 = f__16466__auto__.call(null);
(statearr_31547[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16465__auto__);

return statearr_31547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16467__auto__);
});})(c__16465__auto__))
);

return c__16465__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map