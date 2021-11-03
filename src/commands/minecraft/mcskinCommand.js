const Discord = require(`discord.js`);
module.exports = {
  name: "mcskin",
  category: "mine",
  aliases: ['mcskin', 'mcbody'],
  async run(client, message, args) {
 let mesaj = args.slice(0).join(' ');
 if(message.mentions.roles.first() || message.content.includes("@") || message.content.includes("<"))
 return message.channel.send("<a:no:792088988785311754> | Digite um nick de algum jogador de Minecraft, para ver a skin dele!")   
 let member = message.mentions.members.first();
 let body = 'https://mc-heads.net/body/' + mesaj
 if (mesaj.length < 1) return message.reply('<a:no:792088988785311754> | Você precisa colocar o nick de um player de minecraft.');
 if (mesaj == member) {
    message.reply('<a:no:792088988785311754> | Você precisa colocar o nick de um player de minecraft.')
 } else {
 const mcbody = new Discord.MessageEmbed()
   .setColor('RED')
   .setTitle('<a:terrinha:825415569456627712> **|** Aqui está a skin de: ' + mesaj)
   .setDescription(`[Clique aqui para baixar!](https://mc-heads.net/download/${mesaj}/120)`)
   .setImage(body)
   message.dicstyReply(mcbody);
 //abc
}
}
};