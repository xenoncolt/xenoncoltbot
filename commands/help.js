module.exports = {
    name: 'help',
    permissions: ["SEND_MESSAGES"],
    description: "!",
    execute(Discord, client, message, args, cmd) {
        const newEmbed = new Discord.MessageEmbed()
    .setColor('#326BE3')
    .setTitle('AVAILABLE COMMANDS')
    .setAuthor('Xenon Colt', 'https://cdn.discordapp.com/attachments/786550102650126358/824307387783315466/XENON_3.png', 'https://discord.gg/Ab6NgSSqXQ')
    .setThumbnail('https://cdn.discordapp.com/attachments/782560503212802078/806058411808653352/Untitled-3gg.png')
    .addFields(
        { name: 'Prefix', value: '"+"', inline: true },
        { name: 'p (song name)', value: 'Play music in voice channel', inline: true },
        { name: 'stop', value: 'Stop music', inline: true },
        { name: 'skip', value: 'Next music', inline: true },
        { name: 'info', value: 'Bot Info', inline: true },
        { name: 'version/versn/vrsn', value: 'Bot version info', inline: true },
        { name: 'instagram', value: 'Bot owner instagram', inline: true },
        { name: 'icon/pfp/profilepic', value: 'Xenon will sent your profile picture.', inline: true },
        { name: 'weather (City name, Country name)', value: 'Weather Information', inline: true },
        { name: 'xenon (ask a qus)', value: 'Bot will answer your question.', inline: true },
        { name: 'invite', value: 'Invite Link', inline: true },
        { name: 'clear/clr/delete', value: '1~100 Clear message.', inline: true }
    )
    .setImage('https://www.spigotmc.org/attachments/cool-text-commands-271055509278412-png.307323/')
    .setFooter('Attenion: You must use "prefix" before write a command!');
message.channel.send(newEmbed);

    }
}