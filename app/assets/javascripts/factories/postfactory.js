// IIFE

(function(){

	angular
		.module('pharmatalkapp')
		.factory('PostsFactory', PostsFactory);

	PostsFactory.$inject = ['Resources', '$http'];

	function PostsFactory(Resources, $http){

		var Posts = function(){
			var self = this;

			// use ngResource here for Posts
			var PostResource = new Resources('posts');

			// retrieve all posts
			self.posts = PostResource.query();

			// create a post object
			self.post = new PostResource();

			self.create = function(post){
s
				PostResource.save(post, function(data, headers, status){

					self.posts.unshift(data);

					post.link = '';

					$('#post-link').modal('toggle');
				}).$promise.catch(function(response){

					if(response.status !== 201){
						self.postError = true;
					}
				});
			};

			// delete a post
			self.destroy = function(post, index){

				var postObj = {id: post};
				PostResource.delete(postObj);

				self.posts.splice(index, 1);
			};

		};

		return Posts;
	}

})();