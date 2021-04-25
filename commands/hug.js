const HMfull = require("hmfull");

module.exports = {
    name: 'hug',
    permissions: ["SEND_MESSAGES"],
    cooldown: 0,
    description: "!",
    async execute(Discord, client, message, args, cmd) {

        let member = message.mentions.users.first() || message.author

        const hug = await HMfull.Nekos.sfw.hug()

            const imageEmbed = new Discord.MessageEmbed()

            .setColor('RANDOM')
            .setTitle(`${message.author.username} hug ${member.username}`)
            .setImage(hug.url)
            .setFooter(`Requested by ${message.author.username}`, `${message.author.displayAvatarURL({ dynamic: true })}`)
                message.channel.send(imageEmbed)
        
    }
}