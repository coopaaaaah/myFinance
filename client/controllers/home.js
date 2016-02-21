angular.module('myFinance').controller('homeCtrl', function($scope, $state, $mdSidenav) {

  var hm = this;

  // menu button controls
  hm.goAbout = function() {
    $state.go('about');
  };
  hm.goLogout = function() {
    $state.go('logout');
  };

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
