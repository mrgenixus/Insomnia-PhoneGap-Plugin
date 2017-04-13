cordova.addConstructor(function () {
  if (!window.plugins) {
    window.plugins = {};
  }

  window.plugins.insomnia = {
    keepAwake: function (successCallback, errorCallback) {
      cordova.exec(successCallback, errorCallback, "Insomnia", "keepAwake", []);
    },
    
    allowSleepAgain: function (successCallback, errorCallback) {
      cordova.exec(successCallback, errorCallback, "Insomnia", "allowSleepAgain", []);
    }
  };
  return window.plugins.insomnia;
});
