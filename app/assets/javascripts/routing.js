// IIFE
// Angular Rails template gem that allows us to catch your views
// and recognizes your templates folder
// everything in templates folder you have to do the Angular way

(function(){

	// Routing for my SPA app 
	angular
		.module('pharmatalkapp')
		.config(config)
		.run(run);

	//  routeProvider sets your routing
	//  locationProvider allows you to manipulate your url
	function config($routeProvider, $locationProvider){

		// Define the routes
		$routeProvider

		.when('/', {
			title: 'pharmaTalk',
			templateUrl: 'index.html',
			controller: "MainController",
			controllerAs: 'main'
		})

		.otherwise({
			redirectTo: '/'
		});

	};

	// Angular way to change your title

	function run($location, $rootScope){
		var changeRoute = function(event, current, previous){
			return $rootScope.title = current.$$route.title;
		}
		$rootScope.$on('$routeChangeSuccess', changeRoute);

	}
})();