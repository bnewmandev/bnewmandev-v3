const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
	res.status(200).json({
		message: "Handling GET requests to /aboutme",
	});
});

router.patch("/", (req, res, next) => {
	res.status(200).json({
		message: "Handling PATCH requests to /aboutme",
	});
});

module.exports = router;
