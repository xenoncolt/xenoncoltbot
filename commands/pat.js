const HMfull = require("hmfull");

module.exports = {
    name: 'pat',
    cooldown: 0,
    permissions: ["SEND_MESSAGES"],
    description: "!",
    async execute(Discord, client, message, args, cmd) {

        let member = message.mentions.users.first() || message.author

        const pat = await HMfull.Nekos.sfw.pat()

            const imageEmbed = new Discord.MessageEmbed()

            .setColor('RANDOM')
            .setTitle(`${message.author.username} pats ${member.username}`)
            .setImage(pat.url)
            .setFooter(`Requested by ${message.author.username}`, `${message.author.displayAvatarURL({ dynamic: true })}`)
                message.channel.send(imageEmbed)
        
    }
}