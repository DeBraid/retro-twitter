StreamController = RouteController.extend({
    action: function () {
        this.render('Stream', {});
        // getFollowerStreamResultsFromApi('royal_arse');
        var screen_name = Router.current().params.screen_name;
        getSingleStreamResultsFromApi( screen_name );
        
        function getFollowerStreamResultsFromApi(screenName) {
            Meteor.call('getFollowerStream', screenName, function (error, response) {
                if (error) {
                    console.log('Error in fgetFollowerStreamResultsFromApi', error);
                };
                var statuses = response;
                // console.log('statuses', statuses);
                Session.set('stream', statuses);
            });
        }

        function getSingleStreamResultsFromApi(screenName) {
            Meteor.call('getSingleStream', screenName, function (error, response) {
                if (error) {
                    console.log('Error in getSingleStreamResultsFromApi', error);
                };
                var statuses = response.result;
                // console.log('statuses', statuses);
                Session.set('stream', statuses);
            });
        }

    }
});