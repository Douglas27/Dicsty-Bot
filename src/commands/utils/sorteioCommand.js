  
const Discord = require('discord.js');
let started_time_duration = ""
let time_duration = ""
module.exports = {
  name: "sorteio",
  aliases: ['sorteio'],
  async run(client, message, args) {
    async function sorteio() {
        let time_length = ""
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('<a:no:792088988785311754> | Você não tem a permissão `ADMINISTRATOR` para executar esse comando.');
        if (!message.content.split(' ')[1]) return message.channel.send('Examplo de como utilizar : ``d.sorteio <tempo> <id do canal de texto> <prêmio>``.');
        const prize = message.content.split(' ').slice(3).join(' ');
        let channel = message.content.split(' ')[2]
        const started_time_duration_start = message.content.split(' ')[1]
        if (started_time_duration_start.toLowerCase().includes("h")){
            started_time_duration = started_time_duration_start.split("h")[0]
            time_duration = started_time_duration * 3600000
            if (time_duration == 3600000){time_length = "hora"}
            if (time_duration > 7200000){time_length = "horas"}
        }
        if (started_time_duration_start.toLowerCase().includes("m")){
            started_time_duration = started_time_duration_start.split('m')[0]
            time_duration = started_time_duration * 60000
            if (time_duration < 3600000){time_length = "minutos"}
            if (time_duration == 60000){time_length = "minuto"}
        }
        if (isNaN(started_time_duration)) return message.channel.send('A duração tem que ser em números!');
        if (started_time_duration < 1) return message.channel.send('Depois do número coloque "m" para minutos e "h" para horas.');
        if (!message.guild.channels.cache.find(channels => channels.id === `${channel}`)) return message.channel.send("Coloque um id do canal de texto válido.")
        if (prize === '') return message.channel.send('Coloque um prêmio!');
       
        const embed = new Discord.MessageEmbed()
          .setTitle(`${prize}`)
          .setDescription(`Reaja com 🎉 para entrar!\nTempo de duração: **${started_time_duration}** ${time_length}\n\nSorteio criado por: ${message.author}`)
          .setTimestamp(Date.now() + time_duration)
          .setFooter('Acaba')
        let msg = await client.channels.cache.get(`${channel}`).send(':tada: **SORTEIO** :tada:', embed)
          await msg.react('🎉')
            setTimeout(() => {
              msg.reactions.cache.get('🎉').users.remove(client.user.id)
                setTimeout(() => {
        let winner = msg.reactions.cache.get('🎉').users.cache.random();
        if (msg.reactions.cache.get('🎉').users.cache.size < 1) {
            const winner_embed = new Discord.MessageEmbed()
                .setTitle(`${prize}`)
                .setColor('RED')
                .setDescription(`Ninguém entrou no sorteio 🙁\nSorteio criado por: ${message.author}`)
                .setTimestamp()
                .setFooter('Acaba')
                msg.edit(':tada: **SORTEIO ENCERRADO** :tada:', winner_embed);
        }
        if (!msg.reactions.cache.get('🎉').users.cache.size < 1) {
            const winner_embed = new Discord.MessageEmbed()
                .setTitle(`${prize}`)
                .setDescription(`Ganhador:\n${winner}\n\nSorteio criado por: ${message.author}`)
                .setTimestamp()
                .setColor('RED')
                .setFooter('Sorteio finalizado')
                msg.edit(':tada: **Sorteio finalizado** :tada:', winner_embed);
              }
        }, 1000);
        }, time_duration);
        }
        sorteio();
    }}