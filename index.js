var hue = require("node-hue-api");
var HueApi = hue.HueApi;

var displayBridges = function(bridge) {
    console.log("Hue Bridges Found: " + JSON.stringify(bridge));
};

// --------------------------
// Using a promise
hue.nupnpSearch().then(displayBridges).done();

var displayResult = function(result) {
    console.log(JSON.stringify(result, null, 2));
};

var hostname = "192.168.1.14",
    username = "22c95bb819620e1f1091ad682cd2c62f",
    api;

api = new HueApi(hostname, username);

// --------------------------
// Using a promise
api.config().then(displayResult).done();
// using getConfig() alias
api.getConfig().then(displayResult).done();