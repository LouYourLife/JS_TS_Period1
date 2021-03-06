// Callbacks:

/* console.log("2a) ")
var ages = [32, 33, 16, 40];

function checkAge(age) {
    return age >= 18;
}

function myFilter(array, callback) {
    var newArr = [];
    for (let i = 0; i < array.length; i++) {
        if(callback(array[i]) === true) {
            newArr.push(array[i]);
        }
    }
    console.log(newArr);
}

myFilter(ages, checkAge); */

/* console.log("2b)");
var numbers = [4, 9, 16, 25];
function myMap(array, callback) {
    var newArr2 = [];
    for (let i = 0; i < array.length; i++) {
        newArr2.push(callback(array[i]));
    }
    console.log(newArr2);
}

myMap(numbers, Math.sqrt); */

/* console.log("3)");
// NOT DONE!!
var names = ["Lars", "Peter", "Tine", "Sofie"];
var newArray = names.myFilter(function(name) {
    var newArr3 = [];
    newArr3 = names.sort();
    return newArr3;
}); */

// Reduce:
/* console.log("a)");
var all = ["Lars", "Peter", "Tine", "Sofie"];
var x = all.join(", ");
console.log(x);
var x2 = all.join(" - ");
console.log(x2);
var x3 = all.join(" # ");
console.log(x3); */

/* console.log("b)");
var numbers = [2, 3, 67, 33];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log("Test:")
console.log(numbers.reduce(reducer));
function myReduce(array) {
    var accu = 0;
    for (let i = 0; i < array.length; i++) {
        accu += array[i];
    }
    console.log(accu);
}
console.log("myReduce:")
myReduce(numbers); */

/* console.log("c)");
let members = [
    {name: "Peter", age: 18},
    {name: "Jan", age: 35},
    {name: "Tine", age: 25},
    {name: "Martin", age: 22}
];
function myReducer(array) {
    var accu = 0;
    for (let i = 0; i < array.length; i++) {
        accu += array[i].age;
    }
    accu = accu / array.length;
    console.log(accu);
}
myReducer(members); */

//console.log("d) Maybe do later");

// Hoisting
// Group work??

// "this" in JavaScript
var person1 = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
var person2 = {
  firstName: "John",
  lastName: "Doe",
};
var x = person1.fullName.call(person2);
console.log(x);

// Reusable Modules with Closures
function makeFunc() {
  //var name = "Mozilla";

  function logName() {
    console.log(name);
  }
  function changeName(n) {
    name = n;
  }
  var name = "Mozilla";
  return {
    logName,
    changeName,
  };
}
makeFunc().logName();

function init() {
  var name = "Closure test"; // name is a local variable created by init
  function displayName() { // displayName() is the inner function, a closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();

function sum(...theArgs) {
    return theArgs.reduce((previous, current) => {
      return previous + current;
    });
  }
  
  console.log(sum(1, 2, 3));
  // expected output: 6
  
  console.log(sum(1, 2, 3, 4));
  // expected output: 10


  let a, b, rest;
  [a, b] = [10, 20];
  
  console.log(a);
  // expected output: 10
  
  console.log(b);
  // expected output: 20
  
  [a, b, ...rest] = [10, 20, 30, 40, 50];
  
  console.log(rest);
  // expected output: Array [30,40,50]



  function waitABit() {
    setTimeout(() => console.log("Done waiting"), 1000)
  }
  function multiply(a, b) {
    let result = a * b;
    waitABit();
    return result;
  }
   
  function square(n) {
    return multiply(n, n)
  }
   
  function printSquare(n) {
    const notUsed = "Hello"
    let squared = square(n);
    console.log(squared)
  }
   
  printSquare(4)
  