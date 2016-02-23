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
    url: '/home',
    templateUrl: 'client/templates/home.ng.html',
    controller: 'homeCtrl',
    controllerAs: 'hc',
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
  .state('income', {
  url: '/income',
  templateUrl: 'client/templates/incomes.ng.html',
  controller: 'incomeCtrl',
  controllerAs: 'ic'
})
.state('expense', {
    url: '/expense',
    templateUrl: 'client/templates/expenses.ng.html',
    controller: 'expenseCtrl',
    controllerAs: 'ec'
  })
  // 404 redirect
  .state('404', {
    url: '/404',
    templateUrl: 'client/templates/404.ng.html'
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
