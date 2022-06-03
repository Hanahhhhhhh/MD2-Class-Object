"use strict";
exports.__esModule = true;
exports.Circle = void 0;
var Circle = /** @class */ (function () {
    function Circle(color, radius, filled) {
        this.color = color;
        this.radius = radius;
        this.filled = filled;
    }
    Circle.prototype.getAre = function () {
        return this.radius * this.radius * Math.PI;
    };
    Circle.prototype.getPerimeter = function () {
        return 2 * this.radius * Math.PI;
    };
    return Circle;
}());
exports.Circle = Circle;
var circle = new Circle("blue", 3.5, false);
console.log(circle);
