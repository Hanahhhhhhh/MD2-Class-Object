"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StopWatch_1 = require("./StopWatch");
let stopwatch = new StopWatch_1.StopWatch();
stopwatch.start();
let sum = 0;
for (let i = 0; i < 100000000000; i++) {
    sum += i;
}
stopwatch.start();
console.log(stopwatch.getElapsedTime());
//# sourceMappingURL=main.js.map