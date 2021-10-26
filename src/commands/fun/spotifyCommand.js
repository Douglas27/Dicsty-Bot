const Discord = require("discord.js");
const convert = require("parse-ms");
module.exports = {
    name: "spotify",
    category: "fun",
    aliases: ['spotify', 'msc', 'sptf', 'música'],
    async run(client, message, args) {
    let user;
    if (message.mentions.users.first()) {
        user = message.mentions.users.first();
    } else {
        user = message.author;
    }

    let status;
    if (user.presence.activities.length === 1) status = user.presence.activities[0];
    else if (user.presence.activities.length > 1) status = user.presence.activities[1];

    if (user.presence.activities.length === 0 || status.name !== "Spotify" && status.type !== "LISTENING") {
        return message.channel.send("<a:no:792088988785311754> | Esse usuário não está escutando ou usando Spotify no momento!");
    }

    if (status !== null && status.type === "LISTENING" && status.name === "Spotify" && status.assets !== null) {
        let image = `https://i.scdn.co/image/${status.assets.largeImage.slice(8)}`,
            url = `https:/open.spotify.com/track/${status.syncID}`,
            name = status.details,
            artist = status.state,
            album = status.assets.largeText,
            timeStart = status.timestamps.start,
            timeEnd = status.timestamps.end,
            timeConvert = convert(timeEnd - timeStart);

        let minutes = timeConvert.minutes < 10 ? `0${timeConvert.minutes}` : timeConvert.minutes;
        let seconds = timeConvert.seconds < 10 ? `0${timeConvert.seconds}` : timeConvert.seconds;
        let time = `${minutes}:${seconds}`;

        const embed = new Discord.MessageEmbed()
        .setTitle("<:Spotify:787500125676240926> Música tocando agora!", "https://image.flaticon.com/icons/svg/2111/2111624.svg")
        .setColor('RED')
        .setThumbnail(image)
        .addField("Nome:", name, true)
        .addField("Album:", album, true)
        .addField("Artista:", artist, true)
        .addField("Duração:", time, false)
        .addField("Escutando agora no Spotify!", `[\`${artist} - ${name}\`](${url})`, false)
        message.dicstyReply(`<@${message.author.id}>`, { embed });
        //abc
    }
}
}