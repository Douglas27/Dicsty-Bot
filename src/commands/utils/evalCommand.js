const Discord = require('discord.js');
const ownerid = '708493555768885338';
const os = require('os')

module.exports = {
  name: 'eval',
  aliases: ['eval', 'evaluate', 'e'],
  async run(client, message, args) {
    const clean = (text) => {
      if (typeof (text) === 'string') { return text.replace(/`/g, `\`${String.fromCharCode(8203)}`).replace(/@/g, `@${String.fromCharCode(8203)}`); }
      return text;
    };
    if (message.author.id == ownerid) {
        if (!message.guild.me.hasPermission("ADMINISTRATOR"))
          return message.channel
            .send("Você não tem permissão para usar esse comando!")
            .then(msg => msg.delete({ timeout: 5000 }));

    try {


      const util = require('util');
      const code = args.join(' ');
      let evaled = eval(code);
      evaled = util.inspect(evaled, { depth: 1 });
      evaled = evaled.replace(new RegExp('Error', 'g'), undefined);

      if (evaled.length > 1800) evaled = `${evaled.slice(0, 1800)}...`;
      const sucess = new Discord.MessageEmbed()
        .setColor('RED')
        .setTitle('Comando executado com sucesso!')
        .setDescription(`Entrada: \ \ \`\`\`js\n${code}\n\`\`\` \n Saída: \ \ \`\`\`xl\n${clean(evaled)}\n\`\`\``);

      message.dicstyReply(sucess);
    } catch (err) {
      const errorMessage = err.stack.length > 1800 ? `${err.stack.slice(0, 1800)}...` : err.stack;
      const code = args.join(' ');
      const embed = new Discord.MessageEmbed();
      embed.setColor('RED');
      embed.setTitle(`Ocorreu um erro durante a execução!`);
      embed.setDescription(`Entrada: \ \ \`\`\`js\n${code}\n\`\`\` \n Saída: \`\`\`js\n${errorMessage}\`\`\``);

      message.dicstyReply(embed);
    }
  }
}};