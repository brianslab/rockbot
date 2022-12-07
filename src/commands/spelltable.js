const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('spelltable')
    .setDescription('Prints the link and the link appended with ?camera=true')
    .addStringOption((option) =>
      option
        .setName('link')
        .setDescription('The link to the Spelltable game.')
        .setRequired(true)
    ),
  async execute(interaction) {
    const game = interaction.options.getString('link');
    await interaction.reply(game + '\n' + game + '?camera=true');
    // await interaction.followUp(game + '?camera=true');
  },
};
