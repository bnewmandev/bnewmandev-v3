const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Plans = require("../models/plans");

router.get("/", (req, res, next) => {
	res.status(200).json({
		message: "Handling GET requests to /plans",
	});
});

router.post("/", (req, res, next) => {
	const plans = new Plans({
		_id: new mongoose.Types.ObjectId(),
		title: req.body.title,
		image: req.body.image,
		content: req.body.content,
		dateCreated: Date.now(),
		dateUpdated: Date.now(),
	});
	plans
		.save()
		.then((result) => {
			console.log(result);
		})
		.catch((err) => {
			console.log(err);
		});
	res.status(201).json({
		message: "Handling POST requests to /plans",
	});
});

router.get("/:rawId", (req, res, next) => {
	const id = req.params.rawId;
	res.status(200).json({
		message: "Handling GET requests to /plans/{id}",
	});
});

router.patch("/:rawId", (req, res, next) => {
	const id = req.params.rawId;
	res.status(200).json({
		message: "Handling PATCH requests to /plans/{id}",
	});
});

router.delete("/:rawId", (req, res, next) => {
	const id = req.params.rawId;
	res.status(200).json({
		message: "Handling DELETE requests to /plans/{id}",
	});
});

module.exports = router;
