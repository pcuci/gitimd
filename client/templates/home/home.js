Template.home.rendered = function() {

};


Template.locateEvent.helpers({
    teams: function () {
	return Teams.find();
    },
    membersCount: function () {
        return _.filter(Teams.findOne().members, function (el) {if (el.status!='applied') return true;}).length;
    },
    watchersCount: function () {
        return _.filter(Teams.findOne().members, function (el) {if (el.status==='applied') return true;}).length;
    },
});

Template.locateEvent.rendered=function (){
    Meteor.subscribe('teams');
};
