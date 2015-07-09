// Compiled by ClojureScript 0.0-2665 {}
if(!goog.isProvided_('datascript.impl.entity')) {
goog.provide('datascript.impl.entity');
}
goog.require('cljs.core');
goog.require('datascript.core');
datascript.impl.entity.entity = (function entity(db,eid){
return (new datascript.impl.entity.Entity(db,eid,false,cljs.core.PersistentArrayMap.EMPTY));
});
datascript.impl.entity.entity_attr = (function entity_attr(db,a,datoms){
if(datascript.core.multival_QMARK_.call(null,db,a)){
if(datascript.core.ref_QMARK_.call(null,db,a)){
return cljs.core.reduce.call(null,(function (p1__26791_SHARP_,p2__26792_SHARP_){
return cljs.core.conj.call(null,p1__26791_SHARP_,datascript.impl.entity.entity.call(null,db,p2__26792_SHARP_.v));
}),cljs.core.PersistentHashSet.EMPTY,datoms);
} else {
return cljs.core.reduce.call(null,(function (p1__26793_SHARP_,p2__26794_SHARP_){
return cljs.core.conj.call(null,p1__26793_SHARP_,p2__26794_SHARP_.v);
}),cljs.core.PersistentHashSet.EMPTY,datoms);
}
} else {
if(datascript.core.ref_QMARK_.call(null,db,a)){
return datascript.impl.entity.entity.call(null,db,cljs.core.first.call(null,datoms).v);
} else {
return cljs.core.first.call(null,datoms).v;
}
}
});
datascript.impl.entity.datoms__GT_cache = (function datoms__GT_cache(db,datoms){
return cljs.core.reduce.call(null,(function (acc,part){
var a = cljs.core.first.call(null,part).a;
return cljs.core.assoc.call(null,acc,a,datascript.impl.entity.entity_attr.call(null,db,a,part));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition_by.call(null,new cljs.core.Keyword(null,"a","a",-2123407586),datoms));
});
datascript.impl.entity.touch = (function touch(e){
if(cljs.core.truth_(e.touched)){
} else {
var temp__4126__auto___26795 = cljs.core.not_empty.call(null,datascript.core._search.call(null,e.db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.eid], null)));
if(cljs.core.truth_(temp__4126__auto___26795)){
var datoms_26796 = temp__4126__auto___26795;
e.touched = true;

e.cache = datascript.impl.entity.datoms__GT_cache.call(null,e.db,datoms_26796);
} else {
}
}

return e;
});
datascript.impl.entity._lookup_backwards = (function _lookup_backwards(db,eid,attr,not_found){
var temp__4124__auto__ = cljs.core.not_empty.call(null,datascript.core._search.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,attr,eid], null)));
if(cljs.core.truth_(temp__4124__auto__)){
var datoms = temp__4124__auto__;
return cljs.core.reduce.call(null,((function (datoms,temp__4124__auto__){
return (function (p1__26797_SHARP_,p2__26798_SHARP_){
return cljs.core.conj.call(null,p1__26797_SHARP_,datascript.impl.entity.entity.call(null,db,p2__26798_SHARP_.e));
});})(datoms,temp__4124__auto__))
,cljs.core.PersistentHashSet.EMPTY,datoms);
} else {
return not_found;
}
});
datascript.impl.entity.multival__GT_js = (function multival__GT_js(val){
if(cljs.core.truth_(val)){
return cljs.core.to_array.call(null,val);
} else {
return null;
}
});
datascript.impl.entity.js_seq = (function js_seq(e){
datascript.impl.entity.touch.call(null,e);

var iter__13529__auto__ = (function iter__26807(s__26808){
return (new cljs.core.LazySeq(null,(function (){
var s__26808__$1 = s__26808;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__26808__$1);
if(temp__4126__auto__){
var s__26808__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__26808__$2)){
var c__13527__auto__ = cljs.core.chunk_first.call(null,s__26808__$2);
var size__13528__auto__ = cljs.core.count.call(null,c__13527__auto__);
var b__26810 = cljs.core.chunk_buffer.call(null,size__13528__auto__);
if((function (){var i__26809 = (0);
while(true){
if((i__26809 < size__13528__auto__)){
var vec__26813 = cljs.core._nth.call(null,c__13527__auto__,i__26809);
var a = cljs.core.nth.call(null,vec__26813,(0),null);
var v = cljs.core.nth.call(null,vec__26813,(1),null);
cljs.core.chunk_append.call(null,b__26810,((datascript.core.multival_QMARK_.call(null,e.db,a))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,datascript.impl.entity.multival__GT_js.call(null,v)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)));

var G__26815 = (i__26809 + (1));
i__26809 = G__26815;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26810),iter__26807.call(null,cljs.core.chunk_rest.call(null,s__26808__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26810),null);
}
} else {
var vec__26814 = cljs.core.first.call(null,s__26808__$2);
var a = cljs.core.nth.call(null,vec__26814,(0),null);
var v = cljs.core.nth.call(null,vec__26814,(1),null);
return cljs.core.cons.call(null,((datascript.core.multival_QMARK_.call(null,e.db,a))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,datascript.impl.entity.multival__GT_js.call(null,v)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,v], null)),iter__26807.call(null,cljs.core.rest.call(null,s__26808__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__13529__auto__.call(null,e.cache);
});

/**
* @constructor
*/
datascript.impl.entity.Entity = (function (db,eid,touched,cache){
this.db = db;
this.eid = eid;
this.touched = touched;
this.cache = cache;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2162164483;
})
datascript.impl.entity.Entity.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer.call(null,cljs.core.assoc.call(null,self__.cache,new cljs.core.Keyword("db","id","db/id",-1388397098),self__.eid),writer,opts);
});

datascript.impl.entity.Entity.prototype.call = (function() {
var G__26831 = null;
var G__26831__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k);
});
var G__26831__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.core._lookup.call(null,this$,k,not_found);
});
G__26831 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__26831__2.call(this,self__,k);
case 3:
return G__26831__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26831.cljs$core$IFn$_invoke$arity$2 = G__26831__2;
G__26831.cljs$core$IFn$_invoke$arity$3 = G__26831__3;
return G__26831;
})()
;

datascript.impl.entity.Entity.prototype.apply = (function (self__,args26816){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args26816)));
});

