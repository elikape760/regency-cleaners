class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :price, :quantity
end
