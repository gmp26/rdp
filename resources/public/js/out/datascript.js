// Compiled by ClojureScript 0.0-2665 {}
if(!goog.isProvided_('datascript')) {
goog.provide('datascript');
}
goog.require('cljs.core');
goog.require('datascript.btset');
goog.require('datascript.impl.entity');
goog.require('datascript.query');
goog.require('datascript.core');
datascript.q = datascript.query.q;
datascript.entity = datascript.impl.entity.entity;
datascript.entity_db = (function entity_db(entity){
return entity.db;
});
datascript.touch = datascript.impl.entity.touch;
datascript.tx0 = datascript.core.tx0;
datascript.refs = (function refs(schema){
return cljs.core.reduce_kv.call(null,(function (acc,attr,v){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("db","valueType","db/valueType",1827971944).cljs$core$IFn$_invoke$arity$1(v),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079))){
return cljs.core.conj.call(null,acc,attr);
} else {
return acc;
}
}),cljs.core.PersistentHashSet.EMPTY,schema);
});
/**
* @param {...*} var_args
*/
datascript.empty_db = (function() { 
var empty_db__delegate = function (p__26684){
var vec__26686 = p__26684;
var schema = cljs.core.nth.call(null,vec__26686,(0),null);
return datascript.core.map__GT_DB.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"schema","schema",-1582001791),schema,new cljs.core.Keyword(null,"eavt","eavt",-666437073),datascript.btset.btset_by.call(null,datascript.core.cmp_datoms_eavt),new cljs.core.Keyword(null,"aevt","aevt",-585148059),datascript.btset.btset_by.call(null,datascript.core.cmp_datoms_aevt),new cljs.core.Keyword(null,"avet","avet",1383857032),datascript.btset.btset_by.call(null,datascript.core.cmp_datoms_avet),new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),(0),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),datascript.tx0,new cljs.core.Keyword(null,"refs","refs",-1560051448),datascript.refs.call(null,schema)], null));
};
var empty_db = function (var_args){
var p__26684 = null;
if (arguments.length > 0) {
var G__26687__i = 0, G__26687__a = new Array(arguments.length -  0);
while (G__26687__i < G__26687__a.length) {G__26687__a[G__26687__i] = arguments[G__26687__i + 0]; ++G__26687__i;}
  p__26684 = new cljs.core.IndexedSeq(G__26687__a,0);
} 
return empty_db__delegate.call(this,p__26684);};
empty_db.cljs$lang$maxFixedArity = 0;
empty_db.cljs$lang$applyTo = (function (arglist__26688){
var p__26684 = cljs.core.seq(arglist__26688);
return empty_db__delegate(p__26684);
});
empty_db.cljs$core$IFn$_invoke$arity$variadic = empty_db__delegate;
return empty_db;
})()
;
/**
* @param {...*} var_args
*/
datascript.init_db = (function() { 
var init_db__delegate = function (datoms,p__26690){
var vec__26692 = p__26690;
var schema = cljs.core.nth.call(null,vec__26692,(0),null);
var datoms__$1 = cljs.core.into_array.call(null,datoms);
var len = datoms__$1.length;
var eavt = datascript.btset._btset_from_sorted_arr.call(null,datoms__$1.sort(datascript.core.cmp_datoms_eavt_quick),datascript.core.cmp_datoms_eavt);
var max_eid = (((len > (0)))?(datoms__$1[(len - (1))]).e:(0));
var aevt = datascript.btset._btset_from_sorted_arr.call(null,datoms__$1.sort(datascript.core.cmp_datoms_aevt_quick),datascript.core.cmp_datoms_aevt);
var avet = datascript.btset._btset_from_sorted_arr.call(null,datoms__$1.sort(datascript.core.cmp_datoms_avet_quick),datascript.core.cmp_datoms_avet);
var max_tx = cljs.core.transduce.call(null,cljs.core.map.call(null,((function (datoms__$1,len,eavt,max_eid,aevt,avet,vec__26692,schema){
return (function (p1__26689_SHARP_){
return p1__26689_SHARP_.tx;
});})(datoms__$1,len,eavt,max_eid,aevt,avet,vec__26692,schema))
),cljs.core.max,datascript.tx0,datoms__$1);
return datascript.core.map__GT_DB.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"schema","schema",-1582001791),schema,new cljs.core.Keyword(null,"eavt","eavt",-666437073),eavt,new cljs.core.Keyword(null,"aevt","aevt",-585148059),aevt,new cljs.core.Keyword(null,"avet","avet",1383857032),avet,new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),max_eid,new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),max_tx,new cljs.core.Keyword(null,"refs","refs",-1560051448),datascript.refs.call(null,schema)], null));
};
var init_db = function (datoms,var_args){
var p__26690 = null;
if (arguments.length > 1) {
var G__26693__i = 0, G__26693__a = new Array(arguments.length -  1);
while (G__26693__i < G__26693__a.length) {G__26693__a[G__26693__i] = arguments[G__26693__i + 1]; ++G__26693__i;}
  p__26690 = new cljs.core.IndexedSeq(G__26693__a,0);
} 
return init_db__delegate.call(this,datoms,p__26690);};
init_db.cljs$lang$maxFixedArity = 1;
init_db.cljs$lang$applyTo = (function (arglist__26694){
var datoms = cljs.core.first(arglist__26694);
var p__26690 = cljs.core.rest(arglist__26694);
return init_db__delegate(datoms,p__26690);
});
init_db.cljs$core$IFn$_invoke$arity$variadic = init_db__delegate;
return init_db;
})()
;
datascript.is_filtered = (function is_filtered(db){
return (db instanceof datascript.core.FilteredDB);
});
datascript.filter = (function filter(db,pred){
if(datascript.is_filtered.call(null,db)){
var u = db.unfiltered_db;
return (new datascript.core.FilteredDB(u,((function (u){
return (function (p1__26695_SHARP_){
var and__12761__auto__ = pred.call(null,u,p1__26695_SHARP_);
if(cljs.core.truth_(and__12761__auto__)){
return db.pred.call(null,p1__26695_SHARP_);
} else {
return and__12761__auto__;
}
});})(u))
,null,null,null));
} else {
return (new datascript.core.FilteredDB(db,(function (p1__26696_SHARP_){
return pred.call(null,db,p1__26696_SHARP_);
}),null,null,null));
}
});
/**
* @param {...*} var_args
*/
datascript.with$ = (function() { 
var with$__delegate = function (db,tx_data,p__26697){
var vec__26699 = p__26697;
var tx_meta = cljs.core.nth.call(null,vec__26699,(0),null);
if(datascript.is_filtered.call(null,db)){
throw (new Error("Filtered DB cannot be modified"));
} else {
return datascript.core.transact_tx_data.call(null,datascript.core.map__GT_TxReport.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"db-before","db-before",-553691536),db,new cljs.core.Keyword(null,"db-after","db-after",-571884666),db,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"tempids","tempids",1767509089),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),tx_meta], null)),tx_data);
}
};
var with$ = function (db,tx_data,var_args){
var p__26697 = null;
if (arguments.length > 2) {
var G__26700__i = 0, G__26700__a = new Array(arguments.length -  2);
while (G__26700__i < G__26700__a.length) {G__26700__a[G__26700__i] = arguments[G__26700__i + 2]; ++G__26700__i;}
  p__26697 = new cljs.core.IndexedSeq(G__26700__a,0);
} 
return with$__delegate.call(this,db,tx_data,p__26697);};
with$.cljs$lang$maxFixedArity = 2;
with$.cljs$lang$applyTo = (function (arglist__26701){
var db = cljs.core.first(arglist__26701);
arglist__26701 = cljs.core.next(arglist__26701);
var tx_data = cljs.core.first(arglist__26701);
var p__26697 = cljs.core.rest(arglist__26701);
return with$__delegate(db,tx_data,p__26697);
});
with$.cljs$core$IFn$_invoke$arity$variadic = with$__delegate;
return with$;
})()
;
datascript.db_with = (function db_with(db,tx_data){
return new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(datascript.with$.call(null,db,tx_data));
});
/**
* @param {...*} var_args
*/
datascript.datoms = (function() { 
var datoms__delegate = function (db,index,cs){
return datascript.core._datoms.call(null,db,index,cs);
};
var datoms = function (db,index,var_args){
var cs = null;
if (arguments.length > 2) {
var G__26702__i = 0, G__26702__a = new Array(arguments.length -  2);
while (G__26702__i < G__26702__a.length) {G__26702__a[G__26702__i] = arguments[G__26702__i + 2]; ++G__26702__i;}
  cs = new cljs.core.IndexedSeq(G__26702__a,0);
} 
return datoms__delegate.call(this,db,index,cs);};
datoms.cljs$lang$maxFixedArity = 2;
datoms.cljs$lang$applyTo = (function (arglist__26703){
var db = cljs.core.first(arglist__26703);
arglist__26703 = cljs.core.next(arglist__26703);
var index = cljs.core.first(arglist__26703);
var cs = cljs.core.rest(arglist__26703);
return datoms__delegate(db,index,cs);
});
datoms.cljs$core$IFn$_invoke$arity$variadic = datoms__delegate;
return datoms;
})()
;
/**
* @param {...*} var_args
*/
datascript.seek_datoms = (function() { 
var seek_datoms__delegate = function (db,index,cs){
return datascript.core._seek_datoms.call(null,db,index,cs);
};
var seek_datoms = function (db,index,var_args){
var cs = null;
if (arguments.length > 2) {
var G__26704__i = 0, G__26704__a = new Array(arguments.length -  2);
while (G__26704__i < G__26704__a.length) {G__26704__a[G__26704__i] = arguments[G__26704__i + 2]; ++G__26704__i;}
  cs = new cljs.core.IndexedSeq(G__26704__a,0);
} 
return seek_datoms__delegate.call(this,db,index,cs);};
seek_datoms.cljs$lang$maxFixedArity = 2;
seek_datoms.cljs$lang$applyTo = (function (arglist__26705){
var db = cljs.core.first(arglist__26705);
arglist__26705 = cljs.core.next(arglist__26705);
var index = cljs.core.first(arglist__26705);
var cs = cljs.core.rest(arglist__26705);
return seek_datoms__delegate(db,index,cs);
});
seek_datoms.cljs$core$IFn$_invoke$arity$variadic = seek_datoms__delegate;
return seek_datoms;
})()
;
datascript.index_range = (function index_range(db,attr,start,end){
return datascript.core._index_range.call(null,db,attr,start,end);
});
/**
* @param {...*} var_args
*/
datascript.create_conn = (function() { 
var create_conn__delegate = function (p__26706){
var vec__26708 = p__26706;
var schema = cljs.core.nth.call(null,vec__26708,(0),null);
return cljs.core.atom.call(null,datascript.empty_db.call(null,schema),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)], null));
};
var create_conn = function (var_args){
var p__26706 = null;
if (arguments.length > 0) {
var G__26709__i = 0, G__26709__a = new Array(arguments.length -  0);
while (G__26709__i < G__26709__a.length) {G__26709__a[G__26709__i] = arguments[G__26709__i + 0]; ++G__26709__i;}
  p__26706 = new cljs.core.IndexedSeq(G__26709__a,0);
} 
return create_conn__delegate.call(this,p__26706);};
create_conn.cljs$lang$maxFixedArity = 0;
create_conn.cljs$lang$applyTo = (function (arglist__26710){
var p__26706 = cljs.core.seq(arglist__26710);
return create_conn__delegate(p__26706);
});
create_conn.cljs$core$IFn$_invoke$arity$variadic = create_conn__delegate;
return create_conn;
})()
;
datascript._transact_BANG_ = (function _transact_BANG_(conn,tx_data,tx_meta){
var report = cljs.core.atom.call(null,null);
cljs.core.swap_BANG_.call(null,conn,((function (report){
return (function (db){
var r = datascript.with$.call(null,db,tx_data,tx_meta);
cljs.core.reset_BANG_.call(null,report,r);

return new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(r);
});})(report))
);

return cljs.core.deref.call(null,report);
});
/**
* @param {...*} var_args
*/
datascript.transact_BANG_ = (function() { 
var transact_BANG___delegate = function (conn,tx_data,p__26711){
var vec__26719 = p__26711;
var tx_meta = cljs.core.nth.call(null,vec__26719,(0),null);
var report = datascript._transact_BANG_.call(null,conn,tx_data,tx_meta);
var seq__26720_26726 = cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn))));
var chunk__26721_26727 = null;
var count__26722_26728 = (0);
var i__26723_26729 = (0);
while(true){
if((i__26723_26729 < count__26722_26728)){
var vec__26724_26730 = cljs.core._nth.call(null,chunk__26721_26727,i__26723_26729);
var __26731 = cljs.core.nth.call(null,vec__26724_26730,(0),null);
var callback_26732 = cljs.core.nth.call(null,vec__26724_26730,(1),null);
callback_26732.call(null,report);

var G__26733 = seq__26720_26726;
var G__26734 = chunk__26721_26727;
var G__26735 = count__26722_26728;
var G__26736 = (i__26723_26729 + (1));
seq__26720_26726 = G__26733;
chunk__26721_26727 = G__26734;
count__26722_26728 = G__26735;
i__26723_26729 = G__26736;
continue;
} else {
var temp__4126__auto___26737 = cljs.core.seq.call(null,seq__26720_26726);
if(temp__4126__auto___26737){
var seq__26720_26738__$1 = temp__4126__auto___26737;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26720_26738__$1)){
var c__13560__auto___26739 = cljs.core.chunk_first.call(null,seq__26720_26738__$1);
var G__26740 = cljs.core.chunk_rest.call(null,seq__26720_26738__$1);
var G__26741 = c__13560__auto___26739;
var G__26742 = cljs.core.count.call(null,c__13560__auto___26739);
var G__26743 = (0);
seq__26720_26726 = G__26740;
chunk__26721_26727 = G__26741;
count__26722_26728 = G__26742;
i__26723_26729 = G__26743;
continue;
} else {
var vec__26725_26744 = cljs.core.first.call(null,seq__26720_26738__$1);
var __26745 = cljs.core.nth.call(null,vec__26725_26744,(0),null);
var callback_26746 = cljs.core.nth.call(null,vec__26725_26744,(1),null);
callback_26746.call(null,report);

var G__26747 = cljs.core.next.call(null,seq__26720_26738__$1);
var G__26748 = null;
var G__26749 = (0);
var G__26750 = (0);
seq__26720_26726 = G__26747;
chunk__26721_26727 = G__26748;
count__26722_26728 = G__26749;
i__26723_26729 = G__26750;
continue;
}
} else {
}
}
break;
}

