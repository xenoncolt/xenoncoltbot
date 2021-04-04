module.exports = {
    name: 'pause',
    aliases: ['ps'],
    permissions: ["SEND_MESSAGES"],
    description: "This is a pause command!",
    execute(Discord, client, message, args, cmd) {
        if(args[0] == "pause"){
            if(server_queue.connection.dispatcher.paused) return message.channel.send("Song is already paused!");
            server_queue.connection.dispatcher.pause();
            message.channel.send("Paused the song!");
        }


    }
}