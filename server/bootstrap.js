Meteor.startup(function() {
	ServiceConfiguration.configurations.upsert(
	  { service: "twitter" },
	  {
	    $set: {
	      	consumerKey : Meteor.settings.local_twitter.consumerKey,
	    	secret      : Meteor.settings.local_twitter.secret
	    }
	  }
	);
});
