class CartsController < ApplicationController

    def index
        render json: Cart.all, include: [:item_id, :user_id], status: :ok
    end
end
