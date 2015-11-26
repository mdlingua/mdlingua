'use strict';

/**
 * @ngdoc overview
 * @name mdlinguaApp
 * @description
 * # mdlinguaApp
 *
 * Main module of the application.
 */
angular
  .module('mdlinguaApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'pascalprecht.translate'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/intro', {
        templateUrl: 'views/intro.html',
        controller: 'IntroCtrl',
        controllerAs: 'intro'
      })
      .when('/question', {
        templateUrl: 'views/question.html',
        controller: 'QuestionCtrl',
        controllerAs: 'question'
      })

      // Defaults
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/langauge', {
        templateUrl: 'views/langauge.html',
        controller: 'LanguageCtrl',
        controllerAs: 'langauge'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(function ($translateProvider) {
    $translateProvider.translations('en', {
      "pain?": 'Are you in pain now?',
      "yes": "Yes",
      "no": "No",
      "a_little": "a little",
      "action_when_started": "What were you doing when the pain started?",
      "rest": "Resting",
      "exercise": "Exercise",
      "normal_activity": "Normal physical activities",
      "making_better?": "Is there anything that makes the pain better?",
      "lay_down": "Laying down",
      "lean_fw": "leaning forward",
      "eat": "eating",
      "drugs": "drugs",
      "making_worse?": "Is there anything that makes the pain worse?",
      "pain_quality": "How would you describe the quality of the pain?",
      "stab": "Stabbing",
      "burn": "Burning",
      "lancinating": "Lancinating",
      "squeez": "Sqeezing",
      "continuous?": "Is the pain continuous or intermittent?",
      "continuous": "continuous",
      "intermittent": "intermittent",
      "location_chest": "Where is the pain located?",
      "location_radiate": "Is the pain radiating to another part of the body?",
      "severity": "How severe is the pain based on a scale of 1 to 10?",
      "when_started": "When did the pain first occur?",
      "additional_symptoms": "Did you have additional symptoms?",
      "vomiting": "vomiting",
      "fever": "fever",
      "sweating": "sweating",
      "weakness": "weakness",
      "diarrhea": "diarrhea",
      "palpitations": "palpitations",
      "past_event?":"Have you felt this kind of pain in the past?"
      "hypertension?":"Do you suffer from hypertension?"
      "y_controlled":"yes, controlled",
      "y_uncontrolled":"yes, uncontrolled",
      "diabetes?":"Do you suffer from diabetes?",
      "hyperlipidemia?":"Do you suffer from hyperlipidemia?",
      "background_diseases":"Do you suffer from any of the following diseases?",
      "val_heart_disease":"-  Valvular heart disease",
      "AF":"AF",
      "Osteoporosis":"Osteoporosis",
      "Anemia":"Anemia",
      "Cancer":"Cancer",
      "Autoimmune_disease":"Autoimmune_disease",
      "PVD":"PVD",
      "Epilepsy":"Epilepsy",
      "Asthma":"Asthma",
      "COPD":"COPD",
      "Hypothyroidism":"Hypothyroidism",
      "Hyperthyroidism":"Hyperthyroidism",
      "smoke?":"Do you smoke?",
      "alcohol?":"Do you drink alcohol?",
      "exercise?":"Do you exercise?",
      "medications?":"Do you take any medications? (Can you show me if you have them with you?)"
    });
    $translateProvider.preferredLanguage('en');
  });
