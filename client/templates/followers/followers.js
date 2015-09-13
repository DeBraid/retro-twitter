Template.followers.helpers({
	followerList: function () {
		var data = Session.get('followerList');
		console.log('followers', data);
		return data;
	}
});

getFollowersResultsFromApi('royal_arse');

function getFollowersResultsFromApi(screenName) {
    Meteor.call('getFollowers', screenName, function (error, response) {
        if (error) {
            console.log('Error in followersTweets', error);
        };
        var statuses = response.result;
        // console.log('statuses', statuses);
        Session.set('followerList', statuses);
    });
}