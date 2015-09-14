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