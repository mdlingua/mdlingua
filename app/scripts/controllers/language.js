'use strict';

/**
 * @ngdoc function
 * @name mdlinguaApp.controller:LanguageCtrl
 * @description
 * # LanguageCtrl
 * Controller of the mdlinguaApp
 */
angular.module('mdlinguaApp')
  .controller('LanguageCtrl', function () {
    this.languages = [
      "english",
      "hebrew",
      "hebrew2",
      "russian"
    ];
  });
