function getComputerChoice() {
    switch(randomIntegerGenerator(3)) {
    case 0:
        return "Rock";
        break;
    case 1:
        return "Paper";
        break;
    case 2:
        return "Scissors";
        break;
    default:
        return "";
    }
}

function randomIntegerGenerator(maxInt = "3") {
    return Math.floor(Math.random() * maxInt);
}
