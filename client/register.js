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