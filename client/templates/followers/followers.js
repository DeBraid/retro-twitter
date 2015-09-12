/*****************************************************************************/
/* followers: Event Handlers */
/*****************************************************************************/
Template.followers.events({
    'click #followers': function (e, t) {
        followers(e);
    },
    'keypress #followers': function (e, t) {
		var q = $(e.target).val();
	    if ( (e.which === 13) || (q.length > 2) ) {
	        followers(e);
	    }
    }
});

Template.followers.helpers({
	followerList: function () {
		var data = Session.get('followerList');
		console.log('followerList data', data);
		return data;
	}
});

getFollowersResultsFromApi('royal_arse');

// function followers (e) {
// 	var q = $(e.target).val();
//     getFollowersResultsFromApi(q);
// }

function getFollowersResultsFromApi(screenName) {
    Meteor.call('getFollowers', screenName, function (error, response) {
        if (error) {
            console.log('Error in followersTweets client side', error);
        };
        var statuses = response.result;
        console.log('statuses', statuses);
        Session.set('followerList', statuses);
    });
}