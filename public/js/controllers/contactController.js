angular.module('gymApp')
  .controller('contactController', function ($scope, $location, ApiService) {
    $scope.sendMessage = function () {
      console.log('sendMessage')

      const { name, email, message } = $scope
      const dataMessage = { name, email, message }

      ApiService.sendMessage(dataMessage)
      console.log('dataMessage', dataMessage)
        .then(msg => {
          // SweetAlert.swal('Success!', msg, 'success')
        })
    }
  })
