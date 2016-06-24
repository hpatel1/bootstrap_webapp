(function () {
    'use strict';

    angular
      .module('cashman.routes')
      .config(config);

    config.$inject = ['$routeProvider'];

    /**
    * @name config
    * @desc Define valid application routes
    */
    function config($routeProvider) {
        $routeProvider.when('/register', {
            controller: 'RegisterController', 
            controllerAs: 'vm',
            templateUrl: '/static/templates/authentication/register.html'
        }).when('/login', {
            controller: 'LoginController',
            controllerAs: 'vm',
            templateUrl: '/static/templates/authentication/login.html'
        }).when('/catalog/upload', {
            controller: 'UploadController',
            controllerAs: 'vm',
            templateUrl: '/static/templates/catalog/upload_images.html'
        }).when('/catalog/images', {
            controller: 'ImagesController',
            controllerAs: 'vm',
            templateUrl: '/static/templates/catalog/images.html'
        }).when('/catalog/cataloging', {
            controller: 'CatalogingController',
            controllerAs: 'vm',
            templateUrl: '/static/templates/catalog/cataloging.html'
        }).otherwise('/');

    }
})();
