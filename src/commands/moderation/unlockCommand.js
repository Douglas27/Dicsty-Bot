const Discord = require('discord.js');


module.exports = {
  name: "unlock",
  aliases: ['unlock', 'destravar'],
  async run(client, message, args) {
  if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("<a:no:792088988785311754> | Você não tem a permissão `MANAGE_CHANNELS` para executar esse comando.");
 
  if(!message.guild.me.permissions.has("MANAGE_CHANNELS")) {
    return message.reply("<a:no:792088988785311754> | Eu não tenho a permissão `MANAGE_CHANNELS`!")
  }


  let card = new Discord.MessageEmbed()
  .setColor('RED')
  .setTitle(`Certeza ${message.author.username}?`)
  .setDescription('Você deseja realmente dar unlock neste canal?')
message.channel.send(card).then(msg => {

  msg.react('🔓') 

  const filtro = (reacao, usuario) => reacao.emoji.name === '🔓' && usuario.id === message.author.id; 
  const coletor = msg.createReactionCollector(filtro);
  //abc
  coletor.on('collect', () => { 

    let card2 = new Discord.MessageEmbed()
    .setTitle('🔓 | Aberto Novamente!')
    .setDescription('Canal aberto com sucesso!')
    .setColor('RED')

    msg.edit(card2);
  
      if (!client.lockit) client.lockit = [];
  message.channel.createOverwrite(message.guild.id, {
              SEND_MESSAGES: null  
      })

     

      })
  }
                                
)}};
