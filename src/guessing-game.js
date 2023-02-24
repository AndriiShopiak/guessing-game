class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.a = min;
        this.b = max;
    }

    guess() {
        this.sum = Math.round((this.b + this.a) / 2);
        return this.sum;
    }

    lower() {
        this.b = this.sum;
    }

    greater() {
        this.a = this.sum;
    }
}

module.exports = GuessingGame;
