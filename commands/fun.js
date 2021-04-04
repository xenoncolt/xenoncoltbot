const image_api = require('anime-images-api')

module.exports = {
  name: 'fun',
  aliases: ['hug', 'kiss', 'punch', 'rand'],
  permissions: ["SEND_MESSAGES"],
  description: 'Asks a question and let the bot determine your fate :sparkler:',
  async execute(Discord, client, message, args, cmd) { 
    if (m.content.startsWith('test')){
      api.getHugImage().then(res => {
      m.channel.send(res.image)
      })
    }
  },
};
