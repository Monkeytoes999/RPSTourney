class randomAgent {
    name = "Random";

    choices = [0, 1, 2];
    constructor() {}

    firstMove() {
        return this.choices[Math.floor(Math.random()*3)];
    }

    getMove(opponentChoice, roundNumber) {
        return this.choices[Math.floor(Math.random()*3)];
    }
}

module.exports = randomAgent;