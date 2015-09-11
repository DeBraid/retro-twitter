Template.login.events({
  'click #signIn' : function() {
    console.log('sign in!');
    Meteor.loginWithTwitter();
  }
});

Template.user.rendered = function () {
  console.log(Meteor.user())
};
Template.user.events({
  'click #signOut' : function() {
    Meteor.logout();
  }
});