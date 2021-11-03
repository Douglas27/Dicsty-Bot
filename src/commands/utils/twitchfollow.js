const Discord = require('discord.js');
const twitch = require("easytwitch")

module.exports = {
  name: "twitchfollowers",
  category: "utils",
  aliases: ['twitch', 'twitchfollow', 'twitchfollower'],
  async run(client, message, args) {

        let followers = await twitch.followers(args[0]);
        message.channel.send(`O canal ${args[0]} tem ${followers} subs!`)

  }}