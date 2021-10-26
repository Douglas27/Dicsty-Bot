const chalk = require("chalk");
const { AutoPoster } = require('topgg-autoposter');
const config = require('../../config.json')

module.exports = async (client) => {
  const ap = AutoPoster(client.config.topgg, client)

  ap.on('posted', () => {
    console.log(`${chalk.white('Status no Top.gg foi publicado com sucesso!')}\n-----------------------------`)
  })

  const status = [
    { name: `❓ | Utilize d.help`, type: 'PLAYING' },
    { name: `⚒️ | Minecraft`, type: 5 },
    { name: '🐦 | Me siga no Twitter: @DicstyBot', type: 'STREAMING', url: 'https://www.twitch.tv/jp_portoo' },
    { name: '🧸 | Fui criada pelo: João P.#0001', type: 'LISTENING' },
    { name: `🎈 | Fui criada dia: 21 de Setembro de 2020`, type: 'PLAYING' },
    { name: `🍒 | Leia meu About Me!`, type: 'PLAYING' },
    { name: '📧 | Vote em mim no top.gg!', type: 5 },
    { name: `🥰 | ${client.users.cache.size} usuários maravilhosos!`, type: 'WATCHING' },
    { name: `✨ | ${client.guilds.cache.size} lugares maravilhosos!`, type: `WATCHING` },
    { name: '📡 | v7.1', type: 'PLAYING' },
  ];

  setInterval(() => {
    const randomStatus = status[Math.floor(Math.random() * status.length)];
    client.user.setPresence({ activity: randomStatus });
  }, 8000);

  //log de inicialização
  console.log(
    `-----------------------------\nIniciei monitorando ${chalk.blue(`${client.guilds.cache.size} servidores.`)}\n-----------------------------`
  );
  console.log(`Iniciei monitorando ${chalk.yellow(`${client.users.cache.size} usuários.`)}\n-----------------------------`);
};
