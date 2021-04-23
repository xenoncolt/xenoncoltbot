const HMfull = require("hmfull");

module.exports = {
    name: 'animewallpaper',
    cooldown: 0,
    permissions: ["SEND_MESSAGES"],
    description: "!",
    execute(Discord, client, message, args, cmd){

        const animewallpaper = await HMfull.HMtai.sfw.wallpaper()

            const imageEmbed = new Discord.MessageEmbed()

            .setColor('RANDOM')
            .setImage(animewallpaper.url)
            .setFooter(`Requested by ${message.author.username}`, `${message.author.displayAvatarURL({ dynamic: true })}`)
                message.channel.send(imageEmbed)
        
    }
}