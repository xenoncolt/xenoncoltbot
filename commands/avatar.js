module.exports = {
    name: 'avatar',
    aliases: ['icon', 'pfp', 'profilepic'],
    permissions: ["SEND_MESSAGES"],
    cooldown: 0,
    description: 'Return a user(s) avatar picture!',
    //Use your own execute parameters
    execute(Discord, client, message, args, cmd) {
        let member = message.mentions.users.first() || message.author

        let avatar = member.displayAvatarURL({size: 1024})

        const avatermentionembed = new Discord.MessageEmbed()

        .setColor('RANDOM')
        .setTitle(`${member.username}`)
        .setImage(avatar)
        .setFooter(`Requested by ${message.author.username}`, `${message.author.displayAvatarURL({dynamic: true})}`)

        message.channel.send(avatermentionembed);
    }
}