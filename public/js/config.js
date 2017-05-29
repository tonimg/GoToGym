angular.module('gymApp')
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true)
    $routeProvider
      .when('/', {
        templateUrl: 'index.html',
        controller: 'homeController'
      })
      .when('about.html', {
        template: '<h1>About</h1>'
      })
  })
