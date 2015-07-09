// Compiled by ClojureScript 0.0-2665 {}
if(!goog.isProvided_('rum_datascript_pt.core')) {
goog.provide('rum_datascript_pt.core');
}
goog.require('cljs.core');
goog.require('cljs_uuid.core');
goog.require('rum_datascript_pt.helper');
goog.require('datascript');
goog.require('rum');
/**
* datascript db updates should update any dependent (react) atom
*/
rum_datascript_pt.core.bind = (function() {
var bind = null;
var bind__2 = (function (conn,q){
return bind.call(null,conn,q,cljs.core.atom.call(null,null));
});
var bind__3 = (function (conn,q,state){
var k = cljs_uuid.core.make_random.call(null);
cljs.core.reset_BANG_.call(null,state,datascript.q.call(null,q,cljs.core.deref.call(null,conn)));

datascript.listen_BANG_.call(null,conn,k,((function (k){
return (function (tx_report){
var novelty = datascript.q.call(null,q,new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(tx_report));
if(cljs.core.truth_(cljs.core.not_empty.call(null,novelty))){
return cljs.core.reset_BANG_.call(null,state,datascript.q.call(null,q,new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(tx_report)));
} else {
return null;
}
});})(k))
);

state.__key = k;

return state;
});
bind = function(conn,q,state){
switch(arguments.length){
case 2:
return bind__2.call(this,conn,q);
case 3:
return bind__3.call(this,conn,q,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bind.cljs$core$IFn$_invoke$arity$2 = bind__2;
bind.cljs$core$IFn$_invoke$arity$3 = bind__3;
return bind;
})()
;
rum_datascript_pt.core.unbind = (function unbind(conn,state){
return datascript.unlisten_BANG_.call(null,conn,state.__key);
});
cljs.core.enable_console_print_BANG_.call(null);
rum_datascript_pt.core.fixtures = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-1),new cljs.core.Keyword("city","name","city/name",1845160358),"Leipzig"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-2),new cljs.core.Keyword("city","name","city/name",1845160358),"Kiel"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-3),new cljs.core.Keyword("good","name","good/name",1848951020),"Orange"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-4),new cljs.core.Keyword("good","name","good/name",1848951020),"Banana"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-5),new cljs.core.Keyword("good","name","good/name",1848951020),"Apple"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-6),new cljs.core.Keyword(null,"city","city",-393302614),(-1),new cljs.core.Keyword(null,"good","good",511701169),(-4),new cljs.core.Keyword("good","count","good/count",2143036922),(500)], null)], null);
rum_datascript_pt.core.conn = datascript.create_conn.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"city","city",-393302614),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null),new cljs.core.Keyword(null,"good","good",511701169),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","valueType","db/valueType",1827971944),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079)], null)], null));
rum_datascript_pt.core.get_cities_query = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Symbol(null,"?n","?n",-2053238410,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("city","name","city/name",1845160358),new cljs.core.Symbol(null,"?n","?n",-2053238410,null)], null)], null);
rum_datascript_pt.core.get_cities = (function get_cities(db){
return datascript.q.call(null,rum_datascript_pt.core.get_cities_query,db);
});
var render_fn__16520__auto___20271 = (function (){
return sablono.interpreter.interpret.call(null,(function (){var cs = rum_datascript_pt.core.bind.call(null,rum_datascript_pt.core.conn,rum_datascript_pt.core.get_cities_query);
new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__13529__auto__ = ((function (cs){
return (function iter__20263(s__20264){
return (new cljs.core.LazySeq(null,((function (cs){
return (function (){
var s__20264__$1 = s__20264;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__20264__$1);
if(temp__4126__auto__){
var s__20264__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20264__$2)){
var c__13527__auto__ = cljs.core.chunk_first.call(null,s__20264__$2);
var size__13528__auto__ = cljs.core.count.call(null,c__13527__auto__);
var b__20266 = cljs.core.chunk_buffer.call(null,size__13528__auto__);
if((function (){var i__20265 = (0);
while(true){
if((i__20265 < size__13528__auto__)){
var vec__20269 = cljs.core._nth.call(null,c__13527__auto__,i__20265);
var id = cljs.core.nth.call(null,vec__20269,(0),null);
var name = cljs.core.nth.call(null,vec__20269,(1),null);
cljs.core.chunk_append.call(null,b__20266,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null),name], null));

var G__20275 = (i__20265 + (1));
i__20265 = G__20275;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20266),iter__20263.call(null,cljs.core.chunk_rest.call(null,s__20264__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20266),null);
}
} else {
var vec__20270 = cljs.core.first.call(null,s__20264__$2);
var id = cljs.core.nth.call(null,vec__20270,(0),null);
var name = cljs.core.nth.call(null,vec__20270,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null),name], null),iter__20263.call(null,cljs.core.rest.call(null,s__20264__$2)));
}
} else {
return null;
}
break;
}
});})(cs))
,null,null));
});})(cs))
;
return iter__13529__auto__.call(null,cljs.core.deref.call(null,cs));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (cs){
return (function (){
return cljs.core.println.call(null,cljs.core.deref.call(null,rum_datascript_pt.core.conn));
});})(cs))
], null),"click"], null)], null);

return rum_datascript_pt.core.unbind.call(null,rum_datascript_pt.core.conn,cs);
})());
});
var render_mixin__16521__auto___20272 = rum.render__GT_mixin.call(null,render_fn__16520__auto___20271);
var class__16522__auto___20273 = rum.build_class.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [render_mixin__16521__auto___20272], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [rum.reactive], null)));
var ctor__16523__auto___20274 = ((function (render_fn__16520__auto___20271,render_mixin__16521__auto___20272,class__16522__auto___20273){
return (function (){
var state__16524__auto__ = rum.args__GT_state.call(null,cljs.core.PersistentVector.EMPTY);
return rum.element.call(null,class__16522__auto___20273,state__16524__auto__,null);
});})(render_fn__16520__auto___20271,render_mixin__16521__auto___20272,class__16522__auto___20273))
;
rum_datascript_pt.core.cities = cljs.core.with_meta.call(null,ctor__16523__auto___20274,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("rum","class","rum/class",-2030775258),class__16522__auto___20273], null));
rum_datascript_pt.core.init_app = (function init_app(){
return datascript.transact_BANG_.call(null,rum_datascript_pt.core.conn,rum_datascript_pt.core.fixtures);
});
rum_datascript_pt.core.main = (function main(){
rum_datascript_pt.core.init_app.call(null);

return rum.mount.call(null,rum_datascript_pt.core.cities.call(null),rum_datascript_pt.helper.get_elem.call(null,"app"));
});
rum_datascript_pt.core.main.call(null);
cljs.core.println.call(null,rum_datascript_pt.core.get_cities.call(null,cljs.core.deref.call(null,rum_datascript_pt.core.conn)));

//# sourceMappingURL=core.js.map