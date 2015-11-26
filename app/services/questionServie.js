angular
  .module('mdlinguaApp')
  .factory('questionService', function () {

    var questions = {
      "0": {
        "id": "0",
        "type": "choice",
        "title": "pain?",
        "answers": [
          "yes",
          "no",
          "a_little"
        ]
      },
      "1": {
        "id": "1",
        "type": "choice",
        "title": "action_when_started",
        "answers": [
          "rest",
          "exercise",
          "normal_activity"
        ]
      },
      "2": {
        "id": "2",
        "type": "choice",
        "title": "making_better?",
        "answers": [
          "rest",
          "lay_down",
          "lean_fw",
          "eat",
          "drugs"
        ]
      },
      "3": {
        "id": "3",
        "type": "choice",
        "title": "making_worse?",
        "answers": [
          "exercise",
          "lay_down",
          "eat"
        ]
      },
      "4": {
        "id": "4",
        "type": "choice",
        "title": "pain_quality",
        "answers": [
          "stab",
          "burn",
          "lancinating",
          "squeez"
        ]
      }
    };

    var categories = {
      "0": {
        "id": "0",
        "title": "heart",
        "questions": [
          "0",
          "1"
        ]
      },
      "1": {
        "id": "1",
        "title": "lungs",
        "questions": [
          "0",
          "2"
        ]
      }
    };

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

    function getCategory() {
      return categories[state.category];
    }

    function getCategoryQuestions(category) {
      var questionIds = category.questions;
      return questionIds.map(function (id) {
        return questions[id];
      });
    }

    function getQuestionForSidebar(question) {
      return {
        title: question.title,
        answered: state.answered[question.id] !== undefined
      };
    }

    function getQuestionsForSidebar() {
      var category = getCategory();
      var categoryQuestions = getCategoryQuestions(category);
      return categoryQuestions.map(getQuestionForSidebar);
    }

    function getCurrentQuestion() {
      return questions['4'];
    }

    return {
      getQuestionsForSidebar: getQuestionsForSidebar,
      getCurrentQuestion: getCurrentQuestion
    };
  });
