// Compiled by ClojureScript 0.0-2665 {}
if(!goog.isProvided_('datascript.btset')) {
goog.provide('datascript.btset');
}
goog.require('cljs.core');


datascript.btset.min_len = (64);
datascript.btset.max_len = (128);
datascript.btset.level_shift = (cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__26858_SHARP_){
return ((datascript.btset.max_len & (1 << p1__26858_SHARP_)) != 0);
}),cljs.core.range.call(null,(31),(-1),(-1)))) + (1));
datascript.btset.path_mask = (((1) << datascript.btset.level_shift) - (1));
datascript.btset.empty_path = (0);
datascript.btset.path_get = (function path_get(path,level){
return (datascript.btset.path_mask & (path >>> level));
});
datascript.btset.path_set = (function path_set(path,level,idx){
return (path | (idx << level));
});
datascript.btset.eq = (function eq(a,b){
return ((0) === datascript.btset._STAR_cmp_STAR_.call(null,a,b));
});
datascript.btset.half = (function half(x){
return (x >>> (1));
});
datascript.btset.binary_search_l = (function binary_search_l(arr,l,r,k){
while(true){
if((l <= r)){
var m = datascript.btset.half.call(null,(l + r));
var mk = (arr[m]);
var cmp = datascript.btset._STAR_cmp_STAR_.call(null,mk,k);
if((cmp < (0))){
var G__26859 = arr;
var G__26860 = (m + (1));
var G__26861 = r;
var G__26862 = k;
arr = G__26859;
l = G__26860;
r = G__26861;
k = G__26862;
continue;
} else {
var G__26863 = arr;
var G__26864 = l;
var G__26865 = (m - (1));
var G__26866 = k;
arr = G__26863;
l = G__26864;
r = G__26865;
k = G__26866;
continue;
}
} else {
return l;
}
break;
}
});
datascript.btset.binary_search_r = (function binary_search_r(arr,l,r,k){
while(true){
if((l <= r)){
var m = datascript.btset.half.call(null,(l + r));
var mk = (arr[m]);
var cmp = datascript.btset._STAR_cmp_STAR_.call(null,mk,k);
if((cmp > (0))){
var G__26867 = arr;
var G__26868 = l;
var G__26869 = (m - (1));
var G__26870 = k;
arr = G__26867;
l = G__26868;
r = G__26869;
k = G__26870;
continue;
} else {
var G__26871 = arr;
var G__26872 = (m + (1));
var G__26873 = r;
var G__26874 = k;
arr = G__26871;
l = G__26872;
r = G__26873;
k = G__26874;
continue;
}
} else {
return l;
}
break;
}
});
datascript.btset.lookup_exact = (function lookup_exact(arr,key){
var arr_l = arr.length;
var idx = datascript.btset.binary_search_l.call(null,arr,(0),(arr_l - (1)),key);
if(((idx < arr_l)) && (datascript.btset.eq.call(null,(arr[idx]),key))){
return idx;
} else {
return (-1);
}
});
datascript.btset.lookup_range = (function lookup_range(arr,key){
var arr_l = arr.length;
var idx = datascript.btset.binary_search_l.call(null,arr,(0),(arr_l - (1)),key);
if((idx === arr_l)){
return (-1);
} else {
return idx;
}
});
datascript.btset.alast = (function alast(arr){
return (arr[(arr.length - (1))]);
});
datascript.btset.cut_n_splice = (function cut_n_splice(arr,cut_from,cut_to,splice_from,splice_to,xs){
var arr_l = arr.length;
var xs_l = xs.length;
var l1 = (splice_from - cut_from);
var l2 = (cut_to - splice_to);
var l1xs = (l1 + xs_l);
var new_arr = (new Array(((l1 + xs_l) + l2)));
var n__13660__auto___26875 = l1;
var i_26876 = (0);
while(true){
if((i_26876 < n__13660__auto___26875)){
(new_arr[i_26876] = (arr[(cut_from + i_26876)]));

var G__26877 = (i_26876 + (1));
i_26876 = G__26877;
continue;
} else {
}
break;
}

var n__13660__auto___26878 = xs_l;
var i_26879 = (0);
while(true){
if((i_26879 < n__13660__auto___26878)){
(new_arr[(i_26879 + l1)] = (xs[i_26879]));

var G__26880 = (i_26879 + (1));
i_26879 = G__26880;
continue;
} else {
}
break;
}

var n__13660__auto___26881 = l2;
var i_26882 = (0);
while(true){
if((i_26882 < n__13660__auto___26881)){
(new_arr[(i_26882 + l1xs)] = (arr[(splice_to + i_26882)]));

var G__26883 = (i_26882 + (1));
i_26882 = G__26883;
continue;
} else {
}
break;
}

return new_arr;
});
datascript.btset.cut = (function() {
var cut = null;
var cut__2 = (function (arr,cut_from){
return arr.slice(cut_from);
});
var cut__3 = (function (arr,cut_from,cut_to){
return arr.slice(cut_from,cut_to);
});
cut = function(arr,cut_from,cut_to){
switch(arguments.length){
case 2:
return cut__2.call(this,arr,cut_from);
case 3:
return cut__3.call(this,arr,cut_from,cut_to);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cut.cljs$core$IFn$_invoke$arity$2 = cut__2;
cut.cljs$core$IFn$_invoke$arity$3 = cut__3;
return cut;
})()
;
datascript.btset.splice = (function splice(arr,splice_from,splice_to,xs){
return datascript.btset.cut_n_splice.call(null,arr,(0),arr.length,splice_from,splice_to,xs);
});
datascript.btset.insert = (function insert(arr,idx,xs){
return datascript.btset.cut_n_splice.call(null,arr,(0),arr.length,idx,idx,xs);
});
datascript.btset.merge_n_split = (function merge_n_split(a1,a2){
var a1_l = a1.length;
var a2_l = a2.length;
var total_l = (a1_l + a2_l);
var r1_l = datascript.btset.half.call(null,total_l);
var r2_l = (total_l - r1_l);
var r1 = (new Array(r1_l));
var r2 = (new Array(r2_l));
var n__13660__auto___26884 = total_l;
var i_26885 = (0);
while(true){
if((i_26885 < n__13660__auto___26884)){
((((i_26885 < r1_l))?r1:r2)[(((i_26885 < r1_l))?i_26885:(i_26885 - r1_l))] = ((((i_26885 < a1_l))?a1:a2)[(((i_26885 < a1_l))?i_26885:(i_26885 - a1_l))]));

var G__26886 = (i_26885 + (1));
i_26885 = G__26886;
continue;
} else {
}
break;
}

return [r1,r2];
});
datascript.btset.eq_arr = (function eq_arr(a1,a1_from,a1_to,a2,a2_from,a2_to,cmp){
var len = (a1_to - a1_from);
var and__12761__auto__ = (len === (a2_to - a2_from));
if(and__12761__auto__){
var i = (0);
while(true){
if((i === len)){
return true;
} else {
if(cljs.core.not.call(null,cmp.call(null,(a1[(i + a1_from)]),(a2[(i + a2_from)])))){
return false;
} else {
var G__26887 = (i + (1));
i = G__26887;
continue;

}
}
break;
}
} else {
return and__12761__auto__;
}
});
datascript.btset.check_n_splice = (function check_n_splice(arr,from,to,new_arr){
if(datascript.btset.eq_arr.call(null,arr,from,to,new_arr,(0),new_arr.length,datascript.btset.eq)){
return arr;
} else {
return datascript.btset.splice.call(null,arr,from,to,new_arr);
}
});
datascript.btset.arr_map_inplace = (function arr_map_inplace(f,arr){
var len = arr.length;
var i_26888 = (0);
while(true){
if((i_26888 < len)){
(arr[i_26888] = f.call(null,(arr[i_26888])));

var G__26889 = (i_26888 + (1));
i_26888 = G__26889;
continue;
} else {
}
break;
}

return arr;
});
/**
* Splits `arr` into arrays of size between min-len and max-len,
* trying to stick to (min+max)/2
*/
datascript.btset.arr_partition_approx = (function arr_partition_approx(min_len,max_len,arr){
var chunk_len = datascript.btset.half.call(null,(max_len + min_len));
var len = arr.length;
var acc = [];
if((len > (0))){
var pos_26890 = (0);
while(true){
var rest_26891 = (len - pos_26890);
if((rest_26891 <= max_len)){
acc.push(arr.slice(pos_26890));
} else {
if((rest_26891 >= (chunk_len + min_len))){
acc.push(arr.slice(pos_26890,(pos_26890 + chunk_len)));

var G__26892 = (pos_26890 + chunk_len);
pos_26890 = G__26892;
continue;
} else {
var piece_len_26893 = datascript.btset.half.call(null,rest_26891);
acc.push(arr.slice(pos_26890,(pos_26890 + piece_len_26893)));

var G__26894 = (pos_26890 + piece_len_26893);
pos_26890 = G__26894;
continue;

}
}
break;
}
} else {
}

return acc;
});
/**
* Filter out repetitive values in a sorted array
*/
datascript.btset.arr_distinct = (function arr_distinct(arr,cmp){
var i_26895 = (0);
while(true){
if((i_26895 >= arr.length)){
} else {
if(((i_26895 > (0))) && (((0) === cmp.call(null,(arr[i_26895]),(arr[(i_26895 - (1))]))))){
arr.splice(i_26895,(1));

var G__26896 = i_26895;
i_26895 = G__26896;
continue;
} else {
var G__26897 = (i_26895 + (1));
i_26895 = G__26897;
continue;
}
}
break;
}

return arr;
});
datascript.btset.lim_key = (function lim_key(node){
return datascript.btset.alast.call(null,node.keys);
});
/**
* Drop non-nil references and return array of arguments
*/
datascript.btset.return_array = (function() {
var return_array = null;
var return_array__1 = (function (a1){
return [a1];
});
var return_array__2 = (function (a1,a2){
if(cljs.core.truth_(a1)){
if(cljs.core.truth_(a2)){
return [a1,a2];
} else {
return [a1];
}
} else {
return [a2];
}
});
var return_array__3 = (function (a1,a2,a3){
if(cljs.core.truth_(a1)){
if(cljs.core.truth_(a2)){
if(cljs.core.truth_(a3)){
return [a1,a2,a3];
} else {
return [a1,a2];
}
} else {
if(cljs.core.truth_(a3)){
return [a1,a3];
} else {
return [a1];
}
}
} else {
if(cljs.core.truth_(a2)){
if(cljs.core.truth_(a3)){
return [a2,a3];
} else {
return [a2];
}
} else {
return [a3];
}
}
});
return_array = function(a1,a2,a3){
switch(arguments.length){
case 1:
return return_array__1.call(this,a1);
case 2:
return return_array__2.call(this,a1,a2);
case 3:
return return_array__3.call(this,a1,a2,a3);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return_array.cljs$core$IFn$_invoke$arity$1 = return_array__1;
return_array.cljs$core$IFn$_invoke$arity$2 = return_array__2;
return_array.cljs$core$IFn$_invoke$arity$3 = return_array__3;
return return_array;
})()
;
datascript.btset.rotate = (function rotate(node,root_QMARK_,left,right){
if(cljs.core.truth_(root_QMARK_)){
return datascript.btset.return_array.call(null,node);
} else {
if((node.len() > datascript.btset.min_len)){
return datascript.btset.return_array.call(null,left,node,right);
} else {
if(cljs.core.truth_((function (){var and__12761__auto__ = left;
if(cljs.core.truth_(and__12761__auto__)){
return (left.len() <= datascript.btset.min_len);
} else {
return and__12761__auto__;
}
})())){
return datascript.btset.return_array.call(null,left.merge(node),right);
} else {
if(cljs.core.truth_((function (){var and__12761__auto__ = right;
if(cljs.core.truth_(and__12761__auto__)){
return (right.len() <= datascript.btset.min_len);
} else {
return and__12761__auto__;
}
})())){
return datascript.btset.return_array.call(null,left,node.merge(right));
} else {
if(cljs.core.truth_((function (){var and__12761__auto__ = left;
if(cljs.core.truth_(and__12761__auto__)){
return ((right == null)) || ((left.len() < right.len()));
} else {
return and__12761__auto__;
}
})())){
var nodes = left.merge_n_split(node);
return datascript.btset.return_array.call(null,(nodes[(0)]),(nodes[(1)]),right);
} else {
var nodes = node.merge_n_split(right);
return datascript.btset.return_array.call(null,left,(nodes[(0)]),(nodes[(1)]));

}
}
}
}
}
});

/**
* @constructor
*/
datascript.btset.Node = (function (keys,pointers){
this.keys = keys;
this.pointers = pointers;
})
datascript.btset.Node.prototype.len = (function (){
var self__ = this;
var _ = this;
return self__.keys.length;
});

datascript.btset.Node.prototype.merge = (function (next){
var self__ = this;
var _ = this;
return (new datascript.btset.Node(self__.keys.concat(next.keys),self__.pointers.concat(next.pointers)));
});

datascript.btset.Node.prototype.merge_n_split = (function (next){
var self__ = this;
var _ = this;
var ks = datascript.btset.merge_n_split.call(null,self__.keys,next.keys);
var ps = datascript.btset.merge_n_split.call(null,self__.pointers,next.pointers);
return datascript.btset.return_array.call(null,(new datascript.btset.Node((ks[(0)]),(ps[(0)]))),(new datascript.btset.Node((ks[(1)]),(ps[(1)]))));
});

datascript.btset.Node.prototype.lookup = (function (key){
var self__ = this;
var _ = this;
var idx = datascript.btset.lookup_range.call(null,self__.keys,key);
if(((-1) === idx)){
return null;
} else {
return (self__.pointers[idx]).lookup(key);
}
});

datascript.btset.Node.prototype.conj = (function (key){
var self__ = this;
var this$ = this;
var idx = datascript.btset.binary_search_l.call(null,self__.keys,(0),(self__.keys.length - (2)),key);
var nodes = (self__.pointers[idx]).conj(key);
if(cljs.core.truth_(nodes)){
var new_keys = datascript.btset.check_n_splice.call(null,self__.keys,idx,(idx + (1)),nodes.map(datascript.btset.lim_key));
var new_pointers = datascript.btset.splice.call(null,self__.pointers,idx,(idx + (1)),nodes);
if((new_pointers.length <= datascript.btset.max_len)){
return [(new datascript.btset.Node(new_keys,new_pointers))];
} else {
var middle = datascript.btset.half.call(null,new_pointers.length);
return [(new datascript.btset.Node(datascript.btset.cut.call(null,new_keys,(0),middle),datascript.btset.cut.call(null,new_pointers,(0),middle))),(new datascript.btset.Node(datascript.btset.cut.call(null,new_keys,middle),datascript.btset.cut.call(null,new_pointers,middle)))];
}
} else {
return null;
}
});

datascript.btset.Node.prototype.disj = (function (key,root_QMARK_,left,right){
var self__ = this;
var this$ = this;
var idx = datascript.btset.lookup_range.call(null,self__.keys,key);
if(((-1) === idx)){
return null;
} else {
var child = (self__.pointers[idx]);
var left_child = ((((idx - (1)) >= (0)))?(self__.pointers[(idx - (1))]):null);
var right_child = ((((idx + (1)) < self__.pointers.length))?(self__.pointers[(idx + (1))]):null);
var disjned = child.disj(key,false,left_child,right_child);
if(cljs.core.truth_(disjned)){
var left_idx = (cljs.core.truth_(left_child)?(idx - (1)):idx);
var right_idx = (cljs.core.truth_(right_child)?((2) + idx):((1) + idx));
var new_keys = datascript.btset.check_n_splice.call(null,self__.keys,left_idx,right_idx,disjned.map(datascript.btset.lim_key));
var new_pointers = datascript.btset.splice.call(null,self__.pointers,left_idx,right_idx,disjned);
return datascript.btset.rotate.call(null,(new datascript.btset.Node(new_keys,new_pointers)),root_QMARK_,left,right);
} else {
return null;
}
}
});

datascript.btset.Node.cljs$lang$type = true;

datascript.btset.Node.cljs$lang$ctorStr = "datascript.btset/Node";

datascript.btset.Node.cljs$lang$ctorPrWriter = (function (this__13360__auto__,writer__13361__auto__,opt__13362__auto__){
return cljs.core._write.call(null,writer__13361__auto__,"datascript.btset/Node");
});

datascript.btset.__GT_Node = (function __GT_Node(keys,pointers){
return (new datascript.btset.Node(keys,pointers));
});


/**
* @constructor
*/
datascript.btset.LeafNode = (function (keys){
this.keys = keys;
})
datascript.btset.LeafNode.prototype.toString = (function (){
var self__ = this;
var _ = this;
return cljs.core.pr_str_STAR_.call(null,cljs.core.vec.call(null,self__.keys));
});

datascript.btset.LeafNode.prototype.len = (function (){
var self__ = this;
var _ = this;
return self__.keys.length;
});

datascript.btset.LeafNode.prototype.merge = (function (next){
var self__ = this;
var _ = this;
return (new datascript.btset.LeafNode(self__.keys.concat(next.keys)));
});

datascript.btset.LeafNode.prototype.merge_n_split = (function (next){
var self__ = this;
var _ = this;
var ks = datascript.btset.merge_n_split.call(null,self__.keys,next.keys);
return datascript.btset.return_array.call(null,(new datascript.btset.LeafNode((ks[(0)]))),(new datascript.btset.LeafNode((ks[(1)]))));
});

datascript.btset.LeafNode.prototype.lookup = (function (key){
var self__ = this;
var _ = this;
var idx = datascript.btset.lookup_exact.call(null,self__.keys,key);
if(((-1) === idx)){
return null;
} else {
return (self__.keys[idx]);
}
});

datascript.btset.LeafNode.prototype.conj = (function (key){
var self__ = this;
var this$ = this;
var idx = datascript.btset.binary_search_l.call(null,self__.keys,(0),(self__.keys.length - (1)),key);
var keys_l = self__.keys.length;
if(((idx < keys_l)) && (datascript.btset.eq.call(null,key,(self__.keys[idx])))){
return null;
} else {
if((keys_l === datascript.btset.max_len)){
var middle = datascript.btset.half.call(null,(keys_l + (1)));
if((idx > middle)){
return [(new datascript.btset.LeafNode(datascript.btset.cut.call(null,self__.keys,(0),middle))),(new datascript.btset.LeafNode(datascript.btset.cut_n_splice.call(null,self__.keys,middle,keys_l,idx,idx,[key])))];
} else {
return [(new datascript.btset.LeafNode(datascript.btset.cut_n_splice.call(null,self__.keys,(0),middle,idx,idx,[key]))),(new datascript.btset.LeafNode(datascript.btset.cut.call(null,self__.keys,middle,keys_l)))];
}
} else {
return [(new datascript.btset.LeafNode(datascript.btset.splice.call(null,self__.keys,idx,idx,[key])))];

}
}
});

datascript.btset.LeafNode.prototype.disj = (function (key,root_QMARK_,left,right){
var self__ = this;
var this$ = this;
var idx = datascript.btset.lookup_exact.call(null,self__.keys,key);
if(((-1) === idx)){
return null;
} else {
var new_keys = datascript.btset.splice.call(null,self__.keys,idx,(idx + (1)),[]);
return datascript.btset.rotate.call(null,(new datascript.btset.LeafNode(new_keys)),root_QMARK_,left,right);
}
});

datascript.btset.LeafNode.cljs$lang$type = true;

datascript.btset.LeafNode.cljs$lang$ctorStr = "datascript.btset/LeafNode";

datascript.btset.LeafNode.cljs$lang$ctorPrWriter = (function (this__13360__auto__,writer__13361__auto__,opt__13362__auto__){
return cljs.core._write.call(null,writer__13361__auto__,"datascript.btset/LeafNode");
});

datascript.btset.__GT_LeafNode = (function __GT_LeafNode(keys){
return (new datascript.btset.LeafNode(keys));
});

datascript.btset.keys_for = (function keys_for(set,path){
var level = set.shift;
var node = set.root;
while(true){
if((level > (0))){
var G__26898 = (level - datascript.btset.level_shift);
var G__26899 = (node.pointers[datascript.btset.path_get.call(null,path,level)]);
level = G__26898;
node = G__26899;
continue;
} else {
return node.keys;
}
break;
}
});
datascript.btset.btset_conj = (function btset_conj(set,key,cmp){
var _STAR_cmp_STAR_26901 = datascript.btset._STAR_cmp_STAR_;
try{datascript.btset._STAR_cmp_STAR_ = cmp;

var roots = set.root.conj(key);
if((roots == null)){
return set;
} else {
if((roots.length === (1))){
return datascript.btset.alter_btset.call(null,set,(roots[(0)]),set.shift,(set.cnt + (1)));
} else {
return datascript.btset.alter_btset.call(null,set,(new datascript.btset.Node(roots.map(datascript.btset.lim_key),roots)),(set.shift + datascript.btset.level_shift),(set.cnt + (1)));

}
}
}finally {datascript.btset._STAR_cmp_STAR_ = _STAR_cmp_STAR_26901;
}});
datascript.btset.btset_disj = (function btset_disj(set,key,cmp){
var _STAR_cmp_STAR_26903 = datascript.btset._STAR_cmp_STAR_;
try{datascript.btset._STAR_cmp_STAR_ = cmp;

var new_roots = set.root.disj(key,true,null,null);
if((new_roots == null)){
return set;
} else {
var new_root = (new_roots[(0)]);
if(((new_root instanceof datascript.btset.Node)) && ((new_root.pointers.length === (1)))){
return datascript.btset.alter_btset.call(null,set,(new_root.pointers[(0)]),(set.shift - datascript.btset.level_shift),(set.cnt - (1)));
} else {
return datascript.btset.alter_btset.call(null,set,new_root,set.shift,(set.cnt - (1)));
}
}
}finally {datascript.btset._STAR_cmp_STAR_ = _STAR_cmp_STAR_26903;
}});
datascript.btset._next_path = (function _next_path(node,path,level){
var idx = datascript.btset.path_get.call(null,path,level);
if((level > (0))){
var sub_path = _next_path.call(null,(node.pointers[idx]),path,(level - datascript.btset.level_shift));
if(((-1) === sub_path)){
if(((idx + (1)) < node.pointers.length)){
return datascript.btset.path_set.call(null,datascript.btset.empty_path,level,(idx + (1)));
} else {
return (-1);
}
} else {
return datascript.btset.path_set.call(null,sub_path,level,idx);
}
} else {
if(((idx + (1)) < node.keys.length)){
return datascript.btset.path_set.call(null,datascript.btset.empty_path,(0),(idx + (1)));
} else {
return (-1);
}
}
});
/**
* Returns path representing next item after `path` in natural traversal order,
* or -1 if end of tree has been reached
*/
datascript.btset.next_path = (function next_path(set,path){
return datascript.btset._next_path.call(null,set.root,path,set.shift);
});
/**
* Returns rightmost path possible starting from node and going deeper
*/
datascript.btset._rpath = (function _rpath(node,level){
var node__$1 = node;
var path = datascript.btset.empty_path;
var level__$1 = level;
while(true){
if((level__$1 > (0))){
var G__26904 = datascript.btset.alast.call(null,node__$1.pointers);
var G__26905 = datascript.btset.path_set.call(null,path,level__$1,(node__$1.pointers.length - (1)));
var G__26906 = (level__$1 - datascript.btset.level_shift);
node__$1 = G__26904;
path = G__26905;
level__$1 = G__26906;
continue;
} else {
return datascript.btset.path_set.call(null,path,(0),(node__$1.keys.length - (1)));
}
break;
}
});
datascript.btset._prev_path = (function _prev_path(node,path,level){
var idx = datascript.btset.path_get.call(null,path,level);
if((level > (0))){
var sub_level = (level - datascript.btset.level_shift);
var sub_path = _prev_path.call(null,(node.pointers[idx]),path,sub_level);
if(((-1) === sub_path)){
if(((idx - (1)) >= (0))){
var idx__$1 = (idx - (1));
var sub_path__$1 = datascript.btset._rpath.call(null,(node.pointers[idx__$1]),sub_level);
return datascript.btset.path_set.call(null,sub_path__$1,level,idx__$1);
} else {
return (-1);
}
} else {
return datascript.btset.path_set.call(null,sub_path,level,idx);
}
} else {
if(((idx - (1)) >= (0))){
return datascript.btset.path_set.call(null,datascript.btset.empty_path,(0),(idx - (1)));
} else {
return (-1);
}
}
});
/**
* Returns path representing previous item before `path` in natural traversal order,
* or -1 if `path` was already beginning of a tree
*/
datascript.btset.prev_path = (function prev_path(set,path){
return datascript.btset._prev_path.call(null,set.root,path,set.shift);
});



/**
* @constructor
*/
datascript.btset.BTSetIter = (function (set,left,right,keys,idx){
this.set = set;
this.left = left;
this.right = right;
this.keys = keys;
this.idx = idx;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 142606528;
})
datascript.btset.BTSetIter.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.keys)){
return datascript.btset._btset_backwards_iter.call(null,self__.set,datascript.btset.prev_path.call(null,self__.set,self__.left),datascript.btset.prev_path.call(null,self__.set,self__.right));
} else {
return null;
}
});

