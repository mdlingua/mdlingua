angular
  .module('mdlinguaApp')
  .factory('questionService', function (questions, state) {

    var questionIds = Object.keys(questions);
    var currentState = state.getState();

    function getQuestionForSidebar(question) {
      return {
        title: question.title,
        answered: currentState.answered[question.id] !== undefined
      };
    }

    function getQuestionsForSidebar() {
      return questionIds.map(function (id) {
        return getQuestionForSidebar(questions[id]);
      });
    }

    function getFirstUnanswered() {
      var questionId;
      for (var i = 0, l = questionIds.length; i < l; i++) {
        questionId = questionIds[i];
        if (!currentState.answered[questionId]) {
          break;
        }
      }
      return questionId;
    }

    function getCurrentQuestion() {
      var firstUnanswered = getFirstUnanswered();
      return questions[firstUnanswered];
    }

    return {
      getQuestionsForSidebar: getQuestionsForSidebar,
      getCurrentQuestion: getCurrentQuestion
    };
  });
