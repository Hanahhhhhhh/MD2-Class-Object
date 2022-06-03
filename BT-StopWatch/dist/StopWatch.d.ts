export declare class StopWatch {
    private _startTime;
    private _endTime;
    constructor();
    get startTime(): number;
    set startTime(value: number);
    get endTime(): number;
    set endTime(value: number);
    start(): void;
    stop(): void;
    getElapsedTime(): number;
}
