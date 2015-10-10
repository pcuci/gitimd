Accounts.onCreateUser(function(options, user) {
    var username;

    if (options.profile) {
	user.profile = options.profile;
    } else {
	user.profile={};
    };

    //make uniq username
    if ((!username) && user.emails) {
	username=user.emails[0].address;
    };

    if (username.indexOf('@')>0)
	username=username.substring(0,username.indexOf('@'));
    var c=1;
    while (Meteor.users.findOne({username:username})) {
	username=username+c;
	c++;
    }; 

    user.username=username;

    return user;

});
