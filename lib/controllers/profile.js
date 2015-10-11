ProfileController = AppController.extend({
  onAfterAction: function () {
    Meta.setTitle('Profile');
  }
});

ProfileController.events({
  'click [data-action=doSomething]': function (event, template) {
    event.preventDefault();
  }
});
