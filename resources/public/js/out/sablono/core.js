// Compiled by ClojureScript 0.0-2665 {}
if(!goog.isProvided_('sablono.core')) {
goog.provide('sablono.core');
}
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){
return (function() { 
var G__26482__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__26481 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__26481,(0),null);
var body = cljs.core.nthnext.call(null,vec__26481,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__26482 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26483__i = 0, G__26483__a = new Array(arguments.length -  0);
while (G__26483__i < G__26483__a.length) {G__26483__a[G__26483__i] = arguments[G__26483__i + 0]; ++G__26483__i;}
  args = new cljs.core.IndexedSeq(G__26483__a,0);
} 
return G__26482__delegate.call(this,args);};
G__26482.cljs$lang$maxFixedArity = 0;
G__26482.cljs$lang$applyTo = (function (arglist__26484){
var args = cljs.core.seq(arglist__26484);
return G__26482__delegate(args);
});
G__26482.cljs$core$IFn$_invoke$arity$variadic = G__26482__delegate;
return G__26482;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){
var iter__13529__auto__ = (function iter__26489(s__26490){
return (new cljs.core.LazySeq(null,(function (){
var s__26490__$1 = s__26490;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__26490__$1);
if(temp__4126__auto__){
var s__26490__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26490__$2)){
var c__13527__auto__ = cljs.core.chunk_first.call(null,s__26490__$2);
var size__13528__auto__ = cljs.core.count.call(null,c__13527__auto__);
var b__26492 = cljs.core.chunk_buffer.call(null,size__13528__auto__);
if((function (){var i__26491 = (0);
while(true){
if((i__26491 < size__13528__auto__)){
var args = cljs.core._nth.call(null,c__13527__auto__,i__26491);
cljs.core.chunk_append.call(null,b__26492,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__26493 = (i__26491 + (1));
i__26491 = G__26493;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26492),iter__26489.call(null,cljs.core.chunk_rest.call(null,s__26490__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26492),null);
}
} else {
var args = cljs.core.first.call(null,s__26490__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__26489.call(null,cljs.core.rest.call(null,s__26490__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__13529__auto__.call(null,arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){
return React.renderComponentToString(component);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){
var iter__13529__auto__ = (function iter__26498(s__26499){
return (new cljs.core.LazySeq(null,(function (){
var s__26499__$1 = s__26499;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__26499__$1);
if(temp__4126__auto__){
var s__26499__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26499__$2)){
var c__13527__auto__ = cljs.core.chunk_first.call(null,s__26499__$2);
var size__13528__auto__ = cljs.core.count.call(null,c__13527__auto__);
var b__26501 = cljs.core.chunk_buffer.call(null,size__13528__auto__);
if((function (){var i__26500 = (0);
while(true){
if((i__26500 < size__13528__auto__)){
var style = cljs.core._nth.call(null,c__13527__auto__,i__26500);
cljs.core.chunk_append.call(null,b__26501,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__26502 = (i__26500 + (1));
i__26500 = G__26502;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26501),iter__26498.call(null,cljs.core.chunk_rest.call(null,s__26499__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26501),null);
}
} else {
var style = cljs.core.first.call(null,s__26499__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__26498.call(null,cljs.core.rest.call(null,s__26499__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__13529__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;
if (arguments.length > 0) {
var G__26503__i = 0, G__26503__a = new Array(arguments.length -  0);
while (G__26503__i < G__26503__a.length) {G__26503__a[G__26503__i] = arguments[G__26503__i + 0]; ++G__26503__i;}
  styles = new cljs.core.IndexedSeq(G__26503__a,0);
} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__26504){
var styles = cljs.core.seq(arglist__26504);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
* Include Facebook's React JavaScript library.
*/
sablono.core.include_react = (function include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.9.0.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to26505 = (function() { 
var link_to26505__delegate = function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to26505 = function (url,var_args){
var content = null;
if (arguments.length > 1) {
var G__26506__i = 0, G__26506__a = new Array(arguments.length -  1);
while (G__26506__i < G__26506__a.length) {G__26506__a[G__26506__i] = arguments[G__26506__i + 1]; ++G__26506__i;}
  content = new cljs.core.IndexedSeq(G__26506__a,0);
} 
return link_to26505__delegate.call(this,url,content);};
link_to26505.cljs$lang$maxFixedArity = 1;
link_to26505.cljs$lang$applyTo = (function (arglist__26507){
var url = cljs.core.first(arglist__26507);
var content = cljs.core.rest(arglist__26507);
return link_to26505__delegate(url,content);
});
link_to26505.cljs$core$IFn$_invoke$arity$variadic = link_to26505__delegate;
return link_to26505;
})()
;

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to26505);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to26508 = (function() { 
var mail_to26508__delegate = function (e_mail,p__26509){
var vec__26511 = p__26509;
var content = cljs.core.nth.call(null,vec__26511,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__12773__auto__ = content;
if(cljs.core.truth_(or__12773__auto__)){
return or__12773__auto__;
} else {
return e_mail;
}
})()], null);
};
var mail_to26508 = function (e_mail,var_args){
var p__26509 = null;
if (arguments.length > 1) {
var G__26512__i = 0, G__26512__a = new Array(arguments.length -  1);
while (G__26512__i < G__26512__a.length) {G__26512__a[G__26512__i] = arguments[G__26512__i + 1]; ++G__26512__i;}
  p__26509 = new cljs.core.IndexedSeq(G__26512__a,0);
} 
return mail_to26508__delegate.call(this,e_mail,p__26509);};
mail_to26508.cljs$lang$maxFixedArity = 1;
mail_to26508.cljs$lang$applyTo = (function (arglist__26513){
var e_mail = cljs.core.first(arglist__26513);
var p__26509 = cljs.core.rest(arglist__26513);
return mail_to26508__delegate(e_mail,p__26509);
});
mail_to26508.cljs$core$IFn$_invoke$arity$variadic = mail_to26508__delegate;
return mail_to26508;
})()
;

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to26508);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list26514 = (function unordered_list26514(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__13529__auto__ = (function iter__26519(s__26520){
return (new cljs.core.LazySeq(null,(function (){
var s__26520__$1 = s__26520;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__26520__$1);
if(temp__4126__auto__){
var s__26520__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26520__$2)){
var c__13527__auto__ = cljs.core.chunk_first.call(null,s__26520__$2);
var size__13528__auto__ = cljs.core.count.call(null,c__13527__auto__);
var b__26522 = cljs.core.chunk_buffer.call(null,size__13528__auto__);
if((function (){var i__26521 = (0);
while(true){
if((i__26521 < size__13528__auto__)){
var x = cljs.core._nth.call(null,c__13527__auto__,i__26521);
cljs.core.chunk_append.call(null,b__26522,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__26523 = (i__26521 + (1));
i__26521 = G__26523;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26522),iter__26519.call(null,cljs.core.chunk_rest.call(null,s__26520__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26522),null);
}
} else {
var x = cljs.core.first.call(null,s__26520__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__26519.call(null,cljs.core.rest.call(null,s__26520__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__13529__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list26514);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list26524 = (function ordered_list26524(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__13529__auto__ = (function iter__26529(s__26530){
return (new cljs.core.LazySeq(null,(function (){
var s__26530__$1 = s__26530;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__26530__$1);
if(temp__4126__auto__){
var s__26530__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26530__$2)){
var c__13527__auto__ = cljs.core.chunk_first.call(null,s__26530__$2);
var size__13528__auto__ = cljs.core.count.call(null,c__13527__auto__);
var b__26532 = cljs.core.chunk_buffer.call(null,size__13528__auto__);
if((function (){var i__26531 = (0);
while(true){
if((i__26531 < size__13528__auto__)){
var x = cljs.core._nth.call(null,c__13527__auto__,i__26531);
cljs.core.chunk_append.call(null,b__26532,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__26533 = (i__26531 + (1));
i__26531 = G__26533;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26532),iter__26529.call(null,cljs.core.chunk_rest.call(null,s__26530__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26532),null);
}
} else {
var x = cljs.core.first.call(null,s__26530__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__26529.call(null,cljs.core.rest.call(null,s__26530__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__13529__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list26524);
/**
* Create an image element.
*/
sablono.core.image26534 = (function() {
var image26534 = null;
var image26534__1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image26534__2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image26534 = function(src,alt){
switch(arguments.length){
case 1:
return image26534__1.call(this,src);
case 2:
return image26534__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image26534.cljs$core$IFn$_invoke$arity$1 = image26534__1;
image26534.cljs$core$IFn$_invoke$arity$2 = image26534__2;
return image26534;
})()
;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image26534);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){
return cljs.core.reduce.call(null,(function (p1__26535_SHARP_,p2__26536_SHARP_){
return [cljs.core.str(p1__26535_SHARP_),cljs.core.str("["),cljs.core.str(p2__26536_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){
return cljs.core.reduce.call(null,(function (p1__26537_SHARP_,p2__26538_SHARP_){
return [cljs.core.str(p1__26537_SHARP_),cljs.core.str("-"),cljs.core.str(p2__26538_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field26539 = (function() {
var color_field26539 = null;
var color_field26539__1 = (function (name__14846__auto__){
return color_field26539.call(null,name__14846__auto__,null);
});
var color_field26539__2 = (function (name__14846__auto__,value__14847__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__14846__auto__,value__14847__auto__);
});
color_field26539 = function(name__14846__auto__,value__14847__auto__){
switch(arguments.length){
case 1:
return color_field26539__1.call(this,name__14846__auto__);
case 2:
return color_field26539__2.call(this,name__14846__auto__,value__14847__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field26539.cljs$core$IFn$_invoke$arity$1 = color_field26539__1;
color_field26539.cljs$core$IFn$_invoke$arity$2 = color_field26539__2;
return color_field26539;
})()
;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field26539);

/**
* Creates a date input field.
*/
sablono.core.date_field26540 = (function() {
var date_field26540 = null;
var date_field26540__1 = (function (name__14846__auto__){
return date_field26540.call(null,name__14846__auto__,null);
});
var date_field26540__2 = (function (name__14846__auto__,value__14847__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__14846__auto__,value__14847__auto__);
});
date_field26540 = function(name__14846__auto__,value__14847__auto__){
switch(arguments.length){
case 1:
return date_field26540__1.call(this,name__14846__auto__);
case 2:
return date_field26540__2.call(this,name__14846__auto__,value__14847__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field26540.cljs$core$IFn$_invoke$arity$1 = date_field26540__1;
date_field26540.cljs$core$IFn$_invoke$arity$2 = date_field26540__2;
return date_field26540;
})()
;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field26540);

/**
* Creates a datetime input field.
*/
sablono.core.datetime_field26541 = (function() {
var datetime_field26541 = null;
var datetime_field26541__1 = (function (name__14846__auto__){
return datetime_field26541.call(null,name__14846__auto__,null);
});
var datetime_field26541__2 = (function (name__14846__auto__,value__14847__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__14846__auto__,value__14847__auto__);
});
datetime_field26541 = function(name__14846__auto__,value__14847__auto__){
switch(arguments.length){
case 1:
return datetime_field26541__1.call(this,name__14846__auto__);
case 2:
return datetime_field26541__2.call(this,name__14846__auto__,value__14847__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field26541.cljs$core$IFn$_invoke$arity$1 = datetime_field26541__1;
datetime_field26541.cljs$core$IFn$_invoke$arity$2 = datetime_field26541__2;
return datetime_field26541;
})()
;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field26541);

/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field26542 = (function() {
var datetime_local_field26542 = null;
var datetime_local_field26542__1 = (function (name__14846__auto__){
return datetime_local_field26542.call(null,name__14846__auto__,null);
});
var datetime_local_field26542__2 = (function (name__14846__auto__,value__14847__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__14846__auto__,value__14847__auto__);
});
datetime_local_field26542 = function(name__14846__auto__,value__14847__auto__){
switch(arguments.length){
case 1:
return datetime_local_field26542__1.call(this,name__14846__auto__);
case 2:
return datetime_local_field26542__2.call(this,name__14846__auto__,value__14847__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field26542.cljs$core$IFn$_invoke$arity$1 = datetime_local_field26542__1;
datetime_local_field26542.cljs$core$IFn$_invoke$arity$2 = datetime_local_field26542__2;
return datetime_local_field26542;
})()
;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field26542);

/**
* Creates a email input field.
*/
sablono.core.email_field26543 = (function() {
var email_field26543 = null;
var email_field26543__1 = (function (name__14846__auto__){
return email_field26543.call(null,name__14846__auto__,null);
});
var email_field26543__2 = (function (name__14846__auto__,value__14847__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__14846__auto__,value__14847__auto__);
});
email_field26543 = function(name__14846__auto__,value__14847__auto__){
switch(arguments.length){
case 1:
return email_field26543__1.call(this,name__14846__auto__);
case 2:
return email_field26543__2.call(this,name__14846__auto__,value__14847__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field26543.cljs$core$IFn$_invoke$arity$1 = email_field26543__1;
email_field26543.cljs$core$IFn$_invoke$arity$2 = email_field26543__2;
return email_field26543;
})()
;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field26543);

/**
* Creates a file input field.
*/
sablono.core.file_field26544 = (function() {
var file_field26544 = null;
var file_field26544__1 = (function (name__14846__auto__){
return file_field26544.call(null,name__14846__auto__,null);
});
var file_field26544__2 = (function (name__14846__auto__,value__14847__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__14846__auto__,value__14847__auto__);
});
file_field26544 = function(name__14846__auto__,value__14847__auto__){
switch(arguments.length){
case 1:
return file_field26544__1.call(this,name__14846__auto__);
case 2:
return file_field26544__2.call(this,name__14846__auto__,value__14847__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field26544.cljs$core$IFn$_invoke$arity$1 = file_field26544__1;
file_field26544.cljs$core$IFn$_invoke$arity$2 = file_field26544__2;
return file_field26544;
})()
;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field26544);

/**
* Creates a hidden input field.
*/
sablono.core.hidden_field26545 = (function() {
var hidden_field26545 = null;
var hidden_field26545__1 = (function (name__14846__auto__){
return hidden_field26545.call(null,name__14846__auto__,null);
});
var hidden_field26545__2 = (function (name__14846__auto__,value__14847__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__14846__auto__,value__14847__auto__);
});
hidden_field26545 = function(name__14846__auto__,value__14847__auto__){
switch(arguments.length){
case 1:
return hidden_field26545__1.call(this,name__14846__auto__);
case 2:
return hidden_field26545__2.call(this,name__14846__auto__,value__14847__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field26545.cljs$core$IFn$_invoke$arity$1 = hidden_field26545__1;
hidden_field26545.cljs$core$IFn$_invoke$arity$2 = hidden_field26545__2;
return hidden_field26545;
})()
;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field26545);

/**
* Creates a month input field.
*/
sablono.core.month_field26546 = (function() {
var month_field26546 = null;
var month_field26546__1 = (function (name__14846__auto__){
return month_field26546.call(null,name__14846__auto__,null);
});
var month_field26546__2 = (function (name__14846__auto__,value__14847__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__14846__auto__,value__14847__auto__);
});
month_field26546 = function(name__14846__auto__,value__14847__auto__){
switch(arguments.length){
case 1:
return month_field26546__1.call(this,name__14846__auto__);
case 2:
return month_field26546__2.call(this,name__14846__auto__,value__14847__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field26546.cljs$core$IFn$_invoke$arity$1 = month_field26546__1;
month_field26546.cljs$core$IFn$_invoke$arity$2 = month_field26546__2;
return month_field26546;
})()
;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field26546);

/**
* Creates a number input field.
*/
sablono.core.number_field26547 = (function() {
var number_field26547 = null;
var number_field26547__1 = (function (name__14846__auto__){
return number_field26547.call(null,name__14846__auto__,null);
});
var number_field26547__2 = (function (name__14846__auto__,value__14847__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__14846__auto__,value__14847__auto__);
});
number_field26547 = function(name__14846__auto__,value__14847__auto__){
switch(arguments.length){
case 1:
return number_field26547__1.call(this,name__14846__auto__);
case 2:
return number_field26547__2.call(this,name__14846__auto__,value__14847__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field26547.cljs$core$IFn$_invoke$arity$1 = number_field26547__1;
number_field26547.cljs$core$IFn$_invoke$arity$2 = number_field26547__2;
return number_field26547;
})()
;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field26547);

/**
* Creates a password input field.
*/
sablono.core.password_field26548 = (function() {
var password_field26548 = null;
var password_field26548__1 = (function (name__14846__auto__){
return password_field26548.call(null,name__14846__auto__,null);
});
var password_field26548__2 = (function (name__14846__auto__,value__14847__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__14846__auto__,value__14847__auto__);
});
password_field26548 = function(name__14846__auto__,value__14847__auto__){
switch(arguments.length){
case 1:
return password_field26548__1.call(this,name__14846__auto__);
case 2:
return password_field26548__2.call(this,name__14846__auto__,value__14847__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field26548.cljs$core$IFn$_invoke$arity$1 = password_field26548__1;
password_field26548.cljs$core$IFn$_invoke$arity$2 = password_field26548__2;
return password_field26548;
})()
;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field26548);

/**
* Creates a range input field.
*/
sablono.core.range_field26549 = (function() {
var range_field26549 = null;
var range_field26549__1 = (function (name__14846__auto__){
return range_field26549.call(null,name__14846__auto__,null);
});
var range_field26549__2 = (function (name__14846__auto__,value__14847__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__14846__auto__,value__14847__auto__);
});
range_field26549 = function(name__14846__auto__,value__14847__auto__){
switch(arguments.length){
case 1:
return range_field26549__1.call(this,name__14846__auto__);
case 2:
return range_field26549__2.call(this,name__14846__auto__,value__14847__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field26549.cljs$core$IFn$_invoke$arity$1 = range_field26549__1;
range_field26549.cljs$core$IFn$_invoke$arity$2 = range_field26549__2;
return range_field26549;
})()
;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field26549);

/**
* Creates a search input field.
*/
sablono.core.search_field26550 = (function() {
var search_field26550 = null;
var search_field26550__1 = (function (name__14846__auto__){
return search_field26550.call(null,name__14846__auto__,null);
});
var search_field26550__2 = (function (name__14846__auto__,value__14847__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__14846__auto__,value__14847__auto__);
});
search_field26550 = function(name__14846__auto__,value__14847__auto__){
switch(arguments.length){
case 1:
return search_field26550__1.call(this,name__14846__auto__);
case 2:
return search_field26550__2.call(this,name__14846__auto__,value__14847__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field26550.cljs$core$IFn$_invoke$arity$1 = search_field26550__1;
search_field26550.cljs$core$IFn$_invoke$arity$2 = search_field26550__2;
return search_field26550;
})()
;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field26550);

/**
* Creates a tel input field.
*/
sablono.core.tel_field26551 = (function() {
var tel_field26551 = null;
var tel_field26551__1 = (function (name__14846__auto__){
return tel_field26551.call(null,name__14846__auto__,null);
});
var tel_field26551__2 = (function (name__14846__auto__,value__14847__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__14846__auto__,value__14847__auto__);
});
tel_field26551 = function(name__14846__auto__,value__14847__auto__){
switch(arguments.length){
case 1:
return tel_field26551__1.call(this,name__14846__auto__);
case 2:
return tel_field26551__2.call(this,name__14846__auto__,value__14847__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field26551.cljs$core$IFn$_invoke$arity$1 = tel_field26551__1;
tel_field26551.cljs$core$IFn$_invoke$arity$2 = tel_field26551__2;
return tel_field26551;
})()
;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field26551);

/**
* Creates a text input field.
*/
sablono.core.text_field26552 = (function() {
var text_field26552 = null;
var text_field26552__1 = (function (name__14846__auto__){
return text_field26552.call(null,name__14846__auto__,null);
});
var text_field26552__2 = (function (name__14846__auto__,value__14847__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__14846__auto__,value__14847__auto__);
});
text_field26552 = function(name__14846__auto__,value__14847__auto__){
switch(arguments.length){
case 1:
return text_field26552__1.call(this,name__14846__auto__);
case 2:
return text_field26552__2.call(this,name__14846__auto__,value__14847__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field26552.cljs$core$IFn$_invoke$arity$1 = text_field26552__1;
text_field26552.cljs$core$IFn$_invoke$arity$2 = text_field26552__2;
return text_field26552;
})()
;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field26552);

/**
* Creates a time input field.
*/
sablono.core.time_field26553 = (function() {
var time_field26553 = null;
var time_field26553__1 = (function (name__14846__auto__){
return time_field26553.call(null,name__14846__auto__,null);
});
var time_field26553__2 = (function (name__14846__auto__,value__14847__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__14846__auto__,value__14847__auto__);
});
time_field26553 = function(name__14846__auto__,value__14847__auto__){
switch(arguments.length){
case 1:
return time_field26553__1.call(this,name__14846__auto__);
case 2:
return time_field26553__2.call(this,name__14846__auto__,value__14847__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field26553.cljs$core$IFn$_invoke$arity$1 = time_field26553__1;
time_field26553.cljs$core$IFn$_invoke$arity$2 = time_field26553__2;
return time_field26553;
})()
;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field26553);

/**
* Creates a url input field.
*/
sablono.core.url_field26554 = (function() {
var url_field26554 = null;
var url_field26554__1 = (function (name__14846__auto__){
return url_field26554.call(null,name__14846__auto__,null);
});
var url_field26554__2 = (function (name__14846__auto__,value__14847__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__14846__auto__,value__14847__auto__);
});
url_field26554 = function(name__14846__auto__,value__14847__auto__){
switch(arguments.length){
case 1:
return url_field26554__1.call(this,name__14846__auto__);
case 2:
return url_field26554__2.call(this,name__14846__auto__,value__14847__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field26554.cljs$core$IFn$_invoke$arity$1 = url_field26554__1;
url_field26554.cljs$core$IFn$_invoke$arity$2 = url_field26554__2;
return url_field26554;
})()
;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field26554);

/**
* Creates a week input field.
*/
sablono.core.week_field26555 = (function() {
var week_field26555 = null;
var week_field26555__1 = (function (name__14846__auto__){
return week_field26555.call(null,name__14846__auto__,null);
});
var week_field26555__2 = (function (name__14846__auto__,value__14847__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__14846__auto__,value__14847__auto__);
});
week_field26555 = function(name__14846__auto__,value__14847__auto__){
switch(arguments.length){
case 1:
return week_field26555__1.call(this,name__14846__auto__);
case 2:
return week_field26555__2.call(this,name__14846__auto__,value__14847__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field26555.cljs$core$IFn$_invoke$arity$1 = week_field26555__1;
week_field26555.cljs$core$IFn$_invoke$arity$2 = week_field26555__2;
return week_field26555;
})()
;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field26555);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box26556 = (function() {
var check_box26556 = null;
var check_box26556__1 = (function (name){
return check_box26556.call(null,name,null);
});
var check_box26556__2 = (function (name,checked_QMARK_){
return check_box26556.call(null,name,checked_QMARK_,"true");
});
var check_box26556__3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box26556 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box26556__1.call(this,name);
case 2:
return check_box26556__2.call(this,name,checked_QMARK_);
case 3:
return check_box26556__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box26556.cljs$core$IFn$_invoke$arity$1 = check_box26556__1;
check_box26556.cljs$core$IFn$_invoke$arity$2 = check_box26556__2;
check_box26556.cljs$core$IFn$_invoke$arity$3 = check_box26556__3;
return check_box26556;
})()
;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box26556);
/**
* Creates a radio button.
*/
sablono.core.radio_button26557 = (function() {
var radio_button26557 = null;
var radio_button26557__1 = (function (group){
return radio_button26557.call(null,group,null);
});
var radio_button26557__2 = (function (group,checked_QMARK_){
return radio_button26557.call(null,group,checked_QMARK_,"true");
});
var radio_button26557__3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button26557 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button26557__1.call(this,group);
case 2:
return radio_button26557__2.call(this,group,checked_QMARK_);
case 3:
return radio_button26557__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button26557.cljs$core$IFn$_invoke$arity$1 = radio_button26557__1;
radio_button26557.cljs$core$IFn$_invoke$arity$2 = radio_button26557__2;
radio_button26557.cljs$core$IFn$_invoke$arity$3 = radio_button26557__3;
return radio_button26557;
})()
;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button26557);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options26558 = (function() {
var select_options26558 = null;
var select_options26558__1 = (function (coll){
return select_options26558.call(null,coll,null);
});
var select_options26558__2 = (function (coll,selected){
var iter__13529__auto__ = (function iter__26567(s__26568){
return (new cljs.core.LazySeq(null,(function (){
var s__26568__$1 = s__26568;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__26568__$1);
if(temp__4126__auto__){
var s__26568__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26568__$2)){
var c__13527__auto__ = cljs.core.chunk_first.call(null,s__26568__$2);
var size__13528__auto__ = cljs.core.count.call(null,c__13527__auto__);
var b__26570 = cljs.core.chunk_buffer.call(null,size__13528__auto__);
if((function (){var i__26569 = (0);
while(true){
if((i__26569 < size__13528__auto__)){
var x = cljs.core._nth.call(null,c__13527__auto__,i__26569);
cljs.core.chunk_append.call(null,b__26570,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__26573 = x;
var text = cljs.core.nth.call(null,vec__26573,(0),null);
var val = cljs.core.nth.call(null,vec__26573,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__26573,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options26558.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));

var G__26575 = (i__26569 + (1));
i__26569 = G__26575;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26570),iter__26567.call(null,cljs.core.chunk_rest.call(null,s__26568__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26570),null);
}
} else {
var x = cljs.core.first.call(null,s__26568__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__26574 = x;
var text = cljs.core.nth.call(null,vec__26574,(0),null);
var val = cljs.core.nth.call(null,vec__26574,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__26574,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options26558.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__26567.call(null,cljs.core.rest.call(null,s__26568__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__13529__auto__.call(null,coll);
});
select_options26558 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options26558__1.call(this,coll);
case 2:
return select_options26558__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options26558.cljs$core$IFn$_invoke$arity$1 = select_options26558__1;
select_options26558.cljs$core$IFn$_invoke$arity$2 = select_options26558__2;
return select_options26558;
})()
;

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options26558);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down26576 = (function() {
var drop_down26576 = null;
var drop_down26576__2 = (function (name,options){
return drop_down26576.call(null,name,options,null);
});
var drop_down26576__3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down26576 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down26576__2.call(this,name,options);
case 3:
return drop_down26576__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down26576.cljs$core$IFn$_invoke$arity$2 = drop_down26576__2;
drop_down26576.cljs$core$IFn$_invoke$arity$3 = drop_down26576__3;
return drop_down26576;
})()
;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down26576);
/**
* Creates a text area element.
*/
sablono.core.text_area26577 = (function() {
var text_area26577 = null;
var text_area26577__1 = (function (name){
return text_area26577.call(null,name,null);
});
var text_area26577__2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area26577 = function(name,value){
switch(arguments.length){
case 1:
return text_area26577__1.call(this,name);
case 2:
return text_area26577__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area26577.cljs$core$IFn$_invoke$arity$1 = text_area26577__1;
text_area26577.cljs$core$IFn$_invoke$arity$2 = text_area26577__2;
return text_area26577;
})()
;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area26577);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label26578 = (function label26578(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label26578);
/**
* Creates a submit button.
*/
sablono.core.submit_button26579 = (function submit_button26579(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button26579);
/**
* Creates a form reset button.
*/
sablono.core.reset_button26580 = (function reset_button26580(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button26580);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to26581 = (function() { 
var form_to26581__delegate = function (p__26582,body){
var vec__26584 = p__26582;
var method = cljs.core.nth.call(null,vec__26584,(0),null);
var action = cljs.core.nth.call(null,vec__26584,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to26581 = function (p__26582,var_args){
var body = null;
if (arguments.length > 1) {
var G__26585__i = 0, G__26585__a = new Array(arguments.length -  1);
while (G__26585__i < G__26585__a.length) {G__26585__a[G__26585__i] = arguments[G__26585__i + 1]; ++G__26585__i;}
  body = new cljs.core.IndexedSeq(G__26585__a,0);
} 
return form_to26581__delegate.call(this,p__26582,body);};
form_to26581.cljs$lang$maxFixedArity = 1;
form_to26581.cljs$lang$applyTo = (function (arglist__26586){
var p__26582 = cljs.core.first(arglist__26586);
var body = cljs.core.rest(arglist__26586);
return form_to26581__delegate(p__26582,body);
});
form_to26581.cljs$core$IFn$_invoke$arity$variadic = form_to26581__delegate;
return form_to26581;
})()
;

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to26581);

//# sourceMappingURL=core.js.map