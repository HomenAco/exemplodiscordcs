const {Command} = require('discordcs')

class ping extends Command{
    constructor(client){
        super(client, {
            command: 'ping',
            description: 'lantencia da api'
        })
        this.ping = client
    }

    async startCommand(message, agrs){
        message.channel.send('pong!')
    }
}
module.exports = ping