const {Command} = require('discordcs')

class ping extends Command{
    constructor(client){
        super(client, {
            command: 'ping',
            description: 'lantencia da api'
        })
        this.client = client
    }

    async startCommand(message, args){
        message.channel.send('pong!')
    }
}
module.exports = ping
