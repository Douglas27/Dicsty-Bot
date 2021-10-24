const Discord = require('discord.js');

module.exports = {
  name: "lock",
  aliases: ['lock', 'fechar'],
  async run(client, message, args) {
  if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("<a:no:792088988785311754> | Você não tem a permissão `MANAGE_CHANNELS` para executar esse comando.");
  let card = new Discord.MessageEmbed()
  .setColor('RED')
  .setTitle(`Quer realmente fazer isso ${message.author.username}?`)
  .setDescription('Você deseja realmente fechar este canal?')
message.dicstyReply(card).then(msg => {

  msg.react('🔒') 

  const filtro = (reacao, usuario) => reacao.emoji.name === '🔒' && usuario.id === message.author.id; 
  const coletor = msg.createReactionCollector(filtro);
  //abc
  coletor.on('collect', () => { 

    let card2 = new Discord.MessageEmbed()
    .setTitle('🔒 | Bloqueado!')
    .setDescription('Canal fechado com sucesso!')
    .setColor('RED')

    msg.edit(card2);
  
      if (!client.lockit) client.lockit = [];
        message.channel.createOverwrite(message.guild.id, {
              SEND_MESSAGES: false  
      })

     
     
      })
  }
                                
)}};