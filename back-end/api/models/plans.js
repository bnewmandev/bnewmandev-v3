const mongoose = require("mongoose");

const plansSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	title: String,
	image: String,
	content: String,
	dateCreated: Number,
	dateUpdated: Number,
});

module.exports = mongoose.model("Plans", plansSchema);
