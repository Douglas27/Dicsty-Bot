const Discord = require("discord.js")

module.exports = {
  name: "ban",
  category: "mod",
  aliases: ['ban', 'banir'],
  async run(client, message, args) {
  message.delete()
  if(!message.member.permissions.has("BAN_MEMBERS")) {
    return message.reply("<a:no:792088988785311754> | Você não tem a permissão `BAN_MEMBERS` para executar esse comando.")
  }
  
  if(!message.guild.me.permissions.has("BAN_MEMBERS")) {
    return message.reply("<a:no:792088988785311754> | Eu não tenho a permissão necessária!")
  }
  
  let membro = message.mentions.members.first() || message.guild.members.cache.get(args[0])
  if(!membro) return message.reply("<a:no:792088988785311754> | Você precisa mencionar alguem!")
  if(membro.user.id === message.author.id) {
    return message.reply("<a:no:792088988785311754> | Você não pode se banir!")
  }
  if(membro.user.id === client.user.id) {
    return message.reply("<a:no:792088988785311754> | Por que você quer me banir?")
  }
  if(!membro.bannable) {
    return message.reply("<a:no:792088988785311754> | Eu não posso banir este membro, ele tem um cargo maior que o meu!")
  }
  if(membro.permissions.has("ADMINISTRATOR")) {
    return message.reply("<a:no:792088988785311754> | Eu não posso banir este membro ele é um Administrador ou um Moderador.")
  }
  
  let motivo = args.slice(1).join(" ")
  if(!motivo) motivo = "Não Definido"
  
  const embed = new Discord.MessageEmbed()
  .setTitle("Alguém foi banido!")
  .setColor("RED")
  .addField("Membro", membro.user.tag, false)
  .addField("Moderador", message.author.tag, false)
  .addField("Motivo", motivo, false)
  message.channel.send(embed)
  membro.user.send(`Você foi banido! \nNome do servidor: **${message.guild.name}**\nMotivo: \`${motivo}\``);
  membro.ban({reason: motivo})
  
}}