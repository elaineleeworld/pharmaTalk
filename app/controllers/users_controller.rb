class UsersController < ApplicationController

      def index
        @users = User.all
      end

      def new
        @user = User.new
      #   if logged_in?
      #     redirect_to user_path
      end

      def show
        @user = User.find(params[:id])
      end

      def create
        @user = User.new(user_params)
        if @user.save
          log_in @user
          redirect_to user_path
        end
      end

      def destroy
      end

      private

        def user_params
          params.require(:user).permit(:name, :email, :password, :password_confirmation)
        end

   
end
