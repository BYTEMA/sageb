module.exports = {
    response: function(bot, message){
        //Responses
        var garfResponse = require('./commands/garf.js');
        // var imageResponse = require('./imageResponse/imageResponse.js');
        var stringResponse = require('./commands/stringResponse.js');

        if (garfResponse.keywords.includes(message.content.toLowerCase())){
            garfResponse.response(message);
        }
    }
};
