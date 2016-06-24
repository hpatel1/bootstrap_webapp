/**
* Authentication
* @namespace cashman.catalog.services
*/
(function () {
    'use strict';

    angular
      .module('cashman.catalog.services')
      .factory('Catalog', Catalog);

    Catalog.$inject = ['$http', '$timeout', 'Snackbar'];

    /**
    * @namespace Catalog
    * @returns {Factory}
    */
    function Catalog($http, $timeout, Snackbar) {
        /**
        * @name Catalog
        * @desc The Factory to be returned
        */
        var Catalog = {            
            images: images,
            category: category,
            associate: associate
        };

        return Catalog;

        ////////////////////

        /**
        * @name images
        * @desc Get iamges
        * @returns {Promise}
        * @memberOf cashman.catalog.services.images
        */
        function images(filters) {
            return $http.get('/api/v1/catalog/', { params: filters });
        }

        /**
        * @name category
        * @desc Get categories
        * @returns {Promise}
        * @memberOf cashman.catalog.services.category
        */
        function category() {
            return $http.get('/api/v1/category/');
        }

        /**
        * @name associate
        * @desc associate category to images
        * @returns {Promise}
        * @memberOf cashman.catalog.services.associate
        */
        function associate(images, category) {            
            return $http.post('/api/v1/catalog/setCategory/', {
                category: category,
                images: images.join(',')
            });
        }
    }
})();
