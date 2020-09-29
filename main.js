const Discord = require('discord.js');

const client = new Discord.Client();

const { token } = require('./config.json');

const { readdirSync } = require('fs');

const { join } = require('path');
const moment = require("moment")
const cheerio = require('cheerio');

const config = require('./config.json');
client.config = config;



const db = require('quick.db');


client.commands= new Discord.Collection();

const prefix = '$';
//pipe ql pon el prefix q querai menos $
const commandFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const command = require(join(__dirname, "commands", `${file}`));
    client.commands.set(command.name, command);
}


client.on("error", console.error);

client.on('ready', () => {
    console.log('BOT listo [main.js]');
    client.user.setActivity(`$help`, { type: 'STREAMING', url:"https://github.com/VicenteDunner"}).catch(console.error);
});


let stats = {
    serverID: '<ID>',
    total: "<ID>",
    member: "<ID>",
    bots: "<ID>"
}



client.on('guildMemberAdd', member => {
    if(member.guild.id !== stats.serverID) return;
    client.channels.cache.get(stats.total).setName(`Total Users: ${member.guild.memberCount}`);
    client.channels.cache.get(stats.member).setName(`Members: ${member.guild.members.cache.filter(m => !m.user.bot).size}`);
    client.channels.cache.get(stats.bots).setName(`Bots: ${member.guild.members.cache.filter(m => m.user.bot).size}`);
})

client.on('guildMemberRemove', member => {
    if(member.guild.id !== stats.serverID) return;
    client.channels.cache.get(stats.total).setName(`Total Users: ${member.guild.memberCount}`);
    client.channels.cache.get(stats.member).setName(`Members: ${member.guild.members.cache.filter(m => !m.user.bot).size}`);
    client.channels.cache.get(stats.bots).setName(`Bots: ${member.guild.members.cache.filter(m => m.user.bot).size}`);

    
})

client.on("message", async message => {

    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;

    if(message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);

        const command = args.shift().toLowerCase();

        if(!client.commands.has(command)) return;

        let profile = await leveling.Fetch(message.author.id);
        leveling.AddXp(message.author.id, 15);

        


        try {
            client.commands.get(command).run(client, message, args);

        } catch (error){
            console.error(error);
        }
    }
})


client.on("message", (message) => {
    if(message.content.startsWith("ip")) {
      message.channel.send("Tropadeweones20.aternos.me");
    }
  
  });

  client.on("message", (message) => {
    if(message.content.startsWith("$invite")) {
      message.channel.send("https://discord.com/oauth2/authorize?client_id=717805693469720767&scope=bot&permissions=70642768&guild_id=0");
    }
  
  });  

 
 client.login("PUT TOKEN HERE")