datascript.btset.BTSetIter.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.keys)){
if(((self__.idx + (1)) < self__.keys.length)){
if(((self__.left + (1)) < self__.right)){
return (new datascript.btset.BTSetIter(self__.set,(self__.left + (1)),self__.right,self__.keys,(self__.idx + (1))));
} else {
return null;
}
} else {
var left__$1 = datascript.btset.next_path.call(null,self__.set,self__.left);
if((cljs.core.not_EQ_.call(null,(-1),left__$1)) && ((left__$1 < self__.right))){
return datascript.btset._btset_iter.call(null,self__.set,left__$1,self__.right);
} else {
return null;
}
}
} else {
return null;
}
});

datascript.btset.BTSetIter.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.keys)){
return (self__.keys[self__.idx]);
} else {
return null;
}
});

datascript.btset.BTSetIter.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var temp__4124__auto__ = cljs.core._next.call(null,this$__$1);
if(cljs.core.truth_(temp__4124__auto__)){
var next = temp__4124__auto__;
return next;
} else {
return (new datascript.btset.BTSetIter(self__.set,(-1),(-1),null,(-1)));
}
});

datascript.btset.BTSetIter.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.keys)){
return this$__$1;
} else {
return null;
}
});

datascript.btset.BTSetIter.cljs$lang$type = true;

