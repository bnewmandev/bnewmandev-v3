const express = require("express");
const router = express.Router();

router.get("/permissions", (req, res, next) => {
	res.json({
		user: req.user,
	});
});

module.exports = router;
