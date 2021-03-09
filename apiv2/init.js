const express = require("express");
const logger = require("morgan");
const Sequelize = require("sequelize");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const uuid = require("uuid");
require("dotenv").config();

const sequelize = new Sequelize(process.env.DB_STRING);

const db = require("./models/index");

db.sequelize.sync({ force: true }).then(() => {
	init();
});

const init = () => {
	db.role.create({
		id: 1,
		name: "admin",
	});
	db.role.create({
		id: 2,
		name: "mod",
	});
	db.role.create({
		id: 3,
		name: "user",
	});
};
