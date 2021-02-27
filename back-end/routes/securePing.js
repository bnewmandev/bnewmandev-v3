const { expression } = require("@hapi/joi");

const router = require("express").Router();
router.get("/", (req, res) => {
	res.json({
		error: null,
		data: {
			msg: "ACCESS GRANTED",
		},
		user: req.user,
	});
});
module.exports = router;
