// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_37532 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));

try{try{var seq__37533 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__37534 = null;
var count__37535 = (0);
var i__37536 = (0);
while(true){
if((i__37536 < count__37535)){
var vec__37537 = cljs.core._nth.call(null,chunk__37534,i__37536);
var effect_key = cljs.core.nth.call(null,vec__37537,(0),null);
var effect_value = cljs.core.nth.call(null,vec__37537,(1),null);
var temp__4655__auto___37553 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___37553)){
var effect_fn_37554 = temp__4655__auto___37553;
effect_fn_37554.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}

var G__37555 = seq__37533;
var G__37556 = chunk__37534;
var G__37557 = count__37535;
var G__37558 = (i__37536 + (1));
seq__37533 = G__37555;
chunk__37534 = G__37556;
count__37535 = G__37557;
i__37536 = G__37558;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37533);
if(temp__4657__auto__){
var seq__37533__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37533__$1)){
var c__29162__auto__ = cljs.core.chunk_first.call(null,seq__37533__$1);
var G__37559 = cljs.core.chunk_rest.call(null,seq__37533__$1);
var G__37560 = c__29162__auto__;
var G__37561 = cljs.core.count.call(null,c__29162__auto__);
var G__37562 = (0);
seq__37533 = G__37559;
chunk__37534 = G__37560;
count__37535 = G__37561;
i__37536 = G__37562;
continue;
} else {
var vec__37540 = cljs.core.first.call(null,seq__37533__$1);
var effect_key = cljs.core.nth.call(null,vec__37540,(0),null);
var effect_value = cljs.core.nth.call(null,vec__37540,(1),null);
var temp__4655__auto___37563 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___37563)){
var effect_fn_37564 = temp__4655__auto___37563;
effect_fn_37564.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}

var G__37565 = cljs.core.next.call(null,seq__37533__$1);
var G__37566 = null;
var G__37567 = (0);
var G__37568 = (0);
seq__37533 = G__37565;
chunk__37534 = G__37566;
count__37535 = G__37567;
i__37536 = G__37568;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__30806__auto___37569 = re_frame.interop.now.call(null);
var duration__30807__auto___37570 = (end__30806__auto___37569 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__30807__auto___37570,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__30806__auto___37569);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_37532;
}} else {
var seq__37543 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__37544 = null;
var count__37545 = (0);
var i__37546 = (0);
while(true){
if((i__37546 < count__37545)){
var vec__37547 = cljs.core._nth.call(null,chunk__37544,i__37546);
var effect_key = cljs.core.nth.call(null,vec__37547,(0),null);
var effect_value = cljs.core.nth.call(null,vec__37547,(1),null);
var temp__4655__auto___37571 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___37571)){
var effect_fn_37572 = temp__4655__auto___37571;
effect_fn_37572.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}

var G__37573 = seq__37543;
var G__37574 = chunk__37544;
var G__37575 = count__37545;
var G__37576 = (i__37546 + (1));
seq__37543 = G__37573;
chunk__37544 = G__37574;
count__37545 = G__37575;
i__37546 = G__37576;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37543);
if(temp__4657__auto__){
var seq__37543__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37543__$1)){
var c__29162__auto__ = cljs.core.chunk_first.call(null,seq__37543__$1);
var G__37577 = cljs.core.chunk_rest.call(null,seq__37543__$1);
var G__37578 = c__29162__auto__;
var G__37579 = cljs.core.count.call(null,c__29162__auto__);
var G__37580 = (0);
seq__37543 = G__37577;
chunk__37544 = G__37578;
count__37545 = G__37579;
i__37546 = G__37580;
continue;
} else {
var vec__37550 = cljs.core.first.call(null,seq__37543__$1);
var effect_key = cljs.core.nth.call(null,vec__37550,(0),null);
var effect_value = cljs.core.nth.call(null,vec__37550,(1),null);
var temp__4655__auto___37581 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___37581)){
var effect_fn_37582 = temp__4655__auto___37581;
effect_fn_37582.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}

