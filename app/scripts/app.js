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
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(function ($translateProvider) {
    $translateProvider.translations('en', {
      TITLE: 'Hello'
    });
    $translateProvider.translations('de', {
      TITLE: 'Hallo'
    });
    $translateProvider.preferredLanguage('en');
  });
