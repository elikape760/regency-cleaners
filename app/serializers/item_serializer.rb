class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :price, :description, :quantity
end
