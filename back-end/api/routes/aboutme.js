const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Aboutme = require("../models/aboutme");

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

router.post("/", (req, res, next) => {
	const aboutme = new Aboutme({
		_id: new mongoose.Types.ObjectId(),
		title: req.body.title,
		image: req.body.image,
		content: req.body.content,
		dateUpdated: Date.now(),
	});
	aboutme
		.save()
		.then((result) => {
			console.log(result);
		})
		.catch((err) => {
			console.log(err);
		});
	res.status(201).json({
		message: "CREATED",
	});
});
module.exports = router;
