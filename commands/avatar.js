module.exports = {
    name: 'avatar',
    aliases: ['icon', 'pfp', 'profilepic'],
    permissions: ["SEND_MESSAGES"],
    description: 'Return a user(s) avatar picture!',
    //Use your own execute parameters
    execute(Discord, client, message, args, cmd) {

        if (!message.mentions.users.size) {
            return message.channel.send(`**Your Avatar: ** ${message.author.displayAvatarURL({ dynamic: true })}`);
        }

        const avatar_list = message.mentions.users.map(user => {
            return `**${user.username}'s Avatar: ** ${user.displayAvatarURL({ dynamic: true })}`;
        });

        message.channel.send(avatar_list);
    }
}