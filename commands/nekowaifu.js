const HMfull = require("hmfull");

module.exports = {
    name: 'nekowaifu',
    aliases: ['nekow', 'nw'],
    cooldown: 0,
    permissions: ["SEND_MESSAGES"],
    description: "!",
    execute(Discord, client, message, args, cmd){

        const neko = await HMfull.HMtai.sfw.neko()

            const imageEmbed = new Discord.MessageEmbed()

            .setColor('RANDOM')
            .setImage(neko.url)
            .setFooter(`Requested by ${message.author.username}`, `${message.author.displayAvatarURL({ dynamic: true })}`)
                message.channel.send(imageEmbed)
        
    }
}