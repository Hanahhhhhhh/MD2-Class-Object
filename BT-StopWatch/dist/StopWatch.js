"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StopWatch = void 0;
class StopWatch {
    constructor() {
        this._endTime = 0;
        this._startTime = new Date().getMilliseconds();
    }
    get startTime() {
        return this._startTime;
    }
    set startTime(value) {
        this._startTime = value;
    }
    get endTime() {
        return this._endTime;
    }
    set endTime(value) {
        this._endTime = value;
    }
    start() {
        this._startTime = new Date().getMilliseconds();
    }
    stop() {
        this._endTime = new Date().getMilliseconds();
    }
    getElapsedTime() {
        return this._endTime - this._startTime;
    }
}
exports.StopWatch = StopWatch;
//# sourceMappingURL=StopWatch.js.map