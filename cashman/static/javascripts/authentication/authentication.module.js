(function () {
    'use strict';

    angular
      .module('cashman.authentication', [
        'cashman.authentication.controllers',
        'cashman.authentication.services'
      ]);

    angular
      .module('cashman.authentication.controllers', []);

    angular
      .module('cashman.authentication.services', ['ngCookies']);
})();
