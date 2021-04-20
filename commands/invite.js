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
    .setDescription('Click \`INVITE\`')
message.author.send(newEmbed);
message.channel.send('Please check your **DM**.');

    }
}