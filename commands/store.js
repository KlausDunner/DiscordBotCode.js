const Discord = require('discord.js');

module.exports = {
    name: "store",
    description: "View the store",

    async run (client, message, args) {

        const embed = new Discord.MessageEmbed()
        .setTitle('Store')
        .setDescription(`Car - 500 coins \n Watch - 250 coins\n LANARHOADES - 20000 \n nose que mas ponerxd - 100000000000000 \n pan_con_mayo - 5`)
        .setTimestamp();

        message.channel.send(embed);
    }
}