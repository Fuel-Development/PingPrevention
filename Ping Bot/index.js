const { Client } = require('discord.js')
require('./handler/load')(new Client({ partials: ['CHANNEL', 'MESSAGE', 'REACTION'] }))