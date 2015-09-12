Template.tweets.helpers({
    searchedTweets: function () {
        return Session.get('statuses');
    }
});

/*****************************************************************************/
/* Tweets: Event Handlers */
/*****************************************************************************/
Template.Tweets.events({
});

/*****************************************************************************/
/* Tweets: Helpers */
/*****************************************************************************/
Template.Tweets.helpers({
});

/*****************************************************************************/
/* Tweets: Lifecycle Hooks */
/*****************************************************************************/
Template.Tweets.created = function () {
};

Template.Tweets.rendered = function () {
};

Template.Tweets.destroyed = function () {
};
