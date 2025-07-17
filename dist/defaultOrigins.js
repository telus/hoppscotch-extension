(() => {

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global = globalThis;
    
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire4cfd"];

if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire4cfd"] = parcelRequire;
}

var parcelRegister = parcelRequire.register;
parcelRegister("jfuA3", function(module, exports) {

$parcel$export(module.exports, "DEFAULT_ORIGIN_LIST", () => $c69d36af2ce7e1c0$export$90f2c8d1f20401a);
const $c69d36af2ce7e1c0$export$90f2c8d1f20401a = [
    "https://hoppscotch.io"
];

});


parcelRequire("jfuA3");
})();
//# sourceMappingURL=defaultOrigins.js.map
