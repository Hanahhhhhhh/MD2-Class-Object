"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Speed = exports.Fan = void 0;
class Fan {
    constructor(speed, status, radius, color) {
        this._radius = 5;
        this._color = "blue";
        this._speed = speed;
        this._status = status;
        this._radius = radius;
        this._color = color;
    }
    getStatus() {
        if (this._status)
            return "on";
        return "off";
    }
    toString() {
        console.log(`the fan speed is at ${this._speed}, it is in ${this._color} color,
                    its radius is ${this._radius}. Lastly, the fan is ${this.getStatus()}`);
    }
}
exports.Fan = Fan;
var Speed;
(function (Speed) {
    Speed[Speed["SLOW"] = 0] = "SLOW";
    Speed[Speed["MEDIUM"] = 1] = "MEDIUM";
    Speed[Speed["FAST"] = 2] = "FAST";
})(Speed = exports.Speed || (exports.Speed = {}));
let fan1 = new Fan(3, true, 10, "Yellow");
let fan2 = new Fan(2, false, 5, "blue");
console.log(fan1.toString());
console.log(fan2.toString());
//# sourceMappingURL=fan.js.map