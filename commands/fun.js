const https = require('https');

module.exports = {
  name: 'fun',
  aliases: ['hug', 'kiss', 'punch', 'rand'],
  permissions: ["SEND_MESSAGES"],
  description: 'Asks a question and let the bot determine your fate :sparkler:',
  async execute(Discord, client, message, args, cmd) {
    let endpoints = ['hug', 'kiss', 'punch', 'rand']
    let body = '';
    https.get(`https://anime-api.hisoka17.repl.co/img/${endpoints[0]}`, function (res){ 

    res.on('data', result => {
        body += result;
    })
    .on('end', function(){
        let data = JSON.parse(body)
        console.log(data.url?data.url:null)
    })
    }) 
  },
};