return report;
};
var transact_BANG_ = function (conn,tx_data,var_args){
var p__26711 = null;
if (arguments.length > 2) {
var G__26751__i = 0, G__26751__a = new Array(arguments.length -  2);
while (G__26751__i < G__26751__a.length) {G__26751__a[G__26751__i] = arguments[G__26751__i + 2]; ++G__26751__i;}
  p__26711 = new cljs.core.IndexedSeq(G__26751__a,0);
} 
return transact_BANG___delegate.call(this,conn,tx_data,p__26711);};
transact_BANG_.cljs$lang$maxFixedArity = 2;
transact_BANG_.cljs$lang$applyTo = (function (arglist__26752){
var conn = cljs.core.first(arglist__26752);
arglist__26752 = cljs.core.next(arglist__26752);
var tx_data = cljs.core.first(arglist__26752);
var p__26711 = cljs.core.rest(arglist__26752);
return transact_BANG___delegate(conn,tx_data,p__26711);
});
transact_BANG_.cljs$core$IFn$_invoke$arity$variadic = transact_BANG___delegate;
return transact_BANG_;
})()
;
datascript.listen_BANG_ = (function() {
var listen_BANG_ = null;
var listen_BANG___2 = (function (conn,callback){
return listen_BANG_.call(null,conn,cljs.core.rand.call(null),callback);
});
var listen_BANG___3 = (function (conn,key,callback){
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn)),cljs.core.assoc,key,callback);

return key;
});
listen_BANG_ = function(conn,key,callback){
switch(arguments.length){
case 2:
return listen_BANG___2.call(this,conn,key);
case 3:
return listen_BANG___3.call(this,conn,key,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen_BANG_.cljs$core$IFn$_invoke$arity$2 = listen_BANG___2;
listen_BANG_.cljs$core$IFn$_invoke$arity$3 = listen_BANG___3;
return listen_BANG_;
})()
;
datascript.unlisten_BANG_ = (function unlisten_BANG_(conn,key){
return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn)),cljs.core.dissoc,key);
});
datascript.core.Datom.prototype.cljs$core$IPrintWithWriter$ = true;

