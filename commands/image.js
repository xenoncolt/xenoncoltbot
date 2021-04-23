var Scraper = require('images-scraper');

const google = new Scraper({
    puppeteer: {
        headless: true
    }
})

module.exports = {
    name: 'image',
    aliases: ['img'],
    cooldown: 0,
    permissions: ["SEND_MESSAGES"],
    description: '!',
    
    async execute(Discord, client, message, args, cmd) {
        const image_query = args.join(' ');
        if(!image_query) return message.channel.send('Please enter a image name.');

        const image_results = await google.scrape(image_query, 1);
        const imageEmbed = new Discord.MessageEmbed()

        .setColor('RANDOM')
        .setTitle(image_query)
        .setImage(image_results[0].url)
        .setFooter(`Requested by ${message.author.username}`, `${message.author.displayAvatarURL({ dynamic: true })}`)

        message.channel.send(imageEmbed)
    }
}