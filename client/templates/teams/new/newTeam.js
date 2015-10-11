Template.newTeam.rendered = function() {
  $('[name=keywords]').select2({
    tags: true,
    tokenSeparators: [",", " "],
  });
};

AutoForm.addHooks(
  ['newTeam'],
  {
    onSuccess: function () {
      Meteor.setTimeout(function (){
        $('[name=keywords]').select2({
          tags: true,
          tokenSeparators: [",", " "],
        });
      }, 500);
      Router.go("/")
    }
  }
);

Template.teams.helpers({
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
