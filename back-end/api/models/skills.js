const mongoose = require("mongoose");

const skillsSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	title: String,
	image: String,
	summary: String,
	dateCreated: Number,
	dateUpdated: Number,
});

module.exports = mongoose.model("Skills", skillsSchema);
