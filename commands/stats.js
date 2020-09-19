const Discord = require('discord.js')
const ms = require('parse-ms')
const config = require('../config.json')
module.exports = {
  name: "stats",
  aliases: ["stats"],
  description: "shows the stats of Advice Bot.",
  execute: async(client, message, args, data, db) => {
   


   
   // let usersCount = await client.shard.fetchClientValues("users.size")
    
  //  let serverCount = await client.shard.fetchClientValues('guilds.size') 
    
    let uptime = [] 
    
    Object.entries(ms(client.uptime)).map((x, y) => {
      if (x[1] > 0 && y < 4) uptime.push(`**${x[1]} ${x[0]}**`) 
    })
    
    let embed = new Discord.MessageEmbed()
    .setColor(config.embedColor)
    .setTitle(`${client.user.username} Info/Stats`)
    .setThumbnail(client.user.displayAvatarURL())
    .addField(`Owners `, `<@!693661618021859329>,<@!580719037189980180> ,<@!432662769809096705>`, false)
    .addField(`Library `, `Discord.js - v12.2.0`, false)
    .addField(`Servers  `, client.guilds.cache.size.toLocaleString(), false)
    .addField(`Users  `, client.users.cache.size.toLocaleString(), false) 
    .addField(`Uptime `, uptime.join(", "), false) 
    message.channel.send(embed) 
  } 
} 