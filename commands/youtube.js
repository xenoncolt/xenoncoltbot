module.exports = {
    name: 'youtube',
    aliases: ['yt'],
    cooldown: 0,
    permissions: ["SEND_MESSAGES"],
    description: "This is a youtube link command!",
    execute(Discord, client, message, args, cmd){
        message.channel.send('https://www.youtube.com/channel/UCHJqdv4U1Rqr4YWMc4HWpow');
    }
}