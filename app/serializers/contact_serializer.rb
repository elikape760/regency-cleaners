class ContactSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :phone, :email
end
