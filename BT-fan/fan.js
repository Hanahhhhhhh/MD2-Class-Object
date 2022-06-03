"use strict";
exports.__esModule = true;
exports.Speed = exports.Fan = void 0;
var Fan = /** @class */ (function () {
    function Fan(speed, status, radius, color) {
        this._radius = 5;
        this._color = "blue";
        this._speed = speed;
        this._status = status;
        this._radius = radius;
        this._color = color;
    }
    Fan.prototype.getStatus = function () {
        if (this._status)
            return "on";
        return "off";
    };
    Fan.prototype.toString = function () {
        console.log("the fan speed is at ".concat(this._speed, ", it is in ").concat(this._color, " color,\n                    its radius is ").concat(this._radius, ". Lastly, the fan is ").concat(this.getStatus()));
    };
    return Fan;
}());
exports.Fan = Fan;
var Speed;
(function (Speed) {
    Speed[Speed["SLOW"] = 0] = "SLOW";
    Speed[Speed["MEDIUM"] = 1] = "MEDIUM";
    Speed[Speed["FAST"] = 2] = "FAST";
})(Speed = exports.Speed || (exports.Speed = {}));
var fan1 = new Fan(3, true, 10, "Yellow");
var fan2 = new Fan(2, false, 5, "blue");
console.log(fan1.toString());
console.log(fan2.toString());
