"use strict";
exports.__esModule = true;
exports.Square = void 0;
var Square = /** @class */ (function () {
    function Square(color, filled, side) {
        this.color = color;
        this.filled = filled;
        this.side = side;
    }
    return Square;
}());
exports.Square = Square;
var square = new Square('white', true, 6);
console.log(square);
