const HMfull = require("hmfull");

module.exports = {
    name: 'kiss',
    cooldown: 0,
    permissions: ["SEND_MESSAGES"],
    description: "!",
    async execute(Discord, client, message, args, cmd) {

        const kiss = await HMfull.Nekos.sfw.kiss()

            const imageEmbed = new Discord.MessageEmbed()

            .setColor('RANDOM')
            .setImage(kiss.url)
            .setFooter(`Requested by ${message.author.username}`, `${message.author.displayAvatarURL({ dynamic: true })}`)
                message.channel.send(imageEmbed)
        
    }
}