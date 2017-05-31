angular.module('gymApp')
  .controller('homeController', function ($scope, $location) {
    $scope.title = 'HOME'
    $scope.toContact = function () {
      $location.path('/contact')
    }
  })
