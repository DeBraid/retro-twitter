/*****************************************************************************/
/* Server Only Methods */
/*****************************************************************************/
var TwitterApi = Meteor.npmRequire('twit');
var T = new TwitterApi({
    consumer_key: Meteor.settings.local_twitter.consumerKey,
    consumer_secret: Meteor.settings.local_twitter.secret,
    access_token: Meteor.settings.local_twitter.access_token,
    access_token_secret: Meteor.settings.local_twitter.access_token_secret,
});

Meteor.methods({
    'searchTweets': function getTweets(query) {
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
    },
    'getFollowerStream': function getFollowerStream(screenName) {
        var stream = [];
        var followers = Meteor.call('getFollowers', screenName );
        // return followers;
        console.log('followers', followers);
        followers.result.forEach(function (follower) {
            console.log('follower', follower);

            var timeline = Async.runSync(function (done) {
                T.get('statuses/user_timeline', 
                    { user_id: follower,   count: 10 },
                    function (err, data, response) {
                        done(null, data);
                    }
                );
            });
            stream.push(timeline.result);

        });
        console.log('stream', stream);
        return stream;
    },
    'getSingleStream': function getSingleStream(screenName) {
        var stream = Async.runSync(function (done) {
            T.get('statuses/user_timeline', 
                { screen_name: screenName,   count: 10 },
                function (err, data, response) {
                    done(null, data);
                }
            );
        });
        return stream;
    },
    'getFollowers': function getFollowers(screenName) {
        var followers = Async.runSync(function (done) {
            //  get the list of user id's that follow screenName
            T.get('followers/ids', 
                { screen_name: screenName,   count: 10 },
                function (err, data, response) {
                    done(null, data.ids);
                }
            );

        });
        return followers;
    }
});
