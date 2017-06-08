angular.module('gymApp')
  .controller('homeController', function ($scope, $location) {
    $scope.title = 'HOME'

    $scope.getSearchGyms = function () {
      var codeLocation = $scope.queryLocation
      $location.path('/locations' + codeLocation)
    }
  })
