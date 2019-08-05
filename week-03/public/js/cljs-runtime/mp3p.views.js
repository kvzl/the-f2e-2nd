goog.provide('mp3p.views');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('cljss.core');
goog.require('sablono.core');
goog.require('mp3p.subs');
goog.require('mp3p.events');
goog.require('mp3p.views.main_layout');
goog.require('mp3p.views.playlists');
mp3p.views.main_panel = (function mp3p$views$main_panel(){
var playlists = (function (){var G__28394 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("mp3p.subs","playlists","mp3p.subs/playlists",1421750926)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__28394) : re_frame.core.subscribe.call(null,G__28394));
})();
return mp3p.views.main_layout.MainLayout(mp3p.views.playlists.Playlists(cljs.core.deref(playlists)));
});

//# sourceMappingURL=mp3p.views.js.map
