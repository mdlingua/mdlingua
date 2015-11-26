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
      {name: "hebrew", id: "he"},
      {name: "arabic", id: "ar"},
      {name: "russian", id: "ru"}
    ];
    this.state = state;
    this.bothSelected = function () {
      return state.getPatientLanguage() && state.getDoctorLanguage();
    };
    this.continue = function() {
      console.log(state.getState());
      $location.url('/question');
    };
  });
