Keywords = new Mongo.Collection('keywords');

Keywords.helpers({

});

Keywords.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});
