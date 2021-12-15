# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Animal.destroy_all
User.destroy_all

@admin = User.create!(username: 'pawpaw',email: 'pawpaw@email.com', password: '123456')

@lance = User.create!(username: 'lance',email: 'lance@email.com', password: '123456')

puts "#{User.count} users created"

Animal.create!(name: 'Bald Eagle', description: 'National Bird', seen: '12-5-2021 at 5pm', notes: 'Saw one Bald Eagle just past the Dam Store entering the Big Thompson Canyon on Hwy 34', image_url: 'https://www.pexels.com/photo/black-and-white-eagle-flying-3613420/', user: @admin)

Animal.create!(name: 'Big Horn Sheep', description: 'CSU mascot', seen: '12-1-2021 at 9am', notes: 'Saw a small group at Mile Marker 9 in the Big Thompson Canyon on Hwy 34', image_url: 'https://images.pexels.com/photos/5339018/pexels-photo-5339018.jpeg?cs=srgb&dl=pexels-sanaan-mazhar-5339018.jpg&fm=jpg', user: @lance)

Animal.create!(name: 'Elk', description: 'Estes Park mascot', seen: '11-23-2021 at 2pm', notes: 'Saw a very large 8 by 8 buck at the River Condos in the Big Thompson Canyon on Hwy 34', image_url: 'https://www.pexels.com/photo/brown-deer-on-brown-grass-field-1472386/', user: @admin)

puts "#{Animal.count} Anmimals created"