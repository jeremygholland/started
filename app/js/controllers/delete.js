app.controller('deleteCtrl' ,[ '$scope', '$filter','$firebase', '$state', function($scope, $filter, $firebase, $state){
  var fireRef = new Firebase('https://inmotioncrud.firebaseio.com/movies');
  $scope.movies = $firebase(fireRef).$asArray();

  $scope.removeMovie = function(movie){
    $scope.movies.$remove(movie);
     $state.go('home');
  }
}])
