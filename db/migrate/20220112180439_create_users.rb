class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :phone_number
      t.string :email
      t.string :street
      t.string :city
      t.string :state
      t.integer :zip
      t.string :username
      t.string :password

      t.timestamps
    end
  end
end
