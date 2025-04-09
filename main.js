const prompt = require('prompt-sync')({ sigint: true });

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

let endOfGame = false;


class Field {
    constructor(field) {
        this.field = field;
        this.yLocation = 0;
        this.xLocation = 0;
    }
    print() {
        //console.log(this.field.join(" "));
        this.field.map(line => console.log(line.join("")))
    }

    move(y, x) {
        if (this.field[this.yLocation][this.xLocation] === hole) {
            console.log("Sorry you fell into a hole!!")
            return true;
        } else if (this.field[this.yLocation][this.xLocation] === hat) {
            console.log("Congratulations YOU WON")
            return true;
        }
        this.field[this.yLocation][this.xLocation] = pathCharacter;
    }
    checkMove(y, x) {
        this.xLocation += x;
        this.yLocation += y;
        if (this.yLocation >= this.field.length - 1 || this.yLocation < 0 || this.xLocation >= this.field[0].length || this.xLocation < 0) {
            console.log("Out of bounds");
            return true;
        }
        return this.move(y, x);
    }
    generateField(rows, cols, percentage) {
        this.field = [];
        const totalCells = (rows * cols) - 1;
        const charCount = Math.floor((percentage / 100) * totalCells);

        // Create a flat array with the desired number of special chars and fillers
        const flatArray = Array(charCount).fill(hole).concat(
            Array(totalCells - charCount).fill(fieldCharacter)
        ).concat(hat);
        
        // Shuffle the flat array
        for (let i = flatArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [flatArray[i], flatArray[j]] = [flatArray[j], flatArray[i]];
        }

        // Convert to 2D
        
        for (let i = 0; i < rows; i++) {
            this.field.push(flatArray.slice(i * cols, (i + 1) * cols));
        }
        this.field[0][0] = pathCharacter;
    }
}


function order(direction) {
    switch (direction.toUpperCase()) {
        //Going UP
        case "U":
            endOfGame = myField.checkMove(-1, 0);
            break;
        case "D":
            endOfGame = myField.checkMove(1, 0);
            break;
        case "R":
            endOfGame = myField.checkMove(0, 1);
            break;
        case "L":
            endOfGame = myField.checkMove(0, -1);
            break;
        case "Q":
            endOfGame = true;
            console.log("Quitting game!");
            break;
        default:
            console.log("Unknown Command!")
    }
}

const myField = new Field();
myField.generateField(10, 10 , 20);

let command = "";

while (!endOfGame) {
    console.clear();
    myField.print();
    command = prompt('Where to move? ');
    order(command);
}
