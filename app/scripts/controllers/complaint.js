'use strict';

/**
 * @ngdoc function
 * @name mdlinguaApp.controller:ComplaintCtrl
 * @description
 * # ComplaintCtrl
 * Controller of the mdlinguaApp
 */
angular.module('mdlinguaApp')
  .controller('ComplaintCtrl', function () {
    this.complaints = [
      'Chest pain',
      'Abdominal pain',
      'Shortness of breath',
      'Loss of consciousness',
      'Weakness / Fatigue',
      'Vomiting',
      'Fever',
      'Weight loss',
      'Seizures',
      'Edema'
    ];
  });
