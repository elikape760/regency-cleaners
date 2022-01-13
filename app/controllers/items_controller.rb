class ItemsController < ApplicationController
    before_action :find_item, only: [:show]
    skip_before_action :authenticate_user, only: [:index, :show]

    def index
        render json: Item.all, status: :ok
    end

    def show
        render json: @item, status: :ok
    end

    private

        def find_item
            @item = Item.find(params[:id])
        end

end
