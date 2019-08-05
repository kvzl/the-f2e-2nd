(ns mp3p.views.main-layout
  (:require [sablono.core :refer [html]]
            [cljss.core :refer-macros [defstyles]]
            [mp3p.views.colors :refer [colors]]))


(defstyles main []
  {:display "flex"
   :flex-direction "row"
   :width "100vw"
   :height "100vh"})


(defstyles side []
  {:width "230px"
   :height "100%"
   :background-color (:dark colors)
   :z-index 1
   :box-shadow "20px 0px 40px -20px rgba(0, 0, 0, .3)"})


(defstyles content []
  {:flex-grow 1
   :height "100%"
   :background-color (:secondary colors)})


(defn MainLayout [Side]
  [:div {:class (main)}
   [:div {:class (side)} Side]
   [:div {:class (content)}]])