datascript.core.Datom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,w,opts){
var d__$1 = this;
return cljs.core.pr_sequential_writer.call(null,w,cljs.core.pr_writer,"#datascript/Datom ["," ","]",opts,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [d__$1.e,d__$1.a,d__$1.v,d__$1.tx,d__$1.added], null));
});
/**
* @param {...*} var_args
*/
datascript.datom = (function() { 
var datom__delegate = function (e,a,v,p__26753){
var vec__26755 = p__26753;
var tx = cljs.core.nth.call(null,vec__26755,(0),null);
var added = cljs.core.nth.call(null,vec__26755,(1),null);
return (new datascript.core.Datom(e,a,v,(function (){var or__12773__auto__ = tx;
if(cljs.core.truth_(or__12773__auto__)){
return or__12773__auto__;
} else {
return datascript.tx0;
}
})(),(((added == null))?true:added),null,null,null));
};
var datom = function (e,a,v,var_args){
var p__26753 = null;
if (arguments.length > 3) {
var G__26756__i = 0, G__26756__a = new Array(arguments.length -  3);
while (G__26756__i < G__26756__a.length) {G__26756__a[G__26756__i] = arguments[G__26756__i + 3]; ++G__26756__i;}
  p__26753 = new cljs.core.IndexedSeq(G__26756__a,0);
} 
return datom__delegate.call(this,e,a,v,p__26753);};
datom.cljs$lang$maxFixedArity = 3;
datom.cljs$lang$applyTo = (function (arglist__26757){
var e = cljs.core.first(arglist__26757);
arglist__26757 = cljs.core.next(arglist__26757);
var a = cljs.core.first(arglist__26757);
arglist__26757 = cljs.core.next(arglist__26757);
var v = cljs.core.first(arglist__26757);
var p__26753 = cljs.core.rest(arglist__26757);
return datom__delegate(e,a,v,p__26753);
});
datom.cljs$core$IFn$_invoke$arity$variadic = datom__delegate;
return datom;
})()
;
datascript.datom_from_reader = (function datom_from_reader(p__26758){
var vec__26760 = p__26758;
var e = cljs.core.nth.call(null,vec__26760,(0),null);
var a = cljs.core.nth.call(null,vec__26760,(1),null);
var v = cljs.core.nth.call(null,vec__26760,(2),null);
var tx = cljs.core.nth.call(null,vec__26760,(3),null);
var added = cljs.core.nth.call(null,vec__26760,(4),null);
return datascript.datom.call(null,e,a,v,tx,added);
});
datascript.pr_db = (function pr_db(db,w,opts){
cljs.core._write.call(null,w,"#datascript/DB {");

cljs.core._write.call(null,w,":schema ");

cljs.core.pr_writer.call(null,datascript.core._schema.call(null,db),w,opts);

cljs.core._write.call(null,w,", :datoms ");

cljs.core.pr_sequential_writer.call(null,w,(function (d,w__$1,opts__$1){
return cljs.core.pr_sequential_writer.call(null,w__$1,cljs.core.pr_writer,"["," ","]",opts__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [d.e,d.a,d.v,d.tx], null));
}),"["," ","]",opts,datascript.core._datoms.call(null,db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),cljs.core.PersistentVector.EMPTY));

