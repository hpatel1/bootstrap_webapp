(function () {
    'use strict';

    angular
      .module('cashman', [
        'cashman.routes',
        'cashman.config',
        'cashman.utils',
        'cashman.authentication',
        'cashman.layout',
        'cashman.catalog',
        'ui.materialize'
      ]);

    angular
      .module('cashman.routes', ['ngRoute']);

    angular
      .module('cashman.config', []);

    angular
      .module('cashman.utils', []);

    angular
      .module('cashman.layout', []);

    angular
      .module('cashman.catalog', []);

    angular
      .module('cashman')
      .run(run);
    run.$inject = ['$http']

    /**
    * @name run
    * @desc Update xsrf $http headers to align with Django's defaults
    */
    function run($http) {
        $http.defaults.xsrfHeaderName = 'X-CSRFToken';
        $http.defaults.xsrfCookieName = 'csrftoken';
    }


})();
