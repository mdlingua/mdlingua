'use strict';

describe('Controller: GetReadyCtrl', function () {

  // load the controller's module
  beforeEach(module('mdlinguaApp'));

  var GetReadyCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GetReadyCtrl = $controller('GetReadyCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of featuredTechnologies to the scope', function () {
    expect(GetReadyCtrl.featuredTechnologies.length).toBe(3);
  });
});