return cljs.core._write.call(null,w,"}");
});
datascript.core.FilteredDB.prototype.cljs$core$IPrintWithWriter$ = true;

datascript.core.FilteredDB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (db,w,opts){
var db__$1 = this;
return datascript.pr_db.call(null,db__$1,w,opts);
});

datascript.core.DB.prototype.cljs$core$IPrintWithWriter$ = true;

datascript.core.DB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (db,w,opts){
var db__$1 = this;
return datascript.pr_db.call(null,db__$1,w,opts);
});
datascript.db_from_reader = (function db_from_reader(p__26761){
var map__26765 = p__26761;
var map__26765__$1 = ((cljs.core.seq_QMARK_.call(null,map__26765))?cljs.core.apply.call(null,cljs.core.hash_map,map__26765):map__26765);
var datoms = cljs.core.get.call(null,map__26765__$1,new cljs.core.Keyword(null,"datoms","datoms",-290874434));
var schema = cljs.core.get.call(null,map__26765__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
return datascript.init_db.call(null,cljs.core.map.call(null,((function (map__26765,map__26765__$1,datoms,schema){
return (function (p__26766){
var vec__26767 = p__26766;
var e = cljs.core.nth.call(null,vec__26767,(0),null);
var a = cljs.core.nth.call(null,vec__26767,(1),null);
var v = cljs.core.nth.call(null,vec__26767,(2),null);
var tx = cljs.core.nth.call(null,vec__26767,(3),null);
return (new datascript.core.Datom(e,a,v,tx,true,null,null,null));
});})(map__26765,map__26765__$1,datoms,schema))
,datoms),schema);
});
datascript.last_tempid = cljs.core.atom.call(null,(-1000000));
datascript.tempid = (function() {
var tempid = null;
var tempid__1 = (function (part){
if(cljs.core._EQ_.call(null,part,new cljs.core.Keyword("db.part","tx","db.part/tx",-1480923213))){
return new cljs.core.Keyword("db","current-tx","db/current-tx",1600722132);
} else {
return cljs.core.swap_BANG_.call(null,datascript.last_tempid,cljs.core.dec);
}
});
var tempid__2 = (function (part,x){
if(cljs.core._EQ_.call(null,part,new cljs.core.Keyword("db.part","tx","db.part/tx",-1480923213))){
return new cljs.core.Keyword("db","current-tx","db/current-tx",1600722132);
} else {
return x;
}
});
tempid = function(part,x){
switch(arguments.length){
case 1:
return tempid__1.call(this,part);
case 2:
return tempid__2.call(this,part,x);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tempid.cljs$core$IFn$_invoke$arity$1 = tempid__1;
tempid.cljs$core$IFn$_invoke$arity$2 = tempid__2;
return tempid;
})()
;
datascript.resolve_tempid = (function resolve_tempid(_db,tempids,tempid){
return cljs.core.get.call(null,tempids,tempid);
});
datascript.db = cljs.core.deref;
/**
* @param {...*} var_args
*/
datascript.transact = (function() { 
var transact__delegate = function (conn,tx_data,p__26768){
var vec__26773 = p__26768;
var tx_meta = cljs.core.nth.call(null,vec__26773,(0),null);
var res = datascript.transact_BANG_.call(null,conn,tx_data,tx_meta);
if(typeof datascript.t26774 !== 'undefined'){
} else {

/**
* @constructor
*/
datascript.t26774 = (function (res,tx_meta,vec__26773,p__26768,tx_data,conn,transact,meta26775){
this.res = res;
this.tx_meta = tx_meta;
this.vec__26773 = vec__26773;
this.p__26768 = p__26768;
this.tx_data = tx_data;
this.conn = conn;
this.transact = transact;
this.meta26775 = meta26775;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 491520;
})
datascript.t26774.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (res,vec__26773,tx_meta){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(res,vec__26773,tx_meta))
;

datascript.t26774.prototype.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3 = ((function (res,vec__26773,tx_meta){
return (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return self__.res;
});})(res,vec__26773,tx_meta))
;

datascript.t26774.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (res,vec__26773,tx_meta){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.res;
});})(res,vec__26773,tx_meta))
;

datascript.t26774.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (res,vec__26773,tx_meta){
return (function (_26776){
var self__ = this;
var _26776__$1 = this;
return self__.meta26775;
});})(res,vec__26773,tx_meta))
;

