'use strict';

/**
 * @ngdoc function
 * @name mdlinguaApp.controller:ReportCtrl
 * @description
 * # ReportCtrl
 * Controller of the mdlinguaApp
 */
angular.module('mdlinguaApp')
  .controller('ReportCtrl', function (state, $location) {
    this.reset = function () {
      state.reset();
      $location.url('/language');
    }
  });