datascript.btset.BTSetIter.cljs$lang$ctorStr = "datascript.btset/BTSetIter";

datascript.btset.BTSetIter.cljs$lang$ctorPrWriter = (function (this__13360__auto__,writer__13361__auto__,opt__13362__auto__){
return cljs.core._write.call(null,writer__13361__auto__,"datascript.btset/BTSetIter");
});

datascript.btset.__GT_BTSetIter = (function __GT_BTSetIter(set,left,right,keys,idx){
return (new datascript.btset.BTSetIter(set,left,right,keys,idx));
});

datascript.btset._btset_iter = (function _btset_iter(set,left,right){
return (new datascript.btset.BTSetIter(set,left,right,datascript.btset.keys_for.call(null,set,left),datascript.btset.path_get.call(null,left,(0))));
});

/**
* @constructor
*/
datascript.btset.BTSetBackwardsIter = (function (set,left,right,keys,idx){
this.set = set;
this.left = left;
this.right = right;
this.keys = keys;
this.idx = idx;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 142606528;
})
datascript.btset.BTSetBackwardsIter.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.keys)){
var new_left = (((self__.left === (-1)))?(0):datascript.btset.next_path.call(null,self__.set,self__.left));
var new_right = datascript.btset.next_path.call(null,self__.set,self__.right);
var new_right__$1 = (((new_right === (-1)))?(self__.right + (1)):new_right);
return datascript.btset._btset_iter.call(null,self__.set,new_left,new_right__$1);
} else {
return null;
}
});

