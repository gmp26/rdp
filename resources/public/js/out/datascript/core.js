// Compiled by ClojureScript 0.0-2665 {}
if(!goog.isProvided_('datascript.core')) {
goog.provide('datascript.core');
}
goog.require('cljs.core');
goog.require('goog.array');
goog.require('datascript.btset');
datascript.core.tx0 = (536870912);

/**
* @constructor
* @param {*} e
* @param {*} a
* @param {*} v
* @param {*} tx
* @param {*} added
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
datascript.core.Datom = (function (e,a,v,tx,added,__meta,__extmap,__hash){
this.e = e;
this.a = a;
this.v = v;
this.tx = tx;
this.added = added;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.core.Datom.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.call(null,this$);
});

datascript.core.Datom.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__13376__auto__,k__13377__auto__){
var self__ = this;
var this__13376__auto____$1 = this;
return cljs.core._lookup.call(null,this__13376__auto____$1,k__13377__auto__,null);
});

datascript.core.Datom.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__13378__auto__,k26937,else__13379__auto__){
var self__ = this;
var this__13378__auto____$1 = this;
var G__26939 = (((k26937 instanceof cljs.core.Keyword))?k26937.fqn:null);
switch (G__26939) {
case "added":
return self__.added;

break;
case "tx":
return self__.tx;

break;
case "v":
return self__.v;

break;
case "a":
return self__.a;

break;
case "e":
return self__.e;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k26937,else__13379__auto__);

}
});

datascript.core.Datom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__13390__auto__,writer__13391__auto__,opts__13392__auto__){
var self__ = this;
var this__13390__auto____$1 = this;
var pr_pair__13393__auto__ = ((function (this__13390__auto____$1){
return (function (keyval__13394__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__13391__auto__,cljs.core.pr_writer,""," ","",opts__13392__auto__,keyval__13394__auto__);
});})(this__13390__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__13391__auto__,pr_pair__13393__auto__,"#datascript.core.Datom{",", ","}",opts__13392__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"e","e",1381269198),self__.e],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"a","a",-2123407586),self__.a],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",21465059),self__.v],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx","tx",466630418),self__.tx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"added","added",2057651688),self__.added],null))], null),self__.__extmap));
});

datascript.core.Datom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__13374__auto__){
var self__ = this;
var this__13374__auto____$1 = this;
return self__.__meta;
});

datascript.core.Datom.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__13370__auto__){
var self__ = this;
var this__13370__auto____$1 = this;
return (new datascript.core.Datom(self__.e,self__.a,self__.v,self__.tx,self__.added,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.core.Datom.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__13380__auto__){
var self__ = this;
var this__13380__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

datascript.core.Datom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__13371__auto__){
var self__ = this;
var this__13371__auto____$1 = this;
var h__13194__auto__ = self__.__hash;
if(!((h__13194__auto__ == null))){
return h__13194__auto__;
} else {
var h__13194__auto____$1 = cljs.core.hash_imap.call(null,this__13371__auto____$1);
self__.__hash = h__13194__auto____$1;

return h__13194__auto____$1;
}
});

datascript.core.Datom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__13372__auto__,other__13373__auto__){
var self__ = this;
var this__13372__auto____$1 = this;
if(cljs.core.truth_((function (){var and__12761__auto__ = other__13373__auto__;
if(cljs.core.truth_(and__12761__auto__)){
return ((this__13372__auto____$1.constructor === other__13373__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__13372__auto____$1,other__13373__auto__));
} else {
return and__12761__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.core.Datom.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__13385__auto__,k__13386__auto__){
var self__ = this;
var this__13385__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"v","v",21465059),null,new cljs.core.Keyword(null,"added","added",2057651688),null,new cljs.core.Keyword(null,"e","e",1381269198),null,new cljs.core.Keyword(null,"tx","tx",466630418),null,new cljs.core.Keyword(null,"a","a",-2123407586),null], null), null),k__13386__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__13385__auto____$1),self__.__meta),k__13386__auto__);
} else {
return (new datascript.core.Datom(self__.e,self__.a,self__.v,self__.tx,self__.added,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__13386__auto__)),null));
}
});

datascript.core.Datom.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__13383__auto__,k__13384__auto__,G__26936){
var self__ = this;
var this__13383__auto____$1 = this;
var pred__26940 = cljs.core.keyword_identical_QMARK_;
var expr__26941 = k__13384__auto__;
if(cljs.core.truth_(pred__26940.call(null,new cljs.core.Keyword(null,"e","e",1381269198),expr__26941))){
return (new datascript.core.Datom(G__26936,self__.a,self__.v,self__.tx,self__.added,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26940.call(null,new cljs.core.Keyword(null,"a","a",-2123407586),expr__26941))){
return (new datascript.core.Datom(self__.e,G__26936,self__.v,self__.tx,self__.added,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26940.call(null,new cljs.core.Keyword(null,"v","v",21465059),expr__26941))){
return (new datascript.core.Datom(self__.e,self__.a,G__26936,self__.tx,self__.added,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26940.call(null,new cljs.core.Keyword(null,"tx","tx",466630418),expr__26941))){
return (new datascript.core.Datom(self__.e,self__.a,self__.v,G__26936,self__.added,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26940.call(null,new cljs.core.Keyword(null,"added","added",2057651688),expr__26941))){
return (new datascript.core.Datom(self__.e,self__.a,self__.v,self__.tx,G__26936,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.core.Datom(self__.e,self__.a,self__.v,self__.tx,self__.added,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__13384__auto__,G__26936),null));
}
}
}
}
}
});

datascript.core.Datom.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__13388__auto__){
var self__ = this;
var this__13388__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"e","e",1381269198),self__.e],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"a","a",-2123407586),self__.a],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",21465059),self__.v],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx","tx",466630418),self__.tx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"added","added",2057651688),self__.added],null))], null),self__.__extmap));
});

datascript.core.Datom.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__13375__auto__,G__26936){
var self__ = this;
var this__13375__auto____$1 = this;
return (new datascript.core.Datom(self__.e,self__.a,self__.v,self__.tx,self__.added,G__26936,self__.__extmap,self__.__hash));
});

datascript.core.Datom.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__13381__auto__,entry__13382__auto__){
var self__ = this;
var this__13381__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__13382__auto__)){
return cljs.core._assoc.call(null,this__13381__auto____$1,cljs.core._nth.call(null,entry__13382__auto__,(0)),cljs.core._nth.call(null,entry__13382__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__13381__auto____$1,entry__13382__auto__);
}
});

datascript.core.Datom.cljs$lang$type = true;

datascript.core.Datom.cljs$lang$ctorPrSeq = (function (this__13410__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.core/Datom");
});

datascript.core.Datom.cljs$lang$ctorPrWriter = (function (this__13410__auto__,writer__13411__auto__){
return cljs.core._write.call(null,writer__13411__auto__,"datascript.core/Datom");
});

datascript.core.__GT_Datom = (function __GT_Datom(e,a,v,tx,added){
return (new datascript.core.Datom(e,a,v,tx,added,null,null,null));
});

datascript.core.map__GT_Datom = (function map__GT_Datom(G__26938){
return (new datascript.core.Datom(new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(G__26938),new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(G__26938),new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(G__26938),new cljs.core.Keyword(null,"tx","tx",466630418).cljs$core$IFn$_invoke$arity$1(G__26938),new cljs.core.Keyword(null,"added","added",2057651688).cljs$core$IFn$_invoke$arity$1(G__26938),null,cljs.core.dissoc.call(null,G__26938,new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.Keyword(null,"added","added",2057651688)),null));
});

datascript.core.Datom.prototype.cljs$core$ISeqable$ = true;

datascript.core.Datom.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (d){
var d__$1 = this;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,d__$1.added),d__$1.tx),d__$1.v),d__$1.a),d__$1.e);
});

datascript.core.Datom.prototype.cljs$core$IEquiv$ = true;

datascript.core.Datom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (d,o){
var d__$1 = this;
return (cljs.core._EQ_.call(null,d__$1.e,o.e)) && (cljs.core._EQ_.call(null,d__$1.a,o.a)) && (cljs.core._EQ_.call(null,d__$1.v,o.v));
});

datascript.core.Datom.prototype.cljs$core$IHash$ = true;

datascript.core.Datom.prototype.cljs$core$IHash$_hash$arity$1 = (function (d){
var d__$1 = this;
var or__12773__auto__ = d__$1.__hash;
if(cljs.core.truth_(or__12773__auto__)){
return or__12773__auto__;
} else {
return d__$1.__hash = cljs.core.hash_combine.call(null,cljs.core.hash_combine.call(null,cljs.core.hash.call(null,d__$1.e),cljs.core.hash.call(null,d__$1.a)),cljs.core.hash.call(null,d__$1.v));
}
});

datascript.core.ISearch = (function (){var obj26945 = {};
return obj26945;
})();

datascript.core._search = (function _search(data,pattern){
if((function (){var and__12761__auto__ = data;
if(and__12761__auto__){
return data.datascript$core$ISearch$_search$arity$2;
} else {
return and__12761__auto__;
}
})()){
return data.datascript$core$ISearch$_search$arity$2(data,pattern);
} else {
var x__13417__auto__ = (((data == null))?null:data);
return (function (){var or__12773__auto__ = (datascript.core._search[goog.typeOf(x__13417__auto__)]);
if(or__12773__auto__){
return or__12773__auto__;
} else {
var or__12773__auto____$1 = (datascript.core._search["_"]);
if(or__12773__auto____$1){
return or__12773__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"ISearch.-search",data);
}
}
})().call(null,data,pattern);
}
});


datascript.core.IIndexAccess = (function (){var obj26947 = {};
return obj26947;
})();

datascript.core._datoms = (function _datoms(db,index,components){
if((function (){var and__12761__auto__ = db;
if(and__12761__auto__){
return db.datascript$core$IIndexAccess$_datoms$arity$3;
} else {
return and__12761__auto__;
}
})()){
return db.datascript$core$IIndexAccess$_datoms$arity$3(db,index,components);
} else {
var x__13417__auto__ = (((db == null))?null:db);
return (function (){var or__12773__auto__ = (datascript.core._datoms[goog.typeOf(x__13417__auto__)]);
if(or__12773__auto__){
return or__12773__auto__;
} else {
var or__12773__auto____$1 = (datascript.core._datoms["_"]);
if(or__12773__auto____$1){
return or__12773__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IIndexAccess.-datoms",db);
}
}
})().call(null,db,index,components);
}
});

datascript.core._seek_datoms = (function _seek_datoms(db,index,components){
if((function (){var and__12761__auto__ = db;
if(and__12761__auto__){
return db.datascript$core$IIndexAccess$_seek_datoms$arity$3;
} else {
return and__12761__auto__;
}
})()){
return db.datascript$core$IIndexAccess$_seek_datoms$arity$3(db,index,components);
} else {
var x__13417__auto__ = (((db == null))?null:db);
return (function (){var or__12773__auto__ = (datascript.core._seek_datoms[goog.typeOf(x__13417__auto__)]);
if(or__12773__auto__){
return or__12773__auto__;
} else {
var or__12773__auto____$1 = (datascript.core._seek_datoms["_"]);
if(or__12773__auto____$1){
return or__12773__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IIndexAccess.-seek-datoms",db);
}
}
})().call(null,db,index,components);
}
});

datascript.core._index_range = (function _index_range(db,attr,start,end){
if((function (){var and__12761__auto__ = db;
if(and__12761__auto__){
return db.datascript$core$IIndexAccess$_index_range$arity$4;
} else {
return and__12761__auto__;
}
})()){
return db.datascript$core$IIndexAccess$_index_range$arity$4(db,attr,start,end);
} else {
var x__13417__auto__ = (((db == null))?null:db);
return (function (){var or__12773__auto__ = (datascript.core._index_range[goog.typeOf(x__13417__auto__)]);
if(or__12773__auto__){
return or__12773__auto__;
} else {
var or__12773__auto____$1 = (datascript.core._index_range["_"]);
if(or__12773__auto____$1){
return or__12773__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IIndexAccess.-index-range",db);
}
}
})().call(null,db,attr,start,end);
}
});


datascript.core.IDB = (function (){var obj26949 = {};
return obj26949;
})();

datascript.core._schema = (function _schema(db){
if((function (){var and__12761__auto__ = db;
if(and__12761__auto__){
return db.datascript$core$IDB$_schema$arity$1;
} else {
return and__12761__auto__;
}
})()){
return db.datascript$core$IDB$_schema$arity$1(db);
} else {
var x__13417__auto__ = (((db == null))?null:db);
return (function (){var or__12773__auto__ = (datascript.core._schema[goog.typeOf(x__13417__auto__)]);
if(or__12773__auto__){
return or__12773__auto__;
} else {
var or__12773__auto____$1 = (datascript.core._schema["_"]);
if(or__12773__auto____$1){
return or__12773__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDB.-schema",db);
}
}
})().call(null,db);
}
});

datascript.core._refs = (function _refs(db){
if((function (){var and__12761__auto__ = db;
if(and__12761__auto__){
return db.datascript$core$IDB$_refs$arity$1;
} else {
return and__12761__auto__;
}
})()){
return db.datascript$core$IDB$_refs$arity$1(db);
} else {
var x__13417__auto__ = (((db == null))?null:db);
return (function (){var or__12773__auto__ = (datascript.core._refs[goog.typeOf(x__13417__auto__)]);
if(or__12773__auto__){
return or__12773__auto__;
} else {
var or__12773__auto____$1 = (datascript.core._refs["_"]);
if(or__12773__auto____$1){
return or__12773__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"IDB.-refs",db);
}
}
})().call(null,db);
}
});

datascript.core.cmp = (function cmp(o1,o2){
if(cljs.core.truth_((function (){var and__12761__auto__ = o1;
if(cljs.core.truth_(and__12761__auto__)){
return o2;
} else {
return and__12761__auto__;
}
})())){
return cljs.core.compare.call(null,o1,o2);
} else {
return (0);
}
});
datascript.core.cmp_num = (function cmp_num(n1,n2){
if(cljs.core.truth_((function (){var and__12761__auto__ = n1;
if(cljs.core.truth_(and__12761__auto__)){
return n2;
} else {
return and__12761__auto__;
}
})())){
return (n1 - n2);
} else {
return (0);
}
});
datascript.core.cmp_val = (function cmp_val(o1,o2){
if((cljs.core.some_QMARK_.call(null,o1)) && (cljs.core.some_QMARK_.call(null,o2))){
var t1 = cljs.core.type.call(null,o1);
var t2 = cljs.core.type.call(null,o2);
if((t1 === t2)){
return cljs.core.compare.call(null,o1,o2);
} else {
return goog.array.defaultCompare(t1,t2);
}
} else {
return (0);
}
});
datascript.core.cmp_datoms_eavt = (function cmp_datoms_eavt(d1,d2){
var c__15098__auto__ = datascript.core.cmp_num.call(null,d1.e,d2.e);
if(((0) === c__15098__auto__)){
var c__15098__auto____$1 = datascript.core.cmp.call(null,d1.a,d2.a);
if(((0) === c__15098__auto____$1)){
var c__15098__auto____$2 = datascript.core.cmp_val.call(null,d1.v,d2.v);
if(((0) === c__15098__auto____$2)){
var c__15098__auto____$3 = datascript.core.cmp_num.call(null,d1.tx,d2.tx);
if(((0) === c__15098__auto____$3)){
return (0);
} else {
return c__15098__auto____$3;
}
} else {
return c__15098__auto____$2;
}
} else {
return c__15098__auto____$1;
}
} else {
return c__15098__auto__;
}
});
datascript.core.cmp_datoms_aevt = (function cmp_datoms_aevt(d1,d2){
var c__15098__auto__ = datascript.core.cmp.call(null,d1.a,d2.a);
if(((0) === c__15098__auto__)){
var c__15098__auto____$1 = datascript.core.cmp_num.call(null,d1.e,d2.e);
if(((0) === c__15098__auto____$1)){
var c__15098__auto____$2 = datascript.core.cmp_val.call(null,d1.v,d2.v);
if(((0) === c__15098__auto____$2)){
var c__15098__auto____$3 = datascript.core.cmp_num.call(null,d1.tx,d2.tx);
if(((0) === c__15098__auto____$3)){
return (0);
} else {
return c__15098__auto____$3;
}
} else {
return c__15098__auto____$2;
}
} else {
return c__15098__auto____$1;
}
} else {
return c__15098__auto__;
}
});
datascript.core.cmp_datoms_avet = (function cmp_datoms_avet(d1,d2){
var c__15098__auto__ = datascript.core.cmp.call(null,d1.a,d2.a);
if(((0) === c__15098__auto__)){
var c__15098__auto____$1 = datascript.core.cmp_val.call(null,d1.v,d2.v);
if(((0) === c__15098__auto____$1)){
var c__15098__auto____$2 = datascript.core.cmp_num.call(null,d1.e,d2.e);
if(((0) === c__15098__auto____$2)){
var c__15098__auto____$3 = datascript.core.cmp_num.call(null,d1.tx,d2.tx);
if(((0) === c__15098__auto____$3)){
return (0);
} else {
return c__15098__auto____$3;
}
} else {
return c__15098__auto____$2;
}
} else {
return c__15098__auto____$1;
}
} else {
return c__15098__auto__;
}
});
datascript.core.compare_keywords_quick = (function compare_keywords_quick(a,b){
if((a.fqn === b.fqn)){
return (0);
} else {
if(cljs.core.truth_((function (){var and__12761__auto__ = cljs.core.not.call(null,a.ns);
if(and__12761__auto__){
return b.ns;
} else {
return and__12761__auto__;
}
})())){
return (-1);
} else {
if(cljs.core.truth_(a.ns)){
if(cljs.core.not.call(null,b.ns)){
return (1);
} else {
var nsc = goog.array.defaultCompare(a.ns,b.ns);
if((nsc === (0))){
return goog.array.defaultCompare(a.name,b.name);
} else {
return nsc;
}
}
} else {
return goog.array.defaultCompare(a.name,b.name);

}
}
}
});
datascript.core.cmp_attr_quick = (function cmp_attr_quick(a1,a2){
if((a1 instanceof cljs.core.Keyword)){
return datascript.core.compare_keywords_quick.call(null,a1,a2);
} else {
return goog.array.defaultCompare(a1,a2);
}
});
datascript.core.cmp_val_quick = (function cmp_val_quick(o1,o2){
var t1 = cljs.core.type.call(null,o1);
var t2 = cljs.core.type.call(null,o2);
if((t1 === t2)){
return cljs.core.compare.call(null,o1,o2);
} else {
return goog.array.defaultCompare(t1,t2);
}
});
datascript.core.cmp_datoms_eavt_quick = (function cmp_datoms_eavt_quick(d1,d2){
var c__15098__auto__ = (d1.e - d2.e);
if(((0) === c__15098__auto__)){
var c__15098__auto____$1 = datascript.core.cmp_attr_quick.call(null,d1.a,d2.a);
if(((0) === c__15098__auto____$1)){
var c__15098__auto____$2 = datascript.core.cmp_val_quick.call(null,d1.v,d2.v);
if(((0) === c__15098__auto____$2)){
var c__15098__auto____$3 = (d1.tx - d2.tx);
if(((0) === c__15098__auto____$3)){
return (0);
} else {
return c__15098__auto____$3;
}
} else {
return c__15098__auto____$2;
}
} else {
return c__15098__auto____$1;
}
} else {
return c__15098__auto__;
}
});
datascript.core.cmp_datoms_aevt_quick = (function cmp_datoms_aevt_quick(d1,d2){
var c__15098__auto__ = datascript.core.cmp_attr_quick.call(null,d1.a,d2.a);
if(((0) === c__15098__auto__)){
var c__15098__auto____$1 = (d1.e - d2.e);
if(((0) === c__15098__auto____$1)){
var c__15098__auto____$2 = datascript.core.cmp_val_quick.call(null,d1.v,d2.v);
if(((0) === c__15098__auto____$2)){
var c__15098__auto____$3 = (d1.tx - d2.tx);
if(((0) === c__15098__auto____$3)){
return (0);
} else {
return c__15098__auto____$3;
}
} else {
return c__15098__auto____$2;
}
} else {
return c__15098__auto____$1;
}
} else {
return c__15098__auto__;
}
});
datascript.core.cmp_datoms_avet_quick = (function cmp_datoms_avet_quick(d1,d2){
var c__15098__auto__ = datascript.core.cmp_attr_quick.call(null,d1.a,d2.a);
if(((0) === c__15098__auto__)){
var c__15098__auto____$1 = datascript.core.cmp_val_quick.call(null,d1.v,d2.v);
if(((0) === c__15098__auto____$1)){
var c__15098__auto____$2 = (d1.e - d2.e);
if(((0) === c__15098__auto____$2)){
var c__15098__auto____$3 = (d1.tx - d2.tx);
if(((0) === c__15098__auto____$3)){
return (0);
} else {
return c__15098__auto____$3;
}
} else {
return c__15098__auto____$2;
}
} else {
return c__15098__auto____$1;
}
} else {
return c__15098__auto__;
}
});
datascript.core.components__GT_pattern = (function components__GT_pattern(index,p__26950){
var vec__26953 = p__26950;
var c0 = cljs.core.nth.call(null,vec__26953,(0),null);
var c1 = cljs.core.nth.call(null,vec__26953,(1),null);
var c2 = cljs.core.nth.call(null,vec__26953,(2),null);
var c3 = cljs.core.nth.call(null,vec__26953,(3),null);
var G__26954 = (((index instanceof cljs.core.Keyword))?index.fqn:null);
switch (G__26954) {
case "avet":
return (new datascript.core.Datom(c2,c0,c1,c3,null,null,null,null));

break;
case "aevt":
return (new datascript.core.Datom(c1,c0,c2,c3,null,null,null,null));

break;
case "eavt":
return (new datascript.core.Datom(c0,c1,c2,c3,null,null,null,null));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(index)].join('')));

}
});

/**
* @constructor
* @param {*} schema
* @param {*} eavt
* @param {*} aevt
* @param {*} avet
* @param {*} max_eid
* @param {*} max_tx
* @param {*} refs
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
datascript.core.DB = (function (schema,eavt,aevt,avet,max_eid,max_tx,refs,__meta,__extmap,__hash){
this.schema = schema;
this.eavt = eavt;
this.aevt = aevt;
this.avet = avet;
this.max_eid = max_eid;
this.max_tx = max_tx;
this.refs = refs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.core.DB.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str_STAR_.call(null,this$);
});

datascript.core.DB.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__13376__auto__,k__13377__auto__){
var self__ = this;
var this__13376__auto____$1 = this;
return cljs.core._lookup.call(null,this__13376__auto____$1,k__13377__auto__,null);
});

datascript.core.DB.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__13378__auto__,k26966,else__13379__auto__){
var self__ = this;
var this__13378__auto____$1 = this;
var G__26968 = (((k26966 instanceof cljs.core.Keyword))?k26966.fqn:null);
switch (G__26968) {
case "refs":
return self__.refs;

break;
case "max-tx":
return self__.max_tx;

break;
case "max-eid":
return self__.max_eid;

break;
case "avet":
return self__.avet;

break;
case "aevt":
return self__.aevt;

break;
case "eavt":
return self__.eavt;

break;
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k26966,else__13379__auto__);

}
});

datascript.core.DB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__13390__auto__,writer__13391__auto__,opts__13392__auto__){
var self__ = this;
var this__13390__auto____$1 = this;
var pr_pair__13393__auto__ = ((function (this__13390__auto____$1){
return (function (keyval__13394__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__13391__auto__,cljs.core.pr_writer,""," ","",opts__13392__auto__,keyval__13394__auto__);
});})(this__13390__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__13391__auto__,pr_pair__13393__auto__,"#datascript.core.DB{",", ","}",opts__13392__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"eavt","eavt",-666437073),self__.eavt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"aevt","aevt",-585148059),self__.aevt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"avet","avet",1383857032),self__.avet],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),self__.max_eid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),self__.max_tx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"refs","refs",-1560051448),self__.refs],null))], null),self__.__extmap));
});

datascript.core.DB.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__13374__auto__){
var self__ = this;
var this__13374__auto____$1 = this;
return self__.__meta;
});

datascript.core.DB.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__13370__auto__){
var self__ = this;
var this__13370__auto____$1 = this;
return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.refs,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.core.DB.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__13380__auto__){
var self__ = this;
var this__13380__auto____$1 = this;
return (7 + cljs.core.count.call(null,self__.__extmap));
});

datascript.core.DB.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__13371__auto__){
var self__ = this;
var this__13371__auto____$1 = this;
var h__13194__auto__ = self__.__hash;
if(!((h__13194__auto__ == null))){
return h__13194__auto__;
} else {
var h__13194__auto____$1 = cljs.core.hash_imap.call(null,this__13371__auto____$1);
self__.__hash = h__13194__auto____$1;

return h__13194__auto____$1;
}
});

datascript.core.DB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__13372__auto__,other__13373__auto__){
var self__ = this;
var this__13372__auto____$1 = this;
if(cljs.core.truth_((function (){var and__12761__auto__ = other__13373__auto__;
if(cljs.core.truth_(and__12761__auto__)){
return ((this__13372__auto____$1.constructor === other__13373__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__13372__auto____$1,other__13373__auto__));
} else {
return and__12761__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.core.DB.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__13385__auto__,k__13386__auto__){
var self__ = this;
var this__13385__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),null,new cljs.core.Keyword(null,"aevt","aevt",-585148059),null,new cljs.core.Keyword(null,"refs","refs",-1560051448),null,new cljs.core.Keyword(null,"avet","avet",1383857032),null,new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),null,new cljs.core.Keyword(null,"eavt","eavt",-666437073),null], null), null),k__13386__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__13385__auto____$1),self__.__meta),k__13386__auto__);
} else {
return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.refs,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__13386__auto__)),null));
}
});

datascript.core.DB.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__13383__auto__,k__13384__auto__,G__26965){
var self__ = this;
var this__13383__auto____$1 = this;
var pred__26969 = cljs.core.keyword_identical_QMARK_;
var expr__26970 = k__13384__auto__;
if(cljs.core.truth_(pred__26969.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__26970))){
return (new datascript.core.DB(G__26965,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.refs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26969.call(null,new cljs.core.Keyword(null,"eavt","eavt",-666437073),expr__26970))){
return (new datascript.core.DB(self__.schema,G__26965,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.refs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26969.call(null,new cljs.core.Keyword(null,"aevt","aevt",-585148059),expr__26970))){
return (new datascript.core.DB(self__.schema,self__.eavt,G__26965,self__.avet,self__.max_eid,self__.max_tx,self__.refs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26969.call(null,new cljs.core.Keyword(null,"avet","avet",1383857032),expr__26970))){
return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,G__26965,self__.max_eid,self__.max_tx,self__.refs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26969.call(null,new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),expr__26970))){
return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,G__26965,self__.max_tx,self__.refs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26969.call(null,new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),expr__26970))){
return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,G__26965,self__.refs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26969.call(null,new cljs.core.Keyword(null,"refs","refs",-1560051448),expr__26970))){
return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,G__26965,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.refs,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__13384__auto__,G__26965),null));
}
}
}
}
}
}
}
});

datascript.core.DB.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__13388__auto__){
var self__ = this;
var this__13388__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"eavt","eavt",-666437073),self__.eavt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"aevt","aevt",-585148059),self__.aevt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"avet","avet",1383857032),self__.avet],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),self__.max_eid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),self__.max_tx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"refs","refs",-1560051448),self__.refs],null))], null),self__.__extmap));
});

datascript.core.DB.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__13375__auto__,G__26965){
var self__ = this;
var this__13375__auto____$1 = this;
return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.refs,G__26965,self__.__extmap,self__.__hash));
});

datascript.core.DB.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__13381__auto__,entry__13382__auto__){
var self__ = this;
var this__13381__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__13382__auto__)){
return cljs.core._assoc.call(null,this__13381__auto____$1,cljs.core._nth.call(null,entry__13382__auto__,(0)),cljs.core._nth.call(null,entry__13382__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__13381__auto____$1,entry__13382__auto__);
}
});

datascript.core.DB.prototype.datascript$core$IIndexAccess$ = true;

datascript.core.DB.prototype.datascript$core$IIndexAccess$_datoms$arity$3 = (function (this$,index,cs){
var self__ = this;
var this$__$1 = this;
return datascript.btset.slice.call(null,cljs.core.get.call(null,this$__$1,index),datascript.core.components__GT_pattern.call(null,index,cs));
});

datascript.core.DB.prototype.datascript$core$IIndexAccess$_seek_datoms$arity$3 = (function (this$,index,cs){
var self__ = this;
var this$__$1 = this;
return datascript.btset.slice.call(null,cljs.core.get.call(null,this$__$1,index),datascript.core.components__GT_pattern.call(null,index,cs),(new datascript.core.Datom(null,null,null,null,null,null,null,null)));
});

datascript.core.DB.prototype.datascript$core$IIndexAccess$_index_range$arity$4 = (function (_,attr,start,end){
var self__ = this;
var ___$1 = this;
return datascript.btset.slice.call(null,self__.avet,(new datascript.core.Datom(null,attr,start,null,null,null,null,null)),(new datascript.core.Datom(null,attr,end,null,null,null,null,null)));
});

datascript.core.DB.prototype.datascript$core$IDB$ = true;

datascript.core.DB.prototype.datascript$core$IDB$_schema$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.schema;
});

datascript.core.DB.prototype.datascript$core$IDB$_refs$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.refs;
});

datascript.core.DB.prototype.datascript$core$ISearch$ = true;

datascript.core.DB.prototype.datascript$core$ISearch$_search$arity$2 = (function (_,p__26972){
var self__ = this;
var vec__26973 = p__26972;
var e = cljs.core.nth.call(null,vec__26973,(0),null);
var a = cljs.core.nth.call(null,vec__26973,(1),null);
var v = cljs.core.nth.call(null,vec__26973,(2),null);
var tx = cljs.core.nth.call(null,vec__26973,(3),null);
var ___$1 = this;
if(cljs.core.truth_(e)){
if(cljs.core.truth_(a)){
if(cljs.core.some_QMARK_.call(null,v)){
if(cljs.core.truth_(tx)){
return datascript.btset.slice.call(null,self__.eavt,(new datascript.core.Datom(e,a,v,tx,null,null,null,null)));
} else {
return datascript.btset.slice.call(null,self__.eavt,(new datascript.core.Datom(e,a,v,null,null,null,null,null)));
}
} else {
if(cljs.core.truth_(tx)){
return cljs.core.filter.call(null,((function (___$1,vec__26973,e,a,v,tx){
return (function (p1__26956_SHARP_){
return cljs.core._EQ_.call(null,tx,p1__26956_SHARP_.tx);
});})(___$1,vec__26973,e,a,v,tx))
,datascript.btset.slice.call(null,self__.eavt,(new datascript.core.Datom(e,a,null,null,null,null,null,null))));
} else {
return datascript.btset.slice.call(null,self__.eavt,(new datascript.core.Datom(e,a,null,null,null,null,null,null)));
}
}
} else {
if(cljs.core.some_QMARK_.call(null,v)){
if(cljs.core.truth_(tx)){
return cljs.core.filter.call(null,((function (___$1,vec__26973,e,a,v,tx){
return (function (p1__26957_SHARP_){
return (cljs.core._EQ_.call(null,v,p1__26957_SHARP_.v)) && (cljs.core._EQ_.call(null,tx,p1__26957_SHARP_.tx));
});})(___$1,vec__26973,e,a,v,tx))
,datascript.btset.slice.call(null,self__.eavt,(new datascript.core.Datom(e,null,null,null,null,null,null,null))));
} else {
return cljs.core.filter.call(null,((function (___$1,vec__26973,e,a,v,tx){
return (function (p1__26958_SHARP_){
return cljs.core._EQ_.call(null,v,p1__26958_SHARP_.v);
});})(___$1,vec__26973,e,a,v,tx))
,datascript.btset.slice.call(null,self__.eavt,(new datascript.core.Datom(e,null,null,null,null,null,null,null))));
}
} else {
if(cljs.core.truth_(tx)){
return cljs.core.filter.call(null,((function (___$1,vec__26973,e,a,v,tx){
return (function (p1__26959_SHARP_){
return cljs.core._EQ_.call(null,tx,p1__26959_SHARP_.tx);
});})(___$1,vec__26973,e,a,v,tx))
,datascript.btset.slice.call(null,self__.eavt,(new datascript.core.Datom(e,null,null,null,null,null,null,null))));
} else {
return datascript.btset.slice.call(null,self__.eavt,(new datascript.core.Datom(e,null,null,null,null,null,null,null)));
}
}
}
} else {
if(cljs.core.truth_(a)){
if(cljs.core.some_QMARK_.call(null,v)){
if(cljs.core.truth_(tx)){
return cljs.core.filter.call(null,((function (___$1,vec__26973,e,a,v,tx){
return (function (p1__26960_SHARP_){
return cljs.core._EQ_.call(null,tx,p1__26960_SHARP_.tx);
});})(___$1,vec__26973,e,a,v,tx))
,datascript.btset.slice.call(null,self__.avet,(new datascript.core.Datom(null,a,v,null,null,null,null,null))));
} else {
return datascript.btset.slice.call(null,self__.avet,(new datascript.core.Datom(null,a,v,null,null,null,null,null)));
}
} else {
if(cljs.core.truth_(tx)){
return cljs.core.filter.call(null,((function (___$1,vec__26973,e,a,v,tx){
return (function (p1__26961_SHARP_){
return cljs.core._EQ_.call(null,tx,p1__26961_SHARP_.tx);
});})(___$1,vec__26973,e,a,v,tx))
,datascript.btset.slice.call(null,self__.avet,(new datascript.core.Datom(null,a,null,null,null,null,null,null))));
} else {
return datascript.btset.slice.call(null,self__.avet,(new datascript.core.Datom(null,a,null,null,null,null,null,null)));
}
}
} else {
if(cljs.core.some_QMARK_.call(null,v)){
if(cljs.core.truth_(tx)){
return cljs.core.filter.call(null,((function (___$1,vec__26973,e,a,v,tx){
return (function (p1__26962_SHARP_){
return (cljs.core._EQ_.call(null,v,p1__26962_SHARP_.v)) && (cljs.core._EQ_.call(null,tx,p1__26962_SHARP_.tx));
});})(___$1,vec__26973,e,a,v,tx))
,self__.eavt);
} else {
return cljs.core.filter.call(null,((function (___$1,vec__26973,e,a,v,tx){
return (function (p1__26963_SHARP_){
return cljs.core._EQ_.call(null,v,p1__26963_SHARP_.v);
});})(___$1,vec__26973,e,a,v,tx))
,self__.eavt);
}
} else {
if(cljs.core.truth_(tx)){
return cljs.core.filter.call(null,((function (___$1,vec__26973,e,a,v,tx){
return (function (p1__26964_SHARP_){
return cljs.core._EQ_.call(null,tx,p1__26964_SHARP_.tx);
});})(___$1,vec__26973,e,a,v,tx))
,self__.eavt);
} else {
return self__.eavt;
}
}
}
}
});

datascript.core.DB.cljs$lang$type = true;

datascript.core.DB.cljs$lang$ctorPrSeq = (function (this__13410__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.core/DB");
});

datascript.core.DB.cljs$lang$ctorPrWriter = (function (this__13410__auto__,writer__13411__auto__){
return cljs.core._write.call(null,writer__13411__auto__,"datascript.core/DB");
});

datascript.core.__GT_DB = (function __GT_DB(schema,eavt,aevt,avet,max_eid,max_tx,refs){
return (new datascript.core.DB(schema,eavt,aevt,avet,max_eid,max_tx,refs,null,null,null));
});

datascript.core.map__GT_DB = (function map__GT_DB(G__26967){
return (new datascript.core.DB(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__26967),new cljs.core.Keyword(null,"eavt","eavt",-666437073).cljs$core$IFn$_invoke$arity$1(G__26967),new cljs.core.Keyword(null,"aevt","aevt",-585148059).cljs$core$IFn$_invoke$arity$1(G__26967),new cljs.core.Keyword(null,"avet","avet",1383857032).cljs$core$IFn$_invoke$arity$1(G__26967),new cljs.core.Keyword(null,"max-eid","max-eid",2134868075).cljs$core$IFn$_invoke$arity$1(G__26967),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339).cljs$core$IFn$_invoke$arity$1(G__26967),new cljs.core.Keyword(null,"refs","refs",-1560051448).cljs$core$IFn$_invoke$arity$1(G__26967),null,cljs.core.dissoc.call(null,G__26967,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"eavt","eavt",-666437073),new cljs.core.Keyword(null,"aevt","aevt",-585148059),new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),new cljs.core.Keyword(null,"refs","refs",-1560051448)),null));
});


/**
* @constructor
* @param {*} unfiltered_db
* @param {*} pred
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
datascript.core.FilteredDB = (function (unfiltered_db,pred,__meta,__extmap,__hash){
this.unfiltered_db = unfiltered_db;
this.pred = pred;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.core.FilteredDB.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str_STAR_.call(null,this$);
});

datascript.core.FilteredDB.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__13376__auto__,k__13377__auto__){
var self__ = this;
var this__13376__auto____$1 = this;
return cljs.core._lookup.call(null,this__13376__auto____$1,k__13377__auto__,null);
});

datascript.core.FilteredDB.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__13378__auto__,k26976,else__13379__auto__){
var self__ = this;
var this__13378__auto____$1 = this;
var G__26978 = (((k26976 instanceof cljs.core.Keyword))?k26976.fqn:null);
switch (G__26978) {
case "pred":
return self__.pred;

break;
case "unfiltered-db":
return self__.unfiltered_db;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k26976,else__13379__auto__);

}
});

datascript.core.FilteredDB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__13390__auto__,writer__13391__auto__,opts__13392__auto__){
var self__ = this;
var this__13390__auto____$1 = this;
var pr_pair__13393__auto__ = ((function (this__13390__auto____$1){
return (function (keyval__13394__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__13391__auto__,cljs.core.pr_writer,""," ","",opts__13392__auto__,keyval__13394__auto__);
});})(this__13390__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__13391__auto__,pr_pair__13393__auto__,"#datascript.core.FilteredDB{",", ","}",opts__13392__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unfiltered-db","unfiltered-db",-1363720391),self__.unfiltered_db],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pred","pred",1927423397),self__.pred],null))], null),self__.__extmap));
});

datascript.core.FilteredDB.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__13374__auto__){
var self__ = this;
var this__13374__auto____$1 = this;
return self__.__meta;
});

datascript.core.FilteredDB.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__13370__auto__){
var self__ = this;
var this__13370__auto____$1 = this;
return (new datascript.core.FilteredDB(self__.unfiltered_db,self__.pred,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.core.FilteredDB.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__13380__auto__){
var self__ = this;
var this__13380__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

datascript.core.FilteredDB.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__13371__auto__){
var self__ = this;
var this__13371__auto____$1 = this;
var h__13194__auto__ = self__.__hash;
if(!((h__13194__auto__ == null))){
return h__13194__auto__;
} else {
var h__13194__auto____$1 = cljs.core.hash_imap.call(null,this__13371__auto____$1);
self__.__hash = h__13194__auto____$1;

return h__13194__auto____$1;
}
});

datascript.core.FilteredDB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__13372__auto__,other__13373__auto__){
var self__ = this;
var this__13372__auto____$1 = this;
if(cljs.core.truth_((function (){var and__12761__auto__ = other__13373__auto__;
if(cljs.core.truth_(and__12761__auto__)){
return ((this__13372__auto____$1.constructor === other__13373__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__13372__auto____$1,other__13373__auto__));
} else {
return and__12761__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.core.FilteredDB.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__13385__auto__,k__13386__auto__){
var self__ = this;
var this__13385__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"unfiltered-db","unfiltered-db",-1363720391),null], null), null),k__13386__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__13385__auto____$1),self__.__meta),k__13386__auto__);
} else {
return (new datascript.core.FilteredDB(self__.unfiltered_db,self__.pred,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__13386__auto__)),null));
}
});

datascript.core.FilteredDB.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__13383__auto__,k__13384__auto__,G__26975){
var self__ = this;
var this__13383__auto____$1 = this;
var pred__26979 = cljs.core.keyword_identical_QMARK_;
var expr__26980 = k__13384__auto__;
if(cljs.core.truth_(pred__26979.call(null,new cljs.core.Keyword(null,"unfiltered-db","unfiltered-db",-1363720391),expr__26980))){
return (new datascript.core.FilteredDB(G__26975,self__.pred,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26979.call(null,new cljs.core.Keyword(null,"pred","pred",1927423397),expr__26980))){
return (new datascript.core.FilteredDB(self__.unfiltered_db,G__26975,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.core.FilteredDB(self__.unfiltered_db,self__.pred,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__13384__auto__,G__26975),null));
}
}
});

datascript.core.FilteredDB.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__13388__auto__){
var self__ = this;
var this__13388__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unfiltered-db","unfiltered-db",-1363720391),self__.unfiltered_db],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pred","pred",1927423397),self__.pred],null))], null),self__.__extmap));
});

datascript.core.FilteredDB.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__13375__auto__,G__26975){
var self__ = this;
var this__13375__auto____$1 = this;
return (new datascript.core.FilteredDB(self__.unfiltered_db,self__.pred,G__26975,self__.__extmap,self__.__hash));
});

datascript.core.FilteredDB.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__13381__auto__,entry__13382__auto__){
var self__ = this;
var this__13381__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__13382__auto__)){
return cljs.core._assoc.call(null,this__13381__auto____$1,cljs.core._nth.call(null,entry__13382__auto__,(0)),cljs.core._nth.call(null,entry__13382__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__13381__auto____$1,entry__13382__auto__);
}
});

datascript.core.FilteredDB.prototype.datascript$core$IIndexAccess$ = true;

datascript.core.FilteredDB.prototype.datascript$core$IIndexAccess$_datoms$arity$3 = (function (_,index,cs){
var self__ = this;
var ___$1 = this;
return cljs.core.filter.call(null,self__.pred,datascript.core._datoms.call(null,self__.unfiltered_db,index,cs));
});

datascript.core.FilteredDB.prototype.datascript$core$IIndexAccess$_seek_datoms$arity$3 = (function (_,index,cs){
var self__ = this;
var ___$1 = this;
return cljs.core.filter.call(null,self__.pred,datascript.core._seek_datoms.call(null,self__.unfiltered_db,index,cs));
});

datascript.core.FilteredDB.prototype.datascript$core$IIndexAccess$_index_range$arity$4 = (function (_,attr,start,end){
var self__ = this;
var ___$1 = this;
return cljs.core.filter.call(null,self__.pred,datascript.core._index_range.call(null,self__.unfiltered_db,attr,start,end));
});

datascript.core.FilteredDB.prototype.datascript$core$IDB$ = true;

datascript.core.FilteredDB.prototype.datascript$core$IDB$_schema$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return datascript.core._schema.call(null,self__.unfiltered_db);
});

datascript.core.FilteredDB.prototype.datascript$core$IDB$_refs$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return datascript.core._refs.call(null,self__.unfiltered_db);
});

datascript.core.FilteredDB.prototype.datascript$core$ISearch$ = true;

datascript.core.FilteredDB.prototype.datascript$core$ISearch$_search$arity$2 = (function (_,pattern){
var self__ = this;
var ___$1 = this;
return cljs.core.filter.call(null,self__.pred,datascript.core._search.call(null,self__.unfiltered_db,pattern));
});

datascript.core.FilteredDB.cljs$lang$type = true;

datascript.core.FilteredDB.cljs$lang$ctorPrSeq = (function (this__13410__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.core/FilteredDB");
});

datascript.core.FilteredDB.cljs$lang$ctorPrWriter = (function (this__13410__auto__,writer__13411__auto__){
return cljs.core._write.call(null,writer__13411__auto__,"datascript.core/FilteredDB");
});

datascript.core.__GT_FilteredDB = (function __GT_FilteredDB(unfiltered_db,pred){
return (new datascript.core.FilteredDB(unfiltered_db,pred,null,null,null));
});

datascript.core.map__GT_FilteredDB = (function map__GT_FilteredDB(G__26977){
return (new datascript.core.FilteredDB(new cljs.core.Keyword(null,"unfiltered-db","unfiltered-db",-1363720391).cljs$core$IFn$_invoke$arity$1(G__26977),new cljs.core.Keyword(null,"pred","pred",1927423397).cljs$core$IFn$_invoke$arity$1(G__26977),null,cljs.core.dissoc.call(null,G__26977,new cljs.core.Keyword(null,"unfiltered-db","unfiltered-db",-1363720391),new cljs.core.Keyword(null,"pred","pred",1927423397)),null));
});

datascript.core._equiv_index = (function _equiv_index(x,y){
var and__12761__auto__ = cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,y));
if(and__12761__auto__){
var xs = cljs.core.seq.call(null,x);
var ys = cljs.core.seq.call(null,y);
while(true){
if((xs == null)){
return true;
} else {
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs),cljs.core.first.call(null,ys))){
var G__26983 = cljs.core.next.call(null,xs);
var G__26984 = cljs.core.next.call(null,ys);
xs = G__26983;
ys = G__26984;
continue;
} else {
return false;

}
}
break;
}
} else {
return and__12761__auto__;
}
});
datascript.core._hash_db = (function _hash_db(db){
var or__12773__auto__ = db.__hash;
if(cljs.core.truth_(or__12773__auto__)){
return or__12773__auto__;
} else {
return db.__hash = cljs.core.hash_coll.call(null,datascript.core._datoms.call(null,db,new cljs.core.Keyword(null,"eavt","eavt",-666437073),cljs.core.PersistentVector.EMPTY));
}
});
datascript.core._equiv_db = (function _equiv_db(this$,other){
return (((other instanceof datascript.core.DB)) || ((other instanceof datascript.core.FilteredDB))) && (cljs.core._EQ_.call(null,datascript.core._schema.call(null,this$),datascript.core._schema.call(null,other))) && (datascript.core._equiv_index.call(null,datascript.core._datoms.call(null,this$,new cljs.core.Keyword(null,"eavt","eavt",-666437073),cljs.core.PersistentVector.EMPTY),datascript.core._datoms.call(null,other,new cljs.core.Keyword(null,"eavt","eavt",-666437073),cljs.core.PersistentVector.EMPTY)));
});
datascript.core.DB.prototype.cljs$core$IEquiv$ = true;

datascript.core.DB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return datascript.core._equiv_db.call(null,this$__$1,other);
});

datascript.core.DB.prototype.cljs$core$IHash$ = true;

datascript.core.DB.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return datascript.core._hash_db.call(null,this$__$1);
});
datascript.core.FilteredDB.prototype.cljs$core$IEquiv$ = true;

datascript.core.FilteredDB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return datascript.core._equiv_db.call(null,this$__$1,other);
});

datascript.core.FilteredDB.prototype.cljs$core$IHash$ = true;

datascript.core.FilteredDB.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return datascript.core._hash_db.call(null,this$__$1);
});

/**
* @constructor
* @param {*} db_before
* @param {*} db_after
* @param {*} tx_data
* @param {*} tempids
* @param {*} tx_meta
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
datascript.core.TxReport = (function (db_before,db_after,tx_data,tempids,tx_meta,__meta,__extmap,__hash){
this.db_before = db_before;
this.db_after = db_after;
this.tx_data = tx_data;
this.tempids = tempids;
this.tx_meta = tx_meta;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.core.TxReport.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__13376__auto__,k__13377__auto__){
var self__ = this;
var this__13376__auto____$1 = this;
return cljs.core._lookup.call(null,this__13376__auto____$1,k__13377__auto__,null);
});

datascript.core.TxReport.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__13378__auto__,k26986,else__13379__auto__){
var self__ = this;
var this__13378__auto____$1 = this;
var G__26988 = (((k26986 instanceof cljs.core.Keyword))?k26986.fqn:null);
switch (G__26988) {
case "tx-meta":
return self__.tx_meta;

break;
case "tempids":
return self__.tempids;

break;
case "tx-data":
return self__.tx_data;

break;
case "db-after":
return self__.db_after;

break;
case "db-before":
return self__.db_before;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k26986,else__13379__auto__);

}
});

datascript.core.TxReport.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__13390__auto__,writer__13391__auto__,opts__13392__auto__){
var self__ = this;
var this__13390__auto____$1 = this;
var pr_pair__13393__auto__ = ((function (this__13390__auto____$1){
return (function (keyval__13394__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__13391__auto__,cljs.core.pr_writer,""," ","",opts__13392__auto__,keyval__13394__auto__);
});})(this__13390__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__13391__auto__,pr_pair__13393__auto__,"#datascript.core.TxReport{",", ","}",opts__13392__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-before","db-before",-553691536),self__.db_before],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-after","db-after",-571884666),self__.db_after],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx-data","tx-data",934159761),self__.tx_data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tempids","tempids",1767509089),self__.tempids],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),self__.tx_meta],null))], null),self__.__extmap));
});

datascript.core.TxReport.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__13374__auto__){
var self__ = this;
var this__13374__auto____$1 = this;
return self__.__meta;
});

datascript.core.TxReport.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__13370__auto__){
var self__ = this;
var this__13370__auto____$1 = this;
return (new datascript.core.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.tx_meta,self__.__meta,self__.__extmap,self__.__hash));
});

datascript.core.TxReport.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__13380__auto__){
var self__ = this;
var this__13380__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

datascript.core.TxReport.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__13371__auto__){
var self__ = this;
var this__13371__auto____$1 = this;
var h__13194__auto__ = self__.__hash;
if(!((h__13194__auto__ == null))){
return h__13194__auto__;
} else {
var h__13194__auto____$1 = cljs.core.hash_imap.call(null,this__13371__auto____$1);
self__.__hash = h__13194__auto____$1;

return h__13194__auto____$1;
}
});

datascript.core.TxReport.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__13372__auto__,other__13373__auto__){
var self__ = this;
var this__13372__auto____$1 = this;
if(cljs.core.truth_((function (){var and__12761__auto__ = other__13373__auto__;
if(cljs.core.truth_(and__12761__auto__)){
return ((this__13372__auto____$1.constructor === other__13373__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__13372__auto____$1,other__13373__auto__));
} else {
return and__12761__auto__;
}
})())){
return true;
} else {
return false;
}
});

datascript.core.TxReport.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__13385__auto__,k__13386__auto__){
var self__ = this;
var this__13385__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),null,new cljs.core.Keyword(null,"db-after","db-after",-571884666),null,new cljs.core.Keyword(null,"db-before","db-before",-553691536),null,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),null,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),null], null), null),k__13386__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__13385__auto____$1),self__.__meta),k__13386__auto__);
} else {
return (new datascript.core.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.tx_meta,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__13386__auto__)),null));
}
});

datascript.core.TxReport.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__13383__auto__,k__13384__auto__,G__26985){
var self__ = this;
var this__13383__auto____$1 = this;
var pred__26989 = cljs.core.keyword_identical_QMARK_;
var expr__26990 = k__13384__auto__;
if(cljs.core.truth_(pred__26989.call(null,new cljs.core.Keyword(null,"db-before","db-before",-553691536),expr__26990))){
return (new datascript.core.TxReport(G__26985,self__.db_after,self__.tx_data,self__.tempids,self__.tx_meta,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26989.call(null,new cljs.core.Keyword(null,"db-after","db-after",-571884666),expr__26990))){
return (new datascript.core.TxReport(self__.db_before,G__26985,self__.tx_data,self__.tempids,self__.tx_meta,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26989.call(null,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),expr__26990))){
return (new datascript.core.TxReport(self__.db_before,self__.db_after,G__26985,self__.tempids,self__.tx_meta,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26989.call(null,new cljs.core.Keyword(null,"tempids","tempids",1767509089),expr__26990))){
return (new datascript.core.TxReport(self__.db_before,self__.db_after,self__.tx_data,G__26985,self__.tx_meta,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__26989.call(null,new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),expr__26990))){
return (new datascript.core.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,G__26985,self__.__meta,self__.__extmap,null));
} else {
return (new datascript.core.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.tx_meta,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__13384__auto__,G__26985),null));
}
}
}
}
}
});

datascript.core.TxReport.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__13388__auto__){
var self__ = this;
var this__13388__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-before","db-before",-553691536),self__.db_before],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-after","db-after",-571884666),self__.db_after],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx-data","tx-data",934159761),self__.tx_data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tempids","tempids",1767509089),self__.tempids],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194),self__.tx_meta],null))], null),self__.__extmap));
});

datascript.core.TxReport.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__13375__auto__,G__26985){
var self__ = this;
var this__13375__auto____$1 = this;
return (new datascript.core.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.tx_meta,G__26985,self__.__extmap,self__.__hash));
});

datascript.core.TxReport.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__13381__auto__,entry__13382__auto__){
var self__ = this;
var this__13381__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__13382__auto__)){
return cljs.core._assoc.call(null,this__13381__auto____$1,cljs.core._nth.call(null,entry__13382__auto__,(0)),cljs.core._nth.call(null,entry__13382__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__13381__auto____$1,entry__13382__auto__);
}
});

datascript.core.TxReport.cljs$lang$type = true;

datascript.core.TxReport.cljs$lang$ctorPrSeq = (function (this__13410__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.core/TxReport");
});

datascript.core.TxReport.cljs$lang$ctorPrWriter = (function (this__13410__auto__,writer__13411__auto__){
return cljs.core._write.call(null,writer__13411__auto__,"datascript.core/TxReport");
});

datascript.core.__GT_TxReport = (function __GT_TxReport(db_before,db_after,tx_data,tempids,tx_meta){
return (new datascript.core.TxReport(db_before,db_after,tx_data,tempids,tx_meta,null,null,null));
});

datascript.core.map__GT_TxReport = (function map__GT_TxReport(G__26987){
return (new datascript.core.TxReport(new cljs.core.Keyword(null,"db-before","db-before",-553691536).cljs$core$IFn$_invoke$arity$1(G__26987),new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(G__26987),new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(G__26987),new cljs.core.Keyword(null,"tempids","tempids",1767509089).cljs$core$IFn$_invoke$arity$1(G__26987),new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194).cljs$core$IFn$_invoke$arity$1(G__26987),null,cljs.core.dissoc.call(null,G__26987,new cljs.core.Keyword(null,"db-before","db-before",-553691536),new cljs.core.Keyword(null,"db-after","db-after",-571884666),new cljs.core.Keyword(null,"tx-data","tx-data",934159761),new cljs.core.Keyword(null,"tempids","tempids",1767509089),new cljs.core.Keyword(null,"tx-meta","tx-meta",1159283194)),null));
});

datascript.core.multival_QMARK_ = (function multival_QMARK_(db,attr){
return cljs.core._EQ_.call(null,cljs.core.get_in.call(null,datascript.core._schema.call(null,db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr,new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659)], null)),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234));
});
datascript.core.ref_QMARK_ = (function ref_QMARK_(db,attr){
return cljs.core.contains_QMARK_.call(null,datascript.core._refs.call(null,db),attr);
});
datascript.core.current_tx = (function current_tx(report){
return (cljs.core.get_in.call(null,report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-before","db-before",-553691536),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339)], null)) + (1));
});
datascript.core.next_eid = (function next_eid(db){
return (new cljs.core.Keyword(null,"max-eid","max-eid",2134868075).cljs$core$IFn$_invoke$arity$1(db) + (1));
});
datascript.core.advance_max_eid = (function advance_max_eid(db,eid){
var G__26994 = db;
var G__26994__$1 = ((((eid > new cljs.core.Keyword(null,"max-eid","max-eid",2134868075).cljs$core$IFn$_invoke$arity$1(db))) && ((eid < datascript.core.tx0)))?cljs.core.assoc.call(null,G__26994,new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),eid):G__26994);
return G__26994__$1;
});
datascript.core.allocate_eid = (function() {
var allocate_eid = null;
var allocate_eid__2 = (function (report,eid){
return cljs.core.update_in.call(null,report,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-after","db-after",-571884666)], null),datascript.core.advance_max_eid,eid);
});
var allocate_eid__3 = (function (report,e,eid){
return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),e], null),eid),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-after","db-after",-571884666)], null),datascript.core.advance_max_eid,eid);
});
allocate_eid = function(report,e,eid){
switch(arguments.length){
case 2:
return allocate_eid__2.call(this,report,e);
case 3:
return allocate_eid__3.call(this,report,e,eid);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
allocate_eid.cljs$core$IFn$_invoke$arity$2 = allocate_eid__2;
allocate_eid.cljs$core$IFn$_invoke$arity$3 = allocate_eid__3;
return allocate_eid;
})()
;
datascript.core.with_datom = (function with_datom(db,datom){
if(cljs.core.truth_(datom.added)){
return datascript.core.advance_max_eid.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eavt","eavt",-666437073)], null),datascript.btset.btset_conj,datom,datascript.core.cmp_datoms_eavt_quick),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aevt","aevt",-585148059)], null),datascript.btset.btset_conj,datom,datascript.core.cmp_datoms_aevt_quick),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"avet","avet",1383857032)], null),datascript.btset.btset_conj,datom,datascript.core.cmp_datoms_avet_quick),datom.e);
} else {
var removing = cljs.core.first.call(null,datascript.core._search.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [datom.e,datom.a,datom.v], null)));
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eavt","eavt",-666437073)], null),datascript.btset.btset_disj,removing,datascript.core.cmp_datoms_eavt_quick),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aevt","aevt",-585148059)], null),datascript.btset.btset_disj,removing,datascript.core.cmp_datoms_aevt_quick),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"avet","avet",1383857032)], null),datascript.btset.btset_disj,removing,datascript.core.cmp_datoms_avet_quick);
}
});
datascript.core.transact_report = (function transact_report(report,datom){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,report,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-after","db-after",-571884666)], null),datascript.core.with_datom,datom),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761)], null),cljs.core.conj,datom);
});
datascript.core.reverse_ref = (function reverse_ref(attr){
var name = cljs.core.name.call(null,attr);
if(cljs.core._EQ_.call(null,"_",cljs.core.nth.call(null,name,(0)))){
return cljs.core.keyword.call(null,cljs.core.namespace.call(null,attr),cljs.core.subs.call(null,name,(1)));
} else {
return null;
}
});
datascript.core.explode = (function explode(db,entity){
var eid = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(entity);
var iter__13529__auto__ = ((function (eid){
return (function iter__27003(s__27004){
return (new cljs.core.LazySeq(null,((function (eid){
return (function (){
var s__27004__$1 = s__27004;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__27004__$1);
if(temp__4126__auto__){
var xs__4624__auto__ = temp__4126__auto__;
var vec__27010 = cljs.core.first.call(null,xs__4624__auto__);
var a = cljs.core.nth.call(null,vec__27010,(0),null);
var vs = cljs.core.nth.call(null,vec__27010,(1),null);
var reverse_a = datascript.core.reverse_ref.call(null,a);
var iterys__13525__auto__ = ((function (s__27004__$1,reverse_a,vec__27010,a,vs,xs__4624__auto__,temp__4126__auto__,eid){
return (function iter__27005(s__27006){
return (new cljs.core.LazySeq(null,((function (s__27004__$1,reverse_a,vec__27010,a,vs,xs__4624__auto__,temp__4126__auto__,eid){
return (function (){
var s__27006__$1 = s__27006;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__27006__$1);
if(temp__4126__auto____$1){
var s__27006__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27006__$2)){
var c__13527__auto__ = cljs.core.chunk_first.call(null,s__27006__$2);
var size__13528__auto__ = cljs.core.count.call(null,c__13527__auto__);
var b__27008 = cljs.core.chunk_buffer.call(null,size__13528__auto__);
if((function (){var i__27007 = (0);
while(true){
if((i__27007 < size__13528__auto__)){
var v = cljs.core._nth.call(null,c__13527__auto__,i__27007);
cljs.core.chunk_append.call(null,b__27008,(cljs.core.truth_(reverse_a)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),v,reverse_a,eid], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,a,v], null)));

var G__27011 = (i__27007 + (1));
i__27007 = G__27011;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27008),iter__27005.call(null,cljs.core.chunk_rest.call(null,s__27006__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27008),null);
}
} else {
var v = cljs.core.first.call(null,s__27006__$2);
return cljs.core.cons.call(null,(cljs.core.truth_(reverse_a)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),v,reverse_a,eid], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,a,v], null)),iter__27005.call(null,cljs.core.rest.call(null,s__27006__$2)));
}
} else {
return null;
}
break;
}
});})(s__27004__$1,reverse_a,vec__27010,a,vs,xs__4624__auto__,temp__4126__auto__,eid))
,null,null));
});})(s__27004__$1,reverse_a,vec__27010,a,vs,xs__4624__auto__,temp__4126__auto__,eid))
;
var fs__13526__auto__ = cljs.core.seq.call(null,iterys__13525__auto__.call(null,((((vs instanceof Array) || (cljs.core.coll_QMARK_.call(null,vs))) && (!(cljs.core.map_QMARK_.call(null,vs))) && (datascript.core.multival_QMARK_.call(null,db,a)))?vs:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vs], null))));
if(fs__13526__auto__){
return cljs.core.concat.call(null,fs__13526__auto__,iter__27003.call(null,cljs.core.rest.call(null,s__27004__$1)));
} else {
var G__27012 = cljs.core.rest.call(null,s__27004__$1);
s__27004__$1 = G__27012;
continue;
}
} else {
return null;
}
break;
}
});})(eid))
,null,null));
});})(eid))
;
return iter__13529__auto__.call(null,cljs.core.dissoc.call(null,entity,new cljs.core.Keyword("db","id","db/id",-1388397098)));
});
datascript.core.transact_add = (function transact_add(report,p__27013){
var vec__27015 = p__27013;
var _ = cljs.core.nth.call(null,vec__27015,(0),null);
var e = cljs.core.nth.call(null,vec__27015,(1),null);
var a = cljs.core.nth.call(null,vec__27015,(2),null);
var v = cljs.core.nth.call(null,vec__27015,(3),null);
var tx = datascript.core.current_tx.call(null,report);
var db = new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(report);
var datom = (new datascript.core.Datom(e,a,v,tx,true,null,null,null));
if(datascript.core.multival_QMARK_.call(null,db,a)){
if(cljs.core.empty_QMARK_.call(null,datascript.core._search.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null)))){
return datascript.core.transact_report.call(null,report,datom);
} else {
return report;
}
} else {
var temp__4124__auto__ = cljs.core.first.call(null,datascript.core._search.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a], null)));
if(cljs.core.truth_(temp__4124__auto__)){
var old_datom = temp__4124__auto__;
if(cljs.core._EQ_.call(null,old_datom.v,v)){
return report;
} else {
return datascript.core.transact_report.call(null,datascript.core.transact_report.call(null,report,(new datascript.core.Datom(e,a,old_datom.v,tx,false,null,null,null))),datom);
}
} else {
return datascript.core.transact_report.call(null,report,datom);
}
}
});
datascript.core.transact_retract_datom = (function transact_retract_datom(report,d){
var tx = datascript.core.current_tx.call(null,report);
return datascript.core.transact_report.call(null,report,(new datascript.core.Datom(d.e,d.a,d.v,tx,false,null,null,null)));
});
datascript.core.tx_id_QMARK_ = (function tx_id_QMARK_(e){
return (cljs.core._EQ_.call(null,e,new cljs.core.Keyword("db","current-tx","db/current-tx",1600722132))) || (cljs.core._EQ_.call(null,e,":db/current-tx"));
});
datascript.core.transact_tx_data = (function transact_tx_data(report,p__27017){
while(true){
var vec__27022 = p__27017;
var entity = cljs.core.nth.call(null,vec__27022,(0),null);
var entities = cljs.core.nthnext.call(null,vec__27022,(1));
var es = vec__27022;
var db = new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(report);
if((entity == null)){
return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),new cljs.core.Keyword("db","current-tx","db/current-tx",1600722132)], null),datascript.core.current_tx.call(null,report)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-after","db-after",-571884666),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339)], null),cljs.core.inc);
} else {
if(cljs.core.map_QMARK_.call(null,entity)){
if(datascript.core.tx_id_QMARK_.call(null,new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(entity))){
var entity__$1 = cljs.core.assoc.call(null,entity,new cljs.core.Keyword("db","id","db/id",-1388397098),datascript.core.current_tx.call(null,report));
var G__27026 = report;
var G__27027 = cljs.core.concat.call(null,datascript.core.explode.call(null,db,entity__$1),entities);
report = G__27026;
p__27017 = G__27027;
continue;
} else {
if((new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(entity) == null)){
var eid = datascript.core.next_eid.call(null,db);
var entity__$1 = cljs.core.assoc.call(null,entity,new cljs.core.Keyword("db","id","db/id",-1388397098),eid);
var G__27028 = datascript.core.allocate_eid.call(null,report,eid);
var G__27029 = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity__$1], null),entities);
report = G__27028;
p__27017 = G__27029;
continue;
} else {
var G__27030 = report;
var G__27031 = cljs.core.concat.call(null,datascript.core.explode.call(null,db,entity),entities);
report = G__27030;
p__27017 = G__27031;
continue;

}
}
} else {
var vec__27023 = entity;
var op = cljs.core.nth.call(null,vec__27023,(0),null);
var e = cljs.core.nth.call(null,vec__27023,(1),null);
var a = cljs.core.nth.call(null,vec__27023,(2),null);
var v = cljs.core.nth.call(null,vec__27023,(3),null);
if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword("db.fn","call","db.fn/call",-151594418))){
var vec__27024 = entity;
var _ = cljs.core.nth.call(null,vec__27024,(0),null);
var f = cljs.core.nth.call(null,vec__27024,(1),null);
var args = cljs.core.nthnext.call(null,vec__27024,(2));
var G__27032 = report;
var G__27033 = cljs.core.concat.call(null,cljs.core.apply.call(null,f,db,args),entities);
report = G__27032;
p__27017 = G__27033;
continue;
} else {
if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword("db.fn","cas","db.fn/cas",-379352172))){
var vec__27025 = entity;
var _ = cljs.core.nth.call(null,vec__27025,(0),null);
var e__$1 = cljs.core.nth.call(null,vec__27025,(1),null);
var a__$1 = cljs.core.nth.call(null,vec__27025,(2),null);
var ov = cljs.core.nth.call(null,vec__27025,(3),null);
var nv = cljs.core.nth.call(null,vec__27025,(4),null);
var datoms = datascript.core._search.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e__$1,a__$1], null));
if(datascript.core.multival_QMARK_.call(null,db,a__$1)){
if(cljs.core.truth_(cljs.core.some.call(null,((function (report,p__27017,vec__27025,_,e__$1,a__$1,ov,nv,datoms,vec__27023,op,e,a,v,db,vec__27022,entity,entities,es){
return (function (p1__27016_SHARP_){
return cljs.core._EQ_.call(null,p1__27016_SHARP_.v,ov);
});})(report,p__27017,vec__27025,_,e__$1,a__$1,ov,nv,datoms,vec__27023,op,e,a,v,db,vec__27022,entity,entities,es))
,datoms))){
var G__27034 = datascript.core.transact_add.call(null,report,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),e__$1,a__$1,nv], null));
var G__27035 = entities;
report = G__27034;
p__27017 = G__27035;
continue;
} else {
throw (new Error([cljs.core.str(":db.fn/cas failed on datom ["),cljs.core.str(e__$1),cljs.core.str(" "),cljs.core.str(a__$1),cljs.core.str(" "),cljs.core.str(cljs.core.map.call(null,new cljs.core.Keyword(null,"v","v",21465059),datoms)),cljs.core.str("], expected "),cljs.core.str(ov)].join('')));
}
} else {
var v__$1 = cljs.core.first.call(null,datoms).v;
if(cljs.core._EQ_.call(null,v__$1,ov)){
var G__27036 = datascript.core.transact_add.call(null,report,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),e__$1,a__$1,nv], null));
var G__27037 = entities;
report = G__27036;
p__27017 = G__27037;
continue;
} else {
throw (new Error([cljs.core.str(":db.fn/cas failed on datom ["),cljs.core.str(e__$1),cljs.core.str(" "),cljs.core.str(a__$1),cljs.core.str(" "),cljs.core.str(v__$1),cljs.core.str("], expected "),cljs.core.str(ov)].join('')));
}
}
} else {
if(datascript.core.tx_id_QMARK_.call(null,e)){
var G__27038 = report;
var G__27039 = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,datascript.core.current_tx.call(null,report),a,v], null)], null),entities);
report = G__27038;
p__27017 = G__27039;
continue;
} else {
if((datascript.core.ref_QMARK_.call(null,db,a)) && (datascript.core.tx_id_QMARK_.call(null,v))){
var G__27040 = report;
var G__27041 = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,e,a,datascript.core.current_tx.call(null,report)], null)], null),entities);
report = G__27040;
p__27017 = G__27041;
continue;
} else {
if((e < (0))){
var temp__4124__auto__ = cljs.core.get_in.call(null,report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),e], null));
if(cljs.core.truth_(temp__4124__auto__)){
var eid = temp__4124__auto__;
var G__27042 = report;
var G__27043 = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,eid,a,v], null)], null),entities);
report = G__27042;
p__27017 = G__27043;
continue;
} else {
var G__27044 = datascript.core.allocate_eid.call(null,report,e,datascript.core.next_eid.call(null,db));
var G__27045 = es;
report = G__27044;
p__27017 = G__27045;
continue;
}
} else {
if((datascript.core.ref_QMARK_.call(null,db,a)) && ((v < (0)))){
var temp__4124__auto__ = cljs.core.get_in.call(null,report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),v], null));
if(cljs.core.truth_(temp__4124__auto__)){
var vid = temp__4124__auto__;
var G__27046 = report;
var G__27047 = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,e,a,vid], null)], null),entities);
report = G__27046;
p__27017 = G__27047;
continue;
} else {
var G__27048 = datascript.core.allocate_eid.call(null,report,v,datascript.core.next_eid.call(null,db));
var G__27049 = es;
report = G__27048;
p__27017 = G__27049;
continue;
}
} else {
if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword("db","add","db/add",235286841))){
var G__27050 = datascript.core.transact_add.call(null,report,entity);
var G__27051 = entities;
report = G__27050;
p__27017 = G__27051;
continue;
} else {
if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword("db","retract","db/retract",-1549825231))){
var temp__4124__auto__ = cljs.core.first.call(null,datascript.core._search.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null)));
if(cljs.core.truth_(temp__4124__auto__)){
var old_datom = temp__4124__auto__;
var G__27052 = datascript.core.transact_retract_datom.call(null,report,old_datom);
var G__27053 = entities;
report = G__27052;
p__27017 = G__27053;
continue;
} else {
var G__27054 = report;
var G__27055 = entities;
report = G__27054;
p__27017 = G__27055;
continue;
}
} else {
if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword("db.fn","retractAttribute","db.fn/retractAttribute",937402164))){
var datoms = datascript.core._search.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a], null));
var G__27056 = cljs.core.reduce.call(null,datascript.core.transact_retract_datom,report,datoms);
var G__27057 = entities;
report = G__27056;
p__27017 = G__27057;
continue;
} else {
if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441))){
var e_datoms = datascript.core._search.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e], null));
var v_datoms = cljs.core.mapcat.call(null,((function (report,p__27017,e_datoms,vec__27023,op,e,a,v,db,vec__27022,entity,entities,es){
return (function (a__$1){
return datascript.core._search.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,a__$1,e], null));
});})(report,p__27017,e_datoms,vec__27023,op,e,a,v,db,vec__27022,entity,entities,es))
,datascript.core._refs.call(null,db));
var G__27058 = cljs.core.reduce.call(null,datascript.core.transact_retract_datom,report,cljs.core.concat.call(null,e_datoms,v_datoms));
var G__27059 = entities;
report = G__27058;
p__27017 = G__27059;
continue;
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
break;
}
});

//# sourceMappingURL=core.js.map