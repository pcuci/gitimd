Template.home.rendered = function() {

};


Template.locateEvent.helpers({
    membersCount: function () {
        return _.filter(Teams.findOne().members, function (el) {if (el.status!='applied') return true;}).length;
    },
    watchersCount: function () {
        return _.filter(Teams.findOne().members, function (el) {if (el.status==='applied') return true;}).length;
    },
});
