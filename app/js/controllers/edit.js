app.controller('editCtrl', ['$scope', '$state', '$location', '$firebaseObject', '$stateParams', function($scope, $state, $location, $firebaseObject, $stateParams){

var id = $stateParams.id;

var ref = new Firebase('https://inmotioncrud-7f50a.firebaseio.com/movies/'+id + '');

$scope.movie = $firebaseObject(ref);


$scope.editMovie = function() {
     $scope.movie.$save({
       title: $scope.movie.title,
       genre: $scope.movie.genre,
       actors: $scope.movie.actors,
       year: $scope.movie.year,
       rating: $scope.movie.rating
     });
     $state.go('home');

}
}])
