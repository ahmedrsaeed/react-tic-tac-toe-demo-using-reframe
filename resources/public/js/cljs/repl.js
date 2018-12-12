// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36727){
var map__36728 = p__36727;
var map__36728__$1 = ((((!((map__36728 == null)))?((((map__36728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36728.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36728):map__36728);
var m = map__36728__$1;
var n = cljs.core.get.call(null,map__36728__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__36728__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36730_36752 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36731_36753 = null;
var count__36732_36754 = (0);
var i__36733_36755 = (0);
while(true){
if((i__36733_36755 < count__36732_36754)){
var f_36756 = cljs.core._nth.call(null,chunk__36731_36753,i__36733_36755);
cljs.core.println.call(null,"  ",f_36756);

var G__36757 = seq__36730_36752;
var G__36758 = chunk__36731_36753;
var G__36759 = count__36732_36754;
var G__36760 = (i__36733_36755 + (1));
seq__36730_36752 = G__36757;
chunk__36731_36753 = G__36758;
count__36732_36754 = G__36759;
i__36733_36755 = G__36760;
continue;
} else {
var temp__4657__auto___36761 = cljs.core.seq.call(null,seq__36730_36752);
if(temp__4657__auto___36761){
var seq__36730_36762__$1 = temp__4657__auto___36761;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36730_36762__$1)){
var c__29162__auto___36763 = cljs.core.chunk_first.call(null,seq__36730_36762__$1);
var G__36764 = cljs.core.chunk_rest.call(null,seq__36730_36762__$1);
var G__36765 = c__29162__auto___36763;
var G__36766 = cljs.core.count.call(null,c__29162__auto___36763);
var G__36767 = (0);
seq__36730_36752 = G__36764;
chunk__36731_36753 = G__36765;
count__36732_36754 = G__36766;
i__36733_36755 = G__36767;
continue;
} else {
var f_36768 = cljs.core.first.call(null,seq__36730_36762__$1);
cljs.core.println.call(null,"  ",f_36768);

var G__36769 = cljs.core.next.call(null,seq__36730_36762__$1);
var G__36770 = null;
var G__36771 = (0);
var G__36772 = (0);
seq__36730_36752 = G__36769;
chunk__36731_36753 = G__36770;
count__36732_36754 = G__36771;
i__36733_36755 = G__36772;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36773 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__28323__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__28323__auto__)){
return or__28323__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_36773);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_36773)))?cljs.core.second.call(null,arglists_36773):arglists_36773));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36734_36774 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36735_36775 = null;
var count__36736_36776 = (0);
var i__36737_36777 = (0);
while(true){
if((i__36737_36777 < count__36736_36776)){
var vec__36738_36778 = cljs.core._nth.call(null,chunk__36735_36775,i__36737_36777);
var name_36779 = cljs.core.nth.call(null,vec__36738_36778,(0),null);
var map__36741_36780 = cljs.core.nth.call(null,vec__36738_36778,(1),null);
var map__36741_36781__$1 = ((((!((map__36741_36780 == null)))?((((map__36741_36780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36741_36780.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36741_36780):map__36741_36780);
var doc_36782 = cljs.core.get.call(null,map__36741_36781__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36783 = cljs.core.get.call(null,map__36741_36781__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36779);

cljs.core.println.call(null," ",arglists_36783);

if(cljs.core.truth_(doc_36782)){
cljs.core.println.call(null," ",doc_36782);
} else {
}

var G__36784 = seq__36734_36774;
var G__36785 = chunk__36735_36775;
var G__36786 = count__36736_36776;
var G__36787 = (i__36737_36777 + (1));
seq__36734_36774 = G__36784;
chunk__36735_36775 = G__36785;
count__36736_36776 = G__36786;
i__36737_36777 = G__36787;
continue;
} else {
var temp__4657__auto___36788 = cljs.core.seq.call(null,seq__36734_36774);
if(temp__4657__auto___36788){
var seq__36734_36789__$1 = temp__4657__auto___36788;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36734_36789__$1)){
var c__29162__auto___36790 = cljs.core.chunk_first.call(null,seq__36734_36789__$1);
var G__36791 = cljs.core.chunk_rest.call(null,seq__36734_36789__$1);
var G__36792 = c__29162__auto___36790;
var G__36793 = cljs.core.count.call(null,c__29162__auto___36790);
var G__36794 = (0);
seq__36734_36774 = G__36791;
chunk__36735_36775 = G__36792;
count__36736_36776 = G__36793;
i__36737_36777 = G__36794;
continue;
} else {
var vec__36743_36795 = cljs.core.first.call(null,seq__36734_36789__$1);
var name_36796 = cljs.core.nth.call(null,vec__36743_36795,(0),null);
var map__36746_36797 = cljs.core.nth.call(null,vec__36743_36795,(1),null);
var map__36746_36798__$1 = ((((!((map__36746_36797 == null)))?((((map__36746_36797.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36746_36797.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36746_36797):map__36746_36797);
var doc_36799 = cljs.core.get.call(null,map__36746_36798__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36800 = cljs.core.get.call(null,map__36746_36798__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36796);

cljs.core.println.call(null," ",arglists_36800);

if(cljs.core.truth_(doc_36799)){
cljs.core.println.call(null," ",doc_36799);
} else {
}

var G__36801 = cljs.core.next.call(null,seq__36734_36789__$1);
var G__36802 = null;
var G__36803 = (0);
var G__36804 = (0);
seq__36734_36774 = G__36801;
chunk__36735_36775 = G__36802;
count__36736_36776 = G__36803;
i__36737_36777 = G__36804;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__36748 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36749 = null;
var count__36750 = (0);
var i__36751 = (0);
while(true){
if((i__36751 < count__36750)){
var role = cljs.core._nth.call(null,chunk__36749,i__36751);
var temp__4657__auto___36805__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36805__$1)){
var spec_36806 = temp__4657__auto___36805__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_36806));
} else {
}

var G__36807 = seq__36748;
var G__36808 = chunk__36749;
var G__36809 = count__36750;
var G__36810 = (i__36751 + (1));
seq__36748 = G__36807;
chunk__36749 = G__36808;
count__36750 = G__36809;
i__36751 = G__36810;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__36748);
if(temp__4657__auto____$1){
var seq__36748__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36748__$1)){
var c__29162__auto__ = cljs.core.chunk_first.call(null,seq__36748__$1);
var G__36811 = cljs.core.chunk_rest.call(null,seq__36748__$1);
var G__36812 = c__29162__auto__;
var G__36813 = cljs.core.count.call(null,c__29162__auto__);
var G__36814 = (0);
seq__36748 = G__36811;
chunk__36749 = G__36812;
count__36750 = G__36813;
i__36751 = G__36814;
continue;
} else {
var role = cljs.core.first.call(null,seq__36748__$1);
var temp__4657__auto___36815__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36815__$2)){
var spec_36816 = temp__4657__auto___36815__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_36816));
} else {
}

var G__36817 = cljs.core.next.call(null,seq__36748__$1);
var G__36818 = null;
var G__36819 = (0);
var G__36820 = (0);
seq__36748 = G__36817;
chunk__36749 = G__36818;
count__36750 = G__36819;
i__36751 = G__36820;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1544388306987
