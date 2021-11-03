const Discord = require("discord.js")

module.exports = {
    name: "say",
    category: "utils",
    aliases: ['say', 'falar'],
    async run(client, message, args) {

        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("<a:no:792088988785311754> | Você não tem a permissão `MANAGE_MESSAGES` para executar esse comando.");


    if(message.mentions.roles.first() || message.content.includes("@everyone") || message.content.includes("@here")) 
    return message.channel.send("<a:no:792088988785311754> | Você não pode mencionar `@everyone`, `@here` e nenhum cargo!")

const sayMessage = args.join(' ');


message.channel.send(`${sayMessage}\n\n<:say:817811905489403972> | _Mensagem enviada por **<@${message.author.id}>**_`)

let guild = await client.guilds.cache.get('836284589965180932'); //id do servidor que a sugestão sera enviada
let channel = await client.channels.cache.get('836284590469414934'); //id do canal que a sugestão sera enviada
let avatar = message.author.displayAvatarURL({format: 'png'});


    let embed = await new Discord.MessageEmbed()
                  .setTitle("Logs Say") 
                  .setColor('RED')
                    .setDescription(`A mensagem \`${sayMessage}\` foi enviada pelo \`${message.author.tag}\` no comando **say**\n\n na guilda \`${message.guild.name}\` com o id \`${message.guild.id}\``)
                    .setThumbnail(avatar)
                   .setFooter(`ID do usuário: ${message.author.id}`)
                    .setTimestamp();

channel.send(embed)

}};