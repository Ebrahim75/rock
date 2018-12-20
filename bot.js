const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);  
});

client.on('ready', async() => {
var server = "514245515836260372"; 
var channel = "514245515836260374";
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**سبحان الله . الله اكبر . اشهد ان لا اله الا الله , سبحان الله . الله اكبر . اشهد ان لا اله الا الله , سبحان الله . الله اكبر . اشهد ان لا اله الا الله , سبحان الله . الله اكبر . اشهد ان لا اله الا الله , سبحان الله . الله اكبر . اشهد ان لا اله الا الله , سبحان الله . الله اكبر . اشهد ان لا اله الا الله , سبحان الله . الله اكبر . اشهد ان لا اله الا الله , سبحان الله . الله اكبر . اشهد ان لا اله الا الله , سبحان الله . الله اكبر . اشهد ان لا اله الا الله , سبحان الله . الله اكبر . اشهد ان لا اله الا الله , سبحان الله . الله اكبر . اشهد ان لا اله الا الله , سبحان الله . الله اكبر . اشهد ان لا اله الا الله , سبحان الله . الله اكبر . اشهد ان لا اله الا الله , سبحان الله . الله اكبر . اشهد ان لا اله الا الله , سبحان الله . الله اكبر . اشهد ان لا اله الا الله , سبحان الله . الله اكبر . اشهد ان لا اله الا الله , سبحان الله . الله اكبر . اشهد ان لا اله الا الله , سبحان الله . الله اكبر . اشهد ان لا اله الا الله , **')
    },305);
})

client.on('message', message => {
        var prefix = "-";
        if (message.author.bot) return;
        if (!message.content.startsWith(prefix)) return;

        let command = message.content.split(" ")[0];
        command = command.slice(prefix.length);


      let args = message.content.split(" ").slice(1);
      let x = args.join(" ")
        if(message.content.startsWith(prefix + '1s')) {
            message.channel.send(''+x);
                message.delete(999)
        }


      });

 
client.login(process.env.BOT_TOKEN);