const Discord = require('discord.js');
const DIG = require("canvas");

module.exports = {
    name: "bobross",
    aliases: ['bobross', 'pintor'],
    

    run: async (client, message, args) => {

        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        if(!user)
        return message.reply(`Please Mention a user!`)

        const avatar = user.user.displayAvatarURL({ dynamic: true, format: 'png', size: 1024 });

        let img = await new DIG.Bobross().getImage(avatar)

        let attach = new Discord.MessageAttachment(img, "dicsty_Bobross.png");

        message.dicstyReply(attach)
    }
}