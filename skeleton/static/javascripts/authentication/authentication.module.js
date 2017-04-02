(function () {
    'use strict';

    angular
      .module('skeleton.authentication', [
        'skeleton.authentication.controllers',
        'skeleton.authentication.services'
      ]);

    angular
      .module('skeleton.authentication.controllers', []);

    angular
      .module('skeleton.authentication.services', ['ngCookies']);
})();
