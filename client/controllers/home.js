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
  hm.openLeftMenu = function() {
    $mdSidenav('left').toggle();
  };

  hm.showIncomePage = function() {
    $state.go('home');
  };

  hm.showIncomePage = function() {
    $state.go('income');
  };

  hm.showExpensePage = function() {
    $state.go('expense');
  };


  // *************************
  // END--Helper Functions Block
  // *************************


});
