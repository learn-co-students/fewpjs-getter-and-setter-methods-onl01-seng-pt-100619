// Add your Circle class here
class Circle {
    constructor(radius){
        this.radius = radius
    }

    get diameter() {
        return 2 * this.radius
    }

    get circumference() {
        return 2 * Math.PI * this.radius
    }

    get area() {
        return Math.PI * this.radius**2
    }

    set diameter(newDiameter) {
        if(newDiameter > 0){
            this.radius = newDiameter/2
        }
    }

    set circumference(newCircumference) {
        if(newCircumference > 0){
            this.radius = newCircumference/Math.PI/2
        }
    }
}