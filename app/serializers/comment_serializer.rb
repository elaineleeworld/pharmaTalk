class CommentSerializer < ActiveModel::Serializer
  attributes :id, :body, :commenter, :created_at

  belongs_to :posts

  def commenter
    object.user.name
  end

end
