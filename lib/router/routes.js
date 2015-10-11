Router.route('/', {
  name: 'home'
});

Router.route('/profile/:username', {
  name: 'profile',
  controller: 'ProfileController'
});

Router.route('/teams/:slug', {
  name: 'teams',
  controller: 'TeamsController'
});

Router.plugin('ensureSignedIn', {
  only: ['dashboard','profile']
});
