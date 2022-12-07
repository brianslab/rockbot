const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('spelltable')
    .setDescription('Prints the link and the link appended with ?camera=true'),
  async execute(interaction) {
    await interaction.reply('Coming soon!');
  },
};
