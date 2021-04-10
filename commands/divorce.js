const _ = require("lodash");

function saythelinequintus(){
    var mechanicLines = {
        0:"You've underestimated me for the last time!",
        1:"I knew if I bided my time, I'd have my revenge!",
        2:"Now you're in my trap, Tharayya!",
        3:"Don't worry, you won't be a widow much longer!",
        4:"Death isn't so bad, but it will be for you.",
        5:"I may be dead, but you're all coming with me!",
        6:"I can't believe you thought I was actually trying to help you! I brought you here to die!",
        7:"Is he going to turn you into one of those puppets, or just kill you? I can't wait to find out!",
        8:"Ex-wife, enjoy your ex-life! Hah! Haha! Hahaha!",
        9:"You escaped last time, Tharayya, but I've got you now.",
        10:"Gives you 'Quintus' Exploding Staff'",
    };
    var line = mechanicLines [_.random(10)];
    var lineString = "" + line + "" ;
    return lineString;
}

module.exports= {
    name: 'divorce',
    description: "This is the test",
    execute(message, args){
       if(message.content == 'divorce'){
           message.channel.send(saythelinequintus());
       }
    }
}