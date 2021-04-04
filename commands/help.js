module.exports = {
    name: 'help',
    permissions: ["SEND_MESSAGES"],
    description: "!",
    execute(Discord, client, message, args, cmd) {
        const newEmbed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle('AVAILABLE COMMANDS')
    .setAuthor('Xenon Colt', 'https://cdn.discordapp.com/attachments/786550102650126358/824307387783315466/XENON_3.png', 'https://discord.gg/Ab6NgSSqXQ')
    .setThumbnail('https://cdn.discordapp.com/attachments/782560503212802078/806058411808653352/Untitled-3gg.png')
    .addFields(
        { name: 'Prefix', value: '"+"', inline: true },
        { name: 'p (song name)', value: 'Play music in voice channel', inline: true },
        { name: 'stop', value: 'Stop music', inline: true },
        { name: 'skip', value: 'Next music', inline: true },
        { name: 'info', value: 'Bot Info', inline: true },
        { name: 'version/versn/vrsn', value: 'Bot version info', inline: true },
        { name: 'instagram', value: 'Bot owner instagram', inline: true },
        { name: 'icon/pfp/profilepic', value: 'Xenon will sent your profile picture.', inline: true },
        { name: 'weather (City name, Country name)', value: 'Weather Information', inline: true },
        { name: 'xenon (ask a qus)', value: 'Bot will answer your question.', inline: true },
        { name: 'invite', value: 'Invite Link', inline: true },
        { name: 'clear/clr/delete', value: '1~100 Clear message.', inline: true },
        { name: 'remind {time(d,h,m,s)} (remind message) ', value: 'I will DM you the reminder message.', inline: true }
    )
    .setImage('https://www.spigotmc.org/attachments/cool-text-commands-271055509278412-png.307323/?__cf_chl_jschl_tk__=0e20103d0926df38b6b9f3aa4a6fcf7b88f3f8a7-1617562430-0-AUOp7yY5gyYs2pdlhGgXiH211NDdYD4CKD6y9N_goPedeBEWzkWeWKUBkfpPiu5t-I9uNcxqHK9SjBU8gblV8hbxEeCT61YHma7F2Ya1ZuIsLsw5n0O6Fq4F7yB22RPzsjZYIOVmHtrdIElFFQErrVHeaEGZEcf5maLrpMUUdf8iuC8DBIcBI844q--Okif_XqxtsOubJTsCNKFkLYXs-a4b-NczzNpex2DFQgQLMshZSA2bQxIYax3IjlMAihpkBI623487bkatckwSGUGriORjEU9muDx2ztBMz_NQFZglNYkdANj_vspCYfuGPa0bkiAhZTsh3Yj3pCaMcg85ki4VIondqzB0EC1rirTlPgqFIAw2G_AbCMvAypl7tqTrtNWfGjty3YJb15xAwVD-uA-NOhbGnlvSaG_xCiwSvdr0Gkoxh-wL2PRf5nPjkQDdkepWVtOu07CljIsN-V04-_I')
    .setTimestamp()
    .setFooter('Attenion: You must use "prefix" before write a command!');
message.channel.send(newEmbed);

    }
}