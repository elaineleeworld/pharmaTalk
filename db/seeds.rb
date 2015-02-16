# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create(name: "Elaine", email: "elaine@mail.com", password: "password")
user= User.find_by(email: "elaine@mail.com")
User.create(name: "Kiko", email: "kiko@mail.com", password: "password")
user= User.find_by(email: "kiko@mail.com")
posts = Post.create(
  [
    {
      title: "Gilead and Hep C future outlook",
      link: "https://gilead.com",
      user: user
      
    },
    {
      title: "GSK layoffs",
      link: "https://gsk.com",
      user: user
      
    },

    {
      title: "Pharma sales rep future",
      link: "https://reuters.com",
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