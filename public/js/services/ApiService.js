angular.module('gymApp')
.factory('ApiService', function ($http) {
  function getAllGyms (city) {
    return $http.get('/api/gyms/')
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

  return { getAllGyms, addGym, removeGym }
})