datascript.t26774.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (res,vec__26773,tx_meta){
return (function (_26776,meta26775__$1){
var self__ = this;
var _26776__$1 = this;
return (new datascript.t26774(self__.res,self__.tx_meta,self__.vec__26773,self__.p__26768,self__.tx_data,self__.conn,self__.transact,meta26775__$1));
});})(res,vec__26773,tx_meta))
;

datascript.t26774.cljs$lang$type = true;

datascript.t26774.cljs$lang$ctorStr = "datascript/t26774";

datascript.t26774.cljs$lang$ctorPrWriter = ((function (res,vec__26773,tx_meta){
return (function (this__13360__auto__,writer__13361__auto__,opt__13362__auto__){
return cljs.core._write.call(null,writer__13361__auto__,"datascript/t26774");
});})(res,vec__26773,tx_meta))
;

datascript.__GT_t26774 = ((function (res,vec__26773,tx_meta){
return (function __GT_t26774(res__$1,tx_meta__$1,vec__26773__$1,p__26768__$1,tx_data__$1,conn__$1,transact__$1,meta26775){
return (new datascript.t26774(res__$1,tx_meta__$1,vec__26773__$1,p__26768__$1,tx_data__$1,conn__$1,transact__$1,meta26775));
});})(res,vec__26773,tx_meta))
;

}

