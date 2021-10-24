const Discord = require("discord.js")
const fetch = require("node-fetch");

module.exports = {
    name: "tweet",
    aliases: ['tweet', 'tweetar'],
    async run(bot, message, args) {

        let user = args[0];
        let text = args.slice(1).join(" ");
        //abc
        let m = await message.dicstyReply("<a:windows:792790125503447070> | **Carregando...**");
                    m.delete({ timeout: 5000});

        if(!user){
            return m.edit("**<a:no:792088988785311754> | Você tem que inserir o apelido de alguém do Twitter!**");
        }

        if(!text){
            return m.edit("**<a:no:792088988785311754> | Você deve inserir uma mensagem!**");
        }

        try {
            let res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=tweet&username=${user}&text=${text}`));
            let json = await res.json();
            let attachment = new Discord.MessageAttachment(json.message, "tweet.png");
            await message.dicstyReply(`<a:twitter:794931578224508929> | **Novo tweet publicado por <@${message.author.id}> na conta de ${user}**`, attachment);
            m.delete({ timeout: 100000});
        } catch(e){
            m.edit("Erro, tente novamente! Mencione alguém");
        }
    }
};