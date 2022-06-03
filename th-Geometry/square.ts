export class Square {
    color: string;
    filled: boolean;
    side: number

    constructor(color: string, filled: boolean,
                side: number) {
        this.color = color;
        this.filled = filled;
        this.side = side
    }
}
let square = new Square('white',true,6);
console.log(square);