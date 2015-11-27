'use strict';

/**
 * @ngdoc function
 * @name mdlinguaApp.controller:ConclusionCtrl
 * @description
 * # ConclusionCtrl
 * Controller of the mdlinguaApp
 */
angular.module('mdlinguaApp')
  .controller('ConclusionCtrl', function (state, tts) {
    this.patientLanguage = state.getPatientLanguage();
    this.doctorLanguage = state.getDoctorLanguage();
    this.sentences = ['thanx', 'admit', 'blood_test', 'stress_test'];
    this.read = function (msg) {
      tts.read(msg);
    };
  });
