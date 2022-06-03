"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Square = void 0;
class Square {
    constructor(color, filled, side) {
        this.color = color;
        this.filled = filled;
        this.side = side;
    }
}
exports.Square = Square;
let square = new Square('white', true, 6);
console.log(square);
//# sourceMappingURL=square.js.map