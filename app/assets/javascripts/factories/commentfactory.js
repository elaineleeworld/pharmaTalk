// IIFE

(function(){

  angular
    .module("pharmatalkapp")
    .factory("CommentsFactory", CommentsFactory);

  CommentsFactory.$inject = ["PostsFactory", "Resources", "$http"];

  function CommentsFactory(PostsFactory, Resources, $http) {

    var Comments = function() {
    
      var self= this;

      var CommentResource = new Resources("comments");

      self.comments = CommentResource.query();

      self.comment = new CommentResource();

      self.create = function(comment) {

        CommentResource.save(comment, function(data, headers, status){

          self.comments.unshift(data);

           comment.body = '';
           comment.user_id = '';
           comment.created_at = '';

           $("#comment-link").modal("toggle");

        }).$promise.catch(function(response) {
          if(response.status !== 201) {
            self.commentError = true;
          }
        });
      };
      self.destroy = function(comment, index) {
        var commentObj = {id: comment}
        CommentResource.delete(commentObj);

        self.comments.splice(index, 1);
      };
    };
    return Comments
  }

})();