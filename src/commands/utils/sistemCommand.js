const { MessageEmbed } = require("discord.js");
const os = require('os');

module.exports = {
    name: "sistem",
    category: "utils",
    aliases: ['system', 'host', 'status'],
    async run(client, message, args) {

        let avatar = client.user.displayAvatarURL({dynamic: true, format: 'png' });

        const embed = new MessageEmbed()
.setTitle("Aqui está minhas informações!")
.setColor("RED")
.addField('<:potion:823570009825607680> **|** CPU', ` **${(process.cpuUsage().system / 1024 / 1024).toFixed(2)}%** de CPU`, true)
.addField('<:flag:823570185658302474> **|** Memória', ` **${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)}MB de 2GB** de Memória RAM `, true)
.addField('<:field:823569883429077053> **|** Plataforma', `**${os.platform()} ${os.arch()}**`, true)
.addField('<:cloud:823569938622578729> **|** Host', ' SyncHosting <:SyncHosting_Dicsty:902298653681651732>', true)
.setFooter('Dicsty © Todos os Direitos Reservados', avatar)
.setThumbnail(avatar)
message.channel.send(embed).catch((err) => {
    console.log(err)

//abc
})
    }}