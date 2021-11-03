const Discord = require("discord.js")
const ms = require("ms")
module.exports = {
  name: "tempmute",
  category: "mod",
  aliases: ['mute', 'tempmute'],
  async run(client, message, args) {
  message.delete()
  let perms = message.member.hasPermission("MANAGE_MESSAGES")
  if(!perms) return message.channel.send("<a:no:792088988785311754> | Você não tem a permissão `MANAGE_MESSAGES` para executar esse comando.")
  
  if(!message.guild.me.permissions.has("MANAGE_ROLES")) {
    return message.reply("<a:no:792088988785311754> | Eu não tenho a permissão `MANAGE_MESSAGES`!")
  }

  let role = message.guild.roles.cache.find(ch => ch.name === "🔇 | Dicsty Muted");
  if(!role) {
    try {
      message.channel.send('Estou criando o cargo...')
    let muterole = await message.guild.roles.create({
      data : {
          name : '🔇 | Dicsty Muted',
          permissions: []
      }
  });
  message.guild.channels.cache.filter(c => c.type === 'text').forEach(async (channel, id) => {
      await channel.createOverwrite(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
      })
  });
  message.channel.send('Cargo de mutados criado com sucesso! **Execute o comando novamente para funcionar corretamente!**');
  } catch (error) {
  console.log(error)
  }
  };

  let gAvatar = message.guild.iconURL({ dynamic: true, format: "png", size: 1024 });

  let user = message.mentions.members.first()
  if(!user) return message.channel.send("Usuário Não informado!")

  let tempo = args[1]
  if(!tempo) return message.channel.send("Não Informou o Tempo")

  let motivo = args.slice(2).join(" ")
  if(!motivo) motivo = "Motivo não Informado"

let embed1 = new Discord.MessageEmbed()
.setTitle('<a:muted:794914197251162142>| Informações do Mute:')
.setColor('RED')
.setTimestamp()
.setThumbnail(gAvatar)
.setFooter(`ID do mutado : ${user.id}`)
.setDescription(`<:users:823569667443392542>** | Usuário Mutado**: ${user} \n<:estatisticas:829423883827413003>** | Motivo**: ${motivo} \n⏲️** | Tempo**: ${tempo} \n<:Staff:794700366373453834>**| Mutado Por**: ${message.author}`)


let embed2 = new Discord.MessageEmbed()
.setTitle('<a:muted:794914197251162142>| Informações do Mute:')
.setColor('RED')
.setTimestamp()
.setThumbnail(gAvatar)
.setFooter(`ID do mutado : ${user.id}`)
.setDescription(`<:users:823569667443392542>** | Usuário Mutado**: ${user} \n<:estatisticas:829423883827413003>** | Motivo**: ${motivo} \n⏲️** | Tempo**: ${tempo} \n<:Staff:794700366373453834>**| Mutado Por**: ${message.author}`)


user.roles.add(role)
message.channel.send(embed2)

setTimeout(function() {
user.roles.remove(role) 
}, ms(tempo))
}}