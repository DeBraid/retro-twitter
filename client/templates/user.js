Template.user.events({
    'click #signOut': function () {
        Meteor.logout();
    },
});

// Template.user.helpers({
//     searchedTweets: function () {
//         return Session.get('statuses');
//     }
// });