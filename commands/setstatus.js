module.exports = {
    description: 'You can\'t be pinged',
    aliases: [`dontping`],
    usage: 'noping'
}

module.exports.run = async(client, message, args) => {
    if (!message.member.hasPermission("BAN_MEMBERS"))
        return message.channel.send(new client.embed().setDescription(`You can\`t use that!`));
    client.noping.set(message.author.id, { time: Date.now(), message: args.join(' ') || 'Dont Ping' })
    message.channel.send(`**Sucessfully set the no ping status!**`)
}