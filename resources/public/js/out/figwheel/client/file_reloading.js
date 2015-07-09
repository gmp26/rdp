// Compiled by ClojureScript 0.0-2665 {}
if(!goog.isProvided_('figwheel.client.file_reloading')) {
goog.provide('figwheel.client.file_reloading');
}
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('goog.net.jsloader');
goog.require('goog.string');
goog.require('goog.Uri');
figwheel.client.file_reloading.add_cache_buster = (function add_cache_buster(url){
return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.reload_host = (function reload_host(p__31551){
var map__31553 = p__31551;
var map__31553__$1 = ((cljs.core.seq_QMARK_.call(null,map__31553))?cljs.core.apply.call(null,cljs.core.hash_map,map__31553):map__31553);
var websocket_url = cljs.core.get.call(null,map__31553__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));
return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^wss?:/,""),/^\/\//,""),/\//));
});
if(typeof figwheel.client.file_reloading.ns_meta_data !== 'undefined'){
} else {
figwheel.client.file_reloading.ns_meta_data = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.get_meta_data_for_ns = (function get_meta_data_for_ns(ns){
return cljs.core.get.call(null,figwheel.client.file_reloading.ns_meta_data,ns);
});
figwheel.client.file_reloading.resolve_ns = (function resolve_ns(ns){
return [cljs.core.str(clojure.string.replace_first.call(null,goog.basePath,"/goog","")),cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.js_reload = (function js_reload(p__31554,callback){
var map__31556 = p__31554;
var map__31556__$1 = ((cljs.core.seq_QMARK_.call(null,map__31556))?cljs.core.apply.call(null,cljs.core.hash_map,map__31556):map__31556);
var msg = map__31556__$1;
var meta_data = cljs.core.get.call(null,map__31556__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var dependency_file = cljs.core.get.call(null,map__31556__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));
var namespace = cljs.core.get.call(null,map__31556__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__31556__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.ns_meta_data,cljs.core.assoc,namespace,meta_data);

if(cljs.core.truth_((function (){var and__12761__auto__ = (function (){var or__12773__auto__ = dependency_file;
if(cljs.core.truth_(or__12773__auto__)){
return or__12773__auto__;
} else {
var or__12773__auto____$1 = (function (){var and__12761__auto__ = meta_data;
if(cljs.core.truth_(and__12761__auto__)){
return new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data);
} else {
return and__12761__auto__;
}
})();
if(cljs.core.truth_(or__12773__auto____$1)){
return or__12773__auto____$1;
} else {
return goog.isProvided_(cljs.core.name.call(null,namespace));
}
}
})();
if(cljs.core.truth_(and__12761__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1((function (){var or__12773__auto__ = meta_data;
if(cljs.core.truth_(or__12773__auto__)){
return or__12773__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()));
} else {
return and__12761__auto__;
}
})())){
return goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true}).addCallback(((function (map__31556,map__31556__$1,msg,meta_data,dependency_file,namespace,request_url){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
});})(map__31556,map__31556__$1,msg,meta_data,dependency_file,namespace,request_url))
);
} else {
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(10));

return out;
});
/**
* Returns a chanel with one collection of loaded filenames on it.
*/
figwheel.client.file_reloading.load_all_js_files = (function load_all_js_files(files){
return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.call(null,cljs.core.identity,cljs.core.async.merge.call(null,cljs.core.mapv.call(null,figwheel.client.file_reloading.reload_js_file,files))));
});
figwheel.client.file_reloading.add_request_url = (function add_request_url(p__31557,p__31558){
var map__31561 = p__31557;
var map__31561__$1 = ((cljs.core.seq_QMARK_.call(null,map__31561))?cljs.core.apply.call(null,cljs.core.hash_map,map__31561):map__31561);
var opts = map__31561__$1;
var url_rewriter = cljs.core.get.call(null,map__31561__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__31562 = p__31558;
var map__31562__$1 = ((cljs.core.seq_QMARK_.call(null,map__31562))?cljs.core.apply.call(null,cljs.core.hash_map,map__31562):map__31562);
var d = map__31562__$1;
var file = cljs.core.get.call(null,map__31562__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,[cljs.core.str("//"),cljs.core.str(figwheel.client.file_reloading.reload_host.call(null,opts)),cljs.core.str(file)].join('')));
});
figwheel.client.file_reloading.add_request_urls = (function add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.reload_js_files = (function reload_js_files(p__31564,p__31565){
var map__31619 = p__31564;
var map__31619__$1 = ((cljs.core.seq_QMARK_.call(null,map__31619))?cljs.core.apply.call(null,cljs.core.hash_map,map__31619):map__31619);
var opts = map__31619__$1;
var on_jsload = cljs.core.get.call(null,map__31619__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__31619__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__31620 = p__31565;
var map__31620__$1 = ((cljs.core.seq_QMARK_.call(null,map__31620))?cljs.core.apply.call(null,cljs.core.hash_map,map__31620):map__31620);
var msg = map__31620__$1;
var files = cljs.core.get.call(null,map__31620__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__16465__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16465__auto__,map__31619,map__31619__$1,opts,on_jsload,before_jsload,map__31620,map__31620__$1,msg,files){
return (function (){
var f__16466__auto__ = (function (){var switch__16450__auto__ = ((function (c__16465__auto__,map__31619,map__31619__$1,opts,on_jsload,before_jsload,map__31620,map__31620__$1,msg,files){
return (function (state_31650){
var state_val_31651 = (state_31650[(1)]);
if((state_val_31651 === (8))){
var inst_31648 = (state_31650[(2)]);
var state_31650__$1 = state_31650;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31650__$1,inst_31648);
} else {
if((state_val_31651 === (7))){
var state_31650__$1 = state_31650;
var statearr_31652_31672 = state_31650__$1;
(statearr_31652_31672[(2)] = null);

(statearr_31652_31672[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31651 === (6))){
var inst_31628 = (state_31650[(7)]);
var inst_31642 = console.debug("Figwheel: NOT loading files that haven't been required");
var inst_31643 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31628);
var inst_31644 = cljs.core.pr_str.call(null,inst_31643);
var inst_31645 = console.log("not required:",inst_31644);
var state_31650__$1 = (function (){var statearr_31653 = state_31650;
(statearr_31653[(8)] = inst_31642);

return statearr_31653;
})();
var statearr_31654_31673 = state_31650__$1;
(statearr_31654_31673[(2)] = inst_31645);

(statearr_31654_31673[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31651 === (5))){
var inst_31628 = (state_31650[(7)]);
var inst_31639 = (state_31650[(2)]);
var inst_31640 = cljs.core.not_empty.call(null,inst_31628);
var state_31650__$1 = (function (){var statearr_31655 = state_31650;
(statearr_31655[(9)] = inst_31639);

return statearr_31655;
})();
if(cljs.core.truth_(inst_31640)){
var statearr_31656_31674 = state_31650__$1;
(statearr_31656_31674[(1)] = (6));

} else {
var statearr_31657_31675 = state_31650__$1;
(statearr_31657_31675[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31651 === (4))){
var state_31650__$1 = state_31650;
var statearr_31658_31676 = state_31650__$1;
(statearr_31658_31676[(2)] = null);

(statearr_31658_31676[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31651 === (3))){
var inst_31622 = (state_31650[(10)]);
var inst_31628 = (state_31650[(7)]);
var inst_31625 = (state_31650[(11)]);
var inst_31626 = (state_31650[(12)]);
var inst_31631 = console.debug("Figwheel: loaded these files");
var inst_31632 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31626);
var inst_31633 = cljs.core.pr_str.call(null,inst_31632);
var inst_31634 = console.log(inst_31633);
var inst_31635 = (function (){var files_not_loaded = inst_31628;
var res = inst_31626;
var res_SINGLEQUOTE_ = inst_31625;
var files_SINGLEQUOTE_ = inst_31622;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,inst_31622,inst_31628,inst_31625,inst_31626,inst_31631,inst_31632,inst_31633,inst_31634,state_val_31651,c__16465__auto__,map__31619,map__31619__$1,opts,on_jsload,before_jsload,map__31620,map__31620__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,inst_31622,inst_31628,inst_31625,inst_31626,inst_31631,inst_31632,inst_31633,inst_31634,state_val_31651,c__16465__auto__,map__31619,map__31619__$1,opts,on_jsload,before_jsload,map__31620,map__31620__$1,msg,files))
})();
var inst_31636 = setTimeout(inst_31635,(10));
var state_31650__$1 = (function (){var statearr_31659 = state_31650;
(statearr_31659[(13)] = inst_31631);

(statearr_31659[(14)] = inst_31634);

return statearr_31659;
})();
var statearr_31660_31677 = state_31650__$1;
(statearr_31660_31677[(2)] = inst_31636);

(statearr_31660_31677[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31651 === (2))){
var inst_31622 = (state_31650[(10)]);
var inst_31625 = (state_31650[(11)]);
var inst_31626 = (state_31650[(12)]);
var inst_31625__$1 = (state_31650[(2)]);
var inst_31626__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31625__$1);
var inst_31627 = (function (){var res = inst_31626__$1;
var res_SINGLEQUOTE_ = inst_31625__$1;
var files_SINGLEQUOTE_ = inst_31622;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,inst_31622,inst_31625,inst_31626,inst_31625__$1,inst_31626__$1,state_val_31651,c__16465__auto__,map__31619,map__31619__$1,opts,on_jsload,before_jsload,map__31620,map__31620__$1,msg,files){
return (function (p1__31563_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__31563_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,inst_31622,inst_31625,inst_31626,inst_31625__$1,inst_31626__$1,state_val_31651,c__16465__auto__,map__31619,map__31619__$1,opts,on_jsload,before_jsload,map__31620,map__31620__$1,msg,files))
})();
var inst_31628 = cljs.core.filter.call(null,inst_31627,inst_31625__$1);
var inst_31629 = cljs.core.not_empty.call(null,inst_31626__$1);
var state_31650__$1 = (function (){var statearr_31661 = state_31650;
(statearr_31661[(7)] = inst_31628);

(statearr_31661[(11)] = inst_31625__$1);

(statearr_31661[(12)] = inst_31626__$1);

return statearr_31661;
})();
if(cljs.core.truth_(inst_31629)){
var statearr_31662_31678 = state_31650__$1;
(statearr_31662_31678[(1)] = (3));

} else {
var statearr_31663_31679 = state_31650__$1;
(statearr_31663_31679[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31651 === (1))){
var inst_31622 = (state_31650[(10)]);
var inst_31621 = before_jsload.call(null,files);
var inst_31622__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,files);
var inst_31623 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_31622__$1);
var state_31650__$1 = (function (){var statearr_31664 = state_31650;
(statearr_31664[(15)] = inst_31621);

(statearr_31664[(10)] = inst_31622__$1);

return statearr_31664;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31650__$1,(2),inst_31623);
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
});})(c__16465__auto__,map__31619,map__31619__$1,opts,on_jsload,before_jsload,map__31620,map__31620__$1,msg,files))
;
return ((function (switch__16450__auto__,c__16465__auto__,map__31619,map__31619__$1,opts,on_jsload,before_jsload,map__31620,map__31620__$1,msg,files){
return (function() {
var state_machine__16451__auto__ = null;
var state_machine__16451__auto____0 = (function (){
var statearr_31668 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31668[(0)] = state_machine__16451__auto__);

(statearr_31668[(1)] = (1));

return statearr_31668;
});
var state_machine__16451__auto____1 = (function (state_31650){
while(true){
var ret_value__16452__auto__ = (function (){try{while(true){
var result__16453__auto__ = switch__16450__auto__.call(null,state_31650);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16453__auto__;
}
break;
}
}catch (e31669){if((e31669 instanceof Object)){
var ex__16454__auto__ = e31669;
var statearr_31670_31680 = state_31650;
(statearr_31670_31680[(5)] = ex__16454__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31650);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31669;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31681 = state_31650;
state_31650 = G__31681;
continue;
} else {
return ret_value__16452__auto__;
}
break;
}
});
state_machine__16451__auto__ = function(state_31650){
switch(arguments.length){
case 0:
return state_machine__16451__auto____0.call(this);
case 1:
return state_machine__16451__auto____1.call(this,state_31650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16451__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16451__auto____0;
state_machine__16451__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16451__auto____1;
return state_machine__16451__auto__;
})()
;})(switch__16450__auto__,c__16465__auto__,map__31619,map__31619__$1,opts,on_jsload,before_jsload,map__31620,map__31620__$1,msg,files))
})();
var state__16467__auto__ = (function (){var statearr_31671 = f__16466__auto__.call(null);
(statearr_31671[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16465__auto__);

return statearr_31671;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16467__auto__);
});})(c__16465__auto__,map__31619,map__31619__$1,opts,on_jsload,before_jsload,map__31620,map__31620__$1,msg,files))
);

return c__16465__auto__;
});
figwheel.client.file_reloading.current_links = (function current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function matches_file_QMARK_(p__31682,link_href){
var map__31684 = p__31682;
var map__31684__$1 = ((cljs.core.seq_QMARK_.call(null,map__31684))?cljs.core.apply.call(null,cljs.core.hash_map,map__31684):map__31684);
var request_url = cljs.core.get.call(null,map__31684__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__31684__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var trunc_href = figwheel.client.file_reloading.truncate_url.call(null,link_href);
return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.file_reloading.truncate_url.call(null,request_url),trunc_href));
});
figwheel.client.file_reloading.get_correct_link = (function get_correct_link(f_data){
return cljs.core.some.call(null,(function (l){
if(figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,l.href)){
return l;
} else {
return null;
}
}),figwheel.client.file_reloading.current_links.call(null));
});
figwheel.client.file_reloading.clone_link = (function clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

var c__16465__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16465__auto__,parent){
return (function (){
var f__16466__auto__ = (function (){var switch__16450__auto__ = ((function (c__16465__auto__,parent){
return (function (state_31705){
var state_val_31706 = (state_31705[(1)]);
if((state_val_31706 === (2))){
var inst_31702 = (state_31705[(2)]);
var inst_31703 = parent.removeChild(orig_link);
var state_31705__$1 = (function (){var statearr_31707 = state_31705;
(statearr_31707[(7)] = inst_31702);

return statearr_31707;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31705__$1,inst_31703);
} else {
if((state_val_31706 === (1))){
var inst_31700 = cljs.core.async.timeout.call(null,(200));
var state_31705__$1 = state_31705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31705__$1,(2),inst_31700);
} else {
return null;
}
}
});})(c__16465__auto__,parent))
;
return ((function (switch__16450__auto__,c__16465__auto__,parent){
return (function() {
var state_machine__16451__auto__ = null;
var state_machine__16451__auto____0 = (function (){
var statearr_31711 = [null,null,null,null,null,null,null,null];
(statearr_31711[(0)] = state_machine__16451__auto__);

(statearr_31711[(1)] = (1));

return statearr_31711;
});
var state_machine__16451__auto____1 = (function (state_31705){
while(true){
var ret_value__16452__auto__ = (function (){try{while(true){
var result__16453__auto__ = switch__16450__auto__.call(null,state_31705);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16453__auto__;
}
break;
}
}catch (e31712){if((e31712 instanceof Object)){
var ex__16454__auto__ = e31712;
var statearr_31713_31715 = state_31705;
(statearr_31713_31715[(5)] = ex__16454__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31705);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31712;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31716 = state_31705;
state_31705 = G__31716;
continue;
} else {
return ret_value__16452__auto__;
}
break;
}
});
state_machine__16451__auto__ = function(state_31705){
switch(arguments.length){
case 0:
return state_machine__16451__auto____0.call(this);
case 1:
return state_machine__16451__auto____1.call(this,state_31705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16451__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16451__auto____0;
state_machine__16451__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16451__auto____1;
return state_machine__16451__auto__;
})()
;})(switch__16450__auto__,c__16465__auto__,parent))
})();
var state__16467__auto__ = (function (){var statearr_31714 = f__16466__auto__.call(null);
(statearr_31714[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16465__auto__);

return statearr_31714;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16467__auto__);
});})(c__16465__auto__,parent))
);

return c__16465__auto__;
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.file_reloading.reload_css_file = (function reload_css_file(p__31717){
var map__31719 = p__31717;
var map__31719__$1 = ((cljs.core.seq_QMARK_.call(null,map__31719))?cljs.core.apply.call(null,cljs.core.hash_map,map__31719):map__31719);
var f_data = map__31719__$1;
var request_url = cljs.core.get.call(null,map__31719__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__31719__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,request_url));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,request_url));
}
});
figwheel.client.file_reloading.reload_css_files = (function reload_css_files(p__31720,files_msg){
var map__31742 = p__31720;
var map__31742__$1 = ((cljs.core.seq_QMARK_.call(null,map__31742))?cljs.core.apply.call(null,cljs.core.hash_map,map__31742):map__31742);
var opts = map__31742__$1;
var on_cssload = cljs.core.get.call(null,map__31742__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var seq__31743_31763 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__31744_31764 = null;
var count__31745_31765 = (0);
var i__31746_31766 = (0);
while(true){
if((i__31746_31766 < count__31745_31765)){
var f_31767 = cljs.core._nth.call(null,chunk__31744_31764,i__31746_31766);
figwheel.client.file_reloading.reload_css_file.call(null,f_31767);

var G__31768 = seq__31743_31763;
var G__31769 = chunk__31744_31764;
var G__31770 = count__31745_31765;
var G__31771 = (i__31746_31766 + (1));
seq__31743_31763 = G__31768;
chunk__31744_31764 = G__31769;
count__31745_31765 = G__31770;
i__31746_31766 = G__31771;
continue;
} else {
var temp__4126__auto___31772 = cljs.core.seq.call(null,seq__31743_31763);
if(temp__4126__auto___31772){
var seq__31743_31773__$1 = temp__4126__auto___31772;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31743_31773__$1)){
var c__13560__auto___31774 = cljs.core.chunk_first.call(null,seq__31743_31773__$1);
var G__31775 = cljs.core.chunk_rest.call(null,seq__31743_31773__$1);
var G__31776 = c__13560__auto___31774;
var G__31777 = cljs.core.count.call(null,c__13560__auto___31774);
var G__31778 = (0);
seq__31743_31763 = G__31775;
chunk__31744_31764 = G__31776;
count__31745_31765 = G__31777;
i__31746_31766 = G__31778;
continue;
} else {
var f_31779 = cljs.core.first.call(null,seq__31743_31773__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_31779);

var G__31780 = cljs.core.next.call(null,seq__31743_31773__$1);
var G__31781 = null;
var G__31782 = (0);
var G__31783 = (0);
seq__31743_31763 = G__31780;
chunk__31744_31764 = G__31781;
count__31745_31765 = G__31782;
i__31746_31766 = G__31783;
continue;
}
} else {
}
}
break;
}

var c__16465__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16465__auto__,map__31742,map__31742__$1,opts,on_cssload){
return (function (){
var f__16466__auto__ = (function (){var switch__16450__auto__ = ((function (c__16465__auto__,map__31742,map__31742__$1,opts,on_cssload){
return (function (state_31753){
var state_val_31754 = (state_31753[(1)]);
if((state_val_31754 === (2))){
var inst_31749 = (state_31753[(2)]);
var inst_31750 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_31751 = on_cssload.call(null,inst_31750);
var state_31753__$1 = (function (){var statearr_31755 = state_31753;
(statearr_31755[(7)] = inst_31749);

return statearr_31755;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31753__$1,inst_31751);
} else {
if((state_val_31754 === (1))){
var inst_31747 = cljs.core.async.timeout.call(null,(100));
var state_31753__$1 = state_31753;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31753__$1,(2),inst_31747);
} else {
return null;
}
}
});})(c__16465__auto__,map__31742,map__31742__$1,opts,on_cssload))
;
return ((function (switch__16450__auto__,c__16465__auto__,map__31742,map__31742__$1,opts,on_cssload){
return (function() {
var state_machine__16451__auto__ = null;
var state_machine__16451__auto____0 = (function (){
var statearr_31759 = [null,null,null,null,null,null,null,null];
(statearr_31759[(0)] = state_machine__16451__auto__);

(statearr_31759[(1)] = (1));

return statearr_31759;
});
var state_machine__16451__auto____1 = (function (state_31753){
while(true){
var ret_value__16452__auto__ = (function (){try{while(true){
var result__16453__auto__ = switch__16450__auto__.call(null,state_31753);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16453__auto__;
}
break;
}
}catch (e31760){if((e31760 instanceof Object)){
var ex__16454__auto__ = e31760;
var statearr_31761_31784 = state_31753;
(statearr_31761_31784[(5)] = ex__16454__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31753);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31760;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31785 = state_31753;
state_31753 = G__31785;
continue;
} else {
return ret_value__16452__auto__;
}
break;
}
});
state_machine__16451__auto__ = function(state_31753){
switch(arguments.length){
case 0:
return state_machine__16451__auto____0.call(this);
case 1:
return state_machine__16451__auto____1.call(this,state_31753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16451__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16451__auto____0;
state_machine__16451__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16451__auto____1;
return state_machine__16451__auto__;
})()
;})(switch__16450__auto__,c__16465__auto__,map__31742,map__31742__$1,opts,on_cssload))
})();
var state__16467__auto__ = (function (){var statearr_31762 = f__16466__auto__.call(null);
(statearr_31762[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16465__auto__);

return statearr_31762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16467__auto__);
});})(c__16465__auto__,map__31742,map__31742__$1,opts,on_cssload))
);

return c__16465__auto__;
});
figwheel.client.file_reloading.figwheel_closure_import_script = (function figwheel_closure_import_script(src){
if(cljs.core.truth_(goog.inHtmlDocument_())){
goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,src));

return true;
} else {
return false;
}
});
figwheel.client.file_reloading.patch_goog_base = (function patch_goog_base(){
goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.figwheel_closure_import_script;
});

//# sourceMappingURL=file_reloading.js.map