datascript.impl.entity.Entity.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k);
});

datascript.impl.entity.Entity.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return cljs.core._lookup.call(null,this$,k,not_found);
});

datascript.impl.entity.Entity.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("datascript.impl.entity","nf","datascript.impl.entity/nf",-953741353),cljs.core._lookup.call(null,this$__$1,k,new cljs.core.Keyword("datascript.impl.entity","nf","datascript.impl.entity/nf",-953741353)));
});

datascript.impl.entity.Entity.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,attr){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.call(null,this$__$1,attr,null);
});

datascript.impl.entity.Entity.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,attr,not_found){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.call(null,attr,new cljs.core.Keyword("db","id","db/id",-1388397098))){
return self__.eid;
} else {
var temp__4124__auto__ = datascript.core.reverse_ref.call(null,attr);
if(cljs.core.truth_(temp__4124__auto__)){
var attr__$1 = temp__4124__auto__;
return datascript.impl.entity._lookup_backwards.call(null,self__.db,self__.eid,attr__$1,not_found);
} else {
var or__12773__auto__ = self__.cache.call(null,attr);
if(cljs.core.truth_(or__12773__auto__)){
return or__12773__auto__;
} else {
if(cljs.core.truth_(self__.touched)){
return not_found;
} else {
var temp__4124__auto____$1 = cljs.core.not_empty.call(null,datascript.core._search.call(null,self__.db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.eid,attr], null)));
if(cljs.core.truth_(temp__4124__auto____$1)){
var datoms = temp__4124__auto____$1;
self__.cache = cljs.core.assoc.call(null,self__.cache,attr,datascript.impl.entity.entity_attr.call(null,self__.db,attr,datoms));

return self__.cache.call(null,attr);
} else {
return not_found;
}
}
}
}
}
});

datascript.impl.entity.Entity.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
datascript.impl.entity.touch.call(null,this$__$1);

return cljs.core.count.call(null,self__.cache);
});

datascript.impl.entity.Entity.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
datascript.impl.entity.touch.call(null,this$__$1);

return cljs.core.seq.call(null,self__.cache);
});

datascript.impl.entity.Entity.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,self__.eid);
});

datascript.impl.entity.Entity.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return ((o instanceof datascript.impl.entity.Entity)) && (cljs.core._EQ_.call(null,self__.eid,o.eid));
});

datascript.impl.entity.Entity.prototype.entry_set = (function (){
var self__ = this;
var this$ = this;
return cljs.core.to_array.call(null,cljs.core.map.call(null,cljs.core.to_array,datascript.impl.entity.js_seq.call(null,this$)));
});

