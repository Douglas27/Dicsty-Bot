const Discord = require("discord.js")
const ms = require("ms")
module.exports = {
  name: "unmute",
  aliases: ['unmute', 'desmutar'],
  async run(client, message, args) {
  message.delete()
  let perms = message.member.hasPermission("MANAGE_ROLES")
  if(!perms) return message.channel.send("<a:no:792088988785311754> | Você não tem a permissão `MANAGE_ROLES` para executar esse comando.")

  let role = message.guild.roles.cache.find(ch => ch.name === "🔇 | Dicsty Muted")
  if(!role) return message.channel.send("Não Achei o Cargo 🔇 | Dicsty Muted")

  let user = message.mentions.members.first()
  if(!user) return message.channel.send("Usuário Não informado!")


let embed1 = new Discord.MessageEmbed()
.setTitle('')
.setColor('RED')
.setTimestamp()
.addFields(
                  {
                    name: "`Informações do Desmute:`",
                    value: `**Usuário Desmutado**: ${user}`
                  }
                )


let embed2 = new Discord.MessageEmbed()
.setTitle('')
.setColor('RED')
.setTimestamp()
.addFields(
                  {
                    name: "`Informações do Desmute:`",
                    value: `**Usuário Desmutado**: ${user}`
                  }
                )


user.roles.remove(role)
message.channel.send(embed2)

}}