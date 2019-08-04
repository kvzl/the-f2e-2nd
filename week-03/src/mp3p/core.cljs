(ns mp3p.core
  (:require [reagent.core :as reagent]
            [re-frame.core :as rf]
            [mp3p.views :as views]
            [mp3p.events :as events]))


(defn render []
  (rf/clear-subscription-cache!)
  (reagent/render [views/main-panel]
                  (js/document.getElementById "app")))


(defn ^:export init []
  (js/console.log "Initializing")
  (rf/dispatch-sync [::events/initialize-db])
  (render))

