// const ngAnimate = require('angular-animate')
// const toastr = require('angular-toastr')
// const sweetAlert = require('angular-sweetalert')

angular.module('gymApp')

  .controller('contactController', function ($scope, $location, ApiService) {
    $scope.sendMessage = function () {
      console.log('sendMessage')

      const { name, email, message } = $scope
      const dataMessage = { name, email, message }

      ApiService.sendMessage(dataMessage)
      // console.log('dataMessage', dataMessage)
        // $location.path('/')
       .then(msg => {
         swal('Success!', msg, 'success')
         $location.path('/')
       })
    }
  })
