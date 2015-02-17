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
		// self.tweet = new TweetsFactory();
		self.searchTweets  = searchTweets;
	

	function searchTweets(){
               
	      var searchWord = encodeURIComponent(self.searchWord)
	      var url = '/api/tweets?q='
	      // $.getJSON(url+searchWord+'&result_type=popular&count=10', function(data){
	      //     main.tweets = data;
	      //     console.log(data[0].text);
	      // $('#searchWord').html(data[0].text);
	       $http 
	          .get(url+searchWord+'&result_type=popular&count=10')
	          .success(function(data, status, headers, config) {
	            self.tweets = data;
	          console.log(data[0].text);
	       })
	    };

	}



})();