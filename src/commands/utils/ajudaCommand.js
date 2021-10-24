const discord = require('discord.js')
module.exports = {
    name: "ajuda",
    aliases: ['help', 'ajuda', 'ajd'],
    async run(client, message, args) {

    let avatar = message.author.displayAvatarURL({dynamic: true, format: 'png' });
    let user = message.author;
    let gAvatar = message.guild.iconURL({ dynamic: true, format: "png", size: 1024 });


    const embed = new discord.MessageEmbed()
.setTitle(`Olá ${message.author.username}, Seja Bem vindo ao menu de ajuda,\naqui você vê todos os meus comandos!`)
.setDescription(`Comandos encontrados: **55**\nCategorias encontradas: **5**\n[**Me adicione**](https://discord.com/oauth2/authorize?client_id=757703647772540953&scope=bot&permissions=805686398) | [**Meu servidor de suporte**](https://discord.gg/td8xH6qsY3) | [**Vote em Mim!**](https://top.gg/bot/757703647772540953/vote/)`)
.addField('<:field:823569883429077053>・Comandos de moderação - (8)', '`ban` | `kick` | `warn` | `tempmute` | `unmute`| `unlock` | `lock` | `clear`', false)
.addField('<:potion:823570009825607680>・Comandos de Photoshop - (11)', '`clyde` | `tweet`| `perfect` | `stonks` | `minhanamorada` | `primeiraspalavras` | `beautiful` | `pintor` | `pride` | `rip` | `triggered`', false)
.addField('<:fix:823569976019124254>・Comandos úteis - (17)', '`vote` | `userinfo` | `botinfo` | `serverinfo` | `servericon` | `help` | `ping` | `id` | `sistem` | `invite` | `donate` | `sugerir` | `reportbug` | `votação` | `anunciar` | `say` | `sorteio`', false)
.addField('<:control:823569826634924075>・Comandos de diversão - (7)', '`kiss` | `avatar` | `hug` | `slap` | `lenny` | `spotify` | `8ball`', false)
.addField('<a:terrinha:825415569456627712> ・ Comandos Minecraft - (2)', '`mcskin` | `mcavatar`', false)
.addField('<:money:825854999455727646> ・ Economia e Social - (10)', '`daily` | `work` | `cerejas` | `apostar` | `perfil` | `casar` | `wallpaper` | `divorciar` | `pay` | `rep`')
.setImage("https://cdn.discordapp.com/attachments/801447863036543006/810887473738940416/Design_sem_nome_4.png")
.setColor('RED')
.setThumbnail(gAvatar)
message.dicstyReply(embed)
}}