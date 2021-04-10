const Discord = require('discord.js');
const client = new Discord.Client();

const keyword = 'divorce' || 'ex-wife' || 'tharyya';

const fs = require('fs');

const _ = require("lodash");

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.on('message', message => {
    if(!message.content == (keyword)|| message.author.bot) return;

    const args = message.content.slice(keyword).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'divorce'){
        client.commands.get('divorce').execute(message, args);
    }
});

client.once('ready',() => {
    console.log('Quintus is online!');
});

client.login('ODMwNDE0MDE1NTIzNDU0OTc3.YHGVUQ.kzV3Q5yNYRL_Ks16L_Yopo9cPnk');