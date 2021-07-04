module.exports = async(client, message) => {
    client.members.ensure(message.guild.id, {})
    client.members.ensure(message.guild.id, client.memberSettings, message.author.id)

    if (message.mentions.users.first() && client.noping.has(message.mentions.users.first().id)) {

        const embed52 = new client.embed()
            .setTitle(`Please Don\'t Ping Me <3`)
            .setDescription(client.conf.No_Ping.Message)
            .setTimestamp()
            .setImage(client.conf.No_Ping.Image)
            .setFooter(`You\'ve got mail!`)


        message.channel.send(embed52)
    }
}