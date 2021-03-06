cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.phonegap.plugins.childbrowser/www/childbrowser.js",
        "id": "com.phonegap.plugins.childbrowser.ChildBrowser",
        "pluginId": "com.phonegap.plugins.childbrowser",
        "clobbers": [
            "ChildBrowser"
        ]
    },
    {
        "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
        "id": "cordova-plugin-inappbrowser.inappbrowser",
        "pluginId": "cordova-plugin-inappbrowser",
        "clobbers": [
            "cordova.InAppBrowser.open",
            "window.open"
        ]
    },
    {
        "file": "plugins/cordova-plugin-inappbrowser/src/browser/InAppBrowserProxy.js",
        "id": "cordova-plugin-inappbrowser.InAppBrowserProxy",
        "pluginId": "cordova-plugin-inappbrowser",
        "merges": [
            ""
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.phonegap.plugins.childbrowser": "5.0.0",
    "cordova-plugin-inappbrowser": "1.6.0-dev",
    "cordova-plugin-whitelist": "1.3.0"
}
// BOTTOM OF METADATA
});