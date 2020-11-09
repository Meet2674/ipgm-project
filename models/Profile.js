const mongoose = require('mongoose')

const Profile = new mongoose.Schema({
	firstName: {type:String, trim:true, default:''},
	lastName: {type:String, trim:true, default:''},
	age: {type:Number, default:0},
	email: {type:String, default:''},
    img: {type:String, trim:true, default:''},
    role: {type:String, trim:true, default:'user'},
		password: {type:String}
})

module.exports = mongoose.model('Profile', Profile)
