/**
* NavbarController
* @namespace ${1}.layout.controllers
*/
(function () {
    'use strict';

    angular
      .module('${1}.layout.controllers')
      .controller('NavbarController', NavbarController);

    NavbarController.$inject = ['$scope', 'Authentication'];

    /**
    * @namespace NavbarController
    */
    function NavbarController($scope, Authentication) {
        var vm = this;

        vm.logout = logout;

        /**
        * @name logout
        * @desc Log the user out
        * @memberOf ${1}.layout.controllers.NavbarController
        */
        function logout() {
            Authentication.logout();
        }
    }
})();
