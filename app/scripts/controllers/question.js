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
    var _this = this;

    this.patientLanguage = state.getPatientLanguage();
    this.doctorLanguage = state.getDoctorLanguage();
    this.questions = questionService.getQuestionsForSidebar();
    this.currentQuestion = questionService.getCurrentQuestion();
    this.choose = function (answer) {
      state.setAnswer(_this.currentQuestion.id, answer);
    };
    this.continue = function () {
      questionService.fetchNextQuestion();
      $route.reload();
    };
    this.selectQuestion = function (questionId) {
      _this.currentQuestion = questionService.getQuestion(questionId);
    };
    this.read = function (msg, lang) {
      var chooseLang = $filter('chooseLang');
      var msg2 = chooseLang(msg, lang);
      tts.read(msg2, lang);
    };
    this.isAnswerSelected = function (answer) {
      return answer == state.getAnswer(_this.currentQuestion.id);
    };
  });
