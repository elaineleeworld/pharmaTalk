class CommentSerializer < ActiveModel::Serializer
  attributes :id, :body, :commenter, :created_at, 

  # belongs_to :post

  def commenter
    # return {id: object.user.id, name: object.user.name}
    object.user.name
  end

  def dateTimeFormat
    self.created_at.strftime('%B %d, %Y %H:%M:%S %p')
  end

end
