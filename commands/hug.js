const image_api = require('anime-images-api')

const api = new image_api('GET')

module.exports = {
    name: 'hug',
    permissions: ["SEND_MESSAGES"],
    cooldown: 0,
    description: "!",
    execute(Discord, client, message, args, cmd){

        api.getHugImage().then(res => {
            const imageEmbed = new Discord.MessageEmbed()

            .setColor('RANDOM')
            .setImage(res.image)
            .setFooter(`Requested by ${message.author.username}`, `${message.author.displayAvatarURL({ dynamic: true })}`)
                message.channel.send(imageEmbed)
        })
    }
}