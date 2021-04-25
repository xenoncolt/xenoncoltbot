module.exports = {
    name: 'helpanime',
    cooldown: 0,
    permissions: ["SEND_MESSAGES"],
    description: "!",
    execute(Discord, client, message, args, cmd) {
        const newEmbed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('ANIME👩')
    .setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL({ dynamic: true })}`, `https://discord.gg/Ab6NgSSqXQ`)
    .setThumbnail('https://cdn.discordapp.com/attachments/786550102650126358/830385393244700702/xenon.gif')
    .addFields(
        { name: '**Hug GIF**', value: '\`hug\`', inline: true },
        //{ name: '**Kill GIF**', value: '\`kill\`', inline: true },
        { name: '**Kiss GIF**', value: '\`kiss\`', inline: true },
        { name: '**Pat GIF**', value: '\`pat\`', inline: true },
        { name: '**Punch GIF**', value: '\`punch\`', inline: true },
        { name: '**Slap GIF**', value: '\`slap\`', inline: true },
        //{ name: '**Wink GIF**', value: '\`wink\`', inline: true },
        { name: '**Random GIF**', value: '\`random\`, \`rand\`', inline: true },
        { name: '**Anime Wallpaper**', value: '\`animewallpaper\`', inline: true },
        { name: '**Neko Waifu**', value: '\`nekowaifu\`, \`nekow\`, \`nw\`', inline: true },
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