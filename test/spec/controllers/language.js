'use strict';

describe('Controller: LanguageCtrl', function () {

  // load the controller's module
  beforeEach(module('mdlinguaApp'));

  var LanguageCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LanguageCtrl = $controller('LanguageCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LanguageCtrl.awesomeThings.length).toBe(3);
  });
});
