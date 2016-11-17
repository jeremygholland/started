var app = angular.module('app', []);


app.controller('myCtrl' , ['$scope', function($scope){
  $scope.movies = [];
 $scope.submit = function(){
   console.log('this worked?')
   $scope.movies.push({
     title:$scope.movie.title,
     genre: $scope.movie.genre,
     actors: $scope.movie.actors,
     year: $scope.movie.year,
     rating: $scope.movie.rating
   })
   return $scope.movies
 }
  $scope.test = "test"
}])
