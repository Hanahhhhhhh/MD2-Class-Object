"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuadraticEquation = void 0;
class QuadraticEquation {
    constructor(a, b, c) {
        this._a = a;
        this._b = b;
        this._c = c;
    }
    getA() {
        return this._a;
    }
    getB() {
        return this._b;
    }
    getC() {
        return this._c;
    }
    getDelta() {
        return Math.pow(this.getB(), 2) - 4 * this.getA() * this.getC();
    }
    getRoot1() {
        return (-this.getB() - Math.sqrt(this.getDelta()) / 2 * this.getA());
    }
    getRoot2() {
        return (-this.getB() + Math.sqrt(this.getDelta()) / 2 * this.getA());
    }
    getDiscriminant() {
        let delta = this.getDelta();
        if (this.getA() === 0) {
            let currentRoot = -this.getC() / this.getB();
            console.log("this is not Quadratic Equation, it has 1 roots as " + currentRoot);
        }
        else if (delta < 0) {
            console.log("The equation has no roots");
        }
        else if (delta === 0) {
            let x = -this.getB() / (2 * this.getA());
            console.log("The equation has 1 root = " + x);
        }
        else {
            console.log("The equation has 2 roots are " + this.getRoot1() + ", " + this.getRoot2());
        }
    }
}
exports.QuadraticEquation = QuadraticEquation;
let equation1 = new QuadraticEquation(1, -10, 20);
let equation2 = new QuadraticEquation(2, 4, 3);
let equation3 = new QuadraticEquation(5, 8, 4);
let equation4 = new QuadraticEquation(0, -19, 12);
equation1.getDiscriminant();
equation2.getDiscriminant();
equation3.getDiscriminant();
equation4.getDiscriminant();
//# sourceMappingURL=QuadraticEquation.js.map