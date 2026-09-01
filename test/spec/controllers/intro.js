'use strict';

describe('Controller: IntroCtrl', function () {
  beforeEach(module('mdlinguaApp'));
  var IntroCtrl, scope;
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IntroCtrl = $controller('IntroCtrl', { $scope: scope });
  }));
  it('should attach a list of featuredTechnologies to the scope', function () {
    expect(IntroCtrl.featuredTechnologies.length).toBe(3);
  });
});
