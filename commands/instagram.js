module.exports = {
    name: 'instagram',
    aliases: ['insta'],
    cooldown: 0,
    permissions: ["SEND_MESSAGES"],
    description: "This is a instagram link command!",
    execute(Discord, client, message, args, cmd) {
        const newEmbed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setTitle('Instagram ID')
	.setURL('https://www.instagram.com/xenon.colt')
    .setAuthor('Xenon Colt', 'https://cdn.discordapp.com/attachments/786550102650126358/824307387783315466/XENON_3.png', 'https://discord.gg/Ab6NgSSqXQ')
    .setThumbnail('https://cdn.discordapp.com/attachments/782560503212802078/806058411808653352/Untitled-3gg.png')
    .setTimestamp()
	.setFooter('Please click blue color "Instagram ID" ');

    return message.author.send(newEmbed)
	.then(() => {
		if (message.channel.type === 'dm') return;
		message.reply('I\'ve sent you a DM with all my commands! Please check your DM.');
	})
	.catch(error => {
		console.error(`Could not send help DM to ${message.author.tag}.\n`, error);
		message.reply('it seems like I can\'t DM you! Do you have DMs disabled?');
	});

    }
}