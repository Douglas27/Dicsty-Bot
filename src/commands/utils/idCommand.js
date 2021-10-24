const { MessageEmbed } = require("discord.js")
module.exports = {
    name: "id",
    aliases: ['id'],
    async run(client, message, args) {
    let user = message.mentions.users.first() || message.author;
    let avatar = message.author.displayAvatarURL({dynamic: "gif", format: "png"});
const embed = new MessageEmbed()
.setTitle(`<:ida:794728657464852481> | Aqui está o ID de ${user.username}.`)
.setColor("RED")
.setThumbnail(user.displayAvatarURL({dynamic: "gif"}))
.addField(`Aqui está o ID :`, `\`${user.id}\``)
.setFooter(` ${user.username}#${user.discriminator} `, user.displayAvatarURL({dynamic: "gif"}))
message.dicstyReply(`<@${message.author.id}>`, { embed });
//abc
}}