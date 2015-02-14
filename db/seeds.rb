# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(name: "Stanley Yang", email: "stanleyang13@gmail.com", password: "foobar")
user= User.find_by(email: "stanleyang13@gmail.com")
posts = Post.create(
  [
    {
      link: "https://yahoo.com",
      user: user
      
    },
 
  ]
)

comments = Comment.create(
  [
    {
      body: "First comment test",
      user: user,
      post: Post.first
    },
   
  ]
  )