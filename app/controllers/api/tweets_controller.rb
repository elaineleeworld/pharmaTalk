module API 
	class TweetsController < ApplicationController

		protect_from_forgery with: :null_session

		def index
			# if q not specified make it default to 'biotech'
			# if count not specified make it default to '10'
			require "twitter"
			client = Twitter::REST::Client.new do |config|
			  config.consumer_key        = ENV['TWITTER_CONSUMER_KEY']
			  config.consumer_secret     = ENV['TWITTER_CONSUMER_SECRET']
			  config.access_token        = ENV['TWITTER_ACCESS_TOKEN']
			  config.access_token_secret = ENV['TWITTER_ACCESS_TOKEN_SECRET']
			end

			# @tweets = client.user_timeline( count: 2)
			# @tweetSearch = client.search('#pharmaceutical -rt').first.text
				# array_of_tweets = []
			@tweets = client.search(params[:q], :result_type => 'popular', lang: "en").take(params[:count].to_i)

			# .each do |tweet|
			# 	array_of_tweets << tweet.text
			# end
			render json: @tweets
			# topics = ["coffee", "tea"]
			# client.filter(track: topics.join(",")) do |object|
			# puts object.text if object.is_a?(Twitter::Tweet)
		end
	end
end
