const { MessageEmbed } = require("discord.js");

module.exports = async (client, message) => {
  if (message.content == `<@${client.user.id}>` || message.content == `<@!${client.user.id}>`) {

    if (message.author.bot) return;

    message.dicstyReply('<:DicstyFofisFeliz:832627298112110684> **|** Olá, eu me chamo Dicsty! Prazer em conhecer, e aproveitando... O meu prefixo é `d.`!');
  }

  if (message.author.bot || message.channel.type === "dm") return;
  if (!message.guild) return;
  if (!message.channel.send) return;

  const messageArray = message.content.split(" ");
  const cmd = messageArray[0].toLowerCase();
  const args = messageArray.slice(1);
  if (!message.content.startsWith(client.config.prefix)) return;

  const command = client.commands.get(cmd.slice(client.config.prefix.length)) || client.commands.get(client.aliases.get(cmd.slice(client.config.prefix.length)));
  if (command) command.run(client, message, args);
  if (!command) return;


};

