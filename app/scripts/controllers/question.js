'use strict';

/**
 * @ngdoc function
 * @name mdlinguaApp.controller:QuestionCtrl
 * @description
 * # QuestionCtrl
 * Controller of the mdlinguaApp
 */
angular.module('mdlinguaApp')
  .controller('QuestionCtrl', function (questionService, state, tts, $filter, $route, $location) {
    var _this = this;

    this.patientLanguage = state.getPatientLanguage();
    this.doctorLanguage = state.getDoctorLanguage();
    this.questions = questionService.getQuestionsForSidebar();
    this.currentQuestion = questionService.getCurrentQuestion();
    this.choose = function (answer) {
      state.setAnswer(_this.currentQuestion.id, answer);
    };
    this.continue = function () {
      state.fetchNextQuestion();
      $route.reload();
    };
    this.finish = function () {
      $location.url('/conclusion');
    };
    this.selectQuestion = function (questionId) {
      _this.currentQuestion = questionService.getQuestion(questionId);
    };
    this.read = function (msg) {
      tts.read(msg);
    };
    this.isAnswerSelected = function (answer) {
      return answer == state.getAnswer(_this.currentQuestion.id);
    };
  });
