const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'xenon',
  permissions: ["SEND_MESSAGES"],
  description: 'Asks a question and let the bot determine your fate :sparkler:',
  async execute(Discord, client, message, args, cmd) {
    if (!args[0]) return message.channel.send('Please ask a full question!'); 
    const replies = ['Yes.', 'No.', 'Never.', 'Definitely.', 'Ask again later.', 'Are you serious!!!', 'Shut up', 'I do not know', 'Why are you asking me this!!!:unamused:', 'Maybe', 'Bye', 'Ask me again, please.', 'huh :rolling_eyes: ', 'I am busy now.', 'I dont wanna talk to you.', 'Speachless.', 'What!!!', 'I wanna slap you. Dont ask me why. It is my wish.']; 

    const result = Math.floor(Math.random() * replies.length); 
    const question = args.join(' '); 
    
    if (message.channel.permissionsFor(message.guild.me).has('EMBED_LINKS')) {
      const embed = new MessageEmbed() 
        .setAuthor('Xenon says...')
        .setColor('RANDOM')
        .addField('Question:', question)
        .addField('Answer:', replies[result]);
      await message.channel.send(embed); 
    } else {
      await message.channel.send(`**Question:**\n${question}\n**Answer:**\n${replies[result]}`); 
    }
  },
};