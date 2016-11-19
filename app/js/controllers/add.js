
app.controller('addCtrl' ,[ '$scope', '$filter','$firebase', '$state', function($scope, $filter, $firebase, $state){
  $scope.actorAll = []
  var clearForm = function(){
    $scope.movie.title = '';
    $scope.movie.genre = '';
    $scope.movie.actors = '';
    $scope.movie.year = '';
    $scope.movie.rating = '';
    $scope.actorAll = []
  }
  var fireRef = new Firebase('https://inmotioncrud.firebaseio.com/movies');
  $scope.movies = $firebase(fireRef).$asArray();
  $scope.addActors = function(){
      var actors = $scope.movie.actors;
    $scope.actorAll.push(actors);
    $scope.movie.actors ='';
  }


 $scope.submitMovie = function(){
   $scope.movie.actors = " ";
   $scope.movies.$add({
     title:$scope.movie.title,
     genre: $scope.movie.genre,
     actors: $scope.actorAll,
     year: $scope.movie.year,
     rating: $scope.movie.rating,
   })
   clearForm();
 $state.go('home');
 }
 }])