return (new datascript.t26774(res,tx_meta,vec__26773,p__26768,tx_data,conn,transact,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),29,new cljs.core.Keyword(null,"end-line","end-line",1837326455),178,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),172,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/gmp26/clojure/rum-datascript-prototype/resources/public/js/out/datascript.cljs"], null)));
};
var transact = function (conn,tx_data,var_args){
var p__26768 = null;
if (arguments.length > 2) {
var G__26777__i = 0, G__26777__a = new Array(arguments.length -  2);
while (G__26777__i < G__26777__a.length) {G__26777__a[G__26777__i] = arguments[G__26777__i + 2]; ++G__26777__i;}
  p__26768 = new cljs.core.IndexedSeq(G__26777__a,0);
} 
return transact__delegate.call(this,conn,tx_data,p__26768);};
transact.cljs$lang$maxFixedArity = 2;
transact.cljs$lang$applyTo = (function (arglist__26778){
var conn = cljs.core.first(arglist__26778);
arglist__26778 = cljs.core.next(arglist__26778);
var tx_data = cljs.core.first(arglist__26778);
var p__26768 = cljs.core.rest(arglist__26778);
return transact__delegate(conn,tx_data,p__26768);
});
transact.cljs$core$IFn$_invoke$arity$variadic = transact__delegate;
return transact;
})()
;
datascript.future_call = (function future_call(f){
var res = cljs.core.atom.call(null,null);
var realized = cljs.core.atom.call(null,false);
setTimeout(((function (res,realized){
return (function (){
cljs.core.reset_BANG_.call(null,res,f.call(null));

return cljs.core.reset_BANG_.call(null,realized,true);
});})(res,realized))
,(0));

if(typeof datascript.t26782 !== 'undefined'){
} else {

/**
* @constructor
*/
datascript.t26782 = (function (realized,res,f,future_call,meta26783){
this.realized = realized;
this.res = res;
this.f = f;
this.future_call = future_call;
this.meta26783 = meta26783;
this.cljs$lang$protocol_mask$partition1$ = 1;
this.cljs$lang$protocol_mask$partition0$ = 491520;
})
datascript.t26782.prototype.cljs$core$IPending$_realized_QMARK_$arity$1 = ((function (res,realized){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.realized);
});})(res,realized))
;

