StreamController = RouteController.extend({
    action: function () {
        this.render('Stream', {});
        
        $('#search').on('change', function (event) {
            var query = $(event.target).val()
            Router.go('/stream/' + query );
        });
        
        var user = Router.current().params.screen_name;
        Meteor.call('getSingleStream', user , function (error, response) {
            if (error) {
                console.log('Error in getSingleStream', error);
            };
            var statuses = response.result;
            // console.log('statuses', statuses);
            Session.set('user_stream', statuses);
        });
    }
});


// getFollowerStreamResultsFromApi('royal_arse');
// function getFollowerStreamResultsFromApi(screenName) {
//     Meteor.call('getFollowerStream', screenName, function (error, response) {
//         if (error) {
//             console.log('Error in fgetFollowerStreamResultsFromApi', error);
//         };
//         var statuses = response;
//         // console.log('statuses', statuses);
//         Session.set('stream', statuses);
//     });
// }