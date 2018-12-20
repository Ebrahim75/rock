const Discord = require('discord.js');
const client = new Discord.Client();
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
 
 
 
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : Diamond Codes`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : Diamond Codes ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(argresult, "https://www.twitch.tv/idk");//حقوق دايموند كودز
client.user.setStatus("online")
 
});
 
 
 client.on('message', message => {
     if (message.content === (prefix + "-")) {
         if(!message.channel.guild) return;
     let embed = new Discord.RichEmbed()//DIAMONDCODES
  .setColor("#8650a7")//DIAMONDCODES
  .addField("** ✅ Servers: **" , client.guilds.size)//DIAMONDCODES
  .addField("** ✅ Users: **" , client.users.size)//DIAMONDCODES
  .addField("** ✅ Channels: **" , client.channels.size)//DIAMONDCODES
    .addField("** 🚀 Ping **" , Date.now() - message.createdTimestamp)//DIAMONDCODES
    .setTimestamp()//DIAMONDCODES
  message.channel.sendEmbed(embed);//DIAMONDCODES
    }
});
 
 
client.login('NTI1NDU4MzU2MTY5ODY3MjY3.Dv27dg.VkrYgCBHSup3peRlkRsKQ8aG0Rk');

             client.on('guildMemberAdd', member => {
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const stewart = member.guild.channels.find("name", "welcome");
     stewart.send(`<@${member.user.id}> تمت الدعوه من <@${inviter.id}>`);
   //  stewart.send(`<@${member.user.id}> joined using invite code ${invite.code} from <@${inviter.id}>. Invite was used ${invite.uses} times since its creation.`);
  });
});

let ar = JSON.parse(fs.readFileSync(`AutoRole.json`, `utf8`))
client.on('message', message => {
  var sender = message.author
 
if(!message.guild) return
  if(!ar[message.guild.id]) ar[message.guild.id] = {
  onoff: 'Off',
  role: 'Member'
  }
 
if(message.content.startsWith(`!autorole`)) {
         
  let perms = message.member.hasPermission(`MANAGE_ROLES`)
 
  if(!perms) return message.reply(`You don't have permissions, required permission : Manage Roles.`)
 let args = message.content.split(" ").slice(1)
 if(!args.join(" ")) return message.reply(`${prefix}autorole toggle / set [ROLE NAME]`)
 let state = args[0]
 if(!state.trim().toLowerCase() == 'toggle' || !state.trim().toLowerCase() == 'setrole') return message.reply(`Please type a right state, ${prefix}modlogs toggle/setrole [ROLE NAME]`)
   if(state.trim().toLowerCase() == 'toggle') {
    if(ar[message.guild.id].onoff === 'Off') return [message.channel.send(`**The Autorole Is __𝐎𝐍__ !**`), ar[message.guild.id].onoff = 'On']
    if(ar[message.guild.id].onoff === 'On') return [message.channel.send(`**The Autorole Is __𝐎𝐅𝐅__ !**`), ar[message.guild.id].onoff = 'Off']
   }
  if(state.trim().toLowerCase() == 'set') {
  let newRole = message.content.split(" ").slice(2).join(" ")
  if(!newRole) return message.reply(`${prefix}autorole set [ROLE NAME]`)
    if(!message.guild.roles.find(`name`,newRole)) return message.reply(`I Cant Find This Role.`)
   ar[message.guild.id].role = newRole
    message.channel.send(`**The AutoRole Has Been Changed to ${newRole}.**`)
  }
        }
if(message.content === '!info') {
   let perms = message.member.hasPermission(`MANAGE_GUILD`)
   if(!perms) return message.reply(`You don't have permissions.`)
    var embed = new Discord.RichEmbed()
 
.addField(`Autorole : :sparkles:  `, `
State : __${ar[message.guild.id].onoff}__
Role : __${ar[message.guild.id].role}__`)
 
 
    .setColor(`BLUE`)
    message.channel.send({embed})
  }
 
 
    fs.writeFile("./AutoRole.json", JSON.stringify(ar), (err) => {
    if (err) console.error(err)
  });
 
 
});