datascript.btset.BTSetBackwardsIter.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.keys)){
if(((self__.idx - (1)) >= (0))){
if(((self__.right - (1)) > self__.left)){
return (new datascript.btset.BTSetBackwardsIter(self__.set,self__.left,(self__.right - (1)),self__.keys,(self__.idx - (1))));
} else {
return null;
}
} else {
var right__$1 = datascript.btset.prev_path.call(null,self__.set,self__.right);
if((cljs.core.not_EQ_.call(null,(-1),right__$1)) && ((right__$1 > self__.left))){
return datascript.btset._btset_backwards_iter.call(null,self__.set,self__.left,right__$1);
} else {
return null;
}
}
} else {
return null;
}
});

datascript.btset.BTSetBackwardsIter.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.keys)){
return (self__.keys[self__.idx]);
} else {
return null;
}
});

datascript.btset.BTSetBackwardsIter.prototype.cljs$core$ISeq$_rest$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var temp__4124__auto__ = cljs.core._next.call(null,this$__$1);
if(cljs.core.truth_(temp__4124__auto__)){
var next = temp__4124__auto__;
return next;
} else {
return (new datascript.btset.BTSetBackwardsIter(self__.set,(-1),(-1),null,(-1)));
}
});

datascript.btset.BTSetBackwardsIter.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(self__.keys)){
return this$__$1;
} else {
return null;
}
});

