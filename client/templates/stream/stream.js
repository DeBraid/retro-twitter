Template.user_stream.helpers({
	user_stream: function () {
		var data = Session.get('user_stream');
		// console.log('user_stream', data);
		return data;
	}
});

Template.Stream.helpers({
	searchType: function () {
		var routeName =  Router.current().route.getName();
		if (routeName == 'stream') {
			return 'users by @username'
		} else {
			return 'anything on Twitter'			
		}
	}
})



Template.follower_stream.helpers({
	follower_stream: function () {
		var data = Session.get('follower_stream');
		// console.log('user_stream', data);
		return data;
	}
});