const Discord = require("discord.js");
const config = require("../../../config.json");

module.exports = {
    name: 'ajuda',
    category: "utils",
    run: async (client, message, args) => {
        
    const { commands } = message.client;
    const data = [];

    let avatar = client.user.displayAvatarURL({ dynamic: true, format: 'png', size: 1024 });

    if(!args.length) {
    
    const embed = new Discord.MessageEmbed()

    .setAuthor(`${message.guild.name} - Ajuda`, client.user.displayAvatarURL({ dynamic: true, format: 'png', size: 1024 }))
    .setThumbnail(avatar)
    .setDescription(`**🌵 » [Meu site](https://dicsty.tk)⠀|⠀🌏 » [Top.gg](https://top.gg/bot/757703647772540953)⠀|⠀🐦 » [Twitter](https://twitter.com/DicstyBot)**`)
    .addField('⠀', '<a:0_:905198859783905290> - **Início**', true)
    .addField('⠀', '<a:1_:823568695880056903> - **Moderação**', true)
    .addField('⠀', '<a:2_:823568794995785728> - **Photoshop**', true)
    .addField('⠀', '<a:3_:823568843435409419> - **Diversão**', true)
    .addField('⠀', '<a:4_:823568903913472040> - **Minecraft**', true)
    .addField('⠀', '<a:5_:823568959454314588> - **Economia e Social**', true)
    .addField('⠀', '<a:6_:823569014780854284> - **Utilidade**', true)
    .setColor('RED')
    .setFooter('Dicsty ©', client.user.displayAvatarURL({ dynamic: true, size: 4096 }))

    return message.dicstyReply(`${message.author}`, embed).then(msg => {
        
    msg.react('905198859783905290').then(r => {
    msg.react('823568695880056903').then(r => {
    msg.react('823568794995785728').then(r => {
    msg.react('823568843435409419').then(r => {
    msg.react('823568903913472040').then(r => {
    msg.react('823568959454314588').then(r => {
    msg.react('823569014780854284').then(r => {

    const menuFilter = (reaction, user) => reaction.emoji.id === '905198859783905290' && user.id === message.author.id;
    const modFilter = (reaction, user) => reaction.emoji.id === '823568695880056903' && user.id === message.author.id;
    const imageFilter = (reaction, user) => reaction.emoji.id === '823568794995785728' && user.id === message.author.id;
    const funFilter = (reaction, user) => reaction.emoji.id === '823568843435409419' && user.id === message.author.id;
    const mineFilter = (reaction, user) => reaction.emoji.id === '823568903913472040' && user.id === message.author.id;
    const socialFilter = (reaction, user) => reaction.emoji.id === '823568959454314588' && user.id === message.author.id;
    const utilsFilter = (reaction, user) => reaction.emoji.id === '823569014780854284' && user.id === message.author.id;

    const menu = msg.createReactionCollector(menuFilter);
    const mod = msg.createReactionCollector(modFilter);
    const image = msg.createReactionCollector(imageFilter);
    const fun = msg.createReactionCollector(funFilter);
    const mine = msg.createReactionCollector(mineFilter);
    const social = msg.createReactionCollector(socialFilter);
    const utils = msg.createReactionCollector(utilsFilter);

    const embedmoderation = new Discord.MessageEmbed()

    .setTitle(`Moderação - Total de comandos: \`${commands.filter(command => command.category == "mod").size}\``)
    .setDescription(`• \`${commands.filter(command => command.category == "mod").map(command => command.name).join('\` **|** \`')}\`.`)
    .setColor('RED')
    .setTimestamp()
    .setFooter('Dicsty ©', client.user.displayAvatarURL({ dynamic: true, size: 4096 }))

    const embedutil = new Discord.MessageEmbed()

    .setTitle(`Utilidade - Total de comandos: \`${commands.filter(command => command.category == "utils").size}\``)
    .setDescription(`• \`${commands.filter(command => command.category == "utils").map(command => command.name).join('\` **|** \`')}\`.`)
    .setColor('RED')
    .setTimestamp()
    .setFooter('Dicsty ©', client.user.displayAvatarURL({ dynamic: true, size: 4096 }))

    const embedphotoshop = new Discord.MessageEmbed()

    .setTitle(`Photoshop - Total de comandos: \`${commands.filter(command => command.category == "photoshop").size}\``)
    .setDescription(`• \`${commands.filter(command => command.category == "photoshop").map(command => command.name).join('\` **|** \`')}\`.`)
    .setColor('RED')
    .setTimestamp()
    .setFooter('Dicsty ©', client.user.displayAvatarURL({ dynamic: true, size: 4096 }))

    const embedfun = new Discord.MessageEmbed()

    .setTitle(`Diversão - Total de comandos: \`${commands.filter(command => command.category == "fun").size}\``)
    .setDescription(`• \`${commands.filter(command => command.category == "fun").map(command => command.name).join('\` **|** \`')}\`.`)
    .setColor('RED')
    .setTimestamp()
    .setFooter('Dicsty ©', client.user.displayAvatarURL({ dynamic: true, size: 4096 }))


    const embedmine = new Discord.MessageEmbed()

    .setTitle(`Minecraft - Total de comandos: \`${commands.filter(command => command.category == "mine").size}\``)
    .setDescription(`• \`${commands.filter(command => command.category == "mine").map(command => command.name).join('\` **|** \`')}\`.`)
    .setColor('RED')
    .setTimestamp()
    .setFooter('Dicsty ©', client.user.displayAvatarURL({ dynamic: true, size: 4096 }))

    menu.on('collect', r2 => {
        msg.edit(embed)
    })

    mod.on('collect', r2 => {
        msg.edit(embedmoderation)
    })

    image.on('collect', r2 => {
        msg.edit(embedphotoshop)
    })

    fun.on('collect', r2 => {
        msg.edit(embedfun)
    })

    mine.on('collect', r2 => {
        msg.edit(embedmine)
    })

    utils.on('collect', r2 => {
        msg.edit(embedutil)
    })

    })
    })
    })
    })
    })
    }

    )}
    )}
    )}
}
}

