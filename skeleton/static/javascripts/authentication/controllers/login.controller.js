/**
* LoginController
* @namespace skeleton.authentication.controllers
*/
(function () {
    'use strict';

    angular
      .module('skeleton.authentication.controllers')
      .controller('LoginController', LoginController);

    LoginController.$inject = ['$location', '$scope', 'Authentication', 'Snackbar'];

    /**
    * @namespace LoginController
    */
    function LoginController($location, $scope, Authentication, Snackbar) {
        var vm = this;

        vm.login = login;

        activate();

        /**
        * @name activate
        * @desc Actions to be performed when this controller is instantiated
        * @memberOf thinkster.authentication.controllers.LoginController
        */
        function activate() {
            // If the user is authenticated, they should not be here.
            if (Authentication.isAuthenticated()) {
                $location.url('/');
            }
        }

        /**
        * @name login
        * @desc Log the user in
        * @memberOf thinkster.authentication.controllers.LoginController
        */
        function login() {
            Authentication.login(vm.email, vm.password);
        }
    }
})();

