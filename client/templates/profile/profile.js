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
	return Meteor.user();
    },
    s2Opts: function () {
        var arr=[];
        Meteor.user().keywords.forEach(function (el) {
            var obj={label: el, value: el};
            arr.push(obj);
        });
	return arr;
    }    

});
 
