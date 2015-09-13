StreamController = RouteController.extend({
    action: function () {
        this.render('Stream', {});
        // getFollowerStreamResultsFromApi('royal_arse');
        getSingleStreamResultsFromApi('royal_arse');
        
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

        function getSingleStreamResultsFromApi(screenName) {
            Meteor.call('getSingleStream', screenName, function (error, response) {
                if (error) {
                    console.log('Error in fgetFollowerStreamResultsFromApi', error);
                };
                var statuses = response.result;
                console.log('statuses', statuses);
                Session.set('stream', statuses);
            });
        }

    }
});