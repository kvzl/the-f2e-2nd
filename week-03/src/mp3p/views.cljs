(ns mp3p.views
  (:require [reagent.core :as reagent]
            [re-frame.core :as rf]
            [cljss.core :refer-macros [defstyles]]
            [sablono.core :refer [html]]
            [mp3p.subs :as subs]
            [mp3p.events :as events]
            [mp3p.views.main-layout :refer [MainLayout]]
            [mp3p.views.playlists :refer [Playlists]]))


(defn main-panel []
  (let [playlists (rf/subscribe [::subs/playlists])]
    (MainLayout
     (Playlists @playlists))))
