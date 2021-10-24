const Discord = require('discord.js');
const fs = require("fs");

module.exports = {
  name: "warn",
  aliases: ['warn', 'avisar'],
  async run(client, message, args) {
  message.delete()
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("<a:no:792088988785311754> | Você não tem a permissão `MANAGE_MESSAGES` para executar esse comando.");
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (message.mentions.users.size < 1) return message.reply('Você deve mencionar alguém para dar warn.');
  if (reason.length < 1) return message.reply('Você precisa dar uma razão para um warn.');

  let dmsEmbed = new Discord.MessageEmbed()
  .setTitle("<:warn:816443321634652170> | Warn")
  .setColor("RED")
  .setTimestamp()
  .setFooter(``, message.author.displayAvatarURL({Size: 32}))
  .setDescription(`<@${user.id}>, você levou um aviso !`)
  .addField("Avisado por:", message.author.tag)
  .addField("Motivo", `\`${reason}\``)
  .setThumbnail(user.displayAvatarURL({dynamic: true, format: 'png' }))
  message.channel.send(dmsEmbed);

  //abc
}

};