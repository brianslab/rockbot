const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [] });
const { DISCORD_TOKEN } = require('./tokens.js');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('message', (msg) => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login(DISCORD_TOKEN);
