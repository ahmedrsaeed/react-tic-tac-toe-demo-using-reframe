// Compiled by ClojureScript 1.9.908 {}
goog.provide('simple.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('clojure.string');
simple.core.dispatch_timer_event = (function simple$core$dispatch_timer_event(){
var now = (new Date());
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timer","timer",-1266967739),now], null));
});
if(typeof simple.core.do_timer !== 'undefined'){
} else {
simple.core.do_timer = setInterval(simple.core.dispatch_timer_event,(1000));
}
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"time","time",1385887882),(new Date()),new cljs.core.Keyword(null,"time-color","time-color",-1916736551),"#f88",new cljs.core.Keyword(null,"cell-values","cell-values",-1251894661),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"mark","mark",-373816345),new cljs.core.Symbol(null,"X","X",-948439456,null),new cljs.core.Keyword(null,"other-mark","other-mark",618556055),new cljs.core.Symbol(null,"O","O",-1859183027,null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"time-color-change","time-color-change",-513896528),(function (db,p__34447){
var vec__34448 = p__34447;
var _ = cljs.core.nth.call(null,vec__34448,(0),null);
var new_color_value = cljs.core.nth.call(null,vec__34448,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"time-color","time-color",-1916736551),new_color_value);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"timer","timer",-1266967739),(function (db,p__34451){
var vec__34452 = p__34451;
var _ = cljs.core.nth.call(null,vec__34452,(0),null);
var new_time = cljs.core.nth.call(null,vec__34452,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"time","time",1385887882),new_time);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"mark","mark",-373816345),(function (db,p__34455){
var vec__34456 = p__34455;
var _ = cljs.core.nth.call(null,vec__34456,(0),null);
var index = cljs.core.nth.call(null,vec__34456,(1),null);
if(cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"cell-values","cell-values",-1251894661).cljs$core$IFn$_invoke$arity$1(db),index)){
return db;
} else {
return clojure.set.rename_keys.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cell-values","cell-values",-1251894661),index], null),new cljs.core.Keyword(null,"mark","mark",-373816345).cljs$core$IFn$_invoke$arity$1(db)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mark","mark",-373816345),new cljs.core.Keyword(null,"other-mark","other-mark",618556055),new cljs.core.Keyword(null,"other-mark","other-mark",618556055),new cljs.core.Keyword(null,"mark","mark",-373816345)], null));
}
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"time","time",1385887882),(function (db,_){
return new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"time-color","time-color",-1916736551),(function (db,_){
return new cljs.core.Keyword(null,"time-color","time-color",-1916736551).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"cell-values","cell-values",-1251894661),(function (db,_){
return new cljs.core.Keyword(null,"cell-values","cell-values",-1251894661).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"cell","cell",764245084),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cell-values","cell-values",-1251894661)], null),(function (cell_values,p__34459){
var vec__34460 = p__34459;
var _ = cljs.core.nth.call(null,vec__34460,(0),null);
var index = cljs.core.nth.call(null,vec__34460,(1),null);
return cljs.core.get.call(null,cell_values,index,"");
}));
simple.core.clock = (function simple$core$clock(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.example-clock","div.example-clock",1559289088),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time-color","time-color",-1916736551)], null)))], null)], null),cljs.core.first.call(null,clojure.string.split.call(null,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882)], null))).toTimeString()," "))], null);
});
simple.core.color_input = (function simple$core$color_input(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.color-input","div.color-input",-879914246),"Time color: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time-color","time-color",-1916736551)], null))),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__34463_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time-color-change","time-color-change",-513896528),p1__34463_SHARP_.target.value], null));
})], null)], null)], null);
});
simple.core.cell = (function simple$core$cell(index){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.square","button.square",-355523450),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mark","mark",-373816345),index], null));
})], null),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cell","cell",764245084),index], null)))], null);
});
simple.core.cell_row = (function simple$core$cell_row(row,columns){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.board-row","div.board-row",575328183),cljs.core.doall.call(null,(function (){var iter__29131__auto__ = (function simple$core$cell_row_$_iter__34464(s__34465){
return (new cljs.core.LazySeq(null,(function (){
var s__34465__$1 = s__34465;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__34465__$1);
if(temp__4657__auto__){
var s__34465__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34465__$2)){
var c__29129__auto__ = cljs.core.chunk_first.call(null,s__34465__$2);
var size__29130__auto__ = cljs.core.count.call(null,c__29129__auto__);
var b__34467 = cljs.core.chunk_buffer.call(null,size__29130__auto__);
if((function (){var i__34466 = (0);
while(true){
if((i__34466 < size__29130__auto__)){
var column = cljs.core._nth.call(null,c__29129__auto__,i__34466);
var index = (column + (row * columns));
cljs.core.chunk_append.call(null,b__34467,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple.core.cell,index], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cell","cell",-1890190685,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join('')], null)));

var G__34468 = (i__34466 + (1));
i__34466 = G__34468;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34467),simple$core$cell_row_$_iter__34464.call(null,cljs.core.chunk_rest.call(null,s__34465__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34467),null);
}
} else {
var column = cljs.core.first.call(null,s__34465__$2);
var index = (column + (row * columns));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple.core.cell,index], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cell","cell",-1890190685,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join('')], null)),simple$core$cell_row_$_iter__34464.call(null,cljs.core.rest.call(null,s__34465__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__29131__auto__.call(null,cljs.core.range.call(null,columns));
})())], null);
});
simple.core.board = (function simple$core$board(rows_columns){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.doall.call(null,(function (){var iter__29131__auto__ = (function simple$core$board_$_iter__34469(s__34470){
return (new cljs.core.LazySeq(null,(function (){
var s__34470__$1 = s__34470;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__34470__$1);
if(temp__4657__auto__){
var s__34470__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34470__$2)){
var c__29129__auto__ = cljs.core.chunk_first.call(null,s__34470__$2);
var size__29130__auto__ = cljs.core.count.call(null,c__29129__auto__);
var b__34472 = cljs.core.chunk_buffer.call(null,size__29130__auto__);
if((function (){var i__34471 = (0);
while(true){
if((i__34471 < size__29130__auto__)){
var row = cljs.core._nth.call(null,c__29129__auto__,i__34471);
cljs.core.chunk_append.call(null,b__34472,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple.core.cell_row,row,rows_columns], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"row","row",1070392006,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(row)].join('')], null)));

var G__34473 = (i__34471 + (1));
i__34471 = G__34473;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34472),simple$core$board_$_iter__34469.call(null,cljs.core.chunk_rest.call(null,s__34470__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34472),null);
}
} else {
var row = cljs.core.first.call(null,s__34470__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple.core.cell_row,row,rows_columns], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"row","row",1070392006,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(row)].join('')], null)),simple$core$board_$_iter__34469.call(null,cljs.core.rest.call(null,s__34470__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__29131__auto__.call(null,cljs.core.range.call(null,rows_columns));
})())], null);
});
simple.core.ui = (function simple$core$ui(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Tic Tac Toe"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple.core.board,(3)], null)], null);
});
simple.core.run = (function simple$core$run(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null));

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [simple.core.ui], null),document.getElementById("app"));
});
goog.exportSymbol('simple.core.run', simple.core.run);

//# sourceMappingURL=core.js.map?rel=1544588659560
