angular.module('gymApp')
  .controller('adminController', function ($scope, $location, $rootScope, NgTableParams, ApiService) {
    $rootScope.section = 'home'
    allGymsToScope()

    $scope.removeGym = function (id) {
      ApiService.removeGym(id)
      .then(msg => {
        allGymsToScope()
      })
    }

    function allGymsToScope () {
      ApiService.getAllGyms()
      .then(gyms => {
        $scope.gyms = gyms
        console.log(gyms)
        $scope.tableParams = new NgTableParams(
          { sorting: { _id: 'desc' } }, // initial sort order
          { dataset: gyms }
          )
        secure:true
      })
    }
  })
