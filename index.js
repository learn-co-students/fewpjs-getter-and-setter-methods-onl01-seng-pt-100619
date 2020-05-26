class Circle{
    constructor(radius){
        this.radius = radius
    }

    get diameter(){
        // radius * 2
        return this.radius * 2
    }

    set diameter(d){
        this.radius = d/2
    }

    get circumference(){
        // pi * diameter
        return Math.PI * this.diameter
    }

    set circumference(c){
        this.radius = c / (Math.PI * 2)
    }

    get area(){
        // pi * radius,squared
        return Math.PI * Math.pow(this.radius,2)
    }

    set area( area ) {
        this.radius = Math.sqrt( area / pi )
      }
}