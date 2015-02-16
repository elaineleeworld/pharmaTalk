module API 
	class TweetsController < ApplicationController

		protect_from_forgery with: :null_session

		def index
			render json: {tweets: "String"}
		end
	end
end
