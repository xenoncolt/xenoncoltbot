module.exports = {
    name: 'helpfun',
    cooldown: 0,
    permissions: ["SEND_MESSAGES"],
    description: "!",
    execute(Discord, client, message, args, cmd) {
        const newEmbed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('FUN🎪')
    .setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL({ dynamic: true })}`, `https://discord.gg/Ab6NgSSqXQ`)
    .setThumbnail('https://cdn.discordapp.com/attachments/786550102650126358/830385393244700702/xenon.gif')
    .addFields(
        { name: '**Q&A**', value: '\`sundai (ask a qus)\`', inline: true },
    )
    .setFooter('Attenion: Use "prefix" before write a command!');

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