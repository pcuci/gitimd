Meteor.publish(null, function () {
    if (this.userId) {
        return Meteor.users.find({_id:this.userId},{fields:{roles:1, services:1,
                                                            emails:1, profile:1,
                                                            username:1, keywords:1,
                                                            createdAt:1
                                                           }});
    };
});

Meteor.publish('usersall', function () {
    if (this.userId) {
        return Meteor.users.find({},{fields:{profile:1,username:1, keywords:1}});
    };
});
