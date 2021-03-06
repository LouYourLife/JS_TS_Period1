abstract class Shape {
    private _color:string;
    constructor(color:string){
        this._color = color;
    }
    abstract get area():number;
    abstract get perimeter(): number;
    getColor():string {return this._color};
    setColor(color:string) {return this._color = color};
    toString():string {return `Color: ${this._color}`};
}

class Circle extends Shape {
    radius:number;
    constructor(color:string, radius:number) {
        super(color);
        this.radius = radius;
    }
    get getRad():number {return this.radius}
    setRad(rad:number) {this.radius = rad}
    get area():number {
        return (3.14*(this.radius*this.radius));
    }
    get perimeter():number {
        return (3.14*(2*this.radius));
    }
}

class Cylinder extends Circle {
    height:number;
    constructor(color:string, radius:number, height:number) {
        super(color, radius);
        this.height = height;
    }
    get getRad():number {return this.radius}
    setRad(rad:number) {this.radius = rad}
    get getHeight():number {return this.height}
    setHeight(h:number) {this.height = h}
    get area():number {
        return (3.14*(this.radius*this.radius));
    }
    get perimeter():number {
        throw new Error("Not Implemented");
    }
    get volume():number {
        return (this.height*3.14*(this.radius*this.radius));
    }
}

const cy = new Cylinder("blue",5,7);

console.log(cy.getColor());
console.log(cy.getHeight);
console.log(cy.getRad);
console.log(cy.toString());
console.log(cy.area);
//console.log(cy.perimeter);
console.log(cy.volume);

cy.setColor("green");
cy.setHeight(8);
cy.setRad(2);

console.log(cy.getColor());
console.log(cy.getHeight);
console.log(cy.getRad);
console.log(cy.toString());
console.log(cy.area);
console.log(cy.volume);

/* 
const c = new Circle("red",4);
console.log(c.getColor());
console.log(c.getRad);
console.log(c.toString());
console.log(c.area);
console.log(c.perimeter);
c.setColor("yellow");
console.log(c.getColor());
c.setRad(7);
console.log(c.getRad); 
*/