angular.module('myFinance').controller('homeCtrl', function($scope, $state, $mdSidenav) {

  var hm = this;

  // menu button controls
  hm.goAbout = function() {
    $state.go('about');
  };
  hm.goLogout = function() {
    $state.go('logout');
  };

  // logic to store user that is currently logged in
  $scope.user = Meteor.user() ? Meteor.user().username : 'friend!';

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
