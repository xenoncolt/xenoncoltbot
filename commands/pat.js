const image_api = require('anime-images-api')

const api = new image_api('GET')

module.exports = {
    name: 'pat',
    cooldown: 0,
    permissions: ["SEND_MESSAGES"],
    description: "!",
    execute(Discord, client, message, args, cmd){

        api.getPatImage().then(res => {
            const imageEmbed = new Discord.MessageEmbed()

            .setColor('RANDOM')
            .setImage(res.image)
            .setFooter(`Requested by ${message.author.username}`, `${message.author.displayAvatarURL({ dynamic: true })}`)
                message.channel.send(imageEmbed)
        })
    }
}