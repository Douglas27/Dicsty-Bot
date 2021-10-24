const Discord = require("discord.js")

module.exports = {
  name: "report",
  aliases: ['report', 'reportbug', 'bug'],
  async run(client, message, args) {
  
  const sugestão = args.join(" ").slice(0);
  let avatar = message.author.displayAvatarURL({format: 'png'});
    let guild = await client.guilds.cache.get('759868463815852084'); //id do servidor que a sugestão sera enviada
    let channel = await client.channels.cache.get('795071887503785994'); //id do canal que a sugestão sera enviada

        let embed = await new Discord.MessageEmbed()
                      .setTitle("Report Bug!") 
                      .setColor('#2F3136')
                        .setDescription(`${sugestão}\n\nPor: ${message.author.tag}`)
                        .setThumbnail(avatar)
                       .setFooter(`ID do usuário: ${message.author.id}`)
                        .setTimestamp();

channel.send(embed)
    message.dicstyReply("Obrigado por reportar um bug! Seu bug já foi enviado para a equipe que cuide de mim! <:DicstyFofisFeliz:832627298112110684>").then(i => i.react("⏳"))

    
}};
