angular.module('myFinance').controller('homeCtrl', function($scope, $mdSidenav) {

  $scope.loggedUser = Meteor.user().username;

  // *************************
  // START--Helper Functions Block
  // *************************

  // Operate Side Nav on Home page
  $scope.openLeftMenu = function() {
    $mdSidenav('left').toggle();
  };

  // *************************
  // END--Helper Functions Block
  // *************************


});
