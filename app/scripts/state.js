/*globals SpeechSynthesisUtterance */
'use strict';

/* @ngInject */
function State() {
  var _this = this;
  _this.patientLangauge = 'en';
  _this.doctorLangauge = 'en';
  _this.questions = [];
  _this.answered = [];

  return {
    setPatientLangauge: function (patientLangauge) {
      _this.patientLangauge = patientLangauge;
    },
    setDoctorLangauge: function (doctorLangauge) {
      _this.doctorLangauge = doctorLangauge;
    },
    getState: function () {
      return _this;
    }
  };
}

angular
  .module('mdlinguaApp')
  .factory('state', State);

