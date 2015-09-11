Meteor.startup(function() {

  Accounts.loginServiceConfiguration.remove({
    service : 'twitter'
  });

  Accounts.loginServiceConfiguration.insert({
    service     : 'twitter',
    consumerKey : Meteor.settings.twitterAuth.consumerKey,
    secret      : Meteor.settings.twitterAuth.secret
  });

});