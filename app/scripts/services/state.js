/*globals SpeechSynthesisUtterance */
'use strict';

/* @ngInject */
function State() {
  var defaultState = {
    patientLanguage: 'en',
    doctorLanguage: 'en',
    questions: [],
    answered: {}
  };

  var state = Object.create(defaultState);

  return {
    setPatientLanguage: function (patientLanguage) {
      state.patientLanguage = patientLanguage;
    },
    setDoctorLanguage: function (doctorLanguage) {
      state.doctorLanguage = doctorLanguage;
    },
    getPatientLanguage: function () {
      return state.patientLanguage;
    },
    getDoctorLanguage: function () {
      return state.doctorLanguage;
    },
    getState: function () {
      return state;
    },
    setAnswer: function(questionId, answer) {
      state.answered[questionId] = answer;
    },
    getAnswer: function(questionId) {
      return state.answered[questionId];
    },
    reset: function () {
      state = Object.create(defaultState);
    }
  };
}

angular
  .module('mdlinguaApp')
  .factory('state', State);
