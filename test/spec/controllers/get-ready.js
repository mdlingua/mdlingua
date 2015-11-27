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

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GetReadyCtrl.awesomeThings.length).toBe(3);
  });
});