module.exports = {
    name: 'helpmusic',
    cooldown: 0,
    permissions: ["SEND_MESSAGES"],
    description: "!",
    execute(Discord, client, message, args, cmd) {
        const newEmbed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('Music 🎵')
    .setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL({ dynamic: true })}`, `https://discord.gg/Ab6NgSSqXQ`)
    .setDescription(' \`stop\`')
    .setThumbnail('https://cdn.discordapp.com/attachments/786550102650126358/830385393244700702/xenon.gif')
    .addFields(
        { name: '**SONG PLAY**', value: '\`p (SONG NAME/LINK)\`', inline: true },
        { name: '**PAUSE**', value: '\`pause\`', inline: true },
        { name: '**RESUME**', value: '\`resume\`', inline: true },
        { name: '**LOOP (On/Off)**', value: '\`loop\`', inline: true },
        { name: '**NEXT MUSIC**', value: '\`skip\`', inline: true },
        { name: '**STOP MUSIC**', value: '\`stop\`', inline: true },
        { name: '**NOW PLAYING**', value: '\`nowplaying\`, \`np\`, \`q\`', inline: true}
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