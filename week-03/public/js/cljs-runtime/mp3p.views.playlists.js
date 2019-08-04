goog.provide('mp3p.views.playlists');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('cljss.core');
goog.require('mp3p.views.colors');
mp3p.views.playlists.header = (function mp3p$views$playlists$header(){
return cljss.core.css("mp3p_views_playlists__header",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".mp3p_views_playlists__header{font-size:18px;height:73px;padding:0px 25px;display:flex;justify-content:space-between;align-items:center;color:var(--var-mp3p_views_playlists__header-0);}"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--var-mp3p_views_playlists__header-0",new cljs.core.Keyword(null,"gray","gray",1013268388).cljs$core$IFn$_invoke$arity$1(mp3p.views.colors.colors)], null)], null));
});
mp3p.views.playlists.PlaylistsHeader = (function mp3p$views$playlists$PlaylistsHeader(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),mp3p.views.playlists.header()], null),"\u6211\u7684\u5C08\u8F2F"], null);
});
mp3p.views.playlists.now_playing = (function mp3p$views$playlists$now_playing(){
return cljss.core.css("mp3p_views_playlists__now-playing",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".mp3p_views_playlists__now-playing{}"], null),cljs.core.PersistentVector.EMPTY);
});
mp3p.views.playlists.NowPlaying = (function mp3p$views$playlists$NowPlaying(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),mp3p.views.playlists.now_playing()], null)], null);
});
mp3p.views.playlists.wrap = (function mp3p$views$playlists$wrap(){
return cljss.core.css("mp3p_views_playlists__wrap",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".mp3p_views_playlists__wrap{display:flex;flex-direction:column;height:100%;}"], null),cljs.core.PersistentVector.EMPTY);
});
mp3p.views.playlists.p_lists = (function mp3p$views$playlists$p_lists(){
return cljss.core.css("mp3p_views_playlists__p-lists",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [".mp3p_views_playlists__p-lists{background-image:linear-gradient(180deg, #222222 23%, #0C0C0C 100%);width:100%;flex-grow:1;color:var(--var-mp3p_views_playlists__p-lists-0);}"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--var-mp3p_views_playlists__p-lists-0",new cljs.core.Keyword(null,"gray","gray",1013268388).cljs$core$IFn$_invoke$arity$1(mp3p.views.colors.colors)], null)], null));
});
mp3p.views.playlists.p_list = (function mp3p$views$playlists$p_list(active){
return cljss.core.css("mp3p_views_playlists__p-list",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [".mp3p_views_playlists__p-list{padding:0px 26px;height:50px;display:flex;align-items:center;position:relative;color:var(--var-mp3p_views_playlists__p-list-0);}",".mp3p_views_playlists__p-list:before{top:0px;content:\"\";width:100%;z-index:1;opacity:0.1;display:block;position:absolute;height:100%;left:0px;background-color:var(--var-mp3p_views_playlists__p-list-1);background-image:var(--var-mp3p_views_playlists__p-list-2);}"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--var-mp3p_views_playlists__p-list-0",(cljs.core.truth_(active)?new cljs.core.Keyword(null,"light","light",1918998747).cljs$core$IFn$_invoke$arity$1(mp3p.views.colors.colors):null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--var-mp3p_views_playlists__p-list-1",(cljs.core.truth_(active)?"rgba(42, 42, 42, .9)":null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["--var-mp3p_views_playlists__p-list-2",(cljs.core.truth_(active)?["linear-gradient(270deg, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"highlight","highlight",-800930873).cljs$core$IFn$_invoke$arity$1(mp3p.views.colors.colors))," 0%, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"primary","primary",817773892).cljs$core$IFn$_invoke$arity$1(mp3p.views.colors.colors))," 100%)"].join(''):null)], null)], null));
});
mp3p.views.playlists.Playlists = (function mp3p$views$playlists$Playlists(playlists){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),mp3p.views.playlists.wrap()], null),mp3p.views.playlists.PlaylistsHeader(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),mp3p.views.playlists.p_lists()], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (index,playlist){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(playlist);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),mp3p.views.playlists.p_list(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,(1)))], null),name], null);
}),playlists)], null),mp3p.views.playlists.NowPlaying()], null);
});

//# sourceMappingURL=mp3p.views.playlists.js.map
