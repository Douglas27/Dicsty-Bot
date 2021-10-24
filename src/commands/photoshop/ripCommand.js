const Discord = require('discord.js');
const DIG = require("canvas");

module.exports = {
    name: "rip",
    aliases: ['rip', 'f'],

    run: async (client, message, args) => {

        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        if(!user)
        return message.reply(`Erro : Usuário não encontrado.`)

        const avatar = user.user.displayAvatarURL({ dynamic: true, format: 'png', size: 1024 });

        let img = await new DIG.Rip().getImage(avatar);

        let attach = new Discord.MessageAttachment(img, "dicsty_rip.png");

        message.dicstyReply(attach)
    }
}