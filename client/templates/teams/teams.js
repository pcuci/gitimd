Template.teams.rendered = function() {
    $('[name=keywords]').select2({
        tags: true,
        tokenSeparators: [",", " "],
    });
};

AutoForm.addHooks(['editTeam'],{
    onSuccess: function () {
        Meteor.setTimeout(function (){
            $('[name=keywords]').select2({
                tags: true,
                tokenSeparators: [",", " "],
            });
        },500);
    }
});

Template.teams.helpers({
    usersMembers: function () {
	var arr=Teams.findOne({_id:Router.current().params.slug});
	if (arr && arr.members && (arr.members.length>0)) {
	    arr=arr.members.map(function (el) {if (el.status!='applied') return el.id});
	} else {
	    arr=[];
	};
	return Meteor.users.find({_id: {$in:arr}});
    },
    usersWatchers: function () {
	var arr=Teams.findOne({_id:Router.current().params.slug});
	if (arr && arr.members && (arr.members.length>0)) {
	    arr=arr.members.map(function (el) {if (el.status==='applied') return el.id});
	} else {
	    arr=[];
	};
	return Meteor.users.find({_id: {$in:arr}});
    },
    usersAll: function () {
	var arr=Teams.findOne({_id:Router.current().params.slug});
	if (arr && arr.members && (arr.members.length>0)) {
	    arr=arr.members.map(function (el) {return el.id});
	} else {
	    arr=[];
	};
	return Meteor.users.find({_id: {$nin:arr}});
    },
    currentTeam: function () {
	return Teams.findOne({_id: Router.current().params.slug});
    },
    s2Opts: function () {
        var arr=[];
	var res=Teams.findOne({_id: Router.current().params.slug});
	if (res && res.keywords)
            res.keywords.forEach(function (el) {
		var obj={label: el, value: el};
		arr.push(obj);
            });
	return arr;
    },
    memberOf: function () {
	return Teams.find({'members.id':this._id});
    },
    currentTeam: function () {
	return Teams.findOne({_id: Router.current().params.slug});
    },
    mayEdit: function () {
	return Teams.findOne({_id:Router.current().params.slug, 'members.id':Meteor.userId()});
    }
});
 
Template.teams.events({
    'click .joinTeam': function () {
	Teams.update({_id:Router.current().params.slug},{$addToSet: {members:{id:Meteor.userId(), status:'applied'}}});
    }
});
