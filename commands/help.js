module.exports = {
    name: 'help',
    cooldown: 0,
    permissions: ["SEND_MESSAGES"],
    description: "!",
    execute(Discord, client, message, args, cmd) {
        const newEmbed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('HELP')
    .setAuthor('Xenon Colt', 'https://cdn.discordapp.com/attachments/786550102650126358/824307387783315466/XENON_3.png', 'https://discord.gg/Ab6NgSSqXQ')
    .setThumbnail('https://cdn.discordapp.com/attachments/786550102650126358/830385393244700702/xenon.gif')
    .addFields(
        { name: '**Prefix**', value: '\`+\`', inline: true },
        { name: '**Music** 🎵', value: '\`helpmusic\`', inline: true },
        { name: '**Search🔎**', value: '\`helpsearch\`', inline: true },
        { name: '**Moderation** 🛠️', value: '\`helpmoderation\`', inline: true },
        { name: '**Utility**👤', value: '\`helputility\`', inline: true },
        { name: '**Fun**🎪', value: '\`helpfun\`', inline: true },
        { name: '**Games**🎮', value: '\`helpgame\`', inline: true },
        { name: '**Bot Info** ❕', value: '\`info\`', inline: true },
        { name: '**Bot Invite** ✉️', value: '\`invite\`', inline: true },
        { name: '**Report Bug** 🗳️', value: '\`reportbug/bug/bugreport/problem (WRITE WHAT IS YOUR PROBLEMS)\`', inline: true }
    )
    .setTimestamp()
    .setFooter('Attenion: Use "prefix" before write a command!');
message.channel.send(newEmbed);

    }
}