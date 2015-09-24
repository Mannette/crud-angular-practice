app.factory('httpFactory', ['$http', function($http) {

  var obj = {};

  // get request
  obj.get = function() {
    return $http.get('/api/v1/beers');
  };

  obj.post = function(url, payload) {
    return $http.post(url, payload);
  };

  return obj;

}]);
