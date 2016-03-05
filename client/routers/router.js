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
    url: '/home/:financeId' + Meteor.userId(),
    templateUrl: 'client/templates/home.ng.html',
    controller: 'homeCtrl',
    controllerAs: 'hc',
        resolve: {
          currentUser: ($q) => {
            if (Meteor.userId() == null) {
              return $q.reject('AUTH_REQUIRED');
            }
            else {
              return $q.resolve();
            }
          }
        }
  })

  .state('logout', {
    url: '/logout',
    resolve: {
      "logout": ['$meteor', '$state', function($meteor, $state) {
        return $meteor.logout().then(function() {
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
