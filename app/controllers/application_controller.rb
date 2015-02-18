class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :null_session

  include SessionsHelper
  include HomeHelper
  
  # removes globally the root
  def default_serializer_options
     { root: false }
  end

  private
  	def logged_in_user
  		unless logged_in?
  			redirect_to root_path
  		end
  	end
end
