(() => {
var $8f3865d6ab887086$exports = {};
$8f3865d6ab887086$exports = "(() => {\n(()=>{\n    const defineSubscribableObject = (obj)=>new Proxy({\n            ...obj,\n            _subscribers: {},\n            subscribe: function(prop, func) {\n                if (Array.isArray(this._subscribers[prop])) this._subscribers[prop].push(func);\n                else this._subscribers[prop] = [\n                    func\n                ];\n            }\n        }, {\n            set (obj, prop, newVal) {\n                obj[prop] = newVal;\n                if (Array.isArray(obj._subscribers[prop])) for (let subscriber of obj._subscribers[prop])subscriber(newVal);\n                return true;\n            }\n        });\n    if (window.__HOPP_EXTENSION_STATUS_PROXY__) window.__HOPP_EXTENSION_STATUS_PROXY__.status = \"available\";\n    else window.__HOPP_EXTENSION_STATUS_PROXY__ = defineSubscribableObject({\n        status: \"available\"\n    });\n    window.__POSTWOMAN_EXTENSION_HOOK__ = {\n        getVersion: ()=>({\n                major: 0,\n                minor: 37\n            }),\n        decodeB64ToArrayBuffer: (input, ab)=>{\n            const keyStr = \"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\";\n            const bytes = parseInt(input.length / 4 * 3, 10);\n            let uarray;\n            let chr1, chr2, chr3;\n            let enc1, enc2, enc3, enc4;\n            let i = 0;\n            let j = 0;\n            if (ab) uarray = new Uint8Array(ab);\n            else uarray = new Uint8Array(bytes);\n            input = input.replace(/[^A-Za-z0-9\\+\\/\\=]/g, \"\");\n            for(i = 0; i < bytes; i += 3){\n                //get the 3 octects in 4 ascii chars\n                enc1 = keyStr.indexOf(input.charAt(j++));\n                enc2 = keyStr.indexOf(input.charAt(j++));\n                enc3 = keyStr.indexOf(input.charAt(j++));\n                enc4 = keyStr.indexOf(input.charAt(j++));\n                chr1 = enc1 << 2 | enc2 >> 4;\n                chr2 = (enc2 & 15) << 4 | enc3 >> 2;\n                chr3 = (enc3 & 3) << 6 | enc4;\n                uarray[i] = chr1;\n                if (enc3 != 64) uarray[i + 1] = chr2;\n                if (enc4 != 64) uarray[i + 2] = chr3;\n            }\n            return uarray;\n        },\n        transformFormData: async (config)=>{\n            const toBase64 = (file)=>new Promise((resolve, reject)=>{\n                    const reader = new FileReader();\n                    reader.readAsDataURL(file);\n                    reader.onload = ()=>resolve(reader.result);\n                    reader.onerror = (error)=>reject(error);\n                });\n            if (config.data instanceof File) config.binaryContent = {\n                name: config.data.name,\n                // we'll convert the file to a url to access it from the extension\n                objectURL: URL.createObjectURL(config.data)\n            };\n            // TODO: use objectURLs instead of base64\n            if (config.data instanceof FormData) {\n                config.formFiles = [];\n                config.formData = [];\n                const entries = Array.from(config.data.entries());\n                for (const [key, value] of entries)if (value instanceof File) {\n                    const convertedValue = await toBase64(value);\n                    config.formFiles.push({\n                        key: key,\n                        value: convertedValue,\n                        filename: value.name\n                    });\n                } else config.formData.push({\n                    key: key,\n                    value: value\n                });\n                config.data = null;\n                return config;\n            }\n        },\n        cancelRequest: (config)=>{\n            window.postMessage({\n                type: \"__POSTWOMAN_EXTENSION_CANCEL__\"\n            }, \"*\");\n        },\n        sendRequest: (config)=>new Promise((resolve, reject)=>{\n                function handleMessage(ev) {\n                    if (ev.source !== window || !ev.data) return;\n                    if (ev.data.type === \"__POSTWOMAN_EXTENSION_RESPONSE__\") {\n                        // Apply transformation from base64 to arraybuffer\n                        if (ev.data.isBinary) {\n                            const bytes = ev.data.response.data.length / 4 * 3;\n                            const ab = new ArrayBuffer(bytes);\n                            window.__POSTWOMAN_EXTENSION_HOOK__.decodeB64ToArrayBuffer(ev.data.response.data, ab);\n                            ev.data.response.data = ab;\n                        }\n                        resolve(ev.data.response);\n                        window.removeEventListener(\"message\", handleMessage);\n                    } else if (ev.data.type === \"__POSTWOMAN_EXTENSION_ERROR__\") {\n                        const error = ev.data.error;\n                        // We're restoring the original Error object here\n                        const e = new Error(error.message, error.fileName, error.lineNumber);\n                        e.name = error.name;\n                        e.stack = error.stack;\n                        if (error.response) {\n                            e.response = error.response;\n                            const bytes = e.response.data.length / 4 * 3;\n                            const ab = new ArrayBuffer(bytes);\n                            window.__POSTWOMAN_EXTENSION_HOOK__.decodeB64ToArrayBuffer(e.response.data, ab);\n                            e.response.data = ab;\n                        }\n                        reject(e);\n                        window.removeEventListener(\"message\", handleMessage);\n                    }\n                }\n                window.addEventListener(\"message\", handleMessage);\n                window.__POSTWOMAN_EXTENSION_HOOK__.transformFormData(config).then((transformedConfig)=>{\n                    window.postMessage({\n                        type: \"__POSTWOMAN_EXTENSION_REQUEST__\",\n                        config: config\n                    }, \"*\");\n                });\n            })\n    };\n})();\n\n})();\n";


var $43cc51b482ea25a8$exports = {};
$43cc51b482ea25a8$exports = "(() => {\n(()=>{\n    const defineSubscribableObject = (obj)=>new Proxy({\n            ...obj,\n            _subscribers: {},\n            subscribe: function(prop, func) {\n                if (Array.isArray(this._subscribers[prop])) this._subscribers[prop].push(func);\n                else this._subscribers[prop] = [\n                    func\n                ];\n            }\n        }, {\n            set (obj, prop, newVal) {\n                obj[prop] = newVal;\n                if (Array.isArray(obj._subscribers[prop])) for (let subscriber of obj._subscribers[prop])subscriber(newVal);\n                return true;\n            }\n        });\n    if (window.__HOPP_EXTENSION_STATUS_PROXY__) window.__HOPP_EXTENSION_STATUS_PROXY__.status = \"unknown-origin\";\n    else window.__HOPP_EXTENSION_STATUS_PROXY__ = defineSubscribableObject({\n        status: \"unknown-origin\"\n    });\n})();\n\n})();\n";


function $dc888d1c8a1c77e1$var$getOriginList() {
    return new Promise((resolve, reject)=>{
        chrome.storage.sync.get((items)=>{
            let originList = JSON.parse(items["originList"]);
            resolve(originList);
        });
    });
}
async function $dc888d1c8a1c77e1$var$injectHoppExtensionHook() {
    let originList = await $dc888d1c8a1c77e1$var$getOriginList();
    let url = new URL(window.location.href);
    const originType = originList.includes(url.origin) ? "VALID_ORIGIN" : "UNKNOWN_ORIGIN";
    chrome.runtime.sendMessage({
        type: "execute_hook",
        origin_type: originType
    });
}
function $dc888d1c8a1c77e1$var$main() {
    // check if the content script is already injected to avoid  multiple injections side effects
    if (window.HOPP_CONTENT_SCRIPT_EXECUTED) return;
    window.HOPP_CONTENT_SCRIPT_EXECUTED = true;
    /**
   * when an origin is added or removed,reevaluate the hook
   */ chrome.storage.onChanged.addListener((changes, _areaName)=>{
        if (changes.originList && changes.originList.newValue) $dc888d1c8a1c77e1$var$injectHoppExtensionHook();
    });
    window.addEventListener("message", async (ev)=>{
        const originList = await $dc888d1c8a1c77e1$var$getOriginList();
        let url = new URL(window.location.href);
        const originType = originList.includes(url.origin) ? "VALID_ORIGIN" : "UNKNOWN_ORIGIN";
        if (ev.source !== window || !ev.data || originType != "VALID_ORIGIN") return;
        if (ev.data.type === "__POSTWOMAN_EXTENSION_REQUEST__") chrome.runtime.sendMessage({
            messageType: "send-req",
            data: ev.data.config
        }, (message)=>{
            if (message.data.error) window.postMessage({
                type: "__POSTWOMAN_EXTENSION_ERROR__",
                error: message.data.error
            }, "*");
            else window.postMessage({
                type: "__POSTWOMAN_EXTENSION_RESPONSE__",
                response: message.data.response,
                isBinary: message.data.isBinary
            }, "*");
        });
        else if (ev.data.type === "__POSTWOMAN_EXTENSION_CANCEL__") chrome.runtime.sendMessage({
            messageType: "cancel-req"
        });
    });
    $dc888d1c8a1c77e1$var$injectHoppExtensionHook();
    chrome.runtime.onMessage.addListener((msg, _sender, sendResponse)=>{
        if (msg.action === "__POSTWOMAN_EXTENSION_PING__") sendResponse(true);
        else if (msg.action === "__POSTWOMAN_EXTENSION_REVOKE_OBJECT_URLS__") msg.objectURLsToRevoke.forEach((objectURL)=>{
            URL.revokeObjectURL(objectURL);
        });
    });
}
$dc888d1c8a1c77e1$var$main();

})();
//# sourceMappingURL=contentScript.js.map
