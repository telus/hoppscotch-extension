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


var $jfuA3 = parcelRequire("jfuA3");
let $00d783be9e26ef46$var$abortController = new AbortController();
const $00d783be9e26ef46$var$convertAxiosHeadersIntoFetchHeaders = (headers)=>Object.entries(headers).reduce((fetchHeaders, [key, value])=>{
        // setting content-type when using fetch will break the upload unless we provide a proper boundary.
        // but we omit that header and browser will set the correct boundary itself.
        return key == "content-type" && headers[key] == "multipart/form-data" ? {
            ...fetchHeaders
        } : {
            ...fetchHeaders,
            [key]: value.toString()
        };
    }, {});
async function $00d783be9e26ef46$var$fetchUsingAxiosConfig(axiosConfig) {
    const fetchHeaders = $00d783be9e26ef46$var$convertAxiosHeadersIntoFetchHeaders(axiosConfig.headers);
    const requestMeta = {
        timeData: {}
    };
    requestMeta.timeData.startTime = new Date().getTime();
    const params = axiosConfig.params;
    if (params && Object.keys(params).length > 0) try {
        const url = new URL(axiosConfig.url);
        Object.keys(params).forEach((key)=>{
            url.searchParams.append(key, params[key]);
        });
        axiosConfig.url = url.toString();
    } catch (_) {}
    // TODO: check different examples with axios body
    const res = await fetch(axiosConfig.url, {
        headers: {
            ...fetchHeaders
        },
        method: axiosConfig.method,
        // Ignore the body for GET and HEAD requests to prevent error with axios
        body: [
            "get",
            "head"
        ].includes(axiosConfig.method?.toLowerCase()) ? undefined : axiosConfig.data,
        signal: $00d783be9e26ef46$var$abortController.signal
    });
    requestMeta.timeData.endTime = new Date().getTime();
    return [
        res,
        requestMeta
    ];
}
function $00d783be9e26ef46$var$errorToObject(e) {
    if (e.response && e.response.data) try {
        e.response.data = $00d783be9e26ef46$var$bufferToBase64(e.response.data);
    } catch (_e) {}
    // This mess below is a hack to go around Firefox's memory bounding system
    return {
        // Standard
        message: e.message ? JSON.parse(JSON.stringify(e.message)) : undefined,
        name: e.name ? JSON.parse(JSON.stringify(e.name)) : undefined,
        // Mozilla
        fileName: e.fileName ? JSON.parse(JSON.stringify(e.fileName)) : undefined,
        lineNumber: e.lineNumber ? JSON.parse(JSON.stringify(e.lineNumber)) : undefined,
        columnNumber: e.columnNumber ? JSON.parse(JSON.stringify(e.columnNumber)) : undefined,
        stack: e.stack ? JSON.parse(JSON.stringify(e.stack)) : undefined,
        // Axios
        response: e.response ? JSON.parse(JSON.stringify(e.response)) : undefined
    };
}
const $00d783be9e26ef46$var$convertDataURLToBlob = (dataurl)=>{
    const arr = dataurl.split(",");
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while(n--)u8arr[n] = bstr.charCodeAt(n);
    const blob = new Blob([
        u8arr
    ], {
        type: mime
    });
    return blob;
};
const $00d783be9e26ef46$var$parseCookieString = (str)=>str.split(";").map((value)=>value.split("=")).reduce((acc, curr)=>{
        if (!!curr[0] && !!curr[1]) acc[decodeURIComponent(curr[0].trim())] = decodeURIComponent(curr[1].trim());
        return acc;
    }, {});
