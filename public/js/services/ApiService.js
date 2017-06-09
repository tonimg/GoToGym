angular.module('gymApp')
.factory('ApiService', function ($http) {

	function getGymsByLocation (location) {
    return $http.get('/api/gyms/city/' + location)
      .then(response => response.data)
  }

  function getAllGyms (city) {
    return $http.get('/api/gyms/city/' + city)
      .then(response => response.data)
  }

  function addGym (data) {
    return $http.post('/api/gyms', data)
      .then(response => response.data)
  }

  function removeGym (id) {
    return $http.delete(`/api/gyms/${id}`)
      .then(response => response.data)
  }

  return { getAllGyms, addGym, removeGym, getGymsByLocation }
})
