const mongoose = require('mongoose')

const Articles = new mongoose.Schema({
	profileId:[
        {type: mongoose.Schema.Types.ObjectId, ref: 'Profile'}
    ],
  path: {type : String, trim: true, default: ""},
	title:{type : String, trim: true, default: ""},
	author:{type : String, trim: true, default: ""},
	category:{type : Number, default: ""},
	shortdesc:{type : String, trim: true, default: ""}
})

module.exports = mongoose.model('Articles', Articles)
