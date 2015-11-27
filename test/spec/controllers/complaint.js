'use strict';

describe('Controller: ComplaintCtrl', function () {

  // load the controller's module
  beforeEach(module('mdlinguaApp'));

  var ComplaintCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ComplaintCtrl = $controller('ComplaintCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ComplaintCtrl.awesomeThings.length).toBe(3);
  });
});
