angular
  .module('mdlinguaApp')
  .factory('questionService', function (questions, state) {

    var questionIds = Object.keys(questions);
    var currentQuestion = 0;
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

    function getCurrentQuestion() {
      var questionId = questionIds[currentQuestion];
      return questions[questionId];
    }

    function fetchNextQuestion() {
      currentQuestion++;
    }

    return {
      getQuestionsForSidebar: getQuestionsForSidebar,
      getCurrentQuestion: getCurrentQuestion,
      fetchNextQuestion: fetchNextQuestion
    };
  });
