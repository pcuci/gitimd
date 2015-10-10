Teamroles = new Mongo.Collection('teamroles');

Teamroles.helpers({

});

Teamroles.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});
