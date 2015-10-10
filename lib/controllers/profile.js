ProfileController = AppController.extend({
  waitOn: function() {
//    return this.subscribe('teams');
  },
  data: {
//    items: Teams.find({})
  },
  onAfterAction: function () {
    Meta.setTitle('Profile');
  }
});

ProfileController.events({
  'click [data-action=doSomething]': function (event, template) {
    event.preventDefault();
  }
});
