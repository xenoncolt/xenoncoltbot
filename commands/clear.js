module.exports = {
    name: 'clear',
    aliases: ['clr', 'delete'],
    cooldown: 0,
    permissions: ["ADMINISTRATOR", "MANAGE_MESSAGES"],
    description: "This is a clear messages command!",
    async execute(Discord, client, message, args, cmd){
        if(!args[0]) return message.reply("Please enter the amount of messages that you want to clear!");
        if(isNaN(args[0])) return message.reply("Please enter a real number.(ex. +clear 100 or +clear 5");

        if(args[0] > 100) return message.reply("Hey. STOP!!! You cann't delete more than 100 messages.");
        if(args[0] < 1) return message.reply("You must delete at least one message");

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        });
    }
}