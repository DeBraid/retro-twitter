Template.twitter_auth.events({
    'click #signIn': function () {
        Meteor.loginWithTwitter(function loginWithTwitter () {
        	var currentUser = Meteor.user();
	        if (currentUser) {
	            var name = currentUser.profile.name.replace(' ', '_');
	            console.log('go to profile name', name);
	            Router.go('stream', { screen_name: name } );
	        };
        });
    },
    'click #signOut': function () {
        Meteor.logout(function(err) {
	  		Router.go('home');
		});
    }
});