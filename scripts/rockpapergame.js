const { Console } = require('console');
const { constrainedMemory } = require('process');

console.log("WELCOME TO THE GAME 'ROCK PAPER SCISSOR'");
let computerChoice = null;
const reader = require('readline').createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);
let userChoice=null;
let game=true;

// while (game){
{
    computerChoice = Math.floor((Math.random()*10)%4);
    console.log(computerChoice);
    let computerSelection = null;
    switch(computerChoice){
        case 1: 
            computerSelection = "R";
            break;
        case 2: 
            computerSelection = "P";
            break;
        default:
            computerSelection = "S";
            break;    
    }
    reader.question("Enter you choice : \nR:Rock\nP:Paper\nS:Scissor\n",answer=>{
        userChoice = answer;
        let gameResult=null;
        switch(userChoice){
            case "R":
            case "r":
                if(computerSelection==="R") gameResult="Draw";
                else if(computerSelection==="P") gameResult="Win";
                else if(computerSelection==="S") gameResult="Loose";
                break;
            case "P":
            case "p":
                if(computerSelection==="R") gameResult="Win";
                else if(computerSelection==="P") gameResult="Draw";
                else if(computerSelection==="S") gameResult="Loose";
                break;
            case "S":
            case "s":
                if(computerSelection==="R") gameResult="Loose";
                else if(computerSelection==="P") gameResult="Win";
                else if(computerSelection==="S") gameResult="Draw";
                break;
        }
        
        switch(gameResult){
            case "Win":
                console.log("\nCongratualtion!! You Won");
                console.log(`Your Choice ${userChoice} and Computer Choose ${computerSelection}\n`);
                reader.question("Enter 'A' to play again\nOr Press any button to exit", answer=>{
                    if(answer==="A") game = true;
                    else game = false;
                    reader.close();
                });
                break;
            case "Loose":
                console.log("\nAlas!! You Loose");
                console.log(`Your Choice ${userChoice} and Computer Choose ${computerSelection}\n`);
                reader.question("Enter 'A' to try again\nOr Press any button to exit", answer=>{
                    if(answer==="A") game = true;
                    else game = false;
                    reader.close();
                });
                break;
            case "Darw":
                console.log("\nGame is drawn");
                console.log(`Your Choice ${userChoice} and Computer Choose ${computerSelection}\n`);
                reader.question("Enter 'A' to play again\nOr Press any button to exit", answer=>{
                    if(answer==="A") game = true;
                    else game = false;
                    reader.close();
                });
                break;
        }
        reader.close();
    });
}

const myArray = [1,5,7];
for(el in myArray){
console.log(Number(el));
el = Number(el) + 5;
console.log(el);
}
console.log(myArray);




