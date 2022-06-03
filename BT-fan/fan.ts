export class Fan {
    _speed:Speed
    private readonly _status:boolean
    _radius: number = 5;
    _color:string = "blue"

    constructor(speed: Speed, status: boolean, radius ?: number, color ?: string) {
        this._speed = speed;
        this._status = status;
        this._radius = radius;
        this._color = color;
    }
    getStatus(): any {
        if (this._status)
            return "on";
        return "off";
    }

    toString(){
        console.log(`the fan speed is at ${this._speed}, it is in ${this._color} color,
                    its radius is ${this._radius}. Lastly, the fan is ${this.getStatus()}`)
    }

}

export enum Speed {SLOW,MEDIUM,FAST}


let fan1 = new Fan(3,true ,10, "Yellow" )
let fan2 = new Fan(2,false ,5, "blue")
console.log(fan1.toString());
console.log(fan2.toString());
