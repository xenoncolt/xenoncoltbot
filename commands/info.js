module.exports = {
    name: 'info',
    permissions: [ ],
    description: "This is a info command!",
    execute(Discord, client, message, args, cmd){
        message.channel.send('This bot is created by Xenon Colt. If you want to know more about bot, go here \`https://discord.gg/Ab6NgSSqXQ\`');
    }
}