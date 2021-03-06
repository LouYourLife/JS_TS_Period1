"use strict";
function reverseArr(a) {
    return a.reverse();
}
console.log("a)");
console.log(reverseArr(["a", "b", "c"]));
console.log(reverseArr([1, 2, 3]));
console.log(reverseArr([true, true, false]));
//console.log(reverseArr<number>(["a","b","c"]));
console.log("b)");
class DataHolder {
    constructor(val) { this.val = val; }
    getValue() { return this.val; }
    setValue(val) { this.val = val; }
    ;
}
let d = new DataHolder("Hello");
console.log(d.getValue());
d.setValue("World");
console.log(d.getValue());
let d2 = new DataHolder(123);
console.log(d2.getValue());
d2.setValue(500);
console.log(d2.getValue());
/* let d = new DataHolder<string>("Hello");
console.log(d.getValue());
d.setValue("World");
console.log(d.getValue());

let d2 = new DataHolder<number>(123);
console.log(d2.getValue());
d2.setValue(500);
console.log(d2.getValue()); */ 
//# sourceMappingURL=generics.js.map