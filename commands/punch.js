const image_api = require('anime-images-api')

const api = new image_api('GET')

module.exports = {
    name: 'punch',
    cooldown: 0,
    permissions: ["SEND_MESSAGES"],
    description: "!",
    execute(Discord, client, message, args, cmd){

        let member = message.mentions.users.first() || message.author

        api.getPunchImage().then(res => {
            const imageEmbed = new Discord.MessageEmbed()

            .setColor('RANDOM')
            .setTitle(`${message.author.username} punch ${member.username}`)
            .setImage(res.image)
            .setFooter(`Requested by ${message.author.username}`, `${message.author.displayAvatarURL({ dynamic: true })}`)
                message.channel.send(imageEmbed)
        })
    }
}