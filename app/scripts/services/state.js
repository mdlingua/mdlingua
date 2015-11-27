/*globals SpeechSynthesisUtterance */
'use strict';

/* @ngInject */
function State() {
  var defaultState = {
    patientLanguage: 'en',
    doctorLanguage: 'en',
    currentQuestion: 0,
    answered: {}
  };
  var state;

  function copy(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  function reset() {
    state = copy(defaultState);
  }

  reset();

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
    isAnswered: function (questionId) {
      return state.answered[questionId] !== undefined;
    },
    fetchNextQuestion: function () {
      state.currentQuestion++;
    },
    getCurrentQuestion: function () {
      return state.currentQuestion;
    },
    reset: reset
  };
}

angular
  .module('mdlinguaApp')
  .factory('state', State);
