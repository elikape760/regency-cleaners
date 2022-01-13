class UsersController < ApplicationController
    skip_before_action :authenticate_user, only: [:create,:index]

    def index 
      render json: User.all, status: :ok 
    end  
    
    def show 
      user = User.find_by(id: session[:user_id])
      if user 
        render json: user, status: :ok 
      else 
        render json: { error: "Not authorized"}, status: :unauthorized 
      end
    end 

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :ok
    end

    private

    def user_params
      params.permit(:first_name, :last_name, :street, :city, :state, :zip, :phone_number, :email, :username, :password, :password_confirmation)
    end
end