Meteor.publishComposite("teams", function() {
  return {
    find: function() {
      return Teams.find({});
    }
    // ,
    // children: [
    //   {
    //     find: function(item) {
    //       return [];
    //     }
    //   }
    // ]
  }
});
