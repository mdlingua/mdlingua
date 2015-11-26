'use strict';

/**
 * @ngdoc function
 * @name mdlinguaApp.controller:QuestionCtrl
 * @description
 * # QuestionCtrl
 * Controller of the mdlinguaApp
 */
angular.module('mdlinguaApp')
  .controller('QuestionCtrl', function (questionService) {
    this.questions = questionService.getQuestionsForSidebar();
    this.currentQuestion = questionService.getCurrentQuestion();
    this.choose = function(answer) {
      console.log(answer);
    };
  });
