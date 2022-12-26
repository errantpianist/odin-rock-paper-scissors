function getComputerChoice() {
    const choice = Math.floor(Math.random()* 3)
    switch (choice) {
        case 0:
            return 'Rock';
            break;
        case 1:
            return 'Paper';
            break;
    
        case 2:
            return 'Scissors';
            break;
    }
}

console.log(getComputerChoice());


function playRound(playerSelection, computerSelection) {
    const status = getWinStatus(playerSelection, computerSelection);
    const verb = getVerb(status);
    return `You ${status}! ${playerSelection[0].toUpperCase() + playerSelection.slice(1)} ${verb} ${computerSelection}!`
}

console.log(playRound('scissors', 'paper'));

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
