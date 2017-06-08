angular.module('gymApp')
  .controller('locationController', function ($scope, $location, ApiService) {
    $scope.getLocations = function () {
      ApiService.getAllGyms().then(function (success) {
        $scope.gyms = success
      })
    }
  })
