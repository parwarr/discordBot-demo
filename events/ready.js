const { Events, ActivityType} = require('discord.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		client.user.setStatus('online');
		client.user.setActivity('🥷🏿 Kick Vishi', { type: ActivityType.Competing });
		console.log(`Ready! Logged in as ${client.user.tag}`);
	},
};