app.controller('deleteCtrl' ,[ '$scope', '$filter','$firebase', function($scope, $filter, $firebase){
  var fireRef = new Firebase('https://inmotioncrud.firebaseio.com/movies');
  $scope.movies = $firebase(fireRef).$asArray();

  $scope.removeMovie = function(movie){
    $scope.movies.$remove(movie);
  }
}])
