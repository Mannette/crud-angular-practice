app.controller('BeerController', function($scope, httpFactory, $timeout) {
  $scope.beer = {};
  $scope.success = false;

  getBeers = function(url) {
    httpFactory.get(url)
      .then(function(res) {
        $scope.beers = res.data;
      });
  };

  getBeers('/api/v1/beers');

  function messageTimeout() {
    $scope.success = false;
  }

  $scope.postBeer = function() {
    var payload = $scope.beer;
    httpFactory.post('/api/v1/beers', payload)
      .then(function(res) {
        $scope.beers.push(res.data);
        // getBeers('/api/v1/beers');
        $scope.beer = {};
        $scope.success = true;
        $scope.message = 'Added a new beer. Thanks!';
        $timeout(messageTimeout, 5000);
      });
  };



});
