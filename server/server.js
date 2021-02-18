const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const sgMail = require("@sendgrid/mail");
const fs = require("fs");
const Discord = require("discord.js");

require("dotenv").config();

const hook = new Discord.WebhookClient(process.env.DID, process.env.DKEY);

const app = express();
// sgMail.setApiKey(process.env.GRIDKEY);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "build")));

app.get("*", function (req, res) {
	res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.post("/contactme", (req, res) => {
	const ip = req.socket;
	console.log(ip);
	const mailOpts = `
		@everyone
		Name: ${req.body.name}
		Email: ${req.body.email}
		Phone: ${req.body.phone}
		Msg: ${req.body.msg}`;
	hook.send(mailOpts, (err) => {
		console.error(err);
		res.redirect("https://www.bnewman.dev/contactmesuccess=false");
	});
	res.redirect("https://www.bnewman.dev/contactme?success=true");
});

app.listen(3000);
