const Discord = require('discord.js')

module.exports = {
      name: "servericon",
      aliases: ['servericon', 'srvricon'],
      async run(client, message, args) {

      const embed = new Discord.MessageEmbed()
            .setTitle(`🖼 | Ícone do server:`)
            .setDescription(`**Clique [aqui](${message.guild.iconURL({dynamic: "gif", format: "png"})}) para baixar a imagem!**`)
            .setImage(message.guild.iconURL({dynamic: "gif", format: "png", size: 4096}))
            .setColor('RED')
            message.dicstyReply({embed})
    //abc
}}