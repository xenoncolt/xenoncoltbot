module.exports = {
    name: 'version',
    aliases: ['vrsn', 'versn'],
    permissions: ["SEND_MESSAGES"],
    description: "This is a version command!",
    execute(Discord, client, message, args, cmd){
        message.channel.send('Bot version: \`1.3.3\`');
    }
}