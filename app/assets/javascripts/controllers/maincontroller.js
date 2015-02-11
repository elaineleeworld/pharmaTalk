// IIFE
// this controller is for before a person is logged in

(function(){

	angular
		.module('pharmatalkapp')
		.controller('MainController', MainController);


	MainController.$inject = ['CommentsFactory', 'PostsFactory', 'ipCookie'];

	function MainController(CommentsFactory, PostsFactory, ipCookie){

		var self = this;

		// create PostFactory as an object
		self.Post = new PostsFactory();
		self.id = ipCookie('id');
		// create CommentFactory as an object
		self.comment = new CommentsFactory();
		
	}

})();