const router = require("express").Router();
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { registerValidation, loginValidation } = require("../validation");

router.post("/register", async (req, res) => {
	const enabled = false;

	if (!enabled) {
		return res.status(403).send(`<h1>ERROR 403 - FORBIDDEN</h1>`);
	}

	const { error } = registerValidation(req.body);

	if (error) {
		return res.status(400).json({ error: error.details[0].message });
	}

	const userExist = await User.findOne({ username: req.body.username });

	if (userExist) {
		return res.status(400).json({ error: "Username is taken" });
	}

	const salt = await bcrypt.genSalt(10);
	const password = await bcrypt.hash(req.body.password, salt);

	const user = new User({
		username: req.body.username,
		password: password,
		perms: ["NULL"],
	});

	try {
		const savedUser = await user.save();
		res.status(201).json({ error: null, message: "User Successfully Created" });
	} catch (error) {
		res.status(400).json({ error: "Something went wrong" });
		console.error(error);
	}
});

router.post("/login", async (req, res) => {
	const { error } = loginValidation(req.body);
	if (error) return res.status(400).json({ error: error.details[0].message });
	const user = await User.findOne({ username: req.body.username });
	if (!user)
		return res.status(400).json({ error: "Email or Password is incorrect" });
	const validPassword = await bcrypt.compare(req.body.password, user.password);
	if (!validPassword)
		return res.status(400).json({ error: "Email or Password is incorrect" });

	const token = jwt.sign(
		{
			username: user.username,
			id: user._id,
			perms: user.perms,
		},
		process.env.JWT_SECRET
	);
	req.session.user = token;
	req.session.cookie.maxAge = 3600000;
	res
		.status(200)
		.header("auth-token", token)
		.json({
			error: "null",
			data: {
				msg: "Login Successfull",
			},
		});
});

module.exports = router;
