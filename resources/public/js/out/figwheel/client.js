// Compiled by ClojureScript 0.0-2665 {}
if(!goog.isProvided_('figwheel.client')) {
goog.provide('figwheel.client');
}
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('figwheel.client.heads_up');
figwheel.client.get_essential_messages = (function get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__30724){
var map__30726 = p__30724;
var map__30726__$1 = ((cljs.core.seq_QMARK_.call(null,map__30726))?cljs.core.apply.call(null,cljs.core.hash_map,map__30726):map__30726);
var class$ = cljs.core.get.call(null,map__30726__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__30726__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function reload_file_QMARK__STAR_(msg_name,opts){
var or__12773__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__12773__auto__)){
return or__12773__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function reload_file_state_QMARK_(msg_names,opts){
var and__12761__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__12761__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__12761__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__16465__auto___30847 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16465__auto___30847,ch){
return (function (){
var f__16466__auto__ = (function (){var switch__16450__auto__ = ((function (c__16465__auto___30847,ch){
return (function (state_30821){
var state_val_30822 = (state_30821[(1)]);
if((state_val_30822 === (7))){
var inst_30817 = (state_30821[(2)]);
var state_30821__$1 = state_30821;
var statearr_30823_30848 = state_30821__$1;
(statearr_30823_30848[(2)] = inst_30817);

(statearr_30823_30848[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30822 === (1))){
var state_30821__$1 = state_30821;
var statearr_30824_30849 = state_30821__$1;
(statearr_30824_30849[(2)] = null);

(statearr_30824_30849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30822 === (4))){
var inst_30789 = (state_30821[(7)]);
var inst_30789__$1 = (state_30821[(2)]);
var state_30821__$1 = (function (){var statearr_30825 = state_30821;
(statearr_30825[(7)] = inst_30789__$1);

return statearr_30825;
})();
if(cljs.core.truth_(inst_30789__$1)){
var statearr_30826_30850 = state_30821__$1;
(statearr_30826_30850[(1)] = (5));

} else {
var statearr_30827_30851 = state_30821__$1;
(statearr_30827_30851[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30822 === (13))){
var state_30821__$1 = state_30821;
var statearr_30828_30852 = state_30821__$1;
(statearr_30828_30852[(2)] = null);

(statearr_30828_30852[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30822 === (6))){
var state_30821__$1 = state_30821;
var statearr_30829_30853 = state_30821__$1;
(statearr_30829_30853[(2)] = null);

(statearr_30829_30853[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30822 === (3))){
var inst_30819 = (state_30821[(2)]);
var state_30821__$1 = state_30821;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30821__$1,inst_30819);
} else {
if((state_val_30822 === (12))){
var inst_30796 = (state_30821[(8)]);
var inst_30805 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30796);
var inst_30806 = cljs.core.first.call(null,inst_30805);
var inst_30807 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30806);
var inst_30808 = console.warn("Figwheel: Not loading code with warnings - ",inst_30807);
var state_30821__$1 = state_30821;
var statearr_30830_30854 = state_30821__$1;
(statearr_30830_30854[(2)] = inst_30808);

(statearr_30830_30854[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30822 === (2))){
var state_30821__$1 = state_30821;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30821__$1,(4),ch);
} else {
if((state_val_30822 === (11))){
var inst_30801 = (state_30821[(2)]);
var state_30821__$1 = state_30821;
var statearr_30831_30855 = state_30821__$1;
(statearr_30831_30855[(2)] = inst_30801);

(statearr_30831_30855[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30822 === (9))){
var inst_30795 = (state_30821[(9)]);
var inst_30803 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30795,opts);
var state_30821__$1 = state_30821;
if(inst_30803){
var statearr_30832_30856 = state_30821__$1;
(statearr_30832_30856[(1)] = (12));

} else {
var statearr_30833_30857 = state_30821__$1;
(statearr_30833_30857[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30822 === (5))){
var inst_30789 = (state_30821[(7)]);
var inst_30795 = (state_30821[(9)]);
var inst_30791 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30792 = (new cljs.core.PersistentArrayMap(null,2,inst_30791,null));
var inst_30793 = (new cljs.core.PersistentHashSet(null,inst_30792,null));
var inst_30794 = figwheel.client.focus_msgs.call(null,inst_30793,inst_30789);
var inst_30795__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30794);
var inst_30796 = cljs.core.first.call(null,inst_30794);
var inst_30797 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30795__$1,opts);
var state_30821__$1 = (function (){var statearr_30834 = state_30821;
(statearr_30834[(9)] = inst_30795__$1);

(statearr_30834[(8)] = inst_30796);

return statearr_30834;
})();
if(cljs.core.truth_(inst_30797)){
var statearr_30835_30858 = state_30821__$1;
(statearr_30835_30858[(1)] = (8));

} else {
var statearr_30836_30859 = state_30821__$1;
(statearr_30836_30859[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30822 === (14))){
var inst_30811 = (state_30821[(2)]);
var state_30821__$1 = state_30821;
var statearr_30837_30860 = state_30821__$1;
(statearr_30837_30860[(2)] = inst_30811);

(statearr_30837_30860[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30822 === (10))){
var inst_30813 = (state_30821[(2)]);
var state_30821__$1 = (function (){var statearr_30838 = state_30821;
(statearr_30838[(10)] = inst_30813);

return statearr_30838;
})();
var statearr_30839_30861 = state_30821__$1;
(statearr_30839_30861[(2)] = null);

(statearr_30839_30861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30822 === (8))){
var inst_30796 = (state_30821[(8)]);
var inst_30799 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30796);
var state_30821__$1 = state_30821;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30821__$1,(11),inst_30799);
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
});})(c__16465__auto___30847,ch))
;
return ((function (switch__16450__auto__,c__16465__auto___30847,ch){
return (function() {
var state_machine__16451__auto__ = null;
var state_machine__16451__auto____0 = (function (){
var statearr_30843 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30843[(0)] = state_machine__16451__auto__);

(statearr_30843[(1)] = (1));

return statearr_30843;
});
var state_machine__16451__auto____1 = (function (state_30821){
while(true){
var ret_value__16452__auto__ = (function (){try{while(true){
var result__16453__auto__ = switch__16450__auto__.call(null,state_30821);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16453__auto__;
}
break;
}
}catch (e30844){if((e30844 instanceof Object)){
var ex__16454__auto__ = e30844;
var statearr_30845_30862 = state_30821;
(statearr_30845_30862[(5)] = ex__16454__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30821);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30844;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30863 = state_30821;
state_30821 = G__30863;
continue;
} else {
return ret_value__16452__auto__;
}
break;
}
});
state_machine__16451__auto__ = function(state_30821){
switch(arguments.length){
case 0:
return state_machine__16451__auto____0.call(this);
case 1:
return state_machine__16451__auto____1.call(this,state_30821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16451__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16451__auto____0;
state_machine__16451__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16451__auto____1;
return state_machine__16451__auto__;
})()
;})(switch__16450__auto__,c__16465__auto___30847,ch))
})();
var state__16467__auto__ = (function (){var statearr_30846 = f__16466__auto__.call(null);
(statearr_30846[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16465__auto___30847);

return statearr_30846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16467__auto__);
});})(c__16465__auto___30847,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.css_reloader_plugin = (function css_reloader_plugin(opts){
return (function (p__30867){
var vec__30868 = p__30867;
var map__30869 = cljs.core.nth.call(null,vec__30868,(0),null);
var map__30869__$1 = ((cljs.core.seq_QMARK_.call(null,map__30869))?cljs.core.apply.call(null,cljs.core.hash_map,map__30869):map__30869);
var msg = map__30869__$1;
var msg_name = cljs.core.get.call(null,map__30869__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30868,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function compile_fail_warning_plugin(p__30870){
var map__30878 = p__30870;
var map__30878__$1 = ((cljs.core.seq_QMARK_.call(null,map__30878))?cljs.core.apply.call(null,cljs.core.hash_map,map__30878):map__30878);
var on_compile_fail = cljs.core.get.call(null,map__30878__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__30878__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__30878,map__30878__$1,on_compile_fail,on_compile_warning){
return (function (p__30879){
var vec__30880 = p__30879;
var map__30881 = cljs.core.nth.call(null,vec__30880,(0),null);
var map__30881__$1 = ((cljs.core.seq_QMARK_.call(null,map__30881))?cljs.core.apply.call(null,cljs.core.hash_map,map__30881):map__30881);
var msg = map__30881__$1;
var msg_name = cljs.core.get.call(null,map__30881__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30880,(1));
var pred__30882 = cljs.core._EQ_;
var expr__30883 = msg_name;
if(cljs.core.truth_(pred__30882.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30883))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30882.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30883))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__30878,map__30878__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__16465__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16465__auto__,msg_hist,msg_names,msg){
return (function (){
var f__16466__auto__ = (function (){var switch__16450__auto__ = ((function (c__16465__auto__,msg_hist,msg_names,msg){
return (function (state_31060){
var state_val_31061 = (state_31060[(1)]);
if((state_val_31061 === (7))){
var inst_31009 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_31060__$1 = state_31060;
if(inst_31009){
var statearr_31062_31099 = state_31060__$1;
(statearr_31062_31099[(1)] = (11));

} else {
var statearr_31063_31100 = state_31060__$1;
(statearr_31063_31100[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (20))){
var inst_31050 = (state_31060[(2)]);
var state_31060__$1 = state_31060;
var statearr_31064_31101 = state_31060__$1;
(statearr_31064_31101[(2)] = inst_31050);

(statearr_31064_31101[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (27))){
var inst_31041 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31060__$1 = state_31060;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31060__$1,(30),inst_31041);
} else {
if((state_val_31061 === (1))){
var inst_30992 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_31060__$1 = state_31060;
if(cljs.core.truth_(inst_30992)){
var statearr_31065_31102 = state_31060__$1;
(statearr_31065_31102[(1)] = (2));

} else {
var statearr_31066_31103 = state_31060__$1;
(statearr_31066_31103[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (24))){
var inst_31039 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_31060__$1 = state_31060;
if(inst_31039){
var statearr_31067_31104 = state_31060__$1;
(statearr_31067_31104[(1)] = (27));

} else {
var statearr_31068_31105 = state_31060__$1;
(statearr_31068_31105[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (4))){
var inst_31058 = (state_31060[(2)]);
var state_31060__$1 = state_31060;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31060__$1,inst_31058);
} else {
if((state_val_31061 === (15))){
var inst_31019 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31020 = figwheel.client.heads_up.append_message.call(null,inst_31019);
var state_31060__$1 = state_31060;
var statearr_31069_31106 = state_31060__$1;
(statearr_31069_31106[(2)] = inst_31020);

(statearr_31069_31106[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (21))){
var inst_31026 = (state_31060[(2)]);
var inst_31027 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31028 = figwheel.client.heads_up.display_warning.call(null,inst_31027);
var state_31060__$1 = (function (){var statearr_31070 = state_31060;
(statearr_31070[(7)] = inst_31026);

return statearr_31070;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31060__$1,(22),inst_31028);
} else {
if((state_val_31061 === (13))){
var inst_31054 = (state_31060[(2)]);
var state_31060__$1 = state_31060;
var statearr_31071_31107 = state_31060__$1;
(statearr_31071_31107[(2)] = inst_31054);

(statearr_31071_31107[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (22))){
var inst_31030 = (state_31060[(2)]);
var state_31060__$1 = state_31060;
var statearr_31072_31108 = state_31060__$1;
(statearr_31072_31108[(2)] = inst_31030);

(statearr_31072_31108[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (29))){
var inst_31046 = (state_31060[(2)]);
var state_31060__$1 = state_31060;
var statearr_31073_31109 = state_31060__$1;
(statearr_31073_31109[(2)] = inst_31046);

(statearr_31073_31109[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (6))){
var inst_31000 = figwheel.client.heads_up.clear.call(null);
var state_31060__$1 = state_31060;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31060__$1,(9),inst_31000);
} else {
if((state_val_31061 === (28))){
var state_31060__$1 = state_31060;
var statearr_31074_31110 = state_31060__$1;
(statearr_31074_31110[(2)] = null);

(statearr_31074_31110[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (25))){
var inst_31048 = (state_31060[(2)]);
var state_31060__$1 = state_31060;
var statearr_31075_31111 = state_31060__$1;
(statearr_31075_31111[(2)] = inst_31048);

(statearr_31075_31111[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (17))){
var inst_31052 = (state_31060[(2)]);
var state_31060__$1 = state_31060;
var statearr_31076_31112 = state_31060__$1;
(statearr_31076_31112[(2)] = inst_31052);

(statearr_31076_31112[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (3))){
var inst_30998 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_31060__$1 = state_31060;
if(inst_30998){
var statearr_31077_31113 = state_31060__$1;
(statearr_31077_31113[(1)] = (6));

} else {
var statearr_31078_31114 = state_31060__$1;
(statearr_31078_31114[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (12))){
var inst_31017 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_31060__$1 = state_31060;
if(inst_31017){
var statearr_31079_31115 = state_31060__$1;
(statearr_31079_31115[(1)] = (15));

} else {
var statearr_31080_31116 = state_31060__$1;
(statearr_31080_31116[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (2))){
var inst_30994 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31060__$1 = state_31060;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31060__$1,(5),inst_30994);
} else {
if((state_val_31061 === (23))){
var inst_31034 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31035 = figwheel.client.heads_up.display_warning.call(null,inst_31034);
var state_31060__$1 = state_31060;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31060__$1,(26),inst_31035);
} else {
if((state_val_31061 === (19))){
var inst_31032 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_31060__$1 = state_31060;
if(inst_31032){
var statearr_31081_31117 = state_31060__$1;
(statearr_31081_31117[(1)] = (23));

} else {
var statearr_31082_31118 = state_31060__$1;
(statearr_31082_31118[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (11))){
var inst_31011 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31012 = figwheel.client.format_messages.call(null,inst_31011);
var inst_31013 = figwheel.client.heads_up.display_error.call(null,inst_31012);
var state_31060__$1 = state_31060;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31060__$1,(14),inst_31013);
} else {
if((state_val_31061 === (9))){
var inst_31002 = (state_31060[(2)]);
var inst_31003 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31004 = figwheel.client.format_messages.call(null,inst_31003);
var inst_31005 = figwheel.client.heads_up.display_error.call(null,inst_31004);
var state_31060__$1 = (function (){var statearr_31083 = state_31060;
(statearr_31083[(8)] = inst_31002);

return statearr_31083;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31060__$1,(10),inst_31005);
} else {
if((state_val_31061 === (5))){
var inst_30996 = (state_31060[(2)]);
var state_31060__$1 = state_31060;
var statearr_31084_31119 = state_31060__$1;
(statearr_31084_31119[(2)] = inst_30996);

(statearr_31084_31119[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (14))){
var inst_31015 = (state_31060[(2)]);
var state_31060__$1 = state_31060;
var statearr_31085_31120 = state_31060__$1;
(statearr_31085_31120[(2)] = inst_31015);

(statearr_31085_31120[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (26))){
var inst_31037 = (state_31060[(2)]);
var state_31060__$1 = state_31060;
var statearr_31086_31121 = state_31060__$1;
(statearr_31086_31121[(2)] = inst_31037);

(statearr_31086_31121[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (16))){
var inst_31022 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_31060__$1 = state_31060;
if(inst_31022){
var statearr_31087_31122 = state_31060__$1;
(statearr_31087_31122[(1)] = (18));

} else {
var statearr_31088_31123 = state_31060__$1;
(statearr_31088_31123[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (30))){
var inst_31043 = (state_31060[(2)]);
var state_31060__$1 = state_31060;
var statearr_31089_31124 = state_31060__$1;
(statearr_31089_31124[(2)] = inst_31043);

(statearr_31089_31124[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (10))){
var inst_31007 = (state_31060[(2)]);
var state_31060__$1 = state_31060;
var statearr_31090_31125 = state_31060__$1;
(statearr_31090_31125[(2)] = inst_31007);

(statearr_31090_31125[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31061 === (18))){
var inst_31024 = figwheel.client.heads_up.clear.call(null);
var state_31060__$1 = state_31060;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31060__$1,(21),inst_31024);
} else {
if((state_val_31061 === (8))){
var inst_31056 = (state_31060[(2)]);
var state_31060__$1 = state_31060;
var statearr_31091_31126 = state_31060__$1;
(statearr_31091_31126[(2)] = inst_31056);

(statearr_31091_31126[(1)] = (4));


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
});})(c__16465__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__16450__auto__,c__16465__auto__,msg_hist,msg_names,msg){
return (function() {
var state_machine__16451__auto__ = null;
var state_machine__16451__auto____0 = (function (){
var statearr_31095 = [null,null,null,null,null,null,null,null,null];
(statearr_31095[(0)] = state_machine__16451__auto__);

(statearr_31095[(1)] = (1));

return statearr_31095;
});
var state_machine__16451__auto____1 = (function (state_31060){
while(true){
var ret_value__16452__auto__ = (function (){try{while(true){
var result__16453__auto__ = switch__16450__auto__.call(null,state_31060);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16453__auto__;
}
break;
}
}catch (e31096){if((e31096 instanceof Object)){
var ex__16454__auto__ = e31096;
var statearr_31097_31127 = state_31060;
(statearr_31097_31127[(5)] = ex__16454__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31060);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31096;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31128 = state_31060;
state_31060 = G__31128;
continue;
} else {
return ret_value__16452__auto__;
}
break;
}
});
state_machine__16451__auto__ = function(state_31060){
switch(arguments.length){
case 0:
return state_machine__16451__auto____0.call(this);
case 1:
return state_machine__16451__auto____1.call(this,state_31060);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16451__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16451__auto____0;
state_machine__16451__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16451__auto____1;
return state_machine__16451__auto__;
})()
;})(switch__16450__auto__,c__16465__auto__,msg_hist,msg_names,msg))
})();
var state__16467__auto__ = (function (){var statearr_31098 = f__16466__auto__.call(null);
(statearr_31098[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16465__auto__);

return statearr_31098;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16467__auto__);
});})(c__16465__auto__,msg_hist,msg_names,msg))
);

return c__16465__auto__;
});
figwheel.client.heads_up_plugin = (function heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__16465__auto___31191 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16465__auto___31191,ch){
return (function (){
var f__16466__auto__ = (function (){var switch__16450__auto__ = ((function (c__16465__auto___31191,ch){
return (function (state_31174){
var state_val_31175 = (state_31174[(1)]);
if((state_val_31175 === (8))){
var inst_31166 = (state_31174[(2)]);
var state_31174__$1 = (function (){var statearr_31176 = state_31174;
(statearr_31176[(7)] = inst_31166);

return statearr_31176;
})();
var statearr_31177_31192 = state_31174__$1;
(statearr_31177_31192[(2)] = null);

(statearr_31177_31192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31175 === (7))){
var inst_31170 = (state_31174[(2)]);
var state_31174__$1 = state_31174;
var statearr_31178_31193 = state_31174__$1;
(statearr_31178_31193[(2)] = inst_31170);

(statearr_31178_31193[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31175 === (6))){
var state_31174__$1 = state_31174;
var statearr_31179_31194 = state_31174__$1;
(statearr_31179_31194[(2)] = null);

(statearr_31179_31194[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31175 === (5))){
var inst_31162 = (state_31174[(8)]);
var inst_31164 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_31162);
var state_31174__$1 = state_31174;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31174__$1,(8),inst_31164);
} else {
if((state_val_31175 === (4))){
var inst_31162 = (state_31174[(8)]);
var inst_31162__$1 = (state_31174[(2)]);
var state_31174__$1 = (function (){var statearr_31180 = state_31174;
(statearr_31180[(8)] = inst_31162__$1);

return statearr_31180;
})();
if(cljs.core.truth_(inst_31162__$1)){
var statearr_31181_31195 = state_31174__$1;
(statearr_31181_31195[(1)] = (5));

} else {
var statearr_31182_31196 = state_31174__$1;
(statearr_31182_31196[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31175 === (3))){
var inst_31172 = (state_31174[(2)]);
var state_31174__$1 = state_31174;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31174__$1,inst_31172);
} else {
if((state_val_31175 === (2))){
var state_31174__$1 = state_31174;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31174__$1,(4),ch);
} else {
if((state_val_31175 === (1))){
var state_31174__$1 = state_31174;
var statearr_31183_31197 = state_31174__$1;
(statearr_31183_31197[(2)] = null);

(statearr_31183_31197[(1)] = (2));


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
});})(c__16465__auto___31191,ch))
;
return ((function (switch__16450__auto__,c__16465__auto___31191,ch){
return (function() {
var state_machine__16451__auto__ = null;
var state_machine__16451__auto____0 = (function (){
var statearr_31187 = [null,null,null,null,null,null,null,null,null];
(statearr_31187[(0)] = state_machine__16451__auto__);

(statearr_31187[(1)] = (1));

return statearr_31187;
});
var state_machine__16451__auto____1 = (function (state_31174){
while(true){
var ret_value__16452__auto__ = (function (){try{while(true){
var result__16453__auto__ = switch__16450__auto__.call(null,state_31174);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16453__auto__;
}
break;
}
}catch (e31188){if((e31188 instanceof Object)){
var ex__16454__auto__ = e31188;
var statearr_31189_31198 = state_31174;
(statearr_31189_31198[(5)] = ex__16454__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31174);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31188;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31199 = state_31174;
state_31174 = G__31199;
continue;
} else {
return ret_value__16452__auto__;
}
break;
}
});
state_machine__16451__auto__ = function(state_31174){
switch(arguments.length){
case 0:
return state_machine__16451__auto____0.call(this);
case 1:
return state_machine__16451__auto____1.call(this,state_31174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16451__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16451__auto____0;
state_machine__16451__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16451__auto____1;
return state_machine__16451__auto__;
})()
;})(switch__16450__auto__,c__16465__auto___31191,ch))
})();
var state__16467__auto__ = (function (){var statearr_31190 = f__16466__auto__.call(null);
(statearr_31190[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16465__auto___31191);

return statearr_31190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16467__auto__);
});})(c__16465__auto___31191,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__16465__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16465__auto__){
return (function (){
var f__16466__auto__ = (function (){var switch__16450__auto__ = ((function (c__16465__auto__){
return (function (state_31220){
var state_val_31221 = (state_31220[(1)]);
if((state_val_31221 === (2))){
var inst_31217 = (state_31220[(2)]);
var inst_31218 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_31220__$1 = (function (){var statearr_31222 = state_31220;
(statearr_31222[(7)] = inst_31217);

return statearr_31222;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31220__$1,inst_31218);
} else {
if((state_val_31221 === (1))){
var inst_31215 = cljs.core.async.timeout.call(null,(3000));
var state_31220__$1 = state_31220;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31220__$1,(2),inst_31215);
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
var statearr_31226 = [null,null,null,null,null,null,null,null];
(statearr_31226[(0)] = state_machine__16451__auto__);

(statearr_31226[(1)] = (1));

return statearr_31226;
});
var state_machine__16451__auto____1 = (function (state_31220){
while(true){
var ret_value__16452__auto__ = (function (){try{while(true){
var result__16453__auto__ = switch__16450__auto__.call(null,state_31220);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16453__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16453__auto__;
}
break;
}
}catch (e31227){if((e31227 instanceof Object)){
var ex__16454__auto__ = e31227;
var statearr_31228_31230 = state_31220;
(statearr_31228_31230[(5)] = ex__16454__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31220);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31227;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31231 = state_31220;
state_31220 = G__31231;
continue;
} else {
return ret_value__16452__auto__;
}
break;
}
});
state_machine__16451__auto__ = function(state_31220){
switch(arguments.length){
case 0:
return state_machine__16451__auto____0.call(this);
case 1:
return state_machine__16451__auto____1.call(this,state_31220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16451__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16451__auto____0;
state_machine__16451__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16451__auto____1;
return state_machine__16451__auto__;
})()
;})(switch__16450__auto__,c__16465__auto__))
})();
var state__16467__auto__ = (function (){var statearr_31229 = f__16466__auto__.call(null);
(statearr_31229[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16465__auto__);

return statearr_31229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16467__auto__);
});})(c__16465__auto__))
);

return c__16465__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){
if(cljs.core.truth_(("CustomEvent" in window))){
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj31235 = {"detail":url};
return obj31235;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__31236){
var map__31242 = p__31236;
var map__31242__$1 = ((cljs.core.seq_QMARK_.call(null,map__31242))?cljs.core.apply.call(null,cljs.core.hash_map,map__31242):map__31242);
var ed = map__31242__$1;
var exception_data = cljs.core.get.call(null,map__31242__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__31242__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
console.debug("Figwheel: Compile Exception");

var seq__31243_31247 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__31244_31248 = null;
var count__31245_31249 = (0);
var i__31246_31250 = (0);
while(true){
if((i__31246_31250 < count__31245_31249)){
var msg_31251 = cljs.core._nth.call(null,chunk__31244_31248,i__31246_31250);
console.log(msg_31251);

var G__31252 = seq__31243_31247;
var G__31253 = chunk__31244_31248;
var G__31254 = count__31245_31249;
var G__31255 = (i__31246_31250 + (1));
seq__31243_31247 = G__31252;
chunk__31244_31248 = G__31253;
count__31245_31249 = G__31254;
i__31246_31250 = G__31255;
continue;
} else {
var temp__4126__auto___31256 = cljs.core.seq.call(null,seq__31243_31247);
if(temp__4126__auto___31256){
var seq__31243_31257__$1 = temp__4126__auto___31256;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31243_31257__$1)){
var c__13560__auto___31258 = cljs.core.chunk_first.call(null,seq__31243_31257__$1);
var G__31259 = cljs.core.chunk_rest.call(null,seq__31243_31257__$1);
var G__31260 = c__13560__auto___31258;
var G__31261 = cljs.core.count.call(null,c__13560__auto___31258);
var G__31262 = (0);
seq__31243_31247 = G__31259;
chunk__31244_31248 = G__31260;
count__31245_31249 = G__31261;
i__31246_31250 = G__31262;
continue;
} else {
var msg_31263 = cljs.core.first.call(null,seq__31243_31257__$1);
console.log(msg_31263);

var G__31264 = cljs.core.next.call(null,seq__31243_31257__$1);
var G__31265 = null;
var G__31266 = (0);
var G__31267 = (0);
seq__31243_31247 = G__31264;
chunk__31244_31248 = G__31265;
count__31245_31249 = G__31266;
i__31246_31250 = G__31267;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function default_on_compile_warning(p__31268){
var map__31270 = p__31268;
var map__31270__$1 = ((cljs.core.seq_QMARK_.call(null,map__31270))?cljs.core.apply.call(null,cljs.core.hash_map,map__31270):map__31270);
var w = map__31270__$1;
var message = cljs.core.get.call(null,map__31270__$1,new cljs.core.Keyword(null,"message","message",-406056002));
console.warn("Figwheel: Compile Warning -",message);

return w;
});
figwheel.client.default_before_load = (function default_before_load(files){
console.debug("Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){
console.debug("Figwheel: loaded CSS files");

console.log(cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,true,[cljs.core.str("ws://"),cljs.core.str(location.host),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),cljs.core.identity,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options))){
return cljs.core.assoc.call(null,base,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base;
}
});
figwheel.client.add_plugins = (function add_plugins(plugins,system_options){
var seq__31277 = cljs.core.seq.call(null,plugins);
var chunk__31278 = null;
var count__31279 = (0);
var i__31280 = (0);
while(true){
if((i__31280 < count__31279)){
var vec__31281 = cljs.core._nth.call(null,chunk__31278,i__31280);
var k = cljs.core.nth.call(null,vec__31281,(0),null);
var plugin = cljs.core.nth.call(null,vec__31281,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31283 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31277,chunk__31278,count__31279,i__31280,pl_31283,vec__31281,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_31283.call(null,msg_hist);
});})(seq__31277,chunk__31278,count__31279,i__31280,pl_31283,vec__31281,k,plugin))
);
} else {
}

var G__31284 = seq__31277;
var G__31285 = chunk__31278;
var G__31286 = count__31279;
var G__31287 = (i__31280 + (1));
seq__31277 = G__31284;
chunk__31278 = G__31285;
count__31279 = G__31286;
i__31280 = G__31287;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__31277);
if(temp__4126__auto__){
var seq__31277__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31277__$1)){
var c__13560__auto__ = cljs.core.chunk_first.call(null,seq__31277__$1);
var G__31288 = cljs.core.chunk_rest.call(null,seq__31277__$1);
var G__31289 = c__13560__auto__;
var G__31290 = cljs.core.count.call(null,c__13560__auto__);
var G__31291 = (0);
seq__31277 = G__31288;
chunk__31278 = G__31289;
count__31279 = G__31290;
i__31280 = G__31291;
continue;
} else {
var vec__31282 = cljs.core.first.call(null,seq__31277__$1);
var k = cljs.core.nth.call(null,vec__31282,(0),null);
var plugin = cljs.core.nth.call(null,vec__31282,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31292 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31277,chunk__31278,count__31279,i__31280,pl_31292,vec__31282,k,plugin,seq__31277__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_31292.call(null,msg_hist);
});})(seq__31277,chunk__31278,count__31279,i__31280,pl_31292,vec__31282,k,plugin,seq__31277__$1,temp__4126__auto__))
);
} else {
}

var G__31293 = cljs.core.next.call(null,seq__31277__$1);
var G__31294 = null;
var G__31295 = (0);
var G__31296 = (0);
seq__31277 = G__31293;
chunk__31278 = G__31294;
count__31279 = G__31295;
i__31280 = G__31296;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function() {
var start = null;
var start__0 = (function (){
return start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
var start__1 = (function (opts){
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = (function (){var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
})();
}
});
start = function(opts){
switch(arguments.length){
case 0:
return start__0.call(this);
case 1:
return start__1.call(this,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
start.cljs$core$IFn$_invoke$arity$0 = start__0;
start.cljs$core$IFn$_invoke$arity$1 = start__1;
return start;
})()
;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__31297){
var map__31299 = p__31297;
var map__31299__$1 = ((cljs.core.seq_QMARK_.call(null,map__31299))?cljs.core.apply.call(null,cljs.core.hash_map,map__31299):map__31299);
var opts = map__31299__$1;
return figwheel.client.start.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__31297 = null;
if (arguments.length > 0) {
var G__31300__i = 0, G__31300__a = new Array(arguments.length -  0);
while (G__31300__i < G__31300__a.length) {G__31300__a[G__31300__i] = arguments[G__31300__i + 0]; ++G__31300__i;}
  p__31297 = new cljs.core.IndexedSeq(G__31300__a,0);
} 
return watch_and_reload__delegate.call(this,p__31297);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__31301){
var p__31297 = cljs.core.seq(arglist__31301);
return watch_and_reload__delegate(p__31297);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map