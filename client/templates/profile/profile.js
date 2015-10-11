Template.profile.rendered = function() {
    $('[name=keywords]').select2({
        tags: true,
        tokenSeparators: [",", " "],
    });
};

AutoForm.addHooks(['editUserProfile'],{
    onSuccess: function () {
        Meteor.setTimeout(function (){
            $('[name=keywords]').select2({
                tags: true,
                tokenSeparators: [",", " "],
            });
        },500);
    }
});

Template.profile.helpers({
    usersCollection: Meteor.users,
    currentUser: function () {
	if (Router.current().params.username) {
	    return Meteor.users.findOne({username:Router.current().params.username});
	} else {
	    return Meteor.users.findOne({username:Meteor.user().username});
	};
    },
    s2Opts: function () {
        var arr=[];

	if (Router.current().params.username) {
            var res=Meteor.users.findOne({username:Router.current().params.username});
	} else {
	    var res=Meteor.users.findOne({username:Meteor.user().username});
	};

        if (res && res.keywords)
            res.keywords.forEach(function (el) {
		var obj={label: el, value: el};
		arr.push(obj);
            });
	return arr;
    },
    membersCount: function () {
	return _.filter(Teams.findOne().members, function (el) {if (el.status!='applied') return true;}).length;
    },
    watchersCount: function () {
	return _.filter(Teams.findOne().members, function (el) {if (el.status==='applied') return true;}).length;
    },
    ifOwner: function () {
	if (Router.current().params.username)
	    return Meteor.user().username === Router.current().params.username;
	return true;
    }
});
 
Template.profile.events({
    'click .addTeam': function () {
	//create team
	var name=$('.newTeamName').val();
	if (name && (name.length>0)) {
	    Teams.insert({name:name, members:[{id:Meteor.userId(),status:'creator'}],description:'what this team is going to achieve?'}, function (e,r){
		if (!e)
		    //route to team edit
		    Router.go('/teams/'+r);
	    });
	} else {
	    $(".err").text("New team name can't be empty!");
	};
    }
});
