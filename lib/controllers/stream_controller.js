StreamController = RouteController.extend({
    action: function () {
        var vm = this;
        vm.render('Stream', {});
        
        $('#search').on('change', function (event) {
            var user = $(event.target).val();
            Router.go('stream', { screen_name : user });
        });
        
        var user = vm.getParams().screen_name;
        Meteor.call('getSingleStream', user , function (error, response) {
            if (error) {
                console.log('Error in getSingleStream', error);
            };
            var tweets = response.result;
            Session.set('user_stream', tweets);
        });
    }
});


getFollowerStreamResultsFromApi('royal_arse');
function getFollowerStreamResultsFromApi(screenName) {
    Meteor.call('getFollowerStream', screenName, function (error, response) {
        if (error) {
            console.log('Error in getFollowerStreamResultsFromApi', error);
        };
        var follower_stream = response;
        console.log('follower_stream', follower_stream);
        Session.set('follower_stream', follower_stream);
    });
}