datascript.impl.entity.Entity.prototype.forEach = (function() {
var G__26832 = null;
var G__26832__1 = (function (f){
var self__ = this;
var this$ = this;
var seq__26817 = cljs.core.seq.call(null,datascript.impl.entity.js_seq.call(null,this$));
var chunk__26818 = null;
var count__26819 = (0);
var i__26820 = (0);
while(true){
if((i__26820 < count__26819)){
var vec__26821 = cljs.core._nth.call(null,chunk__26818,i__26820);
var a = cljs.core.nth.call(null,vec__26821,(0),null);
var v = cljs.core.nth.call(null,vec__26821,(1),null);
f.call(null,v,a,this$);

var G__26833 = seq__26817;
var G__26834 = chunk__26818;
var G__26835 = count__26819;
var G__26836 = (i__26820 + (1));
seq__26817 = G__26833;
chunk__26818 = G__26834;
count__26819 = G__26835;
i__26820 = G__26836;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__26817);
if(temp__4126__auto__){
var seq__26817__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26817__$1)){
var c__13560__auto__ = cljs.core.chunk_first.call(null,seq__26817__$1);
var G__26837 = cljs.core.chunk_rest.call(null,seq__26817__$1);
var G__26838 = c__13560__auto__;
var G__26839 = cljs.core.count.call(null,c__13560__auto__);
var G__26840 = (0);
seq__26817 = G__26837;
chunk__26818 = G__26838;
count__26819 = G__26839;
i__26820 = G__26840;
continue;
} else {
var vec__26822 = cljs.core.first.call(null,seq__26817__$1);
var a = cljs.core.nth.call(null,vec__26822,(0),null);
var v = cljs.core.nth.call(null,vec__26822,(1),null);
f.call(null,v,a,this$);

var G__26841 = cljs.core.next.call(null,seq__26817__$1);
var G__26842 = null;
var G__26843 = (0);
var G__26844 = (0);
seq__26817 = G__26841;
chunk__26818 = G__26842;
count__26819 = G__26843;
i__26820 = G__26844;
continue;
}
} else {
return null;
}
}
break;
}
});
var G__26832__2 = (function (f,use_as_this){
var self__ = this;
var this$ = this;
var seq__26823 = cljs.core.seq.call(null,datascript.impl.entity.js_seq.call(null,this$));
var chunk__26824 = null;
var count__26825 = (0);
var i__26826 = (0);
while(true){
if((i__26826 < count__26825)){
var vec__26827 = cljs.core._nth.call(null,chunk__26824,i__26826);
var a = cljs.core.nth.call(null,vec__26827,(0),null);
var v = cljs.core.nth.call(null,vec__26827,(1),null);
f.call(use_as_this,v,a,this$);

var G__26845 = seq__26823;
var G__26846 = chunk__26824;
var G__26847 = count__26825;
var G__26848 = (i__26826 + (1));
seq__26823 = G__26845;
chunk__26824 = G__26846;
count__26825 = G__26847;
i__26826 = G__26848;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__26823);
if(temp__4126__auto__){
var seq__26823__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26823__$1)){
var c__13560__auto__ = cljs.core.chunk_first.call(null,seq__26823__$1);
var G__26849 = cljs.core.chunk_rest.call(null,seq__26823__$1);
var G__26850 = c__13560__auto__;
var G__26851 = cljs.core.count.call(null,c__13560__auto__);
var G__26852 = (0);
seq__26823 = G__26849;
chunk__26824 = G__26850;
count__26825 = G__26851;
i__26826 = G__26852;
continue;
} else {
var vec__26828 = cljs.core.first.call(null,seq__26823__$1);
var a = cljs.core.nth.call(null,vec__26828,(0),null);
var v = cljs.core.nth.call(null,vec__26828,(1),null);
f.call(use_as_this,v,a,this$);

var G__26853 = cljs.core.next.call(null,seq__26823__$1);
var G__26854 = null;
var G__26855 = (0);
var G__26856 = (0);
seq__26823 = G__26853;
chunk__26824 = G__26854;
count__26825 = G__26855;
i__26826 = G__26856;
continue;
}
} else {
return null;
}
}
break;
}
});
G__26832 = function(f,use_as_this){
switch(arguments.length){
case 1:
return G__26832__1.call(this,f);
case 2:
return G__26832__2.call(this,f,use_as_this);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26832.cljs$core$IFn$_invoke$arity$1 = G__26832__1;
G__26832.cljs$core$IFn$_invoke$arity$2 = G__26832__2;
return G__26832;
})()
;

