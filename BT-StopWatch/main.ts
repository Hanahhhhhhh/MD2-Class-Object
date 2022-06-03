import {StopWatch} from "./StopWatch";

let stopwatch: StopWatch = new StopWatch();
stopwatch.start();
let sum = 0;
for (let i = 0; i < 100000000000; i++) {
    sum += i;
}
stopwatch.start();
console.log(stopwatch.getElapsedTime());