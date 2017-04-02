(function () {
    'use strict';

    angular
      .module('skeleton', [
        'skeleton.routes',
        'skeleton.config',
        'skeleton.utils',
        'skeleton.authentication',
        'skeleton.layout',
        'skeleton.catalog',
        'ui.materialize'
      ]);

    angular
      .module('skeleton.routes', ['ngRoute']);

    angular
      .module('skeleton.config', []);

    angular
      .module('skeleton.utils', []);

    angular
      .module('skeleton.layout', []);

    angular
      .module('skeleton.catalog', []);

    angular
      .module('skeleton')
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
