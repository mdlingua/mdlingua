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
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/intro', {
        templateUrl: 'views/intro.html',
        controller: 'IntroCtrl',
        controllerAs: 'intro'
      })
      .when('/language', {
        templateUrl: 'views/language.html',
        controller: 'LanguageCtrl',
        controllerAs: 'language'
      })
      .when('/complaint', {
        templateUrl: 'views/complaint.html',
        controller: 'ComplaintCtrl',
        controllerAs: 'complaint'
      })
      .when('/question', {
        templateUrl: 'views/question.html',
        controller: 'QuestionCtrl',
        controllerAs: 'question'
      })
      .when('/conclusion', {
        templateUrl: 'views/conclusion.html',
        controller: 'ConclusionCtrl',
        controllerAs: 'conclusion'
      })
      .when('/report', {
        templateUrl: 'views/report.html',
        controller: 'ReportCtrl',
        controllerAs: 'report'
      })

      .otherwise({
        redirectTo: '/intro'
      });
  });
