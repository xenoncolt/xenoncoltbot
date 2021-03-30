const Discord = require('discord.js');

require('dotenv').config();

const client = new Discord.Client();


client.commands = new Discord.Collection();
client.events = new Discord.Collection();

client.once('ready', () => {
    console.log('xenon command is online!');
    client.user.setActivity(`${client.guilds.cache.map(s => s.memberCount).reduce((a, b) => a + b)} Users | +help`, { type: 'WATCHING' });
});


['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(Discord, client);
})

client.login(process.env.DISCORD_TOKEN);