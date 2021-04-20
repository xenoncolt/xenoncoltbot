module.exports = {
    name: 'discord',
    permissions: ["SEND_MESSAGES"],
    description: "This is a discord link command!",
    execute(Discord, client, message, args, cmd){
        message.author.send('https://discord.gg/Ab6NgSSqXQ');
        message.channel.send('Please check your **DM**.');
    }
}