// IIFE
// this controller is for before a person is logged in

(function(){

	angular
		.module('pharmatalkapp')
		.controller('MainController', MainController);


	MainController.$inject = ['CommentsFactory', 'PostsFactory', 'ipCookie'];


	function MainController(CommentsFactory, PostsFactory, ipCookie){

		var self = this;

		// create PostFactory, CommentFactory and ipCookie id as objects
		self.Post = new PostsFactory();
		self.id = ipCookie('id');
		self.comment = new CommentsFactory();
		// self.tweet = new TweetsFactory();
		
	}

})();