const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
	res.status(200).json({
		message: "Handling GET requests to /tolearn",
	});
});

router.post("/", (req, res, next) => {
	res.status(201).json({
		message: "Handling POST requests to /tolearn",
	});
});

router.get("/:rawId", (req, res, next) => {
	const id = req.params.rawId;
	res.status(200).json({
		message: "Handling GET requests to /tolearn/{id}",
	});
});

router.patch("/:rawId", (req, res, next) => {
	const id = req.params.rawId;
	res.status(200).json({
		message: "Handling PATCH requests to /tolearn/{id}",
	});
});

router.delete("/:rawId", (req, res, next) => {
	const id = req.params.rawId;
	res.status(200).json({
		message: "Handling DELETE requests to /tolearn/{id}",
	});
});

module.exports = router;