datascript.btset.BTSetBackwardsIter.cljs$lang$type = true;

datascript.btset.BTSetBackwardsIter.cljs$lang$ctorStr = "datascript.btset/BTSetBackwardsIter";

datascript.btset.BTSetBackwardsIter.cljs$lang$ctorPrWriter = (function (this__13360__auto__,writer__13361__auto__,opt__13362__auto__){
return cljs.core._write.call(null,writer__13361__auto__,"datascript.btset/BTSetBackwardsIter");
});

datascript.btset.__GT_BTSetBackwardsIter = (function __GT_BTSetBackwardsIter(set,left,right,keys,idx){
return (new datascript.btset.BTSetBackwardsIter(set,left,right,keys,idx));
});

datascript.btset._btset_backwards_iter = (function _btset_backwards_iter(set,left,right){
return (new datascript.btset.BTSetBackwardsIter(set,left,right,datascript.btset.keys_for.call(null,set,right),datascript.btset.path_get.call(null,right,(0))));
});
/**
* Iterator that represents whole set
*/
datascript.btset.btset_iter = (function btset_iter(set){
if((set.root.keys.length > (0))){
var left = datascript.btset.empty_path;
var right = (datascript.btset._rpath.call(null,set.root,set.shift) + (1));
return datascript.btset._btset_iter.call(null,set,left,right);
} else {
return null;
}
});
/**
* Returns path to first element >= key,
* or -1 if all elements in a set < key
*/
datascript.btset._seek = (function _seek(set,key){
var node = set.root;
var path = datascript.btset.empty_path;
var level = set.shift;
while(true){
var keys = node.keys;
var keys_l = keys.length;
if(((0) === level)){
var idx = datascript.btset.binary_search_l.call(null,keys,(0),(keys_l - (1)),key);
if((keys_l === idx)){
return (-1);
} else {
return datascript.btset.path_set.call(null,path,(0),idx);
}
} else {
var idx = datascript.btset.binary_search_l.call(null,keys,(0),(keys_l - (2)),key);
var G__26907 = (node.pointers[idx]);
var G__26908 = datascript.btset.path_set.call(null,path,level,idx);
var G__26909 = (level - datascript.btset.level_shift);
node = G__26907;
path = G__26908;
level = G__26909;
continue;
}
break;
}
});
/**
* Returns path to the first element that is > key.
* If all elements in a set are <= key, returns `(-rpath set) + 1`.
* It’s a virtual path that is bigger than any path in a tree
*/
datascript.btset._rseek = (function _rseek(set,key){
var node = set.root;
var path = datascript.btset.empty_path;
var level = set.shift;
while(true){
var keys = node.keys;
var keys_l = keys.length;
if(((0) === level)){
var idx = datascript.btset.binary_search_r.call(null,keys,(0),(keys_l - (1)),key);
return datascript.btset.path_set.call(null,path,(0),idx);
} else {
var idx = datascript.btset.binary_search_r.call(null,keys,(0),(keys_l - (2)),key);
var G__26910 = (node.pointers[idx]);
var G__26911 = datascript.btset.path_set.call(null,path,level,idx);
var G__26912 = (level - datascript.btset.level_shift);
node = G__26910;
path = G__26911;
level = G__26912;
continue;
}
break;
}
});
datascript.btset._slice = (function _slice(set,key_from,key_to){
var path = datascript.btset._seek.call(null,set,key_from);
if((path < (0))){
return null;
} else {
var till_path = datascript.btset._rseek.call(null,set,key_to);
if((till_path > path)){
return (new datascript.btset.BTSetIter(set,path,till_path,datascript.btset.keys_for.call(null,set,path),datascript.btset.path_get.call(null,path,(0))));
} else {
return null;
}
}
});
/**
* When called with single key, returns iterator over set that contains all elements equal to the key.
* When called with two keys (range), returns iterator for all X where key-from <= X <= key-to
*/
datascript.btset.slice = (function() {
var slice = null;
var slice__2 = (function (set,key){
return slice.call(null,set,key,key);
});
var slice__3 = (function (set,key_from,key_to){
var _STAR_cmp_STAR_26914 = datascript.btset._STAR_cmp_STAR_;
try{datascript.btset._STAR_cmp_STAR_ = set.comparator;

return datascript.btset._slice.call(null,set,key_from,key_to);
}finally {datascript.btset._STAR_cmp_STAR_ = _STAR_cmp_STAR_26914;
}});
slice = function(set,key_from,key_to){
switch(arguments.length){
case 2:
return slice__2.call(this,set,key_from);
case 3:
return slice__3.call(this,set,key_from,key_to);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
slice.cljs$core$IFn$_invoke$arity$2 = slice__2;
slice.cljs$core$IFn$_invoke$arity$3 = slice__3;
return slice;
})()
;

/**
* @constructor
*/
datascript.btset.BTSet = (function (root,shift,cnt,comparator,meta,__hash){
this.root = root;
this.shift = shift;
this.cnt = cnt;
this.comparator = comparator;
this.meta = meta;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2296779023;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
datascript.btset.BTSet.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str_STAR_.call(null,this$);
});

datascript.btset.BTSet.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (set,k){
var self__ = this;
var set__$1 = this;
return cljs.core._lookup.call(null,set__$1,k,null);
});

datascript.btset.BTSet.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
var _STAR_cmp_STAR_26917 = datascript.btset._STAR_cmp_STAR_;
try{datascript.btset._STAR_cmp_STAR_ = self__.comparator;

var or__12773__auto__ = self__.root.lookup(k);
if(cljs.core.truth_(or__12773__auto__)){
return or__12773__auto__;
} else {
return not_found;
}
}finally {datascript.btset._STAR_cmp_STAR_ = _STAR_cmp_STAR_26917;
}});

