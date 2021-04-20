module.exports = {
    name: 'helpmoderation',
    permissions: ["SEND_MESSAGES"],
    description: "!",
    execute(Discord, client, message, args, cmd) {
        const newEmbed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('Moderation🛠️ (Only Admin)')
    .setAuthor('Xenon Colt', 'https://cdn.discordapp.com/attachments/786550102650126358/824307387783315466/XENON_3.png', 'https://discord.gg/Ab6NgSSqXQ')
    .setDescription('\`clear/clr/delete (1~100)\`')
    .setThumbnail('https://cdn.discordapp.com/attachments/786550102650126358/830385393244700702/xenon.gif')
    .setFooter('Attenion: Use "prefix" before write a command!');
message.author.send(newEmbed);
message.channel.send('Please check your **DM**.');

    }
}