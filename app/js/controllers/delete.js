app.controller('deleteCtrl' ,[ '$scope', '$filter','$firebaseArray', '$state', function($scope, $filter, $firebaseArray, $state){
  var fireRef = new Firebase('https://inmotioncrud-7f50a.firebaseio.com/movies');
  $scope.movies = $firebaseArray(fireRef);

  $scope.removeMovie = function(movie){
    $scope.movies.$remove(movie);
     $state.go('home');
  }
}])