datascript.btset.BTSet.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"#{"," ","}",opts,cljs.core.seq.call(null,this$__$1));
});

datascript.btset.BTSet.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
});

datascript.btset.BTSet.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new datascript.btset.BTSet(self__.root,self__.shift,self__.cnt,self__.comparator,self__.meta,self__.__hash));
});

datascript.btset.BTSet.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.cnt;
});

datascript.btset.BTSet.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.reverse.call(null,datascript.btset.btset_iter.call(null,this$__$1));
});

datascript.btset.BTSet.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var h__13194__auto__ = self__.__hash;
if(!((h__13194__auto__ == null))){
return h__13194__auto__;
} else {
var h__13194__auto____$1 = cljs.core.hash_iset.call(null,coll__$1);
self__.__hash = h__13194__auto____$1;

return h__13194__auto____$1;
}
});

datascript.btset.BTSet.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (cljs.core.set_QMARK_.call(null,other)) && ((self__.cnt === cljs.core.count.call(null,other))) && (cljs.core.every_QMARK_.call(null,((function (this$__$1){
return (function (p1__26915_SHARP_){
return cljs.core.contains_QMARK_.call(null,this$__$1,p1__26915_SHARP_);
});})(this$__$1))
,other));
});

datascript.btset.BTSet.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new datascript.btset.BTSet((new datascript.btset.LeafNode([])),(0),(0),self__.comparator,self__.meta,(0)));
});

