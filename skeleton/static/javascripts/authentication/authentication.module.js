(function () {
    'use strict';

    angular
      .module('${1}.authentication', [
        '${1}.authentication.controllers',
        '${1}.authentication.services'
      ]);

    angular
      .module('${1}.authentication.controllers', []);

    angular
      .module('${1}.authentication.services', ['ngCookies']);
})();
