module.exports = {
    name: 'helpmusic',
    permissions: ["SEND_MESSAGES"],
    description: "!",
    execute(Discord, client, message, args, cmd) {
        const newEmbed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('Music 🎵')
    .setAuthor('Xenon Colt', 'https://cdn.discordapp.com/attachments/786550102650126358/824307387783315466/XENON_3.png', 'https://discord.gg/Ab6NgSSqXQ')
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
message.author.send(newEmbed);
message.channel.send('Please check your **DM**.');

    }
}