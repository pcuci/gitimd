Router.route('/', {
  name: 'home'
});

Router.route('/profile/', {
  name: 'profileEmpty',
  template: 'profile',
  controller: 'ProfileController',
  onBeforeAction: function() {
    AntiModals.overlay('profileModal');
  }
});

Router.route('/profile/:username', {
  name: 'profile',
  controller: 'ProfileController',
  onBeforeAction: function() {
    AntiModals.overlay('profileModal');
  }
});

Router.route('/teams/:slug', {
  name: 'teams',
  controller: 'TeamsController'
});

Router.plugin('ensureSignedIn', {
  only: ['dashboard','profile']
});
