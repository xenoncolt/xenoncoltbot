module.exports = {
    name: 'discord',
    cooldown: 0,
    permissions: ["SEND_MESSAGES"],
    description: "This is a discord link command!",
    execute(Discord, client, message, args, cmd){
        message.author.send('https://discord.gg/Ab6NgSSqXQ')
        .then(() => {
            if (message.channel.type === 'dm') return;
            message.reply('I\'ve sent you a DM with all my commands! Please check your DM.');
        })
        .catch(error => {
            console.error(`Could not send help DM to ${message.author.tag}.\n`, error);
            message.reply('it seems like I can\'t DM you! Do you have DMs disabled?');
        });
    }
}