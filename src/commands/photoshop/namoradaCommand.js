const Canvas = require('canvas');
const Discord = require('discord.js');
module.exports = {
    name: "namorada",
    aliases: ['minhanamorada', 'namorada'],
    async run(client, message, args) {

    //abc
let pessoa = message.mentions.users.first() || message.author

if(!pessoa){
pessoa = message.author || client.users.cache.get(args[0]);
}
    const wallpaper = await Canvas.loadImage('https://media.discordapp.net/attachments/759870274795208704/833382333934469120/images_5.png?width=500&height=510');
    const avatar = await Canvas.loadImage(pessoa.avatarURL({dynamic: false, format: 'png'}));
    const canva = Canvas.createCanvas(wallpaper.width, wallpaper.height);
    const ctx = canva.getContext('2d');
    ctx.drawImage(wallpaper, 0, 0, canva.width, canva.height);
    ctx.drawImage(avatar, 20, 170, 200, 200);
    const attach = new Discord.MessageAttachment(canva.toBuffer(), 'teste.png');
    message.dicstyReply(attach);

}}