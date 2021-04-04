module.exports = {
    name: 'instagram',
    aliases: ['insta'],
    permissions: ["SEND_MESSAGES"],
    description: "This is a instagram link command!",
    execute(Discord, client, message, args, cmd) {
        const newEmbed = new Discord.MessageEmbed()
	.setColor('#07F62F')
	.setTitle('Instagram ID')
	.setURL('https://www.instagram.com/xenon.colt')
    .setAuthor('Xenon Colt', 'https://cdn.discordapp.com/attachments/786550102650126358/824307387783315466/XENON_3.png', 'https://discord.gg/Ab6NgSSqXQ')
    .setThumbnail('https://cdn.discordapp.com/attachments/782560503212802078/806058411808653352/Untitled-3gg.png')
	.setFooter('Please click blue color "Instagram ID" ');

message.channel.send(newEmbed);
    }
}