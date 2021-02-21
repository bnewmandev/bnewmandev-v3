const express = require("express");
const router = express.Router();
const Skills = require("../models/skills");

router.get("/", (req, res, next) => {
	Skills.find({}, (err, result) => {
		if (err) {
			console.log(err);
			res.status(500).send();
		} else {
			res.status(200).json(result);
		}
	});
});

router.post("/", (req, res, next) => {
	res.status(201).json({
		message: "Handling POST requests to /skills",
	});
});

router.get("/:rawId", (req, res, next) => {
	const id = req.params.rawId;
	res.status(200).json({
		message: "Handling GET requests to /skills/{id}",
	});
});

router.patch("/:rawId", (req, res, next) => {
	const id = req.params.rawId;
	res.status(200).json({
		message: "Handling PATCH requests to /skills/{id}",
	});
});

router.delete("/:rawId", (req, res, next) => {
	const id = req.params.rawId;
	res.status(200).json({
		message: "Handling DELETE requests to /skills/{id}",
	});
});

module.exports = router;