datascript.btset.BTSet.prototype.cljs$core$ISet$_disjoin$arity$2 = (function (set,key){
var self__ = this;
var set__$1 = this;
return datascript.btset.btset_disj.call(null,set__$1,key,self__.comparator);
});

datascript.btset.BTSet.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return datascript.btset.btset_iter.call(null,this$__$1);
});

datascript.btset.BTSet.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new datascript.btset.BTSet(self__.root,self__.shift,self__.cnt,self__.comparator,new_meta,self__.__hash));
});

datascript.btset.BTSet.prototype.cljs$core$ICollection$_conj$arity$2 = (function (set,key){
var self__ = this;
var set__$1 = this;
return datascript.btset.btset_conj.call(null,set__$1,key,self__.comparator);
});

datascript.btset.BTSet.prototype.call = (function() {
var G__26918 = null;
var G__26918__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return cljs.core._lookup.call(null,coll,k);
});
var G__26918__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__26918 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__26918__2.call(this,self__,k);
case 3:
return G__26918__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__26918.cljs$core$IFn$_invoke$arity$2 = G__26918__2;
G__26918.cljs$core$IFn$_invoke$arity$3 = G__26918__3;
return G__26918;
})()
;

datascript.btset.BTSet.prototype.apply = (function (self__,args26916){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args26916)));
});

datascript.btset.BTSet.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return cljs.core._lookup.call(null,coll,k);
});

datascript.btset.BTSet.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});

datascript.btset.BTSet.cljs$lang$type = true;

datascript.btset.BTSet.cljs$lang$ctorStr = "datascript.btset/BTSet";

datascript.btset.BTSet.cljs$lang$ctorPrWriter = (function (this__13360__auto__,writer__13361__auto__,opt__13362__auto__){
return cljs.core._write.call(null,writer__13361__auto__,"datascript.btset/BTSet");
});

datascript.btset.__GT_BTSet = (function __GT_BTSet(root,shift,cnt,comparator,meta,__hash){
return (new datascript.btset.BTSet(root,shift,cnt,comparator,meta,__hash));
});

