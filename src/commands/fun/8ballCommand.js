const Discord = require("discord.js")

module.exports = {
    name: "8ball",
    aliases: ['8ball', 'randomball'],
    async run(client, message, args) {

    if(!args[0])  return message.reply('Use: d.8ball <dúvida>')
    let motivo = args.slice(1).join(" ")
if(!motivo) motivo = "Não Definido"
let lennys = [
    'Sim.',
    'Não.',
    'Não sei.',
    'Provavelmente sim.',
    'Provavelmente não.',
    'Verdade.',
    'Nunca na vida.',
    'Concordo.',
    'Pode ser...',
    'Talvez',
    'Claro que sim',
    'Acho que não.',
    'Acho que sim.'
]

var rand_num = Math.floor(Math.random() * lennys.length);
  var rand_val = lennys[rand_num];
  //abc
let embedLenny = new Discord.MessageEmbed()

    .setTitle("🎱 Bola mágica ")
    .setDescription(rand_val)
    .setFooter('Dicsty © Todos os Direitos Reservados' + ' - 8Ball')
    .setColor('RED')
    return message.dicstyReply(embedLenny)

}

}
