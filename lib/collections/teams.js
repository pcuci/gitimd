Teams = new Mongo.Collection('teams');

Teams.helpers({

});

Teams.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});
