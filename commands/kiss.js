const HMfull = require("hmfull");

module.exports = {
    name: 'kiss',
    cooldown: 0,
    permissions: ["SEND_MESSAGES"],
    description: "!",
    async execute(Discord, client, message, args, cmd) {

        let member = message.mentions.users.first() || message.author

        const kiss = await HMfull.Nekos.sfw.kiss()

            const imageEmbed = new Discord.MessageEmbed()

            .setColor('RANDOM')
            .setTitle(`${message.author.username} kiss ${member.username}`)
            .setImage(kiss.url)
            .setFooter(`Requested by ${message.author.username}`, `${message.author.displayAvatarURL({ dynamic: true })}`)
                message.channel.send(imageEmbed)
        
    }
}