// IIFE
// this controller is for before a person is logged in

(function(){

	angular
		.module('pharmatalkapp')
		.controller('MainController', MainController);


	MainController.$inject = ['CommentsFactory', 'PostsFactory', 'ipCookie', '$http'];


	function MainController(CommentsFactory, PostsFactory, ipCookie, $http){

		var self = this;

		// create PostFactory, CommentFactory and ipCookie id as objects
		self.Post = new PostsFactory();
		self.id = ipCookie('id');
		self.comment = new CommentsFactory();
		self.searchTweets  = searchTweets;
		self.addComment = addComment;


		function addComment(content, postId){
			$http
			  .post('/api/comments', {body: content, post_id: postId, user_id: self.id})
			  .success(function(response){
			  	console.log(response);
			  })
		}

		function searchTweets(){
          // var searchWord = 'gilead'
	      var searchWord = encodeURIComponent(self.searchWord);
	      var url = '/api/tweets?q=';
	     
	       $http 
	          .get(url+searchWord+'&result_type=popular&count=10')
	          .success(function(data, status, headers, config) {
	            self.tweets = data;
	          // console.log(data[0].text);
	          // console.log(date[0].created_at);
	       })
	    };

	}



})();