module.exports = {
    name: 'ping',
    description: 'View the bots ping!',
    async run(client, message, args) {
        message.channel.send('Pinging...').then(msg => {
            msg.edit(`:ping_pong: Pong! ${msg.createdTimestamp - message.createdTimestamp}ms`)
        })
    }
}