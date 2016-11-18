
app.controller('addCtrl' ,[ '$scope', '$filter','$firebase', function($scope, $filter, $firebase){
  var clearForm = function(){
    $scope.movie.title = '';
    $scope.movie.genre = '';
    $scope.movie.actors = '';
    $scope.movie.year = '';
    $scope.movie.rating = '';
  }
  var fireRef = new Firebase('https://inmotioncrud.firebaseio.com/movies');
  $scope.movies = $firebase(fireRef).$asArray();
  $scope.newMovie = "";
 $scope.submitMovie = function(){
   $scope.movies.$add({
     title:$scope.movie.title,
     genre: $scope.movie.genre,
     actors: $scope.movie.actors,
     year: $scope.movie.year,
     rating: $scope.movie.rating,
   })
   $scope.newMovie = '';
   clearForm();

 }
 }])
