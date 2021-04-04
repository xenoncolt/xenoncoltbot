const image_api = require('anime-images-api')
const api = new image_api('GET')

module.exports = {
  name: 'get',
  permissions: ["SEND_MESSAGES"],
  description: "This is a fun command!",
  async execute(Discord, client, message, args, cmd){
    api.getHugImage().then(res => {
        console.log(res)
    })
    }
  
};
