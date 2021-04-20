module.exports = {
    name: 'facebook',
    aliases: ['fb'],
    permissions: ["SEND_MESSAGES"],
    description: "This is a facebook link command!",
    execute(Discord, client, message, args, cmd) {
        const newEmbed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('Facebook ID')
	.setURL('https://www.facebook.com/xenon.colt')
    .setAuthor('Xenon Colt', 'https://cdn.discordapp.com/attachments/786550102650126358/824307387783315466/XENON_3.png', 'https://discord.gg/Ab6NgSSqXQ')
    .setThumbnail('https://cdn.discordapp.com/attachments/782560503212802078/806058411808653352/Untitled-3gg.png')
    .setTimestamp()
	.setFooter('Please click blue color "Facebook ID" ');

message.author.send(newEmbed);
message.channel.send('Please check your **DM**.')
    }
}