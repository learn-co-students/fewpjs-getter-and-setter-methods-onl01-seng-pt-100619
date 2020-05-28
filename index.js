// Add your Circle class here

const pi = Math.PI
class Circle {
    constructor(radius){
        this.radius = radius;
    }

    get diameter(){
        return this.radius * 2;
    }

    set diameter(d){
        this.radius = d / 2;
    }

    get circumference(){
        return 2 * pi * this.radius;
    }

    set circumference(c){
        return this.radius = c/(2 * pi);
    }

    get area(){
        return (this.radius * this.radius) * pi;
    }

    set area(a){
        return this.radius = Math.sqrt(a/pi);
    }


}