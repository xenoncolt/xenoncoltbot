const HMfull = require("hmfull");

module.exports = {
    name: 'slap',
    cooldown: 0,
    permissions: ["SEND_MESSAGES"],
    description: "!",
    execute(Discord, client, message, args, cmd){

        const slap = await HMfull.Nekos.sfw.hug()

            const imageEmbed = new Discord.MessageEmbed()

            .setColor('RANDOM')
            .setImage(slap.url)
            .setFooter(`Requested by ${message.author.username}`, `${message.author.displayAvatarURL({ dynamic: true })}`)
                message.channel.send(imageEmbed)
        
    }
}