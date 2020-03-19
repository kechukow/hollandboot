const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "!";

client.login("Njg5OTU1MTAyMjQ4OTI3MzM0.XnKf_A.yQcXx9SqvroIZrRlf392q9oOu4E");

client.on("message", message =>{
    if(!message.guild) return
    if(message.content === prefix + "hello"){
        message.channel.send("Bonjour cher " + message.author.username + " !")
    }
    if(message.content === prefix + "slt"){
        message.channel.send("Bonjour cher " + message.author.username + " !")
    }
    if(message.content === prefix + "bonjour"){
        message.channel.send("Bonjour cher " + message.author.username + " !")
    }
    if(message.content === prefix + "salut"){
        message.channel.send("Bonjour cher " + message.author.username + " !")
    }
    if(message.content === prefix + "aide"){
        message.channel.send("Presise ton Probleme " + message.author.username + ". Fait !serveur pour un probleme , avec le serveur ou !discord pour un probleme , avec le serveur discord a toi de choisir  " + message.author.username + " .")
    }
    if(message.content === prefix + "serveur"){
        message.channel.send("pour tout demande je vous prie de vous adressais au Fondateur Joueur " + message.author.username + " .")
    }
    if(message.content === prefix + "discord"){
        message.channel.send("decrivais votre probleme " + message.author.username + ". Faite !regle pour voir les regle , !ip pour voir l'ip du serveur , si vous avais un probleme avec un membre cotacter Le Fondateur ou un moderateur . ")
    }
    if(message.content === prefix + "regle"){
        message.channel.send("Les regle vous sont decrite cher " + message.author.username + ". Regle 1 ne pas insulter un autre joueur , Regle 2 tout idée sont bonne sauf si elle sont imature regle 3 ne pas trop spamer le chat regle 4 pas de mot vulguair regle 5 en vocal ecoutez vous tous est ne vous croyais pas le plus fort voila les 5 regle du serveur discord .")
    }
    if(message.content === prefix + "ip"){
        message.channel.send("l'ip du serveur est CELESTAR.LCMINECRAFT.COM attention si vous étes pas membre vous serais refuser sur le serveur cher " + message.author.username + " !")   
    }
    if(message.content === prefix + "commande"){
        message.channel.send("Est bien cher " + message.author.username + " nos commande sont les suivant : !hello , !slt , !bonjour , !salut , !aide .")
    }
})
