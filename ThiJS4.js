class Shape {
    constructor(name, sides, sideLength) {
        this.game = name;
        this.sides = sides;
        this.sideLength = sideLength;
    }
    calcPerimeter() {
        let x = (this.sides * this.sideLength)
        console.log(this.game);
        console.log(x);
        return x;
    }
}


//let name = "ChuNhat";
//let sides = 3;
//let sideLength = 5;

let CV = new Shape("ChuNhat", 3, 5)
CV.calcPerimeter();
let square = new Shape("square", 5, 5)
square.calcPerimeter();
let triangle = new Shape("square", 5, 5)
triangle.calcPerimeter();