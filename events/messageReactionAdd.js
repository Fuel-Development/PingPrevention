module.exports = async (client, reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch()
    if (!reaction.message.guild) return
    if (user.bot) return

    }