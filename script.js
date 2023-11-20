function getPlayerChoice() {
    let userInput = prompt("Enter Your Selection");

    if (userInput === 'rock' || userInput === 'scissor' || userInput == 'paper') return userInput;
    else console.log("Please enter again in all lower-case");

}

function getComputerChoice() {
    const randomChoice = Math.floor(Math.random() * 3 + 1);

    switch (randomChoice) {
        case 1:
            compChoice = 'rock';
            break;
        case 2:
            compChoice = 'paper';
            break;
        case 3:
            compChoice = 'scissor';
            break;
        default:
            console.log("Incorrect choice");
    };
    return compChoice;
}
let compWins = 0;
let userWins = 0;

function play() {

    sameAnswer:
    for (let i = 0; i < 5; i++) {
        
        let compChoice = getComputerChoice();

        let userChoice = getPlayerChoice();
        
        switch (true) {
            case compChoice === 'rock' && userChoice === 'paper':
                userWins += 1;
                break;
            case compChoice === 'rock' && userChoice === 'scissor':
                compWins += 1;
                break;
            case compChoice === 'paper' && userChoice === 'rock':
                compWins += 1;
                break;
            case compChoice === 'paper' && userChoice === 'scissor':
                userWins += 1;
                break;
            case compChoice === 'scissor' && userChoice === 'rock':
                userWins += 1;
                break;
            case compChoice === 'scissor' && userChoice === 'paper':
                compWins += 1;
                break;
            case compChoice === userChoice:
                console.log("redo loop");
                i -= 1;
                continue sameAnswer;
                
        }

        console.log(`Computer wins: ${compWins} \n User wins: ${userWins}`);

        if (compWins > 2) return console.log("Computer wins");
        if (userWins > 2) return console.log("User wins");
    }
}



play();




/*
    Prompt user for game choice

    Create random computer choice
        Create a variable to hold a random number bewtween 1 and 3 

        Create three game choice variables whose value will represent one of the numbers bewtween 1 and 3

        compare game choice variable with random variable to chooose computers game choice. 

    Check for who wins
    
        create variables to log wins 

        create a loop iterates until user or computer wins
        
        check for win conditions

            rock paper
            rock scissors
            paper scissors 
            paper rock 
            scissors paper
            scissors rock
            compChoice === userChoice

        log win to win variable

        if playerwins or computerwins variable exceeds two wins, declare winner

    print to console who won 

*/