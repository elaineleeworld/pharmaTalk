// IIFE
// Angular Rails template gem that allows us to catch your views
// and recognizes your templates folder
// everything in templates folder you have to do the Angular way

(function(){

	// Routing for my SPA app :-)

	angular
		.module('pharmatalkapp')
		.config(config)
		.run(run);


		function config($routeProvider, $locationProvider){

			// Define the routes
			$routeProvider

			.when('/', {
				title: 'pharmaTalk',
				templateUrl: 'index.html',
				controller: 'MainController',
				controllerAs: 'main'
			})

			// .when('/edit/:id', {
			// 	title: "Edit user",
			// 	templateUrl: "edit.html",
			// 	controller: "MainController",
			// 	controllerAs: "main"
			// })

			// .when('/about', {
			// 	title: "About",
			// 	templateUrl: "about.html",
			// 	controller: "MainController",
			// 	controllerAs: "check411"

			// })

			.otherwise({
				redirectTo: '/'
			});

		};

		function run($location, $rootScope){

			var changeRoute = function(event, current, previous){
				return $rootScope.title = current.$$route.title;
			}

			$rootScope.$on('$routeChangeSuccess', changeRoute);

		}


})();

