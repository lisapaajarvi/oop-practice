abstract class Shape {
    public abstract calculateArea(): number;
    public abstract calculatePerimeter(): number;
}

class Rectangle extends Shape{
    public width: number
    public height: number
 
    constructor(width: number, height: number) {
        super();
        this.width = width
        this.height = height
    }

    public calculateArea() {
        return this.width * this.height;
    }

    public calculatePerimeter() {
        return this.width * 2 + this.height * 2;
    }

}


class Circle extends Shape{
    public radius : number

    constructor (radius: number) {
        super();
        this.radius = radius
    }

    calculateArea() {
        let area = this.radius * this.radius * Math.PI;
        return area;
    }

    calculatePerimeter() {
        let perimeter = this.radius * 2 * Math.PI;
        return perimeter;
    }
}

class Triangle extends Shape {
    public width: number
    public height: number
 
    constructor(width: number, height: number) {
        super();
        this.width = width
        this.height = height
    }

    calculateArea() {
        return (this.width * this.height) / 2;
    }

    calculatePerimeter() {
        return this.width + this.height + Math.sqrt(this.height * this.height + this.width * this.width);
    }
}

const shapes: Shape[] = [
new Triangle(4,3),
new Circle(10),
new Rectangle(4,3)
]


for (const shape of shapes) {
    console.log(shape.calculateArea());
    console.log(shape.calculatePerimeter());
}