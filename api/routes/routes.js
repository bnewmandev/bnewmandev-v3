const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const router = express.Router();

require("dotenv").config();

router.get("/ping", (req, res) => {
	res.status(400).json({
		msg: "Pong!",
	});
});

router.post(
	"/signup",
	passport.authenticate("signup", { session: false }),
	async (req, res, next) => {
		res.json({
			message: "Signup Successful",
			user: req.user,
		});
	}
);

router.post("/login", async (req, res, next) => {
	passport.authenticate("login", async (req, res, next) => {
		try {
			if (err || !user) {
				const error = new Error("An Error Occurred");
				return next(error);
			}

			req.login(user, { session: false }, async (error) => {
				if (error) return next(error);
				const body = { _id: user._id, username: user.username };
				const token = jwt.sign({ user: body }, process.env.SECRET_KEY);
				return res.json({ token });
			});
		} catch (error) {
			return next(error);
		}
	})(req, res, next);
});

module.exports = router;
