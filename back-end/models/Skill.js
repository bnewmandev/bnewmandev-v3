const mongoose = require("mongoose");
const SkillSchema = new mongoose.Schema({
	title: {
		type: String,
		unique: true,
		required: true,
	},
	image: {
		type: String,
		required: true,
	},
	tagline: {
		type: String,
		required: true,
	},
	created: {
		type: Number,
		required: true,
	},
});
const Skill = mongoose.model("Skill", SkillSchema);
module.exports = Skill;
