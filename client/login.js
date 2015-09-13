Template.twitter_auth.events({
    'click #signIn': function () {
        Meteor.loginWithTwitter();
    },
    'click #signOut': function () {
        Meteor.logout(function(err) {
	  		Router.go('home');
		});
    }
});