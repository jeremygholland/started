var app = angular.module('app', ['firebase'])

app.controller('myCtrl' , ['$scope', '$filter','$firebase', function($scope, $filter, $firebase){
  var fireRef = new Firebase('https://inmotioncrud.firebaseio.com/');
  $scope.movies = $firebase(fireRef).$asArray();
  $scope.newMovie = "";

 $scope.submitMovie = function(){
   $scope.movies.$add({
     title:$scope.movie.title,
     genre: $scope.movie.genre,
     actors: $scope.movie.actors,
     year: $scope.movie.year,
     rating: $scope.movie.rating,
     id: $scope.movies.length +1
   })
   $scope.newMovie = '';
 }

 $scope.removeMovie = function(movie){
   $scope.movies.$remove(movie);
 }
  $scope.check = function(){
    console.log($scope.movies.id)
  }
}])
