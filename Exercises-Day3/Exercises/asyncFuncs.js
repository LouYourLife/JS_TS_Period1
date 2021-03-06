const URL = "https://swapi.dev/api/people/";
const fetch = require("node-fetch");
var now = require("performance-now");

function fetchPerson(url) {
  return (person = fetch(url).then((res) => res.json()));
}

async function printNames() {
  var start = now();
  console.log("Before");
  const person1 = await fetchPerson(URL + "1");
  const person2 = await fetchPerson(URL + "2");
  console.log(person1.name);
  console.log(person2.name);
  console.log("After all");
  var end = now();
  console.log(start.toFixed());
  console.log((start - end).toFixed());
}

function printNamesPar() {
  var start = now();
  console.log("Before");
  const person1 = fetchPerson(URL + "1");
  const person2 = fetchPerson(URL + "2");
  Promise.all([person1, person2])
    .then((values) => {
      console.log(values);
    })
    .catch((err) => console.log(err));
  console.log("After all");
  var end = now();
  console.log(start.toFixed());
  console.log((start - end).toFixed());
}

printNames();
