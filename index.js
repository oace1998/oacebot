const Commando = require('discord.js-commando');
 const bot = new Commando.Client({commandPrefix: "@po#3578  "});
 const TOKEN = 'NDg1NjE4OTI4NjE4MzA3NjA0.Dnaovw.aJzKdac6-nlkJo_5ier3_k6VccU'
const Owner ='188410987668439040'


 bot.registry.registerGroup('simple','Simple');
 bot.registry.registerGroup('music','Music');
 bot.registry.registerGroup('admin','Admin');
 bot.registry.registerDefaults();
 bot.registry.registerCommandsIn(__dirname + '/commands');

 global.servers = {};
 bot.on('message', function(message){ 
     if(message.content == 'Hello')
     {
         message.reply(' SHUT UP UGLY!');
     }
 });
 bot.on('message', function(message){ 
    if(message.content == 'Nigger')
    {
        message.channel.sendMessage(' FUCK NIGGERS MAN THEY TRIGGER ThE FuCK OuT Of mE');
    }
});
bot.on('message', function(message){ 
    if(message.content == "Big Smoke's Order")
    {
        message.channel.sendMessage(" I'll have two number 9's, a number 9 large, a number 6 with extra dip, a number 7, two number 45's, one with cheese, and a large soda.");
    }
});
bot.on('message', function(message){ 
    if(message.content == "Buggem")
    {
        message.channel.sendMessage("Buggem aka **Back Door Buggem** aka **Ass Slut** aka **Rape Asmr** gives anal for only 56$ use code #aceDD1 for a 10% discount  https://imgur.com/a/liMNEoE ");
    }
});
bot.on('message', function(message){ 
    if(message.content == "Johnny Johnny")
    {
        message.channel.sendMessage("Yes PAPA!!!! ");
    }
});
 bot.on('ready',function(){
     console.log("Ready");
     bot.user.setActivity("Fist Fucking My Dog", {type:'STREAMING'})
     bot.on("guildMemberAdd", function(member)
        {
         member.send("welcome to the server, make sure u read the #commandments in the commandments channel. enjoy your stay!!!!! also make sure you introduce yourself before u get bullied !! :D");
         let memberRole = member.guild.roles.find("name",("Shit poster"))
         member.addRole(memberRole);
     });
     bot.on('message', function(message){
     })
 })
  bot.on('guildMemberAdd', member => {   
    const channel = member.guild.channels.find(ch => ch.name === 'general-nsfw');
    if (!channel) return;
    channel.send(`Welcome to the server, ${member}`);
  });
 bot.login(TOKEN);
 