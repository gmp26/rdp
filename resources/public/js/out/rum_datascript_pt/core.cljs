(ns rum-datascript-pt.core
  (:require [rum :include-macros true]
            [datascript :as d]
            [rum-datascript-pt.helper :as h]
            [cljs-uuid.core :as uuid]))

(defn bind
  "datascript db updates should update any dependent (react) atom"
  ([conn q]
    (bind conn q (atom nil)))
  ([conn q state]
    (let [k (uuid/make-random)]
      (reset! state (d/q q @conn))
      (d/listen! conn k (fn [tx-report]
                          (let [novelty (d/q q (:tx-data tx-report))]
                            (when (not-empty novelty)       
                              (reset! state (d/q q (:db-after tx-report)))))))
      (set! (.-__key state) k)
      state)))

(defn unbind
  [conn state]
  (d/unlisten! conn (.-__key state)))

(enable-console-print!)

(def fixtures [{:db/id -1 :city/name "Leipzig"}
               {:db/id -2 :city/name "Kiel"}
               {:db/id -3 :good/name "Orange"}
               {:db/id -4 :good/name "Banana"}
               {:db/id -5 :good/name "Apple"}
               {:db/id -6 :city -1 :good -4 :good/count 500}])


(def conn (d/create-conn {:city {:db/valueType :db.type/ref}
                          :good {:db/valueType :db.type/ref}}))

(def get-cities-query '[:find ?e ?n :where [?e :city/name ?n]])

(defn get-cities [db]
  (d/q get-cities-query db))

;(def color (atom "#cc3333"))
;(def text (atom "Hello"))



;(rum/defc label < rum/reactive []
;          [:div
;           [:.label {:style {:color (rum/react color)}}
;            (rum/react text)]
;           [:button {:on-click #(println @conn)} "click"]])

(rum/defc cities < rum/reactive []
          (let [cs (bind conn get-cities-query)]
            ;(println @cs)
            [:div
             [:ul
              (for [[id name] @cs]
                [:li {:id id} name])
              ]
             [:button {:on-click #(println @conn)} "click"]]
            (unbind conn cs)))

(defn init-app []
  (d/transact! conn fixtures))

(defn main []
  (init-app)
  (rum/mount (cities) (h/get-elem "app"))
  )

(main)

(println (get-cities @conn))
