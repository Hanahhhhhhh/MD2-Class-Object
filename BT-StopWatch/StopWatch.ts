export class StopWatch {
    private _startTime :number;
    private _endTime:number =0;


    constructor() {
        this._startTime =new Date().getMilliseconds()
    }

    get startTime(): number {
        return this._startTime;
    }

    set startTime(value: number) {
        this._startTime = value;
    }

    get endTime(): number {
        return this._endTime;
    }

    set endTime(value: number) {
        this._endTime = value;
    }
    start (): void {
        this._startTime = new Date().getMilliseconds();
    }
    stop (): void{
        this._endTime =new Date().getMilliseconds();
    }
    getElapsedTime(): number {
        return this._endTime - this._startTime;
    }
}
