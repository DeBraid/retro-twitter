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


Template.user.helpers({
	searchedTweets: function () {
		var data;
		Meteor.call('searchTweets', 'meteorJS', function (error, response, baz) {
			if (error) {
				console.log('Error in searchTweets client side', error);
			};
			console.log('response in .rendered', response.result);
			data = response.result;
		});
		return data;
	}
});