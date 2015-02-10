class SessionsController < ApplicationController

	def new

	end

	def create
		user = User.find_by(email: params[:session][:email].downcase)
		if user && user.authenticate(params[:session][:password])
			# set a cookie/store a session
			session[:user_id] = user_id
			log_in user
			redirect_to user_path(user), :notice => "Welcome, #{current_user.name}, you are logged in."
		else
			flash[:danger] = "Invalid email and/or password. Please try again."
			redirect_to root_path
		end

	end

	def destroy
		log_out if logged_in?
		redirect_to root_path
	end

end