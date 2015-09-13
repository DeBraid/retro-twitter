HomeController = RouteController.extend({
    layoutTemplate: 'MasterLayout',
    action: function () {
        this.render('Home');

        var currentUser = Meteor.user();
        if (currentUser) {
            var name = currentUser.profile.name.replace(' ', '_');
            // console.log('name', name);
            Router.go('/stream/' + name);
        };

    }
});