

const Discord = require('discord.js');

const client = new Discord.Client();




client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setPresence({ activity: { name: "KTG KA PICHWADA GOLL" } });

});



client.on('message', msg => {
  
  if (msg.content.toLowerCase().startsWith("!warn") && msg.mentions.users.first()) {
    msg.channel.send('The user is warned.' + ' User id : ' + msg.mentions.users.first())
    msg.author.send('You have warned'+ msg.content.slice(5))
    msg.mentions.users.first().send('You have been warned by ' + msg.content.slice(5))

  }else if (msg.content.startsWith('!warn')) {
    msg.channel.send('PLS specify someone to warn. User id : none')
  }
  if (msg.content.startsWith('!rep') && msg.mentions.users.first()) {
    msg.channel.send('We have reported' + msg.mentions.users.first())
  }


        
  

  
  
  

  


});


client.login('ODMwNzMwMTExNDk3NTM1NTE5.YHK7tA._XIYokl2kUYYG0JETOAkBhCM684')
