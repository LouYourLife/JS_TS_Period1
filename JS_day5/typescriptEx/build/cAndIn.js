"use strict";
class Shape {
    constructor(color) {
        this._color = color;
    }
    getColor() { return this._color; }
    ;
    setColor(color) { return this._color = color; }
    ;
    toString() { return `Color: ${this._color}`; }
    ;
}
class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
    get getRad() { return this.radius; }
    setRad(rad) { this.radius = rad; }
    get area() {
        return (3.14 * (this.radius * this.radius));
    }
    get perimeter() {
        return (3.14 * (2 * this.radius));
    }
}
class Cylinder extends Circle {
    constructor(color, radius, height) {
        super(color, radius);
        this.height = height;
    }
    get getRad() { return this.radius; }
    setRad(rad) { this.radius = rad; }
    get getHeight() { return this.height; }
    setHeight(h) { this.height = h; }
    get area() {
        return (3.14 * (this.radius * this.radius));
    }
    get perimeter() {
        throw new Error("Not Implemented");
    }
    get volume() {
        return (this.height * 3.14 * (this.radius * this.radius));
    }
}
const cy = new Cylinder("blue", 5, 7);
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
//# sourceMappingURL=cAndIn.js.map