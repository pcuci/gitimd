Template._footer.events({
    'click #profileBtn': function () {
        AntiModals.overlay('profileModal');
    },
    'click #createBtn': function () {
        AntiModals.overlay('teamsModal');
    }
});