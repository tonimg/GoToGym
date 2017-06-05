angular.module('gymApp')
  .config(function ($routeProvider, $locationProvider) {
    // $locationProvider.html5Mode(true)

    $routeProvider
      .when('/', {
        templateUrl: '../templates/home.html',
        controller: 'homeController'
      })
      // .when('/login', {
      //   templateUrl: '../templates/login.html'
      // })
      // .when('/register', {
      //   templateUrl: '../templates/register.html'
      // })
      // .when('/contact', {
      //   templateUrl: '../templates/contact.html'
      // })
      // .when('/about', {
      //   templateUrl: '../templates/about.html'
      // })
      .when('/locations', {
        templateUrl: '../templates/locations.html'
      })
  })
