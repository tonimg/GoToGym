angular.module('gymApp')
  .controller('locationController', function ($scope, $location, $routeParams, ApiService, NgMap) {
    const location = $routeParams.location

    ApiService.getGymsByLocation(location)
      .then(gyms => {
        $scope.gyms = gyms
      })

    $scope.mapCenter = function (latitude, longitud) {
      const myLatlng = new google.maps.LatLng(latitude, longitud)

      NgMap.getMap({ id: 'main-map' })
        .then(map => {
          map.setZoom(20)
          map.panTo(myLatlng)
        })
    }
  })
