Template.followers.helpers({
	followerList: function () {
		var data = Session.get('followerList');
		console.log('followers', data);
		return data;
	}
});
// *************************** //

getFollowersResultsFromApi('royal_arse');
getFollowerStreamResultsFromApi('royal_arse');

function getFollowerStreamResultsFromApi(screenName) {
    Meteor.call('getFollowerStream', screenName, function (error, response) {
        if (error) {
            console.log('Error in fgetFollowerStreamResultsFromApi', error);
        };
        var statuses = response;
        console.log('statuses', statuses);
        Session.set('stream', statuses);
    });
}

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