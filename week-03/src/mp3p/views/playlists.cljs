(ns mp3p.views.playlists
  (:require [sablono.core :refer [html]]
            [cljss.core :refer-macros [defstyles]]
            [mp3p.views.colors :refer [colors]]))


(defstyles header []
  {:color (:gray colors)
   :font-size "18px"
   :height "73px"
   :padding "0px 25px"
   :display "flex"
   :justify-content "space-between"
   :align-items "center"})


(defn PlaylistsHeader []
  [:div {:class (header)} "我的專輯"])



(defstyles now-playing []
  {})


(defn NowPlaying []
  [:div {:class (now-playing)}])


(defstyles wrap []
  {:display "flex"
   :flex-direction "column"
   :height "100%"})


(defstyles p-lists []
  {:background-image "linear-gradient(180deg, #222222 23%, #0C0C0C 100%)"
   :color (:gray colors)
   :width "100%"
   :flex-grow 1})


(defstyles p-list [active]
  {:padding "0px 26px"
   :height "50px"
   :display "flex"
   :align-items "center"
   :color (if active (:light colors))
   :position "relative"

   :&:before {:content ""
              :display "block"
              :position "absolute"
              :left "0px"
              :top "0px"
              :background-image (if active (str "linear-gradient(270deg, " (:highlight colors) " 0%, " (:primary colors) " 100%)"))
              :background-color (if active "rgba(42, 42, 42, .9)")
              :opacity 0.1
              :z-index 1
              :width "100%"
              :height "100%"}})


(defn Playlists [playlists]
  [:div {:class (wrap)}
   (PlaylistsHeader)
   [:div {:class (p-lists)}
    (map-indexed
     (fn [index playlist]
       ^{:key (str "playlist-" index)}
       (let [name (:name playlist)]
         [:div {:class (p-list (= index 1))} name]))
     playlists)]
   (NowPlaying)])


