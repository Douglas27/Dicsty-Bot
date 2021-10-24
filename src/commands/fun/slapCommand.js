const Discord = require('discord.js');
module.exports = {
  name: "slap",
  aliases: ['slap', 'tapa'],
  async run(client, message, args) {

var list = [
  'https://i.imgur.com/fm49srQ.gif',
  'https://i.imgur.com/o2SJYUS.gif',
  'https://i.imgur.com/oOCq3Bt.gif',
  'https://i.imgur.com/Agwwaj6.gif',
  'https://i.imgur.com/mIg8erJ.gif',
  'https://i.imgur.com/oRsaSyU.gif',
  'https://i.imgur.com/CwbYjBX.gif',
  'https://i.imgur.com/RFWNaoF.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para dar um tapa!');
}


let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('<a:Kermit:794930315700469770> | Tapa na cara!')
        .setColor('RED')
        .setDescription(`${message.author} acaba de dar um tapa no(a) ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Tapinha na cara!')
        .setAuthor(message.author.tag, avatar);
  await message.dicstyReply(embed);
  //abc
}}