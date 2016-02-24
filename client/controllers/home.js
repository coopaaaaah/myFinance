angular.module('myFinance').controller('homeCtrl', function($scope, $state, $stateParams, $mdSidenav) {

  var hm = this;
  hm.userId = $stateParams.userId;

  // *************************
  // START--Helper Functions Block
  // *************************

  // Operate nav-bar on Home page
  $scope.isOpen = false;
  $scope.toolbar = {
    isOpen: false,
    count: 0,
    selectedDirection: 'left'
  };

  hm.goHome = function() {
    $state.go('home');
  };

  hm.goIncome = function() {
    $state.go('income');
  };

  hm.goExpense = function() {
    $state.go('expense');
  };

  hm.goLogout = function() {
    $state.go('logout');
  };

  // *************************
  // END--Helper Functions Block
  // *************************


});
