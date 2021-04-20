module.exports = {
    name: 'helpsearch',
    cooldown: 0,
    permissions: ["SEND_MESSAGES"],
    description: "!",
    execute(Discord, client, message, args, cmd) {
        const newEmbed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('Search🔎')
    .setAuthor('Xenon Colt', 'https://cdn.discordapp.com/attachments/786550102650126358/824307387783315466/XENON_3.png', 'https://discord.gg/Ab6NgSSqXQ')
    .setThumbnail('https://cdn.discordapp.com/attachments/786550102650126358/830385393244700702/xenon.gif')
    .addFields(
        { name: '**spotify**', value: '\`spotifysearch/spoti (SONG NAME)\`', inline: true },
        { name: '**Weather**', value: '\`weather (CITY NAME, COUNTRY NAME)\`', inline: true },
        { name: '**Your Profile Picture**', value: '\`icon/pfp/profilepic\`', inline: true },
        { name: '**Other Profile Picture**', value: '\`icon/pfp/profilepic (@mention)\`', inline: true }
    )
    .setFooter('Attenion: Use "prefix" before write a command!');
message.channel.send(newEmbed);

    }
}