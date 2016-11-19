app.controller('deleteCtrl' ,[ '$scope', '$filter','$firebase', '$state', function($scope, $filter, $firebase, $state){
  var fireRef = new Firebase('https://inmotioncrud-7f50a.firebaseio.com/movies');
  $scope.movies = $firebase(fireRef).$asArray();

  $scope.removeMovie = function(movie){
    $scope.movies.$remove(movie);
     $state.go('home');
  }
}])
