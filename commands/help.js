const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
    name: "help",
    description: "The help command, what do you expect?",

    async run (client, message, args){

        //Sort your commands into categories, and make seperate embeds for each category

        const moderation = new Discord.MessageEmbed()
        .setTitle('Moderation')
        .addField('`$kick`', 'Kicks a member from your server via mention or ID')
        .addField('`$ban`', 'Bans a member from your server via mention or ID')
        .addField('`$clear`', 'elimina mensajes')
        .addField('`$warn`', 'Warn a member')
        .addField('`$warnings`', 'Check a users warnings')
        .addField('`$deletewarns`', 'Delete a members warns')
        .setTimestamp()

        const fun = new Discord.MessageEmbed()
        .setTitle('Fun')
        .addField('`$meme`', 'Generates a random meme')
        .addField('`$changemymind`', 'Trigegr yourself')
        .addField('`$ascii`', 'Converts text into ascii')
        .addField('`$image`', 'Generates a random image')
        .addField('`$buy`', 'Buy an item from the store')
        .addField('`$avatar`', 'Brodcast someones avatar')
        .addField('`$store`', 'View the store')
        .addField('`$inventory`', 'View your inventory')
        .addField('`$trigger`', 'Trigegr yourself')
        .setTimestamp()

        const utility = new Discord.MessageEmbed()
        .setTitle('Utlity')
        .addField('`$calculate`','proximamente xd')
        .addField('`$user-info`','Shows the info of a user' )
        .addField('`$ping`', 'Get the bot\'s API ping')
        .addField('`$weather`', 'Checks weather forecast for provided location')
        .addField('`$covid`', 'Track a country or worldwide COVID-19 cases')
        .setTimestamp()

        const NOTE = new Discord.MessageEmbed()
        .addField('`$invite`','Sens invite link of the bot')
        .addField('`NOTE`','CHECK DM, MUSIC COMMANDS WERE SEND TO DM' )
        .setTimestamp()


        const pages = [
                moderation,
                fun,
                utility,
                NOTE
        ]

        const emojiList = ["⏪", "⏩"];

        const timeout = '120000';

        pagination(message, pages, emojiList, timeout)
    }
}