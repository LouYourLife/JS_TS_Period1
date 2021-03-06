const fetch = require("node-fetch");

// ???
/* function getPlanetforFirstSpeciesInFirstMovieForPerson(id) {
    const URL = "https://swapi.dev/api/people/";
    try {
        const n = fetch(URL + id).then(res => res.json());
        const f = setTimeout(fetch(n.films[0]).then(res => res.json()), 2000);
        const s = setTimeout(fetch(f.species[0]).then(res => res.json()), 3000);
        const p = setTimeout(fetch(s.homeworld).then(res => res.json()), 4000);
        //Promise.all(n1.name, f1.title, s1.name, p1.name);
    } catch (err) {
        console.log(err);
    }
} */

async function getPlanetforFirstSpeciesInFirstMovieForPersonAsync(id) {
  const URL = "https://swapi.dev/api/people/";
  try {
    const n = await fetch(URL + id).then((res) => res.json());
    const f = await fetch(n.films[0]).then((res) => res.json());
    const s = await fetch(f.species[0]).then((res) => res.json());
    const p = await fetch(s.homeworld).then((res) => res.json());
    return (
      "Name: " +
      n.name +
      ", Title: " +
      f.title +
      ", Species: " +
      s.name +
      ", Homeworld: " +
      p.name
    );
  } catch (err) {
    console.log(err.type);
  }
}

/* fetch("https://swapi.dev/api/people/1/")
.then(res=>res.json())
.then(data=>console.log(data)); */

getPlanetforFirstSpeciesInFirstMovieForPersonAsync(1)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
