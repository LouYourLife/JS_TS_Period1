"use strict";
/*
function logger(a, b){
    console.log(`Value 1: ${a}, value 2: ${b}`);
}
let a = 12, b = "Hello World";
logger(a, b);
*/
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _name;
function loggerV3(a, b) {
    console.log(`Value 1: ${a.name}, value 2: ${b.street}`);
}
class Person {
    constructor(name) {
        //private _name : String;
        _name.set(this, void 0);
        __classPrivateFieldSet(this, _name, name);
    }
    get name() { return __classPrivateFieldGet(this, _name); }
    set name(name) { __classPrivateFieldSet(this, _name, name); }
    toString() { return __classPrivateFieldGet(this, _name); }
}
_name = new WeakMap();
class Address {
    constructor(street) { this._street = street; }
    get street() { return this._street; }
    set street(street) { this._street = street; }
    toString() { return this._street; }
}
let p1 = new Person("Kurt Wonnegut");
let a1 = new Address("Lyngby Hovedgade 23");
loggerV3(p1, a1);
// Dum udgave
function loggerV4(a, b) {
    console.log(`Value 1: ${a}, value 2: ${b}`);
}
const a = 1;
const b = "Hi";
loggerV4(a, b);
loggerV4(p1, a1);
// Array<T>
// T og U kan være hvad som helst, det bliver bare oftest kaldet T og U
class GenericLogger {
    constructor() {
        this.log = (a, b) => console.log(`Value 1: ${a}, value 2: ${b}`);
    }
    ;
}
const personLogger = new GenericLogger();
personLogger.log(p1, a1);
const whateverLogger = new GenericLogger();
whateverLogger.log(34, "lll");
//# sourceMappingURL=logger.js.map