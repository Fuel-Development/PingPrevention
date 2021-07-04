module.exports = async client => {
    client.user.setActivity(client.conf.botActivity.activity.name, { type: client.conf.botActivity.activity.type })
    console.log(`Logged in as ${client.user.tag}`)
    client.on(`message`, function(message) {


        if (message.mentions.users.first() && client.noping.has(message.mentions.users.first().id)) {


            const nopinglol = new client.embed()
                .setTitle(`Please Don\'t Ping Me <3`)
                .setDescription(client.conf.No_Ping.Message)
                .setImage(client.conf.No_Ping.Image)
                .setTimestamp()

            .setFooter(`No Ping! | Made By Fuel#2649`, message.guild.iconURL({ dynamic: true }))

            if (message.member.roles.cache.some((r) => client.conf.No_Ping.Bypass_Role.includes(r.id))) return;

            else return message.channel.send(nopinglol)
        }
    })
}