const Discord = require('discord.js');

module.exports = {
  name: "clear",
  aliases: ['clear', 'limpar'],
  async run(client, message, args) {

  if(!message.member) return
  
  if(!message.member.hasPermission('MANAGE_MESSAGES'))
  return message.dicstyReply(`<a:no:792088988785311754> | Você não tem a permissão \`MANAGE_MESSAGES\` para executar esse comando.`)

  var limit = 100
  if(args.length === 1) {
  limit = parseInt(args[0])
  } else {
    
  const embederro = new Discord.MessageEmbed()

  .setTitle('<:DicstyFofisHum:832628201657991189> Ops! Algo saiu errado.')
  .setDescription(`Use: d.clear (quantidade)\n Obs: Consigo apagar somente até **99** mensagens`)
  .setColor('RED')

  if(!args[0]) return message.dicstyReply(embederro).then(message => setTimeout(() => message.delete(), 15000))
      
  
  }

 const embederro2 = new Discord.MessageEmbed()

  .setTitle('<:DicstyFofisHum:832628201657991189> Ops! Algo saiu errado.')
  .setDescription(`Use: d.clear (quantidade)\n Obs: Consigo apagar somente até **99** mensagens`)
  .setColor('RED')

  if(!Number.isInteger(limit))  return message.dicstyReply(embederro2).then(message => setTimeout(() => message.delete(), 15000))
  limit++
  limit = Math.min(limit, 99)


  
  message.channel.bulkDelete(limit).then(messages => {

  const embed = new Discord.MessageEmbed()

  .setTitle(`<:DicstyFofisSorrindo:832625733380603952> Ebah! Tudo certo.`)
  .setDescription(`O chat foi limpo! Foram apagadas **${messages.size}** mensagens. \n Por: ${message.author}`)
  .setColor('RED')

  message.channel.send(embed).then(message => setTimeout(() => message.delete(), 15000))
  
  })
  }}