/**
* CatalogingController
* @namespace cashman.catalog.controllers
*/
(function () {
    'use strict';

    angular
      .module('cashman.catalog.controllers')
      .controller('CatalogingController', CatalogingController);

    CatalogingController.$inject = ['$location', '$scope', 'Catalog', 'Snackbar', 'Authentication'];

    /**
    * @namespace CatalogingController
    */
    function CatalogingController($location, $scope, Catalog, Snackbar, Authentication) {
        console.log(Authentication.isAuthenticated());
        if (!Authentication.isAuthenticated()) {
            $location.url('/login');
        }

        var vm = this;

        vm.select_image = select_image;
        vm.apply_category = apply_category;
        activate();

        /**
        * @name select_image
        * @desc Actions to be performed when any image is selected
        * @memberOf cashman.catalog.controllers.CatalogingController
        */
        function select_image(image) {
            var idx = vm.selected_images.indexOf(image);
            if (idx != -1) {
                vm.selected_images.splice(idx, 1);
            } else {
                vm.selected_images.push(image);
            }
            vm.photos_length = vm.selected_images.length;
            $('select').material_select();
        }

        /**
        * @name apply_category
        * @desc Actions to be performed when any image is selected
        * @memberOf cashman.catalog.controllers.CatalogingController
        */
        function apply_category() {
            if (vm.selected_images.length == 0 || vm.selected_category=='') {
                Snackbar.show('images or category is not selected');
                return
            }
            Catalog.associate(vm.selected_images, vm.selected_category)
                .then(associateSuccessFn, associateErrorFn)

            /**
            * @name associateSuccessFn
            * @desc Update posts array on view
            */
            function associateSuccessFn(data, status, headers, config) {
                activate();
            }


            /**
            * @name associateErrorFn
            * @desc Show snackbar with error
            */
            function associateErrorFn(data, status, headers, config) {
                Snackbar.error(data.error);
            }
        }

        /**
        * @name activate
        * @desc Actions to be performed when this controller is instantiated
        * @memberOf cashman.catalog.controllers.CatalogingController
        */
        function activate() {
            vm.selected_images = [];
            vm.selected_category = '';

            Catalog.images({'type':'uncategorized'}).then(imagesSuccessFn, imagesErrorFn);

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
