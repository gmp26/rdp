// Compiled by ClojureScript 0.0-2665 {}
if(!goog.isProvided_('rum_datascript_pt.helper')) {
goog.provide('rum_datascript_pt.helper');
}
goog.require('cljs.core');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.fx');
goog.require('goog.style');
goog.require('goog.fx.dom');
goog.require('goog.events');
rum_datascript_pt.helper.allow_drop = (function allow_drop(e){
return e.preventDefault();
});
rum_datascript_pt.helper.get_elem = (function get_elem(id){
return goog.dom.getElement(id);
});
rum_datascript_pt.helper.get_attr = (function get_attr(elem,attr){
return elem.getAttribute(attr);
});
rum_datascript_pt.helper.get_value = (function get_value(elem){
return goog.dom.forms.getValue(goog.dom.getElement(elem));
});
rum_datascript_pt.helper.get_selected_option = (function get_selected_option(id){
return goog.dom.forms.getValue(rum_datascript_pt.helper.get_elem.call(null,id));
});
rum_datascript_pt.helper.fade_out = (function() {
var fade_out = null;
var fade_out__0 = (function (){
return fade_out.call(null,(1000),null);
});
var fade_out__1 = (function (tm){
return fade_out.call(null,tm,null);
});
var fade_out__2 = (function (tm,callback){
return (function (node){
var anim = (new goog.fx.dom.FadeOut(node,tm));
if(cljs.core.truth_(callback)){
goog.events.listen(anim,goog.fx.Animation.EventType.END,callback);
} else {
}

return anim.play();
});
});
fade_out = function(tm,callback){
switch(arguments.length){
case 0:
return fade_out__0.call(this);
case 1:
return fade_out__1.call(this,tm);
case 2:
return fade_out__2.call(this,tm,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fade_out.cljs$core$IFn$_invoke$arity$0 = fade_out__0;
fade_out.cljs$core$IFn$_invoke$arity$1 = fade_out__1;
fade_out.cljs$core$IFn$_invoke$arity$2 = fade_out__2;
return fade_out;
})()
;
rum_datascript_pt.helper.fade_in = (function() {
var fade_in = null;
var fade_in__0 = (function (){
return fade_in.call(null,(1000),null);
});
var fade_in__1 = (function (tm){
return fade_in.call(null,tm,null);
});
var fade_in__2 = (function (tm,callback){
return (function (node){
var anim = (new goog.fx.dom.FadeIn(node,tm));
if(cljs.core.truth_(callback)){
goog.events.listen(anim,goog.fx.Animation.EventType.END,callback);
} else {
}

return anim.play();
});
});
fade_in = function(tm,callback){
switch(arguments.length){
case 0:
return fade_in__0.call(this);
case 1:
return fade_in__1.call(this,tm);
case 2:
return fade_in__2.call(this,tm,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fade_in.cljs$core$IFn$_invoke$arity$0 = fade_in__0;
fade_in.cljs$core$IFn$_invoke$arity$1 = fade_in__1;
fade_in.cljs$core$IFn$_invoke$arity$2 = fade_in__2;
return fade_in;
})()
;
rum_datascript_pt.helper.set_attr = (function set_attr(id,attr,val){
return rum_datascript_pt.helper.get_elem.call(null,id).setAttribute(attr,val);
});

//# sourceMappingURL=helper.js.map