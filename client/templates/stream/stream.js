Template.user_stream.helpers({
	user_stream: function () {
		var data = Session.get('user_stream');
		// console.log('user_stream', data);
		return data;
	}
});



Template.follower_stream.helpers({
	follower_stream: function () {
		var data = Session.get('follower_stream');
		// console.log('user_stream', data);
		return data;
	}
});