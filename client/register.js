Template.login.events({
  'click #signIn' : function() {
    console.log('sign in!');
    Meteor.loginWithTwitter();
  }
});

Template.user.events({
  'click #signOut' : function() {
    Meteor.logout();
  },
});

Template.register.events({
  'click #search': function (e,t) {
	var q = $(e.target).val();
	console.log('searching w/ q', q);
	search(q);
  },
   'keypress #search': function (e, t) {
    if (e.which === 13) {
      var q = $(e.target).val();
	console.log('searching w/ q', q);
	search(q);
    }
  }
});


search('#hamont');

function search (query) {
	Meteor.call('searchTweets', query, function (error, response) {
		if (error) {
			console.log('Error in searchTweets client side', error);
		};
		var statuses = response.result.statuses;
		console.log(statuses);
		Session.set('statuses', statuses);
	});

}

Template.user.helpers({
	searchedTweets: function () {
		return Session.get('statuses');
	}
});