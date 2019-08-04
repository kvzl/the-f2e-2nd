goog.provide('mp3p.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('mp3p.db');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("mp3p.events","initialize-db","mp3p.events/initialize-db",-1814634267),(function (_,___$1){
return mp3p.db.default_db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("mp3p.events","name-change","mp3p.events/name-change",1110197577),(function (db,p__28433){
var vec__28434 = p__28433;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28434,(0),null);
var new_name_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28434,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"name","name",1843675177),new_name_value);
}));

//# sourceMappingURL=mp3p.events.js.map
