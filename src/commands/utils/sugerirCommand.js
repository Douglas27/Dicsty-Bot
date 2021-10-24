const { MessageEmbed } = require("discord.js")

module.exports = {
  name: "sugerir",
  aliases: ['sugerir', 'suggest', 'sugestão'],
  async run(client, message, args) {

    const sugestão = args.slice(0).join(" ")
    const avatar = message.author.displayAvatarURL({ format: 'png' });
    const guild = await client.guilds.cache.get('759868463815852084'); //id do servidor que a sugestão sera enviada
    const channel = await client.channels.cache.get('832210227012829234'); //id do canal que a sugestão sera enviada

    const embed = await new MessageEmbed()
      .setTitle("Sugestão!")
      .setColor('#2F3136')
      .setDescription(`${sugestão}\n\nPor: ${message.author.tag}`)
      .setThumbnail(avatar)
      .setFooter(`ID do usuário: ${message.author.id}`)
      .setTimestamp();

    channel.send(embed).then(msg => {
      msg.react("👍").then(() => {
        msg.react("👎");
      });
    });
    message.author.send("Obrigado pela sugestão! <:DicstyFofisFeliz:832627298112110684>")
  }
};