(function () {
    'use strict';

    angular
      .module('${1}.catalog', [
        '${1}.catalog.controllers',
        '${1}.catalog.services'
      ]);

    angular
      .module('${1}.catalog.controllers', [
          'angularFileUpload',
          'ngCookies'
      ]);

    angular
      .module('${1}.catalog.services', []);

})();
