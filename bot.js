const Discord = require('discord.js');
const client = new Discord.Client();
const responses = require('./commands/responses.js');

client.on('ready', () => {
    console.log('I am ready!');
});

 
client.on('message', message => {
    var response = responses.response(message);
    if (response != null){
        message.reply('your mom gay');
    }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//BOT_TOKEN is the Client Secret