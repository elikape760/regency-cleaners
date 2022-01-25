class ApplicationController < ActionController::API

  include ActionController::Cookies
  before_action :authenticate_user 

  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity


  def current_shopping_cart

      if authenticate_user?
          @cartlist = @current_user.cartlist
      else
          if session[:cartlist]
              @cartlist= Cartlist.find(session[:cartlist])
          else
          @cartlist = Cartlist.create
          session[:cartlist] = @cartlist.id
          end
      end
  end

  private

  def find_item
      @item = Item.find(params[:id])
  end

  def find_rating
      @rating = Rating.find(params[:id])
  end
   
  def authenticate_user
      @current_user = User.find_by(id: session[:user_id])
      render json: { error: "Not authorized" }, status: :unauthorized unless @current_user || session[:admin]
  end

  def render_unprocessable_entity
      render json: {error: "unprocessable entity"}, status: :unprocessable_entity
  end

  def render_not_found_response
      render json: { error: "not found" }, status: :not_found
  end
  
end
