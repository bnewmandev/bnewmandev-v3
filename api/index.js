const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const bodyParser = require("body-parser");
require("dotenv").config();
const UserModel = require("./model/model");

mongoose.connect(process.env.CONNECTION_STRING, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

mongoose.connection.on("error", (error) => console.log(error));

mongoose.Promise = global.Promise;

require("./auth/auth");

const routes = require("./routes/routes");
const secureRoutes = require("./routes/secure-routes");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", routes);
app.use(
	"/secure",
	passport.authenticate("jwt", { session: false }),
	secureRoutes
);
app.use(function (err, req, res, next) {
	res.status(err.status || 500);
	res.json({ error: err });
});

app.listen(9000, () => {
	console.log("Server Started");
});
