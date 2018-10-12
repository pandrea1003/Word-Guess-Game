var Letter = require("./letter.js");

function Word(w){

    this.arrLetters = [];
    arr = w.split("");

    for(var i =0; i < arr.length;i++){
        var c = new Letter(arr[i]);
        this.arrLetters.push(c);
    }

    
    this.wordString = function(){
        var word = "";
        for (var i = 0; i < this.arrLetters.length; i++){
            word += this.arrLetters[i].char();
        }
        return word;
    }
    this.newGuess = function(x){
        for (var i = 0; i < this.arrLetters.length; i++){
            this.arrLetters[i].compare(x);
        }
    }

};


module.exports = Word;