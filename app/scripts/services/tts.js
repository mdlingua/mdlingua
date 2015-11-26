/*globals SpeechSynthesisUtterance */
'use strict';

/* @ngInject */
function Tts($window) {
  return {
    read: function (msgInput, lang) {
      var msg = new SpeechSynthesisUtterance(msgInput);
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
