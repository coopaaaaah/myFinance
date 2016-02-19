angular.module('myFinance').controller('loginCtrl', ['$meteor', '$scope', '$state', '$mdToast', function($meteor, $scope, $state, $mdToast) {

  var vm = this;

  vm.userCredentials = {
    username: '',
    password: '',
    passwordConfirm: ''
  };

  vm.error = '';

  vm.login = function () {
    $meteor.loginWithPassword(vm.userCredentials.username, vm.userCredentials.password).then(
      function() {
        $state.go('home');
      },
      function(err) {
        vm.error = 'Login error - ' + err;
      }
    );
  };

  // Declaring variables for UI Rendering
  $scope.loginForm = true; // boolean for login form
  $scope.registerForm = false; // boolean for register form

  // This function will set the booleans so that the registration
  // form information is shown in login-ng.html
  $scope.showRegistration = function() {
    $scope.loginForm = false;
    $scope.registerForm = true;
  };

  // This function will set the booleans so that the login
  // form information is shown in login-ng.html
  $scope.showLogin = function() {
    $scope.loginForm = true;
    $scope.registerForm = false;
  };

  // This funtion will create a user by the following steps
  // 1) Confirms that the password and confirmed passwords are identical
  vm.createUser = function() {
    if (vm.userCredentials.passwordConfirm !== vm.userCredentials.password) { // they do not match
      console.log("passwords do not match"); //prompt the user
    } else {
      Accounts.createUser({ // adds a user object to the Accounts.Users with create
        password: vm.userCredentials.passwordConfirm, // pulls from ng model for users password
        username: vm.userCredentials.username // pulls from ng model for users username
      }, function(error) { // if the callback experiences and error
        if (error) {
          console.log("Error Adding user to Meteor Account");
          console.log(error);
        } else { // if there is no error an email will be sent to the user
          console.log("Added user to Meteor Account");
          $state.go('home'); // immediate redirect for the user after successfully registering or are we waiting for email verification ?
        }
      });
    }
  };

  // *************************
  // END--Helper Functions Block
  // *************************

}]);
