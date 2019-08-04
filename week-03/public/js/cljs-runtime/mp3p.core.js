goog.provide('mp3p.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('mp3p.views');
goog.require('mp3p.events');
goog.require('cljss.core');
mp3p.core.render = (function mp3p$core$render(){
(re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0 ? re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0() : re_frame.core.clear_subscription_cache_BANG_.call(null));

cljss.core.remove_styles_BANG_();

return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mp3p.views.main_panel], null),document.getElementById("app"));
});
mp3p.core.init = (function mp3p$core$init(){
console.log("Initializing");

var G__28418_28419 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("mp3p.events","initialize-db","mp3p.events/initialize-db",-1814634267)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__28418_28419) : re_frame.core.dispatch_sync.call(null,G__28418_28419));

return mp3p.core.render();
});
goog.exportSymbol('mp3p.core.init', mp3p.core.init);

//# sourceMappingURL=mp3p.core.js.map
