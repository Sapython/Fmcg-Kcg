
  cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
      {
          "id": "thermal-printer-cordova-plugin.ThermalPrinterPlugin",
          "file": "plugins/thermal-printer-cordova-plugin/www/thermal-printer.js",
          "pluginId": "thermal-printer-cordova-plugin",
        "clobbers": [
          "ThermalPrinter"
        ]
        },
      {
          "id": "cordova-plugin-bluetooth-serial.bluetoothSerial",
          "file": "plugins/cordova-plugin-bluetooth-serial/www/bluetoothSerial.js",
          "pluginId": "cordova-plugin-bluetooth-serial",
        "clobbers": [
          "window.bluetoothSerial"
        ]
        }
    ];
    module.exports.metadata =
    // TOP OF METADATA
    {
      "cordova-plugin-bluetooth-serial": "0.4.7",
      "thermal-printer-cordova-plugin": "1.0.6"
    };
    // BOTTOM OF METADATA
    });
    