function Letter(a){
    this.letter = a;
    this.guessed = false;
    this.char = function(){
        if (this.guessed == true){
            return this.letter;
        }else{
            return " _ "
        }
    }
    this.compare = function(x) {
        if (this.letter == x ){
            this.guessed = true;
        }
    }
};
module.exports = Letter;