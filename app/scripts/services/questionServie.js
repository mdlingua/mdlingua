angular
  .module('mdlinguaApp')
  .factory('questionService', function (questions, state) {

    var questionIds = Object.keys(questions);

    function getQuestionForSidebar(question) {
      return {
        id: question.id,
        title: question.title,
        answered: state.isAnswered(question.id)
      };
    }

    function getQuestionsForSidebar() {
      return questionIds.map(function (id) {
        return getQuestionForSidebar(questions[id]);
      });
    }

    function getCurrentQuestion() {
      var currentQuestion = state.getCurrentQuestion();
      var questionId = questionIds[currentQuestion];
      return questions[questionId];
    }

    function getQuestion(questionId) {
      return questions[questionId];
    }

    return {
      getQuestionsForSidebar: getQuestionsForSidebar,
      getCurrentQuestion: getCurrentQuestion,
      getQuestion: getQuestion
    };
  });
