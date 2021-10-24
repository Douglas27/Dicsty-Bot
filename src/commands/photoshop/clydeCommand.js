const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    name: "cld",
    aliases: ['clyde', 'cld'],
    async run(client, message, args) {

        let text = args.join(" ");

        if (!text) {
            return message.channel.send("**Coloque um texto**");
        }
        //abc
        let m = await message.channel.send("**Espere um pouco...**");
        try {
            let res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=clyde&text=${text}`));
            let json = await res.json();
            let attachment = new Discord.MessageAttachment(json.message, "clyde.png");
            message.channel.send(attachment);
            m.delete({ timeout: 5000 });
        } catch (e) {
            m.edit(e.message);
        }
    }
}