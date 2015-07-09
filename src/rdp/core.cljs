(ns rdp.core
  (:require [rum :as r]
            [datascript :as d]
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
; #{[2 "Kiel"] [1 "Leipzig"]}


(defn add-city [db-atom city]
  (d/transact! db-atom [{:city/name city}]))

(r/defc mutate-button < r/reactive []
  [:div {:key "mb"}
   [:button 
    {:on-click (fn [e] 
                 (add-city conn "Bremen"))} 
    "Mutate"]])

(def app-state (bind conn get-cities-query))

(r/defc cities < r/reactive []
  [:div
   [:ul
    (for [[id name] (r/react app-state)]
      [:li {:id id} name])
    ]
   [:button {:on-click #(println @conn) :key "delete"} "click"]
   (mutate-button)]
  )

(defn init-app []
  (d/transact! conn fixtures))

(defn main []
  (init-app)
  (rum/mount (cities) (.getElementById js/document "app"))
  )

(main)

(defn on-js-reload []
  (prn "core loaded")
)

(prn (get-cities @conn))

