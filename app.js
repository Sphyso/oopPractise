//Car class prac
class Vehicle{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    carDetails() {
        console.log(`The car make is: ${this.make}, model is: ${this.model} and the years is: ${this.year}`);
    }
}

class Car extends Vehicle{
    constructor(make, model, year, numOfDoors){
        super(make, model, year);
        this.numOfDoors = numOfDoors;
        
    }

    carDetails() {
        super.carDetails();
        console.log(`Number of doors ${this.numOfDoors}`);
    }
}
/*Car class
let myCar = new Car("Lamborghini", "Aventador", 2012, 2);
let myCar2 = new Car("BMW", "M2", 2021, 2);
console.log(myCar)*/

class Shape {
    constructor(radius, length, width) {
        this.radius = radius;
        this.length = length;
        this.width = width;

    }

    area(){
        console.log("The area is: ")
    }
}

class Circle extends Shape{
    constructor(radius){
        super(radius)
        const pi = 3.14;
    }

    area(){
        super.area();
        let area = this.pi * (this.radius**2);
        console.log("Circle: " +area);
    }
}

class Rectangle extends Shape {
    constructor(length, width){
        super(length, width);
        if(length == width){
            alert("Length and width cannot be equal");
        } else {
            this.length = length;
            this.width = width;
        }
    }

    area(){
        super.area();
        let area = this.length * this.width;
        console.log("Rectangle: " +area);
    }
}

let circleOne = new Circle(5);
let rect = new Rectangle(5, 6);