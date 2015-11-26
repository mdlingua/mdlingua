/*globals SpeechSynthesisUtterance */
'use strict';

/* @ngInject */
function State() {
  var _this = this;
  _this.patientLangauge = 'en';
  _this.doctorLangauge = 'en';
  _this.questions = [];
  _this.answered = {};

  return {
    setPatientLanguage: function (patientLangauge) {
      _this.patientLangauge = patientLangauge;
    },
    setDoctorLanguage: function (doctorLangauge) {
      _this.doctorLangauge = doctorLangauge;
    },
    getPatientLanguage: function () {
      return _this.patientLangauge;
    },
    getDoctorLanguage: function () {
      return _this.doctorLangauge;
    },
    getState: function () {
      return _this;
    },
    setAnswer: function(questionId, answer) {
      _this.answered[questionId] = answer;
    }
  };
}

angular
  .module('mdlinguaApp')
  .factory('state', State);
