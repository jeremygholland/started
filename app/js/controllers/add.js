app.controller('addCtrl', ['$scope', '$filter', '$firebaseArray', '$state', function($scope, $filter, $firebaseArray, $state) {
    $scope.actorAll = []
    var clearForm = function() {
        $scope.movie.title = '';
        $scope.movie.genre = '';
        $scope.movie.actors = '';
        $scope.movie.year = '';
        $scope.movie.rating = '';
        $scope.actorAll = []
    }
    var fireRef = new Firebase('https://inmotioncrud-7f50a.firebaseio.com/movies');
    $scope.movies = $firebaseArray(fireRef);
    $scope.addActors = function() {
        var actors = $scope.movie.actors;
        $scope.actorAll.push(actors);
        $scope.movie.actors = '';
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
        console.log(fireRef)
        clearForm();
        $state.go('home');
    }
}])
