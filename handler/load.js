const { Collection, MessageEmbed } = require('discord.js')
const { readdirSync } = require('fs')
const Enmap = require('enmap')

module.exports = async client => {
    client.embed = class Embed extends MessageEmbed { color = client.conf.embedColor }
    process.on('unhandledRejection', console.log)
    process.on('uncaughtException', console.log)
    client.conf = require('../config')
    client.commands = new Collection()
    client.noping = new Enmap()
    client.settings = new Enmap({
        name: 'settings',
        fetchAll: true,
        autoFetch: true,
        cloneLevel: 'deep'
    })

    for (let f of readdirSync('./commands/'))
        client.commands.set(f.split('.')[0], require(`../commands/${f}`))

    for (let e of readdirSync('./events'))
        client.on(e.split('.')[0], require(`../events/${e}`).bind(null, client))

    client.login(client.conf.token)
}