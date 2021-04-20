const Discord = require('discord.js'); // defining Discord


module.exports = {
    name: "spotifysearch",
    aliases: ['spoti'],
    cooldown: 0,
    permissions: ["SEND_MESSAGES"],
    description: "This is a spotify search command link.",

    async execute(Discord, client, message, args, cmd){
        let msglink = args.join('%20') 
        let msg = args.join(' ') 
        
        if(!args[0]) return message.channel.send('Please give me a song name to search') 
        
        let embed = new Discord.MessageEmbed() 
        .setColor('RANDOM')
        .setDescription(`[${msg}](https://open.spotify.com/search/${msglink})`) 

        message.channel.send(embed) 
    }
}