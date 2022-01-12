class User < ApplicationRecord
    has_many :carts, dependent: :nullify
    has_many :items, through: :carts
    
    has_secure_password


    validates :username, presence: true, uniqueness: true
    validates :first_name, presence: true, uniqueness: true
    validates :last_name, presence: true, uniqueness: true
    validates :email, format: /\w+@\w+\.{1}[a-zA-Z]{2,}/, presence: true, uniqueness: true
end
