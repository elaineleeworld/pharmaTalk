angular
	.module("pharmatalkapp")
	.factory("TweetsFactory", TweetsFactory);

TweetsFactory.$inject = ['Resources', '$http'];


	function TweetsFactory(Resources, $http){
		var self = this;

	
		function getTweetResults(searchWord) {

			// var API_KEY = 'Wfz570E9vjJXT5SGOM1RQ3Sgx';
			// var url = 'http://search.twitter.com/search.json' + 
			// 			'?&rpp=100&include_entities=true&result_type=recent' + 
			// 			'&callback=JSON_CALLBACK';

			var url = 'https://api.twitter.com/1.1/search/tweets.json?q=' + searchWord + '&result_type=recent&count=6&api_key=#{ENV['twitter_api_key']}';
			$http
				.get(url)
				.success(function(data, status, headers, config) {
					self.tweet = data;
				})
		}

		function doSearch(){
			self.twitterResult = self.twitter.get({self.searchWord});
		}


	}