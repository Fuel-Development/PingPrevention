module.exports = (client, message) => {
    if (!message.content.startsWith(client.conf.prefix) || !message.guild || message.author.bot) return
    client.settings.ensure(message.guild.id, client.conf.guildSettings)
    const args = message.content.slice(client.conf.prefix.length).split(/ +/)
    const cmd = args.shift().toLowerCase()

    if (client.commands.has(cmd)) client.commands.get(cmd).run(client, message, args)
}