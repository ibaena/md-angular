(function() {
  "use strict";

  angular.module('myApp').config( function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
    .primaryPalette('indigo')
    .accentPalette('grey')
    .warnPalette('red');
});

  var mainCtrl = angular.module('mainCtrl', ['ngAnimate', 'ngMaterial']);

  mainCtrl.controller('homeCtrl', ['$scope', '$http', '$mdDialog', function($scope, $http, $mdDialog) {
    $scope.showAlert = function() {
      $mdDialog.show(
        $mdDialog.alert()
        .title('Success!')
        .content('Hello World')
        .ok('Ok')
      );

    };
  }]);

})();
