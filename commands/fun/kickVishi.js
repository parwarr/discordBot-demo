const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('vishi')
        .setDescription('Kick Vishi!'),
    async disconnectUser(userID, interaction){
        let user = await interaction.guild.members.fetch(userID);
        user.voice.disconnect();
    },
    async execute(interaction) {
        await interaction.reply('Vishi has been kicked from the call!');
        this.disconnectUser('531105038609809419', interaction);
    },
};