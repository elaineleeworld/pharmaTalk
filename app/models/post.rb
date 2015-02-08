class Post < ActiveRecord::Base

 # a user has many posts, a post has one user
  belongs_to :user
 # a post has many comments
 # if user is deleted, all comments and posts will be deleted too
  has_many :comments, dependent: :destroy

 # acts_as_votable gem 
  acts_as_votable

 # order posts by most recent post
  default_scope->{order(created_at: :desc)}

 # validate link entered has http://www.example.com format
  validates :link, presence: true, format: {with: /https?:\/\/[\S]+/}
end
