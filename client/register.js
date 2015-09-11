// Meteor.startup(function() {

//   Accounts.loginServiceConfiguration.remove({
//     service : 'twitter'
//   });

//   Accounts.loginServiceConfiguration.insert({
//     service     : 'twitter',
//     consumerKey : Meteor.settings.twitterAuth.consumerKey,
//     secret      : Meteor.settings.twitterAuth.secret
//   });

// });

Template.login.events({
  'click #signIn' : function() {
    console.log('sign in!');
    Meteor.loginWithTwitter();
  }
});

Template.user.events({
  'click #signOut' : function() {
    Meteor.logout();
  }
});