'use strict';

angular
  .module('mdlinguaApp')
  .filter('chooseLang', function (translations, defaultLang) {
    return function (key, lang) {
      return translations[lang][key] || translations[defaultLang][key];
    };
  });
