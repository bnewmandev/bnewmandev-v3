const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const app = express();

const aboutmeRoutes = require("./api/routes/aboutme");
const plansRoutes = require("./api/routes/plans");
const projectsRoutes = require("./api/routes/projects");
const skillsRoutes = require("./api/routes/skills");
const toleanRoutes = require("./api/routes/tolearn");

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/aboutme", aboutmeRoutes);
app.use("/plans", plansRoutes);
app.use("/projects", projectsRoutes);
app.use("/skills", skillsRoutes);
app.use("/tolearn", toleanRoutes);

app.use((req, res, next) => {
	const error = new Error("Not Found");
	error.status = 404;
	next(error);
});

app.use((error, req, res, next) => {
	res.status(error.status || 500);
	res.json({
		error: {
			message: error.message,
		},
	});
});

module.exports = app;
