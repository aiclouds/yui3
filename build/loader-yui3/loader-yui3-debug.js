YUI.add('loader-yui3', function(Y) {

/* This file is auto-generated by src/loader/meta_join.py */

/**
 * YUI 3 module metadata
 * @module loader
 * @submodule yui3
 */
YUI.Env[Y.version].modules = YUI.Env[Y.version].modules || {
    "align-plugin": {
        "requires": [
            "node-screen", 
            "node-pluginhost"
        ]
    }, 
    "anim": {
        "use": [
            "anim-base", 
            "anim-color", 
            "anim-curve", 
            "anim-easing", 
            "anim-node-plugin", 
            "anim-scroll", 
            "anim-xy"
        ]
    }, 
    "anim-base": {
        "requires": [
            "base-base", 
            "node-style"
        ]
    }, 
    "anim-color": {
        "requires": [
            "anim-base"
        ]
    }, 
    "anim-curve": {
        "requires": [
            "anim-xy"
        ]
    }, 
    "anim-easing": {
        "requires": [
            "anim-base"
        ]
    }, 
    "anim-node-plugin": {
        "requires": [
            "node-pluginhost", 
            "anim-base"
        ]
    }, 
    "anim-scroll": {
        "requires": [
            "anim-base"
        ]
    }, 
    "anim-xy": {
        "requires": [
            "anim-base", 
            "node-screen"
        ]
    }, 
    "app": {
        "use": [
            "controller", 
            "model", 
            "model-list", 
            "view"
        ]
    }, 
    "array-extras": {}, 
    "array-invoke": {}, 
    "arraylist": {}, 
    "arraylist-add": {
        "requires": [
            "arraylist"
        ]
    }, 
    "arraylist-filter": {
        "requires": [
            "arraylist"
        ]
    }, 
    "arraysort": {
        "requires": [
            "yui-base"
        ]
    }, 
    "async-queue": {
        "requires": [
            "event-custom"
        ]
    }, 
    "attribute": {
        "use": [
            "attribute-base", 
            "attribute-complex"
        ]
    }, 
    "attribute-base": {
        "requires": [
            "event-custom"
        ]
    }, 
    "attribute-complex": {
        "requires": [
            "attribute-base"
        ]
    }, 
    "autocomplete": {
        "use": [
            "autocomplete-base", 
            "autocomplete-sources", 
            "autocomplete-list", 
            "autocomplete-plugin"
        ]
    }, 
    "autocomplete-base": {
        "optional": [
            "autocomplete-sources"
        ], 
        "requires": [
            "array-extras", 
            "base-build", 
            "escape", 
            "event-valuechange", 
            "node-base"
        ]
    }, 
    "autocomplete-filters": {
        "requires": [
            "array-extras", 
            "text-wordbreak"
        ]
    }, 
    "autocomplete-filters-accentfold": {
        "requires": [
            "array-extras", 
            "text-accentfold", 
            "text-wordbreak"
        ]
    }, 
    "autocomplete-highlighters": {
        "requires": [
            "array-extras", 
            "highlight-base"
        ]
    }, 
    "autocomplete-highlighters-accentfold": {
        "requires": [
            "array-extras", 
            "highlight-accentfold"
        ]
    }, 
    "autocomplete-list": {
        "after": [
            "autocomplete-sources"
        ], 
        "lang": [
            "en"
        ], 
        "requires": [
            "autocomplete-base", 
            "event-resize", 
            "selector-css3", 
            "shim-plugin", 
            "widget", 
            "widget-position", 
            "widget-position-align"
        ], 
        "skinnable": true
    }, 
    "autocomplete-list-keys": {
        "condition": {
            "name": "autocomplete-list-keys", 
            "test": function (Y) {
    // Only add keyboard support to autocomplete-list if this doesn't appear to
    // be an iOS or Android-based mobile device.
    //
    // There's currently no feasible way to actually detect whether a device has
    // a hardware keyboard, so this sniff will have to do. It can easily be
    // overridden by manually loading the autocomplete-list-keys module.
    //
    // Worth noting: even though iOS supports bluetooth keyboards, Mobile Safari
    // doesn't fire the keyboard events used by AutoCompleteList, so there's
    // no point loading the -keys module even when a bluetooth keyboard may be
    // available.
    return !(Y.UA.ios || Y.UA.android);
}, 
            "trigger": "autocomplete-list"
        }, 
        "requires": [
            "autocomplete-list", 
            "base-build"
        ]
    }, 
    "autocomplete-plugin": {
        "requires": [
            "autocomplete-list", 
            "node-pluginhost"
        ]
    }, 
    "autocomplete-sources": {
        "optional": [
            "io-base", 
            "json-parse", 
            "jsonp", 
            "yql"
        ], 
        "requires": [
            "autocomplete-base"
        ]
    }, 
    "base": {
        "use": [
            "base-base", 
            "base-pluginhost", 
            "base-build"
        ]
    }, 
    "base-base": {
        "after": [
            "attribute-complex"
        ], 
        "requires": [
            "attribute-base"
        ]
    }, 
    "base-build": {
        "requires": [
            "base-base"
        ]
    }, 
    "base-pluginhost": {
        "requires": [
            "base-base", 
            "pluginhost"
        ]
    }, 
    "cache": {
        "use": [
            "cache-base", 
            "cache-offline", 
            "cache-plugin"
        ]
    }, 
    "cache-base": {
        "requires": [
            "base"
        ]
    }, 
    "cache-offline": {
        "requires": [
            "cache-base", 
            "json"
        ]
    }, 
    "cache-plugin": {
        "requires": [
            "plugin", 
            "cache-base"
        ]
    }, 
    "charts": {
        "requires": [
            "dom", 
            "datatype", 
            "event-custom", 
            "event-mouseenter", 
            "widget", 
            "widget-position", 
            "widget-stack"
        ]
    }, 
    "classnamemanager": {
        "requires": [
            "yui-base"
        ]
    }, 
    "clickable-rail": {
        "requires": [
            "slider-base"
        ]
    }, 
    "collection": {
        "use": [
            "array-extras", 
            "arraylist", 
            "arraylist-add", 
            "arraylist-filter", 
            "array-invoke"
        ]
    }, 
    "compat": {
        "requires": [
            "event-base", 
            "dom", 
            "dump", 
            "substitute"
        ]
    }, 
    "console": {
        "lang": [
            "en", 
            "es"
        ], 
        "requires": [
            "yui-log", 
            "widget", 
            "substitute"
        ], 
        "skinnable": true
    }, 
    "console-filters": {
        "requires": [
            "plugin", 
            "console"
        ], 
        "skinnable": true
    }, 
    "controller": {
        "optional": [
            "querystring-parse"
        ], 
        "requires": [
            "array-extras", 
            "base-build", 
            "history"
        ]
    }, 
    "cookie": {
        "requires": [
            "yui-base"
        ]
    }, 
    "createlink-base": {
        "requires": [
            "editor-base"
        ]
    }, 
    "cssbase": {
        "after": [
            "cssreset", 
            "cssfonts", 
            "cssgrids", 
            "cssreset-context", 
            "cssfonts-context", 
            "cssgrids-context"
        ], 
        "type": "css"
    }, 
    "cssbase-context": {
        "after": [
            "cssreset", 
            "cssfonts", 
            "cssgrids", 
            "cssreset-context", 
            "cssfonts-context", 
            "cssgrids-context"
        ], 
        "type": "css"
    }, 
    "cssfonts": {
        "type": "css"
    }, 
    "cssfonts-context": {
        "type": "css"
    }, 
    "cssgrids": {
        "optional": [
            "cssreset", 
            "cssfonts"
        ], 
        "type": "css"
    }, 
    "cssgrids-context-deprecated": {
        "optional": [
            "cssreset-context"
        ], 
        "requires": [
            "cssfonts-context"
        ], 
        "type": "css"
    }, 
    "cssgrids-deprecated": {
        "optional": [
            "cssreset"
        ], 
        "requires": [
            "cssfonts"
        ], 
        "type": "css"
    }, 
    "cssreset": {
        "type": "css"
    }, 
    "cssreset-context": {
        "type": "css"
    }, 
    "dataschema": {
        "use": [
            "dataschema-base", 
            "dataschema-json", 
            "dataschema-xml", 
            "dataschema-array", 
            "dataschema-text"
        ]
    }, 
    "dataschema-array": {
        "requires": [
            "dataschema-base"
        ]
    }, 
    "dataschema-base": {
        "requires": [
            "base"
        ]
    }, 
    "dataschema-json": {
        "requires": [
            "dataschema-base", 
            "json"
        ]
    }, 
    "dataschema-text": {
        "requires": [
            "dataschema-base"
        ]
    }, 
    "dataschema-xml": {
        "requires": [
            "dataschema-base"
        ]
    }, 
    "datasource": {
        "use": [
            "datasource-local", 
            "datasource-io", 
            "datasource-get", 
            "datasource-function", 
            "datasource-cache", 
            "datasource-jsonschema", 
            "datasource-xmlschema", 
            "datasource-arrayschema", 
            "datasource-textschema", 
            "datasource-polling"
        ]
    }, 
    "datasource-arrayschema": {
        "requires": [
            "datasource-local", 
            "plugin", 
            "dataschema-array"
        ]
    }, 
    "datasource-cache": {
        "requires": [
            "datasource-local", 
            "plugin", 
            "cache-base"
        ]
    }, 
    "datasource-function": {
        "requires": [
            "datasource-local"
        ]
    }, 
    "datasource-get": {
        "requires": [
            "datasource-local", 
            "get"
        ]
    }, 
    "datasource-io": {
        "requires": [
            "datasource-local", 
            "io-base"
        ]
    }, 
    "datasource-jsonschema": {
        "requires": [
            "datasource-local", 
            "plugin", 
            "dataschema-json"
        ]
    }, 
    "datasource-local": {
        "requires": [
            "base"
        ]
    }, 
    "datasource-polling": {
        "requires": [
            "datasource-local"
        ]
    }, 
    "datasource-textschema": {
        "requires": [
            "datasource-local", 
            "plugin", 
            "dataschema-text"
        ]
    }, 
    "datasource-xmlschema": {
        "requires": [
            "datasource-local", 
            "plugin", 
            "dataschema-xml"
        ]
    }, 
    "datatable": {
        "use": [
            "datatable-base", 
            "datatable-datasource", 
            "datatable-sort", 
            "datatable-scroll"
        ]
    }, 
    "datatable-base": {
        "requires": [
            "recordset-base", 
            "widget", 
            "substitute", 
            "event-mouseenter"
        ], 
        "skinnable": true
    }, 
    "datatable-datasource": {
        "requires": [
            "datatable-base", 
            "plugin", 
            "datasource-local"
        ]
    }, 
    "datatable-scroll": {
        "requires": [
            "datatable-base", 
            "plugin", 
            "stylesheet"
        ]
    }, 
    "datatable-sort": {
        "lang": [
            "en"
        ], 
        "requires": [
            "datatable-base", 
            "plugin", 
            "recordset-sort"
        ]
    }, 
    "datatype": {
        "use": [
            "datatype-number", 
            "datatype-date", 
            "datatype-xml"
        ]
    }, 
    "datatype-date": {
        "lang": [
            "ar", 
            "ar-JO", 
            "ca", 
            "ca-ES", 
            "da", 
            "da-DK", 
            "de", 
            "de-AT", 
            "de-DE", 
            "el", 
            "el-GR", 
            "en", 
            "en-AU", 
            "en-CA", 
            "en-GB", 
            "en-IE", 
            "en-IN", 
            "en-JO", 
            "en-MY", 
            "en-NZ", 
            "en-PH", 
            "en-SG", 
            "en-US", 
            "es", 
            "es-AR", 
            "es-BO", 
            "es-CL", 
            "es-CO", 
            "es-EC", 
            "es-ES", 
            "es-MX", 
            "es-PE", 
            "es-PY", 
            "es-US", 
            "es-UY", 
            "es-VE", 
            "fi", 
            "fi-FI", 
            "fr", 
            "fr-BE", 
            "fr-CA", 
            "fr-FR", 
            "hi", 
            "hi-IN", 
            "id", 
            "id-ID", 
            "it", 
            "it-IT", 
            "ja", 
            "ja-JP", 
            "ko", 
            "ko-KR", 
            "ms", 
            "ms-MY", 
            "nb", 
            "nb-NO", 
            "nl", 
            "nl-BE", 
            "nl-NL", 
            "pl", 
            "pl-PL", 
            "pt", 
            "pt-BR", 
            "ro", 
            "ro-RO", 
            "ru", 
            "ru-RU", 
            "sv", 
            "sv-SE", 
            "th", 
            "th-TH", 
            "tr", 
            "tr-TR", 
            "vi", 
            "vi-VN", 
            "zh-Hans", 
            "zh-Hans-CN", 
            "zh-Hant", 
            "zh-Hant-HK", 
            "zh-Hant-TW"
        ], 
        "supersedes": [
            "datatype-date-format"
        ], 
        "use": [
            "datatype-date-parse", 
            "datatype-date-format"
        ]
    }, 
    "datatype-date-format": {}, 
    "datatype-date-parse": {}, 
    "datatype-number": {
        "use": [
            "datatype-number-parse", 
            "datatype-number-format"
        ]
    }, 
    "datatype-number-format": {}, 
    "datatype-number-parse": {}, 
    "datatype-xml": {
        "use": [
            "datatype-xml-parse", 
            "datatype-xml-format"
        ]
    }, 
    "datatype-xml-format": {}, 
    "datatype-xml-parse": {}, 
    "dd": {
        "use": [
            "dd-ddm-base", 
            "dd-ddm", 
            "dd-ddm-drop", 
            "dd-drag", 
            "dd-proxy", 
            "dd-constrain", 
            "dd-drop", 
            "dd-scroll", 
            "dd-delegate"
        ]
    }, 
    "dd-constrain": {
        "requires": [
            "dd-drag"
        ]
    }, 
    "dd-ddm": {
        "requires": [
            "dd-ddm-base", 
            "event-resize"
        ]
    }, 
    "dd-ddm-base": {
        "requires": [
            "node", 
            "base", 
            "yui-throttle", 
            "classnamemanager"
        ]
    }, 
    "dd-ddm-drop": {
        "requires": [
            "dd-ddm"
        ]
    }, 
    "dd-delegate": {
        "requires": [
            "dd-drag", 
            "dd-drop-plugin", 
            "event-mouseenter"
        ]
    }, 
    "dd-drag": {
        "requires": [
            "dd-ddm-base"
        ]
    }, 
    "dd-drop": {
        "requires": [
            "dd-drag", 
            "dd-ddm-drop"
        ]
    }, 
    "dd-drop-plugin": {
        "requires": [
            "dd-drop"
        ]
    }, 
    "dd-gestures": {
        "condition": {
            "name": "dd-gestures", 
            "test": function(Y) {
    return (Y.config.win && ('ontouchstart' in Y.config.win && !Y.UA.chrome));
}, 
            "trigger": "dd-drag"
        }, 
        "requires": [
            "dd-drag", 
            "event-synthetic", 
            "event-gestures"
        ]
    }, 
    "dd-plugin": {
        "optional": [
            "dd-constrain", 
            "dd-proxy"
        ], 
        "requires": [
            "dd-drag"
        ]
    }, 
    "dd-proxy": {
        "requires": [
            "dd-drag"
        ]
    }, 
    "dd-scroll": {
        "requires": [
            "dd-drag"
        ]
    }, 
    "dial": {
        "lang": [
            "en", 
            "es"
        ], 
        "requires": [
            "widget", 
            "dd-drag", 
            "substitute", 
            "event-mouseenter", 
            "event-move", 
            "transition", 
            "intl"
        ], 
        "skinnable": true
    }, 
    "dom": {
        "use": [
            "dom-core", 
            "dom-base", 
            "dom-attrs", 
            "dom-create", 
            "dom-class", 
            "dom-size", 
            "dom-screen", 
            "dom-style", 
            "selector-native", 
            "selector"
        ]
    }, 
    "dom-attrs": {
        "requires": [
            "dom-core"
        ]
    }, 
    "dom-base": {
        "requires": [
            "dom-core", 
            "dom-attrs", 
            "dom-create", 
            "dom-class", 
            "dom-size"
        ]
    }, 
    "dom-class": {
        "requires": [
            "dom-core"
        ]
    }, 
    "dom-core": {
        "requires": [
            "oop", 
            "features"
        ]
    }, 
    "dom-create": {
        "requires": [
            "dom-core"
        ]
    }, 
    "dom-deprecated": {
        "requires": [
            "dom-core"
        ]
    }, 
    "dom-screen": {
        "requires": [
            "dom-core", 
            "dom-style"
        ]
    }, 
    "dom-size": {
        "requires": [
            "dom-core"
        ]
    }, 
    "dom-style": {
        "requires": [
            "dom-core"
        ]
    }, 
    "dom-style-ie": {
        "condition": {
            "name": "dom-style-ie", 
            "test": function (Y) {

    var testFeature = Y.Features.test,
        addFeature = Y.Features.add,
        WINDOW = Y.config.win,
        DOCUMENT = Y.config.doc,
        DOCUMENT_ELEMENT = 'documentElement',
        ret = false;

    addFeature('style', 'computedStyle', {
        test: function() {
            return WINDOW && 'getComputedStyle' in WINDOW;
        }
    });

    addFeature('style', 'opacity', {
        test: function() {
            return DOCUMENT && 'opacity' in DOCUMENT[DOCUMENT_ELEMENT].style;
        }
    });

    ret =  (!testFeature('style', 'opacity') &&
            !testFeature('style', 'computedStyle'));

    return ret;
}, 
            "trigger": "dom-style"
        }, 
        "requires": [
            "dom-style"
        ]
    }, 
    "dump": {}, 
    "editor": {
        "use": [
            "frame", 
            "selection", 
            "exec-command", 
            "editor-base", 
            "editor-para", 
            "editor-br", 
            "editor-bidi", 
            "editor-tab", 
            "createlink-base"
        ]
    }, 
    "editor-base": {
        "requires": [
            "base", 
            "frame", 
            "node", 
            "exec-command", 
            "selection"
        ]
    }, 
    "editor-bidi": {
        "requires": [
            "editor-base"
        ]
    }, 
    "editor-br": {
        "requires": [
            "editor-base"
        ]
    }, 
    "editor-lists": {
        "requires": [
            "editor-base"
        ]
    }, 
    "editor-para": {
        "requires": [
            "editor-base"
        ]
    }, 
    "editor-tab": {
        "requires": [
            "editor-base"
        ]
    }, 
    "escape": {}, 
    "event": {
        "after": [
            "node-base"
        ], 
        "use": [
            "event-base", 
            "event-delegate", 
            "event-synthetic", 
            "event-mousewheel", 
            "event-mouseenter", 
            "event-key", 
            "event-focus", 
            "event-resize", 
            "event-hover"
        ]
    }, 
    "event-base": {
        "after": [
            "node-base"
        ], 
        "requires": [
            "event-custom-base"
        ]
    }, 
    "event-base-ie": {
        "after": [
            "event-base"
        ], 
        "condition": {
            "name": "event-base-ie", 
            "test": function(Y) {
    var imp = Y.config.doc && Y.config.doc.implementation;
    return (imp && (!imp.hasFeature('Events', '2.0')));
}, 
            "trigger": "node-base"
        }, 
        "requires": [
            "node-base"
        ]
    }, 
    "event-custom": {
        "use": [
            "event-custom-base", 
            "event-custom-complex"
        ]
    }, 
    "event-custom-base": {
        "requires": [
            "oop"
        ]
    }, 
    "event-custom-complex": {
        "requires": [
            "event-custom-base"
        ]
    }, 
    "event-delegate": {
        "requires": [
            "node-base"
        ]
    }, 
    "event-flick": {
        "requires": [
            "node-base", 
            "event-touch", 
            "event-synthetic"
        ]
    }, 
    "event-focus": {
        "requires": [
            "event-synthetic"
        ]
    }, 
    "event-gestures": {
        "use": [
            "event-flick", 
            "event-move"
        ]
    }, 
    "event-hover": {
        "requires": [
            "event-mouseenter"
        ]
    }, 
    "event-key": {
        "requires": [
            "event-synthetic"
        ]
    }, 
    "event-mouseenter": {
        "requires": [
            "event-synthetic"
        ]
    }, 
    "event-mousewheel": {
        "requires": [
            "node-base"
        ]
    }, 
    "event-move": {
        "requires": [
            "node-base", 
            "event-touch", 
            "event-synthetic"
        ]
    }, 
    "event-resize": {
        "requires": [
            "node-base"
        ]
    }, 
    "event-simulate": {
        "requires": [
            "event-base"
        ]
    }, 
    "event-synthetic": {
        "requires": [
            "node-base", 
            "event-custom-complex"
        ]
    }, 
    "event-touch": {
        "requires": [
            "node-base"
        ]
    }, 
    "event-valuechange": {
        "requires": [
            "event-focus", 
            "event-synthetic"
        ]
    }, 
    "exec-command": {
        "requires": [
            "frame"
        ]
    }, 
    "features": {
        "requires": [
            "yui-base"
        ]
    }, 
    "frame": {
        "requires": [
            "base", 
            "node", 
            "selector-css3", 
            "substitute", 
            "yui-throttle"
        ]
    }, 
    "get": {
        "requires": [
            "yui-base"
        ]
    }, 
    "highlight": {
        "use": [
            "highlight-base", 
            "highlight-accentfold"
        ]
    }, 
    "highlight-accentfold": {
        "requires": [
            "highlight-base", 
            "text-accentfold"
        ]
    }, 
    "highlight-base": {
        "requires": [
            "array-extras", 
            "escape", 
            "text-wordbreak"
        ]
    }, 
    "history": {
        "use": [
            "history-base", 
            "history-hash", 
            "history-hash-ie", 
            "history-html5"
        ]
    }, 
    "history-base": {
        "requires": [
            "event-custom-complex"
        ]
    }, 
    "history-hash": {
        "after": [
            "history-html5"
        ], 
        "requires": [
            "event-synthetic", 
            "history-base", 
            "yui-later"
        ]
    }, 
    "history-hash-ie": {
        "condition": {
            "name": "history-hash-ie", 
            "test": function (Y) {
    var docMode = Y.config.doc && Y.config.doc.documentMode;

    return Y.UA.ie && (!('onhashchange' in Y.config.win) ||
            !docMode || docMode < 8);
}, 
            "trigger": "history-hash"
        }, 
        "requires": [
            "history-hash", 
            "node-base"
        ]
    }, 
    "history-html5": {
        "optional": [
            "json"
        ], 
        "requires": [
            "event-base", 
            "history-base", 
            "node-base"
        ]
    }, 
    "imageloader": {
        "requires": [
            "base-base", 
            "node-style", 
            "node-screen"
        ]
    }, 
    "intl": {
        "requires": [
            "intl-base", 
            "event-custom"
        ]
    }, 
    "intl-base": {
        "requires": [
            "yui-base"
        ]
    }, 
    "io": {
        "use": [
            "io-base", 
            "io-xdr", 
            "io-form", 
            "io-upload-iframe", 
            "io-queue"
        ]
    }, 
    "io-base": {
        "requires": [
            "event-custom-base", 
            "querystring-stringify-simple"
        ]
    }, 
    "io-form": {
        "requires": [
            "io-base", 
            "node-base"
        ]
    }, 
    "io-queue": {
        "requires": [
            "io-base", 
            "queue-promote"
        ]
    }, 
    "io-upload-iframe": {
        "requires": [
            "io-base", 
            "node-base"
        ]
    }, 
    "io-xdr": {
        "requires": [
            "io-base", 
            "datatype-xml"
        ]
    }, 
    "json": {
        "use": [
            "json-parse", 
            "json-stringify"
        ]
    }, 
    "json-parse": {}, 
    "json-stringify": {}, 
    "jsonp": {
        "requires": [
            "get", 
            "oop"
        ]
    }, 
    "jsonp-url": {
        "requires": [
            "jsonp"
        ]
    }, 
    "loader": {
        "use": [
            "loader-base", 
            "loader-rollup", 
            "loader-yui3"
        ]
    }, 
    "loader-base": {
        "requires": [
            "get"
        ]
    }, 
    "loader-rollup": {
        "requires": [
            "loader-base"
        ]
    }, 
    "loader-yui3": {
        "requires": [
            "loader-base"
        ]
    }, 
    "model": {
        "requires": [
            "base-build", 
            "escape", 
            "json-parse"
        ]
    }, 
    "model-list": {
        "requires": [
            "array-extras", 
            "array-invoke", 
            "arraylist", 
            "base-build", 
            "json-parse", 
            "model"
        ]
    }, 
    "node": {
        "use": [
            "node-base", 
            "node-event-delegate", 
            "node-pluginhost", 
            "node-screen", 
            "node-style"
        ]
    }, 
    "node-base": {
        "requires": [
            "dom-base", 
            "selector-css2", 
            "event-base"
        ]
    }, 
    "node-deprecated": {
        "requires": [
            "node-base"
        ]
    }, 
    "node-event-delegate": {
        "requires": [
            "node-base", 
            "event-delegate"
        ]
    }, 
    "node-event-simulate": {
        "requires": [
            "node-base", 
            "event-simulate"
        ]
    }, 
    "node-flick": {
        "requires": [
            "classnamemanager", 
            "transition", 
            "event-flick", 
            "plugin"
        ], 
        "skinnable": true
    }, 
    "node-focusmanager": {
        "requires": [
            "attribute", 
            "node", 
            "plugin", 
            "node-event-simulate", 
            "event-key", 
            "event-focus"
        ]
    }, 
    "node-load": {
        "requires": [
            "node-base", 
            "io-base"
        ]
    }, 
    "node-menunav": {
        "requires": [
            "node", 
            "classnamemanager", 
            "plugin", 
            "node-focusmanager"
        ], 
        "skinnable": true
    }, 
    "node-pluginhost": {
        "requires": [
            "node-base", 
            "pluginhost"
        ]
    }, 
    "node-screen": {
        "requires": [
            "dom-screen", 
            "node-base"
        ]
    }, 
    "node-style": {
        "requires": [
            "dom-style", 
            "node-base"
        ]
    }, 
    "oop": {
        "requires": [
            "yui-base"
        ]
    }, 
    "overlay": {
        "requires": [
            "widget", 
            "widget-stdmod", 
            "widget-position", 
            "widget-position-align", 
            "widget-stack", 
            "widget-position-constrain"
        ], 
        "skinnable": true
    }, 
    "plugin": {
        "requires": [
            "base-base"
        ]
    }, 
    "pluginattr": {
        "requires": [
            "plugin"
        ]
    }, 
    "pluginhost": {
        "use": [
            "pluginhost-base", 
            "pluginhost-config"
        ]
    }, 
    "pluginhost-base": {
        "requires": [
            "yui-base"
        ]
    }, 
    "pluginhost-config": {
        "requires": [
            "pluginhost-base"
        ]
    }, 
    "profiler": {
        "requires": [
            "yui-base"
        ]
    }, 
    "querystring": {
        "use": [
            "querystring-parse", 
            "querystring-stringify"
        ]
    }, 
    "querystring-parse": {
        "requires": [
            "yui-base", 
            "array-extras"
        ]
    }, 
    "querystring-parse-simple": {
        "requires": [
            "yui-base"
        ]
    }, 
    "querystring-stringify": {
        "requires": [
            "yui-base"
        ]
    }, 
    "querystring-stringify-simple": {
        "requires": [
            "yui-base"
        ]
    }, 
    "queue-promote": {
        "requires": [
            "yui-base"
        ]
    }, 
    "range-slider": {
        "requires": [
            "slider-base", 
            "slider-value-range", 
            "clickable-rail"
        ]
    }, 
    "recordset": {
        "use": [
            "recordset-base", 
            "recordset-sort", 
            "recordset-filter", 
            "recordset-indexer"
        ]
    }, 
    "recordset-base": {
        "requires": [
            "base", 
            "arraylist"
        ]
    }, 
    "recordset-filter": {
        "requires": [
            "recordset-base", 
            "array-extras", 
            "plugin"
        ]
    }, 
    "recordset-indexer": {
        "requires": [
            "recordset-base", 
            "plugin"
        ]
    }, 
    "recordset-sort": {
        "requires": [
            "arraysort", 
            "recordset-base", 
            "plugin"
        ]
    }, 
    "resize": {
        "use": [
            "resize-base", 
            "resize-proxy", 
            "resize-constrain"
        ]
    }, 
    "resize-base": {
        "requires": [
            "base", 
            "widget", 
            "substitute", 
            "event", 
            "oop", 
            "dd-drag", 
            "dd-delegate", 
            "dd-drop"
        ], 
        "skinnable": true
    }, 
    "resize-constrain": {
        "requires": [
            "plugin", 
            "resize-base"
        ]
    }, 
    "resize-plugin": {
        "optional": [
            "resize-constrain"
        ], 
        "requires": [
            "resize-base", 
            "plugin"
        ]
    }, 
    "resize-proxy": {
        "requires": [
            "plugin", 
            "resize-base"
        ]
    }, 
    "rls": {
        "requires": [
            "get", 
            "features"
        ]
    }, 
    "scrollview": {
        "requires": [
            "scrollview-base", 
            "scrollview-scrollbars"
        ]
    }, 
    "scrollview-base": {
        "requires": [
            "widget", 
            "event-gestures", 
            "transition"
        ], 
        "skinnable": true
    }, 
    "scrollview-base-ie": {
        "condition": {
            "name": "scrollview-base-ie", 
            "trigger": "scrollview-base", 
            "ua": "ie"
        }, 
        "requires": [
            "scrollview-base"
        ]
    }, 
    "scrollview-paginator": {
        "requires": [
            "plugin"
        ]
    }, 
    "scrollview-scrollbars": {
        "requires": [
            "classnamemanager", 
            "transition", 
            "plugin"
        ], 
        "skinnable": true
    }, 
    "selection": {
        "requires": [
            "node"
        ]
    }, 
    "selector": {
        "requires": [
            "selector-native"
        ]
    }, 
    "selector-css2": {
        "condition": {
            "name": "selector-css2", 
            "test": function (Y) {
    var DOCUMENT = Y.config.doc,
        ret = DOCUMENT && !('querySelectorAll' in DOCUMENT);

    return ret;
}, 
            "trigger": "selector"
        }, 
        "requires": [
            "selector-native"
        ]
    }, 
    "selector-css3": {
        "requires": [
            "selector-native", 
            "selector-css2"
        ]
    }, 
    "selector-native": {
        "requires": [
            "dom-core"
        ]
    }, 
    "shim-plugin": {
        "requires": [
            "node-style", 
            "node-pluginhost"
        ]
    }, 
    "slider": {
        "use": [
            "slider-base", 
            "slider-value-range", 
            "clickable-rail", 
            "range-slider"
        ]
    }, 
    "slider-base": {
        "requires": [
            "widget", 
            "dd-constrain", 
            "substitute"
        ], 
        "skinnable": true
    }, 
    "slider-value-range": {
        "requires": [
            "slider-base"
        ]
    }, 
    "sortable": {
        "requires": [
            "dd-delegate", 
            "dd-drop-plugin", 
            "dd-proxy"
        ]
    }, 
    "sortable-scroll": {
        "requires": [
            "dd-scroll", 
            "sortable"
        ]
    }, 
    "stylesheet": {}, 
    "substitute": {
        "optional": [
            "dump"
        ]
    }, 
    "swf": {
        "requires": [
            "event-custom", 
            "node", 
            "swfdetect"
        ]
    }, 
    "swfdetect": {}, 
    "tabview": {
        "requires": [
            "widget", 
            "widget-parent", 
            "widget-child", 
            "tabview-base", 
            "node-pluginhost", 
            "node-focusmanager"
        ], 
        "skinnable": true
    }, 
    "tabview-base": {
        "requires": [
            "node-event-delegate", 
            "classnamemanager", 
            "skin-sam-tabview"
        ]
    }, 
    "tabview-plugin": {
        "requires": [
            "tabview-base"
        ]
    }, 
    "test": {
        "requires": [
            "event-simulate", 
            "event-custom", 
            "substitute", 
            "json-stringify"
        ], 
        "skinnable": true
    }, 
    "text": {
        "use": [
            "text-accentfold", 
            "text-wordbreak"
        ]
    }, 
    "text-accentfold": {
        "requires": [
            "array-extras", 
            "text-data-accentfold"
        ]
    }, 
    "text-data-accentfold": {}, 
    "text-data-wordbreak": {}, 
    "text-wordbreak": {
        "requires": [
            "array-extras", 
            "text-data-wordbreak"
        ]
    }, 
    "transition": {
        "use": [
            "transition-native", 
            "transition-timer"
        ]
    }, 
    "transition-native": {
        "requires": [
            "node-base"
        ]
    }, 
    "transition-timer": {
        "requires": [
            "transition-native", 
            "node-style"
        ]
    }, 
    "uploader": {
        "requires": [
            "event-custom", 
            "node", 
            "base", 
            "swf"
        ]
    }, 
    "view": {
        "requires": [
            "base-build", 
            "node-event-delegate"
        ]
    }, 
    "widget": {
        "skinnable": true, 
        "use": [
            "widget-base", 
            "widget-htmlparser", 
            "widget-uievents", 
            "widget-skin"
        ]
    }, 
    "widget-anim": {
        "requires": [
            "plugin", 
            "anim-base", 
            "widget"
        ]
    }, 
    "widget-base": {
        "requires": [
            "attribute", 
            "event-focus", 
            "base-base", 
            "base-pluginhost", 
            "node-base", 
            "node-style", 
            "classnamemanager"
        ]
    }, 
    "widget-base-ie": {
        "condition": {
            "name": "widget-base-ie", 
            "trigger": "widget-base", 
            "ua": "ie"
        }, 
        "requires": [
            "widget-base"
        ]
    }, 
    "widget-child": {
        "requires": [
            "base-build", 
            "widget"
        ]
    }, 
    "widget-htmlparser": {
        "requires": [
            "widget-base"
        ]
    }, 
    "widget-locale": {
        "requires": [
            "widget-base"
        ]
    }, 
    "widget-modality": {
        "requires": [
            "widget", 
            "plugin", 
            "gallery-outside-events", 
            "base-build"
        ], 
        "skinnable": false
    }, 
    "widget-parent": {
        "requires": [
            "base-build", 
            "arraylist", 
            "widget"
        ]
    }, 
    "widget-position": {
        "requires": [
            "base-build", 
            "node-screen", 
            "widget"
        ]
    }, 
    "widget-position-align": {
        "requires": [
            "widget-position"
        ]
    }, 
    "widget-position-constrain": {
        "requires": [
            "widget-position"
        ]
    }, 
    "widget-skin": {
        "requires": [
            "widget-base"
        ]
    }, 
    "widget-stack": {
        "requires": [
            "base-build", 
            "widget"
        ], 
        "skinnable": true
    }, 
    "widget-stdmod": {
        "requires": [
            "base-build", 
            "widget"
        ]
    }, 
    "widget-uievents": {
        "requires": [
            "widget-base", 
            "node-event-delegate"
        ]
    }, 
    "yql": {
        "requires": [
            "jsonp", 
            "jsonp-url"
        ]
    }, 
    "yui": {
        "use": [
            "yui-base", 
            "get", 
            "features", 
            "intl-base", 
            "yui-log", 
            "yui-later", 
            "loader-base", 
            "loader-rollup", 
            "loader-yui3"
        ]
    }, 
    "yui-base": {}, 
    "yui-later": {
        "requires": [
            "yui-base"
        ]
    }, 
    "yui-log": {
        "requires": [
            "yui-base"
        ]
    }, 
    "yui-rls": {
        "use": [
            "yui-base", 
            "get", 
            "features", 
            "intl-base", 
            "rls", 
            "yui-log", 
            "yui-later"
        ]
    }, 
    "yui-throttle": {
        "requires": [
            "yui-base"
        ]
    }
};
YUI.Env[Y.version].md5 = '9a1cc3af39c43bf18c855198fd582d90';


}, '@VERSION@' ,{requires:['loader-base']});
