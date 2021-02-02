const mongoose = require("mongoose");

const projectsSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	title: String,
	image: String,
	summary: String,
	dateCreated: Number,
	dateUpdated: Number,
	updates: [
		{
			_id: mongoose.Schema.Types.ObjectId,
			title: String,
			content: String,
			dateCreated: Number,
			dateUpdated: Number,
		},
	],
});

module.exports = mongoose.model("Projects", projectsSchema);
