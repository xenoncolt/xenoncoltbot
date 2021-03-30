module.exports = {
    name: 'discord',
    permissions: [ ],
    description: "This is a discord link command!",
    execute(Discord, client, message, args, cmd){
        message.channel.send('https://discord.gg/Ab6NgSSqXQ');
    }
}