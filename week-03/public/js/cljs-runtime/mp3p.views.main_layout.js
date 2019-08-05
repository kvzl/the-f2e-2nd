goog.provide('mp3p.views.main_layout');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('cljss.core');
goog.require('mp3p.views.colors');
mp3p.views.main_layout.main = (function mp3p$views$main_layout$main(){
return cljss.core.css("mp3p_views_main-layout__main",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".mp3p_views_main-layout__main{display:flex;flex-direction:row;width:100vw;height:100vh;}"], null),cljs.core.PersistentVector.EMPTY);
});
mp3p.views.main_layout.side = (function mp3p$views$main_layout$side(){
return cljss.core.css("mp3p_views_main-layout__side",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".mp3p_views_main-layout__side{width:230px;height:100%;z-index:1;box-shadow:20px 0px 40px -20px rgba(0, 0, 0, .3);background-color:var(--var-mp3p_views_main-layout__side-0);}"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--var-mp3p_views_main-layout__side-0",new cljs.core.Keyword(null,"dark","dark",1818973999).cljs$core$IFn$_invoke$arity$1(mp3p.views.colors.colors)], null)], null));
});
mp3p.views.main_layout.content = (function mp3p$views$main_layout$content(){
return cljss.core.css("mp3p_views_main-layout__content",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".mp3p_views_main-layout__content{flex-grow:1;height:100%;background-color:var(--var-mp3p_views_main-layout__content-0);}"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--var-mp3p_views_main-layout__content-0",new cljs.core.Keyword(null,"secondary","secondary",-669381460).cljs$core$IFn$_invoke$arity$1(mp3p.views.colors.colors)], null)], null));
});
mp3p.views.main_layout.MainLayout = (function mp3p$views$main_layout$MainLayout(Side){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),mp3p.views.main_layout.main()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),mp3p.views.main_layout.side()], null),Side], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),mp3p.views.main_layout.content()], null)], null)], null);
});

//# sourceMappingURL=mp3p.views.main_layout.js.map
