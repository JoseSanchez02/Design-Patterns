// class CircleRed {
//
// }
//
// class CircleBlue {
//
// }
//
// class SquareRed {
//
// }
//
// class SquareBlue {
//
// }
//
// function main() {
//     const circleRed = new CircleRed();
//     const circleBlue = new CircleBlue();
//     const squareRed = new SquareRed();
//     const squareBlue = new SquareBlue();
// }

class Figure {
    color: Color;
    constructor(color: Color) {
        this.color = color;
    }
}

class Color {
    hexa: string;

}

class Square extends Figure{
    draw() {
        console.log('Drawing square' + this.color.hexa);
    }

}

class Circle extends Figure {
    draw() {
        console.log('Drawing circle' + this.color.hexa);
    }
}

class Red extends Color {
    hexa = '#FF0000';
}

class Blue extends Color {
    hexa = '#0000FF';
}

function main() {
    const red = new Red();
    const blue = new Blue();
    const circle = new Circle(red);
    const square = new Square(blue);
    circle.draw();
    square.draw();
}


