var app = angular.module('app', ['firebase', 'ui.router', 'ngSanitize' ])

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
        controller: 'addCtrl',
        url: '/add',
        templateUrl: 'views/add.html'
      })
      .state('delete', {
        controller: 'deleteCtrl',
        url: '/delete',
        templateUrl: 'views/delete.html'
      })
      $urlRouterProvider.otherwise('home');
  }
])

app.controller('myCtrl' , ['$scope', '$filter','$firebase', function($scope, $filter, $firebase){

  var fireRef = new Firebase('https://inmotioncrud.firebaseio.com/movies');
  $scope.movies = $firebase(fireRef).$asArray();
}])
