const guildNumber = new Map();
const guildAttempts = new Map();

function guildNumberMap(message) {
    const guildId = message.guild.id;

    var number = Math.floor(Math.random() * 1000) + 1;
    
    if (!guildNumber.get(guildId)) {
        guildNumber.set(guildId, number);
    }
}

function guildAttemptsMap(message) {
    const guildId = message.guild.id;
    
    if (!guildAttempts.get(guildId)) {
        guildAttempts.set(guildId, { attempts: 1 });
    } else {
        guildAttempts.get(guildId).attempts++;
    }
}

module.exports = {
    name: "huntegg",
    category: "games",
    description: {
        usage: 'guesseasy <guesseasy number>',
        content: "Try and guess the number!",
    },
    async execute(Discord, client, message, args, cmd) {
        const { member, channel, guild } = message;

        const provideaguess = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setDescription(`**❌ Please provide a guess!**`)

        const pickinganumber = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setDescription('**Picking a number between 1 and 1000**')



        await guildNumberMap(message);
        await guildAttemptsMap(message);

        let guess = args[0];
        if (!guess && guildAttempts.get(guild.id).attempts === 1) {
            return channel.send(pickinganumber)
        } else if (!guess) {
            return channel.send(provideaguess);
        }

        if (+guess === guildNumber.get(guild.id)) {
            let attempts = guildAttempts.get(guild.id);

            const guessedthenumber = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setDescription(`✅ Congratulations🎉, <@${member.id}> got the egg, it only took you ${attempts.attempts} attempts!`)
                .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
                .setImage('https://cdn.discordapp.com/attachments/832180255103385650/832180301446381598/9e58537851d8e7e112b5aaebfb35626a.png')

            channel.send(guessedthenumber);
            message.react('✅');
            guildNumber.delete(guild.id);
            guildAttempts.delete(guild.id);
            

            return;
        } else if (+ guess < guildNumber.get(guild.id)) {
            return message.reply(`${guess} Is too low!`);
            
        } else if (+guess > guildNumber.get(guild.id)) {
            return message.reply(`${guess} Is too high!`);
        } else {
            return message.reply("Invalid number please try again");
        }
    },
};