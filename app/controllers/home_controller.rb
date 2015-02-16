class HomeController < ApplicationController
	before_action :logged_in_user, only: [:index]
	include HomeHelper

	def index
		# if params[:q] != nil
		# 	get_weather(params[:q])
		# end
	end

end