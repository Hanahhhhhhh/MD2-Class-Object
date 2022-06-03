export class Circle {
    color: string;
    radius: number;
    filled: boolean;
    constructor(color: string,
    radius: number,
    filled: boolean) {
        this.color =color;
        this.radius = radius;
        this.filled = filled;
    }
    getAre(): number {
        return this.radius *this.radius*Math.PI;
    }
    getPerimeter(): number{
        return 2 *this.radius * Math.PI
    }
}
let circle = new Circle("blue",3.5,false);
console.log(circle);