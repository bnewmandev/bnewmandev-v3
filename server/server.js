const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const sgMail = require("@sendgrid/mail");
const fs = require("fs");
require("dotenv").config();

const storeData = (data, path) => {
	try {
		fs.writeFileSync(path, JSON.stringify(data));
	} catch (err) {
		console.error(err);
	}
};

const app = express();
sgMail.setApiKey(process.env.GRIDKEY);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "build")));

app.get("*", function (req, res) {
	res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.post("/contactme", (req, res) => {
	const mailOpts = {
		from: process.env.EMAIL,
		to: process.env.EMAIL,
		subject: `New Mesage from ${req.body.name} at bnewman.dev`,
		text: `
		@jam1nb3n
		Name: ${req.body.name},
		Email: ${req.body.email},
		Phone: ${req.body.phone},
		Msg: ${req.body.msg}
		`,
	};
	sgMail
		.send(mailOpts)
		.then(() => {
			console.log("Email sent");
			res.redirect("https://bnewman.dev/contactme?success=true");
		})
		.catch((error) => {
			console.error(error);
			storeData(error, "log.json");
			res.redirect("https://bnewman.dev/contactme?success=false");
		});
});

app.listen(3000);
