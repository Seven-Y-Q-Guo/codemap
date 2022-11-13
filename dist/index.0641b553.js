// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"7Aums":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "fe4256060641b553";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"bNKaB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _mindElixir = require("mind-elixir");
var _mindElixirDefault = parcelHelpers.interopDefault(_mindElixir);
var _micromodal = require("micromodal");
var _micromodalDefault = parcelHelpers.interopDefault(_micromodal);
var _uuid = require("uuid");
var _path = require("path");
var _pathDefault = parcelHelpers.interopDefault(_path);
var _fetchJSON = require("./fetchJSON");
var _fetchJSONDefault = parcelHelpers.interopDefault(_fetchJSON);
class App {
    constructor(id){
        this.id = id;
        this.rootDOM = document.querySelector(`#${id}`);
        this.mind = null;
    }
    checkLogin = async (success)=>{
        const res = await (0, _fetchJSONDefault.default)("https://api.github.com/user");
        if (res.login) {
            (0, _micromodalDefault.default).close("modal-1");
            success();
        }
    };
    onSelectNode = (node)=>{
        if (!node.path) return;
        if (node.path.indexOf(".js") > -1) this.generateTree(node.path);
        else {
            this.generateTree(node.path + ".js");
            this.generateTree(node.path + "/index.js");
        }
    };
    generateTree = async (url)=>{
        let node = {
            id: (0, _uuid.v4)(),
            topic: "modules",
            children: [
                {
                    id: (0, _uuid.v4)(),
                    topic: "external modules",
                    children: []
                },
                {
                    id: (0, _uuid.v4)(),
                    topic: "internal modules",
                    children: []
                }
            ]
        };
        const res = await (0, _fetchJSONDefault.default)(url);
        const code = atob(res.content);
        [
            ...code.matchAll(/from '(.+?)'/g)
        ].forEach((item)=>{
            const child = {
                id: (0, _uuid.v4)(),
                topic: item[1],
                children: [],
                path: (0, _pathDefault.default).resolve((0, _pathDefault.default).dirname(url), item[1]).slice(1)
            };
            if (item[1].charAt(0) === ".") node.children[1].children.push(child);
            else node.children[0].children.push(child);
        });
        this.mind.addChild(null, node);
    };
    onSuccess = ()=>{
        this.rootDOM.classList.remove("hidden");
        const mind = new (0, _mindElixirDefault.default)({
            el: `#${this.id}`
        });
        const root = {
            nodeData: {
                root: true,
                id: (0, _uuid.v4)(),
                topic: "react",
                children: [],
                path: "https://api.github.com/repos/facebook/react/contents/packages/react/index.js"
            }
        };
        this.mind = mind;
        mind.init(root);
        mind.bus.addListener("selectNode", this.onSelectNode);
    };
    onLogin = (e)=>{
        if (e.target.classList.contains("login")) {
            localStorage.setItem("codemapToken", document.querySelector("#token").value);
            this.checkLogin(this.onSuccess);
        }
    };
    init() {
        (0, _micromodalDefault.default).show("modal-1");
        document.body.addEventListener("click", this.onLogin);
    }
}
const app = new App("map");
app.init();

},{"mind-elixir":"9j5LO","micromodal":"cjhRo","uuid":"j4KJi","path":"loE3o","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./fetchJSON":"kegop"}],"9j5LO":[function(require,module,exports) {
!function(e, t) {
    module.exports = t();
}(self, function() {
    return (()=>{
        var e = {
            74: (e, t, n)=>{
                "use strict";
                n.d(t, {
                    Z: ()=>m
                });
                var i = n(81), o = n.n(i), s = n(645), r = n.n(s), a = n(667), l = n.n(a), c = new URL(n(848), n.b), d = new URL(n(295), n.b), h = r()(o()), p = l()(c), u = l()(d);
                h.push([
                    e.id,
                    ".mind-elixir {\n  position: relative;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, PingFang SC, Microsoft YaHei, Source Han Sans SC, Noto Sans CJK SC, WenQuanYi Micro Hei, sans-serif;\n}\n.mind-elixir .hyper-link {\n  text-decoration: none;\n}\n.map-container {\n  user-select: none;\n  height: 100%;\n  width: 100%;\n  overflow: scroll;\n  font-size: 15px;\n}\n.map-container::-webkit-scrollbar {\n  width: 0px;\n  height: 0px;\n}\n.map-container .focus-mode {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background: #fff;\n}\n.map-container .map-canvas {\n  height: 20000px;\n  width: 20000px;\n  position: relative;\n  user-select: none;\n  transition: all 0.3s;\n  transform: scale(1);\n  background: #f6f6f6;\n}\n.map-container .map-canvas .selected {\n  outline: 2px solid #4dc4ff;\n}\n.map-container .map-canvas root {\n  position: absolute;\n}\n.map-container .map-canvas root tpc {\n  display: block;\n  color: #ffffff;\n  padding: 10px 15px;\n  background-color: #00aaff;\n  border-radius: 5px;\n  font-size: 25px;\n  white-space: pre-wrap;\n}\n.map-container .map-canvas root tpc #input-box {\n  padding: 10px 15px;\n}\n.map-container .box > grp {\n  position: absolute;\n}\n.map-container .box > grp > t > tpc {\n  background-color: #ffffff;\n  border: 1px solid #444444;\n  border-radius: 5px;\n  color: #735c45;\n  padding: 8px 10px;\n  margin: 0;\n}\n.map-container .box > grp > t > tpc #input-box {\n  padding: 8px 10px;\n}\n.map-container .box .lhs {\n  direction: rtl;\n}\n.map-container .box .lhs tpc {\n  direction: ltr;\n}\n.map-container .box grp {\n  display: block;\n  pointer-events: none;\n}\n.map-container .box children,\n.map-container .box t {\n  display: inline-block;\n  vertical-align: middle;\n}\n.map-container .box t {\n  position: relative;\n  cursor: pointer;\n  padding: 0 15px;\n  margin-top: 10px;\n}\n.map-container .box t tpc {\n  position: relative;\n  display: block;\n  padding: 5px;\n  border-radius: 3px;\n  color: #666666;\n  pointer-events: all;\n  max-width: 800px;\n  white-space: pre-wrap;\n  line-height: 1.2;\n}\n.map-container .box t tpc #input-box {\n  padding: 5px;\n}\n.map-container .box t tpc .tags {\n  direction: ltr;\n}\n.map-container .box t tpc .tags span {\n  display: inline-block;\n  border-radius: 3px;\n  padding: 2px 4px;\n  background: #d6f0f8;\n  color: #276f86;\n  margin: 0px;\n  font-size: 12px;\n  height: 16px;\n  line-height: 16px;\n  margin-right: 3px;\n  margin-top: 2px;\n}\n.map-container .box t tpc .icons {\n  display: inline-block;\n  direction: ltr;\n  margin-right: 10px;\n}\n.map-container .box t tpc .insert-preview {\n  position: absolute;\n  width: 100%;\n  left: 0px;\n  z-index: 9;\n}\n.map-container .box t tpc .before {\n  height: 14px;\n  top: -14px;\n}\n.map-container .box t tpc .show {\n  background: #7ad5ff;\n  pointer-events: none;\n  opacity: 0.7;\n}\n.map-container .box t tpc .in {\n  height: 100%;\n  top: 0px;\n}\n.map-container .box t tpc .after {\n  height: 14px;\n  bottom: -14px;\n}\n.map-container .box t epd {\n  position: absolute;\n  height: 18px;\n  width: 18px;\n  background-image: url(" + p + ");\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  pointer-events: all;\n  z-index: 9;\n}\n.map-container .box t epd.minus {\n  background-image: url(" + u + ") !important;\n  transition: all 0.3s;\n  opacity: 0;\n}\n.map-container .box t epd.minus:hover {\n  opacity: 1;\n}\n.map-container .icon {\n  width: 1em;\n  height: 1em;\n  vertical-align: -0.15em;\n  fill: currentColor;\n  overflow: hidden;\n}\n.map-container .lines,\n.map-container .subLines,\n.map-container .topiclinks,\n.map-container .linkcontroller {\n  position: absolute;\n  height: 102%;\n  width: 100%;\n  top: 0;\n  left: 0;\n}\n.map-container .topiclinks,\n.map-container .linkcontroller {\n  pointer-events: none;\n}\n.map-container .topiclinks g,\n.map-container .linkcontroller g {\n  pointer-events: all;\n}\n.map-container .lines,\n.map-container .subLines {\n  pointer-events: none;\n  z-index: -1;\n}\n.map-container .topiclinks *,\n.map-container .linkcontroller * {\n  z-index: 100;\n}\n.map-container .topiclinks g {\n  cursor: pointer;\n}\n.down t,\n.down children {\n  display: block !important;\n}\n.down grp {\n  display: inline-block !important;\n}\n.circle {\n  position: absolute;\n  height: 10px;\n  width: 10px;\n  margin-top: -5px;\n  margin-left: -5px;\n  border-radius: 100%;\n  background: #aaa;\n  cursor: pointer;\n}\n#input-box {\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: #fff;\n  color: #666666;\n  width: max-content;\n  max-width: 800px;\n  z-index: 11;\n  direction: ltr;\n  user-select: auto;\n}\n",
                    ""
                ]);
                const m = h;
            },
            165: (e, t, n)=>{
                "use strict";
                n.d(t, {
                    Z: ()=>a
                });
                var i = n(81), o = n.n(i), s = n(645), r = n.n(s)()(o());
                r.push([
                    e.id,
                    "cmenu {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 99;\n}\ncmenu .menu-list {\n  position: fixed;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  font: 300 15px 'Roboto', sans-serif;\n  color: #333;\n  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.2);\n}\ncmenu .menu-list * {\n  transition: color 0.4s, background-color 0.4s;\n}\ncmenu .menu-list li {\n  min-width: 150px;\n  overflow: hidden;\n  white-space: nowrap;\n  padding: 6px 10px;\n  background-color: #fff;\n  border-bottom: 1px solid #ecf0f1;\n}\ncmenu .menu-list li a {\n  color: #333;\n  text-decoration: none;\n}\ncmenu .menu-list li.disabled {\n  color: #5e5e5e;\n  background-color: #f7f7f7;\n}\ncmenu .menu-list li.disabled:hover {\n  cursor: default;\n  background-color: #f7f7f7;\n}\ncmenu .menu-list li:hover {\n  cursor: pointer;\n  background-color: #ecf0f1;\n}\ncmenu .menu-list li:first-child {\n  border-radius: 5px 5px 0 0;\n}\ncmenu .menu-list li:last-child {\n  border-bottom: 0;\n  border-radius: 0 0 5px 5px;\n}\ncmenu .menu-list li span:last-child {\n  float: right;\n}\n",
                    ""
                ]);
                const a = r;
            },
            787: (e, t, n)=>{
                "use strict";
                n.d(t, {
                    Z: ()=>a
                });
                var i = n(81), o = n.n(i), s = n(645), r = n.n(s)()(o());
                r.push([
                    e.id,
                    "mmenu {\n  position: absolute;\n  left: 20px;\n  bottom: 70px;\n  z-index: 99;\n  margin: 0;\n  padding: 0;\n  color: #333;\n  border-radius: 5px;\n  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n}\nmmenu * {\n  transition: color 0.4s, background-color 0.4s;\n}\nmmenu div {\n  float: left;\n  text-align: center;\n  width: 30px;\n  overflow: hidden;\n  white-space: nowrap;\n  padding: 8px;\n  background-color: #fff;\n  border-bottom: 1px solid #ecf0f1;\n}\nmmenu div a {\n  color: #333;\n  text-decoration: none;\n}\nmmenu div.disabled {\n  color: #5e5e5e;\n  background-color: #f7f7f7;\n}\nmmenu div.disabled:hover {\n  cursor: default;\n  background-color: #f7f7f7;\n}\nmmenu div:hover {\n  cursor: pointer;\n  background-color: #ecf0f1;\n}\n",
                    ""
                ]);
                const a = r;
            },
            519: (e, t, n)=>{
                "use strict";
                n.d(t, {
                    Z: ()=>a
                });
                var i = n(81), o = n.n(i), s = n(645), r = n.n(s)()(o());
                r.push([
                    e.id,
                    "nmenu {\n  position: absolute;\n  right: 20px;\n  top: 20px;\n  background: #fff;\n  padding: 10px;\n  border-radius: 5px;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);\n  width: 240px;\n  box-sizing: border-box;\n  padding: 0 15px 15px;\n  transition: 0.3s all;\n}\nnmenu.close {\n  height: 30px;\n  width: 46px;\n  overflow: hidden;\n}\nnmenu .button-container {\n  padding: 3px 0;\n  direction: rtl;\n}\nnmenu #nm-tag {\n  margin-top: 20px;\n}\nnmenu .nm-fontsize-container {\n  display: flex;\n  justify-content: space-around;\n  margin-bottom: 20px;\n}\nnmenu .nm-fontsize-container div {\n  height: 36px;\n  width: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);\n  background-color: white;\n  color: tomato;\n  border-radius: 100%;\n}\nnmenu .nm-fontcolor-container {\n  margin-bottom: 10px;\n}\nnmenu input,\nnmenu textarea {\n  background: #f7f9fa;\n  border: 1px solid #dce2e6;\n  border-radius: 3px;\n  padding: 5px;\n  margin: 10px 0;\n  width: 100%;\n  box-sizing: border-box;\n}\nnmenu textarea {\n  resize: none;\n}\nnmenu .split6 {\n  display: inline-block;\n  width: 16.66%;\n  margin-bottom: 5px;\n}\nnmenu .palette {\n  border-radius: 100%;\n  width: 21px;\n  height: 21px;\n  border: 1px solid #edf1f2;\n  margin: auto;\n}\nnmenu .nmenu-selected,\nnmenu .palette:hover {\n  box-shadow: tomato 0 0 0 2px;\n  background-color: #c7e9fa;\n}\nnmenu .size-selected {\n  background-color: tomato !important;\n  border-color: tomato;\n  fill: white;\n  color: white;\n}\nnmenu .size-selected svg {\n  color: #fff;\n}\nnmenu .bof {\n  text-align: center;\n}\nnmenu .bof span {\n  display: inline-block;\n  font-size: 14px;\n  border-radius: 4px;\n  padding: 2px 5px;\n}\nnmenu .bof .selected {\n  background-color: tomato;\n  color: white;\n}\n",
                    ""
                ]);
                const a = r;
            },
            301: (e, t, n)=>{
                "use strict";
                n.d(t, {
                    Z: ()=>a
                });
                var i = n(81), o = n.n(i), s = n(645), r = n.n(s)()(o());
                r.push([
                    e.id,
                    "toolbar {\n  position: absolute;\n  background: #fff;\n  padding: 10px;\n  border-radius: 5px;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);\n}\ntoolbar span:active {\n  opacity: 0.5;\n}\n.rb {\n  right: 20px;\n  bottom: 20px;\n  font-family: iconfont;\n}\n.rb span + span {\n  margin-left: 10px;\n}\n.lt {\n  font-size: 20px;\n  left: 20px;\n  top: 20px;\n  width: 20px;\n}\n.lt span {\n  display: block;\n}\n.lt span + span {\n  margin-top: 10px;\n}\n",
                    ""
                ]);
                const a = r;
            },
            645: (e)=>{
                "use strict";
                e.exports = function(e) {
                    var t = [];
                    return t.toString = function() {
                        return this.map(function(t) {
                            var n = "", i = void 0 !== t[5];
                            return t[4] && (n += "@supports (".concat(t[4], ") {")), t[2] && (n += "@media ".concat(t[2], " {")), i && (n += "@layer".concat(t[5].length > 0 ? " ".concat(t[5]) : "", " {")), n += e(t), i && (n += "}"), t[2] && (n += "}"), t[4] && (n += "}"), n;
                        }).join("");
                    }, t.i = function(e, n, i, o, s) {
                        "string" == typeof e && (e = [
                            [
                                null,
                                e,
                                void 0
                            ]
                        ]);
                        var r = {};
                        if (i) for(var a = 0; a < this.length; a++){
                            var l = this[a][0];
                            null != l && (r[l] = !0);
                        }
                        for(var c = 0; c < e.length; c++){
                            var d = [].concat(e[c]);
                            i && r[d[0]] || (void 0 !== s && (void 0 === d[5] || (d[1] = "@layer".concat(d[5].length > 0 ? " ".concat(d[5]) : "", " {").concat(d[1], "}")), d[5] = s), n && (d[2] ? (d[1] = "@media ".concat(d[2], " {").concat(d[1], "}"), d[2] = n) : d[2] = n), o && (d[4] ? (d[1] = "@supports (".concat(d[4], ") {").concat(d[1], "}"), d[4] = o) : d[4] = "".concat(o)), t.push(d));
                        }
                    }, t;
                };
            },
            667: (e)=>{
                "use strict";
                e.exports = function(e, t) {
                    return t || (t = {}), e ? (e = String(e.__esModule ? e.default : e), /^['"].*['"]$/.test(e) && (e = e.slice(1, -1)), t.hash && (e += t.hash), /["'() \t\n]|(%20)/.test(e) || t.needQuotes ? '"'.concat(e.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : e) : e;
                };
            },
            81: (e)=>{
                "use strict";
                e.exports = function(e) {
                    return e[1];
                };
            },
            379: (e)=>{
                "use strict";
                var t = [];
                function n(e) {
                    for(var n = -1, i = 0; i < t.length; i++)if (t[i].identifier === e) {
                        n = i;
                        break;
                    }
                    return n;
                }
                function i(e, i) {
                    for(var s = {}, r = [], a = 0; a < e.length; a++){
                        var l = e[a], c = i.base ? l[0] + i.base : l[0], d = s[c] || 0, h = "".concat(c, " ").concat(d);
                        s[c] = d + 1;
                        var p = n(h), u = {
                            css: l[1],
                            media: l[2],
                            sourceMap: l[3],
                            supports: l[4],
                            layer: l[5]
                        };
                        if (-1 !== p) t[p].references++, t[p].updater(u);
                        else {
                            var m = o(u, i);
                            i.byIndex = a, t.splice(a, 0, {
                                identifier: h,
                                updater: m,
                                references: 1
                            });
                        }
                        r.push(h);
                    }
                    return r;
                }
                function o(e, t) {
                    var n = t.domAPI(t);
                    n.update(e);
                    return function(t) {
                        if (t) {
                            if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap && t.supports === e.supports && t.layer === e.layer) return;
                            n.update(e = t);
                        } else n.remove();
                    };
                }
                e.exports = function(e, o) {
                    var s = i(e = e || [], o = o || {});
                    return function(e) {
                        e = e || [];
                        for(var r = 0; r < s.length; r++){
                            var a = n(s[r]);
                            t[a].references--;
                        }
                        for(var l = i(e, o), c = 0; c < s.length; c++){
                            var d = n(s[c]);
                            0 === t[d].references && (t[d].updater(), t.splice(d, 1));
                        }
                        s = l;
                    };
                };
            },
            569: (e)=>{
                "use strict";
                var t = {};
                e.exports = function(e, n) {
                    var i = function(e) {
                        if (void 0 === t[e]) {
                            var n = document.querySelector(e);
                            if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
                                n = n.contentDocument.head;
                            } catch (e1) {
                                n = null;
                            }
                            t[e] = n;
                        }
                        return t[e];
                    }(e);
                    if (!i) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                    i.appendChild(n);
                };
            },
            216: (e)=>{
                "use strict";
                e.exports = function(e) {
                    var t = document.createElement("style");
                    return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
                };
            },
            565: (e, t, n)=>{
                "use strict";
                e.exports = function(e) {
                    var t = n.nc;
                    t && e.setAttribute("nonce", t);
                };
            },
            795: (e)=>{
                "use strict";
                e.exports = function(e) {
                    var t = e.insertStyleElement(e);
                    return {
                        update: function(n) {
                            !function(e, t, n) {
                                var i = "";
                                n.supports && (i += "@supports (".concat(n.supports, ") {")), n.media && (i += "@media ".concat(n.media, " {"));
                                var o = void 0 !== n.layer;
                                o && (i += "@layer".concat(n.layer.length > 0 ? " ".concat(n.layer) : "", " {")), i += n.css, o && (i += "}"), n.media && (i += "}"), n.supports && (i += "}");
                                var s = n.sourceMap;
                                s && "undefined" != typeof btoa && (i += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s)))), " */")), t.styleTagTransform(i, e, t.options);
                            }(t, e, n);
                        },
                        remove: function() {
                            !function(e) {
                                if (null === e.parentNode) return !1;
                                e.parentNode.removeChild(e);
                            }(t);
                        }
                    };
                };
            },
            589: (e)=>{
                "use strict";
                e.exports = function(e, t) {
                    if (t.styleSheet) t.styleSheet.cssText = e;
                    else {
                        for(; t.firstChild;)t.removeChild(t.firstChild);
                        t.appendChild(document.createTextNode(e));
                    }
                };
            },
            857: ()=>{
                !function(e) {
                    var t, n, i, o, s, r, a = '<svg><symbol id="icon-edit" viewBox="0 0 1024 1024"><path d="M423.765333 128a42.666667 42.666667 0 0 1 3.2 85.205333L423.765333 213.333333H234.666667a64 64 0 0 0-63.872 60.245334L170.666667 277.333333v512a64 64 0 0 0 60.245333 63.872L234.666667 853.333333h512a64 64 0 0 0 63.872-60.245333L810.666667 789.333333v-189.098666a42.666667 42.666667 0 0 1 85.205333-3.2l0.128 3.2V789.333333a149.333333 149.333333 0 0 1-144.213333 149.248L746.666667 938.666667h-512a149.333333 149.333333 0 0 1-149.248-144.213334L85.333333 789.333333v-512a149.333333 149.333333 0 0 1 144.213334-149.248L234.666667 128h189.098666z m324.949334-53.248a42.666667 42.666667 0 0 1 60.330666 0l150.869334 150.869333a42.666667 42.666667 0 0 1 0 60.330667l-329.386667 329.386667a42.666667 42.666667 0 0 1-29.44 12.458666l-153.386667 2.517334a42.666667 42.666667 0 0 1-43.349333-43.349334l2.56-153.386666a42.666667 42.666667 0 0 1 12.458667-29.44z m30.165333 90.496L491.946667 452.266667l-1.493334 91.989333 92.032-1.493333 286.976-286.976-90.538666-90.538667z"  ></path></symbol><symbol id="icon-rising" viewBox="0 0 1024 1024"><path d="M553.173333 803.84h-64l0.021334-474.581333-224.021334 224-45.269333-45.226667L521.6 206.293333l301.717333 301.696-45.269333 45.269334-224.853333-224.896v475.477333z"  ></path></symbol><symbol id="icon-falling" viewBox="0 0 1024 1024"><path d="M553.173333 238.314667h-64l0.021334 474.602666-224.021334-224-45.269333 45.226667L521.6 835.861333l301.717333-301.717333-45.269333-45.226667-224.853333 224.853334V238.336z"  ></path></symbol><symbol id="icon-shanchu2" viewBox="0 0 1024 1024"><path d="M516.60601807 107.93026734c-82.64382935 0-149.71865844 65.51751709-152.5729065 147.77160644H171.37136841c-21.40603638 0-38.92044068 17.38504028-38.92044068 38.92126465 0 21.40686036 17.38504028 38.92208862 38.92126466 38.92208862h42.94308471v435.40136719c0 81.73498536 55.39828492 148.55026245 123.90106201 148.55026245h348.99444581c68.37341309 0 123.90106201-66.42553711 123.901062-148.55026245V333.80477906h38.92126465c21.40686036 0 38.92126464-17.38586426 38.92126465-38.92208863 0-21.40686036-17.38504028-38.92126464-38.92126465-38.92126465H668.91854859C666.45321656 173.44860839 599.24902344 107.93109131 516.60601807 107.93109131z m-79.65939331 147.77160644c2.85424805-42.16442872 37.2354126-74.85809326 79.78875732-74.85809326s76.93450927 32.82302857 79.39984131 74.85809326H436.94662476z m-98.86047364 589.01165771c-24.2611084 0-50.98754883-31.13717651-50.98754883-75.76693725V333.80477906h450.97036744V769.33551026c0 44.50039673-26.72644043 75.76776123-50.98754884 75.76776122H338.08615112v-0.38973999z m0 0"  ></path><path d="M390.37063599 751.17263794c17.77313232 0 32.43411255-17.7739563 32.43411255-40.08883667V482.35504151c0-22.31488037-14.53079224-40.08966065-32.43411255-40.08966065-17.77478027 0-32.43493653 17.77478027-32.43493653 40.08966065v228.72875976c0 22.18469239 14.27124023 40.08883667 32.43493653 40.08883667z m117.41308594 0c17.7739563 0 32.43411255-17.7739563 32.43411255-40.08883667V482.35504151c0-22.31488037-14.53079224-40.08966065-32.43411255-40.08966065-17.7739563 0-32.43493653 17.77478027-32.43493653 40.08966065v228.72875976c0 22.18469239 14.66098023 40.08883667 32.43493653 40.08883667z m123.51049804 0c17.7739563 0 32.43493653-17.7739563 32.43493652-40.08883667V482.35504151c0-22.31488037-14.53079224-40.08966065-32.43493652-40.08966065-17.7739563 0-32.43411255 17.77478027-32.43411255 40.08966065v228.72875976c0 22.18469239 14.14105224 40.08883667 32.43411255 40.08883667z m0 0"  ></path></symbol><symbol id="icon-zijiedian" viewBox="0 0 1024 1024"><path d="M312.208 472c19.568-157.856 153.432-280 315.656-280 175.68 0 318.112 143.272 318.112 320S803.552 832 627.864 832c-162.224 0-296.08-122.144-315.656-280H120a40 40 0 0 1 0-80h192.208zM632 752c132.552 0 240-107.448 240-240 0-132.552-107.448-240-240-240-132.552 0-240 107.448-240 240 0 132.552 107.448 240 240 240z m-40-280v-80a40 40 0 0 1 80 0v80h80a40 40 0 0 1 0 80h-80v80a40 40 0 0 1-80 0v-80h-80a40 40 0 0 1 0-80h80z"  ></path></symbol><symbol id="icon-tongjijiedian-" viewBox="0 0 1024 1024"><path d="M803.84 131.626667H410.24A59.733333 59.733333 0 0 0 350.506667 192v45.226667H199.68a51.626667 51.626667 0 0 0-51.626667 51.626666v465.92a51.626667 51.626667 0 0 0 51.626667 51.626667h187.52v-55.466667h-162.133333a21.333333 21.333333 0 0 1-21.333334-21.333333V313.386667a21.333333 21.333333 0 0 1 21.333334-21.333334h125.653333v64a59.733333 59.733333 0 0 0 59.733333 59.733334h393.386667a59.733333 59.733333 0 0 0 59.733333-59.733334V192a59.733333 59.733333 0 0 0-59.733333-60.373333z m4.266667 224.64a4.266667 4.266667 0 0 1-4.266667 4.266666H410.24a4.266667 4.266667 0 0 1-4.266667-4.266666V192a4.266667 4.266667 0 0 1 4.266667-4.266667h393.6a4.266667 4.266667 0 0 1 4.266667 4.266667zM716.16 749.44h-81.28v-81.493333a27.733333 27.733333 0 0 0-55.466667 0v81.28h-81.493333a27.733333 27.733333 0 1 0 0 55.466666h81.28v81.28a27.733333 27.733333 0 1 0 55.466667 0v-81.066666h81.28a27.733333 27.733333 0 0 0 0-55.466667z"  ></path></symbol><symbol id="icon-close" viewBox="0 0 1024 1024"><path d="M557.312 513.248l265.28-263.904c12.544-12.48 12.608-32.704 0.128-45.248-12.512-12.576-32.704-12.608-45.248-0.128L512.128 467.904l-263.04-263.84c-12.448-12.48-32.704-12.544-45.248-0.064-12.512 12.48-12.544 32.736-0.064 45.28l262.976 263.776L201.6 776.8c-12.544 12.48-12.608 32.704-0.128 45.248a31.937 31.937 0 0 0 22.688 9.44c8.16 0 16.32-3.104 22.56-9.312l265.216-263.808 265.44 266.24c6.24 6.272 14.432 9.408 22.656 9.408a31.94 31.94 0 0 0 22.592-9.344c12.512-12.48 12.544-32.704 0.064-45.248L557.312 513.248z" fill="" ></path></symbol><symbol id="icon-menu" viewBox="0 0 1024 1024"><path d="M109.714 292.571h804.572c21.943 0 36.571-21.942 36.571-43.885 0-14.629-14.628-29.257-36.571-29.257H109.714c-21.943 0-36.571 14.628-36.571 36.571 0 14.629 14.628 36.571 36.571 36.571zM914.286 512H109.714c-21.943 0-36.571 14.629-36.571 36.571 0 14.629 14.628 36.572 36.571 36.572h804.572c21.943 0 36.571-21.943 36.571-43.886 0-14.628-14.628-29.257-36.571-29.257z m0 292.571H109.714c-21.943 0-36.571 14.629-36.571 36.572s14.628 36.571 36.571 36.571h804.572c21.943 0 36.571-21.943 36.571-36.571 0-21.943-14.628-36.572-36.571-36.572z"  ></path></symbol><symbol id="icon-right" viewBox="0 0 1024 1024"><path d="M385 560.69999999L385 738.9c0 36.90000001 26.4 68.5 61.3 68.5l150.2 0c1.5 0 3-0.1 4.5-0.3 10.2 38.7 45.5 67.3 87.5 67.3 50 0 90.5-40.5 90.5-90.5s-40.5-90.5-90.5-90.5c-42 0-77.3 28.6-87.5 67.39999999-1.4-0.3-2.9-0.4-4.5-0.39999999L446.3 760.4c-6.8 0-14.3-8.9-14.3-21.49999999l0-427.00000001c0-12.7 7.40000001-21.5 14.30000001-21.5l150.19999999 0c1.5 0 3-0.2 4.5-0.4 10.2 38.8 45.5 67.3 87.5 67.3 50 0 90.5-40.5 90.5-90.4 0-49.9-40.5-90.6-90.5-90.59999999-42 0-77.3 28.6-87.5 67.39999999-1.4-0.2-2.9-0.4-4.49999999-0.4L446.3 243.3c-34.80000001 0-61.3 31.6-61.3 68.50000001L385 513.7l-79.1 0c-10.4-38.5-45.49999999-67-87.4-67-50 0-90.5 40.5-90.5 90.5s40.5 90.5 90.5 90.5c41.79999999 0 77.00000001-28.4 87.4-67L385 560.69999999z" fill="#333333" ></path></symbol><symbol id="icon-left" viewBox="0 0 1024 1024"><path d="M639 463.30000001L639 285.1c0-36.90000001-26.4-68.5-61.3-68.5l-150.2 0c-1.5 0-3 0.1-4.5 0.3-10.2-38.7-45.5-67.3-87.5-67.3-50 0-90.5 40.5-90.5 90.5s40.5 90.5 90.5 90.5c42 0 77.3-28.6 87.5-67.39999999 1.4 0.3 2.9 0.4 4.5 0.39999999L577.7 263.6c6.8 0 14.3 8.9 14.3 21.49999999l0 427.00000001c0 12.7-7.40000001 21.5-14.30000001 21.5l-150.19999999 0c-1.5 0-3 0.2-4.5 0.4-10.2-38.8-45.5-67.3-87.5-67.3-50 0-90.5 40.5-90.5 90.4 0 49.9 40.5 90.6 90.5 90.59999999 42 0 77.3-28.6 87.5-67.39999999 1.4 0.2 2.9 0.4 4.49999999 0.4L577.7 780.7c34.80000001 0 61.3-31.6 61.3-68.50000001L639 510.3l79.1 0c10.4 38.5 45.49999999 67 87.4 67 50 0 90.5-40.5 90.5-90.5s-40.5-90.5-90.5-90.5c-41.79999999 0-77.00000001 28.4-87.4 67L639 463.30000001z" fill="#333333" ></path></symbol><symbol id="icon-side" viewBox="0 0 1024 1024"><path d="M851.91168 328.45312c-59.97056 0-108.6208 48.47104-108.91264 108.36992l-137.92768 38.4a109.14304 109.14304 0 0 0-63.46752-46.58688l1.39264-137.11872c47.29344-11.86816 82.31936-54.66624 82.31936-105.64096 0-60.15488-48.76288-108.91776-108.91776-108.91776s-108.91776 48.76288-108.91776 108.91776c0 49.18784 32.60928 90.75712 77.38368 104.27392l-1.41312 138.87488a109.19936 109.19936 0 0 0-63.50336 48.55808l-138.93632-39.48544 0.01024-0.72704c0-60.15488-48.76288-108.91776-108.91776-108.91776s-108.91776 48.75776-108.91776 108.91776c0 60.15488 48.76288 108.91264 108.91776 108.91264 39.3984 0 73.91232-20.92032 93.03552-52.2496l139.19232 39.552-0.00512 0.2304c0 25.8304 9.00096 49.5616 24.02816 68.23424l-90.14272 132.63872a108.7488 108.7488 0 0 0-34.2528-5.504c-60.15488 0-108.91776 48.768-108.91776 108.91776 0 60.16 48.76288 108.91776 108.91776 108.91776 60.16 0 108.92288-48.75776 108.92288-108.91776 0-27.14624-9.9328-51.968-26.36288-71.04l89.04704-131.03104a108.544 108.544 0 0 0 37.6832 6.70208 108.672 108.672 0 0 0 36.48512-6.272l93.13792 132.57216a108.48256 108.48256 0 0 0-24.69888 69.0688c0 60.16 48.768 108.92288 108.91776 108.92288 60.16 0 108.91776-48.76288 108.91776-108.92288 0-60.14976-48.75776-108.91776-108.91776-108.91776a108.80512 108.80512 0 0 0-36.69504 6.3488l-93.07136-132.48a108.48768 108.48768 0 0 0 24.79616-72.22784l136.09984-37.888c18.99008 31.93856 53.84192 53.3504 93.69088 53.3504 60.16 0 108.92288-48.75776 108.92288-108.91264-0.00512-60.15488-48.77312-108.92288-108.92288-108.92288z"  ></path></symbol><symbol id="icon-B" viewBox="0 0 1024 1024"><path d="M98.067692 65.457231H481.28c75.854769 0 132.411077 3.150769 169.668923 9.452307 37.336615 6.301538 70.656 19.534769 100.036923 39.620924 29.459692 20.007385 53.956923 46.710154 73.570462 80.029538 19.692308 33.398154 29.459692 70.734769 29.459692 112.167385 0 44.898462-12.130462 86.094769-36.233846 123.588923a224.886154 224.886154 0 0 1-98.461539 84.283077c58.368 17.092923 103.266462 46.08 134.695385 87.04 31.350154 40.96 47.025231 89.088 47.025231 144.462769 0 43.638154-10.082462 86.016-30.404923 127.212308-20.243692 41.196308-47.891692 74.043077-83.02277 98.697846-35.052308 24.654769-78.296615 39.778462-129.732923 45.449846-32.295385 3.465846-110.119385 5.671385-233.472 6.537846H98.067692V65.457231z m193.536 159.507692V446.621538h126.818462c75.460923 0 122.328615-1.024 140.603077-3.229538 33.083077-3.938462 59.155692-15.36 78.139077-34.343385 18.904615-18.904615 28.435692-43.874462 28.435692-74.830769 0-29.696-8.192-53.720615-24.497231-72.310154-16.384-18.510769-40.644923-29.696-72.940307-33.634461-19.140923-2.205538-74.279385-3.308308-165.415385-3.308308h-111.064615z m0 381.243077v256.315077h179.2c69.710769 0 113.979077-1.969231 132.726154-5.907692 28.750769-5.198769 52.145231-17.959385 70.262154-38.281847 18.116923-20.243692 27.096615-47.340308 27.096615-81.368615 0-28.750769-6.931692-53.169231-20.873846-73.255385a118.232615 118.232615 0 0 0-60.494769-43.795692c-26.387692-9.137231-83.574154-13.705846-171.638154-13.705846H291.603692z"  ></path></symbol><symbol id="icon-a" viewBox="0 0 1024 1024"><path d="M757.76 665.6q0 20.48 1.536 34.304t7.68 22.016 18.944 12.288 34.304 4.096q-3.072 25.6-15.36 44.032-11.264 16.384-33.28 29.696t-62.976 13.312q-11.264 0-20.48-0.512t-17.408-2.56l-6.144-2.048-1.024 0q-4.096-1.024-10.24-4.096-2.048-2.048-4.096-2.048-1.024-1.024-2.048-1.024-14.336-8.192-23.552-17.408t-14.336-17.408q-6.144-10.24-9.216-20.48-63.488 75.776-178.176 75.776-48.128 0-88.064-15.36t-69.12-44.032-45.056-68.096-15.872-88.576 16.896-89.088 47.616-67.584 74.24-42.496 96.768-14.848q48.128 0 88.576 17.408t66.048 49.152q0-8.192 0.512-16.384t0.512-15.36q0-71.68-39.936-104.448t-128-32.768q-43.008 0-84.992 6.656t-84.992 17.92q14.336-28.672 25.088-47.616t24.064-29.184q30.72-24.576 158.72-24.576 79.872 0 135.168 13.824t90.624 43.52 51.2 75.264 15.872 108.032l0 200.704zM487.424 743.424q50.176 0 79.872-33.28t29.696-95.744q0-61.44-28.672-93.696t-76.8-32.256q-52.224 0-82.944 33.28t-30.72 94.72q0 58.368 31.744 92.672t77.824 34.304z"  ></path></symbol><symbol id="icon-full" viewBox="0 0 1024 1024"><path d="M639.328 416c8.032 0 16.096-3.008 22.304-9.056l202.624-197.184-0.8 143.808c-0.096 17.696 14.144 32.096 31.808 32.192 0.064 0 0.128 0 0.192 0 17.6 0 31.904-14.208 32-31.808l1.248-222.208c0-0.672-0.352-1.248-0.384-1.92 0.032-0.512 0.288-0.896 0.288-1.408 0.032-17.664-14.272-32-31.968-32.032L671.552 96l-0.032 0c-17.664 0-31.968 14.304-32 31.968C639.488 145.632 653.824 160 671.488 160l151.872 0.224-206.368 200.8c-12.672 12.32-12.928 32.608-0.64 45.248C622.656 412.736 630.976 416 639.328 416z"  ></path><path d="M896.032 639.552 896.032 639.552c-17.696 0-32 14.304-32.032 31.968l-0.224 151.872-200.832-206.4c-12.32-12.64-32.576-12.96-45.248-0.64-12.672 12.352-12.928 32.608-0.64 45.248l197.184 202.624-143.808-0.8c-0.064 0-0.128 0-0.192 0-17.6 0-31.904 14.208-32 31.808-0.096 17.696 14.144 32.096 31.808 32.192l222.24 1.248c0.064 0 0.128 0 0.192 0 0.64 0 1.12-0.32 1.76-0.352 0.512 0.032 0.896 0.288 1.408 0.288l0.032 0c17.664 0 31.968-14.304 32-31.968L928 671.584C928.032 653.952 913.728 639.584 896.032 639.552z"  ></path><path d="M209.76 159.744l143.808 0.8c0.064 0 0.128 0 0.192 0 17.6 0 31.904-14.208 32-31.808 0.096-17.696-14.144-32.096-31.808-32.192L131.68 95.328c-0.064 0-0.128 0-0.192 0-0.672 0-1.248 0.352-1.888 0.384-0.448 0-0.8-0.256-1.248-0.256 0 0-0.032 0-0.032 0-17.664 0-31.968 14.304-32 31.968L96 352.448c-0.032 17.664 14.272 32 31.968 32.032 0 0 0.032 0 0.032 0 17.664 0 31.968-14.304 32-31.968l0.224-151.936 200.832 206.4c6.272 6.464 14.624 9.696 22.944 9.696 8.032 0 16.096-3.008 22.304-9.056 12.672-12.32 12.96-32.608 0.64-45.248L209.76 159.744z"  ></path><path d="M362.368 617.056l-202.624 197.184 0.8-143.808c0.096-17.696-14.144-32.096-31.808-32.192-0.064 0-0.128 0-0.192 0-17.6 0-31.904 14.208-32 31.808l-1.248 222.24c0 0.704 0.352 1.312 0.384 2.016 0 0.448-0.256 0.832-0.256 1.312-0.032 17.664 14.272 32 31.968 32.032L352.448 928c0 0 0.032 0 0.032 0 17.664 0 31.968-14.304 32-31.968s-14.272-32-31.968-32.032l-151.936-0.224 206.4-200.832c12.672-12.352 12.96-32.608 0.64-45.248S375.008 604.704 362.368 617.056z"  ></path></symbol><symbol id="icon-add" viewBox="0 0 1024 1024"><path d="M863.328 482.56l-317.344-1.12L545.984 162.816c0-17.664-14.336-32-32-32s-32 14.336-32 32l0 318.4L159.616 480.064c-0.032 0-0.064 0-0.096 0-17.632 0-31.936 14.24-32 31.904C127.424 529.632 141.728 544 159.392 544.064l322.592 1.152 0 319.168c0 17.696 14.336 32 32 32s32-14.304 32-32l0-318.944 317.088 1.12c0.064 0 0.096 0 0.128 0 17.632 0 31.936-14.24 32-31.904C895.264 496.992 880.96 482.624 863.328 482.56z"  ></path></symbol><symbol id="icon-move" viewBox="0 0 1024 1024"><path d="M863.744 544 163.424 544c-17.664 0-32-14.336-32-32s14.336-32 32-32l700.32 0c17.696 0 32 14.336 32 32S881.44 544 863.744 544z"  ></path></symbol><symbol id="icon-living" viewBox="0 0 1024 1024"><path d="M514.133333 488.533333m-106.666666 0a106.666667 106.666667 0 1 0 213.333333 0 106.666667 106.666667 0 1 0-213.333333 0Z" fill="#666666" ></path><path d="M512 64C264.533333 64 64 264.533333 64 512c0 236.8 183.466667 428.8 416 445.866667v-134.4c-53.333333-59.733333-200.533333-230.4-200.533333-334.933334 0-130.133333 104.533333-234.666667 234.666666-234.666666s234.666667 104.533333 234.666667 234.666666c0 61.866667-49.066667 153.6-145.066667 270.933334l-59.733333 68.266666V960C776.533333 942.933333 960 748.8 960 512c0-247.466667-200.533333-448-448-448z" fill="#666666" ></path></symbol></svg>', l = (l = document.getElementsByTagName("script"))[l.length - 1].getAttribute("data-injectcss");
                    if (l && !e.__iconfont__svg__cssinject__) {
                        e.__iconfont__svg__cssinject__ = !0;
                        try {
                            document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
                        } catch (e1) {
                            console;
                        }
                    }
                    function c() {
                        s || (s = !0, i());
                    }
                    t = function() {
                        var e, t, n, i;
                        (i = document.createElement("div")).innerHTML = a, a = null, (n = i.getElementsByTagName("svg")[0]) && (n.setAttribute("aria-hidden", "true"), n.style.position = "absolute", n.style.width = 0, n.style.height = 0, n.style.overflow = "hidden", e = n, (t = document.body).firstChild ? (i = e, (n = t.firstChild).parentNode.insertBefore(i, n)) : t.appendChild(e));
                    }, document.addEventListener ? ~[
                        "complete",
                        "loaded",
                        "interactive"
                    ].indexOf(document.readyState) ? setTimeout(t, 0) : (n = function() {
                        document.removeEventListener("DOMContentLoaded", n, !1), t();
                    }, document.addEventListener("DOMContentLoaded", n, !1)) : document.attachEvent && (i = t, o = e.document, s = !1, (r = function() {
                        try {
                            o.documentElement.doScroll("left");
                        } catch (e) {
                            return void setTimeout(r, 50);
                        }
                        c();
                    })(), o.onreadystatechange = function() {
                        "complete" == o.readyState && (o.onreadystatechange = null, c());
                    });
                }(window);
            },
            848: (e)=>{
                "use strict";
                e.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdD0iMTY1NjY1NDcxNzI0MiIgY2xhc3M9Imljb24iIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiIHZlcnNpb249IjEuMSIKICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+CiAgICA8cGF0aCBkPSJNNTEyIDc0LjY2NjY2N0MyNzAuOTMzMzMzIDc0LjY2NjY2NyA3NC42NjY2NjcgMjcwLjkzMzMzMyA3NC42NjY2NjcgNTEyUzI3MC45MzMzMzMgOTQ5LjMzMzMzMyA1MTIgOTQ5LjMzMzMzMyA5NDkuMzMzMzMzIDc1My4wNjY2NjcgOTQ5LjMzMzMzMyA1MTIgNzUzLjA2NjY2NyA3NC42NjY2NjcgNTEyIDc0LjY2NjY2N3oiIHN0cm9rZS13aWR0aD0iNTQiIHN0cm9rZT0nYmxhY2snIGZpbGw9J3doaXRlJyA+PC9wYXRoPgogICAgPHBhdGggZD0iTTY4Mi42NjY2NjcgNDgwaC0xMzguNjY2NjY3VjM0MS4zMzMzMzNjMC0xNy4wNjY2NjctMTQuOTMzMzMzLTMyLTMyLTMycy0zMiAxNC45MzMzMzMtMzIgMzJ2MTM4LjY2NjY2N0gzNDEuMzMzMzMzYy0xNy4wNjY2NjcgMC0zMiAxNC45MzMzMzMtMzIgMzJzMTQuOTMzMzMzIDMyIDMyIDMyaDEzOC42NjY2NjdWNjgyLjY2NjY2N2MwIDE3LjA2NjY2NyAxNC45MzMzMzMgMzIgMzIgMzJzMzItMTQuOTMzMzMzIDMyLTMydi0xMzguNjY2NjY3SDY4Mi42NjY2NjdjMTcuMDY2NjY3IDAgMzItMTQuOTMzMzMzIDMyLTMycy0xNC45MzMzMzMtMzItMzItMzJ6Ij48L3BhdGg+Cjwvc3ZnPg==";
            },
            295: (e)=>{
                "use strict";
                e.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdD0iMTY1NjY1NTU2NDk4NSIgY2xhc3M9Imljb24iIHZpZXdCb3g9IjAgMCAxMDI0IDEwMjQiIHZlcnNpb249IjEuMSIKICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+CiAgICA8cGF0aCBkPSJNNTEyIDc0LjY2NjY2N0MyNzAuOTMzMzMzIDc0LjY2NjY2NyA3NC42NjY2NjcgMjcwLjkzMzMzMyA3NC42NjY2NjcgNTEyUzI3MC45MzMzMzMgOTQ5LjMzMzMzMyA1MTIgOTQ5LjMzMzMzMyA5NDkuMzMzMzMzIDc1My4wNjY2NjcgOTQ5LjMzMzMzMyA1MTIgNzUzLjA2NjY2NyA3NC42NjY2NjcgNTEyIDc0LjY2NjY2N3oiIHN0cm9rZS13aWR0aD0iNTQiIHN0cm9rZT0nYmxhY2snIGZpbGw9J3doaXRlJyA+PC9wYXRoPgogICAgPHBhdGggZD0iTTY4Mi42NjY2NjcgNTQ0SDM0MS4zMzMzMzNjLTE3LjA2NjY2NyAwLTMyLTE0LjkzMzMzMy0zMi0zMnMxNC45MzMzMzMtMzIgMzItMzJoMzQxLjMzMzMzNGMxNy4wNjY2NjcgMCAzMiAxNC45MzMzMzMgMzIgMzJzLTE0LjkzMzMzMyAzMi0zMiAzMnoiPjwvcGF0aD4KPC9zdmc+";
            }
        }, t = {};
        function n(i) {
            var o = t[i];
            if (void 0 !== o) return o.exports;
            var s = t[i] = {
                id: i,
                exports: {}
            };
            return e[i](s, s.exports, n), s.exports;
        }
        n.m = e, n.n = (e)=>{
            var t = e && e.__esModule ? ()=>e.default : ()=>e;
            return n.d(t, {
                a: t
            }), t;
        }, n.d = (e, t)=>{
            for(var i in t)n.o(t, i) && !n.o(e, i) && Object.defineProperty(e, i, {
                enumerable: !0,
                get: t[i]
            });
        }, n.o = (e, t)=>Object.prototype.hasOwnProperty.call(e, t), n.b = document.baseURI || self.location.href;
        var i = {};
        return (()=>{
            "use strict";
            n.d(i, {
                default: ()=>be
            });
            function e(e) {
                return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
            }
            const t = (e)=>e.replace(/\brgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/g, function(e, t, n, i) {
                    return "#" + ("0" + Number(t).toString(16)).substr(-2) + ("0" + Number(n).toString(16)).substr(-2) + ("0" + Number(i).toString(16)).substr(-2);
                }), o = function(e, t) {
                if ((t = t || this.nodeData).id === e) return t;
                if (!t.children || !t.children.length) return null;
                for(let n = 0; n < t.children.length; n++){
                    const i = o(e, t.children[n]);
                    if (i) return i;
                }
            }, s = (e, t)=>{
                if (e.parent = t, e.children) for(let t1 = 0; t1 < e.children.length; t1++)s(e.children[t1], e);
            };
            function r(e) {
                if (e.id = h(), e.children) for(let t = 0; t < e.children.length; t++)r(e.children[t]);
            }
            const a = (e, t)=>{
                var n = Date.now();
                return function() {
                    var i = this, o = arguments, s = Date.now();
                    s - n >= t && (e.apply(i, o), n = Date.now());
                };
            };
            function l(e, t, n, i) {
                const o = i - t, s = e - n;
                let r = Math.atan(Math.abs(o) / Math.abs(s)) / 3.14 * 180;
                s < 0 && o > 0 && (r = 180 - r), s < 0 && o < 0 && (r = 180 + r), s > 0 && o < 0 && (r = 360 - r);
                var a = r + 30;
                const l = r - 30;
                return {
                    x1: n + 20 * Math.cos(Math.PI * a / 180),
                    y1: i - 20 * Math.sin(Math.PI * a / 180),
                    x2: n + 20 * Math.cos(Math.PI * l / 180),
                    y2: i - 20 * Math.sin(Math.PI * l / 180)
                };
            }
            function c(e, t, n) {
                let i, o;
                const s = (e.cy - n) / (t - e.cx);
                return s > e.h / e.w || s < -e.h / e.w ? e.cy - n < 0 ? (i = e.cx - e.h / 2 / s, o = e.cy + e.h / 2) : (i = e.cx + e.h / 2 / s, o = e.cy - e.h / 2) : e.cx - t < 0 ? (i = e.cx + e.w / 2, o = e.cy - e.w * s / 2) : (i = e.cx - e.w / 2, o = e.cy + e.w * s / 2), {
                    x: i,
                    y: o
                };
            }
            function d(e, t, n) {
                let i, o;
                const s = (e.cy - n) / (t - e.cx);
                return s > e.h / e.w || s < -e.h / e.w ? e.cy - n < 0 ? (i = e.cx - e.h / 2 / s, o = e.cy + e.h / 2) : (i = e.cx + e.h / 2 / s, o = e.cy - e.h / 2) : e.cx - t < 0 ? (i = e.cx + e.w / 2, o = e.cy - e.w * s / 2) : (i = e.cx - e.w / 2, o = e.cy + e.w * s / 2), {
                    x: i,
                    y: o
                };
            }
            function h() {
                return ((new Date).getTime().toString(16) + Math.random().toString(16).substr(2)).substr(2, 16);
            }
            function p(e) {
                const t = e.parent.children, n = t.indexOf(e);
                return t.splice(n, 1), t.length;
            }
            const u = {
                afterMoving: !1,
                mousedown: !1,
                lastX: null,
                lastY: null,
                onMove (e, t) {
                    if (this.mousedown) {
                        if (this.afterMoving = !0, !this.lastX) return this.lastX = e.pageX, void (this.lastY = e.pageY);
                        const n = this.lastX - e.pageX, i = this.lastY - e.pageY;
                        t.scrollTo(t.scrollLeft + n, t.scrollTop + i), this.lastX = e.pageX, this.lastY = e.pageY;
                    }
                },
                clear () {
                    this.afterMoving = !1, this.mousedown = !1, this.lastX = null, this.lastY = null;
                }
            };
            function m(e) {
                this.dom = e, this.mousedown = !1, this.lastX = null, this.lastY = null;
            }
            m.prototype.init = function(e, t) {
                this.handleMouseMove = (e)=>{
                    if (e.stopPropagation(), this.mousedown) {
                        if (!this.lastX) return this.lastX = e.pageX, void (this.lastY = e.pageY);
                        const n = this.lastX - e.pageX, i = this.lastY - e.pageY;
                        t(n, i), this.lastX = e.pageX, this.lastY = e.pageY;
                    }
                }, this.handleMouseDown = (e)=>{
                    e.stopPropagation(), this.mousedown = !0;
                }, this.handleClear = (e)=>{
                    e.stopPropagation(), this.clear();
                }, e.addEventListener("mousemove", this.handleMouseMove), e.addEventListener("mouseleave", this.handleClear), e.addEventListener("mouseup", this.handleClear), this.dom.addEventListener("mousedown", this.handleMouseDown);
            }, m.prototype.destory = function(e) {
                e.removeEventListener("mousemove", this.handleMouseMove), e.removeEventListener("mouseleave", this.handleClear), e.removeEventListener("mouseup", this.handleClear), this.dom.removeEventListener("mousedown", this.handleMouseDown);
            }, m.prototype.clear = function() {
                this.mousedown = !1, this.lastX = null, this.lastY = null;
            };
            const f = document, g = (e, t)=>(t ? t.mindElixirBox : f).querySelector(`[data-nodeid=me${e}]`), b = function(t, n) {
                if (t.textContent = n.topic, n.style && (t.style.color = n.style.color || "inherit", t.style.background = n.style.background || "inherit", t.style.fontSize = n.style.fontSize + "px", t.style.fontWeight = n.style.fontWeight || "normal"), n.hyperLink) {
                    const e1 = f.createElement("a");
                    e1.className = "hyper-link", e1.target = "_blank", e1.innerText = "\uD83D\uDD17", e1.href = n.hyperLink, t.appendChild(e1), t.linkContainer = e1;
                } else t.linkContainer && (t.linkContainer.remove(), t.linkContainer = null);
                if (n.icons && n.icons.length) {
                    const i = f.createElement("span");
                    i.className = "icons", i.innerHTML = n.icons.map((t)=>`<span>${e(t)}</span>`).join(""), t.appendChild(i);
                }
                if (n.tags && n.tags.length) {
                    const i1 = f.createElement("div");
                    i1.className = "tags", i1.innerHTML = n.tags.map((t)=>`<span>${e(t)}</span>`).join(""), t.appendChild(i1);
                }
            };
            const y = function(e) {
                const t = f.createElement("epd");
                return t.expanded = !1 !== e, t.className = !1 !== e ? "minus" : "", t;
            };
            const x = document, N = "http://www.w3.org/2000/svg", v = function(e) {
                const t = x.createElementNS(N, "svg");
                return t.setAttribute("class", e), t;
            }, M = function(e, t, n, i) {
                const o = x.createElementNS(N, "line");
                return o.setAttribute("x1", e), o.setAttribute("y1", t), o.setAttribute("x2", n), o.setAttribute("y2", i), o.setAttribute("stroke", "#bbb"), o.setAttribute("fill", "none"), o.setAttribute("stroke-width", "2"), o;
            }, k = function(e) {
                const t = x.createElementNS(N, "path");
                return t.setAttribute("d", e), t.setAttribute("stroke", "#555"), t.setAttribute("fill", "none"), t.setAttribute("stroke-linecap", "square"), t.setAttribute("stroke-width", "1"), t;
            };
            function C(e) {
                return e.isFocusMode ? e.nodeDataBackup : e.nodeData;
            }
            const z = document, w = function(e, t) {
                if (!e) return;
                const n = e.nodeObj;
                !1 === n.expanded && (this.expandNode(e, !0), e = g(n.id));
                const i = t || this.generateNewObj();
                n.children ? n.children.push(i) : n.children = [
                    i
                ], s(this.nodeData);
                const o = e.parentElement, { grp: r , top: a  } = this.createGroup(i);
                if ("T" === o.tagName) {
                    if (o.children[1]) o.nextSibling.appendChild(r);
                    else {
                        const e1 = z.createElement("children");
                        e1.appendChild(r), o.appendChild(y(!0)), o.insertAdjacentElement("afterend", e1);
                    }
                    this.linkDiv(r.offsetParent);
                } else "ROOT" === o.tagName && (this.judgeDirection(r, i), o.nextSibling.appendChild(r), this.linkDiv());
                return {
                    newTop: a,
                    newNodeObj: i
                };
            };
            function j(e, t, n) {
                let i = "";
                const o = t.offsetTop, s = t.offsetLeft, r = t.offsetWidth, a = t.offsetHeight;
                for(let t1 = 0; t1 < e.length; t1++){
                    const l = e[t1], c = l.children[0], d = c.offsetTop, h = c.offsetHeight;
                    let p;
                    p = n ? o + a / 2 : o + a;
                    const u = d + h;
                    let m, f, g;
                    const b = l.offsetParent.className;
                    "lhs" === b ? (m = s + 15, g = s, f = s - c.offsetWidth + 15) : "rhs" === b && (m = s + r - 15, g = s + r, f = s + r + c.offsetWidth - 15), i += S({
                        x1: m,
                        y1: p,
                        x2: f,
                        y2: u,
                        xMiddle: g
                    });
                    const y = c.children[1];
                    if (!y) continue;
                    if (y.style.top = (c.offsetHeight - y.offsetHeight) / 2 + "px", "lhs" === b ? y.style.left = "-10px" : "rhs" === b && (y.style.left = c.offsetWidth - 10 + "px"), !y.expanded) continue;
                    const x = l.children[1].children;
                    x.length > 0 && (i += j(x, c));
                }
                return i;
            }
            function L({ x1: e , y1: t , x2: n , y2: i  }) {
                return `M ${e} 10000 V ${i > t ? i - 20 : i + 20} C ${e} ${i} ${e} ${i} ${n > e ? e + 20 : e - 20} ${i} H ${n}`;
            }
            function E({ x1: e , y1: t , x2: n , y2: i  }) {
                return `M ${e} ${t} Q ${e} ${i} ${n} ${i}`;
            }
            function S({ x1: e , y1: t , x2: n , y2: i , xMiddle: o  }) {
                return i < t + 50 && i > t - 50 ? `M ${e} ${t} H ${o} V ${i} H ${n}` : i >= t ? `M ${e} ${t} H ${o} V ${i - 8} A 8 8 0 0 ${e > n ? 1 : 0} ${e > n ? o - 8 : o + 8} ${i} H ${n}` : `M ${e} ${t} H ${o} V ${i + 8} A 8 8 0 0 ${e > n ? 0 : 1} ${e > n ? o - 8 : o + 8} ${i} H ${n}`;
            }
            const D = {
                addChild: "插入子节点",
                addParent: "插入父节点",
                addSibling: "插入同级节点",
                removeNode: "删除节点",
                focus: "专注",
                cancelFocus: "取消专注",
                moveUp: "上移",
                moveDown: "下移",
                link: "连接",
                clickTips: "请点击目标节点",
                font: "文字",
                background: "背景",
                tag: "标签",
                icon: "图标",
                tagsSeparate: "多个标签半角逗号分隔",
                iconsSeparate: "多个图标半角逗号分隔",
                url: "URL"
            }, T = {
                cn: D,
                zh_CN: D,
                zh_TW: {
                    addChild: "插入子節點",
                    addParent: "插入父節點",
                    addSibling: "插入同級節點",
                    removeNode: "刪除節點",
                    focus: "專注",
                    cancelFocus: "取消專注",
                    moveUp: "上移",
                    moveDown: "下移",
                    link: "連接",
                    clickTips: "請點擊目標節點",
                    font: "文字",
                    background: "背景",
                    tag: "標簽",
                    icon: "圖標",
                    tagsSeparate: "多個標簽半角逗號分隔",
                    iconsSeparate: "多個圖標半角逗號分隔",
                    url: "URL"
                },
                en: {
                    addChild: "Add child",
                    addParent: "Add parent",
                    addSibling: "Add sibling",
                    removeNode: "Remove node",
                    focus: "Focus Mode",
                    cancelFocus: "Cancel Focus Mode",
                    moveUp: "Move up",
                    moveDown: "Move down",
                    link: "Link",
                    clickTips: "Please click the target node",
                    font: "Font",
                    background: "Background",
                    tag: "Tag",
                    icon: "Icon",
                    tagsSeparate: "Separate tags by comma",
                    iconsSeparate: "Separate icons by comma",
                    url: "URL"
                },
                ja: {
                    addChild: "子ノードを追加する",
                    addParent: "親ノードを追加します",
                    addSibling: "兄弟ノードを追加する",
                    removeNode: "ノードを削除",
                    focus: "集中",
                    cancelFocus: "集中解除",
                    moveUp: "上へ移動",
                    moveDown: "下へ移動",
                    link: "コネクト",
                    clickTips: "ターゲットノードをクリックしてください",
                    font: "フォント",
                    background: "バックグラウンド",
                    tag: "タグ",
                    icon: "アイコン",
                    tagsSeparate: "複数タグはカンマ区切り",
                    iconsSeparate: "複数アイコンはカンマ区切り",
                    url: "URL"
                },
                pt: {
                    addChild: "Adicionar item filho",
                    addParent: "Adicionar item pai",
                    addSibling: "Adicionar item irmao",
                    removeNode: "Remover item",
                    focus: "Modo Foco",
                    cancelFocus: "Cancelar Modo Foco",
                    moveUp: "Mover para cima",
                    moveDown: "Mover para baixo",
                    link: "Link",
                    clickTips: "Favor clicar no item alvo",
                    font: "Fonte",
                    background: "Cor de fundo",
                    tag: "Tag",
                    icon: "Icone",
                    tagsSeparate: "Separe tags por virgula",
                    iconsSeparate: "Separe icones por virgula",
                    url: "URL"
                }
            };
            var A = n(379), I = n.n(A), O = n(795), P = n.n(O), $ = n(569), H = n.n($), Y = n(565), B = n.n(Y), R = n(216), Z = n.n(R), V = n(589), F = n.n(V), W = n(165), q = {};
            q.styleTagTransform = F(), q.setAttributes = B(), q.insert = H().bind(null, "head"), q.domAPI = P(), q.insertStyleElement = Z();
            I()(W.Z, q);
            W.Z && W.Z.locals && W.Z.locals;
            function U(t, n) {
                const i = (t, n, i)=>{
                    const o = document.createElement("li");
                    return o.id = t, o.innerHTML = `<span>${e(n)}</span><span>${e(i)}</span>`, o;
                }, o = T[t.locale] ? t.locale : "en", s = i("cm-add_child", T[o].addChild, "tab"), r = i("cm-add_parent", T[o].addParent, ""), a = i("cm-add_sibling", T[o].addSibling, "enter"), l = i("cm-remove_child", T[o].removeNode, "delete"), c = i("cm-fucus", T[o].focus, ""), d = i("cm-unfucus", T[o].cancelFocus, ""), h = i("cm-up", T[o].moveUp, "PgUp"), p = i("cm-down", T[o].moveDown, "Pgdn"), u = i("cm-down", T[o].link, ""), m = document.createElement("ul");
                if (m.className = "menu-list", m.appendChild(s), m.appendChild(r), m.appendChild(a), m.appendChild(l), n && !n.focus || (m.appendChild(c), m.appendChild(d)), m.appendChild(h), m.appendChild(p), n && !n.link || m.appendChild(u), n && n.extend) for(let e1 = 0; e1 < n.extend.length; e1++){
                    const t1 = n.extend[e1], o1 = i(t1.name, t1.name, t1.key || "");
                    m.appendChild(o1), o1.onclick = (e)=>{
                        t1.onclick(e);
                    };
                }
                const f = document.createElement("cmenu");
                f.appendChild(m), f.hidden = !0, t.container.append(f);
                let g = !0;
                t.container.oncontextmenu = function(e) {
                    if (e.preventDefault(), !t.editable) return;
                    const n = e.target;
                    if ("TPC" === n.tagName) {
                        g = "ROOT" === n.parentElement.tagName, g ? (c.className = "disabled", h.className = "disabled", p.className = "disabled", a.className = "disabled", l.className = "disabled") : (c.className = "", h.className = "", p.className = "", a.className = "", l.className = ""), t.selectNode(n), f.hidden = !1;
                        const i = m.offsetHeight, o = m.offsetWidth;
                        i + e.clientY > window.innerHeight ? (m.style.top = "", m.style.bottom = "0px") : (m.style.bottom = "", m.style.top = e.clientY + 15 + "px"), o + e.clientX > window.innerWidth ? (m.style.left = "", m.style.right = "0px") : (m.style.right = "", m.style.left = e.clientX + 10 + "px");
                    }
                }, f.onclick = (e)=>{
                    e.target === f && (f.hidden = !0);
                }, s.onclick = (e)=>{
                    t.addChild(), f.hidden = !0;
                }, r.onclick = (e)=>{
                    t.insertParent(), f.hidden = !0;
                }, a.onclick = (e)=>{
                    g || (t.insertSibling(), f.hidden = !0);
                }, l.onclick = (e)=>{
                    g || (t.removeNode(), f.hidden = !0);
                }, c.onclick = (e)=>{
                    g || (t.focusNode(t.currentNode), f.hidden = !0);
                }, d.onclick = (e)=>{
                    t.cancelFocus(), f.hidden = !0;
                }, h.onclick = (e)=>{
                    g || (t.moveUpNode(), f.hidden = !0);
                }, p.onclick = (e)=>{
                    g || (t.moveDownNode(), f.hidden = !0);
                }, u.onclick = (e)=>{
                    f.hidden = !0;
                    const n = t.currentNode, i = ((e)=>{
                        const t = document.createElement("div");
                        return t.innerText = e, t.style.cssText = "position:absolute;bottom:20px;left:50%;transform:translateX(-50%);", t;
                    })(T[o].clickTips);
                    t.container.appendChild(i), t.map.addEventListener("click", (e)=>{
                        e.preventDefault(), i.remove(), "T" !== e.target.parentElement.nodeName && "ROOT" !== e.target.parentElement.nodeName || t.createLink(n, t.currentNode);
                    }, {
                        once: !0
                    });
                };
            }
            var G = n(301), X = {};
            X.styleTagTransform = F(), X.setAttributes = B(), X.insert = H().bind(null, "head"), X.domAPI = P(), X.insertStyleElement = Z();
            I()(G.Z, X);
            G.Z && G.Z.locals && G.Z.locals;
            const _ = (e, t)=>{
                const n = document.createElement("span");
                return n.id = e, n.innerHTML = `<svg class="icon" aria-hidden="true">\n    <use xlink:href="#icon-${t}"></use>\n  </svg>`, n;
            };
            function J(e) {
                e.container.append(function(e) {
                    const t = document.createElement("toolbar"), n = _("fullscreen", "full"), i = _("toCenter", "living"), o = _("zoomout", "move"), s = _("zoomin", "add");
                    return document.createElement("span").innerText = "100%", t.appendChild(n), t.appendChild(i), t.appendChild(o), t.appendChild(s), t.className = "rb", n.onclick = ()=>{
                        e.container.requestFullscreen();
                    }, i.onclick = ()=>{
                        e.toCenter();
                    }, o.onclick = ()=>{
                        e.scaleVal < .6 || e.scale(e.scaleVal -= .2);
                    }, s.onclick = ()=>{
                        e.scaleVal > 1.6 || e.scale(e.scaleVal += .2);
                    }, t;
                }(e)), e.container.append(function(e) {
                    const t = document.createElement("toolbar"), n = _("tbltl", "left"), i = _("tbltr", "right"), o = _("tblts", "side");
                    return t.appendChild(n), t.appendChild(i), t.appendChild(o), t.className = "lt", n.onclick = ()=>{
                        e.initLeft();
                    }, i.onclick = ()=>{
                        e.initRight();
                    }, o.onclick = ()=>{
                        e.initSide();
                    }, t;
                }(e));
            }
            var Q = n(519), K = {};
            K.styleTagTransform = F(), K.setAttributes = B(), K.insert = H().bind(null, "head"), K.domAPI = P(), K.insertStyleElement = Z();
            I()(Q.Z, K);
            Q.Z && Q.Z.locals && Q.Z.locals;
            const ee = (e, t)=>{
                const n = document.createElement("div");
                return n.id = e, n.innerHTML = t, n;
            }, te = [
                "#2c3e50",
                "#34495e",
                "#7f8c8d",
                "#94a5a6",
                "#bdc3c7",
                "#ecf0f1",
                "#8e44ad",
                "#9b59b6",
                "#2980b9",
                "#3298db",
                "#c0392c",
                "#e74c3c",
                "#d35400",
                "#f39c11",
                "#f1c40e",
                "#17a085",
                "#27ae61",
                "#2ecc71"
            ];
            var ne = function(e, t, n, i) {
                return new (n || (n = Promise))(function(o, s) {
                    function r(e) {
                        try {
                            l(i.next(e));
                        } catch (e1) {
                            s(e1);
                        }
                    }
                    function a(e) {
                        try {
                            l(i.throw(e));
                        } catch (e1) {
                            s(e1);
                        }
                    }
                    function l(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
                            e(t);
                        })).then(r, a);
                    }
                    l((i = i.apply(e, t || [])).next());
                });
            };
            const ie = document, oe = function(e) {
                if (!e) return;
                const t = e.getElementsByClassName("insert-preview");
                for (const e1 of t || [])e1.remove();
            }, se = function(e, t) {
                const n = t.parentNode.parentNode.contains(e);
                return e && "TPC" === e.tagName && e !== t && !n && !0 !== e.nodeObj.root;
            };
            function re(e) {
                let t, n, i;
                e.map.addEventListener("dragstart", function(e) {
                    t = e.target, t.parentNode.parentNode.style.opacity = "0.5", u.clear();
                }), e.map.addEventListener("dragend", function(o) {
                    return ne(this, void 0, void 0, function*() {
                        o.target.style.opacity = "", oe(i);
                        const s = t.nodeObj;
                        switch(n){
                            case "before":
                                e.moveNodeBefore(t, i), e.selectNode(g(s.id));
                                break;
                            case "after":
                                e.moveNodeAfter(t, i), e.selectNode(g(s.id));
                                break;
                            case "in":
                                e.moveNode(t, i);
                        }
                        t.parentNode.parentNode.style.opacity = "1", t = null;
                    });
                }), e.map.addEventListener("dragover", a(function(e) {
                    oe(i);
                    const o = ie.elementFromPoint(e.clientX, e.clientY - 12);
                    if (se(o, t)) {
                        i = o;
                        const t1 = o.getBoundingClientRect().y;
                        e.clientY > t1 + o.clientHeight ? n = "after" : e.clientY > t1 + o.clientHeight / 2 && (n = "in");
                    } else {
                        const o1 = ie.elementFromPoint(e.clientX, e.clientY + 12);
                        if (se(o1, t)) {
                            i = o1;
                            const t2 = o1.getBoundingClientRect().y;
                            e.clientY < t2 ? n = "before" : e.clientY < t2 + o1.clientHeight / 2 && (n = "in");
                        } else n = i = null;
                    }
                    i && function(e, t) {
                        if (!t) return oe(e), e;
                        const n = e.getElementsByClassName("insert-preview"), i = `insert-preview ${t} show`;
                        if (n.length > 0) n[0].className = i;
                        else {
                            const t1 = ie.createElement("div");
                            t1.className = i, e.appendChild(t1);
                        }
                    }(i, n);
                }, 200));
            }
            var ae = n(787), le = {};
            le.styleTagTransform = F(), le.setAttributes = B(), le.insert = H().bind(null, "head"), le.domAPI = P(), le.insertStyleElement = Z();
            I()(ae.Z, le);
            ae.Z && ae.Z.locals && ae.Z.locals;
            function ce() {
                this.handlers = {};
            }
            ce.prototype = {
                showHandler: function() {},
                addListener: function(e, t) {
                    void 0 === this.handlers[e] && (this.handlers[e] = []), this.handlers[e].push(t);
                },
                fire: function(e, ...t) {
                    if (this.handlers[e] instanceof Array) for(var n = this.handlers[e], i = 0; i < n.length; i++)n[i](...t);
                },
                removeListener: function(e, t) {
                    if (this.handlers[e]) {
                        var n = this.handlers[e];
                        if (t) {
                            if (n.length) for(var i = 0; i < n.length; i++)n[i] === t && this.handlers[e].splice(i, 1);
                        } else n.length = 0;
                    }
                }
            };
            var de = n(74), he = {};
            he.styleTagTransform = F(), he.setAttributes = B(), he.insert = H().bind(null, "head"), he.domAPI = P(), he.insertStyleElement = Z();
            I()(de.Z, he);
            de.Z && de.Z.locals && de.Z.locals;
            n(857);
            var pe = function(e, t, n, i) {
                return new (n || (n = Promise))(function(o, s) {
                    function r(e) {
                        try {
                            l(i.next(e));
                        } catch (e1) {
                            s(e1);
                        }
                    }
                    function a(e) {
                        try {
                            l(i.throw(e));
                        } catch (e1) {
                            s(e1);
                        }
                    }
                    function l(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
                            e(t);
                        })).then(r, a);
                    }
                    l((i = i.apply(e, t || [])).next());
                });
            };
            const ue = g, me = document;
            function fe({ el: e , direction: t , locale: n , draggable: i , editable: o , contextMenu: s , contextMenuOption: r , toolBar: a , nodeMenu: l , keypress: c , before: d , newTopicName: h , allowUndo: p , primaryLinkStyle: m , overflowHidden: f , primaryNodeHorizontalGap: g , primaryNodeVerticalGap: b , mobileMenu: y  }) {
                let x;
                const N = Object.prototype.toString.call(e);
                if ("[object HTMLDivElement]" === N ? x = e : "[object String]" === N && (x = document.querySelector(e)), !x) return new Error("MindElixir: el is not a valid element");
                var k;
                this.mindElixirBox = x, this.before = d || {}, this.locale = n, this.contextMenuOption = r, this.contextMenu = void 0 === s || s, this.toolBar = void 0 === a || a, this.nodeMenu = void 0 === l || l, this.keypress = void 0 === c || c, this.mobileMenu = y, this.direction = "number" == typeof t ? t : 1, this.draggable = void 0 === i || i, this.newTopicName = h, this.editable = void 0 === o || o, this.allowUndo = void 0 === p || p, this.currentNode = null, this.currentLink = null, this.inputDiv = null, this.scaleVal = 1, this.tempDirection = null, this.primaryLinkStyle = m || 0, this.overflowHidden = f, this.primaryNodeHorizontalGap = g, this.primaryNodeVerticalGap = b, this.bus = new ce, this.bus.addListener("operation", (e)=>{
                    this.isUndo ? this.isUndo = !1 : [
                        "moveNode",
                        "removeNode",
                        "addChild",
                        "finishEdit",
                        "editStyle",
                        "editTags",
                        "editIcons"
                    ].includes(e.name) && this.history.push(e);
                }), this.history = [], this.isUndo = !1, this.undo = function() {
                    const e = this.history.pop();
                    e && (this.isUndo = !0, "moveNode" === e.name ? this.moveNode(ue(e.obj.fromObj.id), ue(e.obj.originParentId)) : "removeNode" === e.name ? e.originSiblingId ? this.insertBefore(ue(e.originSiblingId), e.obj) : this.addChild(ue(e.originParentId), e.obj) : "addChild" === e.name || "copyNode" === e.name ? this.removeNode(ue(e.obj.id)) : "finishEdit" === e.name ? this.setNodeTopic(ue(e.obj.id), e.origin) : this.isUndo = !1);
                }, this.mindElixirBox.className += " mind-elixir", this.mindElixirBox.innerHTML = "", this.container = me.createElement("div"), this.container.className = "map-container", this.map = me.createElement("div"), this.map.className = "map-canvas", this.map.setAttribute("tabindex", "0"), this.container.appendChild(this.map), this.mindElixirBox.appendChild(this.container), this.root = me.createElement("root"), this.box = me.createElement("children"), this.box.className = "box", this.lines = v("lines"), this.linkController = v("linkcontroller"), this.P2 = me.createElement("div"), this.P3 = me.createElement("div"), this.P2.className = this.P3.className = "circle", this.line1 = M(0, 0, 0, 0), this.line2 = M(0, 0, 0, 0), this.linkController.appendChild(this.line1), this.linkController.appendChild(this.line2), this.linkSvgGroup = v("topiclinks"), this.map.appendChild(this.root), this.map.appendChild(this.box), this.map.appendChild(this.lines), this.map.appendChild(this.linkController), this.map.appendChild(this.linkSvgGroup), this.map.appendChild(this.P2), this.map.appendChild(this.P3), this.overflowHidden ? this.container.style.overflow = "hidden" : ((k = this).map.addEventListener("click", (e)=>{
                    "EPD" === e.target.nodeName ? k.expandNode(e.target.previousSibling) : "T" === e.target.parentElement.nodeName || "ROOT" === e.target.parentElement.nodeName ? k.selectNode(e.target, !1, e) : "path" === e.target.nodeName ? "g" === e.target.parentElement.nodeName && k.selectLink(e.target.parentElement) : "circle" === e.target.className || (k.unselectNode(), k.hideLinkController && k.hideLinkController());
                }), k.map.addEventListener("dblclick", (e)=>{
                    e.preventDefault(), k.editable && ("T" !== e.target.parentElement.nodeName && "ROOT" !== e.target.parentElement.nodeName || k.beginEdit(e.target));
                }), k.map.addEventListener("mousemove", (e)=>{
                    "true" !== e.target.contentEditable && u.onMove(e, k.container);
                }), k.map.addEventListener("mousedown", (e)=>{
                    "true" !== e.target.contentEditable && (u.afterMoving = !1, u.mousedown = !0);
                }), k.map.addEventListener("mouseleave", (e)=>{
                    u.clear();
                }), k.map.addEventListener("mouseup", (e)=>{
                    u.clear();
                }));
            }
            function ge(e, t) {
                return function(...n) {
                    return pe(this, void 0, void 0, function*() {
                        this.before[t] && !(yield this.before[t].apply(this, n)) || e.apply(this, n);
                    });
                };
            }
            fe.prototype = {
                addParentLink: s,
                getObjById: o,
                generateNewObj: function() {
                    const e = h();
                    return {
                        topic: this.newTopicName || "new node",
                        id: e
                    };
                },
                insertSibling: ge(function(e, t) {
                    const n = e || this.currentNode;
                    if (!n) return;
                    const i = n.nodeObj;
                    if (!0 === i.root) return void this.addChild();
                    const o = t || this.generateNewObj();
                    !function(e, t) {
                        const n = e.parent.children, i = n.indexOf(e);
                        n.splice(i + 1, 0, t);
                    }(i, o), s(this.nodeData);
                    const r = n.parentElement, { grp: a , top: l  } = this.createGroup(o), c = r.parentNode.parentNode;
                    c.insertBefore(a, r.parentNode.nextSibling), "box" === c.className ? (this.judgeDirection(a, o), this.linkDiv()) : this.linkDiv(a.offsetParent), t || this.createInputDiv(l.children[0]), this.selectNode(l.children[0], !0), this.bus.fire("operation", {
                        name: "insertSibling",
                        obj: o
                    });
                }, "insertSibling"),
                insertBefore: ge(function(e, t) {
                    const n = e || this.currentNode;
                    if (!n) return;
                    const i = n.nodeObj;
                    if (!0 === i.root) return void this.addChild();
                    const o = t || this.generateNewObj();
                    !function(e, t) {
                        const n = e.parent.children, i = n.indexOf(e);
                        n.splice(i, 0, t);
                    }(i, o), s(this.nodeData);
                    const r = n.parentElement, { grp: a , top: l  } = this.createGroup(o), c = r.parentNode.parentNode;
                    c.insertBefore(a, r.parentNode), "box" === c.className ? (this.judgeDirection(a, o), this.linkDiv()) : this.linkDiv(a.offsetParent), t || this.createInputDiv(l.children[0]), this.selectNode(l.children[0], !0), this.bus.fire("operation", {
                        name: "insertSibling",
                        obj: o
                    });
                }, "insertBefore"),
                insertParent: ge(function(e, t) {
                    const n = e || this.currentNode;
                    if (!n) return;
                    const i = n.nodeObj;
                    if (!0 === i.root) return;
                    const o = t || this.generateNewObj();
                    !function(e, t) {
                        const n = e.parent.children, i = n.indexOf(e);
                        n[i] = t, t.children = [
                            e
                        ];
                    }(i, o), s(this.nodeData);
                    const r = n.parentElement.parentElement, { grp: a , top: l  } = this.createGroup(o, !0);
                    l.appendChild(y(!0));
                    const c = r.parentNode;
                    r.insertAdjacentElement("afterend", a);
                    const d = z.createElement("children");
                    d.appendChild(r), l.insertAdjacentElement("afterend", d), "box" === c.className ? (a.className = r.className, r.className = "", r.querySelector(".subLines").remove(), this.linkDiv()) : this.linkDiv(a.offsetParent), t || this.createInputDiv(l.children[0]), this.selectNode(l.children[0], !0), this.bus.fire("operation", {
                        name: "insertParent",
                        obj: o
                    });
                }, "insertParent"),
                addChild: ge(function(e, t) {
                    const n = e || this.currentNode;
                    if (!n) return;
                    const { newTop: i , newNodeObj: o  } = w.call(this, n, t);
                    this.bus.fire("operation", {
                        name: "addChild",
                        obj: o
                    }), t || this.createInputDiv(i.children[0]), this.selectNode(i.children[0], !0);
                }, "addChild"),
                copyNode: ge(function(e, t) {
                    const n = JSON.parse(JSON.stringify(e.nodeObj, (e, t)=>{
                        if ("parent" !== e) return t;
                    }));
                    r(n);
                    const { newNodeObj: i  } = w.call(this, t, n);
                    this.bus.fire("operation", {
                        name: "copyNode",
                        obj: i
                    });
                }, "copyNode"),
                moveNode: ge(function(e, t) {
                    const n = e.nodeObj, i = t.nodeObj, o = n.parent.id;
                    if (!1 === i.expanded && (this.expandNode(t, !0), e = g(n.id), t = g(i.id)), !function(e, t) {
                        let n = !0;
                        for(; t.parent;){
                            if (t.parent === e) {
                                n = !1;
                                break;
                            }
                            t = t.parent;
                        }
                        return n;
                    }(n, i)) return;
                    !function(e, t) {
                        p(e), t.children ? t.children.push(e) : t.children = [
                            e
                        ];
                    }(n, i), s(this.nodeData);
                    const r = e.parentElement, a = r.parentNode.parentNode, l = t.parentElement;
                    if ("box" === a.className ? r.parentNode.lastChild.remove() : "box" === r.parentNode.className && (r.style.cssText = ""), "T" === l.tagName) {
                        if ("box" === a.className && (r.parentNode.className = ""), l.children[1]) l.nextSibling.appendChild(r.parentNode);
                        else {
                            const e1 = z.createElement("children");
                            e1.appendChild(r.parentNode), l.appendChild(y(!0)), l.parentElement.insertBefore(e1, l.nextSibling);
                        }
                    } else "ROOT" === l.tagName && (this.judgeDirection(r.parentNode, n), l.nextSibling.appendChild(r.parentNode));
                    this.linkDiv(), this.bus.fire("operation", {
                        name: "moveNode",
                        obj: {
                            fromObj: n,
                            toObj: i,
                            originParentId: o
                        }
                    });
                }, "moveNode"),
                removeNode: ge(function(e) {
                    const t = e || this.currentNode;
                    if (!t) return;
                    const n = t.nodeObj;
                    if (!0 === n.root) throw new Error("Can not remove root node");
                    const i = n.parent.children.findIndex((e)=>e === n), o = n.parent.children[i + 1], s = o && o.id, r = p(n), a = t.parentNode;
                    if ("ROOT" !== a.tagName) {
                        if (0 === r) {
                            const e1 = a.parentNode.parentNode.previousSibling;
                            "ROOT" !== e1.tagName && e1.children[1].remove(), this.selectParent();
                        } else this.selectPrevSibling() || this.selectNextSibling();
                        for(const e2 in this.linkData){
                            const t1 = this.linkData[e2];
                            t1.from !== a.firstChild && t1.to !== a.firstChild || this.removeLink(this.mindElixirBox.querySelector(`[data-linkid=${this.linkData[e2].id}]`));
                        }
                        a.parentNode.remove(), this.linkDiv(), this.bus.fire("operation", {
                            name: "removeNode",
                            obj: n,
                            originSiblingId: s,
                            originParentId: n.parent.id
                        });
                    }
                }, "removeNode"),
                moveUpNode: ge(function(e) {
                    const t = e || this.currentNode;
                    if (!t) return;
                    const n = t.parentNode.parentNode, i = t.nodeObj;
                    !function(e) {
                        const t = e.parent.children, n = t.indexOf(e), i = t[n];
                        0 === n ? (t[n] = t[t.length - 1], t[t.length - 1] = i) : (t[n] = t[n - 1], t[n - 1] = i);
                    }(i), n.parentNode.insertBefore(n, n.previousSibling), this.linkDiv(), this.bus.fire("operation", {
                        name: "moveUpNode",
                        obj: i
                    });
                }, "moveUpNode"),
                moveDownNode: ge(function(e) {
                    const t = e || this.currentNode;
                    if (!t) return;
                    const n = t.parentNode.parentNode, i = t.nodeObj;
                    !function(e) {
                        const t = e.parent.children, n = t.indexOf(e), i = t[n];
                        n === t.length - 1 ? (t[n] = t[0], t[0] = i) : (t[n] = t[n + 1], t[n + 1] = i);
                    }(i), n.nextSibling ? n.insertAdjacentElement("afterend", n.nextSibling) : n.parentNode.prepend(n), this.linkDiv(), this.bus.fire("operation", {
                        name: "moveDownNode",
                        obj: i
                    });
                }, "moveDownNode"),
                beginEdit: ge(function(e) {
                    const t = e || this.currentNode;
                    t && this.createInputDiv(t);
                }, "beginEdit"),
                moveNodeBefore: ge(function(e, t) {
                    const n = e.nodeObj, i = t.nodeObj, o = n.parent.id;
                    !function(e, t) {
                        p(e);
                        const n = t.parent.children;
                        let i = 0;
                        for(let e1 = 0; e1 < n.length; e1++)if (n[e1] === t) {
                            i = e1;
                            break;
                        }
                        n.splice(i, 0, e);
                    }(n, i), s(this.nodeData);
                    const r = e.parentElement.parentNode, a = t.parentElement, l = a.parentNode;
                    a.parentNode.parentNode.insertBefore(r, l), l.className && (r.className = l.className), this.linkDiv(), this.bus.fire("operation", {
                        name: "moveNodeBefore",
                        obj: {
                            fromObj: n,
                            toObj: i,
                            originParentId: o
                        }
                    });
                }, "moveNodeBefore"),
                moveNodeAfter: ge(function(e, t) {
                    const n = e.nodeObj, i = t.nodeObj, o = n.parent.id;
                    !function(e, t) {
                        p(e);
                        const n = t.parent.children;
                        let i = 0;
                        for(let e1 = 0; e1 < n.length; e1++)if (n[e1] === t) {
                            i = e1;
                            break;
                        }
                        n.splice(i + 1, 0, e);
                    }(n, i), s(this.nodeData);
                    const r = e.parentElement.parentNode, a = t.parentElement, l = a.parentNode;
                    a.parentNode.parentNode.insertBefore(r, l.nextSibling), l.className && (r.className = l.className), this.linkDiv(), this.bus.fire("operation", {
                        name: "moveNodeAfter",
                        obj: {
                            fromObj: n,
                            toObj: i,
                            originParentId: o
                        }
                    });
                }, "moveNodeAfter"),
                updateNodeStyle: function(e) {
                    if (!e.style) return;
                    const n = g(e.id, this), i = {
                        color: n.style.color && t(n.style.color),
                        background: n.style.background && t(n.style.background),
                        fontSize: n.style.fontSize && n.style.fontSize + "px",
                        fontWeight: n.style.fontWeight
                    };
                    n.style.color = e.style.color, n.style.background = e.style.background, n.style.fontSize = e.style.fontSize + "px", n.style.fontWeight = e.style.fontWeight || "normal", this.linkDiv(), this.bus.fire("operation", {
                        name: "editStyle",
                        obj: e,
                        origin: i
                    });
                },
                updateNodeTags: function(e, t) {
                    const n = e.tags;
                    e.tags = t;
                    const i = g(e.id);
                    b(i, e), this.linkDiv(), this.bus.fire("operation", {
                        name: "editTags",
                        obj: e,
                        origin: n
                    });
                },
                updateNodeIcons: function(e, t) {
                    const n = e.icons;
                    e.icons = t;
                    const i = g(e.id);
                    b(i, e), this.linkDiv(), this.bus.fire("operation", {
                        name: "editIcons",
                        obj: e,
                        origin: n
                    });
                },
                updateNodeHyperLink: function(e, t) {
                    const n = e.hyperLink;
                    e.hyperLink = t;
                    const i = g(e.id);
                    b(i, e), this.linkDiv(), this.bus.fire("operation", {
                        name: "editHyperLink",
                        obj: e,
                        origin: n
                    });
                },
                judgeDirection: function(e, t) {
                    if (0 === this.direction) e.className = "lhs";
                    else if (1 === this.direction) e.className = "rhs";
                    else if (2 === this.direction) z.querySelectorAll(".lhs").length <= z.querySelectorAll(".rhs").length ? (e.className = "lhs", t.direction = 0) : (e.className = "rhs", t.direction = 1);
                },
                setNodeTopic: function(e, t) {
                    e.childNodes[0].textContent = t, e.nodeObj.topic = t, this.linkDiv();
                },
                createLink: function(e, t, n, i) {
                    const o = this.map.getBoundingClientRect();
                    if (!e || !t) return;
                    const s = e.getBoundingClientRect(), r = t.getBoundingClientRect(), a = (s.x + s.width / 2 - o.x) / this.scaleVal, p = (s.y + s.height / 2 - o.y) / this.scaleVal, u = (r.x + r.width / 2 - o.x) / this.scaleVal, m = (r.y + r.height / 2 - o.y) / this.scaleVal;
                    let f, g, b, y;
                    n ? (f = a + i.delta1.x, g = p + i.delta1.y, b = u + i.delta2.x, y = m + i.delta2.y) : (p + m) / 2 - p <= s.height / 2 ? (f = (s.x + s.width - o.x) / this.scaleVal + 100, g = p, b = (r.x + r.width - o.x) / this.scaleVal + 100, y = m) : (f = (a + u) / 2, g = (p + m) / 2, b = (a + u) / 2, y = (p + m) / 2);
                    const v = {
                        cx: a,
                        cy: p,
                        w: s.width,
                        h: s.height
                    }, M = {
                        cx: u,
                        cy: m,
                        w: r.width,
                        h: r.height
                    }, k = c(v, f, g), C = k.x, z = k.y, w = d(M, b, y), j = w.x, L = w.y, E = l(b, y, j, L), S = function(e, t) {
                        const n = x.createElementNS(N, "g"), i = x.createElementNS(N, "path"), o = x.createElementNS(N, "path");
                        return o.setAttribute("d", t), o.setAttribute("stroke", "rgb(235, 95, 82)"), o.setAttribute("fill", "none"), o.setAttribute("stroke-linecap", "cap"), o.setAttribute("stroke-width", "2"), i.setAttribute("d", e), i.setAttribute("stroke", "rgb(235, 95, 82)"), i.setAttribute("fill", "none"), i.setAttribute("stroke-linecap", "cap"), i.setAttribute("stroke-width", "2"), n.appendChild(i), n.appendChild(o), n;
                    }(`M ${C} ${z} C ${f} ${g} ${b} ${y} ${j} ${L}`, `M ${E.x1} ${E.y1} L ${j} ${L} L ${E.x2} ${E.y2}`);
                    let D;
                    n ? (D = {
                        id: i.id,
                        label: "",
                        from: e,
                        to: t,
                        delta1: {
                            x: f - a,
                            y: g - p
                        },
                        delta2: {
                            x: b - u,
                            y: y - m
                        }
                    }, this.linkData[i.id] = D, S.linkObj = D, S.dataset.linkid = i.id) : (D = {
                        id: h(),
                        label: "",
                        from: e,
                        to: t,
                        delta1: {
                            x: f - a,
                            y: g - p
                        },
                        delta2: {
                            x: b - u,
                            y: y - m
                        }
                    }, this.linkData[D.id] = D, S.linkObj = D, S.dataset.linkid = D.id, this.currentLink = S), this.linkSvgGroup.appendChild(S), n || this.showLinkController(f, g, b, y, D, v, M);
                },
                removeLink: function(e) {
                    let t;
                    if (t = e || this.currentLink, !t) return;
                    this.hideLinkController();
                    const n = t.linkObj.id;
                    delete this.linkData[n], t.remove(), t = null;
                },
                selectLink: function(e) {
                    this.currentLink = e;
                    const t = e.linkObj, n = t.from, i = t.to, o = this.map.getBoundingClientRect(), s = n.getBoundingClientRect(), r = i.getBoundingClientRect(), a = (s.x + s.width / 2 - o.x) / this.scaleVal, l = (s.y + s.height / 2 - o.y) / this.scaleVal, c = (r.x + r.width / 2 - o.x) / this.scaleVal, d = (r.y + r.height / 2 - o.y) / this.scaleVal, h = {
                        cx: a,
                        cy: l,
                        w: s.width,
                        h: s.height
                    }, p = {
                        cx: c,
                        cy: d,
                        w: r.width,
                        h: r.height
                    }, u = a + t.delta1.x, m = l + t.delta1.y, f = c + t.delta2.x, g = d + t.delta2.y;
                    this.showLinkController(u, m, f, g, t, h, p);
                },
                hideLinkController: function() {
                    this.linkController.style.display = "none", this.P2.style.display = "none", this.P3.style.display = "none";
                },
                showLinkController: function(e, t, n, i, o, s, r) {
                    this.linkController.style.display = "initial", this.P2.style.display = "initial", this.P3.style.display = "initial";
                    const a = c(s, e, t);
                    let h = a.x, p = a.y;
                    const u = d(r, n, i);
                    let f = u.x, g = u.y;
                    this.P2.style.cssText = `top:${t}px;left:${e}px;`, this.P3.style.cssText = `top:${i}px;left:${n}px;`, this.line1.setAttribute("x1", h), this.line1.setAttribute("y1", p), this.line1.setAttribute("x2", e), this.line1.setAttribute("y2", t), this.line2.setAttribute("x1", n), this.line2.setAttribute("y1", i), this.line2.setAttribute("x2", f), this.line2.setAttribute("y2", g), this.helper1 && (this.helper1.destory(this.map), this.helper2.destory(this.map)), this.helper1 = new m(this.P2), this.helper2 = new m(this.P3), this.helper1.init(this.map, (r, a)=>{
                        e -= r / this.scaleVal, t -= a / this.scaleVal;
                        const l = c(s, e, t);
                        h = l.x, p = l.y, this.P2.style.top = t + "px", this.P2.style.left = e + "px", this.currentLink.children[0].setAttribute("d", `M ${h} ${p} C ${e} ${t} ${n} ${i} ${f} ${g}`), this.line1.setAttribute("x1", h), this.line1.setAttribute("y1", p), this.line1.setAttribute("x2", e), this.line1.setAttribute("y2", t), o.delta1.x = e - s.cx, o.delta1.y = t - s.cy;
                    }), this.helper2.init(this.map, (s, a)=>{
                        n -= s / this.scaleVal, i -= a / this.scaleVal;
                        const c = d(r, n, i);
                        f = c.x, g = c.y;
                        const u = l(n, i, f, g);
                        this.P3.style.top = i + "px", this.P3.style.left = n + "px", this.currentLink.children[0].setAttribute("d", `M ${h} ${p} C ${e} ${t} ${n} ${i} ${f} ${g}`), this.currentLink.children[1].setAttribute("d", `M ${u.x1} ${u.y1} L ${f} ${g} L ${u.x2} ${u.y2}`), this.line2.setAttribute("x1", n), this.line2.setAttribute("y1", i), this.line2.setAttribute("x2", f), this.line2.setAttribute("y2", g), o.delta2.x = n - r.cx, o.delta2.y = i - r.cy;
                    });
                },
                layout: function() {
                    this.root.innerHTML = "", this.box.innerHTML = "";
                    const e = this.createTopic(this.nodeData);
                    b(e, this.nodeData), e.draggable = !1, this.root.appendChild(e);
                    const t = this.nodeData.children;
                    if (t && 0 !== t.length) {
                        if (2 === this.direction) {
                            let e1 = 0, n = 0;
                            t.map((t)=>{
                                void 0 === t.direction ? e1 <= n ? (t.direction = 0, e1 += 1) : (t.direction = 1, n += 1) : 0 === t.direction ? e1 += 1 : n += 1;
                            });
                        }
                        this.createChildren(this.nodeData.children, this.box, this.direction);
                    }
                },
                linkDiv: function(e) {
                    var t = this.primaryNodeHorizontalGap || 65, n = this.primaryNodeVerticalGap || 25;
                    const i = this.root;
                    i.style.cssText = `top:${1e4 - i.offsetHeight / 2}px;left:${1e4 - i.offsetWidth / 2}px;`;
                    const o = this.box.children;
                    this.lines.innerHTML = "";
                    let s, r, a = 0, l = 0, c = 0, d = 0, h = 0, p = 0;
                    if (2 === this.direction) {
                        let e1 = 0, t1 = 0, i1 = 0, a1 = 0;
                        for(let s1 = 0; s1 < o.length; s1++){
                            const r1 = o[s1];
                            "lhs" === r1.className ? (h += r1.offsetHeight + n, i1 += r1.offsetHeight, e1 += 1) : (p += r1.offsetHeight + n, a1 += r1.offsetHeight, t1 += 1);
                        }
                        h > p ? (r = 1e4 - Math.max(h) / 2, s = "r", l = (h - a1) / (t1 - 1)) : (r = 1e4 - Math.max(p) / 2, s = "l", l = (p - i1) / (e1 - 1));
                    } else {
                        for(let e2 = 0; e2 < o.length; e2++)a += o[e2].offsetHeight + n;
                        r = 1e4 - a / 2;
                    }
                    let u = "";
                    const m = 1e4 - i.offsetWidth / 2 - t, f = 1e4 + i.offsetWidth / 2 + t;
                    for(let e3 = 0; e3 < o.length; e3++){
                        let t2 = 1e4;
                        const a2 = 1e4;
                        let h1, p1;
                        const g1 = o[e3], b = g1.offsetHeight;
                        "lhs" === g1.className ? (g1.style.top = r + c + "px", g1.style.left = m - g1.offsetWidth + "px", h1 = m - 15, p1 = r + c + b / 2, c += "l" === s ? b + l : b + n) : (g1.style.top = r + d + "px", g1.style.left = f + "px", h1 = f + 15, p1 = r + d + b / 2, d += "r" === s ? b + l : b + n), 2 === this.primaryLinkStyle ? (2 === this.direction && (t2 = "lhs" === g1.className ? 1e4 - i.offsetWidth / 6 : 1e4 + i.offsetWidth / 6), u += L({
                            x1: t2,
                            y1: a2,
                            x2: h1,
                            y2: p1
                        })) : u += E({
                            x1: t2,
                            y1: a2,
                            x2: h1,
                            y2: p1
                        });
                        const y = g1.children[0].children[1];
                        y && (y.style.top = (y.parentNode.offsetHeight - y.offsetHeight) / 2 + "px", "lhs" === g1.className ? y.style.left = "-10px" : y.style.left = y.parentNode.offsetWidth - 10 + "px");
                    }
                    this.lines.appendChild(function(e) {
                        const t = x.createElementNS(N, "path");
                        return t.setAttribute("d", e), t.setAttribute("stroke", "#666"), t.setAttribute("fill", "none"), t.setAttribute("stroke-width", "2"), t;
                    }(u));
                    for(let t3 = 0; t3 < o.length; t3++){
                        const n1 = o[t3];
                        if ((!e || e === o[t3]) && n1.childElementCount) {
                            const e4 = v("subLines");
                            "svg" === n1.lastChild.tagName && n1.lastChild.remove(), n1.appendChild(e4);
                            const t4 = n1.children[0], i2 = j(n1.children[1].children, t4, !0);
                            e4.appendChild(k(i2));
                        }
                    }
                    this.linkSvgGroup.innerHTML = "";
                    for(const e5 in this.linkData){
                        const t5 = this.linkData[e5];
                        "string" == typeof t5.from ? this.createLink(g(t5.from), g(t5.to), !0, t5) : this.createLink(g(t5.from.nodeObj.id), g(t5.to.nodeObj.id), !0, t5);
                    }
                },
                createInputDiv: function(e) {
                    if (!e) return;
                    let t = f.createElement("div");
                    const n = e.childNodes[0].textContent;
                    e.appendChild(t), t.id = "input-box", t.textContent = n, t.contentEditable = "true", t.spellcheck = !1, t.style.cssText = `min-width:${e.offsetWidth - 8}px;`, 0 === this.direction && (t.style.right = "0"), t.focus(), function(e) {
                        const t = f.createRange();
                        t.selectNodeContents(e);
                        const n = window.getSelection();
                        n && (n.removeAllRanges(), n.addRange(t));
                    }(t), this.inputDiv = t, this.bus.fire("operation", {
                        name: "beginEdit",
                        obj: e.nodeObj
                    }), t.addEventListener("keydown", (e)=>{
                        e.stopPropagation();
                        const t = e.key;
                        if ("Enter" === t || "Tab" === t) {
                            if (e.shiftKey) return;
                            e.preventDefault(), this.inputDiv.blur(), this.map.focus();
                        }
                    }), t.addEventListener("blur", ()=>{
                        if (!t) return;
                        const i = e.nodeObj, o = t.textContent.trim();
                        i.topic = "" === o ? n : o, t.remove(), this.inputDiv = t = null, o !== n && (e.childNodes[0].textContent = i.topic, this.linkDiv(), this.bus.fire("operation", {
                            name: "finishEdit",
                            obj: i,
                            origin: n
                        }));
                    });
                },
                createChildren: function(e, t, n) {
                    let i;
                    i = t || f.createElement("children");
                    for(let t1 = 0; t1 < e.length; t1++){
                        const o = e[t1], s = f.createElement("GRP");
                        0 === n ? s.className = "lhs" : 1 === n ? s.className = "rhs" : 2 === n && (0 === o.direction ? s.className = "lhs" : 1 === o.direction && (s.className = "rhs"));
                        const r = this.createTop(o);
                        if (o.children && o.children.length > 0) {
                            if (r.appendChild(y(o.expanded)), s.appendChild(r), !1 !== o.expanded) {
                                const e1 = this.createChildren(o.children);
                                s.appendChild(e1);
                            }
                        } else s.appendChild(r);
                        i.appendChild(s);
                    }
                    return i;
                },
                createGroup: function(e, t) {
                    const n = f.createElement("GRP"), i = this.createTop(e);
                    if (n.appendChild(i), !t && e.children && e.children.length > 0 && (i.appendChild(y(e.expanded)), !1 !== e.expanded)) {
                        const t1 = this.createChildren(e.children);
                        n.appendChild(t1);
                    }
                    return {
                        grp: n,
                        top: i
                    };
                },
                createTop: function(e) {
                    const t = f.createElement("t"), n = this.createTopic(e);
                    return b(n, e), t.appendChild(n), t;
                },
                createTopic: function(e) {
                    const t = f.createElement("tpc");
                    return t.nodeObj = e, t.dataset.nodeid = "me" + e.id, t.draggable = this.draggable, t;
                },
                selectNode: function(e, t, n) {
                    if (e) {
                        if ("string" == typeof e) return this.selectNode(g(e));
                        this.currentNode && (this.currentNode.className = ""), e.className = "selected", this.currentNode = e, t ? this.bus.fire("selectNewNode", e.nodeObj, n) : this.bus.fire("selectNode", e.nodeObj, n);
                    }
                },
                unselectNode: function() {
                    this.currentNode && (this.currentNode.className = ""), this.currentNode = null, this.bus.fire("unselectNode");
                },
                selectNextSibling: function() {
                    if (!this.currentNode || "meroot" === this.currentNode.dataset.nodeid) return;
                    const e = this.currentNode.parentElement.parentElement.nextSibling;
                    let t;
                    const n = this.currentNode.parentElement.parentElement;
                    if ("rhs" === n.className || "lhs" === n.className) {
                        const e1 = this.mindElixirBox.querySelectorAll("." + n.className), i = Array.from(e1).indexOf(n);
                        if (!(i + 1 < e1.length)) return !1;
                        t = e1[i + 1].firstChild.firstChild;
                    } else {
                        if (!e) return !1;
                        t = e.firstChild.firstChild;
                    }
                    return this.selectNode(t), !0;
                },
                selectPrevSibling: function() {
                    if (!this.currentNode || "meroot" === this.currentNode.dataset.nodeid) return;
                    const e = this.currentNode.parentElement.parentElement.previousSibling;
                    let t;
                    const n = this.currentNode.parentElement.parentElement;
                    if ("rhs" === n.className || "lhs" === n.className) {
                        const e1 = this.mindElixirBox.querySelectorAll("." + n.className), i = Array.from(e1).indexOf(n);
                        if (!(i - 1 >= 0)) return !1;
                        t = e1[i - 1].firstChild.firstChild;
                    } else {
                        if (!e) return !1;
                        t = e.firstChild.firstChild;
                    }
                    return this.selectNode(t), !0;
                },
                selectFirstChild: function() {
                    if (!this.currentNode) return;
                    const e = this.currentNode.parentElement.nextSibling;
                    if (e && e.firstChild) {
                        const t = e.firstChild.firstChild.firstChild;
                        this.selectNode(t);
                    }
                },
                selectParent: function() {
                    if (!this.currentNode || "meroot" === this.currentNode.dataset.nodeid) return;
                    const e = this.currentNode.parentElement.parentElement.parentElement.previousSibling;
                    if (e) {
                        const t = e.firstChild;
                        this.selectNode(t);
                    }
                },
                getAllDataString: function() {
                    const e = {
                        nodeData: C(this),
                        linkData: this.linkData,
                        direction: this.direction
                    };
                    return JSON.stringify(e, (e, t)=>{
                        if ("parent" !== e) return "from" === e || "to" === e ? t.nodeObj.id : t;
                    });
                },
                getAllData: function() {
                    const e = {
                        nodeData: C(this),
                        linkData: this.linkData,
                        direction: this.direction
                    };
                    return JSON.parse(JSON.stringify(e, (e, t)=>{
                        if ("parent" !== e) return "from" === e || "to" === e ? t.nodeObj.id : t;
                    }));
                },
                getAllDataMd: function() {
                    const e = C(this);
                    let t = "# " + e.topic + "\n\n";
                    return function e(n, i) {
                        for(let o = 0; o < n.length; o++)t += i <= 6 ? "".padStart(i, "#") + " " + n[o].topic + "\n\n" : "".padStart(i - 7, "	") + "- " + n[o].topic + "\n", n[o].children && e(n[o].children, i + 1);
                    }(e.children, 2), t;
                },
                scale: function(e) {
                    this.scaleVal = e, this.map.style.transform = "scale(" + e + ")";
                },
                toCenter: function() {
                    this.container.scrollTo(1e4 - this.container.offsetWidth / 2, 1e4 - this.container.offsetHeight / 2);
                },
                focusNode: function(e) {
                    e.nodeObj.root || (null === this.tempDirection && (this.tempDirection = this.direction), this.isFocusMode || (this.nodeDataBackup = this.nodeData, this.isFocusMode = !0), this.nodeData = e.nodeObj, this.nodeData.root = !0, this.initRight(), this.toCenter());
                },
                cancelFocus: function() {
                    this.isFocusMode = !1, null !== this.tempDirection && (delete this.nodeData.root, this.nodeData = this.nodeDataBackup, this.direction = this.tempDirection, this.tempDirection = null, this.refresh(), this.toCenter());
                },
                initLeft: function() {
                    this.direction = 0, this.refresh();
                },
                initRight: function() {
                    this.direction = 1, this.refresh();
                },
                initSide: function() {
                    this.direction = 2, this.refresh();
                },
                setLocale: function(e) {
                    this.locale = e, this.refresh();
                },
                enableEdit: function() {
                    this.editable = !0;
                },
                disableEdit: function() {
                    this.editable = !1;
                },
                expandNode: function(e, t) {
                    const n = e.nodeObj;
                    "boolean" == typeof t ? n.expanded = t : !1 !== n.expanded ? n.expanded = !1 : n.expanded = !0, this.layout(), this.linkDiv(), this.bus.fire("expandNode", n);
                },
                refresh: function(e) {
                    e && (this.nodeData = e.nodeData, this.linkData = e.linkData || {}), this.addParentLink(this.nodeData), this.layout(), this.linkDiv();
                },
                install (e) {
                    e(this);
                },
                init (e) {
                    if (!e || !e.nodeData) return new Error("MindElixir: `data` is required");
                    e.direction && (this.direction = e.direction), this.nodeData = e.nodeData, this.linkData = e.linkData || {}, this.toolBar && J(this), this.nodeMenu && function(e) {
                        function t(t, n) {
                            var i = e.container.querySelectorAll(t);
                            [].forEach.call(i, function(e) {
                                e.classList.remove(n);
                            });
                        }
                        const n = T[e.locale] ? e.locale : "en", i = ee("nm-style", `\n  <div class="nm-fontsize-container">\n    ${[
                            "15",
                            "24",
                            "32"
                        ].map((e)=>`<div class="size"  data-size="${e}">\n    <svg class="icon" style="width: ${e}px;height: ${e}px" aria-hidden="true">\n      <use xlink:href="#icon-a"></use>\n    </svg></div>`).join("")}<div class="bold"><svg class="icon" aria-hidden="true">\n<use xlink:href="#icon-B"></use>\n</svg></div>\n  </div>\n  <div class="nm-fontcolor-container">\n    ${te.map((e)=>`<div class="split6"><div class="palette" data-color="${e}" style="background-color: ${e};"></div></div>`).join("")}\n  </div>\n  <div class="bof">\n  <span class="font">${T[n].font}</span>\n  <span class="background">${T[n].background}</span>\n  </div>`), o = ee("nm-tag", `${T[n].tag}<input class="nm-tag" tabindex="-1" placeholder="${T[n].tagsSeparate}" />`), s = ee("nm-icon", `${T[n].icon}<input class="nm-icon" tabindex="-1" placeholder="${T[n].iconsSeparate}" />`), r = ee("nm-url", `${T[n].url}<input class="nm-url" tabindex="-1" />`), a = ee("nm-memo", `${T[n].memo || "Memo"}<textarea class="nm-memo" rows="5" tabindex="-1" />`), l = document.createElement("nmenu");
                        l.innerHTML = '\n  <div class="button-container"><svg class="icon" aria-hidden="true">\n  <use xlink:href="#icon-close"></use>\n  </svg></div>\n  ', l.appendChild(i), l.appendChild(o), l.appendChild(s), l.appendChild(r), l.appendChild(a), l.hidden = !0, e.container.append(l);
                        const c = l.querySelectorAll(".size"), d = l.querySelector(".bold"), h = l.querySelector(".button-container"), p = l.querySelector(".font"), u = e.container.querySelector(".nm-tag"), m = e.container.querySelector(".nm-icon"), f = e.container.querySelector(".nm-url"), g = e.container.querySelector(".nm-memo");
                        let b;
                        l.onclick = (n)=>{
                            if (!e.currentNode) return;
                            const i = e.currentNode.nodeObj, o = n.target;
                            "palette" === o.className ? (i.style || (i.style = {}), t(".palette", "nmenu-selected"), o.className = "palette nmenu-selected", "font" === b ? i.style.color = o.dataset.color : "background" === b && (i.style.background = o.dataset.color), e.updateNodeStyle(i)) : "background" === o.className ? (t(".palette", "nmenu-selected"), b = "background", o.className = "background selected", o.previousElementSibling.className = "font", i.style && i.style.background && (l.querySelector('.palette[data-color="' + i.style.background + '"]').className = "palette nmenu-selected")) : "font" === o.className && (t(".palette", "nmenu-selected"), b = "font", o.className = "font selected", o.nextElementSibling.className = "background", i.style && i.style.color && (l.querySelector('.palette[data-color="' + i.style.color + '"]').className = "palette nmenu-selected"));
                        }, Array.from(c).map((n)=>{
                            n.onclick = (n)=>{
                                e.currentNode.nodeObj.style || (e.currentNode.nodeObj.style = {}), t(".size", "size-selected");
                                const i = n.currentTarget;
                                e.currentNode.nodeObj.style.fontSize = i.dataset.size, i.className = "size size-selected", e.updateNodeStyle(e.currentNode.nodeObj);
                            };
                        }), d.onclick = (t)=>{
                            e.currentNode.nodeObj.style || (e.currentNode.nodeObj.style = {}), "bold" === e.currentNode.nodeObj.style.fontWeight ? (delete e.currentNode.nodeObj.style.fontWeight, t.currentTarget.className = "bold", e.updateNodeStyle(e.currentNode.nodeObj)) : (e.currentNode.nodeObj.style.fontWeight = "bold", t.currentTarget.className = "bold size-selected", e.updateNodeStyle(e.currentNode.nodeObj));
                        }, u.onchange = (t)=>{
                            if (e.currentNode && "string" == typeof t.target.value) {
                                const n = t.target.value.split(",");
                                e.updateNodeTags(e.currentNode.nodeObj, n.filter((e)=>e));
                            }
                        }, m.onchange = (t)=>{
                            if (e.currentNode && "string" == typeof t.target.value) {
                                const n = t.target.value.split(",");
                                e.updateNodeIcons(e.currentNode.nodeObj, n.filter((e)=>e));
                            }
                        }, f.onchange = (t)=>{
                            e.currentNode && e.updateNodeHyperLink(e.currentNode.nodeObj, t.target.value);
                        }, g.onchange = (t)=>{
                            e.currentNode && (e.currentNode.nodeObj.memo = t.target.value);
                        };
                        let y = "open";
                        h.onclick = (e)=>{
                            "open" === y ? (y = "close", l.className = "close", h.innerHTML = '<svg class="icon" aria-hidden="true"><use xlink:href="#icon-menu"></use></svg>') : (y = "open", l.className = "", h.innerHTML = '<svg class="icon" aria-hidden="true"><use xlink:href="#icon-close"></use></svg>');
                        }, e.bus.addListener("unselectNode", function() {
                            l.hidden = !0;
                        }), e.bus.addListener("selectNode", function(e, n) {
                            n && (l.hidden = !1, t(".palette", "nmenu-selected"), t(".size", "size-selected"), t(".bold", "size-selected"), b = "font", p.className = "font selected", p.nextElementSibling.className = "background", e.style && (e.style.fontSize && (l.querySelector('.size[data-size="' + e.style.fontSize + '"]').className = "size size-selected"), e.style.fontWeight && (l.querySelector(".bold").className = "bold size-selected"), e.style.color && (l.querySelector('.palette[data-color="' + e.style.color + '"]').className = "palette nmenu-selected")), e.tags ? u.value = e.tags.join(",") : u.value = "", e.icons ? m.value = e.icons.join(",") : m.value = "", f.value = e.hyperLink || "", g.value = e.memo || "");
                        });
                    }(this), this.keypress && function(e) {
                        const t = {
                            13: ()=>{
                                e.insertSibling();
                            },
                            9: ()=>{
                                e.addChild();
                            },
                            113: ()=>{
                                e.beginEdit();
                            },
                            38: ()=>{
                                e.selectPrevSibling();
                            },
                            40: ()=>{
                                e.selectNextSibling();
                            },
                            37: ()=>{
                                e.currentNode && ("rhs" === e.currentNode.offsetParent.offsetParent.className ? e.selectParent() : ("lhs" === e.currentNode.offsetParent.offsetParent.className || e.currentNode.nodeObj.root) && e.selectFirstChild());
                            },
                            39: ()=>{
                                e.currentNode && ("rhs" === e.currentNode.offsetParent.offsetParent.className || e.currentNode.nodeObj.root ? e.selectFirstChild() : "lhs" === e.currentNode.offsetParent.offsetParent.className && e.selectParent());
                            },
                            33 () {
                                e.moveUpNode();
                            },
                            34 () {
                                e.moveDownNode();
                            },
                            67 (t) {
                                (t.metaKey || t.ctrlKey) && (e.waitCopy = e.currentNode);
                            },
                            86 (t) {
                                e.waitCopy && (t.metaKey || t.ctrlKey) && (e.copyNode(e.waitCopy, e.currentNode), e.waitCopy = null);
                            },
                            90: (t)=>{
                                e.allowUndo && (t.metaKey || t.ctrlKey) && e.undo();
                            },
                            187: (t)=>{
                                if (t.metaKey || t.ctrlKey) {
                                    if (e.scaleVal > 1.6) return;
                                    e.scale(e.scaleVal += .2);
                                }
                            },
                            189: (t)=>{
                                if (t.metaKey || t.ctrlKey) {
                                    if (e.scaleVal < .6) return;
                                    e.scale(e.scaleVal -= .2);
                                }
                            }
                        };
                        e.map.onkeydown = (n)=>{
                            n.preventDefault(), e.editable && n.target === n.currentTarget && (8 === n.keyCode || 46 === n.keyCode ? e.currentLink ? e.removeLink() : e.removeNode() : t[n.keyCode] && t[n.keyCode](n));
                        };
                    }(this), /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && this.mobileMenu ? function(e, t) {
                        const n = (e, t)=>{
                            const n = document.createElement("div");
                            return n.id = e, n.innerHTML = `<svg class="icon" aria-hidden="true">\n    <use xlink:href="#icon-${t}"></use>\n  </svg>`, n;
                        }, i = n("cm-add_child", "zijiedian"), o = n("cm-add_sibling", "tongjijiedian-"), s = n("cm-remove_child", "shanchu2"), r = n("cm-up", "rising"), a = n("cm-down", "falling"), l = n("cm-edit", "edit"), c = document.createElement("ul");
                        if (c.className = "menu-list", t && t.extend) for(let e1 = 0; e1 < t.extend.length; e1++){
                            const i1 = t.extend[e1], o1 = n(i1.name, i1.name);
                            c.appendChild(o1), o1.onclick = (e)=>{
                                i1.onclick(e);
                            };
                        }
                        const d = document.createElement("mmenu");
                        d.appendChild(i), d.appendChild(o), d.appendChild(s), d.appendChild(r), d.appendChild(a), d.appendChild(l), d.hidden = !0, e.container.append(d);
                        let h = !0;
                        e.bus.addListener("unselectNode", function() {
                            d.hidden = !0;
                        }), e.bus.addListener("selectNode", function(e) {
                            d.hidden = !1, h = !!e.root;
                        }), d.onclick = (e)=>{
                            e.target === d && (d.hidden = !0);
                        }, i.onclick = (t)=>{
                            e.addChild();
                        }, o.onclick = (t)=>{
                            h || e.insertSibling();
                        }, s.onclick = (t)=>{
                            h || e.removeNode();
                        }, r.onclick = (t)=>{
                            h || e.moveUpNode();
                        }, a.onclick = (t)=>{
                            h || e.moveDownNode();
                        }, l.onclick = (t)=>{
                            e.beginEdit();
                        };
                    }(this) : this.contextMenu && U(this, this.contextMenuOption), this.draggable && re(this), s(this.nodeData), this.toCenter(), this.layout(), this.linkDiv();
                }
            }, fe.LEFT = 0, fe.RIGHT = 1, fe.SIDE = 2, fe.version = "1.0.0", fe.E = g, fe.new = (e)=>({
                    nodeData: {
                        id: h(),
                        topic: e || "new topic",
                        root: !0,
                        children: []
                    },
                    linkData: {}
                });
            const be = fe;
        })(), i = i.default;
    })();
});

},{}],"cjhRo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function e(e, t) {
    for(var o = 0; o < t.length; o++){
        var n = t[o];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
    }
}
function t(e) {
    return function(e) {
        if (Array.isArray(e)) return o(e);
    }(e) || function(e) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
    }(e) || function(e, t) {
        if (!e) return;
        if ("string" == typeof e) return o(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === n && e.constructor && (n = e.constructor.name);
        if ("Map" === n || "Set" === n) return Array.from(e);
        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return o(e, t);
    }(e) || function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
}
function o(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for(var o = 0, n = new Array(t); o < t; o++)n[o] = e[o];
    return n;
}
var n, i, a, r, s, l = (n = [
    "a[href]",
    "area[href]",
    'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
    "select:not([disabled]):not([aria-hidden])",
    "textarea:not([disabled]):not([aria-hidden])",
    "button:not([disabled]):not([aria-hidden])",
    "iframe",
    "object",
    "embed",
    "[contenteditable]",
    '[tabindex]:not([tabindex^="-"])'
], i = function() {
    function o(e) {
        var n = e.targetModal, i = e.triggers, a = void 0 === i ? [] : i, r = e.onShow, s = void 0 === r ? function() {} : r, l = e.onClose, c = void 0 === l ? function() {} : l, d = e.openTrigger, u = void 0 === d ? "data-micromodal-trigger" : d, f = e.closeTrigger, h = void 0 === f ? "data-micromodal-close" : f, v = e.openClass, g = void 0 === v ? "is-open" : v, m = e.disableScroll, b = void 0 !== m && m, y = e.disableFocus, p = void 0 !== y && y, w = e.awaitCloseAnimation, E = void 0 !== w && w, k = e.awaitOpenAnimation, M = void 0 !== k && k, A = e.debugMode, C = void 0 !== A && A;
        !function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, o), this.modal = document.getElementById(n), this.config = {
            debugMode: C,
            disableScroll: b,
            openTrigger: u,
            closeTrigger: h,
            openClass: g,
            onShow: s,
            onClose: c,
            awaitCloseAnimation: E,
            awaitOpenAnimation: M,
            disableFocus: p
        }, a.length > 0 && this.registerTriggers.apply(this, t(a)), this.onClick = this.onClick.bind(this), this.onKeydown = this.onKeydown.bind(this);
    }
    var i, a, r;
    return i = o, a = [
        {
            key: "registerTriggers",
            value: function() {
                for(var e = this, t = arguments.length, o = new Array(t), n = 0; n < t; n++)o[n] = arguments[n];
                o.filter(Boolean).forEach(function(t) {
                    t.addEventListener("click", function(t) {
                        return e.showModal(t);
                    });
                });
            }
        },
        {
            key: "showModal",
            value: function() {
                var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                if (this.activeElement = document.activeElement, this.modal.setAttribute("aria-hidden", "false"), this.modal.classList.add(this.config.openClass), this.scrollBehaviour("disable"), this.addEventListeners(), this.config.awaitOpenAnimation) {
                    var o = function t() {
                        e.modal.removeEventListener("animationend", t, !1), e.setFocusToFirstNode();
                    };
                    this.modal.addEventListener("animationend", o, !1);
                } else this.setFocusToFirstNode();
                this.config.onShow(this.modal, this.activeElement, t);
            }
        },
        {
            key: "closeModal",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null, t = this.modal;
                if (this.modal.setAttribute("aria-hidden", "true"), this.removeEventListeners(), this.scrollBehaviour("enable"), this.activeElement && this.activeElement.focus && this.activeElement.focus(), this.config.onClose(this.modal, this.activeElement, e), this.config.awaitCloseAnimation) {
                    var o = this.config.openClass;
                    this.modal.addEventListener("animationend", function e() {
                        t.classList.remove(o), t.removeEventListener("animationend", e, !1);
                    }, !1);
                } else t.classList.remove(this.config.openClass);
            }
        },
        {
            key: "closeModalById",
            value: function(e) {
                this.modal = document.getElementById(e), this.modal && this.closeModal();
            }
        },
        {
            key: "scrollBehaviour",
            value: function(e) {
                if (this.config.disableScroll) {
                    var t = document.querySelector("body");
                    switch(e){
                        case "enable":
                            Object.assign(t.style, {
                                overflow: ""
                            });
                            break;
                        case "disable":
                            Object.assign(t.style, {
                                overflow: "hidden"
                            });
                    }
                }
            }
        },
        {
            key: "addEventListeners",
            value: function() {
                this.modal.addEventListener("touchstart", this.onClick), this.modal.addEventListener("click", this.onClick), document.addEventListener("keydown", this.onKeydown);
            }
        },
        {
            key: "removeEventListeners",
            value: function() {
                this.modal.removeEventListener("touchstart", this.onClick), this.modal.removeEventListener("click", this.onClick), document.removeEventListener("keydown", this.onKeydown);
            }
        },
        {
            key: "onClick",
            value: function(e) {
                (e.target.hasAttribute(this.config.closeTrigger) || e.target.parentNode.hasAttribute(this.config.closeTrigger)) && (e.preventDefault(), e.stopPropagation(), this.closeModal(e));
            }
        },
        {
            key: "onKeydown",
            value: function(e) {
                27 === e.keyCode && this.closeModal(e), 9 === e.keyCode && this.retainFocus(e);
            }
        },
        {
            key: "getFocusableNodes",
            value: function() {
                var e = this.modal.querySelectorAll(n);
                return Array.apply(void 0, t(e));
            }
        },
        {
            key: "setFocusToFirstNode",
            value: function() {
                var e = this;
                if (!this.config.disableFocus) {
                    var t = this.getFocusableNodes();
                    if (0 !== t.length) {
                        var o = t.filter(function(t) {
                            return !t.hasAttribute(e.config.closeTrigger);
                        });
                        o.length > 0 && o[0].focus(), 0 === o.length && t[0].focus();
                    }
                }
            }
        },
        {
            key: "retainFocus",
            value: function(e) {
                var t = this.getFocusableNodes();
                if (0 !== t.length) {
                    if (t = t.filter(function(e) {
                        return null !== e.offsetParent;
                    }), this.modal.contains(document.activeElement)) {
                        var o = t.indexOf(document.activeElement);
                        e.shiftKey && 0 === o && (t[t.length - 1].focus(), e.preventDefault()), !e.shiftKey && t.length > 0 && o === t.length - 1 && (t[0].focus(), e.preventDefault());
                    } else t[0].focus();
                }
            }
        }
    ], e(i.prototype, a), r && e(i, r), o;
}(), a = null, r = function(e) {
    if (!document.getElementById(e)) return console.warn("MicroModal: ❗Seems like you have missed %c'".concat(e, "'"), "background-color: #f8f9fa;color: #50596c;font-weight: bold;", "ID somewhere in your code. Refer example below to resolve it."), console.warn("%cExample:", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", '<div class="modal" id="'.concat(e, '"></div>')), !1;
}, s = function(e, t) {
    if (function(e) {
        e.length <= 0 && (console.warn("MicroModal: ❗Please specify at least one %c'micromodal-trigger'", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", "data attribute."), console.warn("%cExample:", "background-color: #f8f9fa;color: #50596c;font-weight: bold;", '<a href="#" data-micromodal-trigger="my-modal"></a>'));
    }(e), !t) return !0;
    for(var o in t)r(o);
    return !0;
}, {
    init: function(e) {
        var o = Object.assign({}, {
            openTrigger: "data-micromodal-trigger"
        }, e), n = t(document.querySelectorAll("[".concat(o.openTrigger, "]"))), r = function(e, t) {
            var o = [];
            return e.forEach(function(e) {
                var n = e.attributes[t].value;
                void 0 === o[n] && (o[n] = []), o[n].push(e);
            }), o;
        }(n, o.openTrigger);
        if (!0 !== o.debugMode || !1 !== s(n, r)) for(var l in r){
            var c = r[l];
            o.targetModal = l, o.triggers = t(c), a = new i(o);
        }
    },
    show: function(e, t) {
        var o = t || {};
        o.targetModal = e, !0 === o.debugMode && !1 === r(e) || (a && a.removeEventListeners(), (a = new i(o)).showModal());
    },
    close: function(e) {
        e ? a.closeModalById(e) : a.closeModal();
    }
});
"undefined" != typeof window && (window.MicroModal = l);
exports.default = l;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"j4KJi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "v1", ()=>(0, _v1JsDefault.default));
parcelHelpers.export(exports, "v3", ()=>(0, _v3JsDefault.default));
parcelHelpers.export(exports, "v4", ()=>(0, _v4JsDefault.default));
parcelHelpers.export(exports, "v5", ()=>(0, _v5JsDefault.default));
parcelHelpers.export(exports, "NIL", ()=>(0, _nilJsDefault.default));
parcelHelpers.export(exports, "version", ()=>(0, _versionJsDefault.default));
parcelHelpers.export(exports, "validate", ()=>(0, _validateJsDefault.default));
parcelHelpers.export(exports, "stringify", ()=>(0, _stringifyJsDefault.default));
parcelHelpers.export(exports, "parse", ()=>(0, _parseJsDefault.default));
var _v1Js = require("./v1.js");
var _v1JsDefault = parcelHelpers.interopDefault(_v1Js);
var _v3Js = require("./v3.js");
var _v3JsDefault = parcelHelpers.interopDefault(_v3Js);
var _v4Js = require("./v4.js");
var _v4JsDefault = parcelHelpers.interopDefault(_v4Js);
var _v5Js = require("./v5.js");
var _v5JsDefault = parcelHelpers.interopDefault(_v5Js);
var _nilJs = require("./nil.js");
var _nilJsDefault = parcelHelpers.interopDefault(_nilJs);
var _versionJs = require("./version.js");
var _versionJsDefault = parcelHelpers.interopDefault(_versionJs);
var _validateJs = require("./validate.js");
var _validateJsDefault = parcelHelpers.interopDefault(_validateJs);
var _stringifyJs = require("./stringify.js");
var _stringifyJsDefault = parcelHelpers.interopDefault(_stringifyJs);
var _parseJs = require("./parse.js");
var _parseJsDefault = parcelHelpers.interopDefault(_parseJs);

},{"./v1.js":false,"./v3.js":false,"./v4.js":"8zJtu","./v5.js":false,"./nil.js":false,"./version.js":false,"./validate.js":"eHPgI","./stringify.js":"5Y9F1","./parse.js":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8zJtu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _nativeJs = require("./native.js");
var _nativeJsDefault = parcelHelpers.interopDefault(_nativeJs);
var _rngJs = require("./rng.js");
var _rngJsDefault = parcelHelpers.interopDefault(_rngJs);
var _stringifyJs = require("./stringify.js");
function v4(options, buf, offset) {
    if ((0, _nativeJsDefault.default).randomUUID && !buf && !options) return (0, _nativeJsDefault.default).randomUUID();
    options = options || {};
    const rnds = options.random || (options.rng || (0, _rngJsDefault.default))(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
    rnds[6] = rnds[6] & 0x0f | 0x40;
    rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided
    if (buf) {
        offset = offset || 0;
        for(let i = 0; i < 16; ++i)buf[offset + i] = rnds[i];
        return buf;
    }
    return (0, _stringifyJs.unsafeStringify)(rnds);
}
exports.default = v4;

},{"./native.js":"lYayS","./rng.js":"2psyE","./stringify.js":"5Y9F1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lYayS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const randomUUID = typeof crypto !== "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
exports.default = {
    randomUUID
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2psyE":[function(require,module,exports) {
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
    // lazy load so that environments that need to polyfill have a chance to do so
    if (!getRandomValues) {
        // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
        getRandomValues = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);
        if (!getRandomValues) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    }
    return getRandomValues(rnds8);
}
exports.default = rng;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5Y9F1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "unsafeStringify", ()=>unsafeStringify);
var _validateJs = require("./validate.js");
var _validateJsDefault = parcelHelpers.interopDefault(_validateJs);
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */ const byteToHex = [];
for(let i = 0; i < 256; ++i)byteToHex.push((i + 0x100).toString(16).slice(1));
function unsafeStringify(arr, offset = 0) {
    // Note: Be careful editing this code!  It's been tuned for performance
    // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
    return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}
function stringify(arr, offset = 0) {
    const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
    // of the following:
    // - One or more input array values don't map to a hex octet (leading to
    // "undefined" in the uuid)
    // - Invalid input values for the RFC `version` or `variant` fields
    if (!(0, _validateJsDefault.default)(uuid)) throw TypeError("Stringified UUID is invalid");
    return uuid;
}
exports.default = stringify;

},{"./validate.js":"eHPgI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eHPgI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _regexJs = require("./regex.js");
var _regexJsDefault = parcelHelpers.interopDefault(_regexJs);
function validate(uuid) {
    return typeof uuid === "string" && (0, _regexJsDefault.default).test(uuid);
}
exports.default = validate;

},{"./regex.js":"bUa5g","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bUa5g":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"loE3o":[function(require,module,exports) {
// 'path' module extracted from Node.js v8.11.1 (only the posix part)
// transplited with Babel
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var process = require("process");
"use strict";
function assertPath(path) {
    if (typeof path !== "string") throw new TypeError("Path must be a string. Received " + JSON.stringify(path));
}
// Resolves . and .. elements in a path with directory names
function normalizeStringPosix(path, allowAboveRoot) {
    var res = "";
    var lastSegmentLength = 0;
    var lastSlash = -1;
    var dots = 0;
    var code;
    for(var i = 0; i <= path.length; ++i){
        if (i < path.length) code = path.charCodeAt(i);
        else if (code === 47 /*/*/ ) break;
        else code = 47 /*/*/ ;
        if (code === 47 /*/*/ ) {
            if (lastSlash === i - 1 || dots === 1) ;
            else if (lastSlash !== i - 1 && dots === 2) {
                if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== 46 /*.*/  || res.charCodeAt(res.length - 2) !== 46 /*.*/ ) {
                    if (res.length > 2) {
                        var lastSlashIndex = res.lastIndexOf("/");
                        if (lastSlashIndex !== res.length - 1) {
                            if (lastSlashIndex === -1) {
                                res = "";
                                lastSegmentLength = 0;
                            } else {
                                res = res.slice(0, lastSlashIndex);
                                lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
                            }
                            lastSlash = i;
                            dots = 0;
                            continue;
                        }
                    } else if (res.length === 2 || res.length === 1) {
                        res = "";
                        lastSegmentLength = 0;
                        lastSlash = i;
                        dots = 0;
                        continue;
                    }
                }
                if (allowAboveRoot) {
                    if (res.length > 0) res += "/..";
                    else res = "..";
                    lastSegmentLength = 2;
                }
            } else {
                if (res.length > 0) res += "/" + path.slice(lastSlash + 1, i);
                else res = path.slice(lastSlash + 1, i);
                lastSegmentLength = i - lastSlash - 1;
            }
            lastSlash = i;
            dots = 0;
        } else if (code === 46 /*.*/  && dots !== -1) ++dots;
        else dots = -1;
    }
    return res;
}
function _format(sep, pathObject) {
    var dir = pathObject.dir || pathObject.root;
    var base = pathObject.base || (pathObject.name || "") + (pathObject.ext || "");
    if (!dir) return base;
    if (dir === pathObject.root) return dir + base;
    return dir + sep + base;
}
var posix = {
    // path.resolve([from ...], to)
    resolve: function resolve() {
        var resolvedPath = "";
        var resolvedAbsolute = false;
        var cwd;
        for(var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--){
            var path;
            if (i >= 0) path = arguments[i];
            else {
                if (cwd === undefined) cwd = process.cwd();
                path = cwd;
            }
            assertPath(path);
            // Skip empty entries
            if (path.length === 0) continue;
            resolvedPath = path + "/" + resolvedPath;
            resolvedAbsolute = path.charCodeAt(0) === 47 /*/*/ ;
        }
        // At this point the path should be resolved to a full absolute path, but
        // handle relative paths to be safe (might happen when process.cwd() fails)
        // Normalize the path
        resolvedPath = normalizeStringPosix(resolvedPath, !resolvedAbsolute);
        if (resolvedAbsolute) {
            if (resolvedPath.length > 0) return "/" + resolvedPath;
            else return "/";
        } else if (resolvedPath.length > 0) return resolvedPath;
        else return ".";
    },
    normalize: function normalize(path) {
        assertPath(path);
        if (path.length === 0) return ".";
        var isAbsolute = path.charCodeAt(0) === 47 /*/*/ ;
        var trailingSeparator = path.charCodeAt(path.length - 1) === 47 /*/*/ ;
        // Normalize the path
        path = normalizeStringPosix(path, !isAbsolute);
        if (path.length === 0 && !isAbsolute) path = ".";
        if (path.length > 0 && trailingSeparator) path += "/";
        if (isAbsolute) return "/" + path;
        return path;
    },
    isAbsolute: function isAbsolute(path) {
        assertPath(path);
        return path.length > 0 && path.charCodeAt(0) === 47 /*/*/ ;
    },
    join: function join() {
        if (arguments.length === 0) return ".";
        var joined;
        for(var i = 0; i < arguments.length; ++i){
            var arg = arguments[i];
            assertPath(arg);
            if (arg.length > 0) {
                if (joined === undefined) joined = arg;
                else joined += "/" + arg;
            }
        }
        if (joined === undefined) return ".";
        return posix.normalize(joined);
    },
    relative: function relative(from, to) {
        assertPath(from);
        assertPath(to);
        if (from === to) return "";
        from = posix.resolve(from);
        to = posix.resolve(to);
        if (from === to) return "";
        // Trim any leading backslashes
        var fromStart = 1;
        for(; fromStart < from.length; ++fromStart){
            if (from.charCodeAt(fromStart) !== 47 /*/*/ ) break;
        }
        var fromEnd = from.length;
        var fromLen = fromEnd - fromStart;
        // Trim any leading backslashes
        var toStart = 1;
        for(; toStart < to.length; ++toStart){
            if (to.charCodeAt(toStart) !== 47 /*/*/ ) break;
        }
        var toEnd = to.length;
        var toLen = toEnd - toStart;
        // Compare paths to find the longest common path from root
        var length = fromLen < toLen ? fromLen : toLen;
        var lastCommonSep = -1;
        var i = 0;
        for(; i <= length; ++i){
            if (i === length) {
                if (toLen > length) {
                    if (to.charCodeAt(toStart + i) === 47 /*/*/ ) // We get here if `from` is the exact base path for `to`.
                    // For example: from='/foo/bar'; to='/foo/bar/baz'
                    return to.slice(toStart + i + 1);
                    else if (i === 0) // We get here if `from` is the root
                    // For example: from='/'; to='/foo'
                    return to.slice(toStart + i);
                } else if (fromLen > length) {
                    if (from.charCodeAt(fromStart + i) === 47 /*/*/ ) // We get here if `to` is the exact base path for `from`.
                    // For example: from='/foo/bar/baz'; to='/foo/bar'
                    lastCommonSep = i;
                    else if (i === 0) // We get here if `to` is the root.
                    // For example: from='/foo'; to='/'
                    lastCommonSep = 0;
                }
                break;
            }
            var fromCode = from.charCodeAt(fromStart + i);
            var toCode = to.charCodeAt(toStart + i);
            if (fromCode !== toCode) break;
            else if (fromCode === 47 /*/*/ ) lastCommonSep = i;
        }
        var out = "";
        // Generate the relative path based on the path difference between `to`
        // and `from`
        for(i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i)if (i === fromEnd || from.charCodeAt(i) === 47 /*/*/ ) {
            if (out.length === 0) out += "..";
            else out += "/..";
        }
        // Lastly, append the rest of the destination (`to`) path that comes after
        // the common path parts
        if (out.length > 0) return out + to.slice(toStart + lastCommonSep);
        else {
            toStart += lastCommonSep;
            if (to.charCodeAt(toStart) === 47 /*/*/ ) ++toStart;
            return to.slice(toStart);
        }
    },
    _makeLong: function _makeLong(path) {
        return path;
    },
    dirname: function dirname(path) {
        assertPath(path);
        if (path.length === 0) return ".";
        var code = path.charCodeAt(0);
        var hasRoot = code === 47 /*/*/ ;
        var end = -1;
        var matchedSlash = true;
        for(var i = path.length - 1; i >= 1; --i){
            code = path.charCodeAt(i);
            if (code === 47 /*/*/ ) {
                if (!matchedSlash) {
                    end = i;
                    break;
                }
            } else // We saw the first non-path separator
            matchedSlash = false;
        }
        if (end === -1) return hasRoot ? "/" : ".";
        if (hasRoot && end === 1) return "//";
        return path.slice(0, end);
    },
    basename: function basename(path, ext) {
        if (ext !== undefined && typeof ext !== "string") throw new TypeError('"ext" argument must be a string');
        assertPath(path);
        var start = 0;
        var end = -1;
        var matchedSlash = true;
        var i;
        if (ext !== undefined && ext.length > 0 && ext.length <= path.length) {
            if (ext.length === path.length && ext === path) return "";
            var extIdx = ext.length - 1;
            var firstNonSlashEnd = -1;
            for(i = path.length - 1; i >= 0; --i){
                var code = path.charCodeAt(i);
                if (code === 47 /*/*/ ) // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                {
                    if (!matchedSlash) {
                        start = i + 1;
                        break;
                    }
                } else {
                    if (firstNonSlashEnd === -1) {
                        // We saw the first non-path separator, remember this index in case
                        // we need it if the extension ends up not matching
                        matchedSlash = false;
                        firstNonSlashEnd = i + 1;
                    }
                    if (extIdx >= 0) {
                        // Try to match the explicit extension
                        if (code === ext.charCodeAt(extIdx)) {
                            if (--extIdx === -1) // We matched the extension, so mark this as the end of our path
                            // component
                            end = i;
                        } else {
                            // Extension does not match, so our result is the entire path
                            // component
                            extIdx = -1;
                            end = firstNonSlashEnd;
                        }
                    }
                }
            }
            if (start === end) end = firstNonSlashEnd;
            else if (end === -1) end = path.length;
            return path.slice(start, end);
        } else {
            for(i = path.length - 1; i >= 0; --i){
                if (path.charCodeAt(i) === 47 /*/*/ ) // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                {
                    if (!matchedSlash) {
                        start = i + 1;
                        break;
                    }
                } else if (end === -1) {
                    // We saw the first non-path separator, mark this as the end of our
                    // path component
                    matchedSlash = false;
                    end = i + 1;
                }
            }
            if (end === -1) return "";
            return path.slice(start, end);
        }
    },
    extname: function extname(path) {
        assertPath(path);
        var startDot = -1;
        var startPart = 0;
        var end = -1;
        var matchedSlash = true;
        // Track the state of characters (if any) we see before our first dot and
        // after any path separator we find
        var preDotState = 0;
        for(var i = path.length - 1; i >= 0; --i){
            var code = path.charCodeAt(i);
            if (code === 47 /*/*/ ) {
                // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                if (!matchedSlash) {
                    startPart = i + 1;
                    break;
                }
                continue;
            }
            if (end === -1) {
                // We saw the first non-path separator, mark this as the end of our
                // extension
                matchedSlash = false;
                end = i + 1;
            }
            if (code === 46 /*.*/ ) {
                // If this is our first dot, mark it as the start of our extension
                if (startDot === -1) startDot = i;
                else if (preDotState !== 1) preDotState = 1;
            } else if (startDot !== -1) // We saw a non-dot and non-path separator before our dot, so we should
            // have a good chance at having a non-empty extension
            preDotState = -1;
        }
        if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
        preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
        preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) return "";
        return path.slice(startDot, end);
    },
    format: function format(pathObject) {
        if (pathObject === null || typeof pathObject !== "object") throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof pathObject);
        return _format("/", pathObject);
    },
    parse: function parse(path) {
        assertPath(path);
        var ret = {
            root: "",
            dir: "",
            base: "",
            ext: "",
            name: ""
        };
        if (path.length === 0) return ret;
        var code = path.charCodeAt(0);
        var isAbsolute = code === 47 /*/*/ ;
        var start;
        if (isAbsolute) {
            ret.root = "/";
            start = 1;
        } else start = 0;
        var startDot = -1;
        var startPart = 0;
        var end = -1;
        var matchedSlash = true;
        var i = path.length - 1;
        // Track the state of characters (if any) we see before our first dot and
        // after any path separator we find
        var preDotState = 0;
        // Get non-dir info
        for(; i >= start; --i){
            code = path.charCodeAt(i);
            if (code === 47 /*/*/ ) {
                // If we reached a path separator that was not part of a set of path
                // separators at the end of the string, stop now
                if (!matchedSlash) {
                    startPart = i + 1;
                    break;
                }
                continue;
            }
            if (end === -1) {
                // We saw the first non-path separator, mark this as the end of our
                // extension
                matchedSlash = false;
                end = i + 1;
            }
            if (code === 46 /*.*/ ) {
                // If this is our first dot, mark it as the start of our extension
                if (startDot === -1) startDot = i;
                else if (preDotState !== 1) preDotState = 1;
            } else if (startDot !== -1) // We saw a non-dot and non-path separator before our dot, so we should
            // have a good chance at having a non-empty extension
            preDotState = -1;
        }
        if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
        preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
        preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
            if (end !== -1) {
                if (startPart === 0 && isAbsolute) ret.base = ret.name = path.slice(1, end);
                else ret.base = ret.name = path.slice(startPart, end);
            }
        } else {
            if (startPart === 0 && isAbsolute) {
                ret.name = path.slice(1, startDot);
                ret.base = path.slice(1, end);
            } else {
                ret.name = path.slice(startPart, startDot);
                ret.base = path.slice(startPart, end);
            }
            ret.ext = path.slice(startDot, end);
        }
        if (startPart > 0) ret.dir = path.slice(0, startPart - 1);
        else if (isAbsolute) ret.dir = "/";
        return ret;
    },
    sep: "/",
    delimiter: ":",
    win32: null,
    posix: null
};
posix.posix = posix;
module.exports = posix;

},{"process":"d5jf4"}],"d5jf4":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
    throw new Error("clearTimeout has not been defined");
}
(function() {
    try {
        if (typeof setTimeout === "function") cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === "function") cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e1) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e1) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e1) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = "browser";
process.browser = true;
process.env = {};
process.argv = [];
process.version = ""; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error("process.binding is not supported");
};
process.cwd = function() {
    return "/";
};
process.chdir = function(dir) {
    throw new Error("process.chdir is not supported");
};
process.umask = function() {
    return 0;
};

},{}],"kegop":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const fetchJSON = (url)=>{
    return new Promise((resolve, reject)=>{
        fetch(url, {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("codemapToken")}`
            }
        }).then((res)=>res.json()).then((res)=>{
            if (res.message === "Not Found") reject("404");
            // cb(atob(res.content));
            resolve(res);
        }).catch((err)=>reject(err));
    });
};
exports.default = fetchJSON;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["7Aums","bNKaB"], "bNKaB", "parcelRequire23e5")

//# sourceMappingURL=index.0641b553.js.map
