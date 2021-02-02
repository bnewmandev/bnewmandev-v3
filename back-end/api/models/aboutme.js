const mongoose = require("mongoose");

const aboutmeSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	title: String,
	image: String,
	content: String,
	dateUpdated: Number,
});

module.exports = mongoose.model("Aboutme", aboutmeSchema);
