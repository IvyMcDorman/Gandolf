const discord = require("discord.js"); // whole name for library/modules
const config = require("./config.json"); // ./ are for files
const bot = new discord.Client();

// This will run the function every time the bot is ready (aka when you run the program)
bot.on("ready", function(){
    console.log("ready when you are mister captain sir");
});

// This will run the function every time someone sends a message on Discord
bot.on("message", function(msg){
    if (msg.author.bot) {
        return;
    }
    if (msg.content.toLowerCase() == "-ping"){
        var embed = new discord.MessageEmbed()
                        .setDescription("Hello")
                        .setColor("#ff000")
                        .addField("Field 1", "Hello!", true)
                        .addField("Field 2", "Sup", true);
        msg.channel.send(embed);
    }
    if (msg.content.toLowerCase() == "what's your favorite line to say?"){
        msg.channel.send("YOU SHALL NOT PASS!!!!");
    }
    if (msg.content.toLowerCase() == "insult me"){
        var insults = [
            "you fuckin suck.",
            "yo mamas like a vaccum she sucks blows and gets laid in the closet.",
            "imagine being gay.",
            "killing yourself would be the first right thing you'd do with your life.",
            "fuck you, you greasy idiot.",
            "your mom is a hoe.",
            "if your brain was dynamite, there wouldn't be enough to blow your hat off.",
            "jeez imagine spending all day on discord talking to a bot",
            "your more disappointing than an unsalted pretzel",
            "Rick Astley wants to give you up.",
            "why, you stuck up, half-witted, scruffy-looking… Nerf herder! -Leia",
            "you are a sad strange little man, and you have my pity. -Lightyear",
            "calling you an idiot would be an insult to all stupid people. ",
            "if i was a bird, i know who i'd shit on",
            "ABRA KADABRA! Damn, your still a fucktard.",
            "if ugliness was bricks, you'd be the Great Wall of China",
            "just, just don't. look at yourself, you don't need another insult.",
            "go shower, you smell like two hoboes fucking in a shoe full of piss.",
            "those penis enlargement pills must be working — you’re twice the dick you were yesterday.",
            "your birth certificate is an apology letter from the condom factory.",
            "your like a slinky, not good for much but you bring a smile to my face when pushed down the stairs."
        ];
        
        var random = Math.floor(Math.random() * insults.length);
        msg.channel.send(insults[random]);
    }
});

bot.login(config.token);