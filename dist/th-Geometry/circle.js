"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
class Circle {
    constructor(color, radius, filled) {
        this.color = color;
        this.radius = radius;
        this.filled = filled;
    }
    getAre() {
        return this.radius * this.radius * Math.PI;
    }
    getPerimeter() {
        return 2 * this.radius * Math.PI;
    }
}
exports.Circle = Circle;
let circle = new Circle("blue", 3.5, false);
console.log(circle);
//# sourceMappingURL=circle.js.map