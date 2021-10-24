const Discord = require("discord.js");
const moment = require("moment");
moment.locale('pt-BR');

module.exports = {
   name: "serverinfo",
   aliases: ['serverinfo', 'infoserver'],
   async run(bot, message,
      args) {

      const regions = {
         brazil: 'Brasil',
         europe: 'Europa',
      };


      const owner = message.guild.owner.user || {};

      let autor = message.author || {}

      let gAvatar = message.guild.iconURL({ dynamic: true, format: "png", size: 1024 });

      let totalmembros = message.guild.memberCount;

      let canaistexto = message.guild.channels.cache.filter(a => a.type === "text").size;

      let canaisvoz = message.guild.channels.cache.filter(a => a.type === "voice").size;


      let embed = new Discord.MessageEmbed()

         .setFooter(`${message.guild.name} • Todos os direitos reservados.`, message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
         .setTitle(`© ${message.guild.name}`)
         .setThumbnail(gAvatar)
         .setColor('RED')
         .addField(`⠀⠀⠀⠀⠀⠀
<:fix:823569976019124254> **|** Informações no geral:`, `<:crown:823570049976762388> **|** Dono: ${message.guild.owner}
   <:ida:794728657464852481> **|** ID: \`${message.guild.id}\` 
   😄 **|** Emojis: \`${message.guild.emojis.cache.size}\`
   📃 **|** Cargos: \`${message.guild.roles.cache.size}\`
   ⠀⠀⠀⠀⠀⠀⠀`, false)
         .addField(`<:text_channel:823569586346786816> **|** Canais: \`${canaistexto + canaisvoz}\``, `
   🔊 **|** Voz: \`${canaisvoz}\` ⠀⠀⠀⠀⠀
   💬 **|** Texto: \`${canaistexto}\`⠀⠀⠀⠀⠀`, true)
         .addField(`<:calendar:823570098627018803> **|** Criado em: ${moment(message.guild.createdAt).format('LLL')}`, `<:world:823570228243333172> **|** Região: \`${message.guild.region.charAt(0).toUpperCase() + message.guild.region.slice(1)}\`\n <:users:823569667443392542> **|** Membros: \`${totalmembros}\`\n <:estatisticas:829423883827413003> **|** Pessoas: \`${message.guild.members.cache.filter(m => !m.user.bot).size}\`
   <:potion:823570009825607680> **|** Bots: \`${message.guild.members.cache.filter(m => m.user.bot).size}\``, true)


      message.channel.send(`<@${message.author.id}>`, { embed });
      //abc
   }
}