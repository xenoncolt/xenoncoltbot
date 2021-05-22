const Discord = require('discord.js');

require('dotenv').config();

const client = new Discord.Client();


client.commands = new Discord.Collection();
client.events = new Discord.Collection();

client.once('ready', () => {
    console.log('sundai command is online!');
    setInterval(() => {

        stateswitch = !stateswitch;

        if (stateswitch)
            client.user.setActivity(`${PREFIX}help | TEAM GX (Xavier)`, { type: "LISTENING" });
        else
            client.user.setActivity(`${client.guilds.cache.reduce((c, g) => c + g.memberCount, 0)} Users | ${client.guilds.cache.size} Servers`, { type: "LISTENING" });
    }, (5000));
})


['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(Discord, client);
})

client.login(process.env.DISCORD_TOKEN);