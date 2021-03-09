const express = require("express");
const logger = require("morgan");
const Sequelize = require("sequelize");
const bcrypt = require("bcryptjs");
const cors = require("cors");
require("dotenv").config();

const sequelize = new Sequelize(process.env.DB_STRING);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.role = require("./Role")(sequelize, Sequelize);
db.skill = require("./Skill")(sequelize, Sequelize);
db.user = require("./User")(sequelize, Sequelize);

db.ROLES = ["admin", "mod", "user"];

module.exports = db;
