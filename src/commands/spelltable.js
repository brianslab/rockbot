const { SlashCommandBuilder } = require('discord.js');
const getTimeStamp = require('../utils/timestamp.js');

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
    const cameraLink = game + '?camera=true';

    const timestamp = getTimeStamp();

    console.log(`${timestamp}: sending camera link ${cameraLink}`);
    await interaction.reply(game + '\n' + cameraLink);
  },
};
