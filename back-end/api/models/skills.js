const mongoose = require("mongoose");

const skillsSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	title: String,
	image: String,
	summary: String,
	dateCreated: Number,
	dateUpdated: Number,
	detail: [
		{
			id: mongoose.Schema.Types.ObjectId,
			title: String,
			body: String,
		},
	],
});

module.exports = mongoose.model("Skills", skillsSchema);
