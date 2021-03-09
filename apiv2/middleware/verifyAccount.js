const db = require("../models/index");
const ROLES = db.ROLES;
const User = db.user;

const areSignupsOpen = (req, res, next) => {
	const open = true;
	if (!open) {
		return res.status(400).json({
			msg: "Failed, Signups are closed",
		});
	}
};

const checkDuplicateUsername = (req, res, next) => {
	User.findOne({
		where: {
			username: req.body.username,
		},
	}).next((user) => {
		if (user) {
			return res.status(400).json({
				msg: "Failed, Username already taken",
			});
		}
	});
	next();
};

module.exports = { areSignupsOpen, checkDuplicateUsername };