datascript.btset.alter_btset = (function alter_btset(set,root,shift,cnt){
return (new datascript.btset.BTSet(root,shift,cnt,set.comparator,set.meta,null));
});
datascript.btset._btset_from_sorted_arr = (function _btset_from_sorted_arr(arr,cmp){
var leafs = datascript.btset.arr_map_inplace.call(null,datascript.btset.__GT_LeafNode,datascript.btset.arr_partition_approx.call(null,datascript.btset.min_len,datascript.btset.max_len,arr));
var current_level = leafs;
var shift = (0);
while(true){
var G__26921 = cljs.core.count.call(null,current_level);
switch (G__26921) {
case (0):
return (new datascript.btset.BTSet((new datascript.btset.LeafNode([])),(0),(0),cmp,null,(0)));

break;
case (1):
return (new datascript.btset.BTSet(cljs.core.first.call(null,current_level),shift,arr.length,cmp,null,(0)));

break;
default:
var G__26923 = datascript.btset.arr_map_inplace.call(null,((function (current_level,shift,G__26921,leafs){
return (function (p1__26919_SHARP_){
return (new datascript.btset.Node(p1__26919_SHARP_.map(datascript.btset.lim_key),p1__26919_SHARP_));
});})(current_level,shift,G__26921,leafs))
,datascript.btset.arr_partition_approx.call(null,datascript.btset.min_len,datascript.btset.max_len,current_level));
var G__26924 = (shift + datascript.btset.level_shift);
current_level = G__26923;
shift = G__26924;
continue;

}
break;
}
});
datascript.btset._btset_from_seq = (function _btset_from_seq(seq,cmp){
var arr = datascript.btset.arr_distinct.call(null,cljs.core.into_array.call(null,seq).sort(cmp),cmp);
return datascript.btset._btset_from_sorted_arr.call(null,arr,cmp);
});
/**
* @param {...*} var_args
*/
datascript.btset.btset_by = (function() {
var btset_by = null;
var btset_by__1 = (function (cmp){
return (new datascript.btset.BTSet((new datascript.btset.LeafNode([])),(0),(0),cmp,null,(0)));
});
var btset_by__2 = (function() { 
var G__26925__delegate = function (cmp,keys){
return datascript.btset._btset_from_seq.call(null,keys,cmp);
};
var G__26925 = function (cmp,var_args){
var keys = null;
if (arguments.length > 1) {
var G__26926__i = 0, G__26926__a = new Array(arguments.length -  1);
while (G__26926__i < G__26926__a.length) {G__26926__a[G__26926__i] = arguments[G__26926__i + 1]; ++G__26926__i;}
  keys = new cljs.core.IndexedSeq(G__26926__a,0);
} 
return G__26925__delegate.call(this,cmp,keys);};
G__26925.cljs$lang$maxFixedArity = 1;
G__26925.cljs$lang$applyTo = (function (arglist__26927){
var cmp = cljs.core.first(arglist__26927);
var keys = cljs.core.rest(arglist__26927);
return G__26925__delegate(cmp,keys);
});
G__26925.cljs$core$IFn$_invoke$arity$variadic = G__26925__delegate;
return G__26925;
})()
;
btset_by = function(cmp,var_args){
var keys = var_args;
switch(arguments.length){
case 1:
return btset_by__1.call(this,cmp);
default:
var G__26928 = null;
if (arguments.length > 1) {
var G__26929__i = 0, G__26929__a = new Array(arguments.length -  1);
while (G__26929__i < G__26929__a.length) {G__26929__a[G__26929__i] = arguments[G__26929__i + 1]; ++G__26929__i;}
G__26928 = new cljs.core.IndexedSeq(G__26929__a,0);
}
return btset_by__2.cljs$core$IFn$_invoke$arity$variadic(cmp, G__26928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
btset_by.cljs$lang$maxFixedArity = 1;
btset_by.cljs$lang$applyTo = btset_by__2.cljs$lang$applyTo;
btset_by.cljs$core$IFn$_invoke$arity$1 = btset_by__1;
btset_by.cljs$core$IFn$_invoke$arity$variadic = btset_by__2.cljs$core$IFn$_invoke$arity$variadic;
return btset_by;
})()
;
/**
* @param {...*} var_args
*/
datascript.btset.btset = (function() {
var btset = null;
var btset__0 = (function (){
return datascript.btset.btset_by.call(null,cljs.core.compare);
});
var btset__1 = (function() { 
var G__26930__delegate = function (keys){
return datascript.btset._btset_from_seq.call(null,keys,cljs.core.compare);
};
var G__26930 = function (var_args){
var keys = null;
if (arguments.length > 0) {
var G__26931__i = 0, G__26931__a = new Array(arguments.length -  0);
while (G__26931__i < G__26931__a.length) {G__26931__a[G__26931__i] = arguments[G__26931__i + 0]; ++G__26931__i;}
  keys = new cljs.core.IndexedSeq(G__26931__a,0);
} 
return G__26930__delegate.call(this,keys);};
G__26930.cljs$lang$maxFixedArity = 0;
G__26930.cljs$lang$applyTo = (function (arglist__26932){
var keys = cljs.core.seq(arglist__26932);
return G__26930__delegate(keys);
});
G__26930.cljs$core$IFn$_invoke$arity$variadic = G__26930__delegate;
return G__26930;
})()
;
btset = function(var_args){
var keys = var_args;
switch(arguments.length){
case 0:
return btset__0.call(this);
default:
var G__26933 = null;
if (arguments.length > 0) {
var G__26934__i = 0, G__26934__a = new Array(arguments.length -  0);
while (G__26934__i < G__26934__a.length) {G__26934__a[G__26934__i] = arguments[G__26934__i + 0]; ++G__26934__i;}
G__26933 = new cljs.core.IndexedSeq(G__26934__a,0);
}
return btset__1.cljs$core$IFn$_invoke$arity$variadic(G__26933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
btset.cljs$lang$maxFixedArity = 0;
btset.cljs$lang$applyTo = btset__1.cljs$lang$applyTo;
btset.cljs$core$IFn$_invoke$arity$0 = btset__0;
btset.cljs$core$IFn$_invoke$arity$variadic = btset__1.cljs$core$IFn$_invoke$arity$variadic;
return btset;
})()
;

//# sourceMappingURL=btset.js.map