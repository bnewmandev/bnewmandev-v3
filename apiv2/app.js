const express = require("express");
const logger = require("morgan");
const Sequelize = require("sequelize");
const bcrypt = require("bcryptjs");
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT || 8000;

const sequelize = new Sequelize(process.env.DB_STRING);

const db = require("./models/index");

const options = {
	cors: {
		origin: `http://localhost:${parseInt(port) + 1}`,
	},
};

const skill = require("./routes/skill");

const app = express();

app.use(logger("dev"));
app.use(cors(options.cors));

app.get("/", (req, res) => {
	res.status(200).json({
		msg: "root of api",
	});
});

app.use("/skill", skill);

app.listen(port, () => {
	console.log("Server online on port: " + port);
});
