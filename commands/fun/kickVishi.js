const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('kickvishi')
        .addUserOption(option => option.setName('user').setDescription('The user to kick'))
        .setDescription('Kick Vishi!'),
        async disconnectUser(userID, interaction){
        let user = await interaction.guild.members.fetch(userID);
        await user.voice.disconnect();
            
    },
    async execute(interaction) {
        const user = interaction.options.getUser('user');
        if (user.id !== '531105038609809419') return interaction.reply('This is not Vishi! You only can kick vishi with this command!');
        await this.disconnectUser(user.id, interaction);
        await interaction.reply('Vishi has been kicked from the call!');
        },
};