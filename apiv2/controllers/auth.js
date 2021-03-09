const db = require("../models/index");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const uuid = require("uuid");

exports.signup = (req, res) => {
	db.user
		.create({
			id: uuid.v4(),
			username: req.body.username,
			password: bcrypt.hashSync(req.body.password, 10),
		})
		.then(() => {
			res.status(201).json({
				msg: "User registered successfully",
			});
		});
};

exports.signin = (req, res) => {
	db.user
		.findOne({
			where: {
				username: req.body.username,
			},
		})
		.then((user) => {
			if (!user) {
				return res.status(404).send({ msg: "User Not found." });
			}
			const isPassValid = bcrypt.compareSync(req.body.password, user.password);
			if (!isPassValid) {
				return res.status(401).send({
					accessToken: null,
					msg: "Invalid Password!",
				});
			}

			var token = jwt.sign(
				{ id: user.id, perms: user.permissions },
				process.env.JWT_TOKEN,
				{
					expiresIn: 86400,
				}
			);
			res.append("auth-token", token);
			res.status(200).send({
				id: user.id,
				username: user.username,
				accessToken: token,
			});
		});
};
