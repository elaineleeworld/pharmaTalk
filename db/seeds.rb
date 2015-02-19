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
user2 = User.find_by(email: "kiko@mail.com")
post = Post.create(title: "Gilead and Hep C future outlook", link: "https://gilead.com", user: user)
post2 = Post.create(title: "GSK layoffs", link: "https://gsk.com", user: user2)    
comment = Comment.create(body: "hello there", user: user2, post_id: "2")     

      

