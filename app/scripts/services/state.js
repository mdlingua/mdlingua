/*globals SpeechSynthesisUtterance */
'use strict';

/* @ngInject */
function State() {
  var _this = this;
  _this.patientLanguage = 'en';
  _this.doctorLanguage = 'en';
  _this.questions = [];
  _this.answered = {};

  return {
    setPatientLanguage: function (patientLanguage) {
      _this.patientLanguage = patientLanguage;
    },
    setDoctorLanguage: function (doctorLanguage) {
      _this.doctorLanguage = doctorLanguage;
    },
    getPatientLanguage: function () {
      return _this.patientLanguage;
    },
    getDoctorLanguage: function () {
      return _this.doctorLanguage;
    },
    getState: function () {
      return _this;
    },
    setAnswer: function(questionId, answer) {
      _this.answered[questionId] = answer;
    },
    getAnswer: function(questionId) {
      return _this.answered[questionId];
    }
  };
}

angular
  .module('mdlinguaApp')
  .factory('state', State);
