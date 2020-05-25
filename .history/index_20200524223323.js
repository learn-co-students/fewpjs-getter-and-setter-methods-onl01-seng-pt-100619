// Add your Circle class here
const pi = Math.PI

class Circle {
    constructor(radius){
        this.radius = radius;
    }

    get diameter() {
        return this.radius * 2
    }
}

