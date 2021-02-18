const Discord = require("discord.js");
const { prefix, token } = require("./config.json");

const client = new Discord.Client();

client.once("ready", () => {
	console.log("Online");
});

client.on("message", (message) => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === "ping") {
		message.channel.send("Pong! " + args);
	}

	switch (command) {
		case "skill":
			break;

		default:
			break;
	}
});

client.login(token);