datascript.t26782.prototype.cljs$core$IDerefWithTimeout$_deref_with_timeout$arity$3 = ((function (res,realized){
return (function (_,___$1,timeout_val){
var self__ = this;
var ___$2 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,self__.realized))){
return cljs.core.deref.call(null,self__.res);
} else {
return timeout_val;
}
});})(res,realized))
;

datascript.t26782.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (res,realized){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.res);
});})(res,realized))
;

datascript.t26782.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (res,realized){
return (function (_26784){
var self__ = this;
var _26784__$1 = this;
return self__.meta26783;
});})(res,realized))
;

datascript.t26782.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (res,realized){
return (function (_26784,meta26783__$1){
var self__ = this;
var _26784__$1 = this;
return (new datascript.t26782(self__.realized,self__.res,self__.f,self__.future_call,meta26783__$1));
});})(res,realized))
;

datascript.t26782.cljs$lang$type = true;

datascript.t26782.cljs$lang$ctorStr = "datascript/t26782";

datascript.t26782.cljs$lang$ctorPrWriter = ((function (res,realized){
return (function (this__13360__auto__,writer__13361__auto__,opt__13362__auto__){
return cljs.core._write.call(null,writer__13361__auto__,"datascript/t26782");
});})(res,realized))
;

datascript.__GT_t26782 = ((function (res,realized){
return (function __GT_t26782(realized__$1,res__$1,f__$1,future_call__$1,meta26783){
return (new datascript.t26782(realized__$1,res__$1,f__$1,future_call__$1,meta26783));
});})(res,realized))
;

}

