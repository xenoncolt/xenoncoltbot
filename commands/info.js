module.exports = {
    name: 'info',
    cooldown: 0,
    permissions: ["SEND_MESSAGES"],
    description: "!",
    execute(Discord, client, message, args, cmd) {
        const newEmbed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('Bot Info ❕')
    .setAuthor(`${message.author.username}`, `${message.author.displayAvatarURL({ dynamic: true })}`, `https://discord.gg/Ab6NgSSqXQ`)
    .setThumbnail('https://cdn.discordapp.com/attachments/786550102650126358/830385393244700702/xenon.gif')
    .addFields(
        { name: '**Version**', value: '\`version\`, \`vrsn\`', inline: true },
        { name: '**Owner Instagram**', value: '\`instagram\`, \`insta\`', inline: true },
        { name: '**Patch Note**', value: '\`https://discord.gg/xsYpwBZnTP\`', inline: true },
        
    )
    .setFooter('**Attenion:** Use "prefix" before write a command!');
message.channel.send(newEmbed);

    }
}