const Discord = require("discord.js");

module.exports = {
  name: "votação",
  aliases: ['votação', 'votacao', 'enquete'],
  async run(client, message, args) {
message.delete()
const content = args.join(" ");
if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("<a:no:792088988785311754> | Você não tem a permissão `MANAGE_MESSAGES` para executar esse comando.");
if (!args[0]) {
  return message.channel.send(`${message.author.username}, escreva o título da votação após o comando`)
} else if (content.length > 1000) {
  return message.channel.send(`${message.author.username}, forneça um título de no máximo 1000 caracteres.`);
} else {
  const msg = await message.channel.send(
    new Discord.MessageEmbed()
    .setColor("RED")
    .setTitle(`${content}\n\n<:yes01:841425845569978378> **|** Sim\n<:no01:841425673405857832> **|** Não`)
    .setFooter("Autor da votação: " + message.author.username)
    .setTimestamp()
  );

  const emojis = ["841425845569978378", "841425673405857832"];

  for (const i in emojis) {
    await msg.react(emojis[i])


  }
}

let guild = await client.guilds.cache.get('836284589965180932'); //id do servidor que a sugestão sera enviada
let channel = await client.channels.cache.get('836284590469414934'); //id do canal que a sugestão sera enviada
let avatar = message.author.displayAvatarURL({format: 'png'});


    let embed = await new Discord.MessageEmbed()
                  .setTitle("Logs enquetes") 
                  .setColor('RED')
                    .setDescription(`A mensagem \`${content}\` foi utilizada pelo \`${message.author.tag}\` no comando **enquete**\n\n na guilda \`${message.guild.name}\` com o id \`${message.guild.id}\``)
                    .setThumbnail(avatar)
                   .setFooter(`ID do usuário: ${message.author.id}`)
                    .setTimestamp();

channel.send(embed)




}

}