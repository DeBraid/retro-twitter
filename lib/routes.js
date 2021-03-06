Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  action: 'action',
  where: 'client'
});


Router.route('stream/:screen_name', {
  name: 'stream',
  controller: 'StreamController',
  action: 'action',
  where: 'client'
});

Router.route('search/', {
  name: 'search',
  controller: 'SearchController',
  action: 'action',
  where: 'client'
});