var G__37583 = cljs.core.next.call(null,seq__37543__$1);
var G__37584 = null;
var G__37585 = (0);
var G__37586 = (0);
seq__37543 = G__37583;
chunk__37544 = G__37584;
count__37545 = G__37585;
i__37546 = G__37586;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__37587 = cljs.core.seq.call(null,value);
var chunk__37588 = null;
var count__37589 = (0);
var i__37590 = (0);
while(true){
if((i__37590 < count__37589)){
var map__37591 = cljs.core._nth.call(null,chunk__37588,i__37590);
var map__37591__$1 = ((((!((map__37591 == null)))?((((map__37591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37591.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37591):map__37591);
var effect = map__37591__$1;
var ms = cljs.core.get.call(null,map__37591__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__37591__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__37587,chunk__37588,count__37589,i__37590,map__37591,map__37591__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__37587,chunk__37588,count__37589,i__37590,map__37591,map__37591__$1,effect,ms,dispatch))
,ms);
}

var G__37595 = seq__37587;
var G__37596 = chunk__37588;
var G__37597 = count__37589;
var G__37598 = (i__37590 + (1));
seq__37587 = G__37595;
chunk__37588 = G__37596;
count__37589 = G__37597;
i__37590 = G__37598;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37587);
if(temp__4657__auto__){
var seq__37587__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37587__$1)){
var c__29162__auto__ = cljs.core.chunk_first.call(null,seq__37587__$1);
var G__37599 = cljs.core.chunk_rest.call(null,seq__37587__$1);
var G__37600 = c__29162__auto__;
var G__37601 = cljs.core.count.call(null,c__29162__auto__);
var G__37602 = (0);
seq__37587 = G__37599;
chunk__37588 = G__37600;
count__37589 = G__37601;
i__37590 = G__37602;
continue;
} else {
var map__37593 = cljs.core.first.call(null,seq__37587__$1);
var map__37593__$1 = ((((!((map__37593 == null)))?((((map__37593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37593.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37593):map__37593);
var effect = map__37593__$1;
var ms = cljs.core.get.call(null,map__37593__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__37593__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__37587,chunk__37588,count__37589,i__37590,map__37593,map__37593__$1,effect,ms,dispatch,seq__37587__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__37587,chunk__37588,count__37589,i__37590,map__37593,map__37593__$1,effect,ms,dispatch,seq__37587__$1,temp__4657__auto__))
,ms);
}

var G__37603 = cljs.core.next.call(null,seq__37587__$1);
var G__37604 = null;
var G__37605 = (0);
var G__37606 = (0);
seq__37587 = G__37603;
chunk__37588 = G__37604;
count__37589 = G__37605;
i__37590 = G__37606;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__37607 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__37608 = null;
var count__37609 = (0);
var i__37610 = (0);
while(true){
if((i__37610 < count__37609)){
var event = cljs.core._nth.call(null,chunk__37608,i__37610);
re_frame.router.dispatch.call(null,event);

var G__37611 = seq__37607;
var G__37612 = chunk__37608;
var G__37613 = count__37609;
var G__37614 = (i__37610 + (1));
seq__37607 = G__37611;
chunk__37608 = G__37612;
count__37609 = G__37613;
i__37610 = G__37614;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37607);
if(temp__4657__auto__){
var seq__37607__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37607__$1)){
var c__29162__auto__ = cljs.core.chunk_first.call(null,seq__37607__$1);
var G__37615 = cljs.core.chunk_rest.call(null,seq__37607__$1);
var G__37616 = c__29162__auto__;
var G__37617 = cljs.core.count.call(null,c__29162__auto__);
var G__37618 = (0);
seq__37607 = G__37615;
chunk__37608 = G__37616;
count__37609 = G__37617;
i__37610 = G__37618;
continue;
} else {
var event = cljs.core.first.call(null,seq__37607__$1);
re_frame.router.dispatch.call(null,event);

var G__37619 = cljs.core.next.call(null,seq__37607__$1);
var G__37620 = null;
var G__37621 = (0);
var G__37622 = (0);
seq__37607 = G__37619;
chunk__37608 = G__37620;
count__37609 = G__37621;
i__37610 = G__37622;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__37623 = cljs.core.seq.call(null,value);
var chunk__37624 = null;
var count__37625 = (0);
var i__37626 = (0);
while(true){
if((i__37626 < count__37625)){
var event = cljs.core._nth.call(null,chunk__37624,i__37626);
clear_event.call(null,event);

var G__37627 = seq__37623;
var G__37628 = chunk__37624;
var G__37629 = count__37625;
var G__37630 = (i__37626 + (1));
seq__37623 = G__37627;
chunk__37624 = G__37628;
count__37625 = G__37629;
i__37626 = G__37630;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37623);
if(temp__4657__auto__){
var seq__37623__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37623__$1)){
var c__29162__auto__ = cljs.core.chunk_first.call(null,seq__37623__$1);
var G__37631 = cljs.core.chunk_rest.call(null,seq__37623__$1);
var G__37632 = c__29162__auto__;
var G__37633 = cljs.core.count.call(null,c__29162__auto__);
var G__37634 = (0);
seq__37623 = G__37631;
chunk__37624 = G__37632;
count__37625 = G__37633;
i__37626 = G__37634;
continue;
} else {
var event = cljs.core.first.call(null,seq__37623__$1);
clear_event.call(null,event);

var G__37635 = cljs.core.next.call(null,seq__37623__$1);
var G__37636 = null;
var G__37637 = (0);
var G__37638 = (0);
seq__37623 = G__37635;
chunk__37624 = G__37636;
count__37625 = G__37637;
i__37626 = G__37638;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref.call(null,re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map?rel=1544388307796
