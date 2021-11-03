const Discord = require("discord.js")
const jimp = require("jimp")

module.exports = {
    name: "firstwords",
    category: "photoshop",
    aliases: ['primeiraspalavras', 'firstwords'],
    async run(client, message, args) {

        let img = jimp.read("https://cdn.discordapp.com/attachments/672188275963854879/709074434283143208/PrimeirasPalavras2.png")
        if (!args[0]) return message.dicstyReply("Digite as primeiras palavras que o bebê irá falar. <:DicstyFofisSorrindo:832625733380603952>")
        img.then(image => {
            jimp.loadFont(jimp.FONT_SANS_32_BLACK).then(font => {
                image.resize(485, 450)
                image.print(font, 10, 230, args.join(" "), 330)
                image.getBuffer(jimp.MIME_PNG, (err, i) => {
                    message.dicstyReply({files: [{ attachment: i, name: "PrimeirasPalavras.png"}]})
                })
                //abc
            })
        })
    }
}