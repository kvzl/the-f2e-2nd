(ns mp3p.views
  (:require [re-frame.core :as rf]
            [mp3p.subs :as subs]
            [mp3p.events :as events]))

(defn main-panel []
  (let [name (rf/subscribe [::subs/name])
        test (rf/subscribe [::subs/test])]
    [:div
     [:p "Test value: " @test]
     [:p "Name value: " @name]
     [:button
      {:on-click #(rf/dispatch [::events/name-change "Name changed!"])}
      "Change name"]]))
