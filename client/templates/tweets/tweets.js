Template.tweets.helpers({
    searchedTweets: function () {
    	var tweets = Session.get('statuses');
        return tweets;
    }
});

Template.tweet_list.helpers({
	removeLinks: function (tweet) {
		return removeURLs(tweet);
		
		function removeURLs(text) {
		    var urlRegexHTTP = /(http?:\/\/[^\s]+)/g;
		    var urlRegexHTTPS = /(https?:\/\/[^\s]+)/g;
		    
		    var text2 = text.replace(urlRegexHTTPS, '')

		    return text2.replace(urlRegexHTTP, '');
		}
	},
	formatDate: function (tdate) {
		var system_date = new Date(Date.parse(tdate));
		var user_date = new Date();
		var diff = Math.floor((user_date - system_date) / 1000);
		if (diff < 45) { return diff + " seconds ago"; }
		if (diff <= 90) { return "1 minute ago"; }
		if (diff <= 3540) { return Math.round(diff / 60) + " minutes ago"; }
		if (diff <= 5400) { return "1 hour ago"; }
		if (diff <= 86400) { return Math.round(diff / 3600) + " hours ago"; }
		if (diff <= 129600) { return "1 day ago"; }
		if (diff < 604800) { return Math.round(diff / 86400) + " days ago"; }
		if (diff <= 777600) { return "1 week ago"; }
		return "on " + system_date;
    } 
});