return (new datascript.t26782(realized,res,f,future_call,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-column","end-column",1425389514),34,new cljs.core.Keyword(null,"end-line","end-line",1837326455),191,new cljs.core.Keyword(null,"column","column",2078222095),5,new cljs.core.Keyword(null,"line","line",212345235),185,new cljs.core.Keyword(null,"file","file",-1269645878),"/Users/gmp26/clojure/rum-datascript-prototype/resources/public/js/out/datascript.cljs"], null)));
});
/**
* @param {...*} var_args
*/
datascript.transact_async = (function() { 
var transact_async__delegate = function (conn,tx_data,p__26785){
var vec__26787 = p__26785;
var tx_meta = cljs.core.nth.call(null,vec__26787,(0),null);
return datascript.future_call.call(null,((function (vec__26787,tx_meta){
return (function (){
return datascript.transact_BANG_.call(null,conn,tx_data,tx_meta);
});})(vec__26787,tx_meta))
);
};
var transact_async = function (conn,tx_data,var_args){
var p__26785 = null;
if (arguments.length > 2) {
var G__26788__i = 0, G__26788__a = new Array(arguments.length -  2);
while (G__26788__i < G__26788__a.length) {G__26788__a[G__26788__i] = arguments[G__26788__i + 2]; ++G__26788__i;}
  p__26785 = new cljs.core.IndexedSeq(G__26788__a,0);
} 
return transact_async__delegate.call(this,conn,tx_data,p__26785);};
transact_async.cljs$lang$maxFixedArity = 2;
transact_async.cljs$lang$applyTo = (function (arglist__26789){
var conn = cljs.core.first(arglist__26789);
arglist__26789 = cljs.core.next(arglist__26789);
var tx_data = cljs.core.first(arglist__26789);
var p__26785 = cljs.core.rest(arglist__26789);
return transact_async__delegate(conn,tx_data,p__26785);
});
transact_async.cljs$core$IFn$_invoke$arity$variadic = transact_async__delegate;
return transact_async;
})()
;
datascript.rand_bits = (function rand_bits(pow){
return cljs.core.rand_int.call(null,((1) << pow));
});
datascript.squuid = (function squuid(){
return (new cljs.core.UUID([cljs.core.str(Math.round.call(null,((new Date()).getTime() / (1000))).toString((16))),cljs.core.str("-"),cljs.core.str(datascript.rand_bits.call(null,(16)).toString((16))),cljs.core.str("-"),cljs.core.str(((datascript.rand_bits.call(null,(16)) & (4095)) | (16384)).toString((16))),cljs.core.str("-"),cljs.core.str(((datascript.rand_bits.call(null,(16)) & (16383)) | (32768)).toString((16))),cljs.core.str("-"),cljs.core.str(datascript.rand_bits.call(null,(16)).toString((16))),cljs.core.str(datascript.rand_bits.call(null,(16)).toString((16))),cljs.core.str(datascript.rand_bits.call(null,(16)).toString((16)))].join('')));
});
datascript.squuid_time_millis = (function squuid_time_millis(uuid){
return (parseInt(cljs.core.subs.call(null,uuid.uuid,(0),(8)),(16)) * (1000));
});

//# sourceMappingURL=datascript.js.map