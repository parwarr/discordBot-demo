const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('mutevishi')
        .addUserOption(option => option.setName('user').setDescription('The user to mute'))
        .setDescription('Mute Vishi!'),
        async muteUser(userID, interaction){
        let user = await interaction.guild.members.fetch(userID);
        await user.voice.setMute(true);
            
    },
    async execute(interaction) {
        const user = interaction.options.getUser('user');
        if (user.id !== '531105038609809419') return interaction.reply('This is not Vishi! You only can mute vishi with this command!');
        await this.muteUser(user.id, interaction);
        await interaction.reply('Vishi has been muted!');
        },
};