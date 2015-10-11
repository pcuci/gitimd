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
    users: function () {
	return Meteor.users.find();
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
    }    
});
 
Template.teams.events({
    'click .join': function () {
    }
});
