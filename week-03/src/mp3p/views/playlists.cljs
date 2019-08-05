(ns mp3p.views.playlists
  (:require [sablono.core :refer [html]]
            [cljss.core :refer-macros [defstyles]]
            [mp3p.views.colors :refer [colors]]))

; Add button

(defstyles add-button []
  {:background-image "url('imgs/plus-solid.png')"
   :background-color "transparent"
   :background-repeat "no-repeat"
   :background-position "center"
   :background-size "40%"
   :border "none"
   :width "30px"
   :height "30px"
   :cursor "pointer"

   :&:hover {:background-image "url('imgs/plus-solid_hover.png')"}})


(defn AddButton []
  [:button {:class (add-button)} ""])


; Playlists Header

(defstyles header []
  {:color (:gray colors)
   :font-size "16px"
   :height "73px"
   :padding "0px 25px"
   :display "flex"
   :justify-content "space-between"
   :align-items "center"})


(defn PlaylistsHeader []
  [:div {:class (header)}
   [:span "我的專輯"]
   (AddButton)])


; Now Playing


(defstyles now-playing []
  {})


(defn NowPlaying []
  [:div {:class (now-playing)}])


; Playlists


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
   :cursor "pointer"
   :transition "all .15s ease-in"

   :&:hover {:color (:link colors)
             &:before {:background-color "rgba(100, 100, 100, .9)"}}

   :&:before {:content ""
              :display "block"
              :position "absolute"
              :left "0px"
              :top "0px"
              :transition "all .15s ease-in"
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


