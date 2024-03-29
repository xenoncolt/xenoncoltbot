const image_api = require('anime-images-api')

const api = new image_api('GET')

module.exports = {
    name: 'random',
    aliases: ['rand'],
    cooldown: 0,
    permissions: ["SEND_MESSAGES"],
    description: "!",
    execute(Discord, client, message, args, cmd){

        api.getRandomImage().then(res => {
            const imageEmbed = new Discord.MessageEmbed()

            .setColor('RANDOM')
            .setImage(res.image)
            .setFooter(`Requested by ${message.author.username}`, `${message.author.displayAvatarURL({ dynamic: true })}`)
                message.channel.send(imageEmbed)
        })
    }
}