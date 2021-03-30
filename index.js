const Discord = require('discord.js');

require('dotenv').config();

const client = new Discord.Client();


client.commands = new Discord.Collection();
client.events = new Discord.Collection();

client.once('ready', () => {
    console.log('xenon command is online!');
    client.user.setActivity('Prefix x | xhelp', { type: 'PLAYING' }).catch(console.error);
});


['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(Discord, client);
})

client.login(process.env.DISCORD_TOKEN);