angular
  .module('mdlinguaApp')
  .factory('questionService', function (questions) {

    var questionIds = Object.keys(questions);

    var state = {
      "patientLanguage": "en",
      "doctorLanguage": "he",
      "category": "0",
      "answered": {
        "0": "in.head",
        "3": "bodyimage.heart",
        "4": 5
      }
    };

    function getQuestionForSidebar(question) {
      return {
        title: question.title,
        answered: state.answered[question.id] !== undefined
      };
    }

    function getQuestionsForSidebar() {
      return questionIds.map(function (id) {
        return getQuestionForSidebar(questions[id]);
      });
    }

    function getCurrentQuestion() {
      return questions['2'];
    }

    return {
      getQuestionsForSidebar: getQuestionsForSidebar,
      getCurrentQuestion: getCurrentQuestion
    };
  });
