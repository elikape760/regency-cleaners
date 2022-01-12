class UsersController < ApplicationController
    skip_before_action :authenticate_user, only: [:create,:index]

    def index 
      render json: User.all, status: :ok 
    end  
    
    def show 
      user = User.find_by(id: session[:user_id])
      if user 
        render json:user, status: :ok 
      else 
        render json: { error: "Not authorized"}, status: :unauthorized 
    end 

    def create
        user = User.create(
          username: params[:username],
          email: params[:email],
          password: params[:password],
          password_confirmation: params[:password_confirmation])
            # session[:user_id] = user.id
            render json: user, status: :created
        end
    end

end