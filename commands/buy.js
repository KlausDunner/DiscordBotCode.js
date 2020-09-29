const db = require('quick.db');
const Discord = require('discord.js');

module.exports = {
    name: "buy",
    description: "Buy an item from the store",

    async run (client, message, args) {
        let purchase = args.join(" ");
        if(!purchase) return message.channel.send('Please provide an item to buy')
        let items = await db.fetch(message.author.id, { items: [] });
        let amount = await db.fetch(`money_${message.guild.id}_${message.author.id}`)

        if(purchase === 'car' || 'Car'){
            if(amount < 500) return message.channel.send('You do not have enough money to buy this item. Please try another one');
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 500);
            db.push(message.author.id, "Car");
            message.channel.send('Successfully bought one car')
        }
        if(purchase === 'watch' || 'Watch'){
            if(amount < 250) return message.channel.send('You do not have enough money to buy this item. Please try another one');
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 250);
            db.push(message.author.id, "Watch");
            message.channel.send('Successfully bought one car')
        }
        if(purchase === 'LANARHOADES' || 'LANARHOADES'){
            if(amount < 20000) return message.channel.send('You do not have enough money to buy this item. Please try another one');
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 20000);
            db.push(message.author.id, "LANARHOADES");
            message.channel.send('Successfully bought one lana xdd')
        }
        if(purchase === 'nose que mas poner' || 'nose que mas poner'){
            if(amount < 500) return message.channel.send('You do not have enough money to buy this item. Please try another one');
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 500);
            db.push(message.author.id, "nose que mas poner");
            message.channel.send('Successfully bought one nose que mas poner')
        }
        if(purchase === 'pan_con_mayo' || 'pan_con_mayo'){
            if(amount < 5) return message.channel.send('losiento pero solo dunner puede comprar esto');
            db.subtract(`money_${message.guild.id}_${message.author.id}`, 5);
            db.push(message.author.id, "pan_con_mayo");
            message.channel.send('Successfully bought one pan con mayo')
        }
    }
}