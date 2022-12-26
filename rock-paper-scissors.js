function getComputerChoice() {
    const choice = Math.floor(Math.random()* 3)
    switch (choice) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
    
        case 2:
            return 'scissors';
            break;
    }
}

//console.log(getComputerChoice());


function playRound(playerSelection, computerSelection, status) {
    
    const verb = getVerb(status);
    return `You ${status}! ${playerSelection[0].toUpperCase() + playerSelection.slice(1)} ${verb} ${computerSelection}!`
}

//console.log(playRound('scissors', 'paper'));

function getWinStatus(playerSelection, computerSelection) {
    let status;
    switch (playerSelection) {
        case 'rock':
            switch (computerSelection) {
                case 'rock':
                    status = 'draw';
                    break;
                case 'paper':
                    status = 'lose';
                    break;
                case 'scissors':
                    status = 'win';

                    break;
            
                default:
                    break;
            }
            break;
        case 'paper':
            switch (computerSelection) {
                case 'rock':
                    status = 'win';
                    break;
                case 'paper':
                    status = 'draw';
                    break;
                case 'scissors':
                    status = 'lose';
                    break;
            
                default:
                    break;
            }
            break;
        case 'scissors':
        switch (computerSelection) {
            case 'rock':
                status = 'lose';    
                break;
            case 'paper':
                status = 'win';
                break;
            case 'scissors':
                status = 'draw';
                break;
        
            default:
                break;
        }
    
        default:
            break;
    }
    return status;
}



function getVerb(status) {
    switch (status) {
    case 'win':
        return 'beats'
        break;
    case 'lose':
        return 'is defeated by'
        break;
    case 'draw':
        return 'draws against'
        break;

    default:
        break;
}}

function game() {
    let wins = 0;
    let draws = 0;
    let losses = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Please enter your choice: rock, paper or scissors: ').toLowerCase();
    
        const computerSelection = getComputerChoice();
        const status = getWinStatus(playerSelection, computerSelection);
        console.log(playRound(playerSelection, computerSelection, status))
        switch (status) {
            case 'win':
                wins++;
                
                break;
            case 'draw':
                draws++;
                break;
            case 'lose':
                losses++;
                break;

        }

    }
    console.log(`You finished with ${wins} wins, ${draws} draws and ${losses} losses!`);
    const userContinues = prompt('Play again? y/n');
    if (userContinues === 'y') {
        game()
    }
}


game();