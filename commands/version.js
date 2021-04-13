module.exports = {
    name: 'version',
    aliases: ['vrsn'],
    permissions: ["SEND_MESSAGES"],
    description: "This is a version command!",
    execute(Discord, client, message, args, cmd){
        message.channel.send('Bot version: \`1.1.1\`');
    }
}