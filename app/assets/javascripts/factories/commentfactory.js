// IIFE

(function(){

	angular
		.module('pharmatalkapp')
		.factory('CommentsFactory', CommentsFactory);

	CommentsFactory.$inject = ['Resources', '$http'];

	function CommentsFactory(Resources, $http){

		var Comments = function(){
			var self = this;

			var CommentResource = new Resources('comments');

			self.comments = CommmentResource.query();

			self.comment = new CommentResource();

			self.create = function(comment){

				CommentResource.save(comment, function(data, headers, status){
					self.comments.push(data);

					// clear the form
					comment.body = '';

					// close the modal comment form
					$('#comment-link').modal('toggle');	
				}).promise.catch(function(response){
					if(response.status !== 201){
						self.commentError = true;
					}
				});
			};

			// delete a comment
			self.destroy = function(comment, index){

				var commentObj = {id: comment};
				CommentResource.delete(commentObj);

				self.comments.splice(index, 1);
			};
		};

		return Comments;
	}

})();