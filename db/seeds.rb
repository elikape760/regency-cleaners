User.destroy_all
Item.destroy_all
Cart.destroy_all

puts "seeding"

u1 = User.create(first_name: "Robbin", last_name: "Miller", email: "robby@gmail.com", phone_number: "347-123-1234", street: "123 Crown St", city: "Brooklyn", state: "NY", zip:11213 , username: "RobTheGuy", password: "1234")
u2 = User.create(first_name: "Tiffany", last_name: "Tam", email: "tiff@gmail.com", phone_number:"347-321-4321", street: "456 Union St", city: "New York", state: "NY", zip:12345 , username: "tamtamslam", password: "4321")
u3 = User.create(first_name: "Elias", last_name: "Kapeluschnik", email: "elikape@gmail.com", phone_number:"347-419-1516", street: "558 Kingston Ave", city: "Brooklyn", state: "NY", zip:11203 , username: "elikape760", password: "5678")

i1 = Item.create(name: "Shirt", image: "http://www.fidicleaners.com/uploads/9/9/3/3/9933903/s812485884773593949_p9_i1_w225.jpeg", price:2.50, description: "Test description", quantity: 1)
i2 = Item.create(name: "Pants", image: "http://www.fidicleaners.com/uploads/9/9/3/3/9933903/s812485884773593949_p4_i1_w177.jpeg", price:8.00, description: "This is a descrition", quantity: 1)
i3 = Item.create(name: "Dress", image: "http://www.fidicleaners.com/uploads/9/9/3/3/9933903/s812485884773593949_p11_i1_w161.jpeg", price:16.00, description: "This is also a descrition", quantity: 1)
i3 = Item.create(name: "Jacket", image: "http://www.fidicleaners.com/uploads/9/9/3/3/9933903/s812485884773593949_p13_i1_w300.jpeg", price:12.00, description: "Professional wash and press", quantity: 1)
i3 = Item.create(name: "Skirt", image: "http://www.fidicleaners.com/uploads/9/9/3/3/9933903/s812485884773593949_p2_i1_w252.jpeg", price:8.00, description: "Professional wash and press", quantity: 1)

c1 = Cart.create(user_id: u2.id, item_id: i1.id) 

puts "done seeding"