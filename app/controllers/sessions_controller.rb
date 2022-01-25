class SessionsController < ApplicationController
    skip_before_action :authenticate_user, only: [:create, :admin, :destroy]

    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
          session[:user_id] = user.id
          render json: user, status: :created
        else
          render json: { error: "Invalid username or password" }, status: :unauthorized
        end
      end

      def admin 
        if params[:password] == "admin"
          session[:admin] = true
          render json: {message: "You're the Admin"}, status: :ok
        else
          render json: {message: "Error invalid password"}, status: :unauthorized
        end
      end

      def destroy 
        session.delete :user_id
        session.delete :admin
        head :no_content
    end
    
end
