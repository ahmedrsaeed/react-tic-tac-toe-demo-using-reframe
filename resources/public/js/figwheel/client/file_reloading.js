// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__28323__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__28323__auto__){
return or__28323__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__28323__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__28323__auto__)){
return or__28323__auto__;
} else {
var or__28323__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__28323__auto____$1)){
return or__28323__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__35260_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__35260_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__35261 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__35262 = null;
var count__35263 = (0);
var i__35264 = (0);
while(true){
if((i__35264 < count__35263)){
var n = cljs.core._nth.call(null,chunk__35262,i__35264);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__35265 = seq__35261;
var G__35266 = chunk__35262;
var G__35267 = count__35263;
var G__35268 = (i__35264 + (1));
seq__35261 = G__35265;
chunk__35262 = G__35266;
count__35263 = G__35267;
i__35264 = G__35268;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35261);
if(temp__4657__auto__){
var seq__35261__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35261__$1)){
var c__29162__auto__ = cljs.core.chunk_first.call(null,seq__35261__$1);
var G__35269 = cljs.core.chunk_rest.call(null,seq__35261__$1);
var G__35270 = c__29162__auto__;
var G__35271 = cljs.core.count.call(null,c__29162__auto__);
var G__35272 = (0);
seq__35261 = G__35269;
chunk__35262 = G__35270;
count__35263 = G__35271;
i__35264 = G__35272;
continue;
} else {
var n = cljs.core.first.call(null,seq__35261__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__35273 = cljs.core.next.call(null,seq__35261__$1);
var G__35274 = null;
var G__35275 = (0);
var G__35276 = (0);
seq__35261 = G__35273;
chunk__35262 = G__35274;
count__35263 = G__35275;
i__35264 = G__35276;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__35277){
var vec__35278 = p__35277;
var _ = cljs.core.nth.call(null,vec__35278,(0),null);
var v = cljs.core.nth.call(null,vec__35278,(1),null);
var and__28311__auto__ = v;
if(cljs.core.truth_(and__28311__auto__)){
return v.call(null,dep);
} else {
return and__28311__auto__;
}
}),cljs.core.filter.call(null,(function (p__35281){
var vec__35282 = p__35281;
var k = cljs.core.nth.call(null,vec__35282,(0),null);
var v = cljs.core.nth.call(null,vec__35282,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__35294_35302 = cljs.core.seq.call(null,deps);
var chunk__35295_35303 = null;
var count__35296_35304 = (0);
var i__35297_35305 = (0);
while(true){
if((i__35297_35305 < count__35296_35304)){
var dep_35306 = cljs.core._nth.call(null,chunk__35295_35303,i__35297_35305);
if(cljs.core.truth_((function (){var and__28311__auto__ = dep_35306;
if(cljs.core.truth_(and__28311__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_35306));
} else {
return and__28311__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_35306,(depth + (1)),state);
} else {
}

var G__35307 = seq__35294_35302;
var G__35308 = chunk__35295_35303;
var G__35309 = count__35296_35304;
var G__35310 = (i__35297_35305 + (1));
seq__35294_35302 = G__35307;
chunk__35295_35303 = G__35308;
count__35296_35304 = G__35309;
i__35297_35305 = G__35310;
continue;
} else {
var temp__4657__auto___35311 = cljs.core.seq.call(null,seq__35294_35302);
if(temp__4657__auto___35311){
var seq__35294_35312__$1 = temp__4657__auto___35311;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35294_35312__$1)){
var c__29162__auto___35313 = cljs.core.chunk_first.call(null,seq__35294_35312__$1);
var G__35314 = cljs.core.chunk_rest.call(null,seq__35294_35312__$1);
var G__35315 = c__29162__auto___35313;
var G__35316 = cljs.core.count.call(null,c__29162__auto___35313);
var G__35317 = (0);
seq__35294_35302 = G__35314;
chunk__35295_35303 = G__35315;
count__35296_35304 = G__35316;
i__35297_35305 = G__35317;
continue;
} else {
var dep_35318 = cljs.core.first.call(null,seq__35294_35312__$1);
if(cljs.core.truth_((function (){var and__28311__auto__ = dep_35318;
if(cljs.core.truth_(and__28311__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_35318));
} else {
return and__28311__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_35318,(depth + (1)),state);
} else {
}

var G__35319 = cljs.core.next.call(null,seq__35294_35312__$1);
var G__35320 = null;
var G__35321 = (0);
var G__35322 = (0);
seq__35294_35302 = G__35319;
chunk__35295_35303 = G__35320;
count__35296_35304 = G__35321;
i__35297_35305 = G__35322;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__35298){
var vec__35299 = p__35298;
var seq__35300 = cljs.core.seq.call(null,vec__35299);
var first__35301 = cljs.core.first.call(null,seq__35300);
var seq__35300__$1 = cljs.core.next.call(null,seq__35300);
var x = first__35301;
var xs = seq__35300__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__35299,seq__35300,first__35301,seq__35300__$1,x,xs,get_deps__$1){
return (function (p1__35285_SHARP_){
return clojure.set.difference.call(null,p1__35285_SHARP_,x);
});})(vec__35299,seq__35300,first__35301,seq__35300__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__35323 = cljs.core.seq.call(null,provides);
var chunk__35324 = null;
var count__35325 = (0);
var i__35326 = (0);
while(true){
if((i__35326 < count__35325)){
var prov = cljs.core._nth.call(null,chunk__35324,i__35326);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35327_35335 = cljs.core.seq.call(null,requires);
var chunk__35328_35336 = null;
var count__35329_35337 = (0);
var i__35330_35338 = (0);
while(true){
if((i__35330_35338 < count__35329_35337)){
var req_35339 = cljs.core._nth.call(null,chunk__35328_35336,i__35330_35338);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35339,prov);

var G__35340 = seq__35327_35335;
var G__35341 = chunk__35328_35336;
var G__35342 = count__35329_35337;
var G__35343 = (i__35330_35338 + (1));
seq__35327_35335 = G__35340;
chunk__35328_35336 = G__35341;
count__35329_35337 = G__35342;
i__35330_35338 = G__35343;
continue;
} else {
var temp__4657__auto___35344 = cljs.core.seq.call(null,seq__35327_35335);
if(temp__4657__auto___35344){
var seq__35327_35345__$1 = temp__4657__auto___35344;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35327_35345__$1)){
var c__29162__auto___35346 = cljs.core.chunk_first.call(null,seq__35327_35345__$1);
var G__35347 = cljs.core.chunk_rest.call(null,seq__35327_35345__$1);
var G__35348 = c__29162__auto___35346;
var G__35349 = cljs.core.count.call(null,c__29162__auto___35346);
var G__35350 = (0);
seq__35327_35335 = G__35347;
chunk__35328_35336 = G__35348;
count__35329_35337 = G__35349;
i__35330_35338 = G__35350;
continue;
} else {
var req_35351 = cljs.core.first.call(null,seq__35327_35345__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35351,prov);

var G__35352 = cljs.core.next.call(null,seq__35327_35345__$1);
var G__35353 = null;
var G__35354 = (0);
var G__35355 = (0);
seq__35327_35335 = G__35352;
chunk__35328_35336 = G__35353;
count__35329_35337 = G__35354;
i__35330_35338 = G__35355;
continue;
}
} else {
}
}
break;
}

var G__35356 = seq__35323;
var G__35357 = chunk__35324;
var G__35358 = count__35325;
var G__35359 = (i__35326 + (1));
seq__35323 = G__35356;
chunk__35324 = G__35357;
count__35325 = G__35358;
i__35326 = G__35359;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35323);
if(temp__4657__auto__){
var seq__35323__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35323__$1)){
var c__29162__auto__ = cljs.core.chunk_first.call(null,seq__35323__$1);
var G__35360 = cljs.core.chunk_rest.call(null,seq__35323__$1);
var G__35361 = c__29162__auto__;
var G__35362 = cljs.core.count.call(null,c__29162__auto__);
var G__35363 = (0);
seq__35323 = G__35360;
chunk__35324 = G__35361;
count__35325 = G__35362;
i__35326 = G__35363;
continue;
} else {
var prov = cljs.core.first.call(null,seq__35323__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__35331_35364 = cljs.core.seq.call(null,requires);
var chunk__35332_35365 = null;
var count__35333_35366 = (0);
var i__35334_35367 = (0);
while(true){
if((i__35334_35367 < count__35333_35366)){
var req_35368 = cljs.core._nth.call(null,chunk__35332_35365,i__35334_35367);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35368,prov);

var G__35369 = seq__35331_35364;
var G__35370 = chunk__35332_35365;
var G__35371 = count__35333_35366;
var G__35372 = (i__35334_35367 + (1));
seq__35331_35364 = G__35369;
chunk__35332_35365 = G__35370;
count__35333_35366 = G__35371;
i__35334_35367 = G__35372;
continue;
} else {
var temp__4657__auto___35373__$1 = cljs.core.seq.call(null,seq__35331_35364);
if(temp__4657__auto___35373__$1){
var seq__35331_35374__$1 = temp__4657__auto___35373__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35331_35374__$1)){
var c__29162__auto___35375 = cljs.core.chunk_first.call(null,seq__35331_35374__$1);
var G__35376 = cljs.core.chunk_rest.call(null,seq__35331_35374__$1);
var G__35377 = c__29162__auto___35375;
var G__35378 = cljs.core.count.call(null,c__29162__auto___35375);
var G__35379 = (0);
seq__35331_35364 = G__35376;
chunk__35332_35365 = G__35377;
count__35333_35366 = G__35378;
i__35334_35367 = G__35379;
continue;
} else {
var req_35380 = cljs.core.first.call(null,seq__35331_35374__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_35380,prov);

var G__35381 = cljs.core.next.call(null,seq__35331_35374__$1);
var G__35382 = null;
var G__35383 = (0);
var G__35384 = (0);
seq__35331_35364 = G__35381;
chunk__35332_35365 = G__35382;
count__35333_35366 = G__35383;
i__35334_35367 = G__35384;
continue;
}
} else {
}
}
break;
}

var G__35385 = cljs.core.next.call(null,seq__35323__$1);
var G__35386 = null;
var G__35387 = (0);
var G__35388 = (0);
seq__35323 = G__35385;
chunk__35324 = G__35386;
count__35325 = G__35387;
i__35326 = G__35388;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__35389_35393 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__35390_35394 = null;
var count__35391_35395 = (0);
var i__35392_35396 = (0);
while(true){
if((i__35392_35396 < count__35391_35395)){
var ns_35397 = cljs.core._nth.call(null,chunk__35390_35394,i__35392_35396);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35397);

var G__35398 = seq__35389_35393;
var G__35399 = chunk__35390_35394;
var G__35400 = count__35391_35395;
var G__35401 = (i__35392_35396 + (1));
seq__35389_35393 = G__35398;
chunk__35390_35394 = G__35399;
count__35391_35395 = G__35400;
i__35392_35396 = G__35401;
continue;
} else {
var temp__4657__auto___35402 = cljs.core.seq.call(null,seq__35389_35393);
if(temp__4657__auto___35402){
var seq__35389_35403__$1 = temp__4657__auto___35402;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35389_35403__$1)){
var c__29162__auto___35404 = cljs.core.chunk_first.call(null,seq__35389_35403__$1);
var G__35405 = cljs.core.chunk_rest.call(null,seq__35389_35403__$1);
var G__35406 = c__29162__auto___35404;
var G__35407 = cljs.core.count.call(null,c__29162__auto___35404);
var G__35408 = (0);
seq__35389_35393 = G__35405;
chunk__35390_35394 = G__35406;
count__35391_35395 = G__35407;
i__35392_35396 = G__35408;
continue;
} else {
var ns_35409 = cljs.core.first.call(null,seq__35389_35403__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_35409);

var G__35410 = cljs.core.next.call(null,seq__35389_35403__$1);
var G__35411 = null;
var G__35412 = (0);
var G__35413 = (0);
seq__35389_35393 = G__35410;
chunk__35390_35394 = G__35411;
count__35391_35395 = G__35412;
i__35392_35396 = G__35413;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__28323__auto__ = goog.require__;
if(cljs.core.truth_(or__28323__auto__)){
return or__28323__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__35414__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__35414 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35415__i = 0, G__35415__a = new Array(arguments.length -  0);
while (G__35415__i < G__35415__a.length) {G__35415__a[G__35415__i] = arguments[G__35415__i + 0]; ++G__35415__i;}
  args = new cljs.core.IndexedSeq(G__35415__a,0,null);
} 
return G__35414__delegate.call(this,args);};
G__35414.cljs$lang$maxFixedArity = 0;
G__35414.cljs$lang$applyTo = (function (arglist__35416){
var args = cljs.core.seq(arglist__35416);
return G__35414__delegate(args);
});
G__35414.cljs$core$IFn$_invoke$arity$variadic = G__35414__delegate;
return G__35414;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__35417_SHARP_,p2__35418_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35417_SHARP_)].join('')),p2__35418_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__35419_SHARP_,p2__35420_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__35419_SHARP_)].join(''),p2__35420_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__35421 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__35421.addCallback(((function (G__35421){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__35421))
);

G__35421.addErrback(((function (G__35421){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__35421))
);

return G__35421;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e35422){if((e35422 instanceof Error)){
var e = e35422;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35422;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e35423){if((e35423 instanceof Error)){
var e = e35423;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35423;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__35424 = cljs.core._EQ_;
var expr__35425 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__35424.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__35425))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__35424.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__35425))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__35424.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__35425))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__35424,expr__35425){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__35424,expr__35425))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__35427,callback){
var map__35428 = p__35427;
var map__35428__$1 = ((((!((map__35428 == null)))?((((map__35428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35428.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35428):map__35428);
var file_msg = map__35428__$1;
var request_url = cljs.core.get.call(null,map__35428__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__28323__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__28323__auto__)){
return or__28323__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__35428,map__35428__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__35428,map__35428__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__32090__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32090__auto__){
return (function (){
var f__32091__auto__ = (function (){var switch__32002__auto__ = ((function (c__32090__auto__){
return (function (state_35468){
var state_val_35469 = (state_35468[(1)]);
if((state_val_35469 === (7))){
var inst_35464 = (state_35468[(2)]);
var state_35468__$1 = state_35468;
var statearr_35470_35497 = state_35468__$1;
(statearr_35470_35497[(2)] = inst_35464);

(statearr_35470_35497[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35469 === (1))){
var state_35468__$1 = state_35468;
var statearr_35471_35498 = state_35468__$1;
(statearr_35471_35498[(2)] = null);

(statearr_35471_35498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35469 === (4))){
var inst_35432 = (state_35468[(7)]);
var inst_35432__$1 = (state_35468[(2)]);
var state_35468__$1 = (function (){var statearr_35472 = state_35468;
(statearr_35472[(7)] = inst_35432__$1);

return statearr_35472;
})();
if(cljs.core.truth_(inst_35432__$1)){
var statearr_35473_35499 = state_35468__$1;
(statearr_35473_35499[(1)] = (5));

} else {
var statearr_35474_35500 = state_35468__$1;
(statearr_35474_35500[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35469 === (15))){
var inst_35446 = (state_35468[(8)]);
var inst_35449 = (state_35468[(9)]);
var inst_35451 = inst_35449.call(null,inst_35446);
var state_35468__$1 = state_35468;
var statearr_35475_35501 = state_35468__$1;
(statearr_35475_35501[(2)] = inst_35451);

(statearr_35475_35501[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35469 === (13))){
var inst_35458 = (state_35468[(2)]);
var state_35468__$1 = state_35468;
var statearr_35476_35502 = state_35468__$1;
(statearr_35476_35502[(2)] = inst_35458);

(statearr_35476_35502[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35469 === (6))){
var state_35468__$1 = state_35468;
var statearr_35477_35503 = state_35468__$1;
(statearr_35477_35503[(2)] = null);

(statearr_35477_35503[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35469 === (17))){
var inst_35455 = (state_35468[(2)]);
var state_35468__$1 = state_35468;
var statearr_35478_35504 = state_35468__$1;
(statearr_35478_35504[(2)] = inst_35455);

(statearr_35478_35504[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35469 === (3))){
var inst_35466 = (state_35468[(2)]);
var state_35468__$1 = state_35468;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35468__$1,inst_35466);
} else {
if((state_val_35469 === (12))){
var state_35468__$1 = state_35468;
var statearr_35479_35505 = state_35468__$1;
(statearr_35479_35505[(2)] = null);

(statearr_35479_35505[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35469 === (2))){
var state_35468__$1 = state_35468;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35468__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_35469 === (11))){
var inst_35437 = (state_35468[(10)]);
var inst_35444 = figwheel.client.file_reloading.blocking_load.call(null,inst_35437);
var state_35468__$1 = state_35468;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35468__$1,(14),inst_35444);
} else {
if((state_val_35469 === (9))){
var inst_35437 = (state_35468[(10)]);
var state_35468__$1 = state_35468;
if(cljs.core.truth_(inst_35437)){
var statearr_35480_35506 = state_35468__$1;
(statearr_35480_35506[(1)] = (11));

} else {
var statearr_35481_35507 = state_35468__$1;
(statearr_35481_35507[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35469 === (5))){
var inst_35432 = (state_35468[(7)]);
var inst_35438 = (state_35468[(11)]);
var inst_35437 = cljs.core.nth.call(null,inst_35432,(0),null);
var inst_35438__$1 = cljs.core.nth.call(null,inst_35432,(1),null);
var state_35468__$1 = (function (){var statearr_35482 = state_35468;
(statearr_35482[(10)] = inst_35437);

(statearr_35482[(11)] = inst_35438__$1);

return statearr_35482;
})();
if(cljs.core.truth_(inst_35438__$1)){
var statearr_35483_35508 = state_35468__$1;
(statearr_35483_35508[(1)] = (8));

} else {
var statearr_35484_35509 = state_35468__$1;
(statearr_35484_35509[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35469 === (14))){
var inst_35449 = (state_35468[(9)]);
var inst_35437 = (state_35468[(10)]);
var inst_35446 = (state_35468[(2)]);
var inst_35447 = console.log("Loading!",inst_35437);
var inst_35448 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_35449__$1 = cljs.core.get.call(null,inst_35448,inst_35437);
var state_35468__$1 = (function (){var statearr_35485 = state_35468;
(statearr_35485[(8)] = inst_35446);

(statearr_35485[(12)] = inst_35447);

(statearr_35485[(9)] = inst_35449__$1);

return statearr_35485;
})();
if(cljs.core.truth_(inst_35449__$1)){
var statearr_35486_35510 = state_35468__$1;
(statearr_35486_35510[(1)] = (15));

} else {
var statearr_35487_35511 = state_35468__$1;
(statearr_35487_35511[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35469 === (16))){
var inst_35446 = (state_35468[(8)]);
var inst_35453 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_35446);
var state_35468__$1 = state_35468;
var statearr_35488_35512 = state_35468__$1;
(statearr_35488_35512[(2)] = inst_35453);

(statearr_35488_35512[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35469 === (10))){
var inst_35460 = (state_35468[(2)]);
var state_35468__$1 = (function (){var statearr_35489 = state_35468;
(statearr_35489[(13)] = inst_35460);

return statearr_35489;
})();
var statearr_35490_35513 = state_35468__$1;
(statearr_35490_35513[(2)] = null);

(statearr_35490_35513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35469 === (8))){
var inst_35438 = (state_35468[(11)]);
var inst_35440 = console.log("Evaling!",inst_35438);
var inst_35441 = eval(inst_35438);
var state_35468__$1 = (function (){var statearr_35491 = state_35468;
(statearr_35491[(14)] = inst_35440);

return statearr_35491;
})();
var statearr_35492_35514 = state_35468__$1;
(statearr_35492_35514[(2)] = inst_35441);

(statearr_35492_35514[(1)] = (10));


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
});})(c__32090__auto__))
;
return ((function (switch__32002__auto__,c__32090__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__32003__auto__ = null;
var figwheel$client$file_reloading$state_machine__32003__auto____0 = (function (){
var statearr_35493 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35493[(0)] = figwheel$client$file_reloading$state_machine__32003__auto__);

(statearr_35493[(1)] = (1));

return statearr_35493;
});
var figwheel$client$file_reloading$state_machine__32003__auto____1 = (function (state_35468){
while(true){
var ret_value__32004__auto__ = (function (){try{while(true){
var result__32005__auto__ = switch__32002__auto__.call(null,state_35468);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32005__auto__;
}
break;
}
}catch (e35494){if((e35494 instanceof Object)){
var ex__32006__auto__ = e35494;
var statearr_35495_35515 = state_35468;
(statearr_35495_35515[(5)] = ex__32006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35468);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35494;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35516 = state_35468;
state_35468 = G__35516;
continue;
} else {
return ret_value__32004__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__32003__auto__ = function(state_35468){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__32003__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__32003__auto____1.call(this,state_35468);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__32003__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__32003__auto____0;
figwheel$client$file_reloading$state_machine__32003__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__32003__auto____1;
return figwheel$client$file_reloading$state_machine__32003__auto__;
})()
;})(switch__32002__auto__,c__32090__auto__))
})();
var state__32092__auto__ = (function (){var statearr_35496 = f__32091__auto__.call(null);
(statearr_35496[(6)] = c__32090__auto__);

return statearr_35496;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32092__auto__);
});})(c__32090__auto__))
);

return c__32090__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__35518 = arguments.length;
switch (G__35518) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__35520,callback){
var map__35521 = p__35520;
var map__35521__$1 = ((((!((map__35521 == null)))?((((map__35521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35521.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35521):map__35521);
var file_msg = map__35521__$1;
var namespace = cljs.core.get.call(null,map__35521__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__35521,map__35521__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__35521,map__35521__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__35523){
var map__35524 = p__35523;
var map__35524__$1 = ((((!((map__35524 == null)))?((((map__35524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35524.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35524):map__35524);
var file_msg = map__35524__$1;
var namespace = cljs.core.get.call(null,map__35524__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__35526){
var map__35527 = p__35526;
var map__35527__$1 = ((((!((map__35527 == null)))?((((map__35527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35527.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35527):map__35527);
var file_msg = map__35527__$1;
var namespace = cljs.core.get.call(null,map__35527__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__28311__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__28311__auto__){
var or__28323__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__28323__auto__)){
return or__28323__auto__;
} else {
var or__28323__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__28323__auto____$1)){
return or__28323__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__28311__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__35529,callback){
var map__35530 = p__35529;
var map__35530__$1 = ((((!((map__35530 == null)))?((((map__35530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35530.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35530):map__35530);
var file_msg = map__35530__$1;
var request_url = cljs.core.get.call(null,map__35530__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__35530__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__32090__auto___35580 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32090__auto___35580,out){
return (function (){
var f__32091__auto__ = (function (){var switch__32002__auto__ = ((function (c__32090__auto___35580,out){
return (function (state_35565){
var state_val_35566 = (state_35565[(1)]);
if((state_val_35566 === (1))){
var inst_35539 = cljs.core.seq.call(null,files);
var inst_35540 = cljs.core.first.call(null,inst_35539);
var inst_35541 = cljs.core.next.call(null,inst_35539);
var inst_35542 = files;
var state_35565__$1 = (function (){var statearr_35567 = state_35565;
(statearr_35567[(7)] = inst_35542);

(statearr_35567[(8)] = inst_35540);

(statearr_35567[(9)] = inst_35541);

return statearr_35567;
})();
var statearr_35568_35581 = state_35565__$1;
(statearr_35568_35581[(2)] = null);

(statearr_35568_35581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35566 === (2))){
var inst_35548 = (state_35565[(10)]);
var inst_35542 = (state_35565[(7)]);
var inst_35547 = cljs.core.seq.call(null,inst_35542);
var inst_35548__$1 = cljs.core.first.call(null,inst_35547);
var inst_35549 = cljs.core.next.call(null,inst_35547);
var inst_35550 = (inst_35548__$1 == null);
var inst_35551 = cljs.core.not.call(null,inst_35550);
var state_35565__$1 = (function (){var statearr_35569 = state_35565;
(statearr_35569[(10)] = inst_35548__$1);

(statearr_35569[(11)] = inst_35549);

return statearr_35569;
})();
if(inst_35551){
var statearr_35570_35582 = state_35565__$1;
(statearr_35570_35582[(1)] = (4));

} else {
var statearr_35571_35583 = state_35565__$1;
(statearr_35571_35583[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35566 === (3))){
var inst_35563 = (state_35565[(2)]);
var state_35565__$1 = state_35565;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35565__$1,inst_35563);
} else {
if((state_val_35566 === (4))){
var inst_35548 = (state_35565[(10)]);
var inst_35553 = figwheel.client.file_reloading.reload_js_file.call(null,inst_35548);
var state_35565__$1 = state_35565;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35565__$1,(7),inst_35553);
} else {
if((state_val_35566 === (5))){
var inst_35559 = cljs.core.async.close_BANG_.call(null,out);
var state_35565__$1 = state_35565;
var statearr_35572_35584 = state_35565__$1;
(statearr_35572_35584[(2)] = inst_35559);

(statearr_35572_35584[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35566 === (6))){
var inst_35561 = (state_35565[(2)]);
var state_35565__$1 = state_35565;
var statearr_35573_35585 = state_35565__$1;
(statearr_35573_35585[(2)] = inst_35561);

(statearr_35573_35585[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35566 === (7))){
var inst_35549 = (state_35565[(11)]);
var inst_35555 = (state_35565[(2)]);
var inst_35556 = cljs.core.async.put_BANG_.call(null,out,inst_35555);
var inst_35542 = inst_35549;
var state_35565__$1 = (function (){var statearr_35574 = state_35565;
(statearr_35574[(7)] = inst_35542);

(statearr_35574[(12)] = inst_35556);

return statearr_35574;
})();
var statearr_35575_35586 = state_35565__$1;
(statearr_35575_35586[(2)] = null);

(statearr_35575_35586[(1)] = (2));


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
});})(c__32090__auto___35580,out))
;
return ((function (switch__32002__auto__,c__32090__auto___35580,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32003__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32003__auto____0 = (function (){
var statearr_35576 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35576[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32003__auto__);

(statearr_35576[(1)] = (1));

return statearr_35576;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32003__auto____1 = (function (state_35565){
while(true){
var ret_value__32004__auto__ = (function (){try{while(true){
var result__32005__auto__ = switch__32002__auto__.call(null,state_35565);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32005__auto__;
}
break;
}
}catch (e35577){if((e35577 instanceof Object)){
var ex__32006__auto__ = e35577;
var statearr_35578_35587 = state_35565;
(statearr_35578_35587[(5)] = ex__32006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35565);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35577;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35588 = state_35565;
state_35565 = G__35588;
continue;
} else {
return ret_value__32004__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32003__auto__ = function(state_35565){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32003__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32003__auto____1.call(this,state_35565);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32003__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32003__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32003__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32003__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32003__auto__;
})()
;})(switch__32002__auto__,c__32090__auto___35580,out))
})();
var state__32092__auto__ = (function (){var statearr_35579 = f__32091__auto__.call(null);
(statearr_35579[(6)] = c__32090__auto___35580);

return statearr_35579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32092__auto__);
});})(c__32090__auto___35580,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__35589,opts){
var map__35590 = p__35589;
var map__35590__$1 = ((((!((map__35590 == null)))?((((map__35590.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35590.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35590):map__35590);
var eval_body = cljs.core.get.call(null,map__35590__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__35590__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__28311__auto__ = eval_body;
if(cljs.core.truth_(and__28311__auto__)){
return typeof eval_body === 'string';
} else {
return and__28311__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e35592){var e = e35592;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__35593_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35593_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__35594){
var vec__35595 = p__35594;
var k = cljs.core.nth.call(null,vec__35595,(0),null);
var v = cljs.core.nth.call(null,vec__35595,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__35598){
var vec__35599 = p__35598;
var k = cljs.core.nth.call(null,vec__35599,(0),null);
var v = cljs.core.nth.call(null,vec__35599,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__35605,p__35606){
var map__35607 = p__35605;
var map__35607__$1 = ((((!((map__35607 == null)))?((((map__35607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35607.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35607):map__35607);
var opts = map__35607__$1;
var before_jsload = cljs.core.get.call(null,map__35607__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__35607__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__35607__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__35608 = p__35606;
var map__35608__$1 = ((((!((map__35608 == null)))?((((map__35608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35608.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35608):map__35608);
var msg = map__35608__$1;
var files = cljs.core.get.call(null,map__35608__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__35608__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__35608__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__32090__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32090__auto__,map__35607,map__35607__$1,opts,before_jsload,on_jsload,reload_dependents,map__35608,map__35608__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__32091__auto__ = (function (){var switch__32002__auto__ = ((function (c__32090__auto__,map__35607,map__35607__$1,opts,before_jsload,on_jsload,reload_dependents,map__35608,map__35608__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_35762){
var state_val_35763 = (state_35762[(1)]);
if((state_val_35763 === (7))){
var inst_35625 = (state_35762[(7)]);
var inst_35624 = (state_35762[(8)]);
var inst_35623 = (state_35762[(9)]);
var inst_35622 = (state_35762[(10)]);
var inst_35630 = cljs.core._nth.call(null,inst_35623,inst_35625);
var inst_35631 = figwheel.client.file_reloading.eval_body.call(null,inst_35630,opts);
var inst_35632 = (inst_35625 + (1));
var tmp35764 = inst_35624;
var tmp35765 = inst_35623;
var tmp35766 = inst_35622;
var inst_35622__$1 = tmp35766;
var inst_35623__$1 = tmp35765;
var inst_35624__$1 = tmp35764;
var inst_35625__$1 = inst_35632;
var state_35762__$1 = (function (){var statearr_35767 = state_35762;
(statearr_35767[(7)] = inst_35625__$1);

(statearr_35767[(11)] = inst_35631);

(statearr_35767[(8)] = inst_35624__$1);

(statearr_35767[(9)] = inst_35623__$1);

(statearr_35767[(10)] = inst_35622__$1);

return statearr_35767;
})();
var statearr_35768_35851 = state_35762__$1;
(statearr_35768_35851[(2)] = null);

(statearr_35768_35851[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (20))){
var inst_35665 = (state_35762[(12)]);
var inst_35673 = figwheel.client.file_reloading.sort_files.call(null,inst_35665);
var state_35762__$1 = state_35762;
var statearr_35769_35852 = state_35762__$1;
(statearr_35769_35852[(2)] = inst_35673);

(statearr_35769_35852[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (27))){
var state_35762__$1 = state_35762;
var statearr_35770_35853 = state_35762__$1;
(statearr_35770_35853[(2)] = null);

(statearr_35770_35853[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (1))){
var inst_35614 = (state_35762[(13)]);
var inst_35611 = before_jsload.call(null,files);
var inst_35612 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_35613 = (function (){return ((function (inst_35614,inst_35611,inst_35612,state_val_35763,c__32090__auto__,map__35607,map__35607__$1,opts,before_jsload,on_jsload,reload_dependents,map__35608,map__35608__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35602_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35602_SHARP_);
});
;})(inst_35614,inst_35611,inst_35612,state_val_35763,c__32090__auto__,map__35607,map__35607__$1,opts,before_jsload,on_jsload,reload_dependents,map__35608,map__35608__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35614__$1 = cljs.core.filter.call(null,inst_35613,files);
var inst_35615 = cljs.core.not_empty.call(null,inst_35614__$1);
var state_35762__$1 = (function (){var statearr_35771 = state_35762;
(statearr_35771[(14)] = inst_35612);

(statearr_35771[(13)] = inst_35614__$1);

(statearr_35771[(15)] = inst_35611);

return statearr_35771;
})();
if(cljs.core.truth_(inst_35615)){
var statearr_35772_35854 = state_35762__$1;
(statearr_35772_35854[(1)] = (2));

} else {
var statearr_35773_35855 = state_35762__$1;
(statearr_35773_35855[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (24))){
var state_35762__$1 = state_35762;
var statearr_35774_35856 = state_35762__$1;
(statearr_35774_35856[(2)] = null);

(statearr_35774_35856[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (39))){
var inst_35715 = (state_35762[(16)]);
var state_35762__$1 = state_35762;
var statearr_35775_35857 = state_35762__$1;
(statearr_35775_35857[(2)] = inst_35715);

(statearr_35775_35857[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (46))){
var inst_35757 = (state_35762[(2)]);
var state_35762__$1 = state_35762;
var statearr_35776_35858 = state_35762__$1;
(statearr_35776_35858[(2)] = inst_35757);

(statearr_35776_35858[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (4))){
var inst_35659 = (state_35762[(2)]);
var inst_35660 = cljs.core.List.EMPTY;
var inst_35661 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_35660);
var inst_35662 = (function (){return ((function (inst_35659,inst_35660,inst_35661,state_val_35763,c__32090__auto__,map__35607,map__35607__$1,opts,before_jsload,on_jsload,reload_dependents,map__35608,map__35608__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35603_SHARP_){
var and__28311__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35603_SHARP_);
if(cljs.core.truth_(and__28311__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35603_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__35603_SHARP_)));
} else {
return and__28311__auto__;
}
});
;})(inst_35659,inst_35660,inst_35661,state_val_35763,c__32090__auto__,map__35607,map__35607__$1,opts,before_jsload,on_jsload,reload_dependents,map__35608,map__35608__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35663 = cljs.core.filter.call(null,inst_35662,files);
var inst_35664 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_35665 = cljs.core.concat.call(null,inst_35663,inst_35664);
var state_35762__$1 = (function (){var statearr_35777 = state_35762;
(statearr_35777[(17)] = inst_35659);

(statearr_35777[(18)] = inst_35661);

(statearr_35777[(12)] = inst_35665);

return statearr_35777;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_35778_35859 = state_35762__$1;
(statearr_35778_35859[(1)] = (16));

} else {
var statearr_35779_35860 = state_35762__$1;
(statearr_35779_35860[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (15))){
var inst_35649 = (state_35762[(2)]);
var state_35762__$1 = state_35762;
var statearr_35780_35861 = state_35762__$1;
(statearr_35780_35861[(2)] = inst_35649);

(statearr_35780_35861[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (21))){
var inst_35675 = (state_35762[(19)]);
var inst_35675__$1 = (state_35762[(2)]);
var inst_35676 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_35675__$1);
var state_35762__$1 = (function (){var statearr_35781 = state_35762;
(statearr_35781[(19)] = inst_35675__$1);

return statearr_35781;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35762__$1,(22),inst_35676);
} else {
if((state_val_35763 === (31))){
var inst_35760 = (state_35762[(2)]);
var state_35762__$1 = state_35762;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35762__$1,inst_35760);
} else {
if((state_val_35763 === (32))){
var inst_35715 = (state_35762[(16)]);
var inst_35720 = inst_35715.cljs$lang$protocol_mask$partition0$;
var inst_35721 = (inst_35720 & (64));
var inst_35722 = inst_35715.cljs$core$ISeq$;
var inst_35723 = (cljs.core.PROTOCOL_SENTINEL === inst_35722);
var inst_35724 = (inst_35721) || (inst_35723);
var state_35762__$1 = state_35762;
if(cljs.core.truth_(inst_35724)){
var statearr_35782_35862 = state_35762__$1;
(statearr_35782_35862[(1)] = (35));

} else {
var statearr_35783_35863 = state_35762__$1;
(statearr_35783_35863[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (40))){
var inst_35737 = (state_35762[(20)]);
var inst_35736 = (state_35762[(2)]);
var inst_35737__$1 = cljs.core.get.call(null,inst_35736,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_35738 = cljs.core.get.call(null,inst_35736,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_35739 = cljs.core.not_empty.call(null,inst_35737__$1);
var state_35762__$1 = (function (){var statearr_35784 = state_35762;
(statearr_35784[(20)] = inst_35737__$1);

(statearr_35784[(21)] = inst_35738);

return statearr_35784;
})();
if(cljs.core.truth_(inst_35739)){
var statearr_35785_35864 = state_35762__$1;
(statearr_35785_35864[(1)] = (41));

} else {
var statearr_35786_35865 = state_35762__$1;
(statearr_35786_35865[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (33))){
var state_35762__$1 = state_35762;
var statearr_35787_35866 = state_35762__$1;
(statearr_35787_35866[(2)] = false);

(statearr_35787_35866[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (13))){
var inst_35635 = (state_35762[(22)]);
var inst_35639 = cljs.core.chunk_first.call(null,inst_35635);
var inst_35640 = cljs.core.chunk_rest.call(null,inst_35635);
var inst_35641 = cljs.core.count.call(null,inst_35639);
var inst_35622 = inst_35640;
var inst_35623 = inst_35639;
var inst_35624 = inst_35641;
var inst_35625 = (0);
var state_35762__$1 = (function (){var statearr_35788 = state_35762;
(statearr_35788[(7)] = inst_35625);

(statearr_35788[(8)] = inst_35624);

(statearr_35788[(9)] = inst_35623);

(statearr_35788[(10)] = inst_35622);

return statearr_35788;
})();
var statearr_35789_35867 = state_35762__$1;
(statearr_35789_35867[(2)] = null);

(statearr_35789_35867[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (22))){
var inst_35679 = (state_35762[(23)]);
var inst_35683 = (state_35762[(24)]);
var inst_35678 = (state_35762[(25)]);
var inst_35675 = (state_35762[(19)]);
var inst_35678__$1 = (state_35762[(2)]);
var inst_35679__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35678__$1);
var inst_35680 = (function (){var all_files = inst_35675;
var res_SINGLEQUOTE_ = inst_35678__$1;
var res = inst_35679__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_35679,inst_35683,inst_35678,inst_35675,inst_35678__$1,inst_35679__$1,state_val_35763,c__32090__auto__,map__35607,map__35607__$1,opts,before_jsload,on_jsload,reload_dependents,map__35608,map__35608__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__35604_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__35604_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_35679,inst_35683,inst_35678,inst_35675,inst_35678__$1,inst_35679__$1,state_val_35763,c__32090__auto__,map__35607,map__35607__$1,opts,before_jsload,on_jsload,reload_dependents,map__35608,map__35608__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35681 = cljs.core.filter.call(null,inst_35680,inst_35678__$1);
var inst_35682 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_35683__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35682);
var inst_35684 = cljs.core.not_empty.call(null,inst_35683__$1);
var state_35762__$1 = (function (){var statearr_35790 = state_35762;
(statearr_35790[(23)] = inst_35679__$1);

(statearr_35790[(24)] = inst_35683__$1);

(statearr_35790[(25)] = inst_35678__$1);

(statearr_35790[(26)] = inst_35681);

return statearr_35790;
})();
if(cljs.core.truth_(inst_35684)){
var statearr_35791_35868 = state_35762__$1;
(statearr_35791_35868[(1)] = (23));

} else {
var statearr_35792_35869 = state_35762__$1;
(statearr_35792_35869[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (36))){
var state_35762__$1 = state_35762;
var statearr_35793_35870 = state_35762__$1;
(statearr_35793_35870[(2)] = false);

(statearr_35793_35870[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (41))){
var inst_35737 = (state_35762[(20)]);
var inst_35741 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_35742 = cljs.core.map.call(null,inst_35741,inst_35737);
var inst_35743 = cljs.core.pr_str.call(null,inst_35742);
var inst_35744 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35743)].join('');
var inst_35745 = figwheel.client.utils.log.call(null,inst_35744);
var state_35762__$1 = state_35762;
var statearr_35794_35871 = state_35762__$1;
(statearr_35794_35871[(2)] = inst_35745);

(statearr_35794_35871[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (43))){
var inst_35738 = (state_35762[(21)]);
var inst_35748 = (state_35762[(2)]);
var inst_35749 = cljs.core.not_empty.call(null,inst_35738);
var state_35762__$1 = (function (){var statearr_35795 = state_35762;
(statearr_35795[(27)] = inst_35748);

return statearr_35795;
})();
if(cljs.core.truth_(inst_35749)){
var statearr_35796_35872 = state_35762__$1;
(statearr_35796_35872[(1)] = (44));

} else {
var statearr_35797_35873 = state_35762__$1;
(statearr_35797_35873[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (29))){
var inst_35679 = (state_35762[(23)]);
var inst_35683 = (state_35762[(24)]);
var inst_35678 = (state_35762[(25)]);
var inst_35715 = (state_35762[(16)]);
var inst_35675 = (state_35762[(19)]);
var inst_35681 = (state_35762[(26)]);
var inst_35711 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_35714 = (function (){var all_files = inst_35675;
var res_SINGLEQUOTE_ = inst_35678;
var res = inst_35679;
var files_not_loaded = inst_35681;
var dependencies_that_loaded = inst_35683;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35679,inst_35683,inst_35678,inst_35715,inst_35675,inst_35681,inst_35711,state_val_35763,c__32090__auto__,map__35607,map__35607__$1,opts,before_jsload,on_jsload,reload_dependents,map__35608,map__35608__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35713){
var map__35798 = p__35713;
var map__35798__$1 = ((((!((map__35798 == null)))?((((map__35798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35798.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35798):map__35798);
var namespace = cljs.core.get.call(null,map__35798__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35679,inst_35683,inst_35678,inst_35715,inst_35675,inst_35681,inst_35711,state_val_35763,c__32090__auto__,map__35607,map__35607__$1,opts,before_jsload,on_jsload,reload_dependents,map__35608,map__35608__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35715__$1 = cljs.core.group_by.call(null,inst_35714,inst_35681);
var inst_35717 = (inst_35715__$1 == null);
var inst_35718 = cljs.core.not.call(null,inst_35717);
var state_35762__$1 = (function (){var statearr_35800 = state_35762;
(statearr_35800[(28)] = inst_35711);

(statearr_35800[(16)] = inst_35715__$1);

return statearr_35800;
})();
if(inst_35718){
var statearr_35801_35874 = state_35762__$1;
(statearr_35801_35874[(1)] = (32));

} else {
var statearr_35802_35875 = state_35762__$1;
(statearr_35802_35875[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (44))){
var inst_35738 = (state_35762[(21)]);
var inst_35751 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35738);
var inst_35752 = cljs.core.pr_str.call(null,inst_35751);
var inst_35753 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35752)].join('');
var inst_35754 = figwheel.client.utils.log.call(null,inst_35753);
var state_35762__$1 = state_35762;
var statearr_35803_35876 = state_35762__$1;
(statearr_35803_35876[(2)] = inst_35754);

(statearr_35803_35876[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (6))){
var inst_35656 = (state_35762[(2)]);
var state_35762__$1 = state_35762;
var statearr_35804_35877 = state_35762__$1;
(statearr_35804_35877[(2)] = inst_35656);

(statearr_35804_35877[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (28))){
var inst_35681 = (state_35762[(26)]);
var inst_35708 = (state_35762[(2)]);
var inst_35709 = cljs.core.not_empty.call(null,inst_35681);
var state_35762__$1 = (function (){var statearr_35805 = state_35762;
(statearr_35805[(29)] = inst_35708);

return statearr_35805;
})();
if(cljs.core.truth_(inst_35709)){
var statearr_35806_35878 = state_35762__$1;
(statearr_35806_35878[(1)] = (29));

} else {
var statearr_35807_35879 = state_35762__$1;
(statearr_35807_35879[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (25))){
var inst_35679 = (state_35762[(23)]);
var inst_35695 = (state_35762[(2)]);
var inst_35696 = cljs.core.not_empty.call(null,inst_35679);
var state_35762__$1 = (function (){var statearr_35808 = state_35762;
(statearr_35808[(30)] = inst_35695);

return statearr_35808;
})();
if(cljs.core.truth_(inst_35696)){
var statearr_35809_35880 = state_35762__$1;
(statearr_35809_35880[(1)] = (26));

} else {
var statearr_35810_35881 = state_35762__$1;
(statearr_35810_35881[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (34))){
var inst_35731 = (state_35762[(2)]);
var state_35762__$1 = state_35762;
if(cljs.core.truth_(inst_35731)){
var statearr_35811_35882 = state_35762__$1;
(statearr_35811_35882[(1)] = (38));

} else {
var statearr_35812_35883 = state_35762__$1;
(statearr_35812_35883[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (17))){
var state_35762__$1 = state_35762;
var statearr_35813_35884 = state_35762__$1;
(statearr_35813_35884[(2)] = recompile_dependents);

(statearr_35813_35884[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (3))){
var state_35762__$1 = state_35762;
var statearr_35814_35885 = state_35762__$1;
(statearr_35814_35885[(2)] = null);

(statearr_35814_35885[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (12))){
var inst_35652 = (state_35762[(2)]);
var state_35762__$1 = state_35762;
var statearr_35815_35886 = state_35762__$1;
(statearr_35815_35886[(2)] = inst_35652);

(statearr_35815_35886[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (2))){
var inst_35614 = (state_35762[(13)]);
var inst_35621 = cljs.core.seq.call(null,inst_35614);
var inst_35622 = inst_35621;
var inst_35623 = null;
var inst_35624 = (0);
var inst_35625 = (0);
var state_35762__$1 = (function (){var statearr_35816 = state_35762;
(statearr_35816[(7)] = inst_35625);

(statearr_35816[(8)] = inst_35624);

(statearr_35816[(9)] = inst_35623);

(statearr_35816[(10)] = inst_35622);

return statearr_35816;
})();
var statearr_35817_35887 = state_35762__$1;
(statearr_35817_35887[(2)] = null);

(statearr_35817_35887[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (23))){
var inst_35679 = (state_35762[(23)]);
var inst_35683 = (state_35762[(24)]);
var inst_35678 = (state_35762[(25)]);
var inst_35675 = (state_35762[(19)]);
var inst_35681 = (state_35762[(26)]);
var inst_35686 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_35688 = (function (){var all_files = inst_35675;
var res_SINGLEQUOTE_ = inst_35678;
var res = inst_35679;
var files_not_loaded = inst_35681;
var dependencies_that_loaded = inst_35683;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35679,inst_35683,inst_35678,inst_35675,inst_35681,inst_35686,state_val_35763,c__32090__auto__,map__35607,map__35607__$1,opts,before_jsload,on_jsload,reload_dependents,map__35608,map__35608__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35687){
var map__35818 = p__35687;
var map__35818__$1 = ((((!((map__35818 == null)))?((((map__35818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35818.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35818):map__35818);
var request_url = cljs.core.get.call(null,map__35818__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35679,inst_35683,inst_35678,inst_35675,inst_35681,inst_35686,state_val_35763,c__32090__auto__,map__35607,map__35607__$1,opts,before_jsload,on_jsload,reload_dependents,map__35608,map__35608__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35689 = cljs.core.reverse.call(null,inst_35683);
var inst_35690 = cljs.core.map.call(null,inst_35688,inst_35689);
var inst_35691 = cljs.core.pr_str.call(null,inst_35690);
var inst_35692 = figwheel.client.utils.log.call(null,inst_35691);
var state_35762__$1 = (function (){var statearr_35820 = state_35762;
(statearr_35820[(31)] = inst_35686);

return statearr_35820;
})();
var statearr_35821_35888 = state_35762__$1;
(statearr_35821_35888[(2)] = inst_35692);

(statearr_35821_35888[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (35))){
var state_35762__$1 = state_35762;
var statearr_35822_35889 = state_35762__$1;
(statearr_35822_35889[(2)] = true);

(statearr_35822_35889[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (19))){
var inst_35665 = (state_35762[(12)]);
var inst_35671 = figwheel.client.file_reloading.expand_files.call(null,inst_35665);
var state_35762__$1 = state_35762;
var statearr_35823_35890 = state_35762__$1;
(statearr_35823_35890[(2)] = inst_35671);

(statearr_35823_35890[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (11))){
var state_35762__$1 = state_35762;
var statearr_35824_35891 = state_35762__$1;
(statearr_35824_35891[(2)] = null);

(statearr_35824_35891[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (9))){
var inst_35654 = (state_35762[(2)]);
var state_35762__$1 = state_35762;
var statearr_35825_35892 = state_35762__$1;
(statearr_35825_35892[(2)] = inst_35654);

(statearr_35825_35892[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (5))){
var inst_35625 = (state_35762[(7)]);
var inst_35624 = (state_35762[(8)]);
var inst_35627 = (inst_35625 < inst_35624);
var inst_35628 = inst_35627;
var state_35762__$1 = state_35762;
if(cljs.core.truth_(inst_35628)){
var statearr_35826_35893 = state_35762__$1;
(statearr_35826_35893[(1)] = (7));

} else {
var statearr_35827_35894 = state_35762__$1;
(statearr_35827_35894[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (14))){
var inst_35635 = (state_35762[(22)]);
var inst_35644 = cljs.core.first.call(null,inst_35635);
var inst_35645 = figwheel.client.file_reloading.eval_body.call(null,inst_35644,opts);
var inst_35646 = cljs.core.next.call(null,inst_35635);
var inst_35622 = inst_35646;
var inst_35623 = null;
var inst_35624 = (0);
var inst_35625 = (0);
var state_35762__$1 = (function (){var statearr_35828 = state_35762;
(statearr_35828[(7)] = inst_35625);

(statearr_35828[(32)] = inst_35645);

(statearr_35828[(8)] = inst_35624);

(statearr_35828[(9)] = inst_35623);

(statearr_35828[(10)] = inst_35622);

return statearr_35828;
})();
var statearr_35829_35895 = state_35762__$1;
(statearr_35829_35895[(2)] = null);

(statearr_35829_35895[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (45))){
var state_35762__$1 = state_35762;
var statearr_35830_35896 = state_35762__$1;
(statearr_35830_35896[(2)] = null);

(statearr_35830_35896[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (26))){
var inst_35679 = (state_35762[(23)]);
var inst_35683 = (state_35762[(24)]);
var inst_35678 = (state_35762[(25)]);
var inst_35675 = (state_35762[(19)]);
var inst_35681 = (state_35762[(26)]);
var inst_35698 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_35700 = (function (){var all_files = inst_35675;
var res_SINGLEQUOTE_ = inst_35678;
var res = inst_35679;
var files_not_loaded = inst_35681;
var dependencies_that_loaded = inst_35683;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35679,inst_35683,inst_35678,inst_35675,inst_35681,inst_35698,state_val_35763,c__32090__auto__,map__35607,map__35607__$1,opts,before_jsload,on_jsload,reload_dependents,map__35608,map__35608__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35699){
var map__35831 = p__35699;
var map__35831__$1 = ((((!((map__35831 == null)))?((((map__35831.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35831.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35831):map__35831);
var namespace = cljs.core.get.call(null,map__35831__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__35831__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35679,inst_35683,inst_35678,inst_35675,inst_35681,inst_35698,state_val_35763,c__32090__auto__,map__35607,map__35607__$1,opts,before_jsload,on_jsload,reload_dependents,map__35608,map__35608__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35701 = cljs.core.map.call(null,inst_35700,inst_35679);
var inst_35702 = cljs.core.pr_str.call(null,inst_35701);
var inst_35703 = figwheel.client.utils.log.call(null,inst_35702);
var inst_35704 = (function (){var all_files = inst_35675;
var res_SINGLEQUOTE_ = inst_35678;
var res = inst_35679;
var files_not_loaded = inst_35681;
var dependencies_that_loaded = inst_35683;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35679,inst_35683,inst_35678,inst_35675,inst_35681,inst_35698,inst_35700,inst_35701,inst_35702,inst_35703,state_val_35763,c__32090__auto__,map__35607,map__35607__$1,opts,before_jsload,on_jsload,reload_dependents,map__35608,map__35608__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35679,inst_35683,inst_35678,inst_35675,inst_35681,inst_35698,inst_35700,inst_35701,inst_35702,inst_35703,state_val_35763,c__32090__auto__,map__35607,map__35607__$1,opts,before_jsload,on_jsload,reload_dependents,map__35608,map__35608__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35705 = setTimeout(inst_35704,(10));
var state_35762__$1 = (function (){var statearr_35833 = state_35762;
(statearr_35833[(33)] = inst_35703);

(statearr_35833[(34)] = inst_35698);

return statearr_35833;
})();
var statearr_35834_35897 = state_35762__$1;
(statearr_35834_35897[(2)] = inst_35705);

(statearr_35834_35897[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (16))){
var state_35762__$1 = state_35762;
var statearr_35835_35898 = state_35762__$1;
(statearr_35835_35898[(2)] = reload_dependents);

(statearr_35835_35898[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (38))){
var inst_35715 = (state_35762[(16)]);
var inst_35733 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35715);
var state_35762__$1 = state_35762;
var statearr_35836_35899 = state_35762__$1;
(statearr_35836_35899[(2)] = inst_35733);

(statearr_35836_35899[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (30))){
var state_35762__$1 = state_35762;
var statearr_35837_35900 = state_35762__$1;
(statearr_35837_35900[(2)] = null);

(statearr_35837_35900[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (10))){
var inst_35635 = (state_35762[(22)]);
var inst_35637 = cljs.core.chunked_seq_QMARK_.call(null,inst_35635);
var state_35762__$1 = state_35762;
if(inst_35637){
var statearr_35838_35901 = state_35762__$1;
(statearr_35838_35901[(1)] = (13));

} else {
var statearr_35839_35902 = state_35762__$1;
(statearr_35839_35902[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (18))){
var inst_35669 = (state_35762[(2)]);
var state_35762__$1 = state_35762;
if(cljs.core.truth_(inst_35669)){
var statearr_35840_35903 = state_35762__$1;
(statearr_35840_35903[(1)] = (19));

} else {
var statearr_35841_35904 = state_35762__$1;
(statearr_35841_35904[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (42))){
var state_35762__$1 = state_35762;
var statearr_35842_35905 = state_35762__$1;
(statearr_35842_35905[(2)] = null);

(statearr_35842_35905[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (37))){
var inst_35728 = (state_35762[(2)]);
var state_35762__$1 = state_35762;
var statearr_35843_35906 = state_35762__$1;
(statearr_35843_35906[(2)] = inst_35728);

(statearr_35843_35906[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35763 === (8))){
var inst_35635 = (state_35762[(22)]);
var inst_35622 = (state_35762[(10)]);
var inst_35635__$1 = cljs.core.seq.call(null,inst_35622);
var state_35762__$1 = (function (){var statearr_35844 = state_35762;
(statearr_35844[(22)] = inst_35635__$1);

return statearr_35844;
})();
if(inst_35635__$1){
var statearr_35845_35907 = state_35762__$1;
(statearr_35845_35907[(1)] = (10));

} else {
var statearr_35846_35908 = state_35762__$1;
(statearr_35846_35908[(1)] = (11));

}

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
});})(c__32090__auto__,map__35607,map__35607__$1,opts,before_jsload,on_jsload,reload_dependents,map__35608,map__35608__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__32002__auto__,c__32090__auto__,map__35607,map__35607__$1,opts,before_jsload,on_jsload,reload_dependents,map__35608,map__35608__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32003__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32003__auto____0 = (function (){
var statearr_35847 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35847[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__32003__auto__);

(statearr_35847[(1)] = (1));

return statearr_35847;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32003__auto____1 = (function (state_35762){
while(true){
var ret_value__32004__auto__ = (function (){try{while(true){
var result__32005__auto__ = switch__32002__auto__.call(null,state_35762);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32005__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32005__auto__;
}
break;
}
}catch (e35848){if((e35848 instanceof Object)){
var ex__32006__auto__ = e35848;
var statearr_35849_35909 = state_35762;
(statearr_35849_35909[(5)] = ex__32006__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35762);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35848;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32004__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35910 = state_35762;
state_35762 = G__35910;
continue;
} else {
return ret_value__32004__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__32003__auto__ = function(state_35762){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32003__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32003__auto____1.call(this,state_35762);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__32003__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__32003__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__32003__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__32003__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32003__auto__;
})()
;})(switch__32002__auto__,c__32090__auto__,map__35607,map__35607__$1,opts,before_jsload,on_jsload,reload_dependents,map__35608,map__35608__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__32092__auto__ = (function (){var statearr_35850 = f__32091__auto__.call(null);
(statearr_35850[(6)] = c__32090__auto__);

return statearr_35850;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32092__auto__);
});})(c__32090__auto__,map__35607,map__35607__$1,opts,before_jsload,on_jsload,reload_dependents,map__35608,map__35608__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__32090__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__35913,link){
var map__35914 = p__35913;
var map__35914__$1 = ((((!((map__35914 == null)))?((((map__35914.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35914.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35914):map__35914);
var file = cljs.core.get.call(null,map__35914__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__35914,map__35914__$1,file){
return (function (p1__35911_SHARP_,p2__35912_SHARP_){
if(cljs.core._EQ_.call(null,p1__35911_SHARP_,p2__35912_SHARP_)){
return p1__35911_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__35914,map__35914__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__35917){
var map__35918 = p__35917;
var map__35918__$1 = ((((!((map__35918 == null)))?((((map__35918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35918.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35918):map__35918);
var match_length = cljs.core.get.call(null,map__35918__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__35918__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__35916_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__35916_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__35920_SHARP_,p2__35921_SHARP_){
return cljs.core.assoc.call(null,p1__35920_SHARP_,cljs.core.get.call(null,p2__35921_SHARP_,key),p2__35921_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_35922 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_35922);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_35922);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__35923,p__35924){
var map__35925 = p__35923;
var map__35925__$1 = ((((!((map__35925 == null)))?((((map__35925.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35925.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35925):map__35925);
var on_cssload = cljs.core.get.call(null,map__35925__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__35926 = p__35924;
var map__35926__$1 = ((((!((map__35926 == null)))?((((map__35926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35926.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35926):map__35926);
var files_msg = map__35926__$1;
var files = cljs.core.get.call(null,map__35926__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1544388305604
