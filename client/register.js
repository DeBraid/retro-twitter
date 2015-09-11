Template.login.events({
  'click #signIn' : function() {
    console.log('sign in!');
    Meteor.loginWithTwitter();
  }
});

Template.user.events({
  'click #signOut' : function() {
    Meteor.logout();
  }
});

Meteor.call('searchTweets', 'meteorJS', function (error, response) {
	if (error) {
		console.log('Error in searchTweets client side', error);
	};
	var statuses = response.result.statuses;
	console.log('statuses', statuses);
	Session.set('tweets', statuses);
	// return response.result;
	// return response.result.statuses;
});

Template.user.helpers({
	searchedTweets: function () {
		return Session.get('tweets');
		// console.log('return value of searchedTweets in user.helers', data);
		// return data;
	}
});