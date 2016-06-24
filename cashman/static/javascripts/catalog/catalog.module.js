(function () {
    'use strict';

    angular
      .module('cashman.catalog', [
        'cashman.catalog.controllers',
        'cashman.catalog.services'
      ]);

    angular
      .module('cashman.catalog.controllers', [
          'angularFileUpload',
          'ngCookies'
      ]);

    angular
      .module('cashman.catalog.services', []);

})();
