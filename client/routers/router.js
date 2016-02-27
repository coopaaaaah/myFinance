angular.module('myFinance').config(function($urlRouterProvider, $stateProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

  $stateProvider

    // this is the login page route
    .state('login', {
    url: '/login',
    templateUrl: 'client/templates/login.ng.html',
    controller: 'loginCtrl',
    controllerAs: 'lc'
  })

  // this is the home page route
  .state('home', {
    url: '/home/' + Meteor.userId(),
    templateUrl: 'client/templates/home.ng.html',
    controller: 'homeCtrl',
    controllerAs: 'hc'
  })

  .state('logout', {
    url: '/logout',
    resolve: {
      "logout": ['$meteor', '$state', function($meteor, $state) {
        var meteorUserId = Meteor.userId();
        return $meteor.logout().then(function() {
          console.log(meteorUserId + " logged out.");
          $state.go('login');
        }, function(err) {
          console.log('logout error - ', err);
        });
      }]
    }
  });

  $urlRouterProvider.otherwise("login");

})

.run(function($rootScope, $state) {
  $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
    if (error === 'AUTH_REQUIRED') {
      $state.go('login');
    }
  });
});
