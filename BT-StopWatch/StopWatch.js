"use strict";
exports.__esModule = true;
exports.StopWatch = void 0;
var StopWatch = /** @class */ (function () {
    function StopWatch() {
        this._endTime = 0;
        this._startTime = new Date().getMilliseconds();
    }
    Object.defineProperty(StopWatch.prototype, "startTime", {
        get: function () {
            return this._startTime;
        },
        set: function (value) {
            this._startTime = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(StopWatch.prototype, "endTime", {
        get: function () {
            return this._endTime;
        },
        set: function (value) {
            this._endTime = value;
        },
        enumerable: false,
        configurable: true
    });
    StopWatch.prototype.start = function () {
        this._startTime = new Date().getMilliseconds();
    };
    StopWatch.prototype.stop = function () {
        this._endTime = new Date().getMilliseconds();
    };
    StopWatch.prototype.getElapsedTime = function () {
        return this._endTime - this._startTime;
    };
    return StopWatch;
}());
exports.StopWatch = StopWatch;
