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
    
}

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

console.log(getWinStatus('paper', 'scissors'));