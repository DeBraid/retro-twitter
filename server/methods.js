/*****************************************************************************/
/* Server Only Methods */
/*****************************************************************************/
Meteor.methods({
    'searchTweets': function getTweets(query) {
        var TwitterApi = Meteor.npmRequire('twit');
        var T = new TwitterApi({
            consumer_key: Meteor.settings.local_twitter.consumerKey,
            consumer_secret: Meteor.settings.local_twitter.secret,
            access_token: Meteor.settings.local_twitter.access_token,
            access_token_secret: Meteor.settings.local_twitter.access_token_secret,
        });

        var tweets = Async.runSync(function (done) {
            T.get('search/tweets', {
                    q: ''+ query +' since:2011-11-11',
                    count: 10
                },
                function (err, data, response) {
                    done(null, data);
                }
            );
        });

        return tweets;
    }
});