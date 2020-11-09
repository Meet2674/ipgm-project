const mongoose = require('mongoose');

const Subscription = new mongoose.Schema({
    profileId:[
        {type: Schema.Types.ObjectId, ref: 'Profile'}
    ],
    start: {
		type: Date,
		default: () => new Date()
	},
	end: {
		type: Date,
		default: () => new Date(+new Date() + 28*24*60*60*1000)
	},

})

module.exports = mongoose.model('Subscription', Subscription)
