"use strict";
exports.__esModule = true;
exports.QuadraticEquation = void 0;
var QuadraticEquation = /** @class */ (function () {
    function QuadraticEquation(a, b, c) {
        this._a = a;
        this._b = b;
        this._c = c;
    }
    QuadraticEquation.prototype.getA = function () {
        return this._a;
    };
    QuadraticEquation.prototype.getB = function () {
        return this._b;
    };
    QuadraticEquation.prototype.getC = function () {
        return this._c;
    };
    QuadraticEquation.prototype.getDelta = function () {
        return Math.pow(this.getB(), 2) - 4 * this.getA() * this.getC();
    };
    QuadraticEquation.prototype.getRoot1 = function () {
        return (-this.getB() - Math.sqrt(this.getDelta()) / 2 * this.getA());
    };
    QuadraticEquation.prototype.getRoot2 = function () {
        return (-this.getB() + Math.sqrt(this.getDelta()) / 2 * this.getA());
    };
    QuadraticEquation.prototype.getDiscriminant = function () {
        var delta = this.getDelta();
        if (this.getA() === 0) {
            var currentRoot = -this.getC() / this.getB();
            console.log("this is not Quadratic Equation, it has 1 roots as " + currentRoot);
        }
        else if (delta < 0) {
            console.log("The equation has no roots");
        }
        else if (delta === 0) {
            var x = -this.getB() / (2 * this.getA());
            console.log("The equation has 1 root = " + x);
        }
        else {
            console.log("The equation has 2 roots are " + this.getRoot1() + ", " + this.getRoot2());
        }
    };
    return QuadraticEquation;
}());
exports.QuadraticEquation = QuadraticEquation;
var equation1 = new QuadraticEquation(1, -10, 20);
var equation2 = new QuadraticEquation(2, 4, 3);
var equation3 = new QuadraticEquation(5, 8, 4);
var equation4 = new QuadraticEquation(0, -19, 12);
equation1.getDiscriminant();
equation2.getDiscriminant();
equation3.getDiscriminant();
equation4.getDiscriminant();
