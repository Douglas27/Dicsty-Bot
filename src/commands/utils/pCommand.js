const Discord = require('discord.js');

module.exports = {
  name: "ping",
  aliases: ['ping', 'p', 'latency'],
  async run(client, message, args) {
  

    let user = message.author;
    let avatar = message.author.displayAvatarURL({dynamic: true, format: 'png' });
    
    const embed = new Discord.MessageEmbed()
    .setDescription(`Calculando latência...`)
    .setColor('RED')
    //abc
    const m = await message.dicstyReply(embed);

    m.edit(
    embed.setDescription(`<:bot:794949319123140608> **|** Latência de mensagens: \`${m.createdTimestamp - message.createdTimestamp}ms\`. 
<:DicstyFofisFeliz:832627298112110684> **|** Latência da Dicsty: \`${Math.round(
      client.ws.ping
    )}ms\`.`)
    
  )
}}