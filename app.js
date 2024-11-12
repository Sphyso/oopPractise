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

let myCar = new Car("Lamborghini", "Aventador", 2012, 2);
let myCar2 = new Car("BMW", "M2", 2021, 2);
console.log(myCar)