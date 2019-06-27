const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready" , function() {
    bot.user.setGame("Polo 83");
    console.log("Le bot a bient ete co");
});

bot.login("NTkzODc1MDM4OTQ0MzYyNTE2.XRUPUA.rwCGLXfHCVOrZ8qDd64EXAHRbF4")
