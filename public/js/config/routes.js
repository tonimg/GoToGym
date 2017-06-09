angular.module('gymApp')
  .config(function ($routeProvider, $locationProvider) {
    // $locationProvider.html5Mode(true)

    $routeProvider
      .when('/', {
        templateUrl: '../templates/home.html',
        controller: 'homeController'
      })
      .when('/locations/:location', {
        templateUrl: '../templates/locations.html',
        controller: 'locationController'
      })
  })
