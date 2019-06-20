const discordcs = require('discordcs')
const client = new discordcs.Client({
    prefixes: 'g!',
    token: 'token do bot',
    readylib: true
})

client.on('ready', () =>{

    client.CommandsRegister.registerCommands(__dirname+'/./commands')
})