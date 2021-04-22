module.exports = {
    name: 'invite',
    cooldown: 0,
    permissions: ["SEND_MESSAGES"],
    description: "This is a invite command!",
    execute(Discord, client, message, args, cmd){
        const newEmbed = new Discord.MessageEmbed()
    .setColor('RANDOM') 
    .setTitle('INVITE')
    .setURL('https://discord.com/oauth2/authorize?client_id=809990320405348390&permissions=8&scope=bot')
    
    return message.author.send(newEmbed)
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