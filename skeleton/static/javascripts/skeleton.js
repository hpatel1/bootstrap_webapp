(function () {
    'use strict';

    angular
      .module('${1}', [
        '${1}.routes',
        '${1}.config',
        '${1}.utils',
        '${1}.authentication',
        '${1}.layout',
        '${1}.catalog',
        'ui.materialize'
      ]);

    angular
      .module('${1}.routes', ['ngRoute']);

    angular
      .module('${1}.config', []);

    angular
      .module('${1}.utils', []);

    angular
      .module('${1}.layout', []);

    angular
      .module('${1}.catalog', []);

    angular
      .module('${1}')
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
