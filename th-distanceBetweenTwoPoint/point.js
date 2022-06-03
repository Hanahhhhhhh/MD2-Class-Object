class Point {
    get y() {
        return this._y;
    }

    set y(value) {
        this._y = value;
    }
    constructor(x,y) {

        this._y = y;
    }
    displayName = "Point";
    distance (b) {
        const dx = this.x -b.x;
        const dy = this.y -b.y;
        return Math.hypot(dx, dy);
    }
}
let p1 = new Point(5,5);
let p2 = new Point (10,10);
console.log(p1.displayName);
console.log(p1.distance(p2));
