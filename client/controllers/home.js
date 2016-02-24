angular.module('myFinance').controller('homeCtrl', function($scope, $state, $stateParams) {

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

  hm.goLogout = function() {
    $state.go('logout');
  };

  // *************************
  // END--Helper Functions Block
  // *************************

});
