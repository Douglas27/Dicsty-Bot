const jimp = require("jimp")

module.exports = {
    name: "stonks",
    aliases: ['stonks', 'stnks'],
    async run(client, message, args) {
    //abc
    if(message.mentions.roles.first() || message.content.includes("cpf") || message.content.includes("Cpf"))
    return message.channel.send("<a:no:792088988785311754> | Você não pode colocar cpf's aqui!")   
    let img = jimp.read("https://media.discordapp.net/attachments/723135289320538152/733670552622989352/stonks-meme.png")
        if (!args[0]) return message.reply("Diga algo Stonks.")
        img.then(image => {
            jimp.loadFont(jimp.FONT_SANS_64_WHITE).then(font => {
                image.resize(685, 500)
                image.print(font, 30, 40, args.join(" "), 700)
                image.getBuffer(jimp.MIME_PNG, (err, i) => {
                    message.dicstyReply({files: [{ attachment: i, name: "mime_dos_stonks.png"}]})
                })
            })
        })
    }}