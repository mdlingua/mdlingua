'use strict';

/**
 * @ngdoc function
 * @name mdlinguaApp.controller:QuestionCtrl
 * @description
 * # QuestionCtrl
 * Controller of the mdlinguaApp
 */
angular.module('mdlinguaApp')
  .controller('QuestionCtrl', function (questionService, state, tts, $filter, $route) {
    this.patientLangauge = state.getPatientLanguage();
    this.doctorLangauge = state.getDoctorLanguage();
    this.questions = questionService.getQuestionsForSidebar();

    var currentQuestion = questionService.getCurrentQuestion();
    this.currentQuestion = currentQuestion;
    this.choose = function (answer) {
      state.setAnswer(currentQuestion.id, answer);
    };
    this.continue = function () {
      questionService.fetchNextQuestion();
      $route.reload();
    };
    this.read = function (msg, lang) {
      var chooseLang = $filter('chooseLang');
      var msg2 = chooseLang(msg, lang);
      tts.read(msg2, lang);
    }
  });
