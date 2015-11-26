'use strict';

/**
 * @ngdoc function
 * @name mdlinguaApp.controller:QuestionCtrl
 * @description
 * # QuestionCtrl
 * Controller of the mdlinguaApp
 */
angular.module('mdlinguaApp')
  .controller('QuestionCtrl', function (questionService, tts, $filter) {
    this.questions = questionService.getQuestionsForSidebar();
    this.currentQuestion = questionService.getCurrentQuestion();
    this.choose = function(answer) {
      console.log(answer);
    };
    this.read = function(msg, lang){
      var chooseLang = $filter('chooseLang');
      var msg2 = chooseLang(msg, lang);
      tts.read(msg2, lang);
    }
  });
