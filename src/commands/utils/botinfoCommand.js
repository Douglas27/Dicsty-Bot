const Discord = require('discord.js')
module.exports = {
  name: "botinfo",
  category: "utils",
  aliases: ['botinfo', 'btinfo', 'botinf', 'btinf', 'infobot', 'bot', 'info'],
  async run(client, message, args) {
  
      let totalSeconds = (client.uptime / 1000);
      let days = Math.floor(totalSeconds / 86400); totalSeconds %= 86400;
      let hours = Math.floor(totalSeconds / 3600); totalSeconds %= 3600;
      let minutes = Math.floor(totalSeconds / 60);
      let seconds = Math.floor(totalSeconds % 60);
      let up1 = `\`${days}\` dia(s), \`${hours}\` hora(s), \`${minutes}\` minutos(s)`

        const embed = new Discord.MessageEmbed()
              .setTitle(`<:anuncio:794700365747847199> | Aqui está algumas informações minhas!`)
              .setDescription(`Olá ${message.author}, seja bem vindo ao meu menu de informações!
              \n [**Me adicione**](https://discord.com/oauth2/authorize?client_id=757703647772540953&scope=bot&permissions=805686398) | [**Meu servidor de suporte**](https://discord.gg/td8xH6qsY3) | [**Vote em Mim!**](https://top.gg/bot/757703647772540953)
              \n  **Estatísticas | <:estatisticas:829423883827413003>**\n \`${client.users.cache.size}\` usuários maravilhosos 🥰! \n Estou em \`${client.guilds.cache.size}\` servidores! \n Estou acordada à ${up1}. <:DicstyFofisFeliz:832627298112110684>\n
              **Informações | <:warn:816443321634652170>** \n<a:twitter:794931578224508929> **Meu Twitter**: [@DicstyBot](https://twitter.com/dicstybot)\n<:paypal:829320773746425926> **Donate**: [Clique aqui!](http://bit.ly/dicsty-donate)\n<:developer:823569744677830687> ・ Meu Criador \n > \`João P.#0001\` \n    ⌨️ ・ Dev \n > \`yMoonLight#9333\` \n🎨 ・ Designer \n > \`🌈P&Fbaby#8216\` \n
              **Especificações | <:bot:794949319123140608>** \n Linguagem de desenvolvimento : <:JS:816456262056411187> | JavaScript \n Biblioteca de comandos : <:discordjs:822845283406184458> | discord.js`)
             
              .setImage('https://cdn.discordapp.com/attachments/801447863036543006/810887473738940416/Design_sem_nome_4.png')
              .setFooter('Dicsty © Todos os Direitos Reservados')
              .setColor('RED')
              message.dicstyReply({embed})
      //abc
  }}