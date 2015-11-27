/*globals SpeechSynthesisUtterance */
'use strict';

/* @ngInject */
function Tts($window, $filter, state) {
  var chooseLang = $filter('chooseLang');
  return {
    read: function (messageKey) {
      var lang = state.getPatientLanguage();
      var translatedMessage = chooseLang(messageKey, lang);
      var msg = new SpeechSynthesisUtterance(translatedMessage);
      msg.pitch = 1;
      msg.rate = 1;
      msg.volume = 1;
      msg.lang = lang;
      $window.speechSynthesis.speak(msg);
    }
  };
}

angular
  .module('mdlinguaApp')
  .factory('tts', Tts);
