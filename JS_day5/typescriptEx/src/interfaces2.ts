interface IMyFunc {
    string1: string;
    string2: string;
    string3: string;
}

function myFunc(f: IMyFunc) {
    return [f.string1, f.string2, f.string3];
}
const myArr = {string1:"aa", string2:"bb", string3:"cc"};
const myArray = myFunc(myArr);

console.log("2b)");
console.log(myArray);

function upperCased(f: IMyFunc) {
    return [f.string1.toUpperCase(), f.string2.toUpperCase(), f.string3.toUpperCase()];
}
const myArr2 = upperCased(myArr);
console.log("2c)");
console.log(myArr2);

let f2 = function logger(f1: IMyFunc){
    //Simulate that we get data from somewhere and uses the provided function
    let [ a, b, c] = ["A", "B", "C"];
    console.log(myFunc(f1));
}

console.log("2e) ???");