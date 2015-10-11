TeamsController = AppController.extend({
  waitOn: function() {
    return [this.subscribe('teams'),this.subscribe('usersall')];
  },
  data: {
    teams: Teams.find({})
  },
  onAfterAction: function () {
    Meta.setTitle('Teams');
  }
});

TeamsController.events({
  'click [data-action=doSomething]': function (event, template) {
    event.preventDefault();
  }
});
