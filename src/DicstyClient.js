const { Client, Collection } = require("discord.js");
const client = new Client();
const chalk = require("chalk");

require('./structures/dicstyReply')
client.fs = require('fs');
client.commands = new Collection();
client.aliases = new Collection();
client.config = require('../config.json')

const commandFolders = client.fs.readdirSync('./src/commands');
const eventFiles = client.fs.readdirSync('./src/events').filter((file) => file.endsWith('.js'));

for (const folder of commandFolders) {
  const commandFiles = client.fs.readdirSync(`./src/commands/${folder}`).filter(file => file.endsWith('.js'));
  for (const file of commandFiles) {
    const command = require(`./commands/${folder}/${file}`);
    client.commands.set(command.name, command);
  }
}

for (const file of eventFiles) {
  const event = require(`./events/${file}`);
  const eventBind = file.split('.')[0];
  console.info(`\x1b[37m\x1b[44mINFO\x1b[0m: Loading event: ${file}; Bind: ${eventBind}`);
  client.on(eventBind, event.bind(null, client));
  console.log(`-----------------------------\n[${chalk.magenta(`EVENT`)}] Evento carregado: ` + eventBind)
}

client.login(client.config.auth);