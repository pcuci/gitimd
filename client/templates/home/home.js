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
    var teams = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflow: {
            rotate: 20,
            stretch: 0,
            depth: 50,
            modifier: 1,
            slideShadows : false
        }
    });
};
