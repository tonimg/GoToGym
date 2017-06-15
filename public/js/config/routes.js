angular.module('gymApp')
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/templates/home.html',
        controller: 'homeController'
      })
      .when('/locations/:location', {
        templateUrl: '/templates/locations.html',
        controller: 'locationController'
      })
      .when('/admin', {
        templateUrl: '/templates/admin.html',
        controller: 'adminController'
      })
      .when('/contact', {
        templateUrl: '/templates/contact.html',
        controller: 'contactController'
      })
  })
