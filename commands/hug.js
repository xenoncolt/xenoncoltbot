const HMfull = require("hmfull");

module.exports = {
    name: 'hug',
    permissions: ["SEND_MESSAGES"],
    cooldown: 0,
    description: "!",
    execute(Discord, client, message, args, cmd){

        const hug = await HMfull.Nekos.sfw.hug()

            const imageEmbed = new Discord.MessageEmbed()

            .setColor('RANDOM')
            .setImage(hug.url)
            .setFooter(`Requested by ${message.author.username}`, `${message.author.displayAvatarURL({ dynamic: true })}`)
                message.channel.send(imageEmbed)
        
    }
}