const { Events, ClientUser, ActivityType } = require('discord.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
		client.user.setAvatar('avatar.jpg');
		client.user.setActivity('Not Doing Much.. 💤', { type: ActivityType.Custom});

	},
};