const Discord = require('discord.js')

module.exports = {
  name: "vote",
  aliases: ['vote', 'dbl', 'votar', 'topgg'],
  async run(client, message, args) {
  
    let avatar = client.user.displayAvatarURL({dynamic: true, format: 'png' });

  const embed = new Discord.MessageEmbed()
  .setTitle('<:dbl:794933829436833812> | Votem em mim no top.gg!')
  .setDescription('Isso me ajuda muito a crescer sabia?\nClique **[aqui](https://top.gg/bot/757703647772540953)** para votar em mim!')
  .setThumbnail(avatar)
  .setColor('RED')
  message.dicstyReply(embed)
}}

// "Eu olho esse código e tenho vontade de me matar" - WinG4merBR, 2021