'use strict';

describe('Controller: PatientDetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('mdlinguaApp'));

  var PatientDetailsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PatientDetailsCtrl = $controller('PatientDetailsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PatientDetailsCtrl.awesomeThings.length).toBe(3);
  });
});
