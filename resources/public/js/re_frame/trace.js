// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.call(null,(0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_.call(null,re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if(typeof re_frame.trace.traces !== 'undefined'){
} else {
re_frame.trace.traces = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if(typeof re_frame.trace.next_delivery !== 'undefined'){
} else {
re_frame.trace.next_delivery = cljs.core.atom.call(null,(0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(cljs.core.truth_(re_frame.trace.trace_enabled_QMARK_)){
return cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-trace#installation.");
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.call(null,re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__30828){
var map__30829 = p__30828;
var map__30829__$1 = ((((!((map__30829 == null)))?((((map__30829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30829.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30829):map__30829);
var operation = cljs.core.get.call(null,map__30829__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__30829__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__30829__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__30829__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__28323__auto__ = child_of;
if(cljs.core.truth_(or__28323__auto__)){
return or__28323__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now.call(null)], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce.call(null,(function re_frame$trace$tracing_cb_debounced(){
var seq__30831_30843 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__30832_30844 = null;
var count__30833_30845 = (0);
var i__30834_30846 = (0);
while(true){
if((i__30834_30846 < count__30833_30845)){
var vec__30835_30847 = cljs.core._nth.call(null,chunk__30832_30844,i__30834_30846);
var k_30848 = cljs.core.nth.call(null,vec__30835_30847,(0),null);
var cb_30849 = cljs.core.nth.call(null,vec__30835_30847,(1),null);
try{cb_30849.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e30838){var e_30850 = e30838;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_30848,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_30850);
}
var G__30851 = seq__30831_30843;
var G__30852 = chunk__30832_30844;
var G__30853 = count__30833_30845;
var G__30854 = (i__30834_30846 + (1));
seq__30831_30843 = G__30851;
chunk__30832_30844 = G__30852;
count__30833_30845 = G__30853;
i__30834_30846 = G__30854;
continue;
} else {
var temp__4657__auto___30855 = cljs.core.seq.call(null,seq__30831_30843);
if(temp__4657__auto___30855){
var seq__30831_30856__$1 = temp__4657__auto___30855;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30831_30856__$1)){
var c__29162__auto___30857 = cljs.core.chunk_first.call(null,seq__30831_30856__$1);
var G__30858 = cljs.core.chunk_rest.call(null,seq__30831_30856__$1);
var G__30859 = c__29162__auto___30857;
var G__30860 = cljs.core.count.call(null,c__29162__auto___30857);
var G__30861 = (0);
seq__30831_30843 = G__30858;
chunk__30832_30844 = G__30859;
count__30833_30845 = G__30860;
i__30834_30846 = G__30861;
continue;
} else {
var vec__30839_30862 = cljs.core.first.call(null,seq__30831_30856__$1);
var k_30863 = cljs.core.nth.call(null,vec__30839_30862,(0),null);
var cb_30864 = cljs.core.nth.call(null,vec__30839_30862,(1),null);
try{cb_30864.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e30842){var e_30865 = e30842;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_30863,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_30865);
}
var G__30866 = cljs.core.next.call(null,seq__30831_30856__$1);
var G__30867 = null;
var G__30868 = (0);
var G__30869 = (0);
seq__30831_30843 = G__30866;
chunk__30832_30844 = G__30867;
count__30833_30845 = G__30868;
i__30834_30846 = G__30869;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref.call(null,re_frame.trace.next_delivery) - (10)) < now)){
re_frame.trace.schedule_debounce.call(null);

return cljs.core.reset_BANG_.call(null,re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=trace.js.map?rel=1544388301223
