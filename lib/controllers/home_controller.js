HomeController = RouteController.extend({
  layoutTemplate: 'MasterLayout',

  subscriptions: function() {
  },

  action: function() {
    this.render('Home');

    var currentUser = Meteor.user();
	var name = currentUser.profile.name.replace(' ', '_');
	// var input = $('input#seach').val();
	
	if (currentUser) {
		Router.go('/stream/' + name);
	};
    
  }
});
