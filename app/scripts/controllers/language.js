'use strict';

/**
 * @ngdoc function
 * @name mdlinguaApp.controller:LanguageCtrl
 * @description
 * # LanguageCtrl
 * Controller of the mdlinguaApp
 */
angular.module('mdlinguaApp')
  .controller('LanguageCtrl', function ($location, state) {
    this.languages = [
      {name: "english", id: "en"},
      {name: "amharic", id: "he"},
      {name: "arabic", id: "ar"},
      {name: "russian", id: "ru"}
    ];
    this.state = state;
  });
