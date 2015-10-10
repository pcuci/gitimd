User={};

User.UserProfile = new SimpleSchema({
    bio:{
        type:String,
        optional:true
    },
    firstName: {
        type: String,
        regEx: /^[a-zA-Z]{2,25}$/,
        optional: true
    },
    lastName: {
        type: String,
        regEx: /^[a-zA-Z]{2,25}$/,
        optional: true
    },
    birthday: {
        type: Date,
        optional: true
    },
    gender: {
        type: String,
        allowedValues: ['male', 'female'],
        optional: true
    },
    websites: {
        type: [String],
        regEx: SimpleSchema.RegEx.Url,
        optional: true
    }
});
 
User.User = new SimpleSchema({
    username: {
        type: String,
        optional: true
    },
    emails: {
        type: [Object],
        optional: true
    },
    "emails.$.address": {
        type: String,
        regEx: SimpleSchema.RegEx.Email,
        optional: true
    },
    "emails.$.verified": {
        type: Boolean,
        optional: true
    },
    registered_emails: {
        type: [Object],
        optional: true,
        blackbox: true
    },
    createdAt: {
        type: Date,
        defaultValue: new Date(),
        optional: true
    },
    profile: {
        type: User.UserProfile,
        optional: true
    },
    services: {
        type: Object,
        optional: true,
        blackbox: true
    },
    roles: {
        type: Object,
        optional: true,
        blackbox: true
    },
    keywords:{
        type:[String],
        optional:true,
	autoform: {
            type: "select2"
	}
    }
});

Meteor.users.attachSchema(User.User);
