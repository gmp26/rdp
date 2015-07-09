(ns rum-datascript-pt.helper
  (:require 
    ;[cljs.core.async :refer [<! chan close! put!]]
            [goog.events :as events]
            [goog.fx.dom :as fx-dom]
            [goog.fx :as fx]
            [goog.dom :as gdom]
            [goog.dom.forms :as gforms]
            [goog.dom.classes :as gclass]
            [goog.style :as gstyle]
            ;[goog.net.XhrIo :as xhr]
            ;[ajax.core :as ajax]
            ;[goog.string :as gstring]
            ;[goog.string.format]
            ;[freactive.dom :as dom]
            )
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defn allow-drop [e] (.preventDefault e))

;(defn timeout [ms]
;  (let [c (chan)]
;    (js/setTimeout (fn [] (close! c)) ms)
;    c))

(defn get-elem [id] (gdom/getElement id))
(defn get-attr [elem attr] (.getAttribute elem attr))
;(defn has-attr? [id attr]
;  (.hasAttribute (get-elem id) attr))

(defn get-value [elem]
  (gforms/getValue (gdom/getElement elem)))

(defn get-selected-option [id]
  (gforms/getValue (get-elem id)))

;(defn send->ch [url method content]
;  (let [ch (chan 1)]
;    (ajax/ajax-request
;      {:uri             url
;       :method          method
;       :params          content
;       :format          (ajax/transit-request-format)
;       :response-format (ajax/transit-response-format)
;       :handler         (fn [resp]
;                          (put! ch resp))
;       })
;    ch))

;(defn post-async->ch [url content]
;  (send->ch url :post content))

;(defn delete-async->ch [url content]
;  (send->ch url :delete content))
;
;(defn get-async->ch [url & [content]]
;  (send->ch url :get content))

;(defn post-async [url content cb]
;  (send url :post content cb))

;(defn cut-str-at
;  "Cuts string at (- length 3) and adds \"...\" to the end of the returned string"
;  [s length]
;  (if (> (count s) length)
;    (str (.substring s 0 (- length 3)) "...")
;    s))
;
;(defn format-mb
;  "Formats a string using goog.string.format."
;  [nmr]
;  (gstring/format "%.2f MB" (/ nmr 1000000)))
;
(defn fade-out
  ([] (fade-out 1000 nil))
  ([tm] (fade-out tm nil))
  ([tm callback]
    (fn [node]
      (let [anim (fx-dom/FadeOut. node tm)]
        (when callback
          (events/listen anim js/goog.fx.Animation.EventType.END callback))
        (. anim (play))))))

(defn fade-in
  ([] (fade-in 1000 nil))
  ([tm] (fade-in tm nil))
  ([tm callback]
    (fn [node]
      (let [anim (fx-dom/FadeIn. node tm)]
        (when callback
          (events/listen anim js/goog.fx.Animation.EventType.END callback))
        (. anim (play))))))

;(defn show-and-fade-in [id]
;  (let [elem (get-elem id)]
;    (go (gstyle/setElementShown elem "true")
;        ((fade-in 1000) elem))))
;
;(defn fade-out-and-hide [id]
;  (let [elem (get-elem id)]
;    (go ((fade-out 1000) elem)
;        (<! (timeout 1000))
;        (gstyle/setElementShown elem))))
;
;(defn toggle-elem [id]
;  (let [elem (get-elem id)]
;    (if (gstyle/isElementShown elem)
;      (fade-out-and-hide id)
;      (show-and-fade-in id))))
;
;(defn show-message [id message class]
;  (let [m-container (get-elem id)]
;    (go (gdom/setTextContent m-container message)
;        (gclass/set m-container class)
;      (gstyle/setElementShown m-container "true")
;        ((fade-in 1000) m-container)
;        (<! (timeout 5000))
;        ((fade-out 1000) m-container)
;        (<! (timeout 1000))
;        (gstyle/setElementShown m-container))))
;
;(defn show-error-message
;  ([id] (show-error-message id "Some error occured. Sorry."))
;  ([id m] (show-message id m "alert alert-danger")))
;
;(defn show-success-message [id m] (show-message id m "alert alert-success"))

(defn set-attr [id attr val]
  (.setAttribute (get-elem id) attr val))

;(defn set-class [elem class]
;  (gclass/set elem class))
;
;(defn clear-and-append [parent cont]
;  (let [elem (get-elem parent)]
;    (dom/clear-children! elem)
;    (dom/append-child! elem cont)))