const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Aboutme = require("../models/aboutme");

router.get("/", (req, res, next) => {
	const id = req.body._id
	let doc = await Aboutme.findById(id)
	res.status(200).send(doc)
});

router.patch("/", (req, res, next) => {
	const id = req.body._id
	const replacement = {
		id: id,
		title: req.body.title,
		image: req.body.image,
		content: req.body.content,
		dateUpdated: Date.now()
	}
	let doc = await Aboutme.findOneAndReplace(id, replacement)
	await doc.save()
	res.status(201).send(doc)
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
