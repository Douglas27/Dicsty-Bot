const Discord = require(`discord.js`);

module.exports = {
  name: "mcavatar",
  aliases: ['mchead', 'mcavatar'],
  async run(client, message, args) {
  if(message.mentions.roles.first() || message.content.includes("@") || message.content.includes("<"))
  return message.channel.send("<a:no:792088988785311754> | Digite um nick de algum jogador de Minecraft, para ver o rosto da skin dele!")   
  let mesaj = args.slice(0).join(' ');
 let member = message.mentions.members.first();
 let head = 'https://mc-heads.net/head/' + mesaj
 if (mesaj.length < 1) return message.reply('<a:no:792088988785311754> | Você precisa colocar um player de minecraft.');
 if (mesaj == member) {
    message.reply('<a:no:792088988785311754> | Você precisa colocar um player de minecraft.')
 } else {
 const mchead = new Discord.MessageEmbed()
   .setColor('RED')
   .setTitle('<a:terrinha:825415569456627712> **|** Aqui está a cabeça de: ' + mesaj)
   .setDescription(`[Clique aqui para ver!](https://mc-heads.net/head/${mesaj})`)
   .setImage(head)
   message.dicstyReply(mchead);
 //abc
}
}
};