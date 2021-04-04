module.exports = {
    name: 'resume',
    aliases: ['rsm', 'start'],
    permissions: ["SEND_MESSAGES"],
    description: "This is a resume command!",
    execute(Discord, client, message, args, cmd) {
        if(args[0] == "resume"){
            if(!server_queue.connection.dispatcher.paused) return message.channel.send("Song isn't paused!");
            server_queue.connection.dispatcher.resume();
            message.channel.send("Xenon started singing again the song!");
        }


    }
}