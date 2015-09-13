HomeController = RouteController.extend({
    layoutTemplate: 'MasterLayout',
    action: function () {
        this.render('Home');
    }
});