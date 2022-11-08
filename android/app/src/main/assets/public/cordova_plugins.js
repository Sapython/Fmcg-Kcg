
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
          "id": "thermal-printer-cordova-plugin.ThermalPrinterPlugin",
          "file": "plugins/thermal-printer-cordova-plugin/www/thermal-printer.js",
          "pluginId": "thermal-printer-cordova-plugin",
        "clobbers": [
          "ThermalPrinter"
        ]
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "thermal-printer-cordova-plugin": "1.0.6"
    };
    // BOTTOM OF METADATA
    });
    