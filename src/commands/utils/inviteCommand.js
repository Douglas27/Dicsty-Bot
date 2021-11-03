const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "invite",
    category: "utils",
    aliases: ['invite', 'inv'],
    async run(client, message, args) {
    let avatar = message.author.displayAvatarURL({dynamic: "gif", format: "png"});
const embed = new MessageEmbed()
.setTitle('Clique Aqui!')
.setColor("RED")
.setThumbnail(message.author.displayAvatarURL({dynamic: "gif"}))
.addField('<:emoji_3:801967694248149053> | Aqui está meu convite!', `Ficarei agradecida se você me adicionar em seu servidor!`, true)
.setURL('https://discord.com/oauth2/authorize?client_id=757703647772540953&scope=bot&permissions=805686398')
.setFooter(` ${message.author.username}#${message.author.discriminator} `, message.author.displayAvatarURL({dynamic: "gif"}))
message.dicstyReply(`<@${message.author.id}>`, embed )
//abc
}}