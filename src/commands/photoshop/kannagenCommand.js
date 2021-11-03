const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    name: "kannagen",
    category: "photoshop",
    aliases: ['kanna', 'genkanna'],
    async run(client, message, args) {

        let text = args.join(" ");

        if (!text) {
            return message.channel.send("**<a:no:792088988785311754> | Você deve inserir um texto!**");
        }
        //abc
        let m = await message.channel.send("<a:windows:792790125503447070> | **Carregando...**");
        try {
            let res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=kannagen&text=${text}`));
            let json = await res.json();
            let attachment = new Discord.MessageAttachment(json.message, "kannagen.png");
            message.channel.send(attachment);
            m.delete({ timeout: 5000 });
        } catch (e) {
            m.edit(e.message);
        }
    }
}