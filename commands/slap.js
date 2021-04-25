const HMfull = require("hmfull");

module.exports = {
    name: 'slap',
    cooldown: 0,
    permissions: ["SEND_MESSAGES"],
    description: "!",
    async execute(Discord, client, message, args, cmd) {

        let member = message.mentions.users.first() || message.author

        const slap = await HMfull.Nekos.sfw.slap()

            const imageEmbed = new Discord.MessageEmbed()

            .setColor('RANDOM')
            .setTitle(`${message.author.username} slaps ${member.username}`)
            .setImage(slap.url)
            .setFooter(`Requested by ${message.author.username}`, `${message.author.displayAvatarURL({ dynamic: true })}`)
                message.channel.send(imageEmbed)
        
    }
}