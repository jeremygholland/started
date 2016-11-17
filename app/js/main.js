var app = angular.module('app', []);

app.config(function($routeProvider){
  $routeProvider
      .when('/', {
        templateUrl: 'index.html',
        controller: 'myCtrl',
        controllerAs: 'myCtrl'
      })
      .otherwise({
       redirectTo: '/'
     });
})


var app =angular.module('app', [])
app.controller('myCtrl' , ['$scope', '$filter', function($scope, $filter){
  $scope.movies = [];
 $scope.submit = function(){
   console.log('this worked?')
   $scope.movies.push({
     title:$scope.movie.title,
     genre: $scope.movie.genre,
     actors: $scope.movie.actors,
     year: $scope.movie.year,
     rating: $scope.movie.rating,
     id: $scope.movies.length +1
   })
   return $scope.movies
 }
  $scope.check = function(){
    console.log($scope.movies.id)
  }
}])
