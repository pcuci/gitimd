HomeController = AppController.extend({
  waitOn: function() {
    return [this.subscribe('teams'),this.subscribe('usersall')];
  },
  data: {
//    teams: Teams.find({})
  },
  onAfterAction: function () {
    Meta.setTitle('Home');
  }
});
