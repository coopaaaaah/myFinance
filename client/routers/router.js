angular.module('myFinance').config(function ($urlRouterProvider, $stateProvider, $locationProvider) {

	$locationProvider.html5Mode(true);

	// this is the home page route
	$stateProvider.state('login', {
		url: '/',
		templateUrl: 'client/templates/login.ng.html',
		controller: 'loginCtrl'
	});

	// this is the home page route
	$stateProvider.state('home', {
		url: '/home',
		templateUrl: 'client/templates/home.ng.html',
		controller: 'homeCtrl'
	});

	// this is the home page route
	$stateProvider.state('404', {
		url: '/404',
		templateUrl: 'client/templates/404.ng.html',
		controller: 'homeCtrl'
	});

	$stateProvider.state('logout', {
	      url: '/logout',
	      resolve: {
	        "logout": function($meteor, $state) {
	          return $meteor.logout().then(function(){
	            $state.go('login');
	          }, function(err){
	            console.log('logout error - ', err);
	          });
	        }
	      }
	    });

	$urlRouterProvider.otherwise("404");

});
