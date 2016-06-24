/**
* ImagesController
* @namespace cashman.catalog.controllers
*/
(function () {
    'use strict';

    angular
      .module('cashman.catalog.controllers')
      .controller('ImagesController', ImagesController);

    ImagesController.$inject = ['$location', '$scope', 'Catalog', 'Authentication', 'Snackbar'];

    /**
    * @namespace ImagesController
    */
    function ImagesController($location, $scope, Catalog, Authentication, Snackbar) {
        var vm = this;

        vm.images = [];
        activate();
        vm.categories = [];
        vm.filter_images = filter_images;

        /**
        * @name filter_images
        * @desc Actions to be performed when any image is selected
        * @memberOf cashman.catalog.controllers.ImageController
        */
        function filter_images() {
            console.log(vm.selected_categories);
            if (vm.selected_categories.length == 0) {                
                return
            }
            $scope.filter_options = {
                'type': 'categorized',
                'category': vm.selected_categories.join(',')
            }
            Catalog.images($scope.filter_options)
                .then(filterSuccessFn, filterErrorFn)

            /**
            * @name filterSuccessFn
            * @desc Update posts array on view
            */
            function filterSuccessFn(data, status, headers, config) {
                vm.images = data.data.results;
            }


            /**
            * @name filterErrorFn
            * @desc Show snackbar with error
            */
            function filterErrorFn(data, status, headers, config) {
                Snackbar.error(data.error);
            }
        }

        /**
        * @name activate
        * @desc Actions to be performed when this controller is instantiated
        * @memberOf cashman.catalog.controllers.ImagesController
        */
        function activate() {
            if (!Authentication.isAuthenticated()) {
                $location.url('/login')
            }
            Catalog.images({'type': 'categorized'}).then(imagesSuccessFn, imagesErrorFn);

            /**
            * @name imagesSuccessFn
            * @desc Update posts array on view
            */
            function imagesSuccessFn(data, status, headers, config) {
                vm.images = data.data.results;
            }


            /**
            * @name imagesErrorFn
            * @desc Show snackbar with error
            */
            function imagesErrorFn(data, status, headers, config) {
                Snackbar.error(data.error);
            }

            Catalog.category().then(categorySuccessFn, categoryErrorFn);

            /**
            * @name categorySuccessFn
            * @desc Update posts array on view
            */
            function categorySuccessFn(data, status, headers, config) {
                vm.categories = data.data.results;
            }


            /**
            * @name categoryErrorFn
            * @desc Show snackbar with error
            */
            function categoryErrorFn(data, status, headers, config) {
                Snackbar.error(data.error);
            }
        }
    }
})();
