const { MessageEmbed } = require("discord.js");

module.exports = async (client, message) => {
  if (message.content == `<@${client.user.id}>` || message.content == `<@!${client.user.id}>`) {

    if (message.author.bot) return;

    const embed = new MessageEmbed()
      .setColor('RED')
      .setAuthor(`🍒 | Me Mencionou?`)
      .setTitle(`Minhas informações...`)
      .setThumbnail('https://media.discordapp.net/attachments/764448917768896522/794694636991938600/unknown.png?width=480&height=480')
      .addField('<:fix:823569976019124254> Meu prefixo:', '`d.`')
      .addField('<:developer:823569744677830687> Developer:', '`Jão#8854`')
      .addField('❓ Para obter ajuda utilize:', '`d.help`')
      .addField('📨 Me adicione com :', '`d.invite`')
      .addField('📢 Meu site:', `[dicsty.glitch.me](https://dicsty.glitch.me)`)
      .setImage("https://cdn.discordapp.com/attachments/801447863036543006/810887473738940416/Design_sem_nome_4.png")
      .addField('📮 Vote em mim em:', `[top.gg/bot/757703647772540953](https://top.gg/bot/757703647772540953)`)
      .setFooter(`${message.guild.name} • © Todos os direitos reservados.`, message.guild.iconURL({ dynamic: true, format: "png", size: 1024 }))
    message.dicstyReply(embed);
  }

  if (message.author.bot || message.channel.type === "dm") return;
  if (!message.guild) return;
  if (!message.channel.send) return;

  const messageArray = message.content.split(" ");
  const cmd = messageArray[0].toLowerCase();
  const args = messageArray.slice(1);
  if (!message.content.startsWith(client.config.prefix)) return;

  const command = client.commands.get(cmd.slice(client.config.prefix.length)) || client.commands.get(client.aliases.get(cmd.slice(client.config.prefix.length)));
  if (command) command.run(client, message, args);
  if (!command) return;


};

