function sing() {
    let string = "";
    for(let i = 0; i <= 10; i++) {
        if(i === 4) {
            string = string + "there will be an answer, ";
        } else if(i === 10) {
            string = string + "whisper words of wisdom, let it be";
        } else {
            string = string + "let it be, ";
        } 
    }
    return string;
}

//Your code above ^^^

console.log(sing());