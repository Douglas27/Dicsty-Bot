const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "userinfo",
    category: "utils",
    aliases: ['userinf', 'userinfo'],
    async run(client, message, args) {
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        let status;
        switch (user.presence.status) {
            case "online":
                status = "<:online:784453757068509230> Online";
                break;
            case "dnd":
                status = "<:disturb:784453873414438932> Não Pertube";
                break;
            case "idle":
                status = "<:idle:784453742589509652> Ausente";
                break;
            case "offline":
                status = "<:offline:784453833639723009> Offline";
                break;
        }

        const embed = new MessageEmbed()
            .setTitle(`<a:wumpus:833453383771881512> Informações do usuário`)
            .setColor(`RED`)
            .setThumbnail(user.user.displayAvatarURL({dynamic : true}))
            .setFooter(` ${user.user.username}#${user.user.discriminator} `, user.user.displayAvatarURL({dynamic: "gif"}))
            .addFields(
                {
                    name: "<:users:823569667443392542> Tag do Discord: ",
                    value: `\`${user.user.username}#${user.user.discriminator}\``,
                    inline: true
                },
                {
                    name: "<:ida:794728657464852481> ID: ",
                    value: `\`${user.user.id}\``,
                    inline: true
                },
                {
                    name: "<:control:823569826634924075> Status: ",
                    value: status,
                    inline: true
                },
                {
                    name: '<:calendar:823570098627018803> Conta criada em: ',
                    value: new Date(user.user.createdAt).toLocaleDateString("pt-br"),
                    inline: true
                },
                {
                    name: '<:calendar:823570098627018803> Entrou no servidor em: ',
                    value: new Date(user.joinedAt).toLocaleDateString("pt-br"),
                    inline: true
                },
                {
                    name: '<:fix:823569976019124254> Cargos do Usuário: ',
                    value: user.roles.cache.map(role => role.toString()).join(" **|** "),
                    inline: false
                }
            )

            message.dicstyReply(`<@${message.author.id}>`, { embed });
    }
}