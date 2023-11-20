//let playerChoice = prompt("Enter Your Selection");

const randomChoice = Math.floor(Math.random() * 3 + 1);
let computerChoice = ''
switch (randomChoice) {
    case 1:
        computerChoice = 'rock';
        break;
    case 2:
        computerChoice = 'paper';
        break;
    case 3:
        computerChoice = 'scissor';
        break;
    default:
        console.log("Incorrect choice");

};


/*
    Prompt user for game choice

    Create random computer choice
        Create a variable to hold a random number bewtween 1 and 3 

        Create three game choice variables whose value will represent one of the numbers bewtween 1 and 3

        compare game choice variable with random variable to chooose computers game choice. 

    Check for who wins

    print to console who won 

    repeat until 3 or more matchs is won by either player 
*/