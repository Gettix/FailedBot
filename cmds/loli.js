const Discord = require("discord.js");
const agent = require("superagent");

exports.run = async(client, message, args) => {
    if(!message.channel.nsfw) return messge.reply("Использовать только в nsfw каналах.");

    agent.get("https://nekos.life/api/v2/img/smallboobs").end((err, response) => {
        const embed = new Discord.RichEmbed();
        embed.setImage(response.body.url);
        embed.setColor("RANDOM");
        embed.setFooter("Powered by nekos.life", "https://i.imgur.com/hHlgnuW.png");
        message.channel.send(embed);
    });
}

module.exports.help = {
    name: "loli"
};
