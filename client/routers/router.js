angular.module('myFinance').config(function($urlRouterProvider, $stateProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

  // this is the login page route
  $stateProvider

    .state('login', {
    url: '/login',
    templateUrl: 'client/templates/login.ng.html',
    controller: 'loginCtrl',
    controllerAs: 'lc'
  })

  // this is the home page route
  .state('home', {
    url: '/home/:userId',
    templateUrl: 'client/templates/home.ng.html',
    controller: 'homeCtrl',
    resolve: {
      currentUser: ($q) => {
        if (Meteor.userId() === null) {
          return $q.reject('AUTH_REQUIRED');
        } else {
          return $q.resolve();
        }
      }
    }
  })

  // 404 redirect
  .state('404', {
    url: '/404',
    templateUrl: 'client/templates/404.ng.html',
    controller: 'homeCtrl'
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

  $urlRouterProvider.otherwise("/login");

})

.run(function($rootScope, $state) {
  $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
    if (error === 'AUTH_REQUIRED') {
      $state.go('login');
    }
  });
});
