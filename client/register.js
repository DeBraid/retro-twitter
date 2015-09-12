Template.login.events({
    'click #signIn': function () {
        Meteor.loginWithTwitter();
    }
});

Template.register.events({
    'click #search': function (e, t) {
        search(e);
    },
    'keypress #search': function (e, t) {
		var q = $(e.target).val();
	    if ( (e.which === 13) || (q.length > 2) ) {
	        search(e);
	    }
    }
});

getSearchResultsFromApi('#hamont');

function search (e) {
	var q = $(e.target).val();
    getSearchResultsFromApi(q);
}

function getSearchResultsFromApi(query) {
    Meteor.call('searchTweets', query, function (error, response) {
        if (error) {
            console.log('Error in searchTweets client side', error);
        };
        var statuses = response.result.statuses;
        Session.set('statuses', statuses);
    });
}

