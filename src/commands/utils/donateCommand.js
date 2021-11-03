const Discord = require("discord.js")
module.exports = {
  name: "donate",
  category: "utils",
  aliases: ['donate', 'doar'],
  async run(client, message, args) {

    let avatar = client.user.displayAvatarURL({dynamic: true, format: 'png' });

  //abc
let embed = new Discord.MessageEmbed()

    .setAuthor("「🍒」Dicsty Donate")
    .setDescription('Bom, não sei se você sabe, mas eu preciso de dinheiro para ficar online para você e para os outros usuários <:sad_cat_hand:829320813060292629> \n\nVocê pode doar pelo link http://bit.ly/dicsty-donate ou clicando [aqui](http://bit.ly/dicsty-donate), lembrando que a maior parte da sua donate para mim irá para minha host, e o restinho fica para o meu developer hihi <a:bongo_cat_crazy:829321102550368257> \n \n')
    .addField('Atenção!', '_Você está fazendo uma doação então **você não receberá nada em troca**_ <a:cat_happy_jump:829321178597818398> \n \n \n')
    .setColor('RED')
    .setThumbnail(avatar)
message.dicstyReply(embed)

}}