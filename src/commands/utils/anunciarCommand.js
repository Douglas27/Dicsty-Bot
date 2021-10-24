const Discord = require('discord.js')
module.exports = {
  name: "anunciar",
  aliases: ['anunciar', 'anuncio'],
  async run(client, message, argumentos, arg_texto, chat) {
  if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("<a:no:792088988785311754> | Você não tem a permissão `MANAGE_CHANNELS` para executar esse comando.");

    let gAvatar = message.guild.iconURL({ dynamic: true, format: "png", size: 1024 });

  message.channel.send("Onde deseja enviar seu anuncio?").then(msg1 => {
    let canal = message.channel.createMessageCollector(c => c.author.id === message.author.id, {max: 1})
      .on('collect', c => {
        let channel = c.mentions.channels.first()
          if(!channel) {

            message.channel.send("Mencione um canal em que deseja que o anúncio seja enviado!")

          } else {

            message.channel.send("Informe o título do seu anúncio!").then(msg2 => {
              let titulo = message.channel.createMessageCollector(t => t.author.id === message.author.id, {max: 1})
                .on('collect', t => {
                  let title = t.content


            message.channel.send("Escreva a descrição do seu anúncio").then(msg3 => {
              let descrição = message.channel.createMessageCollector(d => d.author.id === message.author.id, {max: 1})
                .on('collect', d => {
                  let desc = d.content

                  let anunciar = new Discord.MessageEmbed()
                    .setColor('RED')
                    .setTitle(title)
                    .setThumbnail(gAvatar)
                    .setDescription(desc)
                    .setFooter("Publicado por : "+message.author.username, message.author.displayAvatarURL({size: 32}))

                bot.channels.cache.get(channel.id).send(anunciar)

                  message.channel.send("O Anuncio foi publicado com sucesso no <#"+channel.id+">")
                  })
            })

           })
          })
         }
       })
      })
    

}}