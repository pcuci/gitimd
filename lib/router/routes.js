Router.route('/', {
  name: 'home'
});

Router.route('/profile', {
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
