angular.module('gymApp')
  .controller('homeController', function ($scope, $location) {
    $scope.title = 'HOME'

    $scope.toContact = function () {
      $location.path('/contact')
    }

    $scope.getSearchGyms = function () {
      var codeLocation = $scope.queryLocation.split(':')[0]
      $location.path('/locations/' + codeLocation)
    }
  })
