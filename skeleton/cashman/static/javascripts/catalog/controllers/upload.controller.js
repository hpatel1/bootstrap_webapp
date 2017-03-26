/**
* UploadController
* @namespace skeleton.catalog.controllers
*/
(function () {
    'use strict';

    angular
      .module('skeleton.catalog.controllers')
      .controller('UploadController', UploadController);

    UploadController.$inject = ['$scope', 'Catalog', 'FileUploader', '$cookies'];

    /**
    * @namespace UploadController
    */
    function UploadController($scope, Catalog, FileUploader, $cookies) {
        var vm = this;

        var uploader = $scope.uploader = new FileUploader({
            url: '/api/v1/catalog/',
            alias: 'image',
            headers: {
                'X-CSRFToken': $cookies.get('csrftoken')
            }
        });

        uploader.onWhenAddingFileFailed = function (item /*{File|FileLikeObject}*/, filter, options) {
            //console.info('onWhenAddingFileFailed', item, filter, options);
        };
        uploader.onAfterAddingFile = function (fileItem) {
            //console.info('onAfterAddingFile', fileItem);
        };
        uploader.onAfterAddingAll = function (addedFileItems) {
            $scope.progress = 0;
            //console.info('onAfterAddingAll', addedFileItems);
        };
        uploader.onBeforeUploadItem = function (item) {
            //console.info('onBeforeUploadItem', item);
        };
        uploader.onProgressItem = function (fileItem, progress) {
            //console.info('onProgressItem', fileItem, progress);
        };
        uploader.onProgressAll = function (progress) {
            $scope.progress = progress;
            //console.info('onProgressAll', progress);
        };
        uploader.onSuccessItem = function (fileItem, response, status, headers) {
            //console.info('onSuccessItem', fileItem, response, status, headers);
        };
        uploader.onErrorItem = function (fileItem, response, status, headers) {
            //console.info('onErrorItem', fileItem, response, status, headers);
        };
        uploader.onCancelItem = function (fileItem, response, status, headers) {
            //console.info('onCancelItem', fileItem, response, status, headers);
        };
        uploader.onCompleteItem = function (fileItem, response, status, headers) {
            //console.info('onCompleteItem', fileItem, response, status, headers);
        };
        uploader.onCompleteAll = function () {
            //console.info('onCompleteAll');
        };

        //console.info('uploader', uploader);
    }
})();
