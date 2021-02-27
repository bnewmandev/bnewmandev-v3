const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
require("dotenv").config();

const app = express();

const authRoutes = require("./routes/auth");
const securePing = require("./routes/securePing");
const verifyToken = require("./routes/validateToken");

app.use(
	session({
		secret: process.env.SESSION_SECRET,
		resave: true,
		saveUninitialized: true,
	})
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/secureping", verifyToken, securePing);

mongoose.connect(process.env.CONNECTION_STRING, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
});
mongoose.connection.on("open", () => {
	console.log("Database linked to server");
});

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "/public/index.html"));
});

module.exports = app;
