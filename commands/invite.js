module.exports = {
    name: 'invite',
    permissions: ["SEND_MESSAGES"],
    description: "This is a invite command!",
    execute(Discord, client, message, args, cmd){
        message.channel.send('Invite Link: https://discord.com/oauth2/authorize?client_id=809990320405348390&permissions=8&scope=bot');
    }
}