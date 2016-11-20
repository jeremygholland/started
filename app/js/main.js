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
      .state('edit', {
        controller: 'editCtrl',
        templateUrl: 'views/edit.html',
        url: '/edit/:id'
      })
      $urlRouterProvider.otherwise('home');
  }
])

app.controller('myCtrl' , ['$scope', '$filter','$firebaseArray', function($scope, $filter, $firebaseArray){

  var fireRef = new Firebase('https://inmotioncrud-7f50a.firebaseio.com/movies');
  $scope.movies = $firebaseArray(fireRef);
}])