// keep track of the cookies we have to delete after the request is made
let $00d783be9e26ef46$var$cookiesToDelete = {};
const $00d783be9e26ef46$var$removeRequestCookies = async ()=>{
    if (!!$00d783be9e26ef46$var$cookiesToDelete.url && !!$00d783be9e26ef46$var$cookiesToDelete.cookies) {
        for (const name of $00d783be9e26ef46$var$cookiesToDelete.cookies)await chrome.cookies.remove({
            url: $00d783be9e26ef46$var$cookiesToDelete.url,
            name: name
        });
        $00d783be9e26ef46$var$cookiesToDelete = {};
    }
};
const $00d783be9e26ef46$var$processRequestCookies = async (reqConfig)=>{
    const cookie = Object.entries(reqConfig.headers || {}).find(([header])=>header.toLowerCase() === "cookie");
    if (!!cookie && !!reqConfig.url && typeof cookie[1] === "string") {
        $00d783be9e26ef46$var$cookiesToDelete = {
            url: reqConfig.url,
            cookies: []
        };
        const parsedCookies = $00d783be9e26ef46$var$parseCookieString(cookie[1]);
        for (const [name, value] of Object.entries(parsedCookies)){
            await chrome.cookies.set({
                url: reqConfig.url,
                name: name,
                value: value
            });
            $00d783be9e26ef46$var$cookiesToDelete.cookies.push(name);
        }
    }
    return reqConfig;
};
const $00d783be9e26ef46$var$processRequestFormData = (reqConfig)=>{
    if (reqConfig.formData || reqConfig.formFiles) {
        const form = new FormData();
        reqConfig.formFiles.forEach(({ key: key, value: value, filename: filename })=>{
            form.append(key, $00d783be9e26ef46$var$convertDataURLToBlob(value), filename);
        });
        reqConfig.formData.forEach(({ key: key, value: value })=>{
            form.append(key, value);
        });
        reqConfig.data = form;
        reqConfig.formFiles = null;
        reqConfig.formData = null;
    }
    return reqConfig;
};
const $00d783be9e26ef46$var$processBinaryBody = async (reqConfig)=>{
    if (reqConfig.binaryContent) {
        const objectURL = reqConfig.binaryContent.objectURL;
        const response = await fetch(objectURL);
        const blob = await response.blob();
        reqConfig.data = new File([
            blob
        ], reqConfig.binaryContent.name, {});
    }
    return reqConfig;
};
const $00d783be9e26ef46$var$processRequest = async (reqConfig)=>{
    await $00d783be9e26ef46$var$processRequestCookies(reqConfig);
    await $00d783be9e26ef46$var$processBinaryBody(reqConfig);
    return $00d783be9e26ef46$var$processRequestFormData(reqConfig);
};
function $00d783be9e26ef46$var$bufferToBase64(buffer) {
    return btoa(new Uint8Array(buffer).reduce((data, byte)=>{
        return data + String.fromCharCode(byte);
    }, ""));
}
const $00d783be9e26ef46$var$processDataBasedOnContentType = async (data, contentTypeHeader)=>{
    if (contentTypeHeader && (contentTypeHeader.startsWith("application/json") || contentTypeHeader.startsWith("application/vnd.api+json") || contentTypeHeader.startsWith("application/hal+json"))) try {
        data = JSON.parse(data);
    } catch (e) {}
};
const $00d783be9e26ef46$var$getAllFetchResponseHeaders = (fetchHeaders)=>{
    const headers = {};
    fetchHeaders.forEach((value, key)=>{
        headers[key] = value;
    });
    return headers;
};
const $00d783be9e26ef46$var$handleSendRequestMessage = async (config, tabID)=>{
    try {
        const processedConfig = await $00d783be9e26ef46$var$processRequest(config);
        if (config.wantsBinary) {
            const [r, requestMeta] = await $00d783be9e26ef46$var$fetchUsingAxiosConfig({
                ...processedConfig,
                responseType: "arraybuffer",
                validateStatus: ()=>true
            });
            let headers = $00d783be9e26ef46$var$getAllFetchResponseHeaders(r.headers);
            return {
                messageType: "recv-req",
                data: {
                    response: {
                        status: r.status,
                        statusText: r.statusText,
                        headers: headers,
                        responseURL: r.url,
                        data: $00d783be9e26ef46$var$bufferToBase64(await r.arrayBuffer()),
                        timeData: requestMeta.timeData
                    },
                    isBinary: true,
                    error: null
                }
            };
        } else {
            const [res, requestMeta] = await $00d783be9e26ef46$var$fetchUsingAxiosConfig({
                ...processedConfig
            });
            const resText = await res.text();
            const contentTypeHeader = res.headers.get("content-type");
            const data = await $00d783be9e26ef46$var$processDataBasedOnContentType(resText, contentTypeHeader);
            let headers = $00d783be9e26ef46$var$getAllFetchResponseHeaders(res.headers);
            return {
                messageType: "recv-req",
                data: {
                    response: {
                        status: res.status,
                        statusText: res.statusText,
                        headers: headers,
                        responseURL: res.url,
                        data: data,
                        timeData: requestMeta.timeData
                    },
                    isBinary: false,
                    error: null
                }
            };
        }
    } catch (e) {
        return {
            messageType: "recv-req",
            data: {
                response: null,
                error: $00d783be9e26ef46$var$errorToObject(e)
            }
        };
    } finally{
        // revoke the objectURLs, if any
        // keeping this as an array, cause in the future, if we're adding support for formdata files in a similar way, we can add those objectURLs here
        const objectURLsToRevoke = [];
        if (config.binaryContent?.objectURL) objectURLsToRevoke.push(config.binaryContent.objectURL);
        if (objectURLsToRevoke.length > 0 && tabID) chrome.tabs.sendMessage(tabID, {
            action: "__POSTWOMAN_EXTENSION_REVOKE_OBJECT_URLS__",
            objectURLsToRevoke: objectURLsToRevoke
        }, ()=>{});
        // remove the cookies set for this request
        await $00d783be9e26ef46$var$removeRequestCookies();
    }
};
const $00d783be9e26ef46$var$cancelRequest = ()=>{
    $00d783be9e26ef46$var$abortController.abort();
    // reset the abort controller for the next request
    $00d783be9e26ef46$var$abortController = new AbortController();
};
chrome.runtime.onMessage.addListener((message, _sender, sendResponse)=>{
    if (message.messageType === "send-req") {
        $00d783be9e26ef46$var$handleSendRequestMessage(message.data, _sender.tab.id).then(sendResponse);
        return true;
    } else if (message.messageType === "cancel-req") {
        $00d783be9e26ef46$var$cancelRequest();
        return true;
    }
});
let $00d783be9e26ef46$var$originList = [];
chrome.storage.sync.get((items)=>{
    $00d783be9e26ef46$var$originList = JSON.parse(items["originList"]);
});
chrome.storage.onChanged.addListener((changes, _areaName)=>{
    if (changes.originList && changes.originList.newValue) $00d783be9e26ef46$var$originList = JSON.parse(changes.originList.newValue);
});
chrome.tabs.onUpdated.addListener((_id, _info, tab)=>{
    if (tab.status !== "loading") chrome.tabs.sendMessage(tab.id, {
        action: "__POSTWOMAN_EXTENSION_PING__"
    }, (_response)=>{
        if (chrome.runtime.lastError) chrome.scripting.executeScript({
            target: {
                tabId: tab.id
            },
            files: [
                "contentScript.js"
            ]
        });
        else console.log("Already hooked");
    });
});
chrome.runtime.onInstalled.addListener(()=>{
    chrome.storage.sync.get((items)=>{
        if (!items.originList) chrome.storage.sync.set({
            originList: JSON.stringify((0, $jfuA3.DEFAULT_ORIGIN_LIST))
        }, ()=>{});
    });
});
chrome.runtime.onMessage.addListener((message, sender)=>{
    if (message.type && message.type == "execute_hook" && sender.tab.id) {
        const files = message.origin_type == "VALID_ORIGIN" ? [
            "hookContent.js"
        ] : [
            "hookContentInvalidOrigin.js"
        ];
        chrome.scripting.executeScript({
            target: {
                tabId: sender.tab.id
            },
            files: files,
            world: "MAIN"
        });
    }
});

})();
//# sourceMappingURL=index.js.map
