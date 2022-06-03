"use strict";
exports.__esModule = true;
var StopWatch_1 = require("./StopWatch");
var stopwatch = new StopWatch_1.StopWatch();
stopwatch.start();
var sum = 0;
for (var i = 0; i < 100000000000; i++) {
    sum += i;
}
stopwatch.start();
console.log(stopwatch.getElapsedTime());
