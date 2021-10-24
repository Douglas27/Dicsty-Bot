const Discord = require('discord.js');
const nko = require('nekos.life');

const neko = new nko();

module.exports = {
  name: "hug",
  aliases: ['hug', 'abraçar'],
  async run(client, message, args) {

const gif = neko.sfw.hug()

const user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('Lembre-se de mencionar um usuário válido para abraçar!');
}
/*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('<:hug_ailuna:794727774760730654> | Abraço!')
        .setColor('RED')
        .setDescription(`${message.author} acaba de abraçar ${user}`)
        .setImage((await gif).url)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Abraçooooo')
        .setAuthor(message.author.tag, avatar);
  await message.dicstyReply(embed);
  //abc
}}