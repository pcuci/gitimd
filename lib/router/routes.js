Router.route('/', {
  name: 'home'
});

Router.route('/dashboard', {
  name: 'dashboard',
  controller: 'DashboardController'
});

Router.route('/profile', {
  name: 'profile',
  controller: 'ProfileController'
});

Router.plugin('ensureSignedIn', {
  only: ['dashboard','profile']
});
