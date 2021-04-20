
module.exports = {
    name: "bugreport",
    aliases: ['bug', 'reportbug', 'problem'],
    cooldown: 0,
    permissions: ["SEND_MESSAGES"],
    description: 'let users report bugs',
    async execute(Discord, client, message, args, cmd){
        
        const channel = client.channels.cache.get('828281141240659998')

         
        const query = args.join(' ');
        if(!query) return message.reply('Please specify the bug')
        
         
        const reportEmbed = new Discord.MessageEmbed()
        .setTitle('New Bug!')
        .addField('Author', message.author.toString(), true)
        .addField('Guild', message.guild.name, true)
        .addField('Report', query)
        .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
        .setTimestamp()
        channel.send(reportEmbed);
        
        message.channel.send("**Bug report has been sent!**")
    }
}