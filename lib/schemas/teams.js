Team={};

Team.Member = new SimpleSchema({
    id: {
        type: String
    },
    status: {
        type: String
    }
});

Team.Team = new SimpleSchema({
    name: {
        type: String
    },
    description: {
        type: String,
        optional: true
    },
    members: {
        type: [Team.Member],
        optional: true
    },
    keywords:{
        type:[String],
        optional:true,
	autoform: {
            type: "select2"
	}
    },
    createdAt: {
        type: Date,
        defaultValue: new Date(),
    }
});

Teams.attachSchema(Team.Team);
