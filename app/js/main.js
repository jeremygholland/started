var app = angular.module('app', ['firebase', 'ui.router'])

app.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('home', {
        controller: 'myCtrl',
        url: '/home',
        templateUrl: 'views/home.html'
      })
      .state('add', {
        controller: 'myCtrl',
        url: '/add',
        templateUrl: 'views/add.html'
      })
      $urlRouterProvider.otherwise('home');
  }
])

app.controller('myCtrl' , ['$scope', '$filter','$firebase', function($scope, $filter, $firebase){


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
 }

 $scope.removeMovie = function(movie){
   $scope.movies.$remove(movie);
 }
  $scope.check = function(){
    console.log($scope.movies.id)
  }
}])
