const mongoose = require('mongoose')

const Login = new mongoose.Schema({
	profileId:[
        {type: mongoose.Schema.Types.ObjectId, ref: 'Profile'}
    ],
    password: {type:String}
})

module.exports = mongoose.model('Login', Login)
