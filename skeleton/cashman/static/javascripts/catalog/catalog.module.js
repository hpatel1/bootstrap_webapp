(function () {
    'use strict';

    angular
      .module('skeleton.catalog', [
        'skeleton.catalog.controllers',
        'skeleton.catalog.services'
      ]);

    angular
      .module('skeleton.catalog.controllers', [
          'angularFileUpload',
          'ngCookies'
      ]);

    angular
      .module('skeleton.catalog.services', []);

})();
