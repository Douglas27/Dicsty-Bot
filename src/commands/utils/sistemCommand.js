const MessageEmbed = require("discord.js").MessageEmbed;
const os = require('os');

module.exports = {
    name: "sistem",
    aliases: ['sistem', 'system', 'host', 'status'],
    async run(client, message, args) {
        let avatar = client.user.displayAvatarURL({dynamic: true, format: 'png' });
const embed = new MessageEmbed()
.setTitle("Aqui está minhas informações!")
.setColor("RED")
.addField('<:potion:823570009825607680> **|** CPU', ` **${(process.cpuUsage().system / 1024 / 1024).toFixed(2)}%** de CPU`, true)
.addField('<:flag:823570185658302474> **|** Memória', ` **${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)}MB de 512MB** de Memória RAM `, true)
.addField('<:field:823569883429077053> **|** Plataforma', `**${os.platform()} ${os.arch()}**`, true)
.addField('<:cloud:823569938622578729> **|** Host', ' HostSquare <:HostSquare:859384049608294405>', true)
.setFooter(' Dicsty © Todos os Direitos Reservados', `${avatar}`)
.setThumbnail(avatar)
message.dicstyReply(embed);
//abc
}}