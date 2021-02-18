const express = require("express");
const path = require("path");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "build")));

app.get("*", function (req, res) {
	res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.post("/contactme", (req, res) => {
	const smtpTrans = nodemailer.createTransport({
		host: "smtp.gmail.com",
		port: 465,
		secure: true,
		auth: {
			user: process.env.EMAIL,
			pass: process.env.PASS,
		},
	});
	const mailOpts = {
		from: "Ben Newman Dev Contact Form",
		to: process.env.EMAIL,
		subject: `New Mesage from ${req.body.name} at bnewman.dev`,
		text: `
		Name: ${req.body.name},
		Email: ${req.body.email},
		Phone: ${req.body.phone},
		Msg: ${req.body.msg}
		`,
	};
	smtpTrans.sendMail(mailOpts, (error, response) => {
		if (error) {
			console.error(error);
		} else {
			console.log("Message Sent");
		}
	});
});

app.listen(3000);
