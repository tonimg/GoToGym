angular.module('gymApp')
  .controller('locationController', function ($scope, $location, $routeParams, ApiService) {

    const location = $routeParams.location

		ApiService.getGymsByLocation(location)
			.then( gyms =>  {
				$scope.gyms = gyms
				console.log(gyms)
			})


    // $scope.getLocations = function () {
    //   ApiService.getAllGyms()
	   //    .then(function (success) {
	   //      $scope.gyms = success
	   //    })
    // }
  })
