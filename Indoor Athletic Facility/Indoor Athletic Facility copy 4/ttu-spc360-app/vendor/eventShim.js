(function() {

    function init() {

        // filter out unsupported browsers
        if (Element.prototype.addEventListener || !Object.defineProperty) {
            return {
                loadedForBrowser : false
            };
        }

        // create an MS event object and get prototype
        var proto = document.createEventObject().constructor.prototype;

        /**
     * Indicates whether an event propagates up from the target.
     * @returns Boolean
     */
        Object.defineProperty(proto, "bubbles", {
            get: function() {
                // not a complete list of DOM3 events; some of these IE8 doesn't support
                var bubbleEvents = ["select", "scroll", "click", "dblclick",
                    "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "wheel", "textinput",
                    "keydown", "keypress", "keyup"],
                    type = this.type;

                for (var i = 0, l = bubbleEvents.length; i < l; i++) {
                    if (type === bubbleEvents[i]) {
                        return true;
                    }
                }

                return false;
            }
        });


        /**
     * Indicates whether or not preventDefault() was called on the event.
     * @returns Boolean
     */
        Object.defineProperty(proto, "defaultPrevented", {
            get: function() {
                // if preventDefault() was never called, or returnValue not given a value
                // then returnValue is undefined
                var returnValue = this.returnValue,
                    undef;

                return !(returnValue === undef || returnValue);
            }
        });


        /**
     * Gets the secondary targets of mouseover and mouseout events (toElement and fromElement)
     * @returns EventTarget or {null}
     */
        Object.defineProperty(proto, "relatedTarget", {
            get: function() {
                var type = this.type;

                if (type === "mouseover" || type === "mouseout") {
                    return (type === "mouseover") ? this.fromElement : this.toElement;
                }

                return null;
            }
        });


        /**
     * Gets the target of the event (srcElement)
     * @returns EventTarget
     */
        Object.defineProperty(proto, "target", {
            get: function() { return this.srcElement; }
        });


        /**
     * Cancels the event if it is cancelable. (returnValue)
     * @returns {undefined}
     */
        proto.preventDefault = function() {
            this.returnValue = false;
        };

        /**
     * Prevents further propagation of the current event. (cancelBubble())
     * @returns {undefined}
     */
        proto.stopPropagation = function() {
            this.cancelBubble = true;
        };

        /***************************************
     *
     * Event Listener Setup
     *    Nothing complex here
     *
     ***************************************/

        /**
     * Determines if the provided object implements EventListener
     * @returns boolean
    */
        var implementsEventListener = function(obj) {
            return (typeof obj !== "function" && typeof obj["handleEvent"] === "function");
        };

        var customELKey = "__eventShim__";

        /**
     * Adds an event listener to the DOM object
     * @returns {undefined}
     */
        var addEventListenerFunc = function(type, handler, useCapture) {
            // useCapture isn't used; it's IE!

            var fn = handler;

            if (implementsEventListener(handler)) {

                if (typeof handler[customELKey] !== "function") {
                    handler[customELKey] = function(e) {
                        handler["handleEvent"](e);
                    };
                }

                fn = handler[customELKey];
            }

            this.attachEvent("on" + type, fn);
        };

        /**
     * Removes an event listener to the DOM object
     * @returns {undefined}
     */
        var removeEventListenerFunc = function(type, handler, useCapture) {
            // useCapture isn't used; it's IE!

            var fn = handler;

            if (implementsEventListener(handler)) {
                fn = handler[customELKey];
            }

            this.detachEvent("on" + type, fn);
        };

        // setup the DOM and window objects
        HTMLDocument.prototype.addEventListener = addEventListenerFunc;
        HTMLDocument.prototype.removeEventListener = removeEventListenerFunc;

        Element.prototype.addEventListener = addEventListenerFunc;
        Element.prototype.removeEventListener = removeEventListenerFunc;

        window.addEventListener = addEventListenerFunc;
        window.removeEventListener = removeEventListenerFunc;

        return {
            loadedForBrowser : true
        };
    }

    // check for AMD support
    if (typeof define === "function" && define["amd"]) {
        define(init);
    } else {
        return init();
    }
    
}());