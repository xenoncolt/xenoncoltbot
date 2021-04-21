module.exports = {
    name: 'avatar',
    aliases: ['icon', 'pfp', 'profilepic'],
    permissions: ["SEND_MESSAGES"],
    cooldown: 0,
    description: 'Return a user(s) avatar picture!',
    //Use your own execute parameters
    execute(Discord, client, message, args, cmd) {

        if (!message.mentions.users.size) {
            const avaterembed = new Discord.MessageEmbed()

            .setTitle('**Your Avatar **')
            .setImage(message.author.displayAvatarURL({dynamic: true}))

            return message.channel.send(avaterembed);
        }

        const avatar_list = message.mentions.users.map(user => {
            const avatermentionembed = new Discord.MessageEmbed()

            .setTitle(`**${user.username}'s Avatar **`)
            .setImage(user.displayAvatarURL({dynamic: true}))

            return (avatermentionembed);
        });

        message.channel.send(avatar_list);
    }
}