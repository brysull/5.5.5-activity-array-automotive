//Dr. Javascript (or) How I learned to fight with brackets and spelling errors instead of writing code

//this includes the vehicle class as a module
const VehicleModule = require("./vehicle")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Auto extends vehicle {
    super(make, model, year, color, mileage) {
        this.maximumPassengers = 6;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 200;
        this.fuel = 100;
        this.scheduleService = false;
}

loadPassenger(psgrs) {
    if (this.passenger < this.maximumPassengers) {
        if ((psgrs + this.passenger <= this.maximumPassengers) {
            this.passenger = psgrs;
            return this.passenger;
        } else {
            console.log("Get out the car. There ain't no more room!");
        }
    }
}

start() {
    if (this.fuel > 0) {
        console.log("Car has started baby!")
    } else { console.log("You are out of gas. Better call Mom!");
}
}
}
