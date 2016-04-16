var myApp = angular.module('myApp', [
  'ui.router',
  'ngMaterial',
  'mainCtrl'
]);

myApp.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/views/partials/home.html',
      controller: 'homeCtrl'
    });
});
