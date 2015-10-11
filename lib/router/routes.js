Router.route('/', {
  name: 'home'
});

Router.route('/profile/', {
  name: 'profileEmpty',
  template: 'profile',
  controller: 'ProfileController'
});

Router.route('/profile/:username', {
  name: 'profile',
  template: 'profile',
  controller: 'ProfileController'
});

Router.route('/teams/:slug', {
  name: 'teams',
  controller: 'TeamsController'
});

Router.plugin('ensureSignedIn', {
  only: ['dashboard','profile']
});
