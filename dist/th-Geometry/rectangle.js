"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
class Rectangle {
    constructor(width, length, color, filled) {
        this.color = color;
        this.filled = filled;
        this.width = width;
        this.length = length;
    }
    getArea() {
        return this.width * this.length;
    }
    getPerimeter() {
        return 2 * (this.width + this.length);
    }
}
exports.Rectangle = Rectangle;
let rectangle = new Rectangle(5, 10, 'red', true);
console.log(rectangle);
//# sourceMappingURL=rectangle.js.map