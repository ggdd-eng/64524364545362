const Discord = require('discord.js')
const config = require('../config.json')
module.exports = {
  execute: async(client, db) => {
   
    console.log(`${client.user.tag} Ready`)
 
    client.user.setActivity(`${config.prefix}help | ${client.guilds.cache.size} Servers | ${client.users.cache.size} Users`, { type: "WATCHING" }) 
    
  } 
}