datascript.impl.entity.Entity.prototype.get = (function (attr){
var self__ = this;
var this$ = this;
if(cljs.core._EQ_.call(null,attr,":db/id")){
return self__.eid;
} else {
var temp__4124__auto__ = cljs.core.re_matches.call(null,/(?:([^\/]+)\/)?_([^\/]+)/,attr);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__26829 = temp__4124__auto__;
var _ = cljs.core.nth.call(null,vec__26829,(0),null);
var ns = cljs.core.nth.call(null,vec__26829,(1),null);
var name = cljs.core.nth.call(null,vec__26829,(2),null);
var attr__$1 = (cljs.core.truth_(ns)?[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''):name);
return datascript.impl.entity.multival__GT_js.call(null,datascript.impl.entity._lookup_backwards.call(null,self__.db,self__.eid,attr__$1,null));
} else {
var G__26830 = cljs.core._lookup.call(null,this$,attr);
var G__26830__$1 = ((datascript.core.multival_QMARK_.call(null,self__.db,attr))?datascript.impl.entity.multival__GT_js.call(null,G__26830):G__26830);
return G__26830__$1;
}
}
});

datascript.impl.entity.Entity.prototype.key_set = (function (){
var self__ = this;
var this$ = this;
return cljs.core.to_array.call(null,cljs.core.keys.call(null,this$));
});

datascript.impl.entity.Entity.prototype.entries = (function (){
var self__ = this;
var this$ = this;
return cljs.core.es6_entries_iterator.call(null,datascript.impl.entity.js_seq.call(null,this$));
});

datascript.impl.entity.Entity.prototype.value_set = (function (){
var self__ = this;
var this$ = this;
return cljs.core.to_array.call(null,cljs.core.map.call(null,cljs.core.second,datascript.impl.entity.js_seq.call(null,this$)));
});

datascript.impl.entity.Entity.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str_STAR_.call(null,this$);
});

datascript.impl.entity.Entity.prototype.keys = (function (){
var self__ = this;
var this$ = this;
return cljs.core.es6_iterator.call(null,cljs.core.keys.call(null,this$));
});

datascript.impl.entity.Entity.prototype.values = (function (){
var self__ = this;
var this$ = this;
return cljs.core.es6_iterator.call(null,cljs.core.map.call(null,cljs.core.second,datascript.impl.entity.js_seq.call(null,this$)));
});

datascript.impl.entity.Entity.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return cljs.core._equiv.call(null,this$,other);
});

datascript.impl.entity.Entity.prototype.has = (function (attr){
var self__ = this;
var this$ = this;
return !((this$.get(attr) == null));
});

datascript.impl.entity.Entity.cljs$lang$type = true;

datascript.impl.entity.Entity.cljs$lang$ctorStr = "datascript.impl.entity/Entity";

datascript.impl.entity.Entity.cljs$lang$ctorPrWriter = (function (this__13360__auto__,writer__13361__auto__,opt__13362__auto__){
return cljs.core._write.call(null,writer__13361__auto__,"datascript.impl.entity/Entity");
});

datascript.impl.entity.__GT_Entity = (function __GT_Entity(db,eid,touched,cache){
return (new datascript.impl.entity.Entity(db,eid,touched,cache));
});

goog.exportSymbol("datascript.impl.entity.Entity.prototype.get",datascript.impl.entity.Entity.prototype.get);
goog.exportSymbol("datascript.impl.entity.Entity.prototype.has",datascript.impl.entity.Entity.prototype.has);
goog.exportSymbol("datascript.impl.entity.Entity.prototype.forEach",datascript.impl.entity.Entity.prototype.forEach);
goog.exportSymbol("datascript.impl.entity.Entity.prototype.key_set",datascript.impl.entity.Entity.prototype.key_set);
goog.exportSymbol("datascript.impl.entity.Entity.prototype.value_set",datascript.impl.entity.Entity.prototype.value_set);
goog.exportSymbol("datascript.impl.entity.Entity.prototype.entry_set",datascript.impl.entity.Entity.prototype.entry_set);
goog.exportSymbol("datascript.impl.entity.Entity.prototype.keys",datascript.impl.entity.Entity.prototype.keys);
goog.exportSymbol("datascript.impl.entity.Entity.prototype.values",datascript.impl.entity.Entity.prototype.values);
goog.exportSymbol("datascript.impl.entity.Entity.prototype.entries",datascript.impl.entity.Entity.prototype.entries);
goog.exportSymbol("cljs.core.ES6Iterator.prototype.next",cljs.core.ES6Iterator.prototype.next);
goog.exportSymbol("cljs.core.ES6EntriesIterator.prototype.next",cljs.core.ES6EntriesIterator.prototype.next);

//# sourceMappingURL=entity.js.map