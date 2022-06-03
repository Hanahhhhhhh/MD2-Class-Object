export declare class Fan {
    _speed: Speed;
    private readonly _status;
    _radius: number;
    _color: string;
    constructor(speed: Speed, status: boolean, radius?: number, color?: string);
    getStatus(): any;
    toString(): void;
}
export declare enum Speed {
    SLOW = 0,
    MEDIUM = 1,
    FAST = 2
}
