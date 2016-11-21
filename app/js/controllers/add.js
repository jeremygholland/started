app.controller('addCtrl', ['$scope', '$filter', '$firebaseArray', '$state', function($scope, $filter, $firebaseArray, $state) {
    $scope.actorAll = [];
    $scope.genreAll = [];

    var fireRef = new Firebase('https://inmotioncrud-7f50a.firebaseio.com/movies');
    $scope.movies = $firebaseArray(fireRef);
    $scope.addActors = function() {
        var actors = $scope.movie.actors;
        $scope.actorAll.push(actors);
        $scope.movie.actors = '';
    }
    $scope.addGenre = function(){
      var genres = $scope.movie.genre;
      $scope.genreAll.push(genres);
      $scope.movie.genre = '';
    }



    $scope.submitMovie = function() {
        $scope.movie.actors = " ";
        $scope.movies.$add({
            title: $scope.movie.title,
            genre: $scope.movie.genre,
            actors: $scope.actorAll,
            year: $scope.movie.year,
            rating: $scope.movie.rating,
        })
        $scope.myform.$setPristine();

        $state.go('home');
    }
}])
