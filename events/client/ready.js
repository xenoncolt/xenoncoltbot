module.exports = ()=>{
    console.log('Sundai command is online!');
    setInterval(() => {

        stateswitch = !stateswitch;

        if (stateswitch)
            client.user.setActivity(`${PREFIX}help | TEAM GX (Xavier)`, { type: "LISTENING" });
        else
            client.user.setActivity(`${client.guilds.cache.reduce((c, g) => c + g.memberCount, 0)} Users | ${client.guilds.cache.size} Servers`, { type: "LISTENING" });
    }, (5000));
}
