(ns mp3p.core
  (:require [reagent.core :as reagent]
            [re-frame.core :as re-frame]
            [mp3p.views :as views]
            [mp3p.events :as events]))


(defn render []
  (re-frame/clear-subscription-cache!)
  (reagent/render [views/main-panel]
                  (js/document.getElementById "app")))


(defn ^:export init []
  (js/console.log "Initializing")
  (re-frame/dispatch-sync [::events/initialize-db])
  (render))

