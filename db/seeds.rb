User.destroy_all
Item.destroy_all
Cart.destroy_all

puts "seeding"

u1 = User.create(first_name: "Robbin", last_name: "Miller", email: "robby@gmail.com", phone_number: "347-123-1234", street: "123 Crown St", city: "Brooklyn", state: "NY", zip:11213 , username: "RobTheGuy", password: "1234")
u2 = User.create(first_name: "Tiffany", last_name: "Tam", email: "tiff@gmail.com", phone_number:"347-321-4321", street: "456 Union St", city: "New York", state: "NY", zip:12345 , username: "tamtamslam", password: "4321")
u3 = User.create(first_name: "Elias", last_name: "Kapeluschnik", email: "elikape@gmail.com", phone_number:"347-419-1516", street: "558 Kingston Ave", city: "Brooklyn", state: "NY", zip:11203 , username: "elikape760", password: "5678")

i1 = Item.create(name: "Shirt", image: "https://cdn-icons-png.flaticon.com/512/2503/2503376.png", price:2.50, description: "Test description", quantity: 1)
i1 = Item.create(name: "Blouse", image: "https://cdn-icons-png.flaticon.com/512/81/81424.png", price:2.50, description: "Test description", quantity: 1)
i2 = Item.create(name: "Pants", image: "https://cdn-icons-png.flaticon.com/512/862/862993.png", price:8.00, description: "This is a descrition", quantity: 1)
i3 = Item.create(name: "Dress", image: "https://cdn-icons.flaticon.com/png/512/2347/premium/2347025.png?token=exp=1643309770~hmac=76adf63fe141291c16d70f8e87e9ef0b", price:16.00, description: "This is also a descrition", quantity: 1)
i3 = Item.create(name: "Jacket", image: "https://cdn-icons.flaticon.com/png/512/2806/premium/2806119.png?token=exp=1643309724~hmac=90d0b77c6984da3c8e68498ba2f649ae", price:12.00, description: "Professional wash and press", quantity: 1)
i3 = Item.create(name: "Skirt", image: "https://cdn-icons.flaticon.com/png/512/2769/premium/2769795.png?token=exp=1643309390~hmac=bda6ba5e484ac9ccb779f8f0b751d955", price:8.00, description: "Professional wash and press", quantity: 1)

c1 = Cart.create(user_id: u2.id, item_id: i1.id) 

puts "done seeding"