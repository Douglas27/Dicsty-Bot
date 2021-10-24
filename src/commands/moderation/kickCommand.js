const Discord = require("discord.js")
module.exports = {
  name: "kick",
  aliases: ['kick', 'expulsar'],
  async run(client, message, args) {
  message.delete()
  if(!message.member.permissions.has("KICK_MEMBERS")) {
    return message.channel.send("<a:no:792088988785311754> | Você não tem a permissão `KICK_MEMBERS` para executar esse comando.")
  }
  
  if(!message.guild.me.permissions.has("KICK_MEMBERS")) {
    return message.reply("<a:no:792088988785311754> | Eu não tenho a permissão necessária!")
  }
  
  let membro = message.mentions.members.first() || message.guild.members.cache.get(args[0])
  if(!membro) return message.reply("Você precisa mencionar alguem!")
  if(membro.user.id === message.author.id) {
    return message.reply("<a:no:792088988785311754> | Você não pode se expulsar!")
  }
  if(membro.user.id === client.user.id) {
    return message.reply("Por que você quer me expulsar?")
  }
  if(!membro.bannable) {
    return message.reply("<a:no:792088988785311754> | Eu não posso expulsar este membro!")
  }
  if(membro.permissions.has("ADMINISTRATOR")) {
    return message.reply("<a:no:792088988785311754> | Eu não posso expulsar este membro ele é um administrador ou um moderador")
  }
  
  let motivo = args.slice(1).join(" ")
  if(!motivo) motivo = "Não Definido"
  
  const embed = new Discord.MessageEmbed()
  .setTitle("<:ban:794700368671014912> | Kick")
  .setColor("RED")
  .addField("<:userss:794903528522776616> | Membro", membro.user.tag, false)
  .addField("<:Staff:794700366373453834> | Moderador", message.author.tag, false)
  .addField("<:anuncio:794700365747847199> | Motivo", motivo, false)
  message.channel.send(embed)
  membro.kick({reason: motivo})
  //abc
}}